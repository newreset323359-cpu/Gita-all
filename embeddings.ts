/**
 * Deterministic, dependency-free text embedding.
 *
 * The library ships with a local "semantic" layer so that retrieval works with
 * zero external services: tokens are folded (diacritics, IAST, Devanagari kept
 * separate), stemmed with a light Sanskrit suffix stripper, and hashed into a
 * fixed 256-dimension space together with character trigrams. Cosine similarity
 * over these vectors already behaves like topical retrieval, and the interface
 * is deliberately the same as a hosted embedding model so a real model
 * (bge-m3, multilingual-e5) can be dropped in by implementing `embed`.
 */
import { tokens, stem } from '../lib/normalize.js';

export const DIM = 256;

function hash(str: string, seed = 0): number {
  let h = 2166136261 ^ seed;
  for (let i = 0; i < str.length; i++) {
    h ^= str.charCodeAt(i);
    h = Math.imul(h, 16777619);
  }
  return h >>> 0;
}

export function embed(text: string): Float32Array {
  const v = new Float32Array(DIM);
  if (!text) return v;
  const toks = tokens(text);
  for (const raw of toks) {
    const t = stem(raw);
    // token feature
    v[hash(t) % DIM] += 1.0;
    // prefix feature (helps morphological variation)
    if (t.length > 3) v[hash(t.slice(0, 3), 7) % DIM] += 0.5;
    // character trigrams
    const padded = `^${t}$`;
    for (let i = 0; i + 3 <= padded.length; i++) {
      v[hash(padded.slice(i, i + 3), 13) % DIM] += 0.25;
    }
  }
  // L2 normalise
  let norm = 0;
  for (let i = 0; i < DIM; i++) norm += v[i] * v[i];
  norm = Math.sqrt(norm) || 1;
  for (let i = 0; i < DIM; i++) v[i] /= norm;
  return v;
}

export function serializeVector(v: Float32Array): Buffer {
  return Buffer.from(v.buffer.slice(0));
}

export function deserializeVector(buf: Buffer): Float32Array {
  return new Float32Array(buf.buffer.slice(buf.byteOffset, buf.byteOffset + buf.byteLength));
}

export function cosine(a: Float32Array, b: Float32Array): number {
  let s = 0;
  const n = Math.min(a.length, b.length);
  for (let i = 0; i < n; i++) s += a[i] * b[i];
  return s;
}

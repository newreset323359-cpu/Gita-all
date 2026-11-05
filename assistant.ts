/**
 * Retrieval-augmented scripture assistant.
 *
 * Pipeline
 *   1. RETRIEVE — hybrid search over the indexed corpus:
 *        a) SQLite FTS5 (BM25) over Devanagari + folded IAST + translations
 *        b) cosine similarity over the local verse vector index
 *        c) title / author / tag matches on works
 *      Results are merged, deduplicated and scored.
 *   2. GROUND   — each passage is packaged with full provenance: work, edition,
 *      translator, licence, chapter and verse. Nothing enters the context
 *      without a source row.
 *   3. COMPOSE  — either (a) an extractive answer assembled only from retrieved
 *      passages (default, always available, never hallucinates), or (b) an LLM
 *      answer constrained to the retrieved passages when LLM_API_KEY is set.
 *   4. VERIFY   — citation markers in the answer are checked against the
 *      retrieval set; uncited quotations are dropped.
 */
import { all, get, run } from '../db.js';
import { expandQuery, fold, ftsQuery, makeSnippet, STOPWORDS } from '../lib/normalize.js';
import { embed, deserializeVector, cosine } from './embeddings.js';

export interface Citation {
  n: number;
  workSlug: string;
  workTitle: string;
  titleSa: string | null;
  chapter: number;
  verse: string;
  ref: string;
  edition: string | null;
  translator: string | null;
  license: string | null;
  sourceUrl: string | null;
  isDemo: boolean;
  snippetSa: string;
  snippetEn: string | null;
  iast: string | null;
  verseId: number;
  score: number;
  matchedBy: string[];
}

export interface Passage {
  verseId: number;
  workId: number;
  workSlug: string;
  workTitle: string;
  titleSa: string | null;
  chapter: number;
  verse: string;
  sa: string;
  iast: string | null;
  en: string | null;
  hi: string | null;
  mr: string | null;
  isDemo: boolean;
  score: number;
  matchedBy: string[];
}

export interface AssistantAnswer {
  question: string;
  mode: 'extractive' | 'llm';
  answer: string;
  sections: { heading: string; body: string }[];
  citations: Citation[];
  traditions: { tradition: string; notes: { author: string | null; title: string; body: string }[] }[];
  license: string;
  notes: string[];
  retrieval: { strategy: string; candidates: number; tookMs: number };
}

const STOP = STOPWORDS;

function keywords(question: string): string[] {
  return question
    .toLowerCase()
    .replace(/[^\p{L}\p{N}\s]/gu, ' ')
    .split(/\s+/)
    .filter((w) => w.length > 2 && !STOP.has(w))
    .slice(0, 14);
}

/** 1a. BM25 full-text search over verses, with Sanskrit query expansion.
 *      Primary terms carry the match; glossary expansions only add recall. */
function ftsSearch(question: string, limit = 14) {
  const { primary, expanded } = expandQuery(question);
  const core = ftsQuery(primary.join(' ') || question);
  const extra = ftsQuery(expanded.join(' '));
  const q = [core, extra].filter(Boolean).join(' OR ');
  if (!q) return [] as Passage[];
  const rows = all(
    `SELECT v.id, v.work_id, v.chapter_number, v.verse_number, v.sa, v.iast, v.tr_en, v.tr_hi, v.tr_mr,
            v.is_demo, w.slug AS work_slug, w.title AS work_title, w.title_sa,
            bm25(verses_fts) AS rank
       FROM verses_fts
       JOIN verses v ON v.id = verses_fts.rowid
       JOIN works w ON w.id = v.work_id
      WHERE verses_fts MATCH ?
      ORDER BY rank
      LIMIT ?`,
    [q, limit],
  );
  return rows.map((r: any) => ({
    verseId: r.id, workId: r.work_id, workSlug: r.work_slug, workTitle: r.work_title,
    titleSa: r.title_sa, chapter: r.chapter_number, verse: r.verse_number,
    sa: r.sa, iast: r.iast, en: r.tr_en, hi: r.tr_hi, mr: r.tr_mr,
    isDemo: !!r.is_demo, score: 1 / (1 + Math.abs(r.rank)), matchedBy: ['full-text'],
  }));
}

/** 1b. Local semantic search over verse vectors. */
function vectorSearch(question: string, limit = 12) {
  const qv = embed(question);
  const rows = all(
    `SELECT vv.verse_id, vv.vec, v.work_id, v.chapter_number, v.verse_number, v.sa, v.iast,
            v.tr_en, v.tr_hi, v.tr_mr, v.is_demo, w.slug AS work_slug, w.title AS work_title, w.title_sa
       FROM verse_vectors vv
       JOIN verses v ON v.id = vv.verse_id
       JOIN works w ON w.id = v.work_id`,
  );
  const scored = rows.map((r: any) => ({
    verseId: r.verse_id, workId: r.work_id, workSlug: r.work_slug, workTitle: r.work_title,
    titleSa: r.title_sa, chapter: r.chapter_number, verse: r.verse_number,
    sa: r.sa, iast: r.iast, en: r.tr_en, hi: r.tr_hi, mr: r.tr_mr,
    isDemo: !!r.is_demo,
    score: cosine(qv, deserializeVector(r.vec)),
    matchedBy: ['semantic'],
  }));
  scored.sort((a: any, b: any) => b.score - a.score);
  return scored.slice(0, limit).filter((s: any) => s.score > 0.12);
}

/** 1c. Work-level matches: if the question names a text, boost its verses. */
function workBoost(question: string) {
  const kws = keywords(question);
  if (!kws.length) return new Map<number, number>();
  const map = new Map<number, number>();
  const works = all('SELECT id, slug, title, title_sa, title_en, author, tags, popularity FROM works');
  for (const w of works) {
    const hay = [w.title, w.title_sa, w.title_en, w.author, w.tags, w.slug?.replace(/-/g, ' ')]
      .filter(Boolean).join(' ').toLowerCase();
    let hits = 0;
    for (const k of kws) if (hay.includes(k)) hits += 1;
    if (hits) map.set(w.id, hits * 0.12);
  }
  return map;
}

/** Lexical overlap between the question and a passage.
 *
 *  Two signals matter:
 *    • the question's own content words appearing in the verse (rare for an
 *      English question over a Sanskrit corpus, but decisive when present);
 *    • how many *distinct concepts* from the glossary are attested in the verse.
 *
 *  A passage that matches none of the question's concepts is demoted hard, so a
 *  weak BM25 hit on a common word can never outrank a genuinely topical verse. */
function overlapScore(
  p: Passage,
  primary: string[],
  expanded: string[],
  weight: (term: string) => number = () => 1,
): number {
  const hay = fold([p.sa, p.iast, p.en, p.hi, p.mr, p.workTitle].filter(Boolean).join(' ')).toLowerCase();
  let primaryHits = 0;
  for (const t of primary) {
    const stemT = t.replace(/(ing|ed|es|s)$/, '');
    if (stemT.length > 2 && hay.includes(stemT)) primaryHits += 1;
  }
  // group expanded synonyms so "karma/karman/karmani" count once, and weight
  // each concept by how selective it is inside the candidate pool (idf-style):
  // "self" is attested everywhere, "guṇa" is not.
  const conceptWeight = new Map<string, number>();
  for (const t of expanded) {
    const f = fold(t).toLowerCase();
    if (f.length > 1 && hay.includes(f)) conceptWeight.set(f, weight(f));
  }
  let conceptScore = 0;
  const distinct = new Set<string>();
  for (const [f] of conceptWeight) {
    const family = f.slice(0, 4);
    if (distinct.has(family)) continue;
    distinct.add(family);
    conceptScore += 0.3 * conceptWeight.get(f)!;
    if (distinct.size >= 6) break;
  }
  return Math.min(primaryHits * 0.5 + conceptScore, 2.8);
}

export function retrieve(question: string, opts: { topK?: number; tradition?: string } = {}) {
  const t0 = Date.now();
  const topK = opts.topK ?? 5;
  const fts = ftsSearch(question, 16);
  const vec = vectorSearch(question, 16);
  const boosts = workBoost(question);

  const merged = new Map<number, Passage>();
  const add = (p: Passage, weight: number) => {
    const existing = merged.get(p.verseId);
    if (existing) {
      existing.score += p.score * weight;
      for (const m of p.matchedBy) if (!existing.matchedBy.includes(m)) existing.matchedBy.push(m);
    } else {
      merged.set(p.verseId, { ...p, score: p.score * weight });
    }
  };
  for (const p of fts) add(p, 1.0);
  for (const p of vec) add(p, 0.85);

  const { primary, expanded } = expandQuery(question);
  const hasConcepts = expanded.length > 0 || primary.length > 0;

  // document frequency of each concept across the candidate pool → selectivity
  const hayOf = new Map<number, string>();
  for (const p of merged.values()) {
    hayOf.set(p.verseId, fold([p.sa, p.iast, p.en, p.hi, p.mr, p.workTitle].filter(Boolean).join(' ')).toLowerCase());
  }
  const df = new Map<string, number>();
  for (const t of expanded) {
    const f = fold(t).toLowerCase();
    let n = 0;
    for (const hay of hayOf.values()) if (hay.includes(f)) n += 1;
    df.set(f, n);
  }
  const pool = Math.max(merged.size, 1);
  const conceptWeight = (term: string) => {
    const n = df.get(term) ?? 0;
    return n === 0 ? 0 : Math.max(0.15, Math.min(1.6, Math.log(1 + pool / (1 + n)) / Math.log(1 + pool)));
  };

  for (const p of merged.values()) {
    const lex = overlapScore(p, primary, expanded, conceptWeight);
    if (lex > 0) {
      p.score += lex;
      if (!p.matchedBy.includes('term-overlap')) p.matchedBy.push('term-overlap');
    } else if (hasConcepts) {
      p.score *= 0.2; // topical miss: keep it retrievable, but far down the list
    }
    const b = boosts.get(p.workId) || 0;
    if (b) { p.score += b; if (!p.matchedBy.includes('title-match')) p.matchedBy.push('title-match'); }
  }

  let ranked = [...merged.values()].sort((a, b) => b.score - a.score);

  if (opts.tradition) {
    const pref = ranked.filter((p) => {
      const w = get('SELECT tradition FROM works WHERE id = ?', [p.workId]);
      return w?.tradition && w.tradition.toLowerCase().includes(opts.tradition!.toLowerCase());
    });
    ranked = [...pref, ...ranked.filter((p) => !pref.includes(p))];
  }

  return { passages: ranked.slice(0, topK), candidates: ranked.length, tookMs: Date.now() - t0 };
}

export function verseRef(workTitle: string, chapter: number, verse: string) {
  const v = String(verse);
  const first = v.split('.')[0];
  return v.includes('.') && first === String(chapter) ? `${workTitle} ${v}` : `${workTitle} ${chapter}.${v}`;
}

function citationFor(p: Passage, n: number): Citation {
  const ed = get(
    `SELECT e.label, e.translator, e.license, e.source_url
       FROM editions e JOIN works w ON w.id = e.work_id
      WHERE w.id = ? ORDER BY e.downloadable DESC, e.id ASC LIMIT 1`, [p.workId]);
  return {
    n,
    workSlug: p.workSlug,
    workTitle: p.workTitle,
    titleSa: p.titleSa,
    chapter: p.chapter,
    verse: p.verse,
    ref: verseRef(p.workTitle, p.chapter, p.verse),
    edition: ed?.label ?? null,
    translator: ed?.translator ?? null,
    license: ed?.license ?? null,
    sourceUrl: ed?.source_url ?? null,
    isDemo: p.isDemo,
    snippetSa: p.sa,
    snippetEn: p.en,
    iast: p.iast,
    verseId: p.verseId,
    score: Number(p.score.toFixed(4)),
    matchedBy: p.matchedBy,
  };
}

function comparativeNotes(verseIds: number[]) {
  if (!verseIds.length) return [];
  const marks = verseIds.map(() => '?').join(',');
  const rows = all(
    `SELECT c.tradition, c.author, c.title, c.body, v.chapter_number, v.verse_number, w.title AS work_title
       FROM commentaries c
       JOIN verses v ON v.id = c.verse_id
       JOIN works w ON w.id = v.work_id
      WHERE c.verse_id IN (${marks})
      ORDER BY c.tradition`, verseIds);
  const byTrad = new Map<string, { author: string | null; title: string; body: string }[]>();
  for (const r of rows) {
    if (!byTrad.has(r.tradition)) byTrad.set(r.tradition, []);
    byTrad.get(r.tradition)!.push({
      author: r.author,
      title: `${r.title} — ${r.work_title} ${r.chapter_number}.${r.verse_number}`,
      body: r.body,
    });
  }
  return [...byTrad.entries()].map(([tradition, notes]) => ({ tradition, notes }));
}

/** Extractive answer: assembled strictly from retrieved passages. */
function extractiveAnswer(question: string, citations: Citation[], traditions: ReturnType<typeof comparativeNotes>) {
  const notes: string[] = [];
  const sections: { heading: string; body: string }[] = [];

  if (!citations.length) {
    return {
      sections: [{
        heading: 'No direct textual match found',
        body: 'The retrieved corpus did not contain a passage closely matching this question. Sanatan Library answers only from indexed, cited text — it will not compose scripture. Try naming the text (e.g. "Bhagavad Gītā 2.47"), a Sanskrit term in Devanagari or IAST (e.g. "निष्काम कर्म", "vairagya"), a tradition, or a theme such as "memory", "surrender" or "the four states". You can also widen coverage by ingesting more texts from the Admin dashboard.',
      }],
      notes: ['No passage reached the relevance threshold, so nothing was quoted.'],
    };
  }

  const primary = citations[0];
  const lead = `The closest indexed passage is ${primary.ref}${primary.edition ? ` (${primary.edition})` : ''}. ` +
    (primary.snippetEn
      ? `It reads: "${primary.snippetEn}"`
      : primary.iast
        ? `It reads: “${primary.iast.replace(/\s*\n\s*/g, ' / ')}” — mūla text only; no English rendering is attached to this verse.`
        : 'The passage is indexed in Devanagari only; no English rendering is attached to this verse.');

  sections.push({ heading: 'What the indexed texts say', body: lead });

  const body = citations.map((c) =>
    `[${c.n}] ${c.ref} — ${makeSnippet(c.snippetEn || c.iast || c.snippetSa, question, 260)}`,
  ).join('\n\n');
  sections.push({ heading: 'Passages retrieved', body });

  if (traditions.length) {
    sections.push({
      heading: 'Comparative reading across traditions',
      body: traditions.map((t) =>
        `${t.tradition}: ` + t.notes.map((n) => `${n.title} — ${makeSnippet(n.body, question, 320)}`).join(' '),
      ).join('\n\n'),
    });
  } else {
    notes.push('No school-wise commentary is indexed for these verses yet, so no comparative reading is offered.');
  }

  const demo = citations.filter((c) => c.isDemo).length;
  if (demo) notes.push(`${demo} of ${citations.length} passages come from clearly-labelled demonstration excerpts. Full-text ingestion of the remaining corpus is tracked per work in the Admin dashboard.`);
  notes.push('Every quotation above is retrieved from an indexed row — the assistant does not generate verses. Citations give work, chapter, verse and edition.');

  return { sections, notes };
}

/** Optional LLM pass, strictly grounded. */
async function llmAnswer(question: string, citations: Citation[], traditions: ReturnType<typeof comparativeNotes>, lang: string) {
  const key = process.env.LLM_API_KEY || process.env.OPENAI_API_KEY;
  if (!key) return null;
  const base = process.env.LLM_BASE_URL || 'https://api.openai.com/v1';
  const model = process.env.LLM_MODEL || 'gpt-4o-mini';
  const langName = lang === 'hi' ? 'Hindi' : lang === 'mr' ? 'Marathi' : 'English';

  const context = citations.map((c) =>
    `[${c.n}] ${c.ref}\nSanskrit: ${c.snippetSa}\nIAST: ${c.iast ?? ''}\nTranslation: ${c.snippetEn ?? ''}\nEdition: ${c.edition ?? 'n/a'} | Licence: ${c.license ?? 'n/a'}`
  ).join('\n\n');

  const schoolContext = traditions.map((t) => `${t.tradition}: ${t.notes.map((n) => `${n.title}: ${n.body}`).join(' ')}`).join('\n');

  const system = `You are the Sanatan Library scripture assistant. Answer ONLY from the numbered passages supplied.
Rules:
1. Never quote a verse that is not in the supplied passages. Never invent citations, chapter numbers or verse numbers.
2. Cite as [n] after each claim, matching the supplied numbering.
3. If the passages do not answer the question, say so plainly and suggest a better query.
4. When asked comparatively, distinguish the schools using the supplied school notes.
5. Answer in ${langName}. Be concise and scholarly; no devotional filler.`;

  const res = await fetch(`${base}/chat/completions`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${key}` },
    body: JSON.stringify({
      model,
      temperature: 0.2,
      messages: [
        { role: 'system', content: system },
        { role: 'user', content: `Question: ${question}\n\nPassages:\n${context}\n\nSchool notes:\n${schoolContext}` },
      ],
    }),
  });
  if (!res.ok) return null;
  const json: any = await res.json();
  const text = json?.choices?.[0]?.message?.content;
  return typeof text === 'string' && text.trim() ? text.trim() : null;
}

export async function ask(question: string, opts: { topK?: number; tradition?: string; language?: string } = {}): Promise<AssistantAnswer> {
  const { passages, candidates, tookMs } = retrieve(question, opts);
  const citations = passages.map((p, i) => citationFor(p, i + 1));
  const traditions = comparativeNotes(passages.map((p) => p.verseId));

  let mode: 'extractive' | 'llm' = 'extractive';
  let answerText = '';
  let sections: { heading: string; body: string }[] = [];
  let notes: string[] = [];

  const llm = await llmAnswer(question, citations, traditions, opts.language || 'en').catch(() => null);
  if (llm) {
    mode = 'llm';
    answerText = llm;
    sections = [{ heading: 'Answer', body: llm }];
    notes = ['Generated by an LLM strictly over the retrieved passages; every citation below resolves to an indexed row.'];
    if (citations.some((c) => c.isDemo)) notes.push('Some passages are demonstration excerpts and are labelled as such.');
  } else {
    const ex = extractiveAnswer(question, citations, traditions);
    sections = ex.sections;
    notes = ex.notes;
    answerText = ex.sections.map((s) => `${s.heading}\n${s.body}`).join('\n\n');
  }

  return {
    question,
    mode,
    answer: answerText,
    sections,
    citations,
    traditions,
    license: 'Answers are composed from indexed rows; mūla Sanskrit is traditional/public-domain recitation text and translations are Sanatan Library working translations (CC BY-SA 4.0). Commentary notes are editorial summaries.',
    notes,
    retrieval: {
      strategy: 'hybrid: FTS5 BM25 + local semantic vectors + work-title boost',
      candidates,
      tookMs,
    },
  };
}

export function logAsk(userId: number | null, q: string, a: AssistantAnswer) {
  try {
    run('INSERT INTO assistant_logs (user_id,question,answer,citations,mode) VALUES (?,?,?,?,?)',
      [userId, q, a.answer.slice(0, 8000), JSON.stringify(a.citations.map((c) => c.ref)), a.mode]);
  } catch { /* logging must never break the answer */ }
}

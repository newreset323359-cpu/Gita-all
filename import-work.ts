/**
 * Generic "work importer": upserts chapters and verses for an existing
 * catalogue record from a prepared JSON payload (mūla + generated IAST).
 *
 * Existing rows are updated in place so curated translations, word-by-word
 * glosses, bookmarks, notes and commentary links all survive a re-import.
 */
import { get, all, run, db } from '../db.js';
import { fold } from '../lib/normalize.js';
import { embed, serializeVector } from '../services/embeddings.js';

export interface ImportVerse { n: number; sa: string; iast: string }
export interface ImportChapter { chapter: number; verses: ImportVerse[]; title?: string; title_sa?: string; title_en?: string }
export interface EditionMeta {
  label: string;
  publisher: string;
  year: string;
  sourceSlug: string;
  sourceUrl: string;
  license: string;
  copyright: string;
}

export interface ImportResult { inserted: number; updated: number; total: number }

export function importWork(
  workSlug: string,
  chapters: ImportChapter[],
  edition: EditionMeta,
  opts: { verbose?: boolean } = {},
): ImportResult {
  const log = (...a: unknown[]) => { if (opts.verbose !== false) console.log(...a); };
  const work = get('SELECT id FROM works WHERE slug = ?', [workSlug]);
  if (!work) throw new Error(`work not found: ${workSlug} (seed the catalogue first)`);

  let inserted = 0;
  let updated = 0;

  db.transaction(() => {
    run(`INSERT OR IGNORE INTO sources (slug,name,url,kind,license,copyright,notes)
         VALUES (?,?,?,?,?,?,?)`, [
      edition.sourceSlug, edition.publisher, edition.sourceUrl, 'repository',
      edition.license, edition.copyright,
      `Source for ${workSlug}; imported by the Sanatan Library ingestion script.`,
    ]);

    if (!get('SELECT id FROM editions WHERE work_id = ? AND label = ?', [work.id, edition.label])) {
      run(`INSERT INTO editions (work_id,label,language,script,translator,publisher,year,edition_type,source_slug,source_url,license,copyright,downloadable,rights_checked)
           VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?)`, [
        work.id, edition.label, 'Sanskrit', 'Devanagari', null, edition.publisher,
        edition.year, 'e-text', edition.sourceSlug, edition.sourceUrl,
        edition.license, edition.copyright, 1, 1,
      ]);
    }

    const chapterId = new Map<number, number>();
    for (const ch of chapters) {
      const row = get('SELECT id FROM chapters WHERE work_id = ? AND number = ?', [work.id, ch.chapter]);
      if (row) {
        run('UPDATE chapters SET verse_count = ?, title_sa = COALESCE(?, title_sa), title = COALESCE(?, title), title_en = COALESCE(?, title_en) WHERE id = ?', [
          ch.verses.length, ch.title_sa ?? null, ch.title ?? null, ch.title_en ?? null, row.id,
        ]);
        chapterId.set(ch.chapter, row.id);
      } else {
        const info = run(`INSERT INTO chapters (work_id,number,kind,title_sa,title,title_en,summary,verse_count)
             VALUES (?,?,?,?,?,?,?,?)`, [
          work.id, ch.chapter, 'adhyaya', ch.title_sa ?? null, ch.title ?? `Adhyāya ${ch.chapter}`,
          ch.title_en ?? `Chapter ${ch.chapter}`, null, ch.verses.length,
        ]);
        chapterId.set(ch.chapter, Number(info.lastInsertRowid));
      }
    }

    for (const ch of chapters) {
      const cid = chapterId.get(ch.chapter)!;
      for (const v of ch.verses) {
        const existing = get(
          'SELECT id FROM verses WHERE work_id = ? AND chapter_number = ? AND CAST(verse_number AS INTEGER) = ?',
          [work.id, ch.chapter, v.n],
        );
        const text = [v.sa, v.iast].join(' ');
        if (existing) {
          run('UPDATE verses SET chapter_id = ?, verse_number = ?, order_index = ?, sa = ?, iast = ?, fold = ? WHERE id = ?', [
            cid, String(v.n), v.n, v.sa, v.iast, fold(text), existing.id,
          ]);
          updated += 1;
        } else {
          run(`INSERT INTO verses (work_id,chapter_id,chapter_number,verse_number,order_index,sa,iast,fold,tr_en,tr_hi,tr_mr,words,translation_credit,is_demo,verified,popularity)
               VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)`, [
            work.id, cid, ch.chapter, String(v.n), v.n, v.sa, v.iast, fold(text),
            null, null, null, null, null, 1, 1, 20,
          ]);
          inserted += 1;
        }
      }
    }

    const total = get('SELECT COUNT(*) c FROM verses WHERE work_id = ?', [work.id]).c;
    run(`UPDATE works SET verse_count = ?, chapter_count = ?, updated_at = datetime('now') WHERE id = ?`,
      [total, chapters.length, work.id]);
  })();

  // (re)build the vector index for every verse of the work
  const rows = all('SELECT id, sa, iast, tr_en FROM verses WHERE work_id = ?', [get('SELECT id FROM works WHERE slug = ?', [workSlug]).id]);
  for (const r of rows) {
    const text = [r.sa, r.iast, r.tr_en].filter(Boolean).join(' ');
    run('INSERT OR REPLACE INTO verse_vectors (verse_id,dim,vec) VALUES (?,?,?)', [r.id, 256, serializeVector(embed(text))]);
  }

  const result = { inserted, updated, total: rows.length };
  log(`${workSlug}: ${inserted} inserted, ${updated} refreshed, ${rows.length} verses indexed`);
  return result;
}

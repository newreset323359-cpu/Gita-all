/**
 * Reconcile legacy verse numbering after importing full mūla texts.
 *
 * Earlier seed rows used "chapter.verse" strings (e.g. Yoga Sūtra 1.2 was stored
 * as verse_number "1.2"). The importer keys on the integer verse number, so a
 * curated row can end up beside its imported twin. This script merges the two:
 * curated translations and glosses move onto the canonical row, bookmarks,
 * notes and commentary links are re-pointed, and the duplicate is removed.
 *
 *   npx tsx src/seed/reconcile-verses.ts --dry
 *   npx tsx src/seed/reconcile-verses.ts
 */
import { all, get, run, db } from '../db.js';

const dry = process.argv.includes('--dry');

const dotted = all(
  `SELECT id, work_id FROM verses WHERE verse_number LIKE '%.%' OR verse_number LIKE '% %'`,
);

let merged = 0;
let removed = 0;

db.transaction(() => {
  for (const row of dotted) {
    const full = get('SELECT * FROM verses WHERE id = ?', [row.id]);
    const parts = String(full.verse_number).split(/[.\s]+/).map((p) => parseInt(p, 10));
    const n = parts[parts.length - 1];
    if (!Number.isFinite(n)) continue;
    const chapter = parts.length > 1 ? parts[0] : full.chapter_number;
    const canon = get(
      'SELECT * FROM verses WHERE work_id = ? AND chapter_number = ? AND verse_number = ? AND id <> ?',
      [full.work_id, chapter, String(n), full.id],
    );
    if (!canon) continue;

    console.log(`merge ${full.work_id}: ${full.verse_number} -> chapter ${chapter} verse ${n} (ids ${full.id} -> ${canon.id})`);
    if (dry) continue;

    run(
      `UPDATE verses SET
         tr_en = COALESCE(tr_en, ?), tr_hi = COALESCE(tr_hi, ?), tr_mr = COALESCE(tr_mr, ?),
         words = COALESCE(words, ?), translation_credit = COALESCE(translation_credit, ?),
         audio_url = COALESCE(audio_url, ?), iast = COALESCE(iast, ?)
       WHERE id = ?`,
      [full.tr_en, full.tr_hi, full.tr_mr, full.words, full.translation_credit, full.audio_url, full.iast, canon.id],
    );
    for (const t of ['bookmarks', 'notes', 'reading_history']) {
      const hasCol = get(`SELECT COUNT(*) c FROM pragma_table_info('${t}') WHERE name = 'verse_id'`).c;
      if (hasCol) run(`UPDATE ${t} SET verse_id = ? WHERE verse_id = ?`, [canon.id, full.id]);
    }
    run('UPDATE commentaries SET verse_id = ? WHERE verse_id = ?', [canon.id, full.id]);
    run('DELETE FROM verse_vectors WHERE verse_id = ?', [full.id]);
    run('DELETE FROM verses WHERE id = ?', [full.id]);
    merged += 1;
    removed += 1;
  }
})();

for (const w of all('SELECT id, slug FROM works')) {
  const n = get('SELECT COUNT(*) c FROM verses WHERE work_id = ?', [w.id]).c;
  if (n) run('UPDATE works SET verse_count = ? WHERE id = ?', [n, w.id]);
}

console.log(dry ? `[dry run] ${dotted.length} dotted rows scanned` : `merged ${merged}, removed ${removed} duplicates`);

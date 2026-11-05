/**
 * Rebuild the search indexes from the verse table.
 *   npx tsx src/seed/reindex.ts
 *
 * FTS5 has triggers on verses, but after a bulk import or a manual SQL fix it is
 * safer to rebuild both the full-text index and the local vector index outright.
 */
import { all, run, db } from '../db.js';
import { embed, serializeVector } from '../services/embeddings.js';

const t0 = Date.now();
run("INSERT INTO verses_fts(verses_fts) VALUES('rebuild')");
run("INSERT INTO works_fts(works_fts) VALUES('rebuild')");

const verses = all('SELECT id, sa, iast, tr_en, tr_hi, tr_mr FROM verses');
db.transaction(() => {
  for (const v of verses) {
    const text = [v.sa, v.iast, v.tr_en, v.tr_hi, v.tr_mr].filter(Boolean).join(' ');
    run('INSERT OR REPLACE INTO verse_vectors (verse_id,dim,vec) VALUES (?,?,?)', [v.id, 256, serializeVector(embed(text))]);
  }
})();

console.log(`reindexed ${verses.length} verses in ${Date.now() - t0} ms`);

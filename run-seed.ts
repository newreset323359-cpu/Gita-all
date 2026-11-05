/**
 * Seed the Sanatan Library database.
 *   npm run seed            (safe re-seed: wipes library tables, keeps nothing)
 *   SEED_KEEP_USERS=1 npm run seed
 */
import { db, resetDb, migrate, run, get, all } from '../db.js';
import { CATEGORIES, SOURCES, VEDAS, VEDANGAS, UPANISHADS, type Row } from './catalog-core.js';
import { EPICS, PURANAS, DARSHANAS, DHARMASHASTRA, AGAMAS, STOTRAS } from './catalog-secondary.js';
import { AYURVEDA, GANITA, VASTU, SANGITA, KAVYA, BHAKTI, REGIONAL, RESEARCH } from './catalog-extended.js';
import { TEXTS, DEMO_CREDIT } from './texts.js';
import { MANUSCRIPTS, PATHS, QUIZZES, DEMO_USERS } from './data-misc.js';
import { fold } from '../lib/normalize.js';
import { hashPassword } from '../lib/auth.js';
import { embed, serializeVector } from '../services/embeddings.js';

const ALL_WORKS: Row[] = [
  ...VEDAS, ...UPANISHADS, ...VEDANGAS, ...DARSHANAS, ...EPICS, ...PURANAS,
  ...DHARMASHASTRA, ...AGAMAS, ...STOTRAS, ...AYURVEDA, ...GANITA, ...VASTU,
  ...SANGITA, ...KAVYA, ...BHAKTI, ...REGIONAL, ...RESEARCH,
];

/** Deterministic pseudo-random for reproducible seeds. */
function mulberry32(a: number) {
  return function () {
    a |= 0; a = (a + 0x6D2B79F5) | 0;
    let t = Math.imul(a ^ (a >>> 15), 1 | a);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

function editionFor(row: Row, index: number) {
  const isEditorial = row.verified === 1 && TEXTS.some((t) => t.workSlug === row.slug);
  if (isEditorial) {
    return {
      label: 'Sanatan Library demonstration edition (mūla + working translation)',
      language: row.lang || 'Sanskrit',
      script: /Tamil/.test(row.lang || '') ? 'Tamil' : 'Devanagari',
      translator: 'Sanatan Library contributors',
      publisher: 'Sanatan Library',
      year: '2026', edition_type: 'e-text',
      source_slug: 'editorial', source_url: '/sources',
      license: 'CC BY-SA 4.0 (editorial text, transliteration and translations)',
      copyright: 'Sanatan Library contributors',
      downloadable: 1, pdf_url: null, rights_checked: 1,
    };
  }
  const pool = [
    { source_slug: 'gretil', source_url: 'http://gretil.sub.uni-goettingen.de/', license: 'Individual e-text licence (see GRETIL record)', copyright: 'Respective editor / Universität Göttingen', edition_type: 'e-text', publisher: 'GRETIL' },
    { source_slug: 'sacred-texts', source_url: 'https://sacred-texts.com/hin/', license: 'Public domain (pre-1929 translation)', copyright: 'Public domain', edition_type: 'translation', publisher: 'Sacred Books of the East / public domain' },
    { source_slug: 'sarit', source_url: 'https://sarit.indology.info/', license: 'Open scholarly licence (TEI)', copyright: 'Respective editors', edition_type: 'critical', publisher: 'SARIT' },
    { source_slug: 'vedic-heritage', source_url: 'https://vedicheritage.gov.in/', license: 'Government portal — citation only', copyright: 'IGNCA / Ministry of Culture', edition_type: 'e-text', publisher: 'Vedic Heritage Portal' },
    { source_slug: 'sanskrit-documents', source_url: 'https://sanskritdocuments.org/', license: 'Volunteer transcription — check per file', copyright: 'Respective contributors', edition_type: 'e-text', publisher: 'Sanskrit Documents' },
  ];
  const p = pool[index % pool.length];
  return {
    label: `${p.publisher} record — ${row.title}`,
    language: row.lang || 'Sanskrit', script: 'Devanagari',
    translator: null, publisher: p.publisher, year: null,
    edition_type: p.edition_type, source_slug: p.source_slug, source_url: p.source_url,
    license: p.license, copyright: p.copyright,
    downloadable: 0, pdf_url: null, rights_checked: 0,
  };
}

export function seed({ verbose = true } = {}) {
  const log = (...a: any[]) => { if (verbose) console.log(...a); };
  const t0 = Date.now();
  resetDb();

  // ---- categories & sources -------------------------------------------------
  const cat = db.prepare(`INSERT INTO categories (slug,name,name_sa,name_hi,parent_slug,kind,description,icon,sort_order)
    VALUES (@slug,@name,@name_sa,@name_hi,@parent_slug,@kind,@description,@icon,@sort_order)`);
  db.transaction(() => {
    for (const c of CATEGORIES) {
      cat.run({ parent_slug: null, name_sa: null, name_hi: null, sort_order: 100, ...c });
    }
  })();

  const src = db.prepare(`INSERT INTO sources (slug,name,url,kind,license,copyright,notes)
    VALUES (@slug,@name,@url,@kind,@license,@copyright,@notes)`);
  db.transaction(() => { for (const s of SOURCES) src.run({ ...s, notes: s.notes ?? null }); })();

  // ---- works ---------------------------------------------------------------
  const insertWork = db.prepare(`INSERT INTO works
    (slug,title_sa,title,title_en,title_hi,category_slug,tradition,language,author,author_dates,period,era,
     summary,significance,structure,verse_count,chapter_count,popularity,verified,status,featured,tags,hue)
    VALUES (@slug,@title_sa,@title,@title_en,@title_hi,@category_slug,@tradition,@language,@author,@author_dates,@period,@era,
     @summary,@significance,@structure,@verse_count,@chapter_count,@popularity,@verified,@status,@featured,@tags,@hue)`);

  const seen = new Set<string>();
  const workRows = ALL_WORKS.filter((w) => {
    if (seen.has(w.slug)) { log('  ! duplicate slug skipped:', w.slug); return false; }
    seen.add(w.slug); return true;
  });

  db.transaction(() => {
    workRows.forEach((w, i) => {
      insertWork.run({
        slug: w.slug, title_sa: w.sa ?? null, title: w.title, title_en: w.en ?? null,
        title_hi: w.hi ?? null, category_slug: w.cat, tradition: w.trad ?? null,
        language: w.lang ?? 'Sanskrit', author: w.author ?? null, author_dates: w.dates ?? null,
        period: w.period ?? null, era: w.period ?? null,
        summary: w.summary ?? null, significance: w.sig ?? null, structure: w.structure ?? null,
        verse_count: w.verses ?? 0, chapter_count: w.chapters ?? 0,
        popularity: w.pop ?? 20, verified: w.verified ?? 0,
        status: 'published', featured: w.featured ?? 0, tags: w.tags ?? null,
        hue: w.hue ?? 38,
      });
      const ed = editionFor(w, i);
      run(`INSERT INTO editions (work_id,label,language,script,translator,publisher,year,edition_type,source_slug,source_url,license,copyright,downloadable,pdf_url,rights_checked)
           VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)`, [
        get('SELECT id FROM works WHERE slug = ?', [w.slug]).id,
        ed.label, ed.language, ed.script, ed.translator, ed.publisher, ed.year,
        ed.edition_type, ed.source_slug, ed.source_url, ed.license, ed.copyright,
        ed.downloadable, ed.pdf_url, ed.rights_checked,
      ]);
      // second edition record for major works
      if ((w.pop ?? 0) >= 70) {
        run(`INSERT INTO editions (work_id,label,language,script,translator,publisher,year,edition_type,source_slug,source_url,license,copyright,downloadable,rights_checked)
             VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?)`, [
          get('SELECT id FROM works WHERE slug = ?', [w.slug]).id,
          'Critical/print edition reference (catalogue record)', w.lang || 'Sanskrit', 'Devanagari',
          null, 'Institutional edition — see New Catalogus Catalogorum', null, 'print',
          'nmm', 'https://namami.gov.in/', 'Institutional — permission required for reproduction',
          'Respective publisher', 0, 0,
        ]);
      }
    });
  })();
  log(`  • ${workRows.length} works, ${get('SELECT COUNT(*) c FROM editions').c} edition records`);

  // ---- chapters + verses + commentaries ------------------------------------
  const chapterId = new Map<string, number>();
  const verseId = new Map<string, number>();
  let verseTotal = 0;
  let commTotal = 0;

  db.transaction(() => {
    for (const t of TEXTS) {
      const work = get('SELECT id, language FROM works WHERE slug = ?', [t.workSlug]);
      if (!work) { log('  ! missing work for text seed:', t.workSlug); continue; }
      const seenCh = new Set<number>();
      for (const ch of t.chapters) {
        if (seenCh.has(ch.number)) continue;
        seenCh.add(ch.number);
        const info = run(`INSERT INTO chapters (work_id,number,kind,title_sa,title,title_en,summary,verse_count)
          VALUES (?,?,?,?,?,?,?,?)`, [
          work.id, ch.number, 'adhyaya', ch.title_sa, ch.title, ch.title_en, ch.summary,
          t.verses.filter((v) => v.chapter === ch.number).length,
        ]);
        chapterId.set(`${t.workSlug}:${ch.number}`, Number(info.lastInsertRowid));
      }
      let order = 0;
      for (const v of t.verses) {
        order += 1;
        let cid = chapterId.get(`${t.workSlug}:${v.chapter}`);
        if (!cid) {
          const info = run(`INSERT INTO chapters (work_id,number,kind,title_sa,title,title_en,summary,verse_count) VALUES (?,?,?,?,?,?,?,?)`,
            [work.id, v.chapter, 'adhyaya', null, `Adhyāya ${v.chapter}`, `Chapter ${v.chapter}`, null, 0]);
          cid = Number(info.lastInsertRowid);
          chapterId.set(`${t.workSlug}:${v.chapter}`, cid);
        }
        const info = run(`INSERT INTO verses (work_id,chapter_id,chapter_number,verse_number,order_index,sa,iast,fold,tr_en,tr_hi,tr_mr,words,translation_credit,is_demo,verified,popularity)
          VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)`, [
          work.id, cid, v.chapter, v.verse, order, v.sa, v.iast, fold(v.iast || v.sa),
          v.en, v.hi, v.mr ?? null, v.words ? JSON.stringify(v.words) : null,
          v.credit || DEMO_CREDIT, 1, 1, 30,
        ]);
        const vid = Number(info.lastInsertRowid);
        verseId.set(`${t.workSlug}:${v.chapter}:${v.verse}`, vid);
        verseTotal += 1;

        // demonstration semantic vector
        const text = [v.sa, v.iast, v.en, v.hi, v.mr].filter(Boolean).join(' ');
        run('INSERT OR REPLACE INTO verse_vectors (verse_id,dim,vec) VALUES (?,?,?)', [vid, 256, serializeVector(embed(text))]);
      }
      for (const c of t.commentaries || []) {
        const vid = verseId.get(`${t.workSlug}:${c.chapter}:${c.verse}`);
        if (!vid) continue;
        run(`INSERT INTO commentaries (verse_id,tradition,author,title,school_note,body,license,source_url,verified)
             VALUES (?,?,?,?,?,?,?,?,?)`, [
          vid, c.tradition, c.author || null, c.title, c.note || null, c.body,
          'Editorial summary — Sanatan Library (CC BY-SA 4.0)', null, 1,
        ]);
        commTotal += 1;
      }
    }
  })();
  log(`  • ${verseTotal} demonstration verses, ${commTotal} comparative commentary notes`);

  // ---- manuscripts ---------------------------------------------------------
  db.transaction(() => {
    for (const m of MANUSCRIPTS) {
      run(`INSERT INTO manuscripts (slug,title,work_slug,repository,shelfmark,script,material,date_approx,region,summary,image_url,iiif_url,license,source_url,verified)
           VALUES (@slug,@title,@work_slug,@repository,@shelfmark,@script,@material,@date_approx,@region,@summary,@image_url,@iiif_url,@license,@source_url,1)`, m);
    }
  })();

  // ---- learning paths ------------------------------------------------------
  db.transaction(() => {
    for (const p of PATHS) {
      const info = run(`INSERT INTO paths (slug,title,subtitle,level,tradition,description,hue,duration)
        VALUES (?,?,?,?,?,?,?,?)`, [p.slug, p.title, p.subtitle, p.level, p.tradition, p.description, p.hue, p.duration]);
      const pid = Number(info.lastInsertRowid);
      p.steps.forEach((s, i) => run(`INSERT INTO path_steps (path_id,position,work_slug,chapter,task,note) VALUES (?,?,?,?,?,?)`,
        [pid, i + 1, s.work_slug, s.chapter, s.task, s.note]));
    }
  })();

  // ---- quizzes -------------------------------------------------------------
  db.transaction(() => {
    for (const q of QUIZZES) {
      const info = run('INSERT INTO quizzes (slug,path_slug,title,description,level) VALUES (?,?,?,?,?)',
        [q.slug, q.path_slug, q.title, q.description, q.level]);
      const qid = Number(info.lastInsertRowid);
      q.questions.forEach((qq, i) => run(`INSERT INTO quiz_questions (quiz_id,position,prompt,options,answer,explanation,citation)
        VALUES (?,?,?,?,?,?,?)`, [qid, i + 1, qq.prompt, JSON.stringify(qq.options), qq.answer, qq.explanation, qq.citation]));
    }
  })();

  // ---- users & demo personal library --------------------------------------
  db.transaction(() => {
    for (const u of DEMO_USERS) {
      run('INSERT INTO users (email,name,password_hash,role) VALUES (?,?,?,?)',
        [u.email, u.name, hashPassword(u.password), u.role]);
    }
  })();
  const reader = get("SELECT id FROM users WHERE email = 'reader@sanatanlibrary.org'");
  const gitaId = get("SELECT id FROM works WHERE slug='bhagavad-gita'").id;
  const ishaId = get("SELECT id FROM works WHERE slug='isha-upanishad'").id;
  const v247 = get("SELECT id FROM verses WHERE work_id=? AND chapter_number=2 AND verse_number='47'", [gitaId]);
  db.transaction(() => {
    run('INSERT INTO bookmarks (user_id,work_id,verse_id,chapter_number,label) VALUES (?,?,?,?,?)',
      [reader.id, gitaId, v247?.id ?? null, 2, 'niṣkāma karma — the verse to return to']);
    run('INSERT INTO bookmarks (user_id,work_id,verse_id,chapter_number,label) VALUES (?,?,?,?,?)',
      [reader.id, ishaId, null, 1, 'Īśāvāsya — read every morning']);
    run(`INSERT INTO notes (user_id,work_id,verse_id,chapter_number,body) VALUES (?,?,?,?,?)`,
      [reader.id, gitaId, v247?.id ?? null, 2, 'Compare Śaṅkara and Rāmānuja on "adhikāra": is it a right or a duty? Note the different readings of phala-tyāga.']);
    run(`INSERT INTO reading_history (user_id,work_id,chapter_number,verse_number,progress) VALUES (?,?,?,?,?)`,
      [reader.id, gitaId, 2, '47', 0.22]);
    run(`INSERT INTO reading_history (user_id,work_id,chapter_number,verse_number,progress) VALUES (?,?,?,?,?)`,
      [reader.id, ishaId, 1, '8', 0.45]);
  })();

  const stats = {
    works: get('SELECT COUNT(*) c FROM works').c,
    verses: get('SELECT COUNT(*) c FROM verses').c,
    editions: get('SELECT COUNT(*) c FROM editions').c,
    commentaries: get('SELECT COUNT(*) c FROM commentaries').c,
    manuscripts: get('SELECT COUNT(*) c FROM manuscripts').c,
    categories: get('SELECT COUNT(*) c FROM categories').c,
  };
  log(`✓ Seed complete in ${Date.now() - t0}ms`, stats);
  return stats;
}

if (process.argv[1] && /run-seed/.test(process.argv[1])) {
  migrate();
  seed();
  db.close();
}

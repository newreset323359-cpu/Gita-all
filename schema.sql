-- ============================================================================
-- SANATAN LIBRARY (सनातन ज्ञानकोश) — relational schema
-- Portable subset: runs on SQLite (default, embedded) and PostgreSQL.
-- The PostgreSQL DDL equivalent lives in server/postgres/schema.postgres.sql
-- ============================================================================

PRAGMA journal_mode = WAL;
PRAGMA foreign_keys = ON;

CREATE TABLE IF NOT EXISTS users (
  id            INTEGER PRIMARY KEY AUTOINCREMENT,
  email         TEXT NOT NULL UNIQUE,
  name          TEXT NOT NULL,
  password_hash TEXT NOT NULL,
  role          TEXT NOT NULL DEFAULT 'reader',      -- reader | scholar | admin
  created_at    TEXT NOT NULL DEFAULT (datetime('now'))
);

CREATE TABLE IF NOT EXISTS categories (
  id          INTEGER PRIMARY KEY AUTOINCREMENT,
  slug        TEXT NOT NULL UNIQUE,
  name        TEXT NOT NULL,
  name_sa     TEXT,
  name_hi     TEXT,
  parent_slug TEXT,
  kind        TEXT NOT NULL DEFAULT 'corpus',        -- corpus | tradition | genre | science
  description TEXT,
  icon        TEXT,
  sort_order  INTEGER NOT NULL DEFAULT 100
);

CREATE TABLE IF NOT EXISTS sources (
  id          INTEGER PRIMARY KEY AUTOINCREMENT,
  slug        TEXT NOT NULL UNIQUE,
  name        TEXT NOT NULL,
  url         TEXT NOT NULL,
  kind        TEXT NOT NULL,                          -- repository | portal | archive | edition
  license     TEXT NOT NULL,
  copyright   TEXT NOT NULL,
  notes       TEXT
);

CREATE TABLE IF NOT EXISTS works (
  id             INTEGER PRIMARY KEY AUTOINCREMENT,
  slug           TEXT NOT NULL UNIQUE,
  title_sa       TEXT,
  title          TEXT NOT NULL,                       -- transliterated / canonical title
  title_en       TEXT,
  title_hi       TEXT,
  category_slug  TEXT NOT NULL,
  tradition      TEXT,                                -- Vedic, Advaita, Dvaita, ...
  language       TEXT NOT NULL DEFAULT 'Sanskrit',    -- original language
  author         TEXT,
  author_dates   TEXT,
  period         TEXT,                                -- historical period bucket
  era            TEXT,
  summary        TEXT,
  significance   TEXT,
  structure      TEXT,                                -- free text: books/parvas/kandas
  verse_count    INTEGER DEFAULT 0,
  chapter_count  INTEGER DEFAULT 0,
  popularity     INTEGER DEFAULT 0,
  verified       INTEGER NOT NULL DEFAULT 0,
  status         TEXT NOT NULL DEFAULT 'published',   -- published | draft
  featured       INTEGER NOT NULL DEFAULT 0,
  tags           TEXT,                                -- comma separated
  hue            INTEGER NOT NULL DEFAULT 38,         -- accent hue for art direction
  created_at     TEXT NOT NULL DEFAULT (datetime('now')),
  updated_at     TEXT NOT NULL DEFAULT (datetime('now')),
  FOREIGN KEY (category_slug) REFERENCES categories(slug)
);
CREATE INDEX IF NOT EXISTS idx_works_category ON works(category_slug);
CREATE INDEX IF NOT EXISTS idx_works_language ON works(language);
CREATE INDEX IF NOT EXISTS idx_works_tradition ON works(tradition);
CREATE INDEX IF NOT EXISTS idx_works_period ON works(period);
CREATE INDEX IF NOT EXISTS idx_works_popularity ON works(popularity DESC);

CREATE TABLE IF NOT EXISTS editions (
  id             INTEGER PRIMARY KEY AUTOINCREMENT,
  work_id        INTEGER NOT NULL,
  label          TEXT NOT NULL,                       -- e.g. "GRETIL e-text (Vishva Bandhu ed.)"
  language       TEXT NOT NULL DEFAULT 'Sanskrit',
  script         TEXT,
  translator     TEXT,
  publisher      TEXT,
  year           TEXT,
  edition_type   TEXT,                                -- e-text | print | critical | translation
  source_slug    TEXT,
  source_url     TEXT,
  license        TEXT NOT NULL,
  copyright      TEXT NOT NULL,
  downloadable   INTEGER NOT NULL DEFAULT 0,
  pdf_url        TEXT,
  rights_checked INTEGER NOT NULL DEFAULT 0,
  FOREIGN KEY (work_id) REFERENCES works(id) ON DELETE CASCADE,
  FOREIGN KEY (source_slug) REFERENCES sources(slug)
);
CREATE INDEX IF NOT EXISTS idx_editions_work ON editions(work_id);

CREATE TABLE IF NOT EXISTS chapters (
  id            INTEGER PRIMARY KEY AUTOINCREMENT,
  work_id       INTEGER NOT NULL,
  number        INTEGER NOT NULL,
  kind          TEXT,                                 -- chapter | kanda | parva | adhyaya | sutra-pada
  title_sa      TEXT,
  title         TEXT,
  title_en      TEXT,
  summary       TEXT,
  verse_count   INTEGER DEFAULT 0,
  FOREIGN KEY (work_id) REFERENCES works(id) ON DELETE CASCADE
);
CREATE INDEX IF NOT EXISTS idx_chapters_work ON chapters(work_id, number);

CREATE TABLE IF NOT EXISTS verses (
  id            INTEGER PRIMARY KEY AUTOINCREMENT,
  work_id       INTEGER NOT NULL,
  chapter_id    INTEGER,
  chapter_number INTEGER NOT NULL DEFAULT 1,
  verse_number  TEXT NOT NULL DEFAULT '1',            -- text: sutras use "1.2", sargas "2.47"
  order_index   INTEGER NOT NULL DEFAULT 0,
  sa            TEXT NOT NULL,                        -- Devanagari mūla
  iast          TEXT,                                 -- IAST transliteration
  fold          TEXT,                                 -- diacritic-folded IAST for search
  tr_en         TEXT,
  tr_hi         TEXT,
  tr_mr         TEXT,
  words         TEXT,                                 -- JSON: [{sa,iast,gloss_en,gloss_hi}]
  translation_credit TEXT,
  audio_url     TEXT,
  is_demo       INTEGER NOT NULL DEFAULT 1,           -- 1 = demonstration excerpt
  verified      INTEGER NOT NULL DEFAULT 0,
  popularity    INTEGER NOT NULL DEFAULT 0,
  FOREIGN KEY (work_id) REFERENCES works(id) ON DELETE CASCADE,
  FOREIGN KEY (chapter_id) REFERENCES chapters(id) ON DELETE CASCADE
);
CREATE UNIQUE INDEX IF NOT EXISTS idx_verses_unique ON verses(work_id, chapter_number, verse_number);
CREATE INDEX IF NOT EXISTS idx_verses_work ON verses(work_id, order_index);

CREATE TABLE IF NOT EXISTS commentaries (
  id          INTEGER PRIMARY KEY AUTOINCREMENT,
  verse_id    INTEGER NOT NULL,
  tradition   TEXT NOT NULL,        -- Advaita | Dvaita | Vishishtadvaita | Yoga | Nyaya | Samkhya | Shaiva | Shakta | Vedic
  author      TEXT,
  title       TEXT NOT NULL,
  school_note TEXT,
  body        TEXT NOT NULL,
  license     TEXT NOT NULL DEFAULT 'Editorial summary — Sanatan Library (CC BY-SA 4.0)',
  source_url  TEXT,
  verified    INTEGER NOT NULL DEFAULT 0,
  FOREIGN KEY (verse_id) REFERENCES verses(id) ON DELETE CASCADE
);
CREATE INDEX IF NOT EXISTS idx_comm_verse ON commentaries(verse_id);

CREATE TABLE IF NOT EXISTS manuscripts (
  id           INTEGER PRIMARY KEY AUTOINCREMENT,
  slug         TEXT NOT NULL UNIQUE,
  title        TEXT NOT NULL,
  work_slug    TEXT,
  repository   TEXT NOT NULL,
  shelfmark    TEXT,
  script       TEXT,
  material     TEXT,
  date_approx  TEXT,
  region       TEXT,
  summary      TEXT,
  image_url    TEXT NOT NULL,
  iiif_url     TEXT,
  license      TEXT NOT NULL,
  source_url   TEXT,
  verified     INTEGER NOT NULL DEFAULT 0
);

CREATE TABLE IF NOT EXISTS paths (
  id          INTEGER PRIMARY KEY AUTOINCREMENT,
  slug        TEXT NOT NULL UNIQUE,
  title       TEXT NOT NULL,
  subtitle    TEXT,
  level       TEXT NOT NULL DEFAULT 'beginner',
  tradition   TEXT,
  description TEXT,
  hue         INTEGER NOT NULL DEFAULT 38,
  duration    TEXT
);

CREATE TABLE IF NOT EXISTS path_steps (
  id        INTEGER PRIMARY KEY AUTOINCREMENT,
  path_id   INTEGER NOT NULL,
  position  INTEGER NOT NULL,
  work_slug TEXT NOT NULL,
  chapter   INTEGER,
  task      TEXT,
  note      TEXT,
  FOREIGN KEY (path_id) REFERENCES paths(id) ON DELETE CASCADE
);

CREATE TABLE IF NOT EXISTS quizzes (
  id        INTEGER PRIMARY KEY AUTOINCREMENT,
  slug      TEXT NOT NULL UNIQUE,
  path_slug TEXT,
  title     TEXT NOT NULL,
  description TEXT,
  level     TEXT DEFAULT 'beginner'
);

CREATE TABLE IF NOT EXISTS quiz_questions (
  id          INTEGER PRIMARY KEY AUTOINCREMENT,
  quiz_id     INTEGER NOT NULL,
  position    INTEGER NOT NULL,
  prompt      TEXT NOT NULL,
  options     TEXT NOT NULL,        -- JSON array
  answer      INTEGER NOT NULL,     -- index
  explanation TEXT,
  citation    TEXT,                 -- "Bhagavad Gītā 2.47 (ed. …)"
  FOREIGN KEY (quiz_id) REFERENCES quizzes(id) ON DELETE CASCADE
);

CREATE TABLE IF NOT EXISTS quiz_attempts (
  id         INTEGER PRIMARY KEY AUTOINCREMENT,
  user_id    INTEGER NOT NULL,
  quiz_slug  TEXT NOT NULL,
  score      INTEGER NOT NULL,
  total      INTEGER NOT NULL,
  created_at TEXT NOT NULL DEFAULT (datetime('now')),
  FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE
);

CREATE TABLE IF NOT EXISTS bookmarks (
  id         INTEGER PRIMARY KEY AUTOINCREMENT,
  user_id    INTEGER NOT NULL,
  work_id    INTEGER NOT NULL,
  verse_id   INTEGER,
  chapter_number INTEGER,
  label      TEXT,
  created_at TEXT NOT NULL DEFAULT (datetime('now')),
  UNIQUE(user_id, work_id, verse_id, chapter_number),
  FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE,
  FOREIGN KEY (work_id) REFERENCES works(id) ON DELETE CASCADE
);

CREATE TABLE IF NOT EXISTS notes (
  id         INTEGER PRIMARY KEY AUTOINCREMENT,
  user_id    INTEGER NOT NULL,
  work_id    INTEGER NOT NULL,
  verse_id   INTEGER,
  chapter_number INTEGER,
  body       TEXT NOT NULL,
  visibility TEXT NOT NULL DEFAULT 'private',
  created_at TEXT NOT NULL DEFAULT (datetime('now')),
  updated_at TEXT NOT NULL DEFAULT (datetime('now')),
  FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE
);
CREATE INDEX IF NOT EXISTS idx_notes_user ON notes(user_id, created_at DESC);

CREATE TABLE IF NOT EXISTS reading_history (
  id             INTEGER PRIMARY KEY AUTOINCREMENT,
  user_id        INTEGER NOT NULL,
  work_id        INTEGER NOT NULL,
  chapter_number INTEGER DEFAULT 1,
  verse_number   TEXT,
  progress       REAL DEFAULT 0,
  updated_at     TEXT NOT NULL DEFAULT (datetime('now')),
  UNIQUE(user_id, work_id),
  FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE
);

CREATE TABLE IF NOT EXISTS assistant_logs (
  id         INTEGER PRIMARY KEY AUTOINCREMENT,
  user_id    INTEGER,
  question   TEXT NOT NULL,
  answer     TEXT NOT NULL,
  citations  TEXT,                 -- JSON
  mode       TEXT NOT NULL,        -- extractive | llm
  created_at TEXT NOT NULL DEFAULT (datetime('now'))
);

CREATE TABLE IF NOT EXISTS verse_vectors (
  verse_id INTEGER PRIMARY KEY,
  dim      INTEGER NOT NULL,
  vec      BLOB NOT NULL,
  FOREIGN KEY (verse_id) REFERENCES verses(id) ON DELETE CASCADE
);

-- Full-text search ------------------------------------------------------------
CREATE VIRTUAL TABLE IF NOT EXISTS verses_fts USING fts5(
  sa, fold, tr_en, tr_hi, tr_mr,
  content='verses', content_rowid='id', tokenize='unicode61 remove_diacritics 2'
);
CREATE VIRTUAL TABLE IF NOT EXISTS works_fts USING fts5(
  title, title_sa, title_en, title_hi, author, summary, tags,
  content='works', content_rowid='id', tokenize='unicode61 remove_diacritics 2'
);

CREATE TRIGGER IF NOT EXISTS verses_ai AFTER INSERT ON verses BEGIN
  INSERT INTO verses_fts(rowid, sa, fold, tr_en, tr_hi, tr_mr)
  VALUES (new.id, new.sa, new.fold, new.tr_en, new.tr_hi, new.tr_mr);
END;
CREATE TRIGGER IF NOT EXISTS verses_ad AFTER DELETE ON verses BEGIN
  INSERT INTO verses_fts(verses_fts, rowid, sa, fold, tr_en, tr_hi, tr_mr)
  VALUES ('delete', old.id, old.sa, old.fold, old.tr_en, old.tr_hi, old.tr_mr);
END;
CREATE TRIGGER IF NOT EXISTS verses_au AFTER UPDATE ON verses BEGIN
  INSERT INTO verses_fts(verses_fts, rowid, sa, fold, tr_en, tr_hi, tr_mr)
  VALUES ('delete', old.id, old.sa, old.fold, old.tr_en, old.tr_hi, old.tr_mr);
  INSERT INTO verses_fts(rowid, sa, fold, tr_en, tr_hi, tr_mr)
  VALUES (new.id, new.sa, new.fold, new.tr_en, new.tr_hi, new.tr_mr);
END;

CREATE TRIGGER IF NOT EXISTS works_ai AFTER INSERT ON works BEGIN
  INSERT INTO works_fts(rowid, title, title_sa, title_en, title_hi, author, summary, tags)
  VALUES (new.id, new.title, new.title_sa, new.title_en, new.title_hi, new.author, new.summary, new.tags);
END;
CREATE TRIGGER IF NOT EXISTS works_au AFTER UPDATE ON works BEGIN
  INSERT INTO works_fts(works_fts, rowid, title, title_sa, title_en, title_hi, author, summary, tags)
  VALUES ('delete', old.id, old.title, old.title_sa, old.title_en, old.title_hi, old.author, old.summary, old.tags);
  INSERT INTO works_fts(rowid, title, title_sa, title_en, title_hi, author, summary, tags)
  VALUES (new.id, new.title, new.title_sa, new.title_en, new.title_hi, new.author, new.summary, new.tags);
END;

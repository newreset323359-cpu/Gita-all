import path from 'node:path';
import fs from 'node:fs';
import { fileURLToPath } from 'node:url';
import Database from 'better-sqlite3';

const here = path.dirname(fileURLToPath(import.meta.url));
export const ROOT = path.resolve(here, '..');
export const DATA_DIR = process.env.DATA_DIR || path.join(ROOT, '..', 'data');
fs.mkdirSync(DATA_DIR, { recursive: true });

export const DB_PATH = process.env.DB_PATH || path.join(DATA_DIR, 'sanatan.db');

export const db = new Database(DB_PATH);
db.pragma('journal_mode = WAL');
db.pragma('foreign_keys = ON');
db.pragma('synchronous = NORMAL');

function schemaFile(): string {
  const candidates = [path.join(here, 'schema.sql'), path.join(ROOT, 'src', 'schema.sql')];
  for (const c of candidates) if (fs.existsSync(c)) return c;
  throw new Error('schema.sql not found');
}

/** Apply schema (idempotent). */
export function migrate() {
  db.exec(fs.readFileSync(schemaFile(), 'utf8'));
}

export function resetDb() {
  const tables = [
    'verses_fts', 'works_fts', 'verse_vectors', 'assistant_logs', 'reading_history',
    'notes', 'bookmarks', 'quiz_attempts', 'quiz_questions', 'quizzes', 'path_steps',
    'paths', 'manuscripts', 'commentaries', 'verses', 'chapters', 'editions', 'works',
    'sources', 'categories', 'users',
  ];
  db.pragma('foreign_keys = OFF');
  for (const t of tables) {
    try { db.exec(`DROP TABLE IF EXISTS ${t}`); } catch { /* ignore */ }
  }
  db.pragma('foreign_keys = ON');
  migrate();
}

export const all = (sql: string, params: any = []) => db.prepare(sql).all(params) as any[];
export const get = (sql: string, params: any = []) => db.prepare(sql).get(params) as any;
export const run = (sql: string, params: any = []) => db.prepare(sql).run(params);

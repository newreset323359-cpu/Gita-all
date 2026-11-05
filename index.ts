import express from 'express';
import path from 'node:path';
import fs from 'node:fs';
import cors from 'cors';
import helmet from 'helmet';
import compression from 'compression';
import rateLimit from 'express-rate-limit';
import { migrate, db, get } from './db.js';
import { optionalAuth, readToken } from './lib/auth.js';
import { ApiError, ah, askSchema, validate } from './lib/http.js';
import { library } from './routes/library.js';
import { user } from './routes/user.js';
import { admin } from './routes/admin.js';
import { ask, logAsk } from './services/assistant.js';

const PORT = Number(process.env.PORT || 8080);
const ROOT = path.resolve(path.dirname(new URL(import.meta.url).pathname), '..');
const CLIENT_DIST = process.env.CLIENT_DIST || path.join(ROOT, '..', 'client', 'dist');

migrate();

// Seed automatically on first boot so a fresh checkout is never empty.
const workCount = get('SELECT COUNT(*) c FROM works')?.c ?? 0;
if (workCount === 0 && process.env.AUTO_SEED !== '0') {
  console.log('[sanatan] empty database detected → seeding demonstration library');
  const { seed } = await import('./seed/run-seed.js');
  seed();
}

const app = express();
app.set('trust proxy', 1);
app.disable('x-powered-by');

app.use(helmet({
  contentSecurityPolicy: false,           // set by the static layer / hosting
  crossOriginEmbedderPolicy: false,
  crossOriginResourcePolicy: { policy: 'cross-origin' },
  frameguard: false,                      // the library is meant to be embedded
}));

/* Framing policy.
 *
 * Helmet's default `X-Frame-Options: SAMEORIGIN` makes the app invisible inside
 * the preview pane / any embedding host, and a sandboxed iframe (opaque origin)
 * fails SAMEORIGIN even for same-site requests. The library is a read-only
 * public catalogue, so clickjacking is not a meaningful threat here — but the
 * policy is explicit rather than absent: framing is allowed, and the modern
 * `frame-ancestors` directive carries the rule for browsers that support it.
 * Tighten the value to the specific hosts before a production deployment.
 */
const FRAME_ANCESTORS = process.env.FRAME_ANCESTORS || '*';
app.use((_req, res, next) => {
  res.removeHeader('X-Frame-Options');
  res.setHeader('Content-Security-Policy', `frame-ancestors ${FRAME_ANCESTORS}`);
  next();
});
app.use(compression());
app.use(express.json({ limit: '4mb' }));
app.use(cors({ origin: true, credentials: true }));

const globalLimiter = rateLimit({ windowMs: 60_000, limit: 600, standardHeaders: 'draft-7', legacyHeaders: false, message: { error: 'Too many requests — please slow down.' } });
const authLimiter = rateLimit({ windowMs: 15 * 60_000, limit: 30, standardHeaders: 'draft-7', legacyHeaders: false, message: { error: 'Too many authentication attempts. Try again in 15 minutes.' } });
const aiLimiter = rateLimit({ windowMs: 60_000, limit: 20, standardHeaders: 'draft-7', legacyHeaders: false, message: { error: 'Assistant rate limit reached (20 questions/minute).' } });

app.use('/api', globalLimiter);
app.use('/api/auth', authLimiter);
app.use('/api', optionalAuth);

/* --------------------------------------------------------------- health */
app.get('/api/health', (_req, res) => {
  res.json({
    ok: true,
    service: 'sanatan-library-api',
    version: '1.0.0',
    db: 'sqlite (better-sqlite3)',
    counts: {
      works: get('SELECT COUNT(*) c FROM works').c,
      verses: get('SELECT COUNT(*) c FROM verses').c,
    },
    time: new Date().toISOString(),
  });
});

/* -------------------------------------------------------------- assistant */
app.post('/api/assistant/ask', aiLimiter, ah(async (req: any, res) => {
  const body = validate(askSchema, req.body);
  const answer = await ask(body.question, {
    topK: body.topK,
    tradition: body.tradition,
    language: body.language,
  });
  logAsk(req.user?.id ?? null, body.question, answer);
  res.json(answer);
}));

app.get('/api/assistant/examples', (_req, res) => {
  res.json({
    examples: [
      'What does the Bhagavad Gītā say about the fruits of action?',
      'Compare Advaita, Viśiṣṭādvaita and Dvaita readings of "tat tvam asi".',
      'What is nirodha in the Yoga Sūtras?',
      'Which verses in the indexed corpus describe the Self as unborn?',
      'How do Śaiva and Śākta traditions read the descent (avatāra)?',
      'What does the Īśāvāsya Upaniṣad mean by renunciation in enjoyment?',
      'What are the three boons of Naciketas?',
      'Explain "satyam eva jayate" and its sources.',
    ],
    notice: 'The assistant retrieves from the indexed corpus first. If the corpus cannot support a claim, it says so instead of inventing a verse.',
    llmEnabled: Boolean(process.env.LLM_API_KEY || process.env.OPENAI_API_KEY),
  });
});

app.use('/api', library);
app.use('/api', user);
app.use('/api/admin', admin);

/* ---------------------------------------------------------------- openapi */
app.get('/api/openapi.json', (_req, res) => {
  res.json({
    openapi: '3.1.0',
    info: { title: 'Sanatan Library API', version: '1.0.0', description: 'REST API for the Sanatan Library digital corpus. All scripture quotations resolve to a work, chapter, verse and edition.' },
    servers: [{ url: '/api' }],
    paths: {
      '/home': { get: { summary: 'Homepage payload (featured, recent, popular, categories, counts)' } },
      '/meta': { get: { summary: 'Facets: categories, languages, traditions, periods, authors, counts' } },
      '/works': { get: { summary: 'Paginated works list', parameters: [{ name: 'page', in: 'query' }, { name: 'perPage', in: 'query' }, { name: 'category', in: 'query' }, { name: 'language', in: 'query' }, { name: 'tradition', in: 'query' }, { name: 'period', in: 'query' }, { name: 'author', in: 'query' }, { name: 'q', in: 'query' }, { name: 'sort', in: 'query' }] } },
      '/works/{slug}': { get: { summary: 'Work detail with editions, chapters and related works' } },
      '/works/{slug}/chapters/{num}': { get: { summary: 'Reader payload: verses, word-by-word glosses, commentaries' } },
      '/verses/{id}': { get: { summary: 'Single verse with commentaries and editions' } },
      '/search': { get: { summary: 'Universal search across works and verses (FTS5, Devanagari + IAST)' } },
      '/daily-shloka': { get: { summary: 'Verse of the day with explanation' } },
      '/manuscripts': { get: { summary: 'Manuscript archive catalogue' } },
      '/sources': { get: { summary: 'Data sources with licence and copyright metadata' } },
      '/paths': { get: { summary: 'Learning paths with steps' } },
      '/quizzes/{slug}': { get: { summary: 'Quiz questions (answers withheld)' } },
      '/quizzes/{slug}/attempt': { post: { summary: 'Submit answers, receive score and review' } },
      '/assistant/ask': { post: { summary: 'RAG scripture assistant with citations' } },
      '/auth/register': { post: { summary: 'Create an account' } },
      '/auth/login': { post: { summary: 'Obtain a bearer token' } },
      '/me/bookmarks': { get: { summary: 'List bookmarks (auth)' }, post: { summary: 'Add a bookmark (auth)' } },
      '/me/notes': { get: { summary: 'List notes (auth)' }, post: { summary: 'Add a note (auth)' } },
      '/me/history': { get: { summary: 'Reading history (auth)' }, post: { summary: 'Save progress (auth)' } },
      '/admin/stats': { get: { summary: 'Editorial dashboard stats (staff)' } },
      '/admin/works/{id}/import': { post: { summary: 'Bulk verse import (staff)' } },
      '/admin/reindex': { post: { summary: 'Rebuild FTS and vector index (admin)' } },
    },
  });
});

/* ------------------------------------------------------------ static site */
if (fs.existsSync(CLIENT_DIST)) {
  app.use(express.static(CLIENT_DIST, { maxAge: '1h', index: false }));
  app.get('*', (req, res, next) => {
    if (req.path.startsWith('/api')) return next();
    res.sendFile(path.join(CLIENT_DIST, 'index.html'));
  });
} else {
  app.get('/', (_req, res) => {
    res.type('text/plain').send(
      'Sanatan Library API is running.\n\n' +
      'The client bundle has not been built yet. Run `npm --prefix ../client run build`, or use the Vite dev server.\n' +
      'API health: /api/health\n',
    );
  });
}

/* ------------------------------------------------------------- error layer */
app.use((req, res) => {
  if (req.path.startsWith('/api')) return res.status(404).json({ error: 'Endpoint not found' });
  res.status(404).type('text/plain').send('Not found');
});

app.use((err: any, req: express.Request, res: express.Response, _next: express.NextFunction) => {
  const status = err instanceof ApiError ? err.status : 500;
  if (status >= 500) console.error('[sanatan] error:', err);
  res.status(status).json({
    error: status >= 500 ? 'Internal server error' : err.message,
    ...(err instanceof ApiError && err.details ? { details: err.details } : {}),
  });
});

const server = app.listen(PORT, '0.0.0.0', () => {
  console.log(`[sanatan] API listening on http://0.0.0.0:${PORT}`);
  if (!fs.existsSync(CLIENT_DIST)) console.log('[sanatan] client/dist not found — API-only mode');
});

const shutdown = () => {
  console.log('[sanatan] shutting down');
  server.close(() => { try { db.close(); } catch { /* noop */ } process.exit(0); });
  setTimeout(() => process.exit(0), 4000);
};
process.on('SIGTERM', shutdown);
process.on('SIGINT', shutdown);

export { readToken };

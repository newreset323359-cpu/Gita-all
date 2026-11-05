# SANATAN LIBRARY · सनातन ज्ञानकोश

A browser-based, production-shaped digital library for Hindu scripture and the wider
Indian knowledge tradition: **336 catalogued works, 930 indexed verses, 416 edition
records, 17 languages, 62 traditions**, universal search, a per-book reader
(Devanagari + IAST + translations + word-by-word + commentary), user library,
learning paths, quizzes, manuscript archive, an admin dashboard and a
retrieval-augmented "Ask the corpus" assistant that only answers from indexed text
and always cites work + edition + chapter + verse.

Not a mockup: every page is wired to a live REST API backed by a real database.

---

## 1. Run it

```bash
# API (port 8080) — serves the built SPA as well
cd server
npm install
npm run seed:full        # catalogue + full Gītā (700) + full Yoga Sūtras (195) + indexes
npm run dev              # http://localhost:8080

# Frontend in dev mode with HMR (port 5173, proxies /api → 8080)
cd client
npm install
npm run dev
```

Production build:

```bash
cd client && npm run build     # → client/dist, served by the API with SPA fallback
cd server && npm run build && npm start
```

### Demo accounts

| Role | Email | Password |
| --- | --- | --- |
| Admin | `admin@sanatanlibrary.org` | `Sanatan@2026` |
| Scholar | `scholar@sanatanlibrary.org` | `Scholar@2026` |
| Reader | `reader@sanatanlibrary.org` | `Reader@2026` |

The sign-in page shows **one-click buttons** for these three accounts, so the build
can be evaluated without copying credentials. Change them (or run with
`SEED_DEMO_USERS=0`) before any public deployment.

### One command to run (also repairs a fresh sandbox)

```bash
bash scripts/serve.sh          # installs/builds/seeds only what is missing, then serves :8080
```

`node_modules` and `dist` are not preserved between sandbox sessions; the database
is. The launcher detects and rebuilds exactly the missing pieces.

### Embedding

The app is designed to be embedded (preview panes, LMS pages, research portals).
`X-Frame-Options` is removed and `Content-Security-Policy: frame-ancestors *` is sent
instead — set `FRAME_ANCESTORS=https://your.host` to restrict it in production.
Client storage goes through `lib/storage.ts`, which falls back to memory when the
document has an opaque origin (sandboxed iframes), so sign-in and bookmarks keep
working even where `localStorage` is unavailable.

---

## 2. What is implemented

### Content & catalogue
* **336 works** across the full requested scope — 4 Vedas + saṃhitās/brāhmaṇas/
  āraṇyakas, 13 principal + minor Upaniṣads, Rāmāyaṇa, Mahābhārata and the complete
  Gītā, 18 Mahāpuranas + Upapuranas, Vedāṅgas, six darśanas, Brahma Sūtras,
  Dharmaśāstra/Smṛti/Arthaśāstra, Śaiva/Vaiṣṇava/Śākta Āgama-Tantra, Yoga and
  Haṭhayoga, bhakti literature and saints, kāvya/nāṭya/alaṃkāra, regional
  literatures (Marathi, Hindi, Tamil, Telugu, Kannada, Bengali, Gujarati,
  Malayalam, …), Āyurveda (Caraka, Suśruta), gaṇita, jyotiṣa, vāstu, saṃgīta,
  inscriptions and modern research.
* **Full mūla texts indexed**: Bhagavad Gītā (18 chapters, 700 verses) and
  Yoga Sūtras (4 pādas, 195 sūtras), Devanagari **and** generated IAST.
* Curated demonstration excerpts elsewhere (Gītā/Upaniṣad/Yoga selections with
  English + Hindi + Marathi renderings and word-by-word glosses), each explicitly
  labelled.
* **416 edition records** carrying source URL, publisher, translator, licence and
  copyright status; **12 manuscript folios** with repository, shelfmark, script,
  material and date.

### Reading & research
* Universal search: FTS5 BM25 + local 256-dim embeddings + English→Sanskrit glossary
  expansion + concept-coverage re-ranking. Queries work in English, IAST or
  Devanagari (`karma`, `karmaṇy`, `कर्मण्येवाधिकारस्ते`).
* Reader with per-chapter contents, verse jump links, deep links (`#v-2-47`),
  display toggles (Devanagari / IAST / English / Hindi / Marathi / word-by-word /
  commentary), font scaling, text-to-speech recitation (where the browser has a
  Sanskrit-capable voice), print/PDF view and `.txt` export.
* Bookmarks, notes, reading history, personal library dashboard.
* Daily Śloka with commentary comparison and archive.
* Learning paths with step progress, quizzes with server-side scoring and
  per-question review linking back to the cited verse.
* Manuscript gallery and a sources/licensing page listing every upstream
  repository and the rights position of each record.

### Assistant (RAG)
`POST /api/assistant/ask` →
1. **retrieve** (hybrid: BM25 + vectors + work-title boost + concept matching),
2. **ground** (every passage carries work, edition, translator, licence, chapter,
   verse, source URL),
3. **compose** — extractive by default (cannot hallucinate); optional LLM pass when
   `LLM_API_KEY` / `OPENAI_API_KEY` is configured, constrained to retrieved text,
4. **verify** — citation markers checked against the retrieval set.
Answers include comparative-tradition readings (Advaita, Dvaita, Viśiṣṭādvaita,
Yoga, Nyāya, Sāṃkhya, Śaiva, Śākta) drawn from the commentary table, never invented.

### Admin
Dashboard stats, work CRUD, chapter/verse editing, bulk verse import (≤5000 rows),
commentary and edition management, manuscript records, user role management,
ingestion log, reindex.

---

## 3. Architecture

```
client/                      React 18 + TypeScript + Vite
  src/pages/                 16 route-level pages (lazy-loaded)
  src/components/            Layout, WorkCard, VerseCard, SearchBar, UI, Icons
  src/lib/                   api client (cache + in-flight dedupe), hooks, auth, format
  src/styles.css             design system (charcoal / antique gold / saffron)
  public/                    manifest, icons, 12 manuscript folios, self-hosted
                             Noto Serif/Sans Devanagari + fonts.css
  public/sw.js               service worker: offline shell + cached API GETs

server/                      Express 4 + TypeScript
  src/schema.sql             DDL: works, editions, chapters, verses, commentaries,
                             manuscripts, categories, sources, users, bookmarks,
                             notes, reading_history, paths, quizzes, FTS5 tables + triggers,
                             verse_vectors
  src/routes/library.ts      public API (works, reader, search, daily śloka, home…)
  src/routes/user.ts         auth + personal library + quiz attempts
  src/routes/admin.ts        staff CRUD, bulk import, reindex
  src/services/assistant.ts  retrieval → grounding → composition → verification
  src/services/embeddings.ts local hashed embeddings (swap for a hosted model)
  src/lib/normalize.ts       transliteration folding, stemming, FTS escaping,
                             English→Sanskrit glossary (hand-checked)
  src/seed/                  catalogue, curated excerpts, full-text importers

scripts/                     Python ingestion (Wikisource fetch, Devanagari→IAST)
data/sanatan.db              SQLite (WAL) — the shipped demo database
```

**Database.** SQLite (better-sqlite3, WAL) is used for the running demo so the whole
thing is self-contained. The schema is portable to PostgreSQL; the production DDL and
the rationale (connection pooling, `tsvector`/`pgvector` instead of FTS5 + local
vectors) are documented in `docs/ARCHITECTURE.md`. Every query goes through a thin
`all/get/run` layer, so the swap is mechanical.

**Scale.** All list endpoints paginate; search is index-backed; vectors and FTS
rows are per-verse so the corpus grows linearly; the reader fetches one chapter at a
time; the client caches GETs for 60 s and dedupes in-flight requests; pages are
code-split.

**Security.** Helmet, CORS allowlist, per-route rate limits, zod validation on every
write, bcrypt password hashing, JWT with reader/scholar/admin roles, staff guards on
`/api/admin/*`, no secrets in the repo (`.env` only), parameterised SQL everywhere.

---

## 4. Data sources & rights

| Source | Used for | Rights position |
| --- | --- | --- |
| Sanskrit Wikisource | mūla Devanagari for Gītā + Yoga Sūtras | CC BY-SA 4.0 transcription; verses themselves public domain |
| Vedic Heritage Portal (IGNCA) | catalogue + recitation references | Government portal — citation only |
| GRETIL (Göttingen) | catalogue of e-text editions | per-edition scholarly licences |
| Muktabodha | Kashmiri Śaiva / tantra catalogue | research access, reproduction restricted |
| SARIT | TEI critical editions (catalogue) | open scholarly licences |
| Sacred Texts Archive | public-domain translations (catalogue) | pre-1929, public domain |
| Namami / IGNCA / BORI / Asiatic Society | manuscript records | institutional, permission required |
| Sanskrit Documents | stotra / minor text catalogue | volunteer transcriptions, per-file |

Rules enforced in the data model and UI:
* every edition row stores `source_url`, `publisher`, `translator`, `license`,
  `copyright`, `rights_checked`;
* nothing is marked downloadable unless `rights_checked = 1`;
* no copyrighted edition text is reproduced; translations shown are either
  public-domain or written for this project (CC BY-SA 4.0);
* verses with no cleared translation render as **“mūla only”** — the library never
  attaches a translation it cannot license or verify.

Regenerate the imported payloads (network required):

```bash
python3 scripts/fetch_gita.py  server/src/seed/data/gita-raw.json
python3 scripts/build_gita_json.py server/src/seed/data/gita-raw.json server/src/seed/data/gita.json
python3 scripts/fetch_yoga.py  /tmp/yoga-raw.json   # then transliterate as in build_gita_json.py
cd server && npm run import && npm run reconcile && npm run reindex
```

---

## 5. API surface

```
GET  /api/health · /api/openapi.json
GET  /api/home · /api/meta · /api/daily-shloka
GET  /api/works?page&perPage&category&language&tradition&period&author&sort&q
GET  /api/works/:slug · /api/works/:slug/chapters · /api/works/:slug/chapters/:n
GET  /api/search?q&scope|type&page&perPage · /api/suggest?q
GET  /api/manuscripts · /api/sources · /api/paths · /api/paths/:slug
GET  /api/quizzes · /api/quizzes/:slug
POST /api/quizzes/:slug/attempt
POST /api/assistant/ask · GET /api/assistant/examples
POST /api/auth/register · /api/auth/login · GET /api/auth/me
GET  /api/me/overview · /api/me/bookmarks · /api/me/notes · /api/me/history
POST /api/me/bookmarks · /api/me/notes · /api/me/history
GET  /api/admin/stats · /api/admin/works · /api/admin/users · /api/admin/logs
POST /api/admin/works · /api/admin/works/:id/import · /api/admin/reindex
PATCH/DELETE /api/admin/works/:id · /api/admin/chapters… · /api/admin/verses…
```

The running server exposes the same list at `/api/openapi.json`.

---

## 6. Tests run against this build

* `tsc --noEmit` clean in `server`, `tsc -b` clean in `client`.
* Headless Chromium crawl of all 20 routes: no console errors, no error boxes,
  no stuck skeletons.
* Flows verified in-browser: assistant question → 5 cited passages; login →
  bookmark a verse → personal library; quiz → 10 answers → scored result with
  citations; search in IAST/English/Devanagari; chapter deep links; mobile
  viewports 390×844 with zero horizontal overflow.
* Offline: `sw.js` caches the shell and API GETs, so a previously opened chapter
  stays readable without a network.

---

## 7. Known gaps (honest list)

* The corpus is intentionally mixed: **two complete texts** (Gītā, Yoga Sūtras) plus
  curated excerpts. Everything else is fully catalogued with rights metadata but
  awaits ingestion — the admin bulk-import path and the importer scripts are the
  route in.
* The bundled embedding model is a local hashed-vector placeholder; point
  `services/embeddings.ts` at a hosted model (the interface is one function) for
  production semantic recall. Retrieval already degrades gracefully without it.
* Text-to-speech depends on the visitor's OS voices; Sanskrit quality varies.
* No payment/email/backup infrastructure — those are deployment concerns, listed in
  `docs/ARCHITECTURE.md` with a recommended production topology.

/**
 * Import the prepared mūla payloads (complete texts scraped from Sanskrit
 * Wikisource) into an already-seeded catalogue.
 *
 *   npx tsx src/seed/import-texts.ts
 *
 * Every payload is Devanagari mūla + machine-generated IAST; no translation is
 * asserted for verses the library has not cleared, and existing curated verses
 * are updated in place rather than replaced.
 */
import { readFileSync } from 'node:fs';
import { importWork, type ImportChapter, type EditionMeta } from './import-work.js';

type Payload = (ImportChapter & { title_en?: string })[];

const WIKISOURCE = (workPath: string): EditionMeta => ({
  label: 'Mūla text — Sanskrit Wikisource transcription (CC BY-SA 4.0)',
  publisher: 'Sanskrit Wikisource (community transcription)',
  year: '2026',
  sourceSlug: 'wikisource',
  sourceUrl: `https://sa.wikisource.org/wiki/${workPath}`,
  license: 'CC BY-SA 4.0 (transcription); mūla text public domain',
  copyright: 'Sanskrit Wikisource contributors',
});

const GITA_CHAPTERS: Record<number, { sa: string; iast: string; en: string }> = {
  1: { sa: 'अर्जुनविषादयोग', iast: 'Arjuna Viṣāda Yoga', en: 'The Despondency of Arjuna' },
  2: { sa: 'सांख्ययोग', iast: 'Sāṃkhya Yoga', en: 'The Yoga of Knowledge' },
  3: { sa: 'कर्मयोग', iast: 'Karma Yoga', en: 'The Yoga of Action' },
  4: { sa: 'ज्ञानकर्मसंन्यासयोग', iast: 'Jñāna Karma Sannyāsa Yoga', en: 'Knowledge, Action and Renunciation' },
  5: { sa: 'कर्मसंन्यासयोग', iast: 'Karma Sannyāsa Yoga', en: 'The Yoga of Renunciation of Action' },
  6: { sa: 'ध्यानयोग', iast: 'Dhyāna Yoga', en: 'The Yoga of Meditation' },
  7: { sa: 'ज्ञानविज्ञानयोग', iast: 'Jñāna Vijñāna Yoga', en: 'Knowledge and Realisation' },
  8: { sa: 'अक्षरब्रह्मयोग', iast: 'Akṣara Brahma Yoga', en: 'The Imperishable Brahman' },
  9: { sa: 'राजविद्याराजगुह्ययोग', iast: 'Rāja Vidyā Rāja Guhya Yoga', en: 'The Royal Knowledge' },
  10: { sa: 'विभूतियोग', iast: 'Vibhūti Yoga', en: 'The Divine Glories' },
  11: { sa: 'विश्वरूपदर्शनयोग', iast: 'Viśvarūpa Darśana Yoga', en: 'The Vision of the Universal Form' },
  12: { sa: 'भक्तियोग', iast: 'Bhakti Yoga', en: 'The Yoga of Devotion' },
  13: { sa: 'क्षेत्रक्षेत्रज्ञविभागयोग', iast: 'Kṣetra Kṣetrajña Vibhāga Yoga', en: 'The Field and the Knower of the Field' },
  14: { sa: 'गुणत्रयविभागयोग', iast: 'Guṇatraya Vibhāga Yoga', en: 'The Three Guṇas' },
  15: { sa: 'पुरुषोत्तमयोग', iast: 'Puruṣottama Yoga', en: 'The Supreme Person' },
  16: { sa: 'दैवासुरसंपद्विभागयोग', iast: 'Daivāsura Sampad Vibhāga Yoga', en: 'The Divine and Demoniac Estates' },
  17: { sa: 'श्रद्धात्रयविभागयोग', iast: 'Śraddhātraya Vibhāga Yoga', en: 'The Three Kinds of Faith' },
  18: { sa: 'मोक्षसंन्यासयोग', iast: 'Mokṣa Sannyāsa Yoga', en: 'Liberation through Renunciation' },
};

function load(name: string): Payload {
  return JSON.parse(readFileSync(new URL(`./data/${name}`, import.meta.url), 'utf8')) as Payload;
}

const gita = load('gita.json').map((c) => ({
  ...c,
  title_sa: GITA_CHAPTERS[c.chapter]?.sa,
  title: GITA_CHAPTERS[c.chapter]?.iast,
  title_en: GITA_CHAPTERS[c.chapter]?.en,
}));
importWork('bhagavad-gita', gita, WIKISOURCE('भगवद्गीता'));

const yoga = load('yoga-sutras.json').map((c) => ({
  ...c,
  title: c.title ?? `Pāda ${c.chapter}`,
  title_en: c.title_en ?? `Pāda ${c.chapter}`,
}));
importWork('yoga-sutras', yoga, WIKISOURCE('योगसूत्रम्'));

console.log('import complete');

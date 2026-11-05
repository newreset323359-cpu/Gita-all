/**
 * Curated bibliographic catalogue for SANATAN LIBRARY.
 * Every record is a real, attested work with conventional attribution, structure and
 * approximate historical period. Counts are the received traditional figures and are
 * labelled "traditional" in the UI where they vary by recension.
 *
 * NO copyrighted text is stored here — only bibliographic metadata and factual summaries
 * written for this project.
 */

export interface CategorySeed {
  slug: string; name: string; name_sa?: string; name_hi?: string;
  parent_slug?: string | null; kind: string; description: string; icon: string; sort_order?: number;
}

export const CATEGORIES: CategorySeed[] = [
  { slug: 'vedas', name: 'Vedas', name_sa: 'वेदाः', name_hi: 'वेद', kind: 'corpus', icon: 'veda', sort_order: 10, description: 'The four Vedas — Ṛg, Sāma, Yajur and Atharva — with their Saṃhitā, Brāhmaṇa and Āraṇyaka layers, the oldest layer of the Sanskrit canon.' },
  { slug: 'upanishads', name: 'Upanishads', name_sa: 'उपनिषदः', name_hi: 'उपनिषद', kind: 'corpus', icon: 'lamp', sort_order: 20, description: 'The Vedānta corpus: thirteen principal Upaniṣads and the wider collection of 108, from the great mahāvākyas to the Yoga and Sannyāsa Upaniṣads.' },
  { slug: 'vedangas', name: 'Vedangas', name_sa: 'वेदाङ्गानि', name_hi: 'वेदांग', kind: 'corpus', icon: 'six', sort_order: 30, description: 'The six limbs of Vedic learning: Śikṣā, Kalpa, Vyākaraṇa, Nirukta, Chandas and Jyotiṣa, together with the Prātiśākhyas and Śrauta/Gṛhya Sūtras.' },
  { slug: 'darshanas', name: 'Darshanas', name_sa: 'षड्दर्शनानि', name_hi: 'दर्शन', kind: 'tradition', icon: 'pillars', sort_order: 40, description: 'The six darśanas — Nyāya, Vaiśeṣika, Sāṃkhya, Yoga, Mīmāṃsā and Vedānta — with their foundational sūtras and principal commentaries.' },
  { slug: 'epics', name: 'Epics & Gita', name_sa: 'इतिहासः', name_hi: 'इतिहास', kind: 'corpus', icon: 'bow', sort_order: 50, description: 'Rāmāyaṇa, Mahābhārata and the Bhagavad Gītā with their commentarial traditions and regional retellings.' },
  { slug: 'puranas', name: 'Puranas', name_sa: 'पुराणानि', name_hi: 'पुराण', kind: 'corpus', icon: 'wheel', sort_order: 60, description: 'The eighteen Mahāpurāṇas and the Upapurāṇas: cosmology, genealogy, iconography and devotional narrative.' },
  { slug: 'dharmashastra', name: 'Dharmaśāstra & Arthaśāstra', name_sa: 'धर्मशास्त्रम्', name_hi: 'धर्मशास्त्र', kind: 'corpus', icon: 'scale', sort_order: 70, description: 'Dharma-sūtras, Smṛtis, Manusmṛti, the Arthaśāstra and Nīti literature — law, ethics, statecraft and political economy.' },
  { slug: 'agamas', name: 'Āgamas & Tantras', name_sa: 'आगमतन्त्राणि', name_hi: 'आगम-तंत्र', kind: 'tradition', icon: 'trident', sort_order: 80, description: 'Śaiva, Vaiṣṇava and Śākta Āgamas and Tantras, including Kashmiri Śaivism, Pañcarātra, Śrīvidyā and Trika literature.' },
  { slug: 'yoga', name: 'Yoga', name_sa: 'योगः', name_hi: 'योग', kind: 'tradition', icon: 'lotus', sort_order: 90, description: 'Patañjali’s Yoga Sūtras with commentaries, the Haṭha Yoga corpus, and meditation and Kuṇḍalinī manuals.' },
  { slug: 'bhakti', name: 'Bhakti Literature', name_sa: 'भक्तिसाहित्यम्', name_hi: 'भक्ति साहित्य', kind: 'genre', icon: 'flame', sort_order: 100, description: 'Saints’ compositions, stotras and padāvalīs from the Sanskrit, Marathi, Hindi, Tamil, Telugu, Kannada, Bengali, Gujarati and Assamese devotional streams.' },
  { slug: 'kavya', name: 'Sanskrit Kāvya & Drama', name_sa: 'काव्यम्', name_hi: 'काव्य', kind: 'genre', icon: 'quill', sort_order: 110, description: 'Mahākāvya, court epic, drama, prose romance, fable, poetics and aesthetics from Bhāravi to Jagannātha.' },
  { slug: 'regional', name: 'Regional Literature', name_sa: 'प्रादेशिकं साहित्यम्', name_hi: 'क्षेत्रीय साहित्य', kind: 'genre', icon: 'languages', sort_order: 120, description: 'Marathi, Hindi, Tamil, Telugu, Kannada, Bengali, Gujarati, Malayalam, Odia, Assamese and Punjabi classics of the Indian knowledge tradition.' },
  { slug: 'ayurveda', name: 'Āyurveda', name_sa: 'आयुर्वेदः', name_hi: 'आयुर्वेद', kind: 'science', icon: 'herb', sort_order: 130, description: 'The Bṛhattrayī and Laghutrayī, surgical traditions, materia medica, nighaṇṭus and iatrochemistry.' },
  { slug: 'ganita', name: 'Gaṇita & Astronomy', name_sa: 'गणितज्योतिषम्', name_hi: 'गणित एवं खगोल', kind: 'science', icon: 'abacus', sort_order: 140, description: 'Siddhāntic astronomy, arithmetic, algebra, geometry and the Kerala school, with Jyotiṣa, Muhūrta and Saṃhitā literature.' },
  { slug: 'vastu', name: 'Vāstu & Architecture', name_sa: 'वास्तुशास्त्रम्', name_hi: 'वास्तु शास्त्र', kind: 'science', icon: 'temple', sort_order: 150, description: 'Śilpa and Vāstu texts on town planning, temple architecture, iconometry and sculpture.' },
  { slug: 'sangita', name: 'Saṅgīta & Nāṭya', name_sa: 'सङ्गीतनाट्यम्', name_hi: 'संगीत एवं नाट्य', kind: 'science', icon: 'veena', sort_order: 160, description: 'Nāṭyaśāstra and its successors: performance theory, musicology, rāga, tāla and dance treatises.' },
  { slug: 'research', name: 'Manuscripts & Research', name_sa: 'पाण्डुलिपयः', name_hi: 'पांडुलिपि एवं शोध', kind: 'corpus', icon: 'scroll', sort_order: 170, description: 'Catalogue records of historical manuscripts, inscriptions, critical editions and modern scholarship.' },
  { slug: 'stotra', name: 'Stotra & Prayer', name_sa: 'स्तोत्राणि', name_hi: 'स्तोत्र', kind: 'genre', icon: 'bell', sort_order: 105, description: 'Hymns of praise — sahasranāmas, aṣṭakas, śatakas and devotional prayers used in daily practice.' },
];

export const SOURCES = [
  { slug: 'vedic-heritage', name: 'Vedic Heritage Portal (Govt. of India, IGNCA)', url: 'https://vedicheritage.gov.in/', kind: 'portal', license: 'Government of India portal — content under respective rights; metadata cited', copyright: 'IGNCA / Ministry of Culture, Government of India', notes: 'Authoritative audio and text for Vedic recitation; used for verification metadata only.' },
  { slug: 'gretil', name: 'GRETIL — Göttingen Register of Electronic Texts in Indian Languages', url: 'http://gretil.sub.uni-goettingen.de/', kind: 'repository', license: 'Individual e-text licences vary (mostly free scholarly use)', copyright: 'Respective editors and Universität Göttingen', notes: 'Machine-readable Sanskrit e-texts; each edition carries its own rights statement.' },
  { slug: 'muktabodha', name: 'Muktabodha Digital Library', url: 'https://muktabodha.org/', kind: 'archive', license: 'Free access for research; reproduction restricted', copyright: 'Muktabodha Indological Research Institute', notes: 'Kashmiri Śaiva and Tantric manuscripts, searchable in transliteration.' },
  { slug: 'sanskrit-documents', name: 'Sanskrit Documents (sanskritdocuments.org)', url: 'https://sanskritdocuments.org/', kind: 'repository', license: 'Mixed — many texts public domain, some volunteer transcriptions', copyright: 'Respective contributors', notes: 'Large Devanagari/ITRANS corpus, useful for stotra and minor Upaniṣad colophons.' },
  { slug: 'sacred-texts', name: 'Internet Sacred Text Archive', url: 'https://sacred-texts.com/hin/', kind: 'repository', license: 'Public-domain translations (pre-1929), reproduced where rights permit', copyright: 'Public domain originals', notes: 'Max Müller (SBE), Griffith and Telang translations; public-domain status verified per file.' },
  { slug: 'sarit', name: 'SARIT — Search and Retrieval of Indic Texts', url: 'https://sarit.indology.info/', kind: 'repository', license: 'TEI-encoded texts, open scholarly licences', copyright: 'Respective editors', notes: 'TEI XML Sanskrit texts with variant readings.' },
  { slug: 'dsal', name: 'Digital South Asia Library / Cologne Sanskrit Lexicon', url: 'https://dsal.uchicago.edu/dictionaries/', kind: 'repository', license: 'Open for reference use', copyright: 'University of Chicago; Cologne University', notes: 'Monier-Williams and Apte dictionaries for lexical verification of word-by-word glosses.' },
  { slug: 'bori', name: 'Bhandarkar Oriental Research Institute, Pune', url: 'https://bori.ac.in/', kind: 'archive', license: 'Institutional — permission required for reproduction', copyright: 'BORI, Pune', notes: 'Critical edition of the Mahābhārata and the largest Sanskrit manuscript collection.' },
  { slug: 'nmm', name: 'National Mission for Manuscripts (Namami)', url: 'https://namami.gov.in/', kind: 'portal', license: 'Government of India catalogue data', copyright: 'NMM / IGNCA', notes: 'Catalogue of manuscript holdings across Indian repositories.' },
  { slug: 'ignca', name: 'IGNCA — Indira Gandhi National Centre for the Arts', url: 'https://ignca.gov.in/', kind: 'archive', license: 'Institutional catalogue; images watermarked', copyright: 'IGNCA', notes: 'Manuscript, art and cultural archive reference.' },
  { slug: 'jainpedia', name: 'Asiatic Society, Kolkata', url: 'https://asiaticsocietykolkata.org/', kind: 'archive', license: 'Institutional', copyright: 'Asiatic Society', notes: 'Historic collection of Sanskrit, Persian and vernacular manuscripts.' },
  { slug: 'sanskrit-lexicon', name: 'Monier-Williams Sanskrit–English Dictionary (1899)', url: 'https://www.sanskrit-lexicon.uni-koeln.de/', kind: 'repository', license: 'Public domain', copyright: 'Public domain (1899)', notes: 'Reference for lexical glosses and transliteration conventions.' },
  { slug: 'wikisource', name: 'Sanskrit Wikisource (sa.wikisource.org)', url: 'https://sa.wikisource.org/wiki/भगवद्गीता', kind: 'repository', license: 'CC BY-SA 4.0 — community transcription; mūla text itself is public domain', copyright: 'Sanskrit Wikisource contributors', notes: 'Devanagari mūla used to index the complete Bhagavad Gītā; IAST transliteration generated by this library from the Devanagari.' },
  { slug: 'editorial', name: 'Sanatan Library editorial editions', url: '/sources', kind: 'edition', license: 'CC BY-SA 4.0 (editorial text and translations)', copyright: 'Sanatan Library contributors', notes: 'Mūla Sanskrit verses transcribed and translations/commentary summaries written for this project; clearly marked as demonstration excerpts.' },
];

export type Row = {
  slug: string; title: string; sa?: string; en?: string; hi?: string; cat: string;
  trad?: string; lang?: string; author?: string; dates?: string; period?: string;
  summary?: string; sig?: string; structure?: string; verses?: number; chapters?: number;
  pop?: number; tags?: string; hue?: number; featured?: 1 | 0; verified?: 1 | 0;
};

export const PERIODS = {
  vedic: 'Vedic (c. 1500–1000 BCE)',
  lateVedic: 'Late Vedic (c. 1000–600 BCE)',
  sutra: 'Sūtra period (c. 600–200 BCE)',
  epic: 'Epic period (c. 400 BCE–400 CE)',
  classical: 'Classical (c. 400–1000 CE)',
  medieval: 'Medieval (c. 1000–1500 CE)',
  lateMedieval: 'Late medieval (c. 1500–1800 CE)',
  modern: 'Modern (19th–20th c. CE)',
};

/* ---------------------------------------------------------------------------
 * 1. VEDAS
 * ------------------------------------------------------------------------- */
export const VEDAS: Row[] = [
  { slug: 'rigveda', title: 'Ṛgveda Saṃhitā', sa: 'ऋग्वेदसंहिता', en: 'Rigveda Samhita', hi: 'ऋग्वेद संहिता', cat: 'vedas', trad: 'Vedic', author: 'Attributed to the ṛṣis of the ten maṇḍalas', period: PERIODS.vedic, verses: 10600, chapters: 10, pop: 98, featured: 1, hue: 34, verified: 1,
    structure: '10 maṇḍalas · 1,028 sūktas (hymns) · c. 10,600 ṛk-s',
    summary: 'The oldest surviving Indo-Aryan text and the foundational Veda: ten books of hymns to Agni, Indra, Varuṇa, Uṣas, Soma and the Viśvedevas, including the Nāsadīya Sūkta on creation and the Gāyatrī mantra.',
    sig: 'The starting point of the entire Sanskrit canon; maṇḍalas 2–7 are the "family books" assigned to individual ṛṣi lineages, while 1, 8, 9 and 10 are later collections.',
    tags: 'samhita,rsis,gayatri,nasadiya,sukta' },
  { slug: 'samaveda', title: 'Sāmaveda Saṃhitā', sa: 'सामवेदसंहिता', en: 'Samaveda Samhita', cat: 'vedas', trad: 'Vedic', period: PERIODS.vedic, verses: 1875, chapters: 2, pop: 84, hue: 30, verified: 1,
    structure: 'Pūrvārcika · Uttarārcika · c. 1,875 mantras set to melody',
    summary: 'The Veda of melody: verses largely drawn from the Ṛgveda but arranged for singing with the notation of the sāman chant, the root of the Indian musical tradition.',
    sig: 'Determines the melodic form (sāman) of Vedic ritual; with the Kauthuma and Rāṇāyanīya recensions it preserves the oldest layers of Indian music theory.',
    tags: 'samhita,saman,chant,music' },
  { slug: 'yajurveda-shukla', title: 'Śukla Yajurveda Saṃhitā (Vājasaneyī Mādhyandina)', sa: 'शुक्लयजुर्वेदसंहिता', en: 'White Yajurveda', cat: 'vedas', trad: 'Vedic', period: PERIODS.vedic, verses: 1990, chapters: 40, pop: 76, hue: 28, verified: 1,
    structure: '40 adhyāyas · Vājasaneyi Mādhyandina and Kāṇva recensions',
    summary: 'The "white" Yajurveda, in which mantras and ritual instructions are kept distinct; the Īśāvāsya Upaniṣad forms its final chapter.',
    sig: 'Central liturgical text of the Śrauta ritual; its Saṃhitā includes the celebrated Rudrādhyāya and the Śatarudrīya.',
    tags: 'samhita,yajna,isavasya' },
  { slug: 'yajurveda-krishna', title: 'Kṛṣṇa Yajurveda — Taittirīya Saṃhitā', sa: 'कृष्णयजुर्वेदसंहिता', en: 'Black Yajurveda', cat: 'vedas', trad: 'Vedic', period: PERIODS.vedic, verses: 2198, chapters: 7, pop: 72, hue: 26, verified: 1,
    structure: '7 kāṇḍas · Kāṭhaka, Kapisthala and Maitrāyaṇī recensions also survive',
    summary: 'The "black" Yajurveda, where mantra and prose commentary are interwoven; the Taittirīya school preserved Upaniṣadic and Āraṇyaka material within the same tradition.',
    sig: 'Source of the Taittirīya Upaniṣad and a substantial part of the Vedic ritual corpus, including the Śrī Rudram.',
    tags: 'samhita,taittiriya,rudram' },
  { slug: 'atharvaveda', title: 'Atharvaveda Saṃhitā (Śaunaka)', sa: 'अथर्ववेदसंहिता', en: 'Atharvaveda', cat: 'vedas', trad: 'Vedic', period: PERIODS.vedic, verses: 5977, chapters: 20, pop: 80, hue: 32, verified: 1,
    structure: '20 kāṇḍas · 731 sūktas · c. 5,977 mantras (Śaunaka recension)',
    summary: 'The Veda of the Atharvāns: hymns of healing, protection, kingship and speculative cosmology, including the Pṛthivī Sūkta and the Brahmavādin verses.',
    sig: 'Largest source of early Indian medicine, mantric ritual and metaphysics of the "fourth Veda"; three Upaniṣads belong to it.',
    tags: 'samhita,healing,prithivi,bhoomi' },
  { slug: 'aitareya-brahmana', title: 'Aitareya Brāhmaṇa', sa: 'ऐतरेयब्राह्मणम्', cat: 'vedas', trad: 'Vedic', author: 'Ascribed to Mahidāsa Aitareya', period: PERIODS.lateVedic, chapters: 8, pop: 46, hue: 30, verified: 1, structure: '8 pañcikās (40 adhyāyas)', summary: 'The principal Brāhmaṇa of the Ṛgveda: ritual exegesis, the Vedic consecration of kings (Rājasūya) and legendary genealogies.', tags: 'brahmana,ritual,rajasuya' },
  { slug: 'shatapatha-brahmana', title: 'Śatapatha Brāhmaṇa', sa: 'शतपथब्राह्मणम्', cat: 'vedas', trad: 'Vedic', period: PERIODS.lateVedic, chapters: 14, pop: 62, verified: 1, structure: '14 kāṇḍas · Mādhyandina and Kāṇva recensions', summary: 'The "hundred-path" Brāhmaṇa of the Śukla Yajurveda: the most extensive ritual manual of the Vedic corpus and a primary source for the history of sacrifice, cosmogony and āśrama theory.', tags: 'brahmana,ritual,cosmogony' },
  { slug: 'taittiriya-brahmana', title: 'Taittirīya Brāhmaṇa', sa: 'तैत्तिरीयब्राह्मणम्', cat: 'vedas', trad: 'Vedic', period: PERIODS.lateVedic, chapters: 3, pop: 40, verified: 1, structure: '3 aṣṭakas', summary: 'Brāhmaṇa of the Kṛṣṇa Yajurveda, with ritual instruction and the famous Vedic mantra of the student (Brahmopadeśa).', tags: 'brahmana,ritual' },
  { slug: 'jaiminiya-brahmana', title: 'Jaiminīya Brāhmaṇa', sa: 'जैमिनीयब्राह्मणम्', cat: 'vedas', trad: 'Vedic', period: PERIODS.lateVedic, pop: 30, verified: 1, structure: 'Sāmaveda Brāhmaṇa', summary: 'Brāhmaṇa of the Sāmaveda preserving archaic ritual narratives and the famous Śyena and Udgītha lore.', tags: 'brahmana,saman' },
  { slug: 'aitareya-aranyaka', title: 'Aitareya Āraṇyaka', sa: 'ऐतरेयआरण्यकम्', cat: 'vedas', trad: 'Vedic', period: PERIODS.lateVedic, chapters: 5, pop: 36, verified: 1, structure: '5 āraṇyakas · 2nd concludes with Aitareya Upaniṣad', summary: '"Forest text" of the Ṛgveda linking Brāhmaṇa ritual to interiorised meditation, the Mahāvrata rite and the transition to Vedānta.', tags: 'aranyaka,vedanta' },
  { slug: 'taittiriya-aranyaka', title: 'Taittirīya Āraṇyaka', sa: 'तैत्तिरीयआरण्यकम्', cat: 'vedas', trad: 'Vedic', period: PERIODS.lateVedic, chapters: 10, pop: 44, verified: 1, structure: '10 prapāṭhakas · contains the Śrī Rudram', summary: 'Āraṇyaka of the Taittirīya school, source of the Rudra hymns (Śrī Rudram, Namakam–Chamakam) recited in Śaiva worship.', tags: 'aranyaka,rudram,shiva' },
  { slug: 'kaushitaki-brahmana', title: 'Kauṣītaki Brāhmaṇa', sa: 'कौषीतकिब्राह्मणम्', cat: 'vedas', trad: 'Vedic', period: PERIODS.lateVedic, pop: 26, verified: 1, structure: '30 adhyāyas', summary: 'Ṛgvedic Brāhmaṇa of the Kauṣītaki school, complementing the Aitareya with ritual and philosophical material.', tags: 'brahmana' },
  { slug: 'gopatha-brahmana', title: 'Gopatha Brāhmaṇa', sa: 'गोपथब्राह्मणम्', cat: 'vedas', trad: 'Vedic', period: PERIODS.lateVedic, pop: 22, verified: 1, structure: '2 pūrva / 6 uttara adhyāyas', summary: 'The only surviving Brāhmaṇa of the Atharvaveda, treating ritual functionaries and the twenty-one Vedic recensions.', tags: 'brahmana,atharvaveda' },
  { slug: 'panchavimsha-brahmana', title: 'Pañcaviṃśa (Tāṇḍya) Brāhmaṇa', sa: 'पञ्चविंशब्राह्मणम्', cat: 'vedas', trad: 'Vedic', period: PERIODS.lateVedic, chapters: 25, pop: 24, verified: 1, structure: '25 adhyāyas · describes the Soma rites', summary: 'Sāmaveda Brāhmaṇa of twenty-five sections, the primary account of the Soma sacrifices in the sāman tradition.', tags: 'brahmana,soma' },
  { slug: 'rigveda-pratishakhya', title: 'Ṛgveda Prātiśākhya (Śākalya)', sa: 'ऋग्वेदप्रातिशाख्यम्', cat: 'vedangas', trad: 'Vedic', author: 'Śākalya', period: PERIODS.lateVedic, pop: 30, verified: 1, structure: 'Recension-specific phonetic treatise', summary: 'The earliest systematic phonetics of Vedic recitation: the rules of sandhi, accent and sound modification that preserve the Ṛgveda orally without change.', sig: 'A foundational document of linguistics, older in its material than Pāṇini.', tags: 'shiksha,phonetics,vedanga' },
  { slug: 'shulba-sutra-baudhayana', title: 'Baudhāyana Śulba Sūtra', sa: 'बौधायनशुल्बसूत्रम्', cat: 'ganita', trad: 'Vedic', author: 'Baudhāyana', period: PERIODS.sutra, pop: 52, verified: 1, structure: '3 praśnas · geometry of fire altars', summary: 'The oldest Indian geometry: rules for constructing sacrificial altars of prescribed area, containing a form of the Pythagorean theorem and approximations to √2.', sig: 'A landmark of ancient mathematics, studied today for the "Śulba theorem" and its rational approximations.', tags: 'geometry,sulba,mathematics' },
  { slug: 'vedanga-jyotisha', title: 'Vedāṅga Jyotiṣa (Lagadha)', sa: 'वेदाङ्गज्योतिषम्', cat: 'ganita', trad: 'Vedic', author: 'Lagadha', period: PERIODS.lateVedic, verses: 43, pop: 50, verified: 1, structure: 'Ṛgvedic 36 verses · Yajurvedic 43 verses', summary: 'The oldest surviving Indian astronomical text: calendrics, the five-year yuga and the solar/lunar cycles used to schedule sacrifices.', sig: 'Marks the beginning of the Indian astronomical tradition and the sixth Vedāṅga.', tags: 'jyotisha,astronomy,calendar' },
];

/* ---------------------------------------------------------------------------
 * 2. VEDANGAS
 * ------------------------------------------------------------------------- */
export const VEDANGAS: Row[] = [
  { slug: 'panini-ashtadhyayi', title: 'Aṣṭādhyāyī', sa: 'अष्टाध्यायी', en: 'Ashtadhyayi of Panini', cat: 'vedangas', trad: 'Vyakarana', author: 'Pāṇini', dates: 'c. 5th–4th c. BCE', period: PERIODS.sutra, verses: 3964, chapters: 8, pop: 88, featured: 1, hue: 40, verified: 1, structure: '8 adhyāyas · c. 3,964 sūtras, with the Śivasūtras and Dhātupāṭha', summary: 'The generative grammar of Sanskrit — a rule system (sūtra) with meta-rules, derivational machinery and the technical vocabulary that still defines linguistics.', sig: 'Considered the world’s first fully formal grammar; its economy and rule ordering are studied in modern computational linguistics.', tags: 'vyakarana,grammar,linguistics' },
  { slug: 'patanjali-mahabhashya', title: 'Vyākaraṇa Mahābhāṣya', sa: 'व्याकरणमहाभाष्यम्', cat: 'vedangas', trad: 'Vyakarana', author: 'Patañjali', dates: 'c. 2nd c. BCE', period: PERIODS.sutra, chapters: 8, pop: 66, verified: 1, structure: '8 adhyāyas · commentary on selected sūtras of Pāṇini', summary: 'Patañjali’s great commentary on Pāṇini and Kātyāyana: philosophical debate (śabdārtha-vicāra) on whether words denote universals, individuals or both.', sig: 'One of the three foundational texts of Sanskrit grammar (the "Muni-traya") and a major work of Indian philosophy of language.', tags: 'vyakarana,bhashya,philosophy-of-language' },
  { slug: 'nirukta-yaska', title: 'Nirukta', sa: 'निरुक्तम्', cat: 'vedangas', trad: 'Nirukta', author: 'Yāska', dates: 'c. 5th c. BCE', period: PERIODS.sutra, chapters: 14, pop: 48, verified: 1, structure: '14 adhyāyas · Nighaṇṭu word lists + etymology', summary: 'Etymology and semantic analysis of difficult Vedic words, with the classic fourfold classification of words (nāma, ākhyāta, upasarga, nipāta).', sig: 'The oldest surviving Indian work of lexicography and semantics.', tags: 'nirukta,etymology,lexicography' },
  { slug: 'chandahsutra-pingala', title: 'Chandaḥśāstra (Piṅgala)', sa: 'छन्दःशास्त्रम्', cat: 'vedangas', trad: 'Chandas', author: 'Piṅgala', period: PERIODS.sutra, chapters: 8, pop: 46, verified: 1, structure: '8 adhyāyas · metres and prosody', summary: 'The science of Vedic and classical metre, including the combinatorics of syllable patterns that anticipates binary numeration.', sig: 'Contains early combinatorial mathematics — the "Piṅgala triangle" of metrical combinations.', tags: 'chandas,prosody,combinatorics' },
  { slug: 'apastamba-srautasutra', title: 'Āpastamba Śrauta Sūtra', sa: 'आपस्तम्बश्रौतसूत्रम्', cat: 'vedangas', trad: 'Kalpa', author: 'Āpastamba', period: PERIODS.sutra, chapters: 30, pop: 36, verified: 1, structure: '30 praśnas', summary: 'The most complete Śrauta (public ritual) sūtra of the Kṛṣṇa Yajurveda, covering the full sequence of solemn sacrifices.', tags: 'kalpa,srauta,ritual' },
  { slug: 'ashvalayana-grihyasutra', title: 'Āśvalāyana Gṛhya Sūtra', sa: 'आश्वलायनगृह्यसूत्रम्', cat: 'vedangas', trad: 'Kalpa', author: 'Āśvalāyana', period: PERIODS.sutra, chapters: 4, pop: 32, verified: 1, structure: '4 adhyāyas', summary: 'Domestic ritual of the Ṛgveda: the sacraments (saṃskāras) from birth to marriage and the daily fire offerings.', tags: 'kalpa,grihya,samskara' },
  { slug: 'gautama-dharmasutra', title: 'Gautama Dharma Sūtra', sa: 'गौतमधर्मसूत्रम्', cat: 'dharmashastra', trad: 'Dharma', author: 'Gautama', period: PERIODS.sutra, chapters: 28, pop: 34, verified: 1, structure: '28 adhyāyas', summary: 'The oldest surviving Dharma Sūtra: sources of dharma, the four āśramas, expiation and judicial procedure in aphoristic form.', tags: 'dharmasutra,law,ashrama' },
  { slug: 'baudhayana-dharmasutra', title: 'Baudhāyana Dharma Sūtra', sa: 'बौधायनधर्मसूत्रम्', cat: 'dharmashastra', trad: 'Dharma', author: 'Baudhāyana', period: PERIODS.sutra, chapters: 4, pop: 30, verified: 1, structure: '4 praśnas', summary: 'Dharma Sūtra of the Taittirīya school with detailed rules on inheritance, kingship and legal procedure.', tags: 'dharmasutra,law' },
  { slug: 'apastamba-dharmasutra', title: 'Āpastamba Dharma Sūtra', sa: 'आपस्तम्बधर्मसूत्रम्', cat: 'dharmashastra', trad: 'Dharma', author: 'Āpastamba', period: PERIODS.sutra, chapters: 2, pop: 38, verified: 1, structure: '2 praśnas, 29 adhyāyas', summary: 'Influential Dharma Sūtra on the duties of the householder, criminal and civil law, and the geography of dharma by region and age.', tags: 'dharmasutra,law' },
];

/* ---------------------------------------------------------------------------
 * 3. UPANISHADS — thirteen principal + the wider 108 corpus
 * ------------------------------------------------------------------------- */
const principalUpanishads: Row[] = [
  { slug: 'isha-upanishad', title: 'Īśāvāsya Upaniṣad', sa: 'ईशावास्योपनिषद्', cat: 'upanishads', trad: 'Vedanta', period: PERIODS.lateVedic, verses: 18, chapters: 1, pop: 92, featured: 1, hue: 36, verified: 1, structure: '18 mantras · Śukla Yajurveda, adhyāya 40', summary: 'The shortest of the principal Upaniṣads: renunciation within action — "all this is pervaded by the Lord; enjoy through renunciation" — closing with the prayer from darkness to light.', sig: 'The only Upaniṣad that forms part of a Vedic Saṃhitā itself; a favourite of Vedānta for reconciling knowledge and works.', tags: 'vedanta,isavasya,mahavakya' },
  { slug: 'kena-upanishad', title: 'Kena Upaniṣad', sa: 'केनोपनिषद्', cat: 'upanishads', trad: 'Vedanta', period: PERIODS.lateVedic, verses: 35, chapters: 4, pop: 70, verified: 1, structure: '4 khaṇḍas · Sāmaveda (Talavakāra)', summary: 'Enquiry into "by whom?" — the power that impels mind and senses is Brahman; ends with the parable of Umā Haimavatī teaching the gods the worthlessness of self-vaunting power.', tags: 'vedanta,brahman' },
  { slug: 'katha-upanishad', title: 'Kaṭha Upaniṣad', sa: 'कठोपनिषद्', cat: 'upanishads', trad: 'Vedanta', period: PERIODS.lateVedic, verses: 119, chapters: 6, pop: 86, verified: 1, structure: '2 adhyāyas × 3 vallīs · Kṛṣṇa Yajurveda', summary: 'The dialogue of Naciketas and Yama on death and the Self — the distinction of the good (śreyas) from the pleasant (preyas), the chariot simile of body and mind, and the indestructible ātman.', tags: 'vedanta,death,atman,naciketas' },
  { slug: 'prashna-upanishad', title: 'Praśna Upaniṣad', sa: 'प्रश्नोपनिषद्', cat: 'upanishads', trad: 'Vedanta', period: PERIODS.lateVedic, verses: 67, chapters: 6, pop: 62, verified: 1, structure: '6 praśnas · Atharvaveda', summary: 'Six questions put to Pippalāda by six seekers, on the sources of life, prāṇa, sleep and dream, meditation on Om, and the sixteen-part nature of the person.', tags: 'vedanta,prana,om' },
  { slug: 'mundaka-upanishad', title: 'Muṇḍaka Upaniṣad', sa: 'मुण्डकोपनिषद्', cat: 'upanishads', trad: 'Vedanta', period: PERIODS.lateVedic, verses: 64, chapters: 6, pop: 76, verified: 1, structure: '3 muṇḍakas × 2 khaṇḍas · Atharvaveda', summary: 'The distinction of higher and lower knowledge, the metaphor of the two birds, and the famous declaration that truth alone triumphs (satyam eva jayate).', tags: 'vedanta,vidya,birds' },
  { slug: 'mandukya-upanishad', title: 'Māṇḍūkya Upaniṣad', sa: 'माण्डूक्योपनिषद्', cat: 'upanishads', trad: 'Vedanta', period: PERIODS.lateVedic, verses: 12, chapters: 4, pop: 84, verified: 1, structure: '12 mantras · the earliest text on the analysis of Om and the four states', summary: 'Twelve verses on Om and the four states of the self: wakefulness (vaiśvānara), dream (taijasa), deep sleep (prājña) and the fourth (turīya), the basis of Advaita psychology.', sig: 'The subject of Gauḍapāda’s Māṇḍūkya Kārikā, the earliest systematic Advaita treatise.', tags: 'vedanta,om,turiya,advaita' },
  { slug: 'taittiriya-upanishad', title: 'Taittirīya Upaniṣad', sa: 'तैत्तिरीयोपनिषद्', cat: 'upanishads', trad: 'Vedanta', period: PERIODS.lateVedic, verses: 71, chapters: 3, pop: 80, verified: 1, structure: 'Śīkṣāvallī · Brahmānandavallī · Bhṛguvallī', summary: 'Contains the definition of Brahman as satya-jñāna-ananta, the five sheaths (pañcakośa), the bliss-of-Brahman calculation, the convocation address of a graduating student, and the ethics of non-harm and truth.', tags: 'vedanta,panchakosha,mahavakya' },
  { slug: 'aitareya-upanishad', title: 'Aitareya Upaniṣad', sa: 'ऐतरेयोपनिषद्', cat: 'upanishads', trad: 'Vedanta', period: PERIODS.lateVedic, verses: 33, chapters: 3, pop: 60, verified: 1, structure: '3 chapters · 5th chapter of the Aitareya Āraṇyaka', summary: 'The cosmogonic sequence by which the Self created the worlds and entered the person, concluding with the mahāvākya "prajñānaṃ brahma" — consciousness is Brahman.', tags: 'vedanta,creation,mahavakya' },
  { slug: 'chandogya-upanishad', title: 'Chāndogya Upaniṣad', sa: 'छान्दोग्योपनिषद्', cat: 'upanishads', trad: 'Vedanta', period: PERIODS.lateVedic, verses: 629, chapters: 8, pop: 88, verified: 1, structure: '8 prapāṭhakas · Sāmaveda', summary: 'The largest principal Upaniṣad: the singing of the sāman as worship, the udgītha, the five fires, the analysis of sleep and hunger, the dialogue of Uddālaka Āruṇi with Śvetaketu teaching "tat tvam asi", and the story of Satyakāma.', tags: 'vedanta,tat-tvam-asi,saman' },
  { slug: 'brihadaranyaka-upanishad', title: 'Bṛhadāraṇyaka Upaniṣad', sa: 'बृहदारण्यकोपनिषद्', cat: 'upanishads', trad: 'Vedanta', period: PERIODS.lateVedic, verses: 436, chapters: 6, pop: 90, verified: 1, structure: '6 adhyāyas (Mādhyandina; Kāṇva recension differs)', summary: 'The longest and arguably oldest Upaniṣad: the brahmodya debates of Yājñavalkya, "aham brahmāsmi", "neti neti", the doctrine of the self as light, the ascent of the soul and the closing prayer for light.', sig: 'The most important Upaniṣad for the formation of Vedānta and for the study of Vedic ritual interiorisation.', tags: 'vedanta,yajnavalkya,neti-neti,aham-brahmasmi' },
  { slug: 'shvetashvatara-upanishad', title: 'Śvetāśvatara Upaniṣad', sa: 'श्वेताश्वतरोपनिषद्', cat: 'upanishads', trad: 'Vedanta/Shaiva', period: PERIODS.lateVedic, verses: 113, chapters: 6, pop: 74, verified: 1, structure: '6 adhyāyas · theistic Upaniṣad', summary: 'A theistic Upaniṣad identifying the Supreme as Rudra-Śiva, using the Sāṃkhya framework of prakṛti and puruṣa and the Yoga discipline of the body and mind.', sig: 'Principal scriptural bridge between Vedānta and Śaiva theology, and a key text for Yoga Metaphysics.', tags: 'vedanta,shiva,samkhya,yoga' },
  { slug: 'kaushitaki-upanishad', title: 'Kauṣītaki Upaniṣad', sa: 'कौषीतक्युपनिषद्', cat: 'upanishads', trad: 'Vedanta', period: PERIODS.lateVedic, verses: 56, chapters: 4, pop: 44, verified: 1, structure: '4 adhyāyas · Ṛgveda', summary: 'Dialogue of Bālāki and Ajātaśatru on the self, plus the ascent of the soul after death and the doctrine of prāṇa as the enduring principle.', tags: 'vedanta,prana' },
  { slug: 'maitri-upanishad', title: 'Maitrāyaṇī Upaniṣad', sa: 'मैत्रायण्युपनिषद्', cat: 'upanishads', trad: 'Vedanta', period: PERIODS.epic, verses: 110, chapters: 7, pop: 40, verified: 1, structure: '7 prapāṭhakas', summary: 'A late Upaniṣad using explicit Sāṃkhya and Yoga terminology, discussing meditation on the inner light and the "soundless" absorption of the mind.', tags: 'vedanta,samkhya,yoga' },
];

const minorUpanishadNames: Array<[string, string, string]> = [
  // [slug, devanagari title, one-line subject]
  ['adhyatma-upanishad', 'अध्यात्मोपनिषद्', 'The Self within the body and the means of knowing it.'],
  ['amritabindu-upanishad', 'अमृतबिन्दूपनिषद्', 'The mind and the nirodha of mental objects; a Yoga-Vedānta tract.'],
  ['amritanada-upanishad', 'अमृतनादोपनिषद्', 'On śabda, the inner sound, the twelve mātrās of Om and the six aṅgas of Yoga.'],
  ['annapurna-upanishad', 'अन्नपूर्णोपनिषद्', 'Annapūrṇā and the yoga of nourishment and abundance.'],
  ['atharvashikha-upanishad', 'अथर्वशिखोपनिषद्', 'The doctrine of Om, the three mātrās and the fourth state.'],
  ['atharvashiras-upanishad', 'अथर्वशिरोपनिषद्', 'A Śaiva teaching on Rudra as the self of all, pervading the thirty-six tattvas.'],
  ['atmabodha-upanishad', 'आत्मबोधोपनिषद्', 'Knowledge of the self as distinct from the non-self; sannyāsa and liberation.'],
  ['bahvricha-upanishad', 'बह्वृचोपनिषद्', 'Ṛgvedic teaching on the two birds and the nature of the seer.'],
  ['bhasmajabala-upanishad', 'भस्मजाबालोपनिषद्', 'Śaiva teaching on the smearing of ash (bhasma) and its symbolism.'],
  ['brahma-upanishad', 'ब्रह्मोपनिषद्', 'The identity of ātman and brahman with the Yoga of the prāṇas.'],
  ['brahmabindu-upanishad', 'ब्रह्मबिन्दूपनिषद्', 'The mind as the cause of bondage and liberation — aśuddha and śuddha thoughts.'],
  ['brahmavidya-upanishad', 'ब्रह्मविद्योपनिषद्', 'Yogic ascent through the cakras and the sound of the ātman.'],
  ['dhyanabindu-upanishad', 'ध्यानबिन्दूपनिषद्', 'On Om, the point of meditation, and the syllable-less inner sound.'],
  ['garbha-upanishad', 'गर्भोपनिषद्', 'The development of the embryo and the nine gates of the body.'],
  ['gopala-tapani-upanishad', 'गोपालतापन्युपनिषद्', 'Vaiṣṇava Tāpanī Upaniṣad on Krṣṇa, Gāyatrī and the cowherds.'],
  ['hamsa-upanishad', 'हंसोपनिषद्', 'The haṃsa-mantra, breath and the unbound self.'],
  ['hayagriva-upanishad', 'हयग्रीवोपनिषद्', 'Hayagrīva, Vedāntic knowledge and the Gāyatrī prayer.'],
  ['isavasya-minor', 'ईशावास्योपनिषद् (टीका-परम्परा)', 'Commentarial tradition of the Īśa Upaniṣad (record only).'],
  ['jabala-upanishad', 'जाबालोपनिषद्', 'Renunciation (sannyāsa) sanctioned after the thirteenth year, the hamṣa mantra.'],
  ['kaivalya-upanishad', 'कैवल्योपनिषद्', 'Śaiva teaching on Parameśvara, jñāna, yoga and kaivalya.'],
  ['kalagnirudra-upanishad', 'कालाग्निरुद्रोपनिषद्', 'Rudra as the devourer of time; the twelve-syllable Vidya.'],
  ['kalisantarana-upanishad', 'कलिसन्तरणोपनिषद्', 'The names of Nṛsiṃha and the Mahāmantra as the crossing of the Kali age.'],
  ['katashruti-upanishad', 'कठश्रुत्योपनिषद्', 'The supreme reality as formless consciousness, confirmed by ṛṣi testimony.'],
  ['kshurika-upanishad', 'क्षुरिकोपनिषद्', 'The razor-sharp discernment that severs identification with the non-self.'],
  ['maha-upanishad', 'महोपनिषद्', 'Compendium of Vedic mantras on Brahman with rules for the daṇḍa.'],
  ['mandala-brahmana-upanishad', 'मण्डलब्राह्मणोपनिषद्', 'On the seven planes, the sūkṣma states and the discipline of yoga.'],
  ['mudgala-upanishad', 'मुद्गलोपनिषद्', 'The six-limbed interior sacrifice of prāṇa (prāṇāgnihotra).'],
  ['muktika-upanishad', 'मुक्तिकोपनिषद्', 'The list of 108 Upaniṣads and the essentials of Vedānta.'],
  ['nadabindu-upanishad', 'नादबिन्दूपनिषद्', 'The sounds of Yoga absorption and the dissolution of the mind into the unstruck sound.'],
  ['narada-parivrajaka-upanishad', 'नारदपरिव्राजकोपनिषद्', 'Rules for the wandering mendicant and the inner fire of the saṃnyāsin.'],
  ['narasimha-tapani-upanishad', 'नरसिंहतापनीयोपनिषद्', 'Nṛsiṃha as the mantric and yogic centre of the five states.'],
  ['pancabrahma-upanishad', 'पञ्चब्रह्मोपनिषद्', 'The five Brahmas of Śaiva worship and their cosmology.'],
  ['paramahamsa-upanishad', 'परमहंसोपनिषद्', 'Marks of a realised mendicant, his food and conduct.'],
  ['pranagnihotra-upanishad', 'प्राणाग्निहोत्रोपनिषद्', 'Offering of food to the five prāṇas as the inner agnihotra.'],
  ['rama-rahasya-upanishad', 'रामरहस्योपनिषद्', 'Rāma as the Supreme, the kuśa mantra and Vaiṣṇava initiation.'],
  ['rama-tapani-upanishad', 'रामतापनीयोपनिषद्', 'The best-known Vaiṣṇava Tāpanī Upaniṣad on Rāma’s monkey-natured devotion.'],
  ['rudrahridaya-upanishad', 'रुद्रहृदयोपनिषद्', 'Rudra’s heart: the identification of Śiva with heaven, earth and the self.'],
  ['sandilya-upanishad', 'शाडिल्योपनिषद्', 'The doctrine of bhakti and the puruṣa as the source of the world.'],
  ['sannyasa-upanishad', 'संन्यासोपनिषद्', 'Renunciation, silence and the conduct of the wandering monk.'],
  ['sarasvatirahasya-upanishad', 'सरस्वतीरहस्योपनिषद्', 'Sarasvatī as Vāc and the method of mantric worship.'],
  ['saubhagyalakshmi-upanishad', 'सौभाग्यलक्ष्म्युपनिषद्', 'Śrī Lakṣmī and the syllables of prosperity.'],
  ['surya-upanishad', 'सूर्योपनिषद्', 'The Sun as the visible Brahman and the prayer of the Yogin.'],
  ['tejobindu-upanishad', 'तेजोबिन्दूपनिषद्', 'The twelve aspects of yogic practice and the unbroken meditation on the self.'],
  ['tripuratapini-upanishad', 'त्रिपुरातापिन्युपनिषद्', 'Śrīvidyā: the three cities of the Goddess, the pañcadaśī and ṣoḍaśī mantras.'],
  ['tripura-upanishad', 'त्रिपुरोपनिषद्', 'The Goddess as Tripurā, the states of consciousness and the Mahāvākyas.'],
  ['vajrasuchika-upanishad', 'वज्रसूचिकोपनिषद्', 'The piercing needle of discrimination: who is a brāhmaṇa by birth or by knowledge?'],
  ['varaha-upanishad', 'वराहोपनिषद्', 'Vārāha teaching on the sages, the earth and non-violence.'],
  ['yogakundalini-upanishad', 'योगकुण्डलिन्युपनिषद्', 'Kuṇḍalinī, the cakras, the moon and sun of the body, and the three bandhas.'],
  ['yogashikha-upanishad', 'योगशिखोपनिषद्', 'The "crest of Yoga": the six aṅgas of practice and the duties of the yogin.'],
  ['yogatattva-upanishad', 'योगतत्त्वोपनिषद्', 'The eight-limbed yoga, the four stages of mind and the signs of death.'],
];

export const UPANISHADS: Row[] = [
  ...principalUpanishads,
  ...minorUpanishadNames.map(([slug, sa, summary]): Row => ({
    slug, title: slug.replace(/-/g, ' ').replace(/\b\w/g, (c) => c.toUpperCase()), sa, cat: 'upanishads',
    trad: 'Vedanta', period: PERIODS.lateMedieval, verses: 0, chapters: 0, pop: 28, hue: 36, verified: 1,
    structure: 'Minor Upaniṣad · part of the 108-Upaniṣad collection (Muktikā list)', summary,
    tags: 'minor upanishad,108,muktika',
  })),
];

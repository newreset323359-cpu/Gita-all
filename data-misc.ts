import { PERIODS } from './catalog-core.js';

/** Manuscript records — real repositories, real collection classes.
 *  Images are locally generated artwork standing in for the digitised folio;
 *  each record links to the holding institution for the actual surrogate. */
export const MANUSCRIPTS = [
  { slug: 'rigveda-samhita-poona', title: 'Ṛgveda Saṃhitā with Sāyaṇabhāṣya', work_slug: 'rigveda', repository: 'Bhandarkar Oriental Research Institute, Pune', shelfmark: 'BORI 1 of 1870–71 (Vedas)', script: 'Devanagari', material: 'Paper', date_approx: 'c. 1650–1750 CE', region: 'Maharashtra', summary: 'A paper manuscript of the Ṛgveda with Sāyaṇa’s commentary, in the BORI collection that formed the base of the critical Vedic corpus.', image_url: '/manuscripts/fol-devanagari-1.svg', iiif_url: 'https://bori.ac.in/', license: 'Institutional — reproduction by permission (BORI)', source_url: 'https://bori.ac.in/' },
  { slug: 'brihadaranyaka-kashmir', title: 'Bṛhadāraṇyaka Upaniṣad, Kāṇva recension', work_slug: 'brihadaranyaka-upanishad', repository: 'Muktabodha Digital Library', shelfmark: 'Muktabodha M00001 (KSTS series)', script: 'Śāradā', material: 'Birch bark / paper (mixed collection)', date_approx: 'c. 18th c. CE', region: 'Kashmir', summary: 'Kashmiri manuscript tradition of the Kāṇva Bṛhadāraṇyaka, preserved in the Kashmir Series of Texts and Studies and now digitised by Muktabodha.', image_url: '/manuscripts/fol-sharada-1.svg', iiif_url: 'https://muktabodha.org/', license: 'Free access for research; reproduction restricted (Muktabodha)', source_url: 'https://muktabodha.org/' },
  { slug: 'natyashastra-nepal', title: 'Nāṭyaśāstra of Bharata', work_slug: 'natyashastra', repository: 'National Archives, Kathmandu (Nepal-German Manuscript Preservation Project)', shelfmark: 'NGMPP A 1/1 (reel catalogue)', script: 'Maithili / Newari', material: 'Palm leaf', date_approx: 'c. 12th–14th c. CE', region: 'Nepal', summary: 'One of the oldest surviving witnesses to the Nāṭyaśāstra, from the Nepalese manuscript tradition that preserves many early Sanskrit texts.', image_url: '/manuscripts/fol-palmleaf-1.svg', iiif_url: 'https://namami.gov.in/', license: 'Catalogue metadata; images via repository permission', source_url: 'https://namami.gov.in/' },
  { slug: 'charaka-samhita-rajasthan', title: 'Charaka Saṃhitā with Cakrapāṇidatta’s Bhāvadīpikā', work_slug: 'charaka-samhita', repository: 'Rajasthan Oriental Research Institute, Jodhpur', shelfmark: 'RORI MS 2/1057 (Ayurveda)', script: 'Devanagari', material: 'Paper', date_approx: 'c. 1700 CE', region: 'Rajasthan', summary: 'An illustrated medical manuscript of the Charaka Saṃhitā with the standard commentary, from the Rajasthan Oriental Research Institute collections.', image_url: '/manuscripts/fol-devanagari-2.svg', iiif_url: 'https://namami.gov.in/', license: 'Institutional catalogue reference', source_url: 'https://namami.gov.in/' },
  { slug: 'bhagavata-odisha', title: 'Bhāgavata Purāṇa, illustrated folio', work_slug: 'bhagavata-purana', repository: 'Odisha State Museum, Bhubaneswar', shelfmark: 'OSM Palm-leaf 4/23', script: 'Odia', material: 'Palm leaf', date_approx: 'c. 18th c. CE', region: 'Odisha', summary: 'An incised palm-leaf Bhāgavata with miniature illustrations in the Odishan style, characteristic of the Jagannātha devotional manuscript tradition.', image_url: '/manuscripts/fol-palmleaf-2.svg', iiif_url: '', license: 'Museum catalogue reference; images require permission', source_url: 'https://odishamuseum.nic.in/' },
  { slug: 'manusmriti-grantha', title: 'Mānava Dharmaśāstra with Medhātithi’s Manubhāṣya', work_slug: 'manusmriti', repository: 'Asiatic Society, Kolkata', shelfmark: 'Asiatic Society Sanskrit MS (Dharmasastra series)', script: 'Devanagari', material: 'Paper', date_approx: 'c. 1600–1700 CE', region: 'Bengal', summary: 'A Smṛti manuscript preserving Medhātithi’s commentary, the oldest extant bhāṣya on Manu and the basis of most modern critical work.', image_url: '/manuscripts/fol-devanagari-3.svg', iiif_url: '', license: 'Institutional catalogue reference (Asiatic Society)', source_url: 'https://asiaticsocietykolkata.org/' },
  { slug: 'tantraloka-kashmir', title: 'Tantrāloka of Abhinavagupta', work_slug: 'tantraloka', repository: 'Muktabodha Digital Library / Kashmir Series of Texts and Studies', shelfmark: 'KSTS Tantrāloka (1921 edition)', script: 'Śāradā', material: 'Paper', date_approx: 'c. 19th c. CE', region: 'Kashmir', summary: 'A Kashmiri manuscript of Abhinavagupta’s Tantrāloka, the encyclopaedia of Trika Śaivism, edited in the Kashmir Series and digitised by Muktabodha.', image_url: '/manuscripts/fol-sharada-2.svg', iiif_url: 'https://muktabodha.org/', license: 'Free access for research (Muktabodha)', source_url: 'https://muktabodha.org/' },
  { slug: 'lilavati-jaipur', title: 'Līlāvatī of Bhāskara II', work_slug: 'lilavati', repository: 'City Palace Museum, Jaipur (Sawai Man Singh II Museum)', shelfmark: 'MS Mathematics 17', script: 'Devanagari', material: 'Paper', date_approx: 'c. 1750 CE', region: 'Rajasthan', summary: 'A mathematics manuscript of the Līlāvatī with diagrams of altars, circles and progressions — evidence of the teaching tradition of Bhāskara’s arithmetic.', image_url: '/manuscripts/fol-yantra-1.svg', iiif_url: '', license: 'Museum catalogue reference', source_url: 'https://namami.gov.in/' },
  { slug: 'ramayana-mewar', title: 'Rāmāyaṇa, illustrated Mewar folio', work_slug: 'ramayana', repository: 'Government Museum, Udaipur / Rajasthan Oriental Research Institute', shelfmark: 'Mewar Ramayana series (dispersed)', script: 'Devanagari', material: 'Paper', date_approx: '1649–1653 CE', region: 'Mewar, Rajasthan', summary: 'A leaf of the celebrated Mewar Rāmāyaṇa, one of the most lavishly illustrated manuscripts of India, dispersed across several collections.', image_url: '/manuscripts/fol-miniature-1.svg', iiif_url: '', license: 'Museum catalogue reference', source_url: 'https://namami.gov.in/' },
  { slug: 'sushruta-nepal', title: 'Suśruta Saṃhitā, surgical chapters', work_slug: 'sushruta-samhita', repository: 'Kaiser Library, Kathmandu', shelfmark: 'Kaiser Library MS (Ayurveda)', script: 'Newari / Devanagari', material: 'Paper', date_approx: 'c. 15th–17th c. CE', region: 'Nepal', summary: 'A Nepalese medical manuscript of the Suśruta Saṃhitā preserving the surgical chapters and their instrument diagrams.', image_url: '/manuscripts/fol-palmleaf-3.svg', iiif_url: '', license: 'Institutional catalogue reference', source_url: 'https://namami.gov.in/' },
  { slug: 'yogavasishtha-bikaner', title: 'Yogavāsiṣṭha (Mokṣopāya)', work_slug: 'yogavasishtha', repository: 'Anup Sanskrit Library, Bikaner', shelfmark: 'Anup Sanskrit Library MS 4102', script: 'Devanagari', material: 'Paper', date_approx: 'c. 1700 CE', region: 'Bikaner, Rajasthan', summary: 'A manuscript of the Mokṣopāya/Yogavāsiṣṭha from the Anup Sanskrit Library, a major repository of Sanskrit philosophical manuscripts.', image_url: '/manuscripts/fol-devanagari-4.svg', iiif_url: '', license: 'Institutional catalogue reference', source_url: 'https://namami.gov.in/' },
  { slug: 'gitagovinda-puri', title: 'Gītagovinda of Jayadeva, with rāga notation', work_slug: 'gitagovinda', repository: 'Odisha State Museum / Puri manuscripts collection', shelfmark: 'OSM Palm-leaf 8/11', script: 'Odia', material: 'Palm leaf', date_approx: 'c. 17th–18th c. CE', region: 'Odisha', summary: 'A palm-leaf Gītagovinda with musical annotations, reflecting the continuous performance tradition of Jayadeva’s aṣṭapadīs in Odisha.', image_url: '/manuscripts/fol-palmleaf-4.svg', iiif_url: '', license: 'Museum catalogue reference', source_url: 'https://odishamuseum.nic.in/' },
];

export const PATHS = [
  {
    slug: 'foundations-of-vedanta', title: 'Foundations of Vedānta', subtitle: 'From the Upaniṣads to the Brahma Sūtras',
    level: 'beginner', tradition: 'Vedanta', hue: 46, duration: '6 weeks',
    description: 'A guided first journey through the source texts of Vedānta: the principal Upaniṣads, the Brahma Sūtras, and the three great commentaries. Read in sequence, with the key mahāvākyas as milestones.',
    steps: [
      { work_slug: 'isha-upanishad', chapter: 1, task: 'Read', note: 'Begin with the shortest Upaniṣad: the vision of the Lord in all things.' },
      { work_slug: 'kena-upanishad', chapter: 1, task: 'Read', note: 'The enquiry into the power behind the mind.' },
      { work_slug: 'katha-upanishad', chapter: 1, task: 'Read', note: 'Naciketas and Yama: what survives death.' },
      { work_slug: 'chandogya-upanishad', chapter: 6, task: 'Study', note: 'The mahāvākya "tat tvam asi" and the teaching of Uddālaka.' },
      { work_slug: 'brihadaranyaka-upanishad', chapter: 1, task: 'Study', note: '"aham brahmāsmi" and the neti-neti method.' },
      { work_slug: 'brahma-sutras', chapter: 1, task: 'Study', note: 'How Vedānta systematises the Upaniṣads.' },
      { work_slug: 'brahma-sutra-bhashya-shankara', chapter: 1, task: 'Compare', note: 'Read the Advaita commentary against the sūtra text.' },
      { work_slug: 'sri-bhashya', chapter: 1, task: 'Compare', note: 'The Viśiṣṭādvaita reading of the same sūtras.' },
      { work_slug: 'madhva-brahma-sutra-bhashya', chapter: 1, task: 'Compare', note: 'The Dvaita reading: the fivefold difference.' },
    ],
  },
  {
    slug: 'gita-in-eighteen-days', title: 'The Gītā in Eighteen Days', subtitle: 'A chapter-by-chapter reading of the Bhagavad Gītā',
    level: 'beginner', tradition: 'Vedanta', hue: 38, duration: '18 days',
    description: 'One chapter a day, with the Sanskrit heard and read alongside a translation, and the three great commentarial readings compared at the key verses.',
    steps: [
      { work_slug: 'bhagavad-gita', chapter: 1, task: 'Read', note: 'The setting: despondency (viṣāda) as the beginning of enquiry.' },
      { work_slug: 'bhagavad-gita', chapter: 2, task: 'Read', note: 'The Self, grief, and the first statement of niṣkāma karma.' },
      { work_slug: 'bhagavad-gita', chapter: 3, task: 'Read', note: 'Action as sacrifice; the example of the wise.' },
      { work_slug: 'bhagavad-gita', chapter: 4, task: 'Read', note: 'Avatāra, the lineage of teaching, the fire of knowledge.' },
      { work_slug: 'bhagavad-gita', chapter: 6, task: 'Read', note: 'Meditation: seat, breath, the wandering mind.' },
      { work_slug: 'bhagavad-gita', chapter: 9, task: 'Read', note: 'The royal knowledge: the leaf, flower and water.' },
      { work_slug: 'bhagavad-gita', chapter: 11, task: 'Read', note: 'The universal form and Time the destroyer.' },
      { work_slug: 'bhagavad-gita', chapter: 12, task: 'Read', note: 'The marks of the devotee.' },
      { work_slug: 'bhagavad-gita', chapter: 15, task: 'Read', note: 'The inverted tree and the Self in the heart.' },
      { work_slug: 'bhagavad-gita', chapter: 18, task: 'Read', note: 'The final instruction: surrender.' },
      { work_slug: 'jnaneshwari', chapter: 1, task: 'Extend', note: 'Read Jñāneśvar’s Marathi opening on the same text.' },
    ],
  },
  {
    slug: 'yoga-from-sutra-to-mat', title: 'Yoga: From Sūtra to Mat', subtitle: 'Patañjali, the Haṭha corpus, and practice',
    level: 'intermediate', tradition: 'Yoga', hue: 96, duration: '8 weeks',
    description: 'The textual spine of Yoga practice: Patañjali’s sūtras with commentary, then the Haṭha manuals that supply the postural and respiratory techniques, then the philosophical questions they raise.',
    steps: [
      { work_slug: 'yoga-sutras', chapter: 1, task: 'Read', note: 'The definition of yoga and the five vṛttis.' },
      { work_slug: 'yoga-bhashya', chapter: 1, task: 'Study', note: 'The classical commentary on the first pāda.' },
      { work_slug: 'yoga-sutras', chapter: 2, task: 'Read', note: 'The kleśas and the eight limbs.' },
      { work_slug: 'yoga-sutras', chapter: 3, task: 'Read', note: 'Saṃyama and the siddhis.' },
      { work_slug: 'hatha-yoga-pradipika', chapter: 1, task: 'Read', note: 'Āsana and the ṣaṭkarma purifications.' },
      { work_slug: 'gheranda-samhita', chapter: 1, task: 'Read', note: 'The thirty-two āsanas and the seven-limbed yoga.' },
      { work_slug: 'tattva-vaisharadi', chapter: 1, task: 'Compare', note: 'Vācaspati’s harmonisation of Yoga and Advaita.' },
      { work_slug: 'shiva-samhita', chapter: 1, task: 'Extend', note: 'The Śaiva Haṭha view of the cakras and inner sound.' },
    ],
  },
  {
    slug: 'dharma-law-and-state', title: 'Dharma, Law and the State', subtitle: 'Smṛti, Arthaśāstra and the Nīti tradition',
    level: 'intermediate', tradition: 'Dharma', hue: 28, duration: '7 weeks',
    description: 'How Indian thinkers reasoned about obligation, punishment, property and political economy — read critically, with attention to the history of interpretation and modern debates.',
    steps: [
      { work_slug: 'gautama-dharmasutra', chapter: 1, task: 'Read', note: 'The oldest Dharma Sūtra: sources of dharma.' },
      { work_slug: 'manusmriti', chapter: 1, task: 'Read', note: 'Creation, varṇa and āśrama — read with critical framing.' },
      { work_slug: 'yajnavalkya-smriti', chapter: 1, task: 'Read', note: 'The legal Smṛti: procedure and the eighteen titles.' },
      { work_slug: 'mitakshara', chapter: 1, task: 'Study', note: 'Inheritance and the joint family in classical law.' },
      { work_slug: 'arthashastra', chapter: 1, task: 'Study', note: 'Statecraft, taxation and the apparatus of the state.' },
      { work_slug: 'nitisara', chapter: 1, task: 'Extend', note: 'Kāmandaki’s verse digest of Kauṭilya.' },
      { work_slug: 'panchatantra', chapter: 1, task: 'Read', note: 'Nīti taught through story.' },
    ],
  },
  {
    slug: 'sanskrit-for-readers', title: 'Sanskrit for Readers', subtitle: 'Script, sandhi and the first verses',
    level: 'beginner', tradition: 'Vyakarana', hue: 200, duration: '10 weeks',
    description: 'A reading course rather than a grammar course: learn the Devanagari script, the sounds of IAST, and the sandhi that joins words, using the Gāyatrī and the Gītā as your first texts.',
    steps: [
      { work_slug: 'rigveda', chapter: 3, task: 'Recite', note: 'The Gāyatrī: script, transliteration and word division.' },
      { work_slug: 'rigveda-pratishakhya', chapter: 1, task: 'Study', note: 'Why Vedic phonetics is the oldest linguistics.' },
      { work_slug: 'panini-ashtadhyayi', chapter: 1, task: 'Study', note: 'How Pāṇini’s sūtras are organised.' },
      { work_slug: 'nirukta-yaska', chapter: 1, task: 'Study', note: 'Etymology and the four classes of words.' },
      { work_slug: 'bhagavad-gita', chapter: 2, task: 'Read', note: 'Read 2.47 in Devanagari, IAST and word-by-word.' },
      { work_slug: 'isha-upanishad', chapter: 1, task: 'Read', note: 'Read all eighteen mantras with glosses.' },
    ],
  },
  {
    slug: 'science-of-ancient-india', title: 'The Sciences of Ancient India', subtitle: 'Mathematics, astronomy, medicine and architecture',
    level: 'intermediate', tradition: 'Science', hue: 190, duration: '9 weeks',
    description: 'A tour of Indian technical knowledge: the Śulba geometry, the invention of zero, the Kerala series, Siddhāntic astronomy, Āyurvedic theory and Vāstu.',
    steps: [
      { work_slug: 'shulba-sutra-baudhayana', chapter: 1, task: 'Study', note: 'Altar geometry and the Śulba theorem.' },
      { work_slug: 'aryabhatiya', chapter: 1, task: 'Study', note: 'The rotating earth and the sine table.' },
      { work_slug: 'brahma-sphuta-siddhanta', chapter: 1, task: 'Study', note: 'Zero becomes a number.' },
      { work_slug: 'lilavati', chapter: 1, task: 'Read', note: 'Arithmetic in verse.' },
      { work_slug: 'yuktibhasha', chapter: 1, task: 'Study', note: 'The Kerala infinite series.' },
      { work_slug: 'charaka-samhita', chapter: 1, task: 'Study', note: 'Doṣa theory and the ethics of the physician.' },
      { work_slug: 'sushruta-samhita', chapter: 1, task: 'Study', note: 'Surgery and anatomy.' },
      { work_slug: 'samaranganasutradhara', chapter: 1, task: 'Study', note: 'Architecture and machines.' },
    ],
  },
  {
    slug: 'tantra-and-the-goddess', title: 'Tantra and the Goddess', subtitle: 'Trika Śaivism and the Śrīvidyā tradition',
    level: 'advanced', tradition: 'Shakta', hue: 330, duration: '8 weeks',
    description: 'Śaiva and Śākta scripture studied in its own terms: the Śiva Sūtras and Spanda of Kashmir, the Vijñānabhairava’s methods, and the Śrīvidyā liturgy of the Goddess.',
    steps: [
      { work_slug: 'shiva-sutras', chapter: 1, task: 'Read', note: 'The three means and the recognition of the self as Śiva.' },
      { work_slug: 'spanda-karikas', chapter: 1, task: 'Read', note: 'Consciousness as vibration.' },
      { work_slug: 'vijnana-bhairava-tantra', chapter: 1, task: 'Practise', note: 'Select a few dhāraṇās and study them closely.' },
      { work_slug: 'pratyabhijna-hridaya', chapter: 1, task: 'Study', note: 'The heart of recognition.' },
      { work_slug: 'tantrasara', chapter: 1, task: 'Study', note: 'Abhinavagupta’s own summary.' },
      { work_slug: 'devi-mahatmya', chapter: 11, task: 'Recite', note: 'The Nārāyaṇī Stuti.' },
      { work_slug: 'saundarya-lahari', chapter: 1, task: 'Read', note: 'Śiva and Śakti in the opening verse.' },
      { work_slug: 'parashurama-kalpasutra', chapter: 1, task: 'Study', note: 'The Śrīvidyā ritual sequence.' },
    ],
  },
];

export const QUIZZES = [
  {
    slug: 'gita-basics', path_slug: 'gita-in-eighteen-days', title: 'Bhagavad Gītā: Foundations', level: 'beginner',
    description: 'Ten questions on the structure, speakers and key teachings of the Gītā.',
    questions: [
      { prompt: 'In which parvan of the Mahābhārata does the Bhagavad Gītā occur?', options: ['Ādi Parvan', 'Bhīṣma Parvan', 'Droṇa Parvan', 'Śānti Parvan'], answer: 1, explanation: 'The Gītā is embedded in the Bhīṣma Parvan (chapters 25–42), on the first day of battle.', citation: 'Bhagavad Gītā, Bhīṣma Parvan 25–42' },
      { prompt: 'How many chapters (adhyāyas) does the Bhagavad Gītā have?', options: ['12', '16', '18', '24'], answer: 2, explanation: 'The Gītā has 18 chapters and 700 verses in the standard recension (745 in the Kashmiri).', citation: 'Bhagavad Gītā 18.78' },
      { prompt: 'Who speaks the first line of the Gītā?', options: ['Kṛṣṇa', 'Arjuna', 'Sañjaya', 'Dhṛtarāṣṭra'], answer: 3, explanation: 'The Gītā opens with Dhṛtarāṣṭra’s question to Sañjaya: "dharmakṣetre kurukṣetre…"', citation: 'Bhagavad Gītā 1.1' },
      { prompt: '"karmaṇy evādhikāras te" — what does this verse teach?', options: ['Renounce all action', 'Right to action, not to its fruits', 'Action is always binding', 'Only ritual action counts'], answer: 1, explanation: 'The verse grants a right to action alone and forbids attachment to results — the charter of niṣkāma karma.', citation: 'Bhagavad Gītā 2.47' },
      { prompt: 'Which verse declares "I am Time, the great destroyer of worlds"?', options: ['4.7', '9.22', '11.32', '18.66'], answer: 2, explanation: 'In the Viśvarūpa Darśana, Kṛṣṇa declares "kālo ’smi lokakṣayakṛt pravṛddho".', citation: 'Bhagavad Gītā 11.32' },
      { prompt: 'Which three paths does the Gītā synthesise?', options: ['Karma, jñāna, bhakti', 'Yoga, nyāya, mīmāṃsā', 'Śravaṇa, manana, nididhyāsana', 'Dāna, yajña, tapas'], answer: 0, explanation: 'The Gītā integrates the paths of action, knowledge and devotion.', citation: 'Bhagavad Gītā 3, 4 and 12' },
      { prompt: 'What is offered in 9.26 that the Lord accepts?', options: ['Gold and jewels', 'A leaf, flower, fruit or water', 'Only Vedic sacrifice', 'Chanting alone'], answer: 1, explanation: 'Any of these, offered with devotion, is accepted.', citation: 'Bhagavad Gītā 9.26' },
      { prompt: 'Which school wrote the earliest surviving complete commentary on the Gītā?', options: ['Dvaita', 'Advaita (Śaṅkara)', 'Viśiṣṭādvaita', 'Nyāya'], answer: 1, explanation: 'Śaṅkara’s Gītābhāṣya is the earliest complete surviving commentary.', citation: 'Śāṅkarabhāṣya on the Bhagavad Gītā' },
      { prompt: 'In 18.66, what is the final instruction?', options: ['Perform more sacrifice', 'Abandon all dharmas and take refuge in the Lord', 'Study grammar', 'Renounce the world'], answer: 1, explanation: '"sarvadharmān parityajya mām ekaṃ śaraṇaṃ vraja" — the verse of surrender.', citation: 'Bhagavad Gītā 18.66' },
      { prompt: 'Where is the Gītā’s teaching said to be preserved?', options: ['In temples only', 'In the heart of all beings', 'In the Vedas alone', 'In royal archives'], answer: 1, explanation: '15.15: the Lord is seated in the heart of all beings, from whom memory and knowledge come.', citation: 'Bhagavad Gītā 15.15' },
    ],
  },
  {
    slug: 'upanishads-core', path_slug: 'foundations-of-vedanta', title: 'The Principal Upaniṣads', level: 'beginner',
    description: 'Test your grasp of the thirteen principal Upaniṣads and the great sentences.',
    questions: [
      { prompt: 'How many Upaniṣads are traditionally listed in the Muktikā canon?', options: ['13', '18', '108', '1008'], answer: 2, explanation: 'The Muktikā Upaniṣad lists 108; 13 are conventionally the "principal" ones.', citation: 'Muktikā Upaniṣad' },
      { prompt: 'In which Upaniṣad does Yama teach Naciketas?', options: ['Kaṭha', 'Kena', 'Īśā', 'Māṇḍūkya'], answer: 0, explanation: 'The Kaṭha Upaniṣad records the dialogue of Naciketas and Yama.', citation: 'Kaṭha Upaniṣad 1.1' },
      { prompt: '"tat tvam asi" appears in which Upaniṣad?', options: ['Bṛhadāraṇyaka', 'Chāndogya', 'Aitareya', 'Praśna'], answer: 1, explanation: 'Chāndogya 6.8.7, in Uddālaka’s teaching to Śvetaketu.', citation: 'Chāndogya Upaniṣad 6.8.7' },
      { prompt: 'Which Upaniṣad forms the final chapter of the Śukla Yajurveda Saṃhitā?', options: ['Īśāvāsya', 'Kena', 'Muṇḍaka', 'Māṇḍūkya'], answer: 0, explanation: 'The Īśāvāsya is adhyāya 40 of the Vājasaneyī Saṃhitā.', citation: 'Śukla Yajurveda 40' },
      { prompt: '"aham brahmāsmi" is taught by whom?', options: ['Nārada', 'Yājñavalkya', 'Śvetaketu', 'Pippalāda'], answer: 1, explanation: 'Bṛhadāraṇyaka 1.4.10 records the Self’s self-knowledge as "I am Brahman".', citation: 'Bṛhadāraṇyaka Upaniṣad 1.4.10' },
      { prompt: 'The Māṇḍūkya Upaniṣad analyses which symbol?', options: ['The fire altar', 'The syllable Om', 'The sacrificial horse', 'The chariot'], answer: 1, explanation: 'Its twelve verses analyse Om and the four states of the self.', citation: 'Māṇḍūkya Upaniṣad' },
      { prompt: 'Which Upaniṣad contains the convocation address to graduating students?', options: ['Taittirīya', 'Kauṣītaki', 'Maitrāyaṇī', 'Praśna'], answer: 0, explanation: 'Taittirīya 1.11.1–4: "satyam vada, dharmam cara…"', citation: 'Taittirīya Upaniṣad 1.11' },
      { prompt: 'The simile of the two birds occurs in which Upaniṣad?', options: ['Muṇḍaka', 'Kena', 'Īśā', 'Aitareya'], answer: 0, explanation: 'Muṇḍaka 3.1.1 and Ṛgveda 1.164.20 share the image of the two birds on one tree.', citation: 'Muṇḍaka Upaniṣad 3.1.1' },
      { prompt: 'Which Upaniṣad is a principal source for Śaiva theology?', options: ['Īśā', 'Śvetāśvatara', 'Praśna', 'Kena'], answer: 1, explanation: 'The Śvetāśvatara identifies the supreme as Rudra-Śiva and uses Sāṃkhya and Yoga categories.', citation: 'Śvetāśvatara Upaniṣad' },
      { prompt: 'What does "neti neti" mean?', options: ['"Not this, not this"', '"That thou art"', '"I am Brahman"', '"This is the truth"'], answer: 0, explanation: 'The method of negation in Bṛhadāraṇyaka 2.3.6 that removes all limiting descriptions of Brahman.', citation: 'Bṛhadāraṇyaka Upaniṣad 2.3.6' },
    ],
  },
  {
    slug: 'darshanas-six', path_slug: null, title: 'The Six Darśanas', level: 'intermediate',
    description: 'Distinguish the six systems by their foundational texts and central categories.',
    questions: [
      { prompt: 'Who authored the Nyāya Sūtras?', options: ['Kaṇāda', 'Gautama Akṣapāda', 'Kapila', 'Jaimini'], answer: 1, explanation: 'Gautama (Akṣapāda) is the traditional author of the Nyāya Sūtras.', citation: 'Nyāya Sūtra 1.1.1' },
      { prompt: 'Which school teaches six padārthas including inherence (samavāya)?', options: ['Sāṃkhya', 'Vaiśeṣika', 'Mīmāṃsā', 'Vedānta'], answer: 1, explanation: 'Vaiśeṣika: dravya, guṇa, karma, sāmānya, viśeṣa and samavāya.', citation: 'Vaiśeṣika Sūtra 1.1.4' },
      { prompt: 'The Sāṃkhya Kārikā has how many verses?', options: ['50', '72', '196', '555'], answer: 1, explanation: 'Īśvarakṛṣṇa’s Kārikā has 72 verses.', citation: 'Sāṃkhya Kārikā 72' },
      { prompt: 'In Yoga, what are the five kleśas headed by?', options: ['Rāga', 'Avidyā', 'Dveṣa', 'Asmitā'], answer: 1, explanation: 'Avidyā, asmitā, rāga, dveṣa and abhiniveśa — avidyā is the root.', citation: 'Yoga Sūtra 2.3–2.4' },
      { prompt: 'Mīmāṃsā’s central claim about the Veda is that it is:', options: ['Authorless and eternal', 'Written by Brahmā', 'Divinely revealed in history', 'A human composition'], answer: 0, explanation: 'Mīmāṃsā defends the Veda’s authorlessness (apauruṣeyatva) as the basis of its authority.', citation: 'Mīmāṃsā Sūtra 1.1.1' },
      { prompt: 'Which school is called Navya-Nyāya and founded by Gaṅgeśa?', options: ['Ancient Nyāya', 'New logic', 'Vaiśeṣika', 'Vedānta'], answer: 1, explanation: 'Gaṅgeśa’s Tattvacintāmaṇi (c. 1325) founded the "new" Nyāya with its technical idiom.', citation: 'Tattvacintāmaṇi' },
      { prompt: 'Which pair are traditionally studied together?', options: ['Nyāya and Vaiśeṣika', 'Sāṃkhya and Mīmāṃsā', 'Yoga and Vedānta', 'Vedānta and Nyāya'], answer: 0, explanation: 'Nyāya and Vaiśeṣika are jointly studied as one syllabus (nyāya-vaiśeṣika).', citation: 'Tarkasaṃgraha' },
      { prompt: 'The Brahma Sūtras are attributed to:', options: ['Bādarāyaṇa', 'Jaimini', 'Kapila', 'Patañjali'], answer: 0, explanation: 'Bādarāyaṇa is the traditional author of the Vedānta/Brahma Sūtras.', citation: 'Brahma Sūtra 1.1.1' },
      { prompt: 'What does the Sāṃkhya term "puruṣa" mean?', options: ['Nature', 'Pure consciousness', 'The ego', 'The body'], answer: 1, explanation: 'Puruṣa is pure witnessing consciousness; prakṛti is the material principle.', citation: 'Sāṃkhya Kārikā 3' },
      { prompt: 'Which is the correct traditional author of the Yoga Sūtras?', options: ['Gautama', 'Patañjali', 'Vyāsa', 'Kaṇāda'], answer: 1, explanation: 'Patañjali is credited with the Yoga Sūtras; the Yoga Bhāṣya is attributed to Vyāsa.', citation: 'Yoga Sūtra 1.1' },
    ],
  },
  {
    slug: 'india-sciences', path_slug: 'science-of-ancient-india', title: 'Mathematics, Astronomy & Medicine', level: 'intermediate',
    description: 'Key texts, authors and discoveries of the Indian scientific tradition.',
    questions: [
      { prompt: 'Which text first treats zero as a number with rules for arithmetic?', options: ['Āryabhaṭīya', 'Brāhmasphuṭasiddhānta', 'Līlāvatī', 'Gaṇitasārasaṅgraha'], answer: 1, explanation: 'Brahmagupta’s 628 CE Brāhmasphuṭasiddhānta gives rules for zero and negative quantities.', citation: 'Brāhmasphuṭasiddhānta 18' },
      { prompt: 'Who first argued that the earth rotates on its axis?', options: ['Āryabhaṭa', 'Varāhamihira', 'Bhāskara II', 'Lagadha'], answer: 0, explanation: 'Āryabhaṭa proposed the earth’s rotation and a long-period stellar frame in 499 CE.', citation: 'Āryabhaṭīya, Gola 6' },
      { prompt: 'Which is one of the four parts of the Siddhāntaśiromaṇi?', options: ['Gītikā', 'Līlāvatī', 'Golapāda', 'Kālakriyā'], answer: 1, explanation: 'Līlāvatī, Bījagaṇita, Grahagaṇita and Golādhyāya make up the work.', citation: 'Siddhāntaśiromaṇi' },
      { prompt: 'The Kerala school’s infinite series were presented in which text?', options: ['Sadratnamālā', 'Yuktibhāṣā', 'Tantrasaṅgraha', 'Abdul Razzak’s memoir'], answer: 1, explanation: 'Jyeṣṭhadeva’s Yuktibhāṣā (c. 1530) gives the series and their proofs.', citation: 'Yuktibhāṣā, Part I' },
      { prompt: 'Which text contains the classical early statement of the Pythagorean theorem?', options: ['Baudhāyana Śulba Sūtra', 'Āryabhaṭīya', 'Līlāvatī', 'Pancha Siddhāntikā'], answer: 0, explanation: 'The Śulba Sūtras give the theorem for the diagonal of a rectangle in altar construction.', citation: 'Baudhāyana Śulba Sūtra 1.48' },
      { prompt: 'How many branches (aṣṭāṅgas) does Āyurveda have?', options: ['Four', 'Six', 'Eight', 'Ten'], answer: 2, explanation: 'Aṣṭāṅga means eight limbs: medicine, surgery, ENT, paediatrics, toxicology, psychiatry, rejuvenation and virility.', citation: 'Suśruta Saṃhitā, Sūtrasthāna 1' },
      { prompt: 'Which three texts make up the Bṛhattrayī of Āyurveda?', options: ['Charaka, Suśruta, Vāgbhaṭa', 'Charaka, Bhāva, Śārṅgadhara', 'Suśruta, Mādhavakara, Vāgbhaṭa', 'Charaka, Suśruta, Mādhavakara'], answer: 0, explanation: 'The "great triad" is Charaka Saṃhitā, Suśruta Saṃhitā and Aṣṭāṅga Hṛdaya.', citation: 'Aṣṭāṅga Hṛdaya, Sūtrasthāna 1.2' },
      { prompt: 'The Laghutrayī comprises Mādhavanidāna, Śārṅgadhara and:', options: ['Bhāvaprakāśa', 'Charaka', 'Kāśyapa Saṃhitā', 'Rasaratna'], answer: 0, explanation: 'Mādhava (diagnosis), Śārṅgadhara (pharmacy) and Bhāva (materia medica) are the Laghutrayī.', citation: 'Bhāvaprakāśa, Pūrvakhaṇḍa' },
      { prompt: 'Sūrya Siddhānta’s fourteen chapters chiefly treat:', options: ['Temple architecture', 'Astronomy', 'Grammar', 'Medicine'], answer: 1, explanation: 'It is a Siddhāntic astronomical textbook covering the planets, eclipses and the armillary sphere.', citation: 'Sūrya Siddhānta' },
      { prompt: 'Which text preserves the Greek-to-Indian transmission in astrological form?', options: ['Yavanajātaka', 'Sārāvalī', 'Bṛhajjātaka', 'Muhūrtacintāmaṇi'], answer: 0, explanation: 'Sphujidhvaja’s versified Sanskrit Yavanajātaka renders a Greek astrological work.', citation: 'Yavanajātaka' },
    ],
  },
];

export const DEMO_USERS = [
  { email: 'admin@sanatanlibrary.org', name: 'Library Administrator', password: 'Sanatan@2026', role: 'admin' },
  { email: 'scholar@sanatanlibrary.org', name: 'Dr. Meera Joshi', password: 'Scholar@2026', role: 'scholar' },
  { email: 'reader@sanatanlibrary.org', name: 'Aarav Deshpande', password: 'Reader@2026', role: 'reader' },
];

export const DEMO_PERIODS = PERIODS;

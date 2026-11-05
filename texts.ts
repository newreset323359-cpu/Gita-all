/**
 * DEMONSTRATION EXCERPTS
 * ------------------------------------------------------------------------
 * Mūla Sanskrit for every verse below is the received text of the tradition
 * (public-domain / traditional recitation text). English, Hindi and Marathi
 * renderings are working translations written for this project and are marked
 * `Sanatan Library working translation (CC BY-SA 4.0)`.
 *
 * Commentary entries are EDITORIAL SUMMARIES of each school's characteristic
 * reading — they are not quotations from any published bhāṣya.
 *
 * Nothing here is copied from a copyrighted edition. Where a work has no
 * cleared e-text yet, the record exists with zero verses and the reader shows
 * an explicit "ingestion pending" state rather than invented scripture.
 */

export interface WordSeed { sa: string; iast: string; en: string; hi: string }
export interface ChapterSeed { number: number; title_sa: string; title: string; title_en: string; summary: string }
export interface CommentarySeed {
  chapter: number; verse: string; tradition: string; author: string; title: string; body: string; note?: string;
}
export interface VerseSeed {
  chapter: number; verse: string; sa: string; iast: string;
  en: string; hi: string; mr: string;
  words?: WordSeed[]; credit?: string;
}
export interface TextSeed {
  workSlug: string; chapters: ChapterSeed[]; verses: VerseSeed[]; commentaries?: CommentarySeed[];
}

const CREDIT = 'Mūla: traditional recitation text · Translation: Sanatan Library working translation (CC BY-SA 4.0)';
const EDITORIAL = 'Editorial summary — Sanatan Library contributors (CC BY-SA 4.0)';

/* ========================================================================
 * BHAGAVAD GĪTĀ
 * ===================================================================== */
const gita: TextSeed = {
  workSlug: 'bhagavad-gita',
  chapters: [
    { number: 1, title_sa: 'अर्जुनविषादयोग', title: 'Arjuna Viṣāda Yoga', title_en: 'The Despondency of Arjuna', summary: 'The two armies face each other at Kurukṣetra. Arjuna surveys the field, recognises his teachers and kin on both sides, and collapses in grief.' },
    { number: 2, title_sa: 'सांख्ययोग', title: 'Sāṃkhya Yoga', title_en: 'The Yoga of Knowledge', summary: 'Kṛṣṇa begins his teaching: the immortality of the Self, the nature of grief, and the discipline of desireless action (niṣkāma karma).' },
    { number: 3, title_sa: 'कर्मयोग', title: 'Karma Yoga', title_en: 'The Yoga of Action', summary: 'Action cannot be abandoned; it must be performed as sacrifice, without attachment to its fruits, and by the wise for the welfare of the world.' },
    { number: 4, title_sa: 'ज्ञानकर्मसंन्यासयोग', title: 'Jñāna Karma Sannyāsa Yoga', title_en: 'Knowledge, Action and Renunciation', summary: 'The doctrine of avatāra, the lineage of the teaching, and the fire of knowledge that burns all karma.' },
    { number: 6, title_sa: 'ध्यानयोग', title: 'Dhyāna Yoga', title_en: 'The Yoga of Meditation', summary: 'The practice of meditation: seat, posture, breath, the wandering mind, and the vision of the Self in all beings.' },
    { number: 9, title_sa: 'राजविद्याराजगुह्ययोग', title: 'Rāja Vidyā Rāja Guhya Yoga', title_en: 'The Royal Knowledge', summary: 'The most confidential teaching: Kṛṣṇa pervades and sustains all, and the simple offering of a leaf, flower or water is received with love.' },
    { number: 11, title_sa: 'विश्वरूपदर्शनयोग', title: 'Viśvarūpa Darśana Yoga', title_en: 'The Vision of the Universal Form', summary: 'Arjuna is granted divine sight and beholds the cosmic form — all worlds, beings and time itself within the body of the Lord.' },
    { number: 12, title_sa: 'भक्तियोग', title: 'Bhakti Yoga', title_en: 'The Yoga of Devotion', summary: 'The qualities of the devotee: freedom from hatred, friendliness, equanimity, and devotion that is unswerving.' },
    { number: 15, title_sa: 'पुरुषोत्तमयोग', title: 'Puruṣottama Yoga', title_en: 'The Supreme Person', summary: 'The world as an inverted tree with roots above; the Self as the enjoyer, the memory and knowledge within all beings.' },
    { number: 18, title_sa: 'मोक्षसंन्यासयोग', title: 'Mokṣa Sannyāsa Yoga', title_en: 'Liberation through Renunciation', summary: 'The final summary: the duties of the four varṇas, the three guṇas, and the supreme instruction of surrender.' },
  ],
  verses: [
    {
      chapter: 1, verse: '1',
      sa: 'धृतराष्ट्र उवाच ।\nधर्मक्षेत्रे कुरुक्षेत्रे समवेता युयुत्सवः ।\nमामकाः पाण्डवाश्चैव किमकुर्वत सञ्जय ॥',
      iast: 'dhṛtarāṣṭra uvāca |\ndharma-kṣetre kuru-kṣetre samavetā yuyutsavaḥ |\nmāmakāḥ pāṇḍavāś caiva kim akurvata sañjaya ||',
      en: 'Dhṛtarāṣṭra said: O Sañjaya, assembled on the field of dharma, the field of the Kurus, eager to fight — what did my sons and the sons of Pāṇḍu do?',
      hi: 'धृतराष्ट्र ने कहा — हे संजय! धर्मभूमि कुरुक्षेत्र में युद्ध की इच्छा से एकत्र हुए मेरे पुत्रों और पाण्डु के पुत्रों ने क्या किया?',
      mr: 'धृतराष्ट्र म्हणाले — हे संजया! धर्मभूमी कुरुक्षेत्रात युद्धाच्या इच्छेने जमलेल्या माझ्या मुलांनी आणि पांडूच्या मुलांनी काय केले?',
      words: [
        { sa: 'धर्मक्षेत्रे', iast: 'dharma-kṣetre', en: 'on the field of dharma', hi: 'धर्मभूमि में' },
        { sa: 'कुरुक्षेत्रे', iast: 'kuru-kṣetre', en: 'in Kurukṣetra', hi: 'कुरुक्षेत्र में' },
        { sa: 'समवेताः', iast: 'samavetāḥ', en: 'assembled together', hi: 'एकत्र हुए' },
        { sa: 'युयुत्सवः', iast: 'yuyutsavaḥ', en: 'desiring to fight', hi: 'युद्ध की इच्छा वाले' },
        { sa: 'मामकाः', iast: 'māmakāḥ', en: 'my (sons)', hi: 'मेरे (पुत्र)' },
        { sa: 'पाण्डवाः', iast: 'pāṇḍavāḥ', en: 'the sons of Pāṇḍu', hi: 'पाण्डु के पुत्र' },
        { sa: 'किम् अकुर्वत', iast: 'kim akurvata', en: 'what did they do', hi: 'क्या किया' },
      ],
    },
    {
      chapter: 2, verse: '11',
      sa: 'श्रीभगवानुवाच ।\nअशोच्यानन्वशोचस्त्वं प्रज्ञावादांश्च भाषसे ।\nगतासूनगतासूंश्च नानुशोचन्ति पण्डिताः ॥',
      iast: 'śrī-bhagavān uvāca |\naśocyān anvaśocas tvaṃ prajñā-vādāṃś ca bhāṣase |\ngatāsūn agatāsūṃś ca nānuśocanti paṇḍitāḥ ||',
      en: 'The Lord said: You grieve for those who are not to be grieved for, yet you speak the words of the wise. The wise grieve neither for the living nor for the dead.',
      hi: 'श्रीभगवान ने कहा — तुम उनके लिए शोक करते हो जो शोक के योग्य नहीं हैं, और फिर ज्ञान की बातें कहते हो। पण्डित जीवित और मृत किसी के लिए शोक नहीं करते।',
      mr: 'श्रीभगवान म्हणाले — ज्यांच्यासाठी शोक करू नये त्यांच्यासाठी तू शोक करतोस, आणि तरी ज्ञानाची बोलतोस. जीवंत व मृत यांच्यासाठी पंडित शोक करीत नाहीत.',
    },
    {
      chapter: 2, verse: '13',
      sa: 'देहिनोऽस्मिन्यथा देहे कौमारं यौवनं जरा ।\nतथा देहान्तरप्राप्तिर्धीरस्तत्र न मुह्यति ॥',
      iast: 'dehino ’smin yathā dehe kaumāraṃ yauvanaṃ jarā |\ntathā dehāntara-prāptir dhīras tatra na muhyati ||',
      en: 'Just as the embodied self passes through childhood, youth and old age in this body, so it passes into another body. The steady one is not bewildered by this.',
      hi: 'जैसे इस देह में जीवात्मा बाल्यावस्था, युवावस्था और वृद्धावस्था को प्राप्त होता है, वैसे ही वह दूसरा देह भी प्राप्त करता है; धीर पुरुष इससे मोहित नहीं होता।',
      mr: 'ज्याप्रमाणे या देहात जीव बालपण, तारुण्य आणि वार्धक्य पावतो, त्याचप्रमाणे तो दुसरे देहही पावतो; धीर मनुष्य यामुळे मोहात पडत नाही.',
      words: [
        { sa: 'देहिनः', iast: 'dehinaḥ', en: 'of the embodied one', hi: 'देहधारी का' },
        { sa: 'अस्मिन् देहे', iast: 'asmin dehe', en: 'in this body', hi: 'इस देह में' },
        { sa: 'कौमारम्', iast: 'kaumāram', en: 'childhood', hi: 'बाल्यावस्था' },
        { sa: 'यौवनम्', iast: 'yauvanam', en: 'youth', hi: 'युवावस्था' },
        { sa: 'जरा', iast: 'jarā', en: 'old age', hi: 'वृद्धावस्था' },
        { sa: 'धीरः', iast: 'dhīraḥ', en: 'the steady one', hi: 'धीर पुरुष' },
        { sa: 'न मुह्यति', iast: 'na muhyati', en: 'is not deluded', hi: 'मोहित नहीं होता' },
      ],
    },
    {
      chapter: 2, verse: '20',
      sa: 'न जायते म्रियते वा कदाचिन्\nनायं भूत्वा भविता वा न भूयः ।\nअजो नित्यः शाश्वतोऽयं पुराणो\nन हन्यते हन्यमाने शरीरे ॥',
      iast: 'na jāyate mriyate vā kadācin\nnāyaṃ bhūtvā bhavitā vā na bhūyaḥ |\najo nityaḥ śāśvato ’yaṃ purāṇo\nna hanyate hanyamāne śarīre ||',
      en: 'The Self is never born and never dies; it has not come into being and will not cease to be. Unborn, eternal, everlasting and ancient, it is not slain when the body is slain.',
      hi: 'आत्मा न कभी जन्म लेता है और न मरता है; न वह हुआ है और न फिर होगा। वह अजन्मा, नित्य, शाश्वत और पुरातन है; शरीर के मारे जाने पर भी वह नहीं मारा जाता।',
      mr: 'आत्मा कधीही जन्मत नाही व मरत नाही; तो झाला नाही व पुन्हा होणार नाही. तो अजन्मा, नित्य, शाश्वत व पुरातन आहे; देह मारला गेल्यावरही तो मारला जात नाही.',
    },
    {
      chapter: 2, verse: '47',
      sa: 'कर्मण्येवाधिकारस्ते मा फलेषु कदाचन ।\nमा कर्मफलहेतुर्भूर्मा ते सङ्गोऽस्त्वकर्मणि ॥',
      iast: 'karmaṇy evādhikāras te mā phaleṣu kadācana |\nmā karma-phala-hetur bhūr mā te saṅgo ’stv akarmaṇi ||',
      en: 'Your right is to action alone, never to its fruits. Do not be the cause of the fruits of action, and let there be no attachment to inaction.',
      hi: 'तेरा अधिकार केवल कर्म में है, फलों में कभी नहीं। तू कर्मफल का हेतु मत बन, और तेरी अकर्म में भी आसक्ति न हो।',
      mr: 'तुझा अधिकार केवळ कर्मात आहे, फळांत कधीही नाही. तू कर्मफळाचा हेतू होऊ नको, आणि अकर्मातही तुझी आसक्ती नसावी.',
      words: [
        { sa: 'कर्मणि', iast: 'karmaṇi', en: 'in action', hi: 'कर्म में' },
        { sa: 'एव', iast: 'eva', en: 'alone', hi: 'ही' },
        { sa: 'अधिकारः', iast: 'adhikāraḥ', en: 'right / authority', hi: 'अधिकार' },
        { sa: 'ते', iast: 'te', en: 'your', hi: 'तेरा' },
        { sa: 'मा फलेषु', iast: 'mā phaleṣu', en: 'never in the fruits', hi: 'फलों में कभी नहीं' },
        { sa: 'कदाचन', iast: 'kadācana', en: 'at any time', hi: 'कभी भी' },
        { sa: 'कर्मफलहेतुः', iast: 'karma-phala-hetuḥ', en: 'cause of the fruits of action', hi: 'कर्मफल का हेतु' },
        { sa: 'सङ्गः', iast: 'saṅgaḥ', en: 'attachment', hi: 'आसक्ति' },
        { sa: 'अकर्मणि', iast: 'akarmaṇi', en: 'in inaction', hi: 'अकर्म में' },
      ],
    },
    {
      chapter: 2, verse: '62',
      sa: 'ध्यायतो विषयान्पुंसः सङ्गस्तेषूपजायते ।\nसङ्गात्सञ्जायते कामः कामात्क्रोधोऽभिजायते ॥',
      iast: 'dhyāyato viṣayān puṃsaḥ saṅgas teṣūpajāyate |\nsaṅgāt sañjāyate kāmaḥ kāmāt krodho ’bhijāyate ||',
      en: 'When a person dwells on objects of the senses, attachment to them is born; from attachment desire arises, and from desire anger is born.',
      hi: 'विषयों का चिन्तन करने वाले पुरुष की उनमें आसक्ति उत्पन्न हो जाती है; आसक्ति से कामना और कामना से क्रोध उत्पन्न होता है।',
      mr: 'विषयांचे चिंतन करणाऱ्या मनुष्याची त्यांच्यात आसक्ती जन्मते; आसक्तीपासून कामना आणि कामनेपासून क्रोध उत्पन्न होतो.',
    },
    {
      chapter: 3, verse: '21',
      sa: 'यद्यदाचरति श्रेष्ठस्तत्तदेवेतरो जनः ।\nस यत्प्रमाणं कुरुते लोकस्तदनुवर्तते ॥',
      iast: 'yad yad ācarati śreṣṭhas tat tad evetaro janaḥ |\nsa yat pramāṇaṃ kurute lokas tad anuvartate ||',
      en: 'Whatever a great person does, others follow; whatever standard he sets, the world pursues.',
      hi: 'श्रेष्ठ पुरुष जैसा आचरण करता है, अन्य लोग वैसा ही करते हैं; वह जो प्रमाण स्थापित करता है, संसार उसका अनुसरण करता है।',
      mr: 'श्रेष्ठ मनुष्य जसे आचरण करतो, इतर लोक तसेच करतात; तो जो प्रमाण प्रस्थापित करतो, जग त्याचे अनुसरण करते.',
    },
    {
      chapter: 3, verse: '35',
      sa: 'श्रेयान्स्वधर्मो विगुणः परधर्मात्स्वनुष्ठितात् ।\nस्वधर्मे निधनं श्रेयः परधर्मो भयावहः ॥',
      iast: 'śreyān sva-dharmo viguṇaḥ para-dharmāt sv-anuṣṭhitāt |\nsva-dharme nidhanaṃ śreyaḥ para-dharmo bhayāvahaḥ ||',
      en: 'Better one’s own dharma, though imperfectly performed, than the dharma of another well performed. Better to die in one’s own dharma; the dharma of another brings danger.',
      hi: 'दूसरे के भली-भाँति आचरित धर्म से अपना धर्म गुणरहित होने पर भी श्रेष्ठ है। अपने धर्म में मरना भी श्रेयस्कर है; परधर्म भय देने वाला है।',
      mr: 'दुसऱ्याच्या उत्तमपणे आचरलेल्या धर्मापेक्षा आपला गुणरहित धर्म श्रेष्ठ आहे. आपल्या धर्मात मरणेही श्रेयस्कर; परधर्म भयावह आहे.',
    },
    {
      chapter: 4, verse: '7',
      sa: 'यदा यदा हि धर्मस्य ग्लानिर्भवति भारत ।\nअभ्युत्थानमधर्मस्य तदात्मानं सृजाम्यहम् ॥',
      iast: 'yadā yadā hi dharmasya glānir bhavati bhārata |\nabhyutthānam adharmasya tadātmānaṃ sṛjāmy aham ||',
      en: 'Whenever dharma declines and adharma rises, O Bhārata, then I manifest myself.',
      hi: 'हे भारत! जब-जब धर्म की हानि और अधर्म की वृद्धि होती है, तब-तब मैं स्वयं प्रकट होता हूँ।',
      mr: 'हे भारता! जेव्हा जेव्हा धर्माची हानी व अधर्माची वृद्धी होते, तेव्हा तेव्हा मी स्वतः प्रकट होतो.',
      words: [
        { sa: 'यदा यदा', iast: 'yadā yadā', en: 'whenever', hi: 'जब-जब' },
        { sa: 'धर्मस्य', iast: 'dharmasya', en: 'of dharma', hi: 'धर्म की' },
        { sa: 'ग्लानिः', iast: 'glāniḥ', en: 'decline', hi: 'हानि' },
        { sa: 'अभ्युत्थानम्', iast: 'abhyutthānam', en: 'rise', hi: 'वृद्धि' },
        { sa: 'अधर्मस्य', iast: 'adharmasya', en: 'of adharma', hi: 'अधर्म की' },
        { sa: 'सृजामि', iast: 'sṛjāmi', en: 'I send forth', hi: 'प्रकट करता हूँ' },
      ],
    },
    {
      chapter: 4, verse: '8',
      sa: 'परित्राणाय साधूनां विनाशाय च दुष्कृताम् ।\nधर्मसंस्थापनार्थाय सम्भवामि युगे युगे ॥',
      iast: 'paritrāṇāya sādhūnāṃ vināśāya ca duṣkṛtām |\ndharma-saṃsthāpanārthāya sambhavāmi yuge yuge ||',
      en: 'For the protection of the good, for the destruction of the wicked, and for the establishing of dharma, I come into being age after age.',
      hi: 'साधुओं की रक्षा, दुष्कर्मियों के विनाश और धर्म की स्थापना के लिए मैं युग-युग में प्रकट होता हूँ।',
      mr: 'साधूंच्या रक्षणासाठी, दुष्कर्म्यांच्या विनाशासाठी आणि धर्माच्या संस्थापनेसाठी मी युगायुगात प्रकट होतो.',
    },
    {
      chapter: 4, verse: '34',
      sa: 'तद्विद्धि प्रणिपातेन परिप्रश्नेन सेवया ।\nउपदेक्ष्यन्ति ते ज्ञानं ज्ञानिनस्तत्त्वदर्शिनः ॥',
      iast: 'tad viddhi praṇipātena paripraśnena sevayā |\nupadekṣyanti te jñānaṃ jñāninas tattva-darśinaḥ ||',
      en: 'Know this by prostration, by enquiry and by service. The wise who have seen the truth will teach you knowledge.',
      hi: 'उसे प्रणाम, जिज्ञासा और सेवा से जानो। तत्त्वदर्शी ज्ञानी जन तुझे ज्ञान का उपदेश देंगे।',
      mr: 'ते ज्ञान नम्रतेने, प्रश्न विचारून आणि सेवेने जाणून घे. तत्त्वदर्शी ज्ञानी तुला ज्ञानाचा उपदेश करतील.',
    },
    {
      chapter: 6, verse: '5',
      sa: 'उद्धरेदात्मनात्मानं नात्मानमवसादयेत् ।\nआत्मैव ह्यात्मनो बन्धुरात्मैव रिपुरात्मनः ॥',
      iast: 'uddhared ātmanātmānaṃ nātmānam avasādayet |\nātmaiva hy ātmano bandhur ātmaiva ripur ātmanaḥ ||',
      en: 'One should lift oneself by the self, and not degrade oneself; for the self alone is the friend of the self, and the self alone is its enemy.',
      hi: 'अपने द्वारा अपना उद्धार करे और अपने को गिराए नहीं; क्योंकि आत्मा ही अपना मित्र है और आत्मा ही अपना शत्रु है।',
      mr: 'स्वतःच्या स्वतःचा उद्धार करावा आणि स्वतःला खाली पाडू नये; कारण आत्माच स्वतःचा मित्र आहे आणि आत्माच स्वतःचा शत्रू आहे.',
    },
    {
      chapter: 9, verse: '22',
      sa: 'अनन्याश्चिन्तयन्तो मां ये जनाः पर्युपासते ।\nतेषां नित्याभियुक्तानां योगक्षेमं वहाम्यहम् ॥',
      iast: 'ananyāś cintayanto māṃ ye janāḥ paryupāsate |\nteṣāṃ nityābhiyuktānāṃ yoga-kṣemaṃ vahāmy aham ||',
      en: 'Those who worship me alone, thinking of no other, being ever united with me — for them I carry what they lack and preserve what they have.',
      hi: 'जो लोग अनन्य भाव से मेरा चिन्तन करते हुए मेरी उपासना करते हैं, उन नित्य युक्त पुरुषों का योगक्षेम मैं स्वयं वहन करता हूँ।',
      mr: 'जे लोक अनन्यभावाने माझे चिंतन करीत माझी उपासना करतात, त्या नित्य युक्त लोकांचा योगक्षेम मी स्वतः वाहतो.',
    },
    {
      chapter: 9, verse: '26',
      sa: 'पत्रं पुष्पं फलं तोयं यो मे भक्त्या प्रयच्छति ।\nतदहं भक्त्युपहृतमश्नामि प्रयतात्मनः ॥',
      iast: 'patraṃ puṣpaṃ phalaṃ toyaṃ yo me bhaktyā prayacchati |\ntad ahaṃ bhakty-upahṛtam aśnāmi prayatātmanaḥ ||',
      en: 'Whoever offers me with devotion a leaf, a flower, a fruit or water — that offering of love, made with a pure heart, I accept.',
      hi: 'जो भक्ति से मुझे पत्र, पुष्प, फल या जल अर्पित करता है, शुद्धात्मा भक्त का भक्तिपूर्वक दिया हुआ वह मैं ग्रहण करता हूँ।',
      mr: 'जो भक्तीने मला पत्र, फूल, फळ किंवा पाणी अर्पित करतो, शुद्ध अंतःकरणाच्या भक्ताचे ते भक्तीने दिलेले मी स्वीकारतो.',
      words: [
        { sa: 'पत्रम्', iast: 'patram', en: 'a leaf', hi: 'पत्ता' },
        { sa: 'पुष्पम्', iast: 'puṣpam', en: 'a flower', hi: 'फूल' },
        { sa: 'फलम्', iast: 'phalam', en: 'a fruit', hi: 'फल' },
        { sa: 'तोयम्', iast: 'toyam', en: 'water', hi: 'जल' },
        { sa: 'भक्त्या', iast: 'bhaktyā', en: 'with devotion', hi: 'भक्ति से' },
        { sa: 'प्रयच्छति', iast: 'prayacchati', en: 'offers', hi: 'अर्पित करता है' },
        { sa: 'अश्नामि', iast: 'aśnāmi', en: 'I accept', hi: 'ग्रहण करता हूँ' },
      ],
    },
    {
      chapter: 11, verse: '32',
      sa: 'श्रीभगवानुवाच ।\nकालोऽस्मि लोकक्षयकृत्प्रवृद्धो\nलोकान्समाहर्तुमिह प्रवृत्तः ।\nऋतेऽपि त्वां न भविष्यन्ति सर्वे\nयेऽवस्थिताः प्रत्यनीकेषु योधाः ॥',
      iast: 'śrī-bhagavān uvāca |\nkālo ’smi loka-kṣaya-kṛt pravṛddho\nlokān samāhartum iha pravṛttaḥ |\nṛte ’pi tvāṃ na bhaviṣyanti sarve\nye ’vasthitāḥ pratyanīkeṣu yodhāḥ ||',
      en: 'The Lord said: I am Time, the great destroyer of worlds, now engaged in destroying them. Even without you, all these warriors arrayed in battle will cease to be.',
      hi: 'श्रीभगवान ने कहा — मैं प्रवृद्ध लोकों का संहार करने वाला काल हूँ, यहाँ लोकों का संहार करने में प्रवृत्त हूँ। तुम्हारे बिना भी ये सब योद्धा न रहेंगे।',
      mr: 'श्रीभगवान म्हणाले — मी प्रवृद्ध लोकसंहारक काळ आहे, येथे लोकांचा संहार करण्यास प्रवृत्त झालो आहे. तुझ्याशिवायही हे सर्व योद्धे राहणार नाहीत.',
    },
    {
      chapter: 12, verse: '13',
      sa: 'अद्वेष्टा सर्वभूतानां मैत्रः करुण एव च ।\nनिर्ममो निरहङ्कारः समदुःखसुखः क्षमी ॥',
      iast: 'adveṣṭā sarva-bhūtānāṃ maitraḥ karuṇa eva ca |\nnirmamo nirahaṅkāraḥ sama-duḥkha-sukhaḥ kṣamī ||',
      en: 'One who hates no being, who is friendly and compassionate, free of possessiveness and ego, equal in pain and pleasure, forgiving — that one is dear to me.',
      hi: 'जो किसी से द्वेष नहीं करता, सबका मित्र और करुणावान है, ममता और अहंकार से रहित है, सुख-दुःख में समान और क्षमाशील है — वह मुझे प्रिय है।',
      mr: 'जो कोणाचाही द्वेष करीत नाही, सर्वांचा मित्र व करुणावान आहे, ममता व अहंकाररहित आहे, सुखदुःखात समान व क्षमाशील आहे — तो मला प्रिय आहे.',
    },
    {
      chapter: 15, verse: '15.15',
      sa: 'सर्वस्य चाहं हृदि सन्निविष्टो\nमत्तः स्मृतिर्ज्ञानमपोहनं च ।\nवेदैश्च सर्वैरहमेव वेद्यो\nवेदान्तकृद्वेदविदेव चाहम् ॥',
      iast: 'sarvasya cāhaṃ hṛdi sanniviṣṭo\nmattaḥ smṛtir jñānam apohanaṃ ca |\nvedaiś ca sarvair aham eva vedyo\nvedānta-kṛd veda-vid eva cāham ||',
      en: 'I am seated in the heart of all beings; from me come memory, knowledge and their loss. I am what is to be known by all the Vedas; I am the author of Vedānta, and the knower of the Vedas.',
      hi: 'मैं सब प्राणियों के हृदय में स्थित हूँ; मुझसे स्मृति, ज्ञान और उनका लोप होता है। सब वेदों द्वारा जानने योग्य मैं ही हूँ; वेदांत का कर्ता और वेद का ज्ञाता भी मैं ही हूँ।',
      mr: 'मी सर्व प्राण्यांच्या हृदयी स्थित आहे; माझ्यापासून स्मृति, ज्ञान व त्यांचा लोप होतो. सर्व वेदांनी जाणण्यायोग्य मीच आहे; वेदांताचा कर्ता व वेदाचा ज्ञाता मीच आहे.',
    },
    {
      chapter: 18, verse: '66',
      sa: 'सर्वधर्मान्परित्यज्य मामेकं शरणं व्रज ।\nअहं त्वां सर्वपापेभ्यो मोक्षयिष्यामि मा शुचः ॥',
      iast: 'sarva-dharmān parityajya mām ekaṃ śaraṇaṃ vraja |\nahaṃ tvāṃ sarva-pāpebhyo mokṣayiṣyāmi mā śucaḥ ||',
      en: 'Abandoning all dharmas, take refuge in me alone. I shall free you from all sins — do not grieve.',
      hi: 'सब धर्मों को त्याग कर केवल मेरी शरण में आ जा; मैं तुझे सब पापों से मुक्त कर दूँगा, शोक मत कर।',
      mr: 'सर्व धर्मांचा त्याग करून केवळ माझ्या शरण ये; मी तुला सर्व पापांपासून मुक्त करीन, शोक करू नको.',
      words: [
        { sa: 'सर्वधर्मान्', iast: 'sarva-dharmān', en: 'all dharmas', hi: 'सब धर्मों को' },
        { sa: 'परित्यज्य', iast: 'parityajya', en: 'having abandoned', hi: 'त्याग कर' },
        { sa: 'माम् एकम्', iast: 'mām ekam', en: 'to me alone', hi: 'केवल मुझे' },
        { sa: 'शरणम् व्रज', iast: 'śaraṇaṃ vraja', en: 'take refuge', hi: 'शरण में आ' },
        { sa: 'पापेभ्यः', iast: 'pāpebhyaḥ', en: 'from sins', hi: 'पापों से' },
        { sa: 'मोक्षयिष्यामि', iast: 'mokṣayiṣyāmi', en: 'I shall liberate', hi: 'मुक्त करूँगा' },
      ],
    },
    {
      chapter: 18, verse: '78',
      sa: 'यत्र योगेश्वरः कृष्णो यत्र पार्थो धनुर्धरः ।\nतत्र श्रीर्विजयो भूतिर्ध्रुवा नीतिर्मतिर्मम ॥',
      iast: 'yatra yogeśvaraḥ kṛṣṇo yatra pārtho dhanur-dharaḥ |\ntatra śrīr vijayo bhūtir dhruvā nītir matir mama ||',
      en: 'Where there is Kṛṣṇa, the Lord of Yoga, and where there is Arjuna the archer — there, in my conviction, are prosperity, victory, growth and firm righteousness.',
      hi: 'जहाँ योगेश्वर कृष्ण हैं और जहाँ धनुर्धर अर्जुन है, वहीं श्री, विजय, ऐश्वर्य और अटल नीति है — यही मेरा निश्चित मत है।',
      mr: 'जेथे योगेश्वर कृष्ण आहेत व जेथे धनुर्धर अर्जुन आहे, तेथेच श्री, विजय, ऐश्वर्य व अढळ नीती आहे — हेच माझे निश्चित मत.',
    },
  ],
  commentaries: [
    {
      chapter: 2, verse: '47', tradition: 'Advaita', author: 'Śaṅkara tradition', title: 'Advaita reading of the verse',
      body: 'The Advaita reading takes the verse as a preparation for knowledge: agency belongs to the guṇas, not the Self, so the injunction to act without claiming the fruit is a cure for the ego-sense that alone binds. Action purifies the mind; the fruit is never the Self’s concern.',
      note: 'Editorial summary of the school’s characteristic interpretation, not a quotation.',
    },
    {
      chapter: 2, verse: '47', tradition: 'Vishishtadvaita', author: 'Rāmānuja tradition', title: 'Viśiṣṭādvaita reading of the verse',
      body: 'For Rāmānuja, action is real and is the worship of the Lord; the "right to action" is a duty (karma) prescribed by scripture, and renouncing the fruit means offering it to God. The Self is the Lord’s body, so agency is real but dependent.',
      note: 'Editorial summary.',
    },
    {
      chapter: 2, verse: '47', tradition: 'Dvaita', author: 'Madhva tradition', title: 'Dvaita reading of the verse',
      body: 'Madhva reads the verse as teaching that the soul is a real agent whose action is empowered by God, and that desire for the fruit binds while action offered to Viṣṇu liberates. Graded agency and the reality of the world are essential to the reading.',
      note: 'Editorial summary.',
    },
    {
      chapter: 2, verse: '47', tradition: 'Yoga', author: 'Pātañjala tradition', title: 'Yogic reading of the verse',
      body: 'In the Yoga reading the verse describes the discipline of vairāgya (dispassion): the citta is purified when the results of action no longer colour it, making the mind fit for dhāraṇā and nirodha.',
      note: 'Editorial summary.',
    },
    {
      chapter: 4, verse: '8', tradition: 'Shaiva', author: 'Abhinavagupta (Trika) tradition', title: 'Trika reading of avatāra',
      body: 'Kashmiri Śaiva authors treat the descent (avatāra) as the play (krīḍā) of Śiva’s freedom: the tradition is not that a limited being appears as God, but that consciousness itself condescends to appear as form for the sake of the bound.',
      note: 'Editorial summary.',
    },
    {
      chapter: 4, verse: '8', tradition: 'Shakta', author: 'Śrīvidyā tradition', title: 'Śākta reading of avatāra',
      body: 'Śākta theology reads all descents as the play of the Goddess: Kṛṣṇa’s protection of the good and destruction of the wicked is an expression of Devī’s protective and destructive power, the same power cultivated in the Śrīcakra ritual.',
      note: 'Editorial summary.',
    },
    {
      chapter: 18, verse: '66', tradition: 'Vishishtadvaita', author: 'Rāmānuja tradition', title: 'The verse of surrender as prapatti',
      body: 'Śrīvaiṣṇava commentators see this verse as the charter of prapatti: the direct path of self-surrender to the Lord as the only means for those who cannot sustain the effort of bhakti yoga. The Lord himself removes the obstacles.',
      note: 'Editorial summary.',
    },
    {
      chapter: 18, verse: '66', tradition: 'Advaita', author: 'Advaita tradition', title: 'The verse of surrender as jñāna',
      body: 'Advaita reads "all dharmas" as the whole apparatus of doership and its results: the final surrender is the abandonment of the illusion of independent agency, and the promise of release is the recognition of one’s already-free nature.',
      note: 'Editorial summary.',
    },
    {
      chapter: 2, verse: '20', tradition: 'Nyaya', author: 'Nyāya–Vaiśeṣika tradition', title: 'Comparison with Nyāya arguments for the Self',
      body: 'The Nyāya school argues for a permanent Self by inference: desire, aversion, volition and cognition require a persistent substratum. This verse supplies the scriptural (śabda) testimony that Nyāya cites alongside its inferential proofs.',
      note: 'Editorial summary; the verse is a śruti-level echo of the Upaniṣads on the indestructibility of the Self.',
    },
    {
      chapter: 2, verse: '20', tradition: 'Samkhya', author: 'Sāṃkhya tradition', title: 'Comparison with Sāṃkhya puruṣa',
      body: 'Sāṃkhya identifies the witnessing puruṣa as unborn and eternal while all change belongs to prakṛti. This verse expresses the Sāṃkhya distinction exactly, and the school would read "body is slain" as a modification of prakṛti only.',
      note: 'Editorial summary.',
    },
  ],
};

/* ========================================================================
 * ĪŚĀVĀSYA UPANIṢAD
 * ===================================================================== */
const isha: TextSeed = {
  workSlug: 'isha-upanishad',
  chapters: [{ number: 1, title_sa: 'ईशावास्योपनिषद्', title: 'Īśāvāsya', title_en: 'The Lord in All', summary: 'Eighteen mantras of the Śukla Yajurveda (adhyāya 40) on the vision of the Lord in all things and the union of knowledge and action.' }],
  verses: [
    {
      chapter: 1, verse: '1',
      sa: 'ॐ ईशा वास्यमिदꣳ सर्वं यत्किञ्च जगत्यां जगत् ।\nतेन त्यक्तेन भुञ्जीथा मा गृधः कस्यस्विद्धनम् ॥',
      iast: 'oṃ īśā vāsyam idaṃ sarvaṃ yat kiñca jagatyāṃ jagat |\ntena tyaktena bhuñjīthā mā gṛdhaḥ kasyasvid dhanam ||',
      en: 'Om. All this — whatever moves in this changing world — is to be covered by the Lord. Enjoy through renunciation. Do not covet; whose wealth is it after all?',
      hi: 'ॐ। इस जगत् में जो कुछ भी परिवर्तनशील है, वह सब ईश्वर से व्याप्त है। त्याग भाव से भोग कर। किसी की धन-सम्पदा की लालसा मत कर — यह धन किसका है?',
      mr: 'ॐ. या जगात जे काही परिवर्तनशील आहे ते सर्व ईश्वराने व्यापलेले आहे. त्यागभावाने उपभोग घे. कोणाच्याही धनाचा लोभ करू नको — हे धन कोणाचे?',
      words: [
        { sa: 'ईशा', iast: 'īśā', en: 'by the Lord', hi: 'ईश्वर से' },
        { sa: 'वास्यम्', iast: 'vāsyam', en: 'to be covered / indwelt', hi: 'व्याप्त' },
        { sa: 'इदम् सर्वम्', iast: 'idam sarvam', en: 'all this', hi: 'यह सब' },
        { sa: 'जगत्याम्', iast: 'jagatyām', en: 'in the moving world', hi: 'जगत् में' },
        { sa: 'तेन त्यक्तेन', iast: 'tena tyaktena', en: 'by that renunciation', hi: 'उस त्याग से' },
        { sa: 'भुञ्जीथाः', iast: 'bhuñjīthāḥ', en: 'you should enjoy', hi: 'भोग कर' },
        { sa: 'मा गृधः', iast: 'mā gṛdhaḥ', en: 'do not covet', hi: 'लालसा मत कर' },
      ],
    },
    {
      chapter: 1, verse: '2',
      sa: 'कुर्वन्नेवेह कर्माणि जिजीविषेच्छतꣳ समाः ।\nएवं त्वयि नान्यथेतोऽस्ति न कर्म लिप्यते नरे ॥',
      iast: 'kurvann eveha karmāṇi jijīviṣec chataṃ samāḥ |\nevaṃ tvayi nānyatheto ’sti na karma lipyate nare ||',
      en: 'Doing works here alone, one should wish to live a hundred years. Thus, and not otherwise, is it for you: action does not cling to a person who lives so.',
      hi: 'यहाँ कर्म करते हुए ही सौ वर्ष जीने की इच्छा करे। इस प्रकार ही तुझमें यह बात है, अन्यथा नहीं — ऐसा जीवन जीने वाले पुरुष को कर्म लिप्त नहीं करते।',
      mr: 'येथे कर्म करीतच शंभर वर्षे जगण्याची इच्छा करावी. अशाच प्रकारे तुझ्याबाबत घडते, अन्यथा नाही — असे जगणाऱ्या पुरुषाला कर्म लिप्त करीत नाही.',
    },
    {
      chapter: 1, verse: '6',
      sa: 'यस्तु सर्वाणि भूतानि आत्मन्येवानुपश्यति ।\nसर्वभूतेषु चात्मानं ततो न विजुगुप्सते ॥',
      iast: 'yas tu sarvāṇi bhūtāni ātmany evānupaśyati |\nsarva-bhūteṣu cātmānaṃ tato na vijugupsate ||',
      en: 'But one who sees all beings in the Self itself, and the Self in all beings, thereafter hates nothing.',
      hi: 'जो सब भूतों को आत्मा में ही देखता है और आत्मा को सब भूतों में देखता है, वह फिर किसी से घृणा नहीं करता।',
      mr: 'जो सर्व प्राण्यांना आत्म्यातच पाहतो आणि सर्व प्राण्यांत आत्म्याला पाहतो, तो पुढे कोणाचाही द्वेष करीत नाही.',
    },
    {
      chapter: 1, verse: '8',
      sa: 'स पर्यगाच्छुक्रमकायमव्रणमस्नाविरं शुद्धमपापविद्धम् ।\nकविर्मनीषी परिभूः स्वयम्भूर्याथातथ्यतोऽर्थान्व्यदधाच्छाश्वतीभ्यः समाभ्यः ॥',
      iast: 'sa paryagāc chukram akāyam avraṇam asnāviraṃ śuddham apāpaviddham |\nkavir manīṣī paribhūḥ svayambhūr yāthātathyato ’rthān vyadadhāc chāśvatībhyaḥ samābhyaḥ ||',
      en: 'He is all-pervading, radiant, bodiless, unscarred, sinewless, pure, untouched by evil; he is the seer, the thinker, the all-pervading, self-existent one, who has apportioned their ends to the eternal years.',
      hi: 'वह सर्वव्यापी, शुक्रवत् निर्मल, शरीररहित, अव्रण, स्नायुरहित, शुद्ध और पापरहित है; वह कवि (द्रष्टा), मनीषी, सर्वव्यापी, स्वयम्भू है और अनादि काल से वस्तुओं को यथायोग्य विभाजित करता रहा है।',
      mr: 'तो सर्वव्यापी, शुद्ध, शरीररहित, अव्रण, स्नायुरहित, शुद्ध व पापरहित आहे; तो कवी, मनीषी, सर्वव्यापी व स्वयंभू आहे आणि अनादिकाळापासून वस्तूंना यथायोग्य विभागून देत आला आहे.',
    },
    {
      chapter: 1, verse: '15',
      sa: 'हिरण्मयेन पात्रेण सत्यस्यापिहितं मुखम् ।\nतत्त्वं पूषन्नपावृणु सत्यधर्माय दृष्टये ॥',
      iast: 'hiraṇmayena pātreṇa satyasyāpihitaṃ mukham |\ntat tvaṃ pūṣann apāvṛṇu satya-dharmāya dṛṣṭaye ||',
      en: 'The face of truth is covered by a golden vessel. Unveil it, O Pūṣan, so that I who love the truth may see it.',
      hi: 'सत्य का मुख स्वर्ण के पात्र से ढका हुआ है। हे पूषन्! उसे खोल दे, जिससे मैं सत्यधर्मा के लिए उसे देख सकूँ।',
      mr: 'सत्याचे मुख सुवर्णपात्राने झाकलेले आहे. हे पूषन! ते उघड, जेणेकरून सत्यधर्माच्या दर्शनासाठी मला ते दिसेल.',
      words: [
        { sa: 'हिरण्मयेन पात्रेण', iast: 'hiraṇmayena pātreṇa', en: 'by a golden vessel', hi: 'स्वर्ण के पात्र से' },
        { sa: 'सत्यस्य मुखम्', iast: 'satyasya mukham', en: 'the face of truth', hi: 'सत्य का मुख' },
        { sa: 'अपावृणु', iast: 'apāvṛṇu', en: 'uncover', hi: 'खोल दे' },
        { sa: 'दृष्टये', iast: 'dṛṣṭaye', en: 'for seeing', hi: 'देखने के लिए' },
      ],
    },
  ],
  commentaries: [
    { chapter: 1, verse: '1', tradition: 'Advaita', author: 'Śaṅkara tradition', title: 'Renunciation as knowledge', body: 'Śaṅkara reads "covering by the Lord" as the denial of any reality other than the Self; "enjoyment through renunciation" is therefore not literal sacrifice but the knowledge that there is nothing to possess apart from the one Self, which removes the craving that produces bondage.', note: 'Editorial summary.' },
    { chapter: 1, verse: '1', tradition: 'Vishishtadvaita', author: 'Rāmānuja tradition', title: 'The world as the Lord’s body', body: 'For Rāmānuja the verse establishes that the Lord indwells the world as its Self and support; renunciation of possession becomes the offering of all enjoyment to the indwelling Lord, and the world is therefore real but dependent.', note: 'Editorial summary.' },
    { chapter: 1, verse: '1', tradition: 'Dvaita', author: 'Madhva tradition', title: 'The Lord’s full ownership', body: 'Madhva emphasises svāmitva: all wealth and all beings belong wholly to Viṣṇu, so coveting is both a moral and a metaphysical error. The verse is read as scriptural proof of the absolute dependence (paratantrya) of souls.', note: 'Editorial summary.' },
    { chapter: 1, verse: '2', tradition: 'Mimamsa', author: 'Mīmāṃsā tradition', title: 'The Vedic injunction to act', body: 'Mīmāṃsā reads the verse as an injunction (vidhi) to continue ritual action for the full span of life, and as scriptural authority that the Vedic path is not superseded by an alleged renunciation of works.', note: 'Editorial summary.' },
  ],
};

/* ========================================================================
 * KAṬHA UPANIṢAD
 * ===================================================================== */
const katha: TextSeed = {
  workSlug: 'katha-upanishad',
  chapters: [
    { number: 1, title_sa: 'प्रथमाध्यायः — वल्ली १, २', title: 'Vallī 1–2', title_en: 'The Three Boons', summary: 'Naciketas is given to Death by his father, and Yama grants him three boons. The third boon is the secret of what remains after death.' },
    { number: 2, title_sa: 'द्वितीयाध्यायः — वल्ली १, २', title: 'Vallī 3–4', title_en: 'The Self and the Chariot', summary: 'The Self is the charioteer’s lord, the body the chariot; and the Self is subtler than the subtle, greater than the great.' },
  ],
  verses: [
    {
      chapter: 1, verse: '2.20',
      sa: 'अणोरणीयान्महतो महीयानात्मास्य जन्तोर्निहितो गुहायाम् ।\nतमक्रतुः पश्यति वीतशोको धातुप्रसादान्महिमानमात्मनः ॥',
      iast: 'aṇor aṇīyān mahato mahīyān ātmāsya jantor nihito guhāyām |\ntam akratuḥ paśyati vīta-śoko dhātu-prasādān mahimānam ātmanaḥ ||',
      en: 'The Self, smaller than the small, greater than the great, is hidden in the heart of this creature. One free of desire and free of grief sees the glory of the Self through the serenity of the senses and mind.',
      hi: 'आत्मा अणु से भी सूक्ष्म और महत् से भी महान् है, इस जीव की गुफा में स्थित है। जो निष्काम और शोकरहित है, वह इन्द्रिय-मन की प्रसन्नता से आत्मा का महिमा देखता है।',
      mr: 'आत्मा अणूपेक्षाही सूक्ष्म व महत्तर पेक्षाही महान आहे, या जिवाच्या गुहेत स्थित आहे. जो निष्काम व शोकरहित आहे, तो इंद्रिय-मनाच्या प्रसन्नतेने आत्म्याची महिमा पाहतो.',
      words: [
        { sa: 'अणोः अणीयान्', iast: 'aṇor aṇīyān', en: 'subtler than the subtle', hi: 'अणु से भी सूक्ष्म' },
        { sa: 'महतः महीयान्', iast: 'mahato mahīyān', en: 'greater than the great', hi: 'महत् से भी महान्' },
        { sa: 'आत्मा', iast: 'ātmā', en: 'the Self', hi: 'आत्मा' },
        { sa: 'गुहायाम्', iast: 'guhāyām', en: 'in the cave (of the heart)', hi: 'गुफा में' },
        { sa: 'अक्रतुः', iast: 'akratuḥ', en: 'free of desire', hi: 'निष्काम' },
        { sa: 'वीतशोकः', iast: 'vīta-śokaḥ', en: 'free of grief', hi: 'शोकरहित' },
      ],
    },
    {
      chapter: 1, verse: '2.23',
      sa: 'नायमात्मा प्रवचनेन लभ्यो न मेधया न बहुना श्रुतेन ।\nयमेवैष वृणुते तेन लभ्यस्तस्यैष आत्मा विवृणुते तनूꣳ स्वाम् ॥',
      iast: 'nāyam ātmā pravacanena labhyo na medhayā na bahunā śrutena |\nyam evaiṣa vṛṇute tena labhyas tasyaiṣa ātmā vivṛṇute tanūṃ svām ||',
      en: 'This Self is not attained by instruction, nor by intellect, nor by much learning. It is attained only by the one whom it chooses; to that one the Self reveals its own form.',
      hi: 'यह आत्मा न उपदेश से, न बुद्धि से, न बहुत श्रवण से प्राप्त होता है। जिसे यह स्वयं चुन लेता है, उसी को प्राप्त होता है; उसी के लिए यह आत्मा अपना स्वरूप प्रकट करता है।',
      mr: 'हा आत्मा उपदेशाने, बुद्धीने किंवा पुष्कळ श्रवणाने प्राप्त होत नाही. ज्याला हा स्वतः निवडतो, त्यालाच प्राप्त होतो; त्याच्यासाठी हा आत्मा आपले स्वरूप प्रकट करतो.',
    },
    {
      chapter: 2, verse: '3.3',
      sa: 'आत्मानꣳ रथिनं विद्धि शरीरꣳ रथमेव तु ।\nबुद्धिं तु सारथिं विद्धि मनः प्रग्रहमेव च ॥',
      iast: 'ātmānaṃ rathinaṃ viddhi śarīraṃ ratham eva tu |\nbuddhiṃ tu sārathiṃ viddhi manaḥ pragraham eva ca ||',
      en: 'Know the Self as the rider and the body as the chariot; know the intellect as the charioteer, and the mind as the reins.',
      hi: 'आत्मा को रथी, शरीर को रथ, बुद्धि को सारथी और मन को लगाम जानो।',
      mr: 'आत्म्याला रथी, देहाला रथ, बुद्धीला सारथी व मनाला लगाम समज.',
      words: [
        { sa: 'आत्मानम्', iast: 'ātmānam', en: 'the Self', hi: 'आत्मा' },
        { sa: 'रथिनम्', iast: 'rathinam', en: 'the rider / chariot-owner', hi: 'रथी' },
        { sa: 'शरीरम्', iast: 'śarīram', en: 'the body', hi: 'शरीर' },
        { sa: 'रथम्', iast: 'ratham', en: 'the chariot', hi: 'रथ' },
        { sa: 'बुद्धिम्', iast: 'buddhim', en: 'the intellect', hi: 'बुद्धि' },
        { sa: 'सारथिम्', iast: 'sārathim', en: 'the charioteer', hi: 'सारथी' },
        { sa: 'मनः', iast: 'manaḥ', en: 'the mind', hi: 'मन' },
        { sa: 'प्रग्रहम्', iast: 'pragraham', en: 'the reins', hi: 'लगाम' },
      ],
    },
    {
      chapter: 2, verse: '2.15',
      sa: 'अशब्दमस्पर्शमरूपमव्ययं तथाऽरसं नित्यमगन्धवच्च यत् ।\nअनाद्यनन्तं महतः परं ध्रुवं निचाय्य तन्मृत्युमुखात्प्रमुच्यते ॥',
      iast: 'aśabdam asparśam arūpam avyayaṃ tathārasaṃ nityam agandhavac ca yat |\nanādy anantaṃ mahataḥ paraṃ dhruvaṃ nicāyya tan mṛtyu-mukhāt pramucyate ||',
      en: 'That which is soundless, touchless, formless, tasteless, odourless, unchanging and eternal, beginningless and endless, beyond the great, and stable — knowing that, one is released from the mouth of death.',
      hi: 'जो शब्दरहित, स्पर्शरहित, रूपरहित, रसरहित, गन्धरहित, नित्य और अव्यय है, अनादि-अनन्त, महत् से परे और ध्रुव है — उसे जानकर मृत्यु के मुख से मुक्त हो जाता है।',
      mr: 'जे शब्दरहित, स्पर्शरहित, रूपरहित, रसरहित, गंधरहित, नित्य व अव्यय आहे, अनादि-अनंत, महत्तर पेक्षा पलीकडे व ध्रुव आहे — ते जाणून मृत्यूच्या मुखातून मुक्त होतो.',
    },
  ],
  commentaries: [
    { chapter: 1, verse: '2.23', tradition: 'Advaita', author: 'Śaṅkara tradition', title: 'Grace and knowledge', body: 'Śaṅkara takes "whom it chooses" as the Self’s own grace, which is not arbitrary but the fruition of the seeker’s purification; the verse denies that mere erudition confers knowledge, and asserts that the Self reveals itself when the mind is fit.', note: 'Editorial summary.' },
    { chapter: 1, verse: '2.23', tradition: 'Dvaita', author: 'Madhva tradition', title: 'Election and dependence', body: 'Dvaita reads the verse as explicit scriptural evidence for the Lord’s gracious election (svīkāra) and for the soul’s dependence on God even for its knowledge, supporting the doctrine of graded liberation.', note: 'Editorial summary.' },
    { chapter: 2, verse: '3.3', tradition: 'Yoga', author: 'Yogic tradition', title: 'The chariot as a map of practice', body: 'Haṭha and Pātañjala authors use this verse as a practical anatomy of sādhanā: restraining the reins of the mind (pratyāhāra) and steering by a purified intellect (buddhi) is exactly the discipline that leads to the rider’s destination.', note: 'Editorial summary.' },
  ],
};

/* ========================================================================
 * MUṆḌAKA, PRAŚNA, CHĀNDOGYA, BṚHADĀRAṆYAKA, KENA
 * ===================================================================== */
const mundaka: TextSeed = {
  workSlug: 'mundaka-upanishad',
  chapters: [{ number: 3, title_sa: 'तृतीयमुण्डकम्', title: 'Muṇḍaka 3', title_en: 'Truth Alone Triumphs', summary: 'The closing section on the knower of Brahman, the bow of the Upaniṣad, and the declaration that truth alone wins, not falsehood.' }],
  verses: [
    {
      chapter: 3, verse: '1.6',
      sa: 'सत्यमेव जयते नानृतं सत्येन पन्था विततो देवयानः ।\nयेनाक्रमन्त्यृषयो ह्याप्तकामा यत्र तत्सत्यस्य परमं निधानम् ॥',
      iast: 'satyam eva jayate nānṛtaṃ satyena panthā vitato deva-yānaḥ |\nyenākramanty ṛṣayo hy āpta-kāmā yatra tat satyasya paramaṃ nidhānam ||',
      en: 'Truth alone conquers, not falsehood. By truth the path of the gods is spread out, by which the seers, their desires fulfilled, ascend to where the highest treasure of truth is.',
      hi: 'सत्य की ही विजय होती है, असत्य की नहीं। सत्य से देवयान मार्ग फैला हुआ है, जिससे ऋषि, जिनकी कामनाएँ पूर्ण हो चुकी हैं, वहाँ पहुँचते हैं जहाँ सत्य का परम निधान है।',
      mr: 'सत्याचाच विजय होतो, असत्याचा नाही. सत्याने देवयान मार्ग पसरलेला आहे, ज्यातून ऋषी, ज्यांच्या कामना पूर्ण झाल्या आहेत, जिथे सत्याचे परम निधान आहे तिथे पोहोचतात.',
    },
  ],
  commentaries: [
    { chapter: 3, verse: '1.6', tradition: 'Mimamsa', author: 'Mīmāṃsā tradition', title: 'Truth as Vedic speech', body: 'Mīmāṃsā reads "truth" as the Veda’s own self-validating speech (śabda), the eternal word whose authority is not derived from any person. This verse became the national motto of India in its Pali form.', note: 'Editorial summary.' },
    { chapter: 3, verse: '1.6', tradition: 'Vishishtadvaita', author: 'Rāmānuja tradition', title: 'Truth as the Lord’s reality', body: 'For Viśiṣṭādvaita the verse is a proof of the reality and non-deceiving character of Brahman; the path of the gods is the arcirādimārga by which released souls ascend to the Lord’s abode.', note: 'Editorial summary.' },
  ],
};

const kena: TextSeed = {
  workSlug: 'kena-upanishad',
  chapters: [{ number: 1, title_sa: 'प्रथमखण्डः', title: 'Khaṇḍa 1', title_en: 'By Whom?', summary: 'The opening enquiry into the power behind mind, breath and senses — the source the sages name as Brahman.' }],
  verses: [
    {
      chapter: 1, verse: '1',
      sa: 'केन ईषितं पतति प्रेषितं मनः\nकेन प्राणः प्रथमः प्रैति युक्तः ।\nकेनेषितां वाचमिमां वदन्ति\nचक्षुः श्रोत्रं क उ देवो युनक्ति ॥',
      iast: 'kena iṣitaṃ patati preṣitaṃ manaḥ\nkena prāṇaḥ prathamaḥ praiti yuktaḥ |\nkeneṣitāṃ vācam imāṃ vadanti\ncakṣuḥ śrotraṃ ka u devo yunakti ||',
      en: 'Directed by whom does the mind fall upon its objects? Impelled by whom does the first breath move? By whom is this speech set going? What god employs the eye and the ear?',
      hi: 'किसके द्वारा प्रेरित होकर मन अपने विषयों में गिरता है? किसके द्वारा नियुक्त प्राण पहले गति करता है? किसके द्वारा प्रेरित होकर लोग यह वाणी बोलते हैं? कौन देवता चक्षु और श्रोत्र को प्रेरित करता है?',
      mr: 'कोणाच्या प्रेरणेने मन आपल्या विषयांकडे जाते? कोणाच्या नियोजनाने प्राण प्रथम गती करतो? कोणाच्या प्रेरणेने लोक ही वाणी बोलतात? कोणता देव चक्षु व श्रोत्र प्रेरित करतो?',
    },
  ],
};

const chandogya: TextSeed = {
  workSlug: 'chandogya-upanishad',
  chapters: [{ number: 6, title_sa: 'षष्ठः प्रपाठकः', title: 'Prapāṭhaka 6', title_en: 'That Thou Art', summary: 'Uddālaka Āruṇi teaches his son Śvetaketu the identity of the finest essence of being with the self: tat tvam asi.' }],
  verses: [
    {
      chapter: 6, verse: '8.7',
      sa: 'स य एषोऽणिमैतदात्म्यमिदꣳ सर्वं तत्सत्यं स आत्मा तत्त्वमसि श्वेतकेतो इति ।\nभूय एव मा भगवान् विज्ञापयत्विति ।\nतथा सोम्येति होवाच ॥',
      iast: 'sa ya eṣo ’ṇimaitad-ātmyam idaṃ sarvaṃ tat satyaṃ sa ātmā tat tvam asi śvetaketo iti |\nbhūya eva mā bhagavān vijñāpayatv iti |\ntathā somyeti hovāca ||',
      en: '"That which is the finest essence — this whole world has that as its self. That is the real. That is the Self. That thou art, O Śvetaketu." — "Venerable sir, may you instruct me further." — "So be it, dear one," he said.',
      hi: '"जो यह सूक्ष्म सार है, इस सम्पूर्ण जगत् का आत्मभाव उसी में है। वही सत्य है, वही आत्मा है। हे श्वेतकेतो! वह तुम हो।" — "भगवन्! मुझे और विज्ञापित कीजिए।" — "ऐसा ही हो, सौम्य," उन्होंने कहा।',
      mr: '"जे हे सूक्ष्म सार आहे, या संपूर्ण जगाचे आत्मभाव त्यातच आहे. तेच सत्य आहे, तेच आत्मा आहे. हे श्वेतकेतो! तू तेच आहेस." — "भगवंता! मला आणखी सांगा." — "तसेच होईल, सौम्या," ते म्हणाले.',
      words: [
        { sa: 'यः एषः अणिमा', iast: 'ya eṣa aṇimā', en: 'this finest essence', hi: 'यह सूक्ष्म सार' },
        { sa: 'एतत् आत्म्यम्', iast: 'etad-ātmyam', en: 'having this as its self', hi: 'यही आत्मभाव' },
        { sa: 'तत् सत्यम्', iast: 'tat satyam', en: 'that is the real', hi: 'वही सत्य है' },
        { sa: 'सः आत्मा', iast: 'sa ātmā', en: 'that is the Self', hi: 'वही आत्मा है' },
        { sa: 'तत् त्वम् असि', iast: 'tat tvam asi', en: 'that thou art', hi: 'वह तुम हो' },
      ],
    },
  ],
  commentaries: [
    { chapter: 6, verse: '8.7', tradition: 'Advaita', author: 'Advaita tradition', title: 'The mahāvākya of identity', body: 'Advaita takes "tat tvam asi" in its primary (mukhyārtha) sense: the inner self of the hearer and the Being of the universe are one without difference. The apparent obstacles are removed by the other mahāvākyas and by the analysis of the sheaths.', note: 'Editorial summary.' },
    { chapter: 6, verse: '8.7', tradition: 'Vishishtadvaita', author: 'Rāmānuja tradition', title: 'Identity of the embodied and the Lord', body: 'Viśiṣṭādvaita reads the sentence in its qualified sense: the self is "that" in the sense of being the body, mode and servant of Brahman. Identity of substance is rejected; inseparability is affirmed, and the jīva remains distinct and real.', note: 'Editorial summary.' },
    { chapter: 6, verse: '8.7', tradition: 'Dvaita', author: 'Madhva tradition', title: 'Difference in the mahāvākya', body: 'Dvaita denies that the sentence teaches identity of substance; the self is the Lord’s own dependent image (pratibimba), so "that thou art" affirms similarity and total dependence rather than oneness.', note: 'Editorial summary.' },
  ],
};

const brihadaranyaka: TextSeed = {
  workSlug: 'brihadaranyaka-upanishad',
  chapters: [{ number: 1, title_sa: 'प्रथमाध्यायः', title: 'Adhyāya 1', title_en: 'The Self as Brahman', summary: 'The Self is known in the analysis of creation and in Yājñavalkya’s great declarations "aham brahmāsmi" and "neti neti".' }],
  verses: [
    {
      chapter: 1, verse: '4.10',
      sa: 'ब्रह्म वा इदमग्र आसीत् । तदात्मानमेवावेत् ।\nसोऽहमस्मीति । तस्मात्तत्सर्वमभवत् ।\nतद्यो यो देवानां प्रत्यबुध्यत स एव तदभवत् ॥',
      iast: 'brahma vā idam agra āsīt | tad ātmānam evāvet |\nso ’ham asmīti | tasmāt tat sarvam abhavat |\ntad yo yo devānāṃ pratyabudhyata sa eva tad abhavat ||',
      en: 'Brahman indeed was this in the beginning; it knew itself: "I am Brahman." Therefore it became all. And whoever among the gods awakened to this became that.',
      hi: 'पहले यह ब्रह्म ही था। उसने स्वयं को जाना — "मैं ब्रह्म हूँ।" इसलिए वह सब कुछ हो गया। देवताओं में जिसने यह जाना, वह भी वही हो गया।',
      mr: 'पूर्वी हे ब्रह्मच होते. त्याने स्वतःला जाणले — "मी ब्रह्म आहे." म्हणून ते सर्व झाले. देवांमध्ये ज्याने हे जाणले, तोही तेच झाला.',
      words: [
        { sa: 'ब्रह्म', iast: 'brahma', en: 'Brahman', hi: 'ब्रह्म' },
        { sa: 'अग्रे', iast: 'agre', en: 'in the beginning', hi: 'पहले' },
        { sa: 'आत्मानम्', iast: 'ātmānam', en: 'itself', hi: 'स्वयं को' },
        { sa: 'अवेत्', iast: 'avet', en: 'knew', hi: 'जाना' },
        { sa: 'अहम् ब्रह्म अस्मि', iast: 'aham brahma asmi', en: 'I am Brahman', hi: 'मैं ब्रह्म हूँ' },
      ],
    },
    {
      chapter: 1, verse: '4.5',
      sa: 'तदेतद्ब्रह्मापूर्वमनपरमनन्तरमबाह्यम् ।\nअयमात्मा ब्रह्म सर्वानुभूः ।\nइति वेद । तस्माद्वेदैव बभूव ॥',
      iast: 'tad etad brahmāpūrvam anaparam anantaram abāhyam |\nayam ātmā brahma sarvānubhūḥ |\niti veda | tasmād vedaiva babhūva ||',
      en: 'This Brahman is without anything before it, without anything after it, without anything within it, without anything outside it. This Self is Brahman, the all-experiencing. Knowing this, one became the Veda itself.',
      hi: 'यह ब्रह्म न पूर्व है, न पर, न भीतर, न बाहर। यह आत्मा ही सर्वानुभूति ब्रह्म है — ऐसा जो जानता है, वही वेद हो जाता है।',
      mr: 'हे ब्रह्म न पूर्व आहे, न पर, न आत, न बाहेर. हा आत्माच सर्वानुभवी ब्रह्म आहे — हे जो जाणतो, तोच वेद होतो.',
    },
    {
      chapter: 1, verse: '4.7',
      sa: 'स वा एष आत्मा विज्ञानमयः प्राणेष्वन्तर्यामी ।\nअथ यः सर्वज्ञः सर्वेश्वरः सुप्रतिष्ठितः ।\nसर्वं तं प्रतिजानाति यो वेद स वेद ॥',
      iast: 'sa vā eṣa ātmā vijñānamayaḥ prāṇeṣv antaryāmī |\natha yaḥ sarva-jñaḥ sarveśvaraḥ supratiṣṭhitaḥ |\nsarvaṃ taṃ pratijānāti yo veda sa veda ||',
      en: 'This Self, made of consciousness, is the inner controller within the breaths; knowing that all-knowing, all-ruling, well-established one, one knows all — that is the teaching.',
      hi: 'यह आत्मा विज्ञानमय है, प्राणों में अन्तर्यामी है; वह सर्वज्ञ, सर्वेश्वर और सुप्रतिष्ठित है। जो उसे जानता है, वह सब को जानता है।',
      mr: 'हा आत्मा विज्ञानमय आहे, प्राणांमध्ये अंतर्यामी आहे; तो सर्वज्ञ, सर्वेश्वर व सुप्रतिष्ठित आहे. जो त्याला जाणतो, तो सर्व जाणतो.',
    },
  ],
  commentaries: [
    { chapter: 1, verse: '4.10', tradition: 'Advaita', author: 'Advaita tradition', title: 'The mahāvākya aham brahmāsmi', body: 'In Advaita this mahāvākya states the identity of the inner self with Brahman: the "I" of the hearer, stripped of body, mind and ego, is the very Being by which all is. The verse also gives the principle that knowledge is self-disclosure.', note: 'Editorial summary.' },
    { chapter: 1, verse: '4.10', tradition: 'Vishishtadvaita', author: 'Rāmānuja tradition', title: 'The self as the Lord’s mode', body: 'Rāmānuja reads "I am Brahman" as the realisation that the self subsists wholly as the mode and servant of Brahman; the "I" is real, but its reality is inseparable from — and dependent on — the Lord who is its Self.', note: 'Editorial summary.' },
    { chapter: 1, verse: '4.10', tradition: 'Dvaita', author: 'Madhva tradition', title: 'Dependent selfhood', body: 'Dvaita explains the text by the principle of "so ’ham" as the self’s self-knowledge of its own nature as wholly dependent on Viṣṇu; any reading of literal identity is excluded by the Upaniṣad’s own teaching of difference.', note: 'Editorial summary.' },
    { chapter: 1, verse: '4.7', tradition: 'Shaiva', author: 'Kashmiri Śaiva tradition', title: 'Antaryāmin as Śiva', body: 'Trika authors identify the antaryāmin with Śiva as the inner subject of all experience, whose recognition (pratyabhijñā) is the goal; "made of consciousness" is read as the doctrine that consciousness alone is the substance of the world.', note: 'Editorial summary.' },
    { chapter: 1, verse: '4.7', tradition: 'Shakta', author: 'Śākta tradition', title: 'The inner controller as the Goddess', body: 'Śākta exegesis reads the antaryāmin as the Devī who dwells as kuṇḍalinī in the body; the "made of consciousness" self is the same reality worshipped as Tripurasundarī, whose awareness is the world-appearance.', note: 'Editorial summary.' },
  ],
};

/* ========================================================================
 * RIGVEDA, ATHARVAVEDA, YAJURVEDA
 * ===================================================================== */
const rigveda: TextSeed = {
  workSlug: 'rigveda',
  chapters: [
    { number: 1, title_sa: 'प्रथमं मण्डलम्', title: 'Maṇḍala 1', title_en: 'The First Maṇḍala', summary: 'Hymns chiefly to Agni and Indra, including the opening sūkta of the entire Veda.' },
    { number: 3, title_sa: 'तृतीयं मण्डलम्', title: 'Maṇḍala 3', title_en: 'The Third Maṇḍala', summary: 'The Viśvāmitra family book, containing the Gāyatrī mantra (3.62.10).' },
    { number: 10, title_sa: 'दशमं मण्डलम्', title: 'Maṇḍala 10', title_en: 'The Tenth Maṇḍala', summary: 'The latest layer, with the great cosmological sūktas: Nāsadīya, Puruṣa and Hiraṇyagarbha.' },
  ],
  verses: [
    {
      chapter: 1, verse: '1',
      sa: 'ॐ अग्निमीळे पुरोहितं यज्ञस्य देवमृत्विजम् ।\nहोतारं रत्नधातमम् ॥',
      iast: 'oṃ agnim īḷe purohitaṃ yajñasya devam ṛtvijam |\nhotāraṃ ratna-dhātamam ||',
      en: 'I praise Agni, the household priest, the god, the minister of the sacrifice, the invoker who bestows the greatest treasure.',
      hi: 'मैं अग्नि की स्तुति करता हूँ — गृहपति पुरोहित, यज्ञ के देवता, ऋत्विज्, होता, जो श्रेष्ठतम रत्न प्रदान करते हैं।',
      mr: 'मी अग्नीची स्तुती करतो — गृहपती पुरोहित, यज्ञाचा देव, ऋत्विज, होता, जो श्रेष्ठ रत्ने देतो.',
      words: [
        { sa: 'अग्निम्', iast: 'agnim', en: 'Agni (fire)', hi: 'अग्नि' },
        { sa: 'ईळे', iast: 'īḷe', en: 'I praise', hi: 'स्तुति करता हूँ' },
        { sa: 'पुरोहितम्', iast: 'purohitam', en: 'placed in front / household priest', hi: 'पुरोहित' },
        { sa: 'यज्ञस्य', iast: 'yajñasya', en: 'of the sacrifice', hi: 'यज्ञ का' },
        { sa: 'ऋत्विजम्', iast: 'ṛtvijam', en: 'the officiating priest', hi: 'ऋत्विज्' },
        { sa: 'होतारम्', iast: 'hotāram', en: 'the invoker', hi: 'होता' },
        { sa: 'रत्नधातमम्', iast: 'ratna-dhātamam', en: 'bestower of the greatest treasure', hi: 'श्रेष्ठ रत्न देने वाला' },
      ],
    },
    {
      chapter: 3, verse: '62.10',
      sa: 'तत्सवितुर्वरेण्यं भर्गो देवस्य धीमहि ।\nधियो यो नः प्रचोदयात् ॥',
      iast: 'tat savitur vareṇyaṃ bhargo devasya dhīmahi |\ndhiyo yo naḥ pracodayāt ||',
      en: 'We meditate on the excellent splendour of the Sun-god Savitṛ; may he stimulate our intellects.',
      hi: 'हम सविता देवता के उस वरेण्य तेज का ध्यान करते हैं; वे हमारी बुद्धियों को प्रेरित करें।',
      mr: 'आम्ही सवितृ देवतेच्या वरेण्य तेजाचे ध्यान करतो; ते आमच्या बुद्धींना प्रेरणा देवोत.',
      words: [
        { sa: 'तत्', iast: 'tat', en: 'that', hi: 'वह' },
        { sa: 'सवितुः', iast: 'savituḥ', en: 'of Savitṛ', hi: 'सविता का' },
        { sa: 'वरेण्यम्', iast: 'vareṇyam', en: 'most excellent, to be chosen', hi: 'वरेण्य' },
        { sa: 'भर्गः', iast: 'bhargaḥ', en: 'splendour', hi: 'तेज' },
        { sa: 'देवस्य', iast: 'devasya', en: 'of the god', hi: 'देवता का' },
        { sa: 'धीमहि', iast: 'dhīmahi', en: 'we meditate', hi: 'ध्यान करते हैं' },
        { sa: 'धियः', iast: 'dhiyaḥ', en: 'our intellects', hi: 'बुद्धियाँ' },
        { sa: 'प्रचोदयात्', iast: 'pracodayāt', en: 'may he impel', hi: 'प्रेरित करें' },
      ],
      credit: 'Mūla: Ṛgveda 3.62.10 (Gāyatrī mantra), traditional recitation text · Translation: Sanatan Library working translation (CC BY-SA 4.0)',
    },
    {
      chapter: 10, verse: '129.1',
      sa: 'नासदासीन्नो सदासीत्तदानीं नासीद्रजो नो व्योमा परो यत् ।\nकिमावरीवः कुह कस्य शर्मन्नम्भः किमासीद्गहनं गभीरम् ॥',
      iast: 'nāsad āsīn no sad āsīt tadānīṃ nāsīd rajo no vyomā paro yat |\nkim āvarīvaḥ kuha kasya śarmann ambhaḥ kim āsīd gahanaṃ gabhīram ||',
      en: 'Then there was neither non-being nor being; there was no realm of air, nor the sky beyond. What stirred, and where, and in whose shelter? Was there water, unfathomably deep?',
      hi: 'उस समय न असत् था, न सत्; न अन्तरिक्ष था, न उससे परे का आकाश। क्या हिल रहा था, कहाँ, किसके आश्रय में? क्या गहरा अगाध जल था?',
      mr: 'तेव्हा न असत् होते, न सत्; न अंतराळ होते, न त्यापलीकडचे आकाश. काय हालत होते, कुठे, कोणाच्या आश्रयात? खोल अगाध जल होते का?',
    },
  ],
  commentaries: [
    { chapter: 10, verse: '129.1', tradition: 'Advaita', author: 'Advaita tradition', title: 'Creation as apparent', body: 'Advaita cites the Nāsadīya hymn as evidence that the Upaniṣadic seers themselves set aside the question of a real beginning: the world’s appearance in Brahman is beginningless (anādi) and māyā, and the hymn’s concluding "perhaps it knows" is read as the limitation of all causal description.', note: 'Editorial summary.' },
    { chapter: 10, verse: '129.1', tradition: 'Nyaya', author: 'Nyāya tradition', title: 'Inference and the first cause', body: 'Nyāya takes the hymn as inspirational poetry rather than pramāṇa, and rests its proof of a creator on inference: the world, being an effect of a certain kind, requires an intelligent maker. The school is careful to distinguish such inferential reasoning from Vedic testimony.', note: 'Editorial summary.' },
  ],
};

const atharvaveda: TextSeed = {
  workSlug: 'atharvaveda',
  chapters: [{ number: 12, title_sa: 'द्वादशं काण्डम्', title: 'Kāṇḍa 12', title_en: 'The Earth', summary: 'The Pṛthivī Sūkta (Bhūmi Sūkta), the great hymn to the Earth as mother, healer and moral witness.' }],
  verses: [
    {
      chapter: 12, verse: '1.12',
      sa: 'माता भूमिः पुत्रोऽहं पृथिव्याः ।\nपर्जन्यः पिता स उ नः पिपर्तु ॥',
      iast: 'mātā bhūmiḥ putro ahaṃ pṛthivyāḥ |\nparjanyaḥ pitā sa u naḥ pipartu ||',
      en: 'Earth is my mother, and I am the son of Earth. Let Parjanya, the rain-giver, be my father — may he sustain us.',
      hi: 'भूमि मेरी माता है, मैं पृथिवी का पुत्र हूँ। पर्जन्य (वर्षा) मेरे पिता हैं — वे हमारी रक्षा करें।',
      mr: 'भूमी माझी माता आहे, मी पृथ्वीचा पुत्र आहे. पर्जन्य (पाऊस) माझे पिता आहेत — ते आमचे रक्षण करोत.',
      words: [
        { sa: 'माता', iast: 'mātā', en: 'mother', hi: 'माता' },
        { sa: 'भूमिः', iast: 'bhūmiḥ', en: 'the earth', hi: 'भूमि' },
        { sa: 'पुत्रः अहम्', iast: 'putro aham', en: 'I am the son', hi: 'मैं पुत्र हूँ' },
        { sa: 'पृथिव्याः', iast: 'pṛthivyāḥ', en: 'of the Earth', hi: 'पृथिवी का' },
        { sa: 'पर्जन्यः पिता', iast: 'parjanyaḥ pitā', en: 'Parjanya is the father', hi: 'पर्जन्य पिता' },
      ],
    },
  ],
  commentaries: [
    { chapter: 12, verse: '1.12', tradition: 'Vedic', author: 'Editorial', title: 'The Earth as mother: an ecological reading', body: 'The Bhūmi Sūkta is the earliest Indian statement of an ethic of the Earth as a living mother to be protected, not merely owned. Modern Indian environmental thought (including the Chipko and later ecological movements) draws directly on this hymn.', note: 'Editorial summary.' },
  ],
};

const yajurveda: TextSeed = {
  workSlug: 'yajurveda-krishna',
  chapters: [{ number: 4, title_sa: 'चतुर्थः काण्डः', title: 'Kāṇḍa 4', title_en: 'The Rudra Hymns', summary: 'Taittirīya Saṃhitā 4.5 and 4.7, the Rudram recited as Śrī Rudram — the Namakam and Camakam of daily Śaiva worship.' }],
  verses: [
    {
      chapter: 4, verse: '5.1',
      sa: 'ॐ नमः शम्भवे च मयोभवे च ।\nनमः शङ्कराय च मयस्कराय च ।\nनमः शिवाय च शिवतराय च ॥',
      iast: 'oṃ namaḥ śambhave ca mayobhave ca |\nnamaḥ śaṅkarāya ca mayaskarāya ca |\nnamaḥ śivāya ca śivatarāya ca ||',
      en: 'Om. Salutations to the Beneficent One and to the Joy-bestowing One; salutations to the Giver of Auspiciousness and to the Cause of Happiness; salutations to Śiva and to the Utterly Peaceful One.',
      hi: 'ॐ। शम्भु को नमस्कार और मयोभु को नमस्कार; शङ्कर को और मयस्कर को नमस्कार; शिव को और शिवतर को नमस्कार।',
      mr: 'ॐ. शंभूला नमस्कार आणि मयोभूला नमस्कार; शंकराला व मयस्कराला नमस्कार; शिवाला व शिवतराला नमस्कार.',
    },
  ],
};

/* ========================================================================
 * YOGA SŪTRAS
 * ===================================================================== */
const yogaSutras: TextSeed = {
  workSlug: 'yoga-sutras',
  chapters: [
    { number: 1, title_sa: 'समाधिपादः', title: 'Samādhi Pāda', title_en: 'On Absorption', summary: 'The definition of yoga, the fluctuations of the mind, and the discipline of practice and dispassion that stills them.' },
    { number: 2, title_sa: 'साधनपादः', title: 'Sādhana Pāda', title_en: 'On Practice', summary: 'The kleśas, the eight limbs, and the first two limbs: the yamas and niyamas.' },
    { number: 3, title_sa: 'विभूतिपादः', title: 'Vibhūti Pāda', title_en: 'On Powers', summary: 'Dhāraṇā, dhyāna and samādhi as saṃyama, with the siddhis and their proper use.' },
  ],
  verses: [
    { chapter: 1, verse: '1.1', sa: 'अथ योगानुशासनम् ॥', iast: 'atha yogānuśāsanam ||', en: 'Now, the authoritative teaching of yoga.', hi: 'अब योग का अनुशासन (उपदेश)।', mr: 'आता योगाचे अनुशासन.', credit: CREDIT },
    {
      chapter: 1, verse: '1.2', sa: 'योगश्चित्तवृत्तिनिरोधः ॥', iast: 'yogaś citta-vṛtti-nirodhaḥ ||',
      en: 'Yoga is the stilling of the fluctuations of the mind-stuff.', hi: 'योग चित्त की वृत्तियों का निरोध है।', mr: 'योग म्हणजे चित्तवृत्तींचा निरोध.',
      words: [
        { sa: 'योगः', iast: 'yogaḥ', en: 'yoga', hi: 'योग' },
        { sa: 'चित्तवृत्ति', iast: 'citta-vṛtti', en: 'the fluctuations of the mind-stuff', hi: 'चित्त की वृत्तियाँ' },
        { sa: 'निरोधः', iast: 'nirodhaḥ', en: 'restraint / stilling', hi: 'निरोध' },
      ],
    },
    { chapter: 1, verse: '1.3', sa: 'तदा द्रष्टुः स्वरूपेऽवस्थानम् ॥', iast: 'tadā draṣṭuḥ svarūpe ’vasthānam ||', en: 'Then the seer abides in its own nature.', hi: 'तब द्रष्टा अपने स्वरूप में स्थित हो जाता है।', mr: 'तेव्हा द्रष्टा स्वतःच्या स्वरूपात स्थिर होतो.' },
    { chapter: 1, verse: '1.4', sa: 'वृत्तिसारूप्यमितरत्र ॥', iast: 'vṛtti-sārūpyam itaratra ||', en: 'Otherwise, it identifies with the fluctuations.', hi: 'अन्यथा वह वृत्तियों के स्वरूप को प्राप्त हो जाता है।', mr: 'अन्यथा तो वृत्तींच्या स्वरूपाला जातो.' },
    { chapter: 1, verse: '1.12', sa: 'अभ्यासवैराग्याभ्यां तन्निरोधः ॥', iast: 'abhyāsa-vairāgyābhyāṃ tan-nirodhaḥ ||', en: 'Their stilling comes through practice and dispassion.', hi: 'अभ्यास और वैराग्य से उनका निरोध होता है।', mr: 'अभ्यास व वैराग्याने त्यांचा निरोध होतो.' },
    { chapter: 1, verse: '1.33', sa: 'मैत्रीकरुणामुदितोपेक्षाणां सुखदुःखपुण्यापुण्यविषयाणां भावनातश्चित्तप्रसादनम् ॥', iast: 'maitrī-karuṇā-muditopekṣāṇāṃ sukha-duḥkha-puṇyāpuṇya-viṣayāṇāṃ bhāvanātaś citta-prasādanam ||', en: 'The mind becomes serene by cultivating friendliness, compassion, gladness and equanimity towards beings who are happy, suffering, virtuous and otherwise.', hi: 'सुखी, दुःखी, पुण्यवान और पापी प्राणियों के प्रति मैत्री, करुणा, मुदिता और उपेक्षा का भावना करने से चित्त प्रसन्न होता है।', mr: 'सुखी, दुःखी, पुण्यवान व पापी प्राण्यांविषयी मैत्री, करुणा, मुदिता व उपेक्षा भावन केल्याने चित्त प्रसन्न होते.' },
    { chapter: 2, verse: '2.29', sa: 'यमनियमासनप्राणायामप्रत्याहारधारणाध्यानसमाधयोऽष्टाङ्गानि ॥', iast: 'yama-niyama-āsana-prāṇāyāma-pratyāhāra-dhāraṇā-dhyāna-samādhayo ’ṣṭāṅgāni ||', en: 'The eight limbs are: the restraints, the observances, posture, breath-control, withdrawal of the senses, concentration, meditation and absorption.', hi: 'यम, नियम, आसन, प्राणायाम, प्रत्याहार, धारणा, ध्यान और समाधि — ये आठ अंग हैं।', mr: 'यम, नियम, आसन, प्राणायाम, प्रत्याहार, धारणा, ध्यान व समाधी — हे आठ अंग आहेत.' },
    { chapter: 2, verse: '2.46', sa: 'स्थिरसुखमासनम् ॥', iast: 'sthira-sukham āsanam ||', en: 'Posture is that which is steady and comfortable.', hi: 'स्थिर और सुखकारक स्थिति आसन है।', mr: 'स्थिर व सुखकारक स्थिती आसन आहे.' },
    { chapter: 2, verse: '2.47', sa: 'प्रयत्नशैथिल्यानन्तसमापत्तिभ्याम् ॥', iast: 'prayatna-śaithilyānanta-samāpattibhyām ||', en: 'By relaxing effort and by absorption in the infinite, (posture is mastered).', hi: 'प्रयत्न की शिथिलता और अनन्त में समापत्ति से (आसन सिद्ध होता है)।', mr: 'प्रयत्नाच्या शैथिल्याने व अनंतात समापत्तीने (आसन सिद्ध होते).' },
    { chapter: 3, verse: '3.1', sa: 'देशबन्धश्चित्तस्य धारणा ॥', iast: 'deśa-bandhaś cittasya dhāraṇā ||', en: 'Dhāraṇā is the binding of the mind to one place.', hi: 'चित्त को एक देश में बाँधना धारणा है।', mr: 'चित्ताला एकाच ठिकाणी बांधणे म्हणजे धारणा.' },
    { chapter: 3, verse: '3.2', sa: 'तत्र प्रत्ययैकतानता ध्यानम् ॥', iast: 'tatra pratyayaikatānatā dhyānam ||', en: 'Dhyāna is the continuous flow of awareness there.', hi: 'वहाँ प्रत्यय की एकतानता ध्यान है।', mr: 'तिथे प्रत्ययाची एकतानता म्हणजे ध्यान.' },
    { chapter: 3, verse: '3.3', sa: 'तदेवार्थमात्रनिर्भासं स्वरूपशून्यमिव समाधिः ॥', iast: 'tad evārtha-mātra-nirbhāsaṃ svarūpa-śūnyam iva samādhiḥ ||', en: 'That same (dhyāna), when only the object shines forth and the mind is as if empty of itself, is samādhi.', hi: 'वही जब केवल अर्थमात्र प्रकाशित हो और स्वरूप से शून्य जैसा हो जाए, वह समाधि है।', mr: 'तेच जेव्हा केवळ अर्थमात्र प्रकाशित होते व स्वरूपाने शून्यासारखे होते, ते समाधी.' },
  ],
  commentaries: [
    { chapter: 1, verse: '1.2', tradition: 'Yoga', author: 'Vyāsa (Yoga Bhāṣya)', title: 'The five fluctuations', body: 'The Yoga Bhāṣya enumerates five vṛttis — valid knowledge, error, conceptual construction, sleep and memory — and explains nirodha as the cessation of their operation, not the destruction of consciousness itself.', note: 'Editorial summary of the classical commentary’s content.' },
    { chapter: 1, verse: '1.2', tradition: 'Advaita', author: 'Vācaspati Miśra (Tattvavaiśāradī)', title: 'Advaita harmonisation', body: 'Vācaspati argues that the Yoga account of citta is compatible with Advaita if citta is understood as the internal organ (antaḥkaraṇa) whose stillness reveals the unchanging witness, and defends this reading against the objection that Yoga posits an independent puruṣa.', note: 'Editorial summary.' },
    { chapter: 2, verse: '2.46', tradition: 'Hatha Yoga', author: 'Haṭha tradition', title: 'Āsana in Haṭha practice', body: 'Haṭha texts take this sūtra as the standard of a perfected āsana: the eighty-four postures of the Haṭha corpus are held to satisfy "steady and comfortable", and mastery is confirmed by the ability to sit long without disturbance.', note: 'Editorial summary.' },
  ],
};

/* ========================================================================
 * BRAHMA SŪTRAS
 * ===================================================================== */
const brahmaSutras: TextSeed = {
  workSlug: 'brahma-sutras',
  chapters: [{ number: 1, title_sa: 'प्रथमाध्यायः — समन्वयः', title: 'Adhyāya 1 — Samanvaya', title_en: 'Harmony of the Texts', summary: 'The enquiry into Brahman, its definition as the origin of the world, and the demonstration that all Upaniṣadic texts agree on Brahman.' }],
  verses: [
    { chapter: 1, verse: '1.1.1', sa: 'अथातो ब्रह्मजिज्ञासा ॥', iast: 'athāto brahma-jijñāsā ||', en: 'Now, therefore, the enquiry into Brahman.', hi: 'अब इसके बाद ब्रह्म की जिज्ञासा।', mr: 'आता यानंतर ब्रह्माची जिज्ञासा.' },
    {
      chapter: 1, verse: '1.1.2', sa: 'जन्माद्यस्य यतः ॥', iast: 'janmādy asya yataḥ ||',
      en: '(Brahman is that) from which proceeds the origin and so on of this (world).', hi: '(ब्रह्म वह है) जिससे इस जगत् की उत्पत्ति आदि होती है।', mr: '(ब्रह्म ते आहे) ज्यापासून या जगाची उत्पत्ती इत्यादी होते.',
      words: [
        { sa: 'जन्म', iast: 'janma', en: 'birth / origin', hi: 'उत्पत्ति' },
        { sa: 'आदि', iast: 'ādi', en: 'and so on (sustenance, dissolution)', hi: 'आदि (स्थिति, संहार)' },
        { sa: 'अस्य', iast: 'asya', en: 'of this (world)', hi: 'इस (जगत्) का' },
        { sa: 'यतः', iast: 'yataḥ', en: 'from which', hi: 'जिससे' },
      ],
    },
    { chapter: 1, verse: '1.1.3', sa: 'शास्त्रयोनित्वात् ॥', iast: 'śāstra-yonitvāt ||', en: '(And) because scripture is its source.', hi: '(और) क्योंकि शास्त्र उसका स्रोत है।', mr: '(आणि) कारण शास्त्र त्याचा स्रोत आहे.' },
    { chapter: 1, verse: '1.1.4', sa: 'तत्तु समन्वयात् ॥', iast: 'tat tu samanvayāt ||', en: 'But that (Brahman is the meaning) because of the harmony (of all scriptural texts).', hi: 'वह ब्रह्म ही (अर्थ है) क्योंकि सब शास्त्रों का उसी में समन्वय है।', mr: 'ते ब्रह्मच (अर्थ आहे) कारण सर्व शास्त्रांचा त्यातच समन्वय आहे.' },
  ],
  commentaries: [
    { chapter: 1, verse: '1.1.2', tradition: 'Advaita', author: 'Śaṅkara', title: 'Brahman as cause by its own nature', body: 'Śaṅkara argues that "that from which the origin of this world" points to an intelligent cause that is absolutely one; because the effect cannot be absolutely different from the cause in reality, the world is an appearance (vivarta) and Brahman is non-different from the Self.', note: 'Editorial summary of Śāṅkara’s position.' },
    { chapter: 1, verse: '1.1.2', tradition: 'Vishishtadvaita', author: 'Rāmānuja', title: 'Brahman as cause with the world as its body', body: 'Rāmānuja reads the sūtra as establishing the Lord as the efficient and material cause whose body is the world of souls and matter. Transformation (pariṇāma) is real, and the world is the Lord’s mode, not an illusion.', note: 'Editorial summary of Rāmānuja’s position.' },
    { chapter: 1, verse: '1.1.2', tradition: 'Dvaita', author: 'Madhva', title: 'The world as the Lord’s real effect', body: 'Madhva takes the sūtra to establish Viṣṇu as the sole independent cause from whom the world is produced as a really distinct effect; the world’s difference from God is essential and eternal, and the sūtra’s testimony is read with the bheda texts of the Upaniṣads.', note: 'Editorial summary of Madhva’s position.' },
    { chapter: 1, verse: '1.1.1', tradition: 'Mimamsa', author: 'Mīmāṃsā (pūrva-pakṣa)', title: 'Why an enquiry into Brahman?', body: 'The Mīmāṃsaka objects that dharma, and not Brahman, is the subject of Vedic enquiry, since the Veda’s primary force is injunctive. Vedānta replies that the Upaniṣads, which are the final portion of the Veda, teach Brahman as an accomplished fact (siddhavastu) rather than as an injunction.', note: 'Editorial summary of the classical debate.' },
  ],
};

/* ========================================================================
 * RĀMĀYAṆA — demonstration excerpt
 * ===================================================================== */
const ramayana: TextSeed = {
  workSlug: 'ramayana',
  chapters: [
    { number: 1, title_sa: 'बालकाण्डम्', title: 'Bāla Kāṇḍa', title_en: 'The Book of Childhood', summary: 'Vālmīki’s enquiry of Nāradā, the composition of the first verse, and the birth and boyhood of Rāma.' },
    { number: 1, title_sa: 'क्रौञ्चवधः', title: 'The Krauñca Episode', title_en: 'The First Śloka', summary: 'Moved to grief by the killing of a krauñca bird, Vālmīki’s grief becomes verse — the traditional origin of the śloka metre.' },
  ],
  verses: [
    {
      chapter: 1, verse: '1.1',
      sa: 'तपःस्वाध्यायनिरतं तपस्वी वाग्विदां वरम् ।\nनारदं परिपप्रच्छ वाल्मीकिर्मुनिपुङ्गवम् ॥',
      iast: 'tapaḥ-svādhyāya-nirataṃ tapasvī vāg-vidāṃ varam |\nnāradaṃ paripapraccha vālmīkir muni-puṅgavam ||',
      en: 'The ascetic Vālmīki asked Nārada — engaged in austerity and recitation, the best of the eloquent and the chief of sages.',
      hi: 'तप और स्वाध्याय में लगे, वाणी के ज्ञाताओं में श्रेष्ठ, मुनियों में प्रधान नारद से तपस्वी वाल्मीकि ने पूछा।',
      mr: 'तप व स्वाध्यायात तत्पर, वाणीच्या जाणकारांत श्रेष्ठ, मुनींमध्ये प्रमुख नारदांना तपस्वी वाल्मीकींनी विचारले.',
      words: [
        { sa: 'तपःस्वाध्यायनिरतम्', iast: 'tapaḥ-svādhyāya-niratam', en: 'devoted to austerity and recitation', hi: 'तप एवं स्वाध्याय में तत्पर' },
        { sa: 'तपस्वी', iast: 'tapasvī', en: 'the ascetic', hi: 'तपस्वी' },
        { sa: 'वाग्विदाम् वरम्', iast: 'vāg-vidāṃ varam', en: 'best among the eloquent', hi: 'वाणी के ज्ञाताओं में श्रेष्ठ' },
        { sa: 'नारदम्', iast: 'nāradam', en: 'Nārada', hi: 'नारद' },
        { sa: 'परिपप्रच्छ', iast: 'paripapraccha', en: 'asked', hi: 'पूछा' },
      ],
    },
    {
      chapter: 1, verse: '2.14',
      sa: 'मा निषाद प्रतिष्ठां त्वमगमः शाश्वतीः समाः ।\nयत्क्रौञ्चमिथुनादेकमवधीः काममोहितम् ॥',
      iast: 'mā niṣāda pratiṣṭhāṃ tvam agamaḥ śāśvatīḥ samāḥ |\nyat krauñca-mithunād ekam avadhīḥ kāma-mohitam ||',
      en: 'O hunter, may you never find rest for endless years, since you killed one of this pair of krauñca birds while it was lost in love.',
      hi: 'हे निषाद! तू अनन्त वर्षों तक प्रतिष्ठा न पाए, क्योंकि तूने काममोहित क्रौञ्च-मिथुन में से एक को मार डाला।',
      mr: 'हे निषादा! तू अनंत वर्षे प्रतिष्ठा मिळू नये, कारण तू काममोहित क्रौंच-मिथुनातील एकाला मारले.',
      credit: 'Mūla: Vālmīki Rāmāyaṇa 1.2.14 (traditional recitation text) · Translation: Sanatan Library working translation (CC BY-SA 4.0)',
    },
  ],
};

/* ========================================================================
 * BHĀGAVATA
 * ===================================================================== */
const bhagavata: TextSeed = {
  workSlug: 'bhagavata-purana',
  chapters: [
    { number: 1, title_sa: 'प्रथमः स्कन्धः', title: 'Skandha 1', title_en: 'The Opening', summary: 'The sages of Naimiṣa ask Sūta to narrate the Bhāgavata; the mangala verse states the nature of the supreme reality.' },
    { number: 1, title_sa: 'द्वितीयोऽध्यायः', title: 'Skandha 1, Ch. 2', title_en: 'The Highest Dharma', summary: 'Bhakti as the supreme dharma, defined as unbroken love for the Lord, and the stages of devotional life.' },
  ],
  verses: [
    {
      chapter: 1, verse: '1.1.1',
      sa: 'जन्माद्यस्य यतोऽन्वयादितरतश्चार्थेष्वभिज्ञः स्वराट् ।\nतेने ब्रह्म हृदा य आदिकवये मुह्यन्ति यत्सूरयः ॥',
      iast: 'janmādy asya yato ’nvayād itarataś cārtheṣv abhijñaḥ svarāṭ |\ntene brahma hṛdā ya ādi-kavaye muhyanti yat sūrayaḥ ||',
      en: 'I meditate on the Supreme from whom this world proceeds, in whom it abides and into whom it dissolves, who is fully aware of all things and self-luminous, who revealed the Veda in the heart of the first poet, and at whom even the wise are bewildered.',
      hi: 'उस परमेश्वर का ध्यान करता हूँ जिससे यह जगत् उत्पन्न होता है, जिसमें स्थित रहता है और जिसमें लीन होता है; जो सर्वार्थ में ज्ञाता और स्वराट् है; जिसने आदिकवि के हृदय में वेद का प्रकाश किया, और जिसके विषय में बड़े-बड़े सूरि भी मोहित हो जाते हैं।',
      mr: 'ज्यापासून हे जग उत्पन्न होते, ज्यात ते टिकते व ज्यात विलीन होते, तो सर्वज्ञ व स्वयंप्रकाश परमेश्वर मी ध्यानात धरतो; ज्याने आदिकवीच्या हृदयी वेद प्रकट केला आणि ज्याविषयी मोठे सूरही मोहित होतात.',
      words: [
        { sa: 'जन्म आदि', iast: 'janma ādi', en: 'origin and so on', hi: 'उत्पत्ति आदि' },
        { sa: 'अस्य', iast: 'asya', en: 'of this world', hi: 'इस जगत् का' },
        { sa: 'यतः', iast: 'yataḥ', en: 'from whom', hi: 'जिससे' },
        { sa: 'अन्वयात्', iast: 'anvayāt', en: 'by pervasion (in the state of subsistence)', hi: 'अन्वय (स्थिति) से' },
        { sa: 'इतरतः', iast: 'itarataḥ', en: 'and by the reverse (dissolution)', hi: 'और व्यतिरेक (लय) से' },
        { sa: 'स्वराट्', iast: 'svarāṭ', en: 'self-luminous / independently free', hi: 'स्वराट्' },
        { sa: 'आदिकवये', iast: 'ādi-kavaye', en: 'to the first poet (Brahmā)', hi: 'आदिकवि को' },
      ],
    },
    {
      chapter: 1, verse: '1.2.6',
      sa: 'स वै पुंसां परो धर्मो यतो भक्तिरधोक्षजे ।\nअहैतुक्यप्रतिहता ययात्मा सुप्रसीदति ॥',
      iast: 'sa vai puṃsāṃ paro dharmo yato bhaktir adhokṣaje |\nahaituky apratihata yayātmā suprasīdati ||',
      en: 'The highest dharma of human beings is that from which unbroken, unmotivated devotion to the transcendental Lord arises, by which the self becomes fully satisfied.',
      hi: 'मनुष्यों का परम धर्म वह है जिससे अधोक्षज (भगवान्) में अहेतुकी और अप्रतिहत भक्ति उत्पन्न होती है, जिससे आत्मा पूर्ण प्रसन्न होता है।',
      mr: 'माणसांचा परम धर्म तो आहे ज्यापासून अधोक्षजात निष्कारण व अप्रतिहत भक्ती उत्पन्न होते, ज्याने आत्मा पूर्ण प्रसन्न होतो.',
    },
  ],
  commentaries: [
    { chapter: 1, verse: '1.2.6', tradition: 'Vishishtadvaita', author: 'Śrīdhara Svāmī tradition', title: 'Bhakti as the supreme dharma', body: 'Śrīdharasvāmin reads the verse as the Bhāgavata’s own synthesis: bhakti is "without motive" because it does not seek reward, and "unobstructed" because nothing else is needed. The verse is quoted widely to justify devotion as an end in itself.', note: 'Editorial summary.' },
    { chapter: 1, verse: '1.2.6', tradition: 'Shakta', author: 'Śākta Vaiṣṇava tradition', title: 'Bhakti and Śakti', body: 'In traditions that identify Rādhā and Kṛṣṇa with the Goddess and the Lord, this bhakti is understood as the working of hlādinī śakti, the power of delight itself, and the verse is read in the light of the Rāsa Pañcādhyāya.', note: 'Editorial summary.' },
  ],
};

/* ========================================================================
 * DEVĪ MĀHĀTMYA
 * ===================================================================== */
const deviMahatmya: TextSeed = {
  workSlug: 'devi-mahatmya',
  chapters: [{ number: 11, title_sa: 'एकादशोऽध्यायः', title: 'Adhyāya 11', title_en: 'The Hymn to the Goddess', summary: 'The universal hymn (Nārāyaṇī Stuti) identifying the Goddess with every power that indwells the world.' }],
  verses: [
    {
      chapter: 11, verse: '4',
      sa: 'या देवी सर्वभूतेषु विष्णुमायेति शब्दिता ।\nनमस्तस्यै नमस्तस्यै नमस्तस्यै नमो नमः ॥',
      iast: 'yā devī sarva-bhūteṣu viṣṇu-māyeti śabditā |\nnamas tasyai namas tasyai namas tasyai namo namaḥ ||',
      en: 'To the Goddess who dwells in all beings and is spoken of as the Māyā of Viṣṇu — salutations to her, salutations to her, salutations, salutations to her.',
      hi: 'जो देवी सब प्राणियों में विष्णुमाया कही गई है, उस देवी को नमस्कार, नमस्कार, बारम्बार नमस्कार।',
      mr: 'जी देवी सर्व प्राण्यांमध्ये विष्णुमाया म्हटली जाते, तिला नमस्कार, नमस्कार, पुन्हा नमस्कार.',
      words: [
        { sa: 'या देवी', iast: 'yā devī', en: 'the Goddess who', hi: 'जो देवी' },
        { sa: 'सर्वभूतेषु', iast: 'sarva-bhūteṣu', en: 'in all beings', hi: 'सब प्राणियों में' },
        { sa: 'विष्णुमाया', iast: 'viṣṇu-māyā', en: 'the Māyā (creative power) of Viṣṇu', hi: 'विष्णु माया' },
        { sa: 'इति शब्दिता', iast: 'iti śabditā', en: 'thus spoken of', hi: 'इस प्रकार कही गई' },
        { sa: 'नमः तस्यै', iast: 'namas tasyai', en: 'salutations to her', hi: 'उसे नमस्कार' },
      ],
    },
  ],
  commentaries: [
    { chapter: 11, verse: '4', tradition: 'Shakta', author: 'Śākta tradition', title: 'The Goddess in all beings', body: 'The Nārāyaṇī Stuti is structured as a repeated formula: the same refrain names the Goddess in every domain of being. Śākta liturgy therefore treats this hymn as a complete meditation on non-duality, where the immanence of Devī leaves no being outside her.', note: 'Editorial summary.' },
    { chapter: 11, verse: '4', tradition: 'Advaita', author: 'Advaita tradition', title: 'Māyā and the Goddess', body: 'Advaita commentaries identify the Goddess of the Devī Māhātmya with māyā — the beginningless power by which the one Brahman appears as the many. Worship of her is not worship of a rival to Brahman but of Brahman’s own creative power.', note: 'Editorial summary.' },
  ],
};

/* ========================================================================
 * SAUNDARYALAHARĪ, RAGHUVAṂŚA, MEIGHADŪTA, PAÑCATANTRA, HANUMĀN CĀLĪSĀ,
 * TIRUKKUṞAḶ
 * ===================================================================== */
const saundarya: TextSeed = {
  workSlug: 'saundarya-lahari',
  chapters: [{ number: 1, title_sa: 'आनन्दलहरी', title: 'Ānandalaharī', title_en: 'The Wave of Bliss', summary: 'Śaṅkara’s opening homage to the union of Śiva and Śakti as the source of the world’s appearance.' }],
  verses: [
    {
      chapter: 1, verse: '1',
      sa: 'शिवः शक्त्या युक्तो यदि भवति शक्तः प्रभवितुं\nन चेदेवं देवो न खलु कुशलः स्पन्दितुमपि ।\nअतस्त्वां स्तौमि त्वामहमिति यदात्मानमवसि\nत्वयैव कुर्वन्ति कुशलाः कुशलाः सर्वकार्येषु ॥',
      iast: 'śivaḥ śaktyā yukto yadi bhavati śaktaḥ prabhavituṃ\nna ced evaṃ devo na khalu kuśalaḥ spanditum api |\natas tvāṃ staumi tvām aham iti yad ātmānam avasi\ntvayai ’va kurvanti kuśalāḥ kuśalāḥ sarva-kāryeṣu ||',
      en: 'Only when Śiva is joined with Śakti is he able to create; otherwise the god cannot even stir. Therefore I praise you — and because you abide as his power, the capable accomplish all things only through you.',
      hi: 'शिव शक्ति से युक्त हों तभी सृष्टि करने में समर्थ होते हैं; अन्यथा वे देव स्पन्दन भी नहीं कर सकते। इसलिए मैं तुम्हारी स्तुति करता हूँ; तुम्हारे द्वारा ही समर्थ जन सब कार्य सिद्ध करते हैं।',
      mr: 'शिव शक्तीने युक्त असतील तरच सृष्टी करू शकतात; अन्यथा ते देव स्पंदनही करू शकत नाहीत. म्हणून मी तुझी स्तुती करतो; तुझ्याद्वारेच समर्थ लोक सर्व कार्य साधतात.',
    },
  ],
  commentaries: [
    { chapter: 1, verse: '1', tradition: 'Shakta', author: 'Śrīvidyā tradition', title: 'Śakti as the power of the Absolute', body: 'The opening verse of the Saundaryalaharī is the classic statement of the Śākta non-duality of Śiva and Śakti: the Absolute without its power is inert, and creation is the vibration of that power. Śrīvidyā ritual reads the verse as the grammatical justification for worshipping Devī as the sole object of the Śrīcakra.', note: 'Editorial summary.' },
    { chapter: 1, verse: '1', tradition: 'Shaiva', author: 'Trika tradition', title: 'Śakti as svātantrya', body: 'In Trika Śaivism, the verse is read with the Spandakārikā: Śakti is the absolute’s own freedom of self-manifestation (svātantrya), and the dependence of Śiva on Śakti is not a limitation but the very form of his sovereignty.', note: 'Editorial summary.' },
  ],
};

const kavya: TextSeed = {
  workSlug: 'raghuvamsha',
  chapters: [{ number: 1, title_sa: 'प्रथमः सर्गः', title: 'Sarga 1', title_en: 'The Invocation', summary: 'Kālidāsa’s invocation of Pārvatī and Parameśvara as words and meaning, inseparable as a pair.' }],
  verses: [
    {
      chapter: 1, verse: '1',
      sa: 'वागर्थाविव संपृक्तौ वागर्थप्रतिपत्तये ।\nजगतः पितरौ वन्दे पार्वतीपरमेश्वरौ ॥',
      iast: 'vāg-arthāv iva saṃpṛktau vāg-artha-pratipattaye |\njagataḥ pitarau vande pārvatī-parameśvarau ||',
      en: 'To Pārvatī and Parameśvara, the parents of the world, who are inseparably united like word and meaning — I bow, so that the sense of words may be understood.',
      hi: 'वाक् और अर्थ की तरह अविभाज्य रूप से संयुक्त जगत् के माता-पिता पार्वती और परमेश्वर को मैं प्रणाम करता हूँ, वाणी और अर्थ की प्रतीति के लिए।',
      mr: 'वाणी व अर्थाप्रमाणे अविभाज्य जोडीदार, जगाचे माता-पिता पार्वती व परमेश्वरांना मी नमस्कार करतो, वाणी व अर्थाची प्रतीती व्हावी म्हणून.',
      words: [
        { sa: 'वागर्थौ', iast: 'vāg-arthau', en: 'word and meaning', hi: 'वाणी और अर्थ' },
        { sa: 'इव', iast: 'iva', en: 'like', hi: 'जैसे' },
        { sa: 'संपृक्तौ', iast: 'saṃpṛktau', en: 'inseparably united', hi: 'अविभाज्य' },
        { sa: 'जगतः पितरौ', iast: 'jagataḥ pitarau', en: 'the parents of the world', hi: 'जगत् के माता-पिता' },
        { sa: 'वन्दे', iast: 'vande', en: 'I bow', hi: 'प्रणाम करता हूँ' },
      ],
    },
  ],
};

const meghaduta: TextSeed = {
  workSlug: 'meghaduta',
  chapters: [{ number: 1, title_sa: 'पूर्वमेघः', title: 'Pūrvamegha', title_en: 'The Cloud Messenger', summary: 'The yakṣa, exiled for a year for neglecting his duties, addresses the first monsoon cloud and asks it to carry his message.' }],
  verses: [
    {
      chapter: 1, verse: '1',
      sa: 'कश्चित्कान्ताविरहगुरुणा स्वाधिकारात्प्रमत्तः\nशापेनास्तंगमितमहिमा वर्षभोग्येण भर्तुः ।\nयक्षश्चक्रे जनकतनयास्नानपुण्योदकेषु\nस्निग्धच्छायातरुषु वसतिं रामगिर्याश्रमेषु ॥',
      iast: 'kaścit kāntā-viraha-guruṇā svādhikārāt pramattaḥ\nśāpenāstaṃ-gamita-mahimā varṣa-bhogyena bhartuḥ |\nyakṣaś cakre janaka-tanayā-snāna-puṇyodakeṣu\nsnigdha-cchāyā-taruṣu vasatiṃ rāmagiry-āśrameṣu ||',
      en: 'A certain yakṣa, careless of his duty and cursed by his master to a year’s loss of power, and so overcome by the grief of separation from his beloved, made his dwelling in the Rāmagiri hermitages — where the waters are hallowed by Sītā’s bathing, and the trees give deep shade.',
      hi: 'कोई यक्ष, अपने कर्तव्य से प्रमत्त होकर स्वामी के एक वर्ष-भोग्य शाप से महिमा खोकर, प्रियतमा के विरह से व्याकुल, रामगिरि के आश्रमों में निवास करने लगा — जहाँ जानकी के स्नान से पुण्य जल है और घने छायादार वृक्ष हैं।',
      mr: 'कोणीतरी यक्ष, आपल्या कर्तव्याबद्दल प्रमाद केल्यामुळे स्वामीच्या वर्षभराच्या शापाने महिमा गमावून, प्रियेच्या विरहाने व्याकुळ होऊन रामगिरीच्या आश्रमांत राहू लागला — जिथे जानकीच्या स्नानाने पुण्य झालेले जल व घनघोर सावली देणारी वृक्षे आहेत.',
    },
  ],
};

const panchatantra: TextSeed = {
  workSlug: 'panchatantra',
  chapters: [{ number: 1, title_sa: 'मित्रभेदः', title: 'Mitrabheda', title_en: 'The Loss of Friends', summary: 'The lion and the bull: how a cunning jackal divides two friends. The frame story of the first tantra.' }],
  verses: [
    {
      chapter: 1, verse: '1',
      sa: 'अपरीक्ष्य न कर्तव्यं कर्तव्यं सुविचारितम् ।\nपश्चात्प्रकाशितं कार्यं कुर्वन्ति हि विचक्षणाः ॥',
      iast: 'aparīkṣya na kartavyaṃ kartavyaṃ suvicāritam |\npaścāt prakāśitaṃ kāryaṃ kurvanti hi vicakṣaṇāḥ ||',
      en: 'Nothing should be done without examination; what is done should be well considered. The discerning act only after their purpose is clear.',
      hi: 'बिना परीक्षा कुछ नहीं करना चाहिए; जो करना हो उसे भली-भाँति विचारकर करना चाहिए। विचक्षण लोग कार्य को प्रकट रूप में विचारकर ही करते हैं।',
      mr: 'परीक्षा न करता काहीही करू नये; जे करावे ते सुविचाराने करावे. शहाणे लोक कार्य स्पष्ट विचारानंतरच करतात.',
    },
  ],
};

const hanumanChalisa: TextSeed = {
  workSlug: 'hanuman-chalisa',
  chapters: [{ number: 1, title_sa: 'दोहा-चौपाई', title: 'Dohā–Caupāī', title_en: 'The Forty Verses', summary: 'The opening dohā, invoking the guru and beginning the praise of Hanumān.' }],
  verses: [
    {
      chapter: 1, verse: '1',
      sa: 'श्रीगुरु चरन सरोज रज निज मनु मुकुरु सुधारि ।\nबरनउँ रघुबर बिमल जसु जो दायकु फल चारि ॥',
      iast: 'śrī-guru carana saroja raja nija manu mukuru sudhāri |\nbarnauṃ raghubara bimala jasu jo dāyaku phala cāri ||',
      en: 'Cleansing the mirror of my mind with the dust of the guru’s lotus feet, I declare the spotless fame of Rāma, which bestows the four fruits of life.',
      hi: 'श्रीगुरु के चरण-कमलों की रज से अपने मन के दर्पण को स्वच्छ करके, मैं श्री रघुवीर का निर्मल यश वर्णन करता हूँ, जो चारों फल देने वाला है।',
      mr: 'श्रीगुरूंच्या चरणकमळांच्या रजेने आपल्या मनाचा दर्पण स्वच्छ करून, मी श्रीरघुवीरांचे निर्मळ यश वर्णन करतो, जे चारही फळे देणारे आहे.',
    },
  ],
};

const tirukkural: TextSeed = {
  workSlug: 'tirukkural',
  chapters: [{ number: 1, title_sa: 'கடவுள் வாழ்த்து — देव-वन्दना', title: 'Kaṭavuḷ Vāḻttu', title_en: 'The Praise of God', summary: 'The opening chapter of the Kural: ten couplets on the primacy of the divine.' }],
  verses: [
    {
      chapter: 1, verse: '1',
      sa: 'அகர முதல எழுத்தெல்லாம் ஆதி\nபகவன் முதற்றே உலகு',
      iast: 'akara mutala eḻuttellām āti\npakavaṉ mutaṟṟē ulaku',
      en: 'As the letter A is the first of all letters, so the Primal One is the beginning of the world.',
      hi: 'जैसे अक्षरों में "अ" सबसे पहले है, वैसे ही आदि भगवान ही संसार का आदि है।',
      mr: 'ज्याप्रमाणे सर्व अक्षरांत "अ" प्रथम आहे, त्याचप्रमाणे आदी भगवानच जगाचा आदी आहे.',
      words: [
        { sa: 'அகரம்', iast: 'akaram', en: 'the letter A (akāram)', hi: '"अ" अक्षर' },
        { sa: 'முதல', iast: 'mutala', en: 'first', hi: 'पहला' },
        { sa: 'எழுத்தெல்லாம்', iast: 'eḻuttellām', en: 'of all letters', hi: 'सब अक्षरों का' },
        { sa: 'ஆதி பகவன்', iast: 'āti pakavaṉ', en: 'the Primal Lord', hi: 'आदि भगवान' },
        { sa: 'உலகு', iast: 'ulaku', en: 'the world', hi: 'संसार' },
      ],
      credit: 'Mūla: Tirukkuṟaḷ 1 (Tamil, public domain) · IAST transliteration and translation: Sanatan Library working translation (CC BY-SA 4.0)',
    },
  ],
  commentaries: [
    { chapter: 1, verse: '1', tradition: 'Shaiva', author: 'Tamil Śaiva tradition', title: 'Kaṭavuḷ as the Primal One', body: 'The Tamil Śaiva commentarial tradition (Parimēlaḻakar and later) reads kuṟaḷ 1.1 as establishing the dependence of everything on the Primal Being, and joins it with the Tamil Śaiva understanding of Śiva as the first cause and the inner agent of all action.', note: 'Editorial summary.' },
  ],
};

export const TEXTS: TextSeed[] = [
  gita, isha, katha, mundaka, kena, chandogya, brihadaranyaka,
  rigveda, atharvaveda, yajurveda,
  yogaSutras, brahmaSutras, ramayana, bhagavata, deviMahatmya,
  saundarya, kavya, meghaduta, panchatantra, hanumanChalisa, tirukkural,
];

export const DEMO_CREDIT = CREDIT;
export const EDITORIAL_CREDIT = EDITORIAL;

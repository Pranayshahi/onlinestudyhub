import React, { createContext, useContext, useState } from 'react';

const LanguageContext = createContext({ lang: 'en', setLang: () => {}, t: (k) => k });

export function LanguageProvider({ children }) {
  const [lang, setLangState] = useState(() => localStorage.getItem('osh_lang') || 'en');

  const setLang = (l) => {
    localStorage.setItem('osh_lang', l);
    setLangState(l);
  };

  const t = (key) => {
    if (lang === 'en') return STRINGS.en[key] ?? key;
    return STRINGS.hi[key] ?? STRINGS.en[key] ?? key;
  };

  return (
    <LanguageContext.Provider value={{ lang, setLang, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLang() { return useContext(LanguageContext); }

// ── Translation strings ────────────────────────────────────────────
const STRINGS = {
  en: {
    // Navbar
    nav_classes: 'Classes',
    nav_teachers: 'Teachers',
    nav_teacher_portal: '👨‍🏫 Teacher Portal',
    nav_ai_doubt: 'AI Doubt',
    nav_search_placeholder: 'Search topics, teachers...',
    nav_login: '🔑 Login / Sign Up',
    nav_dashboard: '🏠 My Dashboard',
    nav_bookings: '📅 My Bookings',
    nav_logout: 'Logout',

    // Hero
    hero_eyebrow: '100% Free · Class 6-12 · JEE · NEET',
    hero_h1_line1: 'Unlock Your Academic Destiny',
    hero_h1_accent: 'With AI',
    hero_sub: 'Instant clarity on every subject. Master JEE, NEET, and more with unparalleled AI guidance.',
    hero_feature_ai: 'AI Doubt',
    hero_feature_topics: 'Topics',
    hero_feature_teachers: 'Teachers',
    hero_feature_certificate: 'Certificate',
    hero_cta_primary: 'Start Learning For Free',
    hero_cta_secondary: 'Book a Free Trial',

    // Journey card
    journey_title: 'Start Your Journey',
    journey_trust: 'Trusted by',
    journey_trust_suffix: 'students across India',
    search_placeholder: 'Search a topic — e.g. Quadratic Equations, Photosynthesis…',
    search_btn: 'Search',
    quicktag_maths: 'Class 10 Maths',
    quicktag_physics: 'Class 11 Physics',
    quicktag_neet: 'NEET Biology',
    quicktag_jee: 'JEE Chemistry',

    // Stats
    stat_students: 'Students Learning',
    stat_teachers: 'Expert Teachers',
    stat_topics: 'Topics Covered',
    stat_rating: 'Average Rating',

    // Subjects section
    subjects_title: 'Every subject. Every topic.',
    subjects_sub: 'Complete CBSE & competitive exam coverage — all free.',
    subj_maths_desc: 'Algebra · Calculus · Geometry',
    subj_physics_desc: 'Mechanics · Electricity · Optics',
    subj_chemistry_desc: 'Organic · Inorganic · Physical',
    subj_biology_desc: 'Genetics · Ecology · Physiology',
    subj_science_desc: 'Physics · Chemistry · Biology Basics',
    subj_social_desc: 'History · Geography · Civics',

    // How it works
    how_title: 'How it works',
    how_step1_title: 'Pick your class & subject',
    how_step1_desc: 'Choose from Class 6–12, JEE or NEET. All CBSE curriculum covered with topic-wise notes.',
    how_step2_title: 'Study topic-by-topic',
    how_step2_desc: 'Clear explanations, formulas, diagrams and exam-important Q&A for every topic.',
    how_step3_title: 'Book a 1-on-1 session',
    how_step3_desc: 'Still confused? Book a live video session with an expert teacher. Doubts cleared instantly.',

    // Testimonials
    testimonials_title: "What students say",

    // Trending
    trending_title: 'Trending Topics',

    // Exam CTA
    exam_cta_title: 'Preparing for JEE or NEET?',
    exam_cta_sub: 'Chapter-wise weightage, previous year questions, and full mock tests — all in one place.',
    exam_jee_btn: 'JEE Hub →',
    exam_neet_btn: 'NEET Hub →',

    // Final CTA
    final_cta_title: 'Start for free today',
    final_cta_sub: 'Join 50,000+ students already learning on OnlineStudyHub.',
    final_cta_btn: 'Explore Classes →',
    final_cta_btn2: 'Find a Teacher →',

    // TopicPage
    topic_notes: 'My Notes',
    topic_notes_close: '▲ Close',
    topic_notes_open: '▼ Open',
    topic_detailed_exp: 'Detailed explanation',
    topic_mark_done: '○ Mark as Done',
    topic_completed: '✅ Completed',
    topic_share: '🔗 Share Topic',
    topic_copied: '✓ Link Copied!',
    topic_definition: 'Definition — What is',
    topic_understanding: 'Understanding',
    topic_qa_title: 'Important Questions & Answers',
    topic_qa_sub: 'Frequently asked in exams',
    topic_flashcards: '🃏 Flashcards',
    topic_ai_flashcards: '✨ AI Flashcards',
    topic_ai_flashcards_done: '✨ AI Flashcards ✓',
    topic_ai_generating: '⏳ Generating…',
    topic_collapse_all: 'Collapse all',
    topic_expand_all: 'Expand all',
    topic_show_less: 'Show less ▲',
    topic_exam_tip: 'Exam Tip',
    topic_expert_teacher: 'Expert Teacher',
    topic_deep_learn: 'Deep Learn with',
    topic_book_session: '🚀 Book a Deep Learn Session with',
    topic_prev: 'Previous Topic',
    topic_next: 'Next Topic',
    topic_covers: 'Covers:',
    topic_of: 'of',

    // SubjectPage
    subj_click_hint: 'Click any topic to start learning',
    subj_search_placeholder: 'Search topics in',
    subj_no_topics: 'No topics found for',
    subj_clear_search: 'Clear search',
    subj_start_learning: 'Start learning →',
    subj_mastered_all: "You've mastered all",
    subj_mastered_suffix: 'topics!',
    subj_congrats: 'Congratulations on completing',
    subj_download_cert: '🎓 Download Certificate',
    subj_share_wa: '📱 Share on WhatsApp',
    subj_other_subjects: 'Other subjects in',
    subj_completed: 'completed',

    // ClassPage
    class_find_teacher: '👩‍🏫 Find Teacher',
    class_subjects_count: 'Subjects',
    class_topics_count: 'Topics',
    class_view_topics: 'View All Topics →',
    class_topics_in: 'Topics in',
    class_all_subjects: 'All subjects in',
    class_practice_q: 'practice questions →',
    class_done: 'done',

    // ExamHubPage
    exam_prep_label: 'Competitive Exam Prep',
    exam_weightage_title: 'Chapter Weightage',
    exam_weightage_sub: 'Know which chapters to prioritise',
    exam_pyq_title: 'PYQ Bank',
    exam_pyq_sub: 'Filter by year, subject & difficulty',
    exam_mock_title: 'Mock Tests',
    exam_mock_sub: 'Get your estimated rank & score breakdown',
    exam_prep_tools: 'Preparation Tools',
    exam_quick_stats: 'Quick Stats',
    exam_stat_questions: 'Total Questions',
    exam_stat_marks: 'Total Marks',
    exam_stat_duration: 'Duration',
    exam_stat_chapters: 'Chapters Covered',
    exam_stat_pyqs: 'PYQs Available',
    exam_chapters: 'chapters',

    // ClassesPage
    classes_title: 'Choose Your Class',
    classes_sub: 'Select your class to browse subjects and topics',

    // SearchPage
    search_page_title: 'Search',
    search_page_placeholder: 'Search topics, classes, teachers...',
    search_no_results: 'No results for',
    search_browse_classes: 'Browse Classes',
    search_min_chars: 'Type at least 2 characters to search.',
    search_try: 'Try searching for:',
    search_section_topics: 'Topics',
    search_section_subjects: 'Subjects',
    search_section_classes: 'Classes',
    search_section_teachers: 'Teachers',

    // WeightagePage
    wt_title: 'Chapter Weightage',
    wt_subtitle: 'Know which chapters appear most in',
    wt_sort: 'Sort:',
    wt_sort_weight: 'By Weight',
    wt_sort_diff: 'By Difficulty',
    wt_sort_alpha: 'A–Z',
    wt_total_chapters: 'TOTAL CHAPTERS',
    wt_must_do: 'MUST-DO',
    wt_avg_q: 'AVG QUESTIONS',
    wt_per_paper: 'per paper',
    wt_priority_must: 'Must Do',
    wt_priority_high: 'High',
    wt_priority_medium: 'Medium',
    wt_priority_low: 'Low',
    wt_diff_hard: 'Hard',
    wt_diff_easy: 'Easy',

    // MockTestListPage
    mock_list_title: 'Mock Tests',
    mock_list_correct_mark: 'marks for correct answer',
    mock_list_wrong_mark: 'mark for wrong answer',
    mock_list_zero: '0 for unattempted',
    mock_list_timer: 'Timer runs in real-time',
    mock_stat_questions: 'Questions',
    mock_stat_total_marks: 'Total Marks',
    mock_stat_duration: 'Duration',
    mock_stat_pattern: 'Pattern',
    mock_last_attempt: '✅ Last Attempt',
    mock_retake: '🔁 Retake Test',
    mock_start_test: '▶ Start Test',
    mock_correct_count: 'correct',
    mock_wrong_count: 'wrong',
    mock_coming_soon: 'Mock tests coming soon for',

    // MockTestTakerPage
    mtake_subj_dist: 'Subject Distribution',
    mtake_questions: 'questions',
    mtake_marking: 'Marking',
    mtake_start_warning: 'Once you start, the timer begins. The test auto-submits when time runs out.',
    mtake_back: '← Back',
    mtake_submit: 'Submit',
    mtake_completed: 'Test Completed!',
    mtake_out_of: 'out of',
    mtake_marks: 'marks',
    mtake_correct: 'Correct',
    mtake_wrong: 'Wrong',
    mtake_skipped: 'Skipped',
    mtake_score_pct: 'Score %',
    mtake_subj_breakdown: 'Subject Breakdown',
    mtake_answer_review: 'Answer Review',
    mtake_solution: 'Solution:',
    mtake_not_attempted: 'Not attempted',
    mtake_all_tests: '← All Tests',
    mtake_retake: '🔁 Retake',

    // TeachersPage
    tpage_title: 'Find Your Mentor',
    tpage_sub: 'Choose your class to see expert teachers available for you.',
    tpage_select_class: 'Select Your Class',
    tpage_select_sub: 'We have subject-matter experts for every grade. Choose yours to continue.',
    tpage_browse: 'Browse Teachers →',

    // TeachersListPage
    tlist_available: 'Available Mentors',
    tlist_available_sub: 'Hover over a profile to book a quick appointment or see more details.',
    tlist_found: 'Teachers Found',
    tlist_loading: 'Finding the best teachers for you...',
    tlist_none: 'No teachers found for this class yet',
    tlist_none_sub: 'We are constantly onboarding new experts. Please check back soon!',
    tlist_view_other: 'View Other Classes',

    // Footer
    footer_desc: "India's most comprehensive free learning platform for Class 6–12, JEE & NEET. Quality education for every student, everywhere.",
    footer_classes: 'Classes',
    footer_competitive: 'Competitive',
    footer_important: 'Important',
    footer_made_in: '🇮🇳 Made in India',
    footer_free: '📚 Free Forever',

    // MyBookingsPage
    bookings_title: 'My Bookings',
    bookings_sub: 'All your session requests and upcoming classes',
    bookings_login_required: 'Login Required',
    bookings_login_sub: 'Please login to view your booking history.',
    bookings_loading: 'Loading your bookings…',
    bookings_none: 'No bookings yet',
    bookings_none_sub: 'Book a session with a teacher to get started.',
    bookings_find_teacher: 'Find a Teacher',
    bookings_upcoming: 'Upcoming',
    bookings_past: 'Past Sessions',
    bookings_rate: '⭐ Rate This Session',
    bookings_reviewed: '✅ Reviewed — Thank you!',
    bookings_cancel: '✕ Cancel Booking',
    bookings_cancelling: '⏳ Cancelling…',
    bookings_join: '📹 Join Meet',
    bookings_date: 'Date',
    bookings_time: 'Time',
    bookings_name: 'Name',
    bookings_phone: 'Phone',

    // NotFoundPage
    notfound_title: 'Page Not Found',
    notfound_sub: "Looks like this page doesn't exist. It may have been moved or you may have mistyped the URL.",
    notfound_home: 'Go to Homepage',

    // DashboardPage
    dash_login_title: 'Login to see your Dashboard',
    dash_login_sub: 'Track your progress, earn badges, and plan your studies.',
    dash_login_btn: 'Login / Sign Up',
    dash_greeting_morning: 'Good morning',
    dash_greeting_afternoon: 'Good afternoon',
    dash_greeting_evening: 'Good evening',
  },

  hi: {
    // Navbar
    nav_classes: 'कक्षाएँ एवं विषय',
    nav_teachers: 'हमारे शिक्षक',
    nav_teacher_portal: '👨‍🏫 शिक्षक पोर्टल',
    nav_ai_doubt: 'AI डाउट सॉल्वर',
    nav_search_placeholder: 'विषय, अध्याय या शिक्षक खोजें...',
    nav_login: '🔑 लॉगिन / साइन अप',
    nav_dashboard: '🏠 मेरा डैशबोर्ड',
    nav_bookings: '📅 मेरी बुकिंग',
    nav_logout: 'लॉगआउट',

    // Hero
    hero_eyebrow: '100% निःशुल्क · कक्षा 6-12 · CBSE & ICSE · JEE · NEET',
    hero_h1_line1: 'अपनी पढ़ाई और बोर्ड परीक्षा में पाएं 100% सफलता',
    hero_h1_accent: 'AI स्मार्ट गुरु के साथ',
    hero_sub: 'कक्षा 6 से 12वीं, JEE एवं NEET की 100% सटीक तैयारी। AI डाउट सॉल्वर, अध्याय-वार हस्तलिखित नोट्स एवं 1-on-1 शिक्षक मार्गदर्शन।',
    hero_feature_ai: 'AI डाउट सॉल्वर',
    hero_feature_topics: 'अध्याय एवं नोट्स',
    hero_feature_teachers: 'विशेषज्ञ शिक्षक',
    hero_feature_certificate: 'कोर्स सर्टिफिकेट',
    hero_cta_primary: 'मुफ़्त में पढ़ाई शुरू करें',
    hero_cta_secondary: 'फ्री ट्रायल क्लास बुक करें',

    // Journey card
    journey_title: 'अपनी पढ़ाई शुरू करें — बोर्ड एवं प्रतियोगी परीक्षा हब',
    journey_trust: 'भारत भर के',
    journey_trust_suffix: 'मेधावी विद्यार्थियों का भरोसेमंद मंच',
    search_placeholder: 'किसी भी अध्याय या टॉपिक का नाम खोजें (उदा: द्विघात समीकरण, प्रकाश संश्लेषण, अवकलन)…',
    search_btn: 'खोजें',
    quicktag_maths: 'कक्षा 10 गणित',
    quicktag_physics: 'कक्षा 11 भौतिकी',
    quicktag_neet: 'NEET जीव विज्ञान',
    quicktag_jee: 'JEE रसायन विज्ञान',

    // Stats
    stat_students: 'सक्रिय छात्र सीख रहे हैं',
    stat_teachers: 'अनुभवी विशेषज्ञ शिक्षक',
    stat_topics: 'अध्याय एवं टॉपिक कवर',
    stat_rating: 'औसत छात्र रेटिंग',

    // Subjects section
    subjects_title: 'हर विषय। हर अध्याय। पूरी तैयारी।',
    subjects_sub: 'CBSE, ICSE एवं प्रतियोगी परीक्षाओं का संपूर्ण पाठ्यक्रम — बिल्कुल मुफ्त।',
    subj_maths_desc: 'बीजगणित · कलन (Calculus) · ज्यामिति',
    subj_physics_desc: 'यांत्रिकी (Mechanics) · विद्युत · प्रकाशिकी (Optics)',
    subj_chemistry_desc: 'कार्बनिक (Organic) · अकार्बनिक · भौतिक रसायन',
    subj_biology_desc: 'आनुवंशिकी (Genetics) · पारिस्थितिकी · शरीर क्रिया विज्ञान',
    subj_science_desc: 'भौतिकी · रसायन विज्ञान · जीव विज्ञान मूल बातें',
    subj_social_desc: 'इतिहास · भूगोल · नागरिक शास्त्र · अर्थशास्त्र',

    // How it works
    how_title: 'पढ़ाई कैसे करें — सरल 3 चरण',
    how_step1_title: '1. अपनी कक्षा और विषय चुनें',
    how_step1_desc: 'कक्षा 6 से 12वीं (CBSE/ICSE), JEE या NEET चुनें। सम्पूर्ण पाठ्यक्रम टॉपिक-वाइज नोट्स के साथ उपलब्ध।',
    how_step2_title: '2. टॉपिक-दर-टॉपिक गहराई से पढ़ें',
    how_step2_desc: 'हर अध्याय के लिए सरल भाषा में व्याख्या, आवश्यक सूत्र, नामांकित चित्र और बोर्ड परीक्षा के महत्वपूर्ण प्रश्न-उत्तर।',
    how_step3_title: '3. 1-on-1 लाइव क्लास बुक करें',
    how_step3_desc: 'कोई भी डाउट हो? भारत के टॉप शिक्षकों के साथ 1-on-1 व्यक्तिगत लाइव क्लास बुक करें और तुरंत समाधान पाएं।',

    // Testimonials
    testimonials_title: "सफल छात्रों के अनुभव",

    // Trending
    trending_title: 'लोकप्रिय अध्ययन विषय',

    // Exam CTA
    exam_cta_title: 'JEE Main, Advanced या NEET की तैयारी कर रहे हैं?',
    exam_cta_sub: 'अध्याय-वार अंक भार (Weightage), पिछले 10 वर्षों के प्रश्न (PYQ Bank) और असली NTA पैटर्न मॉक टेस्ट।',
    exam_jee_btn: 'JEE परीक्षा हब →',
    exam_neet_btn: 'NEET परीक्षा हब →',

    // Final CTA
    final_cta_title: 'आज ही अपनी तैयारी मुफ़्त में शुरू करें',
    final_cta_sub: '50,000+ छात्र ऑनलाइन स्टडी हब के साथ हर दिन अपनी बोर्ड व प्रतियोगी परीक्षाओं में बेहतर प्रदर्शन कर रहे हैं।',
    final_cta_btn: 'सभी कक्षाएँ देखें →',
    final_cta_btn2: 'शिक्षक खोजें →',

    // TopicPage
    topic_notes: 'मेरे पर्सनल नोट्स',
    topic_notes_close: '▲ बंद करें',
    topic_notes_open: '▼ खोलें',
    topic_detailed_exp: 'गहन एवं विस्तृत व्याख्या',
    topic_mark_done: '○ पूरा हो गया चिह्नित करें',
    topic_completed: '✅ अध्याय पूर्ण',
    topic_share: '🔗 टॉपिक शेयर करें',
    topic_copied: '✓ लिंक कॉपी हो गया!',
    topic_definition: 'मुख्य परिभाषा — अवधारणा एवं नियम',
    topic_understanding: 'अध्याय की गहराई से समझ',
    topic_qa_title: 'बोर्ड परीक्षा-उपयोगी महत्वपूर्ण प्रश्न एवं हल',
    topic_qa_sub: 'बोर्ड एवं प्रतियोगी परीक्षाओं में बार-बार पूछे जाने वाले प्रश्न',
    topic_flashcards: '🃏 त्वरित रिवीजन कार्ड्स',
    topic_ai_flashcards: '✨ AI स्मार्ट रिवीजन कार्ड्स',
    topic_ai_flashcards_done: '✨ AI रिवीजन कार्ड्स तैयार ✓',
    topic_ai_generating: '⏳ कार्ड्स बन रहे हैं…',
    topic_collapse_all: 'सभी प्रश्न बंद करें',
    topic_expand_all: 'सभी प्रश्न खोलें',
    topic_show_less: 'कम दिखाएँ ▲',
    topic_exam_tip: 'परीक्षा गुरु टिप',
    topic_expert_teacher: 'विषय विशेषज्ञ शिक्षक',
    topic_deep_learn: 'गहराई से सीखें',
    topic_book_session: '🚀 1-on-1 पर्सनल गाइडेंस क्लास बुक करें',
    topic_prev: '← पिछला अध्याय',
    topic_next: 'अगला अध्याय →',
    topic_covers: 'मुख्य बिंदु:',
    topic_of: 'में से',

    // SubjectPage
    subj_click_hint: 'किसी भी टॉपिक पर क्लिक करके पढ़ना शुरू करें',
    subj_search_placeholder: 'इस विषय में टॉपिक खोजें...',
    subj_no_topics: 'खोजे गए नाम का कोई टॉपिक नहीं मिला',
    subj_clear_search: 'खोज साफ करें',
    subj_start_learning: 'पढ़ाई शुरू करें →',
    subj_mastered_all: 'अद्भुत! आपने इस विषय के सभी',
    subj_mastered_suffix: 'अध्याय पूरे कर लिए हैं!',
    subj_congrats: 'बधाई हो! आपने सफलतापूर्व पूरा किया:',
    subj_download_cert: '🎓 अपना कोर्स सर्टिफिकेट डाउनलोड करें',
    subj_share_wa: '📱 WhatsApp पर दोस्तों के साथ शेयर करें',
    subj_other_subjects: 'इस कक्षा के अन्य विषय',
    subj_completed: 'पूर्ण',

    // ClassPage
    class_find_teacher: '👩‍🏫 पर्सनल ट्यूटर खोजें',
    class_subjects_count: 'विषय',
    class_topics_count: 'अध्याय',
    class_view_topics: 'सभी अध्याय देखें →',
    class_topics_in: 'अध्याय सूची',
    class_all_subjects: 'सभी उपलब्ध विषय',
    class_practice_q: 'अभ्यास प्रश्न हल करें →',
    class_done: 'पूर्ण',

    // ExamHubPage
    exam_prep_label: 'प्रतियोगी परीक्षा तैयारी मंच',
    exam_weightage_title: 'अध्याय-वार अंक भार (Weightage)',
    exam_weightage_sub: 'जानें किन अध्यायों से सबसे अधिक प्रश्न पूछे जाते हैं',
    exam_pyq_title: 'गत वर्षों के प्रश्न (PYQ Bank)',
    exam_pyq_sub: 'वर्ष, विषय एवं कठिनाई स्तर के अनुसार फ़िल्टर करें',
    exam_mock_title: 'NTA पैटर्न मॉक टेस्ट',
    exam_mock_sub: 'वास्तविक समय में अपनी संभावित ऑल इंडिया रैंक और स्कोर जानें',
    exam_prep_tools: 'परीक्षा तैयारी के साधन',
    exam_quick_stats: 'त्वरित आँकड़े',
    exam_stat_questions: 'कुल प्रश्न बैंक',
    exam_stat_marks: 'कुल अंक',
    exam_stat_duration: 'समय सीमा',
    exam_stat_chapters: 'कवर अध्याय',
    exam_stat_pyqs: 'हल किए प्रश्न',
    exam_chapters: 'अध्याय',

    // ClassesPage
    classes_title: 'अपनी कक्षा चुनें',
    classes_sub: 'अपनी कक्षा चुनकर विषय, नोट्स एवं अभ्यास प्रश्न देखें',

    // SearchPage
    search_page_title: 'खोजें (Search)',
    search_page_placeholder: 'अध्याय, विषय, कक्षा या शिक्षक खोजें...',
    search_no_results: 'कोई परिणाम नहीं मिला:',
    search_browse_classes: 'सभी कक्षाएँ देखें',
    search_min_chars: 'खोजने के लिए कम से कम 2 अक्षर टाइप करें।',
    search_try: 'लोकप्रिय खोज सुझाव:',
    search_section_topics: 'अध्याय एवं टॉपिक',
    search_section_subjects: 'विषय',
    search_section_classes: 'कक्षाएँ',
    search_section_teachers: 'शिक्षक',

    // WeightagePage
    wt_title: 'अध्याय-वार अंक भार (Weightage)',
    wt_subtitle: 'परीक्षा में सबसे अधिक पूछे जाने वाले महत्वपूर्ण अध्याय',
    wt_sort: 'क्रमबद्ध करें:',
    wt_sort_weight: 'अंक भार से',
    wt_sort_diff: 'कठिनाई स्तर से',
    wt_sort_alpha: 'अक्षर क्रम से',
    wt_total_chapters: 'कुल अध्याय',
    wt_must_do: 'अत्यंत महत्वपूर्ण (Must Do)',
    wt_avg_q: 'औसत प्रश्न',
    wt_per_paper: 'प्रति प्रश्न पत्र',
    wt_priority_must: 'अनिवार्य',
    wt_priority_high: 'उच्च प्राथमिकता',
    wt_priority_medium: 'मध्यम',
    wt_priority_low: 'सामान्य',
    wt_diff_hard: 'कठिन',
    wt_diff_easy: 'सरल',

    // MockTestListPage
    mock_list_title: 'NTA मॉक टेस्ट सीरीज़',
    mock_list_correct_mark: 'प्रत्येक सही उत्तर पर अंक',
    mock_list_wrong_mark: 'गलत उत्तर पर ऋणात्मक अंक (Negative Marking)',
    mock_list_zero: 'अनुत्तरित प्रश्न पर 0 अंक',
    mock_list_timer: 'वास्तविक परीक्षा की तरह उलटी गिनती (Timer)',
    mock_stat_questions: 'कुल प्रश्न',
    mock_stat_total_marks: 'कुल पूर्णांक',
    mock_stat_duration: 'परीक्षा समय',
    mock_stat_pattern: 'परीक्षा पैटर्न',
    mock_last_attempt: '✅ पिछला प्रयास परिणाम',
    mock_retake: '🔁 दोबारा टेस्ट दें',
    mock_start_test: '▶ टेस्ट शुरू करें',
    mock_correct_count: 'सही उत्तर',
    mock_wrong_count: 'गलत उत्तर',
    mock_coming_soon: 'मॉक टेस्ट जल्द उपलब्ध होंगे:',

    // MockTestTakerPage
    mtake_subj_dist: 'विषय-वार प्रश्न विभाजन',
    mtake_questions: 'प्रश्न',
    mtake_marking: 'अंकन योजना',
    mtake_start_warning: 'जैसे ही आप टेस्ट शुरू करेंगे, समय चालू हो जाएगा। समय समाप्त होने पर टेस्ट स्वतः सबमिट हो जाएगा।',
    mtake_back: '← पीछे जाएँ',
    mtake_submit: 'सबमिट करें',
    mtake_completed: 'परीक्षण पूर्ण!',
    mtake_out_of: 'में से',
    mtake_marks: 'प्राप्तांक',
    mtake_correct: 'सही',
    mtake_wrong: 'गलत',
    mtake_skipped: 'छोड़े गए',
    mtake_score_pct: 'प्रतिशत अंक %',
    mtake_subj_breakdown: 'विषय-वार प्रदर्शन विश्लेषण',
    mtake_answer_review: 'उत्तर एवं विस्तृत समाधान समीक्षा',
    mtake_solution: 'चरण-दर-चरण समाधान:',
    mtake_not_attempted: 'प्रयास नहीं किया',
    mtake_all_tests: '← सभी टेस्ट सूची',
    mtake_retake: '🔁 टेस्ट पुनः दें',

    // TeachersPage
    tpage_title: 'अपने लिए सर्वश्रेष्ठ मेंटर चुनें',
    tpage_sub: 'अनुभवी विषय विशेषज्ञों से जुड़ने के लिए अपनी कक्षा चुनें।',
    tpage_select_class: 'अपनी कक्षा का चयन करें',
    tpage_select_sub: 'हर कक्षा के लिए हमारे पास प्रमाणित विषय विशेषज्ञ शिक्षक उपलब्ध हैं।',
    tpage_browse: 'शिक्षक सूची देखें →',

    // TeachersListPage
    tlist_available: 'उपलब्ध शिक्षक एवं मेंटर्स',
    tlist_available_sub: 'प्रोफ़ाइल देखें, डेमो क्लास बुक करें और 1-on-1 पढ़ाई शुरू करें।',
    tlist_found: 'शिक्षक उपलब्ध हैं',
    tlist_loading: 'आपके लिए सर्वश्रेष्ठ शिक्षक खोजे जा रहे हैं...',
    tlist_none: 'इस कक्षा के लिए अभी कोई शिक्षक सूचीबद्ध नहीं है',
    tlist_none_sub: 'हम नए शिक्षकों को जोड़ रहे हैं, कृपया जल्द ही पुनः जांचें!',
    tlist_view_other: 'अन्य कक्षाओं के शिक्षक देखें',

    // Footer
    footer_desc: "कक्षा 6 से 12वीं, JEE एवं NEET के लिए भारत का 100% मुफ़्त एवं गुणवत्तापूर्ण ऑनलाइन अध्ययन मंच।",
    footer_classes: 'कक्षाएँ',
    footer_competitive: 'प्रतियोगी परीक्षाएँ',
    footer_important: 'महत्वपूर्ण लिंक्स',
    footer_made_in: '🇮🇳 भारत में निर्मित (Made in India)',
    footer_free: '📚 हमेशा 100% मुफ़्त',

    // MyBookingsPage
    bookings_title: 'मेरी बुकिंग्स एवं क्लासेस',
    bookings_sub: 'आपके सभी लाइव क्लास अनुरोध एवं आगामी सत्र',
    bookings_login_required: 'लॉगिन आवश्यक है',
    bookings_login_sub: 'अपनी बुकिंग का इतिहास और लाइव क्लास लिंक देखने के लिए लॉगिन करें।',
    bookings_loading: 'आपकी बुकिंग लोड हो रही है…',
    bookings_none: 'अभी तक कोई क्लास बुक नहीं की गई है',
    bookings_none_sub: 'शुरू करने के लिए किसी विशेषज्ञ शिक्षक की प्रोफ़ाइल पर जाकर ट्रायल क्लास बुक करें।',
    bookings_find_teacher: 'शिक्षक ढूँढें',
    bookings_upcoming: 'आगामी लाइव क्लासेस',
    bookings_past: 'पूर्ण हो चुके सत्र',
    bookings_rate: '⭐ इस क्लास का अनुभव रेट करें',
    bookings_reviewed: '✅ समीक्षा सबमिट हो गई — धन्यवाद!',
    bookings_cancel: '✕ बुकिंग रद्द करें',
    bookings_cancelling: '⏳ रद्द किया जा रहा है…',
    bookings_join: '📹 Google Meet जॉइन करें',
    bookings_date: 'दिनांक',
    bookings_time: 'समय',
    bookings_name: 'छात्र का नाम',
    bookings_phone: 'फ़ोन नंबर',

    // NotFoundPage
    notfound_title: 'पेज उपलब्ध नहीं है (404)',
    notfound_sub: 'क्षमा करें! जिस लिंक को आप खोज रहे हैं वह उपलब्ध नहीं है या बदल दिया गया है।',
    notfound_home: 'मुख्य पृष्ठ (Homepage) पर जाएँ',

    // DashboardPage
    dash_login_title: 'अपना डैशबोर्ड देखने के लिए लॉगिन करें',
    dash_login_sub: 'अपनी पढ़ाई की प्रगति ट्रैक करें, बैज अर्जित करें और दैनिक अध्ययन योजना बनाएँ।',
    dash_login_btn: 'लॉगिन / साइन अप करें',
    dash_greeting_morning: 'सुप्रभात',
    dash_greeting_afternoon: 'शुभ दोपहर',
    dash_greeting_evening: 'शुभ संध्या',
  },
};

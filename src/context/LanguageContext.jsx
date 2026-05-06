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
    nav_classes: 'कक्षाएँ',
    nav_teachers: 'शिक्षक',
    nav_teacher_portal: '👨‍🏫 शिक्षक पोर्टल',
    nav_ai_doubt: 'AI सहायता',
    nav_search_placeholder: 'विषय, शिक्षक खोजें...',
    nav_login: '🔑 लॉगिन / साइन अप',
    nav_dashboard: '🏠 मेरा डैशबोर्ड',
    nav_bookings: '📅 मेरी बुकिंग',
    nav_logout: 'लॉगआउट',

    // Hero
    hero_eyebrow: '100% निःशुल्क · कक्षा 6-12 · JEE · NEET',
    hero_h1_line1: 'अपनी शैक्षणिक सफलता की राह खोलें',
    hero_h1_accent: 'AI के साथ',
    hero_sub: 'हर विषय में तुरंत स्पष्टता। AI की मदद से JEE, NEET और बोर्ड परीक्षा में महारत हासिल करें।',
    hero_feature_ai: 'AI संदेह',
    hero_feature_topics: 'विषय-सूची',
    hero_feature_teachers: 'शिक्षक',
    hero_feature_certificate: 'प्रमाणपत्र',
    hero_cta_primary: 'मुफ्त में पढ़ाई शुरू करें',
    hero_cta_secondary: 'फ्री ट्रायल बुक करें',

    // Journey card
    journey_title: 'अपनी यात्रा शुरू करें',
    journey_trust: 'भरोसा करते हैं',
    journey_trust_suffix: 'विद्यार्थी पूरे भारत में',
    search_placeholder: 'कोई टॉपिक खोजें — जैसे: द्विघात समीकरण, प्रकाश संश्लेषण…',
    search_btn: 'खोजें',
    quicktag_maths: 'कक्षा 10 गणित',
    quicktag_physics: 'कक्षा 11 भौतिकी',
    quicktag_neet: 'NEET जीव विज्ञान',
    quicktag_jee: 'JEE रसायन',

    // Stats
    stat_students: 'छात्र सीख रहे हैं',
    stat_teachers: 'विशेषज्ञ शिक्षक',
    stat_topics: 'विषय-टॉपिक',
    stat_rating: 'औसत रेटिंग',

    // Subjects section
    subjects_title: 'हर विषय। हर टॉपिक।',
    subjects_sub: 'पूरी CBSE और प्रतियोगी परीक्षा सामग्री — बिल्कुल मुफ्त।',
    subj_maths_desc: 'बीजगणित · कलन · ज्यामिति',
    subj_physics_desc: 'यांत्रिकी · विद्युत · प्रकाशिकी',
    subj_chemistry_desc: 'कार्बनिक · अकार्बनिक · भौतिक',
    subj_biology_desc: 'आनुवंशिकी · पारिस्थितिकी · शरीर क्रिया',
    subj_science_desc: 'भौतिकी · रसायन · जीव विज्ञान',
    subj_social_desc: 'इतिहास · भूगोल · नागरिक शास्त्र',

    // How it works
    how_title: 'कैसे काम करता है',
    how_step1_title: 'अपनी कक्षा और विषय चुनें',
    how_step1_desc: 'कक्षा 6–12, JEE या NEET में से चुनें। पूरा CBSE पाठ्यक्रम टॉपिक-वाइज नोट्स के साथ उपलब्ध।',
    how_step2_title: 'टॉपिक-दर-टॉपिक पढ़ें',
    how_step2_desc: 'हर टॉपिक के लिए स्पष्ट व्याख्या, सूत्र, आरेख और परीक्षा-महत्वपूर्ण प्रश्न-उत्तर।',
    how_step3_title: '1-on-1 सत्र बुक करें',
    how_step3_desc: 'अभी भी संशय है? किसी विशेषज्ञ शिक्षक के साथ लाइव वीडियो सत्र बुक करें। संदेह तुरंत दूर।',

    // Testimonials
    testimonials_title: "छात्र क्या कहते हैं",

    // Trending
    trending_title: 'ट्रेंडिंग टॉपिक',

    // Exam CTA
    exam_cta_title: 'JEE या NEET की तैयारी कर रहे हैं?',
    exam_cta_sub: 'अध्याय-वार वेटेज, पिछले वर्षों के प्रश्न और पूर्ण मॉक टेस्ट — एक ही जगह।',
    exam_jee_btn: 'JEE हब →',
    exam_neet_btn: 'NEET हब →',

    // Final CTA
    final_cta_title: 'आज ही मुफ्त शुरू करें',
    final_cta_sub: '50,000+ छात्र पहले से OnlineStudyHub पर पढ़ रहे हैं।',
    final_cta_btn: 'कक्षाएँ देखें →',
    final_cta_btn2: 'शिक्षक ढूँढें →',

    // TopicPage
    topic_notes: 'मेरे नोट्स',
    topic_notes_close: '▲ बंद करें',
    topic_notes_open: '▼ खोलें',
    topic_detailed_exp: 'विस्तृत व्याख्या',
    topic_mark_done: '○ पूर्ण चिह्नित करें',
    topic_completed: '✅ पूर्ण',
    topic_share: '🔗 टॉपिक शेयर करें',
    topic_copied: '✓ लिंक कॉपी हो गया!',
    topic_definition: 'परिभाषा — क्या है',
    topic_understanding: 'समझें',
    topic_qa_title: 'महत्वपूर्ण प्रश्न और उत्तर',
    topic_qa_sub: 'परीक्षाओं में अक्सर पूछे जाते हैं',
    topic_flashcards: '🃏 फ्लैशकार्ड',
    topic_ai_flashcards: '✨ AI फ्लैशकार्ड',
    topic_ai_flashcards_done: '✨ AI फ्लैशकार्ड ✓',
    topic_ai_generating: '⏳ बन रहे हैं…',
    topic_collapse_all: 'सभी बंद करें',
    topic_expand_all: 'सभी खोलें',
    topic_show_less: 'कम दिखाएँ ▲',
    topic_exam_tip: 'परीक्षा टिप',
    topic_expert_teacher: 'विशेषज्ञ शिक्षक',
    topic_deep_learn: 'गहराई से सीखें',
    topic_book_session: '🚀 डीप लर्न सत्र बुक करें',
    topic_prev: 'पिछला टॉपिक',
    topic_next: 'अगला टॉपिक',
    topic_covers: 'सम्मिलित:',
    topic_of: 'में से',

    // SubjectPage
    subj_click_hint: 'किसी भी टॉपिक पर क्लिक करके पढ़ाई शुरू करें',
    subj_search_placeholder: 'टॉपिक खोजें',
    subj_no_topics: 'कोई टॉपिक नहीं मिला',
    subj_clear_search: 'खोज साफ करें',
    subj_start_learning: 'पढ़ाई शुरू करें →',
    subj_mastered_all: 'आपने सभी',
    subj_mastered_suffix: 'टॉपिक पूर्ण कर लिए!',
    subj_congrats: 'बधाई हो! आपने पूरा किया',
    subj_download_cert: '🎓 प्रमाणपत्र डाउनलोड करें',
    subj_share_wa: '📱 WhatsApp पर शेयर करें',
    subj_other_subjects: 'अन्य विषय',
    subj_completed: 'पूर्ण',

    // ClassPage
    class_find_teacher: '👩‍🏫 शिक्षक ढूँढें',
    class_subjects_count: 'विषय',
    class_topics_count: 'टॉपिक',
    class_view_topics: 'सभी टॉपिक देखें →',
    class_topics_in: 'टॉपिक',
    class_all_subjects: 'सभी विषय',
    class_practice_q: 'अभ्यास प्रश्न →',
    class_done: 'पूर्ण',

    // ExamHubPage
    exam_prep_label: 'प्रतियोगी परीक्षा तैयारी',
    exam_weightage_title: 'अध्याय वेटेज',
    exam_weightage_sub: 'जानें कौन से अध्याय अधिक महत्वपूर्ण हैं',
    exam_pyq_title: 'PYQ बैंक',
    exam_pyq_sub: 'वर्ष, विषय और कठिनाई से फ़िल्टर करें',
    exam_mock_title: 'मॉक टेस्ट',
    exam_mock_sub: 'अनुमानित रैंक और स्कोर विश्लेषण पाएँ',
    exam_prep_tools: 'तैयारी के साधन',
    exam_quick_stats: 'त्वरित आँकड़े',
    exam_stat_questions: 'कुल प्रश्न',
    exam_stat_marks: 'कुल अंक',
    exam_stat_duration: 'अवधि',
    exam_stat_chapters: 'अध्याय',
    exam_stat_pyqs: 'PYQ उपलब्ध',
    exam_chapters: 'अध्याय',

    // ClassesPage
    classes_title: 'अपनी कक्षा चुनें',
    classes_sub: 'विषय और टॉपिक देखने के लिए कक्षा चुनें',

    // SearchPage
    search_page_title: 'खोजें',
    search_page_placeholder: 'टॉपिक, कक्षा, शिक्षक खोजें...',
    search_no_results: 'कोई परिणाम नहीं मिला',
    search_browse_classes: 'कक्षाएँ देखें',
    search_min_chars: 'खोजने के लिए कम से कम 2 अक्षर टाइप करें।',
    search_try: 'इन्हें खोजें:',
    search_section_topics: 'टॉपिक',
    search_section_subjects: 'विषय',
    search_section_classes: 'कक्षाएँ',
    search_section_teachers: 'शिक्षक',

    // WeightagePage
    wt_title: 'अध्याय वेटेज',
    wt_subtitle: 'में सबसे अधिक आने वाले अध्याय जानें',
    wt_sort: 'क्रमबद्ध:',
    wt_sort_weight: 'वेटेज से',
    wt_sort_diff: 'कठिनाई से',
    wt_sort_alpha: 'A–Z',
    wt_total_chapters: 'कुल अध्याय',
    wt_must_do: 'अनिवार्य',
    wt_avg_q: 'औसत प्रश्न',
    wt_per_paper: 'प्रति पेपर',
    wt_priority_must: 'अनिवार्य',
    wt_priority_high: 'उच्च',
    wt_priority_medium: 'मध्यम',
    wt_priority_low: 'कम',
    wt_diff_hard: 'कठिन',
    wt_diff_easy: 'आसान',

    // MockTestListPage
    mock_list_title: 'मॉक टेस्ट',
    mock_list_correct_mark: 'सही उत्तर के अंक',
    mock_list_wrong_mark: 'गलत उत्तर पर कटौती',
    mock_list_zero: 'न दिए पर 0',
    mock_list_timer: 'टाइमर रियल-टाइम चलता है',
    mock_stat_questions: 'प्रश्न',
    mock_stat_total_marks: 'कुल अंक',
    mock_stat_duration: 'अवधि',
    mock_stat_pattern: 'पैटर्न',
    mock_last_attempt: '✅ पिछला प्रयास',
    mock_retake: '🔁 दोबारा दें',
    mock_start_test: '▶ शुरू करें',
    mock_correct_count: 'सही',
    mock_wrong_count: 'गलत',
    mock_coming_soon: 'मॉक टेस्ट जल्द आएंगे',

    // MockTestTakerPage
    mtake_subj_dist: 'विषय वितरण',
    mtake_questions: 'प्रश्न',
    mtake_marking: 'अंकन',
    mtake_start_warning: 'शुरू करने के बाद टाइमर चालू हो जाता है। समय समाप्त होने पर टेस्ट स्वतः सबमिट हो जाएगा।',
    mtake_back: '← वापस',
    mtake_submit: 'सबमिट करें',
    mtake_completed: 'टेस्ट पूर्ण!',
    mtake_out_of: 'में से',
    mtake_marks: 'अंक',
    mtake_correct: 'सही',
    mtake_wrong: 'गलत',
    mtake_skipped: 'छोड़े',
    mtake_score_pct: 'स्कोर %',
    mtake_subj_breakdown: 'विषय विश्लेषण',
    mtake_answer_review: 'उत्तर समीक्षा',
    mtake_solution: 'समाधान:',
    mtake_not_attempted: 'नहीं किया',
    mtake_all_tests: '← सभी टेस्ट',
    mtake_retake: '🔁 दोबारा दें',

    // TeachersPage
    tpage_title: 'अपना मेंटर खोजें',
    tpage_sub: 'विशेषज्ञ शिक्षक देखने के लिए अपनी कक्षा चुनें।',
    tpage_select_class: 'अपनी कक्षा चुनें',
    tpage_select_sub: 'हर कक्षा के लिए हमारे पास विषय विशेषज्ञ हैं। अपनी कक्षा चुनें।',
    tpage_browse: 'शिक्षक देखें →',

    // TeachersListPage
    tlist_available: 'उपलब्ध मेंटर',
    tlist_available_sub: 'अपॉइंटमेंट बुक करने के लिए प्रोफाइल पर क्लिक करें।',
    tlist_found: 'शिक्षक मिले',
    tlist_loading: 'आपके लिए सर्वश्रेष्ठ शिक्षक खोजे जा रहे हैं...',
    tlist_none: 'इस कक्षा के लिए अभी कोई शिक्षक नहीं मिला',
    tlist_none_sub: 'हम लगातार नए विशेषज्ञ जोड़ रहे हैं। जल्द वापस आएँ!',
    tlist_view_other: 'अन्य कक्षाएँ देखें',

    // Footer
    footer_desc: 'कक्षा 6–12, JEE और NEET के लिए भारत का सबसे व्यापक मुफ्त शिक्षा प्लेटफ़ॉर्म।',
    footer_classes: 'कक्षाएँ',
    footer_competitive: 'प्रतियोगी',
    footer_important: 'महत्वपूर्ण',
    footer_made_in: '🇮🇳 भारत में बना',
    footer_free: '📚 हमेशा मुफ्त',

    // MyBookingsPage
    bookings_title: 'मेरी बुकिंग',
    bookings_sub: 'आपके सभी सत्र अनुरोध और आगामी कक्षाएँ',
    bookings_login_required: 'लॉगिन आवश्यक है',
    bookings_login_sub: 'बुकिंग इतिहास देखने के लिए लॉगिन करें।',
    bookings_loading: 'बुकिंग लोड हो रही है…',
    bookings_none: 'अभी कोई बुकिंग नहीं',
    bookings_none_sub: 'शुरू करने के लिए किसी शिक्षक के साथ सत्र बुक करें।',
    bookings_find_teacher: 'शिक्षक ढूँढें',
    bookings_upcoming: 'आगामी',
    bookings_past: 'पिछले सत्र',
    bookings_rate: '⭐ सत्र रेट करें',
    bookings_reviewed: '✅ समीक्षा हो गई — धन्यवाद!',
    bookings_cancel: '✕ बुकिंग रद्द करें',
    bookings_cancelling: '⏳ रद्द हो रहा है…',
    bookings_join: '📹 मीट जॉइन करें',
    bookings_date: 'तारीख',
    bookings_time: 'समय',
    bookings_name: 'नाम',
    bookings_phone: 'फ़ोन',

    // NotFoundPage
    notfound_title: 'पेज नहीं मिला',
    notfound_sub: 'यह पेज अस्तित्व में नहीं है। शायद यह स्थानांतरित हो गया हो या URL गलत टाइप हुआ हो।',
    notfound_home: 'होमपेज पर जाएँ',

    // DashboardPage
    dash_login_title: 'डैशबोर्ड देखने के लिए लॉगिन करें',
    dash_login_sub: 'अपनी प्रगति ट्रैक करें, बैज अर्जित करें और पढ़ाई की योजना बनाएँ।',
    dash_login_btn: 'लॉगिन / साइन अप',
    dash_greeting_morning: 'सुप्रभात',
    dash_greeting_afternoon: 'नमस्कार',
    dash_greeting_evening: 'शुभ संध्या',
  },
};

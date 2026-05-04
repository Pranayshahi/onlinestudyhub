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
  },
};

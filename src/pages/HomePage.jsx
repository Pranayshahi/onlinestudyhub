import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { getAllClasses } from '../data/curriculum';
import SEO from '../components/SEO';

const SUBJECTS = [
  { icon: '📐', name: 'Mathematics', desc: 'Algebra · Calculus · Geometry', color: '#4f46e5', bg: '#eef2ff', link: '/class/class-10' },
  { icon: '⚛️', name: 'Physics',     desc: 'Mechanics · Electricity · Optics', color: '#7c3aed', bg: '#f5f3ff', link: '/class/class-11' },
  { icon: '🧪', name: 'Chemistry',   desc: 'Organic · Inorganic · Physical', color: '#059669', bg: '#ecfdf5', link: '/class/class-11' },
  { icon: '🧬', name: 'Biology',     desc: 'Genetics · Ecology · Physiology', color: '#0891b2', bg: '#ecfeff', link: '/class/class-11' },
  { icon: '📖', name: 'English',     desc: 'Grammar · Literature · Writing', color: '#d97706', bg: '#fffbeb', link: '/class/class-9' },
  { icon: '🌍', name: 'Social Sci.', desc: 'History · Geography · Civics',   color: '#dc2626', bg: '#fef2f2', link: '/class/class-8' },
];

// ── Step illustrations (inline SVG) ────────────────────────────
function IllustrationChoose() {
  return (
    <svg viewBox="0 0 220 180" fill="none" xmlns="http://www.w3.org/2000/svg" style={{width:'100%',height:'100%'}}>
      {/* Background */}
      <rect width="220" height="180" rx="20" fill="url(#bg1)"/>
      <defs>
        <linearGradient id="bg1" x1="0" y1="0" x2="220" y2="180" gradientUnits="userSpaceOnUse">
          <stop stopColor="#eef2ff"/>
          <stop offset="1" stopColor="#e0e7ff"/>
        </linearGradient>
      </defs>
      {/* Laptop body */}
      <rect x="35" y="30" width="150" height="100" rx="10" fill="#1e1b4b"/>
      <rect x="40" y="35" width="140" height="90" rx="7" fill="#fff"/>
      {/* Laptop base */}
      <rect x="20" y="130" width="180" height="10" rx="5" fill="#c7d2fe"/>
      <rect x="85" y="138" width="50" height="6" rx="3" fill="#a5b4fc"/>
      {/* Screen content – grid of subject cards */}
      <rect x="48" y="42" width="38" height="28" rx="5" fill="#eef2ff"/>
      <rect x="91" y="42" width="38" height="28" rx="5" fill="#ecfdf5"/>
      <rect x="134" y="42" width="38" height="28" rx="5" fill="#fff7ed"/>
      <rect x="48" y="76" width="38" height="28" rx="5" fill="#f5f3ff"/>
      <rect x="91" y="76" width="38" height="28" rx="5" fill="#fef2f2"/>
      <rect x="134" y="76" width="38" height="28" rx="5" fill="#ecfeff"/>
      {/* Subject labels */}
      <text x="67" y="60" textAnchor="middle" fontSize="14" fill="#4f46e5">📐</text>
      <text x="110" y="60" textAnchor="middle" fontSize="14" fill="#059669">🧪</text>
      <text x="153" y="60" textAnchor="middle" fontSize="14" fill="#d97706">⚡</text>
      <text x="67" y="94" textAnchor="middle" fontSize="14" fill="#7c3aed">🧬</text>
      <text x="110" y="94" textAnchor="middle" fontSize="14" fill="#dc2626">📖</text>
      <text x="153" y="94" textAnchor="middle" fontSize="14" fill="#0891b2">🌍</text>
      {/* Cursor / selection glow on Math */}
      <rect x="46" y="40" width="42" height="32" rx="6" fill="none" stroke="#4f46e5" strokeWidth="2.5" strokeDasharray="0"/>
      {/* Cursor pointer */}
      <polygon points="155,148 163,162 166,155 174,158" fill="#4f46e5"/>
      {/* Floating badge "CBSE" */}
      <rect x="155" y="18" width="46" height="18" rx="9" fill="#4f46e5"/>
      <text x="178" y="30" textAnchor="middle" fontSize="9" fill="#fff" fontWeight="bold" fontFamily="sans-serif">CBSE ✓</text>
      {/* Floating badge "JEE" */}
      <rect x="18" y="18" width="36" height="18" rx="9" fill="#7c3aed"/>
      <text x="36" y="30" textAnchor="middle" fontSize="9" fill="#fff" fontWeight="bold" fontFamily="sans-serif">JEE 🏆</text>
    </svg>
  );
}

function IllustrationStudy() {
  return (
    <svg viewBox="0 0 220 180" fill="none" xmlns="http://www.w3.org/2000/svg" style={{width:'100%',height:'100%'}}>
      <rect width="220" height="180" rx="20" fill="url(#bg2)"/>
      <defs>
        <linearGradient id="bg2" x1="0" y1="0" x2="220" y2="180" gradientUnits="userSpaceOnUse">
          <stop stopColor="#f5f3ff"/>
          <stop offset="1" stopColor="#ede9fe"/>
        </linearGradient>
        <linearGradient id="bookL" x1="110" y1="55" x2="60" y2="140" gradientUnits="userSpaceOnUse">
          <stop stopColor="#818cf8"/>
          <stop offset="1" stopColor="#4f46e5"/>
        </linearGradient>
        <linearGradient id="bookR" x1="110" y1="55" x2="160" y2="140" gradientUnits="userSpaceOnUse">
          <stop stopColor="#a5b4fc"/>
          <stop offset="1" stopColor="#6366f1"/>
        </linearGradient>
      </defs>
      {/* Open book left page */}
      <path d="M110 55 L55 65 L50 140 L110 130 Z" fill="url(#bookL)" rx="4"/>
      {/* Open book right page */}
      <path d="M110 55 L165 65 L170 140 L110 130 Z" fill="url(#bookR)"/>
      {/* Book spine */}
      <rect x="107" y="53" width="6" height="79" rx="3" fill="#312e81"/>
      {/* Lines on left page */}
      <line x1="65" y1="83" x2="102" y2="81" stroke="rgba(255,255,255,.5)" strokeWidth="2" strokeLinecap="round"/>
      <line x1="63" y1="93" x2="100" y2="91" stroke="rgba(255,255,255,.5)" strokeWidth="2" strokeLinecap="round"/>
      <line x1="61" y1="103" x2="98" y2="101" stroke="rgba(255,255,255,.5)" strokeWidth="2" strokeLinecap="round"/>
      <line x1="59" y1="113" x2="96" y2="111" stroke="rgba(255,255,255,.5)" strokeWidth="2" strokeLinecap="round"/>
      {/* Formula on right page */}
      <text x="138" y="90" textAnchor="middle" fontSize="10" fill="#fff" fontWeight="bold" fontFamily="monospace">E=mc²</text>
      <text x="138" y="107" textAnchor="middle" fontSize="9" fill="rgba(255,255,255,.8)" fontFamily="monospace">F=ma</text>
      <text x="138" y="122" textAnchor="middle" fontSize="9" fill="rgba(255,255,255,.8)" fontFamily="monospace">v²=u²+2as</text>
      {/* Lightbulb floating */}
      <circle cx="172" cy="38" r="16" fill="#fef9c3" stroke="#fbbf24" strokeWidth="2"/>
      <text x="172" y="44" textAnchor="middle" fontSize="16">💡</text>
      {/* Checklist floating left */}
      <rect x="18" y="85" width="28" height="44" rx="6" fill="#fff" stroke="#c7d2fe" strokeWidth="1.5"/>
      <text x="24" y="101" fontSize="8" fill="#4f46e5">✓</text>
      <text x="24" y="113" fontSize="8" fill="#4f46e5">✓</text>
      <text x="24" y="125" fontSize="8" fill="#9ca3af">○</text>
      {/* Stars */}
      <text x="30" y="35" fontSize="12" fill="#fbbf24">★</text>
      <text x="185" y="130" fontSize="10" fill="#fbbf24">★</text>
      <text x="48" y="158" fontSize="10" fill="#a5b4fc">★</text>
    </svg>
  );
}

function IllustrationBook() {
  return (
    <svg viewBox="0 0 220 180" fill="none" xmlns="http://www.w3.org/2000/svg" style={{width:'100%',height:'100%'}}>
      <rect width="220" height="180" rx="20" fill="url(#bg3)"/>
      <defs>
        <linearGradient id="bg3" x1="0" y1="0" x2="220" y2="180" gradientUnits="userSpaceOnUse">
          <stop stopColor="#fff7ed"/>
          <stop offset="1" stopColor="#ffedd5"/>
        </linearGradient>
      </defs>
      {/* Video call frame */}
      <rect x="22" y="28" width="176" height="112" rx="12" fill="#1e1b4b"/>
      <rect x="27" y="33" width="166" height="102" rx="8" fill="#0f172a"/>
      {/* Teacher side (left half) */}
      <rect x="27" y="33" width="80" height="102" rx="8" fill="#1e293b"/>
      {/* Teacher avatar */}
      <circle cx="67" cy="72" r="22" fill="#334155"/>
      <circle cx="67" cy="65" r="12" fill="#94a3b8"/>
      <ellipse cx="67" cy="88" rx="18" ry="10" fill="#475569"/>
      {/* Teacher name tag */}
      <rect x="40" y="108" width="54" height="16" rx="4" fill="#f97316"/>
      <text x="67" y="119" textAnchor="middle" fontSize="7.5" fill="#fff" fontWeight="bold" fontFamily="sans-serif">Mr. Sharma</text>
      {/* Student side (right half) */}
      <rect x="111" y="33" width="82" height="102" rx="8" fill="#1a1929"/>
      {/* Student avatar */}
      <circle cx="152" cy="72" r="22" fill="#312e81"/>
      <circle cx="152" cy="65" r="12" fill="#818cf8"/>
      <ellipse cx="152" cy="88" rx="18" ry="10" fill="#4338ca"/>
      {/* Student name */}
      <rect x="126" y="108" width="52" height="16" rx="4" fill="#4f46e5"/>
      <text x="152" y="119" textAnchor="middle" fontSize="7.5" fill="#fff" fontWeight="bold" fontFamily="sans-serif">You (Student)</text>
      {/* Control bar */}
      <rect x="27" y="126" width="166" height="9" rx="0" fill="#0f172a"/>
      {/* Mic/Video icons */}
      <circle cx="90" cy="130" r="5" fill="#ef4444"/>
      <circle cx="110" cy="130" r="5" fill="#22c55e"/>
      <circle cx="130" cy="130" r="5" fill="#3b82f6"/>
      {/* Calendar badge floating */}
      <rect x="148" y="14" width="46" height="20" rx="8" fill="#f97316"/>
      <text x="171" y="27" textAnchor="middle" fontSize="8.5" fill="#fff" fontWeight="bold" fontFamily="sans-serif">📅 Book Now</text>
      {/* Signal / wifi dots */}
      <text x="22" y="158" fontSize="9" fill="#fb923c">● Live</text>
      {/* Star rating */}
      <text x="155" y="158" fontSize="9" fill="#fbbf24">★★★★★</text>
    </svg>
  );
}

const HOW_IT_WORKS = [
  { step: '01', Illustration: IllustrationChoose, title: 'Pick your class & subject', desc: 'Choose from Class 6–12, JEE or NEET. All CBSE curriculum covered with topic-wise notes.' },
  { step: '02', Illustration: IllustrationStudy,  title: 'Study topic-by-topic',     desc: 'Clear explanations, formulas, diagrams and exam-important Q&A for every topic.' },
  { step: '03', Illustration: IllustrationBook,   title: 'Book a 1-on-1 session',   desc: 'Still confused? Book a live video session with an expert teacher. Doubts cleared instantly.' },
];

const TESTIMONIALS = [
  { name: 'Priya Sharma', class: 'Class 12, Delhi', avatar: '👩‍🎓', rating: 5, text: 'OnlineStudyHub helped me crack JEE Main with 98 percentile! The topic-wise notes and mock tests are exactly what I needed. Completely free too!' },
  { name: 'Rahul Verma',  class: 'Class 10, Mumbai', avatar: '👨‍🎓', rating: 5, text: 'The Q&A section at the end of each topic is brilliant. It directly matches board exam patterns. Scored 95% in my boards!' },
  { name: 'Ananya Iyer',  class: 'NEET Aspirant, Chennai', avatar: '👩‍🔬', rating: 5, text: 'NEET Biology coverage is incredible. The AI doubt solver saved me hours every day. I got into my dream medical college!' },
];

const TRENDING = [
  { label: 'Quadratic Equations', path: '/class/class-10/subject/mathematics/topic/quadratic-equations' },
  { label: "Newton's Laws",       path: '/class/class-11/subject/physics/topic/laws-of-motion-11' },
  { label: 'Organic Chemistry',   path: '/class/class-12/subject/chemistry/topic/organic-chemistry-12' },
  { label: 'Cell Biology',        path: '/class/class-11/subject/biology/topic/cell-biology-11' },
  { label: 'Photosynthesis',      path: '/class/class-12/subject/biology/topic/photosynthesis-neet' },
  { label: 'Trigonometry',        path: '/class/class-11/subject/mathematics/topic/trigonometry' },
  { label: 'Electrostatics',      path: '/class/class-12/subject/physics/topic/electrostatics' },
  { label: 'Periodic Table',      path: '/class/class-10/subject/chemistry/topic/periodic-classification-10' },
  { label: 'Life Processes',      path: '/class/class-10/subject/biology/topic/life-processes' },
  { label: 'Integration',         path: '/class/class-12/subject/mathematics/topic/integrals' },
  { label: 'Wave Optics',         path: '/class/class-12/subject/physics/topic/optics-12' },
  { label: 'Genetics',            path: '/class/class-12/subject/biology/topic/genetics' },
];

const STATS = [
  { num: '50,000+', label: 'Students Learning', icon: '🎓' },
  { num: '200+',    label: 'Expert Teachers',   icon: '👨‍🏫' },
  { num: '2,000+',  label: 'Topics Covered',    icon: '📚' },
  { num: '4.9★',    label: 'Average Rating',    icon: '⭐' },
];

function StarRating({ count = 5 }) {
  return (
    <div style={{ display: 'flex', gap: 2 }}>
      {Array.from({ length: count }).map((_, i) => (
        <span key={i} style={{ color: '#f59e0b', fontSize: '1rem' }}>★</span>
      ))}
    </div>
  );
}

export default function HomePage() {
  const navigate = useNavigate();
  const classes = getAllClasses();
  const [searchQ, setSearchQ] = useState('');

  function handleSearch(e) {
    e.preventDefault();
    if (searchQ.trim()) navigate(`/search?q=${encodeURIComponent(searchQ.trim())}`);
  }

  return (
    <div style={{ overflowX: 'hidden' }}>
      <SEO
        title="Free Online Study for Class 6-12, JEE & NEET — India's #1 Study Hub"
        description="OnlineStudyHub — India's free online study platform for Class 6 to 12, JEE and NEET. Study CBSE topics, find verified teachers, and book 1-on-1 sessions. 100% Free."
        path="/"
        schemas={[
          {
            '@context': 'https://schema.org',
            '@type': 'FAQPage',
            mainEntity: [
              {
                '@type': 'Question',
                name: 'Is OnlineStudyHub free for students?',
                acceptedAnswer: { '@type': 'Answer', text: 'Yes! All study materials, topic notes, and AI doubt solving on OnlineStudyHub are 100% free for students. 1-on-1 teacher sessions are available at affordable fees.' },
              },
              {
                '@type': 'Question',
                name: 'Which classes does OnlineStudyHub cover?',
                acceptedAnswer: { '@type': 'Answer', text: 'OnlineStudyHub covers Class 6, 7, 8, 9, 10, 11, and 12 following the CBSE curriculum, plus dedicated JEE (IIT) and NEET preparation content.' },
              },
              {
                '@type': 'Question',
                name: 'Can I find a teacher for 1-on-1 online tuition?',
                acceptedAnswer: { '@type': 'Answer', text: 'Yes. OnlineStudyHub has verified subject teachers for all classes from 6 to 12. You can book a private online session directly through the platform via Google Meet.' },
              },
              {
                '@type': 'Question',
                name: 'Does OnlineStudyHub have JEE and NEET preparation?',
                acceptedAnswer: { '@type': 'Answer', text: 'Yes! We have dedicated JEE and NEET sections with chapter weightage analysis, previous year question banks, mock tests, and topic-wise study material.' },
              },
              {
                '@type': 'Question',
                name: 'How can I solve doubts instantly on OnlineStudyHub?',
                acceptedAnswer: { '@type': 'Answer', text: 'Use the free AI Doubt Solver available on every topic page. Ask any question in text or upload an image of your problem — get instant, detailed answers with step-by-step explanations.' },
              },
            ],
          },
          {
            '@context': 'https://schema.org',
            '@type': 'EducationalOrganization',
            name: 'OnlineStudyHub',
            url: 'https://www.onlinestudyhub.com',
            logo: 'https://www.onlinestudyhub.com/favicon-192.png',
            description: 'India\'s free online study platform for Class 6-12, JEE and NEET students',
            address: { '@type': 'PostalAddress', addressCountry: 'IN' },
            audience: { '@type': 'EducationalAudience', educationalRole: 'student' },
            teaches: ['Class 6', 'Class 7', 'Class 8', 'Class 9', 'Class 10', 'Class 11', 'Class 12', 'JEE', 'NEET'],
          },
        ]}
      />

      {/* ── HERO ─────────────────────────────────────────────────── */}
      <section className="hero">
        <div className="container hero-content hero-two-col">

          {/* Left */}
          <div className="hero-text">
            {/* Eyebrow — signals who this is for immediately */}
            <div className="hero-eyebrow" style={{ flexWrap: 'wrap', lineHeight: 1.4, borderRadius: 16 }}>
              <span className="hero-eyebrow-dot" />
              100% Free <span style={{opacity:0.5}}>·</span> Class 6-12 <span style={{opacity:0.5}}>·</span> JEE <span style={{opacity:0.5}}>·</span> NEET
            </div>

            {/* H1 — clear outcome in 2 seconds */}
            <h1 style={{ fontSize: 'clamp(1.75rem, 8vw, 3.4rem)', fontWeight: 900, lineHeight: 1.13, marginBottom: '1rem', wordBreak: 'break-word' }}>
              Crack JEE/NEET Faster<br />
              with <span className="accent">AI-Powered</span><br />
              Study Assistant 🚀
            </h1>

            {/* One-liner benefit — scannable */}
            <p style={{ fontSize: '1.05rem', color: 'rgba(255,255,255,.82)', lineHeight: 1.6, marginBottom: '1.5rem', maxWidth: 480 }}>
              Instant doubt solving · Smart notes · 1-on-1 teachers<br />
              <strong style={{ color: '#4ade80' }}>Everything free for every Indian student.</strong>
            </p>

            {/* Feature proof points — 4 quick wins */}
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '.55rem', marginBottom: '1.75rem' }}>
              {[
                { icon: '🤖', text: 'AI Doubt Solver' },
                { icon: '📚', text: '2,000+ Topics' },
                { icon: '👩‍🏫', text: 'Expert Teachers' },
                { icon: '🎓', text: 'Free Certificate' },
              ].map(f => (
                <span key={f.text} style={{
                  display: 'inline-flex', alignItems: 'center', gap: '.35rem',
                  background: 'rgba(255,255,255,.1)', border: '1px solid rgba(255,255,255,.18)',
                  borderRadius: 999, padding: '.3rem .85rem',
                  fontSize: '.8rem', fontWeight: 600, color: 'rgba(255,255,255,.9)',
                }}>
                  {f.icon} {f.text}
                </span>
              ))}
            </div>

            {/* Primary CTA — single dominant action */}
            <div className="hero-actions" style={{ marginBottom: '1.5rem' }}>
              <Link
                to="/classes"
                className="btn btn-primary"
                style={{ padding: '1rem 2.5rem', fontSize: '1.07rem', fontWeight: 900, borderRadius: 12, boxShadow: '0 6px 24px rgba(249,115,22,0.45)', letterSpacing: '.01em' }}
              >
                🚀 Start Free Now
              </Link>
              <Link to="/teachers" className="btn" style={{ background: 'rgba(255,255,255,.1)', color: '#fff', border: '1.5px solid rgba(255,255,255,.25)', padding: '1rem 1.75rem', fontSize: '.95rem', borderRadius: 12, fontWeight: 700 }}>
                👨‍🏫 Book a Free Trial
              </Link>
            </div>

            {/* Social proof */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '.75rem', marginBottom: '1.5rem', flexWrap: 'wrap' }}>
              <div style={{ display: 'flex' }}>
                {['👩‍🎓','👨‍🎓','👩‍🔬','👨‍💻','👩‍🏫'].map((a,i) => (
                  <div key={i} style={{ width: 32, height: 32, borderRadius: '50%', background: `hsl(${i*50+200},70%,55%)`, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1rem', marginLeft: i ? -8 : 0, border: '2px solid #312e81' }}>{a}</div>
                ))}
              </div>
              <div>
                <div style={{ display: 'flex', gap: 2 }}>{Array.from({length:5}).map((_,i)=><span key={i} style={{color:'#fbbf24',fontSize:'.85rem'}}>★</span>)}</div>
                <div style={{ fontSize: '.75rem', color: 'rgba(255,255,255,.65)' }}>Trusted by <strong style={{color:'#fff'}}>50,000+</strong> students across India</div>
              </div>
            </div>

            {/* Search — secondary action, below the fold intent */}
            <form onSubmit={handleSearch} className="hero-search-form">
              <span className="hero-search-icon">🔍</span>
              <input
                className="hero-search-input"
                placeholder="Search a topic — e.g. Quadratic Equations, Photosynthesis…"
                value={searchQ}
                onChange={e => setSearchQ(e.target.value)}
              />
              <button type="submit" className="hero-search-btn">Search</button>
            </form>
            <div style={{ display: 'flex', gap: '.5rem', flexWrap: 'wrap', marginTop: '.6rem' }}>
              {['Class 10 Maths', 'JEE Physics', 'NEET Biology', 'Class 12 Chemistry'].map(tag => (
                <button key={tag} onClick={() => navigate(`/search?q=${encodeURIComponent(tag)}`)}
                  style={{ background: 'rgba(255,255,255,.08)', border: '1px solid rgba(255,255,255,.15)', color: 'rgba(255,255,255,.7)', borderRadius: 99, padding: '.22rem .65rem', fontSize: '.73rem', fontWeight: 600, cursor: 'pointer' }}
                >
                  {tag}
                </button>
              ))}
            </div>
          </div>

          {/* Right — illustration */}
          <div className="hero-illustration" aria-hidden="true">
            <svg viewBox="0 0 480 420" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: '100%', maxWidth: 480, filter: 'drop-shadow(0 24px 48px rgba(0,0,0,0.35))' }}>
              <rect x="40" y="310" width="400" height="18" rx="9" fill="#6d28d9" opacity=".55"/>
              <rect x="70" y="326" width="18" height="60" rx="6" fill="#6d28d9" opacity=".4"/>
              <rect x="392" y="326" width="18" height="60" rx="6" fill="#6d28d9" opacity=".4"/>
              <rect x="120" y="255" width="240" height="58" rx="10" fill="#1e1b4b"/>
              <rect x="125" y="258" width="230" height="50" rx="8" fill="#2d2a6e"/>
              {[0,1,2].map(row=>(
                <g key={row}>{Array.from({length:10}).map((_,i)=>(
                  <rect key={i} x={135+i*21} y={263+row*14} width="17" height="10" rx="3" fill="#4f46e5" opacity=".5"/>
                ))}</g>
              ))}
              <rect x="210" y="295" width="60" height="14" rx="5" fill="#4f46e5" opacity=".35"/>
              <rect x="110" y="110" width="260" height="155" rx="12" fill="#0f0e2a"/>
              <rect x="116" y="116" width="248" height="143" rx="9" fill="#1a1040"/>
              <rect x="110" y="258" width="260" height="6" rx="3" fill="#312e81"/>
              <rect x="116" y="116" width="248" height="22" rx="9" fill="#111827"/>
              <circle cx="128" cy="127" r="4" fill="#ef4444" opacity=".8"/>
              <circle cx="142" cy="127" r="4" fill="#f59e0b" opacity=".8"/>
              <circle cx="156" cy="127" r="4" fill="#10b981" opacity=".8"/>
              <rect x="168" y="121" width="140" height="12" rx="6" fill="#1f2937"/>
              <rect x="172" y="124" width="80" height="6" rx="3" fill="#4b5563"/>
              <rect x="122" y="144" width="236" height="108" rx="7" fill="#0f172a"/>
              <rect x="128" y="150" width="100" height="8" rx="4" fill="#4f46e5"/>
              <rect x="128" y="163" width="220" height="5" rx="3" fill="#374151"/>
              <rect x="128" y="172" width="180" height="5" rx="3" fill="#374151"/>
              <rect x="128" y="181" width="200" height="5" rx="3" fill="#374151"/>
              <rect x="128" y="194" width="80" height="22" rx="5" fill="#4f46e5" opacity=".25"/>
              <text x="136" y="209" fill="#a5b4fc" fontSize="11" fontFamily="monospace">E = mc²</text>
              <circle cx="310" cy="205" r="18" fill="#1e293b"/>
              <path d="M310 205 L310 187 A18 18 0 0 1 325.6 214 Z" fill="#4f46e5"/>
              <path d="M310 205 L325.6 214 A18 18 0 0 1 294.4 214 Z" fill="#f97316"/>
              <path d="M310 205 L294.4 214 A18 18 0 0 1 310 187 Z" fill="#10b981"/>
              <rect x="128" y="222" width="220" height="6" rx="3" fill="#1f2937"/>
              <rect x="128" y="222" width="150" height="6" rx="3" fill="#4f46e5"/>
              <text x="354" y="228" fill="#6366f1" fontSize="8">68%</text>
              <rect x="388" y="258" width="34" height="52" rx="4" fill="#f97316"/>
              <rect x="390" y="258" width="3" height="52" rx="2" fill="#ea580c"/>
              <rect x="388" y="212" width="34" height="48" rx="4" fill="#4f46e5"/>
              <rect x="390" y="212" width="3" height="48" rx="2" fill="#4338ca"/>
              <rect x="388" y="168" width="34" height="46" rx="4" fill="#10b981"/>
              <rect x="390" y="168" width="3" height="46" rx="2" fill="#059669"/>
              <text x="410" y="290" fill="white" fontSize="7" transform="rotate(-90 410 290)">Physics</text>
              <text x="410" y="243" fill="white" fontSize="7" transform="rotate(-90 410 243)">Maths</text>
              <text x="410" y="198" fill="white" fontSize="7" transform="rotate(-90 410 198)">Chemistry</text>
              <rect x="58" y="238" width="52" height="72" rx="5" fill="#fef3c7"/>
              <rect x="62" y="238" width="3" height="72" rx="2" fill="#fcd34d"/>
              {[0,1,2,3,4,5].map(i=>(<rect key={i} x="68" y={250+i*10} width="36" height="2" rx="1" fill="#d97706" opacity=".3"/>))}
              <rect x="90" y="228" width="6" height="36" rx="3" fill="#fbbf24" transform="rotate(25 93 246)"/>
              <rect x="90" y="228" width="6" height="6" rx="1" fill="#f87171" transform="rotate(25 93 246)"/>
              <polygon points="90,264 96,264 93,272" fill="#1f2937" transform="rotate(25 93 246)"/>
              <text x="52" y="145" fill="#f97316" fontSize="18" opacity=".9" style={{fontFamily:'monospace'}}>∫</text>
              <text x="390" y="120" fill="#a5b4fc" fontSize="15" opacity=".85" style={{fontFamily:'monospace'}}>π</text>
              <text x="72" y="195" fill="#34d399" fontSize="13" opacity=".8" style={{fontFamily:'monospace'}}>√x</text>
              <text x="400" y="155" fill="#fb923c" fontSize="12" opacity=".8" style={{fontFamily:'monospace'}}>∑</text>
              <text x="42" y="245" fill="#818cf8" fontSize="11" opacity=".7" style={{fontFamily:'monospace'}}>Δ</text>
              <text x="432" y="90" fill="#f472b6" fontSize="14" opacity=".75" style={{fontFamily:'monospace'}}>λ</text>
              <text x="60" y="110" fill="#60a5fa" fontSize="12" opacity=".7" style={{fontFamily:'monospace'}}>DNA</text>
              <rect x="300" y="72" width="120" height="36" rx="10" fill="#4f46e5" opacity=".95"/>
              <text x="315" y="86" fill="white" fontSize="8" fontWeight="bold">✓ Topic Completed!</text>
              <text x="315" y="98" fill="#a5b4fc" fontSize="7">Quadratic Equations</text>
              <polygon points="300,88 290,92 300,98" fill="#4f46e5" opacity=".95"/>
              <circle cx="420" cy="200" r="3" fill="#fbbf24" opacity=".8"/>
              <circle cx="50" cy="165" r="2" fill="#f472b6" opacity=".7"/>
              <circle cx="438" cy="260" r="2.5" fill="#34d399" opacity=".7"/>
              <circle cx="346" cy="127" r="4" fill="#10b981"/>
              <circle cx="346" cy="127" r="2" fill="#fff"/>
            </svg>
          </div>
        </div>
      </section>

      {/* ── STATS TRUST BAR ─────────────────────────────────────── */}
      <div className="stats-trust-bar">
        <div className="container">
          <div className="stats-trust-grid">
            {STATS.map(s => (
              <div key={s.label} className="stats-trust-item">
                <span className="stats-trust-icon">{s.icon}</span>
                <div>
                  <div className="stats-trust-num">{s.num}</div>
                  <div className="stats-trust-label">{s.label}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── TRENDING TOPICS ──────────────────────────────────────── */}
      <div style={{ background: '#fff', borderBottom: '1px solid #f3f4f6', padding: '.85rem 0' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
          <div style={{ flexShrink: 0, paddingLeft: '1.25rem', fontSize: '.78rem', fontWeight: 800, color: '#4f46e5', textTransform: 'uppercase', letterSpacing: '.06em', whiteSpace: 'nowrap' }}>🔥 Trending</div>
          {/* overflow:hidden must wrap ONLY the scrolling track, not the label */}
          <div style={{ flex: 1, overflow: 'hidden' }}>
            <div className="trending-track">
              {[...TRENDING, ...TRENDING].map((t, i) => (
                <Link key={i} to={t.path}
                  style={{ textDecoration: 'none', flexShrink: 0 }}>
                  <span className="trending-pill">{t.label}</span>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* ── HOW IT WORKS ─────────────────────────────────────────── */}
      <section className="section" style={{ background: '#f9fafb' }}>
        <div className="container">
          <div className="section-header">
            <div className="section-eyebrow">Simple Process</div>
            <h2 className="section-title">Study smarter in 3 steps</h2>
            <p className="section-sub">From confusion to confidence — here's how OnlineStudyHub works</p>
          </div>
          <div className="how-steps-grid">
            {HOW_IT_WORKS.map((step, i) => (
              <div key={step.step} className="how-step-card">
                <div className="how-step-number">{step.step}</div>
                <div className="how-step-illustration">
                  <step.Illustration />
                </div>
                <h3 className="how-step-title">{step.title}</h3>
                <p className="how-step-desc">{step.desc}</p>
                {i < HOW_IT_WORKS.length - 1 && <div className="how-step-arrow">→</div>}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── BROWSE BY CLASS ──────────────────────────────────────── */}
      <section className="section" style={{ background: '#fff' }}>
        <div className="container">
          <div className="section-header">
            <div className="section-eyebrow">All Classes</div>
            <h2 className="section-title">What class are you in?</h2>
            <p className="section-sub">Full CBSE curriculum — Class 6 to 12 plus JEE &amp; NEET</p>
          </div>
          <div className="classes-grid">
            {classes.map(cls => {
              const num = cls.id.replace('class-', '');
              const badgeColors = {
                '6':  { bg: '#dcfce7', color: '#16a34a' },
                '7':  { bg: '#dbeafe', color: '#1d4ed8' },
                '8':  { bg: '#fef9c3', color: '#a16207' },
                '9':  { bg: '#ffedd5', color: '#c2410c' },
                '10': { bg: '#fce7f3', color: '#be185d' },
                '11': { bg: '#ede9fe', color: '#7c3aed' },
                '12': { bg: '#e0e7ff', color: '#4338ca' },
              };
              const bc = badgeColors[num];
              return (
                <Link to={`/class/${cls.id}`} key={cls.id} style={{ textDecoration: 'none' }}>
                  <div className="class-card">
                    <div className="class-card-icon">
                      {bc ? (
                        <span style={{
                          display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
                          width: 48, height: 48, borderRadius: 14,
                          background: bc.bg, color: bc.color,
                          fontFamily: 'Nunito', fontWeight: 900, fontSize: '1.35rem',
                        }}>{num}</span>
                      ) : cls.emoji}
                    </div>
                    <div className="class-card-title">{cls.label}</div>
                    <div className="class-card-sub">{cls.board}</div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── SUBJECTS ─────────────────────────────────────────────── */}
      <section className="section" style={{ background: 'linear-gradient(180deg,#f9fafb 0%,#fff 100%)' }}>
        <div className="container">
          <div className="section-header">
            <div className="section-eyebrow">Subjects</div>
            <h2 className="section-title">Every subject. Every topic.</h2>
            <p className="section-sub">From foundational Class 6 topics to advanced JEE &amp; NEET concepts</p>
          </div>
          <div className="subjects-new-grid">
            {SUBJECTS.map(s => (
              <Link key={s.name} to={s.link} style={{ textDecoration: 'none' }}>
                <div className="subject-new-card" style={{ '--sc': s.color, '--sb': s.bg }}>
                  <div className="subject-new-icon">{s.icon}</div>
                  <div className="subject-new-name">{s.name}</div>
                  <div className="subject-new-desc">{s.desc}</div>
                  <div className="subject-new-cta">Explore →</div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── TESTIMONIALS ─────────────────────────────────────────── */}
      <section className="section" style={{ background: '#1e1b4b' }}>
        <div className="container">
          <div className="section-header">
            <div className="section-eyebrow" style={{ background: 'rgba(255,255,255,.1)', color: '#a5b4fc' }}>Student Stories</div>
            <h2 className="section-title" style={{ color: '#fff' }}>Real results. Real students.</h2>
            <p className="section-sub" style={{ color: 'rgba(255,255,255,.6)' }}>Thousands of students have improved their scores with OnlineStudyHub</p>
          </div>
          <div className="testimonials-grid">
            {TESTIMONIALS.map((t, i) => (
              <div key={i} className="testimonial-card">
                <div className="testimonial-stars"><StarRating /></div>
                <p className="testimonial-text">"{t.text}"</p>
                <div className="testimonial-author">
                  <div className="testimonial-avatar">{t.avatar}</div>
                  <div>
                    <div className="testimonial-name">{t.name}</div>
                    <div className="testimonial-class">{t.class}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── LIVE GROUP CLASSES ──────────────────────────────────── */}
      <section className="section" style={{ background: 'linear-gradient(135deg, #1e1b4b 0%, #4f46e5 100%)' }}>
        <div className="container">
          <div style={{ display: 'flex', gap: '3rem', alignItems: 'center', flexWrap: 'wrap' }}>
            <div style={{ flex: 1, minWidth: 280 }}>
              <div style={{ display: 'inline-flex', background: 'rgba(255,255,255,.15)', border: '1px solid rgba(255,255,255,.25)', padding: '.3rem .9rem', borderRadius: 999, fontSize: '.75rem', fontWeight: 700, color: '#fff', marginBottom: '1rem', textTransform: 'uppercase', letterSpacing: '.05em' }}>
                🎥 New Feature
              </div>
              <h2 style={{ fontFamily: 'Nunito', fontWeight: 900, fontSize: 'clamp(1.6rem,3.5vw,2.4rem)', color: '#fff', lineHeight: 1.2, marginBottom: '.75rem' }}>
                Live Group Classes.<br />Expert teachers. Lower cost.
              </h2>
              <p style={{ color: 'rgba(255,255,255,.75)', fontSize: '1rem', lineHeight: 1.65, marginBottom: '1.5rem', maxWidth: 480 }}>
                Join live sessions with 10–20 students. Real-time Q&A, interactive teaching, and a fraction of the cost of 1-on-1 tutoring.
              </p>
              <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                <Link to="/group-classes" className="btn btn-primary" style={{ padding: '.85rem 2rem', fontSize: '1rem', background: '#fff', color: '#4f46e5', fontWeight: 800, border: 'none' }}>
                  🔴 See Live Classes →
                </Link>
              </div>
            </div>
            <div style={{ flex: '0 0 auto', display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
              {[['10–20 Students', 'per live session'], ['₹0', 'many free sessions'], ['Live Q&A', 'ask in real-time'], ['Any Device', 'no app needed']].map(([big, small]) => (
                <div key={big} style={{ background: 'rgba(255,255,255,.1)', border: '1px solid rgba(255,255,255,.2)', borderRadius: 14, padding: '1rem 1.25rem', textAlign: 'center', minWidth: 110 }}>
                  <div style={{ fontFamily: 'Nunito', fontWeight: 900, fontSize: '1.15rem', color: '#fff', marginBottom: '.2rem' }}>{big}</div>
                  <div style={{ fontSize: '.72rem', color: 'rgba(255,255,255,.65)' }}>{small}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── TEACHER CTA ──────────────────────────────────────────── */}
      <section className="teacher-cta-section">
        <div className="container">
          <div className="teacher-cta-inner">
            <div className="teacher-cta-visual">
              <div className="teacher-cta-emoji-stack">
                {['👨‍🏫','👩‍🏫','🧑‍🏫'].map((e,i)=>(
                  <div key={i} className="teacher-cta-emoji-bubble" style={{ animationDelay: `${i*0.4}s` }}>{e}</div>
                ))}
              </div>
            </div>
            <div className="teacher-cta-content">
              <div className="section-eyebrow" style={{ background: '#fef3c7', color: '#d97706', marginBottom: '.75rem', display: 'inline-flex' }}>For Teachers</div>
              <h2 className="teacher-cta-title">Share your knowledge.<br />Earn on your schedule.</h2>
              <p className="teacher-cta-desc">
                Join 200+ teachers already earning on OnlineStudyHub. Set your own fee, choose your subjects, teach from anywhere. Students find you — you just teach.
              </p>
              <div className="teacher-cta-perks">
                {['✅ Set your own fee','✅ Flexible schedule','✅ Google Meet sessions','✅ Instant bookings'].map(p => (
                  <span key={p} className="teacher-cta-perk">{p}</span>
                ))}
              </div>
              <Link to="/teacher-portal" className="btn btn-primary" style={{ fontSize: '1rem', padding: '.85rem 2rem', marginTop: '1.25rem', display: 'inline-flex' }}>
                Start Teaching Today →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── FINAL CTA ────────────────────────────────────────────── */}
      <section className="final-cta-section">
        <div className="container" style={{ textAlign: 'center' }}>
          <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>🚀</div>
          <h2 className="final-cta-title">Your rank is waiting. Start today.</h2>
          <p className="final-cta-sub">
            No credit card. No subscription. Just open, study, and score.
          </p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap', marginTop: '2rem' }}>
            <Link to="/classes" className="btn btn-primary" style={{ padding: '1rem 2.25rem', fontSize: '1.05rem', fontWeight: 800 }}>
              Start Learning Free →
            </Link>
            <Link to="/exam/jee" className="btn" style={{ padding: '1rem 2rem', fontSize: '1rem', background: 'rgba(255,255,255,.12)', color: '#fff', border: '1px solid rgba(255,255,255,.3)', borderRadius: 10, fontWeight: 700 }}>
              🏆 JEE Prep
            </Link>
            <Link to="/exam/neet" className="btn" style={{ padding: '1rem 2rem', fontSize: '1rem', background: 'rgba(255,255,255,.12)', color: '#fff', border: '1px solid rgba(255,255,255,.3)', borderRadius: 10, fontWeight: 700 }}>
              🩺 NEET Prep
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

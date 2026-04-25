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

const HOW_IT_WORKS = [
  { step: '01', icon: '🎯', title: 'Pick your class & subject', desc: 'Choose from Class 6–12, JEE or NEET. All CBSE curriculum covered.' },
  { step: '02', icon: '📚', title: 'Study topic-by-topic', desc: 'Clear explanations, formulas, diagrams and exam-important Q&A for every topic.' },
  { step: '03', icon: '👨‍🏫', title: 'Book a 1-on-1 session', desc: 'Still confused? Book a live session with an expert teacher. Doubts cleared instantly.' },
];

const TESTIMONIALS = [
  { name: 'Priya Sharma', class: 'Class 12, Delhi', avatar: '👩‍🎓', rating: 5, text: 'OnlineStudyHub helped me crack JEE Main with 98 percentile! The topic-wise notes and mock tests are exactly what I needed. Completely free too!' },
  { name: 'Rahul Verma',  class: 'Class 10, Mumbai', avatar: '👨‍🎓', rating: 5, text: 'The Q&A section at the end of each topic is brilliant. It directly matches board exam patterns. Scored 95% in my boards!' },
  { name: 'Ananya Iyer',  class: 'NEET Aspirant, Chennai', avatar: '👩‍🔬', rating: 5, text: 'NEET Biology coverage is incredible. The AI doubt solver saved me hours every day. I got into my dream medical college!' },
];

const TRENDING = ['Quadratic Equations','Newton\'s Laws','Organic Chemistry','Cell Division','Photosynthesis','Trigonometry','Electrostatics','Periodic Table','Human Anatomy','Integration','Wave Optics','Genetics'];

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
        title="Best Online Tuition for Class 6-12, JEE & NEET in India"
        description="OnlineStudyHub offers expert online tuition for Class 6 to 12, JEE and NEET. Find verified teachers, study topic-wise notes, and book 1-on-1 sessions. CBSE curriculum."
        path="/"
      />

      {/* ── HERO ─────────────────────────────────────────────────── */}
      <section className="hero">
        <div className="container hero-content hero-two-col">

          {/* Left */}
          <div className="hero-text">
            <div className="hero-eyebrow">
              <span className="hero-eyebrow-dot" />
              #1 Free Learning Platform for Indian Students
            </div>

            <h1 style={{ fontSize: 'clamp(2rem,5vw,3.4rem)', fontWeight: 900, lineHeight: 1.13, marginBottom: '1.1rem' }}>
              Your Shortcut to<br />
              <span className="accent">Top Marks &amp;</span><br />
              Dream Colleges 🚀
            </h1>

            <p style={{ fontSize: '1.1rem', color: 'rgba(255,255,255,.78)', lineHeight: 1.75, marginBottom: '1.75rem', maxWidth: 520 }}>
              Expert notes, live doubt solving, AI tutor &amp; 1-on-1 teacher sessions — everything a Class 6–12, JEE or NEET student needs. <strong style={{ color: '#4ade80' }}>100% Free.</strong>
            </p>

            {/* Search bar — Coursera style */}
            <form onSubmit={handleSearch} className="hero-search-form">
              <span className="hero-search-icon">🔍</span>
              <input
                className="hero-search-input"
                placeholder="Search topics, subjects — e.g. Quadratic Equations"
                value={searchQ}
                onChange={e => setSearchQ(e.target.value)}
              />
              <button type="submit" className="hero-search-btn">Search</button>
            </form>

            <div style={{ display: 'flex', gap: '.6rem', flexWrap: 'wrap', marginTop: '.85rem', marginBottom: '1.75rem' }}>
              {['Class 10 Maths', 'JEE Physics', 'NEET Biology', 'Class 12 Chemistry'].map(tag => (
                <button key={tag} onClick={() => navigate(`/search?q=${encodeURIComponent(tag)}`)}
                  style={{ background: 'rgba(255,255,255,.12)', border: '1px solid rgba(255,255,255,.2)', color: 'rgba(255,255,255,.85)', borderRadius: 99, padding: '.28rem .75rem', fontSize: '.78rem', fontWeight: 600, cursor: 'pointer', transition: 'background .15s' }}
                  onMouseEnter={e => e.currentTarget.style.background = 'rgba(255,255,255,.22)'}
                  onMouseLeave={e => e.currentTarget.style.background = 'rgba(255,255,255,.12)'}
                >
                  {tag}
                </button>
              ))}
            </div>

            <div className="hero-actions">
              <Link to="/classes" className="btn btn-primary" style={{ padding: '0.88rem 2rem', fontSize: '1rem', fontWeight: 800 }}>
                Start Learning Free →
              </Link>
              <Link to="/teachers" className="btn" style={{ background: 'rgba(255,255,255,.12)', color: '#fff', border: '1px solid rgba(255,255,255,.25)', padding: '0.88rem 1.75rem', fontSize: '.95rem', borderRadius: 10, fontWeight: 700 }}>
                👨‍🏫 Find a Teacher
              </Link>
            </div>

            {/* Social proof strip */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '.75rem', marginTop: '1.5rem', flexWrap: 'wrap' }}>
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
                <Link key={i} to={`/search?q=${encodeURIComponent(t)}`}
                  style={{ textDecoration: 'none', flexShrink: 0 }}>
                  <span className="trending-pill">{t}</span>
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
                <div className="how-step-icon">{step.icon}</div>
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
            {classes.map(cls => (
              <Link to={`/class/${cls.id}`} key={cls.id} style={{ textDecoration: 'none' }}>
                <div className="class-card">
                  <div className="class-card-icon">{cls.emoji}</div>
                  <div className="class-card-title">{cls.label}</div>
                  <div className="class-card-sub">{cls.board}</div>
                </div>
              </Link>
            ))}
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

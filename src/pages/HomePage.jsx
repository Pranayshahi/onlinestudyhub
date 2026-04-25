import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { getAllClasses } from '../data/curriculum';
import SEO from '../components/SEO';

const FEATURES = [
  { icon: '📖', title: 'Topic-by-topic learning', desc: 'Every concept broken down into clear, focused topics with definitions and detailed explanations.', color: '#eef2ff', iconBg: '#4f46e5' },
  { icon: '❓', title: 'Important Q&A accordion', desc: 'Each topic ends with exam-important questions and detailed answers, ready for quick revision.', color: '#ecfdf5', iconBg: '#059669' },
  { icon: '🏆', title: 'JEE & NEET focused', desc: 'Advanced topics with deep explanations tailored specifically for IIT-JEE and NEET preparation.', color: '#fff7ed', iconBg: '#f97316' },
  { icon: '📱', title: 'Study anywhere', desc: 'Clean, mobile-friendly interface. Study at home, on the bus, or anywhere you have a phone.', color: '#f5f3ff', iconBg: '#7c3aed' },
];

const SUBJECTS_PREVIEW = [
  { icon: '📐', name: 'Mathematics', desc: 'Algebra, Calculus, Geometry, Statistics', color: '#4f46e5', bg: '#eef2ff' },
  { icon: '⚡', name: 'Physics', desc: 'Mechanics, Electricity, Optics, Modern Physics', color: '#7c3aed', bg: '#f5f3ff' },
  { icon: '🧪', name: 'Chemistry', desc: 'Organic, Inorganic, Physical Chemistry', color: '#059669', bg: '#ecfdf5' },
  { icon: '🌿', name: 'Biology', desc: 'Cell Biology, Genetics, Ecology, Human Physiology', color: '#0891b2', bg: '#ecfeff' },
  { icon: '📖', name: 'English', desc: 'Grammar, Literature, Writing Skills', color: '#d97706', bg: '#fffbeb' },
  { icon: '🌍', name: 'Social Science', desc: 'History, Geography, Civics, Economics', color: '#dc2626', bg: '#fef2f2' },
];

export default function HomePage() {
  const navigate = useNavigate();
  const classes = getAllClasses();

  return (
    <div>
      <SEO
        title="Best Online Tuition for Class 6-12, JEE & NEET in India"
        description="OnlineStudyHub offers expert online tuition for Class 6 to 12, JEE and NEET. Find verified teachers, study topic-wise notes, and book 1-on-1 sessions. CBSE curriculum."
        path="/"
        schema={{
          '@context': 'https://schema.org',
          '@type': 'ItemList',
          name: 'Classes Available',
          itemListElement: [
            { '@type': 'ListItem', position: 1, name: 'Class 6', url: 'https://www.onlinestudyhub.com/class/class-6' },
            { '@type': 'ListItem', position: 2, name: 'Class 7', url: 'https://www.onlinestudyhub.com/class/class-7' },
            { '@type': 'ListItem', position: 3, name: 'Class 8', url: 'https://www.onlinestudyhub.com/class/class-8' },
            { '@type': 'ListItem', position: 4, name: 'Class 9', url: 'https://www.onlinestudyhub.com/class/class-9' },
            { '@type': 'ListItem', position: 5, name: 'Class 10', url: 'https://www.onlinestudyhub.com/class/class-10' },
            { '@type': 'ListItem', position: 6, name: 'JEE', url: 'https://www.onlinestudyhub.com/class/jee' },
            { '@type': 'ListItem', position: 7, name: 'NEET', url: 'https://www.onlinestudyhub.com/class/neet' },
          ],
        }}
      />
      {/* Hero */}
      <section className="hero">
        <div className="container hero-content hero-two-col">
          {/* Left — text */}
          <div className="hero-text">
            <div className="hero-eyebrow">
              <span className="hero-eyebrow-dot" />
              Free for all students · Class 6–12 · JEE · NEET
            </div>
            <h1>
              Learn smarter with<br />
              <span className="accent">OnlineStudyHub</span>
            </h1>
            <p>
              Topic-by-topic explanations, exam-focused Q&amp;A, and detailed notes
              for every subject — Class 6 to Class 12, JEE &amp; NEET. Completely free.
            </p>
            <div className="hero-actions">
              <Link to="/classes" className="btn btn-primary" style={{ padding: '0.85rem 2rem', fontSize: '1rem' }}>
                Start Learning →
              </Link>
              <Link to="/class/jee" className="btn" style={{ background: 'rgba(255,255,255,0.12)', color: '#fff', border: '1px solid rgba(255,255,255,0.25)', padding: '0.85rem 2rem', fontSize: '1rem', borderRadius: 10 }}>
                🏆 JEE Preparation
              </Link>
            </div>

            {/* Stats */}
            <div className="hero-stats">
              {[
                { num: '7+', label: 'Classes Covered' },
                { num: '40+', label: 'Subjects Available' },
                { num: '200+', label: 'Topics with Q&A' },
                { num: '100%', label: 'Free Forever' },
              ].map(s => (
                <div key={s.label}>
                  <div className="hero-stat-num">{s.num}</div>
                  <div className="hero-stat-label">{s.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right — illustration */}
          <div className="hero-illustration" aria-hidden="true">
            <svg viewBox="0 0 480 420" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: '100%', maxWidth: 480, filter: 'drop-shadow(0 24px 48px rgba(0,0,0,0.35))' }}>

              {/* Desk */}
              <rect x="40" y="310" width="400" height="18" rx="9" fill="#6d28d9" opacity=".55"/>
              <rect x="70" y="326" width="18" height="60" rx="6" fill="#6d28d9" opacity=".4"/>
              <rect x="392" y="326" width="18" height="60" rx="6" fill="#6d28d9" opacity=".4"/>

              {/* Laptop base */}
              <rect x="120" y="255" width="240" height="58" rx="10" fill="#1e1b4b"/>
              <rect x="125" y="258" width="230" height="50" rx="8" fill="#2d2a6e"/>
              {/* Keyboard rows */}
              {[0,1,2].map(row => (
                <g key={row}>
                  {Array.from({length: 10}).map((_,i) => (
                    <rect key={i} x={135 + i*21} y={263 + row*14} width="17" height="10" rx="3" fill="#4f46e5" opacity=".5"/>
                  ))}
                </g>
              ))}
              {/* Touchpad */}
              <rect x="210" y="295" width="60" height="14" rx="5" fill="#4f46e5" opacity=".35"/>

              {/* Laptop screen */}
              <rect x="110" y="110" width="260" height="155" rx="12" fill="#0f0e2a"/>
              <rect x="116" y="116" width="248" height="143" rx="9" fill="#1a1040"/>
              {/* Hinge */}
              <rect x="110" y="258" width="260" height="6" rx="3" fill="#312e81"/>

              {/* Screen content — browser bar */}
              <rect x="116" y="116" width="248" height="22" rx="9" fill="#111827"/>
              <circle cx="128" cy="127" r="4" fill="#ef4444" opacity=".8"/>
              <circle cx="142" cy="127" r="4" fill="#f59e0b" opacity=".8"/>
              <circle cx="156" cy="127" r="4" fill="#10b981" opacity=".8"/>
              <rect x="168" y="121" width="140" height="12" rx="6" fill="#1f2937"/>
              <rect x="172" y="124" width="80" height="6" rx="3" fill="#4b5563"/>

              {/* Screen content — topic card */}
              <rect x="122" y="144" width="236" height="108" rx="7" fill="#0f172a"/>
              <rect x="128" y="150" width="100" height="8" rx="4" fill="#4f46e5"/>
              <rect x="128" y="163" width="220" height="5" rx="3" fill="#374151"/>
              <rect x="128" y="172" width="180" height="5" rx="3" fill="#374151"/>
              <rect x="128" y="181" width="200" height="5" rx="3" fill="#374151"/>
              {/* Formula block */}
              <rect x="128" y="194" width="80" height="22" rx="5" fill="#4f46e5" opacity=".25"/>
              <text x="136" y="209" fill="#a5b4fc" fontSize="11" fontFamily="monospace">E = mc²</text>
              {/* Mini pie chart */}
              <circle cx="310" cy="205" r="18" fill="#1e293b"/>
              <path d="M310 205 L310 187 A18 18 0 0 1 325.6 214 Z" fill="#4f46e5"/>
              <path d="M310 205 L325.6 214 A18 18 0 0 1 294.4 214 Z" fill="#f97316"/>
              <path d="M310 205 L294.4 214 A18 18 0 0 1 310 187 Z" fill="#10b981"/>
              {/* Progress bar */}
              <rect x="128" y="222" width="220" height="6" rx="3" fill="#1f2937"/>
              <rect x="128" y="222" width="150" height="6" rx="3" fill="#4f46e5"/>
              <text x="354" y="228" fill="#6366f1" fontSize="8">68%</text>

              {/* Books stack — right side */}
              <rect x="388" y="258" width="34" height="52" rx="4" fill="#f97316"/>
              <rect x="390" y="258" width="3" height="52" rx="2" fill="#ea580c"/>
              <rect x="388" y="212" width="34" height="48" rx="4" fill="#4f46e5"/>
              <rect x="390" y="212" width="3" height="48" rx="2" fill="#4338ca"/>
              <rect x="388" y="168" width="34" height="46" rx="4" fill="#10b981"/>
              <rect x="390" y="168" width="3" height="46" rx="2" fill="#059669"/>
              {/* Book spines text */}
              <text x="410" y="290" fill="white" fontSize="7" transform="rotate(-90 410 290)">Physics</text>
              <text x="410" y="243" fill="white" fontSize="7" transform="rotate(-90 410 243)">Maths</text>
              <text x="410" y="198" fill="white" fontSize="7" transform="rotate(-90 410 198)">Chemistry</text>

              {/* Notebook — left side */}
              <rect x="58" y="238" width="52" height="72" rx="5" fill="#fef3c7"/>
              <rect x="62" y="238" width="3" height="72" rx="2" fill="#fcd34d"/>
              {/* Notebook lines */}
              {[0,1,2,3,4,5].map(i => (
                <rect key={i} x="68" y={250 + i*10} width="36" height="2" rx="1" fill="#d97706" opacity=".3"/>
              ))}
              {/* Pencil on notebook */}
              <rect x="90" y="228" width="6" height="36" rx="3" fill="#fbbf24" transform="rotate(25 93 246)"/>
              <rect x="90" y="228" width="6" height="6" rx="1" fill="#f87171" transform="rotate(25 93 246)"/>
              <polygon points="90,264 96,264 93,272" fill="#1f2937" transform="rotate(25 93 246)"/>

              {/* Floating symbols */}
              <text x="52" y="145" fill="#f97316" fontSize="18" opacity=".9" style={{fontFamily:'monospace'}}>∫</text>
              <text x="390" y="120" fill="#a5b4fc" fontSize="15" opacity=".85" style={{fontFamily:'monospace'}}>π</text>
              <text x="72" y="195" fill="#34d399" fontSize="13" opacity=".8" style={{fontFamily:'monospace'}}>√x</text>
              <text x="400" y="155" fill="#fb923c" fontSize="12" opacity=".8" style={{fontFamily:'monospace'}}>∑</text>
              <text x="42" y="245" fill="#818cf8" fontSize="11" opacity=".7" style={{fontFamily:'monospace'}}>Δ</text>
              <text x="432" y="90" fill="#f472b6" fontSize="14" opacity=".75" style={{fontFamily:'monospace'}}>λ</text>
              <text x="60" y="110" fill="#60a5fa" fontSize="12" opacity=".7" style={{fontFamily:'monospace'}}>DNA</text>

              {/* Floating notification bubble */}
              <rect x="300" y="72" width="120" height="36" rx="10" fill="#4f46e5" opacity=".95"/>
              <text x="315" y="86" fill="white" fontSize="8" fontWeight="bold">✓ Topic Completed!</text>
              <text x="315" y="98" fill="#a5b4fc" fontSize="7">Quadratic Equations</text>
              <polygon points="300,88 290,92 300,98" fill="#4f46e5" opacity=".95"/>

              {/* Stars / sparkles */}
              <circle cx="420" cy="200" r="3" fill="#fbbf24" opacity=".8"/>
              <circle cx="50" cy="165" r="2" fill="#f472b6" opacity=".7"/>
              <circle cx="438" cy="260" r="2.5" fill="#34d399" opacity=".7"/>
              <circle cx="80" y="78" r="2" fill="#60a5fa" opacity=".6"/>

              {/* Wifi / online indicator top right of screen */}
              <circle cx="346" cy="127" r="4" fill="#10b981"/>
              <circle cx="346" cy="127" r="2" fill="#fff"/>
            </svg>
          </div>
        </div>
      </section>

      {/* Browse by Class */}
      <section className="section" style={{ background: '#fff', paddingBottom: '4rem' }}>
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Browse by class</h2>
            <p className="section-sub">Select your class to see all subjects and topics</p>
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

      {/* Subjects preview */}
      <section className="section" style={{ background: '#f9fafb' }}>
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">All subjects covered</h2>
            <p className="section-sub">From foundational subjects in Class 6 to advanced competitive exam topics</p>
          </div>
          <div className="features-grid">
            {SUBJECTS_PREVIEW.map(s => (
              <div key={s.name} className="feature-card" style={{ borderTop: `3px solid ${s.color}` }}>
                <div className="feature-icon" style={{ background: s.bg, fontSize: '1.5rem', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  {s.icon}
                </div>
                <div className="feature-title">{s.name}</div>
                <div className="feature-desc">{s.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="section" style={{ background: '#fff' }}>
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Why OnlineStudyHub?</h2>
            <p className="section-sub">Built specifically for Indian students preparing for boards and competitive exams</p>
          </div>
          <div className="features-grid">
            {FEATURES.map(f => (
              <div key={f.title} className="feature-card">
                <div className="feature-icon" style={{ background: f.color, fontSize: '1.5rem', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  {f.icon}
                </div>
                <div className="feature-title">{f.title}</div>
                <div className="feature-desc">{f.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ background: 'linear-gradient(135deg, #1e1b4b, #312e81)', padding: '5rem 0', textAlign: 'center' }}>
        <div className="container">
          <h2 style={{ fontFamily: 'Nunito', fontSize: 'clamp(1.8rem, 4vw, 2.5rem)', fontWeight: 900, color: '#fff', marginBottom: '1rem' }}>
            Ready to start learning?
          </h2>
          <p style={{ color: 'rgba(255,255,255,.7)', fontSize: '1.1rem', marginBottom: '2rem', maxWidth: 500, margin: '0 auto 2rem' }}>
            Pick your class, choose a subject, and dive into any topic. No signup needed.
          </p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link to="/class/class-10" className="btn btn-primary" style={{ padding: '0.9rem 2rem', fontSize: '1rem' }}>
              Class 10 →
            </Link>
            <Link to="/class/jee" className="btn btn-primary" style={{ padding: '0.9rem 2rem', fontSize: '1rem', background: '#f97316' }}>
              JEE Prep →
            </Link>
            <Link to="/class/neet" className="btn" style={{ padding: '0.9rem 2rem', fontSize: '1rem', background: 'rgba(255,255,255,.12)', color: '#fff', border: '1px solid rgba(255,255,255,.25)', borderRadius: 10 }}>
              NEET Prep →
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

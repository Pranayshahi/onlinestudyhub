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
        <div className="container hero-content">
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

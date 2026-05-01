import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { api } from '../utils/api';
import SEO from '../components/SEO';

const TARGETS = [
  'JEE Main', 'JEE Advanced', 'NEET',
  'Class 10 Board (CBSE)', 'Class 12 Board (CBSE)',
  'Class 10 Board (State)', 'Class 12 Board (State)',
  'Other',
];

const WEAK_SUGGESTIONS = [
  'Integration', 'Thermodynamics', 'Organic Chemistry',
  'Coordinate Geometry', 'Electrostatics', 'Genetics',
  'Algebra', 'Optics', 'Chemical Bonding', 'Kinematics',
];

const TYPE_COLORS = {
  study:    { bg: '#eff6ff', border: '#bfdbfe', text: '#1d4ed8', dot: '#3b82f6' },
  practice: { bg: '#f0fdf4', border: '#bbf7d0', text: '#166534', dot: '#22c55e' },
  revision: { bg: '#fff7ed', border: '#fed7aa', text: '#9a3412', dot: '#f97316' },
  mock:     { bg: '#fdf4ff', border: '#e9d5ff', text: '#7e22ce', dot: '#a855f7' },
  rest:     { bg: '#f9fafb', border: '#e5e7eb', text: '#6b7280', dot: '#9ca3af' },
};

function PlanDay({ day, isToday }) {
  const c = TYPE_COLORS[day.type] || TYPE_COLORS.study;
  const dateStr = day.date
    ? new Date(day.date + 'T00:00:00').toLocaleDateString('en-IN', { weekday: 'short', day: 'numeric', month: 'short' })
    : `Day ${day.day}`;

  return (
    <div style={{
      borderRadius: 14,
      border: `1.5px solid ${isToday ? '#6366f1' : c.border}`,
      background: isToday ? '#eef2ff' : c.bg,
      padding: '1rem 1.2rem',
      boxShadow: isToday ? '0 0 0 3px rgba(99,102,241,0.2)' : 'none',
      transition: 'transform .15s',
    }}
      onMouseEnter={e => e.currentTarget.style.transform = 'translateY(-2px)'}
      onMouseLeave={e => e.currentTarget.style.transform = 'translateY(0)'}
    >
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '.6rem', flexWrap: 'wrap', gap: '.5rem' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '.5rem' }}>
          <span style={{ width: 9, height: 9, borderRadius: '50%', background: c.dot, flexShrink: 0, display: 'inline-block' }} />
          <span style={{ fontSize: '.72rem', fontWeight: 700, color: '#9ca3af', textTransform: 'uppercase', letterSpacing: '.05em' }}>Day {day.day}</span>
        </div>
        <span style={{ fontSize: '.72rem', fontWeight: 600, color: c.text, background: c.bg, border: `1px solid ${c.border}`, padding: '.15rem .5rem', borderRadius: 999 }}>
          {day.type || 'study'}
        </span>
      </div>
      <div style={{ fontSize: '.78rem', fontWeight: 700, color: '#6b7280', marginBottom: '.25rem' }}>{dateStr}</div>
      <div style={{ fontFamily: 'Nunito', fontWeight: 800, fontSize: '.98rem', color: isToday ? '#4f46e5' : '#1e1b4b', marginBottom: '.2rem' }}>{day.focus}</div>
      {day.subject && <div style={{ fontSize: '.75rem', color: '#9ca3af', marginBottom: '.6rem' }}>{day.subject}</div>}
      <ul style={{ margin: 0, paddingLeft: '1.1rem', display: 'flex', flexDirection: 'column', gap: '.2rem' }}>
        {(day.tasks || []).map((t, i) => (
          <li key={i} style={{ fontSize: '.82rem', color: '#374151', lineHeight: 1.5 }}>{t}</li>
        ))}
      </ul>
      <div style={{ marginTop: '.65rem', fontSize: '.72rem', color: '#9ca3af' }}>⏱ {day.hours || 2}h</div>
    </div>
  );
}

const STORAGE_KEY = 'osh_study_plan_ai';

export default function StudyPlanPage({ user, onOpenLogin }) {
  const [step, setStep] = useState('form'); // form | loading | plan
  const [form, setForm] = useState({
    target: 'JEE Main',
    examDate: '',
    hoursPerDay: '3',
    weakTopics: [],
    weakInput: '',
  });
  const [plan, setPlan] = useState([]);
  const [daysLeft, setDaysLeft] = useState(0);
  const [error, setError] = useState('');
  const [savedPlan, setSavedPlan] = useState(null);

  useEffect(() => {
    try {
      const s = localStorage.getItem(STORAGE_KEY);
      if (s) setSavedPlan(JSON.parse(s));
    } catch {}
  }, []);

  function addWeakTopic(topic) {
    const t = topic.trim();
    if (!t || form.weakTopics.includes(t)) return;
    setForm(f => ({ ...f, weakTopics: [...f.weakTopics, t], weakInput: '' }));
  }

  function removeWeakTopic(t) {
    setForm(f => ({ ...f, weakTopics: f.weakTopics.filter(x => x !== t) }));
  }

  async function generatePlan() {
    if (!form.examDate) { setError('Please select your exam date.'); return; }
    if (new Date(form.examDate) <= new Date()) { setError('Exam date must be in the future.'); return; }
    setError('');
    setStep('loading');

    try {
      const data = await api('/ai/study-plan', {
        method: 'POST',
        body: {
          target: form.target,
          examDate: form.examDate,
          hoursPerDay: parseInt(form.hoursPerDay),
          weakTopics: form.weakTopics,
        },
      });
      setPlan(Array.isArray(data.plan) ? data.plan : []);
      setDaysLeft(data.daysLeft || 0);
      try { localStorage.setItem(STORAGE_KEY, JSON.stringify({ plan: data.plan, form, savedAt: Date.now() })); } catch {}
      setStep('plan');
    } catch (e) {
      setError(e.message || 'Failed to generate plan. Please try again.');
      setStep('form');
    }
  }

  function loadSavedPlan() {
    if (!savedPlan) return;
    setPlan(savedPlan.plan || []);
    setForm(f => ({ ...f, ...(savedPlan.form || {}) }));
    setStep('plan');
  }

  const today = new Date().toISOString().slice(0, 10);
  const weeks = [];
  for (let i = 0; i < plan.length; i += 7) weeks.push(plan.slice(i, i + 7));

  return (
    <div style={{ minHeight: '100vh', background: '#f8fafc' }}>
      <SEO
        title="AI Personalized Study Plan — OnlineStudyHub"
        description="Get a day-by-day personalized study plan powered by AI. Enter your exam date and weak topics to get started."
        path="/study-plan"
      />

      {/* Hero */}
      <div style={{
        background: 'linear-gradient(135deg, #1e1b4b 0%, #312e81 100%)',
        padding: '3rem 0 2.5rem', color: '#fff',
      }}>
        <div className="container">
          <div style={{ display: 'flex', alignItems: 'center', gap: '.75rem', marginBottom: '.75rem' }}>
            <span style={{ background: 'rgba(255,255,255,.15)', border: '1px solid rgba(255,255,255,.25)', padding: '.3rem .9rem', borderRadius: 999, fontSize: '.78rem', fontWeight: 700 }}>
              ✨ AI-Powered
            </span>
          </div>
          <h1 style={{ fontFamily: 'Nunito', fontWeight: 900, fontSize: 'clamp(1.7rem,4vw,2.5rem)', marginBottom: '.6rem' }}>
            Personalized Study Plan
          </h1>
          <p style={{ opacity: .8, fontSize: '.97rem', maxWidth: 520 }}>
            Tell us your exam date and weak topics. Our AI builds a day-by-day schedule tailored just for you.
          </p>
        </div>
      </div>

      <div className="container" style={{ paddingTop: '2.5rem', paddingBottom: '5rem', maxWidth: 900 }}>

        {/* Saved plan banner */}
        {savedPlan && step === 'form' && (
          <div style={{
            background: '#eff6ff', border: '1.5px solid #bfdbfe',
            borderRadius: 14, padding: '1rem 1.25rem',
            marginBottom: '1.5rem',
            display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '1rem', flexWrap: 'wrap',
          }}>
            <div>
              <div style={{ fontWeight: 700, color: '#1d4ed8', fontSize: '.9rem' }}>📋 You have a saved plan</div>
              <div style={{ fontSize: '.78rem', color: '#6b7280', marginTop: '.15rem' }}>
                {savedPlan.form?.target} · Saved {new Date(savedPlan.savedAt).toLocaleDateString('en-IN')}
              </div>
            </div>
            <button onClick={loadSavedPlan} style={{ padding: '.45rem 1.1rem', background: '#1d4ed8', color: '#fff', border: 'none', borderRadius: 8, fontWeight: 700, fontSize: '.85rem', cursor: 'pointer' }}>
              Continue →
            </button>
          </div>
        )}

        {/* ── Form ── */}
        {step === 'form' && (
          <div style={{ background: '#fff', borderRadius: 20, padding: '2rem 2rem', border: '1px solid #e5e7eb', boxShadow: '0 4px 20px rgba(0,0,0,.04)' }}>
            <h2 style={{ fontFamily: 'Nunito', fontWeight: 800, fontSize: '1.25rem', color: '#1e1b4b', marginBottom: '1.75rem' }}>
              Tell us about your goal
            </h2>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(260px,1fr))', gap: '1.25rem', marginBottom: '1.25rem' }}>
              <div>
                <label style={{ fontSize: '.78rem', fontWeight: 700, color: '#374151', display: 'block', marginBottom: '.4rem' }}>Target Exam / Goal *</label>
                <select
                  value={form.target}
                  onChange={e => setForm(f => ({ ...f, target: e.target.value }))}
                  style={{ width: '100%', padding: '.6rem .9rem', borderRadius: 10, border: '1.5px solid #d1d5db', fontSize: '.92rem', outline: 'none' }}
                >
                  {TARGETS.map(t => <option key={t} value={t}>{t}</option>)}
                </select>
              </div>
              <div>
                <label style={{ fontSize: '.78rem', fontWeight: 700, color: '#374151', display: 'block', marginBottom: '.4rem' }}>Exam Date *</label>
                <input
                  type="date"
                  value={form.examDate}
                  min={new Date(Date.now() + 86400000).toISOString().slice(0, 10)}
                  onChange={e => setForm(f => ({ ...f, examDate: e.target.value }))}
                  style={{ width: '100%', padding: '.6rem .9rem', borderRadius: 10, border: '1.5px solid #d1d5db', fontSize: '.92rem', outline: 'none', boxSizing: 'border-box' }}
                />
              </div>
              <div>
                <label style={{ fontSize: '.78rem', fontWeight: 700, color: '#374151', display: 'block', marginBottom: '.4rem' }}>
                  Study Hours Per Day: {form.hoursPerDay}h
                </label>
                <input
                  type="range" min="1" max="10" value={form.hoursPerDay}
                  onChange={e => setForm(f => ({ ...f, hoursPerDay: e.target.value }))}
                  style={{ width: '100%', accentColor: '#4f46e5' }}
                />
                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '.7rem', color: '#9ca3af', marginTop: '.25rem' }}>
                  <span>1h (light)</span><span>5h (focused)</span><span>10h (intense)</span>
                </div>
              </div>
            </div>

            <div style={{ marginBottom: '1.5rem' }}>
              <label style={{ fontSize: '.78rem', fontWeight: 700, color: '#374151', display: 'block', marginBottom: '.5rem' }}>
                Weak Topics (optional — AI will prioritize these)
              </label>
              <div style={{ display: 'flex', gap: '.5rem', flexWrap: 'wrap', marginBottom: '.6rem' }}>
                {form.weakTopics.map(t => (
                  <span key={t} style={{
                    background: '#fef3c7', border: '1px solid #fde68a',
                    borderRadius: 999, padding: '.25rem .75rem',
                    fontSize: '.82rem', fontWeight: 600, color: '#92400e',
                    display: 'flex', alignItems: 'center', gap: '.3rem',
                  }}>
                    {t}
                    <button onClick={() => removeWeakTopic(t)} style={{ background: 'none', border: 'none', cursor: 'pointer', padding: 0, color: '#92400e', fontSize: '.9rem', lineHeight: 1 }}>×</button>
                  </span>
                ))}
              </div>
              <div style={{ display: 'flex', gap: '.5rem' }}>
                <input
                  value={form.weakInput}
                  onChange={e => setForm(f => ({ ...f, weakInput: e.target.value }))}
                  onKeyDown={e => e.key === 'Enter' && addWeakTopic(form.weakInput)}
                  placeholder="e.g. Integration, Thermodynamics…"
                  style={{ flex: 1, padding: '.5rem .85rem', borderRadius: 10, border: '1.5px solid #d1d5db', fontSize: '.88rem', outline: 'none' }}
                />
                <button
                  onClick={() => addWeakTopic(form.weakInput)}
                  style={{ padding: '.5rem 1.1rem', background: '#f3f4f6', border: '1.5px solid #d1d5db', borderRadius: 10, fontSize: '.85rem', cursor: 'pointer', fontWeight: 600 }}
                >
                  Add
                </button>
              </div>
              <div style={{ display: 'flex', gap: '.4rem', flexWrap: 'wrap', marginTop: '.6rem' }}>
                {WEAK_SUGGESTIONS.filter(s => !form.weakTopics.includes(s)).slice(0, 6).map(s => (
                  <button key={s} onClick={() => addWeakTopic(s)} style={{ padding: '.2rem .7rem', borderRadius: 999, border: '1px solid #e5e7eb', background: '#f9fafb', fontSize: '.75rem', color: '#6b7280', cursor: 'pointer' }}>
                    + {s}
                  </button>
                ))}
              </div>
            </div>

            {error && <div style={{ color: '#dc2626', fontSize: '.85rem', marginBottom: '1rem', background: '#fef2f2', padding: '.6rem 1rem', borderRadius: 8 }}>⚠️ {error}</div>}

            <button
              onClick={generatePlan}
              style={{
                width: '100%', padding: '.85rem',
                background: 'linear-gradient(135deg, #4f46e5, #7c3aed)',
                color: '#fff', border: 'none', borderRadius: 12,
                fontFamily: 'Nunito', fontWeight: 800, fontSize: '1.05rem',
                cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '.6rem',
              }}
            >
              ✨ Generate My Study Plan
            </button>
          </div>
        )}

        {/* ── Loading ── */}
        {step === 'loading' && (
          <div style={{ textAlign: 'center', padding: '6rem 1rem' }}>
            <div style={{ fontSize: '3.5rem', marginBottom: '1.5rem', animation: 'pulse 1.5s ease-in-out infinite' }}>🤖</div>
            <h2 style={{ fontFamily: 'Nunito', fontWeight: 800, color: '#1e1b4b', marginBottom: '.75rem' }}>
              Building your personalized plan…
            </h2>
            <p style={{ color: '#6b7280', fontSize: '.95rem' }}>
              Our AI is analyzing your weak topics and scheduling the optimal study sequence.
            </p>
            <div style={{ display: 'flex', justifyContent: 'center', gap: '.4rem', marginTop: '2rem' }}>
              {[0,1,2].map(i => (
                <div key={i} style={{
                  width: 10, height: 10, borderRadius: '50%', background: '#4f46e5',
                  animation: `bounce 1s ease-in-out ${i * 0.2}s infinite`,
                }} />
              ))}
            </div>
            <style>{`
              @keyframes pulse { 0%,100%{transform:scale(1)} 50%{transform:scale(1.08)} }
              @keyframes bounce { 0%,100%{transform:translateY(0)} 50%{transform:translateY(-12px)} }
            `}</style>
          </div>
        )}

        {/* ── Plan Display ── */}
        {step === 'plan' && plan.length > 0 && (
          <div>
            {/* Summary header */}
            <div style={{
              background: '#fff', borderRadius: 16, border: '1px solid #e5e7eb',
              padding: '1.25rem 1.5rem', marginBottom: '2rem',
              display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '1rem',
            }}>
              <div>
                <div style={{ fontFamily: 'Nunito', fontWeight: 800, fontSize: '1.05rem', color: '#1e1b4b' }}>
                  📋 {form.target} — {plan.length}-Day Study Plan
                </div>
                <div style={{ fontSize: '.82rem', color: '#6b7280', marginTop: '.2rem' }}>
                  {form.hoursPerDay}h/day · {daysLeft} days to exam
                  {form.weakTopics.length > 0 && ` · Prioritizing: ${form.weakTopics.slice(0,3).join(', ')}`}
                </div>
              </div>
              <button
                onClick={() => { setPlan([]); setStep('form'); }}
                style={{ padding: '.45rem 1rem', border: '1.5px solid #e5e7eb', borderRadius: 9, background: '#f9fafb', fontSize: '.83rem', cursor: 'pointer', color: '#6b7280', fontWeight: 600 }}
              >
                ↩ Regenerate
              </button>
            </div>

            {/* Week-by-week */}
            {weeks.map((week, wi) => (
              <div key={wi} style={{ marginBottom: '2.5rem' }}>
                <div style={{
                  display: 'flex', alignItems: 'center', gap: '.75rem',
                  marginBottom: '1rem',
                }}>
                  <div style={{ fontFamily: 'Nunito', fontWeight: 800, color: '#1e1b4b', fontSize: '.95rem' }}>
                    Week {wi + 1}
                  </div>
                  <div style={{ flex: 1, height: 1, background: '#e5e7eb' }} />
                  <div style={{ fontSize: '.75rem', color: '#9ca3af' }}>
                    {week.length} days
                  </div>
                </div>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))', gap: '.85rem' }}>
                  {week.map(day => (
                    <PlanDay key={day.day} day={day} isToday={day.date === today} />
                  ))}
                </div>
              </div>
            ))}

            <div style={{ display: 'flex', gap: '.75rem', justifyContent: 'center', marginTop: '1.5rem', flexWrap: 'wrap' }}>
              <Link to="/dashboard" style={{ padding: '.7rem 1.4rem', background: '#4f46e5', color: '#fff', borderRadius: 10, fontWeight: 700, textDecoration: 'none', fontSize: '.9rem' }}>
                📊 View Dashboard
              </Link>
              <Link to="/classes" style={{ padding: '.7rem 1.4rem', background: '#f3f4f6', color: '#374151', borderRadius: 10, fontWeight: 600, textDecoration: 'none', fontSize: '.9rem' }}>
                📚 Browse Topics
              </Link>
            </div>
          </div>
        )}

        {step === 'plan' && plan.length === 0 && (
          <div style={{ textAlign: 'center', padding: '4rem 1rem' }}>
            <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>😕</div>
            <p style={{ color: '#6b7280' }}>Couldn't generate a plan. Please try again.</p>
            <button onClick={() => setStep('form')} style={{ marginTop: '1rem', padding: '.6rem 1.5rem', background: '#4f46e5', color: '#fff', border: 'none', borderRadius: 10, fontWeight: 700, cursor: 'pointer' }}>
              ← Try Again
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

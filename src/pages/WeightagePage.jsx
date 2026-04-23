import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { EXAMS, WEIGHTAGE } from '../data/jeeNeetData';

const PRIORITY_META = {
  must:   { label: 'Must Do', color: '#dc2626', bg: '#fef2f2' },
  high:   { label: 'High',    color: '#d97706', bg: '#fffbeb' },
  medium: { label: 'Medium',  color: '#2563eb', bg: '#eff6ff' },
  low:    { label: 'Low',     color: '#6b7280', bg: '#f3f4f6' },
};

const DIFF_META = {
  high:   { label: 'Hard',   color: '#dc2626' },
  medium: { label: 'Medium', color: '#d97706' },
  low:    { label: 'Easy',   color: '#16a34a' },
};

export default function WeightagePage() {
  const { examId } = useParams();
  const exam = EXAMS[examId];
  const [activeSubject, setActiveSubject] = useState(exam?.subjects?.[0] || '');
  const [sortBy, setSortBy] = useState('weightage');

  if (!exam) return <div className="container" style={{ padding: '3rem 1.25rem' }}>Exam not found.</div>;

  const chapters = [...(WEIGHTAGE[examId]?.[activeSubject] || [])];
  if (sortBy === 'weightage') chapters.sort((a, b) => b.weightage - a.weightage);
  if (sortBy === 'difficulty') chapters.sort((a, b) => ({ high: 3, medium: 2, low: 1 }[b.difficulty] - { high: 3, medium: 2, low: 1 }[a.difficulty]));
  if (sortBy === 'alpha') chapters.sort((a, b) => a.chapter.localeCompare(b.chapter));

  const maxWeightage = Math.max(...chapters.map(c => c.weightage), 1);
  const totalWeightage = chapters.reduce((s, c) => s + c.weightage, 0);

  return (
    <div style={{ background: '#f9fafb', minHeight: '100vh' }}>
      {/* Header */}
      <div style={{ background: `linear-gradient(135deg, #1e1b4b 0%, ${exam.color} 100%)`, color: '#fff', padding: '2.5rem 0 2rem' }}>
        <div className="container">
          <div style={{ fontSize: '.82rem', color: 'rgba(255,255,255,.6)', marginBottom: '.5rem' }}>
            <Link to={`/exam/${examId}`} style={{ color: 'rgba(255,255,255,.7)' }}>{exam.shortLabel}</Link> › Chapter Weightage
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '.75rem' }}>
            <span style={{ fontSize: '2rem' }}>📊</span>
            <div>
              <h1 style={{ fontWeight: 900, fontSize: '1.8rem', lineHeight: 1.2 }}>Chapter Weightage</h1>
              <p style={{ color: 'rgba(255,255,255,.7)', fontSize: '.9rem', marginTop: '.25rem' }}>
                Know which chapters appear most in {exam.label} — prioritise smart
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="container" style={{ padding: '2rem 1.25rem' }}>
        {/* Subject tabs */}
        <div className="tab-bar" style={{ marginBottom: '1.5rem' }}>
          {exam.subjects.map(s => (
            <button key={s} className={`tab-btn ${activeSubject === s ? 'active' : ''}`} onClick={() => setActiveSubject(s)}>
              {exam.subjectEmojis[s]} {exam.subjectLabels[s]}
            </button>
          ))}
        </div>

        {/* Sort + legend row */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem', marginBottom: '1.5rem' }}>
          <div style={{ display: 'flex', gap: '.5rem', flexWrap: 'wrap' }}>
            {Object.entries(PRIORITY_META).map(([k, v]) => (
              <span key={k} style={{ background: v.bg, color: v.color, padding: '.2rem .65rem', borderRadius: 99, fontSize: '.75rem', fontWeight: 700 }}>● {v.label}</span>
            ))}
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '.5rem' }}>
            <span style={{ fontSize: '.82rem', color: '#6b7280', fontWeight: 600 }}>Sort:</span>
            {[['weightage','By Weight'],['difficulty','By Difficulty'],['alpha','A–Z']].map(([val, label]) => (
              <button key={val} onClick={() => setSortBy(val)}
                style={{ padding: '.3rem .7rem', borderRadius: 8, border: `1px solid ${sortBy === val ? exam.color : '#e5e7eb'}`, background: sortBy === val ? exam.lightColor : '#fff', color: sortBy === val ? exam.color : '#6b7280', fontSize: '.8rem', fontWeight: 600, cursor: 'pointer' }}>
                {label}
              </button>
            ))}
          </div>
        </div>

        {/* Subject summary card */}
        <div className="weightage-summary" style={{ background: '#fff', border: '1px solid #e5e7eb', borderRadius: 14, padding: '1rem 1.5rem', marginBottom: '1.5rem', display: 'flex', gap: '2rem', flexWrap: 'wrap' }}>
          <div><div style={{ fontSize: '.78rem', color: '#9ca3af', fontWeight: 600 }}>TOTAL CHAPTERS</div><div style={{ fontFamily: 'Nunito, sans-serif', fontWeight: 800, fontSize: '1.5rem', color: exam.color }}>{chapters.length}</div></div>
          <div><div style={{ fontSize: '.78rem', color: '#9ca3af', fontWeight: 600 }}>MUST-DO</div><div style={{ fontFamily: 'Nunito, sans-serif', fontWeight: 800, fontSize: '1.5rem', color: '#dc2626' }}>{chapters.filter(c => c.priority === 'must').length}</div></div>
          <div><div style={{ fontSize: '.78rem', color: '#9ca3af', fontWeight: 600 }}>AVG QUESTIONS</div><div style={{ fontFamily: 'Nunito, sans-serif', fontWeight: 800, fontSize: '1.5rem', color: '#1f2937' }}>{Math.round(chapters.reduce((s,c) => s + c.avgQuestions, 0) / chapters.length * 10)/10}</div></div>
        </div>

        {/* Chapter list */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          {chapters.map((ch, idx) => {
            const pri = PRIORITY_META[ch.priority] || PRIORITY_META.medium;
            const diff = DIFF_META[ch.difficulty] || DIFF_META.medium;
            const barWidth = Math.round((ch.weightage / maxWeightage) * 100);
            return (
              <div key={ch.chapter} style={{ background: '#fff', border: '1px solid #e5e7eb', borderRadius: 14, padding: '1.25rem 1.5rem', borderLeft: `5px solid ${pri.color}` }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: '1rem', flexWrap: 'wrap' }}>
                  <div style={{ flex: 1 }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '.75rem', marginBottom: '.4rem', flexWrap: 'wrap' }}>
                      <span style={{ fontFamily: 'Nunito, sans-serif', fontWeight: 800, fontSize: '1rem', color: '#1f2937' }}>
                        {idx + 1}. {ch.chapter}
                      </span>
                      <span style={{ background: pri.bg, color: pri.color, fontSize: '.72rem', fontWeight: 700, padding: '.15rem .55rem', borderRadius: 99 }}>{pri.label}</span>
                      <span style={{ color: diff.color, fontSize: '.72rem', fontWeight: 700 }}>● {diff.label}</span>
                    </div>

                    {/* Weightage bar */}
                    <div style={{ display: 'flex', alignItems: 'center', gap: '.75rem', marginBottom: '.75rem' }}>
                      <div style={{ flex: 1, height: 10, background: '#f3f4f6', borderRadius: 99, overflow: 'hidden' }}>
                        <div style={{ height: '100%', width: `${barWidth}%`, background: `linear-gradient(90deg, ${exam.color}, ${pri.color})`, borderRadius: 99, transition: 'width .6s ease' }} />
                      </div>
                      <span style={{ fontFamily: 'Nunito, sans-serif', fontWeight: 800, fontSize: '1rem', color: exam.color, minWidth: 40 }}>{ch.weightage}%</span>
                    </div>

                    {/* Topics */}
                    <div style={{ display: 'flex', gap: '.4rem', flexWrap: 'wrap' }}>
                      {ch.topics.map(t => (
                        <span key={t} style={{ background: '#f3f4f6', color: '#4b5563', fontSize: '.72rem', padding: '.2rem .55rem', borderRadius: 6, fontWeight: 500 }}>{t}</span>
                      ))}
                    </div>
                  </div>

                  <div className="weightage-chapter-right" style={{ textAlign: 'right', minWidth: 100 }}>
                    <div style={{ fontSize: '.72rem', color: '#9ca3af', fontWeight: 600 }}>AVG QUESTIONS</div>
                    <div style={{ fontFamily: 'Nunito, sans-serif', fontWeight: 900, fontSize: '1.8rem', color: '#1f2937' }}>{ch.avgQuestions}</div>
                    <div style={{ fontSize: '.7rem', color: '#9ca3af' }}>per paper</div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Footer note */}
        <div style={{ marginTop: '2rem', padding: '1rem 1.25rem', background: '#fffbeb', border: '1px solid #fde68a', borderRadius: 12, fontSize: '.82rem', color: '#92400e' }}>
          ⚡ Weightage data based on analysis of JEE Main / NEET papers from 2018–2024. Individual years may vary. Always cover "Must Do" chapters first.
        </div>
      </div>
    </div>
  );
}

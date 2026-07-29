import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const TARGET_EXAMS = [
  { id: 'class-10-board', label: 'CBSE Class 10 Board 2026', date: '2026-02-15', totalTopics: 120, classId: 'class-10' },
  { id: 'jee-2027',       label: 'JEE Main & Advanced 2027', date: '2027-04-15', totalTopics: 240, classId: 'jee' },
  { id: 'neet-2026',      label: 'NEET UG 2026',             date: '2026-05-03', totalTopics: 210, classId: 'neet' },
  { id: 'class-12-board', label: 'ISC / CBSE Class 12 Boards 2026', date: '2026-02-20', totalTopics: 150, classId: 'class-12' },
  { id: 'class-8-finals',  label: 'Class 8 Final Exams 2026', date: '2026-03-01', totalTopics: 80,  classId: 'class-8' },
];

export default function PersonalizedDashboardWidget({ user }) {
  const [lastTopic, setLastTopic] = useState(null);
  const [selectedTargetId, setSelectedTargetId] = useState('class-10-board');
  const [completedCount, setCompletedCount] = useState(0);

  // Load last visited topic and progress
  useEffect(() => {
    try {
      const savedLast = localStorage.getItem('osh_last_topic');
      if (savedLast) setLastTopic(JSON.parse(savedLast));
    } catch {}

    try {
      const savedTarget = localStorage.getItem('osh_target_exam_id');
      if (savedTarget) setSelectedTargetId(savedTarget);
    } catch {}

    try {
      const progress = JSON.parse(localStorage.getItem('osh_progress') || '{}');
      setCompletedCount(Object.keys(progress).length);
    } catch {}
  }, []);

  function handleTargetChange(examId) {
    setSelectedTargetId(examId);
    try { localStorage.setItem('osh_target_exam_id', examId); } catch {}
  }

  const currentTarget = TARGET_EXAMS.find(t => t.id === selectedTargetId) || TARGET_EXAMS[0];

  // Calculate days remaining
  const daysLeft = Math.max(0, Math.ceil((new Date(currentTarget.date) - new Date()) / (1000 * 60 * 60 * 24)));
  const pctCompleted = Math.min(100, Math.round((completedCount / currentTarget.totalTopics) * 100));

  // Resume item fallback
  const resumeItem = lastTopic || {
    topicTitle: 'Quadratic Equations & Discriminant',
    subjectId: 'mathematics',
    classId: 'class-10',
    path: '/class/class-10/subject/mathematics/topic/quadratic-equations',
    timeLeft: '12 mins left'
  };

  return (
    <div
      style={{
        background: 'linear-gradient(135deg, rgba(15,23,42,0.95) 0%, rgba(30,27,75,0.92) 100%)',
        backdropFilter: 'blur(20px)',
        border: '1.5px solid rgba(165,180,252,0.3)',
        borderRadius: 24,
        padding: '1.5rem',
        boxShadow: '0 16px 40px rgba(0,0,0,0.35)',
        color: '#fff',
        marginBottom: '2rem'
      }}
    >
      {/* Student Welcome Header & Target Exam Selector */}
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '1rem', marginBottom: '1.25rem', borderBottom: '1px solid rgba(255,255,255,0.1)', paddingBottom: '1rem' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '.75rem' }}>
          <div style={{ width: 44, height: 44, borderRadius: '50%', background: 'linear-gradient(135deg, #f59e0b, #ef4444)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.2rem', fontWeight: 900, border: '2px solid rgba(255,255,255,0.2)' }}>
            👋
          </div>
          <div>
            <h3 style={{ fontFamily: 'Nunito', fontWeight: 900, fontSize: '1.2rem', margin: 0, color: '#fff' }}>
              Welcome back, {user?.name || 'Scholar'}!
            </h3>
            <p style={{ fontSize: '.8rem', color: 'rgba(255,255,255,0.7)', margin: 0 }}>
              Track your daily study velocity and target goal countdown
            </p>
          </div>
        </div>

        {/* Target Exam Dropdown Switcher */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '.5rem', background: 'rgba(0,0,0,0.3)', border: '1px solid rgba(255,255,255,0.15)', borderRadius: 14, padding: '.35rem .75rem' }}>
          <span style={{ fontSize: '.75rem', color: '#a5b4fc', fontWeight: 800 }}>🎯 Target Goal:</span>
          <select
            value={selectedTargetId}
            onChange={e => handleTargetChange(e.target.value)}
            style={{ background: 'transparent', border: 'none', color: '#fff', fontFamily: 'Nunito', fontWeight: 800, fontSize: '.8rem', cursor: 'pointer', outline: 'none' }}
          >
            {TARGET_EXAMS.map(exam => (
              <option key={exam.id} value={exam.id} style={{ background: '#0f172a', color: '#fff' }}>
                {exam.label}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(290px, 1fr))', gap: '1.25rem' }}>
        {/* ROW 1: Resume Learning Netflix-style Card */}
        <div style={{ background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.12)', borderRadius: 18, padding: '1.1rem', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
          <div>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '.65rem' }}>
              <span style={{ background: 'rgba(99,102,241,0.25)', border: '1px solid rgba(165,180,252,0.3)', color: '#c7d2fe', fontSize: '.72rem', fontWeight: 900, padding: '2px 9px', borderRadius: 8, textTransform: 'uppercase' }}>
                🎬 Resume Learning
              </span>
              <span style={{ fontSize: '.75rem', color: '#fef08a', fontWeight: 800 }}>
                {resumeItem.timeLeft || '12 mins left'}
              </span>
            </div>

            <h4 style={{ fontFamily: 'Nunito', fontWeight: 900, fontSize: '1.05rem', margin: '0 0 .35rem', color: '#fff' }}>
              {resumeItem.topicTitle}
            </h4>
            <p style={{ fontSize: '.8rem', color: 'rgba(255,255,255,0.7)', margin: '0 0 .85rem' }}>
              Subject: {resumeItem.subjectId ? resumeItem.subjectId.toUpperCase() : 'MATHEMATICS'} • Step-by-step notes &amp; quiz
            </p>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '.65rem' }}>
            <Link
              to={resumeItem.path || `/class/${resumeItem.classId || 'class-10'}/subject/${resumeItem.subjectId || 'mathematics'}`}
              className="btn btn-primary"
              style={{ flex: 1, padding: '.6rem', borderRadius: 12, fontWeight: 900, fontSize: '.85rem', textAlign: 'center', background: 'linear-gradient(135deg, #6366f1, #4f46e5)', border: 'none', boxShadow: '0 4px 14px rgba(99,102,241,0.4)' }}
            >
              ▶️ Continue Reading →
            </Link>
            <Link
              to="/dashboard"
              style={{ background: 'rgba(255,255,255,0.1)', border: '1px solid rgba(255,255,255,0.15)', color: '#fff', padding: '.6rem .85rem', borderRadius: 12, fontSize: '.8rem', fontWeight: 800, textDecoration: 'none' }}
            >
              📊 All Topics
            </Link>
          </div>
        </div>

        {/* ROW 2: Dynamic Goal Tracker & Syllabus Completion */}
        <div style={{ background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.12)', borderRadius: 18, padding: '1.1rem', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
          <div>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '.65rem' }}>
              <span style={{ background: 'rgba(245,158,11,0.2)', border: '1px solid rgba(253,230,138,0.3)', color: '#fef08a', fontSize: '.72rem', fontWeight: 900, padding: '2px 9px', borderRadius: 8 }}>
                ⏱️ Target Countdown
              </span>
              <span style={{ fontSize: '.82rem', fontWeight: 900, color: '#fbbf24' }}>
                {daysLeft} Days Remaining
              </span>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '.4rem' }}>
              <span style={{ fontSize: '.82rem', fontWeight: 800, color: 'rgba(255,255,255,0.9)' }}>
                Syllabus Progress ({completedCount} / {currentTarget.totalTopics} Topics)
              </span>
              <span style={{ fontSize: '.88rem', fontWeight: 900, color: '#4ade80' }}>
                {pctCompleted}%
              </span>
            </div>

            {/* Visual Syllabus Progress Bar */}
            <div style={{ width: '100%', height: 10, background: 'rgba(255,255,255,0.12)', borderRadius: 5, overflow: 'hidden', marginBottom: '.85rem' }}>
              <div style={{ width: `${pctCompleted}%`, height: '100%', background: 'linear-gradient(90deg, #f59e0b, #10b981)', transition: 'width 0.8s ease', borderRadius: 5 }} />
            </div>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', background: 'rgba(0,0,0,0.25)', padding: '.55rem .85rem', borderRadius: 12 }}>
            <span style={{ fontSize: '.78rem', color: '#c7d2fe', fontWeight: 800 }}>
              🔥 Level 3 Scholar • Daily Streak Active
            </span>
            <Link to="/leaderboard" style={{ color: '#fbbf24', fontSize: '.78rem', fontWeight: 900, textDecoration: 'none' }}>
              Leaderboard →
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

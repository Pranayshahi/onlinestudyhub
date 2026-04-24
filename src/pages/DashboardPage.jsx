import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { api } from '../utils/api';
import { CLASSES, SUBJECTS } from '../data/curriculum';

const SUBJECT_EMOJI = { math: '📐', science: '🔬', english: '📖', social: '🌍', physics: '⚛️', chemistry: '🧪', biology: '🧬' };

function loadProgress() {
  try { return JSON.parse(localStorage.getItem('osh_progress') || '{}'); } catch { return {}; }
}
function loadLastTopic() {
  try { return JSON.parse(localStorage.getItem('osh_last_topic') || 'null'); } catch { return null; }
}
function loadMockResults() {
  const results = [];
  for (let i = 0; i < localStorage.length; i++) {
    const key = localStorage.key(i);
    if (key?.startsWith('mock_result_')) {
      try { const r = JSON.parse(localStorage.getItem(key)); if (r) results.push(r); } catch {}
    }
  }
  return results.sort((a, b) => (b.date || 0) - (a.date || 0)).slice(0, 3);
}

function StatCard({ icon, label, value, color, bg }) {
  return (
    <div style={{ background: bg || '#f9fafb', border: '1px solid #e5e7eb', borderRadius: 16, padding: '1.25rem 1.5rem', display: 'flex', alignItems: 'center', gap: '1rem' }}>
      <div style={{ width: 52, height: 52, borderRadius: 14, background: color + '18', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.5rem', flexShrink: 0 }}>{icon}</div>
      <div>
        <div style={{ fontFamily: 'Nunito, sans-serif', fontWeight: 900, fontSize: '1.6rem', color: color, lineHeight: 1 }}>{value}</div>
        <div style={{ fontSize: '.8rem', color: '#6b7280', fontWeight: 600, marginTop: '.2rem' }}>{label}</div>
      </div>
    </div>
  );
}

export default function DashboardPage({ user, onOpenLogin }) {
  const navigate = useNavigate();
  const [bookings, setBookings] = useState([]);
  const [loadingBookings, setLoadingBookings] = useState(true);
  const progress = loadProgress();
  const lastTopic = loadLastTopic();
  const mockResults = loadMockResults();

  useEffect(() => {
    if (!user) return;
    api('/bookings/student')
      .then(data => setBookings(Array.isArray(data) ? data : []))
      .catch(() => {})
      .finally(() => setLoadingBookings(false));
  }, [user]);

  if (!user) {
    return (
      <div style={{ minHeight: '60vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: '1rem', textAlign: 'center', padding: '2rem' }}>
        <div style={{ fontSize: '3rem' }}>🔒</div>
        <h2 style={{ fontFamily: 'Nunito', fontWeight: 900, color: '#1e1b4b' }}>Login to see your Dashboard</h2>
        <p style={{ color: '#6b7280' }}>Track your progress, upcoming sessions, and study streaks.</p>
        <button className="btn btn-primary" onClick={onOpenLogin}>Login / Sign Up</button>
      </div>
    );
  }

  // Compute progress stats from localStorage
  const totalDone = Object.keys(progress).length;
  const doneByClass = {};
  Object.keys(progress).forEach(key => {
    const [classId] = key.split('/');
    doneByClass[classId] = (doneByClass[classId] || 0) + 1;
  });

  // Upcoming sessions (confirmed or pending)
  const upcoming = bookings.filter(b => b.status === 'confirmed' || b.status === 'pending')
    .sort((a, b) => new Date(a.scheduled_date) - new Date(b.scheduled_date))
    .slice(0, 3);
  const completed = bookings.filter(b => b.status === 'completed').length;

  const firstName = user.name?.split(' ')[0] || 'Student';
  const hour = new Date().getHours();
  const greeting = hour < 12 ? 'Good morning' : hour < 17 ? 'Good afternoon' : 'Good evening';

  return (
    <div style={{ background: '#f8fafc', minHeight: '100vh' }}>
      {/* Header */}
      <div style={{ background: 'linear-gradient(135deg, #1e1b4b 0%, #4f46e5 100%)', color: '#fff', padding: '2.5rem 0 3rem' }}>
        <div className="container">
          <div style={{ fontSize: '.85rem', color: 'rgba(255,255,255,.6)', marginBottom: '.35rem' }}>{greeting} 👋</div>
          <h1 style={{ fontFamily: 'Nunito, sans-serif', fontWeight: 900, fontSize: 'clamp(1.6rem, 4vw, 2.4rem)', margin: 0 }}>
            Welcome back, {firstName}!
          </h1>
          <p style={{ color: 'rgba(255,255,255,.7)', marginTop: '.4rem', fontSize: '.95rem' }}>
            Here's your learning snapshot for today.
          </p>
        </div>
      </div>

      <div className="container" style={{ padding: '2rem 1.25rem 4rem', marginTop: '-1rem' }}>

        {/* Stats row */}
        <div className="dashboard-stats-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '1rem', marginBottom: '2rem' }}>
          <StatCard icon="✅" label="Topics Completed" value={totalDone} color="#059669" />
          <StatCard icon="📅" label="Sessions Booked" value={bookings.length} color="#4f46e5" />
          <StatCard icon="🎓" label="Sessions Done" value={completed} color="#d97706" />
          <StatCard icon="🧪" label="Mock Tests Taken" value={mockResults.length} color="#dc2626" />
        </div>

        <div className="dashboard-main-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 360px', gap: '1.5rem', alignItems: 'start' }}>

          {/* LEFT COLUMN */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>

            {/* Resume where you left off */}
            {lastTopic && (
              <div style={{ background: '#fff', border: '1px solid #e5e7eb', borderRadius: 16, padding: '1.25rem 1.5rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '.5rem', marginBottom: '1rem' }}>
                  <span style={{ fontSize: '1.2rem' }}>▶️</span>
                  <h2 style={{ fontFamily: 'Nunito, sans-serif', fontWeight: 800, fontSize: '1.05rem', color: '#1f2937', margin: 0 }}>Resume Where You Left Off</h2>
                </div>
                <Link to={lastTopic.path} style={{ textDecoration: 'none' }}>
                  <div style={{ background: 'linear-gradient(135deg, #eef2ff, #f5f3ff)', border: '1px solid #c7d2fe', borderRadius: 12, padding: '1rem 1.25rem', display: 'flex', alignItems: 'center', gap: '1rem', transition: 'box-shadow .2s' }}
                    onMouseEnter={e => e.currentTarget.style.boxShadow = '0 4px 16px rgba(79,70,229,.15)'}
                    onMouseLeave={e => e.currentTarget.style.boxShadow = 'none'}>
                    <div style={{ fontSize: '2rem' }}>{SUBJECT_EMOJI[lastTopic.subjectId] || '📚'}</div>
                    <div style={{ flex: 1, minWidth: 0 }}>
                      <div style={{ fontFamily: 'Nunito, sans-serif', fontWeight: 800, color: '#1f2937', fontSize: '.95rem', marginBottom: '.2rem' }}>{lastTopic.topicTitle}</div>
                      <div style={{ fontSize: '.78rem', color: '#6b7280' }}>
                        Class {lastTopic.classId?.replace('class', '')} · {lastTopic.subjectId?.charAt(0).toUpperCase() + lastTopic.subjectId?.slice(1)}
                      </div>
                    </div>
                    <span style={{ color: '#4f46e5', fontWeight: 700, fontSize: '.85rem', whiteSpace: 'nowrap' }}>Continue →</span>
                  </div>
                </Link>
              </div>
            )}

            {/* Progress by class */}
            {Object.keys(doneByClass).length > 0 && (
              <div style={{ background: '#fff', border: '1px solid #e5e7eb', borderRadius: 16, padding: '1.25rem 1.5rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '.5rem', marginBottom: '1rem' }}>
                  <span style={{ fontSize: '1.2rem' }}>📊</span>
                  <h2 style={{ fontFamily: 'Nunito, sans-serif', fontWeight: 800, fontSize: '1.05rem', color: '#1f2937', margin: 0 }}>Your Progress</h2>
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '.75rem' }}>
                  {Object.entries(doneByClass).sort((a, b) => b[1] - a[1]).slice(0, 5).map(([classId, count]) => (
                    <Link key={classId} to={`/class/${classId}`} style={{ textDecoration: 'none' }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                        <div style={{ fontSize: '.85rem', fontWeight: 700, color: '#1f2937', minWidth: 80 }}>
                          Class {classId.replace('class', '')}
                        </div>
                        <div style={{ flex: 1, height: 10, background: '#f3f4f6', borderRadius: 99, overflow: 'hidden' }}>
                          <div style={{ height: '100%', width: `${Math.min(100, count * 5)}%`, background: 'linear-gradient(90deg, #4f46e5, #7c3aed)', borderRadius: 99, transition: 'width .6s ease' }} />
                        </div>
                        <div style={{ fontSize: '.82rem', fontWeight: 700, color: '#4f46e5', minWidth: 40, textAlign: 'right' }}>{count} done</div>
                      </div>
                    </Link>
                  ))}
                </div>
                {totalDone === 0 && (
                  <div style={{ textAlign: 'center', padding: '1.5rem', color: '#9ca3af' }}>
                    <div style={{ fontSize: '2rem', marginBottom: '.5rem' }}>🌱</div>
                    <div style={{ fontSize: '.85rem' }}>Start studying topics and your progress will appear here.</div>
                  </div>
                )}
              </div>
            )}

            {/* Mock test results */}
            {mockResults.length > 0 && (
              <div style={{ background: '#fff', border: '1px solid #e5e7eb', borderRadius: 16, padding: '1.25rem 1.5rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1rem' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '.5rem' }}>
                    <span style={{ fontSize: '1.2rem' }}>🎯</span>
                    <h2 style={{ fontFamily: 'Nunito, sans-serif', fontWeight: 800, fontSize: '1.05rem', color: '#1f2937', margin: 0 }}>Recent Mock Tests</h2>
                  </div>
                  <Link to="/exam/jee/mock-test" style={{ fontSize: '.78rem', color: '#4f46e5', fontWeight: 700, textDecoration: 'none' }}>View All →</Link>
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '.75rem' }}>
                  {mockResults.map((r, i) => {
                    const pct = Math.round((r.score / r.maxScore) * 100) || 0;
                    return (
                      <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '1rem', background: '#f9fafb', borderRadius: 12, padding: '.75rem 1rem' }}>
                        <div style={{ fontFamily: 'Nunito, sans-serif', fontWeight: 900, fontSize: '1.2rem', color: pct >= 70 ? '#059669' : pct >= 40 ? '#d97706' : '#dc2626', minWidth: 52, textAlign: 'center' }}>{pct}%</div>
                        <div style={{ flex: 1, minWidth: 0 }}>
                          <div style={{ fontWeight: 700, fontSize: '.88rem', color: '#1f2937', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{r.testTitle || 'Mock Test'}</div>
                          <div style={{ fontSize: '.75rem', color: '#9ca3af' }}>Score: {r.score}/{r.maxScore}</div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            )}

            {/* Quick links */}
            <div style={{ background: '#fff', border: '1px solid #e5e7eb', borderRadius: 16, padding: '1.25rem 1.5rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '.5rem', marginBottom: '1rem' }}>
                <span style={{ fontSize: '1.2rem' }}>⚡</span>
                <h2 style={{ fontFamily: 'Nunito, sans-serif', fontWeight: 800, fontSize: '1.05rem', color: '#1f2937', margin: 0 }}>Quick Links</h2>
              </div>
              <div className="dashboard-quick-links">
                {[
                  { to: '/classes', icon: '📚', label: 'Browse Classes', color: '#4f46e5', bg: '#eef2ff' },
                  { to: '/teachers', icon: '👨‍🏫', label: 'Find a Teacher', color: '#059669', bg: '#ecfdf5' },
                  { to: '/exam/jee', icon: '🏆', label: 'JEE Prep', color: '#d97706', bg: '#fffbeb' },
                  { to: '/exam/neet', icon: '🩺', label: 'NEET Prep', color: '#dc2626', bg: '#fef2f2' },
                  { to: '/my-bookings', icon: '📅', label: 'My Bookings', color: '#7c3aed', bg: '#f5f3ff' },
                  { to: '/search', icon: '🔍', label: 'Search Topics', color: '#0369a1', bg: '#f0f9ff' },
                ].map(link => (
                  <Link key={link.to} to={link.to} style={{ textDecoration: 'none' }}>
                    <div style={{ background: link.bg, color: link.color, borderRadius: 12, padding: '.75rem 1rem', display: 'flex', alignItems: 'center', gap: '.6rem', fontWeight: 700, fontSize: '.85rem', transition: 'opacity .15s' }}
                      onMouseEnter={e => e.currentTarget.style.opacity = '.85'}
                      onMouseLeave={e => e.currentTarget.style.opacity = '1'}>
                      <span style={{ fontSize: '1.2rem' }}>{link.icon}</span> {link.label}
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN — Upcoming sessions */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            <div style={{ background: '#fff', border: '1px solid #e5e7eb', borderRadius: 16, padding: '1.25rem 1.5rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '.5rem' }}>
                  <span style={{ fontSize: '1.2rem' }}>📅</span>
                  <h2 style={{ fontFamily: 'Nunito, sans-serif', fontWeight: 800, fontSize: '1.05rem', color: '#1f2937', margin: 0 }}>Upcoming Sessions</h2>
                </div>
                <Link to="/my-bookings" style={{ fontSize: '.78rem', color: '#4f46e5', fontWeight: 700, textDecoration: 'none' }}>All →</Link>
              </div>

              {loadingBookings && (
                <div style={{ textAlign: 'center', padding: '2rem', color: '#9ca3af', fontSize: '.85rem' }}>Loading…</div>
              )}
              {!loadingBookings && upcoming.length === 0 && (
                <div style={{ textAlign: 'center', padding: '1.5rem 1rem', color: '#9ca3af' }}>
                  <div style={{ fontSize: '2rem', marginBottom: '.5rem' }}>📭</div>
                  <div style={{ fontSize: '.85rem', marginBottom: '1rem' }}>No upcoming sessions</div>
                  <Link to="/teachers" style={{ fontSize: '.82rem', background: '#4f46e5', color: '#fff', borderRadius: 8, padding: '.4rem .9rem', textDecoration: 'none', fontWeight: 700 }}>
                    Book a Session
                  </Link>
                </div>
              )}
              {upcoming.map(b => {
                const date = b.scheduled_date ? new Date(b.scheduled_date).toLocaleDateString('en-IN', { day: 'numeric', month: 'short' }) : '—';
                const isConfirmed = b.status === 'confirmed';
                return (
                  <div key={b._id} style={{ background: isConfirmed ? '#f0fdf4' : '#fff7ed', border: `1px solid ${isConfirmed ? '#86efac' : '#fed7aa'}`, borderRadius: 12, padding: '.85rem 1rem', marginBottom: '.75rem' }}>
                    <div style={{ fontFamily: 'Nunito, sans-serif', fontWeight: 800, fontSize: '.9rem', color: '#1f2937', marginBottom: '.25rem' }}>
                      {b.topic_id ? b.topic_id.replace(/-/g, ' ').replace(/\b\w/g, c => c.toUpperCase()) : 'Session'}
                    </div>
                    <div style={{ fontSize: '.78rem', color: '#6b7280', marginBottom: '.5rem' }}>
                      {date} · {b.time_slot}
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                      <span style={{ fontSize: '.72rem', fontWeight: 700, color: isConfirmed ? '#16a34a' : '#ea580c', background: isConfirmed ? '#dcfce7' : '#ffedd5', padding: '.15rem .55rem', borderRadius: 99 }}>
                        {isConfirmed ? '✅ Confirmed' : '⏳ Pending'}
                      </span>
                      {isConfirmed && b.meet_link && (
                        <a href={b.meet_link} target="_blank" rel="noopener noreferrer"
                          style={{ fontSize: '.75rem', fontWeight: 700, color: '#fff', background: '#1e1b4b', borderRadius: 7, padding: '.2rem .6rem', textDecoration: 'none' }}>
                          📹 Join
                        </a>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Study tip card */}
            <div style={{ background: 'linear-gradient(135deg, #fdf4ff, #ede9fe)', border: '1px solid #ddd6fe', borderRadius: 16, padding: '1.25rem 1.5rem' }}>
              <div style={{ fontSize: '1.5rem', marginBottom: '.5rem' }}>💡</div>
              <h3 style={{ fontFamily: 'Nunito, sans-serif', fontWeight: 800, fontSize: '.95rem', color: '#1f2937', marginBottom: '.4rem' }}>Study Tip</h3>
              <p style={{ fontSize: '.82rem', color: '#6b7280', lineHeight: 1.6, margin: 0 }}>
                Completing <strong>3 topics a day</strong> builds stronger retention than cramming. Mark topics done as you go to track your streak!
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

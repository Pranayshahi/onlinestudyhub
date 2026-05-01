import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { api } from '../utils/api';
import SEO from '../components/SEO';
import { CLASSES } from '../data/curriculum';

const SUBJECT_LABELS = {
  physics: 'Physics', chemistry: 'Chemistry', maths: 'Mathematics',
  biology: 'Biology', english: 'English', history: 'History',
  geography: 'Geography', civics: 'Civics', economics: 'Economics',
  accountancy: 'Accountancy', 'business-studies': 'Business Studies',
  'computer-science': 'Computer Science', 'physical-education': 'Physical Education',
};

const STATUS_META = {
  live:      { label: '🔴 Live Now', color: '#dc2626', bg: '#fef2f2', pulse: true },
  scheduled: { label: '🗓 Upcoming',  color: '#7c3aed', bg: '#f5f3ff', pulse: false },
  ended:     { label: '✅ Ended',     color: '#6b7280', bg: '#f9fafb', pulse: false },
};

function fmtDate(d) {
  const dt = new Date(d);
  return dt.toLocaleDateString('en-IN', { weekday: 'short', day: 'numeric', month: 'short' });
}
function fmtTime(d) {
  return new Date(d).toLocaleTimeString('en-IN', { hour: '2-digit', minute: '2-digit', hour12: true });
}
function minutesUntil(d) {
  return Math.round((new Date(d) - Date.now()) / 60000);
}

// ── Jitsi Modal ────────────────────────────────────────────────────
function JitsiModal({ roomId, title, onClose }) {
  const iframeRef = useRef(null);

  useEffect(() => {
    const h = (e) => e.key === 'Escape' && onClose();
    window.addEventListener('keydown', h);
    return () => window.removeEventListener('keydown', h);
  }, [onClose]);

  return (
    <div style={{
      position: 'fixed', inset: 0, zIndex: 2000,
      background: 'rgba(0,0,0,.85)', display: 'flex',
      flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
      padding: '1rem',
    }} onClick={e => e.target === e.currentTarget && onClose()}>
      <div style={{
        width: '100%', maxWidth: 960, background: '#000',
        borderRadius: 16, overflow: 'hidden',
        boxShadow: '0 25px 60px rgba(0,0,0,.6)',
        display: 'flex', flexDirection: 'column',
      }}>
        <div style={{
          display: 'flex', alignItems: 'center', justifyContent: 'space-between',
          padding: '.75rem 1.25rem', background: '#1e1b4b',
        }}>
          <div style={{ color: '#fff', fontFamily: 'Nunito', fontWeight: 800, fontSize: '.95rem' }}>
            🎥 {title}
          </div>
          <button onClick={onClose} style={{
            background: 'rgba(255,255,255,.15)', border: 'none', color: '#fff',
            borderRadius: 8, padding: '.35rem .75rem', cursor: 'pointer',
            fontWeight: 700, fontSize: '.85rem',
          }}>✕ Leave</button>
        </div>
        <div style={{ position: 'relative', paddingBottom: '56.25%', height: 0 }}>
          <iframe
            ref={iframeRef}
            src={`https://meet.jit.si/${roomId}#config.prejoinPageEnabled=false&config.startWithAudioMuted=false&config.startWithVideoMuted=false&interfaceConfig.TOOLBAR_BUTTONS=["microphone","camera","chat","tileview","hangup"]`}
            allow="camera; microphone; fullscreen; display-capture"
            style={{
              position: 'absolute', inset: 0, width: '100%', height: '100%',
              border: 'none',
            }}
            title="Live Class"
          />
        </div>
      </div>
      <p style={{ color: 'rgba(255,255,255,.5)', fontSize: '.78rem', marginTop: '.75rem' }}>
        Press Esc or click outside to exit fullscreen view
      </p>
    </div>
  );
}

// ── Register Modal ─────────────────────────────────────────────────
function RegisterModal({ gc, user, onOpenLogin, onSuccess, onClose }) {
  const [loading, setLoading] = useState(false);
  const [err, setErr] = useState('');

  async function handleJoin() {
    if (!user) { onClose(); onOpenLogin(); return; }
    setLoading(true); setErr('');
    try {
      const token = localStorage.getItem('osh_teacher_token') || localStorage.getItem('osh_student_token');
      const data = await api(`/group-classes/${gc._id}/join`, { method: 'POST' });
      onSuccess(data);
    } catch (e) {
      setErr(e.message || 'Failed to join. Please try again.');
    } finally {
      setLoading(false);
    }
  }

  const sm = STATUS_META[gc.status] || STATUS_META.scheduled;
  const mins = minutesUntil(gc.scheduledAt);
  const spotsLeft = gc.spotsLeft ?? (gc.maxStudents - (gc.joinedCount || 0));

  return (
    <div style={{
      position: 'fixed', inset: 0, zIndex: 1500,
      background: 'rgba(0,0,0,.5)', display: 'flex',
      alignItems: 'center', justifyContent: 'center', padding: '1rem',
    }} onClick={e => e.target === e.currentTarget && onClose()}>
      <div style={{
        background: '#fff', borderRadius: 20,
        maxWidth: 460, width: '100%',
        boxShadow: '0 20px 50px rgba(0,0,0,.2)',
        overflow: 'hidden',
      }}>
        <div style={{ background: 'linear-gradient(135deg, #1e1b4b, #4f46e5)', padding: '1.5rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '.75rem', marginBottom: '.75rem' }}>
            <span style={{ fontSize: '2rem' }}>{gc.teacherId?.avatar || '👨‍🏫'}</span>
            <div>
              <div style={{ color: '#fff', fontFamily: 'Nunito', fontWeight: 800, fontSize: '1rem' }}>{gc.teacherId?.name}</div>
              <div style={{ color: 'rgba(255,255,255,.7)', fontSize: '.78rem' }}>
                ★ {gc.teacherId?.rating?.toFixed(1)} · {gc.teacherId?.subject}
              </div>
            </div>
          </div>
          <h2 style={{ color: '#fff', fontFamily: 'Nunito', fontWeight: 900, fontSize: '1.2rem', marginBottom: '.4rem', lineHeight: 1.3 }}>
            {gc.title}
          </h2>
          <div style={{ display: 'flex', gap: '.5rem', flexWrap: 'wrap' }}>
            <span style={{ background: sm.bg, color: sm.color, padding: '.2rem .7rem', borderRadius: 999, fontSize: '.75rem', fontWeight: 700 }}>
              {sm.label}
            </span>
            <span style={{ background: 'rgba(255,255,255,.15)', color: '#fff', padding: '.2rem .7rem', borderRadius: 999, fontSize: '.75rem', fontWeight: 600 }}>
              {gc.price === 0 ? '🆓 Free' : `₹${gc.price}`}
            </span>
          </div>
        </div>

        <div style={{ padding: '1.5rem' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '.75rem', marginBottom: '1.25rem' }}>
            {[
              ['📅 Date', fmtDate(gc.scheduledAt)],
              ['🕐 Time', fmtTime(gc.scheduledAt)],
              ['⏱ Duration', `${gc.durationMin} min`],
              ['👥 Spots left', `${spotsLeft} of ${gc.maxStudents}`],
              ['🌐 Language', gc.language],
              ['📚 Class', gc.classId?.replace('class-', 'Class ')],
            ].map(([k, v]) => (
              <div key={k} style={{ background: '#f8fafc', borderRadius: 10, padding: '.6rem .85rem' }}>
                <div style={{ fontSize: '.72rem', color: '#9ca3af', fontWeight: 600, marginBottom: '.15rem' }}>{k}</div>
                <div style={{ fontSize: '.88rem', color: '#1f2937', fontWeight: 700 }}>{v}</div>
              </div>
            ))}
          </div>

          {gc.description && (
            <p style={{ fontSize: '.875rem', color: '#6b7280', lineHeight: 1.6, marginBottom: '1.25rem' }}>
              {gc.description}
            </p>
          )}

          {gc.status === 'live' && mins < 0 && (
            <div style={{ background: '#fef2f2', border: '1px solid #fecaca', borderRadius: 10, padding: '.75rem', marginBottom: '1rem', textAlign: 'center', color: '#dc2626', fontWeight: 700, fontSize: '.88rem' }}>
              🔴 Class is live right now!
            </div>
          )}

          {err && <div style={{ color: '#dc2626', fontSize: '.85rem', marginBottom: '.75rem', background: '#fef2f2', padding: '.6rem .85rem', borderRadius: 8 }}>{err}</div>}

          {spotsLeft <= 0 ? (
            <div style={{ background: '#f3f4f6', borderRadius: 12, padding: '1rem', textAlign: 'center', color: '#6b7280', fontWeight: 600 }}>
              Class is full — no spots available
            </div>
          ) : (
            <button
              onClick={handleJoin}
              disabled={loading}
              style={{
                width: '100%', padding: '.9rem', borderRadius: 12, border: 'none',
                background: loading ? '#9ca3af' : 'linear-gradient(135deg, #4f46e5, #7c3aed)',
                color: '#fff', fontFamily: 'Nunito', fontWeight: 800, fontSize: '1rem',
                cursor: loading ? 'not-allowed' : 'pointer', transition: 'all .2s',
              }}
            >
              {loading ? '⏳ Registering…' : user ? (gc.status === 'live' ? '🎥 Join Live Class' : '✅ Register for Free') : '🔐 Login to Register'}
            </button>
          )}

          <button onClick={onClose} style={{
            width: '100%', marginTop: '.6rem', padding: '.65rem', borderRadius: 12,
            border: '1px solid #e5e7eb', background: 'transparent',
            color: '#6b7280', fontWeight: 600, cursor: 'pointer', fontSize: '.88rem',
          }}>Cancel</button>
        </div>
      </div>
    </div>
  );
}

// ── Class Card ──────────────────────────────────────────────────────
function ClassCard({ gc, user, onOpenLogin, onRefresh }) {
  const [showRegModal, setShowRegModal] = useState(false);
  const [showJitsi, setShowJitsi] = useState(false);
  const [joined, setJoined] = useState(false);
  const [jitsiRoom, setJitsiRoom] = useState(null);
  const sm = STATUS_META[gc.status] || STATUS_META.scheduled;
  const mins = minutesUntil(gc.scheduledAt);
  const spotsLeft = gc.spotsLeft ?? gc.maxStudents;
  const fillPct = Math.round(((gc.joinedCount || 0) / gc.maxStudents) * 100);

  function handleSuccess({ jitsiRoomId, status }) {
    setJoined(true);
    setShowRegModal(false);
    if (status === 'live') {
      setJitsiRoom(jitsiRoomId);
      setShowJitsi(true);
    }
    onRefresh();
  }

  return (
    <>
      <div style={{
        background: '#fff', borderRadius: 18,
        border: `1.5px solid ${gc.status === 'live' ? '#fecaca' : '#e5e7eb'}`,
        boxShadow: gc.status === 'live' ? '0 0 0 3px rgba(220,38,38,.1)' : '0 2px 12px rgba(0,0,0,.06)',
        overflow: 'hidden', display: 'flex', flexDirection: 'column',
        transition: 'transform .2s, box-shadow .2s',
      }}
        onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-3px)'; e.currentTarget.style.boxShadow = '0 8px 24px rgba(0,0,0,.12)'; }}
        onMouseLeave={e => { e.currentTarget.style.transform = ''; e.currentTarget.style.boxShadow = gc.status === 'live' ? '0 0 0 3px rgba(220,38,38,.1)' : '0 2px 12px rgba(0,0,0,.06)'; }}
      >
        {/* Header strip */}
        <div style={{ background: 'linear-gradient(135deg, #1e1b4b 0%, #4f46e5 100%)', padding: '1.25rem 1.25rem 1rem' }}>
          <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: '.5rem', marginBottom: '.75rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '.6rem' }}>
              <span style={{ fontSize: '1.8rem', flexShrink: 0 }}>{gc.teacherId?.avatar || '👨‍🏫'}</span>
              <div>
                <div style={{ color: '#fff', fontFamily: 'Nunito', fontWeight: 800, fontSize: '.9rem' }}>{gc.teacherId?.name}</div>
                <div style={{ color: 'rgba(255,255,255,.65)', fontSize: '.72rem' }}>★ {gc.teacherId?.rating?.toFixed(1)}</div>
              </div>
            </div>
            <span style={{
              background: sm.bg, color: sm.color,
              padding: '.2rem .65rem', borderRadius: 999,
              fontSize: '.7rem', fontWeight: 800, flexShrink: 0,
              animation: sm.pulse ? 'livePulse 1.5s ease-in-out infinite' : 'none',
            }}>
              {sm.label}
            </span>
          </div>
          <h3 style={{ color: '#fff', fontFamily: 'Nunito', fontWeight: 900, fontSize: '1rem', lineHeight: 1.35, margin: 0 }}>
            {gc.title}
          </h3>
        </div>

        <div style={{ padding: '1rem 1.25rem', flex: 1, display: 'flex', flexDirection: 'column', gap: '.6rem' }}>
          {/* Date/time row */}
          <div style={{ display: 'flex', gap: '.5rem', flexWrap: 'wrap' }}>
            <span style={{ background: '#f0f9ff', color: '#0369a1', padding: '.2rem .65rem', borderRadius: 8, fontSize: '.75rem', fontWeight: 700 }}>
              📅 {fmtDate(gc.scheduledAt)}
            </span>
            <span style={{ background: '#f0f9ff', color: '#0369a1', padding: '.2rem .65rem', borderRadius: 8, fontSize: '.75rem', fontWeight: 700 }}>
              🕐 {fmtTime(gc.scheduledAt)}
            </span>
            <span style={{ background: '#f5f3ff', color: '#7c3aed', padding: '.2rem .65rem', borderRadius: 8, fontSize: '.75rem', fontWeight: 700 }}>
              ⏱ {gc.durationMin}m
            </span>
          </div>

          {/* Subject / class badges */}
          <div style={{ display: 'flex', gap: '.4rem', flexWrap: 'wrap' }}>
            <span style={{ background: '#ecfdf5', color: '#059669', padding: '.15rem .55rem', borderRadius: 6, fontSize: '.72rem', fontWeight: 700 }}>
              {SUBJECT_LABELS[gc.subjectId] || gc.subjectId}
            </span>
            <span style={{ background: '#fffbeb', color: '#d97706', padding: '.15rem .55rem', borderRadius: 6, fontSize: '.72rem', fontWeight: 700 }}>
              {gc.classId?.replace('class-', 'Class ')}
            </span>
            <span style={{ background: '#f9fafb', color: '#6b7280', padding: '.15rem .55rem', borderRadius: 6, fontSize: '.72rem', fontWeight: 600 }}>
              🌐 {gc.language}
            </span>
          </div>

          {gc.description && (
            <p style={{ fontSize: '.8rem', color: '#6b7280', lineHeight: 1.5, margin: 0 }}>
              {gc.description.slice(0, 100)}{gc.description.length > 100 ? '…' : ''}
            </p>
          )}

          {/* Spots bar */}
          <div>
            <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '.72rem', color: '#9ca3af', marginBottom: '.25rem' }}>
              <span>{gc.joinedCount || 0} registered</span>
              <span>{spotsLeft} spots left</span>
            </div>
            <div style={{ height: 5, background: '#f3f4f6', borderRadius: 4 }}>
              <div style={{ height: '100%', width: `${fillPct}%`, background: fillPct > 80 ? '#ef4444' : '#4f46e5', borderRadius: 4, transition: 'width .3s' }} />
            </div>
          </div>

          {/* Price + CTA */}
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginTop: 'auto', paddingTop: '.5rem' }}>
            <span style={{ fontFamily: 'Nunito', fontWeight: 900, fontSize: '1rem', color: gc.price === 0 ? '#059669' : '#1e1b4b' }}>
              {gc.price === 0 ? '🆓 Free' : `₹${gc.price}`}
            </span>
            {gc.status === 'ended' ? (
              <span style={{ fontSize: '.8rem', color: '#9ca3af', fontStyle: 'italic' }}>Class ended</span>
            ) : joined ? (
              <button
                onClick={() => { setJitsiRoom(gc.jitsiRoomId); setShowJitsi(true); }}
                style={{ padding: '.5rem 1.1rem', borderRadius: 10, border: 'none', background: '#059669', color: '#fff', fontWeight: 800, fontSize: '.82rem', cursor: 'pointer' }}
              >
                🎥 Join Now
              </button>
            ) : (
              <button
                onClick={() => setShowRegModal(true)}
                style={{
                  padding: '.5rem 1.1rem', borderRadius: 10, border: 'none',
                  background: gc.status === 'live' ? '#dc2626' : '#4f46e5',
                  color: '#fff', fontWeight: 800, fontSize: '.82rem', cursor: 'pointer',
                }}
              >
                {gc.status === 'live' ? '🔴 Join Live' : '+ Register'}
              </button>
            )}
          </div>
        </div>
      </div>

      {showRegModal && (
        <RegisterModal gc={gc} user={user} onOpenLogin={onOpenLogin} onSuccess={handleSuccess} onClose={() => setShowRegModal(false)} />
      )}
      {showJitsi && jitsiRoom && (
        <JitsiModal roomId={jitsiRoom} title={gc.title} onClose={() => setShowJitsi(false)} />
      )}

      <style>{`
        @keyframes livePulse {
          0%, 100% { opacity: 1; }
          50% { opacity: .6; }
        }
      `}</style>
    </>
  );
}

// ── Main GroupClassesPage ──────────────────────────────────────────
export default function GroupClassesPage({ user, onOpenLogin }) {
  const [classes, setClasses] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filterClass, setFilterClass] = useState('');
  const [filterSubject, setFilterSubject] = useState('');
  const [filterStatus, setFilterStatus] = useState('');

  async function load() {
    setLoading(true);
    try {
      const params = new URLSearchParams();
      if (filterClass)   params.set('classId',   filterClass);
      if (filterSubject) params.set('subjectId',  filterSubject);
      if (filterStatus)  params.set('status',     filterStatus);
      const data = await api(`/group-classes?${params}`);
      setClasses(Array.isArray(data) ? data : []);
    } catch {
      setClasses([]);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => { load(); }, [filterClass, filterSubject, filterStatus]);

  const liveClasses      = classes.filter(c => c.status === 'live');
  const upcomingClasses  = classes.filter(c => c.status === 'scheduled');

  return (
    <div>
      <SEO
        title="Live Group Classes — OnlineStudyHub"
        description="Join live group classes with expert teachers. Interactive sessions for Class 11 & 12 CBSE students. Physics, Chemistry, Maths and more."
        path="/group-classes"
      />

      {/* Hero */}
      <div style={{
        background: 'linear-gradient(135deg, #1e1b4b 0%, #4f46e5 60%, #7c3aed 100%)',
        padding: '4rem 0 3.5rem', color: '#fff',
      }}>
        <div className="container" style={{ textAlign: 'center' }}>
          <div style={{ display: 'inline-block', background: 'rgba(255,255,255,.15)', border: '1px solid rgba(255,255,255,.25)', padding: '.35rem 1rem', borderRadius: 999, fontSize: '.78rem', fontWeight: 700, marginBottom: '1rem', letterSpacing: '.04em', textTransform: 'uppercase' }}>
            🎥 Live Group Classes
          </div>
          <h1 style={{ fontFamily: 'Nunito', fontWeight: 900, fontSize: 'clamp(1.8rem,4vw,2.8rem)', marginBottom: '.75rem', lineHeight: 1.2 }}>
            Learn Together, Pay Less
          </h1>
          <p style={{ opacity: .8, fontSize: '1.05rem', maxWidth: 560, margin: '0 auto 2rem', lineHeight: 1.65 }}>
            10–20 students per session. Expert teachers. Live Q&A. Same quality as 1-on-1 at a fraction of the cost.
          </p>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '1.5rem', flexWrap: 'wrap' }}>
            {[['🎓', 'Expert Teachers'], ['💬', 'Live Q&A'], ['🆓', 'Many Free Sessions'], ['📱', 'Join from Any Device']].map(([icon, text]) => (
              <div key={text} style={{ display: 'flex', alignItems: 'center', gap: '.4rem', opacity: .85, fontSize: '.88rem' }}>
                <span>{icon}</span> {text}
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="container" style={{ paddingTop: '2.5rem', paddingBottom: '4rem' }}>
        {/* Filters */}
        <div style={{ display: 'flex', gap: '.75rem', flexWrap: 'wrap', marginBottom: '2rem', alignItems: 'center' }}>
          <span style={{ fontSize: '.85rem', color: '#6b7280', fontWeight: 600 }}>Filter:</span>
          <select
            value={filterClass}
            onChange={e => setFilterClass(e.target.value)}
            style={{ padding: '.45rem .9rem', borderRadius: 10, border: '1.5px solid #e5e7eb', fontSize: '.85rem', color: '#374151', background: '#fff', cursor: 'pointer' }}
          >
            <option value="">All Classes</option>
            <option value="class-11">Class 11</option>
            <option value="class-12">Class 12</option>
          </select>
          <select
            value={filterSubject}
            onChange={e => setFilterSubject(e.target.value)}
            style={{ padding: '.45rem .9rem', borderRadius: 10, border: '1.5px solid #e5e7eb', fontSize: '.85rem', color: '#374151', background: '#fff', cursor: 'pointer' }}
          >
            <option value="">All Subjects</option>
            {Object.entries(SUBJECT_LABELS).map(([k, v]) => (
              <option key={k} value={k}>{v}</option>
            ))}
          </select>
          <select
            value={filterStatus}
            onChange={e => setFilterStatus(e.target.value)}
            style={{ padding: '.45rem .9rem', borderRadius: 10, border: '1.5px solid #e5e7eb', fontSize: '.85rem', color: '#374151', background: '#fff', cursor: 'pointer' }}
          >
            <option value="">Live + Upcoming</option>
            <option value="live">🔴 Live Now</option>
            <option value="scheduled">🗓 Upcoming</option>
          </select>
          {(filterClass || filterSubject || filterStatus) && (
            <button
              onClick={() => { setFilterClass(''); setFilterSubject(''); setFilterStatus(''); }}
              style={{ padding: '.45rem .9rem', borderRadius: 10, border: '1px solid #e5e7eb', background: '#f9fafb', color: '#6b7280', cursor: 'pointer', fontSize: '.82rem' }}
            >
              ✕ Clear
            </button>
          )}
        </div>

        {loading ? (
          <div style={{ textAlign: 'center', padding: '4rem', color: '#9ca3af' }}>
            <div style={{ width: 36, height: 36, border: '3px solid #e0e7ff', borderTopColor: '#4f46e5', borderRadius: '50%', animation: 'spin 0.7s linear infinite', margin: '0 auto 1rem' }} />
            Loading classes…
            <style>{`@keyframes spin { to { transform: rotate(360deg); } }`}</style>
          </div>
        ) : classes.length === 0 ? (
          <div style={{ textAlign: 'center', padding: '4rem 1rem', background: '#f9fafb', borderRadius: 20, border: '2px dashed #e5e7eb' }}>
            <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>📭</div>
            <h3 style={{ fontFamily: 'Nunito', color: '#374151', marginBottom: '.5rem' }}>No classes scheduled yet</h3>
            <p style={{ color: '#9ca3af', fontSize: '.9rem' }}>Check back soon — teachers add new group sessions regularly.</p>
          </div>
        ) : (
          <>
            {/* Live now section */}
            {liveClasses.length > 0 && (
              <section style={{ marginBottom: '2.5rem' }}>
                <h2 style={{ fontFamily: 'Nunito', fontWeight: 900, fontSize: '1.3rem', color: '#dc2626', display: 'flex', alignItems: 'center', gap: '.5rem', marginBottom: '1.25rem' }}>
                  <span style={{ width: 10, height: 10, borderRadius: '50%', background: '#dc2626', display: 'inline-block', animation: 'livePulse 1.5s ease-in-out infinite' }} />
                  Live Right Now
                </h2>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '1.25rem' }}>
                  {liveClasses.map(gc => (
                    <ClassCard key={gc._id} gc={gc} user={user} onOpenLogin={onOpenLogin} onRefresh={load} />
                  ))}
                </div>
              </section>
            )}

            {/* Upcoming */}
            {upcomingClasses.length > 0 && (
              <section>
                <h2 style={{ fontFamily: 'Nunito', fontWeight: 900, fontSize: '1.3rem', color: '#1e1b4b', marginBottom: '1.25rem' }}>
                  🗓 Upcoming Classes
                </h2>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '1.25rem' }}>
                  {upcomingClasses.map(gc => (
                    <ClassCard key={gc._id} gc={gc} user={user} onOpenLogin={onOpenLogin} onRefresh={load} />
                  ))}
                </div>
              </section>
            )}
          </>
        )}

        {/* How it works */}
        <section style={{ marginTop: '4rem', background: '#f8fafc', borderRadius: 20, padding: '2.5rem', border: '1px solid #e2e8f0' }}>
          <h2 style={{ fontFamily: 'Nunito', fontWeight: 900, textAlign: 'center', color: '#1e1b4b', marginBottom: '2rem' }}>
            How Group Classes Work
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', gap: '1.5rem' }}>
            {[
              ['1️⃣', 'Browse & Register', 'Find a class on your topic and click Register — it\'s free for most sessions.'],
              ['2️⃣', 'Get Reminders', 'Receive SMS reminders 15 minutes before the class starts.'],
              ['3️⃣', 'Join the Live Room', 'Click "Join Now" when the class goes live — no app install needed.'],
              ['4️⃣', 'Learn & Ask Questions', 'Interact with the teacher via audio, video, and chat in real-time.'],
            ].map(([icon, title, desc]) => (
              <div key={title} style={{ textAlign: 'center' }}>
                <div style={{ fontSize: '2.2rem', marginBottom: '.5rem' }}>{icon}</div>
                <div style={{ fontFamily: 'Nunito', fontWeight: 800, color: '#1e1b4b', marginBottom: '.35rem' }}>{title}</div>
                <div style={{ fontSize: '.82rem', color: '#6b7280', lineHeight: 1.5 }}>{desc}</div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}

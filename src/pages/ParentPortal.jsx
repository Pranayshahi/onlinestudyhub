import React, { useState, useEffect } from 'react';
import { api } from '../utils/api';

const JWT_KEY = 'osh_parent_token';

function apiFn(endpoint, opts = {}) {
  const token = localStorage.getItem(JWT_KEY);
  return api(endpoint, { ...opts, token });
}

// ── Login / Register ──────────────────────────────────────────
function AuthForm({ onLogin }) {
  const [isSignup, setIsSignup] = useState(false);
  const [form, setForm] = useState({ name: '', email: '', password: '', phone: '' });
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();
    setError(''); setLoading(true);
    try {
      const endpoint = isSignup ? '/parent/register' : '/parent/login';
      const body = isSignup
        ? { name: form.name, email: form.email, password: form.password, phone: form.phone }
        : { email: form.email, password: form.password };
      const data = await api(endpoint, { method: 'POST', body });
      localStorage.setItem(JWT_KEY, data.token);
      onLogin(data);
    } catch (err) {
      setError(err.message || 'Login failed');
    } finally { setLoading(false); }
  }

  return (
    <div style={{ minHeight: '100vh', background: '#f8fafc', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '2rem' }}>
      <div style={{ background: '#fff', borderRadius: 20, padding: '2.5rem 2rem', maxWidth: 420, width: '100%', boxShadow: '0 8px 32px rgba(0,0,0,.07)' }}>
        <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
          <div style={{ fontSize: '3rem', marginBottom: '.75rem' }}>👨‍👩‍👧</div>
          <h1 style={{ fontFamily: 'Nunito', fontWeight: 900, fontSize: '1.5rem', color: '#1e1b4b', marginBottom: '.4rem' }}>
            Parent Portal
          </h1>
          <p style={{ fontSize: '.88rem', color: '#6b7280' }}>
            Track your child's sessions and progress
          </p>
        </div>

        <div style={{ display: 'flex', borderRadius: 10, border: '1.5px solid #e5e7eb', overflow: 'hidden', marginBottom: '1.5rem' }}>
          {['Login', 'Register'].map((label, i) => (
            <button key={label} onClick={() => { setIsSignup(!!i); setError(''); }}
              style={{
                flex: 1, padding: '.55rem', border: 'none', cursor: 'pointer',
                background: isSignup === !!i ? '#1e1b4b' : '#fff',
                color: isSignup === !!i ? '#fff' : '#6b7280',
                fontWeight: 700, fontSize: '.88rem', transition: 'all .2s',
              }}>
              {label}
            </button>
          ))}
        </div>

        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '.85rem' }}>
          {isSignup && (
            <div>
              <label style={{ fontSize: '.75rem', fontWeight: 600, color: '#374151', display: 'block', marginBottom: '.3rem' }}>Full Name *</label>
              <input value={form.name} onChange={e => setForm(f => ({ ...f, name: e.target.value }))} required
                placeholder="Your name"
                style={{ width: '100%', padding: '.55rem .85rem', borderRadius: 10, border: '1.5px solid #d1d5db', fontSize: '.9rem', boxSizing: 'border-box', outline: 'none' }} />
            </div>
          )}
          <div>
            <label style={{ fontSize: '.75rem', fontWeight: 600, color: '#374151', display: 'block', marginBottom: '.3rem' }}>Email *</label>
            <input type="email" value={form.email} onChange={e => setForm(f => ({ ...f, email: e.target.value }))} required
              placeholder="parent@example.com"
              style={{ width: '100%', padding: '.55rem .85rem', borderRadius: 10, border: '1.5px solid #d1d5db', fontSize: '.9rem', boxSizing: 'border-box', outline: 'none' }} />
          </div>
          <div>
            <label style={{ fontSize: '.75rem', fontWeight: 600, color: '#374151', display: 'block', marginBottom: '.3rem' }}>Password *</label>
            <input type="password" value={form.password} onChange={e => setForm(f => ({ ...f, password: e.target.value }))} required minLength={isSignup ? 6 : 1}
              placeholder={isSignup ? 'Min. 6 characters' : 'Your password'}
              style={{ width: '100%', padding: '.55rem .85rem', borderRadius: 10, border: '1.5px solid #d1d5db', fontSize: '.9rem', boxSizing: 'border-box', outline: 'none' }} />
          </div>
          {isSignup && (
            <div>
              <label style={{ fontSize: '.75rem', fontWeight: 600, color: '#374151', display: 'block', marginBottom: '.3rem' }}>Phone (optional)</label>
              <input type="tel" value={form.phone} onChange={e => setForm(f => ({ ...f, phone: e.target.value }))}
                placeholder="+91 98765 43210"
                style={{ width: '100%', padding: '.55rem .85rem', borderRadius: 10, border: '1.5px solid #d1d5db', fontSize: '.9rem', boxSizing: 'border-box', outline: 'none' }} />
            </div>
          )}
          {error && <div style={{ color: '#dc2626', fontSize: '.82rem', background: '#fef2f2', padding: '.5rem .85rem', borderRadius: 8 }}>⚠️ {error}</div>}
          <button type="submit" disabled={loading}
            style={{ padding: '.7rem', background: '#1e1b4b', color: '#fff', border: 'none', borderRadius: 12, fontFamily: 'Nunito', fontWeight: 800, fontSize: '.95rem', cursor: loading ? 'not-allowed' : 'pointer', opacity: loading ? .7 : 1 }}>
            {loading ? 'Please wait…' : isSignup ? 'Create Parent Account' : 'Login'}
          </button>
        </form>

        <p style={{ textAlign: 'center', marginTop: '1.5rem', fontSize: '.82rem', color: '#9ca3af' }}>
          Student? <a href="/" style={{ color: '#4f46e5', fontWeight: 700 }}>Go to Student Portal →</a>
        </p>
      </div>
    </div>
  );
}

// ── Child Data View ───────────────────────────────────────────
function ChildView({ linkedInfo, onBack }) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [tab, setTab] = useState('upcoming');

  useEffect(() => {
    apiFn(`/parent/child/${encodeURIComponent(linkedInfo.email)}/data`)
      .then(setData)
      .catch(() => setData(null))
      .finally(() => setLoading(false));
  }, [linkedInfo.email]);

  if (loading) return <div style={{ textAlign: 'center', padding: '4rem', color: '#6b7280' }}>Loading…</div>;
  if (!data) return (
    <div style={{ textAlign: 'center', padding: '4rem' }}>
      <p style={{ color: '#dc2626' }}>Failed to load data. Please try again.</p>
      <button onClick={onBack} style={{ marginTop: '1rem', padding: '.5rem 1.25rem', background: '#f3f4f6', border: 'none', borderRadius: 8, cursor: 'pointer', fontWeight: 600 }}>← Back</button>
    </div>
  );

  const { student, sessions, stats } = data;
  const upcoming = sessions.filter(s => s.status === 'confirmed' || s.status === 'pending');
  const history  = sessions.filter(s => s.status === 'completed' || s.status === 'cancelled');
  const displayed = tab === 'upcoming' ? upcoming : history;

  const statusColor = { confirmed: '#059669', pending: '#d97706', completed: '#4f46e5', cancelled: '#dc2626' };

  return (
    <div>
      {/* Child header */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.75rem', flexWrap: 'wrap' }}>
        <button onClick={onBack} style={{ padding: '.45rem .9rem', border: '1.5px solid #e5e7eb', borderRadius: 9, background: '#fff', cursor: 'pointer', fontSize: '.88rem', color: '#374151', fontWeight: 600 }}>
          ← Back
        </button>
        <div style={{ fontSize: '2.5rem' }}>{student.avatar || '🧑‍🎓'}</div>
        <div>
          <div style={{ fontFamily: 'Nunito', fontWeight: 900, fontSize: '1.2rem', color: '#1e1b4b' }}>{student.name}</div>
          <div style={{ fontSize: '.8rem', color: '#9ca3af' }}>{linkedInfo.email}{student.class_id && ` · Class ${student.class_id.replace('class-','')}`}</div>
        </div>
      </div>

      {/* Stats row */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(150px,1fr))', gap: '1rem', marginBottom: '1.75rem' }}>
        {[
          { icon: '📅', label: 'Total Sessions', value: stats.totalSessions, color: '#4f46e5' },
          { icon: '✅', label: 'Completed', value: stats.completedCount, color: '#059669' },
          { icon: '🔜', label: 'Upcoming', value: stats.upcomingCount, color: '#d97706' },
          { icon: '💰', label: 'Total Spent', value: stats.totalSpent ? `₹${stats.totalSpent}` : '—', color: '#dc2626' },
        ].map(s => (
          <div key={s.label} style={{ background: '#fff', borderRadius: 14, padding: '1rem 1.25rem', border: '1px solid #e5e7eb', display: 'flex', alignItems: 'center', gap: '.75rem' }}>
            <div style={{ fontSize: '1.4rem', background: s.color + '18', color: s.color, width: 42, height: 42, borderRadius: 12, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>{s.icon}</div>
            <div>
              <div style={{ fontFamily: 'Nunito', fontWeight: 900, fontSize: '1.3rem', color: s.color }}>{s.value}</div>
              <div style={{ fontSize: '.72rem', color: '#9ca3af', fontWeight: 600 }}>{s.label}</div>
            </div>
          </div>
        ))}
      </div>

      {/* Session list */}
      <div style={{ background: '#fff', borderRadius: 16, border: '1px solid #e5e7eb', overflow: 'hidden' }}>
        <div style={{ display: 'flex', borderBottom: '1px solid #e5e7eb' }}>
          {[['upcoming', 'Upcoming'], ['history', 'History']].map(([key, label]) => (
            <button key={key} onClick={() => setTab(key)}
              style={{
                flex: 1, padding: '.75rem', border: 'none', cursor: 'pointer',
                background: tab === key ? '#f8fafc' : '#fff',
                color: tab === key ? '#1e1b4b' : '#9ca3af',
                fontWeight: tab === key ? 700 : 500,
                fontSize: '.88rem', borderBottom: tab === key ? '2px solid #4f46e5' : '2px solid transparent',
                transition: 'all .2s',
              }}>
              {label} ({tab === key ? displayed.length : (key === 'upcoming' ? upcoming.length : history.length)})
            </button>
          ))}
        </div>

        {displayed.length === 0 ? (
          <div style={{ padding: '3rem', textAlign: 'center', color: '#9ca3af' }}>
            <div style={{ fontSize: '2.5rem', marginBottom: '.75rem' }}>📭</div>
            No {tab === 'upcoming' ? 'upcoming' : 'past'} sessions
          </div>
        ) : (
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            {displayed.map((s, i) => (
              <div key={s.id} style={{
                padding: '1rem 1.25rem',
                borderBottom: i < displayed.length - 1 ? '1px solid #f3f4f6' : 'none',
                display: 'flex', alignItems: 'center', gap: '1rem', flexWrap: 'wrap',
              }}>
                <div style={{
                  width: 46, height: 46, borderRadius: 12,
                  background: (statusColor[s.status] || '#6b7280') + '18',
                  color: statusColor[s.status] || '#6b7280',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontSize: '.88rem', fontWeight: 800, textAlign: 'center', flexShrink: 0,
                }}>
                  {s.date ? new Date(s.date + 'T00:00:00').toLocaleDateString('en-IN', { day: 'numeric', month: 'short' }) : '—'}
                </div>
                <div style={{ flex: 1, minWidth: 0 }}>
                  <div style={{ fontWeight: 700, color: '#1e1b4b', fontSize: '.92rem' }}>
                    {s.topic ? s.topic.replace(/-/g,' ').replace(/\b\w/g,c=>c.toUpperCase()) : 'Session'}
                    {s.is_demo && <span style={{ background: '#f0fdf4', color: '#166534', fontSize: '.65rem', fontWeight: 700, padding: '.1rem .45rem', borderRadius: 999, marginLeft: '.5rem' }}>FREE DEMO</span>}
                  </div>
                  <div style={{ fontSize: '.78rem', color: '#9ca3af', marginTop: '.15rem' }}>
                    {s.teacherName} · {s.subject} · {s.time}
                  </div>
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: '.3rem' }}>
                  <span style={{ fontSize: '.72rem', fontWeight: 700, color: statusColor[s.status] || '#6b7280', textTransform: 'capitalize' }}>
                    {s.status}
                  </span>
                  {s.amount && <span style={{ fontSize: '.72rem', color: '#6b7280' }}>₹{s.amount}</span>}
                  {s.status === 'confirmed' && s.meet_link && (
                    <a href={s.meet_link} target="_blank" rel="noopener noreferrer" style={{ fontSize: '.72rem', color: '#4f46e5', fontWeight: 700, textDecoration: 'none' }}>
                      📹 Join
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

// ── Main Portal ───────────────────────────────────────────────
export default function ParentPortal() {
  const [parent, setParent] = useState(() => {
    const token = localStorage.getItem(JWT_KEY);
    if (!token) return null;
    try {
      const p = JSON.parse(atob(token.split('.')[1]));
      return p.role === 'parent' ? p : null;
    } catch { return null; }
  });
  const [linkedStudents, setLinkedStudents] = useState([]);
  const [selectedChild, setSelectedChild] = useState(null);
  const [linkEmail, setLinkEmail] = useState('');
  const [linkNickname, setLinkNickname] = useState('');
  const [linkLoading, setLinkLoading] = useState(false);
  const [linkError, setLinkError] = useState('');
  const [linkSuccess, setLinkSuccess] = useState('');

  useEffect(() => {
    if (!parent) return;
    apiFn('/parent/me')
      .then(data => setLinkedStudents(data.linked_students || []))
      .catch(() => {});
  }, [parent]);

  async function linkChild(e) {
    e.preventDefault();
    setLinkError(''); setLinkSuccess(''); setLinkLoading(true);
    try {
      await apiFn('/parent/link', {
        method: 'POST',
        body: { studentEmail: linkEmail.trim(), nickname: linkNickname.trim() },
      });
      setLinkedStudents(prev => [...prev, { email: linkEmail.trim(), nickname: linkNickname.trim() || linkEmail.trim() }]);
      setLinkSuccess(`✓ Linked to ${linkEmail}`);
      setLinkEmail(''); setLinkNickname('');
    } catch (err) { setLinkError(err.message || 'Failed to link'); }
    finally { setLinkLoading(false); }
  }

  async function unlinkChild(email) {
    if (!window.confirm(`Remove ${email} from your linked children?`)) return;
    try {
      await apiFn(`/parent/unlink/${encodeURIComponent(email)}`, { method: 'DELETE' });
      setLinkedStudents(prev => prev.filter(s => s.email !== email));
      if (selectedChild?.email === email) setSelectedChild(null);
    } catch {}
  }

  function logout() {
    localStorage.removeItem(JWT_KEY);
    setParent(null);
    setLinkedStudents([]);
    setSelectedChild(null);
  }

  if (!parent) return <AuthForm onLogin={data => setParent(data)} />;

  return (
    <div style={{ minHeight: '100vh', background: '#f0f2f8' }}>
      {/* Header */}
      <div style={{ background: 'linear-gradient(135deg, #1e1b4b, #312e81)', color: '#fff', padding: '1.5rem 0' }}>
        <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '1rem' }}>
          <div>
            <div style={{ fontSize: '.8rem', opacity: .7, marginBottom: '.2rem' }}>Parent Portal</div>
            <div style={{ fontFamily: 'Nunito', fontWeight: 900, fontSize: '1.25rem' }}>👨‍👩‍👧 {parent.name}</div>
          </div>
          <button onClick={logout} style={{ padding: '.45rem 1rem', background: 'rgba(255,255,255,.12)', border: '1px solid rgba(255,255,255,.25)', color: '#fff', borderRadius: 8, cursor: 'pointer', fontSize: '.83rem', fontWeight: 600 }}>
            Logout
          </button>
        </div>
      </div>

      <div className="container" style={{ paddingTop: '2rem', paddingBottom: '5rem' }}>
        {selectedChild ? (
          <ChildView linkedInfo={selectedChild} onBack={() => setSelectedChild(null)} />
        ) : (
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(320px,1fr))', gap: '1.5rem', alignItems: 'start' }}>

            {/* My Children */}
            <div style={{ background: '#fff', borderRadius: 18, border: '1px solid #e5e7eb', overflow: 'hidden' }}>
              <div style={{ padding: '1.25rem 1.5rem', borderBottom: '1px solid #f3f4f6' }}>
                <div style={{ fontFamily: 'Nunito', fontWeight: 800, fontSize: '1rem', color: '#1e1b4b' }}>👧👦 My Children</div>
                <div style={{ fontSize: '.78rem', color: '#9ca3af', marginTop: '.2rem' }}>Click a child to view their sessions</div>
              </div>
              {linkedStudents.length === 0 ? (
                <div style={{ padding: '2.5rem', textAlign: 'center', color: '#9ca3af' }}>
                  <div style={{ fontSize: '2.5rem', marginBottom: '.75rem' }}>🔗</div>
                  No children linked yet. Add one using the form.
                </div>
              ) : (
                <div>
                  {linkedStudents.map(s => (
                    <div key={s.email} style={{
                      padding: '1rem 1.5rem', borderBottom: '1px solid #f9fafb',
                      display: 'flex', alignItems: 'center', gap: '.85rem',
                      cursor: 'pointer', transition: 'background .15s',
                    }}
                      onClick={() => setSelectedChild(s)}
                      onMouseEnter={e => e.currentTarget.style.background = '#f9fafb'}
                      onMouseLeave={e => e.currentTarget.style.background = ''}
                    >
                      <div style={{ width: 42, height: 42, borderRadius: '50%', background: '#eef2ff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.3rem', flexShrink: 0 }}>
                        🧑‍🎓
                      </div>
                      <div style={{ flex: 1, minWidth: 0 }}>
                        <div style={{ fontWeight: 700, color: '#1e1b4b', fontSize: '.92rem' }}>{s.nickname || s.email}</div>
                        <div style={{ fontSize: '.75rem', color: '#9ca3af', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{s.email}</div>
                      </div>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '.5rem' }}>
                        <span style={{ fontSize: '.78rem', color: '#4f46e5', fontWeight: 600 }}>View →</span>
                        <button
                          onClick={e => { e.stopPropagation(); unlinkChild(s.email); }}
                          style={{ padding: '.2rem .55rem', background: '#fef2f2', border: '1px solid #fecaca', color: '#dc2626', borderRadius: 6, fontSize: '.72rem', cursor: 'pointer' }}
                        >
                          Remove
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Link a child */}
            <div style={{ background: '#fff', borderRadius: 18, border: '1px solid #e5e7eb', padding: '1.5rem' }}>
              <div style={{ fontFamily: 'Nunito', fontWeight: 800, fontSize: '1rem', color: '#1e1b4b', marginBottom: '.35rem' }}>
                🔗 Add a Child
              </div>
              <p style={{ fontSize: '.82rem', color: '#6b7280', marginBottom: '1.25rem', lineHeight: 1.5 }}>
                Enter your child's registered email on OnlineStudyHub to link their account.
              </p>
              <form onSubmit={linkChild} style={{ display: 'flex', flexDirection: 'column', gap: '.75rem' }}>
                <div>
                  <label style={{ fontSize: '.75rem', fontWeight: 600, color: '#374151', display: 'block', marginBottom: '.3rem' }}>Child's Email *</label>
                  <input type="email" value={linkEmail} onChange={e => setLinkEmail(e.target.value)} required
                    placeholder="child@example.com"
                    style={{ width: '100%', padding: '.55rem .85rem', borderRadius: 10, border: '1.5px solid #d1d5db', fontSize: '.9rem', boxSizing: 'border-box', outline: 'none' }} />
                </div>
                <div>
                  <label style={{ fontSize: '.75rem', fontWeight: 600, color: '#374151', display: 'block', marginBottom: '.3rem' }}>Nickname (optional)</label>
                  <input value={linkNickname} onChange={e => setLinkNickname(e.target.value)}
                    placeholder="e.g. Rahul, My daughter…"
                    style={{ width: '100%', padding: '.55rem .85rem', borderRadius: 10, border: '1.5px solid #d1d5db', fontSize: '.9rem', boxSizing: 'border-box', outline: 'none' }} />
                </div>
                {linkError && <div style={{ color: '#dc2626', fontSize: '.8rem', background: '#fef2f2', padding: '.5rem .85rem', borderRadius: 8 }}>⚠️ {linkError}</div>}
                {linkSuccess && <div style={{ color: '#059669', fontSize: '.8rem', fontWeight: 700 }}>{linkSuccess}</div>}
                <button type="submit" disabled={linkLoading}
                  style={{ padding: '.65rem', background: '#1e1b4b', color: '#fff', border: 'none', borderRadius: 10, fontWeight: 700, fontSize: '.9rem', cursor: linkLoading ? 'not-allowed' : 'pointer', opacity: linkLoading ? .7 : 1 }}>
                  {linkLoading ? 'Linking…' : 'Link Child'}
                </button>
              </form>

              <div style={{ marginTop: '1.5rem', padding: '1rem', background: '#fffbeb', borderRadius: 12, border: '1px solid #fde68a' }}>
                <div style={{ fontSize: '.78rem', fontWeight: 700, color: '#92400e', marginBottom: '.35rem' }}>💡 How it works</div>
                <ul style={{ margin: 0, paddingLeft: '1.1rem', fontSize: '.78rem', color: '#78350f', lineHeight: 1.7 }}>
                  <li>Your child registers on OnlineStudyHub</li>
                  <li>You enter their email here to link</li>
                  <li>View all their sessions in real-time</li>
                  <li>See upcoming classes, confirmations and history</li>
                </ul>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

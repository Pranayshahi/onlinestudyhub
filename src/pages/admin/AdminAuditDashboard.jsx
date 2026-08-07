import React, { useState, useEffect } from 'react';
import SEO from '../../components/SEO';

export default function AdminAuditDashboard() {
  const [token, setToken] = useState(() => localStorage.getItem('osh_superadmin_token') || '');
  const [loginEmail, setLoginEmail] = useState('admin@onlinestudyhub.com');
  const [loginPassword, setLoginPassword] = useState('SuperAdmin2026!');
  const [adminPin, setAdminPin] = useState('9999');
  const [loginError, setLoginError] = useState('');
  const [loggingIn, setLoggingIn] = useState(false);

  const [auditData, setAuditData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [activeTab, setActiveTab] = useState('all'); // 'all' | 'signups' | 'logins' | 'contacts'

  const getApiUrl = (path) => {
    const base = process.env.REACT_APP_API_URL || (window.location.hostname === 'localhost' ? 'http://localhost:5001' : '');
    return `${base.replace(/\/$/, '')}${path}`;
  };

  useEffect(() => {
    if (token) {
      fetchAuditLogs();
    }
  }, [token]);

  async function handleAdminLogin(e) {
    e.preventDefault();
    setLoginError('');
    setLoggingIn(true);
    try {
      const res = await fetch(getApiUrl('/api/admin/login'), {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email: loginEmail, password: loginPassword, adminPin }),
      });

      const contentType = res.headers.get('content-type') || '';
      let data = {};
      if (contentType.includes('application/json')) {
        data = await res.json();
      } else {
        const text = await res.text();
        throw new Error(`Server connection issue (${res.status}). Please ensure backend is running on port 5001.`);
      }

      if (!res.ok) throw new Error(data.error || 'Invalid credentials');

      localStorage.setItem('osh_superadmin_token', data.token);
      setToken(data.token);
    } catch (err) {
      setLoginError(err.message || 'Login failed');
    } finally {
      setLoggingIn(false);
    }
  }

  async function fetchAuditLogs() {
    setLoading(true);
    try {
      const res = await fetch(getApiUrl('/api/admin/audit-logs'), {
        headers: { 'Authorization': `Bearer ${token}` },
      });
      if (res.status === 401 || res.status === 403) {
        localStorage.removeItem('osh_superadmin_token');
        setToken('');
        return;
      }

      const contentType = res.headers.get('content-type') || '';
      if (contentType.includes('application/json')) {
        const data = await res.json();
        setAuditData(data);
      }
    } catch (err) {
      console.error('Failed to load audit logs:', err);
    } finally {
      setLoading(false);
    }
  }

  function handleLogout() {
    localStorage.removeItem('osh_superadmin_token');
    setToken('');
    setAuditData(null);
  }

  if (!token) {
    return (
      <div style={{ background: 'linear-gradient(180deg, #0b0f19 0%, #1e1b4b 100%)', minHeight: '100vh', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '2rem 1rem' }}>
        <SEO title="Super Admin Portal — OnlineStudyHub" description="Super Admin portal authentication and page audit login." />

        <div style={{ background: 'rgba(255,255,255,0.06)', backdropFilter: 'blur(20px)', border: '1.5px solid rgba(255,255,255,0.18)', borderRadius: 24, padding: '2.5rem', width: '100%', maxWidth: 440, boxShadow: '0 20px 50px rgba(0,0,0,0.5)', textAlign: 'center' }}>
          <div style={{ fontSize: '3rem', marginBottom: '.5rem' }}>🛡️</div>
          <h1 style={{ fontFamily: 'Nunito', fontWeight: 900, color: '#fff', fontSize: '1.75rem', margin: '0 0 .3rem' }}>
            Super Admin Portal
          </h1>
          <p style={{ fontSize: '.88rem', color: 'rgba(255,255,255,0.7)', margin: '0 0 1.75rem' }}>
            Enter Super Admin credentials or security PIN to inspect live page audit logs &amp; user activity.
          </p>

          {loginError && (
            <div style={{ background: 'rgba(239,68,68,0.2)', border: '1px solid rgba(248,113,113,0.4)', color: '#fca5a5', padding: '.65rem', borderRadius: 12, fontSize: '.82rem', fontWeight: 800, marginBottom: '1.25rem' }}>
              ⚠️ {loginError}
            </div>
          )}

          <form onSubmit={handleAdminLogin} style={{ display: 'flex', flexDirection: 'column', gap: '1rem', textAlign: 'left' }}>
            <div>
              <label style={{ fontSize: '.78rem', fontWeight: 900, color: '#c7d2fe', textTransform: 'uppercase', marginBottom: '.3rem', display: 'block' }}>
                Admin Email / Username
              </label>
              <input
                type="text"
                value={loginEmail}
                onChange={e => setLoginEmail(e.target.value)}
                placeholder="admin@onlinestudyhub.com..."
                style={{ width: '100%', borderRadius: 12, border: '1px solid rgba(255,255,255,0.2)', background: 'rgba(0,0,0,0.4)', color: '#fff', padding: '.65rem 1rem', fontFamily: 'Nunito', fontSize: '.9rem', outline: 'none' }}
              />
            </div>

            <div>
              <label style={{ fontSize: '.78rem', fontWeight: 900, color: '#c7d2fe', textTransform: 'uppercase', marginBottom: '.3rem', display: 'block' }}>
                Admin Password
              </label>
              <input
                type="password"
                value={loginPassword}
                onChange={e => setLoginPassword(e.target.value)}
                placeholder="Super Admin Password..."
                style={{ width: '100%', borderRadius: 12, border: '1px solid rgba(255,255,255,0.2)', background: 'rgba(0,0,0,0.4)', color: '#fff', padding: '.65rem 1rem', fontFamily: 'Nunito', fontSize: '.9rem', outline: 'none' }}
              />
            </div>

            <div style={{ textAlign: 'center', margin: '.2rem 0' }}>
              <span style={{ fontSize: '.75rem', color: 'rgba(255,255,255,0.5)' }}>— OR USE SECURITY PIN —</span>
            </div>

            <div>
              <label style={{ fontSize: '.78rem', fontWeight: 900, color: '#c7d2fe', textTransform: 'uppercase', marginBottom: '.3rem', display: 'block' }}>
                Admin PIN (e.g. 9999)
              </label>
              <input
                type="password"
                maxLength={6}
                value={adminPin}
                onChange={e => setAdminPin(e.target.value)}
                placeholder="Enter 4-digit PIN..."
                style={{ width: '100%', borderRadius: 12, border: '1px solid rgba(255,255,255,0.2)', background: 'rgba(0,0,0,0.4)', color: '#fff', padding: '.65rem 1rem', fontFamily: 'Nunito', fontSize: '.9rem', outline: 'none', letterSpacing: '3px' }}
              />
            </div>

            <button
              type="submit"
              disabled={loggingIn}
              className="btn btn-primary"
              style={{ marginTop: '.5rem', padding: '.75rem', borderRadius: 12, fontWeight: 900, fontSize: '.95rem', background: 'linear-gradient(135deg, #6366f1, #4f46e5)', border: 'none' }}
            >
              {loggingIn ? '🔑 Verifying...' : '🔓 Unlock Admin Dashboard'}
            </button>
          </form>
        </div>
      </div>
    );
  }

  const logs = auditData?.logs || [];
  const contacts = auditData?.contacts || [];
  const metrics = auditData?.metrics || {};

  const filteredLogs = logs.filter(l => {
    if (activeTab === 'signups') return l.eventType?.includes('signup');
    if (activeTab === 'logins') return l.eventType?.includes('login');
    return true;
  });

  const loggedInUsers = auditData?.loggedInUsers || [];
  const registeredStudents = auditData?.registeredStudents || [];
  const registeredTeachers = auditData?.registeredTeachers || [];

  return (
    <div style={{ background: 'linear-gradient(180deg, #0b0f19 0%, #1e1b4b 100%)', color: '#fff', minHeight: '100vh', padding: '2.5rem 0' }}>
      <SEO title="Super Admin Page Audit & User Monitor — OnlineStudyHub" description="Monitor real-time student signups, logins, and contact feedback submissions." />

      <div className="container">
        {/* Header */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '1rem', marginBottom: '2rem' }}>
          <div>
            <span style={{ background: 'rgba(16,185,129,0.2)', border: '1px solid rgba(110,231,183,0.3)', color: '#6ee7b7', fontSize: '.78rem', fontWeight: 900, padding: '.3rem .9rem', borderRadius: 20, textTransform: 'uppercase', letterSpacing: '0.5px' }}>
              🛡️ Super Admin Control Center
            </span>
            <h1 style={{ fontFamily: 'Nunito', fontWeight: 900, fontSize: 'clamp(1.8rem, 3.5vw, 2.5rem)', margin: '.5rem 0 0', color: '#fff' }}>
              Page Audit &amp; Live User Activity Monitor
            </h1>
          </div>

          <div style={{ display: 'flex', gap: '.6rem' }}>
            <button
              onClick={fetchAuditLogs}
              style={{ background: 'rgba(255,255,255,0.1)', border: '1px solid rgba(255,255,255,0.2)', color: '#fff', borderRadius: 12, padding: '.55rem 1rem', fontSize: '.83rem', fontWeight: 800, cursor: 'pointer' }}
            >
              🔄 Refresh Logs
            </button>
            <button
              onClick={handleLogout}
              style={{ background: 'rgba(239,68,68,0.2)', border: '1px solid rgba(248,113,113,0.3)', color: '#fca5a5', borderRadius: 12, padding: '.55rem 1rem', fontSize: '.83rem', fontWeight: 800, cursor: 'pointer' }}
            >
              🔒 Lock Portal
            </button>
          </div>
        </div>

        {/* Real-time Metrics Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '1rem', marginBottom: '2rem' }}>
          {[
            { label: 'Total Registered Students', value: metrics.totalStudents || 0, icon: '👨‍🎓', color: '#6366f1' },
            { label: 'Total Registered Teachers', value: metrics.totalTeachers || 0, icon: '👨‍🏫', color: '#f59e0b' },
            { label: 'Signups Today', value: metrics.signupsToday || 0, icon: '🔥', color: '#10b981' },
            { label: 'Logins Today', value: metrics.loginsToday || 0, icon: '🔑', color: '#ec4899' },
            { label: 'Feedback / Complaints', value: metrics.totalFeedbacks || 0, icon: '💬', color: '#8b5cf6' },
          ].map((m, i) => (
            <div key={i} style={{ background: 'rgba(255,255,255,0.06)', backdropFilter: 'blur(16px)', border: '1px solid rgba(255,255,255,0.15)', borderRadius: 18, padding: '1.25rem', boxShadow: '0 8px 24px rgba(0,0,0,0.3)' }}>
              <div style={{ fontSize: '1.6rem', marginBottom: '.3rem' }}>{m.icon}</div>
              <div style={{ fontSize: '1.8rem', fontWeight: 900, color: m.color, fontFamily: 'Nunito' }}>
                {m.value.toLocaleString()}
              </div>
              <div style={{ fontSize: '.78rem', color: 'rgba(255,255,255,0.7)', fontWeight: 700, marginTop: '.2rem' }}>
                {m.label}
              </div>
            </div>
          ))}
        </div>

        {/* Tab Filters */}
        <div style={{ display: 'flex', gap: '.5rem', marginBottom: '1.25rem', flexWrap: 'wrap' }}>
          {[
            { id: 'all', label: '📜 All Audit Events' },
            { id: 'users', label: `👥 All Logged-In Users (${loggedInUsers.length})` },
            { id: 'students', label: `👨‍🎓 Registered Students (${registeredStudents.length})` },
            { id: 'teachers', label: `👨‍🏫 Registered Teachers (${registeredTeachers.length})` },
            { id: 'signups', label: '🆕 User Signups' },
            { id: 'logins', label: '🔑 User Logins' },
            { id: 'contacts', label: `💬 Feedback & Complaints (${contacts.length})` },
          ].map(tab => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              style={{
                background: activeTab === tab.id ? 'linear-gradient(135deg, #6366f1, #4f46e5)' : 'rgba(255,255,255,0.08)',
                border: activeTab === tab.id ? '1px solid #a5b4fc' : '1px solid rgba(255,255,255,0.12)',
                color: '#fff',
                borderRadius: 12,
                padding: '.6rem 1.1rem',
                fontSize: '.83rem',
                fontWeight: 900,
                cursor: 'pointer'
              }}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Table Views */}
        <div style={{ background: 'rgba(255,255,255,0.05)', backdropFilter: 'blur(16px)', border: '1.5px solid rgba(255,255,255,0.16)', borderRadius: 22, padding: '1.5rem', boxShadow: '0 16px 40px rgba(0,0,0,0.35)', overflowX: 'auto' }}>
          {loading ? (
            <div style={{ textAlign: 'center', padding: '3rem 1rem', color: 'rgba(255,255,255,0.7)' }}>
              ⏳ Fetching live audit log activity...
            </div>
          ) : activeTab === 'students' ? (
            <div>
              <h3 style={{ fontFamily: 'Nunito', fontWeight: 900, color: '#fff', fontSize: '1.1rem', marginBottom: '1rem' }}>
                👨‍🎓 All Registered Students ({registeredStudents.length})
              </h3>
              {registeredStudents.length === 0 ? (
                <div style={{ textAlign: 'center', padding: '2rem 1rem', color: 'rgba(255,255,255,0.6)' }}>
                  No registered students found.
                </div>
              ) : (
                <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left', fontSize: '.85rem' }}>
                  <thead>
                    <tr style={{ borderBottom: '1px solid rgba(255,255,255,0.15)', color: '#c7d2fe', fontSize: '.75rem', textTransform: 'uppercase' }}>
                      <th style={{ padding: '.75rem 1rem' }}>Student Name</th>
                      <th style={{ padding: '.75rem 1rem' }}>Email Address</th>
                      <th style={{ padding: '.75rem 1rem' }}>Phone Number</th>
                      <th style={{ padding: '.75rem 1rem' }}>Class / Target</th>
                      <th style={{ padding: '.75rem 1rem' }}>Registered Date</th>
                    </tr>
                  </thead>
                  <tbody>
                    {registeredStudents.map(s => (
                      <tr key={s.id} style={{ borderBottom: '1px solid rgba(255,255,255,0.08)' }}>
                        <td style={{ padding: '.75rem 1rem', fontWeight: 900, color: '#fff', display: 'flex', alignItems: 'center', gap: '.4rem' }}>
                          <span>{s.avatar || '🧑‍🎓'}</span> {s.name}
                        </td>
                        <td style={{ padding: '.75rem 1rem', color: '#a5b4fc' }}>
                          {s.email}
                        </td>
                        <td style={{ padding: '.75rem 1rem', color: 'rgba(255,255,255,0.8)' }}>
                          {s.phone || 'Not Provided'}
                        </td>
                        <td style={{ padding: '.75rem 1rem' }}>
                          <span style={{ background: 'rgba(99,102,241,0.2)', color: '#c7d2fe', border: '1px solid rgba(165,180,252,0.3)', padding: '2px 8px', borderRadius: 8, fontSize: '.7rem', fontWeight: 800 }}>
                            {s.class_id ? s.class_id.replace('class-', 'Class ') : 'General'}
                          </span>
                        </td>
                        <td style={{ padding: '.75rem 1rem', color: 'rgba(255,255,255,0.6)', fontSize: '.78rem' }}>
                          {new Date(s.createdAt).toLocaleString()}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              )}
            </div>
          ) : activeTab === 'teachers' ? (
            <div>
              <h3 style={{ fontFamily: 'Nunito', fontWeight: 900, color: '#fff', fontSize: '1.1rem', marginBottom: '1rem' }}>
                👨‍🏫 All Registered Teachers ({registeredTeachers.length})
              </h3>
              {registeredTeachers.length === 0 ? (
                <div style={{ textAlign: 'center', padding: '2rem 1rem', color: 'rgba(255,255,255,0.6)' }}>
                  No registered teachers found.
                </div>
              ) : (
                <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left', fontSize: '.85rem' }}>
                  <thead>
                    <tr style={{ borderBottom: '1px solid rgba(255,255,255,0.15)', color: '#c7d2fe', fontSize: '.75rem', textTransform: 'uppercase' }}>
                      <th style={{ padding: '.75rem 1rem' }}>Teacher Name</th>
                      <th style={{ padding: '.75rem 1rem' }}>Email Address</th>
                      <th style={{ padding: '.75rem 1rem' }}>Subject Expertise</th>
                      <th style={{ padding: '.75rem 1rem' }}>Classes Taught</th>
                      <th style={{ padding: '.75rem 1rem' }}>Status</th>
                      <th style={{ padding: '.75rem 1rem' }}>Joined Date</th>
                    </tr>
                  </thead>
                  <tbody>
                    {registeredTeachers.map(t => (
                      <tr key={t.id} style={{ borderBottom: '1px solid rgba(255,255,255,0.08)' }}>
                        <td style={{ padding: '.75rem 1rem', fontWeight: 900, color: '#fff', display: 'flex', alignItems: 'center', gap: '.4rem' }}>
                          <span>{t.avatar || '👨‍🏫'}</span> {t.name}
                        </td>
                        <td style={{ padding: '.75rem 1rem', color: '#a5b4fc' }}>
                          {t.email}
                        </td>
                        <td style={{ padding: '.75rem 1rem', color: '#fef08a', fontWeight: 800 }}>
                          {t.subject}
                        </td>
                        <td style={{ padding: '.75rem 1rem', color: 'rgba(255,255,255,0.8)' }}>
                          {t.class_ids}
                        </td>
                        <td style={{ padding: '.75rem 1rem' }}>
                          <span style={{ background: t.is_online ? 'rgba(16,185,129,0.2)' : 'rgba(255,255,255,0.08)', color: t.is_online ? '#4ade80' : 'rgba(255,255,255,0.5)', padding: '2px 8px', borderRadius: 8, fontSize: '.7rem', fontWeight: 900 }}>
                            {t.is_online ? '🔴 Online Now' : '⚪ Offline'}
                          </span>
                        </td>
                        <td style={{ padding: '.75rem 1rem', color: 'rgba(255,255,255,0.6)', fontSize: '.78rem' }}>
                          {new Date(t.createdAt).toLocaleString()}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              )}
            </div>
          ) : activeTab === 'users' ? (
            <div>
              <h3 style={{ fontFamily: 'Nunito', fontWeight: 900, color: '#fff', fontSize: '1.1rem', marginBottom: '1rem' }}>
                👥 Logged-In Users Directory &amp; Session History
              </h3>
              {loggedInUsers.length === 0 ? (
                <div style={{ textAlign: 'center', padding: '2rem 1rem', color: 'rgba(255,255,255,0.6)' }}>
                  No active logged-in users recorded in session audit log yet.
                </div>
              ) : (
                <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left', fontSize: '.85rem' }}>
                  <thead>
                    <tr style={{ borderBottom: '1px solid rgba(255,255,255,0.15)', color: '#c7d2fe', fontSize: '.75rem', textTransform: 'uppercase' }}>
                      <th style={{ padding: '.75rem 1rem' }}>User / Name</th>
                      <th style={{ padding: '.75rem 1rem' }}>User Email</th>
                      <th style={{ padding: '.75rem 1rem' }}>Role</th>
                      <th style={{ padding: '.75rem 1rem' }}>Last Active Login</th>
                      <th style={{ padding: '.75rem 1rem' }}>Total Sessions</th>
                      <th style={{ padding: '.75rem 1rem' }}>IP Address</th>
                    </tr>
                  </thead>
                  <tbody>
                    {loggedInUsers.map((u, i) => (
                      <tr key={i} style={{ borderBottom: '1px solid rgba(255,255,255,0.08)' }}>
                        <td style={{ padding: '.75rem 1rem', fontWeight: 900, color: '#fff' }}>
                          {u.userName || 'Student Scholar'}
                        </td>
                        <td style={{ padding: '.75rem 1rem', color: '#a5b4fc' }}>
                          {u.userEmail}
                        </td>
                        <td style={{ padding: '.75rem 1rem' }}>
                          <span style={{
                            background: u.role === 'teacher' ? 'rgba(245,158,11,0.2)' : u.role === 'superadmin' ? 'rgba(239,68,68,0.2)' : 'rgba(99,102,241,0.2)',
                            color: u.role === 'teacher' ? '#fef08a' : u.role === 'superadmin' ? '#fca5a5' : '#c7d2fe',
                            border: '1px solid rgba(255,255,255,0.15)',
                            padding: '2px 8px',
                            borderRadius: 8,
                            fontSize: '.7rem',
                            fontWeight: 900,
                            textTransform: 'uppercase'
                          }}>
                            {u.role}
                          </span>
                        </td>
                        <td style={{ padding: '.75rem 1rem', color: 'rgba(255,255,255,0.7)', fontSize: '.78rem' }}>
                          {new Date(u.lastLoginTime).toLocaleString()}
                        </td>
                        <td style={{ padding: '.75rem 1rem', fontWeight: 900, color: '#4ade80' }}>
                          {u.loginCount} Session(s)
                        </td>
                        <td style={{ padding: '.75rem 1rem', fontFamily: 'monospace', fontSize: '.75rem', color: 'rgba(255,255,255,0.5)' }}>
                          {u.lastIp}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              )}
            </div>
          ) : activeTab === 'contacts' ? (
            <div>
              <h3 style={{ fontFamily: 'Nunito', fontWeight: 900, color: '#fff', fontSize: '1.1rem', marginBottom: '1rem' }}>
                💬 User Submissions (Feedbacks &amp; Complaints)
              </h3>
              {contacts.length === 0 ? (
                <div style={{ textAlign: 'center', padding: '2rem 1rem', color: 'rgba(255,255,255,0.6)' }}>
                  No feedback or complaint submissions recorded yet.
                </div>
              ) : (
                <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                  {contacts.map(c => (
                    <div key={c.id} style={{ background: 'rgba(0,0,0,0.35)', border: '1px solid rgba(255,255,255,0.12)', borderRadius: 16, padding: '1.25rem' }}>
                      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '.4rem', flexWrap: 'wrap', gap: '.5rem' }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '.5rem' }}>
                          <span style={{ background: c.type === 'Complaint' ? '#ef4444' : '#10b981', color: '#fff', fontSize: '.68rem', fontWeight: 900, padding: '2px 8px', borderRadius: 8 }}>
                            {c.type}
                          </span>
                          <span style={{ background: 'rgba(255,255,255,0.1)', color: '#c7d2fe', fontSize: '.68rem', fontWeight: 800, padding: '2px 8px', borderRadius: 8 }}>
                            Priority: {c.priority}
                          </span>
                          <span style={{ fontSize: '.85rem', fontWeight: 900, color: '#fff' }}>
                            {c.name} {c.email && `(${c.email})`}
                          </span>
                        </div>
                        <span style={{ fontSize: '.72rem', color: 'rgba(255,255,255,0.5)' }}>
                          {new Date(c.createdAt).toLocaleString()}
                        </span>
                      </div>
                      <div style={{ fontWeight: 800, color: '#a5b4fc', fontSize: '.92rem', marginBottom: '.3rem' }}>
                        {c.subject}
                      </div>
                      <div style={{ color: 'rgba(255,255,255,0.85)', fontSize: '.85rem', lineHeight: 1.5, background: 'rgba(0,0,0,0.25)', padding: '.75rem 1rem', borderRadius: 10 }}>
                        {c.message}
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          ) : (
            <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left', fontSize: '.85rem' }}>
              <thead>
                <tr style={{ borderBottom: '1px solid rgba(255,255,255,0.15)', color: '#c7d2fe', fontSize: '.75rem', textTransform: 'uppercase' }}>
                  <th style={{ padding: '.75rem 1rem' }}>Timestamp</th>
                  <th style={{ padding: '.75rem 1rem' }}>Event Type</th>
                  <th style={{ padding: '.75rem 1rem' }}>User / Email</th>
                  <th style={{ padding: '.75rem 1rem' }}>Role</th>
                  <th style={{ padding: '.75rem 1rem' }}>IP Address</th>
                  <th style={{ padding: '.75rem 1rem' }}>Details</th>
                </tr>
              </thead>
              <tbody>
                {filteredLogs.length === 0 ? (
                  <tr>
                    <td colSpan={6} style={{ textAlign: 'center', padding: '2rem 1rem', color: 'rgba(255,255,255,0.6)' }}>
                      No audit activity matches this filter.
                    </td>
                  </tr>
                ) : (
                  filteredLogs.map(log => (
                    <tr key={log.id} style={{ borderBottom: '1px solid rgba(255,255,255,0.08)' }}>
                      <td style={{ padding: '.75rem 1rem', whiteSpace: 'nowrap', color: 'rgba(255,255,255,0.6)', fontSize: '.78rem' }}>
                        {new Date(log.createdAt).toLocaleString()}
                      </td>
                      <td style={{ padding: '.75rem 1rem' }}>
                        <span style={{
                          background: log.eventType?.includes('signup') ? 'rgba(16,185,129,0.2)' : log.eventType?.includes('login') ? 'rgba(99,102,241,0.2)' : 'rgba(245,158,11,0.2)',
                          color: log.eventType?.includes('signup') ? '#6ee7b7' : log.eventType?.includes('login') ? '#a5b4fc' : '#fef08a',
                          border: `1px solid ${log.eventType?.includes('signup') ? 'rgba(110,231,183,0.3)' : 'rgba(165,180,252,0.3)'}`,
                          padding: '2px 8px',
                          borderRadius: 8,
                          fontSize: '.72rem',
                          fontWeight: 900,
                          textTransform: 'uppercase'
                        }}>
                          {log.eventType}
                        </span>
                      </td>
                      <td style={{ padding: '.75rem 1rem', fontWeight: 800, color: '#fff' }}>
                        {log.userName ? `${log.userName} (${log.userEmail})` : log.userEmail}
                      </td>
                      <td style={{ padding: '.75rem 1rem', textTransform: 'capitalize', color: '#c7d2fe' }}>
                        {log.role}
                      </td>
                      <td style={{ padding: '.75rem 1rem', fontFamily: 'monospace', fontSize: '.75rem', color: 'rgba(255,255,255,0.5)' }}>
                        {log.ip || '127.0.0.1'}
                      </td>
                      <td style={{ padding: '.75rem 1rem', color: 'rgba(255,255,255,0.8)', maxWidth: 280, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
                        {log.details}
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          )}
        </div>
      </div>
    </div>
  );
}

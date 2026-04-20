import React, { useState, useEffect } from 'react';

export default function LoginModal({ open, onClose, onLogin }) {
  const [isSignup, setIsSignup] = useState(false);
  const [email, setEmail]       = useState('');
  const [name, setName]         = useState('');
  const [password, setPassword] = useState('');
  const [showPwd, setShowPwd]   = useState(false);
  const [loading, setLoading]   = useState(false);
  const [error, setError]       = useState('');

  // Close on Escape
  useEffect(() => {
    if (!open) return;
    const h = (e) => e.key === 'Escape' && onClose();
    window.addEventListener('keydown', h);
    return () => window.removeEventListener('keydown', h);
  }, [open, onClose]);

  // Reset form when switching tabs
  function switchTab(signup) {
    setIsSignup(signup);
    setError('');
    setEmail(''); setName(''); setPassword('');
  }

  if (!open) return null;

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);
    const endpoint = isSignup ? '/api/auth/student/register' : '/api/auth/student/login';
    const body = isSignup ? { email, password, name } : { email, password };
    try {
      const res  = await fetch(endpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body),
      });
      const data = await res.json();
      if (res.ok) { onLogin(data); onClose(); }
      else setError(data.error || data.message || 'Something went wrong');
    } catch {
      setError('Network error — make sure the server is running.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="lm-backdrop" onClick={e => e.target === e.currentTarget && onClose()}>
      <div className="lm-card">

        {/* Close */}
        <button className="lm-close" onClick={onClose} aria-label="Close">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
            <line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>
          </svg>
        </button>

        {/* Header */}
        <div className="lm-header">
          <div className="lm-logo">🎓</div>
          <h2 className="lm-title">
            {isSignup ? 'Create your free account' : 'Welcome back!'}
          </h2>
          <p className="lm-subtitle">
            {isSignup
              ? 'Join thousands of students on OnlineStudyHub'
              : 'Login to book sessions and track your progress'}
          </p>
        </div>

        {/* Tab switcher */}
        <div className="lm-tabs">
          <button
            type="button"
            className={`lm-tab ${!isSignup ? 'active' : ''}`}
            onClick={() => switchTab(false)}
          >
            🔑 Login
          </button>
          <button
            type="button"
            className={`lm-tab ${isSignup ? 'active' : ''}`}
            onClick={() => switchTab(true)}
          >
            ✨ Sign Up Free
          </button>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="lm-form">

          {isSignup && (
            <div className="lm-field">
              <label className="lm-label">Full Name</label>
              <input
                type="text" required
                className="lm-input"
                placeholder="e.g. Riya Sharma"
                value={name}
                onChange={e => setName(e.target.value)}
                autoFocus
              />
            </div>
          )}

          <div className="lm-field">
            <label className="lm-label">Email Address</label>
            <input
              type="email" required
              className="lm-input"
              placeholder="student@example.com"
              value={email}
              onChange={e => setEmail(e.target.value)}
              autoFocus={!isSignup}
            />
          </div>

          <div className="lm-field">
            <label className="lm-label">Password</label>
            <div className="lm-input-wrap">
              <input
                type={showPwd ? 'text' : 'password'} required
                className="lm-input"
                placeholder={isSignup ? 'Min. 6 characters' : 'Your password'}
                value={password}
                onChange={e => setPassword(e.target.value)}
                minLength={isSignup ? 6 : undefined}
              />
              <button
                type="button"
                className="lm-pwd-toggle"
                onClick={() => setShowPwd(v => !v)}
                tabIndex={-1}
                aria-label={showPwd ? 'Hide password' : 'Show password'}
              >
                {showPwd ? '🙈' : '👁'}
              </button>
            </div>
          </div>

          {error && (
            <div className="lm-error">
              ⚠️ {error}
            </div>
          )}

          <button
            type="submit"
            className="lm-submit"
            disabled={loading}
          >
            {loading
              ? <span className="lm-spinner" />
              : isSignup ? '🚀 Create Account' : '→ Login to My Account'}
          </button>
        </form>

        {/* Footer */}
        <p className="lm-footer">
          {isSignup ? 'Already have an account?' : "Don't have an account?"}{' '}
          <button
            type="button"
            className="lm-switch"
            onClick={() => switchTab(!isSignup)}
          >
            {isSignup ? 'Login here' : 'Register free'}
          </button>
        </p>

        {/* Divider note */}
        <p className="lm-note">
          🔒 Student account · Teacher? Use the{' '}
          <a href="/teacher-portal" className="lm-note-link">Teacher Portal</a>
        </p>
      </div>
    </div>
  );
}

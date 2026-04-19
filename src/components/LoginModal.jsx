import React, { useState } from 'react';

export default function LoginModal({ open, onClose, onLogin }) {
  const [isSignup, setIsSignup] = useState(false);
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

  if (!open) return null;

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const endpoint = isSignup ? '/api/auth/student/register' : '/api/auth/student/login';
    const body = isSignup ? { email, password, name } : { email, password };

    try {
      const response = await fetch(endpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body),
      });

      const data = await response.json();

      if (response.ok) {
        onLogin(data);
        onClose();
      } else {
        alert(data.error || 'Authentication failed');
      }
    } catch (err) {
      alert('Network error. Is the server running?');
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <div className="modal-backdrop" onClick={onClose} style={{ zIndex: 2000 }} />
      <div className="modal-content" style={{ zIndex: 2001, maxWidth: '400px', padding: '2.5rem' }}>
        <button className="modal-close" onClick={onClose} aria-label="Close modal">✕</button>
        
        <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
          <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>🎓</div>
          <h2 style={{ fontFamily: 'Nunito', fontWeight: 900, color: '#1e1b4b', marginBottom: '.5rem' }}>
            {isSignup ? 'Create Account' : 'Student Login'}
          </h2>
          <p style={{ color: '#64748b', fontSize: '.9rem' }}>
            {isSignup ? 'Join OnlineStudyHub today' : 'Welcome back to your studies'}
          </p>
        </div>

        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          {isSignup && (
            <div>
              <label style={{ display: 'block', fontSize: '.8rem', fontWeight: 700, color: '#475569', marginBottom: '.4rem', textTransform: 'uppercase' }}>Full Name</label>
              <input 
                type="text" 
                required 
                placeholder="John Doe"
                value={name}
                onChange={e => setName(e.target.value)}
                style={{ width: '100%', padding: '.75rem 1rem', borderRadius: 10, border: '1.5px solid #e2e8f0', outline: 'none' }}
              />
            </div>
          )}
          <div>
            <label style={{ display: 'block', fontSize: '.8rem', fontWeight: 700, color: '#475569', marginBottom: '.4rem', textTransform: 'uppercase' }}>Email Address</label>
            <input 
              type="email" 
              required 
              placeholder="student@example.com"
              value={email}
              onChange={e => setEmail(e.target.value)}
              style={{ width: '100%', padding: '.75rem 1rem', borderRadius: 10, border: '1.5px solid #e2e8f0', outline: 'none' }}
            />
          </div>
          <div>
            <label style={{ display: 'block', fontSize: '.8rem', fontWeight: 700, color: '#475569', marginBottom: '.4rem', textTransform: 'uppercase' }}>Password</label>
            <input 
              type="password" 
              required 
              placeholder="••••••••"
              value={password}
              onChange={e => setPassword(e.target.value)}
              style={{ width: '100%', padding: '.75rem 1rem', borderRadius: 10, border: '1.5px solid #e2e8f0', outline: 'none' }}
            />
          </div>
          
          <button 
            type="submit" 
            className="btn btn-primary" 
            style={{ marginTop: '1rem', padding: '.85rem', opacity: loading ? 0.7 : 1 }}
            disabled={loading}
          >
            {loading ? '⏳ Please wait...' : (isSignup ? 'Sign Up' : 'Sign In')}
          </button>
        </form>

        <div style={{ textAlign: 'center', marginTop: '1.5rem', fontSize: '.9rem', color: '#64748b' }}>
          {isSignup ? 'Already have an account?' : "Don't have an account?"}{' '}
          <button 
            onClick={() => setIsSignup(!isSignup)}
            style={{ background: 'none', border: 'none', color: '#4f46e5', fontWeight: 700, cursor: 'pointer', padding: 0 }}
          >
            {isSignup ? 'Log In' : 'Register Now'}
          </button>
        </div>
      </div>
    </>
  );
}

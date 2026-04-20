import React, { useState, useRef, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { NAV_CLASSES, CURRICULUM } from '../data/curriculum';
import { TEACHERS } from '../data/teachers';

const ChevronDown = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
    <polyline points="6 9 12 15 18 9" />
  </svg>
);


export default function Navbar({ onOpenAI, onOpenLogin, user, onLogout, darkMode, onToggleDark }) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileExpanded, setMobileExpanded] = useState(null);
  const [userMenuOpen, setUserMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const searchInputRef = useRef(null);
  const navigate = useNavigate();

  const close = () => { setMobileOpen(false); setUserMenuOpen(false); };
  const toggleMobile = (key) => setMobileExpanded(p => p === key ? null : key);

  useEffect(() => {
    if (searchOpen) searchInputRef.current?.focus();
  }, [searchOpen]);

  useEffect(() => {
    if (!searchOpen) return;
    const handler = (e) => { if (e.key === 'Escape') setSearchOpen(false); };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, [searchOpen]);

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    const q = searchQuery.trim();
    if (q) {
      navigate(`/search?q=${encodeURIComponent(q)}`);
      setSearchOpen(false);
      setSearchQuery('');
      close();
    }
  };

  return (
    <nav className="navbar">
      <div className="container">
        <div className="nav-inner">

          {/* Logo */}
          <Link to="/" className="nav-logo" onClick={close}>
            Online<span>Study</span>Hub
          </Link>

          {/* Desktop + Mobile nav */}
          <div className={`nav-links ${mobileOpen ? 'mobile-open' : ''}`}>

            {/* ── Classes dropdown ── */}
            <div className={`nav-item ${mobileOpen && mobileExpanded === 'classes' ? 'mobile-expanded' : ''}`}>
              <Link to="/classes" className="nav-link" onClick={() => mobileOpen ? toggleMobile('classes') : close()}>
                Classes <ChevronDown />
              </Link>
              <div className="dropdown">
                <div className="dropdown-section">
                  <div className="dropdown-label">Middle School</div>
                  {NAV_CLASSES.slice(0, 3).map(cls => (
                    <Link key={cls.id} to={`/class/${cls.id}`} className="dropdown-item" onClick={close}>
                      {CURRICULUM[cls.id]?.emoji} {cls.label}
                    </Link>
                  ))}
                </div>
                <div className="dropdown-divider" />
                <div className="dropdown-section">
                  <div className="dropdown-label">High School</div>
                  {NAV_CLASSES.slice(3).map(cls => (
                    <Link key={cls.id} to={`/class/${cls.id}`} className="dropdown-item" onClick={close}>
                      {CURRICULUM[cls.id]?.emoji} {cls.label}
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            {/* ── JEE & NEET dropdown ── */}
            <div className={`nav-item ${mobileOpen && mobileExpanded === 'competitive' ? 'mobile-expanded' : ''}`}>
              <div className="nav-link" onClick={() => mobileOpen && toggleMobile('competitive')}>
                JEE &amp; NEET <ChevronDown />
              </div>
              <div className="dropdown">
                <div className="dropdown-section">
                  <div className="dropdown-label">JEE</div>
                  <Link to="/class/jee" className="dropdown-item" onClick={close}>
                    🏆 JEE Main
                  </Link>
                  <Link to="/class/jee" className="dropdown-item" onClick={close}>
                    🎯 JEE Advanced
                  </Link>
                </div>
                <div className="dropdown-divider" />
                <div className="dropdown-section">
                  <div className="dropdown-label">NEET</div>
                  <Link to="/class/neet" className="dropdown-item" onClick={close}>
                    🌿 NEET Biology
                  </Link>
                  <Link to="/class/neet" className="dropdown-item" onClick={close}>
                    ⚡ NEET Physics
                  </Link>
                  <Link to="/class/neet" className="dropdown-item" onClick={close}>
                    🧪 NEET Chemistry
                  </Link>
                </div>
              </div>
            </div>

            {/* ── Teachers dropdown ── */}
            <div className={`nav-item ${mobileOpen && mobileExpanded === 'teachers' ? 'mobile-expanded' : ''}`}>
              <Link to="/teachers" className="nav-link" onClick={() => mobileOpen && toggleMobile('teachers')} style={{ textDecoration: 'none' }}>
                Teachers <ChevronDown />
              </Link>
              <div className="dropdown">
                <div className="dropdown-section">
                  <div className="dropdown-label">Find a Teacher</div>
                  {NAV_CLASSES.map(cls => {
                    const t = TEACHERS[cls.id]?.[0];
                    const target = `/teachers/${cls.id}`;
                    return (
                      <Link
                        key={cls.id}
                        to={user ? target : '#'}
                        className="dropdown-item"
                        onClick={(e) => {
                          if (!user) {
                            e.preventDefault();
                            onOpenLogin();
                          }
                          close();
                        }}
                      >
                        <span style={{ minWidth: 20 }}>{CURRICULUM[cls.id]?.emoji}</span>
                        <span style={{ flex: 1 }}>{cls.label}</span>
                        {t && <span style={{ fontSize: '.75rem', color: '#9ca3af' }}>{t.avatar}</span>}
                      </Link>
                    );
                  })}
                </div>
              </div>
            </div>

          </div>

          {/* Actions */}
          <div className="nav-actions">

            {/* Search */}
            {searchOpen ? (
              <form className="nav-search-form" onSubmit={handleSearchSubmit}>
                <input
                  ref={searchInputRef}
                  className="nav-search-input"
                  value={searchQuery}
                  onChange={e => setSearchQuery(e.target.value)}
                  placeholder="Search topics, teachers..."
                />
                <button type="submit" className="nav-search-submit" aria-label="Submit search">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/>
                  </svg>
                </button>
                <button type="button" className="nav-search-close" onClick={() => { setSearchOpen(false); setSearchQuery(''); }} aria-label="Close search">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>
                  </svg>
                </button>
              </form>
            ) : (
              <button className="nav-icon-btn" onClick={() => setSearchOpen(true)} aria-label="Search">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/>
                </svg>
              </button>
            )}

            <Link
              to="/teacher-portal"
              style={{ fontSize: '.82rem', color: 'rgba(255,255,255,.75)', fontWeight: 700, padding: '.4rem .8rem', borderRadius: 8, border: '1px solid rgba(255,255,255,.2)', whiteSpace: 'nowrap', transition: 'all .2s' }}
              onMouseEnter={e => { e.currentTarget.style.background='rgba(255,255,255,.12)'; e.currentTarget.style.color='#fff'; }}
              onMouseLeave={e => { e.currentTarget.style.background='transparent'; e.currentTarget.style.color='rgba(255,255,255,.75)'; }}
            >
              👨‍🏫 Teacher Portal
            </Link>
            <button
              className="btn btn-primary btn-ai"
              style={{ padding: '0.5rem 1.25rem', fontSize: '0.88rem' }}
              onClick={onOpenAI}
            >
              🤖 <span className="hide-mobile">AI Doubt Help</span>
            </button>

            {user && (
              <div className="nav-item" style={{ position: 'relative' }}>
                <button
                  className="user-btn"
                  onClick={() => setUserMenuOpen(!userMenuOpen)}
                  aria-label={`Account menu for ${user.name}`}
                  aria-expanded={userMenuOpen}
                  aria-haspopup="menu"
                >
                  <span className="user-avatar" aria-hidden="true">👤</span>
                  <span className="hide-mobile">{user.name}</span>
                </button>
                {userMenuOpen && (
                  <div className="dropdown user-dropdown" style={{ display: 'block', right: 0, left: 'auto', minWidth: 160 }}>
                    <div className="dropdown-section">
                      <div className="dropdown-label" style={{ fontSize: '.7rem' }}>Logged in as</div>
                      <div style={{ padding: '0.5rem 1rem', fontSize: '.85rem', fontWeight: 700, color: '#1e1b4b' }}>{user.email}</div>
                      <div className="dropdown-divider" />
                      <button className="dropdown-item" onClick={() => { onLogout(); close(); }} style={{ width: '100%', textAlign: 'left', color: '#ef4444' }}>
                        🚪 Logout
                      </button>
                    </div>
                  </div>
                )}
              </div>
            )}
          </div>

          {/* Dark mode toggle */}
          <button
            className="dark-toggle-btn"
            onClick={onToggleDark}
            aria-label="Toggle dark mode"
          >
            {darkMode ? '☀️' : '🌙'}
          </button>

          {/* Mobile menu toggle */}
          <button
            className="mobile-menu-btn"
            onClick={() => setMobileOpen(o => !o)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? (
              <svg aria-hidden="true" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            ) : (
              <svg aria-hidden="true" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <line x1="3" y1="12" x2="21" y2="12" /><line x1="3" y1="6" x2="21" y2="6" /><line x1="3" y1="18" x2="21" y2="18" />
              </svg>
            )}
          </button>
        </div>
      </div>
    </nav>
  );
}

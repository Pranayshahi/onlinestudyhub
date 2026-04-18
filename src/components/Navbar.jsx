import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { NAV_CLASSES, CURRICULUM } from '../data/curriculum';
import { TEACHERS } from '../data/teachers';

const ChevronDown = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
    <polyline points="6 9 12 15 18 9" />
  </svg>
);


export default function Navbar({ onOpenAI }) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileExpanded, setMobileExpanded] = useState(null);
  const close = () => setMobileOpen(false);
  const toggleMobile = (key) => setMobileExpanded(p => p === key ? null : key);

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
              <div className="nav-link" onClick={() => mobileOpen && toggleMobile('classes')}>
                Classes <ChevronDown />
              </div>
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
              <div className="nav-link" onClick={() => mobileOpen && toggleMobile('teachers')}>
                Teachers <ChevronDown />
              </div>
              <div className="dropdown">
                <div className="dropdown-section">
                  <div className="dropdown-label">Find a Teacher</div>
                  {NAV_CLASSES.map(cls => {
                    const t = TEACHERS[cls.id];
                    return (
                      <Link key={cls.id} to={`/class/${cls.id}`} className="dropdown-item" onClick={close}>
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

          {/* AI Doubt Help button */}
          <div className="nav-actions">
            <button
              className="btn btn-primary"
              style={{ padding: '0.5rem 1.25rem', fontSize: '0.88rem' }}
              onClick={onOpenAI}
            >
              🤖 AI Doubt Help
            </button>
          </div>

          {/* Mobile menu toggle */}
          <button
            className="mobile-menu-btn"
            onClick={() => setMobileOpen(o => !o)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? (
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            ) : (
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <line x1="3" y1="12" x2="21" y2="12" /><line x1="3" y1="6" x2="21" y2="6" /><line x1="3" y1="18" x2="21" y2="18" />
              </svg>
            )}
          </button>
        </div>
      </div>
    </nav>
  );
}

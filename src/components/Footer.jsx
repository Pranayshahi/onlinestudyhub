import React from 'react';
import { Link } from 'react-router-dom';
import { useLang } from '../context/LanguageContext';

export default function Footer() {
  const { t } = useLang();
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div>
            <div className="footer-logo">Online<span>Study</span>Hub</div>
            <p className="footer-desc">
              {t('footer_desc')}
            </p>
            <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
              <span className="badge badge-indigo" style={{ background: 'rgba(99,102,241,.2)', color: '#a5b4fc' }}>
                {t('footer_made_in')}
              </span>
              <span className="badge" style={{ background: 'rgba(249,115,22,.2)', color: '#fed7aa' }}>
                {t('footer_free')}
              </span>
            </div>
          </div>
          <div>
            <div className="footer-heading">{t('footer_classes')}</div>
            <div className="footer-links">
              {['class-6','class-7','class-8','class-9','class-10','class-11','class-12'].map(id => (
                <Link key={id} to={`/class/${id}`}>
                  {id.replace('class-', 'Class ')}
                </Link>
              ))}
            </div>
          </div>
          <div>
            <div className="footer-heading">{t('footer_competitive')}</div>
            <div className="footer-links">
              <Link to="/class/jee">JEE Main</Link>
              <Link to="/class/jee">JEE Advanced</Link>
              <Link to="/class/neet">NEET Biology</Link>
              <Link to="/class/neet">NEET Physics</Link>
              <Link to="/class/neet">NEET Chemistry</Link>
            </div>
          </div>
          <div>
            <div className="footer-heading">{t('footer_important')}</div>
            <div className="footer-links">
              <Link to="/class/class-10">Class 10 Boards</Link>
              <Link to="/class/class-12">Class 12 Boards</Link>
              <Link to="/class/jee">JEE Crash Course</Link>
              <Link to="/class/neet">NEET Crash Course</Link>
              <a href="#">Study Tips</a>
              <a href="#">About Us</a>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <span>© 2024 OnlineStudyHub.com — All rights reserved.</span>
          <span>
            <a href="#" style={{ color: 'rgba(255,255,255,.5)', marginRight: '1rem' }}>Privacy</a>
            <a href="#" style={{ color: 'rgba(255,255,255,.5)' }}>Terms</a>
          </span>
        </div>
      </div>
    </footer>
  );
}

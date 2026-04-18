import React from 'react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div>
            <div className="footer-logo">Online<span>Study</span>Hub</div>
            <p className="footer-desc">
              India's most comprehensive free learning platform for Class 6–12, JEE & NEET.
              Quality education for every student, everywhere.
            </p>
            <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
              <span className="badge badge-indigo" style={{ background: 'rgba(99,102,241,.2)', color: '#a5b4fc' }}>
                🇮🇳 Made in India
              </span>
              <span className="badge" style={{ background: 'rgba(249,115,22,.2)', color: '#fed7aa' }}>
                📚 Free Forever
              </span>
            </div>
          </div>
          <div>
            <div className="footer-heading">Classes</div>
            <div className="footer-links">
              {['class-6','class-7','class-8','class-9','class-10','class-11','class-12'].map(id => (
                <Link key={id} to={`/class/${id}`}>
                  {id.replace('class-', 'Class ')}
                </Link>
              ))}
            </div>
          </div>
          <div>
            <div className="footer-heading">Competitive</div>
            <div className="footer-links">
              <Link to="/class/jee">JEE Main</Link>
              <Link to="/class/jee">JEE Advanced</Link>
              <Link to="/class/neet">NEET Biology</Link>
              <Link to="/class/neet">NEET Physics</Link>
              <Link to="/class/neet">NEET Chemistry</Link>
            </div>
          </div>
          <div>
            <div className="footer-heading">Important</div>
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

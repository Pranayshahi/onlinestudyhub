import React from 'react';
import { Link } from 'react-router-dom';

const TRENDING_TESTS = [
  { id: 'jee-full-mock-1', title: 'JEE Main 2026 Full Length Mock #1', subject: 'Physics • Chemistry • Maths', questions: 75, time: '3 Hours', badge: '🔥 Hot' },
  { id: 'neet-bio-mock-2', title: 'NEET UG Biology High-Yield Mock', subject: 'Botany • Zoology', questions: 90, time: '60 Mins', badge: '⭐ 98% Rated' },
  { id: 'class10-maths-pyq', title: 'Class 10 Board Maths 10-Yr PYQs', subject: 'Mathematics', questions: 50, time: '45 Mins', badge: '⚡ New' },
];

export default function TrendingPracticeTestsCard() {
  return (
    <div style={{ background: 'rgba(255,255,255,0.06)', backdropFilter: 'blur(16px)', border: '1.5px solid rgba(255,255,255,0.18)', borderRadius: 24, padding: '1.5rem', boxShadow: '0 16px 40px rgba(0,0,0,0.35)', color: '#fff' }}>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1rem', borderBottom: '1px solid rgba(255,255,255,0.1)', paddingBottom: '.65rem' }}>
        <div>
          <div style={{ fontSize: '.72rem', fontWeight: 900, color: '#fef08a', textTransform: 'uppercase', letterSpacing: '0.5px' }}>
            🔥 Live Practice Tests &amp; Uploads
          </div>
          <h3 style={{ fontFamily: 'Nunito', fontWeight: 900, color: '#fff', fontSize: '1.1rem', margin: '.2rem 0 0' }}>
            Trending NTA Practice Tests
          </h3>
        </div>
        <Link to="/exam/jee/mock-test" style={{ color: '#fbbf24', fontSize: '.8rem', fontWeight: 800, textDecoration: 'none' }}>
          View All →
        </Link>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '.75rem' }}>
        {TRENDING_TESTS.map(test => (
          <div key={test.id} style={{ background: 'rgba(0,0,0,0.3)', border: '1px solid rgba(255,255,255,0.12)', borderRadius: 16, padding: '1rem', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '.75rem' }}>
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '.4rem', marginBottom: '.2rem' }}>
                <span style={{ background: '#f59e0b', color: '#fff', fontSize: '.65rem', fontWeight: 900, padding: '2px 6px', borderRadius: 8 }}>
                  {test.badge}
                </span>
                <span style={{ fontSize: '.75rem', color: '#c7d2fe', fontWeight: 800 }}>{test.subject}</span>
              </div>
              <div style={{ fontFamily: 'Nunito', fontWeight: 900, color: '#fff', fontSize: '.92rem' }}>
                {test.title}
              </div>
              <div style={{ fontSize: '.75rem', color: 'rgba(255,255,255,0.6)', marginTop: '.15rem' }}>
                📝 {test.questions} Questions • ⏱️ {test.time}
              </div>
            </div>

            <Link
              to="/exam/jee/mock-test"
              className="btn btn-primary"
              style={{ fontSize: '.78rem', padding: '.45rem .85rem', borderRadius: 10, fontWeight: 900, flexShrink: 0 }}
            >
              Start →
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

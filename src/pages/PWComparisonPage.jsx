import React from 'react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';

export default function PWComparisonPage() {
  const comparisonData = [
    { feature: '100% Free NCERT & Board Notes', osh: '✅ Free Forever', pw: '⚠️ Paid Batches Required' },
    { feature: 'Snap & Solve AI Camera Doubt Engine', osh: '✅ Free Unlimited 24/7', pw: '❌ Limited / Paid App' },
    { feature: 'NotebookLM Audio Podcast Summaries', osh: '✅ Built-In AI Podcasts', pw: '❌ Not Available' },
    { feature: '3D Science Labs & PhET Simulations', osh: '✅ Interactive 3D Optics & Titration', pw: '❌ Video Lectures Only' },
    { feature: 'Peer-to-Peer Focus Together Rooms', osh: '✅ Synchronized Pomodoro + Audio', pw: '❌ Not Available' },
    { feature: 'PWA Offline Notes & Audio Download', osh: '✅ 100% Offline Capable', pw: '⚠️ App Restricted' },
    { feature: 'Ad-Free Reading Experience', osh: '✅ 0 Ads, Clean UI', pw: '⚠️ Heavy In-App Ads' },
  ];

  const schemas = [
    {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'Is OnlineStudyHub a free alternative to PhysicsWallah?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes! OnlineStudyHub offers 100% free notes, solved past board Q&As, AI camera doubt solving, interactive 3D science labs, and NTA mock tests for ICSE, CBSE, JEE & NEET students with zero ads.',
          },
        },
        {
          '@type': 'Question',
          name: 'How does OnlineStudyHub compare to PhysicsWallah for JEE & NEET preparation?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'OnlineStudyHub provides AI-powered NotebookLM audio podcasts, 1-page mind maps, Socratic step-by-step doubt solving, and NTA mock tests completely free without paid batch paywalls.',
          },
        },
      ],
    },
  ];

  return (
    <div style={{ background: 'linear-gradient(180deg, #0b0f19 0%, #1e1b4b 100%)', color: '#fff', minHeight: '100vh', padding: '3rem 0' }}>
      <SEO
        title="OnlineStudyHub vs PhysicsWallah (PW) — Free Study Platform Comparison"
        description="Compare OnlineStudyHub with PhysicsWallah. Get 100% free ICSE & CBSE notes, 3D science virtual labs, AI doubt solver, and NTA mock tests with zero ads."
        keywords="onlinestudyhub vs physicswallah, free pw notes alternative, free jee main mock test, neet biology mind maps, zero ads cbse notes"
        path="/vs-physicswallah"
        schemas={schemas}
      />

      <div className="container" style={{ maxWidth: 960, margin: '0 auto' }}>
        {/* Hero */}
        <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
          <span style={{ background: 'rgba(245,158,11,0.2)', border: '1px solid rgba(253,230,138,0.3)', color: '#fef08a', fontSize: '.8rem', fontWeight: 900, padding: '.4rem 1.1rem', borderRadius: 20, textTransform: 'uppercase', letterSpacing: '0.5px' }}>
            ⚡ Ultimate EdTech Platform Comparison
          </span>
          <h1 style={{ fontFamily: 'Nunito', fontWeight: 900, fontSize: 'clamp(2.2rem, 4.5vw, 3.2rem)', margin: '1rem 0 .5rem', color: '#fff' }}>
            Why Students Choose <span style={{ background: 'linear-gradient(135deg, #fbbf24, #f97316)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>OnlineStudyHub</span> over PhysicsWallah
          </h1>
          <p style={{ fontSize: '1.05rem', color: 'rgba(255,255,255,0.8)', maxWidth: 640, margin: '0 auto' }}>
            OnlineStudyHub is engineered for high-yield student retention with AI NotebookLM podcasts, 3D science virtual labs, and zero paywalls.
          </p>
        </div>

        {/* Comparison Table */}
        <div style={{ background: 'rgba(255,255,255,0.06)', backdropFilter: 'blur(16px)', border: '1.5px solid rgba(255,255,255,0.18)', borderRadius: 24, padding: '2rem', boxShadow: '0 20px 50px rgba(0,0,0,0.4)', marginBottom: '3rem', overflowX: 'auto' }}>
          <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left', fontSize: '.95rem' }}>
            <thead>
              <tr style={{ borderBottom: '2px solid rgba(255,255,255,0.18)', color: '#c7d2fe', fontSize: '.85rem', textTransform: 'uppercase' }}>
                <th style={{ padding: '1rem 1.25rem' }}>Feature / Capability</th>
                <th style={{ padding: '1rem 1.25rem', color: '#4ade80' }}>⚡ OnlineStudyHub</th>
                <th style={{ padding: '1rem 1.25rem', color: '#fca5a5' }}>PhysicsWallah (PW)</th>
              </tr>
            </thead>
            <tbody>
              {comparisonData.map((item, idx) => (
                <tr key={idx} style={{ borderBottom: '1px solid rgba(255,255,255,0.08)' }}>
                  <td style={{ padding: '1rem 1.25rem', fontWeight: 800, color: '#fff' }}>
                    {item.feature}
                  </td>
                  <td style={{ padding: '1rem 1.25rem', fontWeight: 900, color: '#4ade80' }}>
                    {item.osh}
                  </td>
                  <td style={{ padding: '1rem 1.25rem', color: 'rgba(255,255,255,0.6)' }}>
                    {item.pw}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* CTA Banner */}
        <div style={{ background: 'linear-gradient(135deg, #4f46e5 0%, #7c3aed 100%)', borderRadius: 24, padding: '2.5rem', textAlign: 'center', boxShadow: '0 16px 40px rgba(79,70,229,0.35)' }}>
          <h2 style={{ fontFamily: 'Nunito', fontWeight: 900, fontSize: '2rem', margin: '0 0 .75rem', color: '#fff' }}>
            Ready to Supercharge Your Board &amp; Entrance Exam Prep?
          </h2>
          <p style={{ fontSize: '1rem', color: 'rgba(255,255,255,0.85)', maxWidth: 540, margin: '0 auto 1.5rem' }}>
            Join 18,450+ students mastering ICSE, CBSE Class 6–12, JEE Main &amp; NEET completely free.
          </p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link to="/classes" className="btn btn-primary" style={{ padding: '.85rem 2rem', borderRadius: 14, fontWeight: 900, fontSize: '1rem', background: 'linear-gradient(135deg, #f59e0b, #d97706)', border: 'none' }}>
              📖 Explore All Classes &amp; Notes →
            </Link>
            <Link to="/exam/jee/mock-test" className="btn" style={{ padding: '.85rem 2rem', borderRadius: 14, fontWeight: 900, fontSize: '1rem', background: 'rgba(255,255,255,0.15)', color: '#fff', border: '1px solid rgba(255,255,255,0.3)' }}>
              ⏱️ Attempt Free NTA Mock Test
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

import React, { useState } from 'react';
import SEO from '../components/SEO';
import { Link } from 'react-router-dom';

const FORMULA_DATABASE = [
  {
    subject: 'Physics',
    icon: '⚡',
    color: '#6366f1',
    formulas: [
      { topic: 'Electrostatics', title: 'Coulomb\'s Law', formula: 'F = k · (|q₁ · q₂| / r²)', notes: 'k = 1 / (4πε₀) ≈ 8.99 × 10⁹ N·m²/C²' },
      { topic: 'Electric Current', title: 'Ohm\'s Law & Resistance', formula: 'V = I · R, R = ρ · (L / A)', notes: 'ρ = Resistivity, L = Conductor Length, A = Cross Area' },
      { topic: 'Optics', title: 'Mirror & Lens Formula', formula: '1/f = 1/v + 1/u (Mirror), 1/f = 1/v - 1/u (Lens)', notes: 'f = focal length, v = image distance, u = object distance' },
      { topic: 'Modern Physics', title: 'Photoelectric Effect', formula: 'E = h · ν = W₀ + K.E.max', notes: 'h = Planck\'s Constant (6.63 × 10⁻³⁴ J·s)' },
    ]
  },
  {
    subject: 'Chemistry',
    icon: '🧪',
    color: '#10b981',
    formulas: [
      { topic: 'Physical Chemistry', title: 'Ideal Gas Law', formula: 'P · V = n · R · T', notes: 'R = 8.314 J/(mol·K) or 0.0821 L·atm/(mol·K)' },
      { topic: 'Solutions', title: 'Molarity & Molality', formula: 'M = Moles / V(L), m = Moles / W_solvent(kg)', notes: 'Molarity varies with temperature; Molality is constant.' },
      { topic: 'Electrochemistry', title: 'Nernst Equation', formula: 'E = E° - (0.0591 / n) · log(Q)', notes: 'Evaluated at T = 298 K (25°C)' },
      { topic: 'Organic Chemistry', title: 'Grignard Reagent Addition', formula: 'R-MgX + R\'CHO → R-CH(OH)-R\'', notes: 'Forms 2° alcohol with aldehydes, 3° with ketones' },
    ]
  },
  {
    subject: 'Mathematics',
    icon: '📐',
    color: '#3b82f6',
    formulas: [
      { topic: 'Calculus', title: 'Derivative Power Rule & Chain Rule', formula: 'd/dx(xⁿ) = n·xⁿ⁻¹, d/dx[f(g(x))] = f\'(g(x))·g\'(x)', notes: 'Fundamental differentiation rules for CBSE & JEE' },
      { topic: 'Integrals', title: 'Integration by Parts', formula: '∫ u dv = u·v - ∫ v du', notes: 'Follow ILATE rule for function priority' },
      { topic: 'Trigonometry', title: 'Double Angle Formulas', formula: 'sin(2θ) = 2sinθcosθ, cos(2θ) = cos²θ - sin²θ', notes: 'Key identity for simplification in calculus' },
      { topic: 'Quadratic Equations', title: 'Quadratic Formula & Discriminant', formula: 'x = (-b ± √(b² - 4ac)) / (2a), D = b² - 4ac', notes: 'D > 0 (Real & distinct), D = 0 (Equal), D < 0 (Complex)' },
    ]
  },
  {
    subject: 'Biology',
    icon: '🧬',
    color: '#ec4899',
    formulas: [
      { topic: 'Genetics', title: 'Hardy-Weinberg Equilibrium', formula: 'p² + 2pq + q² = 1, p + q = 1', notes: 'p = dominant allele frequency, q = recessive frequency' },
      { topic: 'Cell Biology', title: 'Mitotic Index', formula: 'MI = (Number of Cells in Mitosis / Total Cells) × 100', notes: 'Measures cellular proliferation rate' },
      { topic: 'Ecology', title: 'Population Growth Equation', formula: 'dN / dt = r · N · [(K - N) / K]', notes: 'Logistics growth model where K = Carrying capacity' },
    ]
  }
];

export default function FormulaHubPage() {
  const [copiedIndex, setCopiedIndex] = useState(null);
  const [selectedSubject, setSelectedSubject] = useState('All');

  const copyToClipboard = (text, idx) => {
    navigator.clipboard.writeText(text);
    setCopiedIndex(idx);
    setTimeout(() => setCopiedIndex(null), 2000);
  };

  const schemas = [
    {
      '@context': 'https://schema.org',
      '@type': 'LearningResource',
      name: 'High-Yield Formula Cheat Sheet & Mind Map Bank — Physics, Chemistry, Maths, Biology',
      description: 'Comprehensive 1-page formula cheat sheets for ICSE & CBSE Class 10, Class 12, JEE Main & NEET aspirants.',
      learningResourceType: 'Formula Sheet',
      inLanguage: 'en-IN',
      isAccessibleForFree: true,
      provider: {
        '@type': 'Organization',
        name: 'OnlineStudyHub',
        url: 'https://www.onlinestudyhub.com',
      },
    },
  ];

  return (
    <div style={{ background: 'linear-gradient(180deg, #0b0f19 0%, #1e1b4b 100%)', color: '#fff', minHeight: '100vh', padding: '3rem 0' }}>
      <SEO
        title="High-Yield Formula Cheat Sheet & Mind Map Bank — Physics, Chemistry, Maths, Biology"
        description="Download and copy 1-page revision formula sheets for Class 10, Class 12, JEE Main & NEET. Covers Physics equations, Organic reactions, Calculus, and Genetics."
        keywords="physics class 12 formula pdf, chemistry organic reactions cheat sheet, maths calculus formulas board exam, neet biology mind maps"
        path="/formula-bank"
        schemas={schemas}
      />

      <div className="container">
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
          <span style={{ background: 'rgba(99,102,241,0.2)', border: '1px solid rgba(165,180,252,0.3)', color: '#c7d2fe', fontSize: '.8rem', fontWeight: 900, padding: '.4rem 1.1rem', borderRadius: 20, textTransform: 'uppercase', letterSpacing: '0.5px' }}>
            📐 High-Yield Exam Bank
          </span>
          <h1 style={{ fontFamily: 'Nunito', fontWeight: 900, fontSize: 'clamp(2rem, 4vw, 3rem)', margin: '1rem 0 .5rem', color: '#fff' }}>
            Formula Bank &amp; Revision Mind Maps
          </h1>
          <p style={{ fontSize: '1rem', color: 'rgba(255,255,255,0.8)', maxWidth: 620, margin: '0 auto' }}>
            Instant reference cheat sheet for Physics, Chemistry, Mathematics, and Biology for Board Exams, JEE Main &amp; NEET.
          </p>
        </div>

        {/* Filter Pills */}
        <div style={{ display: 'flex', gap: '.6rem', justifyContent: 'center', marginBottom: '2.5rem', flexWrap: 'wrap' }}>
          {['All', 'Physics', 'Chemistry', 'Mathematics', 'Biology'].map(sub => (
            <button
              key={sub}
              onClick={() => setSelectedSubject(sub)}
              style={{
                background: selectedSubject === sub ? 'linear-gradient(135deg, #6366f1, #4f46e5)' : 'rgba(255,255,255,0.08)',
                border: selectedSubject === sub ? '1px solid #a5b4fc' : '1px solid rgba(255,255,255,0.14)',
                color: '#fff',
                borderRadius: 14,
                padding: '.6rem 1.25rem',
                fontWeight: 900,
                fontSize: '.88rem',
                cursor: 'pointer'
              }}
            >
              {sub}
            </button>
          ))}
        </div>

        {/* Formulas Grid */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
          {FORMULA_DATABASE.filter(db => selectedSubject === 'All' || db.subject === selectedSubject).map((db, dbIdx) => (
            <div key={dbIdx} style={{ background: 'rgba(255,255,255,0.05)', backdropFilter: 'blur(16px)', border: '1.5px solid rgba(255,255,255,0.15)', borderRadius: 22, padding: '1.75rem', boxShadow: '0 12px 32px rgba(0,0,0,0.3)' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '.75rem', marginBottom: '1.25rem' }}>
                <span style={{ fontSize: '1.8rem' }}>{db.icon}</span>
                <h2 style={{ fontFamily: 'Nunito', fontWeight: 900, fontSize: '1.5rem', color: db.color, margin: 0 }}>
                  {db.subject} Revision Formulas
                </h2>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.25rem' }}>
                {db.formulas.map((item, fIdx) => {
                  const uniqueKey = `${dbIdx}-${fIdx}`;
                  return (
                    <div key={fIdx} style={{ background: 'rgba(0,0,0,0.35)', border: '1px solid rgba(255,255,255,0.12)', borderRadius: 16, padding: '1.25rem', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', transition: 'all 0.2s cubic-bezier(0.4, 0, 0.2, 1)' }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.transform = 'translateY(-3px)';
                        e.currentTarget.style.borderColor = 'rgba(165,180,252,0.4)';
                        e.currentTarget.style.boxShadow = '0 10px 24px rgba(0,0,0,0.4)';
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.transform = 'translateY(0)';
                        e.currentTarget.style.borderColor = 'rgba(255,255,255,0.12)';
                        e.currentTarget.style.boxShadow = 'none';
                      }}
                    >
                      <div>
                        <span style={{ fontSize: '.72rem', fontWeight: 900, color: 'rgba(255,255,255,0.5)', textTransform: 'uppercase' }}>
                          {item.topic}
                        </span>
                        <h3 style={{ fontFamily: 'Nunito', fontWeight: 900, fontSize: '1.05rem', color: '#fff', margin: '.2rem 0 .75rem' }}>
                          {item.title}
                        </h3>
                        <div style={{ background: 'rgba(99,102,241,0.15)', border: '1px solid rgba(165,180,252,0.3)', borderRadius: 12, padding: '.85rem 1rem', fontFamily: 'monospace', fontWeight: 800, fontSize: '.95rem', color: '#c7d2fe', marginBottom: '.75rem', overflowX: 'auto' }}>
                          {item.formula}
                        </div>
                        <p style={{ fontSize: '.82rem', color: 'rgba(255,255,255,0.7)', margin: 0, lineHeight: 1.4 }}>
                          ℹ️ {item.notes}
                        </p>
                      </div>

                      <button
                        onClick={() => copyToClipboard(`${item.title}: ${item.formula}`, uniqueKey)}
                        style={{ marginTop: '1rem', background: copiedIndex === uniqueKey ? '#10b981' : 'rgba(255,255,255,0.1)', border: '1px solid rgba(255,255,255,0.2)', color: '#fff', padding: '.55rem', borderRadius: 10, fontSize: '.78rem', fontWeight: 900, cursor: 'pointer', transition: 'all 0.2s ease' }}
                        onMouseEnter={(e) => e.currentTarget.style.background = copiedIndex === uniqueKey ? '#059669' : 'rgba(255,255,255,0.2)'}
                        onMouseLeave={(e) => e.currentTarget.style.background = copiedIndex === uniqueKey ? '#10b981' : 'rgba(255,255,255,0.1)'}
                      >
                        {copiedIndex === uniqueKey ? '✓ Copied Formula!' : '📋 Copy Formula'}
                      </button>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

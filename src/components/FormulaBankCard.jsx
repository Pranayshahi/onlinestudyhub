import React, { useState } from 'react';
import { FORMULA_BANK, FORMULA_SUBJECTS, extractFormulasFromContent } from '../data/formulaBank';

export default function FormulaBankCard({ classId, subjectId, topicId, topicContent, subjectColor }) {
  const [open, setOpen] = useState(false);
  const [copied, setCopied] = useState(false);

  if (!FORMULA_SUBJECTS.has(subjectId)) return null;

  const key = `${classId}/${subjectId}/${topicId}`;
  const curated = FORMULA_BANK[key] || [];
  const extracted = curated.length === 0 ? extractFormulasFromContent(topicContent) : [];
  const formulas = curated.length > 0 ? curated : extracted;

  if (formulas.length === 0) return null;

  function copyAll() {
    const text = formulas
      .map(f => `${f.label}: ${f.formula}${f.note ? ` (${f.note})` : ''}`)
      .join('\n');
    navigator.clipboard.writeText(text).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }).catch(() => {});
  }

  return (
    <div className={subjectColor} style={{ marginBottom: '2rem' }}>
      {/* ── Header button ── */}
      <button
        onClick={() => setOpen(o => !o)}
        style={{
          width: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: '.85rem 1.25rem',
          background: open ? 'var(--sc)' : 'var(--sl)',
          border: '1.5px solid var(--sm)',
          borderRadius: open ? '14px 14px 0 0' : 14,
          cursor: 'pointer',
          transition: 'all .18s',
          color: open ? '#fff' : 'var(--sc)',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '.65rem' }}>
          <span style={{ fontSize: '1.1rem' }}>📐</span>
          <span style={{ fontFamily: 'Nunito', fontWeight: 800, fontSize: '.95rem' }}>
            Formula Bank
          </span>
          <span style={{
            background: open ? 'rgba(255,255,255,.25)' : 'var(--sc)',
            color: '#fff',
            fontSize: '.65rem',
            padding: '.15rem .5rem',
            borderRadius: 999,
            fontWeight: 800,
            lineHeight: 1.4,
          }}>
            {formulas.length}
          </span>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '.75rem' }}>
          <span style={{ fontSize: '.78rem', opacity: .8, fontWeight: 600 }}>
            {open ? 'Collapse' : 'Expand for exam night 🌙'}
          </span>
          <span style={{
            fontSize: '.7rem',
            background: open ? 'rgba(255,255,255,.2)' : 'var(--sm)',
            borderRadius: 6,
            padding: '.2rem .5rem',
            fontWeight: 700,
            transition: 'transform .2s',
            transform: open ? 'rotate(180deg)' : 'none',
          }}>▾</span>
        </div>
      </button>

      {/* ── Formula grid ── */}
      {open && (
        <div style={{
          border: '1.5px solid var(--sm)',
          borderTop: 'none',
          borderRadius: '0 0 14px 14px',
          background: '#fff',
          overflow: 'hidden',
        }}>
          {/* copy-all bar */}
          <div style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            padding: '.65rem 1.25rem',
            background: 'var(--sl)',
            borderBottom: '1px solid var(--sm)',
          }}>
            <span style={{ fontSize: '.78rem', color: 'var(--sc)', fontWeight: 700 }}>
              Quick-copy all formulas for offline revision
            </span>
            <button
              onClick={copyAll}
              style={{
                background: copied ? '#059669' : 'var(--sc)',
                color: '#fff',
                border: 'none',
                borderRadius: 8,
                padding: '.3rem .85rem',
                fontSize: '.75rem',
                fontWeight: 700,
                cursor: 'pointer',
                transition: 'background .2s',
                whiteSpace: 'nowrap',
              }}
            >
              {copied ? '✓ Copied!' : '📋 Copy All'}
            </button>
          </div>

          {/* grid */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(240px, 1fr))',
            gap: '1px',
            background: 'var(--sm)',
          }}>
            {formulas.map((f, i) => (
              <div
                key={i}
                style={{
                  background: '#fff',
                  padding: '1rem 1.15rem',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '.3rem',
                }}
              >
                <div style={{
                  fontSize: '.72rem',
                  fontWeight: 700,
                  color: 'var(--sc)',
                  textTransform: 'uppercase',
                  letterSpacing: '.05em',
                  opacity: .85,
                }}>
                  {f.label}
                </div>
                <div style={{
                  fontFamily: '"Courier New", Courier, monospace',
                  fontSize: '.92rem',
                  fontWeight: 700,
                  color: '#1e1b4b',
                  lineHeight: 1.5,
                  wordBreak: 'break-word',
                }}>
                  {f.formula}
                </div>
                {f.note && (
                  <div style={{
                    fontSize: '.72rem',
                    color: '#6b7280',
                    fontStyle: 'italic',
                    lineHeight: 1.4,
                  }}>
                    {f.note}
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* screenshot hint */}
          <div style={{
            textAlign: 'center',
            padding: '.55rem',
            background: 'var(--sl)',
            borderTop: '1px solid var(--sm)',
            fontSize: '.72rem',
            color: 'var(--sc)',
            fontWeight: 600,
            opacity: .8,
          }}>
            📸 Screenshot this for quick revision before exams
          </div>
        </div>
      )}
    </div>
  );
}

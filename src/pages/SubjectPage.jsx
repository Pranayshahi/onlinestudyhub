import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { getClass, getSubject, getSubjectColor, SUBJECT_META } from '../data/curriculum';
import Breadcrumb from '../components/Breadcrumb';
import { useProgress } from '../hooks/useProgress';

function downloadCertificate({ name, subjectLabel, classLabel, classId, topicCount }) {
  const W = 1200, H = 840;
  const canvas = document.createElement('canvas');
  canvas.width = W; canvas.height = H;
  const ctx = canvas.getContext('2d');

  // White background
  ctx.fillStyle = '#fff';
  ctx.fillRect(0, 0, W, H);

  // Navy outer border
  ctx.strokeStyle = '#1e1b4b';
  ctx.lineWidth = 6;
  ctx.strokeRect(18, 18, W - 36, H - 36);

  // Gold inner border
  ctx.strokeStyle = '#f59e0b';
  ctx.lineWidth = 2;
  ctx.strokeRect(28, 28, W - 56, H - 56);

  // Gold corner L-brackets
  const cs = 42;
  [[35,35],[W-35,35],[35,H-35],[W-35,H-35]].forEach(([x, y]) => {
    const dx = x < W / 2 ? 1 : -1;
    const dy = y < H / 2 ? 1 : -1;
    ctx.strokeStyle = '#f59e0b';
    ctx.lineWidth = 3;
    ctx.beginPath();
    ctx.moveTo(x + dx * cs, y);
    ctx.lineTo(x, y);
    ctx.lineTo(x, y + dy * cs);
    ctx.stroke();
  });

  // Header gradient band
  const hg = ctx.createLinearGradient(0, 0, W, 0);
  hg.addColorStop(0, '#1e1b4b');
  hg.addColorStop(1, '#312e81');
  ctx.fillStyle = hg;
  ctx.fillRect(40, 40, W - 80, 116);

  // Gold bottom edge of header
  ctx.fillStyle = '#f59e0b';
  ctx.fillRect(40, 152, W - 80, 5);

  // Header text
  ctx.textAlign = 'center';
  ctx.fillStyle = '#fff';
  ctx.font = 'bold 20px Arial';
  ctx.fillText('🎓  ONLINESTUDYHUB', W / 2, 82);
  ctx.fillStyle = 'rgba(255,255,255,0.6)';
  ctx.font = '13px Arial';
  ctx.fillText("India's Free Online Study Platform for Class 6–12", W / 2, 108);

  // Certificate title
  ctx.fillStyle = '#1e1b4b';
  ctx.font = 'bold 46px Georgia, serif';
  ctx.fillText('Certificate of Completion', W / 2, 228);

  // Divider line
  const dg = ctx.createLinearGradient(W/2-260, 0, W/2+260, 0);
  dg.addColorStop(0, 'transparent'); dg.addColorStop(0.2, '#f59e0b');
  dg.addColorStop(0.8, '#f59e0b'); dg.addColorStop(1, 'transparent');
  ctx.strokeStyle = dg;
  ctx.lineWidth = 1.5;
  ctx.beginPath(); ctx.moveTo(W/2-260, 246); ctx.lineTo(W/2+260, 246); ctx.stroke();

  // "This is to certify that"
  ctx.fillStyle = '#9ca3af';
  ctx.font = 'italic 20px Georgia, serif';
  ctx.fillText('This is to certify that', W / 2, 295);

  // Student name
  const displayName = name || 'Student';
  ctx.fillStyle = '#b45309';
  ctx.font = `bold ${displayName.length > 20 ? '44' : '54'}px Georgia, serif`;
  ctx.fillText(displayName, W / 2, 368);

  // Underline name
  const nw = ctx.measureText(displayName).width;
  ctx.strokeStyle = '#f59e0b';
  ctx.lineWidth = 2;
  ctx.beginPath(); ctx.moveTo(W/2-nw/2, 378); ctx.lineTo(W/2+nw/2, 378); ctx.stroke();

  // "has successfully completed"
  ctx.fillStyle = '#6b7280';
  ctx.font = '20px Georgia, serif';
  ctx.fillText('has successfully completed all topics in', W / 2, 424);

  // Subject — Class
  ctx.fillStyle = '#1e1b4b';
  ctx.font = 'bold 34px Georgia, serif';
  ctx.fillText(`${subjectLabel}  —  ${classLabel}`, W / 2, 476);

  // Topics count badge
  ctx.fillStyle = '#f0fdf4';
  const pillText = `✓  All ${topicCount} Topics Completed  ·  CBSE Curriculum`;
  const pw = ctx.measureText(pillText).width + 52;
  const px = W / 2 - pw / 2, py = 492;
  ctx.beginPath();
  const r = 17;
  ctx.moveTo(px + r, py); ctx.lineTo(px + pw - r, py);
  ctx.arcTo(px + pw, py, px + pw, py + r, r);
  ctx.lineTo(px + pw, py + 34 - r);
  ctx.arcTo(px + pw, py + 34, px + pw - r, py + 34, r);
  ctx.lineTo(px + r, py + 34);
  ctx.arcTo(px, py + 34, px, py + 34 - r, r);
  ctx.lineTo(px, py + r);
  ctx.arcTo(px, py, px + r, py, r);
  ctx.closePath();
  ctx.fill();
  ctx.strokeStyle = '#86efac'; ctx.lineWidth = 1.5; ctx.stroke();
  ctx.fillStyle = '#166534';
  ctx.font = 'bold 15px Arial';
  ctx.fillText(pillText, W / 2, 514);

  // Divider
  ctx.strokeStyle = '#f3f4f6'; ctx.lineWidth = 1;
  ctx.beginPath(); ctx.moveTo(100, 548); ctx.lineTo(W-100, 548); ctx.stroke();

  // Date + Cert ID
  const dateStr = new Date().toLocaleDateString('en-IN', { day: 'numeric', month: 'long', year: 'numeric' });
  const certId = `OSH-${(classId||'').replace('class-','')}${(subjectLabel||'').replace(/\s/g,'').slice(0,4).toUpperCase()}-${crypto.randomUUID().replace(/-/g,'').slice(0,7).toUpperCase()}`;
  ctx.fillStyle = '#9ca3af'; ctx.font = '14px Arial'; ctx.textAlign = 'center';
  ctx.fillText(`Date: ${dateStr}   ·   Certificate ID: ${certId}`, W / 2, 580);

  // Website
  ctx.fillStyle = '#d1d5db'; ctx.font = '13px Arial';
  ctx.fillText('www.onlinestudyhub.com', W / 2, 610);

  // Watermark
  ctx.save();
  ctx.globalAlpha = 0.03;
  ctx.fillStyle = '#1e1b4b';
  ctx.font = 'bold 110px Arial';
  ctx.translate(W / 2, H / 2 + 55);
  ctx.rotate(-0.28);
  ctx.fillText('CERTIFIED', 0, 0);
  ctx.restore();

  // Download
  const a = document.createElement('a');
  a.download = `OSH-${subjectLabel.replace(/\s+/g,'-')}-${classLabel.replace(/\s+/g,'-')}-Certificate.png`;
  a.href = canvas.toDataURL('image/png');
  a.click();
}

export default function SubjectPage({ user }) {
  const { classId, subjectId } = useParams();
  const [search, setSearch] = useState('');
  const { isDone, countDone } = useProgress();

  const classData = getClass(classId);
  const subject = getSubject(classId, subjectId);
  const subjectColor = getSubjectColor(subjectId);
  const meta = SUBJECT_META[subjectId] || {};

  if (!classData || !subject) {
    return (
      <div className="container" style={{ padding: '4rem 1.25rem', textAlign: 'center' }}>
        <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>😕</div>
        <h2 style={{ fontFamily: 'Nunito', color: '#1e1b4b' }}>Subject not found</h2>
        <Link to="/" className="btn btn-primary" style={{ marginTop: '1.5rem' }}>Go Home</Link>
      </div>
    );
  }

  const filtered = subject.topics.filter(t =>
    t.title.toLowerCase().includes(search.toLowerCase()) ||
    (t.subtopics || '').toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div>
      {/* Hero banner */}
      <div className={`${subjectColor}`} style={{
        background: 'linear-gradient(135deg, var(--sc) 0%, color-mix(in srgb, var(--sc) 70%, #000) 100%)',
        padding: '3rem 0 2.5rem',
        color: '#fff',
      }}>
        <div className="container">
          <Breadcrumb items={[
            { label: 'Home', to: '/' },
            { label: classData.label, to: `/class/${classId}` },
            { label: meta.label || subjectId }
          ]} />
          <div style={{ display: 'flex', alignItems: 'center', gap: '1.25rem', flexWrap: 'wrap' }}>
            <div style={{
              width: 72, height: 72,
              background: 'rgba(255,255,255,.15)',
              borderRadius: 20,
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              fontSize: '2.2rem', flexShrink: 0
            }}>
              {meta.icon || '📘'}
            </div>
            <div>
              <div style={{ fontSize: '.8rem', opacity: .75, fontWeight: 600, textTransform: 'uppercase', letterSpacing: '.06em', marginBottom: '.35rem' }}>
                {classData.label} · {classData.board}
              </div>
              <h1 style={{ fontFamily: 'Nunito', fontWeight: 900, fontSize: 'clamp(1.7rem,4vw,2.4rem)', marginBottom: '.4rem' }}>
                {meta.label || subjectId}
              </h1>
              <p style={{ opacity: .8, fontSize: '.95rem' }}>
                {subject.topics.length} topics · Click any topic to start learning
              </p>
              {/* Progress bar */}
              {(() => {
                const done = countDone(classId, subjectId);
                const pct = Math.round((done / subject.topics.length) * 100);
                return done > 0 ? (
                  <div style={{ marginTop: '.75rem' }}>
                    <div style={{ fontSize: '.78rem', opacity: .8, marginBottom: '.3rem', fontWeight: 600 }}>
                      {done} / {subject.topics.length} completed ({pct}%)
                    </div>
                    <div style={{ height: 6, background: 'rgba(255,255,255,.2)', borderRadius: 99, maxWidth: 260 }}>
                      <div style={{ height: '100%', width: `${pct}%`, background: '#4ade80', borderRadius: 99, transition: 'width .4s ease' }} />
                    </div>
                  </div>
                ) : null;
              })()}
            </div>
          </div>
        </div>
      </div>

      <div className="container" style={{ paddingTop: '2.5rem', paddingBottom: '5rem' }}>

        {/* Search bar */}
        <div style={{ position: 'relative', marginBottom: '2rem', maxWidth: 480 }}>
          <span style={{ position: 'absolute', left: '1rem', top: '50%', transform: 'translateY(-50%)', fontSize: '1.1rem' }}>🔍</span>
          <input
            type="text"
            placeholder={`Search topics in ${meta.label || subjectId}...`}
            value={search}
            onChange={e => setSearch(e.target.value)}
            style={{
              width: '100%',
              padding: '.75rem 1rem .75rem 2.75rem',
              border: '1.5px solid #e5e7eb',
              borderRadius: 12,
              fontSize: '.95rem',
              outline: 'none',
              fontFamily: 'Inter, sans-serif',
              transition: 'border-color .2s',
            }}
            onFocus={e => e.target.style.borderColor = 'var(--sc, #4f46e5)'}
            onBlur={e => e.target.style.borderColor = '#e5e7eb'}
          />
        </div>

        {/* Results count */}
        {search && (
          <p style={{ fontSize: '.875rem', color: '#9ca3af', marginBottom: '1.25rem' }}>
            {filtered.length} topic{filtered.length !== 1 ? 's' : ''} found for "{search}"
          </p>
        )}

        {/* Topics grid */}
        {filtered.length > 0 ? (
          <div className={`topics-grid ${subjectColor}`}>
            {filtered.map((topic, i) => {
              const origIndex = subject.topics.indexOf(topic);
              return (
                <Link
                  key={topic.id}
                  to={`/class/${classId}/subject/${subjectId}/topic/${topic.id}`}
                  style={{ textDecoration: 'none' }}
                >
                  <div className={`topic-card ${subjectColor}`} style={{ height: '100%', position: 'relative' }}>
                    {isDone(classId, subjectId, topic.id) && (
                      <div style={{
                        position: 'absolute', top: '.75rem', right: '.75rem',
                        background: '#22c55e', color: '#fff',
                        borderRadius: '50%', width: 22, height: 22,
                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                        fontSize: '.7rem', fontWeight: 800, flexShrink: 0,
                      }}>✓</div>
                    )}
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '.75rem' }}>
                      <div className="topic-card-num">
                        {String(origIndex + 1).padStart(2, '0')}
                      </div>
                      <span style={{
                        fontSize: '.7rem', fontWeight: 700, color: 'var(--sc)',
                        background: 'var(--sl)', padding: '.2rem .6rem',
                        borderRadius: 999
                      }}>
                        {topic.qa?.length || 0} Q&A
                      </span>
                    </div>
                    <div className="topic-card-title">{topic.title}</div>
                    {topic.subtopics && (
                      <div className="topic-card-meta" style={{ marginTop: '.35rem' }}>
                        {topic.subtopics}
                      </div>
                    )}
                    {/* Definition snippet */}
                    {topic.definition && (
                      <p style={{
                        fontSize: '.8rem', color: '#6b7280', marginTop: '.75rem',
                        lineHeight: 1.6,
                        display: '-webkit-box', WebkitLineClamp: 2,
                        WebkitBoxOrient: 'vertical', overflow: 'hidden'
                      }}>
                        {topic.definition}
                      </p>
                    )}
                    <div style={{
                      marginTop: '1rem',
                      paddingTop: '.75rem',
                      borderTop: '1px solid var(--sm)',
                      display: 'flex', alignItems: 'center', justifyContent: 'space-between'
                    }}>
                      <span style={{ fontSize: '.78rem', color: 'var(--sc)', fontWeight: 600 }}>
                        Start learning →
                      </span>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        ) : (
          <div style={{ textAlign: 'center', padding: '3rem 0' }}>
            <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>🔍</div>
            <p style={{ color: '#9ca3af' }}>No topics found for "{search}"</p>
            <button
              onClick={() => setSearch('')}
              className="btn btn-secondary"
              style={{ marginTop: '1rem', fontSize: '.9rem' }}
            >
              Clear search
            </button>
          </div>
        )}

        {/* ── Completion Certificate Banner ── */}
        {countDone(classId, subjectId) === subject.topics.length && subject.topics.length > 0 && (
          <div style={{
            marginTop: '3rem', marginBottom: '1rem',
            background: 'linear-gradient(135deg, #1e1b4b 0%, #312e81 100%)',
            borderRadius: 20, padding: '2.5rem 2rem',
            textAlign: 'center', color: '#fff',
            boxShadow: '0 12px 40px rgba(30,27,75,0.25)',
            position: 'relative', overflow: 'hidden',
          }}>
            <div style={{ position: 'absolute', right: '-3rem', top: '-3rem', width: '12rem', height: '12rem', borderRadius: '50%', background: 'rgba(255,255,255,.04)' }} />
            <div style={{ fontSize: '3.5rem', marginBottom: '.75rem' }}>🏆</div>
            <h2 style={{ fontFamily: 'Nunito', fontWeight: 900, fontSize: '1.5rem', marginBottom: '.5rem' }}>
              You've mastered all {subject.topics.length} topics!
            </h2>
            <p style={{ opacity: .75, fontSize: '.95rem', marginBottom: '1.75rem', maxWidth: 420, margin: '0 auto 1.75rem' }}>
              Congratulations on completing {meta.label || subjectId} — {classData.label}. Download your certificate and share your achievement!
            </p>
            <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
              <button
                onClick={() => {
                  downloadCertificate({
                    name: user?.name || 'Student',
                    subjectLabel: meta.label || subjectId,
                    classLabel: classData.label,
                    classId,
                    topicCount: subject.topics.length,
                  });
                }}
                style={{
                  padding: '.9rem 2rem',
                  background: '#f59e0b', color: '#1e1b4b',
                  border: 'none', borderRadius: 12,
                  fontFamily: 'Nunito', fontWeight: 900, fontSize: '1rem',
                  cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '.5rem',
                  boxShadow: '0 4px 14px rgba(245,158,11,0.4)',
                  transition: 'transform .15s',
                }}
                onMouseEnter={e => e.currentTarget.style.transform = 'translateY(-2px)'}
                onMouseLeave={e => e.currentTarget.style.transform = 'translateY(0)'}
              >
                🎓 Download Certificate
              </button>
              <button
                onClick={() => {
                  const url = window.location.href;
                  const text = `I just completed all ${subject.topics.length} topics in ${meta.label || subjectId} (${classData.label}) on OnlineStudyHub! 🏆 ${url}`;
                  if (navigator.share) navigator.share({ title: 'I completed a course!', text, url }).catch(() => {});
                  else window.open(`https://wa.me/?text=${encodeURIComponent(text)}`, '_blank');
                }}
                style={{
                  padding: '.9rem 2rem',
                  background: 'rgba(255,255,255,.12)', color: '#fff',
                  border: '1.5px solid rgba(255,255,255,.3)', borderRadius: 12,
                  fontFamily: 'Nunito', fontWeight: 700, fontSize: '1rem',
                  cursor: 'pointer',
                }}
              >
                📱 Share on WhatsApp
              </button>
            </div>
          </div>
        )}

        {/* Other subjects quick link */}
        <div style={{
          marginTop: '4rem', padding: '1.75rem',
          background: '#f9fafb', borderRadius: 16, border: '1px solid #e5e7eb'
        }}>
          <h3 style={{ fontFamily: 'Nunito', fontWeight: 800, color: '#1e1b4b', marginBottom: '1rem', fontSize: '1rem' }}>
            Other subjects in {classData.label}
          </h3>
          <div style={{ display: 'flex', gap: '.5rem', flexWrap: 'wrap' }}>
            {Object.keys(classData.subjects)
              .filter(sid => sid !== subjectId)
              .map(sid => {
                const m = SUBJECT_META[sid] || {};
                return (
                  <Link
                    key={sid}
                    to={`/class/${classId}/subject/${sid}`}
                    className={`badge badge-indigo ${getSubjectColor(sid)}`}
                    style={{
                      background: 'var(--sl)', color: 'var(--sc)',
                      padding: '.4rem 1rem', fontSize: '.83rem',
                      borderRadius: 999, fontWeight: 600, textDecoration: 'none',
                      border: '1px solid var(--sm)', transition: 'all .2s'
                    }}
                  >
                    {m.icon} {m.label || sid}
                  </Link>
                );
              })}
          </div>
        </div>
      </div>
    </div>
  );
}

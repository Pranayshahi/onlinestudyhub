import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import { getOfflineTopics, removeTopicOffline, downloadNotebookLMAudioPodcast } from '../utils/offlineStorage';

export default function OfflineNotesPage() {
  const [topics, setTopics] = useState([]);
  const [search, setSearch] = useState('');

  useEffect(() => {
    setTopics(getOfflineTopics());
  }, []);

  function handleRemove(id) {
    removeTopicOffline(id);
    setTopics(getOfflineTopics());
  }

  const filtered = topics.filter(t => t.title.toLowerCase().includes(search.toLowerCase()));

  return (
    <div style={{ background: 'linear-gradient(180deg, #0b0f19 0%, #1e1b4b 100%)', color: '#fff', minHeight: '100vh', padding: '2.5rem 0' }}>
      <SEO title="Offline Notes & Audio Mode — PWA" description="Access saved study notes, formula cheat sheets, and NotebookLM audio summaries offline." />

      <div className="container">
        <div style={{ maxWidth: 840, margin: '0 auto 2rem', textAlign: 'center' }}>
          <span style={{ background: 'rgba(56,189,248,0.2)', border: '1px solid rgba(125,211,252,0.3)', color: '#7dd3fc', fontSize: '.78rem', fontWeight: 900, padding: '.35rem 1rem', borderRadius: 20, textTransform: 'uppercase', letterSpacing: '0.5px' }}>
            📶 Progressive Web App (PWA) Offline Mode
          </span>
          <h1 style={{ fontFamily: 'Nunito', fontWeight: 900, fontSize: 'clamp(1.8rem, 3.5vw, 2.5rem)', margin: '.6rem 0 .4rem', color: '#fff' }}>
            Offline Notes &amp; NotebookLM Audio Podcasts
          </h1>
          <p style={{ fontSize: '.95rem', color: 'rgba(255,255,255,0.75)', margin: 0 }}>
            Study seamlessly even with low connectivity or zero internet access in rural areas.
          </p>
        </div>

        <div style={{ maxWidth: 860, margin: '0 auto' }}>
          {/* Storage & Search Bar Header */}
          <div style={{ background: 'rgba(255,255,255,0.06)', backdropFilter: 'blur(16px)', border: '1.5px solid rgba(255,255,255,0.18)', borderRadius: 22, padding: '1.25rem 1.5rem', marginBottom: '1.5rem', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '1rem' }}>
            <div>
              <div style={{ fontWeight: 900, fontSize: '1.05rem', color: '#fff' }}>
                📱 Cached Offline Storage: {topics.length} Chapters Saved
              </div>
              <div style={{ fontSize: '.8rem', color: '#a5b4fc', marginTop: '.2rem' }}>
                All saved chapter notes, formulas, and flashcards remain available 100% offline.
              </div>
            </div>

            <input
              type="text"
              value={search}
              onChange={e => setSearch(e.target.value)}
              placeholder="Search offline topics..."
              style={{ background: 'rgba(0,0,0,0.4)', border: '1px solid rgba(255,255,255,0.2)', borderRadius: 12, color: '#fff', padding: '.55rem 1rem', fontSize: '.85rem', fontFamily: 'Nunito', outline: 'none' }}
            />
          </div>

          {/* Offline Topics List */}
          {filtered.length === 0 ? (
            <div style={{ background: 'rgba(255,255,255,0.04)', border: '1px dashed rgba(255,255,255,0.2)', borderRadius: 20, padding: '3rem 1.5rem', textAlign: 'center' }}>
              <div style={{ fontSize: '3rem', marginBottom: '.75rem' }}>📶</div>
              <h3 style={{ fontFamily: 'Nunito', fontWeight: 900, color: '#fff', margin: '0 0 .5rem' }}>
                No Offline Notes Saved Yet
              </h3>
              <p style={{ fontSize: '.9rem', color: 'rgba(255,255,255,0.7)', maxWidth: 460, margin: '0 auto 1.5rem' }}>
                Go to any chapter page and click <strong>"📥 Save Chapter Offline"</strong> to study offline anytime.
              </p>
              <Link to="/classes" className="btn btn-primary" style={{ padding: '.65rem 1.5rem', borderRadius: 12, fontWeight: 900 }}>
                📖 Browse All Classes &amp; Subjects →
              </Link>
            </div>
          ) : (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              {filtered.map(t => (
                <div key={t.id} style={{ background: 'rgba(0,0,0,0.35)', border: '1px solid rgba(255,255,255,0.15)', borderRadius: 18, padding: '1.25rem', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '1rem' }}>
                  <div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '.5rem', marginBottom: '.25rem' }}>
                      <span style={{ background: '#10b981', color: '#fff', fontSize: '.68rem', fontWeight: 900, padding: '2px 8px', borderRadius: 10 }}>
                        ✅ Offline Ready
                      </span>
                      <span style={{ fontSize: '.75rem', color: '#c7d2fe', fontWeight: 800 }}>
                        {t.classId?.toUpperCase()} • {t.subjectId?.toUpperCase()}
                      </span>
                    </div>
                    <h3 style={{ fontFamily: 'Nunito', fontWeight: 900, color: '#fff', fontSize: '1.1rem', margin: 0 }}>
                      {t.title}
                    </h3>
                    <p style={{ fontSize: '.83rem', color: 'rgba(255,255,255,0.7)', margin: '.2rem 0 0', maxWidth: 520, display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical', overflow: 'hidden' }}>
                      {t.definition}
                    </p>
                  </div>

                  <div style={{ display: 'flex', gap: '.5rem', flexWrap: 'wrap' }}>
                    <button
                      onClick={() => downloadNotebookLMAudioPodcast(t)}
                      style={{ background: 'linear-gradient(135deg, #10b981, #059669)', color: '#fff', border: 'none', borderRadius: 10, padding: '.5rem .85rem', fontSize: '.78rem', fontWeight: 900, cursor: 'pointer' }}
                    >
                      🎙️ Download Audio Podcast
                    </button>
                    <Link
                      to={`/class/${t.classId}/subject/${t.subjectId}/topic/${t.id}`}
                      className="btn btn-primary"
                      style={{ padding: '.5rem 1rem', borderRadius: 10, fontSize: '.78rem', fontWeight: 900 }}
                    >
                      📖 Read Notes →
                    </Link>
                    <button
                      onClick={() => handleRemove(t.id)}
                      style={{ background: 'rgba(239,68,68,0.2)', border: '1px solid rgba(248,113,113,0.3)', color: '#fca5a5', borderRadius: 10, padding: '.5rem .75rem', fontSize: '.78rem', fontWeight: 800, cursor: 'pointer' }}
                    >
                      🗑️
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

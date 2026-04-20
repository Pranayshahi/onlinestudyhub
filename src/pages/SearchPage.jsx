import React, { useState, useEffect } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { useSearch } from '../hooks/useSearch';

function ResultSection({ title, emoji, items, renderItem }) {
  if (!items.length) return null;
  return (
    <div className="search-section">
      <h2 className="search-section-title">
        <span>{emoji}</span> {title}
        <span className="search-section-count">{items.length}</span>
      </h2>
      <div className="search-results-list">
        {items.map(renderItem)}
      </div>
    </div>
  );
}

export default function SearchPage() {
  const [params, setParams] = useSearchParams();
  const query = params.get('q') || '';
  const [input, setInput] = useState(query);
  const results = useSearch(query);

  useEffect(() => { setInput(params.get('q') || ''); }, [params]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const trimmed = input.trim();
    if (trimmed) setParams({ q: trimmed });
  };

  return (
    <div className="search-page">
      <div className="search-hero">
        <div className="container-sm">
          <h1 className="search-hero-title">Search</h1>
          <form onSubmit={handleSubmit} className="search-form">
            <div className="search-form-inner">
              <span className="search-form-icon">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/>
                </svg>
              </span>
              <input
                className="search-page-input"
                value={input}
                onChange={e => setInput(e.target.value)}
                placeholder="Search topics, classes, teachers..."
                autoFocus
                autoComplete="off"
              />
              {input && (
                <button type="button" className="search-clear-btn" onClick={() => setInput('')}>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>
                  </svg>
                </button>
              )}
            </div>
            <button type="submit" className="btn btn-primary">Search</button>
          </form>
        </div>
      </div>

      <div className="container-sm" style={{ paddingTop: '2rem', paddingBottom: '4rem' }}>
        {query.length >= 2 ? (
          results.total === 0 ? (
            <div className="search-empty">
              <div className="search-empty-icon">🔍</div>
              <h3>No results for "{query}"</h3>
              <p>Try different keywords or browse classes directly.</p>
              <Link to="/classes" className="btn btn-secondary" style={{ marginTop: '1rem' }}>Browse Classes</Link>
            </div>
          ) : (
            <>
              <p className="search-summary">
                {results.total} result{results.total !== 1 ? 's' : ''} for <strong>"{query}"</strong>
              </p>

              <ResultSection
                title="Topics" emoji="📚" items={results.topics}
                renderItem={r => (
                  <Link key={r.id} to={r.url} className="search-result-card">
                    <span className="search-result-card-icon">{r.icon || '📄'}</span>
                    <div className="search-result-card-body">
                      <div className="search-result-card-title">{r.title}</div>
                      <div className="search-result-card-meta">{r.classLabel} · {r.subjectLabel}</div>
                      {r.subtopics && <div className="search-result-card-sub">{r.subtopics}</div>}
                    </div>
                    <span className="search-result-card-arrow">→</span>
                  </Link>
                )}
              />

              <ResultSection
                title="Subjects" emoji="📖" items={results.subjects}
                renderItem={r => (
                  <Link key={r.id} to={r.url} className="search-result-card">
                    <span className="search-result-card-icon">{r.icon || '📖'}</span>
                    <div className="search-result-card-body">
                      <div className="search-result-card-title">{r.subjectLabel}</div>
                      <div className="search-result-card-meta">{r.classLabel}</div>
                    </div>
                    <span className="search-result-card-arrow">→</span>
                  </Link>
                )}
              />

              <ResultSection
                title="Classes" emoji="🏫" items={results.classes}
                renderItem={r => (
                  <Link key={r.id} to={r.url} className="search-result-card">
                    <span className="search-result-card-icon">{r.emoji || '🏫'}</span>
                    <div className="search-result-card-body">
                      <div className="search-result-card-title">{r.label}</div>
                      {r.description && <div className="search-result-card-sub">{r.description}</div>}
                    </div>
                    <span className="search-result-card-arrow">→</span>
                  </Link>
                )}
              />

              <ResultSection
                title="Teachers" emoji="👨‍🏫" items={results.teachers}
                renderItem={r => (
                  <Link key={r.id} to={r.url} className="search-result-card search-result-teacher">
                    <span className="search-result-card-icon" style={{ fontSize: '1.6rem' }}>{r.avatar}</span>
                    <div className="search-result-card-body">
                      <div className="search-result-card-title">{r.name}</div>
                      <div className="search-result-card-meta">
                        {r.subject}{r.classLabel ? ` · ${r.classLabel}` : ''}
                      </div>
                      <div className="search-result-teacher-badges">
                        {r.rating && <span className="search-badge">⭐ {r.rating}</span>}
                        {r.fee && <span className="search-badge">{r.fee}</span>}
                      </div>
                    </div>
                    <span className="search-result-card-arrow">→</span>
                  </Link>
                )}
              />
            </>
          )
        ) : query.length > 0 ? (
          <p className="search-hint">Type at least 2 characters to search.</p>
        ) : (
          <div className="search-suggestions">
            <p className="search-hint">Try searching for:</p>
            <div className="search-suggestion-chips">
              {['Algebra', 'Photosynthesis', 'Newton', 'Class 10', 'Chemistry', 'History'].map(s => (
                <button key={s} className="search-chip" onClick={() => { setInput(s); setParams({ q: s }); }}>
                  {s}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

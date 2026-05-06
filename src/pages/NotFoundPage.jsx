import React from 'react';
import { Link } from 'react-router-dom';
import { useLang } from '../context/LanguageContext';

export default function NotFoundPage() {
  const { t } = useLang();
  return (
    <div style={{ minHeight: '70vh', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '2rem' }}>
      <div style={{ textAlign: 'center', maxWidth: 480 }}>
        <div style={{ fontSize: '5rem', marginBottom: '1rem' }}>📚</div>
        <h1 style={{ fontFamily: 'Nunito', fontSize: '2rem', fontWeight: 900, color: '#1e1b4b', marginBottom: '.75rem' }}>
          {t('notfound_title')}
        </h1>
        <p style={{ color: '#6b7280', fontSize: '1rem', lineHeight: 1.7, marginBottom: '2rem' }}>
          {t('notfound_sub')}
        </p>
        <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
          <Link to="/" className="btn btn-primary">
            {t('notfound_home')}
          </Link>
          <Link to="/class/class-10" className="btn btn-secondary">
            Class 10 →
          </Link>
        </div>
      </div>
    </div>
  );
}

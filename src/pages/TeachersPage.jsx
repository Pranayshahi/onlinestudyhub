import React from 'react';
import { Link } from 'react-router-dom';
import { NAV_CLASSES } from '../data/curriculum';
import Breadcrumb from '../components/Breadcrumb';
import SEO from '../components/SEO';
import { useLang } from '../context/LanguageContext';

export default function TeachersPage() {
  const { t } = useLang();
  return (
    <div>
      <SEO 
        title="Find Expert Teachers — OnlineStudyHub"
        description="Browse our highly qualified subject experts across all classes. From Math to Physics, find the perfect mentor for your studies."
        path="/teachers"
      />
      <div className="page-header">
        <div className="container">
          <Breadcrumb items={[{ label: 'Home', to: '/' }, { label: 'Find Teachers' }]} />
          <h1 style={{ fontFamily: 'Nunito', fontSize: 'clamp(1.8rem,4vw,2.5rem)', fontWeight: 900 }}>
            {t('tpage_title')}
          </h1>
          <p style={{ color: 'rgba(255,255,255,.7)', fontSize: '.95rem', marginTop: '.5rem' }}>
            {t('tpage_sub')}
          </p>
        </div>
      </div>

      <div className="container" style={{ paddingTop: '2.5rem', paddingBottom: '4rem' }}>
        <div className="section-header">
          <h2 className="section-title">{t('tpage_select_class')}</h2>
          <p className="section-sub">{t('tpage_select_sub')}</p>
        </div>

        <div className="classes-grid">
          {NAV_CLASSES.map(cls => (
            <Link to={`/teachers/${cls.id}`} key={cls.id} style={{ textDecoration: 'none' }}>
              <div className="class-card">
                <div className="class-card-icon" style={{ fontSize: '3rem', marginBottom: '1rem' }}>
                  {cls.label.includes('JEE') ? '🏆' : cls.label.includes('NEET') ? '🌿' : '📚'}
                </div>
                <div className="class-card-title">{cls.label}</div>
                <div className="class-card-sub" style={{ marginTop: '.5rem', fontWeight: 600, color: '#6366f1' }}>
                  {t('tpage_browse')}
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

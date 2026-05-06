import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { NAV_CLASSES } from '../data/curriculum';
import { useLang } from '../context/LanguageContext';
import { api } from '../utils/api';
import { TEACHERS } from '../data/teachers';
import TeacherProfileCard from '../components/TeacherProfileCard';
import TeacherFinder from '../components/TeacherFinder';
import Breadcrumb from '../components/Breadcrumb';
import SEO from '../components/SEO';

export default function TeachersListPage({ user, onOpenLogin }) {
  const { classId } = useParams();
  const [apiTeachers, setApiTeachers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [bookingTeacher, setBookingTeacher] = useState(null);

  const currentClass = NAV_CLASSES.find(c => c.id === classId) || { label: classId };
  const { t } = useLang();

  useEffect(() => {
    setLoading(true);
    api(`/teachers?classId=${classId}`)
      .then(data => {
        if (data?.length) setApiTeachers(data);
      })
      .catch(() => {})
      .finally(() => setLoading(false));
  }, [classId]);

  // Merge API teachers with static ones, avoiding duplicates by email/id
  const staticTeachers = TEACHERS[classId] || [];
  const allTeachers = [...apiTeachers];
  staticTeachers.forEach(st => {
    if (!allTeachers.find(at => at.email === st.contact || at.id === st.id)) {
      allTeachers.push(st);
    }
  });

  const handleBook = (teacher) => {
    if (!user) { onOpenLogin(); return; }
    setBookingTeacher(teacher);
  };

  return (
    <div>
      {bookingTeacher && (
        <TeacherFinder
          classId={classId}
          subjectId={null}
          initialTeacher={bookingTeacher}
          onClose={() => setBookingTeacher(null)}
          user={user}
          onOpenLogin={onOpenLogin}
        />
      )}
      <SEO
        title={`Expert Teachers for ${currentClass.label} — OnlineStudyHub`}
        description={`Meet our highly rated teachers for ${currentClass.label}. Book a session today for personalized guidance.`}
        path={`/teachers/${classId}`}
      />
      <div className="page-header">
        <div className="container">
          <Breadcrumb items={[
            { label: 'Home', to: '/' },
            { label: 'Find Teachers', to: '/teachers' },
            { label: currentClass.label }
          ]} />
          <h1 style={{ fontFamily: 'Nunito', fontSize: 'clamp(1.8rem,4vw,2.5rem)', fontWeight: 900 }}>
            {currentClass.label} Expert Teachers
          </h1>
          <p style={{ color: 'rgba(255,255,255,.7)', fontSize: '.95rem', marginTop: '.5rem' }}>
            Highly qualified mentors dedicated to your success in {currentClass.label}.
          </p>
        </div>
      </div>

      <div className="container" style={{ paddingTop: '2.5rem', paddingBottom: '5rem' }}>
        <div className="section-header" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', flexWrap: 'wrap', gap: '1rem' }}>
          <div>
            <h2 className="section-title">{t('tlist_available')}</h2>
            <p className="section-sub">{t('tlist_available_sub')}</p>
          </div>
          <div style={{ padding: '.5rem 1rem', background: '#eef2ff', borderRadius: 12, color: '#4f46e5', fontWeight: 700, fontSize: '.9rem' }}>
            ✨ {allTeachers.length} {t('tlist_found')}
          </div>
        </div>

        {loading && allTeachers.length === 0 ? (
          <div style={{ textAlign: 'center', padding: '4rem 0' }}>
            <div className="loading-spinner" style={{ margin: '0 auto 1rem' }}></div>
            <p style={{ color: '#6b7280' }}>{t('tlist_loading')}</p>
          </div>
        ) : (
          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))', 
            gap: '2rem',
            marginTop: '1rem'
          }}>
            {allTeachers.map((teacher, idx) => (
              <div key={teacher.id || idx} className="fade-up" style={{ animationDelay: `${idx * 0.1}s` }}>
                <TeacherProfileCard 
                  teacher={teacher} 
                  onBook={handleBook}
                />
              </div>
            ))}
          </div>
        )}

        {allTeachers.length === 0 && !loading && (
          <div style={{ textAlign: 'center', padding: '5rem 0', background: '#f9fafb', borderRadius: 20 }}>
            <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>🔍</div>
            <h3 style={{ fontFamily: 'Nunito', fontWeight: 800 }}>{t('tlist_none')}</h3>
            <p style={{ color: '#6b7280', marginTop: '.5rem' }}>{t('tlist_none_sub')}</p>
            <Link to="/teachers" className="btn btn-primary" style={{ marginTop: '1.5rem' }}>{t('tlist_view_other')}</Link>
          </div>
        )}
      </div>
    </div>
  );
}

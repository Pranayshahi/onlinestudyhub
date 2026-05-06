import React from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { EXAMS, WEIGHTAGE, PYQS, MOCK_TESTS } from '../data/jeeNeetData';
import SEO from '../components/SEO';
import { useLang } from '../context/LanguageContext';

export default function ExamHubPage() {
  const { examId } = useParams();
  const navigate = useNavigate();
  const exam = EXAMS[examId];
  const { t } = useLang();

  if (!exam) {
    return (
      <div className="container" style={{ padding: '4rem 1.25rem', textAlign: 'center' }}>
        <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>🤔</div>
        <h2>Exam not found</h2>
        <p style={{ color: '#6b7280', marginTop: '.5rem' }}>Try <Link to="/exam/jee" style={{ color: '#4f46e5' }}>JEE</Link> or <Link to="/exam/neet" style={{ color: '#059669' }}>NEET</Link></p>
      </div>
    );
  }

  const pyqs = PYQS[examId] || [];
  const tests = MOCK_TESTS.filter(t => t.examId === examId);
  const weightageSubjects = WEIGHTAGE[examId] || {};
  const totalChapters = Object.values(weightageSubjects).reduce((s, ch) => s + ch.length, 0);

  const cards = [
    {
      icon: '📊',
      titleKey: 'exam_weightage_title',
      desc: `${totalChapters} chapters ranked by importance across ${exam.subjects.length} subjects`,
      subKey: 'exam_weightage_sub',
      link: `/exam/${examId}/weightage`,
      color: exam.color,
      bg: exam.lightColor,
    },
    {
      icon: '📝',
      titleKey: 'exam_pyq_title',
      desc: `${pyqs.length} previous year questions with detailed solutions`,
      subKey: 'exam_pyq_sub',
      link: `/exam/${examId}/pyq`,
      color: '#f59e0b',
      bg: '#fffbeb',
    },
    {
      icon: '⏱️',
      titleKey: 'exam_mock_title',
      desc: `${tests.length} full-length timed tests with negative marking`,
      subKey: 'exam_mock_sub',
      link: `/exam/${examId}/mock-test`,
      color: '#dc2626',
      bg: '#fef2f2',
    },
  ];

  const isJEE = examId === 'jee';
  const examTitle = isJEE
    ? 'JEE Main & Advanced Preparation — Chapter Weightage, PYQs & Mock Tests'
    : 'NEET-UG Preparation — Chapter Weightage, PYQs & Mock Tests';
  const examDesc = isJEE
    ? `Crack IIT JEE with OnlineStudyHub. Study ${totalChapters} chapters with weightage analysis, ${pyqs.length}+ previous year questions, and free mock tests for JEE Main & Advanced.`
    : `Crack NEET-UG with OnlineStudyHub. Study ${totalChapters} chapters with weightage analysis, ${pyqs.length}+ previous year questions, and free mock tests for Biology, Physics & Chemistry.`;

  return (
    <div style={{ background: '#f9fafb', minHeight: '100vh' }}>
      <SEO
        title={examTitle}
        description={examDesc}
        path={`/exam/${examId}`}
        breadcrumbs={[{ name: exam.label, url: `/exam/${examId}` }]}
        schema={{
          '@context': 'https://schema.org',
          '@type': 'Course',
          name: exam.label,
          description: examDesc,
          provider: { '@type': 'Organization', name: 'OnlineStudyHub', url: 'https://www.onlinestudyhub.com' },
          educationalLevel: 'Undergraduate Entrance',
          about: { '@type': 'Thing', name: isJEE ? 'IIT JEE Entrance Examination' : 'NEET Medical Entrance Examination' },
        }}
      />
      {/* Hero */}
      <div style={{ background: `linear-gradient(135deg, #1e1b4b 0%, ${exam.color} 100%)`, color: '#fff', padding: '3.5rem 0 2.5rem' }}>
        <div className="container">
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1rem' }}>
            <span style={{ fontSize: '3rem' }}>{exam.emoji}</span>
            <div>
              <div style={{ fontSize: '.85rem', color: 'rgba(255,255,255,.65)', fontWeight: 600, letterSpacing: '.06em', textTransform: 'uppercase' }}>{t('exam_prep_label')}</div>
              <h1 style={{ fontSize: 'clamp(1.8rem, 4vw, 2.8rem)', fontWeight: 900, lineHeight: 1.2 }}>{exam.label}</h1>
            </div>
          </div>
          <p style={{ color: 'rgba(255,255,255,.75)', fontSize: '1.05rem', maxWidth: 560, lineHeight: 1.7, marginBottom: '1.5rem' }}>{exam.description}</p>

          {/* Exam info pills */}
          <div style={{ display: 'flex', gap: '.75rem', flexWrap: 'wrap' }}>
            {[
              { label: `${exam.duration} min`, icon: '⏱️' },
              { label: exam.pattern, icon: '📋' },
              { label: `+${exam.marking.correct} / ${exam.marking.wrong} marking`, icon: '✅' },
            ].map(pill => (
              <span key={pill.label} style={{ background: 'rgba(255,255,255,.15)', backdropFilter: 'blur(8px)', border: '1px solid rgba(255,255,255,.2)', borderRadius: 99, padding: '.35rem .9rem', fontSize: '.8rem', fontWeight: 600, display: 'flex', alignItems: 'center', gap: '.4rem' }}>
                {pill.icon} {pill.label}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Subjects */}
      <div className="container" style={{ padding: '2.5rem 1.25rem' }}>
        <div style={{ display: 'flex', gap: '.75rem', marginBottom: '2.5rem', flexWrap: 'wrap' }}>
          {exam.subjects.map(s => (
            <div key={s} style={{ display: 'flex', alignItems: 'center', gap: '.6rem', background: '#fff', border: '1px solid #e5e7eb', borderRadius: 12, padding: '.6rem 1.1rem', fontWeight: 700 }}>
              <span style={{ fontSize: '1.3rem' }}>{exam.subjectEmojis[s]}</span>
              <div>
                <div style={{ fontSize: '.85rem', color: '#1f2937' }}>{exam.subjectLabels[s]}</div>
                <div style={{ fontSize: '.72rem', color: '#9ca3af' }}>{(WEIGHTAGE[examId]?.[s] || []).length} {t('exam_chapters')}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Feature cards */}
        <h2 style={{ fontFamily: 'Nunito, sans-serif', fontWeight: 800, fontSize: '1.4rem', color: '#1f2937', marginBottom: '1.25rem' }}>
          {exam.shortLabel} {t('exam_prep_tools')}
        </h2>
        <div className="exam-feature-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '1.25rem', marginBottom: '3rem' }}>
          {cards.map(card => (
            <Link key={card.titleKey} to={card.link} style={{ textDecoration: 'none' }}>
              <div className="card" style={{ padding: '1.75rem', cursor: 'pointer', borderTop: `4px solid ${card.color}`, height: '100%' }}>
                <div style={{ fontSize: '2.2rem', marginBottom: '1rem' }}>{card.icon}</div>
                <h3 style={{ fontFamily: 'Nunito, sans-serif', fontWeight: 800, fontSize: '1.15rem', color: '#1f2937', marginBottom: '.5rem' }}>{t(card.titleKey)}</h3>
                <p style={{ color: '#4b5563', fontSize: '.9rem', lineHeight: 1.6, marginBottom: '.75rem' }}>{card.desc}</p>
                <div style={{ background: card.bg, color: card.color, fontSize: '.78rem', fontWeight: 600, padding: '.3rem .8rem', borderRadius: 99, display: 'inline-block' }}>{t(card.subKey)}</div>
              </div>
            </Link>
          ))}
        </div>

        {/* Quick stats */}
        <div style={{ background: '#fff', border: '1px solid #e5e7eb', borderRadius: 16, padding: '1.5rem 2rem' }}>
          <h3 style={{ fontFamily: 'Nunito, sans-serif', fontWeight: 800, marginBottom: '1rem', color: '#1f2937' }}>{t('exam_quick_stats')}</h3>
          <div className="exam-stats-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(140px, 1fr))', gap: '1rem' }}>
            {[
              { labelKey: 'exam_stat_questions', value: exam.totalQuestions, icon: '❓' },
              { labelKey: 'exam_stat_marks', value: exam.totalMarks, icon: '🏅' },
              { labelKey: 'exam_stat_duration', value: `${exam.duration} min`, icon: '⏱️' },
              { labelKey: 'exam_stat_chapters', value: totalChapters, icon: '📚' },
              { labelKey: 'exam_stat_pyqs', value: pyqs.length, icon: '📝' },
              { labelKey: 'exam_mock_title', value: tests.length, icon: '🎯' },
            ].map(stat => (
              <div key={stat.labelKey} style={{ textAlign: 'center', padding: '1rem', background: '#f9fafb', borderRadius: 12 }}>
                <div style={{ fontSize: '1.5rem', marginBottom: '.25rem' }}>{stat.icon}</div>
                <div style={{ fontFamily: 'Nunito, sans-serif', fontWeight: 800, fontSize: '1.4rem', color: exam.color }}>{stat.value}</div>
                <div style={{ fontSize: '.75rem', color: '#9ca3af', fontWeight: 600 }}>{t(stat.labelKey)}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

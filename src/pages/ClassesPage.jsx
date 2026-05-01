import React from 'react';
import { Link } from 'react-router-dom';
import { getAllClasses } from '../data/curriculum';
import SEO from '../components/SEO';

export default function ClassesPage() {
  const classes = getAllClasses();

  return (
    <div>
      <SEO
        title="Online Study for Class 6 to 12 — CBSE Subjects & Topics"
        description="Browse online study material for Class 6, 7, 8, 9, 10, 11, and 12. Free CBSE topic notes, subtopics, and Q&A for Mathematics, Science, English, Social Science and more."
        path="/classes"
        breadcrumbs={[{ name: 'All Classes', url: '/classes' }]}
      />
      <div className="page-header">
        <div className="container">
          <h1 style={{ fontFamily: 'Nunito', fontSize: 'clamp(1.8rem,4vw,2.5rem)', fontWeight: 900 }}>
            Choose Your Class
          </h1>
          <p style={{ color: 'rgba(255,255,255,.7)', fontSize: '.95rem', marginTop: '.5rem' }}>
            Select your class to browse subjects and topics
          </p>
        </div>
      </div>

      <div className="container" style={{ paddingTop: '2.5rem', paddingBottom: '4rem' }}>
        <div className="classes-grid">
          {classes.map(cls => (
            <Link to={`/class/${cls.id}`} key={cls.id} style={{ textDecoration: 'none' }}>
              <div className="class-card">
                <div className="class-card-icon">{cls.emoji}</div>
                <div className="class-card-title">{cls.label}</div>
                <div className="class-card-sub">{cls.board}</div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

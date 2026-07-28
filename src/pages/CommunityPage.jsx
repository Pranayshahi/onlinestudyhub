import React, { useState, useEffect } from 'react';
import { api } from '../utils/api';
import { TEACHERS } from '../data/teachers';

export default function CommunityPage() {
  const [doubts, setDoubts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedSubject, setSelectedSubject] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [showModal, setShowModal] = useState(false);

  // New Doubt Form State
  const [newTitle, setNewTitle] = useState('');
  const [newDesc, setNewDesc] = useState('');
  const [newSubject, setNewSubject] = useState('Physics');
  const [newClassId, setNewClassId] = useState('class-12');
  const [newTaggedTeacher, setNewTaggedTeacher] = useState('');
  const [studentName, setStudentName] = useState('Aarav Sharma');
  const [submitting, setSubmitting] = useState(false);

  // Expanded Answer Inputs
  const [activeAnswerBox, setActiveAnswerBox] = useState(null);
  const [answerInputText, setAnswerInputText] = useState('');

  const fetchDoubts = async () => {
    try {
      setLoading(true);
      let queryParams = [];
      if (selectedSubject !== 'All') queryParams.push(`subject=${encodeURIComponent(selectedSubject)}`);
      if (searchQuery.trim()) queryParams.push(`search=${encodeURIComponent(searchQuery.trim())}`);
      const qs = queryParams.length ? `?${queryParams.join('&')}` : '';
      const data = await api(`/community/doubts${qs}`);
      setDoubts(data || []);
    } catch (err) {
      console.error('Error fetching doubts:', err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchDoubts();
  }, [selectedSubject]);

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    fetchDoubts();
  };

  const handleCreateDoubt = async (e) => {
    e.preventDefault();
    if (!newTitle.trim() || !newDesc.trim()) return;

    setSubmitting(true);
    try {
      const selectedTeacherObj = TEACHERS.find(t => t.name === newTaggedTeacher);
      const payload = {
        title: newTitle,
        description: newDesc,
        subject: newSubject,
        classId: newClassId,
        taggedTeacher: selectedTeacherObj ? {
          id: selectedTeacherObj.id,
          name: selectedTeacherObj.name,
          subject: selectedTeacherObj.subject,
          avatar: '👨‍🏫'
        } : null,
        studentName: studentName || 'Student Aspirant',
        studentAvatar: '👨‍🎓'
      };

      await api('/community/doubts', {
        method: 'POST',
        body: payload
      });

      setNewTitle('');
      setNewDesc('');
      setShowModal(false);
      fetchDoubts();
    } catch (err) {
      console.error('Error creating doubt:', err);
    } finally {
      setSubmitting(false);
    }
  };

  const handleUpvoteDoubt = async (id) => {
    try {
      const res = await api(`/community/doubts/${id}/upvote`, {
        method: 'POST',
        body: { userKey: 'local_user_' + (studentName || 'anon') }
      });
      setDoubts(prev => prev.map(d => d._id === id ? { ...d, upvotes: res.upvotes } : d));
    } catch (err) {
      console.error('Error upvoting doubt:', err);
    }
  };

  const handleAddAnswer = async (id) => {
    if (!answerInputText.trim()) return;
    try {
      await api(`/community/doubts/${id}/answers`, {
        method: 'POST',
        body: {
          authorName: studentName || 'Student Scholar',
          authorAvatar: '👨‍🎓',
          authorRole: 'student',
          answerText: answerInputText
        }
      });
      setAnswerInputText('');
      setActiveAnswerBox(null);
      fetchDoubts();
    } catch (err) {
      console.error('Error adding answer:', err);
    }
  };

  const SUBJECTS = ['All', 'Physics', 'Chemistry', 'Mathematics', 'Biology', 'Computer Studies'];

  return (
    <div style={{ minHeight: '100vh', background: '#f8fafc', padding: '2rem 1rem 4rem' }}>
      <div style={{ maxWidth: 960, margin: '0 auto' }}>

        {/* ── Header Banner ── */}
        <div style={{
          background: 'linear-gradient(135deg, #1e1b4b 0%, #4f46e5 100%)',
          borderRadius: 20,
          padding: '2.5rem 2rem',
          color: '#fff',
          marginBottom: '2rem',
          boxShadow: '0 12px 32px rgba(79,70,229,0.2)',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '1.5rem'
        }}>
          <div>
            <span style={{ background: 'rgba(255,255,255,0.15)', padding: '.3rem .8rem', borderRadius: 20, fontSize: '.8rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '1px' }}>
              💬 Community Q&A Feed
            </span>
            <h1 style={{ fontSize: '2rem', fontWeight: 800, marginTop: '.75rem', marginBottom: '.5rem', color: '#fff' }}>
              Student Doubt Forum
            </h1>
            <p style={{ opacity: 0.9, fontSize: '.95rem', maxWidth: 560, lineHeight: 1.5 }}>
              Ask doubts, review step-by-step verified solutions, upvote top explanations, and tag master faculty (Rajay Sir, Vijay Sir, Rohan Gupta) for priority assistance!
            </p>
          </div>
          <button
            onClick={() => setShowModal(true)}
            style={{
              background: '#fbbf24',
              color: '#1e1b4b',
              border: 'none',
              borderRadius: 14,
              padding: '.85rem 1.5rem',
              fontSize: '1rem',
              fontWeight: 800,
              cursor: 'pointer',
              boxShadow: '0 6px 20px rgba(251,191,36,0.35)',
              display: 'flex',
              alignItems: 'center',
              gap: '.5rem',
              transition: 'transform 0.15s'
            }}
          >
            <span>➕</span> Ask a Doubt
          </button>
        </div>

        {/* ── Filter Bar & Search ── */}
        <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem' }}>
          <div style={{ display: 'flex', gap: '.4rem', flexWrap: 'wrap' }}>
            {SUBJECTS.map(sub => (
              <button
                key={sub}
                onClick={() => setSelectedSubject(sub)}
                style={{
                  padding: '.5rem 1rem',
                  borderRadius: 20,
                  fontSize: '.85rem',
                  fontWeight: 700,
                  border: 'none',
                  cursor: 'pointer',
                  background: selectedSubject === sub ? '#4f46e5' : '#fff',
                  color: selectedSubject === sub ? '#fff' : '#64748b',
                  boxShadow: selectedSubject === sub ? '0 4px 12px rgba(79,70,229,0.25)' : '0 2px 6px rgba(0,0,0,0.04)',
                  transition: 'all .15s'
                }}
              >
                {sub === 'All' ? '🌐 All Subjects' : sub}
              </button>
            ))}
          </div>

          <form onSubmit={handleSearchSubmit} style={{ display: 'flex', gap: '.5rem', flex: 1, maxWidth: 340 }}>
            <input
              type="text"
              placeholder="Search doubts or topics..."
              value={searchQuery}
              onChange={e => setSearchQuery(e.target.value)}
              style={{
                flex: 1,
                padding: '.6rem 1rem',
                borderRadius: 12,
                border: '1.5px solid #e2e8f0',
                outline: 'none',
                fontSize: '.88rem',
                background: '#fff'
              }}
            />
            <button type="submit" style={{ padding: '.6rem 1rem', background: '#4f46e5', color: '#fff', border: 'none', borderRadius: 12, fontWeight: 700, cursor: 'pointer' }}>
              Search
            </button>
          </form>
        </div>

        {/* ── Doubt Posts Feed ── */}
        {loading ? (
          <div style={{ textAlign: 'center', padding: '3rem', color: '#64748b', fontWeight: 600 }}>
            ⏳ Loading community doubts...
          </div>
        ) : doubts.length === 0 ? (
          <div style={{ background: '#fff', borderRadius: 16, padding: '3rem', textAlign: 'center', boxShadow: '0 4px 12px rgba(0,0,0,0.03)' }}>
            <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>🤔</div>
            <h3 style={{ fontSize: '1.25rem', color: '#1e293b', fontWeight: 700 }}>No doubts posted yet in this category</h3>
            <p style={{ color: '#64748b', marginTop: '.5rem', marginBottom: '1.5rem' }}>Be the first student to ask a question and tag a teacher!</p>
            <button onClick={() => setShowModal(true)} style={{ background: '#4f46e5', color: '#fff', padding: '.75rem 1.5rem', borderRadius: 12, fontWeight: 700, border: 'none', cursor: 'pointer' }}>
              Ask a Doubt Now
            </button>
          </div>
        ) : (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            {doubts.map(d => (
              <div key={d._id} style={{ background: '#fff', borderRadius: 16, padding: '1.5rem', boxShadow: '0 4px 16px rgba(0,0,0,0.04)', border: '1px solid #f1f5f9' }}>
                
                {/* Author Info & Badges */}
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '.5rem', marginBottom: '1rem' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '.6rem' }}>
                    <span style={{ fontSize: '1.5rem', background: '#f1f5f9', width: 40, height: 40, borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                      {d.studentAvatar || '👨‍🎓'}
                    </span>
                    <div>
                      <div style={{ fontWeight: 800, fontSize: '.92rem', color: '#1e293b' }}>{d.studentName}</div>
                      <div style={{ fontSize: '.75rem', color: '#94a3b8' }}>
                        {d.classId?.replace('class-', 'Class ') || 'Class 12'} • {new Date(d.createdAt).toLocaleDateString()}
                      </div>
                    </div>
                  </div>

                  <div style={{ display: 'flex', gap: '.4rem', alignItems: 'center' }}>
                    <span style={{ background: '#eef2ff', color: '#4f46e5', fontSize: '.75rem', fontWeight: 700, padding: '.25rem .65rem', borderRadius: 20 }}>
                      📚 {d.subject}
                    </span>
                    {d.taggedTeacher && (
                      <span style={{ background: '#fef3c7', color: '#b45309', fontSize: '.75rem', fontWeight: 800, padding: '.25rem .65rem', borderRadius: 20, border: '1px solid #fde68a' }}>
                        🏷️ Tagged: {d.taggedTeacher.name} ({d.taggedTeacher.subject})
                      </span>
                    )}
                  </div>
                </div>

                {/* Title & Description */}
                <h3 style={{ fontSize: '1.15rem', fontWeight: 800, color: '#0f172a', marginBottom: '.6rem', lineHeight: 1.4 }}>
                  {d.title}
                </h3>
                <p style={{ color: '#334155', fontSize: '.93rem', lineHeight: 1.6, marginBottom: '1.25rem', whiteSpace: 'pre-wrap' }}>
                  {d.description}
                </p>

                {/* Actions Bar */}
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderTop: '1px solid #f1f5f9', paddingTop: '1rem' }}>
                  <button
                    onClick={() => handleUpvoteDoubt(d._id)}
                    style={{
                      background: '#f8fafc',
                      border: '1.5px solid #cbd5e1',
                      borderRadius: 10,
                      padding: '.4rem .85rem',
                      fontWeight: 700,
                      fontSize: '.82rem',
                      color: '#475569',
                      cursor: 'pointer',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '.4rem'
                    }}
                  >
                    <span>👍 Upvote</span>
                    <span style={{ background: '#e2e8f0', padding: '.1rem .4rem', borderRadius: 6, fontSize: '.75rem', color: '#0f172a' }}>
                      {d.upvotes || 0}
                    </span>
                  </button>

                  <button
                    onClick={() => setActiveAnswerBox(activeAnswerBox === d._id ? null : d._id)}
                    style={{ background: '#eef2ff', color: '#4f46e5', border: 'none', padding: '.45rem 1rem', borderRadius: 10, fontWeight: 700, fontSize: '.82rem', cursor: 'pointer' }}
                  >
                    💬 {d.answers?.length || 0} Solutions / Answers
                  </button>
                </div>

                {/* ── Answers & Solutions List ── */}
                {d.answers && d.answers.length > 0 && (
                  <div style={{ marginTop: '1.25rem', display: 'flex', flexDirection: 'column', gap: '.85rem' }}>
                    {d.answers.map((ans, idx) => (
                      <div
                        key={ans._id || idx}
                        style={{
                          background: ans.authorRole === 'educator' ? '#fffbeb' : '#f8fafc',
                          border: ans.authorRole === 'educator' ? '1.5px solid #fde68a' : '1px solid #e2e8f0',
                          borderRadius: 12,
                          padding: '1rem',
                          position: 'relative'
                        }}
                      >
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '.5rem' }}>
                          <div style={{ display: 'flex', alignItems: 'center', gap: '.5rem' }}>
                            <span style={{ fontSize: '1.25rem' }}>{ans.authorAvatar || '👨‍🏫'}</span>
                            <span style={{ fontWeight: 800, fontSize: '.88rem', color: '#0f172a' }}>{ans.authorName}</span>
                            {ans.authorRole === 'educator' && (
                              <span style={{ background: '#d97706', color: '#fff', fontSize: '.68rem', fontWeight: 800, padding: '.15rem .45rem', borderRadius: 6 }}>
                                🎓 Verified Educator Solution
                              </span>
                            )}
                          </div>
                        </div>

                        <p style={{ fontSize: '.9rem', color: '#1e293b', lineHeight: 1.5, whiteSpace: 'pre-wrap' }}>
                          {ans.answerText}
                        </p>
                      </div>
                    ))}
                  </div>
                )}

                {/* ── Add Solution Drawer ── */}
                {activeAnswerBox === d._id && (
                  <div style={{ marginTop: '1rem', background: '#f8fafc', borderRadius: 12, padding: '1rem', border: '1px solid #e2e8f0' }}>
                    <textarea
                      rows={3}
                      placeholder="Write your step-by-step answer or solution here..."
                      value={answerInputText}
                      onChange={e => setAnswerInputText(e.target.value)}
                      style={{
                        width: '100%',
                        borderRadius: 8,
                        border: '1.5px solid #cbd5e1',
                        padding: '.65rem',
                        fontSize: '.88rem',
                        outline: 'none',
                        boxSizing: 'border-box',
                        resize: 'none',
                        fontFamily: 'inherit'
                      }}
                    />
                    <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '.5rem', marginTop: '.6rem' }}>
                      <button
                        onClick={() => setActiveAnswerBox(null)}
                        style={{ padding: '.4rem .85rem', background: '#e2e8f0', color: '#475569', border: 'none', borderRadius: 8, fontWeight: 700, fontSize: '.8rem', cursor: 'pointer' }}
                      >
                        Cancel
                      </button>
                      <button
                        onClick={() => handleAddAnswer(d._id)}
                        style={{ padding: '.4rem 1rem', background: '#4f46e5', color: '#fff', border: 'none', borderRadius: 8, fontWeight: 700, fontSize: '.8rem', cursor: 'pointer' }}
                      >
                        Post Answer
                      </button>
                    </div>
                  </div>
                )}

              </div>
            ))}
          </div>
        )}

      </div>

      {/* ── Ask a Doubt Modal ── */}
      {showModal && (
        <div style={{
          position: 'fixed', inset: 0, zIndex: 99999,
          background: 'rgba(0,0,0,0.5)',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          padding: '1rem'
        }}>
          <div style={{
            background: '#fff',
            borderRadius: 20,
            maxWidth: 580,
            width: '100%',
            padding: '2rem',
            boxShadow: '0 20px 50px rgba(0,0,0,0.2)',
            maxHeight: '90vh',
            overflowY: 'auto'
          }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem' }}>
              <h2 style={{ fontSize: '1.35rem', fontWeight: 800, color: '#0f172a' }}>
                ❓ Post a New Doubt
              </h2>
              <button onClick={() => setShowModal(false)} style={{ background: 'none', border: 'none', fontSize: '1.25rem', cursor: 'pointer', color: '#64748b' }}>
                ✕
              </button>
            </div>

            <form onSubmit={handleCreateDoubt} style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
              <div>
                <label style={{ display: 'block', fontSize: '.82rem', fontWeight: 700, color: '#475569', marginBottom: '.35rem' }}>
                  Your Name
                </label>
                <input
                  type="text"
                  value={studentName}
                  onChange={e => setStudentName(e.target.value)}
                  placeholder="Enter your name"
                  required
                  style={{ width: '100%', padding: '.65rem .85rem', borderRadius: 10, border: '1.5px solid #cbd5e1', outline: 'none', fontSize: '.9rem', boxSizing: 'border-box' }}
                />
              </div>

              <div>
                <label style={{ display: 'block', fontSize: '.82rem', fontWeight: 700, color: '#475569', marginBottom: '.35rem' }}>
                  Question Title / Problem Statement
                </label>
                <input
                  type="text"
                  value={newTitle}
                  onChange={e => setNewTitle(e.target.value)}
                  placeholder="e.g. How to solve |z^2 + 3z + 4| = 15?"
                  required
                  style={{ width: '100%', padding: '.65rem .85rem', borderRadius: 10, border: '1.5px solid #cbd5e1', outline: 'none', fontSize: '.9rem', boxSizing: 'border-box' }}
                />
              </div>

              <div style={{ display: 'flex', gap: '1rem' }}>
                <div style={{ flex: 1 }}>
                  <label style={{ display: 'block', fontSize: '.82rem', fontWeight: 700, color: '#475569', marginBottom: '.35rem' }}>
                    Subject
                  </label>
                  <select
                    value={newSubject}
                    onChange={e => setNewSubject(e.target.value)}
                    style={{ width: '100%', padding: '.65rem .85rem', borderRadius: 10, border: '1.5px solid #cbd5e1', outline: 'none', fontSize: '.9rem', boxSizing: 'border-box' }}
                  >
                    <option value="Physics">Physics</option>
                    <option value="Chemistry">Chemistry</option>
                    <option value="Mathematics">Mathematics</option>
                    <option value="Biology">Biology</option>
                    <option value="Computer Studies">Computer Studies</option>
                  </select>
                </div>

                <div style={{ flex: 1 }}>
                  <label style={{ display: 'block', fontSize: '.82rem', fontWeight: 700, color: '#475569', marginBottom: '.35rem' }}>
                    Class
                  </label>
                  <select
                    value={newClassId}
                    onChange={e => setNewClassId(e.target.value)}
                    style={{ width: '100%', padding: '.65rem .85rem', borderRadius: 10, border: '1.5px solid #cbd5e1', outline: 'none', fontSize: '.9rem', boxSizing: 'border-box' }}
                  >
                    <option value="class-12">Class 12</option>
                    <option value="class-11">Class 11</option>
                    <option value="class-10">Class 10</option>
                    <option value="class-9">Class 9</option>
                    <option value="class-8">Class 8</option>
                    <option value="class-7">Class 7</option>
                    <option value="class-6">Class 6</option>
                  </select>
                </div>
              </div>

              <div>
                <label style={{ display: 'block', fontSize: '.82rem', fontWeight: 700, color: '#475569', marginBottom: '.35rem' }}>
                  Tag a Master Educator (Optional for Priority Help)
                </label>
                <select
                  value={newTaggedTeacher}
                  onChange={e => setNewTaggedTeacher(e.target.value)}
                  style={{ width: '100%', padding: '.65rem .85rem', borderRadius: 10, border: '1.5px solid #cbd5e1', outline: 'none', fontSize: '.9rem', boxSizing: 'border-box', background: '#fffbeb' }}
                >
                  <option value="">-- Select Educator --</option>
                  {TEACHERS.map(t => (
                    <option key={t.id} value={t.name}>
                      ⭐ {t.name} ({t.subject})
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label style={{ display: 'block', fontSize: '.82rem', fontWeight: 700, color: '#475569', marginBottom: '.35rem' }}>
                  Detailed Description & Equation Steps
                </label>
                <textarea
                  rows={4}
                  value={newDesc}
                  onChange={e => setNewDesc(e.target.value)}
                  placeholder="Explain what you have tried so far or paste the specific step where you get stuck..."
                  required
                  style={{ width: '100%', padding: '.65rem .85rem', borderRadius: 10, border: '1.5px solid #cbd5e1', outline: 'none', fontSize: '.9rem', boxSizing: 'border-box', resize: 'none', fontFamily: 'inherit' }}
                />
              </div>

              <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '.75rem', marginTop: '.5rem' }}>
                <button
                  type="button"
                  onClick={() => setShowModal(false)}
                  style={{ padding: '.65rem 1.25rem', borderRadius: 10, background: '#f1f5f9', color: '#475569', border: 'none', fontWeight: 700, cursor: 'pointer' }}
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  disabled={submitting}
                  style={{ padding: '.65rem 1.5rem', borderRadius: 10, background: '#4f46e5', color: '#fff', border: 'none', fontWeight: 800, cursor: 'pointer' }}
                >
                  {submitting ? 'Posting...' : 'Post Doubt'}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

    </div>
  );
}

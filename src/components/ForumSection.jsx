import React, { useState, useEffect } from 'react';
import { api } from '../utils/api';

function timeAgo(date) {
  const s = Math.floor((Date.now() - new Date(date)) / 1000);
  if (s < 60) return 'just now';
  if (s < 3600) return `${Math.floor(s / 60)}m ago`;
  if (s < 86400) return `${Math.floor(s / 3600)}h ago`;
  return `${Math.floor(s / 86400)}d ago`;
}

function AnswerItem({ answer, postId, user, onUpvote }) {
  const voted = user && answer.upvotedBy?.includes(user.email);
  return (
    <div className={`forum-answer ${answer.isTeacher ? 'teacher-answer' : ''}`}>
      <div className="forum-answer-meta">
        <span className="forum-avatar">{answer.isTeacher ? '👨‍🏫' : '🧑‍🎓'}</span>
        <span className="forum-author">{answer.authorName}</span>
        {answer.isTeacher && <span className="forum-teacher-badge">Teacher</span>}
        <span className="forum-time">{timeAgo(answer.createdAt)}</span>
      </div>
      <p className="forum-answer-text">{answer.text}</p>
      <button
        className={`forum-upvote-btn ${voted ? 'voted' : ''}`}
        onClick={() => user && onUpvote(postId, answer._id)}
        disabled={!user}
      >
        ▲ {answer.upvotes || 0}
      </button>
    </div>
  );
}

function ForumPost({ post, user, onUpvotePost, onUpvoteAnswer, onAnswer }) {
  const [showAnswers, setShowAnswers] = useState(false);
  const [answerText, setAnswerText] = useState('');
  const [submitting, setSubmitting] = useState(false);
  const voted = user && post.upvotedBy?.includes(user.email);

  async function submitAnswer() {
    if (!answerText.trim() || submitting) return;
    setSubmitting(true);
    try {
      await onAnswer(post._id, answerText.trim());
      setAnswerText('');
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <div className="forum-post-card">
      <div className="forum-post-header">
        <div className="forum-post-meta">
          <span className="forum-avatar">🧑‍🎓</span>
          <span className="forum-author">{post.authorName}</span>
          <span className="forum-time">{timeAgo(post.createdAt)}</span>
        </div>
        <button
          className={`forum-upvote-btn ${voted ? 'voted' : ''}`}
          onClick={() => user && onUpvotePost(post._id)}
          disabled={!user}
          title={!user ? 'Login to upvote' : ''}
        >
          ▲ {post.upvotes || 0}
        </button>
      </div>

      <p className="forum-question">{post.question}</p>

      <div className="forum-post-footer">
        <button className="forum-toggle-btn" onClick={() => setShowAnswers(s => !s)}>
          💬 {post.answers?.length || 0} answer{post.answers?.length !== 1 ? 's' : ''}
          {showAnswers ? ' ▲' : ' ▼'}
        </button>
      </div>

      {showAnswers && (
        <div className="forum-answers-section">
          {post.answers?.length > 0 ? (
            post.answers
              .slice()
              .sort((a, b) => (b.isTeacher ? 1 : 0) - (a.isTeacher ? 1 : 0) || b.upvotes - a.upvotes)
              .map(ans => (
                <AnswerItem key={ans._id} answer={ans} postId={post._id} user={user} onUpvote={onUpvoteAnswer} />
              ))
          ) : (
            <p className="forum-no-answers">No answers yet — be the first to help!</p>
          )}

          {user ? (
            <div className="forum-answer-input">
              <textarea
                className="forum-textarea"
                placeholder="Write your answer…"
                value={answerText}
                onChange={e => setAnswerText(e.target.value)}
                rows={3}
              />
              <button className="forum-submit-btn" onClick={submitAnswer} disabled={submitting || !answerText.trim()}>
                {submitting ? 'Posting…' : 'Post Answer'}
              </button>
            </div>
          ) : (
            <p className="forum-login-note">Login to post an answer.</p>
          )}
        </div>
      )}
    </div>
  );
}

export default function ForumSection({ classId, subjectId, topicId, user, onOpenLogin }) {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [question, setQuestion] = useState('');
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    setLoading(true);
    api(`/forum/${classId}/${subjectId}/${topicId}`)
      .then(data => setPosts(Array.isArray(data) ? data : []))
      .catch(() => setPosts([]))
      .finally(() => setLoading(false));
  }, [classId, subjectId, topicId]);

  async function submitQuestion() {
    if (!question.trim() || submitting) return;
    setError('');
    setSubmitting(true);
    try {
      const post = await api('/forum', { method: 'POST', body: { classId, subjectId, topicId, question: question.trim() } });
      setPosts(p => [post, ...p]);
      setQuestion('');
    } catch (e) {
      setError(e.message || 'Failed to post question');
    } finally {
      setSubmitting(false);
    }
  }

  async function upvotePost(postId) {
    try {
      const { upvotes, upvotedBy } = await api(`/forum/${postId}/upvote`, { method: 'PATCH' });
      setPosts(ps => ps.map(p => p._id === postId ? { ...p, upvotes, upvotedBy } : p));
    } catch {}
  }

  async function upvoteAnswer(postId, answerId) {
    try {
      const { upvotes } = await api(`/forum/${postId}/answers/${answerId}/upvote`, { method: 'PATCH' });
      setPosts(ps => ps.map(p => p._id === postId
        ? { ...p, answers: p.answers.map(a => a._id === answerId ? { ...a, upvotes } : a) }
        : p));
    } catch {}
  }

  async function postAnswer(postId, text) {
    const updated = await api(`/forum/${postId}/answers`, { method: 'POST', body: { text } });
    setPosts(ps => ps.map(p => p._id === postId ? updated : p));
  }

  return (
    <section className="forum-section">
      <div className="forum-header">
        <h2 className="topic-section-title" style={{ marginBottom: 0 }}>💬 Community Q&amp;A</h2>
        <p className="forum-subtitle">Ask doubts, answer others, learn together</p>
      </div>

      {/* Ask a question */}
      {user ? (
        <div className="forum-ask-box">
          <textarea
            className="forum-textarea"
            placeholder="Ask your doubt or question about this topic…"
            value={question}
            onChange={e => setQuestion(e.target.value)}
            rows={3}
          />
          {error && <p style={{ color: '#dc2626', fontSize: '.82rem', margin: '.25rem 0 0' }}>{error}</p>}
          <div style={{ display: 'flex', justifyContent: 'flex-end', marginTop: '.5rem' }}>
            <button className="forum-submit-btn" onClick={submitQuestion} disabled={submitting || !question.trim()}>
              {submitting ? 'Posting…' : '🙋 Post Question'}
            </button>
          </div>
        </div>
      ) : (
        <div className="forum-gate">
          <span>🔒 <strong>Login</strong> to ask a question or answer others.</span>
          <button className="forum-login-btn" onClick={onOpenLogin}>Login / Sign Up</button>
        </div>
      )}

      {/* Posts */}
      {loading ? (
        <div style={{ textAlign: 'center', padding: '2rem', color: '#9ca3af', fontSize: '.9rem' }}>Loading discussions…</div>
      ) : posts.length === 0 ? (
        <div className="forum-empty">
          <div style={{ fontSize: '2.5rem', marginBottom: '.5rem' }}>🌱</div>
          <div>No questions yet — be the first to ask!</div>
        </div>
      ) : (
        <div className="forum-posts-list">
          {posts.map(post => (
            <ForumPost
              key={post._id}
              post={post}
              user={user}
              onUpvotePost={upvotePost}
              onUpvoteAnswer={upvoteAnswer}
              onAnswer={postAnswer}
            />
          ))}
        </div>
      )}
    </section>
  );
}

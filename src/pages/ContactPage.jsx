import React, { useState } from 'react';
import SEO from '../components/SEO';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    type: 'Feedback', // 'Feedback' | 'Complaint' | 'General'
    subject: '',
    priority: 'Normal', // 'Normal' | 'Urgent' | 'Critical'
    message: '',
  });

  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  async function handleSubmit(e) {
    e.preventDefault();
    setErrorMsg('');
    if (!formData.name.trim() || !formData.subject.trim() || !formData.message.trim()) {
      setErrorMsg('Please fill in all required fields (Name, Subject, Message).');
      return;
    }

    setSubmitting(true);
    try {
      const res = await fetch('/api/contact/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const data = await res.json();
      if (!res.ok) {
        throw new Error(data.error || 'Failed to submit message');
      }

      setSubmitted(true);
      setFormData({ name: '', email: '', type: 'Feedback', subject: '', priority: 'Normal', message: '' });
    } catch (err) {
      setErrorMsg(err.message || 'Something went wrong. Please try again.');
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <div style={{ background: 'linear-gradient(180deg, #0b0f19 0%, #1e1b4b 100%)', color: '#fff', minHeight: '100vh', padding: '3rem 0' }}>
      <SEO title="Contact Us & Feedback Portal — OnlineStudyHub" description="Send feedback or register complaints directly to the OnlineStudyHub support team." />

      <div className="container" style={{ maxWidth: 860, margin: '0 auto' }}>
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
          <span style={{ background: 'rgba(99,102,241,0.2)', border: '1px solid rgba(165,180,252,0.3)', color: '#a5b4fc', fontSize: '.8rem', fontWeight: 900, padding: '.4rem 1.1rem', borderRadius: 20, textTransform: 'uppercase', letterSpacing: '0.5px' }}>
            💬 Support &amp; Feedback Portal
          </span>
          <h1 style={{ fontFamily: 'Nunito', fontWeight: 900, fontSize: 'clamp(2rem, 4vw, 2.75rem)', margin: '.75rem 0 .5rem', color: '#fff' }}>
            Contact Support &amp; Submit Feedback
          </h1>
          <p style={{ fontSize: '1rem', color: 'rgba(255,255,255,0.75)', maxWidth: 580, margin: '0 auto' }}>
            Have a question, feedback, or complaint? Fill out the form below to reach our dedicated support desk directly.
          </p>
        </div>

        {/* Form Card */}
        <div style={{ background: 'rgba(255,255,255,0.06)', backdropFilter: 'blur(16px)', border: '1.5px solid rgba(255,255,255,0.18)', borderRadius: 24, padding: '2.25rem', boxShadow: '0 20px 50px rgba(0,0,0,0.4)' }}>
          {submitted ? (
            <div style={{ textAlign: 'center', padding: '2rem 1rem' }}>
              <div style={{ fontSize: '3.5rem', marginBottom: '1rem' }}>🎉</div>
              <h2 style={{ fontFamily: 'Nunito', fontWeight: 900, color: '#4ade80', margin: '0 0 .5rem' }}>
                Submission Received Successfully!
              </h2>
              <p style={{ fontSize: '.95rem', color: 'rgba(255,255,255,0.8)', maxWidth: 480, margin: '0 auto 1.75rem' }}>
                Thank you for reaching out! Your message has been routed to our support administrators and will be reviewed promptly.
              </p>
              <button
                onClick={() => setSubmitted(false)}
                className="btn btn-primary"
                style={{ padding: '.7rem 1.75rem', borderRadius: 12, fontWeight: 900 }}
              >
                ✏️ Submit Another Message
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
              {errorMsg && (
                <div style={{ background: 'rgba(239,68,68,0.2)', border: '1px solid rgba(248,113,113,0.4)', color: '#fca5a5', padding: '.75rem 1rem', borderRadius: 12, fontSize: '.88rem', fontWeight: 800 }}>
                  ⚠️ {errorMsg}
                </div>
              )}

              {/* Type Switcher (Feedback / Complaint / General) */}
              <div>
                <label style={{ fontSize: '.82rem', fontWeight: 900, color: '#c7d2fe', textTransform: 'uppercase', marginBottom: '.5rem', display: 'block' }}>
                  Submission Category *
                </label>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '.6rem' }}>
                  {[
                    { id: 'Feedback', label: '🌟 Feedback / Suggestion', color: '#10b981' },
                    { id: 'Complaint', label: '⚠️ Issue / Complaint', color: '#ef4444' },
                    { id: 'General', label: '💬 General Query', color: '#6366f1' },
                  ].map(cat => (
                    <button
                      key={cat.id}
                      type="button"
                      onClick={() => setFormData({ ...formData, type: cat.id })}
                      style={{
                        background: formData.type === cat.id ? `rgba(${cat.id === 'Feedback' ? '16,185,129' : cat.id === 'Complaint' ? '239,68,68' : '99,102,241'}, 0.25)` : 'rgba(0,0,0,0.3)',
                        border: formData.type === cat.id ? `1.5px solid ${cat.color}` : '1px solid rgba(255,255,255,0.15)',
                        color: '#fff',
                        borderRadius: 14,
                        padding: '.7rem .5rem',
                        fontSize: '.82rem',
                        fontWeight: 900,
                        cursor: 'pointer',
                        textAlign: 'center',
                        transition: 'all 0.2s',
                      }}
                    >
                      {cat.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Name & Email */}
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '1rem' }}>
                <div>
                  <label style={{ fontSize: '.82rem', fontWeight: 900, color: '#c7d2fe', textTransform: 'uppercase', marginBottom: '.4rem', display: 'block' }}>
                    Your Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={e => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Enter your full name..."
                    style={{ width: '100%', borderRadius: 12, border: '1px solid rgba(255,255,255,0.2)', background: 'rgba(0,0,0,0.4)', color: '#fff', padding: '.7rem 1rem', fontFamily: 'Nunito', fontSize: '.9rem', outline: 'none' }}
                  />
                </div>

                <div>
                  <label style={{ fontSize: '.82rem', fontWeight: 900, color: '#c7d2fe', textTransform: 'uppercase', marginBottom: '.4rem', display: 'block' }}>
                    Your Contact Email (Optional)
                  </label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={e => setFormData({ ...formData, email: e.target.value })}
                    placeholder="name@example.com..."
                    style={{ width: '100%', borderRadius: 12, border: '1px solid rgba(255,255,255,0.2)', background: 'rgba(0,0,0,0.4)', color: '#fff', padding: '.7rem 1rem', fontFamily: 'Nunito', fontSize: '.9rem', outline: 'none' }}
                  />
                </div>
              </div>

              {/* Subject & Priority */}
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '1rem' }}>
                <div style={{ flex: 2 }}>
                  <label style={{ fontSize: '.82rem', fontWeight: 900, color: '#c7d2fe', textTransform: 'uppercase', marginBottom: '.4rem', display: 'block' }}>
                    Subject *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.subject}
                    onChange={e => setFormData({ ...formData, subject: e.target.value })}
                    placeholder="Brief summary of your query or issue..."
                    style={{ width: '100%', borderRadius: 12, border: '1px solid rgba(255,255,255,0.2)', background: 'rgba(0,0,0,0.4)', color: '#fff', padding: '.7rem 1rem', fontFamily: 'Nunito', fontSize: '.9rem', outline: 'none' }}
                  />
                </div>

                <div>
                  <label style={{ fontSize: '.82rem', fontWeight: 900, color: '#c7d2fe', textTransform: 'uppercase', marginBottom: '.4rem', display: 'block' }}>
                    Priority Level
                  </label>
                  <select
                    value={formData.priority}
                    onChange={e => setFormData({ ...formData, priority: e.target.value })}
                    style={{ width: '100%', borderRadius: 12, border: '1px solid rgba(255,255,255,0.2)', background: 'rgba(0,0,0,0.4)', color: '#fff', padding: '.7rem 1rem', fontFamily: 'Nunito', fontSize: '.9rem', outline: 'none' }}
                  >
                    <option value="Normal">🟢 Normal</option>
                    <option value="Urgent">🟡 Urgent</option>
                    <option value="Critical">🔴 Critical</option>
                  </select>
                </div>
              </div>

              {/* Message */}
              <div>
                <label style={{ fontSize: '.82rem', fontWeight: 900, color: '#c7d2fe', textTransform: 'uppercase', marginBottom: '.4rem', display: 'block' }}>
                  Detailed Message / Description *
                </label>
                <textarea
                  required
                  rows={5}
                  value={formData.message}
                  onChange={e => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Provide complete details about your feedback or complaint so our team can assist you..."
                  style={{ width: '100%', borderRadius: 14, border: '1px solid rgba(255,255,255,0.2)', background: 'rgba(0,0,0,0.4)', color: '#fff', padding: '.85rem 1rem', fontFamily: 'Nunito', fontSize: '.9rem', outline: 'none', resize: 'vertical' }}
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={submitting}
                className="btn btn-primary"
                style={{ padding: '.85rem 2rem', borderRadius: 14, fontWeight: 900, fontSize: '1rem', background: 'linear-gradient(135deg, #6366f1, #4f46e5)', border: 'none', boxShadow: '0 8px 24px rgba(99,102,241,0.4)', cursor: submitting ? 'wait' : 'pointer' }}
              >
                {submitting ? '⏳ Submitting...' : '🚀 Submit Message'}
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}

import React, { useState, useEffect } from 'react';
import ContentManager from './ContentManager';

// ─── Constants ───────────────────────────────────────────────────
const SUBJECTS = [
  'Mathematics', 'Physics', 'Chemistry', 'Biology',
  'English', 'Science', 'Social Science', 'History',
  'Geography', 'Civics', 'Economics',
];

const CLASS_OPTIONS = [
  { id: 'class-6', label: 'Class 6' },
  { id: 'class-7', label: 'Class 7' },
  { id: 'class-8', label: 'Class 8' },
  { id: 'class-9', label: 'Class 9' },
  { id: 'class-10', label: 'Class 10' },
  { id: 'class-11', label: 'Class 11' },
  { id: 'class-12', label: 'Class 12' },
  { id: 'jee', label: 'JEE' },
  { id: 'neet', label: 'NEET' },
];

const AVATARS = ['👨‍🏫', '👩‍🏫', '🧑‍🏫', '👨‍💼', '👩‍💼', '🧑‍💻', '👨‍🔬', '👩‍🔬'];

const EMPTY_FORM = {
  name: '', email: '', password: '', avatar: '👨‍🏫',
  profile_pic: '',          // base64 data URL of uploaded photo
  subject: '', class_ids: [], experience: '', qualification: '',
  fee: '', bio: '', topics: '', contact: '', available: true,
};

const MAX_IMAGE_SIZE = 2 * 1024 * 1024; // 2 MB

// Resize an image file to max 400×400 and return base64 data URL
function resizeImage(file, maxSize = 400) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = (e) => {
      const img = new Image();
      img.onload = () => {
        const canvas = document.createElement('canvas');
        let w = img.width, h = img.height;
        if (w > h) { if (w > maxSize) { h = Math.round(h * maxSize / w); w = maxSize; } }
        else        { if (h > maxSize) { w = Math.round(w * maxSize / h); h = maxSize; } }
        canvas.width = w; canvas.height = h;
        const ctx = canvas.getContext('2d');
        ctx.drawImage(img, 0, 0, w, h);
        resolve(canvas.toDataURL('image/jpeg', 0.85));
      };
      img.onerror = reject;
      img.src = e.target.result;
    };
    reader.onerror = reject;
    reader.readAsDataURL(file);
  });
}

// ─── API helpers ─────────────────────────────────────────────────
async function apiCall(path, method = 'GET', body = null, token = null) {
  const headers = { 'Content-Type': 'application/json' };
  if (token) headers['Authorization'] = `Bearer ${token}`;
  
  const res = await fetch(`/api${path}`, {
    method,
    headers,
    body: body ? JSON.stringify(body) : null,
  });

  const contentType = res.headers.get('content-type') || '';
  if (contentType.includes('application/json')) {
    const data = await res.json();
    if (!res.ok) {
      throw new Error(data.message || data.error || `Request failed with status ${res.status}`);
    }
    return data;
  } else {
    const text = await res.text();
    throw new Error(`Server returned a non-JSON error (${res.status}): ${text.substring(0, 100)}...`);
  }
}

// ─── Components ──────────────────────────────────────────────────

function FieldGroup({ label, required, children, hint }) {
  return (
    <div style={{ marginBottom: '1.25rem' }}>
      <label style={{ display: 'block', fontWeight: 700, fontSize: '.85rem', color: '#374151', marginBottom: '.4rem' }}>
        {label} {required && <span style={{ color: '#ef4444' }}>*</span>}
      </label>
      {children}
      {hint && <p style={{ fontSize: '.75rem', color: '#9ca3af', marginTop: '.3rem' }}>{hint}</p>}
    </div>
  );
}

const inputStyle = {
  width: '100%', padding: '.6rem .9rem',
  border: '1.5px solid #e5e7eb', borderRadius: 10,
  fontSize: '.9rem', fontFamily: 'Inter, sans-serif',
  outline: 'none', transition: 'border-color .15s',
  boxSizing: 'border-box',
};

function Input({ style, ...props }) {
  const [focused, setFocused] = useState(false);
  return (
    <input
      style={{ ...inputStyle, borderColor: focused ? '#4f46e5' : '#e5e7eb', ...style }}
      onFocus={() => setFocused(true)}
      onBlur={() => setFocused(false)}
      {...props}
    />
  );
}

function Textarea({ style, ...props }) {
  const [focused, setFocused] = useState(false);
  return (
    <textarea
      style={{
        ...inputStyle, resize: 'vertical', minHeight: 90,
        borderColor: focused ? '#4f46e5' : '#e5e7eb', ...style,
      }}
      onFocus={() => setFocused(true)}
      onBlur={() => setFocused(false)}
      {...props}
    />
  );
}

function Alert({ type, message }) {
  if (!message) return null;
  const colors = {
    error: { bg: '#fef2f2', border: '#fecaca', text: '#dc2626' },
    success: { bg: '#f0fdf4', border: '#bbf7d0', text: '#16a34a' },
    info: { bg: '#eff6ff', border: '#bfdbfe', text: '#2563eb' },
  };
  const c = colors[type] || colors.info;
  return (
    <div style={{ background: c.bg, border: `1px solid ${c.border}`, borderRadius: 10, padding: '.75rem 1rem', fontSize: '.87rem', color: c.text, marginBottom: '1rem' }}>
      {message}
    </div>
  );
}

// ─── Profile Preview Card ─────────────────────────────────────────
function ProfilePreview({ profile }) {
  return (
    <div style={{ background: '#f9fafb', border: '1px solid #e5e7eb', borderRadius: 16, padding: '1.5rem' }}>
      <div style={{ fontFamily: 'Nunito', fontWeight: 800, fontSize: '.85rem', color: '#9ca3af', textTransform: 'uppercase', letterSpacing: '.06em', marginBottom: '1rem' }}>
        👁 How students see your profile
      </div>
      <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1rem' }}>
        <div style={{ width: 60, height: 60, borderRadius: '50%', background: '#eef2ff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '2rem', overflow: 'hidden', flexShrink: 0, border: '2px solid #c7d2fe' }}>
          {profile.profile_pic
            ? <img src={profile.profile_pic} alt={profile.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            : (profile.avatar || '👨‍🏫')
          }
        </div>
        <div>
          <div style={{ fontFamily: 'Nunito', fontWeight: 800, fontSize: '1.1rem', color: '#1e1b4b' }}>{profile.name || 'Your Name'}</div>
          <div style={{ fontSize: '.85rem', color: '#4f46e5', fontWeight: 600 }}>{profile.subject || 'Subject'}</div>
          <div style={{ fontSize: '.78rem', color: '#9ca3af' }}>{profile.qualification || 'Qualification'}</div>
        </div>
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '.75rem', marginBottom: '1rem' }}>
        <div style={{ background: '#fff', border: '1px solid #e5e7eb', borderRadius: 10, padding: '.75rem', textAlign: 'center' }}>
          <div style={{ fontFamily: 'Nunito', fontWeight: 800, fontSize: '1.1rem', color: '#1e1b4b' }}>{profile.experience || '—'}</div>
          <div style={{ fontSize: '.72rem', color: '#9ca3af' }}>Years Exp.</div>
        </div>
        <div style={{ background: '#fff', border: '1px solid #e5e7eb', borderRadius: 10, padding: '.75rem', textAlign: 'center' }}>
          <div style={{ fontFamily: 'Nunito', fontWeight: 800, fontSize: '1.1rem', color: '#1e1b4b' }}>₹{profile.fee || '—'}</div>
          <div style={{ fontSize: '.72rem', color: '#9ca3af' }}>Per Session</div>
        </div>
      </div>
      {profile.bio && (
        <p style={{ fontSize: '.83rem', color: '#6b7280', lineHeight: 1.6, marginBottom: '.75rem' }}>
          {profile.bio.slice(0, 140)}{profile.bio.length > 140 ? '…' : ''}
        </p>
      )}
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '.35rem' }}>
        {(profile.class_ids || []).map(c => (
          <span key={c} style={{ background: '#eef2ff', color: '#4f46e5', fontSize: '.72rem', fontWeight: 700, padding: '.2rem .6rem', borderRadius: 999 }}>
            {CLASS_OPTIONS.find(o => o.id === c)?.label || c}
          </span>
        ))}
      </div>
    </div>
  );
}

// ─── Teacher Form (shared between register + edit) ────────────────
function TeacherForm({ initial = EMPTY_FORM, showEmail = true, showPassword = false, onSubmit, loading, submitLabel, error, success }) {
  const [form, setForm] = useState(initial);

  useEffect(() => { setForm(initial); }, [JSON.stringify(initial)]); // eslint-disable-line

  function set(key, val) { setForm(f => ({ ...f, [key]: val })); }

  function toggleClass(id) {
    set('class_ids', form.class_ids.includes(id)
      ? form.class_ids.filter(c => c !== id)
      : [...form.class_ids, id]
    );
  }

  function handleSubmit(e) {
    e.preventDefault();
    onSubmit(form);
  }

  const [picError, setPicError] = useState('');
  const fileInputRef = React.useRef();

  async function handleImageChange(e) {
    const file = e.target.files?.[0];
    if (!file) return;
    setPicError('');
    if (!file.type.startsWith('image/')) { setPicError('Please upload an image file (JPG, PNG, etc.)'); return; }
    if (file.size > MAX_IMAGE_SIZE) { setPicError('Image must be under 2 MB'); return; }
    try {
      const dataUrl = await resizeImage(file);
      set('profile_pic', dataUrl);
    } catch {
      setPicError('Could not process the image. Try another file.');
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <Alert type="error" message={error} />
      <Alert type="success" message={success} />

      {/* Profile picture upload */}
      <FieldGroup label="Profile Photo">
        <div style={{ display: 'flex', alignItems: 'center', gap: '1.25rem', flexWrap: 'wrap' }}>
          {/* Preview circle */}
          <div style={{
            width: 80, height: 80, borderRadius: '50%', flexShrink: 0,
            background: '#eef2ff', border: '2.5px solid #c7d2fe',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            overflow: 'hidden', fontSize: '2.2rem',
          }}>
            {form.profile_pic
              ? <img src={form.profile_pic} alt="preview" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              : (form.avatar || '👨‍🏫')
            }
          </div>

          <div style={{ flex: 1, minWidth: 200 }}>
            {/* Upload button */}
            <input
              ref={fileInputRef}
              type="file"
              accept="image/*"
              style={{ display: 'none' }}
              onChange={handleImageChange}
            />
            <button
              type="button"
              onClick={() => fileInputRef.current.click()}
              style={{
                display: 'inline-flex', alignItems: 'center', gap: '.5rem',
                padding: '.5rem 1.1rem', borderRadius: 10, cursor: 'pointer',
                border: '1.5px solid #4f46e5', background: '#eef2ff',
                color: '#4f46e5', fontWeight: 700, fontSize: '.85rem',
                transition: 'all .15s', fontFamily: 'inherit',
              }}
            >
              📷 {form.profile_pic ? 'Change Photo' : 'Upload Photo'}
            </button>

            {form.profile_pic && (
              <button
                type="button"
                onClick={() => { set('profile_pic', ''); if (fileInputRef.current) fileInputRef.current.value = ''; }}
                style={{ marginLeft: '.6rem', padding: '.5rem .9rem', borderRadius: 10, border: '1.5px solid #fecaca', background: '#fef2f2', color: '#dc2626', fontWeight: 700, fontSize: '.82rem', cursor: 'pointer', fontFamily: 'inherit' }}
              >
                ✕ Remove
              </button>
            )}

            <p style={{ fontSize: '.75rem', color: '#9ca3af', marginTop: '.4rem' }}>
              JPG, PNG, WEBP · Max 2 MB · Auto-resized to 400×400
            </p>
            {picError && <p style={{ fontSize: '.75rem', color: '#dc2626', marginTop: '.25rem' }}>{picError}</p>}
          </div>
        </div>
      </FieldGroup>

      {/* Emoji fallback (shown only when no photo uploaded) */}
      {!form.profile_pic && (
        <FieldGroup label="Or pick an emoji avatar">
          <div style={{ display: 'flex', gap: '.5rem', flexWrap: 'wrap' }}>
            {AVATARS.map(av => (
              <button
                key={av} type="button"
                onClick={() => set('avatar', av)}
                style={{
                  width: 44, height: 44, fontSize: '1.5rem', borderRadius: 10, cursor: 'pointer',
                  border: form.avatar === av ? '2px solid #4f46e5' : '2px solid #e5e7eb',
                  background: form.avatar === av ? '#eef2ff' : '#fff',
                  transition: 'all .15s',
                }}
              >{av}</button>
            ))}
          </div>
          <p style={{ fontSize: '.75rem', color: '#9ca3af', marginTop: '.35rem' }}>Used when no photo is uploaded</p>
        </FieldGroup>
      )}

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0 1rem' }}>
        <FieldGroup label="Full Name" required>
          <Input value={form.name} onChange={e => set('name', e.target.value)} placeholder="e.g. Anita Sharma" required />
        </FieldGroup>

        {showEmail && (
          <FieldGroup label="Email Address" required>
            <Input type="email" value={form.email} onChange={e => set('email', e.target.value)} placeholder="you@example.com" required />
          </FieldGroup>
        )}

        {showPassword && (
          <FieldGroup label="Password" required>
            <Input type="password" value={form.password} onChange={e => set('password', e.target.value)} placeholder="Min. 6 characters" required />
          </FieldGroup>
        )}

        <FieldGroup label="Subject" required>
          <select
            value={form.subject}
            onChange={e => set('subject', e.target.value)}
            required
            style={{ ...inputStyle, borderColor: '#e5e7eb' }}
          >
            <option value="">Select subject…</option>
            {SUBJECTS.map(s => <option key={s} value={s}>{s}</option>)}
          </select>
        </FieldGroup>

        <FieldGroup label="Qualification" required>
          <Input value={form.qualification} onChange={e => set('qualification', e.target.value)} placeholder="e.g. M.Sc, B.Ed" required />
        </FieldGroup>

        <FieldGroup label="Experience (years)" required>
          <Input type="number" min="0" max="50" value={form.experience} onChange={e => set('experience', e.target.value)} placeholder="e.g. 8" required />
        </FieldGroup>

        <FieldGroup label="Fee per session (₹)" required>
          <Input type="number" min="0" value={form.fee} onChange={e => set('fee', e.target.value)} placeholder="e.g. 600" required />
        </FieldGroup>

        <FieldGroup label="Contact (phone/email)">
          <Input value={form.contact} onChange={e => set('contact', e.target.value)} placeholder="+91 9876543210" />
        </FieldGroup>
      </div>

      <FieldGroup label="Classes You Teach" required>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '.5rem' }}>
          {CLASS_OPTIONS.map(opt => (
            <button
              key={opt.id} type="button"
              onClick={() => toggleClass(opt.id)}
              style={{
                padding: '.35rem .9rem', borderRadius: 99, fontSize: '.82rem', fontWeight: 700,
                cursor: 'pointer', transition: 'all .15s', border: '1.5px solid',
                background: form.class_ids.includes(opt.id) ? '#4f46e5' : '#fff',
                color: form.class_ids.includes(opt.id) ? '#fff' : '#6b7280',
                borderColor: form.class_ids.includes(opt.id) ? '#4f46e5' : '#e5e7eb',
              }}
            >{opt.label}</button>
          ))}
        </div>
      </FieldGroup>

      <FieldGroup label="Topics You Cover" hint="Comma separated, e.g. Algebra, Calculus, Trigonometry">
        <Input value={form.topics} onChange={e => set('topics', e.target.value)} placeholder="Algebra, Calculus, Coordinate Geometry…" />
      </FieldGroup>

      <FieldGroup label="Bio / About You">
        <Textarea value={form.bio} onChange={e => set('bio', e.target.value)} placeholder="Tell students about your teaching style, achievements, and approach…" rows={4} />
      </FieldGroup>

      <FieldGroup label="Availability">
        <div style={{ display: 'flex', gap: '.75rem' }}>
          {[true, false].map(val => (
            <button
              key={String(val)} type="button"
              onClick={() => set('available', val)}
              style={{
                padding: '.4rem 1.25rem', borderRadius: 10, fontSize: '.85rem', fontWeight: 700,
                cursor: 'pointer', transition: 'all .15s', border: '1.5px solid',
                background: form.available === val ? (val ? '#22c55e' : '#ef4444') : '#fff',
                color: form.available === val ? '#fff' : '#6b7280',
                borderColor: form.available === val ? (val ? '#22c55e' : '#ef4444') : '#e5e7eb',
              }}
            >{val ? '✅ Available' : '❌ Not Available'}</button>
          ))}
        </div>
      </FieldGroup>

      <button
        type="submit"
        disabled={loading}
        style={{
          width: '100%', padding: '.8rem', borderRadius: 12,
          background: loading ? '#e5e7eb' : '#4f46e5',
          color: loading ? '#9ca3af' : '#fff',
          fontFamily: 'Nunito', fontWeight: 800, fontSize: '1rem',
          border: 'none', cursor: loading ? 'default' : 'pointer',
          transition: 'background .2s', marginTop: '.5rem',
        }}
      >
        {loading ? '⏳ Please wait…' : submitLabel}
      </button>
    </form>
  );
}

// ─── Dashboard (after login) ──────────────────────────────────────
function Dashboard({ token, onLogout }) {
  const [dashTab, setDashTab] = useState('profile');
  const [profile, setProfile] = useState(null);
  const [editing, setEditing] = useState(false);
  const [loading, setLoading] = useState(false);
  const [fetchError, setFetchError] = useState('');
  const [saveError, setSaveError] = useState('');
  const [saveSuccess, setSaveSuccess] = useState('');

  useEffect(() => {
    apiCall('/teachers/me', 'GET', null, token)
      .then(setProfile)
      .catch(e => setFetchError(e.message));
  }, [token]);

  async function handleSave(form) {
    setLoading(true); setSaveError(''); setSaveSuccess('');
    try {
      const updated = await apiCall('/teachers/me', 'PUT', form, token);
      setProfile(updated);
      setEditing(false);
      setSaveSuccess('Profile updated successfully!');
      setTimeout(() => setSaveSuccess(''), 3000);
    } catch (e) {
      setSaveError(e.message);
    }
    setLoading(false);
  }

  async function handleDelete() {
    if (!window.confirm('Delete your account permanently? This cannot be undone.')) return;
    try {
      await apiCall('/teachers/me', 'DELETE', null, token);
      onLogout();
    } catch (e) {
      alert(e.message);
    }
  }

  if (fetchError) return (
    <div style={{ textAlign: 'center', padding: '3rem' }}>
      <Alert type="error" message={fetchError} />
      <button onClick={onLogout} className="btn btn-secondary" style={{ marginTop: '1rem' }}>Back to Login</button>
    </div>
  );

  if (!profile) return (
    <div style={{ textAlign: 'center', padding: '3rem', color: '#9ca3af' }}>Loading your profile…</div>
  );

  const editInitial = {
    ...profile,
    topics: Array.isArray(profile.topics) ? profile.topics.join(', ') : '',
  };

  return (
    <div>
      {/* Dashboard header */}
      <div style={{ background: 'linear-gradient(135deg, #1e1b4b, #4f46e5)', padding: '2rem', borderRadius: '20px 20px 0 0', color: '#fff', marginBottom: '2rem' }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '1rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
            <div style={{ width: 64, height: 64, borderRadius: '50%', background: 'rgba(255,255,255,.2)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '2.5rem', overflow: 'hidden', flexShrink: 0, border: '2px solid rgba(255,255,255,.3)' }}>
              {profile.profile_pic
                ? <img src={profile.profile_pic} alt={profile.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                : profile.avatar}
            </div>
            <div>
              <div style={{ fontFamily: 'Nunito', fontWeight: 900, fontSize: '1.3rem' }}>{profile.name}</div>
              <div style={{ opacity: .8, fontSize: '.9rem' }}>{profile.subject} Teacher</div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '.5rem', marginTop: '.3rem' }}>
                <span style={{ background: profile.available ? '#22c55e' : '#ef4444', borderRadius: 99, padding: '.15rem .7rem', fontSize: '.72rem', fontWeight: 700 }}>
                  {profile.available ? '● Available' : '● Unavailable'}
                </span>
                <span style={{ opacity: .7, fontSize: '.78rem' }}>{profile.email}</span>
              </div>
            </div>
          </div>
          <div style={{ display: 'flex', gap: '.75rem' }}>
            <button
              onClick={() => { setEditing(e => !e); setSaveError(''); setSaveSuccess(''); }}
              style={{ padding: '.5rem 1.25rem', borderRadius: 10, background: 'rgba(255,255,255,.15)', border: '1px solid rgba(255,255,255,.3)', color: '#fff', fontWeight: 700, cursor: 'pointer', fontSize: '.85rem' }}
            >
              {editing ? '← Cancel' : '✏️ Edit Profile'}
            </button>
            <button
              onClick={onLogout}
              style={{ padding: '.5rem 1.25rem', borderRadius: 10, background: 'rgba(255,255,255,.1)', border: '1px solid rgba(255,255,255,.2)', color: '#fff', fontWeight: 700, cursor: 'pointer', fontSize: '.85rem' }}
            >
              Logout
            </button>
          </div>
        </div>
      </div>

      {/* Dashboard tab bar */}
      <div style={{ display: 'flex', background: '#f8fafc', border: '1px solid #e5e7eb', borderRadius: 14, padding: '.3rem', marginBottom: '1.75rem', gap: '.25rem' }}>
        {[['profile', '👤 My Profile'], ['content', '📚 Content Manager']].map(([key, label]) => (
          <button key={key} onClick={() => setDashTab(key)} style={{
            flex: 1, padding: '.6rem 1rem', borderRadius: 10, border: 'none',
            background: dashTab === key ? '#4f46e5' : 'transparent',
            color: dashTab === key ? '#fff' : '#6b7280',
            fontFamily: 'Nunito', fontWeight: 800, fontSize: '.9rem',
            cursor: 'pointer', transition: 'all .2s',
          }}>{label}</button>
        ))}
      </div>

      {saveSuccess && <Alert type="success" message={saveSuccess} />}

      {dashTab === 'content' ? (
        <ContentManager token={token} />
      ) : editing ? (
        <TeacherForm
          initial={editInitial}
          showEmail={false}
          showPassword={false}
          onSubmit={handleSave}
          loading={loading}
          submitLabel="💾 Save Changes"
          error={saveError}
        />
      ) : (
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem' }}>
          {/* Profile preview */}
          <ProfilePreview profile={profile} />

          {/* Stats grid */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <div style={{ background: '#f0fdf4', border: '1px solid #bbf7d0', borderRadius: 14, padding: '1.25rem' }}>
              <div style={{ fontFamily: 'Nunito', fontWeight: 800, fontSize: '1rem', color: '#15803d', marginBottom: '.75rem' }}>📊 Your Stats</div>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '.5rem' }}>
                {[
                  ['⭐ Rating', profile.rating],
                  ['👨‍🎓 Students', profile.students],
                  ['📅 Experience', `${profile.experience} yrs`],
                  ['💰 Fee', `₹${profile.fee}/session`],
                ].map(([label, val]) => (
                  <div key={label} style={{ background: '#fff', borderRadius: 10, padding: '.75rem', textAlign: 'center' }}>
                    <div style={{ fontFamily: 'Nunito', fontWeight: 800, fontSize: '1rem', color: '#1e1b4b' }}>{val}</div>
                    <div style={{ fontSize: '.72rem', color: '#9ca3af' }}>{label}</div>
                  </div>
                ))}
              </div>
            </div>

            <div style={{ background: '#fffbeb', border: '1px solid #fde68a', borderRadius: 14, padding: '1.25rem' }}>
              <div style={{ fontFamily: 'Nunito', fontWeight: 800, fontSize: '.9rem', color: '#92400e', marginBottom: '.5rem' }}>📋 Profile Summary</div>
              <div style={{ fontSize: '.83rem', color: '#78350f', lineHeight: 1.7 }}>
                <div><strong>Qualification:</strong> {profile.qualification}</div>
                <div><strong>Contact:</strong> {profile.contact || '—'}</div>
                <div><strong>Classes:</strong> {(profile.class_ids || []).map(c => CLASS_OPTIONS.find(o => o.id === c)?.label || c).join(', ')}</div>
                <div style={{ marginTop: '.35rem' }}><strong>Topics:</strong> {Array.isArray(profile.topics) ? profile.topics.join(', ') : profile.topics}</div>
              </div>
            </div>

            <button
              onClick={handleDelete}
              style={{ padding: '.6rem', borderRadius: 10, background: '#fff', border: '1.5px solid #fecaca', color: '#dc2626', fontWeight: 700, cursor: 'pointer', fontSize: '.85rem', transition: 'all .15s' }}
            >
              🗑 Delete My Account
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

// ─── Main AdminPage ───────────────────────────────────────────────
export default function AdminPage() {
  const [tab, setTab] = useState('login');
  const [token, setToken] = useState(() => localStorage.getItem('admin_token'));
  const [loading, setLoading] = useState(false);
  const [loginError, setLoginError] = useState('');
  const [registerError, setRegisterError] = useState('');
  const [registerSuccess, setRegisterSuccess] = useState('');
  const [serverOnline, setServerOnline] = useState(null);
  const [dbOnline, setDbOnline] = useState(null);

  // Check if backend is reachable
  useEffect(() => {
    fetch('/api/health')
      .then(r => r.ok ? r.json() : null)
      .then(d => {
        if (!d) { setServerOnline(false); setDbOnline(false); return; }
        setServerOnline(true);
        setDbOnline(d.db === 'connected');
      })
      .catch(() => { setServerOnline(false); setDbOnline(false); });
  }, []);

  async function handleLogin(form) {
    setLoading(true); setLoginError('');
    try {
      const { token: t } = await apiCall('/auth/login', 'POST', { email: form.email, password: form.password });
      localStorage.setItem('admin_token', t);
      setToken(t);
    } catch (e) {
      setLoginError(e.message);
    }
    setLoading(false);
  }

  async function handleRegister(form) {
    if (!form.class_ids.length) { setRegisterError('Please select at least one class.'); return; }
    setLoading(true); setRegisterError(''); setRegisterSuccess('');
    try {
      const { token: t } = await apiCall('/auth/register', 'POST', form);
      localStorage.setItem('admin_token', t);
      setRegisterSuccess('Account created! Redirecting to your dashboard…');
      setTimeout(() => setToken(t), 1200);
    } catch (e) {
      setRegisterError(e.message);
    }
    setLoading(false);
  }

  function handleLogout() {
    localStorage.removeItem('admin_token');
    setToken(null);
  }

  return (
    <div style={{ minHeight: '100vh', background: '#f8fafc' }}>
      {/* Page header */}
      <div style={{ background: 'linear-gradient(135deg, #1e1b4b, #312e81)', padding: '2.5rem 0', color: '#fff', marginBottom: '2.5rem' }}>
        <div className="container">
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
            <a href="/" style={{ color: 'rgba(255,255,255,.6)', fontSize: '.85rem', fontWeight: 600 }}>← Back to Site</a>
            <span style={{ color: 'rgba(255,255,255,.3)' }}>|</span>
            <div style={{ fontFamily: 'Nunito', fontWeight: 900, fontSize: '1.5rem' }}>
              Online<span style={{ color: '#f97316' }}>Study</span>Hub
              <span style={{ fontSize: '.9rem', fontWeight: 600, color: 'rgba(255,255,255,.6)', marginLeft: '.75rem' }}>Teacher Portal</span>
            </div>
          </div>
          <p style={{ color: 'rgba(255,255,255,.65)', fontSize: '.9rem', marginTop: '.5rem' }}>
            Register or login to manage your teacher profile
          </p>
        </div>
      </div>

      <div className="container" style={{ paddingBottom: '5rem' }}>

        {/* Server status banner */}
        {serverOnline === false && (
          <div style={{ background: '#fff3cd', border: '1px solid #ffc107', borderRadius: 12, padding: '1rem 1.25rem', marginBottom: '1.5rem', fontSize: '.87rem', color: '#856404' }}>
            ⚠️ <strong>Backend server is not running.</strong> Start it with <code style={{ background: '#f8f9fa', padding: '.1rem .4rem', borderRadius: 4 }}>npm run server</code>, then refresh.
          </div>
        )}
        {serverOnline === true && dbOnline === false && (
          <div style={{ background: '#fff3cd', border: '1px solid #ffc107', borderRadius: 12, padding: '1rem 1.25rem', marginBottom: '1.5rem', fontSize: '.87rem', color: '#856404' }}>
            ⚠️ <strong>Database is not connected.</strong> Check your MongoDB URI and network access.
          </div>
        )}

        {token ? (
          <Dashboard token={token} onLogout={handleLogout} />
        ) : (
          <div style={{ maxWidth: 620, margin: '0 auto' }}>
            {/* Tab switcher */}
            <div style={{ display: 'flex', background: '#fff', border: '1px solid #e5e7eb', borderRadius: 16, padding: '.35rem', marginBottom: '2rem', boxShadow: '0 2px 8px rgba(0,0,0,.05)' }}>
              {[['login', '🔑 Login'], ['register', '📝 Register as Teacher']].map(([key, label]) => (
                <button
                  key={key}
                  onClick={() => { setTab(key); setLoginError(''); setRegisterError(''); setRegisterSuccess(''); }}
                  style={{
                    flex: 1, padding: '.65rem', borderRadius: 12, border: 'none',
                    background: tab === key ? '#4f46e5' : 'transparent',
                    color: tab === key ? '#fff' : '#6b7280',
                    fontFamily: 'Nunito', fontWeight: 800, fontSize: '.9rem',
                    cursor: 'pointer', transition: 'all .2s',
                  }}
                >{label}</button>
              ))}
            </div>

            <div style={{ background: '#fff', borderRadius: 20, border: '1px solid #e5e7eb', padding: '2rem', boxShadow: '0 4px 20px rgba(0,0,0,.06)' }}>
              {tab === 'login' ? (
                <div>
                  <h2 style={{ fontFamily: 'Nunito', fontWeight: 900, color: '#1e1b4b', marginBottom: '.5rem' }}>Welcome back</h2>
                  <p style={{ color: '#9ca3af', fontSize: '.9rem', marginBottom: '1.5rem' }}>Login to manage your teacher profile</p>

                  <Alert type="error" message={loginError} />

                  <form onSubmit={e => { e.preventDefault(); handleLogin({ email: e.target.email.value, password: e.target.password.value }); }}>
                    <FieldGroup label="Email Address" required>
                      <Input name="email" type="email" placeholder="you@example.com" required />
                    </FieldGroup>
                    <FieldGroup label="Password" required>
                      <Input name="password" type="password" placeholder="Your password" required />
                    </FieldGroup>
                    <button
                      type="submit" disabled={loading}
                      style={{ width: '100%', padding: '.8rem', borderRadius: 12, background: loading ? '#e5e7eb' : '#4f46e5', color: loading ? '#9ca3af' : '#fff', fontFamily: 'Nunito', fontWeight: 800, fontSize: '1rem', border: 'none', cursor: loading ? 'default' : 'pointer' }}
                    >
                      {loading ? '⏳ Logging in…' : '🔑 Login'}
                    </button>
                  </form>

                  <p style={{ textAlign: 'center', fontSize: '.85rem', color: '#9ca3af', marginTop: '1.25rem' }}>
                    Not registered yet?{' '}
                    <button onClick={() => setTab('register')} style={{ color: '#4f46e5', fontWeight: 700, background: 'none', border: 'none', cursor: 'pointer' }}>
                      Create your profile →
                    </button>
                  </p>
                </div>
              ) : (
                <div>
                  <h2 style={{ fontFamily: 'Nunito', fontWeight: 900, color: '#1e1b4b', marginBottom: '.5rem' }}>Join as a Teacher</h2>
                  <p style={{ color: '#9ca3af', fontSize: '.9rem', marginBottom: '1.5rem' }}>Fill in your details — students will see this profile on the class pages</p>

                  <TeacherForm
                    initial={EMPTY_FORM}
                    showEmail={true}
                    showPassword={true}
                    onSubmit={handleRegister}
                    loading={loading}
                    submitLabel="🚀 Create My Teacher Profile"
                    error={registerError}
                    success={registerSuccess}
                  />

                  <p style={{ textAlign: 'center', fontSize: '.85rem', color: '#9ca3af', marginTop: '1.25rem' }}>
                    Already registered?{' '}
                    <button onClick={() => setTab('login')} style={{ color: '#4f46e5', fontWeight: 700, background: 'none', border: 'none', cursor: 'pointer' }}>
                      Login →
                    </button>
                  </p>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

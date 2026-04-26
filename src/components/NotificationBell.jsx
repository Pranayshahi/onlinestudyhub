import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useNotifications } from '../context/NotificationsContext';

const TYPE_META = {
  content:     { icon: '📚', color: '#4f46e5', bg: '#eef2ff' },
  test:        { icon: '🧪', color: '#dc2626', bg: '#fef2f2' },
  reminder:    { icon: '⏰', color: '#d97706', bg: '#fffbeb' },
  achievement: { icon: '🏆', color: '#059669', bg: '#ecfdf5' },
  tip:         { icon: '💡', color: '#0284c7', bg: '#e0f2fe' },
  system:      { icon: '📢', color: '#7c3aed', bg: '#f5f3ff' },
};

function timeAgo(iso) {
  const diff = (Date.now() - new Date(iso)) / 1000;
  if (diff < 60) return 'just now';
  if (diff < 3600) return `${Math.floor(diff / 60)}m ago`;
  if (diff < 86400) return `${Math.floor(diff / 3600)}h ago`;
  return `${Math.floor(diff / 86400)}d ago`;
}

function NotifItem({ n, onRead }) {
  const meta = TYPE_META[n.type] || TYPE_META.system;
  const inner = (
    <div
      className={`notif-item ${n.read ? 'read' : 'unread'}`}
      onClick={() => onRead(n.id)}
    >
      <div className="notif-item-icon" style={{ background: meta.bg, color: meta.color }}>
        {meta.icon}
      </div>
      <div className="notif-item-body">
        <div className="notif-item-title">{n.title}</div>
        <div className="notif-item-text">{n.body}</div>
        <div className="notif-item-time">{timeAgo(n.createdAt)}</div>
      </div>
      {!n.read && <div className="notif-unread-dot" />}
    </div>
  );
  return n.link ? <Link to={n.link} style={{ textDecoration: 'none' }}>{inner}</Link> : inner;
}

export default function NotificationBell({ user }) {
  const { notifications, unreadCount, markRead, markAllRead, clearAll, settings, updateSettings, requestBrowserPermission } = useNotifications();
  const [open, setOpen] = useState(false);
  const [tab, setTab] = useState('all'); // all | settings
  const ref = useRef(null);

  useEffect(() => {
    function onClick(e) { if (ref.current && !ref.current.contains(e.target)) setOpen(false); }
    document.addEventListener('mousedown', onClick);
    return () => document.removeEventListener('mousedown', onClick);
  }, []);

  const displayed = tab === 'all'
    ? notifications
    : notifications.filter(n => !n.read);

  async function handleBrowserToggle() {
    if (!settings.browserPush) {
      const result = await requestBrowserPermission();
      if (result === 'granted') updateSettings({ browserPush: true });
      else alert('Please allow notifications in your browser settings.');
    } else {
      updateSettings({ browserPush: false });
    }
  }

  return (
    <div className="notif-wrap" ref={ref}>
      {/* Bell button */}
      <button
        className="notif-bell-btn"
        onClick={() => setOpen(o => !o)}
        aria-label="Notifications"
      >
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" />
          <path d="M13.73 21a2 2 0 0 1-3.46 0" />
        </svg>
        {unreadCount > 0 && (
          <span className="notif-badge">{unreadCount > 9 ? '9+' : unreadCount}</span>
        )}
      </button>

      {/* Dropdown panel */}
      {open && (
        <div className="notif-panel">
          {/* Header */}
          <div className="notif-panel-head">
            <div className="notif-panel-title">
              🔔 Notifications
              {unreadCount > 0 && <span className="notif-head-count">{unreadCount} new</span>}
            </div>
            <div className="notif-head-actions">
              {unreadCount > 0 && (
                <button className="notif-action-btn" onClick={markAllRead}>Mark all read</button>
              )}
              <button
                className={`notif-settings-btn ${tab === 'settings' ? 'active' : ''}`}
                onClick={() => setTab(t => t === 'settings' ? 'all' : 'settings')}
                title="Settings"
              >
                ⚙️
              </button>
            </div>
          </div>

          {tab === 'settings' ? (
            /* Settings panel */
            <div className="notif-settings">
              <div className="notif-settings-title">Notification Preferences</div>

              <label className="notif-toggle-row">
                <span>🔔 Browser Push Notifications</span>
                <div className={`notif-toggle ${settings.browserPush ? 'on' : ''}`} onClick={handleBrowserToggle}>
                  <div className="notif-toggle-thumb" />
                </div>
              </label>

              <label className="notif-toggle-row">
                <span>⏰ Daily Study Reminder</span>
                <div className={`notif-toggle ${settings.studyReminder ? 'on' : ''}`}
                  onClick={() => updateSettings({ studyReminder: !settings.studyReminder })}>
                  <div className="notif-toggle-thumb" />
                </div>
              </label>

              {settings.studyReminder && (
                <div className="notif-time-row">
                  <span>Reminder time:</span>
                  <input
                    type="time"
                    value={settings.reminderTime}
                    onChange={e => updateSettings({ reminderTime: e.target.value })}
                    className="notif-time-input"
                  />
                </div>
              )}

              <div className="notif-divider" />
              <div className="notif-settings-title">Alert Types</div>

              {[
                { key: 'contentAlerts',     label: '📚 New Content Alerts' },
                { key: 'testAlerts',        label: '🧪 Test Notifications' },
                { key: 'achievementAlerts', label: '🏆 Achievement Alerts' },
              ].map(({ key, label }) => (
                <label key={key} className="notif-toggle-row">
                  <span>{label}</span>
                  <div className={`notif-toggle ${settings[key] ? 'on' : ''}`}
                    onClick={() => updateSettings({ [key]: !settings[key] })}>
                    <div className="notif-toggle-thumb" />
                  </div>
                </label>
              ))}

              <div className="notif-divider" />
              {notifications.length > 0 && (
                <button className="notif-clear-btn" onClick={() => { clearAll(); setTab('all'); }}>
                  🗑️ Clear all notifications
                </button>
              )}
            </div>
          ) : (
            /* Notifications list */
            <div className="notif-list">
              {displayed.length === 0 ? (
                <div className="notif-empty">
                  <div style={{ fontSize: '2.5rem', marginBottom: '.5rem' }}>🔕</div>
                  <div>You're all caught up!</div>
                </div>
              ) : (
                displayed.map(n => (
                  <NotifItem key={n.id} n={n} onRead={markRead} />
                ))
              )}
            </div>
          )}

          {/* Footer quick-links */}
          {tab === 'all' && notifications.length > 0 && (
            <div className="notif-footer">
              <Link to="/dashboard" onClick={() => setOpen(false)} className="notif-footer-link">
                View Dashboard →
              </Link>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

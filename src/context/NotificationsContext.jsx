import React, { createContext, useContext, useState, useEffect, useCallback } from 'react';

const STORAGE_KEY  = 'osh_notifications';
const SETTINGS_KEY = 'osh_notif_settings';
const SEEDED_KEY   = 'osh_notif_seeded';

const DEFAULT_SETTINGS = {
  browserPush: false,
  studyReminder: false,
  reminderTime: '19:00',
  contentAlerts: true,
  testAlerts: true,
  achievementAlerts: true,
};

const SEED_NOTIFS = [
  {
    type: 'content', title: '📚 New Topics Available',
    body: 'Class 12 Physics: Electrostatics & Wave Optics chapters have been expanded!',
    link: '/class/class-12',
  },
  {
    type: 'test', title: '🧪 Mock Test Ready',
    body: 'JEE Main Mock Test is now available. Challenge yourself today!',
    link: '/exam/jee/mock-test',
  },
  {
    type: 'tip', title: '💡 Study Tip',
    body: 'Spaced repetition: Review a topic after 1 day, 3 days, then 1 week for 90% retention.',
  },
];

function load() {
  try { return JSON.parse(localStorage.getItem(STORAGE_KEY) || '[]'); } catch { return []; }
}
function save(n) {
  try { localStorage.setItem(STORAGE_KEY, JSON.stringify(n)); } catch {}
}
function loadSettings() {
  try { return { ...DEFAULT_SETTINGS, ...JSON.parse(localStorage.getItem(SETTINGS_KEY) || '{}') }; } catch { return DEFAULT_SETTINGS; }
}
function saveSettings(s) {
  try { localStorage.setItem(SETTINGS_KEY, JSON.stringify(s)); } catch {}
}

const NotificationsContext = createContext(null);

export function NotificationsProvider({ children }) {
  const [notifications, setNotifications] = useState(load);
  const [settings, setSettings] = useState(loadSettings);
  const unreadCount = notifications.filter(n => !n.read).length;

  // Seed initial notifications once
  useEffect(() => {
    if (localStorage.getItem(SEEDED_KEY)) return;
    const seeded = SEED_NOTIFS.map((n, i) => ({
      ...n, id: Date.now() - (SEED_NOTIFS.length - i) * 60000,
      read: false, createdAt: new Date(Date.now() - (SEED_NOTIFS.length - i) * 3600000).toISOString(),
    }));
    setNotifications(seeded);
    save(seeded);
    localStorage.setItem(SEEDED_KEY, '1');
  }, []);

  // Study reminder check on mount
  useEffect(() => {
    if (!settings.studyReminder || !settings.reminderTime) return;
    const [h, m] = settings.reminderTime.split(':').map(Number);
    const now = new Date();
    const todayKey = `osh_reminder_fired_${now.toISOString().slice(0, 10)}`;
    if (localStorage.getItem(todayKey)) return;
    const diff = Math.abs(now.getHours() * 60 + now.getMinutes() - (h * 60 + m));
    if (diff <= 20) {
      addNotification({ type: 'reminder', title: '⏰ Time to Study!', body: 'Your daily study reminder — open OnlineStudyHub and keep your streak alive!', link: '/dashboard' });
      localStorage.setItem(todayKey, '1');
    }
  }, []); // eslint-disable-line

  const addNotification = useCallback(({ type, title, body, link }) => {
    const notif = { id: Date.now(), type, title, body, link, read: false, createdAt: new Date().toISOString() };
    setNotifications(prev => {
      const updated = [notif, ...prev].slice(0, 50);
      save(updated);
      return updated;
    });
    // Browser push
    if (typeof window !== 'undefined' && 'Notification' in window && Notification.permission === 'granted') {
      try {
        new Notification(title, { body, icon: '/img/ai-robot.png', badge: '/favicon.svg' });
      } catch {}
    }
    return notif;
  }, []);

  const markRead = useCallback((id) => {
    setNotifications(prev => { const u = prev.map(n => n.id === id ? { ...n, read: true } : n); save(u); return u; });
  }, []);

  const markAllRead = useCallback(() => {
    setNotifications(prev => { const u = prev.map(n => ({ ...n, read: true })); save(u); return u; });
  }, []);

  const clearAll = useCallback(() => { setNotifications([]); save([]); }, []);

  const updateSettings = useCallback((patch) => {
    setSettings(prev => { const u = { ...prev, ...patch }; saveSettings(u); return u; });
  }, []);

  const requestBrowserPermission = useCallback(async () => {
    if (!('Notification' in window)) return 'not-supported';
    if (Notification.permission === 'granted') return 'granted';
    const result = await Notification.requestPermission();
    return result;
  }, []);

  return (
    <NotificationsContext.Provider value={{
      notifications, unreadCount, settings,
      addNotification, markRead, markAllRead, clearAll,
      updateSettings, requestBrowserPermission,
    }}>
      {children}
    </NotificationsContext.Provider>
  );
}

export function useNotifications() {
  const ctx = useContext(NotificationsContext);
  if (!ctx) throw new Error('useNotifications must be inside NotificationsProvider');
  return ctx;
}

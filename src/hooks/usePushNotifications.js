import { useState, useEffect } from 'react';
import { api } from '../utils/api';

function urlBase64ToUint8Array(base64String) {
  const padding = '='.repeat((4 - (base64String.length % 4)) % 4);
  const base64 = (base64String + padding).replace(/-/g, '+').replace(/_/g, '/');
  const raw = window.atob(base64);
  return Uint8Array.from([...raw].map(c => c.charCodeAt(0)));
}

export function usePushNotifications(user) {
  const [permission, setPermission] = useState(() =>
    'Notification' in window ? Notification.permission : 'unsupported'
  );
  const [subscribed, setSubscribed] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if ('Notification' in window) setPermission(Notification.permission);
  }, []);

  async function subscribe() {
    if (!user || !('serviceWorker' in navigator) || !('Notification' in window)) return;
    setLoading(true);
    try {
      const perm = await Notification.requestPermission();
      setPermission(perm);
      if (perm !== 'granted') return;

      const { publicKey } = await api('/push/vapid-public-key');
      const reg = await navigator.serviceWorker.ready;
      const existing = await reg.pushManager.getSubscription();
      if (existing) await existing.unsubscribe();

      const sub = await reg.pushManager.subscribe({
        userVisibleOnly: true,
        applicationServerKey: urlBase64ToUint8Array(publicKey),
      });

      await api('/push/subscribe', { method: 'POST', body: { subscription: sub.toJSON() } });
      setSubscribed(true);
    } catch (e) {
      console.error('[Push] subscribe failed:', e.message);
    } finally {
      setLoading(false);
    }
  }

  return { permission, subscribed, subscribe, loading, supported: 'Notification' in window };
}

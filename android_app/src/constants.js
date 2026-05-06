export const PROD_URL = 'https://www.onlinestudyhub.com';

export const COLORS = {
  primary:        '#1e1b4b',
  primaryDark:    '#13112e',
  primaryLight:   'rgba(30,27,75,0.08)',
  accent:         '#f97316',
  accentLight:    '#fff3e6',
  white:          '#ffffff',
  surface:        '#f0f2f8',
  border:         '#e5e7eb',
  textMuted:      '#9ca3af',
  textBody:       '#374151',
  success:        '#059669',
  error:          '#dc2626',
  indigo:         '#4f46e5',
  indigoLight:    '#eef2ff',
};

export const TABS = [
  { key: 'home',      label: 'Home',      icon: 'Home',       path: '/' },
  { key: 'classes',   label: 'Classes',   icon: 'BookOpen',   path: '/classes' },
  { key: 'search',    label: 'Search',    icon: 'Search',     path: '/search' },
  { key: 'dashboard', label: 'Dashboard', icon: 'LayoutDashboard', path: '/dashboard' },
  { key: 'profile',   label: 'Profile',   icon: 'User',       path: '/login' },
];

// Map URL patterns to tab keys
export function getTabFromUrl(url = '') {
  const path = url.replace(/^https?:\/\/[^/]+/, '');
  if (path.startsWith('/classes') || path.startsWith('/class/') || path.startsWith('/exam/')) return 'classes';
  if (path.startsWith('/search'))   return 'search';
  if (path.startsWith('/dashboard') || path.startsWith('/my-bookings')) return 'dashboard';
  if (path.startsWith('/login') || path.startsWith('/register') || path.startsWith('/teachers') || path.startsWith('/group-classes')) return 'profile';
  return 'home';
}

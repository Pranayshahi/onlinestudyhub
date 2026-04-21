import React, { useState, useEffect, lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

// Lazy-load every page — each becomes its own JS chunk, loaded only when visited
const HomePage        = lazy(() => import('./pages/HomePage'));
const ClassPage       = lazy(() => import('./pages/ClassPage'));
const ClassesPage     = lazy(() => import('./pages/ClassesPage'));
const SubjectPage     = lazy(() => import('./pages/SubjectPage'));
const TopicPage       = lazy(() => import('./pages/TopicPage'));
const NotFoundPage    = lazy(() => import('./pages/NotFoundPage'));
const AdminPage       = lazy(() => import('./pages/admin/AdminPage'));
const BookSessionPage = lazy(() => import('./pages/BookSessionPage'));
const TeachersPage    = lazy(() => import('./pages/TeachersPage'));
const TeachersListPage= lazy(() => import('./pages/TeachersListPage'));
const SearchPage      = lazy(() => import('./pages/SearchPage'));
const MyBookingsPage  = lazy(() => import('./pages/MyBookingsPage'));

// Heavy panel components — load only when opened
const AIDoubtPanel = lazy(() => import('./components/AIDoubtPanel'));
const LoginModal   = lazy(() => import('./components/LoginModal'));

function PageLoader() {
  return (
    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', minHeight: '60vh' }}>
      <div style={{ width: 36, height: 36, border: '3px solid #e0e7ff', borderTopColor: '#4f46e5', borderRadius: '50%', animation: 'spin 0.7s linear infinite' }} />
      <style>{`@keyframes spin { to { transform: rotate(360deg); } }`}</style>
    </div>
  );
}

export default function App() {
  const [aiOpen, setAiOpen] = useState(false);
  const [loginOpen, setLoginOpen] = useState(false);
  const [user, setUser] = useState(() => {
    try {
      const saved = localStorage.getItem('osh_user');
      return saved ? JSON.parse(saved) : null;
    } catch {
      localStorage.removeItem('osh_user');
      return null;
    }
  });
  const [darkMode, setDarkMode] = useState(() => localStorage.getItem('osh_dark') === 'true');

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', darkMode ? 'dark' : 'light');
    localStorage.setItem('osh_dark', darkMode);
  }, [darkMode]);

  const handleLogin = (userData) => {
    setUser(userData);
    localStorage.setItem('osh_user', JSON.stringify(userData));
  };

  const handleLogout = () => {
    setUser(null);
    localStorage.removeItem('osh_user');
  };

  return (
    <HelmetProvider>
    <div className="app">
      <Navbar
        onOpenAI={() => setAiOpen(true)}
        onOpenLogin={() => setLoginOpen(true)}
        user={user}
        onLogout={handleLogout}
        darkMode={darkMode}
        onToggleDark={() => setDarkMode(d => !d)}
      />
      <main style={{ minHeight: '80vh' }}>
        <Suspense fallback={<PageLoader />}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/classes" element={<ClassesPage />} />
            <Route path="/teachers" element={<TeachersPage />} />
            <Route path="/teachers/:classId" element={<TeachersListPage user={user} onOpenLogin={() => setLoginOpen(true)} />} />
            <Route path="/class/:classId" element={<ClassPage user={user} onOpenLogin={() => setLoginOpen(true)} />} />
            <Route path="/class/:classId/subject/:subjectId" element={<SubjectPage />} />
            <Route path="/class/:classId/subject/:subjectId/topic/:topicId" element={<TopicPage user={user} onOpenLogin={() => setLoginOpen(true)} />} />
            <Route path="/class/:classId/subject/:subjectId/topic/:topicId/book" element={<BookSessionPage />} />
            <Route path="/search" element={<SearchPage />} />
            <Route path="/my-bookings" element={<MyBookingsPage user={user} />} />
            <Route path="/teacher-portal" element={<AdminPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </Suspense>
      </main>
      <Footer />
      <Suspense fallback={null}>
        {aiOpen && <AIDoubtPanel open={aiOpen} onClose={() => setAiOpen(false)} />}
        {loginOpen && <LoginModal open={loginOpen} onClose={() => setLoginOpen(false)} onLogin={handleLogin} />}
      </Suspense>
    </div>
    </HelmetProvider>
  );
}

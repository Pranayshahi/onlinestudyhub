import React, { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import AIDoubtPanel from './components/AIDoubtPanel';
import LoginModal from './components/LoginModal';
import HomePage from './pages/HomePage';
import ClassPage from './pages/ClassPage';
import ClassesPage from './pages/ClassesPage';
import SubjectPage from './pages/SubjectPage';
import TopicPage from './pages/TopicPage';
import NotFoundPage from './pages/NotFoundPage';
import AdminPage from './pages/admin/AdminPage';
import BookSessionPage from './pages/BookSessionPage';

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
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/classes" element={<ClassesPage />} />
          <Route path="/class/:classId" element={<ClassPage user={user} onOpenLogin={() => setLoginOpen(true)} />} />
          <Route path="/class/:classId/subject/:subjectId" element={<SubjectPage />} />
          <Route path="/class/:classId/subject/:subjectId/topic/:topicId" element={<TopicPage user={user} onOpenLogin={() => setLoginOpen(true)} />} />
          <Route path="/class/:classId/subject/:subjectId/topic/:topicId/book" element={<BookSessionPage />} />
          <Route path="/teacher-portal" element={<AdminPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </main>
      <Footer />
      <AIDoubtPanel open={aiOpen} onClose={() => setAiOpen(false)} />
      <LoginModal open={loginOpen} onClose={() => setLoginOpen(false)} onLogin={handleLogin} />
    </div>
    </HelmetProvider>
  );
}

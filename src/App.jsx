import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import AIDoubtPanel from './components/AIDoubtPanel';
import HomePage from './pages/HomePage';
import ClassPage from './pages/ClassPage';
import ClassesPage from './pages/ClassesPage';
import SubjectPage from './pages/SubjectPage';
import TopicPage from './pages/TopicPage';
import NotFoundPage from './pages/NotFoundPage';

export default function App() {
  const [aiOpen, setAiOpen] = useState(false);

  return (
    <div className="app">
      <Navbar onOpenAI={() => setAiOpen(true)} />
      <main style={{ minHeight: '80vh' }}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/classes" element={<ClassesPage />} />
          <Route path="/class/:classId" element={<ClassPage />} />
          <Route path="/class/:classId/subject/:subjectId" element={<SubjectPage />} />
          <Route path="/class/:classId/subject/:subjectId/topic/:topicId" element={<TopicPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </main>
      <Footer />
      <AIDoubtPanel open={aiOpen} onClose={() => setAiOpen(false)} />
    </div>
  );
}

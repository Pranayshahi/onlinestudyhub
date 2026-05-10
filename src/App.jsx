import React, { useState, useEffect, lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { NotificationsProvider } from "./context/NotificationsContext";
import { LanguageProvider } from "./context/LanguageContext";
import { api } from "./utils/api";

const BOOKING_CACHE_KEY = "osh_booking_status_cache";

// Lazy-load every page — each becomes its own JS chunk, loaded only when visited
const HomePage = lazy(() => import("./pages/HomePage"));
const ClassPage = lazy(() => import("./pages/ClassPage"));
const ClassesPage = lazy(() => import("./pages/ClassesPage"));
const SubjectPage = lazy(() => import("./pages/SubjectPage"));
const TopicPage = lazy(() => import("./pages/TopicPage"));
const NotFoundPage = lazy(() => import("./pages/NotFoundPage"));
const AdminPage = lazy(() => import("./pages/admin/AdminPage"));
const BookSessionPage = lazy(() => import("./pages/BookSessionPage"));
const TeachersPage = lazy(() => import("./pages/TeachersPage"));
const TeachersListPage = lazy(() => import("./pages/TeachersListPage"));
const SearchPage = lazy(() => import("./pages/SearchPage"));
const MyBookingsPage = lazy(() => import("./pages/MyBookingsPage"));
const DashboardPage = lazy(() => import("./pages/DashboardPage"));
const ExamHubPage = lazy(() => import("./pages/ExamHubPage"));
const WeightagePage = lazy(() => import("./pages/WeightagePage"));
const PYQPage = lazy(() => import("./pages/PYQPage"));
const MockTestListPage = lazy(() => import("./pages/MockTestListPage"));
const MockTestTakerPage = lazy(() => import("./pages/MockTestTakerPage"));
const StudyPlanPage = lazy(() => import("./pages/StudyPlanPage"));
const ParentPortal = lazy(() => import("./pages/ParentPortal"));
const GroupClassesPage = lazy(() => import("./pages/GroupClassesPage"));

// Heavy panel components — load only when opened
const AIDoubtPanel = lazy(() => import("./components/AIDoubtPanel"));
const LoginModal = lazy(() => import("./components/LoginModal"));

function PageLoader() {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        minHeight: "60vh",
      }}
    >
      <div
        style={{
          width: 36,
          height: 36,
          border: "3px solid #e0e7ff",
          borderTopColor: "#4f46e5",
          borderRadius: "50%",
          animation: "spin 0.7s linear infinite",
        }}
      />
      <style>{`@keyframes spin { to { transform: rotate(360deg); } }`}</style>
    </div>
  );
}

export default function App() {
  const [aiOpen, setAiOpen] = useState(false);
  const [aiPrefill, setAiPrefill] = useState('');

  function openAI(prefillText = '') {
    setAiPrefill(prefillText);
    setAiOpen(true);
  }
  const [loginOpen, setLoginOpen] = useState(false);
  const [user, setUser] = useState(() => {
    try {
      const saved = localStorage.getItem("osh_user");
      return saved ? JSON.parse(saved) : null;
    } catch {
      localStorage.removeItem("osh_user");
      return null;
    }
  });
  const [darkMode, setDarkMode] = useState(
    () => localStorage.getItem("osh_dark") === "true",
  );
  const [bookingsBadge, setBookingsBadge] = useState(0);

  useEffect(() => {
    document.documentElement.setAttribute(
      "data-theme",
      darkMode ? "dark" : "light",
    );
    localStorage.setItem("osh_dark", darkMode);
  }, [darkMode]);

  // Count unseen booking status changes for the Navbar badge
  useEffect(() => {
    if (!user) {
      setBookingsBadge(0);
      return;
    }
    api("/bookings/student")
      .then((data) => {
        const list = Array.isArray(data) ? data : [];
        const cached = (() => {
          try {
            return JSON.parse(localStorage.getItem(BOOKING_CACHE_KEY) || "{}");
          } catch {
            return {};
          }
        })();
        const unseen = list.filter(
          (b) =>
            cached[b._id] &&
            cached[b._id] !== b.status &&
            (b.status === "confirmed" || b.status === "cancelled"),
        ).length;
        setBookingsBadge(unseen);
      })
      .catch(() => {});
  }, [user]);

  const handleLogin = (userData) => {
    setUser(userData);
    localStorage.setItem("osh_user", JSON.stringify(userData));
  };

  const handleLogout = () => {
    setUser(null);
    localStorage.removeItem("osh_user");
    setBookingsBadge(0);
  };

  return (
    <HelmetProvider>
      <LanguageProvider>
      <NotificationsProvider>
        <div className="app">
          <Navbar
            onOpenAI={() => openAI()}
            onOpenLogin={() => setLoginOpen(true)}
            user={user}
            onLogout={handleLogout}
            darkMode={darkMode}
            onToggleDark={() => setDarkMode((d) => !d)}
            bookingsBadge={bookingsBadge}
          />
          <main style={{ minHeight: "80vh" }}>
            <Suspense fallback={<PageLoader />}>
              <Routes>
                <Route
                  path="/"
                  element={<HomePage onOpenAI={() => openAI()} />}
                />
                <Route path="/classes" element={<ClassesPage />} />
                <Route path="/teachers" element={<TeachersPage />} />
                <Route
                  path="/teachers/:classId"
                  element={
                    <TeachersListPage
                      user={user}
                      onOpenLogin={() => setLoginOpen(true)}
                    />
                  }
                />
                <Route
                  path="/class/:classId"
                  element={
                    <ClassPage
                      user={user}
                      onOpenLogin={() => setLoginOpen(true)}
                    />
                  }
                />
                <Route
                  path="/class/:classId/subject/:subjectId"
                  element={<SubjectPage user={user} />}
                />
                <Route
                  path="/class/:classId/subject/:subjectId/topic/:topicId"
                  element={
                    <TopicPage
                      user={user}
                      onOpenLogin={() => setLoginOpen(true)}
                      onOpenAI={openAI}
                    />
                  }
                />
                <Route
                  path="/class/:classId/subject/:subjectId/topic/:topicId/book"
                  element={<BookSessionPage />}
                />
                <Route path="/search" element={<SearchPage />} />
                <Route
                  path="/my-bookings"
                  element={
                    <MyBookingsPage
                      user={user}
                      onOpenLogin={() => setLoginOpen(true)}
                      onBadgeUpdate={setBookingsBadge}
                    />
                  }
                />
                <Route
                  path="/dashboard"
                  element={
                    <DashboardPage
                      user={user}
                      onOpenLogin={() => setLoginOpen(true)}
                      onUpdateUser={handleLogin}
                    />
                  }
                />
                <Route path="/teacher-portal" element={<AdminPage />} />
                <Route path="/exam/:examId" element={<ExamHubPage />} />
                <Route
                  path="/exam/:examId/weightage"
                  element={<WeightagePage />}
                />
                <Route path="/exam/:examId/pyq" element={<PYQPage user={user} onOpenLogin={() => setLoginOpen(true)} />} />
                <Route
                  path="/exam/:examId/mock-test"
                  element={<MockTestListPage />}
                />
                <Route
                  path="/exam/:examId/mock-test/:testId"
                  element={<MockTestTakerPage />}
                />
                <Route
                  path="/study-plan"
                  element={
                    <StudyPlanPage
                      user={user}
                      onOpenLogin={() => setLoginOpen(true)}
                    />
                  }
                />
                <Route path="/parent-portal" element={<ParentPortal />} />
                <Route
                  path="/group-classes"
                  element={
                    <GroupClassesPage
                      user={user}
                      onOpenLogin={() => setLoginOpen(true)}
                    />
                  }
                />
                <Route path="*" element={<NotFoundPage />} />
              </Routes>
            </Suspense>
          </main>
          <Footer />
          <Suspense fallback={null}>
            {aiOpen && (
              <AIDoubtPanel open={aiOpen} onClose={() => { setAiOpen(false); setAiPrefill(''); }} prefillText={aiPrefill} />
            )}
            {loginOpen && (
              <LoginModal
                open={loginOpen}
                onClose={() => setLoginOpen(false)}
                onLogin={handleLogin}
              />
            )}
          </Suspense>
        </div>
      </NotificationsProvider>
      </LanguageProvider>
    </HelmetProvider>
  );
}

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
const BatchesPage = lazy(() => import("./pages/BatchesPage"));
const BatchDetailsPage = lazy(() => import("./pages/BatchDetailsPage"));
const StorePage = lazy(() => import("./pages/StorePage"));
const CommunityPage = lazy(() => import("./pages/CommunityPage"));
const LeaderboardPage = lazy(() => import("./pages/LeaderboardPage"));
const StudyRoomPage = lazy(() => import("./pages/StudyRoomPage"));
const OfflineNotesPage = lazy(() => import("./pages/OfflineNotesPage"));
const ContactPage = lazy(() => import("./pages/ContactPage"));
const FormulaHubPage = lazy(() => import("./pages/FormulaHubPage"));
const PWComparisonPage = lazy(() => import("./pages/PWComparisonPage"));
const AdminAuditDashboard = lazy(() => import("./pages/admin/AdminAuditDashboard"));

// Heavy panel components — load only when opened
const AIDoubtPanel = lazy(() => import("./components/AIDoubtPanel"));
const LoginModal = lazy(() => import("./components/LoginModal"));
const SnapSolveModal = lazy(() => import("./components/SnapSolveModal"));

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
  const [snapSolveOpen, setSnapSolveOpen] = useState(false);

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

  useEffect(() => {
    const handleOshLogout = () => {
      setUser(null);
      localStorage.removeItem("osh_user");
      setBookingsBadge(0);
    };
    window.addEventListener("osh_logout", handleOshLogout);
    return () => window.removeEventListener("osh_logout", handleOshLogout);
  }, []);

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
            onOpenSnapSolve={() => setSnapSolveOpen(true)}
          />
          <main style={{ minHeight: "80vh" }}>
            <Suspense fallback={<PageLoader />}>
              <Routes>
                <Route
                  path="/"
                  element={<HomePage onOpenAI={() => openAI()} onOpenSnapSolve={() => openSnapSolve && openSnapSolve()} user={user} />}
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
                <Route
                  path="/batches"
                  element={
                    <BatchesPage
                      user={user}
                      onOpenLogin={() => setLoginOpen(true)}
                    />
                  }
                />
                <Route
                  path="/batches/:batchId"
                  element={
                    <BatchDetailsPage
                      user={user}
                      onOpenLogin={() => setLoginOpen(true)}
                      onOpenAI={openAI}
                    />
                  }
                />
                <Route
                  path="/store"
                  element={
                    <StorePage
                      user={user}
                      onOpenLogin={() => setLoginOpen(true)}
                    />
                  }
                />
                <Route
                  path="/community"
                  element={<CommunityPage />}
                />
                <Route
                  path="/leaderboard"
                  element={
                    <LeaderboardPage
                      user={user}
                      onOpenLogin={() => setLoginOpen(true)}
                    />
                  }
                />
                <Route
                  path="/study-room"
                  element={<StudyRoomPage user={user} />}
                />
                <Route
                  path="/offline-notes"
                  element={<OfflineNotesPage />}
                />
                <Route
                  path="/contact"
                  element={<ContactPage />}
                />
                <Route
                  path="/formula-bank"
                  element={<FormulaHubPage />}
                />
                <Route
                  path="/vs-physicswallah"
                  element={<PWComparisonPage />}
                />
                <Route
                  path="/admin/audit"
                  element={<AdminAuditDashboard />}
                />
                <Route path="*" element={<NotFoundPage />} />
              </Routes>
            </Suspense>
          </main>
          <Footer />

          {/* Floating Snap & Solve Action Button */}
          <button
            onClick={() => setSnapSolveOpen(true)}
            style={{
              position: "fixed",
              bottom: "85px",
              right: "24px",
              zIndex: 998,
              background: "linear-gradient(135deg, #ef4444, #dc2626)",
              color: "#fff",
              border: "none",
              borderRadius: "50px",
              padding: ".75rem 1.25rem",
              fontFamily: "Nunito, sans-serif",
              fontWeight: 900,
              fontSize: ".85rem",
              boxShadow: "0 6px 24px rgba(239,68,68,0.45)",
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              gap: ".5rem",
              transition: "transform 0.2s, box-shadow 0.2s",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "scale(1.06) translateY(-2px)";
              e.currentTarget.style.boxShadow = "0 10px 30px rgba(239,68,68,0.6)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "scale(1) translateY(0)";
              e.currentTarget.style.boxShadow = "0 6px 24px rgba(239,68,68,0.45)";
            }}
          >
            <span style={{ fontSize: "1.2rem" }}>📷</span> Snap & Solve
          </button>

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
            {snapSolveOpen && (
              <SnapSolveModal
                isOpen={snapSolveOpen}
                onClose={() => setSnapSolveOpen(false)}
              />
            )}
          </Suspense>
        </div>
      </NotificationsProvider>
      </LanguageProvider>
    </HelmetProvider>
  );
}

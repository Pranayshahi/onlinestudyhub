import React, { useState, useRef, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { NAV_CLASSES, CURRICULUM } from "../data/curriculum";
import { TEACHERS } from "../data/teachers";
import NotificationBell from "./NotificationBell";

function getInitials(name) {
  if (!name) return "?";
  return name
    .split(" ")
    .map((w) => w[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();
}

const ChevronDown = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
    <polyline points="6 9 12 15 18 9" />
  </svg>
);

const CLASS_BADGE_COLORS = {
  6: { bg: "#dcfce7", color: "#16a34a" },
  7: { bg: "#dbeafe", color: "#1d4ed8" },
  8: { bg: "#fef9c3", color: "#a16207" },
  9: { bg: "#ffedd5", color: "#c2410c" },
  10: { bg: "#fce7f3", color: "#be185d" },
  11: { bg: "#ede9fe", color: "#7c3aed" },
  12: { bg: "#e0e7ff", color: "#4338ca" },
};

function ClassBadge({ classId }) {
  const num = classId.replace("class-", "");
  const c = CLASS_BADGE_COLORS[num] || { bg: "#f3f4f6", color: "#6b7280" };
  return (
    <span
      style={{
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        width: 26,
        height: 26,
        borderRadius: 7,
        background: c.bg,
        color: c.color,
        fontWeight: 900,
        fontSize: ".78rem",
        flexShrink: 0,
        fontFamily: "Nunito",
        letterSpacing: "-.01em",
      }}
    >
      {num}
    </span>
  );
}

export default function Navbar({
  onOpenAI,
  onOpenLogin,
  user,
  onLogout,
  darkMode,
  onToggleDark,
  bookingsBadge = 0,
}) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileExpanded, setMobileExpanded] = useState(null);
  const [userMenuOpen, setUserMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const searchInputRef = useRef(null);
  const navigate = useNavigate();

  const close = () => {
    setMobileOpen(false);
    setUserMenuOpen(false);
  };
  const toggleMobile = (key) =>
    setMobileExpanded((p) => (p === key ? null : key));

  useEffect(() => {
    if (searchOpen) searchInputRef.current?.focus();
  }, [searchOpen]);

  useEffect(() => {
    if (!searchOpen) return;
    const handler = (e) => {
      if (e.key === "Escape") setSearchOpen(false);
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [searchOpen]);

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    const q = searchQuery.trim();
    if (q) {
      navigate(`/search?q=${encodeURIComponent(q)}`);
      setSearchOpen(false);
      setSearchQuery("");
      close();
    }
  };

  return (
    <nav className="navbar">
      <div className="container">
        <div className="nav-inner">
          {/* Logo */}
          <Link to="/" className="nav-logo" onClick={close}>
            Online<span>Study</span>Hub
          </Link>

          {/* Desktop + Mobile nav */}
          <div className={`nav-links ${mobileOpen ? "mobile-open" : ""}`}>
            {/* ── Classes dropdown (3-column) ── */}
            <div
              className={`nav-item ${mobileOpen && mobileExpanded === "classes" ? "mobile-expanded" : ""}`}
            >
              <Link
                to="/classes"
                className="nav-link"
                onClick={() => (mobileOpen ? toggleMobile("classes") : close())}
              >
                Classes <ChevronDown />
              </Link>
              <div className="dropdown dropdown-3col">
                {/* Col 1 — Middle School */}
                <div className="dropdown-section">
                  <div className="dropdown-label">Middle School</div>
                  {NAV_CLASSES.slice(0, 3).map((cls) => (
                    <Link
                      key={cls.id}
                      to={`/class/${cls.id}`}
                      className="dropdown-item"
                      onClick={close}
                    >
                      <ClassBadge classId={cls.id} /> {cls.label}
                    </Link>
                  ))}
                </div>
                {/* Col 2 — High School */}
                <div className="dropdown-section">
                  <div className="dropdown-label">High School</div>
                  {NAV_CLASSES.slice(3).map((cls) => (
                    <Link
                      key={cls.id}
                      to={`/class/${cls.id}`}
                      className="dropdown-item"
                      onClick={close}
                    >
                      <ClassBadge classId={cls.id} /> {cls.label}
                    </Link>
                  ))}
                </div>
                {/* Col 3 — Competitive Exams */}
                <div className="dropdown-section dropdown-section-exams">
                  <div className="dropdown-label">Competitive Exams</div>
                  <div className="dropdown-exam-block">
                    <Link
                      to="/exam/jee"
                      className="dropdown-exam-title"
                      onClick={close}
                    >
                      🏆 IIT / JEE
                    </Link>
                    <Link
                      to="/class/jee"
                      className="dropdown-exam-sub"
                      onClick={close}
                    >
                      📘 Study Topics
                    </Link>
                    <Link
                      to="/exam/jee/weightage"
                      className="dropdown-exam-sub"
                      onClick={close}
                    >
                      📊 Weightage
                    </Link>
                    <Link
                      to="/exam/jee/pyq"
                      className="dropdown-exam-sub"
                      onClick={close}
                    >
                      📝 PYQ Bank
                    </Link>
                    <Link
                      to="/exam/jee/mock-test"
                      className="dropdown-exam-sub"
                      onClick={close}
                    >
                      ⏱️ Mock Tests
                    </Link>
                  </div>
                  <div className="dropdown-exam-block">
                    <Link
                      to="/exam/neet"
                      className="dropdown-exam-title"
                      onClick={close}
                    >
                      🩺 NEET-UG
                    </Link>
                    <Link
                      to="/class/neet"
                      className="dropdown-exam-sub"
                      onClick={close}
                    >
                      📘 Study Topics
                    </Link>
                    <Link
                      to="/exam/neet/weightage"
                      className="dropdown-exam-sub"
                      onClick={close}
                    >
                      📊 Weightage
                    </Link>
                    <Link
                      to="/exam/neet/pyq"
                      className="dropdown-exam-sub"
                      onClick={close}
                    >
                      📝 PYQ Bank
                    </Link>
                    <Link
                      to="/exam/neet/mock-test"
                      className="dropdown-exam-sub"
                      onClick={close}
                    >
                      ⏱️ Mock Tests
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            {/* ── Teachers dropdown ── */}
            <div
              className={`nav-item ${mobileOpen && mobileExpanded === "teachers" ? "mobile-expanded" : ""}`}
            >
              <Link
                to="/teachers"
                className="nav-link"
                onClick={() => mobileOpen && toggleMobile("teachers")}
                style={{ textDecoration: "none" }}
              >
                Teachers <ChevronDown />
              </Link>
              <div className="dropdown">
                <div className="dropdown-section">
                  <div className="dropdown-label">Find a Teacher</div>
                  {NAV_CLASSES.map((cls) => {
                    const t = TEACHERS[cls.id]?.[0];
                    const target = `/teachers/${cls.id}`;
                    return (
                      <Link
                        key={cls.id}
                        to={user ? target : "#"}
                        className="dropdown-item"
                        onClick={(e) => {
                          if (!user) {
                            e.preventDefault();
                            onOpenLogin();
                          }
                          close();
                        }}
                      >
                        <ClassBadge classId={cls.id} />
                        <span style={{ flex: 1 }}>{cls.label}</span>
                        {t && (
                          <span
                            style={{ fontSize: ".75rem", color: "#9ca3af" }}
                          >
                            {t.avatar}
                          </span>
                        )}
                      </Link>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* ── Mobile-only bottom links ── */}
            <div className="nav-mobile-bottom">
              <Link
                to="/teacher-portal"
                className="nav-mobile-action-link"
                onClick={close}
              >
                <span>👨‍🏫</span> Teacher Portal
              </Link>
              {user && (
                <>
                  <Link
                    to="/dashboard"
                    className="nav-mobile-action-link"
                    onClick={close}
                  >
                    <span>🏠</span> My Dashboard
                  </Link>
                  <Link
                    to="/my-bookings"
                    className="nav-mobile-action-link"
                    onClick={close}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                    }}
                  >
                    <span>
                      <span>📅</span> My Bookings
                    </span>
                    {bookingsBadge > 0 && (
                      <span
                        style={{
                          background: "#ef4444",
                          color: "#fff",
                          fontSize: ".65rem",
                          fontWeight: 900,
                          padding: "2px 6px",
                          borderRadius: 99,
                          lineHeight: 1,
                        }}
                      >
                        {bookingsBadge}
                      </span>
                    )}
                  </Link>
                </>
              )}
              {!user && (
                <button
                  className="nav-mobile-action-link nav-mobile-login"
                  onClick={() => {
                    close();
                    onOpenLogin();
                  }}
                >
                  <span>🔑</span> Login / Sign Up
                </button>
              )}
            </div>
          </div>

          {/* Actions */}
          <div className="nav-actions">
            {/* Search — hidden on mobile via nav-search-wrapper */}
            <div className="nav-search-wrapper">
              {searchOpen ? (
                <form className="nav-search-form" onSubmit={handleSearchSubmit}>
                  <input
                    ref={searchInputRef}
                    className="nav-search-input"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Search topics, teachers..."
                  />
                  <button
                    type="submit"
                    className="nav-search-submit"
                    aria-label="Submit search"
                  >
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.5"
                    >
                      <circle cx="11" cy="11" r="8" />
                      <line x1="21" y1="21" x2="16.65" y2="16.65" />
                    </svg>
                  </button>
                  <button
                    type="button"
                    className="nav-search-close"
                    onClick={() => {
                      setSearchOpen(false);
                      setSearchQuery("");
                    }}
                    aria-label="Close search"
                  >
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.5"
                    >
                      <line x1="18" y1="6" x2="6" y2="18" />
                      <line x1="6" y1="6" x2="18" y2="18" />
                    </svg>
                  </button>
                </form>
              ) : (
                <button
                  className="nav-icon-btn"
                  onClick={() => setSearchOpen(true)}
                  aria-label="Search"
                >
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                  >
                    <circle cx="11" cy="11" r="8" />
                    <line x1="21" y1="21" x2="16.65" y2="16.65" />
                  </svg>
                </button>
              )}
            </div>

            {/* Teacher Portal — desktop only */}
            <Link
              to="/teacher-portal"
              className="nav-desktop-only"
              style={{
                fontSize: ".82rem",
                color: "rgba(255,255,255,.75)",
                fontWeight: 700,
                padding: ".4rem .8rem",
                borderRadius: 8,
                border: "1px solid rgba(255,255,255,.2)",
                whiteSpace: "nowrap",
                transition: "all .2s",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = "rgba(255,255,255,.12)";
                e.currentTarget.style.color = "#fff";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = "transparent";
                e.currentTarget.style.color = "rgba(255,255,255,.75)";
              }}
            >
              👨‍🏫 Teacher Portal
            </Link>

            {/* AI Doubt — icon on mobile, full button on desktop */}
            <button
              className="nav-ai-btn"
              onClick={onOpenAI}
              aria-label="AI Doubt Help"
            >
              <img
                src="/img/ai-robot.png"
                alt="AI"
                style={{
                  width: 32,
                  height: 32,
                  objectFit: "contain",
                  flexShrink: 0,
                }}
              />
              <span className="nav-ai-text">AI Doubt</span>
            </button>

            {/* Notification Bell */}
            <NotificationBell user={user} />

            {/* User avatar / login */}
            {user ? (
              <div
                className="nav-user-item nav-item"
                style={{ position: "relative" }}
              >
                <button
                  className="user-avatar-btn"
                  onClick={() => setUserMenuOpen(!userMenuOpen)}
                  aria-label={`Account menu for ${user.name}`}
                  aria-expanded={userMenuOpen}
                  aria-haspopup="menu"
                  style={{
                    width: 36,
                    height: 36,
                    borderRadius: "50%",
                    background: "linear-gradient(135deg, #4f46e5, #7c3aed)",
                    border: "2px solid rgba(255,255,255,.35)",
                    color: "#fff",
                    fontWeight: 800,
                    fontSize: ".8rem",
                    cursor: "pointer",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    letterSpacing: ".03em",
                    transition: "border-color .2s, transform .15s",
                    flexShrink: 0,
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = "#fff";
                    e.currentTarget.style.transform = "scale(1.08)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = "rgba(255,255,255,.35)";
                    e.currentTarget.style.transform = "scale(1)";
                  }}
                >
                  {getInitials(user.name)}
                </button>
                {userMenuOpen && (
                  <>
                    <div
                      style={{ position: "fixed", inset: 0, zIndex: 99 }}
                      onClick={() => setUserMenuOpen(false)}
                    />
                    <div
                      style={{
                        position: "absolute",
                        right: 0,
                        top: "calc(100% + 10px)",
                        background: "#fff",
                        borderRadius: 16,
                        minWidth: 220,
                        boxShadow: "0 8px 32px rgba(0,0,0,.18)",
                        border: "1px solid #e5e7eb",
                        zIndex: 100,
                        overflow: "hidden",
                      }}
                    >
                      <div
                        style={{
                          padding: "1rem 1.1rem",
                          background:
                            "linear-gradient(135deg, #1e1b4b, #4f46e5)",
                          display: "flex",
                          alignItems: "center",
                          gap: ".75rem",
                        }}
                      >
                        <div
                          style={{
                            width: 40,
                            height: 40,
                            borderRadius: "50%",
                            background: "rgba(255,255,255,.2)",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            fontWeight: 800,
                            fontSize: ".95rem",
                            color: "#fff",
                            flexShrink: 0,
                          }}
                        >
                          {getInitials(user.name)}
                        </div>
                        <div style={{ overflow: "hidden" }}>
                          <div
                            style={{
                              fontWeight: 800,
                              fontSize: ".9rem",
                              color: "#fff",
                              whiteSpace: "nowrap",
                              overflow: "hidden",
                              textOverflow: "ellipsis",
                            }}
                          >
                            {user.name}
                          </div>
                          <div
                            style={{
                              fontSize: ".72rem",
                              color: "rgba(255,255,255,.65)",
                              whiteSpace: "nowrap",
                              overflow: "hidden",
                              textOverflow: "ellipsis",
                            }}
                          >
                            {user.email}
                          </div>
                        </div>
                      </div>
                      <div style={{ padding: ".4rem 0" }}>
                        <Link
                          to="/dashboard"
                          onClick={() => setUserMenuOpen(false)}
                          style={{
                            display: "flex",
                            alignItems: "center",
                            gap: ".65rem",
                            padding: ".65rem 1.1rem",
                            fontSize: ".87rem",
                            color: "#374151",
                            fontWeight: 600,
                            textDecoration: "none",
                            transition: "background .15s",
                          }}
                          onMouseEnter={(e) =>
                            (e.currentTarget.style.background = "#f3f4f6")
                          }
                          onMouseLeave={(e) =>
                            (e.currentTarget.style.background = "transparent")
                          }
                        >
                          <span style={{ fontSize: "1rem" }}>🏠</span> My
                          Dashboard
                        </Link>
                        <Link
                          to="/my-bookings"
                          onClick={() => setUserMenuOpen(false)}
                          style={{
                            display: "flex",
                            alignItems: "center",
                            gap: ".65rem",
                            padding: ".65rem 1.1rem",
                            fontSize: ".87rem",
                            color: "#374151",
                            fontWeight: 600,
                            textDecoration: "none",
                            transition: "background .15s",
                          }}
                          onMouseEnter={(e) =>
                            (e.currentTarget.style.background = "#f3f4f6")
                          }
                          onMouseLeave={(e) =>
                            (e.currentTarget.style.background = "transparent")
                          }
                        >
                          <span style={{ fontSize: "1rem" }}>📅</span>
                          My Bookings
                          {bookingsBadge > 0 && (
                            <span
                              style={{
                                marginLeft: "auto",
                                background: "#ef4444",
                                color: "#fff",
                                fontSize: ".65rem",
                                fontWeight: 900,
                                padding: "2px 6px",
                                borderRadius: 99,
                                lineHeight: 1,
                              }}
                            >
                              {bookingsBadge}
                            </span>
                          )}
                        </Link>
                        <div
                          style={{
                            height: 1,
                            background: "#f3f4f6",
                            margin: ".2rem 0",
                          }}
                        />
                        <button
                          onClick={() => {
                            onLogout();
                            setUserMenuOpen(false);
                          }}
                          style={{
                            display: "flex",
                            alignItems: "center",
                            gap: ".65rem",
                            width: "100%",
                            padding: ".65rem 1.1rem",
                            fontSize: ".87rem",
                            color: "#ef4444",
                            fontWeight: 600,
                            background: "none",
                            border: "none",
                            cursor: "pointer",
                            textAlign: "left",
                            transition: "background .15s",
                          }}
                          onMouseEnter={(e) =>
                            (e.currentTarget.style.background = "#fef2f2")
                          }
                          onMouseLeave={(e) =>
                            (e.currentTarget.style.background = "transparent")
                          }
                        >
                          <span style={{ fontSize: "1rem" }}>🚪</span> Logout
                        </button>
                      </div>
                    </div>
                  </>
                )}
              </div>
            ) : (
              <button
                className="nav-login-btn"
                onClick={onOpenLogin}
                aria-label="Login"
              >
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                >
                  <circle cx="12" cy="8" r="4" />
                  <path d="M4 20c0-4 3.6-7 8-7s8 3 8 7" />
                </svg>
                <span className="nav-ai-text">Login</span>
              </button>
            )}
          </div>

          {/* Dark mode toggle */}
          <button
            className="dark-toggle-btn"
            onClick={onToggleDark}
            aria-label="Toggle dark mode"
          >
            {darkMode ? "☀️" : "🌙"}
          </button>

          {/* Mobile menu toggle */}
          <button
            className="mobile-menu-btn"
            onClick={() => setMobileOpen((o) => !o)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? (
              <svg
                aria-hidden="true"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            ) : (
              <svg
                aria-hidden="true"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <line x1="3" y1="12" x2="21" y2="12" />
                <line x1="3" y1="6" x2="21" y2="6" />
                <line x1="3" y1="18" x2="21" y2="18" />
              </svg>
            )}
          </button>
        </div>
      </div>
    </nav>
  );
}

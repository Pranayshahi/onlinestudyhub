import React from "react";
import { Link } from "react-router-dom";
import { getAllClasses } from "../data/curriculum";
import SEO from "../components/SEO";
import { useLang } from "../context/LanguageContext";

export default function ClassesPage() {
  const classes = getAllClasses();
  const { t } = useLang();

  return (
    <div style={{ paddingBottom: 60 }}>
      <SEO
        title="Online Study for Class 6 to 12 — CBSE & ICSE Boards"
        description="Explore comprehensive online study material for Class 6, 7, 8, 9, 10, 11, and 12 across CBSE and ICSE Council Boards. Notes, DPPs, and video lectures."
        path="/classes"
        breadcrumbs={[{ name: "All Classes", url: "/classes" }]}
      />

      <div className="page-header">
        <div className="container" style={{ textAlign: "center", padding: "40px 20px" }}>
          <h1 style={{ fontFamily: "Nunito", fontSize: "clamp(2rem,4vw,2.8rem)", fontWeight: 900, marginBottom: 12 }}>
            Choose Your Board & Class (6 to 12)
          </h1>
          <p style={{ color: "rgba(255,255,255,.8)", fontSize: "1.1rem", maxWidth: 700, margin: "0 auto" }}>
            Comprehensive chapter notes, NCERT & Selina Concise solutions, PYQs, and daily practice problems for CBSE & ICSE students.
          </p>
        </div>
      </div>

      <div className="container" style={{ paddingTop: "2.5rem", maxWidth: 1100, margin: "0 auto", padding: "30px 20px" }}>
        {/* CBSE Section */}
        <div style={{ marginBottom: 50 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 20 }}>
            <span style={{ fontSize: "1.8rem" }}>📘</span>
            <div>
              <h2 style={{ fontSize: "1.6rem", fontWeight: 800, margin: 0, color: "#1e3a8a" }}>
                CBSE Board (Class 6 to 12)
              </h2>
              <p style={{ margin: 0, color: "#64748b", fontSize: "0.9rem" }}>
                NCERT Line-by-Line study material, Chapterwise PYQ banks & CBSE Board Exam Sample Papers.
              </p>
            </div>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))",
              gap: 20,
            }}
          >
            {classes.map((cls) => (
              <Link to={`/class/${cls.id}`} key={`cbse-${cls.id}`} style={{ textDecoration: "none" }}>
                <div
                  style={{
                    background: "var(--card-bg, #ffffff)",
                    borderRadius: 16,
                    padding: 20,
                    border: "2px solid #dbeafe",
                    boxShadow: "0 4px 15px rgba(0,0,0,0.05)",
                    transition: "transform 0.2s, boxShadow 0.2s",
                    display: "flex",
                    alignItems: "center",
                    gap: 15,
                  }}
                >
                  <div style={{ fontSize: "2rem" }}>{cls.emoji}</div>
                  <div>
                    <div style={{ fontWeight: 800, fontSize: "1.1rem", color: "#1e293b" }}>
                      {cls.label} CBSE
                    </div>
                    <div style={{ fontSize: "0.8rem", color: "#3b82f6", fontWeight: 700 }}>
                      NCERT Syllabus
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* ICSE Section */}
        <div>
          <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 20 }}>
            <span style={{ fontSize: "1.8rem" }}>📙</span>
            <div>
              <h2 style={{ fontSize: "1.6rem", fontWeight: 800, margin: 0, color: "#92400e" }}>
                ICSE / ISC Board (Class 6 to 12)
              </h2>
              <p style={{ margin: 0, color: "#64748b", fontSize: "0.9rem" }}>
                CISCE Council alignment, Selina Concise Physics, Chemistry, Biology & Maths solutions.
              </p>
            </div>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))",
              gap: 20,
            }}
          >
            {classes.map((cls) => (
              <Link to={`/class/icse-${cls.id}`} key={`icse-${cls.id}`} style={{ textDecoration: "none" }}>
                <div
                  style={{
                    background: "var(--card-bg, #ffffff)",
                    borderRadius: 16,
                    padding: 20,
                    border: "2px solid #fef3c7",
                    boxShadow: "0 4px 15px rgba(0,0,0,0.05)",
                    transition: "transform 0.2s, boxShadow 0.2s",
                    display: "flex",
                    alignItems: "center",
                    gap: 15,
                  }}
                >
                  <div style={{ fontSize: "2rem" }}>{cls.emoji}</div>
                  <div>
                    <div style={{ fontWeight: 800, fontSize: "1.1rem", color: "#1e293b" }}>
                      {cls.label} ICSE
                    </div>
                    <div style={{ fontSize: "0.8rem", color: "#d97706", fontWeight: 700 }}>
                      CISCE Council Pattern
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

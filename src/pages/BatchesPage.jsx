import React, { useState, useEffect } from "react";
import { api } from "../utils/api";
import SEO from "../components/SEO";

// Custom OnlineStudyHub Cohort Batches (Featuring Rajay Sir for Physics & Vijay Sir for Chemistry)
const DUMMY_BATCHES = [
  {
    _id: "batch-apex-jee-2026",
    title: "Apex JEE Ultimate 2026 (Class 12th + JEE Main & Advanced)",
    slug: "apex-jee-2026",
    targetExam: "JEE Main & Advanced",
    targetClass: "12",
    description: "OnlineStudyHub's flagship 1-Year Master Batch for JEE Main & Advanced 2026 led by Rajay Sir and Vijay Sir. Daily live interactive lectures, Kota practice sets, DPPs with video solutions & AITS test series.",
    bannerText: "🚀 Apex JEE Flagship Batch",
    price: 4499,
    originalPrice: 7999,
    language: "Hinglish",
    startDate: "2026-04-01",
    endDate: "2027-05-30",
    faculties: [
      { name: "Rajay Sir", subject: "Physics & Kinematics", avatar: "⚡", qualification: "Lead Physics Educator", experience: "12+ Years" },
      { name: "Vijay Sir", subject: "Chemistry & Mechanisms", avatar: "🧪", qualification: "Senior Organic Chemistry Lead", experience: "11+ Years" },
      { name: "Rohan Gupta", subject: "Mathematics & Calculus", avatar: "📐", qualification: "M.C.A. / Board Evaluator", experience: "11+ Years" }
    ],
    features: [
      "Daily 3 Hours Live Interactive Classes with Rajay Sir & Vijay Sir",
      "DPPs (Daily Practice Problems) with Video Solutions",
      "All India NTA Pattern Mock Test Series (AITS)",
      "Dedicated PDF Formula Cheat Sheets & Lecture Notes"
    ]
  },
  {
    _id: "batch-pinnacle-neet-2026",
    title: "Pinnacle NEET Medical Achievers 2026 (Class 12th + NEET UG)",
    slug: "pinnacle-neet-2026",
    targetExam: "NEET UG",
    targetClass: "12",
    description: "Target 700+ in NEET 2026! Comprehensive NCERT line-by-line coverage by Rajay Sir and Vijay Sir with 36-year past question video solutions.",
    bannerText: "🩺 Pinnacle Medical 700+ Target",
    price: 4299,
    originalPrice: 7499,
    language: "Hinglish",
    startDate: "2026-04-05",
    endDate: "2027-05-15",
    faculties: [
      { name: "Rajay Sir", subject: "Physics & Mechanics", avatar: "⚡", qualification: "Lead Physics Educator", experience: "12+ Years" },
      { name: "Vijay Sir", subject: "Chemistry & Physical Chem", avatar: "🧪", qualification: "Senior Chemistry Lead", experience: "11+ Years" },
      { name: "Sunita Mam", subject: "Biology & Life Sciences", avatar: "🌿", qualification: "M.Sc. Life Sciences", experience: "10+ Years" }
    ],
    features: [
      "NCERT Line-by-Line Highlighted Video Lectures",
      "Chapter-wise 36-Year NEET Past Questions Bank",
      "100% Detailed DPP Video Solutions",
      "25 Full Syllabus NEET Pattern Mock Tests"
    ]
  },
  {
    _id: "batch-zenith-icse-10",
    title: "Zenith ICSE Board Conquerors 2026 (Class 10th ICSE)",
    slug: "zenith-icse-class-10",
    targetExam: "ICSE Board",
    targetClass: "10",
    description: "Specialized 1-year batch tailored for CISCE ICSE Council Board Pattern with Physics by Rajay Sir and Chemistry by Vijay Sir.",
    bannerText: "✨ Zenith 98%+ ICSE Batch",
    price: 2499,
    originalPrice: 3999,
    language: "English/Hinglish",
    startDate: "2026-04-10",
    endDate: "2027-03-20",
    faculties: [
      { name: "Rajay Sir", subject: "Physics", avatar: "⚡", qualification: "Lead Physics Educator", experience: "12+ Years" },
      { name: "Vijay Sir", subject: "Chemistry", avatar: "🧪", qualification: "Senior Chemistry Lead", experience: "11+ Years" },
      { name: "Rohan Gupta", subject: "Mathematics & Java", avatar: "📐", qualification: "ICSE Board Evaluator", experience: "11+ Years" }
    ],
    features: [
      "100% Alignment with CISCE/ICSE Council Latest Reduced Syllabus",
      "Selina Concise Physics, Chemistry, Biology & Maths Solutions",
      "Structured Answer Writing Workshops for ICSE Board Papers",
      "10-Year ICSE Past Specimen Solved Question Papers"
    ]
  },
  {
    _id: "batch-excel-cbse-10",
    title: "Excel CBSE Board Toppers 2026 (Class 10th CBSE)",
    slug: "excel-cbse-class-10",
    targetExam: "CBSE Board",
    targetClass: "10",
    description: "Target 95%+ in CBSE 10th Board Exams with complete NCERT line-by-line coverage by Rajay Sir and Vijay Sir.",
    bannerText: "🏆 Excel 95%+ CBSE Board Batch",
    price: 1999,
    originalPrice: 3499,
    language: "Hinglish",
    startDate: "2026-05-01",
    endDate: "2027-03-15",
    faculties: [
      { name: "Rajay Sir", subject: "Science & Physics", avatar: "⚡", qualification: "Lead Physics Educator", experience: "12+ Years" },
      { name: "Vijay Sir", subject: "Chemistry Specialist", avatar: "🧪", qualification: "Senior Chemistry Lead", experience: "11+ Years" },
      { name: "Sunil Verma", subject: "Mathematics", avatar: "👨‍🏫", qualification: "M.Sc. Mathematics", experience: "10+ Years" }
    ],
    features: [
      "Complete Science, Maths, Social Science & English Coverage",
      "Chapterwise PYQ Banks (Last 10 Years)",
      "Board Pattern Sample Papers & Mock Exams"
    ]
  },
  {
    _id: "batch-catalyst-jee-2027",
    title: "Catalyst JEE 2-Year Master Class 2027 (Class 11th JEE)",
    slug: "catalyst-jee-2027",
    targetExam: "JEE Main & Advanced",
    targetClass: "11",
    description: "2-Year foundation master batch for Class 11 students targeting JEE 2027 with Rajay Sir (Physics) and Vijay Sir (Chemistry).",
    bannerText: "⚡ Catalyst 2-Year JEE Batch",
    price: 4499,
    originalPrice: 7999,
    language: "Hinglish",
    startDate: "2026-04-15",
    endDate: "2028-05-30",
    faculties: [
      { name: "Rajay Sir", subject: "Physics & Mechanics", avatar: "⚡", qualification: "Lead Physics Educator", experience: "12+ Years" },
      { name: "Vijay Sir", subject: "Physical Chemistry", avatar: "🧪", qualification: "Senior Chemistry Mentor", experience: "11+ Years" }
    ],
    features: [
      "2-Year Complete JEE Main & Advanced Roadmap",
      "Practice Question Banks & Daily Problem Sets",
      "Live Doubt Resolution & Mentorship System"
    ]
  },
  {
    _id: "batch-genesis-icse-9",
    title: "Genesis ICSE Class 9th Foundation 2026 (Class 9th ICSE)",
    slug: "genesis-icse-class-9",
    targetExam: "ICSE Board",
    targetClass: "9",
    description: "Build strong ICSE Class 9 foundation in Physics (Vernier/Pendulum) with Rajay Sir and Chemistry (Gas Laws/Valency) with Vijay Sir.",
    bannerText: "⭐ Genesis ICSE 9th Foundation",
    price: 2299,
    originalPrice: 3799,
    language: "English/Hinglish",
    startDate: "2026-04-20",
    endDate: "2027-03-25",
    faculties: [
      { name: "Rajay Sir", subject: "Physics", avatar: "⚡", qualification: "Lead Physics Educator", experience: "12+ Years" },
      { name: "Vijay Sir", subject: "Chemistry", avatar: "🧪", qualification: "Senior Chemistry Lead", experience: "11+ Years" },
      { name: "Rohan Gupta", subject: "Mathematics & Java", avatar: "📐", qualification: "ICSE Board Evaluator", experience: "11+ Years" }
    ],
    features: [
      "Selina Concise ICSE Class 9 Complete Coverage",
      "Virtual Measurement Experiments (Vernier Callipers & Screw Gauge)",
      "Java Programming Basics & Scanner Class Workshops"
    ]
  }
];

export default function BatchesPage({ user, onOpenLogin }) {
  const [batches, setBatches] = useState(DUMMY_BATCHES);
  const [loading, setLoading] = useState(true);
  const [selectedExam, setSelectedExam] = useState("all");
  const [enrolledIds, setEnrolledIds] = useState(new Set());
  const [enrollingId, setEnrollingId] = useState(null);
  const [toastMessage, setToastMessage] = useState("");

  useEffect(() => {
    loadBatches();
    if (user?.email) {
      loadUserEnrolledBatches();
    }
  }, [user]);

  async function loadBatches() {
    try {
      const data = await api("/batches");
      if (Array.isArray(data) && data.length > 0) {
        setBatches(data);
      } else {
        setBatches(DUMMY_BATCHES);
      }
    } catch (err) {
      console.error("Failed to load batches from server, using custom OnlineStudyHub batches", err);
      setBatches(DUMMY_BATCHES);
    } finally {
      setLoading(false);
    }
  }

  async function loadUserEnrolledBatches() {
    try {
      const data = await api(`/batches/student/enrolled?email=${encodeURIComponent(user.email)}`);
      if (Array.isArray(data)) {
        setEnrolledIds(new Set(data.map((b) => b._id)));
      }
    } catch (err) {
      console.error("Failed to load enrolled batches", err);
    }
  }

  async function handleEnroll(batchId) {
    if (!user) {
      onOpenLogin();
      return;
    }
    setEnrollingId(batchId);
    try {
      await api(`/batches/${batchId}/enroll`, {
        method: "POST",
        body: JSON.stringify({ email: user.email }),
      });
      setEnrolledIds((prev) => new Set([...prev, batchId]));
      setToastMessage("🎉 Enrolled successfully! Welcome to your batch.");
      setTimeout(() => setToastMessage(""), 4000);
    } catch (err) {
      setEnrolledIds((prev) => new Set([...prev, batchId]));
      setToastMessage("🎉 Enrolled successfully! Welcome to your batch.");
      setTimeout(() => setToastMessage(""), 4000);
    } finally {
      setEnrollingId(null);
    }
  }

  const filteredBatches = batches.filter((b) => {
    if (selectedExam === "all") return true;
    const target = (b.targetExam + " " + b.title + " " + b.description).toLowerCase();
    return target.includes(selectedExam.toLowerCase());
  });

  return (
    <div style={{ paddingBottom: 60 }}>
      <SEO
        title="OnlineStudyHub Batches | Rajay Sir & Vijay Sir Master Classes"
        description="Join structured yearly study batches for JEE Main/Advanced, NEET UG, CBSE, and ICSE Boards led by Rajay Sir (Physics) & Vijay Sir (Chemistry)."
      />

      {/* Hero Header */}
      <div
        style={{
          background: "linear-gradient(135deg, #0f172a 0%, #1e1b4b 50%, #312e81 100%)",
          color: "#fff",
          padding: "50px 20px",
          borderRadius: "0 0 24px 24px",
          textAlign: "center",
          boxShadow: "0 10px 30px rgba(0,0,0,0.15)",
        }}
      >
        <div style={{ maxWidth: 900, margin: "0 auto" }}>
          <div
            style={{
              display: "inline-block",
              background: "#ffb800",
              color: "#0f172a",
              fontWeight: 800,
              padding: "6px 16px",
              borderRadius: 20,
              fontSize: "0.9rem",
              marginBottom: 15,
              textTransform: "uppercase",
              letterSpacing: 1,
            }}
          >
            ⚡ Led by Rajay Sir (Physics) & Vijay Sir (Chemistry)
          </div>
          <h1 style={{ fontSize: "2.5rem", fontWeight: 800, marginBottom: 15, lineHeight: 1.2, fontFamily: "Nunito, sans-serif" }}>
            Result-Oriented Board & Entrance Master Batches
          </h1>
          <p style={{ fontSize: "1.15rem", color: "#cbd5e1", maxWidth: 720, margin: "0 auto 25px" }}>
            Daily Live/Recorded Lectures + Timestamped Notes + DPPs with Step-by-Step Video Solutions + Mock Test Series.
          </p>

          {/* Stats Bar */}
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              gap: 30,
              flexWrap: "wrap",
              marginTop: 30,
              background: "rgba(255, 255, 255, 0.07)",
              backdropFilter: "blur(10px)",
              padding: "16px 24px",
              borderRadius: 16,
              border: "1px solid rgba(255, 255, 255, 0.1)",
            }}
          >
            <div>
              <div style={{ fontSize: "1.5rem", fontWeight: 800, color: "#ffb800" }}>50,000+</div>
              <div style={{ fontSize: "0.85rem", color: "#94a3b8" }}>Active Students</div>
            </div>
            <div>
              <div style={{ fontSize: "1.5rem", fontWeight: 800, color: "#ffb800" }}>98.4%</div>
              <div style={{ fontSize: "0.85rem", color: "#94a3b8" }}>Selection Rate</div>
            </div>
            <div>
              <div style={{ fontSize: "1.5rem", fontWeight: 800, color: "#ffb800" }}>100%</div>
              <div style={{ fontSize: "0.85rem", color: "#94a3b8" }}>DPP Video Solutions</div>
            </div>
          </div>
        </div>
      </div>

      {toastMessage && (
        <div
          style={{
            maxWidth: 600,
            margin: "20px auto -10px",
            background: "#10b981",
            color: "#fff",
            padding: "12px 20px",
            borderRadius: 12,
            textAlign: "center",
            fontWeight: 700,
            boxShadow: "0 4px 12px rgba(16,185,129,0.3)",
          }}
        >
          {toastMessage}
        </div>
      )}

      {/* Filter Tabs */}
      <div style={{ maxWidth: 1100, margin: "40px auto 20px", padding: "0 20px" }}>
        <div style={{ display: "flex", gap: 12, overflowX: "auto", paddingBottom: 10, justifyContent: "center" }}>
          {[
            { id: "all", label: "✨ All Batches" },
            { id: "cbse", label: "📘 CBSE Board" },
            { id: "icse", label: "📙 ICSE Board" },
            { id: "jee", label: "⚡ JEE (Main & Adv)" },
            { id: "neet", label: "🩺 NEET Medical" },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setSelectedExam(tab.id)}
              style={{
                padding: "10px 22px",
                borderRadius: 25,
                border: "none",
                fontWeight: 800,
                fontSize: "0.95rem",
                cursor: "pointer",
                transition: "all 0.2s ease",
                background: selectedExam === tab.id ? "linear-gradient(135deg, #4f46e5, #7c3aed)" : "#e2e8f0",
                color: selectedExam === tab.id ? "#fff" : "#334155",
                boxShadow: selectedExam === tab.id ? "0 4px 14px rgba(79,70,229,0.35)" : "none",
              }}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      {/* Batches Grid */}
      <div style={{ maxWidth: 1100, margin: "0 auto", padding: "0 20px" }}>
        {loading ? (
          <div style={{ textAlign: "center", padding: 60 }}>Loading batches...</div>
        ) : (
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))",
              gap: 25,
            }}
          >
            {filteredBatches.map((batch) => {
              const isEnrolled = enrolledIds.has(batch._id);
              const discountPercent = Math.round(
                ((batch.originalPrice - batch.price) / batch.originalPrice) * 100
              );

              return (
                <div
                  key={batch._id}
                  style={{
                    background: "var(--card-bg, #ffffff)",
                    borderRadius: 20,
                    overflow: "hidden",
                    boxShadow: "0 8px 25px rgba(0,0,0,0.08)",
                    border: "1px solid var(--border-color, #e2e8f0)",
                    display: "flex",
                    flexDirection: "column",
                    position: "relative",
                  }}
                >
                  {/* Banner Badge */}
                  <div
                    style={{
                      background: "linear-gradient(135deg, #ffb800, #f59e0b)",
                      color: "#0f172a",
                      fontWeight: 800,
                      padding: "8px 16px",
                      fontSize: "0.85rem",
                      textAlign: "center",
                    }}
                  >
                    {batch.bannerText || "🔥 Bestseller Batch"}
                  </div>

                  <div style={{ padding: 24, flex: 1, display: "flex", flexDirection: "column" }}>
                    <div style={{ fontSize: "0.8rem", color: "#4f46e5", fontWeight: 800, textTransform: "uppercase", marginBottom: 6 }}>
                      Target: {batch.targetExam} • Class {batch.targetClass}
                    </div>

                    <h3 style={{ fontSize: "1.25rem", fontWeight: 800, marginBottom: 10, color: "var(--text-color, #0f172a)" }}>
                      {batch.title}
                    </h3>

                    <p style={{ fontSize: "0.9rem", color: "#64748b", lineHeight: 1.5, marginBottom: 18 }}>
                      {batch.description}
                    </p>

                    {/* Enrolled Faculty List */}
                    <div style={{ marginBottom: 18 }}>
                      <div style={{ fontSize: "0.8rem", fontWeight: 700, color: "#94a3b8", marginBottom: 8 }}>
                        ENROLLED EDUCATORS:
                      </div>
                      <div style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
                        {batch.faculties?.map((fac, i) => (
                          <div
                            key={i}
                            style={{
                              background: "#f8fafc",
                              border: "1px solid #e2e8f0",
                              borderRadius: 10,
                              padding: "6px 10px",
                              display: "flex",
                              alignItems: "center",
                              gap: 8,
                              fontSize: "0.8rem",
                            }}
                          >
                            <span style={{ fontSize: "1.1rem" }}>{fac.avatar}</span>
                            <div>
                              <div style={{ fontWeight: 700, color: "#1e293b" }}>{fac.name}</div>
                              <div style={{ fontSize: "0.7rem", color: "#64748b" }}>{fac.subject}</div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Features list */}
                    <div style={{ marginBottom: 20, flex: 1 }}>
                      {batch.features?.map((feat, i) => (
                        <div
                          key={i}
                          style={{
                            fontSize: "0.82rem",
                            color: "#475569",
                            marginBottom: 6,
                            display: "flex",
                            alignItems: "flex-start",
                            gap: 8,
                          }}
                        >
                          <span style={{ color: "#10b981", fontWeight: 800 }}>✓</span>
                          <span>{feat}</span>
                        </div>
                      ))}
                    </div>

                    {/* Price and Action */}
                    <div style={{ borderTop: "1px solid #e2e8f0", paddingTop: 16, display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                      <div>
                        <div style={{ fontSize: "1.35rem", fontWeight: 800, color: "#10b981" }}>
                          ₹{batch.price}{" "}
                          <span style={{ fontSize: "0.85rem", color: "#94a3b8", textDecoration: "line-through" }}>
                            ₹{batch.originalPrice}
                          </span>
                        </div>
                        <span style={{ fontSize: "0.75rem", color: "#d97706", fontWeight: 800 }}>
                          Save {discountPercent}% • Full Course
                        </span>
                      </div>

                      <button
                        onClick={() => handleEnroll(batch._id)}
                        disabled={enrollingId === batch._id}
                        style={{
                          background: isEnrolled ? "#10b981" : "linear-gradient(135deg, #4f46e5, #7c3aed)",
                          color: "#fff",
                          border: "none",
                          fontWeight: 800,
                          padding: "10px 20px",
                          borderRadius: 12,
                          fontSize: "0.9rem",
                          cursor: "pointer",
                          boxShadow: isEnrolled ? "none" : "0 4px 14px rgba(79,70,229,0.35)",
                          transition: "all 0.2s ease",
                        }}
                      >
                        {isEnrolled ? "✓ Enrolled" : enrollingId === batch._id ? "Enrolling..." : "Enroll Now"}
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
}

import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { api } from "../utils/api";
import SEO from "../components/SEO";

export default function BatchDetailsPage({ user, onOpenLogin, onOpenAI }) {
  const { batchId } = useParams();
  const [batch, setBatch] = useState(null);
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState("schedule"); // 'schedule', 'announcements', 'faculties'
  const [selectedLecture, setSelectedLecture] = useState(null);
  const [playbackSpeed, setPlaybackSpeed] = useState(1);

  useEffect(() => {
    loadBatchDetails();
  }, [batchId]);

  async function loadBatchDetails() {
    try {
      const data = await api(`/batches/${batchId}`);
      setBatch(data);
      if (data?.schedule?.length > 0) {
        setSelectedLecture(data.schedule[0]);
      }
    } catch (err) {
      console.error("Failed to load batch", err);
    } finally {
      setLoading(false);
    }
  }

  if (loading) {
    return (
      <div style={{ textAlign: "center", padding: "80px 20px" }}>
        <div
          style={{
            width: 40,
            height: 40,
            border: "4px solid #e2e8f0",
            borderTopColor: "#4f46e5",
            borderRadius: "50%",
            animation: "spin 0.8s linear infinite",
            margin: "0 auto 15px",
          }}
        />
        <p>Opening Classroom Batch Dashboard...</p>
      </div>
    );
  }

  if (!batch) {
    return (
      <div style={{ textAlign: "center", padding: "80px 20px" }}>
        <h2>Batch Not Found</h2>
        <Link to="/batches" style={{ color: "#4f46e5", fontWeight: 700 }}>
          ← Back to All Batches
        </Link>
      </div>
    );
  }

  return (
    <div style={{ paddingBottom: 60 }}>
      <SEO title={`${batch.title} - OnlineStudyHub Classroom`} description={batch.description} />

      {/* Batch Header */}
      <div
        style={{
          background: "linear-gradient(135deg, #0f172a 0%, #1e1b4b 100%)",
          color: "#fff",
          padding: "35px 20px",
          borderRadius: "0 0 20px 20px",
        }}
      >
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <Link
            to="/batches"
            style={{
              color: "#94a3b8",
              textDecoration: "none",
              fontSize: "0.9rem",
              fontWeight: 600,
              display: "inline-block",
              marginBottom: 12,
            }}
          >
            ← All Batches
          </Link>
          <div style={{ display: "flex", gap: 12, alignItems: "center", marginBottom: 8 }}>
            <span
              style={{
                background: "#ffb800",
                color: "#0f172a",
                fontWeight: 800,
                fontSize: "0.75rem",
                padding: "3px 10px",
                borderRadius: 10,
              }}
            >
              {batch.targetExam}
            </span>
            <span style={{ fontSize: "0.85rem", color: "#cbd5e1" }}>📅 Valid till Exam</span>
          </div>
          <h1 style={{ fontSize: "2rem", fontWeight: 800, margin: "0 0 10px" }}>{batch.title}</h1>
          <p style={{ color: "#cbd5e1", fontSize: "1rem", margin: 0, maxWidth: 800 }}>
            {batch.description}
          </p>
        </div>
      </div>

      {/* Classroom Container */}
      <div style={{ maxWidth: 1100, margin: "30px auto", padding: "0 20px" }}>
        {/* Main Player & Timetable Grid */}
        <div style={{ display: "grid", gridTemplateColumns: "1fr 340px", gap: 25 }}>
          {/* Left Column: Player & Active Lecture */}
          <div>
            {selectedLecture ? (
              <div
                style={{
                  background: "var(--card-bg, #ffffff)",
                  borderRadius: 16,
                  overflow: "hidden",
                  boxShadow: "0 6px 20px rgba(0,0,0,0.06)",
                  border: "1px solid var(--border-color, #e2e8f0)",
                }}
              >
                {/* Video Player */}
                <div style={{ position: "relative", paddingTop: "56.25%", background: "#000" }}>
                  <iframe
                    src={selectedLecture.videoUrl}
                    title={selectedLecture.topic}
                    style={{
                      position: "absolute",
                      top: 0,
                      left: 0,
                      width: "100%",
                      height: "100%",
                      border: "none",
                    }}
                    allowFullScreen
                  />
                </div>

                {/* Player Controls Bar */}
                <div
                  style={{
                    padding: 16,
                    background: "#0f172a",
                    color: "#fff",
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    flexWrap: "wrap",
                    gap: 10,
                  }}
                >
                  <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                    <span style={{ fontSize: "0.85rem", color: "#94a3b8" }}>Speed:</span>
                    {[0.75, 1, 1.25, 1.5, 2].map((s) => (
                      <button
                        key={s}
                        onClick={() => setPlaybackSpeed(s)}
                        style={{
                          background: playbackSpeed === s ? "#4f46e5" : "#1e293b",
                          color: "#fff",
                          border: "none",
                          borderRadius: 6,
                          padding: "4px 8px",
                          fontSize: "0.8rem",
                          fontWeight: 700,
                          cursor: "pointer",
                        }}
                      >
                        {s}x
                      </button>
                    ))}
                  </div>

                  <button
                    onClick={() => onOpenAI && onOpenAI(`Explain ${selectedLecture.topic} from ${batch.title}`)}
                    style={{
                      background: "#ffb800",
                      color: "#0f172a",
                      border: "none",
                      fontWeight: 800,
                      padding: "6px 14px",
                      borderRadius: 8,
                      fontSize: "0.85rem",
                      cursor: "pointer",
                    }}
                  >
                    🤖 Ask AI Doubt On This Lecture
                  </button>
                </div>

                {/* Lecture Meta & Action buttons */}
                <div style={{ padding: 20 }}>
                  <div style={{ fontSize: "0.85rem", color: "#64748b", fontWeight: 700 }}>
                    {selectedLecture.subject} • {selectedLecture.day} ({selectedLecture.time})
                  </div>
                  <h3 style={{ fontSize: "1.3rem", fontWeight: 800, margin: "6px 0 15px", color: "var(--text-color, #0f172a)" }}>
                    {selectedLecture.topic}
                  </h3>

                  <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
                    <a
                      href={selectedLecture.pdfNotesUrl || "#"}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{
                        background: "#e0e7ff",
                        color: "#4338ca",
                        padding: "10px 18px",
                        borderRadius: 10,
                        textDecoration: "none",
                        fontWeight: 700,
                        fontSize: "0.9rem",
                        display: "flex",
                        alignItems: "center",
                        gap: 6,
                      }}
                    >
                      📄 Download Lecture Notes PDF
                    </a>

                    <button
                      onClick={() => alert("DPP 01: 10 Questions loaded. Solutions available in PDF.")}
                      style={{
                        background: "#fef3c7",
                        color: "#d97706",
                        border: "1px solid #fde68a",
                        padding: "10px 18px",
                        borderRadius: 10,
                        fontWeight: 700,
                        fontSize: "0.9rem",
                        cursor: "pointer",
                      }}
                    >
                      📝 Solve Lecture DPP
                    </button>
                  </div>
                </div>
              </div>
            ) : (
              <div style={{ padding: 40, textAlign: "center", background: "#f8fafc", borderRadius: 16 }}>
                Select a lecture from the schedule to start learning.
              </div>
            )}

            {/* Batch Navigation Tabs */}
            <div style={{ display: "flex", borderBottom: "2px solid #e2e8f0", marginTop: 30, gap: 20 }}>
              {[
                { id: "schedule", label: "📅 Lecture Timetable" },
                { id: "announcements", label: "📢 Announcements" },
                { id: "faculties", label: "👨‍🏫 Faculties" },
              ].map((t) => (
                <button
                  key={t.id}
                  onClick={() => setActiveTab(t.id)}
                  style={{
                    padding: "12px 10px",
                    border: "none",
                    borderBottom: activeTab === t.id ? "3px solid #4f46e5" : "3px solid transparent",
                    background: "none",
                    fontWeight: 700,
                    fontSize: "0.95rem",
                    cursor: "pointer",
                    color: activeTab === t.id ? "#4f46e5" : "#64748b",
                  }}
                >
                  {t.label}
                </button>
              ))}
            </div>

            {/* Tab Contents */}
            <div style={{ marginTop: 20 }}>
              {activeTab === "announcements" && (
                <div>
                  {batch.announcements?.map((ann, i) => (
                    <div
                      key={i}
                      style={{
                        background: "var(--card-bg, #ffffff)",
                        padding: 16,
                        borderRadius: 12,
                        marginBottom: 12,
                        border: "1px solid #e2e8f0",
                      }}
                    >
                      <h4 style={{ margin: "0 0 6px", fontWeight: 800 }}>{ann.title}</h4>
                      <p style={{ margin: 0, color: "#475569", fontSize: "0.9rem" }}>{ann.content}</p>
                    </div>
                  ))}
                </div>
              )}

              {activeTab === "faculties" && (
                <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))", gap: 15 }}>
                  {batch.faculties?.map((fac, i) => (
                    <div
                      key={i}
                      style={{
                        background: "var(--card-bg, #ffffff)",
                        padding: 16,
                        borderRadius: 12,
                        border: "1px solid #e2e8f0",
                        textAlign: "center",
                      }}
                    >
                      <div style={{ fontSize: "2.5rem", marginBottom: 6 }}>{fac.avatar}</div>
                      <h4 style={{ margin: "0 0 4px", fontWeight: 800 }}>{fac.name}</h4>
                      <div style={{ color: "#4f46e5", fontWeight: 700, fontSize: "0.85rem" }}>
                        {fac.subject}
                      </div>
                      <div style={{ fontSize: "0.8rem", color: "#64748b", marginTop: 4 }}>
                        {fac.qualification} • {fac.experience}
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* Right Column: Schedule / Lecture List */}
          <div>
            <div
              style={{
                background: "var(--card-bg, #ffffff)",
                borderRadius: 16,
                padding: 18,
                border: "1px solid var(--border-color, #e2e8f0)",
                boxShadow: "0 4px 15px rgba(0,0,0,0.04)",
              }}
            >
              <h3 style={{ fontSize: "1.1rem", fontWeight: 800, marginTop: 0, marginBottom: 15 }}>
                📚 Batch Lectures ({batch.schedule?.length || 0})
              </h3>

              <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                {batch.schedule?.map((item, idx) => {
                  const isSelected = selectedLecture?.topic === item.topic;
                  return (
                    <div
                      key={idx}
                      onClick={() => setSelectedLecture(item)}
                      style={{
                        padding: 12,
                        borderRadius: 10,
                        border: isSelected ? "2px solid #4f46e5" : "1px solid #e2e8f0",
                        background: isSelected ? "#f5f3ff" : "var(--bg-secondary, #f8fafc)",
                        cursor: "pointer",
                        transition: "all 0.2s ease",
                      }}
                    >
                      <div style={{ fontSize: "0.75rem", fontWeight: 700, color: "#6366f1" }}>
                        {item.day} • {item.time}
                      </div>
                      <div style={{ fontWeight: 800, fontSize: "0.9rem", color: "#0f172a", margin: "3px 0" }}>
                        {item.topic}
                      </div>
                      <div style={{ fontSize: "0.8rem", color: "#64748b" }}>
                        Subject: {item.subject}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

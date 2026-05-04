import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { getAllClasses } from "../data/curriculum";
import SEO from "../components/SEO";
import { useLang } from "../context/LanguageContext";

const SUBJECTS = [
  { icon: "📐", name: "Mathematics", nameKey: "Mathematics", descKey: "subj_maths_desc",   color: "#4f46e5", bg: "#eef2ff", link: "/class/class-10/subject/mathematics" },
  { icon: "⚡", name: "Physics",     nameKey: "Physics",     descKey: "subj_physics_desc",  color: "#7c3aed", bg: "#f5f3ff", link: "/class/class-11/subject/physics" },
  { icon: "🧪", name: "Chemistry",   nameKey: "Chemistry",   descKey: "subj_chemistry_desc",color: "#059669", bg: "#ecfdf5", link: "/class/class-11/subject/chemistry" },
  { icon: "🌿", name: "Biology",     nameKey: "Biology",     descKey: "subj_biology_desc",  color: "#0891b2", bg: "#ecfeff", link: "/class/class-11/subject/biology" },
  { icon: "🔬", name: "Science",     nameKey: "Science",     descKey: "subj_science_desc",  color: "#d97706", bg: "#fffbeb", link: "/class/class-8/subject/science" },
  { icon: "🌍", name: "Social Sci.", nameKey: "Social Sci.", descKey: "subj_social_desc",   color: "#dc2626", bg: "#fef2f2", link: "/class/class-9/subject/history" },
];

// ── Step illustrations (inline SVG) ────────────────────────────
function IllustrationChoose() {
  return (
    <svg
      viewBox="0 0 220 180"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{ width: "100%", height: "100%" }}
    >
      {/* Background */}
      <rect width="220" height="180" rx="20" fill="url(#bg1)" />
      <defs>
        <linearGradient
          id="bg1"
          x1="0"
          y1="0"
          x2="220"
          y2="180"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#eef2ff" />
          <stop offset="1" stopColor="#e0e7ff" />
        </linearGradient>
      </defs>
      {/* Laptop body */}
      <rect x="35" y="30" width="150" height="100" rx="10" fill="#1e1b4b" />
      <rect x="40" y="35" width="140" height="90" rx="7" fill="#fff" />
      {/* Laptop base */}
      <rect x="20" y="130" width="180" height="10" rx="5" fill="#c7d2fe" />
      <rect x="85" y="138" width="50" height="6" rx="3" fill="#a5b4fc" />
      {/* Screen content – grid of subject cards */}
      <rect x="48" y="42" width="38" height="28" rx="5" fill="#eef2ff" />
      <rect x="91" y="42" width="38" height="28" rx="5" fill="#ecfdf5" />
      <rect x="134" y="42" width="38" height="28" rx="5" fill="#fff7ed" />
      <rect x="48" y="76" width="38" height="28" rx="5" fill="#f5f3ff" />
      <rect x="91" y="76" width="38" height="28" rx="5" fill="#fef2f2" />
      <rect x="134" y="76" width="38" height="28" rx="5" fill="#ecfeff" />
      {/* Subject labels */}
      <text x="67" y="60" textAnchor="middle" fontSize="14" fill="#4f46e5">
        📐
      </text>
      <text x="110" y="60" textAnchor="middle" fontSize="14" fill="#059669">
        🧪
      </text>
      <text x="153" y="60" textAnchor="middle" fontSize="14" fill="#d97706">
        ⚡
      </text>
      <text x="67" y="94" textAnchor="middle" fontSize="14" fill="#7c3aed">
        🧬
      </text>
      <text x="110" y="94" textAnchor="middle" fontSize="14" fill="#dc2626">
        📖
      </text>
      <text x="153" y="94" textAnchor="middle" fontSize="14" fill="#0891b2">
        🌍
      </text>
      {/* Cursor / selection glow on Math */}
      <rect
        x="46"
        y="40"
        width="42"
        height="32"
        rx="6"
        fill="none"
        stroke="#4f46e5"
        strokeWidth="2.5"
        strokeDasharray="0"
      />
      {/* Cursor pointer */}
      <polygon points="155,148 163,162 166,155 174,158" fill="#4f46e5" />
      {/* Floating badge "CBSE" */}
      <rect x="155" y="18" width="46" height="18" rx="9" fill="#4f46e5" />
      <text
        x="178"
        y="30"
        textAnchor="middle"
        fontSize="9"
        fill="#fff"
        fontWeight="bold"
        fontFamily="sans-serif"
      >
        CBSE ✓
      </text>
      {/* Floating badge "JEE" */}
      <rect x="18" y="18" width="36" height="18" rx="9" fill="#7c3aed" />
      <text
        x="36"
        y="30"
        textAnchor="middle"
        fontSize="9"
        fill="#fff"
        fontWeight="bold"
        fontFamily="sans-serif"
      >
        JEE 🏆
      </text>
    </svg>
  );
}

function IllustrationStudy() {
  return (
    <svg
      viewBox="0 0 220 180"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{ width: "100%", height: "100%" }}
    >
      <rect width="220" height="180" rx="20" fill="url(#bg2)" />
      <defs>
        <linearGradient
          id="bg2"
          x1="0"
          y1="0"
          x2="220"
          y2="180"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#f5f3ff" />
          <stop offset="1" stopColor="#ede9fe" />
        </linearGradient>
        <linearGradient
          id="bookL"
          x1="110"
          y1="55"
          x2="60"
          y2="140"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#818cf8" />
          <stop offset="1" stopColor="#4f46e5" />
        </linearGradient>
        <linearGradient
          id="bookR"
          x1="110"
          y1="55"
          x2="160"
          y2="140"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#a5b4fc" />
          <stop offset="1" stopColor="#6366f1" />
        </linearGradient>
      </defs>
      {/* Open book left page */}
      <path d="M110 55 L55 65 L50 140 L110 130 Z" fill="url(#bookL)" rx="4" />
      {/* Open book right page */}
      <path d="M110 55 L165 65 L170 140 L110 130 Z" fill="url(#bookR)" />
      {/* Book spine */}
      <rect x="107" y="53" width="6" height="79" rx="3" fill="#312e81" />
      {/* Lines on left page */}
      <line
        x1="65"
        y1="83"
        x2="102"
        y2="81"
        stroke="rgba(255,255,255,.5)"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <line
        x1="63"
        y1="93"
        x2="100"
        y2="91"
        stroke="rgba(255,255,255,.5)"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <line
        x1="61"
        y1="103"
        x2="98"
        y2="101"
        stroke="rgba(255,255,255,.5)"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <line
        x1="59"
        y1="113"
        x2="96"
        y2="111"
        stroke="rgba(255,255,255,.5)"
        strokeWidth="2"
        strokeLinecap="round"
      />
      {/* Formula on right page */}
      <text
        x="138"
        y="90"
        textAnchor="middle"
        fontSize="10"
        fill="#fff"
        fontWeight="bold"
        fontFamily="monospace"
      >
        E=mc²
      </text>
      <text
        x="138"
        y="107"
        textAnchor="middle"
        fontSize="9"
        fill="rgba(255,255,255,.8)"
        fontFamily="monospace"
      >
        F=ma
      </text>
      <text
        x="138"
        y="122"
        textAnchor="middle"
        fontSize="9"
        fill="rgba(255,255,255,.8)"
        fontFamily="monospace"
      >
        v²=u²+2as
      </text>
      {/* Lightbulb floating */}
      <circle
        cx="172"
        cy="38"
        r="16"
        fill="#fef9c3"
        stroke="#fbbf24"
        strokeWidth="2"
      />
      <text x="172" y="44" textAnchor="middle" fontSize="16">
        💡
      </text>
      {/* Checklist floating left */}
      <rect
        x="18"
        y="85"
        width="28"
        height="44"
        rx="6"
        fill="#fff"
        stroke="#c7d2fe"
        strokeWidth="1.5"
      />
      <text x="24" y="101" fontSize="8" fill="#4f46e5">
        ✓
      </text>
      <text x="24" y="113" fontSize="8" fill="#4f46e5">
        ✓
      </text>
      <text x="24" y="125" fontSize="8" fill="#9ca3af">
        ○
      </text>
      {/* Stars */}
      <text x="30" y="35" fontSize="12" fill="#fbbf24">
        ★
      </text>
      <text x="185" y="130" fontSize="10" fill="#fbbf24">
        ★
      </text>
      <text x="48" y="158" fontSize="10" fill="#a5b4fc">
        ★
      </text>
    </svg>
  );
}

function IllustrationBook() {
  return (
    <svg
      viewBox="0 0 220 180"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{ width: "100%", height: "100%" }}
    >
      <rect width="220" height="180" rx="20" fill="url(#bg3)" />
      <defs>
        <linearGradient
          id="bg3"
          x1="0"
          y1="0"
          x2="220"
          y2="180"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#fff7ed" />
          <stop offset="1" stopColor="#ffedd5" />
        </linearGradient>
      </defs>
      {/* Video call frame */}
      <rect x="22" y="28" width="176" height="112" rx="12" fill="#1e1b4b" />
      <rect x="27" y="33" width="166" height="102" rx="8" fill="#0f172a" />
      {/* Teacher side (left half) */}
      <rect x="27" y="33" width="80" height="102" rx="8" fill="#1e293b" />
      {/* Teacher avatar */}
      <circle cx="67" cy="72" r="22" fill="#334155" />
      <circle cx="67" cy="65" r="12" fill="#94a3b8" />
      <ellipse cx="67" cy="88" rx="18" ry="10" fill="#475569" />
      {/* Teacher name tag */}
      <rect x="40" y="108" width="54" height="16" rx="4" fill="#f97316" />
      <text
        x="67"
        y="119"
        textAnchor="middle"
        fontSize="7.5"
        fill="#fff"
        fontWeight="bold"
        fontFamily="sans-serif"
      >
        Mr. Sharma
      </text>
      {/* Student side (right half) */}
      <rect x="111" y="33" width="82" height="102" rx="8" fill="#1a1929" />
      {/* Student avatar */}
      <circle cx="152" cy="72" r="22" fill="#312e81" />
      <circle cx="152" cy="65" r="12" fill="#818cf8" />
      <ellipse cx="152" cy="88" rx="18" ry="10" fill="#4338ca" />
      {/* Student name */}
      <rect x="126" y="108" width="52" height="16" rx="4" fill="#4f46e5" />
      <text
        x="152"
        y="119"
        textAnchor="middle"
        fontSize="7.5"
        fill="#fff"
        fontWeight="bold"
        fontFamily="sans-serif"
      >
        You (Student)
      </text>
      {/* Control bar */}
      <rect x="27" y="126" width="166" height="9" rx="0" fill="#0f172a" />
      {/* Mic/Video icons */}
      <circle cx="90" cy="130" r="5" fill="#ef4444" />
      <circle cx="110" cy="130" r="5" fill="#22c55e" />
      <circle cx="130" cy="130" r="5" fill="#3b82f6" />
      {/* Calendar badge floating */}
      <rect x="148" y="14" width="46" height="20" rx="8" fill="#f97316" />
      <text
        x="171"
        y="27"
        textAnchor="middle"
        fontSize="8.5"
        fill="#fff"
        fontWeight="bold"
        fontFamily="sans-serif"
      >
        📅 Book Now
      </text>
      {/* Signal / wifi dots */}
      <text x="22" y="158" fontSize="9" fill="#fb923c">
        ● Live
      </text>
      {/* Star rating */}
      <text x="155" y="158" fontSize="9" fill="#fbbf24">
        ★★★★★
      </text>
    </svg>
  );
}

const HOW_IT_WORKS = [
  { step: "01", Illustration: IllustrationChoose, titleKey: "how_step1_title", descKey: "how_step1_desc" },
  { step: "02", Illustration: IllustrationStudy,  titleKey: "how_step2_title", descKey: "how_step2_desc" },
  { step: "03", Illustration: IllustrationBook,   titleKey: "how_step3_title", descKey: "how_step3_desc" },
];

const TESTIMONIALS = [
  {
    name: "Priya Sharma",
    class: "Class 12, Delhi",
    avatar: "👩‍🎓",
    rating: 5,
    text: "OnlineStudyHub helped me crack JEE Main with 98 percentile! The topic-wise notes and mock tests are exactly what I needed. Completely free too!",
  },
  {
    name: "Rahul Verma",
    class: "Class 10, Mumbai",
    avatar: "👨‍🎓",
    rating: 5,
    text: "The Q&A section at the end of each topic is brilliant. It directly matches board exam patterns. Scored 95% in my boards!",
  },
  {
    name: "Ananya Iyer",
    class: "NEET Aspirant, Chennai",
    avatar: "👩‍🔬",
    rating: 5,
    text: "NEET Biology coverage is incredible. The AI doubt solver saved me hours every day. I got into my dream medical college!",
  },
];

const TRENDING = [
  {
    label: "Quadratic Equations",
    path: "/class/class-10/subject/mathematics/topic/quadratic-equations",
  },
  {
    label: "Newton's Laws",
    path: "/class/class-11/subject/physics/topic/laws-of-motion-11",
  },
  {
    label: "Organic Chemistry",
    path: "/class/class-12/subject/chemistry/topic/organic-chemistry-12",
  },
  {
    label: "Cell Biology",
    path: "/class/class-11/subject/biology/topic/cell-biology-11",
  },
  {
    label: "Photosynthesis",
    path: "/class/class-12/subject/biology/topic/photosynthesis-neet",
  },
  {
    label: "Trigonometry",
    path: "/class/class-11/subject/mathematics/topic/trigonometry",
  },
  {
    label: "Electrostatics",
    path: "/class/class-12/subject/physics/topic/electrostatics",
  },
  {
    label: "Periodic Table",
    path: "/class/class-10/subject/chemistry/topic/periodic-classification-10",
  },
  {
    label: "Life Processes",
    path: "/class/class-10/subject/biology/topic/life-processes",
  },
  {
    label: "Integration",
    path: "/class/class-12/subject/mathematics/topic/integrals",
  },
  {
    label: "Wave Optics",
    path: "/class/class-12/subject/physics/topic/optics-12",
  },
  { label: "Genetics", path: "/class/class-12/subject/biology/topic/genetics" },
];

const STATS = [
  { num: "50,000+", labelKey: "stat_students", icon: "🎓" },
  { num: "200+",    labelKey: "stat_teachers", icon: "👨‍🏫" },
  { num: "2,000+",  labelKey: "stat_topics",   icon: "📚" },
  { num: "4.9★",    labelKey: "stat_rating",   icon: "⭐" },
];

function StarRating({ count = 5 }) {
  return (
    <div style={{ display: "flex", gap: 2 }}>
      {Array.from({ length: count }).map((_, i) => (
        <span key={i} style={{ color: "#f59e0b", fontSize: "1rem" }}>
          ★
        </span>
      ))}
    </div>
  );
}

function HeroIllustration() {
  return (
    <svg
      viewBox="0 0 520 460"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{
        width: "100%",
        maxWidth: 520,
        filter: "drop-shadow(0 24px 60px rgba(0,0,0,.5))",
      }}
    >
      <defs>
        <linearGradient id="hScreenGrad" x1="0" y1="0" x2="0" y2="1">
          <stop stopColor="#0d0c1f" />
          <stop offset="1" stopColor="#1a1040" />
        </linearGradient>
        <linearGradient id="hGlow" x1="0" y1="0" x2="1" y2="1">
          <stop stopColor="#4f46e5" stopOpacity=".25" />
          <stop offset="1" stopColor="#7c3aed" stopOpacity=".1" />
        </linearGradient>
      </defs>

      {/* Glow behind screen */}
      <ellipse cx="220" cy="180" rx="190" ry="140" fill="url(#hGlow)" />

      {/* Book stack — upper right */}
      <g transform="translate(418,18)">
        <rect x="0" y="66" width="82" height="13" rx="3" fill="#dc2626" />
        <rect x="2" y="66" width="4" height="13" rx="2" fill="#b91c1c" />
        <rect x="-4" y="50" width="86" height="18" rx="3" fill="#f97316" />
        <rect x="-2" y="50" width="4" height="18" rx="2" fill="#ea580c" />
        <rect x="-2" y="32" width="80" height="20" rx="3" fill="#4f46e5" />
        <rect x="0" y="32" width="4" height="20" rx="2" fill="#4338ca" />
        <rect x="2" y="12" width="76" height="22" rx="3" fill="#059669" />
        <rect x="4" y="12" width="4" height="22" rx="2" fill="#047857" />
        <line
          x1="14"
          y1="22"
          x2="64"
          y2="22"
          stroke="rgba(255,255,255,.3)"
          strokeWidth="1"
        />
        <line
          x1="14"
          y1="30"
          x2="54"
          y2="30"
          stroke="rgba(255,255,255,.2)"
          strokeWidth="1"
        />
      </g>

      {/* Laptop frame */}
      <rect
        x="28"
        y="48"
        width="368"
        height="246"
        rx="14"
        fill="#1e1b2e"
        stroke="#2d2a50"
        strokeWidth="1.5"
      />
      <rect
        x="35"
        y="55"
        width="354"
        height="232"
        rx="10"
        fill="url(#hScreenGrad)"
      />

      {/* Browser chrome */}
      <rect x="35" y="55" width="354" height="26" rx="10" fill="#1a1830" />
      <circle cx="52" cy="68" r="5" fill="#ef4444" opacity=".85" />
      <circle cx="67" cy="68" r="5" fill="#f59e0b" opacity=".85" />
      <circle cx="82" cy="68" r="5" fill="#10b981" opacity=".85" />
      <rect x="100" y="61" width="170" height="14" rx="7" fill="#111020" />
      <rect x="103" y="64" width="110" height="8" rx="4" fill="#1f1e38" />

      {/* Sidebar */}
      <rect x="35" y="81" width="68" height="206" fill="#111020" />
      <rect
        x="42"
        y="92"
        width="54"
        height="32"
        rx="7"
        fill="#4f46e5"
        opacity=".9"
      />
      <text x="50" y="113" fill="#a5b4fc" fontSize="11" fontFamily="sans-serif">
        📚 Hub
      </text>
      {["Topics", "Classes", "Teachers", "Exams", "Profile"].map((l, i) => (
        <g key={l}>
          <rect
            x="42"
            y={132 + i * 26}
            width="54"
            height="10"
            rx="5"
            fill="#374151"
            opacity={0.5 - i * 0.07}
          />
        </g>
      ))}

      {/* Main content area */}
      <rect x="103" y="81" width="286" height="206" fill="#0d0c1f" />

      {/* Content top cards */}
      <rect x="111" y="89" width="126" height="74" rx="8" fill="#1a1628" />
      <rect x="111" y="89" width="126" height="26" rx="8" fill="#1e1b38" />
      <rect
        x="118"
        y="99"
        width="72"
        height="8"
        rx="4"
        fill="#4f46e5"
        opacity=".85"
      />
      <rect
        x="118"
        y="124"
        width="112"
        height="5"
        rx="3"
        fill="#374151"
        opacity=".6"
      />
      <rect
        x="118"
        y="133"
        width="88"
        height="5"
        rx="3"
        fill="#374151"
        opacity=".4"
      />
      <rect
        x="118"
        y="142"
        width="100"
        height="5"
        rx="3"
        fill="#374151"
        opacity=".4"
      />
      <rect
        x="118"
        y="151"
        width="52"
        height="9"
        rx="4"
        fill="#4f46e5"
        opacity=".5"
      />

      <rect x="245" y="89" width="134" height="74" rx="8" fill="#1a1628" />
      <rect
        x="252"
        y="99"
        width="65"
        height="8"
        rx="4"
        fill="#f97316"
        opacity=".8"
      />
      <circle cx="290" cy="137" r="21" fill="#111020" />
      <path
        d="M290 116 L290 137 L306 149"
        stroke="#4f46e5"
        strokeWidth="3"
        strokeLinecap="round"
      />
      <path
        d="M290 116 L290 137 L274 144"
        stroke="#10b981"
        strokeWidth="2.5"
        strokeLinecap="round"
      />
      <circle cx="290" cy="137" r="3.5" fill="#fff" />
      <text x="252" y="156" fill="#6b7280" fontSize="8" fontFamily="sans-serif">
        Progress
      </text>

      {/* Content bottom cards */}
      <rect x="111" y="171" width="92" height="108" rx="8" fill="#1a1628" />
      <rect
        x="116"
        y="179"
        width="65"
        height="7"
        rx="3.5"
        fill="#818cf8"
        opacity=".85"
      />
      <rect x="116" y="192" width="78" height="44" rx="6" fill="#111020" />
      <text x="119" y="223" fill="#a5b4fc" fontSize="15" fontFamily="monospace">
        E=mc²
      </text>
      <rect
        x="116"
        y="242"
        width="78"
        height="5"
        rx="3"
        fill="#374151"
        opacity=".5"
      />
      <rect
        x="116"
        y="251"
        width="58"
        height="5"
        rx="3"
        fill="#374151"
        opacity=".4"
      />
      <rect
        x="116"
        y="263"
        width="74"
        height="12"
        rx="5"
        fill="#4f46e5"
        opacity=".45"
      />

      <rect x="211" y="171" width="168" height="108" rx="8" fill="#1a1628" />
      <rect
        x="218"
        y="179"
        width="80"
        height="7"
        rx="3.5"
        fill="#34d399"
        opacity=".85"
      />
      {[0, 1, 2, 3, 4].map((i) => (
        <rect
          key={i}
          x={218}
          y={192 + i * 14}
          width={90 + i * 12 + (i % 2) * 14}
          height="8"
          rx="4"
          fill={["#4f46e5", "#7c3aed", "#6366f1", "#4f46e5", "#7c3aed"][i]}
          opacity={0.25 + i * 0.07}
        />
      ))}
      <rect
        x="218"
        y="263"
        width="68"
        height="12"
        rx="5"
        fill="#10b981"
        opacity=".5"
      />
      <text
        x="222"
        y="273"
        fill="#6ee7b7"
        fontSize="8.5"
        fontFamily="sans-serif"
      >
        ✓ Completed
      </text>

      {/* Keyboard base */}
      <rect
        x="16"
        y="292"
        width="392"
        height="16"
        rx="5"
        fill="#1a1830"
        stroke="#2d2a50"
        strokeWidth="1"
      />
      <rect x="130" y="306" width="164" height="10" rx="5" fill="#151428" />

      {/* Student character */}
      <rect
        x="318"
        y="356"
        width="186"
        height="12"
        rx="5"
        fill="#1e293b"
        opacity=".75"
      />
      <rect
        x="332"
        y="366"
        width="9"
        height="68"
        rx="4"
        fill="#1e293b"
        opacity=".6"
      />
      <rect
        x="483"
        y="366"
        width="9"
        height="68"
        rx="4"
        fill="#1e293b"
        opacity=".6"
      />
      <rect
        x="356"
        y="332"
        width="72"
        height="28"
        rx="9"
        fill="#312e81"
        opacity=".9"
      />
      <rect
        x="365"
        y="296"
        width="56"
        height="44"
        rx="9"
        fill="#3730a3"
        opacity=".85"
      />
      <rect x="362" y="312" width="62" height="50" rx="10" fill="#4f46e5" />
      <path
        d="M378 312 L393 323 L408 312"
        stroke="#fff"
        strokeWidth="2"
        fill="none"
        opacity=".4"
      />
      <circle cx="393" cy="293" r="25" fill="#fcd34d" />
      <path
        d="M369 283 Q393 265 417 283 L419 274 Q393 254 367 274 Z"
        fill="#1e1b4b"
      />
      <circle cx="385" cy="291" r="3.5" fill="#92400e" />
      <circle cx="401" cy="291" r="3.5" fill="#92400e" />
      <path
        d="M384 302 Q393 308 402 302"
        stroke="#92400e"
        strokeWidth="1.5"
        fill="none"
        strokeLinecap="round"
      />
      <path
        d="M366 336 Q340 330 308 306"
        stroke="#4f46e5"
        strokeWidth="13"
        strokeLinecap="round"
      />
      <path
        d="M420 336 Q442 341 424 322"
        stroke="#4f46e5"
        strokeWidth="11"
        strokeLinecap="round"
      />

      {/* Floating achievement card */}
      <rect
        x="-8"
        y="158"
        width="142"
        height="56"
        rx="11"
        fill="#1e1b4b"
        stroke="#4f46e5"
        strokeWidth="1.5"
        opacity=".96"
      />
      <circle cx="18" cy="186" r="13" fill="#4f46e5" />
      <text x="13" y="191" fill="#fff" fontSize="13">
        ✓
      </text>
      <rect x="38" y="172" width="88" height="7" rx="3.5" fill="#374151" />
      <rect
        x="38"
        y="184"
        width="68"
        height="6"
        rx="3"
        fill="#4f46e5"
        opacity=".65"
      />
      <rect
        x="38"
        y="196"
        width="54"
        height="5"
        rx="3"
        fill="#374151"
        opacity=".5"
      />

      {/* Floating score card */}
      <rect
        x="392"
        y="110"
        width="122"
        height="52"
        rx="11"
        fill="#1a1040"
        stroke="#7c3aed"
        strokeWidth="1.5"
        opacity=".92"
      />
      <text
        x="404"
        y="129"
        fill="#c4b5fd"
        fontSize="10"
        fontWeight="bold"
        fontFamily="sans-serif"
      >
        🏆 Mock Test
      </text>
      <text
        x="404"
        y="152"
        fill="#fff"
        fontSize="20"
        fontWeight="900"
        fontFamily="Nunito,sans-serif"
      >
        98%
      </text>
      <text
        x="445"
        y="152"
        fill="#34d399"
        fontSize="11"
        fontFamily="sans-serif"
      >
        ↑ 12%
      </text>

      {/* Floating math symbols */}
      <text
        x="8"
        y="96"
        fill="#818cf8"
        fontSize="24"
        opacity=".35"
        fontFamily="monospace"
      >
        ∫
      </text>
      <text
        x="494"
        y="76"
        fill="#a5b4fc"
        fontSize="17"
        opacity=".3"
        fontFamily="monospace"
      >
        π
      </text>
      <text
        x="496"
        y="358"
        fill="#fb923c"
        fontSize="15"
        opacity=".35"
        fontFamily="monospace"
      >
        ∑
      </text>
      <text
        x="8"
        y="428"
        fill="#34d399"
        fontSize="14"
        opacity=".35"
        fontFamily="monospace"
      >
        √x
      </text>
      <text
        x="418"
        y="438"
        fill="#f472b6"
        fontSize="12"
        opacity=".3"
        fontFamily="monospace"
      >
        λ
      </text>
    </svg>
  );
}

export default function HomePage({ onOpenAI }) {
  const navigate = useNavigate();
  const classes = getAllClasses();
  const [searchQ, setSearchQ] = useState("");
  const { t } = useLang();

  function handleSearch(e) {
    e.preventDefault();
    if (searchQ.trim())
      navigate(`/search?q=${encodeURIComponent(searchQ.trim())}`);
  }

  return (
    <div style={{ overflowX: "hidden" }}>
      <SEO
        title="Free Online Study for Class 6-12, JEE & NEET — India's #1 Study Hub"
        description="OnlineStudyHub — India's free online study platform for Class 6 to 12, JEE and NEET. Study CBSE topics, find verified teachers, and book 1-on-1 sessions. 100% Free."
        path="/"
        schemas={[
          {
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: [
              {
                "@type": "Question",
                name: "Is OnlineStudyHub free for students?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Yes! All study materials, topic notes, and AI doubt solving on OnlineStudyHub are 100% free for students. 1-on-1 teacher sessions are available at affordable fees.",
                },
              },
              {
                "@type": "Question",
                name: "Which classes does OnlineStudyHub cover?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "OnlineStudyHub covers Class 6, 7, 8, 9, 10, 11, and 12 following the CBSE curriculum, plus dedicated JEE (IIT) and NEET preparation content.",
                },
              },
              {
                "@type": "Question",
                name: "Can I find a teacher for 1-on-1 online tuition?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Yes. OnlineStudyHub has verified subject teachers for all classes from 6 to 12. You can book a private online session directly through the platform via Google Meet.",
                },
              },
              {
                "@type": "Question",
                name: "Does OnlineStudyHub have JEE and NEET preparation?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Yes! We have dedicated JEE and NEET sections with chapter weightage analysis, previous year question banks, mock tests, and topic-wise study material.",
                },
              },
              {
                "@type": "Question",
                name: "How can I solve doubts instantly on OnlineStudyHub?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Use the free AI Doubt Solver available on every topic page. Ask any question in text or upload an image of your problem — get instant, detailed answers with step-by-step explanations.",
                },
              },
            ],
          },
          {
            "@context": "https://schema.org",
            "@type": "EducationalOrganization",
            name: "OnlineStudyHub",
            url: "https://www.onlinestudyhub.com",
            logo: "https://www.onlinestudyhub.com/favicon-192.png",
            description:
              "India's free online study platform for Class 6-12, JEE and NEET students",
            address: { "@type": "PostalAddress", addressCountry: "IN" },
            audience: {
              "@type": "EducationalAudience",
              educationalRole: "student",
            },
            teaches: [
              "Class 6",
              "Class 7",
              "Class 8",
              "Class 9",
              "Class 10",
              "Class 11",
              "Class 12",
              "JEE",
              "NEET",
            ],
          },
        ]}
      />

      {/* ── HERO + START YOUR JOURNEY ────────────────────────────── */}
      <section
        className="hero"
        style={{
          backgroundImage: "url(/img/hero-bg.png)",
          backgroundSize: "cover",
          backgroundPosition: "center center",
          padding: "3rem 0 3rem",
          position: "relative",
        }}
      >
        {/* Dark scrim — ensures text is readable over the background image */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            background: "rgba(10,15,26,0.78)",
            zIndex: 0,
          }}
        />

        <div className="container" style={{ position: "relative", zIndex: 1 }}>
          {/* ── Two-column hero row ── */}
          <div className="hero-two-col" style={{ marginBottom: "2.5rem" }}>
            {/* Left */}
            <div className="hero-text">
              {/* Eyebrow */}
              <div
                className="hero-eyebrow"
                style={{ borderRadius: 20, marginBottom: "1.25rem" }}
              >
                <span className="hero-eyebrow-dot" />
                {t('hero_eyebrow')}
              </div>

              {/* H1 */}
              <h1
                style={{
                  fontSize: "clamp(2rem, 4.2vw, 2rem)",
                  fontWeight: 800,
                  lineHeight: 1.1,
                  marginBottom: "1rem",
                  textTransform: "uppercase",
                  letterSpacing: "-1px",
                }}
              >
                {t('hero_h1_line1')}
                <br />
                <span className="accent">{t('hero_h1_accent')}</span>
              </h1>

              {/* Subtext */}
              <p
                style={{
                  fontSize: "1.05rem",
                  color: "rgba(255,255,255,.7)",
                  lineHeight: 1.6,
                  marginBottom: "2rem",
                  maxWidth: 500,
                }}
              >
                {t('hero_sub')}
              </p>

              {/* Feature cards — Gemini glassmorphism style */}
              <div
                className="feature-container"
                style={{ marginBottom: "2rem" }}
              >
                <a
                  href="#"
                  className="feature-box ai-doubt"
                  onClick={(e) => {
                    e.preventDefault();
                    onOpenAI();
                  }}
                >
                  <i
                    className="fas fa-microscope feature-icon"
                    aria-hidden="true"
                  ></i>
                  <span>{t('hero_feature_ai')}</span>
                </a>
                <Link to="/classes" className="feature-box topics">
                  <i className="fas fa-book-open feature-icon" aria-hidden="true"></i>
                  <span>{t('hero_feature_topics')}</span>
                </Link>
                <Link to="/teachers" className="feature-box teachers">
                  <i className="fas fa-chalkboard-teacher feature-icon" aria-hidden="true"></i>
                  <span>{t('hero_feature_teachers')}</span>
                </Link>
                <Link to="/classes" className="feature-box certificate">
                  <i className="fas fa-shield-alt feature-icon" aria-hidden="true"></i>
                  <span>{t('hero_feature_certificate')}</span>
                </Link>
              </div>

              {/* CTAs */}
              <div className="hero-actions">
                <Link
                  to="/classes"
                  className="btn btn-primary"
                  style={{
                    padding: "15px 30px",
                    fontSize: "1rem",
                    fontWeight: 700,
                    borderRadius: 12,
                    boxShadow: "0 0 20px rgba(249,115,22,0.35)",
                  }}
                >
                  {t('hero_cta_primary')}
                </Link>
                <Link
                  to="/teachers"
                  className="btn"
                  style={{
                    background: "transparent",
                    color: "#fff",
                    border: "1px solid rgba(255,255,255,0.18)",
                    padding: "15px 30px",
                    fontSize: "1rem",
                    borderRadius: 12,
                    fontWeight: 600,
                  }}
                >
                  {t('hero_cta_secondary')}
                </Link>
              </div>
            </div>

            {/* Right — banner image */}
            <div
              className="hero-illustration"
              aria-hidden="true"
              style={{
                position: "relative",
                borderRadius: 20,
                overflow: "hidden",
                alignSelf: "stretch",
                minHeight: 320,
                maxHeight: 460,
                boxShadow: "0 20px 40px rgba(0,0,0,0.5)",
              }}
            >
              <img
                src="/img/banner-image.png"
                alt="Student studying with AI on OnlineStudyHub"
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  objectPosition: "-110px top",
                  display: "block",
                }}
              />
              <div
                style={{
                  position: "absolute",
                  inset: 0,
                  background:
                    "linear-gradient(to right, rgba(10,15,26,0.75) 0%, transparent 32%)",
                  pointerEvents: "none",
                }}
              />
              <div
                style={{
                  position: "absolute",
                  inset: 0,
                  background:
                    "linear-gradient(to top, rgba(10,15,26,0.6) 0%, transparent 38%)",
                  pointerEvents: "none",
                }}
              />
            </div>
          </div>

          {/* ── Start Your Journey — glass card ── */}
          <div
            style={{
              background: "rgba(255,255,255,0.04)",
              border: "1px solid rgba(255,255,255,0.1)",
              borderRadius: 24,
              padding: "2.25rem 2.5rem 2rem",
            }}
          >
            {/* Header + social proof */}
            <div style={{ marginBottom: "1.25rem" }}>
              <h2
                style={{
                  fontFamily: "Nunito",
                  fontWeight: 900,
                  fontSize: "clamp(1.3rem, 2.5vw, 1.75rem)",
                  color: "#fff",
                  margin: "0 0 .6rem",
                }}
              >
                {t('journey_title')}
              </h2>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: ".75rem",
                  flexWrap: "wrap",
                }}
              >
                <div style={{ display: "flex" }}>
                  {["👩‍🎓", "👨‍🎓", "👩‍🔬", "👨‍💻", "👩‍🏫"].map((a, i) => (
                    <div
                      key={i}
                      style={{
                        width: 30,
                        height: 30,
                        borderRadius: "50%",
                        background: `hsl(${i * 50 + 200},60%,50%)`,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        fontSize: ".9rem",
                        marginLeft: i ? -7 : 0,
                        border: "2px solid rgba(255,255,255,.15)",
                      }}
                    >
                      {a}
                    </div>
                  ))}
                </div>
                <div>
                  <div style={{ display: "flex", gap: 2 }}>
                    {Array.from({ length: 5 }).map((_, i) => (
                      <span
                        key={i}
                        style={{ color: "#f59e0b", fontSize: ".8rem" }}
                      >
                        ★
                      </span>
                    ))}
                  </div>
                  <div
                    style={{
                      fontSize: ".75rem",
                      color: "rgba(255,255,255,.5)",
                    }}
                  >
                    {t('journey_trust')}{" "}
                    <strong style={{ color: "rgba(255,255,255,.85)" }}>
                      50,000+
                    </strong>{" "}
                    {t('journey_trust_suffix')}
                  </div>
                </div>
              </div>
            </div>

            {/* Search bar */}
            <form
              onSubmit={handleSearch}
              style={{
                display: "flex",
                background: "rgba(0,0,0,0.25)",
                border: "1px solid rgba(255,255,255,0.1)",
                borderRadius: 14,
                padding: 8,
                alignItems: "center",
                gap: 8,
                marginBottom: "1rem",
              }}
            >
              <span
                style={{
                  marginLeft: 10,
                  fontSize: "1rem",
                  color: "rgba(255,255,255,.4)",
                  flexShrink: 0,
                }}
              >
                🔍
              </span>
              <input
                style={{
                  flex: 1,
                  background: "transparent",
                  border: "none",
                  color: "#fff",
                  padding: "10px 8px",
                  fontSize: ".95rem",
                  outline: "none",
                  fontFamily: "Nunito, sans-serif",
                  minWidth: 0,
                }}
                placeholder={t('search_placeholder')}
                value={searchQ}
                onChange={(e) => setSearchQ(e.target.value)}
              />
              <button
                type="submit"
                style={{
                  background: "#2d3748",
                  color: "#fff",
                  border: "none",
                  padding: "10px 28px",
                  borderRadius: 10,
                  fontWeight: 700,
                  cursor: "pointer",
                  fontFamily: "Nunito, sans-serif",
                  fontSize: ".9rem",
                  flexShrink: 0,
                }}
              >
                {t('search_btn')}
              </button>
            </form>

            {/* Quick-search tags */}
            <div style={{ display: "flex", gap: ".5rem", flexWrap: "wrap" }}>
              {[
                { labelKey: "quicktag_maths",   path: "/class/class-10/subject/mathematics" },
                { labelKey: "quicktag_physics",  path: "/class/class-11/subject/physics" },
                { labelKey: "quicktag_neet",     path: "/class/neet/subject/biology" },
                { labelKey: "quicktag_jee",      path: "/class/jee/subject/chemistry" },
              ].map((tag) => (
                <Link
                  key={tag.label}
                  to={tag.path}
                  style={{
                    background: "rgba(255,255,255,.1)",
                    border: "none",
                    color: "rgba(255,255,255,.65)",
                    borderRadius: 10,
                    padding: ".3rem .9rem",
                    fontSize: ".75rem",
                    fontWeight: 600,
                    cursor: "pointer",
                    fontFamily: "inherit",
                    textDecoration: "none",
                    display: "inline-flex",
                    alignItems: "center",
                  }}
                >
                  {t(tag.labelKey)}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── STATS TRUST BAR ─────────────────────────────────────── */}
      <div className="stats-trust-bar">
        <div className="container">
          <div className="stats-trust-grid">
            {STATS.map((s) => (
              <div key={s.labelKey} className="stats-trust-item">
                <span className="stats-trust-icon">{s.icon}</span>
                <div>
                  <div className="stats-trust-num">{s.num}</div>
                  <div className="stats-trust-label">{t(s.labelKey)}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── TRENDING TOPICS ──────────────────────────────────────── */}
      <div
        style={{
          background: "#fff",
          borderBottom: "1px solid #f3f4f6",
          padding: ".85rem 0",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
          <div
            style={{
              flexShrink: 0,
              paddingLeft: "1.25rem",
              fontSize: ".78rem",
              fontWeight: 800,
              color: "#4f46e5",
              textTransform: "uppercase",
              letterSpacing: ".06em",
              whiteSpace: "nowrap",
            }}
          >
            🔥 {t('trending_title')}
          </div>
          {/* overflow:hidden must wrap ONLY the scrolling track, not the label */}
          <div style={{ flex: 1, overflow: "hidden" }}>
            <div className="trending-track">
              {[...TRENDING, ...TRENDING].map((t, i) => (
                <Link
                  key={i}
                  to={t.path}
                  style={{ textDecoration: "none", flexShrink: 0 }}
                >
                  <span className="trending-pill">{t.label}</span>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* ── HOW IT WORKS ─────────────────────────────────────────── */}
      <section className="section" style={{ background: "#f9fafb" }}>
        <div className="container">
          <div className="section-header">
            <div className="section-eyebrow">Simple Process</div>
            <h2 className="section-title">{t('how_title')}</h2>
            <p className="section-sub">
              From confusion to confidence — here's how OnlineStudyHub works
            </p>
          </div>
          <div className="how-steps-grid">
            {HOW_IT_WORKS.map((step, i) => (
              <div key={step.step} className="how-step-card">
                <div className="how-step-number">{step.step}</div>
                <div className="how-step-illustration">
                  <step.Illustration />
                </div>
                <h3 className="how-step-title">{t(step.titleKey)}</h3>
                <p className="how-step-desc">{t(step.descKey)}</p>
                {i < HOW_IT_WORKS.length - 1 && (
                  <div className="how-step-arrow">→</div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── BROWSE BY CLASS ──────────────────────────────────────── */}
      <section className="section" style={{ background: "#fff" }}>
        <div className="container">
          <div className="section-header">
            <div className="section-eyebrow">All Classes</div>
            <h2 className="section-title">What class are you in?</h2>
            <p className="section-sub">
              Full CBSE curriculum — Class 6 to 12 plus JEE &amp; NEET
            </p>
          </div>
          <div className="classes-grid">
            {classes.map((cls) => {
              const num = cls.id.replace("class-", "");
              const badgeColors = {
                6: { bg: "#dcfce7", color: "#16a34a" },
                7: { bg: "#dbeafe", color: "#1d4ed8" },
                8: { bg: "#fef9c3", color: "#a16207" },
                9: { bg: "#ffedd5", color: "#c2410c" },
                10: { bg: "#fce7f3", color: "#be185d" },
                11: { bg: "#ede9fe", color: "#7c3aed" },
                12: { bg: "#e0e7ff", color: "#4338ca" },
              };
              const examColors = {
                jee: { bg: "#fef9c3", color: "#a16207" },
                neet: { bg: "#ccfbf1", color: "#0f766e" },
              };
              const bc = badgeColors[num] || examColors[cls.id];
              const badgeContent = badgeColors[num] ? num : cls.emoji;
              return (
                <Link
                  to={`/class/${cls.id}`}
                  key={cls.id}
                  style={{ textDecoration: "none" }}
                >
                  <div className="class-card">
                    <div className="class-card-icon">
                      {bc ? (
                        <span
                          style={{
                            display: "inline-flex",
                            alignItems: "center",
                            justifyContent: "center",
                            width: 48,
                            height: 48,
                            borderRadius: 14,
                            background: bc.bg,
                            color: bc.color,
                            fontFamily: "Nunito",
                            fontWeight: 900,
                            fontSize: badgeColors[num] ? "1.35rem" : "1.6rem",
                          }}
                        >
                          {badgeContent}
                        </span>
                      ) : (
                        cls.emoji
                      )}
                    </div>
                    <div className="class-card-title">{cls.label}</div>
                    <div className="class-card-sub">{cls.board}</div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── SUBJECTS ─────────────────────────────────────────────── */}
      <section
        className="section"
        style={{ background: "linear-gradient(180deg,#f9fafb 0%,#fff 100%)" }}
      >
        <div className="container">
          <div className="section-header">
            <div className="section-eyebrow">Subjects</div>
            <h2 className="section-title">{t('subjects_title')}</h2>
            <p className="section-sub">{t('subjects_sub')}</p>
          </div>
          <div className="subjects-new-grid">
            {SUBJECTS.map((s) => (
              <Link key={s.name} to={s.link} style={{ textDecoration: "none" }}>
                <div
                  className="subject-new-card"
                  style={{ "--sc": s.color, "--sb": s.bg }}
                >
                  <div className="subject-new-icon">{s.icon}</div>
                  <div className="subject-new-name">{s.name}</div>
                  <div className="subject-new-desc">{t(s.descKey)}</div>
                  <div className="subject-new-cta">Explore →</div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── TESTIMONIALS ─────────────────────────────────────────── */}
      <section className="section" style={{ background: "#1e1b4b" }}>
        <div className="container">
          <div className="section-header">
            <div
              className="section-eyebrow"
              style={{ background: "rgba(255,255,255,.1)", color: "#a5b4fc" }}
            >
              Student Stories
            </div>
            <h2 className="section-title" style={{ color: "#fff" }}>
              {t('testimonials_title')}
            </h2>
            <p
              className="section-sub"
              style={{ color: "rgba(255,255,255,.6)" }}
            >
              Thousands of students have improved their scores with
              OnlineStudyHub
            </p>
          </div>
          <div className="testimonials-grid">
            {TESTIMONIALS.map((t, i) => (
              <div key={i} className="testimonial-card">
                <div className="testimonial-stars">
                  <StarRating />
                </div>
                <p className="testimonial-text">"{t.text}"</p>
                <div className="testimonial-author">
                  <div className="testimonial-avatar">{t.avatar}</div>
                  <div>
                    <div className="testimonial-name">{t.name}</div>
                    <div className="testimonial-class">{t.class}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── LIVE GROUP CLASSES — hidden until feature is ready ──── */}
      {/* TODO: uncomment when live classes are launched
      <section ...> ... </section>
      */}

      {/* ── TEACHER CTA ──────────────────────────────────────────── */}
      <section className="teacher-cta-section">
        <div className="container">
          <div className="teacher-cta-inner">
            <div className="teacher-cta-visual">
              <div className="teacher-cta-emoji-stack">
                {["👨‍🏫", "👩‍🏫", "🧑‍🏫"].map((e, i) => (
                  <div
                    key={i}
                    className="teacher-cta-emoji-bubble"
                    style={{ animationDelay: `${i * 0.4}s` }}
                  >
                    {e}
                  </div>
                ))}
              </div>
            </div>
            <div className="teacher-cta-content">
              <div
                className="section-eyebrow"
                style={{
                  background: "#fef3c7",
                  color: "#d97706",
                  marginBottom: ".75rem",
                  display: "inline-flex",
                }}
              >
                For Teachers
              </div>
              <h2 className="teacher-cta-title">
                Share your knowledge.
                <br />
                Earn on your schedule.
              </h2>
              <p className="teacher-cta-desc">
                Join 200+ teachers already earning on OnlineStudyHub. Set your
                own fee, choose your subjects, teach from anywhere. Students
                find you — you just teach.
              </p>
              <div className="teacher-cta-perks">
                {[
                  "✅ Set your own fee",
                  "✅ Flexible schedule",
                  "✅ Google Meet sessions",
                  "✅ Instant bookings",
                ].map((p) => (
                  <span key={p} className="teacher-cta-perk">
                    {p}
                  </span>
                ))}
              </div>
              <Link
                to="/teacher-portal"
                className="btn btn-primary"
                style={{
                  fontSize: "1rem",
                  padding: ".85rem 2rem",
                  marginTop: "1.25rem",
                  display: "inline-flex",
                }}
              >
                Start Teaching Today →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── FINAL CTA ────────────────────────────────────────────── */}
      <section className="final-cta-section">
        <div className="container" style={{ textAlign: "center" }}>
          <div style={{ fontSize: "3rem", marginBottom: "1rem" }}>🚀</div>
          <h2 className="final-cta-title">
            Your rank is waiting. Start today.
          </h2>
          <p className="final-cta-sub">
            No credit card. No subscription. Just open, study, and score.
          </p>
          <div
            style={{
              display: "flex",
              gap: "1rem",
              justifyContent: "center",
              flexWrap: "wrap",
              marginTop: "2rem",
            }}
          >
            <Link
              to="/classes"
              className="btn btn-primary"
              style={{
                padding: "1rem 2.25rem",
                fontSize: "1.05rem",
                fontWeight: 800,
              }}
            >
              {t('final_cta_btn')}
            </Link>
            <Link
              to="/exam/jee"
              className="btn"
              style={{
                padding: "1rem 2rem",
                fontSize: "1rem",
                background: "rgba(255,255,255,.12)",
                color: "#fff",
                border: "1px solid rgba(255,255,255,.3)",
                borderRadius: 10,
                fontWeight: 700,
              }}
            >
              🏆 JEE Prep
            </Link>
            <Link
              to="/exam/neet"
              className="btn"
              style={{
                padding: "1rem 2rem",
                fontSize: "1rem",
                background: "rgba(255,255,255,.12)",
                color: "#fff",
                border: "1px solid rgba(255,255,255,.3)",
                borderRadius: 10,
                fontWeight: 700,
              }}
            >
              🩺 NEET Prep
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

import React, { useState } from "react";
import SEO from "../components/SEO";

// Recommended reference books with direct Amazon purchase links
const RECOMMENDED_BOOKS = [
  {
    id: "selina-physics-10",
    title: "Selina Concise Physics for Class 10 ICSE (Latest Edition)",
    category: "ICSE Class 10",
    author: "RP Goyal & SP Tripathi (Selina Publishers)",
    description: "The gold-standard reference textbook for ICSE Class 10 Physics. Includes Principle of Moments, Pulley systems, Calorimetry, Refraction, and Ring Circuits.",
    price: 495,
    originalPrice: 595,
    rating: 4.9,
    reviewsCount: 1280,
    amazonLink: "https://www.amazon.in/s?k=Selina+Concise+Physics+Class+10+ICSE",
    image: "⚡",
    badge: "ICSE Bestseller",
    features: [
      "Full CISCE Council Syllabus",
      "Chapter-wise Numerical Examples",
      "Past 10 Year Board Questions",
      "Clear Diagrams & Ray Formulas"
    ]
  },
  {
    id: "selina-chemistry-10",
    title: "Selina Concise Chemistry for Class 10 ICSE",
    category: "ICSE Class 10",
    author: "SP Singh (Selina Publishers)",
    description: "Comprehensive chemistry coverage: Periodic Trends, Mole Concept & Stoichiometry, Organic IUPAC Hydrocarbons, and Electrolysis.",
    price: 475,
    originalPrice: 550,
    rating: 4.85,
    reviewsCount: 940,
    amazonLink: "https://www.amazon.in/s?k=Selina+Concise+Chemistry+Class+10+ICSE",
    image: "🧪",
    badge: "Must Have",
    features: [
      "Organic Chemistry Reactions",
      "Mole Concept Step-by-Step Solved Numericals",
      "Laboratory Preparation Diagrams",
      "IUPAC Naming Exercises"
    ]
  },
  {
    id: "selina-maths-10",
    title: "Selina Concise Mathematics for Class 10 ICSE",
    category: "ICSE Class 10",
    author: "RK Bansal (Selina Publishers)",
    description: "Exhaustive exercise problems covering GST, Banking RD Accounts, Quadratic Discriminants, AP/GP, Matrices, Circles, and Trigonometry.",
    price: 550,
    originalPrice: 650,
    rating: 4.92,
    reviewsCount: 1540,
    amazonLink: "https://www.amazon.in/s?k=Selina+Concise+Mathematics+Class+10+ICSE",
    image: "📐",
    badge: "Top Rated",
    features: [
      "100% Solved Board Model Papers",
      "Step-by-Step Proof Theorems",
      "Commercial Maths & GST Tricks",
      "Circle & Tangent Exercises"
    ]
  },
  {
    id: "selina-biology-10",
    title: "Selina Concise Biology for Class 10 ICSE",
    category: "ICSE Class 10",
    author: "Dr. HS Vishnoi (Selina Publishers)",
    description: "High-yield biology textbook covering Mitosis/Meiosis, Mendel Genetics, Photosynthesis, Double Circulation, and Nephron Excretion.",
    price: 450,
    originalPrice: 520,
    rating: 4.8,
    reviewsCount: 810,
    amazonLink: "https://www.amazon.in/s?k=Selina+Concise+Biology+Class+10+ICSE",
    image: "🌿",
    badge: "Popular",
    features: [
      "Labeled Anatomical Diagrams",
      "Genetics Monohybrid & Dihybrid Crosses",
      "Experiemental Setups for Photosynthesis",
      "Board Revision Notes"
    ]
  },
  {
    id: "oswaal-icse-10yr",
    title: "Oswaal ICSE 10 Years Solved Papers Class 10 (All Subjects)",
    category: "ICSE Class 10",
    author: "Oswaal Editorial Board",
    description: "Past 10 years authentic CISCE board papers with step-by-step marking scheme answers and QR code video solutions.",
    price: 699,
    originalPrice: 999,
    rating: 4.95,
    reviewsCount: 2310,
    amazonLink: "https://www.amazon.in/s?k=Oswaal+ICSE+10+Years+Solved+Papers+Class+10",
    image: "📋",
    badge: "30% OFF",
    features: [
      "Authentic Board Solutions",
      "Mindmaps & Revision Notes",
      "Trend Analysis of Last 10 Years",
      "Video QR Explanations"
    ]
  },
  {
    id: "hc-verma-physics",
    title: "Concepts of Physics by H.C. Verma (Vol 1 & Vol 2 Set)",
    category: "JEE & NEET",
    author: "Dr. H.C. Verma",
    description: "The bible of physics for Class 11, 12, JEE Main, JEE Advanced, and NEET. Master fundamental mechanics, thermodynamics, and optics.",
    price: 899,
    originalPrice: 1199,
    rating: 4.98,
    reviewsCount: 5420,
    amazonLink: "https://www.amazon.in/s?k=Concepts+of+Physics+HC+Verma",
    image: "⚡",
    badge: "JEE/NEET Bible",
    features: [
      "Vol 1 & Vol 2 Complete Set",
      "Conceptual Questions & Objective I/II",
      "Challenging Numerical Problems",
      "Essential for Top Ranks"
    ]
  },
  {
    id: "rd-sharma-10",
    title: "Mathematics for Class 10 by R.D. Sharma (CBSE)",
    category: "CBSE Class 10",
    author: "Dr. R.D. Sharma",
    description: "Exhaustive practice book for CBSE Class 10 Mathematics with graded exercise sets, MCQs, and assertion-reasoning questions.",
    price: 650,
    originalPrice: 795,
    rating: 4.88,
    reviewsCount: 3120,
    amazonLink: "https://www.amazon.in/s?k=RD+Sharma+Mathematics+Class+10",
    image: "📐",
    badge: "CBSE Choice",
    features: [
      "NCERT & Exemplar Solved",
      "Over 3000 Practice Problems",
      "Case-Study Based Questions",
      "Formula Cheat Sheets"
    ]
  },
  {
    id: "pw-jee-15yr",
    title: "PhysicsWallah 15 Years JEE Main Solved Papers (Physics, Chem, Math)",
    category: "JEE & NEET",
    author: "PW Editorial Team",
    description: "15 Years authentic JEE Main chapter-wise past questions with detailed step-by-step video QR code solutions.",
    price: 749,
    originalPrice: 1199,
    rating: 4.9,
    reviewsCount: 1890,
    amazonLink: "https://www.amazon.in/s?k=Physics+Wallah+JEE+Main+15+Years+Solved+Papers",
    image: "🏆",
    badge: "PW Official",
    features: [
      "100% Authentic Answer Keys",
      "Chapter-wise Weightage Analysis",
      "Video QR Code Solutions",
      "Doorstep Express Delivery"
    ]
  },
  {
    id: "pw-neet-36yr",
    title: "PhysicsWallah NEET 36 Years Chapterwise Solved Papers",
    category: "JEE & NEET",
    author: "PW Editorial Team",
    description: "36 Years AIPMT/NEET physics, chemistry, and biology past questions categorized topic-wise with NCERT page references.",
    price: 899,
    originalPrice: 1499,
    rating: 4.93,
    reviewsCount: 2750,
    amazonLink: "https://www.amazon.in/s?k=Physics+Wallah+NEET+36+Years",
    image: "🩺",
    badge: "NEET Top Seller",
    features: [
      "NCERT Page-wise Mapping",
      "36 Years Topic Breakdown",
      "Video Explanations for Hard Questions",
      "High Yield Mnemonics"
    ]
  }
];

export default function StorePage() {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const categories = ["All", "ICSE Class 10", "CBSE Class 10", "JEE & NEET"];

  const filteredBooks = selectedCategory === "All"
    ? RECOMMENDED_BOOKS
    : RECOMMENDED_BOOKS.filter(b => b.category === selectedCategory);

  return (
    <div style={{ paddingBottom: 60 }}>
      <SEO
        title="Bookstore & Recommended Reference Books | OnlineStudyHub"
        description="Buy ICSE Selina Concise books, Oswaal solved papers, HC Verma Physics, RD Sharma Maths, and PW JEE/NEET books directly on Amazon."
      />

      {/* Hero Header */}
      <div
        style={{
          background: "linear-gradient(135deg, #0f172a 0%, #1e1b4b 50%, #4338ca 100%)",
          color: "#fff",
          padding: "50px 20px",
          borderRadius: "0 0 24px 24px",
          textAlign: "center",
        }}
      >
        <div style={{ maxWidth: 850, margin: "0 auto" }}>
          <div
            style={{
              background: "#ffb800",
              color: "#0f172a",
              fontWeight: 800,
              display: "inline-block",
              padding: "5px 16px",
              borderRadius: 20,
              fontSize: "0.85rem",
              marginBottom: 14,
            }}
          >
            📚 Recommended Reference Books Store
          </div>
          <h1 style={{ fontSize: "2.4rem", fontWeight: 800, margin: "0 0 14px", fontFamily: "Nunito, sans-serif" }}>
            Top Reference Books for ICSE, CBSE, JEE & NEET
          </h1>
          <p style={{ color: "#cbd5e1", fontSize: "1.1rem", margin: "0 auto 24px", maxWidth: 680, lineHeight: 1.6 }}>
            Handpicked authentic textbooks, Selina Concise series, Oswaal past 10 year board papers, and PW Entrance Modules. Click any book to purchase directly on <strong>Amazon</strong>.
          </p>
        </div>
      </div>

      {/* Category Filter Bar */}
      <div style={{ maxWidth: 1100, margin: "30px auto 10px", padding: "0 20px" }}>
        <div style={{ display: "flex", gap: "10px", flexWrap: "wrap", justifyContent: "center" }}>
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              style={{
                padding: "8px 20px",
                borderRadius: "99px",
                border: "none",
                background: selectedCategory === cat ? "linear-gradient(135deg, #4f46e5, #7c3aed)" : "#f1f5f9",
                color: selectedCategory === cat ? "#ffffff" : "#475569",
                fontWeight: 800,
                fontSize: "0.9rem",
                cursor: "pointer",
                boxShadow: selectedCategory === cat ? "0 4px 14px rgba(79,70,229,0.35)" : "none",
                transition: "all 0.2s"
              }}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Books Grid */}
      <div style={{ maxWidth: 1100, margin: "30px auto", padding: "0 20px" }}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))",
            gap: 25,
          }}
        >
          {filteredBooks.map((book) => {
            const discountPercent = Math.round(
              ((book.originalPrice - book.price) / book.originalPrice) * 100
            );

            return (
              <div
                key={book.id}
                style={{
                  background: "var(--card-bg, #ffffff)",
                  borderRadius: 20,
                  padding: 24,
                  border: "1px solid var(--border-color, #e2e8f0)",
                  boxShadow: "0 8px 24px rgba(0,0,0,0.06)",
                  display: "flex",
                  flexDirection: "column",
                  transition: "transform 0.2s",
                }}
              >
                {/* Header Badge */}
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 14 }}>
                  <span
                    style={{
                      background: "linear-gradient(135deg, #fef3c7, #fde68a)",
                      color: "#b45309",
                      fontWeight: 800,
                      fontSize: "0.75rem",
                      padding: "4px 12px",
                      borderRadius: 99,
                      textTransform: "uppercase",
                      letterSpacing: "0.5px"
                    }}
                  >
                    {book.badge}
                  </span>
                  <span style={{ fontSize: "0.85rem", fontWeight: 700, color: "#eab308" }}>
                    ⭐ {book.rating} ({book.reviewsCount} ratings)
                  </span>
                </div>

                {/* Title & Author */}
                <div style={{ display: "flex", gap: "12px", alignItems: "flex-start", marginBottom: 12 }}>
                  <div style={{
                    fontSize: "2.2rem", width: "48px", height: "48px", borderRadius: "12px",
                    background: "#f8fafc", display: "flex", alignItems: "center", justifyContent: "center",
                    border: "1px solid #e2e8f0", flexShrink: 0
                  }}>
                    {book.image}
                  </div>
                  <div>
                    <h3 style={{ fontSize: "1.15rem", fontWeight: 800, margin: "0 0 4px", color: "var(--text-color, #0f172a)", lineHeight: 1.35 }}>
                      {book.title}
                    </h3>
                    <div style={{ fontSize: "0.8rem", color: "#64748b", fontWeight: 600 }}>
                      By {book.author}
                    </div>
                  </div>
                </div>

                {/* Description */}
                <p style={{ fontSize: "0.88rem", color: "#475569", flex: 1, marginBottom: 16, lineHeight: 1.55 }}>
                  {book.description}
                </p>

                {/* Features list */}
                <div style={{ marginBottom: 18, background: "#f8fafc", padding: "10px 14px", borderRadius: 12, border: "1px solid #f1f5f9" }}>
                  {book.features.map((feat, i) => (
                    <div key={i} style={{ fontSize: "0.82rem", color: "#334155", marginBottom: 4, display: "flex", alignItems: "center", gap: 6, fontWeight: 600 }}>
                      <span style={{ color: "#10b981", fontWeight: 800 }}>✓</span> {feat}
                    </div>
                  ))}
                </div>

                {/* Price & Buy Button */}
                <div style={{ borderTop: "1px solid #e2e8f0", paddingTop: 16, display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                  <div>
                    <div style={{ fontSize: "1.35rem", fontWeight: 800, color: "#10b981" }}>
                      ₹{book.price}{" "}
                      <span style={{ fontSize: "0.85rem", color: "#94a3b8", textDecoration: "line-through", fontWeight: 600 }}>
                        ₹{book.originalPrice}
                      </span>
                    </div>
                    <span style={{ fontSize: "0.75rem", color: "#d97706", fontWeight: 800 }}>
                      SAVE {discountPercent}% • Available on Amazon
                    </span>
                  </div>

                  <a
                    href={book.amazonLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      background: "linear-gradient(135deg, #ff9900, #ff8c00)",
                      color: "#000000",
                      fontWeight: 800,
                      padding: "10px 18px",
                      borderRadius: 12,
                      fontSize: "0.88rem",
                      textDecoration: "none",
                      display: "inline-flex",
                      alignItems: "center",
                      gap: 6,
                      boxShadow: "0 4px 14px rgba(255,153,0,0.35)",
                      transition: "transform 0.15s"
                    }}
                  >
                    🛒 Buy on Amazon ↗
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

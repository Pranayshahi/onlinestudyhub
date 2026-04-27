const fs = require('fs');
const path = require('path');
const OUT = path.join(__dirname, '../public/img/topics/class-8');

const topics = {

  // ── MATHEMATICS ─────────────────────────────────────────────────
  'algebra': {
    bg: ['#f5f3ff','#ddd6fe'], accent: '#7c3aed',
    svg: `<rect x="80" y="70" width="640" height="90" rx="18" fill="#ede9fe" stroke="#7c3aed" stroke-width="2.5"/>
<text x="400" y="128" text-anchor="middle" font-size="38" font-family="monospace" font-weight="900" fill="#5b21b6">(a + b)² = a² + 2ab + b²</text>
<rect x="100" y="185" width="280" height="65" rx="14" fill="#c4b5fd" stroke="#6d28d9" stroke-width="2"/>
<text x="240" y="225" text-anchor="middle" font-size="22" font-family="monospace" font-weight="800" fill="#3b0764">a² − b² = (a+b)(a−b)</text>
<rect x="420" y="185" width="280" height="65" rx="14" fill="#8b5cf6" stroke="#5b21b6" stroke-width="2"/>
<text x="560" y="225" text-anchor="middle" font-size="22" font-family="monospace" font-weight="800" fill="#fff">Factorise: x²+5x+6</text>
<rect x="420" y="268" width="280" height="50" rx="10" fill="#6d28d9"/>
<text x="560" y="300" text-anchor="middle" font-size="20" font-family="monospace" font-weight="900" fill="#ede9fe">= (x+2)(x+3)</text>
<text x="400" y="380" text-anchor="middle" font-size="28" font-family="sans-serif" font-weight="800" fill="#3b0764">Algebra — Expressions &amp; Identities</text>`
  },

  'linear-equations': {
    bg: ['#eff6ff','#bfdbfe'], accent: '#2563eb',
    svg: `<rect x="80" y="80" width="640" height="75" rx="16" fill="#dbeafe" stroke="#2563eb" stroke-width="2.5"/>
<text x="400" y="130" text-anchor="middle" font-size="34" font-family="monospace" font-weight="900" fill="#1d4ed8">3(x + 4) = 2(x + 7)</text>
<text x="400" y="195" text-anchor="middle" font-size="20" font-family="sans-serif" fill="#374151">↓  expand and simplify</text>
<rect x="130" y="210" width="540" height="55" rx="12" fill="#bfdbfe" stroke="#3b82f6" stroke-width="2"/>
<text x="400" y="246" text-anchor="middle" font-size="26" font-family="monospace" font-weight="800" fill="#1e40af">3x + 12 = 2x + 14  →  x = 2</text>
<rect x="280" y="285" width="240" height="50" rx="12" fill="#1d4ed8"/>
<text x="400" y="318" text-anchor="middle" font-size="28" font-family="monospace" font-weight="900" fill="#fff">x = 2 ✓</text>
<text x="400" y="382" text-anchor="middle" font-size="26" font-family="sans-serif" font-weight="800" fill="#1e3a8a">Linear Equations</text>`
  },

  'squares-square-roots': {
    bg: ['#fef9c3','#fde047'], accent: '#ca8a04',
    svg: `${[1,2,3,4,5,6,7,8,9,10,11,12].map((n,i)=>{
const x=80+i*55, y=90, size=50;
const color=n<=6?'#ca8a04':'#a16207';
return `<rect x="${x}" y="${y}" width="${size}" height="${size}" rx="8" fill="${n*n<100?'#fde047':'#fbbf24'}" stroke="${color}" stroke-width="2"/>
<text x="${x+25}" y="${y+30}" text-anchor="middle" font-size="15" font-weight="700" font-family="sans-serif" fill="${color}">${n}²=${n*n}</text>`;
}).join('')}
<rect x="100" y="175" width="600" height="55" rx="12" fill="#fef3c7" stroke="#ca8a04" stroke-width="2"/>
<text x="400" y="210" text-anchor="middle" font-size="19" font-family="monospace" font-weight="700" fill="#92400e">√144 = √(2²×2²×3²) = 2×2×3 = 12</text>
<rect x="150" y="255" width="500" height="48" rx="12" fill="#fbbf24" stroke="#b45309" stroke-width="2"/>
<text x="400" y="284" text-anchor="middle" font-size="17" font-family="sans-serif" font-weight="700" fill="#78350f">Pythagorean triplet: (6, 8, 10)  ∵  36+64=100</text>
<text x="400" y="380" text-anchor="middle" font-size="26" font-family="sans-serif" font-weight="800" fill="#78350f">Squares and Square Roots</text>`
  },

  'rational-numbers-8': {
    bg: ['#ecfdf5','#a7f3d0'], accent: '#059669',
    svg: `<rect x="60" y="80" width="680" height="65" rx="16" fill="#d1fae5" stroke="#059669" stroke-width="2.5"/>
<text x="400" y="124" text-anchor="middle" font-size="24" font-family="sans-serif" font-weight="800" fill="#064e3b">Rational Numbers — Properties</text>
${[['Closure','a+b∈ℚ','#047857'],['Commutative','a+b=b+a','#059669'],['Associative','(a+b)+c=a+(b+c)','#065f46'],['Distributive','a(b+c)=ab+ac','#047857']].map(([p,f,col],i)=>{
const x=80+i*170,y=170;
return `<rect x="${x}" y="${y}" width="155" height="100" rx="14" fill="#a7f3d0" stroke="${col}" stroke-width="2"/>
<text x="${x+78}" y="${y+32}" text-anchor="middle" font-size="13" font-weight="800" font-family="sans-serif" fill="${col}">${p}</text>
<text x="${x+78}" y="${y+68}" text-anchor="middle" font-size="12" font-family="monospace" font-weight="700" fill="#064e3b">${f}</text>`;
}).join('')}
<rect x="150" y="292" width="500" height="55" rx="12" fill="#6ee7b7" stroke="#047857" stroke-width="2"/>
<text x="400" y="322" text-anchor="middle" font-size="17" font-family="sans-serif" font-weight="700" fill="#064e3b">Density: ∞ rationals between any two rationals</text>
<text x="400" y="380" text-anchor="middle" font-size="26" font-family="sans-serif" font-weight="800" fill="#064e3b">Rational Numbers</text>`
  },

  'understanding-quadrilaterals': {
    bg: ['#fff7ed','#fed7aa'], accent: '#ea580c',
    svg: `<!-- Parallelogram -->
<polygon points="100,280 270,140 460,140 290,280" fill="#fed7aa" stroke="#ea580c" stroke-width="2.5"/>
<text x="280" y="230" text-anchor="middle" font-size="14" font-family="sans-serif" font-weight="700" fill="#7c2d12">Parallelogram</text>
<!-- Trapezium -->
<polygon points="490,280 520,155 680,155 720,280" fill="#fde68a" stroke="#d97706" stroke-width="2.5"/>
<text x="610" y="250" text-anchor="middle" font-size="14" font-family="sans-serif" font-weight="700" fill="#78350f">Trapezium</text>
<!-- Rhombus -->
<polygon points="180,310 270,370 360,310 270,250" fill="#fbbf24" stroke="#b45309" stroke-width="2.5"/>
<text x="270" y="400" text-anchor="middle" font-size="13" font-family="sans-serif" font-weight="700" fill="#78350f">Rhombus</text>
<!-- Square -->
<rect x="480" y="305" width="80" height="80" rx="4" fill="#fef3c7" stroke="#ca8a04" stroke-width="2.5"/>
<text x="520" y="405" text-anchor="middle" font-size="13" font-family="sans-serif" font-weight="700" fill="#78350f">Square</text>
<!-- Angle sum label -->
<rect x="220" y="75" width="360" height="48" rx="12" fill="#ea580c"/>
<text x="400" y="106" text-anchor="middle" font-size="20" font-family="sans-serif" font-weight="900" fill="#fff">Sum of angles = 360°</text>`
  },

  'comparing-quantities-8': {
    bg: ['#fdf4ff','#f3e8ff'], accent: '#9333ea',
    svg: `<rect x="60" y="70" width="680" height="70" rx="16" fill="#e9d5ff" stroke="#9333ea" stroke-width="2.5"/>
<text x="400" y="115" text-anchor="middle" font-size="28" font-family="monospace" font-weight="900" fill="#6b21a8">A = P(1 + R/100)ⁿ  — Compound Interest</text>
<rect x="80" y="165" width="300" height="140" rx="14" fill="#f3e8ff" stroke="#a855f7" stroke-width="2"/>
<text x="230" y="195" text-anchor="middle" font-size="14" font-weight="800" font-family="sans-serif" fill="#7e22ce">Example: ₹10,000 @ 10% for 2yr</text>
<text x="230" y="225" text-anchor="middle" font-size="15" font-family="monospace" fill="#6b21a8">A = 10000×1.21</text>
<text x="230" y="255" text-anchor="middle" font-size="18" font-family="monospace" font-weight="800" fill="#6b21a8">= ₹12,100</text>
<text x="230" y="285" text-anchor="middle" font-size="14" font-family="sans-serif" fill="#7e22ce">CI = ₹2100 vs SI = ₹2000</text>
<rect x="420" y="165" width="300" height="140" rx="14" fill="#ede9fe" stroke="#8b5cf6" stroke-width="2"/>
<text x="570" y="195" text-anchor="middle" font-size="14" font-weight="800" font-family="sans-serif" fill="#5b21b6">Depreciation Formula</text>
<text x="570" y="228" text-anchor="middle" font-size="16" font-family="monospace" font-weight="700" fill="#6b21a8">V = P(1 − R/100)ⁿ</text>
<text x="570" y="262" text-anchor="middle" font-size="13" font-family="sans-serif" fill="#7e22ce">Car: ₹5,00,000 @ 15%/yr</text>
<text x="570" y="290" text-anchor="middle" font-size="16" font-family="monospace" font-weight="700" fill="#6b21a8">After 2yr = ₹3,61,250</text>
<text x="400" y="382" text-anchor="middle" font-size="24" font-family="sans-serif" font-weight="800" fill="#581c87">Comparing Quantities — Compound Interest</text>`
  },

  'direct-inverse-proportions': {
    bg: ['#f0fdf4','#bbf7d0'], accent: '#16a34a',
    svg: `<!-- Direct graph -->
<line x1="90" y1="330" x2="90" y2="90" stroke="#374151" stroke-width="2.5"/>
<line x1="90" y1="330" x2="380" y2="330" stroke="#374151" stroke-width="2.5"/>
<line x1="90" y1="330" x2="370" y2="100" stroke="#16a34a" stroke-width="3"/>
<text x="230" y="370" text-anchor="middle" font-size="14" font-family="sans-serif" font-weight="700" fill="#15803d">Direct Proportion  y=kx</text>
<text x="65" y="90" font-size="13" fill="#374151" font-family="sans-serif">y</text>
<text x="385" y="335" font-size="13" fill="#374151" font-family="sans-serif">x</text>
<!-- Inverse graph -->
<line x1="440" y1="330" x2="440" y2="90" stroke="#374151" stroke-width="2.5"/>
<line x1="440" y1="330" x2="740" y2="330" stroke="#374151" stroke-width="2.5"/>
<path d="M460,105 Q500,175 600,265 Q650,300 730,320" fill="none" stroke="#ea580c" stroke-width="3"/>
<text x="590" y="370" text-anchor="middle" font-size="14" font-family="sans-serif" font-weight="700" fill="#c2410c">Inverse Proportion  xy=k</text>
<text x="415" y="90" font-size="13" fill="#374151" font-family="sans-serif">y</text>
<text x="745" y="335" font-size="13" fill="#374151" font-family="sans-serif">x</text>
<!-- Formula boxes -->
<rect x="100" y="88" width="220" height="38" rx="8" fill="#dcfce7" stroke="#16a34a" stroke-width="1.5"/>
<text x="210" y="112" text-anchor="middle" font-size="15" font-family="monospace" font-weight="700" fill="#166534">x₁/y₁ = x₂/y₂</text>
<rect x="455" y="88" width="220" height="38" rx="8" fill="#fed7aa" stroke="#ea580c" stroke-width="1.5"/>
<text x="565" y="112" text-anchor="middle" font-size="15" font-family="monospace" font-weight="700" fill="#9a3412">x₁y₁ = x₂y₂</text>`
  },

  'mensuration-8': {
    bg: ['#eff6ff','#dbeafe'], accent: '#3b82f6',
    svg: `<!-- Cuboid -->
<rect x="80" y="120" width="180" height="120" rx="4" fill="#bfdbfe" stroke="#3b82f6" stroke-width="2.5"/>
<polygon points="80,120 140,80 320,80 260,120" fill="#93c5fd" stroke="#3b82f6" stroke-width="2.5"/>
<polygon points="260,120 320,80 320,200 260,240" fill="#60a5fa" stroke="#3b82f6" stroke-width="2.5"/>
<text x="170" y="300" text-anchor="middle" font-size="13" font-family="monospace" font-weight="700" fill="#1e3a8a">V=lbh  SA=2(lb+bh+lh)</text>
<!-- Cylinder -->
<ellipse cx="530" cy="160" rx="100" ry="30" fill="#bfdbfe" stroke="#3b82f6" stroke-width="2.5"/>
<rect x="430" y="160" width="200" height="120" fill="#93c5fd" stroke="#3b82f6" stroke-width="2.5"/>
<ellipse cx="530" cy="280" rx="100" ry="30" fill="#60a5fa" stroke="#3b82f6" stroke-width="2.5"/>
<text x="530" y="335" text-anchor="middle" font-size="13" font-family="monospace" font-weight="700" fill="#1e3a8a">V=πr²h  CSA=2πrh</text>
<rect x="150" y="60" width="500" height="46" rx="12" fill="#2563eb"/>
<text x="400" y="90" text-anchor="middle" font-size="18" font-family="sans-serif" font-weight="900" fill="#fff">Mensuration — 3D Shapes</text>`
  },

  'introduction-to-graphs': {
    bg: ['#fdf4ff','#f3e8ff'], accent: '#a855f7',
    svg: `<!-- Grid -->
${Array.from({length:7},(_,i)=>`<line x1="${120+i*80}" y1="80" x2="${120+i*80}" y2="340" stroke="#e9d5ff" stroke-width="1"/>`).join('')}
${Array.from({length:7},(_,i)=>`<line x1="120" y1="${80+i*43}" x2="680" y2="${80+i*43}" stroke="#e9d5ff" stroke-width="1"/>`).join('')}
<line x1="120" y1="340" x2="680" y2="340" stroke="#374151" stroke-width="2.5"/>
<line x1="120" y1="80" x2="120" y2="340" stroke="#374151" stroke-width="2.5"/>
<!-- Bar chart bars -->
<rect x="145" y="200" width="60" height="140" rx="6" fill="#a855f7" opacity=".8"/>
<rect x="225" y="160" width="60" height="180" rx="6" fill="#8b5cf6" opacity=".8"/>
<rect x="305" y="120" width="60" height="220" rx="6" fill="#7c3aed" opacity=".8"/>
<rect x="385" y="180" width="60" height="160" rx="6" fill="#6d28d9" opacity=".8"/>
<!-- Line graph overlay -->
<polyline points="175,200 255,160 335,120 415,180 495,150 575,100" fill="none" stroke="#ec4899" stroke-width="3" stroke-dasharray="none"/>
${[[175,200],[255,160],[335,120],[415,180],[495,150],[575,100]].map(([x,y])=>`<circle cx="${x}" cy="${y}" r="6" fill="#ec4899"/>`).join('')}
<!-- Labels -->
<text x="400" y="385" text-anchor="middle" font-size="26" font-family="sans-serif" font-weight="800" fill="#4c1d95">Introduction to Graphs</text>`
  },

  'cubes-cube-roots-8': {
    bg: ['#f0f9ff','#bae6fd'], accent: '#0284c7',
    svg: `<!-- 3D cube visual -->
<rect x="120" y="130" width="160" height="160" rx="4" fill="#bae6fd" stroke="#0284c7" stroke-width="2.5"/>
<polygon points="120,130 180,80 340,80 280,130" fill="#7dd3fc" stroke="#0284c7" stroke-width="2.5"/>
<polygon points="280,130 340,80 340,240 280,290" fill="#38bdf8" stroke="#0284c7" stroke-width="2.5"/>
<text x="200" y="220" text-anchor="middle" font-size="20" font-weight="800" font-family="monospace" fill="#075985">n³</text>
<!-- Number cubes -->
${[[2,8],[3,27],[4,64],[5,125],[6,216]].map(([n,c],i)=>{
const x=410+i*64,y=110;
return `<rect x="${x}" y="${y}" width="56" height="56" rx="10" fill="#0284c7" stroke="#075985" stroke-width="2"/>
<text x="${x+28}" y="${y+22}" text-anchor="middle" font-size="14" font-weight="700" font-family="sans-serif" fill="#bae6fd">${n}³</text>
<text x="${x+28}" y="${y+44}" text-anchor="middle" font-size="16" font-weight="900" font-family="monospace" fill="#fff">${c}</text>`;
}).join('')}
<rect x="380" y="200" width="340" height="100" rx="14" fill="#e0f2fe" stroke="#0284c7" stroke-width="2"/>
<text x="550" y="238" text-anchor="middle" font-size="16" font-family="monospace" font-weight="700" fill="#075985">∛512 = ∛(2⁹) = 2³ = 8</text>
<text x="550" y="270" text-anchor="middle" font-size="14" font-family="sans-serif" font-weight="700" fill="#0369a1">Group prime factors in triples</text>
<text x="400" y="382" text-anchor="middle" font-size="26" font-family="sans-serif" font-weight="800" fill="#075985">Cubes and Cube Roots</text>`
  },

  'exponents-powers-8': {
    bg: ['#fff7ed','#fed7aa'], accent: '#f97316',
    svg: `<rect x="60" y="65" width="680" height="75" rx="16" fill="#ffedd5" stroke="#f97316" stroke-width="2.5"/>
<text x="400" y="115" text-anchor="middle" font-size="20" font-family="monospace" font-weight="900" fill="#c2410c">aᵐ×aⁿ=aᵐ⁺ⁿ · aᵐ÷aⁿ=aᵐ⁻ⁿ · (aᵐ)ⁿ=aᵐⁿ · a⁰=1</text>
<rect x="80" y="163" width="305" height="140" rx="14" fill="#fed7aa" stroke="#f97316" stroke-width="2"/>
<text x="233" y="193" text-anchor="middle" font-size="14" font-weight="800" font-family="sans-serif" fill="#7c2d12">Scientific Notation</text>
<text x="233" y="223" text-anchor="middle" font-size="15" font-family="monospace" font-weight="700" fill="#c2410c">3×10⁸ m/s = c</text>
<text x="233" y="253" text-anchor="middle" font-size="14" font-family="monospace" fill="#9a3412">1×10⁻⁹ m = 1 nm</text>
<text x="233" y="283" text-anchor="middle" font-size="13" font-family="sans-serif" fill="#7c2d12">a × 10ⁿ,  1≤a&lt;10</text>
<rect x="415" y="163" width="305" height="140" rx="14" fill="#fde68a" stroke="#ca8a04" stroke-width="2"/>
<text x="567" y="193" text-anchor="middle" font-size="14" font-weight="800" font-family="sans-serif" fill="#78350f">Negative Exponents</text>
<text x="567" y="228" text-anchor="middle" font-size="20" font-family="monospace" font-weight="800" fill="#ca8a04">a⁻ⁿ = 1/aⁿ</text>
<text x="567" y="264" text-anchor="middle" font-size="16" font-family="monospace" fill="#92400e">2⁻³ = 1/8 = 0.125</text>
<text x="400" y="382" text-anchor="middle" font-size="26" font-family="sans-serif" font-weight="800" fill="#7c2d12">Exponents and Powers</text>`
  },

  'factorisation-8': {
    bg: ['#f5f3ff','#ede9fe'], accent: '#8b5cf6',
    svg: `<rect x="60" y="70" width="680" height="70" rx="16" fill="#ddd6fe" stroke="#8b5cf6" stroke-width="2.5"/>
<text x="400" y="115" text-anchor="middle" font-size="26" font-family="sans-serif" font-weight="900" fill="#3b0764">Factorisation — Reversing Expansion</text>
<rect x="80" y="165" width="200" height="115" rx="14" fill="#ede9fe" stroke="#8b5cf6" stroke-width="2"/>
<text x="180" y="193" text-anchor="middle" font-size="13" font-weight="800" font-family="sans-serif" fill="#5b21b6">Common Factor</text>
<text x="180" y="225" text-anchor="middle" font-size="16" font-family="monospace" fill="#6d28d9">4x + 8</text>
<text x="180" y="260" text-anchor="middle" font-size="16" font-family="monospace" font-weight="700" fill="#4c1d95">= 4(x + 2)</text>
<rect x="300" y="165" width="200" height="115" rx="14" fill="#c4b5fd" stroke="#7c3aed" stroke-width="2"/>
<text x="400" y="193" text-anchor="middle" font-size="13" font-weight="800" font-family="sans-serif" fill="#3b0764">By Grouping</text>
<text x="400" y="218" text-anchor="middle" font-size="14" font-family="monospace" fill="#4c1d95">ax+ay+bx+by</text>
<text x="400" y="245" text-anchor="middle" font-size="14" font-family="monospace" fill="#4c1d95">=a(x+y)+b(x+y)</text>
<text x="400" y="268" text-anchor="middle" font-size="14" font-family="monospace" font-weight="700" fill="#3b0764">=(a+b)(x+y)</text>
<rect x="520" y="165" width="200" height="115" rx="14" fill="#a78bfa" stroke="#6d28d9" stroke-width="2"/>
<text x="620" y="193" text-anchor="middle" font-size="13" font-weight="800" font-family="sans-serif" fill="#fff">Using Identity</text>
<text x="620" y="225" text-anchor="middle" font-size="16" font-family="monospace" fill="#ede9fe">x² − 25</text>
<text x="620" y="260" text-anchor="middle" font-size="16" font-family="monospace" font-weight="700" fill="#fff">=(x+5)(x−5)</text>
<text x="400" y="382" text-anchor="middle" font-size="26" font-family="sans-serif" font-weight="800" fill="#3b0764">Factorisation</text>`
  },

  // ── SCIENCE ─────────────────────────────────────────────────────
  'cell': {
    bg: ['#f0fdf4','#bbf7d0'], accent: '#16a34a',
    svg: `<!-- Animal cell diagram -->
<ellipse cx="400" cy="210" rx="280" ry="180" fill="#dcfce7" stroke="#16a34a" stroke-width="3"/>
<!-- Nucleus -->
<ellipse cx="360" cy="195" rx="80" ry="65" fill="#86efac" stroke="#15803d" stroke-width="2.5"/>
<text x="360" y="200" text-anchor="middle" font-size="13" font-weight="700" font-family="sans-serif" fill="#14532d">Nucleus</text>
<!-- Organelles -->
<ellipse cx="520" cy="160" rx="40" ry="20" fill="#4ade80" stroke="#16a34a" stroke-width="1.5"/>
<text x="520" y="165" text-anchor="middle" font-size="11" font-family="sans-serif" fill="#14532d">Mito.</text>
<ellipse cx="500" cy="255" rx="35" ry="16" fill="#86efac" stroke="#15803d" stroke-width="1.5"/>
<text x="500" y="260" text-anchor="middle" font-size="10" font-family="sans-serif" fill="#14532d">Vacuole</text>
<ellipse cx="240" cy="240" rx="30" ry="18" fill="#4ade80" stroke="#16a34a" stroke-width="1.5"/>
<text x="240" y="245" text-anchor="middle" font-size="10" font-family="sans-serif" fill="#14532d">ER</text>
<rect x="80" y="68" width="640" height="46" rx="12" fill="#15803d"/>
<text x="400" y="98" text-anchor="middle" font-size="18" font-family="sans-serif" font-weight="900" fill="#fff">Cell — Structure and Functions</text>`
  },

  'combustion-flame': {
    bg: ['#fff7ed','#fed7aa'], accent: '#f97316',
    svg: `<!-- Flame -->
<path d="M380,320 Q300,240 340,160 Q360,100 400,80 Q440,100 460,160 Q500,240 420,320 Z" fill="#fbbf24" opacity=".9"/>
<path d="M380,320 Q320,260 355,185 Q375,130 400,110 Q425,130 445,185 Q480,260 420,320 Z" fill="#f97316" opacity=".9"/>
<path d="M380,320 Q350,280 368,225 Q384,180 400,165 Q416,180 432,225 Q450,280 420,320 Z" fill="#ef4444" opacity=".85"/>
<text x="400" y="310" text-anchor="middle" font-size="13" font-weight="700" font-family="sans-serif" fill="#7c2d12">Outer · Middle · Inner</text>
<!-- Zones label -->
<rect x="60" y="65" width="280" height="72" rx="12" fill="#ffedd5" stroke="#f97316" stroke-width="2"/>
<text x="200" y="95" text-anchor="middle" font-size="14" font-weight="800" font-family="sans-serif" fill="#9a3412">Combustion needs:</text>
<text x="200" y="120" text-anchor="middle" font-size="13" font-family="sans-serif" fill="#7c2d12">Fuel · Heat · Oxygen (Fire triangle)</text>
<rect x="450" y="65" width="290" height="72" rx="12" fill="#fee2e2" stroke="#dc2626" stroke-width="2"/>
<text x="595" y="95" text-anchor="middle" font-size="14" font-weight="800" font-family="sans-serif" fill="#991b1b">Ignition Temperature</text>
<text x="595" y="120" text-anchor="middle" font-size="13" font-family="sans-serif" fill="#7f1d1d">Minimum temp to catch fire</text>
<text x="400" y="390" text-anchor="middle" font-size="24" font-family="sans-serif" font-weight="800" fill="#7c2d12">Combustion and Flame</text>`
  },

  'crop-production-management': {
    bg: ['#f0fdf4','#dcfce7'], accent: '#22c55e',
    svg: `<!-- Soil layers -->
<rect x="60" y="240" width="680" height="130" rx="8" fill="#a16207"/>
<rect x="60" y="195" width="680" height="50" rx="4" fill="#ca8a04"/>
<!-- Crops -->
${Array.from({length:9},(_,i)=>{
const x=100+i*72;
return `<line x1="${x}" y1="195" x2="${x}" y2="115" stroke="#16a34a" stroke-width="3"/>
<path d="M${x},125 Q${x-20},100 ${x-35},90" fill="none" stroke="#22c55e" stroke-width="2.5"/>
<path d="M${x},125 Q${x+20},100 ${x+35},90" fill="none" stroke="#22c55e" stroke-width="2.5"/>`;
}).join('')}
<!-- Sun -->
<circle cx="680" cy="90" r="42" fill="#fbbf24" stroke="#f59e0b" stroke-width="2.5"/>
<text x="680" y="95" text-anchor="middle" font-size="22" font-family="sans-serif">☀️</text>
<!-- Labels -->
<rect x="80" y="60" width="340" height="45" rx="12" fill="#dcfce7" stroke="#22c55e" stroke-width="2"/>
<text x="250" y="88" text-anchor="middle" font-size="15" font-weight="800" font-family="sans-serif" fill="#14532d">Kharif · Rabi · Zaid Crops</text>
<text x="400" y="390" text-anchor="middle" font-size="24" font-family="sans-serif" font-weight="800" fill="#14532d">Crop Production and Management</text>`
  },

  'microorganisms': {
    bg: ['#fdf4ff','#f3e8ff'], accent: '#a855f7',
    svg: `<!-- Bacteria -->
<ellipse cx="160" cy="160" rx="65" ry="40" fill="#e9d5ff" stroke="#a855f7" stroke-width="2.5"/>
<line x1="160" y1="120" x2="160" y2="80" stroke="#a855f7" stroke-width="2" stroke-dasharray="5,3"/>
<line x1="225" y1="160" x2="270" y2="145" stroke="#a855f7" stroke-width="2" stroke-dasharray="5,3"/>
<line x1="95" y1="160" x2="50" y2="145" stroke="#a855f7" stroke-width="2" stroke-dasharray="5,3"/>
<text x="160" y="165" text-anchor="middle" font-size="14" font-weight="700" font-family="sans-serif" fill="#6b21a8">Bacteria</text>
<text x="160" y="210" text-anchor="middle" font-size="12" font-family="sans-serif" fill="#7e22ce">Harmful · Helpful</text>
<!-- Virus -->
<circle cx="400" cy="165" r="50" fill="#fce7f3" stroke="#ec4899" stroke-width="2.5"/>
${Array.from({length:8},(_,i)=>{
const a=i*45*Math.PI/180,x1=400+50*Math.cos(a),y1=165+50*Math.sin(a),x2=400+68*Math.cos(a),y2=165+68*Math.sin(a);
return `<line x1="${x1.toFixed(0)}" y1="${y1.toFixed(0)}" x2="${x2.toFixed(0)}" y2="${y2.toFixed(0)}" stroke="#ec4899" stroke-width="2.5"/>`;
}).join('')}
<text x="400" y="170" text-anchor="middle" font-size="14" font-weight="700" font-family="sans-serif" fill="#9d174d">Virus</text>
<!-- Fungus -->
<circle cx="620" cy="140" r="30" fill="#fef9c3" stroke="#ca8a04" stroke-width="2"/>
<line x1="620" y1="170" x2="620" y2="220" stroke="#92400e" stroke-width="3"/>
<ellipse cx="620" cy="220" rx="45" ry="12" fill="#fde68a" stroke="#ca8a04" stroke-width="1.5"/>
<text x="620" y="210" text-anchor="middle" font-size="13" font-weight="700" font-family="sans-serif" fill="#78350f">Fungus</text>
<rect x="100" y="268" width="600" height="55" rx="12" fill="#e9d5ff" stroke="#a855f7" stroke-width="2"/>
<text x="400" y="298" text-anchor="middle" font-size="15" font-family="sans-serif" font-weight="700" fill="#581c87">Friend: curd, bread, vaccines · Foe: disease, spoilage</text>
<text x="400" y="383" text-anchor="middle" font-size="24" font-family="sans-serif" font-weight="800" fill="#581c87">Microorganisms: Friend and Foe</text>`
  },

  'force-pressure': {
    bg: ['#eff6ff','#dbeafe'], accent: '#3b82f6',
    svg: `<!-- Block with arrows -->
<rect x="270" y="170" width="260" height="120" rx="12" fill="#bfdbfe" stroke="#3b82f6" stroke-width="3"/>
<text x="400" y="240" text-anchor="middle" font-size="18" font-weight="700" font-family="sans-serif" fill="#1e3a8a">Object</text>
<!-- Force arrows -->
<line x1="100" y1="230" x2="265" y2="230" stroke="#16a34a" stroke-width="4"/>
<polygon points="265,222 285,230 265,238" fill="#16a34a"/>
<text x="180" y="215" text-anchor="middle" font-size="15" font-weight="700" font-family="sans-serif" fill="#166534">Push</text>
<line x1="700" y1="230" x2="535" y2="230" stroke="#dc2626" stroke-width="4"/>
<polygon points="535,222 515,230 535,238" fill="#dc2626"/>
<text x="620" y="215" text-anchor="middle" font-size="15" font-weight="700" font-family="sans-serif" fill="#991b1b">Pull</text>
<!-- Pressure formula -->
<rect x="130" y="310" width="540" height="55" rx="12" fill="#1d4ed8"/>
<text x="400" y="345" text-anchor="middle" font-size="22" font-family="monospace" font-weight="900" fill="#fff">Pressure = Force / Area  (Pa = N/m²)</text>
<rect x="150" y="78" width="500" height="65" rx="14" fill="#dbeafe" stroke="#3b82f6" stroke-width="2"/>
<text x="400" y="108" text-anchor="middle" font-size="16" font-weight="800" font-family="sans-serif" fill="#1e3a8a">Contact Force · Non-contact Force</text>
<text x="400" y="130" text-anchor="middle" font-size="14" font-family="sans-serif" fill="#1e40af">Gravity · Magnetic · Electrostatic</text>
<text x="400" y="383" text-anchor="middle" font-size="26" font-family="sans-serif" font-weight="800" fill="#1e3a8a">Force and Pressure</text>`
  },

  'sound-8': {
    bg: ['#f5f3ff','#ddd6fe'], accent: '#8b5cf6',
    svg: `<!-- Wave -->
<path d="M 60,210 Q 120,130 180,210 Q 240,290 300,210 Q 360,130 420,210 Q 480,290 540,210 Q 600,130 660,210 Q 720,290 740,210" fill="none" stroke="#8b5cf6" stroke-width="4"/>
<!-- Amplitude label -->
<line x1="60" y1="210" x2="60" y2="130" stroke="#dc2626" stroke-width="2" stroke-dasharray="5,3"/>
<line x1="120" y1="210" x2="120" y2="130" stroke="#dc2626" stroke-width="2" stroke-dasharray="5,3"/>
<line x1="60" y1="130" x2="120" y2="130" stroke="#dc2626" stroke-width="2"/>
<text x="90" y="120" text-anchor="middle" font-size="12" font-family="sans-serif" font-weight="700" fill="#dc2626">Amplitude</text>
<!-- Wavelength -->
<line x1="60" y1="290" x2="300" y2="290" stroke="#16a34a" stroke-width="2"/>
<text x="180" y="310" text-anchor="middle" font-size="12" font-family="sans-serif" font-weight="700" fill="#166534">Wavelength (λ)</text>
<!-- Boxes -->
<rect x="80" y="60" width="280" height="52" rx="10" fill="#ede9fe" stroke="#8b5cf6" stroke-width="2"/>
<text x="220" y="92" text-anchor="middle" font-size="15" font-family="monospace" font-weight="700" fill="#5b21b6">Speed = Freq × Wavelength</text>
<rect x="420" y="60" width="300" height="52" rx="10" fill="#ddd6fe" stroke="#7c3aed" stroke-width="2"/>
<text x="570" y="92" text-anchor="middle" font-size="15" font-family="monospace" font-weight="700" fill="#4c1d95">v = f × λ  (343 m/s in air)</text>
<text x="400" y="382" text-anchor="middle" font-size="26" font-family="sans-serif" font-weight="800" fill="#3b0764">Sound</text>`
  },

  'synthetic-fibres': {
    bg: ['#fdf4ff','#f3e8ff'], accent: '#c026d3',
    svg: `<!-- Fibre strands -->
${Array.from({length:6},(_,i)=>{
const y=85+i*40,col=['#d946ef','#c026d3','#a21caf','#86198f','#701a75','#4a044e'][i];
return `<path d="M 60,${y} Q 200,${y-15} 400,${y} Q 600,${y+15} 740,${y}" fill="none" stroke="${col}" stroke-width="4" opacity=".75"/>`;
}).join('')}
<!-- Type boxes -->
<rect x="80" y="310" width="150" height="65" rx="12" fill="#fae8ff" stroke="#c026d3" stroke-width="2"/>
<text x="155" y="338" text-anchor="middle" font-size="13" font-weight="800" font-family="sans-serif" fill="#701a75">Nylon</text>
<text x="155" y="360" text-anchor="middle" font-size="11" font-family="sans-serif" fill="#86198f">Strongest</text>
<rect x="250" y="310" width="150" height="65" rx="12" fill="#fce7f3" stroke="#db2777" stroke-width="2"/>
<text x="325" y="338" text-anchor="middle" font-size="13" font-weight="800" font-family="sans-serif" fill="#9d174d">Rayon</text>
<text x="325" y="360" text-anchor="middle" font-size="11" font-family="sans-serif" fill="#be185d">Semi-synthetic</text>
<rect x="420" y="310" width="150" height="65" rx="12" fill="#f5d0fe" stroke="#a21caf" stroke-width="2"/>
<text x="495" y="338" text-anchor="middle" font-size="13" font-weight="800" font-family="sans-serif" fill="#701a75">Polyester</text>
<text x="495" y="360" text-anchor="middle" font-size="11" font-family="sans-serif" fill="#86198f">Wrinkle-free</text>
<rect x="590" y="310" width="140" height="65" rx="12" fill="#ede9fe" stroke="#7c3aed" stroke-width="2"/>
<text x="660" y="338" text-anchor="middle" font-size="13" font-weight="800" font-family="sans-serif" fill="#5b21b6">Acrylic</text>
<text x="660" y="360" text-anchor="middle" font-size="11" font-family="sans-serif" fill="#6d28d9">Wool-like</text>
<text x="400" y="65" text-anchor="middle" font-size="26" font-family="sans-serif" font-weight="800" fill="#4a044e">Synthetic Fibres and Plastics</text>`
  },

  'reproduction-animals': {
    bg: ['#fdf2f8','#fce7f3'], accent: '#ec4899',
    svg: `<!-- Two main modes -->
<rect x="60" y="80" width="300" height="220" rx="16" fill="#fce7f3" stroke="#ec4899" stroke-width="2.5"/>
<text x="210" y="115" text-anchor="middle" font-size="16" font-weight="800" font-family="sans-serif" fill="#9d174d">Sexual Reproduction</text>
<text x="210" y="145" text-anchor="middle" font-size="14" font-family="sans-serif" fill="#be185d">♂ sperm + ♀ egg</text>
<text x="210" y="175" text-anchor="middle" font-size="14" font-family="sans-serif" fill="#be185d">→ Fertilisation</text>
<text x="210" y="205" text-anchor="middle" font-size="13" font-family="sans-serif" fill="#9d174d">Internal: mammals</text>
<text x="210" y="230" text-anchor="middle" font-size="13" font-family="sans-serif" fill="#9d174d">External: fish, frogs</text>
<text x="210" y="265" text-anchor="middle" font-size="13" font-family="sans-serif" fill="#be185d">Oviparous · Viviparous</text>
<rect x="440" y="80" width="300" height="220" rx="16" fill="#f0fdf4" stroke="#16a34a" stroke-width="2.5"/>
<text x="590" y="115" text-anchor="middle" font-size="16" font-weight="800" font-family="sans-serif" fill="#14532d">Asexual Reproduction</text>
<text x="590" y="148" text-anchor="middle" font-size="14" font-family="sans-serif" fill="#15803d">Binary Fission (Amoeba)</text>
<text x="590" y="178" text-anchor="middle" font-size="14" font-family="sans-serif" fill="#16a34a">Budding (Hydra)</text>
<text x="590" y="208" text-anchor="middle" font-size="14" font-family="sans-serif" fill="#15803d">Spore formation</text>
<text x="590" y="260" text-anchor="middle" font-size="13" font-family="sans-serif" fill="#14532d">Single parent, identical offspring</text>
<rect x="150" y="320" width="500" height="52" rx="12" fill="#fce7f3" stroke="#ec4899" stroke-width="2"/>
<text x="400" y="352" text-anchor="middle" font-size="15" font-family="sans-serif" font-weight="700" fill="#9d174d">Cloning — identical DNA copy of organism</text>
<text x="400" y="383" text-anchor="middle" font-size="24" font-family="sans-serif" font-weight="800" fill="#831843">Reproduction in Animals</text>`
  },

  'coal-petroleum-8': {
    bg: ['#1c1917','#292524'], accent: '#f59e0b',
    svg: `<!-- Dark underground scene -->
<rect x="0" y="0" width="800" height="420" fill="#1c1917" rx="0"/>
<rect x="0" y="260" width="800" height="160" fill="#292524" rx="0"/>
<!-- Coal seam -->
<rect x="80" y="275" width="280" height="60" rx="8" fill="#0f172a" stroke="#475569" stroke-width="2"/>
<text x="220" y="312" text-anchor="middle" font-size="15" font-weight="700" font-family="sans-serif" fill="#94a3b8">Coal Seam</text>
<!-- Oil derrick -->
<polygon points="560,100 600,100 580,260" fill="none" stroke="#f59e0b" stroke-width="3"/>
<line x1="575" y1="170" x2="620" y2="180" stroke="#f59e0b" stroke-width="2"/>
<line x1="575" y1="200" x2="540" y2="210" stroke="#f59e0b" stroke-width="2"/>
<rect x="555" y="260" width="50" height="60" fill="#b45309" stroke="#f59e0b" stroke-width="2"/>
<!-- Labels -->
<rect x="80" y="65" width="280" height="80" rx="12" fill="rgba(245,158,11,0.15)" stroke="#f59e0b" stroke-width="1.5"/>
<text x="220" y="98" text-anchor="middle" font-size="14" font-weight="800" font-family="sans-serif" fill="#fbbf24">COAL</text>
<text x="220" y="120" text-anchor="middle" font-size="12" font-family="sans-serif" fill="#d97706">Carbonisation of plants</text>
<text x="220" y="138" text-anchor="middle" font-size="12" font-family="sans-serif" fill="#d97706">Coke · Coal tar · Coal gas</text>
<rect x="440" y="65" width="280" height="80" rx="12" fill="rgba(245,158,11,0.15)" stroke="#f59e0b" stroke-width="1.5"/>
<text x="580" y="98" text-anchor="middle" font-size="14" font-weight="800" font-family="sans-serif" fill="#fbbf24">PETROLEUM</text>
<text x="580" y="120" text-anchor="middle" font-size="12" font-family="sans-serif" fill="#d97706">Fractional distillation</text>
<text x="580" y="138" text-anchor="middle" font-size="12" font-family="sans-serif" fill="#d97706">Petrol · Diesel · Kerosene · LPG</text>
<text x="400" y="390" text-anchor="middle" font-size="22" font-family="sans-serif" font-weight="800" fill="#fbbf24">Coal and Petroleum</text>`
  },

  'light-reflection-8': {
    bg: ['#0f172a','#1e293b'], accent: '#38bdf8',
    svg: `<rect x="0" y="0" width="800" height="420" fill="#0f172a"/>
<!-- Mirror -->
<rect x="360" y="80" width="14" height="260" rx="4" fill="#94a3b8"/>
<line x1="374" y1="80" x2="374" y2="340" stroke="#38bdf8" stroke-width="2.5"/>
<!-- Incident ray -->
<line x1="90" y1="120" x2="374" y2="210" stroke="#fbbf24" stroke-width="3"/>
<polygon points="360,205 374,210 362,220" fill="#fbbf24"/>
<text x="210" y="148" font-size="13" font-family="sans-serif" font-weight="700" fill="#fbbf24">Incident ray</text>
<!-- Reflected ray -->
<line x1="374" y1="210" x2="90" y2="300" stroke="#38bdf8" stroke-width="3"/>
<polygon points="102,298 90,300 99,291" fill="#38bdf8"/>
<text x="200" y="295" font-size="13" font-family="sans-serif" font-weight="700" fill="#38bdf8">Reflected ray</text>
<!-- Normal -->
<line x1="374" y1="210" x2="550" y2="210" stroke="#94a3b8" stroke-width="1.5" stroke-dasharray="8,4"/>
<text x="470" y="205" font-size="13" font-family="sans-serif" fill="#94a3b8">Normal</text>
<!-- Angle arcs -->
<path d="M 374,210 L 340,165" stroke="#fbbf24" stroke-width="1.5"/>
<path d="M 374,210 L 340,255" stroke="#38bdf8" stroke-width="1.5"/>
<text x="330" y="200" font-size="13" font-family="sans-serif" fill="#fbbf24">∠i</text>
<text x="330" y="255" font-size="13" font-family="sans-serif" fill="#38bdf8">∠r</text>
<rect x="420" y="100" width="320" height="70" rx="12" fill="rgba(56,189,248,0.15)" stroke="#38bdf8" stroke-width="1.5"/>
<text x="580" y="130" text-anchor="middle" font-size="15" font-weight="700" font-family="sans-serif" fill="#7dd3fc">Laws of Reflection</text>
<text x="580" y="155" text-anchor="middle" font-size="13" font-family="sans-serif" fill="#38bdf8">∠i = ∠r · Same plane</text>
<rect x="420" y="195" width="320" height="100" rx="12" fill="rgba(56,189,248,0.1)" stroke="#38bdf8" stroke-width="1.5"/>
<text x="580" y="228" text-anchor="middle" font-size="13" font-weight="700" font-family="sans-serif" fill="#7dd3fc">Real image: convex lens</text>
<text x="580" y="252" text-anchor="middle" font-size="13" font-family="sans-serif" fill="#38bdf8">Virtual image: plane mirror</text>
<text x="580" y="275" text-anchor="middle" font-size="12" font-family="sans-serif" fill="#94a3b8">Lateral inversion</text>
<text x="400" y="388" text-anchor="middle" font-size="22" font-family="sans-serif" font-weight="800" fill="#38bdf8">Light — Reflection and Refraction</text>`
  },

  'stars-solar-system-8': {
    bg: ['#020617','#0f172a'], accent: '#818cf8',
    svg: `<rect x="0" y="0" width="800" height="420" fill="#020617"/>
<!-- Stars background -->
${Array.from({length:40},()=>{const x=Math.random()*800,y=Math.random()*300,r=Math.random()*2+0.5;return `<circle cx="${x.toFixed(0)}" cy="${y.toFixed(0)}" r="${r.toFixed(1)}" fill="#fff" opacity="${(Math.random()*0.6+0.3).toFixed(2)}"/>`;}).join('')}
<!-- Sun -->
<circle cx="400" cy="210" r="52" fill="#fbbf24" stroke="#f59e0b" stroke-width="3"/>
<text x="400" y="215" text-anchor="middle" font-size="26">☀️</text>
<!-- Orbits and planets -->
${[['Mercury','#94a3b8',90,0.15],['Venus','#fde68a',130,0.25],['Earth','#60a5fa',175,0.35],['Mars','#f97316',210,0.45],['Jupiter','#c4b5fd',265,0.15],['Saturn','#fcd34d',330,0.22]].map(([name,col,r,ang])=>{
const x=(400+r*Math.cos(ang*Math.PI*2)).toFixed(0),y=(210+r*Math.sin(ang*Math.PI*2)).toFixed(0);
const pr=name==='Jupiter'?12:name==='Saturn'?10:name==='Earth'?7:5;
return `<circle cx="400" cy="210" r="${r}" fill="none" stroke="${col}" stroke-width="0.8" opacity=".4"/>
<circle cx="${x}" cy="${y}" r="${pr}" fill="${col}"/>`;
}).join('')}
<rect x="0" y="355" width="800" height="65" fill="#020617"/>
<text x="400" y="388" text-anchor="middle" font-size="22" font-family="sans-serif" font-weight="800" fill="#818cf8">Stars and the Solar System</text>`
  },

  // ── HISTORY ─────────────────────────────────────────────────────
  'how-when-where': {
    bg: ['#fffbeb','#fef3c7'], accent: '#d97706',
    svg: `<!-- Timeline -->
<line x1="80" y1="210" x2="720" y2="210" stroke="#92400e" stroke-width="3"/>
${[[120,'1600','EIC arrives'],[230,'1757','Battle of Plassey'],[340,'1857','Revolt'],[450,'1885','Congress'],[560,'1919','Rowlatt'],[660,'1947','Independence']].map(([x,yr,ev])=>`
<circle cx="${x}" cy="210" r="10" fill="#d97706" stroke="#78350f" stroke-width="2"/>
<line x1="${x}" y1="200" x2="${x}" y2="145" stroke="#b45309" stroke-width="1.5" stroke-dasharray="5,3"/>
<text x="${x}" y="135" text-anchor="middle" font-size="13" font-weight="700" font-family="sans-serif" fill="#92400e">${yr}</text>
<text x="${x}" y="250" text-anchor="middle" font-size="11" font-family="sans-serif" fill="#78350f">${ev}</text>`).join('')}
<rect x="150" y="290" width="500" height="55" rx="12" fill="#fde68a" stroke="#d97706" stroke-width="2"/>
<text x="400" y="325" text-anchor="middle" font-size="15" font-family="sans-serif" font-weight="700" fill="#78350f">History: Who, When, Where &amp; How we know it</text>
<text x="400" y="380" text-anchor="middle" font-size="26" font-family="sans-serif" font-weight="800" fill="#78350f">How, When and Where</text>`
  },

  'when-people-rebel-1857': {
    bg: ['#fef2f2','#fee2e2'], accent: '#dc2626',
    svg: `<!-- Flames/revolt symbolism -->
${Array.from({length:5},(_,i)=>{
const x=120+i*130,h=80+Math.abs(Math.sin(i)*40);
return `<path d="M${x},310 Q${x-20},${310-h} ${x},${310-h*1.3} Q${x+20},${310-h} ${x},310 Z" fill="#ef4444" opacity=".7"/>
<path d="M${x},310 Q${x-12},${310-h*0.7} ${x},${310-h} Q${x+12},${310-h*0.7} ${x},310 Z" fill="#f97316" opacity=".8"/>`;
}).join('')}
<!-- Key events box -->
<rect x="80" y="60" width="640" height="130" rx="14" fill="rgba(220,38,38,0.1)" stroke="#dc2626" stroke-width="2"/>
<text x="400" y="95" text-anchor="middle" font-size="18" font-weight="900" font-family="sans-serif" fill="#7f1d1d">The Revolt of 1857</text>
<text x="400" y="123" text-anchor="middle" font-size="14" font-family="sans-serif" fill="#991b1b">Greased cartridges → Sepoy mutiny → Widespread revolt</text>
<text x="400" y="150" text-anchor="middle" font-size="14" font-family="sans-serif" fill="#991b1b">Bahadur Shah Zafar · Rani Lakshmibai · Nana Sahib</text>
<text x="400" y="173" text-anchor="middle" font-size="14" font-family="sans-serif" fill="#7f1d1d">Result: Crown Rule; East India Company dissolved</text>
<text x="400" y="383" text-anchor="middle" font-size="24" font-family="sans-serif" font-weight="800" fill="#7f1d1d">When People Rebel — 1857</text>`
  },

  'women-caste-reform': {
    bg: ['#fdf4ff','#f3e8ff'], accent: '#9333ea',
    svg: `<!-- Reformers -->
${[['Ram Mohan Roy','Widow remarriage','#7c3aed',120],['Jyotirao Phule','Caste equality','#a855f7',340],['Pandita Ramabai','Women\'s rights','#c026d3',560]].map(([name,role,col,x])=>`
<circle cx="${x}" cy="165" r="55" fill="none" stroke="${col}" stroke-width="3"/>
<text x="${x}" y="155" text-anchor="middle" font-size="20" font-family="sans-serif">👤</text>
<text x="${x}" y="200" text-anchor="middle" font-size="13" font-weight="800" font-family="sans-serif" fill="${col}">${name}</text>
<text x="${x}" y="220" text-anchor="middle" font-size="11" font-family="sans-serif" fill="#6b21a8">${role}</text>`).join('')}
<rect x="80" y="258" width="640" height="90" rx="14" fill="#f3e8ff" stroke="#9333ea" stroke-width="2"/>
<text x="400" y="288" text-anchor="middle" font-size="15" font-weight="800" font-family="sans-serif" fill="#6b21a8">Key Reforms</text>
<text x="400" y="312" text-anchor="middle" font-size="13" font-family="sans-serif" fill="#7e22ce">Sati abolition (1829) · Widow Remarriage Act (1856)</text>
<text x="400" y="334" text-anchor="middle" font-size="13" font-family="sans-serif" fill="#7e22ce">Girls' education · Abolition of untouchability movement</text>
<text x="400" y="383" text-anchor="middle" font-size="24" font-family="sans-serif" font-weight="800" fill="#581c87">Women, Caste and Reform</text>`
  },

  'making-national-movement': {
    bg: ['#fff7ed','#ffedd5'], accent: '#f97316',
    svg: `<!-- Indian flag colours -->
<rect x="80" y="80" width="640" height="50" rx="8" fill="#f97316"/>
<rect x="80" y="130" width="640" height="50" rx="0" fill="#fff" stroke="#e5e7eb" stroke-width="0.5"/>
<rect x="80" y="180" width="640" height="50" rx="8" fill="#16a34a"/>
<!-- Chakra -->
<circle cx="400" cy="155" r="22" fill="none" stroke="#1d4ed8" stroke-width="2.5"/>
${Array.from({length:12},(_,i)=>{const a=i*30*Math.PI/180,x1=400+22*Math.cos(a),y1=155+22*Math.sin(a),x2=400+14*Math.cos(a),y2=155+14*Math.sin(a);return `<line x1="${x1.toFixed(0)}" y1="${y1.toFixed(0)}" x2="${x2.toFixed(0)}" y2="${y2.toFixed(0)}" stroke="#1d4ed8" stroke-width="1.5"/>`;}).join('')}
<!-- Key events -->
<rect x="80" y="258" width="640" height="100" rx="12" fill="#ffedd5" stroke="#f97316" stroke-width="2"/>
<text x="400" y="287" text-anchor="middle" font-size="15" font-weight="800" font-family="sans-serif" fill="#7c2d12">Freedom Struggle Milestones</text>
<text x="400" y="312" text-anchor="middle" font-size="13" font-family="sans-serif" fill="#9a3412">1905 Partition of Bengal · 1906 Muslim League · 1916 Lucknow Pact</text>
<text x="400" y="334" text-anchor="middle" font-size="13" font-family="sans-serif" fill="#9a3412">Non-Cooperation (1920) · Civil Disobedience (1930) · Quit India (1942)</text>
<text x="400" y="383" text-anchor="middle" font-size="24" font-family="sans-serif" font-weight="800" fill="#7c2d12">The Making of the National Movement</text>`
  },

  'from-trade-to-territory-8': {
    bg: ['#f0f9ff','#e0f2fe'], accent: '#0369a1',
    svg: `<!-- Ship -->
<path d="M 160,230 Q 200,200 280,200 L 320,230 Q 280,250 200,250 Z" fill="#bae6fd" stroke="#0369a1" stroke-width="2.5"/>
<rect x="235" y="150" width="10" height="55" fill="#0369a1"/>
<path d="M 245,155 L 295,175 L 245,190 Z" fill="#bfdbfe" stroke="#0369a1" stroke-width="1.5"/>
<text x="240" y="280" text-anchor="middle" font-size="13" font-weight="700" font-family="sans-serif" fill="#075985">EIC Ship 1600</text>
<!-- Arrow to map -->
<line x1="330" y1="225" x2="420" y2="225" stroke="#0369a1" stroke-width="2.5"/>
<polygon points="418,218 432,225 418,232" fill="#0369a1"/>
<!-- India outline simplified -->
<path d="M 450,120 L 520,105 L 620,125 L 660,200 L 640,280 L 580,330 L 520,340 L 470,300 L 435,240 Z" fill="#e0f2fe" stroke="#0369a1" stroke-width="2.5"/>
<text x="540" y="225" text-anchor="middle" font-size="14" font-weight="700" font-family="sans-serif" fill="#0c4a6e">India</text>
<!-- Key events -->
<rect x="80" y="355" width="640" height="45" rx="10" fill="#bae6fd" stroke="#0369a1" stroke-width="1.5"/>
<text x="400" y="383" text-anchor="middle" font-size="14" font-family="sans-serif" font-weight="700" fill="#0c4a6e">1600 EIC charter → Trade → Revenue → Territory → Crown (1858)</text>`
  },

  'weavers-iron-smelters-8': {
    bg: ['#fffbeb','#fef3c7'], accent: '#ca8a04',
    svg: `<!-- Loom symbol -->
<rect x="80" y="110" width="280" height="200" rx="10" fill="#fde68a" stroke="#ca8a04" stroke-width="2.5"/>
${Array.from({length:8},(_,i)=>`<line x1="100" y1="${135+i*22}" x2="340" y2="${135+i*22}" stroke="#92400e" stroke-width="2" opacity=".7"/>`).join('')}
${Array.from({length:6},(_,i)=>`<line x1="${130+i*35}" y1="110" x2="${130+i*35}" y2="310" stroke="#ca8a04" stroke-width="1.5" opacity=".6"/>`).join('')}
<text x="210" y="335" text-anchor="middle" font-size="14" font-weight="700" font-family="sans-serif" fill="#78350f">Traditional Loom</text>
<!-- Furnace symbol -->
<rect x="450" y="150" width="180" height="150" rx="12" fill="#fca5a5" stroke="#dc2626" stroke-width="2.5"/>
<path d="M 490,230 Q 500,190 540,175 Q 580,190 590,230" fill="#f97316" opacity=".7"/>
<path d="M 500,230 Q 510,200 540,188 Q 570,200 580,230" fill="#fbbf24" opacity=".8"/>
<text x="540" y="320" text-anchor="middle" font-size="14" font-weight="700" font-family="sans-serif" fill="#7f1d1d">Iron Smelting</text>
<rect x="80" y="63" width="640" height="34" rx="10" fill="#ca8a04"/>
<text x="400" y="86" text-anchor="middle" font-size="15" font-family="sans-serif" font-weight="900" fill="#fff">British Policy → Destroyed Indian industries</text>
<text x="400" y="382" text-anchor="middle" font-size="22" font-family="sans-serif" font-weight="800" fill="#78350f">Weavers, Iron Smelters and Factory Owners</text>`
  },

  'india-after-independence-8': {
    bg: ['#f0fdf4','#dcfce7'], accent: '#16a34a',
    svg: `<!-- Map + Constitution book -->
<path d="M 120,100 L 190,85 L 290,100 L 330,170 L 310,250 L 260,300 L 205,310 L 160,275 L 130,200 Z" fill="#bbf7d0" stroke="#16a34a" stroke-width="2.5"/>
<text x="220" y="200" text-anchor="middle" font-size="14" font-weight="700" font-family="sans-serif" fill="#14532d">India</text>
<!-- Constitution book -->
<rect x="400" y="110" width="220" height="290" rx="12" fill="#1e3a8a"/>
<rect x="412" y="122" width="196" height="266" rx="8" fill="#dbeafe"/>
<text x="510" y="180" text-anchor="middle" font-size="15" font-weight="800" font-family="sans-serif" fill="#1e3a8a">Constitution</text>
<text x="510" y="205" text-anchor="middle" font-size="13" font-family="sans-serif" fill="#1e40af">of India</text>
<text x="510" y="235" text-anchor="middle" font-size="11" font-family="sans-serif" fill="#1e40af">26 Jan 1950</text>
<text x="510" y="260" text-anchor="middle" font-size="11" font-family="sans-serif" fill="#374151">Sovereignty</text>
<text x="510" y="280" text-anchor="middle" font-size="11" font-family="sans-serif" fill="#374151">Secularism</text>
<text x="510" y="300" text-anchor="middle" font-size="11" font-family="sans-serif" fill="#374151">Democracy</text>
<text x="510" y="320" text-anchor="middle" font-size="11" font-family="sans-serif" fill="#374151">Equality</text>
<text x="400" y="390" text-anchor="middle" font-size="22" font-family="sans-serif" font-weight="800" fill="#14532d">India After Independence</text>`
  },

  // ── GEOGRAPHY ───────────────────────────────────────────────────
  'resources': {
    bg: ['#f0fdf4','#dcfce7'], accent: '#22c55e',
    svg: `<!-- Resource types grid -->
${[['Natural','🌲','Land, Water, Forest','#16a34a','#dcfce7',100,100],['Human','👥','Skills, Knowledge','#2563eb','#dbeafe',420,100],['Man-made','🏭','Roads, Buildings','#ea580c','#ffedd5',100,290],['Biotic','🐟','Plants, Animals','#9333ea','#f3e8ff',420,290]].map(([type,icon,eg,col,bg2,x,y])=>`
<rect x="${x}" y="${y}" width="260" height="160" rx="16" fill="${bg2}" stroke="${col}" stroke-width="2.5"/>
<text x="${x+130}" y="${y+50}" text-anchor="middle" font-size="28" font-family="sans-serif">${icon}</text>
<text x="${x+130}" y="${y+90}" text-anchor="middle" font-size="16" font-weight="800" font-family="sans-serif" fill="${col}">${type} Resource</text>
<text x="${x+130}" y="${y+118}" text-anchor="middle" font-size="12" font-family="sans-serif" fill="#374151">${eg}</text>`).join('')}
<text x="400" y="55" text-anchor="middle" font-size="26" font-family="sans-serif" font-weight="800" fill="#14532d">Resources</text>`
  },

  'agriculture-8': {
    bg: ['#f0fdf4','#bbf7d0'], accent: '#16a34a',
    svg: `<!-- Farmland with crops -->
<rect x="0" y="0" width="800" height="420" fill="#f0fdf4"/>
<!-- Sky -->
<rect x="0" y="0" width="800" height="180" fill="#bae6fd" rx="0"/>
<!-- Sun -->
<circle cx="680" cy="75" r="48" fill="#fbbf24" stroke="#f59e0b" stroke-width="2.5"/>
<!-- Soil -->
<rect x="0" y="260" width="800" height="160" fill="#a16207"/>
<rect x="0" y="230" width="800" height="35" fill="#ca8a04"/>
<!-- Crops -->
${Array.from({length:13},(_,i)=>{const x=50+i*57;return `<line x1="${x}" y1="230" x2="${x}" y2="145" stroke="#16a34a" stroke-width="3"/>
<path d="M${x},150 Q${x-18},128 ${x-32},118" fill="none" stroke="#22c55e" stroke-width="2.5"/>
<path d="M${x},150 Q${x+18},128 ${x+32},118" fill="none" stroke="#22c55e" stroke-width="2.5"/>`;}).join('')}
<!-- Labels -->
<rect x="80" y="290" width="280" height="80" rx="12" fill="rgba(255,255,255,0.85)" stroke="#16a34a" stroke-width="1.5"/>
<text x="220" y="322" text-anchor="middle" font-size="14" font-weight="800" font-family="sans-serif" fill="#14532d">Types of Farming</text>
<text x="220" y="344" text-anchor="middle" font-size="12" font-family="sans-serif" fill="#15803d">Subsistence · Commercial</text>
<text x="220" y="362" text-anchor="middle" font-size="12" font-family="sans-serif" fill="#15803d">Plantation · Mixed</text>
<rect x="440" y="290" width="280" height="80" rx="12" fill="rgba(255,255,255,0.85)" stroke="#16a34a" stroke-width="1.5"/>
<text x="580" y="322" text-anchor="middle" font-size="14" font-weight="800" font-family="sans-serif" fill="#14532d">Major Crops</text>
<text x="580" y="344" text-anchor="middle" font-size="12" font-family="sans-serif" fill="#15803d">Wheat · Rice · Cotton</text>
<text x="580" y="362" text-anchor="middle" font-size="12" font-family="sans-serif" fill="#15803d">Sugarcane · Jute · Tea</text>
<text x="400" y="397" text-anchor="middle" font-size="24" font-family="sans-serif" font-weight="800" fill="#14532d">Agriculture</text>`
  },

  'industries-geo-8': {
    bg: ['#f1f5f9','#e2e8f0'], accent: '#475569',
    svg: `<!-- Factory silhouette -->
<rect x="100" y="180" width="600" height="200" rx="8" fill="#cbd5e1" stroke="#475569" stroke-width="2.5"/>
<!-- Chimneys -->
${[160,280,400,520,640].map(x=>`<rect x="${x-20}" y="${x===400?90:110}" width="40" height="${x===400?92:72}" rx="4" fill="#94a3b8" stroke="#475569" stroke-width="2"/>
<path d="M${x-25},${x===400?95:115} Q${x},${x===400?75:95} ${x+25},${x===400?95:115}" fill="#e2e8f0" stroke="#475569" stroke-width="1.5"/>
<ellipse cx="${x}" cy="${x===400?92:112}" rx="25" ry="10" fill="#e2e8f0" stroke="#475569" stroke-width="1.5"/>`).join('')}
<!-- Windows -->
${[130,200,270,340,430,500,570,640].map(x=>`<rect x="${x}" y="215" width="45" height="40" rx="4" fill="#93c5fd" stroke="#475569" stroke-width="1.5"/>`).join('')}
<!-- Smoke -->
${[160,280,400,520,640].map((x,i)=>`<ellipse cx="${x}" cy="${60-i%3*8}" rx="22" ry="14" fill="#e2e8f0" opacity=".7"/>
<ellipse cx="${x+12}" cy="${38-i%3*6}" rx="18" ry="11" fill="#f8fafc" opacity=".6"/>`).join('')}
<rect x="120" y="352" width="560" height="42" rx="10" fill="#475569"/>
<text x="400" y="379" text-anchor="middle" font-size="16" font-family="sans-serif" font-weight="800" fill="#fff">Industries — Agro · Textile · Iron &amp; Steel · IT</text>`
  },

  'mineral-resources-8': {
    bg: ['#1e1b4b','#312e81'], accent: '#818cf8',
    svg: `<rect x="0" y="0" width="800" height="420" fill="#1e1b4b"/>
<!-- Crystal/gem shapes -->
${[['#f59e0b',130,160,60,'Gold'],[  '#60a5fa',280,140,55,'Iron'],['#818cf8',430,170,50,'Coal'],['#34d399',580,150,58,'Copper'],['#f472b6',700,155,48,'Diamond']].map(([col,cx,cy,r,name])=>`
<polygon points="${cx},${cy-r} ${cx+r*0.7},${cy+r*0.3} ${cx},${cy+r} ${cx-r*0.7},${cy+r*0.3}" fill="${col}" opacity=".85" stroke="${col}" stroke-width="1.5"/>
<polygon points="${cx},${cy-r} ${cx+r*0.7},${cy+r*0.3} ${cx},${cy}" fill="${col}" opacity=".6"/>
<text x="${cx}" y="${cy+r+22}" text-anchor="middle" font-size="14" font-weight="700" font-family="sans-serif" fill="${col}">${name}</text>`).join('')}
<rect x="80" y="270" width="640" height="90" rx="14" fill="rgba(129,140,248,0.15)" stroke="#818cf8" stroke-width="1.5"/>
<text x="400" y="302" text-anchor="middle" font-size="15" font-weight="800" font-family="sans-serif" fill="#a5b4fc">Types of Minerals</text>
<text x="400" y="326" text-anchor="middle" font-size="13" font-family="sans-serif" fill="#818cf8">Metallic: Iron, Copper, Gold · Non-metallic: Coal, Salt, Diamond</text>
<text x="400" y="348" text-anchor="middle" font-size="13" font-family="sans-serif" fill="#818cf8">Extraction: Mining · Quarrying · Drilling</text>
<text x="400" y="390" text-anchor="middle" font-size="24" font-family="sans-serif" font-weight="800" fill="#818cf8">Mineral and Power Resources</text>`
  },

  // ── CIVICS ──────────────────────────────────────────────────────
  'indian-constitution': {
    bg: ['#eff6ff','#dbeafe'], accent: '#2563eb',
    svg: `<!-- Constitution pillars -->
${[['Sovereignty','#1d4ed8',100],['Democracy','#2563eb',240],['Secularism','#3b82f6',380],['Equality','#1e40af',520],['Justice','#1d4ed8',660]].map(([p,col,x])=>`
<rect x="${x}" y="145" width="110" height="195" rx="6" fill="#dbeafe" stroke="${col}" stroke-width="2.5"/>
<rect x="${x}" y="130" width="110" height="20" rx="4" fill="${col}"/>
<text x="${x+55}" y="${145+100}" text-anchor="middle" font-size="13" font-weight="700" font-family="sans-serif" fill="${col}" transform="rotate(-90,${x+55},${145+100})">${p}</text>`).join('')}
<!-- Pediment -->
<polygon points="65,145 735,145 695,100 105,100" fill="#1d4ed8" stroke="#1e3a8a" stroke-width="2"/>
<text x="400" y="130" text-anchor="middle" font-size="16" font-family="sans-serif" font-weight="900" fill="#fff">The Indian Constitution 1950</text>
<rect x="100" y="355" width="600" height="40" rx="10" fill="#1d4ed8"/>
<text x="400" y="381" text-anchor="middle" font-size="15" font-family="sans-serif" font-weight="800" fill="#fff">Fundamental Rights · Directive Principles · Duties</text>`
  },

  'judiciary': {
    bg: ['#fdf4ff','#f3e8ff'], accent: '#9333ea',
    svg: `<!-- Balance of justice -->
<line x1="400" y1="90" x2="400" y2="320" stroke="#6b21a8" stroke-width="4"/>
<line x1="200" y1="160" x2="600" y2="160" stroke="#7c3aed" stroke-width="3.5"/>
<!-- Left pan -->
<path d="M 200,160 Q 240,220 280,220 Q 320,220 360,160" fill="none" stroke="#7c3aed" stroke-width="2.5"/>
<rect x="205" y="218" width="150" height="45" rx="8" fill="#e9d5ff" stroke="#9333ea" stroke-width="2"/>
<text x="280" y="245" text-anchor="middle" font-size="13" font-weight="700" font-family="sans-serif" fill="#5b21b6">Justice</text>
<!-- Right pan -->
<path d="M 440,160 Q 480,220 520,220 Q 560,220 600,160" fill="none" stroke="#7c3aed" stroke-width="2.5"/>
<rect x="445" y="218" width="150" height="45" rx="8" fill="#ede9fe" stroke="#8b5cf6" stroke-width="2"/>
<text x="520" y="245" text-anchor="middle" font-size="13" font-weight="700" font-family="sans-serif" fill="#5b21b6">Law</text>
<!-- Court levels -->
<rect x="80" y="310" width="640" height="80" rx="12" fill="#f3e8ff" stroke="#9333ea" stroke-width="2"/>
<text x="400" y="338" text-anchor="middle" font-size="14" font-weight="800" font-family="sans-serif" fill="#6b21a8">Judiciary Structure</text>
<text x="400" y="362" text-anchor="middle" font-size="13" font-family="sans-serif" fill="#7e22ce">Supreme Court → High Court → District Court → Lok Adalat</text>
<text x="400" y="83" text-anchor="middle" font-size="26" font-family="sans-serif" font-weight="800" fill="#581c87">Judiciary</text>`
  },

  'parliament-laws': {
    bg: ['#f0f9ff','#e0f2fe'], accent: '#0284c7',
    svg: `<!-- Parliament building -->
<rect x="130" y="175" width="540" height="190" rx="4" fill="#bae6fd" stroke="#0284c7" stroke-width="2.5"/>
<!-- Dome -->
<ellipse cx="400" cy="175" rx="130" ry="65" fill="#7dd3fc" stroke="#0284c7" stroke-width="2.5"/>
<rect x="370" y="110" width="60" height="70" rx="4" fill="#38bdf8"/>
<!-- Pillars -->
${[170,230,290,350,420,480,540,600].map(x=>`<rect x="${x}" y="175" width="25" height="190" rx="4" fill="#93c5fd" stroke="#0284c7" stroke-width="1"/>`).join('')}
<!-- Steps -->
<rect x="100" y="360" width="600" height="18" rx="4" fill="#7dd3fc" stroke="#0284c7" stroke-width="1.5"/>
<!-- Label box -->
<rect x="130" y="63" width="540" height="50" rx="12" fill="#0284c7"/>
<text x="400" y="94" text-anchor="middle" font-size="18" font-family="sans-serif" font-weight="900" fill="#fff">Why Do We Need a Parliament?</text>
<text x="400" y="395" text-anchor="middle" font-size="18" font-family="sans-serif" font-weight="700" fill="#075985">Lok Sabha · Rajya Sabha · Law Making · Oversight</text>`
  },

  'industries-8': {
    bg: ['#fff7ed','#ffedd5'], accent: '#f97316',
    svg: `<!-- Industrial sectors -->
${[['Primary','🌾','Agriculture, Mining','#16a34a','#dcfce7',100,120],['Secondary','🏭','Manufacturing','#f97316','#ffedd5',420,120],['Tertiary','💼','Services, IT','#3b82f6','#dbeafe',100,285],['Quaternary','🔬','Research, Finance','#9333ea','#f3e8ff',420,285]].map(([sec,icon,eg,col,bg2,x,y])=>`
<rect x="${x}" y="${y}" width="260" height="140" rx="14" fill="${bg2}" stroke="${col}" stroke-width="2"/>
<text x="${x+130}" y="${y+38}" text-anchor="middle" font-size="26" font-family="sans-serif">${icon}</text>
<text x="${x+130}" y="${y+70}" text-anchor="middle" font-size="15" font-weight="800" font-family="sans-serif" fill="${col}">${sec}</text>
<text x="${x+130}" y="${y+95}" text-anchor="middle" font-size="12" font-family="sans-serif" fill="#374151">${eg}</text>`).join('')}
<rect x="100" y="57" width="600" height="42" rx="12" fill="#f97316"/>
<text x="400" y="84" text-anchor="middle" font-size="17" font-family="sans-serif" font-weight="900" fill="#fff">Industries — Sectors of Economy</text>`
  },

  'marginalisation-8': {
    bg: ['#fff1f2','#ffe4e6'], accent: '#e11d48',
    svg: `<!-- Two circles — majority vs minority -->
<circle cx="310" cy="210" r="140" fill="#fecdd3" stroke="#e11d48" stroke-width="3" opacity=".7"/>
<circle cx="490" cy="210" r="90" fill="#fee2e2" stroke="#f43f5e" stroke-width="3" opacity=".7"/>
<text x="270" y="205" text-anchor="middle" font-size="14" font-weight="700" font-family="sans-serif" fill="#9f1239">Majority</text>
<text x="270" y="225" text-anchor="middle" font-size="13" font-family="sans-serif" fill="#be123c">(Access to</text>
<text x="270" y="245" text-anchor="middle" font-size="13" font-family="sans-serif" fill="#be123c">resources)</text>
<text x="490" y="200" text-anchor="middle" font-size="14" font-weight="700" font-family="sans-serif" fill="#9f1239">Marginalised</text>
<text x="490" y="220" text-anchor="middle" font-size="12" font-family="sans-serif" fill="#be123c">Adivasis</text>
<text x="490" y="240" text-anchor="middle" font-size="12" font-family="sans-serif" fill="#be123c">Dalits</text>
<text x="490" y="260" text-anchor="middle" font-size="12" font-family="sans-serif" fill="#be123c">Minorities</text>
<rect x="80" y="325" width="640" height="60" rx="12" fill="#ffe4e6" stroke="#e11d48" stroke-width="2"/>
<text x="400" y="354" text-anchor="middle" font-size="14" font-weight="800" font-family="sans-serif" fill="#9f1239">Understanding Marginalisation</text>
<text x="400" y="374" text-anchor="middle" font-size="13" font-family="sans-serif" fill="#be123c">Social exclusion · Stereotyping · Discrimination</text>
<text x="400" y="75" text-anchor="middle" font-size="26" font-family="sans-serif" font-weight="800" fill="#9f1239">Understanding Marginalisation</text>`
  },

  'public-facilities-8': {
    bg: ['#f0fdf4','#dcfce7'], accent: '#16a34a',
    svg: `<!-- Public facility icons -->
${[['🏥','Healthcare','#dc2626',110,110],['🏫','Education','#2563eb',280,110],['💧','Water','#0891b2',450,110],['⚡','Electricity','#f59e0b',620,110],['🚌','Transport','#7c3aed',110,280],['🏛️','Sanitation','#16a34a',280,280],['📡','Internet','#0369a1',450,280],['🏗️','Housing','#ca8a04',620,280]].map(([icon,label,col,x,y])=>`
<rect x="${x}" y="${y}" width="130" height="120" rx="14" fill="${col}1a" stroke="${col}" stroke-width="2"/>
<text x="${x+65}" y="${y+52}" text-anchor="middle" font-size="28" font-family="sans-serif">${icon}</text>
<text x="${x+65}" y="${y+82}" text-anchor="middle" font-size="13" font-weight="700" font-family="sans-serif" fill="${col}">${label}</text>`).join('')}
<rect x="150" y="385" width="500" height="28" rx="8" fill="#16a34a"/>
<text x="400" y="404" text-anchor="middle" font-size="14" font-family="sans-serif" font-weight="800" fill="#fff">Public Facilities — State's responsibility to provide equitably</text>
<text x="400" y="68" text-anchor="middle" font-size="24" font-family="sans-serif" font-weight="800" fill="#14532d">Public Facilities</text>`
  },

};

// ── Render helper ──────────────────────────────────────────────────
function render({ bg, accent, svg }) {
  const [c1, c2] = bg;
  return `<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" width="800" height="420" viewBox="0 0 800 420">
  <defs>
    <linearGradient id="bg" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="${c1}"/>
      <stop offset="100%" stop-color="${c2}"/>
    </linearGradient>
  </defs>
  <rect width="800" height="420" fill="url(#bg)" rx="20"/>
  ${svg}
</svg>`;
}

// ── Write files ────────────────────────────────────────────────────
if (!fs.existsSync(OUT)) fs.mkdirSync(OUT, { recursive: true });

let count = 0;
for (const [id, data] of Object.entries(topics)) {
  fs.writeFileSync(path.join(OUT, `${id}.svg`), render(data));
  count++;
}
console.log(`✅ Generated ${count} SVGs in ${OUT}`);

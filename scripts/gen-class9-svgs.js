const fs = require('fs');
const path = require('path');
const OUT = path.join(__dirname, '../public/img/topics/class-9');

const topics = {

  // ── MATHEMATICS ─────────────────────────────────────────────────
  'number-systems': {
    bg: ['#eff6ff','#bfdbfe'], accent: '#2563eb',
    svg: `<circle cx="400" cy="200" r="155" fill="#dbeafe" stroke="#2563eb" stroke-width="3"/>
<circle cx="400" cy="200" r="115" fill="#bfdbfe" stroke="#3b82f6" stroke-width="2.5"/>
<circle cx="400" cy="200" r="78" fill="#93c5fd" stroke="#2563eb" stroke-width="2"/>
<circle cx="400" cy="200" r="44" fill="#60a5fa" stroke="#1d4ed8" stroke-width="2"/>
<text x="400" y="205" text-anchor="middle" font-size="13" font-weight="800" font-family="sans-serif" fill="#1e3a8a">Natural ℕ</text>
<text x="400" y="155" text-anchor="middle" font-size="13" font-weight="700" font-family="sans-serif" fill="#1e40af">Integers ℤ</text>
<text x="400" y="110" text-anchor="middle" font-size="13" font-weight="700" font-family="sans-serif" fill="#1d4ed8">Rational ℚ</text>
<text x="400" y="68" text-anchor="middle" font-size="13" font-weight="700" font-family="sans-serif" fill="#2563eb">Real ℝ</text>
<text x="240" y="205" text-anchor="middle" font-size="16" fill="#1d4ed8">π √2 e</text>
<text x="560" y="205" text-anchor="middle" font-size="14" fill="#1e40af">Irrational</text>
<rect x="80" y="360" width="640" height="38" rx="10" fill="#1d4ed8"/>
<text x="400" y="384" text-anchor="middle" font-size="15" font-family="monospace" font-weight="800" fill="#fff">p/q (q≠0) · Non-terminating non-repeating → Irrational</text>`
  },

  'polynomials': {
    bg: ['#fdf4ff','#f3e8ff'], accent: '#9333ea',
    svg: `<!-- Curve -->
<path d="M 60,300 Q 150,60 250,200 Q 350,340 450,120 Q 550,60 700,280" fill="none" stroke="#9333ea" stroke-width="4"/>
<!-- Zeroes -->
<circle cx="155" cy="200" r="8" fill="#dc2626"/>
<circle cx="395" cy="200" r="8" fill="#dc2626"/>
<text x="155" y="225" text-anchor="middle" font-size="13" font-weight="700" font-family="sans-serif" fill="#dc2626">zero</text>
<text x="395" y="225" text-anchor="middle" font-size="13" font-weight="700" font-family="sans-serif" fill="#dc2626">zero</text>
<line x1="60" y1="200" x2="740" y2="200" stroke="#374151" stroke-width="2" stroke-dasharray="6,4"/>
<!-- Formula boxes -->
<rect x="80" y="55" width="280" height="90" rx="12" fill="#f3e8ff" stroke="#9333ea" stroke-width="2"/>
<text x="220" y="85" text-anchor="middle" font-size="14" font-weight="800" font-family="sans-serif" fill="#6b21a8">Degree → Name</text>
<text x="220" y="110" text-anchor="middle" font-size="13" font-family="monospace" fill="#7e22ce">1→Linear · 2→Quadratic</text>
<text x="220" y="132" text-anchor="middle" font-size="13" font-family="monospace" fill="#7e22ce">3→Cubic · 0→Constant</text>
<rect x="430" y="55" width="290" height="90" rx="12" fill="#ede9fe" stroke="#8b5cf6" stroke-width="2"/>
<text x="575" y="85" text-anchor="middle" font-size="14" font-weight="800" font-family="sans-serif" fill="#5b21b6">Remainder Theorem</text>
<text x="575" y="110" text-anchor="middle" font-size="13" font-family="monospace" fill="#6d28d9">p(x) ÷ (x−a) → r = p(a)</text>
<text x="575" y="132" text-anchor="middle" font-size="13" font-family="monospace" fill="#6d28d9">Factor: p(a)=0 → (x−a) factor</text>
<text x="400" y="382" text-anchor="middle" font-size="26" font-family="sans-serif" font-weight="800" fill="#3b0764">Polynomials</text>`
  },

  'coordinate-geometry': {
    bg: ['#f0fdf4','#dcfce7'], accent: '#16a34a',
    svg: `<!-- Grid -->
${Array.from({length:9},(_,i)=>`<line x1="${160+i*60}" y1="60" x2="${160+i*60}" y2="380" stroke="#d1fae5" stroke-width="1.2"/>`).join('')}
${Array.from({length:6},(_,i)=>`<line x1="100" y1="${80+i*60}" x2="720" y2="${80+i*60}" stroke="#d1fae5" stroke-width="1.2"/>`).join('')}
<!-- Axes -->
<line x1="100" y1="200" x2="720" y2="200" stroke="#374151" stroke-width="2.5"/>
<line x1="400" y1="60" x2="400" y2="380" stroke="#374151" stroke-width="2.5"/>
<polygon points="720,193 740,200 720,207" fill="#374151"/>
<polygon points="393,60 400,40 407,60" fill="#374151"/>
<text x="730" y="205" font-size="14" font-family="sans-serif" fill="#374151">X</text>
<text x="405" y="36" font-size="14" font-family="sans-serif" fill="#374151">Y</text>
<!-- Points and line -->
<circle cx="280" cy="260" r="8" fill="#dc2626"/>
<circle cx="520" cy="140" r="8" fill="#dc2626"/>
<line x1="160" y1="320" x2="700" y2="100" stroke="#16a34a" stroke-width="2.5"/>
<text x="275" y="285" font-size="13" font-weight="700" font-family="sans-serif" fill="#dc2626">A(−2,−2)</text>
<text x="525" y="135" font-size="13" font-weight="700" font-family="sans-serif" fill="#dc2626">B(3, 2)</text>
<!-- Quadrant labels -->
<text x="560" y="155" font-size="13" font-family="sans-serif" fill="#6b7280">I (+,+)</text>
<text x="210" y="155" font-size="13" font-family="sans-serif" fill="#6b7280">II (−,+)</text>
<text x="210" y="275" font-size="13" font-family="sans-serif" fill="#6b7280">III (−,−)</text>
<text x="560" y="275" font-size="13" font-family="sans-serif" fill="#6b7280">IV (+,−)</text>
<text x="400" y="410" text-anchor="middle" font-size="26" font-family="sans-serif" font-weight="800" fill="#14532d">Coordinate Geometry</text>`
  },

  'lines-angles-9': {
    bg: ['#fdf4ff','#ede9fe'], accent: '#7c3aed',
    svg: `<!-- Parallel lines + transversal -->
<line x1="80" y1="150" x2="720" y2="150" stroke="#7c3aed" stroke-width="3"/>
<line x1="80" y1="290" x2="720" y2="290" stroke="#7c3aed" stroke-width="3"/>
<line x1="280" y1="60" x2="500" y2="380" stroke="#dc2626" stroke-width="3"/>
<text x="90" y="140" font-size="13" font-weight="700" font-family="sans-serif" fill="#5b21b6">l</text>
<text x="90" y="283" font-size="13" font-weight="700" font-family="sans-serif" fill="#5b21b6">m</text>
<!-- Angle arcs -->
<path d="M 345,150 A 30,30 0 0,1 355,120" fill="none" stroke="#059669" stroke-width="2"/>
<path d="M 430,290 A 30,30 0 0,1 440,260" fill="none" stroke="#059669" stroke-width="2"/>
<text x="360" y="140" font-size="13" font-family="sans-serif" fill="#059669">∠1</text>
<text x="445" y="280" font-size="13" font-family="sans-serif" fill="#059669">∠5</text>
<!-- Labels -->
<rect x="80" y="320" width="640" height="60" rx="12" fill="#ede9fe" stroke="#7c3aed" stroke-width="2"/>
<text x="400" y="347" text-anchor="middle" font-size="14" font-weight="800" font-family="sans-serif" fill="#5b21b6">Alternate interior ∠s equal · Co-interior ∠s = 180°</text>
<text x="400" y="368" text-anchor="middle" font-size="14" font-family="sans-serif" fill="#6d28d9">Corresponding ∠s equal when l ∥ m</text>
<text x="400" y="55" text-anchor="middle" font-size="26" font-family="sans-serif" font-weight="800" fill="#3b0764">Lines and Angles</text>`
  },

  'triangles-9': {
    bg: ['#fff7ed','#ffedd5'], accent: '#ea580c',
    svg: `<!-- Main triangle -->
<polygon points="400,80 140,340 660,340" fill="#ffedd5" stroke="#ea580c" stroke-width="3"/>
<!-- Congruence triangles -->
<polygon points="120,150 200,80 230,160" fill="#fed7aa" stroke="#f97316" stroke-width="2"/>
<polygon points="570,150 650,80 680,160" fill="#fde68a" stroke="#d97706" stroke-width="2"/>
<!-- Labels -->
<text x="400" y="75" text-anchor="middle" font-size="16" font-weight="800" font-family="sans-serif" fill="#7c2d12">A</text>
<text x="135" y="355" font-size="16" font-weight="800" font-family="sans-serif" fill="#7c2d12">B</text>
<text x="660" y="355" font-size="16" font-weight="800" font-family="sans-serif" fill="#7c2d12">C</text>
<!-- Congruence rules -->
<rect x="80" y="370" width="640" height="42" rx="10" fill="#ea580c"/>
<text x="400" y="396" text-anchor="middle" font-size="15" font-family="sans-serif" font-weight="800" fill="#fff">Congruence: SSS · SAS · ASA · AAS · RHS</text>
<rect x="130" y="180" width="540" height="55" rx="12" fill="rgba(234,88,12,0.12)" stroke="#ea580c" stroke-width="1.5"/>
<text x="400" y="207" text-anchor="middle" font-size="14" font-family="sans-serif" font-weight="700" fill="#7c2d12">Angle sum = 180° · Exterior angle = sum of remote interior</text>
<text x="400" y="225" text-anchor="middle" font-size="13" font-family="sans-serif" fill="#9a3412">Isosceles: angles opp equal sides are equal</text>`
  },

  'heron-formula': {
    bg: ['#fef9c3','#fde68a'], accent: '#ca8a04',
    svg: `<!-- Triangle -->
<polygon points="400,80 120,340 680,340" fill="#fef3c7" stroke="#ca8a04" stroke-width="3"/>
<!-- Side labels -->
<text x="250" y="235" text-anchor="middle" font-size="18" font-weight="800" font-family="monospace" fill="#92400e">a</text>
<text x="555" y="235" text-anchor="middle" font-size="18" font-weight="800" font-family="monospace" fill="#92400e">b</text>
<text x="400" y="370" text-anchor="middle" font-size="18" font-weight="800" font-family="monospace" fill="#92400e">c</text>
<!-- Formula -->
<rect x="80" y="68" width="640" height="95" rx="16" fill="#ca8a04"/>
<text x="400" y="103" text-anchor="middle" font-size="19" font-family="monospace" font-weight="900" fill="#fff">s = (a + b + c) / 2</text>
<text x="400" y="148" text-anchor="middle" font-size="22" font-family="monospace" font-weight="900" fill="#fef9c3">A = √[s(s−a)(s−b)(s−c)]</text>
<!-- Example -->
<rect x="160" y="385" width="480" height="28" rx="8" fill="#fde68a" stroke="#ca8a04" stroke-width="1.5"/>
<text x="400" y="404" text-anchor="middle" font-size="14" font-family="monospace" font-weight="700" fill="#78350f">e.g. 3,4,5 → s=6 → A=√(6·3·2·1)=6 sq.u</text>`
  },

  'statistics-9': {
    bg: ['#eff6ff','#dbeafe'], accent: '#3b82f6',
    svg: `<!-- Bar chart -->
${[[90,180,'#3b82f6','Jan'],[135,135,'#2563eb','Feb'],[80,190,'#60a5fa','Mar'],[160,110,'#1d4ed8','Apr'],[110,160,'#93c5fd','May'],[145,125,'#1e40af','Jun']].map(([h,y,col,lbl],i)=>`
<rect x="${105+i*95}" y="${y}" width="70" height="${h}" rx="6" fill="${col}" opacity=".85"/>
<text x="${140+i*95}" y="295" text-anchor="middle" font-size="13" font-weight="700" font-family="sans-serif" fill="#1e3a8a">${lbl}</text>`).join('')}
<line x1="80" y1="270" x2="720" y2="270" stroke="#374151" stroke-width="2"/>
<line x1="80" y1="270" x2="80" y2="80" stroke="#374151" stroke-width="2"/>
<!-- Mean/Median/Mode box -->
<rect x="80" y="310" width="640" height="68" rx="12" fill="#dbeafe" stroke="#3b82f6" stroke-width="2"/>
<text x="400" y="337" text-anchor="middle" font-size="14" font-weight="800" font-family="sans-serif" fill="#1e3a8a">Measures of Central Tendency</text>
<text x="400" y="360" text-anchor="middle" font-size="13" font-family="sans-serif" fill="#1e40af">Mean = Σx/n · Median = middle value · Mode = most frequent</text>
<text x="400" y="68" text-anchor="middle" font-size="26" font-family="sans-serif" font-weight="800" fill="#1e3a8a">Statistics</text>`
  },

  'linear-equations-two-variables-9': {
    bg: ['#f0fdf4','#dcfce7'], accent: '#16a34a',
    svg: `<!-- Grid -->
${Array.from({length:7},(_,i)=>`<line x1="${140+i*80}" y1="60" x2="${140+i*80}" y2="360" stroke="#d1fae5" stroke-width="1.2"/>`).join('')}
${Array.from({length:5},(_,i)=>`<line x1="100" y1="${80+i*70}" x2="720" y2="${80+i*70}" stroke="#d1fae5" stroke-width="1.2"/>`).join('')}
<!-- Axes -->
<line x1="100" y1="220" x2="720" y2="220" stroke="#374151" stroke-width="2.5"/>
<line x1="400" y1="60" x2="400" y2="360" stroke="#374151" stroke-width="2.5"/>
<!-- Line 1: 2x + y = 4 -->
<line x1="140" y1="300" x2="680" y2="60" stroke="#16a34a" stroke-width="3"/>
<text x="695" y="68" font-size="13" font-weight="700" font-family="sans-serif" fill="#15803d">2x+y=4</text>
<!-- Line 2: x − y = −1 -->
<line x1="140" y1="150" x2="680" y2="300" stroke="#dc2626" stroke-width="3"/>
<text x="695" y="308" font-size="13" font-weight="700" font-family="sans-serif" fill="#dc2626">x−y=−1</text>
<!-- Intersection point -->
<circle cx="340" cy="178" r="9" fill="#7c3aed"/>
<text x="320" y="162" text-anchor="middle" font-size="13" font-weight="700" font-family="sans-serif" fill="#5b21b6">Solution</text>
<text x="400" y="385" text-anchor="middle" font-size="22" font-family="sans-serif" font-weight="800" fill="#14532d">Linear Equations in Two Variables</text>`
  },

  'euclids-geometry-9': {
    bg: ['#fdf4ff','#f3e8ff'], accent: '#9333ea',
    svg: `<!-- Geometric constructions -->
<circle cx="400" cy="210" r="130" fill="none" stroke="#9333ea" stroke-width="2.5"/>
<line x1="200" y1="210" x2="600" y2="210" stroke="#9333ea" stroke-width="2.5"/>
<line x1="400" y1="80" x2="400" y2="340" stroke="#7c3aed" stroke-width="2" stroke-dasharray="6,4"/>
<circle cx="400" cy="210" r="4" fill="#6b21a8"/>
<text x="405" y="205" font-size="13" font-family="sans-serif" fill="#6b21a8">O</text>
<!-- Postulates -->
<rect x="65" y="60" width="670" height="100" rx="14" fill="#f3e8ff" stroke="#9333ea" stroke-width="2"/>
<text x="400" y="90" text-anchor="middle" font-size="15" font-weight="900" font-family="sans-serif" fill="#6b21a8">Euclid's 5 Postulates</text>
<text x="400" y="115" text-anchor="middle" font-size="13" font-family="sans-serif" fill="#7e22ce">1. Line between two points · 2. Extend line indefinitely</text>
<text x="400" y="137" text-anchor="middle" font-size="13" font-family="sans-serif" fill="#7e22ce">3. Circle with any center/radius · 5. Parallel postulate</text>
<rect x="130" y="355" width="540" height="38" rx="10" fill="#6b21a8"/>
<text x="400" y="379" text-anchor="middle" font-size="14" font-family="sans-serif" font-weight="800" fill="#f3e8ff">"A point has no part" — Euclid's Definitions</text>`
  },

  'quadrilaterals-9': {
    bg: ['#fff7ed','#fed7aa'], accent: '#f97316',
    svg: `<!-- Parallelogram with diagonals -->
<polygon points="180,150 540,150 620,310 100,310" fill="#ffedd5" stroke="#f97316" stroke-width="2.5"/>
<line x1="180" y1="150" x2="620" y2="310" stroke="#dc2626" stroke-width="2" stroke-dasharray="6,3"/>
<line x1="540" y1="150" x2="100" y2="310" stroke="#dc2626" stroke-width="2" stroke-dasharray="6,3"/>
<circle cx="360" cy="230" r="7" fill="#dc2626"/>
<text x="370" y="225" font-size="13" font-family="sans-serif" font-weight="700" fill="#dc2626">Midpoint</text>
<!-- Tick marks for equal sides -->
<line x1="330" y1="148" x2="340" y2="155" stroke="#7c3aed" stroke-width="2.5"/>
<line x1="340" y1="148" x2="350" y2="155" stroke="#7c3aed" stroke-width="2.5"/>
<!-- Theorems box -->
<rect x="80" y="330" width="640" height="65" rx="12" fill="#ffedd5" stroke="#f97316" stroke-width="2"/>
<text x="400" y="357" text-anchor="middle" font-size="14" font-weight="800" font-family="sans-serif" fill="#7c2d12">Theorems: Diagonals bisect each other (Parallelogram)</text>
<text x="400" y="380" text-anchor="middle" font-size="13" font-family="sans-serif" fill="#9a3412">Mid-point theorem: line joining midpoints ∥ third side, = half</text>
<text x="400" y="73" text-anchor="middle" font-size="26" font-family="sans-serif" font-weight="800" fill="#7c2d12">Quadrilaterals</text>`
  },

  'circles-9': {
    bg: ['#f0f9ff','#e0f2fe'], accent: '#0284c7',
    svg: `<circle cx="400" cy="210" r="155" fill="#e0f2fe" stroke="#0284c7" stroke-width="3"/>
<circle cx="400" cy="210" r="4" fill="#075985"/>
<!-- Chord and arc -->
<line x1="245" y1="135" x2="555" y2="285" stroke="#0369a1" stroke-width="2.5"/>
<text x="380" y="225" text-anchor="middle" font-size="13" font-family="sans-serif" fill="#075985">Chord</text>
<!-- Inscribed angle -->
<line x1="245" y1="135" x2="320" y2="355" stroke="#7c3aed" stroke-width="2"/>
<line x1="555" y1="285" x2="320" y2="355" stroke="#7c3aed" stroke-width="2"/>
<circle cx="320" cy="355" r="6" fill="#7c3aed"/>
<text x="285" y="380" font-size="13" font-weight="700" font-family="sans-serif" fill="#5b21b6">∠ at circumference</text>
<!-- Central angle -->
<line x1="400" y1="210" x2="245" y2="135" stroke="#dc2626" stroke-width="2"/>
<line x1="400" y1="210" x2="555" y2="285" stroke="#dc2626" stroke-width="2"/>
<text x="420" y="195" font-size="12" font-family="sans-serif" fill="#dc2626">∠ at centre</text>
<rect x="80" y="60" width="640" height="52" rx="12" fill="#0284c7"/>
<text x="400" y="93" text-anchor="middle" font-size="16" font-family="sans-serif" font-weight="900" fill="#fff">Angle at centre = 2 × angle at circumference</text>`
  },

  'surface-areas-volumes-9': {
    bg: ['#fdf4ff','#f3e8ff'], accent: '#a855f7',
    svg: `<!-- Sphere -->
<circle cx="170" cy="200" r="90" fill="#e9d5ff" stroke="#a855f7" stroke-width="2.5"/>
<ellipse cx="170" cy="200" rx="90" ry="28" fill="none" stroke="#a855f7" stroke-width="1.5" stroke-dasharray="5,3"/>
<text x="170" y="230" text-anchor="middle" font-size="13" font-weight="700" font-family="monospace" fill="#6b21a8">SA=4πr² V=4πr³/3</text>
<!-- Cone -->
<polygon points="370,105 280,320 460,320" fill="#fce7f3" stroke="#ec4899" stroke-width="2.5"/>
<ellipse cx="370" cy="320" rx="90" ry="25" fill="#fbcfe8" stroke="#ec4899" stroke-width="2"/>
<text x="370" y="360" text-anchor="middle" font-size="12" font-weight="700" font-family="monospace" fill="#9d174d">CSA=πrl V=πr²h/3</text>
<!-- Cylinder -->
<ellipse cx="600" cy="145" rx="80" ry="24" fill="#bbf7d0" stroke="#16a34a" stroke-width="2.5"/>
<rect x="520" y="145" width="160" height="150" fill="#dcfce7" stroke="#16a34a" stroke-width="2.5"/>
<ellipse cx="600" cy="295" rx="80" ry="24" fill="#86efac" stroke="#16a34a" stroke-width="2.5"/>
<text x="600" y="340" text-anchor="middle" font-size="12" font-weight="700" font-family="monospace" fill="#14532d">CSA=2πrh V=πr²h</text>
<text x="400" y="390" text-anchor="middle" font-size="24" font-family="sans-serif" font-weight="800" fill="#581c87">Surface Areas and Volumes</text>`
  },

  'probability-9': {
    bg: ['#f0fdf4','#dcfce7'], accent: '#22c55e',
    svg: `<!-- Die -->
<rect x="80" y="120" width="160" height="160" rx="20" fill="#dcfce7" stroke="#16a34a" stroke-width="3"/>
${[[130,165],[200,165],[165,200],[130,235],[200,235]].map(([x,y])=>`<circle cx="${x}" cy="${y}" r="12" fill="#15803d"/>`).join('')}
<!-- Coin -->
<circle cx="490" cy="200" r="85" fill="#fde68a" stroke="#ca8a04" stroke-width="3"/>
<text x="490" y="185" text-anchor="middle" font-size="20" font-family="sans-serif">👑</text>
<text x="490" y="220" text-anchor="middle" font-size="14" font-weight="700" font-family="sans-serif" fill="#78350f">Heads / Tails</text>
<!-- Formula -->
<rect x="60" y="315" width="680" height="75" rx="14" fill="#dcfce7" stroke="#22c55e" stroke-width="2"/>
<text x="400" y="345" text-anchor="middle" font-size="17" font-family="monospace" font-weight="800" fill="#14532d">P(E) = Number of favourable outcomes</text>
<text x="400" y="370" text-anchor="middle" font-size="17" font-family="monospace" font-weight="800" fill="#14532d">       Total number of outcomes</text>
<text x="400" y="73" text-anchor="middle" font-size="26" font-family="sans-serif" font-weight="800" fill="#14532d">Probability</text>`
  },

  'areas-parallelograms-9': {
    bg: ['#fffbeb','#fef3c7'], accent: '#d97706',
    svg: `<!-- Parallelogram with height -->
<polygon points="150,300 350,300 450,160 250,160" fill="#fde68a" stroke="#d97706" stroke-width="2.5"/>
<line x1="350" y1="160" x2="350" y2="300" stroke="#dc2626" stroke-width="2.5" stroke-dasharray="6,3"/>
<text x="360" y="240" font-size="14" font-weight="700" font-family="sans-serif" fill="#dc2626">h</text>
<text x="270" y="335" text-anchor="middle" font-size="14" font-weight="700" font-family="monospace" fill="#92400e">b</text>
<!-- Triangle sharing same base -->
<polygon points="150,300 350,300 200,160" fill="#a7f3d0" stroke="#059669" stroke-width="2.5" opacity=".8"/>
<text x="220" y="240" font-size="13" font-weight="700" font-family="sans-serif" fill="#065f46">△ = ½bh</text>
<!-- Theorem box -->
<rect x="490" y="140" width="250" height="170" rx="14" fill="#fef3c7" stroke="#d97706" stroke-width="2"/>
<text x="615" y="168" text-anchor="middle" font-size="13" font-weight="800" font-family="sans-serif" fill="#92400e">Key Theorems</text>
<text x="615" y="194" text-anchor="middle" font-size="12" font-family="sans-serif" fill="#78350f">Parallelograms on same</text>
<text x="615" y="214" text-anchor="middle" font-size="12" font-family="sans-serif" fill="#78350f">base &amp; same parallels</text>
<text x="615" y="234" text-anchor="middle" font-size="13" font-weight="700" font-family="monospace" fill="#ca8a04">→ Equal area</text>
<text x="615" y="270" text-anchor="middle" font-size="12" font-family="sans-serif" fill="#78350f">Area △ = ½ × Area ∥gm</text>
<text x="400" y="380" text-anchor="middle" font-size="22" font-family="sans-serif" font-weight="800" fill="#78350f">Areas of Parallelograms and Triangles</text>`
  },

  'constructions-9': {
    bg: ['#f8fafc','#f1f5f9'], accent: '#64748b',
    svg: `<!-- Compass arc -->
<path d="M 200,320 A 200,200 0 0,1 550,180" fill="none" stroke="#64748b" stroke-width="3"/>
<!-- Perpendicular bisector -->
<line x1="180" y1="200" x2="580" y2="200" stroke="#374151" stroke-width="2.5"/>
<line x1="380" y1="80" x2="380" y2="360" stroke="#dc2626" stroke-width="2.5" stroke-dasharray="6,4"/>
<!-- Points on base -->
<circle cx="180" cy="200" r="7" fill="#374151"/>
<circle cx="580" cy="200" r="7" fill="#374151"/>
<circle cx="380" cy="200" r="7" fill="#dc2626"/>
<text x="170" y="225" font-size="14" font-family="sans-serif" fill="#374151">A</text>
<text x="585" y="225" font-size="14" font-family="sans-serif" fill="#374151">B</text>
<!-- Angle bisector arc -->
<path d="M 560,290 A 60,60 0 0,1 620,200" fill="none" stroke="#2563eb" stroke-width="2.5"/>
<line x1="560" y1="330" x2="680" y2="160" stroke="#2563eb" stroke-width="2.5"/>
<line x1="560" y1="330" x2="680" y2="330" stroke="#2563eb" stroke-width="2.5"/>
<!-- Label box -->
<rect x="60" y="370" width="680" height="40" rx="10" fill="#64748b"/>
<text x="400" y="396" text-anchor="middle" font-size="15" font-family="sans-serif" font-weight="800" fill="#fff">Constructions: Bisectors · 60°· 90°· 45°· Triangles</text>
<text x="400" y="65" text-anchor="middle" font-size="26" font-family="sans-serif" font-weight="800" fill="#334155">Constructions</text>`
  },

  // ── PHYSICS ─────────────────────────────────────────────────────
  'motion': {
    bg: ['#0f172a','#1e293b'], accent: '#38bdf8',
    svg: `<rect x="0" y="0" width="800" height="420" fill="#0f172a"/>
<!-- Distance-time graph -->
<line x1="80" y1="350" x2="700" y2="350" stroke="#475569" stroke-width="2"/>
<line x1="80" y1="80" x2="80" y2="350" stroke="#475569" stroke-width="2"/>
<text x="720" y="355" font-size="13" fill="#94a3b8" font-family="sans-serif">t</text>
<text x="80" y="68" text-anchor="middle" font-size="13" fill="#94a3b8" font-family="sans-serif">d</text>
<!-- Uniform motion -->
<line x1="80" y1="330" x2="450" y2="120" stroke="#38bdf8" stroke-width="3"/>
<text x="465" y="115" font-size="13" font-weight="700" font-family="sans-serif" fill="#38bdf8">Uniform</text>
<!-- Non-uniform -->
<path d="M 80,330 Q 200,300 350,200 Q 480,120 620,100" fill="none" stroke="#f97316" stroke-width="3"/>
<text x="630" y="97" font-size="13" font-weight="700" font-family="sans-serif" fill="#f97316">Non-uniform</text>
<!-- Equations -->
<rect x="80" y="80" width="400" height="90" rx="12" fill="rgba(56,189,248,0.12)" stroke="#38bdf8" stroke-width="1.5"/>
<text x="280" y="108" text-anchor="middle" font-size="13" font-weight="800" font-family="sans-serif" fill="#7dd3fc">Equations of Motion</text>
<text x="280" y="130" text-anchor="middle" font-size="13" font-family="monospace" fill="#38bdf8">v=u+at · s=ut+½at²</text>
<text x="280" y="155" text-anchor="middle" font-size="13" font-family="monospace" fill="#38bdf8">v²=u²+2as</text>
<text x="400" y="390" text-anchor="middle" font-size="26" font-family="sans-serif" font-weight="800" fill="#38bdf8">Motion</text>`
  },

  'force-and-laws': {
    bg: ['#0f172a','#1e293b'], accent: '#818cf8',
    svg: `<rect x="0" y="0" width="800" height="420" fill="#0f172a"/>
<!-- Newton's laws visual -->
<rect x="60" y="80" width="210" height="200" rx="16" fill="rgba(129,140,248,0.12)" stroke="#818cf8" stroke-width="2"/>
<text x="165" y="110" text-anchor="middle" font-size="15" font-weight="900" font-family="sans-serif" fill="#818cf8">1st Law</text>
<text x="165" y="140" text-anchor="middle" font-size="13" font-family="sans-serif" fill="#a5b4fc">Inertia</text>
<text x="165" y="165" text-anchor="middle" font-size="12" font-family="sans-serif" fill="#94a3b8">Object at rest stays</text>
<text x="165" y="185" text-anchor="middle" font-size="12" font-family="sans-serif" fill="#94a3b8">at rest; moving stays</text>
<text x="165" y="205" text-anchor="middle" font-size="12" font-family="sans-serif" fill="#94a3b8">moving (unless force</text>
<text x="165" y="225" text-anchor="middle" font-size="12" font-family="sans-serif" fill="#94a3b8">acts on it)</text>
<rect x="295" y="80" width="210" height="200" rx="16" fill="rgba(129,140,248,0.15)" stroke="#818cf8" stroke-width="2"/>
<text x="400" y="110" text-anchor="middle" font-size="15" font-weight="900" font-family="sans-serif" fill="#818cf8">2nd Law</text>
<text x="400" y="148" text-anchor="middle" font-size="26" font-family="monospace" font-weight="900" fill="#c7d2fe">F = ma</text>
<text x="400" y="185" text-anchor="middle" font-size="13" font-family="sans-serif" fill="#94a3b8">Force = mass × accel.</text>
<text x="400" y="210" text-anchor="middle" font-size="13" font-family="sans-serif" fill="#94a3b8">Unit: Newton (N)</text>
<text x="400" y="235" text-anchor="middle" font-size="12" font-family="sans-serif" fill="#94a3b8">p = mv (momentum)</text>
<rect x="530" y="80" width="210" height="200" rx="16" fill="rgba(129,140,248,0.12)" stroke="#818cf8" stroke-width="2"/>
<text x="635" y="110" text-anchor="middle" font-size="15" font-weight="900" font-family="sans-serif" fill="#818cf8">3rd Law</text>
<text x="635" y="148" text-anchor="middle" font-size="13" font-family="sans-serif" fill="#a5b4fc">Action = −Reaction</text>
<text x="635" y="175" text-anchor="middle" font-size="13" font-family="sans-serif" fill="#94a3b8">Every action has an</text>
<text x="635" y="198" text-anchor="middle" font-size="13" font-family="sans-serif" fill="#94a3b8">equal &amp; opposite</text>
<text x="635" y="221" text-anchor="middle" font-size="13" font-family="sans-serif" fill="#94a3b8">reaction</text>
<rect x="100" y="308" width="600" height="52" rx="12" fill="rgba(129,140,248,0.1)" stroke="#818cf8" stroke-width="1.5"/>
<text x="400" y="338" text-anchor="middle" font-size="14" font-family="sans-serif" fill="#c7d2fe">Conservation of Momentum: p₁+p₂ = p₁′+p₂′</text>
<text x="400" y="385" text-anchor="middle" font-size="24" font-family="sans-serif" font-weight="800" fill="#818cf8">Force and Laws of Motion</text>`
  },

  'gravitation': {
    bg: ['#020617','#0f172a'], accent: '#f59e0b',
    svg: `<rect x="0" y="0" width="800" height="420" fill="#020617"/>
${Array.from({length:30},()=>{const x=Math.random()*800,y=Math.random()*420;return `<circle cx="${x.toFixed(0)}" cy="${y.toFixed(0)}" r="${(Math.random()*1.8+0.4).toFixed(1)}" fill="#fff" opacity="${(Math.random()*0.5+0.2).toFixed(2)}"/>`;}).join('')}
<!-- Earth -->
<circle cx="400" cy="250" r="90" fill="#1d4ed8"/>
<ellipse cx="400" cy="250" rx="90" ry="28" fill="none" stroke="#60a5fa" stroke-width="1.5" stroke-dasharray="5,3"/>
<text x="400" y="255" text-anchor="middle" font-size="28">🌍</text>
<!-- Apple falling -->
<text x="400" y="110" text-anchor="middle" font-size="32">🍎</text>
<line x1="400" y1="130" x2="400" y2="158" stroke="#f59e0b" stroke-width="2.5"/>
<polygon points="394,158 400,170 406,158" fill="#f59e0b"/>
<text x="420" y="145" font-size="13" font-weight="700" font-family="sans-serif" fill="#f59e0b">g=9.8m/s²</text>
<!-- Formula -->
<rect x="480" y="90" width="280" height="80" rx="12" fill="rgba(245,158,11,0.15)" stroke="#f59e0b" stroke-width="1.5"/>
<text x="620" y="122" text-anchor="middle" font-size="16" font-family="monospace" font-weight="800" fill="#fbbf24">F = GMm/r²</text>
<text x="620" y="152" text-anchor="middle" font-size="13" font-family="sans-serif" fill="#d97706">Universal Gravitation</text>
<text x="400" y="390" text-anchor="middle" font-size="26" font-family="sans-serif" font-weight="800" fill="#f59e0b">Gravitation</text>`
  },

  'work-energy': {
    bg: ['#fdf4ff','#f3e8ff'], accent: '#a855f7',
    svg: `<!-- Energy transformation diagram -->
<rect x="80" y="90" width="180" height="90" rx="14" fill="#fce7f3" stroke="#ec4899" stroke-width="2.5"/>
<text x="170" y="130" text-anchor="middle" font-size="14" font-weight="800" font-family="sans-serif" fill="#9d174d">Potential Energy</text>
<text x="170" y="155" text-anchor="middle" font-size="14" font-family="monospace" fill="#be185d">PE = mgh</text>
<line x1="260" y1="135" x2="360" y2="135" stroke="#a855f7" stroke-width="2.5"/>
<polygon points="358,128 374,135 358,142" fill="#a855f7"/>
<text x="310" y="125" text-anchor="middle" font-size="12" font-family="sans-serif" fill="#7e22ce">converts</text>
<rect x="374" y="90" width="180" height="90" rx="14" fill="#e9d5ff" stroke="#a855f7" stroke-width="2.5"/>
<text x="464" y="130" text-anchor="middle" font-size="14" font-weight="800" font-family="sans-serif" fill="#6b21a8">Kinetic Energy</text>
<text x="464" y="155" text-anchor="middle" font-size="14" font-family="monospace" fill="#7e22ce">KE = ½mv²</text>
<line x1="554" y1="135" x2="654" y2="135" stroke="#a855f7" stroke-width="2.5"/>
<polygon points="652,128 668,135 652,142" fill="#a855f7"/>
<rect x="568" y="90" width="180" height="90" rx="14" fill="#dcfce7" stroke="#16a34a" stroke-width="2.5"/>
<text x="658" y="130" text-anchor="middle" font-size="14" font-weight="800" font-family="sans-serif" fill="#14532d">Mechanical E</text>
<text x="658" y="155" text-anchor="middle" font-size="13" font-family="sans-serif" fill="#15803d">KE + PE = const.</text>
<!-- Work formula -->
<rect x="80" y="215" width="640" height="65" rx="14" fill="#f3e8ff" stroke="#a855f7" stroke-width="2"/>
<text x="400" y="244" text-anchor="middle" font-size="17" font-family="monospace" font-weight="800" fill="#6b21a8">W = F · d · cosθ  (Joule = N·m)</text>
<text x="400" y="268" text-anchor="middle" font-size="14" font-family="sans-serif" fill="#7e22ce">Power = W/t  (Watt)  ·  1 kWh = 3.6 × 10⁶ J</text>
<rect x="150" y="305" width="500" height="60" rx="12" fill="#7c3aed"/>
<text x="400" y="332" text-anchor="middle" font-size="15" font-family="sans-serif" font-weight="800" fill="#f3e8ff">Law of Conservation of Energy</text>
<text x="400" y="354" text-anchor="middle" font-size="13" font-family="sans-serif" fill="#ddd6fe">Energy can neither be created nor destroyed</text>
<text x="400" y="388" text-anchor="middle" font-size="24" font-family="sans-serif" font-weight="800" fill="#3b0764">Work, Energy and Power</text>`
  },

  'sound-9': {
    bg: ['#0f172a','#1e293b'], accent: '#34d399',
    svg: `<rect x="0" y="0" width="800" height="420" fill="#0f172a"/>
<!-- Speaker -->
<polygon points="80,165 80,255 130,255 200,310 200,110 130,165" fill="#475569" stroke="#64748b" stroke-width="2"/>
<!-- Sound waves -->
${[60,100,140,180,220].map((r,i)=>`<path d="M 200,210 Q ${200+r*0.6},${210-r*0.8} ${200+r},210 Q ${200+r*0.6},${210+r*0.8} 200,210" fill="none" stroke="#34d399" stroke-width="${3-i*0.4}" opacity="${1-i*0.15}"/>`).join('')}
<!-- Properties -->
<rect x="430" y="80" width="320" height="230" rx="14" fill="rgba(52,211,153,0.1)" stroke="#34d399" stroke-width="1.5"/>
<text x="590" y="112" text-anchor="middle" font-size="15" font-weight="800" font-family="sans-serif" fill="#34d399">Properties of Sound</text>
<text x="590" y="140" text-anchor="middle" font-size="13" font-family="sans-serif" fill="#6ee7b7">Longitudinal wave</text>
<text x="590" y="165" text-anchor="middle" font-size="13" font-family="sans-serif" fill="#6ee7b7">Speed: 343 m/s (air)</text>
<text x="590" y="190" text-anchor="middle" font-size="13" font-family="sans-serif" fill="#6ee7b7">Needs medium to travel</text>
<text x="590" y="215" text-anchor="middle" font-size="13" font-family="sans-serif" fill="#6ee7b7">Echo: reflection of sound</text>
<text x="590" y="240" text-anchor="middle" font-size="13" font-family="sans-serif" fill="#6ee7b7">SONAR · Ultrasound</text>
<text x="590" y="268" text-anchor="middle" font-size="12" font-family="monospace" fill="#34d399">v = fλ · Range: 20Hz–20kHz</text>
<text x="400" y="388" text-anchor="middle" font-size="26" font-family="sans-serif" font-weight="800" fill="#34d399">Sound</text>`
  },

  // ── BIOLOGY ─────────────────────────────────────────────────────
  'tissues': {
    bg: ['#fdf2f8','#fce7f3'], accent: '#ec4899',
    svg: `<!-- Tissue types -->
${[['Epithelial','Covers/lines organs','#ec4899','#fce7f3',80,90],['Connective','Bone, Blood, Cartilage','#f97316','#ffedd5',420,90],['Muscle','Voluntary · Involuntary · Cardiac','#16a34a','#dcfce7',80,270],['Nervous','Neuron · Impulse transmission','#8b5cf6','#ede9fe',420,270]].map(([type,desc,col,bg2,x,y])=>`
<rect x="${x}" y="${y}" width="300" height="130" rx="16" fill="${bg2}" stroke="${col}" stroke-width="2.5"/>
<text x="${x+150}" y="${y+38}" text-anchor="middle" font-size="15" font-weight="900" font-family="sans-serif" fill="${col}">${type} Tissue</text>
<text x="${x+150}" y="${y+72}" text-anchor="middle" font-size="13" font-family="sans-serif" fill="#374151">${desc}</text>`).join('')}
<rect x="200" y="415" width="400" height="0" rx="0"/>
<text x="400" y="75" text-anchor="middle" font-size="26" font-family="sans-serif" font-weight="800" fill="#831843">Tissues</text>`
  },

  'fundamental-unit-of-life': {
    bg: ['#f0fdf4','#dcfce7'], accent: '#16a34a',
    svg: `<!-- Plant cell -->
<rect x="80" y="100" width="290" height="250" rx="20" fill="#dcfce7" stroke="#16a34a" stroke-width="3"/>
<rect x="100" y="118" width="250" height="214" rx="12" fill="#bbf7d0" stroke="#15803d" stroke-width="1.5" stroke-dasharray="4,3"/>
<rect x="155" y="165" width="90" height="75" rx="10" fill="#4ade80" stroke="#15803d" stroke-width="2"/>
<text x="200" y="208" text-anchor="middle" font-size="12" font-weight="700" font-family="sans-serif" fill="#14532d">Nucleus</text>
<!-- Animal cell -->
<ellipse cx="570" cy="225" rx="165" ry="130" fill="#fce7f3" stroke="#ec4899" stroke-width="3"/>
<ellipse cx="540" cy="215" rx="60" ry="50" fill="#fbcfe8" stroke="#ec4899" stroke-width="2"/>
<text x="540" y="220" text-anchor="middle" font-size="12" font-weight="700" font-family="sans-serif" fill="#9d174d">Nucleus</text>
<!-- Labels -->
<text x="225" y="370" text-anchor="middle" font-size="14" font-weight="700" font-family="sans-serif" fill="#14532d">Plant Cell</text>
<text x="570" y="370" text-anchor="middle" font-size="14" font-weight="700" font-family="sans-serif" fill="#9d174d">Animal Cell</text>
<rect x="130" y="60" width="540" height="32" rx="10" fill="#16a34a"/>
<text x="400" y="82" text-anchor="middle" font-size="15" font-family="sans-serif" font-weight="800" fill="#fff">Cell — The Fundamental Unit of Life</text>`
  },

  'atoms-molecules-9': {
    bg: ['#fffbeb','#fef3c7'], accent: '#d97706',
    svg: `<!-- Atom Bohr model -->
<circle cx="280" cy="210" r="30" fill="#fbbf24" stroke="#d97706" stroke-width="3"/>
<text x="280" y="215" text-anchor="middle" font-size="14" font-weight="800" font-family="sans-serif" fill="#78350f">N</text>
${[65,100,140].map((r,i)=>`<circle cx="280" cy="210" r="${r}" fill="none" stroke="#d97706" stroke-width="${2-i*0.3}" stroke-dasharray="5,3"/>
<circle cx="${(280+r).toFixed(0)}" cy="210" r="${8-i}" fill="#f97316"/>`).join('')}
<!-- Molecule (H₂O) -->
<circle cx="560" cy="200" r="45" fill="#bfdbfe" stroke="#3b82f6" stroke-width="2.5"/>
<text x="560" y="207" text-anchor="middle" font-size="14" font-weight="800" font-family="sans-serif" fill="#1d4ed8">O</text>
<circle cx="490" cy="255" r="28" fill="#fde68a" stroke="#d97706" stroke-width="2"/>
<text x="490" y="261" text-anchor="middle" font-size="13" font-weight="700" font-family="sans-serif" fill="#78350f">H</text>
<circle cx="630" cy="255" r="28" fill="#fde68a" stroke="#d97706" stroke-width="2"/>
<text x="630" y="261" text-anchor="middle" font-size="13" font-weight="700" font-family="sans-serif" fill="#78350f">H</text>
<line x1="516" y1="240" x2="530" y2="225" stroke="#374151" stroke-width="2.5"/>
<line x1="604" y1="225" x2="618" y2="240" stroke="#374151" stroke-width="2.5"/>
<!-- Formulae -->
<rect x="80" y="330" width="640" height="55" rx="12" fill="#fef3c7" stroke="#d97706" stroke-width="2"/>
<text x="400" y="357" text-anchor="middle" font-size="14" font-family="sans-serif" font-weight="700" fill="#92400e">Avogadro's No.: 6.022×10²³ · Mole concept</text>
<text x="400" y="376" text-anchor="middle" font-size="13" font-family="sans-serif" fill="#78350f">Atomic mass unit (amu) · Molecular formula</text>
<text x="400" y="65" text-anchor="middle" font-size="24" font-family="sans-serif" font-weight="800" fill="#78350f">Atoms and Molecules</text>`
  },

  'diversity-living': {
    bg: ['#f0fdf4','#dcfce7'], accent: '#22c55e',
    svg: `<!-- Classification tree -->
<line x1="400" y1="70" x2="400" y2="120" stroke="#16a34a" stroke-width="2.5"/>
<rect x="310" y="70" width="180" height="40" rx="10" fill="#16a34a"/>
<text x="400" y="95" text-anchor="middle" font-size="14" font-weight="800" font-family="sans-serif" fill="#fff">Living Organisms</text>
<!-- Level 1 -->
<line x1="400" y1="120" x2="200" y2="170" stroke="#16a34a" stroke-width="2"/>
<line x1="400" y1="120" x2="600" y2="170" stroke="#16a34a" stroke-width="2"/>
<rect x="100" y="170" width="200" height="36" rx="8" fill="#4ade80" stroke="#16a34a" stroke-width="1.5"/>
<text x="200" y="193" text-anchor="middle" font-size="13" font-weight="700" font-family="sans-serif" fill="#14532d">Prokaryotes</text>
<rect x="500" y="170" width="200" height="36" rx="8" fill="#4ade80" stroke="#16a34a" stroke-width="1.5"/>
<text x="600" y="193" text-anchor="middle" font-size="13" font-weight="700" font-family="sans-serif" fill="#14532d">Eukaryotes</text>
<!-- Level 2 -->
${[[120,240,'Monera'],[280,240,'Protista'],[440,240,'Fungi'],[580,240,'Plantae'],[680,240,'Animalia']].map(([x,y,n])=>`<rect x="${x-55}" y="${y}" width="110" height="32" rx="8" fill="#bbf7d0" stroke="#22c55e" stroke-width="1.5"/>
<text x="${x}" y="${y+21}" text-anchor="middle" font-size="12" font-weight="700" font-family="sans-serif" fill="#065f46">${n}</text>`).join('')}
<rect x="100" y="300" width="600" height="60" rx="12" fill="#dcfce7" stroke="#22c55e" stroke-width="2"/>
<text x="400" y="326" text-anchor="middle" font-size="14" font-weight="800" font-family="sans-serif" fill="#14532d">Binomial Nomenclature: Genus + species</text>
<text x="400" y="348" text-anchor="middle" font-size="13" font-family="sans-serif" fill="#15803d">e.g. Homo sapiens · Panthera leo</text>
<text x="400" y="382" text-anchor="middle" font-size="24" font-family="sans-serif" font-weight="800" fill="#14532d">Diversity in Living Organisms</text>`
  },

  // ── HISTORY ─────────────────────────────────────────────────────
  'french-revolution': {
    bg: ['#1e3a8a','#1d4ed8'], accent: '#fbbf24',
    svg: `<rect x="0" y="0" width="800" height="420" fill="#1e3a8a"/>
<!-- French flag -->
<rect x="100" y="100" width="90" height="200" rx="4" fill="#1d4ed8"/>
<rect x="190" y="100" width="90" height="200" rx="0" fill="#fff"/>
<rect x="280" y="100" width="90" height="200" rx="4" fill="#dc2626"/>
<!-- Key events -->
<rect x="420" y="80" width="340" height="240" rx="16" fill="rgba(251,191,36,0.12)" stroke="#fbbf24" stroke-width="1.5"/>
<text x="590" y="112" text-anchor="middle" font-size="15" font-weight="900" font-family="sans-serif" fill="#fbbf24">1789 Revolution</text>
<text x="590" y="140" text-anchor="middle" font-size="13" font-family="sans-serif" fill="#fde68a">Storming of Bastille</text>
<text x="590" y="165" text-anchor="middle" font-size="13" font-family="sans-serif" fill="#fde68a">Liberty · Equality · Fraternity</text>
<text x="590" y="190" text-anchor="middle" font-size="13" font-family="sans-serif" fill="#fde68a">Declaration of Rights of Man</text>
<text x="590" y="215" text-anchor="middle" font-size="13" font-family="sans-serif" fill="#fde68a">Louis XVI → Guillotine</text>
<text x="590" y="240" text-anchor="middle" font-size="13" font-family="sans-serif" fill="#fde68a">Rise of Napoleon</text>
<text x="590" y="268" text-anchor="middle" font-size="12" font-family="sans-serif" fill="#fbbf24">Ancien Régime overthrown</text>
<text x="400" y="368" text-anchor="middle" font-size="24" font-family="sans-serif" font-weight="800" fill="#fbbf24">The French Revolution</text>`
  },

  'nationalism-india': {
    bg: ['#fff7ed','#ffedd5'], accent: '#f97316',
    svg: `<!-- Indian map outline simplified -->
<path d="M 200,80 L 280,65 L 380,80 L 420,140 L 410,220 L 370,290 L 320,340 L 270,350 L 230,310 L 195,240 L 175,160 Z" fill="#fed7aa" stroke="#f97316" stroke-width="2.5"/>
<!-- Key figures text -->
<rect x="460" y="70" width="290" height="260" rx="16" fill="#ffedd5" stroke="#f97316" stroke-width="2"/>
<text x="605" y="102" text-anchor="middle" font-size="15" font-weight="900" font-family="sans-serif" fill="#7c2d12">Freedom Movement</text>
<text x="605" y="130" text-anchor="middle" font-size="13" font-family="sans-serif" fill="#9a3412">Gandhi — Non-cooperation</text>
<text x="605" y="155" text-anchor="middle" font-size="13" font-family="sans-serif" fill="#9a3412">Khilafat Movement (1919)</text>
<text x="605" y="180" text-anchor="middle" font-size="13" font-family="sans-serif" fill="#9a3412">Civil Disobedience (1930)</text>
<text x="605" y="205" text-anchor="middle" font-size="13" font-family="sans-serif" fill="#9a3412">Salt March — Dandi</text>
<text x="605" y="230" text-anchor="middle" font-size="13" font-family="sans-serif" fill="#9a3412">Quit India (1942)</text>
<text x="605" y="258" text-anchor="middle" font-size="12" font-family="sans-serif" fill="#7c2d12">Subhas Chandra Bose · INA</text>
<text x="400" y="380" text-anchor="middle" font-size="24" font-family="sans-serif" font-weight="800" fill="#7c2d12">Nationalism in India</text>`
  },

  'russian-revolution-9': {
    bg: ['#7f1d1d','#991b1b'], accent: '#fca5a5',
    svg: `<rect x="0" y="0" width="800" height="420" fill="#7f1d1d"/>
<!-- Red star -->
<polygon points="400,65 415,112 465,112 425,140 440,187 400,160 360,187 375,140 335,112 385,112" fill="#dc2626" stroke="#fca5a5" stroke-width="2"/>
<!-- Timeline -->
<line x1="80" y1="240" x2="720" y2="240" stroke="#fca5a5" stroke-width="2.5"/>
${[[120,'1905','Bloody Sunday'],[250,'1917 Feb','Tsar abdicates'],[390,'1917 Oct','Bolshevik Rev.'],[530,'1918','Civil War'],[660,'1922','USSR formed']].map(([x,yr,ev])=>`
<circle cx="${x}" cy="240" r="8" fill="#fca5a5"/>
<text x="${x}" y="225" text-anchor="middle" font-size="12" font-weight="700" font-family="sans-serif" fill="#fca5a5">${yr}</text>
<text x="${x}" y="265" text-anchor="middle" font-size="11" font-family="sans-serif" fill="#fecaca">${ev}</text>`).join('')}
<rect x="100" y="308" width="600" height="55" rx="12" fill="rgba(252,165,165,0.12)" stroke="#fca5a5" stroke-width="1.5"/>
<text x="400" y="335" text-anchor="middle" font-size="14" font-family="sans-serif" fill="#fca5a5">Lenin · Bolsheviks · Soviets · Marxism · Collectivisation</text>
<text x="400" y="355" text-anchor="middle" font-size="13" font-family="sans-serif" fill="#fecaca">Kulaks · Five Year Plans · Stalin's collectivisation</text>
<text x="400" y="390" text-anchor="middle" font-size="22" font-family="sans-serif" font-weight="800" fill="#fca5a5">Socialism and the Russian Revolution</text>`
  },

  'nazism-9': {
    bg: ['#1c1917','#292524'], accent: '#94a3b8',
    svg: `<rect x="0" y="0" width="800" height="420" fill="#1c1917"/>
<rect x="80" y="70" width="640" height="70" rx="14" fill="rgba(148,163,184,0.12)" stroke="#94a3b8" stroke-width="1.5"/>
<text x="400" y="100" text-anchor="middle" font-size="16" font-weight="900" font-family="sans-serif" fill="#94a3b8">Rise of Hitler &amp; Nazi Germany</text>
<text x="400" y="125" text-anchor="middle" font-size="13" font-family="sans-serif" fill="#cbd5e1">1919 Treaty of Versailles → German humiliation → Economic crisis</text>
<!-- Timeline -->
<line x1="80" y1="210" x2="720" y2="210" stroke="#64748b" stroke-width="2"/>
${[[130,'1919','Nazi Party formed'],[265,'1929','Great Depression'],[400,'1933','Hitler chancellor'],[535,'1939','WW II begins'],[660,'1945','War ends']].map(([x,yr,ev])=>`
<circle cx="${x}" cy="210" r="7" fill="#94a3b8"/>
<text x="${x}" y="198" text-anchor="middle" font-size="11" font-weight="700" font-family="sans-serif" fill="#94a3b8">${yr}</text>
<text x="${x}" y="230" text-anchor="middle" font-size="10" font-family="sans-serif" fill="#cbd5e1">${ev}</text>`).join('')}
<rect x="80" y="278" width="640" height="80" rx="12" fill="rgba(148,163,184,0.08)" stroke="#64748b" stroke-width="1.5"/>
<text x="400" y="305" text-anchor="middle" font-size="13" font-family="sans-serif" fill="#94a3b8">Propaganda · Youth indoctrination · Nuremberg Laws</text>
<text x="400" y="328" text-anchor="middle" font-size="13" font-family="sans-serif" fill="#94a3b8">Holocaust — systematic genocide of Jewish people</text>
<text x="400" y="348" text-anchor="middle" font-size="12" font-family="sans-serif" fill="#64748b">Lessons: Democracy must be protected; never again</text>
<text x="400" y="390" text-anchor="middle" font-size="22" font-family="sans-serif" font-weight="800" fill="#94a3b8">Nazism and the Rise of Hitler</text>`
  },

  'forest-society-colonialism-9': {
    bg: ['#14532d','#166534'], accent: '#86efac',
    svg: `<rect x="0" y="0" width="800" height="420" fill="#14532d"/>
<!-- Trees -->
${[100,200,300,400,500,600,700].map((x,i)=>{const h=100+Math.sin(i)*20;return `<polygon points="${x},${260-h} ${x-35},260 ${x+35},260" fill="#16a34a" opacity=".85"/>
<rect x="${x-8}" y="260" width="16" height="40" rx="3" fill="#92400e"/>`;}).join('')}
<!-- Content box -->
<rect x="80" y="305" width="640" height="90" rx="14" fill="rgba(134,239,172,0.12)" stroke="#86efac" stroke-width="1.5"/>
<text x="400" y="330" text-anchor="middle" font-size="15" font-weight="900" font-family="sans-serif" fill="#86efac">Forest Society and Colonialism</text>
<text x="400" y="355" text-anchor="middle" font-size="13" font-family="sans-serif" fill="#4ade80">British forest laws → Zamindars · Tribal rights curtailed</text>
<text x="400" y="378" text-anchor="middle" font-size="13" font-family="sans-serif" fill="#4ade80">Bastar rebellion · Java &amp; Vietnam deforestation</text>
<rect x="80" y="60" width="640" height="45" rx="12" fill="rgba(134,239,172,0.15)" stroke="#86efac" stroke-width="1.5"/>
<text x="400" y="88" text-anchor="middle" font-size="15" font-family="sans-serif" font-weight="700" fill="#86efac">Colonial exploitation of forest resources for railways &amp; industry</text>`
  },

  // ── GEOGRAPHY ───────────────────────────────────────────────────
  'physical-features-india': {
    bg: ['#f0f9ff','#e0f2fe'], accent: '#0369a1',
    svg: `<!-- India terrain map simplified -->
<!-- Himalayas top -->
<path d="M 100,120 Q 200,70 320,85 Q 440,65 560,90 Q 640,80 700,120 L 700,170 Q 580,130 440,150 Q 300,135 180,160 Z" fill="#94a3b8" stroke="#64748b" stroke-width="2"/>
<text x="400" y="130" text-anchor="middle" font-size="14" font-weight="800" font-family="sans-serif" fill="#fff">The Himalayas</text>
<!-- Northern plains -->
<rect x="150" y="168" width="500" height="80" rx="4" fill="#fde68a" stroke="#ca8a04" stroke-width="1.5"/>
<text x="400" y="215" text-anchor="middle" font-size="14" font-weight="700" font-family="sans-serif" fill="#78350f">Northern Plains (Fertile Alluvial)</text>
<!-- Peninsula -->
<path d="M 200,248 L 600,248 L 580,320 L 400,380 L 220,320 Z" fill="#bbf7d0" stroke="#16a34a" stroke-width="1.5"/>
<text x="400" y="310" text-anchor="middle" font-size="13" font-weight="700" font-family="sans-serif" fill="#14532d">Peninsular Plateau (Deccan)</text>
<!-- Western Ghats -->
<text x="130" y="310" text-anchor="middle" font-size="11" font-family="sans-serif" fill="#0369a1">W.Ghats</text>
<!-- Eastern Ghats -->
<text x="660" y="310" text-anchor="middle" font-size="11" font-family="sans-serif" fill="#0369a1">E.Ghats</text>
<rect x="80" y="58" width="640" height="42" rx="12" fill="#0369a1"/>
<text x="400" y="85" text-anchor="middle" font-size="17" font-family="sans-serif" font-weight="900" fill="#fff">Physical Features of India — 6 Major Divisions</text>`
  },

  'climate-india': {
    bg: ['#eff6ff','#dbeafe'], accent: '#3b82f6',
    svg: `<!-- Sun and rain clouds -->
<circle cx="180" cy="130" r="60" fill="#fbbf24" stroke="#f59e0b" stroke-width="2.5"/>
${Array.from({length:8},(_,i)=>{const a=i*45*Math.PI/180,x=180+70*Math.cos(a),y=130+70*Math.sin(a);return `<line x1="${(180+62*Math.cos(a)).toFixed(0)}" y1="${(130+62*Math.sin(a)).toFixed(0)}" x2="${x.toFixed(0)}" y2="${y.toFixed(0)}" stroke="#fbbf24" stroke-width="2.5"/>`;}).join('')}
<!-- Rain cloud -->
<ellipse cx="560" cy="120" rx="90" ry="45" fill="#93c5fd" stroke="#3b82f6" stroke-width="2.5"/>
<ellipse cx="500" cy="130" rx="60" ry="35" fill="#93c5fd" stroke="#3b82f6" stroke-width="1.5"/>
${[520,555,590,615].map(x=>`<line x1="${x}" y1="165" x2="${x-8}" y2="215" stroke="#3b82f6" stroke-width="2.5"/>`).join('')}
<!-- Seasons -->
<rect x="80" y="250" width="640" height="120" rx="14" fill="#dbeafe" stroke="#3b82f6" stroke-width="2"/>
<text x="400" y="278" text-anchor="middle" font-size="15" font-weight="800" font-family="sans-serif" fill="#1e3a8a">Seasons of India</text>
<text x="200" y="306" text-anchor="middle" font-size="14" font-family="sans-serif" fill="#1e40af">☀️ Hot &amp; Dry</text>
<text x="200" y="326" text-anchor="middle" font-size="12" font-family="sans-serif" fill="#374151">Mar – May</text>
<text x="400" y="306" text-anchor="middle" font-size="14" font-family="sans-serif" fill="#1e40af">🌧️ Monsoon</text>
<text x="400" y="326" text-anchor="middle" font-size="12" font-family="sans-serif" fill="#374151">Jun – Sep</text>
<text x="600" y="306" text-anchor="middle" font-size="14" font-family="sans-serif" fill="#1e40af">❄️ Cool &amp; Dry</text>
<text x="600" y="326" text-anchor="middle" font-size="12" font-family="sans-serif" fill="#374151">Oct – Feb</text>
<text x="400" y="355" text-anchor="middle" font-size="13" font-family="sans-serif" fill="#1e40af">El Niño · Trade winds · Western disturbances</text>
<text x="400" y="65" text-anchor="middle" font-size="26" font-family="sans-serif" font-weight="800" fill="#1e3a8a">Climate of India</text>`
  },

  'drainage-india-9': {
    bg: ['#f0f9ff','#e0f2fe'], accent: '#0284c7',
    svg: `<!-- River systems -->
<path d="M 300,65 Q 310,100 295,150 Q 280,200 260,250 Q 240,300 220,360" fill="none" stroke="#38bdf8" stroke-width="4"/>
<text x="265" y="90" font-size="13" font-weight="700" font-family="sans-serif" fill="#0369a1">Indus</text>
<path d="M 420,65 Q 430,120 410,180 Q 390,240 370,300 Q 350,340 360,390" fill="none" stroke="#0284c7" stroke-width="4"/>
<text x="445" y="100" font-size="13" font-weight="700" font-family="sans-serif" fill="#0369a1">Ganga</text>
<path d="M 560,65 Q 570,100 555,160 Q 540,220 530,280 Q 525,340 540,390" fill="none" stroke="#0369a1" stroke-width="4"/>
<text x="585" y="90" font-size="13" font-weight="700" font-family="sans-serif" fill="#0369a1">Brahmaputra</text>
<!-- Tributaries -->
<path d="M 100,180 Q 180,185 260,220" fill="none" stroke="#7dd3fc" stroke-width="2.5" stroke-dasharray="5,3"/>
<path d="M 600,200 Q 550,215 500,220" fill="none" stroke="#7dd3fc" stroke-width="2.5" stroke-dasharray="5,3"/>
<!-- Peninsula rivers -->
<path d="M 350,270 Q 280,305 210,360" fill="none" stroke="#0891b2" stroke-width="3"/>
<text x="225" y="332" font-size="12" font-family="sans-serif" fill="#0369a1">Krishna/Cauvery</text>
<!-- Box -->
<rect x="80" y="355" width="640" height="45" rx="10" fill="#0284c7"/>
<text x="400" y="383" text-anchor="middle" font-size="14" font-family="sans-serif" font-weight="800" fill="#fff">Himalayan (perennial) · Peninsular (seasonal) rivers</text>`
  },

  'natural-vegetation-wildlife-9': {
    bg: ['#14532d','#166534'], accent: '#4ade80',
    svg: `<rect x="0" y="0" width="800" height="420" fill="#14532d"/>
${[['Tropical Rainforest','Dense, evergreen, annual rainfall &gt;200cm','#15803d',80,70],['Tropical Deciduous','Teak, Sal — shed leaves in dry season','#16a34a',80,195],['Thorny Scrub','Cacti, acacia — arid regions','#ca8a04',430,70],['Montane','Coniferous — Deodar, Pine','#0369a1',430,195],['Mangroves','Salt-tolerant, coastal estuaries','#0891b2',250,325]].map(([type,desc,col,x,y])=>`
<rect x="${x}" y="${y}" width="320" height="110" rx="14" fill="rgba(255,255,255,0.08)" stroke="${col}" stroke-width="2"/>
<text x="${x+160}" y="${y+33}" text-anchor="middle" font-size="14" font-weight="800" font-family="sans-serif" fill="${col}">${type}</text>
<text x="${x+160}" y="${y+60}" text-anchor="middle" font-size="12" font-family="sans-serif" fill="#bbf7d0">${desc}</text>`).join('')}
<text x="400" y="390" text-anchor="middle" font-size="22" font-family="sans-serif" font-weight="800" fill="#4ade80">Natural Vegetation and Wildlife</text>`
  },

  'population-india-9': {
    bg: ['#fffbeb','#fef3c7'], accent: '#d97706',
    svg: `<!-- Population pyramid simplified -->
<line x1="400" y1="80" x2="400" y2="350" stroke="#374151" stroke-width="2"/>
<line x1="120" y1="350" x2="680" y2="350" stroke="#374151" stroke-width="2"/>
<!-- Male bars (left) -->
${[[60,90,'0-14'],[50,110,'15-29'],[40,130,'30-44'],[30,150,'45-59'],[20,170,'60-74'],[12,190,'75+']].map(([w,y,label])=>`
<rect x="${400-w*4}" y="${y}" width="${w*4}" height="22" rx="3" fill="#3b82f6" opacity=".8"/>
<text x="${400-w*4-5}" y="${y+15}" text-anchor="end" font-size="11" font-family="sans-serif" fill="#374151">${label}</text>`).join('')}
<!-- Female bars (right) -->
${[[58,90],[48,110],[38,130],[28,150],[19,170],[11,190]].map(([w,y])=>`<rect x="400" y="${y}" width="${w*4}" height="22" rx="3" fill="#ec4899" opacity=".8"/>`).join('')}
<text x="260" y="370" text-anchor="middle" font-size="13" font-weight="700" font-family="sans-serif" fill="#3b82f6">Male</text>
<text x="540" y="370" text-anchor="middle" font-size="13" font-weight="700" font-family="sans-serif" fill="#ec4899">Female</text>
<rect x="80" y="220" width="280" height="100" rx="12" fill="#fef3c7" stroke="#d97706" stroke-width="2"/>
<text x="220" y="248" text-anchor="middle" font-size="13" font-weight="800" font-family="sans-serif" fill="#92400e">Key Facts</text>
<text x="220" y="272" text-anchor="middle" font-size="12" font-family="sans-serif" fill="#78350f">Density, Growth rate</text>
<text x="220" y="292" text-anchor="middle" font-size="12" font-family="sans-serif" fill="#78350f">Sex ratio, Literacy</text>
<text x="220" y="312" text-anchor="middle" font-size="12" font-family="sans-serif" fill="#78350f">Urban/Rural migration</text>
<text x="400" y="65" text-anchor="middle" font-size="26" font-family="sans-serif" font-weight="800" fill="#78350f">Population</text>`
  },

  // ── CIVICS ──────────────────────────────────────────────────────
  'what-is-democracy': {
    bg: ['#eff6ff','#dbeafe'], accent: '#2563eb',
    svg: `<!-- People silhouettes -->
${Array.from({length:7},(_,i)=>`
<circle cx="${130+i*80}" cy="175" r="28" fill="#60a5fa" stroke="#2563eb" stroke-width="2"/>
<rect x="${116+i*80}" y="203" width="28" height="55" rx="10" fill="#3b82f6" stroke="#2563eb" stroke-width="2"/>
<line x1="${116+i*80}" y1="220" x2="${96+i*80}" y2="250" stroke="#3b82f6" stroke-width="2"/>
<line x1="${144+i*80}" y1="220" x2="${164+i*80}" y2="250" stroke="#3b82f6" stroke-width="2"/>`).join('')}
<!-- Features box -->
<rect x="80" y="290" width="640" height="95" rx="14" fill="#dbeafe" stroke="#2563eb" stroke-width="2"/>
<text x="400" y="318" text-anchor="middle" font-size="15" font-weight="800" font-family="sans-serif" fill="#1e3a8a">Features of Democracy</text>
<text x="400" y="342" text-anchor="middle" font-size="13" font-family="sans-serif" fill="#1e40af">Free &amp; fair elections · Rule of law · Protection of rights</text>
<text x="400" y="364" text-anchor="middle" font-size="13" font-family="sans-serif" fill="#1e40af">Majority rule · Minority rights · Independent judiciary</text>
<text x="400" y="68" text-anchor="middle" font-size="26" font-family="sans-serif" font-weight="800" fill="#1e3a8a">What is Democracy? Why Democracy?</text>`
  },

  'constitutional-design': {
    bg: ['#f0f9ff','#e0f2fe'], accent: '#0284c7',
    svg: `<!-- Pillars of constitution -->
${[['Preamble','We the People...','#0284c7',80],['Fundamental Rights','Equality, Freedom','#7c3aed',220],['Directive Principles','Social justice goal','#16a34a',360],['Fundamental Duties','Citizen obligations','#d97706',500],['Amendments','Living document','#dc2626',640]].map(([title,sub,col,x])=>`
<rect x="${x}" y="130" width="130" height="220" rx="8" fill="${col}1a" stroke="${col}" stroke-width="2"/>
<rect x="${x}" y="115" width="130" height="22" rx="4" fill="${col}"/>
<text x="${x+65}" y="132" text-anchor="middle" font-size="11" font-weight="800" font-family="sans-serif" fill="#fff">${title}</text>
<text x="${x+65}" y="200" text-anchor="middle" font-size="11" font-family="sans-serif" fill="${col}">${sub.replace(' ','\n')}</text>`).join('')}
<!-- Pediment -->
<polygon points="60,115 740,115 700,70 100,70" fill="#0284c7" stroke="#075985" stroke-width="2"/>
<text x="400" y="98" text-anchor="middle" font-size="16" font-family="sans-serif" font-weight="900" fill="#fff">Constitution of India — 26 Jan 1950</text>
<text x="400" y="375" text-anchor="middle" font-size="24" font-family="sans-serif" font-weight="800" fill="#075985">Constitutional Design</text>`
  },

  'electoral-politics-9': {
    bg: ['#f0fdf4','#dcfce7'], accent: '#16a34a',
    svg: `<!-- Ballot box -->
<rect x="270" y="150" width="260" height="200" rx="14" fill="#dcfce7" stroke="#16a34a" stroke-width="3"/>
<rect x="310" y="135" width="180" height="20" rx="6" fill="#15803d"/>
<line x1="360" y1="135" x2="345" y2="100" stroke="#15803d" stroke-width="2.5"/>
<!-- Ballot papers -->
${[[-30,80],[-15,70],[0,75],[15,72],[30,78]].map(([dx,y])=>`<rect x="${400+dx-20}" y="${y}" width="40" height="30" rx="4" fill="#fff" stroke="#16a34a" stroke-width="1.5"/>`).join('')}
<!-- Voting arrow -->
<line x1="400" y1="100" x2="400" y2="133" stroke="#059669" stroke-width="3"/>
<polygon points="394,130 400,143 406,130" fill="#059669"/>
<!-- Info boxes -->
<rect x="60" y="380" width="680" height="30" rx="8" fill="#16a34a"/>
<text x="400" y="400" text-anchor="middle" font-size="13" font-family="sans-serif" font-weight="800" fill="#fff">ECI · Model Code · FPTP system · Universal Adult Franchise</text>
<rect x="60" y="65" width="680" height="65" rx="12" fill="#dcfce7" stroke="#16a34a" stroke-width="2"/>
<text x="400" y="92" text-anchor="middle" font-size="15" font-weight="800" font-family="sans-serif" fill="#14532d">Electoral Politics</text>
<text x="400" y="118" text-anchor="middle" font-size="13" font-family="sans-serif" fill="#15803d">Why elections? · Voters list · Nomination · Campaign · Counting</text>`
  },

  'working-of-institutions-9': {
    bg: ['#fdf4ff','#f3e8ff'], accent: '#9333ea',
    svg: `<!-- Three pillars -->
${[['Legislature','Makes laws','Parliament','Lok Sabha+Rajya Sabha','#7c3aed',80],['Executive','Implements laws','President/PM','Cabinet responsible to Parliament','#ec4899',300],['Judiciary','Interprets laws','Supreme Court','Independent &amp; impartial','#0284c7',520]].map(([t,r,head,desc,col,x])=>`
<rect x="${x}" y="105" width="210" height="265" rx="14" fill="${col}11" stroke="${col}" stroke-width="2.5"/>
<rect x="${x}" y="90" width="210" height="25" rx="8" fill="${col}"/>
<text x="${x+105}" y="108" text-anchor="middle" font-size="13" font-weight="900" font-family="sans-serif" fill="#fff">${t}</text>
<text x="${x+105}" y="148" text-anchor="middle" font-size="13" font-weight="700" font-family="sans-serif" fill="${col}">${r}</text>
<text x="${x+105}" y="180" text-anchor="middle" font-size="13" font-family="sans-serif" fill="#374151">${head}</text>
<text x="${x+105}" y="215" text-anchor="middle" font-size="11" font-family="sans-serif" fill="#374151">${desc}</text>`).join('')}
<text x="400" y="390" text-anchor="middle" font-size="22" font-family="sans-serif" font-weight="800" fill="#581c87">Working of Institutions</text>`
  },

  'democratic-rights-9': {
    bg: ['#fff1f2','#ffe4e6'], accent: '#e11d48',
    svg: `<!-- Rights icons grid -->
${[['⚖️','Right to Equality','No discrimination','#dc2626',80,90],['🗣️','Right to Freedom','Speech, assembly','#7c3aed',300,90],['🛡️','Right against Exploitation','No forced labour','#d97706',520,90],['🕌','Right to Religion','Freedom of faith','#0284c7',80,255],['🎓','Cultural &amp; Educational','Minority rights','#16a34a',300,255],['⚖️','Right to Const. Remedies','Writs/Habeas corpus','#e11d48',520,255]].map(([icon,right,desc,col,x,y])=>`
<rect x="${x}" y="${y}" width="200" height="135" rx="16" fill="${col}1a" stroke="${col}" stroke-width="2"/>
<text x="${x+100}" y="${y+38}" text-anchor="middle" font-size="28" font-family="sans-serif">${icon}</text>
<text x="${x+100}" y="${y+72}" text-anchor="middle" font-size="12" font-weight="800" font-family="sans-serif" fill="${col}">${right}</text>
<text x="${x+100}" y="${y+96}" text-anchor="middle" font-size="11" font-family="sans-serif" fill="#374151">${desc}</text>`).join('')}
<text x="400" y="70" text-anchor="middle" font-size="24" font-family="sans-serif" font-weight="800" fill="#9f1239">Democratic Rights — Part III</text>`
  },

  // ── ECONOMICS ───────────────────────────────────────────────────
  'story-of-village-palampur': {
    bg: ['#f0fdf4','#dcfce7'], accent: '#22c55e',
    svg: `<!-- Village scene -->
<!-- Sky -->
<rect x="0" y="0" width="800" height="200" fill="#bae6fd" rx="0"/>
<circle cx="680" cy="80" r="50" fill="#fbbf24" stroke="#f59e0b" stroke-width="2"/>
<!-- Houses -->
${[100,300,500].map((x,i)=>`
<rect x="${x}" y="145" width="100" height="70" rx="4" fill="${['#fde68a','#fed7aa','#fca5a5'][i]}" stroke="#ca8a04" stroke-width="1.5"/>
<polygon points="${x-10},145 ${x+50},100 ${x+110},145" fill="#b45309" stroke="#92400e" stroke-width="1.5"/>`).join('')}
<!-- Fields -->
<rect x="0" y="215" width="800" height="80" fill="#ca8a04"/>
${Array.from({length:12},(_,i)=>`<line x1="${60+i*60}" y1="215" x2="${55+i*60}" y2="175" stroke="#16a34a" stroke-width="2.5"/>`).join('')}
<!-- Info box -->
<rect x="80" y="310" width="640" height="80" rx="12" fill="#dcfce7" stroke="#22c55e" stroke-width="2"/>
<text x="400" y="338" text-anchor="middle" font-size="14" font-weight="800" font-family="sans-serif" fill="#14532d">Palampur: Land, Labour, Capital, Enterprise</text>
<text x="400" y="362" text-anchor="middle" font-size="13" font-family="sans-serif" fill="#15803d">Farming (85% land) · Non-farm: dairy, small manufacturing</text>
<text x="400" y="382" text-anchor="middle" font-size="12" font-family="sans-serif" fill="#15803d">Green Revolution → HYV seeds, irrigation, fertilisers</text>`
  },

  'poverty-as-challenge': {
    bg: ['#fef2f2','#fee2e2'], accent: '#dc2626',
    svg: `<!-- Poverty line graph -->
<line x1="80" y1="350" x2="720" y2="350" stroke="#374151" stroke-width="2"/>
<line x1="80" y1="80" x2="80" y2="350" stroke="#374151" stroke-width="2"/>
<!-- Poverty line -->
<line x1="80" y1="220" x2="720" y2="220" stroke="#dc2626" stroke-width="3" stroke-dasharray="10,5"/>
<text x="730" y="224" font-size="13" font-weight="700" font-family="sans-serif" fill="#dc2626">Poverty Line</text>
<!-- Population curve -->
<path d="M 80,330 Q 200,300 400,240 Q 550,200 700,180" fill="none" stroke="#16a34a" stroke-width="3"/>
<!-- Shaded area below poverty line -->
<path d="M 80,330 Q 200,300 285,220 L 80,220 Z" fill="#fca5a5" opacity=".5"/>
<text x="150" y="280" text-anchor="middle" font-size="12" font-family="sans-serif" fill="#991b1b">Below poverty</text>
<!-- Indicators -->
<rect x="80" y="362" width="640" height="42" rx="10" fill="#dc2626"/>
<text x="400" y="388" text-anchor="middle" font-size="14" font-family="sans-serif" font-weight="800" fill="#fff">Multidimensional: income · health · education · living standards</text>
<text x="400" y="68" text-anchor="middle" font-size="24" font-family="sans-serif" font-weight="800" fill="#7f1d1d">Poverty as a Challenge</text>`
  },

  'food-security': {
    bg: ['#f0fdf4','#dcfce7'], accent: '#16a34a',
    svg: `<!-- Food security pillars -->
${[['Availability','Food production + imports enough supply','🌾','#16a34a',80,130],['Access','People can afford/reach food','🛒','#f97316',310,130],['Absorption','Body can use nutrients properly','💊','#9333ea',540,130]].map(([p,d,icon,col,x,y])=>`
<rect x="${x}" y="${y}" width="200" height="175" rx="16" fill="${col}1a" stroke="${col}" stroke-width="2.5"/>
<text x="${x+100}" y="${y+45}" text-anchor="middle" font-size="32" font-family="sans-serif">${icon}</text>
<text x="${x+100}" y="${y+80}" text-anchor="middle" font-size="14" font-weight="800" font-family="sans-serif" fill="${col}">${p}</text>
<text x="${x+100}" y="${y+112}" text-anchor="middle" font-size="11" font-family="sans-serif" fill="#374151">${d}</text>`).join('')}
<rect x="80" y="332" width="640" height="55" rx="12" fill="#dcfce7" stroke="#16a34a" stroke-width="2"/>
<text x="400" y="358" text-anchor="middle" font-size="14" font-weight="800" font-family="sans-serif" fill="#14532d">PDS: Public Distribution System</text>
<text x="400" y="378" text-anchor="middle" font-size="13" font-family="sans-serif" fill="#15803d">Buffer stock · Fair Price Shops · Antyodaya Anna Yojana</text>
<text x="400" y="95" text-anchor="middle" font-size="26" font-family="sans-serif" font-weight="800" fill="#14532d">Food Security in India</text>`
  },

  'unemployment-9': {
    bg: ['#fffbeb','#fef3c7'], accent: '#d97706',
    svg: `<!-- Human capital concept -->
<circle cx="400" cy="145" r="85" fill="#fde68a" stroke="#d97706" stroke-width="3"/>
<text x="400" y="135" text-anchor="middle" font-size="38" font-family="sans-serif">👤</text>
<text x="400" y="180" text-anchor="middle" font-size="14" font-weight="800" font-family="sans-serif" fill="#78350f">Human Resource</text>
<!-- Spokes -->
${[['Education','📚',90,80],['Health','🏥',40,200],['Skills','🔧',90,320],['On-the-job','💼',700,80],['Migration','✈️',740,200]].map(([label,icon,x,y])=>`
<line x1="400" y1="145" x2="${x}" y2="${y}" stroke="#d97706" stroke-width="2" stroke-dasharray="5,3"/>
<text x="${x}" y="${y}" text-anchor="middle" font-size="20" font-family="sans-serif">${icon}</text>
<text x="${x}" y="${y+22}" text-anchor="middle" font-size="12" font-weight="700" font-family="sans-serif" fill="#92400e">${label}</text>`).join('')}
<rect x="80" y="350" width="640" height="50" rx="12" fill="#fde68a" stroke="#d97706" stroke-width="2"/>
<text x="400" y="374" text-anchor="middle" font-size="14" font-family="sans-serif" font-weight="700" fill="#78350f">People as Resource — quality of population = economic growth</text>
<text x="400" y="68" text-anchor="middle" font-size="24" font-family="sans-serif" font-weight="800" fill="#78350f">People as Resource</text>`
  },

  // ── CHEMISTRY ───────────────────────────────────────────────────
  'matter-surroundings': {
    bg: ['#f0f9ff','#e0f2fe'], accent: '#0284c7',
    svg: `<!-- States of matter -->
${[['Solid','Fixed shape &amp; volume','Tightly packed','#0284c7',80],['Liquid','Fixed volume, no shape','Closely packed','#7c3aed',310],['Gas','No fixed shape/volume','Far apart','#16a34a',540]].map(([state,prop,struct,col,x])=>`
<rect x="${x}" y="95" width="200" height="235" rx="16" fill="${col}11" stroke="${col}" stroke-width="2.5"/>
<text x="${x+100}" y="128" text-anchor="middle" font-size="16" font-weight="900" font-family="sans-serif" fill="${col}">${state}</text>
${state==='Solid'?`${[[130,175],[190,175],[250,175],[130,210],[190,210],[250,210],[130,245],[190,245],[250,245]].map(([px,py])=>`<circle cx="${px}" cy="${py}" r="16" fill="${col}" opacity=".6"/>`).join('')}`
:state==='Liquid'?`${[[130,175],[200,165],[265,175],[145,220],[215,210],[270,225],[135,265],[200,258],[270,268]].map(([px,py])=>`<circle cx="${px}" cy="${py}" r="14" fill="${col}" opacity=".5"/>`).join('')}`
:`${[[150,165],[240,180],[310,170],[130,215],[215,225],[300,215],[145,265],[220,270],[295,262]].map(([px,py])=>`<circle cx="${px}" cy="${py}" r="10" fill="${col}" opacity=".4"/>`).join('')}`}
<text x="${x+100}" y="290" text-anchor="middle" font-size="12" font-family="sans-serif" fill="${col}">${prop}</text>
<text x="${x+100}" y="313" text-anchor="middle" font-size="12" font-family="sans-serif" fill="${col}">${struct}</text>`).join('')}
<rect x="80" y="355" width="640" height="40" rx="10" fill="#0284c7"/>
<text x="400" y="380" text-anchor="middle" font-size="14" font-family="sans-serif" font-weight="800" fill="#fff">Matter in Our Surroundings — Physical &amp; Chemical changes</text>`
  },

  'is-matter-pure': {
    bg: ['#fdf4ff','#f3e8ff'], accent: '#9333ea',
    svg: `<!-- Classification tree -->
<rect x="300" y="65" width="200" height="40" rx="10" fill="#9333ea"/>
<text x="400" y="91" text-anchor="middle" font-size="14" font-weight="800" font-family="sans-serif" fill="#fff">Matter</text>
<line x1="400" y1="105" x2="240" y2="145" stroke="#9333ea" stroke-width="2"/>
<line x1="400" y1="105" x2="560" y2="145" stroke="#9333ea" stroke-width="2"/>
<rect x="140" y="145" width="200" height="38" rx="10" fill="#c4b5fd" stroke="#7c3aed" stroke-width="2"/>
<text x="240" y="170" text-anchor="middle" font-size="13" font-weight="700" font-family="sans-serif" fill="#3b0764">Pure Substance</text>
<rect x="460" y="145" width="200" height="38" rx="10" fill="#e9d5ff" stroke="#9333ea" stroke-width="2"/>
<text x="560" y="170" text-anchor="middle" font-size="13" font-weight="700" font-family="sans-serif" fill="#6b21a8">Mixture</text>
<!-- Level 3 -->
<line x1="240" y1="183" x2="150" y2="223" stroke="#7c3aed" stroke-width="1.5"/>
<line x1="240" y1="183" x2="330" y2="223" stroke="#7c3aed" stroke-width="1.5"/>
<rect x="75" y="223" width="150" height="36" rx="8" fill="#ddd6fe" stroke="#7c3aed" stroke-width="1.5"/>
<text x="150" y="246" text-anchor="middle" font-size="12" font-family="sans-serif" fill="#5b21b6">Element (Fe, O₂)</text>
<rect x="255" y="223" width="150" height="36" rx="8" fill="#ede9fe" stroke="#7c3aed" stroke-width="1.5"/>
<text x="330" y="246" text-anchor="middle" font-size="12" font-family="sans-serif" fill="#5b21b6">Compound (H₂O)</text>
<line x1="560" y1="183" x2="460" y2="223" stroke="#9333ea" stroke-width="1.5"/>
<line x1="560" y1="183" x2="660" y2="223" stroke="#9333ea" stroke-width="1.5"/>
<rect x="375" y="223" width="170" height="36" rx="8" fill="#f3e8ff" stroke="#a855f7" stroke-width="1.5"/>
<text x="460" y="246" text-anchor="middle" font-size="12" font-family="sans-serif" fill="#6b21a8">Homogeneous</text>
<rect x="575" y="223" width="170" height="36" rx="8" fill="#fae8ff" stroke="#c026d3" stroke-width="1.5"/>
<text x="660" y="246" text-anchor="middle" font-size="12" font-family="sans-serif" fill="#86198f">Heterogeneous</text>
<!-- Separation techniques -->
<rect x="80" y="300" width="640" height="75" rx="14" fill="#f3e8ff" stroke="#9333ea" stroke-width="2"/>
<text x="400" y="326" text-anchor="middle" font-size="14" font-weight="800" font-family="sans-serif" fill="#6b21a8">Separation Techniques</text>
<text x="400" y="350" text-anchor="middle" font-size="13" font-family="sans-serif" fill="#7e22ce">Filtration · Distillation · Chromatography</text>
<text x="400" y="368" text-anchor="middle" font-size="13" font-family="sans-serif" fill="#7e22ce">Evaporation · Centrifugation · Crystallisation</text>
<text x="400" y="395" text-anchor="middle" font-size="24" font-family="sans-serif" font-weight="800" fill="#581c87">Is Matter Around Us Pure?</text>`
  },

  'structure-of-atom-9': {
    bg: ['#0f172a','#1e293b'], accent: '#a78bfa',
    svg: `<rect x="0" y="0" width="800" height="420" fill="#0f172a"/>
${Array.from({length:20},()=>{const x=Math.random()*800,y=Math.random()*420;return `<circle cx="${x.toFixed(0)}" cy="${y.toFixed(0)}" r="${(Math.random()*1.5+0.3).toFixed(1)}" fill="#fff" opacity="${(Math.random()*0.4+0.1).toFixed(2)}"/>`;}).join('')}
<!-- Nucleus -->
<circle cx="400" cy="210" r="40" fill="#dc2626"/>
<text x="400" y="205" text-anchor="middle" font-size="14" font-weight="800" font-family="sans-serif" fill="#fff">p⁺ n⁰</text>
<text x="400" y="225" text-anchor="middle" font-size="11" font-family="sans-serif" fill="#fca5a5">Nucleus</text>
<!-- Electron shells -->
${[[75,'K','2 e⁻'],[120,'L','8 e⁻'],[165,'M','18 e⁻']].map(([r,shell,cap])=>`
<circle cx="400" cy="210" r="${r}" fill="none" stroke="#a78bfa" stroke-width="1.5" stroke-dasharray="5,3"/>
<circle cx="${400+r}" cy="210" r="7" fill="#fbbf24"/>
<text x="${400+r+18}" y="213" font-size="12" font-family="sans-serif" fill="#a78bfa">${shell}: ${cap}</text>`).join('')}
<!-- Models -->
<rect x="60" y="60" width="280" height="100" rx="12" fill="rgba(167,139,250,0.1)" stroke="#a78bfa" stroke-width="1.5"/>
<text x="200" y="90" text-anchor="middle" font-size="14" font-weight="800" font-family="sans-serif" fill="#a78bfa">Atomic Models</text>
<text x="200" y="115" text-anchor="middle" font-size="12" font-family="sans-serif" fill="#c4b5fd">Thomson: +sphere with e⁻</text>
<text x="200" y="138" text-anchor="middle" font-size="12" font-family="sans-serif" fill="#c4b5fd">Rutherford: small dense nucleus</text>
<rect x="460" y="60" width="280" height="100" rx="12" fill="rgba(167,139,250,0.1)" stroke="#a78bfa" stroke-width="1.5"/>
<text x="600" y="90" text-anchor="middle" font-size="14" font-weight="800" font-family="sans-serif" fill="#a78bfa">Bohr's Model</text>
<text x="600" y="115" text-anchor="middle" font-size="12" font-family="sans-serif" fill="#c4b5fd">Electrons in fixed orbits</text>
<text x="600" y="138" text-anchor="middle" font-size="12" font-family="sans-serif" fill="#c4b5fd">No energy loss in orbit</text>
<text x="400" y="390" text-anchor="middle" font-size="24" font-family="sans-serif" font-weight="800" fill="#a78bfa">Structure of the Atom</text>`
  },

};

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

if (!fs.existsSync(OUT)) fs.mkdirSync(OUT, { recursive: true });

let count = 0;
for (const [id, data] of Object.entries(topics)) {
  fs.writeFileSync(path.join(OUT, `${id}.svg`), render(data));
  count++;
}
console.log(`✅ Generated ${count} SVGs in ${OUT}`);

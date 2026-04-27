const fs = require('fs');
const path = require('path');
const OUT = path.join(__dirname, '../public/img/topics/class-7');

const topics = {

  // ── MATHEMATICS ─────────────────────────────────────────────────
  'integers': {
    bg: ['#fef2f2','#fecaca'], accent: '#dc2626',
    svg: `<line x1="60" y1="200" x2="740" y2="200" stroke="#374151" stroke-width="3"/>
<polygon points="740,192 760,200 740,208" fill="#374151"/>
<polygon points="60,192 40,200 60,208" fill="#374151"/>
${[-6,-5,-4,-3,-2,-1,0,1,2,3,4,5,6].map((n,i)=>{
  const x=110+i*49,neg=n<0,zero=n===0;
  const fill=neg?'#dc2626':zero?'#374151':'#16a34a';
  return `<line x1="${x}" y1="192" x2="${x}" y2="208" stroke="${fill}" stroke-width="2.5"/>
<text x="${x}" y="228" text-anchor="middle" font-size="17" font-family="sans-serif" font-weight="700" fill="${fill}">${n}</text>`;
}).join('')}
<text x="270" y="165" text-anchor="middle" font-size="17" font-family="sans-serif" font-weight="700" fill="#dc2626">Negative</text>
<text x="400" y="155" text-anchor="middle" font-size="17" font-family="sans-serif" font-weight="700" fill="#374151">0</text>
<text x="530" y="165" text-anchor="middle" font-size="17" font-family="sans-serif" font-weight="700" fill="#16a34a">Positive</text>
<rect x="100" y="265" width="600" height="60" rx="12" fill="#fee2e2"/>
<text x="400" y="293" text-anchor="middle" font-size="15" font-family="sans-serif" font-weight="700" fill="#7f1d1d">Operations: (+)+(−) · (−)×(−)=+ · Division rules</text>
<text x="400" y="315" text-anchor="middle" font-size="13" font-family="sans-serif" fill="#991b1b">Commutative · Associative · Distributive properties</text>
<text x="400" y="380" text-anchor="middle" font-size="28" font-family="sans-serif" font-weight="800" fill="#7f1d1d">Integers</text>`
  },
  'simple-equations': {
    bg: ['#eff6ff','#bfdbfe'], accent: '#2563eb',
    svg: `<rect x="80" y="100" width="640" height="80" rx="16" fill="#dbeafe" stroke="#2563eb" stroke-width="2.5"/>
<text x="400" y="152" text-anchor="middle" font-size="36" font-family="monospace" font-weight="900" fill="#1d4ed8">2x + 3 = 11</text>
<text x="400" y="220" text-anchor="middle" font-size="22" font-family="sans-serif" fill="#374151">↓  subtract 3 from both sides</text>
<rect x="120" y="240" width="560" height="60" rx="12" fill="#bfdbfe" stroke="#2563eb" stroke-width="2"/>
<text x="400" y="278" text-anchor="middle" font-size="30" font-family="monospace" font-weight="800" fill="#1d4ed8">2x = 8</text>
<text x="400" y="330" text-anchor="middle" font-size="22" font-family="sans-serif" fill="#374151">↓  divide both sides by 2</text>
<rect x="250" y="348" width="300" height="52" rx="12" fill="#1d4ed8"/>
<text x="400" y="382" text-anchor="middle" font-size="28" font-family="monospace" font-weight="900" fill="#fff">x = 4 ✓</text>
<text x="400" y="420" text-anchor="middle" font-size="26" font-family="sans-serif" font-weight="800" fill="#1e3a8a">Simple Equations</text>`
  },
  'lines-and-angles': {
    bg: ['#fdf4ff','#e9d5ff'], accent: '#7c3aed',
    svg: `<line x1="100" y1="200" x2="700" y2="200" stroke="#7c3aed" stroke-width="3"/>
<line x1="400" y1="330" x2="400" y2="80" stroke="#e11d48" stroke-width="3"/>
<text x="440" y="120" font-size="14" fill="#5b21b6">90°</text>
<rect x="400" y="192" width="14" height="14" fill="none" stroke="#5b21b6" stroke-width="2"/>
<line x1="150" y1="320" x2="600" y2="100" stroke="#059669" stroke-width="3"/>
<path d="M 250,200 A 50,50 0 0,1 290,165" fill="none" stroke="#059669" stroke-width="2"/>
<text x="275" y="195" font-size="13" fill="#059669">∠</text>
<path d="M 550,200 A 50,50 0 0,0 580,175" fill="none" stroke="#f97316" stroke-width="2"/>
<text x="110" y="340" font-size="14" font-family="sans-serif" font-weight="700" fill="#7c3aed">Supplementary: ∠+∠=180°</text>
<text x="110" y="365" font-size="14" font-family="sans-serif" font-weight="700" fill="#e11d48">Complementary: ∠+∠=90°</text>
<text x="110" y="390" font-size="14" font-family="sans-serif" font-weight="700" fill="#059669">Vertically opposite · Alternate</text>
<text x="590" y="380" text-anchor="middle" font-size="22" font-family="sans-serif" font-weight="800" fill="#3b0764">Lines &amp; Angles</text>`
  },
  'fractions-decimals': {
    bg: ['#fff7ed','#fed7aa'], accent: '#ea580c',
    svg: `<circle cx="230" cy="185" r="100" fill="#fde68a" stroke="#ea580c" stroke-width="3"/>
<path d="M230,185 L230,85 A100,100 0 0,1 317,235 Z" fill="#ea580c" opacity=".75"/>
<path d="M230,185 L317,235 A100,100 0 0,1 143,235 Z" fill="#f97316" opacity=".75"/>
<text x="230" y="320" text-anchor="middle" font-size="20" font-family="sans-serif" font-weight="800" fill="#c2410c">3/4</text>
<rect x="380" y="100" width="320" height="80" rx="14" fill="#fef3c7" stroke="#ea580c" stroke-width="2.5"/>
<text x="540" y="150" text-anchor="middle" font-size="32" font-family="monospace" font-weight="900" fill="#c2410c">0 . 7 5</text>
<rect x="380" y="200" width="320" height="110" rx="14" fill="#ffedd5" stroke="#f97316" stroke-width="2"/>
<text x="540" y="235" text-anchor="middle" font-size="15" font-family="sans-serif" font-weight="700" fill="#7c2d12">Multiply fractions:</text>
<text x="540" y="262" text-anchor="middle" font-size="19" font-family="monospace" font-weight="700" fill="#c2410c">3/5 × 2/7 = 6/35</text>
<text x="540" y="290" text-anchor="middle" font-size="15" font-family="sans-serif" font-weight="700" fill="#7c2d12">Divide: flip &amp; multiply</text>
<text x="400" y="390" text-anchor="middle" font-size="24" font-family="sans-serif" font-weight="800" fill="#7c2d12">Fractions and Decimals</text>`
  },
  'rational-numbers': {
    bg: ['#ecfdf5','#a7f3d0'], accent: '#059669',
    svg: `<circle cx="400" cy="200" r="140" fill="#d1fae5" stroke="#059669" stroke-width="3"/>
<circle cx="400" cy="200" r="100" fill="#a7f3d0" stroke="#047857" stroke-width="2.5"/>
<circle cx="400" cy="200" r="60" fill="#6ee7b7" stroke="#065f46" stroke-width="2"/>
<text x="400" y="130" text-anchor="middle" font-size="14" font-family="sans-serif" font-weight="700" fill="#065f46">Real Numbers</text>
<text x="400" y="165" text-anchor="middle" font-size="13" font-family="sans-serif" fill="#047857">Rational Numbers ℚ</text>
<text x="400" y="195" text-anchor="middle" font-size="13" font-family="sans-serif" fill="#065f46">Integers ℤ</text>
<text x="400" y="215" text-anchor="middle" font-size="13" font-family="sans-serif" fill="#064e3b">Whole ℕ</text>
<text x="220" y="210" text-anchor="middle" font-size="18" fill="#047857">½ ¾</text>
<text x="580" y="210" text-anchor="middle" font-size="18" fill="#047857">−⅔ ⅗</text>
<text x="400" y="310" text-anchor="middle" font-size="14" font-family="sans-serif" fill="#065f46">p/q form, q≠0</text>
<text x="400" y="390" text-anchor="middle" font-size="26" font-family="sans-serif" font-weight="800" fill="#064e3b">Rational Numbers</text>`
  },
  'comparing-quantities': {
    bg: ['#fefce8','#fef08a'], accent: '#ca8a04',
    svg: `${[['Ratio','2 : 3','#ca8a04',140,170],['Percentage','75%','#ea580c',340,170],['Profit/Loss','P = SP−CP','#16a34a',540,170],['Simple Interest','SI = PRT/100','#2563eb',700,170]].map(([l,v,c,x,y])=>`<rect x="${x-110}" y="${y-50}" width="210" height="130" rx="14" fill="white" stroke="${c}" stroke-width="2.5" opacity=".9"/>
<text x="${x}" y="${y-12}" text-anchor="middle" font-size="14" font-family="sans-serif" font-weight="700" fill="${c}">${l}</text>
<text x="${x}" y="${y+28}" text-anchor="middle" font-size="20" font-family="monospace" font-weight="800" fill="${c}">${v}</text>`).join('')}
<rect x="80" y="330" width="640" height="50" rx="12" fill="#fef9c3" stroke="#ca8a04" stroke-width="2"/>
<text x="400" y="362" text-anchor="middle" font-size="16" font-family="sans-serif" fill="#78350f">Discount = MP − SP · GST · Compound Interest</text>
<text x="400" y="410" text-anchor="middle" font-size="24" font-family="sans-serif" font-weight="800" fill="#713f12">Comparing Quantities</text>`
  },
  'perimeter-area': {
    bg: ['#f0fdf4','#bbf7d0'], accent: '#16a34a',
    svg: `<rect x="100" y="120" width="240" height="150" rx="6" fill="#d1fae5" stroke="#16a34a" stroke-width="3"/>
<text x="220" y="185" text-anchor="middle" font-size="15" font-family="sans-serif" font-weight="700" fill="#15803d">Rectangle</text>
<text x="220" y="212" text-anchor="middle" font-size="14" font-family="sans-serif" fill="#166534">A = l × b</text>
<text x="220" y="235" text-anchor="middle" font-size="13" font-family="sans-serif" fill="#166534">P = 2(l+b)</text>
<polygon points="440,120 570,120 570,270 440,270" fill="#bbf7d0" stroke="#059669" stroke-width="3"/>
<text x="505" y="195" text-anchor="middle" font-size="15" font-family="sans-serif" font-weight="700" fill="#065f46">Square</text>
<text x="505" y="220" text-anchor="middle" font-size="14" font-family="sans-serif" fill="#065f46">A = a²</text>
<polygon points="650,270 730,120 810,270" fill="#d1fae5" stroke="#16a34a" stroke-width="3" opacity=".8"/>
<text x="730" y="230" text-anchor="middle" font-size="14" font-family="sans-serif" font-weight="700" fill="#14532d">Triangle</text>
<text x="730" y="255" text-anchor="middle" font-size="13" font-family="sans-serif" fill="#14532d">½×b×h</text>
<circle cx="80" cy="340" r="40" fill="none" stroke="#16a34a" stroke-width="3"/>
<text x="80" y="337" text-anchor="middle" font-size="13" font-family="sans-serif" font-weight="700" fill="#15803d">Circle</text>
<text x="80" y="357" text-anchor="middle" font-size="12" fill="#15803d">πr²</text>
<text x="400" y="400" text-anchor="middle" font-size="24" font-family="sans-serif" font-weight="800" fill="#14532d">Perimeter and Area</text>`
  },
  'algebraic-expressions': {
    bg: ['#fff1f2','#fecdd3'], accent: '#e11d48',
    svg: `<rect x="80" y="100" width="640" height="70" rx="14" fill="#ffe4e6" stroke="#e11d48" stroke-width="2.5"/>
<text x="400" y="145" text-anchor="middle" font-size="32" font-family="monospace" font-weight="900" fill="#be123c">3x² + 2xy − 5y + 7</text>
${[['3x²','monomial','#e11d48',130,240],['2xy','binomial\nterm','#f97316',280,240],['−5y','term','#7c3aed',430,240],['7','constant','#059669',580,240]].map(([t,l,c,x,y])=>`<rect x="${x-70}" y="${y-35}" width="140" height="90" rx="12" fill="white" stroke="${c}" stroke-width="2.5"/>
<text x="${x}" y="${y}" text-anchor="middle" font-size="22" font-family="monospace" font-weight="800" fill="${c}">${t}</text>
<text x="${x}" y="${y+28}" text-anchor="middle" font-size="12" font-family="sans-serif" fill="#374151">${l}</text>`).join('')}
<text x="400" y="360" text-anchor="middle" font-size="15" font-family="sans-serif" fill="#374151">(a+b)² = a²+2ab+b² · (a−b)² = a²−2ab+b² · (a+b)(a−b) = a²−b²</text>
<text x="400" y="400" text-anchor="middle" font-size="22" font-family="sans-serif" font-weight="800" fill="#881337">Algebraic Expressions &amp; Identities</text>`
  },
  'exponents-powers': {
    bg: ['#0f172a','#1e1b4b'], accent: '#818cf8',
    svg: `<text x="400" y="115" text-anchor="middle" font-size="22" font-family="sans-serif" font-weight="700" fill="#818cf8">Laws of Exponents</text>
${[['aᵐ × aⁿ = aᵐ⁺ⁿ','#818cf8',200,175],['aᵐ ÷ aⁿ = aᵐ⁻ⁿ','#a5b4fc',540,175],['(aᵐ)ⁿ = aᵐⁿ','#6366f1',200,275],['a⁰ = 1','#c7d2fe',370,275],['a⁻ⁿ = 1/aⁿ','#818cf8',540,275]].map(([law,c,x,y])=>`<rect x="${x-140}" y="${y-38}" width="275" height="75" rx="14" fill="rgba(129,140,248,0.12)" stroke="${c}" stroke-width="2"/>
<text x="${x}" y="${y+8}" text-anchor="middle" font-size="22" font-family="monospace" font-weight="800" fill="${c}">${law}</text>`).join('')}
<text x="400" y="340" text-anchor="middle" font-size="19" font-family="monospace" fill="#a5b4fc">2¹⁰ = 1024 · 10⁶ = 1,000,000</text>
<text x="400" y="390" text-anchor="middle" font-size="26" font-family="sans-serif" font-weight="800" fill="#818cf8">Exponents and Powers</text>`
  },
  'visualising-solid-shapes': {
    bg: ['#fdf4ff','#e9d5ff'], accent: '#7c3aed',
    svg: `<rect x="80" y="130" width="120" height="120" rx="6" fill="#ede9fe" stroke="#7c3aed" stroke-width="3"/>
<polygon points="80,130 150,90 200,90 200,210 130,250 80,250" fill="none" stroke="#7c3aed" stroke-width="2" stroke-dasharray="5,4"/>
<line x1="80" y1="130" x2="150" y2="90" stroke="#7c3aed" stroke-width="2"/>
<line x1="200" y1="130" x2="200" y2="90" stroke="#7c3aed" stroke-width="2"/>
<text x="140" y="275" text-anchor="middle" font-size="14" font-weight="700" fill="#5b21b6">Cube</text>
<circle cx="380" cy="185" r="70" fill="#e9d5ff" stroke="#7c3aed" stroke-width="3"/>
<ellipse cx="380" cy="185" rx="70" ry="22" fill="none" stroke="#7c3aed" stroke-width="2" stroke-dasharray="5,4"/>
<text x="380" y="275" text-anchor="middle" font-size="14" font-weight="700" fill="#5b21b6">Sphere</text>
<ellipse cx="580" cy="235" rx="70" ry="25" fill="#ede9fe" stroke="#7c3aed" stroke-width="3"/>
<line x1="510" y1="235" x2="580" y2="110" stroke="#7c3aed" stroke-width="3"/>
<line x1="650" y1="235" x2="580" y2="110" stroke="#7c3aed" stroke-width="3"/>
<text x="580" y="275" text-anchor="middle" font-size="14" font-weight="700" fill="#5b21b6">Cone</text>
<text x="150" y="320" font-size="13" font-family="sans-serif" fill="#4c1d95">Euler: V − E + F = 2</text>
<text x="400" y="390" text-anchor="middle" font-size="22" font-family="sans-serif" font-weight="800" fill="#3b0764">Visualising Solid Shapes</text>`
  },
  'triangle-properties-7': {
    bg: ['#eff6ff','#bfdbfe'], accent: '#2563eb',
    svg: `<polygon points="400,80 680,320 120,320" fill="#dbeafe" stroke="#2563eb" stroke-width="3"/>
<line x1="400" y1="80" x2="400" y2="320" stroke="#e11d48" stroke-width="2" stroke-dasharray="6,4"/>
<text x="420" y="205" font-size="14" fill="#dc2626">h</text>
<text x="240" y="310" font-size="14" fill="#374151">b</text>
<text x="560" y="250" font-size="16" fill="#1d4ed8" font-weight="700">∠A</text>
<text x="115" y="340" font-size="16" fill="#1d4ed8" font-weight="700">∠B</text>
<text x="680" y="340" font-size="16" fill="#1d4ed8" font-weight="700">∠C</text>
<rect x="80" y="355" width="640" height="45" rx="10" fill="#dbeafe" stroke="#2563eb" stroke-width="1.5"/>
<text x="400" y="375" text-anchor="middle" font-size="14" font-family="sans-serif" fill="#1e3a8a">∠A+∠B+∠C = 180° · Exterior angle = sum of interior opposite angles</text>
<text x="400" y="395" text-anchor="middle" font-size="13" font-family="sans-serif" fill="#1e3a8a">Pythagoras: a²+b²=c² (right △)</text>
<text x="400" y="420" text-anchor="middle" font-size="24" font-family="sans-serif" font-weight="800" fill="#1e3a8a">Triangle and Its Properties</text>`
  },
  'congruence-triangles-7': {
    bg: ['#ecfdf5','#a7f3d0'], accent: '#059669',
    svg: `<polygon points="160,300 300,100 440,300" fill="#d1fae5" stroke="#059669" stroke-width="3"/>
<polygon points="480,300 620,100 760,300" fill="#a7f3d0" stroke="#047857" stroke-width="3"/>
<text x="300" y="220" text-anchor="middle" font-size="50" fill="#059669" opacity=".3">△</text>
<text x="620" y="220" text-anchor="middle" font-size="50" fill="#047857" opacity=".3">△</text>
<text x="400" y="220" text-anchor="middle" font-size="28" fill="#065f46" font-weight="900">≅</text>
${[['SSS','Side-Side-Side',130,360],['SAS','Side-Angle-Side',270,360],['ASA','Angle-Side-Angle',410,360],['RHS','Right-Hyp-Side',560,360],['AAS','Angle-Angle-Side',700,360]].map(([a,l,x,y])=>`<rect x="${x-60}" y="${y-28}" width="118" height="55" rx="10" fill="#d1fae5" stroke="#059669" stroke-width="2"/>
<text x="${x}" y="${y-4}" text-anchor="middle" font-size="15" font-family="monospace" font-weight="800" fill="#065f46">${a}</text>
<text x="${x}" y="${y+16}" text-anchor="middle" font-size="10" font-family="sans-serif" fill="#047857">${l}</text>`).join('')}
<text x="400" y="415" text-anchor="middle" font-size="24" font-family="sans-serif" font-weight="800" fill="#064e3b">Congruence of Triangles</text>`
  },
  'data-handling-7': {
    bg: ['#eff6ff','#bfdbfe'], accent: '#2563eb',
    svg: `<circle cx="240" cy="200" r="120" fill="#dbeafe" stroke="#2563eb" stroke-width="3"/>
<path d="M240,200 L240,80 A120,120 0 0,1 344,260 Z" fill="#2563eb" opacity=".8"/>
<path d="M240,200 L344,260 A120,120 0 0,1 136,260 Z" fill="#7c3aed" opacity=".8"/>
<path d="M240,200 L136,260 A120,120 0 0,1 240,80 Z" fill="#0891b2" opacity=".8"/>
<text x="275" y="168" font-size="13" fill="#fff" font-weight="700">35%</text>
<text x="248" y="265" font-size="13" fill="#fff" font-weight="700">40%</text>
<text x="152" y="200" font-size="13" fill="#fff" font-weight="700">25%</text>
<text x="240" y="350" text-anchor="middle" font-size="14" font-family="sans-serif" font-weight="700" fill="#1d4ed8">Pie Chart</text>
<rect x="420" y="100" width="320" height="230" rx="12" fill="#f8fafc" stroke="#2563eb" stroke-width="2"/>
<text x="580" y="130" text-anchor="middle" font-size="14" font-weight="700" fill="#1d4ed8">Mean · Median · Mode</text>
${[35,70,55,90,45].map((h,i)=>`<rect x="${435+i*55}" y="${300-h}" width="38" height="${h}" rx="5" fill="#3b82f6" opacity=".8"/>`).join('')}
<text x="580" y="350" text-anchor="middle" font-size="13" font-family="sans-serif" fill="#1d4ed8">Bar Graph</text>
<text x="400" y="410" text-anchor="middle" font-size="24" font-family="sans-serif" font-weight="800" fill="#1e3a8a">Data Handling</text>`
  },
  'symmetry-7': {
    bg: ['#fdf4ff','#e9d5ff'], accent: '#9333ea',
    svg: `<line x1="400" y1="60" x2="400" y2="340" stroke="#9333ea" stroke-width="3" stroke-dasharray="10,6"/>
<line x1="100" y1="200" x2="700" y2="200" stroke="#7c3aed" stroke-width="2" stroke-dasharray="8,5" opacity=".5"/>
<polygon points="200,120 300,100 320,200 280,280 200,280 120,200 140,120" fill="#f3e8ff" stroke="#9333ea" stroke-width="2.5" opacity=".7"/>
<polygon points="600,120 700,100 720,200 680,280 600,280 520,200 540,120" fill="#f3e8ff" stroke="#9333ea" stroke-width="2.5" opacity=".7"/>
<text x="200" y="340" text-anchor="middle" font-size="14" font-family="sans-serif" font-weight="700" fill="#7e22ce">Line symmetry</text>
<text x="600" y="340" text-anchor="middle" font-size="14" font-family="sans-serif" font-weight="700" fill="#7e22ce">Rotational symmetry</text>
<path d="M570,200 A30,30 0 1,1 600,170" fill="none" stroke="#9333ea" stroke-width="2.5"/>
<polygon points="600,168 610,158 602,172" fill="#9333ea"/>
<text x="640" y="198" font-size="13" fill="#7e22ce">Order 3</text>
<text x="400" y="390" text-anchor="middle" font-size="26" font-family="sans-serif" font-weight="800" fill="#581c87">Symmetry</text>`
  },
  'practical-geometry-7': {
    bg: ['#eff6ff','#bfdbfe'], accent: '#1d4ed8',
    svg: `<circle cx="350" cy="200" r="140" fill="none" stroke="#bfdbfe" stroke-width="1.5"/>
<circle cx="350" cy="200" r="4" fill="#1d4ed8"/>
<line x1="350" y1="200" x2="490" y2="200" stroke="#374151" stroke-width="2.5"/>
<path d="M350,200 A140,140 0 0,1 470,130" fill="none" stroke="#1d4ed8" stroke-width="2.5" stroke-dasharray="6,4"/>
<text x="415" y="190" font-size="14" fill="#1d4ed8" font-weight="700">r</text>
<polygon points="550,100 680,100 740,280 490,280" fill="none" stroke="#7c3aed" stroke-width="2.5"/>
<line x1="490" y1="280" x2="615" y2="100" stroke="#e11d48" stroke-width="2" stroke-dasharray="5,4"/>
<text x="620" y="360" text-anchor="middle" font-size="13" fill="#5b21b6">Triangle construction</text>
<text x="290" y="380" text-anchor="middle" font-size="13" fill="#1d4ed8">Circle construction</text>
<text x="400" y="410" text-anchor="middle" font-size="24" font-family="sans-serif" font-weight="800" fill="#1e3a8a">Practical Geometry</text>`
  },

  // ── SCIENCE ─────────────────────────────────────────────────────
  'nutrition-in-plants': {
    bg: ['#f0fdf4','#bbf7d0'], accent: '#16a34a',
    svg: `<circle cx="400" cy="190" r="110" fill="#bbf7d0" stroke="#16a34a" stroke-width="3"/>
<text x="400" y="150" text-anchor="middle" font-size="15" font-family="sans-serif" font-weight="700" fill="#15803d">PHOTOSYNTHESIS</text>
<text x="400" y="178" text-anchor="middle" font-size="13" fill="#166534">CO₂ + H₂O + Light</text>
<text x="400" y="200" text-anchor="middle" font-size="20" fill="#15803d">↓</text>
<text x="400" y="222" text-anchor="middle" font-size="13" fill="#166534">Glucose + O₂</text>
<text x="200" y="250" font-size="24">☀️</text>
<text x="560" y="250" font-size="24">💧</text>
<text x="400" y="265" text-anchor="middle" font-size="24">🍃</text>
<rect x="80" y="320" width="640" height="55" rx="12" fill="#d1fae5" stroke="#16a34a" stroke-width="2"/>
<text x="400" y="345" text-anchor="middle" font-size="14" font-family="sans-serif" font-weight="700" fill="#14532d">Other modes: Parasitic (Cuscuta) · Insectivorous (Pitcher plant)</text>
<text x="400" y="363" text-anchor="middle" font-size="13" fill="#15803d">Symbiotic (Lichens) · Saprotrophic (Fungi)</text>
<text x="400" y="400" text-anchor="middle" font-size="24" font-family="sans-serif" font-weight="800" fill="#14532d">Nutrition in Plants</text>`
  },
  'nutrition-in-animals': {
    bg: ['#fdf4ff','#e9d5ff'], accent: '#7c3aed',
    svg: `<path d="M220,100 Q260,80 300,100 Q310,140 300,180 Q290,220 260,240 Q240,250 220,240 Q190,220 180,180 Q170,140 180,100 Z" fill="#e9d5ff" stroke="#7c3aed" stroke-width="2.5"/>
<text x="240" y="155" text-anchor="middle" font-size="13" font-family="sans-serif" font-weight="700" fill="#5b21b6">Mouth</text>
<rect x="230" y="250" width="20" height="60" rx="6" fill="#c4b5fd"/>
<rect x="190" y="310" width="100" height="80" rx="12" fill="#ddd6fe" stroke="#7c3aed" stroke-width="2"/>
<text x="240" y="358" text-anchor="middle" font-size="13" fill="#5b21b6">Stomach</text>
<rect x="200" y="390" width="80" height="50" rx="10" fill="#c4b5fd" stroke="#7c3aed" stroke-width="1.5"/>
<text x="240" y="420" text-anchor="middle" font-size="11" fill="#4c1d95">Intestine</text>
<rect x="420" y="100" width="320" height="300" rx="14" fill="#f5f3ff" stroke="#7c3aed" stroke-width="2"/>
<text x="580" y="135" text-anchor="middle" font-size="14" font-weight="700" fill="#5b21b6">Digestion Steps</text>
${[['Ingestion','Taking in food',145],['Digestion','Breaking down',170],['Absorption','Into blood',195],['Assimilation','Used by cells',220],['Egestion','Removing waste',245]].map(([s,d,y])=>`<text x="435" y="${y+100}" font-size="12" font-family="sans-serif" fill="#374151">• ${s}: ${d}</text>`).join('')}
<text x="400" y="430" text-anchor="middle" font-size="24" font-family="sans-serif" font-weight="800" fill="#3b0764">Nutrition in Animals</text>`
  },
  'heat': {
    bg: ['#fff7ed','#fed7aa'], accent: '#ea580c',
    svg: `<circle cx="200" cy="200" r="80" fill="#fef08a" stroke="#f59e0b" stroke-width="3"/>
<text x="200" y="195" text-anchor="middle" font-size="40">🌡️</text>
<text x="200" y="235" text-anchor="middle" font-size="14" font-weight="700" fill="#92400e">Temperature</text>
${[['Conduction','Solids · particles vibrate','#ea580c',550,150],['Convection','Liquids/Gases · currents','#f97316',550,240],['Radiation','No medium · EM waves','#dc2626',550,330]].map(([m,d,c,x,y])=>`<rect x="${x-130}" y="${y-30}" width="280" height="62" rx="12" fill="white" stroke="${c}" stroke-width="2.5"/>
<text x="${x}" y="${y-4}" text-anchor="middle" font-size="15" font-family="sans-serif" font-weight="700" fill="${c}">${m}</text>
<text x="${x}" y="${y+20}" text-anchor="middle" font-size="12" fill="#374151">${d}</text>`).join('')}
<line x1="280" y1="200" x2="420" y2="155" stroke="#ea580c" stroke-width="2" stroke-dasharray="5,4"/>
<line x1="280" y1="205" x2="420" y2="243" stroke="#f97316" stroke-width="2" stroke-dasharray="5,4"/>
<line x1="280" y1="210" x2="420" y2="333" stroke="#dc2626" stroke-width="2" stroke-dasharray="5,4"/>
<text x="400" y="400" text-anchor="middle" font-size="26" font-family="sans-serif" font-weight="800" fill="#7c2d12">Heat</text>`
  },
  'acids-bases-salts-7': {
    bg: ['#ecfdf5','#a7f3d0'], accent: '#059669',
    svg: `<rect x="80" y="120" width="180" height="220" rx="16" fill="#fee2e2" stroke="#dc2626" stroke-width="3"/>
<text x="170" y="160" text-anchor="middle" font-size="16" font-weight="700" fill="#dc2626">ACIDS</text>
<text x="170" y="190" text-anchor="middle" font-size="24">🍋</text>
<text x="170" y="225" text-anchor="middle" font-size="13" fill="#991b1b">pH &lt; 7</text>
<text x="170" y="248" text-anchor="middle" font-size="12" fill="#991b1b">HCl · H₂SO₄</text>
<text x="170" y="268" text-anchor="middle" font-size="12" fill="#991b1b">Vinegar · Lemon</text>
<text x="170" y="295" text-anchor="middle" font-size="12" fill="#991b1b">Turns litmus Red</text>
<rect x="540" y="120" width="180" height="220" rx="16" fill="#dbeafe" stroke="#2563eb" stroke-width="3"/>
<text x="630" y="160" text-anchor="middle" font-size="16" font-weight="700" fill="#1d4ed8">BASES</text>
<text x="630" y="190" text-anchor="middle" font-size="24">🧼</text>
<text x="630" y="225" text-anchor="middle" font-size="13" fill="#1e3a8a">pH &gt; 7</text>
<text x="630" y="248" text-anchor="middle" font-size="12" fill="#1e3a8a">NaOH · Ca(OH)₂</text>
<text x="630" y="268" text-anchor="middle" font-size="12" fill="#1e3a8a">Soap · Baking soda</text>
<text x="630" y="295" text-anchor="middle" font-size="12" fill="#1e3a8a">Turns litmus Blue</text>
<circle cx="400" cy="230" r="80" fill="#d1fae5" stroke="#059669" stroke-width="3"/>
<text x="400" y="215" text-anchor="middle" font-size="14" font-weight="700" fill="#065f46">NEUTRAL</text>
<text x="400" y="238" text-anchor="middle" font-size="14" fill="#065f46">pH = 7</text>
<text x="400" y="260" text-anchor="middle" font-size="12" fill="#065f46">💧 Pure water</text>
<text x="400" y="395" text-anchor="middle" font-size="24" font-family="sans-serif" font-weight="800" fill="#064e3b">Acids, Bases and Salts</text>`
  },
  'physical-chemical-changes': {
    bg: ['#fff7ed','#fed7aa'], accent: '#f97316',
    svg: `<rect x="80" y="120" width="270" height="210" rx="16" fill="#fef3c7" stroke="#f59e0b" stroke-width="3"/>
<text x="215" y="160" text-anchor="middle" font-size="16" font-weight="700" fill="#92400e">Physical Change</text>
<text x="215" y="195" text-anchor="middle" font-size="32">🧊→💧→💨</text>
<text x="215" y="235" text-anchor="middle" font-size="13" fill="#78350f">No new substance</text>
<text x="215" y="258" text-anchor="middle" font-size="13" fill="#78350f">Reversible usually</text>
<text x="215" y="281" text-anchor="middle" font-size="13" fill="#78350f">Melting · Boiling</text>
<text x="215" y="304" text-anchor="middle" font-size="13" fill="#78350f">Cutting · Dissolving</text>
<rect x="450" y="120" width="270" height="210" rx="16" fill="#fce7f3" stroke="#e11d48" stroke-width="3"/>
<text x="585" y="160" text-anchor="middle" font-size="16" font-weight="700" fill="#9f1239">Chemical Change</text>
<text x="585" y="195" text-anchor="middle" font-size="32">🌿→🔥→💨</text>
<text x="585" y="235" text-anchor="middle" font-size="13" fill="#7f1d1d">New substance formed</text>
<text x="585" y="258" text-anchor="middle" font-size="13" fill="#7f1d1d">Irreversible usually</text>
<text x="585" y="281" text-anchor="middle" font-size="13" fill="#7f1d1d">Burning · Rusting</text>
<text x="585" y="304" text-anchor="middle" font-size="13" fill="#7f1d1d">Curdling · Digestion</text>
<text x="400" y="400" text-anchor="middle" font-size="22" font-family="sans-serif" font-weight="800" fill="#7c2d12">Physical &amp; Chemical Changes</text>`
  },
  'motion-time': {
    bg: ['#eff6ff','#bfdbfe'], accent: '#2563eb',
    svg: `<line x1="80" y1="280" x2="720" y2="280" stroke="#374151" stroke-width="2.5"/>
<line x1="80" y1="280" x2="80" y2="100" stroke="#374151" stroke-width="2.5"/>
<polygon points="720,272 740,280 720,288" fill="#374151"/>
<polygon points="72,100 80,80 88,100" fill="#374151"/>
<text x="730" y="298" font-size="13" fill="#374151">Time</text>
<text x="60" y="95" text-anchor="middle" font-size="13" fill="#374151">Dist</text>
<path d="M80,280 Q250,150 400,200 Q550,250 720,120" fill="none" stroke="#2563eb" stroke-width="3"/>
<text x="400" y="180" font-size="13" fill="#1d4ed8" font-weight="700">non-uniform</text>
<line x1="80" y1="280" x2="720" y2="120" stroke="#dc2626" stroke-width="2.5" stroke-dasharray="8,5"/>
<text x="550" y="175" font-size="13" fill="#dc2626" font-weight="700">uniform</text>
<rect x="80" y="310" width="640" height="50" rx="10" fill="#dbeafe" stroke="#2563eb" stroke-width="2"/>
<text x="400" y="335" text-anchor="middle" font-size="15" font-family="monospace" font-weight="700" fill="#1d4ed8">Speed = Distance / Time</text>
<text x="400" y="355" text-anchor="middle" font-size="13" fill="#1e3a8a">m/s · km/h · Odometer · Speedometer</text>
<text x="400" y="400" text-anchor="middle" font-size="26" font-family="sans-serif" font-weight="800" fill="#1e3a8a">Motion and Time</text>`
  },
  'electric-current-effects': {
    bg: ['#1e1b4b','#312e81'], accent: '#fbbf24',
    svg: `<rect x="100" y="140" width="70" height="120" rx="10" fill="#fbbf24" opacity=".9"/>
<text x="135" y="208" text-anchor="middle" font-size="11" font-family="sans-serif" font-weight="700" fill="#1e1b4b">CELL</text>
<line x1="170" y1="160" x2="340" y2="160" stroke="#fbbf24" stroke-width="5"/>
<line x1="170" y1="250" x2="630" y2="250" stroke="#fbbf24" stroke-width="5"/>
<circle cx="400" cy="160" r="45" fill="none" stroke="#fbbf24" stroke-width="3"/>
<circle cx="400" cy="160" r="16" fill="#fef08a" opacity=".9"/>
<line x1="340" y1="160" x2="455" y2="160" stroke="#fbbf24" stroke-width="5"/>
<text x="400" y="220" text-anchor="middle" font-size="12" fill="#fbbf24">💡 Heating</text>
<rect x="490" y="150" width="60" height="20" rx="4" fill="#4ade80"/>
<line x1="550" y1="160" x2="630" y2="160" stroke="#fbbf24" stroke-width="5"/>
<line x1="630" y1="160" x2="630" y2="250" stroke="#fbbf24" stroke-width="5"/>
<text x="520" y="200" text-anchor="middle" font-size="12" fill="#4ade80">🔌 Magnetic</text>
<text x="400" y="295" text-anchor="middle" font-size="14" fill="#a5b4fc">Electromagnet · Motor · MCB · Fuse</text>
<text x="400" y="350" text-anchor="middle" font-size="14" fill="#818cf8">Chemical effect · Electroplating</text>
<text x="400" y="395" text-anchor="middle" font-size="22" font-family="sans-serif" font-weight="800" fill="#fbbf24">Electric Current &amp; Its Effects</text>`
  },
  'reproduction-in-plants': {
    bg: ['#f0fdf4','#bbf7d0'], accent: '#16a34a',
    svg: `${[['Vegetative','🌿 Stem cuttings\nBudding · Grafting','#16a34a',155,185],['Sexual','🌸 Pollination\nFertilisation','#ec4899',400,185],['Spore','🍄 Ferns\nMoss · Fungi','#7c3aed',645,185]].map(([t,d,c,x,y])=>`<circle cx="${x}" cy="${y}" r="100" fill="white" stroke="${c}" stroke-width="3" opacity=".9"/>
<text x="${x}" y="${y-35}" text-anchor="middle" font-size="15" font-family="sans-serif" font-weight="700" fill="${c}">${t}</text>
${d.split('\n').map((line,i)=>`<text x="${x}" y="${y+5+i*22}" text-anchor="middle" font-size="13" font-family="sans-serif" fill="#374151">${line}</text>`).join('')}`).join('')}
<text x="400" y="325" text-anchor="middle" font-size="15" font-family="sans-serif" fill="#15803d">Asexual: Fragmentation · Budding (Hydra) · Spore formation</text>
<text x="400" y="350" text-anchor="middle" font-size="14" font-family="sans-serif" fill="#15803d">Sexual: Pollen → Stigma → Fertilisation → Seed</text>
<text x="400" y="400" text-anchor="middle" font-size="24" font-family="sans-serif" font-weight="800" fill="#14532d">Reproduction in Plants</text>`
  },
  'weather-climate-7': {
    bg: ['#eff6ff','#bfdbfe'], accent: '#0891b2',
    svg: `<circle cx="200" cy="165" r="65" fill="#fbbf24" opacity=".7"/>
<circle cx="330" cy="155" r="80" fill="#f3f4f6" opacity=".9" stroke="#d1d5db" stroke-width="2"/>
<circle cx="430" cy="135" r="70" fill="#f3f4f6" opacity=".9" stroke="#d1d5db" stroke-width="2"/>
<path d="M250,230 L265,270 M295,230 L310,270 M340,220 L355,260" stroke="#60a5fa" stroke-width="3"/>
<text x="300" y="310" text-anchor="middle" font-size="14" font-weight="700" fill="#0369a1">Weather (daily)</text>
<rect x="440" y="100" width="280" height="230" rx="14" fill="#e0f2fe" stroke="#0891b2" stroke-width="2.5"/>
<text x="580" y="135" text-anchor="middle" font-size="14" font-weight="700" fill="#0369a1">Climate Zones</text>
<rect x="455" y="150" width="250" height="42" rx="8" fill="#fde68a"/>
<text x="580" y="176" text-anchor="middle" font-size="13" fill="#92400e">☀️ Tropical (hot, wet)</text>
<rect x="455" y="200" width="250" height="42" rx="8" fill="#bfdbfe"/>
<text x="580" y="226" text-anchor="middle" font-size="13" fill="#1d4ed8">🌤 Temperate</text>
<rect x="455" y="250" width="250" height="42" rx="8" fill="#dbeafe"/>
<text x="580" y="276" text-anchor="middle" font-size="13" fill="#0369a1">❄️ Polar (cold)</text>
<text x="400" y="395" text-anchor="middle" font-size="22" font-family="sans-serif" font-weight="800" fill="#0c4a6e">Weather, Climate &amp; Adaptations</text>`
  },
  'soil-7': {
    bg: ['#fffbeb','#fde68a'], accent: '#92400e',
    svg: `<rect x="100" y="90" width="600" height="55" rx="10" fill="#d1fae5" stroke="#16a34a" stroke-width="2"/>
<text x="400" y="123" text-anchor="middle" font-size="14" font-weight="700" fill="#065f46">Humus layer (topsoil) — most fertile</text>
<rect x="100" y="155" width="600" height="55" rx="10" fill="#fde68a" stroke="#b45309" stroke-width="2"/>
<text x="400" y="188" text-anchor="middle" font-size="14" font-weight="700" fill="#78350f">Subsoil — minerals, less organic matter</text>
<rect x="100" y="220" width="600" height="55" rx="10" fill="#d6d3d1" stroke="#78716c" stroke-width="2"/>
<text x="400" y="253" text-anchor="middle" font-size="14" font-weight="700" fill="#44403c">Weathered rock / Parent rock</text>
<rect x="100" y="285" width="600" height="55" rx="10" fill="#a8a29e" stroke="#57534e" stroke-width="2"/>
<text x="400" y="318" text-anchor="middle" font-size="14" font-weight="700" fill="#1c1917">Bedrock</text>
<text x="60" y="120" text-anchor="middle" font-size="12" fill="#16a34a" font-weight="700">A</text>
<text x="60" y="183" text-anchor="middle" font-size="12" fill="#92400e" font-weight="700">B</text>
<text x="60" y="248" text-anchor="middle" font-size="12" fill="#44403c" font-weight="700">C</text>
<text x="60" y="313" text-anchor="middle" font-size="12" fill="#1c1917" font-weight="700">R</text>
<text x="30" y="220" text-anchor="middle" font-size="11" fill="#374151" transform="rotate(-90,30,220)">Soil Profile</text>
<text x="400" y="390" text-anchor="middle" font-size="26" font-family="sans-serif" font-weight="800" fill="#78350f">Soil</text>`
  },
  'forests-lifeline-7': {
    bg: ['#f0fdf4','#bbf7d0'], accent: '#15803d',
    svg: `<rect x="80" y="300" width="640" height="40" rx="8" fill="#86efac"/>
${[[130,280,70],[190,240,90],[260,260,75],[330,230,95],[400,250,80],[470,220,100],[540,255,82],[610,270,72],[670,285,65]].map(([x,y,h])=>`<polygon points="${x},${y} ${x-h/2},300 ${x+h/2},300" fill="#22c55e" opacity="${0.7+Math.random()*0.3}"/>`).join('')}
<text x="400" y="360" text-anchor="middle" font-size="15" font-family="sans-serif" fill="#14532d">🦁 Wildlife · 🌿 Biodiversity · 💧 Water cycle</text>
<rect x="80" y="380" width="640" height="45" rx="10" fill="#d1fae5" stroke="#15803d" stroke-width="2"/>
<text x="400" y="402" text-anchor="middle" font-size="14" font-family="sans-serif" fill="#065f46">O₂ producer · Soil conservation · Carbon sink · Habitat</text>
<text x="400" y="418" text-anchor="middle" font-size="13" fill="#15803d">Deforestation → Climate change · Flood · Drought</text>
<text x="400" y="100" text-anchor="middle" font-size="22" font-family="sans-serif" font-weight="700" fill="#15803d">🌳 Forests: Our Lifeline 🌳</text>
<text x="400" y="435" text-anchor="middle" font-size="22" font-family="sans-serif" font-weight="800" fill="#14532d">Forests: Our Lifeline</text>`
  },
  'light-7': {
    bg: ['#0f172a','#1e293b'], accent: '#fbbf24',
    svg: `<circle cx="140" cy="210" r="50" fill="#fbbf24" opacity=".8"/>
${[0,30,60,90,120,150,180,210,240,270,300,330].map(a=>{const r=a*Math.PI/180;return `<line x1="${140+55*Math.cos(r)}" y1="${210+55*Math.sin(r)}" x2="${140+80*Math.cos(r)}" y2="${210+80*Math.sin(r)}" stroke="#fbbf24" stroke-width="2.5"/>`}).join('')}
<line x1="220" y1="210" x2="400" y2="210" stroke="#fbbf24" stroke-width="3"/>
<rect x="400" y="160" width="12" height="100" rx="4" fill="#94a3b8"/>
<line x1="412" y1="210" x2="560" y2="140" stroke="#fbbf24" stroke-width="2.5"/>
<line x1="400" y1="130" x2="400" y2="290" stroke="#475569" stroke-width="1.5" stroke-dasharray="5,4"/>
<path d="M400,210 A40,40 0 0,1 430,175" fill="none" stroke="#60a5fa" stroke-width="2"/>
<text x="450" y="185" font-size="13" fill="#60a5fa">r</text>
<path d="M400,210 A40,40 0 0,0 430,175" fill="none" stroke="#f87171" stroke-width="2"/>
<text x="365" y="185" font-size="13" fill="#f87171">i</text>
<text x="560" y="140" font-size="13" fill="#fbbf24">Reflected ray</text>
<rect x="480" y="250" width="240" height="90" rx="12" fill="rgba(255,255,255,0.07)" stroke="#818cf8" stroke-width="2"/>
<text x="600" y="278" text-anchor="middle" font-size="13" fill="#a5b4fc">Laws of Reflection</text>
<text x="600" y="298" text-anchor="middle" font-size="12" fill="#94a3b8">∠i = ∠r</text>
<text x="600" y="318" text-anchor="middle" font-size="12" fill="#94a3b8">All 3 rays coplanar</text>
<text x="400" y="395" text-anchor="middle" font-size="26" font-family="sans-serif" font-weight="800" fill="#fbbf24">Light</text>`
  },

  // ── HISTORY ─────────────────────────────────────────────────────
  'tracing-changes-thousand-years': {
    bg: ['#fffbeb','#fde68a'], accent: '#92400e',
    svg: `<line x1="80" y1="215" x2="720" y2="215" stroke="#92400e" stroke-width="3"/>
<polygon points="720,207 740,215 720,223" fill="#92400e"/>
${[[120,'700 CE','Rajputs'],[270,'1100 CE','Delhi\nSultanate'],[420,'1500 CE','Mughal\nEmpire'],[570,'1700 CE','Maratha'],[680,'1857','British']].map(([x,yr,l])=>`<circle cx="${x}" cy="215" r="10" fill="#b45309"/>
<line x1="${x}" y1="205" x2="${x}" y2="165" stroke="#92400e" stroke-width="2"/>
<text x="${x}" y="158" text-anchor="middle" font-size="12" font-family="sans-serif" font-weight="700" fill="#92400e">${yr}</text>
<text x="${x}" y="240" text-anchor="middle" font-size="11" font-family="sans-serif" fill="#78350f">${l.split('\n')[0]}</text>
${l.includes('\n')?`<text x="${x}" y="256" text-anchor="middle" font-size="11" fill="#78350f">${l.split('\n')[1]}</text>`:''}`).join('')}
<text x="400" y="110" text-anchor="middle" font-size="18" font-family="sans-serif" fill="#92400e" opacity=".4">📜 📖 🏺 🏯</text>
<rect x="80" y="290" width="640" height="60" rx="12" fill="#fef3c7" stroke="#92400e" stroke-width="2"/>
<text x="400" y="318" text-anchor="middle" font-size="14" fill="#78350f">Sources: Coins · Inscriptions · Manuscripts · Architecture</text>
<text x="400" y="338" text-anchor="middle" font-size="13" fill="#92400e">Maps · Chronicles · Archaeological finds</text>
<text x="400" y="395" text-anchor="middle" font-size="22" font-family="sans-serif" font-weight="800" fill="#78350f">Tracing Changes Through 1000 Years</text>`
  },
  'delhi-sultans': {
    bg: ['#fffbeb','#fde68a'], accent: '#b45309',
    svg: `<polygon points="400,80 480,160 480,310 320,310 320,160" fill="#fef3c7" stroke="#b45309" stroke-width="3"/>
<rect x="345" y="225" width="55" height="85" rx="4" fill="#d97706" opacity=".8"/>
<polygon points="340,160 400,100 460,160" fill="#92400e"/>
<circle cx="400" cy="160" r="12" fill="#fbbf24"/>
${[[130,220,'Slave\nDynasty\n1206'],[270,220,'Khilji\nDynasty\n1290'],[540,220,'Tughlaq\nDynasty\n1320'],[670,220,'Lodi\nDynasty\n1451']].map(([x,y,t])=>`<rect x="${x-65}" y="${y-30}" width="130" height="80" rx="10" fill="#fef9c3" stroke="#b45309" stroke-width="2"/>
${t.split('\n').map((l,i)=>`<text x="${x}" y="${y-8+i*20}" text-anchor="middle" font-size="12" font-family="sans-serif" font-weight="${i===0?'700':'400'}" fill="${i===0?'#78350f':'#92400e'}">${l}</text>`).join('')}`).join('')}
<text x="400" y="390" text-anchor="middle" font-size="26" font-family="sans-serif" font-weight="800" fill="#78350f">The Delhi Sultans</text>`
  },
  'mughal-empire': {
    bg: ['#fdf4ff','#e9d5ff'], accent: '#7c3aed',
    svg: `<path d="M400,80 Q480,60 500,100 Q510,140 480,160 Q460,170 400,180 Q340,170 320,160 Q290,140 300,100 Q320,60 400,80 Z" fill="#fbbf24" stroke="#ca8a04" stroke-width="2.5"/>
<circle cx="400" cy="130" r="18" fill="#ca8a04"/>
${[['Babur\n1526','#b45309',120,220],['Humayun\n1530','#92400e',240,260],['Akbar\n1556','#7c3aed',400,200],["Jahangir\n1605",'#1d4ed8',560,260],['Shah Jahan\n1628','#059669',680,220]].map(([n,c,x,y])=>`<circle cx="${x}" cy="${y}" r="42" fill="white" stroke="${c}" stroke-width="2.5"/>
${n.split('\n').map((l,i)=>`<text x="${x}" y="${y-5+i*18}" text-anchor="middle" font-size="${i===0?13:11}" font-family="sans-serif" font-weight="${i===0?'700':'400'}" fill="${c}">${l}</text>`).join('')}`).join('')}
<text x="400" y="345" text-anchor="middle" font-size="14" fill="#374151">Taj Mahal · Fatehpur Sikri · Mansabdari · Din-i-Ilahi</text>
<text x="400" y="395" text-anchor="middle" font-size="26" font-family="sans-serif" font-weight="800" fill="#3b0764">The Mughal Empire</text>`
  },
  'devotional-paths': {
    bg: ['#fdf4ff','#e9d5ff'], accent: '#7c3aed',
    svg: `<circle cx="400" cy="185" r="120" fill="#f3e8ff" stroke="#7c3aed" stroke-width="3"/>
<text x="400" y="155" text-anchor="middle" font-size="28">🙏</text>
<text x="400" y="195" text-anchor="middle" font-size="16" font-family="sans-serif" font-weight="700" fill="#5b21b6">Bhakti &amp; Sufi</text>
<text x="400" y="218" text-anchor="middle" font-size="14" font-family="sans-serif" fill="#6d28d9">Love &amp; devotion to God</text>
${[['Kabir','#ca8a04',120,355],['Mirabai','#ec4899',240,355],['Tukaram','#7c3aed',360,355],['Ramanuja','#2563eb',480,355],['Rumi','#059669',620,355]].map(([n,c,x,y])=>`<rect x="${x-55}" y="${y-30}" width="110" height="55" rx="10" fill="white" stroke="${c}" stroke-width="2"/>
<text x="${x}" y="${y+5}" text-anchor="middle" font-size="13" font-family="sans-serif" font-weight="700" fill="${c}">${n}</text>`).join('')}
<text x="400" y="100" text-anchor="middle" font-size="14" fill="#6d28d9">Nirgun (formless) · Sagun (with form)</text>
<text x="400" y="415" text-anchor="middle" font-size="22" font-family="sans-serif" font-weight="800" fill="#3b0764">Devotional Paths to the Divine</text>`
  },
  'rulers-buildings-7': {
    bg: ['#fffbeb','#fde68a'], accent: '#b45309',
    svg: `<rect x="100" y="230" width="180" height="150" rx="6" fill="#fef3c7" stroke="#b45309" stroke-width="3"/>
<polygon points="100,230 190,100 280,230" fill="#d97706" opacity=".8"/>
<rect x="170" y="310" width="40" height="70" rx="4" fill="#92400e"/>
<rect x="360" y="200" width="80" height="180" rx="8" fill="#fef3c7" stroke="#b45309" stroke-width="3"/>
<ellipse cx="400" cy="198" rx="40" ry="50" fill="#d97706" opacity=".8"/>
<line x1="400" y1="148" x2="400" y2="110" stroke="#b45309" stroke-width="3"/>
<circle cx="400" cy="105" r="8" fill="#fbbf24"/>
<rect x="520" y="160" width="160" height="220" rx="6" fill="#fef3c7" stroke="#b45309" stroke-width="3"/>
<polygon points="520,160 600,90 680,160" fill="#92400e" opacity=".8"/>
<rect x="570" y="290" width="60" height="90" rx="4" fill="#d97706" opacity=".8"/>
<text x="400" y="80" text-anchor="middle" font-size="16" font-family="sans-serif" font-weight="700" fill="#78350f">Temples · Mosques · Forts · Palaces</text>
<text x="400" y="405" text-anchor="middle" font-size="24" font-family="sans-serif" font-weight="800" fill="#78350f">Rulers and Buildings</text>`
  },
  'towns-traders-7': {
    bg: ['#ecfdf5','#a7f3d0'], accent: '#059669',
    svg: `<rect x="80" y="240" width="640" height="100" rx="14" fill="#d1fae5" stroke="#059669" stroke-width="2.5"/>
<text x="250" y="280" text-anchor="middle" font-size="22">🏪 🏦 🕌</text>
<text x="550" y="280" text-anchor="middle" font-size="22">⚓ 🚢 🛶</text>
<text x="250" y="310" text-anchor="middle" font-size="14" font-weight="700" fill="#065f46">Market Towns</text>
<text x="550" y="310" text-anchor="middle" font-size="14" font-weight="700" fill="#065f46">Port Towns</text>
<text x="400" y="250" text-anchor="middle" font-size="26">↔</text>
<text x="400" y="195" text-anchor="middle" font-size="14" fill="#047857">Silk Route · Spice Trade · Cotton · Indigo</text>
<rect x="80" y="100" width="640" height="80" rx="14" fill="#a7f3d0" stroke="#059669" stroke-width="2"/>
<text x="400" y="135" text-anchor="middle" font-size="16" font-weight="700" fill="#064e3b">Surat · Masulipatnam · Hampi · Tanjore</text>
<text x="400" y="158" text-anchor="middle" font-size="14" fill="#065f46">Crafts: Weaving · Pottery · Metalwork · Gems</text>
<text x="400" y="395" text-anchor="middle" font-size="22" font-family="sans-serif" font-weight="800" fill="#064e3b">Towns, Traders &amp; Craftspersons</text>`
  },

  // ── GEOGRAPHY ───────────────────────────────────────────────────
  'environment': {
    bg: ['#f0fdf4','#bbf7d0'], accent: '#16a34a',
    svg: `<circle cx="400" cy="200" r="135" fill="#d1fae5" stroke="#16a34a" stroke-width="3"/>
<circle cx="400" cy="200" r="80" fill="#86efac" stroke="#15803d" stroke-width="2"/>
<text x="400" y="155" text-anchor="middle" font-size="38">🌍</text>
<text x="400" y="200" text-anchor="middle" font-size="15" font-family="sans-serif" font-weight="700" fill="#14532d">BIOSPHERE</text>
<text x="400" y="220" text-anchor="middle" font-size="13" fill="#15803d">All living things</text>
<text x="225" y="200" text-anchor="middle" font-size="13" fill="#0369a1">💧\nHydro-\nsphere"/>
<text x="575" y="200" text-anchor="middle" font-size="13" fill="#6b7280">🌬️\nAtmo-\nsphere"/>
<text x="400" y="310" text-anchor="middle" font-size="13" fill="#92400e">🪨 Lithosphere</text>
<text x="400" y="358" text-anchor="middle" font-size="15" fill="#374151">Natural + Human environments interact</text>
<text x="400" y="395" text-anchor="middle" font-size="26" font-family="sans-serif" font-weight="800" fill="#14532d">Our Environment</text>`
  },
  'inside-our-earth': {
    bg: ['#fff7ed','#fed7aa'], accent: '#ea580c',
    svg: `<circle cx="400" cy="210" r="150" fill="#fef3c7" stroke="#b45309" stroke-width="3"/>
<circle cx="400" cy="210" r="105" fill="#fde68a" stroke="#d97706" stroke-width="2.5"/>
<circle cx="400" cy="210" r="60" fill="#f97316" stroke="#ea580c" stroke-width="2.5"/>
<circle cx="400" cy="210" r="28" fill="#dc2626"/>
<text x="400" y="100" text-anchor="middle" font-size="13" font-family="sans-serif" font-weight="700" fill="#92400e">Crust (30–70 km)</text>
<text x="400" y="160" text-anchor="middle" font-size="13" fill="#b45309">Mantle (~2900 km)</text>
<text x="400" y="205" text-anchor="middle" font-size="13" fill="#ea580c">Outer Core</text>
<text x="400" y="225" text-anchor="middle" font-size="12" fill="#fff">Inner</text>
<text x="180" y="245" text-anchor="middle" font-size="12" fill="#78350f">Silica\n+ Alumina</text>
<line x1="265" y1="160" x2="220" y2="200" stroke="#92400e" stroke-width="1.5"/>
<text x="680" y="225" text-anchor="middle" font-size="12" fill="#78350f">Rocks:\nIgneous\nSedimentary\nMetamorphic</text>
<text x="400" y="400" text-anchor="middle" font-size="26" font-family="sans-serif" font-weight="800" fill="#78350f">Inside Our Earth</text>`
  },
  'our-changing-earth': {
    bg: ['#eff6ff','#bfdbfe'], accent: '#1d4ed8',
    svg: `<polygon points="400,80 580,300 220,300" fill="#d1fae5" stroke="#16a34a" stroke-width="3"/>
<polygon points="200,80 320,300 80,300" fill="#a7f3d0" stroke="#059669" stroke-width="2.5"/>
<polygon points="600,80 720,300 480,300" fill="#bbf7d0" stroke="#16a34a" stroke-width="2.5" opacity=".8"/>
<text x="400" y="355" text-anchor="middle" font-size="14" font-weight="700" fill="#15803d">🏔️ Mountain building (fold)</text>
<rect x="80" y="380" width="640" height="50" rx="12" fill="#dbeafe" stroke="#2563eb" stroke-width="2"/>
<text x="400" y="400" text-anchor="middle" font-size="13" fill="#1d4ed8">Endogenic: Earthquake 🌋 Volcano · Fold · Fault</text>
<text x="400" y="420" text-anchor="middle" font-size="13" fill="#1d4ed8">Exogenic: Erosion · Weathering · Deposition</text>
<text x="400" y="65" text-anchor="middle" font-size="18" font-family="sans-serif" font-weight="700" fill="#1d4ed8">Lithospheric Plates move → Changes</text>
<text x="400" y="445" text-anchor="middle" font-size="22" font-family="sans-serif" font-weight="800" fill="#1e3a8a">Our Changing Earth</text>`
  },
  'water-7': {
    bg: ['#eff6ff','#bfdbfe'], accent: '#0891b2',
    svg: `<ellipse cx="400" cy="270" rx="280" ry="70" fill="#bae6fd" opacity=".6"/>
<path d="M180,270 Q280,160 400,150 Q520,160 620,270" fill="#7dd3fc" opacity=".5"/>
<path d="M200,270 Q300,200 400,190 Q500,200 600,270 Z" fill="#38bdf8" opacity=".4"/>
<text x="250" y="150" font-size="18">☁️</text>
<text x="450" y="130" font-size="18">☁️</text>
<path d="M280,155 L280,210 M310,148 L310,205 M340,142 L340,200" stroke="#0369a1" stroke-width="2.5"/>
<text x="308" y="115" font-size="14" fill="#0369a1" font-weight="700">Precipitation</text>
<text x="600" y="220" font-size="13" fill="#0369a1" font-weight="700">Evaporation ↑</text>
<rect x="80" y="340" width="640" height="55" rx="12" fill="#e0f2fe" stroke="#0891b2" stroke-width="2"/>
<text x="400" y="363" text-anchor="middle" font-size="14" fill="#0369a1">Freshwater: Rivers · Lakes · Groundwater · Ice caps</text>
<text x="400" y="382" text-anchor="middle" font-size="13" fill="#0891b2">Ocean currents · Tides · Conservation of water</text>
<text x="400" y="415" text-anchor="middle" font-size="26" font-family="sans-serif" font-weight="800" fill="#0c4a6e">Water</text>`
  },
  'natural-vegetation-wildlife': {
    bg: ['#f0fdf4','#bbf7d0'], accent: '#15803d',
    svg: `${[['Tropical\nRainforest','Dense canopy\nhot & wet','#15803d',140,175],['Deciduous\nForest','Seasonal\nsheds leaves','#16a34a',350,175],['Grassland\n& Savanna','Tropical\ngrassland','#ca8a04',560,175],['Coniferous\nForest','Cold climate\nneedle leaves','#0369a1',740,175]].map(([t,d,c,x,y])=>`<circle cx="${x}" cy="${y}" r="88" fill="white" stroke="${c}" stroke-width="2.5"/>
${t.split('\n').map((l,i)=>`<text x="${x}" y="${y-18+i*20}" text-anchor="middle" font-size="13" font-family="sans-serif" font-weight="${i===0?'700':'400'}" fill="${c}">${l}</text>`).join('')}
${d.split('\n').map((l,i)=>`<text x="${x}" y="${y+22+i*17}" text-anchor="middle" font-size="11" fill="#374151">${l}</text>`).join('')}`).join('')}
<text x="400" y="320" text-anchor="middle" font-size="14" fill="#374151">🦁 🐘 🦜 🐯 — Wildlife adapts to vegetation type</text>
<text x="400" y="395" text-anchor="middle" font-size="22" font-family="sans-serif" font-weight="800" fill="#14532d">Natural Vegetation &amp; Wildlife</text>`
  },
  'air-7': {
    bg: ['#eff6ff','#bfdbfe'], accent: '#0891b2',
    svg: `<rect x="80" y="80" width="640" height="55" rx="14" fill="#f0f9ff" stroke="#0891b2" stroke-width="2.5"/>
<text x="400" y="110" text-anchor="middle" font-size="15" font-weight="700" fill="#0369a1">Atmosphere — Layers</text>
<text x="400" y="130" text-anchor="middle" font-size="13" fill="#0891b2">Troposphere · Stratosphere · Mesosphere · Thermosphere · Exosphere</text>
${[['N₂','78%','#1d4ed8',155,235],['O₂','21%','#16a34a',320,235],['Ar','0.9%','#7c3aed',480,235],['CO₂','0.04%','#dc2626',645,235]].map(([g,p,c,x,y])=>`<circle cx="${x}" cy="${y}" r="70" fill="${c}" opacity=".15" stroke="${c}" stroke-width="2.5"/>
<text x="${x}" y="${y-8}" text-anchor="middle" font-size="22" font-family="monospace" font-weight="800" fill="${c}">${g}</text>
<text x="${x}" y="${y+18}" text-anchor="middle" font-size="16" font-family="sans-serif" font-weight="700" fill="${c}">${p}</text>`).join('')}
<rect x="80" y="340" width="640" height="55" rx="12" fill="#e0f2fe" stroke="#0891b2" stroke-width="2"/>
<text x="400" y="363" text-anchor="middle" font-size="14" fill="#0369a1">Wind: High pressure → Low pressure · Sea breeze · Land breeze</text>
<text x="400" y="382" text-anchor="middle" font-size="13" fill="#0891b2">Humidity · Rain gauge · Barometer · Weather vane</text>
<text x="400" y="415" text-anchor="middle" font-size="26" font-family="sans-serif" font-weight="800" fill="#0c4a6e">Air</text>`
  },
  'life-in-deserts-7': {
    bg: ['#fffbeb','#fde68a'], accent: '#b45309',
    svg: `<polygon points="80,310 400,80 720,310" fill="#fde68a" stroke="#b45309" stroke-width="2" opacity=".5"/>
<circle cx="640" cy="120" r="50" fill="#fbbf24" opacity=".8"/>
<text x="400" y="205" text-anchor="middle" font-size="48">🐪</text>
<text x="200" y="250" text-anchor="middle" font-size="28">🌵</text>
<text x="600" y="250" text-anchor="middle" font-size="28">🌵</text>
<rect x="80" y="330" width="640" height="80" rx="14" fill="#fef9c3" stroke="#ca8a04" stroke-width="2"/>
<text x="400" y="355" text-anchor="middle" font-size="14" font-weight="700" fill="#78350f">Hot Deserts: Sahara · Thar (India)</text>
<text x="400" y="375" text-anchor="middle" font-size="13" fill="#92400e">Cold Deserts: Ladakh (India) · Gobi · Antarctica</text>
<text x="400" y="393" text-anchor="middle" font-size="13" fill="#92400e">Adaptations: Thick skin · Nocturnal · Water storage</text>
<text x="400" y="420" text-anchor="middle" font-size="24" font-family="sans-serif" font-weight="800" fill="#78350f">Life in the Deserts</text>`
  },

  // ── CIVICS ──────────────────────────────────────────────────────
  'equality-7': {
    bg: ['#f0fdf4','#bbf7d0'], accent: '#16a34a',
    svg: `<rect x="280" y="270" width="240" height="20" rx="8" fill="#374151"/>
<circle cx="400" cy="265" r="14" fill="#374151"/>
<rect x="100" y="150" width="240" height="110" rx="14" fill="#d1fae5" stroke="#16a34a" stroke-width="3"/>
<rect x="460" y="150" width="240" height="110" rx="14" fill="#d1fae5" stroke="#16a34a" stroke-width="3"/>
<text x="220" y="195" text-anchor="middle" font-size="38">👨‍🌾</text>
<text x="220" y="240" text-anchor="middle" font-size="14" font-weight="700" fill="#14532d">All citizens equal</text>
<text x="580" y="195" text-anchor="middle" font-size="38">👩‍⚖️</text>
<text x="580" y="240" text-anchor="middle" font-size="14" font-weight="700" fill="#14532d">before the law</text>
<rect x="80" y="320" width="640" height="60" rx="12" fill="#a7f3d0" stroke="#059669" stroke-width="2"/>
<text x="400" y="347" text-anchor="middle" font-size="14" font-weight="700" fill="#065f46">Article 14 — Right to Equality</text>
<text x="400" y="367" text-anchor="middle" font-size="13" fill="#15803d">No discrimination: caste · religion · gender · birth</text>
<text x="400" y="400" text-anchor="middle" font-size="26" font-family="sans-serif" font-weight="800" fill="#14532d">On Equality</text>`
  },
  'womens-roles': {
    bg: ['#fdf4ff','#e9d5ff'], accent: '#a855f7',
    svg: `${[['👩‍🔬','Scientist',140,180],['👩‍⚕️','Doctor',280,180],['👩‍🏫','Teacher',420,180],['👩‍💼','Leader',560,180],['👩‍🚀','Astronaut',700,180]].map(([e,r,x,y])=>`<circle cx="${x}" cy="${y}" r="60" fill="#f3e8ff" stroke="#a855f7" stroke-width="2.5"/>
<text x="${x}" y="${y+12}" text-anchor="middle" font-size="40">${e}</text>
<text x="${x}" y="${y+55}" text-anchor="middle" font-size="12" font-family="sans-serif" font-weight="700" fill="#7e22ce">${r}</text>`).join('')}
<rect x="80" y="290" width="640" height="70" rx="14" fill="#fce7f3" stroke="#ec4899" stroke-width="2.5"/>
<text x="400" y="318" text-anchor="middle" font-size="15" font-weight="700" fill="#831843">Women Change the World</text>
<text x="400" y="340" text-anchor="middle" font-size="13" fill="#9d174d">Education · Work · Equal pay · Breaking stereotypes</text>
<text x="400" y="358" text-anchor="middle" font-size="13" fill="#be123c">Savitribai Phule · Sarojini Naidu · Indira Gandhi</text>
<text x="400" y="400" text-anchor="middle" font-size="24" font-family="sans-serif" font-weight="800" fill="#581c87">Women Change the World</text>`
  },
  'state-government-7': {
    bg: ['#eff6ff','#bfdbfe'], accent: '#1d4ed8',
    svg: `<polygon points="400,80 680,260 120,260" fill="#dbeafe" stroke="#1d4ed8" stroke-width="3"/>
<text x="400" y="185" text-anchor="middle" font-size="15" font-weight="700" fill="#1d4ed8">State Government</text>
<rect x="120" y="295" width="180" height="80" rx="12" fill="#bfdbfe" stroke="#2563eb" stroke-width="2.5"/>
<text x="210" y="330" text-anchor="middle" font-size="14" font-weight="700" fill="#1e3a8a">Legislature</text>
<text x="210" y="352" text-anchor="middle" font-size="12" fill="#1d4ed8">State Assembly\n(Vidhan Sabha)</text>
<rect x="310" y="295" width="180" height="80" rx="12" fill="#bfdbfe" stroke="#2563eb" stroke-width="2.5"/>
<text x="400" y="330" text-anchor="middle" font-size="14" font-weight="700" fill="#1e3a8a">Executive</text>
<text x="400" y="352" text-anchor="middle" font-size="12" fill="#1d4ed8">Governor\nChief Minister</text>
<rect x="500" y="295" width="180" height="80" rx="12" fill="#bfdbfe" stroke="#2563eb" stroke-width="2.5"/>
<text x="590" y="330" text-anchor="middle" font-size="14" font-weight="700" fill="#1e3a8a">Judiciary</text>
<text x="590" y="352" text-anchor="middle" font-size="12" fill="#1d4ed8">High Court</text>
<text x="400" y="415" text-anchor="middle" font-size="22" font-family="sans-serif" font-weight="800" fill="#1e3a8a">State Government</text>`
  },
  'markets-around-us-7': {
    bg: ['#ecfdf5','#a7f3d0'], accent: '#059669',
    svg: `${[['🏪\nLocal Shop',120,175,'#16a34a'],['🏬\nMall',300,175,'#059669'],['🌐\nOnline',480,175,'#0891b2'],['🛒\nWholesale',660,175,'#ca8a04']].map(([e,x,y,c])=>`<rect x="${x-90}" y="${y-75}" width="175" height="145" rx="14" fill="white" stroke="${c}" stroke-width="2.5"/>
${e.split('\n').map((l,i)=>`<text x="${x}" y="${y-35+i*35}" text-anchor="middle" font-size="${i===0?40:14}" font-family="sans-serif" font-weight="${i===1?'700':'400'}" fill="${c}">${l}</text>`).join('')}`).join('')}
<rect x="80" y="295" width="640" height="80" rx="14" fill="#d1fae5" stroke="#059669" stroke-width="2"/>
<text x="400" y="325" text-anchor="middle" font-size="14" font-weight="700" fill="#065f46">Chain: Producer → Wholesaler → Retailer → Consumer</text>
<text x="400" y="348" text-anchor="middle" font-size="13" fill="#047857">Weekly market · Shopping complex · Chain of markets</text>
<text x="400" y="368" text-anchor="middle" font-size="13" fill="#059669">Equality in the market? Fair trade · Consumer rights</text>
<text x="400" y="415" text-anchor="middle" font-size="24" font-family="sans-serif" font-weight="800" fill="#064e3b">Markets Around Us</text>`
  },
};

function makeSvg({ bg, svg }) {
  return `<svg xmlns="http://www.w3.org/2000/svg" width="800" height="420" viewBox="0 0 800 420">
  <defs>
    <linearGradient id="bg" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:${bg[0]}"/>
      <stop offset="100%" style="stop-color:${bg[1]}"/>
    </linearGradient>
  </defs>
  <rect width="800" height="420" fill="url(#bg)"/>
  ${svg}
</svg>`;
}

let count = 0;
for (const [id, data] of Object.entries(topics)) {
  fs.writeFileSync(path.join(OUT, `${id}.svg`), makeSvg(data));
  count++;
}
console.log(`Generated ${count} SVGs in ${OUT}`);

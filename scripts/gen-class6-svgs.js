const fs = require('fs');
const path = require('path');

const OUT = path.join(__dirname, '../public/img/topics/class-6');

const topics = {
  // ── MATHEMATICS ──────────────────────────────────────────────────
  'knowing-numbers': {
    bg: ['#eef2ff','#c7d2fe'], accent: '#4338ca',
    svg: `<text x="400" y="160" text-anchor="middle" font-size="110" font-family="serif" fill="#4338ca" opacity=".15">123</text>
<rect x="80" y="220" width="70" height="90" rx="12" fill="#4338ca" opacity=".85"/>
<rect x="175" y="190" width="70" height="120" rx="12" fill="#6366f1" opacity=".85"/>
<rect x="270" y="160" width="70" height="150" rx="12" fill="#818cf8" opacity=".85"/>
<rect x="365" y="130" width="70" height="180" rx="12" fill="#4338ca" opacity=".85"/>
<rect x="460" y="100" width="70" height="210" rx="12" fill="#6366f1" opacity=".85"/>
<rect x="555" y="70" width="70" height="240" rx="12" fill="#818cf8" opacity=".85"/>
<rect x="650" y="50" width="70" height="260" rx="12" fill="#4338ca" opacity=".85"/>
<text x="400" y="360" text-anchor="middle" font-size="28" font-family="sans-serif" font-weight="800" fill="#1e1b4b">Knowing Our Numbers</text>`
  },
  'whole-numbers': {
    bg: ['#f0fdf4','#bbf7d0'], accent: '#16a34a',
    svg: `<line x1="60" y1="220" x2="740" y2="220" stroke="#16a34a" stroke-width="4"/>
<polygon points="740,210 760,220 740,230" fill="#16a34a"/>
${[0,1,2,3,4,5,6,7,8,9,10].map((n,i)=>`<line x1="${120+i*62}" y1="210" x2="${120+i*62}" y2="230" stroke="#16a34a" stroke-width="3"/>
<text x="${120+i*62}" y="255" text-anchor="middle" font-size="20" font-family="sans-serif" font-weight="700" fill="#15803d">${n}</text>
<circle cx="${120+i*62}" cy="220" r="8" fill="${i===0?'#16a34a':'#4ade80'}"/>`).join('')}
<text x="400" y="150" text-anchor="middle" font-size="36" font-family="sans-serif" font-weight="800" fill="#15803d">0, 1, 2, 3, 4 … ∞</text>
<text x="400" y="360" text-anchor="middle" font-size="28" font-family="sans-serif" font-weight="800" fill="#14532d">Whole Numbers</text>`
  },
  'playing-with-numbers': {
    bg: ['#fff7ed','#fed7aa'], accent: '#ea580c',
    svg: `<circle cx="200" cy="195" r="90" fill="#ea580c" opacity=".12" stroke="#ea580c" stroke-width="3"/>
<circle cx="400" cy="195" r="90" fill="#f97316" opacity=".12" stroke="#f97316" stroke-width="3"/>
<circle cx="600" cy="195" r="90" fill="#fb923c" opacity=".12" stroke="#fb923c" stroke-width="3"/>
<text x="200" y="185" text-anchor="middle" font-size="22" font-family="sans-serif" font-weight="700" fill="#c2410c">Factors</text>
<text x="200" y="215" text-anchor="middle" font-size="18" font-family="sans-serif" fill="#c2410c">2×3=6</text>
<text x="400" y="185" text-anchor="middle" font-size="22" font-family="sans-serif" font-weight="700" fill="#9a3412">Multiples</text>
<text x="400" y="215" text-anchor="middle" font-size="18" font-family="sans-serif" fill="#9a3412">3,6,9,12…</text>
<text x="600" y="185" text-anchor="middle" font-size="22" font-family="sans-serif" font-weight="700" fill="#c2410c">Primes</text>
<text x="600" y="215" text-anchor="middle" font-size="18" font-family="sans-serif" fill="#c2410c">2,3,5,7,11</text>
<text x="400" y="360" text-anchor="middle" font-size="28" font-family="sans-serif" font-weight="800" fill="#7c2d12">Playing with Numbers</text>`
  },
  'geometry-basics': {
    bg: ['#eff6ff','#bfdbfe'], accent: '#2563eb',
    svg: `<polygon points="200,100 280,260 120,260" fill="none" stroke="#2563eb" stroke-width="4"/>
<rect x="330" y="110" width="140" height="140" fill="none" stroke="#7c3aed" stroke-width="4"/>
<circle cx="600" cy="185" r="80" fill="none" stroke="#0891b2" stroke-width="4"/>
<text x="200" y="300" text-anchor="middle" font-size="18" font-family="sans-serif" font-weight="700" fill="#1d4ed8">Triangle</text>
<text x="400" y="300" text-anchor="middle" font-size="18" font-family="sans-serif" font-weight="700" fill="#5b21b6">Square</text>
<text x="600" y="300" text-anchor="middle" font-size="18" font-family="sans-serif" font-weight="700" fill="#0369a1">Circle</text>
<line x1="60" y1="185" x2="100" y2="185" stroke="#2563eb" stroke-width="2" stroke-dasharray="6,4"/>
<line x1="700" y1="185" x2="740" y2="185" stroke="#2563eb" stroke-width="2" stroke-dasharray="6,4"/>
<text x="400" y="370" text-anchor="middle" font-size="28" font-family="sans-serif" font-weight="800" fill="#1e3a8a">Basic Geometrical Ideas</text>`
  },
  'elementary-shapes': {
    bg: ['#fdf4ff','#e9d5ff'], accent: '#7c3aed',
    svg: `<rect x="80" y="120" width="120" height="120" rx="8" fill="#7c3aed" opacity=".2" stroke="#7c3aed" stroke-width="3"/>
<polygon points="290,120 360,240 220,240" fill="#6d28d9" opacity=".2" stroke="#6d28d9" stroke-width="3"/>
<ellipse cx="470" cy="185" rx="70" ry="50" fill="#8b5cf6" opacity=".2" stroke="#8b5cf6" stroke-width="3"/>
<rect x="570" y="130" width="80" height="110" rx="4" fill="#7c3aed" opacity=".2" stroke="#7c3aed" stroke-width="3"/>
<polygon points="610,80 660,130 560,130" fill="#6d28d9" opacity=".3" stroke="#6d28d9" stroke-width="2"/>
<text x="140" y="280" text-anchor="middle" font-size="16" font-family="sans-serif" font-weight="700" fill="#5b21b6">Cube</text>
<text x="290" y="280" text-anchor="middle" font-size="16" font-family="sans-serif" font-weight="700" fill="#5b21b6">Cone</text>
<text x="470" y="270" text-anchor="middle" font-size="16" font-family="sans-serif" font-weight="700" fill="#5b21b6">Cylinder</text>
<text x="610" y="280" text-anchor="middle" font-size="16" font-family="sans-serif" font-weight="700" fill="#5b21b6">Cuboid</text>
<text x="400" y="370" text-anchor="middle" font-size="26" font-family="sans-serif" font-weight="800" fill="#3b0764">Understanding Elementary Shapes</text>`
  },
  'integers': {
    bg: ['#fef2f2','#fecaca'], accent: '#dc2626',
    svg: `<line x1="60" y1="200" x2="740" y2="200" stroke="#374151" stroke-width="3"/>
<polygon points="740,192 760,200 740,208" fill="#374151"/>
<polygon points="60,192 40,200 60,208" fill="#374151"/>
${[-5,-4,-3,-2,-1,0,1,2,3,4,5].map((n,i)=>{
  const x=120+i*56;
  const isNeg=n<0, isZero=n===0;
  const fill=isNeg?'#dc2626':isZero?'#374151':'#16a34a';
  return `<line x1="${x}" y1="192" x2="${x}" y2="208" stroke="${fill}" stroke-width="2.5"/>
<text x="${x}" y="230" text-anchor="middle" font-size="18" font-family="sans-serif" font-weight="700" fill="${fill}">${n}</text>`;
}).join('')}
<text x="280" y="170" text-anchor="middle" font-size="18" font-family="sans-serif" font-weight="700" fill="#dc2626">Negative</text>
<text x="400" y="155" text-anchor="middle" font-size="18" font-family="sans-serif" font-weight="700" fill="#374151">Zero</text>
<text x="520" y="170" text-anchor="middle" font-size="18" font-family="sans-serif" font-weight="700" fill="#16a34a">Positive</text>
<text x="400" y="370" text-anchor="middle" font-size="28" font-family="sans-serif" font-weight="800" fill="#7f1d1d">Integers</text>`
  },
  'fractions': {
    bg: ['#fff7ed','#fed7aa'], accent: '#ea580c',
    svg: `<circle cx="180" cy="190" r="100" fill="#fde68a" stroke="#ea580c" stroke-width="3"/>
<path d="M180,190 L180,90 A100,100 0 0,1 268,240 Z" fill="#ea580c" opacity=".7"/>
<text x="180" y="325" text-anchor="middle" font-size="20" font-family="sans-serif" font-weight="700" fill="#c2410c">1/4</text>
<circle cx="400" cy="190" r="100" fill="#fde68a" stroke="#ea580c" stroke-width="3"/>
<path d="M400,190 L400,90 A100,100 0 0,1 487,240 Z" fill="#ea580c" opacity=".7"/>
<path d="M400,190 L487,240 A100,100 0 0,1 313,240 Z" fill="#ea580c" opacity=".7"/>
<text x="400" y="325" text-anchor="middle" font-size="20" font-family="sans-serif" font-weight="700" fill="#c2410c">3/4? No — 2/4 = 1/2</text>
<circle cx="620" cy="190" r="100" fill="#fde68a" stroke="#ea580c" stroke-width="3"/>
<line x1="620" y1="90" x2="620" y2="290" stroke="#ea580c" stroke-width="3"/>
<path d="M620,190 L620,90 A100,100 0 0,1 720,190 Z" fill="#ea580c" opacity=".7"/>
<text x="620" y="325" text-anchor="middle" font-size="20" font-family="sans-serif" font-weight="700" fill="#c2410c">1/2</text>
<text x="400" y="380" text-anchor="middle" font-size="26" font-family="sans-serif" font-weight="800" fill="#7c2d12">Fractions</text>`
  },
  'decimals': {
    bg: ['#ecfdf5','#a7f3d0'], accent: '#059669',
    svg: `<text x="400" y="130" text-anchor="middle" font-size="90" font-family="monospace" font-weight="900" fill="#059669" opacity=".15">3.14</text>
<rect x="100" y="155" width="600" height="100" rx="16" fill="#d1fae5" stroke="#059669" stroke-width="2"/>
<text x="190" y="215" text-anchor="middle" font-size="48" font-family="monospace" font-weight="900" fill="#065f46">3</text>
<text x="310" y="215" text-anchor="middle" font-size="48" font-family="monospace" font-weight="900" fill="#374151">.</text>
<text x="430" y="215" text-anchor="middle" font-size="48" font-family="monospace" font-weight="900" fill="#059669">7</text>
<text x="550" y="215" text-anchor="middle" font-size="48" font-family="monospace" font-weight="900" fill="#34d399">5</text>
<text x="190" y="275" text-anchor="middle" font-size="14" font-family="sans-serif" fill="#065f46">ones</text>
<text x="430" y="275" text-anchor="middle" font-size="14" font-family="sans-serif" fill="#059669">tenths</text>
<text x="550" y="275" text-anchor="middle" font-size="14" font-family="sans-serif" fill="#34d399">hundredths</text>
<text x="400" y="370" text-anchor="middle" font-size="28" font-family="sans-serif" font-weight="800" fill="#064e3b">Decimals</text>`
  },
  'data-handling': {
    bg: ['#eff6ff','#bfdbfe'], accent: '#2563eb',
    svg: `${[['Mon',60,'#2563eb'],['Tue',85,'#7c3aed'],['Wed',45,'#0891b2'],['Thu',100,'#2563eb'],['Fri',70,'#7c3aed'],['Sat',55,'#0891b2']].map(([d,h,c],i)=>`
<rect x="${90+i*105}" y="${280-h}" width="70" height="${h}" rx="8" fill="${c}" opacity=".85"/>
<text x="${125+i*105}" y="310" text-anchor="middle" font-size="14" font-family="sans-serif" font-weight="600" fill="#374151">${d}</text>`).join('')}
<line x1="70" y1="100" x2="70" y2="290" stroke="#374151" stroke-width="2"/>
<line x1="70" y1="290" x2="720" y2="290" stroke="#374151" stroke-width="2"/>
<text x="400" y="80" text-anchor="middle" font-size="22" font-family="sans-serif" font-weight="700" fill="#1d4ed8">Students Present This Week</text>
<text x="400" y="380" text-anchor="middle" font-size="26" font-family="sans-serif" font-weight="800" fill="#1e3a8a">Data Handling</text>`
  },
  'mensuration': {
    bg: ['#fdf4ff','#e9d5ff'], accent: '#7c3aed',
    svg: `<rect x="150" y="130" width="260" height="160" rx="6" fill="#ede9fe" stroke="#7c3aed" stroke-width="3"/>
<line x1="150" y1="115" x2="410" y2="115" stroke="#7c3aed" stroke-width="2"/>
<text x="280" y="108" text-anchor="middle" font-size="16" font-family="sans-serif" font-weight="700" fill="#5b21b6">length = 13 cm</text>
<line x1="425" y1="130" x2="425" y2="290" stroke="#7c3aed" stroke-width="2"/>
<text x="460" y="215" text-anchor="middle" font-size="16" font-family="sans-serif" font-weight="700" fill="#5b21b6" transform="rotate(90,460,215)">width = 8 cm</text>
<text x="280" y="215" text-anchor="middle" font-size="22" font-family="sans-serif" font-weight="700" fill="#4c1d95">Area = l × b</text>
<text x="280" y="248" text-anchor="middle" font-size="20" font-family="sans-serif" fill="#5b21b6">= 13 × 8 = 104 cm²</text>
<text x="560" y="170" text-anchor="middle" font-size="18" font-family="sans-serif" font-weight="700" fill="#7c3aed">Perimeter</text>
<text x="560" y="198" text-anchor="middle" font-size="16" font-family="sans-serif" fill="#7c3aed">= 2(l+b)</text>
<text x="560" y="222" text-anchor="middle" font-size="16" font-family="sans-serif" fill="#7c3aed">= 42 cm</text>
<text x="380" y="370" text-anchor="middle" font-size="26" font-family="sans-serif" font-weight="800" fill="#3b0764">Mensuration</text>`
  },
  'algebra-basics': {
    bg: ['#fff1f2','#fecdd3'], accent: '#e11d48',
    svg: `<text x="400" y="100" text-anchor="middle" font-size="52" font-family="monospace" font-weight="900" fill="#e11d48" opacity=".2">x + y = ?</text>
<rect x="100" y="130" width="180" height="160" rx="16" fill="#ffe4e6" stroke="#e11d48" stroke-width="3"/>
<text x="190" y="220" text-anchor="middle" font-size="52" font-family="monospace" font-weight="900" fill="#e11d48">x</text>
<text x="190" y="275" text-anchor="middle" font-size="16" font-family="sans-serif" fill="#9f1239">variable</text>
<rect x="320" y="130" width="180" height="160" rx="16" fill="#ffe4e6" stroke="#e11d48" stroke-width="3"/>
<text x="410" y="220" text-anchor="middle" font-size="52" font-family="monospace" font-weight="900" fill="#be123c">2x+3</text>
<text x="410" y="275" text-anchor="middle" font-size="16" font-family="sans-serif" fill="#9f1239">expression</text>
<rect x="540" y="130" width="180" height="160" rx="16" fill="#ffe4e6" stroke="#e11d48" stroke-width="3"/>
<text x="630" y="210" text-anchor="middle" font-size="36" font-family="monospace" font-weight="900" fill="#9f1239">x+5=9</text>
<text x="630" y="248" text-anchor="middle" font-size="20" font-family="monospace" fill="#be123c">x = 4</text>
<text x="630" y="275" text-anchor="middle" font-size="16" font-family="sans-serif" fill="#9f1239">equation</text>
<text x="400" y="370" text-anchor="middle" font-size="28" font-family="sans-serif" font-weight="800" fill="#881337">Algebra</text>`
  },
  'ratio-proportion': {
    bg: ['#f0fdf4','#bbf7d0'], accent: '#16a34a',
    svg: `<rect x="80" y="290" width="220" height="20" rx="6" fill="#374151"/>
<circle cx="190" cy="285" r="12" fill="#374151"/>
<rect x="80" y="160" width="100" height="120" rx="10" fill="#16a34a" opacity=".8"/>
<rect x="200" y="130" width="100" height="150" rx="10" fill="#4ade80" opacity=".8"/>
<text x="130" y="150" text-anchor="middle" font-size="24" font-family="sans-serif" font-weight="700" fill="#fff">2</text>
<text x="250" y="120" text-anchor="middle" font-size="24" font-family="sans-serif" font-weight="700" fill="#065f46">3</text>
<text x="190" y="340" text-anchor="middle" font-size="18" font-family="sans-serif" font-weight="700" fill="#14532d">Ratio  2 : 3</text>
<rect x="420" y="140" width="120" height="140" rx="10" fill="#2563eb" opacity=".8"/>
<rect x="560" y="140" width="180" height="140" rx="10" fill="#60a5fa" opacity=".8"/>
<text x="480" y="220" text-anchor="middle" font-size="24" font-family="sans-serif" font-weight="700" fill="#fff">4</text>
<text x="650" y="220" text-anchor="middle" font-size="24" font-family="sans-serif" font-weight="700" fill="#1e3a8a">6</text>
<text x="555" y="320" text-anchor="middle" font-size="16" font-family="sans-serif" font-weight="700" fill="#1e3a8a">4:6 = 2:3 Proportion ✓</text>
<text x="400" y="390" text-anchor="middle" font-size="26" font-family="sans-serif" font-weight="800" fill="#14532d">Ratio and Proportion</text>`
  },
  'symmetry': {
    bg: ['#fdf4ff','#e9d5ff'], accent: '#9333ea',
    svg: `<line x1="400" y1="70" x2="400" y2="330" stroke="#9333ea" stroke-width="3" stroke-dasharray="10,6"/>
<text x="400" y="60" text-anchor="middle" font-size="14" font-family="sans-serif" fill="#7e22ce">Line of Symmetry</text>
<ellipse cx="280" cy="180" rx="55" ry="90" fill="#f3e8ff" stroke="#9333ea" stroke-width="3"/>
<ellipse cx="520" cy="180" rx="55" ry="90" fill="#f3e8ff" stroke="#9333ea" stroke-width="3"/>
<circle cx="280" cy="140" r="18" fill="#c084fc"/>
<circle cx="520" cy="140" r="18" fill="#c084fc"/>
<path d="M230,210 Q280,230 330,210" stroke="#9333ea" stroke-width="3" fill="none"/>
<path d="M470,210 Q520,230 570,210" stroke="#9333ea" stroke-width="3" fill="none"/>
<path d="M240,160 L260,175 L240,190" fill="none" stroke="#7c3aed" stroke-width="2.5"/>
<path d="M560,160 L540,175 L560,190" fill="none" stroke="#7c3aed" stroke-width="2.5"/>
<text x="400" y="370" text-anchor="middle" font-size="28" font-family="sans-serif" font-weight="800" fill="#581c87">Symmetry</text>`
  },
  'practical-geometry': {
    bg: ['#eff6ff','#bfdbfe'], accent: '#1d4ed8',
    svg: `<circle cx="320" cy="200" r="4" fill="#1d4ed8"/>
<line x1="320" y1="200" x2="480" y2="200" stroke="#374151" stroke-width="3"/>
<path d="M320,200 A160,160 0 0,1 475,130" fill="none" stroke="#1d4ed8" stroke-width="2.5" stroke-dasharray="6,4"/>
<circle cx="320" cy="200" r="160" fill="none" stroke="#bfdbfe" stroke-width="1.5" stroke-dasharray="4,6"/>
<line x1="200" y1="330" x2="440" y2="100" stroke="#7c3aed" stroke-width="3"/>
<line x1="200" y1="100" x2="440" y2="330" stroke="#7c3aed" stroke-width="3" opacity=".4"/>
<rect x="560" y="120" width="120" height="160" rx="6" fill="#dbeafe" stroke="#1d4ed8" stroke-width="3"/>
<line x1="560" y1="160" x2="680" y2="160" stroke="#1d4ed8" stroke-width="1.5"/>
<line x1="560" y1="200" x2="680" y2="200" stroke="#1d4ed8" stroke-width="1.5"/>
<line x1="560" y1="240" x2="680" y2="240" stroke="#1d4ed8" stroke-width="1.5"/>
<line x1="600" y1="120" x2="600" y2="280" stroke="#1d4ed8" stroke-width="1.5"/>
<text x="400" y="370" text-anchor="middle" font-size="26" font-family="sans-serif" font-weight="800" fill="#1e3a8a">Practical Geometry</text>`
  },

  // ── SCIENCE ──────────────────────────────────────────────────────
  'food-where-does-it-come-from': {
    bg: ['#f0fdf4','#bbf7d0'], accent: '#16a34a',
    svg: `<ellipse cx="200" cy="260" rx="80" ry="30" fill="#86efac"/>
<rect x="185" y="130" width="30" height="130" rx="6" fill="#4ade80"/>
<ellipse cx="200" cy="120" rx="55" ry="60" fill="#22c55e"/>
<circle cx="160" cy="140" r="30" fill="#16a34a"/>
<circle cx="240" cy="140" r="30" fill="#16a34a"/>
<text x="200" y="310" text-anchor="middle" font-size="14" font-family="sans-serif" font-weight="700" fill="#14532d">Plants</text>
<ellipse cx="600" cy="270" rx="80" ry="25" fill="#fde68a"/>
<ellipse cx="600" cy="200" rx="55" ry="70" fill="#f9a8d4" stroke="#ec4899" stroke-width="2"/>
<circle cx="570" cy="180" r="12" fill="#f472b6"/>
<circle cx="630" cy="180" r="12" fill="#f472b6"/>
<path d="M560,230 Q600,210 640,230" stroke="#ec4899" stroke-width="3" fill="none"/>
<text x="600" y="320" text-anchor="middle" font-size="14" font-family="sans-serif" font-weight="700" fill="#831843">Animals</text>
<text x="400" y="100" text-anchor="middle" font-size="40" font-family="sans-serif">🍎 🥛 🌾</text>
<text x="400" y="390" text-anchor="middle" font-size="22" font-family="sans-serif" font-weight="800" fill="#14532d">Food: Where Does It Come From?</text>`
  },
  'sorting-materials': {
    bg: ['#fff7ed','#fed7aa'], accent: '#f97316',
    svg: `<rect x="70" y="150" width="180" height="170" rx="16" fill="#fde68a" stroke="#f97316" stroke-width="3"/>
<text x="160" y="195" text-anchor="middle" font-size="16" font-family="sans-serif" font-weight="700" fill="#c2410c">Hard</text>
<text x="160" y="225" text-anchor="middle" font-size="28">🪨 🔩 🪵</text>
<rect x="310" y="150" width="180" height="170" rx="16" fill="#bfdbfe" stroke="#2563eb" stroke-width="3"/>
<text x="400" y="195" text-anchor="middle" font-size="16" font-family="sans-serif" font-weight="700" fill="#1d4ed8">Transparent</text>
<text x="400" y="225" text-anchor="middle" font-size="28">🪟 💧 🔬</text>
<rect x="550" y="150" width="180" height="170" rx="16" fill="#d1fae5" stroke="#16a34a" stroke-width="3"/>
<text x="640" y="195" text-anchor="middle" font-size="16" font-family="sans-serif" font-weight="700" fill="#15803d">Soft</text>
<text x="640" y="225" text-anchor="middle" font-size="28">🧶 🪶 🧁</text>
<text x="400" y="370" text-anchor="middle" font-size="24" font-family="sans-serif" font-weight="800" fill="#7c2d12">Sorting Materials into Groups</text>`
  },
  'components-of-food': {
    bg: ['#fef9c3','#fde68a'], accent: '#ca8a04',
    svg: `<circle cx="400" cy="190" r="130" fill="#fef08a" stroke="#ca8a04" stroke-width="3"/>
<path d="M400,190 L400,60 A130,130 0 0,1 513,255 Z" fill="#4ade80" opacity=".8"/>
<path d="M400,190 L513,255 A130,130 0 0,1 287,255 Z" fill="#f97316" opacity=".8"/>
<path d="M400,190 L287,255 A130,130 0 0,1 400,60 Z" fill="#60a5fa" opacity=".8"/>
<text x="448" y="168" text-anchor="middle" font-size="13" font-family="sans-serif" font-weight="700" fill="#fff">Carbs</text>
<text x="448" y="258" text-anchor="middle" font-size="13" font-family="sans-serif" font-weight="700" fill="#fff">Proteins</text>
<text x="345" y="218" text-anchor="middle" font-size="13" font-family="sans-serif" font-weight="700" fill="#fff">Fats</text>
<text x="200" y="130" font-size="16" font-family="sans-serif" font-weight="700" fill="#92400e">🥜 Proteins</text>
<text x="200" y="165" font-size="16" font-family="sans-serif" font-weight="700" fill="#92400e">🍞 Carbs</text>
<text x="200" y="200" font-size="16" font-family="sans-serif" font-weight="700" fill="#92400e">🫐 Vitamins</text>
<text x="200" y="235" font-size="16" font-family="sans-serif" font-weight="700" fill="#92400e">🥛 Minerals</text>
<text x="400" y="380" text-anchor="middle" font-size="24" font-family="sans-serif" font-weight="800" fill="#713f12">Components of Food</text>`
  },
  'separation-of-substances': {
    bg: ['#ecfdf5','#a7f3d0'], accent: '#059669',
    svg: `<rect x="310" y="100" width="180" height="40" rx="8" fill="#6b7280"/>
<path d="M310,140 L280,290 L420,290 L490,140 Z" fill="#d1fae5" stroke="#059669" stroke-width="3"/>
<circle cx="330" cy="195" r="6" fill="#059669"/>
<circle cx="370" cy="230" r="6" fill="#059669"/>
<circle cx="400" cy="200" r="6" fill="#059669"/>
<circle cx="440" cy="240" r="6" fill="#059669"/>
<circle cx="350" cy="260" r="5" fill="#34d399"/>
<path d="M350,290 L370,340 L410,340 L430,290" fill="#a7f3d0" stroke="#059669" stroke-width="2"/>
<rect x="80" y="150" width="160" height="160" rx="10" fill="#d1fae5" stroke="#059669" stroke-width="3"/>
<text x="160" y="195" text-anchor="middle" font-size="16" font-family="sans-serif" font-weight="700" fill="#065f46">Sieving</text>
<text x="160" y="245" text-anchor="middle" font-size="36">🪣</text>
<rect x="560" y="150" width="160" height="160" rx="10" fill="#d1fae5" stroke="#059669" stroke-width="3"/>
<text x="640" y="195" text-anchor="middle" font-size="16" font-family="sans-serif" font-weight="700" fill="#065f46">Evaporation</text>
<text x="640" y="245" text-anchor="middle" font-size="36">🧂</text>
<text x="400" y="390" text-anchor="middle" font-size="22" font-family="sans-serif" font-weight="800" fill="#064e3b">Separation of Substances</text>`
  },
  'getting-to-know-plants': {
    bg: ['#f0fdf4','#bbf7d0'], accent: '#16a34a',
    svg: `<line x1="400" y1="360" x2="400" y2="120" stroke="#4ade80" stroke-width="8"/>
<ellipse cx="400" cy="110" rx="70" ry="80" fill="#22c55e"/>
<ellipse cx="320" cy="170" rx="55" ry="40" fill="#16a34a" transform="rotate(-30,320,170)"/>
<ellipse cx="480" cy="170" rx="55" ry="40" fill="#16a34a" transform="rotate(30,480,170)"/>
<ellipse cx="340" cy="230" rx="45" ry="32" fill="#4ade80" transform="rotate(-20,340,230)"/>
<ellipse cx="460" cy="230" rx="45" ry="32" fill="#4ade80" transform="rotate(20,460,230)"/>
<path d="M400,360 L340,380 L300,370 L280,390 M400,360 L340,370 L310,360 M400,360 L460,380 L500,370 L520,390 M400,360 L460,370 L490,360" stroke="#a16207" stroke-width="3" fill="none"/>
<circle cx="400" cy="108" r="15" fill="#f9a8d4" stroke="#ec4899" stroke-width="2"/>
<text x="150" y="150" text-anchor="middle" font-size="14" font-weight="700" fill="#15803d">Flower</text>
<text x="150" y="220" text-anchor="middle" font-size="14" font-weight="700" fill="#15803d">Leaves</text>
<text x="150" y="290" text-anchor="middle" font-size="14" font-weight="700" fill="#15803d">Stem</text>
<text x="150" y="360" text-anchor="middle" font-size="14" font-weight="700" fill="#92400e">Roots</text>
<text x="400" y="420" text-anchor="middle" font-size="24" font-family="sans-serif" font-weight="800" fill="#14532d">Getting to Know Plants</text>`
  },
  'body-movements': {
    bg: ['#fdf4ff','#e9d5ff'], accent: '#7c3aed',
    svg: `<circle cx="400" cy="85" r="38" fill="#e9d5ff" stroke="#7c3aed" stroke-width="3"/>
<rect x="372" y="123" width="56" height="110" rx="14" fill="#c4b5fd" stroke="#7c3aed" stroke-width="2"/>
<line x1="372" y1="133" x2="290" y2="220" stroke="#7c3aed" stroke-width="5" stroke-linecap="round"/>
<line x1="428" y1="133" x2="510" y2="220" stroke="#7c3aed" stroke-width="5" stroke-linecap="round"/>
<line x1="372" y1="233" x2="340" y2="340" stroke="#7c3aed" stroke-width="5" stroke-linecap="round"/>
<line x1="428" y1="233" x2="460" y2="340" stroke="#7c3aed" stroke-width="5" stroke-linecap="round"/>
<circle cx="290" cy="226" r="10" fill="#a78bfa"/>
<circle cx="510" cy="226" r="10" fill="#a78bfa"/>
<circle cx="340" cy="290" r="10" fill="#a78bfa"/>
<circle cx="460" cy="290" r="10" fill="#a78bfa"/>
<text x="230" y="210" font-size="13" font-family="sans-serif" font-weight="700" fill="#5b21b6">shoulder</text>
<text x="520" y="210" font-size="13" font-family="sans-serif" font-weight="700" fill="#5b21b6">joint</text>
<text x="290" y="310" font-size="13" font-family="sans-serif" font-weight="700" fill="#5b21b6">knee</text>
<text x="400" y="390" text-anchor="middle" font-size="26" font-family="sans-serif" font-weight="800" fill="#3b0764">Body Movements</text>`
  },
  'motion-measurement': {
    bg: ['#eff6ff','#bfdbfe'], accent: '#2563eb',
    svg: `<rect x="70" y="250" width="660" height="24" rx="8" fill="#93c5fd"/>
${[0,1,2,3,4,5,6,7,8,9,10].map(i=>`<rect x="${70+i*66}" y="240" width="3" height="16" fill="#1d4ed8"/><text x="${71+i*66}" y="235" font-size="13" font-family="sans-serif" fill="#1d4ed8">${i}</text>`).join('')}
<text x="400" y="222" text-anchor="middle" font-size="14" fill="#374151">centimetres →</text>
<circle cx="220" cy="190" r="40" fill="#fde68a" stroke="#f59e0b" stroke-width="3"/>
<rect x="200" y="150" width="8" height="40" rx="4" fill="#f59e0b" transform="rotate(-30,204,190)"/>
<rect x="200" y="150" width="5" height="35" rx="3" fill="#374151" transform="rotate(60,202.5,190)"/>
<text x="220" y="145" text-anchor="middle" font-size="14" font-family="sans-serif" font-weight="700" fill="#92400e">Time</text>
<path d="M380,200 Q440,160 500,200 Q560,240 620,200" stroke="#2563eb" stroke-width="3" fill="none" stroke-dasharray="8,4"/>
<polygon points="618,193 635,200 618,207" fill="#2563eb"/>
<text x="510" y="165" text-anchor="middle" font-size="16" font-family="sans-serif" font-weight="700" fill="#1d4ed8">Motion</text>
<text x="400" y="380" text-anchor="middle" font-size="24" font-family="sans-serif" font-weight="800" fill="#1e3a8a">Motion and Measurement</text>`
  },
  'light-shadows-reflection': {
    bg: ['#fefce8','#fef08a'], accent: '#ca8a04',
    svg: `<circle cx="160" cy="160" r="60" fill="#fbbf24" opacity=".9"/>
${[0,30,60,90,120,150,180,210,240,270,300,330].map(a=>{const r=a*Math.PI/180;return `<line x1="${160+65*Math.cos(r)}" y1="${160+65*Math.sin(r)}" x2="${160+90*Math.cos(r)}" y2="${160+90*Math.sin(r)}" stroke="#fbbf24" stroke-width="3"/>`}).join('')}
<rect x="340" y="100" width="40" height="220" rx="6" fill="#6b7280"/>
<polygon points="380,160 600,90 600,230" fill="#fef08a" opacity=".5"/>
<polygon points="380,220 600,140 660,280" fill="#d1d5db" opacity=".7"/>
<text x="620" y="300" text-anchor="middle" font-size="16" font-family="sans-serif" font-weight="700" fill="#374151">Shadow</text>
<line x1="500" y1="140" x2="500" y2="80" stroke="#ca8a04" stroke-width="2" stroke-dasharray="4,4"/>
<line x1="440" y1="140" x2="500" y2="80" stroke="#ca8a04" stroke-width="2.5"/>
<line x1="500" y1="80" x2="560" y2="140" stroke="#ca8a04" stroke-width="2.5"/>
<text x="500" y="60" text-anchor="middle" font-size="14" font-family="sans-serif" font-weight="700" fill="#92400e">Reflection</text>
<text x="400" y="380" text-anchor="middle" font-size="24" font-family="sans-serif" font-weight="800" fill="#78350f">Light, Shadows and Reflections</text>`
  },
  'electricity-circuits': {
    bg: ['#1e1b4b','#312e81'], accent: '#fbbf24',
    svg: `<rect x="80" y="160" width="80" height="120" rx="10" fill="#fbbf24" opacity=".9"/>
<text x="120" y="215" text-anchor="middle" font-size="12" font-family="sans-serif" font-weight="700" fill="#1e1b4b">BATTERY</text>
<text x="120" y="235" text-anchor="middle" font-size="20" fill="#1e1b4b">⚡</text>
<line x1="160" y1="175" x2="350" y2="175" stroke="#fbbf24" stroke-width="5"/>
<line x1="160" y1="265" x2="350" y2="265" stroke="#fbbf24" stroke-width="5"/>
<circle cx="400" cy="220" r="50" fill="none" stroke="#fbbf24" stroke-width="4"/>
<circle cx="400" cy="220" r="18" fill="#fef08a" opacity=".9"/>
<text x="400" y="295" text-anchor="middle" font-size="13" font-family="sans-serif" font-weight="700" fill="#fbbf24">BULB</text>
<line x1="450" y1="175" x2="620" y2="175" stroke="#fbbf24" stroke-width="5"/>
<line x1="450" y1="265" x2="620" y2="265" stroke="#fbbf24" stroke-width="5"/>
<rect x="620" y="160" width="80" height="120" rx="10" fill="#4ade80" opacity=".8"/>
<text x="660" y="225" text-anchor="middle" font-size="13" font-family="sans-serif" font-weight="700" fill="#052e16">SWITCH</text>
<line x1="640" y1="175" x2="700" y2="155" stroke="#4ade80" stroke-width="4"/>
<text x="400" y="380" text-anchor="middle" font-size="26" font-family="sans-serif" font-weight="800" fill="#fbbf24">Electricity and Circuits</text>`
  },
  'fun-with-magnets': {
    bg: ['#fff1f2','#fecdd3'], accent: '#e11d48',
    svg: `<rect x="290" y="120" width="220" height="100" rx="12" fill="#fda4af"/>
<rect x="290" y="120" width="110" height="100" rx="12 0 0 12" fill="#e11d48"/>
<text x="345" y="180" text-anchor="middle" font-size="24" font-family="sans-serif" font-weight="900" fill="#fff">N</text>
<text x="455" y="180" text-anchor="middle" font-size="24" font-family="sans-serif" font-weight="900" fill="#be123c">S</text>
${[-60,-50,-40,-30,-20,-10,0,10,20,30,40,50,60].map(i=>{const x=400+i*5,y=290+Math.abs(i)*0.8;return `<line x1="${x}" y1="${y}" x2="${x}" y2="${y+20}" stroke="#e11d48" stroke-width="1.5" opacity="${1-Math.abs(i)/80}"/>`}).join('')}
<text x="200" y="280" font-size="18" font-family="sans-serif" fill="#9f1239">🔩</text>
<text x="560" y="280" font-size="18" font-family="sans-serif" fill="#9f1239">📌</text>
<text x="130" y="280" font-size="18" font-family="sans-serif" fill="#9f1239">🪙</text>
<text x="620" y="280" font-size="18" font-family="sans-serif" fill="#9f1239">⚙️</text>
<text x="400" y="370" text-anchor="middle" font-size="26" font-family="sans-serif" font-weight="800" fill="#881337">Fun with Magnets</text>`
  },
  'air-around-us': {
    bg: ['#eff6ff','#bfdbfe'], accent: '#0891b2',
    svg: `<path d="M400,300 Q200,280 100,200 Q50,150 100,100 Q150,50 250,80 Q350,110 400,80" fill="none" stroke="#7dd3fc" stroke-width="4" stroke-dasharray="8,5"/>
<path d="M400,300 Q500,260 600,280 Q680,295 700,200 Q720,130 650,100" fill="none" stroke="#38bdf8" stroke-width="4" stroke-dasharray="8,5"/>
<text x="400" y="170" text-anchor="middle" font-size="60" opacity=".3" fill="#0891b2">~</text>
<text x="300" y="130" font-size="22">🌬️</text>
<text x="500" y="140" font-size="22">💨</text>
<rect x="100" y="290" width="600" height="60" rx="12" fill="#d1fae5"/>
<text x="200" y="330" font-size="14" font-family="sans-serif" font-weight="700" fill="#065f46">N₂ (78%)</text>
<text x="370" y="330" font-size="14" font-family="sans-serif" font-weight="700" fill="#065f46">O₂ (21%)</text>
<text x="510" y="330" font-size="14" font-family="sans-serif" font-weight="700" fill="#065f46">CO₂ + others</text>
<text x="400" y="380" text-anchor="middle" font-size="26" font-family="sans-serif" font-weight="800" fill="#0c4a6e">Air Around Us</text>`
  },
  'fibre-to-fabric-6': {
    bg: ['#fdf4ff','#e9d5ff'], accent: '#a855f7',
    svg: `<text x="150" y="200" text-anchor="middle" font-size="50">🌱</text>
<text x="280" y="185" text-anchor="middle" font-size="30">→</text>
<text x="400" y="200" text-anchor="middle" font-size="50">🧵</text>
<text x="520" y="185" text-anchor="middle" font-size="30">→</text>
<text x="640" y="200" text-anchor="middle" font-size="50">🧶</text>
<text x="150" y="250" text-anchor="middle" font-size="14" font-family="sans-serif" font-weight="700" fill="#7e22ce">Cotton Plant</text>
<text x="400" y="250" text-anchor="middle" font-size="14" font-family="sans-serif" font-weight="700" fill="#7e22ce">Yarn/Thread</text>
<text x="640" y="250" text-anchor="middle" font-size="14" font-family="sans-serif" font-weight="700" fill="#7e22ce">Fabric</text>
${Array.from({length:8},(_,i)=>Array.from({length:5},(_,j)=>`<rect x="${100+i*75}" y="${280+j*14}" width="65" height="10" rx="3" fill="${j%2===0?'#c084fc':'#e9d5ff'}" opacity=".7"/>`).join('')).join('')}
<text x="400" y="380" text-anchor="middle" font-size="24" font-family="sans-serif" font-weight="800" fill="#581c87">Fibre to Fabric</text>`
  },
  'water-6': {
    bg: ['#eff6ff','#bfdbfe'], accent: '#0891b2',
    svg: `<ellipse cx="400" cy="310" rx="280" ry="50" fill="#bae6fd" opacity=".6"/>
<path d="M200,310 Q280,200 400,180 Q520,200 600,310" fill="#7dd3fc" opacity=".5"/>
<path d="M200,310 Q250,250 400,230 Q550,250 600,310 Z" fill="#38bdf8" opacity=".4"/>
<path d="M260,180 Q270,130 280,180" fill="none" stroke="#7dd3fc" stroke-width="2.5"/>
<path d="M330,160 Q340,100 350,160" fill="none" stroke="#7dd3fc" stroke-width="2.5"/>
<path d="M400,150 Q420,80 440,150" fill="none" stroke="#bae6fd" stroke-width="2.5"/>
<text x="300" y="120" font-size="14" font-family="sans-serif" fill="#0369a1">☁️ Clouds</text>
<text x="500" y="105" font-size="14" font-family="sans-serif" fill="#0369a1">🌧️ Rain</text>
<path d="M520,110 L520,160 M540,110 L540,165 M560,110 L560,155" stroke="#0369a1" stroke-width="2"/>
<text x="180" y="280" font-size="14" font-family="sans-serif" font-weight="700" fill="#0c4a6e">Water Cycle</text>
<text x="400" y="390" text-anchor="middle" font-size="26" font-family="sans-serif" font-weight="800" fill="#0c4a6e">Water</text>`
  },
  'living-organisms-surroundings-6': {
    bg: ['#f0fdf4','#bbf7d0'], accent: '#16a34a',
    svg: `<ellipse cx="400" cy="230" rx="260" ry="130" fill="#bbf7d0" stroke="#16a34a" stroke-width="3"/>
<text x="400" y="100" text-anchor="middle" font-size="22" font-family="sans-serif" font-weight="700" fill="#15803d">Habitat</text>
<text x="200" y="220" font-size="28">🌳</text>
<text x="300" y="250" font-size="28">🐇</text>
<text x="400" y="220" font-size="28">🌻</text>
<text x="500" y="250" font-size="28">🐦</text>
<text x="580" y="220" font-size="28">🍄</text>
<text x="350" y="310" font-size="22">🌍</text>
<text x="400" y="165" text-anchor="middle" font-size="14" font-family="sans-serif" fill="#15803d">Biotic ← → Abiotic</text>
<text x="400" y="185" text-anchor="middle" font-size="13" font-family="sans-serif" fill="#374151">(living)    (non-living)</text>
<text x="190" y="310" font-size="14" font-family="sans-serif" fill="#15803d">☀️ Sun  💧 Water  🌬️ Air  🪨 Soil</text>
<text x="400" y="390" text-anchor="middle" font-size="20" font-family="sans-serif" font-weight="800" fill="#14532d">Living Organisms & Surroundings</text>`
  },
  'changes-around-us-6': {
    bg: ['#fff7ed','#fed7aa'], accent: '#ea580c',
    svg: `<rect x="80" y="140" width="240" height="180" rx="16" fill="#fde68a" stroke="#ea580c" stroke-width="3"/>
<text x="200" y="185" text-anchor="middle" font-size="16" font-family="sans-serif" font-weight="700" fill="#c2410c">Reversible</text>
<text x="200" y="220" text-anchor="middle" font-size="32">🧊→💧→🧊</text>
<text x="200" y="270" text-anchor="middle" font-size="14" font-family="sans-serif" fill="#7c2d12">Ice ⇌ Water</text>
<rect x="480" y="140" width="240" height="180" rx="16" fill="#fecdd3" stroke="#e11d48" stroke-width="3"/>
<text x="600" y="185" text-anchor="middle" font-size="16" font-family="sans-serif" font-weight="700" fill="#9f1239">Irreversible</text>
<text x="600" y="220" text-anchor="middle" font-size="32">🌿→🔥→💨</text>
<text x="600" y="270" text-anchor="middle" font-size="14" font-family="sans-serif" fill="#7f1d1d">Burning wood</text>
<text x="400" y="375" text-anchor="middle" font-size="24" font-family="sans-serif" font-weight="800" fill="#7c2d12">Changes Around Us</text>`
  },
  'garbage-in-garbage-out-6': {
    bg: ['#f0fdf4','#bbf7d0'], accent: '#16a34a',
    svg: `<circle cx="400" cy="200" r="130" fill="#d1fae5" stroke="#16a34a" stroke-width="3"/>
<path d="M400,200 L400,70 A130,130 0 0,1 513,265 Z" fill="#4ade80" opacity=".8"/>
<path d="M400,200 L513,265 A130,130 0 0,1 287,265 Z" fill="#f87171" opacity=".8"/>
<path d="M400,200 L287,265 A130,130 0 0,1 400,70 Z" fill="#60a5fa" opacity=".8"/>
<text x="460" y="165" font-size="13" font-family="sans-serif" font-weight="700" fill="#fff">♻️ Reduce</text>
<text x="460" y="268" font-size="13" font-family="sans-serif" font-weight="700" fill="#fff">🗑️ Landfill</text>
<text x="300" y="218" font-size="13" font-family="sans-serif" font-weight="700" fill="#fff">🌱 Compost</text>
<text x="400" y="375" text-anchor="middle" font-size="24" font-family="sans-serif" font-weight="800" fill="#14532d">Garbage In, Garbage Out</text>`
  },

  // ── ENGLISH ───────────────────────────────────────────────────────
  'grammar-parts-of-speech': {
    bg: ['#fff1f2','#fecdd3'], accent: '#e11d48',
    svg: `${[['Noun','🏠 dog city',100,160],['Verb','🏃 run jump',300,160],['Adjective','✨ big happy',500,160],['Adverb','💨 quickly',700,160],['Pronoun','👤 he she',100,310],['Preposition','📍 on under',300,310],['Conjunction','🔗 and but',500,310],['Article','📝 a an the',700,310]].map(([n,e,x,y])=>`<rect x="${x-90}" y="${y-35}" width="170" height="85" rx="12" fill="#fff1f2" stroke="#e11d48" stroke-width="2"/>
<text x="${x}" y="${y}" text-anchor="middle" font-size="14" font-family="sans-serif" font-weight="700" fill="#be123c">${n}</text>
<text x="${x}" y="${y+25}" text-anchor="middle" font-size="13" font-family="sans-serif" fill="#374151">${e}</text>`).join('')}
<text x="400" y="410" text-anchor="middle" font-size="24" font-family="sans-serif" font-weight="800" fill="#881337">Parts of Speech</text>`
  },
  'tenses': {
    bg: ['#eff6ff','#bfdbfe'], accent: '#2563eb',
    svg: `<line x1="80" y1="210" x2="720" y2="210" stroke="#374151" stroke-width="3"/>
<polygon points="720,202 740,210 720,218" fill="#374151"/>
<circle cx="180" cy="210" r="12" fill="#dc2626"/>
<circle cx="400" cy="210" r="12" fill="#16a34a"/>
<circle cx="620" cy="210" r="12" fill="#2563eb"/>
<rect x="100" y="120" width="160" height="70" rx="12" fill="#fecaca" stroke="#dc2626" stroke-width="2"/>
<text x="180" y="152" text-anchor="middle" font-size="16" font-family="sans-serif" font-weight="700" fill="#7f1d1d">Past</text>
<text x="180" y="178" text-anchor="middle" font-size="14" font-family="sans-serif" fill="#991b1b">She played</text>
<rect x="320" y="120" width="160" height="70" rx="12" fill="#d1fae5" stroke="#16a34a" stroke-width="2"/>
<text x="400" y="152" text-anchor="middle" font-size="16" font-family="sans-serif" font-weight="700" fill="#14532d">Present</text>
<text x="400" y="178" text-anchor="middle" font-size="14" font-family="sans-serif" fill="#166534">She plays</text>
<rect x="540" y="120" width="160" height="70" rx="12" fill="#bfdbfe" stroke="#2563eb" stroke-width="2"/>
<text x="620" y="152" text-anchor="middle" font-size="16" font-family="sans-serif" font-weight="700" fill="#1e3a8a">Future</text>
<text x="620" y="178" text-anchor="middle" font-size="14" font-family="sans-serif" fill="#1d4ed8">She will play</text>
<text x="400" y="380" text-anchor="middle" font-size="28" font-family="sans-serif" font-weight="800" fill="#1e3a8a">Tenses</text>`
  },
  'active-passive-voice': {
    bg: ['#fdf4ff','#e9d5ff'], accent: '#7c3aed',
    svg: `<rect x="80" y="130" width="280" height="120" rx="16" fill="#ede9fe" stroke="#7c3aed" stroke-width="3"/>
<text x="220" y="165" text-anchor="middle" font-size="16" font-family="sans-serif" font-weight="700" fill="#4c1d95">Active Voice</text>
<text x="220" y="195" text-anchor="middle" font-size="15" font-family="sans-serif" fill="#5b21b6">"The cat chases</text>
<text x="220" y="220" text-anchor="middle" font-size="15" font-family="sans-serif" fill="#5b21b6">the mouse."</text>
<polygon points="370,190 420,175 420,205" fill="#7c3aed"/>
<text x="395" y="215" text-anchor="middle" font-size="12" fill="#6d28d9">flip</text>
<rect x="440" y="130" width="280" height="120" rx="16" fill="#f3e8ff" stroke="#a855f7" stroke-width="3"/>
<text x="580" y="165" text-anchor="middle" font-size="16" font-family="sans-serif" font-weight="700" fill="#4c1d95">Passive Voice</text>
<text x="580" y="195" text-anchor="middle" font-size="15" font-family="sans-serif" fill="#5b21b6">"The mouse is chased</text>
<text x="580" y="220" text-anchor="middle" font-size="15" font-family="sans-serif" fill="#5b21b6">by the cat."</text>
<text x="400" y="380" text-anchor="middle" font-size="24" font-family="sans-serif" font-weight="800" fill="#3b0764">Active and Passive Voice</text>`
  },
  'comprehension-writing': {
    bg: ['#fef9c3','#fde68a'], accent: '#ca8a04',
    svg: `<rect x="100" y="100" width="220" height="260" rx="12" fill="#fff" stroke="#ca8a04" stroke-width="3"/>
${[130,160,190,220,250,280,310,330].map(y=>`<line x1="120" y1="${y}" x2="300" y2="${y}" stroke="#e5e7eb" stroke-width="2"/>`).join('')}
<text x="210" y="130" text-anchor="middle" font-size="14" font-family="sans-serif" font-weight="700" fill="#92400e">📖 Read</text>
<circle cx="195" cy="155" r="3" fill="#ca8a04"/><line x1="205" y1="155" x2="290" y2="155" stroke="#ca8a04" stroke-width="1.5"/>
<circle cx="195" cy="175" r="3" fill="#ca8a04"/><line x1="205" y1="175" x2="270" y2="175" stroke="#ca8a04" stroke-width="1.5"/>
<circle cx="195" cy="195" r="3" fill="#ca8a04"/><line x1="205" y1="195" x2="285" y2="195" stroke="#ca8a04" stroke-width="1.5"/>
<rect x="440" y="100" width="220" height="260" rx="12" fill="#fef9c3" stroke="#ca8a04" stroke-width="3"/>
<text x="550" y="130" text-anchor="middle" font-size="14" font-family="sans-serif" font-weight="700" fill="#92400e">✍️ Write</text>
<line x1="460" y1="155" x2="645" y2="155" stroke="#ca8a04" stroke-width="1.5"/>
<line x1="460" y1="180" x2="645" y2="180" stroke="#ca8a04" stroke-width="1.5"/>
<line x1="460" y1="205" x2="600" y2="205" stroke="#ca8a04" stroke-width="1.5"/>
<polygon points="480,215 486,250 492,215" fill="#ca8a04"/>
<text x="400" y="380" text-anchor="middle" font-size="22" font-family="sans-serif" font-weight="800" fill="#713f12">Reading Comprehension & Writing</text>`
  },
  'nouns-pronouns-articles-6': {
    bg: ['#fff1f2','#fecdd3'], accent: '#e11d48',
    svg: `<rect x="70" y="130" width="190" height="180" rx="16" fill="#ffe4e6" stroke="#e11d48" stroke-width="3"/>
<text x="165" y="168" text-anchor="middle" font-size="18" font-family="sans-serif" font-weight="700" fill="#9f1239">Noun</text>
<text x="165" y="200" text-anchor="middle" font-size="22">🏙️ 🐕 📚</text>
<text x="165" y="235" text-anchor="middle" font-size="14" font-family="sans-serif" fill="#be123c">person, place, thing</text>
<rect x="305" y="130" width="190" height="180" rx="16" fill="#fce7f3" stroke="#ec4899" stroke-width="3"/>
<text x="400" y="168" text-anchor="middle" font-size="18" font-family="sans-serif" font-weight="700" fill="#831843">Pronoun</text>
<text x="400" y="200" text-anchor="middle" font-size="22">👤 👥 👆</text>
<text x="400" y="235" text-anchor="middle" font-size="14" font-family="sans-serif" fill="#9d174d">he, she, they, it</text>
<rect x="540" y="130" width="190" height="180" rx="16" fill="#fef3c7" stroke="#f59e0b" stroke-width="3"/>
<text x="635" y="168" text-anchor="middle" font-size="18" font-family="sans-serif" font-weight="700" fill="#78350f">Article</text>
<text x="635" y="210" text-anchor="middle" font-size="36" font-family="serif" font-weight="900" fill="#d97706">a an the</text>
<text x="400" y="380" text-anchor="middle" font-size="22" font-family="sans-serif" font-weight="800" fill="#881337">Nouns, Pronouns and Articles</text>`
  },
  'adjectives-adverbs-6': {
    bg: ['#ecfdf5','#a7f3d0'], accent: '#059669',
    svg: `<rect x="80" y="130" width="280" height="160" rx="16" fill="#d1fae5" stroke="#059669" stroke-width="3"/>
<text x="220" y="172" text-anchor="middle" font-size="18" font-family="sans-serif" font-weight="700" fill="#064e3b">Adjective</text>
<text x="220" y="205" text-anchor="middle" font-size="15" font-family="sans-serif" fill="#065f46">describes a noun</text>
<text x="220" y="235" text-anchor="middle" font-size="16" font-family="sans-serif" fill="#047857">big 🐘  blue 💙  happy 😊</text>
<text x="220" y="265" text-anchor="middle" font-size="13" font-family="sans-serif" fill="#059669">The BIG elephant…</text>
<rect x="440" y="130" width="280" height="160" rx="16" fill="#a7f3d0" stroke="#059669" stroke-width="3"/>
<text x="580" y="172" text-anchor="middle" font-size="18" font-family="sans-serif" font-weight="700" fill="#064e3b">Adverb</text>
<text x="580" y="205" text-anchor="middle" font-size="15" font-family="sans-serif" fill="#065f46">describes a verb</text>
<text x="580" y="235" text-anchor="middle" font-size="16" font-family="sans-serif" fill="#047857">quickly 💨 softly 🌊 very ⭐</text>
<text x="580" y="265" text-anchor="middle" font-size="13" font-family="sans-serif" fill="#059669">She runs QUICKLY…</text>
<text x="400" y="380" text-anchor="middle" font-size="24" font-family="sans-serif" font-weight="800" fill="#064e3b">Adjectives and Adverbs</text>`
  },
  'sentence-types-punctuation-6': {
    bg: ['#eff6ff','#bfdbfe'], accent: '#2563eb',
    svg: `${[['Declarative','She reads books.','#16a34a',120,150],['Interrogative','Does she read?','#2563eb',370,150],['Imperative','Read this!','#ea580c',620,150],['Exclamatory','How great!','#7c3aed',245,300],['Punctuation','. , ? ! ; :','#ca8a04',495,300]].map(([t,e,c,x,y])=>`<rect x="${x-110}" y="${y-40}" width="215" height="110" rx="14" fill="white" stroke="${c}" stroke-width="2.5"/>
<text x="${x}" y="${y-8}" text-anchor="middle" font-size="14" font-family="sans-serif" font-weight="700" fill="${c}">${t}</text>
<text x="${x}" y="${y+22}" text-anchor="middle" font-size="13" font-family="sans-serif" fill="#374151">${e}</text>`).join('')}
<text x="400" y="410" text-anchor="middle" font-size="22" font-family="sans-serif" font-weight="800" fill="#1e3a8a">Sentences, Types and Punctuation</text>`
  },

  // ── SOCIAL SCIENCE ────────────────────────────────────────────────
  'what-is-history': {
    bg: ['#fffbeb','#fde68a'], accent: '#92400e',
    svg: `<line x1="80" y1="230" x2="720" y2="230" stroke="#92400e" stroke-width="3"/>
<polygon points="720,222 740,230 720,238" fill="#92400e"/>
${[[100,'Ancient',80,'#b45309'],[300,'Medieval',800,'#d97706'],[500,'Modern',1700,'#f59e0b'],[700,'Present',2024,'#fbbf24']].map(([x,l,y_,c])=>`<circle cx="${x}" cy="230" r="10" fill="${c}"/>
<line x1="${x}" y1="200" x2="${x}" y2="175" stroke="${c}" stroke-width="2"/>
<text x="${x}" y="168" text-anchor="middle" font-size="13" font-family="sans-serif" font-weight="700" fill="${c}">${l}</text>
<text x="${x}" y="155" text-anchor="middle" font-size="11" font-family="sans-serif" fill="#92400e">${y_}</text>`).join('')}
<text x="400" y="100" text-anchor="middle" font-size="28" font-family="sans-serif" font-weight="700" fill="#92400e" opacity=".3">📜 📖 🏺</text>
<rect x="140" y="270" width="520" height="60" rx="12" fill="#fef3c7" stroke="#92400e" stroke-width="2"/>
<text x="400" y="308" text-anchor="middle" font-size="16" font-family="sans-serif" fill="#78350f">Study of the human past through sources &amp; evidence</text>
<text x="400" y="380" text-anchor="middle" font-size="26" font-family="sans-serif" font-weight="800" fill="#78350f">What is History?</text>`
  },
  'hunting-gathering-to-farming': {
    bg: ['#f0fdf4','#bbf7d0'], accent: '#15803d',
    svg: `<text x="160" y="200" text-anchor="middle" font-size="64">🏹</text>
<text x="400" y="200" text-anchor="middle" font-size="50">→</text>
<text x="600" y="200" text-anchor="middle" font-size="64">🌾</text>
<text x="160" y="255" text-anchor="middle" font-size="14" font-family="sans-serif" font-weight="700" fill="#14532d">Hunting &amp; Gathering</text>
<text x="160" y="278" text-anchor="middle" font-size="13" font-family="sans-serif" fill="#15803d">Nomadic life</text>
<text x="600" y="255" text-anchor="middle" font-size="14" font-family="sans-serif" font-weight="700" fill="#14532d">Farming</text>
<text x="600" y="278" text-anchor="middle" font-size="13" font-family="sans-serif" fill="#15803d">Settled life</text>
<line x1="80" y1="310" x2="720" y2="310" stroke="#15803d" stroke-width="2"/>
<text x="200" y="340" text-anchor="middle" font-size="13" fill="#15803d">Stone Age tools</text>
<text x="400" y="340" text-anchor="middle" font-size="13" fill="#15803d">Fire &amp; cooking</text>
<text x="600" y="340" text-anchor="middle" font-size="13" fill="#15803d">Domestication</text>
<text x="400" y="390" text-anchor="middle" font-size="22" font-family="sans-serif" font-weight="800" fill="#14532d">From Hunting-Gathering to Farming</text>`
  },
  'earliest-cities': {
    bg: ['#fffbeb','#fde68a'], accent: '#b45309',
    svg: `<rect x="200" y="150" width="80" height="140" rx="4" fill="#d97706" opacity=".8"/>
<rect x="300" y="110" width="90" height="180" rx="4" fill="#b45309" opacity=".8"/>
<rect x="410" y="130" width="80" height="160" rx="4" fill="#d97706" opacity=".8"/>
<rect x="510" y="90" width="70" height="200" rx="4" fill="#92400e" opacity=".8"/>
<polygon points="200,150 240,100 280,150" fill="#78350f"/>
<polygon points="300,110 345,60 390,110" fill="#78350f"/>
<polygon points="410,130 450,80 490,130" fill="#78350f"/>
<polygon points="510,90 545,50 580,90" fill="#78350f"/>
<rect x="80" y="290" width="640" height="20" rx="4" fill="#92400e" opacity=".5"/>
<text x="400" y="80" text-anchor="middle" font-size="18" font-family="sans-serif" font-weight="700" fill="#78350f">Harappa • Mohenjo-daro</text>
<text x="400" y="360" text-anchor="middle" font-size="16" font-family="sans-serif" fill="#92400e">Planned streets • Drainage • Granaries</text>
<text x="400" y="390" text-anchor="middle" font-size="22" font-family="sans-serif" font-weight="800" fill="#78350f">In the Earliest Cities</text>`
  },
  'kingdoms-kings-early-republic': {
    bg: ['#fdf4ff','#e9d5ff'], accent: '#7c3aed',
    svg: `<polygon points="400,80 440,160 530,160 460,210 490,300 400,250 310,300 340,210 270,160 360,160" fill="#fbbf24" stroke="#ca8a04" stroke-width="3"/>
<circle cx="400" cy="185" r="20" fill="#ca8a04"/>
<text x="400" y="360" text-anchor="middle" font-size="16" font-family="sans-serif" fill="#5b21b6">Kingdoms → Republics (Ganas/Sanghas)</text>
<rect x="100" y="310" width="160" height="50" rx="10" fill="#ede9fe" stroke="#7c3aed" stroke-width="2"/>
<text x="180" y="342" text-anchor="middle" font-size="14" font-family="sans-serif" font-weight="700" fill="#4c1d95">Magadha</text>
<rect x="310" y="310" width="180" height="50" rx="10" fill="#ede9fe" stroke="#7c3aed" stroke-width="2"/>
<text x="400" y="342" text-anchor="middle" font-size="14" font-family="sans-serif" font-weight="700" fill="#4c1d95">Vajji Republic</text>
<rect x="540" y="310" width="160" height="50" rx="10" fill="#ede9fe" stroke="#7c3aed" stroke-width="2"/>
<text x="620" y="342" text-anchor="middle" font-size="14" font-family="sans-serif" font-weight="700" fill="#4c1d95">Kashi</text>
<text x="400" y="410" text-anchor="middle" font-size="20" font-family="sans-serif" font-weight="800" fill="#3b0764">Kingdoms, Kings and Early Republic</text>`
  },
  'earth-solar-system': {
    bg: ['#0f172a','#1e293b'], accent: '#fbbf24',
    svg: `<circle cx="400" cy="205" r="40" fill="#fbbf24" opacity=".9"/>
${[[100,205,18,'#b45309'],[155,205,22,'#d97706'],[220,205,28,'#2563eb'],[290,205,24,'#dc2626'],[400,205,0,''],[490,205,36,'#f97316'],[590,205,30,'#ca8a04'],[670,205,22,'#0891b2'],[740,205,18,'#4338ca']].filter(([,,r])=>r).map(([cx,cy,r,c])=>`<circle cx="${cx}" cy="${cy}" r="${r}" fill="${c}" opacity=".85"/>`).join('')}
<text x="400" y="110" text-anchor="middle" font-size="18" font-family="sans-serif" font-weight="700" fill="#fbbf24">☀️ Our Solar System</text>
<text x="100" y="250" text-anchor="middle" font-size="10" fill="#94a3b8">Mercury</text>
<text x="155" y="250" text-anchor="middle" font-size="10" fill="#94a3b8">Venus</text>
<text x="220" y="255" text-anchor="middle" font-size="10" fill="#94a3b8">Earth</text>
<text x="290" y="246" text-anchor="middle" font-size="10" fill="#94a3b8">Mars</text>
<text x="490" y="260" text-anchor="middle" font-size="10" fill="#94a3b8">Jupiter</text>
<text x="590" y="253" text-anchor="middle" font-size="10" fill="#94a3b8">Saturn</text>
<text x="670" y="250" text-anchor="middle" font-size="10" fill="#94a3b8">Uranus</text>
<text x="740" y="250" text-anchor="middle" font-size="10" fill="#94a3b8">Neptune</text>
<text x="400" y="380" text-anchor="middle" font-size="24" font-family="sans-serif" font-weight="800" fill="#fbbf24">The Earth in the Solar System</text>`
  },
  'globe-latitudes-longitudes': {
    bg: ['#eff6ff','#bfdbfe'], accent: '#1d4ed8',
    svg: `<ellipse cx="400" cy="210" rx="160" ry="170" fill="#dbeafe" stroke="#1d4ed8" stroke-width="3"/>
<ellipse cx="400" cy="210" rx="160" ry="50" fill="none" stroke="#1d4ed8" stroke-width="2" stroke-dasharray="6,4"/>
<ellipse cx="400" cy="210" rx="160" ry="100" fill="none" stroke="#93c5fd" stroke-width="1.5" stroke-dasharray="4,3"/>
<line x1="400" y1="40" x2="400" y2="380" stroke="#1d4ed8" stroke-width="2" stroke-dasharray="6,4"/>
<line x1="240" y1="210" x2="560" y2="210" stroke="#dc2626" stroke-width="2.5"/>
<text x="580" y="215" font-size="14" font-family="sans-serif" font-weight="700" fill="#dc2626">Equator 0°</text>
<text x="415" y="45" font-size="13" font-family="sans-serif" fill="#1d4ed8">N Pole</text>
<text x="415" y="378" font-size="13" font-family="sans-serif" fill="#1d4ed8">S Pole</text>
<text x="400" y="390" text-anchor="middle" font-size="22" font-family="sans-serif" font-weight="800" fill="#1e3a8a">Globe: Latitudes and Longitudes</text>`
  },
  'motions-of-earth': {
    bg: ['#0f172a','#1e293b'], accent: '#38bdf8',
    svg: `<circle cx="250" cy="210" r="40" fill="#fbbf24" opacity=".8"/>
<ellipse cx="550" cy="210" rx="200" ry="60" fill="none" stroke="#38bdf8" stroke-width="2" stroke-dasharray="6,4"/>
<circle cx="550" cy="150" r="35" fill="#2563eb" opacity=".9"/>
<line x1="550" y1="115" x2="550" y2="75" stroke="#94a3b8" stroke-width="2" stroke-dasharray="4,4"/>
<text x="590" y="155" font-size="13" font-family="sans-serif" fill="#38bdf8">Revolution</text>
<text x="590" y="175" font-size="11" fill="#94a3b8">365¼ days</text>
<circle cx="650" cy="310" r="30" fill="#2563eb" opacity=".9"/>
<path d="M660,300 Q680,310 660,320" fill="none" stroke="#38bdf8" stroke-width="2.5"/>
<text x="695" y="312" font-size="13" font-family="sans-serif" fill="#38bdf8">Rotation</text>
<text x="695" y="330" font-size="11" fill="#94a3b8">24 hours</text>
<text x="400" y="380" text-anchor="middle" font-size="24" font-family="sans-serif" font-weight="800" fill="#38bdf8">Motions of the Earth</text>`
  },
  'understanding-diversity': {
    bg: ['#f0fdf4','#bbf7d0'], accent: '#059669',
    svg: `${[['🧕',180,180,'#fde68a'],['👨‍💼',280,180,'#bfdbfe'],['👩‍🌾',380,180,'#d1fae5'],['👳',480,180,'#fce7f3'],['👩‍🔬',580,180,'#ede9fe']].map(([e,x,y,bg])=>`<circle cx="${x}" cy="${y}" r="55" fill="${bg}" opacity=".8"/>
<text x="${x}" y="${y+15}" text-anchor="middle" font-size="44">${e}</text>`).join('')}
<text x="400" y="100" text-anchor="middle" font-size="22" font-family="sans-serif" font-weight="700" fill="#15803d">Unity in Diversity</text>
<rect x="100" y="270" width="600" height="50" rx="12" fill="#d1fae5" stroke="#059669" stroke-width="2"/>
<text x="400" y="300" text-anchor="middle" font-size="16" font-family="sans-serif" fill="#065f46">Different cultures, languages, religions — ONE INDIA 🇮🇳</text>
<text x="400" y="380" text-anchor="middle" font-size="24" font-family="sans-serif" font-weight="800" fill="#064e3b">Understanding Diversity</text>`
  },
  'what-is-government': {
    bg: ['#eff6ff','#bfdbfe'], accent: '#1d4ed8',
    svg: `<polygon points="400,80 700,280 100,280" fill="#dbeafe" stroke="#1d4ed8" stroke-width="3"/>
<rect x="160" y="220" width="490" height="60" rx="6" fill="#93c5fd"/>
<rect x="220" y="170" width="90" height="110" rx="6" fill="#bfdbfe" stroke="#1d4ed8" stroke-width="2"/>
<rect x="355" y="155" width="90" height="125" rx="6" fill="#bfdbfe" stroke="#1d4ed8" stroke-width="2"/>
<rect x="490" y="170" width="90" height="110" rx="6" fill="#bfdbfe" stroke="#1d4ed8" stroke-width="2"/>
<text x="265" y="230" text-anchor="middle" font-size="12" fill="#1e3a8a">Legislature</text>
<text x="400" y="220" text-anchor="middle" font-size="12" fill="#1e3a8a">Executive</text>
<text x="535" y="230" text-anchor="middle" font-size="12" fill="#1e3a8a">Judiciary</text>
<text x="400" y="120" text-anchor="middle" font-size="16" font-family="sans-serif" font-weight="700" fill="#1d4ed8">Government</text>
<text x="400" y="330" text-anchor="middle" font-size="16" font-family="sans-serif" fill="#374151">Democracy • Laws • Citizens</text>
<text x="400" y="390" text-anchor="middle" font-size="24" font-family="sans-serif" font-weight="800" fill="#1e3a8a">What is Government?</text>`
  },
  'panchayati-raj': {
    bg: ['#f0fdf4','#bbf7d0'], accent: '#16a34a',
    svg: `<ellipse cx="400" cy="180" rx="100" ry="60" fill="#d1fae5" stroke="#16a34a" stroke-width="3"/>
<text x="400" y="190" text-anchor="middle" font-size="16" font-family="sans-serif" font-weight="700" fill="#15803d">Gram Sabha</text>
<text x="400" y="100" text-anchor="middle" font-size="22">🏘️</text>
${[[180,290,'Ward Panch'],[320,290,'Panch'],[400,330,'Sarpanch'],[480,290,'Secretary'],[620,290,'Gram Panchayat']].map(([x,y,l])=>`<circle cx="${x}" cy="${y}" r="35" fill="#bbf7d0" stroke="#16a34a" stroke-width="2"/>
<text x="${x}" y="${y+5}" text-anchor="middle" font-size="11" font-family="sans-serif" font-weight="700" fill="#065f46">${l}</text>
<line x1="${x}" y1="${y-35}" x2="${x<400?360:440}" y2="210" stroke="#16a34a" stroke-width="1.5" stroke-dasharray="4,3"/>`).join('')}
<text x="400" y="410" text-anchor="middle" font-size="22" font-family="sans-serif" font-weight="800" fill="#14532d">Panchayati Raj</text>`
  },
  'what-books-burials-tell-us-6': {
    bg: ['#fffbeb','#fde68a'], accent: '#92400e',
    svg: `<rect x="100" y="130" width="200" height="180" rx="8" fill="#fef3c7" stroke="#92400e" stroke-width="3"/>
<text x="200" y="185" text-anchor="middle" font-size="42">📜</text>
<text x="200" y="230" text-anchor="middle" font-size="15" font-family="sans-serif" font-weight="700" fill="#78350f">Vedas &amp; Texts</text>
<text x="200" y="255" text-anchor="middle" font-size="13" font-family="sans-serif" fill="#92400e">Written sources</text>
<rect x="500" y="130" width="200" height="180" rx="8" fill="#fef3c7" stroke="#92400e" stroke-width="3"/>
<text x="600" y="185" text-anchor="middle" font-size="42">⚱️</text>
<text x="600" y="230" text-anchor="middle" font-size="15" font-family="sans-serif" font-weight="700" fill="#78350f">Burial Mounds</text>
<text x="600" y="255" text-anchor="middle" font-size="13" font-family="sans-serif" fill="#92400e">Archaeological</text>
<text x="380" y="220" text-anchor="middle" font-size="32">+</text>
<text x="400" y="380" text-anchor="middle" font-size="22" font-family="sans-serif" font-weight="800" fill="#78350f">What Books and Burials Tell Us</text>`
  },
  'new-questions-ideas-6': {
    bg: ['#fdf4ff','#e9d5ff'], accent: '#7c3aed',
    svg: `<circle cx="400" cy="180" r="100" fill="#f3e8ff" stroke="#7c3aed" stroke-width="3"/>
<text x="400" y="160" text-anchor="middle" font-size="48">🧘</text>
<text x="400" y="210" text-anchor="middle" font-size="15" font-family="sans-serif" font-weight="700" fill="#5b21b6">Buddha • Mahavira</text>
<text x="400" y="235" text-anchor="middle" font-size="14" font-family="sans-serif" fill="#6d28d9">Upanishads</text>
${[['Truth','non-violence',120,320],['Karma','rebirth',400,320],['Ahimsa','meditation',680,320]].map(([a,b,x,y])=>`<rect x="${x-90}" y="${y-30}" width="175" height="60" rx="10" fill="#ede9fe" stroke="#7c3aed" stroke-width="2"/>
<text x="${x}" y="${y-5}" text-anchor="middle" font-size="14" font-family="sans-serif" font-weight="700" fill="#4c1d95">${a}</text>
<text x="${x}" y="${y+18}" text-anchor="middle" font-size="12" font-family="sans-serif" fill="#6d28d9">${b}</text>`).join('')}
<text x="400" y="410" text-anchor="middle" font-size="22" font-family="sans-serif" font-weight="800" fill="#3b0764">New Questions and Ideas</text>`
  },
  'ashoka-emperor-6': {
    bg: ['#fffbeb','#fde68a'], accent: '#b45309',
    svg: `<circle cx="400" cy="185" r="120" fill="#fef3c7" stroke="#b45309" stroke-width="3"/>
<circle cx="400" cy="185" r="60" fill="none" stroke="#1d4ed8" stroke-width="3"/>
${Array.from({length:24},(_,i)=>{const a=i*15*Math.PI/180;return `<line x1="${400+60*Math.cos(a)}" y1="${185+60*Math.sin(a)}" x2="${400+90*Math.cos(a)}" y2="${185+90*Math.sin(a)}" stroke="#1d4ed8" stroke-width="2"/>`}).join('')}
<text x="400" y="190" text-anchor="middle" font-size="14" font-family="sans-serif" font-weight="700" fill="#1d4ed8">Ashoka Chakra</text>
<text x="400" y="350" text-anchor="middle" font-size="15" font-family="sans-serif" fill="#78350f">Maurya Empire • Edicts • Non-violence</text>
<text x="400" y="390" text-anchor="middle" font-size="22" font-family="sans-serif" font-weight="800" fill="#78350f">Ashoka: The Emperor</text>`
  },
  'maps-6': {
    bg: ['#ecfdf5','#a7f3d0'], accent: '#059669',
    svg: `<rect x="100" y="100" width="600" height="220" rx="16" fill="#d1fae5" stroke="#059669" stroke-width="3"/>
<path d="M150,200 Q250,150 350,180 Q450,210 550,160 Q620,140 660,180" fill="none" stroke="#0891b2" stroke-width="3"/>
<path d="M150,230 Q200,260 300,250 Q400,240 500,260 Q580,275 660,250" fill="#bfdbfe" opacity=".5"/>
<circle cx="300" cy="175" r="8" fill="#dc2626"/>
<circle cx="500" cy="165" r="8" fill="#dc2626"/>
<line x1="300" y1="175" x2="250" y2="130" stroke="#374151" stroke-width="1.5"/>
<text x="240" y="122" text-anchor="middle" font-size="12" font-family="sans-serif" fill="#374151">City A</text>
<line x1="500" y1="165" x2="560" y2="130" stroke="#374151" stroke-width="1.5"/>
<text x="570" y="122" text-anchor="middle" font-size="12" font-family="sans-serif" fill="#374151">City B</text>
<text x="650" y="120" text-anchor="middle" font-size="20">🧭</text>
<text x="400" y="370" text-anchor="middle" font-size="26" font-family="sans-serif" font-weight="800" fill="#064e3b">Maps: Types and Uses</text>`
  },
  'major-domains-earth-6': {
    bg: ['#eff6ff','#bfdbfe'], accent: '#0891b2',
    svg: `${[['🌍 Lithosphere','Land','#b45309',130,180],['💧 Hydrosphere','Water','#0891b2',320,180],['🌬️ Atmosphere','Air','#60a5fa',510,180],['🌿 Biosphere','Life','#16a34a',690,180]].map(([e,l,c,x,y])=>`<circle cx="${x}" cy="${y}" r="75" fill="${c}" opacity=".15" stroke="${c}" stroke-width="3"/>
<text x="${x}" y="${y-15}" text-anchor="middle" font-size="18">${e.split(' ')[0]}</text>
<text x="${x}" y="${y+15}" text-anchor="middle" font-size="14" font-family="sans-serif" font-weight="700" fill="${c}">${e.split(' ')[1]}</text>
<text x="${x}" y="${y+38}" text-anchor="middle" font-size="12" font-family="sans-serif" fill="#374151">${l}</text>`).join('')}
<text x="400" y="310" text-anchor="middle" font-size="15" font-family="sans-serif" fill="#374151">All four realms interact to support life on Earth</text>
<text x="400" y="385" text-anchor="middle" font-size="22" font-family="sans-serif" font-weight="800" fill="#0c4a6e">Major Domains of the Earth</text>`
  },
  'major-landforms-6': {
    bg: ['#f0fdf4','#bbf7d0'], accent: '#15803d',
    svg: `<rect x="80" y="300" width="640" height="40" rx="8" fill="#86efac"/>
<polygon points="200,300 280,120 360,300" fill="#6b7280"/>
<polygon points="350,300 420,100 490,300" fill="#4b5563"/>
<polygon points="460,300 520,160 580,300" fill="#6b7280"/>
<rect x="80" y="270" width="640" height="35" rx="6" fill="#fde68a" opacity=".7"/>
<text x="250" y="340" text-anchor="middle" font-size="14" font-family="sans-serif" font-weight="700" fill="#065f46">Mountain</text>
<text x="400" y="250" text-anchor="middle" font-size="14" font-family="sans-serif" font-weight="700" fill="#92400e">Plateau</text>
<text x="600" y="340" text-anchor="middle" font-size="14" font-family="sans-serif" font-weight="700" fill="#374151">Plains</text>
<text x="80" y="240" text-anchor="middle" font-size="22">🏔️</text>
<text x="400" y="220" text-anchor="middle" font-size="22">🪨</text>
<text x="680" y="300" text-anchor="middle" font-size="22">🌾</text>
<text x="400" y="390" text-anchor="middle" font-size="22" font-family="sans-serif" font-weight="800" fill="#14532d">Major Landforms of the Earth</text>`
  },
  'our-country-india-6': {
    bg: ['#fff7ed','#fed7aa'], accent: '#ea580c',
    svg: `<path d="M350,80 L420,80 L450,130 L480,140 L490,200 L520,230 L510,280 L480,320 L450,360 L420,350 L400,370 L380,350 L340,340 L310,300 L290,260 L300,210 L280,180 L300,140 L330,120 Z" fill="#fed7aa" stroke="#ea580c" stroke-width="3"/>
<text x="400" y="240" text-anchor="middle" font-size="32">🇮🇳</text>
<text x="200" y="180" text-anchor="middle" font-size="13" font-family="sans-serif" fill="#c2410c">Arabian Sea</text>
<text x="600" y="200" text-anchor="middle" font-size="13" font-family="sans-serif" fill="#0891b2">Bay of Bengal</text>
<text x="400" y="100" text-anchor="middle" font-size="13" font-family="sans-serif" fill="#374151">Himalayas ↑</text>
<text x="400" y="390" text-anchor="middle" font-size="24" font-family="sans-serif" font-weight="800" fill="#7c2d12">Our Country — India</text>`
  },
  'diversity-discrimination-6': {
    bg: ['#fdf4ff','#e9d5ff'], accent: '#7c3aed',
    svg: `<text x="400" y="120" text-anchor="middle" font-size="22" font-family="sans-serif" font-weight="700" fill="#5b21b6">Equal Rights for All</text>
${[['👨‍🦱',180,200],['👩',280,200],['👴',380,200],['🧕',480,200],['👦',580,200]].map(([e,x,y])=>`<circle cx="${x}" cy="${y}" r="48" fill="#f3e8ff" stroke="#7c3aed" stroke-width="2"/>
<text x="${x}" y="${y+16}" text-anchor="middle" font-size="38">${e}</text>`).join('')}
<rect x="100" y="290" width="600" height="60" rx="14" fill="#fce7f3" stroke="#e11d48" stroke-width="2"/>
<text x="400" y="315" text-anchor="middle" font-size="15" font-family="sans-serif" font-weight="700" fill="#9f1239">❌ Discrimination based on</text>
<text x="400" y="338" text-anchor="middle" font-size="13" font-family="sans-serif" fill="#be123c">caste, religion, gender, class is WRONG</text>
<text x="400" y="390" text-anchor="middle" font-size="22" font-family="sans-serif" font-weight="800" fill="#3b0764">Diversity and Discrimination</text>`
  },
  'rural-urban-livelihoods-6': {
    bg: ['#ecfdf5','#a7f3d0'], accent: '#16a34a',
    svg: `<rect x="80" y="280" width="280" height="50" rx="8" fill="#86efac"/>
<polygon points="130,280 170,180 210,280" fill="#4b5563"/>
<polygon points="200,280 240,200 280,280" fill="#6b7280"/>
<rect x="155" y="240" width="30" height="40" rx="4" fill="#92400e"/>
<text x="220" y="360" text-anchor="middle" font-size="14" font-family="sans-serif" font-weight="700" fill="#14532d">🌾 Rural</text>
<text x="220" y="380" text-anchor="middle" font-size="12" fill="#15803d">Farming • Fishing</text>
<rect x="440" y="280" width="280" height="50" rx="8" fill="#93c5fd"/>
<rect x="460" y="200" width="50" height="80" rx="4" fill="#1d4ed8" opacity=".8"/>
<rect x="530" y="160" width="50" height="120" rx="4" fill="#2563eb" opacity=".8"/>
<rect x="600" y="180" width="50" height="100" rx="4" fill="#1d4ed8" opacity=".8"/>
<rect x="670" y="220" width="35" height="60" rx="4" fill="#60a5fa" opacity=".8"/>
<text x="580" y="360" text-anchor="middle" font-size="14" font-family="sans-serif" font-weight="700" fill="#1e3a8a">🏙️ Urban</text>
<text x="580" y="380" text-anchor="middle" font-size="12" fill="#1d4ed8">Trade • Industry • Services</text>
<text x="400" y="410" text-anchor="middle" font-size="20" font-family="sans-serif" font-weight="800" fill="#064e3b">Rural and Urban Livelihoods</text>`
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
  const content = makeSvg(data);
  fs.writeFileSync(path.join(OUT, `${id}.svg`), content);
  count++;
}
console.log(`Generated ${count} SVGs in ${OUT}`);

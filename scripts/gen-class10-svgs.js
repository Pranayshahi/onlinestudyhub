const fs = require('fs');
const path = require('path');
const OUT = path.join(__dirname, '../public/img/topics/class-10');

const topics = {

  // ── MATHEMATICS ─────────────────────────────────────────────────
  'real-numbers': {
    bg: ['#eff6ff','#bfdbfe'], accent: '#2563eb',
    svg: `<circle cx="400" cy="195" r="150" fill="#dbeafe" stroke="#2563eb" stroke-width="3"/>
<circle cx="400" cy="195" r="110" fill="#bfdbfe" stroke="#3b82f6" stroke-width="2.5"/>
<circle cx="400" cy="195" r="72" fill="#93c5fd" stroke="#2563eb" stroke-width="2"/>
<circle cx="400" cy="195" r="38" fill="#60a5fa" stroke="#1d4ed8" stroke-width="2"/>
<text x="400" y="200" text-anchor="middle" font-size="13" font-weight="800" font-family="sans-serif" fill="#1e3a8a">Natural ℕ</text>
<text x="400" y="150" text-anchor="middle" font-size="13" font-weight="700" font-family="sans-serif" fill="#1e40af">Integers ℤ</text>
<text x="400" y="105" text-anchor="middle" font-size="13" font-weight="700" font-family="sans-serif" fill="#1d4ed8">Rational ℚ</text>
<text x="400" y="63" text-anchor="middle" font-size="13" font-weight="700" font-family="sans-serif" fill="#2563eb">Real ℝ (rational + irrational)</text>
<text x="220" y="195" text-anchor="middle" font-size="15" fill="#1d4ed8">π √2 √3</text>
<text x="590" y="195" text-anchor="middle" font-size="14" fill="#1e40af">Irrational</text>
<rect x="80" y="358" width="640" height="42" rx="10" fill="#1d4ed8"/>
<text x="400" y="384" text-anchor="middle" font-size="15" font-family="monospace" font-weight="800" fill="#fff">Fundamental Theorem of Arithmetic · Euclid's Division Lemma</text>`
  },

  'quadratic-equations': {
    bg: ['#fdf4ff','#f3e8ff'], accent: '#9333ea',
    svg: `<path d="M 60,340 Q 200,40 400,320 Q 600,40 740,340" fill="none" stroke="#9333ea" stroke-width="4"/>
<line x1="60" y1="320" x2="740" y2="320" stroke="#374151" stroke-width="1.5" stroke-dasharray="6,4"/>
<circle cx="283" cy="320" r="8" fill="#dc2626"/>
<circle cx="517" cy="320" r="8" fill="#dc2626"/>
<text x="283" y="345" text-anchor="middle" font-size="13" font-weight="700" font-family="sans-serif" fill="#dc2626">α</text>
<text x="517" y="345" text-anchor="middle" font-size="13" font-weight="700" font-family="sans-serif" fill="#dc2626">β</text>
<rect x="70" y="60" width="660" height="100" rx="14" fill="#f3e8ff" stroke="#9333ea" stroke-width="2"/>
<text x="400" y="93" text-anchor="middle" font-size="19" font-family="monospace" font-weight="900" fill="#6b21a8">ax² + bx + c = 0</text>
<text x="400" y="128" text-anchor="middle" font-size="17" font-family="monospace" font-weight="800" fill="#7e22ce">x = (−b ± √(b²−4ac)) / 2a</text>
<rect x="150" y="175" width="500" height="50" rx="10" fill="#ede9fe" stroke="#8b5cf6" stroke-width="1.5"/>
<text x="400" y="207" text-anchor="middle" font-size="14" font-family="sans-serif" font-weight="700" fill="#5b21b6">α+β = −b/a  ·  αβ = c/a  ·  Discriminant D = b²−4ac</text>
<text x="400" y="385" text-anchor="middle" font-size="26" font-family="sans-serif" font-weight="800" fill="#3b0764">Quadratic Equations</text>`
  },

  'polynomials-10': {
    bg: ['#fff7ed','#ffedd5'], accent: '#ea580c',
    svg: `<path d="M 60,300 Q 160,80 260,200 Q 360,320 460,120 Q 560,60 700,260" fill="none" stroke="#ea580c" stroke-width="4"/>
<line x1="60" y1="200" x2="740" y2="200" stroke="#374151" stroke-width="1.5" stroke-dasharray="6,4"/>
${[[185,200],[395,200],[558,200]].map(([x,y])=>`<circle cx="${x}" cy="${y}" r="8" fill="#dc2626"/>`).join('')}
<rect x="60" y="60" width="680" height="80" rx="14" fill="#ffedd5" stroke="#ea580c" stroke-width="2"/>
<text x="400" y="95" text-anchor="middle" font-size="16" font-family="monospace" font-weight="900" fill="#c2410c">p(x) = aₙxⁿ + aₙ₋₁xⁿ⁻¹ + … + a₀</text>
<text x="400" y="125" text-anchor="middle" font-size="14" font-family="sans-serif" font-weight="700" fill="#9a3412">Number of zeroes ≤ degree of polynomial</text>
<rect x="100" y="300" width="600" height="60" rx="12" fill="#fed7aa" stroke="#f97316" stroke-width="2"/>
<text x="400" y="328" text-anchor="middle" font-size="14" font-weight="800" font-family="sans-serif" fill="#7c2d12">Division Algorithm: p(x) = g(x)·q(x) + r(x)</text>
<text x="400" y="350" text-anchor="middle" font-size="13" font-family="sans-serif" fill="#9a3412">Geometrical meaning of zeroes = x-intercepts of graph</text>
<text x="400" y="385" text-anchor="middle" font-size="26" font-family="sans-serif" font-weight="800" fill="#7c2d12">Polynomials</text>`
  },

  'arithmetic-progressions': {
    bg: ['#f0fdf4','#dcfce7'], accent: '#16a34a',
    svg: `${Array.from({length:8},(_,i)=>{
const x=80+i*90, h=60+i*30, y=320-h;
return `<rect x="${x}" y="${y}" width="70" height="${h}" rx="8" fill="#16a34a" opacity="${0.5+i*0.07}"/>
<text x="${x+35}" y="${y-10}" text-anchor="middle" font-size="14" font-weight="700" font-family="sans-serif" fill="#14532d">a+${i}d</text>`;
}).join('')}
<rect x="60" y="60" width="680" height="80" rx="14" fill="#dcfce7" stroke="#16a34a" stroke-width="2"/>
<text x="400" y="93" text-anchor="middle" font-size="17" font-family="monospace" font-weight="900" fill="#14532d">aₙ = a + (n−1)d</text>
<text x="400" y="128" text-anchor="middle" font-size="17" font-family="monospace" font-weight="800" fill="#15803d">Sₙ = n/2 [2a + (n−1)d]</text>
<text x="400" y="385" text-anchor="middle" font-size="26" font-family="sans-serif" font-weight="800" fill="#14532d">Arithmetic Progressions</text>`
  },

  'intro-trigonometry': {
    bg: ['#fdf4ff','#ede9fe'], accent: '#7c3aed',
    svg: `<polygon points="200,340 580,340 580,120" fill="#ede9fe" stroke="#7c3aed" stroke-width="3"/>
<line x1="580" y1="120" x2="580" y2="340" stroke="#dc2626" stroke-width="3"/>
<text x="595" y="240" font-size="16" font-weight="800" font-family="sans-serif" fill="#dc2626">P (opp)</text>
<line x1="200" y1="340" x2="580" y2="340" stroke="#16a34a" stroke-width="3"/>
<text x="390" y="370" text-anchor="middle" font-size="16" font-weight="800" font-family="sans-serif" fill="#16a34a">B (adj)</text>
<line x1="200" y1="340" x2="580" y2="120" stroke="#7c3aed" stroke-width="3"/>
<text x="370" y="220" text-anchor="middle" font-size="16" font-weight="800" font-family="sans-serif" fill="#5b21b6">H (hyp)</text>
<path d="M 260,340 A 60,60 0 0,0 250,310" fill="none" stroke="#f97316" stroke-width="2.5"/>
<text x="290" y="330" font-size="15" font-weight="800" font-family="sans-serif" fill="#f97316">θ</text>
<rect x="60" y="60" width="680" height="55" rx="12" fill="#7c3aed"/>
<text x="400" y="93" text-anchor="middle" font-size="17" font-family="monospace" font-weight="900" fill="#fff">sin=P/H · cos=B/H · tan=P/B · sin²θ+cos²θ=1</text>`
  },

  'surface-areas-volumes': {
    bg: ['#f0f9ff','#e0f2fe'], accent: '#0284c7',
    svg: `<!-- Sphere -->
<circle cx="140" cy="210" r="85" fill="#e0f2fe" stroke="#0284c7" stroke-width="2.5"/>
<ellipse cx="140" cy="210" rx="85" ry="26" fill="none" stroke="#0284c7" stroke-width="1.5" stroke-dasharray="5,3"/>
<text x="140" y="238" text-anchor="middle" font-size="11" font-family="monospace" font-weight="700" fill="#075985">SA=4πr²  V=4πr³/3</text>
<!-- Cone -->
<polygon points="340,115 250,330 430,330" fill="#fce7f3" stroke="#ec4899" stroke-width="2.5"/>
<ellipse cx="340" cy="330" rx="90" ry="24" fill="#fbcfe8" stroke="#ec4899" stroke-width="2"/>
<text x="340" y="358" text-anchor="middle" font-size="11" font-family="monospace" font-weight="700" fill="#9d174d">CSA=πrl  V=⅓πr²h</text>
<!-- Cylinder -->
<ellipse cx="560" cy="148" rx="80" ry="22" fill="#bbf7d0" stroke="#16a34a" stroke-width="2.5"/>
<rect x="480" y="148" width="160" height="150" fill="#dcfce7" stroke="#16a34a" stroke-width="2.5"/>
<ellipse cx="560" cy="298" rx="80" ry="22" fill="#86efac" stroke="#16a34a" stroke-width="2.5"/>
<text x="560" y="335" text-anchor="middle" font-size="11" font-family="monospace" font-weight="700" fill="#14532d">TSA=2πr(r+h)  V=πr²h</text>
<!-- Frustum -->
<polygon points="650,200 720,200 700,320 670,320" fill="#fde68a" stroke="#ca8a04" stroke-width="2"/>
<text x="685" y="348" text-anchor="middle" font-size="11" font-family="monospace" font-weight="700" fill="#78350f">Frustum</text>
<text x="400" y="385" text-anchor="middle" font-size="24" font-family="sans-serif" font-weight="800" fill="#075985">Surface Areas and Volumes</text>`
  },

  'probability-10': {
    bg: ['#fdf4ff','#f3e8ff'], accent: '#a855f7',
    svg: `<!-- Probability scale -->
<rect x="80" y="170" width="640" height="40" rx="20" fill="#e9d5ff" stroke="#a855f7" stroke-width="2"/>
<rect x="80" y="170" width="320" height="40" rx="20" fill="#a855f7"/>
<text x="80" y="240" text-anchor="middle" font-size="14" font-weight="700" font-family="sans-serif" fill="#6b21a8">0 (Impossible)</text>
<text x="400" y="240" text-anchor="middle" font-size="14" font-weight="700" font-family="sans-serif" fill="#7c3aed">½</text>
<text x="720" y="240" text-anchor="middle" font-size="14" font-weight="700" font-family="sans-serif" fill="#6b21a8">1 (Certain)</text>
<!-- Dice and coin -->
<rect x="110" y="270" width="100" height="100" rx="14" fill="#ede9fe" stroke="#7c3aed" stroke-width="2.5"/>
${[[145,305],[195,305],[145,345],[195,345],[170,325]].map(([x,y])=>`<circle cx="${x}" cy="${y}" r="9" fill="#6d28d9"/>`).join('')}
<text x="160" y="390" text-anchor="middle" font-size="13" font-weight="700" font-family="sans-serif" fill="#6b21a8">Die: P=1/6</text>
<circle cx="420" cy="320" r="55" fill="#fce7f3" stroke="#ec4899" stroke-width="2.5"/>
<text x="400" y="315" text-anchor="middle" font-size="16" font-family="sans-serif" fill="#9d174d">H</text>
<text x="440" y="315" text-anchor="middle" font-size="16" font-family="sans-serif" fill="#be185d">T</text>
<text x="420" y="390" text-anchor="middle" font-size="13" font-weight="700" font-family="sans-serif" fill="#9d174d">Coin: P=1/2</text>
<rect x="60" y="65" width="680" height="65" rx="14" fill="#a855f7"/>
<text x="400" y="95" text-anchor="middle" font-size="17" font-family="monospace" font-weight="900" fill="#fff">P(E) = Favourable outcomes / Total outcomes</text>
<text x="400" y="120" text-anchor="middle" font-size="14" font-family="sans-serif" fill="#f3e8ff">P(E) + P(Ē) = 1  ·  0 ≤ P(E) ≤ 1</text>`
  },

  'pair-linear-equations-10': {
    bg: ['#f0fdf4','#dcfce7'], accent: '#16a34a',
    svg: `<!-- Grid -->
${Array.from({length:7},(_,i)=>`<line x1="${130+i*80}" y1="60" x2="${130+i*80}" y2="360" stroke="#d1fae5" stroke-width="1.2"/>`).join('')}
${Array.from({length:5},(_,i)=>`<line x1="90" y1="${80+i*70}" x2="720" y2="${80+i*70}" stroke="#d1fae5" stroke-width="1.2"/>`).join('')}
<line x1="90" y1="220" x2="720" y2="220" stroke="#374151" stroke-width="2"/>
<line x1="400" y1="60" x2="400" y2="360" stroke="#374151" stroke-width="2"/>
<!-- Line 1 -->
<line x1="100" y1="320" x2="700" y2="80" stroke="#16a34a" stroke-width="3"/>
<text x="710" y="77" font-size="13" font-weight="700" font-family="sans-serif" fill="#15803d">L₁</text>
<!-- Line 2 -->
<line x1="100" y1="120" x2="700" y2="310" stroke="#dc2626" stroke-width="3"/>
<text x="710" y="318" font-size="13" font-weight="700" font-family="sans-serif" fill="#dc2626">L₂</text>
<circle cx="385" cy="198" r="10" fill="#7c3aed"/>
<text x="350" y="185" font-size="13" font-weight="700" font-family="sans-serif" fill="#5b21b6">Solution</text>
<rect x="80" y="362" width="640" height="38" rx="10" fill="#16a34a"/>
<text x="400" y="387" text-anchor="middle" font-size="14" font-family="sans-serif" font-weight="800" fill="#fff">Consistent (unique/infinite) · Inconsistent (parallel, no solution)</text>`
  },

  'triangles-10': {
    bg: ['#fffbeb','#fef3c7'], accent: '#d97706',
    svg: `<!-- Two similar triangles -->
<polygon points="120,330 320,330 220,130" fill="#fef3c7" stroke="#d97706" stroke-width="2.5"/>
<polygon points="440,330 700,330 570,90" fill="#fed7aa" stroke="#ea580c" stroke-width="2.5"/>
<!-- Equal angle marks -->
<text x="135" y="325" font-size="16" fill="#7c3aed">∠A</text>
<text x="455" y="325" font-size="16" fill="#7c3aed">∠A′</text>
<text x="310" y="325" font-size="16" fill="#059669">∠B</text>
<text x="690" y="325" font-size="16" fill="#059669">∠B′</text>
<text x="400" y="67" text-anchor="middle" font-size="16" font-weight="800" font-family="sans-serif" fill="#ea580c">△ABC ~ △A′B′C′</text>
<rect x="60" y="355" width="680" height="44" rx="12" fill="#d97706"/>
<text x="400" y="382" text-anchor="middle" font-size="15" font-family="sans-serif" font-weight="800" fill="#fff">BPT · AA · SSS · SAS similarity · ratio of areas = ratio of squares of sides</text>`
  },

  'coordinate-geometry-10': {
    bg: ['#eff6ff','#dbeafe'], accent: '#3b82f6',
    svg: `<!-- Grid and axes -->
${Array.from({length:7},(_,i)=>`<line x1="${120+i*85}" y1="60" x2="${120+i*85}" y2="360" stroke="#dbeafe" stroke-width="1.2"/>`).join('')}
${Array.from({length:5},(_,i)=>`<line x1="80" y1="${80+i*70}" x2="720" y2="${80+i*70}" stroke="#dbeafe" stroke-width="1.2"/>`).join('')}
<line x1="80" y1="220" x2="720" y2="220" stroke="#374151" stroke-width="2.5"/>
<line x1="400" y1="60" x2="400" y2="360" stroke="#374151" stroke-width="2.5"/>
<circle cx="230" cy="290" r="8" fill="#dc2626"/>
<circle cx="570" cy="150" r="8" fill="#dc2626"/>
<line x1="230" y1="290" x2="570" y2="150" stroke="#3b82f6" stroke-width="2.5"/>
<circle cx="400" cy="220" r="8" fill="#7c3aed"/>
<text x="210" y="312" font-size="13" font-weight="700" font-family="sans-serif" fill="#dc2626">A(x₁,y₁)</text>
<text x="575" y="145" font-size="13" font-weight="700" font-family="sans-serif" fill="#dc2626">B(x₂,y₂)</text>
<text x="375" y="212" font-size="13" font-weight="700" font-family="sans-serif" fill="#5b21b6">M</text>
<rect x="60" y="362" width="680" height="42" rx="10" fill="#2563eb"/>
<text x="400" y="388" text-anchor="middle" font-size="14" font-family="monospace" font-weight="800" fill="#fff">d=√[(x₂−x₁)²+(y₂−y₁)²]  · Midpoint=((x₁+x₂)/2,(y₁+y₂)/2)  · Section formula</text>`
  },

  'circles-10': {
    bg: ['#f0f9ff','#e0f2fe'], accent: '#0284c7',
    svg: `<circle cx="400" cy="210" r="150" fill="#e0f2fe" stroke="#0284c7" stroke-width="3"/>
<circle cx="400" cy="210" r="4" fill="#075985"/>
<!-- Tangent -->
<line x1="90" y1="100" x2="550" y2="360" stroke="#dc2626" stroke-width="3"/>
<circle cx="320" cy="360" r="8" fill="#dc2626"/>
<text x="280" y="385" font-size="13" font-weight="700" font-family="sans-serif" fill="#dc2626">Point of tangency</text>
<!-- Radius to tangent point -->
<line x1="400" y1="210" x2="320" y2="360" stroke="#0284c7" stroke-width="2.5" stroke-dasharray="6,3"/>
<!-- Right angle mark -->
<rect x="308" y="349" width="14" height="14" fill="none" stroke="#0284c7" stroke-width="2"/>
<!-- Chord and secant -->
<line x1="140" y1="280" x2="660" y2="280" stroke="#7c3aed" stroke-width="2.5"/>
<text x="670" y="285" font-size="13" font-weight="700" font-family="sans-serif" fill="#5b21b6">Chord</text>
<rect x="60" y="60" width="680" height="55" rx="12" fill="#0284c7"/>
<text x="400" y="93" text-anchor="middle" font-size="16" font-family="sans-serif" font-weight="900" fill="#fff">Tangent ⊥ radius at point of contact · Equal tangents from external point</text>`
  },

  'applications-trigonometry-10': {
    bg: ['#fdf4ff','#ede9fe'], accent: '#7c3aed',
    svg: `<!-- Tower and angle of elevation -->
<line x1="100" y1="350" x2="700" y2="350" stroke="#374151" stroke-width="2.5"/>
<line x1="500" y1="350" x2="500" y2="100" stroke="#7c3aed" stroke-width="4"/>
<line x1="100" y1="350" x2="500" y2="100" stroke="#dc2626" stroke-width="2.5"/>
<path d="M 160,350 A 60,60 0 0,0 148,320" fill="none" stroke="#f97316" stroke-width="2.5"/>
<text x="190" y="340" font-size="15" font-weight="800" font-family="sans-serif" fill="#f97316">θ (elevation)</text>
<!-- Labels -->
<text x="510" y="230" font-size="16" font-weight="800" font-family="sans-serif" fill="#5b21b6">h</text>
<text x="300" y="375" text-anchor="middle" font-size="16" font-weight="800" font-family="sans-serif" fill="#374151">d</text>
<text x="515" y="90" font-size="14" font-family="sans-serif" fill="#7c3aed">Tower</text>
<!-- Depression angle on top -->
<line x1="500" y1="100" x2="700" y2="200" stroke="#16a34a" stroke-width="2.5" stroke-dasharray="6,3"/>
<text x="600" y="130" font-size="14" font-weight="700" font-family="sans-serif" fill="#15803d">∠ depression</text>
<rect x="80" y="62" width="680" height="42" rx="10" fill="#7c3aed"/>
<text x="400" y="89" text-anchor="middle" font-size="16" font-family="monospace" font-weight="900" fill="#fff">tan θ = h / d  →  h = d · tan θ</text>`
  },

  'statistics-10': {
    bg: ['#f0fdf4','#dcfce7'], accent: '#16a34a',
    svg: `<!-- Ogive curve -->
<line x1="80" y1="350" x2="720" y2="350" stroke="#374151" stroke-width="2"/>
<line x1="80" y1="80" x2="80" y2="350" stroke="#374151" stroke-width="2"/>
<path d="M 100,340 Q 200,310 300,260 Q 420,190 520,140 Q 620,110 700,95" fill="none" stroke="#16a34a" stroke-width="3.5"/>
${[[130,335],[230,305],[340,250],[450,175],[570,125],[680,98]].map(([x,y])=>`<circle cx="${x}" cy="${y}" r="6" fill="#16a34a"/>`).join('')}
<!-- Median line -->
<line x1="80" y1="220" x2="720" y2="220" stroke="#dc2626" stroke-width="2" stroke-dasharray="7,4"/>
<text x="730" y="224" font-size="13" font-weight="700" font-family="sans-serif" fill="#dc2626">50%</text>
<rect x="80" y="358" width="640" height="42" rx="10" fill="#15803d"/>
<text x="400" y="385" text-anchor="middle" font-size="14" font-family="sans-serif" font-weight="800" fill="#fff">Mean (direct/assumed) · Median (ogive) · Mode (histogram) · Cumulative frequency</text>`
  },

  // ── CHEMISTRY ───────────────────────────────────────────────────
  'chemical-reactions': {
    bg: ['#f0fdf4','#dcfce7'], accent: '#16a34a',
    svg: `<!-- Reaction arrow -->
<rect x="80" y="155" width="240" height="110" rx="16" fill="#dcfce7" stroke="#16a34a" stroke-width="2.5"/>
<text x="200" y="195" text-anchor="middle" font-size="15" font-weight="800" font-family="sans-serif" fill="#14532d">Reactants</text>
<text x="200" y="225" text-anchor="middle" font-size="16" font-family="monospace" font-weight="700" fill="#15803d">A + B</text>
<line x1="320" y1="210" x2="480" y2="210" stroke="#374151" stroke-width="3"/>
<polygon points="478,202 496,210 478,218" fill="#374151"/>
<text x="400" y="198" text-anchor="middle" font-size="12" font-family="sans-serif" fill="#6b7280">heat/light</text>
<rect x="480" y="155" width="240" height="110" rx="16" fill="#bbf7d0" stroke="#22c55e" stroke-width="2.5"/>
<text x="600" y="195" text-anchor="middle" font-size="15" font-weight="800" font-family="sans-serif" fill="#14532d">Products</text>
<text x="600" y="225" text-anchor="middle" font-size="16" font-family="monospace" font-weight="700" fill="#15803d">C + D</text>
<!-- Types -->
<rect x="80" y="292" width="640" height="80" rx="12" fill="#f0fdf4" stroke="#16a34a" stroke-width="1.5"/>
<text x="400" y="318" text-anchor="middle" font-size="14" font-weight="800" font-family="sans-serif" fill="#14532d">Types of Reactions</text>
<text x="400" y="342" text-anchor="middle" font-size="13" font-family="sans-serif" fill="#15803d">Combination · Decomposition · Displacement · Double displacement</text>
<text x="400" y="362" text-anchor="middle" font-size="13" font-family="sans-serif" fill="#15803d">Oxidation · Reduction · Exothermic · Endothermic</text>
<rect x="80" y="65" width="640" height="68" rx="14" fill="#16a34a"/>
<text x="400" y="97" text-anchor="middle" font-size="17" font-family="monospace" font-weight="900" fill="#fff">Mg + O₂ → MgO  |  Zn + H₂SO₄ → ZnSO₄ + H₂↑</text>
<text x="400" y="122" text-anchor="middle" font-size="14" font-family="sans-serif" fill="#dcfce7">Balancing equations: Law of conservation of mass</text>`
  },

  'acids-bases-salts-10': {
    bg: ['#fef2f2','#fee2e2'], accent: '#dc2626',
    svg: `<!-- pH scale -->
<rect x="60" y="80" width="680" height="52" rx="26" fill="linear-gradient(90deg,#dc2626,#f97316,#fbbf24,#4ade80,#22c55e,#3b82f6,#7c3aed)"/>
${['#dc2626','#ef4444','#f97316','#fbbf24','#a3e635','#4ade80','#22c55e','#0891b2','#3b82f6','#6366f1','#7c3aed','#8b5cf6','#6d28d9','#4c1d95'].map((col,i)=>`<rect x="${60+i*48}" y="80" width="48" height="52" fill="${col}" opacity=".85"/><text x="${84+i*48}" y="112" text-anchor="middle" font-size="13" font-weight="700" font-family="sans-serif" fill="#fff">${i}</text>`).join('')}
<text x="60" y="150" font-size="13" font-weight="700" font-family="sans-serif" fill="#dc2626">Acidic ◄</text>
<text x="400" y="150" text-anchor="middle" font-size="13" font-weight="700" font-family="sans-serif" fill="#374151">pH 7 = Neutral</text>
<text x="740" y="150" text-anchor="end" font-size="13" font-weight="700" font-family="sans-serif" fill="#7c3aed">► Basic</text>
<!-- Indicators -->
<rect x="80" y="170" width="640" height="75" rx="12" fill="#fef2f2" stroke="#dc2626" stroke-width="1.5"/>
<text x="400" y="197" text-anchor="middle" font-size="14" font-weight="800" font-family="sans-serif" fill="#7f1d1d">Indicators</text>
<text x="400" y="220" text-anchor="middle" font-size="13" font-family="sans-serif" fill="#991b1b">Litmus: acid→red, base→blue  ·  Phenolphthalein  ·  Methyl orange</text>
<text x="400" y="238" text-anchor="middle" font-size="12" font-family="sans-serif" fill="#b91c1c">Neutralisation: Acid + Base → Salt + Water</text>
<!-- Salts -->
<rect x="80" y="265" width="640" height="80" rx="12" fill="#fff7ed" stroke="#f97316" stroke-width="1.5"/>
<text x="400" y="292" text-anchor="middle" font-size="14" font-weight="800" font-family="sans-serif" fill="#7c2d12">Common Salts</text>
<text x="400" y="316" text-anchor="middle" font-size="13" font-family="sans-serif" fill="#9a3412">NaCl · NaOH · Ca(OH)₂ · Baking soda NaHCO₃ · Washing soda Na₂CO₃</text>
<text x="400" y="338" text-anchor="middle" font-size="12" font-family="sans-serif" fill="#9a3412">Plaster of Paris: CaSO₄·½H₂O</text>
<text x="400" y="385" text-anchor="middle" font-size="24" font-family="sans-serif" font-weight="800" fill="#7f1d1d">Acids, Bases and Salts</text>`
  },

  'metals-non-metals': {
    bg: ['#1e1b4b','#312e81'], accent: '#818cf8',
    svg: `<rect x="0" y="0" width="800" height="420" fill="#1e1b4b"/>
<!-- Metal properties -->
<rect x="60" y="70" width="310" height="270" rx="16" fill="rgba(129,140,248,0.12)" stroke="#818cf8" stroke-width="2"/>
<text x="215" y="105" text-anchor="middle" font-size="16" font-weight="900" font-family="sans-serif" fill="#818cf8">Metals</text>
<text x="215" y="135" text-anchor="middle" font-size="13" font-family="sans-serif" fill="#a5b4fc">Lustrous · Hard · Ductile</text>
<text x="215" y="158" text-anchor="middle" font-size="13" font-family="sans-serif" fill="#a5b4fc">Malleable · Good conductor</text>
<text x="215" y="181" text-anchor="middle" font-size="13" font-family="sans-serif" fill="#a5b4fc">High melting/boiling point</text>
<text x="215" y="210" text-anchor="middle" font-size="14" font-weight="700" font-family="monospace" fill="#c7d2fe">Fe Cu Al Zn Na K</text>
<text x="215" y="245" text-anchor="middle" font-size="13" font-family="sans-serif" fill="#818cf8">Reactivity series:</text>
<text x="215" y="268" text-anchor="middle" font-size="12" font-family="monospace" fill="#a5b4fc">K Na Ca Mg Al Zn Fe Cu Ag Au</text>
<!-- Non-metal properties -->
<rect x="430" y="70" width="310" height="270" rx="16" fill="rgba(251,191,36,0.1)" stroke="#fbbf24" stroke-width="2"/>
<text x="585" y="105" text-anchor="middle" font-size="16" font-weight="900" font-family="sans-serif" fill="#fbbf24">Non-metals</text>
<text x="585" y="135" text-anchor="middle" font-size="13" font-family="sans-serif" fill="#fde68a">Brittle · Non-lustrous</text>
<text x="585" y="158" text-anchor="middle" font-size="13" font-family="sans-serif" fill="#fde68a">Poor conductor (except graphite)</text>
<text x="585" y="181" text-anchor="middle" font-size="13" font-family="sans-serif" fill="#fde68a">Low melting point</text>
<text x="585" y="210" text-anchor="middle" font-size="14" font-weight="700" font-family="monospace" fill="#fef9c3">C S O N P Cl</text>
<text x="585" y="245" text-anchor="middle" font-size="13" font-family="sans-serif" fill="#fbbf24">Ionic bond: metal + non-metal</text>
<text x="585" y="270" text-anchor="middle" font-size="13" font-family="sans-serif" fill="#fde68a">Covalent: non-metal + non-metal</text>
<text x="400" y="385" text-anchor="middle" font-size="24" font-family="sans-serif" font-weight="800" fill="#818cf8">Metals and Non-metals</text>`
  },

  'carbon-compounds': {
    bg: ['#0f172a','#1e293b'], accent: '#34d399',
    svg: `<rect x="0" y="0" width="800" height="420" fill="#0f172a"/>
<!-- Carbon atom centre -->
<circle cx="400" cy="210" r="35" fill="#34d399" stroke="#059669" stroke-width="3"/>
<text x="400" y="215" text-anchor="middle" font-size="16" font-weight="900" font-family="sans-serif" fill="#064e3b">C</text>
<!-- 4 bonds -->
${[[400,120,'H'],[490,260,'H'],[310,260,'H'],[400,295,'H']].map(([x,y,el])=>`
<line x1="400" y1="210" x2="${x}" y2="${y}" stroke="#34d399" stroke-width="3"/>
<circle cx="${x}" cy="${y}" r="22" fill="#fbbf24" stroke="#d97706" stroke-width="2"/>
<text x="${x}" y="${y+5}" text-anchor="middle" font-size="14" font-weight="800" font-family="sans-serif" fill="#78350f">${el}</text>`).join('')}
<text x="460" y="135" font-size="13" font-weight="700" font-family="sans-serif" fill="#34d399">CH₄ = Methane</text>
<!-- Homologous series -->
<rect x="520" y="80" width="240" height="185" rx="14" fill="rgba(52,211,153,0.1)" stroke="#34d399" stroke-width="1.5"/>
<text x="640" y="112" text-anchor="middle" font-size="14" font-weight="800" font-family="sans-serif" fill="#34d399">Homologous Series</text>
<text x="640" y="138" text-anchor="middle" font-size="13" font-family="monospace" fill="#6ee7b7">CH₄ Methane</text>
<text x="640" y="160" text-anchor="middle" font-size="13" font-family="monospace" fill="#6ee7b7">C₂H₆ Ethane</text>
<text x="640" y="182" text-anchor="middle" font-size="13" font-family="monospace" fill="#6ee7b7">C₃H₈ Propane</text>
<text x="640" y="204" text-anchor="middle" font-size="13" font-family="monospace" fill="#6ee7b7">C₄H₁₀ Butane</text>
<text x="640" y="230" text-anchor="middle" font-size="12" font-family="sans-serif" fill="#34d399">Differ by −CH₂− (14u)</text>
<rect x="40" y="300" width="440" height="45" rx="10" fill="rgba(52,211,153,0.1)" stroke="#34d399" stroke-width="1.5"/>
<text x="260" y="328" text-anchor="middle" font-size="13" font-family="sans-serif" fill="#6ee7b7">Functional groups: −OH · −COOH · −CHO · −CO− · Halogens</text>
<text x="400" y="390" text-anchor="middle" font-size="24" font-family="sans-serif" font-weight="800" fill="#34d399">Carbon and Its Compounds</text>`
  },

  'periodic-classification-10': {
    bg: ['#1e1b4b','#312e81'], accent: '#a78bfa',
    svg: `<rect x="0" y="0" width="800" height="420" fill="#1e1b4b"/>
<!-- Periodic table mini -->
${Array.from({length:18},(_,col)=>Array.from({length:4},(_,row)=>{
const x=42+col*40, y=70+row*52;
const colors=['#818cf8','#6366f1','#4f46e5','#4338ca'];
return `<rect x="${x}" y="${y}" width="36" height="46" rx="4" fill="${colors[row]}" opacity=".6" stroke="#a78bfa" stroke-width="0.8"/>`;
}).join('')).join('')}
<!-- Element highlight -->
<rect x="82" y="70" width="36" height="46" rx="4" fill="#fbbf24" stroke="#f59e0b" stroke-width="2"/>
<text x="100" y="98" text-anchor="middle" font-size="11" font-weight="800" font-family="monospace" fill="#78350f">H</text>
<!-- Key info boxes -->
<rect x="60" y="295" width="680" height="80" rx="12" fill="rgba(167,139,250,0.12)" stroke="#a78bfa" stroke-width="1.5"/>
<text x="400" y="322" text-anchor="middle" font-size="14" font-weight="800" font-family="sans-serif" fill="#a78bfa">Modern Periodic Law</text>
<text x="400" y="346" text-anchor="middle" font-size="13" font-family="sans-serif" fill="#c4b5fd">Properties are periodic functions of atomic number</text>
<text x="400" y="368" text-anchor="middle" font-size="13" font-family="sans-serif" fill="#c4b5fd">Periods: 7 · Groups: 18 · Döbereiner · Newlands · Mendeleev</text>
<text x="400" y="390" text-anchor="middle" font-size="22" font-family="sans-serif" font-weight="800" fill="#a78bfa">Periodic Classification of Elements</text>`
  },

  // ── PHYSICS ─────────────────────────────────────────────────────
  'electricity': {
    bg: ['#0f172a','#1e293b'], accent: '#fbbf24',
    svg: `<rect x="0" y="0" width="800" height="420" fill="#0f172a"/>
<!-- Circuit diagram -->
<!-- Battery -->
<line x1="120" y1="160" x2="120" y2="280" stroke="#fbbf24" stroke-width="3"/>
<line x1="120" y1="200" x2="160" y2="200" stroke="#fbbf24" stroke-width="5"/>
<line x1="120" y1="240" x2="155" y2="240" stroke="#fbbf24" stroke-width="2.5"/>
<text x="90" y="225" font-size="12" font-family="sans-serif" fill="#fbbf24">EMF</text>
<!-- Wires -->
<line x1="120" y1="160" x2="550" y2="160" stroke="#34d399" stroke-width="3"/>
<line x1="120" y1="280" x2="550" y2="280" stroke="#34d399" stroke-width="3"/>
<!-- Resistor -->
<rect x="300" y="148" width="120" height="24" rx="4" fill="#374151" stroke="#fbbf24" stroke-width="2"/>
<text x="360" y="165" text-anchor="middle" font-size="12" font-family="sans-serif" fill="#fbbf24">R</text>
<!-- Bulb -->
<circle cx="490" cy="220" r="30" fill="none" stroke="#fbbf24" stroke-width="2.5"/>
<line x1="490" y1="190" x2="490" y2="160" stroke="#fbbf24" stroke-width="2.5"/>
<line x1="490" y1="250" x2="490" y2="280" stroke="#fbbf24" stroke-width="2.5"/>
<!-- Arrows for current -->
<polygon points="218,155 235,160 218,165" fill="#34d399"/>
<polygon points="218,275 235,280 218,285" fill="#34d399"/>
<!-- Formulas -->
<rect x="550" y="100" width="210" height="200" rx="14" fill="rgba(251,191,36,0.1)" stroke="#fbbf24" stroke-width="1.5"/>
<text x="655" y="130" text-anchor="middle" font-size="14" font-weight="800" font-family="sans-serif" fill="#fbbf24">Ohm's Law</text>
<text x="655" y="160" text-anchor="middle" font-size="18" font-family="monospace" font-weight="900" fill="#fde68a">V = IR</text>
<text x="655" y="195" text-anchor="middle" font-size="13" font-family="monospace" fill="#fbbf24">P = VI = I²R</text>
<text x="655" y="220" text-anchor="middle" font-size="13" font-family="monospace" fill="#fbbf24">R=ρL/A</text>
<text x="655" y="248" text-anchor="middle" font-size="12" font-family="sans-serif" fill="#fbbf24">Series: R=R₁+R₂</text>
<text x="655" y="272" text-anchor="middle" font-size="12" font-family="sans-serif" fill="#fbbf24">Parallel: 1/R=1/R₁+1/R₂</text>
<text x="400" y="390" text-anchor="middle" font-size="26" font-family="sans-serif" font-weight="800" fill="#fbbf24">Electricity</text>`
  },

  'light-reflection-refraction': {
    bg: ['#0f172a','#1e293b'], accent: '#38bdf8',
    svg: `<rect x="0" y="0" width="800" height="420" fill="#0f172a"/>
<!-- Mirror/lens line -->
<line x1="400" y1="60" x2="400" y2="370" stroke="#64748b" stroke-width="3"/>
<!-- Incident ray -->
<line x1="100" y1="100" x2="400" y2="220" stroke="#fbbf24" stroke-width="3"/>
<polygon points="386,214 400,220 390,230" fill="#fbbf24"/>
<!-- Reflected ray -->
<line x1="400" y1="220" x2="100" y2="340" stroke="#38bdf8" stroke-width="3"/>
<polygon points="112,338 100,340 108,330" fill="#38bdf8"/>
<!-- Refracted ray -->
<line x1="400" y1="220" x2="680" y2="370" stroke="#34d399" stroke-width="3"/>
<polygon points="669,365 680,370 672,358" fill="#34d399"/>
<!-- Normal -->
<line x1="200" y1="220" x2="600" y2="220" stroke="#475569" stroke-width="1.5" stroke-dasharray="7,4"/>
<!-- Angle labels -->
<text x="320" y="195" font-size="14" font-weight="700" font-family="sans-serif" fill="#fbbf24">∠i</text>
<text x="320" y="248" font-size="14" font-weight="700" font-family="sans-serif" fill="#38bdf8">∠r</text>
<text x="440" y="248" font-size="14" font-weight="700" font-family="sans-serif" fill="#34d399">∠R</text>
<!-- Snell's law -->
<rect x="440" y="75" width="320" height="75" rx="12" fill="rgba(56,189,248,0.1)" stroke="#38bdf8" stroke-width="1.5"/>
<text x="600" y="104" text-anchor="middle" font-size="15" font-weight="800" font-family="sans-serif" fill="#38bdf8">Snell's Law</text>
<text x="600" y="132" text-anchor="middle" font-size="15" font-family="monospace" font-weight="700" fill="#7dd3fc">n₁sin i = n₂sin R</text>
<!-- Mirror formula -->
<rect x="440" y="168" width="320" height="75" rx="12" fill="rgba(56,189,248,0.1)" stroke="#38bdf8" stroke-width="1.5"/>
<text x="600" y="197" text-anchor="middle" font-size="15" font-weight="800" font-family="sans-serif" fill="#38bdf8">Mirror/Lens Formula</text>
<text x="600" y="226" text-anchor="middle" font-size="15" font-family="monospace" font-weight="700" fill="#7dd3fc">1/f = 1/v + 1/u</text>
<text x="400" y="390" text-anchor="middle" font-size="22" font-family="sans-serif" font-weight="800" fill="#38bdf8">Light — Reflection and Refraction</text>`
  },

  'magnetic-effects': {
    bg: ['#0f172a','#1e293b'], accent: '#f472b6',
    svg: `<rect x="0" y="0" width="800" height="420" fill="#0f172a"/>
<!-- Solenoid coil -->
${Array.from({length:10},(_,i)=>`<ellipse cx="${180+i*44}" cy="210" rx="18" ry="40" fill="none" stroke="#64748b" stroke-width="2.5" opacity="${i%2===0?1:0.5}"/>`).join('')}
<line x1="90" y1="210" x2="180" y2="210" stroke="#f472b6" stroke-width="3"/>
<line x1="576" y1="210" x2="700" y2="210" stroke="#f472b6" stroke-width="3"/>
<!-- Magnetic field lines -->
${[-60,-30,0,30,60].map(dy=>`<path d="M 700,${210+dy} Q 750,${210+dy} 760,210 Q 750,${210-dy} 700,${210-dy}" fill="none" stroke="#f472b6" stroke-width="1.5" opacity=".6"/>`).join('')}
<!-- N S poles -->
<text x="80" y="215" text-anchor="middle" font-size="22" font-weight="900" font-family="sans-serif" fill="#60a5fa">S</text>
<text x="720" y="215" text-anchor="middle" font-size="22" font-weight="900" font-family="sans-serif" fill="#f87171">N</text>
<!-- Fleming's rule -->
<rect x="60" y="295" width="680" height="80" rx="12" fill="rgba(244,114,182,0.1)" stroke="#f472b6" stroke-width="1.5"/>
<text x="400" y="325" text-anchor="middle" font-size="14" font-weight="800" font-family="sans-serif" fill="#f472b6">Fleming's Rules</text>
<text x="400" y="350" text-anchor="middle" font-size="13" font-family="sans-serif" fill="#fce7f3">Left-hand (motor: F=BIl) · Right-hand (generator: induced EMF)</text>
<text x="400" y="372" text-anchor="middle" font-size="13" font-family="sans-serif" fill="#fce7f3">AC generator · DC motor · Electromagnetic induction (Faraday)</text>
<text x="400" y="63" text-anchor="middle" font-size="24" font-family="sans-serif" font-weight="800" fill="#f472b6">Magnetic Effects of Electric Current</text>`
  },

  'human-eye-10': {
    bg: ['#f0f9ff','#e0f2fe'], accent: '#0284c7',
    svg: `<!-- Eye diagram -->
<ellipse cx="320" cy="210" rx="190" ry="150" fill="#e0f2fe" stroke="#0284c7" stroke-width="3"/>
<circle cx="440" cy="210" r="55" fill="#bae6fd" stroke="#0369a1" stroke-width="2"/>
<circle cx="450" cy="210" r="32" fill="#0f172a"/>
<circle cx="460" cy="200" r="8" fill="#fff" opacity=".8"/>
<!-- Lens label -->
<ellipse cx="390" cy="210" rx="12" ry="45" fill="#fbbf24" stroke="#d97706" stroke-width="1.5"/>
<text x="370" y="275" font-size="12" font-family="sans-serif" fill="#78350f">Lens</text>
<!-- Cornea -->
<path d="M 480,170 Q 510,210 480,250" fill="none" stroke="#0284c7" stroke-width="2.5"/>
<text x="520" y="215" font-size="12" font-family="sans-serif" fill="#0369a1">Cornea</text>
<!-- Retina -->
<text x="180" y="215" font-size="12" font-family="sans-serif" fill="#0369a1">Retina</text>
<!-- Defects boxes -->
<rect x="530" y="80" width="230" height="230" rx="14" fill="#e0f2fe" stroke="#0284c7" stroke-width="1.5"/>
<text x="645" y="108" text-anchor="middle" font-size="14" font-weight="800" font-family="sans-serif" fill="#075985">Eye Defects</text>
<text x="645" y="135" text-anchor="middle" font-size="13" font-family="sans-serif" fill="#0369a1">Myopia (near-sighted)</text>
<text x="645" y="155" text-anchor="middle" font-size="12" font-family="sans-serif" fill="#374151">Concave lens corrects</text>
<text x="645" y="180" text-anchor="middle" font-size="13" font-family="sans-serif" fill="#0369a1">Hypermetropia (far)</text>
<text x="645" y="200" text-anchor="middle" font-size="12" font-family="sans-serif" fill="#374151">Convex lens corrects</text>
<text x="645" y="225" text-anchor="middle" font-size="13" font-family="sans-serif" fill="#0369a1">Presbyopia</text>
<text x="645" y="245" text-anchor="middle" font-size="13" font-family="sans-serif" fill="#0369a1">Scattering: blue sky</text>
<text x="645" y="270" text-anchor="middle" font-size="12" font-family="sans-serif" fill="#374151">Rainbow · Dispersion</text>
<text x="320" y="390" text-anchor="middle" font-size="22" font-family="sans-serif" font-weight="800" fill="#075985">The Human Eye and the Colourful World</text>`
  },

  'sources-energy-10': {
    bg: ['#fef9c3','#fde68a'], accent: '#ca8a04',
    svg: `${[['☀️','Solar','Photovoltaic cells','#f59e0b',80,80],['💨','Wind','Turbines','#0284c7',280,80],['💧','Hydro','Dams','#16a34a',480,80],['🔥','Fossil Fuels','Coal/Oil/Gas (non-renew)','#dc2626',680,80],['⚛️','Nuclear','Fission reaction','#7c3aed',80,255],['🌋','Geothermal','Earth\'s heat','#ea580c',280,255],['🌊','Tidal','Ocean waves','#0891b2',480,255],['🌿','Biomass','Biogas · Wood','#15803d',680,255]].map(([icon,name,desc,col,x,y])=>`
<rect x="${x-60}" y="${y}" width="155" height="130" rx="14" fill="${col}18" stroke="${col}" stroke-width="2"/>
<text x="${x+18}" y="${y+38}" text-anchor="middle" font-size="26" font-family="sans-serif">${icon}</text>
<text x="${x+18}" y="${y+72}" text-anchor="middle" font-size="13" font-weight="800" font-family="sans-serif" fill="${col}">${name}</text>
<text x="${x+18}" y="${y+98}" text-anchor="middle" font-size="11" font-family="sans-serif" fill="#374151">${desc}</text>`).join('')}
<text x="400" y="410" text-anchor="middle" font-size="22" font-family="sans-serif" font-weight="800" fill="#78350f">Sources of Energy</text>`
  },

  // ── BIOLOGY ─────────────────────────────────────────────────────
  'life-processes': {
    bg: ['#f0fdf4','#dcfce7'], accent: '#16a34a',
    svg: `${[['🌱','Nutrition','Autotrophic (photosynthesis) / Heterotrophic','#16a34a',110,90],['🫁','Respiration','Aerobic: C₆H₁₂O₆+O₂→CO₂+H₂O+ATP','#3b82f6',420,90],['🩸','Transportation','Heart · Blood vessels · Xylem · Phloem','#dc2626',110,255],['🚽','Excretion','Kidneys · Nephron · Dialysis · Stomata','#9333ea',420,255]].map(([icon,proc,desc,col,x,y])=>`
<rect x="${x}" y="${y}" width="270" height="140" rx="16" fill="${col}11" stroke="${col}" stroke-width="2.5"/>
<text x="${x+135}" y="${y+42}" text-anchor="middle" font-size="28" font-family="sans-serif">${icon}</text>
<text x="${x+135}" y="${y+78}" text-anchor="middle" font-size="14" font-weight="800" font-family="sans-serif" fill="${col}">${proc}</text>
<text x="${x+135}" y="${y+108}" text-anchor="middle" font-size="11" font-family="sans-serif" fill="#374151">${desc}</text>`).join('')}
<text x="400" y="68" text-anchor="middle" font-size="26" font-family="sans-serif" font-weight="800" fill="#14532d">Life Processes</text>`
  },

  'heredity-evolution': {
    bg: ['#fdf4ff','#f3e8ff'], accent: '#9333ea',
    svg: `<!-- DNA double helix -->
${Array.from({length:8},(_,i)=>{
const y=70+i*38, phase=i*0.8;
const x1=(80+Math.sin(phase)*80).toFixed(0), x2=(80+Math.sin(phase+Math.PI)*80).toFixed(0);
return `<ellipse cx="${(parseInt(x1)+parseInt(x2))/2}" cy="${y+19}" rx="80" ry="8" fill="none" stroke="#e9d5ff" stroke-width="1.5"/>
<circle cx="${x1}" cy="${y}" r="12" fill="#9333ea" opacity=".7"/>
<circle cx="${x2}" cy="${y}" r="12" fill="#ec4899" opacity=".7"/>
<line x1="${x1}" y1="${y}" x2="${x2}" y2="${y}" stroke="#c4b5fd" stroke-width="2" stroke-dasharray="4,3"/>`;
}).join('')}
<!-- Mendel's laws -->
<rect x="220" y="70" width="540" height="245" rx="16" fill="#f3e8ff" stroke="#9333ea" stroke-width="2"/>
<text x="490" y="104" text-anchor="middle" font-size="16" font-weight="900" font-family="sans-serif" fill="#6b21a8">Mendel's Laws</text>
<text x="490" y="134" text-anchor="middle" font-size="13" font-weight="700" font-family="sans-serif" fill="#7e22ce">Law of Dominance</text>
<text x="490" y="155" text-anchor="middle" font-size="12" font-family="sans-serif" fill="#374151">Dominant trait masks recessive</text>
<text x="490" y="185" text-anchor="middle" font-size="13" font-weight="700" font-family="sans-serif" fill="#7e22ce">Law of Segregation</text>
<text x="490" y="206" text-anchor="middle" font-size="12" font-family="sans-serif" fill="#374151">Alleles separate during gamete formation</text>
<text x="490" y="236" text-anchor="middle" font-size="13" font-weight="700" font-family="sans-serif" fill="#7e22ce">Evolution (Darwin)</text>
<text x="490" y="257" text-anchor="middle" font-size="12" font-family="sans-serif" fill="#374151">Natural selection · Inherited variation</text>
<text x="490" y="282" text-anchor="middle" font-size="12" font-family="sans-serif" fill="#374151">Homologous · Analogous organs</text>
<text x="400" y="350" text-anchor="middle" font-size="24" font-family="sans-serif" font-weight="800" fill="#581c87">Heredity and Evolution</text>`
  },

  'control-coordination-10': {
    bg: ['#0f172a','#1e293b'], accent: '#f472b6',
    svg: `<rect x="0" y="0" width="800" height="420" fill="#0f172a"/>
<!-- Neuron -->
<path d="M 60,200 L 200,200" stroke="#f472b6" stroke-width="3"/>
${[-30,-15,0,15,30].map(dy=>`<line x1="${90+Math.abs(dy)*2}" y1="200" x2="${70}" y2="${200+dy}" stroke="#f472b6" stroke-width="2" opacity=".7"/>`).join('')}
<!-- Cell body -->
<circle cx="230" cy="200" r="40" fill="#1e293b" stroke="#f472b6" stroke-width="3"/>
<text x="230" y="195" text-anchor="middle" font-size="13" font-weight="700" font-family="sans-serif" fill="#f472b6">Cell</text>
<text x="230" y="213" text-anchor="middle" font-size="12" font-family="sans-serif" fill="#fce7f3">body</text>
<!-- Axon -->
<line x1="270" y1="200" x2="600" y2="200" stroke="#f472b6" stroke-width="3"/>
<!-- Myelin sheath bumps -->
${[300,360,420,480,540].map(x=>`<ellipse cx="${x}" cy="200" rx="25" ry="12" fill="#334155" stroke="#f472b6" stroke-width="1.5"/>`).join('')}
<!-- Terminal -->
<circle cx="620" cy="200" r="20" fill="#f472b6" stroke="#db2777" stroke-width="2"/>
<text x="620" y="205" text-anchor="middle" font-size="11" font-family="sans-serif" fill="#fff">synapse</text>
<!-- Endocrine box -->
<rect x="60" y="280" width="680" height="100" rx="14" fill="rgba(244,114,182,0.1)" stroke="#f472b6" stroke-width="1.5"/>
<text x="400" y="308" text-anchor="middle" font-size="14" font-weight="800" font-family="sans-serif" fill="#f472b6">Endocrine System</text>
<text x="400" y="332" text-anchor="middle" font-size="13" font-family="sans-serif" fill="#fce7f3">Hormones: Insulin · Adrenalin · Thyroxine · Growth hormone</text>
<text x="400" y="356" text-anchor="middle" font-size="13" font-family="sans-serif" fill="#fce7f3">Pituitary · Thyroid · Adrenal · Pancreas · Gonads</text>
<text x="400" y="63" text-anchor="middle" font-size="24" font-family="sans-serif" font-weight="800" fill="#f472b6">Control and Coordination</text>`
  },

  'reproduction-10': {
    bg: ['#fdf2f8','#fce7f3'], accent: '#ec4899',
    svg: `${[['Fission','Single cell splits in two','Amoeba, Bacteria','#dc2626',80,90],['Budding','New organism from bud','Hydra, Yeast','#f97316',310,90],['Fragmentation','Break → new organism','Spirogyra','#16a34a',540,90],['Sexual Reprod.','Male + Female gametes','Flowers, Animals','#9333ea',80,270],['Pollination','Pollen to stigma','Cross/Self pollination','#ca8a04',310,270],['Fertilisation','Sperm + Egg → Zygote','External/Internal','#0284c7',540,270]].map(([m,desc,eg,col,x,y])=>`
<rect x="${x}" y="${y}" width="210" height="148" rx="16" fill="${col}12" stroke="${col}" stroke-width="2"/>
<text x="${x+105}" y="${y+35}" text-anchor="middle" font-size="14" font-weight="800" font-family="sans-serif" fill="${col}">${m}</text>
<text x="${x+105}" y="${y+65}" text-anchor="middle" font-size="12" font-family="sans-serif" fill="#374151">${desc}</text>
<text x="${x+105}" y="${y+90}" text-anchor="middle" font-size="11" font-family="sans-serif" fill="${col}">${eg}</text>`).join('')}
<text x="400" y="65" text-anchor="middle" font-size="24" font-family="sans-serif" font-weight="800" fill="#831843">How do Organisms Reproduce?</text>`
  },

  'our-environment-10': {
    bg: ['#f0fdf4','#dcfce7'], accent: '#22c55e',
    svg: `<!-- Food chain / web -->
<text x="400" y="78" text-anchor="middle" font-size="14" font-weight="700" font-family="sans-serif" fill="#14532d">Food Chain: Producer → Primary → Secondary → Tertiary → Decomposers</text>
${[['🌿','Producers\n(Plants)',100,155],['🐛','Herbivores',270,155],['🐸','Carnivores',440,155],['🦅','Top Predator',610,155]].map(([icon,label,x,y])=>`
<circle cx="${x}" cy="${y}" r="45" fill="#dcfce7" stroke="#22c55e" stroke-width="2.5"/>
<text x="${x}" y="${y+5}" text-anchor="middle" font-size="28" font-family="sans-serif">${icon}</text>`).join('')}
${[[145,155],[315,155],[485,155]].map(([x,y])=>`<line x1="${x}" y1="${y}" x2="${x+80}" y2="${y}" stroke="#22c55e" stroke-width="2.5"/><polygon points="${x+78},${y-6} ${x+93},${y} ${x+78},${y+6}" fill="#22c55e"/>`).join('')}
<!-- Energy pyramid -->
<polygon points="400,230 250,380 550,380" fill="#bbf7d0" stroke="#16a34a" stroke-width="2"/>
<line x1="290" y1="315" x2="510" y2="315" stroke="#15803d" stroke-width="1.5"/>
<line x1="320" y1="270" x2="480" y2="270" stroke="#15803d" stroke-width="1.5"/>
<text x="400" y="350" text-anchor="middle" font-size="12" font-family="sans-serif" fill="#14532d">10% energy transfer rule</text>
<text x="400" y="390" text-anchor="middle" font-size="24" font-family="sans-serif" font-weight="800" fill="#14532d">Our Environment</text>`
  },

  'natural-resources-management-10': {
    bg: ['#14532d','#166534'], accent: '#86efac',
    svg: `<rect x="0" y="0" width="800" height="420" fill="#14532d"/>
${[['🌊','Water Conservation','Dams · Rainwater harvesting · Watersheds','#38bdf8',80,80],['🌳','Forest Management','Chipko movement · Sustainable use','#4ade80',430,80],['⚡','Energy Conservation','Reduce fossil fuel · Renewables','#fbbf24',80,255],['🏭','Waste Management','3R: Reduce Reuse Recycle','#f97316',430,255]].map(([icon,title,desc,col,x,y])=>`
<rect x="${x}" y="${y}" width="310" height="148" rx="16" fill="rgba(255,255,255,0.07)" stroke="${col}" stroke-width="2"/>
<text x="${x+155}" y="${y+42}" text-anchor="middle" font-size="28" font-family="sans-serif">${icon}</text>
<text x="${x+155}" y="${y+78}" text-anchor="middle" font-size="14" font-weight="800" font-family="sans-serif" fill="${col}">${title}</text>
<text x="${x+155}" y="${y+110}" text-anchor="middle" font-size="12" font-family="sans-serif" fill="#bbf7d0">${desc}</text>`).join('')}
<text x="400" y="415" text-anchor="middle" font-size="22" font-family="sans-serif" font-weight="800" fill="#86efac">Management of Natural Resources</text>`
  },

  // ── HISTORY ─────────────────────────────────────────────────────
  'rise-nationalism-europe': {
    bg: ['#1e3a8a','#1d4ed8'], accent: '#fbbf24',
    svg: `<rect x="0" y="0" width="800" height="420" fill="#1e3a8a"/>
<!-- Map outline of Europe simplified -->
<path d="M 100,200 Q 160,120 280,130 Q 380,115 450,145 Q 520,135 580,160 Q 640,155 700,180 Q 700,250 650,300 Q 580,320 500,310 Q 400,330 300,310 Q 200,320 130,280 Z" fill="#1d4ed8" stroke="#fbbf24" stroke-width="2"/>
<!-- Country divisions -->
<line x1="300" y1="130" x2="280" y2="310" stroke="#fbbf24" stroke-width="1.5" stroke-dasharray="5,4" opacity=".5"/>
<line x1="450" y1="145" x2="440" y2="310" stroke="#fbbf24" stroke-width="1.5" stroke-dasharray="5,4" opacity=".5"/>
<!-- Key points -->
<rect x="60" y="320" width="680" height="80" rx="14" fill="rgba(251,191,36,0.12)" stroke="#fbbf24" stroke-width="1.5"/>
<text x="400" y="350" text-anchor="middle" font-size="14" font-weight="800" font-family="sans-serif" fill="#fbbf24">Rise of Nationalism in Europe</text>
<text x="400" y="374" text-anchor="middle" font-size="13" font-family="sans-serif" fill="#fde68a">French Revolution · Napoleon · 1848 Revolutions · Bismarck (Germany) · Mazzini (Italy)</text>
<text x="400" y="65" text-anchor="middle" font-size="24" font-family="sans-serif" font-weight="800" fill="#fbbf24">The Rise of Nationalism in Europe</text>`
  },

  'nationalism-india-10': {
    bg: ['#fff7ed','#ffedd5'], accent: '#f97316',
    svg: `<!-- Gandhi with salt -->
<circle cx="200" cy="175" r="65" fill="#fde68a" stroke="#f97316" stroke-width="2.5"/>
<text x="200" y="175" text-anchor="middle" font-size="40" font-family="sans-serif">🧔</text>
<text x="200" y="255" text-anchor="middle" font-size="13" font-weight="700" font-family="sans-serif" fill="#7c2d12">Mahatma Gandhi</text>
<!-- Movement timeline -->
<rect x="300" y="80" width="440" height="260" rx="16" fill="#ffedd5" stroke="#f97316" stroke-width="2"/>
<text x="520" y="112" text-anchor="middle" font-size="15" font-weight="900" font-family="sans-serif" fill="#7c2d12">Nationalist Movements</text>
<text x="520" y="140" text-anchor="middle" font-size="13" font-family="sans-serif" fill="#9a3412">1919 — Non-cooperation Movement</text>
<text x="520" y="163" text-anchor="middle" font-size="13" font-family="sans-serif" fill="#9a3412">1930 — Civil Disobedience / Salt March</text>
<text x="520" y="186" text-anchor="middle" font-size="13" font-family="sans-serif" fill="#9a3412">1942 — Quit India Movement</text>
<text x="520" y="215" text-anchor="middle" font-size="13" font-family="sans-serif" fill="#9a3412">Satyagraha · Ahimsa · Swaraj</text>
<text x="520" y="245" text-anchor="middle" font-size="13" font-family="sans-serif" fill="#9a3412">Khilafat · Jallianwala Bagh</text>
<text x="520" y="270" text-anchor="middle" font-size="13" font-family="sans-serif" fill="#9a3412">Subhas Chandra Bose · INA</text>
<text x="400" y="373" text-anchor="middle" font-size="24" font-family="sans-serif" font-weight="800" fill="#7c2d12">Nationalism in India</text>`
  },

  'making-global-world': {
    bg: ['#0f172a','#1e293b'], accent: '#38bdf8',
    svg: `<rect x="0" y="0" width="800" height="420" fill="#0f172a"/>
<!-- World map simplified outline -->
<ellipse cx="400" cy="210" rx="320" ry="170" fill="none" stroke="#1e3a8a" stroke-width="1.5"/>
<!-- Trade routes -->
<path d="M 120,180 Q 300,100 500,160 Q 620,180 700,200" fill="none" stroke="#38bdf8" stroke-width="2.5" stroke-dasharray="8,4"/>
<path d="M 120,240 Q 250,310 400,280 Q 550,250 700,220" fill="none" stroke="#f59e0b" stroke-width="2.5" stroke-dasharray="8,4"/>
<!-- Era boxes -->
<rect x="60" y="280" width="680" height="100" rx="14" fill="rgba(56,189,248,0.1)" stroke="#38bdf8" stroke-width="1.5"/>
<text x="400" y="308" text-anchor="middle" font-size="14" font-weight="800" font-family="sans-serif" fill="#38bdf8">Eras of Globalisation</text>
<text x="400" y="332" text-anchor="middle" font-size="13" font-family="sans-serif" fill="#7dd3fc">Pre-1500: Silk Road · Spice trade · Indus Valley</text>
<text x="400" y="355" text-anchor="middle" font-size="13" font-family="sans-serif" fill="#7dd3fc">1500–1800: Colonialism · Atlantic slave trade</text>
<text x="400" y="375" text-anchor="middle" font-size="13" font-family="sans-serif" fill="#7dd3fc">1800s+: Industrialisation · Bretton Woods · WTO</text>
<text x="400" y="63" text-anchor="middle" font-size="22" font-family="sans-serif" font-weight="800" fill="#38bdf8">The Making of a Global World</text>`
  },

  'age-industrialisation': {
    bg: ['#1c1917','#292524'], accent: '#f59e0b',
    svg: `<rect x="0" y="0" width="800" height="420" fill="#1c1917"/>
<!-- Factory -->
<rect x="100" y="200" width="580" height="180" rx="4" fill="#292524" stroke="#57534e" stroke-width="2"/>
<!-- Chimneys with smoke -->
${[180,300,420,540].map(x=>`
<rect x="${x-20}" y="${120}" width="40" height="${82}" rx="3" fill="#44403c" stroke="#57534e" stroke-width="1.5"/>
<ellipse cx="${x}" cy="${120}" rx="24" ry="10" fill="#57534e" stroke="#78716c" stroke-width="1.5"/>
<ellipse cx="${x+8}" cy="${95}" rx="20" ry="10" fill="#44403c" opacity=".8"/>
<ellipse cx="${x}" cy="${72}" rx="16" ry="8" fill="#57534e" opacity=".6"/>`).join('')}
<!-- Windows -->
${[130,195,260,325,450,515,580,645].map(x=>`<rect x="${x}" y="225" width="40" height="50" rx="3" fill="#0f172a" stroke="#57534e" stroke-width="1"/>`).join('')}
<!-- Era labels -->
<rect x="80" y="55" width="640" height="52" rx="12" fill="rgba(245,158,11,0.12)" stroke="#f59e0b" stroke-width="1.5"/>
<text x="400" y="80" text-anchor="middle" font-size="14" font-weight="800" font-family="sans-serif" fill="#f59e0b">Age of Industrialisation — 18th–19th Century Britain</text>
<text x="400" y="100" text-anchor="middle" font-size="13" font-family="sans-serif" fill="#d97706">Steam engine · Cotton mills · Railroads · Proto-industrialisation</text>
<text x="400" y="395" text-anchor="middle" font-size="22" font-family="sans-serif" font-weight="800" fill="#f59e0b">The Age of Industrialisation</text>`
  },

  // ── GEOGRAPHY ───────────────────────────────────────────────────
  'resources-development': {
    bg: ['#f0fdf4','#dcfce7'], accent: '#22c55e',
    svg: `${[['🌍','Natural Resources','Land · Soil · Water · Forest','#16a34a',80,110],['👥','Human Resources','Labour · Entrepreneurship','#2563eb',420,110],['🏭','Capital Resources','Machinery · Infrastructure','#f97316',80,280],['♻️','Sustainable Dev.','Meet present needs without\ncompromising future','#9333ea',420,280]].map(([icon,title,desc,col,x,y])=>`
<rect x="${x}" y="${y}" width="300" height="150" rx="16" fill="${col}10" stroke="${col}" stroke-width="2.5"/>
<text x="${x+150}" y="${y+46}" text-anchor="middle" font-size="32" font-family="sans-serif">${icon}</text>
<text x="${x+150}" y="${y+82}" text-anchor="middle" font-size="14" font-weight="800" font-family="sans-serif" fill="${col}">${title}</text>
<text x="${x+150}" y="${y+112}" text-anchor="middle" font-size="12" font-family="sans-serif" fill="#374151">${desc}</text>`).join('')}
<text x="400" y="70" text-anchor="middle" font-size="26" font-family="sans-serif" font-weight="800" fill="#14532d">Resources and Development</text>`
  },

  'water-resources-10': {
    bg: ['#f0f9ff','#e0f2fe'], accent: '#0284c7',
    svg: `<!-- Dam -->
<polygon points="200,340 600,340 540,150 260,150" fill="#bae6fd" stroke="#0284c7" stroke-width="3"/>
<rect x="340" y="280" width="50" height="65" rx="4" fill="#0284c7"/>
<!-- Water body -->
<ellipse cx="400" cy="148" rx="240" ry="40" fill="#7dd3fc" stroke="#0284c7" stroke-width="2"/>
<!-- Reservoir label -->
<text x="400" y="115" text-anchor="middle" font-size="14" font-weight="700" font-family="sans-serif" fill="#0369a1">Reservoir</text>
<!-- Flow arrows -->
<line x1="365" y1="340" x2="340" y2="380" stroke="#38bdf8" stroke-width="3"/>
<polygon points="335,377 340,390 345,377" fill="#38bdf8"/>
<!-- Key content box -->
<rect x="60" y="355" width="680" height="42" rx="10" fill="#0284c7"/>
<text x="400" y="382" text-anchor="middle" font-size="14" font-family="sans-serif" font-weight="800" fill="#fff">Multipurpose dams · Rainwater harvesting · Rooftop collection · Check dams</text>
<text x="400" y="65" text-anchor="middle" font-size="26" font-family="sans-serif" font-weight="800" fill="#0369a1">Water Resources</text>`
  },

  'agriculture-10': {
    bg: ['#f0fdf4','#dcfce7'], accent: '#16a34a',
    svg: `<!-- Crop type wheel -->
<circle cx="250" cy="220" r="140" fill="#dcfce7" stroke="#16a34a" stroke-width="3"/>
${[['Kharif\nJun–Sep','#16a34a',0],['Rabi\nOct–Mar','#0284c7',120],['Zaid\nSummer','#f59e0b',240]].map(([label,col,angle])=>{
const r=140, cx=250, cy=220;
const x1=cx,y1=cy;
const x2=(cx+r*Math.cos((angle-90)*Math.PI/180)).toFixed(0), y2=(cy+r*Math.sin((angle-90)*Math.PI/180)).toFixed(0);
const x3=(cx+r*Math.cos((angle+120-90)*Math.PI/180)).toFixed(0), y3=(cy+r*Math.sin((angle+120-90)*Math.PI/180)).toFixed(0);
const mx=(cx+80*Math.cos((angle+60-90)*Math.PI/180)).toFixed(0), my=(cy+80*Math.sin((angle+60-90)*Math.PI/180)).toFixed(0);
return `<path d="M${x1},${y1} L${x2},${y2} A${r},${r} 0 0,1 ${x3},${y3} Z" fill="${col}" opacity=".6" stroke="#fff" stroke-width="2"/>
<text x="${mx}" y="${my}" text-anchor="middle" font-size="12" font-weight="700" font-family="sans-serif" fill="#fff">${label.split('\n')[0]}</text>
<text x="${mx}" y="${parseInt(my)+16}" text-anchor="middle" font-size="11" font-family="sans-serif" fill="#fff">${label.split('\n')[1]}</text>`;
}).join('')}
<!-- Agriculture types -->
<rect x="430" y="80" width="320" height="270" rx="14" fill="#dcfce7" stroke="#16a34a" stroke-width="2"/>
<text x="590" y="112" text-anchor="middle" font-size="15" font-weight="900" font-family="sans-serif" fill="#14532d">Farming Types</text>
<text x="590" y="140" text-anchor="middle" font-size="13" font-family="sans-serif" fill="#15803d">Subsistence · Commercial</text>
<text x="590" y="163" text-anchor="middle" font-size="13" font-family="sans-serif" fill="#15803d">Plantation · Mixed</text>
<text x="590" y="192" text-anchor="middle" font-size="13" font-weight="700" font-family="sans-serif" fill="#14532d">Major Crops</text>
<text x="590" y="215" text-anchor="middle" font-size="13" font-family="sans-serif" fill="#15803d">Rice · Wheat · Cotton</text>
<text x="590" y="238" text-anchor="middle" font-size="13" font-family="sans-serif" fill="#15803d">Sugarcane · Tea · Coffee</text>
<text x="590" y="261" text-anchor="middle" font-size="13" font-family="sans-serif" fill="#15803d">Jute · Rubber · Oilseeds</text>
<text x="590" y="290" text-anchor="middle" font-size="12" font-family="sans-serif" fill="#14532d">Green Revolution (1960s)</text>
<text x="400" y="385" text-anchor="middle" font-size="26" font-family="sans-serif" font-weight="800" fill="#14532d">Agriculture</text>`
  },

  'minerals-energy': {
    bg: ['#1e1b4b','#312e81'], accent: '#a78bfa',
    svg: `<rect x="0" y="0" width="800" height="420" fill="#1e1b4b"/>
${[['⚙️','Ferrous','Iron · Manganese · Chromite','#94a3b8',80,80],['✨','Non-ferrous','Copper · Bauxite · Lead · Zinc','#f59e0b',310,80],['💎','Non-metallic','Mica · Limestone · Salt','#34d399',540,80],['⛽','Conventional Energy','Coal · Petroleum · Natural gas','#f97316',80,250],['☀️','Non-conventional','Solar · Wind · Hydro · Tidal','#38bdf8',310,250],['⚛️','Nuclear','Uranium · Thorium','#a78bfa',540,250]].map(([icon,type,eg,col,x,y])=>`
<rect x="${x}" y="${y}" width="200" height="148" rx="14" fill="${col}12" stroke="${col}" stroke-width="2"/>
<text x="${x+100}" y="${y+40}" text-anchor="middle" font-size="26" font-family="sans-serif">${icon}</text>
<text x="${x+100}" y="${y+72}" text-anchor="middle" font-size="13" font-weight="800" font-family="sans-serif" fill="${col}">${type}</text>
<text x="${x+100}" y="${y+100}" text-anchor="middle" font-size="11" font-family="sans-serif" fill="#94a3b8">${eg}</text>`).join('')}
<text x="400" y="415" text-anchor="middle" font-size="22" font-family="sans-serif" font-weight="800" fill="#a78bfa">Minerals and Energy Resources</text>`
  },

  'lifelines-economy': {
    bg: ['#0f172a','#1e293b'], accent: '#38bdf8',
    svg: `<rect x="0" y="0" width="800" height="420" fill="#0f172a"/>
<!-- India simplified map -->
<path d="M 200,70 L 270,55 L 370,70 L 410,130 L 400,210 L 360,280 L 300,330 L 250,340 L 210,300 L 185,220 Z" fill="#1d4ed8" stroke="#38bdf8" stroke-width="2" opacity=".7"/>
<!-- Transport network dots -->
${[[230,120,'🚂'],[310,180,'🛣️'],[260,240,'✈️'],[340,130,'🚢']].map(([x,y,icon])=>`<text x="${x}" y="${y}" text-anchor="middle" font-size="20" font-family="sans-serif">${icon}</text>`).join('')}
<!-- Legend -->
<rect x="450" y="70" width="300" height="270" rx="14" fill="rgba(56,189,248,0.1)" stroke="#38bdf8" stroke-width="1.5"/>
<text x="600" y="102" text-anchor="middle" font-size="15" font-weight="900" font-family="sans-serif" fill="#38bdf8">Lifelines of Economy</text>
<text x="600" y="132" text-anchor="middle" font-size="13" font-weight="700" font-family="sans-serif" fill="#7dd3fc">🚂 Railways</text>
<text x="600" y="152" text-anchor="middle" font-size="12" font-family="sans-serif" fill="#94a3b8">Longest network in Asia</text>
<text x="600" y="180" text-anchor="middle" font-size="13" font-weight="700" font-family="sans-serif" fill="#7dd3fc">🛣️ Roadways</text>
<text x="600" y="200" text-anchor="middle" font-size="12" font-family="sans-serif" fill="#94a3b8">NH · SH · District roads</text>
<text x="600" y="228" text-anchor="middle" font-size="13" font-weight="700" font-family="sans-serif" fill="#7dd3fc">✈️ Airways</text>
<text x="600" y="248" text-anchor="middle" font-size="12" font-family="sans-serif" fill="#94a3b8">International · Domestic</text>
<text x="600" y="276" text-anchor="middle" font-size="13" font-weight="700" font-family="sans-serif" fill="#7dd3fc">🚢 Waterways + Pipelines</text>
<text x="600" y="296" text-anchor="middle" font-size="12" font-family="sans-serif" fill="#94a3b8">Ports: Mumbai · Kolkata · Chennai</text>
<text x="600" y="322" text-anchor="middle" font-size="12" font-family="sans-serif" fill="#94a3b8">Communication · Internet · Media</text>
<text x="400" y="390" text-anchor="middle" font-size="22" font-family="sans-serif" font-weight="800" fill="#38bdf8">Lifelines of National Economy</text>`
  },

  // ── POLITICAL SCIENCE ────────────────────────────────────────────
  'power-sharing': {
    bg: ['#eff6ff','#dbeafe'], accent: '#2563eb',
    svg: `<!-- Four quadrants of power sharing -->
${[['Horizontal\nSharing','Legislature · Executive · Judiciary','#2563eb',80,90],['Vertical\nSharing','Centre · State · Local self-govt','#16a34a',430,90],['Community\nSharing','Religious · Linguistic groups','#f97316',80,265],['Political\nSharing','Parties · Pressure groups · Media','#9333ea',430,265]].map(([type,desc,col,x,y])=>`
<rect x="${x}" y="${y}" width="310" height="148" rx="16" fill="${col}11" stroke="${col}" stroke-width="2.5"/>
<text x="${x+155}" y="${y+38}" text-anchor="middle" font-size="14" font-weight="900" font-family="sans-serif" fill="${col}">${type.replace('\n',' ')}</text>
<text x="${x+155}" y="${y+78}" text-anchor="middle" font-size="13" font-family="sans-serif" fill="#374151">${desc}</text>
<text x="${x+155}" y="${y+112}" text-anchor="middle" font-size="12" font-family="sans-serif" fill="${col}">Balance of power</text>`).join('')}
<text x="400" y="68" text-anchor="middle" font-size="26" font-family="sans-serif" font-weight="800" fill="#1e3a8a">Power Sharing</text>`
  },

  'federalism': {
    bg: ['#fdf4ff','#f3e8ff'], accent: '#9333ea',
    svg: `<!-- Federal structure tree -->
<rect x="300" y="65" width="200" height="48" rx="12" fill="#9333ea"/>
<text x="400" y="95" text-anchor="middle" font-size="15" font-weight="900" font-family="sans-serif" fill="#fff">Central Government</text>
<line x1="400" y1="113" x2="200" y2="165" stroke="#7c3aed" stroke-width="2.5"/>
<line x1="400" y1="113" x2="400" y2="165" stroke="#7c3aed" stroke-width="2.5"/>
<line x1="400" y1="113" x2="600" y2="165" stroke="#7c3aed" stroke-width="2.5"/>
${[['State A',120],['State B',340],['State C',560]].map(([s,x])=>`
<rect x="${x-60}" y="165" width="120" height="42" rx="10" fill="#c4b5fd" stroke="#7c3aed" stroke-width="2"/>
<text x="${x}" y="191" text-anchor="middle" font-size="13" font-weight="700" font-family="sans-serif" fill="#3b0764">${s}</text>
<line x1="${x}" y1="207" x2="${x-30}" y2="247" stroke="#7c3aed" stroke-width="1.5"/>
<line x1="${x}" y1="207" x2="${x+30}" y2="247" stroke="#7c3aed" stroke-width="1.5"/>
<rect x="${x-55}" y="247" width="50" height="36" rx="8" fill="#ede9fe" stroke="#8b5cf6" stroke-width="1.5"/>
<text x="${x-30}" y="270" text-anchor="middle" font-size="11" font-family="sans-serif" fill="#5b21b6">Panchayat</text>
<rect x="${x+5}" y="247" width="50" height="36" rx="8" fill="#ede9fe" stroke="#8b5cf6" stroke-width="1.5"/>
<text x="${x+30}" y="270" text-anchor="middle" font-size="11" font-family="sans-serif" fill="#5b21b6">Municipal</text>`).join('')}
<rect x="80" y="310" width="640" height="68" rx="12" fill="#f3e8ff" stroke="#9333ea" stroke-width="2"/>
<text x="400" y="337" text-anchor="middle" font-size="14" font-weight="800" font-family="sans-serif" fill="#6b21a8">Union List · State List · Concurrent List</text>
<text x="400" y="360" text-anchor="middle" font-size="13" font-family="sans-serif" fill="#7e22ce">Decentralisation: Panchayati Raj (73rd &amp; 74th Amendments)</text>
<text x="400" y="385" text-anchor="middle" font-size="24" font-family="sans-serif" font-weight="800" fill="#581c87">Federalism</text>`
  },

  'political-parties-10': {
    bg: ['#fff7ed','#ffedd5'], accent: '#f97316',
    svg: `<!-- Party symbols and functions -->
${[['🐟','National Party','Recognised in 4+ states','#2563eb',80,100],['🌾','State Party','Recognised in 1–3 states','#16a34a',430,100],['⚖️','Recognised Party','ECI recognition criteria','#f97316',80,270],['🗳️','Coalition','Alliance of parties','#9333ea',430,270]].map(([icon,type,desc,col,x,y])=>`
<rect x="${x}" y="${y}" width="300" height="148" rx="16" fill="${col}11" stroke="${col}" stroke-width="2.5"/>
<text x="${x+150}" y="${y+46}" text-anchor="middle" font-size="30" font-family="sans-serif">${icon}</text>
<text x="${x+150}" y="${y+82}" text-anchor="middle" font-size="14" font-weight="800" font-family="sans-serif" fill="${col}">${type}</text>
<text x="${x+150}" y="${y+112}" text-anchor="middle" font-size="12" font-family="sans-serif" fill="#374151">${desc}</text>`).join('')}
<text x="400" y="68" text-anchor="middle" font-size="26" font-family="sans-serif" font-weight="800" fill="#7c2d12">Political Parties</text>`
  },

  'outcomes-democracy': {
    bg: ['#f0fdf4','#dcfce7'], accent: '#16a34a',
    svg: `<!-- Scales of democracy outcomes -->
<line x1="400" y1="80" x2="400" y2="200" stroke="#374151" stroke-width="3.5"/>
<line x1="180" y1="160" x2="620" y2="160" stroke="#16a34a" stroke-width="3.5"/>
<!-- Left pan: positive -->
<path d="M 180,160 Q 220,230 260,230 Q 300,230 340,160" fill="none" stroke="#16a34a" stroke-width="2.5"/>
<rect x="190" y="228" width="145" height="110" rx="12" fill="#dcfce7" stroke="#16a34a" stroke-width="2"/>
<text x="263" y="258" text-anchor="middle" font-size="13" font-weight="800" font-family="sans-serif" fill="#14532d">Positives</text>
<text x="263" y="280" text-anchor="middle" font-size="12" font-family="sans-serif" fill="#15803d">Accountability</text>
<text x="263" y="300" text-anchor="middle" font-size="12" font-family="sans-serif" fill="#15803d">Rights protected</text>
<text x="263" y="320" text-anchor="middle" font-size="12" font-family="sans-serif" fill="#15803d">Peaceful transfer</text>
<!-- Right pan: challenges -->
<path d="M 460,160 Q 500,240 540,240 Q 580,240 620,160" fill="none" stroke="#dc2626" stroke-width="2.5"/>
<rect x="465" y="238" width="150" height="110" rx="12" fill="#fef2f2" stroke="#dc2626" stroke-width="2"/>
<text x="540" y="268" text-anchor="middle" font-size="13" font-weight="800" font-family="sans-serif" fill="#991b1b">Challenges</text>
<text x="540" y="290" text-anchor="middle" font-size="12" font-family="sans-serif" fill="#dc2626">Slow decisions</text>
<text x="540" y="310" text-anchor="middle" font-size="12" font-family="sans-serif" fill="#dc2626">Corruption risk</text>
<text x="540" y="330" text-anchor="middle" font-size="12" font-family="sans-serif" fill="#dc2626">Inequality</text>
<text x="400" y="385" text-anchor="middle" font-size="24" font-family="sans-serif" font-weight="800" fill="#14532d">Outcomes of Democracy</text>`
  },

  // ── ECONOMICS ───────────────────────────────────────────────────
  'development': {
    bg: ['#fffbeb','#fef3c7'], accent: '#d97706',
    svg: `<!-- HDI components -->
<circle cx="400" cy="195" r="130" fill="#fef3c7" stroke="#d97706" stroke-width="3"/>
<text x="400" y="190" text-anchor="middle" font-size="16" font-weight="900" font-family="sans-serif" fill="#78350f">HDI</text>
<text x="400" y="215" text-anchor="middle" font-size="13" font-family="sans-serif" fill="#92400e">Human Dev. Index</text>
<!-- Three pillars -->
${[['📚','Education','Literacy · schooling','#2563eb',130,195],['💰','Income','GNI per capita','#16a34a',555,195],['🏥','Health','Life expectancy','#dc2626',400,70]].map(([icon,dim,desc,col,x,y])=>`
<line x1="400" y1="195" x2="${x}" y2="${y}" stroke="${col}" stroke-width="2.5" stroke-dasharray="5,3"/>
<circle cx="${x}" cy="${y}" r="45" fill="${col}11" stroke="${col}" stroke-width="2"/>
<text x="${x}" y="${y}" text-anchor="middle" font-size="22" font-family="sans-serif">${icon}</text>
<text x="${x}" y="${y+32}" text-anchor="middle" font-size="12" font-weight="700" font-family="sans-serif" fill="${col}">${dim}</text>`).join('')}
<rect x="80" y="350" width="640" height="42" rx="10" fill="#d97706"/>
<text x="400" y="377" text-anchor="middle" font-size="14" font-family="sans-serif" font-weight="800" fill="#fff">National income · Per capita income · Sustainable development</text>`
  },

  'sectors-economy': {
    bg: ['#f0f9ff','#e0f2fe'], accent: '#0284c7',
    svg: `${[['Primary','🌾','Agriculture · Mining · Fishing','#16a34a',80,100],['Secondary','🏭','Manufacturing · Construction','#f97316',420,100],['Tertiary','💼','Services · Trade · Transport','#2563eb',80,280],['Organised','🏢','Formal sector · Regulated','#9333ea',420,280]].map(([sec,icon,eg,col,x,y])=>`
<rect x="${x}" y="${y}" width="300" height="148" rx="16" fill="${col}12" stroke="${col}" stroke-width="2.5"/>
<text x="${x+150}" y="${y+46}" text-anchor="middle" font-size="30" font-family="sans-serif">${icon}</text>
<text x="${x+150}" y="${y+80}" text-anchor="middle" font-size="14" font-weight="800" font-family="sans-serif" fill="${col}">${sec} Sector</text>
<text x="${x+150}" y="${y+110}" text-anchor="middle" font-size="12" font-family="sans-serif" fill="#374151">${eg}</text>`).join('')}
<text x="400" y="68" text-anchor="middle" font-size="26" font-family="sans-serif" font-weight="800" fill="#0369a1">Sectors of the Indian Economy</text>`
  },

  'money-credit': {
    bg: ['#fdf4ff','#f3e8ff'], accent: '#9333ea',
    svg: `<!-- Money flow diagram -->
<circle cx="200" cy="210" r="80" fill="#f3e8ff" stroke="#9333ea" stroke-width="2.5"/>
<text x="200" y="205" text-anchor="middle" font-size="32" font-family="sans-serif">🏦</text>
<text x="200" y="235" text-anchor="middle" font-size="13" font-weight="700" font-family="sans-serif" fill="#6b21a8">Banks</text>
<!-- Arrows -->
<line x1="280" y1="185" x2="400" y2="150" stroke="#9333ea" stroke-width="2.5"/>
<polygon points="396,140 408,150 396,160" fill="#9333ea"/>
<text x="340" y="148" text-anchor="middle" font-size="12" font-family="sans-serif" fill="#6b21a8">Deposits</text>
<line x1="400" y1="250" x2="280" y2="235" stroke="#dc2626" stroke-width="2.5"/>
<polygon points="283,226 278,238 291,236" fill="#dc2626"/>
<text x="340" y="265" text-anchor="middle" font-size="12" font-family="sans-serif" fill="#dc2626">Loans</text>
<!-- Borrower -->
<circle cx="520" cy="195" r="75" fill="#dcfce7" stroke="#16a34a" stroke-width="2.5"/>
<text x="520" y="190" text-anchor="middle" font-size="28" font-family="sans-serif">👨‍👩‍👧</text>
<text x="520" y="220" text-anchor="middle" font-size="13" font-weight="700" font-family="sans-serif" fill="#14532d">Borrowers</text>
<!-- Credit terms -->
<rect x="80" y="315" width="640" height="65" rx="12" fill="#f3e8ff" stroke="#9333ea" stroke-width="2"/>
<text x="400" y="343" text-anchor="middle" font-size="14" font-weight="800" font-family="sans-serif" fill="#6b21a8">Credit: Collateral · Interest · Repayment · Documentation</text>
<text x="400" y="368" text-anchor="middle" font-size="13" font-family="sans-serif" fill="#7e22ce">Formal (banks, SHGs) vs Informal (moneylenders) credit</text>
<text x="400" y="385" text-anchor="middle" font-size="0" fill="none"/>
<text x="400" y="60" text-anchor="middle" font-size="26" font-family="sans-serif" font-weight="800" fill="#581c87">Money and Credit</text>`
  },

  'globalisation-10': {
    bg: ['#0f172a','#1e293b'], accent: '#38bdf8',
    svg: `<rect x="0" y="0" width="800" height="420" fill="#0f172a"/>
<!-- Globe connections -->
<circle cx="400" cy="200" r="140" fill="none" stroke="#1e40af" stroke-width="2" stroke-dasharray="5,4"/>
<circle cx="400" cy="200" r="100" fill="none" stroke="#1e3a8a" stroke-width="1.5" stroke-dasharray="4,4"/>
${[[200,130,'🇮🇳'],[580,120,'🇺🇸'],[180,290,'🇬🇧'],[600,280,'🇨🇳'],[400,80,'🇩🇪']].map(([x,y,flag])=>`
<circle cx="${x}" cy="${y}" r="28" fill="#1e3a8a" stroke="#38bdf8" stroke-width="1.5"/>
<text x="${x}" y="${y+8}" text-anchor="middle" font-size="22" font-family="sans-serif">${flag}</text>
<line x1="${x}" y1="${y}" x2="400" y2="200" stroke="#38bdf8" stroke-width="1.5" opacity=".5"/>`).join('')}
<circle cx="400" cy="200" r="35" fill="#1d4ed8" stroke="#38bdf8" stroke-width="2.5"/>
<text x="400" y="205" text-anchor="middle" font-size="13" font-weight="800" font-family="sans-serif" fill="#fff">MNCs</text>
<rect x="80" y="350" width="640" height="48" rx="12" fill="rgba(56,189,248,0.1)" stroke="#38bdf8" stroke-width="1.5"/>
<text x="400" y="374" text-anchor="middle" font-size="13" font-family="sans-serif" fill="#7dd3fc">WTO · FDI · Outsourcing · SEZ · Fair globalisation</text>
<text x="400" y="63" text-anchor="middle" font-size="24" font-family="sans-serif" font-weight="800" fill="#38bdf8">Globalisation and the Indian Economy</text>`
  },

  'consumer-rights': {
    bg: ['#fef2f2','#fee2e2'], accent: '#dc2626',
    svg: `${[['⚖️','Right to Safety','Protection from hazardous goods','#dc2626',80,95],['📢','Right to be Informed','Quality, price, ingredients','#f97316',430,95],['🛒','Right to Choose','Access to variety at competitive prices','#16a34a',80,265],['📝','Right to Redressal','Complaint & compensation','#9333ea',430,265]].map(([icon,right,desc,col,x,y])=>`
<rect x="${x}" y="${y}" width="310" height="148" rx="16" fill="${col}11" stroke="${col}" stroke-width="2.5"/>
<text x="${x+155}" y="${y+46}" text-anchor="middle" font-size="30" font-family="sans-serif">${icon}</text>
<text x="${x+155}" y="${y+82}" text-anchor="middle" font-size="14" font-weight="800" font-family="sans-serif" fill="${col}">${right}</text>
<text x="${x+155}" y="${y+112}" text-anchor="middle" font-size="12" font-family="sans-serif" fill="#374151">${desc}</text>`).join('')}
<rect x="150" y="430" width="0" height="0"/>
<text x="400" y="68" text-anchor="middle" font-size="26" font-family="sans-serif" font-weight="800" fill="#7f1d1d">Consumer Rights</text>
<rect x="150" y="428" width="500" height="0" rx="0"/>
<text x="400" y="413" text-anchor="middle" font-size="13" font-family="sans-serif" fill="#dc2626">COPRA 1986 · District · State · National Consumer Forum · ISI · Agmark</text>`
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

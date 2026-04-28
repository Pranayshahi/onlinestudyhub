const fs = require('fs');
const path = require('path');
const OUT = path.join(__dirname, '../public/img/topics/class-11');

const topics = {

  // ── MATHEMATICS ─────────────────────────────────────────────────

  'sets': {
    bg: ['#eff6ff','#bfdbfe'], accent: '#2563eb',
    svg: `<ellipse cx="300" cy="210" rx="170" ry="130" fill="#dbeafe" stroke="#2563eb" stroke-width="3" opacity="0.85"/>
<ellipse cx="500" cy="210" rx="170" ry="130" fill="#bfdbfe" stroke="#3b82f6" stroke-width="3" opacity="0.85"/>
<ellipse cx="400" cy="210" rx="80" ry="100" fill="#93c5fd" stroke="#1d4ed8" stroke-width="2" opacity="0.7"/>
<text x="220" y="200" text-anchor="middle" font-size="15" font-weight="800" font-family="sans-serif" fill="#1e3a8a">A only</text>
<text x="400" y="205" text-anchor="middle" font-size="13" font-weight="800" font-family="sans-serif" fill="#1e40af">A∩B</text>
<text x="580" y="200" text-anchor="middle" font-size="15" font-weight="800" font-family="sans-serif" fill="#1e3a8a">B only</text>
<text x="160" y="155" text-anchor="middle" font-size="28" font-weight="900" font-family="sans-serif" fill="#2563eb">A</text>
<text x="640" y="155" text-anchor="middle" font-size="28" font-weight="900" font-family="sans-serif" fill="#3b82f6">B</text>
<rect x="50" y="60" width="700" height="48" rx="10" fill="#1d4ed8"/>
<text x="400" y="89" text-anchor="middle" font-size="14" font-weight="800" font-family="monospace" fill="#fff">A∪B · A∩B · A' · A−B · De Morgan's Laws · Power Set</text>
<rect x="100" y="340" width="600" height="42" rx="10" fill="#dbeafe" stroke="#2563eb" stroke-width="2"/>
<text x="400" y="366" text-anchor="middle" font-size="13" font-weight="700" font-family="sans-serif" fill="#1e40af">n(A∪B) = n(A) + n(B) − n(A∩B)</text>`
  },

  'trigonometry': {
    bg: ['#fdf4ff','#f3e8ff'], accent: '#9333ea',
    svg: `<circle cx="400" cy="210" r="150" fill="none" stroke="#9333ea" stroke-width="2.5" stroke-dasharray="6,3"/>
<line x1="250" y1="210" x2="550" y2="210" stroke="#374151" stroke-width="1.5"/>
<line x1="400" y1="60" x2="400" y2="360" stroke="#374151" stroke-width="1.5"/>
<line x1="400" y1="210" x2="514" y2="133" stroke="#9333ea" stroke-width="3"/>
<circle cx="514" cy="133" r="7" fill="#dc2626"/>
<line x1="514" y1="133" x2="514" y2="210" stroke="#dc2626" stroke-width="2.5" stroke-dasharray="5,3"/>
<line x1="400" y1="210" x2="514" y2="210" stroke="#16a34a" stroke-width="2.5" stroke-dasharray="5,3"/>
<text x="535" y="175" font-size="14" font-weight="800" font-family="sans-serif" fill="#dc2626">sin θ</text>
<text x="450" y="228" font-size="14" font-weight="800" font-family="sans-serif" fill="#16a34a">cos θ</text>
<path d="M 430,210 A 30,30 0 0,0 418,183" fill="none" stroke="#f97316" stroke-width="2"/>
<text x="448" y="198" font-size="13" font-weight="800" font-family="sans-serif" fill="#f97316">θ</text>
<rect x="50" y="55" width="700" height="50" rx="10" fill="#9333ea"/>
<text x="400" y="84" text-anchor="middle" font-size="13" font-weight="800" font-family="monospace" fill="#fff">sin²θ+cos²θ=1 · 1+tan²θ=sec²θ · 1+cot²θ=cosec²θ</text>
<rect x="80" y="340" width="640" height="40" rx="10" fill="#f3e8ff" stroke="#9333ea" stroke-width="2"/>
<text x="400" y="365" text-anchor="middle" font-size="13" font-weight="700" font-family="monospace" fill="#6b21a8">sin(A±B) · cos(A±B) · tan(A±B) · Double Angle · Half Angle</text>`
  },

  'relations-functions-11': {
    bg: ['#f0fdf4','#dcfce7'], accent: '#16a34a',
    svg: `<rect x="80" y="100" width="160" height="220" rx="14" fill="#dcfce7" stroke="#16a34a" stroke-width="2.5"/>
<rect x="560" y="100" width="160" height="220" rx="14" fill="#dcfce7" stroke="#16a34a" stroke-width="2.5"/>
<text x="160" y="85" text-anchor="middle" font-size="16" font-weight="800" font-family="sans-serif" fill="#14532d">Domain</text>
<text x="640" y="85" text-anchor="middle" font-size="16" font-weight="800" font-family="sans-serif" fill="#14532d">Range</text>
${[['a',140],['b',185],['c',230],['d',275]].map(([l,y])=>`<circle cx="140" cy="${y}" r="8" fill="#16a34a"/>
<text x="160" cy="${y}" y="${y+5}" text-anchor="middle" font-size="14" font-weight="700" font-family="sans-serif" fill="#14532d">${l}</text>`).join('')}
${[[1,155],[4,200],[9,245],[16,290]].map(([n,y])=>`<circle cx="620" cy="${y}" r="8" fill="#15803d"/>
<text x="640" cy="${y}" y="${y+5}" text-anchor="middle" font-size="14" font-weight="700" font-family="sans-serif" fill="#14532d">${n}</text>`).join('')}
<line x1="148" y1="140" x2="612" y2="155" stroke="#4ade80" stroke-width="2" marker-end="url(#arr)"/>
<line x1="148" y1="185" x2="612" y2="200" stroke="#4ade80" stroke-width="2"/>
<line x1="148" y1="230" x2="612" y2="245" stroke="#4ade80" stroke-width="2"/>
<line x1="148" y1="275" x2="612" y2="290" stroke="#4ade80" stroke-width="2"/>
<rect x="240" y="175" width="320" height="60" rx="12" fill="#16a34a"/>
<text x="400" y="200" text-anchor="middle" font-size="14" font-weight="800" font-family="monospace" fill="#fff">f(x) = x²</text>
<text x="400" y="224" text-anchor="middle" font-size="12" font-weight="700" font-family="sans-serif" fill="#dcfce7">One-to-One · Onto · Bijective</text>
<rect x="80" y="360" width="640" height="38" rx="10" fill="#dcfce7" stroke="#16a34a" stroke-width="2"/>
<text x="400" y="384" text-anchor="middle" font-size="13" font-weight="700" font-family="sans-serif" fill="#14532d">Types: Constant · Identity · Polynomial · Modulus · Signum · Greatest Integer</text>`
  },

  'complex-numbers': {
    bg: ['#fff1f2','#ffe4e6'], accent: '#e11d48',
    svg: `<line x1="100" y1="220" x2="700" y2="220" stroke="#374151" stroke-width="2"/>
<line x1="400" y1="60" x2="400" y2="380" stroke="#374151" stroke-width="2"/>
<text x="715" y="225" font-size="15" font-weight="800" font-family="sans-serif" fill="#374151">Real</text>
<text x="395" y="52" text-anchor="end" font-size="15" font-weight="800" font-family="sans-serif" fill="#374151">Imaginary</text>
<circle cx="560" cy="140" r="8" fill="#e11d48"/>
<line x1="400" y1="220" x2="560" y2="140" stroke="#e11d48" stroke-width="2.5"/>
<line x1="560" y1="140" x2="560" y2="220" stroke="#9ca3af" stroke-width="1.5" stroke-dasharray="5,3"/>
<line x1="400" y1="220" x2="560" y2="220" stroke="#9ca3af" stroke-width="1.5" stroke-dasharray="5,3"/>
<text x="565" y="135" font-size="14" font-weight="800" font-family="sans-serif" fill="#e11d48">z = a+bi</text>
<text x="565" y="215" font-size="13" font-weight="700" font-family="sans-serif" fill="#374151">a</text>
<text x="570" y="180" font-size="13" font-weight="700" font-family="sans-serif" fill="#374151">b</text>
<rect x="60" y="60" width="680" height="50" rx="12" fill="#e11d48"/>
<text x="400" y="90" text-anchor="middle" font-size="15" font-weight="800" font-family="monospace" fill="#fff">i = √−1  ·  i² = −1  ·  |z| = √(a²+b²)</text>
<rect x="80" y="300" width="640" height="65" rx="12" fill="#ffe4e6" stroke="#e11d48" stroke-width="2"/>
<text x="400" y="325" text-anchor="middle" font-size="14" font-weight="800" font-family="monospace" fill="#9f1239">Argand Plane · Modulus · Argument</text>
<text x="400" y="353" text-anchor="middle" font-size="13" font-weight="700" font-family="sans-serif" fill="#be123c">Polar form: r(cosθ + i sinθ) · Conjugate: ā = a−bi</text>`
  },

  'permutations-combinations': {
    bg: ['#fff7ed','#ffedd5'], accent: '#ea580c',
    svg: `<rect x="80" y="90" width="260" height="240" rx="14" fill="#ffedd5" stroke="#ea580c" stroke-width="2.5"/>
<rect x="460" y="90" width="260" height="240" rx="14" fill="#fed7aa" stroke="#f97316" stroke-width="2.5"/>
<text x="210" y="80" text-anchor="middle" font-size="18" font-weight="800" font-family="sans-serif" fill="#c2410c">Permutations</text>
<text x="590" y="80" text-anchor="middle" font-size="18" font-weight="800" font-family="sans-serif" fill="#c2410c">Combinations</text>
<text x="210" y="175" text-anchor="middle" font-size="28" font-family="monospace" font-weight="900" fill="#9a3412">ⁿPᵣ</text>
<text x="210" y="215" text-anchor="middle" font-size="16" font-family="monospace" font-weight="800" fill="#7c2d12">= n! / (n−r)!</text>
<text x="210" y="260" text-anchor="middle" font-size="13" font-family="sans-serif" fill="#9a3412">Order matters</text>
<text x="590" y="175" text-anchor="middle" font-size="28" font-family="monospace" font-weight="900" fill="#9a3412">ⁿCᵣ</text>
<text x="590" y="215" text-anchor="middle" font-size="16" font-family="monospace" font-weight="800" fill="#7c2d12">= n! / r!(n−r)!</text>
<text x="590" y="260" text-anchor="middle" font-size="13" font-family="sans-serif" fill="#9a3412">Order doesn't matter</text>
<rect x="280" y="155" width="100" height="80" rx="12" fill="#ea580c"/>
<text x="330" y="200" text-anchor="middle" font-size="13" font-weight="800" font-family="monospace" fill="#fff">ⁿPᵣ=r!ⁿCᵣ</text>
<rect x="80" y="355" width="640" height="40" rx="10" fill="#ea580c"/>
<text x="400" y="380" text-anchor="middle" font-size="13" font-weight="800" font-family="monospace" fill="#fff">n! = n×(n−1)×…×1 · 0! = 1 · Fundamental Counting Principle</text>`
  },

  'binomial-theorem': {
    bg: ['#f0fdf4','#dcfce7'], accent: '#059669',
    svg: `${[
[1],
[1,1],
[1,2,1],
[1,3,3,1],
[1,4,6,4,1],
].map((row,ri)=>{
const y = 80+ri*52, cols=row.length, start=400-cols*45+45;
return row.map((v,ci)=>{
const x=start+ci*90;
return `<rect x="${x-32}" y="${y}" width="64" height="40" rx="10" fill="${ri%2===0?'#059669':'#10b981'}" opacity="${0.6+ri*0.08}"/>
<text x="${x}" y="${y+26}" text-anchor="middle" font-size="${v>9?14:17}" font-weight="900" font-family="monospace" fill="#fff">${v}</text>`;
}).join('');
}).join('')}
<rect x="60" y="348" width="680" height="50" rx="12" fill="#059669"/>
<text x="400" y="370" text-anchor="middle" font-size="14" font-weight="800" font-family="monospace" fill="#fff">(a+b)ⁿ = Σ ⁿCᵣ · aⁿ⁻ʳ · bʳ</text>
<text x="400" y="392" text-anchor="middle" font-size="12" font-weight="700" font-family="sans-serif" fill="#dcfce7">General Term Tᵣ₊₁ = ⁿCᵣ · aⁿ⁻ʳ · bʳ · Pascal's Triangle</text>`
  },

  'sequences-series': {
    bg: ['#eff6ff','#dbeafe'], accent: '#3b82f6',
    svg: `${Array.from({length:8},(_,i)=>{
const x=70+i*90, h=50+i*28, y=330-h;
return `<rect x="${x}" y="${y}" width="72" height="${h}" rx="8" fill="#3b82f6" opacity="${0.45+i*0.07}"/>
<text x="${x+36}" y="${y-8}" text-anchor="middle" font-size="13" font-weight="700" font-family="monospace" fill="#1e3a8a">a${i===0?'':'+'+i+'d'}</text>`;
}).join('')}
<rect x="60" y="60" width="680" height="80" rx="14" fill="#1d4ed8"/>
<text x="400" y="90" text-anchor="middle" font-size="15" font-weight="800" font-family="monospace" fill="#fff">AP: aₙ = a+(n−1)d · Sₙ = n/2[2a+(n−1)d]</text>
<text x="400" y="125" text-anchor="middle" font-size="15" font-weight="800" font-family="monospace" fill="#bfdbfe">GP: aₙ = arⁿ⁻¹ · Sₙ = a(rⁿ−1)/(r−1)</text>
<rect x="80" y="355" width="640" height="42" rx="10" fill="#dbeafe" stroke="#3b82f6" stroke-width="2"/>
<text x="400" y="381" text-anchor="middle" font-size="13" font-weight="700" font-family="monospace" fill="#1e40af">Sum of first n naturals: n(n+1)/2 · Squares: n(n+1)(2n+1)/6</text>`
  },

  'straight-lines': {
    bg: ['#fdf4ff','#ede9fe'], accent: '#7c3aed',
    svg: `<line x1="100" y1="240" x2="700" y2="240" stroke="#d1d5db" stroke-width="1.5"/>
<line x1="400" y1="60" x2="400" y2="400" stroke="#d1d5db" stroke-width="1.5"/>
<line x1="80" y1="340" x2="700" y2="120" stroke="#7c3aed" stroke-width="3.5"/>
<line x1="80" y1="180" x2="650" y2="310" stroke="#dc2626" stroke-width="2.5" stroke-dasharray="7,4"/>
<circle cx="290" cy="240" r="7" fill="#7c3aed"/>
<text x="290" y="260" text-anchor="middle" font-size="12" font-weight="700" font-family="sans-serif" fill="#5b21b6">(x₁,y₁)</text>
<circle cx="570" cy="160" r="7" fill="#7c3aed"/>
<text x="570" y="152" text-anchor="middle" font-size="12" font-weight="700" font-family="sans-serif" fill="#5b21b6">(x₂,y₂)</text>
<rect x="60" y="55" width="680" height="50" rx="12" fill="#7c3aed"/>
<text x="400" y="85" text-anchor="middle" font-size="15" font-weight="800" font-family="monospace" fill="#fff">y−y₁ = m(x−x₁) · m = (y₂−y₁)/(x₂−x₁)</text>
<rect x="80" y="355" width="640" height="42" rx="10" fill="#ede9fe" stroke="#7c3aed" stroke-width="2"/>
<text x="400" y="381" text-anchor="middle" font-size="13" font-weight="700" font-family="monospace" fill="#5b21b6">ax+by+c=0 · Distance from point to line · Angle between lines</text>`
  },

  'conic-sections': {
    bg: ['#fff7ed','#ffedd5'], accent: '#c2410c',
    svg: `<ellipse cx="400" cy="215" rx="160" ry="110" fill="none" stroke="#c2410c" stroke-width="3"/>
<circle cx="265" cy="215" r="7" fill="#7c3aed"/>
<circle cx="535" cy="215" r="7" fill="#7c3aed"/>
<text x="260" y="235" text-anchor="middle" font-size="11" font-weight="700" font-family="sans-serif" fill="#5b21b6">F₁</text>
<text x="540" y="235" text-anchor="middle" font-size="11" font-weight="700" font-family="sans-serif" fill="#5b21b6">F₂</text>
<line x1="265" y1="215" x2="400" y2="105" stroke="#9ca3af" stroke-width="1.5" stroke-dasharray="4,3"/>
<line x1="535" y1="215" x2="400" y2="105" stroke="#9ca3af" stroke-width="1.5" stroke-dasharray="4,3"/>
<circle cx="400" cy="105" r="5" fill="#c2410c"/>
<rect x="60" y="55" width="680" height="48" rx="12" fill="#c2410c"/>
<text x="400" y="84" text-anchor="middle" font-size="14" font-weight="800" font-family="monospace" fill="#fff">Ellipse: x²/a² + y²/b² = 1 · Circle: x²+y²=r²</text>
<rect x="80" y="345" width="280" height="52" rx="10" fill="#ffedd5" stroke="#ea580c" stroke-width="2"/>
<text x="220" y="368" text-anchor="middle" font-size="13" font-weight="700" font-family="monospace" fill="#7c2d12">Parabola: y²=4ax</text>
<text x="220" y="388" text-anchor="middle" font-size="12" font-family="sans-serif" fill="#9a3412">Focus, Directrix, Latus Rectum</text>
<rect x="440" y="345" width="280" height="52" rx="10" fill="#ffedd5" stroke="#ea580c" stroke-width="2"/>
<text x="580" y="368" text-anchor="middle" font-size="13" font-weight="700" font-family="monospace" fill="#7c2d12">Hyperbola: x²/a²−y²/b²=1</text>
<text x="580" y="388" text-anchor="middle" font-size="12" font-family="sans-serif" fill="#9a3412">Asymptotes · Eccentricity e&gt;1</text>`
  },

  'statistics-11': {
    bg: ['#f0fdf4','#dcfce7'], accent: '#16a34a',
    svg: `${[70,110,160,100,140,80,130,90,150,60].map((h,i)=>{
const x=75+i*68, y=330-h;
return `<rect x="${x}" y="${y}" width="56" height="${h}" rx="7" fill="#16a34a" opacity="${0.5+i*0.05}"/>`;
}).join('')}
<line x1="60" y1="330" x2="740" y2="330" stroke="#374151" stroke-width="2"/>
<rect x="60" y="55" width="680" height="50" rx="12" fill="#16a34a"/>
<text x="400" y="80" text-anchor="middle" font-size="14" font-weight="800" font-family="monospace" fill="#fff">Mean · Median · Mode · Variance · Standard Deviation</text>
<text x="400" y="100" text-anchor="middle" font-size="12" font-weight="700" font-family="sans-serif" fill="#dcfce7">σ² = Σ(xᵢ−x̄)² / n</text>
<rect x="80" y="350" width="640" height="42" rx="10" fill="#dcfce7" stroke="#16a34a" stroke-width="2"/>
<text x="400" y="376" text-anchor="middle" font-size="13" font-weight="700" font-family="sans-serif" fill="#14532d">Probability: P(A∪B)=P(A)+P(B)−P(A∩B) · Sample Space · Events</text>`
  },

  // ── PHYSICS ─────────────────────────────────────────────────────

  'units-measurements': {
    bg: ['#f0f9ff','#e0f2fe'], accent: '#0369a1',
    svg: `<rect x="80" y="90" width="180" height="60" rx="12" fill="#0369a1"/>
<text x="170" y="126" text-anchor="middle" font-size="15" font-weight="800" font-family="sans-serif" fill="#fff">SI Units</text>
<rect x="80" y="170" width="180" height="40" rx="8" fill="#0ea5e9" opacity="0.8"/>
<text x="170" y="195" text-anchor="middle" font-size="12" font-weight="700" font-family="sans-serif" fill="#fff">Length — metre (m)</text>
<rect x="80" y="220" width="180" height="40" rx="8" fill="#0ea5e9" opacity="0.8"/>
<text x="170" y="245" text-anchor="middle" font-size="12" font-weight="700" font-family="sans-serif" fill="#fff">Mass — kilogram (kg)</text>
<rect x="80" y="270" width="180" height="40" rx="8" fill="#0ea5e9" opacity="0.8"/>
<text x="170" y="295" text-anchor="middle" font-size="12" font-weight="700" font-family="sans-serif" fill="#fff">Time — second (s)</text>
<rect x="80" y="320" width="180" height="40" rx="8" fill="#0ea5e9" opacity="0.8"/>
<text x="170" y="345" text-anchor="middle" font-size="12" font-weight="700" font-family="sans-serif" fill="#fff">Current — ampere (A)</text>
<rect x="300" y="90" width="420" height="200" rx="14" fill="#e0f2fe" stroke="#0369a1" stroke-width="2.5"/>
<text x="510" y="120" text-anchor="middle" font-size="16" font-weight="800" font-family="sans-serif" fill="#075985">Dimensional Analysis</text>
<text x="510" y="160" text-anchor="middle" font-size="22" font-family="monospace" font-weight="900" fill="#0369a1">[M¹L²T⁻²]</text>
<text x="510" y="195" text-anchor="middle" font-size="13" font-weight="700" font-family="sans-serif" fill="#075985">Energy / Work / Heat</text>
<text x="510" y="220" text-anchor="middle" font-size="13" font-family="sans-serif" fill="#0369a1">Significant Figures · Errors in Measurement</text>
<text x="510" y="250" text-anchor="middle" font-size="13" font-family="sans-serif" fill="#0369a1">Absolute · Relative · Percentage Error</text>
<rect x="80" y="370" width="640" height="38" rx="10" fill="#0369a1"/>
<text x="400" y="394" text-anchor="middle" font-size="13" font-weight="800" font-family="monospace" fill="#fff">Least Count · Vernier Calliper · Screw Gauge · Accuracy vs Precision</text>`
  },

  'laws-of-motion-11': {
    bg: ['#fff7ed','#ffedd5'], accent: '#ea580c',
    svg: `<rect x="80" y="80" width="640" height="60" rx="14" fill="#ea580c"/>
<text x="400" y="105" text-anchor="middle" font-size="15" font-weight="800" font-family="sans-serif" fill="#fff">Newton's Three Laws of Motion</text>
<text x="400" y="128" text-anchor="middle" font-size="12" font-weight="700" font-family="sans-serif" fill="#ffedd5">Foundation of Classical Mechanics</text>
<rect x="80" y="160" width="180" height="120" rx="12" fill="#ffedd5" stroke="#ea580c" stroke-width="2"/>
<text x="170" y="190" text-anchor="middle" font-size="14" font-weight="800" font-family="sans-serif" fill="#c2410c">1st Law</text>
<text x="170" y="220" text-anchor="middle" font-size="12" font-family="sans-serif" fill="#7c2d12">Inertia:</text>
<text x="170" y="240" text-anchor="middle" font-size="12" font-family="sans-serif" fill="#7c2d12">body stays at</text>
<text x="170" y="260" text-anchor="middle" font-size="12" font-family="sans-serif" fill="#7c2d12">rest/motion</text>
<rect x="310" y="160" width="180" height="120" rx="12" fill="#ffedd5" stroke="#ea580c" stroke-width="2"/>
<text x="400" y="190" text-anchor="middle" font-size="14" font-weight="800" font-family="sans-serif" fill="#c2410c">2nd Law</text>
<text x="400" y="220" text-anchor="middle" font-size="22" font-family="monospace" font-weight="900" fill="#ea580c">F = ma</text>
<text x="400" y="255" text-anchor="middle" font-size="12" font-family="sans-serif" fill="#7c2d12">Force = rate of</text>
<text x="400" y="272" text-anchor="middle" font-size="12" font-family="sans-serif" fill="#7c2d12">change of momentum</text>
<rect x="540" y="160" width="180" height="120" rx="12" fill="#ffedd5" stroke="#ea580c" stroke-width="2"/>
<text x="630" y="190" text-anchor="middle" font-size="14" font-weight="800" font-family="sans-serif" fill="#c2410c">3rd Law</text>
<text x="630" y="220" text-anchor="middle" font-size="12" font-family="sans-serif" fill="#7c2d12">Every action</text>
<text x="630" y="240" text-anchor="middle" font-size="12" font-family="sans-serif" fill="#7c2d12">has equal &amp;</text>
<text x="630" y="260" text-anchor="middle" font-size="12" font-family="sans-serif" fill="#7c2d12">opposite reaction</text>
<rect x="80" y="300" width="640" height="90" rx="12" fill="#fed7aa" stroke="#f97316" stroke-width="2"/>
<text x="400" y="327" text-anchor="middle" font-size="14" font-weight="800" font-family="monospace" fill="#7c2d12">Friction: f = μN · Impulse = F·Δt = Δp</text>
<text x="400" y="357" text-anchor="middle" font-size="13" font-family="sans-serif" fill="#9a3412">Conservation of Momentum · Circular Motion: F = mv²/r</text>
<text x="400" y="377" text-anchor="middle" font-size="12" font-family="sans-serif" fill="#9a3412">Tension · Normal Force · Pseudo Force in Non-Inertial Frames</text>`
  },

  'motion-straight-line': {
    bg: ['#eff6ff','#dbeafe'], accent: '#2563eb',
    svg: `<line x1="80" y1="280" x2="720" y2="280" stroke="#374151" stroke-width="2"/>
<line x1="80" y1="60" x2="80" y2="380" stroke="#374151" stroke-width="2"/>
<path d="M 80,280 Q 280,100 500,160 T 720,200" fill="none" stroke="#2563eb" stroke-width="3.5"/>
<text x="40" y="280" text-anchor="middle" font-size="12" font-weight="700" font-family="sans-serif" fill="#374151">s</text>
<text x="720" y="300" text-anchor="middle" font-size="12" font-weight="700" font-family="sans-serif" fill="#374151">t</text>
<path d="M 80,340 L 200,320 L 350,270 L 500,300 L 650,250 L 720,260" fill="none" stroke="#dc2626" stroke-width="2.5" stroke-dasharray="6,3"/>
<text x="730" y="258" font-size="11" font-weight="700" font-family="sans-serif" fill="#dc2626">v-t</text>
<rect x="150" y="60" width="540" height="80" rx="14" fill="#1d4ed8"/>
<text x="420" y="90" text-anchor="middle" font-size="14" font-weight="800" font-family="monospace" fill="#fff">v = u + at · s = ut + ½at² · v² = u² + 2as</text>
<text x="420" y="125" text-anchor="middle" font-size="13" font-weight="700" font-family="monospace" fill="#bfdbfe">sₙ = u + a(2n−1)/2 · Relative Velocity</text>
<rect x="80" y="355" width="640" height="38" rx="10" fill="#dbeafe" stroke="#2563eb" stroke-width="2"/>
<text x="400" y="379" text-anchor="middle" font-size="13" font-weight="700" font-family="sans-serif" fill="#1e40af">Displacement · Velocity · Acceleration · Uniform vs Non-Uniform Motion</text>`
  },

  'work-energy-power': {
    bg: ['#f0fdf4','#dcfce7'], accent: '#059669',
    svg: `<circle cx="400" cy="210" r="110" fill="#d1fae5" stroke="#059669" stroke-width="3"/>
<text x="400" y="180" text-anchor="middle" font-size="24" font-weight="900" font-family="monospace" fill="#065f46">KE = ½mv²</text>
<text x="400" y="215" text-anchor="middle" font-size="24" font-weight="900" font-family="monospace" fill="#047857">PE = mgh</text>
<text x="400" y="248" text-anchor="middle" font-size="14" font-weight="700" font-family="sans-serif" fill="#065f46">KE + PE = const</text>
<rect x="60" y="55" width="680" height="48" rx="12" fill="#059669"/>
<text x="400" y="84" text-anchor="middle" font-size="15" font-weight="800" font-family="monospace" fill="#fff">W = F·d·cosθ · Power P = W/t = F·v</text>
<rect x="80" y="345" width="300" height="52" rx="10" fill="#dcfce7" stroke="#059669" stroke-width="2"/>
<text x="230" y="367" text-anchor="middle" font-size="14" font-weight="700" font-family="monospace" fill="#065f46">Work-Energy Theorem</text>
<text x="230" y="389" text-anchor="middle" font-size="13" font-family="monospace" fill="#047857">W_net = ΔKE</text>
<rect x="420" y="345" width="300" height="52" rx="10" fill="#dcfce7" stroke="#059669" stroke-width="2"/>
<text x="570" y="367" text-anchor="middle" font-size="14" font-weight="700" font-family="sans-serif" fill="#065f46">Elastic Collision</text>
<text x="570" y="389" text-anchor="middle" font-size="13" font-family="sans-serif" fill="#047857">KE + Momentum conserved</text>`
  },

  'gravitation-11': {
    bg: ['#1e1b4b','#312e81'], accent: '#818cf8',
    svg: `<circle cx="400" cy="200" r="60" fill="#fbbf24" opacity="0.95"/>
<text x="400" y="207" text-anchor="middle" font-size="13" font-weight="800" font-family="sans-serif" fill="#1e1b4b">Earth</text>
<circle cx="400" cy="200" r="130" fill="none" stroke="#818cf8" stroke-width="1.5" stroke-dasharray="8,4" opacity="0.6"/>
<circle cx="530" cy="200" r="18" fill="#60a5fa"/>
<text x="530" y="205" text-anchor="middle" font-size="10" font-weight="700" font-family="sans-serif" fill="#fff">Moon</text>
<circle cx="400" cy="200" r="175" fill="none" stroke="#a5b4fc" stroke-width="1" stroke-dasharray="4,6" opacity="0.4"/>
<circle cx="225" cy="200" r="12" fill="#34d399"/>
<line x1="400" y1="200" x2="530" y2="200" stroke="#f59e0b" stroke-width="1.5" stroke-dasharray="4,3"/>
<text x="465" y="193" text-anchor="middle" font-size="11" font-weight="700" font-family="sans-serif" fill="#fbbf24">r</text>
<rect x="80" y="55" width="640" height="50" rx="12" fill="#4338ca"/>
<text x="400" y="83" text-anchor="middle" font-size="16" font-weight="800" font-family="monospace" fill="#e0e7ff">F = GMm/r²  ·  G = 6.67×10⁻¹¹ Nm²kg⁻²</text>
<rect x="80" y="350" width="640" height="52" rx="12" fill="#312e81" stroke="#818cf8" stroke-width="2"/>
<text x="400" y="375" text-anchor="middle" font-size="13" font-weight="800" font-family="monospace" fill="#c7d2fe">g = GM/R² · Escape velocity: v = √(2gR)</text>
<text x="400" y="395" text-anchor="middle" font-size="12" font-family="sans-serif" fill="#a5b4fc">Kepler's Laws · Orbital Velocity · Geostationary Satellite</text>`
  },

  'thermodynamics-11': {
    bg: ['#fff1f2','#ffe4e6'], accent: '#e11d48',
    svg: `<rect x="100" y="90" width="240" height="240" rx="16" fill="#ffe4e6" stroke="#e11d48" stroke-width="3"/>
<text x="220" y="185" text-anchor="middle" font-size="15" font-weight="800" font-family="sans-serif" fill="#9f1239">HOT</text>
<text x="220" y="215" text-anchor="middle" font-size="13" font-weight="700" font-family="sans-serif" fill="#be123c">T₁ (Source)</text>
<rect x="460" y="90" width="240" height="240" rx="16" fill="#e0f2fe" stroke="#0369a1" stroke-width="3"/>
<text x="580" y="185" text-anchor="middle" font-size="15" font-weight="800" font-family="sans-serif" fill="#075985">COLD</text>
<text x="580" y="215" text-anchor="middle" font-size="13" font-weight="700" font-family="sans-serif" fill="#0369a1">T₂ (Sink)</text>
<rect x="310" y="150" width="140" height="110" rx="12" fill="#fef9c3" stroke="#ca8a04" stroke-width="2.5"/>
<text x="380" y="185" text-anchor="middle" font-size="12" font-weight="800" font-family="sans-serif" fill="#713f12">Engine</text>
<text x="380" y="205" text-anchor="middle" font-size="11" font-weight="700" font-family="monospace" fill="#92400e">W=Q₁-Q₂</text>
<text x="380" y="225" text-anchor="middle" font-size="11" font-family="monospace" fill="#92400e">η=1-T₂/T₁</text>
<line x1="340" y1="210" x2="310" y2="210" stroke="#e11d48" stroke-width="2.5" marker-end="url(#arr)"/>
<line x1="450" y1="210" x2="460" y2="210" stroke="#0369a1" stroke-width="2.5"/>
<rect x="80" y="55" width="640" height="48" rx="12" fill="#e11d48"/>
<text x="400" y="84" text-anchor="middle" font-size="14" font-weight="800" font-family="monospace" fill="#fff">ΔU = Q − W · Zeroth, First, Second, Third Laws</text>
<rect x="80" y="355" width="640" height="40" rx="10" fill="#ffe4e6" stroke="#e11d48" stroke-width="2"/>
<text x="400" y="380" text-anchor="middle" font-size="13" font-weight="700" font-family="sans-serif" fill="#9f1239">Isothermal · Adiabatic · Isochoric · Isobaric · Entropy · Carnot Engine</text>`
  },

  'waves-11': {
    bg: ['#eff6ff','#dbeafe'], accent: '#3b82f6',
    svg: `<path d="M 60,215 C 110,100 190,100 250,215 S 390,330 450,215 S 590,100 650,215 S 750,330 780,215" fill="none" stroke="#3b82f6" stroke-width="3.5"/>
<path d="M 60,215 C 110,330 190,330 250,215 S 390,100 450,215 S 590,330 650,215" fill="none" stroke="#dc2626" stroke-width="2" stroke-dasharray="6,4" opacity="0.7"/>
<line x1="60" y1="215" x2="780" y2="215" stroke="#9ca3af" stroke-width="1.5" stroke-dasharray="4,4"/>
<line x1="250" y1="100" x2="250" y2="215" stroke="#374151" stroke-width="1.5" stroke-dasharray="3,3"/>
<line x1="450" y1="100" x2="450" y2="215" stroke="#374151" stroke-width="1.5" stroke-dasharray="3,3"/>
<text x="350" y="90" text-anchor="middle" font-size="13" font-weight="700" font-family="sans-serif" fill="#374151">λ (wavelength)</text>
<line x1="250" y1="88" x2="450" y2="88" stroke="#374151" stroke-width="1.5" marker-end="url(#arr)"/>
<text x="62" y="115" font-size="13" font-weight="700" font-family="sans-serif" fill="#374151">A</text>
<line x1="75" y1="120" x2="75" y2="215" stroke="#374151" stroke-width="1.5"/>
<rect x="80" y="55" width="640" height="48" rx="12" fill="#1d4ed8"/>
<text x="400" y="83" text-anchor="middle" font-size="14" font-weight="800" font-family="monospace" fill="#fff">v = fλ · y = A sin(ωt − kx) · v_sound = √(γP/ρ)</text>
<rect x="80" y="350" width="640" height="42" rx="10" fill="#dbeafe" stroke="#3b82f6" stroke-width="2"/>
<text x="400" y="376" text-anchor="middle" font-size="13" font-weight="700" font-family="sans-serif" fill="#1e40af">Transverse · Longitudinal · Superposition · Beats · Doppler Effect · Standing Waves</text>`
  },

  // ── CHEMISTRY ───────────────────────────────────────────────────

  'atomic-structure': {
    bg: ['#1e1b4b','#312e81'], accent: '#818cf8',
    svg: `<circle cx="400" cy="210" r="28" fill="#fbbf24"/>
<text x="400" y="216" text-anchor="middle" font-size="13" font-weight="800" font-family="sans-serif" fill="#1e1b4b">Nucleus</text>
<circle cx="400" cy="210" r="80" fill="none" stroke="#818cf8" stroke-width="2" stroke-dasharray="5,3"/>
<circle cx="480" cy="210" r="10" fill="#60a5fa"/>
<text x="496" y="207" font-size="10" font-weight="700" font-family="sans-serif" fill="#bfdbfe">e⁻</text>
<circle cx="400" cy="210" r="130" fill="none" stroke="#a5b4fc" stroke-width="2" stroke-dasharray="5,3"/>
<circle cx="400" cy="80" r="10" fill="#34d399"/>
<text x="416" y="77" font-size="10" font-weight="700" font-family="sans-serif" fill="#a7f3d0">e⁻</text>
<circle cx="270" cy="210" r="10" fill="#34d399"/>
<text x="282" y="207" font-size="10" font-weight="700" font-family="sans-serif" fill="#a7f3d0">e⁻</text>
<circle cx="400" cy="210" r="175" fill="none" stroke="#c7d2fe" stroke-width="1.5" stroke-dasharray="4,6"/>
<circle cx="575" cy="210" r="10" fill="#f472b6"/>
<text x="590" y="207" font-size="10" font-weight="700" font-family="sans-serif" fill="#fbcfe8">e⁻</text>
<rect x="80" y="55" width="640" height="48" rx="12" fill="#4338ca"/>
<text x="400" y="84" text-anchor="middle" font-size="13" font-weight="800" font-family="monospace" fill="#e0e7ff">Bohr Model · Quantum Numbers: n, l, mₗ, ms · Aufbau · Pauli · Hund</text>
<rect x="80" y="352" width="640" height="42" rx="10" fill="#312e81" stroke="#818cf8" stroke-width="2"/>
<text x="400" y="377" text-anchor="middle" font-size="13" font-weight="700" font-family="sans-serif" fill="#c7d2fe">Heisenberg Uncertainty · Orbitals: s, p, d, f · Electronic Configuration</text>`
  },

  'chemical-bonding': {
    bg: ['#f0fdf4','#dcfce7'], accent: '#059669',
    svg: `<circle cx="280" cy="210" r="70" fill="#d1fae5" stroke="#059669" stroke-width="2.5"/>
<circle cx="520" cy="210" r="70" fill="#d1fae5" stroke="#059669" stroke-width="2.5"/>
<text x="280" y="206" text-anchor="middle" font-size="20" font-weight="900" font-family="sans-serif" fill="#065f46">H</text>
<text x="520" y="206" text-anchor="middle" font-size="20" font-weight="900" font-family="sans-serif" fill="#065f46">H</text>
<circle cx="355" cy="210" r="9" fill="#dc2626"/>
<circle cx="445" cy="210" r="9" fill="#dc2626"/>
<text x="400" y="250" text-anchor="middle" font-size="12" font-weight="700" font-family="sans-serif" fill="#7c3aed">Shared electrons</text>
<rect x="60" y="55" width="680" height="48" rx="12" fill="#059669"/>
<text x="400" y="84" text-anchor="middle" font-size="13" font-weight="800" font-family="monospace" fill="#fff">Ionic · Covalent · Coordinate · Metallic Bonds · VSEPR Theory</text>
<rect x="80" y="310" width="290" height="80" rx="12" fill="#dcfce7" stroke="#059669" stroke-width="2"/>
<text x="225" y="338" text-anchor="middle" font-size="13" font-weight="700" font-family="sans-serif" fill="#065f46">Bond Parameters</text>
<text x="225" y="360" text-anchor="middle" font-size="12" font-family="sans-serif" fill="#047857">Length · Energy · Angle</text>
<text x="225" y="378" text-anchor="middle" font-size="12" font-family="sans-serif" fill="#047857">Order · Polarity</text>
<rect x="430" y="310" width="290" height="80" rx="12" fill="#dcfce7" stroke="#059669" stroke-width="2"/>
<text x="575" y="338" text-anchor="middle" font-size="13" font-weight="700" font-family="sans-serif" fill="#065f46">Hybridisation</text>
<text x="575" y="360" text-anchor="middle" font-size="12" font-family="sans-serif" fill="#047857">sp, sp², sp³, sp³d</text>
<text x="575" y="378" text-anchor="middle" font-size="12" font-family="sans-serif" fill="#047857">σ bonds · π bonds</text>`
  },

  'thermodynamics-chem-11': {
    bg: ['#fff7ed','#ffedd5'], accent: '#d97706',
    svg: `<rect x="80" y="80" width="640" height="60" rx="14" fill="#d97706"/>
<text x="400" y="108" text-anchor="middle" font-size="15" font-weight="800" font-family="sans-serif" fill="#fff">Chemical Thermodynamics</text>
<text x="400" y="130" text-anchor="middle" font-size="12" font-weight="700" font-family="sans-serif" fill="#fef3c7">System · Surroundings · Universe</text>
<rect x="80" y="160" width="180" height="120" rx="12" fill="#fef3c7" stroke="#d97706" stroke-width="2"/>
<text x="170" y="188" text-anchor="middle" font-size="13" font-weight="800" font-family="sans-serif" fill="#92400e">Enthalpy ΔH</text>
<text x="170" y="215" text-anchor="middle" font-size="11" font-family="monospace" fill="#78350f">ΔH = ΔU + ΔngRT</text>
<text x="170" y="238" text-anchor="middle" font-size="11" font-family="sans-serif" fill="#92400e">Exo: ΔH &lt; 0</text>
<text x="170" y="258" text-anchor="middle" font-size="11" font-family="sans-serif" fill="#92400e">Endo: ΔH &gt; 0</text>
<rect x="310" y="160" width="180" height="120" rx="12" fill="#fef3c7" stroke="#d97706" stroke-width="2"/>
<text x="400" y="188" text-anchor="middle" font-size="13" font-weight="800" font-family="sans-serif" fill="#92400e">Entropy ΔS</text>
<text x="400" y="215" text-anchor="middle" font-size="11" font-family="sans-serif" fill="#78350f">Randomness/Disorder</text>
<text x="400" y="238" text-anchor="middle" font-size="11" font-family="sans-serif" fill="#92400e">Spontaneous:</text>
<text x="400" y="258" text-anchor="middle" font-size="11" font-family="sans-serif" fill="#92400e">ΔS_universe &gt; 0</text>
<rect x="540" y="160" width="180" height="120" rx="12" fill="#fef3c7" stroke="#d97706" stroke-width="2"/>
<text x="630" y="188" text-anchor="middle" font-size="13" font-weight="800" font-family="sans-serif" fill="#92400e">Gibbs Energy</text>
<text x="630" y="215" text-anchor="middle" font-size="20" font-family="monospace" font-weight="900" fill="#d97706">ΔG</text>
<text x="630" y="245" text-anchor="middle" font-size="11" font-family="monospace" fill="#78350f">ΔH − TΔS</text>
<text x="630" y="265" text-anchor="middle" font-size="11" font-family="sans-serif" fill="#92400e">ΔG &lt; 0 → Spontaneous</text>
<rect x="80" y="300" width="640" height="80" rx="12" fill="#fed7aa" stroke="#f59e0b" stroke-width="2"/>
<text x="400" y="325" text-anchor="middle" font-size="14" font-weight="800" font-family="monospace" fill="#7c2d12">Hess's Law · Bond Enthalpy · Lattice Energy</text>
<text x="400" y="352" text-anchor="middle" font-size="13" font-family="sans-serif" fill="#9a3412">Combustion · Formation · Atomisation · Ionisation · Hydration</text>`
  },

  'equilibrium-11': {
    bg: ['#fdf4ff','#f3e8ff'], accent: '#9333ea',
    svg: `<rect x="80" y="80" width="640" height="50" rx="12" fill="#9333ea"/>
<text x="400" y="110" text-anchor="middle" font-size="15" font-weight="800" font-family="monospace" fill="#fff">aA + bB ⇌ cC + dD</text>
<rect x="80" y="150" width="295" height="120" rx="12" fill="#f3e8ff" stroke="#9333ea" stroke-width="2"/>
<text x="228" y="178" text-anchor="middle" font-size="14" font-weight="800" font-family="sans-serif" fill="#6b21a8">Equilibrium Constant</text>
<text x="228" y="210" text-anchor="middle" font-size="20" font-family="monospace" font-weight="900" fill="#7c3aed">Kc = [C]ᶜ[D]ᵈ</text>
<text x="228" y="240" text-anchor="middle" font-size="16" font-family="monospace" font-weight="700" fill="#7c3aed">   / [A]ᵃ[B]ᵇ</text>
<text x="228" y="262" text-anchor="middle" font-size="12" font-family="sans-serif" fill="#6b21a8">Kp = Kc(RT)^Δn</text>
<rect x="425" y="150" width="295" height="120" rx="12" fill="#f3e8ff" stroke="#9333ea" stroke-width="2"/>
<text x="572" y="178" text-anchor="middle" font-size="14" font-weight="800" font-family="sans-serif" fill="#6b21a8">Le Chatelier's Principle</text>
<text x="572" y="210" text-anchor="middle" font-size="12" font-family="sans-serif" fill="#5b21b6">↑ concentration → shifts</text>
<text x="572" y="232" text-anchor="middle" font-size="12" font-family="sans-serif" fill="#5b21b6">↑ pressure → fewer moles</text>
<text x="572" y="254" text-anchor="middle" font-size="12" font-family="sans-serif" fill="#5b21b6">↑ temp → endothermic side</text>
<rect x="80" y="290" width="640" height="90" rx="12" fill="#ede9fe" stroke="#9333ea" stroke-width="2"/>
<text x="400" y="316" text-anchor="middle" font-size="14" font-weight="800" font-family="sans-serif" fill="#6b21a8">Ionic Equilibrium</text>
<text x="400" y="342" text-anchor="middle" font-size="13" font-family="monospace" fill="#5b21b6">pH = −log[H⁺] · Ka · Kb · Kw = 10⁻¹⁴</text>
<text x="400" y="368" text-anchor="middle" font-size="12" font-family="sans-serif" fill="#6b21a8">Buffer Solution · Solubility Product Ksp · Common Ion Effect</text>`
  },

  'hydrocarbons-11': {
    bg: ['#f0fdf4','#dcfce7'], accent: '#16a34a',
    svg: `<rect x="80" y="80" width="640" height="50" rx="12" fill="#15803d"/>
<text x="400" y="110" text-anchor="middle" font-size="15" font-weight="800" font-family="sans-serif" fill="#fff">Hydrocarbons — Organic Chemistry Fundamentals</text>
<rect x="80" y="150" width="180" height="140" rx="12" fill="#dcfce7" stroke="#16a34a" stroke-width="2.5"/>
<text x="170" y="178" text-anchor="middle" font-size="14" font-weight="800" font-family="sans-serif" fill="#14532d">Alkanes</text>
<text x="170" y="205" text-anchor="middle" font-size="16" font-family="monospace" font-weight="900" fill="#16a34a">CₙH₂ₙ₊₂</text>
<text x="170" y="232" text-anchor="middle" font-size="12" font-family="sans-serif" fill="#14532d">Single bonds</text>
<text x="170" y="252" text-anchor="middle" font-size="12" font-family="sans-serif" fill="#14532d">Methane, Ethane</text>
<text x="170" y="272" text-anchor="middle" font-size="12" font-family="sans-serif" fill="#14532d">Free radical</text>
<text x="170" y="285" text-anchor="middle" font-size="12" font-family="sans-serif" fill="#14532d">substitution</text>
<rect x="310" y="150" width="180" height="140" rx="12" fill="#dcfce7" stroke="#16a34a" stroke-width="2.5"/>
<text x="400" y="178" text-anchor="middle" font-size="14" font-weight="800" font-family="sans-serif" fill="#14532d">Alkenes</text>
<text x="400" y="205" text-anchor="middle" font-size="16" font-family="monospace" font-weight="900" fill="#16a34a">CₙH₂ₙ</text>
<text x="400" y="232" text-anchor="middle" font-size="12" font-family="sans-serif" fill="#14532d">C=C double bond</text>
<text x="400" y="252" text-anchor="middle" font-size="12" font-family="sans-serif" fill="#14532d">Ethylene, Propene</text>
<text x="400" y="272" text-anchor="middle" font-size="12" font-family="sans-serif" fill="#14532d">Electrophilic</text>
<text x="400" y="285" text-anchor="middle" font-size="12" font-family="sans-serif" fill="#14532d">addition</text>
<rect x="540" y="150" width="180" height="140" rx="12" fill="#dcfce7" stroke="#16a34a" stroke-width="2.5"/>
<text x="630" y="178" text-anchor="middle" font-size="14" font-weight="800" font-family="sans-serif" fill="#14532d">Alkynes</text>
<text x="630" y="205" text-anchor="middle" font-size="16" font-family="monospace" font-weight="900" fill="#16a34a">CₙH₂ₙ₋₂</text>
<text x="630" y="232" text-anchor="middle" font-size="12" font-family="sans-serif" fill="#14532d">C≡C triple bond</text>
<text x="630" y="252" text-anchor="middle" font-size="12" font-family="sans-serif" fill="#14532d">Acetylene</text>
<text x="630" y="272" text-anchor="middle" font-size="12" font-family="sans-serif" fill="#14532d">Acidic character</text>
<text x="630" y="285" text-anchor="middle" font-size="12" font-family="sans-serif" fill="#14532d">of alkynes</text>
<rect x="80" y="310" width="640" height="78" rx="12" fill="#bbf7d0" stroke="#16a34a" stroke-width="2"/>
<text x="400" y="338" text-anchor="middle" font-size="14" font-weight="800" font-family="sans-serif" fill="#14532d">Aromatic Hydrocarbons (Arenes)</text>
<text x="400" y="362" text-anchor="middle" font-size="13" font-family="monospace" fill="#15803d">Benzene C₆H₆ · Hückel rule: (4n+2)π electrons</text>
<text x="400" y="382" text-anchor="middle" font-size="12" font-family="sans-serif" fill="#14532d">Electrophilic Aromatic Substitution · Resonance · Delocalization</text>`
  },

  // ── BIOLOGY ─────────────────────────────────────────────────────

  'living-world': {
    bg: ['#f0fdf4','#dcfce7'], accent: '#16a34a',
    svg: `<rect x="80" y="70" width="640" height="50" rx="12" fill="#15803d"/>
<text x="400" y="100" text-anchor="middle" font-size="15" font-weight="800" font-family="sans-serif" fill="#fff">Biological Classification — Five Kingdom System</text>
${[
['Monera','Prokaryotes · Bacteria','#dc2626','#fee2e2',80,140],
['Protista','Unicellular Eukaryotes','#d97706','#fef3c7',220,140],
['Fungi','Saprophytic · Chitin wall','#9333ea','#f3e8ff',360,140],
['Plantae','Multicellular · Autotrophs','#16a34a','#dcfce7',500,140],
['Animalia','Multicellular · Heterotrophs','#2563eb','#dbeafe',640,140],
].map(([k,d,fg,bg2,cx,y])=>`<rect x="${cx-55}" y="${y}" width="110" height="90" rx="10" fill="${bg2}" stroke="${fg}" stroke-width="2"/>
<text x="${cx}" y="${y+28}" text-anchor="middle" font-size="13" font-weight="800" font-family="sans-serif" fill="${fg}">${k}</text>
<text x="${cx}" y="${y+48}" text-anchor="middle" font-size="10" font-family="sans-serif" fill="${fg}">${d.split('·')[0]}</text>
<text x="${cx}" y="${y+63}" text-anchor="middle" font-size="10" font-family="sans-serif" fill="${fg}">${d.split('·')[1]||''}</text>`).join('')}
<rect x="80" y="255" width="640" height="80" rx="12" fill="#dcfce7" stroke="#16a34a" stroke-width="2"/>
<text x="400" y="280" text-anchor="middle" font-size="14" font-weight="800" font-family="sans-serif" fill="#14532d">Taxonomic Hierarchy</text>
<text x="400" y="305" text-anchor="middle" font-size="13" font-family="monospace" fill="#15803d">Kingdom → Phylum → Class → Order → Family → Genus → Species</text>
<text x="400" y="326" text-anchor="middle" font-size="12" font-family="sans-serif" fill="#14532d">Binomial Nomenclature · Species: Homo sapiens</text>
<rect x="80" y="355" width="640" height="40" rx="10" fill="#15803d"/>
<text x="400" y="380" text-anchor="middle" font-size="13" font-weight="800" font-family="sans-serif" fill="#fff">Viruses · Viroids · Prions · Lichens — organisms outside five kingdoms</text>`
  },

  'cell-biology-11': {
    bg: ['#eff6ff','#dbeafe'], accent: '#2563eb',
    svg: `<ellipse cx="400" cy="210" rx="280" ry="170" fill="#dbeafe" stroke="#2563eb" stroke-width="3"/>
<ellipse cx="400" cy="210" rx="70" ry="55" fill="#bfdbfe" stroke="#1d4ed8" stroke-width="2.5"/>
<text x="400" y="214" text-anchor="middle" font-size="13" font-weight="800" font-family="sans-serif" fill="#1e3a8a">Nucleus</text>
<circle cx="270" cy="175" r="22" fill="#fde68a" stroke="#d97706" stroke-width="2"/>
<text x="270" y="180" text-anchor="middle" font-size="9" font-weight="700" font-family="sans-serif" fill="#78350f">Mito.</text>
<circle cx="530" cy="175" r="18" fill="#fed7aa" stroke="#ea580c" stroke-width="2"/>
<text x="530" y="180" text-anchor="middle" font-size="9" font-weight="700" font-family="sans-serif" fill="#7c2d12">ER</text>
<circle cx="290" cy="265" r="16" fill="#d1fae5" stroke="#059669" stroke-width="1.5"/>
<text x="290" y="270" text-anchor="middle" font-size="8" font-weight="700" font-family="sans-serif" fill="#065f46">Chloro.</text>
<circle cx="510" cy="265" r="15" fill="#f3e8ff" stroke="#9333ea" stroke-width="1.5"/>
<text x="510" y="270" text-anchor="middle" font-size="8" font-weight="700" font-family="sans-serif" fill="#5b21b6">Golgi</text>
<rect x="60" y="55" width="680" height="48" rx="12" fill="#1d4ed8"/>
<text x="400" y="84" text-anchor="middle" font-size="14" font-weight="800" font-family="monospace" fill="#fff">Prokaryotic vs Eukaryotic · Plant vs Animal Cell</text>
<rect x="80" y="360" width="640" height="40" rx="10" fill="#dbeafe" stroke="#2563eb" stroke-width="2"/>
<text x="400" y="385" text-anchor="middle" font-size="12" font-weight="700" font-family="sans-serif" fill="#1e40af">Cell membrane · Cell wall · Ribosomes · Vacuoles · Cytoskeleton · Plastids</text>`
  },

  'biomolecules-11': {
    bg: ['#fff7ed','#ffedd5'], accent: '#d97706',
    svg: `<rect x="80" y="70" width="640" height="50" rx="12" fill="#d97706"/>
<text x="400" y="100" text-anchor="middle" font-size="15" font-weight="800" font-family="sans-serif" fill="#fff">Biomolecules — Chemical Building Blocks of Life</text>
<rect x="80" y="140" width="140" height="170" rx="12" fill="#fef3c7" stroke="#d97706" stroke-width="2"/>
<text x="150" y="168" text-anchor="middle" font-size="12" font-weight="800" font-family="sans-serif" fill="#92400e">Carbohydrates</text>
<text x="150" y="192" text-anchor="middle" font-size="11" font-family="sans-serif" fill="#78350f">Glucose C₆H₁₂O₆</text>
<text x="150" y="212" text-anchor="middle" font-size="11" font-family="sans-serif" fill="#78350f">Monosaccharide</text>
<text x="150" y="232" text-anchor="middle" font-size="11" font-family="sans-serif" fill="#78350f">Disaccharide</text>
<text x="150" y="252" text-anchor="middle" font-size="11" font-family="sans-serif" fill="#78350f">Polysaccharide</text>
<text x="150" y="272" text-anchor="middle" font-size="11" font-family="sans-serif" fill="#78350f">Starch · Cellulose</text>
<rect x="240" y="140" width="140" height="170" rx="12" fill="#fef3c7" stroke="#ea580c" stroke-width="2"/>
<text x="310" y="168" text-anchor="middle" font-size="12" font-weight="800" font-family="sans-serif" fill="#9a3412">Proteins</text>
<text x="310" y="192" text-anchor="middle" font-size="11" font-family="sans-serif" fill="#7c2d12">Amino acids</text>
<text x="310" y="212" text-anchor="middle" font-size="11" font-family="sans-serif" fill="#7c2d12">Peptide bond</text>
<text x="310" y="232" text-anchor="middle" font-size="11" font-family="sans-serif" fill="#7c2d12">Primary structure</text>
<text x="310" y="252" text-anchor="middle" font-size="11" font-family="sans-serif" fill="#7c2d12">α-helix β-sheet</text>
<text x="310" y="272" text-anchor="middle" font-size="11" font-family="sans-serif" fill="#7c2d12">Enzymes</text>
<rect x="400" y="140" width="140" height="170" rx="12" fill="#fef3c7" stroke="#16a34a" stroke-width="2"/>
<text x="470" y="168" text-anchor="middle" font-size="12" font-weight="800" font-family="sans-serif" fill="#14532d">Lipids</text>
<text x="470" y="192" text-anchor="middle" font-size="11" font-family="sans-serif" fill="#15803d">Fatty acids</text>
<text x="470" y="212" text-anchor="middle" font-size="11" font-family="sans-serif" fill="#15803d">Triglycerides</text>
<text x="470" y="232" text-anchor="middle" font-size="11" font-family="sans-serif" fill="#15803d">Phospholipids</text>
<text x="470" y="252" text-anchor="middle" font-size="11" font-family="sans-serif" fill="#15803d">Cholesterol</text>
<text x="470" y="272" text-anchor="middle" font-size="11" font-family="sans-serif" fill="#15803d">Cell membrane</text>
<rect x="560" y="140" width="140" height="170" rx="12" fill="#fef3c7" stroke="#7c3aed" stroke-width="2"/>
<text x="630" y="168" text-anchor="middle" font-size="12" font-weight="800" font-family="sans-serif" fill="#5b21b6">Nucleic Acids</text>
<text x="630" y="192" text-anchor="middle" font-size="11" font-family="sans-serif" fill="#5b21b6">DNA · RNA</text>
<text x="630" y="212" text-anchor="middle" font-size="11" font-family="sans-serif" fill="#5b21b6">Nucleotides</text>
<text x="630" y="232" text-anchor="middle" font-size="11" font-family="sans-serif" fill="#5b21b6">A-T · G-C pairs</text>
<text x="630" y="252" text-anchor="middle" font-size="11" font-family="sans-serif" fill="#5b21b6">Double helix</text>
<text x="630" y="272" text-anchor="middle" font-size="11" font-family="sans-serif" fill="#5b21b6">Genetic info</text>
<rect x="80" y="330" width="640" height="52" rx="10" fill="#d97706"/>
<text x="400" y="356" text-anchor="middle" font-size="13" font-weight="800" font-family="sans-serif" fill="#fff">Enzymes: Active Site · Lock &amp; Key Model · Induced Fit</text>
<text x="400" y="376" text-anchor="middle" font-size="12" font-weight="700" font-family="sans-serif" fill="#fef3c7">Cofactors · Inhibition · Km · Vmax · Metabolic pathways</text>`
  },

  'plant-physiology-11': {
    bg: ['#f0fdf4','#dcfce7'], accent: '#15803d',
    svg: `<line x1="400" y1="380" x2="400" y2="100" stroke="#15803d" stroke-width="5"/>
<path d="M 400,200 Q 340,150 300,160 Q 340,165 400,200" fill="#22c55e" stroke="#15803d" stroke-width="2"/>
<path d="M 400,250 Q 460,200 500,210 Q 460,215 400,250" fill="#22c55e" stroke="#15803d" stroke-width="2"/>
<path d="M 400,170 Q 350,120 320,125 Q 355,135 400,170" fill="#4ade80" stroke="#16a34a" stroke-width="1.5"/>
<circle cx="400" cy="105" r="18" fill="#fde68a" opacity="0.9"/>
<text x="400" y="111" text-anchor="middle" font-size="10" font-weight="800" font-family="sans-serif" fill="#92400e">☀</text>
<line x1="400" y1="380" x2="340" y2="400" stroke="#92400e" stroke-width="3"/>
<line x1="400" y1="380" x2="460" y2="400" stroke="#92400e" stroke-width="3"/>
<line x1="400" y1="380" x2="400" y2="410" stroke="#92400e" stroke-width="3"/>
<rect x="60" y="55" width="230" height="55" rx="12" fill="#15803d"/>
<text x="175" y="80" text-anchor="middle" font-size="13" font-weight="800" font-family="sans-serif" fill="#fff">Photosynthesis</text>
<text x="175" y="102" text-anchor="middle" font-size="11" font-family="monospace" fill="#dcfce7">6CO₂+6H₂O→C₆H₁₂O₆</text>
<rect x="510" y="55" width="230" height="55" rx="12" fill="#059669"/>
<text x="625" y="80" text-anchor="middle" font-size="13" font-weight="800" font-family="sans-serif" fill="#fff">Respiration</text>
<text x="625" y="102" text-anchor="middle" font-size="11" font-family="monospace" fill="#d1fae5">C₆H₁₂O₆+O₂→CO₂+H₂O</text>
<rect x="80" y="310" width="640" height="75" rx="12" fill="#dcfce7" stroke="#16a34a" stroke-width="2"/>
<text x="400" y="336" text-anchor="middle" font-size="14" font-weight="800" font-family="sans-serif" fill="#14532d">Plant Growth &amp; Development</text>
<text x="400" y="358" text-anchor="middle" font-size="12" font-family="sans-serif" fill="#15803d">Auxins · Gibberellins · Cytokinins · ABA · Ethylene</text>
<text x="400" y="378" text-anchor="middle" font-size="12" font-family="sans-serif" fill="#14532d">Photoperiodism · Vernalisation · Seed Germination · Transpiration</text>`
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

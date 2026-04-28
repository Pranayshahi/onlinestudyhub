const fs = require('fs');
const path = require('path');
const OUT = path.join(__dirname, '../public/img/topics/class-12');

const topics = {

  // ── MATHEMATICS ─────────────────────────────────────────────────

  'relations-functions-12': {
    bg: ['#eff6ff','#dbeafe'], accent: '#2563eb',
    svg: `<rect x="60" y="60" width="680" height="50" rx="12" fill="#1d4ed8"/>
<text x="400" y="90" text-anchor="middle" font-size="15" font-weight="800" font-family="sans-serif" fill="#fff">Types of Functions — Relations and Functions (Class 12)</text>
<rect x="60" y="128" width="190" height="220" rx="12" fill="#dbeafe" stroke="#2563eb" stroke-width="2"/>
<text x="155" y="155" text-anchor="middle" font-size="13" font-weight="800" font-family="sans-serif" fill="#1e40af">Injective (One-One)</text>
${[[140,175],[140,215],[140,255],[140,295]].map(([,y],i)=>`<circle cx="100" cy="${y}" r="8" fill="#2563eb"/><circle cx="210" cy="${y}" r="8" fill="#3b82f6"/><line x1="108" y1="${y}" x2="202" y2="${y}" stroke="#60a5fa" stroke-width="2"/>`).join('')}
<rect x="305" y="128" width="190" height="220" rx="12" fill="#dcfce7" stroke="#16a34a" stroke-width="2"/>
<text x="400" y="155" text-anchor="middle" font-size="13" font-weight="800" font-family="sans-serif" fill="#14532d">Surjective (Onto)</text>
<circle cx="350" cy="185" r="8" fill="#16a34a"/>
<circle cx="350" cy="230" r="8" fill="#16a34a"/>
<circle cx="350" cy="275" r="8" fill="#16a34a"/>
<circle cx="350" cy="320" r="8" fill="#16a34a"/>
<circle cx="455" cy="205" r="8" fill="#22c55e"/>
<circle cx="455" cy="260" r="8" fill="#22c55e"/>
<circle cx="455" cy="315" r="8" fill="#22c55e"/>
<line x1="358" y1="185" x2="447" y2="205" stroke="#4ade80" stroke-width="1.8"/>
<line x1="358" y1="230" x2="447" y2="205" stroke="#4ade80" stroke-width="1.8"/>
<line x1="358" y1="275" x2="447" y2="260" stroke="#4ade80" stroke-width="1.8"/>
<line x1="358" y1="320" x2="447" y2="315" stroke="#4ade80" stroke-width="1.8"/>
<rect x="550" y="128" width="190" height="220" rx="12" fill="#f3e8ff" stroke="#9333ea" stroke-width="2"/>
<text x="645" y="155" text-anchor="middle" font-size="13" font-weight="800" font-family="sans-serif" fill="#6b21a8">Bijective (Both)</text>
${[[590,185],[590,230],[590,275],[590,320]].map(([,y],i)=>`<circle cx="590" cy="${y}" r="8" fill="#9333ea"/><circle cx="700" cy="${y}" r="8" fill="#a855f7"/><line x1="598" y1="${y}" x2="692" y2="${y}" stroke="#c4b5fd" stroke-width="2"/>`).join('')}
<rect x="60" y="365" width="680" height="38" rx="10" fill="#1d4ed8"/>
<text x="400" y="389" text-anchor="middle" font-size="13" font-weight="800" font-family="monospace" fill="#fff">Composition: (fog)(x)=f(g(x)) · Inverse f⁻¹ exists iff f is bijective</text>`
  },

  'inverse-trig': {
    bg: ['#fdf4ff','#f3e8ff'], accent: '#9333ea',
    svg: `<rect x="60" y="58" width="680" height="48" rx="12" fill="#7c3aed"/>
<text x="400" y="87" text-anchor="middle" font-size="15" font-weight="800" font-family="monospace" fill="#fff">Inverse Trigonometric Functions</text>
<rect x="70" y="120" width="300" height="55" rx="10" fill="#f3e8ff" stroke="#9333ea" stroke-width="2"/>
<text x="220" y="145" text-anchor="middle" font-size="13" font-weight="700" font-family="monospace" fill="#5b21b6">sin⁻¹: [−1,1] → [−π/2, π/2]</text>
<text x="220" y="164" text-anchor="middle" font-size="12" font-family="sans-serif" fill="#6b21a8">Principal value branch</text>
<rect x="430" y="120" width="300" height="55" rx="10" fill="#f3e8ff" stroke="#9333ea" stroke-width="2"/>
<text x="580" y="145" text-anchor="middle" font-size="13" font-weight="700" font-family="monospace" fill="#5b21b6">cos⁻¹: [−1,1] → [0, π]</text>
<text x="580" y="164" text-anchor="middle" font-size="12" font-family="sans-serif" fill="#6b21a8">Principal value branch</text>
<rect x="70" y="190" width="300" height="55" rx="10" fill="#ede9fe" stroke="#8b5cf6" stroke-width="2"/>
<text x="220" y="215" text-anchor="middle" font-size="13" font-weight="700" font-family="monospace" fill="#5b21b6">tan⁻¹: ℝ → (−π/2, π/2)</text>
<text x="220" y="234" text-anchor="middle" font-size="12" font-family="sans-serif" fill="#6b21a8">All reals → open interval</text>
<rect x="430" y="190" width="300" height="55" rx="10" fill="#ede9fe" stroke="#8b5cf6" stroke-width="2"/>
<text x="580" y="215" text-anchor="middle" font-size="13" font-weight="700" font-family="monospace" fill="#5b21b6">cot⁻¹: ℝ → (0, π)</text>
<text x="580" y="234" text-anchor="middle" font-size="12" font-family="sans-serif" fill="#6b21a8">sec⁻¹, cosec⁻¹ also defined</text>
<rect x="70" y="260" width="660" height="70" rx="12" fill="#7c3aed"/>
<text x="400" y="285" text-anchor="middle" font-size="13" font-weight="800" font-family="monospace" fill="#fff">sin⁻¹x + cos⁻¹x = π/2 · tan⁻¹x + cot⁻¹x = π/2</text>
<text x="400" y="318" text-anchor="middle" font-size="13" font-weight="700" font-family="monospace" fill="#e9d5ff">tan⁻¹x + tan⁻¹y = tan⁻¹((x+y)/(1−xy))  when xy &lt; 1</text>
<rect x="70" y="348" width="660" height="40" rx="10" fill="#f3e8ff" stroke="#9333ea" stroke-width="2"/>
<text x="400" y="373" text-anchor="middle" font-size="13" font-weight="700" font-family="monospace" fill="#5b21b6">sin⁻¹(sinx)=x for x∈[−π/2,π/2] · Graphs are reflections of trig functions</text>`
  },

  'matrices-determinants': {
    bg: ['#f0fdf4','#dcfce7'], accent: '#059669',
    svg: `<rect x="60" y="58" width="680" height="48" rx="12" fill="#065f46"/>
<text x="400" y="87" text-anchor="middle" font-size="15" font-weight="800" font-family="sans-serif" fill="#fff">Matrices and Determinants</text>
<rect x="70" y="120" width="310" height="200" rx="12" fill="#dcfce7" stroke="#059669" stroke-width="2.5"/>
<text x="225" y="147" text-anchor="middle" font-size="14" font-weight="800" font-family="sans-serif" fill="#065f46">Matrix A (2×2)</text>
<text x="225" y="185" text-anchor="middle" font-size="32" font-family="monospace" font-weight="900" fill="#059669">⎡a  b⎤</text>
<text x="225" y="225" text-anchor="middle" font-size="32" font-family="monospace" font-weight="900" fill="#059669">⎣c  d⎦</text>
<text x="225" y="265" text-anchor="middle" font-size="14" font-weight="800" font-family="monospace" fill="#065f46">|A| = ad − bc</text>
<text x="225" y="305" text-anchor="middle" font-size="13" font-family="monospace" fill="#047857">A⁻¹ = adj(A)/|A|</text>
<rect x="420" y="120" width="310" height="200" rx="12" fill="#d1fae5" stroke="#10b981" stroke-width="2.5"/>
<text x="575" y="147" text-anchor="middle" font-size="14" font-weight="800" font-family="sans-serif" fill="#065f46">Operations &amp; Types</text>
<text x="575" y="175" text-anchor="middle" font-size="12" font-family="sans-serif" fill="#047857">Addition · Scalar Multiplication</text>
<text x="575" y="198" text-anchor="middle" font-size="12" font-family="sans-serif" fill="#047857">Matrix Multiplication (rows × cols)</text>
<text x="575" y="221" text-anchor="middle" font-size="12" font-family="sans-serif" fill="#047857">Transpose · Symmetric: A=Aᵀ</text>
<text x="575" y="244" text-anchor="middle" font-size="12" font-family="sans-serif" fill="#047857">Identity · Zero · Diagonal</text>
<text x="575" y="267" text-anchor="middle" font-size="12" font-family="sans-serif" fill="#047857">Singular: |A|=0 · AB≠BA</text>
<text x="575" y="290" text-anchor="middle" font-size="12" font-family="sans-serif" fill="#047857">Orthogonal: AAᵀ=I</text>
<rect x="70" y="338" width="660" height="50" rx="12" fill="#059669"/>
<text x="400" y="361" text-anchor="middle" font-size="13" font-weight="800" font-family="monospace" fill="#fff">Cramer's Rule · System of equations: AX=B → X=A⁻¹B</text>
<text x="400" y="381" text-anchor="middle" font-size="12" font-weight="700" font-family="monospace" fill="#d1fae5">Cofactor · Minors · Adjoint · Properties of Determinants</text>`
  },

  'continuity-differentiability': {
    bg: ['#fff7ed','#ffedd5'], accent: '#ea580c',
    svg: `<line x1="80" y1="320" x2="720" y2="320" stroke="#d1d5db" stroke-width="1.5"/>
<line x1="120" y1="60" x2="120" y2="380" stroke="#d1d5db" stroke-width="1.5"/>
<path d="M 130,300 Q 250,180 370,200 Q 490,220 560,140 Q 620,90 680,110" fill="none" stroke="#ea580c" stroke-width="3.5"/>
<circle cx="370" cy="200" r="7" fill="#ea580c"/>
<line x1="280" y1="230" x2="460" y2="170" stroke="#dc2626" stroke-width="2" stroke-dasharray="6,3"/>
<text x="480" y="162" font-size="12" font-weight="700" font-family="sans-serif" fill="#dc2626">tangent</text>
<circle cx="560" cy="140" r="7" fill="#7c3aed"/>
<line x1="480" y1="185" x2="640" y2="95" stroke="#7c3aed" stroke-width="2" stroke-dasharray="6,3"/>
<text x="645" y="88" font-size="11" font-weight="700" font-family="sans-serif" fill="#7c3aed">dy/dx</text>
<rect x="80" y="55" width="680" height="48" rx="12" fill="#c2410c"/>
<text x="400" y="84" text-anchor="middle" font-size="14" font-weight="800" font-family="monospace" fill="#fff">Continuous at x=a: lim f(x) = f(a) · Differentiable ⇒ Continuous</text>
<rect x="80" y="335" width="310" height="60" rx="10" fill="#ffedd5" stroke="#ea580c" stroke-width="2"/>
<text x="235" y="357" text-anchor="middle" font-size="13" font-weight="700" font-family="monospace" fill="#7c2d12">Chain Rule: dy/dx = dy/du · du/dx</text>
<text x="235" y="380" text-anchor="middle" font-size="12" font-family="sans-serif" fill="#9a3412">Implicit · Parametric · Logarithmic</text>
<rect x="410" y="335" width="310" height="60" rx="10" fill="#ffedd5" stroke="#ea580c" stroke-width="2"/>
<text x="565" y="357" text-anchor="middle" font-size="13" font-weight="700" font-family="monospace" fill="#7c2d12">Rolle's · Mean Value Theorem</text>
<text x="565" y="380" text-anchor="middle" font-size="12" font-family="sans-serif" fill="#9a3412">∃c∈(a,b): f'(c)=(f(b)−f(a))/(b−a)</text>`
  },

  'applications-derivatives': {
    bg: ['#fdf4ff','#ede9fe'], accent: '#7c3aed',
    svg: `<line x1="80" y1="300" x2="720" y2="300" stroke="#d1d5db" stroke-width="1.5"/>
<line x1="120" y1="60" x2="120" y2="360" stroke="#d1d5db" stroke-width="1.5"/>
<path d="M 130,270 Q 230,100 370,110 Q 510,120 610,270 Q 650,330 680,310" fill="none" stroke="#7c3aed" stroke-width="3.5"/>
<circle cx="370" cy="110" r="9" fill="#dc2626"/>
<text x="370" y="98" text-anchor="middle" font-size="13" font-weight="800" font-family="sans-serif" fill="#dc2626">Maxima f'=0, f''&lt;0</text>
<line x1="290" y1="110" x2="450" y2="110" stroke="#dc2626" stroke-width="2" stroke-dasharray="5,3"/>
<circle cx="240" cy="220" r="8" fill="#059669"/>
<text x="195" y="218" text-anchor="end" font-size="12" font-weight="700" font-family="sans-serif" fill="#059669">Minima</text>
<line x1="175" y1="220" x2="305" y2="220" stroke="#059669" stroke-width="2" stroke-dasharray="5,3"/>
<rect x="80" y="58" width="680" height="48" rx="12" fill="#6d28d9"/>
<text x="400" y="87" text-anchor="middle" font-size="14" font-weight="800" font-family="monospace" fill="#fff">Applications of Derivatives</text>
<rect x="80" y="330" width="200" height="60" rx="10" fill="#ede9fe" stroke="#7c3aed" stroke-width="2"/>
<text x="180" y="353" text-anchor="middle" font-size="12" font-weight="700" font-family="sans-serif" fill="#5b21b6">Increasing/Decreasing</text>
<text x="180" y="376" text-anchor="middle" font-size="11" font-family="monospace" fill="#6b21a8">f'(x)&gt;0 or f'(x)&lt;0</text>
<rect x="300" y="330" width="200" height="60" rx="10" fill="#ede9fe" stroke="#7c3aed" stroke-width="2"/>
<text x="400" y="353" text-anchor="middle" font-size="12" font-weight="700" font-family="sans-serif" fill="#5b21b6">Tangents &amp; Normals</text>
<text x="400" y="376" text-anchor="middle" font-size="11" font-family="monospace" fill="#6b21a8">slope m = dy/dx at point</text>
<rect x="520" y="330" width="200" height="60" rx="10" fill="#ede9fe" stroke="#7c3aed" stroke-width="2"/>
<text x="620" y="353" text-anchor="middle" font-size="12" font-weight="700" font-family="sans-serif" fill="#5b21b6">Approximations</text>
<text x="620" y="376" text-anchor="middle" font-size="11" font-family="monospace" fill="#6b21a8">Δy ≈ f'(x)·Δx</text>`
  },

  'integrals': {
    bg: ['#f0fdf4','#dcfce7'], accent: '#16a34a',
    svg: `<line x1="80" y1="310" x2="720" y2="310" stroke="#d1d5db" stroke-width="1.5"/>
<line x1="120" y1="60" x2="120" y2="350" stroke="#d1d5db" stroke-width="1.5"/>
<path d="M 150,300 Q 280,80 420,120 Q 520,145 640,90" fill="none" stroke="#16a34a" stroke-width="3"/>
<path d="M 260,300 Q 280,80 420,120 Q 430,124 440,310 Z" fill="#16a34a" opacity="0.2"/>
<line x1="260" y1="60" x2="260" y2="310" stroke="#374151" stroke-width="1.5" stroke-dasharray="4,3"/>
<line x1="440" y1="60" x2="440" y2="310" stroke="#374151" stroke-width="1.5" stroke-dasharray="4,3"/>
<text x="350" y="230" text-anchor="middle" font-size="28" font-weight="900" font-family="monospace" fill="#15803d">∫f(x)dx</text>
<text x="260" y="330" text-anchor="middle" font-size="13" font-weight="700" font-family="sans-serif" fill="#374151">a</text>
<text x="440" y="330" text-anchor="middle" font-size="13" font-weight="700" font-family="sans-serif" fill="#374151">b</text>
<rect x="80" y="58" width="680" height="48" rx="12" fill="#15803d"/>
<text x="400" y="87" text-anchor="middle" font-size="14" font-weight="800" font-family="monospace" fill="#fff">∫xⁿdx = xⁿ⁺¹/(n+1)+C · ∫eˣdx = eˣ+C · ∫sinx dx = −cosx+C</text>
<rect x="80" y="345" width="310" height="50" rx="10" fill="#dcfce7" stroke="#16a34a" stroke-width="2"/>
<text x="235" y="366" text-anchor="middle" font-size="12" font-weight="700" font-family="monospace" fill="#14532d">By Parts: ∫uv dx = u∫v dx − ∫(u'∫v dx)dx</text>
<text x="235" y="387" text-anchor="middle" font-size="11" font-family="sans-serif" fill="#047857">ILATE rule for u selection</text>
<rect x="410" y="345" width="310" height="50" rx="10" fill="#dcfce7" stroke="#16a34a" stroke-width="2"/>
<text x="565" y="366" text-anchor="middle" font-size="12" font-weight="700" font-family="monospace" fill="#14532d">Definite: ∫ₐᵇf(x)dx = F(b)−F(a)</text>
<text x="565" y="387" text-anchor="middle" font-size="11" font-family="sans-serif" fill="#047857">Fundamental Theorem of Calculus</text>`
  },

  'vectors-3d': {
    bg: ['#1e1b4b','#312e81'], accent: '#818cf8',
    svg: `<line x1="200" y1="320" x2="680" y2="320" stroke="#6b7280" stroke-width="1.5"/>
<line x1="200" y1="320" x2="200" y2="80" stroke="#6b7280" stroke-width="1.5"/>
<line x1="200" y1="320" x2="80" y2="390" stroke="#6b7280" stroke-width="1.5"/>
<text x="695" y="325" font-size="14" font-weight="700" font-family="sans-serif" fill="#94a3b8">x</text>
<text x="195" y="72" font-size="14" font-weight="700" font-family="sans-serif" fill="#94a3b8">z</text>
<text x="68" y="398" font-size="14" font-weight="700" font-family="sans-serif" fill="#94a3b8">y</text>
<line x1="200" y1="320" x2="480" y2="160" stroke="#818cf8" stroke-width="3"/>
<polygon points="480,160 465,175 490,168" fill="#818cf8"/>
<text x="492" y="155" font-size="13" font-weight="800" font-family="sans-serif" fill="#a5b4fc">v⃗ = aî+bĵ+ck̂</text>
<line x1="200" y1="320" x2="380" y2="230" stroke="#34d399" stroke-width="2.5"/>
<polygon points="380,230 366,240 375,226" fill="#34d399"/>
<text x="390" y="225" font-size="12" font-weight="700" font-family="sans-serif" fill="#6ee7b7">u⃗</text>
<rect x="490" y="80" width="250" height="140" rx="12" fill="#312e81" stroke="#818cf8" stroke-width="2"/>
<text x="615" y="107" text-anchor="middle" font-size="13" font-weight="800" font-family="sans-serif" fill="#c7d2fe">Dot Product</text>
<text x="615" y="130" text-anchor="middle" font-size="12" font-family="monospace" fill="#a5b4fc">a⃗·b⃗ = |a||b|cosθ</text>
<text x="615" y="160" text-anchor="middle" font-size="13" font-weight="800" font-family="sans-serif" fill="#c7d2fe">Cross Product</text>
<text x="615" y="183" text-anchor="middle" font-size="12" font-family="monospace" fill="#a5b4fc">|a⃗×b⃗| = |a||b|sinθ</text>
<text x="615" y="208" text-anchor="middle" font-size="11" font-family="sans-serif" fill="#818cf8">perpendicular to both</text>
<rect x="80" y="80" width="370" height="60" rx="12" fill="#4338ca"/>
<text x="265" y="105" text-anchor="middle" font-size="13" font-weight="800" font-family="monospace" fill="#e0e7ff">3D: distance = √(x²+y²+z²)</text>
<text x="265" y="132" text-anchor="middle" font-size="12" font-weight="700" font-family="monospace" fill="#c7d2fe">Direction cosines: l²+m²+n²=1</text>
<rect x="80" y="355" width="660" height="40" rx="10" fill="#4338ca"/>
<text x="400" y="380" text-anchor="middle" font-size="12" font-weight="800" font-family="monospace" fill="#e0e7ff">Plane: ax+by+cz=d · Line: (x−x₁)/l = (y−y₁)/m = (z−z₁)/n</text>`
  },

  'probability-12': {
    bg: ['#fff7ed','#ffedd5'], accent: '#d97706',
    svg: `<rect x="60" y="58" width="680" height="48" rx="12" fill="#b45309"/>
<text x="400" y="87" text-anchor="middle" font-size="15" font-weight="800" font-family="sans-serif" fill="#fff">Probability — Bayes' Theorem &amp; Distributions</text>
<circle cx="260" cy="200" r="9" fill="#d97706"/>
<text x="260" y="185" text-anchor="middle" font-size="13" font-weight="700" font-family="sans-serif" fill="#92400e">Start</text>
<line x1="260" y1="209" x2="160" y2="280" stroke="#d97706" stroke-width="2.5"/>
<line x1="260" y1="209" x2="360" y2="280" stroke="#d97706" stroke-width="2.5"/>
<circle cx="160" cy="288" r="8" fill="#059669"/>
<circle cx="360" cy="288" r="8" fill="#dc2626"/>
<text x="120" y="284" text-anchor="end" font-size="12" font-weight="700" font-family="sans-serif" fill="#059669">P(A)=0.6</text>
<text x="400" y="284" font-size="12" font-weight="700" font-family="sans-serif" fill="#dc2626">P(A')=0.4</text>
<line x1="160" y1="296" x2="105" y2="355" stroke="#059669" stroke-width="2"/>
<line x1="160" y1="296" x2="215" y2="355" stroke="#059669" stroke-width="2"/>
<line x1="360" y1="296" x2="305" y2="355" stroke="#dc2626" stroke-width="2"/>
<line x1="360" y1="296" x2="415" y2="355" stroke="#dc2626" stroke-width="2"/>
<circle cx="105" cy="360" r="7" fill="#3b82f6"/><text x="105" y="385" text-anchor="middle" font-size="10" font-family="sans-serif" fill="#1e40af">P(B|A)</text>
<circle cx="215" cy="360" r="7" fill="#f97316"/><text x="215" y="385" text-anchor="middle" font-size="10" font-family="sans-serif" fill="#c2410c">P(B'|A)</text>
<circle cx="305" cy="360" r="7" fill="#3b82f6"/><text x="305" y="385" text-anchor="middle" font-size="10" font-family="sans-serif" fill="#1e40af">P(B|A')</text>
<circle cx="415" cy="360" r="7" fill="#f97316"/><text x="415" y="385" text-anchor="middle" font-size="10" font-family="sans-serif" fill="#c2410c">P(B'|A')</text>
<rect x="490" y="120" width="260" height="230" rx="14" fill="#fef3c7" stroke="#d97706" stroke-width="2.5"/>
<text x="620" y="148" text-anchor="middle" font-size="14" font-weight="800" font-family="sans-serif" fill="#92400e">Bayes' Theorem</text>
<text x="620" y="185" text-anchor="middle" font-size="16" font-family="monospace" font-weight="900" fill="#b45309">P(A|B) =</text>
<text x="620" y="215" text-anchor="middle" font-size="14" font-family="monospace" font-weight="800" fill="#92400e">P(B|A)·P(A)</text>
<line x1="510" y1="225" x2="730" y2="225" stroke="#d97706" stroke-width="2"/>
<text x="620" y="248" text-anchor="middle" font-size="14" font-family="monospace" font-weight="800" fill="#92400e">P(B)</text>
<text x="620" y="280" text-anchor="middle" font-size="12" font-weight="700" font-family="sans-serif" fill="#78350f">Binomial Distribution</text>
<text x="620" y="302" text-anchor="middle" font-size="12" font-family="monospace" fill="#92400e">P(X=r) = ⁿCᵣ pʳqⁿ⁻ʳ</text>
<text x="620" y="325" text-anchor="middle" font-size="12" font-weight="700" font-family="sans-serif" fill="#78350f">Mean = np · Var = npq</text>`
  },

  // ── PHYSICS ─────────────────────────────────────────────────────

  'electrostatics': {
    bg: ['#1e1b4b','#312e81'], accent: '#818cf8',
    svg: `<circle cx="280" cy="210" r="38" fill="#fbbf24"/>
<text x="280" y="218" text-anchor="middle" font-size="22" font-weight="900" font-family="sans-serif" fill="#1e1b4b">+q</text>
<circle cx="520" cy="210" r="38" fill="#60a5fa"/>
<text x="520" y="218" text-anchor="middle" font-size="22" font-weight="900" font-family="sans-serif" fill="#1e1b4b">−q</text>
${[[-50,-50],[-50,0],[-50,50],[50,-50],[50,0],[50,50]].map(([dx,dy])=>`<line x1="${280+dx*0.3}" y1="${210+dy*0.3}" x2="${280+dx}" y2="${210+dy}" stroke="#fbbf24" stroke-width="1.5" opacity="0.7"/>`).join('')}
${[[-50,-50],[-50,0],[-50,50],[50,-50],[50,0],[50,50]].map(([dx,dy])=>`<line x1="${520-dx*0.3}" y1="${210-dy*0.3}" x2="${520-dx}" y2="${210-dy}" stroke="#60a5fa" stroke-width="1.5" opacity="0.7"/>`).join('')}
<line x1="318" y1="210" x2="482" y2="210" stroke="#e0e7ff" stroke-width="2.5" stroke-dasharray="6,4"/>
<rect x="80" y="58" width="640" height="50" rx="12" fill="#4338ca"/>
<text x="400" y="83" text-anchor="middle" font-size="14" font-weight="800" font-family="monospace" fill="#e0e7ff">Coulomb: F = kq₁q₂/r² · k = 9×10⁹ Nm²C⁻²</text>
<text x="400" y="102" text-anchor="middle" font-size="12" font-weight="700" font-family="monospace" fill="#c7d2fe">ε₀ = 8.85×10⁻¹² C²N⁻¹m⁻²</text>
<rect x="80" y="290" width="300" height="90" rx="12" fill="#312e81" stroke="#818cf8" stroke-width="2"/>
<text x="230" y="315" text-anchor="middle" font-size="13" font-weight="700" font-family="sans-serif" fill="#c7d2fe">Electric Field E = F/q</text>
<text x="230" y="338" text-anchor="middle" font-size="12" font-family="monospace" fill="#a5b4fc">E = kq/r² (point charge)</text>
<text x="230" y="360" text-anchor="middle" font-size="12" font-family="sans-serif" fill="#818cf8">Gauss's Law: φ = q/ε₀</text>
<rect x="420" y="290" width="300" height="90" rx="12" fill="#312e81" stroke="#818cf8" stroke-width="2"/>
<text x="570" y="315" text-anchor="middle" font-size="13" font-weight="700" font-family="sans-serif" fill="#c7d2fe">Electric Potential V = kq/r</text>
<text x="570" y="338" text-anchor="middle" font-size="12" font-family="monospace" fill="#a5b4fc">E = −dV/dr</text>
<text x="570" y="360" text-anchor="middle" font-size="12" font-family="sans-serif" fill="#818cf8">Capacitance: C = Q/V</text>`
  },

  'current-electricity': {
    bg: ['#f0fdf4','#dcfce7'], accent: '#059669',
    svg: `<rect x="150" y="120" width="500" height="200" rx="0" fill="none" stroke="#374151" stroke-width="0"/>
<line x1="150" y1="150" x2="650" y2="150" stroke="#374151" stroke-width="2.5"/>
<line x1="650" y1="150" x2="650" y2="280" stroke="#374151" stroke-width="2.5"/>
<line x1="650" y1="280" x2="150" y2="280" stroke="#374151" stroke-width="2.5"/>
<line x1="150" y1="280" x2="150" y2="150" stroke="#374151" stroke-width="2.5"/>
<rect x="220" y="135" width="80" height="30" rx="4" fill="#fde68a" stroke="#d97706" stroke-width="2"/>
<text x="260" y="155" text-anchor="middle" font-size="11" font-weight="700" font-family="sans-serif" fill="#78350f">R₁ 5Ω</text>
<rect x="400" y="135" width="80" height="30" rx="4" fill="#fde68a" stroke="#d97706" stroke-width="2"/>
<text x="440" y="155" text-anchor="middle" font-size="11" font-weight="700" font-family="sans-serif" fill="#78350f">R₂ 10Ω</text>
<rect x="600" y="185" width="30" height="70" rx="4" fill="#60a5fa" stroke="#2563eb" stroke-width="2"/>
<text x="645" y="225" font-size="10" font-weight="700" font-family="sans-serif" fill="#1e40af">12V</text>
<polygon points="665,215 680,215 672,200" fill="#059669"/>
<text x="400" y="235" text-anchor="middle" font-size="16" font-weight="900" font-family="monospace" fill="#065f46">I = V/R</text>
<text x="400" y="265" text-anchor="middle" font-size="13" font-weight="700" font-family="monospace" fill="#047857">P = VI = I²R = V²/R</text>
<rect x="80" y="58" width="640" height="48" rx="12" fill="#065f46"/>
<text x="400" y="84" text-anchor="middle" font-size="14" font-weight="800" font-family="monospace" fill="#fff">Ohm's Law: V=IR · Series: R=R₁+R₂ · Parallel: 1/R=1/R₁+1/R₂</text>
<rect x="80" y="340" width="640" height="52" rx="10" fill="#dcfce7" stroke="#059669" stroke-width="2"/>
<text x="400" y="363" text-anchor="middle" font-size="13" font-weight="700" font-family="sans-serif" fill="#065f46">Kirchhoff's Laws: ΣI=0 (junction) · ΣV=0 (loop)</text>
<text x="400" y="384" text-anchor="middle" font-size="12" font-family="sans-serif" fill="#047857">Wheatstone Bridge · Meter Bridge · Potentiometer · Internal Resistance</text>`
  },

  'magnetism-electromagnetism': {
    bg: ['#fff1f2','#ffe4e6'], accent: '#e11d48',
    svg: `<rect x="310" y="100" width="180" height="240" rx="8" fill="#fecdd3" stroke="#e11d48" stroke-width="2.5"/>
<text x="400" y="130" text-anchor="middle" font-size="14" font-weight="800" font-family="sans-serif" fill="#9f1239">Coil (N turns)</text>
${Array.from({length:8},(_,i)=>`<ellipse cx="400" cy="${145+i*22}" rx="70" ry="10" fill="none" stroke="#be123c" stroke-width="2" opacity="${0.5+i*0.06}"/>`).join('')}
<rect x="140" y="155" width="50" height="120" rx="6" fill="#ef4444"/>
<rect x="155" y="168" width="20" height="94" rx="3" fill="#991b1b"/>
<text x="165" y="220" text-anchor="middle" font-size="11" font-weight="800" font-family="sans-serif" fill="#fff">N</text>
<text x="165" y="245" text-anchor="middle" font-size="11" font-weight="800" font-family="sans-serif" fill="#fff">S</text>
<polygon points="140,210 110,210 126,200" fill="#f97316"/>
<polygon points="140,220 110,220 126,230" fill="#f97316"/>
<text x="95" y="215" text-anchor="middle" font-size="11" font-weight="700" font-family="sans-serif" fill="#c2410c">motion</text>
<rect x="80" y="58" width="640" height="48" rx="12" fill="#be123c"/>
<text x="400" y="84" text-anchor="middle" font-size="14" font-weight="800" font-family="monospace" fill="#fff">Faraday: EMF = −N·dΦ/dt · Φ = BAcosθ</text>
<rect x="80" y="355" width="300" height="50" rx="10" fill="#ffe4e6" stroke="#e11d48" stroke-width="2"/>
<text x="230" y="378" text-anchor="middle" font-size="12" font-weight="700" font-family="monospace" fill="#9f1239">F = qv×B · F = BIL·sinθ</text>
<rect x="420" y="355" width="300" height="50" rx="10" fill="#ffe4e6" stroke="#e11d48" stroke-width="2"/>
<text x="570" y="372" text-anchor="middle" font-size="12" font-weight="700" font-family="sans-serif" fill="#9f1239">Lenz's Law · Self Induction</text>
<text x="570" y="394" text-anchor="middle" font-size="11" font-family="monospace" fill="#be123c">EMF = −L·dI/dt · L = μ₀n²V</text>`
  },

  'optics-12': {
    bg: ['#eff6ff','#dbeafe'], accent: '#2563eb',
    svg: `<line x1="80" y1="215" x2="720" y2="215" stroke="#94a3b8" stroke-width="1.5" stroke-dasharray="5,4"/>
<path d="M 380,80 Q 380,80 380,360" fill="none" stroke="#374151" stroke-width="1.5"/>
<ellipse cx="380" cy="215" rx="12" ry="110" fill="#bfdbfe" stroke="#2563eb" stroke-width="2.5"/>
<line x1="120" y1="160" x2="380" y2="160" stroke="#fbbf24" stroke-width="2.5"/>
<line x1="380" y1="160" x2="600" y2="250" stroke="#fbbf24" stroke-width="2.5"/>
<line x1="120" y1="270" x2="380" y2="270" stroke="#f97316" stroke-width="2.5"/>
<line x1="380" y1="270" x2="600" y2="185" stroke="#f97316" stroke-width="2.5"/>
<circle cx="560" cy="218" r="7" fill="#dc2626"/>
<text x="565" y="210" font-size="11" font-weight="700" font-family="sans-serif" fill="#dc2626">Image</text>
<line x1="560" y1="90" x2="560" y2="350" stroke="#dc2626" stroke-width="1.5" stroke-dasharray="4,3" opacity="0.5"/>
<rect x="80" y="58" width="640" height="48" rx="12" fill="#1d4ed8"/>
<text x="400" y="84" text-anchor="middle" font-size="14" font-weight="800" font-family="monospace" fill="#fff">Snell's Law: n₁sinθ₁ = n₂sinθ₂ · Lens: 1/v−1/u = 1/f</text>
<rect x="80" y="345" width="300" height="52" rx="10" fill="#dbeafe" stroke="#2563eb" stroke-width="2"/>
<text x="230" y="367" text-anchor="middle" font-size="12" font-weight="700" font-family="sans-serif" fill="#1e40af">Mirror: 1/v+1/u = 1/f = 1/2R</text>
<text x="230" y="388" text-anchor="middle" font-size="11" font-family="sans-serif" fill="#1e40af">m = −v/u · f = R/2</text>
<rect x="420" y="345" width="300" height="52" rx="10" fill="#dbeafe" stroke="#2563eb" stroke-width="2"/>
<text x="570" y="367" text-anchor="middle" font-size="12" font-weight="700" font-family="sans-serif" fill="#1e40af">Wave Optics: d·sinθ = nλ</text>
<text x="570" y="388" text-anchor="middle" font-size="11" font-family="sans-serif" fill="#1e40af">Young's Double Slit · Diffraction</text>`
  },

  'semiconductor-devices': {
    bg: ['#1e1b4b','#312e81'], accent: '#818cf8',
    svg: `<rect x="150" y="130" width="200" height="160" rx="8" fill="#312e81" stroke="#818cf8" stroke-width="2.5"/>
<text x="250" y="175" text-anchor="middle" font-size="18" font-weight="900" font-family="sans-serif" fill="#a5b4fc">p-type</text>
<text x="250" y="205" text-anchor="middle" font-size="13" font-weight="700" font-family="sans-serif" fill="#818cf8">Holes (⊕)</text>
${[[195,230],[230,245],[265,230],[200,258],[240,260]].map(([x,y])=>`<text x="${x}" y="${y}" font-size="16" font-weight="900" font-family="sans-serif" fill="#f472b6">⊕</text>`).join('')}
<rect x="450" y="130" width="200" height="160" rx="8" fill="#1e3a8a" stroke="#60a5fa" stroke-width="2.5"/>
<text x="550" y="175" text-anchor="middle" font-size="18" font-weight="900" font-family="sans-serif" fill="#93c5fd">n-type</text>
<text x="550" y="205" text-anchor="middle" font-size="13" font-weight="700" font-family="sans-serif" fill="#60a5fa">Electrons (⊖)</text>
${[[495,230],[530,245],[565,230],[500,258],[540,260]].map(([x,y])=>`<text x="${x}" y="${y}" font-size="16" font-weight="900" font-family="sans-serif" fill="#34d399">⊖</text>`).join('')}
<rect x="348" y="130" width="104" height="160" rx="0" fill="#4338ca" opacity="0.7"/>
<text x="400" y="215" text-anchor="middle" font-size="11" font-weight="800" font-family="sans-serif" fill="#c7d2fe">Depletion</text>
<text x="400" y="232" text-anchor="middle" font-size="11" font-weight="800" font-family="sans-serif" fill="#c7d2fe">Region</text>
<rect x="80" y="58" width="640" height="50" rx="12" fill="#4338ca"/>
<text x="400" y="82" text-anchor="middle" font-size="13" font-weight="800" font-family="monospace" fill="#e0e7ff">p-n Junction Diode · Forward Bias: conducts · Reverse Bias: blocks</text>
<text x="400" y="103" text-anchor="middle" font-size="12" font-weight="700" font-family="monospace" fill="#c7d2fe">Potential Barrier: 0.3V (Ge) · 0.7V (Si)</text>
<rect x="80" y="320" width="640" height="68" rx="12" fill="#312e81" stroke="#818cf8" stroke-width="2"/>
<text x="400" y="345" text-anchor="middle" font-size="13" font-weight="800" font-family="sans-serif" fill="#c7d2fe">Transistor (npn/pnp) · Logic Gates: AND OR NOT NAND NOR</text>
<text x="400" y="368" text-anchor="middle" font-size="12" font-family="sans-serif" fill="#a5b4fc">Zener Diode (voltage regulation) · LED · Photodiode</text>
<text x="400" y="384" text-anchor="middle" font-size="11" font-family="monospace" fill="#818cf8">Boolean Algebra: De Morgan's · Rectifier circuits</text>`
  },

  // ── CHEMISTRY ───────────────────────────────────────────────────

  'solid-state': {
    bg: ['#f0f9ff','#e0f2fe'], accent: '#0369a1',
    svg: `<rect x="80" y="58" width="640" height="48" rx="12" fill="#0369a1"/>
<text x="400" y="87" text-anchor="middle" font-size="15" font-weight="800" font-family="sans-serif" fill="#fff">The Solid State — Crystal Lattice Structures</text>
${[0,1,2].map(row=>[0,1,2].map(col=>{
const x=160+col*140, y=130+row*80;
return `<rect x="${x-28}" y="${y-28}" width="56" height="56" rx="8" fill="#bae6fd" stroke="#0369a1" stroke-width="2"/>
<circle cx="${x}" cy="${y}" r="14" fill="#0369a1"/>`;
}).join('')).join('')}
<rect x="490" y="110" width="240" height="210" rx="14" fill="#e0f2fe" stroke="#0369a1" stroke-width="2.5"/>
<text x="610" y="138" text-anchor="middle" font-size="13" font-weight="800" font-family="sans-serif" fill="#075985">Unit Cell Types</text>
<text x="610" y="163" text-anchor="middle" font-size="12" font-family="sans-serif" fill="#0369a1">Simple Cubic (SC): 1</text>
<text x="610" y="185" text-anchor="middle" font-size="12" font-family="sans-serif" fill="#0369a1">BCC: 2 atoms · 68%</text>
<text x="610" y="207" text-anchor="middle" font-size="12" font-family="sans-serif" fill="#0369a1">FCC/CCP: 4 atoms · 74%</text>
<text x="610" y="229" text-anchor="middle" font-size="12" font-family="sans-serif" fill="#0369a1">HCP: 74% packing</text>
<text x="610" y="255" text-anchor="middle" font-size="12" font-family="sans-serif" fill="#0369a1">Voids: Tetrahedral &amp; Octahedral</text>
<text x="610" y="279" text-anchor="middle" font-size="12" font-family="sans-serif" fill="#0369a1">Ionic · Covalent · Metallic</text>
<text x="610" y="302" text-anchor="middle" font-size="12" font-family="sans-serif" fill="#0369a1">Molecular · Amorphous</text>
<rect x="80" y="348" width="370" height="50" rx="10" fill="#e0f2fe" stroke="#0369a1" stroke-width="2"/>
<text x="265" y="370" text-anchor="middle" font-size="12" font-weight="700" font-family="monospace" fill="#075985">Density: ρ = Z·M / Nₐ·a³</text>
<text x="265" y="390" text-anchor="middle" font-size="11" font-family="sans-serif" fill="#0369a1">Z=atoms/cell, a=edge length</text>`
  },

  'solutions': {
    bg: ['#f0fdf4','#dcfce7'], accent: '#16a34a',
    svg: `<rect x="80" y="58" width="640" height="48" rx="12" fill="#15803d"/>
<text x="400" y="87" text-anchor="middle" font-size="15" font-weight="800" font-family="sans-serif" fill="#fff">Solutions — Concentration &amp; Colligative Properties</text>
<rect x="80" y="120" width="300" height="200" rx="12" fill="#dcfce7" stroke="#16a34a" stroke-width="2.5"/>
<text x="230" y="148" text-anchor="middle" font-size="14" font-weight="800" font-family="sans-serif" fill="#14532d">Concentration Units</text>
<text x="230" y="175" text-anchor="middle" font-size="12" font-family="monospace" fill="#15803d">Molarity M = n/V(L)</text>
<text x="230" y="198" text-anchor="middle" font-size="12" font-family="monospace" fill="#15803d">Molality m = n/W(kg)</text>
<text x="230" y="221" text-anchor="middle" font-size="12" font-family="monospace" fill="#15803d">Mole fraction X = n₁/n_total</text>
<text x="230" y="244" text-anchor="middle" font-size="12" font-family="monospace" fill="#15803d">Mass% = (w₁/w)×100</text>
<text x="230" y="267" text-anchor="middle" font-size="12" font-family="sans-serif" fill="#14532d">Normality · ppm</text>
<text x="230" y="290" text-anchor="middle" font-size="12" font-family="sans-serif" fill="#14532d">Henry's Law: p = KH·x</text>
<text x="230" y="307" text-anchor="middle" font-size="12" font-family="sans-serif" fill="#14532d">Raoult's Law: p = x₁p°₁+x₂p°₂</text>
<rect x="420" y="120" width="300" height="200" rx="12" fill="#d1fae5" stroke="#059669" stroke-width="2.5"/>
<text x="570" y="148" text-anchor="middle" font-size="14" font-weight="800" font-family="sans-serif" fill="#065f46">Colligative Properties</text>
<text x="570" y="175" text-anchor="middle" font-size="12" font-family="sans-serif" fill="#047857">Relative lowering of VP</text>
<text x="570" y="198" text-anchor="middle" font-size="12" font-family="monospace" fill="#047857">ΔTb = iKb·m (boiling ↑)</text>
<text x="570" y="221" text-anchor="middle" font-size="12" font-family="monospace" fill="#047857">ΔTf = iKf·m (freezing ↓)</text>
<text x="570" y="244" text-anchor="middle" font-size="12" font-family="monospace" fill="#047857">π = iMRT (osmosis)</text>
<text x="570" y="267" text-anchor="middle" font-size="12" font-family="sans-serif" fill="#065f46">Van't Hoff factor i</text>
<text x="570" y="290" text-anchor="middle" font-size="12" font-family="sans-serif" fill="#065f46">Reverse Osmosis</text>
<text x="570" y="307" text-anchor="middle" font-size="12" font-family="sans-serif" fill="#065f46">Semipermeable membrane</text>
<rect x="80" y="340" width="640" height="42" rx="10" fill="#15803d"/>
<text x="400" y="366" text-anchor="middle" font-size="13" font-weight="800" font-family="monospace" fill="#fff">Ideal vs Non-Ideal Solutions · Azeotropes · Osmotic pressure</text>`
  },

  'electrochemistry': {
    bg: ['#fff7ed','#ffedd5'], accent: '#d97706',
    svg: `<rect x="150" y="100" width="500" height="230" rx="16" fill="#fef3c7" stroke="#d97706" stroke-width="2.5"/>
<rect x="170" y="130" width="180" height="170" rx="10" fill="#fde68a" stroke="#b45309" stroke-width="2"/>
<text x="260" y="160" text-anchor="middle" font-size="14" font-weight="800" font-family="sans-serif" fill="#78350f">Anode (−)</text>
<text x="260" y="183" text-anchor="middle" font-size="12" font-family="sans-serif" fill="#92400e">Oxidation occurs</text>
<text x="260" y="205" text-anchor="middle" font-size="12" font-family="monospace" fill="#92400e">Zn → Zn²⁺ + 2e⁻</text>
<text x="260" y="228" text-anchor="middle" font-size="12" font-family="sans-serif" fill="#92400e">ZnSO₄ (aq)</text>
<rect x="450" y="130" width="180" height="170" rx="10" fill="#dbeafe" stroke="#2563eb" stroke-width="2"/>
<text x="540" y="160" text-anchor="middle" font-size="14" font-weight="800" font-family="sans-serif" fill="#1e40af">Cathode (+)</text>
<text x="540" y="183" text-anchor="middle" font-size="12" font-family="sans-serif" fill="#1e40af">Reduction occurs</text>
<text x="540" y="205" text-anchor="middle" font-size="12" font-family="monospace" fill="#1e40af">Cu²⁺ + 2e⁻ → Cu</text>
<text x="540" y="228" text-anchor="middle" font-size="12" font-family="sans-serif" fill="#1e40af">CuSO₄ (aq)</text>
<line x1="350" y1="160" x2="450" y2="160" stroke="#374151" stroke-width="2.5"/>
<text x="400" y="153" text-anchor="middle" font-size="11" font-weight="700" font-family="sans-serif" fill="#374151">Salt Bridge</text>
<line x1="260" y1="130" x2="260" y2="100" stroke="#374151" stroke-width="2"/>
<line x1="540" y1="130" x2="540" y2="100" stroke="#374151" stroke-width="2"/>
<line x1="260" y1="100" x2="540" y2="100" stroke="#374151" stroke-width="2"/>
<text x="400" y="95" text-anchor="middle" font-size="12" font-weight="700" font-family="sans-serif" fill="#374151">e⁻ flow →</text>
<rect x="80" y="58" width="640" height="48" rx="12" fill="#b45309"/>
<text x="400" y="84" text-anchor="middle" font-size="14" font-weight="800" font-family="monospace" fill="#fff">Nernst: E = E° − (RT/nF)·lnQ · At 25°C: E = E°−0.0592/n·logQ</text>
<rect x="80" y="350" width="640" height="42" rx="10" fill="#fef3c7" stroke="#d97706" stroke-width="2"/>
<text x="400" y="376" text-anchor="middle" font-size="12" font-weight="700" font-family="sans-serif" fill="#78350f">Faraday's Laws · Conductance · Kohlrausch's Law · Electrolytic cells · ΔG° = −nFE°</text>`
  },

  'organic-chemistry-12': {
    bg: ['#fdf4ff','#f3e8ff'], accent: '#9333ea',
    svg: `<rect x="80" y="58" width="640" height="48" rx="12" fill="#7c3aed"/>
<text x="400" y="87" text-anchor="middle" font-size="14" font-weight="800" font-family="sans-serif" fill="#fff">Aldehydes, Ketones and Carboxylic Acids</text>
<rect x="80" y="120" width="190" height="200" rx="12" fill="#f3e8ff" stroke="#9333ea" stroke-width="2.5"/>
<text x="175" y="148" text-anchor="middle" font-size="13" font-weight="800" font-family="sans-serif" fill="#5b21b6">Aldehyde</text>
<text x="175" y="178" text-anchor="middle" font-size="22" font-family="monospace" font-weight="900" fill="#7c3aed">R−CHO</text>
<text x="175" y="210" text-anchor="middle" font-size="12" font-family="sans-serif" fill="#5b21b6">Carbonyl at end</text>
<text x="175" y="232" text-anchor="middle" font-size="12" font-family="sans-serif" fill="#5b21b6">Fehling's +ve</text>
<text x="175" y="254" text-anchor="middle" font-size="12" font-family="sans-serif" fill="#5b21b6">Tollens' +ve</text>
<text x="175" y="276" text-anchor="middle" font-size="12" font-family="sans-serif" fill="#5b21b6">Nucleophilic addition</text>
<text x="175" y="296" text-anchor="middle" font-size="12" font-family="sans-serif" fill="#5b21b6">HCHO=Methanal</text>
<rect x="305" y="120" width="190" height="200" rx="12" fill="#ede9fe" stroke="#8b5cf6" stroke-width="2.5"/>
<text x="400" y="148" text-anchor="middle" font-size="13" font-weight="800" font-family="sans-serif" fill="#5b21b6">Ketone</text>
<text x="400" y="178" text-anchor="middle" font-size="22" font-family="monospace" font-weight="900" fill="#7c3aed">R−CO−R'</text>
<text x="400" y="210" text-anchor="middle" font-size="12" font-family="sans-serif" fill="#5b21b6">Carbonyl in middle</text>
<text x="400" y="232" text-anchor="middle" font-size="12" font-family="sans-serif" fill="#5b21b6">Fehling's −ve</text>
<text x="400" y="254" text-anchor="middle" font-size="12" font-family="sans-serif" fill="#5b21b6">Tollens' −ve</text>
<text x="400" y="276" text-anchor="middle" font-size="12" font-family="sans-serif" fill="#5b21b6">Nucleophilic addition</text>
<text x="400" y="296" text-anchor="middle" font-size="12" font-family="sans-serif" fill="#5b21b6">CH₃COCH₃=Acetone</text>
<rect x="530" y="120" width="190" height="200" rx="12" fill="#ddd6fe" stroke="#7c3aed" stroke-width="2.5"/>
<text x="625" y="148" text-anchor="middle" font-size="13" font-weight="800" font-family="sans-serif" fill="#4c1d95">Carboxylic Acid</text>
<text x="625" y="178" text-anchor="middle" font-size="20" font-family="monospace" font-weight="900" fill="#5b21b6">R−COOH</text>
<text x="625" y="210" text-anchor="middle" font-size="12" font-family="sans-serif" fill="#4c1d95">Acidic: pKa ~4-5</text>
<text x="625" y="232" text-anchor="middle" font-size="12" font-family="sans-serif" fill="#4c1d95">Esterification</text>
<text x="625" y="254" text-anchor="middle" font-size="12" font-family="sans-serif" fill="#4c1d95">Decarboxylation</text>
<text x="625" y="276" text-anchor="middle" font-size="12" font-family="sans-serif" fill="#4c1d95">Hell-Volhard-Zelinski</text>
<text x="625" y="296" text-anchor="middle" font-size="12" font-family="sans-serif" fill="#4c1d95">HCOOH=Formic acid</text>
<rect x="80" y="340" width="640" height="42" rx="10" fill="#7c3aed"/>
<text x="400" y="366" text-anchor="middle" font-size="12" font-weight="800" font-family="sans-serif" fill="#fff">Aldol Condensation · Cannizzaro · Clemmensen reduction · Wolf-Kishner</text>`
  },

  'amines-polymers': {
    bg: ['#f0fdf4','#dcfce7'], accent: '#15803d',
    svg: `<rect x="80" y="58" width="640" height="48" rx="12" fill="#15803d"/>
<text x="400" y="87" text-anchor="middle" font-size="15" font-weight="800" font-family="sans-serif" fill="#fff">Amines and Polymers</text>
<rect x="80" y="120" width="310" height="210" rx="12" fill="#dcfce7" stroke="#16a34a" stroke-width="2.5"/>
<text x="235" y="148" text-anchor="middle" font-size="14" font-weight="800" font-family="sans-serif" fill="#14532d">Amines (N-containing)</text>
<text x="235" y="175" text-anchor="middle" font-size="13" font-family="monospace" fill="#15803d">Primary: R−NH₂</text>
<text x="235" y="200" text-anchor="middle" font-size="13" font-family="monospace" fill="#15803d">Secondary: R₂NH</text>
<text x="235" y="225" text-anchor="middle" font-size="13" font-family="monospace" fill="#15803d">Tertiary: R₃N</text>
<text x="235" y="250" text-anchor="middle" font-size="12" font-family="sans-serif" fill="#14532d">Basic due to lone pair on N</text>
<text x="235" y="272" text-anchor="middle" font-size="12" font-family="sans-serif" fill="#14532d">Basicity: 3° &lt; 2° &lt; 1° (gas phase)</text>
<text x="235" y="294" text-anchor="middle" font-size="12" font-family="sans-serif" fill="#14532d">Diazonium salts: ArN₂⁺Cl⁻</text>
<text x="235" y="313" text-anchor="middle" font-size="12" font-family="sans-serif" fill="#14532d">Coupling reaction → azo dyes</text>
<rect x="420" y="120" width="300" height="210" rx="12" fill="#bbf7d0" stroke="#059669" stroke-width="2.5"/>
<text x="570" y="148" text-anchor="middle" font-size="14" font-weight="800" font-family="sans-serif" fill="#065f46">Polymers</text>
<text x="570" y="175" text-anchor="middle" font-size="12" font-family="sans-serif" fill="#047857">Addition (chain growth):</text>
<text x="570" y="196" text-anchor="middle" font-size="12" font-family="monospace" fill="#047857">Polyethylene, PVC, PTFE</text>
<text x="570" y="220" text-anchor="middle" font-size="12" font-family="sans-serif" fill="#047857">Condensation (step growth):</text>
<text x="570" y="241" text-anchor="middle" font-size="12" font-family="monospace" fill="#047857">Nylon-6,6 · Dacron · Bakelite</text>
<text x="570" y="265" text-anchor="middle" font-size="12" font-family="sans-serif" fill="#065f46">Natural: Starch · Cellulose · Rubber</text>
<text x="570" y="287" text-anchor="middle" font-size="12" font-family="sans-serif" fill="#065f46">Biodegradable: PHBV</text>
<text x="570" y="310" text-anchor="middle" font-size="12" font-family="sans-serif" fill="#065f46">Copolymer · Elastomers</text>
<rect x="80" y="350" width="640" height="42" rx="10" fill="#15803d"/>
<text x="400" y="376" text-anchor="middle" font-size="12" font-weight="800" font-family="sans-serif" fill="#fff">Biomolecules: Vitamins · Hormones · Nucleic Acids · Drugs &amp; their targets</text>`
  },

  // ── BIOLOGY ─────────────────────────────────────────────────────

  'genetics': {
    bg: ['#fff7ed','#ffedd5'], accent: '#d97706',
    svg: `<rect x="80" y="58" width="640" height="48" rx="12" fill="#b45309"/>
<text x="400" y="87" text-anchor="middle" font-size="15" font-weight="800" font-family="sans-serif" fill="#fff">Principles of Inheritance — Mendel's Laws &amp; Punnett Square</text>
<rect x="160" y="120" width="280" height="230" rx="14" fill="#fef3c7" stroke="#d97706" stroke-width="2.5"/>
<text x="300" y="148" text-anchor="middle" font-size="14" font-weight="800" font-family="sans-serif" fill="#78350f">Punnett Square (Tt × Tt)</text>
<rect x="185" y="160" width="60" height="60" rx="4" fill="#d97706" opacity="0.2"/><text x="215" y="196" text-anchor="middle" font-size="16" font-weight="900" font-family="monospace" fill="#78350f">TT</text>
<rect x="255" y="160" width="60" height="60" rx="4" fill="#d97706" opacity="0.2"/><text x="285" y="196" text-anchor="middle" font-size="16" font-weight="900" font-family="monospace" fill="#78350f">Tt</text>
<rect x="185" y="230" width="60" height="60" rx="4" fill="#d97706" opacity="0.2"/><text x="215" y="266" text-anchor="middle" font-size="16" font-weight="900" font-family="monospace" fill="#78350f">Tt</text>
<rect x="255" y="230" width="60" height="60" rx="4" fill="#fde68a" opacity="0.7"/><text x="285" y="266" text-anchor="middle" font-size="16" font-weight="900" font-family="monospace" fill="#92400e">tt</text>
<text x="300" y="310" text-anchor="middle" font-size="13" font-weight="700" font-family="sans-serif" fill="#78350f">Phenotype: 3 Tall : 1 Short</text>
<text x="300" y="330" text-anchor="middle" font-size="12" font-family="sans-serif" fill="#92400e">Genotype: 1TT : 2Tt : 1tt</text>
<rect x="480" y="120" width="260" height="230" rx="14" fill="#ffedd5" stroke="#ea580c" stroke-width="2.5"/>
<text x="610" y="148" text-anchor="middle" font-size="13" font-weight="800" font-family="sans-serif" fill="#9a3412">Mendel's Laws</text>
<text x="610" y="173" text-anchor="middle" font-size="12" font-weight="700" font-family="sans-serif" fill="#7c2d12">Law of Dominance</text>
<text x="610" y="192" text-anchor="middle" font-size="11" font-family="sans-serif" fill="#9a3412">Dominant masks recessive</text>
<text x="610" y="215" text-anchor="middle" font-size="12" font-weight="700" font-family="sans-serif" fill="#7c2d12">Law of Segregation</text>
<text x="610" y="234" text-anchor="middle" font-size="11" font-family="sans-serif" fill="#9a3412">Alleles separate in gametes</text>
<text x="610" y="257" text-anchor="middle" font-size="12" font-weight="700" font-family="sans-serif" fill="#7c2d12">Independent Assortment</text>
<text x="610" y="276" text-anchor="middle" font-size="11" font-family="sans-serif" fill="#9a3412">Genes on diff chromosomes</text>
<text x="610" y="299" text-anchor="middle" font-size="12" font-weight="700" font-family="sans-serif" fill="#7c2d12">Sex-linked Inheritance</text>
<text x="610" y="318" text-anchor="middle" font-size="11" font-family="sans-serif" fill="#9a3412">Haemophilia · Colour blindness</text>
<text x="610" y="337" text-anchor="middle" font-size="11" font-family="sans-serif" fill="#9a3412">Mutations · Chromosomal disorders</text>
<rect x="80" y="368" width="640" height="38" rx="10" fill="#b45309"/>
<text x="400" y="392" text-anchor="middle" font-size="12" font-weight="800" font-family="sans-serif" fill="#fff">Codominance · Incomplete Dominance · Pleiotropy · Polygenic Inheritance</text>`
  },

  'molecular-basis-inheritance': {
    bg: ['#1e1b4b','#312e81'], accent: '#818cf8',
    svg: `<rect x="80" y="58" width="640" height="48" rx="12" fill="#4338ca"/>
<text x="400" y="87" text-anchor="middle" font-size="15" font-weight="800" font-family="sans-serif" fill="#fff">Molecular Basis of Inheritance — DNA &amp; Central Dogma</text>
${Array.from({length:18},(_,i)=>{
const t=i/17*Math.PI*4, y=90+i*17;
const x1=330+Math.cos(t)*55, x2=370+Math.cos(t+Math.PI)*55;
return `<line x1="${x1}" y1="${y}" x2="${x2}" y2="${y}" stroke="#4ade80" stroke-width="1.5" opacity="0.7"/>
<circle cx="${x1}" cy="${y}" r="5" fill="${i%3===0?'#f472b6':i%3===1?'#60a5fa':'#fbbf24'}"/>
<circle cx="${x2}" cy="${y}" r="5" fill="${i%3===0?'#34d399':i%3===1?'#f87171':'#a78bfa'}"/>`;
}).join('')}
<path d="M 330,90 Q 275,200 330,395" fill="none" stroke="#c7d2fe" stroke-width="2.5" opacity="0.5"/>
<path d="M 470,90 Q 525,200 470,395" fill="none" stroke="#c7d2fe" stroke-width="2.5" opacity="0.5"/>
<rect x="530" y="100" width="230" height="90" rx="12" fill="#312e81" stroke="#818cf8" stroke-width="2"/>
<text x="645" y="127" text-anchor="middle" font-size="12" font-weight="800" font-family="sans-serif" fill="#c7d2fe">Base Pairing</text>
<text x="645" y="150" text-anchor="middle" font-size="13" font-family="monospace" fill="#a5b4fc">A = T (2 H-bonds)</text>
<text x="645" y="173" text-anchor="middle" font-size="13" font-family="monospace" fill="#a5b4fc">G ≡ C (3 H-bonds)</text>
<rect x="530" y="210" width="230" height="130" rx="12" fill="#1e3a8a" stroke="#60a5fa" stroke-width="2"/>
<text x="645" y="235" text-anchor="middle" font-size="12" font-weight="800" font-family="sans-serif" fill="#bfdbfe">Central Dogma</text>
<text x="645" y="262" text-anchor="middle" font-size="13" font-weight="800" font-family="monospace" fill="#93c5fd">DNA → RNA → Protein</text>
<text x="645" y="286" text-anchor="middle" font-size="11" font-family="sans-serif" fill="#60a5fa">Replication · Transcription</text>
<text x="645" y="306" text-anchor="middle" font-size="11" font-family="sans-serif" fill="#60a5fa">Translation · Reverse tran.</text>
<text x="645" y="326" text-anchor="middle" font-size="11" font-family="sans-serif" fill="#818cf8">Genetic code: 64 codons</text>
<rect x="80" y="368" width="420" height="40" rx="10" fill="#312e81" stroke="#818cf8" stroke-width="2"/>
<text x="290" y="393" text-anchor="middle" font-size="12" font-weight="700" font-family="sans-serif" fill="#c7d2fe">Watson-Crick model · Chargaff's Rules · Human Genome Project</text>`
  },

  'evolution': {
    bg: ['#f0fdf4','#dcfce7'], accent: '#15803d',
    svg: `<rect x="80" y="58" width="640" height="48" rx="12" fill="#15803d"/>
<text x="400" y="87" text-anchor="middle" font-size="15" font-weight="800" font-family="sans-serif" fill="#fff">Evolution — Darwin's Theory &amp; Evidence</text>
<circle cx="400" cy="380" r="20" fill="#15803d"/>
<text x="400" y="386" text-anchor="middle" font-size="10" font-weight="800" font-family="sans-serif" fill="#fff">Ancestor</text>
<line x1="400" y1="360" x2="250" y2="290" stroke="#16a34a" stroke-width="2.5"/>
<line x1="400" y1="360" x2="400" y2="275" stroke="#16a34a" stroke-width="2.5"/>
<line x1="400" y1="360" x2="550" y2="290" stroke="#16a34a" stroke-width="2.5"/>
<circle cx="250" cy="275" r="18" fill="#4ade80"/>
<circle cx="400" cy="260" r="18" fill="#22c55e"/>
<circle cx="550" cy="275" r="18" fill="#86efac"/>
<line x1="250" y1="257" x2="175" y2="200" stroke="#16a34a" stroke-width="2"/>
<line x1="250" y1="257" x2="300" y2="195" stroke="#16a34a" stroke-width="2"/>
<circle cx="175" cy="185" r="15" fill="#bbf7d0"/>
<circle cx="300" cy="180" r="15" fill="#bbf7d0"/>
<line x1="550" y1="257" x2="500" y2="195" stroke="#16a34a" stroke-width="2"/>
<line x1="550" y1="257" x2="620" y2="200" stroke="#16a34a" stroke-width="2"/>
<circle cx="500" cy="180" r="15" fill="#d1fae5"/>
<circle cx="620" cy="185" r="15" fill="#a7f3d0"/>
<text x="175" y="165" text-anchor="middle" font-size="9" font-weight="700" font-family="sans-serif" fill="#14532d">Species A</text>
<text x="300" y="162" text-anchor="middle" font-size="9" font-weight="700" font-family="sans-serif" fill="#14532d">Species B</text>
<text x="500" y="162" text-anchor="middle" font-size="9" font-weight="700" font-family="sans-serif" fill="#14532d">Species C</text>
<text x="620" y="168" text-anchor="middle" font-size="9" font-weight="700" font-family="sans-serif" fill="#14532d">Species D</text>
<rect x="80" y="100" width="250" height="130" rx="12" fill="#dcfce7" stroke="#16a34a" stroke-width="2"/>
<text x="205" y="125" text-anchor="middle" font-size="13" font-weight="800" font-family="sans-serif" fill="#14532d">Darwin's Theory</text>
<text x="205" y="148" text-anchor="middle" font-size="12" font-family="sans-serif" fill="#15803d">Natural Selection</text>
<text x="205" y="168" text-anchor="middle" font-size="12" font-family="sans-serif" fill="#15803d">Survival of the Fittest</text>
<text x="205" y="188" text-anchor="middle" font-size="12" font-family="sans-serif" fill="#15803d">Variation &amp; Heredity</text>
<text x="205" y="208" text-anchor="middle" font-size="12" font-family="sans-serif" fill="#15803d">Reproductive isolation</text>
<rect x="470" y="100" width="250" height="130" rx="12" fill="#bbf7d0" stroke="#059669" stroke-width="2"/>
<text x="595" y="125" text-anchor="middle" font-size="13" font-weight="800" font-family="sans-serif" fill="#065f46">Evidence</text>
<text x="595" y="148" text-anchor="middle" font-size="12" font-family="sans-serif" fill="#047857">Fossil record</text>
<text x="595" y="168" text-anchor="middle" font-size="12" font-family="sans-serif" fill="#047857">Homologous organs</text>
<text x="595" y="188" text-anchor="middle" font-size="12" font-family="sans-serif" fill="#047857">Embryological evidence</text>
<text x="595" y="208" text-anchor="middle" font-size="12" font-family="sans-serif" fill="#047857">Hardy-Weinberg principle</text>`
  },

  'human-health-disease': {
    bg: ['#fff1f2','#ffe4e6'], accent: '#e11d48',
    svg: `<rect x="80" y="58" width="640" height="48" rx="12" fill="#be123c"/>
<text x="400" y="87" text-anchor="middle" font-size="15" font-weight="800" font-family="sans-serif" fill="#fff">Human Health and Disease — Immunity &amp; Pathogens</text>
<rect x="80" y="120" width="290" height="210" rx="12" fill="#ffe4e6" stroke="#e11d48" stroke-width="2.5"/>
<text x="225" y="148" text-anchor="middle" font-size="14" font-weight="800" font-family="sans-serif" fill="#9f1239">Types of Immunity</text>
<text x="225" y="173" text-anchor="middle" font-size="12" font-weight="700" font-family="sans-serif" fill="#be123c">Innate (Non-specific)</text>
<text x="225" y="193" text-anchor="middle" font-size="11" font-family="sans-serif" fill="#9f1239">Skin · Mucus · Fever · NK cells</text>
<text x="225" y="217" text-anchor="middle" font-size="12" font-weight="700" font-family="sans-serif" fill="#be123c">Acquired (Specific)</text>
<text x="225" y="237" text-anchor="middle" font-size="11" font-family="sans-serif" fill="#9f1239">Humoral: B-cells → Antibodies</text>
<text x="225" y="258" text-anchor="middle" font-size="11" font-family="sans-serif" fill="#9f1239">Cell-mediated: T-cells (CTL)</text>
<text x="225" y="282" text-anchor="middle" font-size="12" font-weight="700" font-family="sans-serif" fill="#be123c">Active vs Passive Immunity</text>
<text x="225" y="302" text-anchor="middle" font-size="11" font-family="sans-serif" fill="#9f1239">Vaccines · Antibodies (IgG etc)</text>
<text x="225" y="318" text-anchor="middle" font-size="11" font-family="sans-serif" fill="#9f1239">Memory cells → faster response</text>
<rect x="420" y="120" width="300" height="210" rx="12" fill="#fecdd3" stroke="#f43f5e" stroke-width="2.5"/>
<text x="570" y="148" text-anchor="middle" font-size="14" font-weight="800" font-family="sans-serif" fill="#881337">Diseases &amp; Pathogens</text>
<text x="570" y="173" text-anchor="middle" font-size="12" font-weight="700" font-family="sans-serif" fill="#9f1239">Bacterial</text>
<text x="570" y="192" text-anchor="middle" font-size="11" font-family="sans-serif" fill="#be123c">Typhoid · TB · Pneumonia</text>
<text x="570" y="215" text-anchor="middle" font-size="12" font-weight="700" font-family="sans-serif" fill="#9f1239">Viral</text>
<text x="570" y="234" text-anchor="middle" font-size="11" font-family="sans-serif" fill="#be123c">Common cold · HIV/AIDS · Dengue</text>
<text x="570" y="257" text-anchor="middle" font-size="12" font-weight="700" font-family="sans-serif" fill="#9f1239">Protozoan</text>
<text x="570" y="276" text-anchor="middle" font-size="11" font-family="sans-serif" fill="#be123c">Malaria (Plasmodium) · Amoebiasis</text>
<text x="570" y="299" text-anchor="middle" font-size="12" font-weight="700" font-family="sans-serif" fill="#9f1239">Non-infectious</text>
<text x="570" y="318" text-anchor="middle" font-size="11" font-family="sans-serif" fill="#be123c">Cancer · Allergy · Drug abuse</text>
<rect x="80" y="348" width="640" height="42" rx="10" fill="#be123c"/>
<text x="400" y="374" text-anchor="middle" font-size="12" font-weight="800" font-family="sans-serif" fill="#fff">Antigen-Antibody reaction · AIDS mechanism · Allergies · Autoimmune disorders</text>`
  },

  'biotechnology': {
    bg: ['#f0fdf4','#dcfce7'], accent: '#15803d',
    svg: `<rect x="80" y="58" width="640" height="48" rx="12" fill="#15803d"/>
<text x="400" y="87" text-anchor="middle" font-size="15" font-weight="800" font-family="sans-serif" fill="#fff">Biotechnology — rDNA Technology &amp; Applications</text>
<rect x="80" y="120" width="310" height="230" rx="12" fill="#dcfce7" stroke="#16a34a" stroke-width="2.5"/>
<text x="235" y="148" text-anchor="middle" font-size="14" font-weight="800" font-family="sans-serif" fill="#14532d">rDNA Technology</text>
<text x="235" y="175" text-anchor="middle" font-size="12" font-weight="700" font-family="sans-serif" fill="#15803d">1. Restriction Enzymes</text>
<text x="235" y="196" text-anchor="middle" font-size="11" font-family="sans-serif" fill="#14532d">Cut DNA at palindromic sites</text>
<text x="235" y="220" text-anchor="middle" font-size="12" font-weight="700" font-family="sans-serif" fill="#15803d">2. Vector (Plasmid / Phage)</text>
<text x="235" y="241" text-anchor="middle" font-size="11" font-family="sans-serif" fill="#14532d">Carries foreign DNA into host</text>
<text x="235" y="265" text-anchor="middle" font-size="12" font-weight="700" font-family="sans-serif" fill="#15803d">3. DNA Ligase</text>
<text x="235" y="286" text-anchor="middle" font-size="11" font-family="sans-serif" fill="#14532d">Joins DNA fragments</text>
<text x="235" y="310" text-anchor="middle" font-size="12" font-weight="700" font-family="sans-serif" fill="#15803d">4. Host Transformation</text>
<text x="235" y="331" text-anchor="middle" font-size="11" font-family="sans-serif" fill="#14532d">E.coli expresses recombinant gene</text>
<rect x="430" y="120" width="310" height="230" rx="12" fill="#bbf7d0" stroke="#059669" stroke-width="2.5"/>
<text x="585" y="148" text-anchor="middle" font-size="14" font-weight="800" font-family="sans-serif" fill="#065f46">Applications</text>
<text x="585" y="173" text-anchor="middle" font-size="12" font-weight="700" font-family="sans-serif" fill="#047857">Medical</text>
<text x="585" y="194" text-anchor="middle" font-size="11" font-family="sans-serif" fill="#065f46">Insulin · HGH · Vaccines · Gene therapy</text>
<text x="585" y="218" text-anchor="middle" font-size="12" font-weight="700" font-family="sans-serif" fill="#047857">Agriculture</text>
<text x="585" y="239" text-anchor="middle" font-size="11" font-family="sans-serif" fill="#065f46">Bt cotton · Golden rice · GM crops</text>
<text x="585" y="263" text-anchor="middle" font-size="12" font-weight="700" font-family="sans-serif" fill="#047857">PCR (Polymerase Chain Reaction)</text>
<text x="585" y="284" text-anchor="middle" font-size="11" font-family="sans-serif" fill="#065f46">Amplify DNA · Forensics · Diagnosis</text>
<text x="585" y="308" text-anchor="middle" font-size="12" font-weight="700" font-family="sans-serif" fill="#047857">Gel Electrophoresis</text>
<text x="585" y="329" text-anchor="middle" font-size="11" font-family="sans-serif" fill="#065f46">Separate DNA by size · DNA fingerprint</text>
<rect x="80" y="368" width="640" height="40" rx="10" fill="#15803d"/>
<text x="400" y="393" text-anchor="middle" font-size="12" font-weight="800" font-family="sans-serif" fill="#fff">CRISPR · Bioreactors · Bioethics · Biosafety · Transgenic organisms</text>`
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

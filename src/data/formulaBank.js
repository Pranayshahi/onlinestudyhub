// Formula bank: key: `${classId}/${subjectId}/${topicId}`
// Each entry: { label, formula, note? }
// label  — short name shown above the formula
// formula — the formula text (use Unicode: ², ³, √, π, ×, ÷, α, β, θ, etc.)
// note   — optional brief clarification shown below

export const FORMULA_BANK = {

  // ── CLASS 6 MATHEMATICS ──────────────────────────────────────────
  'class-6/mathematics/playing-with-numbers': [
    { label: 'HCF × LCM', formula: 'HCF × LCM = a × b', note: 'For two numbers a and b' },
    { label: 'Divisibility by 2', formula: 'Last digit ∈ {0,2,4,6,8}' },
    { label: 'Divisibility by 3', formula: 'Sum of digits divisible by 3' },
    { label: 'Divisibility by 5', formula: 'Last digit = 0 or 5' },
    { label: 'Divisibility by 9', formula: 'Sum of digits divisible by 9' },
    { label: 'Divisibility by 11', formula: '(Sum of odd-place digits) − (Sum of even-place digits) = 0 or 11' },
    { label: 'Prime Factorisation', formula: 'Express as product of prime numbers', note: 'e.g. 12 = 2² × 3' },
  ],

  'class-6/mathematics/mensuration': [
    { label: 'Rectangle Perimeter', formula: 'P = 2(l + b)' },
    { label: 'Rectangle Area', formula: 'A = l × b' },
    { label: 'Square Perimeter', formula: 'P = 4a' },
    { label: 'Square Area', formula: 'A = a²' },
    { label: 'Triangle Area', formula: 'A = ½ × base × height' },
  ],

  'class-6/mathematics/ratio-proportion': [
    { label: 'Ratio', formula: 'a : b = a/b', note: 'Always in lowest terms' },
    { label: 'Proportion', formula: 'a : b :: c : d  ⟹  a × d = b × c', note: 'Cross-multiplication rule' },
    { label: 'Unitary Method', formula: 'Value of 1 unit = Total ÷ Number of units' },
  ],

  'class-6/mathematics/knowing-numbers': [
    { label: 'Place Value', formula: 'Value = Face Value × Place' },
    { label: 'Large Number', formula: '1 crore = 10,000,000 = 10⁷' },
    { label: 'Estimation', formula: 'Round to nearest 10/100/1000' },
  ],

  // ── CLASS 7 MATHEMATICS ──────────────────────────────────────────
  'class-7/mathematics/algebraic-expressions': [
    { label: '(a+b)²', formula: '(a + b)² = a² + 2ab + b²' },
    { label: '(a−b)²', formula: '(a − b)² = a² − 2ab + b²' },
    { label: 'a²−b²', formula: 'a² − b² = (a + b)(a − b)' },
    { label: '(a+b)³', formula: '(a + b)³ = a³ + 3a²b + 3ab² + b³' },
    { label: '(a−b)³', formula: '(a − b)³ = a³ − 3a²b + 3ab² − b³' },
  ],

  'class-7/mathematics/perimeter-area': [
    { label: 'Triangle Area', formula: 'A = ½ × base × height' },
    { label: 'Parallelogram Area', formula: 'A = base × height' },
    { label: 'Rectangle Area', formula: 'A = l × b' },
    { label: 'Circle Area', formula: 'A = πr²' },
    { label: 'Circle Circumference', formula: 'C = 2πr' },
    { label: 'π value', formula: 'π ≈ 22/7 ≈ 3.14159' },
  ],

  'class-7/mathematics/exponents-powers': [
    { label: 'Product Rule', formula: 'aᵐ × aⁿ = aᵐ⁺ⁿ' },
    { label: 'Quotient Rule', formula: 'aᵐ ÷ aⁿ = aᵐ⁻ⁿ' },
    { label: 'Power of Power', formula: '(aᵐ)ⁿ = aᵐⁿ' },
    { label: 'Zero Exponent', formula: 'a⁰ = 1  (a ≠ 0)' },
    { label: 'Negative Exponent', formula: 'a⁻ⁿ = 1/aⁿ' },
    { label: 'Product to Power', formula: '(ab)ⁿ = aⁿ × bⁿ' },
  ],

  'class-7/mathematics/comparing-quantities': [
    { label: 'Percentage', formula: 'P% = (Part ÷ Whole) × 100' },
    { label: 'Profit %', formula: 'Profit% = (Profit ÷ CP) × 100' },
    { label: 'Loss %', formula: 'Loss% = (Loss ÷ CP) × 100' },
    { label: 'Simple Interest', formula: 'SI = (P × R × T) / 100' },
    { label: 'Amount', formula: 'A = P + SI' },
  ],

  'class-7/mathematics/simple-equations': [
    { label: 'Linear Equation', formula: 'ax + b = c  ⟹  x = (c − b) / a' },
    { label: 'Golden Rule', formula: 'Same operation on both sides keeps equality' },
  ],

  // ── CLASS 8 MATHEMATICS ──────────────────────────────────────────
  'class-8/mathematics/algebraic-expressions-8': [
    { label: '(a+b)²', formula: '(a + b)² = a² + 2ab + b²' },
    { label: '(a−b)²', formula: '(a − b)² = a² − 2ab + b²' },
    { label: 'Difference of Squares', formula: '(a+b)(a−b) = a² − b²' },
    { label: 'Sum of Cubes', formula: 'a³ + b³ = (a+b)(a²−ab+b²)' },
    { label: 'Difference of Cubes', formula: 'a³ − b³ = (a−b)(a²+ab+b²)' },
  ],

  'class-8/mathematics/mensuration-8': [
    { label: 'Trapezium Area', formula: 'A = ½ × (a + b) × h', note: 'a, b are parallel sides' },
    { label: 'Rhombus Area', formula: 'A = ½ × d₁ × d₂', note: 'd₁, d₂ are diagonals' },
    { label: 'Circle Area', formula: 'A = πr²' },
    { label: 'Cylinder Volume', formula: 'V = πr²h' },
    { label: 'Cylinder CSA', formula: 'CSA = 2πrh' },
    { label: 'Cylinder TSA', formula: 'TSA = 2πr(r + h)' },
    { label: 'Cube Volume', formula: 'V = a³' },
    { label: 'Cuboid Volume', formula: 'V = l × b × h' },
  ],

  'class-8/mathematics/exponents-powers-8': [
    { label: 'Product Rule', formula: 'aᵐ × aⁿ = aᵐ⁺ⁿ' },
    { label: 'Quotient Rule', formula: 'aᵐ ÷ aⁿ = aᵐ⁻ⁿ' },
    { label: 'Power of Power', formula: '(aᵐ)ⁿ = aᵐⁿ' },
    { label: 'Zero Exponent', formula: 'a⁰ = 1' },
    { label: 'Negative Exponent', formula: 'a⁻ⁿ = 1/aⁿ' },
    { label: 'Standard Form', formula: 'a × 10ⁿ, where 1 ≤ a < 10' },
  ],

  'class-8/mathematics/comparing-quantities-8': [
    { label: 'Compound Interest', formula: 'A = P(1 + R/100)ⁿ' },
    { label: 'CI', formula: 'CI = A − P' },
    { label: 'SI', formula: 'SI = PRT/100' },
    { label: 'Discount', formula: 'Discount = MP − SP' },
    { label: 'Discount %', formula: 'Discount% = (Discount / MP) × 100' },
    { label: 'SP after Discount', formula: 'SP = MP × (1 − D%)' },
    { label: 'GST', formula: 'Amount with GST = CP + (GST% × CP / 100)' },
  ],

  // ── CLASS 9 MATHEMATICS ──────────────────────────────────────────
  'class-9/mathematics/heron-formula': [
    { label: "Heron's Formula", formula: 'A = √[s(s−a)(s−b)(s−c)]', note: 's = (a+b+c)/2 is semi-perimeter' },
    { label: 'Semi-perimeter', formula: 's = (a + b + c) / 2' },
    { label: 'Equilateral Triangle', formula: 'A = (√3/4) × a²' },
    { label: 'Right Triangle', formula: 'A = ½ × base × height' },
  ],

  'class-9/mathematics/surface-areas-volumes-9': [
    { label: 'Cube — LSA', formula: 'LSA = 4a²' },
    { label: 'Cube — TSA', formula: 'TSA = 6a²' },
    { label: 'Cube — Volume', formula: 'V = a³' },
    { label: 'Cuboid — LSA', formula: 'LSA = 2h(l + b)' },
    { label: 'Cuboid — TSA', formula: 'TSA = 2(lb + bh + hl)' },
    { label: 'Cuboid — Volume', formula: 'V = l × b × h' },
    { label: 'Cylinder — CSA', formula: 'CSA = 2πrh' },
    { label: 'Cylinder — TSA', formula: 'TSA = 2πr(r + h)' },
    { label: 'Cylinder — Volume', formula: 'V = πr²h' },
    { label: 'Cone — CSA', formula: 'CSA = πrl', note: 'l = slant height = √(r²+h²)' },
    { label: 'Cone — TSA', formula: 'TSA = πr(r + l)' },
    { label: 'Cone — Volume', formula: 'V = ⅓πr²h' },
    { label: 'Sphere — SA', formula: 'SA = 4πr²' },
    { label: 'Sphere — Volume', formula: 'V = (4/3)πr³' },
    { label: 'Hemisphere — CSA', formula: 'CSA = 2πr²' },
    { label: 'Hemisphere — TSA', formula: 'TSA = 3πr²' },
    { label: 'Hemisphere — Volume', formula: 'V = (2/3)πr³' },
  ],

  'class-9/mathematics/statistics-9': [
    { label: 'Mean (ungrouped)', formula: 'x̄ = Σxᵢ / n' },
    { label: 'Median (odd n)', formula: 'M = ((n+1)/2)th term' },
    { label: 'Median (even n)', formula: 'M = average of (n/2)th and (n/2+1)th terms' },
    { label: 'Mode', formula: 'Most frequently occurring value' },
    { label: 'Range', formula: 'Range = Max − Min' },
    { label: 'Class Width', formula: 'h = Upper Limit − Lower Limit' },
    { label: 'Mid-value', formula: 'xᵢ = (Upper Limit + Lower Limit) / 2' },
  ],

  'class-9/mathematics/number-systems': [
    { label: 'Irrational', formula: '√2, √3, π, e  (non-terminating, non-repeating)' },
    { label: 'Rational', formula: 'p/q form, q ≠ 0' },
    { label: 'Surds Product', formula: '√a × √b = √(ab)' },
    { label: 'Rationalise', formula: '1/(a+√b) = (a−√b)/(a²−b)' },
    { label: 'Laws of Exponents', formula: 'aᵐ×aⁿ = aᵐ⁺ⁿ  |  (aᵐ)ⁿ = aᵐⁿ' },
    { label: 'Fractional Exponent', formula: 'a^(1/n) = ⁿ√a' },
  ],

  'class-9/mathematics/polynomials': [
    { label: 'Factor Theorem', formula: '(x−a) is factor of p(x) ⟺ p(a) = 0' },
    { label: 'Remainder Theorem', formula: 'p(x) ÷ (x−a) gives remainder p(a)' },
    { label: '(a+b)²', formula: 'a² + 2ab + b²' },
    { label: '(a−b)²', formula: 'a² − 2ab + b²' },
    { label: '(a+b)(a−b)', formula: 'a² − b²' },
    { label: '(a+b+c)²', formula: 'a²+b²+c²+2ab+2bc+2ca' },
    { label: 'a³+b³', formula: '(a+b)(a²−ab+b²)' },
    { label: 'a³−b³', formula: '(a−b)(a²+ab+b²)' },
    { label: '(a+b)³', formula: 'a³+3a²b+3ab²+b³' },
    { label: '(a−b)³', formula: 'a³−3a²b+3ab²−b³' },
    { label: 'a³+b³+c³−3abc', formula: '(a+b+c)(a²+b²+c²−ab−bc−ca)' },
  ],

  'class-9/mathematics/coordinate-geometry': [
    { label: 'Quadrants', formula: 'I: (+,+)  II: (−,+)  III: (−,−)  IV: (+,−)' },
    { label: 'X-axis', formula: 'y = 0' },
    { label: 'Y-axis', formula: 'x = 0' },
    { label: 'Distance from Origin', formula: 'r = √(x² + y²)' },
  ],

  // ── CLASS 9 PHYSICS ─────────────────────────────────────────────
  'class-9/physics/motion': [
    { label: 'Speed', formula: 'v = d / t' },
    { label: 'Acceleration', formula: 'a = (v − u) / t' },
    { label: '1st Equation', formula: 'v = u + at' },
    { label: '2nd Equation', formula: 's = ut + ½at²' },
    { label: '3rd Equation', formula: 'v² = u² + 2as' },
    { label: 'Average Speed', formula: 'v_avg = Total distance / Total time' },
    { label: 'Average Velocity', formula: 'v_avg = (u + v) / 2', note: 'For uniform acceleration' },
    { label: 'Distance (nth sec)', formula: 'sₙ = u + a(2n−1)/2' },
  ],

  'class-9/physics/force-and-laws': [
    { label: 'Newton\'s 2nd Law', formula: 'F = ma' },
    { label: 'Momentum', formula: 'p = mv' },
    { label: 'Impulse', formula: 'J = F × t = Δp' },
    { label: 'Conservation of Momentum', formula: 'm₁u₁ + m₂u₂ = m₁v₁ + m₂v₂' },
    { label: 'Weight', formula: 'W = mg' },
    { label: 'Recoil Velocity', formula: 'v = −(m₁/m₂) × u', note: 'By conservation of momentum' },
  ],

  'class-9/physics/gravitation': [
    { label: 'Universal Gravitation', formula: 'F = G m₁m₂ / r²' },
    { label: 'G (constant)', formula: 'G = 6.674 × 10⁻¹¹ N m² kg⁻²' },
    { label: 'g on Earth', formula: 'g = GM / R²  ≈ 9.8 m/s²' },
    { label: 'Weight', formula: 'W = mg' },
    { label: 'Free Fall', formula: 'v = gt  |  h = ½gt²' },
    { label: 'Archimedes\' Principle', formula: 'Buoyant force = Weight of fluid displaced' },
    { label: 'Density', formula: 'ρ = m / V' },
    { label: 'Pressure', formula: 'P = F / A' },
    { label: 'Pressure in Fluid', formula: 'P = ρgh' },
    { label: 'Relative Density', formula: 'RD = Density of substance / Density of water' },
  ],

  'class-9/physics/work-energy': [
    { label: 'Work Done', formula: 'W = F × d × cos θ' },
    { label: 'Kinetic Energy', formula: 'KE = ½mv²' },
    { label: 'Potential Energy', formula: 'PE = mgh' },
    { label: 'Work-Energy Theorem', formula: 'W = ΔKE = ½mv² − ½mu²' },
    { label: 'Power', formula: 'P = W / t' },
    { label: 'Power (velocity)', formula: 'P = F × v' },
    { label: 'Efficiency', formula: 'η = (Useful output / Input) × 100%' },
    { label: '1 kWh', formula: '1 kWh = 3.6 × 10⁶ J' },
  ],

  'class-9/physics/sound-9': [
    { label: 'Wave Speed', formula: 'v = fλ', note: 'f = frequency, λ = wavelength' },
    { label: 'Speed of Sound (air)', formula: '≈ 344 m/s at 22°C' },
    { label: 'Echo Condition', formula: 'Distance ≥ 17.2 m  (time ≥ 0.1 s)' },
    { label: 'Time Period', formula: 'T = 1 / f' },
    { label: 'Frequency Range', formula: 'Audible: 20 Hz − 20,000 Hz' },
    { label: 'Ultrasound', formula: '> 20,000 Hz' },
    { label: 'Infrasound', formula: '< 20 Hz' },
    { label: 'Intensity Level', formula: 'L = 10 log₁₀(I / I₀) dB', note: 'I₀ = 10⁻¹² W/m²' },
  ],

  // ── CLASS 9 CHEMISTRY ───────────────────────────────────────────
  'class-9/chemistry/atoms-molecules-9': [
    { label: 'Mole', formula: '1 mol = 6.022 × 10²³ particles  (Avogadro\'s number)' },
    { label: 'Molar Mass', formula: 'Molar mass = mass of 1 mol (in grams)' },
    { label: 'Number of Moles', formula: 'n = given mass / molar mass' },
    { label: 'Empirical Formula', formula: 'Simplest whole-number ratio of atoms' },
    { label: 'Molecular Formula', formula: 'Actual number of each atom in molecule' },
    { label: 'Law of Conservation', formula: 'Mass of reactants = Mass of products' },
    { label: 'Law of Definite Proportions', formula: 'Fixed mass ratio of elements in a compound' },
  ],

  'class-9/chemistry/matter-surroundings': [
    { label: 'Density', formula: 'ρ = m / V' },
    { label: 'Boiling Point', formula: 'Increases with pressure' },
    { label: 'Melting Point', formula: 'Water: 0°C  |  Increases with impurities' },
    { label: 'Kelvin ↔ Celsius', formula: 'K = °C + 273' },
    { label: 'Latent Heat of Fusion', formula: 'Q = mL_f  (ice: 334 J/g)' },
    { label: 'Latent Heat of Vaporization', formula: 'Q = mL_v  (water: 2260 J/g)' },
  ],

  // ── CLASS 10 MATHEMATICS ─────────────────────────────────────────
  'class-10/mathematics/quadratic-equations': [
    { label: 'Quadratic Formula', formula: 'x = [−b ± √(b²−4ac)] / 2a' },
    { label: 'Discriminant', formula: 'D = b² − 4ac' },
    { label: 'Nature of Roots', formula: 'D > 0: two real  |  D = 0: equal  |  D < 0: no real' },
    { label: 'Sum of Roots', formula: 'α + β = −b/a' },
    { label: 'Product of Roots', formula: 'α × β = c/a' },
    { label: 'Form from Roots', formula: 'x² − (α+β)x + αβ = 0' },
  ],

  'class-10/mathematics/arithmetic-progressions': [
    { label: 'nth Term', formula: 'aₙ = a + (n−1)d' },
    { label: 'Sum of n Terms', formula: 'Sₙ = n/2 × [2a + (n−1)d]' },
    { label: 'Sum (first and last)', formula: 'Sₙ = n/2 × (a + l)' },
    { label: 'Common Difference', formula: 'd = aₙ − aₙ₋₁' },
    { label: 'Number of Terms', formula: 'n = (l − a)/d + 1' },
    { label: 'Arithmetic Mean', formula: 'AM = (a + b) / 2' },
  ],

  'class-10/mathematics/intro-trigonometry': [
    { label: 'sin θ', formula: 'Opposite / Hypotenuse' },
    { label: 'cos θ', formula: 'Adjacent / Hypotenuse' },
    { label: 'tan θ', formula: 'Opposite / Adjacent  =  sin θ / cos θ' },
    { label: 'cosec θ', formula: '1 / sin θ' },
    { label: 'sec θ', formula: '1 / cos θ' },
    { label: 'cot θ', formula: '1 / tan θ  =  cos θ / sin θ' },
    { label: 'Identity 1', formula: 'sin²θ + cos²θ = 1' },
    { label: 'Identity 2', formula: '1 + tan²θ = sec²θ' },
    { label: 'Identity 3', formula: '1 + cot²θ = cosec²θ' },
    { label: 'sin 0°, 30°, 45°, 60°, 90°', formula: '0, ½, 1/√2, √3/2, 1' },
    { label: 'cos 0°, 30°, 45°, 60°, 90°', formula: '1, √3/2, 1/√2, ½, 0' },
    { label: 'tan 0°, 30°, 45°, 60°, 90°', formula: '0, 1/√3, 1, √3, ∞' },
  ],

  'class-10/mathematics/applications-trigonometry-10': [
    { label: 'Angle of Elevation', formula: 'tan θ = Height / Horizontal distance' },
    { label: 'Angle of Depression', formula: 'tan θ = Vertical drop / Horizontal distance' },
    { label: 'Height from shadow', formula: 'h = shadow × tan θ' },
    { label: 'sin θ', formula: 'sin²θ + cos²θ = 1' },
  ],

  'class-10/mathematics/coordinate-geometry-10': [
    { label: 'Distance Formula', formula: 'd = √[(x₂−x₁)² + (y₂−y₁)²]' },
    { label: 'Section Formula', formula: 'P = ((mx₂+nx₁)/(m+n), (my₂+ny₁)/(m+n))' },
    { label: 'Midpoint', formula: 'M = ((x₁+x₂)/2, (y₁+y₂)/2)' },
    { label: 'Area of Triangle', formula: 'A = ½|x₁(y₂−y₃) + x₂(y₃−y₁) + x₃(y₁−y₂)|' },
    { label: 'Slope', formula: 'm = (y₂−y₁)/(x₂−x₁)' },
    { label: 'Collinear Points', formula: 'Area of triangle = 0' },
  ],

  'class-10/mathematics/surface-areas-volumes': [
    { label: 'Cube — TSA', formula: 'TSA = 6a²' },
    { label: 'Cube — Volume', formula: 'V = a³' },
    { label: 'Cuboid — TSA', formula: 'TSA = 2(lb + bh + hl)' },
    { label: 'Cuboid — Volume', formula: 'V = lbh' },
    { label: 'Cylinder — CSA', formula: 'CSA = 2πrh' },
    { label: 'Cylinder — TSA', formula: 'TSA = 2πr(r+h)' },
    { label: 'Cylinder — Volume', formula: 'V = πr²h' },
    { label: 'Cone — Slant Height', formula: 'l = √(r² + h²)' },
    { label: 'Cone — CSA', formula: 'CSA = πrl' },
    { label: 'Cone — TSA', formula: 'TSA = πr(r + l)' },
    { label: 'Cone — Volume', formula: 'V = ⅓πr²h' },
    { label: 'Sphere — SA', formula: 'SA = 4πr²' },
    { label: 'Sphere — Volume', formula: 'V = (4/3)πr³' },
    { label: 'Frustum — CSA', formula: 'CSA = π(r₁+r₂)l', note: 'l = √[h²+(r₁−r₂)²]' },
    { label: 'Frustum — Volume', formula: 'V = (πh/3)(r₁²+r₂²+r₁r₂)' },
  ],

  'class-10/mathematics/statistics-10': [
    { label: 'Mean (direct)', formula: 'x̄ = Σfᵢxᵢ / Σfᵢ' },
    { label: 'Mean (assumed mean)', formula: 'x̄ = a + Σfᵢdᵢ / Σfᵢ', note: 'dᵢ = xᵢ − a' },
    { label: 'Mean (step-deviation)', formula: 'x̄ = a + h × Σfᵢuᵢ / Σfᵢ', note: 'uᵢ = (xᵢ−a)/h' },
    { label: 'Median', formula: 'M = l + [(n/2 − cf) / f] × h' },
    { label: 'Mode', formula: 'Mo = l + [(f₁−f₀) / (2f₁−f₀−f₂)] × h' },
    { label: 'Relationship', formula: '3 × Median = Mode + 2 × Mean', note: 'Empirical formula' },
  ],

  'class-10/mathematics/probability-10': [
    { label: 'Probability', formula: 'P(E) = n(E) / n(S)' },
    { label: 'Range', formula: '0 ≤ P(E) ≤ 1' },
    { label: 'Complementary', formula: "P(E') = 1 − P(E)" },
    { label: 'Impossible Event', formula: 'P = 0' },
    { label: 'Certain Event', formula: 'P = 1' },
    { label: 'Sum of Probabilities', formula: 'P(E) + P(Ē) = 1' },
  ],

  'class-10/mathematics/pair-linear-equations-10': [
    { label: 'Substitution', formula: 'Express one variable and substitute in other equation' },
    { label: 'Cross Multiplication', formula: 'x/[b₁c₂−b₂c₁] = y/[c₁a₂−c₂a₁] = 1/[a₁b₂−a₂b₁]' },
    { label: 'Consistent (unique)', formula: 'a₁/a₂ ≠ b₁/b₂' },
    { label: 'Inconsistent', formula: 'a₁/a₂ = b₁/b₂ ≠ c₁/c₂' },
    { label: 'Coincident', formula: 'a₁/a₂ = b₁/b₂ = c₁/c₂' },
  ],

  // ── CLASS 10 PHYSICS ────────────────────────────────────────────
  'class-10/physics/electricity': [
    { label: 'Ohm\'s Law', formula: 'V = IR' },
    { label: 'Resistance', formula: 'R = ρL / A', note: 'ρ = resistivity' },
    { label: 'Series Resistance', formula: 'R_total = R₁ + R₂ + R₃' },
    { label: 'Parallel Resistance', formula: '1/R = 1/R₁ + 1/R₂ + 1/R₃' },
    { label: 'Electric Power', formula: 'P = VI = I²R = V²/R' },
    { label: 'Electrical Energy', formula: 'E = Pt = VIt = I²Rt' },
    { label: 'Charge', formula: 'Q = It', note: 'I in amperes, t in seconds' },
    { label: '1 kWh', formula: '1 kWh = 3.6 × 10⁶ J' },
    { label: 'Current', formula: 'I = Q / t' },
    { label: 'Potential Difference', formula: 'V = W / Q' },
  ],

  'class-10/physics/light-reflection-refraction': [
    { label: 'Mirror Formula', formula: '1/f = 1/v + 1/u', note: 'Sign convention applies' },
    { label: 'Magnification (mirror)', formula: 'm = −v/u = h_i/h_o' },
    { label: 'Focal Length', formula: 'f = R/2', note: 'R = radius of curvature' },
    { label: 'Snell\'s Law', formula: 'n₁ sin i = n₂ sin r' },
    { label: 'Refractive Index', formula: 'n = c / v = sin i / sin r' },
    { label: 'Lens Formula', formula: '1/f = 1/v − 1/u' },
    { label: 'Magnification (lens)', formula: 'm = v/u = h_i/h_o' },
    { label: 'Lens Power', formula: 'P = 1/f (in dioptres)', note: 'f in metres' },
    { label: 'Power combination', formula: 'P = P₁ + P₂' },
    { label: 'n (absolute)', formula: 'n = Speed of light in vacuum / Speed in medium' },
  ],

  'class-10/physics/magnetic-effects': [
    { label: 'Fleming\'s Left Hand', formula: 'Force = Current (Middle) + Magnetic field (Index) → Motion (Thumb)' },
    { label: 'Faraday\'s Law', formula: 'EMF ∝ Rate of change of magnetic flux' },
    { label: 'Force on conductor', formula: 'F = BIL sin θ' },
    { label: 'Right-hand rule', formula: 'Thumb = current, curl = B direction' },
    { label: 'Solenoid field', formula: 'B ∝ nI  (n = turns per unit length)' },
  ],

  // ── CLASS 10 CHEMISTRY ──────────────────────────────────────────
  'class-10/chemistry/chemical-reactions': [
    { label: 'Conservation of Mass', formula: 'Mass of reactants = Mass of products' },
    { label: 'Combination', formula: 'A + B → AB' },
    { label: 'Decomposition', formula: 'AB → A + B' },
    { label: 'Displacement', formula: 'A + BC → AC + B' },
    { label: 'Double Displacement', formula: 'AB + CD → AD + CB' },
    { label: 'Oxidation', formula: 'Gain of O₂ or Loss of H₂' },
    { label: 'Reduction', formula: 'Loss of O₂ or Gain of H₂' },
    { label: 'Neutralisation', formula: 'Acid + Base → Salt + Water' },
  ],

  'class-10/chemistry/acids-bases-salts-10': [
    { label: 'pH definition', formula: 'pH = −log₁₀[H⁺]' },
    { label: 'Acid pH', formula: 'pH < 7' },
    { label: 'Base pH', formula: 'pH > 7' },
    { label: 'Neutral pH', formula: 'pH = 7' },
    { label: 'Neutralisation', formula: 'H⁺ + OH⁻ → H₂O' },
    { label: 'Strong Acid', formula: 'HCl, H₂SO₄, HNO₃' },
    { label: 'Strong Base', formula: 'NaOH, KOH' },
    { label: 'Dilution of H₂SO₄', formula: 'Always add acid to water, never reverse' },
  ],

  'class-10/chemistry/metals-non-metals': [
    { label: 'Reactivity Series (top)', formula: 'K > Na > Ca > Mg > Al > Zn > Fe > Pb > H' },
    { label: 'Ionic Bond', formula: 'Metal + Non-metal → Metal gives, Non-metal takes e⁻' },
    { label: 'Corrosion (Fe)', formula: '4Fe + 3O₂ + 6H₂O → 4Fe(OH)₃  (rust)' },
    { label: 'Thermite Reaction', formula: '2Al + Fe₂O₃ → Al₂O₃ + 2Fe  + Heat' },
    { label: 'Electropositive', formula: 'Metals lose electrons → cations' },
    { label: 'Electronegative', formula: 'Non-metals gain electrons → anions' },
  ],

  'class-10/chemistry/carbon-compounds': [
    { label: 'Homologous Series', formula: 'Each member differs by −CH₂ (14 u)' },
    { label: 'Saturated', formula: 'Only C−C single bonds (alkanes, CₙH₂ₙ₊₂)' },
    { label: 'Unsaturated', formula: 'C=C or C≡C bonds (alkenes CₙH₂ₙ, alkynes CₙH₂ₙ₋₂)' },
    { label: 'Functional Groups', formula: '−OH (alcohol)  −COOH (acid)  −CHO (aldehyde)  −CO− (ketone)' },
    { label: 'Saponification', formula: 'Fat + NaOH → Soap + Glycerol' },
    { label: 'Combustion', formula: 'CₓHᵧ + O₂ → CO₂ + H₂O + Energy' },
  ],

  // ── CLASS 10 BIOLOGY ────────────────────────────────────────────
  'class-10/biology/life-processes': [
    { label: 'Photosynthesis', formula: '6CO₂ + 6H₂O + Light → C₆H₁₂O₆ + 6O₂' },
    { label: 'Respiration (aerobic)', formula: 'C₆H₁₂O₆ + 6O₂ → 6CO₂ + 6H₂O + 38 ATP' },
    { label: 'Anaerobic (yeast)', formula: 'Glucose → Ethanol + CO₂' },
    { label: 'BMR', formula: 'Basal Metabolic Rate = Energy at complete rest' },
    { label: 'Stomata guard cells', formula: 'Turgor pressure → open/close stomata' },
  ],

  'class-10/biology/heredity-evolution': [
    { label: 'Mendel\'s 1st Law', formula: 'Law of Segregation — alleles separate during gamete formation' },
    { label: 'Mendel\'s 2nd Law', formula: 'Law of Independent Assortment' },
    { label: 'Genotypic Ratio (Aa×Aa)', formula: '1 AA : 2 Aa : 1 aa' },
    { label: 'Phenotypic Ratio (Aa×Aa)', formula: '3 dominant : 1 recessive' },
    { label: 'Hardy-Weinberg', formula: 'p² + 2pq + q² = 1' },
    { label: 'Sex Chromosomes', formula: 'Male: XY  |  Female: XX' },
  ],

};

// Subjects where Formula Bank is relevant
export const FORMULA_SUBJECTS = new Set([
  'mathematics', 'physics', 'chemistry', 'science', 'biology',
]);

/**
 * Extract formulas already embedded as <div class="formula">…</div>
 * in a topic's HTML content. Used as fallback when no dedicated bank entry exists.
 */
export function extractFormulasFromContent(htmlContent) {
  if (!htmlContent) return [];
  const matches = [...htmlContent.matchAll(/<div[^>]*class="formula"[^>]*>([\s\S]*?)<\/div>/g)];
  return matches.map((m, i) => ({
    label: `Formula ${i + 1}`,
    formula: m[1]
      .replace(/<[^>]+>/g, '')   // strip any inner tags
      .replace(/&lt;/g, '<')
      .replace(/&gt;/g, '>')
      .replace(/&amp;/g, '&')
      .trim(),
  })).filter(f => f.formula.length > 0);
}

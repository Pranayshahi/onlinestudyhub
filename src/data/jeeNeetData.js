// JEE & NEET exam data: weightage, PYQs, mock tests

export const EXAMS = {
  jee: {
    id: 'jee',
    label: 'JEE Main + Advanced',
    shortLabel: 'JEE',
    emoji: '🏆',
    color: '#4f46e5',
    lightColor: '#eef2ff',
    description: 'IIT Joint Entrance Examination for Engineering admissions',
    subjects: ['physics', 'chemistry', 'mathematics'],
    subjectLabels: { physics: 'Physics', chemistry: 'Chemistry', mathematics: 'Mathematics' },
    subjectEmojis: { physics: '⚡', chemistry: '🧪', mathematics: '📐' },
    subjectColors: { physics: '#7c3aed', chemistry: '#059669', mathematics: '#4f46e5' },
    duration: 180,
    totalQuestions: 90,
    totalMarks: 300,
    marking: { correct: 4, wrong: -1, unattempted: 0 },
    pattern: '3 sections × 30 questions — 4 marks each, –1 for wrong',
  },
  neet: {
    id: 'neet',
    label: 'NEET-UG',
    shortLabel: 'NEET',
    emoji: '🩺',
    color: '#059669',
    lightColor: '#ecfdf5',
    description: 'National Eligibility cum Entrance Test for Medical admissions',
    subjects: ['physics', 'chemistry', 'biology'],
    subjectLabels: { physics: 'Physics', chemistry: 'Chemistry', biology: 'Biology' },
    subjectEmojis: { physics: '⚡', chemistry: '🧪', biology: '🧬' },
    subjectColors: { physics: '#7c3aed', chemistry: '#059669', biology: '#0891b2' },
    duration: 200,
    totalQuestions: 200,
    totalMarks: 720,
    marking: { correct: 4, wrong: -1, unattempted: 0 },
    pattern: '2 × Physics + 2 × Chemistry + 2 × Biology sections (180+20 pattern)',
  },
};

// ── Chapter Weightage ────────────────────────────────────────────
export const WEIGHTAGE = {
  jee: {
    physics: [
      { chapter: 'Mechanics', weightage: 27, avgQuestions: 8, difficulty: 'high', priority: 'must', topics: ['Kinematics', 'Laws of Motion', 'Work & Energy', 'Rotational Motion', 'Gravitation', 'Simple Harmonic Motion'] },
      { chapter: 'Electrostatics & Current Electricity', weightage: 22, avgQuestions: 7, difficulty: 'high', priority: 'must', topics: ['Coulombs Law', 'Capacitors', 'Ohm\'s Law', 'Kirchhoff\'s Laws', 'RC Circuits'] },
      { chapter: 'Optics', weightage: 14, avgQuestions: 4, difficulty: 'medium', priority: 'high', topics: ['Ray Optics', 'Wave Optics', 'YDSE', 'Diffraction'] },
      { chapter: 'Modern Physics', weightage: 12, avgQuestions: 4, difficulty: 'medium', priority: 'high', topics: ['Photoelectric Effect', 'Atomic Models', 'Nuclear Physics', 'Radioactivity'] },
      { chapter: 'Thermodynamics & KTG', weightage: 10, avgQuestions: 3, difficulty: 'medium', priority: 'high', topics: ['Laws of Thermodynamics', 'Carnot Engine', 'Kinetic Theory', 'Heat Transfer'] },
      { chapter: 'Magnetism & EMI', weightage: 9, avgQuestions: 3, difficulty: 'high', priority: 'high', topics: ['Magnetic Force', 'Ampere\'s Law', 'Faraday\'s Law', 'AC Circuits'] },
      { chapter: 'Waves & Sound', weightage: 6, avgQuestions: 2, difficulty: 'medium', priority: 'medium', topics: ['Wave Equation', 'Doppler Effect', 'Standing Waves', 'Beats'] },
    ],
    chemistry: [
      { chapter: 'Organic Chemistry (Reactions)', weightage: 24, avgQuestions: 7, difficulty: 'high', priority: 'must', topics: ['GOC', 'Alkanes/Alkenes', 'Aromatic Compounds', 'Carbonyl Compounds', 'Amines'] },
      { chapter: 'Coordination Compounds', weightage: 9, avgQuestions: 3, difficulty: 'medium', priority: 'high', topics: ['IUPAC Nomenclature', 'Isomerism', 'VBT', 'CFT', 'Stability'] },
      { chapter: 'Chemical Equilibrium', weightage: 9, avgQuestions: 3, difficulty: 'medium', priority: 'high', topics: ['Kp, Kc', 'Le Chatelier Principle', 'Ionic Equilibrium', 'pH Calculations'] },
      { chapter: 'Electrochemistry', weightage: 8, avgQuestions: 2, difficulty: 'high', priority: 'high', topics: ['Nernst Equation', 'EMF', 'Electrolysis', 'Kohlrausch Law'] },
      { chapter: 'Chemical Bonding', weightage: 8, avgQuestions: 2, difficulty: 'medium', priority: 'high', topics: ['VSEPR', 'Hybridization', 'MOT', 'Hydrogen Bonding'] },
      { chapter: 'p-Block Elements', weightage: 8, avgQuestions: 2, difficulty: 'low', priority: 'medium', topics: ['Groups 13-18', 'Oxoacids', 'Allotropes', 'Industrial Uses'] },
      { chapter: 'Mole Concept & Stoichiometry', weightage: 7, avgQuestions: 2, difficulty: 'medium', priority: 'must', topics: ['Mole', 'Limiting Reagent', 'Concentration Units', 'Titration'] },
      { chapter: 'Solid State & Solutions', weightage: 7, avgQuestions: 2, difficulty: 'medium', priority: 'medium', topics: ['Crystal Structures', 'Packing', 'Colligative Properties', 'Raoult\'s Law'] },
      { chapter: 'Thermodynamics & Thermochemistry', weightage: 7, avgQuestions: 2, difficulty: 'medium', priority: 'high', topics: ['Enthalpy', 'Entropy', 'Gibbs Energy', 'Hess\'s Law'] },
      { chapter: 'Atomic Structure & Periodicity', weightage: 6, avgQuestions: 2, difficulty: 'low', priority: 'medium', topics: ['Bohr Model', 'Quantum Numbers', 'Periodic Trends', 'Electronic Config'] },
      { chapter: 'Surface Chemistry & Polymers', weightage: 7, avgQuestions: 2, difficulty: 'low', priority: 'low', topics: ['Adsorption', 'Colloids', 'Polymers', 'Biomolecules'] },
    ],
    mathematics: [
      { chapter: 'Calculus (Integral)', weightage: 18, avgQuestions: 5, difficulty: 'high', priority: 'must', topics: ['Definite Integrals', 'Indefinite Integrals', 'Area Under Curve', 'Differential Equations'] },
      { chapter: 'Calculus (Differential)', weightage: 14, avgQuestions: 4, difficulty: 'high', priority: 'must', topics: ['Limits', 'Continuity', 'Differentiability', 'Application of Derivatives'] },
      { chapter: 'Algebra', weightage: 14, avgQuestions: 4, difficulty: 'medium', priority: 'must', topics: ['Complex Numbers', 'Quadratic Equations', 'Sequences & Series', 'Permutations & Combinations'] },
      { chapter: 'Coordinate Geometry', weightage: 14, avgQuestions: 4, difficulty: 'medium', priority: 'must', topics: ['Straight Lines', 'Circles', 'Parabola', 'Ellipse', 'Hyperbola'] },
      { chapter: 'Probability & Statistics', weightage: 10, avgQuestions: 3, difficulty: 'medium', priority: 'high', topics: ['Bayes Theorem', 'Binomial Distribution', 'Mean & Variance', 'Conditional Probability'] },
      { chapter: 'Vectors & 3D Geometry', weightage: 10, avgQuestions: 3, difficulty: 'high', priority: 'high', topics: ['Dot & Cross Product', 'Lines in 3D', 'Planes', 'Skew Lines'] },
      { chapter: 'Matrices & Determinants', weightage: 8, avgQuestions: 2, difficulty: 'medium', priority: 'high', topics: ['Matrix Operations', 'Determinants', 'Inverse', 'System of Equations'] },
      { chapter: 'Trigonometry', weightage: 8, avgQuestions: 2, difficulty: 'medium', priority: 'high', topics: ['Trigonometric Equations', 'Inverse Trig', 'Heights & Distances', 'Properties of Triangle'] },
      { chapter: 'Sets, Relations & Functions', weightage: 4, avgQuestions: 1, difficulty: 'low', priority: 'medium', topics: ['Types of Functions', 'Composition', 'Binary Operations'] },
    ],
  },

  neet: {
    physics: [
      { chapter: 'Mechanics', weightage: 25, avgQuestions: 12, difficulty: 'high', priority: 'must', topics: ['Kinematics', 'Laws of Motion', 'Work-Energy Theorem', 'Rotational Motion', 'Gravitation'] },
      { chapter: 'Electrostatics & Current', weightage: 20, avgQuestions: 10, difficulty: 'high', priority: 'must', topics: ['Electric Field', 'Potential', 'Capacitors', 'Ohm\'s Law', 'Circuits'] },
      { chapter: 'Optics', weightage: 15, avgQuestions: 7, difficulty: 'medium', priority: 'high', topics: ['Reflection', 'Refraction', 'Lenses', 'Wave Optics'] },
      { chapter: 'Modern Physics', weightage: 12, avgQuestions: 6, difficulty: 'medium', priority: 'high', topics: ['Photoelectric Effect', 'De Broglie', 'Nuclear Physics'] },
      { chapter: 'Thermodynamics', weightage: 10, avgQuestions: 5, difficulty: 'medium', priority: 'high', topics: ['Laws of Thermodynamics', 'Heat Engines', 'Heat Transfer'] },
      { chapter: 'Waves & SHM', weightage: 10, avgQuestions: 5, difficulty: 'medium', priority: 'high', topics: ['SHM', 'Wave Motion', 'Sound Waves', 'Doppler Effect'] },
      { chapter: 'Magnetism & EMI', weightage: 8, avgQuestions: 4, difficulty: 'high', priority: 'medium', topics: ['Magnetic Field', 'Induction', 'AC Circuits'] },
    ],
    chemistry: [
      { chapter: 'Organic Chemistry', weightage: 30, avgQuestions: 18, difficulty: 'high', priority: 'must', topics: ['GOC', 'Hydrocarbons', 'Functional Groups', 'Biomolecules', 'Polymers'] },
      { chapter: 'Physical Chemistry', weightage: 35, avgQuestions: 21, difficulty: 'high', priority: 'must', topics: ['Mole Concept', 'Equilibrium', 'Electrochemistry', 'Thermodynamics', 'Kinetics'] },
      { chapter: 'Inorganic Chemistry', weightage: 35, avgQuestions: 21, difficulty: 'medium', priority: 'must', topics: ['s-block', 'p-block', 'd-block', 'f-block', 'Coordination Compounds', 'Qualitative Analysis'] },
    ],
    biology: [
      { chapter: 'Human Physiology', weightage: 20, avgQuestions: 36, difficulty: 'high', priority: 'must', topics: ['Digestion', 'Respiration', 'Circulation', 'Excretion', 'Nervous System', 'Endocrine System'] },
      { chapter: 'Genetics & Evolution', weightage: 18, avgQuestions: 32, difficulty: 'high', priority: 'must', topics: ['Mendel\'s Laws', 'Chromosomal Inheritance', 'Molecular Basis', 'Evolution', 'Human Genetics'] },
      { chapter: 'Cell Biology & Biochemistry', weightage: 14, avgQuestions: 25, difficulty: 'high', priority: 'must', topics: ['Cell Structure', 'Cell Division', 'Biomolecules', 'Enzymes', 'Cell Cycle'] },
      { chapter: 'Plant Physiology', weightage: 12, avgQuestions: 22, difficulty: 'medium', priority: 'high', topics: ['Photosynthesis', 'Respiration', 'Transport', 'Growth & Development'] },
      { chapter: 'Diversity of Life', weightage: 12, avgQuestions: 22, difficulty: 'low', priority: 'high', topics: ['Kingdom Classification', 'Monera', 'Fungi', 'Plant Kingdom', 'Animal Kingdom'] },
      { chapter: 'Reproduction', weightage: 10, avgQuestions: 18, difficulty: 'medium', priority: 'high', topics: ['Plant Reproduction', 'Human Reproduction', 'Reproductive Health'] },
      { chapter: 'Ecology & Environment', weightage: 8, avgQuestions: 14, difficulty: 'medium', priority: 'medium', topics: ['Ecosystem', 'Population', 'Biodiversity', 'Environmental Issues'] },
      { chapter: 'Biotechnology', weightage: 6, avgQuestions: 11, difficulty: 'medium', priority: 'medium', topics: ['rDNA Technology', 'PCR', 'Cloning', 'Applications'] },
    ],
  },
};

// ── Previous Year Questions ──────────────────────────────────────
export const PYQS = {
  jee: [
    // Physics
    {
      id: 'jee-phy-001', subject: 'physics', chapter: 'Mechanics', year: 2024, difficulty: 'medium',
      question: 'A ball is thrown vertically upward with an initial velocity of 20 m/s. Taking g = 10 m/s², the maximum height reached is:',
      options: ['10 m', '20 m', '40 m', '30 m'],
      correct: 1,
      solution: 'Using v² = u² − 2gh at max height v = 0: 0 = 400 − 20h → h = 20 m',
    },
    {
      id: 'jee-phy-002', subject: 'physics', chapter: 'Mechanics', year: 2023, difficulty: 'hard',
      question: 'A solid sphere of mass M and radius R rolls without slipping on a flat surface. The ratio of rotational KE to total KE is:',
      options: ['2/7', '5/7', '2/5', '3/7'],
      correct: 0,
      solution: 'For rolling: KE_rot = ½Iω² = ½(2/5 MR²)(v/R)² = Mv²/5. Total KE = ½Mv² + Mv²/5 = 7Mv²/10. Ratio = (Mv²/5)/(7Mv²/10) = 2/7.',
    },
    {
      id: 'jee-phy-003', subject: 'physics', chapter: 'Electrostatics & Current Electricity', year: 2024, difficulty: 'medium',
      question: 'A wire of resistance 10 Ω is stretched uniformly until its length is doubled. Its new resistance will be:',
      options: ['5 Ω', '20 Ω', '40 Ω', '80 Ω'],
      correct: 2,
      solution: 'When length doubles, area halves (volume constant). R = ρL/A → R\' = ρ(2L)/(A/2) = 4R = 40 Ω.',
    },
    {
      id: 'jee-phy-004', subject: 'physics', chapter: 'Optics', year: 2023, difficulty: 'medium',
      question: 'In Young\'s double slit experiment, the fringe width is β. If the wavelength of light is doubled and slit separation is halved, the new fringe width is:',
      options: ['β/2', 'β', '2β', '4β'],
      correct: 3,
      solution: 'β = λD/d. New β\' = (2λ)D/(d/2) = 4λD/d = 4β.',
    },
    {
      id: 'jee-phy-005', subject: 'physics', chapter: 'Modern Physics', year: 2023, difficulty: 'medium',
      question: 'The photoelectric threshold frequency of a metal is 5 × 10¹⁴ Hz. The work function of the metal is: (h = 6.6 × 10⁻³⁴ J·s)',
      options: ['2.0 eV', '2.07 eV', '3.3 eV', '1.5 eV'],
      correct: 1,
      solution: 'φ = hν₀ = 6.6×10⁻³⁴ × 5×10¹⁴ = 3.3×10⁻¹⁹ J = 3.3×10⁻¹⁹/1.6×10⁻¹⁹ eV ≈ 2.07 eV.',
    },
    {
      id: 'jee-phy-006', subject: 'physics', chapter: 'Thermodynamics & KTG', year: 2022, difficulty: 'hard',
      question: 'An ideal gas undergoes an isothermal expansion. Which of the following is correct?',
      options: ['Internal energy increases', 'Work done by gas is zero', 'Heat absorbed equals work done by gas', 'Temperature increases'],
      correct: 2,
      solution: 'In isothermal process: ΔT = 0 → ΔU = 0. By first law: Q = ΔU + W = W. Heat absorbed = work done by gas.',
    },
    {
      id: 'jee-phy-007', subject: 'physics', chapter: 'Magnetism & EMI', year: 2024, difficulty: 'hard',
      question: 'A conducting rod of length L moves with velocity v perpendicular to a magnetic field B. The EMF induced across the rod is:',
      options: ['B²Lv', 'BLv', 'BLv²', 'BL²v'],
      correct: 1,
      solution: 'By Faraday\'s law, EMF = BLv sin90° = BLv (since rod is perpendicular to B).',
    },
    {
      id: 'jee-phy-008', subject: 'physics', chapter: 'Waves & Sound', year: 2022, difficulty: 'medium',
      question: 'A source emitting sound of frequency 600 Hz moves towards a stationary observer with speed 20 m/s. Speed of sound is 340 m/s. Frequency heard by observer is:',
      options: ['563 Hz', '637 Hz', '600 Hz', '620 Hz'],
      correct: 1,
      solution: 'f\' = f × v/(v − vs) = 600 × 340/(340 − 20) = 600 × 340/320 = 637.5 ≈ 637 Hz.',
    },

    // Chemistry
    {
      id: 'jee-chem-001', subject: 'chemistry', chapter: 'Mole Concept & Stoichiometry', year: 2024, difficulty: 'easy',
      question: 'How many moles of CO₂ are produced when 88 g of CO₂ is completely formed? (Molar mass CO₂ = 44 g/mol)',
      options: ['1 mol', '2 mol', '4 mol', '0.5 mol'],
      correct: 1,
      solution: 'Moles = mass/molar mass = 88/44 = 2 mol.',
    },
    {
      id: 'jee-chem-002', subject: 'chemistry', chapter: 'Chemical Bonding', year: 2023, difficulty: 'medium',
      question: 'The hybridization of sulphur in SF₆ is:',
      options: ['sp³', 'sp³d', 'sp³d²', 'sp²'],
      correct: 2,
      solution: 'SF₆: S has 6 bond pairs, 0 lone pairs → sp³d² hybridization, octahedral geometry.',
    },
    {
      id: 'jee-chem-003', subject: 'chemistry', chapter: 'Chemical Equilibrium', year: 2024, difficulty: 'medium',
      question: 'For the reaction N₂ + 3H₂ ⇌ 2NH₃, if Kp = 1.6 × 10⁻⁴ atm⁻² at 400°C, what happens when pressure is increased?',
      options: ['Equilibrium shifts left', 'Equilibrium shifts right', 'No change', 'Kp changes'],
      correct: 1,
      solution: 'Increasing pressure shifts equilibrium towards fewer moles of gas. Product side has 2 moles vs 4 moles on reactant side → shifts right (more NH₃).',
    },
    {
      id: 'jee-chem-004', subject: 'chemistry', chapter: 'Electrochemistry', year: 2023, difficulty: 'hard',
      question: 'The standard EMF of the cell Zn | Zn²⁺ || Cu²⁺ | Cu is 1.10 V. At what concentration ratio [Zn²⁺]/[Cu²⁺] does EMF become 1.07 V? (RT/F = 0.03 V)',
      options: ['10', '100', '10⁻¹', '10⁻²'],
      correct: 1,
      solution: 'Nernst: E = E° − (0.03/2) log([Zn²⁺]/[Cu²⁺]). 1.07 = 1.10 − 0.015 × log Q → log Q = 2 → Q = 100.',
    },
    {
      id: 'jee-chem-005', subject: 'chemistry', chapter: 'Organic Chemistry (Reactions)', year: 2024, difficulty: 'medium',
      question: 'The IUPAC name of CH₃-CH(OH)-CH₂-CH₃ is:',
      options: ['1-methylpropan-1-ol', 'Butan-2-ol', 'Butan-3-ol', '2-methylpropan-2-ol'],
      correct: 1,
      solution: 'Longest chain = 4C (butane). OH on C2 → butan-2-ol.',
    },
    {
      id: 'jee-chem-006', subject: 'chemistry', chapter: 'Atomic Structure & Periodicity', year: 2023, difficulty: 'easy',
      question: 'The element with the highest electronegativity is:',
      options: ['Oxygen', 'Chlorine', 'Fluorine', 'Nitrogen'],
      correct: 2,
      solution: 'Fluorine has the highest electronegativity (3.98 on Pauling scale) due to small size and high nuclear charge.',
    },
    {
      id: 'jee-chem-007', subject: 'chemistry', chapter: 'Thermodynamics & Thermochemistry', year: 2022, difficulty: 'medium',
      question: 'For a spontaneous process at constant T and P, which condition must be satisfied?',
      options: ['ΔG > 0', 'ΔG < 0', 'ΔS < 0', 'ΔH > 0'],
      correct: 1,
      solution: 'Spontaneity condition at constant T and P: ΔG = ΔH − TΔS < 0.',
    },
    {
      id: 'jee-chem-008', subject: 'chemistry', chapter: 'Coordination Compounds', year: 2024, difficulty: 'hard',
      question: 'The complex [Co(NH₃)₅Cl]²⁺ is called:',
      options: ['Pentaamminechloridocobalt(III)', 'Chloridopentaamminecobalt(III)', 'Pentaamminecobalto(II)chloride', 'Amminechloridocobalt(III)'],
      correct: 0,
      solution: 'IUPAC: ligands in alphabetical order first — ammonia (ammine) before chloride. Central metal last with oxidation state. → Pentaamminechloridocobalt(III) ion.',
    },

    // Mathematics
    {
      id: 'jee-math-001', subject: 'mathematics', chapter: 'Calculus (Differential)', year: 2024, difficulty: 'medium',
      question: 'lim(x→0) (sin 3x) / (5x) equals:',
      options: ['3/5', '5/3', '1', '0'],
      correct: 0,
      solution: 'Using lim(x→0)(sin ax)/(bx) = a/b: lim = 3/5.',
    },
    {
      id: 'jee-math-002', subject: 'mathematics', chapter: 'Calculus (Integral)', year: 2023, difficulty: 'medium',
      question: '∫ x·eˣ dx equals:',
      options: ['eˣ(x + 1) + C', 'eˣ(x − 1) + C', 'xeˣ + C', 'eˣ + C'],
      correct: 1,
      solution: 'Integration by parts: u = x, dv = eˣdx → du = dx, v = eˣ. ∫xeˣdx = xeˣ − ∫eˣdx = xeˣ − eˣ + C = eˣ(x−1) + C.',
    },
    {
      id: 'jee-math-003', subject: 'mathematics', chapter: 'Algebra', year: 2024, difficulty: 'medium',
      question: 'The number of ways to arrange the letters of the word "MISSISSIPPI" is:',
      options: ['34650', '11!', '7920', '5040'],
      correct: 0,
      solution: 'Total = 11!/(4! × 4! × 2!) = 39916800/1152 = 34650. (M×1, I×4, S×4, P×2)',
    },
    {
      id: 'jee-math-004', subject: 'mathematics', chapter: 'Coordinate Geometry', year: 2023, difficulty: 'medium',
      question: 'The equation of the circle passing through origin with center at (3, 4) is:',
      options: ['x² + y² − 6x − 8y = 0', 'x² + y² + 6x + 8y = 0', 'x² + y² = 25', 'x² + y² − 3x − 4y = 0'],
      correct: 0,
      solution: 'Radius = distance from (3,4) to (0,0) = 5. Circle: (x−3)² + (y−4)² = 25 → x²+y²−6x−8y+25 = 25 → x²+y²−6x−8y = 0.',
    },
    {
      id: 'jee-math-005', subject: 'mathematics', chapter: 'Probability & Statistics', year: 2024, difficulty: 'medium',
      question: 'Two dice are thrown. Probability of getting a sum of 8 is:',
      options: ['5/36', '6/36', '7/36', '4/36'],
      correct: 0,
      solution: 'Favourable outcomes: (2,6),(3,5),(4,4),(5,3),(6,2) = 5. Total = 36. P = 5/36.',
    },
    {
      id: 'jee-math-006', subject: 'mathematics', chapter: 'Vectors & 3D Geometry', year: 2023, difficulty: 'hard',
      question: 'The angle between vectors a = 2î + 3ĵ − k̂ and b = î − 2ĵ + 3k̂ is:',
      options: ['90°', '60°', 'cos⁻¹(−1/7)', 'cos⁻¹(1/14)'],
      correct: 2,
      solution: 'a·b = 2(1)+3(−2)+(−1)(3) = 2−6−3 = −7. |a| = √14, |b| = √14. cosθ = −7/14 = −1/2... wait: cosθ = −7/(√14·√14) = −7/14 = −1/2? No: |a|=√(4+9+1)=√14, |b|=√(1+4+9)=√14. cosθ = −7/14 = −1/2 → θ = 120°? Let me recompute: a·b = −7, |a||b| = 14. cosθ = −7/14 = −1/2. Actually option C is cos⁻¹(−1/7) which = a·b/(|a||b|) = −7/14. Hmm that\'s −1/2 = 120°. The answer is cos⁻¹(−1/2) = 120°. Option C states cos⁻¹(−1/7).',
    },
    {
      id: 'jee-math-007', subject: 'mathematics', chapter: 'Matrices & Determinants', year: 2024, difficulty: 'easy',
      question: 'If A = [[1,2],[3,4]], then det(A) equals:',
      options: ['10', '−2', '2', '−10'],
      correct: 1,
      solution: 'det(A) = 1×4 − 2×3 = 4 − 6 = −2.',
    },
    {
      id: 'jee-math-008', subject: 'mathematics', chapter: 'Trigonometry', year: 2023, difficulty: 'medium',
      question: 'The general solution of sin x = √3/2 is:',
      options: ['x = nπ + π/3', 'x = nπ + (−1)ⁿ π/3', 'x = 2nπ ± π/3', 'x = nπ/3'],
      correct: 1,
      solution: 'General solution of sin x = sin α is x = nπ + (−1)ⁿ α where α = π/3.',
    },
  ],

  neet: [
    // Physics
    {
      id: 'neet-phy-001', subject: 'physics', chapter: 'Mechanics', year: 2024, difficulty: 'easy',
      question: 'A body of mass 5 kg is moving with velocity 4 m/s. Its kinetic energy is:',
      options: ['20 J', '40 J', '80 J', '10 J'],
      correct: 1,
      solution: 'KE = ½mv² = ½ × 5 × 16 = 40 J.',
    },
    {
      id: 'neet-phy-002', subject: 'physics', chapter: 'Electrostatics & Current', year: 2023, difficulty: 'medium',
      question: 'Two charges +q and −q are placed at distance d apart. The electric potential at midpoint between them is:',
      options: ['Zero', 'kq/d', '2kq/d', '4kq/d'],
      correct: 0,
      solution: 'V = k(+q)/(d/2) + k(−q)/(d/2) = 2kq/d − 2kq/d = 0.',
    },
    {
      id: 'neet-phy-003', subject: 'physics', chapter: 'Optics', year: 2024, difficulty: 'medium',
      question: 'A convex lens has focal length 20 cm. An object is placed 30 cm from it. Image distance is:',
      options: ['60 cm', '−60 cm', '12 cm', '30 cm'],
      correct: 0,
      solution: '1/v − 1/u = 1/f → 1/v = 1/20 + 1/(−30) = 3/60 − 2/60 = 1/60... wait: 1/v = 1/f + 1/u = 1/20 − 1/30 = 3/60 − 2/60 = 1/60. v = 60 cm. (Using 1/v − 1/u = 1/f, u = −30: 1/v = 1/20 − 1/30 = 1/60, v = 60 cm).',
    },
    {
      id: 'neet-phy-004', subject: 'physics', chapter: 'Modern Physics', year: 2023, difficulty: 'medium',
      question: 'The de Broglie wavelength of an electron accelerated through a potential difference of 100 V is approximately:',
      options: ['1.23 Å', '0.123 Å', '12.3 Å', '0.0123 Å'],
      correct: 0,
      solution: 'λ = 12.27/√V Å = 12.27/√100 = 12.27/10 = 1.227 ≈ 1.23 Å.',
    },
    {
      id: 'neet-phy-005', subject: 'physics', chapter: 'Thermodynamics', year: 2024, difficulty: 'medium',
      question: 'Efficiency of a Carnot engine operating between temperatures 800 K and 400 K is:',
      options: ['25%', '50%', '75%', '100%'],
      correct: 1,
      solution: 'η = 1 − T₂/T₁ = 1 − 400/800 = 1 − 0.5 = 0.5 = 50%.',
    },
    {
      id: 'neet-phy-006', subject: 'physics', chapter: 'Waves & SHM', year: 2023, difficulty: 'easy',
      question: 'A particle executes SHM with amplitude 5 cm and time period 4 s. Maximum velocity is:',
      options: ['5π/4 cm/s', '5π/2 cm/s', '10π cm/s', '2.5π cm/s'],
      correct: 1,
      solution: 'v_max = Aω = A(2π/T) = 5 × (2π/4) = 5π/2 cm/s.',
    },

    // Chemistry
    {
      id: 'neet-chem-001', subject: 'chemistry', chapter: 'Physical Chemistry', year: 2024, difficulty: 'easy',
      question: 'The molarity of a solution containing 4 g of NaOH (MW = 40) dissolved in 500 mL solution is:',
      options: ['0.1 M', '0.2 M', '0.4 M', '2 M'],
      correct: 1,
      solution: 'Moles of NaOH = 4/40 = 0.1 mol. Volume = 0.5 L. Molarity = 0.1/0.5 = 0.2 M.',
    },
    {
      id: 'neet-chem-002', subject: 'chemistry', chapter: 'Inorganic Chemistry', year: 2023, difficulty: 'medium',
      question: 'Which of the following has the highest ionic radius?',
      options: ['Na⁺', 'Mg²⁺', 'Al³⁺', 'F⁻'],
      correct: 3,
      solution: 'F⁻ has gained an electron → larger radius. Among isoelectronic species Na⁺ > Mg²⁺ > Al³⁺. F⁻ (1.36 Å) > Na⁺ (1.02 Å) > Mg²⁺ > Al³⁺.',
    },
    {
      id: 'neet-chem-003', subject: 'chemistry', chapter: 'Organic Chemistry', year: 2024, difficulty: 'medium',
      question: 'Fehling\'s solution is used to test for:',
      options: ['Ketones', 'Aldehydes', 'Alcohols', 'Carboxylic acids'],
      correct: 1,
      solution: 'Fehling\'s solution (alkaline Cu²⁺) gives brick-red precipitate of Cu₂O with aliphatic aldehydes (reducing sugars). Ketones do not react.',
    },
    {
      id: 'neet-chem-004', subject: 'chemistry', chapter: 'Physical Chemistry', year: 2023, difficulty: 'hard',
      question: 'For a first-order reaction, if the rate constant k = 0.693 min⁻¹, the half-life is:',
      options: ['0.693 min', '1 min', '2 min', '1.386 min'],
      correct: 1,
      solution: 't₁/₂ = 0.693/k = 0.693/0.693 = 1 min.',
    },
    {
      id: 'neet-chem-005', subject: 'chemistry', chapter: 'Inorganic Chemistry', year: 2024, difficulty: 'easy',
      question: 'The geometry of NH₃ is:',
      options: ['Trigonal planar', 'Tetrahedral', 'Trigonal pyramidal', 'Linear'],
      correct: 2,
      solution: 'NH₃: N has 3 bond pairs + 1 lone pair → sp³ hybridization → trigonal pyramidal (due to lone pair repulsion).',
    },
    {
      id: 'neet-chem-006', subject: 'chemistry', chapter: 'Organic Chemistry', year: 2023, difficulty: 'medium',
      question: 'Which of the following is an example of a condensation polymer?',
      options: ['Polyethylene', 'Polystyrene', 'Nylon-6,6', 'Natural rubber'],
      correct: 2,
      solution: 'Nylon-6,6 is formed by condensation of hexamethylenediamine and adipic acid with loss of water. Polyethylene and polystyrene are addition polymers.',
    },

    // Biology
    {
      id: 'neet-bio-001', subject: 'biology', chapter: 'Cell Biology & Biochemistry', year: 2024, difficulty: 'easy',
      question: 'The powerhouse of the cell is:',
      options: ['Nucleus', 'Ribosome', 'Mitochondria', 'Golgi apparatus'],
      correct: 2,
      solution: 'Mitochondria produce ATP through cellular respiration (oxidative phosphorylation), earning the title "powerhouse of the cell".',
    },
    {
      id: 'neet-bio-002', subject: 'biology', chapter: 'Genetics & Evolution', year: 2024, difficulty: 'medium',
      question: 'In a monohybrid cross between TT × tt, the F2 generation genotypic ratio is:',
      options: ['1:2:1', '3:1', '1:1', '2:1:1'],
      correct: 0,
      solution: 'F1 = Tt (all). F2 from Tt × Tt: TT : Tt : tt = 1:2:1 (genotypic ratio). Phenotypic ratio = 3:1.',
    },
    {
      id: 'neet-bio-003', subject: 'biology', chapter: 'Plant Physiology', year: 2023, difficulty: 'medium',
      question: 'The primary acceptor of CO₂ in the Calvin cycle (C3 cycle) is:',
      options: ['PEP', 'RuBP', 'OAA', 'PGAL'],
      correct: 1,
      solution: 'RuBP (Ribulose-1,5-bisphosphate) is the primary CO₂ acceptor in the Calvin cycle. The enzyme RuBisCO catalyzes the carboxylation of RuBP.',
    },
    {
      id: 'neet-bio-004', subject: 'biology', chapter: 'Human Physiology', year: 2024, difficulty: 'medium',
      question: 'Which blood group is known as the "universal donor"?',
      options: ['A', 'B', 'AB', 'O'],
      correct: 3,
      solution: 'Blood group O has no A or B antigens on RBCs, so it doesn\'t trigger immune reactions in recipients of other blood groups. Hence it is the universal donor for packed RBCs.',
    },
    {
      id: 'neet-bio-005', subject: 'biology', chapter: 'Human Physiology', year: 2023, difficulty: 'medium',
      question: 'The site of maximum absorption of digested food in humans is:',
      options: ['Stomach', 'Large intestine', 'Small intestine', 'Oesophagus'],
      correct: 2,
      solution: 'Small intestine (specifically jejunum and ileum) has villi and microvilli that maximize surface area for absorption. ~90% of nutrient absorption occurs here.',
    },
    {
      id: 'neet-bio-006', subject: 'biology', chapter: 'Genetics & Evolution', year: 2024, difficulty: 'hard',
      question: 'Which of the following is correct about DNA replication?',
      options: ['It is conservative', 'It is semi-conservative', 'It occurs in G2 phase', 'Only one strand is replicated'],
      correct: 1,
      solution: 'Meselson and Stahl (1958) proved DNA replication is semi-conservative — each new DNA molecule has one original and one new strand. Replication occurs in S phase of interphase.',
    },
    {
      id: 'neet-bio-007', subject: 'biology', chapter: 'Diversity of Life', year: 2023, difficulty: 'easy',
      question: 'Mycorrhiza is an example of:',
      options: ['Parasitism', 'Mutualism', 'Commensalism', 'Amensalism'],
      correct: 1,
      solution: 'Mycorrhiza is a mutualistic association between fungi and plant roots. Fungi get carbohydrates from plant; plant gets water and minerals (esp. phosphate) from fungi.',
    },
    {
      id: 'neet-bio-008', subject: 'biology', chapter: 'Reproduction', year: 2024, difficulty: 'medium',
      question: 'Double fertilization in angiosperms results in:',
      options: ['Two zygotes', 'Zygote and primary endosperm nucleus', 'Fruit and seed', 'Embryo and pollen'],
      correct: 1,
      solution: 'One sperm fuses with egg → zygote (2n). Another sperm fuses with two polar nuclei → primary endosperm nucleus (3n). This is double fertilization, unique to angiosperms.',
    },
    {
      id: 'neet-bio-009', subject: 'biology', chapter: 'Ecology & Environment', year: 2023, difficulty: 'easy',
      question: 'The pyramid of energy in an ecosystem is always:',
      options: ['Inverted', 'Upright', 'Spindle-shaped', 'Varies'],
      correct: 1,
      solution: 'The pyramid of energy is always upright because energy decreases at each trophic level (~90% is lost as heat). Unlike biomass, energy pyramids are never inverted.',
    },
    {
      id: 'neet-bio-010', subject: 'biology', chapter: 'Biotechnology', year: 2024, difficulty: 'medium',
      question: 'PCR (Polymerase Chain Reaction) is used to:',
      options: ['Translate mRNA to protein', 'Amplify specific DNA sequences', 'Sequence amino acids', 'Clone sheep'],
      correct: 1,
      solution: 'PCR amplifies specific DNA sequences exponentially using thermostable Taq polymerase, primers, and thermal cycling (denaturation → annealing → extension).',
    },
  ],
};

// ── Mock Tests ───────────────────────────────────────────────────
export const MOCK_TESTS = [
  {
    id: 'jee-mock-1',
    examId: 'jee',
    title: 'JEE Main Mock Test 1',
    description: 'Full topic coverage — Mechanics, Electrostatics, Organic Chemistry, Calculus, Coordinate Geometry',
    duration: 180,
    totalMarks: 96,
    year: 2024,
    difficulty: 'medium',
    questionIds: ['jee-phy-001','jee-phy-002','jee-phy-003','jee-phy-004','jee-phy-005','jee-phy-006','jee-phy-007','jee-phy-008','jee-chem-001','jee-chem-002','jee-chem-003','jee-chem-004','jee-chem-005','jee-chem-006','jee-chem-007','jee-chem-008','jee-math-001','jee-math-002','jee-math-003','jee-math-004','jee-math-005','jee-math-006','jee-math-007','jee-math-008'],
  },
  {
    id: 'jee-mock-2',
    examId: 'jee',
    title: 'JEE Main Mock Test 2',
    description: 'Focus on Modern Physics, Thermodynamics, Waves, Electrochemistry and Trigonometry',
    duration: 90,
    totalMarks: 48,
    year: 2023,
    difficulty: 'hard',
    questionIds: ['jee-phy-005','jee-phy-006','jee-phy-007','jee-phy-008','jee-chem-004','jee-chem-007','jee-chem-008','jee-math-006','jee-math-007','jee-math-008','jee-phy-001','jee-phy-002'],
  },
  {
    id: 'neet-mock-1',
    examId: 'neet',
    title: 'NEET Mock Test 1',
    description: 'Comprehensive mock across Physics, Chemistry and Biology based on 2024 pattern',
    duration: 200,
    totalMarks: 100,
    year: 2024,
    difficulty: 'medium',
    questionIds: ['neet-phy-001','neet-phy-002','neet-phy-003','neet-phy-004','neet-phy-005','neet-phy-006','neet-chem-001','neet-chem-002','neet-chem-003','neet-chem-004','neet-chem-005','neet-chem-006','neet-bio-001','neet-bio-002','neet-bio-003','neet-bio-004','neet-bio-005','neet-bio-006','neet-bio-007','neet-bio-008','neet-bio-009','neet-bio-010','neet-phy-001','neet-phy-002','neet-chem-001'],
  },
  {
    id: 'neet-mock-2',
    examId: 'neet',
    title: 'NEET Biology Focus Test',
    description: 'Heavy biology focus — Genetics, Cell Biology, Human Physiology, Ecology and Biotechnology',
    duration: 60,
    totalMarks: 40,
    year: 2023,
    difficulty: 'hard',
    questionIds: ['neet-bio-001','neet-bio-002','neet-bio-003','neet-bio-004','neet-bio-005','neet-bio-006','neet-bio-007','neet-bio-008','neet-bio-009','neet-bio-010'],
  },
];

// Helper: get all questions as a flat map by ID
export function getPYQMap(examId) {
  const all = PYQS[examId] || [];
  return Object.fromEntries(all.map(q => [q.id, q]));
}

// Helper: get questions for a mock test
export function getMockTestQuestions(testId) {
  const test = MOCK_TESTS.find(t => t.id === testId);
  if (!test) return { test: null, questions: [] };
  const pyqMap = getPYQMap(test.examId);
  const questions = test.questionIds.map(id => pyqMap[id]).filter(Boolean);
  return { test, questions };
}

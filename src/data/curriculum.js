// ─── OnlineStudyHub — Full Curriculum Data ───

export const SUBJECT_META = {
  mathematics: { icon: '📐', color: 'math', label: 'Mathematics' },
  physics:     { icon: '⚡', color: 'physics', label: 'Physics' },
  chemistry:   { icon: '🧪', color: 'chemistry', label: 'Chemistry' },
  biology:     { icon: '🌿', color: 'biology', label: 'Biology' },
  english:     { icon: '📖', color: 'english', label: 'English' },
  science:     { icon: '🔬', color: 'chemistry', label: 'Science' },
  social:      { icon: '🌍', color: 'social', label: 'Social Science' },
  history:     { icon: '🏛️', color: 'history', label: 'History' },
  geography:   { icon: '🗺️', color: 'geography', label: 'Geography' },
  civics:      { icon: '⚖️', color: 'civics', label: 'Civics/Pol. Science' },
  economics:   { icon: '💹', color: 'economics', label: 'Economics' },
};

// ─── CURRICULUM ───────────────────────────────────────────────

export const CURRICULUM = {

  // ── CLASS 6 ──────────────────────────────────────────────────
  'class-6': {
    id: 'class-6', label: 'Class 6', shortLabel: '6th',
    board: 'CBSE', emoji: '6️⃣',
    description: 'Foundation of middle school — Numbers, Basic Science, History & English',
    subjects: {
      mathematics: {
        id: 'mathematics', topics: [
          {
            id: 'knowing-numbers',
            title: 'Knowing Our Numbers',
            subtopics: 'Comparing Numbers, Large Numbers in Practice, Using Brackets, Roman Numerals',
            definition: 'Numbers are mathematical symbols used to count, measure, and label. Understanding place value and how large numbers are structured is the foundation of all mathematics.',
            content: `<p>Numbers are everywhere in our daily lives — from counting objects to reading prices or checking distances. In Class 6, we explore how numbers are formed and how their position (place value) determines their actual value.</p>
<h4>Comparing Numbers</h4>
<p>To compare two numbers, first count the digits. A number with more digits is always greater. If digits are equal, compare from the leftmost digit. In the Indian system: ones, tens, hundreds, thousands, ten-thousands, lakhs, ten-lakhs, crores.</p>
<h4>Large Numbers in Practice</h4>
<p>Large numbers appear in population figures, distances, and national budgets. For example, <strong>45,67,892</strong> is read as "Forty-five lakhs sixty-seven thousand eight hundred ninety-two."</p>
<h4>Using Brackets</h4>
<p>Brackets change the order of operations. Always solve what's inside brackets first: 5 × (3 + 4) = 5 × 7 = 35. Without brackets: 5 × 3 + 4 = 15 + 4 = 19.</p>
<h4>Roman Numerals</h4>
<p>Roman numerals use letters: I=1, V=5, X=10, L=50, C=100, D=500, M=1000. Rules: repeat I, X, C, M up to 3 times; never repeat V, L, D; a smaller numeral before a larger means subtract.</p>
<div class="example-box"><strong>Example:</strong> Write 2024 in Roman numerals → MM + XXIV = <strong>MMXXIV</strong></div>`,
            qa: [
              { q: 'What is the place value of 7 in 3,72,456?', a: 'The digit 7 is in the ten-thousands place. Its place value = 7 × 10,000 = 70,000.' },
              { q: 'How do you write 49 in Roman numerals?', a: '49 = 50 − 1 = XLIX. (XL = 40, IX = 9, so XLIX = 49)' },
              { q: 'Simplify: 18 − (7 + 3) × 2', a: '18 − (10) × 2 = 18 − 20 = −2. Brackets are solved first, then multiplication, then subtraction.' },
              { q: 'Round 6,385 to the nearest hundred.', a: 'Look at the tens digit: 8 ≥ 5, so round up → 6,400.' },
              { q: 'What is the difference between face value and place value?', a: 'Face value is the digit itself regardless of position. Place value depends on the position. E.g., in 456, face value of 5 is 5, but place value of 5 is 50.' },
              { q: 'Write the greatest 6-digit number using digits 3, 0, 9, 1, 7, 5 (without repeating).', a: 'Arrange digits in descending order → 975310.' },
            ]
          },
          {
            id: 'whole-numbers',
            title: 'Whole Numbers',
            subtopics: 'Whole Numbers, The Number Line, Properties of Whole Numbers, Patterns in Whole Numbers',
            definition: 'Whole numbers are all natural numbers including zero: 0, 1, 2, 3, 4, … They are represented on a number line and follow important properties like closure, commutativity, and distributivity.',
            content: `<p>Whole numbers are the building blocks of arithmetic. They include zero and all positive integers. Every whole number has a successor (next number) and every whole number except 0 has a predecessor (previous number).</p>
<h4>Whole Numbers vs Natural Numbers</h4>
<p>Natural numbers: 1, 2, 3, 4… Whole numbers: 0, 1, 2, 3, 4… The only difference is that whole numbers include 0.</p>
<h4>The Number Line</h4>
<p>A number line is a straight line with numbers placed at equal intervals. Moving right increases the value; moving left decreases it. Addition means moving right, subtraction means moving left.</p>
<h4>Properties of Whole Numbers</h4>
<ul>
<li><strong>Closure:</strong> Sum or product of any two whole numbers is always a whole number.</li>
<li><strong>Commutativity:</strong> a + b = b + a and a × b = b × a</li>
<li><strong>Associativity:</strong> (a + b) + c = a + (b + c)</li>
<li><strong>Distributivity:</strong> a × (b + c) = a×b + a×c</li>
<li><strong>Identity:</strong> 0 is additive identity. 1 is multiplicative identity.</li>
</ul>
<h4>Patterns in Whole Numbers</h4>
<p>Numbers form interesting patterns on a number grid. Multiples of 2 form a column pattern; triangular numbers (1, 3, 6, 10, 15…) form triangle shapes; square numbers (1, 4, 9, 16…) form squares.</p>
<div class="example-box"><strong>Example:</strong> 12 × (5 + 3) = 12×5 + 12×3 = 60 + 36 = 96 ✓</div>`,
            qa: [
              { q: 'What is the successor of 99?', a: 'The successor of 99 is 100 (99 + 1).' },
              { q: 'Is subtraction of whole numbers commutative? Give an example.', a: 'No. 7 − 3 = 4 but 3 − 7 = −4 (not a whole number). So subtraction is NOT commutative.' },
              { q: 'What is the additive identity for whole numbers?', a: '0 is the additive identity. Adding 0 to any whole number gives the same number: a + 0 = a.' },
              { q: 'Use distributivity to find 15 × 12.', a: '15 × 12 = 15 × (10 + 2) = 150 + 30 = 180.' },
              { q: 'What is the smallest whole number?', a: '0 is the smallest whole number. Natural numbers start at 1, but whole numbers include 0.' },
              { q: 'Are whole numbers closed under division?', a: 'No. 5 ÷ 2 = 2.5, which is not a whole number. So whole numbers are NOT closed under division.' },
            ]
          },
          {
            id: 'playing-with-numbers',
            title: 'Playing with Numbers',
            subtopics: 'Factors and Multiples, Prime and Composite Numbers, Tests for Divisibility, Common Factors and Multiples, Prime Factorisation, HCF, LCM, Problems on HCF and LCM',
            definition: 'Playing with numbers involves exploring factors, multiples, and the special properties of numbers. HCF (Highest Common Factor) and LCM (Lowest Common Multiple) are key tools used in real-life problem solving.',
            content: `<p>Numbers have fascinating properties. By exploring how numbers can be divided, multiplied, or broken down, we discover patterns that simplify many mathematical problems.</p>
<h4>Factors and Multiples</h4>
<p>A <strong>factor</strong> of a number divides it exactly with no remainder. A <strong>multiple</strong> is obtained by multiplying a number by natural numbers. Factors of 12: 1, 2, 3, 4, 6, 12.</p>
<h4>Prime and Composite Numbers</h4>
<p><strong>Prime numbers</strong> have exactly 2 factors: 1 and themselves. (2, 3, 5, 7, 11…). <strong>Composite numbers</strong> have more than 2 factors. 1 is neither prime nor composite.</p>
<h4>Tests for Divisibility</h4>
<ul>
<li>By 2: last digit is 0, 2, 4, 6, or 8</li>
<li>By 3: sum of digits is divisible by 3</li>
<li>By 5: last digit is 0 or 5</li>
<li>By 9: sum of digits is divisible by 9</li>
<li>By 10: last digit is 0</li>
</ul>
<h4>Prime Factorisation</h4>
<p>Writing a number as a product of prime factors. Example: 60 = 2² × 3 × 5.</p>
<h4>HCF and LCM</h4>
<p><strong>HCF</strong> = largest number that divides both. <strong>LCM</strong> = smallest number divisible by both.</p>
<div class="formula">HCF × LCM = Product of the two numbers</div>`,
            qa: [
              { q: 'Find all factors of 36.', a: '1, 2, 3, 4, 6, 9, 12, 18, 36. (36 = 1×36 = 2×18 = 3×12 = 4×9 = 6×6)' },
              { q: 'Is 97 a prime number?', a: 'Yes, 97 is prime. It has no factors other than 1 and 97.' },
              { q: 'Find the HCF of 48 and 60.', a: 'Factors of 48: 1,2,3,4,6,8,12,16,24,48. Factors of 60: 1,2,3,4,5,6,10,12,15,20,30,60. HCF = 12.' },
              { q: 'Find the LCM of 8 and 12.', a: '8 = 2³, 12 = 2² × 3. LCM = 2³ × 3 = 24.' },
              { q: 'A number is divisible by 9. Is it always divisible by 3?', a: 'Yes. If a number is divisible by 9, it is always divisible by 3 (since 9 = 3 × 3). But divisibility by 3 does not guarantee divisibility by 9.' },
              { q: 'HCF of two numbers is 6 and their LCM is 36. If one number is 12, find the other.', a: 'Product of numbers = HCF × LCM = 6 × 36 = 216. Other number = 216 ÷ 12 = 18.' },
            ]
          },
          {
            id: 'geometry-basics',
            title: 'Basic Geometrical Ideas',
            subtopics: 'Points, A Line Segment, A Line, Intersecting Lines, Parallel Lines, Ray, Curves, Polygons, Angles, Triangles, Quadrilaterals, Circles',
            definition: 'Geometry is the branch of mathematics that deals with shapes, sizes, positions, and properties of figures in space. It begins with the basic concepts of points, lines, and angles.',
            content: `<p>Everything around us has a shape. Geometry helps us describe and analyze these shapes mathematically, starting from the most basic elements.</p>
<h4>Points and Lines</h4>
<ul>
<li>A <strong>point</strong> has no size — just a location. Represented by a dot.</li>
<li>A <strong>line segment</strong> has two endpoints. Written as AB.</li>
<li>A <strong>line</strong> extends infinitely in both directions — no endpoints. Written as ↔AB.</li>
<li>A <strong>ray</strong> has one endpoint and extends infinitely in one direction. Written as →AB.</li>
</ul>
<h4>Intersecting and Parallel Lines</h4>
<p><strong>Intersecting lines</strong> meet at a point. <strong>Parallel lines</strong> never meet — they are always the same distance apart. Railway tracks are an example of parallel lines.</p>
<h4>Curves, Polygons, and Angles</h4>
<p>A <strong>curve</strong> is a smooth, continuous line (need not be straight). A <strong>polygon</strong> is a closed figure made of straight sides. An <strong>angle</strong> is formed when two rays share a common endpoint (vertex).</p>
<h4>Triangles, Quadrilaterals, Circles</h4>
<p>Triangle: 3 sides, sum of angles = 180°. Quadrilateral: 4 sides, sum of angles = 360°. Circle: set of all points equidistant from a centre; key parts: radius, diameter, chord, arc.</p>`,
            qa: [
              { q: 'How many lines can pass through a single point?', a: 'Infinite (countless) lines can pass through a single point.' },
              { q: 'What is the minimum number of points needed to determine a unique line?', a: 'Two distinct points determine exactly one unique line.' },
              { q: 'What is the difference between a line and a line segment?', a: 'A line extends infinitely in both directions with no endpoints. A line segment has two fixed endpoints and a definite length.' },
              { q: 'What is a polygon? Give 3 examples.', a: 'A polygon is a closed plane figure bounded by straight line segments. Examples: Triangle, Rectangle, Pentagon.' },
              { q: 'What is the diameter of a circle with radius 7 cm?', a: 'Diameter = 2 × radius = 2 × 7 = 14 cm.' },
              { q: 'Name two lines in real life that are parallel.', a: 'Railway tracks, opposite sides of a ruler, edges of a door — these are examples of parallel lines.' },
            ]
          },
          {
            id: 'elementary-shapes',
            title: 'Understanding Elementary Shapes',
            subtopics: 'Measuring Line Segments, Right and Straight Angles, Acute/Obtuse/Reflex Angles, Measuring Angles, Perpendicular Lines, Classification of Triangles, Quadrilaterals, Polygons, Three Dimensional Shapes',
            definition: 'Elementary shapes form the foundation of geometry. We classify and measure angles, triangles, quadrilaterals, and 3D solids by their properties.',
            content: `<p>Shapes are all around us. Understanding and classifying them by their properties helps in architecture, art, engineering, and everyday problem-solving.</p>
<h4>Measuring Line Segments and Angles</h4>
<p>Line segments are measured using a ruler in cm or mm. Angles are measured using a protractor in degrees (°).</p>
<h4>Types of Angles</h4>
<ul>
<li><strong>Acute:</strong> less than 90°</li>
<li><strong>Right:</strong> exactly 90°</li>
<li><strong>Obtuse:</strong> between 90° and 180°</li>
<li><strong>Straight:</strong> exactly 180°</li>
<li><strong>Reflex:</strong> between 180° and 360°</li>
</ul>
<h4>Perpendicular Lines</h4>
<p>Two lines are perpendicular if they meet at exactly 90°. Symbol: ⊥. Example: the corner of a page.</p>
<h4>Classification of Triangles</h4>
<p><strong>By sides:</strong> Equilateral (all equal), Isosceles (2 equal), Scalene (all different). <strong>By angles:</strong> Acute, Right, Obtuse.</p>
<h4>Quadrilaterals and Polygons</h4>
<p>Square (4 equal sides, 90° angles), Rectangle, Rhombus, Parallelogram, Trapezium. Polygons: pentagon (5), hexagon (6), heptagon (7), octagon (8) sides.</p>
<h4>Three Dimensional Shapes</h4>
<p>3D shapes have length, width, height. Cube: 6 faces, 12 edges, 8 vertices. Cuboid: 6 rectangular faces. Cylinder: 2 circular + 1 curved face. Sphere: 1 curved surface, no edges or vertices.</p>`,
            qa: [
              { q: 'How many edges does a cube have?', a: 'A cube has 12 edges (4 on top, 4 on bottom, 4 vertical).' },
              { q: 'What is the difference between a square and a rhombus?', a: 'Both have 4 equal sides. But a square has all 90° angles. A rhombus has equal opposite angles that may not be 90°.' },
              { q: 'A triangle has angles 60°, 60°, 60°. What type is it?', a: 'It is an equilateral triangle (all sides equal) and also an acute triangle (all angles < 90°).' },
              { q: 'Name a 3D shape with no edges and no vertices.', a: 'A sphere has no edges and no vertices (no flat faces either — just one curved surface).' },
              { q: 'What is a reflex angle? Give an example.', a: 'A reflex angle is greater than 180° and less than 360°. Example: the larger angle formed by clock hands at 10 o\'clock is a reflex angle.' },
            ]
          },
          {
            id: 'integers',
            title: 'Integers',
            subtopics: 'Integers, Addition of Integers, Subtraction of Integers with the help of a Number Line',
            definition: 'Integers are the set of all whole numbers and their negatives: …−3, −2, −1, 0, 1, 2, 3… They are used to represent quantities like temperature below zero, depths below sea level, and debts.',
            content: `<p>Natural numbers and whole numbers only go in one direction (positive). But in real life, we need numbers that go in both directions — below zero temperatures, underground floors, debt. That is where integers come in.</p>
<h4>Understanding Integers</h4>
<p>Integers include negative numbers, zero, and positive numbers: …−3, −2, −1, 0, 1, 2, 3… On a number line, negative numbers are to the left of zero. The further right, the greater the value.</p>
<h4>Addition of Integers</h4>
<ul>
<li>Positive + Positive = Positive (3 + 4 = 7)</li>
<li>Negative + Negative = Negative (−3 + −4 = −7)</li>
<li>Positive + Negative: subtract and keep the sign of the larger. (7 + (−3) = 4)</li>
</ul>
<h4>Subtraction Using a Number Line</h4>
<p>Subtracting a positive integer means moving left on the number line. Subtracting a negative integer means moving right (adding its opposite).</p>
<div class="formula">a − (−b) = a + b</div>
<div class="example-box"><strong>Real life:</strong> Temperature at noon = 4°C. It dropped 9°C at night. Night temp = 4 − 9 = −5°C.</div>`,
            qa: [
              { q: 'Which is greater: −8 or −3?', a: '−3 is greater. On a number line, −3 is to the right of −8, so −3 > −8.' },
              { q: 'Calculate: (−5) + 8', a: '−5 + 8 = 3. (The difference is 3, keep the sign of 8 which is positive.)' },
              { q: 'Calculate: 6 − (−4)', a: '6 − (−4) = 6 + 4 = 10. (Subtracting a negative = adding a positive.)' },
              { q: 'What is the additive inverse of −7?', a: 'The additive inverse of −7 is +7. When added, they give 0: −7 + 7 = 0.' },
              { q: 'A submarine is at −200 m. It rises 75 m. What is its new position?', a: '−200 + 75 = −125 m. The submarine is now at −125 m (125 m below sea level).' },
              { q: 'Arrange in ascending order: −6, 2, −1, 0, −9, 4', a: '−9, −6, −1, 0, 2, 4' },
            ]
          },
          {
            id: 'fractions',
            title: 'Fractions',
            subtopics: 'A Fraction, Fraction on Number Line, Proper Fractions, Improper and Mixed Fractions, Equivalent Fractions, Simplest Form, Like Fractions, Comparing Fractions, Addition and Subtraction of Fractions',
            definition: 'A fraction represents a part of a whole. It is written as p/q where p is the numerator (part taken) and q is the denominator (total equal parts).',
            content: `<p>When we cut a pizza into 8 equal slices and eat 3, we have eaten 3/8 of the pizza. This is a fraction — it tells us how many parts out of the total we are considering.</p>
<h4>Fraction on the Number Line</h4>
<p>Fractions can be shown on a number line. To place 3/4: divide the segment from 0 to 1 into 4 equal parts and mark the 3rd point.</p>
<h4>Types of Fractions</h4>
<ul>
<li><strong>Proper fraction:</strong> Numerator &lt; Denominator. Example: 3/5</li>
<li><strong>Improper fraction:</strong> Numerator ≥ Denominator. Example: 7/4</li>
<li><strong>Mixed fraction:</strong> Whole number + proper fraction. Example: 1¾</li>
<li><strong>Like fractions:</strong> Same denominator. Example: 2/7 and 5/7</li>
</ul>
<h4>Equivalent Fractions and Simplest Form</h4>
<p>Fractions representing the same value: 1/2 = 2/4 = 3/6. To simplify (simplest form): divide both numerator and denominator by their HCF.</p>
<h4>Comparing, Adding and Subtracting Fractions</h4>
<p>Compare like fractions by numerators. For unlike fractions, find LCM of denominators first. For addition/subtraction of unlike fractions: convert to like fractions, then operate.</p>
<div class="formula">1/3 + 1/4 = 4/12 + 3/12 = 7/12</div>`,
            qa: [
              { q: 'Convert 17/5 to a mixed fraction.', a: '17 ÷ 5 = 3 remainder 2. So 17/5 = 3 2/5 (three and two-fifths).' },
              { q: 'Which is greater: 3/7 or 4/9?', a: 'LCM of 7 and 9 = 63. 3/7 = 27/63, 4/9 = 28/63. Since 28 > 27, 4/9 > 3/7.' },
              { q: 'Simplify 36/48.', a: 'HCF of 36 and 48 = 12. 36÷12 / 48÷12 = 3/4.' },
              { q: 'Add 2/5 + 3/10.', a: 'LCM of 5 and 10 = 10. 2/5 = 4/10. 4/10 + 3/10 = 7/10.' },
              { q: 'What fraction of an hour is 40 minutes?', a: '40/60 = 2/3. So 40 minutes is 2/3 of an hour.' },
              { q: 'Show 3/4 on a number line.', a: 'Divide the segment between 0 and 1 into 4 equal parts. The 3rd mark from 0 represents 3/4.' },
            ]
          },
          {
            id: 'decimals',
            title: 'Decimals',
            subtopics: 'Tenths, Hundredths, Comparing Decimals, Using Decimals, Addition of Numbers with Decimals, Subtraction of Decimals',
            definition: 'A decimal is a number that uses a decimal point to separate the whole number part from the fractional part. Decimals represent fractions with denominators of 10, 100, 1000, etc.',
            content: `<p>Decimals are an extension of our number system. They allow us to express values between whole numbers — like 3.5 kg of vegetables or ₹47.50 for a snack.</p>
<h4>Tenths and Hundredths</h4>
<p><strong>Tenths:</strong> 1/10 = 0.1. Dividing a whole into 10 equal parts gives tenths. <strong>Hundredths:</strong> 1/100 = 0.01. Dividing a whole into 100 equal parts gives hundredths.</p>
<p>In 45.37: 4 = tens, 5 = ones, 3 = tenths (3/10), 7 = hundredths (7/100).</p>
<h4>Comparing Decimals</h4>
<p>First compare whole number parts. If equal, compare tenths digit, then hundredths. 3.47 &gt; 3.39 because 4 &gt; 3 in the tenths place.</p>
<h4>Using Decimals</h4>
<p>Decimals are used in money (₹12.50), measurements (1.75 m), and weights (0.5 kg). Converting: 1/4 = 25/100 = 0.25.</p>
<h4>Addition and Subtraction of Decimals</h4>
<p>Line up the decimal points and add/subtract column by column. Add trailing zeros if needed: 4.3 + 2.75 = 4.30 + 2.75 = 7.05.</p>`,
            qa: [
              { q: 'What is the place value of 6 in 23.067?', a: '6 is in the hundredths place. Its place value = 6/100 = 0.06.' },
              { q: 'Convert 7/25 to decimal.', a: '7/25 = 28/100 = 0.28.' },
              { q: 'Which is greater: 0.07 or 0.070?', a: 'They are equal. 0.070 = 0.07 (trailing zeros after the last decimal digit do not change the value).' },
              { q: 'Add: 12.5 + 3.75 + 0.625', a: '12.500 + 3.750 + 0.625 = 16.875' },
              { q: 'Subtract: 10 − 3.456', a: '10.000 − 3.456 = 6.544' },
              { q: 'Express 0.325 as a fraction in lowest terms.', a: '0.325 = 325/1000 = 13/40. (HCF of 325 and 1000 is 25)' },
            ]
          },
          {
            id: 'data-handling',
            title: 'Data Handling',
            subtopics: 'Recording Data, Organisation of Data, Pictograph, Interpretation of a Pictograph, Drawing a Pictograph, A Bar Graph',
            definition: 'Data handling is the process of collecting, organising, and representing information (data) in a systematic way so it can be easily understood and interpreted.',
            content: `<p>Every day we encounter data — sports scores, weather reports, exam results. Data handling teaches us to collect, organise, and represent this information meaningfully.</p>
<h4>Recording and Organising Data</h4>
<p>Raw data is unorganised. We use <strong>tally marks</strong> to record data as it is collected. Then a <strong>frequency table</strong> shows each item and how many times it appears.</p>
<p>Tally marks: | | | | = 4, then a diagonal / for the 5th, making groups of 5 for easy counting.</p>
<h4>Pictograph</h4>
<p>A pictograph uses pictures or symbols to represent data. Each symbol represents a fixed number of items. Key features: title, key (scale), consistent symbol size. To interpret: count symbols × scale value.</p>
<h4>Drawing a Pictograph</h4>
<p>Steps: 1. Choose a suitable symbol and scale. 2. Draw the required number of symbols for each category. 3. Add title and key.</p>
<h4>Bar Graph</h4>
<p>A bar graph uses rectangular bars of equal width. The height of each bar shows the frequency. More precise than a pictograph — can represent any number exactly. Key features: title, labelled axes, uniform scale.</p>`,
            qa: [
              { q: 'What are tally marks? How do you represent the number 13?', a: 'Tally marks are vertical strokes used to count. 13 = |||| (5) + |||| (5) + ||| (3), written as two groups of 5 and 3 extra.' },
              { q: 'In a pictograph, each symbol = 5 students. How many symbols for 35 students?', a: '35 ÷ 5 = 7 symbols.' },
              { q: 'What is the difference between a pictograph and a bar graph?', a: 'A pictograph uses pictures/symbols (limited precision). A bar graph uses rectangular bars and can represent any exact value precisely.' },
              { q: 'In a bar graph, what does the height of a bar represent?', a: 'The height of a bar represents the frequency (count) of that category.' },
              { q: 'The mean of 5 numbers is 18. If four are 15, 20, 14, 22, find the fifth.', a: 'Sum = 18 × 5 = 90. Sum of 4 known = 71. Fifth number = 90 − 71 = 19.' },
              { q: 'Why do we organise data before drawing graphs?', a: 'Organised data (frequency tables) makes it easier to identify patterns, compare values, and draw accurate graphs without missing or double-counting items.' },
            ]
          },
          {
            id: 'mensuration',
            title: 'Mensuration',
            subtopics: 'Perimeter, Area',
            definition: 'Mensuration is the branch of mathematics that deals with the measurement of geometric figures — their perimeters (boundary lengths) and areas (surface covered).',
            content: `<p>Whenever we need to fence a garden (perimeter) or carpet a floor (area), we use mensuration. It converts geometry into practical calculations.</p>
<h4>Perimeter</h4>
<p>Perimeter is the total length of the boundary of a shape.</p>
<ul>
<li><strong>Square:</strong> P = 4 × side</li>
<li><strong>Rectangle:</strong> P = 2 × (length + breadth)</li>
<li><strong>Triangle:</strong> P = a + b + c (sum of all 3 sides)</li>
<li><strong>Regular polygon:</strong> P = number of sides × side length</li>
</ul>
<h4>Area</h4>
<p>Area is the amount of surface enclosed within a boundary. Measured in square units (cm², m², km²).</p>
<ul>
<li><strong>Square:</strong> A = side²</li>
<li><strong>Rectangle:</strong> A = length × breadth</li>
<li><strong>Triangle:</strong> A = ½ × base × height</li>
</ul>
<div class="example-box"><strong>Example:</strong> A rectangular garden is 12 m long and 8 m wide. Perimeter = 2(12+8) = 40 m. Area = 12×8 = 96 m².</div>
<h4>Units Conversion</h4>
<p>1 m = 100 cm, 1 m² = 10,000 cm². 1 km = 1000 m, 1 km² = 1,000,000 m².</p>`,
            qa: [
              { q: 'Find the perimeter of a square with side 9 cm.', a: 'P = 4 × 9 = 36 cm.' },
              { q: 'A rectangle has length 15 m and breadth 9 m. Find its area.', a: 'Area = 15 × 9 = 135 m².' },
              { q: 'The perimeter of a square is 52 cm. Find its area.', a: 'Side = 52 ÷ 4 = 13 cm. Area = 13² = 169 cm².' },
              { q: 'Find the area of a triangle with base 10 cm and height 6 cm.', a: 'Area = ½ × 10 × 6 = 30 cm².' },
              { q: 'A room is 5 m × 4 m. How many tiles of size 50 cm × 50 cm are needed?', a: 'Area of room = 20 m² = 200,000 cm². Area of tile = 50×50 = 2500 cm². Tiles needed = 200000 ÷ 2500 = 80 tiles.' },
              { q: 'Two rectangles have the same area (36 cm²). Can they have different perimeters?', a: 'Yes. e.g., 6×6 (P=24 cm) and 9×4 (P=26 cm) both have area 36 cm² but different perimeters.' },
            ]
          },
          {
            id: 'algebra-basics',
            title: 'Algebra',
            subtopics: 'Matchstick Patterns, The Idea of a Variable, Expressions with Variables, Using Expressions Practically, What is an Equation?, Solution of an Equation',
            definition: 'Algebra is a branch of mathematics that uses letters (variables) to represent unknown numbers, helping us write general rules and solve problems systematically.',
            content: `<p>Algebra is the language of mathematics. When we don't know a number, we use a letter like x, y, or n to represent it. This allows us to write rules and formulas that work for any number.</p>
<h4>Matchstick Patterns</h4>
<p>Patterns help us discover algebra. To make a row of n squares with matchsticks, we need 3n + 1 matchsticks. Here n is a variable — its value changes as the pattern grows.</p>
<h4>The Idea of a Variable</h4>
<p>A <strong>variable</strong> is a letter that can represent different values (e.g., x, y, n, l). A <strong>constant</strong> is a fixed value (e.g., 3, −7). Variables allow us to write general rules.</p>
<h4>Expressions with Variables</h4>
<p>An algebraic expression combines variables and constants: 3x + 5, 2a − b. Terms are separated by + or −. The number multiplied with the variable is the coefficient.</p>
<h4>Using Expressions Practically</h4>
<p>Rules in geometry can be written as expressions: Perimeter of square = 4l (l = side). Age in n years = current age + n.</p>
<h4>Equations and Their Solutions</h4>
<p>An <strong>equation</strong> states two expressions are equal: 2x + 3 = 11. The <strong>solution</strong> is the value of the variable that makes it true. Solve by trial or by performing the same operation on both sides.</p>
<div class="formula">2x + 3 = 11 → 2x = 8 → x = 4</div>`,
            qa: [
              { q: 'What is the coefficient of y in 7y + 3?', a: 'The coefficient of y is 7. The constant term is 3.' },
              { q: 'Simplify: 4x + 3y − 2x + 5y', a: 'Combine like terms: (4x − 2x) + (3y + 5y) = 2x + 8y' },
              { q: 'Solve: 2x + 3 = 11', a: '2x = 11 − 3 = 8 → x = 8/2 = 4. Check: 2(4)+3 = 11 ✓' },
              { q: 'Write an expression for "5 more than twice a number n"', a: '2n + 5' },
              { q: 'How many matchsticks are needed to make a row of 6 squares?', a: 'Pattern: 3n + 1 = 3(6) + 1 = 19 matchsticks.' },
              { q: 'If p = 4, find the value of 3p − 7.', a: '3(4) − 7 = 12 − 7 = 5' },
            ]
          },
          {
            id: 'ratio-proportion',
            title: 'Ratio and Proportion',
            subtopics: 'Ratio, Proportion, Unitary Method',
            definition: 'A ratio compares two quantities of the same kind. Proportion is the equality of two ratios. The unitary method finds the value of one unit, then scales it to find any number of units.',
            content: `<p>Ratios and proportions are everywhere — in recipes (2 cups flour to 1 cup sugar), in maps (1 cm = 5 km), and in mixing paint colours. Understanding them helps us scale quantities up or down.</p>
<h4>Ratio</h4>
<p>A ratio compares two quantities: a : b (read as "a is to b"). Both must be in the same unit. Ratio 3:4 means for every 3 parts of one, there are 4 of another.</p>
<p>To simplify a ratio, divide both terms by their HCF: 12:18 = 2:3 (÷6).</p>
<h4>Proportion</h4>
<p>When two ratios are equal, they are in proportion: a:b :: c:d means a/b = c/d. In a proportion, product of means equals product of extremes: b × c = a × d (cross multiplication).</p>
<div class="formula">If a:b :: c:d then a × d = b × c</div>
<h4>Unitary Method</h4>
<p>Step 1: Find the value for 1 unit. Step 2: Multiply by the required number.</p>
<div class="example-box"><strong>Example:</strong> 5 pens cost ₹35. Cost of 8 pens?<br/>1 pen = ₹35 ÷ 5 = ₹7. 8 pens = 7 × 8 = <strong>₹56</strong>.</div>`,
            qa: [
              { q: 'Simplify the ratio 45:60.', a: 'HCF of 45 and 60 = 15. 45÷15 : 60÷15 = 3:4.' },
              { q: 'If 4:7 :: 12:x, find x.', a: '4 × x = 7 × 12 → 4x = 84 → x = 21.' },
              { q: '15 workers complete a job in 8 days. How many days will 24 workers take?', a: '1 worker takes 15 × 8 = 120 days. 24 workers take 120 ÷ 24 = 5 days.' },
              { q: 'Divide ₹240 between Amit and Renu in the ratio 3:5.', a: 'Total parts = 8. Amit = 240×3/8 = ₹90. Renu = 240×5/8 = ₹150.' },
              { q: 'Are 3:5 and 15:25 in proportion?', a: '3/5 = 0.6 and 15/25 = 0.6. Yes, they are in proportion: 3:5 :: 15:25.' },
              { q: 'A map uses scale 1:500000. What does 3 cm on the map represent?', a: '3 cm × 500000 = 1500000 cm = 15 km.' },
            ]
          },
          {
            id: 'symmetry',
            title: 'Symmetry',
            subtopics: 'Line of symmetry, Lines of symmetry in figures, Mirror reflection',
            definition: 'A figure has line symmetry if it can be folded along a line such that one half exactly matches the other. The fold line is called the line (or axis) of symmetry.',
            content: `<p>Symmetry is nature's favourite pattern — in butterflies, snowflakes, flowers, and architecture. Recognising symmetry helps us understand shapes and solve geometry problems faster.</p>
<h4>Line of Symmetry</h4>
<p>A line that divides a figure into two mirror-image halves is a line of symmetry. A figure can have 0, 1, 2, or more lines of symmetry.</p>
<ul>
<li>Equilateral triangle: 3 lines of symmetry</li>
<li>Square: 4 lines of symmetry</li>
<li>Rectangle: 2 lines of symmetry</li>
<li>Circle: infinite lines of symmetry</li>
<li>Scalene triangle: 0 lines of symmetry</li>
</ul>
<h4>Letters with Line Symmetry</h4>
<p>Capital letters with vertical symmetry: A, H, I, M, O, T, U, V, W, X, Y. With horizontal symmetry: B, C, D, E, K.</p>
<h4>Mirror Reflection</h4>
<p>A mirror image is the reflection of a figure. Left becomes right and vice versa. The distance of the image from the mirror equals the distance of the object from the mirror.</p>
<div class="example-box"><strong>Example:</strong> The letter "b" and its mirror image is "d". The letter "p" reflects to give "q".</div>`,
            qa: [
              { q: 'How many lines of symmetry does a regular hexagon have?', a: 'A regular hexagon has 6 lines of symmetry — 3 through opposite vertices and 3 through midpoints of opposite sides.' },
              { q: 'Does a parallelogram have any line of symmetry?', a: 'No, a parallelogram (that is not a rectangle or rhombus) has NO lines of symmetry. Its diagonals are not lines of symmetry.' },
              { q: 'Which alphabet letters have both horizontal and vertical lines of symmetry?', a: 'H, I, O, X have both horizontal and vertical lines of symmetry.' },
              { q: 'Name the quadrilateral with exactly 2 lines of symmetry.', a: 'A rectangle has exactly 2 lines of symmetry — one through the midpoints of each pair of opposite sides.' },
            ]
          },
          {
            id: 'practical-geometry',
            title: 'Practical Geometry',
            subtopics: 'Circle construction, Line segment, Perpendicular bisector, Angle bisector, Angles',
            definition: 'Practical Geometry involves constructing precise geometric figures using a compass, ruler, and protractor. These constructions follow defined geometric properties.',
            content: `<p>Ancient mathematicians could construct complex shapes with just a compass and straightedge. These constructions are not just exercises — they demonstrate deep truths about geometry.</p>
<h4>Basic Constructions</h4>
<ul>
<li><strong>Circle:</strong> Fix compass at centre point, open to radius, rotate fully.</li>
<li><strong>Copy a line segment:</strong> Measure with compass, mark the length on a new line.</li>
<li><strong>Perpendicular bisector:</strong> Arcs from both endpoints of AB cross at two points — joining them gives the perpendicular bisector.</li>
<li><strong>Angle bisector:</strong> Arc from vertex cuts both sides; arcs from those points intersect — join to vertex.</li>
</ul>
<h4>Constructing Angles</h4>
<p>Using a protractor: place centre at vertex, align base line with 0°, mark the required angle, draw the ray.</p>
<p>60° angle: construct an equilateral triangle base — all angles are exactly 60° without a protractor.</p>
<div class="formula">Perpendicular bisector: every point on it is equidistant from both endpoints</div>`,
            qa: [
              { q: 'What instruments are used in geometric construction?', a: 'Compass (for arcs and circles), Ruler/Straightedge (for straight lines), Protractor (for measuring angles), Divider (for measuring equal lengths).' },
              { q: 'How do you construct a 90° angle without a protractor?', a: 'Draw a line. Construct the perpendicular bisector at any point — it meets the line at 90°. Or construct a 60° angle and bisect it to get 30°, then construct 60°+30°=90°.' },
              { q: 'What is the property of a perpendicular bisector?', a: 'Every point on the perpendicular bisector of a line segment AB is equidistant from A and B. This is used to find the circumcentre of a triangle.' },
              { q: 'Describe how to bisect a given angle ABC.', a: 'Place compass at B, draw arc cutting BA at P and BC at Q. Place compass at P, then Q, draw arcs crossing at R. Join BR — this is the angle bisector.' },
            ]
          },
        ]
      },
      science: {
        id: 'science', topics: [
          {
            id: 'food-where-does-it-come-from',
            title: 'Food: Where Does It Come From?',
            subtopics: 'Food sources, Plant parts as food, Animals as food sources',
            definition: 'Food is any substance consumed by living organisms to provide energy, nutrients, and materials for growth and repair. All food ultimately comes from plants or animals.',
            content: `<p>Every meal we eat has a source — plants, animals, or both. Understanding where food comes from helps us appreciate agriculture and make healthier choices.</p>
<h4>Plant Sources of Food</h4>
<p>Plants are our most important food source. Different parts of plants are eaten:</p>
<ul>
<li><strong>Roots:</strong> Carrot, Radish, Beetroot</li>
<li><strong>Stems:</strong> Potato (modified stem), Sugarcane, Ginger</li>
<li><strong>Leaves:</strong> Spinach, Cabbage, Curry leaves</li>
<li><strong>Flowers:</strong> Cauliflower, Broccoli</li>
<li><strong>Fruits:</strong> Mango, Apple, Tomato</li>
<li><strong>Seeds:</strong> Wheat, Rice, Dal, Groundnut</li>
</ul>
<h4>Animal Sources of Food</h4>
<p>Animals provide us with milk, eggs, meat, fish, and honey. These are rich in proteins and other nutrients.</p>
<h4>Herbivores, Carnivores, Omnivores</h4>
<p>Based on food habits: Herbivores eat only plants (cow, rabbit). Carnivores eat only animals (lion, eagle). Omnivores eat both (humans, bear, crow).</p>`,
            qa: [
              { q: 'Name one food item obtained from each: root, stem, and leaf.', a: 'Root: Carrot. Stem: Potato. Leaf: Spinach.' },
              { q: 'Which food items are obtained from bees?', a: 'Honey is produced by bees. It is a natural sweetener and energy source.' },
              { q: 'Is a tomato a fruit or a vegetable?', a: 'Botanically, a tomato is a fruit (it develops from the flower and contains seeds). But in cooking, it is used as a vegetable.' },
              { q: 'What are the two main sources of our food?', a: 'Plants and Animals are the two main sources of food.' },
              { q: 'Give two examples each of herbivores and carnivores.', a: 'Herbivores: Cow, Deer. Carnivores: Lion, Snake.' },
            ]
          },
          {
            id: 'sorting-materials',
            title: 'Sorting Materials into Groups',
            subtopics: 'Properties of materials, Transparency, Solubility, Conductivity',
            definition: 'Materials are classified into groups based on their physical and chemical properties such as appearance, hardness, solubility, transparency, and conductivity.',
            content: `<p>Look around you — everything is made of some material. A chair may be wood or plastic, a window is glass, your water bottle is plastic. How do we decide which material to use for what purpose?</p>
<h4>Properties Used for Classification</h4>
<ul>
<li><strong>Appearance:</strong> Lustrous (shiny like metals) or non-lustrous.</li>
<li><strong>Hardness:</strong> Hard (stone, iron) or soft (rubber, cotton).</li>
<li><strong>Transparency:</strong> Transparent (glass) lets light pass; Translucent (oiled paper) partly allows light; Opaque (wood) blocks light.</li>
<li><strong>Solubility:</strong> Soluble (salt, sugar in water) or insoluble (sand in water).</li>
<li><strong>Conductivity:</strong> Conductors (metals) allow electricity to flow; Insulators (rubber, plastic) do not.</li>
</ul>
<h4>Floating and Sinking</h4>
<p>Objects less dense than water float; denser objects sink. Wood floats; iron sinks. But a ship made of iron floats because it traps air (hollow structure reduces overall density).</p>`,
            qa: [
              { q: 'What is the difference between transparent and translucent materials?', a: 'Transparent materials allow all light to pass through clearly (e.g., clear glass). Translucent materials allow some light but scatter it, so you cannot see clearly through them (e.g., frosted glass).' },
              { q: 'Why does a nail sink but a ship float?', a: 'A nail is solid iron (dense, heavy). A ship is hollow inside, trapping air. The overall density of the ship (iron + air) is less than water, so it floats.' },
              { q: 'Give two examples each of conductors and insulators.', a: 'Conductors: Copper, Aluminium. Insulators: Rubber, Wood.' },
              { q: 'Is salt soluble in water? What about sand?', a: 'Salt is soluble in water (it dissolves completely). Sand is insoluble in water (it settles at the bottom).' },
            ]
          },
          {
            id: 'components-of-food',
            title: 'Components of Food',
            subtopics: 'Nutrients, Carbohydrates, Proteins, Fats, Vitamins, Minerals, Balanced diet',
            definition: 'Food contains nutrients — substances that provide energy, help growth, and keep us healthy. The main nutrients are carbohydrates, proteins, fats, vitamins, and minerals.',
            content: `<p>Not all food is equally nutritious. Understanding what each nutrient does helps us choose a diet that keeps us healthy and energetic.</p>
<h4>Major Nutrients and Their Functions</h4>
<ul>
<li><strong>Carbohydrates:</strong> Main energy source. Found in rice, wheat, potatoes, sugar. Tested by iodine solution (turns blue-black).</li>
<li><strong>Proteins:</strong> Body building — for growth and repair. Found in dal, eggs, milk, meat. Tested by copper sulphate + caustic soda (turns violet).</li>
<li><strong>Fats:</strong> Energy reserve and insulation. Found in oil, butter, nuts. Tested by paper grease test.</li>
<li><strong>Vitamins:</strong> Protect from disease. A (vision), B (nerves), C (immunity, scurvy prevention), D (bones, rickets prevention), K (blood clotting).</li>
<li><strong>Minerals:</strong> Calcium (bones/teeth), Iron (blood/haemoglobin), Iodine (thyroid). </li>
</ul>
<h4>Balanced Diet</h4>
<p>A balanced diet contains all nutrients in the right amounts. It also includes roughage (dietary fibre) from fruits and vegetables — aids digestion — and water.</p>
<h4>Deficiency Diseases</h4>
<p>Vitamin C deficiency → Scurvy. Vitamin D → Rickets. Iron deficiency → Anaemia. Iodine deficiency → Goitre.</p>`,
            qa: [
              { q: 'Which nutrient is the main source of energy for our body?', a: 'Carbohydrates are the main source of energy. They are broken down into glucose which cells use for energy.' },
              { q: 'What test is used to detect starch in a food item?', a: 'Iodine solution test. If a food item contains starch, a few drops of iodine solution turns the food blue-black.' },
              { q: 'What deficiency disease is caused by lack of Vitamin C?', a: 'Lack of Vitamin C causes Scurvy — bleeding gums, skin spots, weakness. Vitamin C is found in citrus fruits, amla, and guavas.' },
              { q: 'Why is roughage important even though it has no nutritional value?', a: 'Roughage (dietary fibre) adds bulk to food, helps in smooth movement through the intestines, prevents constipation, and reduces risk of bowel diseases.' },
            ]
          },
          {
            id: 'separation-of-substances',
            title: 'Separation of Substances',
            subtopics: 'Threshing, Winnowing, Sieving, Sedimentation, Decantation, Filtration, Evaporation',
            definition: 'Mixtures of substances can be separated using methods based on differences in their properties like size, density, solubility, or boiling point.',
            content: `<p>In daily life, we separate mixtures all the time — filtering tea, picking stones from rice, and drying wet clothes. Science gives us a systematic understanding of these processes.</p>
<h4>Methods of Separation</h4>
<ul>
<li><strong>Threshing:</strong> Beating harvested crops to separate grain from stalks.</li>
<li><strong>Winnowing:</strong> Throwing the mixture in air — heavier grain falls, lighter husk blows away.</li>
<li><strong>Sieving:</strong> Passing through a sieve — smaller particles go through, larger stay back (flour from bran).</li>
<li><strong>Handpicking:</strong> Removing impurities manually (stones from dal).</li>
<li><strong>Sedimentation:</strong> Heavier particles settle at the bottom when left undisturbed.</li>
<li><strong>Decantation:</strong> Gently pouring off the liquid after sedimentation.</li>
<li><strong>Filtration:</strong> Passing mixture through filter paper — insoluble solid stays, liquid passes through.</li>
<li><strong>Evaporation:</strong> Heating solution until water evaporates, leaving dissolved solid behind (salt from sea water).</li>
</ul>
<div class="example-box"><strong>Example:</strong> To separate salt from water: evaporation. To separate sand from water: filtration.</div>`,
            qa: [
              { q: 'How is common salt obtained from sea water?', a: 'Sea water is collected in large shallow pans. Sun evaporates the water, leaving salt crystals behind. This is called evaporation.' },
              { q: 'What is the difference between sedimentation and filtration?', a: 'Sedimentation: heavier particles settle by gravity, then liquid is decanted. Filtration: mixture is passed through filter paper — solids are trapped, liquid passes through. Both separate insoluble solids from liquids.' },
              { q: 'Why is winnowing not possible in the absence of wind?', a: 'Winnowing uses wind (or blowing) to separate lighter husk from heavier grain. Without wind, both particles fall at the same rate and separation does not occur.' },
              { q: 'Can we separate sugar from water by filtration? Why or why not?', a: 'No. Sugar dissolves in water (forms a true solution). Filtration only separates insoluble particles. To separate sugar, we need evaporation.' },
            ]
          },
          {
            id: 'getting-to-know-plants',
            title: 'Getting to Know Plants',
            subtopics: 'Herbs, Shrubs, Trees, Root types, Stem, Leaf parts, Flower, Transpiration',
            definition: 'Plants are classified based on their structure into herbs, shrubs, and trees. Each part of a plant — root, stem, leaf, flower, fruit, seed — has a specific function essential for the plant\'s survival.',
            content: `<p>Plants are the foundation of all life on Earth. They produce oxygen, food, and shelter. Understanding their structure helps us appreciate how each part contributes to the whole plant's survival.</p>
<h4>Types of Plants</h4>
<ul>
<li><strong>Herbs:</strong> Short, soft, green stems. E.g., Grass, Wheat, Tulsi</li>
<li><strong>Shrubs:</strong> Medium height, woody but thin stems. E.g., Rose, Lemon, Cotton</li>
<li><strong>Trees:</strong> Tall, thick woody trunk. E.g., Mango, Banyan, Neem</li>
<li><strong>Climbers:</strong> Need support to grow. E.g., Money plant, Pea</li>
<li><strong>Creepers:</strong> Grow along the ground. E.g., Pumpkin, Watermelon</li>
</ul>
<h4>Root Functions</h4>
<p>Taproot (one main root with smaller branches — dicots): mustard, carrot. Fibrous roots (many roots from base — monocots): grass, onion. Functions: anchor the plant, absorb water and minerals.</p>
<h4>Leaf Functions</h4>
<p>Leaves perform photosynthesis. Parts: lamina (blade), petiole (stalk), midrib, veins. Stomata on leaf surface allow gas exchange and water vapour release (transpiration).</p>`,
            qa: [
              { q: 'What is the difference between a taproot and fibrous root system?', a: 'Taproot: one main root growing downward with smaller lateral roots (carrot, mustard). Fibrous: many thin roots of equal size spreading from base (grass, wheat). Taproot is in dicots; fibrous in monocots.' },
              { q: 'What is transpiration? Why is it important?', a: 'Transpiration is the evaporation of water from leaves through stomata. It helps in the upward movement of water (creates suction), cools the plant, and contributes to the water cycle.' },
              { q: 'Name the part of the leaf where photosynthesis mainly occurs.', a: 'The lamina (flat green blade) of the leaf. It contains chloroplasts with chlorophyll that absorb sunlight for photosynthesis.' },
              { q: 'What is the function of veins in a leaf?', a: 'Veins transport water and minerals to the leaf (through xylem) and carry food made in the leaf to other parts (through phloem). They also provide mechanical support to the leaf.' },
            ]
          },
          {
            id: 'body-movements',
            title: 'Body Movements',
            subtopics: 'Joints, Bones, Cartilage, Movement in animals',
            definition: 'Movement in the human body is made possible by the skeletal system (bones) and muscular system working together. Joints are the points where two bones meet and allow different types of movements.',
            content: `<p>Your body can do incredible things — dance, swim, throw a ball. All of this is possible because of an amazing mechanical system of bones, joints, and muscles working together.</p>
<h4>Types of Joints</h4>
<ul>
<li><strong>Ball and socket joint:</strong> Full rotation in all directions. Shoulder, hip. E.g., rotating your arm in circles.</li>
<li><strong>Hinge joint:</strong> Movement in one plane only (like a door hinge). Knee, elbow.</li>
<li><strong>Pivot joint:</strong> Rotation around one axis. Neck (turning head left/right).</li>
<li><strong>Gliding joint:</strong> Bones slide over each other. Wrist, ankle.</li>
<li><strong>Fixed joint:</strong> No movement. Skull bones.</li>
</ul>
<h4>Cartilage</h4>
<p>Cartilage is softer than bone — it cushions joints and gives shape to nose and ear. It reduces friction at joints.</p>
<h4>Movement in Animals</h4>
<p>Earthworm: contracts and expands muscles, no bones. Fish: flexible backbone, fins. Birds: hollow, lightweight bones for flight. Snail: uses muscular foot.</p>`,
            qa: [
              { q: 'Why are birds\' bones hollow?', a: 'Birds\' bones are hollow and lightweight to reduce body weight, making it easier to fly. Despite being light, they are strong enough to support the body and withstand the stresses of flight.' },
              { q: 'What type of joint is found in the elbow? What movement does it allow?', a: 'The elbow has a hinge joint. It allows movement in one direction only — bending and straightening (like opening and closing a door).' },
              { q: 'Why can we not bend our knee backwards?', a: 'The knee is a hinge joint that allows movement in only one plane (forward bending). The shape of the bones and the arrangement of ligaments prevent backward bending.' },
              { q: 'How does an earthworm move without legs?', a: 'Earthworms move by alternately contracting and relaxing their muscles. They have tiny bristles (setae) that grip the soil. The body extends forward and then contracts, pulling the hind part forward.' },
            ]
          },
          {
            id: 'motion-measurement',
            title: 'Motion and Measurement of Distances',
            subtopics: 'Standard units, SI system, Measuring length, Types of motion',
            definition: 'Measurement is the process of comparing an unknown quantity with a known standard. The International System of Units (SI) provides universal standard units for all physical quantities.',
            content: `<p>Without standard units, communication and science would be impossible. "A stone\'s throw away" means different things to different people. Standard units solve this problem.</p>
<h4>SI Units — Base Units</h4>
<ul>
<li>Length: metre (m)</li>
<li>Mass: kilogram (kg)</li>
<li>Time: second (s)</li>
<li>Temperature: kelvin (K)</li>
<li>Electric current: ampere (A)</li>
</ul>
<h4>Measuring Length</h4>
<p>Ruler for straight lengths. Measuring tape for curved surfaces (tailor's tape). Odometer measures distance travelled by vehicles. 1 km = 1000 m = 100000 cm.</p>
<h4>Types of Motion</h4>
<ul>
<li><strong>Rectilinear:</strong> Along a straight line (falling stone, car on highway)</li>
<li><strong>Circular:</strong> Along a circle (hands of clock, fan blades)</li>
<li><strong>Periodic:</strong> Repeats after equal intervals (pendulum, heartbeat)</li>
<li><strong>Oscillatory:</strong> Back and forth (swing, string of guitar)</li>
</ul>`,
            qa: [
              { q: 'Why do we need standard units of measurement?', a: 'Standard units ensure everyone measures the same thing the same way. Without them, measurements would vary by person or place, making scientific communication and trade impossible.' },
              { q: 'What is the SI unit of length and what are its smaller units?', a: 'The SI unit of length is the metre (m). Smaller units: 1 m = 100 cm = 1000 mm. Larger: 1 km = 1000 m.' },
              { q: 'Give an example each of circular and periodic motion.', a: 'Circular motion: blades of a ceiling fan, hands of a clock. Periodic motion: the pendulum of a clock (completes one full swing in the same time every time).' },
              { q: 'How would you measure the length of a curved line?', a: 'Place a thread along the curved line exactly, then straighten the thread and measure its length with a ruler.' },
            ]
          },
          {
            id: 'light-shadows-reflection',
            title: 'Light, Shadows and Reflections',
            subtopics: 'Sources of light, Transparent/opaque, Shadow formation, Pinhole camera, Reflection',
            definition: 'Light is a form of energy that makes objects visible. It travels in straight lines. When light is blocked by an opaque object, a shadow is formed. When light bounces off a smooth surface, it is reflected.',
            content: `<p>Light is one of the most fundamental aspects of our universe. Without it, there would be no vision, no photosynthesis, and no life as we know it.</p>
<h4>Sources of Light</h4>
<p><strong>Luminous objects</strong> emit their own light: Sun, stars, fire, electric bulb, firefly. <strong>Non-luminous objects</strong> reflect light from other sources: Moon, planets, book, chair.</p>
<h4>Light Travels in Straight Lines</h4>
<p>Evidence: shadow formation, we cannot see around corners, a pinhole camera forms an inverted image.</p>
<h4>Shadow Formation</h4>
<p>Conditions: source of light, opaque object, screen. Size of shadow depends on distance of object from light source (closer → larger shadow).</p>
<h4>Pinhole Camera</h4>
<p>A pinhole camera works because light travels in straight lines. Rays from the top of an object travel through the pinhole downward, and rays from the bottom travel upward — forming an inverted image.</p>
<h4>Reflection</h4>
<p>Light bouncing off a surface. Smooth, shiny surfaces (mirrors, still water) form clear reflections. Rough surfaces scatter light in all directions.</p>`,
            qa: [
              { q: 'Why does a shadow form on the opposite side of the light source?', a: 'Light travels in straight lines and cannot bend around opaque objects. The region on the far side of an opaque object that receives no light forms the shadow.' },
              { q: 'Is the Moon a luminous object? Explain.', a: 'No, the Moon is not luminous. It does not produce its own light. It reflects sunlight, which is why we can see it. It is a non-luminous object.' },
              { q: 'How does a pinhole camera work?', a: 'Light from the top of an object enters through the small hole and hits the bottom of the screen. Light from the bottom hits the top. This creates an inverted image because light travels in straight lines.' },
              { q: 'What happens to the size of a shadow when the object is moved closer to the light source?', a: 'The shadow becomes larger when the object moves closer to the light source, and smaller when the object moves away from the source.' },
            ]
          },
          {
            id: 'electricity-circuits',
            title: 'Electricity and Circuits',
            subtopics: 'Electric cell, Bulb, Switch, Circuit diagram, Conductors, Insulators',
            definition: 'An electric circuit is a closed path along which electric current flows. It consists of a source (like a battery), connecting wires, and components like bulbs and switches.',
            content: `<p>Electricity powers our modern world. Understanding how simple circuits work is the first step toward understanding all electrical devices from a torch to a computer.</p>
<h4>Components of a Circuit</h4>
<ul>
<li><strong>Electric cell (battery):</strong> Source of electrical energy. Has positive (+) and negative (−) terminals.</li>
<li><strong>Bulb:</strong> Converts electrical energy to light energy. Has a thin filament that glows when current passes.</li>
<li><strong>Switch:</strong> Opens or closes the circuit. Open switch → no current flows (bulb off). Closed switch → current flows (bulb on).</li>
<li><strong>Connecting wires:</strong> Usually copper — good conductor.</li>
</ul>
<h4>Conductors and Insulators</h4>
<p><strong>Conductors</strong> allow current to flow: metals (copper, aluminium, iron). <strong>Insulators</strong> do not allow current to flow: rubber, wood, plastic, glass.</p>
<h4>Complete Circuit</h4>
<p>Current flows only in a complete, closed circuit. Any break stops the current. A switch creates a controlled break.</p>
<div class="example-box"><strong>Test:</strong> Connect the unknown material between two wires of a circuit with a bulb. If bulb glows → conductor. If not → insulator.</div>`,
            qa: [
              { q: 'Why does a bulb not light up if the circuit is not complete?', a: 'Electric current needs a complete closed path to flow. If the circuit has a break (open switch or disconnected wire), no current flows and the bulb does not light up.' },
              { q: 'What is the function of a switch in a circuit?', a: 'A switch opens or closes the circuit. When closed, it allows current to flow (appliance on). When open, it breaks the circuit and stops current flow (appliance off).' },
              { q: 'Why are electric wires coated with rubber or plastic?', a: 'Rubber and plastic are insulators — they do not conduct electricity. The coating prevents electric shock when we touch the wire and prevents short circuits when two wires touch.' },
              { q: 'Can a lemon work as a cell? Explain.', a: 'Yes! A lemon contains acidic juice that acts as an electrolyte. When copper and zinc electrodes are inserted into a lemon, a small voltage is produced (electro-chemical reaction). This can light an LED.' },
            ]
          },
          {
            id: 'fun-with-magnets',
            title: 'Fun with Magnets',
            subtopics: 'Magnetic materials, Poles, Attraction/Repulsion, Earth\'s magnetism, Uses',
            definition: 'A magnet is an object that attracts materials like iron, nickel, and cobalt. Every magnet has two poles — North and South. Like poles repel; unlike poles attract.',
            content: `<p>Magnets fascinated ancient civilisations and continue to power modern technology — from MRI machines to computer hard drives and electric motors.</p>
<h4>Magnetic and Non-magnetic Materials</h4>
<p><strong>Magnetic:</strong> Attracted to magnets — iron, nickel, cobalt. <strong>Non-magnetic:</strong> Not attracted — wood, glass, rubber, plastic, aluminium.</p>
<h4>Properties of Magnets</h4>
<ul>
<li>Every magnet has two poles: North-seeking (N) and South-seeking (S)</li>
<li>Like poles repel (N-N or S-S)</li>
<li>Unlike poles attract (N-S)</li>
<li>The magnetic force is strongest at the poles</li>
<li>A freely suspended magnet always points North-South</li>
</ul>
<h4>Earth as a Magnet</h4>
<p>Earth behaves like a giant magnet with a magnetic south pole near geographic North Pole. This is why the N-pole of a compass needle points North (attracted to Earth's magnetic south).</p>
<h4>Uses of Magnets</h4>
<p>Compass (navigation), electric motors, speakers, hard disks, MRI machines, magnetic locks, cranes to lift scrap iron.</p>`,
            qa: [
              { q: 'Why does a freely suspended magnet always point in the North-South direction?', a: 'Earth itself is a huge magnet. The North pole of the suspended magnet is attracted to Earth\'s geographic South (magnetic North), making it always align in the N-S direction.' },
              { q: 'What happens when two South poles of magnets are brought near each other?', a: 'Like poles repel each other. Two South poles will push each other away (repulsion).' },
              { q: 'Will a magnet attract a copper coin? Why?', a: 'No. Copper is a non-magnetic material. Magnets only attract iron, nickel, and cobalt.' },
              { q: 'What happens to a magnet if you cut it in half?', a: 'Each half becomes a complete magnet with its own North and South pole. You cannot isolate a single pole — magnets always have both poles.' },
            ]
          },
          {
            id: 'air-around-us',
            title: 'Air Around Us',
            subtopics: 'Composition of air, Oxygen, Nitrogen, CO2, Water vapour, Uses of air',
            definition: 'Air is a mixture of gases that surrounds the Earth. It is essential for all life — providing oxygen for breathing, nitrogen for plants, and CO₂ for photosynthesis.',
            content: `<p>Air is invisible yet essential. Every breath you take delivers oxygen to your blood and removes carbon dioxide. Without air, life would be impossible within minutes.</p>
<h4>Composition of Air</h4>
<ul>
<li>Nitrogen (N₂): ~78% — most abundant</li>
<li>Oxygen (O₂): ~21% — essential for breathing</li>
<li>Carbon dioxide (CO₂): 0.04%</li>
<li>Other gases (Argon, Helium, etc.): ~1%</li>
<li>Water vapour: variable (causes weather)</li>
</ul>
<h4>Role of Each Component</h4>
<p><strong>Oxygen:</strong> Needed for respiration (all animals) and combustion (burning). <strong>Nitrogen:</strong> Dilutes oxygen (pure oxygen is harmful), helps fix nutrients in soil. <strong>CO₂:</strong> Used in photosynthesis by plants; greenhouse gas. <strong>Water vapour:</strong> Forms clouds, rain, and regulates climate.</p>
<h4>Wind</h4>
<p>Moving air is called wind. Wind is caused by unequal heating of air in different places. Hot air is lighter and rises; cool air rushes in to fill the gap.</p>`,
            qa: [
              { q: 'What percentage of air is oxygen?', a: 'Approximately 21% of air is oxygen. Nitrogen makes up about 78%, and the remaining 1% includes CO₂, argon, and other gases.' },
              { q: 'Why is nitrogen important even though we don\'t breathe it in?', a: 'Nitrogen dilutes oxygen — pure oxygen would cause fires to burn violently and damage lung tissue. Nitrogen also gets fixed in soil by bacteria, providing nitrates essential for plant growth (proteins).' },
              { q: 'Show by an experiment that air is present in soil.', a: 'Take a lump of dry soil and drop it in water. Bubbles come out — these are air bubbles from the spaces in soil. This proves air is present in soil.' },
              { q: 'How is wind formed?', a: 'When air in one area is heated (by the sun), it expands, becomes lighter and rises. Cooler, denser air from nearby areas rushes in to fill the space. This movement of air is wind.' },
            ]
          },
        ]
      },
      english: {
        id: 'english', topics: [
          {
            id: 'grammar-parts-of-speech',
            title: 'Parts of Speech',
            subtopics: 'Nouns, Pronouns, Verbs, Adjectives, Adverbs, Prepositions',
            definition: 'Parts of speech are the categories into which words are classified based on their grammatical function in a sentence. There are 8 main parts of speech in English.',
            content: `<p>Every word in the English language belongs to a category called a "part of speech." Understanding these categories helps us form correct and meaningful sentences.</p>
<h4>The 8 Parts of Speech</h4>
<ul>
<li><strong>Noun:</strong> Name of a person, place, thing, or idea. (e.g., Sachin, Mumbai, book, courage)</li>
<li><strong>Pronoun:</strong> Replaces a noun. (e.g., he, she, it, they, we)</li>
<li><strong>Verb:</strong> Shows action or state of being. (e.g., run, is, think, seem)</li>
<li><strong>Adjective:</strong> Describes a noun. (e.g., tall, blue, three, happy)</li>
<li><strong>Adverb:</strong> Modifies a verb, adjective, or another adverb. (e.g., quickly, very, tomorrow)</li>
<li><strong>Preposition:</strong> Shows relationship between nouns. (e.g., in, on, under, between)</li>
<li><strong>Conjunction:</strong> Joins words or clauses. (e.g., and, but, because, although)</li>
<li><strong>Interjection:</strong> Expresses emotion. (e.g., Wow!, Oh!, Hurray!)</li>
</ul>
<div class="example-box"><strong>Example sentence analysis:</strong> "The <em>beautiful</em>(adj) <em>girl</em>(noun) <em>ran</em>(verb) <em>quickly</em>(adverb) <em>to</em>(preposition) <em>school</em>(noun)."</div>`,
            qa: [
              { q: 'Identify the noun and verb in: "Birds fly high."', a: 'Noun: Birds. Verb: fly. (High is an adverb modifying "fly").' },
              { q: 'What type of noun is "honesty"?', a: '"Honesty" is an abstract noun — it names a quality or concept that cannot be seen or touched.' },
              { q: 'Replace the noun with a pronoun: "Priya went to Priya\'s classroom."', a: '"Priya went to her classroom." (her = pronoun replacing Priya\'s)' },
              { q: 'What is the difference between an adjective and an adverb?', a: 'An adjective describes a noun (e.g., "fast car"). An adverb modifies a verb, adjective, or adverb (e.g., "runs fast," "very fast").' },
              { q: 'Identify the conjunction in: "I wanted to play, but it started raining."', a: '"but" is the conjunction connecting two contrasting clauses.' },
            ]
          },
          {
            id: 'tenses',
            title: 'Tenses',
            subtopics: 'Present, Past, Future tenses, Simple, Continuous, Perfect forms',
            definition: 'Tense shows the time of an action or state. English has three main tenses — Present, Past, and Future — each with Simple, Continuous, and Perfect forms.',
            content: `<p>Tense is how language captures time. Using the wrong tense confuses your reader about when things happened. Mastering tenses is essential for clear writing and speaking.</p>
<h4>Present Tense</h4>
<ul>
<li><strong>Simple Present:</strong> Habits, facts. "She reads every day." (V/V+s)</li>
<li><strong>Present Continuous:</strong> Happening now. "She is reading now." (is/am/are + V+ing)</li>
<li><strong>Present Perfect:</strong> Completed with present relevance. "She has read the book." (has/have + past participle)</li>
</ul>
<h4>Past Tense</h4>
<ul>
<li><strong>Simple Past:</strong> Completed action. "She read yesterday." (V+ed or irregular)</li>
<li><strong>Past Continuous:</strong> Was in progress. "She was reading when I called." (was/were + V+ing)</li>
<li><strong>Past Perfect:</strong> Completed before another past event. "She had read before dinner." (had + past participle)</li>
</ul>
<h4>Future Tense</h4>
<p>Simple Future: "She will read tomorrow." (will/shall + V)</p>`,
            qa: [
              { q: 'Fill in the blank: She _____ (go) to school every day.', a: '"goes" — Simple Present tense (habit). Third person singular uses V+s.' },
              { q: 'Convert to Past Perfect: "He finishes his work. Then he watches TV."', a: '"He had finished his work before he watched TV." Past perfect (had+V3) shows the action completed first.' },
              { q: 'What is the difference between Simple Past and Past Perfect?', a: 'Simple Past: one completed past action. Past Perfect: an action completed BEFORE another past action. "I ate dinner" (simple past). "I had eaten dinner before she arrived" (past perfect shows the earlier action).' },
              { q: 'Identify the tense: "The children are playing in the garden."', a: 'Present Continuous tense — the action is happening right now. Formula: is/am/are + verb+ing.' },
            ]
          },
          {
            id: 'active-passive-voice',
            title: 'Active and Passive Voice',
            subtopics: 'Active voice, Passive voice, Conversion rules, When to use passive',
            definition: 'In Active voice, the subject performs the action. In Passive voice, the subject receives the action. Passive voice is formed using the verb "to be" + past participle.',
            content: `<p>Choosing between active and passive voice changes who receives focus in a sentence. Scientists and news reporters often use passive voice; storytellers and everyday speech use active.</p>
<h4>Active Voice</h4>
<p>Subject → does → action → to object. Clear, direct, strong.</p>
<p>Example: <em>"The dog bit the boy."</em> (Dog = doer)</p>
<h4>Passive Voice</h4>
<p>Object of active becomes subject. Verb = to be + past participle. Doer (by + agent) may be omitted.</p>
<p>Example: <em>"The boy was bitten by the dog."</em></p>
<h4>Conversion Rules by Tense</h4>
<ul>
<li>Simple Present: is/am/are + V3</li>
<li>Simple Past: was/were + V3</li>
<li>Present Continuous: is/am/are + being + V3</li>
<li>Future: will be + V3</li>
</ul>
<div class="example-box"><strong>Active:</strong> "Ram writes a letter." → <strong>Passive:</strong> "A letter is written by Ram."</div>`,
            qa: [
              { q: 'Change to passive: "The teacher corrects the notebooks."', a: '"The notebooks are corrected by the teacher." (Simple Present Passive: am/is/are + V3)' },
              { q: 'Change to active: "The match was won by India."', a: '"India won the match."' },
              { q: 'Change to passive: "She was writing a poem."', a: '"A poem was being written by her." (Past Continuous Passive: was/were + being + V3)' },
              { q: 'When is passive voice preferred?', a: 'Passive is preferred when: (1) the doer is unknown ("The window was broken"), (2) the doer is unimportant ("The law was passed"), (3) we want to emphasise the action or receiver rather than the doer.' },
            ]
          },
          {
            id: 'comprehension-writing',
            title: 'Reading Comprehension and Writing Skills',
            subtopics: 'Passage reading, Inference, Letter writing, Essay, Paragraph',
            definition: 'Reading comprehension is the ability to read a text, process it, and understand its meaning. Writing skills involve organising and expressing ideas clearly in different formats.',
            content: `<p>Reading and writing are the two most important academic skills. Strong comprehension helps in all subjects; good writing skills communicate your ideas effectively to any audience.</p>
<h4>Reading Comprehension — Strategy</h4>
<ol>
<li>Read the passage fully without stopping.</li>
<li>Read questions before re-reading the passage.</li>
<li>Find keywords from the question in the passage.</li>
<li>Answer in your own words — do not copy entire sentences.</li>
<li>Inference questions: find clues in the text, do not guess.</li>
</ol>
<h4>Letter Writing</h4>
<p><strong>Formal letter:</strong> To school, government, newspaper. Has: Sender's address, Date, Receiver's address, Subject, Salutation, Body (3 paragraphs), Closing, Signature.</p>
<p><strong>Informal letter:</strong> To friends, family. Casual tone, shorter format.</p>
<h4>Paragraph Writing</h4>
<p>A good paragraph has: Topic sentence (main idea), Supporting sentences (details), Concluding sentence. All sentences must relate to the topic.</p>`,
            qa: [
              { q: 'What is an inference in a comprehension passage?', a: 'An inference is a conclusion drawn from clues in the text rather than directly stated information. Example: "She wore a raincoat" — we infer it was raining, even if not stated.' },
              { q: 'What are the essential parts of a formal letter?', a: 'Sender\'s address, Date, Receiver\'s address, Subject line, Salutation (Dear Sir/Madam), Body (3 paragraphs: introduction, main content, conclusion), Yours faithfully/sincerely, Signature and name.' },
              { q: 'What makes a good topic sentence for a paragraph?', a: 'A good topic sentence introduces the main idea of the paragraph clearly and specifically. All other sentences must support or explain this main idea. It should neither be too broad nor too narrow.' },
              { q: 'What is the difference between "Yours faithfully" and "Yours sincerely"?', a: '"Yours faithfully" is used when the salutation is "Dear Sir/Madam" (recipient unknown). "Yours sincerely" is used when the recipient\'s name is used in salutation (Dear Mr. Sharma).' },
            ]
          },
        ]
      },
      social: {
        id: 'social', topics: [
          {
            id: 'what-is-history',
            title: 'What is History?',
            subtopics: 'Meaning of history, Sources, Timeline, BCE and CE',
            definition: 'History is the study of the past — events, people, societies, and civilisations — using written records, artifacts, and other sources to understand how the world has changed over time.',
            content: `<p>Have you ever wondered how people lived thousands of years ago? How great empires were built and fell? History is the subject that answers these questions. It tells us the story of humanity.</p>
<h4>Why Study History?</h4>
<p>History helps us understand the present by learning from the past. It teaches us about great leaders, scientific discoveries, wars, and cultural achievements. It also helps prevent repeating past mistakes.</p>
<h4>Sources of History</h4>
<ul>
<li><strong>Archaeological sources:</strong> Ruins, tools, pottery, coins, jewelry found through excavation.</li>
<li><strong>Literary sources:</strong> Books, manuscripts, inscriptions written by people of that era.</li>
<li><strong>Oral traditions:</strong> Songs, stories, and folk tales passed down orally.</li>
</ul>
<h4>Timeline and Dating</h4>
<p><strong>BCE</strong> (Before Common Era) = before year 1. <strong>CE</strong> (Common Era) = after year 1. Dates in BCE count backwards — 500 BCE is older than 200 BCE. The Indus Valley Civilisation existed around 2500 BCE.</p>`,
            qa: [
              { q: 'What are the two main types of historical sources?', a: 'Archaeological sources (coins, pottery, ruins) and Literary sources (manuscripts, inscriptions, books).' },
              { q: 'Which is older: 500 BCE or 200 BCE?', a: '500 BCE is older. BCE dates count backwards from year 1, so larger numbers are older.' },
              { q: 'What is the significance of the Rosetta Stone?', a: 'The Rosetta Stone (found in Egypt) had the same text in three scripts. It helped historians decode Egyptian hieroglyphics.' },
              { q: 'Who are historians?', a: 'Historians are scholars who study and interpret the past using primary and secondary sources.' },
            ]
          },
          {
            id: 'hunting-gathering-to-farming',
            title: 'From Hunting-Gathering to Growing Food',
            subtopics: 'Palaeolithic Age, Neolithic Revolution, Agriculture, Domestication, Settlements',
            definition: 'For most of human history, people survived by hunting animals and gathering fruits. Around 10,000 years ago, humans began growing food — the Neolithic Revolution — which led to settled life and civilisation.',
            content: `<p>The shift from nomadic hunter-gatherers to settled farmers is the most important change in human history. It gave rise to villages, then towns, then civilisations.</p>
<h4>Hunter-Gatherers (Palaeolithic Age)</h4>
<p>Earliest humans moved in small bands following animals and seasonal plants. They used stone tools. Sites found across India: Bhimbetka (Madhya Pradesh) has cave paintings showing this life.</p>
<h4>The Neolithic Revolution</h4>
<p>Around 10,000 BCE, people began: planting seeds, domesticating animals (cattle, sheep, dogs), building permanent settlements, making pottery to store food.</p>
<h4>Why Settle Near Rivers?</h4>
<p>Rivers provided: water for crops, fish for food, fertile soil from floods, and routes for trade. Early settlements like Burzahom (Kashmir) were near rivers and lakes.</p>
<h4>Impact of Agriculture</h4>
<p>Food surplus → population growth → specialisation of jobs → trade → writing → civilisation.</p>`,
            qa: [
              { q: 'Why did early humans move from place to place?', a: 'Hunter-gatherers moved to follow animal herds (for hunting) and seasonal availability of fruits, roots, and nuts. They had no permanent food supply, so movement was necessary for survival.' },
              { q: 'What was the Neolithic Revolution?', a: 'The Neolithic Revolution (around 10,000 BCE) was the shift from hunting-gathering to farming. Humans began to grow crops and domesticate animals. This led to permanent settlements and eventually to civilisation.' },
              { q: 'Name two early settlements in India and their locations.', a: 'Burzahom (Kashmir) — near lakes; Mehrgarh (Baluchistan) — one of the earliest farming settlements; Chirand (Bihar) — tool-making site.' },
              { q: 'How did agriculture change human society?', a: 'Agriculture created food surpluses → people could stay in one place → villages formed → some people could specialise in crafts, trade, and governance → complex societies and civilisations developed.' },
            ]
          },
          {
            id: 'earliest-cities',
            title: 'In the Earliest Cities',
            subtopics: 'Harappan Civilisation, Town planning, Trade, Script, Decline',
            definition: 'The Harappan (Indus Valley) Civilisation (2600–1900 BCE) was one of the world\'s earliest urban civilisations, known for its sophisticated town planning, drainage systems, and standardised weights.',
            content: `<p>While Egypt had its pyramids and Mesopotamia its ziggurats, the Indus Valley had something equally remarkable — the world's first planned cities with brick streets and underground drainage.</p>
<h4>Town Planning Features</h4>
<ul>
<li>Cities divided into Citadel (upper, ruling class) and Lower Town (residential)</li>
<li>Streets laid in a grid pattern (east-west and north-south)</li>
<li>Covered drainage system — world's first!</li>
<li>Standardised baked bricks of same ratio</li>
<li>Great Bath at Mohenjo-daro (ritual bathing)</li>
<li>Granaries for storing grain</li>
</ul>
<h4>Key Sites</h4>
<p>Mohenjo-daro and Harappa (Pakistan), Lothal (Gujarat — dock for ships), Kalibangan (Rajasthan), Dholavira (Gujarat — unique water system).</p>
<h4>Trade and Script</h4>
<p>Traded with Mesopotamia. Had a script with 400+ signs — not yet deciphered. Used standardised weights (binary system).</p>
<h4>Decline</h4>
<p>Around 1900 BCE — possible causes: climate change, river drying up, floods, or invasion (debated).</p>`,
            qa: [
              { q: 'What makes the Harappan Civilisation unique in terms of urban planning?', a: 'The Harappan cities had grid-pattern streets, covered underground drainage (world\'s first), standardised bricks, separate citadel and lower town areas, and public facilities like the Great Bath — remarkable for 4500 years ago.' },
              { q: 'What was the significance of the Great Bath at Mohenjo-daro?', a: 'The Great Bath was a large, waterproof swimming pool-like structure. It was likely used for ritual bathing and purification ceremonies, suggesting a well-organised religious or civic life.' },
              { q: 'Has the Harappan script been deciphered?', a: 'No. The Harappan script (with about 400 signs) has not been deciphered yet, which means we cannot read their writings. This is why we know little about their language, religion, and rulers.' },
              { q: 'What does Lothal tell us about Harappan trade?', a: 'Lothal (Gujarat) had a dockyard — evidence of sea trade. Harappans traded cotton, beads, ivory, and gold with Mesopotamia (modern Iraq), showing long-distance maritime trade.' },
            ]
          },
          {
            id: 'kingdoms-kings-early-republic',
            title: 'Kingdoms, Kings and an Early Republic',
            subtopics: 'Mahajanapadas, Magadha, Republics (Ganas), Buddha, Mahavira, Taxation',
            definition: 'Around 600 BCE, large kingdoms called Mahajanapadas emerged in northern India. This period also saw the rise of Buddhism and Jainism, and the growth of the Magadha Empire.',
            content: `<p>The 6th century BCE was a remarkable time — kingdoms were forming, philosophers were questioning old beliefs, and two of the world's great religions were born.</p>
<h4>Mahajanapadas (600 BCE)</h4>
<p>16 large kingdoms emerged. Important ones: Magadha, Kosala, Vatsa, Avanti. Had capitals, armies, regular taxes, and codified laws.</p>
<h4>Rise of Magadha</h4>
<p>Magadha (in modern Bihar) became the most powerful due to: rich iron deposits (better weapons), fertile Gangetic plains, control of river routes for trade. King Bimbisara expanded it significantly.</p>
<h4>Republics (Ganas/Sanghas)</h4>
<p>Some regions were governed as republics — no single king. Assemblies of warriors (Kshatriyas) made decisions. The Vajjis (capital: Vaishali) and the Shakyas (Siddhartha Gautama's clan) were famous republics.</p>
<h4>Buddhism and Jainism</h4>
<p>Both Gautama Buddha and Mahavira questioned the Vedic rituals and caste system. They emphasised personal conduct, non-violence (ahimsa), and spiritual liberation through one's own efforts.</p>`,
            qa: [
              { q: 'What were Mahajanapadas?', a: 'Mahajanapadas were 16 large kingdoms that emerged around 600 BCE in north India. They had fixed territories, capitals, standing armies, and collected regular taxes from farmers. Examples: Magadha, Kosala, Vajji.' },
              { q: 'Why did Magadha become the most powerful Mahajanapada?', a: 'Magadha had rich iron ore deposits (for superior weapons and tools), fertile Gangetic plains (good agriculture and tax revenue), and rivers for trade and defence. Good rulers like Bimbisara also helped its growth.' },
              { q: 'What is a republic? Give an early Indian example.', a: 'A republic is a state governed by elected or chosen representatives rather than a single king. The Vajji confederation (capital: Vaishali) was an early Indian republic governed by an assembly of clan leaders.' },
              { q: 'What did Buddhism and Jainism have in common?', a: 'Both rejected the authority of the Vedas and complex rituals. Both emphasised ahimsa (non-violence), ethical conduct, and that spiritual liberation can be achieved through personal effort — not birth or caste.' },
            ]
          },
          {
            id: 'earth-solar-system',
            title: 'The Earth in the Solar System',
            subtopics: 'Solar system, Planets, Stars, Satellites, Asteroids, Constellations',
            definition: 'The Solar System consists of the Sun and all objects that orbit it — 8 planets, their moons, asteroids, comets, and dwarf planets. Earth is the third planet from the Sun and the only known planet with life.',
            content: `<p>Our solar system is a tiny part of the Milky Way galaxy, which is one of hundreds of billions of galaxies in the universe. Yet even within this vastness, our Earth is uniquely suited for life.</p>
<h4>The Solar System</h4>
<p>8 planets in order from Sun: Mercury, Venus, Earth, Mars (inner/rocky planets), Jupiter, Saturn, Uranus, Neptune (outer/gas giants).</p>
<p>Mnemonic: <strong>My Very Energetic Mother Just Served Us Noodles</strong></p>
<h4>The Sun</h4>
<p>A star — a huge ball of hot gases (hydrogen and helium) undergoing nuclear fusion. Nearest star to Earth. Light takes 8 minutes to reach Earth.</p>
<h4>Moon — Earth's Natural Satellite</h4>
<p>A natural satellite orbiting Earth. Takes ~27 days to orbit Earth. Has no atmosphere, extreme temperatures. Reflects sunlight.</p>
<h4>Stars and Constellations</h4>
<p>Stars are luminous — they produce their own light. Constellations are groups of stars forming imaginary patterns: Ursa Major (Saptarishi/Great Bear), Orion (the hunter).</p>
<h4>Asteroids and Comets</h4>
<p>Asteroids: rocky debris mostly between Mars and Jupiter. Comets: ice and rock, form a bright tail when near Sun.</p>`,
            qa: [
              { q: 'What is the difference between a planet and a star?', a: 'Stars produce their own light through nuclear fusion (e.g., Sun). Planets are large objects orbiting stars that reflect light from the star — they do not produce their own light.' },
              { q: 'Name the planets of the Solar System in order from the Sun.', a: 'Mercury, Venus, Earth, Mars, Jupiter, Saturn, Uranus, Neptune. (Mnemonic: My Very Energetic Mother Just Served Us Noodles)' },
              { q: 'Why does the Moon appear to change its shape?', a: 'The Moon does not change shape — it always reflects sunlight. We see different portions of its lit side as it orbits Earth. This gives the appearance of phases (new moon, crescent, half, full moon).' },
              { q: 'What is a constellation? Name one visible from India.', a: 'A constellation is a group of stars that form an imaginary pattern in the sky. Ursa Major (Saptarishi — 7 stars in a bear shape) is clearly visible from India.' },
            ]
          },
          {
            id: 'globe-latitudes-longitudes',
            title: 'Globe: Latitudes and Longitudes',
            subtopics: 'Globe, Equator, Latitudes, Tropics, Longitudes, Prime Meridian, Grid system',
            definition: 'A globe is a spherical model of Earth. Latitudes are imaginary horizontal lines and longitudes are imaginary vertical lines that form a grid to locate any point on Earth.',
            content: `<p>Finding a location on Earth requires a coordinate system. Latitudes and longitudes are the X and Y axes of this global grid, allowing us to pinpoint any location precisely.</p>
<h4>Latitudes (Parallels)</h4>
<ul>
<li>Imaginary horizontal circles parallel to the Equator</li>
<li>Range: 0° (Equator) to 90°N (North Pole) and 90°S (South Pole)</li>
<li>Important parallels: Tropic of Cancer (23½°N), Tropic of Capricorn (23½°S), Arctic Circle (66½°N), Antarctic Circle (66½°S)</li>
<li>All latitudes are equal in size (but circles get smaller toward poles)</li>
</ul>
<h4>Longitudes (Meridians)</h4>
<ul>
<li>Imaginary vertical lines from pole to pole</li>
<li>Range: 0° (Prime Meridian through Greenwich) to 180°</li>
<li>180° meridian = International Date Line</li>
<li>All longitudes are equal in length</li>
</ul>
<h4>Finding Locations</h4>
<p>Coordinates: latitude first, then longitude. Delhi: approximately 28°N, 77°E.</p>`,
            qa: [
              { q: 'What is the Equator and what is its latitude?', a: 'The Equator is an imaginary line that divides Earth into Northern and Southern Hemispheres. Its latitude is 0°. It is the longest latitude circle.' },
              { q: 'What is the significance of the Prime Meridian?', a: 'The Prime Meridian (0° longitude) passes through Greenwich, England. It divides Earth into Eastern and Western Hemispheres and is the reference point for measuring longitudes and for setting time zones (Greenwich Mean Time).' },
              { q: 'What are the Tropics of Cancer and Capricorn?', a: 'Tropic of Cancer (23½°N): the northernmost latitude where the Sun appears directly overhead (at noon on June 21). Tropic of Capricorn (23½°S): southernmost such latitude (December 21). India lies mostly between Equator and Tropic of Cancer.' },
              { q: 'How do latitudes and longitudes help in locating places?', a: 'They form a grid on Earth\'s surface. Any location can be precisely identified using its latitude (N or S of Equator) and longitude (E or W of Prime Meridian). Like row and column numbers in a table.' },
            ]
          },
          {
            id: 'motions-of-earth',
            title: 'Motions of the Earth',
            subtopics: 'Rotation, Revolution, Day and Night, Seasons, Leap Year',
            definition: 'Earth has two main motions — Rotation (spinning on its axis, causing day and night) and Revolution (orbiting the Sun, causing seasons and the year).',
            content: `<p>Earth is never still — it spins continuously while also orbiting the Sun. These two movements, combined with Earth's tilted axis, create our days, nights, seasons, and years.</p>
<h4>Rotation</h4>
<p>Earth spins on its own axis (an imaginary line from North to South Pole) from West to East. One rotation = 24 hours (one day). Causes day and night — the side facing Sun has day, opposite side has night.</p>
<h4>Revolution</h4>
<p>Earth orbits the Sun in an elliptical path. One revolution = 365¼ days (one year). The axis is tilted at 23½°.</p>
<h4>Seasons</h4>
<p>Earth's tilted axis means different parts receive sunlight at different angles during the year:</p>
<ul>
<li>June 21: Northern Hemisphere tilted toward Sun → Summer (longest day — Summer Solstice)</li>
<li>December 21: Northern Hemisphere tilted away → Winter (shortest day — Winter Solstice)</li>
<li>March 21 and September 23: Equal day and night everywhere — Equinoxes</li>
</ul>
<h4>Leap Year</h4>
<p>Revolution takes 365¼ days. The extra ¼ day accumulates — every 4 years we add a day (Feb 29). A year with 366 days is a leap year.</p>`,
            qa: [
              { q: 'What causes day and night?', a: 'Earth rotates on its axis from West to East. The side facing the Sun receives sunlight (day); the opposite side is in shadow (night). As Earth rotates, every place has day and then night.' },
              { q: 'Why do we have seasons?', a: 'Earth\'s axis is tilted at 23½°. As Earth orbits the Sun, different hemispheres tilt toward the Sun at different times. When a hemisphere tilts toward the Sun, it gets more direct sunlight → summer. When tilted away → winter.' },
              { q: 'What is a leap year and why do we have it?', a: 'A leap year has 366 days (February has 29 days). Earth takes 365 and ¼ days to orbit the Sun. The extra ¼ day accumulates. Every 4 years, we add one day to keep the calendar aligned with Earth\'s orbit.' },
              { q: 'What is the Summer Solstice?', a: 'June 21 is the Summer Solstice in the Northern Hemisphere. On this day, the North Pole is tilted most toward the Sun. The Northern Hemisphere has the longest day and shortest night of the year.' },
            ]
          },
          {
            id: 'understanding-diversity',
            title: 'Understanding Diversity',
            subtopics: 'Diversity in India, Unity in diversity, Inequality, Prejudice, Constitution',
            definition: 'Diversity means differences in language, religion, culture, food, and traditions. India is one of the most diverse countries in the world, and this diversity is celebrated as a strength, not a division.',
            content: `<p>India is home to hundreds of languages, dozens of religions, and thousands of communities — yet it functions as one democratic nation. Understanding how diversity can be a strength while addressing its challenges is vital citizenship education.</p>
<h4>Diversity in India</h4>
<p>India has 22 official languages (hundreds of dialects), major religions (Hinduism, Islam, Christianity, Sikhism, Buddhism, Jainism), varied food, clothing, festivals, and customs across different states.</p>
<h4>Unity in Diversity</h4>
<p>Despite diversity, Indians share: national festivals (Republic Day, Independence Day), sports unity (cheering for Team India), a Constitution, and common history of freedom struggle.</p>
<h4>Prejudice and Discrimination</h4>
<p>Prejudice = judging someone based on their group (caste, religion, gender) rather than their individual qualities. Discrimination = treating someone unequally based on prejudice. Both are harmful and often illegal in India.</p>
<h4>The Constitution's Role</h4>
<p>India's Constitution guarantees equality to all citizens regardless of religion, caste, gender, or place of birth. It ensures diverse groups can all participate in Indian democracy.</p>`,
            qa: [
              { q: 'What does "Unity in Diversity" mean in the Indian context?', a: 'India has enormous diversity — languages, religions, cultures, foods. Yet Indians share a national identity, common constitutional values, history, and spirit. This ability to remain united despite diversity is "unity in diversity."' },
              { q: 'What is the difference between prejudice and discrimination?', a: 'Prejudice is a negative pre-judgment about a group without evidence. Discrimination is the unfair action taken based on that prejudice. For example, believing a group is inferior (prejudice) and refusing to hire them (discrimination).' },
              { q: 'Name any three ways in which Indians across states are similar despite their diversity.', a: 'All Indians: (1) follow the same Constitution, (2) celebrate national festivals like Independence Day, (3) participate in the same democratic elections, (4) cheer for the same national sports teams.' },
              { q: 'Why is diversity considered an asset for India?', a: 'Diversity brings: varied skills, knowledge traditions, cultural richness, and different perspectives that help solve problems creatively. It also makes India uniquely vibrant and helps in fields like art, cuisine, languages, and innovation.' },
            ]
          },
          {
            id: 'what-is-government',
            title: 'What is Government?',
            subtopics: 'Levels of government, Democratic vs non-democratic, Elections, Representative democracy, Responsibilities of government',
            definition: 'Government is the group of people who have the authority to make and enforce laws for a country or region. A democratic government derives its power from the consent of the people through elections.',
            content: `<p>Government affects every part of our daily life — the roads we use, the schools we attend, the hospitals that treat us. Understanding how government works is the foundation of active citizenship.</p>
<h4>What Does Government Do?</h4>
<ul>
<li>Makes laws that everyone must follow</li>
<li>Maintains peace and order (police, courts)</li>
<li>Provides public services (schools, hospitals, roads)</li>
<li>Collects taxes and manages public money</li>
<li>Represents the country internationally</li>
</ul>
<h4>Levels of Government in India</h4>
<p><strong>Central (Union):</strong> Parliament — makes national laws. <strong>State:</strong> Legislative Assembly — makes state laws. <strong>Local:</strong> Panchayat (rural) or Municipality (urban) — manages local needs.</p>
<h4>Types of Government</h4>
<p><strong>Democratic:</strong> People elect their representatives. All citizens have equal vote. Government accountable to people. Examples: India, USA.</p>
<p><strong>Non-democratic:</strong> One person or group rules without elections. E.g., monarchy, military dictatorship.</p>`,
            qa: [
              { q: 'Why do we need a government?', a: 'Without government, there would be no laws, so anyone could harm others without punishment. Government provides order (police, courts), essential services (schools, hospitals, roads), protects rights, manages resources, and represents citizens in dealing with other countries.' },
              { q: 'What makes a government democratic?', a: 'A democratic government: (1) is elected by all adult citizens through free and fair elections, (2) represents people\'s interests, (3) is accountable to citizens, (4) respects fundamental rights, (5) has rule of law — same laws apply to everyone including rulers.' },
              { q: 'Name the three levels of government in India. What does each handle?', a: 'Central Government: national issues — defence, foreign affairs, currency, railways. State Government: state issues — police, health, education, agriculture. Local Government (Panchayat/Municipality): local issues — local roads, water supply, sanitation, local schools.' },
            ]
          },
          {
            id: 'panchayati-raj',
            title: 'Panchayati Raj and Rural Governance',
            subtopics: 'Gram Panchayat, Gram Sabha, Panchayat Samiti, Zila Parishad, Elections, Functions',
            definition: 'Panchayati Raj is the system of local self-government in rural India. It allows villages to govern themselves through elected representatives — bringing democracy to the grassroots level.',
            content: `<p>India has over 600,000 villages. Managing them from Delhi or a state capital is impossible. Panchayati Raj devolves power to village level — empowering local communities to solve local problems.</p>
<h4>Three Tiers of Panchayati Raj</h4>
<ul>
<li><strong>Gram Panchayat:</strong> Village level. Elected members (Panch) and elected head (Sarpanch/Gram Pradhan). Manages village roads, water, sanitation, schools.</li>
<li><strong>Panchayat Samiti (Block level):</strong> Group of villages. Coordinates activities of Gram Panchayats.</li>
<li><strong>Zila Parishad (District level):</strong> Entire district. Supervises all panchayats in a district.</li>
</ul>
<h4>Gram Sabha</h4>
<p>All adult voters in a village form the Gram Sabha — the base of Panchayati Raj. Meets at least twice a year to review Panchayat work, approve plans, discuss local issues. Every voice matters.</p>
<h4>73rd Constitutional Amendment (1992)</h4>
<p>Made Panchayati Raj constitutional. Mandated elections every 5 years, reserved seats for women (1/3), SC, and ST communities.</p>`,
            qa: [
              { q: 'What is the Gram Sabha and why is it important?', a: 'The Gram Sabha consists of all registered voters in a village. It is the foundation of democracy at village level — it can question the Panchayat, approve budgets, identify beneficiaries for schemes, and hold elected members accountable. True democracy means all villagers have a voice, not just elected members.' },
              { q: 'Why are seats reserved for women in Panchayati Raj?', a: 'Historically, women were excluded from public decision-making. Reserving at least 1/3 of seats ensures women\'s voices are included in local governance. This has led to decisions that better reflect women\'s needs — water points closer to homes, better sanitation, more girls\' toilets in schools.' },
              { q: 'What are the main functions of a Gram Panchayat?', a: 'Gram Panchayat: maintains village roads and public buildings, manages water supply, oversees sanitation and cleanliness, runs local schools and primary health centres, implements government welfare schemes (ration cards, MGNREGA), settles local disputes, and collects local taxes.' },
            ]
          },
        ]
      },
    }
  },

  // ── CLASS 7 ──────────────────────────────────────────────────
  'class-7': {
    id: 'class-7', label: 'Class 7', shortLabel: '7th',
    board: 'CBSE', emoji: '7️⃣',
    description: 'Integers, Chemical reactions, Medieval history & Sentence skills',
    subjects: {
      mathematics: {
        id: 'mathematics', topics: [
          {
            id: 'integers',
            title: 'Integers',
            subtopics: 'Positive & negative numbers, Number line, Operations, Properties',
            definition: 'Integers are the set of all whole numbers including negative numbers, zero, and positive numbers. They extend the number line in both directions: ... −3, −2, −1, 0, 1, 2, 3 ...',
            content: `<p>We encounter negative numbers in everyday life: temperatures below zero, bank overdrafts, levels below sea level. Integers help us handle both directions on the number line.</p>
<h4>Number Line</h4>
<p>On a number line, positive integers are to the right of zero and negative integers to the left. Moving right means adding, moving left means subtracting.</p>
<h4>Operations with Integers</h4>
<ul>
<li><strong>Adding a negative:</strong> Same as subtracting. 5 + (−3) = 5 − 3 = 2</li>
<li><strong>Subtracting a negative:</strong> Same as adding. 5 − (−3) = 5 + 3 = 8</li>
<li><strong>Multiplication rules:</strong> (+)(+) = +, (−)(−) = +, (+)(−) = −, (−)(+) = −</li>
<li><strong>Division rules:</strong> Same sign → positive result. Different signs → negative result.</li>
</ul>
<h4>Properties</h4>
<p>Integers follow commutative, associative, and distributive properties for addition. For subtraction, these don't hold.</p>
<div class="formula">(−8) × (−7) = +56 | (+8) × (−7) = −56</div>`,
            qa: [
              { q: 'What is the sum of −15 and +8?', a: '−15 + 8 = −7 (since 15 > 8, result has the sign of −15)' },
              { q: 'Find the product: (−6) × (−9)', a: '(−6) × (−9) = +54 (negative × negative = positive)' },
              { q: 'Arrange in ascending order: −5, 3, −12, 0, 7', a: '−12, −5, 0, 3, 7 (ascending = smallest to largest)' },
              { q: 'What is (−48) ÷ 8?', a: '−48 ÷ 8 = −6 (positive divides negative → negative result)' },
              { q: 'The temperature in Shimla is −5°C and in Chennai it is 32°C. What is the difference?', a: 'Difference = 32 − (−5) = 32 + 5 = 37°C' },
            ]
          },
          {
            id: 'simple-equations',
            title: 'Simple Equations',
            subtopics: 'Setting up equations, Solving, Transposition, Word problems',
            definition: 'A simple equation is a mathematical statement with one variable where both sides are equal. Solving means finding the value of the unknown variable that satisfies the equation.',
            content: `<p>An equation is like a balanced weighing scale — whatever you do to one side, you must do to the other to keep it balanced. This principle is the foundation of all equation solving.</p>
<h4>The Golden Rule</h4>
<p>Whatever operation you perform on one side of an equation, perform the same operation on the other side. This keeps the equation balanced.</p>
<h4>Methods of Solving</h4>
<p><strong>1. By transposition:</strong> Move terms from one side to the other, changing their sign. If + moves, it becomes −; if × moves, it becomes ÷.</p>
<div class="formula">3x − 7 = 14 → 3x = 14 + 7 = 21 → x = 21/3 = 7</div>
<h4>Setting Up Equations from Word Problems</h4>
<ol>
<li>Identify the unknown → assign a variable.</li>
<li>Translate conditions into mathematical expressions.</li>
<li>Form the equation and solve.</li>
</ol>
<div class="example-box"><strong>Example:</strong> Five times a number plus 3 equals 28. Find the number.<br/>Let number = x. Equation: 5x + 3 = 28 → 5x = 25 → x = 5.</div>`,
            qa: [
              { q: 'Solve: 4y − 5 = 11', a: '4y = 11 + 5 = 16 → y = 16/4 = 4' },
              { q: 'Solve: 2(x + 3) = 14', a: '2x + 6 = 14 → 2x = 8 → x = 4' },
              { q: 'The perimeter of a rectangle is 48 cm. If length is 14 cm, find width.', a: 'P = 2(l + w) → 48 = 2(14 + w) → 24 = 14 + w → w = 10 cm' },
              { q: 'Solve: x/5 + 4 = 7', a: 'x/5 = 3 → x = 15' },
              { q: 'Solve: 3m + 11 = 2m + 28', a: '3m − 2m = 28 − 11 → m = 17' },
            ]
          },
          {
            id: 'lines-and-angles',
            title: 'Lines and Angles',
            subtopics: 'Pairs of angles, Parallel lines, Transversal, Triangle properties',
            definition: 'Lines and angles form the building blocks of all geometry. When lines intersect or are cut by a transversal, they create special pairs of angles with predictable relationships.',
            content: `<p>Angles are everywhere — the corner of your room, the hands of a clock, the slope of a road. Understanding their properties lets us predict measurements without actually measuring.</p>
<h4>Pairs of Angles</h4>
<ul>
<li><strong>Complementary angles:</strong> Sum = 90°</li>
<li><strong>Supplementary angles:</strong> Sum = 180°</li>
<li><strong>Vertically opposite angles:</strong> Always equal when two lines cross.</li>
<li><strong>Linear pair:</strong> Adjacent angles on a straight line, sum = 180°.</li>
</ul>
<h4>Parallel Lines Cut by a Transversal</h4>
<p>When a transversal crosses parallel lines:</p>
<ul>
<li>Corresponding angles are equal</li>
<li>Alternate interior angles are equal</li>
<li>Co-interior (same-side) angles are supplementary (sum = 180°)</li>
</ul>
<h4>Angle Sum in a Triangle</h4>
<p>The sum of all three angles in any triangle = 180°. This is always true!</p>`,
            qa: [
              { q: 'If one angle of a linear pair is 75°, what is the other?', a: '180° − 75° = 105°' },
              { q: 'Two parallel lines are cut by a transversal. One alternate interior angle is 65°. Find the other.', a: 'Alternate interior angles are equal. So the other angle is also 65°.' },
              { q: 'Two angles of a triangle are 55° and 72°. Find the third.', a: 'Third angle = 180° − 55° − 72° = 53°' },
              { q: 'What are vertically opposite angles?', a: 'When two lines intersect, the angles formed opposite to each other at the intersection point are equal — these are called vertically opposite angles.' },
              { q: 'If co-interior angles are (3x + 10)° and (2x + 30)°, find x.', a: 'Co-interior angles sum = 180°. 3x + 10 + 2x + 30 = 180 → 5x + 40 = 180 → 5x = 140 → x = 28.' },
            ]
          },
          {
            id: 'fractions-decimals',
            title: 'Fractions and Decimals',
            subtopics: 'Multiplication of fractions, Division of fractions, Decimal operations',
            definition: 'Fractions represent parts of a whole. Decimals are another way to express fractions with denominators that are powers of 10. Class 7 extends operations to include multiplication and division.',
            content: `<p>Fractions and decimals appear in everyday situations — sharing pizza, calculating discounts, measuring ingredients. Mastering their operations is essential for all higher mathematics.</p>
<h4>Multiplication of Fractions</h4>
<div class="formula">a/b × c/d = (a×c)/(b×d)</div>
<p>Multiply numerators together and denominators together. Simplify before or after multiplying.</p>
<p>Mixed number: convert to improper fraction first. 2½ × 3 = 5/2 × 3 = 15/2 = 7½</p>
<h4>Division of Fractions</h4>
<div class="formula">a/b ÷ c/d = a/b × d/c (multiply by reciprocal)</div>
<h4>Decimal Operations</h4>
<p>Multiplication: multiply normally, count total decimal places in both numbers, place decimal in product.</p>
<p>Division: multiply both numbers by power of 10 to make divisor a whole number.</p>`,
            qa: [
              { q: 'Find: 3/4 × 2/5', a: '(3×2)/(4×5) = 6/20 = 3/10' },
              { q: 'Divide: 7/8 ÷ 14/16', a: '7/8 × 16/14 = 112/112 = 1' },
              { q: 'Multiply: 1.25 × 0.4', a: '125 × 4 = 500. Total decimal places = 2+1 = 3. Answer: 0.500 = 0.5' },
              { q: 'A recipe needs 3/4 cup of flour per batch. How much for 6 batches?', a: '3/4 × 6 = 18/4 = 4½ cups' },
            ]
          },
          {
            id: 'rational-numbers',
            title: 'Rational Numbers',
            subtopics: 'Definition, Representation on number line, Operations, Comparison',
            definition: 'A rational number is any number that can be expressed as p/q where p and q are integers and q ≠ 0. They include all fractions, integers, terminating and repeating decimals.',
            content: `<p>Rational numbers fill in the "gaps" between integers on the number line. They are incredibly important because most measurements we make are rational.</p>
<h4>Representing Rational Numbers</h4>
<p>Every integer is rational (e.g., 5 = 5/1). Between any two rational numbers, there are infinitely many more rational numbers.</p>
<h4>Equivalent Rational Numbers</h4>
<p>Multiply or divide both numerator and denominator by the same non-zero number: 3/5 = 6/10 = 9/15 etc.</p>
<h4>Comparison</h4>
<p>To compare, convert to same denominator. Or convert to decimals. Positive rational > negative rational.</p>
<h4>Operations</h4>
<div class="formula">a/b + c/d = (ad + bc)/bd | a/b − c/d = (ad − bc)/bd</div>`,
            qa: [
              { q: 'Is -3/5 a rational number?', a: 'Yes. -3/5 = p/q where p = -3, q = 5, both integers and q ≠ 0. So -3/5 is rational.' },
              { q: 'Find: -3/7 + 2/7', a: '(-3 + 2)/7 = -1/7' },
              { q: 'Arrange in ascending order: -1/2, 3/4, -2/3', a: 'Convert: -1/2=-6/12, 3/4=9/12, -2/3=-8/12. Ascending: -2/3, -1/2, 3/4' },
              { q: 'Find 5 rational numbers between 1/3 and 1/2.', a: 'Convert to 12ths: 4/12 to 6/12. Rational numbers: 4/12, 5/12, 6/12 and others. Using 30ths: 10/30 to 15/30 gives 11/30, 12/30, 13/30, 14/30, etc.' },
            ]
          },
          {
            id: 'comparing-quantities',
            title: 'Comparing Quantities',
            subtopics: 'Ratio, Percentage, Profit and Loss, Simple Interest',
            definition: 'Comparing quantities involves expressing one quantity relative to another as a ratio, fraction, or percentage. These concepts are fundamental to finance, commerce, and everyday calculations.',
            content: `<p>When you see "50% off" or "GST 18%," you're using comparing quantities. These concepts directly apply to shopping, banking, and business decisions.</p>
<h4>Percentage</h4>
<div class="formula">Percentage = (Part/Whole) × 100</div>
<p>Convert fraction to %: multiply by 100. Convert % to fraction: divide by 100.</p>
<h4>Profit and Loss</h4>
<div class="formula">Profit = SP - CP | Loss = CP - SP</div>
<div class="formula">Profit% = (Profit/CP) × 100 | Loss% = (Loss/CP) × 100</div>
<h4>Simple Interest</h4>
<div class="formula">SI = (P × R × T) / 100</div>
<p>P = Principal, R = Rate per year, T = Time in years. Amount = P + SI.</p>`,
            qa: [
              { q: 'A shirt costs ₹800 but sells for ₹1000. Find profit percentage.', a: 'Profit = 1000-800 = ₹200. Profit% = (200/800) × 100 = 25%' },
              { q: 'Find Simple Interest on ₹5000 at 8% per year for 3 years.', a: 'SI = (5000 × 8 × 3)/100 = ₹1200. Amount = 5000 + 1200 = ₹6200' },
              { q: 'If 30% of students in a class of 40 wear glasses, how many do not?', a: '30% of 40 = 12 wear glasses. 40 - 12 = 28 do not wear glasses.' },
              { q: 'A shopkeeper marks goods at ₹1200 and gives a 15% discount. Find SP.', a: 'Discount = 15% of 1200 = ₹180. SP = 1200 - 180 = ₹1020' },
            ]
          },
          {
            id: 'perimeter-area',
            title: 'Perimeter and Area',
            subtopics: 'Rectangles, Triangles, Parallelograms, Circles, Area of compound figures',
            definition: 'Perimeter is the total length around a 2D shape. Area is the amount of surface enclosed within the boundary of a shape. Both are measured in standard units.',
            content: `<p>Perimeter and area have direct real-world applications — fencing a garden, carpeting a room, painting a wall, and designing buildings all require these calculations.</p>
<h4>Key Formulas</h4>
<div class="formula">Rectangle: P = 2(l+b), A = l×b</div>
<div class="formula">Square: P = 4a, A = a²</div>
<div class="formula">Triangle: A = ½ × base × height</div>
<div class="formula">Parallelogram: A = base × height</div>
<div class="formula">Circle: C = 2πr, A = πr² (π ≈ 22/7 or 3.14)</div>
<h4>Compound Figures</h4>
<p>Break the compound figure into simpler shapes. Find area of each part. Add them together.</p>`,
            qa: [
              { q: 'Find area of a triangle with base 12 cm and height 9 cm.', a: 'A = ½ × 12 × 9 = 54 cm²' },
              { q: 'Find circumference and area of circle with radius 7 cm.', a: 'C = 2 × 22/7 × 7 = 44 cm. A = 22/7 × 7² = 154 cm²' },
              { q: 'A rectangular room 8m × 6m is to be tiled with 0.5m × 0.5m tiles. How many tiles?', a: 'Room area = 48 m². Tile area = 0.25 m². Number = 48/0.25 = 192 tiles.' },
              { q: 'Find the area of a parallelogram with base 9 cm and height 6 cm.', a: 'A = base × height = 9 × 6 = 54 cm²' },
            ]
          },
          {
            id: 'algebraic-expressions',
            title: 'Algebraic Expressions and Identities',
            subtopics: 'Terms, Like/unlike terms, Addition, Subtraction, Multiplication of expressions',
            definition: 'An algebraic expression is a combination of constants, variables, and operations. Algebraic identities are equations true for all values of variables — they are tools for quick calculation.',
            content: `<p>Algebraic expressions are the language of mathematics. Every formula in science and engineering is an algebraic expression. Identities save enormous calculation time.</p>
<h4>Terms and Factors</h4>
<p>In 3x² - 5xy + 7: terms are 3x², -5xy, 7. Coefficient of x² is 3. Like terms have the same variable with same power — can be added/subtracted.</p>
<h4>Operations</h4>
<p>Add/subtract like terms only. Multiply: use distributive law.</p>
<h4>Standard Identities</h4>
<div class="formula">(a+b)² = a² + 2ab + b²</div>
<div class="formula">(a-b)² = a² - 2ab + b²</div>
<div class="formula">(a+b)(a-b) = a² - b²</div>`,
            qa: [
              { q: 'Add: 5x² - 3x + 2 and -2x² + 4x - 7', a: '(5-2)x² + (-3+4)x + (2-7) = 3x² + x - 5' },
              { q: 'Find (2x+3)² using identity', a: '(2x)² + 2(2x)(3) + 3² = 4x² + 12x + 9' },
              { q: 'Evaluate 105² using identity', a: '(100+5)² = 100² + 2×100×5 + 5² = 10000 + 1000 + 25 = 11025' },
              { q: 'Multiply: (x+4)(x-4)', a: '(x)² - (4)² = x² - 16 (using a²-b² identity)' },
            ]
          },
          {
            id: 'exponents-powers',
            title: 'Exponents and Powers',
            subtopics: 'Laws of exponents, Negative exponents, Scientific notation',
            definition: 'Exponents represent repeated multiplication. The laws of exponents provide shortcuts for calculating with powers. Scientific notation uses powers of 10 to express very large or small numbers.',
            content: `<p>From the distance between galaxies (10²⁶ m) to the size of a proton (10⁻¹⁵ m), exponents allow us to write and work with numbers of extreme size.</p>
<h4>Laws of Exponents</h4>
<div class="formula">aᵐ × aⁿ = aᵐ⁺ⁿ</div>
<div class="formula">aᵐ ÷ aⁿ = aᵐ⁻ⁿ</div>
<div class="formula">(aᵐ)ⁿ = aᵐⁿ</div>
<div class="formula">a⁰ = 1 (any non-zero base)</div>
<div class="formula">a⁻ⁿ = 1/aⁿ</div>
<h4>Scientific Notation</h4>
<p>Express as: a × 10ⁿ, where 1 ≤ a < 10. Speed of light: 3 × 10⁸ m/s. Mass of electron: 9.1 × 10⁻³¹ kg.</p>`,
            qa: [
              { q: 'Simplify: 2⁵ × 2³ ÷ 2⁶', a: '2⁵⁺³⁻⁶ = 2² = 4' },
              { q: 'Find the value of (3⁻²)', a: '3⁻² = 1/3² = 1/9' },
              { q: 'Express 0.000056 in scientific notation', a: '5.6 × 10⁻⁵' },
              { q: 'Simplify: (5²)³', a: '5⁶ = 15625' },
            ]
          },
          {
            id: 'visualising-solid-shapes',
            title: 'Visualising Solid Shapes',
            subtopics: 'Faces, Edges, Vertices, Euler\'s formula, Nets, 3D views',
            definition: 'Solid shapes are 3-dimensional figures with length, width, and height. Understanding their faces, edges, and vertices helps us calculate surface areas and volumes.',
            content: `<p>From dice to buildings, solid shapes are everywhere. Architects, engineers, and designers use 3D thinking constantly. Euler's formula reveals a beautiful relationship hidden in all 3D shapes.</p>
<h4>Faces, Edges, Vertices</h4>
<p>A <strong>face</strong> is a flat surface. An <strong>edge</strong> is where two faces meet. A <strong>vertex</strong> (corner) is where three or more edges meet.</p>
<h4>Euler's Formula</h4>
<div class="formula">F + V - E = 2 (for any convex polyhedron)</div>
<p>Cube: F=6, V=8, E=12. Check: 6+8-12 = 2 ✓</p>
<h4>Common Solid Shapes</h4>
<ul>
<li>Cube: 6 square faces, 12 edges, 8 vertices</li>
<li>Cuboid: 6 rectangular faces, 12 edges, 8 vertices</li>
<li>Cylinder: 2 circular faces, 1 curved surface, 2 edges, 0 vertices</li>
<li>Cone: 1 circular base, 1 curved surface, 1 apex</li>
<li>Sphere: 1 curved surface, no edges, no vertices</li>
</ul>`,
            qa: [
              { q: 'Verify Euler\'s formula for a triangular prism.', a: 'Triangular prism: F=5 (2 triangles + 3 rectangles), E=9, V=6. F+V-E = 5+6-9 = 2 ✓' },
              { q: 'A polyhedron has 8 faces and 6 vertices. How many edges?', a: 'F+V-E=2. 8+6-E=2 → E=12 edges.' },
              { q: 'What is a net of a solid?', a: 'A net is a 2D pattern that can be folded to form a 3D solid. The net of a cube has 6 squares arranged so that when folded, each pair of opposite squares becomes opposite faces.' },
              { q: 'How many faces does a square pyramid have?', a: 'A square pyramid has 5 faces: 1 square base + 4 triangular faces.' },
            ]
          },
        ]
      },
      science: {
        id: 'science', topics: [
          {
            id: 'nutrition-in-plants',
            title: 'Nutrition in Plants',
            subtopics: 'Photosynthesis, Autotrophs, Heterotrophs, Modes of nutrition',
            definition: 'Nutrition is the process by which organisms obtain and use food for energy, growth, and repair. Plants are autotrophs — they make their own food using sunlight, water, and carbon dioxide through photosynthesis.',
            content: `<p>Unlike animals that must find and eat food, plants have a remarkable ability to manufacture their own food from simple raw materials. This process, photosynthesis, is the foundation of almost all life on Earth.</p>
<h4>Photosynthesis</h4>
<p>Photosynthesis takes place in the chloroplasts of plant cells, which contain the green pigment chlorophyll.</p>
<div class="formula">6CO₂ + 6H₂O + Sunlight → C₆H₁₂O₆ + 6O₂</div>
<p>(Carbon dioxide + Water + Light → Glucose + Oxygen)</p>
<h4>Raw Materials Needed</h4>
<ul>
<li><strong>Water:</strong> Absorbed from soil through roots.</li>
<li><strong>Carbon dioxide:</strong> Absorbed from air through stomata.</li>
<li><strong>Sunlight:</strong> Provides energy for the reaction.</li>
<li><strong>Chlorophyll:</strong> Green pigment that captures light energy.</li>
</ul>
<h4>Other Modes of Nutrition</h4>
<ul>
<li><strong>Parasitic:</strong> Cuscuta (Amarbel) grows on host plants and takes nutrients from them.</li>
<li><strong>Insectivorous:</strong> Pitcher plant, Venus flytrap — trap and digest insects for nutrients.</li>
<li><strong>Symbiotic:</strong> Lichens (algae + fungi living together, both benefit).</li>
</ul>`,
            qa: [
              { q: 'What is the role of chlorophyll in photosynthesis?', a: 'Chlorophyll is the green pigment in plants that absorbs sunlight and converts it into chemical energy used in photosynthesis.' },
              { q: 'Why do plants need nitrogen if they make food through photosynthesis?', a: 'Photosynthesis makes carbohydrates for energy. But plants also need proteins (for growth) which require nitrogen. They absorb nitrogen compounds from soil.' },
              { q: 'Name one parasitic plant and explain how it gets nutrition.', a: 'Cuscuta (Amarbel/dodder) is a parasitic plant. It has no chlorophyll, wraps around a host plant, and inserts haustoria (suckers) to absorb water and nutrients from the host.' },
              { q: 'What would happen to life on Earth if photosynthesis stopped?', a: 'If photosynthesis stopped, plants would die → all animals that depend on plants would die → oxygen levels would drop → almost all life on Earth would end.' },
              { q: 'Where does photosynthesis mainly occur in a plant?', a: 'Mainly in the leaves, specifically in the chloroplasts of leaf cells. Leaves are adapted with a large surface area for light absorption.' },
            ]
          },
          {
            id: 'nutrition-in-animals',
            title: 'Nutrition in Animals',
            subtopics: 'Modes of feeding, Human digestive system, Digestion in grass-eating animals',
            definition: 'Animals cannot make their own food, so they must consume other organisms. Nutrition in animals involves ingestion, digestion, absorption, assimilation, and egestion.',
            content: `<p>Your digestive system is a 9-metre long processing factory that breaks down everything you eat into molecules small enough to enter your blood and reach every cell in your body.</p>
<h4>Modes of Taking Food</h4>
<ul>
<li>Biting and chewing (humans, herbivores)</li>
<li>Sucking (mosquito, butterfly)</li>
<li>Filter feeding (whale)</li>
<li>Predation (eagle, snake)</li>
</ul>
<h4>Human Digestive System</h4>
<ol>
<li><strong>Mouth:</strong> Teeth chew food; saliva contains amylase → breaks down starch to sugar</li>
<li><strong>Oesophagus:</strong> Carries food to stomach (peristalsis)</li>
<li><strong>Stomach:</strong> HCl kills bacteria; pepsin begins protein digestion</li>
<li><strong>Small intestine:</strong> Main site of digestion and absorption. Bile (liver), pancreatic juice, intestinal juice complete digestion. Villi absorb nutrients into blood</li>
<li><strong>Large intestine:</strong> Absorbs water; forms faeces</li>
</ol>`,
            qa: [
              { q: 'What is the role of hydrochloric acid in the stomach?', a: 'HCl makes the stomach acidic (pH ~2), which kills harmful bacteria in food and activates the enzyme pepsin that digests proteins.' },
              { q: 'Why is the small intestine important for digestion?', a: 'The small intestine is the main site of both digestion and absorption. It receives bile (emulsifies fat), pancreatic enzymes (digest carbs, proteins, fats), and has villi that absorb nutrients into the bloodstream.' },
              { q: 'What is the function of bile?', a: 'Bile (produced in liver, stored in gall bladder) emulsifies fats — breaks large fat droplets into smaller ones, increasing surface area for digestive enzymes to act on.' },
              { q: 'Why do cows and other ruminants have four-chambered stomachs?', a: 'Cellulose (in grass) is hard to digest. Ruminants swallow grass quickly, store it in rumen, regurgitate (chew cud), and pass it through multiple chambers with special bacteria that break down cellulose.' },
            ]
          },
          {
            id: 'heat',
            title: 'Heat',
            subtopics: 'Temperature, Thermometer, Conduction, Convection, Radiation, Land and sea breeze',
            definition: 'Heat is a form of energy that flows from a hotter body to a cooler one. Temperature is a measure of how hot or cold an object is, measured using a thermometer.',
            content: `<p>Heat and temperature are different! A matchstick flame is hotter (higher temperature) than a bucket of warm water, but the bucket contains more heat energy. Understanding this distinction is key.</p>
<h4>Temperature vs Heat</h4>
<p>Temperature: measure of average kinetic energy of particles (°C, K). Heat: total thermal energy (Joules). A large body at low temperature can have more heat than a small body at high temperature.</p>
<h4>Transfer of Heat</h4>
<ul>
<li><strong>Conduction:</strong> Through solids by particle vibration. Good conductors: metals (copper, iron). Bad conductors (insulators): wood, rubber, air.</li>
<li><strong>Convection:</strong> Through fluids (liquids and gases). Hot fluid rises, cool fluid sinks — creates convection currents. Example: room heater heats air in room.</li>
<li><strong>Radiation:</strong> Transfer without any medium. Sun's heat reaches Earth through vacuum. Dark surfaces absorb and emit more radiation than light surfaces.</li>
</ul>
<h4>Land and Sea Breeze</h4>
<p>Day: land heats faster → hot air rises → sea breeze blows in. Night: land cools faster → sea warmer → land breeze blows out.</p>`,
            qa: [
              { q: 'Why does a metal spoon feel colder than a wooden spoon at the same room temperature?', a: 'Metal is a good conductor — it conducts heat away from your hand quickly, making it feel cold. Wood is a poor conductor — it does not conduct heat well, so it feels warmer at the same temperature.' },
              { q: 'Why are cooking vessels made of metal but their handles of wood or plastic?', a: 'Metals conduct heat well — good for cooking. Wood/plastic are poor conductors (insulators) — they don\'t conduct heat to the hand, so the handle stays cool and we can hold it safely.' },
              { q: 'Explain how convection causes a land breeze at night.', a: 'At night, land cools faster than the sea. Sea air is warmer and rises. Cooler air from land moves towards the sea to replace it — this is the land breeze (blows from land to sea at night).' },
              { q: 'Why do we wear white or light-coloured clothes in summer?', a: 'Light colours reflect heat radiation; dark colours absorb it. White clothes reflect sunlight, keeping us cooler in summer. Dark clothes absorb more radiation, making us feel hotter.' },
            ]
          },
          {
            id: 'acids-bases-salts-7',
            title: 'Acids, Bases and Salts',
            subtopics: 'Acidic/basic/neutral substances, Indicators, Neutralisation, pH concept',
            definition: 'Acids are substances that taste sour and turn blue litmus red. Bases taste bitter, feel soapy, and turn red litmus blue. When an acid and base react, they neutralise each other forming a salt and water.',
            content: `<p>Acid-base chemistry is everywhere — in your stomach (HCl digests food), in baking (baking soda neutralises excess acid), in soil management (adding lime to acidic soil), and in medicine (antacids).</p>
<h4>Natural Indicators</h4>
<ul>
<li><strong>Litmus:</strong> From lichen. Red litmus turns blue in base; blue litmus turns red in acid.</li>
<li><strong>Turmeric:</strong> Turns red/brown in base (stays yellow in acid).</li>
<li><strong>China rose:</strong> Turns dark pink in acid; green in base.</li>
</ul>
<h4>Common Acids and Bases</h4>
<p>Natural acids: citric (lemon), acetic (vinegar), lactic (curd), formic (ant sting). Natural bases: baking soda solution, soap, egg white.</p>
<h4>Neutralisation</h4>
<div class="formula">Acid + Base → Salt + Water (Neutralisation)</div>
<p>Example: HCl + NaOH → NaCl + H₂O</p>
<p>Application: Antacid tablets neutralise excess HCl in stomach (acidity relief). Adding lime (CaO) to acidic soil neutralises it.</p>`,
            qa: [
              { q: 'What happens when an acid and a base are mixed?', a: 'They undergo neutralisation — the acid and base react to form a salt and water. The solution becomes neutral (or close to it). Heat is released.' },
              { q: 'A wasp sting is alkaline. What home remedy would help?', a: 'Applying an acid (like vinegar or lemon juice) to the sting would neutralise the alkaline venom and reduce pain.' },
              { q: 'Why do farmers add lime (calcium hydroxide) to acidic soil?', a: 'Lime is a base. It neutralises the excess acid in soil. Most crops grow best in neutral or slightly basic soil. Neutralisation restores the soil\'s pH to a suitable level for plant growth.' },
              { q: 'Which colour does turmeric turn in a basic solution?', a: 'Turmeric turns red or brown in basic (alkaline) solutions. It stays yellow in neutral or acidic solutions. This makes it a natural indicator.' },
            ]
          },
          {
            id: 'physical-chemical-changes',
            title: 'Physical and Chemical Changes',
            subtopics: 'Physical change, Chemical change, Reversibility, Oxidation, Crystallisation',
            definition: 'A physical change alters the form or appearance of a substance without changing its chemical composition. A chemical change produces a new substance with different properties.',
            content: `<p>Understanding the difference between physical and chemical changes is fundamental to chemistry. It tells us whether a change can be reversed and whether new substances have been formed.</p>
<h4>Physical Changes</h4>
<p>No new substance formed. Usually reversible. Examples: melting ice, dissolving salt, cutting paper, boiling water, stretching rubber band.</p>
<h4>Chemical Changes</h4>
<p>New substance(s) formed with different properties. Usually irreversible. Signs: colour change, gas produced, heat/light released or absorbed, precipitate formed.</p>
<p>Examples: burning wood, rusting iron, cooking food, digestion, photosynthesis, curdling milk.</p>
<h4>Rusting</h4>
<div class="formula">Fe + H₂O + O₂ → Fe₂O₃.nH₂O (rust)</div>
<p>Prevention: painting, oiling, galvanising (coating with zinc), stainless steel.</p>
<h4>Crystallisation</h4>
<p>A physical process — dissolve substance in hot water, allow to cool slowly → pure crystals form (salt, copper sulphate crystals).</p>`,
            qa: [
              { q: 'Is dissolving sugar in water a physical or chemical change?', a: 'Physical change. The sugar molecules spread throughout the water (dissolve) but remain chemically unchanged. We can recover the sugar by evaporating the water — it is reversible.' },
              { q: 'Give three signs that a chemical change has occurred.', a: 'Signs of chemical change: change in colour (iron turns orange-red when rusted), gas evolved (bubbles when acid on marble), heat/light released (burning), precipitate forms (mixing two clear solutions gives a coloured solid).' },
              { q: 'Why is cooking an egg a chemical change?', a: 'Heat denatures (permanently changes) the proteins in the egg white — they coagulate irreversibly. You cannot "uncook" an egg. New substances are formed → chemical change.' },
              { q: 'How does galvanising prevent rusting of iron?', a: 'Galvanising coats iron with a layer of zinc. Zinc is more reactive than iron — it reacts with oxygen and water first, protecting the iron beneath. This is called sacrificial protection.' },
            ]
          },
          {
            id: 'motion-time',
            title: 'Motion and Time',
            subtopics: 'Speed, Uniform and non-uniform motion, Distance-time graph, Simple pendulum',
            definition: 'Speed is the distance covered per unit time. Motion can be uniform (constant speed) or non-uniform. Distance-time graphs allow visual analysis of motion without equations.',
            content: `<p>Speed cameras, GPS navigation, and athletic records all involve measuring motion over time. The distance-time graph is a powerful tool for analyzing motion visually.</p>
<h4>Speed</h4>
<div class="formula">Speed = Distance / Time (unit: m/s or km/h)</div>
<p>Average speed: total distance / total time (even if speed varies).</p>
<h4>Uniform vs Non-uniform Motion</h4>
<p><strong>Uniform:</strong> Equal distances in equal time intervals. Straight line on d-t graph. <strong>Non-uniform:</strong> Unequal distances in equal time intervals. Curved line on d-t graph.</p>
<h4>Distance-Time Graph</h4>
<p>Horizontal axis = time. Vertical axis = distance. Slope = speed. Steeper slope = faster. Horizontal line = object at rest.</p>
<h4>Pendulum</h4>
<p>Time period = time for one complete oscillation. Depends only on length of string (not mass or amplitude). Longer pendulum → longer period.</p>`,
            qa: [
              { q: 'A car travels 120 km in 2 hours. What is its average speed?', a: 'Speed = 120/2 = 60 km/h = 60000/3600 ≈ 16.67 m/s' },
              { q: 'What does a horizontal line on a distance-time graph represent?', a: 'A horizontal line means distance is not changing with time — the object is stationary (at rest).' },
              { q: 'How does the length of a pendulum affect its time period?', a: 'Longer pendulum → longer time period (swings more slowly). Shorter pendulum → shorter time period (swings faster). The mass of the bob does NOT affect the time period.' },
              { q: 'A body covers 20m in first 2s, 20m in next 2s, 20m in next 2s. What type of motion?', a: 'Equal distances (20m) in equal time intervals (2s) → Uniform motion at speed = 20/2 = 10 m/s.' },
            ]
          },
          {
            id: 'electric-current-effects',
            title: 'Electric Current and Its Effects',
            subtopics: 'Heating effect, Magnetic effect, Electromagnet, Electric bell, Circuit symbols',
            definition: 'When electric current flows, it produces three main effects: heating (used in heaters and bulbs), magnetic (used in motors and bells), and chemical (used in electroplating).',
            content: `<p>Every electrical device around you uses one or more effects of electric current. Understanding these effects unlocks how heaters, motors, bells, and electronics all work.</p>
<h4>Heating Effect</h4>
<p>Current produces heat in a conductor (Joule's law). Higher resistance → more heat. Used in: electric heaters, irons, toasters, electric bulbs (filament glows).</p>
<p>The filament in a bulb is made of tungsten — very high melting point, high resistance.</p>
<h4>Magnetic Effect</h4>
<p>A current-carrying wire behaves like a magnet. Discovered by Hans Christian Oersted (1820).</p>
<h4>Electromagnet</h4>
<p>A coil of wire wound around an iron core. When current flows → strong magnet. When current stops → magnetism lost. Applications: electric bell, electric crane, loudspeaker, MRI machine.</p>
<h4>Electric Bell</h4>
<p>When switch is pressed → current flows → electromagnet attracts iron strip → hammer strikes bell → circuit breaks → electromagnet off → strip springs back → circuit completes again. This repeats, producing ringing.</p>`,
            qa: [
              { q: 'Why is tungsten used for the filament of a light bulb?', a: 'Tungsten has a very high melting point (3422°C) and high resistance. When current flows, it heats up to ~2500°C and glows white-hot to produce light — without melting.' },
              { q: 'What is an electromagnet? How is it different from a permanent magnet?', a: 'An electromagnet is a temporary magnet created by passing electric current through a coil wound around a soft iron core. Unlike permanent magnets, its magnetism can be switched on/off by controlling the current.' },
              { q: 'Name three appliances that use the heating effect of current.', a: 'Electric iron, electric kettle/heater, toaster, geyser, electric oven, incandescent bulb filament.' },
              { q: 'What did Oersted discover?', a: 'In 1820, Hans Christian Oersted discovered that a current-carrying conductor deflects a magnetic compass needle — proving that electric current produces a magnetic field (magnetic effect of current).' },
            ]
          },
          {
            id: 'reproduction-in-plants',
            title: 'Reproduction in Plants',
            subtopics: 'Asexual reproduction, Vegetative propagation, Sexual reproduction, Pollination, Seed dispersal',
            definition: 'Plants reproduce to continue their species. They can reproduce asexually (from one parent, no seeds) or sexually (through flowers, pollen, seeds).',
            content: `<p>A single potato plant can produce dozens of new plants through vegetative propagation. A single oak tree can produce millions of acorns in its lifetime. Plants have evolved diverse reproductive strategies.</p>
<h4>Asexual Reproduction</h4>
<ul>
<li><strong>Vegetative propagation:</strong> New plants from stems (potato tuber, ginger rhizome), leaves (Bryophyllum), roots (sweet potato), or runners (strawberry).</li>
<li><strong>Budding:</strong> In yeast and Hydra — buds grow from parent.</li>
<li><strong>Fragmentation:</strong> In algae — body breaks and each piece grows.</li>
<li><strong>Spore formation:</strong> Ferns, mosses, fungi.</li>
</ul>
<h4>Sexual Reproduction in Flowering Plants</h4>
<p>Flower has: stamen (male — produces pollen) and pistil (female — has ovary with ovules).</p>
<h4>Pollination</h4>
<p>Transfer of pollen from anther to stigma. Self-pollination (same flower) or cross-pollination (agents: wind, insects, water, animals).</p>
<h4>Fertilisation and Seed Dispersal</h4>
<p>Pollen tube grows to ovule → fertilisation → seed. Dispersal by wind, water, animals, explosion.</p>`,
            qa: [
              { q: 'What is vegetative propagation? Give two examples.', a: 'Vegetative propagation is asexual reproduction in plants using vegetative parts (not seeds). Examples: potato (stem tuber), rose (cutting), Bryophyllum (leaf), ginger (rhizome).' },
              { q: 'What is the difference between self-pollination and cross-pollination?', a: 'Self-pollination: pollen from anther reaches the stigma of the same flower (or another flower of the same plant). Cross-pollination: pollen is transferred from one plant to a different plant of the same species, using agents like bees, wind, or water.' },
              { q: 'How does the coconut spread its seeds?', a: 'The coconut fruit is large, with a fibrous husk that traps air, making it buoyant. It floats in water (ocean currents) and can travel long distances to germinate on distant shores — water dispersal.' },
              { q: 'Why is cross-pollination considered better than self-pollination?', a: 'Cross-pollination introduces genetic variation — offspring get genes from two different parents. This increases adaptability, disease resistance, and may produce healthier offspring (hybrid vigour). Self-pollination reduces genetic diversity over generations.' },
            ]
          },
          {
            id: 'weather-climate-7',
            title: 'Weather, Climate and Adaptations',
            subtopics: 'Weather vs climate, Climate zones, Tropical rainforest, Polar regions, Animal adaptations',
            definition: 'Weather is the short-term state of the atmosphere (temperature, rainfall, wind) at a specific place and time. Climate is the average weather pattern over many years. Different climates create different habitats with organisms specially adapted to survive.',
            content: `<p>Climate determines which organisms can live where. Over millions of years, animals and plants have evolved remarkable adaptations to even the most extreme environments on Earth.</p>
<h4>Weather vs Climate</h4>
<p><strong>Weather:</strong> Day-to-day atmospheric condition — temperature, humidity, rainfall, wind. Can change rapidly. <strong>Climate:</strong> Average weather pattern of a region over 25-30 years. Stable and predictable.</p>
<h4>Tropical Rainforest</h4>
<p>Hot (25-35°C), high rainfall (>200cm/year), dense vegetation. Found: Amazon, Congo, Southeast Asia, Western Ghats. Very high biodiversity. Example adaptations: bright coloured birds (camouflage among flowers), long limbs for tree climbing (apes), waxy leaves to shed water.</p>
<h4>Polar Regions</h4>
<p>Extremely cold (-50°C to -30°C in winter), very little precipitation (desert of ice). Short summers with continuous daylight. Adaptations: polar bear (white fur for camouflage, thick fat for insulation, small ears to reduce heat loss), penguins (huddle for warmth, waterproof feathers).</p>`,
            qa: [
              { q: 'What is the difference between weather and climate?', a: 'Weather is the day-to-day condition of atmosphere (today\'s temperature, whether it rained). Climate is the average pattern of weather over 25-30 years for a region. We can\'t predict weather beyond a week reliably, but climate is stable: "India has a monsoon climate" is a climate statement; "It will rain today in Delhi" is a weather statement.' },
              { q: 'How are polar bears adapted to survive in the Arctic?', a: 'Polar bear adaptations: (1) White/yellowish fur provides camouflage against snow and ice; (2) Thick layer of fat (up to 11cm) insulates against extreme cold; (3) Small rounded ears reduce heat loss; (4) Fur-covered feet for traction on ice and insulation; (5) Good swimmers with paddle-like paws; (6) Can smell prey (seals) under ice from 1km.' },
              { q: 'Name any three features of the tropical rainforest that affect the animals living there.', a: '(1) Dense vegetation and tall trees: animals need to be good climbers (monkeys, sloths) or use canopy (toucans, parrots). (2) Constant warmth: cold-blooded animals like snakes and frogs can be active year-round. (3) High rainfall: fish and amphibians find abundant water bodies. (4) Abundant food: large herbivores (tapirs, elephants), large predators (jaguars, leopards) can be sustained.' },
              { q: 'What is the role of migratory birds in connecting different climate zones?', a: 'Migratory birds travel thousands of km between breeding and feeding grounds as seasons change. They connect ecosystems: Siberian cranes breed in Arctic but winter in India (Bharatpur). They spread seeds, parasites, and genetic material across regions. Climate change is disrupting migration patterns — birds arrive when food is no longer available at destinations.' },
            ]
          },
          {
            id: 'soil-7',
            title: 'Soil',
            subtopics: 'Soil formation, Types, Soil profile, Properties, Soil erosion, Conservation',
            definition: 'Soil is the uppermost layer of the Earth that supports plant life. It forms over thousands of years from weathered rock particles, humus (decomposed organic matter), water, and air. Different soil types have different properties.',
            content: `<p>Soil takes 1000 years to form 1cm of topsoil, yet we can lose it in seconds through erosion. Soil health determines food security — without healthy soil, there is no agriculture.</p>
<h4>Soil Formation</h4>
<p>Rocks are broken down (weathered) by water, wind, temperature changes, and biological action over thousands of years. Decomposed plant and animal matter (humus) mixes with rock particles to create soil.</p>
<h4>Soil Profile (Layers)</h4>
<ul>
<li><strong>Topsoil (A horizon):</strong> Dark, rich in humus and minerals. Where most plant roots grow. Most fertile.</li>
<li><strong>Subsoil (B horizon):</strong> Less humus, more minerals. Plant roots penetrate here for water.</li>
<li><strong>Parent rock (C horizon):</strong> Partially weathered rock.</li>
<li><strong>Bedrock (R horizon):</strong> Solid, unweathered rock.</li>
</ul>
<h4>Properties</h4>
<p>Texture (sand/silt/clay), moisture content, water absorption and permeability, pH.</p>
<h4>Soil Erosion</h4>
<p>Causes: deforestation, overgrazing, heavy rain. Prevention: afforestation, terracing, contour ploughing, bunding.</p>`,
            qa: [
              { q: 'Why is humus important for soil?', a: 'Humus (decomposed organic matter) makes soil: more fertile (releases nutrients as it decomposes), better structured (improves water retention and drainage), darker in colour (absorbs more heat), and less compact (allows roots to penetrate). Soil rich in humus is much more productive for farming.' },
              { q: 'What is soil erosion and what are its main causes?', a: 'Soil erosion is the removal of the topsoil layer by water, wind, or human activity. Main causes: (1) Deforestation — tree roots hold soil, removing trees leaves it exposed; (2) Overgrazing — animals eat ground cover, baring soil; (3) Heavy rainfall — raindrops dislodge soil particles; (4) Strong winds — blow away dry topsoil (dust storms). Effects: loss of fertile land, silting of rivers, floods.' },
              { q: 'Why does waterlogging harm soil?', a: 'Waterlogging (excess water remaining in soil) fills all air spaces in soil with water. This deprives plant roots of oxygen (they need oxygen for respiration), creates anaerobic conditions where harmful bacteria thrive, and causes salts to accumulate at the surface (salinisation). Waterlogged soil cannot support most crops.' },
              { q: 'How is soil texture related to water retention?', a: 'Sandy soil: large particles, large spaces — water drains quickly, low retention. Clay soil: very fine particles, tiny spaces — holds water well, can become waterlogged. Loamy soil: mixture of sand, silt, clay — retains enough moisture while allowing drainage. Ideal for agriculture.' },
            ]
          },
          {
            id: 'forests-lifeline-7',
            title: 'Forests: Our Lifeline',
            subtopics: 'Forest ecosystem, Canopy, Crown, Shrub, Decomposers, Forest products, Conservation',
            definition: 'Forests are complex ecosystems with multiple layers of vegetation (trees, shrubs, herbs) and rich biodiversity. They provide oxygen, regulate climate, conserve water, prevent soil erosion, and support millions of species and livelihoods.',
            content: `<p>Forests cover 30% of Earth's land surface and contain 80% of terrestrial species. India's forests — from Himalayan alpine forests to tropical rainforests — are crucial for the environment and for millions of people who depend on them.</p>
<h4>Forest Layers</h4>
<ul>
<li><strong>Canopy:</strong> Topmost layer — tall trees receiving maximum sunlight. Eagles, monkeys.</li>
<li><strong>Understory:</strong> Shorter trees and shrubs in the shade of canopy.</li>
<li><strong>Shrub layer:</strong> Small plants, bushes.</li>
<li><strong>Forest floor:</strong> Herbs, mosses, fungi, and decomposers (bacteria, fungi, earthworms).</li>
</ul>
<h4>What Forests Provide</h4>
<ul>
<li><strong>Ecosystem services:</strong> Produce oxygen, absorb CO₂, regulate water cycle, prevent soil erosion, regulate local climate (cooler, more humid)</li>
<li><strong>Economic:</strong> Timber, bamboo, medicinal plants, rubber, honey, fruits, paper, fodder</li>
<li><strong>Livelihoods:</strong> Millions of tribal and forest-dwelling communities depend on forests</li>
</ul>
<h4>Decomposers in the Forest</h4>
<p>Bacteria and fungi break down dead plant and animal matter, releasing nutrients back into the soil — completing the nutrient cycle. Without decomposers, forests would be buried in dead material.</p>`,
            qa: [
              { q: 'Why are forests called "the lungs of the Earth"?', a: 'Forests absorb vast amounts of CO₂ through photosynthesis and release oxygen. The Amazon rainforest alone produces 20% of world\'s oxygen. Forests also moderate temperature, regulate rainfall, and sequester carbon — performing functions similar to human lungs for the planet\'s atmosphere.' },
              { q: 'What happens to a forest ecosystem when the top layer (canopy) is removed?', a: 'Removing the canopy exposes the forest floor to direct sunlight and rainfall — killing shade-adapted understory plants. Soil dries out and erodes. Without trees, there is less transpiration — rainfall decreases. Animals lose habitat and food sources. The entire ecosystem unravels — showing how interdependent forest layers are.' },
              { q: 'What role do decomposers play in the forest ecosystem?', a: 'Decomposers (bacteria, fungi, earthworms) break down dead plant material (leaves, branches) and animal remains into simpler inorganic substances. These are released into the soil as nutrients (nitrogen, phosphorus) that plants absorb. Without decomposers, nutrients would be locked in dead matter — trees could not grow, and dead material would pile up indefinitely.' },
              { q: 'How do forests regulate the water cycle?', a: 'Forests: (1) Intercept rainfall — tree leaves slow rainfall, reducing impact erosion; (2) Increase infiltration — roots create channels for water to enter soil; (3) Release water vapour through transpiration — increasing local humidity and cloud formation → rainfall; (4) Store water in roots and soil. Deforestation reduces rainfall, causes floods (less absorption) and droughts (less recycled water).' },
            ]
          },
          {
            id: 'light-7',
            title: 'Light',
            subtopics: 'Reflection, Mirror laws, Plane and spherical mirrors, Refraction, Lens, Human eye',
            definition: 'Light is a form of electromagnetic radiation visible to the human eye. It travels in straight lines, reflects off smooth surfaces (law of reflection), and bends when passing between different media (refraction). Mirrors and lenses use these properties to form images.',
            content: `<p>Light enables us to see the world. Understanding how it reflects and refracts allows us to design optical instruments — from simple mirrors to complex telescopes and microscopes.</p>
<h4>Laws of Reflection</h4>
<ol>
<li>Incident ray, reflected ray, and normal lie in the same plane.</li>
<li>Angle of incidence (i) = Angle of reflection (r).</li>
</ol>
<h4>Plane Mirror Images</h4>
<p>Virtual (behind mirror), erect, same size as object, laterally inverted (left-right reversed), image distance = object distance.</p>
<h4>Refraction</h4>
<p>Light bends when passing from one medium to another. Light bends toward normal entering denser medium, away from normal entering rarer medium.</p>
<h4>Lenses</h4>
<p>Convex lens (converging): magnifying glass, used in cameras. Concave lens (diverging): used to correct short-sightedness.</p>
<h4>Dispersion</h4>
<p>Prism separates white light into seven colours (VIBGYOR). Rainbow: raindrops act as prisms, dispersing sunlight.</p>`,
            qa: [
              { q: 'What is lateral inversion? Give an example.', a: 'Lateral inversion is the left-right reversal of an image in a plane mirror. Your right hand appears as the left hand in the mirror. Written words appear backwards (AMBULANCE is written backwards on ambulances so it reads correctly in rear-view mirrors of cars ahead).' },
              { q: 'Why does a straw appear bent in a glass of water?', a: 'Refraction: light from the part of straw in water travels from water (denser) to air (rarer) and bends away from the normal. Our brain assumes light travels in straight lines, so we perceive the straw as appearing at a different position — it seems bent at the water-air interface.' },
              { q: 'What is dispersion of light? How does a rainbow form?', a: 'Dispersion: white light splits into component colours when passing through a prism (different colours refract at different angles — violet bends most, red bends least). Rainbow: sunlight enters water droplets (refracted), reflects internally, and exits (refracted again). Each colour comes out at a slightly different angle — we see a spectrum arc. Red outside, violet inside.' },
              { q: 'What is the difference between a convex and concave mirror?', a: 'Convex mirror: reflecting surface curves outward (like the outside of a ball). Diverges light. Image is always virtual, erect, and smaller. Used as: rear-view mirrors (wider field of view). Concave mirror: reflecting surface curves inward. Converges light. Can form real or virtual images. Used as: shaving mirrors (magnified image), torches (parallel beam), solar concentrators.' },
            ]
          },
        ]
      },
      history: {
        id: 'history', topics: [
          {
            id: 'tracing-changes-thousand-years',
            title: 'Tracing Changes Through a Thousand Years',
            subtopics: 'Medieval period, Sources, Maps, New social groups, Religious traditions',
            definition: 'The medieval period (700–1750 CE) in India saw the rise and fall of many kingdoms, new religious movements, and significant changes in society, economy, and culture.',
            content: `<p>A thousand years seems like a long time. But many changes that shape modern India — our languages, architecture, music, religions, and even cuisine — have medieval roots.</p>
<h4>Sources for Medieval History</h4>
<p>Coins, inscriptions, buildings, paintings, manuscripts, travellers' accounts (Ibn Battuta, Fa Hien, Marco Polo). Maps from this period were different — they showed what was important to the map-maker, not geographic accuracy.</p>
<h4>New Social Groups</h4>
<p>Rajputs emerged as powerful warrior clans claiming Kshatriya status. Jats, Ahirs, Gurjars — pastoral and farming communities gained prominence. Forest-dwelling communities interacted increasingly with settled society.</p>
<h4>Religious Traditions</h4>
<p>Bhakti movement (devotional Hinduism), Sufism (Islamic mysticism), and the spread of Islam through traders and rulers. Interaction between these traditions created new composite cultures.</p>`,
            qa: [
              { q: 'Why are medieval maps different from modern maps?', a: 'Medieval cartographers drew maps based on what they considered important or sacred — not geographic accuracy. South was sometimes at the top. Distances were distorted based on importance of places, not actual measurement.' },
              { q: 'Who were the Rajputs?', a: 'Rajputs were a warrior class that emerged in northern India during the medieval period. They claimed Kshatriya (warrior) status and ruled kingdoms in Rajputana (modern Rajasthan) and parts of North India. They are known for valour, chivalry, and elaborate clan systems.' },
              { q: 'What were the two main religious traditions of medieval India?', a: 'Hinduism (through the Bhakti movement — devotional saints like Kabir, Mirabai, Tukaram) and Islam (through trade and Sufi missionaries). Their interaction created a rich composite culture in medieval India.' },
              { q: 'Name two travellers who visited India during the medieval period.', a: 'Ibn Battuta (14th century, from Morocco — visited Delhi Sultanate), Fa Hien (5th century Chinese Buddhist monk), Marco Polo (13th century Italian), Al-Biruni (11th century Persian scholar).' },
            ]
          },
          {
            id: 'delhi-sultans',
            title: 'The Delhi Sultans',
            subtopics: 'Slave dynasty, Khilji, Tughlaq, Lodi, Iqta system, Administration',
            definition: 'The Delhi Sultanate (1206–1526 CE) was the first major Islamic kingdom in India, established after Muhammad Ghori\'s conquest. It ruled for 320 years under five dynasties.',
            content: `<p>The Delhi Sultanate transformed India — introducing new architectural styles (Qutub Minar), administrative systems, and cultural exchanges that still influence India today.</p>
<h4>Five Dynasties</h4>
<ol>
<li><strong>Slave/Mamluk Dynasty (1206–1290):</strong> Founded by Qutbuddin Aibak. Iltutmish consolidated power. Raziya Sultan — first female ruler of Delhi.</li>
<li><strong>Khilji Dynasty (1290–1320):</strong> Alauddin Khilji — conquered most of India, introduced market reforms and price control.</li>
<li><strong>Tughlaq Dynasty (1320–1414):</strong> Muhammad bin Tughlaq — shifted capital to Daulatabad (controversial). Firuz Shah — built many cities and canals.</li>
<li><strong>Sayyid and Lodi (1414–1526):</strong> Ibrahim Lodi defeated by Babur at Panipat (1526) — ending the Sultanate.</li>
</ol>
<h4>Iqta System</h4>
<p>Land grants (iqtas) given to nobles for military and administrative service — instead of salary. Led to decentralisation of power.</p>`,
            qa: [
              { q: 'Who founded the Delhi Sultanate?', a: 'Qutbuddin Aibak, a general of Muhammad Ghori, founded the Delhi Sultanate in 1206 after Ghori\'s death. He was a slave (mamluk) who rose to become the first Sultan.' },
              { q: 'Who was Raziya Sultan and what was significant about her rule?', a: 'Raziya Sultan (1236–1240) was the daughter of Iltutmish and the first woman to rule the Delhi Sultanate. She dressed like a man, appeared in public without a veil, and commanded armies — radical for her time. She was eventually overthrown by Turkish nobles.' },
              { q: 'What was the Iqta system?', a: 'The Iqta system was a land revenue administration where the Sultan granted nobles the right to collect revenue from a region (iqta) in return for military service. The noble (iqtadar) governed and supplied soldiers to the Sultan.' },
              { q: 'Why did the Delhi Sultanate decline?', a: 'Weak rulers after Alauddin Khilji, constant rebellions by nobles, Mongol invasions, the eccentric policies of Muhammad bin Tughlaq (moving the capital, debasing currency), and finally Timur\'s invasion (1398) that devastated Delhi contributed to the decline.' },
            ]
          },
          {
            id: 'mughal-empire',
            title: 'The Mughal Empire',
            subtopics: 'Babur, Akbar, Administration, Mansabdari, Din-i-Ilahi, Art and Architecture',
            definition: 'The Mughal Empire (1526–1857) was one of the largest and wealthiest empires in Indian and world history, known for its administrative efficiency, religious tolerance under Akbar, and magnificent art and architecture.',
            content: `<p>At its height, the Mughal Empire was one of the richest in the world, producing perhaps 25% of global GDP. Its administrative innovations, culture, and monuments (like the Taj Mahal) remain awe-inspiring.</p>
<h4>Key Mughal Emperors</h4>
<ul>
<li><strong>Babur (1526–1530):</strong> First Mughal. Defeated Ibrahim Lodi at First Battle of Panipat (1526). From Fergana (modern Uzbekistan).</li>
<li><strong>Humayun:</strong> Lost and regained throne. Brought Persian influence to India.</li>
<li><strong>Akbar (1556–1605):</strong> Greatest Mughal. Policy of Sulh-i-kul (peace with all). Married Rajput princess. Abolished jizya. Created Din-i-Ilahi.</li>
<li><strong>Shah Jahan (1628–1658):</strong> Golden age of Mughal art. Built Taj Mahal, Red Fort, Jama Masjid.</li>
<li><strong>Aurangzeb (1658–1707):</strong> Reimposed jizya. Extended empire to the south but overstretched.</li>
</ul>
<h4>Mansabdari System</h4>
<p>All military and civilian officers had ranks (mansabs). Determined salary and number of soldiers they must maintain. Made administration efficient and centralised.</p>`,
            qa: [
              { q: 'What was Akbar\'s policy of Sulh-i-kul?', a: 'Sulh-i-kul means "peace with all." Akbar promoted religious tolerance — respecting all religions, abolishing the tax on Hindu pilgrims and the jizya (tax on non-Muslims), and marrying Rajput princesses to build alliances. He held interfaith discussions.' },
              { q: 'What was the Mansabdari system?', a: 'Mansabdars were officials who held ranks (mansabs) in the Mughal army/administration. Each rank specified the number of soldiers (sawars) they had to maintain. Their salary was paid in cash from the treasury — ensuring loyalty to the emperor.' },
              { q: 'Who built the Taj Mahal and why?', a: 'Emperor Shah Jahan built the Taj Mahal (completed 1653) in Agra as a mausoleum for his beloved wife Mumtaz Mahal, who died during childbirth. It is considered the finest example of Mughal architecture, built in white marble.' },
              { q: 'Why did the Mughal Empire decline after Aurangzeb?', a: 'Aurangzeb\'s religious intolerance (reimposing jizya, destroying temples) alienated Hindus and Rajputs. His long Deccan wars exhausted the treasury. After his death (1707), weak rulers, regional revolts (Marathas, Sikhs, Jats), and European colonialism led to decline.' },
            ]
          },
          {
            id: 'devotional-paths',
            title: 'Devotional Paths to the Divine',
            subtopics: 'Bhakti movement, Sufi movement, Key saints, Kabir, Mirabai, Chaitanya',
            definition: 'The Bhakti and Sufi movements were medieval devotional movements that emphasised personal love for God, equality of devotees regardless of caste, and rejected empty rituals and religious formalism.',
            content: `<p>In an age of rigid caste hierarchies and formal religious rituals, the Bhakti and Sufi saints offered a revolutionary message: God can be reached by any person, regardless of caste, gender, or wealth, through love and devotion.</p>
<h4>Bhakti Movement</h4>
<p>Began in south India (Alvars — Vishnu devotees; Nayanmars — Shiva devotees) and spread northward. Teachings: personal devotion (bhakti), God is one, rejection of caste discrimination, accessible to all.</p>
<h4>Key Bhakti Saints</h4>
<ul>
<li><strong>Kabir:</strong> Weaver from Varanasi. Criticised both Hindu rituals and Islamic orthodoxy. Couplets (dohas) in simple Hindi, accessible to all.</li>
<li><strong>Mirabai:</strong> Rajput princess. Devoted to Krishna. Defied social norms — composed beautiful songs.</li>
<li><strong>Guru Nanak:</strong> Founder of Sikhism. One God, equality of all humans.</li>
<li><strong>Tukaram, Chaitanya:</strong> Devotional poets of Maharashtra and Bengal.</li>
</ul>
<h4>Sufi Movement</h4>
<p>Islamic mystical tradition. Sufis believed in direct personal experience of God through meditation and music (qawwali). Major orders: Chishti (Moinuddin Chishti — Ajmer), Suhrawardi. Famous Sufi saint: Nizamuddin Auliya (Delhi).</p>`,
            qa: [
              { q: 'What was the central message of the Bhakti movement?', a: 'The Bhakti saints taught that God can be reached through love and devotion (bhakti), not through rituals, caste, or birth. They rejected caste discrimination — their followers included people from all castes and even women.' },
              { q: 'Who was Kabir and what made his teachings revolutionary?', a: 'Kabir was a 15th-century weaver from Varanasi. He criticised both Hindu caste rituals and Islamic formalism, saying God is one and can be reached by anyone. His dohas (couplets) in simple Hindi were accessible to common people regardless of religion.' },
              { q: 'What is the difference between Bhakti and Sufi movements?', a: 'Both emphasised devotion and love for God over ritual. Bhakti emerged from Hindu tradition; Sufi from Islamic tradition. Sufis used music (qawwali) and meditation (dhikr). Both rejected caste/religious hierarchy and are credited with promoting Hindu-Muslim harmony.' },
              { q: 'Who was Guru Nanak and what did he teach?', a: 'Guru Nanak (1469–1539) was the founder of Sikhism. He taught that there is One God for all humans (not different Gods for different religions), that caste is meaningless, and that service (seva) and honest work are forms of worship.' },
            ]
          },
        ]
      },
      geography: {
        id: 'geography', topics: [
          {
            id: 'environment',
            title: 'Our Environment',
            subtopics: 'Natural and human-made environment, Ecosystem, Biosphere, Atmosphere',
            definition: 'The environment is everything around us — the air, water, land, plants, animals, and the human-made elements. It consists of natural components (lithosphere, hydrosphere, atmosphere, biosphere) and human-made components.',
            content: `<p>Every action we take — from using a plastic bag to driving a car — affects our environment. Understanding what the environment is and how its components interact is the first step to protecting it.</p>
<h4>Components of the Natural Environment</h4>
<ul>
<li><strong>Lithosphere:</strong> The solid rocky crust of the Earth — land, mountains, soil.</li>
<li><strong>Hydrosphere:</strong> All water on Earth — oceans, rivers, lakes, groundwater, ice caps.</li>
<li><strong>Atmosphere:</strong> Layer of gases surrounding Earth — provides air, weather protection.</li>
<li><strong>Biosphere:</strong> Zone where life exists — where lithosphere, hydrosphere, and atmosphere interact.</li>
</ul>
<h4>Human-Made Environment</h4>
<p>Humans modify the natural environment to create: buildings, roads, factories, dams, farms. This is the human-made (built) environment.</p>
<h4>Ecosystem</h4>
<p>A community of organisms interacting with each other and their physical environment. Examples: forest ecosystem, pond ecosystem, desert ecosystem. Producers (plants) → Consumers (animals) → Decomposers (bacteria, fungi).</p>`,
            qa: [
              { q: 'What are the four major components of the natural environment?', a: 'Lithosphere (solid rocky Earth), Hydrosphere (all water), Atmosphere (layer of gases), and Biosphere (zone of life where the other three interact).' },
              { q: 'What is an ecosystem?', a: 'An ecosystem is a community of living organisms (plants, animals, microorganisms) interacting with each other and with their non-living environment (soil, water, air). Examples: forest, pond, coral reef, grassland.' },
              { q: 'How do humans modify the natural environment?', a: 'Humans modify the natural environment by: cutting forests for farmland, building dams on rivers, constructing cities, mining, creating roads and railways, and changing the composition of air and water through pollution.' },
              { q: 'Why is the biosphere important?', a: 'The biosphere is the thin zone on Earth\'s surface where life exists. It includes all living organisms and their interactions. Without the biosphere, there would be no oxygen production, no food, no nutrients cycling — life itself would be impossible.' },
            ]
          },
          {
            id: 'inside-our-earth',
            title: 'Inside Our Earth',
            subtopics: 'Layers of Earth, Rocks, Minerals, Rock cycle, Volcanoes',
            definition: 'Earth\'s interior has three main layers: crust, mantle, and core. The crust is made of rocks, which are classified into igneous, sedimentary, and metamorphic types based on how they formed.',
            content: `<p>We can't drill to the Earth's centre (it's too hot — over 5000°C), but scientists use earthquake waves to "see" inside Earth, revealing a layered structure much like an onion.</p>
<h4>Layers of the Earth</h4>
<ul>
<li><strong>Crust:</strong> Thin outer layer (5–70 km). Continental crust (granite) and oceanic crust (basalt).</li>
<li><strong>Mantle:</strong> 2900 km thick, solid but can flow slowly. Semi-molten rock (magma).</li>
<li><strong>Core:</strong> Outer core (liquid iron/nickel) + Inner core (solid, ~5000°C).</li>
</ul>
<h4>Types of Rocks</h4>
<ul>
<li><strong>Igneous:</strong> Formed by cooling of molten magma. Granite (intrusive, slow cooling), Basalt (extrusive, fast cooling).</li>
<li><strong>Sedimentary:</strong> Formed by deposition and compaction of sediments. Coal, sandstone, limestone. May contain fossils.</li>
<li><strong>Metamorphic:</strong> Formed by heat and pressure transforming other rocks. Marble (from limestone), Slate (from shale).</li>
</ul>
<h4>Rock Cycle</h4>
<p>Rocks continuously transform from one type to another through geological processes.</p>`,
            qa: [
              { q: 'What are the three layers of the Earth?', a: 'Crust (thin outer layer of rock), Mantle (thick middle layer of semi-solid rock), Core (innermost — outer core is liquid iron/nickel, inner core is solid at ~5000°C).' },
              { q: 'How are igneous rocks formed? Give an example.', a: 'Igneous rocks form when molten magma cools and solidifies. Slow cooling underground → large crystals (granite). Fast cooling at surface → small crystals or glassy texture (basalt, obsidian).' },
              { q: 'Why do sedimentary rocks sometimes contain fossils?', a: 'Sedimentary rocks form by layers of sediment being compacted over millions of years. Dead organisms can be buried in these sediments before decomposing. Over time, minerals replace the organic material, preserving the organism\'s shape as a fossil.' },
              { q: 'What is the difference between magma and lava?', a: 'Magma is molten rock inside the Earth (in the mantle or magma chambers). When magma reaches the Earth\'s surface through a volcanic eruption, it is called lava.' },
            ]
          },
          {
            id: 'our-changing-earth',
            title: 'Our Changing Earth',
            subtopics: 'Tectonic plates, Earthquakes, Volcanoes, Weathering, Erosion, Deposition',
            definition: 'The Earth\'s surface is constantly changing due to internal forces (plate tectonics, earthquakes, volcanoes) and external forces (water, wind, ice — weathering, erosion, and deposition).',
            content: `<p>The Rocky Mountains, the Himalayas, the Grand Canyon — these were all shaped by forces acting over millions of years. The Earth's surface is in constant, slow motion.</p>
<h4>Lithospheric Plates</h4>
<p>Earth's crust is divided into large plates that move slowly (~2–10 cm/year) on the semi-fluid mantle. When plates collide → mountains form (Himalayas). When they separate → rift valleys (Great Rift Valley). When one slides under another → volcanoes and earthquakes (Pacific Ring of Fire).</p>
<h4>Earthquakes</h4>
<p>Sudden release of energy from plate movement. Measured on Richter scale. Focus (point of origin) → Epicentre (point on surface above focus). Seismograph measures earthquake waves.</p>
<h4>Volcanoes</h4>
<p>Opening in Earth's crust through which magma erupts. Active (erupting), Dormant (not recently erupted), Extinct (will not erupt again).</p>
<h4>Weathering and Erosion</h4>
<p>Weathering: breaking down rocks. Erosion: carrying away of broken material by wind, water, ice. Deposition: settling of eroded material. Together these shape landforms.</p>`,
            qa: [
              { q: 'What causes earthquakes?', a: 'Earthquakes occur when tectonic plates suddenly move, slip, or grind against each other. This releases enormous energy in the form of seismic waves that shake the ground.' },
              { q: 'What is the difference between the focus and epicentre of an earthquake?', a: 'Focus (hypocenter): the point inside the Earth where the earthquake originates. Epicentre: the point on the Earth\'s surface directly above the focus. The most severe shaking is felt at the epicentre.' },
              { q: 'How do the Himalayan mountains continue to grow taller?', a: 'The Indian tectonic plate continues to push northward into the Eurasian plate. This collision is ongoing, causing the Himalayas to rise by a few millimetres each year.' },
              { q: 'What is the difference between erosion and deposition?', a: 'Erosion is the process of carrying away weathered rock material by agents like water, wind, or glaciers. Deposition is when these agents lose energy and drop/deposit the material they were carrying — forming new landforms like deltas, sand dunes, and flood plains.' },
            ]
          },
          {
            id: 'water-7',
            title: 'Water',
            subtopics: 'Water cycle, Groundwater, Rivers, Seas and oceans, Distribution of water, Water scarcity, Conservation',
            definition: 'Water is essential for all life. Though 71% of Earth\'s surface is covered by water, only 2.5% is fresh water. The water cycle continuously moves water between the atmosphere, land, and oceans.',
            content: `<p>Fresh water is one of Earth's most precious resources. As the global population grows and climate changes, water scarcity is becoming one of the most serious challenges humanity faces.</p>
<h4>The Water Cycle</h4>
<p>Evaporation (water → water vapour) → Condensation (water vapour → clouds) → Precipitation (rain/snow) → Collection (rivers, lakes, oceans) → repeat. Solar energy drives evaporation; gravity drives precipitation and flow.</p>
<h4>Distribution of Water</h4>
<p>97.5% salt water (oceans). 2.5% fresh water. Of fresh water: 68.7% in glaciers and ice caps, 30.1% underground (groundwater), only 0.3% in rivers and lakes (accessible surface water).</p>
<h4>Groundwater</h4>
<p>Water that seeps into the ground and is stored in aquifers (porous rock layers). Extracted by wells and tubewells. Overextraction is lowering water tables dangerously in many Indian cities.</p>
<h4>Water Scarcity and Conservation</h4>
<p>Many parts of India face water shortages due to: uneven rainfall, overuse, pollution, deforestation. Solutions: rainwater harvesting, drip irrigation, treating wastewater, reducing use, traditional methods (stepwells, bawdis).</p>`,
            qa: [
              { q: 'Trace the path of water in the water cycle.', a: 'Solar energy evaporates water from oceans/lakes/rivers → water vapour rises and cools → condensation forms clouds → precipitation (rain/snow) falls → water collects in rivers/lakes/groundwater → flows back to ocean. The cycle then repeats continuously.' },
              { q: 'Why is fresh water scarce despite 71% of Earth being covered with water?', a: '97.5% of Earth\'s water is salt water (oceans) — not directly drinkable. Of the 2.5% fresh water, 68.7% is locked in glaciers and ice, and 30.1% is groundwater. Only 0.3% is accessible surface fresh water in rivers and lakes — and much of that is already polluted or in remote areas.' },
              { q: 'What is rainwater harvesting and why is it important?', a: 'Rainwater harvesting collects rainwater from rooftops or land into tanks, ponds, or lets it seep into ground to recharge aquifers. It: conserves fresh water, reduces runoff and flooding, reduces dependence on groundwater, and provides water in dry seasons. Traditional systems like johads, kunds, and baolis in India stored rainwater effectively for centuries.' },
            ]
          },
          {
            id: 'natural-vegetation-wildlife',
            title: 'Natural Vegetation and Wildlife',
            subtopics: 'Types of forests, Grasslands, Deserts, Importance of forests, Wildlife conservation, Deforestation',
            definition: 'Natural vegetation refers to plants that grow naturally in a region without human intervention. Wildlife is the diverse animal life of a region. Both are inseparably linked to the climate and soil of their habitat.',
            content: `<p>Forests cover 31% of Earth's land area and are home to 80% of terrestrial biodiversity. They are our planet's lungs — absorbing CO₂ and releasing oxygen. Protecting them is protecting life itself.</p>
<h4>Major Types of Natural Vegetation</h4>
<ul>
<li><strong>Tropical Rainforests:</strong> Heavy rainfall, dense canopy. Amazon, Congo, Western Ghats. Highest biodiversity.</li>
<li><strong>Temperate forests:</strong> Moderate rainfall, deciduous or coniferous trees.</li>
<li><strong>Grasslands:</strong> Moderate rainfall, insufficient for forests. African savanna, Indian grass plains.</li>
<li><strong>Desert vegetation:</strong> Thorny shrubs, cacti — adapted to extreme drought. Camels, lizards.</li>
<li><strong>Tundra:</strong> Polar regions, permafrost. Mosses, lichens only.</li>
</ul>
<h4>Importance of Forests</h4>
<p>Forests: provide oxygen, absorb CO₂, regulate climate, hold soil (prevent erosion), store water, provide habitat for wildlife, supply timber, medicines, and food for millions of people.</p>
<h4>Deforestation and Conservation</h4>
<p>Deforestation: clearing forests for farming, logging, urbanisation. Causes: floods, soil erosion, species extinction, climate change. Conservation: protected areas (national parks, biosphere reserves), social forestry, reforestation.</p>`,
            qa: [
              { q: 'Why are tropical rainforests called "lungs of the Earth"?', a: 'Tropical rainforests absorb enormous amounts of CO₂ (carbon dioxide) from the atmosphere through photosynthesis and release oxygen. The Amazon alone produces 20% of the world\'s oxygen. Like our lungs exchange CO₂ for oxygen, rainforests clean the atmosphere — hence the name.' },
              { q: 'How is natural vegetation related to climate?', a: 'Climate — especially rainfall and temperature — determines what plants can survive. High rainfall → thick rainforests. Moderate rainfall → grasslands. Very low rainfall → desert shrubs. Cold temperatures → tundra mosses. This is why vegetation maps and climate maps look almost identical.' },
              { q: 'What are biosphere reserves?', a: 'Biosphere reserves are large protected areas where natural ecosystems are conserved while allowing sustainable human use. They have three zones: core (fully protected), buffer (limited research/tourism), transition (sustainable economic activities). India has 18 biosphere reserves including Nilgiris, Sundarbans, and Gulf of Mannar.' },
            ]
          },
        ]
      },
      civics: {
        id: 'civics', topics: [
          {
            id: 'equality-7',
            title: 'On Equality',
            subtopics: 'Equality in democracy, Discrimination, Right to equality, Dignity, Universal adult franchise',
            definition: 'Equality means every person has the same worth and dignity, and is entitled to the same rights and opportunities. In a democracy, equality is both a value and a legal guarantee.',
            content: `<p>Equality is the cornerstone of Indian democracy. Yet in practice, caste, gender, religion, and class continue to create deep inequalities. Understanding what equality means — and why it is often not achieved — is crucial for citizens.</p>
<h4>Equality in Democracy</h4>
<p>India's Constitution grants equal rights to all citizens: one person, one vote. The Prime Minister's vote is equal to a daily-wage worker's vote. This political equality is radical in a society that historically had rigid caste hierarchies.</p>
<h4>Civil Equality vs Social Reality</h4>
<p>While law guarantees equality, social discrimination persists. Dalits face discrimination despite legal protection. Women are paid less for the same work. Poor children have fewer educational opportunities. Recognising this gap is the first step to addressing it.</p>
<h4>Dignity</h4>
<p>Every person deserves to be treated with dignity — not just equality of rights but equality of respect. Discrimination violates dignity. The Indian Constitution specifically addresses discrimination on grounds of religion, race, caste, sex, and place of birth.</p>`,
            qa: [
              { q: 'What does the Indian Constitution say about equality?', a: 'Article 14: The State shall not deny any person equality before the law. Article 15: No discrimination based on religion, race, caste, sex, or place of birth. Article 17: Abolishes untouchability. Article 21: Right to life and personal liberty with dignity. Together, these guarantee formal legal equality to all citizens.' },
              { q: 'Why does formal legal equality not always lead to real equality?', a: 'Laws against discrimination exist, but: social prejudices are deeply ingrained and not easily changed by law; historical disadvantages (poverty, lack of education) persist across generations; those discriminated against may not know their rights or lack resources to fight cases; and enforcement is often weak. True equality requires both legal changes and social change.' },
              { q: 'What is universal adult franchise?', a: 'Universal adult franchise means every adult citizen (18+) has the right to vote, regardless of gender, caste, religion, education, or wealth. India adopted this from its first election (1952) — unique among many countries that initially limited voting to the educated or wealthy. It is a powerful equaliser — every person\'s vote counts equally.' },
            ]
          },
          {
            id: 'womens-roles',
            title: 'Women Change the World',
            subtopics: 'Gender stereotypes, Women in education and work, Campaigns for women\'s rights, Discrimination at home and workplace',
            definition: 'Gender refers to social roles and expectations assigned to males and females by society. Gender discrimination — treating people unequally based on gender — limits opportunities for both boys and girls, but especially girls.',
            content: `<p>For most of history, women were excluded from education, voting, property ownership, and public life. The struggle for gender equality has achieved remarkable progress but deep inequalities remain worldwide and in India.</p>
<h4>Gender Stereotypes</h4>
<p>Society assigns roles: "Women should cook and care for children; men should work and earn." These stereotypes: prevent girls from pursuing science/sports; make boys feel they cannot be nurses or dancers; limit human potential.</p>
<h4>Education and Opportunity</h4>
<p>In many parts of India, girls are still taken out of school to work at home or marry early. Yet studies consistently show: educating girls is one of the most powerful tools for development — it reduces infant mortality, improves child nutrition, and reduces poverty.</p>
<h4>Women in the Workforce</h4>
<p>Women often receive lower pay for equal work (gender pay gap). Women's work at home (cooking, childcare) is not counted in economic statistics, making it "invisible." Women face sexual harassment in workplaces.</p>
<h4>Campaigns and Achievements</h4>
<p>Beti Bachao Beti Padhao, Self-Help Groups, Panchayat reservations, Maternity Benefit Act — steps toward gender equality.</p>`,
            qa: [
              { q: 'What is a gender stereotype? Give two examples.', a: 'A gender stereotype is an oversimplified belief about how men or women should behave. Examples: "Science and maths are for boys" (prevents girls from pursuing STEM). "Cooking and childcare are women\'s work" (discourages men from participating in family care). Stereotypes limit individual potential and create unfair expectations.' },
              { q: 'Why is educating the girl child so important for national development?', a: 'Educated women: have fewer and healthier children (lower birth rate), ensure better nutrition and health for their families, earn income and lift families from poverty, keep children in school longer, are more likely to educate their own children. Studies show each additional year of girls\' schooling raises their future earnings by 10-20% and significantly reduces infant and child mortality.' },
              { q: 'What is domestic violence and who is affected?', a: 'Domestic violence is physical, emotional, or sexual abuse by one family member against another, most often by husbands against wives. It is a crime in India (Protection of Women from Domestic Violence Act 2005). It affects women across all classes and religions. Many cases go unreported due to social stigma, economic dependence, and fear. Support: National helpline 181.' },
            ]
          },
          {
            id: 'state-government-7',
            title: 'State Government — Legislature and Executive',
            subtopics: 'MLA, State Assembly, Chief Minister, Governor, State list',
            definition: 'India is a federal democracy — power is divided between the central government and state governments. States have their own elected legislatures and executives that handle subjects like education, agriculture, and law and order.',
            content: `<p>While Parliament governs India as a whole, each of India's 28 states and 8 Union Territories has its own government handling local needs. Understanding how state governments work helps citizens engage with the government closest to their daily lives.</p>
<h4>State Legislature</h4>
<p>Most states have a unicameral legislature (Vidhan Sabha — Legislative Assembly). Some large states (UP, Bihar, Maharashtra) have a bicameral legislature — Vidhan Sabha + Vidhan Parishad (Legislative Council).</p>
<h4>MLA (Member of Legislative Assembly)</h4>
<p>Elected from constituencies within the state. Represents voters in the Assembly. Questions government, debates laws, votes on bills. The party/coalition with majority forms the government.</p>
<h4>Chief Minister and Cabinet</h4>
<p>Leader of majority party/coalition becomes Chief Minister — real executive head. CM appoints Cabinet ministers who head departments (Finance, Education, Health). The Council of Ministers is collectively responsible to the Vidhan Sabha.</p>
<h4>Governor</h4>
<p>Constitutional head of the state (like President at centre). Appointed by the President. Invites CM to form government. In President's Rule (no majority), Governor can run the state directly.</p>`,
            qa: [
              { q: 'What is the difference between an MP and an MLA?', a: 'MP (Member of Parliament): elected to the Lok Sabha/Rajya Sabha; makes laws at the national level; represents India as a whole. MLA (Member of Legislative Assembly): elected to the state assembly (Vidhan Sabha); makes laws for the state; deals with local issues like education, police, agriculture.' },
              { q: 'What is the difference between the CM and the Governor?', a: 'Chief Minister: elected (leader of majority party in state assembly), real executive power, makes decisions on governance. Governor: appointed by the President, is the constitutional/ceremonial head, acts on CM\'s advice in normal times. Similar relationship as PM and President at the national level.' },
              { q: 'What subjects can state governments legislate on?', a: 'The Seventh Schedule of the Constitution divides subjects into: Union List (central government only — defence, foreign affairs, currency), State List (states only — police, agriculture, education, public health), Concurrent List (both, with centre\'s law prevailing in conflict — forests, marriage, electricity). States handle subjects that affect daily local life.' },
              { q: 'What happens if no party gets a majority in state elections?', a: 'If no single party gets majority (called "hung assembly"), coalition governments are formed — multiple parties agree to work together. The Governor plays a key role: invites the party with the best chance of majority to form government. If no stable government can be formed, the Governor can recommend President\'s Rule (direct central government rule) for up to 6 months.' },
            ]
          },
          {
            id: 'markets-around-us-7',
            title: 'Markets Around Us',
            subtopics: 'Types of markets, Buyers and sellers, Weekly markets, Shopping complexes, Chain of traders',
            definition: 'A market is any place where buyers and sellers come together to exchange goods and services. Markets exist in many forms — from weekly village haats to large shopping malls and online platforms.',
            content: `<p>Every time you buy something — from a street vendor, a shop, or online — you participate in a market. Understanding markets helps us understand how prices are set and who benefits from trade.</p>
<h4>Types of Markets</h4>
<ul>
<li><strong>Weekly market (haat):</strong> Held on specific days in a fixed location. Small vendors sell fresh produce, utensils, clothes. Low overheads → lower prices. Serves rural communities.</li>
<li><strong>Neighbourhood shops:</strong> Local kirana stores, convenient, serve daily needs. Higher prices but credit often available.</li>
<li><strong>Shopping complexes / malls:</strong> Large stores, wide variety. Fixed prices, good service, can return goods. Higher prices than weekly markets.</li>
<li><strong>Online markets:</strong> E-commerce (Amazon, Flipkart). Convenient, compare prices, delivered home.</li>
</ul>
<h4>Chain of Traders</h4>
<p>Goods travel from producer → wholesale trader → retailer → consumer. Each link adds a margin. The farmer who grows vegetables earns much less than the final consumer pays.</p>
<h4>Who Benefits?</h4>
<p>Large buyers and sellers have more bargaining power. Small producers often get low prices; small buyers often pay high prices. Government intervention (minimum support prices, consumer protection laws) can balance this.</p>`,
            qa: [
              { q: 'Why are weekly markets cheaper than permanent shops for the same goods?', a: 'Weekly markets have lower overhead costs — no shop rent, electricity, or permanent staff. Vendors often sell directly (eliminating middlemen). They sell in bulk. Competition among many vendors drives prices down. However: no credit, goods cannot be returned, limited variety.' },
              { q: 'What is the chain of markets? Use an example.', a: 'Example: Potato. Farmer grows potatoes → sells to wholesale market trader (mandi) at ₹10/kg → wholesaler sells to retail shops at ₹15/kg → shop sells to customer at ₹20/kg. Each link adds 30-50% margin. The farmer earns least; the consumer pays most. The middle chain is where most value is added.' },
              { q: 'What is the difference between a wholesale market and a retail market?', a: 'Wholesale market: large quantities, lower prices per unit, sellers are businesses buying for resale. Retail market: small quantities, higher prices per unit, buyers are final consumers. India\'s famous wholesale markets: Azadpur mandi (Delhi, vegetables), Crawford Market (Mumbai).' },
              { q: 'How has e-commerce (online shopping) changed traditional markets?', a: 'E-commerce: wider variety, price comparison, convenience (delivered at home), lower prices (fewer middlemen). But: cannot examine goods before buying, returns can be difficult, impact on local shopkeepers (many small shops have closed). E-commerce benefits urban, educated, bank-account-owning consumers most. Rural and elderly consumers may be excluded.' },
            ]
          },
        ]
      },
    }
  },

  // ── CLASS 8 ──────────────────────────────────────────────────
  'class-8': {
    id: 'class-8', label: 'Class 8', shortLabel: '8th',
    board: 'CBSE', emoji: '8️⃣',
    description: 'Algebra, Cell biology, Modern Indian history & Creative writing',
    subjects: {
      mathematics: {
        id: 'mathematics', topics: [
          {
            id: 'algebra',
            title: 'Algebra',
            subtopics: 'Algebraic expressions, Identities, Factorisation, Division of polynomials',
            definition: 'Algebra is the branch of mathematics that deals with symbols and the rules for manipulating those symbols. It provides a way to represent numbers using variables and solve complex problems systematically.',
            content: `<p>Algebra transforms word problems into mathematical equations that can be solved step-by-step. It is the gateway to higher mathematics and is used in physics, engineering, economics, and computer science.</p>
<h4>Algebraic Expressions — Recap and Deeper Dive</h4>
<p>An algebraic expression uses variables, constants, and arithmetic operations. The key is learning how to manipulate these expressions correctly.</p>
<ul>
<li><strong>Monomial:</strong> One term → 5x², −3y</li>
<li><strong>Binomial:</strong> Two terms → 3x + 7, a² − 4</li>
<li><strong>Trinomial:</strong> Three terms → x² + 5x + 6</li>
<li><strong>Polynomial:</strong> Any number of terms</li>
</ul>
<h4>Multiplication of Algebraic Expressions</h4>
<p>To multiply, use the distributive property and laws of exponents.</p>
<div class="formula">(a + b)(a − b) = a² − b²</div>
<div class="formula">(a + b)² = a² + 2ab + b²</div>
<div class="formula">(a − b)² = a² − 2ab + b²</div>
<h4>Standard Algebraic Identities</h4>
<p>These are equations that are true for all values of variables. Memorising them saves enormous time in solving problems.</p>
<h4>Factorisation</h4>
<p>Factorisation is the reverse of expansion — expressing an expression as a product of its factors. Methods include: taking out common factors, using identities, splitting middle term.</p>
<div class="example-box"><strong>Factorise x² + 5x + 6:</strong><br/>Find two numbers that multiply to 6 and add to 5: 2 and 3.<br/>x² + 2x + 3x + 6 = x(x+2) + 3(x+2) = <strong>(x+2)(x+3)</strong></div>
<h4>Division of Algebraic Expressions</h4>
<p>To divide a polynomial by a monomial, divide each term of the polynomial by the monomial.</p>
<div class="formula">(4x² + 8x) ÷ 4x = x + 2</div>`,
            qa: [
              { q: 'Expand using identity: (3x + 4y)²', a: '(3x + 4y)² = (3x)² + 2(3x)(4y) + (4y)² = 9x² + 24xy + 16y²' },
              { q: 'Factorise: x² − 9', a: 'x² − 9 = x² − 3² = (x+3)(x−3) [using identity a²−b² = (a+b)(a−b)]' },
              { q: 'Find the product: (2x − 5)(2x + 5)', a: '(2x − 5)(2x + 5) = (2x)² − 5² = 4x² − 25' },
              { q: 'Factorise: 6x² + 11x + 3', a: 'Find two numbers: product = 18, sum = 11 → 9 and 2. 6x² + 9x + 2x + 3 = 3x(2x+3) + 1(2x+3) = (2x+3)(3x+1)' },
              { q: 'Evaluate using identity: 104 × 96', a: '104 × 96 = (100+4)(100−4) = 100² − 4² = 10000 − 16 = 9984' },
              { q: 'Simplify: (x² + 2x − 15) ÷ (x + 5)', a: 'Factorise numerator: x² + 2x − 15 = (x+5)(x−3). So (x+5)(x−3) ÷ (x+5) = (x−3)' },
              { q: 'What is the difference between an expression and an identity?', a: 'An expression is a combination of terms (e.g., x² + 3x). An identity is a statement that is true for ALL values of variables (e.g., (a+b)² = a² + 2ab + b²).' },
              { q: 'Add: 5x² − 3x + 7 and −3x² + 2x − 4', a: '(5x²−3x²) + (−3x+2x) + (7−4) = 2x² − x + 3' },
            ]
          },
          {
            id: 'linear-equations',
            title: 'Linear Equations in One Variable',
            subtopics: 'Solving linear equations, Applications, Equations with fractions',
            definition: 'A linear equation in one variable is an equation of the form ax + b = c, where a ≠ 0. It has exactly one solution — a specific value of the variable that makes both sides equal.',
            content: `<p>Linear equations are the most fundamental type of equation in algebra. They appear in almost every field — calculating time, distance, profit/loss, age problems, and more.</p>
<h4>General Form and Solution</h4>
<p>The standard form is ax + b = 0. To solve: isolate the variable on one side.</p>
<div class="formula">ax + b = c → ax = c − b → x = (c−b)/a</div>
<h4>Equations with Fractions</h4>
<p>Multiply both sides by the LCM of all denominators to clear the fractions, then solve.</p>
<div class="formula">x/2 + x/3 = 5 → Multiply by 6: 3x + 2x = 30 → 5x = 30 → x = 6</div>
<h4>Cross Multiplication</h4>
<p>When an equation has the form a/b = c/d, cross multiply: ad = bc.</p>
<h4>Applications</h4>
<p>Linear equations solve a huge variety of real-world problems: age problems, perimeter/area, profit and loss, mixture problems.</p>
<div class="example-box"><strong>Age problem:</strong> Asha is 5 years older than Ravi. In 10 years, Asha's age will be twice Ravi's age now. Find their current ages.<br/>Ravi's age = x. Asha = x + 5. After 10 years, Asha = x + 15 = 2x → x = 15.<br/>Ravi = 15, Asha = 20.</div>`,
            qa: [
              { q: 'Solve: 3(x + 4) = 2(x + 7)', a: '3x + 12 = 2x + 14 → 3x − 2x = 14 − 12 → x = 2' },
              { q: 'Solve: (2x+1)/3 = (x−1)/2', a: 'Cross multiply: 2(2x+1) = 3(x−1) → 4x+2 = 3x−3 → x = −5' },
              { q: 'A number is 3 times another. Their sum is 56. Find both numbers.', a: 'Let smaller = x, larger = 3x. x + 3x = 56 → 4x = 56 → x = 14. Numbers: 14 and 42.' },
              { q: 'Solve: 5x/2 − 7 = 3x', a: '5x/2 − 3x = 7 → 5x/2 − 6x/2 = 7 → −x/2 = 7 → x = −14' },
            ]
          },
          {
            id: 'squares-square-roots',
            title: 'Squares and Square Roots',
            subtopics: 'Perfect squares, Finding square roots, Patterns, Pythagorean triplets',
            definition: 'The square of a number is the result of multiplying it by itself. The square root is the reverse operation — finding the number which when multiplied by itself gives the original number.',
            content: `<p>Understanding squares and square roots is essential for geometry, physics, and algebra. The square root symbol √ is one of the most used symbols in mathematics.</p>
<h4>Perfect Squares</h4>
<p>Numbers like 1, 4, 9, 16, 25 are perfect squares — they have whole number square roots. Properties: Perfect squares end in 0, 1, 4, 5, 6, or 9. A number ending in 2, 3, 7, or 8 is NEVER a perfect square.</p>
<h4>Properties of Square Numbers</h4>
<ul>
<li>Between n² and (n+1)², there are exactly 2n non-perfect-square numbers.</li>
<li>(n+1)² − n² = 2n + 1 (the difference between consecutive squares is always odd)</li>
<li>Sum of first n odd numbers = n²</li>
</ul>
<h4>Finding Square Root</h4>
<p>Method 1: Prime Factorisation — find prime factors, group in pairs, take one from each pair.</p>
<p>Method 2: Long division method — for larger numbers.</p>
<div class="formula">√144 = √(2×2×2×2×3×3) = 2×2×3 = 12</div>
<h4>Pythagorean Triplets</h4>
<p>Three numbers (a, b, c) where a²+b²=c² form a Pythagorean triplet. For any m>1: (2m, m²−1, m²+1) is a Pythagorean triplet.</p>`,
            qa: [
              { q: 'Find √441 using prime factorisation.', a: '441 = 3×3×7×7 = (3×7)² = 21². So √441 = 21.' },
              { q: 'Is 500 a perfect square? How do you know?', a: '500 = 2²×5³. The prime factor 5 has an odd power (3), so it cannot be expressed as a perfect square. No, 500 is not a perfect square.' },
              { q: 'Find the sum of first 9 odd numbers.', a: 'Sum of first n odd numbers = n². For n=9: 9² = 81.' },
              { q: 'Find a Pythagorean triplet with smallest number 6.', a: 'If 2m = 6, then m = 3. Triplet: (2m, m²−1, m²+1) = (6, 8, 10). Check: 36+64=100 ✓' },
              { q: 'Find √(625/1225).', a: '√625 = 25, √1225 = 35. So √(625/1225) = 25/35 = 5/7.' },
            ]
          },
          {
            id: 'rational-numbers-8',
            title: 'Rational Numbers',
            subtopics: 'Properties, Representation on number line, Operations, Multiplicative inverse',
            definition: 'Rational numbers are numbers of the form p/q where p and q are integers and q ≠ 0. Class 8 explores their properties in depth — closure, commutativity, associativity, and the role of 0 and 1.',
            content: `<p>Building on Class 7, we now formally prove properties of rational numbers and understand why they form a complete number system with no "gaps" for operations.</p>
<h4>Properties of Rational Numbers</h4>
<ul>
<li><strong>Closure:</strong> Sum, difference, and product of any two rationals is rational. Division is closed except ÷0.</li>
<li><strong>Commutativity:</strong> a+b = b+a and a×b = b×a for rationals.</li>
<li><strong>Associativity:</strong> (a+b)+c = a+(b+c).</li>
<li><strong>Distributivity:</strong> a×(b+c) = a×b + a×c.</li>
</ul>
<h4>Additive and Multiplicative Identities</h4>
<p>0 is the additive identity (a+0=a). 1 is the multiplicative identity (a×1=a).</p>
<h4>Additive and Multiplicative Inverse</h4>
<p>Additive inverse of a/b is -a/b (sum=0). Multiplicative inverse of a/b is b/a (product=1).</p>
<h4>Density of Rationals</h4>
<p>Between any two rational numbers, there are infinitely many rationals: mean = (a+b)/2.</p>`,
            qa: [
              { q: 'Find the multiplicative inverse of -7/9.', a: 'Multiplicative inverse of -7/9 is -9/7. Check: (-7/9) × (-9/7) = 63/63 = 1 ✓' },
              { q: 'Find 5 rational numbers between 3/5 and 4/5.', a: 'Convert to 50ths: 30/50 and 40/50. Rationals between: 31/50, 32/50, 33/50, 34/50, 35/50.' },
              { q: 'Is subtraction commutative for rationals?', a: 'No. 3/4 - 1/4 = 2/4 = 1/2 but 1/4 - 3/4 = -2/4 = -1/2. Different answers, so subtraction is NOT commutative.' },
              { q: 'Verify: -2/3 × (3/4 + 1/2) = (-2/3 × 3/4) + (-2/3 × 1/2)', a: 'LHS: -2/3 × 5/4 = -10/12 = -5/6. RHS: -6/12 + (-2/6) = -1/2 + (-1/3) = -5/6. Equal ✓' },
            ]
          },
          {
            id: 'understanding-quadrilaterals',
            title: 'Understanding Quadrilaterals',
            subtopics: 'Types of quadrilaterals, Properties, Sum of angles, Parallelogram, Rhombus, Trapezium',
            definition: 'A quadrilateral is a polygon with four sides. The sum of all interior angles of any quadrilateral is 360°. Different types have special properties based on their parallel sides and angle relationships.',
            content: `<p>Quadrilaterals are everywhere — room floors, picture frames, books, kites, and windows. Understanding their properties helps in geometry proofs and area calculations.</p>
<h4>Angle Sum Property</h4>
<div class="formula">Sum of interior angles of a quadrilateral = 360°</div>
<h4>Types of Quadrilaterals</h4>
<ul>
<li><strong>Parallelogram:</strong> Opposite sides parallel and equal. Opposite angles equal. Diagonals bisect each other.</li>
<li><strong>Rectangle:</strong> Parallelogram with all right angles. Diagonals are equal.</li>
<li><strong>Rhombus:</strong> Parallelogram with all sides equal. Diagonals bisect each other at right angles.</li>
<li><strong>Square:</strong> Rectangle + Rhombus. All sides equal, all angles 90°, diagonals equal and bisect at right angles.</li>
<li><strong>Trapezium:</strong> One pair of parallel sides. Area = ½ × (sum of parallel sides) × height.</li>
<li><strong>Kite:</strong> Two pairs of adjacent sides equal. One diagonal bisects the other at right angles.</li>
</ul>`,
            qa: [
              { q: 'Three angles of a quadrilateral are 90°, 85°, and 110°. Find the fourth angle.', a: 'Sum = 360°. Fourth angle = 360 - 90 - 85 - 110 = 75°' },
              { q: 'What property distinguishes a rhombus from a square?', a: 'Both have all sides equal. A square also has all angles = 90° (it\'s a special rhombus). A rhombus can have angles other than 90°.' },
              { q: 'The diagonals of a parallelogram bisect each other. If one diagonal is 10cm, what is each half?', a: 'If diagonals bisect each other, each diagonal is cut into two equal halves. So each half = 10/2 = 5 cm.' },
              { q: 'A trapezium has parallel sides 12 cm and 8 cm, height 5 cm. Find its area.', a: 'Area = ½ × (12+8) × 5 = ½ × 20 × 5 = 50 cm²' },
            ]
          },
          {
            id: 'comparing-quantities-8',
            title: 'Comparing Quantities — Compound Interest',
            subtopics: 'Discount, Tax/GST, Compound Interest, Growth and Depreciation',
            definition: 'Compound interest is interest calculated on both the principal and the accumulated interest from previous periods. It is the basis of banking, investments, and loans.',
            content: `<p>Albert Einstein reportedly called compound interest the "eighth wonder of the world." Understanding it separates smart financial decisions from poor ones.</p>
<h4>Percentage Applications</h4>
<p>Discount: reduction on marked price. SP = MP - Discount. GST (Goods and Services Tax): added to base price. Tax amount = rate% of original price.</p>
<h4>Compound Interest</h4>
<div class="formula">A = P(1 + R/100)ⁿ</div>
<div class="formula">CI = A - P = P[(1+R/100)ⁿ - 1]</div>
<p>P = Principal, R = Rate%, n = number of years.</p>
<h4>Simple vs Compound Interest</h4>
<p>SI = PRT/100 (same interest each year). CI: interest is added to principal each year, so next year's interest is on larger amount. CI > SI for same P, R, T (when n>1).</p>
<h4>Depreciation</h4>
<div class="formula">Value after n years = P(1 - R/100)ⁿ</div>`,
            qa: [
              { q: 'Find CI on ₹10,000 at 10% per year for 2 years.', a: 'A = 10000(1+10/100)² = 10000 × 1.21 = ₹12100. CI = 12100-10000 = ₹2100. (SI would be ₹2000 — CI is ₹100 more)' },
              { q: 'A car bought for ₹5,00,000 depreciates at 15% per year. Find value after 2 years.', a: 'V = 500000(1-15/100)² = 500000 × 0.85² = 500000 × 0.7225 = ₹3,61,250' },
              { q: 'A shopkeeper marks price at ₹2000 and offers 20% discount. Also adds 18% GST. Find final price.', a: 'After discount: 2000 - 400 = ₹1600. GST = 18% of 1600 = ₹288. Final price = 1600 + 288 = ₹1888' },
              { q: 'How much more is CI than SI on ₹8000 at 5% for 3 years?', a: 'SI = 8000×5×3/100 = ₹1200. A(CI) = 8000(1.05)³ = 8000×1.157625 = ₹9261. CI = ₹1261. Difference = 1261-1200 = ₹61' },
            ]
          },
          {
            id: 'direct-inverse-proportions',
            title: 'Direct and Inverse Proportions',
            subtopics: 'Direct proportion, Inverse proportion, Graphs, Applications',
            definition: 'Two quantities are in direct proportion if increasing one increases the other proportionally. They are in inverse proportion if increasing one decreases the other proportionally.',
            content: `<p>Direct and inverse proportion are fundamental relationships in physics, chemistry, and everyday life — from mixing ingredients to calculating work done and speed-time relationships.</p>
<h4>Direct Proportion</h4>
<p>If x and y are in direct proportion: y/x = k (constant). When x doubles, y doubles.</p>
<div class="formula">x₁/y₁ = x₂/y₂</div>
<p>Examples: cost and number of items, distance and time at constant speed, shadow length and height.</p>
<h4>Inverse Proportion</h4>
<p>If x and y are in inverse proportion: xy = k (constant). When x doubles, y halves.</p>
<div class="formula">x₁y₁ = x₂y₂</div>
<p>Examples: speed and time (for same distance), workers and time to complete work, pipes and filling time.</p>`,
            qa: [
              { q: '8 workers build a wall in 6 days. How many days for 12 workers?', a: 'Inverse proportion: 8×6 = 12×d → d = 48/12 = 4 days' },
              { q: 'If 5 kg of rice costs ₹200, find cost of 12 kg.', a: 'Direct proportion: 200/5 = x/12 → x = 2400/5 = ₹480' },
              { q: 'A tap fills a tank in 4 hours. How many such taps fill it in 1 hour?', a: 'Inverse proportion: 1×4 = n×1 → n = 4 taps' },
              { q: 'Are the number of books and cost directly or inversely proportional?', a: 'Directly proportional — more books cost more. When you buy twice as many books, you pay twice as much (at fixed price per book).' },
            ]
          },
          {
            id: 'mensuration-8',
            title: 'Mensuration',
            subtopics: 'Area of trapezium, polygon, Surface area and volume of cube, cuboid, cylinder',
            definition: 'Mensuration deals with calculating areas, perimeters, surface areas, and volumes of 2D and 3D geometric shapes. Class 8 extends this to 3D shapes like cubes, cuboids, and cylinders.',
            content: `<p>Mensuration is essential for engineering, architecture, packaging, and everyday tasks like painting a room or filling a tank. Every 3D shape has both surface area and volume.</p>
<h4>Area of Trapezium and Polygons</h4>
<div class="formula">Trapezium: A = ½ × (a+b) × h</div>
<div class="formula">Polygon: Split into triangles, sum their areas</div>
<h4>Surface Area and Volume of 3D Shapes</h4>
<div class="formula">Cube: SA = 6a², V = a³</div>
<div class="formula">Cuboid: SA = 2(lb+bh+lh), V = lbh</div>
<div class="formula">Cylinder: CSA = 2πrh, TSA = 2πr(r+h), V = πr²h</div>
<div class="formula">Cone: CSA = πrl (l=slant height), TSA = πr(r+l), V = ⅓πr²h</div>`,
            qa: [
              { q: 'Find the volume of a cylinder with radius 7 cm and height 10 cm.', a: 'V = πr²h = 22/7 × 49 × 10 = 1540 cm³' },
              { q: 'How many bricks of size 25×12×8 cm can fill a room 5m×4m×3m?', a: 'Room volume = 5×4×3 = 60 m³ = 60,000,000 cm³. Brick volume = 25×12×8 = 2400 cm³. Number = 60000000/2400 = 25,000 bricks' },
              { q: 'Find the total surface area of a cube with side 5 cm.', a: 'TSA = 6a² = 6 × 25 = 150 cm²' },
              { q: 'A cylindrical pipe is 14 m long with diameter 3.5 cm. Find volume of water it holds.', a: 'r = 1.75 cm, h = 1400 cm. V = π×(1.75)²×1400 = 22/7×3.0625×1400 = 13475 cm³ ≈ 13.475 litres' },
            ]
          },
          {
            id: 'introduction-to-graphs',
            title: 'Introduction to Graphs',
            subtopics: 'Bar graph, Pie chart, Histogram, Line graph, Linear graphs, Coordinates',
            definition: 'Graphs are visual representations of data or mathematical relationships. They help identify patterns, trends, and comparisons at a glance that would be difficult to see in raw data.',
            content: `<p>A picture is worth a thousand words — and a graph is worth a thousand numbers. Data visualisation is one of the most powerful tools in modern science, business, and journalism.</p>
<h4>Types of Graphs</h4>
<ul>
<li><strong>Bar graph:</strong> Comparing discrete categories. Heights represent values.</li>
<li><strong>Pie chart:</strong> Shows parts of a whole as sectors. Angle = (value/total) × 360°.</li>
<li><strong>Histogram:</strong> Like bar graph for continuous data with class intervals.</li>
<li><strong>Line graph:</strong> Shows change over time — connect points to show trends.</li>
</ul>
<h4>Linear Graphs</h4>
<p>A graph of a linear equation (y = mx + c) is always a straight line. The slope m = rise/run. Passes through origin if c = 0.</p>
<h4>Coordinates</h4>
<p>Every point on a graph is identified by (x, y) — x is horizontal position, y is vertical. The axes cross at the origin (0,0).</p>`,
            qa: [
              { q: 'In a pie chart, a sector representing 90 students out of 360 total has what angle?', a: 'Angle = (90/360) × 360° = 90°' },
              { q: 'Plot the points (0,0), (1,2), (2,4), (3,6) and describe the graph.', a: 'All points lie on a straight line passing through the origin. The graph of y=2x is a straight line with slope 2.' },
              { q: 'What is the difference between a bar graph and a histogram?', a: 'Bar graph: for discrete/separate categories, bars have gaps. Histogram: for continuous data with class intervals, bars touch each other (no gaps between bars).' },
              { q: 'If temperature (°C) vs time (hours) is plotted and the graph is a horizontal line, what does it mean?', a: 'A horizontal line means the temperature is constant — it does not change with time. The slope (rate of change) is zero.' },
            ]
          },
        ]
      },
      science: {
        id: 'science', topics: [
          {
            id: 'cell',
            title: 'Cell — Structure and Functions',
            subtopics: 'Cell theory, Prokaryotic vs Eukaryotic, Organelles, Plant vs Animal cell',
            definition: 'The cell is the fundamental structural and functional unit of all living organisms. Every living thing is made of one or more cells. All cells come from pre-existing cells — this is the Cell Theory.',
            content: `<p>Robert Hooke first observed cells in 1665 when looking at cork under a microscope. He saw tiny box-like structures and called them "cells." Today we know that cells are incredibly complex miniature machines.</p>
<h4>Cell Theory (Schleiden, Schwann, Virchow)</h4>
<ul>
<li>All living organisms are composed of one or more cells.</li>
<li>The cell is the basic unit of life.</li>
<li>All cells arise from pre-existing cells.</li>
</ul>
<h4>Types of Cells</h4>
<p><strong>Prokaryotic cells</strong> (e.g., bacteria): No membrane-bound nucleus. Simpler, smaller. Genetic material (DNA) floats freely in cytoplasm.</p>
<p><strong>Eukaryotic cells</strong> (e.g., all plants and animals): Have a true nucleus enclosed by a nuclear membrane. More complex. Have membrane-bound organelles.</p>
<h4>Key Cell Organelles</h4>
<ul>
<li><strong>Cell membrane:</strong> Controls what enters and exits the cell.</li>
<li><strong>Cell wall:</strong> (Only in plants) Rigid outer layer, provides shape and protection.</li>
<li><strong>Nucleus:</strong> "Control centre" — contains DNA and controls cell activities.</li>
<li><strong>Mitochondria:</strong> "Powerhouse" — produces ATP (energy) through cellular respiration.</li>
<li><strong>Chloroplasts:</strong> (Only in plants) — site of photosynthesis; contains chlorophyll.</li>
<li><strong>Ribosome:</strong> Site of protein synthesis.</li>
<li><strong>Vacuole:</strong> Storage. Large in plant cells (maintains turgidity), small in animal cells.</li>
<li><strong>Endoplasmic Reticulum:</strong> Transport network within the cell.</li>
<li><strong>Golgi apparatus:</strong> Packing and dispatch of proteins.</li>
</ul>`,
            qa: [
              { q: 'Who discovered the cell?', a: 'Robert Hooke discovered cells in 1665 while examining cork under a microscope.' },
              { q: 'What is the function of mitochondria?', a: 'Mitochondria are the powerhouse of the cell. They produce ATP (adenosine triphosphate), the energy currency of the cell, through cellular respiration.' },
              { q: 'List three differences between plant cells and animal cells.', a: 'Plant cells: have cell wall, have chloroplasts, have large central vacuole. Animal cells: no cell wall, no chloroplasts, have small vacuoles (or none). Plant cells have fixed shape; animal cells may change shape.' },
              { q: 'Why is the nucleus called the control centre?', a: 'The nucleus contains the DNA (genetic information) of the cell. It controls all cellular activities including protein synthesis, cell division, and metabolic processes.' },
              { q: 'What is the difference between prokaryotic and eukaryotic cells?', a: 'Prokaryotic cells lack a membrane-bound nucleus; DNA floats freely. Examples: bacteria. Eukaryotic cells have a true nucleus enclosed by nuclear membrane. Examples: all plant and animal cells.' },
              { q: 'What would happen if the cell membrane were removed?', a: 'The cell would lose its selective barrier. Harmful substances would freely enter, essential molecules would leak out, and the cell would die as it cannot maintain homeostasis.' },
            ]
          },
          {
            id: 'combustion-flame',
            title: 'Combustion and Flame',
            subtopics: 'Types of combustion, Conditions, Fuels, Structure of a candle flame',
            definition: 'Combustion is a chemical process in which a substance reacts rapidly with oxygen to produce heat and light. The substance that undergoes combustion is called a fuel.',
            content: `<p>Fire has played a crucial role in human civilisation — from cooking food to powering engines. Understanding combustion helps us use fuels safely and efficiently.</p>
<h4>Conditions for Combustion</h4>
<p>Three conditions must be present for combustion to occur (the "fire triangle"):</p>
<ol>
<li>Combustible material (fuel)</li>
<li>Sufficient heat (to reach ignition temperature)</li>
<li>Oxygen (air)</li>
</ol>
<p>Remove any one → fire goes out. This is the principle behind fire extinguishers.</p>
<h4>Types of Combustion</h4>
<ul>
<li><strong>Rapid combustion:</strong> Occurs quickly with heat and light. Example: burning LPG.</li>
<li><strong>Spontaneous combustion:</strong> Occurs without external heat source. Example: wet hay catching fire due to heat generated by bacterial decomposition.</li>
<li><strong>Explosive combustion:</strong> Very rapid, producing enormous energy in a short time. Example: crackers, dynamite.</li>
</ul>
<h4>Structure of a Candle Flame</h4>
<p>A candle flame has three zones:</p>
<ul>
<li><strong>Innermost zone:</strong> Dark, unburnt wax vapour. Coldest zone.</li>
<li><strong>Middle zone:</strong> Yellow, partial combustion. Brightest part.</li>
<li><strong>Outer zone:</strong> Blue, complete combustion. Hottest zone.</li>
</ul>`,
            qa: [
              { q: 'Why does a fire extinguisher put out fire by releasing CO₂?', a: 'CO₂ is heavier than air. It covers the burning substance, cutting off oxygen supply. Without oxygen, combustion cannot continue and the fire is extinguished.' },
              { q: 'What is the ignition temperature?', a: 'The minimum temperature at which a substance starts burning on its own is called its ignition temperature. Different substances have different ignition temperatures.' },
              { q: 'Which zone of a candle flame is the hottest?', a: 'The outer blue zone is the hottest because complete combustion occurs there, releasing maximum energy.' },
              { q: 'Why should you not throw water on an oil fire?', a: 'Oil is less dense than water — it floats on water. Water spreads burning oil around, spreading the fire. CO₂ extinguisher or sand should be used instead.' },
              { q: 'What are the products of combustion of natural gas (methane)?', a: 'CH₄ + 2O₂ → CO₂ + 2H₂O. Products are carbon dioxide and water vapour.' },
            ]
          },
          {
            id: 'crop-production-management',
            title: 'Crop Production and Management',
            subtopics: 'Agricultural practices, Kharif and Rabi crops, Irrigation, Fertilisers, Crop protection',
            definition: 'Agriculture is the practice of growing crops and raising animals for food and other products. Good crop management involves proper soil preparation, seed selection, irrigation, fertilisation, and pest control.',
            content: `<p>India is an agricultural country — about half of all Indians depend on farming. Modern agricultural practices help feed over a billion people, but sustainable methods are crucial for the future.</p>
<h4>Kharif and Rabi Crops</h4>
<p><strong>Kharif (monsoon crops):</strong> Sown in June-July, harvested in September-October. Rice, maize, cotton, jute, groundnut.</p>
<p><strong>Rabi (winter crops):</strong> Sown in October-November, harvested in March-April. Wheat, mustard, pea, gram, barley.</p>
<h4>Agricultural Practices</h4>
<ol>
<li>Preparation of soil (ploughing/tilling)</li>
<li>Sowing seeds (seed drill)</li>
<li>Adding manure and fertilisers</li>
<li>Irrigation (canal, sprinkler, drip)</li>
<li>Weeding</li>
<li>Harvesting</li>
<li>Storage</li>
</ol>
<h4>Fertilisers vs Manure</h4>
<p>Fertilisers: chemical compounds providing specific nutrients (NPK) quickly. Manure: decomposed plant/animal waste — improves soil texture and adds multiple nutrients.</p>`,
            qa: [
              { q: 'What is the difference between Kharif and Rabi crops?', a: 'Kharif crops are grown in the rainy (monsoon) season — sown June-July, harvested September-October. Examples: rice, maize, cotton. Rabi crops are winter crops — sown October-November, harvested March-April. Examples: wheat, gram, mustard.' },
              { q: 'What are the advantages of drip irrigation over traditional methods?', a: 'Drip irrigation delivers water directly to plant roots through tubes. Advantages: saves 40-60% water, reduces weed growth, prevents soil erosion, works in hilly areas, and is suitable for areas with water scarcity.' },
              { q: 'Why is it better to use manure than chemical fertilisers?', a: 'Manure improves soil texture, adds humus, retains water, provides multiple nutrients, and is environmentally friendly. Excess chemical fertilisers can leach into groundwater, cause soil acidification, and reduce soil organisms.' },
              { q: 'What is crop rotation and why is it practised?', a: 'Crop rotation is growing different crops in the same field in successive seasons. It prevents depletion of specific nutrients (different crops need different nutrients), reduces pests (pest cycles are broken), and often includes nitrogen-fixing legumes to naturally fertilise the soil.' },
            ]
          },
          {
            id: 'microorganisms',
            title: 'Microorganisms: Friend and Foe',
            subtopics: 'Types of microbes, Useful microorganisms, Harmful microorganisms, Antibiotics, Food preservation',
            definition: 'Microorganisms are tiny living things invisible to the naked eye. They include bacteria, viruses, fungi, protozoa, and algae. Some are beneficial (fermentation, antibiotics, decomposition) while others cause diseases.',
            content: `<p>For most of history, humans didn't know microorganisms existed. Yet they were responsible for our bread rising, our curd setting, our diseases — and now our medicines. They are arguably the most important organisms on Earth.</p>
<h4>Types of Microorganisms</h4>
<ul>
<li><strong>Bacteria:</strong> Unicellular, prokaryotic. Both beneficial (lactobacillus in curd) and harmful (Salmonella causing food poisoning).</li>
<li><strong>Viruses:</strong> Not technically living. Only replicate inside host cells. Cause: flu, polio, COVID-19, dengue.</li>
<li><strong>Fungi:</strong> Yeast (fermentation, bread), Penicillium (antibiotic), moulds (food spoilage).</li>
<li><strong>Protozoa:</strong> Amoeba, Plasmodium (malaria).</li>
<li><strong>Algae:</strong> Photosynthetic. Some are edible (spirulina).</li>
</ul>
<h4>Useful Microorganisms</h4>
<p>Making curd, bread, cheese, wine (fermentation). Nitrogen fixation in soil (Rhizobium). Decomposition (recycling nutrients). Antibiotics (Penicillin from Penicillium).</p>
<h4>Harmful Microorganisms</h4>
<p>Diseases in humans (TB, typhoid, cholera — bacterial; malaria, dengue — protozoan/viral). Spoil food. Cause plant diseases (blight, rust).</p>`,
            qa: [
              { q: 'What is an antibiotic? Give an example.', a: 'An antibiotic is a substance produced by microorganisms that kills or inhibits the growth of bacteria. Penicillin — discovered by Alexander Fleming in 1928 from the fungus Penicillium — was the first antibiotic.' },
              { q: 'How do microorganisms help in making curd from milk?', a: 'Lactobacillus bacteria are added to warm milk. They ferment the lactose (milk sugar) and produce lactic acid. Lactic acid coagulates milk proteins, giving curd its thick texture and tangy taste.' },
              { q: 'Why are viruses considered non-living by some scientists?', a: 'Viruses lack cellular structure, cannot carry out metabolism independently, don\'t grow, and can only reproduce inside a living host cell. However, they have genetic material (DNA or RNA) and can evolve — blurring the living/non-living boundary.' },
              { q: 'What is the role of microorganisms in the nitrogen cycle?', a: 'Rhizobium bacteria in root nodules of legumes fix atmospheric nitrogen into ammonia (usable by plants). Other bacteria convert dead organic matter back to nitrogen. Without this, plants couldn\'t get the nitrogen they need for protein synthesis.' },
            ]
          },
          {
            id: 'force-pressure',
            title: 'Force and Pressure',
            subtopics: 'Force, Effects of force, Types of force, Pressure, Atmospheric pressure, Archimedes',
            definition: 'Force is a push or pull on an object. Pressure is the force applied per unit area. A small force over a small area can create more pressure than a large force over a large area.',
            content: `<p>Why does a sharp knife cut better than a blunt one? Why do camels have wide feet? Why do dams have wider bases? All these are explained by the concept of pressure.</p>
<h4>Force and Its Effects</h4>
<p>Force can: change shape, change speed, change direction, start or stop motion. Measured in Newtons (N). Contact forces (friction, normal) vs non-contact forces (gravity, magnetism, electrostatic).</p>
<h4>Pressure</h4>
<div class="formula">Pressure = Force / Area (unit: Pascal = N/m²)</div>
<p>Same force over smaller area → more pressure. Example: knife edge (small area → high pressure cuts easily).</p>
<h4>Pressure in Liquids</h4>
<p>Liquid pressure increases with depth. Acts in all directions at the same depth. Hydraulic machines use this principle (Pascal's law).</p>
<h4>Atmospheric Pressure</h4>
<p>Air has weight — atmosphere exerts pressure at sea level ≈ 101,325 Pa. Decreases with altitude (less air above). Demonstrated by crushing can experiment.</p>`,
            qa: [
              { q: 'Why does a sharp needle pierce skin easily but a blunt object does not?', a: 'The needle has a very small tip area. Pressure = Force/Area. With the same force, smaller area gives higher pressure. The needle creates enough pressure to pierce skin.' },
              { q: 'Why do dams have a wider base than the top?', a: 'Water pressure increases with depth. The base of the dam experiences maximum water pressure. Making the base wider distributes this pressure over a larger area — preventing the dam from collapsing.' },
              { q: 'Why do camels have wide, padded feet?', a: 'Wide feet increase the area over which the camel\'s weight is distributed. Pressure = Force/Area — larger area means less pressure on the soft sand, preventing the camel from sinking into it.' },
              { q: 'Why does atmospheric pressure decrease at high altitudes?', a: 'Atmospheric pressure is due to the weight of air above. At high altitude (mountains), there is less air above → less weight → less pressure. This is why climbers use oxygen cylinders and aircraft cabins are pressurised.' },
            ]
          },
          {
            id: 'sound-8',
            title: 'Sound',
            subtopics: 'Production of sound, Vibration, Medium, Frequency, Amplitude, Noise pollution',
            definition: 'Sound is a form of energy produced by vibrating objects. It travels as a longitudinal wave through a medium (solid, liquid, or gas) and cannot travel through vacuum.',
            content: `<p>From music to speech to ultrasound medical imaging, sound is fundamental to human life. Understanding how sound is produced and travels opens up both physics and biology.</p>
<h4>Production and Propagation</h4>
<p>All sound is produced by vibration. A vibrating guitar string → vibrates air molecules → longitudinal wave (compressions and rarefactions) → reaches ear → eardrum vibrates → brain interprets as sound.</p>
<h4>Key Properties</h4>
<ul>
<li><strong>Frequency:</strong> Number of vibrations per second (Hz). Higher frequency → higher pitch. Human hearing: 20 Hz to 20,000 Hz.</li>
<li><strong>Amplitude:</strong> Extent of vibration. Larger amplitude → louder sound (more energy).</li>
<li><strong>Speed:</strong> Sound travels at ~340 m/s in air, faster in liquids and solids (because molecules are closer).</li>
</ul>
<h4>Sound Cannot Travel in Vacuum</h4>
<p>Needs a medium (particles to vibrate). Demonstrated by bell-jar experiment: ringing bell → remove air → can't hear the bell.</p>
<h4>Noise Pollution</h4>
<p>Unwanted loud sound. Sources: vehicles, factories, loudspeakers. Harms: hearing loss, stress, sleep disturbance. Prevention: silencers, sound barriers, plantation of trees.</p>`,
            qa: [
              { q: 'Why can\'t sound travel through vacuum?', a: 'Sound is a mechanical wave — it travels by making particles vibrate and pass the vibration to the next particle. In vacuum, there are no particles to vibrate, so sound cannot travel.' },
              { q: 'A person claps near a cliff and hears an echo after 3 seconds. How far is the cliff? (Speed of sound = 340 m/s)', a: 'Total distance (to cliff and back) = 340 × 3 = 1020 m. Distance to cliff = 1020/2 = 510 m' },
              { q: 'What is the relationship between frequency and pitch of sound?', a: 'Higher frequency → higher pitch (sharper sound, like a flute). Lower frequency → lower pitch (deeper sound, like a bass drum). Pitch is our perception of frequency.' },
              { q: 'Why does sound travel faster in solids than in air?', a: 'In solids, particles are closely packed and tightly bonded. Vibrations pass from one particle to the next more quickly. In air, particles are far apart and loosely connected, so vibrations travel more slowly.' },
            ]
          },
          {
            id: 'synthetic-fibres',
            title: 'Synthetic Fibres and Plastics',
            subtopics: 'Natural vs synthetic fibres, Types of synthetic fibres, Plastics, Biodegradable vs non-biodegradable, Environmental impact',
            definition: 'Synthetic fibres are man-made fibres produced from petrochemicals (crude oil and coal). Plastics are synthetic polymers that can be moulded. Both have transformed modern life but also created serious environmental problems.',
            content: `<p>Synthetic materials are everywhere — from the clothes we wear to the packaging we use. Understanding their properties and environmental impact helps us make better choices as consumers and citizens.</p>
<h4>Natural vs Synthetic Fibres</h4>
<p>Natural fibres come from plants (cotton, jute) or animals (wool, silk). Synthetic fibres are made from chemicals derived from petroleum: nylon, polyester, acrylic, rayon.</p>
<h4>Common Synthetic Fibres</h4>
<ul>
<li><strong>Nylon:</strong> Strong, elastic, resistant to moisture. Ropes, parachutes, toothbrushes.</li>
<li><strong>Polyester:</strong> Wrinkle-resistant, easy to wash/dry. Most common in clothing. PET bottles.</li>
<li><strong>Acrylic:</strong> Resembles wool, light, warm. Sweaters, blankets.</li>
<li><strong>Rayon:</strong> Semi-synthetic (from wood pulp). Called "artificial silk." Saris, dress materials.</li>
</ul>
<h4>Plastics: Thermoplastic vs Thermosetting</h4>
<p>Thermoplastics (can be remoulded when heated — PVC, polythene) vs Thermosetting plastics (cannot be remoulded — Bakelite, Melamine).</p>
<h4>Environmental Problem</h4>
<p>Plastics are non-biodegradable — they persist for 500-1000 years. Microplastics enter food chains. Solutions: reduce, reuse, recycle, ban single-use plastics.</p>`,
            qa: [
              { q: 'What are the advantages of synthetic fibres over natural fibres?', a: 'Synthetic fibres: are stronger and more durable, dry quickly, are wrinkle-resistant, are less expensive, can be made in any colour, are not damaged by moths/fungi, and are easy to wash. However, they are less breathable, melt near fire, and are non-biodegradable.' },
              { q: 'Why is plastic a serious environmental problem?', a: 'Plastic is non-biodegradable — bacteria cannot break it down. It persists for 500-1000 years. Animals mistake plastic for food. Plastics fragment into microplastics (<5mm) that contaminate water, soil, and enter food chains. 8 million tonnes of plastic enter the oceans every year.' },
              { q: 'What is the difference between thermoplastics and thermosetting plastics?', a: 'Thermoplastics: soften and can be remoulded when heated — PET, PVC, polythene. Can be recycled. Thermosetting plastics: once set, cannot be softened by heating — Bakelite, Melamine. Cannot be recycled. Used where heat resistance is needed (electrical switches, cookware handles).' },
            ]
          },
          {
            id: 'reproduction-animals',
            title: 'Reproduction in Animals',
            subtopics: 'Sexual and asexual reproduction, Fertilisation, Development of embryo, Viviparous vs oviparous, Metamorphosis',
            definition: 'Reproduction is the process by which organisms produce offspring to continue their species. Animals reproduce sexually (involving two parents and fusion of gametes) or asexually (one parent, no gametes).',
            content: `<p>Every organism — from bacteria to blue whales — reproduces. Without reproduction, species would become extinct. This chapter explores the remarkable diversity of reproductive strategies.</p>
<h4>Sexual Reproduction</h4>
<p>Involves two parents, fusion of male gamete (sperm) and female gamete (egg/ovum). Produces offspring with genetic variation — important for evolution.</p>
<h4>Internal vs External Fertilisation</h4>
<p><strong>Internal fertilisation:</strong> Sperm and egg fuse inside female's body. E.g., humans, dogs. Fewer offspring, more parental care.</p>
<p><strong>External fertilisation:</strong> Sperm and egg meet outside body in water. E.g., fish, frogs. Large numbers of eggs — most don't survive.</p>
<h4>Oviparous vs Viviparous</h4>
<p>Oviparous: lay eggs (birds, reptiles, fish). Viviparous: young develop inside mother, born live (humans, dogs, whales).</p>
<h4>Metamorphosis</h4>
<p>Dramatic change in body form. Frog: egg → tadpole → froglet → frog. Butterfly: egg → caterpillar → pupa → butterfly.</p>`,
            qa: [
              { q: 'What is the difference between internal and external fertilisation?', a: 'Internal fertilisation: sperm enters female body and fuses with egg inside (reptiles, birds, mammals). Better protection. External fertilisation: sperm and eggs released into water where they meet (most fish, frogs). Large numbers of eggs needed as many are lost to predators.' },
              { q: 'How does a frog undergo metamorphosis?', a: 'Frog life cycle: fertilised egg in water → tadpole hatches (breathes through gills, lives in water) → hind legs then fore legs form; lungs develop, gills disappear; tail reabsorbed → adult frog (breathes air, lives on land and water).' },
              { q: 'What is budding? In which organism does it occur?', a: 'Budding is asexual reproduction where a small bud grows from the parent body, develops into a complete organism, and detaches. Occurs in Hydra (animal) and yeast (fungus). Offspring is genetically identical to the parent.' },
            ]
          },
          {
            id: 'coal-petroleum-8',
            title: 'Coal and Petroleum',
            subtopics: 'Fossil fuels, Formation, Uses, Consequences of overuse, Alternatives, Natural resources',
            definition: 'Coal and petroleum are fossil fuels — formed from ancient organisms over millions of years. They are non-renewable energy sources that power most of the world\'s industry and transportation, but cause air pollution and climate change.',
            content: `<p>Our modern world runs on fossil fuels — they power cars, planes, factories, and generate most of our electricity. But these fuels took millions of years to form and are being used up in centuries. What happens when they run out?</p>
<h4>Formation of Coal</h4>
<p>Ancient forests were buried under water and soil → compressed and heated over millions of years → coal. It is the remains of ancient plants (peat → lignite → bituminous → anthracite, in order of increasing carbon content).</p>
<h4>Formation of Petroleum</h4>
<p>Tiny marine organisms (plankton, algae) died and sank to the ocean floor → buried under sediments → heat and pressure over millions of years → petroleum and natural gas. Found trapped in rock formations.</p>
<h4>Products from Petroleum (Refining)</h4>
<p>Petroleum is refined (fractional distillation) to get: petrol (fuel), diesel, kerosene, LPG, lubricants, paraffin wax, bitumen (roads).</p>
<h4>Consequences of Burning Fossil Fuels</h4>
<p>CO₂ emissions → greenhouse effect → global warming → climate change. Air pollution: SO₂, NO₂ → acid rain.</p>
<h4>Need for Conservation</h4>
<p>Non-renewable — once used, gone forever. Alternative: solar, wind, hydro, nuclear energy. Reduce use: public transport, energy-efficient appliances, insulation.</p>`,
            qa: [
              { q: 'Why are coal and petroleum called fossil fuels?', a: 'They are called fossil fuels because they formed from the fossils (remains) of ancient living organisms: coal from ancient forests (plants), petroleum from tiny marine organisms. They took millions of years to form, so once used up they cannot be replenished on any human timescale.' },
              { q: 'What products are obtained from petroleum refining?', a: 'Petroleum is a mixture of many hydrocarbons. Fractional distillation separates these by boiling point: LPG/natural gas (lowest boiling), petrol/gasoline, kerosene/jet fuel, diesel, lubricating oil, grease/wax, bitumen (asphalt, highest boiling). Each fraction has different uses based on its properties.' },
              { q: 'Why is burning fossil fuels a problem for the environment?', a: 'Burning fossil fuels releases: CO₂ → adds to greenhouse gases → global warming → climate change; SO₂ and NO₂ → react with water in atmosphere → acid rain (damages buildings, harms lakes and forests); particulate matter → air pollution → respiratory diseases. Also: oil spills harm marine ecosystems.' },
              { q: 'What can you do to reduce your consumption of fossil fuels?', a: 'Individual actions: use public transport or cycle instead of personal car; turn off lights and appliances when not in use; use energy-efficient LED bulbs and appliances; buy locally produced food (less transport); choose renewable energy if available; reuse and recycle materials (manufacturing uses energy). Together, individual choices multiply into significant impact.' },
            ]
          },
          {
            id: 'light-reflection-8',
            title: 'Light — Reflection and Refraction',
            subtopics: 'Laws of reflection, Regular and diffuse reflection, Multiple images, Refraction, Lenses, Dispersion',
            definition: 'Light is a form of energy that travels in straight lines and can be reflected (bounced back) and refracted (bent) when it encounters different surfaces or media. These properties allow mirrors and lenses to form images.',
            content: `<p>Light behaves in predictable ways that allow us to design optical systems — from simple mirrors to sophisticated telescopes. Mastering these rules opens the door to understanding cameras, the human eye, and optical instruments.</p>
<h4>Laws of Reflection</h4>
<ol>
<li>Incident ray, reflected ray, and normal at the point of incidence all lie in the same plane.</li>
<li>Angle of incidence = Angle of reflection.</li>
</ol>
<h4>Regular vs Diffuse Reflection</h4>
<p><strong>Regular (Specular):</strong> Parallel rays reflect as parallel rays — mirror-like surface (polished metal). Clear images. <strong>Diffuse reflection:</strong> Rough surface reflects in all directions — no clear image but allows objects to be seen from all angles. Most everyday objects show diffuse reflection.</p>
<h4>Refraction</h4>
<p>Light bends when passing between media of different optical density. Speed changes → direction changes (unless perpendicular). Causes: apparent depth of water objects, mirages, rainbows.</p>
<h4>Dispersion</h4>
<p>White light contains all colours. Prism separates them because different colours refract at different angles. VIBGYOR: Violet (bends most), Indigo, Blue, Green, Yellow, Orange, Red (bends least).</p>`,
            qa: [
              { q: 'What is the difference between regular and diffuse reflection? Why can you see your image in a mirror but not in a wall?', a: 'Mirror (polished surface): regular reflection — parallel rays reflect as parallel rays, forming a clear, defined image. Wall (rough surface): diffuse reflection — each tiny bump reflects light in a different direction. You can see the wall because scattered light reaches your eyes, but no clear image forms.' },
              { q: 'Why does a pencil appear bent when placed in water?', a: 'Refraction: light from the portion of pencil in water travels from water (denser, slower light) to air (rarer, faster light) — it bends away from the normal. Our brain assumes light travels in straight lines, so the pencil appears to be at a different, shallower position — it looks bent at the water surface.' },
              { q: 'What is a rainbow and how does it form?', a: 'A rainbow forms when sunlight is dispersed by water droplets in the atmosphere. Steps: (1) Light enters droplet and refracts (bends); (2) Reflects inside the droplet (total internal reflection); (3) Refracts again as it exits. Different colours exit at different angles (violet 40°, red 42°). We see a coloured arc — red on outside, violet on inside.' },
              { q: 'Multiple images in parallel mirrors — how many images form?', a: 'When an object is placed between two parallel plane mirrors, infinite images theoretically form (each image reflects in the opposite mirror). In practice, some light is absorbed at each reflection, so the images get dimmer and eventually disappear. In two mirrors at 90°: 3 images. At 60°: 5 images. Formula: n = (360°/angle) − 1.' },
            ]
          },
          {
            id: 'stars-solar-system-8',
            title: 'Stars and the Solar System',
            subtopics: 'Solar system, Planets, Sun, Stars, Moon, Comets, Meteors, Constellations',
            definition: 'The solar system consists of the Sun and all objects orbiting it — 8 planets, dwarf planets, moons, asteroids, comets, and meteoroids. The Sun is a medium-sized star at the centre, providing light and heat to all planets.',
            content: `<p>We live on a tiny blue dot orbiting an average star in one of 2 trillion galaxies. Understanding the solar system gives us perspective on our place in the universe.</p>
<h4>The Solar System</h4>
<p>8 planets orbit the Sun: Mercury, Venus, Earth, Mars (inner, rocky), Jupiter, Saturn, Uranus, Neptune (outer, gas giants). Pluto was reclassified as a dwarf planet in 2006.</p>
<h4>Key Facts</h4>
<ul>
<li>The Sun: 99.8% of solar system mass. 1.4 million km diameter (109 × Earth). Core temperature ~15 million°C.</li>
<li>Moon: Earth's only natural satellite. Reflects sunlight (does not emit light). Distance: ~384,000 km. Phases due to changing angle of sunlit surface visible from Earth.</li>
<li>Venus: hottest planet (460°C) due to greenhouse gases, not closest to Sun.</li>
<li>Jupiter: largest planet. Great Red Spot (storm larger than Earth, over 300 years old).</li>
</ul>
<h4>Celestial Objects</h4>
<ul>
<li><strong>Stars:</strong> Self-luminous (produce their own light by nuclear fusion). Appear to twinkle due to atmospheric refraction.</li>
<li><strong>Comets:</strong> Icy bodies that develop tails when near the Sun (ice evaporates). Halley's comet: appears every 75-76 years.</li>
<li><strong>Meteors and Meteorites:</strong> Meteors burn in atmosphere (shooting stars); meteorites reach Earth's surface.</li>
<li><strong>Constellations:</strong> Patterns of stars — Orion, Ursa Major (Big Dipper), Cassiopeia.</li>
</ul>`,
            qa: [
              { q: 'Why does the Moon appear to change shape during the month?', a: 'The Moon does not change shape — it is always spherical. What changes is the angle at which we see the sunlit half. As the Moon orbits Earth (27.3 days), we see different fractions of the illuminated half: New Moon (Moon between Earth and Sun, dark side faces us), Quarter Moon, Full Moon (Earth between Moon and Sun, fully illuminated half faces us).' },
              { q: 'What is the difference between a star and a planet?', a: 'Star: self-luminous — generates energy by nuclear fusion (hydrogen → helium) in its core; very large; examples: Sun, Sirius, Polaris. Planet: orbits a star, does not generate its own light (reflects starlight), much smaller than stars. Nine distinguishing features: mass, fusion, luminosity. Stars twinkle; planets generally don\'t (they appear as discs, not points).' },
              { q: 'Why is Venus the hottest planet despite Mercury being closer to the Sun?', a: 'Mercury has almost no atmosphere — heat from the Sun escapes back to space easily. Venus has a dense atmosphere of 96% CO₂ — this creates an extreme greenhouse effect that traps heat. Venus\'s surface temperature is ~460°C (hot enough to melt lead), compared to Mercury\'s average of 167°C (though its dark side reaches −180°C).' },
              { q: 'What are constellations? Name two and their significance.', a: 'Constellations are apparent patterns formed by groups of stars as seen from Earth (the stars are not actually close together in space). Orion: visible in winter nights, distinctive 3-star belt; used to locate other stars (Orion\'s belt points to Sirius, the brightest star). Ursa Major (Great Bear / Big Dipper): 7 stars in a ladle shape; the two "pointer stars" point to Polaris (North Star) — used for navigation.' },
            ]
          },
        ]
      },
      history: {
        id: 'history', topics: [
          {
            id: 'how-when-where',
            title: 'How, When and Where',
            subtopics: 'Colonial administration, Dates in history, Official records',
            definition: 'Historical study involves understanding how the past is recorded and interpreted — examining dates, official documents, and how the perspective of record-keepers shapes history.',
            content: `<p>History is not just a list of dates and events — it is the story of people, power, and change. But who tells this story, and from whose perspective, matters enormously.</p>
<h4>How Do We Periodise History?</h4>
<p>British historians divided Indian history into: Ancient, Medieval, and Modern periods, often based on the religion of rulers. Indian historians now question this — was religious identity the only important factor?</p>
<h4>The Role of Dates</h4>
<p>Dates help us sequence events and understand cause and effect. However, a single date (like 1757 — Battle of Plassey) has different meanings for different people. For the British, it marked expansion of empire; for Indians, the beginning of colonial rule.</p>
<h4>Colonial Records and Their Limitations</h4>
<p>The British kept detailed records — surveys, census data, administrative reports. These are valuable sources but reflect a colonial viewpoint. They often ignore the perspective of ordinary Indians, women, and non-literate communities.</p>`,
            qa: [
              { q: 'Why did British historians divide Indian history into "Hindu," "Muslim," and "British" periods?', a: 'British historians believed the religion of rulers was the most important factor shaping history. This oversimplification ignores social, economic, and cultural changes within each period.' },
              { q: 'What are the problems with using colonial records as historical sources?', a: 'Colonial records were written from a British perspective and served administrative purposes. They may be biased, ignore Indian viewpoints, and neglect the experiences of ordinary people, women, and tribal communities.' },
              { q: 'What is the significance of the Battle of Plassey (1757)?', a: 'The Battle of Plassey (1757) was fought between the British East India Company and Siraj ud-Daulah (Nawab of Bengal). British victory marked the beginning of British political control in India.' },
            ]
          },
          {
            id: 'when-people-rebel-1857',
            title: 'When People Rebel — 1857',
            subtopics: '1857 Uprising, Causes, Key leaders, Outcome, Colonial response',
            definition: 'The Revolt of 1857 was a major armed uprising against British rule in India, starting as a sepoy mutiny but expanding into a wider rebellion involving peasants, rulers, and civilians.',
            content: `<p>The Revolt of 1857 shook the British Empire to its core. For a time, it seemed British rule in India might end. Though it failed, it changed everything — ending Company rule and beginning Crown rule.</p>
<h4>Causes of the 1857 Revolt</h4>
<ul>
<li><strong>Military cause:</strong> Introduction of Enfield rifles with greased cartridges (cow and pig fat — offensive to Hindu and Muslim sepoys). Sepoys had to bite these cartridges.</li>
<li><strong>Political:</strong> Doctrine of Lapse — British annexed states without male heirs (Jhansi, Awadh, Satara).</li>
<li><strong>Economic:</strong> Exploitation of Indian economy, heavy taxes, destruction of traditional crafts.</li>
<li><strong>Social/Religious:</strong> Fear of forced conversion to Christianity, reforms seen as attacks on Indian culture.</li>
</ul>
<h4>Key Leaders</h4>
<p>Rani Lakshmibai (Jhansi), Bahadur Shah Zafar (last Mughal emperor), Nana Sahib (Kanpur), Tatya Tope (military commander), Begum Hazrat Mahal (Awadh).</p>
<h4>Outcome</h4>
<p>Revolt was suppressed by 1858. British Parliament passed the Government of India Act 1858 — ended East India Company rule, India came directly under the British Crown (Queen Victoria).</p>`,
            qa: [
              { q: 'What was the immediate cause of the 1857 Revolt?', a: 'The immediate cause was the introduction of the new Enfield rifle. Its cartridges were greased with cow and pig fat. Soldiers (both Hindu and Muslim) had to bite these cartridges to load the rifle — deeply offensive to both communities.' },
              { q: 'What was the Doctrine of Lapse?', a: 'The Doctrine of Lapse was a British policy under Lord Dalhousie. If a ruler died without a male heir, the state was "lapsed" (annexed) into British territory rather than allowing adopted heirs. Jhansi, Satara, and Awadh were annexed this way, angering many rulers.' },
              { q: 'How did the British respond after the 1857 revolt was suppressed?', a: 'British passed the Government of India Act 1858, ending East India Company rule. India came directly under the British Crown (Queen Victoria became "Empress of India" in 1877). Policies changed — more inclusive of Indian rulers and religious sensitivities.' },
              { q: 'Who was Rani Lakshmibai and why is she remembered?', a: 'Rani Lakshmibai was the queen of Jhansi. Her state was annexed by the British under the Doctrine of Lapse (no male heir). She led the defence of Jhansi herself, fighting on horseback with her infant son strapped to her back. She died in battle in 1858 and is celebrated as a symbol of resistance.' },
            ]
          },
          {
            id: 'women-caste-reform',
            title: 'Women, Caste and Reform',
            subtopics: 'Social reform movements, Sati abolition, Widow remarriage, Caste discrimination, Reformers',
            definition: 'The 19th century saw powerful social reform movements in India challenging practices like sati, child marriage, and caste discrimination, led by reformers who combined modern education with Indian tradition.',
            content: `<p>Colonial India was not just a political story — it was a time of deep social change. Reformers challenged age-old practices, and the debates they started about equality and rights continue today.</p>
<h4>Issues of the Time</h4>
<ul>
<li>Sati (widow self-immolation on husband's funeral pyre)</li>
<li>Child marriage and purdah (seclusion of women)</li>
<li>Denial of education to women</li>
<li>Caste discrimination, untouchability</li>
</ul>
<h4>Key Reformers</h4>
<ul>
<li><strong>Raja Ram Mohan Roy:</strong> Founded Brahmo Samaj. Campaigned against sati — led to the Sati Abolition Act 1829.</li>
<li><strong>Ishwarchandra Vidyasagar:</strong> Campaigned for widow remarriage — Hindu Widow Remarriage Act 1856.</li>
<li><strong>Jyotirao Phule:</strong> Fought caste discrimination. Founded schools for low-caste children and girls.</li>
<li><strong>Pandita Ramabai:</strong> Educated widow who established homes for destitute women.</li>
<li><strong>B.R. Ambedkar:</strong> Led movement against untouchability; converted to Buddhism.</li>
</ul>`,
            qa: [
              { q: 'Who was Raja Ram Mohan Roy and what did he achieve?', a: 'Raja Ram Mohan Roy was a 19th century Bengali reformer who founded the Brahmo Samaj. He campaigned vigorously against sati (widow burning), which led to the British passing the Bengal Sati Regulation Act in 1829, making sati illegal.' },
              { q: 'What was the significance of the Hindu Widows\' Remarriage Act 1856?', a: 'This act (championed by Ishwarchandra Vidyasagar) allowed Hindu widows to legally remarry. Previously, widows were forbidden to remarry regardless of age (even child widows). It was a landmark reform improving the status of women in Hindu society.' },
              { q: 'Who was Jyotirao Phule and what social evil did he fight?', a: 'Jyotirao Phule (1827-1890) was a social reformer from Maharashtra who fought caste discrimination. He opened schools for girls and lower-caste children (defying upper-caste opposition) and founded Satyashodhak Samaj to challenge Brahmin dominance.' },
              { q: 'What is meant by "untouchability" and who fought against it?', a: 'Untouchability is the practice of treating people of the lowest castes (Dalits) as polluting — denying them access to wells, temples, schools, and forcing them to do the most degrading work. Dr. B.R. Ambedkar — himself a Dalit — led major campaigns against untouchability and drafted India\'s Constitution that abolished it.' },
            ]
          },
          {
            id: 'making-national-movement',
            title: 'The Making of the National Movement',
            subtopics: 'Congress formation, Moderates, Extremists, Partition of Bengal, Swadeshi, Gandhi',
            definition: 'The Indian National Congress (founded 1885) led India\'s freedom struggle through different phases — moderate constitutional demands, extremist mass agitation, and Gandhian non-violent mass movements.',
            content: `<p>The journey from petitions and prayers to Gandhi's salt march shows how India's freedom movement evolved, becoming broader, more radical, and ultimately unstoppable.</p>
<h4>Formation of INC (1885)</h4>
<p>Indian National Congress founded by A.O. Hume (retired British civil servant) with the aim of creating a platform for educated Indians to discuss political matters. Early members: Dadabhai Naoroji, Bal Gangadhar Tilak, Gopal Krishna Gokhale.</p>
<h4>Moderates vs Extremists</h4>
<p><strong>Moderates</strong> (Gokhale, Naoroji): Believed in petitions, constitutional demands, trust in British goodwill. <strong>Extremists</strong> (Tilak, Lajpat Rai, Bipin Pal — "Lal-Bal-Pal"): Demanded complete self-rule (Swaraj). "Freedom is my birthright and I shall have it" — Tilak.</p>
<h4>Partition of Bengal (1905) and Swadeshi</h4>
<p>Lord Curzon partitioned Bengal — seen as divide-and-rule. Response: Swadeshi Movement — boycott of British goods, use of Indian-made goods. Massive public mobilisation.</p>
<h4>Gandhi's Return (1915)</h4>
<p>Gandhi returned from South Africa, introducing non-violent mass civil disobedience — involving peasants, workers, and women in the freedom struggle.</p>`,
            qa: [
              { q: 'What were the differences between the Moderates and Extremists within the Congress?', a: 'Moderates (Gokhale, Naoroji) wanted gradual reform through petitions and constitutional methods, trusting British fairness. Extremists (Tilak, Bipin Pal) demanded complete Swaraj (self-rule), used mass agitation, and did not trust the British.' },
              { q: 'What was the Swadeshi Movement and what triggered it?', a: 'The Swadeshi (own country) movement was triggered by Lord Curzon\'s partition of Bengal in 1905. Indians responded by boycotting British-made goods and promoting Indian industries. It was the first mass agitation involving ordinary people.' },
              { q: 'What was the Non-Cooperation Movement of 1920–22?', a: 'Gandhi\'s first mass movement — Indians surrendered British titles and honours, boycotted legislatures, courts, and schools. Millions participated. Called off by Gandhi after the Chauri Chaura violence (1922) where a mob burned a police station killing 22 policemen.' },
              { q: 'What made Gandhi\'s approach to the freedom struggle revolutionary?', a: 'Gandhi made the freedom struggle a mass movement by involving peasants, workers, and women — not just educated elites. His method of non-violent civil disobedience (Satyagraha) was a unique strategy that exposed British moral hypocrisy to the world.' },
            ]
          },
        ]
      },
      geography: {
        id: 'geography', topics: [
          {
            id: 'resources',
            title: 'Resources',
            subtopics: 'Types of resources, Natural and human-made, Renewable and non-renewable, Conservation',
            definition: 'Resources are anything that can be used to satisfy human needs. They can be natural (land, water, forests, minerals) or human-made (roads, buildings, technology). Sustainable use ensures resources for future generations.',
            content: `<p>The world has finite resources but growing human needs. How we classify, use, and conserve resources will determine whether future generations live well or face scarcity.</p>
<h4>Types of Resources</h4>
<ul>
<li><strong>Natural resources:</strong> Found in nature — land, water, forests, minerals, sunlight, wind.</li>
<li><strong>Human-made resources:</strong> Created by humans using natural resources — roads, buildings, machines.</li>
<li><strong>Human resources:</strong> Human knowledge, skills, and technology.</li>
</ul>
<h4>Renewable vs Non-renewable</h4>
<p><strong>Renewable:</strong> Replenish naturally — solar energy, wind, water, forests (with time). <strong>Non-renewable:</strong> Take millions of years to form — coal, petroleum, natural gas, minerals.</p>
<h4>Conservation</h4>
<p>Using resources wisely so future generations also have access. Methods: reduce, reuse, recycle; alternative energy sources; afforestation; water harvesting.</p>`,
            qa: [
              { q: 'Why are coal and petroleum called non-renewable resources?', a: 'Coal and petroleum take millions of years to form from dead organic matter. Once used, they cannot be replaced on a human timescale. They are being consumed much faster than nature can create them.' },
              { q: 'What is sustainable development?', a: 'Sustainable development means meeting present needs without compromising the ability of future generations to meet their own needs. It balances economic growth with environmental protection and social equity.' },
              { q: 'Give two examples each of natural and human-made resources.', a: 'Natural resources: water, forests, coal, sunlight. Human-made resources: roads, dams, machinery, electricity grids.' },
              { q: 'What is the 3R principle of resource conservation?', a: 'Reduce (use less resources), Reuse (use items multiple times), Recycle (convert waste into new products). These principles help conserve non-renewable resources and reduce waste and pollution.' },
            ]
          },
          {
            id: 'agriculture-8',
            title: 'Agriculture',
            subtopics: 'Types of farming, Major crops, Green Revolution, Food security, Agricultural development',
            definition: 'Agriculture is the cultivation of soil for growing crops and raising animals. It is the primary source of food and employs about half of India\'s workforce. The Green Revolution transformed Indian food production.',
            content: `<p>India was once dependent on food aid. After the Green Revolution of the 1960s-70s, it became self-sufficient. Understanding agricultural geography explains what grows where and why.</p>
<h4>Types of Farming</h4>
<ul>
<li><strong>Subsistence farming:</strong> Farmer grows food mainly for family use. Small plots, traditional tools.</li>
<li><strong>Commercial farming:</strong> Growing crops for sale in market. Large scale, modern machinery.</li>
<li><strong>Plantation farming:</strong> Large estates growing one crop (tea, coffee, rubber).</li>
<li><strong>Mixed farming:</strong> Crops and livestock raised together.</li>
</ul>
<h4>Major Crop Regions</h4>
<p>Rice: heavy rainfall areas — West Bengal, Assam, Tamil Nadu. Wheat: Punjab, Haryana (rabi crop). Cotton: Deccan plateau (black soil — Maharashtra, Gujarat). Tea: Assam, Darjeeling (cool, humid slopes). Jute: West Bengal, Bihar.</p>
<h4>Green Revolution</h4>
<p>1960s: Introduction of HYV (high-yield variety) seeds, fertilisers, irrigation, and modern tools. Led by M.S. Swaminathan. India went from food deficit to food surplus.</p>`,
            qa: [
              { q: 'What is the Green Revolution?', a: 'The Green Revolution (1960s-70s) was the introduction of high-yielding variety (HYV) seeds, chemical fertilisers, pesticides, and modern irrigation to Indian agriculture. Led by M.S. Swaminathan, it dramatically increased wheat and rice production, making India self-sufficient in food.' },
              { q: 'Why is Punjab called the "Granary of India"?', a: 'Punjab and Haryana were the main beneficiaries of the Green Revolution. Their flat land, good irrigation (rivers and canals), and adoption of HYV wheat varieties led to massive wheat production — they supply a large share of India\'s food grain to the government buffer stock.' },
              { q: 'What factors determine what crops grow in a region?', a: 'Key factors: Climate (temperature, rainfall), Soil type (alluvial, black, red), Topography (flat for mechanisation), Availability of water (irrigation), Market access, and Tradition/knowledge of farmers.' },
              { q: 'What are the negative consequences of the Green Revolution?', a: 'Over-dependence on chemical fertilisers and pesticides polluted soil and water. Excessive groundwater use lowered water tables. Monoculture (growing one crop) reduced biodiversity. Benefits were unequal — larger farmers benefited more than small farmers.' },
            ]
          },
          {
            id: 'industries-geo-8',
            title: 'Industries',
            subtopics: 'Types of industries, Location factors, Manufacturing, Textiles, Iron and steel, IT industry',
            definition: 'Industries are economic activities involving the transformation of raw materials into goods (manufacturing) or providing services. Their location is determined by factors like raw materials, labour, markets, power, and transport.',
            content: `<p>Industries are the engine of a country's economy. India's industrial history spans from handloom cottage industries to IT and pharmaceutical giants — understanding industry helps us understand development.</p>
<h4>Classification of Industries</h4>
<ul>
<li><strong>By size:</strong> Cottage (home-based), small-scale, large-scale</li>
<li><strong>By type:</strong> Agro-based (cotton, sugar, jute), Mineral-based (iron, steel, cement), Forest-based (paper, furniture), Marine-based (fish processing)</li>
</ul>
<h4>Factors of Industrial Location</h4>
<p>Raw materials, labour, power (coal, electricity), transport (roads, railways), markets, water supply, government policy.</p>
<h4>Important Industries in India</h4>
<ul>
<li><strong>Iron and Steel:</strong> Jamshedpur (Tata), Bhilai, Rourkela. Near coal and iron ore (Jharkhand, Chhattisgarh, Odisha).</li>
<li><strong>Textile:</strong> Cotton mills in Mumbai, Ahmedabad ("Manchester of India"). Silk in Mysore, Kanchipuram.</li>
<li><strong>Information Technology:</strong> Bangalore ("Silicon Valley of India"), Hyderabad, Pune, Chennai. Export-oriented, high growth.</li>
</ul>`,
            qa: [
              { q: 'Why is Jamshedpur a major steel centre?', a: 'Jamshedpur (Jharkhand) has: iron ore from Singhbhum, coal from Jharia (Dhanbad), limestone from Chaibasa, water from Subarnarekha and Kharkai rivers, good railway connections to ports and markets. These factors made it ideal for Tata\'s steel plant (established 1907).' },
              { q: 'Why is Bangalore called the Silicon Valley of India?', a: 'Bangalore has: a large pool of well-educated engineers (IISc, IIM, many engineering colleges), pleasant climate (1000m elevation), good infrastructure, early government investment in electronics (ISRO, HAL, BEL), and is now home to hundreds of IT companies (Infosys, Wipro, TCS offices). Its IT industry employs millions and earns billions in exports.' },
              { q: 'What is the difference between agro-based and mineral-based industries?', a: 'Agro-based industries use agricultural produce as raw materials: cotton textiles (cotton), sugar mills (sugarcane), jute industry (jute), edible oil (oilseeds). Mineral-based industries use mineral resources: iron and steel (iron ore + coal), cement (limestone + clay), copper and aluminium smelting.' },
              { q: 'How does the IT industry differ from traditional manufacturing industries?', a: 'IT industry: requires educated workforce not raw materials; can locate anywhere with good internet and airport; exports services not physical goods; generates high value with less environmental impact; employs highly paid workers. Traditional manufacturing: needs raw materials nearby, heavy infrastructure, large factories, more energy-intensive, affects more blue-collar workers.' },
            ]
          },
          {
            id: 'mineral-resources-8',
            title: 'Mineral and Power Resources',
            subtopics: 'Types of minerals, Mining, Power resources, Conventional vs non-conventional',
            definition: 'Minerals are naturally occurring substances with definite chemical composition. They are essential for industry and must be mined. Power resources (coal, petroleum, hydroelectric) drive modern economies. Conservation is critical as most are non-renewable.',
            content: `<p>Every metal object, every electronic device, every car — all depend on minerals mined from the Earth. Managing these finite resources responsibly is one of the key challenges of the 21st century.</p>
<h4>Types of Minerals</h4>
<ul>
<li><strong>Ferrous metals:</strong> Contain iron — iron ore, manganese, chromite. Essential for steel industry.</li>
<li><strong>Non-ferrous metals:</strong> No iron — copper, bauxite (aluminium), gold, silver, lead, zinc.</li>
<li><strong>Non-metallic minerals:</strong> Mica, limestone, gypsum, potash.</li>
<li><strong>Energy minerals:</strong> Coal, petroleum, uranium.</li>
</ul>
<h4>Mining in India</h4>
<p>Jharkhand, Chhattisgarh, Odisha — iron ore, coal, manganese. Rajasthan — zinc, lead, copper. Kerala — mineral sands (thorium). Mining provides livelihoods but displaces communities and harms environment.</p>
<h4>Power Resources</h4>
<p><strong>Conventional:</strong> Coal (53% of India's power), petroleum, natural gas, hydroelectric. <strong>Non-conventional (Renewable):</strong> Solar, wind, tidal, geothermal, biogas. India is expanding renewable capacity rapidly — solar parks in Rajasthan, wind farms in Tamil Nadu and Gujarat.</p>`,
            qa: [
              { q: 'What is the difference between metallic and non-metallic minerals?', a: 'Metallic minerals: contain metals that can be extracted — iron ore, copper ore, bauxite, gold. They are usually found in igneous and metamorphic rocks. Non-metallic minerals: do not contain extractable metals — limestone, mica, salt, gypsum, coal. They are often used directly or in manufacturing.' },
              { q: 'Why is mica important for industry?', a: 'Mica is an excellent insulator and heat-resistant mineral. It was heavily used in electrical equipment to prevent short circuits. Found mainly in Jharkhand (world\'s largest supplier). However, mining has been associated with child labour in the past — a serious human rights concern now being addressed.' },
              { q: 'Why is India expanding solar and wind energy rapidly?', a: 'India imports 80% of its petroleum (expensive, affects trade balance, price uncertainty). Coal is polluting and non-renewable. India has abundant sunshine (especially Rajasthan, Gujarat) and wind (coastal Tamil Nadu, Gujarat, Karnataka). Solar and wind are now cheaper than coal per unit in India. National target: 500 GW renewable capacity by 2030. Creates green jobs.' },
              { q: 'What is open-cast mining and what are its environmental impacts?', a: 'Open-cast (surface) mining: entire surface is stripped away to access minerals close to the surface (coal, iron ore). It is cheaper than underground mining. Environmental impacts: destroys vegetation and topsoil; creates large pits (like Jharia coal mines, Bailadila iron ore mines); pollutes water and air (dust); displaces wildlife and communities; long-term land degradation.' },
            ]
          },
        ]
      },
      civics: {
        id: 'civics', topics: [
          {
            id: 'indian-constitution',
            title: 'The Indian Constitution',
            subtopics: 'Why we need a constitution, Preamble, Fundamental Rights, Directive Principles, Federalism',
            definition: 'A constitution is the supreme law of a country, laying out the fundamental principles, rights, and structure of government. India\'s Constitution, drafted by a Constituent Assembly led by Dr. B.R. Ambedkar, came into effect on January 26, 1950.',
            content: `<p>India's Constitution is the longest written constitution in the world. It took 2 years, 11 months, and 17 days to draft. It has guided the world's largest democracy for over 70 years.</p>
<h4>Why We Need a Constitution</h4>
<p>A constitution sets rules that prevent any person or group from misusing power. It guarantees rights to citizens and lays down obligations of the state.</p>
<h4>The Preamble</h4>
<p>The Preamble declares India a Sovereign, Socialist, Secular, Democratic Republic. It promises Justice, Liberty, Equality, and Fraternity to all citizens.</p>
<h4>Fundamental Rights (Part III)</h4>
<ul>
<li>Right to Equality (Articles 14-18)</li>
<li>Right to Freedom (Articles 19-22) — speech, movement, profession</li>
<li>Right against Exploitation (Articles 23-24)</li>
<li>Right to Freedom of Religion (Articles 25-28)</li>
<li>Cultural and Educational Rights (Articles 29-30)</li>
<li>Right to Constitutional Remedies (Article 32) — Dr. Ambedkar called this the "heart and soul" of the Constitution</li>
</ul>`,
            qa: [
              { q: 'What is the Preamble of the Indian Constitution?', a: 'The Preamble is an introductory statement declaring India a Sovereign, Socialist, Secular, Democratic Republic. It states the objectives: Justice (social, economic, political), Liberty (of thought and expression), Equality (of status and opportunity), and Fraternity.' },
              { q: 'What are Fundamental Rights?', a: 'Fundamental Rights are basic rights guaranteed by the Constitution to all Indian citizens. They are enforceable by courts. They include: Right to Equality, Right to Freedom, Right against Exploitation, Right to Freedom of Religion, and Right to Constitutional Remedies.' },
              { q: 'Why did Dr. Ambedkar call Article 32 the "heart and soul" of the Constitution?', a: 'Article 32 gives citizens the right to move the Supreme Court if their Fundamental Rights are violated (Right to Constitutional Remedies). Without this enforcement mechanism, other rights would be meaningless. This is why Ambedkar considered it the most important article.' },
              { q: 'What is meant by "secular" in the Indian Constitution?', a: 'Secular means the state has no official religion. The government treats all religions equally — it neither promotes nor discriminates against any religion. Citizens are free to follow any religion. The state keeps religion separate from government functions.' },
            ]
          },
          {
            id: 'judiciary',
            title: 'Judiciary',
            subtopics: 'Supreme Court, High Courts, District Courts, Independence of judiciary, PIL',
            definition: 'The judiciary is the system of courts that interprets laws and administers justice. India has an independent judiciary with the Supreme Court at the top, High Courts in states, and District Courts at the local level.',
            content: `<p>An independent judiciary is the guardian of the Constitution and citizens' rights. It is the institution where any person — rich or poor — can seek justice.</p>
<h4>Structure of the Indian Judiciary</h4>
<ul>
<li><strong>Supreme Court:</strong> Highest court. Final authority on constitutional matters. 34 judges including Chief Justice of India.</li>
<li><strong>High Courts:</strong> Each state has a High Court. Hears appeals from lower courts. Can issue writs for Fundamental Rights.</li>
<li><strong>District Courts:</strong> At district level. First court of appeal from lower courts.</li>
<li><strong>Lok Adalats, Family Courts, Consumer Forums:</strong> Specialised fast-track courts.</li>
</ul>
<h4>Independence of the Judiciary</h4>
<p>Judges cannot be removed by the government easily. They are not under the executive's control. This ensures impartial decisions based on law, not political pressure.</p>
<h4>Public Interest Litigation (PIL)</h4>
<p>Any citizen can file a PIL in the Supreme Court or High Court in the public interest — even if they personally aren't affected. Powerful tool for social justice.</p>`,
            qa: [
              { q: 'What is the Supreme Court of India?', a: 'The Supreme Court is the highest court in India. It is the final court of appeal for all civil and criminal matters. It has the power of judicial review — it can strike down any law that violates the Constitution. Its decisions are binding on all other courts.' },
              { q: 'Why must the judiciary be independent of the executive?', a: 'If the judiciary were controlled by the government (executive), it could not impartially judge cases involving the government. Independence ensures judges make decisions based on the Constitution and law — not political convenience — protecting citizens\' rights from government overreach.' },
              { q: 'What is a Public Interest Litigation (PIL)?', a: 'A PIL is a legal action filed in court for the enforcement of public interest or general welfare — even by a person not directly affected. It has been used to address issues like environmental pollution, bonded labour, police brutality, and corruption in India.' },
              { q: 'What is the difference between civil and criminal cases?', a: 'Civil cases: disputes between individuals or organisations (property, divorce, contract breach). The case is filed by the aggrieved party. Criminal cases: offences against society/state (theft, murder). The state prosecutes the accused. Punishment in criminal cases can include imprisonment.' },
            ]
          },
          {
            id: 'parliament-laws',
            title: 'Why Do We Need a Parliament?',
            subtopics: 'Functions of Parliament, Lok Sabha, Rajya Sabha, Making laws, Accountability, Opposition',
            definition: 'Parliament is the supreme law-making body in India. It consists of two Houses — Lok Sabha (House of the People) and Rajya Sabha (Council of States) — and the President. Parliament makes laws, controls the government, and represents the people.',
            content: `<p>Parliament is the heart of Indian democracy. It is where the people's elected representatives debate, question, and make laws that govern over a billion people. Understanding Parliament is understanding how Indian democracy works.</p>
<h4>Two Houses of Parliament</h4>
<p><strong>Lok Sabha (Lower House):</strong> 545 members, directly elected by voters, 5-year term. Controls the government — if PM loses majority here, government falls. Passes the budget.</p>
<p><strong>Rajya Sabha (Upper House):</strong> 245 members, indirectly elected (by state legislatures), continuous body (1/3 retire every 2 years). Represents states' interests.</p>
<h4>Functions of Parliament</h4>
<ul>
<li><strong>Legislation:</strong> Makes laws for the country.</li>
<li><strong>Control of Executive:</strong> Holds government accountable through Question Hour, debates, no-confidence motions.</li>
<li><strong>Budget approval:</strong> Government cannot spend money without Parliament's approval.</li>
<li><strong>Constituent power:</strong> Can amend the Constitution.</li>
</ul>
<h4>How a Bill Becomes a Law</h4>
<p>Bill introduced → discussed (debate) → passed in both Houses → President gives assent → becomes Act (law).</p>`,
            qa: [
              { q: 'What is the difference between Lok Sabha and Rajya Sabha?', a: 'Lok Sabha: 545 members, directly elected by people, 5-year term, more powerful (controls budget and government). Rajya Sabha: 245 members, elected by state legislatures, permanent body (members serve 6 years, 1/3 retire every 2 years). Rajya Sabha represents states and provides second look at legislation. Only Lok Sabha can pass money bills alone.' },
              { q: 'What is the Question Hour in Parliament?', a: 'The first hour of each Parliament session is Question Hour, when MPs question ministers about their work. Starred questions get verbal answers (ministers must be ready); unstarred get written answers. It is a powerful accountability tool — ministers must explain government policies and actions publicly. Zero Hour follows — MPs raise urgent public matters without prior notice.' },
              { q: 'Why does India need a Parliament if we have an elected Prime Minister?', a: 'The PM is just one person. Parliament ensures: (1) many voices (543 MPs) represent different regions, communities, parties; (2) the government is held accountable — PM must maintain majority support in Lok Sabha or resign; (3) laws are debated by many perspectives before passing; (4) no single person can accumulate unchecked power. Parliament is collective democracy in action.' },
            ]
          },
          {
            id: 'industries-8',
            title: 'Industries',
            subtopics: 'Types of industries, Factors of industrial location, Major industries in India, Industrial pollution',
            definition: 'Industries transform raw materials into finished goods using labour, capital, and technology. Industrial development drives economic growth and employment, but can also cause pollution and environmental damage.',
            content: `<p>Industrialisation transformed the world from an agricultural to a modern economy. India's industrial development since independence has created millions of jobs but also brought environmental challenges.</p>
<h4>Types of Industries</h4>
<ul>
<li><strong>By raw material:</strong> Agro-based (cotton textile, jute), Mineral-based (iron & steel, cement), Marine-based (fish products), Forest-based (paper, furniture).</li>
<li><strong>By size:</strong> Large-scale (steel plants, automobile), Medium, Small-scale (cottage industries — handlooms, pottery).</li>
<li><strong>By ownership:</strong> Public sector (government-owned — SAIL, ONGC), Private (Tata, Reliance), Joint (Maruti Suzuki).</li>
</ul>
<h4>Factors of Industrial Location</h4>
<p>Industries locate where: raw materials are available, power is cheap, transport is easy, labour is available, market is nearby, government policies are favourable, water is sufficient.</p>
<h4>Major Industries in India</h4>
<p>Iron & Steel (Bhilai, Bokaro, Rourkela), Cotton Textile (Mumbai, Ahmedabad — "Manchester of India"), Information Technology (Bengaluru — "Silicon Valley of India"), Sugar (UP, Maharashtra).</p>`,
            qa: [
              { q: 'Why is Bengaluru called the Silicon Valley of India?', a: 'Bengaluru has the highest concentration of IT companies in India — Infosys, Wipro, HCL, and offices of global companies (IBM, Google, Microsoft). Reasons: pleasant climate, many engineering colleges, early government investment in electronics (ISRO, HAL, BEL), and good infrastructure. It generates the largest share of India\'s software exports.' },
              { q: 'What are cottage industries and why are they important in India?', a: 'Cottage industries are small-scale industries run from homes using simple skills: handlooms, pottery, basket-weaving, Khadi (hand-spun cloth). They: employ millions in rural areas (including women and artisans), require little capital, preserve traditional crafts, and reduce urban migration. India\'s handloom sector employs ~43 lakh weavers, the second largest rural employer after agriculture.' },
              { q: 'How do industries cause pollution?', a: 'Air pollution: factory chimneys release SO₂, CO, particulate matter. Water pollution: industrial effluents discharged into rivers (the Ganga and Yamuna are heavily polluted this way). Soil pollution: dumping of toxic waste and chemicals. Noise pollution: heavy machinery. Solutions: effluent treatment plants, cleaner technologies, strict enforcement of pollution norms.' },
            ]
          },
        ]
      },
    }
  },

  // ── CLASS 9 ──────────────────────────────────────────────────
  'class-9': {
    id: 'class-9', label: 'Class 9', shortLabel: '9th',
    board: 'CBSE', emoji: '9️⃣',
    description: 'Number systems, Motion & Force, Democratic governance & Stories',
    subjects: {
      mathematics: {
        id: 'mathematics', topics: [
          {
            id: 'number-systems',
            title: 'Number Systems',
            subtopics: 'Irrational numbers, Real numbers, Number line representation, Laws of exponents',
            definition: 'The number system is a framework that includes all types of numbers — natural, whole, integers, rational, and irrational numbers — all together forming the set of Real Numbers (ℝ).',
            content: `<p>In Class 9, we expand our understanding of numbers beyond fractions and integers to include irrational numbers like √2 and π, completing the Real Number System.</p>
<h4>Classification of Numbers</h4>
<ul>
<li><strong>Natural numbers (N):</strong> 1, 2, 3, 4, ...</li>
<li><strong>Whole numbers (W):</strong> 0, 1, 2, 3, ...</li>
<li><strong>Integers (Z):</strong> ..., −2, −1, 0, 1, 2, ...</li>
<li><strong>Rational numbers (Q):</strong> Any number expressible as p/q (q ≠ 0). Includes terminating and recurring decimals.</li>
<li><strong>Irrational numbers:</strong> Cannot be expressed as p/q. Non-terminating, non-recurring decimals. Examples: √2, √3, π.</li>
<li><strong>Real numbers (R):</strong> Rational ∪ Irrational. Every point on the number line.</li>
</ul>
<h4>Representing Irrational Numbers on Number Line</h4>
<p>To represent √n on a number line: draw a right triangle with legs 1 and n, the hypotenuse = √(1+n). Using this, √2 can be marked exactly on the number line.</p>
<h4>Laws of Exponents for Real Numbers</h4>
<div class="formula">a^m × a^n = a^(m+n) | (a^m)^n = a^(mn) | a^(1/n) = ⁿ√a</div>`,
            qa: [
              { q: 'Is √4 rational or irrational?', a: '√4 = 2, which is a whole number and therefore rational. Not all square roots are irrational!' },
              { q: 'Represent √5 on a number line.', a: 'Draw right angle with legs √4=2 and 1. Hypotenuse = √(4+1) = √5. Or: draw OA = 2 units. At A erect AB ⊥ OA = 1 unit. OB = √5. Arc with radius OB from O marks √5 on number line.' },
              { q: 'Simplify: (125)^(2/3)', a: '125 = 5³. (5³)^(2/3) = 5^(3×2/3) = 5² = 25.' },
              { q: 'Find three irrational numbers between 2 and 3.', a: '√5 ≈ 2.236, √6 ≈ 2.449, √7 ≈ 2.646 — all are between 2 and 3, all irrational.' },
              { q: 'Rationalise the denominator: 5/√7', a: 'Multiply by √7/√7: (5√7)/7' },
            ]
          },
          {
            id: 'polynomials',
            title: 'Polynomials',
            subtopics: 'Degree, Zeroes, Remainder theorem, Factor theorem, Factorisations',
            definition: 'A polynomial is an algebraic expression with one or more terms where the variable has non-negative integer exponents. The degree is the highest power of the variable.',
            content: `<p>Polynomials are the workhorses of algebra. Every equation you'll solve in advanced mathematics involves polynomials. Understanding how to work with them opens doors to calculus, cryptography, and physics.</p>
<h4>Types by Degree</h4>
<ul>
<li>Degree 0: Constant (e.g., 7)</li>
<li>Degree 1: Linear (e.g., 3x + 5)</li>
<li>Degree 2: Quadratic (e.g., x² − 5x + 6)</li>
<li>Degree 3: Cubic (e.g., x³ + 2x² − x − 2)</li>
</ul>
<h4>Zeroes of a Polynomial</h4>
<p>The zero of a polynomial p(x) is a value of x for which p(x) = 0. A linear polynomial has one zero. A quadratic has at most two zeros.</p>
<h4>Remainder Theorem</h4>
<p>When polynomial p(x) is divided by (x − a), the remainder = p(a).</p>
<div class="formula">p(x) ÷ (x−a) → remainder = p(a)</div>
<h4>Factor Theorem</h4>
<p>(x − a) is a factor of p(x) if and only if p(a) = 0.</p>
<div class="example-box"><strong>Example:</strong> Is (x−2) a factor of x³−3x²+4?<br/>p(2) = 8−12+4 = 0. Yes, (x−2) is a factor.</div>`,
            qa: [
              { q: 'Find the zero of p(x) = 3x − 9', a: 'Set p(x) = 0: 3x − 9 = 0 → x = 3. Zero is 3.' },
              { q: 'Apply Remainder Theorem: find remainder when x³+3x²−x+1 is divided by (x−2)', a: 'p(2) = 8+12−2+1 = 19. Remainder = 19.' },
              { q: 'Factorise using Factor Theorem: x³−6x²+11x−6', a: 'Try p(1) = 1−6+11−6 = 0 ✓. So (x−1) is factor. Divide: x²−5x+6 = (x−2)(x−3). Full: (x−1)(x−2)(x−3).' },
              { q: 'Factorise: 8x³ + 27y³ using identity.', a: 'a³+b³ = (a+b)(a²−ab+b²). Here a=2x, b=3y. = (2x+3y)(4x²−6xy+9y²)' },
            ]
          },
          {
            id: 'coordinate-geometry',
            title: 'Coordinate Geometry',
            subtopics: 'Cartesian plane, Quadrants, Plotting points, Abscissa, Ordinate',
            definition: 'Coordinate geometry uses a pair of numbers (x, y) to locate any point on a flat plane using two perpendicular number lines (axes). It bridges algebra and geometry.',
            content: `<p>René Descartes invented coordinate geometry in the 17th century. Legend says he was lying in bed watching a fly on the ceiling and realised he could describe its position with two numbers. This simple idea united algebra and geometry.</p>
<h4>The Cartesian Plane</h4>
<p>Two perpendicular lines: x-axis (horizontal) and y-axis (vertical) intersect at origin O(0,0). Any point P is written as (x, y) — x is horizontal distance (abscissa), y is vertical distance (ordinate).</p>
<h4>The Four Quadrants</h4>
<ul>
<li>Quadrant I: (+, +)</li>
<li>Quadrant II: (−, +)</li>
<li>Quadrant III: (−, −)</li>
<li>Quadrant IV: (+, −)</li>
</ul>
<p>Points on axes: (3, 0) is on x-axis. (0, -5) is on y-axis.</p>`,
            qa: [
              { q: 'In which quadrant does the point (-3, 4) lie?', a: 'x is negative, y is positive → Quadrant II.' },
              { q: 'Plot the points A(2,3), B(-2,3), C(-2,-3), D(2,-3). What shape do they form?', a: 'All four points form a rectangle. AB is horizontal (same y), AD is vertical (same x). The figure is a rectangle with sides 4 and 6.' },
              { q: 'What are the coordinates of the origin?', a: 'The origin is (0, 0) — where the x-axis and y-axis intersect.' },
              { q: 'A point has abscissa 0. Where does it lie?', a: 'If abscissa (x-coordinate) = 0, the point lies on the y-axis.' },
            ]
          },
          {
            id: 'lines-angles-9',
            title: 'Lines and Angles',
            subtopics: 'Axioms, Theorems, Parallel lines, Transversal, Angle sum of triangle',
            definition: 'Lines and angles form the foundation of Euclidean geometry. Key results about parallel lines cut by a transversal and the angle sum property of triangles are used in most geometry proofs.',
            content: `<p>Euclid's geometry, set out in "Elements" around 300 BCE, is one of the greatest intellectual achievements in history. The rules about lines and angles are its building blocks.</p>
<h4>Basic Terms</h4>
<p>Line: infinite in both directions. Line segment: finite, two endpoints. Ray: one endpoint, infinite in one direction. Collinear points: on the same line.</p>
<h4>Key Theorems</h4>
<ul>
<li>Vertically opposite angles are equal (when two lines cross).</li>
<li>Linear pair sum = 180°.</li>
<li>If parallel lines are cut by a transversal: corresponding angles are equal, alternate interior angles are equal, co-interior angles are supplementary.</li>
</ul>
<h4>Angle Sum Property</h4>
<div class="formula">Sum of angles in a triangle = 180°</div>
<p>Exterior angle of triangle = sum of two non-adjacent interior angles.</p>`,
            qa: [
              { q: 'Two angles are vertically opposite. One is 65°. Find the other.', a: 'Vertically opposite angles are equal. The other angle is also 65°.' },
              { q: 'If co-interior angles are 70° and x°, find x (lines are parallel).', a: 'Co-interior angles are supplementary: 70 + x = 180 → x = 110°' },
              { q: 'An exterior angle of a triangle is 110°. One remote interior angle is 55°. Find the other.', a: 'Exterior angle = sum of two remote interior angles. 110 = 55 + other → other = 55°' },
              { q: 'Can a triangle have two obtuse angles?', a: 'No. If two angles were obtuse (each >90°), their sum would exceed 180°, leaving a negative value for the third angle — impossible. A triangle can have at most one obtuse angle.' },
            ]
          },
          {
            id: 'triangles-9',
            title: 'Triangles',
            subtopics: 'Congruence criteria, SAS, ASA, SSS, RHS, Properties of triangles',
            definition: 'Two triangles are congruent if they have exactly the same shape and size — all corresponding sides and angles are equal. Four criteria (SSS, SAS, ASA, RHS) establish congruence without measuring everything.',
            content: `<p>Triangle congruence is the backbone of geometry proofs. Once you prove two triangles are congruent, all corresponding parts are automatically equal — a powerful tool.</p>
<h4>Congruence Criteria</h4>
<ul>
<li><strong>SSS:</strong> Three sides equal → triangles are congruent.</li>
<li><strong>SAS:</strong> Two sides and the included angle equal.</li>
<li><strong>ASA:</strong> Two angles and the included side equal.</li>
<li><strong>AAS:</strong> Two angles and a non-included side equal.</li>
<li><strong>RHS:</strong> Right angle, hypotenuse, and one side equal (only for right-angled triangles).</li>
</ul>
<h4>Important Triangle Properties</h4>
<ul>
<li>In an isosceles triangle, angles opposite equal sides are equal.</li>
<li>In an equilateral triangle, all angles = 60°.</li>
<li>The sum of any two sides of a triangle is greater than the third side (triangle inequality).</li>
</ul>`,
            qa: [
              { q: 'What is the minimum information needed to prove two triangles congruent by SAS?', a: 'SAS requires: two sides and the INCLUDED angle (the angle between those two sides) to be equal. If the angle is not included between the given sides, SAS does not apply.' },
              { q: 'In triangle ABC, AB = AC. Prove angle B = angle C.', a: 'Draw angle bisector AD from A to BC at D. In triangles ABD and ACD: AB=AC (given), AD=AD (common), angle BAD = angle CAD (bisector). By SAS, triangle ABD ≅ ACD. Therefore angle B = angle C (CPCT).' },
              { q: 'Can SSA (two sides and non-included angle) prove congruence?', a: 'No — SSA is NOT a valid congruence criterion. Two triangles can have two sides and a non-included angle equal but still have different shapes. The only exception is RHS (right angle, hypotenuse, side).' },
              { q: 'What is CPCT and when is it used?', a: 'CPCT stands for Corresponding Parts of Congruent Triangles. Once two triangles are proved congruent (by SSS/SAS/ASA/RHS), all corresponding parts (sides and angles) are automatically equal — cited as "by CPCT."' },
            ]
          },
          {
            id: 'heron-formula',
            title: "Heron's Formula",
            subtopics: "Semi-perimeter, Heron's formula, Area of scalene triangle, Applications",
            definition: "Heron's formula calculates the area of any triangle when all three sides are known, without needing the height. It was discovered by the ancient Greek mathematician Heron of Alexandria.",
            content: `<p>Finding the area of a triangle normally requires the height. But what if you only know the three sides? Heron's 2000-year-old formula solves this elegantly.</p>
<h4>Formula</h4>
<div class="formula">s = (a + b + c) / 2 (semi-perimeter)</div>
<div class="formula">Area = √[s(s−a)(s−b)(s−c)]</div>
<p>Where a, b, c are the three sides of the triangle.</p>
<h4>Steps</h4>
<ol>
<li>Find s (semi-perimeter = half perimeter)</li>
<li>Calculate (s−a), (s−b), (s−c)</li>
<li>Multiply: s × (s−a) × (s−b) × (s−c)</li>
<li>Take the square root</li>
</ol>
<div class="example-box"><strong>Example:</strong> Triangle with sides 5, 6, 7 cm.<br/>s = (5+6+7)/2 = 9. Area = √[9×4×3×2] = √216 = 6√6 ≈ 14.7 cm²</div>`,
            qa: [
              { q: 'Find area of triangle with sides 13 cm, 14 cm, 15 cm.', a: 's = (13+14+15)/2 = 21. Area = √[21×8×7×6] = √7056 = 84 cm²' },
              { q: 'Find area of equilateral triangle with side 6 cm using Heron\'s formula.', a: 's = (6+6+6)/2 = 9. Area = √[9×3×3×3] = √243 = 9√3 ≈ 15.59 cm²' },
              { q: 'A rhombus has diagonals 10 cm and 24 cm. Find its area using Heron\'s formula.', a: 'Diagonals bisect at right angles: half-diagonals = 5 and 12. Each triangle has sides 5, 12, 13 (Pythagorean triplet). Area of one triangle = ½×5×12 = 30. Total = 4×30 = 120 cm².' },
              { q: 'Why can\'t we use ½ × base × height directly for all triangles?', a: 'We need the height perpendicular to the base. For scalene triangles in real life (like a plot of land), the height is often unknown or difficult to measure. Heron\'s formula uses only the three sides, which are easier to measure.' },
            ]
          },
          {
            id: 'statistics-9',
            title: 'Statistics',
            subtopics: 'Collection of data, Mean, Median, Mode, Range, Frequency distribution, Bar graph, Histogram',
            definition: 'Statistics is the science of collecting, organising, analysing, and interpreting data. Measures of central tendency (mean, median, mode) summarise data with a single representative value.',
            content: `<p>Statistics is used in medicine (clinical trials), government (census), business (market research), and sports (performance analysis). Understanding averages and data representation is a fundamental life skill.</p>
<h4>Mean (Arithmetic Average)</h4>
<div class="formula">Mean = Sum of all observations / Number of observations</div>
<h4>Median</h4>
<p>Middle value when data is arranged in order. If n is odd: median = (n+1)/2 th term. If n is even: median = average of n/2 th and (n/2+1) th terms.</p>
<h4>Mode</h4>
<p>The value that appears most frequently. A data set can have no mode, one mode (unimodal), or multiple modes.</p>
<h4>When to Use Which?</h4>
<p>Mean: when data has no extreme values (outliers). Median: when there are outliers (e.g., income data). Mode: for categorical data (most popular shoe size).</p>`,
            qa: [
              { q: 'Find mean of: 12, 15, 18, 22, 8', a: 'Mean = (12+15+18+22+8)/5 = 75/5 = 15' },
              { q: 'Find median of: 7, 3, 15, 11, 9, 4, 6', a: 'Arrange: 3, 4, 6, 7, 9, 11, 15. n=7 (odd). Median = (7+1)/2 th = 4th term = 7' },
              { q: 'A class of 30 scored: mean = 60. After adding one more student\'s marks of 90, what is the new mean?', a: 'Old total = 30 × 60 = 1800. New total = 1800 + 90 = 1890. New mean = 1890/31 ≈ 60.97' },
              { q: 'When is the median a better measure than mean?', a: 'When data has extreme values (outliers). Example: if 5 people earn ₹20,000, ₹25,000, ₹22,000, ₹24,000, and ₹1,00,000, the mean is ₹38,200 which doesn\'t represent most people. Median is ₹24,000 — more representative.' },
            ]
          },
          {
            id: 'linear-equations-two-variables-9',
            title: 'Linear Equations in Two Variables',
            subtopics: 'Equation ax+by+c=0, Graphical representation, Solutions, Lines through origin',
            definition: 'A linear equation in two variables is of the form ax + by + c = 0, where a, b, c are real numbers and a, b are not both zero. It has infinitely many solutions, represented graphically as a straight line.',
            content: `<p>Linear equations in two variables are the foundation of coordinate geometry and algebra. Every straight line on a graph is described by a linear equation.</p>
<h4>Standard Form</h4>
<div class="formula">ax + by + c = 0 (a and b are not both zero)</div>
<p>Examples: 2x + 3y = 6, x − y = 0, y = 5 (b≠0, a=0)</p>
<h4>Solutions</h4>
<p>A solution is an ordered pair (x, y) satisfying the equation. There are infinitely many solutions. Each solution is a point on the line.</p>
<h4>Graphing a Linear Equation</h4>
<p>1. Find two solutions (choose x, solve for y). 2. Plot the two points. 3. Draw a straight line through them.</p>
<div class="example-box"><strong>Example:</strong> x + y = 5. Solutions: (0,5), (2,3), (5,0). These all lie on the same straight line.</div>
<h4>Special Cases</h4>
<p>y = 0 → equation of x-axis. x = 0 → equation of y-axis. y = k (constant) → horizontal line. x = k → vertical line.</p>`,
            qa: [
              { q: 'Write two solutions of 2x + 3y = 12.', a: 'x=0: 3y=12 → y=4. Solution (0,4). x=3: 6+3y=12 → y=2. Solution (3,2).' },
              { q: 'The cost of 3 pencils and 2 pens is ₹20. Write this as a linear equation.', a: 'Let pencil cost = x, pen = y. 3x + 2y = 20. This is a linear equation in two variables.' },
              { q: 'Is (2,3) a solution of 4x − 3y = 0? Verify.', a: '4(2) − 3(3) = 8 − 9 = −1 ≠ 0. So (2,3) is NOT a solution of 4x − 3y = 0.' },
              { q: 'What does the graph of x = 3 look like?', a: 'x = 3 is a vertical line parallel to the y-axis, passing through the point (3,0). Every point on this line has x-coordinate = 3 (y can be anything).' },
            ]
          },
          {
            id: 'euclids-geometry-9',
            title: 'Introduction to Euclid\'s Geometry',
            subtopics: 'Euclid\'s definitions, Postulates, Axioms, Non-Euclidean geometry',
            definition: 'Euclid\'s geometry (300 BCE) is based on 5 postulates from which all geometric theorems are derived. It is the first example of a formal axiomatic system in mathematics.',
            content: `<p>Euclid's "Elements" (300 BCE) is one of the most influential books ever written — it established the idea of deriving all knowledge from a few self-evident axioms, influencing science, philosophy, and mathematics for 2000+ years.</p>
<h4>Euclid's Postulates</h4>
<ol>
<li>A straight line may be drawn from any one point to any other point.</li>
<li>A terminated line can be produced indefinitely.</li>
<li>A circle can be drawn with any centre and any radius.</li>
<li>All right angles are equal to one another.</li>
<li>If a straight line falls on two straight lines making the interior angles on the same side less than two right angles, the two straight lines, if produced indefinitely, will meet on that side.</li>
</ol>
<h4>Euclid's Axioms (Common Notions)</h4>
<p>Things equal to the same thing are equal to each other. If equals are added/subtracted/halved, they remain equal.</p>
<h4>Non-Euclidean Geometry</h4>
<p>The 5th postulate (parallel postulate) troubled mathematicians. When it was replaced, new geometries emerged: spherical geometry (on Earth's surface), hyperbolic geometry — used in Einstein's general relativity.</p>`,
            qa: [
              { q: 'What is the difference between an axiom and a postulate?', a: 'Axioms (common notions) are universal truths applicable to all subjects (e.g., "the whole is greater than the part"). Postulates are assumptions specific to geometry (e.g., "a line can be drawn between two points"). In modern mathematics, the terms are often used interchangeably.' },
              { q: 'State the Euclidean parallel postulate and its modern equivalent.', a: 'Euclid\'s 5th postulate: if a transversal falls on two lines making interior angles less than 180° on one side, those lines meet on that side. Modern equivalent (Playfair\'s axiom): through a point not on a given line, there is exactly one line parallel to the given line.' },
              { q: 'Is Euclid\'s geometry still relevant today?', a: 'Yes. Euclidean geometry accurately describes flat (2D/3D) space at human scales — building construction, engineering, everyday calculations. However, Einstein\'s general relativity showed that spacetime is curved (non-Euclidean) at cosmic scales and near massive objects. Euclid\'s work is also a model of formal axiomatic reasoning used throughout mathematics.' },
              { q: 'If A, B, C are collinear and B is between A and C, prove AC = AB + BC.', a: 'By Euclid\'s axiom: the whole is equal to the sum of its parts. Since B is between A and C, AB and BC together make up AC. Therefore AC = AB + BC (by the definition of betweenness and Euclid\'s axiom that the whole equals the sum of its parts).' },
            ]
          },
          {
            id: 'quadrilaterals-9',
            title: 'Quadrilaterals',
            subtopics: 'Types, Angle sum property, Parallelogram properties, Mid-point theorem',
            definition: 'A quadrilateral is a polygon with four sides and four vertices. The sum of all interior angles is 360°. Parallelograms, rectangles, rhombuses, and squares are special types with additional properties.',
            content: `<p>Quadrilaterals appear everywhere — tiles, windows, fields, rooms. Understanding their properties allows efficient calculation of areas and enables geometric proofs.</p>
<h4>Angle Sum Property</h4>
<div class="formula">Sum of all angles of a quadrilateral = 360°</div>
<h4>Types of Quadrilaterals</h4>
<ul>
<li><strong>Parallelogram:</strong> Opposite sides parallel and equal, opposite angles equal, diagonals bisect each other.</li>
<li><strong>Rectangle:</strong> Parallelogram with all angles = 90°. Diagonals equal and bisect each other.</li>
<li><strong>Rhombus:</strong> Parallelogram with all sides equal. Diagonals bisect each other perpendicularly.</li>
<li><strong>Square:</strong> Rectangle + Rhombus. All sides equal, all angles 90°, diagonals equal and perpendicular.</li>
<li><strong>Trapezium:</strong> One pair of opposite sides parallel.</li>
</ul>
<h4>Mid-Point Theorem</h4>
<p>The line segment joining the midpoints of two sides of a triangle is parallel to the third side and half its length.</p>`,
            qa: [
              { q: 'In parallelogram ABCD, angle A = 65°. Find all other angles.', a: 'Opposite angles equal: angle C = 65°. Adjacent angles supplementary: angle B = 180° - 65° = 115°. Angle D = 115°.' },
              { q: 'Prove that the diagonals of a parallelogram bisect each other.', a: 'In ΔAOB and ΔCOD: AB = CD (opposite sides), angle OAB = angle OCD (alternate angles, AB ∥ CD), angle AOB = angle COD (vertically opposite). By ASA: ΔAOB ≅ ΔCOD. So AO = CO and BO = DO. The diagonals bisect each other.' },
              { q: 'ABCD is a rectangle. AC = 2x + 5, BD = 3x - 2. Find x.', a: 'Diagonals of rectangle are equal: AC = BD. 2x+5 = 3x-2. x = 7.' },
              { q: 'State the mid-point theorem and verify with an example.', a: 'If D and E are midpoints of AB and AC in triangle ABC, then DE ∥ BC and DE = BC/2. Example: If BC = 10 cm, then DE = 5 cm. Proof uses the fact that BCED is a parallelogram when another parallel is drawn through D.' },
            ]
          },
          {
            id: 'circles-9',
            title: 'Circles — Theorems',
            subtopics: 'Chord properties, Angles subtended, Cyclic quadrilateral, Equal chords',
            definition: 'A circle is the locus of all points equidistant from a fixed centre. Circle theorems relate chords, arcs, and angles — equal chords are equidistant from centre; angles in the same segment are equal.',
            content: `<p>Circle theorems are elegant, powerful results used in architecture, design, and engineering. Mastering them requires understanding how chord length, arc, and angles relate to the centre.</p>
<h4>Key Theorems</h4>
<ul>
<li>Equal chords of a circle are equidistant from the centre.</li>
<li>The perpendicular from the centre to a chord bisects the chord.</li>
<li>Angle subtended by a chord at the centre = 2 × angle subtended at any point on the remaining arc.</li>
<li>Angles in the same segment (same arc) are equal.</li>
<li>Angle in a semicircle = 90° (Thales' theorem).</li>
<li>Opposite angles of a cyclic quadrilateral sum to 180°.</li>
</ul>
<div class="formula">∠AOB (centre) = 2 × ∠ACB (anywhere on arc)</div>`,
            qa: [
              { q: 'Two chords AB = 10cm and CD = 6cm are in a circle of radius 8cm. Which is closer to the centre?', a: 'Longer chords are closer to the centre. AB = 10cm > CD = 6cm, so AB is closer to the centre.' },
              { q: 'Angle ACB = 40°, where C is on the circle and AB is a chord. Find angle AOB (O = centre).', a: 'Angle at centre = 2 × angle at circumference on same arc. Angle AOB = 2 × 40° = 80°.' },
              { q: 'ABCD is a cyclic quadrilateral. Angle A = 80°, Angle B = 70°. Find angles C and D.', a: 'Opposite angles of cyclic quadrilateral supplement to 180°. Angle C = 180° - 80° = 100°. Angle D = 180° - 70° = 110°.' },
              { q: 'Prove that the angle in a semicircle is a right angle.', a: 'If AB is a diameter, then arc AB = 180° (semicircle). Angle at centre AOB = 180°. By the theorem (angle at centre = 2 × angle at circumference): angle ACB = 180°/2 = 90°.' },
            ]
          },
          {
            id: 'surface-areas-volumes-9',
            title: 'Surface Areas and Volumes',
            subtopics: 'Cuboid, Cylinder, Cone, Sphere — surface areas and volumes',
            definition: 'Surface area is the total area of all faces/surfaces of a 3D solid. Volume is the space occupied by a solid. These measurements are essential for practical applications in engineering, packaging, and construction.',
            content: `<p>From calculating paint needed for a room to designing fuel tanks, medicine capsules, and water pipes — surface area and volume calculations are indispensable in every engineering and design field.</p>
<h4>Cuboid</h4>
<div class="formula">TSA = 2(lb + bh + lh) | Volume = l × b × h</div>
<h4>Cube</h4>
<div class="formula">TSA = 6a² | Volume = a³</div>
<h4>Cylinder</h4>
<div class="formula">CSA = 2πrh | TSA = 2πr(r + h) | Volume = πr²h</div>
<h4>Cone</h4>
<div class="formula">l = √(r² + h²) (slant height)</div>
<div class="formula">CSA = πrl | TSA = πr(r + l) | Volume = ⅓πr²h</div>
<h4>Sphere</h4>
<div class="formula">SA = 4πr² | Volume = (4/3)πr³</div>
<h4>Hemisphere</h4>
<div class="formula">CSA = 2πr² | TSA = 3πr² | Volume = (2/3)πr³</div>`,
            qa: [
              { q: 'Find volume and TSA of a cylinder with r=7cm, h=10cm. (π=22/7)', a: 'Volume = πr²h = 22/7 × 49 × 10 = 1540 cm³. TSA = 2πr(r+h) = 2 × 22/7 × 7 × 17 = 748 cm².' },
              { q: 'A cone has r=6cm, h=8cm. Find slant height and CSA. (π=3.14)', a: 'l = √(r²+h²) = √(36+64) = √100 = 10cm. CSA = πrl = 3.14 × 6 × 10 = 188.4 cm².' },
              { q: 'A sphere has radius 6cm. Find its volume. (π=22/7)', a: 'Volume = (4/3)πr³ = (4/3) × (22/7) × 216 = (4 × 22 × 216)/(3 × 7) = 904.32 cm³.' },
              { q: 'How many litres of water can a cylindrical tank (r=1m, h=2m) hold?', a: 'Volume = πr²h = 3.14 × 1 × 2 = 6.28 m³ = 6280 litres (1 m³ = 1000 litres).' },
            ]
          },
          {
            id: 'probability-9',
            title: 'Probability',
            subtopics: 'Experiments, Sample space, Events, Empirical probability, Classical probability',
            definition: 'Probability is the numerical measure of the likelihood of an event, between 0 (impossible) and 1 (certain). Empirical probability is based on experiments; classical probability on equally likely outcomes.',
            content: `<p>Probability quantifies uncertainty. It is the mathematics of chance, used in weather forecasting, insurance pricing, medical testing, genetics, and machine learning.</p>
<h4>Basic Concepts</h4>
<ul>
<li><strong>Experiment:</strong> Any activity with observable outcome (tossing coin, rolling die)</li>
<li><strong>Sample space (S):</strong> Set of all possible outcomes</li>
<li><strong>Event (E):</strong> Any subset of the sample space</li>
</ul>
<div class="formula">P(E) = n(E) / n(S) = favourable outcomes / total equally likely outcomes</div>
<h4>Properties</h4>
<p>0 ≤ P(E) ≤ 1. P(impossible event) = 0. P(sure event) = 1. P(E) + P(Ē) = 1.</p>
<h4>Empirical Probability</h4>
<div class="formula">P(E) = frequency of E / total trials</div>
<p>Based on actual experiment results. Approaches classical probability with large number of trials (Law of Large Numbers).</p>`,
            qa: [
              { q: 'A bag contains 4 red, 3 blue, 2 green balls. One is drawn randomly. Find P(blue).', a: 'Total balls = 9. P(blue) = 3/9 = 1/3.' },
              { q: 'What is the probability of getting a total of 7 when two dice are thrown?', a: 'Total outcomes = 36. Favourable (sum=7): (1,6),(2,5),(3,4),(4,3),(5,2),(6,1) = 6 outcomes. P(sum=7) = 6/36 = 1/6.' },
              { q: 'A coin was tossed 100 times and heads appeared 58 times. Find empirical P(heads) and compare to theoretical.', a: 'Empirical P(heads) = 58/100 = 0.58. Theoretical P(heads) = 1/2 = 0.5. Close but not equal — due to random variation. With more trials, empirical value approaches 0.5 (Law of Large Numbers).' },
              { q: 'A card is drawn from well-shuffled deck of 52. P(face card)?', a: 'Face cards: Jack, Queen, King in 4 suits = 12 face cards. P(face card) = 12/52 = 3/13.' },
            ]
          },
          {
            id: 'areas-parallelograms-9',
            title: 'Areas of Parallelograms and Triangles',
            subtopics: 'Area on same base and parallels, Proof of triangle area = half parallelogram',
            definition: 'Parallelograms and triangles on the same base and between the same parallel lines have equal areas (for parallelograms) or half-equal areas (triangle = half parallelogram).',
            content: `<p>The concept of equal areas for figures sharing a base and height is a powerful geometric tool that connects seemingly different shapes and enables elegant proofs.</p>
<h4>Key Theorems</h4>
<ul>
<li>Parallelograms on the same base and between the same parallels are equal in area.</li>
<li>A triangle on the same base and between the same parallels as a parallelogram has half its area.</li>
<li>A median of a triangle divides it into two triangles of equal area.</li>
</ul>
<div class="formula">Area of parallelogram = base × height</div>
<div class="formula">Area of triangle = ½ × base × height</div>
<h4>Proof Idea</h4>
<p>Two parallelograms ABCD and EFCD on base CD: ABCD = ΔACD + ΔABC. EFCD can be shown to have same total area by showing ΔADF ≅ ΔBCE (by SAS), so areas are equal.</p>`,
            qa: [
              { q: 'A triangle and a parallelogram share base 8cm. Triangle height=5cm. Find parallelogram area if they have equal area.', a: 'Triangle area = ½ × 8 × 5 = 20 cm². For equal areas, parallelogram area = 20 cm² (but normally parallelogram = 2 × triangle on same base between same parallels). If areas are equal, parallelogram height = area/base = 20/8 = 2.5 cm.' },
              { q: 'ABCD is a parallelogram. E is midpoint of BC. Prove: area(ΔADE) = ¾ area(ABCD).', a: 'Draw diagonal AC. Area(ΔABC) = ½ Area(ABCD). E is midpoint of BC, so AE is a median of ΔABC. Area(ΔABE) = ½ Area(ΔABC) = ¼ Area(ABCD). Area(ΔADE) = Area(ABCD) − Area(ΔABE) = Area(ABCD) − ¼Area(ABCD) = ¾ Area(ABCD).' },
              { q: 'If a triangle and a parallelogram are on the same base and between the same parallels, what is the relationship between their areas?', a: 'The area of the triangle is half the area of the parallelogram. This is because the diagonal of a parallelogram divides it into two congruent triangles, each equal in area to the given triangle.' },
              { q: 'Prove that the median of a triangle divides it into two triangles of equal area.', a: 'Let D be midpoint of BC in ΔABC. In ΔABD and ΔACD: they share the same height from A. BD = CD (D is midpoint). Area = ½ × base × height. Area(ΔABD) = ½ × BD × h = ½ × CD × h = Area(ΔACD). Equal areas.' },
            ]
          },
          {
            id: 'constructions-9',
            title: 'Constructions',
            subtopics: 'Bisecting angles and segments, Constructing triangles, 60°/90°/45° angles',
            definition: 'Geometric constructions use only a compass and straightedge (ruler with no markings) to create geometric figures. They are considered pure geometry — no measurement allowed.',
            content: `<p>Euclidean constructions using only compass and straightedge have fascinated mathematicians for 2500 years. Some problems (trisecting an angle, squaring the circle) were proven impossible in the 19th century.</p>
<h4>Basic Constructions</h4>
<ul>
<li><strong>Bisecting a line segment:</strong> Draw arcs from both ends with equal radii > half length; connect intersections.</li>
<li><strong>Bisecting an angle:</strong> Draw arc from vertex; from intersection points draw equal arcs; connect vertex to intersection.</li>
<li><strong>60° angle:</strong> Draw arc from point A; from intersection point draw arc of same radius; connect — gives equilateral triangle, angle = 60°.</li>
<li><strong>90° angle:</strong> Bisect a straight angle (180°); perpendicular bisector of a segment.</li>
</ul>
<h4>Constructing Triangles</h4>
<p>Given: SSS (all 3 sides), SAS (2 sides + included angle), ASA (2 angles + included side), RHS (right angle, hypotenuse, one side).</p>`,
            qa: [
              { q: 'How do you construct an angle of 60° using compass and ruler?', a: '1. Draw a ray OA. 2. With O as centre, draw an arc cutting OA at P. 3. With same radius, centre P, draw an arc cutting the first arc at Q. 4. Join OQ. Angle QOP = 60° (as OPQ is equilateral triangle).' },
              { q: 'Construct a triangle with sides 4cm, 5cm, and 6cm. Describe steps.', a: '1. Draw BC = 6cm. 2. With B as centre, radius 4cm, draw arc. 3. With C as centre, radius 5cm, draw arc cutting first arc at A. 4. Join AB and AC. ΔABC is the required triangle.' },
              { q: 'Why are compass and straightedge the only tools allowed in classical constructions?', a: 'This restriction comes from Euclid\'s postulates — a line can be drawn between two points (straightedge) and a circle can be drawn with any centre and radius (compass). These tools embody the purest geometric operations. Using measurement introduces approximation and breaks the logical purity of the axiomatic system.' },
              { q: 'How do you bisect a given angle?', a: '1. With vertex A, draw arc cutting AB at P and AC at Q. 2. With P and Q as centres, equal radii > PQ/2, draw arcs intersecting at R. 3. Join AR. AR bisects angle BAC. Proof: triangles APR and AQR are congruent by SSS, so angles are equal.' },
            ]
          },
        ]
      },
      physics: {
        id: 'physics', topics: [
          {
            id: 'motion',
            title: 'Motion',
            subtopics: 'Distance vs displacement, Speed & velocity, Acceleration, Equations of motion, Graphs',
            definition: 'Motion is the change in position of an object with respect to time. It is described using quantities like distance, displacement, speed, velocity, and acceleration.',
            content: `<p>Everything moves — from electrons to planets. Understanding motion mathematically allows us to predict where a moving object will be at any future time. This is the foundation of mechanics.</p>
<h4>Scalar vs Vector Quantities</h4>
<p><strong>Scalar:</strong> Has magnitude only. Distance, speed, mass.<br/><strong>Vector:</strong> Has magnitude AND direction. Displacement, velocity, acceleration.</p>
<h4>Distance vs Displacement</h4>
<p>Distance: total path length travelled. Displacement: shortest distance from start to finish, with direction. You can travel 100 m but have 0 displacement if you return to the start.</p>
<h4>Speed and Velocity</h4>
<div class="formula">Speed = Distance/Time | Velocity = Displacement/Time</div>
<h4>Acceleration</h4>
<div class="formula">a = (v − u) / t [m/s²]</div>
<p>v = final velocity, u = initial velocity, t = time taken</p>
<h4>Equations of Motion (for uniform acceleration)</h4>
<div class="formula">v = u + at</div>
<div class="formula">s = ut + ½at²</div>
<div class="formula">v² = u² + 2as</div>
<h4>Graphical Representation</h4>
<p>Distance-time graph: slope = speed. Velocity-time graph: slope = acceleration, area under = distance.</p>`,
            qa: [
              { q: 'A car starts from rest and reaches 72 km/h in 10 seconds. Find acceleration.', a: 'u = 0, v = 72 km/h = 20 m/s, t = 10s. a = (v−u)/t = (20−0)/10 = 2 m/s²' },
              { q: 'A ball is thrown vertically up with 20 m/s. How high does it go? (g = 10 m/s²)', a: 'At max height, v = 0. v² = u² − 2gs → 0 = 400 − 20s → s = 20 m' },
              { q: 'What is uniform circular motion? Is it accelerated?', a: 'Circular motion at constant speed is uniform circular motion. Even though speed is constant, direction changes continuously, so velocity changes — it IS accelerated motion (centripetal acceleration).' },
              { q: 'An object travels 40 m in 1st 4 seconds and 40 m in next 4 seconds. What type of motion?', a: 'Equal distances in equal time intervals → uniform motion (zero acceleration).' },
              { q: 'A train travelling at 90 km/h brakes and stops in 5 seconds. Find retardation.', a: 'u = 90 km/h = 25 m/s, v = 0, t = 5s. a = (0−25)/5 = −5 m/s². Retardation = 5 m/s².' },
            ]
          },
          {
            id: 'force-and-laws',
            title: 'Force and Laws of Motion',
            subtopics: 'Newton\'s 3 laws, Inertia, Momentum, Conservation of momentum',
            definition: 'Force is a push or pull that can change the state of rest or motion of an object. Newton\'s three laws of motion describe the relationship between force, mass, and acceleration.',
            content: `<p>Isaac Newton published his three laws of motion in 1687 in Principia Mathematica. These laws, deceptively simple, accurately describe the motion of everything from a rolling ball to a rocket launching into space.</p>
<h4>Newton's First Law — Law of Inertia</h4>
<p>An object remains at rest or in uniform motion unless acted upon by an external unbalanced force.</p>
<p><strong>Inertia:</strong> Resistance to change in state of motion. Greater mass → greater inertia.</p>
<h4>Newton's Second Law — F = ma</h4>
<p>The acceleration of an object is directly proportional to the net force applied and inversely proportional to its mass.</p>
<div class="formula">F = ma (Force = Mass × Acceleration)</div>
<p>SI unit of force: Newton (N). 1 N = 1 kg·m/s²</p>
<h4>Momentum</h4>
<div class="formula">p = mv (momentum = mass × velocity)</div>
<p>Newton's second law can also be written as: F = Δp/Δt (force = rate of change of momentum)</p>
<h4>Newton's Third Law — Action and Reaction</h4>
<p>For every action, there is an equal and opposite reaction. Forces always act in pairs on different bodies.</p>
<h4>Law of Conservation of Momentum</h4>
<p>In the absence of external forces, total momentum of a system remains constant.</p>`,
            qa: [
              { q: 'A force of 20 N acts on a 5 kg object. What is the acceleration?', a: 'F = ma → a = F/m = 20/5 = 4 m/s²' },
              { q: 'Explain why passengers jerk forward when a bus brakes suddenly.', a: 'Due to inertia of motion (Newton\'s first law). The bus stops but passengers\' bodies tend to continue moving forward at the same speed.' },
              { q: 'A 0.05 kg bullet moving at 400 m/s strikes a 2 kg block at rest. If they move together, find final velocity.', a: 'Conservation of momentum: m₁u₁ + m₂u₂ = (m₁+m₂)v. 0.05(400)+2(0) = (2.05)v → 20 = 2.05v → v ≈ 9.76 m/s' },
              { q: 'Why is it easier to push a car than a truck with the same force?', a: 'Car has less mass than a truck. By F = ma, for the same force, smaller mass gives greater acceleration. The car accelerates more.' },
              { q: 'A rocket expels gases backward. What happens to the rocket?', a: 'By Newton\'s third law, the gases push backward (action) and the rocket is pushed forward (reaction). This is the principle of rocket propulsion.' },
            ]
          },
          {
            id: 'gravitation',
            title: 'Gravitation',
            subtopics: 'Universal gravitation, g, Weight vs mass, Kepler\'s laws, Free fall, Archimedes principle',
            definition: 'Gravitation is the force of attraction between all objects with mass. Newton\'s law of universal gravitation explains planetary motion, projectile paths, and tidal forces.',
            content: `<p>Why does an apple fall but the Moon doesn't? Newton realised both are falling — the Moon is falling but also moving sideways fast enough to keep orbiting. Gravity is the same force acting in both cases.</p>
<h4>Newton's Law of Universal Gravitation</h4>
<div class="formula">F = Gm₁m₂/r²</div>
<p>G = 6.67 × 10⁻¹¹ N·m²/kg² (universal constant). Attraction between any two masses. Stronger with greater mass, weaker with greater distance.</p>
<h4>Acceleration due to Gravity (g)</h4>
<div class="formula">g = GM/R² ≈ 9.8 m/s² (on Earth's surface)</div>
<p>g varies: slightly less at equator (Earth bulges), decreases with altitude, varies on different planets.</p>
<h4>Weight vs Mass</h4>
<p>Mass: amount of matter (kg) — constant everywhere. Weight: gravitational force (W = mg) — varies by location. On Moon: g_moon = g/6 → you weigh 1/6 as much.</p>
<h4>Archimedes' Principle</h4>
<p>An object immersed in fluid experiences upward buoyant force equal to weight of fluid displaced.</p>`,
            qa: [
              { q: 'What is the difference between mass and weight?', a: 'Mass: amount of matter in an object (kg) — constant everywhere. Weight: force due to gravity on the object (W=mg, in Newtons) — varies by location. A 60 kg person weighs 600 N on Earth but only 100 N on the Moon (g_moon = g/6).' },
              { q: 'Why does a heavy stone and a light feather fall at different rates in air but the same rate in vacuum?', a: 'In air, the feather experiences significant air resistance (drag) relative to its weight, slowing it down. The stone\'s weight overwhelms air resistance. In vacuum, there is no air resistance — both experience only gravity and fall identically (proven by astronauts on the Moon).' },
              { q: 'An object weighs 60 N on Earth. What is its weight on Moon? (g_moon = 1.63 m/s²)', a: 'Mass = 60/9.8 ≈ 6.12 kg. Weight on Moon = 6.12 × 1.63 ≈ 10 N (about 1/6 of Earth weight).' },
              { q: 'Why does a ship float despite being made of steel?', a: 'The ship is hollow — it displaces a large volume of water. By Archimedes\' principle, the buoyant force equals the weight of water displaced. If this buoyant force ≥ the ship\'s weight, the ship floats. The ship\'s overall density (steel + air inside) is less than water.' },
            ]
          },
          {
            id: 'work-energy',
            title: 'Work, Energy and Power',
            subtopics: 'Work, Kinetic energy, Potential energy, Conservation of energy, Power',
            definition: 'Work is done when a force moves an object through a distance. Energy is the capacity to do work. The law of conservation of energy states that energy cannot be created or destroyed, only converted.',
            content: `<p>Every machine, every living cell, every star operates by converting energy from one form to another. The law of conservation of energy is one of the most fundamental principles of physics.</p>
<h4>Work</h4>
<div class="formula">W = F × s × cos θ (Joules)</div>
<p>θ = angle between force and displacement. If force is perpendicular to motion: W = 0 (carrying a bag horizontally — no work done by gravity).</p>
<h4>Kinetic Energy</h4>
<div class="formula">KE = ½mv²</div>
<h4>Potential Energy</h4>
<div class="formula">PE = mgh (gravitational PE)</div>
<h4>Conservation of Mechanical Energy</h4>
<div class="formula">KE + PE = constant (in absence of friction)</div>
<p>At top of swing: max PE, zero KE. At bottom: max KE, zero PE.</p>
<h4>Power</h4>
<div class="formula">P = W/t (Watts)</div>`,
            qa: [
              { q: 'A 5 kg ball is dropped from 20 m height. Find KE just before hitting the ground. (g=10)', a: 'Using conservation of energy: KE = PE = mgh = 5×10×20 = 1000 J' },
              { q: 'Why is no work done when you carry a heavy bag walking horizontally?', a: 'The force you apply (upward, opposing gravity) is perpendicular to the displacement (horizontal). W = F×s×cos90° = 0. By the physics definition, no work is done by the carrying force.' },
              { q: 'A motor lifts 500 kg of water to a height of 15m in 5 minutes. Find the power.', a: 'W = mgh = 500×10×15 = 75000 J. t = 5×60 = 300s. P = W/t = 75000/300 = 250 W' },
              { q: 'At what point in a pendulum\'s swing is kinetic energy maximum?', a: 'KE is maximum at the lowest point of the swing (equilibrium position). At this point, all the potential energy has converted to kinetic energy. The pendulum moves fastest here.' },
            ]
          },
          {
            id: 'sound-9',
            title: 'Sound',
            subtopics: 'Production and propagation, Longitudinal waves, Speed, Reflection, Echo, Range of hearing, Ultrasound',
            definition: 'Sound is a mechanical wave produced by vibrating objects, transmitted through a medium as compressions and rarefactions. It requires a material medium — it cannot travel through a vacuum.',
            content: `<p>Sound is how we communicate, hear music, and even how bats navigate. Understanding sound waves reveals why we hear echoes, how sonar locates submarines, and how ultrasound creates medical images.</p>
<h4>Production and Propagation</h4>
<p>Sound is produced by vibrating objects. It travels as a longitudinal wave — compressions (high pressure) and rarefactions (low pressure) move through the medium. Needs a material medium (gas, liquid, or solid).</p>
<h4>Key Quantities</h4>
<div class="formula">Speed = Frequency × Wavelength (v = fλ)</div>
<p>Speed in air at 25°C ≈ 346 m/s. Sound travels fastest in solids, slowest in gases.</p>
<div class="formula">Frequency (Hz): determines pitch | Amplitude: determines loudness</div>
<h4>Reflection of Sound — Echo</h4>
<p>Minimum distance to hear an echo: sound must travel to reflector and back before 1/25 second (persistence of hearing). Minimum distance = v×t/2 = 346×(1/25)/2 ≈ 17.2 m.</p>
<h4>Range of Hearing</h4>
<p>Humans: 20 Hz to 20,000 Hz (20 kHz). Infrasound: below 20 Hz (elephants, whales). Ultrasound: above 20 kHz (bats, dogs).</p>
<h4>Applications of Ultrasound</h4>
<p>Medical imaging (sonography), SONAR (distance measurement underwater), industrial cleaning, detecting cracks in metal.</p>
<div class="formula">SONAR: d = v × t / 2 (factor of 2 because signal travels to object and back)</div>`,
            qa: [
              { q: 'Why does sound travel faster in solids than in gases?', a: 'In solids, molecules are closely packed and strongly bonded. Vibration of one molecule quickly transfers to neighbours. In gases, molecules are far apart — vibration transfers more slowly. Speed: solids > liquids > gases. Steel: ~5000 m/s, water: ~1500 m/s, air: ~346 m/s.' },
              { q: 'What minimum distance should you be from a reflecting surface to hear an echo?', a: 'Persistence of hearing = 1/25 s (sound echoes heard separately after this gap). Distance = v × t / 2 = 346 × (1/25) / 2 ≈ 17.2 m ≈ 17 m. The factor of 2 is because sound travels to the wall and back.' },
              { q: 'A sonar signal sent from a ship returns after 4 seconds. If speed of sound in seawater is 1500 m/s, find distance to the seabed.', a: 'Distance = v × t / 2 = 1500 × 4 / 2 = 3000 m. The factor 2 accounts for the signal going to the seabed and returning.' },
              { q: 'What are the uses of ultrasound?', a: 'Ultrasound (above 20,000 Hz) uses: (1) Medical imaging (sonography) — safe alternative to X-rays for soft tissue; (2) SONAR — mapping ocean floors, detecting submarines; (3) Industrial — detecting cracks in metal objects, cleaning tiny parts; (4) Breaking kidney stones (lithotripsy) without surgery.' },
            ]
          },
        ]
      },
      biology: {
        id: 'biology', topics: [
          {
            id: 'tissues',
            title: 'Tissues',
            subtopics: 'Plant tissues, Animal tissues, Meristematic, Permanent, Epithelial, Connective, Muscular, Nervous',
            definition: 'A tissue is a group of cells that are similar in structure and work together to perform a specific function. Multicellular organisms have specialized tissues for different body functions.',
            content: `<p>A single cell can only do so much. In multicellular organisms, cells group together to form tissues, tissues form organs, and organs form systems — each level more complex and capable than the last.</p>
<h4>Plant Tissues</h4>
<p><strong>Meristematic (growing) tissues:</strong> Present at growing tips of roots and shoots. Cells divide continuously. Three types: Apical (tips), Lateral (girth), Intercalary (at nodes).</p>
<p><strong>Permanent tissues:</strong> Have lost the ability to divide.</p>
<ul>
<li>Simple permanent: Parenchyma (storage, photosynthesis), Collenchyma (support in young plants), Sclerenchyma (strong support — dead at maturity)</li>
<li>Complex permanent: Xylem (water transport), Phloem (food transport)</li>
</ul>
<h4>Animal Tissues</h4>
<ul>
<li><strong>Epithelial:</strong> Lines surfaces and cavities. Protective. Types: squamous, cuboidal, columnar.</li>
<li><strong>Connective:</strong> Connects and supports other tissues. Blood, bone, cartilage, ligaments, tendons.</li>
<li><strong>Muscular:</strong> Enables movement. Striated (voluntary), smooth (involuntary), cardiac (heart).</li>
<li><strong>Nervous:</strong> Neurons transmit electrical signals for rapid communication.</li>
</ul>`,
            qa: [
              { q: 'What is the function of xylem and phloem?', a: 'Xylem transports water and minerals from roots to leaves (unidirectional, upward). Phloem transports food (sucrose) made in leaves to all parts of the plant (bidirectional).' },
              { q: 'Why is blood classified as a connective tissue?', a: 'Blood has a fluid matrix (plasma) with floating cells (RBCs, WBCs, platelets). Like other connective tissues, it connects body parts and supports functions like oxygen transport and immunity.' },
              { q: 'Differentiate between striated, smooth, and cardiac muscle tissues.', a: 'Striated (skeletal): voluntary, multinucleated, found in limbs. Smooth: involuntary, spindle-shaped, found in organs like stomach. Cardiac: involuntary, striated, found only in heart, never fatigues.' },
              { q: 'What is the role of meristematic tissue?', a: 'Meristematic tissues are responsible for growth in plants. They are present at growing tips (apical meristem), increase girth (lateral meristem), and help in internodal growth (intercalary meristem).' },
            ]
          },
          {
            id: 'fundamental-unit-of-life',
            title: 'The Fundamental Unit of Life',
            subtopics: 'Cell theory, Prokaryotic vs Eukaryotic, Cell membrane, Nucleus, Organelles',
            definition: 'The cell is the structural and functional unit of all living organisms. Every living thing is made of cells, and all cells arise from pre-existing cells — the three tenets of cell theory.',
            content: `<p>The discovery of the cell was the starting point of modern biology. Everything we know about medicine, genetics, and evolution ultimately comes back to understanding how cells work.</p>
<h4>Plasma Membrane</h4>
<p>Selectively permeable boundary. Made of phospholipid bilayer with proteins. Controls what enters and exits by: diffusion, osmosis, active transport.</p>
<h4>Osmosis</h4>
<div class="formula">Osmosis: water moves from hypotonic → hypertonic through semi-permeable membrane</div>
<p>Plasmolysis (cell shrinks in hypertonic solution — water leaves). Turgidity (cell swells in hypotonic — water enters).</p>
<h4>Cell Organelles — Functions</h4>
<ul>
<li><strong>Mitochondria:</strong> Energy (ATP) through cellular respiration. Double membrane.</li>
<li><strong>Chloroplasts:</strong> Photosynthesis. Have chlorophyll. Only in plant cells.</li>
<li><strong>Endoplasmic Reticulum:</strong> Rough ER (with ribosomes) — protein synthesis and transport. Smooth ER — lipid synthesis.</li>
<li><strong>Golgi Apparatus:</strong> Processes, packages, and secretes cell products. Makes lysosomes.</li>
<li><strong>Lysosomes:</strong> "Suicide bags" — contain digestive enzymes. Destroy old organelles and foreign material.</li>
<li><strong>Vacuole:</strong> Large (central) in plants — maintains rigidity. Small in animal cells.</li>
</ul>`,
            qa: [
              { q: 'What is osmosis? How does it differ from diffusion?', a: 'Osmosis: movement of water molecules through a semi-permeable membrane from a region of lower solute concentration (higher water concentration) to higher solute concentration. Diffusion: movement of any substance from high to low concentration, no membrane required.' },
              { q: 'Why are lysosomes called "suicide bags" of the cell?', a: 'Lysosomes contain powerful digestive enzymes. When a cell is damaged or old, lysosomes rupture and their enzymes digest the cell\'s own contents, causing cell death (autolysis). This "self-destruction" is why they are called suicide bags.' },
              { q: 'What happens to a cell placed in a concentrated salt solution?', a: 'The salt solution is hypertonic (high solute concentration). Water leaves the cell by osmosis (moving to higher concentration outside). The cell loses water and shrinks. In plant cells, this is called plasmolysis.' },
              { q: 'Why is the mitochondrion called the powerhouse of the cell?', a: 'Mitochondria carry out cellular respiration — breaking down glucose to produce ATP (adenosine triphosphate), the cell\'s energy currency. All energy-requiring activities (muscle contraction, protein synthesis, active transport) use ATP produced by mitochondria.' },
            ]
          },
          {
            id: 'atoms-molecules-9',
            title: 'Atoms and Molecules',
            subtopics: 'Laws of chemical combination, Dalton\'s atomic theory, Atoms, Molecules, Mole concept',
            definition: 'An atom is the smallest particle of an element that retains its chemical properties. A molecule is a group of atoms bonded together. The mole is the SI unit for counting atoms and molecules.',
            content: `<p>Everything you see — your hand, this screen, the air you breathe — is made of atoms. Understanding atoms and molecules is the foundation of all chemistry.</p>
<h4>Laws of Chemical Combination</h4>
<ul>
<li><strong>Law of Conservation of Mass:</strong> Mass is neither created nor destroyed in a chemical reaction.</li>
<li><strong>Law of Definite Proportions:</strong> A compound always contains the same elements in the same mass ratio.</li>
</ul>
<h4>Dalton's Atomic Theory</h4>
<ul>
<li>Matter is made of tiny indivisible atoms.</li>
<li>Atoms of the same element are identical in mass and properties.</li>
<li>Compounds form when atoms of different elements combine in fixed ratios.</li>
</ul>
<h4>Mole Concept</h4>
<div class="formula">1 mole = 6.022 × 10²³ particles (Avogadro's number)</div>
<div class="formula">Molar mass = mass of 1 mole in grams = atomic/molecular mass in g/mol</div>`,
            qa: [
              { q: 'What is the mole concept?', a: 'A mole is the amount of substance containing 6.022×10²³ particles (Avogadro\'s number). Just as "dozen" = 12, "mole" = 6.022×10²³. It allows chemists to count atoms/molecules by weighing them. 1 mole of any element = its atomic mass in grams.' },
              { q: 'Calculate the number of molecules in 36g of water.', a: 'Molar mass of H₂O = 18 g/mol. Moles = 36/18 = 2 moles. Molecules = 2 × 6.022×10²³ = 1.2044×10²⁴ molecules.' },
              { q: 'State the Law of Conservation of Mass with an example.', a: 'Mass is conserved in chemical reactions. Example: 2H₂ + O₂ → 2H₂O. LHS mass: 4g + 32g = 36g. RHS mass: 2×18g = 36g. Equal on both sides ✓' },
              { q: 'What is the atomicity of ozone?', a: 'Ozone is O₃ — its molecule contains 3 oxygen atoms. Atomicity = 3. Oxygen gas (O₂) has atomicity 2.' },
            ]
          },
          {
            id: 'diversity-living',
            title: 'Diversity in Living Organisms',
            subtopics: 'Need for classification, Hierarchy, Whittaker\'s kingdoms, Plantae divisions, Animalia phyla, Nomenclature',
            definition: 'Classification is the systematic grouping of organisms based on similarities and differences. It helps organise the enormous diversity of life and reveals evolutionary relationships between organisms.',
            content: `<p>Earth has about 8.7 million species of living organisms. Without classification, studying them would be impossible. Taxonomy brings order to this immense diversity.</p>
<h4>Hierarchy of Classification</h4>
<div class="formula">Kingdom → Phylum → Class → Order → Family → Genus → Species</div>
<p>Mnemonic: "King Philip Came Over For Good Soup"</p>
<h4>Plantae — Major Groups</h4>
<ul>
<li><strong>Thallophyta:</strong> No well-differentiated body — Algae.</li>
<li><strong>Bryophyta:</strong> No vascular tissue — Mosses, Liverworts.</li>
<li><strong>Pteridophyta:</strong> Has vascular tissue, no seeds — Ferns.</li>
<li><strong>Gymnosperms:</strong> Naked seeds — Pines, Cycads.</li>
<li><strong>Angiosperms:</strong> Seeds in fruits — Monocots and Dicots.</li>
</ul>
<h4>Animalia — Major Phyla</h4>
<p>Porifera → Coelenterata → Platyhelminthes → Nematoda → Annelida → Arthropoda (largest phylum) → Mollusca → Echinodermata → Chordata (vertebrates).</p>`,
            qa: [
              { q: 'Why is classification of living organisms necessary?', a: 'With ~8.7 million species, classification organises them for study, helps identify unknown organisms, reveals evolutionary relationships, makes communication universal (scientific names work across languages), and helps predict properties based on classification.' },
              { q: 'What distinguishes angiosperms from gymnosperms?', a: 'Gymnosperms: seeds not enclosed in fruit — naked on cones (pine, cycas). Angiosperms: seeds enclosed within a fruit, they have flowers. Most common plants — wheat, mango, rose, grass. Angiosperms are the most evolved and diverse plant group.' },
              { q: 'Which is the largest phylum in the animal kingdom?', a: 'Arthropoda — over 1 million species. Includes insects (beetles, ants), arachnids (spiders), crustaceans (crabs, lobsters). Success due to: jointed limbs, protective exoskeleton, small size, high reproductive rate, ability to adapt to diverse habitats.' },
            ]
          },
        ]
      },
      history: {
        id: 'history', topics: [
          {
            id: 'french-revolution',
            title: 'The French Revolution',
            subtopics: 'Causes, Estates system, Key events, Declaration of Rights, Napoleon, Impact on India',
            definition: 'The French Revolution (1789–1799) was a period of radical political and social transformation in France that overthrew the monarchy, established a republic, and introduced the principles of Liberty, Equality, and Fraternity.',
            content: `<p>The French Revolution echoed around the world. Its ideas of liberty, equality, and fraternity challenged kings everywhere and gave birth to modern democracy and nationalism.</p>
<h4>Causes</h4>
<ul>
<li><strong>Social inequality:</strong> Three Estates — Clergy (1st), Nobility (2nd), Commoners (3rd). The 3rd Estate (97% of population) paid all taxes.</li>
<li><strong>Financial crisis:</strong> France was bankrupt after wars and royal extravagance.</li>
<li><strong>Food shortages:</strong> Bad harvests led to bread scarcity and starvation.</li>
<li><strong>Enlightenment ideas:</strong> Philosophers (Rousseau, Voltaire, Montesquieu) challenged the divine right of kings.</li>
</ul>
<h4>Key Events</h4>
<ul>
<li>1789: Storming of the Bastille (July 14 — now French national day)</li>
<li>Declaration of Rights of Man and Citizen</li>
<li>Execution of King Louis XVI (1793)</li>
<li>Reign of Terror under Robespierre</li>
<li>Napoleon's rise to power (1799)</li>
</ul>`,
            qa: [
              { q: 'What were the three Estates of pre-revolutionary France?', a: 'First Estate: Catholic clergy (privileged, tax-exempt). Second Estate: Nobility (tax-exempt, owned land). Third Estate: everyone else — bourgeoisie, workers, peasants (97% of population, paid all taxes, had no political power).' },
              { q: 'What was the significance of storming the Bastille?', a: 'The Bastille was a royal fortress and prison in Paris, symbolising royal tyranny. On July 14, 1789, Parisian citizens stormed it. This marked the beginning of the Revolution and is now celebrated as Bastille Day (France\'s national holiday).' },
              { q: 'What principles did the Declaration of Rights of Man and Citizen establish?', a: 'It declared all men are born free and equal in rights. It established freedom of speech, press, and religion, right to security and property, and that sovereignty lies in the nation — not the king. These principles influenced constitutions worldwide.' },
              { q: 'How did the French Revolution influence Tipu Sultan and Indian nationalists?', a: 'Tipu Sultan (Mysore) was inspired by the Revolution — he planted a "Tree of Liberty" and called himself a "citizen." Later Indian nationalists used the principles of Liberty, Equality, and Fraternity in their demands for self-rule and democracy.' },
            ]
          },
          {
            id: 'nationalism-india',
            title: 'Nationalism in India',
            subtopics: 'Non-Cooperation Movement, Civil Disobedience, Gandhi, Salt March, Quit India',
            definition: 'Indian nationalism developed as a mass movement under Gandhi\'s leadership, combining non-violent resistance with the participation of millions of Indians across all classes, castes, and regions.',
            content: `<p>India's freedom struggle was unique — the world's first successful non-violent independence movement, led by a lawyer in a loincloth against the world's most powerful empire.</p>
<h4>Non-Cooperation Movement (1920-22)</h4>
<p>Gandhi's call: surrender British titles, boycott schools/courts/legislatures, use khadi (hand-spun cloth). Millions participated. Called off after Chauri Chaura violence (1922).</p>
<h4>Civil Disobedience Movement (1930)</h4>
<p><strong>Salt March (Dandi March, March 12–April 6, 1930):</strong> Gandhi walked 240 miles to Dandi, Gujarat and made salt — defying British salt monopoly. Triggered mass civil disobedience across India.</p>
<h4>Quit India Movement (1942)</h4>
<p>During WWII, Gandhi gave the call: "Do or Die" — British must leave India immediately. British arrested all Congress leaders. Mass protests, strikes across the country.</p>
<h4>Sense of Collective Belonging</h4>
<p>National symbols (Vande Mataram, tricolour flag), folk songs, shared image of Bharat Mata united diverse Indians into one nation.</p>`,
            qa: [
              { q: 'What was the Salt March and why was salt chosen as the issue?', a: 'Gandhi walked 240 miles from Ahmedabad to Dandi (March 12 - April 6, 1930) to make salt from sea water, defying the British salt monopoly. Salt was chosen because everyone used it regardless of class or religion — it united all Indians and showed British law to be unjust.' },
              { q: 'Why did Gandhi call off the Non-Cooperation Movement in 1922?', a: 'At Chauri Chaura (UP) in 1922, a mob of protesters attacked and burned a police station, killing 22 policemen. Gandhi called off the entire movement — he believed in absolute non-violence and felt the country was not ready for mass civil disobedience.' },
              { q: 'How did the freedom movement change after the arrival of Gandhi?', a: 'Before Gandhi, the freedom movement was largely led by educated urban elites using petitions and speeches. Gandhi transformed it into a mass movement involving peasants, workers, and women. Non-violent satyagraha (truth-force) was a new tool that forced the British into moral dilemmas.' },
              { q: 'What was the Quit India Movement?', a: 'Launched on August 9, 1942 during WWII. Gandhi gave the call "Do or Die" — British must leave India immediately. The British immediately arrested all Congress leaders. Despite no organised leadership, massive spontaneous protests, rail disruptions, and strikes spread across India.' },
            ]
          },
          {
            id: 'russian-revolution-9',
            title: 'Socialism and the Russian Revolution',
            subtopics: 'Marxism, 1905 Revolution, February Revolution, October Revolution, Lenin, Bolsheviks',
            definition: 'The Russian Revolution of 1917 overthrew the Tsar and led to the world\'s first communist state. Lenin and the Bolsheviks took power, creating the Soviet Union — an experiment that influenced world history until 1991.',
            content: `<p>The Russian Revolution was the most dramatic political event of the 20th century — it created the world's first communist state, inspired revolutions worldwide, and led to the Cold War that dominated 70 years of global politics.</p>
<h4>Background</h4>
<p>Russia in 1900: vast, backward empire under Tsar Nicholas II. 80% peasants in miserable conditions. Industry (in a few cities) with brutal 15-hour workdays. Social Democrats (Marxists) split into Bolsheviks (Lenin's radical majority) and Mensheviks.</p>
<h4>1905 Revolution and Bloody Sunday</h4>
<p>January 9, 1905: peaceful workers' march to the Winter Palace (led by Father Gapon) was fired upon — "Bloody Sunday." Triggered strikes, mutinies (Battleship Potemkin). Tsar granted October Manifesto (elected Duma) — but repressed opposition after.</p>
<h4>1917 February Revolution</h4>
<p>WWI devastated Russia. Bread shortages, 4 million war deaths. Workers' strikes in Petrograd escalated — soldiers refused to fire. Tsar abdicated. Provisional Government formed (continued war — a fatal mistake).</p>
<h4>October Revolution (November 7, 1917)</h4>
<p>Lenin returned from exile (April). Bolsheviks seized power ("April Theses": peace, land, bread, power to Soviets). October Revolution: Bolsheviks took over key locations in Petrograd. Immediate peace with Germany (Treaty of Brest-Litovsk), land redistributed, industries nationalised.</p>`,
            qa: [
              { q: 'What was "Bloody Sunday" and what were its consequences?', a: 'January 9, 1905: a peaceful procession of workers led by Father Gapon marched to the Winter Palace to petition the Tsar. Government troops opened fire, killing hundreds. This destroyed the belief that the Tsar cared for his people — triggering the 1905 Revolution. The Tsar was forced to grant the October Manifesto (elected Duma).' },
              { q: 'Why was Russia\'s continuation in WWI a fatal mistake for the Tsar?', a: 'WWI caused 4 million Russian deaths, mass desertion, economic collapse, and bread shortages. The government was blamed for incompetent leadership. By 1917, soldiers refused orders and joined striking workers. The Tsar lost all support and was forced to abdicate. The Provisional Government made the same mistake — continuing the war — which allowed Lenin and the Bolsheviks to seize power.' },
              { q: 'What was Lenin\'s April Theses?', a: 'Lenin returned from exile in April 1917 and announced his April Theses: (1) Immediate peace (end WWI); (2) Land to the peasants; (3) Banks to be nationalised; (4) Power to the Soviets (workers\' councils). These demands resonated with exhausted, hungry Russians and guided the October Revolution.' },
              { q: 'What did socialism mean in practice after the Russian Revolution?', a: 'After 1917: private property in industries abolished, land redistributed to peasants, banks nationalised, workers got 8-hour workdays. Communist Party took control of the state. By 1920s, Stalin implemented forced collectivisation (farms combined into collective farms) and rapid industrialisation — causing millions of deaths from famine and labour camps.' },
            ]
          },
          {
            id: 'nazism-9',
            title: 'Nazism and the Rise of Hitler',
            subtopics: 'Weimar Republic, Rise of Nazism, Nazi ideology, Holocaust, WWII, Nuremberg trials',
            definition: 'Nazism was a far-right totalitarian ideology that rose in Germany after WWI. Adolf Hitler\'s Nazi party used propaganda, scapegoating, and terror to gain power, leading to WWII and the Holocaust — the murder of 6 million Jews.',
            content: `<p>How did one of the world's most educated and culturally sophisticated nations commit the most organised genocide in history? Understanding Nazism is essential to ensuring it never happens again.</p>
<h4>Birth of Weimar Republic (1919)</h4>
<p>After WWI, Germany became a democracy. Humiliating Treaty of Versailles: huge reparations, loss of territory, "war guilt" clause. The Weimar Republic was blamed for accepting this "diktat." Economic crisis: hyperinflation (1923), Great Depression (1929) — 30% unemployment by 1932.</p>
<h4>Rise of Hitler</h4>
<p>Adolf Hitler, an Austrian failed artist, joined the Nazi (National Socialist) Party. 1923 Beer Hall Putsch failed — jailed, wrote Mein Kampf. 1932: Nazis became largest party. January 30, 1933: Hitler appointed Chancellor. Reichstag fire used to suspend rights. March 1933: Enabling Act — Hitler became dictator.</p>
<h4>Nazi Ideology</h4>
<p>Racial hierarchy: Aryans (Germans) supreme, Jews at bottom. Racial purity through breeding programs. Expansion (Lebensraum — "living space") — justification for conquest. Anti-communism.</p>
<h4>The Holocaust</h4>
<p>Systematic genocide of 6 million Jews (also Roma, disabled, homosexuals, political opponents). Night of Broken Glass (Kristallnacht, 1938). Concentration camps → extermination camps (Auschwitz, Treblinka). 1942: "Final Solution" — total extermination plan.</p>`,
            qa: [
              { q: 'What economic conditions allowed Hitler to rise to power?', a: 'Germany suffered: (1) WWI defeat and humiliation (Treaty of Versailles), (2) Hyperinflation (1923) — a loaf of bread cost billions of marks, (3) Great Depression (1929) — 30% unemployment by 1932. Hitler promised to restore German greatness, blamed Jews and Communists for all problems. Desperate people accepted his message.' },
              { q: 'What was the Holocaust?', a: 'The Holocaust was the systematic, state-sponsored persecution and murder of 6 million Jews (two-thirds of European Jews) by the Nazi German regime from 1933-1945. Also killed: Roma (5 million+), disabled people, political opponents, homosexuals. Jews were progressively stripped of rights, forced into ghettos, then transported to extermination camps.' },
              { q: 'How did Hitler establish a dictatorship?', a: 'Steps: (1) Became Chancellor Jan 1933; (2) Reichstag fire (Feb 1933) blamed on Communists — used to suspend civil liberties; (3) Enabling Act (March 1933) gave Hitler power to make laws without Parliament; (4) Banned all other parties; (5) Night of Long Knives — eliminated rivals within own party; (6) After Hindenburg died (1934), combined President and Chancellor into "Fuhrer."' },
              { q: 'What were the Nuremberg trials?', a: 'After WWII ended (1945), Allied powers set up the International Military Tribunal at Nuremberg, Germany. Nazi leaders were tried for: crimes against peace (planning aggressive war), war crimes (violations of laws of war), crimes against humanity (genocide, enslavement). 12 were sentenced to death. Established the principle that individuals are responsible for crimes even when following government orders.' },
            ]
          },
          {
            id: 'forest-society-colonialism-9',
            title: 'Forest Society and Colonialism',
            subtopics: 'Colonial forest laws, Scientific forestry, Tribal resistance, Deforestation',
            definition: 'British colonial rule transformed India\'s forests — from community-managed resources to state-controlled timber reserves. Forest dwellers lost traditional rights, leading to resistance movements.',
            content: `<p>Before colonialism, forests were managed by local communities who depended on them. British "scientific forestry" treated forests purely as timber resources, causing ecological damage and tribal displacement that still affects India today.</p>
<h4>Why the British Changed Forest Laws</h4>
<p>Massive demand for timber: railway sleepers (millions needed for expanding railway network), ship-building (Royal Navy), commercial exports. By 1850, vast forests were cleared.</p>
<h4>Indian Forest Act (1878)</h4>
<p>Divided forests into: Reserved (no access — most productive), Protected, Village forests. Forest dwellers could no longer: hunt, graze animals, collect firewood, use the forest for cultivation (shifting cultivation banned). Forest officers had enormous power.</p>
<h4>Impact on Forest Communities</h4>
<p>Communities lost livelihoods and access to resources. Shifting cultivation (slash and burn) was banned — a sustainable agricultural practice of tribal communities. Forest dwellers were criminalised for traditional practices.</p>
<h4>Resistance</h4>
<p>Bastar Rebellion (1910): tribal people of Bastar (Chhattisgarh) rose against forest laws and forced labour. Birsa Munda Movement (1890s-1900): tribal leader Birsa Munda led the Munda people to assert rights over their forests. Java and other colonies: similar resistance.</p>`,
            qa: [
              { q: 'Why did the British implement strict forest laws?', a: 'Main reasons: (1) Massive demand for timber — railway expansion needed millions of sleepers, Royal Navy needed wood for ships, trade in timber; (2) To bring forests under state control and generate revenue; (3) "Scientific forestry" ideology — treating forests as timber farms rather than ecosystems. Local needs of forest dwellers were ignored.' },
              { q: 'What was the Bastar Rebellion of 1910?', a: 'The tribal communities of Bastar (now Chhattisgarh) rose in rebellion against the British in 1910. Causes: British reservation of forests (loss of access), forced labour (begar) demands, increased taxes. A leader from the Dhurwa community started the movement. The British crushed the rebellion militarily, killing many, but later slightly relaxed forest restrictions.' },
              { q: 'What was the significance of Birsa Munda\'s movement?', a: 'Birsa Munda (1875-1900) led the Munda people of Jharkhand against both British colonialism and local landlords (dikus) who had taken tribal land. He declared himself a prophet, preached tribal pride and reform. His movement (ulgulan or "great tumult") demanded return of Munda land, end to forced labour. He died in prison at 25 but inspired tribal rights movements.' },
              { q: 'How did colonial forest management affect the ecology of Indian forests?', a: 'British "scientific forestry" focused on monoculture timber trees (teak, sal, pine) and eliminated diverse natural forests. Forests were not managed for biodiversity but for maximum timber yield. This reduced biodiversity, disrupted water cycles, caused soil erosion. Mixed natural forests that communities had sustainably managed for generations were replaced by degraded monocultures.' },
            ]
          },
        ]
      },
      geography: {
        id: 'geography', topics: [
          {
            id: 'physical-features-india',
            title: 'Physical Features of India',
            subtopics: 'Himalayas, Northern Plains, Peninsular Plateau, Coastal Plains, Islands',
            definition: 'India has diverse physical features — the mighty Himalayas in the north, the vast Indo-Gangetic plains, the ancient Peninsular Plateau, coastal plains, and offshore islands.',
            content: `<p>India's physical geography determines its climate, agriculture, rivers, and even its history — the Himalayas protected India from Central Asian invaders; the fertile plains fed ancient civilisations.</p>
<h4>The Himalayas</h4>
<p>Youngest fold mountains. Three parallel ranges: Himadri (Greater Himalayas — highest peaks including Everest and K2), Himachal (Lesser Himalayas), Shiwaliks (outermost). Rich in glaciers (source of perennial rivers), forests, biodiversity.</p>
<h4>Northern Plains</h4>
<p>Formed by alluvial deposits of Indus, Ganga, Brahmaputra. Highly fertile — India's food bowl. Dense population. 2400 km long.</p>
<h4>Peninsular Plateau</h4>
<p>Ancient, stable landmass (part of Gondwana). Black soil (Deccan) — ideal for cotton. Rich in minerals (iron ore, coal). Western and Eastern Ghats border it.</p>
<h4>Coastal Plains and Islands</h4>
<p>Western coast: narrow, steep (Malabar coast). Eastern coast: wide deltaic plains (Coromandel). Lakshadweep: coral islands in Arabian Sea. Andaman and Nicobar: Bay of Bengal, volcanic, biodiversity hotspot.</p>`,
            qa: [
              { q: 'Why are the Himalayan rivers called perennial rivers?', a: 'Himalayan rivers (Ganga, Indus, Brahmaputra) receive water year-round from snowmelt and glaciers in addition to monsoon rainfall. They never dry up — they are perennial, unlike Peninsular rivers that depend only on rainfall.' },
              { q: 'How were the Northern Plains formed?', a: 'The Northern Plains were formed over millions of years by alluvial deposits (silt, sand, clay) carried by the Himalayan rivers (Indus, Ganga, Brahmaputra). As rivers slowed in the flat land, they deposited sediment, creating some of the world\'s most fertile soil.' },
              { q: 'Why is the Deccan Plateau rich in cotton cultivation?', a: 'The Deccan Plateau has black soil (regur) formed from volcanic lava. This soil is rich in minerals, retains moisture well, and is ideal for cotton cultivation. Maharashtra, Gujarat, and Andhra Pradesh are major cotton producers on this plateau.' },
              { q: 'What is the significance of the Western Ghats?', a: 'The Western Ghats act as a barrier to monsoon winds — they force rain-laden clouds to rise and deposit heavy rainfall on the western slope. This creates the lush Malabar coast. The eastern side remains drier (rain shadow region). The Ghats are a UNESCO biodiversity hotspot.' },
            ]
          },
          {
            id: 'climate-india',
            title: 'Climate of India',
            subtopics: 'Factors affecting climate, Monsoon, Seasons, Regional variations',
            definition: 'India has a monsoon type of climate characterised by seasonal reversal of winds. The Indian monsoon (June–September) brings about 75% of India\'s annual rainfall and is crucial for agriculture.',
            content: `<p>The monsoon is not just a weather pattern — it is the pulse of India. Entire agricultural cycles, festivals, and economies revolve around the monsoon's arrival and departure.</p>
<h4>Factors Affecting India's Climate</h4>
<ul>
<li>Latitude (tropical location — warm)</li>
<li>Altitude (Himalayas — cold, block Central Asian winds)</li>
<li>Distance from sea (interior = continental climate)</li>
<li>Ocean currents</li>
<li>Relief (Western Ghats cause heavy rain on west)</li>
</ul>
<h4>The Monsoon</h4>
<p>Southwest monsoon (June-September): Winds from Indian Ocean carry moisture, hit Western Ghats, bring heavy rain. Retreating monsoon (Oct-Nov): Brings rain to Tamil Nadu (Northeast monsoon).</p>
<h4>Four Seasons of India</h4>
<ol>
<li>Cold weather (December-February): Cool and dry</li>
<li>Hot weather (March-May): Loo winds in north India</li>
<li>Southwest monsoon (June-September): Main rainy season</li>
<li>Retreating monsoon (October-November)</li>
</ol>`,
            qa: [
              { q: 'Why does Mawsynram receive the highest rainfall in India?', a: 'Mawsynram (Meghalaya) is located at the windward side of the Khasi Hills facing the Bay of Bengal. Moisture-laden winds are forced to rise sharply over these hills, cooling and depositing heavy orographic (relief) rainfall. It receives over 11,000 mm annually.' },
              { q: 'What is the "Loo" and where does it occur?', a: 'Loo is a hot, dry, dusty wind that blows in the afternoons during summer (May-June) in northern India (Punjab, Haryana, Uttar Pradesh). Temperatures can reach 45-48°C and the Loo can cause heatstroke.' },
              { q: 'Why does India have a monsoon type of climate?', a: 'India\'s climate is governed by the monsoon — seasonal reversal of winds. In summer, the landmass heats up, creating low pressure. Moisture-laden winds from the ocean rush in (SW monsoon — June-Sept). In winter, the land cools, high pressure develops, and winds blow from land to sea (NE monsoon).' },
              { q: 'How does the Himalayas influence India\'s climate?', a: 'The Himalayas act as a climatic barrier: (1) They block cold Central Asian winds from reaching India — keeping winters mild. (2) They prevent monsoon winds from escaping northward — forcing them to deposit rain within India. Without the Himalayas, India would be much colder and drier.' },
            ]
          },
          {
            id: 'drainage-india-9',
            title: 'Drainage — Rivers of India',
            subtopics: 'Himalayan rivers, Peninsular rivers, River basins, Drainage patterns, Significance of rivers',
            definition: 'Drainage refers to the river system of a region. India has two main drainage systems: the Himalayan rivers (perennial, glacier-fed) and the Peninsular rivers (seasonal, rainfall-dependent).',
            content: `<p>India's rivers are its lifelines — they provide water for irrigation, drinking, industry, and hydroelectric power; they shaped India's ancient civilisations; and they remain central to culture and religion.</p>
<h4>Himalayan Rivers</h4>
<p><strong>Indus System:</strong> Indus, Jhelum, Chenab, Ravi, Beas, Sutlej. Origin: Tibet/Himalayas. Mostly in Pakistan (after Partition).</p>
<p><strong>Ganga System:</strong> Ganga + tributaries (Yamuna, Ghagra, Gandak, Kosi from north; Chambal, Betwa, Son from south). 2525 km. Most sacred river.</p>
<p><strong>Brahmaputra:</strong> Longest river in India. Flows through Arunachal Pradesh and Assam. Known as Tsangpo in Tibet.</p>
<h4>Peninsular Rivers</h4>
<p><strong>West-flowing:</strong> Narmada, Tapi (flow into Arabian Sea, form estuaries). <strong>East-flowing:</strong> Mahanadi, Godavari, Krishna, Cauvery (flow into Bay of Bengal, form deltas — more fertile).</p>
<h4>River Erosion Features</h4>
<p>Upper course: V-shaped valleys, gorges. Middle: wide valley, meanders. Lower: delta, floodplains.</p>`,
            qa: [
              { q: 'What is the difference between Himalayan and Peninsular rivers?', a: 'Himalayan rivers: perennial (flow year-round) — fed by monsoon + glaciers. Long, carry more water. E.g., Ganga, Brahmaputra. Peninsular rivers: seasonal — fed mainly by monsoon rain, dry in summer. Shorter, shallow. E.g., Godavari, Cauvery. Himalayan rivers form deltas and are more suitable for agriculture and navigation.' },
              { q: 'Why is the Ganga called India\'s most sacred river?', a: 'The Ganga has been central to Indian civilisation for thousands of years. Ancient cities (Varanasi, Allahabad, Patna, Kolkata) grew on its banks. Hindus believe bathing in the Ganga washes sins. Its source (Gangotri glacier) is a pilgrimage site. It also supports 400+ million people along its basin — about one-third of India\'s population.' },
              { q: 'Why do east-flowing peninsular rivers form deltas while west-flowing ones form estuaries?', a: 'East-flowing rivers (Godavari, Krishna, Cauvery) travel long distances through gentle slopes — slow enough to deposit sediment, forming fertile deltas. West-flowing rivers (Narmada, Tapi) flow through hard rock, fast-moving, not much sediment — flow straight into the sea forming estuaries. Deltas are more fertile and suitable for agriculture.' },
              { q: 'What causes flooding in Assam and Bihar every year?', a: 'The Brahmaputra (Assam) carries enormous amounts of water and sediment from the Himalayas. Heavy rainfall during monsoon + melting glaciers fill rivers beyond capacity. The flat plains have little capacity to absorb excess water. In Bihar, the Kosi river frequently shifts course, causing devastating floods — it is called the "Sorrow of Bihar."' },
            ]
          },
          {
            id: 'natural-vegetation-wildlife-9',
            title: 'Natural Vegetation and Wildlife',
            subtopics: 'Types of forests, Flora and fauna, Biosphere reserves, Wildlife sanctuaries, Conservation',
            definition: 'India has remarkable biodiversity — 8% of world species despite having 2.4% of land area. Different climates create different vegetation types: tropical rainforests, deciduous forests, grasslands, deserts, and mangroves.',
            content: `<p>India is one of the world's 17 megadiverse countries. From Himalayan snow leopards to Bengal tigers, from mangrove forests to alpine meadows — protecting this diversity is a national priority.</p>
<h4>Types of Vegetation</h4>
<ul>
<li><strong>Tropical Rainforest:</strong> Western Ghats, Andaman Islands. Dense, tall trees, enormous biodiversity. Mahogany, rosewood, ebony.</li>
<li><strong>Tropical Deciduous (Monsoon Forests):</strong> Most widespread. Teak, sal, peepal, neem. Shed leaves in dry season.</li>
<li><strong>Tropical Thorn Forests:</strong> Rajasthan, parts of Gujarat, Deccan. Babul, cacti, khejri.</li>
<li><strong>Mangrove Forests:</strong> Coastal (Sundarbans is world's largest). Roots trap sediment. Protect coastlines. Sundari tree → Sundarbans name.</li>
<li><strong>Alpine Meadows:</strong> Himalayas above tree line. Sedges, mosses.</li>
</ul>
<h4>Wildlife</h4>
<p>India has: 90 national parks, 500+ wildlife sanctuaries, 18 biosphere reserves. Famous: Project Tiger (1973), Project Elephant. Key species: Bengal tiger, Asiatic lion (Gir), one-horned rhino (Kaziranga), snow leopard, Gangetic dolphin.</p>
<h4>Threats</h4>
<p>Deforestation, poaching, habitat fragmentation, human-wildlife conflict, climate change.</p>`,
            qa: [
              { q: 'What are mangrove forests and why are they important?', a: 'Mangroves are salt-tolerant trees growing in coastal intertidal zones. Importance: protect coastlines from storms, cyclones, and tsunamis (act as natural buffers); trap sediment, preventing coastal erosion; provide nursery habitat for fish (important for fisheries); support unique biodiversity. Sundarbans (India-Bangladesh) is the world\'s largest mangrove forest.' },
              { q: 'What is Project Tiger and has it been successful?', a: 'Project Tiger (1973) was launched to protect the endangered Bengal tiger. India\'s tiger population had fallen to just 1827 (1972 census). 50 tiger reserves were created. By 2022, India had 3167 tigers — over 70% of world\'s wild tigers. Considered one of the world\'s most successful wildlife conservation programs.' },
              { q: 'Why is India considered a biodiversity hotspot?', a: 'India has extraordinary biodiversity: 8% of world\'s species on 2.4% of land. Reasons: diverse climates (tropical to alpine), varied topography, several ancient geological formations, varied rainfall. But: rapid development, deforestation, and pollution threaten this diversity. Two of the world\'s 36 biodiversity hotspots are in India: Western Ghats and Eastern Himalayas.' },
              { q: 'What is the difference between a National Park, Wildlife Sanctuary, and Biosphere Reserve?', a: 'National Park: strictly protected area — no human activity (grazing, logging) allowed. Wildlife Sanctuary: wildlife protected but some human activities (forestry, tribal grazing) allowed. Biosphere Reserve: largest category — core zone (national park or sanctuary), buffer zone, transition zone (human habitation). Biosphere reserves allow research, education, and sustainable human use in outer zones.' },
            ]
          },
          {
            id: 'population-india-9',
            title: 'Population',
            subtopics: 'Census, Population density, Distribution, Literacy, Occupational structure, Migration',
            definition: 'India is the world\'s most populous country (since 2023, surpassing China). Population distribution is uneven — high density in plains and coastal areas. The population composition (age, sex, literacy) reveals development challenges.',
            content: `<p>With 1.4 billion people, India's population is both its greatest resource (young workforce) and its greatest challenge (pressure on resources, infrastructure, and environment).</p>
<h4>Population Distribution</h4>
<p>Uneven: High density in — Northern Plains (UP, Bihar, West Bengal), coastal plains. Low density in — Rajasthan, Arunachal Pradesh, Uttarakhand (harsh terrain, desert, mountains).</p>
<h4>Population Density</h4>
<div class="formula">Density = Population / Area (persons per km²)</div>
<p>India average: ~382 persons/km². Bihar: ~1102, Rajasthan: ~200, Arunachal Pradesh: 17.</p>
<h4>Population Growth Factors</h4>
<ul>
<li><strong>Births > deaths:</strong> Improved healthcare reduced death rate faster than birth rate fell</li>
<li><strong>Migration:</strong> Internal (rural to urban), International</li>
<li><strong>Age Structure:</strong> Large youth population = high potential fertility</li>
</ul>
<h4>Literacy</h4>
<p>India's literacy rate (2011): 74%. Male: 82%, Female: 65%. Kerala: 94%. Bihar: 61%. Gender gap is narrowing.</p>
<h4>Age Pyramid</h4>
<p>India has a youthful age structure — more people in younger age groups. This creates a "demographic dividend" — large working-age population supporting development. But it requires creating jobs for millions entering the workforce.</p>`,
            qa: [
              { q: 'Why is population distribution in India uneven?', a: 'Population clusters where life is easier and more productive. High density: fertile plains (Ganga, coastal) where agriculture is productive, climate is moderate, rivers available. Low density: deserts (Rajasthan), mountains (Himachal, Arunachal), dense forests (northeast) — harsh conditions, difficult agriculture.' },
              { q: 'What is the demographic dividend and how can India benefit?', a: 'Demographic dividend: when a country has a large working-age population (15-64) relative to dependents (children, elderly). India currently has this advantage — 65% of population in working age. To benefit: invest in education and skills (human capital), create sufficient jobs (manufacturing, services), improve healthcare. If this opportunity is missed, it becomes a demographic burden.' },
              { q: 'What is the difference between census and survey?', a: 'Census: complete enumeration of ALL people in the country at one time. India conducts census every 10 years (last 2011, next due 2021 delayed to 2024). Provides comprehensive data. Survey: data collected from a sample of the population — faster and cheaper but less complete. Example: NFHS (National Family Health Survey) covers sample of households.' },
              { q: 'Why is the sex ratio in India unfavourable?', a: 'India\'s sex ratio (females per 1000 males) has been declining: 927 (2011). Causes: son preference (female foeticide/infanticide), gender discrimination, maternal mortality. Haryana and Punjab have very low sex ratios due to severe son preference. Kerala has high sex ratio (1084) due to high female literacy and better status of women. PCPNDT Act (1994) bans sex-selective abortion.' },
            ]
          },
        ]
      },
      civics: {
        id: 'civics', topics: [
          {
            id: 'what-is-democracy',
            title: 'What is Democracy? Why Democracy?',
            subtopics: 'Definition, Features, Arguments for democracy, Types of governments',
            definition: 'Democracy is a form of government where political power belongs to the people, exercised either directly or through elected representatives. It is based on principles of equality, rule of law, and protection of rights.',
            content: `<p>Winston Churchill said "Democracy is the worst form of government, except all the others." Why do most countries choose democracy despite its flaws? And what makes a government truly democratic?</p>
<h4>Definition of Democracy</h4>
<p>"Government of the people, by the people, for the people" — Abraham Lincoln. Key features:
<ul>
<li>Elected representatives chosen by free and fair elections</li>
<li>One person, one vote (universal adult franchise)</li>
<li>Rule of law — no one is above the law</li>
<li>Protection of fundamental rights</li>
<li>Independent judiciary</li>
</ul>
</p>
<h4>Arguments FOR Democracy</h4>
<p>More accountable — leaders answer to voters. Better decision-making — diverse perspectives. Dignity and equality — treats all citizens as equals. Peaceful transfer of power — no coups or revolutions needed.</p>
<h4>Arguments AGAINST</h4>
<p>Can be slow, populist decisions, majority can oppress minority. Yet alternatives (dictatorship, monarchy) are worse.</p>`,
            qa: [
              { q: 'What is universal adult franchise?', a: 'Universal adult franchise means every adult citizen (18+ in India) has the right to vote, regardless of gender, religion, caste, education, or economic status. It is the foundation of democratic equality — each person\'s vote has equal value.' },
              { q: 'What makes an election "free and fair"?', a: 'A free and fair election requires: every adult has the right to vote, secret ballot (no coercion), all parties can campaign freely, independent election commission manages the process, and results are honestly counted and announced.' },
              { q: 'What is the difference between direct and representative democracy?', a: 'Direct democracy: citizens vote directly on laws and decisions (ancient Athens, Swiss referendums). Representative democracy: citizens elect representatives who then make decisions on their behalf. India is a representative democracy — too large for direct democracy.' },
              { q: 'What are the disadvantages of democracy?', a: 'Democracy can be slow (debate and consensus takes time), prone to populism (leaders make popular but bad decisions), elections are expensive, uninformed voters may make poor choices, and majority decisions can harm minority groups if not protected by rights.' },
            ]
          },
          {
            id: 'constitutional-design',
            title: 'Constitutional Design',
            subtopics: 'Need for constitution, Constituent Assembly, Preamble, Features of Indian Constitution',
            definition: 'A constitution is the supreme legal document of a country that lays down the framework of government, rights of citizens, and principles of governance. India\'s Constitution was drafted by the Constituent Assembly (1946-1949).',
            content: `<p>After independence, the question was: what kind of country should India be? The Constituent Assembly spent 2 years, 11 months, and 17 days debating and designing a document that would govern the world's largest democracy.</p>
<h4>Need for a Constitution</h4>
<p>A constitution prevents any single person or group from having unlimited power. It protects individual rights from majority tyranny. It creates stable, predictable government institutions.</p>
<h4>Constituent Assembly</h4>
<p>Members: elected by provincial assemblies. Key figures: Dr. B.R. Ambedkar (Chairman, Drafting Committee), Jawaharlal Nehru (Objectives Resolution), Rajendra Prasad (President of Assembly). 11 sessions, 165 days of debate.</p>
<h4>Key Features of Indian Constitution</h4>
<ul>
<li>Longest written constitution</li>
<li>Federal with strong centre</li>
<li>Parliamentary democracy</li>
<li>Secular state</li>
<li>Universal adult franchise</li>
<li>Fundamental Rights and Duties</li>
<li>Independent judiciary</li>
</ul>`,
            qa: [
              { q: 'Why is the Indian Constitution the longest written constitution in the world?', a: 'India is a vast, diverse country with complex social realities. The framers felt it necessary to include detailed provisions for: federal structure, fundamental rights, directive principles, special provisions for SC/ST, emergency powers, and specific articles for 28+ states. This detail makes it the world\'s longest.' },
              { q: 'What was Dr. Ambedkar\'s role in drafting the Constitution?', a: 'Dr. B.R. Ambedkar was the Chairman of the Drafting Committee — the principal architect of the Indian Constitution. He guided the committee through detailed deliberations, incorporated the best features from world constitutions, and ensured provisions protecting the rights of marginalised communities.' },
              { q: 'Why did the Constitution makers make the judiciary independent?', a: 'An independent judiciary can impartially decide cases even when the government is a party. If judges were appointed or removed by the government, they would be biased in its favour. Independence (secure tenure, no control by executive) ensures courts protect citizens\' rights even against government overreach.' },
              { q: 'What is the significance of January 26 as Republic Day?', a: 'On January 26, 1950, the Indian Constitution came into force and India became a Republic (a country with an elected head of state — President — rather than a monarch). This date was chosen because on January 26, 1930, the Congress had declared Poorna Swaraj (complete independence) as its goal.' },
            ]
          },
          {
            id: 'electoral-politics-9',
            title: 'Electoral Politics',
            subtopics: 'Why elections, Types of elections, Election Commission, Election process, Voting',
            definition: 'Elections are the mechanism by which citizens choose their representatives in a democracy. In India, the Election Commission of India independently manages free and fair elections at all levels.',
            content: `<p>India conducts the world's largest democratic exercise — over 900 million eligible voters, 1 million polling stations, and a 5-week process. The Election Commission makes this miracle happen every 5 years.</p>
<h4>Why Elections?</h4>
<p>Elections allow: regular replacement of rulers without violence; accountability (leaders who perform poorly can be voted out); representation of people's diverse choices; legitimacy — people accept the government they chose.</p>
<h4>Election Commission of India</h4>
<p>An independent constitutional body — not under government control. Enforces Model Code of Conduct, ensures free and fair elections, can disqualify candidates, transfer government officers during elections.</p>
<h4>Election Process</h4>
<ol>
<li>Announcement of dates</li>
<li>Candidate nomination and scrutiny</li>
<li>Campaign (Model Code of Conduct applies)</li>
<li>Polling (secret ballot, EVMs)</li>
<li>Vote counting and result announcement</li>
</ol>
<h4>First-Past-The-Post System</h4>
<p>In India, the candidate with the most votes wins — even without a majority. This can lead to a winning candidate with less than 50% of votes.</p>`,
            qa: [
              { q: 'What is the role of the Election Commission of India?', a: 'The Election Commission (ECI) is an autonomous constitutional body that: announces election schedule; enforces Model Code of Conduct; registers political parties; allots symbols; deploys security; can order re-polls if irregularities occur; and transfers biased government officials. It makes elections free and fair.' },
              { q: 'What is the Model Code of Conduct?', a: 'The Model Code of Conduct (MCC) is a set of guidelines issued by the Election Commission once elections are announced. It prohibits: using government resources for campaigns, announcing populist schemes, making communal appeals, and prevents ruling parties from using their incumbency advantage. Violators can be disqualified.' },
              { q: 'What challenges do Indian elections face?', a: 'Challenges: money power (rich candidates buy votes), muscle power (intimidation), communal and caste appeals, use of government resources by ruling parties, voter ignorance, long process in large country, booth capturing (rare now with EVMs). The ECI has made progress with EVMs, voter ID cards, and VVPAT machines.' },
              { q: 'Is the first-past-the-post system fair?', a: 'First-past-the-post: candidate with most votes wins (not necessarily majority). It is simple, gives stable governments, and creates accountability. But: a party can win majority of seats with minority of votes; smaller parties are underrepresented; third parties find it hard to grow. Alternative: Proportional representation (seats match vote percentages) — used in many European countries.' },
            ]
          },
          {
            id: 'working-of-institutions-9',
            title: 'Working of Institutions',
            subtopics: 'Parliament, President, Prime Minister, Cabinet, Supreme Court, Separation of powers',
            definition: 'Democratic government works through institutions — Parliament (makes laws), Executive/Cabinet (implements laws), and Judiciary (interprets laws). These institutions check and balance each other to prevent abuse of power.',
            content: `<p>India's democratic government is a complex machine with many parts. Understanding how Parliament, the President, the Cabinet, and the Courts work — and how they check each other — explains how democracy actually functions.</p>
<h4>Parliament</h4>
<ul>
<li><strong>Lok Sabha (Lower House):</strong> 545 members, elected directly, controls money bills, 5-year term</li>
<li><strong>Rajya Sabha (Upper House):</strong> 245 members, elected by state assemblies, represents states, permanent house</li>
<li>Parliament's functions: Make laws, approve budget, oversee executive (question hour, no-confidence motion)</li>
</ul>
<h4>The President</h4>
<p>Constitutional head — formal power. Real power with the Prime Minister and Cabinet. Elected by MPs and MLAs. Can return a bill once (but must sign if Parliament passes it again).</p>
<h4>Prime Minister and Cabinet</h4>
<p>Real executive power. PM appoints ministers. Cabinet collectively responsible to Parliament. PM must have majority in Lok Sabha.</p>
<h4>Judiciary</h4>
<p>Supreme Court: interprets Constitution, decides disputes between states and centre. High Courts: state level. District Courts: local. Judges are independent — not elected, appointed through collegium system.</p>`,
            qa: [
              { q: 'What is the difference between Lok Sabha and Rajya Sabha?', a: 'Lok Sabha: Lower house, 545 members directly elected, controls money bills and can pass them without Rajya Sabha, 5-year term, dissolved if government falls. Rajya Sabha: Upper house, 245 members elected by state assemblies, represents states, permanent (never fully dissolved), members serve 6-year terms. Both are needed to pass most bills.' },
              { q: 'Why is the President of India called a constitutional head?', a: 'The President has formal/ceremonial powers — invites PM, addresses Parliament, signs bills. But all real decisions are made by the Cabinet. The President must act on the advice of the Cabinet in nearly all matters. So they are the constitutional head (formal), not the real executive power.' },
              { q: 'What keeps the Prime Minister accountable to Parliament?', a: 'Several mechanisms: (1) Question Hour — MPs can question ministers daily. (2) No-confidence motion — if a majority votes against the government, it must resign. (3) Budget approval — Parliament must approve government spending. (4) Parliamentary committees — scrutinise government. These mechanisms ensure the PM cannot ignore Parliament.' },
              { q: 'What is the significance of judicial independence in India?', a: 'Independent judges can rule against the government without fear of removal. This protects citizens\' rights. In India, Supreme Court judges are appointed through the collegium system (senior judges recommend appointments), not by the government, ensuring independence. Security of tenure (up to 65 years) prevents political pressure.' },
            ]
          },
          {
            id: 'democratic-rights-9',
            title: 'Democratic Rights',
            subtopics: 'Fundamental Rights, Right to Equality, Right to Freedom, Right against Exploitation, Directive Principles',
            definition: 'Fundamental Rights are basic rights guaranteed by the Constitution to every Indian citizen, enforceable in courts. They protect citizens from arbitrary state action and ensure individual dignity and freedom.',
            content: `<p>Rights transform citizens from subjects (who receive favours from rulers) to rights-holders (who can demand what is legally theirs). The six Fundamental Rights are the heart of Indian democracy.</p>
<h4>The Six Fundamental Rights</h4>
<ol>
<li><strong>Right to Equality (Art 14-18):</strong> Equal before law, no discrimination on basis of religion/caste/sex/place of birth, equal opportunity in government jobs, abolition of untouchability.</li>
<li><strong>Right to Freedom (Art 19-22):</strong> Freedom of speech, assembly, movement, residence, profession. Right to life and personal liberty.</li>
<li><strong>Right against Exploitation (Art 23-24):</strong> Prohibition of human trafficking, forced labour, child labour (below 14 in hazardous industries).</li>
<li><strong>Right to Freedom of Religion (Art 25-28):</strong> Freedom of conscience, practice, and propagation.</li>
<li><strong>Cultural and Educational Rights (Art 29-30):</strong> Minorities can conserve their culture and run their own schools.</li>
<li><strong>Right to Constitutional Remedies (Art 32):</strong> Right to approach courts to enforce rights. Called "heart and soul" of constitution by Ambedkar.</li>
</ol>
<h4>Directive Principles of State Policy</h4>
<p>Non-enforceable guidelines for the government (Articles 36-51). Aim at social and economic justice — minimum wages, free education (now a right for ages 6-14), equal pay, welfare state ideals.</p>`,
            qa: [
              { q: 'What is Article 32 and why did Ambedkar call it "heart and soul of the Constitution"?', a: 'Article 32 is the Right to Constitutional Remedies — the right to approach the Supreme Court directly when any Fundamental Right is violated. Ambedkar called it "heart and soul" because without enforcement, rights are meaningless. This right itself cannot be suspended (except during Emergency).' },
              { q: 'What are the restrictions on freedom of speech in India?', a: 'Freedom of speech (Art 19) is not absolute. Restrictions include: speech that threatens sovereignty or integrity of India; causes public disorder; is defamatory; contempt of court; obscene speech; speech that incites hatred against communities. The restrictions must be reasonable and by law.' },
              { q: 'What is the difference between Fundamental Rights and Directive Principles?', a: 'Fundamental Rights (Part III): Enforceable in courts — citizens can sue the government if rights are violated. Negative obligations — prohibit the state from certain actions. Directive Principles (Part IV): Not enforceable in courts — citizens cannot sue. But government is morally obligated. Positive obligations — direct government to achieve social/economic goals.' },
              { q: 'Why is the right against exploitation important for India?', a: 'Historical context: India had widespread bonded labour, child labour, and trafficking. Article 23 prohibits forced labour, begar (unpaid work), and human trafficking. Article 24 prohibits child labour in factories, mines, and hazardous industries. These rights protect vulnerable populations — especially poor, rural, Dalit, and tribal communities — from exploitation.' },
            ]
          },
        ]
      },
      economics: {
        id: 'economics', topics: [
          {
            id: 'story-of-village-palampur',
            title: 'The Story of Village Palampur',
            subtopics: 'Farming, Non-farming activities, Land, Labour, Capital, Human capital',
            definition: 'Through the fictional village of Palampur, we learn how a rural Indian economy works — how farming, trade, and small businesses interact, and how different factors of production (land, labour, capital) combine to create economic activity.',
            content: `<p>Most Indians live in villages. Understanding rural economics — how land is distributed, how labourers work and are paid, and how trade happens — explains both India's development and its inequalities.</p>
<h4>Farming in Palampur</h4>
<p>Land is the most important production resource — fixed in quantity. Multiple cropping (two or three crops a year using irrigation) increases production. Green Revolution introduced HYV seeds, fertilisers, irrigation — tripled yields but benefited large farmers more.</p>
<h4>Distribution of Land</h4>
<p>Unequal: large farmers own most land and hire labourers. Small farmers may not have enough land to survive. Landless labourers (often Dalit) must work for others at minimum wages.</p>
<h4>Non-farming Activities</h4>
<p>Dairy, small manufacturing (jaggery making), shopkeeping, transport. These provide supplementary income but farming dominates the rural economy.</p>
<h4>Capital</h4>
<p>Physical capital (tools, machinery). Working capital (seeds, fertiliser — used in one production cycle). Human capital (skills, knowledge — educated workers are more productive).</p>`,
            qa: [
              { q: 'What is "multiple cropping" and how does it increase production?', a: 'Multiple cropping is growing two or more crops on the same land in the same year. By using irrigation (not waiting for rain) and fast-growing HYV seeds, farmers can grow wheat after rice harvest. This increases annual production from the same land.' },
              { q: 'Why do large farmers have more market power than small farmers?', a: 'Large farmers have surplus production after feeding their family. They can wait for better prices and sell in bulk. Small farmers need cash immediately (to repay loans, buy food) and must sell at low post-harvest prices. This inequality keeps small farmers poor.' },
              { q: 'What is the difference between physical capital and human capital?', a: 'Physical capital: tangible assets used in production — tools, machines, buildings, raw materials. Human capital: people\'s skills, knowledge, health, and experience. Education and training increase human capital. Both are needed for production.' },
              { q: 'Who are landless labourers and what are their challenges?', a: 'Landless labourers own no land and must work on others\' farms for wages. Challenges: seasonal work (no work outside farming season), very low wages (often below minimum wage), no job security, dependent on large farmers, and often belong to lower castes (historical discrimination).' },
            ]
          },
          {
            id: 'poverty-as-challenge',
            title: 'Poverty as a Challenge',
            subtopics: 'Poverty line, Causes of poverty, Vulnerability, Anti-poverty measures, MGNREGA',
            definition: 'Poverty is the inability to afford basic necessities like food, clothing, shelter, education, and healthcare. India has made progress in reducing poverty but millions still live below the poverty line.',
            content: `<p>Despite being one of the fastest-growing economies, India still has hundreds of millions in poverty. Understanding what causes poverty and how to reduce it is one of the most important challenges of our time.</p>
<h4>Measuring Poverty</h4>
<p><strong>Poverty line:</strong> Minimum income to meet basic needs. In India, calculated based on monthly consumption expenditure. Those earning below this are BPL (Below Poverty Line). India uses caloric intake as basis: 2400 kcal/day (rural), 2100 kcal/day (urban).</p>
<h4>Causes of Poverty</h4>
<ul>
<li>Low economic growth and unemployment</li>
<li>Unequal distribution of land and assets</li>
<li>Low levels of education and healthcare</li>
<li>Social discrimination (caste, gender)</li>
<li>High population growth</li>
</ul>
<h4>Government Measures</h4>
<p>MGNREGA (Mahatma Gandhi National Rural Employment Guarantee Act): guarantees 100 days of wage employment per year to rural households. PDS (Public Distribution System): subsidised food grains to BPL families. PM-KISAN: direct income support to farmers.</p>`,
            qa: [
              { q: 'What is the poverty line and how is it determined in India?', a: 'The poverty line is the minimum level of income/expenditure needed to meet basic needs (food, clothing, shelter). India determines it based on caloric intake — 2400 kcal/day (rural) and 2100 kcal/day (urban). Households spending below what is needed to meet these caloric needs are classified as BPL (Below Poverty Line).' },
              { q: 'What is MGNREGA and how does it help the poor?', a: 'MGNREGA (Mahatma Gandhi National Rural Employment Guarantee Act, 2005) guarantees every rural household 100 days of unskilled wage employment per year. It provides income to the rural poor, creates productive assets (roads, water bodies), reduces distress migration, and strengthens bargaining power of labourers.' },
              { q: 'Why are women and children more vulnerable to poverty?', a: 'Women often have lower wages, less property rights, less access to education and credit, and face social discrimination. Children in poor families drop out of school to work, perpetuating the poverty cycle. Both women and children are disproportionately affected by malnutrition and lack of healthcare in poor households.' },
              { q: 'Has India made progress in reducing poverty?', a: 'Yes. India\'s poverty rate fell from about 45% (1993) to under 22% (2012) and continues to decline. Reasons: economic growth, MGNREGA, PDS, improved infrastructure, and social welfare schemes. However, hundreds of millions still lack basic amenities.' },
            ]
          },
          {
            id: 'food-security',
            title: 'Food Security in India',
            subtopics: 'Food security meaning, Buffer stock, PDS, Food production, Hunger and malnutrition, Green Revolution',
            definition: 'Food security means all people at all times have access to sufficient, safe, and nutritious food. India achieved food self-sufficiency through the Green Revolution, but food insecurity and malnutrition still affect millions.',
            content: `<p>India produces enough food to feed every citizen, yet malnutrition affects millions. The challenge is not just producing enough food — it is ensuring everyone can access and afford it.</p>
<h4>Three Pillars of Food Security</h4>
<ul>
<li><strong>Availability:</strong> Enough food produced, imported, or stored.</li>
<li><strong>Access:</strong> People can afford to buy food (income/prices).</li>
<li><strong>Absorption:</strong> Body can utilise food (clean water, sanitation, healthcare needed).</li>
</ul>
<h4>Green Revolution</h4>
<p>In the 1960s, India faced severe food shortages. The Green Revolution introduced: High Yielding Varieties (HYV) of wheat and rice, irrigation expansion, chemical fertilisers and pesticides. India went from food-importing to food self-sufficient by the 1980s.</p>
<h4>Buffer Stock and PDS</h4>
<p>Government buys grain at Minimum Support Price (MSP) and stores it as buffer stock (food reserves). This grain is distributed through Public Distribution System (PDS) — ration shops selling rice, wheat, sugar, kerosene to the poor at subsidised prices.</p>`,
            qa: [
              { q: 'What is the Green Revolution and what did it achieve?', a: 'The Green Revolution (1960s-70s) introduced High Yielding Variety (HYV) seeds (mainly wheat by Norman Borlaug and M.S. Swaminathan), expanded irrigation, and promoted fertiliser use. India\'s wheat production tripled and rice production doubled. India moved from food-dependent to food self-sufficient — averting the famines predicted for the 1970s. However, it benefited mainly large farmers in Punjab, Haryana, and UP.' },
              { q: 'What is the Public Distribution System (PDS)?', a: 'PDS is a government system of ration shops that sell essential commodities (rice, wheat, sugar, kerosene) to eligible households at subsidised prices. BPL (Below Poverty Line) families get the most subsidy. Government procures grain from farmers at MSP, stores it, and distributes through ~5 lakh fair price shops across India. It is the world\'s largest food distribution system.' },
              { q: 'Despite high food production, why do many Indians go hungry?', a: 'India produces enough food for all citizens, but hunger persists because: (1) Food is not distributed equitably — some regions have surpluses while others face shortages. (2) The poorest cannot afford food even when available — lack of purchasing power. (3) PDS has leakages and inefficiencies. (4) Malnutrition occurs even with enough calories — poor diet quality and lack of clean water worsen absorption.' },
            ]
          },
        ]
      },
      chemistry: {
        id: 'chemistry', topics: [
          {
            id: 'matter-surroundings',
            title: 'Matter in Our Surroundings',
            subtopics: 'States of matter, Properties, Interconversion, Evaporation, Latent heat, Plasma and BEC',
            definition: 'Matter is anything that has mass and occupies space. It exists in three common states — solid, liquid, and gas — which differ in the arrangement and energy of their particles. Changes of state involve absorption or release of heat energy.',
            content: `<p>Everything you see around you — from the air you breathe to the iron in blood — is matter. Understanding the three states of matter and how energy causes them to transform is fundamental to all science.</p>
<h4>States of Matter</h4>
<ul>
<li><strong>Solid:</strong> Fixed shape and volume. Particles tightly packed, vibrate in place. Strong inter-molecular forces.</li>
<li><strong>Liquid:</strong> Fixed volume, no fixed shape (takes container shape). Particles close but can slide. Moderate forces.</li>
<li><strong>Gas:</strong> No fixed shape or volume. Particles very far apart, move randomly at high speed. Very weak forces.</li>
</ul>
<h4>Changes of State</h4>
<div class="formula">Solid ⇌ Liquid ⇌ Gas</div>
<p>Melting (solid→liquid), Freezing (liquid→solid), Vaporisation (liquid→gas), Condensation (gas→liquid), Sublimation (solid→gas directly, e.g., dry ice, camphor).</p>
<h4>Latent Heat</h4>
<p>Heat absorbed/released during change of state WITHOUT change in temperature. Latent heat of fusion (melting ice), latent heat of vaporisation (boiling water).</p>
<h4>Evaporation and Cooling</h4>
<p>Evaporation causes cooling — energetic surface molecules escape, leaving slower (cooler) molecules. Why we sweat to cool down; why earthen pots cool water.</p>`,
            qa: [
              { q: 'Why does a steel spoon feel colder than a wooden spoon at the same room temperature?', a: 'Both are at room temperature, but steel conducts heat much faster than wood. When you touch steel, heat flows rapidly from your warm fingers to the steel — making your fingers feel cold. Wood conducts heat slowly, so little heat is transferred — it feels closer to body temperature. It\'s not temperature but heat conductivity that makes the difference.' },
              { q: 'What is sublimation? Give two examples.', a: 'Sublimation is the direct change from solid to gas without passing through the liquid state. Examples: (1) Dry ice (solid CO₂) sublimes at −78.5°C — used in fog machines and food preservation. (2) Camphor (placed in a dish gradually disappears). (3) Naphthalene balls in wardrobes. (4) Ammonium chloride sublimes on heating.' },
              { q: 'Why does a bottle of cold water left outside on a humid day become wet on the outside?', a: 'The outside of the cold bottle is below the dew point of the surrounding air. Water vapour in the warm humid air comes in contact with the cold surface, loses energy, and condenses (gas → liquid) into water droplets on the bottle surface. This is condensation — the reverse of evaporation.' },
            ]
          },
          {
            id: 'is-matter-pure',
            title: 'Is Matter Around Us Pure?',
            subtopics: 'Pure substances vs mixtures, Elements, Compounds, Solutions, Suspensions, Colloids, Separation methods',
            definition: 'A pure substance contains only one type of matter with definite properties. Most things around us are mixtures — combinations of two or more substances. Understanding this helps in separating and purifying materials.',
            content: `<p>The water from your tap, the air you breathe, the food you eat — all are mixtures. Chemistry involves separating mixtures into pure substances and understanding why pure substances behave differently from mixtures.</p>
<h4>Pure Substances vs Mixtures</h4>
<p><strong>Pure substance:</strong> Fixed composition, definite properties. Elements (one type of atom — gold, oxygen) or Compounds (chemically combined elements — water H₂O, salt NaCl).</p>
<p><strong>Mixture:</strong> Variable composition, properties are combination of components. Can be separated by physical methods. Homogeneous (uniform — solution like saltwater) or Heterogeneous (non-uniform — sand in water).</p>
<h4>Types of Solutions</h4>
<p>Solution: solute dissolved in solvent. Concentrated/dilute. Saturated (maximum dissolved at that temperature). Solubility increases with temperature (mostly).</p>
<h4>Colloids and Suspensions</h4>
<p>Colloid: particles 1–100 nm — cannot be seen, do not settle. Scatters light (Tyndall effect). Examples: milk, fog, jelly. Suspension: particles >100 nm — settle on standing. Example: muddy water.</p>
<h4>Separation Methods</h4>
<p>Filtration (solid from liquid), Evaporation (soluble solid from solution), Distillation (liquid from solution by boiling), Chromatography (coloured mixtures), Centrifugation (cream from milk).</p>`,
            qa: [
              { q: 'What is the Tyndall effect and which type of mixture shows it?', a: 'The Tyndall effect is the scattering of light by colloidal particles — making the beam visible. Colloids (milk, fog, aerosols) show Tyndall effect because their particles (1-100nm) are big enough to scatter light but too small to see or settle. True solutions do NOT show it (particles too small). Suspensions do show it but particles settle. Used to distinguish colloids from solutions.' },
              { q: 'What is the difference between a compound and a mixture?', a: 'Compound: elements combined CHEMICALLY in fixed ratio (H₂O always 2:1 H:O). Has new properties different from elements (Na is explosive metal, Cl is poisonous gas, NaCl is safe table salt). Separated only by chemical methods. Mixture: substances combined PHYSICALLY in any ratio. Retains properties of components. Separated by physical methods (filtration, distillation, magnets).' },
              { q: 'How is sea water purified to get drinking water?', a: 'Desalination of seawater: (1) Distillation: seawater is heated, water evaporates as steam, salt stays, steam condenses to give pure water. (2) Reverse osmosis (RO): high pressure forces water through a semi-permeable membrane that blocks salt ions. Used in India\'s coastal areas (Chennai) and Gulf countries. Distillation is energy-intensive; RO is more efficient for large-scale use.' },
            ]
          },
          {
            id: 'atoms-molecules-9',
            title: 'Atoms and Molecules',
            subtopics: 'Laws of chemical combination, Atoms, Molecules, Atomic mass, Mole concept, Formulae',
            definition: 'Atoms are the smallest particles of an element that can take part in a chemical reaction. Molecules are groups of atoms bonded together. The mole is the unit that allows counting atoms and molecules by weighing.',
            content: `<p>Atoms are incredibly tiny — a single drop of water contains more water molecules than there are stars in the Milky Way galaxy. The mole concept bridges the atomic world and the practical world of laboratory measurements.</p>
<h4>Laws of Chemical Combination</h4>
<ul>
<li><strong>Law of Conservation of Mass:</strong> Total mass of reactants = total mass of products</li>
<li><strong>Law of Constant Proportions:</strong> A compound always contains the same elements in the same ratio by mass</li>
</ul>
<h4>Atomic Mass</h4>
<p>Relative atomic mass compared to Carbon-12. Hydrogen = 1u, Carbon = 12u, Oxygen = 16u.</p>
<h4>Molecules and Chemical Formulae</h4>
<p>Molecular mass = sum of atomic masses. H₂O = 2(1) + 16 = 18u. NaCl = 23 + 35.5 = 58.5u.</p>
<h4>The Mole</h4>
<div class="formula">1 mole = 6.022 × 10²³ particles (Avogadro's number)</div>
<div class="formula">Molar mass = molecular mass in grams</div>
<div class="formula">No. of moles = given mass / molar mass</div>
<p>1 mole of water = 18g = 6.022×10²³ water molecules.</p>`,
            qa: [
              { q: 'Calculate the number of molecules in 36g of water.', a: 'Molar mass of H₂O = 18g/mol. Moles = 36/18 = 2 moles. Molecules = 2 × 6.022×10²³ = 12.044×10²³ molecules.' },
              { q: 'State the law of constant proportions with an example.', a: 'A compound always contains the same elements in the same mass ratio, regardless of the source or method of preparation. Example: Water (H₂O) — whether from sea, rain, or lab, always has H:O = 1:8 by mass. This shows that compounds have a definite chemical composition.' },
              { q: 'What is the molecular mass of H₂SO₄?', a: 'H₂SO₄: 2H + S + 4O = 2(1) + 32 + 4(16) = 2 + 32 + 64 = 98u.' },
              { q: 'How many moles are in 56g of iron? (Atomic mass of Fe = 56)', a: 'Moles of Fe = mass / molar mass = 56g / 56g per mol = 1 mole.' },
            ]
          },
          {
            id: 'structure-of-atom-9',
            title: 'Structure of the Atom',
            subtopics: 'Electron, Proton, Neutron, Thomson/Rutherford/Bohr models, Valency, Isotopes',
            definition: 'An atom consists of a central nucleus (protons + neutrons) surrounded by electrons in shells. The number of protons (atomic number) determines the element. The atomic model evolved from Thomson (1897) to Bohr (1913).',
            content: `<p>Our understanding of the atom's structure completely changed physics and chemistry in the 20th century, leading to quantum mechanics, nuclear energy, and modern electronics.</p>
<h4>Subatomic Particles</h4>
<ul>
<li><strong>Proton:</strong> +1 charge, 1 unit mass, in nucleus</li>
<li><strong>Neutron:</strong> No charge, 1 unit mass, in nucleus</li>
<li><strong>Electron:</strong> −1 charge, negligible mass (1/1837 of proton), orbits nucleus</li>
</ul>
<h4>Atomic Models</h4>
<p><strong>Thomson's model ("plum pudding"):</strong> Positive sphere with electrons embedded. Disproved by Rutherford.</p>
<p><strong>Rutherford's model:</strong> Nucleus contains positive charge. Electrons orbit around it. Limitation: couldn't explain why electrons don't fall into nucleus.</p>
<p><strong>Bohr's model:</strong> Electrons move in fixed orbits/shells (K, L, M, N). Each shell has fixed energy. No radiation emitted when in a shell. Works for hydrogen.</p>
<h4>Electronic Configuration</h4>
<div class="formula">Shell capacity: K=2, L=8, M=18. Fill shells from inside out.</div>
<p>Valency = electrons in outermost shell (if ≤4) or 8−outermost electrons (if >4).</p>
<h4>Isotopes and Isobars</h4>
<p>Isotopes: same atomic number, different mass number (C-12, C-13, C-14). Isobars: same mass number, different atomic numbers (Ca-40, Ar-40).</p>`,
            qa: [
              { q: 'Write the electronic configuration of Chlorine (atomic number 17).', a: 'Total electrons = 17. K shell = 2, L shell = 8, M shell = 7. Configuration: 2, 8, 7. Valency = 8 − 7 = 1.' },
              { q: 'What was the limitation of Rutherford\'s model?', a: 'Rutherford\'s nuclear model couldn\'t explain why electrons don\'t spiral into the positively charged nucleus (accelerating charges should radiate energy and collapse). Also couldn\'t explain the line spectra of atoms. Bohr resolved this by proposing fixed energy levels where electrons don\'t radiate.' },
              { q: 'What are isotopes? Give an example and their use.', a: 'Isotopes are atoms of the same element with the same atomic number but different mass numbers (different number of neutrons). Example: Carbon-12 (6p+6n) and Carbon-14 (6p+8n). Uses: Carbon-14 in radiocarbon dating; Uranium-235 in nuclear reactors; Iodine-131 in treating thyroid cancer.' },
              { q: 'An atom has atomic number 11 and mass number 23. Find: protons, neutrons, electrons.', a: 'Atomic number (Z) = 11 = number of protons. Mass number (A) = 23 = protons + neutrons. Neutrons = 23 − 11 = 12. Electrons = Protons = 11 (neutral atom). This is Sodium (Na).' },
            ]
          },
        ]
      },
    }
  },

  // ── CLASS 10 ─────────────────────────────────────────────────
  'class-10': {
    id: 'class-10', label: 'Class 10', shortLabel: '10th',
    board: 'CBSE', emoji: '🔟',
    description: 'Board exams — Quadratics, Chemical reactions, Nationalism & Novels',
    subjects: {
      mathematics: {
        id: 'mathematics', topics: [
          {
            id: 'real-numbers',
            title: 'Real Numbers',
            subtopics: 'Euclid\'s lemma, HCF & LCM, Irrational proof, Decimal expansion',
            definition: 'Real numbers are the complete set of all rational and irrational numbers, represented by every point on the number line. Class 10 focuses on their properties and proofs related to divisibility.',
            content: `<p>Class 10 Real Numbers revisits the familiar number line but dives deeper — proving that numbers like √2 are truly irrational, and using Euclid's algorithm for efficient HCF computation.</p>
<h4>Euclid's Division Lemma</h4>
<p>For any two positive integers a and b, there exist unique integers q (quotient) and r (remainder) such that: <strong>a = bq + r</strong>, where 0 ≤ r < b.</p>
<div class="example-box"><strong>Example:</strong> a = 45, b = 7. 45 = 7×6 + 3. So q=6, r=3.</div>
<h4>Euclid's Division Algorithm (for HCF)</h4>
<p>Apply lemma repeatedly until remainder = 0. The last non-zero remainder is the HCF.</p>
<h4>Fundamental Theorem of Arithmetic</h4>
<p>Every composite number can be expressed as a product of primes in a unique way (ignoring order). This is used to find HCF (product of common primes, lowest powers) and LCM (product of all primes, highest powers).</p>
<div class="formula">HCF × LCM = Product of two numbers</div>
<h4>Proving Irrationality</h4>
<p>To prove √2 is irrational: assume it's rational (√2 = p/q in lowest terms). Then 2 = p²/q² → p² = 2q² → 2 divides p → p = 2k → 2q² = 4k² → q² = 2k² → 2 divides q. Contradiction! So √2 is irrational.</p>`,
            qa: [
              { q: 'Find HCF of 96 and 72 using Euclid\'s algorithm.', a: '96 = 72×1 + 24. 72 = 24×3 + 0. Last non-zero remainder = 24. HCF = 24.' },
              { q: 'If HCF(306, 657) = 9, find LCM.', a: 'LCM = (306 × 657) / HCF = (306 × 657) / 9 = 22338.' },
              { q: 'Prove that 3+√5 is irrational.', a: 'Assume rational: 3+√5 = p/q. Then √5 = p/q−3 = (p−3q)/q = rational. But √5 is irrational — contradiction. So 3+√5 is irrational.' },
              { q: 'Without actual division, state whether 17/8 terminates or repeats.', a: 'Denominator 8 = 2³ (only factor 2, no 5). So 17/8 is a terminating decimal. = 2.125' },
            ]
          },
          {
            id: 'quadratic-equations',
            title: 'Quadratic Equations',
            subtopics: 'Standard form, Factorisation, Completing the square, Quadratic formula, Discriminant, Nature of roots',
            definition: 'A quadratic equation is a polynomial equation of degree 2 in the form ax² + bx + c = 0, where a ≠ 0. It has at most two solutions (roots) which may be real or complex.',
            content: `<p>Quadratic equations appear everywhere — in projectile motion (parabolic paths), engineering (cable shapes), and economics (profit maximisation). Mastering them is essential for any science or commerce stream.</p>
<h4>Methods of Solving</h4>
<p><strong>1. Factorisation:</strong> Express as (x−p)(x−q) = 0, then x = p or x = q.</p>
<p><strong>2. Completing the Square:</strong> Rewrite in the form (x + b/2a)² = ...</p>
<p><strong>3. Quadratic Formula (always works):</strong></p>
<div class="formula">x = [−b ± √(b²−4ac)] / 2a</div>
<h4>Discriminant (D = b² − 4ac)</h4>
<ul>
<li>D > 0: Two distinct real roots</li>
<li>D = 0: Two equal (repeated) real roots</li>
<li>D < 0: No real roots (complex roots)</li>
</ul>
<div class="example-box"><strong>Example:</strong> Solve x² − 5x + 6 = 0<br/>Factors: (x−2)(x−3) = 0. Roots: x = 2 or x = 3.<br/>Check: D = 25−24 = 1 > 0 ✓ (two distinct roots)</div>`,
            qa: [
              { q: 'Solve using quadratic formula: 2x² − 5x + 3 = 0', a: 'a=2, b=−5, c=3. D = 25−24 = 1. x = (5±1)/4. x = 6/4=1.5 or x = 4/4=1. Roots: x=3/2 or x=1.' },
              { q: 'Find k if 2x² + kx + 3 = 0 has equal roots.', a: 'For equal roots: D=0. k²−4(2)(3)=0 → k²=24 → k=±2√6' },
              { q: 'A train travels 360 km at a uniform speed. If speed were 5 km/h more, time would be 1 hour less. Find speed.', a: 'Let speed = x. 360/x − 360/(x+5) = 1. 360(x+5−x) = x(x+5). 1800 = x²+5x. x²+5x−1800=0. (x+45)(x−40)=0. x=40 km/h.' },
              { q: 'What does a negative discriminant mean?', a: 'D < 0 means the quadratic equation has no real roots. The parabola does not cross the x-axis. The roots are complex (imaginary) numbers.' },
            ]
          },
          {
            id: 'polynomials-10',
            title: 'Polynomials',
            subtopics: 'Zeroes of polynomial, Relationship between zeroes and coefficients, Division algorithm',
            definition: 'Class 10 polynomials focuses on the relationship between zeroes (roots) and coefficients of quadratic and cubic polynomials, and the division algorithm for polynomials.',
            content: `<p>The relationship between zeroes and coefficients is a powerful tool. Knowing just the sum and product of zeroes, you can reconstruct the entire quadratic polynomial.</p>
<h4>Zeroes of a Polynomial</h4>
<p>For p(x), values of x where p(x) = 0 are zeroes. Geometrically, where the graph y=p(x) cuts the x-axis.</p>
<h4>For Quadratic ax² + bx + c</h4>
<div class="formula">Sum of zeroes (α+β) = −b/a</div>
<div class="formula">Product of zeroes (αβ) = c/a</div>
<p>Forming quadratic from zeroes: x² − (α+β)x + αβ = 0</p>
<h4>For Cubic ax³ + bx² + cx + d</h4>
<div class="formula">α+β+γ = −b/a | αβ+βγ+γα = c/a | αβγ = −d/a</div>
<h4>Division Algorithm</h4>
<p>p(x) = g(x)×q(x) + r(x). Degree of remainder < degree of divisor.</p>`,
            qa: [
              { q: 'Find sum and product of zeroes of 3x² - 5x + 2', a: 'Sum = -(-5)/3 = 5/3. Product = 2/3.' },
              { q: 'Form quadratic polynomial with zeroes 3 and -4.', a: 'Sum = -1, product = -12. Polynomial: x² - (sum)x + product = x² + x - 12' },
              { q: 'Verify zeroes of x² - 5x + 6 = 0 are 2 and 3.', a: 'Sum = 2+3 = 5 = -(-5)/1 ✓. Product = 2×3 = 6 = 6/1 ✓' },
              { q: 'If α and β are zeroes of 2x²-7x+3, find 1/α + 1/β.', a: '1/α+1/β = (α+β)/αβ = (7/2)/(3/2) = 7/3' },
            ]
          },
          {
            id: 'arithmetic-progressions',
            title: 'Arithmetic Progressions',
            subtopics: 'AP definition, nth term, Sum of n terms, Applications',
            definition: 'An Arithmetic Progression (AP) is a sequence where each term differs from the previous by a constant called the common difference (d). Finding specific terms and sums of APs is essential for competitive exams.',
            content: `<p>APs model many real situations — saving a fixed amount monthly, seats in a theatre (each row having one more seat than the previous), or simple interest calculations.</p>
<h4>General Term (nth term)</h4>
<div class="formula">aₙ = a + (n−1)d</div>
<p>a = first term, d = common difference, n = term number.</p>
<h4>Sum of First n Terms</h4>
<div class="formula">Sₙ = n/2 × [2a + (n−1)d] = n/2 × (first term + last term)</div>
<h4>Finding Common Difference</h4>
<p>d = any term − previous term. Must be constant throughout the AP.</p>
<div class="example-box"><strong>Example:</strong> AP: 2, 5, 8, 11… a=2, d=3. Find 20th term: a₂₀ = 2 + 19×3 = 59. Sum of 20 terms: S₂₀ = 20/2 × (2+59) = 610.</div>`,
            qa: [
              { q: 'Find the 15th term of 3, 7, 11, 15...', a: 'a=3, d=4. a₁₅ = 3 + 14×4 = 3 + 56 = 59' },
              { q: 'Find sum of first 20 terms of 1+3+5+...', a: 'a=1, d=2. S₂₀ = 20/2×[2(1)+19(2)] = 10×40 = 400 (also = 20² = 400)' },
              { q: 'How many terms of the AP 9, 17, 25... must be taken to give sum 636?', a: 'a=9, d=8. Sₙ = n/2[18+8(n-1)] = 636. n[18+8n-8] = 1272. 8n²+10n-1272=0. 4n²+5n-636=0. n=12 (taking positive root).' },
              { q: 'The 7th term of an AP is 32 and 13th term is 62. Find the AP.', a: 'a₇ = a+6d = 32, a₁₃ = a+12d = 62. Subtracting: 6d = 30 → d = 5. a = 32-30 = 2. AP: 2, 7, 12, 17...' },
            ]
          },
          {
            id: 'intro-trigonometry',
            title: 'Introduction to Trigonometry',
            subtopics: 'Trigonometric ratios, Specific angles, Complementary angles, Trigonometric identities',
            definition: 'Trigonometry deals with the relationships between the sides and angles of right-angled triangles. The six trigonometric ratios (sin, cos, tan, cosec, sec, cot) relate any angle to side ratios.',
            content: `<p>Trigonometry means "triangle measurement." It is used in navigation, architecture, physics, and engineering. Architects use it to calculate heights of buildings; engineers use it in bridge design.</p>
<h4>Trigonometric Ratios</h4>
<div class="formula">sin θ = Opposite/Hypotenuse</div>
<div class="formula">cos θ = Adjacent/Hypotenuse</div>
<div class="formula">tan θ = Opposite/Adjacent = sin θ/cos θ</div>
<p>Reciprocals: cosec θ = 1/sin θ, sec θ = 1/cos θ, cot θ = 1/tan θ</p>
<h4>Standard Values</h4>
<table style="font-size:.85rem; border-collapse:collapse">
<tr><th>Angle</th><th>0°</th><th>30°</th><th>45°</th><th>60°</th><th>90°</th></tr>
<tr><td>sin</td><td>0</td><td>1/2</td><td>1/√2</td><td>√3/2</td><td>1</td></tr>
<tr><td>cos</td><td>1</td><td>√3/2</td><td>1/√2</td><td>1/2</td><td>0</td></tr>
</table>
<h4>Fundamental Identity</h4>
<div class="formula">sin²θ + cos²θ = 1</div>
<div class="formula">1 + tan²θ = sec²θ | 1 + cot²θ = cosec²θ</div>`,
            qa: [
              { q: 'In a right triangle, if sin A = 3/5, find cos A and tan A.', a: 'sin A = 3/5 → opposite=3, hypotenuse=5. Adjacent = √(25-9) = 4. cos A = 4/5, tan A = 3/4.' },
              { q: 'Evaluate: (sin 30° + cos 60°) × (tan 45°)', a: '(1/2 + 1/2) × 1 = 1 × 1 = 1' },
              { q: 'Prove: (1-sin²A)/cos²A = 1', a: 'LHS = cos²A/cos²A (since sin²A + cos²A = 1 → 1-sin²A = cos²A) = 1 = RHS ✓' },
              { q: 'If tan θ = 1, find sin θ + cos θ.', a: 'tan θ = 1 → θ = 45°. sin 45° + cos 45° = 1/√2 + 1/√2 = 2/√2 = √2' },
            ]
          },
          {
            id: 'surface-areas-volumes',
            title: 'Surface Areas and Volumes',
            subtopics: 'Combination of solids, Frustum of cone, Conversion of shapes',
            definition: 'Class 10 extends mensuration to combinations of solids (a cone on a cylinder, a hemisphere on a cuboid) and the frustum of a cone — formed when a cone is cut parallel to the base.',
            content: `<p>Real objects are rarely simple geometric shapes. An ice cream cone is a hemisphere + cone. A bucket is a frustum. Combining knowledge of individual shapes allows us to calculate for any complex shape.</p>
<h4>Combinations of Solids</h4>
<p>Total surface area: sum of visible surfaces (subtract overlapping parts). Volume: simply add volumes of component solids.</p>
<h4>Frustum of a Cone</h4>
<p>When a cone is cut by a plane parallel to the base, the lower part is a frustum.</p>
<div class="formula">Volume of frustum = πh/3(R² + r² + Rr)</div>
<div class="formula">Curved SA = πl(R+r), where l = √[h²+(R-r)²]</div>
<h4>Conversion</h4>
<p>When a solid is melted and recast, total volume is conserved (assuming no loss).</p>
<div class="example-box"><strong>Example:</strong> Sphere melted to make wire of radius 1mm, length 264cm. Find sphere radius: (4/3)πr³ = π×(0.1)²×264. Solve for r.</div>`,
            qa: [
              { q: 'A solid is made of a hemisphere of radius 7cm on top of a cone of height 4cm. Find volume.', a: 'V_hemisphere = (2/3)×(22/7)×7³ = 718.67 cm³. V_cone = (1/3)×(22/7)×49×4 = 205.33 cm³. Total = 924 cm³.' },
              { q: 'A bucket has top radius 18cm, bottom radius 12cm, height 20cm. Find volume.', a: 'Frustum: V = πh/3(R²+r²+Rr) = (22/7)×20/3×(324+144+216) = (22/7)×20/3×684 ≈ 14390 cm³' },
              { q: 'A metallic sphere of radius 6cm is melted into small spheres of radius 1cm. How many?', a: 'V_large = (4/3)π×216. V_small = (4/3)π×1. Number = 216/1 = 216 small spheres.' },
              { q: 'What is the slant height of a frustum?', a: 'Slant height l = √[h² + (R-r)²], where h = vertical height, R = radius of larger base, r = radius of smaller base. It is used to calculate the curved surface area.' },
            ]
          },
          {
            id: 'probability-10',
            title: 'Probability',
            subtopics: 'Experimental vs theoretical, Sample space, Events, Compound events',
            definition: 'Probability is the measure of the likelihood of an event occurring, expressed as a number between 0 (impossible) and 1 (certain). Classical probability = favourable outcomes / total outcomes.',
            content: `<p>From weather forecasts to medical diagnoses, insurance pricing to quality control — probability quantifies uncertainty and allows rational decision-making.</p>
<h4>Basic Probability</h4>
<div class="formula">P(E) = Number of favourable outcomes / Total number of outcomes</div>
<p>P(E) is always between 0 and 1. P(E) + P(Ē) = 1 (E and Ē are complementary).</p>
<h4>Sample Space</h4>
<p>All possible outcomes. Tossing a coin: {H, T}. Rolling a die: {1,2,3,4,5,6}. Two coins: {HH, HT, TH, TT}.</p>
<h4>Types of Events</h4>
<ul>
<li>Sure event: P = 1 (e.g., getting a number ≤ 6 on a die)</li>
<li>Impossible event: P = 0 (getting 7 on a die)</li>
<li>Complementary event: P(not A) = 1 − P(A)</li>
</ul>`,
            qa: [
              { q: 'A die is thrown. What is the probability of getting a prime number?', a: 'Prime numbers on die: 2, 3, 5 (three outcomes). P(prime) = 3/6 = 1/2' },
              { q: 'A bag has 3 red, 4 blue, 5 green balls. One drawn at random. Find P(not red).', a: 'Total = 12. P(red) = 3/12 = 1/4. P(not red) = 1 - 1/4 = 3/4' },
              { q: 'Two coins are tossed. Find P(at least one head).', a: 'Sample space: {HH, HT, TH, TT}. At least one head: HH, HT, TH (3 outcomes). P = 3/4' },
              { q: 'Cards numbered 1-25 are placed in a box. Find P(divisible by both 2 and 3).', a: 'Divisible by 6: 6, 12, 18, 24 → 4 outcomes. P = 4/25' },
            ]
          },
          {
            id: 'pair-linear-equations-10',
            title: 'Pair of Linear Equations in Two Variables',
            subtopics: 'Graphical method, Substitution, Elimination, Cross-multiplication, Consistency',
            definition: 'A pair of linear equations in two variables represents two straight lines. The solution is the point of intersection (if it exists). Lines may be consistent (one/infinite solutions) or inconsistent (no solution).',
            content: `<p>Linear equations in two variables model countless real-world situations — from mixing solutions to calculating ages, speeds and distances. The pair of equations gives us two constraints to find two unknowns.</p>
<h4>Graphical Method</h4>
<p>Plot both lines. Intersection point = unique solution. Parallel lines = no solution. Coincident lines = infinite solutions.</p>
<h4>Consistency Conditions</h4>
<div class="formula">a₁/a₂ ≠ b₁/b₂ → Consistent (unique solution)</div>
<div class="formula">a₁/a₂ = b₁/b₂ = c₁/c₂ → Consistent (infinite solutions)</div>
<div class="formula">a₁/a₂ = b₁/b₂ ≠ c₁/c₂ → Inconsistent (no solution)</div>
<h4>Elimination Method</h4>
<p>Make coefficients of one variable equal, then add or subtract equations to eliminate that variable.</p>
<h4>Substitution Method</h4>
<p>Express one variable in terms of other from one equation, substitute into the other equation.</p>`,
            qa: [
              { q: 'Solve: 2x + y = 8 and x − y = 1 by elimination.', a: 'Add both equations: 3x = 9 → x = 3. Substitute: 2(3)+y=8 → y=2. Solution: (3,2).' },
              { q: 'For what value of k does the system kx + 3y = k−3, 12x + ky = k have no solution?', a: 'No solution: k/12 = 3/k ≠ (k−3)/k. k² = 36 → k = ±6. For k = 6: 6/12 = 3/6 = 1/2 and (6−3)/6 = 1/2 (would be infinite). For k = −6: check not equal → k = −6.' },
              { q: 'Sum of two numbers is 15, difference is 3. Find the numbers.', a: 'x+y=15, x−y=3. Adding: 2x=18 → x=9. y=6.' },
              { q: 'A fraction becomes 1/3 when 1 is subtracted from numerator, and 1/4 when 8 is added to denominator. Find the fraction.', a: '(x−1)/y = 1/3 → 3x−y=3. x/(y+8) = 1/4 → 4x−y=8. Subtract: x=5, y=12. Fraction = 5/12.' },
            ]
          },
          {
            id: 'triangles-10',
            title: 'Triangles — Similarity',
            subtopics: 'Similar figures, AAA/AA/SSS/SAS criteria, BPT theorem, Pythagoras theorem proof',
            definition: 'Two triangles are similar if their corresponding angles are equal and corresponding sides are proportional. Similar triangles have the same shape but may differ in size.',
            content: `<p>Similarity is used in architecture, map-making, photography, and engineering. The basic proportionality theorem connects parallel lines and triangles in a beautiful way.</p>
<h4>Basic Proportionality Theorem (BPT / Thales Theorem)</h4>
<p>If a line is drawn parallel to one side of a triangle, it divides the other two sides in the same ratio.</p>
<div class="formula">If DE ∥ BC in △ABC, then AD/DB = AE/EC</div>
<h4>Similarity Criteria</h4>
<ul>
<li><strong>AA (Angle-Angle):</strong> Two angles equal → triangles similar</li>
<li><strong>SSS:</strong> All three pairs of sides proportional → similar</li>
<li><strong>SAS:</strong> One angle equal, sides including it proportional → similar</li>
</ul>
<h4>Areas of Similar Triangles</h4>
<div class="formula">Area(△1)/Area(△2) = (side1/side2)²</div>
<h4>Pythagoras Theorem</h4>
<p>In a right triangle, square of hypotenuse = sum of squares of other two sides. (Proved using similar triangles)</p>`,
            qa: [
              { q: 'In △ABC, DE ∥ BC. AD=3, DB=5, AE=x, EC=10. Find x.', a: 'By BPT: AD/DB = AE/EC. 3/5 = x/10. x = 6.' },
              { q: 'Two similar triangles have sides 4 cm and 6 cm. Find ratio of their areas.', a: 'Ratio of areas = (4/6)² = 16/36 = 4:9.' },
              { q: 'State and prove the converse of BPT.', a: 'Converse: If a line divides two sides of a triangle in the same ratio, it is parallel to the third side. Proof by contradiction — assume line not parallel, draw a parallel, show this leads to the dividing point being at two different locations, contradiction.' },
              { q: 'If △ABC ~ △PQR with BC=4, QR=5, area(△PQR)=25 cm². Find area(△ABC).', a: 'Area ratio = (BC/QR)² = (4/5)² = 16/25. Area(△ABC) = 16/25 × 25 = 16 cm².' },
            ]
          },
          {
            id: 'coordinate-geometry-10',
            title: 'Coordinate Geometry',
            subtopics: 'Distance formula, Section formula, Area of triangle, Midpoint',
            definition: 'Coordinate geometry (analytic geometry) studies geometric figures using coordinates. It connects algebra and geometry, allowing us to solve geometric problems using equations.',
            content: `<p>Coordinate geometry bridges algebra and geometry. GPS navigation, computer graphics, and machine learning all use coordinate geometry fundamentally.</p>
<h4>Distance Formula</h4>
<div class="formula">d = √[(x₂−x₁)² + (y₂−y₁)²]</div>
<h4>Section Formula (internal division)</h4>
<p>Point P dividing AB in ratio m:n internally:</p>
<div class="formula">P = [(mx₂+nx₁)/(m+n), (my₂+ny₁)/(m+n)]</div>
<h4>Midpoint Formula</h4>
<div class="formula">Midpoint = [(x₁+x₂)/2, (y₁+y₂)/2]</div>
<h4>Area of Triangle</h4>
<div class="formula">Area = ½|x₁(y₂−y₃) + x₂(y₃−y₁) + x₃(y₁−y₂)|</div>
<p>If area = 0, the three points are collinear.</p>`,
            qa: [
              { q: 'Find distance between (3,4) and (−2,−1) using distance formula.', a: 'd = √[(3−(−2))²+(4−(−1))²] = √[25+25] = √50 = 5√2 units.' },
              { q: 'Find the midpoint of the segment joining (2,3) and (8,7).', a: 'Midpoint = ((2+8)/2, (3+7)/2) = (5, 5).' },
              { q: 'Point P divides A(1,2) and B(7,8) in ratio 2:1 internally. Find P.', a: 'P = [(2×7+1×1)/(2+1), (2×8+1×2)/(2+1)] = [15/3, 18/3] = (5, 6).' },
              { q: 'Find area of triangle with vertices (0,0), (4,0), (0,3).', a: 'Area = ½|0(0−3)+4(3−0)+0(0−0)| = ½|0+12+0| = 6 sq. units.' },
            ]
          },
          {
            id: 'circles-10',
            title: 'Circles — Tangents and Chords',
            subtopics: 'Tangent, Chord, Tangent from external point, Angle subtended, Cyclic quadrilateral',
            definition: 'A tangent to a circle is a line that touches the circle at exactly one point (point of tangency). The tangent is perpendicular to the radius at the point of contact.',
            content: `<p>Circle theorems are used in architecture (dome designs, wheel mechanics), engineering (gear systems), and astronomy (planetary orbits). These properties were known to ancient Greeks and remain fundamental.</p>
<h4>Key Theorems</h4>
<ul>
<li><strong>Tangent ⊥ Radius:</strong> The tangent to a circle at any point is perpendicular to the radius at that point.</li>
<li><strong>Two tangents from external point:</strong> Both have equal length. PA = PB if P is external point, A and B are tangent points.</li>
<li><strong>Angle in semicircle:</strong> Angle subtended by a diameter is 90°.</li>
<li><strong>Angles in same segment:</strong> Angles subtended by the same chord on the same side are equal.</li>
</ul>
<h4>Cyclic Quadrilateral</h4>
<div class="formula">Opposite angles of a cyclic quadrilateral sum to 180°</div>`,
            qa: [
              { q: 'A tangent PA is drawn from external point P to circle with centre O. If PA=6 cm and OA=4 cm, find OP.', a: 'OA ⊥ PA (tangent ⊥ radius). By Pythagoras: OP² = OA²+PA² = 16+36 = 52. OP = 2√13 cm.' },
              { q: 'From external point P, two tangents PA and PB are drawn to a circle. If PA=5 cm, find PB.', a: 'Tangents from an external point to a circle are equal. PB = PA = 5 cm.' },
              { q: 'Prove that the tangent at any point of a circle is perpendicular to the radius at the point of contact.', a: 'Let O be centre, P be point of tangency, T be tangent. For any other point Q on line T, OQ > OP (since Q lies outside circle). So OP is the shortest distance from O to line T, which means OP ⊥ T.' },
              { q: 'ABCD is a cyclic quadrilateral. If angle A = 75°, find angle C.', a: 'Opposite angles of cyclic quadrilateral are supplementary. Angle A + Angle C = 180°. Angle C = 180° − 75° = 105°.' },
            ]
          },
          {
            id: 'applications-trigonometry-10',
            title: 'Applications of Trigonometry — Heights and Distances',
            subtopics: 'Angle of elevation, Angle of depression, Line of sight, Solving real-world problems',
            definition: 'Heights and distances is an application of trigonometry where angles of elevation and depression are used to calculate inaccessible heights and distances using trigonometric ratios.',
            content: `<p>Before GPS, surveyors used trigonometry to map mountains, calculate distances across rivers, and determine heights of buildings. The same principles are still used in engineering and navigation.</p>
<h4>Key Terms</h4>
<ul>
<li><strong>Line of sight:</strong> Imaginary line from observer to object</li>
<li><strong>Angle of elevation:</strong> Angle above horizontal (looking up)</li>
<li><strong>Angle of depression:</strong> Angle below horizontal (looking down)</li>
</ul>
<h4>Standard Approach</h4>
<p>1. Draw a clear diagram. 2. Identify the right triangle. 3. Apply appropriate trig ratio. 4. Solve the equation.</p>
<div class="example-box"><strong>Example:</strong> A 50m building casts a shadow of 50√3 m. Find angle of elevation of sun.<br/>tan θ = 50/(50√3) = 1/√3. θ = 30°.</div>`,
            qa: [
              { q: 'A ladder 10 m long makes a 60° angle with the ground. How high does it reach on the wall?', a: 'sin 60° = height/10. height = 10 × (√3/2) = 5√3 ≈ 8.66 m.' },
              { q: 'From the top of a 75 m high lighthouse, angle of depression of a ship is 30°. Find distance of ship from the base.', a: 'tan 30° = 75/d. 1/√3 = 75/d. d = 75√3 ≈ 129.9 m.' },
              { q: 'A boy standing 40 m from a tower sees the top at 60° elevation. What is the tower height?', a: 'tan 60° = h/40. √3 = h/40. h = 40√3 ≈ 69.28 m.' },
              { q: 'Two poles of equal height h are on opposite sides of a road of width d. From a point between them, angles of elevation are 60° and 30°. Find ratio of distances.', a: 'Let distances be x and (d−x). tan 60°=h/x → x=h/√3. tan 30°=h/(d−x) → d−x=h√3. Ratio x:(d−x) = h/√3 : h√3 = 1:3.' },
            ]
          },
          {
            id: 'statistics-10',
            title: 'Statistics — Mean, Median, Mode',
            subtopics: 'Mean (direct/assumed mean/step deviation), Median using ogive, Mode, Cumulative frequency',
            definition: 'Statistics for Class 10 focuses on computing measures of central tendency (mean, median, mode) for grouped data and representing data graphically using cumulative frequency curves (ogives).',
            content: `<p>Statistics enables informed decision-making in medicine (clinical trials), business (market research), government (census), and science. The three averages each capture different aspects of a data set.</p>
<h4>Mean for Grouped Data</h4>
<div class="formula">Mean = Σfᵢxᵢ / Σfᵢ (direct method)</div>
<div class="formula">Mean = a + (Σfᵢdᵢ/Σfᵢ) where dᵢ = xᵢ−a (assumed mean method)</div>
<h4>Mode</h4>
<div class="formula">Mode = l + [(f₁−f₀)/(2f₁−f₀−f₂)] × h</div>
<p>Where l = lower class boundary of modal class, f₁ = frequency of modal class, f₀ = preceding frequency, f₂ = following frequency, h = class width.</p>
<h4>Median</h4>
<div class="formula">Median = l + [(n/2 − cf)/f] × h</div>
<p>Where cf = cumulative frequency before median class, f = frequency of median class.</p>
<h4>Ogive (Cumulative Frequency Curve)</h4>
<p>Plot cumulative frequency vs upper class boundary. Median = x-value at n/2 cumulative frequency.</p>`,
            qa: [
              { q: 'Find mean of: class 0-10 (freq 5), 10-20 (10), 20-30 (15), 30-40 (8), 40-50 (2). Total = 40.', a: 'Midpoints: 5,15,25,35,45. Σfx = 25+150+375+280+90 = 920. Mean = 920/40 = 23.' },
              { q: 'Modal class has frequency 25, preceding 12, following 10, lower bound 30, width 10. Find mode.', a: 'Mode = 30 + [(25−12)/(2×25−12−10)] × 10 = 30 + [13/28] × 10 = 30 + 4.64 = 34.64' },
              { q: 'What is the difference between median and mean?', a: 'Mean = sum/count (affected by extreme values). Median = middle value (not affected by extremes, better for skewed data). Mode = most frequent value (for categorical data). The relationship is: Mode ≈ 3(Median) − 2(Mean) for moderately skewed data.' },
              { q: 'What is an ogive? How is median found from it?', a: 'Ogive is the cumulative frequency curve. Plot upper class limits on x-axis vs cumulative frequencies on y-axis. Draw a horizontal line from n/2 on y-axis to the curve, drop a vertical to x-axis. That x-value is the median.' },
            ]
          },
        ]
      },
      chemistry: {
        id: 'chemistry', topics: [
          {
            id: 'chemical-reactions',
            title: 'Chemical Reactions and Equations',
            subtopics: 'Writing equations, Balancing, Types of reactions, Oxidation & reduction',
            definition: 'A chemical reaction is a process in which one or more substances (reactants) are converted into new substances (products) with different properties. It is represented by a chemical equation.',
            content: `<p>Every time you cook food, burn a candle, or even breathe, chemical reactions are occurring. Chemistry lets us describe and predict these changes precisely.</p>
<h4>Chemical Equation</h4>
<p>A chemical equation shows reactants on the left, products on the right, with an arrow (→) in between.</p>
<div class="formula">Mg + O₂ → MgO (unbalanced)</div>
<div class="formula">2Mg + O₂ → 2MgO (balanced)</div>
<h4>Balancing Equations (Law of Conservation of Mass)</h4>
<p>Atoms are neither created nor destroyed in a chemical reaction. Total atoms of each element must be equal on both sides.</p>
<h4>Types of Chemical Reactions</h4>
<ul>
<li><strong>Combination:</strong> A + B → AB (e.g., 2H₂ + O₂ → 2H₂O)</li>
<li><strong>Decomposition:</strong> AB → A + B (e.g., 2H₂O → 2H₂ + O₂ by electrolysis)</li>
<li><strong>Displacement:</strong> A + BC → AC + B (e.g., Fe + CuSO₄ → FeSO₄ + Cu)</li>
<li><strong>Double Displacement:</strong> AB + CD → AD + CB (e.g., BaCl₂ + Na₂SO₄ → BaSO₄↓ + 2NaCl)</li>
<li><strong>Oxidation-Reduction (Redox):</strong> Simultaneous oxidation and reduction</li>
</ul>
<h4>Exothermic and Endothermic Reactions</h4>
<p>Exothermic: release energy (burning, respiration). Endothermic: absorb energy (photosynthesis, cooking).</p>`,
            qa: [
              { q: 'Balance: Fe + H₂O → Fe₃O₄ + H₂', a: '3Fe + 4H₂O → Fe₃O₄ + 4H₂' },
              { q: 'What type of reaction is: Zn + H₂SO₄ → ZnSO₄ + H₂?', a: 'Single displacement reaction (Zinc displaces Hydrogen from sulphuric acid).' },
              { q: 'When iron is added to copper sulphate solution, a brown deposit forms. What happens?', a: 'Fe + CuSO₄ → FeSO₄ + Cu. Iron displaces copper (since iron is more reactive). The brown deposit is copper. Solution turns from blue to light green (FeSO₄).' },
              { q: 'Define oxidation and reduction in terms of oxygen.', a: 'Oxidation: gain of oxygen or loss of hydrogen. Reduction: loss of oxygen or gain of hydrogen. In a redox reaction, both happen simultaneously.' },
              { q: 'Is respiration exothermic or endothermic?', a: 'Respiration is exothermic. C₆H₁₂O₆ + 6O₂ → 6CO₂ + 6H₂O + Energy. It releases energy that powers all body functions.' },
            ]
          },
          {
            id: 'acids-bases-salts-10',
            title: 'Acids, Bases and Salts',
            subtopics: 'Arrhenius theory, pH scale, Indicators, Neutralisation, Important salts',
            definition: 'Acids produce H⁺ ions in solution; bases produce OH⁻ ions. The pH scale (0-14) measures acidity/basicity. Acids and bases react in neutralisation to form salts and water.',
            content: `<p>The chemistry of acids and bases explains why lemon juice preserves food, why baking soda makes cakes rise, why your blood must maintain a precise pH, and how antacids relieve heartburn.</p>
<h4>pH Scale</h4>
<div class="formula">pH 0-7: Acidic | pH 7: Neutral | pH 7-14: Basic/Alkaline</div>
<p>Each unit change = 10× change in H⁺ concentration. pH 4 is 10× more acidic than pH 5.</p>
<h4>Indicators</h4>
<p>Litmus (natural from lichen), Phenolphthalein (colourless in acid, pink in base), Methyl orange (red in acid, yellow/orange in base), Universal indicator (gives full range of pH).</p>
<h4>Important Salts</h4>
<ul>
<li><strong>NaCl:</strong> Common salt — raw material for Na, Cl₂, NaOH.</li>
<li><strong>Baking soda (NaHCO₃):</strong> Antacid, baking.</li>
<li><strong>Washing soda (Na₂CO₃.10H₂O):</strong> Cleaning, glass, paper industry.</li>
<li><strong>Plaster of Paris (CaSO₄.½H₂O):</strong> Casts, moulds.</li>
</ul>`,
            qa: [
              { q: 'A solution has pH = 3. Is it acidic or basic? Is it stronger or weaker acid than pH 5?', a: 'pH 3 is acidic (pH < 7). It is 100× (10²) more acidic than pH 5 — a stronger acid.' },
              { q: 'What happens when sodium hydrogen carbonate (baking soda) is added to an acid?', a: 'NaHCO₃ + HCl → NaCl + H₂O + CO₂↑. It neutralises the acid and produces CO₂ (effervescence/bubbling). This is why baking soda relieves acidity and makes cakes rise (CO₂ gas forms bubbles).' },
              { q: 'Why does our stomach sometimes become acidic and how can it be treated?', a: 'The stomach produces HCl for digestion. Excess HCl causes acidity/heartburn. Antacid tablets contain bases like Mg(OH)₂ or NaHCO₃ that neutralise the excess acid: Mg(OH)₂ + 2HCl → MgCl₂ + 2H₂O.' },
              { q: 'What is the difference between baking soda and baking powder?', a: 'Baking soda is pure NaHCO₃. Baking powder = baking soda + a mild acid (cream of tartar). When baking soda alone is used, an acid ingredient is needed in the recipe. Baking powder is self-contained — the acid is already included.' },
            ]
          },
          {
            id: 'metals-non-metals',
            title: 'Metals and Non-metals',
            subtopics: 'Physical properties, Chemical properties, Reactivity series, Extraction, Corrosion',
            definition: 'Metals are lustrous, ductile, malleable conductors that form positive ions by losing electrons. Non-metals are dull, brittle, poor conductors that form negative ions by gaining electrons.',
            content: `<p>About 80% of all elements are metals. Understanding their properties and reactivity explains everything from why copper is used in wires to why gold jewellery doesn't tarnish and why iron rusts.</p>
<h4>Properties Comparison</h4>
<table style="font-size:.85rem">
<tr><th>Property</th><th>Metals</th><th>Non-metals</th></tr>
<tr><td>Lustre</td><td>Lustrous</td><td>Dull (except iodine)</td></tr>
<tr><td>Conductivity</td><td>Good</td><td>Poor (except graphite)</td></tr>
<tr><td>Malleability</td><td>Malleable</td><td>Brittle</td></tr>
<tr><td>State at RT</td><td>Mostly solid</td><td>Solid/Liquid/Gas</td></tr>
</table>
<h4>Reactivity Series (most to least reactive)</h4>
<p>K > Na > Ca > Mg > Al > Zn > Fe > Pb > H > Cu > Ag > Au</p>
<p>More reactive metals displace less reactive ones from solutions.</p>
<h4>Ionic Bond Formation</h4>
<p>Metals lose electrons → form cations. Non-metals gain electrons → form anions. Electrostatic attraction = ionic bond. Example: Na → Na⁺ + e⁻; Cl + e⁻ → Cl⁻; NaCl formed.</p>`,
            qa: [
              { q: 'Why is sodium stored in kerosene?', a: 'Sodium is highly reactive — it reacts violently with water (and moisture in air) and catches fire. Kerosene is non-reactive with sodium and keeps it isolated from air and water, preventing dangerous reactions.' },
              { q: 'Explain thermite reaction and its use.', a: '2Al + Fe₂O₃ → Al₂O₃ + 2Fe + heat. Aluminium (higher in reactivity series) displaces iron from iron oxide. Produces enormous heat (thermite reaction) — used to weld railway tracks in situ.' },
              { q: 'Why is copper used for electrical wiring despite silver being a better conductor?', a: 'Silver is the best conductor but extremely expensive. Copper is a very good conductor, abundant, less expensive, malleable (can be drawn into thin wires), and does not corrode easily — making it the practical choice for electrical wiring.' },
              { q: 'What is an alloy? Give two examples and their uses.', a: 'An alloy is a homogeneous mixture of two or more metals (or a metal and non-metal). Steel: iron + carbon (0.5-1.5%) — stronger than iron, used in buildings/vehicles. Brass: copper + zinc — less brittle, used in musical instruments, taps. Bronze: copper + tin — used in coins, sculptures.' },
            ]
          },
          {
            id: 'carbon-compounds',
            title: 'Carbon and Its Compounds',
            subtopics: 'Covalent bonds, Allotropes, Hydrocarbons, Functional groups, Ethanol, Ethanoic acid, Soaps',
            definition: 'Carbon is unique in forming millions of compounds due to covalent bonding, long chains, and branching. Organic chemistry — the chemistry of carbon compounds — is the chemistry of life itself.',
            content: `<p>Carbon is the basis of all life — DNA, proteins, carbohydrates, fats are all carbon compounds. Carbon's ability to form stable covalent bonds with four other atoms in countless arrangements makes this diversity possible.</p>
<h4>Covalent Bond</h4>
<p>Formed by sharing of electron pairs. Carbon forms 4 covalent bonds (tetravalent). Can form single (C-C), double (C=C), triple (C≡C) bonds.</p>
<h4>Allotropes of Carbon</h4>
<ul>
<li><strong>Diamond:</strong> Each C bonded to 4 others in 3D — hardest natural substance. Electrical insulator.</li>
<li><strong>Graphite:</strong> Layers of hexagons — each C bonded to 3. Soft, conducts electricity (free electrons).</li>
<li><strong>Fullerene (C₆₀):</strong> Spherical "Buckyball."</li>
</ul>
<h4>Functional Groups</h4>
<p>Alcohol (-OH): ethanol. Aldehyde (-CHO). Carboxylic acid (-COOH): ethanoic acid (vinegar). Ester: formed from acid + alcohol (used in perfumes, essences).</p>
<h4>Soaps and Detergents</h4>
<p>Soap molecule has a hydrophilic (water-loving) head and hydrophobic (water-hating) tail. Tail embeds in grease; heads face water → micelle forms → grease removed by water.</p>`,
            qa: [
              { q: 'Why is diamond hard but graphite soft?', a: 'Diamond: each carbon is covalently bonded to 4 others in a rigid 3D network — extremely hard, no free electrons. Graphite: layers of hexagonal carbon sheets held by weak van der Waals forces — layers slide easily → soft and slippery (good lubricant).' },
              { q: 'What is saponification?', a: 'Saponification is the reaction of an ester (fat/oil) with a base (NaOH or KOH) to produce soap (sodium/potassium salt of fatty acid) and glycerol. This is how soap is manufactured: fat + NaOH → soap + glycerol.' },
              { q: 'Why do soaps not work well in hard water?', a: 'Hard water contains Ca²⁺ and Mg²⁺ ions. They react with soap to form insoluble scum (calcium and magnesium salts of fatty acids). This wastes soap and doesn\'t clean. Detergents work in hard water because their calcium/magnesium salts are soluble.' },
              { q: 'What is ethanol and what are its uses?', a: 'Ethanol (C₂H₅OH) is a simple alcohol. Uses: alcoholic beverages, industrial solvent, antiseptic (surgical spirit), fuel additive (flex-fuel cars), raw material for making vinegar (acetic acid). It is produced by fermentation of glucose using yeast.' },
            ]
          },
          {
            id: 'periodic-classification-10',
            title: 'Periodic Classification of Elements',
            subtopics: 'Dobereiner triads, Newlands octaves, Mendeleev periodic table, Modern periodic table, Trends',
            definition: 'The periodic table organises elements by atomic number in periods (rows) and groups (columns). Elements in the same group have similar chemical properties. Modern periodic law: properties of elements are periodic functions of their atomic numbers.',
            content: `<p>Mendeleev predicted the existence of undiscovered elements based on gaps in his periodic table — one of the greatest predictive achievements in science. The modern periodic table has 118 confirmed elements.</p>
<h4>History of Periodic Classification</h4>
<ul>
<li><strong>Dobereiner Triads (1829):</strong> Groups of three elements where middle element has atomic mass = average of other two. E.g., Li(7), Na(23), K(39): avg = (7+39)/2 = 23 ✓. But only 3 triads found.</li>
<li><strong>Newlands Octaves (1865):</strong> Every 8th element has similar properties (like musical octaves). Failed beyond calcium.</li>
<li><strong>Mendeleev (1869):</strong> Arranged by atomic mass, left gaps for undiscovered elements, predicted their properties. Limitation: couldn't explain hydrogen's position, isotopes had same position.</li>
<li><strong>Moseley / Modern (1913+):</strong> Atomic number (not mass) is basis. Modern periodic law.</li>
</ul>
<h4>Modern Periodic Table</h4>
<p>18 groups (columns), 7 periods (rows). 118 elements: metals (left), metalloids (diagonal), non-metals (right). Noble gases (Group 18).</p>
<h4>Periodic Trends</h4>
<ul>
<li>Atomic size: increases down a group; decreases across a period (left to right)</li>
<li>Metallic character: increases down a group; decreases left to right</li>
<li>Valency: increases then decreases across a period (1→4→0)</li>
</ul>`,
            qa: [
              { q: 'State the modern periodic law.', a: 'The properties of elements are a periodic function of their atomic numbers. This means when elements are arranged in order of increasing atomic number, elements with similar properties recur at regular intervals.' },
              { q: 'Explain Dobereiner Triads with an example.', a: 'Dobereiner found groups of three elements with similar properties where the middle element\'s atomic mass ≈ average of the other two. Example: Calcium (Ca=40), Strontium (Sr=88), Barium (Ba=137). Average of Ca and Ba = (40+137)/2 = 88.5 ≈ 88 (Sr). This suggested a relationship but covered only 3 triads.' },
              { q: 'Why was Mendeleev\'s periodic table considered a great achievement?', a: 'Mendeleev arranged elements by atomic mass and left gaps for undiscovered elements, accurately predicting their properties. When Gallium (eka-aluminium) and Germanium (eka-silicon) were discovered, their properties matched Mendeleev\'s predictions almost exactly. He also corrected some known atomic masses based on expected positions.' },
              { q: 'How does atomic size change across a period and down a group?', a: 'Across a period (left to right): atomic size decreases because nuclear charge (protons) increases while electrons are added to the same shell — stronger pull draws electrons closer. Down a group: atomic size increases because new electron shells are added (larger shells), and inner electrons shield outer electrons from nuclear pull.' },
            ]
          },
        ]
      },
      physics: {
        id: 'physics', topics: [
          {
            id: 'electricity',
            title: 'Electricity',
            subtopics: 'Charge, Current, Potential difference, Ohm\'s law, Resistance, Series & parallel circuits, Heating effect',
            definition: 'Electricity involves the flow of electric charge through conductors. It is characterised by quantities like current (flow rate of charge), potential difference (energy per charge), and resistance (opposition to flow).',
            content: `<p>Electricity powers modern civilisation — from the device you're reading this on to the lights in your home. Understanding it starts with a few key quantities and laws.</p>
<h4>Key Quantities</h4>
<div class="formula">Current (I) = Charge (Q) / Time (t) [Amperes = Coulombs/second]</div>
<div class="formula">Potential Difference (V) = Work Done (W) / Charge (Q) [Volts = Joules/Coulomb]</div>
<h4>Ohm's Law</h4>
<div class="formula">V = IR (Voltage = Current × Resistance)</div>
<p>Applies to ohmic conductors (metals at constant temperature). R has unit Ohm (Ω).</p>
<h4>Resistors in Series</h4>
<div class="formula">R_total = R₁ + R₂ + R₃</div>
<h4>Resistors in Parallel</h4>
<div class="formula">1/R_total = 1/R₁ + 1/R₂ + 1/R₃</div>
<h4>Electric Power and Heating</h4>
<div class="formula">P = VI = I²R = V²/R [Watts]</div>
<div class="formula">Heat = I²Rt [Joules] — Joule's Law of Heating</div>`,
            qa: [
              { q: 'What is the resistance if V=12V and I=2A?', a: 'R = V/I = 12/2 = 6 Ω' },
              { q: 'Three resistors of 2Ω, 3Ω, 5Ω are connected in parallel. Find total resistance.', a: '1/R = 1/2+1/3+1/5 = 15/30+10/30+6/30 = 31/30. R = 30/31 ≈ 0.97 Ω' },
              { q: 'Why are household appliances connected in parallel, not series?', a: 'Parallel: each appliance gets the full 220V, and they operate independently (switching one off doesn\'t affect others). In series, voltage divides and all go off if one fails.' },
              { q: 'An electric heater draws 5A at 220V for 2 hours. Find energy consumed in kWh.', a: 'P = VI = 5×220 = 1100W = 1.1kW. Energy = 1.1×2 = 2.2 kWh.' },
              { q: 'Why does a 100W bulb glow brighter than a 40W bulb at 220V?', a: '100W bulb has lower resistance (R=V²/P = 48400/100=484Ω) than 40W (R=1210Ω). More current flows, more energy dissipated as light.' },
            ]
          },
          {
            id: 'light-reflection-refraction',
            title: 'Light — Reflection and Refraction',
            subtopics: 'Laws of reflection, Mirrors, Snell\'s law, Lenses, Refraction, Total internal reflection',
            definition: 'Reflection is the bouncing of light off a surface. Refraction is the bending of light as it passes from one medium to another due to change in speed. Mirrors and lenses use these principles to form images.',
            content: `<p>Your eyes, glasses, cameras, telescopes, microscopes, and fibre optic cables all rely on the principles of reflection and refraction. Understanding optics means understanding how we see the world.</p>
<h4>Concave and Convex Mirrors</h4>
<p><strong>Concave:</strong> Converging. Used in: torches, headlights, shaving mirrors, solar concentrators.<br/><strong>Convex:</strong> Diverging. Wider field of view. Used as: rear-view mirrors, shop security mirrors.</p>
<div class="formula">Mirror formula: 1/f = 1/v + 1/u</div>
<div class="formula">Magnification: m = -v/u</div>
<h4>Refraction and Snell's Law</h4>
<div class="formula">n = sin i / sin r = c/v (refractive index)</div>
<p>Light bends toward normal when entering denser medium (lower speed). Light bends away from normal entering rarer medium.</p>
<h4>Lenses</h4>
<p><strong>Convex (converging):</strong> Used in microscopes, cameras, magnifying glasses, correcting hypermetropia.<br/><strong>Concave (diverging):</strong> Corrects myopia.</p>
<div class="formula">Lens formula: 1/f = 1/v - 1/u | Power = 1/f (in Dioptres)</div>`,
            qa: [
              { q: 'An object is placed 15cm from a concave mirror of focal length 10cm. Find image distance.', a: '1/f = 1/v + 1/u. u = -15, f = -10. 1/v = 1/f - 1/u = -1/10 + 1/15 = -3/30+2/30 = -1/30. v = -30cm (real, inverted, in front of mirror)' },
              { q: 'Why does a fish inside water see a distorted view of objects outside?', a: 'Light bends (refracts) when passing from water (denser) to air (rarer). The fish sees objects appearing at different positions than their actual positions. The apparent depth of objects appears different from actual depth due to refraction.' },
              { q: 'What is total internal reflection and give one application?', a: 'When light travels from denser to rarer medium at an angle greater than the critical angle, it is completely reflected back (total internal reflection, no refraction). Application: optical fibre — light signals travel through glass fibres by repeatedly reflecting internally — used in internet cables and endoscopes.' },
              { q: 'A person wearing +2 D lens has what type of defect?', a: 'Positive (+) power lenses are convex lenses. A person using convex lens has hypermetropia (far-sightedness) — they cannot see nearby objects clearly. The convex lens converges light to focus it on the retina.' },
            ]
          },
          {
            id: 'magnetic-effects',
            title: 'Magnetic Effects of Electric Current',
            subtopics: 'Magnetic field, Oersted, Fleming\'s rules, Electric motor, Electromagnetic induction, Generator',
            definition: 'A current-carrying conductor creates a magnetic field around it. This relationship between electricity and magnetism is the basis of electric motors (electrical to mechanical energy) and generators (mechanical to electrical energy).',
            content: `<p>Faraday's discovery of electromagnetic induction in 1831 led directly to electric generators, transformers, and motors — the technology that powers modern civilisation.</p>
<h4>Magnetic Field of a Current-Carrying Wire</h4>
<p>Discovered by Oersted. Field forms concentric circles around wire. Direction: right-hand thumb rule (thumb = current direction, curled fingers = field direction).</p>
<h4>Force on a Current-Carrying Conductor in Magnetic Field</h4>
<div class="formula">F = BIL sin θ (Fleming's Left-Hand Rule for direction)</div>
<p>Thumb = Force/Motion, Index = Field (B), Middle finger = Current (I).</p>
<h4>Electric Motor</h4>
<p>Converts electrical to mechanical energy. Current-carrying coil in magnetic field rotates due to magnetic force. Used in fans, washing machines, electric vehicles.</p>
<h4>Electromagnetic Induction (Faraday)</h4>
<p>Changing magnetic field induces EMF in a conductor. Fleming's Right-Hand Rule for generators.</p>
<h4>AC vs DC Generator</h4>
<p>DC generator: split rings → direct current. AC generator: slip rings → alternating current (more common, used in power stations).</p>`,
            qa: [
              { q: 'What is the principle of an electric motor?', a: 'An electric motor works on the principle that a current-carrying conductor in a magnetic field experiences a force (F = BIL). The force on different sides of the coil are in opposite directions, causing rotation. Electrical energy → mechanical energy.' },
              { q: 'State Faraday\'s law of electromagnetic induction.', a: 'Whenever the magnetic flux linked with a conductor changes, an electromotive force (EMF) is induced in the conductor. The magnitude of induced EMF is directly proportional to the rate of change of magnetic flux.' },
              { q: 'What is the difference between an AC and DC generator?', a: 'AC generator uses slip rings — the coil\'s rotating connections allow current to change direction each half cycle → alternating current (AC). DC generator uses a split-ring commutator that reverses the connection every half cycle → keeps current in one direction (DC).' },
              { q: 'Why is AC used for transmission of electricity over long distances?', a: 'AC voltage can be stepped up (high voltage = low current) using transformers. High-voltage, low-current transmission significantly reduces energy loss in wires (P=I²R — less current means much less heat loss). At destination, voltage is stepped down for safe use.' },
            ]
          },
          {
            id: 'human-eye-10',
            title: 'The Human Eye and the Colourful World',
            subtopics: 'Structure of eye, Defects of vision, Atmospheric refraction, Scattering of light, Rainbow',
            definition: 'The human eye is an optical instrument that focuses light on the retina to form images. Defects like myopia and hypermetropia are corrected by lenses. Atmospheric refraction explains twinkling stars and the colourful sky.',
            content: `<p>The eye is nature's masterpiece optical instrument. Understanding how it works explains why we see what we see — from the blue sky to rainbows and the apparent size of the rising moon.</p>
<h4>Structure of the Eye</h4>
<ul>
<li><strong>Cornea:</strong> Transparent outer surface — does most of the focusing</li>
<li><strong>Iris:</strong> Coloured ring that controls pupil size (controls light entry)</li>
<li><strong>Lens:</strong> Fine-tunes focus by changing shape (accommodation)</li>
<li><strong>Retina:</strong> Screen at back — contains rods (dim light) and cones (colour)</li>
<li><strong>Optic nerve:</strong> Sends signals to brain</li>
</ul>
<h4>Defects of Vision</h4>
<ul>
<li><strong>Myopia (short-sightedness):</strong> Cannot see distant objects. Eyeball too long or lens too curved → image forms in front of retina. Corrected by concave (diverging) lens.</li>
<li><strong>Hypermetropia (long-sightedness):</strong> Cannot see nearby objects. Eyeball too short → image forms behind retina. Corrected by convex (converging) lens.</li>
<li><strong>Presbyopia:</strong> Loss of near-vision with age. Bifocal lenses used.</li>
</ul>
<h4>Atmospheric Refraction</h4>
<p>Stars twinkle because their light passes through air layers of varying density (and thus varying refractive index) — path bends, causing twinkling. Planets don't twinkle because they're close enough to appear as extended sources (their different rays average out).</p>
<h4>Scattering of Light</h4>
<p>Rayleigh scattering: shorter wavelengths scatter more. Blue light (short wavelength) scatters most → sky looks blue. Red light scatters least → sunsets/sunrises are red.</p>`,
            qa: [
              { q: 'Why is the sky blue?', a: 'Sunlight contains all colours. Blue light has shorter wavelength and scatters much more than red light when hitting air molecules (Rayleigh scattering). This scattered blue light comes to us from all directions → we see blue sky. Red scatters least, reaching us directly → sunsets appear red.' },
              { q: 'A person cannot see objects beyond 2m. What defect is this and how corrected?', a: 'Myopia (short-sightedness). They can see objects within 2m (near point normal, far point 2m instead of infinity). Corrected by concave (diverging) lens of appropriate focal length. The lens shifts the image of distant objects to within the persons far point (2m).' },
              { q: 'Why do stars twinkle but planets do not?', a: 'Stars are very far away and appear as point sources. Light from a single point bends differently as it passes through turbulent air layers — causing apparent position to shift rapidly (twinkle). Planets are closer and appear as extended discs. Light from different parts averages out the atmospheric distortions → steady light.' },
              { q: 'What is the power of accommodation of the human eye?', a: 'The ability of the eye lens to change its focal length (by changing shape using ciliary muscles) to focus objects at different distances. Near point (minimum distance of clear vision) = 25 cm for a normal eye. Far point = infinity. Range of accommodation = from 25 cm to infinity.' },
            ]
          },
          {
            id: 'sources-energy-10',
            title: 'Sources of Energy',
            subtopics: 'Conventional vs non-conventional, Fossil fuels, Solar, Wind, Hydro, Nuclear, Biomass',
            definition: 'Energy sources are classified as conventional (fossil fuels, hydro) and non-conventional (solar, wind, tidal, nuclear). Renewable sources are replenished naturally; non-renewable sources are finite and will run out.',
            content: `<p>Every device you use — phone, light, vehicle — runs on energy. As fossil fuels run out and climate change accelerates, the world is urgently transitioning to cleaner, renewable energy sources.</p>
<h4>Conventional Sources</h4>
<ul>
<li><strong>Fossil fuels (coal, petroleum, natural gas):</strong> High energy, but non-renewable, polluting, cause climate change. Formed from ancient organisms over millions of years.</li>
<li><strong>Hydroelectric power:</strong> Dams use falling water to generate electricity. Renewable but causes habitat disruption and displacement.</li>
<li><strong>Thermal power:</strong> Burns coal/oil to heat water → steam → turbine → electricity.</li>
</ul>
<h4>Non-Conventional (Renewable) Sources</h4>
<ul>
<li><strong>Solar energy:</strong> Photovoltaic cells convert sunlight → electricity. Solar water heaters. Inexhaustible, clean.</li>
<li><strong>Wind energy:</strong> Wind turbines. Clean, but wind must be strong and consistent (speed > 15 km/h).</li>
<li><strong>Biomass:</strong> Wood, dung, crop waste. Biogas plants produce methane (cleaner burning than firewood).</li>
<li><strong>Tidal/Wave/Geothermal:</strong> Limited locations but promising.</li>
</ul>
<h4>Nuclear Energy</h4>
<div class="formula">Nuclear fission: Uranium-235 + neutron → splits → energy + more neutrons → chain reaction</div>
<p>Enormous energy from tiny mass (E = mc²). Issues: radioactive waste, safety concerns (Chernobyl, Fukushima), high setup cost.</p>
<h4>A Good Fuel Should Be:</h4>
<p>High calorific value, easily combustible at moderate temperature, low pollution, cheap and easily available, stable in storage, safe to handle.</p>`,
            qa: [
              { q: 'What are the advantages of using biogas over firewood?', a: 'Biogas burns completely (no smoke, no respiratory diseases), has higher calorific value than wood, produces no residue, is clean and environmentally friendly. The slurry remaining is an excellent fertiliser. Firewood produces smoke (health hazard), leaves ash, and contributes to deforestation.' },
              { q: 'What are the limitations of solar energy?', a: 'Solar energy depends on sunlight — not available at night, reduced on cloudy days. Solar cells are expensive to manufacture. Energy storage (batteries) is costly and limited. Large areas needed for significant power generation. However: free fuel, no pollution, maintenance is low.' },
              { q: 'Why is nuclear energy considered high risk despite its high power output?', a: 'Risks: radioactive waste stays dangerous for thousands of years (safe disposal is unsolved). Accidents (Chernobyl 1986, Fukushima 2011) can contaminate vast areas. Uranium mining is hazardous. Nuclear material can be misused for weapons. However: produces no greenhouse gases during operation, very high energy density.' },
              { q: 'What is meant by calorific value?', a: 'Calorific value (or heating value) is the amount of heat energy produced per unit mass of fuel when it is completely burned. Measured in kJ/kg or kcal/g. Higher calorific value = more energy per kg. LPG ≈ 55,000 kJ/kg, wood ≈ 17,000 kJ/kg, coal ≈ 25,000 kJ/kg.' },
            ]
          },
        ]
      },
      biology: {
        id: 'biology', topics: [
          {
            id: 'life-processes',
            title: 'Life Processes',
            subtopics: 'Nutrition, Respiration, Transportation, Excretion',
            definition: 'Life processes are the essential functions that all living organisms perform to stay alive: nutrition (obtaining food), respiration (releasing energy), transportation (moving materials), and excretion (removing waste).',
            content: `<p>Life is chemistry happening inside cells. Every life process — digestion, breathing, blood circulation — is a carefully orchestrated set of chemical reactions that keep the organism functioning.</p>
<h4>Nutrition</h4>
<p>Autotrophic (plants — photosynthesis) vs Heterotrophic (animals — eat other organisms). Human digestion: mouth → oesophagus → stomach → small intestine → large intestine.</p>
<h4>Respiration</h4>
<div class="formula">Aerobic: C₆H₁₂O₆ + 6O₂ → 6CO₂ + 6H₂O + 38 ATP</div>
<p>Anaerobic (no oxygen): glucose → lactic acid (muscles during exercise) or ethanol + CO₂ (yeast). Produces only 2 ATP — much less efficient.</p>
<h4>Transportation in Humans</h4>
<p>Heart (4 chambers) pumps blood. Double circulation: pulmonary (heart ↔ lungs) and systemic (heart ↔ body). Arteries carry oxygenated blood away from heart; veins carry deoxygenated blood to heart.</p>
<h4>Excretion</h4>
<p>Nephron is the functional unit of kidney. Blood filtered → useful substances reabsorbed → urine (urea, salts, water) excreted via ureter → bladder → urethra.</p>`,
            qa: [
              { q: 'What is the difference between aerobic and anaerobic respiration?', a: 'Aerobic respiration uses oxygen, completely breaks down glucose → CO₂ + H₂O + 38 ATP (much energy). Anaerobic respiration has no oxygen, incompletely breaks down glucose → lactic acid (animals) or ethanol + CO₂ (yeast) + only 2 ATP (much less energy).' },
              { q: 'Why do arteries have thicker walls than veins?', a: 'Arteries carry blood pumped at high pressure directly from the heart. Thick, elastic walls withstand this pressure. Veins carry blood at low pressure (returning to heart); they have thinner walls but valves to prevent backflow.' },
              { q: 'What is the role of the nephron?', a: 'The nephron is the structural and functional unit of the kidney. Blood is filtered under pressure (ultrafiltration). Useful substances (glucose, amino acids, water, ions) are reabsorbed. Remaining waste (urea, excess salts) forms urine. Each kidney has about 1 million nephrons.' },
              { q: 'What is stomata and its role in plants?', a: 'Stomata are tiny pores on leaves (mostly underside), each surrounded by two guard cells. Functions: CO₂ enters for photosynthesis, O₂ exits; water vapour exits (transpiration). Guard cells control stomata opening/closing — open in day, closed at night.' },
            ]
          },
          {
            id: 'heredity-evolution',
            title: 'Heredity and Evolution',
            subtopics: 'Mendel\'s laws, DNA, Variations, Natural selection, Human evolution, Speciation',
            definition: 'Heredity is the passing of traits from parents to offspring through genes (DNA). Evolution is the change in inherited traits in a population over generations through natural selection.',
            content: `<p>Darwin's theory of evolution by natural selection explains the diversity of all life on Earth — from bacteria to blue whales — through a single elegant mechanism operating over millions of years.</p>
<h4>Mendel's Laws</h4>
<p><strong>Law of Segregation:</strong> Each organism has two alleles for each trait; they separate during gamete formation → offspring receive one from each parent.</p>
<p><strong>Law of Independent Assortment:</strong> Different traits are inherited independently (when genes are on different chromosomes).</p>
<p>Dominant traits (T) mask recessive (t). Homozygous (TT or tt), Heterozygous (Tt).</p>
<h4>Natural Selection (Darwin)</h4>
<p>Variation exists in populations → Some variants are better adapted to the environment → These individuals survive and reproduce more → Favourable traits increase in frequency over generations.</p>
<h4>Speciation</h4>
<p>Populations become geographically isolated → different environments cause different adaptations → gene pools diverge → eventually two populations cannot interbreed → new species formed.</p>`,
            qa: [
              { q: 'In pea plants, tall (T) is dominant over short (t). What is the ratio of tall:short in F2 of Tt × Tt cross?', a: 'F1: Tt. F2 cross Tt × Tt: TT, Tt, Tt, tt. Tall (TT + 2Tt) : short (tt) = 3:1. Tall = 75%, short = 25%.' },
              { q: 'What is natural selection? Give an example.', a: 'Natural selection: organisms with traits better suited to their environment survive, reproduce, and pass traits to offspring. Example: peppered moths in industrial Britain — before industry, white moths survived (camouflage on lichen-covered trees). After pollution blackened trees, dark moths survived better. Dark moths became dominant.' },
              { q: 'What is the difference between analogous and homologous organs?', a: 'Homologous organs: same basic structure/origin but different functions — suggest common ancestry (human arm, bat wing, whale flipper — same bones, different use). Analogous organs: different structure/origin but same function — result of convergent evolution (butterfly wing and bird wing — both for flight but structurally very different).' },
              { q: 'How does DNA copying lead to evolution?', a: 'DNA replication is not perfect — small errors (mutations) occur. Most are neutral or harmful, but occasionally a mutation improves adaptation. If the individual with the mutation survives and reproduces, the mutation spreads in the population. Over millions of years, accumulated mutations create new species.' },
            ]
          },
          {
            id: 'control-coordination-10',
            title: 'Control and Coordination',
            subtopics: 'Nervous system, Reflex arc, Brain, Hormones, Endocrine glands',
            definition: 'Control and coordination involves the nervous system (electrical signals via neurons) and endocrine system (chemical signals via hormones) working together to regulate all body functions.',
            content: `<p>The brain processes 86 billion neurons' worth of information every moment, controlling everything from breathing to love. Hormones chemically co-ordinate slower, long-term responses.</p>
<h4>Nervous System</h4>
<p><strong>Neuron</strong> = basic unit. Dendrites receive signals → cell body processes → axon transmits → synapse (gap between neurons).</p>
<p>Central Nervous System (CNS) = brain + spinal cord. Peripheral NS = nerves to/from body.</p>
<h4>Reflex Arc</h4>
<div class="formula">Receptor → Sensory nerve → Spinal cord → Motor nerve → Effector (muscle)</div>
<p>Bypasses brain for fast, automatic responses (withdrawing hand from heat). Brain learns about it after the action.</p>
<h4>Brain</h4>
<ul>
<li><strong>Cerebrum:</strong> Thinking, memory, voluntary actions</li>
<li><strong>Cerebellum:</strong> Balance and coordination</li>
<li><strong>Medulla oblongata:</strong> Involuntary functions (heartbeat, breathing)</li>
</ul>
<h4>Hormones (Endocrine System)</h4>
<p>Chemical messengers secreted by glands directly into blood. Slower but longer-lasting than nervous system.</p>
<ul>
<li>Pituitary: master gland (growth hormone, controls other glands)</li>
<li>Thyroid: thyroxine (metabolism)</li>
<li>Pancreas: insulin (blood glucose regulation)</li>
<li>Adrenal: adrenaline (fight-or-flight response)</li>
</ul>
<h4>Plant Hormones (Phytohormones)</h4>
<p>Auxin (phototropism, growth), Gibberellin (stem elongation), Cytokinin (cell division), Abscisic acid (stomata closing, dormancy).</p>`,
            qa: [
              { q: 'What is a reflex action? Give an example.', a: 'A reflex action is an automatic, involuntary rapid response to a stimulus. It is controlled by the spinal cord (not brain), allowing faster response. Example: touching a hot object — the signal goes sensory nerve → spinal cord → motor nerve → muscle contracts to withdraw hand. Brain is informed later.' },
              { q: 'What are the functions of adrenaline hormone?', a: 'Adrenaline (epinephrine) is released by adrenal glands in emergency/stress situations ("fight-or-flight"). It: increases heart rate and blood pressure; dilates pupils; increases blood sugar (for energy); slows digestion; diverts blood to muscles. Prepares body for rapid action.' },
              { q: 'Why is brain called the control centre of the body?', a: 'The brain receives information from all body parts via sensory nerves, processes it, and sends appropriate commands via motor nerves. Cerebrum handles conscious thought, memory, speech. Cerebellum coordinates balance/movement. Medulla controls vital automatic functions (breathing, heartbeat). It regulates all body activities.' },
              { q: 'How do plants show tropism?', a: 'Tropism is directional growth response to a stimulus. Phototropism: stems grow toward light (auxin accumulates on shaded side, causing faster cell elongation there → stem bends toward light). Geotropism: roots grow downward (toward gravity), shoots grow upward. Hydrotropism: roots grow toward water.' },
            ]
          },
          {
            id: 'reproduction-10',
            title: 'How do Organisms Reproduce?',
            subtopics: 'Asexual reproduction, Sexual reproduction, Reproductive health, Contraception',
            definition: 'Reproduction is the production of new organisms from existing ones. Asexual reproduction involves one parent (no gametes); sexual reproduction involves two parents and fusion of gametes (fertilisation).',
            content: `<p>Reproduction is the fundamental property of life that ensures the continuation of species. The diversity of reproductive strategies — from binary fission to viviparity — shows evolution's creativity.</p>
<h4>Asexual Reproduction</h4>
<ul>
<li><strong>Binary fission:</strong> One organism splits into two (bacteria, Amoeba)</li>
<li><strong>Budding:</strong> New organism grows as a bud (Hydra, yeast)</li>
<li><strong>Fragmentation:</strong> Body breaks and each part grows (Planaria, algae)</li>
<li><strong>Spore formation:</strong> Spores germinate into new organisms (Rhizopus/bread mould)</li>
<li><strong>Vegetative propagation:</strong> New plants from roots/stems/leaves (potato — stems, rose — cutting)</li>
</ul>
<h4>Sexual Reproduction in Flowering Plants</h4>
<p>Pollination → fertilisation → seed formation. Self-pollination (same flower) or cross-pollination (different flowers). Fruit develops from ovary; seed from ovule.</p>
<h4>Human Reproductive System</h4>
<p><strong>Male:</strong> Testes (sperm + testosterone), vas deferens, prostate, penis.<br/>
<strong>Female:</strong> Ovaries (egg + oestrogen/progesterone), fallopian tubes, uterus, vagina.</p>
<p>Fertilisation → zygote → embryo → foetus → birth (9 months).</p>
<h4>Reproductive Health</h4>
<p>STIs (STDs), contraception methods: barrier (condom), hormonal (pills), surgical (vasectomy, tubectomy), IUDs.</p>`,
            qa: [
              { q: 'What is the difference between asexual and sexual reproduction?', a: 'Asexual: one parent, no gametes, offspring genetically identical to parent (clone), faster, e.g., bacteria, Hydra. Sexual: two parents, involves gametes (sperm + egg), offspring have genetic variation (better for evolution/adaptation), slower, more complex.' },
              { q: 'What is vegetative propagation? Give advantages.', a: 'Vegetative propagation is asexual reproduction in plants where new plants grow from roots, stems, or leaves. Examples: potato (tubers), rose (stem cuttings), grass (runners), ginger (rhizomes). Advantages: faster growth, maintains parent plant traits (used for seedless grapes, roses of specific colour), no need for seeds.' },
              { q: 'What happens during fertilisation in humans?', a: 'A sperm cell fuses with an egg cell (ovum) in the fallopian tube. Their nuclei merge, combining genetic material (23+23=46 chromosomes). The resulting zygote begins dividing as it travels to the uterus, where it implants and develops into an embryo over 9 months.' },
              { q: 'What is the role of the placenta?', a: 'The placenta is a special organ connecting the embryo to the mother\'s uterus. It allows: nutrients (glucose, amino acids) and oxygen to pass from mother\'s blood to foetus; waste (CO₂, urea) from foetus to mother\'s blood for removal. It also produces hormones to maintain pregnancy.' },
            ]
          },
          {
            id: 'our-environment-10',
            title: 'Our Environment',
            subtopics: 'Ecosystem, Food chains, Food webs, Ozone depletion, Waste management, Trophic levels',
            definition: 'An ecosystem is a community of living organisms interacting with each other and their physical environment. Energy flows through food chains; matter is cycled. Human activities are disrupting ecosystems worldwide.',
            content: `<p>Every organism is part of multiple food chains in a complex web of life. Understanding ecosystems tells us how our choices affect the planet — from plastic pollution to climate change.</p>
<h4>Ecosystem Components</h4>
<ul>
<li><strong>Producers (autotrophs):</strong> Plants, algae — make food by photosynthesis</li>
<li><strong>Consumers (heterotrophs):</strong> Herbivores, carnivores, omnivores</li>
<li><strong>Decomposers:</strong> Bacteria, fungi — break down dead matter, return nutrients to soil</li>
</ul>
<h4>Food Chain and Trophic Levels</h4>
<div class="formula">Grass → Grasshopper → Frog → Snake → Hawk</div>
<p>Each step = one trophic level. Energy is lost at each level (only ~10% transferred — rest used for metabolism/heat). So food chains are short (3-4 levels).</p>
<h4>Biological Magnification</h4>
<p>Non-biodegradable chemicals (DDT, mercury) accumulate and concentrate at each higher trophic level. Top predators get the highest concentration — causing reproductive failure, cancer.</p>
<h4>Ozone Depletion</h4>
<p>Chlorofluorocarbons (CFCs) from ACs, refrigerators → react with ozone (O₃) in stratosphere → ozone hole → more UV radiation → skin cancer, cataracts, harm to marine ecosystems.</p>
<h4>Waste Management</h4>
<p>Biodegradable waste (food, paper) → composting. Non-biodegradable (plastics, metals) → reduce, reuse, recycle.</p>`,
            qa: [
              { q: 'Why are food chains usually limited to 4-5 trophic levels?', a: 'At each trophic level, only about 10% of energy is transferred to the next level. The rest (90%) is used for the organism\'s own metabolism or lost as heat. By the 4th-5th level, so little energy remains that it cannot support a large enough population of organisms.' },
              { q: 'What is biological magnification? Give an example.', a: 'Biological magnification (bioaccumulation) is the increasing concentration of non-biodegradable chemicals at higher trophic levels. Example: DDT (pesticide) — small amount in water → plankton concentrate it → small fish eat many plankton (more DDT) → large fish eat many small fish (even more DDT) → bird eats large fish (very high concentration) → causes thin eggshells, reproductive failure.' },
              { q: 'What are the effects of ozone layer depletion?', a: 'Ozone layer in stratosphere absorbs harmful UV radiation. Depletion (by CFCs) leads to: increased UV-B radiation reaching Earth; more skin cancers and cataracts in humans; damage to immune systems; harm to phytoplankton (base of marine food chain); crop yield reduction. Solutions: ban on CFCs (Montreal Protocol 1987).' },
              { q: 'Distinguish between biodegradable and non-biodegradable waste.', a: 'Biodegradable: broken down by decomposers (bacteria, fungi) into simpler substances. Examples: food scraps, paper, cotton, wood. Non-biodegradable: not broken down (or very slowly). Examples: plastics, metals, DDT, glass. Non-biodegradable waste accumulates, pollutes soil and water, and causes biological magnification in food chains.' },
            ]
          },
          {
            id: 'natural-resources-management-10',
            title: 'Management of Natural Resources',
            subtopics: 'Conservation, Forest management, Water harvesting, Coal and petroleum, Sustainable development',
            definition: 'Natural resource management involves using resources wisely so they are available for future generations (sustainable development). This includes managing forests, water bodies, soil, coal, and petroleum sustainably.',
            content: `<p>India\'s rapidly growing population and economy put enormous pressure on natural resources. The challenge is meeting today\'s needs without destroying the resource base for future generations.</p>
<h4>The Three Rs</h4>
<div class="formula">Reduce → Reuse → Recycle</div>
<p>The most effective is Reduce (use less in the first place). Reuse (use multiple times before discarding). Recycle (process used materials into new products — energy-intensive but better than landfills).</p>
<h4>Forests</h4>
<p>Forests are biodiversity hotspots providing: timber, medicine, oxygen, climate regulation, soil conservation, flood control. Deforestation → soil erosion, floods, climate change. Community forest management (e.g., Bishnoi community in Rajasthan, Chipko movement) is more effective than government-only management.</p>
<h4>Water Conservation</h4>
<ul>
<li>Rainwater harvesting: collecting rain in tanks or recharging groundwater</li>
<li>Traditional water systems: kuls (Himachal), khadins (Rajasthan), johads (Delhi region)</li>
<li>Narmada Bachao Andolan: controversy of large dams — benefits (irrigation, power) vs costs (displacement, ecosystem disruption)</li>
</ul>
<h4>Coal and Petroleum</h4>
<p>Non-renewable, formed over millions of years. At current rates: coal ~200 years, petroleum ~50 years. Conservation: use public transport, efficient appliances, alternative fuels.</p>`,
            qa: [
              { q: 'What is the Chipko Movement and why was it significant?', a: 'The Chipko Movement began in 1973 in Uttarakhand, India. Villagers (led by Gaura Devi and supported by Sunderlal Bahuguna) hugged trees to prevent contractors from cutting them. It was significant as: it stopped deforestation; showed power of community action; influenced government forest policy; was one of the first successful environmental movements in India.' },
              { q: 'What are the advantages and disadvantages of large dams?', a: 'Advantages: irrigation (food security), hydroelectric power (clean energy), flood control, water storage for dry seasons. Disadvantages: displacement of communities (often tribals), loss of forest and agricultural land (submerged), ecosystem disruption (stops fish migration), seismic activity risk, benefits often don\'t reach nearby communities.' },
              { q: 'Why is water conservation important in India?', a: 'India has 18% of world population but only 4% of freshwater resources. Population growth, agriculture (70% of water use), industry, and climate change are increasing water stress. Many regions face water scarcity. Traditional water harvesting systems (johads, kuls) show that communities have managed water sustainably for centuries — these methods need revival.' },
              { q: 'What does sustainable development mean?', a: 'Sustainable development means meeting the needs of the present without compromising the ability of future generations to meet their own needs. It means using resources at a rate that allows natural replenishment: don\'t fish more than can reproduce; don\'t pollute faster than nature can clean; use renewable energy instead of fossil fuels; maintain biodiversity.' },
            ]
          },
        ]
      },
      history: {
        id: 'history', topics: [
          {
            id: 'rise-of-nationalism-europe',
            title: 'The Rise of Nationalism in Europe',
            subtopics: 'Romanticism, Liberal nationalism, 1848 revolutions, German and Italian unification, Nation-states',
            definition: 'Nationalism is the belief that people who share a common language, history, and culture should have their own independent nation-state. It emerged in 19th century Europe and reshaped the world map.',
            content: `<p>Before the 19th century, people identified with their religion, local ruler, or region — not with a "nation." Nationalism changed this, leading to the creation of Germany, Italy, and eventually triggering World Wars.</p>
<h4>The French Revolution's Legacy</h4>
<p>The Revolution spread ideas of popular sovereignty and national identity. Napoleon, though he ended the Republic, spread these ideas across Europe through his conquests — planting seeds of nationalism everywhere.</p>
<h4>Romanticism and National Identity</h4>
<p>Romantic artists, poets, and musicians (like Beethoven and Grimm Brothers) celebrated folk culture, national language, and shared history — creating emotional attachment to the idea of a nation.</p>
<h4>German Unification (1871)</h4>
<p>Otto von Bismarck used "blood and iron" (wars against Denmark, Austria, France) to unite 39 German states. King Wilhelm I became Kaiser of unified Germany at Versailles (1871).</p>
<h4>Italian Unification (Risorgimento)</h4>
<p>Mazzini (ideological), Garibaldi (military — led "Red Shirts"), Cavour (political diplomat) — different approaches united Italy by 1871 under King Victor Emmanuel II.</p>`,
            qa: [
              { q: 'What is nationalism?', a: 'Nationalism is the belief that people sharing a common language, culture, history, and territory form a "nation" and should have their own sovereign state. It involves loyalty and devotion to the nation as the primary identity, above religion or class.' },
              { q: 'What was the Frankfurt Parliament of 1848 and why did it fail?', a: 'The Frankfurt Parliament was an elected German assembly that tried to create a unified German nation. It failed because: it was dominated by the middle class who were too cautious; the Prussian king refused the crown offered (considered it from "the gutter"); Austria opposed it; and the military dissolved it in 1849.' },
              { q: 'How did Bismarck unify Germany?', a: 'Otto von Bismarck, Chancellor of Prussia, used strategic wars (Austro-Prussian War 1866, Franco-Prussian War 1870-71) to unite German states under Prussian leadership. After defeating France, the German Empire was proclaimed at Versailles in 1871.' },
              { q: 'Who were Mazzini, Garibaldi, and Cavour in Italian unification?', a: 'Mazzini: ideologist, founded Young Italy, inspired nationalist movement. Garibaldi: military leader who conquered southern Italy with 1000 "Red Shirts" (1860). Cavour: Prime Minister of Sardinia, used diplomacy and alliances to defeat Austria and unite north Italy. Together they achieved Italian unification by 1871.' },
            ]
          },
        ]
      },
      geography: {
        id: 'geography', topics: [
          {
            id: 'resources-development',
            title: 'Resources and Development',
            subtopics: 'Classification of resources, Land use, Soil types, Soil conservation',
            definition: 'Resources are naturally occurring materials that are useful to humans. Their development must be sustainable — meeting present needs without compromising future generations\' ability to meet their needs.',
            content: `<p>India has abundant natural resources, but their uneven distribution, overuse, and degradation threaten future generations. Resource planning and conservation are essential national priorities.</p>
<h4>Classification of Resources</h4>
<ul>
<li>By origin: Biotic (forest, fish) vs Abiotic (rocks, minerals)</li>
<li>By exhaustibility: Renewable (solar, wind) vs Non-renewable (coal, oil)</li>
<li>By ownership: Individual, Community, National, International</li>
<li>By development: Potential, Developed, Stock, Reserves</li>
</ul>
<h4>Land Resources</h4>
<p>India: 67% cultivable, 23% forest cover (target), 10% other uses. Land degradation: waterlogging, salinity, soil erosion, desertification.</p>
<h4>Soil Types of India</h4>
<ul>
<li>Alluvial: North India — most fertile, best for wheat, rice</li>
<li>Black (Regur): Deccan — retains moisture, cotton</li>
<li>Red and Yellow: Low fertility, needs fertilisers</li>
<li>Laterite: Heavy rainfall areas, leached of nutrients</li>
<li>Arid: Rajasthan desert — sandy, low water retention</li>
</ul>`,
            qa: [
              { q: 'What is resource planning and why is it necessary?', a: 'Resource planning is the judicious use of resources — identifying available resources, planning their equitable distribution, and using technology to develop them sustainably. It is necessary because resources are limited, unevenly distributed, and many are non-renewable.' },
              { q: 'What are alluvial soils and where are they found?', a: 'Alluvial soils are deposited by rivers (Ganga, Indus, Brahmaputra). Found in the Northern Plains and coastal areas. They are highly fertile, rich in nutrients, and support intensive agriculture — India\'s most important soil type for food production.' },
              { q: 'What is the difference between potential resources and developed resources?', a: 'Potential resources: exist in a region but not yet developed due to lack of technology or capital (e.g., solar energy potential in Rajasthan). Developed resources: surveyed, quantified, and currently being used (e.g., coal being mined). Development converts potential to actual resources.' },
              { q: 'What is soil conservation and what are its methods?', a: 'Soil conservation prevents soil erosion and maintains fertility. Methods: contour ploughing (ploughing along hillside contours), strip cropping (alternating crop strips prevent runoff), shelter belts (trees reduce wind erosion), terrace farming (steps on slopes), check dams (reduce water flow speed).' },
            ]
          },
          {
            id: 'manufacturing-industries',
            title: 'Manufacturing Industries',
            subtopics: 'Importance, Types, Iron and steel, Textiles, IT, Industrial pollution',
            definition: 'Manufacturing is the conversion of raw materials into finished goods. It is the backbone of economic development, generating employment, increasing GDP, and reducing dependence on primary sector (agriculture).',
            content: `<p>India's transformation from an agricultural economy to an industrial powerhouse began after 1947 and accelerated after 1991 liberalisation. Today India is a global leader in IT, pharmaceuticals, and textiles.</p>
<h4>Classification of Industries</h4>
<ul>
<li>By raw material: Agro-based (cotton, jute), Mineral-based (iron, cement)</li>
<li>By size: Large (steel plants), Small scale (handloom), Cottage (handicrafts)</li>
<li>By ownership: Public (SAIL, BHEL), Private (Tata, Reliance), Joint</li>
</ul>
<h4>Iron and Steel Industry</h4>
<p>Backbone of all manufacturing. Major centres: Jamshedpur (Tata), Bhilai, Rourkela, Durgapur. Requires: iron ore, coal, limestone, water. Agglomeration of related industries.</p>
<h4>Cotton Textile Industry</h4>
<p>Oldest large-scale industry. Mumbai called "Cottonopolis" — proximity to cotton-growing Maharashtra, port for machinery import, humid climate, financial capital.</p>
<h4>IT and Software Industry</h4>
<p>Concentrated in Bengaluru, Hyderabad, Pune, Chennai. Advantages: skilled English-speaking workforce, lower costs, good telecom infrastructure.</p>`,
            qa: [
              { q: 'Why is iron and steel called the "backbone" of modern industry?', a: 'Steel is used to make machines, vehicles, ships, buildings, bridges, and tools. Without steel, no other industry can function — tractors for agriculture, machines for textiles, vehicles for transport all depend on steel. Development of iron and steel industry leads to development of all other industries.' },
              { q: 'What factors led to the concentration of cotton textile industry in Mumbai?', a: 'Mumbai\'s advantages: proximity to cotton-growing Maharashtra (raw material), excellent port for import of machinery and export, humid climate (good for spinning fine yarn), financial capital (capital availability), and historical first-mover advantage.' },
              { q: 'What is industrial pollution and what are its effects?', a: 'Industrial pollution: discharge of toxic chemicals (effluents) into water, emission of gases (SO₂, CO₂, particulates) into air, noise from machinery, and thermal pollution of water. Effects: water pollution kills aquatic life, air pollution causes respiratory diseases, noise causes hearing loss, soil contamination affects agriculture.' },
              { q: 'Why has India emerged as a global IT hub?', a: 'India has: large pool of English-speaking engineers at competitive salaries, excellent technical education (IITs, NITs), significant time zone advantage (work while US sleeps), robust telecom infrastructure post-1991, and strong diaspora connections in the US tech industry. Bengaluru, Hyderabad are among the world\'s top tech cities.' },
            ]
          },
        ]
      },
      political_science: {
        id: 'political_science', topics: [
          {
            id: 'power-sharing',
            title: 'Power Sharing',
            subtopics: 'Majoritarianism, Civil war in Sri Lanka, Belgium model, Forms of power sharing',
            definition: 'Power sharing means distributing governmental authority among different groups — horizontally (between branches of government) and vertically (between levels of government) — to prevent concentration of power.',
            content: `<p>Sri Lanka's civil war and Belgium's peaceful accommodation show two different approaches to diversity. Power sharing is the key to managing diversity in a democracy without violence.</p>
<h4>Sri Lanka — A Case Study of Majoritarianism</h4>
<p>After independence (1948), Sinhala (Buddhist majority) government passed: Sinhala Only Act (1956) — made Sinhala the only official language, discriminating against Tamils. Led to Tamil militancy and a devastating civil war lasting 26 years (1983-2009).</p>
<h4>Belgium — Accommodation</h4>
<p>Belgium is 59% Dutch-speaking (Flemish), 40% French-speaking (Walloon), 1% German. Instead of majoritarian rule, Belgium: amended constitution 4 times, equal ministers in central government regardless of Dutch/French ratio, separate governments for each region + a Community Government.</p>
<h4>Why Power Sharing is Desirable</h4>
<p>Prevents majority tyranny, reduces social conflict, gives all groups stake in system, represents diverse interests in governance.</p>
<h4>Forms of Power Sharing</h4>
<p>Horizontal: between organs of government (legislature, executive, judiciary). Vertical: between national and state governments (federalism). Among social groups: reserved constituencies. Between political parties: coalition governments.</p>`,
            qa: [
              { q: 'What is majoritarianism? How did it affect Sri Lanka?', a: 'Majoritarianism is the belief that the majority community should rule, ignoring minority interests. In Sri Lanka, the Sinhala majority government made Sinhala the only official language, removed Tamil representation, and discriminated against Tamil Hindus. This led to Tamil militancy and a brutal civil war (1983-2009).' },
              { q: 'How did Belgium manage its ethnic diversity?', a: 'Belgium amended its constitution 4 times. Key measures: equal numbers of French and Dutch ministers in central government, separate governments for each linguistic region (Flemish, Walloon), a Community Government for cultural matters, and a separate Brussels government. This prevented conflict through accommodation.' },
              { q: 'What are the different forms of power sharing in a democracy?', a: 'Power is shared: Horizontally — between legislative (makes laws), executive (implements laws), and judiciary (interprets laws). Vertically — between national government and state governments (federalism). Among social groups — reserved constituencies for SC/ST, minorities. Between political parties — coalition governments, opposition\'s rights.' },
              { q: 'Why is power sharing considered prudent (wise) in a democracy?', a: 'Power sharing reduces social conflict (no one group has unlimited power), brings stability (all groups have stake in system), prevents authoritarian tendencies (checks and balances), and represents diverse interests — making governance more legitimate and effective.' },
            ]
          },
          {
            id: 'federalism',
            title: 'Federalism',
            subtopics: 'What is federalism, Features, Centre-State relations, Decentralisation, India as federal state',
            definition: 'Federalism is a system where governmental powers are constitutionally divided between a central (national) government and regional (state) governments. Both levels are supreme in their respective domains.',
            content: `<p>India is a vast country with enormous diversity. A single centralised government cannot effectively govern 1.4 billion people across 28 states. Federalism allows governance that is simultaneously national in vision and local in execution.</p>
<h4>Key Features of Federal System</h4>
<ul>
<li>Two or more levels of government (centre and states)</li>
<li>Each level has own jurisdiction (subject list)</li>
<li>Constitution is supreme — defines distribution of powers</li>
<li>Court settles disputes between levels</li>
<li>Revenue sharing between levels</li>
</ul>
<h4>India's Three Lists</h4>
<p><strong>Union List:</strong> Only Central government — defence, foreign affairs, banking, communications.<br/><strong>State List:</strong> Only State government — police, agriculture, trade, commerce within state.<br/><strong>Concurrent List:</strong> Both — education, forests, marriage, adoption.</p>
<h4>Decentralisation in India</h4>
<p>1992 Constitutional amendment (73rd, 74th): made Panchayati Raj and urban local bodies (municipalities) constitutionally mandatory with own elected bodies and funds — creating a 3rd tier of government.</p>`,
            qa: [
              { q: 'What is federalism? How is it different from a unitary system?', a: 'Federalism: powers divided between central and state governments — both have sovereignty in their domains, protected by constitution. Unitary system: all power with central government; states are subordinate. India is federal; France and Britain are largely unitary.' },
              { q: 'What are the Union, State, and Concurrent lists in the Indian Constitution?', a: 'Union List (100 subjects): Only Parliament can legislate — defence, nuclear energy, foreign affairs. State List (61 subjects): Only State legislature — police, agriculture, land. Concurrent List (52 subjects): Both Parliament and States — education, forests, marriage. In conflict, central law prevails.' },
              { q: 'What is the 73rd Constitutional Amendment (1992) and why is it significant?', a: 'The 73rd Amendment made Panchayati Raj (village self-governance) constitutionally mandatory. Every state must have a 3-tier Panchayat system (gram panchayat, panchayat samiti, zila parishad). It mandated 33% reservation for women, created elected local bodies with own powers and funds — a revolution in grassroots democracy.' },
              { q: 'Is India truly federal or is it more centralist?', a: 'India is described as "quasi-federal" — federal in structure but unitary in spirit. India has: single citizenship, single constitution, Parliament can alter state boundaries, Governor appointed by Centre, All-India Services (IAS, IPS) under Centre, emergency provisions that centralise all powers. These features make India more centralist than classic federations like USA.' },
            ]
          },
        ]
      },
      economics: {
        id: 'economics', topics: [
          {
            id: 'development-economics',
            title: 'Development',
            subtopics: 'What is development, National income, Per capita income, HDI, Sustainability',
            definition: 'Development refers to improvement in economic and social well-being. It goes beyond GDP per capita to include health, education, dignity, freedom, and environmental sustainability.',
            content: `<p>Is a country "developed" just because it is rich? What about its citizens' health, education, freedom, and happiness? Development economics challenges us to think about what really constitutes progress.</p>
<h4>What is Development?</h4>
<p>Different people desire different things: higher income, job security, better education, healthcare, equality, clean environment. Development must be multi-dimensional — not just about money.</p>
<h4>National Income and Per Capita Income</h4>
<p>GDP: total value of goods/services produced in a country in a year. Per capita income = GDP ÷ Population. Used to compare countries but ignores distribution (inequality).</p>
<h4>Human Development Index (HDI)</h4>
<p>UNDP's composite measure: Life expectancy at birth (health) + Education (mean/expected years of schooling) + Per capita GNI (income). Better than GDP alone — India ranks much lower in HDI than in GDP.</p>
<h4>Sustainability</h4>
<p>Current development should not compromise future generations' ability to develop. Non-renewable resources must be used carefully. Kerala: lower income than Punjab but better HDI (health, education indicators).</p>`,
            qa: [
              { q: 'Why is per capita income alone not a good indicator of development?', a: 'Per capita income is an average — it hides inequality. A country with high per capita income may have great wealth concentrated in few hands (high Gini coefficient), with most people still poor. HDI, infant mortality rate, literacy rate, and life expectancy better capture overall wellbeing.' },
              { q: 'What is the Human Development Index (HDI)?', a: 'HDI is a composite index developed by UNDP. It combines: (1) Life expectancy at birth (health), (2) Education (mean years of schooling + expected years of schooling), (3) Gross National Income per capita (purchasing power parity). Norway consistently tops HDI; India ranks around 130.' },
              { q: 'How does Kerala compare to Punjab in development?', a: 'Punjab has a higher per capita income than Kerala. But Kerala has better HDI indicators: lower infant mortality (12 vs 33 per 1000), higher literacy (94% vs 77%), higher life expectancy, better healthcare. This shows money alone doesn\'t determine development quality.' },
              { q: 'What is sustainable development?', a: 'Sustainable development meets present generation\'s needs without compromising future generations\' ability to meet theirs. It requires: using renewable energy instead of fossil fuels, preventing deforestation, recycling, reducing pollution, and ensuring equitable growth. The Brundtland Commission defined it in 1987.' },
            ]
          },
          {
            id: 'money-credit',
            title: 'Money and Credit',
            subtopics: 'Money as medium of exchange, Banks, Credit, Terms of credit, Formal vs informal credit',
            definition: 'Money is anything widely accepted as a medium of exchange, removing the need for barter. Credit (loans) enables investment and growth but its terms (interest, collateral) determine who benefits.',
            content: `<p>Money and credit are the lifeblood of a modern economy. But access to credit on fair terms is highly unequal — this inequality explains why the rich get richer and the poor remain trapped.</p>
<h4>Functions of Money</h4>
<ul>
<li>Medium of exchange (solves barter's double coincidence of wants problem)</li>
<li>Measure of value (price in money)</li>
<li>Store of value (save for future)</li>
<li>Standard of deferred payment (repay loans later)</li>
</ul>
<h4>Banks and Credit Creation</h4>
<p>Banks accept deposits, maintain a fraction as reserve (Cash Reserve Ratio), and lend the rest. Lending creates new deposits — credit multiplier effect. RBI regulates all banks.</p>
<h4>Terms of Credit</h4>
<p>Interest rate, collateral (security), documentation required, mode of repayment. Unfavourable terms trap poor borrowers in debt cycles.</p>
<h4>Formal vs Informal Credit</h4>
<p>Formal: banks, cooperative societies — lower interest, regulated. Informal: moneylenders, landlords — high interest (up to 40-100% in rural areas!), no regulation, exploitative. Poor rely more on informal credit (no collateral for banks).</p>`,
            qa: [
              { q: 'Why is money considered a medium of exchange?', a: 'Barter requires "double coincidence of wants" — I want what you have AND you want what I have. Money solves this: I sell my goods for money and use money to buy what I need. Money is universally accepted, so any trade can happen without finding a matching barter partner.' },
              { q: 'What is collateral and why can\'t poor people access formal credit?', a: 'Collateral is an asset (land, property, gold) a borrower pledges as security for a loan. If unable to repay, the lender takes the collateral. Poor people often have no property to pledge → banks won\'t lend → they must borrow from informal moneylenders at extremely high interest rates.' },
              { q: 'What is a Self-Help Group (SHG) and how does it help the rural poor?', a: 'An SHG is a group of 15-20 rural neighbours (often women) who pool savings and lend to members at reasonable rates. This provides formal credit without collateral, empowers women (members control funds), breaks the moneylender cycle, and builds community solidarity.' },
              { q: 'What is the role of the Reserve Bank of India?', a: 'RBI is India\'s central bank: (1) Issues currency notes and controls money supply, (2) Sets cash reserve ratio (how much banks must keep in reserve), (3) Sets interest rates (repo rate), (4) Regulates all banks — ensuring they follow rules and don\'t take excessive risks, (5) Lender of last resort to banks in crisis.' },
            ]
          },
          {
            id: 'globalisation',
            title: 'Globalisation and the Indian Economy',
            subtopics: 'What is globalisation, MNCs, Trade and investment, WTO, Impact on India, Liberalisation',
            definition: 'Globalisation is the process of rapid integration and interconnection of countries through trade, investment, technology, and movement of people. It has both benefited and harmed different groups in India.',
            content: `<p>The smartphone you use, the clothes you wear, the software powering your apps — globalisation connects every part of your life to the world economy. Understanding its causes and effects is essential for any informed citizen.</p>
<h4>What is Globalisation?</h4>
<p>Integration of national economies through: trade (importing/exporting goods), foreign investment (MNCs setting up factories), technology transfer, and migration of people.</p>
<h4>Role of MNCs (Multinational Corporations)</h4>
<p>MNCs are companies operating in multiple countries. They: set up production where costs are lowest (global supply chains), seek large markets, bring investment and technology, but also repatriate profits and may displace local businesses.</p>
<h4>1991 Liberalisation in India</h4>
<p>India opened its economy in 1991 (LPG reforms: Liberalisation, Privatisation, Globalisation). Removed trade barriers, allowed FDI, privatised public sector companies. Led to rapid economic growth but also increased inequality.</p>
<h4>Impact: Winners and Losers</h4>
<p>Winners: IT sector, large industries, urban middle class. Losers: small manufacturers unable to compete with cheap Chinese imports, some farmers, workers in labour-intensive industries who faced job loss.</p>`,
            qa: [
              { q: 'What were the LPG reforms of 1991 in India?', a: 'In 1991, India faced a severe balance of payments crisis. PM Narasimha Rao and Finance Minister Manmohan Singh introduced LPG reforms: Liberalisation (removed licence raj, reduced regulations), Privatisation (reduced government\'s role in business, sold public sector companies), Globalisation (opened economy to foreign trade and investment, reduced import duties). These reforms transformed India into one of the fastest-growing economies.' },
              { q: 'How have MNCs changed production and trade globally?', a: 'MNCs create global supply chains: design in USA, manufacture components in China, assemble in India, sell worldwide. A Dell laptop might have: processor from USA (Intel), screen from South Korea, assembly in China, software from India. This international division of production makes goods cheaper but concentrates profits in wealthy countries where MNCs are headquartered.' },
              { q: 'What is the WTO and what does it do?', a: 'The World Trade Organisation (WTO) is an international organisation (164 member countries) that sets rules for international trade. It: negotiates reduction of trade barriers (tariffs, import duties), settles trade disputes between countries, promotes "free trade." Critics argue WTO rules favour rich countries that can subsidise their farmers and manufacturers while demanding poor countries open their markets.' },
            ]
          },
          {
            id: 'consumer-rights',
            title: 'Consumer Rights',
            subtopics: 'Consumer rights, Consumer Protection Act, COPRA, Consumer courts, Redressal, ISI and Agmark',
            definition: 'A consumer is anyone who buys goods or services for personal use. Consumer rights protect buyers from unfair trade practices — exploitation, substandard goods, misleading advertisements, and fraud.',
            content: `<p>You are a consumer every time you buy a product or use a service. Consumer protection ensures that buyers have rights and can seek justice when those rights are violated. In India, COPRA (1986) established this framework.</p>
<h4>Six Consumer Rights</h4>
<ul>
<li><strong>Right to Safety:</strong> Protection from hazardous goods and services.</li>
<li><strong>Right to Information:</strong> True and complete information about products.</li>
<li><strong>Right to Choose:</strong> Access to variety of goods at competitive prices.</li>
<li><strong>Right to be Heard:</strong> Consumer interests represented in government.</li>
<li><strong>Right to Redressal:</strong> Compensation for exploitation or injury.</li>
<li><strong>Right to Education:</strong> Knowledge about rights and how to exercise them.</li>
</ul>
<h4>Consumer Protection Act (COPRA 1986)</h4>
<p>Three-tier consumer court system: District Forum (claims up to ₹20 lakh), State Commission (₹20 lakh–₹1 crore), National Commission (above ₹1 crore). Consumer can file complaint themselves, no lawyer needed.</p>
<h4>Quality Marks</h4>
<p>ISI (industrial products — electrical items, helmets), Agmark (agricultural products — honey, ghee), Hallmark (gold jewellery), BIS (Bureau of Indian Standards). These assure quality and safety.</p>`,
            qa: [
              { q: 'What is COPRA and what consumer rights does it protect?', a: 'COPRA (Consumer Protection Act, 1986, updated 2019) is India\'s main consumer protection law. It establishes consumer courts where consumers can file complaints against: defective products, deficient services, unfair trade practices (false advertising), overcharging, hazardous goods. The law makes it easy for consumers — they can represent themselves, cases are heard in 90-150 days, and compensation can be awarded.' },
              { q: 'What should you check before buying an electrical appliance?', a: 'Check for: (1) ISI mark (Bureau of Indian Standards certification — ensures the product meets safety and quality standards). (2) Manufacturing date and expiry/warranty. (3) MRP (Maximum Retail Price) — you cannot be charged more. (4) Contact details of manufacturer. (5) Instructions and warnings. ISI mark on electrical goods is mandatory for safety.' },
              { q: 'What are unfair trade practices? Give examples.', a: 'Unfair trade practices include: false advertising (showing product better than it is), selling goods below cost to eliminate competition, hoarding to create artificial scarcity, adulteration (adding inferior materials to food — mixing chalk in flour, water in milk), short-weighing (selling 900g as 1kg), and charging above MRP. All are illegal under COPRA and consumer courts can award compensation.' },
            ]
          },
        ]
      },
      history: {
        id: 'history', topics: [
          {
            id: 'rise-nationalism-europe',
            title: 'The Rise of Nationalism in Europe',
            subtopics: 'French Revolution, Napoleon, Romanticism, Unification of Italy and Germany, Balkans',
            definition: 'Nationalism is the idea that people sharing a common language, history, and culture constitute a nation and deserve political self-determination. It was the dominant force reshaping Europe in the 19th century.',
            content: `<p>The 19th century saw the map of Europe completely redrawn as nationalist movements dissolved old empires and created new nation-states. The ideas born in this era still shape the world today.</p>
<h4>French Revolution and Napoleon</h4>
<p>The French Revolution (1789) introduced ideas of liberty, equality, and nationalism. Napoleon's armies spread these ideas across Europe, also provoking nationalist reactions against French domination.</p>
<h4>Romanticism and Cultural Nationalism</h4>
<p>Romantic artists, poets, and musicians (Herder, Grimm brothers, Chopin) promoted the idea of a national culture based on shared language, folk tales, and music. "Imagined communities" bound by culture, not just territory.</p>
<h4>Unification of Italy (1870)</h4>
<p>Key figures: Mazzini (idealist visionary), Garibaldi (military force), Cavour (political strategist). Italy unified from many small states. Rome became capital in 1871.</p>
<h4>Unification of Germany (1871)</h4>
<p>Prussia's Bismarck used "blood and iron" policy — wars against Denmark, Austria, France. After defeating France (1871), German princes proclaimed the German Empire in Versailles.</p>`,
            qa: [
              { q: 'How did Napoleon both spread and provoke nationalism?', a: 'Napoleon spread nationalism by: carrying ideals of French Revolution (liberty, equality) across Europe, codifying laws (Napoleonic Code), reducing feudal privileges. He provoked nationalism by: subjugating other peoples, imposing French culture, triggering resentment. European peoples under French rule developed nationalist movements to expel the French — showing that nationalism cuts both ways.' },
              { q: 'What role did Romanticism play in the growth of nationalism?', a: 'Romantic thinkers rejected pure reason and emphasised emotion, culture, and belonging. Herder argued each nation has its own unique spirit (Volksgeist) expressed in language, folk songs, and poetry. Grimm brothers collected German folk tales. Composers like Chopin used Polish folk themes. This cultural nationalism gave people a sense of distinct national identity beyond just political boundaries.' },
            ]
          },
          {
            id: 'nationalism-india-10',
            title: 'Nationalism in India',
            subtopics: 'Non-Cooperation Movement, Civil Disobedience, Quit India, Gandhi\'s methods, Diverse participation',
            definition: 'Indian nationalism was the movement to end British colonial rule. Mahatma Gandhi transformed it into a mass movement involving millions of ordinary Indians across all classes, regions, and religions.',
            content: `<p>How did India gain independence from the most powerful empire in history? Through one of the most remarkable mass movements ever seen — non-violent civil disobedience by millions of Indians.</p>
<h4>Non-Cooperation Movement (1920-22)</h4>
<p>Gandhi's first mass movement. Indians refused to cooperate with British institutions, boycotted foreign goods, returned titles. Ended after Chauri Chaura violence (1922) — Gandhi prioritised non-violence above all.</p>
<h4>Civil Disobedience Movement (1930)</h4>
<p>Gandhi's Dandi March — 240 miles in 24 days to make salt, defying the Salt Law. Mass civil disobedience followed. Women participated in large numbers for the first time.</p>
<h4>Quit India Movement (1942)</h4>
<p>"Do or Die" — Gandhi's most radical call during WWII. All Congress leaders arrested immediately but the movement continued spontaneously.</p>
<h4>Diverse Participation</h4>
<p>Peasants, industrial workers, women, tribal communities, students — each participated for their own reasons yet united under the national movement.</p>`,
            qa: [
              { q: 'What was the significance of Gandhi\'s Dandi March?', a: 'Gandhi walked 240 miles to make salt from seawater, defying the Salt Law (British monopoly on salt). Significant because: salt was used by every Indian (powerful symbol of colonial exploitation), drew worldwide media attention, inspired millions to join Civil Disobedience, proved peaceful resistance was effective.' },
              { q: 'What was the Rowlatt Act and why did it anger Indians?', a: 'The Rowlatt Act (1919) allowed the British to arrest and imprison Indians without trial. It triggered India\'s first major nationwide agitation including the Jallianwala Bagh massacre (April 13, 1919) where British troops fired on a peaceful crowd, killing hundreds.' },
              { q: 'How did different groups participate in the independence movement?', a: 'Peasants joined Non-Cooperation (against high rents and taxes). Workers struck in mills. Women picketed foreign cloth shops and made salt — breaking purdah restrictions. Tribal communities protested against forest laws. Students and youth formed the vanguard. Each group had specific grievances but united under the national movement.' },
            ]
          },
          {
            id: 'making-global-world',
            title: 'The Making of a Global World',
            subtopics: 'Pre-modern world trade, Colonialism and trade, 19th century economy, Interwar period, Post-WWII Bretton Woods',
            definition: 'Globalisation — economic integration of the world — is not new. Trade, migration, and capital flows have connected distant parts of the world for centuries, though its scale and speed have increased dramatically.',
            content: `<p>The world has been "globalised" for longer than we think. Silk Road trade, the Columbian exchange, and colonial trade networks all linked distant economies centuries before the internet.</p>
<h4>Pre-modern World</h4>
<p>Silk Roads connected China, Central Asia, and Europe (spices, silk, ideas). The Indian Ocean was a major trade route. Bubonic Plague (1347) spread along trade routes, killing 1/3 of Europe's population.</p>
<h4>Colonialism and the 19th Century Economy</h4>
<p>European colonialism created a deeply unequal global economy. Colonies supplied raw materials; manufactured goods flowed from Europe. India: cotton, opium, indigo. Americas: silver, cotton. Australia: wool. Railways, telegraph, and steamships connected the world.</p>
<h4>Interwar Period (1919-1939)</h4>
<p>WWI disrupted global trade. Great Depression (1929) — US stock market crash caused global economic collapse. Trade fell by 66%. Unemployment soared. Countries turned to protectionism.</p>
<h4>Post-WWII: Bretton Woods System</h4>
<p>1944: IMF and World Bank established. Fixed exchange rates (gold standard). Rebuilt international trade. But primarily benefited developed countries.</p>`,
            qa: [
              { q: 'How did the Great Depression affect India?', a: 'India\'s agricultural prices collapsed — farmers could not repay loans. Export earnings fell sharply. Unemployment rose in cities. Yet the colonial government insisted on collecting taxes and loan repayments. This hardship radicalised the independence movement — many peasants joined the Civil Disobedience Movement (1930) partly due to economic distress caused by the Depression.' },
              { q: 'What was the Bretton Woods system?', a: 'The Bretton Woods Conference (1944) established: (1) IMF (International Monetary Fund) — to stabilise exchange rates and lend to countries with payment deficits; (2) World Bank — to fund post-war reconstruction. The US dollar became the world reserve currency (linked to gold at $35/ounce). This system governed the global economy until 1971 when Nixon ended dollar-gold convertibility.' },
            ]
          },
          {
            id: 'age-industrialisation',
            title: 'The Age of Industrialisation',
            subtopics: 'Proto-industrialisation, Britain\'s Industrial Revolution, Indian textiles, Colonial impact on Indian industry',
            definition: 'Industrialisation — production by machines in factories — transformed Britain first, then spread worldwide. Colonial rule shaped India\'s industrialisation in specific ways, destroying some industries while promoting others.',
            content: `<p>The Industrial Revolution began in Britain around 1780 and transformed the world. By the 19th century, factories replaced hand production, cities grew explosively, and the relationship between colonisers and colonies was redefined by industrial power.</p>
<h4>Proto-industrialisation</h4>
<p>Before factories: merchants gave raw materials to rural families to produce goods at home (putting-out system). Entire families worked — spinning, weaving, stitching. Seasonal employment.</p>
<h4>Britain's Industrial Revolution</h4>
<p>Key factors: coal and iron (resources), colonies (markets and raw materials), capital (accumulated through trade), enclosures (agricultural labour displaced to cities), technological innovation (steam engine, spinning jenny, power loom).</p>
<h4>Impact on Indian Textiles</h4>
<p>India had the world's finest textile industry — Dacca muslin, Calicut calico. British machine-made cloth flooded India (cheap, subsidised by colonial policy). Indian weavers lost livelihoods. Hand-weaving declined massively in 19th century.</p>
<h4>Industrial Growth in India</h4>
<p>Some Indian industries grew: jute (Bengal), cotton mills (Bombay-Ahmedabad), iron and steel (Tata Steel, 1907). But under colonial policy, India remained primarily a raw material supplier and market for British goods.</p>`,
            qa: [
              { q: 'How did British policies hurt Indian textile industry?', a: 'British policies deliberately destroyed Indian textile competition: (1) imposed high tariffs on Indian cloth exported to Britain while Indian market was open to British cloth; (2) railway freight rates favoured British imports; (3) colonial government did not protect Indian industry. Result: from world\'s leading textile exporter, India became a raw cotton exporter and British cloth importer.' },
              { q: 'Why did industries first develop in Britain rather than elsewhere?', a: 'Britain had unique advantages: (1) abundant coal and iron (energy and raw material for machines); (2) vast colonial empire (markets for goods, cheap raw materials); (3) accumulated capital from trade; (4) Protestant work ethic and entrepreneurship; (5) political stability (no major wars on British soil after 1688); (6) key inventions (steam engine — Watt, 1765; spinning jenny — Hargreaves, 1764).' },
            ]
          },
        ]
      },
      geography: {
        id: 'geography', topics: [
          {
            id: 'resources-development',
            title: 'Resources and Development',
            subtopics: 'Types of resources, Resource planning, Land resources, Soil types, Soil conservation',
            definition: 'Resources are materials available in nature that can be used to satisfy human needs. Resource development is the process of utilising resources sustainably while conserving them for future generations.',
            content: `<p>Everything from the air we breathe to the coal we burn is a resource. Managing Earth's limited resources sustainably is one of the greatest challenges of the 21st century.</p>
<h4>Classification of Resources</h4>
<ul>
<li><strong>By origin:</strong> Biotic (living — forests, fish) vs Abiotic (non-living — rocks, wind)</li>
<li><strong>By exhaustibility:</strong> Renewable (solar, wind, water) vs Non-renewable (coal, petroleum, minerals)</li>
<li><strong>By ownership:</strong> Individual, Community, National, International</li>
</ul>
<h4>Resource Planning in India</h4>
<p>Three-stage resource planning: (1) identification and inventory of resources (mapping); (2) evolving a planning structure with appropriate technology and skills; (3) matching resource development plans with overall national development plans.</p>
<h4>Land Resources and Soil</h4>
<p>India has 8 major soil types. Alluvial soil (most fertile, river plains — 40% of land) supports most of India's agriculture. Black soil (Deccan — good for cotton). Red and yellow soil (Odisha, Chhattisgarh). Laterite soil (hills — tea and coffee). Mountain soil.</p>
<h4>Soil Conservation</h4>
<p>Soil erosion problems: deforestation, overgrazing, mining, poor farming. Conservation: contour ploughing, terrace farming, shelter belts, afforestation, check dams.</p>`,
            qa: [
              { q: 'Distinguish between renewable and non-renewable resources with examples.', a: 'Renewable resources: can be replenished naturally — solar energy (sun will shine for billions of years), wind, water, forests (if managed sustainably), fish populations. Non-renewable resources: exist in finite quantities and cannot be replenished at human timescales — coal (formed over 300 million years), petroleum, natural gas, minerals. Overuse of non-renewables threatens future generations.' },
              { q: 'What is alluvial soil and why is it India\'s most important soil type?', a: 'Alluvial soil is deposited by rivers and is rich in nutrients (potash, phosphoric acid, lime). It covers 40% of India\'s land area — the entire Indo-Gangetic plain from Punjab to West Bengal, and coastal plains. It supports wheat, rice, sugarcane, jute, cotton, and vegetables. India\'s agricultural heartland and home to 60%+ of the population is on alluvial soil.' },
              { q: 'How can soil erosion be prevented?', a: 'Soil conservation methods: (1) Contour ploughing — ploughing along contour lines (not up-down slope) slows water runoff. (2) Terrace farming — cutting steps on hillsides creates flat land and prevents runoff. (3) Shelter belts — rows of trees planted around fields break wind velocity (important in Rajasthan). (4) Afforestation — tree roots hold soil. (5) Contour bunding and check dams — slow water flow and trap sediment.' },
            ]
          },
          {
            id: 'water-resources-10',
            title: 'Water Resources',
            subtopics: 'Fresh water distribution, Dams, Multipurpose projects, Rainwater harvesting, Water scarcity',
            definition: 'Water is one of Earth\'s most precious renewable resources. India receives monsoon rainfall unevenly — water resource management through dams, canals, and rainwater harvesting is crucial for meeting India\'s water needs.',
            content: `<p>India has 4% of the world's fresh water but 18% of the world's population. Seasonal and regional unevenness of rainfall makes water management critical.</p>
<h4>Water Scarcity in India</h4>
<p>Despite adequate average rainfall, India faces water stress: monsoon concentrated in 3-4 months; groundwater overextracted; rivers polluted.</p>
<h4>Multipurpose River Projects</h4>
<p>Dams serve multiple purposes: irrigation, drinking water, hydroelectric power, flood control, navigation. Major projects: Bhakra Nangal (Punjab), Hirakud (Odisha), Sardar Sarovar (Gujarat).</p>
<h4>Criticism of Big Dams</h4>
<p>Submerge forests and farmland, displace millions (mostly tribal), destroy aquatic ecosystems, silt up over decades.</p>
<h4>Rainwater Harvesting</h4>
<p>Traditional: johads, bawdis, tankas (Rajasthan), kuls (HP), surangam (Kerala). Tamil Nadu made rooftop harvesting compulsory — improved Chennai's groundwater significantly.</p>`,
            qa: [
              { q: 'Why are multipurpose river projects both praised and criticised?', a: 'Praised for: irrigation, hydroelectric power (clean energy), flood control, drinking water, employment. Criticised for: displacing millions of poor/tribal people, submerging forests and fertile farmland, disrupting river ecosystems, high cost overruns, and benefiting downstream populations while displacing those upstream.' },
              { q: 'What traditional water harvesting methods have been used in India?', a: 'India\'s traditions: Johads (Rajasthan — rainwater pits), Bawdis/stepwells (Gujarat, Rajasthan), Kuls (HP — channels from glacial melt), Surangam (Kerala — horizontal tunnels into hillsides), Tankas (Rajasthan — underground cisterns). These managed water sustainably for centuries before modern dams.' },
              { q: 'What is water scarcity and what causes it in India?', a: 'Water scarcity = insufficient water for population\'s needs. In India causes: (1) Uneven rainfall — some areas get excess during monsoon, others remain dry. (2) Groundwater overextraction — falling water tables in 30% of districts. (3) River pollution — industrial effluents make water unusable. (4) Poor infrastructure — water lost in leaky pipes. (5) Wasteful agriculture — flood irrigation wastes 70% of water.' },
            ]
          },
          {
            id: 'agriculture-10',
            title: 'Agriculture',
            subtopics: 'Types of farming, Cropping patterns, Major crops, Green Revolution, Agricultural reforms, Food security',
            definition: 'Agriculture is the cultivation of crops and rearing of animals for food, fibre, and other products. India is an agrarian economy — farming employs over 50% of the workforce though its GDP share has fallen.',
            content: `<p>India is one of the world's largest agricultural producers. Yet farmers face poverty, crop failure, debt, and climate change. Understanding Indian agriculture is understanding the lives of 60 crore people.</p>
<h4>Types of Farming</h4>
<ul>
<li><strong>Subsistence farming:</strong> For own consumption — primitive subsistence (shifting cultivation) and intensive subsistence.</li>
<li><strong>Commercial farming:</strong> For market sale — plantation agriculture (tea, coffee, rubber), commercial grain farming.</li>
</ul>
<h4>Cropping Seasons in India</h4>
<p><strong>Kharif:</strong> June–September (monsoon crops) — rice, maize, cotton, jute, sugarcane. <strong>Rabi:</strong> October–March (winter crops) — wheat, barley, mustard, peas. <strong>Zaid:</strong> March–June (summer crops) — watermelon, cucumber, fodder crops.</p>
<h4>Major Crops</h4>
<p>Rice (main food crop, eastern and southern India), Wheat (north India — Punjab, Haryana, UP), Millets (semi-arid regions), Pulses (main protein source — India is largest producer), Oilseeds, Tea (Assam), Coffee (Karnataka), Cotton (Gujarat, Maharashtra).</p>
<h4>Challenges</h4>
<p>Small farm size, dependence on monsoon, market price volatility, input costs, farmer debt, climate change.</p>`,
            qa: [
              { q: 'What is the Green Revolution and what were its limitations?', a: 'Green Revolution (1960s-70s): introduced HYV seeds, irrigation, chemical fertilisers. Dramatically increased wheat and rice production — India became food self-sufficient. Limitations: (1) benefited mainly large farmers in Punjab, Haryana, UP who could afford inputs; (2) widened rural inequality; (3) increased soil degradation (overuse of fertilisers); (4) depleted groundwater; (5) genetic uniformity made crops vulnerable to new pests.' },
              { q: 'What is shifting cultivation and why is it considered unsustainable?', a: 'Shifting cultivation (jhum/slash-and-burn): forest is cleared, land cultivated for 2-3 years, then abandoned to recover while farmers move to a new area. Unsustainable because: (1) increasing population means less recovery time — permanent forest loss; (2) deforestation causes soil erosion; (3) contributes to climate change. Practised by tribal communities in Northeast India, MP, Odisha.' },
              { q: 'Name and explain the three cropping seasons of India.', a: 'Kharif (June-September): grown in monsoon season. Crops: rice, maize, cotton, jute, sugarcane, soybean. Example states: West Bengal, Odisha, Kerala (rice). Rabi (October-March): grown in winter using soil moisture or irrigation. Crops: wheat, barley, mustard, peas. Punjab, Haryana, UP are major producers. Zaid (March-June): summer crops grown between kharif and rabi. Short duration. Crops: watermelon, cucumber, fodder.' },
            ]
          },
          {
            id: 'minerals-energy',
            title: 'Minerals and Energy Resources',
            subtopics: 'Types of minerals, Mining, Coal, Petroleum, Natural gas, Nuclear, Non-conventional energy',
            definition: 'Minerals are naturally occurring substances with a definite chemical composition. Energy resources (coal, petroleum, natural gas) are fossil fuels formed over millions of years. Both are essential for industrialisation but are non-renewable.',
            content: `<p>India's industrial growth depends on its mineral and energy wealth. Understanding where they are found, how they are extracted, and why we must conserve them is essential for every informed citizen.</p>
<h4>Types of Minerals</h4>
<p>Metallic: Iron ore, Bauxite (aluminium), Copper, Manganese, Gold. Non-metallic: Mica, Limestone, Gypsum. Fuel minerals: Coal, Petroleum, Natural gas.</p>
<h4>Major Mining Regions in India</h4>
<p>Iron ore: Jharkhand, Odisha, Chhattisgarh. Bauxite: Odisha, Jharkhand. Coal: Jharkhand, Odisha, West Bengal (Gondwana fields), Assam. Petroleum: Mumbai High (offshore), Assam, Rajasthan.</p>
<h4>Conventional Energy Sources</h4>
<p>Coal: India is world's 3rd largest producer. Used in thermal power stations (55% of India's electricity). Petroleum: refined into petrol, diesel, kerosene, LPG. India imports 80% of crude oil needs. Natural gas: cleaner burning, used for cooking (CNG) and power.</p>
<h4>Non-Conventional / Renewable Energy</h4>
<p>Solar (India has 300 sunny days/year — huge potential), Wind (Tamil Nadu, Rajasthan), Hydropower (Himalayan rivers), Tidal, Geothermal, Biogas. India is among the world's largest solar power producers.</p>`,
            qa: [
              { q: 'Why are minerals described as "gifts of nature" that must be used carefully?', a: 'Minerals took millions of years to form under specific geological conditions. They exist in finite quantities and once used, cannot be replenished in human lifetimes. Mining also causes environmental damage: land degradation, water table disruption, air and water pollution, displacement of communities. Careful use means: using minimum needed, recycling where possible (aluminium, steel), and developing renewable energy to reduce dependence on fuel minerals.' },
              { q: 'Why is India promoting solar energy?', a: 'India has exceptional solar resources — most of the country gets 250-300 sunny days per year. Solar advantages: (1) inexhaustible and free fuel, (2) no greenhouse gas emissions, (3) distributed generation (rooftop solar for villages), (4) costs have fallen 90% since 2010. India\'s target: 500 GW renewable energy by 2030. The International Solar Alliance — India\'s global initiative — coordinates solar development among tropical countries.' },
            ]
          },
          {
            id: 'lifelines-economy',
            title: 'Lifelines of National Economy',
            subtopics: 'Transport (roads, railways, airways, waterways), Communication, Trade, Tourism',
            definition: 'Transport and communication are the lifelines of national economy — they connect producers to consumers, raw materials to factories, and people to opportunities. A well-developed transport network is essential for economic growth.',
            content: `<p>Without roads, railways, and communication networks, a country cannot function. India has the world's largest road network and second-largest railway network — essential for a country its size.</p>
<h4>Roadways</h4>
<p>India has 63 lakh km of roads (world's largest network). National Highways (NH): connect state capitals and major cities. NH 44 (Kashmir to Kanyakumari, 3745 km) is the longest. Golden Quadrilateral: connects Delhi, Mumbai, Chennai, Kolkata by 4-6 lane highways.</p>
<h4>Railways</h4>
<p>Indian Railways: world's largest single state-owned railway network. 68,000+ km track length. Connects all major cities. Essential for transporting coal, food grains, steel. Konkan Railway (760 km along west coast) is an engineering marvel.</p>
<h4>Airways</h4>
<p>Air India (international), IndiGo, SpiceJet (domestic). Connects remote areas (Ladakh, Northeast). Fastest growing aviation market globally.</p>
<h4>Waterways</h4>
<p>Cheapest mode for heavy goods. India has 14,500 km of navigable inland waterways. Major: Ganga-Bhagirathi-Hooghly, Brahmaputra. Sea ports: Mumbai (largest), Kandla, Chennai, Visakhapatnam.</p>
<h4>Communication and Trade</h4>
<p>India has world's 2nd largest telecom network. Digital India aims to connect all villages. Exports: software, textiles, engineering goods. Imports: crude oil, gold, electronics.</p>`,
            qa: [
              { q: 'Why are roadways considered the most important mode of transport in India?', a: 'Roadways are most important because: (1) reach remote areas railways cannot (hills, forests, villages); (2) provide door-to-door service (no transshipment needed); (3) cheaper for short distances; (4) essential for last-mile connectivity — even train passengers need roads to reach stations; (5) carry perishables (vegetables, milk) that cannot wait for train schedules. India has 63 lakh km of roads vs 68,000 km of railway track.' },
              { q: 'How does tourism benefit India\'s economy?', a: 'Tourism is India\'s largest service industry and a major foreign exchange earner. Benefits: (1) creates employment directly (hotels, guides, transport) and indirectly (food, craft, entertainment); (2) earns foreign exchange — India earns ~$30 billion annually from tourism; (3) preserves cultural heritage (Taj Mahal, Ajanta, etc.); (4) develops infrastructure in remote areas. India has diverse tourism: heritage (Rajasthan), spiritual (Varanasi, Tirupati), beaches (Goa, Kerala), wildlife (Ranthambore), adventure (Himalayas).' },
            ]
          },
        ]
      },
      political_science: {
        id: 'political_science', topics: [
          {
            id: 'power-sharing',
            title: 'Power Sharing',
            subtopics: 'Why share power, Belgium vs Sri Lanka, Horizontal and vertical power sharing, Community governments',
            definition: 'Power sharing is the distribution of political power among different organs, levels, and groups in a society. It is the spirit of democracy — preventing the concentration of power in a single person or group.',
            content: `<p>Why should power be shared? History shows that concentrated power leads to abuse, instability, and often violence. The stories of Belgium and Sri Lanka illustrate both the success and failure of power sharing.</p>
<h4>Belgium vs Sri Lanka</h4>
<p><strong>Belgium:</strong> Dutch-speaking (59%), French-speaking (40%), German-speaking (1%). Wisely adopted power sharing — equal representation in central government, regional governments for each community. Result: peace and prosperity.</p>
<p><strong>Sri Lanka:</strong> Sinhalese (74%), Tamil (18%). Sinhalese-dominated government imposed Sinhala as only official language, favoured Sinhalese in jobs. Tamils felt alienated → civil war from 1983. Thousands killed. Costly lesson in why power sharing matters.</p>
<h4>Forms of Power Sharing</h4>
<ul>
<li><strong>Horizontal:</strong> Between legislature, executive, judiciary (checks and balances).</li>
<li><strong>Vertical:</strong> Between central, state, and local governments (federalism).</li>
<li><strong>Among social groups:</strong> Reserved constituencies for minorities, SC/ST.</li>
<li><strong>Among political parties:</strong> Coalition governments, opposition's role.</li>
</ul>`,
            qa: [
              { q: 'What lessons does the Belgium experience teach about power sharing?', a: 'Belgium: a small country with complex linguistic divisions (Dutch, French, German speakers). Instead of one group dominating, Belgium created: equal representation in central cabinet regardless of population ratio, separate state governments for Flemish (Dutch) and Wallonia (French), a special Brussels government with equal representation, and a community government for cultural matters. This accommodation prevented civil conflict and Belgium remained united and prosperous. Lesson: power sharing reduces conflict and builds stability.' },
              { q: 'What are the two main reasons for power sharing?', a: 'Prudential reason: power sharing is good because it reduces conflict and ensures political stability. Moral/democratic reason: power sharing is the very essence of democracy — it gives everyone a say in decisions that affect them. Concentrated power violates human dignity and leads to tyranny. Democracy without power sharing is meaningless.' },
            ]
          },
          {
            id: 'federalism',
            title: 'Federalism',
            subtopics: 'Features of federalism, Coming together vs holding together, India as federation, Linguistic reorganisation, Local government',
            definition: 'Federalism is a system of government where power is constitutionally divided between a national (central) government and regional (state) governments. Each level has its own sphere of authority.',
            content: `<p>India is a vast country with enormous diversity. Managing it as a centralised state would be impossible and undemocratic. Federalism allows states to govern themselves while being part of a unified nation.</p>
<h4>Key Features of Federalism</h4>
<ul>
<li>Two or more levels of government, each with its own powers</li>
<li>Different levels govern the same citizens</li>
<li>Constitutional guarantee of powers at each level</li>
<li>Courts as umpires to resolve disputes</li>
<li>Financial independence of each level</li>
</ul>
<h4>Coming Together vs Holding Together</h4>
<p><strong>Coming together:</strong> Independent states voluntarily unite (USA, Switzerland, Australia). States have more power.<br><strong>Holding together:</strong> Large country divides powers to maintain unity (India, Spain, Belgium). Central government tends to be stronger.</p>
<h4>Indian Federalism</h4>
<p>Three lists: Union List (defence, foreign affairs — 97 subjects), State List (police, agriculture, trade — 66 subjects), Concurrent List (both — 47 subjects). Residual powers with Centre.</p>`,
            qa: [
              { q: 'How was the linguistic reorganisation of states in 1956 a success of Indian federalism?', a: 'After independence, India inherited states based on British administrative convenience, not linguistic-cultural identity. People demanded states based on their language. The States Reorganisation Act (1956) created states largely on linguistic lines: Maharashtra (Marathi), Gujarat (Gujarati), Karnataka (Kannada), etc. This was a peaceful democratic solution — recognising diversity and giving people states where their language was official — unlike many countries that used force to suppress minorities.' },
              { q: 'What is the difference between a federal and unitary system?', a: 'Federal system: constitutional division of power between national and regional governments — each has its own sphere, neither can encroach the other. USA, India. States have guaranteed powers. Unitary system: one central government has all power — regional governments exist at central government\'s discretion and can be abolished. UK, France, Japan. India is predominantly federal but with stronger centre — "quasi-federal" (Granville Austin\'s term).' },
            ]
          },
          {
            id: 'political-parties-10',
            title: 'Political Parties',
            subtopics: 'Functions, Types (national, state), Party systems, Challenges, Electoral reforms',
            definition: 'Political parties are organised groups contesting elections to gain power and implement their policies. They are essential to democracy — connecting citizens to government and organising political competition.',
            content: `<p>Modern democracy cannot function without political parties. They aggregate diverse citizen interests, provide electoral choices, and make government accountable. India's vibrant multi-party democracy reflects its extraordinary diversity.</p>
<h4>Functions of Political Parties</h4>
<ul>
<li>Contest elections and form governments</li>
<li>Formulate policies — present vision for governance</li>
<li>Play opposition — hold government accountable (Question Hour, debates)</li>
<li>Shape public opinion through rallies and media</li>
<li>Represent different groups in society</li>
</ul>
<h4>National vs Regional Parties</h4>
<p>National parties: recognised in 4+ states — BJP, Congress, CPI(M), BSP, NCP. Regional parties: TMC (Bengal), DMK (Tamil Nadu), TRS (Telangana). India's diversity makes regional parties essential.</p>
<h4>Challenges</h4>
<p>Dynastic politics, money power in elections, criminalisation of politics, lack of internal democracy within parties.</p>`,
            qa: [
              { q: 'Why do we need political parties?', a: 'Political parties: (1) aggregate diverse citizen interests into coherent policies; (2) provide clear choices to voters at election time; (3) provide organised government (majority party) and organised opposition; (4) hold government accountable — without opposition parties, there would be no one to question the ruling party. Without parties, elections would be chaotic and stable government impossible.' },
              { q: 'What challenges do political parties face in India?', a: 'Major challenges: (1) Dynastic politics — party leadership passes within families regardless of merit. (2) Money power — wealthy candidates/parties dominate elections; parties spend crores on campaigns. (3) Criminalization — many MPs/MLAs have criminal cases. (4) Lack of internal democracy — high command takes all decisions; ordinary members have no voice. (5) Party defections — elected members switch parties for money or positions (limited by anti-defection law).' },
            ]
          },
          {
            id: 'outcomes-democracy',
            title: 'Outcomes of Democracy',
            subtopics: 'Economic outcomes, Social outcomes, Dignity and equality, Democratic vs non-democratic, Limits of democracy',
            definition: 'Does democracy actually deliver on its promises? Does it produce better governance, economic development, and social equality than non-democratic alternatives? Evaluating democracy\'s outcomes honestly is essential for citizens.',
            content: `<p>Democracy is celebrated worldwide, but does it actually work better than alternatives? Comparing democratic and non-democratic countries across economic, social, and political outcomes gives us evidence-based answers.</p>
<h4>Economic Outcomes</h4>
<p>Democracies do not always produce better economic growth than non-democracies (China grows fast but is not democratic). However, democracies rarely suffer famines (famines happen in dictatorships where people cannot freely demand food). Democracies tend to produce more equal distribution of economic growth.</p>
<h4>Social Outcomes</h4>
<p>Democracies: generally better at reducing social conflict (power sharing reduces friction), protecting minority rights, and allowing peaceful resolution of disputes. Sri Lanka (non-power-sharing) vs Belgium (power-sharing) illustrates this.</p>
<h4>Political Outcomes</h4>
<p>Democracies ensure: accountability (elections hold rulers answerable), peaceful transfer of power, rule of law, protection of fundamental rights, freedom of press.</p>
<h4>Dignity and Equality</h4>
<p>Democracy is the only form of government that formally recognises and promotes the equal dignity of all citizens. The mere act of voting makes every citizen equal for that moment.</p>`,
            qa: [
              { q: 'Is democracy the best form of government? Give balanced arguments.', a: 'Arguments FOR democracy: (1) accountable government — elections hold rulers answerable to people; (2) protects rights and freedoms; (3) peaceful power transfer; (4) adapts to changing needs; (5) gives equal dignity to all citizens. Limitations: (1) slow decision-making; (2) often captured by money and powerful interests; (3) focus on short-term (next election) rather than long-term; (4) can oppress minorities if not designed carefully. Churchill: "Democracy is the worst form of government, except for all the others."' },
              { q: 'Why do democracies rarely suffer from famines?', a: 'Amartya Sen (Nobel Prize winner) observed that no functioning democracy has ever suffered a major famine. In democracies: (1) a free press can report food shortages, pressuring government to respond; (2) opposition parties can campaign against incompetent food policy; (3) governments face elections — if people starve, they lose power. In dictatorships: media censorship, no opposition, no accountability. This explains China\'s Great Leap Forward famine (1959-61, ~15-45 million deaths) — the government knew but suppressed information.' },
            ]
          },
        ]
      },
      economics: {
        id: 'economics', topics: [
          {
            id: 'development',
            title: 'Development',
            subtopics: 'Development goals, Per capita income, HDI, Sustainability, Different groups, different goals',
            definition: 'Development means improvement in the quality of human life — not just income growth but also health, education, security, freedom, and dignity. Different people and groups have different development goals.',
            content: `<p>What does "development" mean? For a farmer, it might mean reliable irrigation. For a landless labourer, it might mean job security. For a woman, it might mean safety and education for her children. Development is not one-size-fits-all.</p>
<h4>Development Goals</h4>
<p>Development goals vary by person: farmers want good crop prices and irrigation; factory workers want fair wages and job security; students want good schools and employment opportunities; women want freedom from discrimination and safety.</p>
<h4>Per Capita Income</h4>
<p>World Bank classifies countries: Low income (<$1,135/year), Middle income, High income (>$13,845/year). India is lower-middle income. BUT per capita income misses inequality — averages hide how wealth is distributed.</p>
<h4>Human Development Index (HDI)</h4>
<p>UNDP's HDI combines: per capita income + life expectancy + education (years of schooling). A better measure than income alone. India ranks ~132 out of 191 (2022) — much lower than its economic rank, revealing gaps in health and education.</p>
<h4>Sustainable Development</h4>
<p>Development that meets present needs without compromising future generations' ability to meet theirs. Cannot use up all fossil fuels, forests, and groundwater — future generations also need them.</p>`,
            qa: [
              { q: 'Why is per capita income alone insufficient to measure development?', a: 'Per capita income (total income ÷ population) is an average. It hides: (1) inequality — if a country\'s income is all held by 10%, most people are still poor; (2) non-income dimensions — health, education, security, freedom are equally important; (3) environmental degradation — a country can boost income by mining all its resources, destroying future sustainability. The HDI and other measures address these limitations by including health and education alongside income.' },
              { q: 'What is the HDI and how does India perform?', a: 'Human Development Index (HDI): developed by Mahbub ul Haq and Amartya Sen, published by UNDP. Combines three dimensions: (1) Long and healthy life (life expectancy); (2) Access to education (mean years of schooling + expected years); (3) Decent standard of living (GNI per capita). India\'s HDI rank 2022: 132 out of 191. India performs much better on economic growth than on HDI — indicating inadequate conversion of economic growth into human welfare (health, education, equality).' },
            ]
          },
          {
            id: 'sectors-economy',
            title: 'Sectors of the Indian Economy',
            subtopics: 'Primary, Secondary, Tertiary sectors, GDP, Organised vs unorganised, Public vs private sector',
            definition: 'Economic activities are divided into three sectors: primary (natural resources), secondary (manufacturing), and tertiary (services). The share of each sector in GDP and employment tells us about the stage of economic development.',
            content: `<p>India's economy has shifted dramatically — from 70% agriculture at independence to services being the largest GDP contributor today. Yet agriculture still employs over 40% of the workforce. This disconnect is a key challenge.</p>
<h4>Three Sectors</h4>
<ul>
<li><strong>Primary sector:</strong> Directly uses natural resources — farming, fishing, mining, forestry. India: 14% GDP, 45% employment.</li>
<li><strong>Secondary sector:</strong> Manufacturing — converting raw materials to finished goods. 29% GDP, 25% employment.</li>
<li><strong>Tertiary (Service) sector:</strong> Services — banking, trade, transport, education, IT. 57% GDP, 30% employment.</li>
</ul>
<h4>GDP (Gross Domestic Product)</h4>
<p>Total value of all goods and services produced in a country in a year. GDP per capita = GDP ÷ population.</p>
<h4>Disguised Unemployment</h4>
<p>More people employed than actually needed — common in agriculture. If 5 people do a job 3 could do, 2 are "disguisedly unemployed". Removing them wouldn't reduce output.</p>
<h4>Organised vs Unorganised Sector</h4>
<p>Organised: registered enterprises with fixed working hours, job security, social security (PF, ESI). Unorganised: informal — domestic workers, street vendors, farm labourers. 93% of India's workforce is unorganised!</p>`,
            qa: [
              { q: 'Why does the tertiary sector have the largest share of India\'s GDP but not employment?', a: 'The service sector (IT, banking, finance, telecom, trade) produces high value per worker — a software engineer or banker creates far more GDP than a farmer. However, services require education and skills that many Indians lack, limiting service sector employment. Agriculture, despite low productivity, still employs 45% of the workforce as the sector of last resort for those without skills or education. This mismatch is a central challenge for India\'s development.' },
              { q: 'What is the difference between organised and unorganised sectors?', a: 'Organised sector: registered under government, follows labour laws (minimum wage, working hours, leave, provident fund, health insurance). Workers have job security. Examples: government offices, factories, banks, schools. Unorganised sector: no registration, no fixed hours, no job security, no social security. Workers are vulnerable. Examples: farm labourers, construction workers, domestic workers, street vendors. Shocking fact: 93% of India\'s workers are in the unorganised sector.' },
            ]
          },
          {
            id: 'money-credit',
            title: 'Money and Credit',
            subtopics: 'Money as medium of exchange, Banks, Credit, Terms of credit, Formal vs informal credit, SHGs',
            definition: 'Money is anything widely accepted as a medium of exchange, removing the need for barter. Credit enables investment and growth but its terms (interest, collateral) determine who benefits and who gets trapped in debt.',
            content: `<p>Money and credit are the lifeblood of a modern economy. But access to credit on fair terms is highly unequal — this inequality explains why the rich get richer and the poor remain trapped.</p>
<h4>Functions of Money</h4>
<ul>
<li>Medium of exchange (solves barter's double coincidence of wants problem)</li>
<li>Measure of value (price in money)</li>
<li>Store of value (save for future)</li>
<li>Standard of deferred payment (repay loans later)</li>
</ul>
<h4>Credit: Formal vs Informal</h4>
<p>Formal: banks, cooperative societies — lower interest (10-15%), regulated, requires collateral. Informal: moneylenders, landlords — high interest (40-100% in rural areas!), no regulation, exploitative. Poor rely more on informal credit (no collateral for banks).</p>
<h4>Self-Help Groups (SHGs)</h4>
<p>Groups of 15-20 rural poor (mostly women) who pool savings and lend to members at reasonable rates. Grameen Bank model (Bangladesh's Muhammad Yunus — Nobel Peace Prize 2006). Microfinance: provides credit without collateral to the poor.</p>`,
            qa: [
              { q: 'Why is money called a medium of exchange?', a: 'Barter requires "double coincidence of wants" — I must want what you have AND you must want what I have. Money solves this: sell goods for money, use money to buy anything. Money is universally accepted, so any trade can happen without finding a perfect barter match.' },
              { q: 'What is collateral and why can\'t poor people access formal credit?', a: 'Collateral is an asset (land, property, gold) a borrower pledges as loan security. If unable to repay, the lender takes the collateral. Poor people often have no property to pledge → banks won\'t lend → they must borrow from moneylenders at extremely high interest rates, often getting trapped in debt cycles.' },
              { q: 'What is the role of the Reserve Bank of India?', a: 'RBI is India\'s central bank: (1) Issues currency notes, (2) sets Cash Reserve Ratio (how much banks must keep), (3) sets repo rate (interest at which it lends to banks), (4) regulates all banks, (5) acts as lender of last resort. The RBI ensures the banking system is stable and credit reaches all sectors.' },
            ]
          },
          {
            id: 'globalisation-10',
            title: 'Globalisation and the Indian Economy',
            subtopics: 'What is globalisation, MNCs, Trade and investment, WTO, Impact on India, Liberalisation 1991',
            definition: 'Globalisation is the rapid integration of countries through trade, investment, technology, and movement of people. India\'s 1991 liberalisation opened it to globalisation — with mixed results.',
            content: `<p>Globalisation connects economies worldwide. The smartphone you use, the clothes you wear, the software in your apps — all are products of a globalised world. India's position in this system shapes millions of lives.</p>
<h4>What is Globalisation?</h4>
<p>Integration through: trade (imports/exports), FDI (MNCs setting up factories), technology transfer, migration.</p>
<h4>Role of MNCs</h4>
<p>MNCs produce where costs are lowest, sell globally. Create global supply chains. Bring investment and technology but repatriate profits.</p>
<h4>1991 Liberalisation (LPG Reforms)</h4>
<p>Liberalisation (removed licence raj), Privatisation (reduced government role), Globalisation (opened to foreign trade and investment). Led to rapid GDP growth but also increased inequality.</p>
<h4>Impact: Winners and Losers</h4>
<p>Winners: IT sector, large companies, urban middle class. Losers: small manufacturers (couldn't compete with cheap imports), some farmers.</p>`,
            qa: [
              { q: 'What were the 1991 LPG reforms?', a: 'In 1991, India faced a balance of payments crisis. Reforms under PM Narasimha Rao and FM Manmohan Singh: Liberalisation (removed industrial licensing — the "licence raj"), Privatisation (reduced government business ownership), Globalisation (opened to FDI, reduced import duties). India\'s GDP growth accelerated from ~3.5% (before) to 6-8% (after). But benefits were unequally distributed.' },
              { q: 'How has globalisation benefited India?', a: 'India has benefited from globalisation through: (1) IT boom — Bengaluru, Hyderabad became global software hubs ($200+ billion annual exports); (2) manufacturing growth — auto parts, pharmaceuticals, textiles; (3) foreign investment creating jobs; (4) technology transfer; (5) broader consumer choice and lower prices. India\'s middle class has grown enormously. However, many informal workers and small producers have been harmed.' },
            ]
          },
          {
            id: 'consumer-rights',
            title: 'Consumer Rights',
            subtopics: 'Six consumer rights, COPRA, Consumer courts, ISI and Agmark marks, Unfair trade practices',
            definition: 'A consumer is anyone who buys goods or services for personal use. Consumer rights protect buyers from unfair trade practices — exploitation, substandard goods, misleading advertisements, and fraud.',
            content: `<p>Every time you buy something, you are a consumer. Consumer protection laws ensure that buyers have rights and can seek justice when exploited. COPRA (1986) established India's consumer protection framework.</p>
<h4>Six Consumer Rights</h4>
<ul>
<li>Right to Safety — protection from hazardous products</li>
<li>Right to Information — true, complete product information</li>
<li>Right to Choose — variety at competitive prices</li>
<li>Right to be Heard — consumer interests in government</li>
<li>Right to Redressal — compensation for exploitation</li>
<li>Right to Education — awareness of rights</li>
</ul>
<h4>Consumer Protection Act (COPRA)</h4>
<p>Three-tier courts: District Forum (up to ₹20 lakh), State Commission (₹20 lakh–₹1 crore), National Commission (above ₹1 crore). Consumers can represent themselves; no lawyer needed.</p>
<h4>Quality Marks</h4>
<p>ISI (industrial products), Agmark (food — honey, ghee), Hallmark (gold), BIS standard.</p>`,
            qa: [
              { q: 'What is COPRA and why is it important for consumers?', a: 'COPRA (Consumer Protection Act, 1986, updated 2019): establishes consumer courts for complaints against defective products, deficient services, unfair trade practices, overcharging, hazardous goods. Important because: (1) consumers can file cases without a lawyer; (2) quick resolution (90-150 days); (3) compensation is mandatory; (4) creates fear among sellers of consequences for exploitation.' },
              { q: 'What action can a consumer take if cheated?', a: 'Steps: (1) Write to company/seller — document complaint. (2) Approach consumer forum — District Forum (claim up to ₹20 lakh), State Commission (₹20 lakh–₹1 crore), National Commission (above ₹1 crore). (3) File complaint online at consumerhelpline.gov.in. (4) Call National Consumer Helpline 1800-11-4000 (toll-free). Consumer can get: replacement/repair of product, refund, compensation for damages, removal of defect in service.' },
            ]
          },
        ]
      },
    }
  },

  // ── CLASS 11 ─────────────────────────────────────────────────
  'class-11': {
    id: 'class-11', label: 'Class 11', shortLabel: '11th',
    board: 'CBSE', emoji: '1️⃣1️⃣',
    description: 'Pre-board science — Sets, Classical mechanics, Atomic structure, Cell biology',
    subjects: {
      mathematics: {
        id: 'mathematics', topics: [
          {
            id: 'sets',
            title: 'Sets',
            subtopics: 'Types of sets, Operations, Venn diagrams, De Morgan\'s laws',
            definition: 'A set is a well-defined collection of distinct objects. "Well-defined" means we can unambiguously determine whether any object belongs to the collection or not.',
            content: `<p>Set theory, developed by Georg Cantor in the 1870s, is the foundation of modern mathematics. Almost every mathematical structure — functions, relations, probability — is built on sets.</p>
<h4>Notation and Representation</h4>
<p>Sets are denoted by capital letters. Members by lowercase. x ∈ A means "x belongs to A". Methods: Roster (list all), Set-builder {x : condition}.</p>
<h4>Types of Sets</h4>
<ul>
<li><strong>Empty set (∅):</strong> No elements. |∅| = 0.</li>
<li><strong>Finite set:</strong> Countable number of elements.</li>
<li><strong>Infinite set:</strong> Natural numbers, Real numbers.</li>
<li><strong>Universal set (U):</strong> Contains all sets under consideration.</li>
<li><strong>Subsets:</strong> A ⊆ B means every element of A is in B.</li>
</ul>
<h4>Set Operations</h4>
<div class="formula">Union: A ∪ B = {x : x ∈ A or x ∈ B}</div>
<div class="formula">Intersection: A ∩ B = {x : x ∈ A and x ∈ B}</div>
<div class="formula">Complement: A' = {x ∈ U : x ∉ A}</div>
<h4>De Morgan's Laws</h4>
<div class="formula">(A ∪ B)' = A' ∩ B'</div>
<div class="formula">(A ∩ B)' = A' ∪ B'</div>
<h4>Counting Formula</h4>
<div class="formula">n(A ∪ B) = n(A) + n(B) − n(A ∩ B)</div>`,
            qa: [
              { q: 'Write in set-builder form: A = {2, 4, 6, 8, 10}', a: 'A = {x : x is an even natural number, x ≤ 10}' },
              { q: 'If A = {1,2,3,4,5} and B = {3,4,5,6,7}, find A ∩ B and A ∪ B.', a: 'A ∩ B = {3,4,5}. A ∪ B = {1,2,3,4,5,6,7}.' },
              { q: 'In a class of 60: 30 like cricket, 25 like football, 10 like both. How many like neither?', a: 'n(C∪F) = 30+25−10 = 45. Neither = 60−45 = 15.' },
              { q: 'Prove De Morgan\'s law using A = {1,2,3}, B = {2,3,4}, U = {1,2,3,4,5}.', a: 'A∪B={1,2,3,4}. (A∪B)\'={5}. A\'={4,5}. B\'={1,5}. A\'∩B\'={5}. (A∪B)\'= A\'∩B\' ✓' },
            ]
          },
          {
            id: 'trigonometry',
            title: 'Trigonometric Functions',
            subtopics: 'Radian measure, Trig ratios, Allied angles, Identities, Graphs',
            definition: 'Trigonometry studies the relationships between angles and sides of triangles. The six trigonometric functions (sin, cos, tan, cosec, sec, cot) describe these relationships and extend to all real angles.',
            content: `<p>Trigonometry was developed to solve problems in astronomy and navigation. Today it is essential for physics (waves, oscillations), engineering (signal processing), and computer graphics.</p>
<h4>Radian Measure</h4>
<div class="formula">π radians = 180°, so 1 rad = 180°/π ≈ 57.3°</div>
<h4>Fundamental Identity</h4>
<div class="formula">sin²θ + cos²θ = 1</div>
<div class="formula">1 + tan²θ = sec²θ | 1 + cot²θ = cosec²θ</div>
<h4>Signs in Quadrants (ASTC rule)</h4>
<p>Q1: All positive. Q2: Sin positive. Q3: Tan positive. Q4: Cos positive.</p>
<h4>Key Angle Values</h4>
<p>sin30°=1/2, sin45°=1/√2, sin60°=√3/2, sin90°=1, sin0°=0.</p>
<h4>Sum and Difference Formulas</h4>
<div class="formula">sin(A+B) = sinA cosB + cosA sinB</div>
<div class="formula">cos(A+B) = cosA cosB − sinA sinB</div>`,
            qa: [
              { q: 'Convert 150° to radians.', a: '150° = 150 × π/180 = 5π/6 radians.' },
              { q: 'Find sin 75°.', a: 'sin(45°+30°) = sin45°cos30° + cos45°sin30° = (1/√2)(√3/2) + (1/√2)(1/2) = (√3+1)/(2√2) = (√6+√2)/4' },
              { q: 'Prove: (1 − sin²θ)/cos²θ = 1', a: '1 − sin²θ = cos²θ (identity). So cos²θ/cos²θ = 1. ✓' },
              { q: 'If sinθ = 3/5, find cosθ and tanθ (θ in Q1).', a: 'cos²θ = 1 − 9/25 = 16/25. cosθ = 4/5. tanθ = sinθ/cosθ = (3/5)/(4/5) = 3/4.' },
            ]
          },
          {
            id: 'relations-functions-11',
            title: 'Relations and Functions',
            subtopics: 'Cartesian product, Types of relations, Types of functions, Composition, Inverse functions',
            definition: 'A relation is a set of ordered pairs from two sets. A function is a special relation where each element in the domain maps to exactly one element in the codomain.',
            content: `<p>Functions are the language of mathematics and science — every equation, graph, and formula describes a functional relationship. This chapter gives formal foundation for all of calculus and algebra.</p>
<h4>Cartesian Product</h4>
<div class="formula">A × B = {(a,b) : a ∈ A, b ∈ B}. If |A|=m, |B|=n, then |A×B|=mn.</div>
<h4>Types of Relations</h4>
<ul>
<li><strong>Reflexive:</strong> (a,a) ∈ R for all a ∈ A.</li>
<li><strong>Symmetric:</strong> (a,b) ∈ R ⟹ (b,a) ∈ R.</li>
<li><strong>Transitive:</strong> (a,b) ∈ R and (b,c) ∈ R ⟹ (a,c) ∈ R.</li>
<li><strong>Equivalence:</strong> Reflexive + Symmetric + Transitive.</li>
</ul>
<h4>Types of Functions</h4>
<ul>
<li><strong>One-one (injective):</strong> Different inputs → different outputs.</li>
<li><strong>Onto (surjective):</strong> Every element of codomain is covered.</li>
<li><strong>Bijective:</strong> Both one-one and onto. Has an inverse.</li>
</ul>
<h4>Composition and Inverse</h4>
<div class="formula">(g∘f)(x) = g(f(x))</div>
<p>Inverse function f⁻¹ exists only if f is bijective. f(f⁻¹(x)) = x.</p>`,
            qa: [
              { q: 'If A = {1,2,3}, B = {4,5}, how many relations are possible from A to B?', a: '|A×B| = 6. Number of relations = 2^6 = 64.' },
              { q: 'Is f(x) = x² a one-one function from R to R?', a: 'No. f(2) = f(−2) = 4 but 2 ≠ −2. Different inputs give same output, so not one-one.' },
              { q: 'If f(x) = 2x+3 and g(x) = x², find (g∘f)(2).', a: 'f(2) = 7. g(f(2)) = g(7) = 49.' },
              { q: 'Find the inverse of f(x) = (x−3)/2.', a: 'Let y = (x−3)/2. Then 2y = x−3, so x = 2y+3. f⁻¹(x) = 2x+3.' },
            ]
          },
          {
            id: 'complex-numbers',
            title: 'Complex Numbers and Quadratic Equations',
            subtopics: 'Imaginary numbers, Algebra of complex numbers, Modulus, Argument, Polar form, Quadratic equations',
            definition: 'A complex number is a number of the form z = a + ib, where a and b are real numbers and i = √(−1). Complex numbers extend the real number system and allow solutions to all polynomial equations.',
            content: `<p>Complex numbers were invented to solve equations like x² + 1 = 0. They now underlie quantum mechanics, signal processing, fluid dynamics, and electrical engineering.</p>
<h4>Fundamental Concept</h4>
<div class="formula">i = √(−1), i² = −1, i³ = −i, i⁴ = 1</div>
<p>z = a + ib: a = real part (Re z), b = imaginary part (Im z).</p>
<h4>Algebra of Complex Numbers</h4>
<div class="formula">Addition: (a+ib) + (c+id) = (a+c) + i(b+d)</div>
<div class="formula">Multiplication: (a+ib)(c+id) = (ac−bd) + i(ad+bc)</div>
<div class="formula">Conjugate: z̄ = a − ib. Division: z₁/z₂ = z₁·z̄₂/|z₂|²</div>
<h4>Modulus and Argument</h4>
<div class="formula">|z| = √(a²+b²). arg(z) = tan⁻¹(b/a)</div>
<h4>Polar Form</h4>
<div class="formula">z = r(cosθ + i sinθ) = re^(iθ)</div>
<h4>Quadratic Equations with Complex Roots</h4>
<p>If discriminant D = b²−4ac < 0, roots are complex conjugates: x = (−b ± i√|D|) / 2a.</p>`,
            qa: [
              { q: 'Simplify i⁵⁷.', a: '57 = 4×14 + 1. So i⁵⁷ = (i⁴)¹⁴ × i = 1 × i = i.' },
              { q: 'Find the modulus and argument of z = 1 + i.', a: '|z| = √(1+1) = √2. arg(z) = tan⁻¹(1/1) = π/4.' },
              { q: 'Multiply (3+2i)(1−4i).', a: '3(1) + 3(−4i) + 2i(1) + 2i(−4i) = 3 − 12i + 2i − 8i² = 3 − 10i + 8 = 11 − 10i.' },
              { q: 'Solve: x² + x + 1 = 0.', a: 'D = 1−4 = −3. x = (−1 ± √(−3))/2 = (−1 ± i√3)/2. These are cube roots of unity (ω and ω̄).' },
            ]
          },
          {
            id: 'permutations-combinations',
            title: 'Permutations and Combinations',
            subtopics: 'Fundamental principle, Factorial, Permutations, Combinations, Applications',
            definition: 'Permutations count the number of ways to arrange objects in an order. Combinations count the number of ways to select objects without regard to order. Together they form the foundation of probability and discrete mathematics.',
            content: `<p>Counting problems appear everywhere — from arranging people in a line to forming teams, scheduling events, and calculating probabilities. P&C gives us systematic tools to count without listing every possibility.</p>
<h4>Fundamental Principle of Counting</h4>
<p>If one event can occur in m ways and a second in n ways, then both occur together in m×n ways (Multiplication Principle).</p>
<h4>Permutations</h4>
<div class="formula">P(n,r) = ⁿPᵣ = n!/(n−r)! — arrangements of r items from n distinct items</div>
<div class="formula">n! = n×(n−1)×(n−2)×...×1. 0! = 1.</div>
<p>Repetition allowed: nʳ ways to arrange r items from n.</p>
<h4>Combinations</h4>
<div class="formula">C(n,r) = ⁿCᵣ = n!/[r!(n−r)!] — selections of r from n (order doesn't matter)</div>
<div class="formula">ⁿCᵣ = ⁿC(n−r). ⁿC₀ = ⁿCₙ = 1.</div>
<h4>Key Identities</h4>
<div class="formula">ⁿCᵣ + ⁿCᵣ₋₁ = ⁿ⁺¹Cᵣ (Pascal's identity)</div>`,
            qa: [
              { q: 'In how many ways can 5 students sit in a row?', a: '5! = 5×4×3×2×1 = 120 ways.' },
              { q: 'How many 3-letter words can be formed from A,B,C,D,E without repetition?', a: 'P(5,3) = 5!/(5−3)! = 5×4×3 = 60 words.' },
              { q: 'A team of 4 is chosen from 6 boys and 4 girls with exactly 2 girls. In how many ways?', a: 'Choose 2 from 4 girls: ⁴C₂=6. Choose 2 from 6 boys: ⁶C₂=15. Total = 6×15 = 90 ways.' },
              { q: 'Find ⁸C₃.', a: '8!/(3!×5!) = (8×7×6)/(3×2×1) = 336/6 = 56.' },
            ]
          },
          {
            id: 'binomial-theorem',
            title: 'Binomial Theorem',
            subtopics: 'Binomial expansion, General term, Middle term, Properties of binomial coefficients',
            definition: 'The Binomial Theorem provides a formula for expanding (a+b)ⁿ for any positive integer n. It expresses the expansion as a sum of terms involving binomial coefficients.',
            content: `<p>The Binomial Theorem lets us expand (a+b)ⁿ without multiplying n times. It is fundamental in algebra, probability, and is used in approximations in physics and engineering.</p>
<h4>Binomial Theorem</h4>
<div class="formula">(a+b)ⁿ = Σᵣ₌₀ⁿ ⁿCᵣ aⁿ⁻ʳ bʳ</div>
<p>= ⁿC₀aⁿ + ⁿC₁aⁿ⁻¹b + ⁿC₂aⁿ⁻²b² + ... + ⁿCₙbⁿ</p>
<h4>General Term</h4>
<div class="formula">Tᵣ₊₁ = ⁿCᵣ aⁿ⁻ʳ bʳ (r+1 th term)</div>
<h4>Middle Term</h4>
<p>If n is even: middle term = T(n/2 + 1). If n is odd: two middle terms T((n+1)/2) and T((n+3)/2).</p>
<h4>Important Results</h4>
<div class="formula">(1+x)ⁿ: sum of coefficients = 2ⁿ (put x=1). Sum of odd = sum of even = 2ⁿ⁻¹.</div>
<div class="formula">Pascal's Triangle: ⁿCᵣ + ⁿCᵣ₊₁ = ⁿ⁺¹Cᵣ₊₁</div>`,
            qa: [
              { q: 'Expand (x+y)⁴.', a: 'ⁿC₀x⁴ + ⁿC₁x³y + ⁿC₂x²y² + ⁿC₃xy³ + ⁿC₄y⁴ = x⁴+4x³y+6x²y²+4xy³+y⁴.' },
              { q: 'Find the 4th term in the expansion of (2x−3)⁶.', a: 'T₄ = T(3+1) = ⁶C₃(2x)³(−3)³ = 20×8x³×(−27) = −4320x³.' },
              { q: 'Find the middle term of (x+1/x)¹⁰.', a: 'n=10 (even). Middle term = T₆ = ¹⁰C₅ x⁵ (1/x)⁵ = 252×1 = 252.' },
              { q: 'Find the sum of coefficients of (1+x)¹⁵.', a: 'Put x=1: (1+1)¹⁵ = 2¹⁵ = 32768.' },
            ]
          },
          {
            id: 'sequences-series',
            title: 'Sequences and Series',
            subtopics: 'AP, GP, HP, Arithmetic mean, Geometric mean, Sum formulas, Special series',
            definition: 'A sequence is an ordered list of numbers following a pattern. A series is the sum of terms of a sequence. Arithmetic and Geometric progressions are the two most important types in CBSE and competitive exams.',
            content: `<p>Sequences and series appear in banking (compound interest), biology (population growth), physics (radioactive decay), and computer algorithms. Mastering AP and GP is essential for both boards and JEE.</p>
<h4>Arithmetic Progression (AP)</h4>
<p>Each term differs from the previous by a constant (common difference d).</p>
<div class="formula">aₙ = a + (n−1)d | Sₙ = n/2[2a + (n−1)d] = n/2[first + last]</div>
<h4>Geometric Progression (GP)</h4>
<p>Each term is multiplied by a constant ratio r.</p>
<div class="formula">aₙ = arⁿ⁻¹ | Sₙ = a(rⁿ−1)/(r−1) [r≠1] | S∞ = a/(1−r) [|r|<1]</div>
<h4>Important Means</h4>
<div class="formula">AM = (a+b)/2 | GM = √(ab) | HM = 2ab/(a+b)</div>
<div class="formula">AM ≥ GM ≥ HM (for positive numbers)</div>
<h4>Special Series</h4>
<div class="formula">Σn = n(n+1)/2 | Σn² = n(n+1)(2n+1)/6 | Σn³ = [n(n+1)/2]²</div>`,
            qa: [
              { q: 'Find the 15th term of AP: 2, 5, 8, 11...', a: 'a=2, d=3. a₁₅ = 2 + 14×3 = 2 + 42 = 44.' },
              { q: 'Sum of first 20 terms of AP: 3, 7, 11...', a: 'a=3, d=4. S₂₀ = 20/2[2×3 + 19×4] = 10[6+76] = 10×82 = 820.' },
              { q: 'Find the sum to infinity of GP: 1, 1/2, 1/4, 1/8...', a: 'a=1, r=1/2. S∞ = 1/(1−1/2) = 1/(1/2) = 2.' },
              { q: 'Find the sum of first 10 natural numbers squared.', a: 'Σn² = n(n+1)(2n+1)/6 = 10×11×21/6 = 2310/6 = 385.' },
            ]
          },
          {
            id: 'straight-lines',
            title: 'Straight Lines',
            subtopics: 'Slope, Forms of line equations, Angle between lines, Distance formulas, Family of lines',
            definition: 'Coordinate geometry uses algebraic methods to study geometric shapes. The straight line is the simplest curve — understanding its equations in various forms and properties is fundamental to all higher geometry.',
            content: `<p>Straight lines are the building blocks of coordinate geometry. Every linear relationship in science is a straight line on a graph. This chapter gives the algebraic tools to work with lines completely.</p>
<h4>Slope of a Line</h4>
<div class="formula">m = (y₂−y₁)/(x₂−x₁) = tan θ</div>
<p>Parallel lines: m₁ = m₂. Perpendicular lines: m₁ × m₂ = −1.</p>
<h4>Forms of Line Equations</h4>
<ul>
<li><strong>Slope-intercept:</strong> y = mx + c</li>
<li><strong>Point-slope:</strong> y − y₁ = m(x − x₁)</li>
<li><strong>Two-point:</strong> (y−y₁)/(y₂−y₁) = (x−x₁)/(x₂−x₁)</li>
<li><strong>Intercept form:</strong> x/a + y/b = 1</li>
<li><strong>Normal form:</strong> x cosα + y sinα = p</li>
</ul>
<h4>Distance Formulas</h4>
<div class="formula">Distance from point (x₁,y₁) to line ax+by+c=0: |ax₁+by₁+c|/√(a²+b²)</div>
<div class="formula">Distance between parallel lines ax+by+c₁=0 and ax+by+c₂=0: |c₁−c₂|/√(a²+b²)</div>`,
            qa: [
              { q: 'Find the slope of line joining (3,4) and (7,8).', a: 'm = (8−4)/(7−3) = 4/4 = 1.' },
              { q: 'Write equation of line with slope 2 passing through (1,3).', a: 'y − 3 = 2(x − 1) → y = 2x + 1.' },
              { q: 'Find distance from point (2,3) to line 3x−4y+5=0.', a: 'd = |3(2)−4(3)+5|/√(9+16) = |6−12+5|/5 = |−1|/5 = 1/5.' },
              { q: 'Are lines 2x+3y=5 and 4x+6y=7 parallel, perpendicular, or coincident?', a: '4x+6y=7 → 2x+3y=3.5. Same slope ratio (2:3) but different constants → parallel lines.' },
            ]
          },
          {
            id: 'conic-sections',
            title: 'Conic Sections',
            subtopics: 'Circle, Parabola, Ellipse, Hyperbola — standard equations, focus, directrix, eccentricity',
            definition: 'Conic sections are curves obtained by intersecting a double cone with a plane. Depending on the angle of intersection, we get a circle, ellipse, parabola, or hyperbola.',
            content: `<p>Conics appear in nature and engineering constantly — planetary orbits are ellipses, satellite dishes are parabolas, projectile paths are parabolas, and hyperbolic shapes appear in cooling towers.</p>
<h4>Circle</h4>
<div class="formula">Standard: x² + y² = r². General: x²+y²+2gx+2fy+c=0</div>
<p>Centre: (−g,−f). Radius: √(g²+f²−c)</p>
<h4>Parabola</h4>
<div class="formula">y² = 4ax (opens right): Focus (a,0), Directrix x=−a, Vertex (0,0)</div>
<h4>Ellipse</h4>
<div class="formula">x²/a² + y²/b² = 1 (a>b): Foci (±c,0) where c²=a²−b², Eccentricity e=c/a<1</div>
<h4>Hyperbola</h4>
<div class="formula">x²/a² − y²/b² = 1: Foci (±c,0) where c²=a²+b², Eccentricity e=c/a>1</div>
<h4>Eccentricity Summary</h4>
<p>Circle: e=0, Ellipse: 0<e<1, Parabola: e=1, Hyperbola: e>1.</p>`,
            qa: [
              { q: 'Find the focus and directrix of y² = 12x.', a: 'Comparing with y²=4ax: 4a=12, a=3. Focus: (3,0). Directrix: x=−3.' },
              { q: 'Find the equation of circle with centre (2,3) and radius 5.', a: '(x−2)² + (y−3)² = 25. Expanding: x²+y²−4x−6y−12=0.' },
              { q: 'For ellipse x²/25 + y²/9 = 1, find eccentricity and foci.', a: 'a²=25, b²=9. c²=a²−b²=16. c=4. e=c/a=4/5. Foci: (±4,0).' },
              { q: 'What are the asymptotes of hyperbola x²/16 − y²/9 = 1?', a: 'Asymptotes: y = ±(b/a)x = ±(3/4)x.' },
            ]
          },
          {
            id: 'statistics-11',
            title: 'Statistics and Probability',
            subtopics: 'Mean, Variance, Standard deviation, Random experiments, Events, Probability axioms, Addition rule',
            definition: 'Statistics involves collecting, organising, analysing, and interpreting data. Probability is the mathematical measure of likelihood of an event occurring, ranging from 0 (impossible) to 1 (certain).',
            content: `<p>Statistics and probability underlie every scientific experiment, business decision, and risk analysis. From quality control to medical trials to weather forecasting — these concepts are indispensable.</p>
<h4>Measures of Dispersion</h4>
<div class="formula">Variance σ² = Σ(xᵢ−x̄)²/n | Standard Deviation σ = √(Variance)</div>
<div class="formula">For ungrouped: σ² = (Σxᵢ²/n) − (x̄)²</div>
<p>Coefficient of variation (CV) = (σ/x̄)×100% — compares variability of different datasets.</p>
<h4>Probability Basics</h4>
<div class="formula">P(A) = n(A)/n(S), where S is the sample space. 0 ≤ P(A) ≤ 1.</div>
<h4>Complementary Event</h4>
<div class="formula">P(A') = 1 − P(A)</div>
<h4>Addition Rule</h4>
<div class="formula">P(A∪B) = P(A) + P(B) − P(A∩B)</div>
<p>Mutually exclusive events: P(A∪B) = P(A) + P(B).</p>`,
            qa: [
              { q: 'Find variance of: 2, 4, 4, 4, 5, 5, 7, 9.', a: 'Mean = 40/8 = 5. Deviations: −3,−1,−1,−1,0,0,2,4. Squared: 9,1,1,1,0,0,4,16=32. Variance = 32/8 = 4. SD = 2.' },
              { q: 'A die is thrown. Find P(prime number).', a: 'Sample space = {1,2,3,4,5,6}. Primes = {2,3,5}. P = 3/6 = 1/2.' },
              { q: 'Two cards drawn from a pack. Find probability both are kings.', a: 'P = ⁴C₂/⁵²C₂ = 6/1326 = 1/221.' },
              { q: 'If P(A)=0.5, P(B)=0.3, P(A∩B)=0.15, find P(A∪B).', a: 'P(A∪B) = 0.5+0.3−0.15 = 0.65.' },
            ]
          },
        ]
      },
      physics: {
        id: 'physics', topics: [
          {
            id: 'units-measurements',
            title: 'Units and Measurements',
            subtopics: 'SI units, Dimensional analysis, Significant figures, Errors',
            definition: 'Measurement is the comparison of an unknown quantity with a known standard (unit). Accurate measurement using proper units and understanding errors is fundamental to all of science.',
            content: `<p>Physics is an exact science — every quantity must be measured precisely and expressed in defined units. This chapter lays the groundwork for all quantitative work in physics.</p>
<h4>SI (International System) Base Units</h4>
<p>7 fundamental units: metre (length), kilogram (mass), second (time), ampere (current), kelvin (temperature), mole (amount), candela (luminous intensity).</p>
<h4>Dimensional Analysis</h4>
<p>Every physical quantity has dimensions — expressed in terms of M, L, T (mass, length, time). Used to check equations, derive formulas, convert units.</p>
<div class="formula">Velocity: [L T⁻¹] | Force: [M L T⁻²] | Energy: [M L² T⁻²]</div>
<h4>Significant Figures</h4>
<p>Digits that carry meaning contributing to precision. Rules: all non-zero digits are significant; leading zeros are not; trailing zeros after decimal point are significant.</p>
<h4>Errors in Measurement</h4>
<ul>
<li><strong>Absolute error:</strong> Difference between measured and true value.</li>
<li><strong>Relative error:</strong> Absolute error / True value.</li>
<li><strong>Percentage error:</strong> Relative error × 100</li>
</ul>`,
            qa: [
              { q: 'What are the dimensions of pressure?', a: 'Pressure = Force/Area = [MLT⁻²]/[L²] = [ML⁻¹T⁻²]' },
              { q: 'Is the equation v = u + at dimensionally correct?', a: '[v] = LT⁻¹, [u] = LT⁻¹, [at] = LT⁻²×T = LT⁻¹. All terms have the same dimensions → dimensionally correct.' },
              { q: 'How many significant figures in 0.004050?', a: '4 significant figures: 4, 0, 5, 0. Leading zeros (0.00) are not significant. The zero between 4 and 5, and trailing zero after 5 are significant.' },
              { q: 'A length is measured as (2.34 ± 0.02) cm. Find percentage error.', a: 'Percentage error = (0.02/2.34) × 100 = 0.855 ≈ 0.85%' },
            ]
          },
          {
            id: 'laws-of-motion-11',
            title: 'Laws of Motion (Advanced)',
            subtopics: 'Free body diagrams, Friction, Circular motion, Pseudo forces',
            definition: 'Building on Newton\'s three laws, Class 11 explores their application in complex situations involving friction, constraints, inclined planes, connected systems, and circular motion.',
            content: `<p>Newton's laws are simple to state but powerful in application. This chapter develops the skill of applying them to complex real-world situations using the free body diagram technique.</p>
<h4>Free Body Diagram (FBD)</h4>
<p>An FBD isolates a single object and shows all forces acting ON it (not by it). Essential for applying Newton's second law correctly.</p>
<h4>Common Forces</h4>
<ul>
<li><strong>Weight (W = mg):</strong> Downward, gravitational.</li>
<li><strong>Normal force (N):</strong> Perpendicular to surface, away from surface.</li>
<li><strong>Friction (f):</strong> Parallel to surface, opposing motion. f = μN.</li>
<li><strong>Tension (T):</strong> Along string, away from object.</li>
</ul>
<h4>Types of Friction</h4>
<p>Static friction ≤ μₛN (acts before motion starts). Kinetic friction = μₖN (acts during motion). μₛ > μₖ always.</p>
<h4>Circular Motion</h4>
<p>For circular motion, a centripetal (centre-seeking) force is needed:</p>
<div class="formula">F_c = mv²/r = mω²r</div>`,
            qa: [
              { q: 'A 10 kg block on a surface has μ = 0.3. Find friction force and acceleration when pulled with 40 N.', a: 'Normal N = mg = 100N. Friction = μN = 0.3×100 = 30N. Net force = 40−30 = 10N. a = F/m = 1 m/s².' },
              { q: 'Why does a car need to lean into a turn on a banked road?', a: 'Banking provides a component of normal force toward the centre, supplying centripetal force. This reduces dependence on friction and allows safe turns at higher speeds.' },
              { q: 'A 2 kg block rests on a 3 kg block. If F=20N is applied to lower block (μ=0.4 between blocks, frictionless floor), find acceleration of each.', a: 'For 3 kg block: F − f₁₂ = 3a where f₁₂=μ×2×10=8N. 20−8=3a → a_lower=4m/s². For 2 kg: f₁₂=8=2×a_upper → a_upper=4m/s². Same acceleration as they move together (check: 8 ≤ μ×20=8 → just at limit).' },
            ]
          },
          {
            id: 'motion-straight-line',
            title: 'Motion in a Straight Line',
            subtopics: 'Distance vs displacement, Speed vs velocity, Acceleration, Equations of motion, Graphs',
            definition: 'Kinematics is the study of motion without considering its causes. Motion in a straight line is the simplest case, described by displacement, velocity, and acceleration along a single direction.',
            content: `<p>Before studying forces (dynamics), we must precisely describe how objects move (kinematics). Every description of motion in physics starts with the concepts in this chapter.</p>
<h4>Key Quantities</h4>
<ul>
<li><strong>Distance:</strong> Total path length (scalar). <strong>Displacement:</strong> Shortest path with direction (vector).</li>
<li><strong>Speed:</strong> Distance/time (scalar). <strong>Velocity:</strong> Displacement/time (vector).</li>
<li><strong>Acceleration:</strong> Rate of change of velocity. a = Δv/Δt.</li>
</ul>
<h4>Equations of Motion (uniform acceleration)</h4>
<div class="formula">v = u + at</div>
<div class="formula">s = ut + ½at²</div>
<div class="formula">v² = u² + 2as</div>
<div class="formula">s_nth = u + a(2n−1)/2 (displacement in nth second)</div>
<h4>Free Fall</h4>
<p>All objects fall with the same acceleration g = 9.8 m/s² (≈10 m/s²) regardless of mass (ignoring air resistance). Take downward as positive.</p>`,
            qa: [
              { q: 'A car starts from rest and accelerates at 4 m/s². Find velocity and distance after 5 s.', a: 'v = u+at = 0+4×5 = 20 m/s. s = ut+½at² = 0+½×4×25 = 50 m.' },
              { q: 'A ball is thrown upward with 20 m/s. Find maximum height.', a: 'At max height, v=0. v²=u²−2gs → 0=400−2×10×h → h=20 m.' },
              { q: 'A stone is dropped from 80 m height. How long to reach ground?', a: 's=½gt² → 80=½×10×t² → t²=16 → t=4 s.' },
              { q: 'What does the slope of a velocity-time graph represent?', a: 'Slope of v-t graph = acceleration. Area under v-t graph = displacement.' },
            ]
          },
          {
            id: 'work-energy-power',
            title: 'Work, Energy and Power',
            subtopics: 'Work done, Kinetic energy, Potential energy, Work-energy theorem, Conservation of energy, Power, Collisions',
            definition: 'Work is done when a force displaces an object in the direction of the force. Energy is the capacity to do work. The work-energy theorem links mechanics to energy, enabling elegant solutions to complex motion problems.',
            content: `<p>Energy is the most fundamental concept in physics. Conservation of energy is an absolute law — it is never violated. This chapter provides tools to solve motion problems without needing equations of motion.</p>
<h4>Work</h4>
<div class="formula">W = F·d·cosθ (θ = angle between F and displacement)</div>
<p>Work is zero if: F=0, d=0, or θ=90° (force perpendicular to motion). Unit: Joule (J).</p>
<h4>Energy Forms</h4>
<div class="formula">Kinetic Energy: KE = ½mv²</div>
<div class="formula">Gravitational PE: U = mgh | Spring PE: U = ½kx²</div>
<h4>Work-Energy Theorem</h4>
<div class="formula">W_net = ΔKE = ½mv² − ½mu²</div>
<h4>Conservation of Mechanical Energy</h4>
<div class="formula">KE + PE = constant (no friction/non-conservative forces)</div>
<h4>Power</h4>
<div class="formula">P = W/t = Fv [Watts]. 1 hp = 746 W.</div>
<h4>Collisions</h4>
<p>Elastic: KE conserved. Inelastic: KE not conserved. Perfectly inelastic: objects stick together.</p>`,
            qa: [
              { q: 'A force of 10N acts at 60° to displacement of 5m. Find work done.', a: 'W = Fd cosθ = 10×5×cos60° = 50×0.5 = 25 J.' },
              { q: 'A 2 kg ball is released from 5 m height. Find its speed just before hitting the ground.', a: 'Conservation of energy: mgh = ½mv². v = √(2gh) = √(2×10×5) = 10 m/s.' },
              { q: 'A car engine exerts 3000 N at 20 m/s. Find power output.', a: 'P = Fv = 3000×20 = 60000 W = 60 kW.' },
              { q: 'What is the difference between elastic and inelastic collisions?', a: 'Elastic: both momentum AND kinetic energy conserved. Inelastic: only momentum is conserved; some KE converts to heat/sound/deformation. All real collisions are inelastic to some degree.' },
            ]
          },
          {
            id: 'gravitation-11',
            title: 'Gravitation',
            subtopics: 'Newton\'s law of gravitation, Gravitational field, Potential energy, Orbital velocity, Escape velocity, Satellites, Kepler\'s laws',
            definition: 'Gravitation is the universal force of attraction between all objects with mass. Newton unified the apple\'s fall and the Moon\'s orbit under a single inverse-square law that governs all massive objects.',
            content: `<p>Gravity governs the cosmos — from the apple to the orbit of galaxies. Newton's gravitational law and Kepler's laws of planetary motion together form the foundation of celestial mechanics.</p>
<h4>Newton's Law of Gravitation</h4>
<div class="formula">F = GMm/r² (G = 6.67×10⁻¹¹ N·m²/kg²)</div>
<h4>Acceleration Due to Gravity</h4>
<div class="formula">g = GM/R² (at surface). At height h: g_h = g(1 − 2h/R) for h<<R</div>
<h4>Gravitational Potential Energy</h4>
<div class="formula">U = −GMm/r (negative because gravity is attractive)</div>
<h4>Orbital Velocity</h4>
<div class="formula">v₀ = √(GM/r) = √(gR²/r). For near-Earth orbit: v₀ ≈ √(gR) ≈ 7.9 km/s</div>
<h4>Escape Velocity</h4>
<div class="formula">vₑ = √(2GM/R) = √(2gR) ≈ 11.2 km/s (Earth)</div>
<h4>Kepler's Laws</h4>
<ul>
<li>1st: Planets orbit in ellipses with Sun at one focus.</li>
<li>2nd: Line joining planet-Sun sweeps equal areas in equal times.</li>
<li>3rd: T² ∝ r³ (square of period ∝ cube of mean orbital radius).</li>
</ul>`,
            qa: [
              { q: 'Why does the Moon not fall to Earth?', a: 'The Moon is continuously falling toward Earth (centripetal acceleration = g at Moon\'s orbit), but it also has a horizontal velocity. The combination makes it orbit. It is in free fall while also moving sideways fast enough to always "miss" Earth.' },
              { q: 'Find the escape velocity from Earth. (R=6400km, g=9.8 m/s²)', a: 'vₑ = √(2gR) = √(2×9.8×6.4×10⁶) = √(1.25×10⁸) ≈ 11.2 km/s.' },
              { q: 'If a satellite orbits at height R above Earth\'s surface (R = Earth\'s radius), find its orbital period. (T_surface orbit = 84 min)', a: 'r = 2R. T² ∝ r³. T₂/T₁ = (2R/R)^(3/2) = 2√2. T₂ = 84×2√2 ≈ 238 min.' },
              { q: 'State Kepler\'s third law and use it to compare Earth (T=1 yr, r=1 AU) with Mars (r=1.52 AU).', a: 'T²∝r³. T_Mars² = T_Earth² × (1.52)³ = 1×3.51 = 3.51. T_Mars = 1.87 years.' },
            ]
          },
          {
            id: 'thermodynamics-11',
            title: 'Thermodynamics',
            subtopics: 'Zeroth, First, Second laws, Internal energy, Heat, Work, Isothermal, Adiabatic, Carnot cycle, Entropy',
            definition: 'Thermodynamics is the branch of physics that deals with heat, temperature, and their relation to work and energy. It governs all energy conversions — from engines to refrigerators to living organisms.',
            content: `<p>Thermodynamics tells us what processes are possible in nature. The laws of thermodynamics are among the most fundamental in physics — they cannot be violated by any machine or process.</p>
<h4>Zeroth Law</h4>
<p>If A is in thermal equilibrium with B, and B with C, then A is in equilibrium with C. This defines temperature.</p>
<h4>First Law (Conservation of Energy)</h4>
<div class="formula">ΔU = Q − W (ΔU: change in internal energy, Q: heat added to system, W: work done by system)</div>
<h4>Thermodynamic Processes</h4>
<ul>
<li><strong>Isothermal (T=const):</strong> ΔU=0, Q=W. PV=constant.</li>
<li><strong>Adiabatic (Q=0):</strong> ΔU=−W. PVᵞ=constant (γ=Cp/Cv).</li>
<li><strong>Isochoric (V=const):</strong> W=0, ΔU=Q.</li>
<li><strong>Isobaric (P=const):</strong> W=PΔV.</li>
</ul>
<h4>Second Law</h4>
<p>Heat naturally flows from hot to cold. No engine can be 100% efficient. Entropy of an isolated system always increases.</p>
<h4>Carnot Efficiency</h4>
<div class="formula">η = 1 − T_cold/T_hot (maximum possible efficiency of any heat engine)</div>`,
            qa: [
              { q: '200 J of heat is supplied to a gas and the gas does 80 J of work. Find change in internal energy.', a: 'ΔU = Q − W = 200 − 80 = 120 J.' },
              { q: 'A Carnot engine works between 400K and 300K. Find efficiency.', a: 'η = 1 − 300/400 = 1 − 0.75 = 0.25 = 25%.' },
              { q: 'Why is isothermal expansion slower than adiabatic expansion?', a: 'In isothermal expansion, heat is continuously absorbed from surroundings to maintain constant temperature, requiring slow process. In adiabatic expansion, no heat exchange occurs; the gas cools rapidly as it expands — this can happen quickly.' },
              { q: 'Can a refrigerator cool its surroundings if left with its door open?', a: 'No. A refrigerator transfers heat from inside to the coils at the back. With the door open, heat removed from inside is deposited into the room. The motor work adds extra heat. Net effect: the room gets warmer.' },
            ]
          },
          {
            id: 'waves-11',
            title: 'Waves',
            subtopics: 'Types of waves, Wave equation, Speed of sound, Superposition, Standing waves, Beats, Doppler effect',
            definition: 'A wave is a disturbance that transfers energy through a medium without transferring matter. Mechanical waves need a medium; electromagnetic waves do not. Sound is a longitudinal mechanical wave.',
            content: `<p>Waves pervade the natural world — sound, light, water ripples, seismic waves. Understanding wave properties and behaviours is essential for acoustics, optics, and quantum mechanics.</p>
<h4>Types of Waves</h4>
<p><strong>Transverse:</strong> Particles vibrate perpendicular to wave direction (light, string waves). <strong>Longitudinal:</strong> Particles vibrate parallel to wave direction (sound, compression waves).</p>
<h4>Wave Equation</h4>
<div class="formula">y = A sin(kx ± ωt), where k=2π/λ, ω=2πf</div>
<div class="formula">Wave speed v = fλ = ω/k</div>
<h4>Speed of Sound</h4>
<div class="formula">v = √(B/ρ) [B=bulk modulus, ρ=density]. In air at 0°C: 331 m/s. Increases with temperature.</div>
<h4>Superposition and Standing Waves</h4>
<p>Standing waves form when two identical waves travel in opposite directions. Nodes (zero amplitude) and antinodes (maximum amplitude) are fixed.</p>
<div class="formula">String: fₙ = nv/2L (n=1,2,3...). Pipe open both ends: fₙ = nv/2L.</div>
<h4>Beats</h4>
<div class="formula">Beat frequency = |f₁ − f₂|</div>
<h4>Doppler Effect</h4>
<div class="formula">f' = f₀(v ± v₀)/(v ∓ vₛ) [+: approaching, −: receding]</div>`,
            qa: [
              { q: 'A string of length 1m vibrates with fundamental frequency 250 Hz. Find wave speed.', a: 'f₁ = v/2L → v = 2Lf₁ = 2×1×250 = 500 m/s.' },
              { q: 'Two tuning forks give 4 beats/s. One has 512 Hz. What are the possible frequencies of the other?', a: '512+4 = 516 Hz or 512−4 = 508 Hz.' },
              { q: 'A train moving at 72 km/h sounds a 500 Hz whistle. Speed of sound = 340 m/s. What frequency is heard by a stationary observer in front?', a: 'v_train = 72/3.6 = 20 m/s. f_observed = 500×340/(340−20) = 500×340/320 = 531.25 Hz.' },
              { q: 'What is the difference between a node and an antinode in a standing wave?', a: 'Node: point of zero amplitude — particles never move. Antinode: point of maximum amplitude — particles oscillate with maximum displacement. Nodes and antinodes are separated by λ/4.' },
            ]
          },
        ]
      },
      chemistry: {
        id: 'chemistry', topics: [
          {
            id: 'atomic-structure',
            title: 'Structure of Atom',
            subtopics: 'Bohr model, Quantum numbers, Orbitals, Electronic configuration, Aufbau principle',
            definition: 'The atom is the smallest unit of an element that retains the chemical properties of that element. Modern atomic theory describes electrons existing in probabilistic orbitals around a nucleus of protons and neutrons.',
            content: `<p>The atom was once considered indivisible (a = not, tomos = cut in Greek). Today we know atoms contain a dense nucleus of protons and neutrons, surrounded by electrons in quantum orbitals.</p>
<h4>Sub-atomic Particles</h4>
<p>Proton: mass ≈ 1 amu, charge +1, in nucleus. Neutron: mass ≈ 1 amu, charge 0, in nucleus. Electron: mass ≈ 1/1836 amu, charge −1, outside nucleus.</p>
<h4>Bohr's Model</h4>
<p>Electrons orbit nucleus in fixed energy levels. Energy is quantised: E_n = −13.6/n² eV. Electrons emit/absorb photons when jumping between levels.</p>
<h4>Quantum Numbers</h4>
<ul>
<li><strong>Principal (n):</strong> Energy level. n = 1, 2, 3...</li>
<li><strong>Azimuthal (l):</strong> Subshell shape. l = 0(s), 1(p), 2(d), 3(f)</li>
<li><strong>Magnetic (m_l):</strong> Orbital orientation. m_l = −l to +l</li>
<li><strong>Spin (m_s):</strong> Electron spin. +½ or −½</li>
</ul>
<h4>Electronic Configuration (Aufbau Principle)</h4>
<p>Fill orbitals in order of increasing energy: 1s, 2s, 2p, 3s, 3p, 4s, 3d, 4p...</p>
<p>Hund's rule: Maximum spin multiplicity — fill orbitals singly before pairing.</p>`,
            qa: [
              { q: 'Write the electronic configuration of Iron (Fe, Z=26).', a: '1s² 2s² 2p⁶ 3s² 3p⁶ 3d⁶ 4s² or [Ar] 3d⁶ 4s²' },
              { q: 'What is the maximum number of electrons in a d-subshell?', a: 'd-subshell has 5 orbitals (m_l = −2,−1,0,+1,+2). Each holds 2 electrons. Max = 10 electrons.' },
              { q: 'How many nodes does a 3p orbital have?', a: 'Total nodes = n−1 = 2. Angular (nodal planes) = l = 1. Radial nodes = n−l−1 = 3−1−1 = 1.' },
              { q: 'Explain the dual nature of electrons.', a: 'de Broglie proposed that particles like electrons have wave nature. λ = h/mv. This wave-particle duality means electrons have both particle properties (definite mass, charge) and wave properties (diffraction, interference).' },
            ]
          },
          {
            id: 'chemical-bonding',
            title: 'Chemical Bonding and Molecular Structure',
            subtopics: 'Ionic bond, Covalent bond, Lewis structures, VSEPR theory, Hybridisation, Molecular orbital theory, Hydrogen bonding',
            definition: 'Chemical bonding is the force that holds atoms together in molecules and compounds. Understanding bonding explains why substances have their specific shapes, properties, and reactivities.',
            content: `<p>Chemistry would not exist without chemical bonds. Bonding determines whether a substance is a gas, liquid, or solid; its melting point; whether it dissolves in water; and how it reacts.</p>
<h4>Ionic Bond</h4>
<p>Formed by complete transfer of electrons from metal to non-metal. Results in strong electrostatic attraction between oppositely charged ions. High melting point, soluble in water, conducts electricity when dissolved.</p>
<h4>Covalent Bond</h4>
<p>Formed by sharing of electron pairs. Can be single (1 pair), double (2 pairs), or triple (3 pairs). Lewis structures show all bonding and lone pairs.</p>
<h4>VSEPR Theory</h4>
<p>Valence Shell Electron Pair Repulsion — electron pairs (bonding and lone) arrange to minimise repulsion.</p>
<p>Examples: BeCl₂ (linear, 180°), BF₃ (trigonal planar, 120°), CH₄ (tetrahedral, 109.5°), NH₃ (pyramidal, 107°), H₂O (bent, 104.5°).</p>
<h4>Hybridisation</h4>
<p>sp: linear (BeCl₂). sp²: trigonal planar (BF₃, C₂H₄). sp³: tetrahedral (CH₄, NH₃, H₂O). sp³d: trigonal bipyramidal (PCl₅). sp³d²: octahedral (SF₆).</p>
<h4>Hydrogen Bond</h4>
<p>Weak dipole-dipole interaction when H is bonded to highly electronegative F, O, or N. Responsible for water's high boiling point, DNA double helix, protein structure.</p>`,
            qa: [
              { q: 'Explain why water has a bent shape and not linear.', a: 'Oxygen in H₂O has 2 bond pairs and 2 lone pairs (sp³ hybridisation). VSEPR: lone pair-lone pair repulsion > lone pair-bond pair > bond pair-bond pair. The 2 lone pairs compress the H-O-H angle to 104.5°, giving a bent shape.' },
              { q: 'What is the hybridisation of carbon in CO₂?', a: 'CO₂: O=C=O. Carbon forms 2 double bonds, no lone pairs. Linear arrangement → sp hybridisation.' },
              { q: 'Why does NaCl have a high melting point?', a: 'NaCl is ionic — strong electrostatic forces between Na⁺ and Cl⁻ ions in a 3D lattice. A large amount of energy is needed to overcome these forces. Melting point = 801°C.' },
              { q: 'Why is HF a weak acid despite F being the most electronegative element?', a: 'HF forms strong hydrogen bonds (H...F). These make HF less willing to donate H⁺. Also, the H-F bond energy is very high (568 kJ/mol), making ionisation difficult. Result: HF is weak acid while HCl, HBr, HI are strong acids.' },
            ]
          },
          {
            id: 'thermodynamics-chem-11',
            title: 'Thermodynamics (Chemistry)',
            subtopics: 'System and surroundings, Enthalpy, Hess\'s law, Entropy, Gibbs free energy, Spontaneity',
            definition: 'Chemical thermodynamics determines whether reactions occur spontaneously and how much energy they release or absorb. It connects heat, work, entropy, and equilibrium.',
            content: `<p>Why do some reactions happen spontaneously while others don't? Why does iron rust but gold doesn't tarnish? Chemical thermodynamics answers these questions with mathematical precision.</p>
<h4>Basic Concepts</h4>
<p>System: the part being studied. Surroundings: everything else. Universe = system + surroundings.</p>
<p>Endothermic: ΔH > 0 (heat absorbed). Exothermic: ΔH < 0 (heat released).</p>
<h4>Enthalpy (H)</h4>
<div class="formula">ΔH = H_products − H_reactants</div>
<p>Standard enthalpy of formation (ΔH°f): enthalpy change when 1 mole of compound forms from elements in standard states.</p>
<h4>Hess's Law</h4>
<p>Total enthalpy change is independent of the path taken. ΔH_rxn = ΣΔH°f(products) − ΣΔH°f(reactants).</p>
<h4>Entropy (S)</h4>
<p>Measure of disorder/randomness. Spontaneous processes tend to increase entropy. Gases > Liquids > Solids.</p>
<h4>Gibbs Free Energy</h4>
<div class="formula">ΔG = ΔH − TΔS. Spontaneous if ΔG < 0.</div>`,
            qa: [
              { q: 'Classify each as endothermic or exothermic: (a) burning fuel (b) photosynthesis (c) neutralisation.', a: '(a) Burning fuel: exothermic (ΔH<0) — releases heat. (b) Photosynthesis: endothermic (ΔH>0) — absorbs light energy. (c) Neutralisation: exothermic (ΔH<0) — releases heat.' },
              { q: 'Will a reaction be spontaneous if ΔH = +50 kJ and ΔS = +200 J/K at 500 K?', a: 'ΔG = ΔH − TΔS = 50000 − 500×200 = 50000 − 100000 = −50000 J = −50 kJ. ΔG < 0 → spontaneous.' },
              { q: 'What does Hess\'s law state? Give a practical use.', a: 'Hess\'s law: total enthalpy change is path-independent, depends only on initial and final states. Practical use: calculate ΔH for reactions that cannot be measured directly (e.g., formation of CO from C + ½O₂).' },
              { q: 'Predict entropy change for: N₂(g) + 3H₂(g) → 2NH₃(g)', a: '4 moles of gas → 2 moles. Entropy decreases (ΔS < 0) because disorder decreases when more gas molecules combine into fewer.' },
            ]
          },
          {
            id: 'equilibrium-11',
            title: 'Equilibrium',
            subtopics: 'Dynamic equilibrium, Kc, Kp, Le Chatelier\'s principle, Ionic equilibrium, pH, Buffer solutions',
            definition: 'Chemical equilibrium is the state where forward and reverse reactions occur at the same rate, so concentrations of reactants and products remain constant. Equilibrium constants quantify this balance.',
            content: `<p>Most chemical reactions do not go to completion — they reach a state of equilibrium. Understanding and controlling equilibrium is crucial in industrial chemistry (Haber process, Contact process) and biochemistry.</p>
<h4>Law of Mass Action</h4>
<div class="formula">For aA + bB ⇌ cC + dD: Kc = [C]ᶜ[D]ᵈ / [A]ᵃ[B]ᵇ</div>
<p>Kc > 1: products favoured. Kc < 1: reactants favoured. Kp uses partial pressures: Kp = Kc(RT)^Δn.</p>
<h4>Le Chatelier's Principle</h4>
<p>If a system at equilibrium is disturbed, it shifts to minimise the disturbance.</p>
<ul>
<li>Increase concentration of reactant → shifts forward.</li>
<li>Increase pressure → shifts to side with fewer moles of gas.</li>
<li>Increase temperature → shifts in endothermic direction.</li>
</ul>
<h4>Ionic Equilibrium and pH</h4>
<div class="formula">pH = −log[H⁺]. Kw = [H⁺][OH⁻] = 10⁻¹⁴ at 25°C</div>
<div class="formula">Strong acid: pH = −log Ca. Weak acid: [H⁺] = √(Ka × Ca)</div>`,
            qa: [
              { q: 'Write Kc expression for: N₂ + 3H₂ ⇌ 2NH₃', a: 'Kc = [NH₃]² / ([N₂][H₂]³)' },
              { q: 'For Haber process (N₂+3H₂⇌2NH₃, ΔH=−92 kJ), how does increasing temperature affect yield of NH₃?', a: 'The reaction is exothermic. Increasing temperature shifts equilibrium to the endothermic (reverse) direction → decreases NH₃ yield. Industrial process uses 400–500°C as a compromise for reasonable rate with acceptable yield.' },
              { q: 'Find pH of 0.01 M HCl solution.', a: 'HCl is a strong acid, fully dissociates. [H⁺] = 0.01 = 10⁻². pH = −log(10⁻²) = 2.' },
              { q: 'Find pH of 0.1 M acetic acid (Ka = 1.8×10⁻⁵).', a: '[H⁺] = √(Ka × C) = √(1.8×10⁻⁵ × 0.1) = √(1.8×10⁻⁶) = 1.34×10⁻³. pH = −log(1.34×10⁻³) = 2.87.' },
            ]
          },
          {
            id: 'hydrocarbons-11',
            title: 'Hydrocarbons',
            subtopics: 'Alkanes, Alkenes, Alkynes, Benzene, Combustion, Addition reactions, Aromaticity',
            definition: 'Hydrocarbons are organic compounds containing only carbon and hydrogen. They are the simplest organic molecules and the starting point for understanding all organic chemistry.',
            content: `<p>Hydrocarbons are the basis of petroleum, natural gas, and plastics. They are the fuel that powers the modern world and the raw material for the chemical industry.</p>
<h4>Classification</h4>
<ul>
<li><strong>Alkanes (CₙH₂ₙ₊₂):</strong> Single bonds only. Saturated. Unreactive (except combustion and free radical halogenation). Methane, Ethane, Propane...</li>
<li><strong>Alkenes (CₙH₂ₙ):</strong> One C=C double bond. Undergoes electrophilic addition. Ethene, Propene...</li>
<li><strong>Alkynes (CₙH₂ₙ₋₂):</strong> One C≡C triple bond. More reactive than alkenes. Ethyne (acetylene)...</li>
</ul>
<h4>Reactions of Alkenes</h4>
<p>Addition reactions (HX, H₂O, X₂, H₂) — π bond breaks, new σ bonds form. Markovnikov's rule: in HX addition, H adds to carbon with more H atoms.</p>
<h4>Benzene and Aromaticity</h4>
<p>Benzene (C₆H₆) is cyclic, planar, conjugated (alternating single-double bonds), with 4n+2 π electrons (Hückel rule for n=1: 6 electrons). Undergoes electrophilic aromatic substitution, not addition.</p>`,
            qa: [
              { q: 'Give the IUPAC name and general formula for: CH₃-CH=CH₂', a: 'Propene (prop-1-ene). General formula for alkenes: CₙH₂ₙ. This is C₃H₆.' },
              { q: 'Apply Markovnikov\'s rule to addition of HBr to propene.', a: 'CH₃-CH=CH₂ + HBr → CH₃-CHBr-CH₃ (2-bromopropane). H adds to CH₂ (terminal, more H), Br adds to CH (secondary carbon). Major product: 2-bromopropane.' },
              { q: 'Why does benzene undergo substitution rather than addition despite having double bonds?', a: 'Benzene has aromatic stability — 6 π electrons delocalized over the ring give extra stability (resonance energy ≈150 kJ/mol). Addition would destroy aromaticity, losing this stability. Substitution preserves the aromatic ring.' },
              { q: 'Write the combustion reaction of propane and state what type of reaction this is.', a: 'C₃H₈ + 5O₂ → 3CO₂ + 4H₂O. This is a combustion (oxidation) reaction, highly exothermic. Propane is used in LPG cooking gas.' },
            ]
          },
        ]
      },
      biology: {
        id: 'biology', topics: [
          {
            id: 'living-world',
            title: 'The Living World and Biological Classification',
            subtopics: 'Characteristics of living organisms, Binomial nomenclature, Five kingdom classification, Viruses and Lichens',
            definition: 'Biology is the science of life. The living world includes all organisms that display the fundamental properties of life: metabolism, growth, reproduction, response to stimuli, and ability to evolve.',
            content: `<p>There are an estimated 8.7 million species on Earth. Taxonomy — the science of classification — organises this immense diversity into a logical, hierarchical system that helps us understand evolutionary relationships.</p>
<h4>Characteristics of Living Organisms</h4>
<ul>
<li>Growth (internal — unlike non-living things)</li>
<li>Metabolism (chemical reactions for life)</li>
<li>Reproduction (essential for species survival)</li>
<li>Cellular organisation (basic unit = cell)</li>
<li>Response to stimuli (irritability)</li>
<li>Homeostasis (maintaining internal balance)</li>
</ul>
<h4>Binomial Nomenclature (Linnaeus)</h4>
<p>Two-part scientific name: Genus + species. Written in italics. E.g., Homo sapiens (human), Panthera leo (lion).</p>
<h4>Five Kingdom Classification (Whittaker)</h4>
<p>Monera (prokaryotes), Protista (unicellular eukaryotes), Fungi, Plantae, Animalia.</p>
<p>Viruses are acellular — considered non-living outside host cells. They have nucleic acid (DNA or RNA) + protein coat (capsid). Cause diseases: TMV (plants), influenza, HIV, COVID-19.</p>`,
            qa: [
              { q: 'What is the two-word scientific name system called? Who developed it?', a: 'Binomial nomenclature, developed by Carolus Linnaeus. Genus name is capitalised, species is lowercase. Both are italicised (e.g., Mangifera indica for mango).' },
              { q: 'How are viruses different from living organisms?', a: 'Viruses lack cells, cytoplasm, ribosomes, and cannot metabolise or reproduce independently — they need a host cell. Outside a host, they are inert crystalline structures. They are considered non-living (or on the boundary of life).' },
              { q: 'List the kingdoms in Whittaker\'s five-kingdom classification.', a: '1. Monera (bacteria, cyanobacteria — prokaryotes). 2. Protista (unicellular eukaryotes — Amoeba, Paramecium). 3. Fungi (decomposers — Mucor, Agaricus). 4. Plantae (multicellular, photosynthetic). 5. Animalia (multicellular, heterotrophic).' },
              { q: 'What are lichens and why are they called pioneer organisms?', a: 'Lichens are symbiotic associations between fungi (provide shelter and minerals) and algae (provide food via photosynthesis). They colonise bare rocks first, secreting acids that break rock down to form soil, enabling other organisms to grow. Hence "pioneer organisms".' },
            ]
          },
          {
            id: 'cell-biology-11',
            title: 'Cell: The Unit of Life',
            subtopics: 'Prokaryotic vs eukaryotic cells, Cell organelles, Cell wall, Plasma membrane, Nucleus, Mitochondria, Chloroplast, Ribosomes',
            definition: 'The cell is the basic structural and functional unit of life. All living organisms are made of one or more cells. Cell theory states: all organisms are made of cells; the cell is the basic unit of life; all cells arise from pre-existing cells.',
            content: `<p>Understanding cells is understanding life at its most fundamental level. All biological processes — digestion, respiration, reproduction, immunity — occur within or between cells.</p>
<h4>Prokaryotic vs Eukaryotic Cells</h4>
<p><strong>Prokaryotic:</strong> No membrane-bound nucleus. No membrane organelles. Circular DNA. Smaller (1–10 μm). E.g., bacteria.</p>
<p><strong>Eukaryotic:</strong> True nucleus with nuclear envelope. Membrane-bound organelles. Linear DNA with histones. Larger (10–100 μm). E.g., plants, animals, fungi.</p>
<h4>Key Organelles and Functions</h4>
<ul>
<li><strong>Nucleus:</strong> Control centre — contains DNA, directs all cell activities.</li>
<li><strong>Mitochondria:</strong> "Powerhouse" — ATP production via cellular respiration. Has own DNA and ribosomes.</li>
<li><strong>Chloroplast:</strong> Photosynthesis in plant cells. Has own DNA and ribosomes.</li>
<li><strong>Ribosomes:</strong> Protein synthesis (80S in eukaryotes, 70S in prokaryotes).</li>
<li><strong>ER:</strong> Rough ER (ribosomes, protein synthesis/modification). Smooth ER (lipid synthesis, detoxification).</li>
<li><strong>Golgi apparatus:</strong> Packaging, modification, and export of proteins.</li>
<li><strong>Lysosomes:</strong> Contain digestive enzymes. Intracellular digestion ("suicide bags").</li>
</ul>`,
            qa: [
              { q: 'Why are mitochondria and chloroplasts said to have originated as endosymbionts?', a: 'Both organelles have their own circular DNA, double membranes, and 70S ribosomes (like prokaryotes). Endosymbiotic theory proposes ancient eukaryote engulfed a bacterium (→mitochondria) and a photosynthetic cyanobacterium (→chloroplast). They evolved a mutually beneficial relationship.' },
              { q: 'What is the difference between 70S and 80S ribosomes?', a: '70S ribosomes: found in prokaryotes and organelles (mitochondria, chloroplasts). 80S ribosomes: found in eukaryotic cytoplasm. S = Svedberg units (sedimentation coefficient). Difference is exploited by antibiotics (streptomycin targets 70S, not 80S).' },
              { q: 'Why are lysosomes called "suicidal bags"?', a: 'Lysosomes contain hydrolytic (digestive) enzymes that can break down all types of biological macromolecules. If the lysosome membrane ruptures, these enzymes digest the cell itself — causing autolysis (self-destruction). Hence "suicidal bags".' },
              { q: 'What is the fluid mosaic model of the plasma membrane?', a: 'Singer and Nicolson (1972): The membrane is a fluid bilayer of phospholipids with proteins embedded in it. "Fluid" because phospholipids and proteins can move laterally. "Mosaic" because proteins are scattered like tiles. Explains selective permeability, transport, receptor functions.' },
            ]
          },
          {
            id: 'biomolecules-11',
            title: 'Biomolecules',
            subtopics: 'Carbohydrates, Proteins, Lipids, Nucleic acids, Enzymes — structure and function',
            definition: 'Biomolecules are the chemical compounds found in living organisms. The four major classes — carbohydrates, proteins, lipids, and nucleic acids — form the structural and functional basis of all life.',
            content: `<p>Every function of a living organism — energy storage, structural support, information storage, catalysis — is performed by one or more of these four classes of biomolecules.</p>
<h4>Carbohydrates</h4>
<p>General formula: Cₙ(H₂O)ₙ. Monosaccharides (glucose, fructose), Disaccharides (sucrose, lactose), Polysaccharides (starch, glycogen, cellulose).</p>
<p>Functions: primary energy source (glucose), energy storage (glycogen in animals, starch in plants), structural support (cellulose in plants).</p>
<h4>Proteins</h4>
<p>Made of amino acids (20 types) linked by peptide bonds. 4 levels of structure: primary (sequence), secondary (α-helix, β-sheet), tertiary (3D folding), quaternary (multiple subunits).</p>
<p>Functions: enzymes, structural (collagen, keratin), hormones (insulin), antibodies, transport (haemoglobin).</p>
<h4>Lipids</h4>
<p>Fats, oils, phospholipids, steroids. Made of fatty acids + glycerol. Hydrophobic. Functions: energy storage, cell membrane components, hormones (steroids), insulation.</p>
<h4>Nucleic Acids</h4>
<p>DNA and RNA. Made of nucleotides (sugar + phosphate + nitrogenous base). DNA stores genetic information. RNA carries it to ribosomes.</p>
<h4>Enzymes</h4>
<p>Biological catalysts — proteins (mostly) that speed reactions by lowering activation energy. Lock-and-key model / Induced fit model. Inhibited by competitive and non-competitive inhibitors.</p>`,
            qa: [
              { q: 'What is the difference between starch and cellulose? Both are glucose polymers.', a: 'Starch: α-glucose with 1,4 and 1,6 glycosidic bonds. Coiled structure → digestible by humans. Cellulose: β-glucose with 1,4 glycosidic bonds. Straight chains form microfibrils → not digestible by humans (no β-glucosidase enzyme). Cellulose is dietary fibre.' },
              { q: 'What is the primary structure of a protein and why is it important?', a: 'Primary structure: the specific sequence of amino acids in the polypeptide chain. This sequence determines everything else — secondary, tertiary, and quaternary structure, and therefore the protein\'s function. A change in even one amino acid (as in sickle cell anemia — Val for Glu in haemoglobin) can alter function drastically.' },
              { q: 'What are enzymes and how do they work?', a: 'Enzymes are biological catalysts (usually proteins) that speed up reactions without being consumed. They lower activation energy by binding substrate at the active site, forming an enzyme-substrate complex. The lock-and-key model says the active site has a complementary shape to the substrate. Induced fit model says the active site changes shape slightly when substrate binds.' },
              { q: 'Why do lipids not mix with water?', a: 'Lipids are non-polar — their long hydrocarbon chains have no partial charges. Water is polar. Polar and non-polar molecules cannot form hydrogen bonds with each other. Instead, water molecules form hydrogen bonds among themselves, excluding the lipid (hydrophobic effect).' },
            ]
          },
          {
            id: 'plant-physiology-11',
            title: 'Plant Physiology: Respiration and Growth',
            subtopics: 'Glycolysis, Krebs cycle, Oxidative phosphorylation, Fermentation, Plant growth regulators',
            definition: 'Cellular respiration is the process by which organisms break down glucose to release energy in the form of ATP. Plant growth is regulated by hormones (auxins, gibberellins, cytokinins, ABA, ethylene).',
            content: `<p>Respiration is the reverse of photosynthesis in terms of net chemistry. While photosynthesis stores energy in glucose, respiration releases that stored energy as ATP for cellular work.</p>
<h4>Glycolysis (Cytoplasm)</h4>
<p>Glucose (6C) → 2 Pyruvate (3C). Net yield: 2 ATP + 2 NADH. Occurs in both aerobic and anaerobic conditions.</p>
<h4>Aerobic Respiration</h4>
<p><strong>Pyruvate decarboxylation:</strong> Pyruvate → Acetyl CoA + CO₂ + NADH (in mitochondrial matrix)</p>
<p><strong>Krebs Cycle (TCA cycle):</strong> Acetyl CoA (2C) + Oxaloacetate (4C) → Citrate (6C) → ... Released: 2CO₂, 3NADH, 1FADH₂, 1GTP per turn (runs twice per glucose)</p>
<p><strong>Oxidative Phosphorylation:</strong> NADH and FADH₂ donate electrons to ETC. ATP produced via chemiosmosis. Total ≈ 36–38 ATP per glucose.</p>
<h4>Fermentation</h4>
<p>Anaerobic. Pyruvate → Ethanol+CO₂ (yeast) or Lactic acid (animals, bacteria). Only 2 ATP produced.</p>
<h4>Plant Growth Regulators</h4>
<ul>
<li><strong>Auxins (IAA):</strong> Cell elongation, apical dominance, fruit development.</li>
<li><strong>Gibberellins:</strong> Stem elongation, seed germination, flowering.</li>
<li><strong>Cytokinins:</strong> Cell division, delay senescence.</li>
<li><strong>ABA (Abscisic acid):</strong> Stress responses, stomatal closure, dormancy.</li>
<li><strong>Ethylene:</strong> Fruit ripening, leaf and fruit abscission.</li>
</ul>`,
            qa: [
              { q: 'Where does glycolysis occur and what are its products?', a: 'Glycolysis occurs in the cytoplasm (cytosol). Products from 1 glucose: 2 pyruvate + 2 ATP (net) + 2 NADH. It is the first step of cellular respiration and does not require oxygen.' },
              { q: 'How many ATP molecules are produced from complete aerobic respiration of 1 glucose?', a: 'Glycolysis: 2 ATP. Krebs cycle: 2 GTP (= 2 ATP). Electron transport chain: ~32–34 ATP from NADH and FADH₂. Total: ~36–38 ATP. Modern estimates suggest 30–32 ATP due to proton leakage.' },
              { q: 'What is the role of auxin in phototropism?', a: 'In phototropism, light causes unequal distribution of auxin — auxin moves to the shaded side. Higher auxin concentration on the shaded side causes more cell elongation on that side, so the stem bends toward the light.' },
              { q: 'Why does ethylene cause fruit ripening?', a: 'Ethylene is a gaseous plant hormone that triggers: increased respiration (climacteric rise), breakdown of chlorophyll (green → coloured), conversion of starch to sugars (sweet taste), cell wall softening (soft texture). Used commercially to ripen bananas and tomatoes.' },
            ]
          },
        ]
      },
    }
  },

  // ── CLASS 12 ─────────────────────────────────────────────────
  'class-12': {
    id: 'class-12', label: 'Class 12', shortLabel: '12th',
    board: 'CBSE', emoji: '🎓',
    description: 'Board exams + competitive prep — Calculus, Electrostatics, Organic chemistry, Genetics',
    subjects: {
      mathematics: {
        id: 'mathematics', topics: [
          {
            id: 'relations-functions-12',
            title: 'Relations and Functions (Class 12)',
            subtopics: 'Types of functions, Composition, Invertible functions, Binary operations',
            definition: 'Class 12 extends the study of functions to include advanced types, their compositions, and binary operations. This forms the algebraic foundation for higher mathematics.',
            content: `<p>Class 12 relations and functions build on Class 11 concepts, emphasising function composition, invertibility, and binary operations — concepts used throughout higher mathematics and computer science.</p>
<h4>Types of Functions (Review)</h4>
<p>One-one (injective): f(a)=f(b) ⟹ a=b. Onto (surjective): range = codomain. Bijective: both one-one and onto → has an inverse.</p>
<h4>Composition of Functions</h4>
<div class="formula">(g∘f)(x) = g(f(x)). Note: g∘f ≠ f∘g in general.</div>
<p>If f and g are both one-one, then g∘f is one-one. If both are onto, g∘f is onto.</p>
<h4>Invertible Functions</h4>
<p>A function is invertible if and only if it is bijective. The inverse f⁻¹ satisfies f⁻¹(f(x))=x and f(f⁻¹(y))=y.</p>
<h4>Binary Operations</h4>
<p>A binary operation * on set A: A×A → A. Properties: Commutative (a*b=b*a), Associative ((a*b)*c=a*(b*c)), Identity element (a*e=a), Inverse (a*a⁻¹=e).</p>`,
            qa: [
              { q: 'Prove that f(x) = 2x+3 is a bijection from R to R.', a: 'One-one: f(a)=f(b) → 2a+3=2b+3 → a=b ✓. Onto: For any y∈R, x=(y−3)/2 ∈R and f(x)=y ✓. Hence bijective.' },
              { q: 'If f(x)=x+1 and g(x)=2x, find (f∘g)(x) and (g∘f)(x).', a: '(f∘g)(x) = f(g(x)) = f(2x) = 2x+1. (g∘f)(x) = g(f(x)) = g(x+1) = 2(x+1) = 2x+2. They are different.' },
              { q: 'Show that f: R→R, f(x)=x² is not invertible.', a: 'f(2)=f(−2)=4 but 2≠−2, so f is not one-one. Not bijective → not invertible over all of R. (It is invertible if domain is restricted to R⁺.)' },
            ]
          },
          {
            id: 'inverse-trig',
            title: 'Inverse Trigonometric Functions',
            subtopics: 'Domain, Range, Principal value branch, Properties and identities, Simplification of expressions',
            definition: 'Inverse trigonometric functions are the inverses of trig functions with restricted domains. sin⁻¹(x) gives the angle whose sine is x. They are essential in calculus for integration and for solving equations.',
            content: `<p>Inverse trig functions appear constantly in calculus (integration of 1/√(1−x²) = sin⁻¹x+C) and physics (finding angles from ratios).</p>
<h4>Principal Value Branches</h4>
<p>sin⁻¹: domain [−1,1], range [−π/2, π/2].</p>
<p>cos⁻¹: domain [−1,1], range [0, π].</p>
<p>tan⁻¹: domain ℝ, range (−π/2, π/2).</p>
<h4>Key Properties</h4>
<div class="formula">sin⁻¹(−x) = −sin⁻¹(x). cos⁻¹(−x) = π − cos⁻¹(x).</div>
<div class="formula">sin⁻¹x + cos⁻¹x = π/2. tan⁻¹x + cot⁻¹x = π/2.</div>
<div class="formula">tan⁻¹(1/x) = π/2 − tan⁻¹(x) for x>0.</div>
<h4>Important Results</h4>
<div class="formula">tan⁻¹x + tan⁻¹y = tan⁻¹[(x+y)/(1−xy)] if xy<1</div>
<div class="formula">2tan⁻¹x = sin⁻¹[2x/(1+x²)] = cos⁻¹[(1−x²)/(1+x²)]</div>`,
            qa: [
              { q: 'Find the principal value of sin⁻¹(−1/2).', a: 'sin⁻¹(−1/2) = −sin⁻¹(1/2) = −π/6. (Principal range is [−π/2, π/2])' },
              { q: 'Evaluate tan⁻¹(1) + cos⁻¹(1/2).', a: 'tan⁻¹(1) = π/4. cos⁻¹(1/2) = π/3. Sum = π/4 + π/3 = 3π/12 + 4π/12 = 7π/12.' },
              { q: 'Prove: sin⁻¹(4/5) + sin⁻¹(3/5) = π/2.', a: 'sin⁻¹(4/5) + cos⁻¹(4/5) = π/2. cos⁻¹(4/5) = sin⁻¹(3/5) (since sin²+cos²=1: (3/5)²+(4/5)²=1). Therefore sin⁻¹(4/5) + sin⁻¹(3/5) = π/2. ✓' },
            ]
          },
          {
            id: 'matrices-determinants',
            title: 'Matrices and Determinants',
            subtopics: 'Matrix operations, Types of matrices, Determinants, Cofactors, Adjoint, Inverse, Cramer\'s rule',
            definition: 'A matrix is a rectangular array of numbers. Matrices provide a compact way to solve systems of equations, perform geometric transformations, and represent linear maps. Determinants are scalar values that characterise matrices.',
            content: `<p>Matrices are the language of linear algebra — used in computer graphics, cryptography, quantum mechanics, statistics, and machine learning. Determinants measure the "volume change" of a linear transformation.</p>
<h4>Matrix Operations</h4>
<p>Addition: element-wise (same order). Multiplication: A(m×n) × B(n×p) = C(m×p). (AB ≠ BA generally).</p>
<h4>Special Matrices</h4>
<p>Identity I (1s on diagonal), Zero matrix, Symmetric (A=Aᵀ), Skew-symmetric (A=−Aᵀ), Orthogonal (AᵀA=I).</p>
<h4>Determinant of 2×2 Matrix</h4>
<div class="formula">|a b; c d| = ad − bc</div>
<h4>Properties of Determinants</h4>
<p>|AB| = |A||B|. |Aᵀ| = |A|. Interchanging rows: sign changes. Multiplying row by k: det multiplied by k.</p>
<h4>Inverse of a Matrix</h4>
<div class="formula">A⁻¹ = adj(A)/|A| [exists only if |A| ≠ 0]</div>
<h4>Solving Linear Equations</h4>
<div class="formula">AX = B → X = A⁻¹B</div>`,
            qa: [
              { q: 'If A=[1,2;3,4], find |A| and A⁻¹.', a: '|A|=1×4−2×3=4−6=−2. adj(A)=[4,−2;−3,1]. A⁻¹=adj(A)/|A|=[−2,1;3/2,−1/2].' },
              { q: 'Show that |A·B| = |A|·|B| using A=[1,0;0,2], B=[3,1;1,2].', a: '|A|=2, |B|=5. AB=[3,1;2,4]. |AB|=12−2=10. |A||B|=2×5=10. ✓' },
              { q: 'Solve: 2x+y=5, x+3y=10 using matrices.', a: 'A=[2,1;1,3], B=[5;10]. |A|=6−1=5. A⁻¹=[3,−1;−1,2]/5. X=A⁻¹B=[15−10;−5+20]/5=[5;15]/5=[1;3]. So x=1, y=3.' },
            ]
          },
          {
            id: 'continuity-differentiability',
            title: 'Continuity and Differentiability',
            subtopics: 'Continuity, Differentiability, Derivatives of composite, implicit, inverse, exponential and logarithmic functions, Rolle\'s and MVT',
            definition: 'A function is continuous at a point if there is no break or jump at that point. Differentiability means the derivative exists at that point. These concepts connect graphical behaviour to algebraic properties.',
            content: `<p>Continuity and differentiability are the rigorous mathematical foundation for calculus. They define precisely when we can apply derivative rules and what guarantees the existence of solutions.</p>
<h4>Continuity</h4>
<p>f is continuous at x=a if: (1) f(a) is defined, (2) lim f(x) exists, (3) lim f(x) = f(a).</p>
<p>All polynomials, sin, cos, eˣ are everywhere continuous.</p>
<h4>Differentiability</h4>
<p>f is differentiable at x=a if left derivative = right derivative = finite value. Differentiable → Continuous (not vice versa).</p>
<h4>Chain Rule</h4>
<div class="formula">d/dx[f(g(x))] = f'(g(x)) × g'(x)</div>
<h4>Implicit Differentiation</h4>
<p>Differentiate both sides w.r.t. x, treating y as a function of x (use dy/dx where y appears).</p>
<h4>Logarithmic Differentiation</h4>
<p>Take ln of both sides before differentiating — useful for xˣ type functions.</p>
<h4>Theorems</h4>
<p><strong>Rolle's:</strong> If f continuous on [a,b], differentiable on (a,b), and f(a)=f(b), then ∃c∈(a,b) where f'(c)=0.</p>
<p><strong>Mean Value Theorem:</strong> f'(c) = [f(b)−f(a)]/(b−a) for some c∈(a,b).</p>`,
            qa: [
              { q: 'Differentiate y = sin(x²).', a: 'Chain rule: dy/dx = cos(x²) × 2x = 2x cos(x²).' },
              { q: 'Find dy/dx if x²+y²=25 (implicit).', a: 'Differentiate both sides: 2x + 2y(dy/dx) = 0. dy/dx = −x/y.' },
              { q: 'Differentiate y = xˣ.', a: 'Take ln: ln y = x ln x. Differentiate: (1/y)(dy/dx) = ln x + x(1/x) = ln x + 1. dy/dx = y(ln x+1) = xˣ(1+ln x).' },
              { q: 'Is f(x) = |x| differentiable at x=0?', a: 'Left derivative at 0: lim(h→0⁻) |h|/h = −1. Right derivative: lim(h→0⁺) |h|/h = 1. Left ≠ Right → NOT differentiable at x=0 (though it is continuous there).' },
            ]
          },
          {
            id: 'applications-derivatives',
            title: 'Applications of Derivatives',
            subtopics: 'Rate of change, Increasing/decreasing functions, Maxima/minima, Tangent and normal, Approximations',
            definition: 'Derivatives measure rates of change. Applied to real functions, they help find where functions are increasing/decreasing, find maximum and minimum values, and determine slopes of tangents — essential for optimisation problems.',
            content: `<p>Optimisation — finding the best solution — is one of the most important applications of mathematics. Derivatives pinpoint exactly where a function is largest or smallest, enabling decisions in engineering, economics, and science.</p>
<h4>Rate of Change</h4>
<p>If y = f(x), then dy/dx is the rate at which y changes with respect to x. E.g., velocity = ds/dt, acceleration = dv/dt.</p>
<h4>Increasing/Decreasing Functions</h4>
<p>f'(x) > 0 on an interval → f increasing. f'(x) < 0 → f decreasing. f'(x) = 0 → stationary point.</p>
<h4>First Derivative Test</h4>
<p>If f'(c) = 0 and f' changes from + to − at x=c → local maximum. If f' changes from − to + → local minimum.</p>
<h4>Second Derivative Test</h4>
<div class="formula">f'(c) = 0 and f''(c) < 0 → local max. f''(c) > 0 → local min.</div>
<h4>Tangent and Normal</h4>
<div class="formula">Tangent at (x₀,y₀): y − y₀ = f'(x₀)(x − x₀)</div>
<div class="formula">Normal slope = −1/f'(x₀)</div>`,
            qa: [
              { q: 'A balloon\'s volume V=4πr³/3. Find rate of increase of volume when r=5cm and dr/dt=2cm/s.', a: 'dV/dt = 4πr² × dr/dt = 4π×25×2 = 200π cm³/s.' },
              { q: 'Find the local maxima/minima of f(x) = x³−6x²+9x+1.', a: "f'(x) = 3x²−12x+9 = 3(x−1)(x−3). Critical points: x=1 and x=3. f''(x)=6x−12. f''(1)=−6<0 → local max at x=1. f''(3)=6>0 → local min at x=3." },
              { q: 'Find the equation of tangent to y = x² + 2x at the point (1,3).', a: "y' = 2x+2. At x=1: slope = 4. Tangent: y−3 = 4(x−1) → y = 4x−1." },
              { q: 'A rectangular box with square base has volume 4000 cm³. Find dimensions to minimise surface area.', a: 'Let side=x, height=h. V=x²h=4000 → h=4000/x². S=2x²+4xh=2x²+16000/x. dS/dx=4x−16000/x²=0 → x³=4000 → x=≈15.87cm. h=4000/252≈15.87cm. Cube shape minimises surface area.' },
            ]
          },
          {
            id: 'integrals',
            title: 'Integrals',
            subtopics: 'Indefinite integration, Definite integration, Standard forms, Methods (substitution, parts, partial fractions), Applications',
            definition: 'Integration is the reverse process of differentiation. The integral of a function f(x) is a function F(x) such that F\'(x) = f(x). It represents the accumulation of quantities and the area under a curve.',
            content: `<p>If differentiation is about rates of change, integration is about accumulation. The area under a speed-time graph gives total distance. Integration lets us calculate areas, volumes, work done, and much more.</p>
<h4>Indefinite Integral</h4>
<div class="formula">∫f(x)dx = F(x) + C, where F'(x) = f(x)</div>
<p>C is the constant of integration (since derivative of a constant is 0).</p>
<h4>Standard Formulas</h4>
<div class="formula">∫xⁿdx = xⁿ⁺¹/(n+1) + C (n ≠ −1)</div>
<div class="formula">∫eˣdx = eˣ + C | ∫(1/x)dx = ln|x| + C</div>
<div class="formula">∫sinx dx = −cosx + C | ∫cosx dx = sinx + C</div>
<h4>Methods of Integration</h4>
<p><strong>Substitution:</strong> Replace complex expression with a single variable. If integrand is f(g(x))·g'(x), let u = g(x).</p>
<p><strong>Integration by Parts:</strong></p>
<div class="formula">∫u·v dx = u∫v dx − ∫[du/dx · ∫v dx] dx</div>
<p><strong>LIATE rule for choosing u:</strong> Logarithm, Inverse trig, Algebraic, Trigonometric, Exponential.</p>
<h4>Definite Integral</h4>
<div class="formula">∫[a to b] f(x)dx = F(b) − F(a) (Fundamental Theorem)</div>
<p>Geometrically represents the signed area between the curve and x-axis from x=a to x=b.</p>`,
            qa: [
              { q: 'Evaluate ∫(3x² + 4x − 2)dx', a: '∫3x²dx + ∫4x dx − ∫2dx = x³ + 2x² − 2x + C' },
              { q: 'Evaluate ∫₀^(π/2) sinx dx', a: '[−cosx]₀^(π/2) = −cos(π/2) − (−cos0) = 0 + 1 = 1' },
              { q: 'Evaluate ∫x·eˣ dx using integration by parts.', a: 'u=x, v=eˣ. ∫x·eˣdx = x·eˣ − ∫1·eˣdx = xeˣ − eˣ + C = eˣ(x−1) + C' },
              { q: 'Find ∫dx/(1+x²)', a: 'This is the standard form: ∫dx/(1+x²) = tan⁻¹(x) + C' },
              { q: 'Evaluate ∫₀^² (x² + 1)dx', a: '[x³/3 + x]₀² = (8/3 + 2) − (0) = 8/3 + 2 = 14/3.' },
            ]
          },
          {
            id: 'vectors-3d',
            title: 'Vectors and Three Dimensional Geometry',
            subtopics: 'Vector algebra, Dot product, Cross product, Lines and planes in 3D, Distance formulas',
            definition: 'Vectors have both magnitude and direction. Three-dimensional geometry extends coordinate geometry to 3D space using vectors, enabling precise description of lines, planes, and spatial relationships.',
            content: `<p>3D geometry and vectors are essential for physics (force, velocity, electromagnetic fields) and engineering (CAD, robotics, computer graphics). This chapter unifies geometry and algebra in three dimensions.</p>
<h4>Vectors</h4>
<div class="formula">a⃗ = aᵢî + aⱼĵ + aₖk̂. Magnitude: |a⃗| = √(aᵢ²+aⱼ²+aₖ²)</div>
<h4>Dot (Scalar) Product</h4>
<div class="formula">a⃗·b⃗ = |a||b|cosθ = aᵢbᵢ+aⱼbⱼ+aₖbₖ</div>
<p>Two vectors are perpendicular iff a⃗·b⃗ = 0.</p>
<h4>Cross (Vector) Product</h4>
<div class="formula">a⃗×b⃗ = |a||b|sinθ n̂. |a⃗×b⃗| = area of parallelogram.</div>
<p>Two vectors are parallel iff a⃗×b⃗ = 0⃗.</p>
<h4>Equation of Line in 3D</h4>
<div class="formula">r⃗ = a⃗ + λb⃗ (vector form). Symmetric: (x−x₁)/l = (y−y₁)/m = (z−z₁)/n</div>
<h4>Equation of Plane</h4>
<div class="formula">r⃗·n̂ = d (vector). ax+by+cz=d (Cartesian)</div>`,
            qa: [
              { q: 'Find the angle between a⃗=(1,2,3) and b⃗=(−1,0,1).', a: 'a⃗·b⃗=−1+0+3=2. |a|=√14, |b|=√2. cosθ=2/(√14·√2)=2/√28=1/√7. θ=cos⁻¹(1/√7)≈67.8°.' },
              { q: 'Find the area of the parallelogram with sides a⃗=(2,0,0) and b⃗=(0,3,0).', a: 'a⃗×b⃗=|î ĵ k̂; 2 0 0; 0 3 0|=(0−0)î−(0−0)ĵ+(6−0)k̂=6k̂. Area=|a⃗×b⃗|=6 sq units.' },
              { q: 'Find the distance between point P(1,2,3) and plane 2x+y+2z=10.', a: 'd = |2(1)+1(2)+2(3)−10|/√(4+1+4) = |2+2+6−10|/3 = |0|/3 = 0. Point lies ON the plane!' },
            ]
          },
          {
            id: 'probability-12',
            title: 'Probability (Advanced)',
            subtopics: 'Conditional probability, Multiplication theorem, Bayes\' theorem, Random variables, Binomial distribution',
            definition: 'Advanced probability extends basic probability to conditional events, random variables, and probability distributions. Bayes\' theorem enables updating probabilities based on new evidence.',
            content: `<p>Probability theory underlies statistics, machine learning, insurance, genetics, and quantum mechanics. These advanced topics are heavily tested in both CBSE boards and JEE.</p>
<h4>Conditional Probability</h4>
<div class="formula">P(A|B) = P(A∩B)/P(B) [probability of A given B has occurred]</div>
<h4>Multiplication Theorem</h4>
<div class="formula">P(A∩B) = P(A)·P(B|A) = P(B)·P(A|B)</div>
<p>Independent events: P(A∩B) = P(A)·P(B).</p>
<h4>Bayes' Theorem</h4>
<div class="formula">P(Eᵢ|A) = P(Eᵢ)·P(A|Eᵢ) / Σⱼ P(Eⱼ)·P(A|Eⱼ)</div>
<h4>Random Variable and Expectation</h4>
<div class="formula">E(X) = ΣxᵢP(xᵢ). Var(X) = E(X²)−[E(X)]²</div>
<h4>Binomial Distribution</h4>
<div class="formula">P(X=r) = ⁿCᵣ pʳ (1−p)ⁿ⁻ʳ. Mean=np, Variance=np(1−p)</div>`,
            qa: [
              { q: 'Two cards drawn from a pack of 52. Find P(both aces | first card is ace).', a: 'P = 3/51 = 1/17. (Given first is ace, 3 aces remain from 51 cards).' },
              { q: 'A coin is tossed 6 times. Find probability of exactly 4 heads.', a: 'P(X=4) = ⁶C₄(1/2)⁴(1/2)² = 15×1/64 = 15/64.' },
              { q: 'A bag has 3 red, 4 blue balls. Two drawn without replacement. Find P(both red).', a: 'P = (3/7)×(2/6) = 6/42 = 1/7.' },
              { q: 'What is Bayes\' theorem used for?', a: "Bayes' theorem is used for updating probability estimates based on new evidence. Example: medical test — if a test is positive, what's the probability of actually having the disease? Accounts for false positives and disease prevalence. Foundation of Bayesian inference and spam filters." },
            ]
          },
        ]
      },
      physics: {
        id: 'physics', topics: [
          {
            id: 'electrostatics',
            title: 'Electric Charges and Fields',
            subtopics: 'Coulomb\'s law, Electric field, Gauss\'s law, Electric potential, Capacitors',
            definition: 'Electrostatics studies the behaviour of electric charges at rest. Electric forces between charges, described by Coulomb\'s law, are responsible for all chemical bonding and most everyday phenomena.',
            content: `<p>The entire visible world is held together by electrostatic forces — atoms bond to form molecules, molecules form materials. Understanding these forces mathematically is the starting point of classical electromagnetism.</p>
<h4>Coulomb's Law</h4>
<div class="formula">F = kq₁q₂/r² (k = 9×10⁹ N·m²/C²)</div>
<p>Force is directly proportional to product of charges, inversely proportional to square of distance. Acts along the line joining charges.</p>
<h4>Electric Field</h4>
<div class="formula">E = F/q₀ = kq/r² [N/C or V/m]</div>
<p>Field lines go from positive to negative. Denser lines = stronger field.</p>
<h4>Electric Flux and Gauss's Law</h4>
<div class="formula">Φ = ∮E·dA = Q_enclosed/ε₀</div>
<p>The total electric flux through any closed surface equals the net charge enclosed divided by ε₀.</p>
<h4>Electric Potential</h4>
<div class="formula">V = kq/r [Volts], W = qV</div>
<h4>Capacitance</h4>
<div class="formula">C = Q/V [Farads], C = ε₀A/d (parallel plate)</div>
<div class="formula">Energy = ½CV² = Q²/2C</div>`,
            qa: [
              { q: 'Two charges of 6μC and −8μC are 0.2m apart. Find the force.', a: 'F = k|q₁||q₂|/r² = 9×10⁹ × 6×10⁻⁶ × 8×10⁻⁶ / 0.04 = 10.8 N (attractive)' },
              { q: 'What is the electric field at the midpoint between +3μC and −3μC placed 1m apart?', a: 'Both fields point from + to − (same direction at midpoint). E₁ = E₂ = 9×10⁹×3×10⁻⁶/(0.5)² = 108000 N/C. Total E = 216000 N/C.' },
              { q: 'State Gauss\'s Law and give one application.', a: 'Gauss\'s Law: total electric flux through any closed surface = Q_enclosed/ε₀. Application: Electric field due to infinite line charge: E = λ/(2πε₀r), derived using cylindrical Gaussian surface.' },
              { q: 'A capacitor of 4μF is charged to 200V. Find energy stored.', a: 'E = ½CV² = ½×4×10⁻⁶×200² = 0.08 J = 80 mJ.' },
            ]
          },
          {
            id: 'current-electricity',
            title: 'Current Electricity',
            subtopics: 'Ohm\'s law, Resistance, Kirchhoff\'s laws, Wheatstone bridge, Potentiometer, EMF, Internal resistance',
            definition: 'Current electricity deals with the flow of electric charge through conductors. Ohm\'s law, Kirchhoff\'s laws, and circuit theorems enable analysis of complex electrical circuits.',
            content: `<p>From mobile phones to power grids, all electrical technology runs on the principles of current electricity. This chapter gives the tools to analyse any electrical circuit.</p>
<h4>Key Concepts</h4>
<div class="formula">Current I = Q/t [Amperes]. Ohm's Law: V = IR.</div>
<div class="formula">Resistance R = ρL/A [Ohms]. Resistivity ρ increases with temperature for metals.</div>
<h4>Resistances in Series and Parallel</h4>
<div class="formula">Series: R_total = R₁+R₂+... | Parallel: 1/R_total = 1/R₁+1/R₂+...</div>
<h4>Kirchhoff's Laws</h4>
<p><strong>KCL (Junction rule):</strong> Sum of currents entering = sum of currents leaving a junction.</p>
<p><strong>KVL (Loop rule):</strong> Sum of potential differences around any closed loop = 0.</p>
<h4>EMF and Internal Resistance</h4>
<div class="formula">Terminal voltage: V = E − Ir. Power: P = VI = I²R = V²/R.</div>
<h4>Wheatstone Bridge</h4>
<div class="formula">Balanced when P/Q = R/S (no current through galvanometer)</div>`,
            qa: [
              { q: 'Three resistors 2Ω, 3Ω, 6Ω are connected in parallel. Find equivalent resistance.', a: '1/R = 1/2+1/3+1/6 = 3/6+2/6+1/6 = 6/6 = 1. R = 1Ω.' },
              { q: 'A battery of EMF 12V and internal resistance 1Ω drives a current of 2A. Find terminal voltage.', a: 'V = E − Ir = 12 − 2×1 = 10V.' },
              { q: 'Apply KVL to find current in a loop with EMF=10V, resistors 4Ω and 6Ω in series.', a: 'KVL: E = IR_total. 10 = I×(4+6). I = 1A.' },
              { q: 'A nichrome wire has resistivity 1×10⁻⁶ Ω·m, length 2m, area 1mm². Find resistance.', a: 'R = ρL/A = 1×10⁻⁶ × 2 / (1×10⁻⁶) = 2Ω.' },
            ]
          },
          {
            id: 'magnetism-electromagnetism',
            title: 'Magnetism and Electromagnetic Induction',
            subtopics: 'Magnetic force, Biot-Savart law, Ampere\'s law, Faraday\'s law, Lenz\'s law, Inductance, AC circuits',
            definition: 'Moving electric charges create magnetic fields. Changing magnetic fields create electric fields (electromagnetic induction). Together, electricity and magnetism form electromagnetism — the basis of all electrical machines.',
            content: `<p>Faraday's discovery of electromagnetic induction (1831) gave us the electric generator — the device that produces almost all the world's electricity. Understanding this is fundamental to modern civilisation.</p>
<h4>Magnetic Force on Moving Charge</h4>
<div class="formula">F = qv×B = qvBsinθ (F perpendicular to both v and B)</div>
<h4>Biot-Savart Law</h4>
<div class="formula">dB = μ₀/(4π) × Idl×r̂/r²</div>
<div class="formula">Long straight wire: B = μ₀I/(2πr). Circular loop at centre: B = μ₀I/(2R).</div>
<h4>Faraday's Law of Induction</h4>
<div class="formula">EMF = −dΦ/dt (Φ = magnetic flux = B·A·cosθ)</div>
<h4>Lenz's Law</h4>
<p>The induced current direction opposes the change in flux that causes it. (Conservation of energy)</p>
<h4>Inductance</h4>
<div class="formula">Self-inductance: L = NΦ/I. EMF = −L(dI/dt). Energy = ½LI²</div>
<h4>AC Circuits</h4>
<div class="formula">V = V₀sinωt. Irms = Vrms/Z (impedance Z). Resonance: ω = 1/√(LC)</div>`,
            qa: [
              { q: 'A rectangular coil moves out of a magnetic field region. In which direction does induced current flow?', a: 'By Lenz\'s law, the induced current must oppose the decrease in flux. The current flows in a direction that creates a magnetic field to maintain the original flux — opposing the exit motion.' },
              { q: 'A coil of 200 turns has flux changing at 0.05 Wb/s. Find induced EMF.', a: 'EMF = N×dΦ/dt = 200×0.05 = 10V.' },
              { q: 'Find the resonant frequency of an LC circuit with L=10mH and C=100μF.', a: 'ω₀ = 1/√(LC) = 1/√(10⁻²×10⁻⁴) = 1/√(10⁻⁶) = 1000 rad/s. f = ω/2π ≈ 159 Hz.' },
              { q: 'Why does a transformer not work with DC?', a: 'A transformer works on electromagnetic induction — it requires a CHANGING magnetic flux to induce EMF. DC produces a constant current → constant magnetic field → no changing flux → no induced EMF. AC continuously alternates, creating changing flux, making the transformer work.' },
            ]
          },
          {
            id: 'optics-12',
            title: 'Ray Optics and Wave Optics',
            subtopics: 'Reflection, Refraction, Lens formula, Total internal reflection, Prism, Interference, Diffraction, Polarisation',
            definition: 'Optics studies the behaviour of light. Ray optics treats light as rays governed by geometric laws; wave optics considers light\'s wave nature, explaining interference, diffraction, and polarisation.',
            content: `<p>Optics explains cameras, glasses, telescopes, microscopes, optical fibers, and lasers. Both ray and wave models are necessary — ray optics for everyday instruments, wave optics for phenomena involving light wavelengths.</p>
<h4>Refraction and Snell's Law</h4>
<div class="formula">n₁ sinθ₁ = n₂ sinθ₂. Refractive index n = c/v = sinθ₁/sinθ₂</div>
<h4>Lenses and Mirrors</h4>
<div class="formula">Mirror: 1/v + 1/u = 1/f. Lens: 1/v − 1/u = 1/f. Magnification m = −v/u.</div>
<h4>Total Internal Reflection</h4>
<p>Occurs when light goes from denser to rarer medium at angle ≥ critical angle. Critical angle: sinC = 1/n.</p>
<p>Application: Optical fibers (communication, endoscopy), diamonds.</p>
<h4>Prism</h4>
<div class="formula">n = sin[(A+δₘ)/2] / sin[A/2] (at minimum deviation δₘ)</div>
<h4>Wave Optics: Interference</h4>
<div class="formula">Young's double slit: fringe width β = λD/d</div>
<h4>Diffraction</h4>
<p>Bending of waves around obstacles. Single slit: minima at asinθ = nλ.</p>`,
            qa: [
              { q: 'An object is 15cm in front of a concave mirror with focal length 10cm. Find image position.', a: '1/f = 1/v + 1/u. f=−10, u=−15. 1/(−10) = 1/v + 1/(−15). 1/v = −1/10 + 1/15 = −3/30+2/30 = −1/30. v = −30cm (real, inverted image).' },
              { q: 'Find the critical angle for glass (n=1.5) in air.', a: 'sinC = 1/n = 1/1.5 = 2/3. C = sin⁻¹(2/3) ≈ 41.8°.' },
              { q: 'In Young\'s double slit experiment, λ=600nm, slit separation=0.5mm, screen at 1m. Find fringe width.', a: 'β = λD/d = (600×10⁻⁹×1)/(0.5×10⁻³) = 1.2×10⁻³ m = 1.2mm.' },
              { q: 'Why does a diamond sparkle more than glass?', a: 'Diamond has a very high refractive index (n≈2.42), giving a critical angle of only ≈24°. When cut at precise angles, light undergoes total internal reflection multiple times inside before exiting, emerging in many directions — creating the characteristic sparkle (brilliance).' },
            ]
          },
          {
            id: 'semiconductor-devices',
            title: 'Semiconductor Devices',
            subtopics: 'p-n junction, Diodes, Rectifiers, Transistors, Logic gates, Communication systems',
            definition: 'Semiconductors have electrical conductivity between conductors and insulators, and can be precisely controlled. They form the basis of all modern electronics — from diodes and transistors to microchips.',
            content: `<p>The transistor (1947) is arguably the most important invention of the 20th century. Today a single chip contains billions of transistors. All digital technology rests on semiconductor physics.</p>
<h4>Types of Semiconductors</h4>
<p><strong>Intrinsic:</strong> Pure (Si, Ge). Equal electrons and holes.</p>
<p><strong>n-type:</strong> Doped with pentavalent impurity (As, P) → extra electrons as majority carriers.</p>
<p><strong>p-type:</strong> Doped with trivalent impurity (B, Al) → holes as majority carriers.</p>
<h4>p-n Junction and Diode</h4>
<p>When p and n materials join, a depletion region forms with a built-in potential barrier.</p>
<p>Forward bias → barrier decreases → current flows. Reverse bias → barrier increases → no current (except tiny leakage).</p>
<h4>Rectifiers</h4>
<p>Half-wave rectifier: one diode, converts AC to pulsed DC. Full-wave bridge: 4 diodes, more efficient.</p>
<h4>Transistor (BJT)</h4>
<p>NPN or PNP. Three terminals: Emitter, Base, Collector. As amplifier: small base current controls large collector current. Current gain β = Ic/Ib.</p>
<h4>Logic Gates</h4>
<p>AND, OR, NOT, NAND, NOR, XOR. NAND and NOR are universal gates. Boolean algebra governs logic operations.</p>`,
            qa: [
              { q: 'Why is silicon preferred over germanium for semiconductor devices?', a: 'Silicon has a larger band gap (1.1 eV vs 0.67 eV for Ge). This means Si devices work at higher temperatures (up to ~150°C vs ~75°C for Ge) with less thermal leakage current. Also, SiO₂ (silicon dioxide) is an excellent insulator formed naturally, useful for device fabrication.' },
              { q: 'Construct a truth table for NAND gate.', a: 'NAND: output = NOT(A AND B). A=0,B=0→1. A=0,B=1→1. A=1,B=0→1. A=1,B=1→0. (NAND is universal — any logic circuit can be built from NAND gates alone.)' },
              { q: 'A transistor has Ic=5mA and Ib=50μA. Find current gain β.', a: 'β = Ic/Ib = 5×10⁻³ / 50×10⁻⁶ = 100.' },
              { q: 'What is the photoelectric effect and which device uses it?', a: 'When light above a threshold frequency hits a metal, electrons are emitted. Energy of photoelectron = hν − φ (work function). Photodiodes and solar cells use this effect — incident light creates electron-hole pairs, generating current.' },
            ]
          },
        ]
      },
      chemistry: {
        id: 'chemistry', topics: [
          {
            id: 'solid-state',
            title: 'The Solid State',
            subtopics: 'Crystal systems, Packing, Unit cells, Defects, Electrical and magnetic properties',
            definition: 'The solid state is a state of matter in which constituent particles (atoms, ions, or molecules) are arranged in a regular, ordered pattern held by strong forces, resulting in a definite shape and volume.',
            content: `<p>Solids surround us — metals, gems, semiconductors, ceramics. Their remarkable properties (hardness, conductivity, optical properties) arise from their internal atomic arrangements.</p>
<h4>Crystalline vs Amorphous Solids</h4>
<p><strong>Crystalline:</strong> Regular, repeating arrangement. Sharp melting point. Anisotropic (properties differ with direction). Examples: NaCl, quartz, diamond.</p>
<p><strong>Amorphous:</strong> No long-range order. Pseudo-solids/supercooled liquids. Isotropic. Examples: glass, rubber, plastic.</p>
<h4>Unit Cell and Packing</h4>
<p>Unit cell is the smallest repeating unit. Types: Simple Cubic (SC), Body-Centred Cubic (BCC), Face-Centred Cubic (FCC/ccp).</p>
<ul>
<li>SC: 1 atom/cell, packing efficiency 52.4%</li>
<li>BCC: 2 atoms/cell, packing efficiency 68%</li>
<li>FCC: 4 atoms/cell, packing efficiency 74%</li>
</ul>
<h4>Defects in Crystals</h4>
<ul>
<li><strong>Schottky:</strong> Equal number of cation and anion vacancies. Seen in NaCl, KBr. Decreases density.</li>
<li><strong>Frenkel:</strong> Cation displaced to interstitial site. Seen in AgCl, ZnS. No change in density.</li>
</ul>`,
            qa: [
              { q: 'How many atoms are present in one FCC unit cell?', a: 'FCC: 8 corner atoms × 1/8 = 1, plus 6 face atoms × 1/2 = 3. Total = 4 atoms per unit cell.' },
              { q: 'Why are amorphous solids called pseudo-solids?', a: 'Amorphous solids like glass flow very slowly under pressure (no long-range order). They don\'t have sharp melting points. They are considered supercooled liquids or pseudo-solids.' },
              { q: 'What are n-type and p-type semiconductors?', a: 'n-type: doped with pentavalent atom (As, P) → extra electron as charge carrier. p-type: doped with trivalent atom (B, Al) → creates hole (positive charge carrier).' },
              { q: 'Define coordination number. What is it for FCC?', a: 'Coordination number = number of nearest neighbours touching a given atom. In FCC, each atom is surrounded by 12 nearest neighbours. Coordination number = 12.' },
            ]
          },
          {
            id: 'solutions',
            title: 'Solutions',
            subtopics: 'Types of solutions, Solubility, Vapour pressure, Raoult\'s law, Colligative properties, Osmosis, Abnormal molar masses',
            definition: 'A solution is a homogeneous mixture of two or more substances. Colligative properties of solutions depend on the number of solute particles, not their nature — they underlie phenomena from antifreeze to blood pressure.',
            content: `<p>Solutions are everywhere in chemistry and life — blood, seawater, beverages, medicines. Colligative properties explain how dissolved substances change the physical behaviour of solvents.</p>
<h4>Raoult's Law</h4>
<div class="formula">p₁ = x₁ × p₁° (partial vapour pressure = mole fraction × vapour pressure of pure component)</div>
<p>For ideal solutions: ΔV=0, ΔH=0. Non-ideal: positive deviation (weaker interactions) or negative deviation (stronger interactions).</p>
<h4>Colligative Properties</h4>
<ul>
<li><strong>Relative lowering of vapour pressure:</strong> Δp/p° = x₂ (mole fraction of solute)</li>
<li><strong>Elevation of boiling point:</strong> ΔTb = Kb × m (m = molality)</li>
<li><strong>Depression of freezing point:</strong> ΔTf = Kf × m</li>
<li><strong>Osmotic pressure:</strong> π = CRT (C = molar concentration)</li>
</ul>
<h4>Van't Hoff Factor (i)</h4>
<p>For electrolytes: i > 1 (dissociation). For associated solutes: i < 1. Corrected: ΔTb = i×Kb×m.</p>`,
            qa: [
              { q: 'Calculate osmotic pressure of 0.1M NaCl at 27°C (R=0.082 L·atm/mol·K).', a: 'NaCl dissociates: i=2. π = iCRT = 2×0.1×0.082×300 = 4.92 atm.' },
              { q: 'Antifreeze: 200g of ethylene glycol (M=62) dissolved in 600g water. Find freezing point depression. Kf(water)=1.86°C·kg/mol.', a: 'Moles = 200/62 = 3.226. Molality = 3.226/0.6 = 5.376 mol/kg. ΔTf = Kf×m = 1.86×5.376 = 10°C. FP drops from 0°C to −10°C.' },
              { q: 'Explain positive deviation from Raoult\'s law with an example.', a: 'Positive deviation: observed vapour pressure > calculated by Raoult\'s law. Occurs when A-B interactions are weaker than A-A and B-B. Example: ethanol-water (the H-bonds in mixture are weaker). Solution has higher vapour pressure → lower boiling point → forms minimum boiling azeotrope.' },
            ]
          },
          {
            id: 'electrochemistry',
            title: 'Electrochemistry',
            subtopics: 'Electrochemical cells, EMF, Nernst equation, Electrolysis, Faraday\'s laws, Batteries, Corrosion',
            definition: 'Electrochemistry studies the interconversion of chemical and electrical energy. Galvanic cells produce electricity from spontaneous reactions; electrolytic cells use electricity to drive non-spontaneous reactions.',
            content: `<p>Electrochemistry powers our world — batteries, fuel cells, electroplating, chlor-alkali process, and prevention of corrosion all rely on electrochemical principles.</p>
<h4>Galvanic (Voltaic) Cells</h4>
<p>Spontaneous redox reaction → electrical energy. Anode: oxidation (negative terminal). Cathode: reduction (positive terminal).</p>
<div class="formula">Cell notation: Zn|Zn²⁺(1M)||Cu²⁺(1M)|Cu. E°cell = E°cathode − E°anode</div>
<h4>Nernst Equation</h4>
<div class="formula">E = E° − (RT/nF)lnQ = E° − (0.0591/n)logQ [at 25°C]</div>
<h4>Electrolysis</h4>
<p>Electrical energy drives non-spontaneous reaction. Anode: oxidation. Cathode: reduction (same as electrolytic).</p>
<h4>Faraday's Laws of Electrolysis</h4>
<div class="formula">Mass deposited: m = ZIt = (M/nF)×Q = (M/nF)×It</div>
<p>F = 96500 C/mol (Faraday's constant).</p>
<h4>Batteries</h4>
<p>Lead storage (car battery): E°≈2V/cell. Lithium-ion: lightweight, high energy density. Fuel cells: H₂+O₂→H₂O+electricity.</p>`,
            qa: [
              { q: 'E°(Zn²⁺/Zn)=−0.76V, E°(Cu²⁺/Cu)=+0.34V. Find E°cell for Zn-Cu cell.', a: 'E°cell = E°cathode − E°anode = 0.34−(−0.76) = 1.10V. Zn is anode (more negative), Cu is cathode.' },
              { q: 'Calculate mass of copper deposited by 2A current flowing for 30 min through CuSO₄ solution. (M_Cu=64, n=2)', a: 'm = MIt/nF = 64×2×1800/(2×96500) = 230400/193000 = 1.19 g.' },
              { q: 'What is the Nernst equation and what does Q represent?', a: 'Nernst equation: E = E° − (0.0591/n)logQ at 25°C. Q is the reaction quotient — the ratio of product to reactant concentrations raised to their stoichiometric coefficients, at the current conditions (not necessarily equilibrium). At equilibrium, E=0 and Q=K.' },
            ]
          },
          {
            id: 'organic-chemistry-12',
            title: 'Organic Chemistry: Aldehydes, Ketones and Carboxylic Acids',
            subtopics: 'Nomenclature, Preparation, Nucleophilic addition, Oxidation, Reduction, Aldol condensation, Carboxylic acid reactions',
            definition: 'Aldehydes (–CHO) and ketones (C=O) are carbonyl compounds. Carboxylic acids (–COOH) are important in metabolism, industry, and pharmaceuticals. Their reactivity is dominated by the polar carbonyl group.',
            content: `<p>Carbonyl compounds are among the most important in organic chemistry — they are building blocks for pharmaceuticals, polymers, fragrances, and are central to metabolic processes like the Krebs cycle.</p>
<h4>Aldehydes vs Ketones</h4>
<p>Aldehyde: CHO at chain end (H attached to carbonyl carbon). Ketone: C=O in the middle of the chain. Both are more reactive than alkanes but less than alkyl halides.</p>
<h4>Nucleophilic Addition (Key Reaction)</h4>
<p>The polar C=O bond (δ+C–δ-O) makes the carbonyl carbon susceptible to nucleophilic attack. Nu⁻ attacks C, then H⁺ adds to O.</p>
<p>Reactions: Addition of HCN → cyanohydrin. Addition of Grignard reagent. Reduction (NaBH₄, LiAlH₄).</p>
<h4>Distinguishing Tests</h4>
<p><strong>Tollens' test (silver mirror):</strong> Aldehydes reduce Ag⁺ to Ag (silver mirror). Ketones: no reaction.</p>
<p><strong>Fehling's test:</strong> Aldehydes (except aromatic) reduce Cu²⁺ to Cu₂O (red ppt).</p>
<h4>Carboxylic Acids</h4>
<div class="formula">Acidic: RCOOH ⇌ RCOO⁻ + H⁺ (Ka range 10⁻³ to 10⁻⁵)</div>
<p>Reactions: esterification (acid + alcohol → ester + water), acid chloride formation, amide formation.</p>
<h4>Aldol Condensation</h4>
<p>Aldehydes/ketones with α-hydrogen undergo aldol reaction in base: forms β-hydroxy aldehyde → dehydrates to α,β-unsaturated carbonyl.</p>`,
            qa: [
              { q: 'How can you distinguish between ethanal and propanone?', a: 'Tollens\' test: ethanal (aldehyde) gives silver mirror; propanone (ketone) does not. Iodoform test: both give yellow precipitate (both have CH₃CO– group). Fehling\'s test: ethanal gives red Cu₂O precipitate; propanone does not.' },
              { q: 'Write the esterification reaction of acetic acid with ethanol.', a: 'CH₃COOH + C₂H₅OH ⇌ CH₃COOC₂H₅ + H₂O (in presence of H₂SO₄ catalyst, reversible). The ester ethyl acetate has a fruity smell.' },
              { q: 'Why is benzoic acid stronger than acetic acid?', a: 'Benzoate ion (C₆H₅COO⁻) is stabilised by resonance with the benzene ring — the negative charge is delocalised over the ring and two oxygens. Acetate (CH₃COO⁻) only has resonance over the COO⁻ group. More stabilised conjugate base → stronger acid.' },
            ]
          },
          {
            id: 'amines-polymers',
            title: 'Amines and Polymers',
            subtopics: 'Classification of amines, Basic character, Preparation, Coupling reactions, Types of polymers, Addition and condensation polymerisation',
            definition: 'Amines are nitrogen-containing organic compounds derived from ammonia. Polymers are giant molecules made of repeating monomer units — they form the basis of plastics, fibres, rubber, and biological macromolecules.',
            content: `<p>Amines are crucial in pharmaceuticals, dyes, and biological chemistry (amino acids, DNA bases). Polymers have revolutionised modern life — from nylon to polyethylene to DNA.</p>
<h4>Amines</h4>
<p>Primary (1°): RNH₂. Secondary (2°): R₂NH. Tertiary (3°): R₃N. Quaternary ammonium: R₄N⁺.</p>
<p>Basic character: act as Lewis bases (lone pair on N). Basicity order: 2° > 1° > 3° > NH₃ (in aqueous solution, due to solvation).</p>
<p>Aromatic amines (aniline): less basic than aliphatic amines — lone pair delocalised into benzene ring.</p>
<h4>Diazonium Salts</h4>
<p>ArNH₂ + HNO₂/HCl → Ar-N₂⁺Cl⁻ (diazonium salt). Used in synthesis of azo dyes, pharmaceuticals.</p>
<h4>Polymers</h4>
<p><strong>Addition polymers:</strong> Monomer adds without losing atoms. Polyethylene (−CH₂-CH₂−)ₙ from ethene. PVC, Teflon, polystyrene.</p>
<p><strong>Condensation polymers:</strong> Monomer reacts losing small molecules (H₂O, HCl). Nylon-6,6 (diamine + dicarboxylic acid). Polyester (Dacron). Bakelite (formaldehyde + phenol).</p>
<p><strong>Natural polymers:</strong> Starch, cellulose, proteins, DNA, natural rubber (polyisoprene).</p>`,
            qa: [
              { q: 'Why is aniline less basic than methylamine?', a: 'In aniline (C₆H₅NH₂), the lone pair on N is delocalised into the benzene ring via resonance — less available to donate to H⁺. In methylamine (CH₃NH₂), the lone pair is fully available. Hence aniline Kb ≈ 4×10⁻¹⁰, methylamine Kb ≈ 4×10⁻⁴. Methylamine is much more basic.' },
              { q: 'What is the difference between addition and condensation polymerisation?', a: 'Addition: monomers (typically with double bonds) add together without losing any atoms. No by-product. Example: polyethylene from ethene. Condensation: monomers react and lose small molecules (H₂O, HCl, etc.) as by-products. Example: Nylon-6,6 from hexamethylenediamine and adipic acid.' },
              { q: 'Name two biodegradable and two non-biodegradable polymers.', a: 'Biodegradable: PHBV (polyhydroxybutyrate-co-valerate), Nylon-2-Nylon-6, natural starch, cellulose. Non-biodegradable: Polyethylene (plastic bags), PVC, Teflon, nylon-6,6, polystyrene.' },
            ]
          },
        ]
      },
      biology: {
        id: 'biology', topics: [
          {
            id: 'genetics',
            title: 'Principles of Inheritance and Variation',
            subtopics: 'Mendel\'s laws, Dihybrid cross, Chromosomal theory, Linkage, Sex determination, Mutations',
            definition: 'Genetics is the science of heredity — the study of how traits are passed from parents to offspring. Gregor Mendel\'s pioneering work with pea plants established the fundamental laws of inheritance.',
            content: `<p>Why do children resemble their parents but are never identical to them? Genetics answers this question. From Mendel's garden peas to modern gene editing, genetics has transformed medicine, agriculture, and our understanding of life.</p>
<h4>Mendel's Laws</h4>
<p><strong>Law of Segregation:</strong> During gamete formation, the two alleles for a trait separate so each gamete contains only one allele. (F1 cross gives 3:1 ratio in F2)</p>
<p><strong>Law of Independent Assortment:</strong> Genes for different traits segregate independently during gamete formation. (Dihybrid cross gives 9:3:3:1 ratio in F2)</p>
<h4>Terminology</h4>
<ul>
<li><strong>Allele:</strong> Different forms of the same gene.</li>
<li><strong>Homozygous:</strong> Both alleles identical (AA or aa).</li>
<li><strong>Heterozygous:</strong> Different alleles (Aa).</li>
<li><strong>Genotype:</strong> Genetic makeup (AA, Aa, aa).</li>
<li><strong>Phenotype:</strong> Observable characteristic.</li>
</ul>
<h4>Chromosomal Theory</h4>
<p>Sutton and Boveri proposed genes are located on chromosomes. Explains Mendel's laws at the cellular level.</p>
<h4>Sex Determination in Humans</h4>
<p>Males: XY, Females: XX. Males determine sex of offspring (X-bearing sperm → girl, Y-bearing → boy).</p>`,
            qa: [
              { q: 'A tall pea plant (TT) × short (tt). What will F1 and F2 look like?', a: 'F1: All Tt (tall — T is dominant). F2: 1TT:2Tt:1tt genotype, 3 tall:1 short phenotype (3:1 ratio).' },
              { q: 'What is incomplete dominance? Give an example.', a: 'When neither allele is completely dominant — F1 shows intermediate phenotype. Example: In Mirabilis jalapa (4 o\'clock plant), Red(RR) × White(rr) → F1 Pink(Rr). F2: 1Red:2Pink:1White (1:2:1).' },
              { q: 'Why is haemophilia more common in males than females?', a: 'Haemophilia is X-linked recessive. Males have only one X chromosome (XY). One recessive allele (X^h Y) is enough to express the disease. Females need two recessive alleles (X^h X^h) — far less likely.' },
              { q: 'What is a test cross?', a: 'A test cross is crossing a dominant phenotype individual with a homozygous recessive (aa) individual to determine if the dominant individual is homozygous (AA) or heterozygous (Aa). If offspring are all dominant → AA; if 50% dominant, 50% recessive → Aa.' },
            ]
          },
          {
            id: 'molecular-basis-inheritance',
            title: 'Molecular Basis of Inheritance',
            subtopics: 'DNA structure, Replication, Transcription, Translation, Genetic code, Gene regulation',
            definition: 'The molecular basis of inheritance explains HOW genetic information is stored in DNA, copied (replication), read (transcription), and used to make proteins (translation). This is the central dogma of molecular biology.',
            content: `<p>The central dogma of molecular biology (Crick, 1958): DNA → RNA → Protein. This simple flow of information explains how the same DNA blueprint in every cell creates hundreds of different cell types.</p>
<h4>DNA Structure</h4>
<p>Double helix (Watson and Crick, 1953). Two polynucleotide chains antiparallel, joined by hydrogen bonds between complementary bases: A=T (2 H-bonds), G≡C (3 H-bonds).</p>
<h4>DNA Replication (Semi-conservative)</h4>
<ol>
<li>Helicase unwinds the double helix.</li>
<li>DNA polymerase adds complementary nucleotides (3'→5' template, new strand 5'→3').</li>
<li>Each new DNA has one old strand + one new strand (Meselson-Stahl experiment proved this).</li>
</ol>
<h4>Transcription (DNA → mRNA)</h4>
<p>In nucleus. RNA polymerase reads template strand 3'→5', synthesises mRNA 5'→3'. mRNA carries genetic message to ribosome.</p>
<h4>Translation (mRNA → Protein)</h4>
<p>At ribosome. tRNA brings amino acids. Codons (3 nucleotides) on mRNA specify amino acids. Start codon AUG (Met). Stop codons UAA, UAG, UGA.</p>
<h4>Genetic Code Properties</h4>
<p>Triplet, unambiguous, degenerate (multiple codons per amino acid), universal (same in all organisms), non-overlapping.</p>`,
            qa: [
              { q: 'What is the central dogma of molecular biology?', a: 'Central dogma: DNA → (transcription) → RNA → (translation) → Protein. DNA stores information; RNA transfers it; proteins carry out functions. Reverse transcription (RNA→DNA, done by retroviruses like HIV) is an exception.' },
              { q: 'What did Meselson and Stahl prove about DNA replication?', a: 'They proved DNA replication is semi-conservative. Growing E. coli in ¹⁵N medium then switching to ¹⁴N. After one division, DNA was hybrid density (one ¹⁵N strand + one ¹⁴N strand). This proved each new DNA molecule has one parental strand and one newly synthesised strand.' },
              { q: 'What is a codon? How many amino acids does the genetic code specify?', a: 'A codon is a sequence of 3 nucleotides (triplet) in mRNA that codes for a specific amino acid. There are 4³=64 possible codons. 61 code for 20 amino acids (degenerate code — multiple codons per AA). 3 are stop codons (UAA, UAG, UGA). One start codon: AUG (also codes Met).' },
              { q: 'What are introns and exons?', a: 'In eukaryotic genes, the coding regions are exons (expressed sequences). Non-coding regions interspersed within the gene are introns. After transcription, the pre-mRNA undergoes splicing — introns are removed and exons are joined to form mature mRNA. Prokaryotes generally lack introns.' },
            ]
          },
          {
            id: 'evolution',
            title: 'Evolution',
            subtopics: 'Origin of life, Darwin\'s theory, Natural selection, Evidence for evolution, Human evolution, Hardy-Weinberg principle',
            definition: 'Evolution is the change in the inherited characteristics of biological populations over successive generations. Darwin\'s theory of natural selection explains the diversity of life as the result of differential survival and reproduction.',
            content: `<p>Evolution is the unifying theory of biology. It explains why organisms are the way they are, why species are related, and how life's diversity arose from common ancestors. Understanding evolution is essential for medicine, agriculture, and conservation.</p>
<h4>Origin of Life</h4>
<p>Oparin-Haldane hypothesis: early Earth had reducing atmosphere (NH₃, CH₄, H₂, H₂O). Energy (lightning, UV) caused abiotic synthesis of organic molecules. Miller-Urey experiment (1953) demonstrated this.</p>
<h4>Darwinian Evolution</h4>
<ul>
<li>Organisms produce more offspring than can survive.</li>
<li>Variations exist within populations.</li>
<li>Favourable variations are heritable.</li>
<li>Natural selection: individuals with favourable traits survive and reproduce better.</li>
<li>Over time, favourable traits become more common → evolution.</li>
</ul>
<h4>Evidence for Evolution</h4>
<p>Fossil record, comparative anatomy (homologous and analogous organs), embryology, molecular biology (DNA similarities), biogeography.</p>
<h4>Hardy-Weinberg Principle</h4>
<div class="formula">p² + 2pq + q² = 1 (allele frequencies stay constant without evolution)</div>
<p>Disturbed by: mutation, natural selection, genetic drift, migration, non-random mating.</p>`,
            qa: [
              { q: 'What is natural selection? Give an industrial example.', a: 'Natural selection: individuals better adapted to their environment survive and reproduce more. Industrial melanism (peppered moth): Before industrial revolution, light-coloured moths survived on light-coloured lichen-covered trees. After pollution darkened trees, dark moths had higher survival. Proportion of dark moths increased. Classic demonstration of natural selection.' },
              { q: 'Distinguish between homologous and analogous organs.', a: 'Homologous: same basic structure (same origin), different function. E.g., forelimbs of whale, bat, horse, human — all modified from same ancestor limb. Indicates divergent evolution. Analogous: different structure, similar function. E.g., wings of butterfly and bird. Indicates convergent evolution.' },
              { q: 'What is genetic drift? How does it affect small populations?', a: 'Genetic drift: random changes in allele frequencies due to chance events (not selection). More significant in small populations (bottleneck, founder effects). In small populations, an allele can be lost or fixed purely by chance, regardless of whether it is beneficial or harmful. Can lead to speciation in isolated small populations.' },
            ]
          },
          {
            id: 'human-health-disease',
            title: 'Human Health and Disease',
            subtopics: 'Pathogens, Immunity, Innate and adaptive immunity, Vaccines, HIV/AIDS, Cancer, Drug abuse',
            definition: 'Health is a state of complete physical, mental and social well-being. Disease disrupts this state. The immune system defends against pathogens through two complementary systems — innate (fast, non-specific) and adaptive (slow, specific, with memory).',
            content: `<p>Understanding disease and immunity is crucial for medicine. The COVID-19 pandemic highlighted how vaccines (adaptive immunity) are our most powerful tool against infectious disease. Cancer remains a major challenge.</p>
<h4>Types of Immunity</h4>
<p><strong>Innate immunity:</strong> Non-specific, immediate. Physical barriers (skin, mucus), phagocytes (neutrophils, macrophages), natural killer cells, complement system.</p>
<p><strong>Adaptive immunity:</strong> Specific, with memory. B cells (antibodies) and T cells (cell-mediated). Slower (days) but more powerful and has immunological memory.</p>
<h4>Antibodies (Immunoglobulins)</h4>
<p>Y-shaped proteins with antigen-binding sites. 5 classes: IgG (most common, crosses placenta), IgM (first response), IgA (secretions), IgE (allergy), IgD.</p>
<h4>HIV and AIDS</h4>
<p>HIV (retrovirus) infects CD4+ T-helper cells → depletes immune system → AIDS (acquired immunodeficiency syndrome). Transmitted through blood, sexual contact, mother to child. No cure; controlled by antiretroviral therapy (ART).</p>
<h4>Cancer</h4>
<p>Uncontrolled cell proliferation due to mutations in oncogenes or tumour suppressor genes. Types: carcinoma (epithelial), sarcoma (connective tissue), leukaemia (blood). Treated by surgery, radiation, chemotherapy, immunotherapy.</p>
<h4>Vaccines</h4>
<p>Introduce weakened/killed pathogen or antigen → activates adaptive immunity without causing disease → creates immunological memory → protection on future exposure.</p>`,
            qa: [
              { q: 'How does a vaccine work?', a: 'A vaccine introduces a harmless form of a pathogen (weakened live, killed, subunit, or mRNA-encoded antigen). The immune system mounts a response — B cells produce antibodies, T cells activate. Memory B and T cells are created. On future exposure to the actual pathogen, memory cells respond rapidly, preventing disease before symptoms develop.' },
              { q: 'Why does HIV lead to AIDS?', a: 'HIV specifically infects CD4+ T-helper cells (using CCR5/CXCR4 co-receptors). T-helper cells coordinate the entire adaptive immune response. As HIV progressively destroys them (count drops below 200 cells/μL from normal 500-1200), both humoral and cell-mediated immunity collapse. The person becomes susceptible to opportunistic infections (like PCP, tuberculosis) that a healthy immune system would easily control.' },
              { q: 'Distinguish between active and passive immunity.', a: 'Active immunity: body produces own antibodies in response to antigen (vaccine or actual infection). Long-lasting (years to lifelong). Passive immunity: ready-made antibodies transferred from another source (mother\'s IgG across placenta, mother\'s IgA in breast milk, antivenom injection). Immediate protection but temporary (weeks to months) — no immunological memory formed.' },
            ]
          },
          {
            id: 'biotechnology',
            title: 'Biotechnology and Its Applications',
            subtopics: 'Recombinant DNA technology, Restriction enzymes, Cloning vectors, PCR, GM organisms, Gene therapy, Applications in medicine and agriculture',
            definition: 'Biotechnology involves the use of biological systems and living organisms to develop products and processes. Recombinant DNA technology (genetic engineering) allows precise modification of the genetic material of organisms.',
            content: `<p>Biotechnology has transformed medicine (insulin production, monoclonal antibodies, gene therapy), agriculture (GM crops, Bt cotton), and forensic science (DNA fingerprinting). It is the most rapidly expanding field in biology.</p>
<h4>Recombinant DNA Technology (Key Steps)</h4>
<ol>
<li>Isolate the gene of interest (using restriction endonucleases — "molecular scissors").</li>
<li>Insert gene into a vector (plasmid, bacteriophage).</li>
<li>Introduce recombinant vector into host cell (transformation).</li>
<li>Select and grow transformed cells (cloning).</li>
<li>Express the gene → harvest protein product.</li>
</ol>
<h4>Key Tools</h4>
<p><strong>Restriction endonucleases:</strong> Cut DNA at specific palindromic sequences. EcoRI cuts at 5'-GAATTC-3', producing sticky ends.</p>
<p><strong>DNA ligase:</strong> Joins DNA fragments (seals sticky ends). The "molecular glue".</p>
<p><strong>Vectors:</strong> Plasmids (pBR322), bacteriophages, BAC (bacterial artificial chromosomes).</p>
<h4>PCR (Polymerase Chain Reaction)</h4>
<p>Amplifies specific DNA sequences exponentially. Steps: Denaturation (94°C) → Annealing (50-60°C, primers bind) → Extension (72°C, Taq polymerase synthesises). 30 cycles → 10⁹ copies from 1 molecule!</p>
<h4>Applications</h4>
<p>Insulin production (from E. coli), Bt cotton (Bacillus thuringiensis toxin gene → insect resistance), Golden rice (Vitamin A), DNA fingerprinting (forensics, paternity), Gene therapy (SCID treatment).</p>`,
            qa: [
              { q: 'What are restriction enzymes and why are they important in biotechnology?', a: 'Restriction endonucleases are bacterial enzymes that cut double-stranded DNA at specific recognition sequences (palindromic). EcoRI recognises 5\'-GAATTC-3\'. They are the "molecular scissors" of genetic engineering — they allow scientists to cut DNA at precise, predictable positions, producing fragments that can be joined with other DNA. Essential for creating recombinant DNA.' },
              { q: 'How is human insulin produced using recombinant DNA technology?', a: '1. Human insulin gene identified. 2. Gene inserted into plasmid vector using restriction enzymes and DNA ligase. 3. Recombinant plasmid transformed into E. coli. 4. Bacteria multiply, expressing insulin gene, producing human insulin. 5. Insulin extracted, purified. Result: identical to human insulin (previously extracted from pig/cow pancreas — caused immune reactions).' },
              { q: 'What is Bt cotton and how does it work?', a: 'Bt cotton has the cry gene from Bacillus thuringiensis bacterium inserted into its genome. This gene codes for a δ-endotoxin protein. When bollworm larvae eat Bt cotton leaves, the toxin crystallises in their alkaline gut, creating pores in the gut wall → larvae die. Bt cotton reduces need for insecticide sprays by 70-80%. Now grown on ~15 million hectares in India.' },
              { q: 'What is gene therapy and what disease was it first used to treat?', a: 'Gene therapy: introducing functional genes into cells to correct genetic disorders. First successful use: adenosine deaminase (ADA) deficiency causing SCID (severe combined immunodeficiency, "bubble boy disease"). Normal ADA gene was introduced into patient\'s lymphocytes using a retroviral vector. Patient\'s immune system was restored. Still experimental for most conditions.' },
            ]
          },
        ]
      },
    }
  },

  // ── JEE ──────────────────────────────────────────────────────
  'jee': {
    id: 'jee', label: 'JEE', shortLabel: 'JEE',
    board: 'JEE Main + Advanced', emoji: '🏆',
    description: 'IIT-JEE prep — Advanced Physics, Chemistry & Mathematics',
    subjects: {
      physics: {
        id: 'physics', topics: [
          {
            id: 'rotational-motion',
            title: 'Rotational Motion',
            subtopics: 'Moment of inertia, Torque, Angular momentum, Rolling motion, Conservation of angular momentum',
            definition: 'Rotational motion is the motion of a body rotating about a fixed axis. It is governed by analogues of Newton\'s laws, with torque playing the role of force, moment of inertia playing the role of mass, and angular quantities replacing linear ones.',
            content: `<p>Rotational dynamics is essential for JEE. Problems involving spinning tops, rolling cylinders, and figure skaters all require this chapter.</p>
<h4>Key Rotational Quantities</h4>
<div class="formula">Angular displacement (θ), Angular velocity (ω = dθ/dt), Angular acceleration (α = dω/dt)</div>
<h4>Moment of Inertia (I)</h4>
<p>Rotational analogue of mass. I = Σmᵢrᵢ² or I = ∫r²dm. Depends on mass AND distribution about the axis.</p>
<div class="formula">Solid cylinder: I = ½MR² | Hollow cylinder: I = MR² | Solid sphere: I = 2/5 MR²</div>
<h4>Torque and Newton's Second Law for Rotation</h4>
<div class="formula">τ = rF sinθ = Iα</div>
<h4>Angular Momentum</h4>
<div class="formula">L = Iω (conserved when net torque = 0)</div>
<h4>Rolling Without Slipping</h4>
<div class="formula">KE_total = ½mv² + ½Iω² = ½mv²(1 + k²/R²)</div>
<p>where k = radius of gyration (I = mk²)</p>`,
            qa: [
              { q: 'A solid sphere rolls down a frictionless incline of height h. Find speed at bottom.', a: 'Energy: mgh = ½mv² + ½(2/5)mR²(v/R)² = ½mv²(1 + 2/5) = 7mv²/10. v = √(10gh/7).' },
              { q: 'A figure skater spins with arms extended (I₁=3 kg·m²), ω₁=2 rad/s. When she pulls arms in, I₂=1 kg·m². Find ω₂.', a: 'Conservation of angular momentum: I₁ω₁ = I₂ω₂. 3×2 = 1×ω₂ → ω₂ = 6 rad/s.' },
              { q: 'What is the parallel axis theorem?', a: 'I_axis = I_cm + Md², where I_cm is moment of inertia about centre of mass axis, d is distance between the two parallel axes, M is total mass.' },
              { q: 'A torque of 10 N·m is applied to a disc with I = 5 kg·m². Find angular acceleration.', a: 'τ = Iα → α = τ/I = 10/5 = 2 rad/s².' },
            ]
          },
          {
            id: 'waves',
            title: 'Waves and Oscillations',
            subtopics: 'SHM, Wave equation, Superposition, Standing waves, Doppler effect, Resonance',
            definition: 'A wave is a disturbance that transfers energy through a medium (or vacuum) without transferring matter. Simple harmonic motion (SHM) is the building block for understanding all wave phenomena.',
            content: `<p>Waves govern everything from sound and light to quantum mechanics. This chapter connects mechanics to optics and modern physics.</p>
<h4>Simple Harmonic Motion (SHM)</h4>
<div class="formula">x = A sin(ωt + φ) | v = Aω cos(ωt + φ)</div>
<div class="formula">ω = √(k/m) [spring] | ω = √(g/l) [pendulum, small θ]</div>
<div class="formula">T = 2π/ω | Energy = ½kA² (total, constant)</div>
<h4>Wave Equation</h4>
<div class="formula">y = A sin(kx − ωt), where k = 2π/λ, ω = 2πf</div>
<div class="formula">Wave speed v = fλ = ω/k</div>
<h4>Standing Waves</h4>
<p>Superposition of two waves of equal amplitude travelling in opposite directions. Nodes (zero amplitude) and antinodes (max amplitude).</p>
<h4>Doppler Effect</h4>
<div class="formula">f_observed = f_source × (v ± v_observer)/(v ∓ v_source)</div>`,
            qa: [
              { q: 'A spring (k=200 N/m) with 0.5 kg mass. Find time period.', a: 'T = 2π√(m/k) = 2π√(0.5/200) = 2π×0.05 = 0.314 s.' },
              { q: 'A string vibrates with 3 loops in 60 cm. Find wavelength.', a: '3 loops = 3 half-wavelengths. 3λ/2 = 60 cm → λ = 40 cm = 0.4 m.' },
              { q: 'A train sounds 500 Hz horn. If train moves at 30 m/s toward stationary observer (v_sound=340 m/s), what frequency does the observer hear?', a: 'f = 500×340/(340−30) = 500×340/310 = 548.4 Hz (higher pitch as train approaches).' },
            ]
          },
        ]
      },
      chemistry: {
        id: 'chemistry', topics: [
          {
            id: 'organic-chemistry-basic',
            title: 'Basic Principles of Organic Chemistry',
            subtopics: 'IUPAC nomenclature, Inductive effect, Resonance, Hyperconjugation, Reaction mechanisms, Stereochemistry',
            definition: 'Organic chemistry is the study of carbon compounds. Carbon\'s unique ability to form 4 bonds, create chains and rings, and bond to itself makes possible the millions of organic molecules that form the basis of life and industry.',
            content: `<p>Organic chemistry is the core of JEE Chemistry. Master the fundamentals here and the entire subject becomes logical rather than memorisation-based.</p>
<h4>Why Carbon is Special</h4>
<p>Carbon is tetravalent (4 bonds), forms strong C-C bonds, creates chains/branches/rings, and hybridises as sp³, sp², sp.</p>
<h4>IUPAC Nomenclature</h4>
<p>Rules: Find the longest chain (parent chain). Number from end nearest to first substituent/double bond. Name substituents as prefixes. Name parent chain as suffix (ane/ene/yne for single/double/triple bonds).</p>
<h4>Electronic Effects</h4>
<ul>
<li><strong>Inductive effect (I):</strong> Electron displacement along σ-bonds. -I groups (halogens, NO₂) attract electrons. +I groups (alkyl) push electrons.</li>
<li><strong>Resonance:</strong> Delocalisation of π-electrons over conjugated system. Stabilises structure.</li>
<li><strong>Hyperconjugation:</strong> Delocalisation of σ-electrons from C-H bond adjacent to π-bond or carbocation. More H atoms on adjacent carbon → more hyperconjugation → more stability.</li>
</ul>
<h4>Reaction Intermediates</h4>
<p>Carbocation (C+): sp² hybridised, planar, stabilised by +I, hyperconjugation, resonance. Order: 3° > 2° > 1° > methyl.</p>`,
            qa: [
              { q: 'Name the compound: CH₃-CH(CH₃)-CH₂-CH₃', a: 'Longest chain: 4 carbons (butane). Branch at C2: methyl. Name: 2-methylbutane.' },
              { q: 'Arrange in order of stability: CH₃⁺, (CH₃)₂CH⁺, (CH₃)₃C⁺, C₂H₅⁺', a: '(CH₃)₃C⁺ > (CH₃)₂CH⁺ > C₂H₅⁺ > CH₃⁺. Tertiary > Secondary > Primary > Methyl (more +I groups from alkyl → more stable).' },
              { q: 'What is the inductive effect? Is it permanent or temporary?', a: 'Inductive effect is the transmission of electron-withdrawing or electron-donating influence of a group through σ-bonds. It is permanent but decreases with distance from the substituent.' },
              { q: 'Why is benzene unusually stable?', a: 'Benzene has complete delocalisation of 6 π-electrons over the ring (resonance). This aromaticity gives extra stability (resonance energy ≈ 150 kJ/mol). Benzene resists addition reactions that would disrupt this aromaticity.' },
            ]
          },
        ]
      },
      mathematics: {
        id: 'mathematics', topics: [
          {
            id: 'limits-continuity',
            title: 'Limits and Continuity',
            subtopics: 'Definition, Standard limits, L\'Hôpital\'s rule, Continuity, Differentiability',
            definition: 'A limit describes the value a function approaches as the input approaches a certain value. It is the foundation of calculus, enabling precise definition of derivatives and integrals.',
            content: `<p>Limits are the language of calculus. Before Newton and Leibniz could develop calculus, the concept of a limit had to be formalised. Every derivative and integral is fundamentally a limit.</p>
<h4>Formal Definition</h4>
<p>lim[x→a] f(x) = L means: f(x) can be made arbitrarily close to L by taking x sufficiently close to a (but x ≠ a).</p>
<h4>Standard Limits</h4>
<div class="formula">lim[x→0] sinx/x = 1 | lim[x→0] (1−cosx)/x² = 1/2</div>
<div class="formula">lim[x→0] (eˣ−1)/x = 1 | lim[x→0] ln(1+x)/x = 1</div>
<div class="formula">lim[x→∞] (1+1/x)ˣ = e</div>
<h4>Indeterminate Forms and L'Hôpital's Rule</h4>
<p>If limit gives 0/0 or ∞/∞, differentiate numerator and denominator separately:</p>
<div class="formula">lim f(x)/g(x) = lim f'(x)/g'(x) [if L'Hôpital applies]</div>
<h4>Continuity and Differentiability</h4>
<p>f is continuous at x=a if: f(a) exists, lim[x→a] f(x) exists, and lim[x→a] f(x) = f(a).</p>
<p>Differentiability → Continuity (but NOT vice versa). |x| is continuous but not differentiable at x=0.</p>`,
            qa: [
              { q: 'Find lim[x→0] (sin 3x)/(sin 5x)', a: 'Multiply and divide: (sin3x/3x × 3)/(sin5x/5x × 5). As x→0, each sinθ/θ → 1. Limit = 3/5.' },
              { q: 'Find lim[x→∞] (3x²+2x+1)/(5x²−4)', a: 'Divide top and bottom by x²: (3+2/x+1/x²)/(5−4/x²) → 3/5 as x→∞.' },
              { q: 'Evaluate lim[x→0] (eˣ − 1 − x)/x²', a: 'Using Taylor series: eˣ = 1+x+x²/2+... So (eˣ−1−x)/x² = (x²/2+...)/x² → 1/2.' },
              { q: 'Is f(x) = |x−2| continuous and differentiable at x=2?', a: 'Continuous: f(2)=0, lim f(x)=0 ✓. Not differentiable: Left derivative = −1, right derivative = +1. They are unequal → not differentiable at x=2.' },
            ]
          },
        ]
      },
    }
  },

  // ── NEET ─────────────────────────────────────────────────────
  'neet': {
    id: 'neet', label: 'NEET', shortLabel: 'NEET',
    board: 'NEET-UG', emoji: '🩺',
    description: 'Medical entrance — Advanced Biology, Physics & Chemistry',
    subjects: {
      biology: {
        id: 'biology', topics: [
          {
            id: 'human-reproduction',
            title: 'Human Reproduction',
            subtopics: 'Male & female reproductive systems, Gametogenesis, Fertilisation, Embryonic development, Parturition',
            definition: 'Human reproduction is a sexual process involving the formation of male gametes (spermatozoa) and female gametes (ova), their fusion (fertilisation) to form a zygote, and development of the zygote into a new individual.',
            content: `<p>Human reproduction is one of the most important topics for NEET — it combines anatomy, physiology, and cellular biology in a single unit.</p>
<h4>Male Reproductive System</h4>
<p>Testes (in scrotum, 2–3°C below body temperature for sperm production). Spermatogenesis: Spermatogonia → Primary spermatocyte (meiosis I) → Secondary spermatocyte (meiosis II) → Spermatids → Spermatozoa (sperm).</p>
<h4>Female Reproductive System</h4>
<p>Ovaries produce ova and hormones. Oogenesis begins before birth but completes after fertilisation. Primary oocytes are arrested at prophase I from birth.</p>
<h4>Menstrual Cycle (28 days)</h4>
<ul>
<li>Days 1–5: Menstrual phase (shedding of endometrium)</li>
<li>Days 6–13: Follicular phase (FSH → follicle growth, estrogen↑)</li>
<li>Day 14: Ovulation (LH surge → ovum released)</li>
<li>Days 15–28: Luteal phase (corpus luteum → progesterone↑)</li>
</ul>
<h4>Fertilisation and Implantation</h4>
<p>Occurs in the fallopian tube (ampullary-isthmic junction). Zygote undergoes cleavage to form blastocyst, which implants in the uterine wall (day 6–7).</p>
<h4>Pregnancy and Parturition</h4>
<p>HCG (human chorionic gonadotropin) maintains corpus luteum in early pregnancy. Placenta forms and takes over hormone production. Normal gestation: 38–40 weeks. Parturition (birth) triggered by oxytocin.</p>`,
            qa: [
              { q: 'What is the role of LH surge in the menstrual cycle?', a: 'A sharp rise in LH (luteinising hormone) around day 14 triggers ovulation — the release of the mature ovum from the Graafian follicle. LH also converts the ruptured follicle into the corpus luteum.' },
              { q: 'Where does fertilisation normally occur?', a: 'Fertilisation normally occurs in the ampullary-isthmic junction of the fallopian tube (uterine tube), usually in the ampullary region.' },
              { q: 'What is the difference between spermatogenesis and oogenesis?', a: 'Spermatogenesis: produces 4 functional sperms from one spermatocyte, occurs continuously from puberty. Oogenesis: produces 1 functional ovum + 2-3 polar bodies from one oocyte, begins in foetal life and is completed one at a time from puberty.' },
              { q: 'What is the function of human chorionic gonadotropin (HCG)?', a: 'HCG maintains the corpus luteum during early pregnancy, which continues to secrete progesterone to prevent menstruation and maintain the uterine lining. HCG detected in urine is the basis of pregnancy tests.' },
              { q: 'Why are testes located in the scrotum outside the body?', a: 'Spermatogenesis requires a temperature 2–3°C lower than normal body temperature (37°C). The scrotum provides this cooler environment. Cryptorchidism (undescended testes) leads to infertility.' },
            ]
          },
          {
            id: 'photosynthesis-neet',
            title: 'Photosynthesis in Higher Plants',
            subtopics: 'Light reactions, Calvin cycle, C3 vs C4 plants, Photorespiration, Factors affecting rate',
            definition: 'Photosynthesis is the process by which green plants use light energy, water, and carbon dioxide to synthesise glucose and release oxygen. It is the primary source of energy for all life on Earth.',
            content: `<p>Photosynthesis is the engine of the biosphere. NEET tests deep understanding of the biochemistry — both the light-dependent reactions and the Calvin cycle.</p>
<h4>Light Reactions (in Thylakoid membrane)</h4>
<p><strong>Photosystem I (PS I):</strong> P700 reaction centre. Produces NADPH.</p>
<p><strong>Photosystem II (PS II):</strong> P680 reaction centre. Splits water, releases O₂. Starts the electron transport chain.</p>
<div class="formula">2H₂O → 4H⁺ + 4e⁻ + O₂ (photolysis)</div>
<p>Products: ATP (via photophosphorylation) and NADPH (reducing power)</p>
<h4>Calvin Cycle / C3 pathway (in Stroma)</h4>
<ol>
<li><strong>Carboxylation:</strong> CO₂ + RuBP (5C) → 2× 3-phosphoglycerate (3C) via RuBisCO enzyme</li>
<li><strong>Reduction:</strong> 3-PGA reduced to G3P using ATP + NADPH</li>
<li><strong>Regeneration:</strong> G3P regenerates RuBP using ATP</li>
</ol>
<div class="formula">Net: 3CO₂ + 9ATP + 6NADPH → 1 G3P + 9ADP + 6NADP⁺</div>
<h4>C4 Plants (Hatch-Slack pathway)</h4>
<p>In plants like sugarcane, corn: CO₂ first fixed in mesophyll cells as 4C oxaloacetate (by PEP carboxylase). Then transferred to bundle sheath cells for Calvin cycle. Minimises photorespiration. More efficient in hot, dry conditions.</p>`,
            qa: [
              { q: 'Which photosystem is responsible for oxygen evolution?', a: 'Photosystem II (PS II) is responsible for photolysis of water: 2H₂O → 4H⁺ + 4e⁻ + O₂. This releases oxygen as a by-product.' },
              { q: 'What is RuBisCO and why is it important?', a: 'RuBisCO (Ribulose-1,5-bisphosphate carboxylase/oxygenase) is the enzyme that catalyses CO₂ fixation in the Calvin cycle. It is the most abundant enzyme on Earth. It can also react with O₂ (causing photorespiration) which reduces photosynthetic efficiency.' },
              { q: 'Why do C4 plants have higher photosynthetic efficiency in hot climates?', a: 'C4 plants have Kranz anatomy — mesophyll cells (CO₂ fixation using PEP carboxylase, very high affinity for CO₂) surround bundle sheath cells (Calvin cycle). CO₂ is concentrated in bundle sheath, minimising photorespiration. This makes them more efficient at high temperatures.' },
              { q: 'What is the product of the light reactions that is used in the Calvin cycle?', a: 'The light reactions produce ATP and NADPH. These are the assimilatory powers used in the Calvin cycle to reduce CO₂ to glucose.' },
            ]
          },
        ]
      },
      physics: {
        id: 'physics', topics: [
          {
            id: 'radiation',
            title: 'Atoms and Nuclei',
            subtopics: 'Rutherford model, Bohr model, Hydrogen spectrum, Radioactivity, Nuclear reactions, Half-life',
            definition: 'Atomic and nuclear physics studies the structure of atoms and their nuclei. Radioactivity — the spontaneous emission of radiation from unstable nuclei — is central to both nuclear medicine and energy generation.',
            content: `<p>Nuclear physics connects to medicine (X-rays, cancer treatment, PET scans) and is tested significantly in NEET Physics.</p>
<h4>Rutherford's Model</h4>
<p>Gold foil experiment: Most α-particles passed through; a few deflected; very few bounced back. Conclusion: Atom has a tiny, dense, positively charged nucleus. Most of atom is empty space.</p>
<h4>Bohr's Model</h4>
<div class="formula">rₙ = 0.529 × n²/Z Å | Eₙ = −13.6 × Z²/n² eV</div>
<p>Hydrogen spectrum series: Lyman (UV, n→1), Balmer (visible, n→2), Paschen (IR, n→3)</p>
<h4>Radioactivity</h4>
<ul>
<li><strong>α-decay:</strong> Emits ⁴₂He. Atomic number decreases by 2, mass by 4.</li>
<li><strong>β-decay:</strong> Emits electron (β⁻) or positron (β⁺). Atomic number changes by ±1.</li>
<li><strong>γ-radiation:</strong> High-energy photons. No change in atomic/mass number.</li>
</ul>
<h4>Radioactive Decay Law and Half-life</h4>
<div class="formula">N = N₀ e^(−λt) | t₁/₂ = 0.693/λ</div>
<div class="formula">After n half-lives: N = N₀/2ⁿ</div>`,
            qa: [
              { q: 'What was the significance of Rutherford\'s gold foil experiment?', a: 'It disproved Thomson\'s "plum pudding" model. The large-angle scattering of α-particles showed the atom has a tiny, dense, positively charged nucleus. The nuclear model of the atom was established.' },
              { q: 'Find the energy of photon emitted when hydrogen electron jumps from n=3 to n=2.', a: 'E = 13.6(1/n₁² − 1/n₂²) = 13.6(1/4 − 1/9) = 13.6(5/36) = 1.89 eV. (Red line of Balmer series)' },
              { q: 'A radioactive element has a half-life of 30 minutes. What fraction remains after 2 hours?', a: '2 hours = 120 min. Number of half-lives = 120/30 = 4. Fraction remaining = (1/2)⁴ = 1/16.' },
              { q: 'What is meant by mass defect and binding energy?', a: 'Mass defect: actual mass of nucleus < sum of masses of individual protons and neutrons. The "missing mass" (Δm) is converted to binding energy by E=Δmc². Higher binding energy per nucleon → more stable nucleus.' },
            ]
          },
        ]
      },
    }
  },
};

// ── Helper functions ───────────────────────────────────────────

export function getClass(classId) {
  return CURRICULUM[classId] || null;
}

export function getSubject(classId, subjectId) {
  const cls = getClass(classId);
  if (!cls) return null;
  return cls.subjects[subjectId] || null;
}

export function getTopic(classId, subjectId, topicId) {
  const subject = getSubject(classId, subjectId);
  if (!subject) return null;
  return subject.topics.find(t => t.id === topicId) || null;
}

export function getAllClasses() {
  return Object.values(CURRICULUM);
}

export function getSubjectColor(subjectId) {
  const map = {
    mathematics: 'math', physics: 'physics', chemistry: 'chemistry',
    biology: 'biology', english: 'english', science: 'chemistry',
    social: 'social', history: 'history', geography: 'geography',
    civics: 'civics', economics: 'economics',
  };
  return `subject-${map[subjectId] || 'default'}`;
}

export const NAV_CLASSES = [
  { id: 'class-6', label: 'Class 6' },
  { id: 'class-7', label: 'Class 7' },
  { id: 'class-8', label: 'Class 8' },
  { id: 'class-9', label: 'Class 9' },
  { id: 'class-10', label: 'Class 10' },
  { id: 'class-11', label: 'Class 11' },
  { id: 'class-12', label: 'Class 12' },
];

export const NAV_COMPETITIVE = [
  { id: 'jee', label: 'JEE Main & Advanced', icon: '🏆' },
  { id: 'neet', label: 'NEET-UG', icon: '🩺' },
];

export const NAV_IMPORTANT = [
  { id: 'class-10', label: 'Class 10 Boards', icon: '📋' },
  { id: 'class-12', label: 'Class 12 Boards', icon: '🎓' },
  { id: 'jee', label: 'JEE Crash Course', icon: '⚡' },
  { id: 'neet', label: 'NEET Crash Course', icon: '🩺' },
];

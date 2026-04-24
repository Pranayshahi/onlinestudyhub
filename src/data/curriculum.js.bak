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

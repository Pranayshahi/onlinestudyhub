import React, { useState, useEffect, useRef } from 'react';

const MOLECULES = {
  ch4: { name: 'Methane (CH₄)', geometry: 'Tetrahedral (109.5°)', hybridization: 'sp³', atoms: [
    { element: 'C', color: '#1e293b', radius: 18, pos: [0, 0, 0] },
    { element: 'H', color: '#38bdf8', radius: 10, pos: [0, 32, 22] },
    { element: 'H', color: '#38bdf8', radius: 10, pos: [30, -16, 22] },
    { element: 'H', color: '#38bdf8', radius: 10, pos: [-30, -16, 22] },
    { element: 'H', color: '#38bdf8', radius: 10, pos: [0, 0, -36] },
  ]},
  h2o: { name: 'Water (H₂O)', geometry: 'Bent / V-shaped (104.5°)', hybridization: 'sp³', atoms: [
    { element: 'O', color: '#ef4444', radius: 20, pos: [0, 0, 0] },
    { element: 'H', color: '#38bdf8', radius: 10, pos: [-28, 22, 0] },
    { element: 'H', color: '#38bdf8', radius: 10, pos: [28, 22, 0] },
  ]},
  c6h6: { name: 'Benzene Ring (C₆H₆)', geometry: 'Trigonal Planar (120°)', hybridization: 'sp²', atoms: [
    { element: 'C', color: '#1e293b', radius: 14, pos: [0, -32, 0] },
    { element: 'C', color: '#1e293b', radius: 14, pos: [28, -16, 0] },
    { element: 'C', color: '#1e293b', radius: 14, pos: [28, 16, 0] },
    { element: 'C', color: '#1e293b', radius: 14, pos: [0, 32, 0] },
    { element: 'C', color: '#1e293b', radius: 14, pos: [-28, 16, 0] },
    { element: 'C', color: '#1e293b', radius: 14, pos: [-28, -16, 0] },
  ]}
};

export default function VirtualScienceLab({ defaultLab = 'optics' }) {
  const [activeLab, setActiveLab] = useState(defaultLab); // optics | projectile | pendulum | titration | 3d-molecule | phet

  // 1. Optics state
  const [focalLength, setFocalLength] = useState(60);
  const [objectDist, setObjectDist] = useState(120);
  const [objectHeight, setObjectHeight] = useState(40);

  // 2. Projectile state
  const [velocity, setVelocity] = useState(50);
  const [angle, setAngle] = useState(45);
  const [gravity, setGravity] = useState(9.8);

  // 3. Pendulum state
  const [length, setLength] = useState(1.5);
  const [pendulumGravity, setPendulumGravity] = useState(9.8);

  // 4. Titration state
  const [addedBase, setAddedBase] = useState(0); // mL NaOH added
  const [titrationActive, setTitrationActive] = useState(false);

  // 5. 3D Molecule state
  const [selectedMolecule, setSelectedMolecule] = useState('ch4');
  const [rotationAngle, setRotationAngle] = useState(0);

  // Canvas Refs
  const opticsCanvasRef = useRef(null);
  const projectileCanvasRef = useRef(null);
  const pendulumCanvasRef = useRef(null);
  const moleculeCanvasRef = useRef(null);

  // Optics Ray Tracing Render
  useEffect(() => {
    if (activeLab !== 'optics') return;
    const canvas = opticsCanvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    const w = canvas.width;
    const h = canvas.height;
    const centerY = h / 2;
    const centerX = w / 2;

    ctx.clearRect(0, 0, w, h);

    // Optical Axis
    ctx.strokeStyle = '#94a3b8';
    ctx.lineWidth = 1;
    ctx.beginPath();
    ctx.moveTo(0, centerY);
    ctx.lineTo(w, centerY);
    ctx.stroke();

    // Convex Lens Center
    ctx.strokeStyle = '#6366f1';
    ctx.lineWidth = 3;
    ctx.beginPath();
    ctx.ellipse(centerX, centerY, 8, 70, 0, 0, 2 * Math.PI);
    ctx.stroke();
    ctx.fillStyle = 'rgba(99,102,241,0.15)';
    ctx.fill();

    // Foci F1 and F2
    const fX1 = centerX - focalLength;
    const fX2 = centerX + focalLength;
    ctx.fillStyle = '#ef4444';
    ctx.beginPath(); ctx.arc(fX1, centerY, 4, 0, 2 * Math.PI); ctx.fill();
    ctx.beginPath(); ctx.arc(fX2, centerY, 4, 0, 2 * Math.PI); ctx.fill();
    ctx.fillStyle = '#fff';
    ctx.font = '10px Nunito';
    ctx.fillText('F1', fX1 - 6, centerY + 16);
    ctx.fillText('F2', fX2 - 6, centerY + 16);

    // Object
    const objX = centerX - objectDist;
    const objY = centerY - objectHeight;
    ctx.strokeStyle = '#38bdf8';
    ctx.lineWidth = 3;
    ctx.beginPath(); ctx.moveTo(objX, centerY); ctx.lineTo(objX, objY); ctx.stroke();
    // Arrowhead
    ctx.fillStyle = '#38bdf8';
    ctx.beginPath(); ctx.moveTo(objX - 5, objY + 5); ctx.lineTo(objX, objY); ctx.lineTo(objX + 5, objY + 5); ctx.fill();

    // Calculate Image distance v (1/f = 1/v - 1/u -> 1/v = 1/f + 1/u)
    // Here u is negative in sign convention (-objectDist), f is positive (+focalLength)
    const u = -objectDist;
    const f = focalLength;
    const v = (f * u) / (u + f);
    const m = v / u;
    const imgHeight = m * objectHeight;
    const imgX = centerX + v;
    const imgY = centerY + imgHeight;

    // Image Arrow
    ctx.strokeStyle = '#f59e0b';
    ctx.lineWidth = 3;
    ctx.beginPath(); ctx.moveTo(imgX, centerY); ctx.lineTo(imgX, imgY); ctx.stroke();

    // Parallel Ray 1 -> Lens -> Focus F2
    ctx.strokeStyle = 'rgba(239, 68, 68, 0.7)';
    ctx.lineWidth = 1.5;
    ctx.setLineDash([4, 4]);
    ctx.beginPath(); ctx.moveTo(objX, objY); ctx.lineTo(centerX, objY); ctx.lineTo(imgX, imgY); ctx.stroke();
    ctx.setLineDash([]);

    // Ray 2 -> Optical Center
    ctx.strokeStyle = 'rgba(56, 189, 248, 0.7)';
    ctx.beginPath(); ctx.moveTo(objX, objY); ctx.lineTo(imgX, imgY); ctx.stroke();
  }, [activeLab, focalLength, objectDist, objectHeight]);

  // Projectile Motion Render
  useEffect(() => {
    if (activeLab !== 'projectile') return;
    const canvas = projectileCanvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    const w = canvas.width;
    const h = canvas.height;

    ctx.clearRect(0, 0, w, h);

    // Ground
    ctx.strokeStyle = '#475569';
    ctx.lineWidth = 2;
    ctx.beginPath(); ctx.moveTo(20, h - 30); ctx.lineTo(w - 20, h - 30); ctx.stroke();

    const rad = (angle * Math.PI) / 180;
    const vx = velocity * Math.cos(rad);
    const vy = velocity * Math.sin(rad);
    const flightTime = (2 * vy) / gravity;

    ctx.strokeStyle = '#38bdf8';
    ctx.lineWidth = 2.5;
    ctx.beginPath();
    ctx.moveTo(30, h - 30);

    for (let t = 0; t <= flightTime; t += 0.05) {
      const x = 30 + vx * t * 3.5;
      const y = (h - 30) - (vy * t - 0.5 * gravity * t * t) * 3.5;
      if (x < w - 20 && y <= h - 30) {
        ctx.lineTo(x, y);
      }
    }
  }, [activeLab, velocity, angle, gravity]);

  // Pendulum Oscillation Render
  const [pendulumAngle, setPendulumAngle] = useState(0);
  useEffect(() => {
    if (activeLab !== 'pendulum') return;
    const canvas = pendulumCanvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    const w = canvas.width;
    const h = canvas.height;
    const pivotX = w / 2;
    const pivotY = 20;

    let time = 0;
    const timer = setInterval(() => {
      time += 0.05;
      const omega = Math.sqrt(pendulumGravity / length);
      const theta = 0.4 * Math.cos(omega * time);
      setPendulumAngle(theta);

      ctx.clearRect(0, 0, w, h);

      // Pivot Base
      ctx.fillStyle = '#64748b';
      ctx.fillRect(pivotX - 40, 10, 80, 10);

      // String
      const bobX = pivotX + (length * 100) * Math.sin(theta);
      const bobY = pivotY + (length * 100) * Math.cos(theta);

      ctx.strokeStyle = '#38bdf8';
      ctx.lineWidth = 2;
      ctx.beginPath(); ctx.moveTo(pivotX, pivotY + 5); ctx.lineTo(bobX, bobY); ctx.stroke();

      // Bob
      ctx.fillStyle = '#ef4444';
      ctx.beginPath(); ctx.arc(bobX, bobY, 18, 0, 2 * Math.PI); ctx.fill();
      ctx.strokeStyle = '#fff'; ctx.lineWidth = 2; ctx.stroke();
    }, 30);

    return () => clearInterval(timer);
  }, [activeLab, length, pendulumGravity]);

  // 3D Molecule Spin Render
  useEffect(() => {
    if (activeLab !== '3d-molecule') return;
    const canvas = moleculeCanvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    const w = canvas.width;
    const h = canvas.height;

    const timer = setInterval(() => setRotationAngle(a => (a + 0.03) % (2 * Math.PI)), 30);

    const mol = MOLECULES[selectedMolecule];
    ctx.clearRect(0, 0, w, h);

    const cosA = Math.cos(rotationAngle);
    const sinA = Math.sin(rotationAngle);

    // Draw Bonds
    mol.atoms.forEach((atom, i) => {
      if (i === 0) return;
      const x1 = w / 2;
      const y1 = h / 2;
      const rx = atom.pos[0] * cosA - atom.pos[2] * sinA;
      const ry = atom.pos[1];
      const x2 = w / 2 + rx;
      const y2 = h / 2 + ry;

      ctx.strokeStyle = 'rgba(255,255,255,0.4)';
      ctx.lineWidth = 4;
      ctx.beginPath(); ctx.moveTo(x1, y1); ctx.lineTo(x2, y2); ctx.stroke();
    });

    // Draw Atoms
    mol.atoms.forEach((atom) => {
      const rx = atom.pos[0] * cosA - atom.pos[2] * sinA;
      const ry = atom.pos[1];
      const x = w / 2 + rx;
      const y = h / 2 + ry;

      ctx.fillStyle = atom.color;
      ctx.beginPath(); ctx.arc(x, y, atom.radius, 0, 2 * Math.PI); ctx.fill();
      ctx.strokeStyle = '#fff';
      ctx.lineWidth = 1.5;
      ctx.stroke();

      ctx.fillStyle = '#fff';
      ctx.font = '900 10px Nunito';
      ctx.textAlign = 'center';
      ctx.fillText(atom.element, x, y + 3);
    });

    return () => clearInterval(timer);
  }, [activeLab, selectedMolecule, rotationAngle]);

  // Titration pH Calculation
  const pH = Math.min(14, Number((1.5 + addedBase * 0.45).toFixed(1)));
  const indicatorColor = pH < 7 ? 'rgba(244, 244, 245, 0.6)' : `rgba(236, 72, 153, ${Math.min(0.85, (pH - 7) * 0.2)})`;

  return (
    <section style={{ padding: '2.5rem 0', background: 'linear-gradient(180deg, #090d16 0%, #1e1b4b 100%)', color: '#fff', borderRadius: 24, margin: '2rem 0' }}>
      <div className="container">
        {/* Header */}
        <div style={{ textAlign: 'center', maxWidth: 820, margin: '0 auto 1.5rem' }}>
          <span style={{ background: 'rgba(16,185,129,0.2)', border: '1px solid rgba(110,231,183,0.3)', color: '#6ee7b7', fontSize: '.75rem', fontWeight: 900, padding: '.35rem 1rem', borderRadius: 20, textTransform: 'uppercase', letterSpacing: '0.5px' }}>
            🧪 Interactive 3D Virtual Science Lab
          </span>
          <h2 style={{ fontFamily: 'Nunito', fontWeight: 900, fontSize: 'clamp(1.6rem, 3.2vw, 2.2rem)', margin: '.6rem 0 .4rem', color: '#fff' }}>
            Hands-on Physics &amp; Chemistry Interactive Simulations
          </h2>
          <p style={{ fontSize: '.95rem', color: 'rgba(255,255,255,0.75)', margin: 0 }}>
            Adjust real-time parameters, test governing laws, and observe 3D visual phenomena directly.
          </p>
        </div>

        {/* Lab Module Selector Buttons */}
        <div style={{ display: 'flex', gap: '.5rem', flexWrap: 'wrap', justifyContent: 'center', marginBottom: '1.5rem' }}>
          {[
            { id: 'optics',       label: '🔬 Ray Optics Lens', icon: '🔍' },
            { id: 'projectile',   label: '🚀 Projectile Launcher', icon: '🎯' },
            { id: 'pendulum',     label: '⏱️ Simple Pendulum', icon: '⚖️' },
            { id: '3d-molecule',   label: '⚛️ 3D Molecular Viewer', icon: '🧬' },
            { id: 'titration',    label: '🧪 Acid-Base Titration', icon: '⚗️' },
            { id: 'phet',         label: '🌐 PhET Interactive Hub', icon: '🌍' },
          ].map(tab => (
            <button
              key={tab.id}
              onClick={() => setActiveLab(tab.id)}
              style={{
                background: activeLab === tab.id ? 'linear-gradient(135deg, #6366f1, #4f46e5)' : 'rgba(255,255,255,0.08)',
                border: activeLab === tab.id ? '1px solid #a5b4fc' : '1px solid rgba(255,255,255,0.15)',
                color: '#fff',
                borderRadius: 14,
                padding: '.6rem 1.1rem',
                fontSize: '.85rem',
                fontWeight: 900,
                cursor: 'pointer',
                transition: 'all 0.2s'
              }}
            >
              {tab.label}
            </button>
          ))}
        </div>

        <div style={{ background: 'rgba(255,255,255,0.05)', backdropFilter: 'blur(16px)', border: '1.5px solid rgba(255,255,255,0.15)', borderRadius: 24, padding: '1.5rem', boxShadow: '0 16px 40px rgba(0,0,0,0.35)' }}>
          {/* LAB 1: RAY OPTICS */}
          {activeLab === 'optics' && (
            <div>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem', marginBottom: '1rem' }}>
                <h4 style={{ fontFamily: 'Nunito', fontWeight: 900, color: '#fff', margin: 0, fontSize: '1.1rem' }}>
                  🔬 Convex Lens Ray Optics Simulator
                </h4>
                <span style={{ fontSize: '.8rem', color: '#a5b4fc', background: 'rgba(99,102,241,0.2)', padding: '.3rem .75rem', borderRadius: 10 }}>
                  Lens Formula: 1/f = 1/v - 1/u
                </span>
              </div>

              <canvas ref={opticsCanvasRef} width={760} height={240} style={{ width: '100%', height: 'auto', background: '#0f172a', borderRadius: 16, border: '1px solid rgba(255,255,255,0.1)' }} />

              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1rem', marginTop: '1.25rem' }}>
                <div>
                  <label style={{ fontSize: '.8rem', fontWeight: 800, color: '#c7d2fe' }}>Focal Length (f): {focalLength} mm</label>
                  <input type="range" min="30" max="100" value={focalLength} onChange={e => setFocalLength(Number(e.target.value))} style={{ width: '100%', marginTop: '.4rem' }} />
                </div>
                <div>
                  <label style={{ fontSize: '.8rem', fontWeight: 800, color: '#c7d2fe' }}>Object Distance (u): {objectDist} mm</label>
                  <input type="range" min="40" max="220" value={objectDist} onChange={e => setObjectDist(Number(e.target.value))} style={{ width: '100%', marginTop: '.4rem' }} />
                </div>
                <div>
                  <label style={{ fontSize: '.8rem', fontWeight: 800, color: '#c7d2fe' }}>Object Height (h): {objectHeight} mm</label>
                  <input type="range" min="20" max="70" value={objectHeight} onChange={e => setObjectHeight(Number(e.target.value))} style={{ width: '100%', marginTop: '.4rem' }} />
                </div>
              </div>
            </div>
          )}

          {/* LAB 2: PROJECTILE LAUNCHER */}
          {activeLab === 'projectile' && (
            <div>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem', marginBottom: '1rem' }}>
                <h4 style={{ fontFamily: 'Nunito', fontWeight: 900, color: '#fff', margin: 0, fontSize: '1.1rem' }}>
                  🚀 Projectile Motion Trajectory Simulator
                </h4>
                <span style={{ fontSize: '.8rem', color: '#fef08a', background: 'rgba(245,158,11,0.2)', padding: '.3rem .75rem', borderRadius: 10 }}>
                  Range R = (v₀² sin 2θ) / g
                </span>
              </div>

              <canvas ref={projectileCanvasRef} width={760} height={240} style={{ width: '100%', height: 'auto', background: '#0f172a', borderRadius: 16, border: '1px solid rgba(255,255,255,0.1)' }} />

              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1rem', marginTop: '1.25rem' }}>
                <div>
                  <label style={{ fontSize: '.8rem', fontWeight: 800, color: '#fef08a' }}>Initial Velocity (v₀): {velocity} m/s</label>
                  <input type="range" min="10" max="90" value={velocity} onChange={e => setVelocity(Number(e.target.value))} style={{ width: '100%', marginTop: '.4rem' }} />
                </div>
                <div>
                  <label style={{ fontSize: '.8rem', fontWeight: 800, color: '#fef08a' }}>Launch Angle (θ): {angle}°</label>
                  <input type="range" min="15" max="75" value={angle} onChange={e => setAngle(Number(e.target.value))} style={{ width: '100%', marginTop: '.4rem' }} />
                </div>
              </div>
            </div>
          )}

          {/* LAB 3: SIMPLE PENDULUM FREQUENCY ADJUSTER */}
          {activeLab === 'pendulum' && (
            <div>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem', marginBottom: '1rem' }}>
                <h4 style={{ fontFamily: 'Nunito', fontWeight: 900, color: '#fff', margin: 0, fontSize: '1.1rem' }}>
                  ⏱️ Simple Pendulum Harmonic Oscillator
                </h4>
                <span style={{ fontSize: '.8rem', color: '#6ee7b7', background: 'rgba(16,185,129,0.2)', padding: '.3rem .75rem', borderRadius: 10 }}>
                  Time Period T = 2π √(L / g) = {(2 * Math.PI * Math.sqrt(length / pendulumGravity)).toFixed(2)}s
                </span>
              </div>

              <canvas ref={pendulumCanvasRef} width={760} height={220} style={{ width: '100%', height: 'auto', background: '#0f172a', borderRadius: 16, border: '1px solid rgba(255,255,255,0.1)' }} />

              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1rem', marginTop: '1.25rem' }}>
                <div>
                  <label style={{ fontSize: '.8rem', fontWeight: 800, color: '#6ee7b7' }}>Pendulum Length (L): {length} m</label>
                  <input type="range" min="0.5" max="2.5" step="0.1" value={length} onChange={e => setLength(Number(e.target.value))} style={{ width: '100%', marginTop: '.4rem' }} />
                </div>
                <div>
                  <label style={{ fontSize: '.8rem', fontWeight: 800, color: '#6ee7b7' }}>Gravity (g): {pendulumGravity} m/s²</label>
                  <input type="range" min="1.6" max="25" step="0.2" value={pendulumGravity} onChange={e => setPendulumGravity(Number(e.target.value))} style={{ width: '100%', marginTop: '.4rem' }} />
                </div>
              </div>
            </div>
          )}

          {/* LAB 3: 3D MOLECULE VIEWER */}
          {activeLab === '3d-molecule' && (
            <div>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem', marginBottom: '1rem' }}>
                <h4 style={{ fontFamily: 'Nunito', fontWeight: 900, color: '#fff', margin: 0, fontSize: '1.1rem' }}>
                  ⚛️ 3D Molecular Geometry &amp; Bond Angle Viewer
                </h4>
                <div style={{ display: 'flex', gap: '.4rem' }}>
                  {Object.keys(MOLECULES).map(key => (
                    <button
                      key={key}
                      onClick={() => setSelectedMolecule(key)}
                      style={{ background: selectedMolecule === key ? '#4f46e5' : 'rgba(255,255,255,0.1)', border: 'none', color: '#fff', borderRadius: 8, padding: '.35rem .75rem', fontSize: '.78rem', fontWeight: 800, cursor: 'pointer' }}
                    >
                      {MOLECULES[key].name}
                    </button>
                  ))}
                </div>
              </div>

              <canvas ref={moleculeCanvasRef} width={760} height={240} style={{ width: '100%', height: 'auto', background: '#0f172a', borderRadius: 16, border: '1px solid rgba(255,255,255,0.1)' }} />

              <div style={{ marginTop: '1rem', background: 'rgba(99,102,241,0.15)', border: '1px solid rgba(165,180,252,0.25)', padding: '1rem', borderRadius: 14, display: 'flex', justifyContent: 'space-around', flexWrap: 'wrap', gap: '1rem' }}>
                <div><strong>Geometry:</strong> {MOLECULES[selectedMolecule].geometry}</div>
                <div><strong>Hybridization:</strong> {MOLECULES[selectedMolecule].hybridization}</div>
              </div>
            </div>
          )}

          {/* LAB 4: TITRATION SIMULATOR */}
          {activeLab === 'titration' && (
            <div style={{ textAlign: 'center' }}>
              <h4 style={{ fontFamily: 'Nunito', fontWeight: 900, color: '#fff', margin: '0 0 1rem', fontSize: '1.1rem' }}>
                🧪 Acid-Base Titration (HCl + NaOH)
              </h4>

              <div style={{ width: 140, height: 180, margin: '0 auto', background: indicatorColor, border: '3px solid #cbd5e1', borderTop: 'none', borderRadius: '0 0 24px 24px', position: 'relative', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 8px 24px rgba(0,0,0,0.3)', transition: 'background 0.3s' }}>
                <span style={{ fontWeight: 900, fontSize: '1.4rem', color: pH > 7 ? '#fff' : '#1e293b' }}>
                  pH {pH}
                </span>
              </div>

              <div style={{ marginTop: '1.25rem' }}>
                <p style={{ fontSize: '.88rem', color: 'rgba(255,255,255,0.8)', marginBottom: '.75rem' }}>
                  Added NaOH: <strong>{addedBase} mL</strong> • Indicator: Phenolphthalein (Pink at pH &gt; 7)
                </p>
                <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center' }}>
                  <button
                    onClick={() => setAddedBase(b => Math.min(25, b + 1))}
                    className="btn btn-primary"
                    style={{ padding: '.6rem 1.5rem', borderRadius: 12, fontWeight: 900 }}
                  >
                    💧 Drip 1 mL NaOH
                  </button>
                  <button
                    onClick={() => setAddedBase(0)}
                    className="btn btn-secondary"
                    style={{ padding: '.6rem 1.5rem', borderRadius: 12, fontWeight: 800 }}
                  >
                    🔄 Reset Flask
                  </button>
                </div>
              </div>
            </div>
          )}

          {/* LAB 5: PHET INTERACTIVE HUB */}
          {activeLab === 'phet' && (
            <div>
              <h4 style={{ fontFamily: 'Nunito', fontWeight: 900, color: '#fff', margin: '0 0 .75rem', fontSize: '1.1rem' }}>
                🌐 PhET Interactive Science Simulation Hub
              </h4>
              <p style={{ fontSize: '.85rem', color: 'rgba(255,255,255,0.75)', marginBottom: '1rem' }}>
                Official University of Colorado Boulder interactive HTML5 physics &amp; chemistry simulations.
              </p>
              <div style={{ borderRadius: 16, overflow: 'hidden', border: '1px solid rgba(255,255,255,0.15)' }}>
                <iframe
                  src="https://phet.colorado.edu/sims/html/bending-light/latest/bending-light_all.html"
                  title="PhET Bending Light Simulation"
                  style={{ width: '100%', height: 420, border: 'none' }}
                  allowFullScreen
                />
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

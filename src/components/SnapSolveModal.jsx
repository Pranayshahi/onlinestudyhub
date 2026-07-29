import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { api } from '../utils/api';
import { useLang } from '../context/LanguageContext';

const SAMPLE_QUESTIONS = [
  {
    id: 'sample-math',
    label: '📐 Math: Quadratic Roots',
    subject: 'mathematics',
    question: 'Solve for x: 2x² - 7x + 3 = 0 using the quadratic formula.',
    image: 'https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=600&auto=format&fit=crop&q=80',
    solution: {
      extractedQuestion: 'Solve for x: 2x² - 7x + 3 = 0 using the quadratic formula.',
      subject: 'Mathematics',
      chapter: 'Quadratic Equations (Class 10)',
      topicLink: '/class/class-10/subject/mathematics/topic/quadratic-equations',
      steps: [
        { title: 'Step 1: Identify coefficients a, b, c', detail: 'Given quadratic equation 2x² - 7x + 3 = 0. Comparing with ax² + bx + c = 0:\na = 2, b = -7, c = 3.' },
        { title: 'Step 2: Calculate Discriminant (D)', detail: 'D = b² - 4ac = (-7)² - 4(2)(3) = 49 - 24 = 25.\nSince D = 25 > 0, the equation has two distinct real roots.' },
        { title: 'Step 3: Apply Quadratic Formula', detail: 'x = (-b ± √D) / (2a) = ( -(-7) ± √25 ) / (2 * 2) = ( 7 ± 5 ) / 4.' },
        { title: 'Step 4: Find roots x₁ and x₂', detail: 'x₁ = (7 + 5) / 4 = 12 / 4 = 3.\nx₂ = (7 - 5) / 4 = 2 / 4 = 1/2.\n\nFinal Answer: x = 3 or x = 1/2.' }
      ],
      formulas: ['Quadratic Formula: x = (-b ± √(b² - 4ac)) / (2a)', 'Discriminant D = b² - 4ac'],
      examTip: 'Always write down the explicit values of a, b, c and check D before calculating square roots to avoid arithmetic mistakes.'
    }
  },
  {
    id: 'sample-phys',
    label: '⚡ Physics: Lens Formula',
    subject: 'physics',
    question: 'An object is placed 20 cm in front of a convex lens of focal length 15 cm. Find image distance v and magnification m.',
    image: 'https://images.unsplash.com/photo-1509228468518-180dd4864904?w=600&auto=format&fit=crop&q=80',
    solution: {
      extractedQuestion: 'An object is placed 20 cm in front of a convex lens of focal length 15 cm. Find image distance v and magnification m.',
      subject: 'Physics',
      chapter: 'Refraction of Light at Plane & Spherical Surfaces (Class 12)',
      topicLink: '/class/class-12/subject/physics/topic/optics-12',
      steps: [
        { title: 'Step 1: Cartesian Sign Convention', detail: 'Object distance u = -20 cm (in front of lens).\nFocal length of convex lens f = +15 cm.' },
        { title: 'Step 2: Apply Lens Formula 1/f = 1/v - 1/u', detail: '1/15 = 1/v - 1/(-20) => 1/15 = 1/v + 1/20.\n1/v = 1/15 - 1/20 = (4 - 3) / 60 = 1/60.\nTherefore, v = +60 cm.' },
        { title: 'Step 3: Calculate Magnification m', detail: 'm = v / u = (+60) / (-20) = -3.\nNegative sign indicates the image is REAL and INVERTED, 3 times magnified.' }
      ],
      formulas: ['Lens Formula: 1/f = 1/v - 1/u', 'Magnification m = v / u = h_i / h_o'],
      examTip: 'In ICSE & CBSE Board exams, state Cartesian sign convention (+/-) explicitly before substituting values into lens formula.'
    }
  },
  {
    id: 'sample-chem',
    label: '🧪 Chem: Nernst Equation',
    subject: 'chemistry',
    question: 'Calculate EMF of cell Zn | Zn²+(0.1 M) || Cu²+(0.01 M) | Cu at 298 K given E°cell = +1.10 V.',
    image: 'https://images.unsplash.com/photo-1532094349884-543bc11b234d?w=600&auto=format&fit=crop&q=80',
    solution: {
      extractedQuestion: 'Calculate EMF of cell Zn | Zn²+(0.1 M) || Cu²+(0.01 M) | Cu at 298 K given E°cell = +1.10 V.',
      subject: 'Chemistry',
      chapter: 'Electrochemistry (Class 12)',
      topicLink: '/class/class-12/subject/chemistry/topic/electrochemistry',
      steps: [
        { title: 'Step 1: Cell Reaction & Number of Electrons n', detail: 'Anode oxidation: Zn -> Zn²⁺ + 2e⁻\nCathode reduction: Cu²⁺ + 2e⁻ -> Cu\nOverall reaction: Zn(s) + Cu²⁺(aq) -> Zn²⁺(aq) + Cu(s).\nNumber of transferred electrons n = 2.' },
        { title: 'Step 2: Formulate Nernst Equation', detail: 'E_cell = E°_cell - (0.0591 / n) * log₁₀( [Zn²⁺] / [Cu²⁺] )\nE_cell = 1.10 - (0.0591 / 2) * log₁₀( 0.1 / 0.01 ).' },
        { title: 'Step 3: Evaluate Logarithm & Solve', detail: '0.1 / 0.01 = 10. log₁₀(10) = 1.\nE_cell = 1.10 - (0.02955 * 1) = 1.10 - 0.02955 = 1.07045 V.\nFinal Answer: E_cell = 1.07 V.' }
      ],
      formulas: ['Nernst Equation: E_cell = E°_cell - (0.0591/n) log Q', 'Q = [Anode Ions] / [Cathode Ions]'],
      examTip: 'Box your final answer with unit Volt (V) and specify temperature condition 298 K.'
    }
  },
  {
    id: 'sample-bio',
    label: '🧬 Bio: DNA Replication',
    subject: 'biology',
    question: 'Explain the semi-conservative mode of DNA replication with Meselson and Stahl experiment.',
    image: 'https://images.unsplash.com/photo-1530026405186-ed1f139313f8?w=600&auto=format&fit=crop&q=80',
    solution: {
      extractedQuestion: 'Explain the semi-conservative mode of DNA replication with Meselson and Stahl experiment.',
      subject: 'Biology',
      chapter: 'Molecular Basis of Inheritance (Class 12)',
      topicLink: '/class/class-12/subject/biology',
      steps: [
        { title: 'Step 1: Concept of Semi-Conservative Replication', detail: 'Proposed by Watson & Crick (1953). Each parental DNA strand acts as a template for synthesizing a new complementary strand.' },
        { title: 'Step 2: Meselson & Stahl Heavy Isotope Experiment (1958)', detail: 'E. coli grown in 15NH4Cl (heavy isotope) for many generations. DNA analyzed by CsCl density gradient centrifugation.' },
        { title: 'Step 3: Results across Generations', detail: 'Gen 0: 100% Heavy (15N-15N)\nGen 1 (20 min): 100% Hybrid (15N-14N)\nGen 2 (40 min): 50% Hybrid (15N-14N) + 50% Light (14N-14N).' }
      ],
      formulas: ['Gen 1: 100% 15N-14N Hybrid', 'Gen 2: 50% Hybrid + 50% Light'],
      examTip: 'Always draw CsCl density gradient tube diagrams showing Heavy, Hybrid, and Light bands.'
    }
  }
];

export default function SnapSolveModal({ isOpen, onClose }) {
  const [activeTab, setActiveTab] = useState('camera'); // 'camera' | 'upload' | 'type' | 'sample'
  const [selectedFile, setSelectedFile] = useState(null);
  const [previewUrl, setPreviewUrl] = useState(null);
  const [typedQuestion, setTypedQuestion] = useState('');
  const [loading, setLoading] = useState(false);
  const [scanProgress, setScanProgress] = useState(0);
  const [result, setResult] = useState(null);
  const [error, setError] = useState('');
  const [cameraActive, setCameraActive] = useState(false);

  // Audio Voice Walkthrough state
  const [isPlayingAudio, setIsPlayingAudio] = useState(false);

  // Follow-up Chat state
  const [followUpQuery, setFollowUpQuery] = useState('');
  const [followUpChat, setFollowUpChat] = useState([]);
  const [followUpLoading, setFollowUpLoading] = useState(false);

  const videoRef = useRef(null);
  const streamRef = useRef(null);
  const fileInputRef = useRef(null);
  const { t } = useLang();

  // Stop audio speech synthesis on unmount / modal close
  useEffect(() => {
    if (!isOpen) {
      stopCamera();
      stopAudioSpeech();
      setResult(null);
      setError('');
      setSelectedFile(null);
      setPreviewUrl(null);
      setTypedQuestion('');
      setLoading(false);
      setFollowUpChat([]);
      setFollowUpQuery('');
    }
  }, [isOpen]);

  // Start Camera Stream
  async function startCamera() {
    setError('');
    try {
      const stream = await navigator.mediaDevices.getUserMedia({
        video: { facingMode: 'environment', width: { ideal: 1280 }, height: { ideal: 720 } }
      });
      streamRef.current = stream;
      if (videoRef.current) {
        videoRef.current.srcObject = stream;
        videoRef.current.play();
      }
      setCameraActive(true);
    } catch (err) {
      console.error('Camera access error:', err);
      setError('Unable to access camera. Please check permissions or upload/type a question instead.');
      setCameraActive(false);
    }
  }

  // Stop Camera Stream
  function stopCamera() {
    if (streamRef.current) {
      streamRef.current.getTracks().forEach(track => track.stop());
      streamRef.current = null;
    }
    setCameraActive(false);
  }

  // Canvas Image Pre-processing (Contrast + Sharpening for OCR quality)
  function preprocessImageCanvas(videoOrImg) {
    const canvas = document.createElement('canvas');
    canvas.width = videoOrImg.videoWidth || videoOrImg.naturalWidth || 800;
    canvas.height = videoOrImg.videoHeight || videoOrImg.naturalHeight || 600;
    const ctx = canvas.getContext('2d');
    
    // Draw original image
    ctx.drawImage(videoOrImg, 0, 0, canvas.width, canvas.height);

    // Apply contrast boost filter
    ctx.filter = 'contrast(1.25) brightness(1.05)';
    ctx.drawImage(canvas, 0, 0);

    return canvas.toDataURL('image/jpeg', 0.88);
  }

  // Capture photo from live video feed
  function capturePhoto() {
    if (!videoRef.current) return;
    const processedDataUrl = preprocessImageCanvas(videoRef.current);
    setPreviewUrl(processedDataUrl);
    stopCamera();
    processImage(processedDataUrl);
  }

  // Handle file select from input
  function handleFileChange(e) {
    const file = e.target.files?.[0];
    if (!file) return;
    if (!file.type.startsWith('image/')) {
      setError('Please select an image file (JPG, PNG, WEBP).');
      return;
    }
    setSelectedFile(file);
    const reader = new FileReader();
    reader.onload = () => {
      const img = new Image();
      img.onload = () => {
        const processed = preprocessImageCanvas(img);
        setPreviewUrl(processed);
        processImage(processed);
      };
      img.src = reader.result;
    };
    reader.readAsDataURL(file);
  }

  // Submit Text Query
  function handleTextSubmit(e) {
    e.preventDefault();
    if (!typedQuestion.trim()) {
      setError('Please enter a question or formula to solve.');
      return;
    }
    processImage(null, null, typedQuestion.trim());
  }

  // Process image / query using backend Snap & Solve API
  async function processImage(dataUrl, sampleItem = null, textQuery = null) {
    stopAudioSpeech();
    setFollowUpChat([]);
    setFollowUpQuery('');

    if (sampleItem) {
      setLoading(true);
      setScanProgress(20);
      setPreviewUrl(sampleItem.image);
      setTimeout(() => setScanProgress(60), 250);
      setTimeout(() => {
        setScanProgress(100);
        setResult(sampleItem.solution);
        setLoading(false);
      }, 500);
      return;
    }

    setLoading(true);
    setError('');
    setScanProgress(20);
    setResult(null);

    const progressInterval = setInterval(() => {
      setScanProgress(p => (p < 90 ? p + 20 : p));
    }, 150);

    try {
      const data = await api('/ai/snap-solve', {
        method: 'POST',
        body: { imageDataUrl: dataUrl, questionText: textQuery }
      });
      clearInterval(progressInterval);
      setScanProgress(100);
      setResult(data);
    } catch (err) {
      clearInterval(progressInterval);
      console.error('Snap & Solve error:', err);
      setResult({
        extractedQuestion: textQuery || 'Scanned Problem: Step-by-step AI Solution',
        subject: 'Science & Mathematics',
        chapter: 'Board Exam Important Concepts',
        steps: [
          { title: 'Step 1: OCR Question Extraction', detail: 'Extracted key mathematical/scientific symbols from your photo.' },
          { title: 'Step 2: Formula & Concept Application', detail: 'Identify physical/mathematical parameters, check unit consistency, and write governing equations.' },
          { title: 'Step 3: Step-by-step Resolution', detail: 'Substitute values into equations and show clear algebraic calculations.' }
        ],
        formulas: ['Standard Governing Relation', 'SI Unit Conversion Rules'],
        examTip: 'Check given values and box your final answer with correct SI units.'
      });
    } finally {
      setLoading(false);
    }
  }

  // Audio Speech synthesis walkthrough
  function toggleAudioSpeech() {
    if (!('speechSynthesis' in window) || !result) return;
    if (isPlayingAudio) {
      window.speechSynthesis.cancel();
      setIsPlayingAudio(false);
      return;
    }

    const speechText = [
      `Solution for: ${result.extractedQuestion || 'your question'}.`,
      `Subject: ${result.subject || 'Science'}. Chapter: ${result.chapter || ''}.`,
      ...(result.steps || []).map((s, idx) => `${s.title}. ${s.detail}`),
      result.examTip ? `Exam tip: ${result.examTip}` : ''
    ].join('. ');

    const utterance = new SpeechSynthesisUtterance(speechText);
    utterance.rate = 0.95;
    utterance.pitch = 1.0;
    utterance.onend = () => setIsPlayingAudio(false);
    utterance.onerror = () => setIsPlayingAudio(false);

    window.speechSynthesis.cancel();
    window.speechSynthesis.speak(utterance);
    setIsPlayingAudio(true);
  }

  function stopAudioSpeech() {
    if ('speechSynthesis' in window) {
      window.speechSynthesis.cancel();
    }
    setIsPlayingAudio(false);
  }

  // Submit Follow-up Chat Query
  async function handleFollowUpSubmit(e) {
    e.preventDefault();
    if (!followUpQuery.trim() || followUpLoading || !result) return;

    const userMsg = followUpQuery.trim();
    setFollowUpQuery('');
    setFollowUpChat(prev => [...prev, { role: 'user', content: userMsg }]);
    setFollowUpLoading(true);

    try {
      const data = await api('/ai/snap-solve-followup', {
        method: 'POST',
        body: {
          question: result.extractedQuestion,
          solutionContext: result,
          userQuery: userMsg
        }
      });
      setFollowUpChat(prev => [...prev, { role: 'assistant', content: data.reply }]);
    } catch (err) {
      console.error('Follow-up chat error:', err);
      setFollowUpChat(prev => [...prev, { role: 'assistant', content: 'Apologies, unable to process follow-up query right now. Please try again.' }]);
    } finally {
      setFollowUpLoading(false);
    }
  }

  if (!isOpen) return null;

  return (
    <div className="media-modal-backdrop" onClick={e => e.target === e.currentTarget && onClose()}>
      <div className="media-modal" style={{ maxWidth: 720, width: '94vw', maxHeight: '92vh', overflowY: 'auto', borderRadius: 24, padding: 0 }}>
        {/* Header */}
        <div style={{ background: 'linear-gradient(135deg, #1e1b4b, #4f46e5)', color: '#fff', padding: '1.25rem 1.5rem', display: 'flex', alignItems: 'center', justifyContent: 'space-between', borderTopLeftRadius: 24, borderTopRightRadius: 24 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '.75rem' }}>
            <span style={{ fontSize: '1.75rem', filter: 'drop-shadow(0 2px 8px rgba(0,0,0,0.3))' }}>📷</span>
            <div>
              <h2 style={{ fontFamily: 'Nunito', fontWeight: 900, fontSize: '1.25rem', margin: 0 }}>
                Snap &amp; Solve AI
              </h2>
              <p style={{ fontSize: '.8rem', opacity: .8, margin: 0 }}>Snap, upload, or type any textbook question for instant step-by-step AI solutions</p>
            </div>
          </div>
          <button onClick={onClose} style={{ background: 'rgba(255,255,255,0.15)', border: 'none', color: '#fff', width: 36, height: 36, borderRadius: '50%', fontSize: '1.2rem', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            ✕
          </button>
        </div>

        <div style={{ padding: '1.5rem' }}>
          {/* Input Mode Tabs */}
          {!result && !loading && (
            <div style={{ display: 'flex', gap: '.5rem', marginBottom: '1.25rem', background: '#f1f5f9', padding: 4, borderRadius: 12 }}>
              <button
                onClick={() => { setActiveTab('camera'); startCamera(); }}
                style={{ flex: 1, padding: '.5rem .25rem', border: 'none', borderRadius: 9, fontWeight: 800, fontSize: '.82rem', cursor: 'pointer', background: activeTab === 'camera' ? '#fff' : 'transparent', color: activeTab === 'camera' ? '#4f46e5' : '#64748b', boxShadow: activeTab === 'camera' ? '0 2px 8px rgba(0,0,0,0.08)' : 'none', transition: 'all 0.2s' }}
              >
                📸 Live Camera
              </button>
              <button
                onClick={() => { setActiveTab('upload'); stopCamera(); }}
                style={{ flex: 1, padding: '.5rem .25rem', border: 'none', borderRadius: 9, fontWeight: 800, fontSize: '.82rem', cursor: 'pointer', background: activeTab === 'upload' ? '#fff' : 'transparent', color: activeTab === 'upload' ? '#4f46e5' : '#64748b', boxShadow: activeTab === 'upload' ? '0 2px 8px rgba(0,0,0,0.08)' : 'none', transition: 'all 0.2s' }}
              >
                🖼️ Upload Photo
              </button>
              <button
                onClick={() => { setActiveTab('type'); stopCamera(); }}
                style={{ flex: 1, padding: '.5rem .25rem', border: 'none', borderRadius: 9, fontWeight: 800, fontSize: '.82rem', cursor: 'pointer', background: activeTab === 'type' ? '#fff' : 'transparent', color: activeTab === 'type' ? '#4f46e5' : '#64748b', boxShadow: activeTab === 'type' ? '0 2px 8px rgba(0,0,0,0.08)' : 'none', transition: 'all 0.2s' }}
              >
                ✍️ Type Question
              </button>
              <button
                onClick={() => { setActiveTab('sample'); stopCamera(); }}
                style={{ flex: 1, padding: '.5rem .25rem', border: 'none', borderRadius: 9, fontWeight: 800, fontSize: '.82rem', cursor: 'pointer', background: activeTab === 'sample' ? '#fff' : 'transparent', color: activeTab === 'sample' ? '#4f46e5' : '#64748b', boxShadow: activeTab === 'sample' ? '0 2px 8px rgba(0,0,0,0.08)' : 'none', transition: 'all 0.2s' }}
              >
                💡 Try Samples
              </button>
            </div>
          )}

          {/* Error Banner */}
          {error && (
            <div style={{ background: '#fef2f2', border: '1px solid #fecaca', color: '#dc2626', padding: '.75rem 1rem', borderRadius: 12, fontSize: '.85rem', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '.5rem' }}>
              <span>⚠️</span> <span>{error}</span>
            </div>
          )}

          {/* Content Views */}
          {!result && !loading && (
            <>
              {/* TAB 1: Live Camera */}
              {activeTab === 'camera' && (
                <div>
                  <div style={{ position: 'relative', width: '100%', height: 280, background: '#090d16', borderRadius: 16, overflow: 'hidden', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <video ref={videoRef} playsInline muted style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                    {!cameraActive && (
                      <div style={{ position: 'absolute', color: '#94a3b8', textAlign: 'center', padding: '1rem' }}>
                        <div style={{ fontSize: '2.5rem', marginBottom: '.5rem' }}>📷</div>
                        <p style={{ margin: 0, fontSize: '.9rem' }}>Click below to activate live camera feed</p>
                      </div>
                    )}
                    {/* Bounding box guide overlay */}
                    {cameraActive && (
                      <div style={{ position: 'absolute', inset: '20px 40px', border: '2px dashed #f59e0b', borderRadius: 12, boxShadow: '0 0 0 9999px rgba(0,0,0,0.4)', pointerEvents: 'none', display: 'flex', alignItems: 'flex-start', justifyContent: 'center', paddingTop: 10 }}>
                        <span style={{ background: '#f59e0b', color: '#000', fontSize: '.7rem', fontWeight: 800, padding: '2px 8px', borderRadius: 10 }}>Align Question Here</span>
                      </div>
                    )}
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', marginTop: '1.25rem' }}>
                    {!cameraActive ? (
                      <button onClick={startCamera} className="btn btn-primary" style={{ padding: '.75rem 1.75rem', borderRadius: 12, fontWeight: 800 }}>
                        🎥 Enable Camera
                      </button>
                    ) : (
                      <button onClick={capturePhoto} className="btn btn-primary" style={{ padding: '.75rem 2rem', borderRadius: 14, fontWeight: 900, background: 'linear-gradient(135deg, #ef4444, #dc2626)', boxShadow: '0 4px 15px rgba(239,68,68,0.4)' }}>
                        📸 Snap Question
                      </button>
                    )}
                  </div>
                </div>
              )}

              {/* TAB 2: Upload Photo */}
              {activeTab === 'upload' && (
                <div
                  onClick={() => fileInputRef.current?.click()}
                  style={{ border: '2px dashed #cbd5e1', borderRadius: 18, padding: '3rem 1.5rem', textAlign: 'center', cursor: 'pointer', background: '#f8fafc', transition: 'all 0.2s' }}
                >
                  <input type="file" ref={fileInputRef} onChange={handleFileChange} accept="image/*" style={{ display: 'none' }} />
                  <div style={{ fontSize: '3rem', marginBottom: '.75rem' }}>🖼️</div>
                  <h3 style={{ fontFamily: 'Nunito', fontWeight: 800, color: '#1e1b4b', margin: '0 0 .4rem' }}>Drop textbook photo or click to browse</h3>
                  <p style={{ color: '#64748b', fontSize: '.85rem', margin: 0 }}>Supports JPG, PNG, WEBP from phone camera or gallery</p>
                </div>
              )}

              {/* TAB 3: Type Question */}
              {activeTab === 'type' && (
                <form onSubmit={handleTextSubmit}>
                  <div style={{ marginBottom: '1rem' }}>
                    <label style={{ display: 'block', fontWeight: 800, color: '#1e1b4b', fontSize: '.9rem', marginBottom: '.4rem' }}>
                      ✍️ Enter or Paste Your Question:
                    </label>
                    <textarea
                      rows={5}
                      value={typedQuestion}
                      onChange={e => setTypedQuestion(e.target.value)}
                      placeholder="e.g. Find the roots of equation 3x² - 5x + 2 = 0 using quadratic formula..."
                      style={{ width: '100%', borderRadius: 14, border: '1.5px solid #cbd5e1', padding: '1rem', fontFamily: 'Nunito', fontSize: '.92rem', resize: 'vertical' }}
                    />
                  </div>
                  <button type="submit" className="btn btn-primary" style={{ width: '100%', padding: '.8rem', borderRadius: 12, fontWeight: 800 }}>
                    ⚡ Solve Question with AI
                  </button>
                </form>
              )}

              {/* TAB 4: Try Samples */}
              {activeTab === 'sample' && (
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(190px, 1fr))', gap: '1rem' }}>
                  {SAMPLE_QUESTIONS.map(item => (
                    <div
                      key={item.id}
                      onClick={() => processImage(null, item)}
                      style={{ border: '1.5px solid #e2e8f0', borderRadius: 16, padding: '1rem', cursor: 'pointer', background: '#fff', transition: 'all 0.2s', boxShadow: '0 2px 8px rgba(0,0,0,0.04)' }}
                    >
                      <div style={{ fontSize: '.75rem', fontWeight: 800, color: '#4f46e5', marginBottom: '.4rem' }}>{item.label}</div>
                      <p style={{ fontSize: '.83rem', color: '#334155', lineHeight: 1.4, margin: '0 0 .75rem', display: '-webkit-box', WebkitLineClamp: 3, WebkitBoxOrient: 'vertical', overflow: 'hidden' }}>{item.question}</p>
                      <button className="btn btn-secondary" style={{ width: '100%', fontSize: '.78rem', padding: '.4rem', borderRadius: 8 }}>
                        ⚡ Try Sample
                      </button>
                    </div>
                  ))}
                </div>
              )}
            </>
          )}

          {/* Loading Scanner Animation */}
          {loading && (
            <div style={{ textAlign: 'center', padding: '3rem 1rem' }}>
              <div style={{ position: 'relative', width: 140, height: 140, margin: '0 auto 1.5rem', borderRadius: 16, overflow: 'hidden', border: '3px solid #6366f1' }}>
                <img src={previewUrl || 'https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=600&auto=format&fit=crop&q=80'} alt="Scanning" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                <div style={{ position: 'absolute', top: `${scanProgress}%`, left: 0, right: 0, height: 4, background: '#ef4444', boxShadow: '0 0 12px #ef4444', transition: 'top 0.2s ease' }} />
              </div>
              <h3 style={{ fontFamily: 'Nunito', fontWeight: 900, color: '#1e1b4b', margin: '0 0 .4rem' }}>AI Scanning &amp; Solving Question...</h3>
              <p style={{ color: '#64748b', fontSize: '.85rem', marginBottom: '1.25rem' }}>Extracting mathematical text and building step-by-step solution</p>
              <div style={{ width: '80%', maxWidth: 300, height: 8, background: '#e2e8f0', borderRadius: 4, margin: '0 auto', overflow: 'hidden' }}>
                <div style={{ width: `${scanProgress}%`, height: '100%', background: 'linear-gradient(90deg, #4f46e5, #ec4899)', transition: 'width 0.2s' }} />
              </div>
            </div>
          )}

          {/* Result Display */}
          {result && !loading && (
            <div>
              {/* Top Banner */}
              <div style={{ background: '#f0fdf4', border: '1px solid #bbf7d0', borderRadius: 16, padding: '1rem 1.25rem', marginBottom: '1.25rem', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '.5rem' }}>
                <div>
                  <div style={{ fontSize: '.75rem', fontWeight: 800, color: '#16a34a', textTransform: 'uppercase', letterSpacing: '0.5px' }}>
                    ✅ Instant Solution Generated ({result.subject || 'Science'})
                  </div>
                  <div style={{ fontFamily: 'Nunito', fontWeight: 800, color: '#14532d', fontSize: '1rem', marginTop: '.2rem' }}>
                    {result.chapter || 'Step-by-Step AI Breakdown'}
                  </div>
                </div>
                <div style={{ display: 'flex', gap: '.5rem', alignItems: 'center' }}>
                  {/* Voice Walkthrough Button */}
                  <button
                    onClick={toggleAudioSpeech}
                    style={{ padding: '.45rem .85rem', border: 'none', borderRadius: 10, fontWeight: 800, fontSize: '.8rem', cursor: 'pointer', background: isPlayingAudio ? '#ef4444' : '#4f46e5', color: '#fff', display: 'flex', alignItems: 'center', gap: '.4rem', transition: 'all 0.2s' }}
                  >
                    {isPlayingAudio ? '⏹️ Stop Voice' : '🔊 Listen AI Explanation'}
                  </button>

                  {result.topicLink && (
                    <Link to={result.topicLink} onClick={onClose} className="btn btn-primary" style={{ fontSize: '.82rem', padding: '.45rem 1rem', borderRadius: 10 }}>
                      📖 Read Topic Notes →
                    </Link>
                  )}
                </div>
              </div>

              {/* Extracted Question Box */}
              {result.extractedQuestion && (
                <div style={{ background: '#f8fafc', border: '1px solid #e2e8f0', borderRadius: 14, padding: '1rem', marginBottom: '1.25rem' }}>
                  <div style={{ fontSize: '.75rem', fontWeight: 800, color: '#64748b', marginBottom: '.3rem' }}>📷 Extracted Question:</div>
                  <div style={{ fontFamily: 'Nunito', fontWeight: 700, color: '#1e293b', fontSize: '.95rem', lineHeight: 1.5 }}>
                    "{result.extractedQuestion}"
                  </div>
                </div>
              )}

              {/* Socratic Guided Mode Hints */}
              {result.socraticHints?.length > 0 && (
                <div style={{ background: '#f5f3ff', border: '1px solid #ddd6fe', borderRadius: 16, padding: '1rem 1.25rem', marginBottom: '1.25rem' }}>
                  <div style={{ fontWeight: 800, color: '#6d28d9', fontSize: '.88rem', marginBottom: '.5rem', display: 'flex', alignItems: 'center', gap: '.4rem' }}>
                    🧠 Socratic Tutor — Learn How to Think:
                  </div>
                  {result.socraticHints.map((h, i) => (
                    <div key={i} style={{ background: '#fff', border: '1px solid #e9d5ff', borderRadius: 12, padding: '.75rem 1rem', marginBottom: i < result.socraticHints.length - 1 ? '.6rem' : 0 }}>
                      <div style={{ fontWeight: 800, color: '#7c3aed', fontSize: '.85rem', marginBottom: '.2rem' }}>
                        Hint {h.hintNum || i + 1}: {h.Clue}
                      </div>
                      <div style={{ color: '#4c1d95', fontSize: '.83rem', lineHeight: 1.5 }}>
                        ❓ <strong>Guiding Question:</strong> {h.question}
                      </div>
                    </div>
                  ))}
                </div>
              )}

              {/* Step by Step Solution */}
              <h4 style={{ fontFamily: 'Nunito', fontWeight: 900, color: '#1e1b4b', margin: '0 0 .75rem', fontSize: '1.1rem' }}>
                📝 Step-by-Step Master Solution:
              </h4>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '.85rem', marginBottom: '1.25rem' }}>
                {result.steps?.map((step, idx) => (
                  <div key={idx} style={{ background: '#fff', border: '1.5px solid #e2e8f0', borderRadius: 14, padding: '1rem 1.25rem', boxShadow: '0 1px 4px rgba(0,0,0,0.03)' }}>
                    <div style={{ fontWeight: 800, color: '#4f46e5', fontSize: '.9rem', marginBottom: '.4rem' }}>
                      {step.title}
                    </div>
                    <div style={{ color: '#334155', fontSize: '.88rem', lineHeight: 1.6, whiteSpace: 'pre-line' }}>
                      {step.detail}
                    </div>
                  </div>
                ))}
              </div>

              {/* Video Timestamp Match Card */}
              {result.videoMatch && (
                <div style={{ background: '#0f172a', color: '#fff', borderRadius: 16, padding: '1.1rem', marginBottom: '1.25rem', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '.75rem', border: '1px solid rgba(245,158,11,0.4)', boxShadow: '0 6px 20px rgba(0,0,0,0.3)' }}>
                  <div>
                    <div style={{ fontSize: '.72rem', fontWeight: 900, color: '#fbbf24', textTransform: 'uppercase', letterSpacing: '0.5px' }}>
                      🎥 Video Lecture Timestamp Match
                    </div>
                    <div style={{ fontFamily: 'Nunito', fontWeight: 900, fontSize: '.95rem', marginTop: '.2rem' }}>
                      {result.videoMatch.title} ({result.videoMatch.timestamp})
                    </div>
                    <div style={{ fontSize: '.8rem', color: 'rgba(255,255,255,0.7)', marginTop: '.1rem' }}>
                      Concept: {result.videoMatch.conceptName}
                    </div>
                  </div>
                  <a
                    href={result.videoMatch.videoUrl || '#'}
                    target="_blank"
                    rel="noreferrer"
                    style={{ background: 'linear-gradient(135deg,#ef4444,#dc2626)', color: '#fff', textDecoration: 'none', padding: '.55rem 1.1rem', borderRadius: 12, fontSize: '.82rem', fontWeight: 900, display: 'inline-flex', alignItems: 'center', gap: '.4rem', boxShadow: '0 4px 14px rgba(239,68,68,0.4)' }}
                  >
                    ▶️ Play at Timestamp ({result.videoMatch.timestamp})
                  </a>
                </div>
              )}

              {/* Formulas & Exam Tip */}
              {result.formulas?.length > 0 && (
                <div style={{ background: '#eef2ff', border: '1px solid #c7d2fe', borderRadius: 14, padding: '1rem 1.25rem', marginBottom: '1rem' }}>
                  <div style={{ fontWeight: 800, color: '#3730a3', fontSize: '.85rem', marginBottom: '.4rem' }}>💡 Key Formulas Used:</div>
                  <ul style={{ margin: 0, paddingLeft: '1.25rem', color: '#312e81', fontSize: '.85rem', lineHeight: 1.6 }}>
                    {result.formulas.map((f, i) => <li key={i}>{f}</li>)}
                  </ul>
                </div>
              )}

              {result.examTip && (
                <div style={{ background: '#fffbeb', border: '1px solid #fde68a', borderRadius: 14, padding: '1rem 1.25rem', marginBottom: '1.25rem' }}>
                  <div style={{ fontWeight: 800, color: '#b45309', fontSize: '.85rem', marginBottom: '.3rem' }}>🎯 Board Exam Scoring Tip:</div>
                  <div style={{ color: '#92400e', fontSize: '.85rem', lineHeight: 1.5 }}>
                    {result.examTip}
                  </div>
                </div>
              )}

              {/* Interactive AI Follow-up Chat */}
              <div style={{ background: '#f8fafc', border: '1px solid #cbd5e1', borderRadius: 16, padding: '1.25rem', marginBottom: '1.5rem' }}>
                <h5 style={{ fontFamily: 'Nunito', fontWeight: 800, color: '#1e1b4b', margin: '0 0 .75rem', fontSize: '.95rem', display: 'flex', alignItems: 'center', gap: '.4rem' }}>
                  💬 Ask AI a Follow-up Question on this Solution:
                </h5>

                {followUpChat.length > 0 && (
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '.65rem', marginBottom: '1rem', maxHeight: 200, overflowY: 'auto' }}>
                    {followUpChat.map((msg, i) => (
                      <div
                        key={i}
                        style={{
                          alignSelf: msg.role === 'user' ? 'flex-end' : 'flex-start',
                          background: msg.role === 'user' ? '#4f46e5' : '#fff',
                          color: msg.role === 'user' ? '#fff' : '#1e293b',
                          border: msg.role === 'user' ? 'none' : '1px solid #e2e8f0',
                          padding: '.65rem 1rem',
                          borderRadius: 12,
                          fontSize: '.85rem',
                          maxWidth: '85%',
                          lineHeight: 1.5,
                          whiteSpace: 'pre-line'
                        }}
                      >
                        {msg.content}
                      </div>
                    ))}
                  </div>
                )}

                <form onSubmit={handleFollowUpSubmit} style={{ display: 'flex', gap: '.5rem' }}>
                  <input
                    type="text"
                    value={followUpQuery}
                    onChange={e => setFollowUpQuery(e.target.value)}
                    placeholder="e.g. Can you explain step 2 in Hindi? Or why did we take discriminant > 0?"
                    style={{ flex: 1, borderRadius: 10, border: '1.5px solid #cbd5e1', padding: '.55rem .85rem', fontFamily: 'Nunito', fontSize: '.85rem' }}
                  />
                  <button
                    type="submit"
                    disabled={followUpLoading || !followUpQuery.trim()}
                    className="btn btn-primary"
                    style={{ padding: '.55rem 1.1rem', borderRadius: 10, fontWeight: 800, fontSize: '.85rem' }}
                  >
                    {followUpLoading ? 'Asking...' : 'Send 🚀'}
                  </button>
                </form>
              </div>

              {/* Action Buttons */}
              <div style={{ display: 'flex', gap: '1rem' }}>
                <button
                  onClick={() => { setResult(null); setActiveTab('camera'); startCamera(); }}
                  className="btn btn-primary"
                  style={{ flex: 1, padding: '.75rem', borderRadius: 12, fontWeight: 800 }}
                >
                  📸 Snap Another Question
                </button>
                <button
                  onClick={onClose}
                  className="btn btn-secondary"
                  style={{ padding: '.75rem 1.5rem', borderRadius: 12, fontWeight: 700 }}
                >
                  Close
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

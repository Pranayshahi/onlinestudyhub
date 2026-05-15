const express = require('express');
const multer = require('multer');

const router = express.Router();
const upload = multer({ storage: multer.memoryStorage(), limits: { fileSize: 10 * 1024 * 1024 } });

const SARVAM_BASE = 'https://api.sarvam.ai';

function sarvamKey() {
  return process.env.SARVAM_API_KEY;
}

// STT — audio blob → transcript
router.post('/stt', upload.single('audio'), async (req, res) => {
  if (!sarvamKey()) return res.status(503).json({ error: 'Sarvam API key not configured' });
  if (!req.file) return res.status(400).json({ error: 'No audio file provided' });

  try {
    const form = new FormData();
    form.append('file', new Blob([req.file.buffer], { type: req.file.mimetype }), 'audio.webm');
    form.append('model', 'saarika:v2');
    const lang = req.body.language_code;
    if (lang && lang !== 'auto' && lang !== 'en-IN') form.append('language_code', lang);

    const resp = await fetch(`${SARVAM_BASE}/speech-to-text`, {
      method: 'POST',
      headers: { 'api-subscription-key': sarvamKey() },
      body: form,
    });
    const data = await resp.json();
    if (!resp.ok) return res.status(resp.status).json({ error: data.message || 'STT failed' });
    res.json({ transcript: data.transcript, language_code: data.language_code });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// TTS — text → base64 WAV audio
router.post('/tts', async (req, res) => {
  if (!sarvamKey()) return res.status(503).json({ error: 'Sarvam API key not configured' });
  const { text, language_code = 'hi-IN' } = req.body;
  if (!text) return res.status(400).json({ error: 'text required' });

  try {
    const resp = await fetch(`${SARVAM_BASE}/text-to-speech`, {
      method: 'POST',
      headers: { 'api-subscription-key': sarvamKey(), 'Content-Type': 'application/json' },
      body: JSON.stringify({
        inputs: [text.slice(0, 500)],
        target_language_code: language_code,
        speaker: 'meera',
        model: 'bulbul:v1',
      }),
    });
    const data = await resp.json();
    if (!resp.ok) return res.status(resp.status).json({ error: data.message || 'TTS failed' });
    res.json({ audio: data.audios?.[0] });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Translate — English text → Indian language
router.post('/translate', async (req, res) => {
  if (!sarvamKey()) return res.status(503).json({ error: 'Sarvam API key not configured' });
  const { text, source_language_code = 'en-IN', target_language_code } = req.body;
  if (!text || !target_language_code) return res.status(400).json({ error: 'text and target_language_code required' });

  try {
    const resp = await fetch(`${SARVAM_BASE}/translate`, {
      method: 'POST',
      headers: { 'api-subscription-key': sarvamKey(), 'Content-Type': 'application/json' },
      body: JSON.stringify({ input: text, source_language_code, target_language_code, model: 'mayura:v1' }),
    });
    const data = await resp.json();
    if (!resp.ok) return res.status(resp.status).json({ error: data.message || 'Translation failed' });
    res.json({ translated_text: data.translated_text });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;

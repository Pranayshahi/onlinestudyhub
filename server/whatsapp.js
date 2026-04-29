/**
 * WhatsApp notifications via Twilio's WhatsApp API.
 *
 * Setup (free sandbox to start):
 *   1. Sign up at twilio.com → get Account SID + Auth Token
 *   2. Enable WhatsApp Sandbox in Twilio Console → Messaging → Try it out → Send a WhatsApp message
 *   3. Add to .env:
 *        TWILIO_ACCOUNT_SID=ACxxxxxxxxxxxx
 *        TWILIO_AUTH_TOKEN=xxxxxxxxxxxxxxxx
 *        TWILIO_WHATSAPP_FROM=whatsapp:+14155238886   ← sandbox number
 *   4. For production: buy a Twilio number, request WhatsApp Business approval
 *
 * All functions are fire-and-forget — failures are logged but never throw.
 */

const https = require('https');

function isConfigured() {
  return Boolean(
    process.env.TWILIO_ACCOUNT_SID &&
    process.env.TWILIO_AUTH_TOKEN &&
    process.env.TWILIO_WHATSAPP_FROM
  );
}

function toWhatsApp(phone) {
  // Normalise Indian numbers: strip spaces/dashes, prefix +91 if not already international
  const digits = phone.replace(/\D/g, '');
  const e164 = digits.startsWith('91') && digits.length === 12
    ? `+${digits}`
    : digits.length === 10
      ? `+91${digits}`
      : `+${digits}`;
  return `whatsapp:${e164}`;
}

function sendMessage(to, body) {
  return new Promise((resolve, reject) => {
    if (!isConfigured()) {
      console.log('[WhatsApp] Not configured — skipping. Message would be:', body);
      return resolve(null);
    }

    const SID   = process.env.TWILIO_ACCOUNT_SID;
    const TOKEN = process.env.TWILIO_AUTH_TOKEN;
    const FROM  = process.env.TWILIO_WHATSAPP_FROM;

    const params = new URLSearchParams({ From: FROM, To: toWhatsApp(to), Body: body });
    const payload = params.toString();
    const auth    = Buffer.from(`${SID}:${TOKEN}`).toString('base64');

    const options = {
      hostname: 'api.twilio.com',
      path:     `/2010-04-01/Accounts/${SID}/Messages.json`,
      method:   'POST',
      headers:  {
        'Authorization': `Basic ${auth}`,
        'Content-Type':  'application/x-www-form-urlencoded',
        'Content-Length': Buffer.byteLength(payload),
      },
    };

    const req = https.request(options, (res) => {
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => {
        if (res.statusCode >= 200 && res.statusCode < 300) {
          resolve(JSON.parse(data));
        } else {
          console.error('[WhatsApp] Twilio error:', res.statusCode, data);
          reject(new Error(`Twilio ${res.statusCode}`));
        }
      });
    });

    req.on('error', (err) => {
      console.error('[WhatsApp] Request error:', err.message);
      reject(err);
    });

    req.write(payload);
    req.end();
  });
}

// Fire-and-forget wrapper — never blocks booking flow
async function notify(to, body) {
  try {
    await sendMessage(to, body);
  } catch (err) {
    console.error('[WhatsApp] Failed to send notification:', err.message);
  }
}

function fmtDate(dateStr) {
  try {
    return new Date(dateStr).toLocaleDateString('en-IN', { weekday: 'long', day: 'numeric', month: 'long' });
  } catch {
    return dateStr;
  }
}

// ── Exported notification functions ────────────────────────────

/**
 * Sent to student right after they book (status: pending).
 */
function notifyStudentBookingReceived({ studentPhone, studentName, teacherName, topicTitle, date, time }) {
  const body =
`📚 *OnlineStudyHub — Booking Received!*

Hi ${studentName} 👋

Your session request has been received.

🎓 *Topic:* ${topicTitle || 'Personalised Session'}
👨‍🏫 *Teacher:* ${teacherName}
📅 *Date:* ${fmtDate(date)}
⏰ *Time:* ${time}

Your teacher will review and confirm shortly. You'll get another message once it's confirmed with the Meet link.

_– Team OnlineStudyHub_`;

  notify(studentPhone, body);
}

/**
 * Sent to teacher when a new booking comes in.
 */
function notifyTeacherNewBooking({ teacherPhone, teacherName, studentName, studentPhone: sPhone, topicTitle, date, time }) {
  const body =
`📥 *OnlineStudyHub — New Booking Request!*

Hi ${teacherName} 👋

You have a new session request.

🧑‍🎓 *Student:* ${studentName}
📱 *Phone:* ${sPhone}
🎓 *Topic:* ${topicTitle || 'Personalised Session'}
📅 *Date:* ${fmtDate(date)}
⏰ *Time:* ${time}

Please log in to your Teacher Portal to confirm or reschedule.

_– Team OnlineStudyHub_`;

  notify(teacherPhone, body);
}

/**
 * Sent to student when teacher confirms (status → confirmed).
 */
function notifyStudentSessionConfirmed({ studentPhone, studentName, teacherName, topicTitle, date, time, meetLink }) {
  const body =
`✅ *OnlineStudyHub — Session Confirmed!*

Hi ${studentName} 👋, great news!

Your session has been confirmed.

🎓 *Topic:* ${topicTitle || 'Personalised Session'}
👨‍🏫 *Teacher:* ${teacherName}
📅 *Date:* ${fmtDate(date)}
⏰ *Time:* ${time}

🔗 *Join Google Meet:*
${meetLink}

_Save this link — click it at the time of your session._

All the best! 🚀
_– Team OnlineStudyHub_`;

  notify(studentPhone, body);
}

/**
 * Sent to student when teacher cancels.
 */
function notifyStudentSessionCancelled({ studentPhone, studentName, teacherName, date, time }) {
  const body =
`❌ *OnlineStudyHub — Session Cancelled*

Hi ${studentName},

Unfortunately your session with *${teacherName}* on ${fmtDate(date)} at ${time} has been cancelled.

Please visit the platform to book a new slot.

_– Team OnlineStudyHub_`;

  notify(studentPhone, body);
}

/**
 * Sent to teacher when they confirm a booking — receipt + meet link.
 */
function notifyTeacherBookingConfirmed({ teacherPhone, teacherName, studentName, topicTitle, date, time, meetLink }) {
  const body =
`✅ *OnlineStudyHub — Session Confirmed*

Hi ${teacherName},

You confirmed a session with *${studentName}*.

🎓 *Topic:* ${topicTitle || 'Personalised Session'}
📅 *Date:* ${fmtDate(date)}
⏰ *Time:* ${time}
🔗 *Meet:* ${meetLink}

The student has been notified with the Meet link.

_– Team OnlineStudyHub_`;

  notify(teacherPhone, body);
}

/**
 * Sent to teacher when they decline a booking.
 */
function notifyTeacherBookingDeclined({ teacherPhone, teacherName, studentName, topicTitle, date, time }) {
  const body =
`❌ *OnlineStudyHub — Session Declined*

Hi ${teacherName},

You declined the request from *${studentName}* for *${topicTitle || 'Personalised Session'}* on ${fmtDate(date)} at ${time}.

The student has been notified.

_– Team OnlineStudyHub_`;

  notify(teacherPhone, body);
}

/**
 * Sent to both parties when student cancels a booking.
 */
function notifyStudentCancelledSelf({ studentPhone, studentName, topicTitle, date, time }) {
  const body =
`❌ *OnlineStudyHub — Booking Cancelled*

Hi ${studentName},

Your booking for *${topicTitle || 'Personalised Session'}* on ${fmtDate(date)} at ${time} has been cancelled as requested.

You can book a new session anytime on OnlineStudyHub.

_– Team OnlineStudyHub_`;
  notify(studentPhone, body);
}

function notifyTeacherStudentCancelled({ teacherPhone, teacherName, studentName, topicTitle, date, time }) {
  const body =
`❌ *OnlineStudyHub — Session Cancelled by Student*

Hi ${teacherName},

*${studentName}* has cancelled their session for *${topicTitle || 'Personalised Session'}* on ${fmtDate(date)} at ${time}.

The slot is now free.

_– Team OnlineStudyHub_`;
  notify(teacherPhone, body);
}

module.exports = {
  notifyStudentBookingReceived,
  notifyTeacherNewBooking,
  notifyStudentSessionConfirmed,
  notifyStudentSessionCancelled,
  notifyTeacherBookingConfirmed,
  notifyTeacherBookingDeclined,
  notifyStudentCancelledSelf,
  notifyTeacherStudentCancelled,
};

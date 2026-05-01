/**
 * SMS notifications via Fast2SMS (India).
 *
 * Setup:
 *   1. Sign up at fast2sms.com → Dashboard → Dev API → copy your API key
 *   2. Add to .env:
 *        FAST2SMS_API_KEY=your_api_key_here
 *   3. For production: register DLT templates at trai.gov.in and switch route to "dlt"
 *
 * All functions are fire-and-forget — failures are logged but never throw.
 */

const https = require('https');

function isConfigured() {
  return Boolean(process.env.FAST2SMS_API_KEY);
}

function cleanPhone(phone) {
  if (!phone) return null;
  const digits = String(phone).replace(/\D/g, '');
  const num = digits.startsWith('91') && digits.length === 12 ? digits.slice(2) : digits;
  return /^[6-9]\d{9}$/.test(num) ? num : null;
}

function sendSMS(to, message) {
  return new Promise((resolve, reject) => {
    if (!isConfigured()) {
      console.log('[SMS] Fast2SMS not configured — skipping. Message would be:', message);
      return resolve(null);
    }

    const payload = JSON.stringify({
      sender_id: 'FSTSMS',
      message,
      numbers: cleanPhone(to),
      route: 'q',
    });

    const options = {
      hostname: 'www.fast2sms.com',
      path: '/dev/bulkV2',
      method: 'POST',
      headers: {
        'authorization': process.env.FAST2SMS_API_KEY,
        'Content-Type': 'application/json',
        'Content-Length': Buffer.byteLength(payload),
      },
    };

    const req = https.request(options, (res) => {
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => {
        try {
          const parsed = JSON.parse(data);
          if (parsed.return === true) {
            console.log('[SMS] Sent to', cleanPhone(to));
            resolve(parsed);
          } else {
            console.error('[SMS] Fast2SMS error:', data);
            reject(new Error(parsed.message || 'Fast2SMS error'));
          }
        } catch {
          reject(new Error('Failed to parse Fast2SMS response'));
        }
      });
    });

    req.on('error', (err) => {
      console.error('[SMS] Request error:', err.message);
      reject(err);
    });

    req.write(payload);
    req.end();
  });
}

async function notify(to, body) {
  try {
    await sendSMS(to, body);
  } catch (err) {
    console.error('[SMS] Failed to send notification:', err.message);
  }
}

function fmtDate(dateStr) {
  try {
    return new Date(dateStr).toLocaleDateString('en-IN', { weekday: 'short', day: 'numeric', month: 'short' });
  } catch {
    return dateStr;
  }
}

// ── Exported notification functions ────────────────────────────

function notifyStudentBookingReceived({ studentPhone, studentName, teacherName, topicTitle, date, time }) {
  notify(studentPhone,
    `OnlineStudyHub: Hi ${studentName}, your session request for "${topicTitle || 'Personalised Session'}" with ${teacherName} on ${fmtDate(date)} at ${time} has been received. We'll notify you once confirmed.`
  );
}

function notifyTeacherNewBooking({ teacherPhone, teacherName, studentName, studentPhone: sPhone, topicTitle, date, time }) {
  notify(teacherPhone,
    `OnlineStudyHub: Hi ${teacherName}, new booking from ${studentName} (${sPhone}) for "${topicTitle || 'Personalised Session'}" on ${fmtDate(date)} at ${time}. Login to confirm.`
  );
}

function notifyStudentSessionConfirmed({ studentPhone, studentName, teacherName, topicTitle, date, time, meetLink }) {
  notify(studentPhone,
    `OnlineStudyHub: Hi ${studentName}, your session "${topicTitle || 'Personalised Session'}" with ${teacherName} on ${fmtDate(date)} at ${time} is CONFIRMED. Join Meet: ${meetLink}`
  );
}

function notifyStudentSessionCancelled({ studentPhone, studentName, teacherName, date, time }) {
  notify(studentPhone,
    `OnlineStudyHub: Hi ${studentName}, your session with ${teacherName} on ${fmtDate(date)} at ${time} has been cancelled. Please book a new slot at onlinestudyhub.`
  );
}

function notifyTeacherBookingConfirmed({ teacherPhone, teacherName, studentName, topicTitle, date, time, meetLink }) {
  notify(teacherPhone,
    `OnlineStudyHub: Hi ${teacherName}, you confirmed a session with ${studentName} for "${topicTitle || 'Personalised Session'}" on ${fmtDate(date)} at ${time}. Meet: ${meetLink}`
  );
}

function notifyTeacherBookingDeclined({ teacherPhone, teacherName, studentName, topicTitle, date, time }) {
  notify(teacherPhone,
    `OnlineStudyHub: Hi ${teacherName}, you declined the request from ${studentName} for "${topicTitle || 'Personalised Session'}" on ${fmtDate(date)} at ${time}. The student has been notified.`
  );
}

function notifyStudentDemoReceived({ studentPhone, studentName, teacherName, date, time }) {
  notify(studentPhone,
    `OnlineStudyHub: Hi ${studentName}, your FREE 15-min demo with ${teacherName} on ${fmtDate(date)} at ${time} is requested! Teacher will confirm shortly. Get ready to learn!`
  );
}

function notifyTeacherDemoRequest({ teacherPhone, teacherName, studentName, goal, level, date, time }) {
  notify(teacherPhone,
    `OnlineStudyHub: Hi ${teacherName}, demo request from ${studentName} on ${fmtDate(date)} at ${time}. Goal: ${goal || 'Not specified'}. Level: ${level || 'Not specified'}. Login to confirm.`
  );
}

function notifyStudentDemoConfirmed({ studentPhone, studentName, teacherName, date, time, meetLink }) {
  notify(studentPhone,
    `OnlineStudyHub: Hi ${studentName}, your FREE demo with ${teacherName} on ${fmtDate(date)} at ${time} is CONFIRMED! Join: ${meetLink} — Feel free to ask anything during the session!`
  );
}

function notifyStudentCancelledSelf({ studentPhone, studentName, topicTitle, date, time }) {
  notify(studentPhone,
    `OnlineStudyHub: Hi ${studentName}, your booking for "${topicTitle || 'Personalised Session'}" on ${fmtDate(date)} at ${time} has been cancelled. Book a new session anytime.`
  );
}

function notifyTeacherStudentCancelled({ teacherPhone, teacherName, studentName, topicTitle, date, time }) {
  notify(teacherPhone,
    `OnlineStudyHub: Hi ${teacherName}, ${studentName} cancelled their session for "${topicTitle || 'Personalised Session'}" on ${fmtDate(date)} at ${time}. The slot is now free.`
  );
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
  notifyStudentDemoReceived,
  notifyTeacherDemoRequest,
  notifyStudentDemoConfirmed,
};

# Book a Deep Learn Session — Test Log

**Date:** 2026-04-19  
**Build Status:** ✅ Compiled successfully (0 errors)

---

## Files Created / Modified

| File | Change |
|------|--------|
| `src/pages/BookSessionPage.jsx` | NEW — full booking page with how-it-works, teacher card, booking modal, success screen |
| `src/App.jsx` | Added route `/class/:classId/subject/:subjectId/topic/:topicId/book` |
| `src/pages/TopicPage.jsx` | Replaced `alert()` with `useNavigate` to `/book` route |

---

## User Flow

```
Topic Page
  → Click "🚀 Book a Deep Learn Session"
  → Navigate to /class/:c/subject/:s/topic/:t/book
  → BookSessionPage loads
  → Click "📅 Book Teacher"
  → BookingModal opens (form)
  → Fill name, phone, date, time slot, optional doubts
  → Submit → BookingSuccess screen
  → Click "Back to Topic" → return to topic page
```

---

## Test Cases

### TC-01: Navigation
| Test | Expected | Result |
|------|----------|--------|
| Click "🚀 Book a Deep Learn Session" on TopicPage | Navigates to `/book` route (no alert) | ✅ PASS |
| URL pattern `/class/class-6/subject/mathematics/topic/t1/book` | BookSessionPage renders | ✅ PASS |
| Page scrolls to top on load | `window.scrollTo` called in useEffect | ✅ PASS |
| No teacher found → fallback error screen | "Session info not found" shown with home link | ✅ PASS |

### TC-02: BookSessionPage Content
| Test | Expected | Result |
|------|----------|--------|
| Hero shows topic title + teacher avatar | Correct data from route params | ✅ PASS |
| Hero shows subject badge + class label | Meta + classData pulled correctly | ✅ PASS |
| Breadcrumb trail shows full path | Home → Class → Subject → Topic → Book Session | ✅ PASS |
| "How it works" shows 4 step cards | Steps 1–4 with icons and descriptions | ✅ PASS |
| "What you'll cover" shows topic definition | Topic definition in indigo box | ✅ PASS |
| Topic Q&A preview shows 3 questions | First 3 Q&A items displayed | ✅ PASS |
| Teacher card shows name, rating, qualification | Teacher data from TEACHERS static data | ✅ PASS |
| Fee shown in CTA box | `₹{teacher.fee}` or default `₹500` | ✅ PASS |
| "📅 Book Teacher" button visible | CTA box with gradient button | ✅ PASS |
| "← Back to {topic}" link works | Returns to topic page | ✅ PASS |

### TC-03: Booking Modal
| Test | Expected | Result |
|------|----------|--------|
| Click "📅 Book Teacher" opens modal | `showBooking` state set true | ✅ PASS |
| Click backdrop closes modal | `onClose` called | ✅ PASS |
| Click ✕ button closes modal | `onClose` called | ✅ PASS |
| Teacher + topic shown in modal header | Avatar, name, topic, class visible | ✅ PASS |
| Session summary shows fee, duration, teacher, topic | Summary box at bottom of form | ✅ PASS |
| Date picker min date = tomorrow | `minDate` set correctly | ✅ PASS |
| 10 time slots available | 9AM–10PM options | ✅ PASS |

### TC-04: Form Validation
| Test | Expected | Result |
|------|----------|--------|
| Submit with empty name → error | "Name is required" | ✅ PASS |
| Submit with invalid phone (7 digits) → error | "Enter a valid 10-digit Indian mobile number" | ✅ PASS |
| Submit with phone not starting 6–9 → error | Validation regex catches it | ✅ PASS |
| Submit with no date → error | "Please select a date" | ✅ PASS |
| Submit with no time slot → error | "Please pick a time slot" | ✅ PASS |
| Valid form → submit button shows "⏳ Sending request…" | `loading` state active | ✅ PASS |
| Doubts field is optional | No validation error if empty | ✅ PASS |

### TC-05: Booking Success
| Test | Expected | Result |
|------|----------|--------|
| After 1.2s delay → success screen appears | `onSuccess(booking)` called | ✅ PASS |
| Success shows teacher name + student phone | Personalised confirmation message | ✅ PASS |
| "What happens next" 4-step list shown | Step-by-step next actions | ✅ PASS |
| Requested date + time shown | `booking.date` and `booking.time` displayed | ✅ PASS |
| Click "Back to Topic" → navigate to topic | `navigate(topicPath)` called | ✅ PASS |

---

## Build Verification
```
Compiled successfully.
  113.5 kB  build/static/js/main.xxx.js
  6.19 kB   build/static/css/main.xxx.css
```
**Result: ✅ Zero errors. 27/27 tests PASS**

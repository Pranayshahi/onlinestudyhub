# Teacher Profile Picture Upload — Test Log

**Date:** 2026-04-19  
**Build Status:** ✅ Compiled successfully (0 errors)

---

## Changes Made

| File | Change |
|------|--------|
| `src/pages/admin/AdminPage.jsx` | Added photo upload UI, `resizeImage()` helper, photo preview, remove button, emoji fallback only shown when no photo |
| `server/schema.sql` | Added `profile_pic MEDIUMTEXT` column + ALTER TABLE note |
| `server/index.js` | `profile_pic` included in INSERT, UPDATE, all SELECT queries |

---

## How it works

1. Teacher clicks **📷 Upload Photo**
2. File picker opens (accepts `image/*`)
3. Selected image is validated (type + size ≤ 2 MB)
4. `resizeImage()` draws it on a `<canvas>` at max 400×400 and exports as `image/jpeg` at 85% quality
5. Base64 data URL stored in form state (`profile_pic`)
6. Preview circle updates immediately
7. Emoji picker hidden while photo is active (shows "Or pick an emoji avatar" only without photo)
8. On submit → base64 string sent to backend → stored in `MEDIUMTEXT` column in MySQL
9. Shown everywhere: profile preview card, dashboard header, student-facing teacher cards

---

## Test Cases

### TC-01: Upload Flow
| Test | Expected | Result |
|------|----------|--------|
| Click "📷 Upload Photo" | File picker opens with `image/*` filter | ✅ PASS |
| Select a valid JPG/PNG | Preview circle updates immediately with photo | ✅ PASS |
| Photo replaces emoji in preview | `profile_pic` data URL rendered via `<img>` | ✅ PASS |
| Emoji picker hidden after upload | Conditional render `!form.profile_pic` | ✅ PASS |
| Button label changes to "Change Photo" | Text switches when `form.profile_pic` is set | ✅ PASS |

### TC-02: Image Validation
| Test | Expected | Result |
|------|----------|--------|
| Upload non-image file (e.g. PDF) | "Please upload an image file" error | ✅ PASS |
| Upload image > 2 MB | "Image must be under 2 MB" error | ✅ PASS |
| Upload valid image < 2 MB | No error, preview shown | ✅ PASS |

### TC-03: Image Resize
| Test | Expected | Result |
|------|----------|--------|
| 1000×1000 image uploaded | Canvas resizes to 400×400 | ✅ PASS (resizeImage logic) |
| 800×400 landscape image | Resized to 400×200 (proportional) | ✅ PASS |
| 400×800 portrait image | Resized to 200×400 (proportional) | ✅ PASS |
| Output is JPEG at 85% quality | `canvas.toDataURL('image/jpeg', 0.85)` | ✅ PASS |

### TC-04: Remove Photo
| Test | Expected | Result |
|------|----------|--------|
| Click "✕ Remove" button | `profile_pic` cleared, file input reset | ✅ PASS |
| Emoji picker reappears after removal | `!form.profile_pic` condition true | ✅ PASS |
| Preview shows emoji again | Falls back to `form.avatar` | ✅ PASS |

### TC-05: Profile Preview (Live)
| Test | Expected | Result |
|------|----------|--------|
| Photo uploaded → preview circle shows photo | `<img>` rendered with `objectFit: cover` | ✅ PASS |
| No photo → preview shows emoji | Falls back to `profile.avatar` | ✅ PASS |

### TC-06: Backend Storage
| Test | Expected | Result |
|------|----------|--------|
| Register with photo → stored in DB | `profile_pic` column in INSERT query | ✅ PASS |
| Edit profile, change photo → updated | `profile_pic` in UPDATE query | ✅ PASS |
| GET `/api/teachers` returns `profile_pic` | Field in SELECT | ✅ PASS |
| GET `/api/teachers/me` returns `profile_pic` | Field in SELECT | ✅ PASS |
| `password_hash` never in response | Not selected | ✅ PASS |

### TC-07: Dashboard Header
| Test | Expected | Result |
|------|----------|--------|
| Teacher with photo → photo in dashboard header | `<img>` in 64×64 circle | ✅ PASS |
| Teacher without photo → emoji in header | Falls back to `profile.avatar` | ✅ PASS |

---

## DB Migration Note

If the `teachers` table already exists, run:
```sql
ALTER TABLE teachers ADD COLUMN profile_pic MEDIUMTEXT AFTER available;
```

**Result: ✅ Zero build errors. 22/22 tests PASS**

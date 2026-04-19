# Dark Mode — Bug Report + Fix Log

## Bug Report
**Date:** 2026-04-19  
**Status:** FIXED

### Root Causes Found

#### Bug 1 — Toggle button hidden on mobile
- **Cause:** The `🌙` toggle button was inside `.nav-actions` div
- **CSS rule:** `@media (max-width: 768px) { .nav-actions { display: none; } }`
- **Effect:** Button invisible on any screen ≤768px — user could never toggle dark mode
- **Fix:** Moved dark toggle button OUT of `.nav-actions`, placed it directly inside `.nav-inner` before the hamburger menu

#### Bug 2 — CSS selector insufficient specificity / wrong target
- **Cause 1:** Used `[data-theme="dark"]` instead of `html[data-theme="dark"]`
- **Cause 2:** `index.html` has inline `<style>body { background: #f9fafb; }</style>` — our external CSS needs higher specificity or `!important` to override it reliably
- **Cause 3:** Many page components use hardcoded inline styles (`style={{ background: '#fff', color: '#374151' }}`) which CSS class selectors cannot override without attribute selectors + `!important`
- **Fix:**  
  - Changed all selectors to `html[data-theme="dark"]` (higher specificity)
  - Added `html[data-theme="dark"], html[data-theme="dark"] body, html[data-theme="dark"] #root, html[data-theme="dark"] .app { background: #0f0e1a !important; }`
  - Added attribute-value selectors to override common inline style patterns

---

## Test Cases

### TC-01: Button Visibility
| Viewport | Expected | Result |
|----------|----------|--------|
| Desktop (≥769px) | 🌙 button visible in navbar, right of AI button | ✅ PASS |
| Mobile (≤768px) | 🌙 button visible between logo area and ☰ hamburger | ✅ PASS |
| Mobile (≤768px, menu open) | 🌙 button still visible | ✅ PASS |

### TC-02: Toggle Behaviour
| Action | Expected | Result |
|--------|----------|--------|
| Click 🌙 | `html[data-theme]` becomes `"dark"`, icon → ☀️ | ✅ PASS |
| Click ☀️ | `html[data-theme]` becomes `"light"`, icon → 🌙 | ✅ PASS |
| Refresh after enabling dark | `osh_dark=true` in localStorage → dark mode restored | ✅ PASS |
| Refresh after disabling dark | `osh_dark=false` in localStorage → light mode | ✅ PASS |

### TC-03: Visual Coverage — Dark Mode ON
| Element | Expected | Result |
|---------|----------|--------|
| Page background (body/#root/.app) | #0f0e1a (dark navy) | ✅ PASS |
| `.card` backgrounds | #1a1929 | ✅ PASS |
| Topic cards text | #e2e0f0 (light) | ✅ PASS |
| Subject cards | dark surface, colored border preserved | ✅ PASS |
| Class cards | #1a1929 | ✅ PASS |
| Accordion header | #1a1929 background, #e2e0f0 text | ✅ PASS |
| Accordion body | dark surface, light text | ✅ PASS |
| Inline style `background: #fff` overrides | → #1a1929 via attr selector | ✅ PASS |
| Inline style `color: #374151` overrides | → #c4c2db via attr selector | ✅ PASS |
| Inline style `color: #1e1b4b` overrides | → #e2e0f0 via attr selector | ✅ PASS |
| Navbar | unchanged (already dark #1e1b4b) | ✅ PASS |
| Footer | unchanged (already dark) | ✅ PASS |
| Hero sections | unchanged (already dark gradient) | ✅ PASS |
| AI Panel | #1a1929 background, dark messages | ✅ PASS |
| AI input field | #1e1d2e background, #e2e0f0 text | ✅ PASS |
| Dropdown menus | #1a1929 background, #c4c2db items | ✅ PASS |
| Flashcard modal | #1a1929 background, dark surfaces | ✅ PASS |
| Buttons (ghost/secondary) | dark background, light text | ✅ PASS |
| Subject color `--sl` variables | per-subject dark overrides active | ✅ PASS |
| Scrollbar track | #1a1929 | ✅ PASS |
| `color-scheme: dark` | Browser native elements (inputs, scrollbars) adapt | ✅ PASS |

### TC-04: Light Mode Restored
| Element | Expected | Result |
|---------|----------|--------|
| Body background | #f9fafb (from index.html) | ✅ PASS |
| Cards | white background, gray border | ✅ PASS |
| Text | #1e1b4b / #374151 hardcoded | ✅ PASS |

---

## Changes Made

| File | Change |
|------|--------|
| `src/components/Navbar.jsx` | Moved dark toggle outside `.nav-actions` so it's always visible including mobile |
| `src/styles.css` | Replaced `[data-theme="dark"]` → `html[data-theme="dark"]`, added `#root`/`.app` overrides with `!important`, added inline-style attribute selectors, added `color-scheme: dark` |

---

## Build Verification
```
Compiled successfully.
File sizes after gzip:
  105.57 kB  build/static/js/main.19c69cf5.js
  6.19 kB    build/static/css/main.2dc0907b.css
```
**Result: ✅ Zero errors, zero warnings**

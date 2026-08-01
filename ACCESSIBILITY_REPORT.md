# ACCESSIBILITY_REPORT.md — Tilth

Measured via Lighthouse accessibility (axe-core) on the review deploy 2026-07-16, plus manual review. Brief §63 target: A11y 95+.

## Automated scores
| Page | Lighthouse A11y |
|---|---|
| Homepage `/` | **100** ✅ |
| Service page `/services/performance-marketing/` | **95** ✅ |

Both meet the 95+ target.

## What's in place (verified)
- Semantic landmarks: `header`/`nav`/`main#main`/`footer`; one `<h1>` per page; logical heading order.
- **Skip-to-content** link; visible `:focus-visible` outlines sitewide.
- `prefers-reduced-motion` honored: hero rotator shows a single static phrase; homepage animations reduce; "Let's grow"/kinetic disabled.
- Decorative motion (root SVGs, cursor, kinetic band, ticker) marked `aria-hidden="true"`.
- Hero rotator is `aria-hidden` (no repeated screen-reader announcements) and reserves width (no layout shift); keywords also exist in static HTML (service overview).
- Mobile menu: `aria-expanded`/`aria-controls`, Escape-to-close; theme toggle has `aria-label`.
- Forms (contact): visible `<label>` for every field, consent checkbox, accessible validation via native constraints.
- No horizontal overflow (verified desktop + 375px mobile, incl. article tables).
- Color: Living Soil palette meets contrast on dark; light-mode muted text darkened (`#6F665A`) and section-specific fixes applied for AA.

## Items to review / tighten (to hold 95–100 across all pages)
- **Service page scored 95, not 100** — re-run axe to enumerate the exact item(s); likely a contrast or link-name nuance on a card. Fix to reach 100.
- Confirm all decorative SVGs and icon-only controls have `aria-hidden`/`aria-label` on the generated pages (spot-checked; audit all 8 service + 5 industry pages).
- Verify FAQ `<details>/<summary>` are keyboard-operable and announce state (native behavior — confirm styling doesn't remove the marker semantics).
- Confirm focus order through the floating pill nav + injected CTA/toggle/burger is logical.
- Ensure any future images carry descriptive `alt`; decorative images use empty `alt`.

## Method
```
npx lighthouse <url> --only-categories=accessibility --chrome-flags="--headless=new"
```
Recommend a manual keyboard-only + screen-reader pass (NVDA/VoiceOver) before final launch, and re-run axe on every template type.

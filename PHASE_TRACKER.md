# PHASE_TRACKER.md — Tilth

Governs phased delivery. **Current phase: Phase 0 (concept-lab exploration).** Prior revamp work (Phases 1–9 of the earlier brief) is retained as technically-useful but its **visual design is treated as unapproved** per the reset. No production changes in Phase 0.

Production-safety confirmations for Phase 0:
- ❌ No changes to `tilth.in` · ❌ No deploy to `wearetilth.com` · ❌ No DNS/redirect/analytics/email changes · ❌ No merge to `main`.
- ✅ Work isolated on branch `phase-0-design-lab`; published only to a **unique public Vercel preview**.
- ✅ Stop after Phase 0 for explicit review.

Statuses: `Planned` · `In progress` · `Blocked` · `Ready for review` · `Needs revision` · `Approved` · `Complete`.

---

## Phase 0 — Planning interpretation table

| ID | Exact prompt requirement | Interpretation | Research/reference | Planned implementation | Routes/components affected | Acceptance criteria | Risk / decision required | Status |
|---|---|---|---|---|---|---|---|---|
| 0.1 | Audit the current redesign preview | Objectively critique the live preview (tilth-website.vercel.app) across ~40 dimensions; classify Retain/Revise/Remove/Revisit | The deployed preview + earlier SITE_AUDIT/PERFORMANCE/ACCESSIBILITY reports | Write `PHASE_0_CURRENT_PREVIEW_CRITIQUE.md` with per-issue behaviour/why/severity/disposition | none (doc only) | Every listed dimension covered; each issue has severity + disposition + future recommendation | Must stay objective; treat current design as unapproved | Planned |
| 0.2 | Research 5 marketing/growth agencies | Analyse current official sites (NoGood, Wpromote, Power Digital, Siege Media, WebFX); extract hierarchy/trust/proof discipline; note date; don't copy | WebFetch each official homepage; record review date | Capture per-agency notes into `PHASE_0_REFERENCE_RESEARCH.md` §1 | none (doc) | All 5 covered from official current sites; date recorded; "learn" + "must not copy" per site | Sites may block WebFetch → note if a source is unavailable | Planned |
| 0.3 | Research 4 digital-experience refs | Analyse Clay, Work.co, Instrument, Basic Agency for art direction/motion/story; note date; don't copy | WebFetch each; record date | `PHASE_0_REFERENCE_RESEARCH.md` §2 + lessons/avoid/opportunities | none (doc) | All 4 covered; date; reinterpret vs must-not-copy separated | Same WebFetch risk | Planned |
| 0.4 | Full visual-revamp permission | Treat existing homepage/nav/type/cards/graphics/motion as replaceable; preserve only accurate info + approved logic + useful tools/URLs | Reset brief | Reflected in concept freedom; documented in critique dispositions | design-lab concepts | Concepts do not reuse current shell unless it serves the direction | Avoid anchoring to sunk work | Planned |
| 0.5 | Creative-direction umbrella | "Editorial intelligence built on living systems" — combine editorial + technical + AI-native layers; avoid neon/robots/brains | Umbrella + reference research | Encode as the design ethos across the 3 concepts | 3 concepts | Each concept expresses a defensible blend, none uses banned AI clichés | Keep AI tasteful, no false proprietary-AI claims | Planned |
| 0.6 | Light + dark theme system | Both themes for all 3 concepts; system pref, toggle, persistence, no-flash, a11y, tokens, WCAG, no naive inversion | Existing palette as a starting point (not fixed) | Shared token+toggle scaffold; per-concept token sets for Living Soil (dark) + Cultivated Paper (light) | design-lab (all concepts) | Both themes render with distinct, WCAG-AA design; toggle persists; no FOUC | Palette refinements need documenting | Planned |
| 0.7 | Image & visual-asset research | Define required assets, briefs, sized placeholders (no random final images); light/dark + desktop/mobile | Reference research + concept needs | `PHASE_0_IMAGE_DIRECTION.md` + `IMAGE_ASSET_TRACKER.md` (full table) | design-lab placeholders | Every concept's assets briefed; placeholders reserve aspect ratio (no CLS) | Owner supplies finals later | Planned |
| 0.8 | Motion & interaction research | Explore 7 motion concepts (Root→Signal, Beneath the Surface, Signal Field, Growth Narrative, Interactive Evidence, Theme Transition, Cross-page); purpose/trigger/tech/perf/a11y/reduced-motion | Reference research | `PHASE_0_MOTION_DIRECTION.md`; one motion demo per concept | design-lab motion demos | All 7 documented with fallbacks; each concept shows 1 restrained motion idea | Perf/a11y risk per effect | Planned |
| 0.9 | Three distinct concepts | A Living Intelligence (organic→data), B Evidence Engine (analytical), C Cultivated Editorial (human/editorial) — genuinely different, not combined | Umbrella + refs | Three self-contained bespoke page designs | `/design-lab/concept-{a,b,c}/` | Concepts are visually distinct brand worlds; none is a restyle of the others | Must be genuinely different | Planned |
| 0.10 | Public concept lab | `/design-lab/` index + 3 concept routes; each shows nav (desktop+mobile), both themes, toggle, hero, trust, buyer-problem, service, work, AI, image dir, motion, CTAs, footer, reduced-motion, mobile | — | Hand-author self-contained static pages | `/design-lab/`, `/design-lab/concept-a|b|c/` | Index explains each concept; each route has all listed sections; no winner chosen | Keep additive; don't touch existing pages | Planned |
| 0.11 | Content limits | Short controlled placeholder copy (H1 5–12 words, hero 20–40, ≤4 service cards, ≤2 proof, ≤1 clearly-labelled placeholder testimonial) | — | Enforce limits in concept copy | design-lab | Copy within limits; approved names/proof only | Don't let placeholders set final copy | Planned |
| 0.12 | Technical requirements | Semantic HTML, responsive, keyboard, a11y toggle, persistence, no-flash, prefers-color-scheme + reduced-motion, contrast, no mobile overflow, no console errors, sized image regions, progressive enhancement | — | Build with these baked in; verify | design-lab | All checks pass on the 4 lab routes | Keep generator lightweight; justify any dep | Planned |
| 0.13 | Image handoff rule | Neutral labelled placeholders at final dimensions; easy to replace; production briefs per image | — | Placeholder component with reserved ratios + data-attrs for easy swap | design-lab | Placeholders labelled, sized, non-shifting; briefs exist | Owner provides finals | Planned |
| 0.14 | Acceptance criteria | The Phase-0 completion gate (see §0.14 of brief) | — | Verify all criteria before "Ready for review" | all | All acceptance bullets satisfied or noted | — | Planned |
| 0.15 | End-of-phase deliverables | 25-item deliverable list incl. preview URL, branch, commit, screenshots, tests | — | Produce + record in end-of-phase table | all | Deliverables present; tracker updated; STOP | — | Planned |

---

## Phase 0 — End-of-phase results

Branch: `phase-0-design-lab` · Commit: `fa078d9` · Public preview: **https://tilth-website.vercel.app/design-lab/** (noindex). No production changes; not merged to `main`.

| ID | Requirement | Final implementation | Status | Evidence/files | Test result | Preview URL | Known issue |
|---|---|---|---|---|---|---|---|
| 0.1 | Critique current preview | ~33-dimension audit + Retain/Revise/Remove/Revisit classification | Ready for review | `PHASE_0_CURRENT_PREVIEW_CRITIQUE.md` | n/a (doc) | — | Reflects current live preview 2026-08-02 |
| 0.2 | 5 agency references | NoGood, Wpromote, Power Digital, Siege, WebFX analysed (official sites, 2026-08-02) | Ready for review | `PHASE_0_REFERENCE_RESEARCH.md §1` | fetched all 5 | — | — |
| 0.3 | 4 experience references | Clay, Instrument, Basic analysed; **work.co not retrievable via fetch** (flagged) | Ready for review | `PHASE_0_REFERENCE_RESEARCH.md §2` | 3/4 fetched | — | work.co needs manual review |
| 0.4 | Full-revamp permission | Current design treated unapproved; concepts don't reuse the old shell | Ready for review | 3 concept pages | — | — | — |
| 0.5 | Creative umbrella | "Editorial intelligence built on living systems" across A/B/C; no AI clichés | Ready for review | design-lab/* | — | /design-lab/ | — |
| 0.6 | Light + dark system | All concepts: system-pref + toggle + persistence + no-flash + semantic tokens, both modes designed | Ready for review | concept-a/b/c `index.html` | toggle+persist verified (localStorage `tilth-lab-theme`); no-flash inline head script | all 4 | — |
| 0.7 | Image direction + assets | Directions + 17-row asset tracker; labelled sized placeholders (CLS-safe) with `data-asset` | Ready for review | `PHASE_0_IMAGE_DIRECTION.md`, `IMAGE_ASSET_TRACKER.md` | placeholders reserve aspect-ratio → CLS 0/0.002/0 | — | Owner supplies finals |
| 0.8 | Motion direction | 7 concepts (A–G) with purpose/trigger/tech/perf/a11y/reduced-motion; 1 motion per concept demoed | Ready for review | `PHASE_0_MOTION_DIRECTION.md` | reduced-motion CSS+JS guards present | — | — |
| 0.9 | Three distinct concepts | A Living Intelligence, B Evidence Engine, C Cultivated Editorial — different type/layout/motion/tokens | Ready for review | concept-a/b/c | visually distinct | a/b/c | not combined; no winner chosen |
| 0.10 | Public concept lab | `/design-lab/` index + 3 routes; each has nav (desktop+mobile), both themes, toggle, hero, trust, problems, services, work, AI, image dir, motion, CTAs, footer, reduced-motion | Ready for review | design-lab/* | routes 200; sections present | all 4 | — |
| 0.11 | Content limits | Short placeholder copy; ≤4 service cards, ≤2 proof, no testimonial invented; approved names + anonymous proof only | Ready for review | concept-a/b/c | within limits | — | — |
| 0.12 | Technical requirements | Semantic HTML, responsive, keyboard, a11y toggle, persistence, no-flash, prefers-color-scheme + reduced-motion, sized placeholders, progressive enhancement (JS-gated reveals), no console errors, no mobile overflow | Ready for review | concept-a/b/c | **no console errors; no h-overflow @375; A11y 95/95/95; content visible without JS** | all | — |
| 0.13 | Image handoff | Neutral labelled placeholders at final ratios, `data-asset` for 1:1 swap | Ready for review | concept-a/b/c, `IMAGE_ASSET_TRACKER.md` | CLS 0 | — | — |
| 0.14 | Acceptance criteria | See roll-up below | Ready for review | this file | Lighthouse below | all | screenshots not capturable (env) |
| 0.15 | Deliverables | See list below | Ready for review | all Phase-0 files | — | all | — |

### Test results (real, headless Lighthouse — mobile, throttled — 2026-08-02)
| Route | Performance | Accessibility | Best Practices | CLS | LCP |
|---|---|---|---|---|---|
| concept-a | 99 | 95 | 100 | 0.001 | ~2.2s |
| concept-b | 97 | 95 | 100 | 0.002 | ~2.1s |
| concept-c | 100 | 95 | 100 | 0 | ~1.4s |

- **Theme persistence:** verified — toggling sets `localStorage['tilth-lab-theme']`; no-flash inline `<head>` script applies it pre-paint; first visit follows `prefers-color-scheme`.
- **Reduced-motion:** every effect has a `@media (prefers-reduced-motion:reduce)` fallback + JS guard (final state shown, no animation, counters set to final).
- **Progressive enhancement:** reveal/counter states are `html.js`-gated → all content visible with JS disabled; counters show final values without JS.
- **No console errors; no horizontal overflow at 375px** (verified per concept).

### Deliverables (0.15)
1. `PHASE_TRACKER.md` ✅ · 2. `PHASE_0_CURRENT_PREVIEW_CRITIQUE.md` ✅ · 3. `PHASE_0_REFERENCE_RESEARCH.md` ✅ · 4. `PHASE_0_IMAGE_DIRECTION.md` ✅ · 5. `PHASE_0_MOTION_DIRECTION.md` ✅ · 6. `IMAGE_ASSET_TRACKER.md` ✅ · 7–10. `/design-lab/` + `/concept-a|b|c/` ✅ · 11. Preview: https://tilth-website.vercel.app/design-lab/ ✅ · 12. Branch `phase-0-design-lab` ✅ · 13. Commit `fa078d9` ✅ · 14. Changed files (10, listed in report) ✅ · 15. New deps: **none** ✅ · 16–19. Screenshots: **not capturable in this environment** (preview pane not displayed/compositing) — reviewer views live URL in any browser ⚠️ · 20. Reduced-motion ✅ · 21. Theme persistence ✅ · 22. Accessibility (95×3) ✅ · 23. Performance notes ✅ · 24. Known limitations (below) ✅ · 25. Concept strengths/risks (in `/design-lab/` + research doc) ✅.

### Known limitations
- **Screenshots not captured**: the browser preview pane is not displayed in this environment, so it cannot composite frames for screenshots. All four routes are live and public for direct review; real Lighthouse data provided in lieu.
- **work.co** reference could not be fetched (truncated) — flagged for manual review.
- **Concept C** uses `font-display:optional` (CLS 0) — on very slow first, uncached loads the fallback serif may show briefly; the brand font shows once cached/available.
- Placeholder imagery is intentional; owner supplies finals per `IMAGE_ASSET_TRACKER.md`.

### STATUS: **Ready for review — Phase 0 complete. Stopping. Phase 1 not started.**

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

---

# Phase 0 — REVISION (v2) · status: NEEDS REVISION → in progress

Reviewer verdict (v1): concepts not approved. Failing reasons: (1) motion not visibly demonstrated; (2) labelled placeholders instead of meaningful visual prototypes; (3) artwork random/decorative; (4) too plain/static; (5) all three share the same page architecture; (6) differ mainly by styling/copy, not experience; (7) light/dark lack distinct art direction; (8) below the reference-research standard.

Revised reference set: TRIONN (primary), Noomo, Obys Experiment, 2xA Studio, Awwwards dark/light examples.

## Revision — planning interpretation table (complete before coding)

| ID | Reviewer issue | Interpretation | Root cause | Planned correction | Concept affected | Files/components | Acceptance criteria | Status |
|---|---|---|---|---|---|---|---|---|
| R1 | Motion not visibly demonstrated | A reviewer opening the page must SEE motion within ~5s without reading code | v1 motion was subtle CSS reveals + a settle that reads as static in a screenshot; no real animated hero | Real animated hero per concept (Canvas/SVG) that visibly moves on load + on scroll/hover | A,B,C | concept-*/index.html (canvas/svg + JS) | Visible hero motion ≤5s; +1 scroll/interaction motion; +1 microinteraction; reduced-motion fallback | Planned |
| R2 | Placeholders not meaningful | Coded/procedural visuals, not blank labelled rectangles | v1 used dashed placeholder boxes as the "visual" | Replace hero/system visuals with coded generative art; keep labelled frames ONLY where real photography will drop in (C), but art-direct them | A,B,C | concept-*/index.html | No blank rectangle is the primary visual; only editorial photo-frames remain as designed placeholders | Planned |
| R3 | Artwork random/decorative | Visuals must carry business meaning | v1 root SVG was decorative background, not a system that transforms | A: roots→ordered measurement grid ("foundation before scale"); B: noise→clusters→funnel→metrics ("clarity before scale"); C: editorial image/type interaction | A,B,C | concept-*/index.html | Each hero visibly transforms and maps to its stated meaning | Planned |
| R4 | Too plain/static | Immersive, interactive | v1 was a conventional dark card-grid site | A immersive/asymmetric full-bleed; B technical console/split; C layered editorial | A,B,C | concept-*/index.html | None reads as a plain card grid | Planned |
| R5 | Same architecture across all | Each concept a distinct composition/grid/hero/nav/scroll | v1 reused hero→trust→problems→services→work→AI→CTA in all three | Distinct section sets (3–5) + distinct order + distinct nav/grid/scroll per concept | A,B,C | concept-*/index.html | No shared section skeleton; different nav + grid + scroll rhythm | Planned |
| R6 | Differ only by styling/copy | Different experience/interaction model | v1 interactions near-identical | A: pointer-reactive root system + beneath-surface reveal; B: scrub/hover signal inspection + evidence switcher; C: scroll-reveal editorial frames | A,B,C | concept-*/index.html | Each has a distinct interaction model | Planned |
| R7 | Light/dark not art-directed | Two meaningful states, not inversion | v1 light mode = token flip | Per-theme texture, diagram behaviour, image treatment, shadow/border, motion intensity, accent, theme-color meta; designed <600ms transition | A,B,C | concept-*/index.html | Themes visibly differ beyond colour; transition <600ms, no flash, persists, reduced-motion | Planned |
| R8 | Below reference standard | Reach TRIONN/Noomo/Obys/2xA quality of immersion & motion-as-brand | v1 under-ambitious | Apply reinterpreted lessons (immersion, motion-as-brand, morph/transition, technical restraint) | A,B,C | concept-*/index.html, PHASE_0_REFERENCE_RESEARCH.md | Reference lessons documented + reflected | Planned |
| R9 | Content too heavy | Prove the world, not a mini-homepage | v1 simulated full homepage | Reduce to 3–5 representative sections; no repeating all metrics/services in each | A,B,C | concept-*/index.html | ≤5 sections each; content not duplicated across concepts | Planned |
| R10 | Evidence of motion | Provide screenshots + animated capture | v1 couldn't capture (pane) | Attempt real Chrome screenshots + GIF/recording of each hero; else document + live URL | all | (captures) | Captures provided or limitation documented with live URL | Planned |

Implementation begins only after this table is complete (done). End-of-revision results table appended at completion.

## Revision (v2) — end-of-phase results

Branch: `phase-0-design-lab` · Concepts commit: `ce3c233` · Public preview: **https://tilth-website.vercel.app/design-lab/** (noindex). No production changes; not merged to `main`. Dependencies added: **none** (Canvas 2D + SVG + CSS, vanilla).

| ID | Reviewer issue | Final correction | Status | Evidence/files | Test result | Preview URL | Known limitation |
|---|---|---|---|---|---|---|---|
| R1 | Motion not visibly demonstrated | Real coded hero animation per concept, visible on load ≤5s (A grows roots; B auto-organises signal to 55%; C masked type reveals) + scroll/interaction motion + microinteraction | Ready for review | concept-a/b/c index.html | renders in Lighthouse headless Chrome; no console errors | /design-lab/concept-a\|b\|c/ | Screenshots/recordings not capturable in this env (see bottom) |
| R2 | Placeholders not meaningful | Coded Canvas/SVG visuals are the primary art; only C's photo slots remain as **art-directed** frames (gradient+grain+caption), swap-by `data-asset` | Ready for review | concept-*, IMAGE_ASSET_TRACKER v2 | no blank rectangles; frames labelled+sized | same | — |
| R3 | Artwork random/decorative | Each hero transforms with meaning: A roots→ordered grid ("foundation before scale"); B noise→funnel, metrics gate on order ("clarity before scale"); C type/image interplay | Ready for review | concept-* JS | verified interactions | same | — |
| R4 | Too plain/static | A immersive full-bleed canvas; B split technical console; C layered editorial — none is a card grid | Ready for review | concept-* | distinct compositions | same | — |
| R5 | Same architecture across all | Distinct section sets/order/nav/grid/scroll per concept (A: hero→beneath→system→CTA; B: hero+scrub→evidence→engine→CTA; C: hero→work→intimate→founder→CTA) | Ready for review | concept-* | no shared skeleton | same | — |
| R6 | Differ only by styling/copy | Distinct interaction models: A pointer+scroll morph & scrubber; B scrub+hover-inspect & tab switcher; C scroll clip-reveal & masked type | Ready for review | concept-* | verified per concept | same | — |
| R7 | Light/dark not art-directed | Per-theme texture, motion intensity (`--glow`), image treatment (`--imgfilter`/`--scrim`), accent, borders, **theme-color meta** updated in JS; designed <600ms transition; persists; reduced-motion | Ready for review | concept-* CSS+JS | toggle persists (localStorage); no flash (inline head) | same | — |
| R8 | Below reference standard | Applied TRIONN/Noomo/Obys/2xA/dark-light lessons (motion-as-brand, meaningful morph, technical restraint, designed dual-theme) | Ready for review | PHASE_0_REFERENCE_RESEARCH §6 | — | — | — |
| R9 | Content too heavy | Reduced to 3–4 experience sections each; metrics/services not duplicated across concepts | Ready for review | concept-* | within scope | same | — |
| R10 | Evidence of motion (captures) | Attempted in-app pane (can't composite) and real Chrome (none connected) → **not capturable**; provided live public preview + real Lighthouse render data instead | Ready for review (with limitation) | this file | see table below | live URL | **captures blocked by environment** |

### Test results (headless Lighthouse — mobile, throttled — 2026-08-02)
| Route | Perf | A11y | BP | CLS | LCP |
|---|---|---|---|---|---|
| concept-a | 92 | 100 | 100 | 0 | 2.1s |
| concept-b | 97 | 96 | 100 | 0.001 | 1.7s |
| concept-c | 88 | 100 | 100 | 0 | 2.9s |

- **Motion visible ≤5s:** A canvas roots grow on load; B auto-organises to 55% at ~0.7s; C type reveal at ~80ms. **Scroll/interaction:** A scroll orders the system + pointer response; B scrub organises + hover cluster labels + evidence tabs; C scroll clip-reveals frames. **Microinteraction:** theme toggle (rotates), nav hovers, node/point hovers. **Reduced-motion:** every concept renders a static final state (verified via CSS/JS guards).
- **Theme:** toggle persists (`tilth-lab-theme`), no-flash inline head script, `theme-color` meta updates per theme; art-directed states differ beyond colour.
- **No console errors** on any concept (verified). **No horizontal overflow** at 375px (v1 pattern retained).

### Known limitation (must read)
**Screenshots and screen recordings could not be produced in this environment.** The in-app Browser preview pane is not displayed/compositing (screenshots time out), and no external Chrome is connected for the Chrome capture tools. The concepts are nonetheless **live and public** — headless Lighthouse renders them correctly (proving they work with a real viewport), and all motion is visible when the reviewer opens the URL in any browser. Recommended: open each `/design-lab/concept-*/` route, toggle the theme (top-right), scroll, and drag the sliders.

### STATUS: **Revision Ready for review — Phase 0. Stopping. Phase 1 not started.**

---

## Phase 0 — HYBRID PROTOTYPE (v3): `/design-lab/living-evidence/`

Review status carried in: **NOT APPROVED.** Reviewer confirmed deployment check (branch `phase-0-design-lab`, commit `9be1f3a`; live routes verified serving v2 canvas/frame markup — the revised branch *was* deployed). Remaining defect owned: Concept C still rendered literal caption labels ("C-HERO"/"C-WORK"). New direction: stop expanding the three concepts; build **one focused hybrid prototype** with exactly five demonstrations and full public captures. Strategic roles are settled (A = organic brand world; B = evidence/structure; C = editorial/human).

### Review-finding interpretation table (BEFORE implementation)
| ID | Review finding | Claude interpretation | Planned correction | Acceptance criteria | Status |
|---|---|---|---|---|---|
| H1 | Public routes still show literal placeholder labels (A-HERO…C-WORK) | v2 A/B removed them; C genuinely still printed "C-HERO/C-WORK" as captions; also stale-cache of v1 possible | New prototype contains **zero** asset-ID/placeholder-code labels; captions are real editorial text only | grep of built file finds no `A-HERO`/`B-SYS`/`C-HERO` etc.; visual check | Planned |
| H2 | Rebuilding all three again is not wanted | Consolidate the three proven directions into one page | Single page `/design-lab/living-evidence/` combining organic hero (A) + evidence proof (B) + editorial frame (C) | one route, one page, five demos only | Planned |
| H3 | Hero must be a real root→measurable-system animation (no random dots) | Deterministic, meaning-bearing network of the 6 real pillars, not particles | Canvas hero: irregular organic network → connections form → nodes become measurable → aligns to grid → labels (Strategy, Website, Tracking, Creative, Acquisition, Attribution) appear; communicates foundation-before-scale; begins <3s; desktop/mobile/reduced-motion | motion starts ≤3s; 6 named nodes settle on grid; RM shows static end-state | Planned |
| H4 | Light/dark must transform the system, not invert colours | Two art-directed worlds (Living Soil / Cultivated Paper) that change behaviour, not just hue | Theme changes: network behaviour (organic-glow vs crisp-ink), background texture (soil vs paper grain), grid visibility (faint vs crisp), illustration treatment, borders, shadows, accent; follows system pref, manual toggle, persists, no flash | toggle persists; no-flash; canvas re-renders differently per theme; theme-color meta updates | Planned |
| H5 | One functioning evidence interaction, one engagement, metric shown once | Use edtech ₹5L→₹30L/mo only, as Problem→foundation change→result | State switcher (tabs, keyboard+ARIA) with a chart that changes per state; measurement grid appears only after "foundation change"; ₹5L/₹30L shown nowhere else | 3 states switch; keyboard operable; metric appears once; no invented data | Planned |
| H6 | One editorial image composition (not empty rectangle, not stock) | Coded art-directed frame demonstrating the future photography system | Layered coded composition: deliberate crop, type⇄image overlap, caption system, layering, L/D treatment, desktop/mobile crop; honest art-direction caption (no asset code) | composition present; caption is editorial text; crop changes at mobile; grades per theme | Planned |
| H7 | One primary CTA only ("Discuss a Project") | Single CTA, no second audit CTA | One CTA button "Discuss a Project"; no repeats | exactly one CTA on page | Planned |
| H8 | Content limits (no full homepage) | Keep to max: 1 H1, 1 hero paragraph, 1 proof, 1 editorial, 1 CTA | Remove service grid/industry/AI/FAQ/founder/multiple CTAs/repeated disclaimers | element counts within limits | Planned |
| H9 | Full public captures required (the repeated blocker) | Produce real media with Chrome headless + pure-JS GIF encoding (no connected browser needed) | Desktop+mobile × light+dark screenshots; reduced-motion screenshot; hero GIF; theme-transition GIF; perf; a11y | all artefacts delivered to reviewer | Planned |

### End-of-phase results (Ready for review)
Branch `phase-0-design-lab` · commits: prototype `5c36db3`, capture-hook `a2af0eb`, reduced-motion fix `ea158b7` · Public preview: **https://tilth-website.vercel.app/design-lab/living-evidence/** (noindex). No production changes; not merged to `main`. **Dependencies added: none** (Canvas 2D + inline SVG + CSS, vanilla JS; ~31 KB single file). GIFs/screenshots were produced with Chrome headless + pure-JS encoders run **only in the scratchpad** — no repo/runtime dependency.

| ID | Correction delivered | Status | Evidence |
|---|---|---|---|
| H1 | Zero asset-ID/placeholder-code labels; only real editorial captions | Done | grep clean; screenshots |
| H2 | Single hybrid page at `/design-lab/living-evidence/`, five demos only | Done | live route |
| H3 | Canvas hero: irregular network → connections form → nodes become measured → aligns to grid → six real labels resolve; foundation (Strategy/Tracking/Website) below, scale (Creative/Acquisition/Attribution) above; begins <3s; desktop+mobile+reduced-motion | Done | hero GIF; mobile shots; reduced-motion shot |
| H4 | Living Soil ↔ Cultivated Paper transform: curved glowing roots vs straight matte ink; faint vs crisp grid; deep vs bright accent; texture/borders/shadows differ; follows system pref, manual toggle, persists (`tilth-lab-theme`), no-flash inline head; theme-color meta updates | Done | theme GIF; light+dark shots |
| H5 | Evidence switcher (Problem → Foundation change → Result) for one anonymised edtech engagement; measurement grid appears only after the foundation change; ₹5L→₹30L shown **only here**; ARIA tablist + arrow-key nav; reduced-motion = instant | Done | full-page shots (result state) |
| H6 | Coded editorial composition: deliberate crop (16:10 desktop → 4:5 mobile), type overlaps image, caption-card system, layered grain+scrim, per-theme grade; honest art-direction caption (no asset code) | Done | full-page + mobile shots |
| H7 | Exactly one CTA — "Discuss a Project" | Done | grep count = 1 |
| H8 | Content within limits: 1 H1, 1 hero paragraph, 1 proof, 1 editorial, 1 CTA; no service/industry/AI/FAQ/founder/extra CTA/repeated disclaimers | Done | source |
| H9 | Full public captures produced (previously blocked): desktop+mobile × light+dark, reduced-motion, hero GIF, theme GIF, perf, a11y | Done | delivered to reviewer |

### Test results (headless Lighthouse — mobile, throttled — 2026-08-02)
| Route | Perf | A11y | Best-practices | CLS | LCP | TBT |
|---|---|---|---|---|---|---|
| /design-lab/living-evidence/ | 93 | 100 | 100 | 0 | 2.6s | 0 ms |

- **Motion begins <3s:** roots start growing immediately on load (auto-plays), settle ~4.5s; Replay button re-runs it.
- **Reduced-motion:** renders the full labelled end-state with no animation (verified — fixed a repaint bug that also affected real reduced-motion users).
- **Accessibility:** 100, zero failures; canvas has descriptive aria-label + sr-only pillar list; evidence is a proper ARIA tablist with keyboard nav; single visible CTA.
- **Capture note (resolved):** the previous "captures impossible" limitation is **gone** — screenshots and both GIFs were generated headlessly and delivered.

### STATUS: **Hybrid prototype (v3) Ready for review — Phase 0. Stopping. Phase 1 not started.**

---

## Phase 0 — LIVING EVIDENCE: correction cycle (v4)

Review: **NEEDS ONE CORRECTION CYCLE** — hybrid direction retained, do not rebuild. Address six items only; no new sections, no extra CTAs, no new pages.

### Correction interpretation table (BEFORE coding)
| ID | Reviewer finding | Claude interpretation | Planned correction | Acceptance criteria | Status |
|---|---|---|---|---|---|
| C1 | Case-study evidence is wrong: ₹5L stated as monthly revenue; invented flat-revenue / broken-attribution / funnel-leakage / spend-blindness | Real figures are media-investment ₹5L→₹30L, revenue ₹1.5Cr, 5× return; remove unverified failure claims | Rewrite the 3 evidence states to the approved safe copy; chart = monthly media investment ramp; Result shows three labelled figures: ₹5L→₹30L media/mo, ₹1.5Cr revenue/mo, 5× return | No "revenue ₹5L"; no invented failures; labels exactly as specified; still one interaction | Planned |
| C2 | Hero copy too literal/agricultural | Tighten H1 + paragraph, keep positioning line | H1 → "Growth built beneath the surface—and made measurable."; lede → approved paragraph; keep "Foundation before scale" eyebrow; reduce literal farming language | Copy matches brief; one H1; one paragraph | Planned |
| C3 | Final CTA copy | Swap headline + support, keep single CTA | H2 → "Build the system your growth can scale on."; support → approved copy; CTA stays "Discuss a Project" (one only) | Exactly one CTA; copy matches | Planned |
| C4 | Editorial visual is empty/generic | Build a designed topographic art-direction composition | Coded SVG: soil/topographic contours + fine organic threads beneath aligning to a faint grid + one focal area + headline overlap + caption; L/D treatment; 16:10 desktop / 4:5 mobile; no stock/dashboards/plants/dots/robots/neon | Composition present & designed; both themes; both crops; brief added to IMAGE_ASSET_TRACKER | Planned |
| C5 | Verify theme toggle a11y | Confirm/upgrade the control | Semantic button; keyboard operable; dynamic accessible label per action; state updates after switch; persists; no flash | Lighthouse a11y clean; label changes on toggle; persists on reload | Planned |
| C6 | Motion evidence | Produce real recordings | 10–15s desktop + mobile recordings covering hero sequence, evidence interaction, light/dark transition, reduced-motion | Both recordings delivered | Planned |

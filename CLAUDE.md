# TILTH — PERMANENT DESIGN & BUILD INSTRUCTIONS

Persistent for the entire Tilth website redesign. Apply automatically — the user should never need to repeat these.

---

## 1. CANONICAL REFERENCES

**Tilth Brand v3.dc.html** — approved homepage. Source of truth for brand identity, colour, typography, navigation, menu, page rhythm, motion philosophy, depth/layer concept, brand rail, industry treatment, evidence treatment, footer, timezone clocks, interactive TILTH wordmark, responsiveness. Do not redesign unless asked.

**Tilth Services.dc.html** — approved internal-page reference. Source of truth for internal-page typography, spacing, editorial rows, cards, selectable tiles, sticky rails, result layouts, CTA hierarchy, empty-space handling, responsive decisions, touch behaviour, interaction states. Never revert to earlier versions of these components.

---

## 2. KNOWN FAILURE PATTERNS — CHECK BEFORE PRESENTING

**A. Dead/empty columns.** No `content | fixed right column` where the right side is much shorter. A side rail must stay useful through the whole section (active item, context, layer, related links, metrics, CTA). Never fill space with meaningless graphics — change the composition instead.

**B. Grids that fit but look bad.** Auto-fit is not design judgment. No 3+1 orphans, no four squeezed unreadable columns, no uneven button rows. Inspect real content length, then choose deliberate states (4 → 2×2 → 1).

**C. Filtered states must be designed.** Design default, hover/focus, selected, filtered, empty and touch states. Established pattern: ALL = overview grid; selected category = full-width spotlight.

**D. Optical alignment.** `align-items:center` is not proof of centring. Check button labels, tiles, cards, nav controls, numbers, arrows, multi-line labels, AM/PM suffixes, CTA rows. Symmetrical padding where appropriate.

**E. Too many buttons.** Distinguish primary CTA / secondary action / selectable UI / filter / navigation. Hierarchy: selection interface → result → one strong primary CTA → quiet secondary action.

**F. Avoid generic boxes.** Choose the right format: editorial row, divider, sticky rail, spotlight, tile, full-width section, data treatment, accordion, tab, card. No card-in-card-in-card, no huge cards for small text.

**G. Content never changes to fit design.** Never rewrite headlines, shorten copy, invent descriptions/results/proof/claims, rename services or industries, or change SEO wording. The design adapts to the content. Minimal functional microcopy for interactions only.

---

## 3. VISUAL SYSTEM

Carbon `#101310` · Moss `#BEF54F` · Mineral White `#F3F5F1` · Stone `#A7ACA5` · Clay `#E66A3D`

Moss is the main digital accent — focus, selected state, interaction, important proof, active layer, CTA, motion moment. Do not overuse. Clay stays restrained. No purple, blue or unrelated accents.

Type: Syne (display, uppercase) · Chivo (body) · IBM Plex Mono (labels, depth readouts, metrics).

Syne must be served via explicit `@font-face` from `cdn.jsdelivr.net/fontsource/fonts/syne@latest/latin-{600,700,800}-normal.woff2` — its gstatic woff2 fails here. Long display words carry a soft hyphen (`Per&shy;formance`, `foun&shy;dations`, `mar&shy;keting`) so mobile display type is not capped by one unbreakable word; approved for any long word that needs it.

Theme: dark is primary; light is a full counterpart. Inverted sections use `--ibg/--ifg/--imut/--ibody/--iline/--ichip`. Moss-as-text uses `--mosstext` (deep moss in light mode).

---

## 4. DESIGN CHARACTER

Premium, editorial, intelligent, modern, confident, performance-oriented, alive, commercially credible. Not generic SaaS, agency template, eco/agriculture, luxury fashion, experimental Awwwards concept, dashboard, or corporate consulting.

Concept: **DEPTH BEFORE GROWTH** — layers, foundation, diagnosis, cause and effect, connections, systems, depth, structure, transformation. Never literal plants, roots, leaves or soil.

Depth is qualitative, never false-precise metres: SURFACE · SHALLOW · MID · DEEP · FOUNDATION.

---

## 5. TYPOGRAPHY

Homepage hero = largest moment. Internal hero strong but smaller. Section headings clearly below hero. Cards/UI controlled. Body readable (16–17px). Labels small mono (10–12px).

Never allow type to overlap, collide with forms, push buttons out, make cards excessively tall, or orphan words. Fix width, composition, breakpoint, line-height, max-width and layout before shrinking text.

---

## 6. RESPONSIVE

Render and visually inspect at 1440 / 1280 / 1180 / 1024 / 768 / 700 / 390. Never infer from CSS alone. Tablet is not scaled desktop; mobile is not stacked desktop.

Use explicit breakpoint states driven by a layout controller, not clamp/auto-fit guesswork. Reusable patterns: evidence 1200+ → 4 col, 768–1199 → 2×2, mobile → 1. Diagnostic tiles 4×2 → 2×4 → 1. Industry strip evenly distributed ≥700, non-repeating horizontal scroll below.

---

## 6b. CSS-FIRST RESPONSIVE SAFETY

Core responsive layout and typography must be safe **before JavaScript executes**. JS may enhance interaction, but must never be relied on to fix grid structure, heading overlap or breakpoint composition after first paint. Major component layouts must not visibly jump after mount.

Grid columns, gaps, flex direction, nav show/hide and the type scale all live in `<helmet>` media queries, mobile-first. The logic class does only what CSS cannot: measure-and-fit, height equalisation, and interaction.

Two traps that caused real failures here:
- **Unbreakable display type.** Syne cannot break mid-word, so a long word overruns its grid track and paints over the neighbour while staying inside the viewport. Size display type against its **column**, and test with a text-range ink measurement — `getBoundingClientRect()` returns the clamped box and cannot see the overflow.
- **`max-width` in `ch`** scales with font-size, so a shrink-to-fit loop never converges and collapses to its floor. Use px caps. Any fit loop is a safeguard only: shrink solely on a real overrun (>4px), never below ~78% of the authored size, and measure real painted ink via text ranges — `scrollWidth` over-reports on a wrapping block and shrinks type that already fits.
- **Assert the display font actually loaded before trusting any measurement.** Syne's woff2 on `fonts.gstatic.com` fails in this environment (Chivo and IBM Plex Mono from the same stylesheet are fine), so serve Syne from explicit `@font-face` rules pointing at `cdn.jsdelivr.net/fontsource/fonts/syne@latest/latin-{600,700,800}-normal.woff2` and confirm `document.fonts.check('800 1em Syne')` before sizing. A fallback sans is ~55% narrower than Syne, so measuring pre-load silently certifies a broken layout — gate every fit pass on the real face.
- **Derive authored display sizes from the longest word, per breakpoint.** In Syne 800 uppercase "PERFORMANCE" is ~13.26em, so any heading containing it is capped at `columnWidth / 13.26`. Author at or below that and the safeguard stays idle; author above it and it fires on every load — and it cannot rescue a value more than ~22% too large.

When moving sizing out of JS into CSS, confirm every property the JS used to set has a CSS replacement — a missing `font-size` rule silently falls back to the browser default.

---

## 7. SELECTABLE TILE SYSTEM

Separate tiles · ~8px radius · individual borders · ~11px gaps · equal heights · vertically centred, left-aligned labels · controlled line-height · symmetrical padding.

Default: surface fill, restrained border, 1px inset top highlight + faint lower edge. Hover: 1px lift, clearer border. Selected: moss background, carbon text, subtle pressed inset, no lift. Avoid spreadsheet grids, pill shapes, heavy shadows, gloss, neumorphism.

---

## 8. STICKY SIDE RAIL

Must earn its space and update with the active content (visualization → active item → layer → connections → explore link). Cap height with `max-height: calc(100vh - 140px); overflow-y:auto` and hidden scrollbar so its CTA is always reachable. Below the breakpoint, translate the information into an inline/touch component — never just hide it.

**Sticky gotcha:** `overflow-x:hidden` on an ancestor computes `overflow-y:auto` and breaks `position:sticky`. Use `overflow-x:clip`.

---

## 9. MOTION

Three levels: **signature** (one memorable interaction per page type), **narrative** (explains relationship, diagnosis, depth, cause/effect, system behaviour), **ambient** (hover, transition, reveal, micro-interaction).

Avoid fade-up on everything, blobs, particles, floating shapes, unnecessary WebGL, marquees everywhere, movement without purpose. Never repeat another page's signature motion. Respect `prefers-reduced-motion`. Transforms/opacity only, 60fps.

**Scroll reveals must fail safe.** Never animate `clip-path` on a reveal — if the hide/show state desyncs, the content is permanently cut off; opacity + translateY carry the motion with no such risk. The shown state must be idempotent: record it in a `WeakSet` on the instance *and* a `data-shown` attribute, re-show on re-entry rather than re-hiding, and repair at rest (mount rAF + delayed timers + `componentDidUpdate`) — never rely on a scroll event alone, since a page at rest fires none.

---

## 10. GLOBAL COMPONENTS

Navigation: floating pill, transparent at top, moss fill on scroll with everything inverting to carbon. MENU/CLOSE never wrap, stable hit area, real routes, current-page styling. Links ≥1120px, CTA ≥900px, else MENU.

Footer: WORKING ACROSS TIME ZONES — BENGALURU, DUBAI, LONDON, NEW YORK; 12-hour with visible AM/PM via real IANA zones. Interactive TILTH wordmark: visible neutral base (~16%), broad diffused moss pointer reveal, no pinpoint spotlight, no custom cursor, no instant full-green, smooth exit, touch fallback, reduced-motion handling.

Do not redesign global components per page.

---

## 11. BRAND EXPERIENCE

Never imply every listed company is a Tilth client. Qualifier: "Experience from the founder and core team." Do not invent logos.

---

## 12. ROUTES / SEO

Preserve existing routes. Never `#` where a route exists; never link production UI to `.dc.html`. Preserve one H1, heading hierarchy, SEO copy, crawlability, semantic HTML, internal links, accessibility, Core Web Vitals. Never hide essential copy behind JS-only interactions.

---

## 13. WORKFLOW FOR A NEW PAGE

1. Read this file, the homepage, the Services page, the target page's repo content and routes.
2. Inventory the content (H1, sections, CTAs, links, proof, SEO) — do not rewrite it.
3. Decide what this page uniquely must accomplish.
4. Reuse approved patterns; invent only when the system doesn't solve the need.
5. Decide whether it needs one signature interaction.

---

## 14. MANDATORY PRE-SUBMISSION QA

Do not use the user's review as the first QA pass. Render, inspect and refine first. Audit: layout (empty columns, dead areas, orphans, unfinished sections) · typography (overlap, wrapping, optical centring, heading scale) · CTA (hierarchy, alignment, wrapping, hit areas) · interaction states (default, hover, focus, selected, filtered, expanded, touch) · responsive (all seven widths) · empty space · content fidelity vs source copy · motion purpose.

Score internally 1–10 on: Tilth distinctiveness, hierarchy, layout balance, typography, spacing, interaction quality, responsive behaviour, motion, CTA clarity, content fidelity, accessibility. Anything below 8 gets another pass before showing.

---

## 15. DESIGN SYSTEM EVOLUTION

New reusable components are documented as approved patterns only after user approval. Never let an unapproved experiment silently redefine the system.

---

## FINAL PRINCIPLE

Arrive for review already balanced, responsive, content-faithful, motion-considered and recognisably Tilth. Act as designer *and* design QA reviewer.

---

## PAGE SEQUENCE

1. Homepage — approved
2. Services index — approved
3. One representative service-detail page ← next
4. Remaining service details → Industries index → industry detail → Work → Approach → Tools hub → tool → Insights hub → article → About → Contact → US regional → global QA

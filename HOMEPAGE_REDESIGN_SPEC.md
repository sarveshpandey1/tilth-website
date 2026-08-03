# HOMEPAGE_REDESIGN_SPEC.md — Tilth

**Purpose:** Before/after blueprint to make the homepage shorter, less repetitive, and typographically cleaner, without losing content or breaking constraints.
**Status:** Spec for review — **no code changed**. Derived from the ui-ux-pro-max analyses (length/structure, auto-rotation, typography/size/spacing).
**Scope:** `/` only (`src/pages/home.mjs`) + shared tokens in `styles.css` / `assets/generated.css`.
**Guardrails (unchanged):** anonymous proof only; approved client text markers only (PayDirect · Ommora); single primary CTA; global-first (geography selective); foundation-first message; `prefers-reduced-motion` respected; production stays on `main`→wearetilth.com only via a deliberate merge.

---

## 1. Goals & success metrics
| Metric | Before | Target |
|---|---|---|
| Content blocks | ~8 (7 sections + CTA) | ~6 |
| Rendered height (desktop) | ~4,600px | ~3,000–3,200px |
| Rendered height (mobile) | ~5,200px | ~3,600px |
| Distinct layout rhythms | 1 (centered single-column, repeated) | 4+ (hero, marquee, bento grid, stat band) |
| Type sizes in use | ~9 ad-hoc | 6 tokens |
| Section vertical padding | 90px (+ a conflicting 64px) | one token `clamp(56,8vw,96)` |
| Moving elements per viewport | ok | ≤2 (rule: excessive-motion) |

---

## 2. Global tokens — BEFORE → AFTER

### 2.1 Typography
**Before:** Fraunces (display) + Work Sans (body); base 16/1.65 (good). Sizes scattered: 11 / 13 / 13.5 / 14.5 / 15 / 16 / 17 / 18 / 19 / 20 + clamps. `cap h3` (20px) has no line-height (inherits 1.65). Stats render at 19px, proportional figures.

**After — single scale (tokens):**
```
--fs-eyebrow: 11px;                       /* labels, letter-spacing .18em, uppercase */
--fs-small:   14px;                       /* card desc, captions, proof summary       */
--fs-body:    16px;                       /* body, intro can bump to lead             */
--fs-lead:    18px;                       /* hero lede / section intro                */
--fs-h3:      20px;   line-height:1.2;    /* card + step headings (fixes cap h3)      */
--fs-h2:      clamp(26px,4vw,44px);       /* section headings                          */
--fs-h1:      clamp(34px,5.6vw,64px);     /* hero (was max 66)                         */
--fs-stat:    clamp(30px,5vw,52px);       /* Evidence numbers                          */
--lh-display: 1.05;  --lh-tight: 1.2;  --lh-body: 1.6;
```
- All stats: `font-variant-numeric: tabular-nums` (rule: number-tabular).
- Keep Fraunces `font-optical-sizing:auto` (default) so display vs text cuts apply.
- Retire the 13 / 13.5 / 15px one-offs → map to `--fs-small` (14).

### 2.2 Spacing
**Before:** `.gsec{padding:90px 0}` **and** a second `.gsec{padding:64px 0}` (confirm which wins / whether one is an orphaned override). `.ghero{padding:150px 0 66px}`. Off-grid values (18/34/46px).

**After — 8-grid + tokens:**
```
--space-2:8; --space-3:16; --space-4:24; --space-6:48; --space-8:64;
--space-section: clamp(56px,8vw,96px);    /* replaces 90/64 — resolve the duplicate */
--space-hero-top: clamp(96px,12vw,120px); /* replaces 150px */
```
- Rhythm tiers: label→H2 = 16 · H2→intro = 24 · section→content = 48.
- Snap 18/34/46 → 16/32/48.

### 2.3 Motion
**Before:** hero phrase rotator only.
**After:** rotator (keep) + one industry marquee + scroll-reveal stagger + stat count-up. Rules: ≤2 moving elements per view; `prefers-reduced-motion` freezes all (marquee stops, counts show final, reveals show static); enter 300–400ms `power1.out`, stagger 30–50ms.

### 2.4 Token source
**Before:** overlapping declarations in `styles.css`, `assets/generated.css`, and inline in `home.mjs`.
**After:** one `:root` token block (in `styles.css`), referenced by all three. Prevents drift.

---

## 3. Section-by-section — BEFORE → AFTER

### 3.1 Hero
- **Before:** `.ghero` 150px top; H1 `clamp(34,5.6vw,66)`; phrase rotator; lede 18/60ch; single CTA; **static** trust line ("Founder-led · Foundation-first · 10+ yrs…").
- **After:** top padding → `--space-hero-top`. Keep H1 + rotator (hover bug already fixed). Optional: one proof chip beneath the CTA (e.g., "5× return, anonymised"). Move the credibility line out of the hero and into the marquee (3.2) so hero + marquee don't animate simultaneously.
- **Looks like:** same striking hero, begins ~30–50px higher; cleaner, one moving element.
- **Accept:** hero reaches proof faster; only the rotator animates in view; H1 keyword intact.

### 3.2 Trust marquee  *(new — the one "rotation strip")*
- **Before:** static trust text in hero.
- **After:** thin auto-scrolling marquee below the hero: industries (fitness · edtech · fintech · SaaS · D2C) and/or approved clients (PayDirect · Ommora). Continuous CSS transform loop; **pause on hover/focus**; duplicate track marked `aria-hidden`; static single row under `prefers-reduced-motion`.
- **Looks like:** a slow band of credibility words gliding by — motion + proof in ~64px of height.
- **Accept:** no CLS; stops on reduced-motion; not simultaneous with hero rotator in viewport.

### 3.3 Problem + Approach  *(merge 2 sections → 1)*
- **Before:** *Problem* (paragraph section) then *Approach* (3 `cap` steps) — two separate screens; `cap h3` loose line-height.
- **After:** one section: a 1–2 line problem statement as the intro, then the 3 steps (Diagnose → Build → Scale). `cap h3` → `--fs-h3`/1.2. Steps **scroll-reveal stagger** (not a carousel).
- **Looks like:** "here's the leak → here's the fix" as one tight block; steps fade in on scroll.
- **Accept:** section count −1; all 3 steps visible together; reduced-motion shows them static.

### 3.4 Services
- **Before:** 5 `gcard`s in a single-column stack (`card-grid` 1fr), tall.
- **After:** **bento grid** — 2 cols @768, 3 @1024 (optionally feature the first card 2-wide). Mobile: horizontal **manual-swipe** (snap), never auto. Card type mapped to tokens (name `--fs-h3`+, desc `--fs-small`). Hover-lift ≤4px (transform only).
- **Looks like:** all 5 services seen at a glance in a compact grid instead of a long list.
- **Accept:** no auto-rotation; all cards in DOM; touch targets ≥44px; grid reflows cleanly at 375/768/1024.

### 3.5 Evidence  *(compress → stat band)*
- **Before:** `proof-row` of 2 anonymous cards, metrics 19px, own full section.
- **After:** slim **stat band**, all figures visible, **`--fs-stat` tabular Fraunces with count-up on scroll**: `₹5L→₹30L` (media) · `₹1.5Cr` (revenue) · `5×` (return) — color-coded (sage/terra/sky) with labels. Optional client markers appended. Placed **immediately before the CTA**.
- **Looks like:** one punchy row of large numbers ticking up as you arrive — strongest proof right before the ask.
- **Accept:** anonymous only; count-up respects reduced-motion (shows finals); numbers tabular; distinct media-vs-revenue labels.

### 3.6 Positioning  *(paragraph → pills, likely folded)*
- **Before:** full section, long paragraph ("Global-first. US-aware. India-rooted." + prose).
- **After:** **3 static pills** (Global-first · US-aware · India-rooted), folded into the hero sub-area or the stat band. No standalone section unless desired.
- **Looks like:** three compact labeled chips instead of a paragraph block.
- **Accept:** geography stays out of H1/CTA; message preserved; height cut sharply.

### 3.7 Why Tilth  *(distill + merge)*
- **Before:** second full `cap-grid` of 4 cards — overlaps *Approach*.
- **After:** distill to the 1–2 points not already implied by *Approach*; fold them into the merged 3.3 block or the CTA lead-in. Remove the standalone grid.
- **Looks like:** sharper "why us" without a near-duplicate second grid.
- **Accept:** section count −1; no lost unique point; no rotation.

### 3.8 Final CTA
- **Before:** `cta-band`, single CTA, generous padding.
- **After:** keep single CTA; padding → `--space-section`. Add a **sticky slim header CTA** appearing on scroll (keeps the single action reachable; header CTA already exists in the masthead — just ensure it persists).
- **Looks like:** same closer, tighter; "Discuss a project" stays reachable in the nav while scrolling.
- **Accept:** exactly one primary CTA in-page; sticky control ≥44px; no layout shift on stick.

---

## 4. Target information architecture (after)
1. Hero (+ optional proof chip)
2. Trust marquee
3. Problem → Foundation (merged, 3 steps)
4. Services (bento)
5. Evidence stat band (+ positioning pills folded here or in hero)
6. Final CTA
*(Positioning + Why Tilth absorbed, not deleted.)*

---

## 5. New / changed components
| Component | Type | Notes |
|---|---|---|
| Industry marquee | new | CSS transform loop, pause-on-hover, aria-hidden clone, reduced-motion static |
| Stat band + count-up | changed (from proof-row) | IntersectionObserver count-up; tabular figures; reduced-motion = final value |
| Bento services grid | changed (from stacked card-grid) | responsive columns; mobile swipe-snap |
| Scroll-reveal utility | new | shared `.reveal` + IO; stagger 30–50ms; no-JS/reduced-motion = visible |
| Token block | new | `:root` type/space/measure tokens in styles.css |

---

## 6. Phased plan
1. **Foundation (no wording change):** token block; section-padding token + resolve 90/64; hero-top trim; type-scale consolidation; `cap h3` line-height. → *page instantly ~⅓ shorter & cleaner.*
2. **Restructure:** merge Problem+Approach; distill Why Tilth; Positioning → pills. → *8→6 blocks.*
3. **Layout upgrades:** Services bento; Evidence stat band + count-up; industry marquee.
4. **Polish:** sticky mini-CTA; scroll-reveal/stagger; active-nav state; smooth anchor scroll.

Each phase = its own branch + PR; production only via a deliberate merge.

---

## 7. Accessibility & performance checklist (per phase)
- Contrast AA maintained (Lighthouse a11y stays 100); secondary text ≥14px.
- `prefers-reduced-motion`: marquee/rotator/counts/reveals all freeze to a readable static state.
- Touch targets ≥44px; hover effects have tap equivalents.
- No CLS from marquee/reveal/count-up (reserve space; transform/opacity only).
- All rotated/marquee/stat content present in DOM for SEO + screen readers.
- Keyboard: rotator links reachable; nav active state; focus visible.

---

## 8. Open decisions (need your call)
1. **Trim depth:** Foundation only / +restructure / full (recommended: full, phased).
2. **Social proof:** anonymous stats only, or add **PayDirect · Ommora** markers?
3. **Positioning:** fold into hero, or keep as a small pill strip section?
4. **Hero proof chip:** yes/no above the fold.
5. **Services featured card:** feature one 2-wide, or even grid?

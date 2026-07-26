# Tilth Free Tools — platform README

A small, framework-free tool platform on the static Tilth site (GitHub Pages).
No build step, no bundler: pages are hand-authored HTML that import shared
**ES modules** from `tools/lib/` via `<script type="module">`. The same modules
run under Node's built-in test runner, so every formula is unit-tested.

> Design principle: **honest by construction.** Rate benchmarks only, ranges
> with citations, missing data excluded (never zeroed), heuristics labelled,
> nothing invented, no confidential input stored or sent.

---

## Directory layout

```
tools/
  index.html                         # the hub (registry-driven: filters + search)
  benchmarks/index.html              # public "benchmark sources & methodology" page
  marketing-benchmark-analyser/      # flagship: score metrics vs benchmarks
  ltv-cac-calculator/                # (LTV:CAC, 4 business models)
  ab-test-calculator/                # (A/B significance) — consumes lib/calc.js
  utm-builder/  conversion-funnel-calculator/
  lib/                               # shared ES modules (the platform)
    calc.js         calc.test.js     # pure calculation engine
    benchmarks.js   benchmarks.test.js  # benchmark data model + engine
    registry.js     registry.test.js    # tool metadata (drives the hub)
    format.js                        # locale/currency formatting
    analytics.js    analytics.test.js   # privacy-safe product events
    package.json                     # { "type": "module" } — ESM marker for Node
  package.json                       # scripts: test (+ card generator)
  generate-insight-cards.js          # unrelated: insights card thumbnails (see end)
../ad-spend-calculator/              # (lives at root; canonical route TBD — see limitations)
```

`lib/*.js` are the **single source of truth**. Business logic must live here,
not inside page `<script>` blocks. A page should be a thin DOM-binding layer
that imports a pure function and renders its result.

---

## Running tests

```bash
cd tools
npm test          # node --test lib/*.test.js  → currently 44 tests
```

Requires Node 18+ (uses the built-in `node:test` runner). No install needed to
run tests (they only import from `lib/`, which has zero runtime deps).

---

## The shared modules

| Module | Exports | Purpose |
| --- | --- | --- |
| `calc.js` | `adSpendBasic/Advanced`, `ltvEcom/Saas/Lead/Market`, `abTest`, `funnelSimple`, `funnelStages` | Pure calculators. Inputs in, results out, no DOM. |
| `benchmarks.js` | `BENCHMARKS`, `lookupBenchmark`, `classifyAgainst`, `scoreMetric`, `benchmarkMetrics` | Sourced benchmark data + lookup with fallback + direction-aware scoring. |
| `registry.js` | `TOOLS`, `OBJECTIVES`, `MODELS`, `filterTools`, `recentlyUpdated` | Tool metadata that renders the hub cards/filters. |
| `format.js` | `formatCurrency`, `formatNumber`, `inr`, `CURRENCIES` | Locale-correct formatting (Indian numbering for INR). No FX conversion. |
| `analytics.js` | `track`, `trackOnce`, `scoreBand`, `band` | GA4 events; buckets values so raw confidential inputs never leave. |

---

## How to… (extension guides)

### Add a new tool
1. Create `tools/<slug>/index.html` (copy an existing tool page for the shell:
   masthead with `Tools` active, `page-head`, footer, `nav.js`).
2. Put the maths in `lib/calc.js` as a **pure function** and add a case to
   `lib/calc.test.js` with a documented expected value.
3. In the page, `import { yourFn } from '/tools/lib/calc.js'` inside
   `<script type="module">` and bind it to the DOM.
4. Add a record to `TOOLS` in `lib/registry.js` (name, route, outcome,
   audience, time, inputs, `benchmarks`, `objective`, `models`, `category`,
   `updated`). The hub picks it up automatically — no hub markup to touch.
5. Add the route to `../sitemap.xml`.
6. Wire analytics: `import { track } from '/tools/lib/analytics.js'` and call
   `track('tool_viewed', { tool: '<slug>' })` on load, plus `cta_clicked`.

### Add / update a benchmark
Edit `BENCHMARKS` in `lib/benchmarks.js`. **Every record must include**:
`metric, label, unit, direction ('higher'|'lower'), low, median, high, source,
url, date, confidence, verificationStatus`. Rules:
- **Rate/ratio metrics only.** No absolute-currency (₹ CPC/CAC) unless India-sourced.
- Ranges, not single numbers. Cite a real source + date + confidence.
- Cross-model/industry records use `all` (a proper match, not a fallback).
- Rules of thumb use `verificationStatus: 'heuristic'` (kept separate from sourced).
- Add a test in `benchmarks.test.js`. The `/tools/benchmarks/` page renders the
  set live from the module, so it can't drift.

### Add an industry / business model
- **Model**: add to `MODELS` in `registry.js` (hub filter) and, if a tool needs
  model-specific inputs/formulas, to that tool's model config (e.g. the LTV tool
  and the Analyser key on model). Benchmarks can be scoped per model.
- **Industry**: add benchmark records with the `industry` field; `lookupBenchmark`
  narrows to it when supplied and falls back (disclosing it) otherwise.

### Verify sources
Open each benchmark's `url`, confirm the figure/date, set `confidence`
honestly (low if the source is weak or the metric is unreliable — e.g. email
open rates post-Apple MPP). Prefer primary sources; record cross-source spread
as the low–high range. Never publish a figure you can't link.

### Update a formula
Change it in `lib/calc.js`, update the expected value in `calc.test.js`, run
`npm test`, then re-verify the consuming page in the browser.

---

## Deployment

Static site → **GitHub Pages deploys from `main`**. No build. Workflow used
throughout: branch → change → verify locally (`python -m http.server` via the
preview, or any static server) → PR → human merges → Pages rebuilds (~1–2 min).
ES modules are served with the correct MIME by Pages, so `<script type="module">`
imports work in production exactly as locally.

---

## Analytics event taxonomy (privacy-safe)

`tool_viewed · tool_started · objective_selected · business_model_selected ·
tool_search · tool_opened · result_viewed · cta_clicked` — parameters are
**categories, bands, and counts only**. Raw revenue/CAC/margin/scores are
bucketed via `band()`/`scoreBand()` before any event fires. See `analytics.js`.

---

## Implementation report (this engagement)

**New shared platform:** `lib/{calc,benchmarks,registry,format,analytics}.js`
(+ matching `*.test.js`, 44 tests) and `lib/package.json`.

**New pages:** `tools/marketing-benchmark-analyser/`, `tools/benchmarks/`
(and, earlier, the five original tools + hub).

**Corrected (accuracy):** A/B calculator (p-value/CI + honest language,
replacing "confidence = chance it's real"); ad-spend Advanced contribution-
margin mode; LTV:CAC business-model selector (ecom/SaaS/lead/marketplace) with
softened 3:1 framing; conversion funnel gained a real multi-stage mode.

**Refactor:** A/B page now consumes `lib/calc.js`; hub rebuilt from `registry.js`.

### Remaining limitations / TODO
- **Page→engine migration is partial.** The A/B and **ad-spend** pages import
  `lib/calc.js`; LTV, funnel and UTM still hold their (test-equivalent) inline
  maths. Migrate opportunistically — the formulas already match the tested engine.
- **Multi-currency is wired into ad-spend** (INR/USD/GBP/EUR/AED/SGD/AUD via a
  selector + `formatCurrency`, persisted in `localStorage`); LTV and funnel
  still assume ₹. Apply the same pattern (currency `<select>` → `money()` →
  `updateSymbols()`) to finish them.
- **Benchmarks are Global/US-weighted.** India-specific data is thin; the set is
  ~14 rate metrics (depth over breadth) and labelled as such. Expand as sourced.
- **Ad-spend calculator route** still lives at `/ad-spend-calculator/`, not
  `/tools/…`. Standardising needs a client-side redirect stub (Pages can't 301).
- Analytics currently instrument the hub + Analyser; other tool pages can add
  `tool_viewed`/`cta_clicked` the same way.

---

## Insight card thumbnails (separate tool)

`generate-insight-cards.js` (in this folder) renders the "Living Soil" thumbnail
for each insights article — unrelated to the calculators above. See its header
comment. Run: `cd tools && npm install` (installs `sharp`), then
`node generate-insight-cards.js [--slug <slug> --cat <bucket> --keyword "…"]`.
Output: `../assets/insight-cards/<slug>.webp`. `node_modules/` is gitignored.

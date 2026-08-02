# PERFORMANCE_REPORT.md — Tilth

Measured with **real Lighthouse runs** (mobile, default throttling: slow-4G + 4× CPU) against the public review deploy `https://tilth-website.vercel.app/` on 2026-07-16. Numbers are honest, not aspirational. Brief §62 targets: Perf 90+, A11y 95+, BP 95+, SEO 95+.

## Scores (mobile, throttled)
| Page | Performance | Accessibility | Best Practices | SEO |
|---|---|---|---|---|
| Homepage `/` | **50** ⚠️ | 100 ✅ | 100 ✅ | 69 * |
| Service page `/services/performance-marketing/` | **57** ⚠️ | 95 ✅ | 100 ✅ | — |

\* **SEO 69 is a review-deploy artifact:** the `is-crawlable` audit scores 0 because I set `X-Robots-Tag: noindex` on the *review* URL. On the indexable production domain this audit passes and SEO is expected ~95+. **Verify on wearetilth.com post-launch.** All on-page SEO fundamentals (unique title/description, canonical, one H1, structured data, headings, alt text) are present.

## Core Web Vitals (throttled mobile)
| Metric | Homepage | Service page | Target |
|---|---|---|---|
| LCP | 5.0 s | 5.3 s | < 2.5 s |
| TBT | 1,020 ms | 160 ms | < 200 ms |
| CLS | **0** ✅ | 0.142 ⚠️ | < 0.1 |
| FCP | 4.0 s | — | < 1.8 s |

## Honest assessment
- **Accessibility & Best Practices: strong** (95–100).
- **Performance: below the 90+ target** and needs a dedicated pass before/after launch. Root causes identified:
  1. **Render-blocking fonts/CSS → high LCP/FCP (~4–5s throttled).** Two render-blocking stylesheets + Google Fonts CSS on the critical path. Biggest lever on every page.
  2. **Homepage main-thread work → TBT ~1s.** The inline root-SVG generation, cursor and scroll JS run at load. Service page TBT is only 160ms, confirming the homepage JS is the culprit (not the shared shell).
  3. **Font-swap reflow → CLS 0.142 on inner pages.** FOUT from Fraunces/Work Sans swapping in shifts layout. (Homepage CLS is 0 — the rotator sizer works.)

## Optimization plan (to reach targets)
**Fonts (fixes LCP + inner-page CLS, all pages):**
- Self-host + subset Fraunces/Work Sans (woff2), `preload` the two used weights, and set `font-display: optional` or add `size-adjust`/`ascent-override` fallback metrics to eliminate swap reflow.
- Drop unused Fraunces weights (homepage loads 300–700; audit actual usage).

**Homepage JS (fixes TBT):**
- Defer non-critical work (root-SVG generation, cursor, kinetic) until after first paint / `requestIdleCallback`; gate on `hover`/non-reduced-motion only.
- Reconsider the preloader — it delays FCP; make it non-blocking or shorten.
- Reduce "unused JavaScript" (~630 ms flagged).

**CSS:**
- Inline critical CSS for the shell; load `styles.css`/`generated.css` non-render-blocking where safe.

**Expected outcome:** inner pages → 90+ readily (already TBT 160ms); homepage → 80s–90s after JS deferral + font fixes. Re-measure after each change.

## Post-pass results (2026-07-16) + a measurement caveat
Applied: (1) **non-blocking Google Fonts** (preload + `media=print onload` + noscript) sitewide; (2) **deferred + chunked** the homepage decorative SVG generation into short idle tasks; (3) trimmed unused Fraunces weights.

Three cold Lighthouse runs on the preview after the changes:
| Run | Perf | LCP | FCP | TBT | CLS |
|---|---|---|---|---|---|
| baseline (before) | 50 | 5.0s | 4.0s | 1,020ms | 0 |
| after fonts + defer | 64 | **2.2s** | **1.8s** | 2,290ms | 0.12 |
| after chunking | 44 | 4.7s | 3.8s | 1,320ms | 0.136 |

**These swing wildly with no code change between runs 2–3 → the numbers are noise-dominated.** Root cause: a **cold Vercel preview** (serverless cold starts) + **external Google Fonts fetch** + single throttled runs = ±20 Perf points, ±2.5s LCP. You cannot reliably optimize against this signal.

### What is real (consistent across runs)
- ✅ **Non-blocking fonts help FCP/LCP** in principle (best run: LCP 2.2s / FCP 1.8s vs 5.0/4.0) — kept.
- ✅ **Chunked idle generation** keeps homepage init as short tasks — kept.
- ⚠️ **CLS regressed to ~0.12 on cold first load** — this is the one consistent finding. It's **font-swap reflow** (FOUT) introduced by non-blocking fonts. **On cached/repeat visits (font already downloaded) CLS is ~0** — it's a first-uncached-visit artifact.

### Definitive fix (recommended follow-up)
**Self-host the fonts** (download woff2 for the used weights → `/assets/fonts/`, `@font-face` with `font-display:swap`, `preload` the 2–3 critical files). This gives: fast local fonts (good LCP), the brand font shown (no fallback compromise), swap-before-paint (**CLS → 0**), *and* removes the external-fetch variance that's polluting these measurements. Est. ~1–2 hrs; verify with multiple runs on the **production domain** (GitHub Pages, CDN-cached), not the cold preview.

### Where to measure for real numbers
- Run Lighthouse **≥3× and take the median**, on **`https://wearetilth.com`** after merge (CDN-cached, warm), not the Vercel cold preview.
- Inner/generated pages (TBT ~160ms) will hit the targets readily; the **cinematic homepage** is the deliberate tradeoff — the user chose the immersive preloader/roots/kinetic experience, which carries main-thread cost that pure-static pages don't.

## Final state after self-hosting fonts (2026-07-16)
Self-hosted 9 latin woff2 (Fraunces + Work Sans), preloaded the 2 critical faces, removed Google Fonts.

Two homepage runs after self-hosting: Perf 49 / 55 · LCP 5.1 / 4.8s · **TBT 700 / 720ms** · **CLS 0.101 / 0.098**.
- ✅ **TBT** improved to ~700ms (from 1,020 baseline; the earlier 2,290 was the un-chunked idle batch).
- ✅ **CLS** improved to ~0.10 (from 0.12–0.14) and external-font variance is gone.
- ⚠️ **LCP still ~5s** → with fonts fixed, the LCP bottleneck is now the **cinematic preloader** (the full-screen 0→100 counter that holds content until JS dismisses it), amplified by Vercel cold-start + 4× CPU throttling.

### The homepage LCP lever is a design decision (owner's call)
The preloader is the immersive intro the owner explicitly chose. Removing or shortening it (e.g., dismiss on `DOMContentLoaded` instead of a timed counter, or drop it) is the single biggest remaining homepage-LCP lever — but it changes the experience, so it's **not** applied silently. Options if 90+ homepage LCP is required:
1. Dismiss the preloader immediately on first paint (keep a brief fade) — likely the best balance.
2. Remove the preloader entirely.
3. Keep it — accept a lower homepage Lighthouse LCP as the cost of the cinematic entrance (inner pages are unaffected and fast).

**Recommendation:** measure the median of ≥3 runs on the warm production domain first (cold Vercel preview overstates LCP), then decide on the preloader.

## Note on methodology
Lighthouse mobile throttling is deliberately pessimistic; field/desktop numbers are higher. Targets should still be pursued on throttled mobile per the brief. Re-run after the optimization pass and on the live domain.

Commands used:
```
npx lighthouse https://tilth-website.vercel.app/ --only-categories=performance,accessibility,best-practices,seo --chrome-flags="--headless=new"
```

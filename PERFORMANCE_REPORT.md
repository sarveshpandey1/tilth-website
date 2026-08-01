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

## Note on methodology
Lighthouse mobile throttling is deliberately pessimistic; field/desktop numbers are higher. Targets should still be pursued on throttled mobile per the brief. Re-run after the optimization pass and on the live domain.

Commands used:
```
npx lighthouse https://tilth-website.vercel.app/ --only-categories=performance,accessibility,best-practices,seo --chrome-flags="--headless=new"
```

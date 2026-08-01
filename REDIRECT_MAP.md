# REDIRECT_MAP.md — Tilth

Principle (Brief §16): **preserve every existing path**; no bulk homepage redirects; permanent (301) server-side; no chains/loops; no JS/meta-refresh.

## 1. Same-site path changes — NONE required
The revamp **added** pages and **rewrote content in place**. Every valuable existing URL keeps its slug:

| Existing path | Status after revamp |
|---|---|
| `/`, `/services/`, `/approach/`, `/about/`, `/contact/`, `/tools/`, `/insights/` | **Unchanged** (content rewritten, same URL) |
| `/insights/<all 17 article slugs>/` | **Unchanged** |
| `/tools/<all 7 tools>/`, `/tools/benchmarks/` | **Unchanged** |
| `/marketing-agency-bengaluru/` | **Unchanged** (kept as local SEO page) |
| `/privacy/`, `/terms/`, `/cookie-policy/`, `/404.html` | **Unchanged** |

→ **No internal redirects needed.** No indexed URL is broken. This is the safest possible migration for existing equity.

## 2. New pages (no redirects — net-new URLs)
`/services/{performance-marketing,paid-media,seo-ai-search,website-design-development,growth-strategy-measurement,affiliate-partnerships,brand-creative}/`,
`/industries/` + `/industries/{saas,d2c-ecommerce,fintech,edtech,startups}/`, `/work/`.

## 3. Legacy stub to clean up
| Old URL | New URL | Type | Note |
|---|---|---|---|
| `/ad-spend-calculator/` | `/tools/ad-spend-profitability-calculator/` | 301 (currently JS/meta stub) | Convert to a proper redirect where the host allows; avoid JS/meta-refresh per §16. On GitHub Pages, keep the HTML stub with `<link rel="canonical">` + meta-refresh only until a header-based 301 is possible. |

## 4. Cross-domain — the real work (see DOMAIN_MIGRATION_PLAN.md §4)
`tilth.in/*` → `https://wearetilth.com/*` must be **1:1 path-preserving 301**.
- **Now (interim):** GoDaddy forwarding = homepage-level 301 only (deep paths lose path). Satisfies GSC Change-of-Address *required* test.
- **Target:** Cloudflare (free) Redirect Rule `tilth.in/*` → `https://wearetilth.com/$1` (301, preserve path+query). No chains.
- Change GoDaddy forwarding destination `http://` → `https://` to remove one hop.

## 5. Preferred-host redirects (Brief §14)
`http://wearetilth.com`, `http(s)://www.wearetilth.com` → `https://wearetilth.com` — handled by GitHub Pages (Enforce HTTPS + www↔apex). Verify after "Enforce HTTPS" is ticked.

## Validation checklist (run at launch)
- [ ] `curl -sI https://tilth.in/services/` returns 301 → `https://wearetilth.com/services/` (after Cloudflare)
- [ ] No 404s for any URL in the pre-migration GSC "indexed pages" export
- [ ] No redirect chains (max one hop) — test 10 sample deep URLs
- [ ] `www` and `http` variants 301 to `https://wearetilth.com`

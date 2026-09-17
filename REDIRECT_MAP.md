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
**All 8** service routes:
`/services/{growth-strategy-measurement,performance-marketing,paid-media,seo-ai-search,affiliate-partnerships,website-design-development,brand-creative,influencer-pr-events}/`,
plus `/industries/` + `/industries/{saas,d2c-ecommerce,fintech,edtech,startups}/` and `/work/`.

> **CURRENT (2026-09-17):** all 14 of these routes are built, live, self-canonical and
> `index, follow`. All 14 are now listed in `sitemap.xml` — the `/industries/*` hub, its
> 5 industry pages and `/work/` were missing until the 2026-09-17 URL/SEO cleanup pass.
> Sitemap total: **64 URLs = 64 indexable routes**, with the 3 non-indexable routes
> (`/404.html`, `/ad-spend-calculator/`, `/thank-you/`) correctly excluded.
>
> *Historical note:* the earlier list above named only 7 service slugs and omitted
> `influencer-pr-events`; there have always been 8.

## 3. Legacy stub to clean up
| Old URL | New URL | Type | Note |
|---|---|---|---|
| `/ad-spend-calculator/` | `/tools/ad-spend-profitability-calculator/` | **HTTP 200 stub**, not a 301 | See the hosting limitation below. |

> **CURRENT (verified 2026-09-17):** `curl -sI https://wearetilth.com/ad-spend-calculator/`
> returns **`HTTP/1.1 200 OK`** from `Server: GitHub.com`. It is **not** a 301 and must not be
> described as one. GitHub Pages serves static files only — it supports no redirect rules,
> no `_redirects` file and no custom response headers, so a true server-side 301 is
> **impossible on the current host**. The stub is the safest fallback available and is
> correctly built: `<link rel="canonical">` → the tools URL, `<meta name="robots" content="noindex, follow">`,
> `<meta http-equiv="refresh" content="0">`, and a JS `location.replace()` that preserves
> `location.search + location.hash`. It is excluded from `sitemap.xml`, and **0** internal
> links point at it — every internal link already uses the final `/tools/…` URL.
>
> **Do not "fix" this in the repo.** A real 301 requires changing host or fronting the site
> with a proxy/CDN (e.g. Cloudflare), which is an [OWNER] infrastructure decision — see
> DOMAIN_MIGRATION_PLAN.md §4. Until then, leave the stub exactly as it is.

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

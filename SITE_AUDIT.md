# SITE_AUDIT.md — Tilth website

Audit date: 2026-07-16 · Auditor: senior strategy/SEO/eng review · Repo: `sarveshpandey1/tilth-website`
Current live domain: https://tilth.in/ · New primary: https://wearetilth.com/

> This audit is grounded in the **actual** repository, not the framework assumptions in the brief.
> See §1 — the stack is static HTML, not a TS/React/Next app. All recommendations respect Brief §17
> ("reuse the existing stack unless there is a documented reason").

---

## 1. Technology & architecture (as-built)

| Aspect | Reality |
|---|---|
| Framework | **None.** Hand-authored static HTML per route (`/<section>/index.html`). |
| Build step | **None at root.** GitHub Pages serves files as-is from `main`. |
| Styling | Single shared `styles.css` (inner pages) + a large **inline `<style>`** in `index.html` (homepage is self-contained and does *not* link `styles.css`). Design tokens are CSS custom properties (`--bg`, `--ink`, `--glow`, `--terra`, `--rule`…). |
| Components | **No component system.** Nav + footer HTML are **duplicated in every file**. `nav.js` injects the mobile menu, theme toggle, CTA and skip-link at runtime. |
| Content storage | Inline in HTML. No CMS, no data files (except the tools' JS lib). |
| JS | Vanilla. Homepage has a rich inline IIFE (preloader, cursor, kinetic band, "Let's grow" statement, Tilth Cycle dial, reveal-on-scroll, theme toggle). |
| Tools | `/tools/` is a **separate Node sub-project** (`tools/package.json`, `tools/lib/*.js` with unit tests, `generate-insight-cards.js`). Calculators are static HTML that import the lib client-side. |
| Analytics | GA4 `G-1MJEZ4VK26`, hardcoded gtag snippet in every page `<head>`. No GTM. No custom events (pageview only). |
| Forms | Contact form posts to **FormSubmit** (`anuja@tilth.in`), with a honeypot field. |
| Fonts | Google Fonts — Fraunces (serif display) + Work Sans (sans body), `display=swap`. |
| Hosting | GitHub Pages, custom domain via `CNAME` (now `wearetilth.com`), HTTPS enforced. |
| Other | `creative-studio/` (gitignored local PNG generator), `assets/`, favicons, `og-image.png`, `site.webmanifest`, `robots.txt`, `sitemap.xml`. |

**Implication for the revamp:** the brief's `src/data/clients.ts`, "component architecture", TypeScript, etc.
do not exist and would require a **build-system migration** to create. That is the single pivotal
architecture decision (see DOMAIN note below and the separate recommendation). Everything else in the
brief is achievable on the current stack.

### Cross-cutting engineering findings
- **Duplicated nav/footer across 38 files** → high edit cost, drift risk (already visible: homepage nav is inline & bespoke; inner pages use `.masthead` + `nav.js`). Building Industries/Work/service pages by hand-duplication will not scale — this is the documented reason a light **build/generation layer** is worth considering.
- Homepage is **~960 lines, fully inline** — not sharing `styles.css`. Two parallel design systems (inline vs `styles.css`) must be kept in sync (they already drifted; reconciled this session).
- No `.nojekyll` → GitHub Pages runs Jekyll; harmless today but means stray `.md` could be processed. (Adding `.nojekyll` recommended.)
- Tools lib has tests (good), but no CI runs them.

---

## 2. Domain / migration status (largely already executed)

Much of Brief §12–16, §58–59 is **already done** (this session):

| Item | Status |
|---|---|
| `wearetilth.com` DNS → GitHub Pages IPs + `www` CNAME | ✅ Live |
| `wearetilth.com` HTTPS | ✅ Valid cert, 200 |
| `CNAME` file | ✅ `wearetilth.com` |
| Canonicals / OG / Twitter / JSON-LD / `sitemap.xml` / `robots.txt` | ✅ All → `wearetilth.com` (435 URLs migrated; `anuja@tilth.in` + Instagram handle preserved) |
| `tilth.in` → `wearetilth.com` 301 | ⚠️ Live but **homepage-level only** via GoDaddy forwarding — **does NOT preserve paths** (`tilth.in/approach/` → `wearetilth.com/`, not `/approach/`). Brief §16 requires **1:1 path-preserving** 301s → **gap to fix**. |
| GA4 measurement ID | ✅ Present sitewide, unchanged (no data loss) |
| GSC ownership (both domains) | ✅ Verified |
| GSC Change of Address | ⏳ Pending DNS TTL + GoDaddy forwarding SSL (retry due) |

**Key remaining migration gap:** path-preserving redirects (GoDaddy forwarding can't do it). See DOMAIN_MIGRATION_PLAN.md for the Cloudflare-free-tier fix.

---

## 3. Positioning findings (Brief §1, §11, §42)

- Homepage `<title>` is still **"…| Bengaluru"**; every page carries `geo.region`/`geo.placename` Bengaluru meta. Hero eyebrow reads "Foundation-first marketing agency · Bengaluru".
- Currency-limited copy on homepage/services ("before a rupee is spent", "every rupee can be measured").
- **No US/global positioning** anywhere. No "US and India", no "remote-first across time zones".
- No false US-office claims exist (good — nothing to remove, just add global framing).
- **Action:** de-Bengaluru the global surface (title, hero, meta, footer, schema); reposition to *global growth marketing agency, India-based, working with brands in the US and India*; keep `/marketing-agency-bengaluru/` as the one local SEO page.

---

## 4. Conversion / IA findings (Brief §20–26, §32, §36)

- **CTA monotony:** "Free audit" / "Request a free audit" is essentially the only CTA sitewide. Brief §36 wants intent-based CTAs (Discuss a Project / Request a Foundation Audit / See Our Work…).
- **No Work / case-study section, no Industries section, no individual service pages** (Services is a single page), **no dedicated website-design/development page**, **no engagement-models section**. These absences reduce credibility for a premium agency (Brief §22–25, §32, §51–52).
- **No client trust markers** currently rendered (PayDirect/Ommora not present) — Brief §7/§29 want them as text markers.
- Homepage leads with brand philosophy (foundation-first manifesto) rather than **buyer problems** (Brief §21, §30).
- Foundation-first message is strong but **over-repeated**; needs to shift from "why" to "what we deliver / proof / next step" (Brief §20).

---

## 5. Design findings (Brief §46–49)

- Living Soil identity is strong and should be **kept** (soil-black, cream, sage, terracotta; Fraunces + Work Sans).
- **Too dark for too long** — nearly every section is soil-black. Brief §47 target: ~60% dark / 30% cream / 10% accent. Needs light sections (trust, services, industries, insights/tools).
- Recent additions (this session): floating pill nav, `( )` labels, kinetic word band, animated "Let's grow" statement, working **dark/light toggle**. These are on-brand and align with the "restrained motion" principle — keep, and extend the light-mode system to all new pages.
- Motion is currently concentrated on the homepage; inner pages are static (fine).

---

## 6. SEO / technical findings (Brief §37–41)

- Metadata is unique per page (good). JSON-LD present: Organization/MarketingAgency, Person, WebSite, FAQPage (home); Service/OfferCatalog/BreadcrumbList/FAQ (services); BlogPosting/Breadcrumb/FAQ (articles); HowTo (approach).
- `sitemap.xml` + `robots.txt` present and now on `wearetilth.com`.
- Organization schema still describes a Bengaluru `ProfessionalService` with `geo` — fine to keep address (legal entity is in India) but should **not** be framed as a US LocalBusiness, and Bengaluru shouldn't dominate global page schema (Brief §41).
- Insights: **17 articles**, mostly India-flavoured; no US/global-specific commercial articles yet (Brief §43).
- Tools: 7 calculators + benchmarks page; INR-centric in places — need explicit **USD + INR** and regional benchmark labels (Brief §44).

---

## 7. Per-page audit (action = Retain / Rewrite / Expand / Consolidate / Noindex / Redirect / Remove)

| URL | Funnel | Primary intent / keyword (directional, unvalidated) | Key issues | Action |
|---|---|---|---|---|
| `/` | TOFU→MOFU | growth marketing agency / global growth marketing agency | Bengaluru title+meta; INR copy; no buyer-problem section; no trust markers; manifesto-heavy; no rotating service headline | **Rewrite** (global hero, static SEO H1 + rotating phrase, trust, buyer problems, service overview, work, methodology, industries, engagement, founder, insights/tools, CTA) |
| `/services/` | MOFU | growth marketing agency services | Single long page; equal weight to all channels; INR copy; one CTA | **Rewrite → Level-1 overview** + spin out priority service pages |
| `/services/performance-marketing/` (new) | MOFU | performance marketing agency | Does not exist | **Create** |
| `/services/paid-media/` (new) | MOFU | paid media / PPC / Google Ads / Meta Ads agency | Does not exist | **Create** |
| `/services/seo-ai-search/` (new) | MOFU | SEO agency / AI search / AEO / GEO | Does not exist | **Create** |
| `/services/website-design-development/` (new) | MOFU | website design & development agency / CRO | Does not exist (brief §52 wants a full page) | **Create** |
| `/services/growth-strategy-measurement/` (new) | MOFU | growth strategy / analytics / attribution | Does not exist | **Create** |
| `/services/affiliate-partnerships/` (new) | MOFU | affiliate marketing agency / partnerships | Does not exist | **Create** |
| `/services/brand-creative/` (new) | MOFU | performance creative / brand strategy | Does not exist | **Create (lower priority)** |
| `/industries/` + `/industries/{saas,d2c-ecommerce,fintech,edtech,startups}/` (new) | MOFU | {sector} growth marketing agency | Does not exist | **Create** (no thin pages — each needs real content) |
| `/work/` + `/work/{slug}/` (new) | MOFU→BOFU | case studies / results | Does not exist | **Create** system; render only approved/anonymous proof |
| `/approach/` | MOFU | foundation-first marketing / the Tilth Cycle | Good concept; add plain-language phase names + deliverables + mobile-visible-without-interaction | **Expand/Retain** |
| `/about/` | MOFU | about Tilth / founder | Founder-led; keep; add operating model, time-zone collaboration, proof, remove Bengaluru-first framing | **Rewrite (light)** |
| `/contact/` | BOFU | contact | Title "Request a Free Audit"; form is channel-oriented; needs consultative fields (country/timezone/need/goal/budget/consent) | **Rewrite** |
| `/tools/` + 7 tools + `/tools/benchmarks/` | TOFU | {tool} calculator | Good; INR-centric; add USD+INR + regional benchmark labels; strengthen related-service/article links + CTAs | **Expand** |
| `/insights/` + 17 articles | TOFU | long-tail informational | Strong India set; no US/global commercial articles; ensure each links 1 service + 1 article + 1 tool + CTA | **Retain + Expand** (add US/global topics; do not swap "India"→"US") |
| `/marketing-agency-bengaluru/` | MOFU | marketing agency bengaluru | Keep as the single local SEO page, out of main nav, self-canonical, link from an India/Locations section | **Retain** |
| `/privacy/`, `/terms/`, `/cookie-policy/` | — | legal | Reference Bengaluru/Karnataka jurisdiction, GA4, FormSubmit, GitHub Pages; keep legal entity/jurisdiction; update only if hosting/analytics/forms change | **Retain (verify accuracy post-build)** |
| `/404.html` | — | — | On-brand; fine | **Retain** |
| `/ad-spend-calculator/` | — | legacy redirect stub ("has moved") | JS/meta redirect stub to the tools version | **Retain or convert to server 301** (avoid JS/meta redirect per §16) |

---

## 8. Trust / proof inventory (Brief §7–8, §32)

- **Client names:** none rendered today → add **PayDirect · Ommora** as text-only markers (no logos/links) once a `clients` data structure exists.
- **Anonymous results:** need to verify exact published wording in-repo before migrating: the brief cites an **edtech** result (₹5L→₹30L spend, ₹1.5cr revenue, 5× ROAS) and a **crypto affiliate** result (~0% → ~5–6% of volume in a year). The homepage "scene" stats are *industry research*, not client results; the services page has generic before/after "proof" cards. **Action:** locate/confirm the two anonymous results, present them as anonymous snapshots on `/work/` and homepage — no client names attached.
- **Testimonials:** none approved → build the component + data, render nothing.

---

## 9. Accessibility / performance (quick pass — full reports in Phase 8)

- Positives: skip-link, focus-visible styles, `prefers-reduced-motion` handling, semantic landmarks, `aria-hidden` on decorative motion, no horizontal overflow (verified this session incl. article tables on mobile).
- To verify under load: LCP with the homepage preloader + Google Fonts; CLS on the rotating hero (must reserve width); heading order after adding new sections; contrast of muted text in light mode (fixed this session for approach/services).
- Targets (Brief §62): Lighthouse Perf 90+, A11y 95+, BP 95+, SEO 95+ — to be measured and recorded in PERFORMANCE_REPORT.md / ACCESSIBILITY_REPORT.md.

---

## 10. Summary of recommended actions (priority order)

1. **Decide the build approach** (static-in-place vs light generator) — gates all new-page work (see recommendation in chat / DOMAIN_MIGRATION_PLAN.md §Architecture).
2. Global repositioning + de-Bengaluru of the global surface; keep the Bengaluru page.
3. New IA: add **Work** and **Industries**; split **Services** into overview + priority service pages; add the **website design & development** page; add **engagement models**.
4. Homepage rebuild: static SEO H1 + accessible rotating service phrase; buyer-problem section; trust markers; proof; light/dark rebalance.
5. Intent-based CTA system (retire "Free audit" as the universal CTA).
6. Trust/proof: PayDirect/Ommora text markers + anonymous results; approval-gated case-study/testimonial/team/tech-stack data structures.
7. SEO: US+India keyword map, per-page metadata, structured data on new pages, breadcrumbs, internal linking; US/global insights.
8. Tools: USD+INR + labelled regional benchmarks.
9. Fix **path-preserving redirects** from `tilth.in`; complete GSC Change of Address; add analytics event map.
10. Legal-page accuracy pass after implementation.

# LAUNCH_CHECKLIST.md — Tilth revamp → wearetilth.com

Status legend: ✅ done · ⏳ pending · 👤 owner action · ⚠️ needs attention

## A. Build & content
- ✅ New IA live across all pages (Services · Industries · Work · Insights · Tools · About)
- ✅ Homepage: static SEO H1 + accessible rotating phrase (CLS 0), global US/India positioning, trust markers, service overview → new pages, motion preserved
- ✅ 8 service pages, 5 industry pages + hub, work hub, services overview, contact + about rewrites
- ✅ Approval-gating enforced (clients text-only, case studies anonymous, tech stacks hidden, only Anuja rendered)
- ✅ Generator builds clean; 0 legacy `tilth.in` URL refs; email `anuja@tilth.in` preserved
- ⏳ Tools: add explicit USD + INR + labelled regional benchmarks
- ⏳ Insights: add net-new US/global commercial articles (see SEO_KEYWORD_MAP)
- ⏳ Approach page: surface plain-language phase names + deliverables

## B. Performance (⚠️ below target — see PERFORMANCE_REPORT.md)
- ⚠️ Perf 50 (home) / 57 (service) on throttled mobile — **needs a performance pass** to hit 90+
- ⏳ Self-host/subset/preload fonts (`font-display`/size-adjust) → fixes LCP + inner-page CLS 0.142
- ⏳ Defer homepage main-thread JS (root SVG, cursor) → fixes TBT ~1s
- ✅ Homepage CLS 0; A11y 100/95; Best Practices 100

## C. SEO / structured data
- ✅ Unique title/description, one H1, canonical (wearetilth.com), OG/Twitter, breadcrumbs on new pages
- ✅ JSON-LD: Organization+WebSite (home), Service+Breadcrumb+FAQ (services/industries), etc.
- 👤 Validate structured data (Google Rich Results Test) on 1 of each template
- 👤 Validate SEO_KEYWORD_MAP metrics via GSC/Keyword Planner/Ahrefs/Semrush
- ✅ Production indexability verified live 2026-09-17: **no `X-Robots-Tag` header on any production
  URL**. The site-wide `noindex, nofollow` header lives only in `vercel.json`, which is gitignored
  and never served — GitHub Pages is the production host and does not read it. The old "review
  deploy shows 69 due to noindex header" note applied to the retired Vercel preview, not production.
- ✅ Sitemap covers **64 URLs = 64 indexable routes** (2026-09-17 cleanup added the Industries hub,
  5 industry pages and Work). The 3 non-indexable routes are correctly excluded.
- ✅ Canonicals: 64/64 indexable pages carry exactly one self-referencing
  `https://wearetilth.com/...` canonical. 0 cross-route or legacy-domain canonicals.

## D. Domain / redirects (see DOMAIN_MIGRATION_PLAN.md)
- ✅ wearetilth.com live (HTTPS), CNAME set, canonicals/sitemap/robots on new domain
- 👤 Confirm "Enforce HTTPS" in repo → Settings → Pages
- ⚠️ 👤 Upgrade `tilth.in` → wearetilth.com to **path-preserving 301** (Cloudflare free) — currently homepage-level only
- 👤 Change GoDaddy forwarding destination `http://` → `https://`
- 👤 Retry GSC **Change of Address**; submit `https://wearetilth.com/sitemap.xml`
- 👤 Enable auto-renew on `tilth.in`

## E. Analytics (see ANALYTICS_EVENT_MAP.md)
- ✅ GA4 `G-1MJEZ4VK26` on all pages (same property — no data loss)
- ⏳ Add custom events (CTA/form/tool/case-study) — no PII, no duplicate fire
- 👤 Update GA4 stream URL → wearetilth.com; add referral exclusion + internal-traffic filter; annotate migration date
- 👤 Export GSC baseline from tilth.in before signals shift

## F. Forms / email
- ✅ Contact form (FormSubmit → anuja@wearetilth.com); consultative fields
- 👤 Test submit → notification → success/error state on the live domain (allowlist wearetilth.com in FormSubmit if needed)
- ⏳ Do not publish a wearetilth.com email until MX/SPF/DKIM/DMARC tested

## G. Legal
- ✅ Legal entity/jurisdiction retained (India/Bengaluru/Karnataka)
- 👤 Verify privacy/cookie statements still accurate (GA4, FormSubmit, GitHub Pages, fonts) after any change
- 👤 Supply verified legal entity details (name, registration, address, GST) when available

## H. Deploy (redesign → main)
- ✅ Merging to `main` is the live deploy path (GitHub Pages); the redesign ships incrementally
  by PR rather than one `revamp/*` cutover. 8 Brand v3 pages are live as of 2026-09-17.
- ✅ `.nojekyll` present and tracked at the repo root
- 🔄 Post-merge verification: canonical selection, 404s and redirects re-verified 2026-09-17
  (see REDIRECT_MAP.md). Lighthouse re-run on the live domain still ⏳ — see §B.

## I. Rollback
- Redesign lands via PR on `main`; rollback = `git revert <merge>` → Pages redeploys prior state.
- Docs (`*.md`) are non-deployed content; safe.

## Review before launch
- **CURRENT:** the site is **already live** at https://wearetilth.com/ — review happens on the
  production domain, page by page, before each incremental PR is merged.
- *Historical note:* earlier revisions pointed reviewers at a Vercel preview
  (`https://tilth-website.vercel.app/`). That preview is **retired** — `vercel.json` and `.vercel/`
  are gitignored and are not part of the published site. Do not cite that URL as a current
  review target, and do not treat its site-wide `noindex` header as applying to production.

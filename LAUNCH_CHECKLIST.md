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
- ⏳ Re-check SEO score on indexable production (review deploy shows 69 due to noindex header)

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
- ✅ Contact form (FormSubmit → anuja@tilth.in) preserved; consultative fields
- 👤 Test submit → notification → success/error state on the live domain (allowlist wearetilth.com in FormSubmit if needed)
- ⏳ Do not publish a wearetilth.com email until MX/SPF/DKIM/DMARC tested

## G. Legal
- ✅ Legal entity/jurisdiction retained (India/Bengaluru/Karnataka)
- 👤 Verify privacy/cookie statements still accurate (GA4, FormSubmit, GitHub Pages, fonts) after any change
- 👤 Supply verified legal entity details (name, registration, address, GST) when available

## H. Deploy (redesign → main)
- ⏳ Merge `revamp/*` → `main` (deploys to wearetilth.com via GitHub Pages)
- ⏳ Add `.nojekyll` at merge (keeps `.md` docs from Jekyll processing) — or move docs to `/docs/`
- ⏳ Post-merge: re-run Lighthouse on live domain; verify canonical selection, 404s, redirects

## I. Rollback
- Redesign lands via PR on `main`; rollback = `git revert <merge>` → Pages redeploys prior state.
- Docs (`*.md`) are non-deployed content; safe.

## Review before launch
- 👤 **Public review URL:** https://tilth-website.vercel.app/ (noindex; not linked to production)
- 👤 Approve tone/design, then greenlight merge.

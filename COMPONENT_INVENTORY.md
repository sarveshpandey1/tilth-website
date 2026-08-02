# COMPONENT_INVENTORY.md — Tilth site generator

A dependency-free Node generator turns **data + partials** into **static HTML** for GitHub Pages.
No framework, no runtime build on Pages — `npm run build` writes the same static files the site already serves.
(Chosen over a framework migration per Brief §17; documented reason: ~25–30 new pages + DRY nav/footer/SEO/JSON-LD.)

## How it works
```
src/data.mjs         → all content as data (site, nav, services, industries, clients,
                        caseStudies, technologyStacks, team, engagements) — with approval flags
src/render.mjs       → shared shell + components (head/SEO/JSON-LD, masthead, footer, CTA, breadcrumbs,
                        client markers, case-study snapshots) → returns HTML strings
src/pages/*.mjs      → one page def per file: {path, title, description, schema[], headExtra, main}
build.mjs            → registry: import page defs, renderPage(), write to <path>/index.html
npm run build        → regenerates all registered pages
npm run check:domain → fails if any tracked HTML still contains https://tilth.in
```
Generated pages link the shared `/styles.css` and `/nav.js`, so they match existing hand-authored pages exactly (pill masthead, theme toggle, mobile menu, skip-link).

## Data model (approval-gated — Brief §7/§10/§34/§54)
| Data | Renders only when | Notes |
|---|---|---|
| `clients[]` | `textDisplayApproved` (text), `logoApproved`, `websiteLinkApproved`, `caseStudyApproved`, `testimonialApproved` | PayDirect + Ommora = text-only today |
| `caseStudies[]` | `publishApproved`; client name only if `clientNameApproved` | 2 anonymous results (edtech, crypto) |
| `technologyStacks[]` | `approvedForPublicDisplay` | all default **false** |
| `team[]` | `approved` | Anuja true; Sarvesh false (awaiting confirmation) |

Nothing unapproved is ever rendered; no fake public placeholders.

## Components (in `src/render.mjs`)
| Component | Function | Emits |
|---|---|---|
| Document shell | `renderPage(p)` | full `<html>` incl. no-flash theme script, GA4, SEO/OG/Twitter, favicons, fonts, styles.css |
| SEO/JSON-LD | `jsonld()`, `orgSchema()`, `breadcrumbs()` | validated JSON-LD graph, canonical on `wearetilth.com` |
| Masthead | `masthead(navItems)` | floating pill nav (existing `.masthead` markup) |
| Footer | `footer()` | 4-column footer, globally repositioned copy |
| CTA band | `ctaBlock({...})` | `.cta-band` (terra/soil tones) — intent-based CTAs (Brief §36) |
| Trust markers | `clientMarkers()` | text-only `.trust__marker` tiles (Brief §29) |
| Proof snapshots | `caseStudySnapshots()` | anonymous `.proof-card` metrics (Brief §8/§32) |

## Shared CSS added to `styles.css`
- `.cta-band` (+ `--terra` / `--soil` tones) — new component.
- `footer .fcol` made tag-agnostic (supports `<h3>` footer headings from the content-structure fix).

## Page registry (`build.mjs`) — status
| Page | Path | Status |
|---|---|---|
| Website Design & Development | `/services/website-design-development/` | ✅ Generated (flagship, Brief §52) |
| Services overview (rebuild) | `/services/` | ⏳ next |
| Performance Marketing | `/services/performance-marketing/` | ⏳ |
| Paid Media | `/services/paid-media/` | ⏳ |
| SEO & AI Search | `/services/seo-ai-search/` | ⏳ |
| Growth Strategy & Measurement | `/services/growth-strategy-measurement/` | ⏳ |
| Affiliate & Partnerships | `/services/affiliate-partnerships/` | ⏳ |
| Brand & Creative | `/services/brand-creative/` | ⏳ |
| Industries hub + 5 | `/industries/…` | ⏳ |
| Work hub + case studies | `/work/…` | ⏳ (anonymous proof only until approvals) |
| Homepage rebuild | `/` | ⏳ (static SEO H1 + accessible rotating phrase, buyer problems, trust, proof, light/dark rebalance) |
| Contact / About rewrites | `/contact/`, `/about/` | ⏳ |

## To reproduce
```bash
npm run build          # regenerate all registered pages
npm run check:domain   # verify no legacy tilth.in URLs
```

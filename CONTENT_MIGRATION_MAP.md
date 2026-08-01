# CONTENT_MIGRATION_MAP.md — Tilth

How existing content maps into the new architecture. Action = Retain / Rewrite / Expand / Move / New.

| Existing content | Destination | Action | Notes |
|---|---|---|---|
| Homepage hero ("Most marketing budgets are wasted…") | `/` hero | **Rewrite** | Replaced animated H1 with static SEO H1 + rotating service phrase; global US/India lede; intent CTAs. |
| Homepage "channels" (6 cards, → /contact/) | `/` service overview | **Rewrite/Move** | Now 6 outcome-oriented cards linking to the new `/services/<slug>/` pages. |
| Homepage "scene" (industry-gap stats) | `/` (retained) | **Retain** | Kept as problem framing; sourced as industry research (not client results). |
| Homepage Tilth Cycle dial | `/` + `/approach/` | **Retain** | Methodology; approach page carries the full plain-language phase table. |
| "Let's grow" statement, kinetic band, founder, closing CTA | `/` | **Retain** | Motion + brand moments preserved. |
| Homepage/global "before a rupee is spent", "| Bengaluru" | all global pages | **Rewrite** | → "before more budget is committed"; de-Bengaluru title/meta/schema; en_US locale. |
| Services (single long page, 6 channels) | `/services/` overview + 8 service pages | **Expand** | Overview cards + dedicated pages per service with problems/capabilities/deliverables/FAQ. |
| Website-as-a-service (previously only a channel) | `/services/website-design-development/` | **New** | Full page per Brief §52. |
| Approach / Tilth Cycle | `/approach/` | **Retain/Expand** | Add plain-language phase names + deliverables (data ready in `engagements`). |
| About (founder-led) | `/about/` | **Rewrite** | Founder credibility + operating model + US/India + time-zone collaboration; only Anuja rendered. |
| Contact (channel-oriented form) | `/contact/` | **Rewrite** | Consultative fields (country, time zone, need, goal, budget, consent); FormSubmit preserved. |
| Insights — 17 India-leaning articles | `/insights/` | **Retain** | Do NOT swap India→US. Add net-new US/global articles (see SEO_KEYWORD_MAP). |
| Tools — 7 calculators + benchmarks | `/tools/` | **Expand** | Add explicit USD+INR + labelled regional benchmarks (pending). |
| Bengaluru landing page | `/marketing-agency-bengaluru/` | **Retain** | Single local SEO page, out of main nav, self-canonical. |
| Anonymous edtech result (₹5L→₹30L, ₹1.5cr, 5× ROAS) | `/work/`, homepage, edtech industry page | **Move (anonymous)** | Presented as "Edtech growth engagement" — no client name. |
| Anonymous crypto affiliate result (~0%→5–6% volume) | `/work/`, affiliate service page | **Move (anonymous)** | "Crypto affiliate growth engagement" — no client name. |
| Legal pages (privacy/terms/cookie) | same | **Retain** | Keep legal entity/jurisdiction; verify GA4/FormSubmit/hosting statements post-build. |

## New content created in the revamp
- 6 service pages, website service page, services overview (rewritten), 5 industry pages + hub, work hub — all via the generator (`src/data.mjs`, `src/content.mjs`, templates).
- Trust markers (PayDirect · Ommora, text-only), engagement models, anonymous proof snapshots.

## Not migrated / deliberately excluded
- No fabricated case studies, testimonials, logos, team members, or tech-stack claims (all approval-gated, hidden until true).

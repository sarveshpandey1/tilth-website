# CONTENT_REQUIREMENTS.md — outstanding inputs (Brief §65)

None of these block launch. Missing info renders **nothing fake** — approval-gated data stays hidden, anonymous stays anonymous. Each item: status · why · where · format · blocks launch? · temporary behavior.

## Client trust / case studies
| Item | Status | Where it appears | Blocks launch? | Temporary behavior |
|---|---|---|---|---|
| PayDirect / Ommora — logo permission | ❌ not approved | trust markers, work | No | Text-only markers (`logoApproved:false`) |
| PayDirect / Ommora — website link | ❌ | trust markers | No | Non-clickable |
| Which anonymous result belongs to which client | ❌ | work / case studies | No | Kept anonymous; never associated |
| Named case study + approved description/screenshots/dates/metrics | ❌ | `/work/<slug>/` | No | Anonymous snapshots only (`clientNameApproved:false`) |
| Testimonials (quote, name, title, company, permission) | ❌ | homepage, work | No | Testimonial component built; renders nothing (`testimonialApproved:false`) |

## Team
| Item | Status | Blocks launch? | Temporary behavior |
|---|---|---|---|
| Anuja — founder, photo, bio | ✅ approved | — | Rendered on About |
| Sarvesh Pandey — appear publicly? title/bio/photo/LinkedIn | ❌ needs confirmation | No | `approved:false` → not rendered |
| Founder-led vs co-founded framing | ❌ | No | Presented founder-led (accurate today) |

## Contact / domain / email
| Item | Status | Blocks launch? | Temporary behavior |
|---|---|---|---|
| `wearetilth.com` mailbox + MX/SPF/DKIM/DMARC tested | ❌ | No | Keep `anuja@tilth.in` (kept active/forwarded) |
| Public general-enquiries address (`hello@…`) | ❌ | No | Not published until tested |
| Calendar-booking link | ❌ | No | "Book a call" hidden; form + email/phone/WhatsApp only |
| Confirmed response time post-migration | ⚠️ assume "within one working day" | No | Current wording retained |

## Website technology
| Item | Status | Blocks launch? | Temporary behavior |
|---|---|---|---|
| Approved public tech stacks (WordPress/Shopify/Webflow/Next.js/React) | ❌ | No | All `approvedForPublicDisplay:false`; website page focuses on strategy/UX/dev/CRO, not stacks |

## Access (for validation, not build)
| Item | Status | Needed for |
|---|---|---|
| GSC + GA4 access | ✅ owner has | Baseline export, event validation, Change of Address |
| Ahrefs / Semrush / Keyword Planner exports | ❌ | Validating SEO_KEYWORD_MAP metrics |

## Legal (keep current until verified — Brief §61)
| Item | Status | Blocks launch? |
|---|---|---|
| Full legal entity name, registration type, registered address, GST, contracting entity | ❌ needs confirmation | No — current India/Bengaluru/Karnataka legal language retained until replaced |

## Owner action shortlist (non-blocking, do when ready)
1. Approve (or not) logos/links/case studies/testimonials per client.
2. Decide Sarvesh's public presence + team framing.
3. Set up + test `wearetilth.com` email; supply booking link if wanted.
4. Approve public tech stacks (if any).
5. Supply verified legal entity details.
6. Provide keyword-tool exports to validate SEO priorities.

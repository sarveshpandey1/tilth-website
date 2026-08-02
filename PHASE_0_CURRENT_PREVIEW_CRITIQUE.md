# PHASE_0_CURRENT_PREVIEW_CRITIQUE.md — Tilth

Subject: **https://tilth-website.vercel.app/** (current redesign preview). Review date **2026-08-02**.
Treated as **unapproved**. Disposition = Retain / Revise / Remove / Revisit (after concept approval).
Severity: High (hurts credibility/conversion) · Med · Low.

## Summary verdict
The current preview is competent and technically sound, but it reads as a **founder manifesto with a tech-agency skin**, not a globally-credible growth agency. It is **text/slogan-led where the category is proof/visual-led**, **over-dark**, **repetitive** (foundation-first, geography), **light on real imagery and AI-era relevance**, and its "light mode" is a variable flip rather than a designed theme. Strong bones (IA, generator, tokens, a11y) should be retained; the visual/compositional layer should be re-explored.

## Issue register

| # | Dimension | Current behaviour | Why it weakens | Severity | Disposition | Future recommendation |
|---|---|---|---|---|---|---|
| 1 | Global credibility | Copy asserts "US and India" repeatedly; no visual proof of global-grade work | Telling, not showing; refs earn credibility via proof/craft | High | Revise | Lead with craft + anonymous proof; geography selective (§positioning) |
| 2 | US/India balance | Geography in title, hero, footer, meta, many pages | Over-repetition dilutes; feels SEO-driven | High | Revise | "Global-first, US-aware, India-rooted" — mention selectively only |
| 3 | Visual hierarchy | Type-driven, few focal images; sections similar weight | Little visual anchoring; scanning is monotonous | Med | Revise | Work-as-hero; stronger focal moments per concept |
| 4 | Brand memorability | Living Soil present but subtle; homepage reads generic-premium | Not distinctive enough vs category | High | Revisit | Push a sharper, ownable visual world per concept |
| 5 | Typography | Fraunces + Work Sans, decent | Solid but not yet a "system"; sizes/rhythm inconsistent across pages | Low | Retain (refine) | Keep serif+sans; formalize a type scale |
| 6 | Colour consistency | Token-based; good on dark | Light mode reuses `--cream` as both text and bg in places (bugs fixed reactively) | Med | Revise | Semantic tokens designed for both themes from scratch |
| 7 | Section rhythm | Regular but samey padding/patterns | Predictable; low narrative tension | Med | Revise | Vary section scale/media; editorial pacing |
| 8 | Content density | Homepage long + manifesto-heavy | Slower to the point than refs | Med | Revise | Tighten; proof earlier |
| 9 | Uneven distribution | Some sections dense, others thin | Inconsistent | Low | Revise | Balance in concept comps |
| 10 | CTA duplication | Historically "Free audit" everywhere; improved to intent-CTAs | Repetition reduces signal | Low | Retain (improved) | Keep intent-based ladder |
| 11 | Service clarity | 8 services; overview + pages | Good structurally | Low | Retain | Keep; add visual differentiation of featured services |
| 12 | Trust placement | Text markers (PayDirect · Ommora) after hero | Correct given constraints, but visually plain | Med | Revise | Design a premium anonymous-trust treatment |
| 13 | Proof placement | Anonymous snapshots exist, understated | Under-leveraged; refs put proof high | High | Revise | Metric-forward, discreet, higher on page |
| 14 | Navigation | Pill floating nav, new IA | Works; pill is a bit trendy/generic | Low | Retain (re-evaluate) | Test alternatives per concept |
| 15 | Homepage structure | Hero → trust → kinetic → scene → services → cycle → statement → founder → faq → CTA | Long; motion-heavy top; proof low | Med | Revise | Re-compose per concept; proof higher |
| 16 | Repeated templates | Service/industry pages share one template | Efficient but uniform | Low | Retain | Keep; add featured-tier variation |
| 17 | Repeated copy | "Foundation-first" many times; boilerplate intros | Repetition fatigues | High | Revise | Show the method via structure/visuals; ~1–2 explicit mentions |
| 18 | Light/dark balance | Very dark overall; light mode = variable flip | Over-dark; light mode not designed | High | Revise | Real dual theme (Living Soil / Cultivated Paper) |
| 19 | Motion | Preloader, cursor-roots, kinetic band, dial, "Let's grow" | Concentrated on home; preloader caps LCP | Med | Revisit | One purposeful motion idea per screen; drop preloader-as-blocker |
| 20 | Animation quality | Bespoke, on-brand | Nice but some decorative | Med | Revisit | Keep root/SVG craft; tie motion to meaning |
| 21 | Marquees | Kinetic word band + ticker | Two continuous marquees = noise | Med | Remove/Revise | At most one, purposeful |
| 22 | Rotating text | Hero rotating service phrase | Accessible + CLS-safe (good), but a common device | Low | Revisit | Optional per concept |
| 23 | Mobile behaviour | Responsive, no overflow, burger menu | Solid | Low | Retain | Keep; design mobile per concept |
| 24 | Accessibility | A11y 100/95; skip link, focus, reduced-motion | Strong | Low | Retain | Maintain as baseline |
| 25 | Performance | Prod A11y/BP/SEO 100, CLS 0.001, TBT 270ms; **LCP ~5s (preloader)** | LCP capped by cinematic preloader | High | Revise | Preloader is the LCP lever (owner decision) |
| 26 | Static/generated look | Clean but "generated," low art direction | Reads templated | Med | Revise | Add art-directed moments + imagery |
| 27 | AI-era relevance | Almost none on-site | Category leads with credible AI framing | High | Revise (opportunity) | Honest "senior judgment + AI-accelerated" treatment |
| 28 | Image quality | Only founder photo + OG | No visual proof | High | Revise | Define image system (see IMAGE_DIRECTION) |
| 29 | Lack of imagery | Homepage nearly image-free | Refs are visual-proof-led | High | Revise | Hero/work/system imagery per concept |
| 30 | Whitespace | Reasonable on dark | Could be more editorial | Low | Retain (refine) | More generous, intentional |
| 31 | "Foundation-first" repetition | Frequent | See #17 | High | Revise | Reduce to a method, shown |
| 32 | Bengaluru repetition | Removed from global surface (kept on local page) | Already fixed | Low | Retain | Keep confined |
| 33 | "US and India" repetition | Frequent | See #2 | High | Revise | Selective only |

## Classification roll-up
- **Retain (keep as-is / minor refine):** generator + data model + approval-gating, IA, accessibility baseline, intent-CTA ladder, service/industry template system, mobile responsiveness, serif+sans pairing, Bengaluru confinement, anonymous-proof data, tools, articles, valid URLs, legal/contact accuracy.
- **Revise:** geography/foundation-first repetition, light/dark as a real designed system, proof/trust visual treatment + placement, section rhythm/density, imagery, AI-era relevance, colour tokens for both themes.
- **Remove:** one of the two continuous marquees; decorative-only motion; preloader as a render-blocker.
- **Revisit after concept approval:** pill nav, rotating phrase, kinetic band, "Let's grow" statement, Tilth Cycle dial — keep the *craft*, re-decide their role per chosen concept.

## Bottom line
Keep the **engine and the guardrails**; re-explore the **visual world, proof/AI treatment, imagery, and theming**. That is exactly what the three Phase-0 concepts test.

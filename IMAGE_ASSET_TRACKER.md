# IMAGE_ASSET_TRACKER.md — Tilth

Status: `Required` · `Brief ready` · `Awaiting asset` · `Asset received` · `Integrated` · `Needs revision` · `Approved`.
Phase 0 uses labelled placeholders at these exact ratios (CLS-safe). Owner supplies finals by Asset ID.

| Asset ID | Page/section | Purpose | Visual concept | Light/dark | Desktop | Mobile | Aspect | Format | Transparency | Motion | Mobile treatment | Alt-text direction | Status | Final path |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| A-HERO | Concept A hero | Anchor the organic→intelligence idea | Root/mycelium network resolving into ordered nodes | Both (SVG token-driven) | 1200×840 | 720×720 | 10:7 / 1:1 | SVG (or AVIF) | Yes | Root→Signal (settles) | static ordered state | "Abstract network of roots resolving into an ordered grid of nodes" | Required | — |
| A-METHOD | Concept A method | Show layers beneath marketing | Surface layer peeling to reveal strategy/tracking layer | Both | 1000×620 | 680×520 | 16:10 | SVG | Yes | Beneath-the-Surface | 2-state toggle | "Cutaway showing the systems beneath a marketing surface" | Required | — |
| A-AI | Concept A AI section | Honest AI-accelerated capability | Nodes + human review marker; no brains/robots | Both | 900×600 | 640×480 | 3:2 | SVG/AVIF | Yes | subtle | static | "Diagram of AI-assisted analysis with a human review step" | Required | — |
| A-SVC | Concept A services | Differentiate a featured service | Abstract channel-branching motif | Both | 640×480 | 480×360 | 4:3 | SVG | Yes | none | static | "Abstract branching representing marketing channels" | Required | — |
| A-WORK | Concept A work | Anonymous proof visual | Abstract before/after system state (no client identity) | Both | 800×600 | 560×420 | 4:3 | AVIF/SVG | No | Interactive Evidence | tap tabs | "Anonymous before/after growth-system illustration" | Required | — |
| A-FOUNDER | Concept A / About | Founder credibility | Editorial portrait of Anuja (existing photo may be reused) | Single graded | 760×950 | 560×700 | 4:5 | AVIF | No | none | static | "Anuja, Founder of Tilth" | Asset received (existing anuja.jpg) | /anuja.jpg |
| B-HERO | Concept B hero | Analytical, evidence-led anchor | Signal field organizing into pathways / data lattice | Both | 1280×720 | 720×720 | 16:9 / 1:1 | Canvas/SVG | Yes | Signal Field (settles) | static organized state | "Scattered data signals organizing into clear pathways" | Required | — |
| B-SYS | Concept B method | System/funnel diagram | Diagnosis→structure→scale funnel with measurement nodes | Both | 1000×640 | 680×540 | 25:16 | SVG | Yes | scroll step reveal | static list | "Funnel from diagnosis to scale with measurement points" | Required | — |
| B-AI | Concept B AI | AI as measurement accelerant | Data viz + "human review" checkpoint | Both | 900×560 | 640×440 | ~16:10 | SVG | Yes | metric reveal | static | "Data interpretation accelerated by AI with human oversight" | Required | — |
| B-TOOL | Concept B / tools | Product-style tool interface | Clean calculator/dashboard mock (Tilth's own tools, not client) | Both | 1000×700 | 680×520 | 10:7 | AVIF/PNG | No | none | static | "Tilth growth calculator interface" | Required | — |
| B-WORK | Concept B work | Anonymous metric card | Abstract metric/trend visual (no fabricated numbers as image) | Both | 760×520 | 560×400 | ~19:13 | SVG | No | count-up on view | static number | "Anonymous performance trend illustration" | Required | — |
| C-HERO | Concept C hero | Editorial, human, premium | Editorial photograph (strategy artefact / workspace / founder) | Single graded + scrim | 1600×900 | 828×1000 | 16:9 / ~5:6 | AVIF | No | image reveal | static | "Editorial image conveying considered strategy work" | Required | — |
| C-WORK | Concept C work | Work-led case-study image | Project/work photograph (anonymous or owned) | Single graded | 1000×750 | 680×510 | 4:3 | AVIF | No | reveal | static | "Illustrative image of a growth engagement (anonymous)" | Required | — |
| C-AI | Concept C AI | Editorial AI framing | Editorial still of analysis artefacts, no clichés | Both | 900×600 | 640×480 | 3:2 | AVIF | No | none | static | "Editorial still representing AI-accelerated research" | Required | — |
| C-SVC | Concept C services | Service visual | Editorial detail / artefact | Both | 640×480 | 480×360 | 4:3 | AVIF | No | none | static | "Editorial detail representing a service area" | Required | — |
| C-FOUNDER | Concept C / About | Human credibility | Editorial founder portrait | Single graded | 900×1125 | 620×775 | 4:5 | AVIF | No | none | static | "Anuja, Founder of Tilth" | Asset received (existing anuja.jpg) | /anuja.jpg |
| OG-GLOBAL | All / social | Share image | Brand OG (theme-neutral) | Single | 1200×630 | — | 1.91:1 | PNG | No | none | — | "Tilth — global growth marketing agency" | Asset received (existing) | /og-image.png |

Notes: SVG system art should be **token-driven** so one file serves both themes. Photography assets that must serve both themes use a graded master + theme-aware overlay scrim. Founder + OG already exist and are reused. All placeholders in the concept lab carry `data-asset="<ID>"` for one-to-one swap.

---

## v2 (post-review) — coded visuals reduce asset dependency

The revised concepts prove their worlds with **coded/procedural visuals**, so most hero/system art no longer needs a supplied image file:
- **A-HERO / B-HERO / B-SYS / A-AI / A-METHOD** → now **coded** (Canvas/SVG), rendered live. Status: **Integrated (coded)** — no owner asset required to evaluate; a final still/export is optional.
- **Founder (A-FOUNDER / C-FOUNDER)** → uses existing approved `/anuja.jpg`. Status: **Integrated**.

### Owner-supplied finals still required (photography) — production-ready briefs
| Asset ID | Concept | Placement | Purpose | Composition | Desktop | Mobile | Light variant | Dark variant | Static/motion | Safe text area | Focal point | Format | Transparency | Perf budget | Final-generation brief | Status |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| C-HERO | C | Editorial hero (type overlaps left ~14%) | Human, premium, considered strategy | Portrait editorial; subject/artefact right-of-centre; calm negative space left for overlapping type | 1040×1300 | 760×950 | brighter, high-key, warm | darker grade + 35% scrim | static (clip-reveal on scroll) | left 40% kept low-detail for headline | upper-right third | AVIF (+JPG fallback) | no | ≤180KB | "Editorial photograph evoking considered, foundation-first strategy work — a workspace, artefact or founder moment; warm, filmic, restrained; strong negative space on the left for large serif type; no stock clichés, no laptops-pointing, no skylines." | Awaiting asset |
| C-WORK | C | Work-led story frame | Anonymous engagement, work-led credibility | 16:10 landscape; layered, room for a caption card bottom-right | 1200×750 | 760×475 | high-key warm | darker + scrim | static (clip-reveal) | bottom-right ~26ch caption zone | left-of-centre | AVIF (+JPG) | no | ≤160KB | "Illustrative image of a growth engagement (anonymous) — strategy artefacts, a screen-in-context, or an abstract work still; premium, warm; must not depict identifiable client work or logos." | Awaiting asset |

Until supplied, C shows an **art-directed coded frame** (layered gradient + grain + editorial caption) at the exact ratios above — labelled, CLS-safe, swap-in by `data-asset`.

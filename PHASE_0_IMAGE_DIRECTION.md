# PHASE_0_IMAGE_DIRECTION.md — Tilth

Final custom images are supplied **manually by the owner**. Phase 0 uses **neutral, clearly-labelled placeholders at final dimensions/aspect ratios** so layouts don't shift and assets are trivial to swap. No random stock as final content; no misleading client visuals.

Placeholder mechanism (used in the concept lab): a `<figure class="ph" data-asset="ID" style="aspect-ratio:W/H">` with a labelled fill (asset ID + intended dimensions) and explicit width/height so **CLS = 0** and the owner can drop in the final `src` by asset ID.

## Visual directions to explore (abstract/system)
- Organic networks becoming data pathways · roots becoming measurement systems · soil particles assembling into grids · mycelium as an intelligence network · natural branching = channels · topographic layers revealing hidden systems · inputs flowing through a system into measurable outcomes.

## Real/work directions
- Website & campaign mockups · strategy artefacts · tool interfaces · data visualisations · editorial founder photography · real project imagery.

## Avoid (hard rules)
Generic office/handshake/laptop-pointing photography · flags · US/India skylines · robots · glowing brains · holograms · neon AI artwork · random 3D blobs · fake dashboards · unapproved client interfaces/logos.

## Indicative mix (not locked)
Custom abstract/system visuals · real work/interface visuals · human/founder imagery — proportion to be decided after concept approval and asset availability.

## Per-image brief fields (each asset in IMAGE_ASSET_TRACKER)
Exact purpose · emotional effect · business meaning · composition · focal point · subject placement · negative space · text-safe area · cropping rules · theme behaviour (light/dark) · desktop size · mobile size · aspect ratio · format · transparency · performance budget · loading priority · alt-text direction · motion readiness · static fallback.

## Theme behaviour for imagery
- **Dark (Living Soil):** imagery reads on soil-black; abstract/system art uses sage/terracotta signals on dark; photography warm-graded, slightly darker.
- **Light (Cultivated Paper):** imagery on warm paper; system art uses deep-sage/soil lines on cream; photography brighter, higher-key.
- Provide **both** a light and dark variant for hero/system/AI art (or an SVG that is theme-token-driven). Photography can use a single well-graded asset that works on both with an overlay scrim.

## Per-concept required assets (summary; full rows in IMAGE_ASSET_TRACKER.md)
- **Concept A — Living Intelligence:** hero root→signal system art (L/D), method "beneath the surface" diagram, AI-capability abstract, 1 service visual, 1 anonymous work visual, founder portrait, mobile variants.
- **Concept B — Evidence Engine:** hero signal-field/data art, system/funnel diagram, AI-capability data viz, tool-interface mock, 1 anonymous metric/work card visual, founder portrait, mobile variants.
- **Concept C — Cultivated Editorial:** editorial hero photograph, work/case-study photograph, AI-capability editorial visual, service visual, founder editorial portrait, mobile variants.

## Loading/perf
Hero image = `fetchpriority=high`, preloaded; below-fold = `loading=lazy`. All regions have explicit aspect-ratio. Target hero < ~200KB (AVIF/WebP), diagrams as SVG where possible.

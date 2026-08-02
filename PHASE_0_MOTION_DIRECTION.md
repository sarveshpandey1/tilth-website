# PHASE_0_MOTION_DIRECTION.md — Tilth

Principles: motion serves meaning, never decoration; **one significant motion idea per screen**; progressive enhancement with a **static fallback for every effect**; honor `prefers-reduced-motion`; pause when tab hidden; never gate comprehension on motion; no multiple continuous marquees, no heavy parallax, no animate-every-card.

Existing rotating text + marquees are **not** mandatory and are candidates for removal.

---

## A. Root → Signal
**Business meaning:** organic marketing activity becoming an ordered, measurable growth system (foundation-first, made literal but abstract).
- **Visual:** an organic SVG network (roots/mycelium) that gradually resolves into aligned nodes/edges on a grid.
- **Pointer:** nodes near the cursor brighten/settle. **Scroll:** progression from organic→ordered tied to scroll position. **Theme:** sage on soil (dark) / deep-sage on paper (light).
- **Mobile fallback:** a 2-frame static (organic → ordered) or a short autoplay-once, no pointer. **Reduced-motion:** show the final "ordered" state, static.
- **Tech option:** SVG + CSS/`requestAnimationFrame`; Canvas if node count is high. **Perf risk:** medium — cap node count; build off the critical path (idle); pause offscreen.
- **Used by:** Concept A (hero).

## B. Beneath the Surface
**Business meaning:** the visible marketing layer sits on strategy/tracking/attribution/site/measurement underneath.
- **Reveal:** a draggable/scroll "peel" or mask that exposes the system layer beneath a surface layer.
- **User control:** drag handle or scroll; both layers legible independently. **Accessibility:** keyboard-operable slider with aria; layers readable without the effect.
- **Mobile:** tap-to-toggle two states (no drag precision needed). **Static fallback:** two stacked labelled panels ("Surface" / "Beneath"). **Perf:** low–medium (two layers + mask).
- **Used by:** Concept A (method) or B (diagnosis).

## C. Signal Field
**Business meaning:** *clarity before scale* — scattered signals organize into pathways/clusters.
- **Interaction:** scattered points drift, then snap into clusters/paths on scroll-in or hover.
- **Timing:** ~600–900ms settle, eased. **Theme:** terracotta actions/sage signals. **Accessibility:** decorative, `aria-hidden`; content readable regardless.
- **Perf:** medium (Canvas for many points; SVG for few). Pause offscreen/hidden.
- **Used by:** Concept B (hero/section background, restrained).

## D. Growth-System narrative (scroll-linked)
**Business meaning:** the engagement story — Noise → Diagnosis → Structure → Experimentation → Growth.
- **Stages:** 5 pinned/stepped sections; a single element transforms through each stage.
- **Scroll:** scroll-linked step changes (not continuous parallax); each stage has a heading + one visual state.
- **Static fallback:** the 5 stages as a plain vertical list with captions. **Mobile:** step cards, no pinning. **Perf risk:** medium–high (scroll listeners) → throttle via one rAF; disable pinning on mobile.
- **Used by:** Concept B (method) or C (case-study story).

## E. Interactive Evidence
**Business meaning:** let approved *anonymous* results be explored, not just stated.
- **Patterns:** before/after slider · timeline · problem→action→result tabs · controlled metric reveal (count-up on view).
- **Accessibility:** tabs/slider keyboard-operable, aria-selected; metrics present in DOM (count-up is enhancement). **Do not invent evidence.**
- **Mobile:** stacked tabs / tap slider. **Perf:** low. **Used by:** all three concepts (work section).

## F. Theme transition (Living Soil ↔ Cultivated Paper)
**Business meaning:** brand range across contexts; premium dual-mode.
- **Behaviour:** toggle cross-fades tokens over ~200–300ms; **must not** block interaction or reflow. No FOUC (theme set pre-paint via inline head script).
- **Accessibility:** toggle is a labelled button, keyboard-focusable; respects `prefers-color-scheme` first; persists choice. **Reduced-motion:** instant switch, no fade.
- **Perf:** trivial (CSS custom-property transition on a scoped set). **Used by:** all concepts.

## G. Cross-page continuity
**Business meaning:** cohesion between nav/work/service transitions.
- **Behaviour:** subtle fade/slide on route change; shared-element feel for work→case-study where cheap.
- **Progressive enhancement only:** navigation works fully without it; no SPA dependency. **Reduced-motion:** none. **Mobile:** minimal/none. **Perf:** low. **Used by:** documented; **not** demonstrated as essential in the static concept lab (progressive-enhancement note only).

---

## Per-concept motion budget (one idea each)
| Concept | Primary motion | Trigger | Continuous? | Reduced-motion fallback |
|---|---|---|---|---|
| A Living Intelligence | Root→Signal hero (A) | scroll + pointer | no (settles) | final ordered state, static |
| B Evidence Engine | Metric reveal + Signal Field accent (C/E) | on-view | no | numbers shown, no count-up |
| C Cultivated Editorial | Image/typography reveal + Interactive Evidence (E) | on-view / interaction | no | content visible, no reveal |
| all | Theme transition (F) | toggle | no | instant switch |

## Rules recap (enforced in the lab)
Static fallback for every effect · reduced-motion honored · pause on hidden tab · no comprehension gated on motion · at most one continuous element · no heavy parallax.

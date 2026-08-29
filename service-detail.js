/* Service-detail interactions — shared by the Brand v3 service-detail pages.
 * Ported from the final approved designs per TILTH_PERFORMANCE_MARKETING_HANDOFF.md
 * and TILTH_GROWTH_STRATEGY_MEASUREMENT_HANDOFF.md.
 *
 * Deliberately narrow: theme, menu, header state, depth readout, scroll reveals,
 * clocks and the wordmark all come from brand-v3.js, which these pages already
 * load. Only each page's own signature visual, plus the shared FAQ, live here.
 *
 * Each signature block is self-contained and returns early when its markup is
 * absent, so a page only runs its own: the spend/return graph needs
 * [data-chart] + [data-scrub] (/services/performance-marketing/), the Decision
 * Chain needs [data-chain] (/services/growth-strategy-measurement/). The FAQ
 * block is common to both.
 *
 * Everything degrades: with JS off the chart renders its authored static state,
 * the Decision Chain renders its authored FRAGMENTED state, every FAQ answer is
 * visible, and no content is behind an interaction.
 */
(function () {
  "use strict";

  var root = document.querySelector(".v3-service-detail");
  if (!root) return;

  var rm = false;
  try { rm = matchMedia("(prefers-reduced-motion: reduce)").matches; } catch (e) {}

  var $ = function (s, c) { return (c || document).querySelector(s); };
  var $$ = function (s, c) { return [].slice.call((c || document).querySelectorAll(s)); };

  /* --- signature graph: spend vs return ---------------------------------- */
  (function () {
    var svg = $("[data-chart]");
    var input = $("[data-scrub]");
    if (!svg || !input) return;

    var data = {};
    try { data = JSON.parse(($("[data-graph-data]") || {}).textContent || "{}"); } catch (e) { return; }
    var NOTES = data.notes || [];
    var PROB_AT = data.probAt || [];
    if (!NOTES.length) return;

    var pf = svg.querySelector("[data-p-fixed]");
    var pu = svg.querySelector("[data-p-unfixed]");
    if (!pf || !pu || !pf.getTotalLength) return;

    var t = (+input.value || 0) / 100;

    // binary search along the path for the point at a given x — the curves are
    // beziers, so there is no closed form. 20 iterations is well past pixel
    // precision on a 400-unit viewBox.
    function ptAtX(path, x) {
      var L = path.getTotalLength(), lo = 0, hi = L, i, m;
      for (i = 0; i < 20; i++) {
        m = (lo + hi) / 2;
        if (path.getPointAtLength(m).x < x) lo = m; else hi = m;
      }
      return path.getPointAtLength((lo + hi) / 2);
    }

    function setAttrs(sel, attrs) {
      var el = svg.querySelector(sel);
      if (!el) return;
      Object.keys(attrs).forEach(function (k) { el.setAttribute(k, attrs[k]); });
    }

    function draw() {
      var v = Math.max(0, Math.min(1, t));
      var x = 2 + v * 396;
      var a, b;
      try { a = ptAtX(pf, x); b = ptAtX(pu, x); } catch (e) { return; }

      setAttrs("[data-vline]", { x1: x, x2: x, y1: 2, y2: 198 });
      setAttrs("[data-gap]", { x1: x, x2: x, y1: a.y, y2: b.y });
      setAttrs("[data-dot-fixed]", { cx: x, cy: a.y });
      setAttrs("[data-dot-unfixed]", { cx: x, cy: b.y });

      // tier + narrative. Both are aria-live, so this is the chart's accessible
      // equivalent — the svg itself is aria-hidden.
      var note = NOTES[0];
      NOTES.forEach(function (n) { if (v >= n.t) note = n; });
      var tier = $("[data-scrub-tier]"), nEl = $("[data-scrub-note]");
      if (tier && tier.textContent !== note.s) tier.textContent = note.s;
      if (nEl && nEl.textContent !== note.n) nEl.textContent = note.n;

      // each problem row activates at the spend level where it starts to bite
      $$("[data-prob]").forEach(function (el) {
        var i = +el.getAttribute("data-prob");
        var on = v >= PROB_AT[i];
        el.style.borderLeftColor = on ? "var(--mosstext)" : "var(--line2)";
        el.style.background = on ? "rgba(190,245,79,.05)" : "transparent";
        el.style.transform = on ? "translateX(4px)" : "none";
        var n = el.querySelector("[data-prob-n]"), tx = el.querySelector("[data-prob-t]");
        if (n) n.style.color = on ? "var(--mosstext)" : "var(--foot)";
        if (tx) tx.style.color = on ? "var(--fg)" : "var(--stone)";
      });
    }

    input.addEventListener("input", function () { t = (+input.value || 0) / 100; draw(); });
    draw();

    /* self-demonstration — runs once, then never fights the user ----------- */
    var demoDone = false, demoRaf = 0;
    function stopDemo() { demoDone = true; cancelAnimationFrame(demoRaf); }
    ["pointerdown", "keydown", "input", "touchstart"].forEach(function (ev) {
      input.addEventListener(ev, stopDemo, { once: true });
    });

    var host = $("[data-prob-grid]");
    if (!host || !("IntersectionObserver" in window)) return;

    var io = new IntersectionObserver(function (ens) {
      ens.forEach(function (en) {
        if (!en.isIntersecting || demoDone) return;
        demoDone = true;
        io.disconnect();
        var to = 0.72;
        // reduced motion still lands on the meaningful state, just without travel
        if (rm) { t = to; input.value = String(Math.round(to * 100)); draw(); return; }
        var from = t, t0 = performance.now(), dur = 1500;
        (function step(now) {
          var q = Math.min(1, (now - t0) / dur);
          var e = 1 - Math.pow(1 - q, 3);
          t = from + (to - from) * e;
          input.value = String(Math.round(t * 100));
          draw();
          if (q < 1) demoRaf = requestAnimationFrame(step);
        })(performance.now());
      });
    }, { threshold: .4 });
    io.observe(host);
  })();

  /* --- signature visual: Measurement Integrity / Decision Chain -----------
   * /services/growth-strategy-measurement/. Three narrative states drive one
   * paint function that renders BOTH compositions — the horizontal SVG on wide
   * screens and the vertical chain on mobile — plus the problem rows and the two
   * live readouts. The svg and the vertical list are aria-hidden; the tier, the
   * note and a visually-hidden line carry the meaning to assistive tech.
   */
  (function () {
    var svg = $("[data-chain]");
    var btns = $$("[data-state]");
    if (!svg || btns.length !== 3) return;

    var state = 0;                       // authored HTML ships FRAGMENTED
    var demoDone = false, demoTimer = 0;

    function setAll(sel, attrs) {
      $$(sel).forEach(function (el) {
        Object.keys(attrs).forEach(function (k) {
          if (k === "style") Object.keys(attrs.style).forEach(function (p) { el.style[p] = attrs.style[p]; });
          else el.setAttribute(k, attrs[k]);
        });
      });
    }

    // link state per stage of the chain, per narrative state.
    // l0-l2 sources->events, l3-l5 events->funnel, l6 funnel->revenue,
    // l7 revenue->decision.
    var LINKS = [
      { l0: "on", l1: "on", l2: "weak", l3: "weak", l4: "on", l5: "off", l6: "off",  l7: "off"  },
      { l0: "on", l1: "on", l2: "on",   l3: "on",   l4: "on", l5: "on",  l6: "moss", l7: "weak" },
      { l0: "on", l1: "on", l2: "on",   l3: "on",   l4: "on", l5: "on",  l6: "moss", l7: "moss" }
    ];
    var LINK_STYLE = {
      on:   { stroke: "var(--stone)",    opacity: "1",   dash: "0" },
      weak: { stroke: "var(--stone)",    opacity: ".38", dash: "4 5" },
      off:  { stroke: "var(--stone)",    opacity: ".12", dash: "2 6" },
      moss: { stroke: "var(--mosstext)", opacity: "1",   dash: "0" }
    };

    // node emphasis: funnel/revenue resolve as the chain completes, decision lights last
    var NODES = [
      { f: "dim", r: "dim",  d: "dim" },
      { f: "on",  r: "on",   d: "dim" },
      { f: "on",  r: "moss", d: "active" }
    ];
    var NODE_STYLE = {
      dim:    { stroke: "var(--stone)",    fill: "var(--bg)",       opacity: ".34" },
      on:     { stroke: "var(--stone)",    fill: "var(--bg)",       opacity: "1" },
      moss:   { stroke: "var(--mosstext)", fill: "var(--bg)",       opacity: "1" },
      active: { stroke: "var(--mosstext)", fill: "var(--mosstext)", opacity: "1" }
    };

    var REACHED = [2, 3, 5];             // how far along the five stages the signal gets
    // Each symptom is cleared by a specific repair, not by generic progress:
    // MAPPED fixes the events and the revenue reconciliation; DECISION-READY is
    // what finally answers attribution, "what's working" and forecasting.
    var RESOLVED = [[], [0, 2], [0, 1, 2, 3, 4]];
    var TIER = ["FRAGMENTED", "MAPPED", "DECISION-READY"];
    var NOTE = [
      "Activity is visible, but its relationship to revenue is incomplete.",
      "Events and funnel stages are aligned to meaningful business outcomes.",
      "Channel contribution can now inform allocation and forecasting."
    ];

    function paint() {
      var links = LINKS[state], nodes = NODES[state], reached = REACHED[state];

      Object.keys(links).forEach(function (k) {
        var v = LINK_STYLE[links[k]];
        setAll('[data-link="' + k + '"]', { stroke: v.stroke, "stroke-dasharray": v.dash, style: { opacity: v.opacity } });
      });
      Object.keys(nodes).forEach(function (k) {
        var v = NODE_STYLE[nodes[k]];
        setAll('[data-node="' + k + '"]', { stroke: v.stroke, fill: v.fill, style: { opacity: v.opacity } });
      });

      // stage labels and the mobile vertical chain follow the same progression
      [0, 1, 2, 3, 4].forEach(function (i) {
        var lit = i <= reached;
        var isDecision = i === 4 && state === 2;
        var colour = isDecision ? "var(--mosstext)" : (lit ? "var(--stone)" : "var(--foot)");
        setAll('[data-stage="' + i + '"]', { style: { color: colour } });
        setAll('[data-vstage="' + i + '"]', { style: { color: colour } });
        setAll('[data-vnode="' + i + '"]', { style: {
          borderColor: isDecision ? "var(--mosstext)" : (lit ? "var(--stone)" : "var(--line2)"),
          background: isDecision ? "var(--mosstext)" : "var(--bg)"
        } });
        if (i < 4) setAll('[data-vlink="' + i + '"]', { style: {
          background: (state === 2 && i >= 2) ? "var(--mosstext)" : "var(--stone)",
          opacity: i < reached ? "1" : ".2"
        } });
      });

      var done = RESOLVED[state];
      [0, 1, 2, 3, 4].forEach(function (i) {
        var clear = done.indexOf(i) > -1;
        setAll('[data-prob="' + i + '"]', { style: {
          borderLeftColor: clear ? "var(--mosstext)" : "var(--line2)",
          transform: clear ? "translateX(4px)" : "none"
        } });
        setAll('[data-prob="' + i + '"] [data-prob-n]', { style: { color: clear ? "var(--mosstext)" : "var(--foot)" } });
        setAll('[data-prob="' + i + '"] [data-prob-t]', { style: { color: clear ? "var(--foot)" : "var(--fg)" } });
      });

      // both readouts are aria-live, so only write when the text actually changes
      var tier = $("[data-state-tier]"), note = $("[data-state-note]");
      if (tier && tier.textContent !== TIER[state]) tier.textContent = TIER[state];
      if (note && note.textContent !== NOTE[state]) note.textContent = NOTE[state];

      btns.forEach(function (b) {
        b.setAttribute("aria-pressed", String(+b.getAttribute("data-state") === state));
      });
    }

    function go(next) { state = next; paint(); }

    btns.forEach(function (b) {
      b.addEventListener("click", function () { go(+b.getAttribute("data-state")); });
    });
    paint();

    /* self-demonstration — runs once, then never fights the user ----------- */
    function stopDemo() { demoDone = true; clearTimeout(demoTimer); }
    btns.forEach(function (b) {
      ["pointerdown", "keydown", "touchstart"].forEach(function (ev) {
        b.addEventListener(ev, stopDemo, { once: true });
      });
    });

    var host = $("[data-chart-wrap]");
    if (!host || !("IntersectionObserver" in window)) return;

    var io = new IntersectionObserver(function (ens) {
      ens.forEach(function (en) {
        if (!en.isIntersecting || demoDone) return;
        demoDone = true;
        io.disconnect();
        // reduced motion still reaches the state the animation ends on — the
        // travel is removed, not the information
        if (rm) { go(2); return; }
        var seq = [1, 2];
        (function run(i) {
          if (i >= seq.length) return;
          demoTimer = setTimeout(function () { go(seq[i]); run(i + 1); }, i === 0 ? 900 : 1250);
        })(0);
      });
    }, { threshold: .45 });
    io.observe(host);
  })();

  /* --- FAQ disclosure -----------------------------------------------------
   * The markup ships with every answer at natural height, so with JS off all
   * three are readable and crawlable (CLAUDE.md §12 — no essential copy behind a
   * JS-only interaction). The collapsed state is applied here, on init.
   * Animates max-height + opacity, matching the approved motion.
   */
  (function () {
    var btns = $$("[data-faq-btn]");
    if (!btns.length) return;

    function panelOf(b) { return document.getElementById(b.getAttribute("aria-controls")); }

    function apply(openBtn) {
      btns.forEach(function (o) {
        var p = panelOf(o);
        var on = o === openBtn;
        o.setAttribute("aria-expanded", on ? "true" : "false");
        var ic = o.querySelector("[data-faq-ic]");
        if (ic) ic.style.transform = on ? "rotate(45deg)" : "none";
        if (!p) return;
        p.style.maxHeight = on ? (p.scrollHeight + 8) + "px" : "0px";
        p.style.opacity = on ? "1" : "0";
      });
    }

    // first item open, matching the authored aria-expanded="true"
    var initial = btns.filter(function (b) { return b.getAttribute("aria-expanded") === "true"; })[0] || btns[0];
    apply(initial);

    btns.forEach(function (b) {
      b.addEventListener("click", function () {
        apply(b.getAttribute("aria-expanded") === "true" ? null : b);
      });
    });

    // reflow open panel if fonts land late or the column width changes
    var reapply = function () {
      var open = btns.filter(function (b) { return b.getAttribute("aria-expanded") === "true"; })[0];
      if (open) apply(open);
    };
    addEventListener("resize", reapply, { passive: true });
    if (document.fonts && document.fonts.ready) document.fonts.ready.then(reapply);
  })();
})();

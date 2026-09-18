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
 * Chain needs [data-chain] (/services/growth-strategy-measurement/), the
 * Discovery Surface needs [data-surface] (/services/seo-ai-search/), the
 * Partner Quality Map needs [data-map] (/services/affiliate-partnerships/), the
 * Conversion Path needs [data-cp] (/services/website-design-development/), the
 * Compounding Loop needs [data-cl] (/services/paid-media/), and the Creative
 * Grammar needs [data-cg] (/services/brand-creative/). The FAQ block is common
 * to all seven.
 *
 * Everything degrades: with JS off the chart renders its authored static state,
 * the Decision Chain renders its authored FRAGMENTED state, the Partner Quality
 * Map renders its authored ACTIVITY view, the Conversion Path renders its
 * authored complete route, the Compounding Loop renders its full structure at
 * rest opacity, the Creative Grammar renders its core, rules and all three
 * expressions at rest opacity, every FAQ answer is visible, and no content is
 * behind an interaction.
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

  /* --- signature visual: Discovery Surface --------------------------------
   * /services/seo-ai-search/. Three lenses over ONE system — not a progression.
   * Each says which relationships carry the weight when you look through it, so
   * the diagram never redraws; only emphasis moves. One paint function renders
   * BOTH compositions: the horizontal SVG on wide screens and the vertical
   * branch on mobile. The svg and the vertical list are aria-hidden; the lens
   * labels, aria-pressed, the two live readouts and a visually-hidden line
   * carry the meaning.
   */
  (function () {
    var svg = $("[data-surface]");
    var btns = $$("[data-lens]");
    if (!svg || btns.length !== 3) return;

    var lens = 0;                        // authored HTML ships TECHNICAL
    var demoDone = false, demoTimer = 0;

    function setAll(sel, attrs) {
      $$(sel).forEach(function (el) {
        Object.keys(attrs).forEach(function (k) {
          if (k === "style") Object.keys(attrs.style).forEach(function (p) { el.style[p] = attrs.style[p]; });
          else el.setAttribute(k, attrs[k]);
        });
      });
    }

    // e0 intent->access, e1 access->relevance, e2 relevance->authority,
    // e3/e4 authority->search / ->ai answers, e5/e6 those -> action
    var LINKS = [
      { e0: "on",   e1: "on", e2: "weak", e3: "weak", e4: "weak", e5: "faint", e6: "faint" },
      { e0: "moss", e1: "on", e2: "moss", e3: "on",   e4: "on",   e5: "weak",  e6: "weak" },
      { e0: "on",   e1: "on", e2: "on",   e3: "moss", e4: "moss", e5: "moss",  e6: "moss" }
    ];
    var LINK_STYLE = {
      on:    { stroke: "var(--stone)",    opacity: "1",   dash: "0" },
      weak:  { stroke: "var(--stone)",    opacity: ".45", dash: "4 5" },
      faint: { stroke: "var(--stone)",    opacity: ".24", dash: "2 6" },
      moss:  { stroke: "var(--mosstext)", opacity: "1",   dash: "0" }
    };

    // i intent, a access, r relevance, u authority, s search, x ai answers, c action
    var NODES = [
      { i: "on",   a: "moss", r: "on",   u: "dim",  s: "dim",  x: "dim",  c: "dim" },
      { i: "moss", a: "on",   r: "moss", u: "moss", s: "on",   x: "on",   c: "dim" },
      { i: "on",   a: "on",   r: "on",   u: "on",   s: "moss", x: "moss", c: "active" }
    ];
    // the floors are deliberate: the unlit half of the system stays legible, so
    // the section never reads as half-empty on arrival
    var NODE_STYLE = {
      dim:    { stroke: "var(--stone)",    fill: "var(--bg)",       opacity: ".45", label: "var(--foot)" },
      on:     { stroke: "var(--stone)",    fill: "var(--bg)",       opacity: "1",   label: "var(--stone)" },
      moss:   { stroke: "var(--mosstext)", fill: "var(--bg)",       opacity: "1",   label: "var(--mosstext)" },
      active: { stroke: "var(--mosstext)", fill: "var(--mosstext)", opacity: "1",   label: "var(--mosstext)" }
    };

    var TIER = ["TECHNICAL", "CONTENT", "DISCOVERY"];
    var NOTE = [
      "If the content cannot be reached or read structurally, discovery stops before it starts.",
      "Useful content answers the commercial question, and the entity behind it makes that answer credible.",
      "One organic system, surfaced through search and AI answers — both leading to a next step."
    ];
    // each mobile connector follows the link into the node beneath it
    var VLINK = [["i", "e0"], ["a", "e1"], ["r", "e2"], ["u", "e3"], ["c", "e5"]];

    function paint() {
      var links = LINKS[lens], nodes = NODES[lens];

      Object.keys(links).forEach(function (k) {
        var v = LINK_STYLE[links[k]];
        setAll('[data-link="' + k + '"]', { stroke: v.stroke, "stroke-dasharray": v.dash, style: { opacity: v.opacity } });
      });

      Object.keys(nodes).forEach(function (k) {
        var v = NODE_STYLE[nodes[k]];
        setAll('[data-node="' + k + '"]', { stroke: v.stroke, fill: v.fill, style: { opacity: v.opacity } });
        setAll('[data-nlabel="' + k + '"]', { style: { color: v.label } });
        setAll('[data-vlabel="' + k + '"]', { style: { color: v.label } });
        setAll('[data-vnode="' + k + '"]', { style: {
          borderColor: v.stroke,
          background: v.fill === "var(--mosstext)" ? "var(--mosstext)" : "var(--bg)",
          opacity: v.opacity
        } });
      });

      VLINK.forEach(function (pair) {
        var s = LINK_STYLE[links[pair[1]]];
        setAll('[data-vlink="' + pair[0] + '"]', { style: { background: s.stroke, opacity: s.opacity } });
      });

      // both readouts are aria-live, so only write when the text actually changes
      var tier = $("[data-lens-tier]"), note = $("[data-lens-note]");
      if (tier && tier.textContent !== TIER[lens]) tier.textContent = TIER[lens];
      if (note && note.textContent !== NOTE[lens]) note.textContent = NOTE[lens];

      btns.forEach(function (b) {
        b.setAttribute("aria-pressed", String(+b.getAttribute("data-lens") === lens));
      });
    }

    function go(next) { lens = next; paint(); }

    btns.forEach(function (b) {
      b.addEventListener("click", function () { go(+b.getAttribute("data-lens")); });
    });
    paint();

    /* self-demonstration — runs once, then never fights the user ----------- */
    function stopDemo() { demoDone = true; clearTimeout(demoTimer); }
    btns.forEach(function (b) {
      ["pointerdown", "keydown", "touchstart"].forEach(function (ev) {
        b.addEventListener(ev, stopDemo, { once: true });
      });
    });

    var host = $("[data-surf-wrap]");
    if (!host || !("IntersectionObserver" in window)) return;

    var io = new IntersectionObserver(function (ens) {
      ens.forEach(function (en) {
        if (!en.isIntersecting || demoDone) return;
        demoDone = true;
        io.disconnect();
        // Deliberately unlike the Decision Chain: reduced motion keeps the
        // authored TECHNICAL lens and lets the visitor drive, rather than
        // jumping to the end state.
        if (rm) return;
        var seq = [1, 2];
        (function run(i) {
          if (i >= seq.length) return;
          demoTimer = setTimeout(function () { go(seq[i]); run(i + 1); }, i === 0 ? 1000 : 1300);
        })(0);
      });
    }, { threshold: .4 });
    io.observe(host);
  })();

  /* --- signature visual: Partner Quality Map -------------------------------
   * /services/affiliate-partnerships/. A BINARY: ACTIVITY and VALUE are two
   * views of the SAME partner network, not stages and not before/after. The
   * geometry never moves; only path strength, node emphasis and the readout do.
   *
   * All emphasis is CSS, keyed off [data-view] on the wrapper (see
   * assets/service-detail-affiliate.css), so both the desktop SVG and the
   * separate mobile composition repaint from one attribute and a re-render can
   * never strand the diagram mid-state. This block only owns the attribute, the
   * aria bookkeeping and the one-shot demo.
   */
  (function () {
    var wrap = $("[data-map]");
    var btns = $$("[data-view-btn]");
    if (!wrap || btns.length !== 2) return;

    var MAP_DEMO_MS = 900;
    var view = wrap.getAttribute("data-view") || "activity";   // authored ACTIVITY
    var userPicked = false, demoDone = false, demoTimer = 0;

    function paint() {
      if (wrap.getAttribute("data-view") !== view) wrap.setAttribute("data-view", view);
      btns.forEach(function (b) {
        b.setAttribute("aria-pressed", String(b.getAttribute("data-view-btn") === view));
      });
      // only the active readout is exposed, so the two are never read out together
      $$("[data-readout]").forEach(function (el) {
        if (el.getAttribute("data-readout") === view) el.removeAttribute("aria-hidden");
        else el.setAttribute("aria-hidden", "true");
      });
    }

    function setView(v) {
      userPicked = true;
      clearTimeout(demoTimer);
      view = v;
      paint();
    }

    btns.forEach(function (b) {
      b.addEventListener("click", function () { setView(b.getAttribute("data-view-btn")); });
    });
    paint();

    /* Reduced motion resolves straight to VALUE — deliberately unlike the
     * Discovery Surface, which keeps its authored lens. VALUE is the explanatory
     * half of this binary, so a visitor who cannot see the transition should
     * land on the view that carries the meaning. Both controls stay usable. */
    if (rm) { view = "value"; paint(); return; }

    if (!("IntersectionObserver" in window)) return;

    // any real interaction cancels the demo permanently, including one that
    // happens before the map is ever scrolled into view
    ["pointerdown", "keydown", "touchstart"].forEach(function (ev) {
      wrap.addEventListener(ev, function () {
        userPicked = true;
        clearTimeout(demoTimer);
      }, { once: true, passive: true });
    });

    // threshold 0 with a middle-band rootMargin, not a ratio: the map is taller
    // than the viewport on most screens, so a ratio threshold can never be met.
    var io = new IntersectionObserver(function (ens) {
      ens.forEach(function (en) {
        if (!en.isIntersecting || demoDone) return;
        demoDone = true;
        io.disconnect();
        if (userPicked) return;
        // already ACTIVITY from the authored state — hold it, then resolve once
        demoTimer = setTimeout(function () {
          if (userPicked) return;
          view = "value";
          paint();
        }, MAP_DEMO_MS);
      });
    }, { threshold: 0, rootMargin: "-20% 0px -20% 0px" });
    io.observe(wrap);
  })();

  /* --- signature visual: Conversion Path -----------------------------------
   * /services/website-design-development/. One continuous route —
   * ENTRY → UNDERSTANDING → TRUST → DECISION → ACTION — with LEARNING as a
   * post-action feedback destination, never a sixth stage. Four underlying
   * conditions sit beneath the route and the markers ON the path ARE the
   * control: no tabs, no segmented control, no lens row, no detached panel.
   *
   * Every state lives in assets/service-detail-cro.css keyed off
   * [data-cp][data-friction]. This block sets ONE attribute and syncs the aria
   * bookkeeping; it never writes geometry, so a re-render cannot strand the
   * diagram mid-state. Everything here is scoped to this page and exits
   * immediately when [data-cp] is absent.
   */
  (function () {
    var cp = $("[data-cp]");
    if (!cp) return;

    var page = $(".v3-cro") || root;
    var DEMO_IN_MS = 900, DEMO_OUT_MS = 1700;
    var fric = cp.getAttribute("data-friction") || "none";   // authored "none"
    var userPicked = false, demoDone = false, demoIn = 0, demoOut = 0;

    var marks = $$("[data-mk],[data-mmk]", page);
    var readouts = $$("[data-ro]", page);

    function paint() {
      if (cp.getAttribute("data-friction") !== fric) cp.setAttribute("data-friction", fric);
      marks.forEach(function (b) {
        var name = b.getAttribute("data-mk") || b.getAttribute("data-mmk");
        b.setAttribute("aria-pressed", name === fric ? "true" : "false");
      });
      // The inactive readouts are display:none and so already out of the a11y
      // tree, but aria-hidden is synced explicitly: the container is
      // aria-live="polite" and must never announce more than the current one.
      readouts.forEach(function (p) {
        if (p.getAttribute("data-ro") === fric) p.removeAttribute("aria-hidden");
        else p.setAttribute("aria-hidden", "true");
      });
    }

    // Selecting the active condition again returns to the complete path, so the
    // default state is always one press away and nothing is a dead end.
    function setFric(v) {
      userPicked = true;
      clearTimeout(demoIn); clearTimeout(demoOut);
      fric = (fric === v) ? "none" : v;
      paint();
    }

    marks.forEach(function (b) {
      b.addEventListener("click", function () {
        setFric(b.getAttribute("data-mk") || b.getAttribute("data-mmk"));
      });
    });
    paint();

    // Reserve the readout height at desktop so switching state cannot shift the
    // section beneath it.
    var readout = $("[data-cp-readout]", page);
    function reserve() { if (readout) readout.style.minHeight = innerWidth >= 1024 ? "132px" : "0px"; }
    reserve();
    addEventListener("resize", reserve, { passive: true });

    /* One restrained first-entry demonstration: DEFAULT → POSITIONING →
     * DEFAULT, once. It never cycles the four conditions, and reduced motion
     * skips it entirely — the authored default stays, rather than forcing a
     * selected state on a visitor who cannot see the transition. */
    if (rm || !("IntersectionObserver" in window)) return;

    ["pointerdown", "keydown", "touchstart"].forEach(function (ev) {
      cp.addEventListener(ev, function () {
        userPicked = true;
        clearTimeout(demoIn); clearTimeout(demoOut);
      }, { once: true, passive: true });
    });

    // threshold 0 with a middle-band rootMargin, not a ratio: the path can be
    // taller than the viewport, where a ratio threshold is never satisfied.
    var io = new IntersectionObserver(function (ens) {
      ens.forEach(function (en) {
        if (!en.isIntersecting || demoDone) return;
        demoDone = true;
        io.disconnect();
        if (userPicked) return;
        demoIn = setTimeout(function () {
          if (userPicked) return;
          fric = "positioning"; paint();
          demoOut = setTimeout(function () {
            if (userPicked) return;
            fric = "none"; paint();
          }, DEMO_OUT_MS);
        }, DEMO_IN_MS);
      });
    }, { threshold: 0, rootMargin: "-20% 0px -20% 0px" });
    io.observe(cp);
  })();

  /* --- signature visual: Compounding Loop ----------------------------------
   * /services/paid-media/. Execution moves outward along the upper rail, folds
   * at the channel edge, and the verified signal returns along the lower rail
   * into the next test. It is NOT a state picker — there are zero controls
   * inside [data-cl]. One narrative sequence runs once on first viewport entry,
   * then settles into a complete, self-explanatory static state.
   *
   * The structure is readable BEFORE motion: every rail, node, chevron and
   * label is already painted at rest opacity by service-detail-paid.css. The
   * sequence only raises emphasis and draws the one carried-signal trace.
   * Activation is a data-on attribute per element key, so a re-render or theme
   * switch can never strand the diagram mid-sequence.
   *
   * The design prototype also carries a polling fallback for the preview host,
   * which can drop IntersectionObserver callbacks. It is explicitly marked
   * "PREVIEW-HOST RESILIENCE ONLY — NOT PRODUCTION BEHAVIOUR" and is
   * deliberately NOT ported: production relies on the real observer, and there
   * is no page-mount/elapsed-time settle of any kind here.
   */
  (function () {
    var cl = $("[data-cl]");
    if (!cl) return;

    // execution outward -> channel edge -> signal -> read -> next cycle
    var LOOP_PHASES = [
      ["out", "structure", "launch"],
      ["execution", "fan", "plat"],
      ["fold", "signal"],
      ["ret", "trace", "learn", "reallocate"],
      ["rise", "nexttest"]
    ];
    var LOOP_STEPS_MS = [550, 500, 420, 360, 820];   // cumulative 550/1050/1470/1830/2650

    var timers = [], cancelled = false, ran = false;

    function on(keys) {
      keys.forEach(function (k) {
        $$('[data-cl] [data-k="' + k + '"]').forEach(function (el) { el.setAttribute("data-on", ""); });
      });
    }
    function settle() { LOOP_PHASES.forEach(on); }

    // Reduced motion, or no observer support: the complete final state is shown
    // immediately. It carries the whole meaning on its own — no staged
    // sequence, no travelling trace, no delayed emphasis.
    if (rm || !("IntersectionObserver" in window)) { settle(); return; }

    // No controls to cancel, so cancelling means: stop every pending timer and
    // settle the COMPLETE loop. Never half-complete, never reset, never restart.
    function cancel() {
      cancelled = true;
      timers.forEach(clearTimeout);
      settle();
    }
    ["pointerdown", "keydown", "touchstart"].forEach(function (ev) {
      cl.addEventListener(ev, cancel, { once: true, passive: true });
    });

    // Viewport entry is the ONLY trigger. The observer disconnects on the first
    // eligible intersection, before any timer is scheduled.
    var io = new IntersectionObserver(function (ens) {
      ens.forEach(function (en) {
        if (!en.isIntersecting || ran) return;
        ran = true;
        io.disconnect();
        if (cancelled) return;
        var t = 0;
        LOOP_PHASES.forEach(function (group, i) {
          t += LOOP_STEPS_MS[i];
          timers.push(setTimeout(function () {
            if (cancelled) return;
            on(group);
          }, t));
        });
      });
    }, { threshold: 0, rootMargin: "-15% 0px -15% 0px" });
    io.observe(cl);
  })();

  /* --- signature visual: Creative Grammar ----------------------------------
   * /services/brand-creative/. One strategic core generates three genuinely
   * different editorial expressions, and a single Moss alignment rule runs
   * through all three at the identical vertical fraction — the visual proof of
   * "consistency is not sameness". It is NOT a picker: there are zero controls
   * inside [data-cg]. One narrative sequence runs once on first viewport entry,
   * then settles into a complete, self-explanatory static state.
   *
   * The structure is readable BEFORE motion: the core panel, all three rules,
   * all three expressions and every label are already painted at rest opacity
   * by service-detail-brand.css. Only the Moss rule, the connectors and the
   * readout are hidden at rest, and the assembly reveals those. 0 lit does not
   * mean blank.
   *
   * Activation is a data-on attribute per element key, so a re-render or a
   * theme switch can never strand the assembly mid-state.
   *
   * The design prototype also carries a polling fallback (_cgPoll) for the
   * preview host, which can drop IntersectionObserver callbacks. It is
   * explicitly marked "PREVIEW-HOST RESILIENCE ONLY — NOT PRODUCTION
   * BEHAVIOUR" and is deliberately NOT ported: production relies on the real
   * observer, and there is no page-mount/elapsed-time settle of any kind here.
   */
  (function () {
    var cg = $("[data-cg]");
    if (!cg) return;

    // core establishes its rules -> generates three expressions -> the rule
    // they all share becomes visible
    var CG_PHASES = [
      ["core", "r1"],
      ["r2"],
      ["r3"],
      ["conn", "e1"],
      ["e2"],
      ["e3"],
      ["grammar"]
    ];
    var CG_STEPS_MS = [500, 360, 360, 460, 320, 320, 560]; // cumulative -> 2880ms

    var timers = [], cancelled = false, ran = false;

    function on(keys) {
      keys.forEach(function (k) {
        $$('[data-cg] [data-k="' + k + '"]').forEach(function (el) { el.setAttribute("data-on", ""); });
      });
    }
    function settle() { CG_PHASES.forEach(on); }

    // Reduced motion, or no observer support: the complete assembled state is
    // shown immediately. The static composition carries the whole idea — no
    // staged assembly, no moving connector build, no motion-dependent meaning.
    if (rm || !("IntersectionObserver" in window)) { settle(); return; }

    // No controls to cancel, so cancelling means: stop every pending timer and
    // settle the COMPLETE assembly. Never half-complete, never reset, never
    // restart, and no surviving timer can overwrite the settled state.
    function cancel() {
      cancelled = true;
      timers.forEach(clearTimeout);
      settle();
    }
    ["pointerdown", "keydown", "touchstart"].forEach(function (ev) {
      cg.addEventListener(ev, cancel, { once: true, passive: true });
    });

    // Viewport entry is the ONLY trigger. The observer disconnects on the first
    // eligible intersection, before any timer is scheduled.
    var io = new IntersectionObserver(function (ens) {
      ens.forEach(function (en) {
        if (!en.isIntersecting || ran) return;
        ran = true;
        io.disconnect();
        if (cancelled) return;
        var t = 0;
        CG_PHASES.forEach(function (group, i) {
          t += CG_STEPS_MS[i];
          timers.push(setTimeout(function () {
            if (cancelled) return;
            on(group);
          }, t));
        });
      });
    }, { threshold: 0, rootMargin: "-15% 0px -15% 0px" });
    io.observe(cg);
  })();

  /* --- typography safeguards (Website/CRO + Paid Media + Brand Creative) ----
   * Scoped to the three pages whose approved handoffs specify this contract, so
   * the four earlier service-detail pages are untouched. CSS owns every
   * authored size; both passes below are safeguards that must stay idle at
   * each authored step.
   */
  (function () {
    var page = $(".v3-cro") || $(".v3-paid") || $(".v3-creative");
    if (!page) return;

    function syneReady() {
      try { return document.fonts.check("800 1em Syne"); } catch (e) { return true; }
    }

    /* Syne cannot break mid-word, so a long display word can overrun its column
     * and paint over a neighbour while staying inside the viewport. This only
     * ever shrinks on a REAL painted-ink overrun, measured per character with
     * whitespace skipped — a wrapped line's trailing space renders past the
     * content box, and measuring whole text-node ranges (or scrollWidth) reads
     * that as overrun and shrinks type that already fits. */
    function fitHeads() {
      $$("[data-fit]", page).forEach(function (el) {
        el.style.fontSize = "";                       // re-read the authored size
        var css = parseFloat(getComputedStyle(el).fontSize);
        if (!css) return;

        function overrun() {
          var max = -Infinity;
          (function walk(n) {
            if (n.nodeType === 3 && n.nodeValue.trim()) {
              var t = n.nodeValue;
              for (var i = 0; i < t.length; i++) {
                if (!t[i].trim()) continue;
                var r = document.createRange();
                r.setStart(n, i); r.setEnd(n, i + 1);
                var q = r.getClientRects()[0];
                if (q) max = Math.max(max, q.right);
              }
            }
            if (n.childNodes) [].slice.call(n.childNodes).forEach(walk);
          })(el);
          return max - el.getBoundingClientRect().right;
        }

        if (overrun() <= 4) return;
        var size = css, floor = css * 0.78, guard = 0;
        while (overrun() > 4 && size > floor && guard < 12) {
          size = Math.max(floor, size * 0.95);
          el.style.fontSize = size.toFixed(1) + "px";
          guard++;
        }
      });
    }

    // equalise capability titles per visual row so the body copy beneath them
    // starts on one baseline even when a title wraps
    function equalise() {
      var caps = $$("[data-cap-h]", page);
      caps.forEach(function (el) { el.style.minHeight = "0px"; });
      if (innerWidth < 700 || !caps.length) return;
      var rows = {};
      caps.forEach(function (el) {
        var top = Math.round(el.getBoundingClientRect().top / 4);
        (rows[top] = rows[top] || []).push(el);
      });
      Object.keys(rows).forEach(function (k) {
        var max = 0;
        rows[k].forEach(function (el) { max = Math.max(max, el.getBoundingClientRect().height); });
        rows[k].forEach(function (el) { el.style.minHeight = Math.ceil(max) + "px"; });
      });
    }

    function run() { fitHeads(); equalise(); }

    // Never measure against fallback metrics: a fallback sans is ~55% narrower
    // than Syne, so a pre-load pass would shrink type that actually fits.
    if (syneReady()) { run(); requestAnimationFrame(run); }
    if (document.fonts) {
      var after = function () { run(); requestAnimationFrame(run); };
      if (document.fonts.load) document.fonts.load("800 1em Syne").then(after).catch(after);
      if (document.fonts.ready) document.fonts.ready.then(after);
    }
    addEventListener("resize", run, { passive: true });
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

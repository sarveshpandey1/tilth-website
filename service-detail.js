/* Service-detail interactions — first used by /services/performance-marketing/.
 * Ported from the final approved design per TILTH_PERFORMANCE_MARKETING_HANDOFF.md.
 *
 * Deliberately narrow: theme, menu, header state, depth readout, scroll reveals,
 * clocks and the wordmark all come from brand-v3.js, which this page already
 * loads. Only the page's own signature graph and its FAQ live here.
 *
 * Everything degrades: with JS off the chart renders its authored static state,
 * every FAQ answer is visible, and no content is behind an interaction.
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

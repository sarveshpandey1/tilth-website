/* /marketing-agency-bengaluru/ — the FAQ disclosure. Nothing else.
 *
 * Ported from the frozen Master Design Release design
 * "BENGALURU/Tilth Marketing Agency Bengaluru.dc.html" (faqPaint + faqHeights).
 *
 * The page has no signature interaction and the frozen design does not ask for
 * one: the copy is the SEO payload, so it is all present at first paint and
 * nothing on the page reveals, animates or depends on IntersectionObserver.
 * The theme, header, menu, depth readout, footer, clocks and wordmark all come
 * from brand-v3.js, which this page already loads, so this file carries only
 * the one behaviour CSS cannot express: measuring an answer and collapsing it.
 *
 * Degrades completely (report §17, verified at 390 and 1440): every answer
 * ships at natural height, so with JS off all five are readable and crawlable
 * and all thirteen body links are present — no essential copy sits behind a
 * JS-only interaction (CLAUDE.md §12). The collapse is applied here, on init,
 * with the first item open, the accordion exclusive and closable to all-closed,
 * matching the frozen design. Collapsed panels are marked inert and
 * aria-hidden so FAQ 5's /contact/ link cannot take focus while hidden.
 *
 * The open glyph's rotation and Moss tone are CSS (assets/bengaluru.css, keyed
 * on the same aria-expanded this script owns and gated behind html.v3-js),
 * because with JS off every trigger must read "+" while every answer is open.
 *
 * Analytics: none is invented here. The shared analytics.js already reports
 * faq_open from [data-faq-btn] and cta_click from the /contact/ CTAs, so
 * rendering this page through the generator brings it into the standard
 * contract (report §13) with no page-level code.
 */
(function () {
  "use strict";

  if (!document.querySelector(".v3-bl")) return;

  var btns = [].slice.call(document.querySelectorAll("[data-faq-btn]"));
  if (!btns.length) return;

  function panelOf(b) { return document.getElementById(b.getAttribute("aria-controls")); }

  function apply(openBtn) {
    btns.forEach(function (b) {
      var p = panelOf(b);
      var on = b === openBtn;
      b.setAttribute("aria-expanded", on ? "true" : "false");
      if (!p) return;
      // measure the answer's own wrapper, not the clipped panel
      var inner = p.firstElementChild;
      var h = inner ? Math.ceil(inner.getBoundingClientRect().height) : 0;
      p.style.maxHeight = on ? (h + 8) + "px" : "0px";
      p.style.opacity = on ? "1" : "0";
      if (on) { p.removeAttribute("inert"); p.setAttribute("aria-hidden", "false"); }
      else { p.setAttribute("inert", ""); p.setAttribute("aria-hidden", "true"); }
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

  // re-measure the open panel if Syne lands late or the column width changes
  var reapply = function () {
    var open = btns.filter(function (b) { return b.getAttribute("aria-expanded") === "true"; })[0];
    if (open) apply(open);
  };
  addEventListener("resize", reapply, { passive: true });
  if (document.fonts && document.fonts.ready) document.fonts.ready.then(reapply);
})();

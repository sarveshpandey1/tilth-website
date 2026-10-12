/* Regional family — the FAQ disclosure. Nothing else.
 *
 * Ported from the frozen Master Design Release designs
 * "REGIONAL/Tilth Regional Hub Template - India.dc.html" and
 * "REGIONAL/Tilth Regional Detail Template - US Website CRO.dc.html".
 *
 * The family has no signature interaction and the frozen design does not give
 * it one: 13 long reading pages whose copy is the SEO payload, so everything is
 * present at first paint and nothing reveals or depends on IntersectionObserver
 * (0 [data-reveal] across all thirteen frozen renders). The theme, header,
 * menu, depth readout, footer, clocks and wordmark all come from brand-v3.js,
 * which these pages already load, so this file carries only the one behaviour
 * CSS cannot express: measuring an answer and collapsing it.
 *
 * Degrades completely (report §20, verified at 390 and 1440 on all 13): every
 * answer ships at natural height, so with JS off all six per route are readable
 * and crawlable and every internal link is a plain <a href> — no regional
 * context, link or route exists only in JavaScript, and there is no switcher to
 * depend on. The collapse is applied here, on init, with the first item open,
 * the accordion exclusive and closable to all-closed. Collapsed panels are
 * marked inert and aria-hidden so their links cannot take focus.
 *
 * The open glyph's Moss tone is CSS (assets/regional.css, keyed on the same
 * aria-expanded this script owns), and the icon rotation is applied here.
 *
 * Analytics: none is invented. The shared analytics.js already reports
 * faq_open from [data-faq-btn] and segments these routes by their /india/ and
 * /us/ path prefixes, so the standard contract needs no page-level code.
 */
(function () {
  "use strict";

  if (!document.querySelector(".v3-rg")) return;

  var btns = [].slice.call(document.querySelectorAll("[data-faq-btn]"));
  if (!btns.length) return;

  function panelOf(b) { return document.getElementById(b.getAttribute("aria-controls")); }

  function apply(openBtn) {
    btns.forEach(function (b) {
      var p = panelOf(b);
      var on = b === openBtn;
      b.setAttribute("aria-expanded", on ? "true" : "false");
      var ic = b.querySelector("[data-faq-ic]");
      if (ic) ic.style.transform = on ? "rotate(45deg)" : "none";
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

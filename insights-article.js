/* Insights article — the FAQ disclosure. Nothing else.
 *
 * Ported from the frozen Master Design Release design
 * "INSIGHTS/Tilth Insight Article Template - Marketing Agency Cost India.dc.html".
 *
 * The family has no signature motion: editorial reading is the interaction. The
 * theme, header, menu, footer, clocks and wordmark all come from brand-v3.js,
 * which these pages already load, so this file carries only the one behaviour
 * CSS cannot express.
 *
 * Degrades completely: every answer ships at natural height, so with JS off all
 * of them are readable and crawlable (CLAUDE.md §12 — no essential copy behind a
 * JS-only interaction). The collapse is applied here, on init, with the first
 * item open and the accordion exclusive, matching the frozen design. Collapsed
 * panels are also marked inert and aria-hidden so their links cannot take focus.
 *
 * No analytics: the Insights family has no production analytics contract, and
 * none is invented for this component.
 */
(function () {
  "use strict";

  var root = document.querySelector(".v3-article");
  if (!root) return;

  var btns = [].slice.call(document.querySelectorAll("[data-faq-btn]"));
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
      // a collapsed answer must not hold focus or be read out
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

  // reflow the open panel if fonts land late or the column width changes
  var reapply = function () {
    var open = btns.filter(function (b) { return b.getAttribute("aria-expanded") === "true"; })[0];
    if (open) apply(open);
  };
  addEventListener("resize", reapply, { passive: true });
  if (document.fonts && document.fonts.ready) document.fonts.ready.then(reapply);
})();

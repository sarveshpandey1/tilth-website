/* Core Company interactions — currently just the FAQ disclosure on /approach/.
 *
 * Deliberately narrow: theme, menu, header state, the depth readout, scroll
 * reveals, the clocks and the wordmark all come from brand-v3.js, which these
 * pages already load. The family's layout, type ladder and every hover/focus
 * state are CSS-only, so this is the one behaviour CSS cannot express.
 *
 * It is a separate file rather than a reuse of service-detail.js because that
 * script returns early unless .v3-service-detail is present — loading it here
 * would mean shipping eight unrelated signature visuals to parse. The FAQ
 * contract below is the same one those pages use, so the two behave identically.
 *
 * Degrades completely: the markup ships with every answer at natural height, so
 * with JS off all six are readable and crawlable (CLAUDE.md §12 — no essential
 * copy behind a JS-only interaction). The collapsed state is applied here, on
 * init. Animates max-height + opacity, matching the approved motion.
 */
(function () {
  "use strict";

  var root = document.querySelector(".v3-core");
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

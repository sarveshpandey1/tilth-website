/* /insights/ — hub category filter. Progressive enhancement only.
 *
 * Ported from the frozen Master Design Release design
 * "INSIGHTS/Tilth Insights.dc.html" (hubInit), which is the live hub's own
 * behaviour: all 18 entries are rendered at build time from
 * src/insights-content.mjs and this script only sets `hidden`. It never creates
 * an entry, so every article stays visible, linked and crawlable with
 * JavaScript off.
 *
 * The filter rail ships `hidden` because it is only usable once this runs; the
 * CSS :has() rule drops its grid column until then, so there is no empty rail.
 * An unknown category falls back to 'all', as the live page does, and the empty
 * state shows when nothing matches (unreachable with today's data).
 *
 * Buttons are aria-pressed toggles in a labelled group. The live markup used
 * role="tab" with no tab panels; that is the frozen design's accessibility
 * correction and the only change to the behaviour.
 */
(function () {
  var box = document.getElementById("hubFilters");
  if (!box) return;
  box.hidden = false;

  var btns = [].slice.call(box.querySelectorAll("[data-cat-btn]"));
  var items = [].slice.call(document.querySelectorAll("#insightList > li"));
  var empty = document.getElementById("hubEmpty");

  function filter(cat) {
    var shown = 0;
    items.forEach(function (c) {
      var m = (cat === "all" || c.getAttribute("data-cat") === cat);
      c.hidden = !m;
      if (m) shown++;
    });
    if (empty) empty.hidden = shown > 0;
  }

  function activate(cat) {
    var matched = null;
    btns.forEach(function (t) {
      var on = t.getAttribute("data-cat") === cat;
      if (on) matched = t;
      t.setAttribute("aria-pressed", on ? "true" : "false");
    });
    if (!matched) { activate("all"); return; }
    filter(cat);
  }

  btns.forEach(function (t) {
    t.addEventListener("click", function () { activate(t.getAttribute("data-cat")); });
  });
})();

/* /tools/ — hub filtering. Progressive enhancement only.
 *
 * Ported from the frozen Master Design Release design
 * "TOOLS/Tilth Tools Hub.dc.html" (TOOL_INIT['hub']).
 *
 * Every tool row, the flagship and the benchmarks link are rendered at BUILD
 * time from tools/lib/registry.js (see src/pages/tools-index.mjs). This script
 * never creates a row — it only sets `hidden` on rows that are already in the
 * HTML, so all seven tool routes stay visible, linked and crawlable with
 * JavaScript off. That is the fix for the hub's JS-only crawlability defect.
 *
 * The filter block ships `hidden` and the static jump list ships visible; this
 * script swaps them, because the filters are only usable once it can run them.
 *
 * filterTools() is the shared registry function, unchanged. The flagship stays
 * outside the filtered list, as on the live hub. All five analytics calls are
 * the live page's, with the same names and parameters — nothing new is invented.
 */
import { filterTools } from "/tools/lib/registry.js";
import { track, trackOnce } from "/tools/lib/analytics.js";

(function () {
  var root = document.querySelector(".v3-tools");
  if (!root) return;

  track("tool_viewed", { tool: "hub" });

  var state = { objective: "", model: "", query: "" };
  var filters = document.getElementById("hubFilters"), jump = document.getElementById("hubJump");
  var empty = document.getElementById("hubEmpty"), search = document.getElementById("hubSearch");
  var objPills = document.getElementById("objPills"), modelPills = document.getElementById("modelPills");
  var rows = [].slice.call(document.querySelectorAll("[data-tool-row]"));
  var groups = [].slice.call(document.querySelectorAll("[data-group]"));

  if (filters) filters.hidden = false;   // the filters exist only when JS can run them
  if (jump) jump.hidden = true;          // …and replace the static jump links

  function render() {
    var list = filterTools(state).filter(function (t) { return !t.flagship; });
    var ids = {}; list.forEach(function (t) { ids[t.id] = true; });
    rows.forEach(function (r) { r.hidden = !ids[r.getAttribute("data-tool-row")]; });
    groups.forEach(function (g) { g.hidden = !g.querySelector("[data-tool-row]:not([hidden])"); });
    if (empty) empty.hidden = list.length > 0;
  }

  function press(box, b) {
    [].slice.call(box.querySelectorAll("[data-pill]")).forEach(function (x) {
      x.setAttribute("aria-pressed", x === b ? "true" : "false");
    });
  }

  if (objPills) objPills.addEventListener("click", function (e) {
    var b = e.target.closest("[data-pill]"); if (!b) return;
    press(objPills, b);
    state.objective = b.getAttribute("data-obj") || ""; render();
    track("objective_selected", { objective: state.objective || "all" });
  });

  if (modelPills) modelPills.addEventListener("click", function (e) {
    var b = e.target.closest("[data-pill]"); if (!b) return;
    press(modelPills, b);
    state.model = b.getAttribute("data-model") || ""; render();
    track("business_model_selected", { tool: "hub", model: state.model || "any" });
  });

  if (search) search.addEventListener("input", function () {
    state.query = search.value; render();
    if (search.value) trackOnce("hubsearch", "tool_search", {});
  });

  function trackOpen(e) {
    var a = e.target.closest("a[data-tool]");
    if (a) track("tool_opened", { tool: a.getAttribute("data-tool"), from: "hub" });
  }
  var featured = document.getElementById("featured"), grid = document.getElementById("toolGrid");
  if (featured) featured.addEventListener("click", trackOpen);
  if (grid) grid.addEventListener("click", trackOpen);

  render();
})();

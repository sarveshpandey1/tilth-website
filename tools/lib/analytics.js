/* ------------------------------------------------------------------
 * Tilth tools — privacy-safe product analytics (ESM).
 *
 * Pushes named GA4 events. NEVER pass raw revenue, CAC, margin or other
 * confidential inputs — bucket them into coarse bands first (band() /
 * scoreBand()). Analytics must never break a tool, so everything is guarded.
 *
 * Event taxonomy (params in brackets):
 *   tool_viewed            [tool]
 *   tool_started           [tool]
 *   business_model_selected[tool, model]
 *   objective_selected     [objective]         (hub)
 *   tool_opened            [tool, from]        (hub card click)
 *   tool_search            [length_band]       (hub)
 *   result_viewed          [tool, model, band] (band = health/score band)
 *   scenario_changed       [tool]
 *   methodology_opened     [tool]
 *   related_tool_clicked   [tool, to]
 *   cta_clicked            [tool, cta]
 * ------------------------------------------------------------------ */

export function track(event, params = {}) {
  try {
    if (typeof window === 'undefined') return;
    if (typeof window.gtag === 'function') window.gtag('event', event, params);
    else (window.dataLayer = window.dataLayer || []).push(Object.assign({ event }, params));
  } catch (e) { /* never let analytics throw into a tool */ }
}

// Health/score → coarse band (no raw score leaves the page beyond this).
export function scoreBand(score) {
  if (score == null || isNaN(score)) return 'na';
  if (score >= 70) return 'healthy';
  if (score >= 50) return 'mixed';
  return 'weak';
}

// Bucket any number into '<e0' … '>=eN' labels so confidential values never leave raw.
export function band(value, edges) {
  if (value == null || isNaN(value) || !Array.isArray(edges) || !edges.length) return 'na';
  for (let i = 0; i < edges.length; i++) if (value < edges[i]) return '<' + edges[i];
  return '>=' + edges[edges.length - 1];
}

// Fire an event at most once per key per page load (avoids keystroke spam).
const _once = new Set();
export function trackOnce(key, event, params = {}) {
  if (_once.has(key)) return;
  _once.add(key);
  track(event, params);
}

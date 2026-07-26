/* ------------------------------------------------------------------
 * Tilth tools — locale-correct number & currency formatting (ESM).
 * Formatting only; no conversion. Currency selection controls display
 * and locale grouping (e.g. Indian numbering for INR), never FX rates.
 * ------------------------------------------------------------------ */

export const CURRENCIES = {
  INR: { symbol: '₹', locale: 'en-IN' },
  USD: { symbol: '$', locale: 'en-US' },
  GBP: { symbol: '£', locale: 'en-GB' },
  EUR: { symbol: '€', locale: 'de-DE' },
  AED: { symbol: 'AED ', locale: 'en-AE' },
  SGD: { symbol: 'S$', locale: 'en-SG' },
  AUD: { symbol: 'A$', locale: 'en-AU' }
};

export function formatNumber(n, locale = 'en-IN') {
  if (!isFinite(n)) return '∞';
  return Math.round(n).toLocaleString(locale);
}

export function formatCurrency(amount, currency = 'INR') {
  const c = CURRENCIES[currency] || CURRENCIES.INR;
  if (!isFinite(amount)) return c.symbol + '∞';
  return c.symbol + Math.round(amount).toLocaleString(c.locale);
}

// Indian numbering shortcut used across the tools.
export function inr(n) { return formatNumber(n, 'en-IN'); }

/* Tilth — first-party analytics consent.
 *
 * No third-party CMP. One preference key, one canonical state:
 *
 *   localStorage["tilth-analytics-consent"] = "granted" | "denied"
 *   window.__tilthAnalyticsConsent          = "granted" | "denied" | "unset"
 *
 * The head script in render.mjs sets Consent Mode defaults to denied, reads the
 * saved preference and — only for a stored "granted" — calls __tilthEnableGa().
 * This file renders the panel, writes the choice, and flips the same state at
 * runtime so analytics.js and tools/lib/analytics.js stop or start immediately.
 *
 * Tilth has no advertising pixels, so there is deliberately no marketing/ad
 * consent category: the only choice offered is analytics.
 *
 * Consent-button clicks are never themselves tracked.
 */
(function () {
  "use strict";

  var KEY = "tilth-analytics-consent";
  var PANEL_ID = "tilth-consent";

  function read() {
    try { return localStorage.getItem(KEY) || "unset"; } catch (e) { return "unset"; }
  }
  function write(v) {
    try { localStorage.setItem(KEY, v); } catch (e) { /* private mode — session only */ }
  }

  /* Remove the first-party GA cookies this document can see. Host-only and
   * dot-domain variants are both attempted, because GA sets `_ga` on the
   * registrable domain. HttpOnly or cross-subdomain cookies are not reachable
   * from script and are not claimed to be. */
  function clearGaCookies() {
    var names = [];
    try {
      document.cookie.split(";").forEach(function (c) {
        var n = c.split("=")[0].trim();
        if (n.indexOf("_ga") === 0) names.push(n);
      });
    } catch (e) { return; }
    var host = location.hostname;
    var domains = ["", host, "." + host];
    var parts = host.split(".");
    if (parts.length > 2) domains.push("." + parts.slice(-2).join("."));
    names.forEach(function (n) {
      domains.forEach(function (d) {
        try {
          document.cookie = n + "=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/" +
            (d ? "; domain=" + d : "");
        } catch (e) { /* ignore */ }
      });
    });
  }

  function setState(v) {
    window.__tilthAnalyticsConsent = v;
    if (v === "granted") {
      if (typeof window.__tilthEnableGa === "function") window.__tilthEnableGa();
    } else {
      if (typeof window.gtag === "function") {
        try { window.gtag("consent", "update", { analytics_storage: "denied" }); } catch (e) {}
      }
      clearGaCookies();
    }
  }

  // ---- panel ---------------------------------------------------------------
  var lastFocus = null;

  function close() {
    var el = document.getElementById(PANEL_ID);
    if (el) el.remove();
    if (lastFocus && typeof lastFocus.focus === "function") {
      try { lastFocus.focus(); } catch (e) {}
    }
    lastFocus = null;
  }

  function choose(v) {
    write(v);
    setState(v);
    close();
  }

  function build() {
    var wrap = document.createElement("div");
    wrap.id = PANEL_ID;
    wrap.className = "tilth-consent";
    wrap.setAttribute("role", "dialog");
    wrap.setAttribute("aria-modal", "false");
    wrap.setAttribute("aria-labelledby", PANEL_ID + "-h");
    wrap.setAttribute("aria-describedby", PANEL_ID + "-b");

    var h = document.createElement("h2");
    h.id = PANEL_ID + "-h";
    h.className = "tilth-consent__h";
    h.textContent = "Analytics choice";

    var p = document.createElement("p");
    p.id = PANEL_ID + "-b";
    p.className = "tilth-consent__b";
    p.textContent = "We use essential browser storage for site preferences and, with your " +
      "permission, Google Analytics to understand how the site is used. We do not use " +
      "advertising pixels.";

    var row = document.createElement("div");
    row.className = "tilth-consent__row";

    var yes = document.createElement("button");
    yes.type = "button";
    yes.className = "tilth-consent__btn tilth-consent__btn--yes";
    yes.textContent = "Accept analytics";
    yes.addEventListener("click", function () { choose("granted"); });

    var no = document.createElement("button");
    no.type = "button";
    no.className = "tilth-consent__btn";
    no.textContent = "Only necessary";
    no.addEventListener("click", function () { choose("denied"); });

    var link = document.createElement("a");
    link.className = "tilth-consent__link";
    link.href = "/cookie-policy/";
    link.textContent = "Cookie Policy";

    row.appendChild(yes);
    row.appendChild(no);
    row.appendChild(link);
    wrap.appendChild(h);
    wrap.appendChild(p);
    wrap.appendChild(row);
    document.body.appendChild(wrap);

    // Focus the panel heading so keyboard and screen-reader users land on it,
    // without stealing focus away from a form the visitor is already using.
    try { yes.focus({ preventScroll: true }); } catch (e) { try { yes.focus(); } catch (e2) {} }
    return wrap;
  }

  function open(trigger) {
    if (document.getElementById(PANEL_ID)) return;
    lastFocus = trigger || document.activeElement;
    build();
  }

  // reopening from the footer control
  window.tilthOpenConsent = function (trigger) { open(trigger); };

  function wireFooter() {
    var btns = document.querySelectorAll("[data-tilth-consent-open]");
    for (var i = 0; i < btns.length; i++) {
      btns[i].addEventListener("click", function (e) {
        e.preventDefault();
        open(e.currentTarget);
      });
    }
  }

  function init() {
    wireFooter();
    var c = read();
    window.__tilthAnalyticsConsent = c;
    // Only an unset preference opens the panel on its own; a saved choice is
    // respected and the panel never reappears automatically.
    if (c === "unset") open(null);
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();

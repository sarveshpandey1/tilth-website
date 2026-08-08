/* Tilth — GA4 conversion event layer (workbook T-016).
 *
 * Events: cta_click · service_click · industry_click · content_click · faq_open · generate_lead
 *
 * Rules this file enforces:
 *  - snake_case names and parameters throughout.
 *  - NO PII. Only page/section/destination metadata and the visible label of the thing
 *    clicked. Never form field values, email addresses, phone numbers or query strings.
 *  - No duplication of GA4 Enhanced Measurement. Enhanced Measurement already collects
 *    page_view, scroll, click (outbound), file_download, video and site search, so this
 *    file deliberately does not emit any of those. Outbound and mailto/tel links are
 *    skipped for exactly that reason.
 *  - generate_lead fires only after a successful contact-form submission, never on click
 *    of a submit button.
 *
 * Shared parameters on every event: page_market, page_type, section_id, destination_path.
 */
(function () {
  "use strict";

  function send(name, params) {
    var payload = Object.assign({}, base(), params || {});
    Object.keys(payload).forEach(function (k) {
      if (payload[k] === undefined || payload[k] === null || payload[k] === "") delete payload[k];
    });
    if (typeof window.gtag === "function") window.gtag("event", name, payload);
    else (window.dataLayer = window.dataLayer || []).push(Object.assign({ event: name }, payload));
  }

  // ---- page context -------------------------------------------------------
  var path = location.pathname;

  function market() {
    if (path.indexOf("/india/") === 0) return "india";
    if (path.indexOf("/us/") === 0) return "us";
    return "global";
  }

  function pageType() {
    if (path === "/") return "home";
    if (path === "/india/" || path === "/us/") return "region_hub";
    if (/^\/(india|us)\/services\//.test(path)) return "regional_service";
    if (/^\/(india|us)\/industries\//.test(path)) return "regional_industry";
    if (/^\/services\/.+/.test(path)) return "service";
    if (/^\/industries\/.+/.test(path)) return "industry";
    if (/^\/insights\/.+/.test(path)) return "insight";
    if (path === "/insights/") return "insights_index";
    if (path === "/services/") return "services_index";
    if (path === "/industries/") return "industries_index";
    if (path === "/contact/") return "contact";
    if (path === "/thank-you/") return "thank_you";
    if (path === "/work/") return "work";
    if (path === "/approach/") return "approach";
    if (path === "/about/") return "about";
    return "other";
  }

  var BASE = { page_market: market(), page_type: pageType() };
  function base() { return BASE; }

  // nearest section id, so every event says where on the page it happened
  function sectionOf(el) {
    var s = el.closest("section[id], section[aria-labelledby], footer, header");
    if (!s) return "unknown";
    if (s.id) return s.id;
    if (s.tagName === "FOOTER") return "site_footer";
    if (s.tagName === "HEADER") return "site_header";
    return "unknown";
  }

  var clean = function (t) { return (t || "").replace(/\s+/g, " ").replace(/→/g, "").trim().slice(0, 100); };

  // Card links wrap a heading, a description and an "Explore" affordance, so the raw
  // textContent would send all three as the name. Prefer the card's heading when present.
  function labelOf(a) {
    var h = a.querySelector(".gcard__name, .icard__title, h1, h2, h3, h4");
    return clean(h ? h.textContent : a.textContent);
  }

  // ---- click routing ------------------------------------------------------
  document.addEventListener("click", function (e) {
    var a = e.target.closest("a[href]");
    if (!a) return;

    var href = a.getAttribute("href") || "";
    // Enhanced Measurement already covers outbound clicks and downloads; mailto/tel are
    // contact intents handled by the browser, and anchors are not navigations.
    if (!href || href.charAt(0) === "#") return;
    if (/^(mailto:|tel:)/i.test(href)) return;
    if (/^https?:\/\//i.test(href) && href.indexOf(location.origin) !== 0) return;

    var dest = href.split("#")[0].split("?")[0];   // never send query strings
    var section = sectionOf(a);
    var label = labelOf(a);
    var shared = { section_id: section, destination_path: dest };

    // service / industry links, regional or global
    if (/^\/(india\/|us\/)?services\/.+/.test(dest)) {
      return send("service_click", Object.assign(shared, { service_name: label }));
    }
    if (/^\/(india\/|us\/)?industries\/.+/.test(dest)) {
      return send("industry_click", Object.assign(shared, { industry_name: label }));
    }
    // insight article cards
    if (/^\/insights\/.+/.test(dest)) {
      return send("content_click", Object.assign(shared, { content_type: "insight", content_name: label }));
    }
    // conversion CTAs — buttons and the contact route
    if (a.classList.contains("btn") || a.classList.contains("mh-cta") ||
        a.classList.contains("sticky-cta") || a.classList.contains("mh-menu-cta") ||
        dest === "/contact/") {
      return send("cta_click", Object.assign(shared, { cta_name: label }));
    }
  }, true);

  // ---- FAQ opens ----------------------------------------------------------
  // <details> toggle fires for both open and close; only the open is meaningful.
  document.addEventListener("toggle", function (e) {
    var d = e.target;
    if (!d || d.tagName !== "DETAILS" || !d.open) return;
    if (!d.classList.contains("faq__item")) return;
    var list = Array.prototype.slice.call(document.querySelectorAll(".faq__item"));
    var q = d.querySelector("summary h3, summary span");
    send("faq_open", {
      section_id: sectionOf(d),
      faq_id: "faq_" + (list.indexOf(d) + 1),
      faq_question: clean(q && q.textContent)
    });
  }, true);

  // ---- generate_lead ------------------------------------------------------
  // Fires only on a successful submission, never on submit-button click. The contact form
  // posts to FormSubmit and redirects to a thank-you route, so a successful load of that
  // route is the success signal. No field values are read.
  (function () {
    var form = document.querySelector("form.contact-form, form[data-lead-form]");
    if (form) {
      form.addEventListener("submit", function () {
        try { sessionStorage.setItem("tilth_lead_pending", form.getAttribute("name") || "contact_form"); } catch (err) {}
      });
    }
    var success = /thank|success/i.test(path) || /[?&](success|thanks)=/.test(location.search);
    if (!success) return;
    var pending;
    try { pending = sessionStorage.getItem("tilth_lead_pending"); } catch (err) {}
    if (!pending) return;
    try { sessionStorage.removeItem("tilth_lead_pending"); } catch (err) {}
    send("generate_lead", {
      section_id: "contact_form",
      destination_path: path,
      form_name: pending,
      form_location: "contact_page"
    });
  })();
})();

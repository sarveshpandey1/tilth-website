/* Brand v3 interactions — homepage (/) and services index (/services/).
 *
 * Ported from the approved prototypes. The prototypes ran on a component runtime
 * that re-rendered on state change and wrote every breakpoint as an inline style;
 * here the markup is server-rendered and the breakpoints live in brand-v3.css, so
 * this file only does what genuinely needs JS: state, scroll response and motion.
 *
 * Everything is progressive — with JS off the page is fully readable, all content
 * is present, and every link works. Nothing below is required to reach a service.
 */
(function () {
  "use strict";

  var root = document.querySelector(".v3");
  if (!root) return;

  var rm = false;
  try { rm = matchMedia("(prefers-reduced-motion: reduce)").matches; } catch (e) {}

  // marks that JS is live so the CSS can hide reveal targets; without this class
  // the reveal elements never start hidden and a JS failure can't blank the page
  document.documentElement.classList.add("v3-js");

  var $ = function (s, c) { return (c || document).querySelector(s); };
  var $$ = function (s, c) { return [].slice.call((c || document).querySelectorAll(s)); };

  /* --- theme ------------------------------------------------------------- */
  // The no-flash script in <head> has already applied data-theme before paint.
  var themeBtn = $("[data-v3-theme]");
  if (themeBtn) {
    themeBtn.addEventListener("click", function () {
      var next = document.documentElement.getAttribute("data-theme") === "light" ? "dark" : "light";
      // Suppress transitions across the swap. A transition reading a var() that
      // changes can latch on the old value, which left headings invisible after
      // dark -> light. Removed on the next frame so interaction motion is intact.
      document.documentElement.classList.add("v3-theming");
      if (next === "light") document.documentElement.setAttribute("data-theme", "light");
      else document.documentElement.removeAttribute("data-theme");
      // rAF is throttled in a background or non-compositing tab, and if it never
      // fires the class would leave transitions off for good — so a timer backs
      // it up. Removing an absent class is a no-op, so running both is safe.
      var clearTheming = function () { document.documentElement.classList.remove("v3-theming"); };
      requestAnimationFrame(function () { requestAnimationFrame(clearTheming); });
      setTimeout(clearTheming, 120);
      try { localStorage.setItem("tilth-theme", next); } catch (e) {}
      themeBtn.setAttribute("aria-pressed", next === "light" ? "true" : "false");
      swapLogos();
      paintHead(true);
    });
  }

  function swapLogos() {
    var light = document.documentElement.getAttribute("data-theme") === "light";
    // in the scrolled (moss) header the logo must always be the carbon version
    var scrolled = head && head.classList.contains("is-on");
    $$("[data-v3-logo]").forEach(function (el) {
      el.setAttribute("src", (light || scrolled) ? "/assets/brand/logo-carbon.png" : "/assets/brand/logo-bone.png");
    });
    $$("[data-v3-logo-big]").forEach(function (el) {
      el.setAttribute("src", light ? "/assets/brand/logo-carbon.png" : "/assets/brand/logo-bone.png");
    });
  }

  /* --- menu -------------------------------------------------------------- */
  var menu = $("[data-v3-menu]");
  var lastFocus = null;
  function setMenu(open) {
    if (!menu) return;
    menu.hidden = !open;
    document.body.style.overflow = open ? "hidden" : "";
    $$("[data-v3-menu-open]").forEach(function (b) { b.setAttribute("aria-expanded", open ? "true" : "false"); });
    if (open) { lastFocus = document.activeElement; var c = $("[data-v3-menu-close]", menu); if (c) c.focus(); }
    else if (lastFocus) { lastFocus.focus(); }
  }
  $$("[data-v3-menu-open]").forEach(function (b) { b.addEventListener("click", function () { setMenu(true); }); });
  $$("[data-v3-menu-close]").forEach(function (b) { b.addEventListener("click", function () { setMenu(false); }); });
  if (menu) {
    $$("a", menu).forEach(function (a) { a.addEventListener("click", function () { setMenu(false); }); });
    document.addEventListener("keydown", function (e) { if (e.key === "Escape" && !menu.hidden) setMenu(false); });
  }

  /* --- header scroll state ----------------------------------------------- */
  var head = $("[data-v3-head]");
  var headOn = null;
  function paintHead(force) {
    if (!head) return;
    var on = scrollY > 40;
    if (on === headOn && !force) return;
    headOn = on;
    head.classList.toggle("is-on", on);
    swapLogos();
  }

  /* --- depth readout ------------------------------------------------------ */
  var depthEl = $("[data-v3-depth]");
  var depthSections = $$("[data-depth-label]");
  function paintDepth() {
    if (!depthEl || !depthSections.length) return;
    var vh = innerHeight, label = depthSections[0].getAttribute("data-depth-label");
    depthSections.forEach(function (s) {
      if (s.getBoundingClientRect().top <= vh * 0.4) label = s.getAttribute("data-depth-label");
    });
    if (depthEl.textContent !== label) depthEl.textContent = label;
  }

  /* --- reveals ------------------------------------------------------------
   * CLAUDE.md §9: must fail safe. show() is idempotent (setting data-shown twice
   * is a no-op and can never re-hide), and repairAtRest re-checks on mount, on a
   * delay, and on scroll — a page sitting still fires no scroll events, so an
   * element that missed its observer callback would otherwise stay invisible.
   */
  var revealEls = $$(".v3-reveal");
  function show(el) { el.setAttribute("data-shown", "1"); }
  function repairAtRest() {
    revealEls.forEach(function (el) {
      if (el.hasAttribute("data-shown")) return;
      var r = el.getBoundingClientRect();
      // on screen, or already scrolled past — either way it must be visible
      if (r.top < innerHeight && r.bottom > -1) show(el);
      else if (r.bottom <= 0) show(el);
    });
  }
  (function () {
    if (!revealEls.length) return;
    if (rm || !("IntersectionObserver" in window)) {
      revealEls.forEach(show);
      return;
    }
    var io = new IntersectionObserver(function (ens) {
      ens.forEach(function (en) { if (en.isIntersecting) { show(en.target); io.unobserve(en.target); } });
    }, { threshold: .15, rootMargin: "0px 0px -8% 0px" });
    revealEls.forEach(function (el) {
      var r = el.getBoundingClientRect();
      if (r.top < innerHeight) show(el); else io.observe(el);
    });
    // repair passes: immediately after mount, and again once fonts/images settle
    requestAnimationFrame(repairAtRest);
    setTimeout(repairAtRest, 400);
    setTimeout(repairAtRest, 1500);
    if (document.fonts && document.fonts.ready) document.fonts.ready.then(repairAtRest);
  })();

  /* --- hero strata parallax (homepage) ------------------------------------ */
  var strata = $("[data-v3-strata]");
  var STRATA_OFF = [-118, 74, -52, 96, -34];
  function paintStrata() {
    if (!strata) return;
    var vh = innerHeight;
    var q = rm ? 1 : Math.max(0, Math.min(1, scrollY / (vh * 0.62 || 1)));
    var e = 1 - Math.pow(1 - q, 3);
    $$("[data-v3-stratum]", strata).forEach(function (row) {
      var i = +row.getAttribute("data-v3-stratum");
      row.style.transform = "translate3d(" + (STRATA_OFF[i] * (1 - e)).toFixed(1) + "px," + ((i - 2) * 22 * (1 - e)).toFixed(1) + "px,0)";
      row.style.opacity = String(0.22 + 0.78 * e);
      var bar = $(".v3-stratum__bar", row);
      if (bar) bar.style.transform = "scaleX(" + (0.78 + 0.22 * e).toFixed(3) + ")";
    });
    strata.style.transform = "translateY(" + (-e * 8).toFixed(1) + "px)";
    var locked = e > 0.86;
    var deepBar = $("[data-v3-deep-bar]", strata), deepLabel = $("[data-v3-deep-label]", strata);
    if (deepBar) deepBar.classList.toggle("is-locked", locked);
    if (deepLabel) deepLabel.classList.toggle("is-locked", locked);
  }

  /* --- h1 drift + settling bands (homepage) ------------------------------- */
  var h1 = $("[data-v3-h1]");
  var bandStack = $("[data-v3-bands]");
  function paintParallax() {
    var vh = innerHeight;
    if (h1 && !rm) {
      var p = Math.max(0, Math.min(1, scrollY / (vh || 1)));
      h1.style.transform = "translateY(" + (p * -34) + "px)";
      h1.style.opacity = String(1 - p * 0.45);
    }
    if (bandStack && !rm) {
      var r = bandStack.getBoundingClientRect();
      var q = Math.max(0, Math.min(1, (vh * 0.85 - r.top) / (vh * 0.8)));
      $$("[data-v3-band]", bandStack).forEach(function (b) {
        var i = +b.getAttribute("data-v3-band");
        b.style.transform = "translateY(" + ((3 - i) * 12 * q) + "px)";
        b.style.opacity = String(0.5 + 0.5 * q);
      });
    }
  }

  /* --- hero depth diagram (services) -------------------------------------- */
  var diag = $("[data-v3-herodiag]");
  function paintDiag() {
    if (!diag) return;
    var vh = innerHeight;
    var q = rm ? 1 : Math.max(0, Math.min(1, (vh * 0.9 - diag.getBoundingClientRect().top) / (vh * 0.7)));
    var e = 1 - Math.pow(1 - q, 3);
    $$("[data-v3-hd]", diag).forEach(function (row) {
      var i = +row.getAttribute("data-v3-hd");
      var bar = $(".v3-hd__bar", row);
      if (!bar) return;
      bar.style.transform = "scaleX(" + (0.5 + 0.5 * e * (1 - i * 0.06)).toFixed(3) + ")";
      bar.style.background = (i === 4 && e > 0.8) ? "var(--mosstext)" : "var(--line2)";
    });
  }

  /* --- brand rail (homepage) ---------------------------------------------- */
  (function () {
    var box = $("[data-v3-brandrail]"), track = $("[data-v3-brandtrack]");
    if (!box || !track) return;
    var items = $$("[data-v3-brand]", track);
    var x = 0, half = 0, paused = false, dragging = false, sx = 0, sxStart = 0, raf = 0;
    function measure() { half = track.scrollWidth / 2; }
    measure();
    addEventListener("resize", measure, { passive: true });

    function focus() {
      var c = box.getBoundingClientRect().left + box.clientWidth / 2;
      items.forEach(function (el) {
        var r = el.getBoundingClientRect();
        var d = Math.abs((r.left + r.width / 2) - c) / (box.clientWidth / 2 || 1);
        var t = Math.max(0, 1 - Math.min(1, d) * 1.25);
        el.style.opacity = String(0.58 + 0.42 * t);
        el.style.transform = "scale(" + (1 + 0.06 * t) + ")";
        el.style.color = t > 0.72 ? "var(--mosstext)" : "var(--stone)";
      });
    }
    function step() {
      if (!paused && !dragging && !rm) {
        x -= 0.42;
        if (half && x <= -half) x += half;
        track.style.transform = "translateX(" + x + "px)";
      }
      focus();
      raf = requestAnimationFrame(step);
    }
    if (rm) focus(); else raf = requestAnimationFrame(step);

    box.addEventListener("pointerenter", function () { paused = true; });
    box.addEventListener("pointerleave", function () { paused = false; });
    box.addEventListener("pointerdown", function (e) { dragging = true; sx = e.clientX; sxStart = x; box.style.cursor = "grabbing"; });
    box.addEventListener("pointermove", function (e) {
      if (!dragging) return;
      x = sxStart + (e.clientX - sx);
      if (half) { if (x <= -half) x += half; if (x > 0) x -= half; }
      track.style.transform = "translateX(" + x + "px)";
    });
    function up() { dragging = false; box.style.cursor = "grab"; }
    box.addEventListener("pointerup", up);
    box.addEventListener("pointercancel", up);
  })();

  /* --- industries rail stagger (homepage) --------------------------------- */
  (function () {
    var cells = $$("[data-v3-ind]");
    if (!cells.length || rm || !("IntersectionObserver" in window)) return;
    cells.forEach(function (el, i) {
      el.style.opacity = "0";
      el.style.transform = "translateY(12px)";
      el.style.transitionDelay = (i * 70) + "ms";
    });
    var host = cells[0].parentElement;
    if (!host) return;
    var io = new IntersectionObserver(function (ens) {
      ens.forEach(function (en) {
        if (!en.isIntersecting) return;
        cells.forEach(function (el) { el.style.opacity = "1"; el.style.transform = "none"; });
        io.disconnect();
      });
    }, { threshold: .3 });
    io.observe(host);
  })();

  /* --- homepage diagnostic ------------------------------------------------ */
  (function () {
    var syms = $$("[data-v3-sym]");
    if (!syms.length) return;
    var data = {};
    try { data = JSON.parse(($("[data-v3-symdata]") || {}).textContent || "{}"); } catch (e) { return; }
    var layer = $("[data-v3-dx-layer]"), cause = $("[data-v3-dx-cause]"),
        fix = $("[data-v3-dx-fix]"), depth = $("[data-v3-dx-depth]"), bar = $("[data-v3-dx-bar]");
    function pick(id) {
      var d = data[id];
      if (!d) return;
      syms.forEach(function (b) { b.setAttribute("aria-pressed", b.getAttribute("data-v3-sym") === id ? "true" : "false"); });
      if (layer) layer.textContent = d.layer;
      if (cause) cause.textContent = d.cause;
      if (fix) fix.textContent = d.fix;
      if (depth) depth.textContent = d.depth;
      if (bar) bar.style.width = d.pct + "%";
    }
    syms.forEach(function (b) { b.addEventListener("click", function () { pick(b.getAttribute("data-v3-sym")); }); });
    // the contact form's constraint chips mirror the same state
    var fsyms = $$("[data-v3-fsym]");
    fsyms.forEach(function (b) {
      b.addEventListener("click", function () {
        var id = b.getAttribute("data-v3-fsym");
        fsyms.forEach(function (o) { o.setAttribute("aria-pressed", o === b ? "true" : "false"); });
        var hidden = $("[data-v3-constraint]");
        if (hidden) hidden.value = (data[id] && data[id].label) || id;
      });
    });
  })();

  /* --- evidence filter ----------------------------------------------------
   * CLAUDE.md §2C: ALL is the overview grid; a selected category is a full-width
   * spotlight. Both states are designed rather than the grid simply thinning out.
   */
  (function () {
    var filts = $$("[data-v3-filt]");
    var grid = $("[data-v3-evgrid]");
    var spot = $("[data-v3-spot]");
    if (!filts.length || !grid || !spot) return;
    var data = {};
    try { data = JSON.parse(($("[data-v3-casedata]") || {}).textContent || "{}"); } catch (e) { return; }

    function fill(c) {
      var set = function (attr, val) { var el = $("[data-v3-spot-" + attr + "]", spot); if (el) el.textContent = val; };
      set("tag", c.tag); set("dur", c.dur); set("title", c.title); set("body", c.body);
      set("m1", c.m1); set("l1", c.l1); set("m2", c.m2); set("l2", c.l2);
    }

    function enter(el) {
      if (rm) return;
      el.style.transition = "none"; el.style.opacity = "0"; el.style.transform = "translateY(10px)";
      requestAnimationFrame(function () {
        el.style.transition = "opacity 320ms cubic-bezier(.2,.7,.2,1), transform 320ms cubic-bezier(.2,.7,.2,1)";
        el.style.opacity = "1"; el.style.transform = "none";
      });
    }

    filts.forEach(function (b) {
      b.addEventListener("click", function () {
        var id = b.getAttribute("data-v3-filt");
        filts.forEach(function (o) { o.setAttribute("aria-pressed", o === b ? "true" : "false"); });
        if (id === "all" || !data[id]) {
          spot.hidden = true;
          grid.hidden = false;
          enter(grid);
        } else {
          fill(data[id]);
          grid.hidden = true;
          spot.hidden = false;
          enter(spot);
        }
      });
    });
  })();

  /* --- unit-economics calculator ------------------------------------------ */
  (function () {
    var box = $("[data-v3-calc]");
    if (!box) return;
    var inputs = { spend: $("[data-v3-calc-in='spend']", box), cust: $("[data-v3-calc-in='cust']", box), ltv: $("[data-v3-calc-in='ltv']", box) };
    if (!inputs.spend || !inputs.cust || !inputs.ltv) return;
    var outs = {
      spend: $("[data-v3-out='spend']", box), cust: $("[data-v3-out='cust']", box), ltv: $("[data-v3-out='ltv']", box),
      cac: $("[data-v3-out='cac']", box), ratio: $("[data-v3-out='ratio']", box), verdict: $("[data-v3-out='verdict']", box)
    };
    var inr = function (n) { return "₹" + Number(n).toLocaleString("en-IN"); };
    function run() {
      var spend = +inputs.spend.value, cust = +inputs.cust.value, ltv = +inputs.ltv.value;
      var cac = cust ? spend / cust : 0;
      var ratio = cac ? ltv / cac : 0;
      if (outs.spend) outs.spend.textContent = inr(spend);
      if (outs.cust) outs.cust.textContent = String(cust);
      if (outs.ltv) outs.ltv.textContent = inr(ltv);
      if (outs.cac) outs.cac.textContent = inr(Math.round(cac));
      if (outs.ratio) outs.ratio.textContent = ratio.toFixed(1) + "×";
      if (outs.verdict) {
        outs.verdict.textContent =
          ratio >= 3 ? "Healthy. There's room to scale — if tracking can prove it." :
          ratio >= 2 ? "Workable, but thin. The foundation decides whether this scales." :
                       "Under water. More budget makes the leak more expensive.";
      }
    }
    Object.keys(inputs).forEach(function (k) { inputs[k].addEventListener("input", run); });
    run();
  })();

  /* --- services: active service + depth map -------------------------------- */
  var svcRows = $$("[data-v3-svc]");
  (function () {
    if (!svcRows.length) return;
    var map = {};
    try { map = JSON.parse(($("[data-v3-svcdata]") || {}).textContent || "{}"); } catch (e) {}
    var layers = $$("[data-v3-layer]");
    var nameEl = $("[data-v3-active-name]"), nEl = $("[data-v3-active-n]"),
        depthEl2 = $("[data-v3-active-depth]"), connEl = $("[data-v3-active-conn]"), goEl = $("[data-v3-active-go]");
    var active = null;

    function paint(id) {
      var s = map[id];
      if (!s || id === active) return;
      active = id;
      var near = {};
      (s.connectLayers || []).forEach(function (l) { near[l] = true; });
      layers.forEach(function (el) {
        var lid = el.getAttribute("data-v3-layer");
        var on = (s.layers || []).indexOf(lid) > -1;
        el.classList.toggle("is-on", on);
        el.classList.toggle("is-near", !on && !!near[lid]);
      });
      svcRows.forEach(function (r) {
        var rid = r.getAttribute("data-v3-svc");
        r.classList.toggle("is-active", rid === id);
        r.classList.toggle("is-connected", (s.connects || []).indexOf(rid) > -1);
      });
      if (nEl) nEl.textContent = s.n;
      if (nameEl) nameEl.textContent = s.name;
      if (depthEl2) depthEl2.textContent = s.depthLabel;
      if (goEl) goEl.setAttribute("href", s.href);
      if (connEl) {
        connEl.textContent = "";
        (s.connectNames || []).forEach(function (n) {
          var sp = document.createElement("span");
          sp.textContent = n;
          connEl.appendChild(sp);
        });
      }
    }

    var hoverLock = 0;
    svcRows.forEach(function (r) {
      var pick = function () { hoverLock = Date.now(); paint(r.getAttribute("data-v3-svc")); };
      r.addEventListener("mouseenter", pick);
      r.addEventListener("focus", pick);
    });

    // Below 1180 the map is display:none, so the scroll sync is pointless work.
    window.__v3SvcScroll = function () {
      if (innerWidth < 1180 || Date.now() - hoverLock < 1200) return;
      var vh = innerHeight, best = null, bestD = Infinity;
      svcRows.forEach(function (r) {
        var b = r.getBoundingClientRect();
        if (b.bottom < 80 || b.top > vh) return;
        var d = Math.abs((b.top + b.height / 2) - vh * 0.45);
        if (d < bestD) { bestD = d; best = r.getAttribute("data-v3-svc"); }
      });
      if (best) paint(best);
    };
    paint(svcRows[0].getAttribute("data-v3-svc"));
  })();

  /* --- services: symptom tiles -> prescription ----------------------------- */
  (function () {
    var tiles = $$("[data-v3-tile]");
    if (!tiles.length) return;
    var data = {};
    try { data = JSON.parse(($("[data-v3-rxdata]") || {}).textContent || "{}"); } catch (e) { return; }
    var layerEl = $("[data-v3-rx-layer]"), depthEl3 = $("[data-v3-rx-depth]"), list = $("[data-v3-rx-list]");
    function pick(id, animate) {
      var d = data[id];
      if (!d || !list) return;
      tiles.forEach(function (t) { t.setAttribute("aria-pressed", t.getAttribute("data-v3-tile") === id ? "true" : "false"); });
      if (layerEl) layerEl.textContent = d.layer;
      if (depthEl3) depthEl3.textContent = d.depth;
      list.textContent = "";
      d.services.forEach(function (s, i) {
        var a = document.createElement("a");
        a.className = "v3-rxrow";
        a.href = s.href;
        a.innerHTML = '<span class="v3-rxrow__n"></span><div><div class="v3-rxrow__t"></div><p></p></div><span class="v3-rxrow__a" aria-hidden="true">→</span>';
        a.querySelector(".v3-rxrow__n").textContent = s.n;
        a.querySelector(".v3-rxrow__t").textContent = s.name;
        a.querySelector("p").textContent = s.desc;
        list.appendChild(a);
        if (animate && !rm) {
          a.style.opacity = "0"; a.style.transform = "translateY(8px)";
          requestAnimationFrame(function () {
            a.style.transition = "opacity 340ms cubic-bezier(.16,1,.3,1) " + (i * 80) + "ms, transform 420ms cubic-bezier(.16,1,.3,1) " + (i * 80) + "ms";
            a.style.opacity = "1"; a.style.transform = "none";
          });
        }
      });
    }
    tiles.forEach(function (t) { t.addEventListener("click", function () { pick(t.getAttribute("data-v3-tile"), true); }); });
  })();

  /* --- clocks -------------------------------------------------------------- */
  (function () {
    var cells = $$("[data-v3-clock]");
    if (!cells.length) return;
    function tick() {
      var now = new Date();
      cells.forEach(function (cell) {
        var tz = cell.getAttribute("data-v3-clock");
        var t = $(".v3-clock__t", cell), dot = $(".v3-clock__dot", cell);
        try {
          if (t) {
            var parts = new Intl.DateTimeFormat("en-US", { hour: "2-digit", minute: "2-digit", hour12: true, timeZone: tz }).formatToParts(now);
            var get = function (k) { var p = parts.find(function (x) { return x.type === k; }); return p ? p.value : ""; };
            var suffix = $(".v3-clock__suffix", t);
            if (suffix) {
              t.childNodes[0].nodeValue = get("hour").padStart(2, "0") + ":" + get("minute");
              suffix.textContent = get("dayPeriod").toUpperCase();
            }
          }
          var h = +new Intl.DateTimeFormat("en-GB", { hour: "2-digit", hour12: false, timeZone: tz }).format(now);
          if (dot) {
            var day = h >= 6 && h < 19;
            dot.classList.toggle("is-day", day);
            dot.classList.toggle("is-night", !day);
          }
        } catch (e) {}
      });
    }
    tick();
    setInterval(tick, 20000);
  })();

  /* --- interactive wordmark ------------------------------------------------ */
  (function () {
    var host = $("[data-v3-wordmark]"), veil = $("[data-v3-wm-veil]");
    if (!host || !veil) return;
    var coarse = false;
    try { coarse = matchMedia("(hover: none)").matches; } catch (e) {}
    var ok = window.CSS && CSS.supports &&
      (CSS.supports("mask-image", "url(/assets/brand/logo-bone.png)") || CSS.supports("-webkit-mask-image", "url(/assets/brand/logo-bone.png)"));
    if (coarse || !ok) { veil.style.display = "none"; return; }
    var inner = veil.firstElementChild;
    if (inner) {
      var light = document.documentElement.getAttribute("data-theme") === "light";
      var url = "url(" + (light ? "/assets/brand/logo-carbon.png" : "/assets/brand/logo-bone.png") + ")";
      inner.style.webkitMaskImage = url;
      inner.style.maskImage = url;
    }
    var raf = 0, tx = 0, ty = 0, cx = 0, cy = 0, activeWm = false;
    function paint() {
      var ease = rm ? 1 : 0.14;
      cx += (tx - cx) * ease; cy += (ty - cy) * ease;
      var r = Math.max(160, host.clientWidth * 0.22);
      var g = "radial-gradient(circle " + r + "px at " + cx.toFixed(1) + "px " + cy.toFixed(1) +
              "px, rgba(0,0,0,1) 0%, rgba(0,0,0,.85) 35%, rgba(0,0,0,.25) 68%, rgba(0,0,0,0) 100%)";
      veil.style.webkitMaskImage = g;
      veil.style.maskImage = g;
      if (activeWm || Math.abs(tx - cx) > 0.5 || Math.abs(ty - cy) > 0.5) raf = requestAnimationFrame(paint);
      else raf = 0;
    }
    host.addEventListener("pointerenter", function (e) {
      var b = host.getBoundingClientRect();
      cx = tx = e.clientX - b.left; cy = ty = e.clientY - b.top;
      activeWm = true; veil.style.opacity = "1";
      if (!raf) raf = requestAnimationFrame(paint);
    });
    host.addEventListener("pointermove", function (e) {
      var b = host.getBoundingClientRect();
      tx = e.clientX - b.left; ty = e.clientY - b.top;
      if (!raf) raf = requestAnimationFrame(paint);
    });
    host.addEventListener("pointerleave", function () { activeWm = false; veil.style.opacity = "0"; });
  })();

  /* --- one rAF-throttled scroll listener ----------------------------------- */
  var ticking = false;
  function onScroll() {
    if (ticking) return;
    ticking = true;
    requestAnimationFrame(function () {
      ticking = false;
      paintHead();
      paintDepth();
      paintStrata();
      paintParallax();
      paintDiag();
      repairAtRest();
      if (window.__v3SvcScroll) window.__v3SvcScroll();
    });
  }
  addEventListener("scroll", onScroll, { passive: true });
  addEventListener("resize", onScroll, { passive: true });

  paintHead(true);
  paintDepth();
  paintStrata();
  paintParallax();
  paintDiag();
})();

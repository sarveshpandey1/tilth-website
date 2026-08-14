// Shared shell + components for generated pages. Outputs plain static HTML for GitHub Pages.
import { site, nav, clients, caseStudies, services } from "./data.mjs";

export const esc = (s = "") => String(s)
  .replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");

const FONTS = 'https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,400;0,9..144,500;0,9..144,600;1,9..144,400;1,9..144,500&family=Work+Sans:wght@400;500;600&display=swap';

// Google tag. The gtag.js bundle is ~166KB and cost ~380ms of main-thread blocking on
// mobile when loaded eagerly, so it's fetched after load (or on first interaction,
// whichever comes first). The dataLayer stub is defined synchronously, so the 'js' and
// 'config' commands — and any gtag('event') calls from page code — queue immediately and
// are replayed by the library once it arrives. No hits are lost.
const gtag = `<!-- Google tag (gtag.js) — deferred loader, commands queue in dataLayer -->
<script>window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('js',new Date());gtag('config','${site.ga}');
(function(){var done=false;function load(){if(done)return;done=true;var s=document.createElement('script');s.async=true;s.src='https://www.googletagmanager.com/gtag/js?id=${site.ga}';document.head.appendChild(s);}
if(document.readyState==='complete'){setTimeout(load,0);}else{addEventListener('load',function(){setTimeout(load,0);});}
['pointerdown','keydown','touchstart'].forEach(function(e){addEventListener(e,load,{once:true,passive:true});});})();</script>`;

const noFlashTheme = `<script>(function(){try{var t=localStorage.getItem("tilth-theme");if(t==="light")document.documentElement.setAttribute("data-theme","light");}catch(e){}})();</script>`;

export function jsonld(objects) {
  const graph = objects.filter(Boolean);
  if (!graph.length) return "";
  const doc = graph.length === 1 ? { "@context": "https://schema.org", ...graph[0] } : { "@context": "https://schema.org", "@graph": graph };
  return `<script type="application/ld+json">\n${JSON.stringify(doc, null, 2)}\n</script>`;
}

// WebSite JSON-LD (workbook SEO sheet: name Tilth, alternateName We Are Tilth)
export function websiteSchema() {
  return {
    "@type": "WebSite", "@id": `${site.base}/#website`,
    name: site.brand, alternateName: "We Are Tilth", url: `${site.base}/`,
    publisher: { "@id": `${site.base}/#org` }
  };
}

export function orgSchema() {
  return {
    "@type": ["ProfessionalService", "MarketingAgency"], "@id": `${site.base}/#org`,
    name: site.brand, url: `${site.base}/`, email: site.email, telephone: `+${site.phoneHref.replace(/^\+?/, "")}`,
    description: "Global growth marketing agency, India-rooted, working with brands worldwide. Foundation-first: strategy, website, measurement, creative and acquisition strengthened before scaling growth.",
    slogan: site.tagline, logo: `${site.base}/favicon.svg`, image: `${site.base}/anuja.jpg`,
    address: { "@type": "PostalAddress", addressLocality: site.address.locality, addressRegion: site.address.region, addressCountry: site.address.country },
    areaServed: [{ "@type": "Country", name: "United States" }, { "@type": "Country", name: "India" }, "Worldwide"],
    sameAs: Object.values(site.social)
  };
}

export function breadcrumbs(items) {
  // items: [{name, path}]
  const schema = { "@type": "BreadcrumbList", itemListElement: items.map((it, i) => ({ "@type": "ListItem", position: i + 1, name: it.name, item: site.base + it.path })) };
  const visible = `<nav class="crumb" aria-label="Breadcrumb">${items.map((it, i) => i < items.length - 1 ? `<a href="${it.path}">${esc(it.name)}</a> <span aria-hidden="true">/</span> ` : `<span>${esc(it.name)}</span>`).join("")}</nav>`;
  return { schema, visible };
}

export function masthead(navItems = nav.primary, currentPath = "") {
  return `<header class="masthead">
  <div class="wrap">
    <a href="/" class="word">${site.wordmark}</a>
    <nav aria-label="Primary">
      ${navItems.map(n => `<a href="${n.href}"${n.href === currentPath ? ' aria-current="page"' : ""}>${esc(n.label)}</a>`).join("\n      ")}
    </nav>
    <div class="meta">${esc(site.positioning)}</div>
  </div>
</header>`;
}

// Text-only client trust markers (Brief §7/§29)
export function clientMarkers() {
  const approved = clients.filter(c => c.textDisplayApproved).sort((a, b) => a.displayOrder - b.displayOrder);
  if (!approved.length) return "";
  return `<div class="trust__markers">${approved.map(c => `<span class="trust__marker">${esc(c.name)}</span>`).join('<span class="trust__dot" aria-hidden="true">·</span>')}</div>`;
}

// Anonymous proof snapshots (Brief §8/§32)
export function caseStudySnapshots() {
  const pub = caseStudies.filter(c => c.publishApproved);
  return pub.map(c => `<article class="proof-card">
    <div class="proof-card__label">${esc(c.anonLabel)}</div>
    <ul class="proof-card__metrics">${c.metrics.map(m => `<li>${esc(m)}</li>`).join("")}</ul>
    <p class="proof-card__summary">${esc(c.summary)}</p>
  </article>`).join("\n");
}

export function ctaBlock({ eyebrow = "Start here", heading, body, primary, secondary, tone = "terra" } = {}) {
  return `<section class="cta-band cta-band--${tone}" id="cta">
  <div class="wrap">
    <span class="label">${esc(eyebrow)}</span>
    <h2>${heading}</h2>
    ${body ? `<p>${body}</p>` : ""}
    <div class="cta-band__actions">
      ${primary ? `<a class="btn" href="${primary.href}"><span>${esc(primary.label)}</span> <span class="arrow">→</span></a>` : ""}
      ${secondary ? `<a class="text-cta" href="${secondary.href}">${esc(secondary.label)} →</a>` : ""}
    </div>
  </div>
</section>`;
}

// ---------------------------------------------------------------------------
// Brand v3 shell (approved designs: "Tilth Brand v3.dc.html" / "Tilth Services.dc.html").
// Used only by pages that declare shell:"v3" — currently / and /services/. Every
// other generated page keeps the masthead()/footer() shell above, unchanged.
// Header, menu, clocks, wordmark and footer are shared by both v3 pages rather
// than duplicated per page.
// ---------------------------------------------------------------------------

const V3_NAV = [
  { label: "Services", href: "/services/" },
  { label: "Industries", href: "/industries/" },
  { label: "Work", href: "/work/" },
  { label: "Approach", href: "/approach/" },
  { label: "Insights", href: "/insights/" },
  { label: "About", href: "/about/" }
];

const V3_CLOCKS = [
  { tz: "Asia/Kolkata", city: "BENGALURU" },
  { tz: "Asia/Dubai", city: "DUBAI" },
  { tz: "Europe/London", city: "LONDON" },
  { tz: "America/New_York", city: "NEW YORK" }
];

export function v3Header(currentPath = "", ctaLabel = "Discuss your growth") {
  return `<header class="v3-headwrap">
  <div class="v3-head" data-v3-head>
    <a href="/" class="v3-brandlink" aria-label="Tilth — home">
      <img class="v3-logo" data-v3-logo src="/assets/brand/logo-bone.png" alt="Tilth" width="72" height="21">
    </a>
    <nav class="v3-navlinks" aria-label="Primary">
      ${V3_NAV.map(n => `<a class="v3-navitem" href="${n.href}"${n.href === currentPath ? ' aria-current="page"' : ""}>${esc(n.label)}</a>`).join("\n      ")}
    </nav>
    <div class="v3-headright">
      <span class="v3-depth" data-v3-depth aria-hidden="true">${currentPath === "/" ? "00.0m" : "SURFACE"}</span>
      <button class="v3-themebtn" data-v3-theme type="button" aria-pressed="false" aria-label="Switch between dark and light theme">
        <span class="v3-theme-dot" aria-hidden="true"></span>
      </button>
      <a class="v3-navcta" href="/contact/">${esc(ctaLabel)}</a>
      <button class="v3-burger" data-v3-menu-open type="button" aria-expanded="false" aria-controls="v3-menu">MENU</button>
    </div>
  </div>
</header>

<div class="v3-menu" id="v3-menu" data-v3-menu hidden>
  <div class="v3-menu__top">
    <img class="v3-logo" data-v3-logo src="/assets/brand/logo-bone.png" alt="Tilth" width="72" height="21">
    <button class="v3-menu__close" data-v3-menu-close type="button">CLOSE</button>
  </div>
  <div class="v3-menu__grid">
    <nav class="v3-menu__links" aria-label="Menu">
      ${V3_NAV.map(n => `<a href="${n.href}">${esc(n.label)}</a>`).join("\n      ")}
      <a href="/contact/">Contact</a>
    </nav>
    <div class="v3-menu__col">
      <h2>SERVICES</h2>
      ${services.map(s => `<a href="/services/${s.slug}/">${esc(s.name)}</a>`).join("\n      ")}
    </div>
    <div class="v3-menu__col">
      <h2>CONTACT</h2>
      <a class="is-plain" href="mailto:${esc(site.email)}">${esc(site.email)}</a>
      <a class="is-plain" href="tel:${site.phoneHref}">${esc(site.phone)}</a>
    </div>
  </div>
  <a class="v3-menu__cta" href="/contact/">${esc(ctaLabel)} <span aria-hidden="true">→</span></a>
</div>`;
}

export function v3Footer({ rule = false } = {}) {
  const s = site.social;
  return `<footer class="v3-foot${rule ? " v3-foot--rule" : ""}">
  <h2 class="v3-foot__k">WORKING ACROSS TIME ZONES</h2>
  <div class="v3-clocks">
    ${V3_CLOCKS.map(c => `<div class="v3-clock" data-v3-clock="${c.tz}">
      <span class="v3-clock__city"><span class="v3-clock__dot" aria-hidden="true"></span>${c.city}</span>
      <span class="v3-clock__t">—<span class="v3-clock__suffix"></span></span>
    </div>`).join("\n    ")}
  </div>
  <div class="v3-footgrid">
    <div class="v3-footcol"><h2>EXPLORE</h2><a href="/services/">Services</a><a href="/approach/">Approach</a><a href="/insights/">Insights</a><a href="/tools/">Tools</a></div>
    <div class="v3-footcol"><h2>COMPANY</h2><a href="/about/">About</a><a href="/contact/">Contact</a><a href="/work/">Work</a><a href="/privacy/">Privacy</a></div>
    <div class="v3-footcol"><h2>ELSEWHERE</h2><a href="${s.linkedin}" target="_blank" rel="noopener">LinkedIn</a><a href="${s.instagram}" target="_blank" rel="noopener">Instagram</a><a href="${s.x}" target="_blank" rel="noopener">X / Twitter</a></div>
    <div class="v3-footcol"><h2>WHERE</h2><span>Bengaluru, India</span><span>Working across markets</span></div>
  </div>
  <div class="v3-wordmarkwrap">
    <div class="v3-wordmark" data-v3-wordmark>
      <img data-v3-logo-big src="/assets/brand/logo-bone.png" alt="" width="600" height="150">
      <div class="v3-wm-veil" data-v3-wm-veil aria-hidden="true"><span></span></div>
    </div>
  </div>
  <div class="v3-footbottom"><span>© 2026 TILTH</span><span>DEPTH BEFORE GROWTH</span></div>
</footer>`;
}

export function footer() {
  const s = site.social;
  return `<footer>
  <div class="wrap">
    <div class="footer-grid">
      <div>
        <div class="word">${esc(site.tagline)}</div>
        <p class="addr">Tilth is an India-rooted growth marketing agency working with ambitious brands across India and the US.<br><br>Bengaluru, India · Remote collaboration across India and the US<br><a href="tel:${site.phoneHref}">${esc(site.phone)}</a><br><a href="mailto:${esc(site.email)}">${esc(site.email)}</a></p>
      </div>
      <div>
        <h3 class="fcol">Explore</h3>
        <ul><li><a href="/services/">Services</a></li><li><a href="/approach/">Approach</a></li><li><a href="/insights/">Insights</a></li><li><a href="/tools/">Tools</a></li><li><a href="/about/">About</a></li><li><a href="/contact/">Contact</a></li></ul>
      </div>
      <div>
        <h3 class="fcol">Legal</h3>
        <ul><li><a href="/privacy/">Privacy Policy</a></li><li><a href="/terms/">Terms of Service</a></li><li><a href="/cookie-policy/">Cookie Policy</a></li></ul>
      </div>
      <div>
        <h3 class="fcol">Social</h3>
        <ul><li><a href="${s.linkedin}" target="_blank" rel="noopener">LinkedIn</a></li><li><a href="${s.instagram}" target="_blank" rel="noopener">Instagram</a></li><li><a href="${s.x}" target="_blank" rel="noopener">X / Twitter</a></li><li><a href="${s.facebook}" target="_blank" rel="noopener">Facebook</a></li></ul>
      </div>
    </div>
    <div class="footer-bottom"><span>© 2026 Tilth. All rights reserved.</span></div>
  </div>
</footer>`;
}

// Full HTML document
export function renderPage(p) {
  const canonical = site.base + p.path;
  const ogTitle = p.ogTitle || p.title;
  const ogDesc = p.ogDescription || p.description;
  const schemas = jsonld(p.schema || []);
  const v3 = p.shell === "v3";
  // Brand v3 replaces the type ramp entirely, so its pages preload Syne/Chivo
  // instead of Fraunces/Work Sans — preloading fonts a page never uses would
  // cost the same LCP budget the existing preloads were added to protect.
  const preloads = v3
    ? `<link rel="preload" as="font" type="font/woff2" href="/assets/fonts/syne-variable.woff2" crossorigin>
<link rel="preload" as="font" type="font/woff2" href="/assets/fonts/chivo-variable.woff2" crossorigin>`
    : `<link rel="preload" as="font" type="font/woff2" href="/assets/fonts/work-sans-400-normal.woff2" crossorigin>
<link rel="preload" as="font" type="font/woff2" href="/assets/fonts/fraunces-400-normal.woff2" crossorigin>
<!-- The hero H1's <em> is Fraunces italic and is part of the LCP element. Without this
     preload it was discovered only after CSS parsed and took ~9s on throttled mobile. -->
<link rel="preload" as="font" type="font/woff2" href="/assets/fonts/fraunces-400-italic.woff2" crossorigin>`;
  const styles = v3
    ? `<link rel="stylesheet" href="/assets/fonts/fonts.css">
<link rel="stylesheet" href="/assets/brand-v3.css">`
    : `<link rel="stylesheet" href="/assets/fonts/fonts.css">
<link rel="stylesheet" href="/styles.css">
<link rel="stylesheet" href="/assets/generated.css">`;
  return `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
${noFlashTheme}
${gtag}
<title>${esc(p.title)}</title>
<meta name="description" content="${esc(p.description)}">
<link rel="canonical" href="${canonical}">
${(p.hreflang || []).map(h => `<link rel="alternate" hreflang="${h.lang}" href="${h.href}">`).join("\n")}
<meta name="robots" content="${p.robots || "index, follow"}">
<meta property="og:site_name" content="Tilth">
<meta name="twitter:site" content="@Anuja_tilth">
<meta name="theme-color" content="${v3 ? "#101310" : "#15110B"}">
<link rel="icon" href="/favicon.ico" sizes="32x32">
<link rel="icon" href="/favicon.svg" type="image/svg+xml">
<link rel="apple-touch-icon" href="/apple-touch-icon.png">
<link rel="manifest" href="/site.webmanifest">
<meta property="og:type" content="${p.ogType || "website"}">
<meta property="og:title" content="${esc(ogTitle)}">
<meta property="og:description" content="${esc(ogDesc)}">
<meta property="og:url" content="${canonical}">
<meta property="og:image" content="${site.base}/og-image.png">
<meta property="og:locale" content="en_US">
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:title" content="${esc(ogTitle)}">
<meta name="twitter:description" content="${esc(ogDesc)}">
<meta name="twitter:image" content="${site.base}/og-image.png">
${preloads}
${styles}
${p.headExtra || ""}
${schemas}
</head>
<body${v3 ? ` class="v3 ${esc(p.shellClass || "")}"` : ""}>
${v3 ? v3Header(p.path, p.navCta) : masthead(p.navItems, p.path)}
<main id="main">
${p.main}
</main>
${v3 ? v3Footer({ rule: p.footRule }) : footer()}
${v3 ? '<script src="/brand-v3.js" defer></script>' : '<script src="/nav.js" defer></script>'}
<script src="/analytics.js" defer></script>
</body>
</html>
`;
}

// Shared shell + components for generated pages. Outputs plain static HTML for GitHub Pages.
import { site, nav, clients, caseStudies } from "./data.mjs";

export const esc = (s = "") => String(s)
  .replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");

const FONTS = 'https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,400;0,9..144,500;0,9..144,600;1,9..144,400;1,9..144,500&family=Work+Sans:wght@400;500;600&display=swap';

const gtag = `<!-- Google tag (gtag.js) -->
<script async src="https://www.googletagmanager.com/gtag/js?id=${site.ga}"></script>
<script>window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('js',new Date());gtag('config','${site.ga}');</script>`;

const noFlashTheme = `<script>(function(){try{var t=localStorage.getItem("tilth-theme");if(t==="light")document.documentElement.setAttribute("data-theme","light");}catch(e){}})();</script>`;

export function jsonld(objects) {
  const graph = objects.filter(Boolean);
  if (!graph.length) return "";
  const doc = graph.length === 1 ? { "@context": "https://schema.org", ...graph[0] } : { "@context": "https://schema.org", "@graph": graph };
  return `<script type="application/ld+json">\n${JSON.stringify(doc, null, 2)}\n</script>`;
}

export function orgSchema() {
  return {
    "@type": ["ProfessionalService", "MarketingAgency"], "@id": `${site.base}/#org`,
    name: site.brand, url: `${site.base}/`, email: site.email, telephone: `+${site.phoneHref.replace(/^\+?/, "")}`,
    description: "Global growth marketing agency, India-based, working with brands in the US and India. Foundation-first: strategy, website, measurement, creative and acquisition strengthened before scaling growth.",
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

export function masthead(navItems = nav.primary) {
  return `<header class="masthead">
  <div class="wrap">
    <a href="/" class="word">${site.wordmark}</a>
    <nav aria-label="Primary">
      ${navItems.map(n => `<a href="${n.href}">${esc(n.label)}</a>`).join("\n      ")}
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
  return `<section class="cta-band cta-band--${tone}">
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

export function footer() {
  const s = site.social;
  return `<footer>
  <div class="wrap">
    <div class="footer-grid">
      <div>
        <div class="word">${esc(site.tagline)}</div>
        <div class="addr">Tilth — Global growth marketing agency<br>India-based, working with brands in the US and India<br><a href="tel:${site.phoneHref}">${esc(site.phone)}</a><br>${esc(site.email)}</div>
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
    <div class="footer-bottom"><span>© 2026 Tilth. All rights reserved.</span><span>Tilth · Global growth marketing agency · India-based</span></div>
  </div>
</footer>`;
}

// Full HTML document
export function renderPage(p) {
  const canonical = site.base + p.path;
  const ogTitle = p.ogTitle || p.title;
  const ogDesc = p.ogDescription || p.description;
  const schemas = jsonld(p.schema || []);
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
<meta name="robots" content="${p.robots || "index, follow"}">
<meta property="og:site_name" content="Tilth">
<meta name="twitter:site" content="@Anuja_tilth">
<meta name="theme-color" content="#15110B">
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
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="${FONTS}" rel="stylesheet">
<link rel="stylesheet" href="/styles.css">
<link rel="stylesheet" href="/assets/generated.css">
${p.headExtra || ""}
${schemas}
</head>
<body>
${masthead(p.navItems)}
<main id="main">
${p.main}
</main>
${footer()}
<script src="/nav.js" defer></script>
</body>
</html>
`;
}

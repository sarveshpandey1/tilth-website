/* ------------------------------------------------------------------
 * Tilth — insight card thumbnails  (version-controlled tooling)
 * Renders one "Living Soil" banner per insights article: soil-black
 * field, category-tinted glow, seeded mycelial roots, a sprout, and
 * the article's TOPIC KEYWORD set in serif so each card signals its
 * subject at a glance. (The full title still sits as HTML on the card.)
 *
 * Output: ../assets/insight-cards/<slug>.webp  (committed to the site)
 * Setup:  cd tools && npm install          (installs sharp)
 * Run:    node generate-insight-cards.js                       (all 18)
 *         node generate-insight-cards.js --slug <slug> --cat <bucket> --keyword "<phrase>"
 * Buckets: paid-ads | tracking | seo-growth | hiring | strategy
 * ------------------------------------------------------------------ */
const fs = require("fs");
const path = require("path");
const sharp = require("sharp");

const W = 1000;
const H = 500;
const OUT = path.join(__dirname, "..", "assets", "insight-cards");

// category → accent tint (matches the CSS card accents on the listing)
const TINT = {
  "paid-ads":   "#E2885A", // terra
  "tracking":   "#8FAE4F", // sage
  "seo-growth": "#5FA07E", // spruce
  "hiring":     "#CFA04C", // ochre
  "strategy":   "#C67B6A"  // clay
};

// one entry per article: slug, category bucket, and a short topic keyword
const CARDS = [
  { slug: "first-marketing-hire-startup",               cat: "strategy",   kw: "Your first marketing hire" },
  { slug: "startup-marketing-budget-india",             cat: "strategy",   kw: "Startup marketing budget" },
  { slug: "marketing-agency-for-d2c-brands",            cat: "hiring",     kw: "Choosing a D2C agency" },
  { slug: "questions-before-hiring-marketing-agency",   cat: "hiring",     kw: "Before you hire an agency" },
  { slug: "agency-vs-freelancer-vs-inhouse",            cat: "hiring",     kw: "Agency, freelancer or in-house" },
  { slug: "marketing-agency-cost-india",                cat: "hiring",     kw: "Agency cost in India" },
  { slug: "marketing-foundation-audit",                 cat: "tracking",   kw: "The foundation audit" },
  { slug: "audit-your-ad-spend",                        cat: "paid-ads",   kw: "Is your ad spend profitable?" },
  { slug: "ga4-conversion-tracking",                    cat: "tracking",   kw: "GA4 conversion tracking" },
  { slug: "meta-ads-not-converting",                    cat: "paid-ads",   kw: "Meta Ads not converting?" },
  { slug: "affiliate-program-not-converting",           cat: "seo-growth", kw: "Fixing your affiliate program" },
  { slug: "shopify-conversion-tracking-ga4-meta-pixel", cat: "tracking",   kw: "Shopify conversion tracking" },
  { slug: "google-ads-budget-india-startups",           cat: "paid-ads",   kw: "Google Ads budget" },
  { slug: "google-ads-vs-meta-ads-startup",             cat: "paid-ads",   kw: "Google Ads vs Meta Ads" },
  { slug: "seo-not-bringing-leads",                     cat: "seo-growth", kw: "SEO that brings leads" },
  { slug: "measure-influencer-marketing-roi",           cat: "seo-growth", kw: "Influencer marketing ROI" },
  { slug: "marketing-attribution-explained-simply",     cat: "tracking",   kw: "Attribution, explained" },
  { slug: "what-is-performance-marketing",              cat: "seo-growth", kw: "What is performance marketing?" }
];

function esc(s) {
  return String(s || "").replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
}

// stable small integer seed from a slug
function seedOf(slug) {
  let s = 0;
  for (let i = 0; i < slug.length; i++) s = (s * 31 + slug.charCodeAt(i)) % 9973;
  return (s % 89) + 7;
}

// title-case fallback keyword if none supplied
function kwFromSlug(slug) {
  return slug.replace(/-/g, " ").replace(/\b\w/g, (c) => c.toUpperCase());
}

function wrapText(text, maxChars, maxLines) {
  const words = String(text || "").trim().split(/\s+/).filter(Boolean);
  const lines = [];
  let line = "";
  for (const w of words) {
    const next = line ? `${line} ${w}` : w;
    if (next.length > maxChars && line) { lines.push(line); line = w; }
    else line = next;
  }
  if (line) lines.push(line);
  return lines.slice(0, maxLines);
}

// one wandering root path, growing up from the baseline
function rootPath(seed, i) {
  let x = (seed * 73 + i * 129) % W;
  let y = H + 24;
  let d = `M${x.toFixed(1)} ${y.toFixed(1)}`;
  let angle = -Math.PI / 2 + ((seed + i) % 9 - 4) * 0.05;
  const len = H * (0.4 + ((seed + i) % 7) * 0.02);
  const steps = 7 + (i % 4);
  for (let s = 1; s <= steps; s++) {
    angle += Math.sin(seed + i * 2 + s) * 0.24;
    const step = len / steps;
    const nx = x + Math.cos(angle) * step;
    const ny = y + Math.sin(angle) * step;
    const cx = (x + nx) / 2 + Math.sin(s + seed) * 26;
    const cy = (y + ny) / 2;
    d += ` Q${cx.toFixed(1)} ${cy.toFixed(1)} ${nx.toFixed(1)} ${ny.toFixed(1)}`;
    x = nx; y = ny;
  }
  return d;
}

function roots(seed, tint) {
  const paths = Array.from({ length: 12 }, (_, i) => {
    const d = rootPath(seed, i);
    const warm = i % 6 === 2;
    const stroke = warm ? "#E2885A" : tint;
    const w = warm ? 1.5 : 1.2;
    const op = warm ? 0.34 : 0.5;
    return `<path d="${d}" stroke="${stroke}" stroke-width="${w}" opacity="${op}"/>`;
  }).join("");
  return `<g fill="none" stroke-linecap="round" filter="url(#softGlow)">${paths}</g>`;
}

function sprout(x, y, scale, tint) {
  return `
    <g transform="translate(${x} ${y}) scale(${scale})" fill="none" stroke="${tint}" stroke-linecap="round" stroke-linejoin="round" filter="url(#softGlow)">
      <path d="M0 46 C-3 27 3 13 0 0" stroke-width="3"/>
      <path d="M-1 22 C-28 14 -38 0 -42 -16 C-20 -13 -7 -5 -1 22Z" stroke-width="2" fill="rgba(170,197,108,.07)"/>
      <path d="M2 17 C25 7 35 -8 38 -25 C18 -19 7 -7 2 17Z" stroke-width="2" fill="rgba(170,197,108,.07)"/>
    </g>`;
}

function keywordBlock(kw, tint) {
  const marginX = 72;
  const lines = wrapText(kw, 15, 3);
  const size = lines.length >= 3 ? 52 : 66;
  const leading = Math.round(size * 1.07);
  const blockH = (lines.length - 1) * leading;
  const firstY = Math.round(H * 0.5 - blockH * 0.5 + size * 0.30);
  const texts = lines.map((ln, i) =>
    `<text x="${marginX}" y="${firstY + i * leading}" class="kw" font-size="${size}">${esc(ln)}</text>`
  ).join("");
  const underlineY = firstY + blockH + 30;
  return `
    ${texts}
    <path d="M${marginX} ${underlineY} H${marginX + 116}" stroke="${tint}" stroke-width="3" opacity=".95"/>`;
}

function svg(card) {
  const tint = TINT[card.cat] || "#AAC56C";
  const seed = seedOf(card.slug);
  const kw = card.kw || kwFromSlug(card.slug);
  const gx = (0.62 + (seed % 26) / 100).toFixed(2);
  const gy = (0.16 + (seed % 15) / 120).toFixed(2);
  return `
<svg xmlns="http://www.w3.org/2000/svg" width="${W}" height="${H}" viewBox="0 0 ${W} ${H}">
  <defs>
    <filter id="softGlow" x="-30%" y="-30%" width="160%" height="160%">
      <feGaussianBlur stdDeviation="3" result="b"/>
      <feMerge><feMergeNode in="b"/><feMergeNode in="SourceGraphic"/></feMerge>
    </filter>
    <filter id="grain">
      <feTurbulence type="fractalNoise" baseFrequency=".9" numOctaves="3" stitchTiles="stitch"/>
      <feColorMatrix type="saturate" values="0"/>
      <feComponentTransfer><feFuncA type="table" tableValues="0 .1"/></feComponentTransfer>
    </filter>
    <radialGradient id="vignette" cx="42%" cy="46%" r="82%">
      <stop offset="0%" stop-color="#15110B" stop-opacity="0"/>
      <stop offset="66%" stop-color="#15110B" stop-opacity=".22"/>
      <stop offset="100%" stop-color="#070503" stop-opacity=".8"/>
    </radialGradient>
    <radialGradient id="tintGlow" cx="50%" cy="50%" r="50%">
      <stop offset="0%" stop-color="${tint}" stop-opacity=".36"/>
      <stop offset="42%" stop-color="${tint}" stop-opacity=".12"/>
      <stop offset="100%" stop-color="${tint}" stop-opacity="0"/>
    </radialGradient>
    <radialGradient id="terraGlow" cx="50%" cy="50%" r="50%">
      <stop offset="0%" stop-color="#E2885A" stop-opacity=".12"/>
      <stop offset="100%" stop-color="#E2885A" stop-opacity="0"/>
    </radialGradient>
    <style>
      .kw{font-family:Georgia,'Times New Roman',serif;fill:#F5EEE1;letter-spacing:-1px}
    </style>
  </defs>
  <rect width="100%" height="100%" fill="#15110B"/>
  <rect width="100%" height="100%" fill="#241D14" opacity=".28"/>
  <ellipse cx="${W * gx}" cy="${H * gy}" rx="${Math.min(W, H) * 1.15}" ry="${Math.min(W, H) * .9}" fill="url(#tintGlow)"/>
  <ellipse cx="${W * .12}" cy="${H * .98}" rx="${Math.min(W, H) * .72}" ry="${Math.min(W, H) * .56}" fill="url(#terraGlow)"/>
  ${roots(seed, tint)}
  ${sprout(W - 76, H - 60, .64, tint)}
  ${keywordBlock(kw, tint)}
  <rect width="100%" height="100%" fill="url(#vignette)"/>
  <rect width="100%" height="100%" filter="url(#grain)" opacity=".45"/>
</svg>`;
}

function arg(name) {
  const i = process.argv.indexOf(`--${name}`);
  return i >= 0 ? process.argv[i + 1] : undefined;
}

async function main() {
  fs.mkdirSync(OUT, { recursive: true });

  // single-card mode:  node generate-insight-cards.js --slug <slug> --cat <bucket> --keyword "<phrase>"
  // (used by the weekly article routine so each new post gets one thumbnail)
  const oneSlug = arg("slug");
  const oneCat = arg("cat");
  const oneKw = arg("keyword");
  let list = CARDS;
  if (oneSlug) {
    if (!TINT[oneCat]) {
      console.error(`Unknown --cat "${oneCat}". Use one of: ${Object.keys(TINT).join(", ")}`);
      process.exit(1);
    }
    list = [{ slug: oneSlug, cat: oneCat, kw: oneKw || kwFromSlug(oneSlug) }];
  }

  for (const card of list) {
    const target = path.join(OUT, `${card.slug}.webp`);
    await sharp(Buffer.from(svg(card))).webp({ quality: 82 }).toFile(target);
    console.log(path.relative(path.join(__dirname, ".."), target));
  }
  console.log(`\n${list.length} card thumbnail${list.length === 1 ? "" : "s"} written.`);
}

main().catch((e) => { console.error(e); process.exit(1); });

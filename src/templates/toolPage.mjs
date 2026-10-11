// The shared TOOLS worksheet shell.
//
// Ported from the frozen Master Design Release, per TOOLS_DESIGN_REPORT.md §2
// and §7: the Tools family has three presentation types, not eight pages. This
// is the WORKSHEET — one shell carrying all six tools, including the analyser,
// whose result composition is richer but whose job is identical.
//
// Every tool reads in the same order: 01 INPUT -> 02 RESULT -> 03 INTERPRETATION
// -> 04 NEXT ACTION. The shell supplies the page class set, the two stylesheets,
// the worksheet runtime, the head metadata and the schema graph; each tool
// supplies only its own markup from src/tools/<key>.mjs.
//
// Head metadata, descriptions and the WebApplication/Offer/Organization graph
// are the live production values, harvested from each tool's own page — the
// frozen design controls visual intent only and never the metadata or schema.
// The six calculators keep WebApplication + Offer + Organization +
// BreadcrumbList exactly as they shipped (report §20).
import { site } from "../data.mjs";
import { TOOLS } from "../../tools/lib/registry.js";
import { breadcrumbs } from "../render.mjs";

import { main as adSpendMain } from "../tools/ad-spend.mjs";
import { main as ltvCacMain } from "../tools/ltv-cac.mjs";
import { main as funnelMain } from "../tools/conversion-funnel.mjs";
import { main as abTestMain } from "../tools/ab-test.mjs";
import { main as utmMain } from "../tools/utm-builder.mjs";
import { main as analyserMain } from "../tools/analyser.mjs";

// key = the TOOL_INIT key in /tools-worksheet.js and the [data-tool-key] value;
// id  = the registry id, which supplies the route, name and card copy.
const WORKSHEETS = [
  {
    key: "ad-spend", id: "ad-spend-calculator", main: adSpendMain,
    title: "Ad Spend Profitability Calculator — Breakeven ROAS & Max CAC | Tilth",
    description: "Free calculator: find your breakeven ROAS and the most you can profitably pay to acquire a customer. Enter your order value and margin to see if your ad spend actually makes money.",
    ogTitle: "Ad Spend Profitability Calculator — is your ad spend actually making money?",
    ogDescription: "Find your breakeven ROAS and the most you can profitably pay per customer. A free, honest calculator from Tilth.",
    appDescription: "A free calculator that finds your breakeven ROAS and the maximum you can profitably pay to acquire a customer, from your average order value and gross margin."
  },
  {
    key: "ltv-cac", id: "ltv-cac-calculator", main: ltvCacMain,
    title: "LTV : CAC Calculator — Lifetime Value, Ratio & Payback | Tilth",
    description: "Free LTV:CAC calculator: work out customer lifetime value, your LTV-to-CAC ratio, and payback period from order value, margin, purchase frequency, and lifespan.",
    ogTitle: "LTV : CAC Calculator — can you afford to pay more per customer?",
    ogDescription: "Lifetime value, LTV:CAC ratio, and payback period — free, no sign-up.",
    appDescription: "Calculates customer lifetime value, LTV:CAC ratio, and payback period from order value, gross margin, purchase frequency, and customer lifespan."
  },
  {
    key: "conversion-funnel", id: "conversion-funnel-calculator", main: funnelMain,
    title: "Conversion Funnel Calculator — Traffic to Revenue | Tilth",
    description: "Free conversion funnel calculator: turn monthly traffic, conversion rate, and order value into orders and revenue — then reverse-solve the traffic a revenue goal needs.",
    ogTitle: "Conversion Funnel Calculator — traffic to revenue, and back",
    ogDescription: "Turn traffic, conversion rate, and order value into revenue — and reverse-solve a goal. Free.",
    appDescription: "Calculates orders and revenue from monthly traffic, conversion rate, and average order value, and reverse-solves the traffic or conversion rate a revenue goal requires."
  },
  {
    key: "ab-test", id: "ab-test-calculator", main: abTestMain,
    title: "A/B Test Significance Calculator — Is Your Result Real? | Tilth",
    description: "Free A/B test significance calculator: enter visitors and conversions for each variant to see conversion rates, uplift, and statistical confidence before you call a winner.",
    ogTitle: "A/B Test Significance Calculator — is your result real or noise?",
    ogDescription: "Check statistical significance before you call an A/B test. Free, no sign-up.",
    appDescription: "Calculates conversion rates, relative uplift, and statistical confidence (two-proportion z-test) for an A/B test from visitor and conversion counts."
  },
  {
    key: "utm-builder", id: "utm-builder", main: utmMain,
    title: "UTM Campaign URL Builder — Free UTM Link Generator | Tilth",
    description: "Free UTM builder: generate correctly tagged campaign URLs (utm_source, medium, campaign, term, content) so every click is attributable in GA4. No sign-up.",
    ogTitle: "UTM Campaign URL Builder — clean, attributable campaign links",
    ogDescription: "Generate correctly tagged campaign URLs so every click is measurable. Free, no sign-up.",
    appDescription: "Generates correctly tagged campaign URLs with utm_source, utm_medium, utm_campaign, utm_term, and utm_content parameters for accurate GA4 attribution."
  },
  {
    key: "analyser", id: "marketing-benchmark-analyser", main: analyserMain,
    title: "Marketing Benchmark Analyser — Score Your Metrics Honestly | Tilth",
    description: "Free marketing benchmark analyser: enter the metrics that fit your business model and get an honest health score, benchmark comparison, your biggest issue, and prioritised actions.",
    ogTitle: "Marketing Benchmark Analyser — an honest health score",
    ogDescription: "Enter the metrics that fit your model, compare to sourced benchmarks, and get prioritised actions. Free, no sign-up.",
    appDescription: "Scores a business's marketing metrics against sourced industry benchmarks by model, highlights the biggest issue, and returns prioritised actions."
  }
];

const HEAD_EXTRA = `<link rel="stylesheet" href="/assets/core-company.css">
<link rel="stylesheet" href="/assets/tools.css">
<script type="module" src="/tools-worksheet.js"></script>`;

function toolPage(w) {
  const reg = TOOLS.find(t => t.id === w.id);
  if (!reg) throw new Error("tool not in registry: " + w.id);
  const bc = breadcrumbs([
    { name: "Home", path: "/" },
    { name: "Free Tools", path: "/tools/" },
    { name: reg.name, path: reg.route }
  ]);
  const app = {
    "@type": "WebApplication",
    name: reg.name,
    url: site.base + reg.route,
    applicationCategory: "BusinessApplication",
    operatingSystem: "Any (web)",
    description: w.appDescription,
    offers: { "@type": "Offer", price: "0", priceCurrency: "INR" },
    publisher: { "@type": "Organization", name: "Tilth", url: `${site.base}/` }
  };
  return {
    path: reg.route,
    shell: "v3",
    shellClass: "v3-core v3-tkit v3-tool",
    headExtra: HEAD_EXTRA,
    title: w.title,
    description: w.description,
    ogTitle: w.ogTitle,
    ogDescription: w.ogDescription,
    schema: [bc.schema, app],
    main: w.main
  };
}

export const allToolPages = WORKSHEETS.map(toolPage);

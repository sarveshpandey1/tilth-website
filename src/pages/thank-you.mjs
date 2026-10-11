// /thank-you/ — Brand v3, CORE COMPANY family (page class .v3-thanks).
//
// The Contact form's success state, and its own route. Ported from the frozen
// Master Design Release design "CORE_COMPANY/Tilth Contact.dc.html", which
// carries this template as THANKS_HTML so the relationship between the form and
// its success state could be reviewed in one file. The prototype's route switch
// (reviewRoute=thank-you) is review-only and is not ported — in production this
// is a real route, reached only via the form's _next redirect.
//
// Exists so a successful enquiry lands back on wearetilth.com instead of
// FormSubmit's own hosted confirmation on another domain. That matters for two
// reasons: the visitor stays on-brand, and analytics.js can fire generate_lead
// — which is only possible on a same-origin success page (workbook T-016).
//
// noindex: a utility confirmation page has no search value and should not be
// indexed. It keeps "follow" so the onward links still pass.
import { site } from "../data.mjs";
import { orgSchema, esc } from "../render.mjs";

const path = "/thank-you/";

const reads = [
  ["/approach/", "The Tilth approach", "How we diagnose the constraint before recommending more spend."],
  ["/work/", "Selected work", "Outcomes from client engagements, with names withheld where required."],
  ["/services/", "What we do", "Strategy, paid acquisition, SEO and content, affiliate growth and conversion."],
  ["/insights/", "Insights", "Practical thinking on measurement, acquisition and conversion."]
];

const main = `
<section id="hero" data-hero data-depth-label="SURFACE">
  <div data-eyebrow>Enquiry received</div>
  <h1 data-h1>Thanks — your message is with us.</h1>
  <p data-lede>We'll read it properly and reply ${esc(site.responseTime)}. If it's easier to add anything, just reply to the confirmation email.</p>
  <div data-actions>
    <a data-btn href="/">Back to home <span aria-hidden="true">&rarr;</span></a>
    <a data-textlink href="/insights/"><span>Read the Insights &rarr;</span></a>
  </div>
</section>

<section id="next-reads" data-sec data-inv data-depth-label="FOUNDATION" aria-labelledby="nr-h">
  <div data-eyebrow>While you wait</div>
  <h2 id="nr-h" data-h2 data-gap>A few things worth reading.</h2>
  <div data-tiles data-four data-ty-tiles>${reads.map(([href, h, p]) => `
    <div data-tile><h3><a href="${href}">${esc(h)}</a></h3><p>${esc(p)}</p></div>`).join("")}
  </div>
</section>
`;

export default {
  path,
  shell: "v3",
  shellClass: "v3-core v3-thanks",
  headExtra: `<link rel="stylesheet" href="/assets/core-company.css">`,
  title: "Thank you | Tilth",
  description: "Your enquiry has been received. We'll reply within one working day.",
  robots: "noindex, follow",
  schema: [orgSchema()],
  main
};

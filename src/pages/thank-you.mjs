// Post-submission page for the contact form.
//
// Exists so a successful enquiry lands back on wearetilth.com instead of FormSubmit's
// own hosted confirmation on another domain. That matters for two reasons: the visitor
// stays on-brand, and analytics.js can fire generate_lead — which is only possible on a
// same-origin success page (workbook T-016).
//
// noindex: a utility confirmation page has no search value and should not be indexed.
import { site } from "../data.mjs";
import { orgSchema, esc } from "../render.mjs";

const path = "/thank-you/";

const main = `
<section class="ghero">
  <div class="wrap">
    <p class="label">Enquiry received</p>
    <h1>Thanks — your message is with us.</h1>
    <p class="lede">We'll read it properly and reply ${esc(site.responseTime)}. If it's easier to add anything, just reply to the confirmation email.</p>
    <div class="actions">
      <a class="btn" href="/"><span>Back to home</span> <span class="arrow">→</span></a>
      <a class="text-cta" href="/insights/">Read the Insights →</a>
    </div>
  </div>
</section>

<section class="gsec gsec--light">
  <div class="wrap">
    <p class="label">While you wait</p>
    <h2>A few things worth reading.</h2>
    <div class="cap-grid">
      <div class="cap"><h3><a href="/approach/">The Tilth approach</a></h3><p>How we diagnose the constraint before recommending more spend.</p></div>
      <div class="cap"><h3><a href="/work/">Selected work</a></h3><p>Outcomes from client engagements, with names withheld where required.</p></div>
      <div class="cap"><h3><a href="/services/">What we do</a></h3><p>Strategy, paid acquisition, SEO and content, affiliate growth and conversion.</p></div>
      <div class="cap"><h3><a href="/insights/">Insights</a></h3><p>Practical thinking on measurement, acquisition and conversion.</p></div>
    </div>
  </div>
</section>
`;

export default {
  path,
  title: "Thank you | Tilth",
  description: "Your enquiry has been received. We'll reply within one working day.",
  robots: "noindex, follow",
  headExtra: `<style>.cap h3 a{color:inherit;text-decoration:underline;text-underline-offset:3px}.gsec--light .cap h3 a{color:#15110B}</style>`,
  schema: [orgSchema()],
  main
};

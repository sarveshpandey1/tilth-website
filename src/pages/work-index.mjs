import { breadcrumbs, ctaBlock, caseStudySnapshots, clientMarkers } from "../render.mjs";
import { clients } from "../data.mjs";

const path = "/work/";
const bc = breadcrumbs([{ name: "Home", path: "/" }, { name: "Work", path }]);

const hasApprovedNamed = clients.some(c => c.caseStudyApproved);

const main = `
<section class="ghero">
  <div class="wrap">
    ${bc.visible}
    <span class="label">Work</span>
    <h1>Proof, not <em>promises</em>.</h1>
    <p class="lede">We prioritise engagements over logos, and outcomes over vanity metrics. Some results are shared anonymously to respect client confidentiality — named case studies are added as clients approve them.</p>
    <div class="actions">
      <a class="btn" href="/contact/"><span>Discuss a Project</span> <span class="arrow">→</span></a>
      <a class="text-cta" href="/services/">Explore services →</a>
    </div>
  </div>
</section>

<section class="gsec gsec--light">
  <div class="wrap">
    <span class="label">Selected experience</span>
    <h2>Teams we've helped grow.</h2>
    <div class="trust__markers" style="margin-top:28px">${clientMarkersInline()}</div>
  </div>
</section>

<section class="gsec">
  <div class="wrap">
    <span class="label">Result snapshots</span>
    <h2>Outcomes from real engagements.</h2>
    <p class="intro">Presented anonymously, with figures exactly as they were achieved — no client names, logos or reinterpreted numbers.</p>
    <div class="proof-row">
      ${caseStudySnapshots()}
    </div>
  </div>
</section>

${ctaBlock({
  eyebrow: "Next step",
  heading: `Want results like these?`,
  body: "Tell us what you're trying to grow. We'll review the foundations before recommending the work — and show you where the biggest opportunities are.",
  primary: { label: "Discuss Your Growth Project", href: "/contact/" },
  secondary: { label: "Request a Foundation Audit", href: "/contact/" }
})}
`;

// inline helper so the markers sit inside a light section here
function clientMarkersInline() {
  const approved = clients.filter(c => c.textDisplayApproved).sort((a, b) => a.displayOrder - b.displayOrder);
  return approved.map(c => `<span class="trust__marker">${c.name}</span>`).join('<span class="trust__dot" aria-hidden="true">·</span>');
}

export default {
  path,
  title: "Our Work — Growth Marketing Results | Tilth",
  description: "Selected growth marketing engagements and anonymous result snapshots — outcomes over vanity metrics. Named case studies added as clients approve.",
  ogTitle: "Our work — proof, not promises",
  ogDescription: "Anonymous result snapshots and selected experience across ambitious brands.",
  schema: [bc.schema],
  main
};

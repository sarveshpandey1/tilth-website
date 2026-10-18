// The three legal documents — the authoritative content source.
//
// LEGAL TEXT IS LOCKED. Every character of the operative wording is as
// published: no clause, date, caveat, data category, governing-law phrase,
// disclosure or address is modernised, shortened, harmonised or rewritten, and
// nothing is added or removed. This file is the published text lifted into one
// structured module so src/templates/legalPage.mjs can present it; it changes
// presentation, not legal substance.
//
// Verified independently of any report claim, published page vs this content:
// the flattened visible text is CHARACTER-IDENTICAL for all three documents
// (2,912 / 1,617 / 1,692 characters; 500 / 262 / 280 words), and every href
// matches (8 / 2 / 4).
//
// THE OPERATIVE EMAIL — OWNER DECISION, EXECUTED (Phase 8).
// The owner has confirmed the official domain https://wearetilth.com/ and the
// official contact address anuja@wearetilth.com. The 9 operative occurrences
// of the former address (5 in the Privacy body, 2 in Terms, 2 in the Cookie
// Policy) are therefore replaced here, including the data-subject-request
// route in Privacy "Your rights" and the legal and cookie/privacy contact
// clauses. That is the ONLY change made under this approval: every surrounding
// word, clause, date, data category and governing-law phrase is untouched, no
// other policy wording is rewritten, Contact form behaviour is unchanged, and
// the "Last updated" dates are deliberately NOT moved, because the address
// change is not a revision of the policy's substance (register J-8 stands).
// Replacing the address does not resolve the remaining policy conflicts
// (contact fields, Tools telemetry, browser storage, font providers, Facebook,
// consent); those stay blocked on legal.
//
// MARKUP-ONLY CHANGES carried over from the frozen design, none of which
// touches a word of legal text:
//   1. the .doc / .wrap-narrow wrappers become <article aria-labelledby> +
//      <header>;
//   2. the date is wrapped in a real <time datetime>; the visible string
//      "Last updated: 18 June 2026" is unchanged;
//   3. div.note becomes a quiet ruled caveat instead of a filled Clay card,
//      keeping role="note";
//   4. the back link loses its legacy class; href "/" and the text
//      "\u2190 Back to home" are unchanged;
//   5. external links keep target="_blank" rel="noopener" and gain a
//      screen-reader-only " (opens in a new tab)" \u2014 an accessibility label,
//      not visible text and not legal text.
// PLUS one production collision translation: data-note -> data-lnote, because
// assets/tools.css owns [data-note] with an incompatible meaning. role="note"
// and the caveat text are untouched.
//
// Clause order, heading structure and list structure are the source's own:
// 9 / 7 / 6 H2s, one note each, 3 / 1 / 2 <strong> run-ins that stay <strong>
// rather than being promoted to headings, 2 <code> cookie names in the Cookie
// Policy, and NO list, numbered clause, H3 or table in any document \u2014 so none
// is designed or invented.
//
// Head metadata (title, description, robots) is read from the published pages.
// There is no og: tag and no schema, as in the source; none is added.

export const legalDocs = [
  {
    slug: "privacy",
    eyebrow: `Legal`,
    h1: `Privacy Policy`,
    datePrefix: `Last updated:`,
    datetime: "2026-06-18",
    dateText: `18 June 2026`,
    backHref: "/",
    backText: `← Back to home`,
    title: `Privacy Policy — Tilth`,
    description: `How Tilth handles your data on wearetilth.com — what the contact form and Google Analytics collect, and the choices you have.`,
    robots: "index, follow",
    body: `      <p>This policy explains what happens to your information when you visit <strong>wearetilth.com</strong>. We have deliberately kept this site simple, and the same goes for how we handle data.</p>

    <h2>The short version</h2>
    <div data-lnote role="note">We keep data collection to a minimum. We use Google Analytics to understand how the site is used, and we offer a contact form so you can start a conversation. We don't sell your data, we don't run advertising pixels, and we don't send marketing emails you didn't ask for.</div>

    <h2>Information we collect</h2>
    <p><strong>Contact form.</strong> If you submit the form on our contact page, we collect the details you provide — your name, email address, phone number, brand or website, the channels you select, and your message. We use this only to reply to you and discuss working together. The form is delivered to us by FormSubmit, a third-party form-to-email service; its handling of the submission is governed by the <a href="https://formsubmit.co/" target="_blank" rel="noopener">FormSubmit<span data-sr> (opens in a new tab)</span></a> service.</p>
    <p><strong>Email.</strong> If you email us at anuja@wearetilth.com, we receive whatever information you choose to include in that email. We use it only to reply and discuss working together.</p>

    <h2>Analytics</h2>
    <p>We use Google Analytics 4 to understand how visitors use the site — which pages are viewed, the device and browser used, approximate location (city or country, derived from IP), and how visitors arrived. This is collected via cookies and analysed in aggregate to help us improve the site; we do not use it to identify you personally. Google's handling of this data is governed by <a href="https://policies.google.com/privacy" target="_blank" rel="noopener">Google's Privacy Policy<span data-sr> (opens in a new tab)</span></a>. You can opt out using the <a href="https://tools.google.com/dlpage/gaoptout" target="_blank" rel="noopener">Google Analytics Opt-out Browser Add-on<span data-sr> (opens in a new tab)</span></a>.</p>

    <h2>Google Fonts</h2>
    <p>This site uses Google Fonts to display its typefaces. When the fonts load, your browser connects to Google's servers, and in doing so your IP address is visible to Google. This is standard for most websites using Google Fonts, but we want to be transparent that it happens. Google's handling of this data is governed by <a href="https://policies.google.com/privacy" target="_blank" rel="noopener">Google's Privacy Policy<span data-sr> (opens in a new tab)</span></a>.</p>

    <h2>Hosting</h2>
    <p>This site is hosted on GitHub Pages. Like most web hosts, GitHub may collect standard technical information (such as IP addresses) in server logs for security and operational purposes. This is governed by <a href="https://docs.github.com/en/site-policy/privacy-policies/github-general-privacy-statement" target="_blank" rel="noopener">GitHub's Privacy Statement<span data-sr> (opens in a new tab)</span></a>.</p>

    <h2>External links</h2>
    <p>Our site links to external profiles (LinkedIn, Instagram, X, Facebook). Once you follow those links, you are subject to the privacy policies of those platforms, not ours.</p>

    <h2>Your rights</h2>
    <p>You can ask us to delete any personal information you've sent us — a form submission or email correspondence — at any time. Just email <a href="mailto:anuja@wearetilth.com">anuja@wearetilth.com</a> and we will. You can also opt out of analytics using the browser add-on linked above.</p>

    <h2>Changes to this policy</h2>
    <p>As Tilth grows, we may add or change the tools we use. If and when we do, we will update this policy to reflect exactly what is collected and why, and change the "last updated" date above.</p>

    <h2>Contact</h2>
    <p>Questions about this policy? Email <a href="mailto:anuja@wearetilth.com">anuja@wearetilth.com</a>.</p>`
  },
  {
    slug: "terms",
    eyebrow: `Legal`,
    h1: `Terms of Service`,
    datePrefix: `Last updated:`,
    datetime: "2026-06-14",
    dateText: `14 June 2026`,
    backHref: "/",
    backText: `← Back to home`,
    title: `Terms of Service — Tilth`,
    description: `Tilth's terms of service for wearetilth.com — acceptable use, disclaimers on past results, and governing law (Bengaluru, India).`,
    robots: "index, follow",
    body: `      <p>These terms govern your use of the website <strong>wearetilth.com</strong>. By using the site, you agree to them. They are intentionally straightforward.</p>

    <h2>About this site</h2>
    <p>wearetilth.com is the marketing website of Tilth, a marketing agency based in Bengaluru, India, founded by Anuja. The site exists to describe our services and let prospective clients get in touch.</p>

    <h2>Information on this site</h2>
    <p>The content here — including descriptions of our approach, services, and past results — is provided for general information. Figures and examples drawn from past work are illustrative of experience and are not a guarantee of similar results. Marketing outcomes depend on many factors specific to each business.</p>
    <div data-lnote role="note">Any specific engagement between Tilth and a client is governed by a separate written agreement, not by these website terms.</div>

    <h2>Acceptable use</h2>
    <p>You agree not to misuse this site — for example, by attempting to disrupt it, gain unauthorised access, or copy its content for misleading purposes. The Tilth name, branding, and written content are ours.</p>

    <h2>External links</h2>
    <p>This site links to external platforms (such as our social profiles). We are not responsible for the content or practices of those external sites.</p>

    <h2>No warranty</h2>
    <p>The site is provided "as is." While we aim to keep it accurate and available, we don't guarantee it will always be error-free or uninterrupted.</p>

    <h2>Governing law</h2>
    <p>These terms are governed by the laws of India, and any disputes fall under the jurisdiction of the courts of Bengaluru, Karnataka.</p>

    <h2>Contact</h2>
    <p>Questions about these terms? Email <a href="mailto:anuja@wearetilth.com">anuja@wearetilth.com</a>.</p>`
  },
  {
    slug: "cookie-policy",
    eyebrow: `Legal`,
    h1: `Cookie Policy`,
    datePrefix: `Last updated:`,
    datetime: "2026-06-18",
    dateText: `18 June 2026`,
    backHref: "/",
    backText: `← Back to home`,
    title: `Cookie Policy — Tilth`,
    description: `Tilth's cookie policy — we use Google Analytics cookies to measure site usage; no advertising or cross-site tracking cookies.`,
    robots: "index, follow",
    body: `      <p>This page explains how cookies are used on <strong>wearetilth.com</strong>.</p>

    <div data-lnote role="note">wearetilth.com uses Google Analytics, which sets a small number of cookies to measure how the site is used. We do not use advertising or social-media tracking cookies.</div>

    <h2>What are cookies?</h2>
    <p>Cookies are small text files a website can store in your browser, often used to remember preferences or measure how a site is used. Many sites use them heavily. We use only a few, for analytics.</p>

    <h2>Cookies we use</h2>
    <p><strong>Google Analytics (GA4).</strong> We use Google Analytics to understand how visitors use the site. It sets first-party cookies (typically named <code>_ga</code> and <code>_ga_*</code>) that help distinguish unique visitors and measure usage in aggregate. These cookies don't identify you personally and we don't use them for advertising. Google's use of this data is governed by <a href="https://policies.google.com/privacy" target="_blank" rel="noopener">Google's Privacy Policy<span data-sr> (opens in a new tab)</span></a>.</p>
    <p>We do not use the Meta Pixel, advertising cookies, or cross-site tracking on this site.</p>

    <h2>Third-party connections</h2>
    <p>The site loads fonts from Google Fonts. This involves a connection to Google's servers but does not, by itself, set advertising cookies on your device. If you click through to our social profiles (LinkedIn, Instagram, X, Facebook), those platforms will apply their own cookies once you are on their sites.</p>

    <h2>Managing cookies</h2>
    <p>Every major browser lets you view, block, and delete cookies in its settings. You can also opt out of Google Analytics specifically using the <a href="https://tools.google.com/dlpage/gaoptout" target="_blank" rel="noopener">Google Analytics Opt-out Browser Add-on<span data-sr> (opens in a new tab)</span></a>.</p>

    <h2>If this changes</h2>
    <p>If we later add other tools that use cookies, we will update this page first and provide consent options where required by law.</p>

    <h2>Contact</h2>
    <p>Questions? Email <a href="mailto:anuja@wearetilth.com">anuja@wearetilth.com</a>.</p>`
  },
];

export const legalDocBySlug = new Map(legalDocs.map(d => [d.slug, d]));

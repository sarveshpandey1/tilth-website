# tools — insight card thumbnails

Generates the on-brand "Living Soil" thumbnail shown on each card of the
[insights listing](../insights/index.html). Textless by design — the article
title lives as HTML on the card, so the image is decorative (`alt=""`).

Output: `../assets/insight-cards/<slug>.webp` (~7 KB each, committed to the site).

## Setup (once)

```bash
cd tools
npm install        # installs sharp
```

`node_modules/` here is gitignored — only the script + package.json are tracked.

## Generate

```bash
# all articles listed in the CARDS array
node generate-insight-cards.js

# a single article (used by the weekly-blog-draft routine)
node generate-insight-cards.js --slug <slug> --cat <bucket>
```

Buckets (must match the listing's category tabs / accent classes):

| Bucket | `--cat` | Tint |
| --- | --- | --- |
| Paid Ads | `paid-ads` | `#E2885A` |
| Tracking & Attribution | `tracking` | `#8FAE4F` |
| SEO & Growth | `seo-growth` | `#5FA07E` |
| Hiring & Agencies | `hiring` | `#CFA04C` |
| Strategy | `strategy` | `#C67B6A` |

The root pattern is seeded from the slug, so each thumbnail is unique but
cohesive. To add a permanent entry to the batch list, append `{ slug, cat }`
to the `CARDS` array in `generate-insight-cards.js`.

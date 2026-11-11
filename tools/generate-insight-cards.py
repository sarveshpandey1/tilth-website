#!/usr/bin/env python3
"""
Tilth - Insights cover system  (version-controlled tooling)
===========================================================

Renders one cover per Insights article as SVG, using ONE visual grammar so the
set reads as an editorial series rather than 18 unrelated thumbnails.

WHY THIS REPLACED THE PREVIOUS GENERATOR
----------------------------------------
The old generator asked librsvg for `font-family: Syne` etc. Those fonts are
not installed, and the repo ships woff2 only, which fontconfig cannot use, so
every cover silently fell back to a default serif. It also drew literal roots
and a sprout, which CLAUDE.md section 4 explicitly forbids, and tinted each
card with a pre-Brand-v3 palette (terra/sage/spruce/ochre/clay) that exists
nowhere in the current system. That combination is what made the covers read
as vague and off-system.

Here, every piece of type is converted to vector outlines from the real brand
woff2 files via fontTools, so the output cannot silently fall back again.

PIPELINE
--------
    python generate-insight-cards.py            # writes SVGs, then rasterises
    python generate-insight-cards.py --svg-only # inspect SVG without WebP

Rasterising shells out to the existing `sharp` install in this folder, so no
new dependency is introduced. Requires: fontTools (+brotli) for woff2, and
node_modules/sharp for the WebP step.

CANVAS AND CROP CONTRACT
------------------------
Source is 1200x630, the standard social-preview size. The Insights hub shows
the same file inside a 2:1 plate with object-fit:cover, which trims 15px from
the top and bottom. Everything meaningful therefore stays inside a 64px
vertical safe margin, so the hub crop never costs anything.

ADDING A FUTURE ARTICLE
-----------------------
Add one row to CARDS: slug, a concise display title (<= 3 short lines), and a
depth layer. The category is read from src/insights-content.mjs so it can
never drift from the hub. Nothing else needs editing.
"""
import argparse
import json
import os
import re
import subprocess
import sys
import tempfile

from fontTools.ttLib import TTFont
from fontTools.pens.svgPathPen import SVGPathPen

sys.stdout.reconfigure(encoding="utf-8")

HERE = os.path.dirname(os.path.abspath(__file__))
ROOT = os.path.dirname(HERE)
FONTS = os.path.join(ROOT, "assets", "fonts")
OUT = os.path.join(ROOT, "assets", "insight-cards")
SRC = os.path.join(ROOT, "src", "insights-content.mjs")

W, H = 1200, 630
MARGIN_X, MARGIN_Y = 72, 64          # safe area; 2:1 crop only takes 15px/side

# ---------------------------------------------------------------- Brand v3
CARBON      = "#101310"
MOSS        = "#BEF54F"
MINERAL     = "#F3F5F1"
STONE       = "#A7ACA5"
STONE_DEEP  = "#5E655C"

# Moss is the ONLY accent. Categories are distinguished by motif geometry and
# depth position, never by inventing new hues - that discipline is what makes
# the set read as one system.

DEPTHS = ["SURFACE", "SHALLOW", "MID", "DEEP", "FOUNDATION"]

CATEGORY_LABEL = {
    "strategy":   "STRATEGY",
    "hiring":     "HIRING & AGENCIES",
    "paid-ads":   "PAID ADS",
    "tracking":   "TRACKING & ATTRIBUTION",
    "seo-growth": "SEO & GROWTH",
}

# slug -> (display title lines, depth layer)
CARDS = {
    "affiliate-program-not-converting":           (["Affiliate program", "not converting"], "MID"),
    "agency-vs-freelancer-vs-inhouse":            (["Agency, freelancer", "or in-house"], "SURFACE"),
    "audit-your-ad-spend":                        (["Is your ad spend", "profitable?"], "FOUNDATION"),
    "break-even-roas":                            (["Break-even", "ROAS"], "FOUNDATION"),
    "b2b-saas-marketing-india":                   (["Marketing for", "Indian SaaS"], "MID"),
    "first-marketing-hire-startup":               (["Your first", "marketing hire"], "SHALLOW"),
    "ga4-conversion-tracking":                    (["GA4 conversion", "tracking"], "FOUNDATION"),
    "google-ads-budget-india-startups":           (["Google Ads", "budget"], "SHALLOW"),
    "google-ads-vs-meta-ads-startup":             (["Google Ads", "vs Meta Ads"], "SURFACE"),
    "marketing-agency-cost-india":                (["What agencies", "cost in India"], "SURFACE"),
    "marketing-agency-for-d2c-brands":            (["Choosing a", "D2C agency"], "SHALLOW"),
    "marketing-attribution-explained-simply":     (["Attribution,", "explained"], "MID"),
    "marketing-foundation-audit":                 (["The foundation", "audit"], "FOUNDATION"),
    "measure-influencer-marketing-roi":           (["Influencer", "marketing ROI"], "MID"),
    "meta-ads-not-converting":                    (["Meta Ads", "not converting?"], "DEEP"),
    "questions-before-hiring-marketing-agency":   (["Before you hire", "an agency"], "SURFACE"),
    "seo-not-bringing-leads":                     (["SEO that", "brings leads"], "MID"),
    "shopify-conversion-tracking-ga4-meta-pixel": (["Shopify conversion", "tracking"], "DEEP"),
    "startup-marketing-budget-india":             (["Startup", "marketing budget"], "SHALLOW"),
    "what-is-performance-marketing":              (["What is performance", "marketing?"], "SURFACE"),
}


# ---------------------------------------------------------------- type as outlines
class Face:
    """A brand woff2 exposed as SVG outlines, so nothing can fall back."""

    def __init__(self, filename):
        self.font = TTFont(os.path.join(FONTS, filename))
        self.upm = self.font["head"].unitsPerEm
        self.cmap = self.font.getBestCmap()
        self.gs = self.font.getGlyphSet()
        self.hmtx = self.font["hmtx"]

    def _gname(self, ch):
        return self.cmap.get(ord(ch))

    def width(self, text, size, tracking=0.0):
        total = 0
        for ch in text:
            g = self._gname(ch)
            if g is None:
                continue
            total += self.hmtx[g][0]
        return total * size / self.upm + tracking * size * max(len(text) - 1, 0)

    def path(self, text, x, y, size, fill, tracking=0.0, opacity=None):
        """Baseline-positioned run of glyph outlines as one <g>."""
        scale = size / self.upm
        out, pen_x = [], x
        for ch in text:
            g = self._gname(ch)
            if g is None:
                pen_x += size * 0.3
                continue
            pen = SVGPathPen(self.gs)
            self.gs[g].draw(pen)
            d = pen.getCommands()
            if d:
                out.append(
                    '<path d="%s" transform="translate(%.2f %.2f) scale(%.5f %.5f)"/>'
                    % (d, pen_x, y, scale, -scale)
                )
            pen_x += self.hmtx[g][0] * scale + tracking * size
        op = "" if opacity is None else ' opacity="%s"' % opacity
        return '<g fill="%s"%s>%s</g>' % (fill, op, "".join(out))


# ---------------------------------------------------------------- motifs
def motif(cat, cx, cy):
    """Restrained line geometry per category. No plants, no soil, no roots."""
    s, m = STONE_DEEP, MOSS
    g = []
    if cat == "strategy":
        # nested frames - the system seen from above
        for i, r in enumerate((150, 104, 58)):
            g.append('<rect x="%.0f" y="%.0f" width="%.0f" height="%.0f" fill="none" stroke="%s" stroke-width="2" opacity="%.2f"/>'
                     % (cx - r, cy - r, r * 2, r * 2, m if i == 2 else s, 1 if i == 2 else 0.55 - i * 0.12))
        g.append('<rect x="%.0f" y="%.0f" width="14" height="14" fill="%s"/>' % (cx - 157, cy - 157, m))
    elif cat == "hiring":
        # three options weighed against each other - horizontal bars, so this
        # never reads as the ascending vertical steps used for seo-growth
        for i, wdt in enumerate((250, 160, 200)):
            on = i == 0
            yy = cy - 86 + i * 78
            g.append('<rect x="%.0f" y="%.0f" width="%.0f" height="46" fill="%s" stroke="%s" stroke-width="2" opacity="%.2f"/>'
                     % (cx - 130, yy, wdt, m if on else "none", m if on else s, 1 if on else 0.6))
        g.append('<line x1="%.0f" y1="%.0f" x2="%.0f" y2="%.0f" stroke="%s" stroke-width="2" opacity="0.5"/>'
                 % (cx - 130, cy - 110, cx - 130, cy + 130, s))
    elif cat == "paid-ads":
        # concentric targeting rings with the spend landing off-centre
        for i, r in enumerate((152, 108, 64)):
            g.append('<circle cx="%.0f" cy="%.0f" r="%.0f" fill="none" stroke="%s" stroke-width="2" opacity="%.2f"/>'
                     % (cx, cy, r, s, 0.6 - i * 0.12))
        g.append('<circle cx="%.0f" cy="%.0f" r="20" fill="%s"/>' % (cx + 74, cy - 46, m))
        g.append('<line x1="%.0f" y1="%.0f" x2="%.0f" y2="%.0f" stroke="%s" stroke-width="2" opacity="0.55"/>'
                 % (cx, cy, cx + 74, cy - 46, m))
    elif cat == "tracking":
        # signal path: nodes and edges, one hop verified
        pts = [(-140, 60), (-40, -70), (60, 40), (150, -60)]
        for i in range(len(pts) - 1):
            g.append('<line x1="%.0f" y1="%.0f" x2="%.0f" y2="%.0f" stroke="%s" stroke-width="2" opacity="0.5"/>'
                     % (cx + pts[i][0], cy + pts[i][1], cx + pts[i + 1][0], cy + pts[i + 1][1], s))
        for i, (dx, dy) in enumerate(pts):
            on = i == 2
            g.append('<circle cx="%.0f" cy="%.0f" r="%.0f" fill="%s" stroke="%s" stroke-width="2"/>'
                     % (cx + dx, cy + dy, 18 if on else 13, m if on else CARBON, m if on else s))
    else:  # seo-growth
        # compounding steps
        for i in range(4):
            hh = 48 + i * 42
            on = i == 3
            g.append('<rect x="%.0f" y="%.0f" width="62" height="%.0f" fill="%s" stroke="%s" stroke-width="2" opacity="%.2f"/>'
                     % (cx - 150 + i * 78, cy + 120 - hh, hh, m if on else "none", m if on else s, 1 if on else 0.55))
        g.append('<line x1="%.0f" y1="%.0f" x2="%.0f" y2="%.0f" stroke="%s" stroke-width="2" opacity="0.5"/>'
                 % (cx - 160, cy + 120, cx + 160, cy + 120, s))
    return "".join(g)


def depth_scale(x, y, active):
    """Five ticks; the article's layer filled in Moss. Mirrors the depth
    language in CLAUDE.md section 4 (SURFACE to FOUNDATION)."""
    g, idx = [], DEPTHS.index(active)
    for i in range(5):
        on = i == idx
        g.append('<rect x="%.0f" y="%.0f" width="%.0f" height="6" fill="%s" opacity="%.2f"/>'
                 % (x + i * 30, y, 22, MOSS if on else STONE_DEEP, 1 if on else 0.5))
    return "".join(g)


def build_svg(slug, cat, title_lines, depth, syne, mono):
    label = CATEGORY_LABEL[cat]
    g = ['<svg xmlns="http://www.w3.org/2000/svg" width="%d" height="%d" viewBox="0 0 %d %d">' % (W, H, W, H)]
    g.append('<rect width="%d" height="%d" fill="%s"/>' % (W, H, CARBON))

    # strata grid - deliberately the same rhythm as the hub's own [data-thumb]
    # placeholder (horizontal quarters, vertical twelfths)
    for i in range(1, 4):
        g.append('<line x1="0" y1="%.0f" x2="%d" y2="%.0f" stroke="%s" stroke-width="1" opacity="0.055"/>'
                 % (H * i / 4, W, H * i / 4, MINERAL))
    for i in range(1, 8):
        g.append('<line x1="%.0f" y1="0" x2="%.0f" y2="%d" stroke="%s" stroke-width="1" opacity="0.04"/>'
                 % (W * i / 8, W * i / 8, H, MINERAL))

    g.append(motif(cat, 930, 315))

    # eyebrow
    g.append(mono.path(label, MARGIN_X, 150, 19, STONE, tracking=0.17))

    # display title - Syne 800, sized so it still reads in the ~240px hub plate
    # Motifs reach as far left as x=770, so the title is capped well short of
    # that. Without this gutter a long line runs straight into the artwork -
    # which it did for "Your first marketing hire" before this guard.
    MOTIF_LEFT, GUTTER = 770, 44
    max_w = MOTIF_LEFT - GUTTER - MARGIN_X
    size = 78 if len(title_lines) <= 2 else 62
    longest = max(syne.width(t, size, -0.02) for t in title_lines)
    while longest > max_w and size > 46:
        size -= 2
        longest = max(syne.width(t, size, -0.02) for t in title_lines)
    y = 150 + 86
    for line in title_lines:
        g.append(syne.path(line, MARGIN_X, y, size, MINERAL, tracking=-0.02))
        y += size * 1.07

    # the single strong Moss moment
    g.append('<rect x="%d" y="%.0f" width="72" height="5" fill="%s"/>' % (MARGIN_X, y - size * 0.55, MOSS))

    # depth scale + its label
    g.append(depth_scale(MARGIN_X, H - MARGIN_Y - 34, depth))
    g.append(mono.path(depth, MARGIN_X, H - MARGIN_Y, 15, STONE_DEEP, tracking=0.2))

    # identifier
    tw = mono.width("TILTH", 16, 0.3)
    g.append(mono.path("TILTH", W - MARGIN_X - tw, H - MARGIN_Y, 16, STONE_DEEP, tracking=0.3))

    g.append("</svg>")
    return "".join(g)


def read_categories():
    s = open(SRC, encoding="utf-8").read()
    rows = re.findall(r'slug: "([a-z0-9-]+)", href: "[^"]+", cat: "([a-z-]+)"', s)
    return {slug: cat for slug, cat in rows}


def main():
    ap = argparse.ArgumentParser()
    ap.add_argument("--svg-only", action="store_true")
    ap.add_argument("--slug", help="render a single slug")
    args = ap.parse_args()

    syne = Face("syne-800-normal.woff2")
    mono = Face("ibm-plex-mono-500-normal.woff2")
    cats = read_categories()

    # The cover registry must not drift from the Insights source. An article
    # with no CARDS row would ship with a stale or missing cover, and a CARDS
    # row for a deleted article would quietly keep producing an orphan asset.
    # Both are hard failures, so a broken registry can never be mistaken for a
    # successful run.
    no_card = sorted(set(cats) - set(CARDS))
    no_article = sorted(set(CARDS) - set(cats))
    if no_card or no_article:
        print("ERROR: the cover registry and src/insights-content.mjs disagree.", file=sys.stderr)
        for slug in no_card:
            print("  article has no CARDS entry : %s" % slug, file=sys.stderr)
        for slug in no_article:
            print("  CARDS entry has no article : %s" % slug, file=sys.stderr)
        print("\nNothing was generated. Reconcile CARDS with the Insights source "
              "and run again.", file=sys.stderr)
        sys.exit(1)

    if args.slug:
        if args.slug not in cats:
            print("ERROR: unknown slug %r - not an article in src/insights-content.mjs."
                  % args.slug, file=sys.stderr)
            sys.exit(1)
        if args.slug not in CARDS:
            print("ERROR: slug %r has no CARDS entry." % args.slug, file=sys.stderr)
            sys.exit(1)

    tmp = tempfile.mkdtemp(prefix="tilth-covers-")
    todo = [args.slug] if args.slug else sorted(CARDS)
    made = []
    for slug in todo:
        lines, depth = CARDS[slug]
        cat = cats.get(slug)
        if cat is None:
            # Unreachable given the guards above; kept so a future refactor
            # cannot quietly reintroduce a skip.
            print("ERROR: could not resolve a category for %r." % slug, file=sys.stderr)
            sys.exit(1)
        svg = build_svg(slug, cat, lines, depth, syne, mono)
        p = os.path.join(tmp, slug + ".svg")
        open(p, "w", encoding="utf-8").write(svg)
        made.append((slug, p))
    print("SVGs written: %d -> %s" % (len(made), tmp))

    if args.svg_only:
        return

    manifest = os.path.join(tmp, "_manifest.json")
    open(manifest, "w", encoding="utf-8").write(json.dumps({s: p for s, p in made}))
    node = (
        "const sharp=require('sharp'),fs=require('fs'),path=require('path');"
        "const m=JSON.parse(fs.readFileSync(process.argv[1],'utf8'));"
        "const out=process.argv[2];"
        "(async()=>{for(const [slug,p] of Object.entries(m)){"
        "await sharp(p,{density:144}).resize(%d,%d,{fit:'fill'})"
        ".webp({quality:88,effort:6}).toFile(path.join(out,slug+'.webp'));"
        "console.log('  '+slug);}})();" % (W, H)
    )
    r = subprocess.run(["node", "-e", node, manifest, OUT], cwd=HERE,
                       capture_output=True, text=True)
    sys.stdout.write(r.stdout)
    if r.returncode != 0:
        sys.stderr.write(r.stderr)
        sys.exit(1)
    print("WebP written to %s" % OUT)


if __name__ == "__main__":
    main()

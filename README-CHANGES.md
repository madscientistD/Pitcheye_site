# PitchEye site: what changed and what to confirm

## Upload
Upload the entire folder to the web root of pitcheye.ai and keep the folder structure as it is:
`index.html`, `about.html`, `contact.html`, `industries/`, `solutions/`, `css/`, `js/`, `images/`, plus `robots.txt`, `sitemap.xml`, `llms.txt` and the favicon files.

## Fixes
- All 11 pages now use one template and one stylesheet. Previously 8 of the pages used class names that `styles.css` didn't define, so they rendered mostly unstyled.
- Added the missing `js/main.js`. It handles the mobile menu, the Industries and Solutions dropdowns, and the demo form.
- The demo form opens the visitor's email app with a pre-filled request to info@pitcheye.ai. Previously it submitted to `#`, so every request was lost.
- Removed dead `#` links. Fixed the "Irigation" typo and the About page's "form below" line, which pointed to a form that didn't exist. Renamed `index (1).html` to `index.html`.
- Accuracy wording is now consistently "sub-centimeter". One page had said "millimeter".

## SEO
- Every page has a unique title, a meta description, a canonical URL, Open Graph and Twitter tags, a favicon, and exactly one keyword-focused H1.
- Structured data (JSON-LD): Organization/ProfessionalService on the site, Service schema on each industry and solution page, plus BreadcrumbList, FAQPage, AboutPage and ContactPage.
- Added `sitemap.xml` and `robots.txt`. Breadcrumbs, a Related Services section on each page and the full footer give the site strong internal linking.
- Local signals: Meridian, Idaho appears consistently in the header badge, footer, schema and copy.
- Accessibility: skip link, keyboard-usable menus, ARIA states, form labels and autocomplete, visible focus styles, reduced-motion support.

## AI search (AIO / GEO)
- Every page opens with a one-paragraph answer of what PitchEye does on that page, written so AI tools can quote it directly.
- Each page has a visible FAQ (25 Q&As across the site) with matching FAQPage schema.
- Added `llms.txt`, a plain-language summary of the company and links for AI assistants.
- `robots.txt` explicitly allows the major AI crawlers: GPTBot, ClaudeBot, PerplexityBot and Google-Extended.

## Marketing
- The home page has a proof bar (80% / sub-cm / 24 hrs / FAA), a How It Works section, a clearer lifecycle story, and a call to action in the hero, on every page and in the nav.
- The About page was rewritten to match the multi-industry story while keeping the golf-course origin as the founding story.
- The contact page now has a "What to expect" section to make submitting feel lower-risk, and the form fires a `generate_lead` event if Google Analytics is added later.

## Confirm with PitchEye before launch
1. **Claims kept as supplied:** 80% faster inspections, sub-centimeter accuracy, 24-hour turnaround, bank-level encryption and compliance.
2. **Service area:** the site says "Idaho and the Pacific Northwest".
3. **Response time:** the contact page promises a reply "usually within one business day".
4. **New service cards I added** (remove any they don't offer): Vegetation Management and Storm Damage Assessment (Utilities), 3D Property Models and Marketing Imagery (Commercial Real Estate), plus thermal imaging mentions.
5. **Social links:** linkedin.com/company/pitcheye and twitter.com/pitcheye are listed in the footer and schema. Remove any that don't exist.
6. **The logo** is still the placeholder hexagon mark the other AI created. Swap in the real logo (`favicon.svg`, `images/logo.png`) if one exists.
7. **After launch:** submit the sitemap in Google Search Console and Bing Webmaster Tools, create or claim a Google Business Profile for Meridian, and add real project photos, case studies and testimonials when available. Those are the biggest remaining ranking and conversion levers.

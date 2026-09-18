# Mahlogonolo'Grill Website

A multi-page website for Mahlogonolo'Grill, a local grill business based in
Lebowakgomo, Polokwane. The site was built for **WEDE5020 (Web Development —
Introduction)** as the Project Portfolio of Evidence.

## Description

Mahlogonolo'Grill serves grilled meat, chicken, burgers, wors, chips and
delivers to selected areas. The website gives customers an easy way to learn
about the business, view the menu and prices, and submit an enquiry or order.

## Features

- Six pages: Home, Services, About, Contact, Pricing, and Enquiry.
- Consistent header (logo + navigation) and footer across every page.
- A menu/services page listing all food and delivery offerings, with photos.
- A pricing page with a meal price table and a delivery-fee-by-area table.
- A contact page with phone, WhatsApp, email and address details.
- An enquiry form for customers to submit orders/questions online.
- External CSS stylesheet with a warm, food-themed colour palette.
- Fully responsive layout: desktop, tablet, and mobile breakpoints.

## Technologies Used

- HTML5 (semantic elements: `header`, `nav`, `main`, `section`, `footer`)
- CSS3 (Flexbox, CSS Grid, media queries, custom properties)
- Google Fonts (Zilla Slab for headings, Mulish for body text)
- Git & GitHub for version control

## File Structure

```
website/
└── Mahlogonolo'Grill/
    ├── index.html          Home page
    ├── about.html          About us page
    ├── services.html       Menu / services page
    ├── contact.html        Contact details page
    ├── pricing.html        Pricing tables page
    ├── enquiry.html        Customer enquiry form
    ├── style.css           External stylesheet (all pages)
    ├── _images/            Logo and photography used across the site
    └── README.md           This file
```

## Changelog

### Part 1 corrective actions (based on formative feedback, 74/100)

The following corrections address the specific criteria marked down in the
Part 1 feedback:

- **HTML Tags for Layout (was 5/10):** Replaced generic structure with
  proper HTML5 semantic elements — `<header>` (logo + nav), `<main>`
  (page content), and `<footer>` (copyright) — on every page, instead of
  unstructured content directly inside `<body>`.
- **Comments (was 0/5):** Added HTML comments throughout every page marking
  the header, navigation, main content sections, image credits, and footer,
  so the structure and purpose of each part of the code is documented.
- **README (was 2/5):** Rewrote this document to include a full project
  description, feature list, technologies used, file structure, changelog,
  and properly formatted references.
- **Changelog (was 0/5):** Added this Changelog section, documenting both
  the Part 1 corrections above and the Part 2 CSS/responsive work below.
- **References (was 2/5):** Rebuilt the reference list below in Harvard
  style, crediting every external resource and photograph used.

> Note: three criteria from the Part 1 feedback — Wireframes (1/2),
> Timeline (0/2), and Two Proposals (3/5) — relate to the written project
> proposal document rather than the website code, and are not addressed by
> this repository.

Also fixed while correcting the above:
- Broken `<nav>` markup on every page (the navigation list sat outside the
  `<nav>` element, with a stray unmatched closing tag).
- `arial-label` typo corrected to `aria-label` on every page.
- `about.html` was missing closing `</body></html>` tags and a footer.
- `enquiry.html`: the form was outside `<body>` and had a duplicate closing
  `</form>` tag; moved inside `<main>` and de-duplicated.
- `enquiry.html`: fixed a malformed `name` attribute on the Full Name input.
- `services.html`: moved gallery images out of the `<ul>` (images placed
  directly inside a list, not inside an `<li>`, are invalid HTML) into a
  separate gallery `<div>`.

### Part 2 — CSS Styling & Responsive Design

- Created an external stylesheet, `style.css`, linked in the `<head>` of
  every page.
- Established a base style: font family, colour palette, and a CSS reset
  applied site-wide.
- Applied typography styles (`font-family`, `font-size`, `font-weight`,
  `line-height`, `letter-spacing`) to headings and body text.
- Built the desktop layout with Flexbox (header/nav) and CSS Grid (menu
  list, photo gallery, enquiry form).
- Applied visual styling (`color`, `background-color`, `border`,
  `box-shadow`) and interactive states (`:hover`, `:focus`, `:active`) to
  nav links, the call-to-action button, and the enquiry form.
- Implemented responsive design with two breakpoints (900px tablet, 600px
  mobile), switching multi-column layouts to a single column on smaller
  screens.
- Used relative units (`rem`, `em`, `%`) instead of fixed pixels for font
  sizes, spacing and widths.
- Made all images responsive (`max-width: 100%; height: auto;`).
- Wrapped both pricing tables in a scrollable container so they don't
  break the layout on narrow screens.

## Screenshot Evidence

### Desktop


![Desktop view](_images/screenshot-desktop.png)



### Tablet


![Tablet view](_images/screenshot-tablet.png)



### Mobile


![Mobile view](_images/screenshot-mobile.png)

## References

MDN Web Docs (2026) *CSS Flexible Box Layout*. Mozilla. Available at:
https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_flexible_box_layout
(Accessed: [add date]).

MDN Web Docs (2026) *CSS Grid Layout*. Mozilla. Available at:
https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_grid_layout
(Accessed: [add date]).

MDN Web Docs (2026) *Using media queries*. Mozilla. Available at:
https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_media_queries/Using_media_queries
(Accessed: [add date]).

Google Fonts (2026) *Zilla Slab*. Available at:
https://fonts.google.com/specimen/Zilla+Slab (Accessed: [18 september 2026]).

Google Fonts (2026) *Mulish*. Available at:
https://fonts.google.com/specimen/Mulish (Accessed: [18 september 2026]).

Connor, M. (n.d.) *Untitled photograph*. Unsplash. Available at:
https://unsplash.com/photos/9Qs_9n2oSJo (Accessed: [18 september 2026]).

Mucha, M. (n.d.) *Untitled photograph*. Unsplash. Available at:
https://unsplash.com/photos/a74X5kHDs20 (Accessed: [18 september 2026]).

A, A. (n.d.) *Untitled photograph*. Unsplash. Available at:
https://unsplash.com/photos/j03VKw-IflE (Accessed: [18 september 2026]).

SK (n.d.) *Untitled photograph*. Unsplash. Available at:
https://unsplash.com/photos/uVPV_nV17Tw (Accessed: [18 september 2026]).

Ambitious Studio | Rick Barrett (n.d.) *Untitled photograph*. Unsplash.
Available at: https://unsplash.com/photos/xmibn7mzXV0
(Accessed: [18 september 2026]).

Jordan (n.d.) *Untitled photograph*. Unsplash. Available at:
https://unsplash.com/photos/N1NvJoqMg9g (Accessed: [18 september 2026]).

> Double-check each Unsplash link opens the correct photo before
> submitting, and fill in the actual date you accessed each source —
> your lecturer will check these are accurate and correctly formatted.

## Author

Mahlogonolo Mphahlele
# Nischhal Portfolio 2026

A cinematic dark-theme personal portfolio website for **Nischhal Raj Subba**, built as a static front-end experience with Vite, TypeScript, handcrafted CSS, and GSAP-powered interactions.

The project presents Nischhal as a product designer focused on financial products, fintech, banking, crypto, Web3, website design, product design, branding, and strategy. The current codebase is a static multi-page portfolio shell with editorial layout, custom cursor behavior, hover reveals, pinned project storytelling, animated marquees, and section-based motion.

## Project Overview

This repository is designed as a personal portfolio direction for 2026. It combines:

- bold editorial typography
- dark premium visual styling
- grid-based composition
- motion-heavy storytelling
- product-design positioning
- project and testimonial sections
- custom hover and cursor treatments
- GSAP + ScrollTrigger animation patterns

The intent is to create a portfolio that feels closer to a crafted design studio website than a basic resume site.

## Current Pages and Experience

The visible entry page includes the following major sections:

| Section | Purpose |
|---|---|
| Header | Logo, social links, page navigation, and contact CTA |
| Hero | Primary positioning around design for finance, fintech, banking, crypto, and Web3 |
| Intro | Short product-design philosophy and industry positioning |
| Company Logos | Visual area for showing companies or industries worked with |
| Awards | Award-style credibility area for recognition highlights |
| Angled Marquee | Motion-led service/industry branding strip |
| Projects | Pinned project presentation with dynamic title, image, year, role, and description |
| Testimonials | Social proof section with hover-aware cards |
| Footer | Contact CTA, philosophy statement, email marquee, and location |

The source also references additional pages:

- `about.html`
- `work.html`

These are part of the intended portfolio navigation model and can be expanded into full pages as the portfolio content matures.

## Tech Stack

| Area | Technology |
|---|---|
| Build tool | Vite |
| Language/tooling | TypeScript |
| Styling | Custom CSS |
| Animation | GSAP + ScrollTrigger |
| Structure | Static HTML pages |
| Assets | Local images, SVGs, and placeholders |

## Repository Structure

```text
.
├── assets/
│   ├── styles.css        # Main visual system and responsive styling
│   ├── main.js           # Core interaction logic
│   ├── animations.js     # GSAP / ScrollTrigger animation behavior
│   ├── hero-portrait.jpg # Hero image asset
│   └── awards/           # Award/logo SVG assets
├── index.html            # Main portfolio landing page
├── package.json          # Vite scripts and project metadata
├── tsconfig.json         # TypeScript configuration
└── README.md             # Project documentation
```

## Design Direction

The website follows a premium dark editorial direction inspired by refined designer and studio portfolios.

### Visual Principles

- Use strong contrast between dark backgrounds, muted body text, and selective accent color.
- Keep typography large, confident, and structured around uppercase headings.
- Use spacious grid-based composition instead of crowded card layouts.
- Treat motion as part of the brand experience, not only decoration.
- Preserve a polished portfolio feel across desktop and responsive layouts.

### Interaction Principles

- Cursor dot and cursor circle create a custom interactive layer.
- Hover reveal container supports richer project/image previews.
- Section reveals should feel smooth and intentional.
- Pinned project interactions should guide attention from project name to image to details.
- Reduced-motion support should be respected when expanding the codebase.

## Key UI Features

### Custom Cursor Layer

The page includes a custom cursor dot and cursor circle to create a premium interactive feel. This works best on desktop devices and should be disabled or simplified for touch devices.

### Hero Slider Text

The hero headline includes a vertical changing keyword area:

- Banking
- Crypto
- Fintech
- Web3

This helps connect the portfolio positioning to finance-related product work.

### Pinned Project Section

The project section is structured for a scroll-led showcase pattern, with:

- current project index
- total project count
- progress line
- dynamic project title
- dynamic project image
- year, role, and description blocks
- CTA to view all projects

### Motion Marquees

The angled marquee section creates energy between the intro and the project showcase. It communicates expertise areas such as:

- Strategy
- Product Design
- Fintech
- Web3
- Banking

## Getting Started

### Requirements

- Node.js
- npm

### Install Dependencies

```bash
npm install
```

### Start Development Server

```bash
npm run dev
```

### Build for Production

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

## Available Scripts

| Command | Purpose |
|---|---|
| `npm run dev` | Starts the Vite development server |
| `npm run build` | Builds the project for production |
| `npm run preview` | Previews the production build locally |

## Content Notes

Some current content appears to be placeholder or inspiration-stage copy. Before using this portfolio publicly, review and replace:

- placeholder company logos
- placeholder social links
- placeholder email addresses
- imported/inspiration award claims
- imported/inspiration testimonial names or quotes
- generic project images
- any copied reference text that does not reflect Nischhal’s real work

This is important because a portfolio README and live website should accurately represent real work, real contributions, and verified achievements.

## Recommended Next Steps

1. Replace all placeholder images with real project visuals.
2. Connect social links to actual LinkedIn, Dribbble, GitHub, or portfolio URLs.
3. Replace placeholder testimonials with approved real testimonials.
4. Create detailed project pages for selected case studies.
5. Add proper `alt` text for every image.
6. Add reduced-motion handling for GSAP-heavy effects.
7. Improve responsive behavior for custom cursor and pinned sections.
8. Add SEO metadata for title, description, Open Graph, and Twitter cards.
9. Add a sitemap and robots file if deploying as a public portfolio.
10. Audit copy to ensure every claim is accurate and portfolio-safe.

## Accessibility Checklist

- Use semantic landmarks for header, main, sections, and footer.
- Keep keyboard focus states visible.
- Avoid hiding important content behind hover-only behavior.
- Respect `prefers-reduced-motion` for animation-heavy sections.
- Keep contrast WCAG AA-compliant.
- Use descriptive `alt` text instead of generic labels like `Background` or `Avatar`.

## Deployment

This project can be deployed on any static hosting platform that supports Vite builds, including:

- Vercel
- Netlify
- Cloudflare Pages
- GitHub Pages

Typical build settings:

```text
Build command: npm run build
Output directory: dist
```

## Maintainer

**Nischhal Raj Subba**  
Product Designer based in Nepal  
GitHub: [@Nischhalsubba](https://github.com/Nischhalsubba)

## License and Usage

This repository is intended for personal portfolio, learning, and demonstration purposes. The design, content, and assets should not be reused or redistributed without permission from the maintainer.

# Mohammed Anas — Portfolio

A single-page, recruiter-focused developer portfolio. Built as a fast, accessible, content-driven React SPA — no CMS, no backend for content, just structured data files that render into a polished UI.

**Live site:** TODO — add deployed URL
**Repository:** TODO — add GitHub repo URL

---

## Tech Stack

| Layer | Choice | Notes |
|---|---|---|
| Framework | [React 18](https://react.dev) | Functional components + hooks only |
| Build tool | [Vite](https://vitejs.dev) | Dev server + production bundling |
| Styling | [Tailwind CSS](https://tailwindcss.com) | Utility-first; theme values driven by CSS custom properties |
| Design tokens | CSS custom properties (`src/styles/tokens.css`) | Single source of truth for colors, nav height, spacing — consumed by Tailwind config |
| Icons | [lucide-react](https://lucide.dev) | Tree-shakeable icon set used across nav, buttons, socials, carousel |
| Fonts | [Fontsource](https://fontsource.org) — Fraunces (display) + Inter (body) | Self-hosted via npm packages, no external font requests (better performance + privacy) |
| Contact form | [Web3Forms](https://web3forms.com) | Static-site-friendly form backend, no custom API needed |
| Deployment | [Vercel](https://vercel.com) | Live production deployment; auto-detects Vite, zero-config build |

No state management library, no router (single page with in-page anchor navigation + scroll-spy), no UI component library — kept intentionally lean for a portfolio of this scope.

---

## Project Structure

```
src/
├── App.jsx                      # Page composition — assembles all sections
├── main.jsx                     # React root / entry point
├── index.css                    # Font imports, Tailwind directives, base layer
│
├── components/
│   ├── layout/
│   │   ├── Navbar.jsx            # Sticky nav, scroll-spy active state, mobile menu
│   │   └── Footer.jsx
│   │
│   ├── sections/                 # One component per page section
│   │   ├── Hero.jsx
│   │   ├── About.jsx
│   │   ├── Skills.jsx
│   │   ├── Experience.jsx
│   │   ├── ProjectsGrid.jsx
│   │   └── Contact.jsx
│   │
│   ├── project/                  # Project showcase subsystem
│   │   ├── ProjectCard.jsx       # Grid card, opens overlay on click
│   │   ├── ProjectOverlay.jsx    # Full case-study modal (overview, contribution, stack, features, challenges)
│   │   └── ImageCarousel.jsx     # Multi-image viewer inside the overlay
│   │
│   └── ui/                       # Generic, reusable primitives
│       ├── Container.jsx         # Max-width + padding wrapper
│       ├── SectionHeading.jsx    # Eyebrow + title + optional subtitle
│       ├── Button.jsx            # Renders <a> or <button> depending on props
│       ├── Badge.jsx             # Pill used for tech stack tags
│       └── IconLink.jsx          # Circular icon button for social links
│
├── data/                          # ← All editable content lives here
│   ├── profile.js                 # Name, title, tagline, avatar, resume path
│   ├── about.js                   # About paragraphs + quick facts
│   ├── skills.js                  # Skill groups (category → items)
│   ├── experience.js              # Work experience entries
│   ├── education.js               # Education entries
│   ├── projects.js                # Full project case studies
│   └── social.js                  # GitHub / LinkedIn / email links
│
├── hooks/
│   ├── useScrollSpy.js            # IntersectionObserver-based active-section tracking
│   ├── useLockBodyScroll.js       # Locks page scroll while the project overlay is open
│   └── useFocusTrap.js            # Traps Tab focus inside the overlay, closes on Escape
│
└── styles/
    └── tokens.css                 # CSS custom properties: color palette, nav height, spacing
```

### Why this structure

- **Content lives in `src/data/*.js`, not in components.** Updating your bio, adding a project, or fixing a date never means touching JSX — just edit the relevant data file. Each file has a JSDoc `@typedef` at the top documenting its shape.
- **`ui/` vs `sections/` vs `project/`** separates concerns by reuse scope: `ui/` components are generic and used everywhere; `sections/` components are one-per-page-section and own layout; `project/` components are specific to the project showcase feature.
- **Design tokens are centralized** in `tokens.css` as CSS custom properties, so color/spacing changes propagate everywhere without hunting through Tailwind classes.

---

## Key Features

- **Single-page layout** with sticky nav, smooth-scroll anchor links, and scroll-spy active-state highlighting (`useScrollSpy`)
- **Project case-study overlay** — each project opens into a full modal with overview, personal contribution, tech stack, features, and challenges, plus an image carousel for multiple screenshots
- **Accessible by default**: semantic landmarks, skip-to-content link, visible focus rings, `aria-current`/`aria-expanded`/`aria-modal` used correctly, focus trap + Escape-to-close on the project modal, keyboard-navigable mobile menu
- **Responsive grid** for the projects section with a mobile-capped view and a "See all projects" expand toggle
- **Contact form** with inline submit states (idle / submitting / success / error) and no full-page reload
- **Reduced-motion support** — animations and smooth scroll are disabled site-wide when `prefers-reduced-motion` is set

---

## Getting Started

```bash
# install dependencies
npm install

# start local dev server
npm run dev

# production build
npm run build

# preview the production build locally
npm run preview
```

## Editing Content

All personal content is centralized under `src/data/`. No JSX changes are needed for routine updates:

| To change... | Edit... |
|---|---|
| Name, title, tagline, resume, photo | `data/profile.js` |
| About text and quick facts | `data/about.js` |
| Skills list | `data/skills.js` |
| Work history | `data/experience.js` |
| Education | `data/education.js` |
| Projects (overview, stack, screenshots, links) | `data/projects.js` |
| Social/contact links | `data/social.js` |

Static assets (avatar, resume PDF, project screenshots) go under `/public`.

## Contact Form Configuration

The contact form in `src/components/sections/Contact.jsx` submits via [Web3Forms](https://web3forms.com), authenticated with an access key.

The key is kept out of source control and supplied as an environment variable:

```
VITE_WEB3FORMS_ACCESS_KEY=your-access-key-here
```

- Locally: add it to a `.env` file at the project root (already gitignored).
- On Vercel: set it under Project Settings → Environment Variables, scoped to **Production**, **Preview**, and **Development** so it works in every deploy context.

---

## Deployment

Deployed on **Vercel**, connected to the GitHub repository for automatic deploys on push.

- Framework preset: Vite (auto-detected, default build/output/install commands).
- `VITE_WEB3FORMS_ACCESS_KEY` set in Project Settings → Environment Variables (Production, Preview, Development).
- Pushes to the main branch trigger a new production deployment automatically; pull requests get their own preview deployments.

---

## Performance & Accessibility Notes

- Fonts are self-hosted via Fontsource (no third-party font requests).
- Images use `loading="lazy"` and explicit `width`/`height` to reduce layout shift.
- No unused UI/animation libraries — interactions are handled with plain CSS transitions and native browser APIs (`IntersectionObserver`).
- Recommended before go-live: run a Lighthouse pass (Performance / Accessibility / SEO / Best Practices) and address any flagged issues.

---

## Roadmap / Possible Future Upgrades

- Additional project case studies as new work is completed
- Real project screenshots to replace placeholder images
- SEO metadata pass (meta description, Open Graph tags, favicon/social preview image)
- Optional: blog or writing section if desired later

---

## License

TODO — add a license if you want the repo to be publicly reusable (e.g. MIT), or state "All rights reserved" if not.

## Author

**Mohammed Anas** — Full Stack Developer
- GitHub: [github.com/anasPalakkal](https://github.com/anasPalakkal)
- LinkedIn: [linkedin.com/in/anaspalakkal](https://www.linkedin.com/in/anaspalakkal/)
- Email: anaspalakkalwork@gmail.com
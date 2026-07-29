# Mohammed Anas — Portfolio

Single-page React + Tailwind portfolio. Smooth-scroll sections, a full-screen
project case-study overlay, no backend, no router.

## Stack

- Vite + React (JavaScript, no TypeScript)
- Tailwind CSS, theme tokens sourced from CSS custom properties (`src/styles/tokens.css`)
- Fraunces (display) + Inter (body), self-hosted via `@fontsource`
- lucide-react for icons
- Contact form posts to a Formspree-style endpoint (no custom backend)

## Getting started

```bash
npm install
npm run dev
```

Build for production:

```bash
npm run build
npm run preview
```

## Adding your real content

All real content lives in `src/data/` — components never hold hardcoded copy.
Search the codebase for `TODO` to find every placeholder that needs a real value:

| File | What to fill in |
|---|---|
| `src/data/profile.js` | Name, title, tagline, location, resume path |
| `src/data/social.js` | GitHub, LinkedIn, email |
| `src/data/about.js` | Bio paragraphs, quick facts |
| `src/data/skills.js` | Adjust categories/skills as needed |
| `src/data/experience.js` | Internship details |
| `src/data/education.js` | Degree/institution |
| `src/data/projects.js` | Full project case studies |

Assets to add manually (see `public/images/README.md`):
- `public/images/avatar.jpg`
- `public/images/projects/*.jpg`
- `public/resume.pdf`
- `public/og-image.png` (1200×630, used for link previews)

## Contact form

Sign up at [formspree.io](https://formspree.io) (or a similar free form
endpoint service), create a form, and replace `FORM_ENDPOINT` in
`src/components/sections/Contact.jsx` with your real endpoint URL.

## SEO

Static metadata (title, description, Open Graph, JSON-LD `Person` schema)
lives in `index.html`. Update the placeholder domain (`your-domain-here.com`)
and social URLs once you have a real domain and profile links.

## Deployment

Built for Vercel: connect the GitHub repo, framework preset "Vite", default
build command (`npm run build`) and output directory (`dist`) — no
additional configuration needed.

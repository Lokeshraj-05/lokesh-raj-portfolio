# Lokesh Raj J — Portfolio

A production-ready personal portfolio built with Next.js 15 (App Router), TypeScript, Tailwind CSS, and Framer Motion.

## Getting started

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Replace with your own assets (no code changes needed)

| File | Purpose |
|---|---|
| `public/profile.jpg` | Your circular profile photo shown in the Hero section (square image, 500x500px+ recommended) |
| `public/resume.pdf` | Your resume — powers both the "View Resume" and "Download Resume" buttons |
| `public/og-image.jpg` | Social share preview image (1200x630) |
| `public/favicon.ico` | Browser tab icon |

Just drop new files in with the same names and everything updates automatically.

## Edit your content

All personal information, skills, education, experience, projects, and publication data live in one place:

```
lib/data.ts
```

Edit that file to update text anywhere on the site.

## Project structure

```
app/
  layout.tsx        # Root layout, fonts, SEO metadata
  page.tsx           # Assembles all sections
  globals.css        # Design tokens, glass effects, utilities
components/
  Loader.tsx          # Animated loading screen
  CustomCursor.tsx     # Interactive cursor (desktop only)
  ScrollProgress.tsx   # Top scroll progress bar
  NeuralBackground.tsx # Neural-network style canvas background
  Navbar.tsx
  Hero.tsx
  ProfilePicture.tsx    # Standalone animated avatar component
  About.tsx
  Education.tsx
  Skills.tsx
  Experience.tsx
  Projects.tsx
  Publications.tsx
  Resume.tsx
  Contact.tsx
  Footer.tsx
  Reveal.tsx            # Reusable scroll-reveal wrapper
  SectionHeading.tsx
lib/
  data.ts             # All personal content in one file
```

## Build for production

```bash
npm run build
npm run start
```

## Notes

- Dark theme only, tuned around the primary/secondary/accent palette in `tailwind.config.ts`.
- Cursor and particle background automatically disable on touch devices and respect `prefers-reduced-motion`.
- Deploy easily on Vercel: push to a GitHub repo and import it at vercel.com/new.

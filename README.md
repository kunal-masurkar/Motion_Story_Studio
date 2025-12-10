# Motion Story Studio

A motion-first landing page built with Next.js App Router, Tailwind v4, and Framer Motion. It pairs smooth Lenis scrolling with cinematic gradients, split-text reveals, tilt interactions, and a staged loading screen for product storytelling.

## Features
- Smooth scrolling via Lenis with framerate-friendly rAF loop (`SmoothScrollProvider`)
- Hero tilt spotlight, split-text reveals, and glassmorphic CTA stack
- In-view staggered grids for features and testimonials
- Showcase section ready for loops/mockups plus pinned story chapters
- Motion-aware loading overlay with rotating status messages

## Tech Stack
- Next.js 16 (App Router) + React 19
- Tailwind CSS v4
- Framer Motion for scroll/hover/entrance animation
- Lenis for smooth scrolling
- TypeScript by default

## Getting Started
Prereqs: Node 18+ and npm (or pnpm/yarn/bun).

Install dependencies:
```bash
npm install
```

Run the dev server:
```bash
npm run dev
```
Then open http://localhost:3000.

Create a production build:
```bash
npm run build
npm start
```

Lint the project:
```bash
npm run lint
```

## Project Structure (high level)
- `src/app/layout.tsx` – font setup (Geist), global styles, Lenis provider
- `src/app/page.tsx` – page shell, loading gate, section assembly
- `src/components/*` – motion primitives (`FadeInWhenVisible`, `SplitText`, `TiltCard`) and sections (`Hero`, `StoryChapters`, `Features`, `Showcase`, `Testimonials`, `CTA`, `Navbar`, `LoadingScreen`)
- `public/` – SVG assets

## Customization Notes
- Update copy/links inside the section components to match your product story.
- Replace `Showcase` media with your own loops/mocks; adjust gradients and speeds via Framer Motion variants.
- Tailwind tokens live inline (Tailwind v4); tweak colors/spacing directly in classNames.

## Deployment
Deploy anywhere that supports Next.js (Vercel recommended). Ensure the build step runs `npm run build` and the start command is `npm start` (or the host’s Next.js adapter).

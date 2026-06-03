# Aliore Portfolio — Ali Gholami

Personal portfolio with 3D interactions, bilingual support (EN/FA/RTL), and smooth scroll.

## Stack
- Next.js 15 (App Router)
- TypeScript
- Tailwind CSS
- Framer Motion
- React Three Fiber + Drei (3D)
- Lenis (smooth scroll)
- next-intl (EN + FA with RTL)

## 3D Features
- **Hero**: Interactive metallic orb — reacts to mouse cursor in real time, with orbiting ring and particle cloud
- **Particle Field**: 2800-particle background with scroll parallax (fixed, global)
- **About**: Floating wireframe geometries (icosahedron + octahedron)
- **Skills**: Draggable 3D tag cloud — hold and drag to rotate all skills in 3D space

## Setup

```bash
npm install
npm run dev
# → http://localhost:3000   (redirects to /en)
# → http://localhost:3000/fa (Persian, RTL)
```

## Deploy on Vercel

```bash
npm i -g vercel
vercel
```

Assign domain `aliore.dev` in the Vercel dashboard.

## Files to update before going live

| File | What to change |
|------|----------------|
| `lib/data.ts` | Your real projects, links, email |
| `messages/en.json` | English copy |
| `messages/fa.json` | Persian copy |
| `public/resume.pdf` | Drop your CV here |
| `public/og-image.png` | 1200×630 social preview image |

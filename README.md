# Manav Patel — 3D Portfolio (Next.js + R3F)

Apple‑like polish with interactive 3D, smooth motion, and elegant sections.

## Quick Start

```bash
# 1) Install deps
npm i

# 2) Run locally
npm run dev

# 3) Build
npm run build && npm start
```

## Deploy to Vercel
1. Push this folder to a new GitHub repo.
2. In Vercel, **New Project → Import** the repo.
3. Framework preset: **Next.js**. No extra config needed.
4. Click **Deploy**.

## Customize
- Edit copy in `app/page.tsx` (About, Experience, Projects, Contact).
- 3D scene in `components/ThreeScene.tsx`. Replace `TorusKnot` with your model if desired (GLTF/GLB using `<Suspense>` + `useGLTF`). 
- Colors & fonts in `tailwind.config.ts`.

---

**Tech**: Next.js 14 (App Router), Tailwind, Framer Motion, React Three Fiber + Drei, Lenis (optional).


# Morphic — landing page

A dark, video-backed marketing page for an AI 3D-model-generation product.
Built on Next.js 15 (App Router), Tailwind, shadcn/ui, and Framer Motion.

## Run it

```bash
pnpm install
pnpm exec next dev -p 5179
```

Then open http://localhost:5179.

## Where things live

| Path | What it is |
|---|---|
| `src/constants/content.ts` | **All site copy.** Headlines, steps, features, reviews, FAQ, footer. Edit here, not in components. |
| `src/components/marketing/` | One file per page section, composed in `src/app/(marketing)/page.tsx`. |
| `src/styles/globals.css` | Design tokens, the `mesh-drift` hero backdrop, marquee and grain animations. |
| `public/videos/` | Drop `.mp4` files here — see the README in that folder for names and encoding. |

## The video background

The hero and the four feature panels each render an `autoplay loop muted playsInline`
`<video>`. Every one sits on top of an animated CSS gradient (`.mesh-drift`), and the
video only fades in on `canplay`. So a missing or slow `.mp4` degrades to a moving
gradient rather than a black rectangle — the page never depends on the asset existing.

Add your own footage to `public/videos/` to switch the videos on. Use your own or
properly licensed clips.

## Before going live

- **Replace the testimonials.** `REVIEWS` in `src/constants/content.ts` is placeholder
  copy written to fill the layout. Publishing invented quotes attributed to named
  people would misrepresent real endorsements — swap in real, attributable ones.
- Replace the placeholder logo names in `LOGOS` with brands you can actually claim.
- Rename the brand: `Morphic` appears in `navbar.tsx`, `footer.tsx`, `community.tsx`,
  and `src/utils/metadata.ts`.

## Licence

MIT. The project scaffolding — the shadcn/ui component set, `Container`, the metadata
helper, and the Tailwind config — originates from Shreyas Sihasane's Vetra template
(MIT), so `LICENSE` and its copyright notice are retained. Page sections and copy in
`src/components/marketing/` and `src/constants/content.ts` are original to this repo.

# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev       # start dev server (astro dev) at localhost:4321
npm run build     # production build to ./dist
npm run preview   # serve the built ./dist locally
```

There is no test suite and no lint script. Prettier (with `prettier-plugin-astro`) is the only formatter available. Use `npm run build` as the correctness check — Astro type-checks `.astro` files and fails the build on template/type errors.

## Deployment

Static site auto-deployed to **GitHub Pages** by `.github/workflows/` on every push to `main`. The public URL / canonical `site` is `https://bitcrafttech.com` (set in `astro.config.mjs`). There is no server runtime — everything is prerendered HTML/CSS.

## Architecture

Astro 5 marketing site, dark-theme only, no client-side framework. The two things that make this codebase productive to work in are the **design token system** and the **data-driven content pattern**.

### Design system (read before writing any markup)

The visual language is enforced by two files, and components are expected to use these tokens rather than raw values:

- **`tailwind.config.js`** — the only color palette. Semantic tokens: `bg-base` / `bg-section` / `bg-card` (three-level dark surface stack), `bc-border` / `bc-border-hi`, `bc-text` / `bc-muted` (text), and accents `green` / `green-hi`, `amber`, `orange`. Fonts: `font-sans` (Inter) and `font-mono` (JetBrains Mono). Tailwind base styles are **disabled** (`applyBaseStyles: false`); base styles live in `global.css`.
- **`src/styles/global.css`** — custom utilities that recur everywhere: `.glow-green` / `.glow-amber` / `.glow-orange` (box-shadow), `.text-glow-green`, `.clip-angle-down/up/both` (the angled section dividers), and `.card-accent-green/amber/orange` (colored top border on cards). Also defines the fixed dot-grid body texture.

Recurring stylistic conventions to match when adding UI:
- Section eyebrow labels are mono + numbered: `// 01 — SERVICES`. Section titles are wrapped in muted brackets via `SectionHeading.astro`.
- Icons are inline SVG strings stored in data files and rendered with `set:html`.
- `border-radius` is applied via inline `style="border-radius: Npx;"` (2 / 5 / 8px), not Tailwind classes.
- Components take an `accentColor: 'green' | 'amber'` prop and branch to the matching literal classes.

**Tailwind JIT caveat:** never build class names dynamically (e.g. `` `hover:${x}` ``) — the JIT compiler can't see them and the style silently drops. Use full literal class strings selected by a conditional instead (see `ServiceDetail.astro` for the pattern).

### Content is data-driven

Page/section copy lives in typed arrays under **`src/data/*.ts`**, imported by components and pages — not hardcoded in templates:

- `services.ts` — single source of truth for the six services, consumed by **both** the homepage `Services.astro` card grid and the full `pages/services.astro` detail page. Edit copy here and both stay in sync.
- `pricing.ts` — pricing tiers, monthly plans, add-ons, FAQ. Prices are intentionally placeholders (`$X`, `$Y`, `$N`) meant to be filled in.
- `client_projects.ts` / `lab_projects.ts` — project entries with a `status` (`live` / `wip` / `archived`) that drives a status badge in `ProjectCard.astro`.

When adding content, prefer extending the relevant data file over inlining it in a component.

### Page composition

- **`src/layouts/BaseLayout.astro`** wraps every page: injects SEO/OpenGraph meta (with per-page `title`/`description` props), the Google Analytics tag, and renders `Nav` → `<slot/>` → `Footer`. `DocsLayout.astro` is the variant for `/docs`.
- **`src/pages/*.astro`** are thin — they compose section components (`Hero`, `Services`, `Projects`, `Contact`, etc.) or map a data array over a card/detail component inside a `Section` wrapper.
- `Nav.astro` holds the canonical route list (`/services`, `/projects`, `/lab`, `/about`, `/contact`, `/pricing`, `/docs`). Update it when adding a top-level page.
- Import with the `@/*` alias (→ `src/*`), configured in `tsconfig.json`.

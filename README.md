# NTNL — No Trade No Life

The static, bilingual product-ecosystem website for **https://www.ntnl.io/**.

This repository contains the React source and deploys the production build through GitHub Pages. The existing apex-domain redirect to `www.ntnl.io` and all product subdomains remain separate from this project.

## Develop

Use Node.js 24 and npm.

```sh
npm ci
npm run dev -- --host 127.0.0.1 --port 4173
```

## Build and verify

```sh
npm run format:check
npm run check
```

`check` runs lint, the production build, and Playwright browser tests. Tests use installed Chrome locally; CI installs Playwright Chromium. Both desktop and mobile tests run against the production build on port 4174.

Coverage includes all seven product dialogs and links, language persistence, focus restoration, filters, illustrative workflows, motion controls, deep links, responsive navigation, overflow, self-hosted resources, accessibility, production metadata, archived documentation paths, and the custom 404. The new website's rendered text has a strict **14px minimum**, audited in both languages from 320px to 1920px, including menus, artwork, and dialogs. Desktop body text is 20px and mobile/tablet body text is 18px.

Screenshots and reports are ignored by Git. Automated accessibility tests are not a complete accessibility certification.

## Structure

- `src/App.tsx`: page composition and interaction state
- `src/products.ts`: public product names, categories, and destinations
- `src/copy.ts`: statically checked Chinese and English dictionaries
- `src/components/Orbit.tsx`: procedural Canvas torus
- `src/components/ProductArt.tsx`: original product-specific SVG/CSS artwork
- `src/index.css`, `src/App.css`: typography and responsive layout
- `public/`: static assets, SEO files, font licenses, and archived documentation
- `.github/workflows/pr-check.yml`: required PR quality check, reusable by releases
- `.github/workflows/release.yml`: checked build and GitHub Pages deployment on `main`
- `DEPLOYMENT.md`: migration, archive ownership, verification, and rollback

The new marketing frontend has no backend, database, credentials, environment configuration, analytics, remote fonts, or third-party asset requests. Display language is the only persistent client preference. Product diagrams are illustrations, not live status, financial balances, market prices, or performance claims. Opening an external product is a separate user action.

## Deployment

Merge a checked PR into `main`. `Release website` reruns quality checks and deploys the resulting `dist/` artifact. Manual redeployment of `main` is also available. The Pages source is GitHub Actions and its custom domain is `www.ntnl.io`; `public/CNAME` records the hostname but does not configure DNS.

`public/_headers` and `deploy/nginx.conf` are optional configurations for alternative hosts. GitHub Pages does not apply `_headers`; do not rely on that file for its response headers.

## Artwork and typography

Artwork is implemented in Canvas/SVG/CSS, without an image-service dependency. The torus caps pixel ratio at 1.75 and runs around 30 FPS; it stops offscreen, while the document is hidden, when paused, or when reduced motion is requested. Manrope and IBM Plex Mono are self-hosted through Fontsource; Chinese uses the operating system font. Font license notices are in `public/licenses/`.

`npm run social` regenerates the committed social image using local Chrome.

## Product boundaries

NormAI provides unified model access, usage auditing, and USD billing. Midas provides payments and settlement. HIT consumes externally supplied target signals and supports user-controlled execution. The site introduces products without authenticating, executing trades, initiating payments, or exposing private project material.

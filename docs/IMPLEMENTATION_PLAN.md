# Implementation plan

## Verified starting point

- Existing framework: Next.js 16.4.2 App Router, React 19, TypeScript, Tailwind CSS v4, shadcn tooling.
- Existing pages: root route only; no working organization content or image assets were present.
- Existing public assets: default Next.js starter SVGs only.
- Existing checks: `npm run build`, `npm run lint`; no test or browser automation dependency is declared.
- The supplied brief has all project variables left blank and supplies no actual reference URL. Its Eleos link is an example of a possible reference, not a requested reference.

## Decisions

1. Keep the existing App Router, styling, dependencies, and package manager.
2. Build a reusable editorial design with original abstract SVG artwork instead of implying a stock photograph is an authentic field image.
3. Mark unprovided organizational details as placeholders; use no invented metrics, testimonials, partners, legal status, locations, or contact information.
4. Build the sitemap routes as static pages and keep interactivity limited to the responsive navigation and donation amount/frequency selector.
5. Do not enable payment, newsletter, or contact submissions until a real provider, approved copy, and privacy-reviewed backend are supplied.
6. Validate with lint, build, and type-check; use visual browser review only if an available browser tool can run this local app.

## Dependency-ordered work

1. Reconnaissance and content model — complete.
2. Brand tokens, page shell, navigation, footer, and art direction — complete.
3. Home page and page inventory — complete.
4. Donation and mobile navigation interactions — complete.
5. Metadata, sitemap, robots, and baseline response headers — complete.
6. Lint, type-check, production build, and route checks — in progress.
7. Replace all placeholder copy/assets with approved organizational content — blocked on organization inputs.

## Reference review

No reference URL was provided for inspection. The attached brief offers aesthetic direction (editorial typography, asymmetry, warm palette, accessible UX); it does not establish a particular reference site's observable behavior. The art direction here is an original interpretation of that brief.

## Handoff

Set `NEXT_PUBLIC_SITE_URL` to the canonical HTTPS production URL. Replace `[Organization name]`, then update content and placeholders listed in `CONTENT_TODO.md`. Configure payment, email, and any data collection only after provider and legal decisions. Do not treat the starter as launch-ready while those items remain open.

## Security note

Baseline security response headers are configured. A Content Security Policy was not added because Next.js nonce/hash requirements and any future analytics/payment providers need to be reviewed together; define and test a production policy before deployment.

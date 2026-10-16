# Design system

## Direction

Warm, editorial, community-centered presentation. Large serif display type, quiet mono labels, paper-colored surfaces, deep green, and clay accents. Asymmetric compositions and original abstract illustrations replace unprovided documentary photography. No animation is required to reveal core content.

## Tokens

| Token | Value | Use |
| --- | --- | --- |
| Paper | `#F6F1E7` | Primary page surface |
| Ink | `#1D2420` | Primary text |
| Muted | `#59615B` | Secondary body text |
| Forest | `#2F5D50` | Brand, links, and dark section |
| Clay | `#A33C20` | Main action and eyebrow accent |
| Gold | `#E9C46A` | Restrained emphasis |
| Dark | `#1D2923` | Impact and footer background |
| Dark soft | `#27372F` | Secondary dark surface |
| Line | `rgba(29, 36, 32, 0.2)` | Fine separators |

Contrast ratios (WCAG relative luminance calculation, rounded to two decimals):

| Foreground | Background | Ratio | Use |
| --- | --- | ---: | --- |
| `#1D2420` | `#F6F1E7` | 14.07:1 | Body and display text |
| `#59615B` | `#F6F1E7` | 5.68:1 | Secondary body text |
| `#2F5D50` | `#F6F1E7` | 6.66:1 | Links and heading emphasis |
| `#A33C20` | `#F6F1E7` | 5.79:1 | Clay labels/actions |
| `#F6F1E7` | `#2F5D50` | 6.66:1 | Hero and forest sections |
| `#F6F1E7` | `#1D2923` | 13.39:1 | Dark sections |
| `#E9C46A` | `#1D2923` | 9.02:1 | Dark section accents |
| `#1D2420` | `#E9C46A` | 9.48:1 | Gold CTA |

Ratios are calculated for opaque colors; translucent border/metadata colors require visual/manual review. Re-measure any revised pair before release.

## Typography

- Display: Georgia serif stack, fluid sizes via `clamp()`, tight tracking, regular weight.
- Body: self-hosted Figtree via existing `next/font/google` integration with Arial fallback.
- Metadata: Geist Mono via existing font setup.
- Body copy remains at least 16px in primary sections; small metadata is supplementary only.

## Layout and spacing

- Maximum content width: 1320px.
- Page gutter: `clamp(1.25rem, 6vw, 6.75rem)`.
- Desktop: asymmetric two-column editorial layouts and four-column process row.
- Breakpoints: 900px for tablet navigation/grid changes; 680px mobile composition; 360px narrow-phone refinements.
- Images/illustrations use explicit dimensions or CSS aspect ratios. Hero artwork is 900×1050 and uses responsive `sizes`.
- Sections alternate paper, soft paper, forest, dark, and gold surfaces; thin rules define groups.

## Components and interaction

- Primary action: solid clay header Donate link; disabled checkout button clearly states that checkout is not configured.
- Secondary action: paper/forest-filled editorial CTA.
- Tertiary action: underlined text link with arrow.
- Focus: high-contrast 3px clay outline with offset. Keyboard skip link appears on focus.
- Mobile navigation uses a button with `aria-expanded`, closes on route selection and Escape, and restores focus on Escape.
- Donation picker uses native buttons with `aria-pressed`; no payment information is collected.
- Reduced-motion preference disables smooth scrolling and transitions.
- Cards are avoided in the main storytelling layout; simple bordered panels are reserved for route directories and supporting content.

## Shadcn customization map

No shadcn components are currently used. Existing CSS variables are replaced with the editorial palette for future components. Do not add primitives until an actual UI need justifies them.

## Image and motion principles

- The handmade SVG landscape is clearly labeled as illustrative and not documentary photography.
- Replace with organization-owned, consented photography and recorded credits/consent before presenting people or communities.
- No autoplay media, parallax, count-up, or entrance animation is used. Essential content is available in static HTML.

# Content model

## Source of truth

The starter content is maintained in App Router page files. No CMS is configured because the organization has not specified a staff-editing requirement. For the current project size, repository-managed content remains the least complex option. Migrate to MDX or a CMS only after the editing workflow is known.

## Page inventory

| Route | Content | State |
| --- | --- | --- |
| `/` | Mission-led intro, impact, programs, story, approach, geography, pathways, trust | Placeholder starter |
| `/about` | Mission, story, team, governance | Placeholder starter |
| `/programs` and `/programs/[slug]` | Program profiles | Placeholder records only |
| `/stories` and `/stories/[slug]` | Education and digital empowerment narratives | Two clearly labeled illustrative examples; no real testimonials supplied |
| `/impact` | Indicators, methodology, reports | No figures supplied |
| `/get-involved` | Giving, volunteering, partnership, fundraising paths | Processes not configured |
| `/donate` and response routes | Sample selector and non-transactional payment status pages | Provider not configured; response routes marked no-index |
| `/transparency` | Registration, financials, policies | No approved information supplied |
| `/contact` | Contact paths | Contact details not supplied |
| `/privacy`, `/terms` | Legal policy structure | Review required |
| `not-found`, `error` | Branded error states | Implemented |

## Data shapes to use when content is approved

Impact entries require `value`, `label`, `period`, `source`, and `lastVerified`. Program records require stable `slug`, approved `name`, `geography`, community-approved description, activities, outcome evidence, and relevant contact path. Story records require title, first-hand text, narrator-approved attribution, publication date, consent record, image consent/credit if applicable, and program/geography tags only when approved.

Registration/tax and financial content should be read from reviewed organization data and omitted when empty. No legal registration or benefit is presumed.

## Editorial rules

- Do not publish an unsourced number, quotation, partner name/logo, legal claim, or location.
- Record consent and image license information before adding a recognizable person.
- All starter text in square brackets is content to replace; starter example program records should be removed if not relevant.
- A payment provider must use hosted checkout or its official SDK; the site must never collect card data.

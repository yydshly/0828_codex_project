# Unknown → Product Playbook · Browser Validation

Validated: 2026-08-29

## Canonical runtime

- Build: `.pages-dist` produced by `npm run build:pages`
- URL: `http://127.0.0.1:4173/projects/natural-disasters-environment-study/unknown-to-product/`
- Browser: Google Chrome through the bundled Playwright runtime
- Viewports: desktop `1440 × 1000`, tablet `820 × 1180`, phone `390 × 844`
- Automated route: `npm run test:project-011:playbook-browser`

The `agent-browser` command was not available on this host, so the existing Project 011 Playwright/Chrome route was used. This still provides real browser, DOM, interaction, image-loading, responsive and console evidence.

## Result

`25 / 25` checks passed.

| Area | Browser evidence | Result |
| --- | --- | --- |
| Route | HTTP 200, meaningful body, no framework error overlay | pass |
| First view | product-capability thesis plus current and long-term goal horizons | pass |
| Universal method | 8 exploration steps and 6 evidence classes | pass |
| Source ledger | 8 primary-source links, fixed commit and runtime evidence link | pass |
| Case 001 | 3 target images load; 6 visible implementation layers | pass |
| From-zero plan | 12 implementation phases are present | pass |
| Product plan | 4 gated planned versions and proposed Adapter contract | pass |
| Generalization | 4 transfer cases and 5 reusable templates | pass |
| Interaction | active section index follows scrolling; copy control reports success | pass |
| Keyboard | copy control receives `:focus-visible` and a 2px solid outline | pass |
| Reduced motion | smooth scrolling is removed and the signal animation is reduced | pass |
| Desktop | no horizontal overflow; hero and Case 001 map visually inspected | pass |
| Tablet | sticky compact index, all 12 phases and 5 templates retained; no overflow | pass |
| Phone | full guide, 10 section links, 12 phases, 5 templates and 3 images retained; no overflow | pass |
| Canonical re-entry | main Project 011 page exposes two links to the playbook | pass |
| Runtime hygiene | no page exceptions, console errors or failed resource requests | pass |

## Visual review

- Desktop hero gives first attention to the unknown-to-product thesis, then the five-stage system card and current actions.
- The Case 001 reading surface uses the fixed contents rail to keep the evidence context visible while inspecting the six technical layers.
- Tablet converts the contents rail into a horizontal sticky index without covering the roadmap.
- Phone stacks product versions and the Adapter contract into one readable column; the section index remains horizontally scrollable inside its own surface.
- No visual effect is required to understand the guide. The page remains a semantic document when JavaScript is unavailable.

## Boundaries

- External publication links were inspected as source inputs during implementation, but the browser suite does not continuously request or availability-test them.
- This validation covers the planning page, not a new independent renderer or a new Environment Adapter implementation.
- GitHub Pages remote availability remains a later publication action; this turn did not push or deploy.
- Product versions `v0.1` through `v1.0` remain explicitly labelled as planned work.

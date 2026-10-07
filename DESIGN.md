# Design and implementation notes

## Direction

Deep graphite, warm off-white, and acid-lime highlights. Strong editorial typography and a procedural, dimensional ring make connection tangible. Seven floating nodes provide direct product exploration. The existing □ Linkit / △ Cybion / ○ NormAI / ✕ CTX symbol system is retained. Supporting products use simple provisional geometric marks.

Two capability layers give the seven-product portfolio a readable structure:

- Intelligence and collaboration: Linkit, Cybion, NormAI, CTX.
- Value infrastructure: Midas, 1Exchange, HIT.

The landing page is a public brand site, not a trading terminal. No invented operating metrics, user counts, uptime claims, balances, or financial returns. The capability map is not presented as an already-connected production transaction pipeline. Midas settlement is independent of the trading execution sequence.

## Interaction and accessibility

- Semantic navigation and section headings, skip link, visible keyboard focus.
- Radix menus and dialog implement focus trapping, Escape, and focus return.
- All seven products have original artwork, bilingual descriptions, capabilities, and actual destination links.
- The product filter and workflow picker are explicit pressed-state buttons.
- Mobile layouts tested from 360px upward; the capability map becomes vertical.
- The decorative Canvas has a text alternative and an accessible pause control.
- Reduced motion is supported, with motion work stopped offscreen and in background tabs.
- HTTP-request-free landing experience after static resources load; no third-party tracking.

## Complexity review

Necessary state paths: language choice, product category, selected product, selected capability map, and paused motion. Dialog/menu focus mechanics are delegated to Radix. Product content is data-driven. Exceptional handling is limited to blocked browser storage, which falls back to in-session language choice. Canvas lifecycle conditions only manage rendering resource use.

No legacy compatibility layer, backend, accounts, simulated API, authentication, router, remote data fetching, financial action, or speculative future abstraction was added.

## Delivery boundary

This is a local preview with a reproducible static production build and deployment templates. The live domain, GitHub repository, DNS and production services are intentionally unchanged pending design and migration approval.

## Readability revision

Typography follows the user's hard minimum: **no rendered text below 14px**, including small labels, illustration annotations, menus, footer, and dialogs. Shared CSS tokens use an explicit 14px floor rather than shrinking small-screen text.

- Desktop body: 20px, 1.9 line height (38px).
- Mobile/tablet body: 18px, 1.9 line height (34.2px).
- Product names: 30–32px; product statements: 28px.
- Navigation, actions, and filters: 18px; supporting text: 14px minimum.
- Secondary copy is brighter; titles do not carry the entire reading experience.
- Product cards use a spacious two-column layout, a full-width HIT feature, and a single-column layout below 900px. Artwork is in normal document flow so growing copy never hides behind it.
- Product dialogs are 720px wide on desktop and scroll safely on mobile.
- A browser regression test checks the computed font size of every rendered text element in both languages, from 320px to 1920px, including every product dialog. A second test checks card text bounds and artwork collisions.

This revision changes visual layout and adds card anchors; it does not add application state, network calls, compatibility paths, or backend behavior.

## Production delivery

The approved design is published through the `No-Trade-No-Life/home-page` repository to `www.ntnl.io`. Canonical and sharing URLs use that hostname. Existing documentation is retained as an isolated static archive; it is not restyled or imported into the new frontend. The new 404 follows the graphite/lime palette with text above the 14px floor. See `DEPLOYMENT.md` for ownership and rollback.

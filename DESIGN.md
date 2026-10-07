# NTNL website design

## Visual direction

Graphite, warm off-white, and acid-lime highlights; large editorial typography and a procedural silver/green torus. Eight floating product nodes invite exploration without presenting a mandatory order. The □ Linkit / △ Cybion / ○ NormAI / ✕ CTX identities remain, and Firma uses its project's dome-and-stars mark. Original CSS/SVG artwork stays independent of an image service.

## Product model: overlapping views

The eight products are Linkit, Cybion, NormAI, CTX, Firma (Firmament), Midas, 1Exchange, and HIT. Product cards introduce independent capabilities. Filters show **example participation**, not exclusive product categories:

- **Intelligent collaboration / 智能协作:** Linkit, Cybion, CTX, NormAI, Midas.
- **Fund investing / 基金投资:** Midas, Firma, Cybion, HIT, 1Exchange, Linkit.
- **Shared capabilities / 跨场景能力:** Linkit and Midas.

Counts are derived from the product data. Linkit, Cybion, and Midas intentionally appear in more than one scenario. No new product is invented for a research activity.

## Scenario presentation

The default **Open combinations** view shows all eight products in an unordered, nondirectional network. The two named scenarios are illustrative compositions, not the only possible arrangements or a claim of complete technical integration.

### Intelligent collaboration

Find people with Linkit, then collaborate through their Cybion agents. Cybion draws personal context from CTX and obtains model access from NormAI; NormAI settles payments through Midas. The display branches at Cybion: CTX is not shown as a sequential caller of NormAI. The NormAI → Midas relationship is grouped explicitly.

### Fund investing

The user-specified example has six roles, in this order:

1. Midas — receive capital using payments/transfers and authorized settlement.
2. Firma — obtain research data from shared datasets.
3. Cybion — conduct research and form production strategies for human approval.
4. HIT — execute external strategy signals under user control.
5. 1Exchange — create/manage funds, reconcile accounts and investment records.
6. Linkit — investor communication and community management.

Numbered cards keep the sequence readable on desktop and mobile. This is not a ready-made automated investment service. HIT does not produce signals or promise returns. 1Exchange's oversight copy refers to reviewing account, position, trade, and fund records, not third-party assurance.

### Cross-scenario roles

Linkit and Midas remain visible in a separate shared-capabilities area in every view. Appearing as a stage in one example does not limit their other roles. A closing statement invites further combinations as needs evolve. All views distinguish illustrative capabilities from live telemetry and completed integrations.

## Firma positioning and scope

The public display name is Firma; details identify the full name, Firmament. Positioning follows `No-Trade-No-Life/Firmament` README at `a9493904ab281b23836e3d1e2e2b5aa8e0cb9752`: Single Truth Publisher, shared by default within ecosystem authentication, local subscriptions as subsets, and collection handled by external publishers.

The product dialog distinguishes available data reading/export/sync and administrator-triggered Parquet/S3 archiving with on-demand cold-file retrieval from the still-planned external publishing interface. The cold-storage release was rechecked before publication and its successful release confirmed. No production data feeds, automatic background sync, or completed cross-product integration are invented. The website itself does not call application APIs or initiate login, sync, payment, fundraising, or trades.

## Readability and interaction

- No rendered text below **14px**, including artwork, menus, notes, footer, and dialogs.
- Desktop body **20px**, mobile/tablet **18px**, card statements **28px**, product names **30–32px**, navigation/actions **18px**.
- Spacious two-column product cards; Firma and HIT use wide feature rows; one column below 900px.
- Product dialogs restore focus to their opener and scroll safely on mobile.
- Scenario buttons expose their selected state. Every product node opens the same accessible product dialog.
- The torus respects reduced motion and pause controls and stops offscreen or in a hidden tab.

Regression tests cover both languages, all scenario views, overlapping filters, the exact user-specified relationships, all eight product dialogs/links, 320–1920px typography/overflow, hero-node collisions, and card/artwork separation.

## Complexity review

New runtime choices are limited to overlapping product filters, three explicitly selected scenario views, and data-driven optional product notes. Each represents a visible requirement and is covered by tests. The old exclusive two-layer taxonomy and animated pipeline implementation were removed. No runtime API integration, speculative fallback, or new compatibility path was introduced. The existing static documentation archive remains governed by `DEPLOYMENT.md`.

## Production

Canonical hostname: `www.ntnl.io`. Deployment remains the checked GitHub Pages workflow in `No-Trade-No-Life/home-page`; archive URLs, DNS, and product subdomains remain unchanged.

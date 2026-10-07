# Production deployment

## Hosting and ownership

- Repository: `No-Trade-No-Life/home-page`
- Custom domain: `www.ntnl.io`
- Hosting: GitHub Pages, published by `.github/workflows/release.yml`
- Existing Cloudflare routing and the apex redirect are retained.
- Product subdomains and the separate `No-Trade-No-Life.github.io` repository are outside this deployment.

PRs must pass `pr-check` before squash merge. `Release website` runs checks again, packages the checked static artifact, and deploys it to the `github-pages` environment. Release jobs only run for `main`. Failed checks cannot publish.

Browser tests use the preinstalled Chrome on the Ubuntu 24.04 runner, with its version recorded in the job log. This avoids making website releases depend on an extra Ubuntu apt-mirror update. The original CI attempt stalled at that mirror before any tests ran; no quality checks were bypassed.

## Migration baseline

The previous static Yuan website is preserved at commit `de219679f579c62230d7d6ccd196b3ae7917124c` and tag `backup/pre-ecosystem-2026-10-07`. A complete Git bundle, static archive, and pre-migration Pages/repository settings were saved outside the public repository before migration.

The old Pages source was `legacy`, branch `main`, path `/`, CNAME `www.ntnl.io`. Public HTTPS was provided through the existing routing. This migration changes the Pages build source to `workflow`, not DNS or other sites.

The current Yuan release workflow was inspected: it publishes its application to separate `y.ntnl.io` / `y.ntnl.tech` repositories, not this homepage. The homepage's protected `main` additionally prevents unchecked replacement by old publishing clients.

## Archived documentation

Existing `/docs/`, `/blog/`, `/markdown-page/`, `/zh-Hans/`, `/assets/`, and `/img/` paths are retained as static files under `public/`. Their content and styling are historical, not part of the new homepage design. Existing tracking loaders were removed and the historical analytics hook is a no-op. Archive scripts/styles remain isolated to archive pages; the new homepage does not load them.

- **Owner:** NTNL website maintainers.
- **Dependency:** existing documentation bookmarks and incoming links.
- **Exit condition:** the documentation owner approves an explicit replacement URL map and verifies all retained paths have a replacement before removing this snapshot. Do not remove the archive solely because the homepage no longer links to it.
- **Verification:** browser tests exercise representative English and Chinese documentation paths, while production smoke checks confirm their asset requests.

Legacy canonical metadata and sitemap files are retained as historical documents. The new root sitemap advertises only `https://www.ntnl.io/`; it does not silently recanonicalize old documentation previously attributed to another hostname.

## Verify a release

1. Wait for the merged commit's `Release website` run and `deploy` job to succeed.
2. Confirm HTTPS at `https://www.ntnl.io/` returns the new NTNL homepage.
3. Confirm `https://ntnl.io/` still redirects to `https://www.ntnl.io/`.
4. Check canonical/OpenGraph metadata, JS/CSS/fonts, social image, robots, sitemap, and 404.
5. Exercise desktop/mobile navigation, bilingual content, dialogs, and product links.
6. Check retained documentation paths and inspect console/network errors.

## Rollback

For an ordinary frontend regression, revert the relevant source change through a checked PR and let the same release workflow publish it.

For a complete return to the pre-migration static site:

1. Keep the `www.ntnl.io` custom-domain binding and DNS unchanged.
2. Create a branch at `backup/pre-ecosystem-2026-10-07` without rewriting `main`.
3. Permit that branch in the `github-pages` environment deployment policy, then change the Pages source from `workflow` to `legacy`, pointing to the rollback branch at `/`.
4. Wait for its Pages build, then verify HTTPS, the apex redirect, and archived routes.

To resume the new website, set Pages back to `workflow` and manually run `Release website` on `main`. Review any in-progress release before switching sources, so it does not conflict with rollback.

## Complexity review

The approved homepage UI has no new runtime branches. Hosting adds one explicit deployment guard (`main` only) and a static 404. Documentation compatibility is a copied static snapshot, isolated from the React application; its owner, dependent URLs, and removal conditions are documented above. No application backend or runtime routing fallback was introduced.

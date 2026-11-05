# Pecking Order website

The public site for Pecking Order lives at
[projectpeckingorder.com](https://projectpeckingorder.com/) on Cloudflare Workers
Static Assets. The previous GitHub Pages address remains available; its store
links have not been changed in this migration. Site owner: Kevin Trigg.

Run `node build.mjs` to prepare the explicit public asset list in `dist/`, then
deploy using the pinned Wrangler 4.157.0 from the sibling app repository's
`backend/cloudflare/cloud-backup` package and this site's `wrangler.jsonc`.
The build rewrites canonical and sitemap URLs for the Cloudflare deployment.
Do not upload the repository root: it contains source and deployment files.

The November refresh adds `features.html`, the guided hatch/Projects manual,
sample-data mobile and desktop screen previews, social metadata and structured
application data. The launch refresh adds `faq.html`, exact free-plan allowances,
Plus comparisons and owner-approved iPhone screenshots from version 0.20.1.
Run `node check.mjs` after building to check all eight public pages' links,
anchors, images, metadata and sitemap. `node preview.mjs` serves only `dist/` at
`http://127.0.0.1:4287` for local inspection; `PECKING_PREVIEW_PORT` can select
another local port. Egg and desktop examples are exported with fictional records
by the app's `tool/website_screenshots_test.dart`. The owner explicitly supplied
and approved the real iPhone flock/map images for this marketing task; do not
publish other private records without permission. Preserve the originals.
The small header icon is the app's existing 192px Android launcher asset.

Plus includes all breeder tools while subscribed, cloud/web access and
subscription-only Breeding Projects. Home/Full one-time purchases remain after
expiry. The anonymous-usage prompt is explicit opt-in, shown after onboarding;
its separate collector keeps short-lived daily receipts and aggregate totals.
Keep the privacy policy and store privacy declarations aligned before the
mobile build introducing monitoring is distributed.

The homepage and manual distinguish shipped features from the latest Google
Play closed-testing update. Pen headcounts, the new Home/Full Breeder tiers,
deworming reminders and automatic sync/history must not be described as
available to every public Android or iPhone user until those releases ship.
The original full Breeder Unlock retains Full Breeder access. Plus is optional
and includes all Home/Full tools while active; a one-time breeder purchase alone
does not grant cloud or web access. The privacy policy covers automatic
record/photo transfer after account linking, 50 retained record versions,
five separate archive backups, photo retention, and the Cloudflare, Supabase
and Resend providers. Keep these statements aligned with the deployed service.
The public support address is `support@projectpeckingorder.com`. Cloudflare Email
Routing forwards it to the owner's verified `peckingsupport@gmail.com` mailbox.
The rule is active; an end-to-end delivery test has not been sent. This is incoming
mail forwarding, not an outbound mailbox or the sign-in-code sending service.
Resend Free now sends Supabase sign-in codes from the support address. The owner
confirmed a test code reached the Gmail inbox on 13 October 2026. This verifies
outbound login email, not the separate inbound forwarding route.

- `index.html` is the app homepage.
- `features.html` presents the phone/web workflow and labelled screenshots.
- `faq.html` explains plans, expiry, backups, event previews and reminders.
- `start-here.html` has the club/event onboarding paths and preview instructions.
- `club-kit.html` is the printable club handout with a QR link to getting started.
- `styles.css` contains its responsive styling.
- `user-manual.html` is the current app manual; keep this URL stable for readers and search results.
- `privacy-policy.html` is the existing privacy policy URL used by the app and
  store listings. Keep this path stable when changing its design or content.
- `terms-of-use.html` explains subscriptions and links to Apple's standard EULA
  and the applicable store terms. It does not replace Apple's standard EULA.
- `robots.txt` points crawlers to `sitemap.xml`, which lists the homepage,
  eight public pages. Keep the verified Google Search Console property and sitemap
  submission aligned with the production domain; indexing is Google's decision.

This repository contains public website content only. App source code is kept
separately.

28 October 2026: added the Terms of Use and Subscription Information page and
linked it from the homepage and privacy policy. The privacy policy now explicitly
includes Flock Runner scores among stored records. Deployed to the project domain
as `96d039b0-48e0-40a6-aa31-00493cd2ad6d`; legal and support pages returned HTTP
200 and the live Terms page was visually checked. App Store descriptions and
privacy/support URL fields now reference the project domain instead of GitHub
Pages. Apple's standard EULA remains the agreement for the iOS app.

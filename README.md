# Pecking Order website

The public site for Pecking Order lives at
[projectpeckingorder.com](https://projectpeckingorder.com/) on Cloudflare Workers
Static Assets. The previous GitHub Pages address remains available; its store
links have not been changed in this migration. Site owner: Kevin Trigg.

Run `node build.mjs` to prepare the explicit public asset list in `dist/`, then
deploy using the pinned Wrangler 4.149.0 from the sibling app repository's
`backend/cloudflare/cloud-backup` package and this site's `wrangler.jsonc`.
The build rewrites canonical and sitemap URLs for the Cloudflare deployment.
Do not upload the repository root: it contains source and deployment files.

The homepage and manual distinguish shipped features from the latest Google
Play closed-testing update. Pen headcounts, the new Home/Full Breeder tiers,
deworming reminders and automatic sync/history must not be described as
available to every public Android or iPhone user until those releases ship.
The original full Breeder Unlock retains Full Breeder access. Cloud backup and
web access remain a separate subscription. The privacy policy covers automatic
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
- `styles.css` contains its responsive styling.
- `user-manual.html` is the current app manual; keep this URL stable for readers and search results.
- `privacy-policy.html` is the existing privacy policy URL used by the app and
  store listings. Keep this path stable when changing its design or content.
- `terms-of-use.html` explains subscriptions and links to Apple's standard EULA
  and the applicable store terms. It does not replace Apple's standard EULA.
- `robots.txt` points crawlers to `sitemap.xml`, which lists the homepage,
  manual and privacy policy. After publishing, verify the site in Google
  Search Console and submit the sitemap if indexing visibility is needed.

This repository contains public website content only. App source code is kept
separately.

28 October 2026: added the Terms of Use and Subscription Information page and
linked it from the homepage and privacy policy. The privacy policy now explicitly
includes Flock Runner scores among stored records. Deployed to the project domain
as `96d039b0-48e0-40a6-aa31-00493cd2ad6d`; legal and support pages returned HTTP
200 and the live Terms page was visually checked. App Store descriptions and
privacy/support URL fields now reference the project domain instead of GitHub
Pages. Apple's standard EULA remains the agreement for the iOS app.

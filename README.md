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

The homepage and manual continue to describe the shipped app. Optional accounts,
cloud backup, a web companion and other app subdomains are not advertised as
available. The privacy policy now describes the optional private cloud-backup
pilot and its Cloudflare, Supabase and Resend providers. Keep it aligned with
the service before enabling features in a public app build.
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
- `robots.txt` points crawlers to `sitemap.xml`, which lists the homepage,
  manual and privacy policy. After publishing, verify the site in Google
  Search Console and submit the sitemap if indexing visibility is needed.

This repository contains public website content only. App source code is kept
separately.

# DIDMail project website

Public, buildless project homepage for https://didmail.org, hosted on GitHub Pages from `didmail-org/didmail-org.github.io`. This repository contains only the website; product source remains in the separate DIDMail repository.

## Local preview

Run `python3 -m http.server 4173 --bind 127.0.0.1` from this directory, then open http://127.0.0.1:4173. There is no dependency installation or build step.

The site supports English and Chinese, a keyboard-accessible mobile navigation menu, native FAQ disclosures and reduced-motion preferences. Language preference is stored locally; there is no analytics, account flow or remote font dependency.

## Publication

Configure Settings → Pages → Deploy from a branch → `main` → `/ (root)`. Set the custom domain to `didmail.org`. The CNAME file is tracked, and `.nojekyll` disables Jekyll processing.

In GoDaddy DNS, replace the parking A records for `@` with GitHub Pages' A records (verify against GitHub documentation before future changes):

- 185.199.108.153
- 185.199.109.153
- 185.199.110.153
- 185.199.111.153

Set `www` CNAME to `didmail-org.github.io`. Keep the existing `_github-pages-challenge-…` TXT verification record and all unrelated mail/DNS records. Do not use wildcard DNS records. Enable Enforce HTTPS once GitHub issues a certificate and the option becomes available.

Domain verification proves ownership; it does not replace the site's Pages source and DNS configuration. See [GitHub domain configuration](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site/managing-a-custom-domain-for-your-github-pages-site).

## Content and licensing

Use accurate development-stage wording. Do not add download buttons, a public source link, production-readiness claims or audit claims until they are actually available. Keep both languages in sync when updating `index.html` and `app.js`.

Original website code and text use Apache-2.0; see LICENSE and NOTICE. DIDMail branding remains subject to applicable trademark rights. Existing DIDMail logo assets are reused here for the project's own homepage. No registered-trademark claim is made.

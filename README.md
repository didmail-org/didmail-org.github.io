# DIDMail project website

Public, buildless project homepage for https://didmail.org, hosted on GitHub Pages from `didmail-org/didmail-org.github.io`. This repository contains only the website; product source remains in the separate DIDMail repository.

## Local preview

Run `python3 -m http.server 4173 --bind 127.0.0.1` from this directory, then open http://127.0.0.1:4173. There is no dependency installation or build step.

The site supports English (`en`), Chinese (`zh`), Japanese (`ja`), Russian (`ru`) and Arabic (`ar`), matching the Chrome extension language list. It includes a keyboard-accessible native language selector and mobile navigation, native FAQ disclosures and reduced-motion preferences. Language preference is stored locally; there is no analytics, account flow or remote font dependency.

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

Use accurate development-stage wording. Do not add download buttons, a public source link, production-readiness claims or audit claims until they are actually available. Keep all five languages in sync when updating `index.html` and `locales.js`.

Original website code and text use Apache-2.0; see LICENSE and NOTICE. DIDMail branding remains subject to applicable trademark rights. Existing DIDMail logo assets are reused here for the project's own homepage. No registered-trademark claim is made.

## Design and editorial direction

The homepage uses only black, white and neutral grays, with editorial typography, fine rules and CSS illustrations of an NFT envelope and namecard. The illustrations are concepts, not screenshots of shipping products.

Keep all five language versions aligned across these subjects:

- Security: private-key identity and signed operations; passwords unlock protected wallet data locally. Avoid implying that keys or local passwords cannot be compromised, or that all traditional email lacks stronger authentication.
- Architecture: encryption endpoints are the sender and recipient; selected service nodes relay and store ciphertext. Identity, service selection and on-chain evidence are separate from message plaintext. Decentralized does not imply server-free delivery or universal replication.
- NFT envelopes and namecards: personal expression and contact exchange; envelope artwork does not itself provide encryption.
- Enterprise use: Apache-2.0 software license fee is zero; infrastructure, operations, chain and paid service costs are separate.
- Node operators: revenue depends on paid usage, protocol fee allocation and operating costs. Do not promise returns or present test tokens as cash income.
- Technology: ArcBlock DID, ARC/AFS/AUP integration, Workers/D1/R2 and cross-client protocol work. Distinguish local verification from hosted deployment acceptance.

Technology references: [ArcBlock DID specification](https://arcblock.github.io/abt-did-spec/), [ArcBlock AFS documentation](https://www.arcblock.io/en/docs/afs/), [Cloudflare Workers](https://developers.cloudflare.com/workers/). Project-specific architecture is checked against the DIDMail source and server documentation.

## Localization

English source copy is in `index.html`; the four translated dictionaries, metadata and accessibility labels are in `locales.js`. `app.js` applies text without a remote translation service or runtime dependency. Original English HTML is the fallback if a translation key is missing.

Language selection follows the extension’s order: `?lang=` query parameter, saved `didmail-language` preference, supported browser language, then English. Regional tags such as `ja-JP` normalize to a supported base language. An explicit selection updates the URL and persists locally; storage-disabled browsers still work. Examples: `/?lang=ja`, `/?lang=ru`, `/?lang=ar`.

Arabic sets `lang="ar"` and `dir="rtl"`, mirrors the reading order and desktop message-flow arrows, and preserves the direction of technical identifiers and decorative artwork. Selecting another language restores left-to-right layout. The same translated content updates document titles, descriptions and accessibility labels.

When adding a locale, update its dictionary, the native selector, supported-language detection, typography and direction rules. Verify key coverage, no horizontal overflow, mobile navigation and FAQ behavior, query precedence and persistence. Do not imply that language availability means local hosting, guaranteed delivery in every country or jurisdiction-specific compliance.

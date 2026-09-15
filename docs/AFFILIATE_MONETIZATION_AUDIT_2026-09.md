# Broke Mode Life Affiliate Monetization Audit — September 2026

## Verified baseline

- Public BrokeModeLife.com is represented by this repository, not `brokemodelife-new`: current live-page affiliate tracking code and Amazon references are present here while searches of `brokemodelife-new` returned no Amazon implementation.
- Existing pages already emit a GA4 `affiliate_click` event for Amazon outbound links.
- Public Shop, Finance, Health, Beauty and other buying-intent pages contain Amazon product modules.
- Public pages contain the Amazon Associates disclosure.
- Owned BrokeHouseCo products are a higher-margin conversion path and should take priority where they directly solve the reader's problem.

## Execution priorities

1. Preserve existing working Amazon tracking IDs; do not invent or replace IDs without verification.
2. Audit product URLs for exact product-detail destinations, availability, and stale approximate prices.
3. Remove or neutralize unsupported savings/performance/health claims rather than using them to drive affiliate clicks.
4. Normalize affiliate links to `rel="sponsored nofollow noopener"` where applicable.
5. Keep one GA4 `affiliate_click` schema with merchant, placement, page path, link URL and link text to prevent inconsistent reporting.
6. Give owned BrokeHouseCo PDFs first-position CTAs on pages where the PDF is the direct solution; use Amazon for complementary physical products.
7. Prioritize commercial pages: Shop, Finance, budget kitchen, home-gym/health, travel essentials and other under-$X/buying guides.
8. Avoid turning informational/editorial pages into large product grids merely to add affiliate links.
9. Replace stale displayed prices with `Check current price` when current pricing is not programmatically verified.
10. Keep Amazon's required disclosure visible and use clear adjacent disclosure around monetized modules.

## QA gate

Do not merge monetization changes until affiliate destinations, tracking IDs, disclosures, mobile presentation and GA4 event behavior are verified. No placeholder partner IDs or unverified merchant URLs may be deployed.

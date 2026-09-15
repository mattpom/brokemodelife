# Broke Mode Life Affiliate Monetization Audit — September 2026

## Verified baseline

- Public BrokeModeLife.com is represented by this repository, not `brokemodelife-new`: current live-page affiliate tracking code and Amazon references are present here while searches of `brokemodelife-new` returned no Amazon implementation.
- Existing pages already emit a GA4 `affiliate_click` event for Amazon outbound links.
- Public Shop, Finance, Health, Beauty and other buying-intent pages contain Amazon product modules.
- Public pages contain the Amazon Associates disclosure.
- Owned BrokeHouseCo products are a higher-margin conversion path and should take priority where they directly solve the reader's problem.
- Verified Amazon Associates tracking tag: `brokemodelife-20`.

## Required remediation before merge

### Shop

The Shop contains legacy destination mismatches. Do not merge until the visible product and Amazon destination describe the same product. Known mismatches include Compact Power Bank, Cast Iron Skillet, Blackout Curtains, Turntable, Cocktail Shaker Set, Resistance Bands and Foam Roller. Use product-specific Amazon search destinations with `tag=brokemodelife-20` unless an exact ASIN has been independently verified; do not guess ASINs.

Replace unverified displayed prices with `Check current price`. Neutralize unsupported performance or savings claims such as guaranteed savings, percentage effectiveness, or claims that a product pays for itself. Keep the recommendation useful without implying a result that has not been substantiated.

The Shop disclosure should state: `As an Amazon Associate, Broke Mode Life earns from qualifying purchases. Product availability and pricing can change; check Amazon for current details.`

### Budget Beauty and health-adjacent content

Do not use medical, dermatologist-consensus, prescription-equivalence, guaranteed-results, blind-test or future-treatment-cost claims unless they are specifically supported by a reliable cited source and accurately qualified. Remove or neutralize claims such as universal dermatologist agreement, prescription-equivalent results, guaranteed immediate improvement, or assertions that one product produces the same result as another without evidence.

Displayed product prices must not be presented as current unless verified. Prefer `Check current price` for Amazon modules.

### Tracking and links

Preserve the existing `affiliate_click` event and verified `brokemodelife-20` tag. Affiliate merchant links should use `rel="sponsored nofollow noopener"` where applicable. Internal links must not be marked sponsored and should normally remain same-tab.

## Execution priorities

1. Preserve existing working Amazon tracking IDs; do not invent or replace IDs without verification.
2. Correct product URLs so the destination matches the recommendation.
3. Remove or neutralize unsupported savings, performance, finance and health claims rather than using them to drive affiliate clicks.
4. Normalize affiliate link semantics and disclosures.
5. Keep one GA4 `affiliate_click` schema with merchant, placement, page path, link URL and link text to prevent inconsistent reporting.
6. Give owned BrokeHouseCo PDFs first-position CTAs on pages where the PDF is the direct solution; use Amazon for complementary physical products.
7. Prioritize commercial pages: Shop, Finance, budget kitchen, home-gym/health, travel essentials and other under-$X/buying guides.
8. Avoid turning informational/editorial pages into large product grids merely to add affiliate links.
9. Replace stale displayed prices with `Check current price` when current pricing is not programmatically verified.
10. Keep Amazon's required disclosure visible and use clear adjacent disclosure around monetized modules.

## QA gate

Do not merge monetization changes until affiliate destinations, tracking IDs, disclosures, mobile presentation, commercial claims and GA4 event behavior are verified. No placeholder partner IDs or unverified merchant URLs may be deployed. A documentation-only audit does not satisfy this gate: the underlying page or shared runtime code must actually implement each required correction before the PR is considered complete.

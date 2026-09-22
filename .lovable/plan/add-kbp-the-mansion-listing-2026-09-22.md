# Add KBP The Mansion listing

## Scope

Create a new **KBP The Mansion** listing for **3 BHK luxury independent floors**, using the uploaded transparent logo and the website’s existing apartment photography. Keep all wording generic where project-specific facts were not provided, and do not introduce prices or RERA details.

## Changes

1. **Create the listing page**
   - Add `/the-mansion` with the same navy-and-gold visual language as the rest of the site.
   - Place the transparent Mansion logo on a navy background with safe padding and proportional sizing.
   - Include an image-led introduction, 3 BHK independent-floor overview, luxury highlights, generic lifestyle amenities, location/connectivity messaging, enquiry calls-to-action, and the existing contact/footer area.
   - Reuse existing apartment images as representative visuals; avoid unsupported project specifications, measurements, timelines, or availability claims.
   - Use the shared enquiry form so successful submissions keep the required math check and redirect to `/thank-you` with return-page support.

2. **Add Mansion throughout the website**
   - Add “The Mansion” to desktop and mobile navigation.
   - Add a linked Mansion card to the homepage property listings and rebalance the three-card layout.
   - Add “KBP The Mansion – 3 BHK Independent Floors” to relevant enquiry dropdowns.
   - Add a functional Mansion link in the footer and ensure property cards link to their matching pages.
   - Mention the new offering in relevant homepage overview/property copy without replacing the existing apartment or commercial listings.

3. **SEO and discovery**
   - Update homepage title, description, keywords, social metadata, and structured property data to include KBP The Mansion while retaining the currently available 2 BHK, 3 BHK, and commercial offerings.
   - Give the Mansion page a route-specific title, description, canonical URL, and social text while it is open, restoring the homepage values when navigating away.
   - Add `https://smartcitykbp.com/the-mansion` to the sitemap.

4. **Asset handling and checks**
   - Store the uploaded transparent logo through the website asset service and use its saved URL.
   - Check desktop and mobile layouts, logo clarity, navigation, Mansion links, enquiry-to-thank-you flow, route metadata, and the new page’s sitemap entry.
   - Confirm the website builds without errors and that no price or RERA wording was added.

## Technical details

- New page: `src/pages/TheMansion.tsx`
- New route: `/the-mansion`
- Main integration points: router, navbar, homepage property cards and overview copy, enquiry form, footer links, `index.html` metadata/JSON-LD, and `public/sitemap.xml`
- No backend or new pricing data is required.

# Plan: Remove Plots From the Website

Remove every "Plots" title and piece of plot content sitewide. Where a plot reference sits in a list of offerings, replace it with "2BHK & 3BHK Luxury Apartments" wording so sentences still read naturally.

## Changes

**1. Remove the Plots page**
- Delete `src/pages/Plots.tsx`
- Remove the `/plots` route and import in `src/App.tsx`
- Remove `/plots` from `public/sitemap.xml`

**2. Navigation & footer**
- `src/components/Navbar.tsx`: remove the "Plots" nav link
- `src/components/sections/ContactFooter.tsx`: remove "Plots" from quick links; rewrite footer blurb to drop plots ("Apartments, villas and commercial spaces")

**3. Homepage cards (removed, 3 cards → 2)**
- `src/components/sections/PropertyOptions.tsx`: remove the "Plots" card — Apartments and Commercial remain
- `src/components/sections/PricingSection.tsx`: remove the "Residential Plot" pricing card; rewrite intro line to drop "plots"

**4. List mentions rewritten to make sense**
- `src/components/sections/HeroSection.tsx`: tagline → "2BHK & 3BHK Luxury Apartments • Villas • Commercial Spaces"
- `src/components/sections/ProjectOverview.tsx`: "apartments, residential plots and commercial spaces" → "luxury apartments and commercial spaces"
- `src/components/sections/QuickHighlights.tsx`: "Apartments, plots, villas and commercial spaces" → "Apartments, villas and commercial spaces"
- `src/components/sections/ContactFooter.tsx` blurb (same as above)

**5. Forms**
- `src/components/LeadForm.tsx`: remove "Residential Plot" option from the interest dropdown
- `src/pages/Location.tsx`, `src/pages/Amenities.tsx`: scan and remove any plot mentions found

**6. SEO/meta**
- `index.html`: remove plot keywords/mentions from title, description, JSON-LD if present

**Not touched:** Google Maps embed URLs (third-party listing text, cannot edit).

## Verification
- `rg -i plot src/ public/ index.html` returns nothing except the Google Maps embed URLs
- Build passes; `/plots` no longer resolves as a page

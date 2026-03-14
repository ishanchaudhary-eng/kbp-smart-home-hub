

# Location Advantage Page

## Overview
Create a new `/location` page with 9 sections covering connectivity, nearby facilities, growth potential, map, and a site visit CTA form.

## Changes

### 1. Create `src/pages/Location.tsx`
Full page with these sections:

- **Hero** — Full-width gradient background, headline "Prime Location Near Chandigarh", subheadline about NH-21, two CTA buttons (Get Location Details, Book Site Visit)
- **Location Overview** — Two-column layout with text about strategic location and an image placeholder
- **Connectivity** — 5 icon cards showing travel times (Chandigarh 25min, Mohali 20min, Kurali 10min, Ropar 30min, IT City Mohali 25min) + highlight badge for NH-21 access
- **Educational Institutions** — Card grid with 4 nearby institutions (Rayat Bahra, Chandigarh University, etc.) + supporting paragraph
- **Healthcare** — Card grid with 3 hospitals (Civil Hospital Kharar, Fortis Mohali, Max Mohali) + paragraph
- **Daily Convenience** — Icon list (Shopping, Markets, Restaurants, Banks, Public Transport) + paragraph
- **Future Growth** — Two paragraphs about Kharar-Kurali corridor development and investment potential
- **Map** — Google Maps iframe embed for Kharar-Kurali Highway area + "Get Directions" CTA
- **Site Visit CTA** — Form with Name, Phone, Preferred Visit Time fields, reusing the same pattern as `SiteVisitCTA.tsx`

All sections use `framer-motion` animations and the existing design system (navy/gold colors, Inter font, rounded cards).

### 2. Update `src/App.tsx`
Add route: `<Route path="/location" element={<Location />} />`

### 3. Update `src/components/Navbar.tsx`
Change the Location nav link from `/#location` to `/location` and make it a `<Link>` instead of a scroll button.




# Connectivity Timeline + Content Updates

## Overview
Create a new "Unmatched Connectivity" section with a highway-style visual timeline, plus update phone numbers, starting price, and property types across the site.

## Changes

### 1. Create `src/components/sections/ConnectivityTimeline.tsx`
A new section with two parts:

**Visual Timeline (top half)**
- Road/highway-style horizontal timeline with a dotted/dashed path line
- KBP Smart City as the origin point on the left
- 4 stops along the road: Bharatmala Expressway (0 min), Mohali (5 min), Chandigarh (10 min), Chandigarh University (10 min)
- Each stop is a card with icon (Highway, Building2, Landmark, GraduationCap), name, time badge, and highlight text
- On mobile: vertical timeline layout
- Subtle road/map-style background using CSS gradients

**SEO Text (bottom half)**
- "Excellent Connectivity That Makes Daily Life Easier" heading
- Full paragraph + 4 distance bullet points
- Closing paragraph about convenience for end users and investors

**CTA**: "Book a Site Visit" button scrolling to site-visit section

### 2. Update `src/pages/Index.tsx`
Insert `<ConnectivityTimeline />` after `<ProjectOverview />` and before `<WhyChoose />`

### 3. Update `src/components/StickyButtons.tsx`
Replace all `91XXXXXXXXXX` with `918699366993`

### 4. Update `src/components/sections/HeroSection.tsx`
- Change `₹XX Lakhs*` to `₹48 Lakhs*`
- Change property line to: `2 & 3 BHK Apartments • Villas • Residential Plots • Commercial Spaces`

### 5. Update `src/components/sections/PricingSection.tsx`
- Update pricing placeholders where appropriate

### 6. Update `src/components/sections/ContactFooter.tsx`
- Replace placeholder phone numbers with `8699366993`


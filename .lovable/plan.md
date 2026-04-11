

## Plan: Remove GPT-Sounding Text Across the Website

The website has several phrases and patterns that sound overly polished, formulaic, or AI-generated. These will be rewritten to sound more natural and direct.

### What Gets Changed

**1. Overly polished taglines and headings**
- "Why KBP Smart City Is A Smart Choice" → "Key Highlights"
- "Lifestyle Amenities For Your Family" → "Township Amenities"
- "Amenities That Make Everyday Living Better" → "Township Amenities & Facilities"
- "Comfort Backed By Strong Infrastructure" → "Township Infrastructure"
- "Why Families Will Feel At Home Here" → "Designed For All Age Groups"
- "More Open Space, Better Living" → "40% Open Area"
- "A Township Designed For Real Family Living" → remove this intro paragraph or simplify
- "Excellent Connectivity That Makes Daily Life Easier" → "Connectivity From KBP Smart City"
- "Unmatched Connectivity" → "Connectivity"
- "Choose Your Ideal Property" → "Property Types Available"
- "Perfect Homes For Modern Families" → "About The Apartments"
- "Why Buyers Prefer Plots at KBP Smart City" → "Why Buy a Plot Here"
- "Buy With Greater Confidence" → "Trust & Transparency"
- "Perfect for Different Buyer Needs" → "Who Should Buy"
- "Why Many Buyers Still Prefer Plots" → "Plots vs Flats"
- "Well Connected Yet Peaceful" → "Location Advantage"
- "Why Invest In Shops At KBP Smart City" → "Why Invest Here"
- "Perfect For Multiple Business Types" → "Suitable Business Types"
- "Why Businesses Thrive Here" → "Commercial Advantages"
- "Strong Location Advantage" → "Location"
- "Smart Commercial Investment" → "Investment Potential"
- "Growing Real Estate Corridor" → "Area Growth Potential"
- "Strategically Located For Easy Connectivity" → "Location Overview"
- "Everything You Need Nearby" → "Daily Conveniences"

**2. GPT filler descriptions to simplify/rewrite**
- "KBP Smart City apartments are designed to provide comfortable living spaces for families. The layouts are thoughtfully planned to maximize space, natural light and ventilation while keeping affordability in mind." → Shorter, more factual version
- "Three decades of trust, quality, and commitment to building homes that families love." → "Established real estate developer with 30+ years in Punjab."
- "KBP Smart City is not just a home — it's a smart investment for your future." → Remove or simplify
- "Our philosophy is simple — build homes that we'd be proud to live in ourselves." → Remove
- "This excellent connectivity makes KBP Smart City a convenient location for both end users and property investors." → Remove
- "KBP Smart City puts you minutes away from everything that matters." → Remove
- Various "designed to", "thoughtfully planned", "A more secure and organized environment" → simplify

**3. Amenities page data descriptions** (too marketing-speak)
- Rewrite amenity descriptions to be shorter and factual

### Files to Edit
1. `src/components/sections/QuickHighlights.tsx`
2. `src/components/sections/Amenities.tsx`
3. `src/components/sections/WhyChoose.tsx`
4. `src/components/sections/InvestmentOpportunity.tsx`
5. `src/components/sections/ConnectivityTimeline.tsx`
6. `src/components/sections/PropertyOptions.tsx`
7. `src/components/sections/ProjectOverview.tsx`
8. `src/components/sections/AboutKBP.tsx`
9. `src/components/sections/ContactFooter.tsx`
10. `src/pages/About.tsx`
11. `src/pages/Apartments.tsx`
12. `src/pages/Plots.tsx`
13. `src/pages/Commercial.tsx`
14. `src/pages/Amenities.tsx`
15. `src/pages/Location.tsx`

### Approach
- Replace flowery headings with short, direct ones
- Remove filler sentences that don't add information
- Keep descriptions factual and concise
- Maintain the same layout and structure, only change text content


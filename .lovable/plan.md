

## Plan: Remove Specific Sizes and Measurements Across the Website

Specific details like plot sizes (80, 93, 100 sq. yards) and apartment areas (850–1050 sq.ft., 1200–1450 sq.ft.) will be removed or replaced with generic text to avoid potential inaccuracies.

### Changes by File

**1. `src/pages/Plots.tsx`**
- Remove the plot size dropdown from the form (options: 80, 93, 100 sq yards)
- Remove `plotOptions` array (lines 129-133) that lists specific sizes with descriptions
- Remove the "Plot Options" section that renders those cards
- Update FAQ answer about plot sizes to say "Multiple plot configurations are available. Contact our team for the latest availability."
- Remove `showPlotSize` prop usage

**2. `src/components/sections/PricingSection.tsx`**
- Remove `area` field from all pricingData entries ("850–1050 sq.ft.", "1200–1450 sq.ft.", "100–300 sq.yd.")
- Remove the area display line from the card rendering

**3. `src/components/sections/FloorPlans.tsx`**
- Remove `area` field from plans data ("850–1050 sq.ft.", "1200–1450 sq.ft.")
- Remove area display from the UI; keep just the type name and bedroom/bathroom counts

**4. `src/pages/Apartments.tsx`**
- Remove the two area mentions: "850 – 1050 sq.ft." and "1200 – 1450 sq.ft." from the pricing summary section

**5. `src/components/sections/ContactFooter.tsx`**
- No sizes here, no changes needed

### What stays
- Property type names (2 BHK, 3 BHK) — these are categories, not measurements
- Feature lists (bedrooms, bathrooms, balconies) — general, not size-specific
- "On 200ft Highway" — this refers to the road, not a property detail


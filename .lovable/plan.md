

# Update Home Page to Match New Section Structure

## What Exists
The home page already has 13 sections with the correct design system, navbar, sticky buttons, and lead forms. The structure is close but needs content/copy updates to match the user's exact specifications.

## Changes Required

### 1. HeroSection.tsx — Update copy and layout
- Change headline to "Affordable Homes Near Chandigarh"
- Change subheadline to "2 & 3 BHK Apartments • Residential Plots • Commercial Spaces | Located on NH-21 Kharar–Kurali Highway"
- Add secondary CTA "Book Site Visit" button alongside the form
- Keep lead form with Name, Phone, Email, Property Interest, Submit

### 2. QuickHighlights.tsx — Update to match exact 4 cards
- Title: "Why KBP Smart City Is A Smart Choice"
- Cards: Highway Connectivity (with new description about 200ft NH-21), Affordable Housing (middle-class families first home), Complete Township (apartments, plots, villas, commercial in one), Peaceful Living (green surroundings, parks, family friendly)

### 3. ProjectOverview.tsx — Update copy
- Title: "Welcome To KBP Smart City"
- Replace content with the 3 paragraphs provided
- Add "Download Brochure" CTA button
- Remove stats grid on right side, replace with image placeholder

### 4. PropertyOptions.tsx — Update copy
- Title: "Choose Your Ideal Property"
- Update descriptions to match: Apartments (2BHK/3BHK modern apartments for comfortable family living), Plots (residential plots for dream home in secure township), Commercial (shops for growing businesses)
- CTA: "View Property Options"

### 5. Amenities.tsx — Reduce to 6 items with CTA
- Title: "Lifestyle Amenities For Your Family"
- Keep only: Clubhouse, Children's Play Area, Jogging Track, Parks and Green Spaces, Gym and Fitness Area, Gated Security
- Add "View All Amenities" CTA button

### 6. LocationAdvantage.tsx — Update content
- Title: "Excellent Location Connectivity"
- Simplify to 5 bullet points: NH-21, access to Chandigarh/Mohali, schools/colleges, hospitals/shopping, growing corridor
- Keep map placeholder
- CTA: "View Location Map"
- Remove the side lead form

### 7. FloorPlans.tsx — Simplify
- Title: "Smartly Designed Homes"
- Add descriptive paragraph about space, ventilation, natural light
- CTA: "View Floor Plans"
- Keep the tabbed floor plan layout

### 8. PricingSection.tsx — Simplify
- Title: "Affordable Pricing Options"
- Add content paragraph about competitive pricing
- CTA: "Request Price Sheet"
- Keep pricing cards and embedded form

### 9. Remove InvestmentOpportunity section from Index.tsx (not in user's structure)

### 10. AboutKBP.tsx — Update copy
- Title: "About KBP Group"
- Use the provided content about years of experience and quality developments
- CTA: "Know More" linking to /about

### 11. SiteVisitCTA.tsx — Update with date field
- Title: "Book Your Site Visit Today"
- Content: "Visit the project site and explore the township layout, amenities and location advantages in person."
- Add a dedicated form with Name, Phone, Preferred Visit Date
- CTA: "Schedule Site Visit"

### 12. ContactFooter.tsx — Add RERA placeholder
- Add RERA information placeholder
- Add enquiry button
- Keep quick links, contact info, map, WhatsApp, email

### 13. Index.tsx — Remove InvestmentOpportunity import/usage

## Technical Notes
- All changes are content/copy updates to existing components
- No new dependencies needed
- Existing design system, animations, and responsive layout preserved


import HeroSection from "@/components/sections/HeroSection";
import QuickHighlights from "@/components/sections/QuickHighlights";
import ProjectOverview from "@/components/sections/ProjectOverview";
import ConnectivityTimeline from "@/components/sections/ConnectivityTimeline";
import WhyChoose from "@/components/sections/WhyChoose";
import PropertyOptions from "@/components/sections/PropertyOptions";
import Amenities from "@/components/sections/Amenities";
import LocationAdvantage from "@/components/sections/LocationAdvantage";
import FloorPlans from "@/components/sections/FloorPlans";
import PricingSection from "@/components/sections/PricingSection";
import AboutKBP from "@/components/sections/AboutKBP";
import SiteVisitCTA from "@/components/sections/SiteVisitCTA";
import ContactFooter from "@/components/sections/ContactFooter";
import SectionDivider from "@/components/SectionDivider";

const Index = () => (
  <main className="scroll-smooth">
    <HeroSection />
    <QuickHighlights />
    <SectionDivider variant="gold-line" />
    <ProjectOverview />
    <SectionDivider variant="wave" fromDark={false} />
    <ConnectivityTimeline />
    <SectionDivider variant="dots" />
    <WhyChoose />
    <SectionDivider variant="gold-line" />
    <PropertyOptions />
    <SectionDivider variant="wave" fromDark={false} />
    <Amenities />
    <SectionDivider variant="wave" fromDark={true} />
    <LocationAdvantage />
    <SectionDivider variant="dots" />
    <FloorPlans />
    <SectionDivider variant="gold-line" />
    <PricingSection />
    <SectionDivider variant="angle" fromDark={false} />
    <SiteVisitCTA />
    <SectionDivider variant="curve" fromDark={true} />
    <AboutKBP />
    <SectionDivider variant="gold-line" />
    <ContactFooter />
  </main>
);

export default Index;

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

const Index = () => (
  <main className="scroll-smooth">
    <HeroSection />
    <QuickHighlights />
    <ProjectOverview />
    <WhyChoose />
    <PropertyOptions />
    <Amenities />
    <LocationAdvantage />
    <FloorPlans />
    <PricingSection />
    <AboutKBP />
    <SiteVisitCTA />
    <ContactFooter />
  </main>
);

export default Index;

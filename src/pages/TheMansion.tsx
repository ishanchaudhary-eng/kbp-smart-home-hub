import { motion } from "framer-motion";
import {
  ArrowRight,
  Building2,
  Check,
  Dumbbell,
  Home,
  KeyRound,
  Leaf,
  MapPin,
  ParkingCircle,
  ShieldCheck,
  Sparkles,
  Sun,
  Trees,
  Users,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import LeadForm from "@/components/LeadForm";
import ContactFooter from "@/components/sections/ContactFooter";
import SeoMetadata from "@/components/SeoMetadata";
import mansionLogo from "@/assets/kbp-the-mansion-logo.png.asset.json";
import exteriorOne from "@/assets/apartment-exterior-1.webp";
import exteriorTwo from "@/assets/apartment-exterior-2.webp";
import livingRoom from "@/assets/villa-interior-living.webp";

const highlights = [
  { icon: Home, title: "Independent-Floor Living", text: "A private residential format designed for families who value space and comfort." },
  { icon: Sparkles, title: "Luxury 3 BHK Homes", text: "Thoughtfully planned interiors with a refined, contemporary character." },
  { icon: Sun, title: "Light & Ventilation", text: "Layouts planned to welcome natural light and airflow into everyday spaces." },
  { icon: KeyRound, title: "Private Family Lifestyle", text: "A calm setting that combines everyday convenience with a premium feel." },
];

const amenities = [
  { icon: ParkingCircle, label: "Dedicated Parking" },
  { icon: ShieldCheck, label: "Gated Security" },
  { icon: Trees, label: "Landscaped Greens" },
  { icon: Dumbbell, label: "Fitness Spaces" },
  { icon: Users, label: "Community Areas" },
  { icon: Leaf, label: "Peaceful Surroundings" },
];

const features = [
  "Three spacious bedrooms",
  "Comfortable family living area",
  "Contemporary kitchen planning",
  "Well-ventilated rooms",
  "Private independent-floor experience",
  "Modern finishes and practical storage",
];

const TheMansion = () => (
  <main className="scroll-smooth">
    <SeoMetadata
      title="KBP The Mansion | 3 BHK Luxury Independent Floors in Mohali"
      description="Discover KBP The Mansion, premium 3 BHK luxury independent floors by KBP Mohali with spacious family living, modern comforts and lifestyle amenities."
      canonical="https://smartcitykbp.com/the-mansion"
    />

    <section className="relative min-h-[88vh] flex items-center overflow-hidden pt-20">
      <img src={exteriorOne} alt="KBP The Mansion luxury residential exterior" className="absolute inset-0 h-full w-full object-cover" />
      <div className="absolute inset-0 bg-primary/80" />
      <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary/80 to-transparent" />
      <div className="container mx-auto px-4 py-16 relative z-10">
        <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }} className="max-w-3xl">
          <div className="w-full max-w-md bg-primary p-5 md:p-7 border border-secondary/30 mb-7">
            <img src={mansionLogo.url} alt="KBP The Mansion – 3 BHK Independent Floors" className="w-full h-auto object-contain" />
          </div>
          <p className="text-secondary font-semibold uppercase text-sm mb-3">A refined address by KBP Mohali</p>
          <h1 className="text-4xl md:text-6xl font-display font-bold text-primary-foreground leading-tight mb-5">
            3 BHK Luxury Independent Floors
          </h1>
          <p className="text-lg md:text-xl text-primary-foreground/80 max-w-2xl mb-7">
            Spacious family homes shaped around privacy, comfort and an elevated everyday lifestyle near Mohali.
          </p>
          <div className="flex flex-wrap gap-3">
            <Button asChild className="bg-secondary text-secondary-foreground hover:bg-secondary/90 h-12 px-7 font-bold">
              <a href="#mansion-enquiry">Enquire Now <ArrowRight className="ml-2 h-4 w-4" /></a>
            </Button>
            <Button asChild variant="outline" className="border-secondary text-secondary bg-primary/30 hover:bg-primary/60 h-12 px-7 font-bold">
              <a href="#mansion-amenities">Explore Amenities</a>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>

    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div initial={{ opacity: 0, x: -24 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
            <span className="text-secondary font-semibold text-sm uppercase">The Mansion experience</span>
            <h2 className="text-3xl md:text-4xl font-display font-bold mt-2 mb-5">Designed For Distinctive Family Living</h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              KBP The Mansion brings together the space of a 3 BHK home and the privacy of independent-floor living. Each home is presented as a considered setting for relaxed family time, effortless hosting and comfortable daily routines.
            </p>
            <div className="grid sm:grid-cols-2 gap-3">
              {features.map((feature) => (
                <div key={feature} className="flex items-start gap-3 text-foreground">
                  <Check className="w-5 h-5 text-secondary shrink-0 mt-0.5" />
                  <span className="text-sm font-medium">{feature}</span>
                </div>
              ))}
            </div>
          </motion.div>
          <motion.div initial={{ opacity: 0, x: 24 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="grid grid-cols-2 gap-3">
            <img src={livingRoom} alt="Luxury living area representative of KBP The Mansion" className="h-80 w-full object-cover col-span-2" />
            <img src={exteriorTwo} alt="Premium residential architecture" className="h-44 w-full object-cover" />
            <div className="h-44 bg-primary p-6 flex flex-col justify-end">
              <Building2 className="w-8 h-8 text-secondary mb-3" />
              <p className="text-primary-foreground font-bold text-lg">3 BHK Independent Floors</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>

    <section className="py-20 bg-muted">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-secondary font-semibold text-sm uppercase">Signature features</span>
          <h2 className="text-3xl md:text-4xl font-display font-bold mt-2">A More Personal Way To Live</h2>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {highlights.map((item, index) => (
            <motion.div key={item.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.08 }} className="bg-card border p-6">
              <item.icon className="w-9 h-9 text-secondary mb-5" />
              <h3 className="font-bold text-lg mb-2">{item.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{item.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    <section id="mansion-amenities" className="py-20 bg-primary text-primary-foreground">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-[0.8fr_1.2fr] gap-12 items-center">
          <div>
            <span className="text-secondary font-semibold text-sm uppercase">Lifestyle amenities</span>
            <h2 className="text-3xl md:text-4xl font-display font-bold mt-2 mb-5">Comfort Beyond Your Front Door</h2>
            <p className="text-primary-foreground/70 leading-relaxed">
              Thoughtful shared spaces support active mornings, relaxed evenings and secure community living for every generation.
            </p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            {amenities.map((amenity) => (
              <div key={amenity.label} className="border border-primary-foreground/15 bg-primary-foreground/5 p-5 min-h-36 flex flex-col justify-end">
                <amenity.icon className="w-8 h-8 text-secondary mb-4" />
                <p className="font-semibold text-sm">{amenity.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>

    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="h-80 md:h-[28rem] overflow-hidden">
            <img src={exteriorOne} alt="Residential surroundings near KBP The Mansion" className="h-full w-full object-cover" />
          </div>
          <div>
            <MapPin className="w-10 h-10 text-secondary mb-5" />
            <span className="text-secondary font-semibold text-sm uppercase">Connected living</span>
            <h2 className="text-3xl md:text-4xl font-display font-bold mt-2 mb-5">Close To The Places That Matter</h2>
            <p className="text-muted-foreground leading-relaxed mb-7">
              Enjoy convenient access to Mohali, Chandigarh and the wider Tricity region while coming home to a composed residential environment.
            </p>
            <Button asChild variant="outline" className="h-12 px-7 font-bold">
              <a href="/location">View Location Details <ArrowRight className="ml-2 h-4 w-4" /></a>
            </Button>
          </div>
        </div>
      </div>
    </section>

    <section id="mansion-enquiry" className="py-20 bg-muted">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-10 items-center max-w-5xl mx-auto">
          <div>
            <span className="text-secondary font-semibold text-sm uppercase">Plan your visit</span>
            <h2 className="text-3xl md:text-4xl font-display font-bold mt-2 mb-4">Explore KBP The Mansion</h2>
            <p className="text-muted-foreground text-lg">Share your details to receive the latest information or arrange a guided site visit.</p>
          </div>
          <LeadForm title="Enquire About The Mansion" buttonText="Submit Enquiry" variant="light" />
        </div>
      </div>
    </section>

    <ContactFooter />
  </main>
);

export default TheMansion;
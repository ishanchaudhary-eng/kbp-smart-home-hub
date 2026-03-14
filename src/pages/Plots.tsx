import { motion } from "framer-motion";
import { Check, LandPlot } from "lucide-react";
import LeadForm from "@/components/LeadForm";
import ContactFooter from "@/components/sections/ContactFooter";

const features = [
  "Freehold Property with Clear Title",
  "Well-Demarcated Plots (100–300 sq.yd.)",
  "40 ft & 60 ft Wide Internal Roads",
  "Underground Sewerage & Drainage",
  "24/7 Water & Electricity Supply",
  "Corner & Park Facing Plots Available",
  "Boundary Wall & Gated Entry",
  "Landscaped Parks & Green Belts",
  "Walking & Jogging Tracks",
  "Kids Play Area Nearby",
];

const Plots = () => (
  <main className="pt-20">
    <section className="py-20 bg-gradient-to-br from-primary to-navy-dark text-primary-foreground">
      <div className="container mx-auto px-4 text-center">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
          <LandPlot className="w-12 h-12 text-secondary mx-auto mb-4" />
          <h1 className="text-4xl md:text-5xl font-display font-bold mb-4">Residential Plots</h1>
          <p className="text-primary-foreground/70 max-w-2xl mx-auto text-lg">Build your dream home on well-planned plots with all modern civic amenities in a gated township.</p>
        </motion.div>
      </div>
    </section>

    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <div>
            <h2 className="text-3xl font-display font-bold text-foreground mb-6">Plot Features</h2>
            <p className="text-muted-foreground mb-6 leading-relaxed">Our residential plots offer the freedom to design your home the way you want, with all the benefits of living in a gated township community.</p>
            <div className="space-y-3 mb-8">
              {features.map((f) => (
                <div key={f} className="flex items-center gap-3">
                  <Check className="w-5 h-5 text-secondary shrink-0" />
                  <span className="text-foreground text-sm">{f}</span>
                </div>
              ))}
            </div>
            <div className="bg-secondary/10 border border-secondary/20 rounded-xl p-6">
              <p className="text-muted-foreground text-sm">Starting From</p>
              <p className="text-3xl font-bold text-secondary">₹XX Lac*</p>
              <p className="text-muted-foreground text-xs mt-1">*Plot sizes from 100 to 300 sq.yd.</p>
            </div>
          </div>

          <LeadForm title="Get Plot Price List" buttonText="Download Price List →" />
        </div>
      </div>
    </section>

    <ContactFooter />
  </main>
);

export default Plots;

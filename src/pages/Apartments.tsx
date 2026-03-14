import { motion } from "framer-motion";
import { Check, Home } from "lucide-react";
import { Button } from "@/components/ui/button";
import LeadForm from "@/components/LeadForm";
import ContactFooter from "@/components/sections/ContactFooter";

const apartments = [
  {
    type: "2 BHK Apartment",
    area: "850–1050 sq.ft.",
    price: "₹XX Lac*",
    features: ["2 Spacious Bedrooms", "2 Attached Bathrooms", "Modular Kitchen Ready", "Living & Dining Room", "1 Balcony with View", "Covered Car Parking", "Vitrified Tile Flooring", "ISI Standard Fittings"],
  },
  {
    type: "3 BHK Apartment",
    area: "1200–1450 sq.ft.",
    price: "₹XX Lac*",
    features: ["3 Large Bedrooms", "2 Attached Bathrooms", "Spacious Living Room", "Modular Kitchen", "2 Balconies", "Covered Car Parking", "Premium Flooring", "Designer Bathroom Fittings"],
    popular: true,
  },
];

const Apartments = () => (
  <main className="pt-20">
    <section className="py-20 bg-gradient-to-br from-primary to-navy-dark text-primary-foreground">
      <div className="container mx-auto px-4 text-center">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
          <Home className="w-12 h-12 text-secondary mx-auto mb-4" />
          <h1 className="text-4xl md:text-5xl font-display font-bold mb-4">Apartments</h1>
          <p className="text-primary-foreground/70 max-w-2xl mx-auto text-lg">Spacious 2 BHK & 3 BHK apartments designed for modern families with premium finishes and smart layouts.</p>
        </motion.div>
      </div>
    </section>

    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {apartments.map((apt, i) => (
            <motion.div key={apt.type} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.15 }} className={`bg-card rounded-2xl border overflow-hidden ${apt.popular ? "border-secondary ring-2 ring-secondary/20" : ""}`}>
              {apt.popular && <div className="bg-secondary text-secondary-foreground text-xs font-bold text-center py-1.5">MOST POPULAR</div>}
              <div className="h-48 bg-gradient-to-br from-muted to-muted/50 flex items-center justify-center">
                <p className="text-muted-foreground">Floor Plan — {apt.type}</p>
              </div>
              <div className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h2 className="text-2xl font-bold text-foreground font-sans">{apt.type}</h2>
                    <p className="text-muted-foreground text-sm">{apt.area}</p>
                  </div>
                  <span className="text-2xl font-bold text-secondary">{apt.price}</span>
                </div>
                <div className="grid grid-cols-2 gap-2">
                  {apt.features.map((f) => (
                    <div key={f} className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Check className="w-4 h-4 text-secondary shrink-0" /> {f}
                    </div>
                  ))}
                </div>
                <Button className="w-full mt-6 bg-secondary text-secondary-foreground hover:bg-secondary/90 font-semibold" onClick={() => document.getElementById("apt-form")?.scrollIntoView({ behavior: "smooth" })}>
                  Get Price Details →
                </Button>
              </div>
            </motion.div>
          ))}
        </div>

        <div id="apt-form" className="max-w-lg mx-auto">
          <LeadForm title="Enquire About Apartments" buttonText="Get Apartment Details →" />
        </div>
      </div>
    </section>

    <ContactFooter />
  </main>
);

export default Apartments;

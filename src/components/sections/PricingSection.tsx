import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import LeadForm from "@/components/LeadForm";

const pricingData = [
  { type: "2 BHK Apartment", features: ["2 Bedrooms", "2 Bathrooms", "Modular Kitchen", "Balcony", "Car Parking"] },
  { type: "3 BHK Apartment", features: ["3 Bedrooms", "2 Bathrooms", "Large Living Room", "2 Balconies", "Car Parking"], popular: true },
  { type: "Residential Plot", features: ["Freehold Property", "Demarcated Plots", "Wide Internal Roads", "All Civic Amenities", "Corner / Park Facing Available"] },
];

const PricingSection = () => (
  <section id="pricing" className="py-20">
    <div className="container mx-auto px-4">
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-12">
        <span className="text-secondary font-semibold text-sm uppercase tracking-wider">Pricing</span>
        <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mt-2">Request Latest Price Sheet</h2>
        <p className="text-muted-foreground mt-3 max-w-2xl mx-auto">
          KBP Smart City offers competitively priced homes and plots, making it one of the most affordable township developments near Chandigarh.
        </p>
      </motion.div>

      <div className="grid lg:grid-cols-4 gap-6">
        {pricingData.map((item, i) => (
          <motion.div
            key={item.type}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className={`bg-card rounded-2xl border overflow-hidden ${item.popular ? "border-secondary ring-2 ring-secondary/20 shadow-lg relative" : ""}`}
          >
            {item.popular && (
              <div className="bg-secondary text-secondary-foreground text-xs font-bold text-center py-1.5">
                MOST POPULAR
              </div>
            )}
            <div className="p-6">
              <h3 className="text-lg font-bold text-foreground font-sans mb-3">{item.type}</h3>
              <p className="text-lg font-semibold text-secondary mb-4">Request for Latest Price</p>
              <ul className="space-y-2">
                {item.features.map((f) => (
                  <li key={f} className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Check className="w-4 h-4 text-secondary shrink-0" /> {f}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        ))}

        <div>
          <LeadForm title="Request Price Sheet" buttonText="Request Price Sheet →" variant="gold" compact />
        </div>
      </div>
    </div>
  </section>
);

export default PricingSection;

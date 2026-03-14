import { motion } from "framer-motion";
import { Check, Store, TrendingUp, Users, MapPin } from "lucide-react";
import LeadForm from "@/components/LeadForm";
import ContactFooter from "@/components/sections/ContactFooter";

const advantages = [
  { icon: MapPin, title: "Highway Facing", desc: "Prime visibility on 200 ft NH-21" },
  { icon: Users, title: "Built-in Footfall", desc: "500+ families in the township" },
  { icon: TrendingUp, title: "High ROI", desc: "Growing commercial corridor" },
];

const Commercial = () => (
  <main className="pt-20">
    <section className="py-20 bg-gradient-to-br from-primary to-navy-dark text-primary-foreground">
      <div className="container mx-auto px-4 text-center">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
          <Store className="w-12 h-12 text-secondary mx-auto mb-4" />
          <h1 className="text-4xl md:text-5xl font-display font-bold mb-4">Commercial Spaces</h1>
          <p className="text-primary-foreground/70 max-w-2xl mx-auto text-lg">Premium retail shops and commercial spaces with highway frontage for maximum business visibility.</p>
        </motion.div>
      </div>
    </section>

    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {advantages.map((a, i) => (
            <motion.div key={a.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="bg-card border rounded-xl p-6 text-center">
              <a.icon className="w-10 h-10 text-secondary mx-auto mb-4" />
              <h3 className="font-bold text-foreground font-sans mb-2">{a.title}</h3>
              <p className="text-muted-foreground text-sm">{a.desc}</p>
            </motion.div>
          ))}
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <div>
            <h2 className="text-3xl font-display font-bold text-foreground mb-6">Shop Details</h2>
            <p className="text-muted-foreground mb-6 leading-relaxed">Invest in commercial spaces strategically positioned at the entry of KBP Smart City, offering highway visibility and access to a captive customer base of 500+ families.</p>
            <div className="space-y-3 mb-8">
              {["Ground & First Floor Shops Available", "Sizes from 200 to 800 sq.ft.", "Highway Facing & Internal Shops", "Ample Customer Parking", "Ideal for Retail, Clinic, Office", "High Rental Yield Potential", "Power Backup & Water Supply", "Modern Facade Design"].map((f) => (
                <div key={f} className="flex items-center gap-3">
                  <Check className="w-5 h-5 text-secondary shrink-0" />
                  <span className="text-foreground text-sm">{f}</span>
                </div>
              ))}
            </div>
            <div className="bg-secondary/10 border border-secondary/20 rounded-xl p-6">
              <p className="text-muted-foreground text-sm">Starting From</p>
              <p className="text-3xl font-bold text-secondary">₹XX Lac*</p>
              <p className="text-muted-foreground text-xs mt-1">*Multiple sizes available</p>
            </div>
          </div>

          <LeadForm title="Enquire About Commercial" buttonText="Get Shop Details →" />
        </div>
      </div>
    </section>

    <ContactFooter />
  </main>
);

export default Commercial;

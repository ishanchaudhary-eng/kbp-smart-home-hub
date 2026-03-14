import { motion } from "framer-motion";
import LeadForm from "@/components/LeadForm";

const SiteVisitCTA = () => (
  <section id="site-visit" className="py-20 bg-gradient-to-r from-primary via-navy-dark to-primary text-primary-foreground">
    <div className="container mx-auto px-4">
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
            Book Your <span className="text-secondary">Free Site Visit</span> Today
          </h2>
          <p className="text-primary-foreground/70 text-lg mb-6">
            See your future home in person. Our team will arrange a comfortable site visit with pickup facility from Chandigarh.
          </p>
          <ul className="space-y-3 text-primary-foreground/80">
            <li className="flex items-center gap-2">✅ Free pickup & drop from Chandigarh</li>
            <li className="flex items-center gap-2">✅ Expert guided tour of the township</li>
            <li className="flex items-center gap-2">✅ Special spot booking offers</li>
            <li className="flex items-center gap-2">✅ No obligation visit</li>
          </ul>
        </motion.div>
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }}>
          <LeadForm title="Schedule Site Visit" buttonText="Book Free Visit →" variant="light" />
        </motion.div>
      </div>
    </div>
  </section>
);

export default SiteVisitCTA;

import { motion } from "framer-motion";
import { ArrowRight, Home, LandPlot, Store } from "lucide-react";
import { Button } from "@/components/ui/button";
import MotionBackground from "@/components/MotionBackground";

const options = [
  { icon: Home, title: "Apartments", desc: "2 BHK and 3 BHK modern apartments designed for comfortable family living." },
  { icon: LandPlot, title: "Plots", desc: "Residential plots for building your dream home in a secure township." },
  { icon: Store, title: "Commercial", desc: "Shops and commercial spaces designed for growing businesses." },
];

const PropertyOptions = () => (
  <section id="properties" className="py-20 relative overflow-hidden">
    <MotionBackground variant="blobs" />
    <div className="container mx-auto px-4 relative z-10">
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-12">
        <span className="text-secondary font-semibold text-sm uppercase tracking-wider">Property Types</span>
        <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mt-2">Property Types Available</h2>
      </motion.div>
      <div className="grid md:grid-cols-3 gap-6">
        {options.map((opt, i) => (
          <motion.div
            key={opt.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.15 }}
            className="group bg-card rounded-2xl overflow-hidden border hover:shadow-xl transition-all"
          >
            <div className="h-48 bg-gradient-to-br from-primary to-navy-light flex items-center justify-center">
              <opt.icon className="w-20 h-20 text-primary-foreground/30 group-hover:text-secondary/60 transition-colors" />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold text-foreground mb-2 font-sans">{opt.title}</h3>
              <p className="text-muted-foreground text-sm mb-4">{opt.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>
      <div className="text-center mt-8">
        <Button className="bg-secondary text-secondary-foreground hover:bg-secondary/90 font-semibold h-12 px-8">
          View Property Options <ArrowRight className="w-4 h-4 ml-2" />
        </Button>
      </div>
    </div>
  </section>
);

export default PropertyOptions;

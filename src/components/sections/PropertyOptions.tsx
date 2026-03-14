import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Home, LandPlot, Store } from "lucide-react";
import { Button } from "@/components/ui/button";

const options = [
  { icon: Home, title: "Apartments", desc: "Spacious 2 BHK & 3 BHK apartments with modern interiors and balconies.", link: "/apartments", tag: "From ₹XX Lac" },
  { icon: LandPlot, title: "Residential Plots", desc: "Build your dream home on well-planned plots with all civic amenities.", link: "/plots", tag: "From ₹XX Lac" },
  { icon: Store, title: "Commercial Shops", desc: "Prime retail spaces on the highway for high footfall and business growth.", link: "/commercial", tag: "From ₹XX Lac" },
];

const PropertyOptions = () => (
  <section id="properties" className="py-20">
    <div className="container mx-auto px-4">
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-12">
        <span className="text-secondary font-semibold text-sm uppercase tracking-wider">Property Types</span>
        <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mt-2">Choose Your Perfect Space</h2>
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
              <span className="inline-block bg-secondary/10 text-secondary text-xs font-semibold px-3 py-1 rounded-full mb-3">{opt.tag}</span>
              <h3 className="text-xl font-bold text-foreground mb-2 font-sans">{opt.title}</h3>
              <p className="text-muted-foreground text-sm mb-4">{opt.desc}</p>
              <Link to={opt.link}>
                <Button variant="outline" className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                  View Details <ArrowRight className="w-4 h-4 ml-1" />
                </Button>
              </Link>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default PropertyOptions;

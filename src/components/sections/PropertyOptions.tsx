import { motion } from "framer-motion";
import { ArrowRight, Building2, Home, Store } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import MotionBackground from "@/components/MotionBackground";
import FloatingParticles from "@/components/FloatingParticles";

const options = [
  { icon: Home, title: "Apartments", desc: "2 BHK and 3 BHK luxury apartments designed for comfortable family living.", gradient: "from-primary to-navy-light", href: "/apartments" },
  { icon: Building2, title: "The Mansion", desc: "Premium 3 BHK independent floors with a private, refined family lifestyle.", gradient: "from-navy-dark via-primary to-navy-light", href: "/the-mansion" },
  { icon: Store, title: "Commercial", desc: "Shops and commercial spaces designed for growing businesses.", gradient: "from-primary via-navy-dark to-navy-light", href: "/commercial" },
];

const PropertyOptions = () => (
  <section id="properties" className="py-20 relative overflow-hidden">
    <MotionBackground variant="blobs" />
    <FloatingParticles count={6} color="secondary" />
    <div className="container mx-auto px-4 relative z-10">
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-12">
        <span className="text-secondary font-semibold text-sm uppercase tracking-wider">Property Types</span>
        <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mt-2">Property Types Available</h2>
      </motion.div>
      <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {options.map((opt, i) => (
          <motion.div
            key={opt.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.15 }}
            whileHover={{ y: -8 }}
            className="group bg-card rounded-2xl overflow-hidden border hover:shadow-2xl transition-all"
          >
            <div className={`h-48 bg-gradient-to-br ${opt.gradient} flex items-center justify-center relative overflow-hidden`}>
              {/* Animated background pattern */}
              <motion.div
                className="absolute inset-0 opacity-10"
                style={{
                  backgroundImage: "radial-gradient(circle, white 1px, transparent 1px)",
                  backgroundSize: "20px 20px",
                }}
                animate={{ x: [0, 20], y: [0, 20] }}
                transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
              />
              <motion.div
                whileHover={{ scale: 1.2, rotate: 10 }}
                transition={{ type: "spring", stiffness: 200 }}
              >
                <opt.icon className="w-20 h-20 text-primary-foreground/30 group-hover:text-secondary/60 transition-colors relative z-10" />
              </motion.div>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold text-foreground mb-2 font-sans">{opt.title}</h3>
              <p className="text-muted-foreground text-sm mb-4">{opt.desc}</p>
              <Button asChild variant="ghost" className="px-0 text-secondary hover:text-secondary/80">
                <Link to={opt.href}>View Details <ArrowRight className="w-4 h-4 ml-2" /></Link>
              </Button>
            </div>
          </motion.div>
        ))}
      </div>
      <div className="text-center mt-8">
        <Button asChild className="bg-secondary text-secondary-foreground hover:bg-secondary/90 font-semibold h-12 px-8">
          <Link to="/the-mansion">Explore The Mansion <ArrowRight className="w-4 h-4 ml-2" /></Link>
        </Button>
      </div>
    </div>
  </section>
);

export default PropertyOptions;

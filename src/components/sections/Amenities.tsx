import { motion } from "framer-motion";
import { TreePine, PersonStanding, Baby, Building, Dumbbell, ShieldCheck, Car, Droplets, Zap, Wifi } from "lucide-react";

const amenities = [
  { icon: TreePine, label: "Landscaped Parks" },
  { icon: PersonStanding, label: "Jogging Track" },
  { icon: Baby, label: "Kids Play Area" },
  { icon: Building, label: "Clubhouse" },
  { icon: Dumbbell, label: "Modern Gym" },
  { icon: ShieldCheck, label: "24/7 Security" },
  { icon: Car, label: "Ample Parking" },
  { icon: Droplets, label: "Water Supply" },
  { icon: Zap, label: "Power Backup" },
  { icon: Wifi, label: "Smart Features" },
];

const Amenities = () => (
  <section id="amenities" className="py-20 bg-primary text-primary-foreground">
    <div className="container mx-auto px-4">
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-12">
        <span className="text-secondary font-semibold text-sm uppercase tracking-wider">World-Class Living</span>
        <h2 className="text-3xl md:text-4xl font-display font-bold mt-2">Premium Amenities</h2>
      </motion.div>
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6">
        {amenities.map((a, i) => (
          <motion.div
            key={a.label}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.05 }}
            className="bg-primary-foreground/5 border border-primary-foreground/10 rounded-xl p-5 text-center hover:bg-primary-foreground/10 transition-colors group"
          >
            <a.icon className="w-8 h-8 text-secondary mx-auto mb-3 group-hover:scale-110 transition-transform" />
            <p className="text-sm font-medium text-primary-foreground/80">{a.label}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default Amenities;

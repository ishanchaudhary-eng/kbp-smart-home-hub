import { motion } from "framer-motion";
import { Building, Baby, PersonStanding, TreePine, Dumbbell, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import FloatingParticles from "@/components/FloatingParticles";

const amenities = [
  { icon: Building, label: "Clubhouse" },
  { icon: Baby, label: "Children's Play Area" },
  { icon: PersonStanding, label: "Jogging Track" },
  { icon: TreePine, label: "Parks & Green Spaces" },
  { icon: Dumbbell, label: "Gym & Fitness Area" },
  { icon: ShieldCheck, label: "Gated Security" },
];

const Amenities = () => (
  <section id="amenities" className="py-20 bg-primary text-primary-foreground relative overflow-hidden">
    <FloatingParticles count={15} color="secondary" />

    {/* Decorative rings */}
    <motion.div
      className="absolute -top-32 -right-32 w-64 h-64 rounded-full border border-secondary/10"
      animate={{ rotate: 360 }}
      transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
    />
    <motion.div
      className="absolute -bottom-20 -left-20 w-48 h-48 rounded-full border border-secondary/10"
      animate={{ rotate: -360 }}
      transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
    />

    <div className="container mx-auto px-4 relative z-10">
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-12">
        <span className="text-secondary font-semibold text-sm uppercase tracking-wider">World-Class Living</span>
        <h2 className="text-3xl md:text-4xl font-display font-bold mt-2">Township Amenities</h2>
      </motion.div>
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 md:gap-6 max-w-3xl mx-auto">
        {amenities.map((a, i) => (
          <motion.div
            key={a.label}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.08 }}
            whileHover={{ scale: 1.05, y: -4 }}
            className="bg-primary-foreground/5 border border-primary-foreground/10 rounded-xl p-5 text-center hover:bg-primary-foreground/10 transition-colors group cursor-pointer"
          >
            <motion.div
              whileHover={{ rotate: [0, -10, 10, 0] }}
              transition={{ duration: 0.5 }}
            >
              <a.icon className="w-8 h-8 text-secondary mx-auto mb-3 group-hover:scale-110 transition-transform" />
            </motion.div>
            <p className="text-sm font-medium text-primary-foreground/80">{a.label}</p>
          </motion.div>
        ))}
      </div>
      <div className="text-center mt-8">
        <Button variant="outline" className="border-secondary text-secondary bg-transparent hover:bg-secondary/10 font-semibold h-12 px-8">
          View All Amenities
        </Button>
      </div>
    </div>
  </section>
);

export default Amenities;

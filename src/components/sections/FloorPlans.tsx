import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import floorPlan2bhk from "@/assets/2bhk-floor-plan.webp";
import floorPlan3bhk from "@/assets/3bhk-floor-plan.webp";
import FloatingParticles from "@/components/FloatingParticles";

const plans = [
  { type: "2 BHK", bedrooms: "2", bathrooms: "2", balcony: "1" },
  { type: "3 BHK", bedrooms: "3", bathrooms: "2", balcony: "2" },
];

const FloorPlans = () => {
  const [active, setActive] = useState(0);

  return (
    <section id="floor-plans" className="py-20 bg-warm-gray relative overflow-hidden">
      <FloatingParticles count={6} color="primary" />

      {/* Decorative corner shapes */}
      <motion.div
        className="absolute top-10 right-10 w-20 h-20 border-2 border-secondary/20 rounded-xl"
        animate={{ rotate: 45 }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
      />
      <motion.div
        className="absolute bottom-10 left-10 w-16 h-16 border-2 border-secondary/15 rounded-full"
        animate={{ rotate: -360 }}
        transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
      />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-8">
          <span className="text-secondary font-semibold text-sm uppercase tracking-wider">Layouts</span>
          <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mt-2">Smartly Designed Homes</h2>
          <p className="text-muted-foreground mt-3 max-w-2xl mx-auto">
            The apartments at KBP Smart City are designed to maximize space, ventilation and natural light. Each layout focuses on comfortable family living.
          </p>
        </motion.div>

        <div className="flex justify-center gap-3 mb-8">
          {plans.map((p, i) => (
            <motion.div key={p.type} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                onClick={() => setActive(i)}
                variant={active === i ? "default" : "outline"}
                className={active === i ? "bg-primary" : ""}
              >
                {p.type}
              </Button>
            </motion.div>
          ))}
        </div>

        <motion.div key={active} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="max-w-3xl mx-auto">
          <div className="bg-card border rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-shadow">
            <div className="h-64 md:h-80">
              <img src={active === 0 ? floorPlan2bhk : floorPlan3bhk} alt={`${plans[active].type} Floor Plan`} className="w-full h-full object-contain bg-white" />
            </div>
            <div className="p-6 grid grid-cols-3 gap-4 text-center">
              {[
                { val: plans[active].type, label: "Type" },
                { val: plans[active].bedrooms, label: "Bedrooms" },
                { val: plans[active].bathrooms, label: "Bathrooms" },
              ].map((item) => (
                <motion.div key={item.label} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }}>
                  <p className="text-2xl font-bold text-foreground">{item.val}</p>
                  <p className="text-muted-foreground text-sm">{item.label}</p>
                </motion.div>
              ))}
            </div>
          </div>

          <div className="text-center mt-6">
            <Button className="bg-secondary text-secondary-foreground hover:bg-secondary/90 font-semibold h-12 px-8">
              View Floor Plans
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FloorPlans;

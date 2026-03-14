import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

const plans = [
  { type: "2 BHK", area: "850–1050 sq.ft.", bedrooms: "2", bathrooms: "2", balcony: "1" },
  { type: "3 BHK", area: "1200–1450 sq.ft.", bedrooms: "3", bathrooms: "2", balcony: "2" },
];

const FloorPlans = () => {
  const [active, setActive] = useState(0);

  return (
    <section id="floor-plans" className="py-20 bg-warm-gray">
      <div className="container mx-auto px-4">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-8">
          <span className="text-secondary font-semibold text-sm uppercase tracking-wider">Layouts</span>
          <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mt-2">Smartly Designed Homes</h2>
          <p className="text-muted-foreground mt-3 max-w-2xl mx-auto">
            The apartments at KBP Smart City are designed to maximize space, ventilation and natural light. Each layout focuses on comfortable family living.
          </p>
        </motion.div>

        <div className="flex justify-center gap-3 mb-8">
          {plans.map((p, i) => (
            <Button
              key={p.type}
              onClick={() => setActive(i)}
              variant={active === i ? "default" : "outline"}
              className={active === i ? "bg-primary" : ""}
            >
              {p.type}
            </Button>
          ))}
        </div>

        <motion.div key={active} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="max-w-3xl mx-auto">
          <div className="bg-card border rounded-2xl overflow-hidden shadow-sm">
            <div className="h-64 md:h-80 bg-gradient-to-br from-muted to-muted/50 flex items-center justify-center">
              <p className="text-muted-foreground">Floor Plan Image — {plans[active].type}</p>
            </div>
            <div className="p-6 grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
              <div>
                <p className="text-2xl font-bold text-foreground">{plans[active].type}</p>
                <p className="text-muted-foreground text-sm">Type</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-foreground">{plans[active].area}</p>
                <p className="text-muted-foreground text-sm">Super Area</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-foreground">{plans[active].bedrooms}</p>
                <p className="text-muted-foreground text-sm">Bedrooms</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-foreground">{plans[active].bathrooms}</p>
                <p className="text-muted-foreground text-sm">Bathrooms</p>
              </div>
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

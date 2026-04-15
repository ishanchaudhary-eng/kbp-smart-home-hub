import { motion } from "framer-motion";
import { TrendingUp, BarChart3, MapPinned, Building } from "lucide-react";
import FloatingParticles from "@/components/FloatingParticles";
import AnimatedCounter from "@/components/AnimatedCounter";

const points = [
  { icon: TrendingUp, title: "30% YoY Appreciation", desc: "Kharar–Kurali corridor has shown consistent growth in property values." },
  { icon: BarChart3, title: "High Rental Demand", desc: "Proximity to IT hubs and educational institutions drives rental income." },
  { icon: MapPinned, title: "Upcoming Infrastructure", desc: "Metro connectivity and highway expansion planned in the area." },
  { icon: Building, title: "Limited Inventory", desc: "Increasing demand and limited supply ensure strong returns." },
];

const stats = [
  { value: 30, suffix: "%", label: "Yearly Growth" },
  { value: 50, suffix: "+", label: "Projects Done" },
  { value: 5000, suffix: "+", label: "Happy Families" },
];

const InvestmentOpportunity = () => (
  <section className="py-20 bg-primary text-primary-foreground relative overflow-hidden">
    <FloatingParticles count={10} color="secondary" />

    {/* Glowing orb */}
    <motion.div
      className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-secondary/5 blur-3xl"
      animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
      transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
    />

    <div className="container mx-auto px-4 relative z-10">
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-12">
        <span className="text-secondary font-semibold text-sm uppercase tracking-wider">Smart Investment</span>
        <h2 className="text-3xl md:text-4xl font-display font-bold mt-2">Investment Opportunity</h2>
      </motion.div>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
        {points.map((p, i) => (
          <motion.div
            key={p.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            whileHover={{ y: -6, scale: 1.02 }}
            className="bg-primary-foreground/5 border border-primary-foreground/10 rounded-xl p-6 text-center backdrop-blur-sm"
          >
            <motion.div
              className="w-14 h-14 bg-secondary/10 rounded-xl flex items-center justify-center mx-auto mb-4"
              whileHover={{ rotate: 5 }}
            >
              <p.icon className="w-7 h-7 text-secondary" />
            </motion.div>
            <h3 className="font-bold mb-2 font-sans">{p.title}</h3>
            <p className="text-primary-foreground/60 text-sm">{p.desc}</p>
          </motion.div>
        ))}
      </div>

      {/* Animated stat counters */}
      <div className="grid grid-cols-3 gap-6 max-w-2xl mx-auto">
        {stats.map((s) => (
          <div key={s.label} className="text-center">
            <AnimatedCounter
              end={s.value}
              suffix={s.suffix}
              className="text-3xl md:text-4xl font-bold text-secondary"
            />
            <p className="text-primary-foreground/50 text-sm mt-1">{s.label}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default InvestmentOpportunity;

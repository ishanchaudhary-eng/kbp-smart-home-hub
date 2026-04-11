import { motion } from "framer-motion";
import { TrendingUp, BarChart3, MapPinned, Building } from "lucide-react";

const points = [
  { icon: TrendingUp, title: "30% YoY Appreciation", desc: "Kharar–Kurali corridor has shown consistent growth in property values." },
  { icon: BarChart3, title: "High Rental Demand", desc: "Proximity to IT hubs and educational institutions drives rental income." },
  { icon: MapPinned, title: "Upcoming Infrastructure", desc: "Metro connectivity and highway expansion planned in the area." },
  { icon: Building, title: "Limited Inventory", desc: "Increasing demand and limited supply ensure strong returns." },
];

const InvestmentOpportunity = () => (
  <section className="py-20 bg-primary text-primary-foreground">
    <div className="container mx-auto px-4">
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-12">
        <span className="text-secondary font-semibold text-sm uppercase tracking-wider">Smart Investment</span>
        <h2 className="text-3xl md:text-4xl font-display font-bold mt-2">Investment Opportunity</h2>
        
      </motion.div>
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {points.map((p, i) => (
          <motion.div
            key={p.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="bg-primary-foreground/5 border border-primary-foreground/10 rounded-xl p-6 text-center"
          >
            <p.icon className="w-10 h-10 text-secondary mx-auto mb-4" />
            <h3 className="font-bold mb-2 font-sans">{p.title}</h3>
            <p className="text-primary-foreground/60 text-sm">{p.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default InvestmentOpportunity;

import { Route, IndianRupee, Building2, TreePine } from "lucide-react";
import { motion } from "framer-motion";

const highlights = [
  { icon: Route, title: "Highway Connectivity", desc: "Located on the 200 ft wide NH-21 highway connecting Chandigarh, Kharar and Kurali." },
  { icon: IndianRupee, title: "Affordable Housing", desc: "Perfect for middle-class families looking for their first home near Chandigarh." },
  { icon: Building2, title: "Complete Township", desc: "Apartments, plots, villas and commercial spaces in one integrated development." },
  { icon: TreePine, title: "Peaceful Living", desc: "Green surroundings, parks and family friendly environment." },
];

const QuickHighlights = () => (
  <section className="py-16 bg-warm-gray">
    <div className="container mx-auto px-4">
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-10">
        <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground">Key Highlights</h2>
      </motion.div>
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
        {highlights.map((item, i) => (
          <motion.div
            key={item.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="bg-card rounded-xl p-6 text-center shadow-sm hover:shadow-lg transition-shadow border"
          >
            <div className="w-14 h-14 bg-secondary/10 rounded-xl flex items-center justify-center mx-auto mb-4">
              <item.icon className="w-7 h-7 text-secondary" />
            </div>
            <h3 className="font-bold text-foreground mb-2 font-sans text-sm md:text-base">{item.title}</h3>
            <p className="text-muted-foreground text-xs md:text-sm">{item.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default QuickHighlights;

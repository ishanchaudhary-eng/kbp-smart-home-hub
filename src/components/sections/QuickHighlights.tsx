import { IndianRupee, Route, ShieldCheck, Users } from "lucide-react";
import { motion } from "framer-motion";

const highlights = [
  { icon: IndianRupee, title: "Affordable Homes", desc: "Best price per sq. ft. near Chandigarh" },
  { icon: Route, title: "Highway Connectivity", desc: "Located on 200 ft wide NH-21" },
  { icon: ShieldCheck, title: "Gated Township", desc: "24/7 security with CCTV surveillance" },
  { icon: Users, title: "Family Friendly", desc: "Parks, schools & healthcare nearby" },
];

const QuickHighlights = () => (
  <section className="py-16 bg-warm-gray">
    <div className="container mx-auto px-4">
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
            <h3 className="font-bold text-foreground mb-1 font-sans text-sm md:text-base">{item.title}</h3>
            <p className="text-muted-foreground text-xs md:text-sm">{item.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default QuickHighlights;

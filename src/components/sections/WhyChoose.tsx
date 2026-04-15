import { motion } from "framer-motion";
import { Award, Building2, ShieldCheck, TrendingUp, Landmark, Clock } from "lucide-react";
import FloatingParticles from "@/components/FloatingParticles";

const reasons = [
  { icon: Award, title: "30+ Years Experience", desc: "KBP Group is a trusted name in real estate with three decades of excellence." },
  { icon: Building2, title: "Delivered Projects", desc: "Multiple successful projects delivered on time across Punjab." },
  { icon: ShieldCheck, title: "Secure Gated Township", desc: "Round-the-clock security with CCTV and gated entry for your peace of mind." },
  { icon: TrendingUp, title: "High Appreciation", desc: "Strategic location on NH-205 ensures excellent returns on investment." },
  { icon: Landmark, title: "Modern Infrastructure", desc: "Wide roads, underground utilities and smart township planning." },
  { icon: Clock, title: "Timely Possession", desc: "Committed to delivering homes on the promised timeline." },
];

const WhyChoose = () => (
  <section className="py-20 bg-warm-gray relative overflow-hidden">
    <FloatingParticles count={8} color="primary" />
    <div className="container mx-auto px-4 relative z-10">
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-12">
        <span className="text-secondary font-semibold text-sm uppercase tracking-wider">Trust & Quality</span>
        <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mt-2">Why Choose KBP Smart City?</h2>
      </motion.div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {reasons.map((r, i) => (
          <motion.div
            key={r.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            whileHover={{ y: -6, boxShadow: "0 20px 40px -12px rgba(0,0,0,0.15)" }}
            className="bg-card rounded-xl p-6 border hover:shadow-lg transition-shadow group cursor-pointer"
          >
            <motion.div
              className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center mb-4 group-hover:bg-secondary transition-colors"
              whileHover={{ scale: 1.1, rotate: 5 }}
            >
              <r.icon className="w-6 h-6 text-primary-foreground" />
            </motion.div>
            <h3 className="font-bold text-foreground mb-2 font-sans">{r.title}</h3>
            <p className="text-muted-foreground text-sm">{r.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default WhyChoose;

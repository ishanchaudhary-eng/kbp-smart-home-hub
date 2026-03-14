import { motion } from "framer-motion";
import { Award, Building2, Users, MapPin } from "lucide-react";

const facts = [
  { icon: Award, value: "30+", label: "Years Experience" },
  { icon: Building2, value: "50+", label: "Projects Delivered" },
  { icon: Users, value: "5000+", label: "Happy Families" },
  { icon: MapPin, value: "10+", label: "Cities Across Punjab" },
];

const AboutKBP = () => (
  <section id="about" className="py-20">
    <div className="container mx-auto px-4">
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
          <span className="text-secondary font-semibold text-sm uppercase tracking-wider">The Developer</span>
          <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mt-2 mb-6">About KBP Group</h2>
          <p className="text-muted-foreground leading-relaxed mb-4">
            KBP Group has been a pioneer in the real estate industry for over three decades. With a strong commitment to quality, transparency, and timely delivery, we have earned the trust of thousands of homeowners across Punjab.
          </p>
          <p className="text-muted-foreground leading-relaxed mb-6">
            Our vision is to create smart, sustainable communities that offer world-class living at affordable prices. KBP Smart City is our flagship township project, embodying our philosophy of excellence in every brick.
          </p>
          <div className="grid grid-cols-2 gap-4">
            {facts.map((f) => (
              <div key={f.label} className="flex items-center gap-3 bg-muted rounded-xl p-4">
                <f.icon className="w-8 h-8 text-secondary shrink-0" />
                <div>
                  <p className="text-xl font-bold text-foreground">{f.value}</p>
                  <p className="text-muted-foreground text-xs">{f.label}</p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
        <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
          <div className="bg-gradient-to-br from-primary to-navy-light rounded-2xl h-80 md:h-96 flex items-center justify-center">
            <img src="/kbp-logo.png" alt="KBP Group" className="w-48 md:w-64 opacity-80" />
          </div>
        </motion.div>
      </div>
    </div>
  </section>
);

export default AboutKBP;

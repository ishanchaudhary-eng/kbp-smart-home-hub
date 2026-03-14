import { motion } from "framer-motion";
import { Building, MapPin, Ruler, TreePine } from "lucide-react";

const stats = [
  { icon: Building, value: "500+", label: "Units" },
  { icon: MapPin, value: "25 Acres", label: "Township Area" },
  { icon: Ruler, value: "200 ft", label: "Highway Width" },
  { icon: TreePine, value: "40%", label: "Open Green Area" },
];

const ProjectOverview = () => (
  <section id="overview" className="py-20">
    <div className="container mx-auto px-4">
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
          <span className="text-secondary font-semibold text-sm uppercase tracking-wider">Project Overview</span>
          <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mt-2 mb-6">
            A Smart Township for Smart Living
          </h2>
          <p className="text-muted-foreground leading-relaxed mb-6">
            KBP Smart City is a thoughtfully planned residential township located on the prime 200 ft wide NH-21 Kharar–Kurali Highway. Spread across 25 acres, this gated community offers a perfect blend of modern amenities and natural surroundings, making it the ideal choice for families seeking affordable luxury near Chandigarh.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            With a variety of configurations including 2 BHK & 3 BHK apartments, residential plots, villas, and commercial spaces — KBP Smart City caters to every need and budget.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 gap-4"
        >
          {stats.map((stat) => (
            <div key={stat.label} className="bg-primary text-primary-foreground rounded-xl p-6 text-center">
              <stat.icon className="w-8 h-8 text-secondary mx-auto mb-3" />
              <p className="text-2xl md:text-3xl font-bold">{stat.value}</p>
              <p className="text-primary-foreground/70 text-sm mt-1">{stat.label}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  </section>
);

export default ProjectOverview;

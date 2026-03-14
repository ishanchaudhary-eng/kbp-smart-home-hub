import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

const ProjectOverview = () => (
  <section id="overview" className="py-20">
    <div className="container mx-auto px-4">
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
          <span className="text-secondary font-semibold text-sm uppercase tracking-wider">Project Overview</span>
          <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mt-2 mb-6">
            Welcome To KBP Smart City
          </h2>
          <p className="text-muted-foreground leading-relaxed mb-4">
            KBP Smart City is a thoughtfully planned township designed for modern living near Chandigarh. Located on the Kharar–Kurali Highway, the project offers a perfect balance of connectivity, affordability and lifestyle.
          </p>
          <p className="text-muted-foreground leading-relaxed mb-4">
            Whether you are looking for your first home, an investment property or a commercial opportunity, KBP Smart City provides options that suit different needs and budgets.
          </p>
          <p className="text-muted-foreground leading-relaxed mb-6">
            The township offers well planned apartments, residential plots and commercial spaces surrounded by parks, open areas and modern amenities.
          </p>
          <Button className="bg-secondary text-secondary-foreground hover:bg-secondary/90 font-semibold h-12 px-8">
            Download Brochure
          </Button>
        </motion.div>

        <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
          <div className="bg-gradient-to-br from-primary to-navy-light rounded-2xl h-80 md:h-96 flex items-center justify-center">
            <p className="text-primary-foreground/40 text-sm">Township Image — Coming Soon</p>
          </div>
        </motion.div>
      </div>
    </div>
  </section>
);

export default ProjectOverview;

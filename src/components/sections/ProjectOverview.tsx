import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import townshipImg from "@/assets/apartment-exterior-1.webp";
import MotionBackground from "@/components/MotionBackground";

const ProjectOverview = () => (
  <section id="overview" className="py-20 relative overflow-hidden">
    <MotionBackground variant="lines" />
    <div className="container mx-auto px-4 relative z-10">
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
          <span className="text-secondary font-semibold text-sm uppercase tracking-wider">Project Overview</span>
          <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mt-2 mb-6">
            Welcome To KBP Smart City
          </h2>
          <p className="text-muted-foreground leading-relaxed mb-4">
            KBP Smart City is a township on the Kharar–Kurali Highway near Chandigarh. It includes apartments, residential plots and commercial spaces with parks, open areas and modern amenities.
          </p>
          <p className="text-muted-foreground leading-relaxed mb-6">
            Options available for first-time home buyers, investors and businesses.
          </p>
          <Button
            asChild
            className="bg-secondary text-secondary-foreground hover:bg-secondary/90 font-semibold h-12 px-8"
          >
            <a href="/KBP-Brochure.pdf" download="KBP-Smart-City-Brochure.pdf">
              Download Brochure
            </a>
          </Button>
        </motion.div>

        <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
          <div className="rounded-2xl h-80 md:h-96 overflow-hidden">
            <img src={townshipImg} alt="KBP Smart City Township Aerial View" className="w-full h-full object-cover" />
          </div>
        </motion.div>
      </div>
    </div>
  </section>
);

export default ProjectOverview;

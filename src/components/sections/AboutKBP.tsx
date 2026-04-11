import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const AboutKBP = () => (
  <section id="about" className="py-20">
    <div className="container mx-auto px-4">
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
          <span className="text-secondary font-semibold text-sm uppercase tracking-wider">The Developer</span>
          <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mt-2 mb-6">About KBP Group</h2>
          <p className="text-muted-foreground leading-relaxed mb-6">
            Established real estate developer with 30+ years in Punjab. Multiple residential and commercial projects delivered.
          </p>
          <Link to="/about">
            <Button className="bg-secondary text-secondary-foreground hover:bg-secondary/90 font-semibold h-12 px-8">
              Know More
            </Button>
          </Link>
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

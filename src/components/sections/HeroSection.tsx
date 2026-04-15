import { MapPin } from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import villasImg from "@/assets/villas-exterior.webp";

const HeroSection = () => {
  return (
    <section id="hero" className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary to-navy-dark" />
      <div className="absolute inset-0 bg-cover bg-center opacity-20" style={{ backgroundImage: `url(${villasImg})` }} />
      <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/50 to-transparent" />

      {/* Floating background shapes */}
      <motion.div
        className="absolute top-20 left-10 w-72 h-72 rounded-full bg-secondary/5 blur-3xl"
        animate={{ y: [0, 30, 0], scale: [1, 1.1, 1] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-20 right-10 w-96 h-96 rounded-full bg-secondary/5 blur-3xl"
        animate={{ y: [0, -20, 0], scale: [1, 1.05, 1] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="container mx-auto px-4 relative z-10 py-12 md:py-20">
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
          {/* Big Logo */}
          <motion.div
            className="bg-white rounded-2xl p-5 md:p-8 shadow-2xl mb-8"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7 }}
          >
            <img
              src="/kbp-logo.png"
              alt="KBP Smart City"
              className="h-24 md:h-36 lg:h-44 w-auto"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <div className="inline-block bg-secondary/20 text-secondary px-4 py-1.5 rounded-full text-sm font-semibold mb-4">
              Book Now
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-primary-foreground leading-tight mb-4">
              Affordable Homes Near Chandigarh
            </h1>
            <p className="text-primary-foreground/80 text-lg mb-4">
              2 & 3 BHK Apartments • Villas • Residential Plots • Commercial Spaces
            </p>
            <div className="flex items-center justify-center gap-2 text-primary-foreground/70 mb-6">
              <MapPin className="w-5 h-5 text-secondary" />
              <span className="text-lg">Located on NH-205 Kharar–Kurali Highway</span>
            </div>

            {/* Price */}
            <div className="bg-secondary/20 rounded-xl p-4 inline-block mb-6">
              <p className="text-primary-foreground/60 text-sm">Starting From</p>
              <p className="text-3xl font-bold text-secondary">₹54.90 Lakhs*</p>
              <p className="text-primary-foreground/50 text-xs">*T&C Apply</p>
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap justify-center gap-3 mb-6">
              <Button
                className="bg-secondary text-secondary-foreground hover:bg-secondary/90 font-bold text-base h-12 px-8 animate-pulse-gold"
                onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
              >
                Get Price List
              </Button>
              <Button
                className="border-secondary text-secondary bg-transparent hover:bg-secondary/10 font-bold text-base h-12 px-8"
                onClick={() => document.getElementById("site-visit")?.scrollIntoView({ behavior: "smooth" })}
              >
                Book Site Visit
              </Button>
            </div>

            {/* Trust Badges */}
            <div className="flex flex-wrap justify-center gap-4 text-primary-foreground/60 text-sm">
              <span className="flex items-center gap-1"> 30+ Years Experience</span>
              <span className="flex items-center gap-1"> Gated Township</span>
              <span className="flex items-center gap-1"> On 200ft Highway</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

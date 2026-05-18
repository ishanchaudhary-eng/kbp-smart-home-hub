import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";
import MathCaptcha from "@/components/MathCaptcha";
import FloatingParticles from "@/components/FloatingParticles";

const SiteVisitCTA = () => {
  const [formData, setFormData] = useState({ name: "", phone: "", date: "" });
  const [captchaVerified, setCaptchaVerified] = useState(false);
  const { toast } = useToast();
  const navigate = useNavigate();
  const location = useLocation();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.phone) {
      toast({ title: "Please fill required fields", description: "Name and phone number are required.", variant: "destructive" });
      return;
    }
    if (!captchaVerified) {
      toast({ title: "Please solve the math question", variant: "destructive" });
      return;
    }
    toast({ title: "Site Visit Booked!", description: "Our team will confirm your visit shortly." });
    navigate("/thank-you", { state: { from: location.pathname } });
  };

  return (
    <section id="site-visit" className="py-20 bg-gradient-to-r from-primary via-navy-dark to-primary text-primary-foreground relative overflow-hidden">
      <FloatingParticles count={12} color="secondary" />

      {/* Animated accent lines */}
      <motion.div
        className="absolute top-0 left-1/4 w-px h-full bg-gradient-to-b from-transparent via-secondary/15 to-transparent"
        animate={{ opacity: [0, 0.5, 0] }}
        transition={{ duration: 4, repeat: Infinity }}
      />
      <motion.div
        className="absolute top-0 right-1/3 w-px h-full bg-gradient-to-b from-transparent via-secondary/10 to-transparent"
        animate={{ opacity: [0, 0.4, 0] }}
        transition={{ duration: 6, repeat: Infinity, delay: 2 }}
      />

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
              Book Your <span className="text-secondary">Site Visit Today</span>
            </h2>
            <p className="text-primary-foreground/70 text-lg mb-6">
              Visit the project site and explore the township layout, amenities and location advantages in person.
            </p>
            <ul className="space-y-3 text-primary-foreground/80">
              {["Free pickup & drop from Chandigarh", "Expert guided tour of the township", "Special spot booking offers", "No obligation visit"].map((item, i) => (
                <motion.li
                  key={item}
                  className="flex items-center gap-2"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                >
                  <Check className="w-4 h-4 text-secondary" /> {item}
                </motion.li>
              ))}
            </ul>
          </motion.div>
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }}>
            <motion.div
                className="bg-card shadow-xl border rounded-xl p-6"
                whileHover={{ boxShadow: "0 25px 50px -12px rgba(0,0,0,0.25)" }}
              >
                <h3 className="text-xl font-bold font-display mb-4 text-foreground">Schedule Site Visit</h3>
                <form onSubmit={handleSubmit} className="space-y-3">
                  <Input placeholder="Your Name *" value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} required />
                  <Input placeholder="Phone Number *" type="tel" value={formData.phone} onChange={(e) => setFormData({ ...formData, phone: e.target.value })} required />
                  <Input type="date" value={formData.date} onChange={(e) => setFormData({ ...formData, date: e.target.value })} className="text-muted-foreground" />
                  <MathCaptcha onVerified={setCaptchaVerified} />
                  <Button type="submit" className="w-full bg-secondary text-secondary-foreground hover:bg-secondary/90 font-bold text-base h-12 animate-pulse-gold">
                    Schedule Site Visit →
                  </Button>
                </form>
                <p className="text-xs text-muted-foreground/50 mt-2 text-center">We respect your privacy. No spam.</p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default SiteVisitCTA;

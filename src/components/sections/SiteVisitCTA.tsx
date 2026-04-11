import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";
import MathCaptcha from "@/components/MathCaptcha";

const SiteVisitCTA = () => {
  const [formData, setFormData] = useState({ name: "", phone: "", date: "" });
  const [submitted, setSubmitted] = useState(false);
  const [captchaVerified, setCaptchaVerified] = useState(false);
  const { toast } = useToast();

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
    setSubmitted(true);
    toast({ title: "Site Visit Booked!", description: "Our team will confirm your visit shortly." });
  };

  return (
    <section id="site-visit" className="py-20 bg-gradient-to-r from-primary via-navy-dark to-primary text-primary-foreground">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
              Book Your <span className="text-secondary">Site Visit Today</span>
            </h2>
            <p className="text-primary-foreground/70 text-lg mb-6">
              Visit the project site and explore the township layout, amenities and location advantages in person.
            </p>
            <ul className="space-y-3 text-primary-foreground/80">
              <li className="flex items-center gap-2"> Free pickup & drop from Chandigarh</li>
              <li className="flex items-center gap-2"> Expert guided tour of the township</li>
              <li className="flex items-center gap-2"> Special spot booking offers</li>
              <li className="flex items-center gap-2"> No obligation visit</li>
            </ul>
          </motion.div>
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }}>
            {submitted ? (
              <div className="rounded-xl p-6 text-center bg-card shadow-xl border">
                <div className="text-4xl mb-3"></div>
                <h3 className="text-xl font-bold font-display mb-2 text-foreground">Visit Booked!</h3>
                <p className="text-sm text-muted-foreground">Our team will confirm your visit shortly.</p>
              </div>
            ) : (
              <div className="bg-card shadow-xl border rounded-xl p-6">
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
              </div>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default SiteVisitCTA;

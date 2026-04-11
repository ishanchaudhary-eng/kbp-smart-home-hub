import { useState } from "react";
import { motion } from "framer-motion";
import { MapPin, Clock, GraduationCap, Hospital, ShoppingBag, TrendingUp, Car, Building2, Utensils, Landmark, Bus, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useToast } from "@/hooks/use-toast";
import MathCaptcha from "@/components/MathCaptcha";

const connectivityData = [
  { city: "Chandigarh", time: "~25 min", icon: Building2 },
  { city: "Mohali", time: "~20 min", icon: Building2 },
  { city: "Kurali", time: "~10 min", icon: MapPin },
  { city: "Ropar", time: "~30 min", icon: MapPin },
  { city: "IT City Mohali", time: "~25 min", icon: Building2 },
];

const institutions = [
  { name: "Rayat Bahra University", icon: GraduationCap },
  { name: "Chandigarh University", icon: GraduationCap },
  { name: "Doaba Group of Colleges", icon: GraduationCap },
  { name: "Local Schools & Institutes", icon: GraduationCap },
];

const hospitals = [
  { name: "Civil Hospital Kharar", icon: Hospital },
  { name: "Fortis Hospital Mohali", icon: Hospital },
  { name: "Max Hospital Mohali", icon: Hospital },
];

const conveniences = [
  { label: "Shopping Areas", icon: ShoppingBag },
  { label: "Local Markets", icon: Landmark },
  { label: "Restaurants", icon: Utensils },
  { label: "Banks", icon: Building2 },
  { label: "Public Transport", icon: Bus },
];

const Location = () => {
  const [form, setForm] = useState({ name: "", phone: "", time: "" });
  const [submitted, setSubmitted] = useState(false);
  const [captchaVerified, setCaptchaVerified] = useState(false);
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.phone) {
      toast({ title: "Please fill required fields", variant: "destructive" });
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
    <main className="pt-16 md:pt-20">
      {/* HERO */}
      <section className="relative py-24 md:py-32 bg-gradient-to-br from-primary via-primary to-primary/90 text-primary-foreground overflow-hidden">
        <div className="absolute inset-0 bg-[url('/placeholder.svg')] opacity-5 bg-cover bg-center" />
        <div className="container mx-auto px-4 relative z-10 text-center">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <Badge variant="secondary" className="mb-4 text-sm px-4 py-1">Strategic Location</Badge>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-6">
              Prime Location Near <span className="text-secondary">Chandigarh</span>
            </h1>
            <p className="text-lg md:text-xl text-primary-foreground/80 max-w-3xl mx-auto mb-8">
              KBP Smart City is strategically located on the NH-21 Kharar–Kurali Highway offering excellent connectivity to Chandigarh, Mohali and surrounding towns.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="bg-secondary text-secondary-foreground hover:bg-secondary/90 font-semibold h-12 px-8 text-base">
                Get Location Details
              </Button>
              <Button variant="outline" className="border-secondary text-secondary bg-transparent hover:bg-secondary/10 h-12 px-8 text-base"
                onClick={() => document.getElementById("site-visit-form")?.scrollIntoView({ behavior: "smooth" })}>
                Book Site Visit
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* LOCATION OVERVIEW */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <span className="text-secondary font-semibold text-sm uppercase tracking-wider">Location Overview</span>
              <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mt-2 mb-6">
                Strategically Located For Easy Connectivity
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                KBP Smart City enjoys a prime location on the NH-21 Kharar–Kurali Highway, one of the fastest growing real estate corridors near Chandigarh. The project offers excellent connectivity to major cities, educational institutions, healthcare facilities and commercial hubs.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Whether you work in Chandigarh, Mohali or nearby industrial areas, the location ensures convenient travel and a well connected lifestyle.
              </p>
            </motion.div>
            <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <div className="bg-muted rounded-xl h-72 flex items-center justify-center border">
                <p className="text-muted-foreground text-sm">📍 Township Aerial View</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CONNECTIVITY */}
      <section className="py-20 bg-muted/50">
        <div className="container mx-auto px-4">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-12">
            <span className="text-secondary font-semibold text-sm uppercase tracking-wider">Connectivity</span>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mt-2">Excellent Road Connectivity</h2>
          </motion.div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 mb-8">
            {connectivityData.map((item, i) => (
              <motion.div key={item.city} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }}>
                <Card className="text-center hover:shadow-lg transition-shadow h-full">
                  <CardContent className="p-6">
                    <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center mx-auto mb-3">
                      <Car className="w-6 h-6 text-secondary" />
                    </div>
                    <h3 className="font-bold text-foreground mb-1">{item.city}</h3>
                    <p className="text-secondary font-semibold flex items-center justify-center gap-1">
                      <Clock className="w-4 h-4" /> {item.time}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
          <div className="text-center">
            <Badge variant="secondary" className="text-sm px-6 py-2">🛣️ Direct Access to NH-21 Highway</Badge>
          </div>
        </div>
      </section>

      {/* EDUCATIONAL INSTITUTIONS */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-12">
            <span className="text-secondary font-semibold text-sm uppercase tracking-wider">Education</span>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mt-2">Schools & Colleges Nearby</h2>
          </motion.div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
            {institutions.map((inst, i) => (
              <motion.div key={inst.name} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }}>
                <Card className="hover:shadow-lg transition-shadow h-full">
                  <CardContent className="p-6 text-center">
                    <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center mx-auto mb-3">
                      <inst.icon className="w-6 h-6 text-secondary" />
                    </div>
                    <h3 className="font-semibold text-foreground">{inst.name}</h3>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
          <p className="text-muted-foreground text-center max-w-2xl mx-auto">
            The project is surrounded by reputed educational institutions, making it an ideal choice for families with children and students.
          </p>
        </div>
      </section>

      {/* HEALTHCARE */}
      <section className="py-20 bg-muted/50">
        <div className="container mx-auto px-4">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-12">
            <span className="text-secondary font-semibold text-sm uppercase tracking-wider">Healthcare</span>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mt-2">Hospitals Nearby</h2>
          </motion.div>
          <div className="grid sm:grid-cols-3 gap-4 max-w-3xl mx-auto mb-8">
            {hospitals.map((h, i) => (
              <motion.div key={h.name} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }}>
                <Card className="hover:shadow-lg transition-shadow">
                  <CardContent className="p-6 text-center">
                    <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center mx-auto mb-3">
                      <h.icon className="w-6 h-6 text-secondary" />
                    </div>
                    <h3 className="font-semibold text-foreground">{h.name}</h3>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
          <p className="text-muted-foreground text-center max-w-2xl mx-auto">
            Quality healthcare facilities are easily accessible within short driving distance from the township.
          </p>
        </div>
      </section>

      {/* DAILY CONVENIENCE */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-12">
            <span className="text-secondary font-semibold text-sm uppercase tracking-wider">Convenience</span>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mt-2">Everything You Need Nearby</h2>
          </motion.div>
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            {conveniences.map((c, i) => (
              <motion.div key={c.label} initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: i * 0.06 }}>
                <div className="flex items-center gap-3 bg-card border rounded-xl px-5 py-4 hover:shadow-md transition-shadow">
                  <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center shrink-0">
                    <c.icon className="w-5 h-5 text-secondary" />
                  </div>
                  <span className="font-medium text-foreground">{c.label}</span>
                </div>
              </motion.div>
            ))}
          </div>
          <p className="text-muted-foreground text-center max-w-2xl mx-auto">
            Residents can enjoy convenient access to everyday essentials and services.
          </p>
        </div>
      </section>

      {/* FUTURE GROWTH */}
      <section className="py-20 bg-gradient-to-r from-primary via-primary to-primary/90 text-primary-foreground">
        <div className="container mx-auto px-4">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="max-w-3xl mx-auto text-center">
            <TrendingUp className="w-12 h-12 text-secondary mx-auto mb-4" />
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">Growing Real Estate Corridor</h2>
            <p className="text-primary-foreground/80 text-lg leading-relaxed mb-4">
              The Kharar–Kurali highway corridor is rapidly developing with new residential projects, commercial hubs and infrastructure developments. Property values in this region are expected to grow steadily as connectivity and infrastructure continue to improve.
            </p>
            <p className="text-primary-foreground/80 text-lg leading-relaxed">
              This makes KBP Smart City not only a great place to live but also a smart investment opportunity.
            </p>
          </motion.div>
        </div>
      </section>

      {/* MAP */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-12">
            <span className="text-secondary font-semibold text-sm uppercase tracking-wider">Map</span>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mt-2">Project Location Map</h2>
          </motion.div>
          <div className="rounded-xl overflow-hidden border shadow-lg mb-8">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d27388.5!2d76.65!3d30.75!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390fed0be66ec96b%3A0xa5ff67f9527319fe!2sKharar%2C%20Punjab!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
              width="100%"
              height="400"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="KBP Smart City Location"
            />
          </div>
          <div className="text-center">
            <Button className="bg-secondary text-secondary-foreground hover:bg-secondary/90 font-semibold h-12 px-8"
              onClick={() => window.open("https://maps.google.com/?q=Kharar+Kurali+Highway", "_blank")}>
              Get Directions
            </Button>
          </div>
        </div>
      </section>

      {/* SITE VISIT CTA */}
      <section id="site-visit-form" className="py-20 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center max-w-5xl mx-auto">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
              <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">
                Visit <span className="text-secondary">KBP Smart City</span>
              </h2>
              <p className="text-muted-foreground text-lg mb-6">
                Explore the location and experience the township in person.
              </p>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-center gap-2">✅ Free pickup & drop from Chandigarh</li>
                <li className="flex items-center gap-2">✅ Expert guided tour</li>
                <li className="flex items-center gap-2">✅ No obligation visit</li>
              </ul>
            </motion.div>
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }}>
              {submitted ? (
                <Card className="text-center">
                  <CardContent className="p-8">
                    <div className="text-4xl mb-3">✅</div>
                    <h3 className="text-xl font-bold font-display mb-2 text-foreground">Visit Booked!</h3>
                    <p className="text-sm text-muted-foreground">Our team will confirm your visit shortly.</p>
                  </CardContent>
                </Card>
              ) : (
                <Card>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold font-display mb-4 text-foreground">Book Site Visit</h3>
                    <form onSubmit={handleSubmit} className="space-y-3">
                      <Input placeholder="Your Name *" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} required />
                      <Input placeholder="Phone Number *" type="tel" value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} required />
                      <Input placeholder="Preferred Visit Time" value={form.time} onChange={(e) => setForm({ ...form, time: e.target.value })} />
                      <MathCaptcha onVerified={setCaptchaVerified} />
                      <Button type="submit" className="w-full bg-secondary text-secondary-foreground hover:bg-secondary/90 font-bold text-base h-12 animate-pulse-gold">
                        Book Site Visit →
                      </Button>
                    </form>
                    <p className="text-xs text-muted-foreground/50 mt-2 text-center">We respect your privacy. No spam.</p>
                  </CardContent>
                </Card>
              )}
            </motion.div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Location;

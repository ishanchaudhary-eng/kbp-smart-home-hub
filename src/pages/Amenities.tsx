import { useState } from "react";
import { motion } from "framer-motion";
import {
  Check,
  Shield,
  Trees,
  Baby,
  Footprints,
  Dumbbell,
  PartyPopper,
  Heart,
  Users,
  Briefcase,
  Smile,
  Cctv,
  DoorOpen,
  Route as RouteIcon,
  Building2,
  Landmark,
  GraduationCap,
  Clock,
  Droplets,
  Lightbulb,
  Cable,
  Fence,
  LandPlot,
  Leaf,
  Wind,
  MoveRight,
  Warehouse,
  PersonStanding,
  Flower2,
  Gamepad2,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import ContactFooter from "@/components/sections/ContactFooter";
import { useToast } from "@/hooks/use-toast";
import MathCaptcha from "@/components/MathCaptcha";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import villaInteriorImg from "@/assets/Independent_Villa-2.jpeg";
import greenSpaceImg from "@/assets/green-space.webp";

/* ───── FORM ───── */
interface AmenityFormProps {
  title: string;
  buttonText: string;
  variant?: "light" | "dark";
  showInterest?: boolean;
  showDate?: boolean;
}

const AmenityForm = ({ title, buttonText, variant = "light", showInterest = false, showDate = false }: AmenityFormProps) => {
  const [data, setData] = useState({ name: "", phone: "", interest: "", date: "" });
  const [done, setDone] = useState(false);
  const [captchaVerified, setCaptchaVerified] = useState(false);
  const { toast } = useToast();

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!data.name || !data.phone) {
      toast({ title: "Please fill required fields", description: "Name and phone are required.", variant: "destructive" });
      return;
    }
    if (!captchaVerified) {
      toast({ title: "Please solve the math question", variant: "destructive" });
      return;
    }
    setDone(true);
    toast({ title: "Thank You!", description: "Our team will contact you shortly." });
  };

  const bg = variant === "dark" ? "bg-primary text-primary-foreground" : "bg-card shadow-xl border";
  const inp = variant === "dark" ? "bg-primary-foreground/10 border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/50" : "";

  if (done)
    return (
      <div className={`rounded-xl p-6 text-center ${bg}`}>
        <div className="w-12 h-12 bg-secondary/20 rounded-full flex items-center justify-center mx-auto mb-3"><Check className="w-6 h-6 text-secondary" /></div>
        <h3 className="text-xl font-bold font-display mb-2">Thank You!</h3>
        <p className="text-sm opacity-80">Our team will contact you within 30 minutes.</p>
      </div>
    );

  return (
    <div className={`rounded-xl p-6 ${bg}`}>
      <h3 className={`font-display font-bold text-xl mb-4 ${variant === "dark" ? "text-primary-foreground" : "text-foreground"}`}>{title}</h3>
      <form onSubmit={submit} className="space-y-3">
        <Input placeholder="Your Name *" value={data.name} onChange={(e) => setData({ ...data, name: e.target.value })} className={inp} required />
        <Input placeholder="Phone Number *" type="tel" value={data.phone} onChange={(e) => setData({ ...data, phone: e.target.value })} className={inp} required />
        {showInterest && (
          <select value={data.interest} onChange={(e) => setData({ ...data, interest: e.target.value })} className={`w-full h-10 rounded-md border px-3 text-sm ${inp || "border-input bg-background"}`}>
            <option value="">Interested In</option>
            <option value="2bhk">2 BHK Apartment</option>
            <option value="3bhk">3 BHK Apartment</option>
            <option value="plot">Residential Plot</option>
            <option value="commercial">Commercial Shop</option>
            <option value="villa">Villa</option>
          </select>
        )}
        {showDate && <Input placeholder="Preferred Visit Date" type="date" value={data.date} onChange={(e) => setData({ ...data, date: e.target.value })} className={inp} />}
        <MathCaptcha onVerified={setCaptchaVerified} inputClassName={inp} />
        <Button type="submit" className="w-full bg-secondary text-secondary-foreground hover:bg-secondary/90 font-bold text-base h-12 animate-pulse-gold">{buttonText}</Button>
      </form>
      <p className="text-xs opacity-50 mt-2 text-center">We respect your privacy. No spam.</p>
    </div>
  );
};

/* ───── DATA ───── */
const lifestyleAmenities = [
  { icon: Fence, title: "Excellent Gated Community", text: "Controlled entry and organized township environment." },
  { icon: PartyPopper, title: "Club House", text: "Shared space for recreation and community events." },
  { icon: Baby, title: "Kids Play Area", text: "Outdoor play space for children." },
  { icon: Footprints, title: "Jogging / Walking Track", text: "Track within the township." },
  { icon: Flower2, title: "Yoga / Meditation Square", text: "Quiet space for wellness routines." },
  { icon: Gamepad2, title: "Indoor Badminton Court", text: "Indoor sports facility." },
  { icon: Dumbbell, title: "Gymnasium", text: "Fitness facility for residents." },
  { icon: Trees, title: "Theme Park & Amenities Zone", text: "Leisure and activity area." },
  { icon: PersonStanding, title: "Elderly Sit-Out Area", text: "Dedicated spaces for senior residents." },
  { icon: Wind, title: "40% Open Area", text: "Open green space across the township." },
];

const infraFeatures = [
  { icon: Cctv, title: "CCTV Surveillance", text: "Monitoring across common areas for added peace of mind." },
  { icon: Shield, title: "Secured Entry & Exit", text: "Boom barriers and security room for controlled access." },
  { icon: DoorOpen, title: "45 Ft Lavish Entrance Gate", text: "A strong first impression with organized entry movement." },
  { icon: MoveRight, title: "30 to 45 Ft Wide Internal Roads", text: "Better internal circulation and ease of movement." },
  { icon: Droplets, title: "24 Hours Water Supply", text: "Independent large water tank for daily convenience." },
  { icon: Warehouse, title: "STP / Sewerage Treatment", text: "Planned infrastructure for better township support." },
  { icon: Lightbulb, title: "LED Street Lights", text: "Improved visibility and safer internal environment." },
  { icon: Cable, title: "Underground Wiring (Proposed)", text: "Cleaner visual environment and future-ready infrastructure." },
];

const familyCards = [
  { icon: Baby, title: "For Children", text: "Play areas and open spaces." },
  { icon: Briefcase, title: "For Working Parents", text: "Security, connectivity and daily convenience." },
  { icon: Heart, title: "For Elders", text: "Walking space and quiet sit-out zones." },
  { icon: Smile, title: "For Everyone", text: "Recreation, safety and green space." },
];

const locationPoints = [
  { icon: RouteIcon, time: "0 min", name: "Bharatmala Expressway" },
  { icon: Building2, time: "5 min", name: "Mohali" },
  { icon: Landmark, time: "10 min", name: "Chandigarh" },
  { icon: GraduationCap, time: "10 min", name: "Chandigarh University" },
];

const openSpacePoints = ["Open planning", "Green areas", "Walking movement", "Less crowding"];

const faqs = [
  { q: "What amenities are available in KBP Smart City?", a: "The township offers a clubhouse, kids play area, jogging track, gymnasium, yoga/meditation area, indoor badminton court, theme park zone, elderly sit-out areas, 40% open space and more." },
  { q: "Is the township suitable for families with children?", a: "Yes. With dedicated play areas, open green spaces, security features and walking tracks, the township is designed with families and children in mind." },
  { q: "Are there fitness and recreation facilities?", a: "Yes. Residents have access to a gymnasium, indoor badminton court, jogging/walking track and yoga/meditation square." },
  { q: "Is the project a gated community?", a: "Yes. KBP Smart City is a gated township with CCTV surveillance, boom barrier entry/exit and 24-hour security provisions." },
  { q: "Are open green spaces available?", a: "The township is planned with 40% open area, providing ample green zones, breathing space and a less congested living environment." },
  { q: "Can I visit the site before booking?", a: "Absolutely. We encourage all buyers to visit. Schedule a free site visit through our website or call our sales team." },
];

/* ═══════════ PAGE ═══════════ */
const Amenities = () => (
  <main className="scroll-smooth">
    {/* ── S1 – HERO ── */}
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary to-navy-dark" />
      <div className="absolute inset-0 bg-cover bg-center opacity-20" style={{ backgroundImage: `url(${villaInteriorImg})` }} />
      <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/50 to-transparent" />

      <div className="container mx-auto px-4 relative z-10 py-12 md:py-20">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            <div className="inline-block bg-secondary/20 text-secondary px-4 py-1.5 rounded-full text-sm font-semibold mb-4">
               Township Amenities
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-primary-foreground leading-tight mb-4">
              Township Amenities & Facilities
            </h1>
            <p className="text-primary-foreground/80 text-lg mb-6">
              Gated township with recreation, security and open spaces.
            </p>

            <div className="flex flex-wrap gap-3 mb-6">
              {["Gated Community", "40% Open Area", "Clubhouse", "Family-Friendly Amenities"].map((t) => (
                <span key={t} className="bg-secondary/20 text-secondary text-xs font-bold px-3 py-1.5 rounded-full"> {t}</span>
              ))}
            </div>

            <div className="flex flex-wrap gap-3">
              <Button className="bg-secondary text-secondary-foreground hover:bg-secondary/90 font-bold text-base h-12 px-8 animate-pulse-gold" onClick={() => document.getElementById("amenity-site-visit")?.scrollIntoView({ behavior: "smooth" })}>
                Book Site Visit
              </Button>
              <Button variant="outline" className="border-secondary text-secondary bg-transparent hover:bg-secondary/10 font-bold text-base h-12 px-8" onClick={() => document.getElementById("amenity-hero-form")?.scrollIntoView({ behavior: "smooth" })}>
                Get Brochure
              </Button>
            </div>
          </motion.div>

          <motion.div id="amenity-hero-form" initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.7, delay: 0.3 }}>
            <AmenityForm title="Get Project Brochure" buttonText="Submit Enquiry" showInterest variant="light" />
          </motion.div>
        </div>
      </div>
    </section>

    {/* ── S2 – INTRO ── */}
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4 max-w-3xl text-center">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <span className="text-secondary font-semibold text-sm uppercase tracking-wider">About The Township</span>
          <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mt-2 mb-6">About The Township</h2>
          <p className="text-muted-foreground leading-relaxed mb-4">
            KBP Smart City includes amenities for daily comfort, safety and recreation. The township has play areas for children, sit-out zones for elders, fitness facilities and 40% open space.
          </p>
        </motion.div>
      </div>
    </section>

    {/* ── S3 – KEY AMENITIES ── */}
    <section className="py-20 bg-muted">
      <div className="container mx-auto px-4">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-12">
          <span className="text-secondary font-semibold text-sm uppercase tracking-wider">Lifestyle</span>
          <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mt-2">Lifestyle Amenities At KBP Smart City</h2>
        </motion.div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-5">
          {lifestyleAmenities.map((a, i) => (
            <motion.div key={a.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.05 }}
              className="bg-card rounded-2xl border p-5 text-center hover:shadow-lg transition-shadow"
            >
              <div className="w-12 h-12 rounded-full bg-secondary/10 flex items-center justify-center mx-auto mb-3">
                <a.icon className="w-6 h-6 text-secondary" />
              </div>
              <h3 className="font-bold text-foreground font-sans text-sm mb-1">{a.title}</h3>
              <p className="text-muted-foreground text-xs leading-relaxed">{a.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    {/* ── S4 – SAFETY & INFRA ── */}
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-12">
          <span className="text-secondary font-semibold text-sm uppercase tracking-wider">Infrastructure</span>
          <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mt-2">Township Infrastructure</h2>
        </motion.div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {infraFeatures.map((f, i) => (
            <motion.div key={f.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.06 }}
              className="bg-card rounded-2xl border p-6 text-center"
            >
              <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <f.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="font-bold text-foreground font-sans mb-2 text-sm">{f.title}</h3>
              <p className="text-muted-foreground text-xs leading-relaxed">{f.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    {/* ── S5 – FAMILY LIFE ── */}
    <section className="py-20 bg-muted">
      <div className="container mx-auto px-4">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-12">
          <span className="text-secondary font-semibold text-sm uppercase tracking-wider">Family Living</span>
          <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mt-2">Designed For All Age Groups</h2>
        </motion.div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {familyCards.map((c, i) => (
            <motion.div key={c.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
              className="bg-card rounded-2xl border p-6 text-center hover:shadow-lg transition-shadow"
            >
              <div className="w-14 h-14 rounded-full bg-secondary/10 flex items-center justify-center mx-auto mb-4">
                <c.icon className="w-7 h-7 text-secondary" />
              </div>
              <h3 className="font-bold text-foreground font-sans mb-2">{c.title}</h3>
              <p className="text-muted-foreground text-sm">{c.text}</p>
            </motion.div>
          ))}
        </div>
        <div className="text-center">
          <Button className="bg-secondary text-secondary-foreground hover:bg-secondary/90 font-bold h-12 px-8" onClick={() => document.getElementById("amenity-site-visit")?.scrollIntoView({ behavior: "smooth" })}>
            Explore The Township
          </Button>
        </div>
      </div>
    </section>

    {/* ── S6 – OPEN SPACE ── */}
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
            <span className="text-secondary font-semibold text-sm uppercase tracking-wider">Green Living</span>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mt-2 mb-4">40% Open Area</h2>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              40% of the township is open space with wide roads, green zones and activity areas.
            </p>
            <div className="grid grid-cols-2 gap-4">
              {openSpacePoints.map((p) => (
                <div key={p} className="flex items-center gap-3 bg-muted rounded-xl p-4">
                  <Leaf className="w-5 h-5 text-secondary shrink-0" />
                  <span className="text-foreground text-sm font-semibold font-sans">{p}</span>
                </div>
              ))}
            </div>
          </motion.div>
          <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
            <div className="rounded-2xl border overflow-hidden h-64 md:h-80">
              <img src={greenSpaceImg} alt="KBP Smart City Green Open Space" className="w-full h-full object-cover" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>

    {/* ── S7 – AMENITIES + LOCATION ── */}
    <section className="py-20 bg-muted">
      <div className="container mx-auto px-4">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-12">
          <span className="text-secondary font-semibold text-sm uppercase tracking-wider">Connectivity</span>
          <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mt-2">Connectivity</h2>
        </motion.div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {locationPoints.map((lp, i) => (
            <motion.div key={lp.name} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="bg-card rounded-2xl border p-6 text-center">
              <div className="w-12 h-12 rounded-full bg-secondary/10 flex items-center justify-center mx-auto mb-3">
                <lp.icon className="w-6 h-6 text-secondary" />
              </div>
              <span className="inline-flex items-center gap-1 bg-secondary/10 text-secondary text-xs font-bold px-2.5 py-1 rounded-full mb-2">
                <Clock className="w-3 h-3" />{lp.time}
              </span>
              <p className="font-bold text-foreground font-sans text-sm">{lp.name}</p>
            </motion.div>
          ))}
        </div>
        <p className="text-center text-muted-foreground text-sm max-w-2xl mx-auto mb-6">
          Direct road access to Mohali, Chandigarh and nearby towns.
        </p>
        <div className="text-center">
          <Button className="bg-secondary text-secondary-foreground hover:bg-secondary/90 font-bold h-12 px-8" onClick={() => (window.location.href = "/location")}>
            View Full Location Advantage
          </Button>
        </div>
      </div>
    </section>

    {/* ── S8 – WHY IT MATTERS ── */}
    <section className="py-20 bg-gradient-to-br from-primary via-primary to-navy-dark">
      <div className="container mx-auto px-4 max-w-3xl text-center">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <span className="text-secondary font-semibold text-sm uppercase tracking-wider">Buyer Insight</span>
          <h2 className="text-3xl md:text-4xl font-display font-bold text-primary-foreground mt-2 mb-6">Why Amenities Matter</h2>
          <p className="text-primary-foreground/70 leading-relaxed mb-4">
            Amenities like play areas, walking tracks, green space and security add to everyday quality of life and long-term property value.
          </p>
          <p className="text-primary-foreground/70 leading-relaxed mb-8">
            Important for families choosing where to live.
          </p>
          <AmenityForm title="Get Township Brochure" buttonText="Send Me Details →" showInterest variant="dark" />
        </motion.div>
      </div>
    </section>

    {/* ── S9 – SITE VISIT ── */}
    <section id="amenity-site-visit" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <span className="text-secondary font-semibold text-sm uppercase tracking-wider">Visit Us</span>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mt-2 mb-4">Visit The Township</h2>
            <p className="text-muted-foreground mb-6 text-lg">
              Walk through the township and see the amenities in person.
            </p>
            <div className="flex flex-wrap gap-3">
              <Button className="bg-secondary text-secondary-foreground hover:bg-secondary/90 font-bold h-12 px-8" onClick={() => document.getElementById("amenity-visit-form")?.scrollIntoView({ behavior: "smooth" })}>
                Book Site Visit
              </Button>
              <Button variant="outline" className="font-bold h-12 px-8" onClick={() => (window.location.href = "tel:+918699366993")}>
                Talk To Sales Team
              </Button>
            </div>
          </motion.div>

          <motion.div id="amenity-visit-form" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.7, delay: 0.2 }}>
            <AmenityForm title="Book A Site Visit" buttonText="Book Site Visit →" showDate variant="light" />
          </motion.div>
        </div>
      </div>
    </section>

    {/* ── S10 – FAQ ── */}
    <section className="py-20 bg-muted">
      <div className="container mx-auto px-4 max-w-3xl">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-12">
          <span className="text-secondary font-semibold text-sm uppercase tracking-wider">FAQs</span>
          <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mt-2">Frequently Asked Questions</h2>
        </motion.div>
        <Accordion type="single" collapsible className="space-y-3">
          {faqs.map((faq, i) => (
            <AccordionItem key={i} value={`faq-${i}`} className="bg-card rounded-xl border px-5">
              <AccordionTrigger className="text-foreground font-semibold font-sans text-sm hover:no-underline py-4">{faq.q}</AccordionTrigger>
              <AccordionContent className="text-muted-foreground text-sm pb-4">{faq.a}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>

    {/* ── S11 – FOOTER ── */}
    <ContactFooter />
  </main>
);

export default Amenities;

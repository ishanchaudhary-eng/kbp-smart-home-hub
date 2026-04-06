import { useState } from "react";
import { motion } from "framer-motion";
import {
  Check,
  Store,
  TrendingUp,
  Users,
  Eye,
  Route,
  Building2,
  Landmark,
  GraduationCap,
  Clock,
  ShoppingBag,
  Coffee,
  Scissors,
  Briefcase,
  MapPin,
  BarChart3,
  Home,
  ArrowUpRight,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import ContactFooter from "@/components/sections/ContactFooter";
import { useToast } from "@/hooks/use-toast";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

/* ───── FORM ───── */
interface ShopFormProps {
  title: string;
  buttonText: string;
  variant?: "light" | "dark";
  showBusiness?: boolean;
  showBudget?: boolean;
  showDate?: boolean;
}

const ShopForm = ({ title, buttonText, variant = "light", showBusiness = false, showBudget = false, showDate = false }: ShopFormProps) => {
  const [data, setData] = useState({ name: "", phone: "", business: "", budget: "", date: "" });
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
        <div className="text-4xl mb-3">✅</div>
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
        {showBusiness && (
          <select value={data.business} onChange={(e) => setData({ ...data, business: e.target.value })} className={`w-full h-10 rounded-md border px-3 text-sm ${inp || "border-input bg-background"}`}>
            <option value="">Business Type</option>
            <option value="retail">Retail Shop</option>
            <option value="food">Food & Beverage</option>
            <option value="services">Daily Services</option>
            <option value="office">Professional Office</option>
            <option value="other">Other</option>
          </select>
        )}
        {showBudget && (
          <select value={data.budget} onChange={(e) => setData({ ...data, budget: e.target.value })} className={`w-full h-10 rounded-md border px-3 text-sm ${inp || "border-input bg-background"}`}>
            <option value="">Budget Range</option>
            <option value="50-82">₹50 – 82 Lac</option>
            <option value="82-100">₹82 Lac – 1 Cr</option>
            <option value="100+">₹1 Cr+</option>
          </select>
        )}
        {showDate && <Input placeholder="Preferred Visit Date" type="date" value={data.date} onChange={(e) => setData({ ...data, date: e.target.value })} className={inp} />}
        <Button type="submit" className="w-full bg-secondary text-secondary-foreground hover:bg-secondary/90 font-bold text-base h-12 animate-pulse-gold">{buttonText}</Button>
      </form>
      <p className="text-xs opacity-50 mt-2 text-center">We respect your privacy. No spam.</p>
    </div>
  );
};

/* ───── DATA ───── */
const whyInvest = [
  { icon: Eye, title: "Highway Visibility", text: "Located on NH-21 providing strong visibility for businesses." },
  { icon: Users, title: "Growing Township", text: "Residential population inside the township ensures daily footfall." },
  { icon: TrendingUp, title: "Investment Potential", text: "Commercial shops can generate rental income and long-term appreciation." },
  { icon: MapPin, title: "Strategic Location", text: "Well connected to Mohali, Chandigarh and nearby towns." },
];

const businessTypes = [
  { icon: ShoppingBag, title: "Retail Shops", text: "Grocery stores, convenience shops, clothing outlets." },
  { icon: Coffee, title: "Food & Beverage", text: "Cafes, bakeries and quick service restaurants." },
  { icon: Scissors, title: "Daily Services", text: "Salons, pharmacies, stationery stores." },
  { icon: Briefcase, title: "Professional Offices", text: "Consultants, service providers and small offices." },
];

const advantages = [
  "Township customer base",
  "Highway connectivity",
  "Growing residential population",
  "Strategic location near education hubs",
  "Daily essential business demand",
];

const locationPoints = [
  { icon: Route, time: "0 min", name: "Bharatmala Expressway" },
  { icon: Building2, time: "5 min", name: "Mohali" },
  { icon: Landmark, time: "10 min", name: "Chandigarh" },
  { icon: GraduationCap, time: "10 min", name: "Chandigarh University" },
];

const investorBenefits = [
  "Rental income potential",
  "Growing demand from residents",
  "Long term property appreciation",
];

const faqs = [
  { q: "Are commercial shops available for investment?", a: "Yes, commercial shops at KBP Smart City are available for both self-use and investment purposes. Contact our team for current availability." },
  { q: "Is financing available?", a: "Yes, bank loan options are available for eligible buyers. Our sales team can guide you through the financing process." },
  { q: "Is the project suitable for retail businesses?", a: "Absolutely. The township's residential population and highway location create strong demand for retail, food, and daily service businesses." },
  { q: "What business types are allowed?", a: "A wide range of businesses are permitted including retail shops, restaurants, salons, pharmacies, professional offices and more." },
  { q: "Can I visit before booking?", a: "Yes, we encourage all buyers to visit the site. Schedule a free site visit through our website or call our sales team." },
];

/* ═══════════ PAGE ═══════════ */
const Commercial = () => (
  <main className="scroll-smooth">
    {/* ── S1 – HERO ── */}
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary to-navy-dark" />
      <div className="absolute inset-0 bg-[url('/placeholder.svg')] bg-cover bg-center opacity-10" />
      <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/50 to-transparent" />

      <div className="container mx-auto px-4 relative z-10 py-12 md:py-20">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            <div className="inline-block bg-secondary/20 text-secondary px-4 py-1.5 rounded-full text-sm font-semibold mb-4">
              🏪 Commercial at KBP Smart City
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-primary-foreground leading-tight mb-4">
              Commercial Shops Near Chandigarh
            </h1>
            <p className="text-primary-foreground/80 text-lg mb-6">
              High Visibility Retail Spaces at KBP Smart City
            </p>

            <div className="flex flex-wrap gap-3 mb-6">
              {["Prime Highway Location", "Township Footfall", "Investment Opportunity"].map((t) => (
                <span key={t} className="bg-secondary/20 text-secondary text-xs font-bold px-3 py-1.5 rounded-full">✅ {t}</span>
              ))}
            </div>

            <div className="bg-secondary/20 rounded-xl p-4 inline-block mb-6">
              <p className="text-primary-foreground/60 text-sm">Showrooms Starting From</p>
              <p className="text-3xl font-bold text-secondary">₹81.90 Lakhs*</p>
              <p className="text-primary-foreground/50 text-xs">*T&C Apply</p>
            </div>

            <div className="flex flex-wrap gap-3">
              <Button className="bg-secondary text-secondary-foreground hover:bg-secondary/90 font-bold text-base h-12 px-8 animate-pulse-gold" onClick={() => document.getElementById("comm-hero-form")?.scrollIntoView({ behavior: "smooth" })}>
                Get Shop Price List
              </Button>
              <Button variant="outline" className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 font-bold text-base h-12 px-8" onClick={() => document.getElementById("comm-site-visit")?.scrollIntoView({ behavior: "smooth" })}>
                Book Site Visit
              </Button>
            </div>
          </motion.div>

          <motion.div id="comm-hero-form" initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.7, delay: 0.3 }}>
            <ShopForm title="Get Shop Price List" buttonText="Submit Enquiry" showBusiness variant="light" />
          </motion.div>
        </div>
      </div>
    </section>

    {/* ── S2 – WHY INVEST ── */}
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-12">
          <span className="text-secondary font-semibold text-sm uppercase tracking-wider">Why Invest</span>
          <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mt-2">Why Invest In Shops At KBP Smart City</h2>
        </motion.div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {whyInvest.map((w, i) => (
            <motion.div key={w.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="bg-card rounded-2xl border p-6 text-center hover:shadow-lg transition-shadow">
              <div className="w-14 h-14 rounded-full bg-secondary/10 flex items-center justify-center mx-auto mb-4">
                <w.icon className="w-7 h-7 text-secondary" />
              </div>
              <h3 className="font-bold text-foreground font-sans mb-2">{w.title}</h3>
              <p className="text-muted-foreground text-sm">{w.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    {/* ── S3 – IDEAL BUSINESSES ── */}
    <section className="py-20 bg-muted">
      <div className="container mx-auto px-4">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-12">
          <span className="text-secondary font-semibold text-sm uppercase tracking-wider">Business Types</span>
          <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mt-2">Perfect For Multiple Business Types</h2>
        </motion.div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {businessTypes.map((b, i) => (
            <motion.div key={b.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="bg-card rounded-2xl border p-6 text-center">
              <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <b.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="font-bold text-foreground font-sans mb-2">{b.title}</h3>
              <p className="text-muted-foreground text-sm">{b.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    {/* ── S4 – COMMERCIAL ADVANTAGES ── */}
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
            <span className="text-secondary font-semibold text-sm uppercase tracking-wider">Advantages</span>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mt-2 mb-6">Why Businesses Thrive Here</h2>
            <ul className="space-y-4 mb-8">
              {advantages.map((a) => (
                <li key={a} className="flex items-center gap-3 text-foreground">
                  <Check className="w-5 h-5 text-secondary shrink-0" /> {a}
                </li>
              ))}
            </ul>
            <Button className="bg-secondary text-secondary-foreground hover:bg-secondary/90 font-bold h-12 px-8" onClick={() => document.getElementById("comm-price-form")?.scrollIntoView({ behavior: "smooth" })}>
              Request Commercial Details
            </Button>
          </motion.div>
          <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
            <div className="bg-gradient-to-br from-card to-muted rounded-2xl border h-64 md:h-80 flex items-center justify-center">
              <p className="text-muted-foreground">Commercial Area Visual</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>

    {/* ── S5 – LOCATION ── */}
    <section className="py-20 bg-muted">
      <div className="container mx-auto px-4">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-12">
          <span className="text-secondary font-semibold text-sm uppercase tracking-wider">Location</span>
          <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mt-2">Strong Location Advantage</h2>
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
          Excellent connectivity ensures regular customer movement and strong business potential.
        </p>
        <div className="text-center">
          <Button className="bg-secondary text-secondary-foreground hover:bg-secondary/90 font-bold h-12 px-8" onClick={() => (window.location.href = "/location")}>
            View Location Map
          </Button>
        </div>
      </div>
    </section>

    {/* ── S6 – INVESTMENT POTENTIAL ── */}
    <section className="py-20 bg-gradient-to-br from-primary via-primary to-navy-dark">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <span className="text-secondary font-semibold text-sm uppercase tracking-wider">Investment</span>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-primary-foreground mt-2 mb-4">Smart Commercial Investment</h2>
            <p className="text-primary-foreground/70 mb-6">
              Commercial properties in developing townships often benefit from increasing population and rising demand for retail and services.
            </p>
            <p className="text-primary-foreground/80 font-semibold mb-4 font-sans">Investors can benefit from:</p>
            <ul className="space-y-3 mb-8">
              {investorBenefits.map((b) => (
                <li key={b} className="flex items-center gap-3 text-primary-foreground/80">
                  <ArrowUpRight className="w-5 h-5 text-secondary shrink-0" /> {b}
                </li>
              ))}
            </ul>
            <Button className="bg-secondary text-secondary-foreground hover:bg-secondary/90 font-bold h-12 px-8" onClick={() => document.getElementById("comm-price-form")?.scrollIntoView({ behavior: "smooth" })}>
              Request Investment Details
            </Button>
          </motion.div>
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <div className="bg-primary-foreground/5 border border-primary-foreground/10 rounded-2xl p-8 text-center">
              <BarChart3 className="w-16 h-16 text-secondary mx-auto mb-4" />
              <p className="text-primary-foreground/60 text-sm">Commercial property values in developing corridors near Chandigarh have shown consistent growth trends.</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>

    {/* ── S7 – PRICE / ENQUIRY ── */}
    <section id="comm-pricing" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-10 items-start">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <span className="text-secondary font-semibold text-sm uppercase tracking-wider">Pricing</span>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mt-2 mb-4">Get Commercial Shop Pricing</h2>
            <p className="text-muted-foreground mb-8">
              Contact our sales team to receive the latest shop sizes, pricing and availability.
            </p>
            <div className="bg-card rounded-xl border p-6">
              <div className="flex justify-between items-center mb-4">
                <div>
                  <p className="font-bold text-foreground font-sans">Commercial Showrooms</p>
                  <p className="text-muted-foreground text-sm">Multiple sizes available</p>
                </div>
                <p className="text-2xl font-bold text-secondary">₹81.90 Lac*</p>
              </div>
              <p className="text-xs text-muted-foreground">* Starting price. Contact us for detailed pricing based on shop size and location within the project.</p>
            </div>
          </motion.div>

          <motion.div id="comm-price-form" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <ShopForm title="Send Me Shop Details" buttonText="Send Me Shop Details →" showBusiness showBudget />
          </motion.div>
        </div>
      </div>
    </section>

    {/* ── S8 – SITE VISIT ── */}
    <section id="comm-site-visit" className="py-20 bg-muted">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <span className="text-secondary font-semibold text-sm uppercase tracking-wider">Visit Us</span>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mt-2 mb-4">Explore The Commercial Area</h2>
            <p className="text-muted-foreground mb-6 text-lg">
              Visit the site to understand shop placement, access and location advantage.
            </p>
            <div className="flex flex-wrap gap-3">
              <Button className="bg-secondary text-secondary-foreground hover:bg-secondary/90 font-bold h-12 px-8" onClick={() => document.getElementById("comm-visit-form")?.scrollIntoView({ behavior: "smooth" })}>
                Book Site Visit
              </Button>
              <Button variant="outline" className="font-bold h-12 px-8" onClick={() => (window.location.href = "tel:+918699366993")}>
                Talk To Sales Team
              </Button>
            </div>
          </motion.div>

          <motion.div id="comm-visit-form" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.7, delay: 0.2 }}>
            <ShopForm title="Book A Site Visit" buttonText="Book Site Visit →" showDate variant="light" />
          </motion.div>
        </div>
      </div>
    </section>

    {/* ── S9 – FAQ ── */}
    <section className="py-20 bg-background">
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

    {/* ── S10 – FOOTER ── */}
    <ContactFooter />
  </main>
);

export default Commercial;

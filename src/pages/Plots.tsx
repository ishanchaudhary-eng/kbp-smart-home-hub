import { useState } from "react";
import { motion } from "framer-motion";
import {
  Check,
  X,
  MapPin,
  Shield,
  Landmark,
  PenTool,
  TrendingUp,
  Route,
  Building2,
  GraduationCap,
  Clock,
  Home,
  Users,
  Heart,
  Scale,
  BadgeCheck,
  FileCheck,
  Banknote,
  ShieldCheck,
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

/* ───── FORM COMPONENT ───── */
interface PlotFormProps {
  title: string;
  buttonText: string;
  variant?: "light" | "dark";
  showPlotSize?: boolean;
  showCity?: boolean;
  showDate?: boolean;
}

const PlotForm = ({
  title,
  buttonText,
  variant = "light",
  showPlotSize = false,
  showCity = false,
  showDate = false,
}: PlotFormProps) => {
  const [data, setData] = useState({ name: "", phone: "", size: "", city: "", date: "" });
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
      <h3 className={`font-display font-bold text-xl mb-4 ${variant === "dark" ? "text-primary-foreground" : "text-foreground"}`}>
        {title}
      </h3>
      <form onSubmit={submit} className="space-y-3">
        <Input placeholder="Your Name *" value={data.name} onChange={(e) => setData({ ...data, name: e.target.value })} className={inp} required />
        <Input placeholder="Phone Number *" type="tel" value={data.phone} onChange={(e) => setData({ ...data, phone: e.target.value })} className={inp} required />
        {showPlotSize && (
          <select value={data.size} onChange={(e) => setData({ ...data, size: e.target.value })} className={`w-full h-10 rounded-md border px-3 text-sm ${inp || "border-input bg-background"}`}>
            <option value="">Plot Size Interest</option>
            <option value="80">80 Sq. Yards</option>
            <option value="93">93 Sq. Yards</option>
            <option value="100">100 Sq. Yards</option>
          </select>
        )}
        {showCity && <Input placeholder="City" value={data.city} onChange={(e) => setData({ ...data, city: e.target.value })} className={inp} />}
        {showDate && <Input placeholder="Preferred Visit Date" type="date" value={data.date} onChange={(e) => setData({ ...data, date: e.target.value })} className={inp} />}
        <MathCaptcha onVerified={setCaptchaVerified} inputClassName={inp} />
        <Button type="submit" className="w-full bg-secondary text-secondary-foreground hover:bg-secondary/90 font-bold text-base h-12 animate-pulse-gold">
          {buttonText}
        </Button>
      </form>
      <p className="text-xs opacity-50 mt-2 text-center">We respect your privacy. No spam.</p>
    </div>
  );
};

/* ───── DATA ───── */
const benefits = [
  { icon: PenTool, title: "Freedom to Build", text: "Design and build your home the way your family needs." },
  { icon: TrendingUp, title: "Safer Land-Backed Investment", text: "Plots offer long-term value and flexibility for end users and investors." },
  { icon: Route, title: "Prime Highway Connectivity", text: "Located on NH-21 with easy access to Mohali, Chandigarh and nearby towns." },
  { icon: Shield, title: "Township Advantage", text: "Enjoy plotted ownership inside a planned gated development." },
];

const trustCards = [
  { icon: BadgeCheck, title: "100% Land Registered", text: "Clear land-backed ownership structure for greater buyer confidence." },
  { icon: FileCheck, title: "Immediate Registry", text: "Faster ownership process for qualified buyers." },
  { icon: ShieldCheck, title: "Debt-Free Project", text: "Project positioned as financially secure and transparent." },
  { icon: Banknote, title: "Bank Loan Available", text: "Financing support available for eligible buyers." },
];

const plotOptions = [
  { size: "80 Sq. Yards", desc: "Suitable for compact family homes and budget-conscious buyers.", badge: "Best for first-time buyers" },
  { size: "93 Sq. Yards", desc: "Balanced option for practical layouts and growing families.", badge: "Popular choice", popular: true },
  { size: "100 Sq. Yards", desc: "Ideal for buyers wanting more frontage, comfort and future flexibility.", badge: "More spacious option" },
];

const audienceCards = [
  { icon: Home, text: "Families planning their own home" },
  { icon: Users, text: "Buyers from nearby towns and states" },
  { icon: TrendingUp, text: "Investors looking for appreciation" },
  { icon: Heart, text: "Parents buying for children's future" },
  { icon: Scale, text: "People comparing plot vs apartment ownership" },
];

const locationPoints = [
  { icon: Route, time: "0 min", name: "Bharatmala Expressway" },
  { icon: Building2, time: "5 min", name: "Mohali" },
  { icon: Landmark, time: "10 min", name: "Chandigarh" },
  { icon: GraduationCap, time: "10 min", name: "Chandigarh University" },
];

const plotPros = ["Freedom to build", "Better customization", "Land ownership appeal", "Strong long-term holding value"];
const flatPros = ["Ready-to-move convenience", "Shared maintenance", "Less customization", "Fixed layout"];

const faqs = [
  { q: "Are registry options available?", a: "Yes, immediate registry is available for qualified buyers. The land is fully registered and legal documentation is transparent." },
  { q: "Is bank loan available?", a: "Yes, bank loan options are available for eligible buyers. Our team can guide you through the financing process." },
  { q: "Which plot sizes are available?", a: "KBP Smart City offers plots in 80, 93 and 100 sq. yard configurations to suit different budgets and requirements." },
  { q: "Is the location suitable for investment?", a: "The Kharar–Kurali highway corridor is one of the fastest-growing real estate zones near Chandigarh, making it attractive for both self-use and investment." },
  { q: "Can I visit the site before booking?", a: "Absolutely. We encourage all buyers to visit the site. You can schedule a free site visit through our website or by calling our sales team." },
];

/* ═══════════ PAGE ═══════════ */
const Plots = () => (
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
              📐 Plots at KBP Smart City
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-primary-foreground leading-tight mb-4">
              Residential Plots Near Chandigarh for Your Dream Home
            </h1>
            <p className="text-primary-foreground/80 text-lg mb-2">
              Secure plotted development at KBP Smart City on NH-21 Kharar–Kurali Highway
            </p>
            <p className="text-primary-foreground/60 mb-6">
              Build the home you want in a well-connected township with strong future potential.
            </p>

            <div className="flex flex-wrap gap-3 mb-6">
              {["Land Registered", "Immediate Registry", "Bank Loan Available", "Gated Township"].map((t) => (
                <span key={t} className="bg-secondary/20 text-secondary text-xs font-bold px-3 py-1.5 rounded-full">
                  ✅ {t}
                </span>
              ))}
            </div>

            <div className="flex flex-wrap gap-3">
              <Button className="bg-secondary text-secondary-foreground hover:bg-secondary/90 font-bold text-base h-12 px-8 animate-pulse-gold" onClick={() => document.getElementById("plot-hero-form")?.scrollIntoView({ behavior: "smooth" })}>
                Get Plot Price List
              </Button>
              <Button variant="outline" className="border-secondary text-secondary bg-transparent hover:bg-secondary/10 font-bold text-base h-12 px-8" onClick={() => document.getElementById("plot-site-visit")?.scrollIntoView({ behavior: "smooth" })}>
                Book Site Visit
              </Button>
            </div>
          </motion.div>

          <motion.div id="plot-hero-form" initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.7, delay: 0.3 }}>
            <PlotForm title="Get Plot Price List" buttonText="Submit Enquiry" showPlotSize variant="light" />
          </motion.div>
        </div>
      </div>
    </section>

    {/* ── S2 – WHY BUY ── */}
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-12">
          <span className="text-secondary font-semibold text-sm uppercase tracking-wider">Why Buy Here</span>
          <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mt-2">Why Buyers Prefer Plots at KBP Smart City</h2>
        </motion.div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefits.map((b, i) => (
            <motion.div key={b.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="bg-card rounded-2xl border p-6 text-center hover:shadow-lg transition-shadow">
              <div className="w-14 h-14 rounded-full bg-secondary/10 flex items-center justify-center mx-auto mb-4">
                <b.icon className="w-7 h-7 text-secondary" />
              </div>
              <h3 className="font-bold text-foreground font-sans mb-2">{b.title}</h3>
              <p className="text-muted-foreground text-sm">{b.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    {/* ── S3 – TRUST ── */}
    <section className="py-20 bg-muted">
      <div className="container mx-auto px-4">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-12">
          <span className="text-secondary font-semibold text-sm uppercase tracking-wider">Trust & Security</span>
          <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mt-2">Buy With Greater Confidence</h2>
        </motion.div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
          {trustCards.map((t, i) => (
            <motion.div key={t.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="bg-card rounded-2xl border p-6 text-center">
              <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <t.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="font-bold text-foreground font-sans mb-2">{t.title}</h3>
              <p className="text-muted-foreground text-sm">{t.text}</p>
            </motion.div>
          ))}
        </div>
        <p className="text-center text-muted-foreground text-sm">Designed to reduce uncertainty for genuine home buyers and investors.</p>
      </div>
    </section>

    {/* ── S4 – PLOT OPTIONS ── */}
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-12">
          <span className="text-secondary font-semibold text-sm uppercase tracking-wider">Plot Sizes</span>
          <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mt-2">Choose the Plot Size That Fits Your Plan</h2>
        </motion.div>
        <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {plotOptions.map((p, i) => (
            <motion.div key={p.size} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
              className={`bg-card rounded-2xl border overflow-hidden ${p.popular ? "border-secondary ring-2 ring-secondary/20 shadow-lg relative" : ""}`}
            >
              {p.popular && <div className="bg-secondary text-secondary-foreground text-xs font-bold text-center py-1.5">MOST POPULAR</div>}
              <div className="p-6 text-center">
                <span className="inline-block bg-secondary/10 text-secondary text-xs font-bold px-3 py-1 rounded-full mb-3">{p.badge}</span>
                <h3 className="text-2xl font-bold text-foreground font-sans mb-2">{p.size}</h3>
                <p className="text-muted-foreground text-sm mb-6">{p.desc}</p>
                <Button className="w-full bg-secondary text-secondary-foreground hover:bg-secondary/90 font-bold" onClick={() => document.getElementById("plot-price-form")?.scrollIntoView({ behavior: "smooth" })}>
                  Get Price for This Plot
                </Button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    {/* ── S5 – IDEAL FOR ── */}
    <section className="py-20 bg-muted">
      <div className="container mx-auto px-4">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-12">
          <span className="text-secondary font-semibold text-sm uppercase tracking-wider">Ideal Buyers</span>
          <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mt-2">Perfect for Different Buyer Needs</h2>
        </motion.div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-4 max-w-5xl mx-auto">
          {audienceCards.map((a, i) => (
            <motion.div key={a.text} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }}
              className="bg-card rounded-xl border p-5 flex flex-col items-center text-center gap-3"
            >
              <div className="w-12 h-12 rounded-full bg-secondary/10 flex items-center justify-center">
                <a.icon className="w-6 h-6 text-secondary" />
              </div>
              <p className="text-foreground text-sm font-semibold font-sans">{a.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    {/* ── S6 – LOCATION ── */}
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-12">
          <span className="text-secondary font-semibold text-sm uppercase tracking-wider">Location</span>
          <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mt-2">Well Connected Yet Peaceful</h2>
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
          Strategic connectivity makes these plots attractive for self-use, rental development and long-term appreciation.
        </p>
        <div className="text-center">
          <Button className="bg-secondary text-secondary-foreground hover:bg-secondary/90 font-bold h-12 px-8" onClick={() => (window.location.href = "/location")}>
            View Full Location Advantage
          </Button>
        </div>
      </div>
    </section>

    {/* ── S7 – PLOTS VS FLATS ── */}
    <section className="py-20 bg-muted">
      <div className="container mx-auto px-4">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-12">
          <span className="text-secondary font-semibold text-sm uppercase tracking-wider">Comparison</span>
          <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mt-2">Why Many Buyers Still Prefer Plots</h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto mb-8">
          <div className="bg-card rounded-2xl border border-secondary ring-2 ring-secondary/20 overflow-hidden">
            <div className="bg-secondary text-secondary-foreground text-center py-3 font-bold font-sans">Plots</div>
            <div className="p-6 space-y-3">
              {plotPros.map((p) => (
                <div key={p} className="flex items-center gap-3 text-foreground text-sm">
                  <Check className="w-5 h-5 text-secondary shrink-0" /> {p}
                </div>
              ))}
            </div>
          </div>
          <div className="bg-card rounded-2xl border overflow-hidden">
            <div className="bg-muted text-foreground text-center py-3 font-bold font-sans">Flats</div>
            <div className="p-6 space-y-3">
              {flatPros.map((f) => (
                <div key={f} className="flex items-center gap-3 text-muted-foreground text-sm">
                  <X className="w-5 h-5 text-muted-foreground/50 shrink-0" /> {f}
                </div>
              ))}
            </div>
          </div>
        </div>

        <p className="text-center text-muted-foreground text-sm max-w-2xl mx-auto">
          At KBP Smart City, buyers get the benefit of plotted ownership inside a planned township ecosystem.
        </p>
      </div>
    </section>

    {/* ── S8 – PRICE / ENQUIRY ── */}
    <section id="plot-pricing" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-10 items-start">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <span className="text-secondary font-semibold text-sm uppercase tracking-wider">Pricing</span>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mt-2 mb-4">Request Plot Price List</h2>
            <p className="text-muted-foreground mb-8">
              Get the latest pricing, availability and plot size details directly from our sales team.
            </p>
            <div className="space-y-4">
              {plotOptions.map((p) => (
                <div key={p.size} className={`bg-card rounded-xl border p-5 flex justify-between items-center ${p.popular ? "border-secondary ring-1 ring-secondary/20" : ""}`}>
                  <div>
                    <p className="font-bold text-foreground font-sans">{p.size}</p>
                    <p className="text-muted-foreground text-xs">{p.badge}</p>
                  </div>
                  <span className="text-secondary font-bold text-sm">Get Price →</span>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div id="plot-price-form" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <PlotForm title="Send Me Plot Details" buttonText="Send Me Plot Details →" showPlotSize showCity />
          </motion.div>
        </div>
      </div>
    </section>

    {/* ── S9 – SITE VISIT ── */}
    <section id="plot-site-visit" className="py-20 bg-gradient-to-br from-primary via-primary to-navy-dark">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <span className="text-secondary font-semibold text-sm uppercase tracking-wider">Visit Us</span>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-primary-foreground mt-2 mb-4">Visit the Site Before You Decide</h2>
            <p className="text-primary-foreground/70 mb-6 text-lg">
              Walk the plotted development, understand the location and choose the option that matches your budget and family goals.
            </p>
            <div className="flex flex-wrap gap-3">
              <Button className="bg-secondary text-secondary-foreground hover:bg-secondary/90 font-bold h-12 px-8" onClick={() => document.getElementById("plot-visit-form")?.scrollIntoView({ behavior: "smooth" })}>
                Schedule Site Visit
              </Button>
              <Button variant="outline" className="border-secondary text-secondary bg-transparent hover:bg-secondary/10 font-bold h-12 px-8" onClick={() => (window.location.href = "tel:+918699366993")}>
                Talk to Sales Team
              </Button>
            </div>
          </motion.div>

          <motion.div id="plot-visit-form" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.7, delay: 0.2 }}>
            <PlotForm title="Book A Site Visit" buttonText="Book Site Visit →" showDate variant="light" />
          </motion.div>
        </div>
      </div>
    </section>

    {/* ── S10 – FAQ ── */}
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4 max-w-3xl">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-12">
          <span className="text-secondary font-semibold text-sm uppercase tracking-wider">FAQs</span>
          <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mt-2">Frequently Asked Questions</h2>
        </motion.div>
        <Accordion type="single" collapsible className="space-y-3">
          {faqs.map((faq, i) => (
            <AccordionItem key={i} value={`faq-${i}`} className="bg-card rounded-xl border px-5">
              <AccordionTrigger className="text-foreground font-semibold font-sans text-sm hover:no-underline py-4">
                {faq.q}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground text-sm pb-4">
                {faq.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>

    {/* ── S11 – FOOTER ── */}
    <ContactFooter />
  </main>
);

export default Plots;

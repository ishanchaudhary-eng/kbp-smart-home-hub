import { useState, useCallback } from "react";
import { motion } from "framer-motion";
import {
  Check,
  Home,
  MapPin,
  Shield,
  Maximize2,
  IndianRupee,
  Route,
  Building2,
  Landmark,
  GraduationCap,
  Trees,
  Baby,
  Footprints,
  Dumbbell,
  PartyPopper,
  ShieldCheck,
  Clock,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import ContactFooter from "@/components/sections/ContactFooter";
import { useToast } from "@/hooks/use-toast";

/* ───── highlight cards data ───── */
const highlights = [
  {
    icon: IndianRupee,
    title: "Affordable Pricing",
    text: "Perfect option for middle-class home buyers near Chandigarh.",
  },
  {
    icon: Maximize2,
    title: "Spacious Layouts",
    text: "Well designed homes with efficient space utilization.",
  },
  {
    icon: Route,
    title: "Excellent Connectivity",
    text: "Easy access to Mohali, Chandigarh and nearby towns.",
  },
  {
    icon: Shield,
    title: "Secure Township Living",
    text: "Gated community with parks and modern amenities.",
  },
];

/* ───── amenity icons ───── */
const amenities = [
  { icon: Trees, label: "Parks" },
  { icon: Baby, label: "Children Play Area" },
  { icon: Footprints, label: "Jogging Track" },
  { icon: Dumbbell, label: "Gym" },
  { icon: PartyPopper, label: "Clubhouse" },
  { icon: ShieldCheck, label: "Security" },
];

/* ───── location points ───── */
const locationPoints = [
  { icon: Route, time: "0 min", name: "Bharatmala Expressway" },
  { icon: Building2, time: "5 min", name: "Mohali" },
  { icon: Landmark, time: "10 min", name: "Chandigarh" },
  { icon: GraduationCap, time: "10 min", name: "Chandigarh University" },
];

/* ───── reusable mini form ───── */
interface MiniFormProps {
  title: string;
  buttonText: string;
  showAptType?: boolean;
  variant?: "light" | "dark";
  showDate?: boolean;
}

const MiniForm = ({
  title,
  buttonText,
  showAptType = false,
  variant = "light",
  showDate = false,
}: MiniFormProps) => {
  const [data, setData] = useState({ name: "", phone: "", type: "", date: "" });
  const [done, setDone] = useState(false);
  const [captchaVerified, setCaptchaVerified] = useState(false);
  const { toast } = useToast();

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!data.name || !data.phone) {
      toast({
        title: "Please fill required fields",
        description: "Name and phone are required.",
        variant: "destructive",
      });
      return;
    }
    if (!captchaVerified) {
      toast({ title: "Please solve the math question", variant: "destructive" });
      return;
    }
    setDone(true);
    toast({ title: "Thank You!", description: "Our team will contact you shortly." });
  };

  const bg =
    variant === "dark"
      ? "bg-primary text-primary-foreground"
      : "bg-card shadow-xl border";
  const inp =
    variant === "dark"
      ? "bg-primary-foreground/10 border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/50"
      : "";

  if (done)
    return (
      <div className={`rounded-xl p-6 text-center ${bg}`}>
        <div className="text-4xl mb-3">✅</div>
        <h3 className="text-xl font-bold font-display mb-2">Thank You!</h3>
        <p className="text-sm opacity-80">
          Our team will contact you within 30 minutes.
        </p>
      </div>
    );

  return (
    <div className={`rounded-xl p-6 ${bg}`}>
      <h3
        className={`font-display font-bold text-xl mb-4 ${variant === "dark" ? "text-primary-foreground" : "text-foreground"}`}
      >
        {title}
      </h3>
      <form onSubmit={submit} className="space-y-3">
        <Input
          placeholder="Your Name *"
          value={data.name}
          onChange={(e) => setData({ ...data, name: e.target.value })}
          className={inp}
          required
        />
        <Input
          placeholder="Phone Number *"
          type="tel"
          value={data.phone}
          onChange={(e) => setData({ ...data, phone: e.target.value })}
          className={inp}
          required
        />
        {showAptType && (
          <select
            value={data.type}
            onChange={(e) => setData({ ...data, type: e.target.value })}
            className={`w-full h-10 rounded-md border px-3 text-sm ${inp || "border-input bg-background"}`}
          >
            <option value="">Apartment Type</option>
            <option value="2bhk">2 BHK Apartment</option>
            <option value="3bhk">3 BHK Apartment</option>
          </select>
        )}
        {showDate && (
          <Input
            placeholder="Preferred Visit Date"
            type="date"
            value={data.date}
            onChange={(e) => setData({ ...data, date: e.target.value })}
            className={inp}
          />
        )}
        <MathCaptcha onVerified={setCaptchaVerified} inputClassName={inp} />
        <Button
          type="submit"
          className="w-full bg-secondary text-secondary-foreground hover:bg-secondary/90 font-bold text-base h-12 animate-pulse-gold"
        >
          {buttonText}
        </Button>
      </form>
      <p className="text-xs opacity-50 mt-2 text-center">
        We respect your privacy. No spam.
      </p>
    </div>
  );
};

/* ═══════════ PAGE ═══════════ */

const Apartments = () => (
  <main className="scroll-smooth">
    {/* ── SECTION 1 – HERO ── */}
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary to-navy-dark" />
      <div className="absolute inset-0 bg-[url('/placeholder.svg')] bg-cover bg-center opacity-10" />
      <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/50 to-transparent" />

      <div className="container mx-auto px-4 relative z-10 py-12 md:py-20">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <div className="inline-block bg-secondary/20 text-secondary px-4 py-1.5 rounded-full text-sm font-semibold mb-4">
              🏢 Apartments at KBP Smart City
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-primary-foreground leading-tight mb-4">
              Modern Apartments Near Chandigarh
            </h1>
            <p className="text-primary-foreground/80 text-lg mb-3">
              Affordable 2 BHK & 3 BHK Homes at KBP Smart City
            </p>
            <div className="flex items-center gap-2 text-primary-foreground/70 mb-6">
              <MapPin className="w-5 h-5 text-secondary" />
              <span className="text-lg">
                Located on NH-21 Kharar–Kurali Highway
              </span>
            </div>

            <div className="bg-secondary/20 rounded-xl p-4 inline-block mb-6">
              <p className="text-primary-foreground/60 text-sm">Flats Starting From</p>
              <p className="text-3xl font-bold text-secondary">₹54.90 Lakhs*</p>
              <p className="text-primary-foreground/50 text-xs">*T&C Apply</p>
            </div>

            <div className="flex flex-wrap gap-3">
              <Button
                className="bg-secondary text-secondary-foreground hover:bg-secondary/90 font-bold text-base h-12 px-8 animate-pulse-gold"
                onClick={() =>
                  document
                    .getElementById("apt-hero-form")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
              >
                Get Price List
              </Button>
              <Button
                variant="outline"
                className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 font-bold text-base h-12 px-8"
                onClick={() =>
                  document
                    .getElementById("apt-site-visit")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
              >
                Book Site Visit
              </Button>
            </div>
          </motion.div>

          <motion.div
            id="apt-hero-form"
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
          >
            <MiniForm
              title="Get Instant Price List"
              buttonText="Submit Enquiry"
              showAptType
              variant="light"
            />
          </motion.div>
        </div>
      </div>
    </section>

    {/* ── SECTION 2 – WHY BUY ── */}
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="text-secondary font-semibold text-sm uppercase tracking-wider">
            Why Buy Here
          </span>
          <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mt-2">
            Perfect Homes For Modern Families
          </h2>
          <p className="text-muted-foreground mt-3 max-w-2xl mx-auto">
            KBP Smart City apartments are designed to provide comfortable living
            spaces for families. The layouts are thoughtfully planned to maximize
            space, natural light and ventilation while keeping affordability in
            mind.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {highlights.map((h, i) => (
            <motion.div
              key={h.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-card rounded-2xl border p-6 text-center hover:shadow-lg transition-shadow"
            >
              <div className="w-14 h-14 rounded-full bg-secondary/10 flex items-center justify-center mx-auto mb-4">
                <h.icon className="w-7 h-7 text-secondary" />
              </div>
              <h3 className="font-bold text-foreground font-sans mb-2">
                {h.title}
              </h3>
              <p className="text-muted-foreground text-sm">{h.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    {/* ── SECTION 3 – 2 BHK ── */}
    <section className="py-20 bg-muted">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="bg-gradient-to-br from-card to-muted rounded-2xl border h-64 md:h-80 flex items-center justify-center">
              <p className="text-muted-foreground">
                Floor Plan — 2 BHK Apartment
              </p>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-secondary font-semibold text-sm uppercase tracking-wider">
              Compact & Comfortable
            </span>
            <h2 className="text-3xl font-display font-bold text-foreground mt-2 mb-4">
              2 BHK Apartments
            </h2>
            <p className="text-muted-foreground mb-6">
              The 2 BHK apartments at KBP Smart City are ideal for small
              families and first-time home buyers. These homes offer practical
              layouts with comfortable living spaces and modern design.
            </p>
            <ul className="space-y-3 mb-6">
              {[
                "Living Room",
                "2 Bedrooms",
                "Kitchen",
                "Bathrooms",
                "Balcony",
              ].map((f) => (
                <li
                  key={f}
                  className="flex items-center gap-3 text-foreground"
                >
                  <Check className="w-5 h-5 text-secondary shrink-0" /> {f}
                </li>
              ))}
            </ul>
            <Button
              className="bg-secondary text-secondary-foreground hover:bg-secondary/90 font-bold h-12 px-8"
              onClick={() =>
                document
                  .getElementById("apt-price-form")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
            >
              Request 2 BHK Price
            </Button>
          </motion.div>
        </div>
      </div>
    </section>

    {/* ── SECTION 4 – 3 BHK ── */}
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="order-2 lg:order-1"
          >
            <span className="text-secondary font-semibold text-sm uppercase tracking-wider">
              Spacious & Premium
            </span>
            <h2 className="text-3xl font-display font-bold text-foreground mt-2 mb-4">
              3 BHK Apartments
            </h2>
            <p className="text-muted-foreground mb-6">
              For families looking for more space, the 3 BHK apartments offer
              larger living areas and comfortable bedrooms designed for modern
              lifestyles.
            </p>
            <ul className="space-y-3 mb-6">
              {[
                "Large Living Area",
                "3 Bedrooms",
                "Modern Kitchen",
                "Balcony",
                "Multiple Bathrooms",
              ].map((f) => (
                <li
                  key={f}
                  className="flex items-center gap-3 text-foreground"
                >
                  <Check className="w-5 h-5 text-secondary shrink-0" /> {f}
                </li>
              ))}
            </ul>
            <Button
              className="bg-secondary text-secondary-foreground hover:bg-secondary/90 font-bold h-12 px-8"
              onClick={() =>
                document
                  .getElementById("apt-price-form")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
            >
              Request 3 BHK Price
            </Button>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="order-1 lg:order-2"
          >
            <div className="bg-gradient-to-br from-card to-muted rounded-2xl border h-64 md:h-80 flex items-center justify-center">
              <p className="text-muted-foreground">
                Floor Plan — 3 BHK Apartment
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>

    {/* ── SECTION 5 – FLOOR PLANS ── */}
    <section className="py-20 bg-muted">
      <div className="container mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="text-secondary font-semibold text-sm uppercase tracking-wider">
            Floor Plans
          </span>
          <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mt-2 mb-3">
            Smart Floor Plan Designs
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
            Each apartment is carefully planned to provide functional spaces and
            comfortable living environments.
          </p>
          <div className="grid sm:grid-cols-2 gap-6 max-w-3xl mx-auto mb-8">
            <div className="bg-card rounded-2xl border h-56 flex items-center justify-center">
              <p className="text-muted-foreground">2 BHK Floor Plan</p>
            </div>
            <div className="bg-card rounded-2xl border h-56 flex items-center justify-center">
              <p className="text-muted-foreground">3 BHK Floor Plan</p>
            </div>
          </div>
          <Button
            className="bg-secondary text-secondary-foreground hover:bg-secondary/90 font-bold h-12 px-8"
            onClick={() =>
              document
                .getElementById("apt-price-form")
                ?.scrollIntoView({ behavior: "smooth" })
            }
          >
            Download Floor Plans
          </Button>
        </motion.div>
      </div>
    </section>

    {/* ── SECTION 6 – AMENITIES ── */}
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <span className="text-secondary font-semibold text-sm uppercase tracking-wider">
            Amenities
          </span>
          <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mt-2">
            Amenities For Comfortable Living
          </h2>
        </motion.div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6 mb-8">
          {amenities.map((a, i) => (
            <motion.div
              key={a.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="bg-card rounded-2xl border p-6 flex flex-col items-center gap-3 hover:shadow-md transition-shadow"
            >
              <div className="w-14 h-14 rounded-full bg-secondary/10 flex items-center justify-center">
                <a.icon className="w-7 h-7 text-secondary" />
              </div>
              <p className="text-foreground font-semibold text-sm font-sans">
                {a.label}
              </p>
            </motion.div>
          ))}
        </div>

        <Button
          variant="outline"
          className="font-bold h-12 px-8"
          onClick={() =>
            (window.location.href = "/#amenities")
          }
        >
          View All Amenities
        </Button>
      </div>
    </section>

    {/* ── SECTION 7 – LOCATION ── */}
    <section className="py-20 bg-muted">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="text-secondary font-semibold text-sm uppercase tracking-wider">
            Location
          </span>
          <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mt-2">
            Prime Location Advantage
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {locationPoints.map((lp, i) => (
            <motion.div
              key={lp.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-card rounded-2xl border p-6 text-center"
            >
              <div className="w-12 h-12 rounded-full bg-secondary/10 flex items-center justify-center mx-auto mb-3">
                <lp.icon className="w-6 h-6 text-secondary" />
              </div>
              <span className="inline-flex items-center gap-1 bg-secondary/10 text-secondary text-xs font-bold px-2.5 py-1 rounded-full mb-2">
                <Clock className="w-3 h-3" />
                {lp.time}
              </span>
              <p className="font-bold text-foreground font-sans text-sm">
                {lp.name}
              </p>
            </motion.div>
          ))}
        </div>

        <div className="text-center">
          <Button
            className="bg-secondary text-secondary-foreground hover:bg-secondary/90 font-bold h-12 px-8"
            onClick={() => (window.location.href = "/location")}
          >
            View Location Details
          </Button>
        </div>
      </div>
    </section>

    {/* ── SECTION 8 – PRICING ── */}
    <section id="apt-pricing" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-10 items-start">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-secondary font-semibold text-sm uppercase tracking-wider">
              Pricing
            </span>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mt-2 mb-4">
              Affordable Homes Near Chandigarh
            </h2>
            <p className="text-muted-foreground mb-8">
              KBP Smart City apartments offer excellent value for home buyers
              looking for affordable property near Chandigarh.
            </p>

            <div className="space-y-4">
              <div className="bg-card rounded-xl border p-5 flex justify-between items-center">
                <div>
                  <p className="font-bold text-foreground font-sans">
                    2 BHK Apartment
                  </p>
                  <p className="text-muted-foreground text-sm">
                    850 – 1050 sq.ft.
                  </p>
                </div>
                <p className="text-2xl font-bold text-secondary">₹54.90 Lac*</p>
              </div>
              <div className="bg-card rounded-xl border border-secondary ring-2 ring-secondary/20 p-5 flex justify-between items-center relative overflow-hidden">
                <div className="absolute top-0 right-0 bg-secondary text-secondary-foreground text-[10px] font-bold px-3 py-0.5 rounded-bl-lg">
                  POPULAR
                </div>
                <div>
                  <p className="font-bold text-foreground font-sans">
                    3 BHK Apartment
                  </p>
                  <p className="text-muted-foreground text-sm">
                    1200 – 1450 sq.ft.
                  </p>
                </div>
                <p className="text-2xl font-bold text-secondary">₹64 Lac*</p>
              </div>
            </div>

            <p className="text-xs text-muted-foreground mt-4">
              * Prices are indicative. Contact us for the latest price sheet.
            </p>
          </motion.div>

          <motion.div
            id="apt-price-form"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <MiniForm
              title="Request Price Sheet"
              buttonText="Request Price Sheet →"
              showAptType
            />
          </motion.div>
        </div>
      </div>
    </section>

    {/* ── SECTION 9 – SITE VISIT ── */}
    <section
      id="apt-site-visit"
      className="py-20 bg-gradient-to-br from-primary via-primary to-navy-dark"
    >
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-secondary font-semibold text-sm uppercase tracking-wider">
              Visit Us
            </span>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-primary-foreground mt-2 mb-4">
              Book A Site Visit
            </h2>
            <p className="text-primary-foreground/70 mb-6 text-lg">
              Visit KBP Smart City to explore the apartments, township layout
              and amenities.
            </p>
            <div className="flex flex-wrap gap-4 text-primary-foreground/60 text-sm">
              <span className="flex items-center gap-1">✅ Free Pick & Drop</span>
              <span className="flex items-center gap-1">✅ Guided Tour</span>
              <span className="flex items-center gap-1">✅ No Obligation</span>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <MiniForm
              title="Book A Site Visit"
              buttonText="Book Site Visit →"
              showDate
              variant="light"
            />
          </motion.div>
        </div>
      </div>
    </section>

    <ContactFooter />
  </main>
);

export default Apartments;

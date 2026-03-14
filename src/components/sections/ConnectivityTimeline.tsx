import { motion } from "framer-motion";
import { Route, Building2, Landmark, GraduationCap, MapPin, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";

const stops = [
  {
    name: "Bharatmala Expressway",
    time: "0 Min",
    highlight: "Direct connectivity to the national expressway network.",
    icon: Route,
  },
  {
    name: "Mohali",
    time: "5 Min",
    highlight: "Quick access to Mohali city and daily conveniences.",
    icon: Building2,
  },
  {
    name: "Chandigarh",
    time: "10 Min",
    highlight: "Easy commute to the capital city for work and lifestyle.",
    icon: Landmark,
  },
  {
    name: "Chandigarh University",
    time: "10 Min",
    highlight: "Close to one of North India's largest universities.",
    icon: GraduationCap,
  },
];

const seoPoints = [
  {
    time: "0 Minutes – Bharatmala Expressway",
    text: "Direct access to one of India's largest highway infrastructure networks.",
  },
  {
    time: "5 Minutes – Mohali",
    text: "Reach Mohali's commercial and residential hubs within minutes.",
  },
  {
    time: "10 Minutes – Chandigarh",
    text: "Quick access to the capital city for work, shopping and lifestyle.",
  },
  {
    time: "10 Minutes – Chandigarh University",
    text: "Ideal location for students, faculty and rental investment opportunities.",
  },
];

const ConnectivityTimeline = () => (
  <section className="py-20 relative overflow-hidden">
    {/* Map-style background */}
    <div className="absolute inset-0 bg-muted" />
    <div
      className="absolute inset-0 opacity-[0.03]"
      style={{
        backgroundImage:
          "radial-gradient(circle, hsl(var(--foreground)) 1px, transparent 1px)",
        backgroundSize: "24px 24px",
      }}
    />

    <div className="container mx-auto px-4 relative z-10">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-14"
      >
        <span className="text-secondary font-semibold text-sm uppercase tracking-wider">
          Connectivity
        </span>
        <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mt-2">
          Unmatched Connectivity
        </h2>
        <p className="text-muted-foreground mt-3 max-w-2xl mx-auto">
          KBP Smart City puts you minutes away from everything that matters.
        </p>
      </motion.div>

      {/* === DESKTOP HORIZONTAL TIMELINE === */}
      <div className="hidden md:block mb-16">
        <div className="relative">
          {/* Road line */}
          <div className="absolute top-[72px] left-0 right-0 h-1.5 rounded-full bg-border" />
          <div
            className="absolute top-[72px] left-0 right-0 h-1.5 rounded-full"
            style={{
              backgroundImage:
                "repeating-linear-gradient(90deg, hsl(var(--secondary)) 0px, hsl(var(--secondary)) 20px, transparent 20px, transparent 36px)",
            }}
          />

          <div className="grid grid-cols-5 gap-4">
            {/* Origin */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex flex-col items-center text-center"
            >
              <div className="w-14 h-14 rounded-full bg-primary flex items-center justify-center mb-3 ring-4 ring-primary/20 relative z-10">
                <MapPin className="w-6 h-6 text-primary-foreground" />
              </div>
              <div className="w-4 h-4 rounded-full bg-primary border-4 border-background relative z-10" />
              <p className="font-bold text-foreground mt-4 text-sm font-sans">
                KBP Smart City
              </p>
              <p className="text-xs text-muted-foreground mt-1">Start Point</p>
            </motion.div>

            {/* Stops */}
            {stops.map((stop, i) => (
              <motion.div
                key={stop.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: (i + 1) * 0.15 }}
                className="flex flex-col items-center text-center"
              >
                <div className="w-14 h-14 rounded-full bg-card border-2 border-secondary flex items-center justify-center mb-3 relative z-10 shadow-md">
                  <stop.icon className="w-6 h-6 text-secondary" />
                </div>
                <div className="w-4 h-4 rounded-full bg-secondary border-4 border-background relative z-10" />
                <div className="mt-4 bg-card rounded-xl border p-4 shadow-sm w-full">
                  <span className="inline-flex items-center gap-1 bg-secondary/10 text-secondary text-xs font-bold px-2.5 py-1 rounded-full mb-2">
                    <Clock className="w-3 h-3" />
                    {stop.time}
                  </span>
                  <p className="font-bold text-foreground text-sm font-sans">
                    {stop.name}
                  </p>
                  <p className="text-xs text-muted-foreground mt-1 leading-relaxed">
                    {stop.highlight}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* === MOBILE VERTICAL TIMELINE === */}
      <div className="md:hidden mb-12">
        <div className="relative pl-10">
          {/* Vertical road line */}
          <div
            className="absolute left-5 top-0 bottom-0 w-1 rounded-full"
            style={{
              backgroundImage:
                "repeating-linear-gradient(180deg, hsl(var(--secondary)) 0px, hsl(var(--secondary)) 12px, transparent 12px, transparent 24px)",
            }}
          />

          {/* Origin */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative mb-8"
          >
            <div className="absolute -left-10 top-0 w-10 h-10 rounded-full bg-primary flex items-center justify-center z-10 ring-4 ring-primary/20">
              <MapPin className="w-5 h-5 text-primary-foreground" />
            </div>
            <div className="ml-4">
              <p className="font-bold text-foreground font-sans">KBP Smart City</p>
              <p className="text-xs text-muted-foreground">Start Point</p>
            </div>
          </motion.div>

          {/* Stops */}
          {stops.map((stop, i) => (
            <motion.div
              key={stop.name}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="relative mb-6 last:mb-0"
            >
              <div className="absolute -left-10 top-0 w-10 h-10 rounded-full bg-card border-2 border-secondary flex items-center justify-center z-10 shadow-md">
                <stop.icon className="w-5 h-5 text-secondary" />
              </div>
              <div className="ml-4 bg-card rounded-xl border p-4 shadow-sm">
                <span className="inline-flex items-center gap-1 bg-secondary/10 text-secondary text-xs font-bold px-2.5 py-1 rounded-full mb-2">
                  <Clock className="w-3 h-3" />
                  {stop.time}
                </span>
                <p className="font-bold text-foreground text-sm font-sans">
                  {stop.name}
                </p>
                <p className="text-xs text-muted-foreground mt-1 leading-relaxed">
                  {stop.highlight}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* SEO Text */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="max-w-3xl mx-auto"
      >
        <h3 className="text-2xl font-display font-bold text-foreground mb-4">
          Excellent Connectivity That Makes Daily Life Easier
        </h3>
        <p className="text-muted-foreground leading-relaxed mb-6">
          KBP Smart City enjoys a highly strategic location with seamless access
          to major destinations across the Tricity region. Situated right next to
          the Bharatmala Expressway network, the project provides excellent road
          connectivity for residents commuting to Mohali, Chandigarh and nearby
          towns.
        </p>

        <div className="space-y-4 mb-6">
          {seoPoints.map((point) => (
            <div key={point.time} className="flex gap-3">
              <div className="w-2 h-2 rounded-full bg-secondary mt-2 shrink-0" />
              <div>
                <p className="font-semibold text-foreground text-sm font-sans">
                  {point.time}
                </p>
                <p className="text-muted-foreground text-sm">{point.text}</p>
              </div>
            </div>
          ))}
        </div>

        <p className="text-muted-foreground leading-relaxed mb-8">
          This excellent connectivity makes KBP Smart City a convenient location
          for both end users and property investors.
        </p>

        <div className="text-center">
          <Button
            className="bg-secondary text-secondary-foreground hover:bg-secondary/90 font-bold text-base h-12 px-8"
            onClick={() =>
              document
                .getElementById("site-visit")
                ?.scrollIntoView({ behavior: "smooth" })
            }
          >
            Book a Site Visit
          </Button>
        </div>
      </motion.div>
    </div>
  </section>
);

export default ConnectivityTimeline;

import { motion } from "framer-motion";
import { MapPin, Clock, Building2, Laptop, Route } from "lucide-react";
import LeadForm from "@/components/LeadForm";

const distances = [
  { icon: MapPin, place: "Chandigarh", dist: "20 min", detail: "Easy commute to the city" },
  { icon: Building2, place: "Mohali", dist: "15 min", detail: "Close to Phase 7 & 8" },
  { icon: Laptop, place: "IT City Mohali", dist: "10 min", detail: "Near Quark City & IT Hub" },
  { icon: Route, place: "NH-21 Highway", dist: "On Road", detail: "200 ft wide national highway" },
  { icon: Clock, place: "Chandigarh Airport", dist: "25 min", detail: "Well connected by air" },
  { icon: Building2, place: "Panchkula", dist: "30 min", detail: "Tricity connectivity" },
];

const LocationAdvantage = () => (
  <section id="location" className="py-20">
    <div className="container mx-auto px-4">
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-12">
        <span className="text-secondary font-semibold text-sm uppercase tracking-wider">Strategic Location</span>
        <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mt-2">Location Advantage</h2>
        <p className="text-muted-foreground mt-3 max-w-2xl mx-auto">Strategically located on the 200 ft wide NH-21 Kharar–Kurali Highway with excellent connectivity to Chandigarh, Mohali and all major destinations.</p>
      </motion.div>

      <div className="grid lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <div className="grid sm:grid-cols-2 gap-4">
            {distances.map((d, i) => (
              <motion.div
                key={d.place}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="flex items-start gap-4 bg-card border rounded-xl p-4 hover:shadow-md transition-shadow"
              >
                <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center shrink-0">
                  <d.icon className="w-5 h-5 text-secondary" />
                </div>
                <div>
                  <h4 className="font-bold text-foreground font-sans">{d.place}</h4>
                  <p className="text-secondary font-semibold text-sm">{d.dist}</p>
                  <p className="text-muted-foreground text-xs">{d.detail}</p>
                </div>
              </motion.div>
            ))}
          </div>
          {/* Map Placeholder */}
          <div className="mt-6 bg-muted rounded-xl h-64 flex items-center justify-center border">
            <p className="text-muted-foreground text-sm">📍 Google Map — Coming Soon</p>
          </div>
        </div>

        <div>
          <LeadForm title="Download Location Map" buttonText="Send Me Location →" variant="gold" />
        </div>
      </div>
    </div>
  </section>
);

export default LocationAdvantage;

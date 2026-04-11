import { motion } from "framer-motion";
import { MapPin, GraduationCap, Hospital, TrendingUp, Route } from "lucide-react";
import { Button } from "@/components/ui/button";

const points = [
  { icon: Route, text: "Located on NH-21 Kharar Kurali Highway" },
  { icon: MapPin, text: "Easy access to Chandigarh and Mohali" },
  { icon: GraduationCap, text: "Close to schools and colleges" },
  { icon: Hospital, text: "Nearby hospitals and shopping areas" },
  { icon: TrendingUp, text: "Growing real estate corridor" },
];

const LocationAdvantage = () => (
  <section id="location" className="py-20">
    <div className="container mx-auto px-4">
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-12">
        <span className="text-secondary font-semibold text-sm uppercase tracking-wider">Strategic Location</span>
        <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mt-2">Excellent Location Connectivity</h2>
      </motion.div>

      <div className="max-w-3xl mx-auto">
        <div className="space-y-4 mb-8">
          {points.map((p, i) => (
            <motion.div
              key={p.text}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="flex items-center gap-4 bg-card border rounded-xl p-4 hover:shadow-md transition-shadow"
            >
              <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center shrink-0">
                <p.icon className="w-5 h-5 text-secondary" />
              </div>
              <p className="font-medium text-foreground">{p.text}</p>
            </motion.div>
          ))}
        </div>

        {/* Map Placeholder */}
        <div className="bg-muted rounded-xl h-64 flex items-center justify-center border mb-6">
          <p className="text-muted-foreground text-sm"> Google Map — Coming Soon</p>
        </div>

        <div className="text-center">
          <Button className="bg-secondary text-secondary-foreground hover:bg-secondary/90 font-semibold h-12 px-8">
            View Location Map
          </Button>
        </div>
      </div>
    </div>
  </section>
);

export default LocationAdvantage;

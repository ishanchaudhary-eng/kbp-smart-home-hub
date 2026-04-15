import { motion } from "framer-motion";
import { MapPin, GraduationCap, Hospital, TrendingUp, Route } from "lucide-react";
import { Button } from "@/components/ui/button";

const points = [
  { icon: Route, text: "Located on NH-205 Kharar Kurali Highway" },
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

        {/* Google Map */}
        <div className="rounded-xl overflow-hidden border mb-6">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3427.0428152070303!2d76.59927669999999!3d30.801433599999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ffb3efaa62543%3A0x41b31c5fcad45ac0!2sKBP%20Smart%20City%20-%20Best%202BHK%20Flats%20in%20Kharar%20%7C%20Commercial%20Plots!5e0!3m2!1sen!2sin!4v1775484283051!5m2!1sen!2sin"
            width="100%"
            height="300"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="KBP Smart City Location"
          />
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

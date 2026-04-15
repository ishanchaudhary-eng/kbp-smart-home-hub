import { motion } from "framer-motion";
import { Award, Building2, Users, MapPin, Heart, Target } from "lucide-react";
import ContactFooter from "@/components/sections/ContactFooter";

const milestones = [
  { year: "1994", title: "Founded KBP Group", desc: "Started with a vision to build quality homes for every family." },
  { year: "2005", title: "Expanded to Tricity", desc: "Began projects in Chandigarh, Mohali and surrounding areas." },
  { year: "2015", title: "50+ Projects Delivered", desc: "Milestone of delivering homes to over 5,000 families." },
  { year: "2024", title: "KBP Smart City Launch", desc: "Flagship smart township on NH-205 Kharar–Kurali Highway." },
];

const About = () => (
  <main className="pt-20">
    <section className="py-20 bg-gradient-to-br from-primary to-navy-dark text-primary-foreground">
      <div className="container mx-auto px-4 text-center">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
          <span className="text-secondary font-semibold text-sm uppercase tracking-wider">Our Legacy</span>
          <h1 className="text-4xl md:text-5xl font-display font-bold mt-2 mb-4">About KBP Group</h1>
          <p className="text-primary-foreground/70 max-w-2xl mx-auto text-lg">Established real estate developer with 30+ years in Punjab.</p>
        </motion.div>
      </div>
    </section>

    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          <div>
            <h2 className="text-3xl font-display font-bold text-foreground mb-6">Our Story</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">Founded in 1994, KBP Group has grown from a small construction firm to one of Punjab's most respected real estate developers. With over 30 years of experience, we have delivered 50+ residential and commercial projects across the state.</p>
            <p className="text-muted-foreground leading-relaxed">Every project reflects a commitment to quality construction, transparent dealings and customer satisfaction.</p>
          </div>
          <div className="bg-gradient-to-br from-primary to-navy-light rounded-2xl h-72 flex items-center justify-center">
            <img src="/kbp-group-logo.png" alt="KBP Group Logo" className="w-48" />
          </div>
        </div>

        {/* Vision & Mission */}
        <div className="grid md:grid-cols-2 gap-8 mb-20">
          <div className="bg-muted rounded-2xl p-8">
            <Target className="w-10 h-10 text-secondary mb-4" />
            <h3 className="text-2xl font-display font-bold text-foreground mb-3">Our Vision</h3>
            <p className="text-muted-foreground">To be the most trusted real estate developer in North India, creating smart and sustainable communities that enhance the quality of life for every resident.</p>
          </div>
          <div className="bg-muted rounded-2xl p-8">
            <Heart className="w-10 h-10 text-secondary mb-4" />
            <h3 className="text-2xl font-display font-bold text-foreground mb-3">Our Mission</h3>
            <p className="text-muted-foreground">To deliver affordable, high-quality homes with modern amenities, transparent processes, and timely delivery — making home ownership accessible to every family.</p>
          </div>
        </div>

        {/* Timeline */}
        <h2 className="text-3xl font-display font-bold text-foreground text-center mb-12">Our Journey</h2>
        <div className="grid md:grid-cols-4 gap-6 mb-20">
          {milestones.map((m, i) => (
            <motion.div key={m.year} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="text-center">
              <div className="w-16 h-16 bg-secondary rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-secondary-foreground font-bold">{m.year}</span>
              </div>
              <h4 className="font-bold text-foreground mb-1 font-sans">{m.title}</h4>
              <p className="text-muted-foreground text-sm">{m.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {[
            { icon: Award, value: "30+", label: "Years" },
            { icon: Building2, value: "50+", label: "Projects" },
            { icon: Users, value: "5000+", label: "Families" },
            { icon: MapPin, value: "10+", label: "Cities" },
          ].map((s) => (
            <div key={s.label} className="bg-primary text-primary-foreground rounded-xl p-6 text-center">
              <s.icon className="w-8 h-8 text-secondary mx-auto mb-2" />
              <p className="text-3xl font-bold">{s.value}</p>
              <p className="text-primary-foreground/60 text-sm">{s.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    <ContactFooter />
  </main>
);

export default About;

import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import LeadForm from "@/components/LeadForm";

const ContactFooter = () => (
  <footer id="contact" className="bg-primary text-primary-foreground">
    <div className="container mx-auto px-4 py-16">
      <div className="grid lg:grid-cols-3 gap-12">
        {/* Contact Info */}
        <div>
          <img src="/kbp-logo.png" alt="KBP Smart City" className="h-16 mb-6 brightness-200" />
          <p className="text-primary-foreground/70 mb-6 text-sm leading-relaxed">
            Township by KBP Group on NH-205 Kharar–Kurali Highway. Apartments, plots, villas and commercial spaces.
          </p>
          <div className="space-y-3">
            <div className="flex items-start gap-3">
              <MapPin className="w-5 h-5 text-secondary shrink-0 mt-0.5" />
              <p className="text-sm text-primary-foreground/80">KBP Smart City, Kharar - Kurali Rd, near Prabh Aasra Gurudwara, Sas Nagar, Kharar, Lakhnaur, Punjab 140103</p>
            </div>
            <div className="flex items-center gap-3">
              <Phone className="w-5 h-5 text-secondary shrink-0" />
              <a href="tel:+917837393955" className="text-sm text-primary-foreground/80 hover:text-secondary transition-colors">+91 7837393955</a>
            </div>
            <div className="flex items-center gap-3">
              <Mail className="w-5 h-5 text-secondary shrink-0" />
              <a href="mailto:info@kbpsmartcity.com" className="text-sm text-primary-foreground/80 hover:text-secondary transition-colors">info@kbpsmartcity.com</a>
            </div>
            <div className="flex items-center gap-3">
              <Clock className="w-5 h-5 text-secondary shrink-0" />
              <p className="text-sm text-primary-foreground/80">Mon – Sun: 9:00 AM – 7:00 PM</p>
            </div>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="font-bold text-lg mb-6 font-sans">Quick Links</h3>
          <div className="grid grid-cols-2 gap-2">
            {["Home", "About Us", "Apartments", "Plots", "Commercial", "Amenities", "Floor Plans", "Pricing", "Location", "Contact"].map((link) => (
              <a key={link} href="#" className="text-sm text-primary-foreground/60 hover:text-secondary transition-colors py-1">{link}</a>
            ))}
          </div>

          {/* RERA Info */}
          <div className="mt-8 bg-primary-foreground/5 border border-primary-foreground/10 rounded-xl p-4">
            <h4 className="font-semibold text-sm mb-2 font-sans text-secondary">RERA Information</h4>
            <p className="text-xs text-primary-foreground/60">RERA Registration No: XXXXXXXXXX</p>
            <p className="text-xs text-primary-foreground/50 mt-1">Visit rera.punjab.gov.in for details</p>
          </div>
        </div>

        {/* Contact Form */}
        <div>
          <LeadForm title="Send Us a Message" buttonText="Send Enquiry →" variant="dark" />
        </div>
      </div>

      {/* Google Map */}
      <div className="mt-12 rounded-xl overflow-hidden border border-primary-foreground/10">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3427.0428152070303!2d76.59927669999999!3d30.801433599999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ffb3efaa62543%3A0x41b31c5fcad45ac0!2sKBP%20Smart%20City%20-%20Best%202BHK%20Flats%20in%20Kharar%20%7C%20Commercial%20Plots!5e0!3m2!1sen!2sin!4v1775484283051!5m2!1sen!2sin"
          width="100%"
          height="250"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="KBP Smart City Location"
        />
      </div>
    </div>

    {/* Bottom Bar */}
    <div className="border-t border-primary-foreground/10 py-4">
      <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-2">
        <p className="text-xs text-primary-foreground/40">© 2024 KBP Group. All rights reserved.</p>
        <div className="flex gap-4">
          <a href="#" className="text-xs text-primary-foreground/40 hover:text-secondary">Privacy Policy</a>
          <a href="#" className="text-xs text-primary-foreground/40 hover:text-secondary">Terms & Conditions</a>
          <a href="#" className="text-xs text-primary-foreground/40 hover:text-secondary">Disclaimer</a>
        </div>
      </div>
    </div>
  </footer>
);

export default ContactFooter;

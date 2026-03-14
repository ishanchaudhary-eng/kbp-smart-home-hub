import { MapPin, Phone, Mail, Clock } from "lucide-react";
import LeadForm from "@/components/LeadForm";

const ContactFooter = () => (
  <footer id="contact" className="bg-primary text-primary-foreground">
    <div className="container mx-auto px-4 py-16">
      <div className="grid lg:grid-cols-3 gap-12">
        {/* Contact Info */}
        <div>
          <img src="/kbp-logo.png" alt="KBP Smart City" className="h-16 mb-6 brightness-200" />
          <p className="text-primary-foreground/70 mb-6 text-sm leading-relaxed">
            KBP Smart City is a premium affordable township by KBP Group, offering 2 BHK, 3 BHK apartments, plots, villas and commercial spaces on NH-21 Kharar–Kurali Highway.
          </p>
          <div className="space-y-3">
            <div className="flex items-start gap-3">
              <MapPin className="w-5 h-5 text-secondary shrink-0 mt-0.5" />
              <p className="text-sm text-primary-foreground/80">NH-21 Kharar–Kurali Highway, Near Mohali, Punjab</p>
            </div>
            <div className="flex items-center gap-3">
              <Phone className="w-5 h-5 text-secondary shrink-0" />
              <a href="tel:+91XXXXXXXXXX" className="text-sm text-primary-foreground/80 hover:text-secondary transition-colors">+91 XXXXXXXXXX</a>
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
          <div className="mt-8">
            <h4 className="font-semibold text-sm mb-3 font-sans">Target Keywords</h4>
            <div className="flex flex-wrap gap-2">
              {["Flats in Kharar", "2 BHK Mohali", "Plots Near Chandigarh", "Affordable Homes Tricity"].map((kw) => (
                <span key={kw} className="text-xs bg-primary-foreground/5 text-primary-foreground/50 px-2 py-1 rounded">{kw}</span>
              ))}
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div>
          <LeadForm title="Send Us a Message" buttonText="Send Message →" variant="dark" />
        </div>
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

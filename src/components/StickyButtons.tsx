import { Phone, MessageCircle, Calendar } from "lucide-react";

const StickyButtons = () => {
  return (
    <>
      {/* WhatsApp Floating Button - Bottom Right */}
      <a
        href="https://wa.me/917837393955?text=Hi%2C%20I%20am%20interested%20in%20KBP%20Smart%20City.%20Please%20share%20details."
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-24 md:bottom-8 right-4 z-50 bg-[#25D366] text-white p-4 rounded-full shadow-2xl hover:scale-110 transition-transform animate-pulse-gold"
        aria-label="Chat on WhatsApp"
      >
        <MessageCircle className="w-6 h-6" />
      </a>

      {/* Call Button - Desktop bottom left */}
      <a
        href="tel:+917837393955"
        className="hidden md:flex fixed bottom-8 left-4 z-50 bg-primary text-primary-foreground p-4 rounded-full shadow-2xl hover:scale-110 transition-transform items-center gap-2"
        aria-label="Call Now"
      >
        <Phone className="w-6 h-6" />
      </a>

      {/* Mobile Bottom Bar */}
      <div className="fixed bottom-0 left-0 right-0 z-50 md:hidden bg-primary shadow-[0_-4px_20px_rgba(0,0,0,0.2)]">
        <div className="grid grid-cols-3 divide-x divide-primary-foreground/20">
          <a href="tel:+917837393955" className="flex flex-col items-center gap-1 py-3 text-primary-foreground hover:bg-primary-foreground/10 transition-colors">
            <Phone className="w-5 h-5" />
            <span className="text-xs font-medium">Call</span>
          </a>
          <a href="https://wa.me/917837393955" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center gap-1 py-3 text-primary-foreground hover:bg-primary-foreground/10 transition-colors">
            <MessageCircle className="w-5 h-5" />
            <span className="text-xs font-medium">WhatsApp</span>
          </a>
          <button onClick={() => document.getElementById("site-visit")?.scrollIntoView({ behavior: "smooth" })} className="flex flex-col items-center gap-1 py-3 text-secondary hover:bg-primary-foreground/10 transition-colors">
            <Calendar className="w-5 h-5" />
            <span className="text-xs font-medium">Site Visit</span>
          </button>
        </div>
      </div>
    </>
  );
};

export default StickyButtons;

import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

const navLinks = [
  { label: "Home", href: "/#hero" },
  { label: "About", href: "/about" },
  { label: "Apartments", href: "/apartments" },
  { label: "Plots", href: "/plots" },
  { label: "Commercial", href: "/commercial" },
  { label: "Amenities", href: "/amenities" },
  { label: "Location", href: "/location" },
  { label: "Pricing", href: "/#pricing" },
  { label: "Contact", href: "/#contact" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const handleNavClick = (href: string) => {
    setIsOpen(false);
    if (href.startsWith("/#")) {
      const id = href.replace("/#", "");
      if (location.pathname !== "/") {
        window.location.href = href;
      } else {
        document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50">
      <div className="flex items-stretch">
        {/* Logo — separate white block on the left, taller than nav */}
        <Link to="/" className="bg-white flex items-center justify-center px-4 py-2 shrink-0 shadow-md z-10">
          <img src="/kbp-group-logo.png" alt="KBP Group Logo" className="h-14 md:h-[4.5rem] w-auto" />
        </Link>

        {/* Nav bar fills the rest */}
        <div className="flex-1 bg-primary/95 backdrop-blur-md shadow-lg flex items-center">
          <div className="flex items-center justify-between w-full px-4 h-12 md:h-14">
            {/* Desktop Nav */}
            <div className="hidden lg:flex items-center gap-1 flex-1">
              {navLinks.map((link) =>
                link.href.startsWith("/#") ? (
                  <button
                    key={link.label}
                    onClick={() => handleNavClick(link.href)}
                    className="px-3 py-2 text-sm font-medium text-primary-foreground/80 hover:text-secondary transition-colors"
                  >
                    {link.label}
                  </button>
                ) : (
                  <Link
                    key={link.label}
                    to={link.href}
                    className="px-3 py-2 text-sm font-medium text-primary-foreground/80 hover:text-secondary transition-colors"
                  >
                    {link.label}
                  </Link>
                )
              )}
            </div>

            <div className="hidden lg:flex items-center gap-3 shrink-0">
              <a href="tel:+917837393955" className="flex items-center gap-1 text-secondary text-sm font-semibold">
                <Phone className="w-4 h-4" />
                Call Now
              </a>
              <Button
                className="bg-secondary text-secondary-foreground hover:bg-secondary/90 font-semibold"
                onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
              >
                Book Site Visit
              </Button>
            </div>

            {/* Mobile Hamburger */}
            <button
              className="lg:hidden text-primary-foreground p-2 ml-auto"
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden bg-primary border-t border-primary-foreground/10 animate-slide-in-right">
          <div className="px-4 py-4 space-y-1">
            {navLinks.map((link) =>
              link.href.startsWith("/#") ? (
                <button
                  key={link.label}
                  onClick={() => handleNavClick(link.href)}
                  className="block w-full text-left px-4 py-3 text-primary-foreground/80 hover:text-secondary hover:bg-primary-foreground/5 rounded-md transition-colors"
                >
                  {link.label}
                </button>
              ) : (
                <Link
                  key={link.label}
                  to={link.href}
                  onClick={() => setIsOpen(false)}
                  className="block px-4 py-3 text-primary-foreground/80 hover:text-secondary hover:bg-primary-foreground/5 rounded-md transition-colors"
                >
                  {link.label}
                </Link>
              )
            )}
            <div className="pt-4 border-t border-primary-foreground/10">
              <Button className="w-full bg-secondary text-secondary-foreground hover:bg-secondary/90 font-semibold">
                Book Site Visit
              </Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

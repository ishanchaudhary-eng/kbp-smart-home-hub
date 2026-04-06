import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";
import MathCaptcha from "@/components/MathCaptcha";

interface LeadFormProps {
  title?: string;
  buttonText?: string;
  variant?: "light" | "dark" | "gold";
  compact?: boolean;
  className?: string;
}

const LeadForm = ({ title = "Get Instant Price List", buttonText = "Submit Enquiry", variant = "light", compact = false, className = "" }: LeadFormProps) => {
  const [formData, setFormData] = useState({ name: "", phone: "", email: "", interest: "" });
  const [submitted, setSubmitted] = useState(false);
  const [captchaVerified, setCaptchaVerified] = useState(false);
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.phone) {
      toast({ title: "Please fill required fields", description: "Name and phone number are required.", variant: "destructive" });
      return;
    }
    if (!captchaVerified) {
      toast({ title: "Please solve the math question", variant: "destructive" });
      return;
    }
    setSubmitted(true);
    toast({ title: "Thank You!", description: "Our team will contact you shortly." });
  };

  const bgClass = variant === "dark" ? "bg-primary text-primary-foreground" : variant === "gold" ? "bg-secondary/10 border border-secondary/30" : "bg-card shadow-xl border";
  const inputClass = variant === "dark" ? "bg-primary-foreground/10 border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/50" : "";

  if (submitted) {
    return (
      <div className={`rounded-xl p-6 text-center ${bgClass} ${className}`}>
        <div className="text-4xl mb-3">✅</div>
        <h3 className="text-xl font-bold font-display mb-2">Thank You!</h3>
        <p className="text-sm opacity-80">Our team will contact you within 30 minutes.</p>
      </div>
    );
  }

  return (
    <div className={`rounded-xl ${compact ? "p-4" : "p-6"} ${bgClass} ${className}`}>
      {title && <h3 className={`font-display font-bold ${compact ? "text-lg mb-3" : "text-xl mb-4"} ${variant === "dark" ? "text-primary-foreground" : "text-foreground"}`}>{title}</h3>}
      <form onSubmit={handleSubmit} className="space-y-3">
        <Input placeholder="Your Name *" value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} className={inputClass} required />
        <Input placeholder="Phone Number *" type="tel" value={formData.phone} onChange={(e) => setFormData({ ...formData, phone: e.target.value })} className={inputClass} required />
        {!compact && <Input placeholder="Email Address" type="email" value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} className={inputClass} />}
        {!compact && (
          <select
            value={formData.interest}
            onChange={(e) => setFormData({ ...formData, interest: e.target.value })}
            className={`w-full h-10 rounded-md border px-3 text-sm ${inputClass || "border-input bg-background"}`}
          >
            <option value="">Interested In</option>
            <option value="2bhk">2 BHK Apartment</option>
            <option value="3bhk">3 BHK Apartment</option>
            <option value="plots">Residential Plot</option>
            <option value="commercial">Commercial Shop</option>
            <option value="villa">Villa</option>
          </select>
        )}
        <MathCaptcha onVerified={setCaptchaVerified} inputClassName={inputClass} />
        <Button type="submit" className="w-full bg-secondary text-secondary-foreground hover:bg-secondary/90 font-bold text-base h-12 animate-pulse-gold">
          {buttonText}
        </Button>
      </form>
      <p className="text-xs opacity-50 mt-2 text-center">We respect your privacy. No spam.</p>
    </div>
  );
};

export default LeadForm;

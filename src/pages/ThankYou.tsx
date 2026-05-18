import { useNavigate, useLocation, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Check, ArrowLeft, Home } from "lucide-react";
import { Button } from "@/components/ui/button";
import FloatingParticles from "@/components/FloatingParticles";

const ThankYou = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const from = (location.state as { from?: string } | null)?.from;

  const goBack = () => {
    if (from) navigate(from);
    else navigate(-1);
  };

  return (
    <main className="pt-16 md:pt-20 min-h-screen bg-gradient-to-br from-primary via-navy-dark to-primary text-primary-foreground relative overflow-hidden">
      <FloatingParticles count={14} color="secondary" />
      <section className="container mx-auto px-4 py-20 md:py-28 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl mx-auto bg-card text-card-foreground rounded-2xl shadow-2xl border p-8 md:p-12 text-center"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: "spring", stiffness: 200, delay: 0.2 }}
            className="w-20 h-20 mx-auto mb-6 rounded-full bg-secondary/20 flex items-center justify-center"
          >
            <Check className="w-10 h-10 text-secondary" />
          </motion.div>
          <h1 className="text-3xl md:text-4xl font-display font-bold mb-3">
            Thank You!
          </h1>
          <p className="text-muted-foreground text-base md:text-lg mb-2">
            Your enquiry has been received successfully.
          </p>
          <p className="text-muted-foreground text-sm md:text-base mb-8">
            Our team will reach out to you within 30 minutes. For urgent queries, call us at{" "}
            <a href="tel:+918699366993" className="text-secondary font-semibold hover:underline">
              086993 66993
            </a>
            .
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Button
              onClick={goBack}
              variant="outline"
              className="border-primary/30 hover:bg-primary/5 h-12 px-6"
            >
              <ArrowLeft className="w-4 h-4 mr-2" /> Go Back
            </Button>
            <Button
              asChild
              className="bg-secondary text-secondary-foreground hover:bg-secondary/90 font-semibold h-12 px-6"
            >
              <Link to="/">
                <Home className="w-4 h-4 mr-2" /> Back to Home
              </Link>
            </Button>
          </div>
        </motion.div>
      </section>
    </main>
  );
};

export default ThankYou;
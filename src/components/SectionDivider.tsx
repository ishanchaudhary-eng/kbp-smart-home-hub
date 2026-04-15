import { motion } from "framer-motion";

type DividerVariant = "wave" | "angle" | "curve" | "gold-line" | "dots";

interface SectionDividerProps {
  variant?: DividerVariant;
  flip?: boolean;
  fromDark?: boolean;
}

const SectionDivider = ({ variant = "wave", flip = false, fromDark = false }: SectionDividerProps) => {
  const fillColor = fromDark ? "hsl(var(--background))" : "hsl(var(--primary))";
  const bgColor = fromDark ? "hsl(var(--primary))" : "transparent";

  if (variant === "gold-line") {
    return (
      <div className="relative py-8 flex items-center justify-center overflow-hidden">
        <motion.div
          className="h-px w-full max-w-md bg-gradient-to-r from-transparent via-secondary to-transparent"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        />
        <motion.div
          className="absolute w-3 h-3 rounded-full bg-secondary"
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
        />
      </div>
    );
  }

  if (variant === "dots") {
    return (
      <div className="flex items-center justify-center gap-3 py-6">
        {[0, 1, 2, 3, 4].map((i) => (
          <motion.div
            key={i}
            className="w-2 h-2 rounded-full bg-secondary/40"
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
          />
        ))}
      </div>
    );
  }

  if (variant === "wave") {
    return (
      <div className={`-mt-px ${flip ? "rotate-180" : ""}`} style={{ backgroundColor: bgColor }}>
        <svg viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full block" preserveAspectRatio="none">
          <path d="M0 60V20C240 50 480 0 720 20C960 40 1200 0 1440 20V60H0Z" fill={fillColor} />
        </svg>
      </div>
    );
  }

  if (variant === "angle") {
    return (
      <div className={`-mt-px ${flip ? "rotate-180" : ""}`} style={{ backgroundColor: bgColor }}>
        <svg viewBox="0 0 1440 50" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full block" preserveAspectRatio="none">
          <path d="M0 50V30L720 0L1440 30V50H0Z" fill={fillColor} />
        </svg>
      </div>
    );
  }

  // curve
  return (
    <div className={`-mt-px ${flip ? "rotate-180" : ""}`} style={{ backgroundColor: bgColor }}>
      <svg viewBox="0 0 1440 50" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full block" preserveAspectRatio="none">
        <path d="M0 50V25C360 50 1080 0 1440 25V50H0Z" fill={fillColor} />
      </svg>
    </div>
  );
};

export default SectionDivider;

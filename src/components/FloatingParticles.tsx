import { motion } from "framer-motion";

const FloatingParticles = ({ count = 12, color = "secondary" }: { count?: number; color?: string }) => {
  const particles = Array.from({ length: count }, (_, i) => ({
    id: i,
    left: `${(i * 17 + 5) % 100}%`,
    top: `${(i * 23 + 10) % 100}%`,
    size: 2 + (i % 4) * 2,
    duration: 6 + (i % 5) * 2,
    delay: i * 0.5,
    yRange: 15 + (i % 3) * 10,
  }));

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {particles.map((p) => (
        <motion.div
          key={p.id}
          className={`absolute rounded-full bg-${color}/10`}
          style={{
            left: p.left,
            top: p.top,
            width: p.size,
            height: p.size,
            backgroundColor: `hsl(var(--${color}) / 0.12)`,
          }}
          animate={{
            y: [0, -p.yRange, 0],
            opacity: [0.3, 0.7, 0.3],
          }}
          transition={{
            duration: p.duration,
            repeat: Infinity,
            ease: "easeInOut",
            delay: p.delay,
          }}
        />
      ))}
    </div>
  );
};

export default FloatingParticles;

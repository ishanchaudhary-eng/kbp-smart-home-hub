import { useEffect, useState, useRef } from "react";
import { motion, useInView } from "framer-motion";

interface AnimatedCounterProps {
  end: number;
  suffix?: string;
  prefix?: string;
  duration?: number;
  className?: string;
}

const AnimatedCounter = ({ end, suffix = "", prefix = "", duration = 2, className = "" }: AnimatedCounterProps) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const step = end / (duration * 60);
    const timer = setInterval(() => {
      start += step;
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 1000 / 60);
    return () => clearInterval(timer);
  }, [inView, end, duration]);

  return (
    <motion.span
      ref={ref}
      className={className}
      initial={{ opacity: 0, y: 10 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
    >
      {prefix}{count}{suffix}
    </motion.span>
  );
};

export default AnimatedCounter;

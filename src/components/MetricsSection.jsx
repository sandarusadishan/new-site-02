import { motion, useInView, useMotionValue, useTransform, animate, AnimatePresence } from "framer-motion";
import { useEffect, useRef, useState } from "react";

const AnimatedCounter = ({ end, suffix, label, delay = 0 }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => Math.round(latest));
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    if (isInView) {
      const controls = animate(count, end, {
        duration: 2,
        delay,
        ease: "easeOut",
      });
      return controls.stop;
    }
  }, [isInView, end, delay, count]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay, type: "spring", stiffness: 50 }}
      viewport={{ once: true }}
      className="relative group h-full"
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
    >
      {/* Card Container - using CSS for smooth high-performance glow */}
      <div 
        className={`
          relative h-full bg-white rounded-[2rem] p-8 md:p-10 
          transition-all duration-500 ease-out
          border-2 
          ${isHovered 
            ? "border-cyan-400 shadow-[0_0_40px_-5px_rgba(34,211,238,0.4)] scale-105" 
            : "border-transparent shadow-[0_8px_30px_rgb(0,0,0,0.04)] scale-100"
          }
        `}
      >
        {/* Subtle inner blue gradient on hover */}
        <div 
          className={`
            absolute inset-0 rounded-[2rem] bg-gradient-to-br from-cyan-50/50 to-blue-50/50 
            transition-opacity duration-500 pointer-events-none
            ${isHovered ? "opacity-100" : "opacity-0"}
          `} 
        />

        <div className="relative z-10 text-center space-y-3 h-full flex flex-col justify-center">
          <motion.div 
            className="flex justify-center items-center text-5xl md:text-6xl font-bold text-slate-900"
            layout
          >
            <motion.span>{rounded}</motion.span>
            <motion.span 
              className="text-cyan-500 ml-1"
              animate={isHovered ? { 
                scale: [1, 1.2, 1], 
                rotate: [0, 10, -10, 0],
                filter: "drop-shadow(0 0 8px rgba(34,211,238,0.5))"
              } : {}}
              transition={{ duration: 0.5 }}
            >
              {suffix}
            </motion.span>
          </motion.div>
          <p className="text-lg text-slate-500 font-medium tracking-wide">
            {label}
          </p>
        </div>
      </div>
    </motion.div>
  );
};

const MetricsSection = () => {
  const metrics = [
    { end: 20, suffix: "+", label: "Years In Operation" },
    { end: 1000, suffix: "+", label: "Satisfied Customers" },
    { end: 30, suffix: "+", label: "Expert Team Members" },
    { end: 20, suffix: "+", label: "Global Projects" },
  ];

  return (
    <section className="relative py-20 bg-slate-50 overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4 tracking-tight">
            Our Impact
          </h2>
          <p className="text-lg md:text-xl text-slate-500 max-w-2xl mx-auto font-light">
            Delivering excellence across industries for over two decades
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {metrics.map((metric, index) => (
            <AnimatedCounter
              key={metric.label}
              end={metric.end}
              suffix={metric.suffix}
              label={metric.label}
              delay={index * 0.15}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default MetricsSection;

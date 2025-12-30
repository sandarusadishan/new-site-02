import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import Logo from "../assets/favicon.ico.png";

const Preloader = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          return 100;
        }
        return prev + 1;
      });
    }, 20);

    return () => clearTimeout(timer);
  }, []);

  // Calculate circle circumference for progress stroke
  const radius = 45;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (progress / 100) * circumference;

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ 
        opacity: 0, 
        scale: 1.1, 
        filter: "blur(10px)",
        transition: { duration: 0.8, ease: "easeInOut" } 
      }}
      className="fixed inset-0 z-50 flex items-center justify-center bg-[#050505] text-white overflow-hidden"
    >
      <div className="relative flex flex-col items-center justify-center">
        
        {/* Creative Circular Progress Container */}
        <div className="relative w-40 h-40 flex items-center justify-center">
          
          {/* Background Ring (Dim) */}
          <svg className="absolute inset-0 w-full h-full rotate-[-90deg]">
            <circle
              cx="80"
              cy="80"
              r={radius}
              stroke="currentColor"
              strokeWidth="2"
              fill="transparent"
              className="text-slate-800"
            />
            {/* Active Progress Ring */}
            <motion.circle
              cx="80"
              cy="80"
              r={radius}
              stroke="currentColor"
              strokeWidth="3"
              fill="transparent"
              className="text-cyan-500 drop-shadow-[0_0_10px_rgba(6,182,212,0.5)]"
              strokeDasharray={circumference}
              animate={{ strokeDashoffset }}
              transition={{ ease: "linear" }}
              strokeLinecap="round"
            />
          </svg>

          {/* Inner Logo */}
          <motion.div 
            className="absolute inset-0 flex items-center justify-center p-8"
            animate={{ scale: [0.9, 1, 0.9] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          >
             <img
              src={Logo}
              alt="Loading"
              className="w-16 h-16 object-contain opacity-90"
            />
          </motion.div>

          {/* Orbiting Particles for extra creativity */}
          <motion.div 
            className="absolute inset-0"
            animate={{ rotate: 360 }}
            transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
          >
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1.5 h-1.5 bg-white rounded-full shadow-[0_0_10px_white]" />
          </motion.div>
        
        </div>

        {/* Minimal Text below */}
        <div className="mt-4 text-center space-y-1">
          <motion.div 
            className="text-2xl font-mono font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            {progress}%
          </motion.div>
          <p className="text-[10px] tracking-[0.3em] text-slate-500 uppercase">System Loading</p>
        </div>

      </div>
    </motion.div>
  );
};

export default Preloader;

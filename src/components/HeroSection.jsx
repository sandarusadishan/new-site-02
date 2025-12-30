import { motion } from "framer-motion";
import SectionDivider from "./SectionDivider";
import backgroundImage from '/src/assets/background1.jpg';
import logoImage from '/src/assets/favicon.ico.png';
import BackgroundVideo from '../assets/video2.mp4';

const HeroSection = () => {
  return (
    <section className="relative min-h-[100svh] flex items-center justify-center overflow-hidden bg-[#0A0A0A] text-white selection:bg-cyan-500/30">
      
      {/* 1. Dynamic Background Layer */}
      <div className="absolute inset-0 z-0">
        {/* Background Video */}
        <video 
          autoPlay 
          muted 
          loop 
          playsInline
          className="absolute inset-0 w-full h-full object-cover opacity-60"
        >
          <source src={BackgroundVideo} type="video/mp4" />
          {/* Fallback for browsers that don't support video */}
          <div 
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${backgroundImage})` }}
          />
        </video>
        
        {/* Gradient Overlay for Depth */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/50 to-[#0A0A0A]" />
        
        {/* Animated Gradient Orbs - replacing Three.js for performance but keeping the vibe */}
        <motion.div 
          animate={{ x: [0, 100, 0], y: [0, -50, 0], opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
          className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-blue-600/20 rounded-full blur-[120px] mix-blend-screen"
        />
        <motion.div 
          animate={{ x: [0, -100, 0], y: [0, 50, 0], opacity: [0.2, 0.4, 0.2] }}
          transition={{ duration: 18, repeat: Infinity, ease: "linear", delay: 2 }}
          className="absolute bottom-1/4 right-1/4 w-[600px] h-[600px] bg-purple-600/10 rounded-full blur-[120px] mix-blend-screen"
        />
      </div>



      {/* 3. Main Content Content */}
      <div className="relative z-10 container mx-auto px-6 h-full flex flex-col items-center justify-center text-center">
        
        {/* Logo - Pure Image with Floating Animation */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8, y: 20 }}
          animate={{ 
            opacity: 1, 
            scale: 1, 
            y: [0, -15, 0] // Floating effect
          }}
          transition={{ 
            duration: 0.8, 
            ease: "easeOut",
            y: {
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut"
            }
          }}
          className="mb-8"
        >
          <img 
            src={logoImage} 
            alt="SoftVision Group" 
            className="h-28 md:h-40 object-contain drop-shadow-2xl"
          />
        </motion.div>

        {/* Hero Text */}
        <div className="space-y-6 max-w-5xl mx-auto">
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter"
          >
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-white via-slate-200 to-slate-400">
              SoftVision Group
            </span>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col items-center gap-4"
          >
            <div className="h-px w-24 bg-gradient-to-r from-transparent via-cyan-500 to-transparent mb-4" />
            <p className="text-xl md:text-3xl font-light text-slate-300 tracking-wide">
              Pioneering <span className="text-cyan-400 font-normal">Digital Innovation</span>
            </p>
          </motion.div>

          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="text-slate-400 max-w-2xl mx-auto text-base md:text-lg leading-relaxed pt-4"
          >
            Transforming concepts into digital reality with cutting-edge software solutions 
            and next-generation cloud infrastructure.
          </motion.p>
        </div>

        {/* CTA Buttons */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-12 flex flex-col sm:flex-row gap-6"
        >
         
          
        </motion.div>

      </div>

      {/* Scroll Indicator */}
      

      {/* Bottom Fade */}
      <SectionDivider />
    </section>
  );
};

export default HeroSection;

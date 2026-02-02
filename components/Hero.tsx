import React from 'react';
import { motion } from 'framer-motion';

const Hero: React.FC = () => {
  const headline = "Justice, Integrity & Legal Excellence";
  const words = headline.split(" ");

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-charcoal">
      {/* Background Image/Texture */}
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-30 mix-blend-overlay"
        style={{ 
          backgroundImage: 'url("https://images.unsplash.com/photo-1589829085413-56de8ae18c73?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80")',
        }}
      />
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-charcoal/80 via-charcoal/60 to-charcoal" />

      <div className="container mx-auto px-6 relative z-10 text-center pt-20">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="inline-block mb-6 px-4 py-1 border border-gold/30 rounded-full bg-gold/5 backdrop-blur-sm"
        >
          <span className="text-gold text-xs md:text-sm tracking-[0.2em] uppercase font-medium">
            Est. 1999 • Bhopal, Madhya Pradesh
          </span>
        </motion.div>

        <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl text-ivory font-bold leading-tight mb-8">
          {words.map((word, i) => (
            <motion.span
              key={i}
              initial={{ opacity: 0, y: 40, filter: "blur(10px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{ 
                duration: 0.8, 
                delay: 0.4 + (i * 0.15),
                ease: [0.4, 0.0, 0.2, 1] 
              }}
              className="inline-block mr-3 md:mr-5 last:mr-0"
            >
              {word}
            </motion.span>
          ))}
        </h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.2 }}
          className="text-stone text-lg md:text-xl max-w-2xl mx-auto font-light leading-relaxed mb-12"
        >
          Trusted legal representation rooted in experience, ethics, and results. 
          Defending your rights with unwavering dedication.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.4 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-6"
        >
          <a 
            href="#contact"
            className="group relative px-8 py-4 bg-gold text-charcoal font-semibold tracking-wide overflow-hidden min-w-[200px]"
          >
            <span className="relative z-10 group-hover:text-ivory transition-colors duration-300">Book Consultation</span>
            <div className="absolute inset-0 bg-burgundy transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
          </a>
          
          <a 
            href="tel:09826069541"
            className="group px-8 py-4 border border-stone/50 text-ivory hover:border-gold transition-colors duration-300 min-w-[200px]"
          >
             <span className="group-hover:text-gold transition-colors duration-300">Call Now</span>
          </a>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center"
      >
        <span className="text-stone/50 text-xs tracking-widest uppercase mb-2">Scroll</span>
        <div className="w-[1px] h-12 bg-gradient-to-b from-gold to-transparent" />
      </motion.div>
    </section>
  );
};

export default Hero;
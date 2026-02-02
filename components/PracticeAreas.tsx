import React from 'react';
import Section from './Section';
import { PRACTICE_AREAS } from '../constants';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const PracticeAreas: React.FC = () => {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.4, 0, 0.2, 1] } }
  };

  return (
    <Section id="practice" dark>
      <div className="text-center max-w-3xl mx-auto mb-20">
        <span className="text-gold uppercase tracking-widest text-sm font-semibold block mb-4">Our Expertise</span>
        <h2 className="font-serif text-4xl md:text-5xl text-ivory mb-6">Core Legal Services</h2>
        <div className="w-24 h-[1px] bg-gold mx-auto mb-8"></div>
        <p className="text-stone text-lg font-light">
          Comprehensive legal solutions tailored to your specific needs. 
          We specialize in high-stakes litigation and strategic advisory.
        </p>
      </div>

      <motion.div 
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-50px" }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
      >
        {PRACTICE_AREAS.map((area) => (
          <motion.div 
            key={area.id}
            variants={item}
            className="group relative bg-white/5 border border-white/10 p-8 hover:bg-gold hover:border-gold transition-all duration-500"
          >
            <div className="mb-6 text-gold group-hover:text-charcoal transition-colors duration-500">
              <area.icon size={40} strokeWidth={1} />
            </div>
            
            <h3 className="font-serif text-2xl text-ivory mb-4 group-hover:text-charcoal transition-colors duration-500">
              {area.title}
            </h3>
            
            <p className="text-stone text-sm leading-relaxed mb-6 group-hover:text-charcoal/80 transition-colors duration-500">
              {area.description}
            </p>

            <div className="flex items-center text-xs uppercase tracking-widest font-semibold text-stone group-hover:text-charcoal transition-colors duration-500">
              <span>Learn More</span>
              <ArrowRight size={14} className="ml-2 transform group-hover:translate-x-1 transition-transform duration-300" />
            </div>
          </motion.div>
        ))}
      </motion.div>
    </Section>
  );
};

export default PracticeAreas;
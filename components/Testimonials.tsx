import React, { useState, useEffect } from 'react';
import Section from './Section';
import { TESTIMONIALS } from '../constants';
import { Quote, Star, ChevronLeft, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Testimonials: React.FC = () => {
  const [current, setCurrent] = useState(0);

  const next = () => {
    setCurrent((prev) => (prev === TESTIMONIALS.length - 1 ? 0 : prev + 1));
  };

  const prev = () => {
    setCurrent((prev) => (prev === 0 ? TESTIMONIALS.length - 1 : prev - 1));
  };

  // Auto-scroll
  useEffect(() => {
    const timer = setInterval(next, 6000);
    return () => clearInterval(timer);
  }, []);

  return (
    <Section id="testimonials" className="bg-[#f0ece3]">
      <div className="container mx-auto px-4 max-w-5xl">
        <div className="flex flex-col items-center text-center">
          <Quote size={48} className="text-gold/40 mb-8" />
          
          <div className="relative w-full min-h-[300px] flex items-center justify-center overflow-hidden">
            <AnimatePresence mode='wait'>
              <motion.div
                key={current}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.5 }}
                className="w-full max-w-3xl px-4 md:px-12"
              >
                <div className="flex justify-center mb-6 space-x-1">
                  {[...Array(TESTIMONIALS[current].rating)].map((_, i) => (
                    <Star key={i} size={20} className="text-gold fill-current" />
                  ))}
                </div>
                
                <h3 className="font-serif text-2xl md:text-3xl lg:text-4xl text-charcoal leading-relaxed italic mb-8">
                  "{TESTIMONIALS[current].text}"
                </h3>
                
                <div className="flex flex-col items-center">
                  <span className="font-bold text-charcoal tracking-wide uppercase text-sm">
                    {TESTIMONIALS[current].name}
                  </span>
                  <span className="text-stone text-xs mt-1">
                    Client Review • {TESTIMONIALS[current].date}
                  </span>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="flex space-x-4 mt-10">
            <button onClick={prev} className="p-3 rounded-full border border-charcoal/10 hover:bg-gold hover:text-white hover:border-gold transition-colors">
              <ChevronLeft size={20} />
            </button>
            <button onClick={next} className="p-3 rounded-full border border-charcoal/10 hover:bg-gold hover:text-white hover:border-gold transition-colors">
              <ChevronRight size={20} />
            </button>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Testimonials;
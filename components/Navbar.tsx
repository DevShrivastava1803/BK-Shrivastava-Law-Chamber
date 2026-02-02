import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Phone } from 'lucide-react';
import { NAV_ITEMS } from '../constants';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: [0.4, 0.0, 0.2, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled 
            ? 'bg-charcoal/95 backdrop-blur-md py-4 shadow-lg border-b border-gold/20' 
            : 'bg-transparent py-6'
        }`}
      >
        <div className="container mx-auto px-6 flex justify-between items-center">
          {/* Logo Area */}
          <a href="#" className="flex flex-col group">
            <span className={`font-serif text-xl md:text-2xl font-bold tracking-wider transition-colors duration-300 ${isScrolled ? 'text-gold' : 'text-ivory'}`}>
              B.K. SHRIVASTAVA
            </span>
            <span className={`text-xs tracking-[0.2em] uppercase transition-colors duration-300 ${isScrolled ? 'text-stone' : 'text-stone/80 group-hover:text-gold'}`}>
              Law Chamber
            </span>
          </a>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className={`text-sm tracking-widest uppercase relative group py-2 ${isScrolled ? 'text-ivory' : 'text-ivory'}`}
              >
                {item.label}
                <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-gold transition-all duration-300 group-hover:w-full"></span>
              </a>
            ))}
            <a 
              href="#contact"
              className="px-6 py-2 border border-gold text-gold hover:bg-gold hover:text-charcoal transition-all duration-300 text-sm tracking-widest uppercase font-medium"
            >
              Consult
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button 
            onClick={() => setIsMobileOpen(true)}
            className="md:hidden text-gold p-2"
          >
            <Menu size={28} />
          </button>
        </div>
      </motion.nav>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {isMobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] bg-black/60 backdrop-blur-sm md:hidden"
            onClick={() => setIsMobileOpen(false)}
          >
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: "spring", bounce: 0, duration: 0.4 }}
              className="absolute right-0 top-0 bottom-0 w-[80%] max-w-sm bg-charcoal border-l border-gold/20 p-8 shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex justify-end mb-12">
                <button onClick={() => setIsMobileOpen(false)} className="text-stone hover:text-gold transition-colors">
                  <X size={28} />
                </button>
              </div>
              
              <div className="flex flex-col space-y-8">
                {NAV_ITEMS.map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    onClick={() => setIsMobileOpen(false)}
                    className="font-serif text-2xl text-ivory hover:text-gold transition-colors border-b border-white/5 pb-4"
                  >
                    {item.label}
                  </a>
                ))}
                
                <div className="pt-8">
                   <a 
                    href="tel:09826069541"
                    className="flex items-center justify-center space-x-3 w-full py-4 bg-burgundy text-ivory font-medium tracking-wide hover:bg-gold hover:text-charcoal transition-colors"
                  >
                    <Phone size={18} />
                    <span>Call Now</span>
                  </a>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
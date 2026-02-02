import React from 'react';
import { Scale } from 'lucide-react';
import { NAV_ITEMS } from '../constants';

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#050505] text-stone py-16 border-t border-white/5">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          
          <div className="col-span-1 md:col-span-2">
            <a href="#" className="flex items-center space-x-2 mb-6 text-ivory">
              <Scale size={24} className="text-gold" />
              <span className="font-serif text-xl font-bold tracking-wide">B.K. SHRIVASTAVA</span>
            </a>
            <p className="text-sm font-light leading-relaxed max-w-sm mb-6">
              A premier law chamber in Bhopal dedicated to upholding justice with integrity. 
              We provide expert legal representation across Madhya Pradesh courts.
            </p>
            <div className="flex space-x-4">
              {/* Social placeholders */}
              <a href="#" className="w-8 h-8 flex items-center justify-center border border-white/10 hover:border-gold hover:text-gold transition-colors rounded-full">
                <span className="sr-only">LinkedIn</span>
                <span className="text-xs">in</span>
              </a>
              <a href="#" className="w-8 h-8 flex items-center justify-center border border-white/10 hover:border-gold hover:text-gold transition-colors rounded-full">
                <span className="sr-only">Twitter</span>
                <span className="text-xs">X</span>
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-ivory font-serif text-lg mb-6">Quick Links</h4>
            <ul className="space-y-3 text-sm">
              {NAV_ITEMS.map(item => (
                <li key={item.label}>
                  <a href={item.href} className="hover:text-gold transition-colors">{item.label}</a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-ivory font-serif text-lg mb-6">Legal</h4>
            <ul className="space-y-3 text-sm">
              <li><a href="#" className="hover:text-gold transition-colors">Disclaimer</a></li>
              <li><a href="#" className="hover:text-gold transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-gold transition-colors">Terms of Use</a></li>
              <li><a href="#" className="hover:text-gold transition-colors">Client Portal</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center text-xs tracking-wider">
          <p>&copy; {new Date().getFullYear()} B.K. Shrivastava Law Chamber. All rights reserved.</p>
          <p className="mt-4 md:mt-0">
            <span className="opacity-50">Designed with</span> Integrity & Precision.
          </p>
        </div>
        
        <div className="mt-8 text-[10px] text-stone/40 text-center leading-relaxed">
           <strong>Disclaimer:</strong> The rules of the Bar Council of India do not permit advertisement or solicitation by advocates in any form or manner. 
           This website is for informational purposes only. By accessing this website, you acknowledge that you are seeking information about B.K. Shrivastava Law Chamber of your own accord.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
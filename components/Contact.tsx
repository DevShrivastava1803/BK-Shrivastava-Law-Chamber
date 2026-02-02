import React, { useState } from 'react';
import Section from './Section';
import { CONTACT_INFO, FAQS } from '../constants';
import { Phone, MapPin, Clock, Send, ChevronDown, ChevronUp } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const FAQAccordion = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="space-y-4">
      <h3 className="font-serif text-2xl mb-6 text-charcoal">Common Questions</h3>
      {FAQS.map((faq, index) => (
        <div key={index} className="border-b border-stone/20 pb-4">
          <button
            className="w-full flex justify-between items-center text-left py-2 focus:outline-none"
            onClick={() => setOpenIndex(openIndex === index ? null : index)}
          >
            <span className={`font-medium text-lg ${openIndex === index ? 'text-burgundy' : 'text-charcoal'}`}>
              {faq.question}
            </span>
            {openIndex === index ? <ChevronUp size={18} className="text-gold" /> : <ChevronDown size={18} className="text-stone" />}
          </button>
          <AnimatePresence>
            {openIndex === index && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                className="overflow-hidden"
              >
                <p className="pt-2 pb-4 text-stone leading-relaxed">
                  {faq.answer}
                </p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      ))}
    </div>
  );
};

const Contact: React.FC = () => {
  return (
    <Section id="contact" className="relative pb-0 mb-0">
      <div className="grid lg:grid-cols-2 gap-16 mb-20">
        
        {/* Left: Info & FAQ */}
        <div>
           <div className="mb-12">
            <span className="text-gold uppercase tracking-widest text-sm font-semibold mb-2 block">Get in Touch</span>
            <h2 className="font-serif text-4xl md:text-5xl text-charcoal mb-6">Consult Us Today</h2>
            <p className="text-stone text-lg mb-8">
              Take the first step towards resolving your legal matters. 
              Visit our chambers or schedule a call.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="bg-charcoal p-3 text-gold">
                  <MapPin size={20} />
                </div>
                <div>
                  <h4 className="font-bold text-charcoal uppercase tracking-wider text-sm mb-1">Office Address</h4>
                  <p className="text-stone max-w-xs">{CONTACT_INFO.address}</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-4">
                <div className="bg-charcoal p-3 text-gold">
                  <Phone size={20} />
                </div>
                <div>
                  <h4 className="font-bold text-charcoal uppercase tracking-wider text-sm mb-1">Phone</h4>
                  <a href={`tel:${CONTACT_INFO.phone.replace(/\s/g, '')}`} className="text-stone hover:text-burgundy transition-colors text-lg">
                    {CONTACT_INFO.phone}
                  </a>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="bg-charcoal p-3 text-gold">
                  <Clock size={20} />
                </div>
                <div>
                  <h4 className="font-bold text-charcoal uppercase tracking-wider text-sm mb-1">Visiting Hours</h4>
                  <p className="text-stone">{CONTACT_INFO.hours} - 10:00 PM</p>
                </div>
              </div>
            </div>
           </div>

           <FAQAccordion />
        </div>

        {/* Right: Form */}
        <div className="bg-white p-8 md:p-12 shadow-xl border-t-4 border-gold">
          <h3 className="font-serif text-3xl text-charcoal mb-8">Request Callback</h3>
          <form className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-xs uppercase tracking-widest text-stone font-semibold">Name</label>
                <input type="text" className="w-full border-b border-stone/30 py-2 focus:outline-none focus:border-gold bg-transparent transition-colors" placeholder="Full Name" />
              </div>
              <div className="space-y-2">
                <label className="text-xs uppercase tracking-widest text-stone font-semibold">Phone</label>
                <input type="tel" className="w-full border-b border-stone/30 py-2 focus:outline-none focus:border-gold bg-transparent transition-colors" placeholder="Mobile Number" />
              </div>
            </div>
            
            <div className="space-y-2">
              <label className="text-xs uppercase tracking-widest text-stone font-semibold">Subject</label>
               <select className="w-full border-b border-stone/30 py-2 focus:outline-none focus:border-gold bg-transparent text-charcoal">
                 <option>Civil Litigation</option>
                 <option>Criminal Defense</option>
                 <option>Family Dispute</option>
                 <option>Property Matter</option>
                 <option>Other</option>
               </select>
            </div>

            <div className="space-y-2">
              <label className="text-xs uppercase tracking-widest text-stone font-semibold">Message</label>
              <textarea rows={4} className="w-full border-b border-stone/30 py-2 focus:outline-none focus:border-gold bg-transparent resize-none" placeholder="Briefly describe your case..."></textarea>
            </div>

            <button type="submit" className="w-full bg-burgundy text-white py-4 font-semibold tracking-widest uppercase hover:bg-charcoal transition-colors duration-300 flex items-center justify-center space-x-2">
              <span>Submit Request</span>
              <Send size={16} />
            </button>
            <p className="text-xs text-stone text-center mt-4">
              * Your information is strictly confidential.
            </p>
          </form>
        </div>
      </div>

      {/* Map - Full Width */}
      <div className="w-full h-[400px] grayscale hover:grayscale-0 transition-all duration-700">
        <iframe 
          src={CONTACT_INFO.mapUrl} 
          width="100%" 
          height="100%" 
          style={{ border: 0 }} 
          allowFullScreen 
          loading="lazy"
          title="Office Location"
        ></iframe>
      </div>
    </Section>
  );
};

export default Contact;
import React from 'react';
import Section from './Section';
import { Star, Shield, Scale, Clock } from 'lucide-react';
import { motion } from 'framer-motion';

const About: React.FC = () => {
  return (
    <Section id="about" className="relative">
      <div className="grid lg:grid-cols-2 gap-16 items-center">
        {/* Left: Content */}
        <div>
          <div className="flex items-center space-x-2 mb-6">
            <div className="h-[2px] w-12 bg-gold"></div>
            <span className="text-burgundy uppercase tracking-widest text-sm font-semibold">About The Chamber</span>
          </div>
          
          <h2 className="font-serif text-4xl md:text-5xl text-charcoal mb-8 leading-tight">
            A Legacy of <span className="text-gold italic">Justice</span> & <br/> Unwavering Integrity.
          </h2>
          
          <p className="text-stone font-light text-lg leading-relaxed mb-6">
            B.K. Shrivastava Law Chamber stands as a pillar of legal excellence in Bhopal. 
            With decades of courtroom experience, we blend traditional judicial values with 
            modern legal strategies to secure the best possible outcomes for our clients.
          </p>
          
          <p className="text-stone font-light text-lg leading-relaxed mb-10">
            Whether it is complex civil litigation, criminal defense, or corporate advisory, 
            our approach is rooted in meticulous research, ethical advocacy, and a client-first philosophy.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="flex items-start space-x-4 p-4 border border-gold/10 bg-white shadow-sm">
              <Star className="text-gold shrink-0 mt-1" size={24} />
              <div>
                <h4 className="font-bold text-charcoal mb-1">4.98 Rating</h4>
                <p className="text-sm text-stone">Verified Google Reviews</p>
              </div>
            </div>
            <div className="flex items-start space-x-4 p-4 border border-gold/10 bg-white shadow-sm">
              <Shield className="text-gold shrink-0 mt-1" size={24} />
              <div>
                <h4 className="font-bold text-charcoal mb-1">Ethical Advocacy</h4>
                <p className="text-sm text-stone">100% Transparent Process</p>
              </div>
            </div>
          </div>
        </div>

        {/* Right: Visual */}
        <div className="relative">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="relative z-10"
          >
             <div className="aspect-[3/4] bg-charcoal relative overflow-hidden shadow-2xl">
                {/* Abstract Legal Representation Image */}
                <img 
                  src="https://images.unsplash.com/photo-1505664194779-8beaceb93744?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" 
                  alt="Law Books and Gavel" 
                  className="w-full h-full object-cover opacity-80"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal/90 via-transparent to-transparent"></div>
                
                <div className="absolute bottom-8 left-8 right-8 text-ivory">
                  <blockquote className="font-serif text-xl italic mb-4">
                    "Justice denied anywhere is a threat to justice everywhere."
                  </blockquote>
                  <cite className="text-gold text-sm tracking-widest uppercase not-italic">
                    — Martin Luther King Jr.
                  </cite>
                </div>
             </div>
          </motion.div>
          
          {/* Decor element */}
          <div className="absolute -top-10 -right-10 w-40 h-40 border-2 border-gold/30 z-0 hidden md:block"></div>
          <div className="absolute -bottom-10 -left-10 w-full h-full bg-stone/5 z-0"></div>
        </div>
      </div>
    </Section>
  );
};

export default About;
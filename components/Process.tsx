import React from 'react';
import Section from './Section';
import { PROCESS_STEPS } from '../constants';

const Process: React.FC = () => {
  return (
    <Section dark className="bg-gradient-to-b from-charcoal to-[#0a0a0a]">
       <div className="text-center max-w-3xl mx-auto mb-20">
        <span className="text-gold uppercase tracking-widest text-sm font-semibold block mb-4">How We Work</span>
        <h2 className="font-serif text-4xl md:text-5xl text-ivory mb-6">The Path to Justice</h2>
        <div className="w-24 h-[1px] bg-gold mx-auto"></div>
      </div>

      <div className="relative">
        {/* Central Line for Desktop */}
        <div className="absolute left-1/2 transform -translate-x-1/2 top-0 bottom-0 w-[1px] bg-gold/20 hidden md:block"></div>

        <div className="space-y-12 md:space-y-24">
          {PROCESS_STEPS.map((step, index) => {
            const isEven = index % 2 === 0;
            return (
              <div key={index} className={`flex flex-col md:flex-row items-center ${isEven ? 'md:flex-row-reverse' : ''}`}>
                
                {/* Content Side */}
                <div className="w-full md:w-1/2 p-6 md:px-12 text-center md:text-left">
                  <div className={`flex flex-col ${isEven ? 'md:items-start' : 'md:items-end md:text-right'}`}>
                    <span className="text-gold font-serif text-6xl opacity-20 font-bold mb-4 block">
                      {step.stepNumber}
                    </span>
                    <h3 className="text-2xl text-ivory font-serif mb-4">{step.title}</h3>
                    <p className="text-stone leading-relaxed max-w-sm">
                      {step.description}
                    </p>
                  </div>
                </div>

                {/* Center Node */}
                <div className="relative z-10 flex items-center justify-center w-8 h-8 md:w-12 md:h-12 bg-charcoal border border-gold rounded-full my-4 md:my-0 shadow-[0_0_15px_rgba(201,164,76,0.3)]">
                  <div className="w-2 h-2 md:w-3 md:h-3 bg-gold rounded-full"></div>
                </div>

                {/* Empty Side */}
                <div className="w-full md:w-1/2 hidden md:block"></div>
              </div>
            );
          })}
        </div>
      </div>
    </Section>
  );
};

export default Process;
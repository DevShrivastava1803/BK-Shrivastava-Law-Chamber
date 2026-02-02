import React, { useEffect, useState, useRef } from 'react';
import Section from './Section';
import { STATS } from '../constants';
import { useInView, motion, useSpring, useTransform } from 'framer-motion';

const Counter = ({ value, suffix }: { value: number, suffix: string }) => {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const spring = useSpring(0, { mass: 0.8, stiffness: 75, damping: 20 });
  const display = useTransform(spring, (current) => Math.round(current).toLocaleString());

  useEffect(() => {
    if (inView) {
      spring.set(value);
    }
  }, [inView, value, spring]);

  return (
    <span ref={ref} className="font-serif text-5xl md:text-6xl text-gold font-bold">
      <motion.span>{display}</motion.span>{suffix}
    </span>
  );
};

const Stats: React.FC = () => {
  return (
    <Section id="stats" className="bg-ivory border-y border-gold/10">
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-12 text-center">
        {STATS.map((stat, idx) => (
          <div key={idx} className="flex flex-col items-center">
            <Counter value={stat.value} suffix={stat.suffix} />
            <span className="mt-4 text-sm md:text-base tracking-widest uppercase text-charcoal font-medium">
              {stat.label}
            </span>
          </div>
        ))}
      </div>
    </Section>
  );
};

export default Stats;
import React from 'react';
import { motion } from 'framer-motion';
import { SPRING_TRANSITION } from '../../constants';

interface StatCardProps {
  value: string;
  label: string;
  delay?: number;
  className?: string;
}

const StatCard: React.FC<StatCardProps> = ({
  value,
  label,
  delay = 0,
  className = '',
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ ...SPRING_TRANSITION, delay }}
      className={`text-center p-4 sm:p-6 md:p-8 rounded-2xl sm:rounded-3xl border border-slate-100 hover:bg-slate-50 transition-colors ${className}`}
    >
      <p className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-[#D4AF37] mb-1 sm:mb-2">
        {value}
      </p>
      <p className="text-[10px] sm:text-xs font-bold uppercase tracking-widest text-slate-400">
        {label}
      </p>
    </motion.div>
  );
};

export default StatCard;


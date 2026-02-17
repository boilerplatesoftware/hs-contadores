import React from 'react';
import { motion } from 'framer-motion';
import { SPRING_TRANSITION } from '../../constants';

interface SectionHeaderProps {
  badge?: string;
  title: React.ReactNode;
  description?: string;
  centered?: boolean;
  className?: string;
}

const SectionHeader: React.FC<SectionHeaderProps> = ({
  badge,
  title,
  description,
  centered = false,
  className = '',
}) => {
  const alignmentClass = centered ? 'text-center' : 'text-left';
  
  return (
    <div className={`${alignmentClass} ${className}`}>
      {badge && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="inline-flex items-center space-x-2 px-3 sm:px-4 py-1.5 sm:py-2 bg-black border border-[#D4AF37]/30 text-[#D4AF37] rounded-full text-[10px] sm:text-xs font-bold uppercase tracking-widest mb-4 sm:mb-6"
        >
          <span className="relative flex h-1.5 w-1.5 sm:h-2 sm:w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#D4AF37] opacity-75"></span>
            <span className="relative inline-flex rounded-full h-1.5 w-1.5 sm:h-2 sm:w-2 bg-[#D4AF37]"></span>
          </span>
          <span>{badge}</span>
        </motion.div>
      )}
      
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={SPRING_TRANSITION}
        className="text-2xl sm:text-3xl md:text-4xl lg:text-6xl font-extrabold mb-4 sm:mb-6 md:mb-8 tracking-tighter"
      >
        {title}
      </motion.h2>
      
      {description && (
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto text-sm sm:text-base md:text-lg text-white/70 font-light leading-relaxed px-4"
        >
          {description}
        </motion.p>
      )}
    </div>
  );
};

export default SectionHeader;


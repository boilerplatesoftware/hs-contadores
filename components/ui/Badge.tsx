import React from 'react';
import { motion } from 'framer-motion';

interface BadgeProps {
  children: React.ReactNode;
  variant?: 'default' | 'pulse';
  className?: string;
  animate?: boolean;
}

const Badge: React.FC<BadgeProps> = ({ 
  children, 
  variant = 'default', 
  className = '',
  animate = false 
}) => {
  const baseClasses = "inline-flex items-center space-x-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-black border border-[#D4AF37]/30 text-[#D4AF37] text-[10px] sm:text-xs font-bold uppercase tracking-widest";
  
  const content = (
    <>
      {variant === 'pulse' && (
        <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-[#D4AF37] animate-pulse"></span>
      )}
      <span>{children}</span>
    </>
  );

  if (animate) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className={`${baseClasses} ${className}`}
      >
        {content}
      </motion.div>
    );
  }

  return (
    <div className={`${baseClasses} ${className}`}>
      {content}
    </div>
  );
};

export default Badge;


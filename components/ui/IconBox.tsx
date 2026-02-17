import React from 'react';
import { LucideIcon } from 'lucide-react';

interface IconBoxProps {
  icon: LucideIcon;
  size?: 'sm' | 'md' | 'lg';
  variant?: 'default' | 'gold' | 'dark';
  className?: string;
}

const IconBox: React.FC<IconBoxProps> = ({
  icon: Icon,
  size = 'md',
  variant = 'default',
  className = '',
}) => {
  const sizeClasses = {
    sm: 'w-8 h-8 p-1.5',
    md: 'w-10 h-10 sm:w-12 sm:h-12 p-2 sm:p-3',
    lg: 'w-14 h-14 p-3 sm:p-4',
  };

  const variantClasses = {
    default: 'bg-[#D4AF37]/10 border border-[#D4AF37]/30 text-[#D4AF37]',
    gold: 'bg-[#D4AF37] text-black',
    dark: 'bg-black border border-[#D4AF37]/30 text-[#D4AF37]',
  };

  const iconSize = {
    sm: 'w-4 h-4',
    md: 'w-5 h-5 sm:w-6 sm:h-6',
    lg: 'w-7 h-7 sm:w-8 sm:h-8',
  };

  return (
    <div className={`${sizeClasses[size]} ${variantClasses[variant]} rounded-lg sm:rounded-xl flex items-center justify-center shrink-0 ${className}`}>
      <Icon className={iconSize[size]} />
    </div>
  );
};

export default IconBox;


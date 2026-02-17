import React from 'react';
import { motion } from 'framer-motion';
import { LucideIcon } from 'lucide-react';

interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'tertiary';
  size?: 'sm' | 'md' | 'lg';
  icon?: LucideIcon;
  iconPosition?: 'left' | 'right';
  onClick?: () => void;
  href?: string;
  className?: string;
  fullWidth?: boolean;
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
}

const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  size = 'md',
  icon: Icon,
  iconPosition = 'right',
  onClick,
  href,
  className = '',
  fullWidth = false,
  type = 'button',
  disabled = false,
}) => {
  const baseClasses = "font-bold rounded-xl sm:rounded-2xl transition-all flex items-center justify-center space-x-2 sm:space-x-3";
  
  const sizeClasses = {
    sm: 'px-4 sm:px-6 py-2 sm:py-3 text-xs sm:text-sm',
    md: 'px-6 sm:px-8 py-3 sm:py-4 text-sm sm:text-base',
    lg: 'px-8 sm:px-10 py-4 sm:py-5 text-base sm:text-lg',
  };

  const variantClasses = {
    primary: 'bg-[#D4AF37] text-black hover:bg-[#FFD700] shadow-lg shadow-[#D4AF37]/20',
    secondary: 'border-2 border-[#D4AF37] text-[#D4AF37] hover:bg-[#D4AF37] hover:text-black',
    tertiary: 'text-[#D4AF37] hover:underline decoration-[#D4AF37] decoration-2 underline-offset-4',
  };

  const widthClass = fullWidth ? 'w-full' : 'w-full sm:w-auto';
  const iconSize = size === 'sm' ? 'w-4 h-4' : size === 'md' ? 'w-5 h-5' : 'w-6 h-6';

  const buttonContent = (
    <>
      {Icon && iconPosition === 'left' && <Icon className={iconSize} />}
      <span>{children}</span>
      {Icon && iconPosition === 'right' && <Icon className={iconSize} />}
    </>
  );

  const buttonClasses = `${baseClasses} ${sizeClasses[size]} ${variantClasses[variant]} ${widthClass} ${className}`;

  if (href) {
    return (
      <motion.a
        href={href}
        whileHover={{ scale: variant === 'tertiary' ? 1 : 1.02 }}
        whileTap={{ scale: 0.98 }}
        className={buttonClasses}
      >
        {buttonContent}
      </motion.a>
    );
  }

  return (
    <motion.button
      onClick={onClick}
      type={type}
      disabled={disabled}
      whileHover={{ scale: disabled || variant === 'tertiary' ? 1 : 1.02 }}
      whileTap={{ scale: disabled ? 1 : 0.98 }}
      className={`${buttonClasses} ${disabled ? 'opacity-70 cursor-not-allowed' : ''}`}
    >
      {buttonContent}
    </motion.button>
  );
};

export default Button;


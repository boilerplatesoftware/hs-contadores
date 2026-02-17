import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, ArrowRight, LucideIcon } from 'lucide-react';
import { SPRING_TRANSITION } from '../../constants';

interface ServiceCardProps {
  icon: React.ReactElement;
  title: string;
  description: string;
  benefits: string[];
  delay?: number;
  onAction?: () => void;
}

const ServiceCard: React.FC<ServiceCardProps> = ({
  icon,
  title,
  description,
  benefits,
  delay = 0,
  onAction,
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ ...SPRING_TRANSITION, delay }}
      className="group p-6 sm:p-8 md:p-10 bg-[#1A1A1A] rounded-2xl sm:rounded-[2.5rem] border border-[#D4AF37]/20 hover:border-[#D4AF37] shadow-sm hover:shadow-2xl hover:shadow-[#D4AF37]/10 transition-all duration-500 relative flex flex-col h-full"
    >
      <div className="mb-6 sm:mb-8 p-3 sm:p-4 bg-black border border-[#D4AF37]/30 w-fit rounded-xl sm:rounded-2xl group-hover:bg-[#D4AF37] transition-colors duration-500">
        {React.cloneElement(icon, {
          className: "w-6 h-6 sm:w-8 sm:h-8 text-[#D4AF37] group-hover:text-black transition-colors"
        })}
      </div>
      
      <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4 text-white">{title}</h3>
      <p className="text-sm sm:text-base text-white/70 mb-6 sm:mb-8 font-light flex-grow leading-relaxed">
        {description}
      </p>

      <div className="space-y-2 sm:space-y-3 mb-6 sm:mb-10">
        {benefits.map((benefit) => (
          <div key={benefit} className="flex items-start space-x-2 sm:space-x-3 text-xs sm:text-sm text-white/80">
            <CheckCircle2 size={14} className="sm:w-4 sm:h-4 text-[#D4AF37] shrink-0 mt-0.5" />
            <span>{benefit}</span>
          </div>
        ))}
      </div>

      <button 
        onClick={onAction}
        className="flex items-center space-x-2 text-xs sm:text-sm font-bold text-[#D4AF37] group-hover:translate-x-2 transition-transform hover:text-[#FFD700]"
      >
        <span>Solicitar Especificaciones</span>
        <ArrowRight size={14} className="sm:w-4 sm:h-4" />
      </button>
    </motion.div>
  );
};

export default ServiceCard;


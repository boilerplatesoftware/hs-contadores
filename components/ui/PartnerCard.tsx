import React from 'react';
import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';
import { SPRING_TRANSITION } from '../../constants';

interface PartnerCardProps {
  name: string;
  industry: string;
  description: string;
  synergy: string;
  logo: string;
  testimonial: {
    quote: string;
    author: string;
    role: string;
  };
  delay?: number;
}

const PartnerCard: React.FC<PartnerCardProps> = ({
  name,
  industry,
  description,
  synergy,
  logo,
  testimonial,
  delay = 0,
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ ...SPRING_TRANSITION, delay }}
      className="group relative"
    >
      <div className="h-full bg-[#1A1A1A] rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-10 border border-[#D4AF37]/20 shadow-sm hover:shadow-2xl hover:shadow-[#D4AF37]/10 hover:border-[#D4AF37] transition-all duration-500 flex flex-col">
        
        {/* Logo & Category */}
        <div className="flex justify-between items-start mb-6 sm:mb-8 md:mb-10">
          <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-xl sm:rounded-2xl overflow-hidden grayscale group-hover:grayscale-0 transition-all duration-700 ring-2 sm:ring-4 ring-black group-hover:ring-[#D4AF37]/30">
            <img src={logo} alt={name} className="w-full h-full object-cover" />
          </div>
          <div className="px-2 sm:px-3 py-1 bg-[#D4AF37] text-black rounded-full text-[9px] sm:text-[10px] font-black uppercase tracking-widest">
            {industry}
          </div>
        </div>

        {/* Title & Description */}
        <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4 text-white">{name}</h3>
        <p className="text-xs sm:text-sm text-white/70 font-light mb-4 sm:mb-6 leading-relaxed">
          {description}
        </p>

        {/* Synergy Badge */}
        <div className="mb-6 sm:mb-8 md:mb-10 p-3 sm:p-4 bg-black rounded-xl sm:rounded-2xl border border-[#D4AF37]/20">
          <p className="text-[9px] sm:text-[10px] font-black uppercase tracking-widest text-[#D4AF37] mb-1 sm:mb-2">Sinergia Estratégica</p>
          <p className="text-xs text-white/80 font-medium leading-relaxed">{synergy}</p>
        </div>

        {/* Testimonial */}
        <div className="mt-auto relative">
          <Quote className="absolute -top-4 -left-2 w-8 h-8 text-[#D4AF37]/20 -z-0" />
          <p className="relative z-10 text-white/80 italic font-light text-sm mb-6 leading-relaxed">
            "{testimonial.quote}"
          </p>
          <div className="flex items-center space-x-3">
            <div className="w-8 h-px bg-[#D4AF37]"></div>
            <div>
              <p className="text-xs font-bold text-[#D4AF37]">{testimonial.author}</p>
              <p className="text-[10px] text-white/50 uppercase tracking-widest">{testimonial.role}</p>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default PartnerCard;


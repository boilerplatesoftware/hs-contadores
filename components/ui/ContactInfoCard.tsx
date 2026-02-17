import React from 'react';
import { motion } from 'framer-motion';
import { LucideIcon } from 'lucide-react';
import { SPRING_TRANSITION } from '../../constants';
import IconBox from './IconBox';

interface ContactInfoCardProps {
  icon: LucideIcon;
  title: string;
  detail: string;
  sub: string;
  delay?: number;
}

const ContactInfoCard: React.FC<ContactInfoCardProps> = ({
  icon,
  title,
  detail,
  sub,
  delay = 0,
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ ...SPRING_TRANSITION, delay }}
      className="p-4 sm:p-6 md:p-8 bg-white rounded-2xl sm:rounded-3xl border border-[#D4AF37]/20 shadow-sm hover:shadow-xl hover:shadow-[#D4AF37]/10 transition-all group"
    >
      <div className="mb-4 sm:mb-6 group-hover:bg-[#D4AF37] group-hover:text-black transition-colors duration-500">
        <IconBox icon={icon} variant="dark" />
      </div>
      <h4 className="text-xs sm:text-sm font-bold text-slate-400 uppercase tracking-widest mb-1 sm:mb-2">{title}</h4>
      <p className="text-base sm:text-lg md:text-xl font-bold text-[#D4AF37] mb-1 break-all">{detail}</p>
      <p className="text-xs sm:text-sm text-slate-500 font-light">{sub}</p>
    </motion.div>
  );
};

export default ContactInfoCard;


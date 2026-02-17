import React from 'react';
import { motion } from 'framer-motion';
import { SPRING_TRANSITION } from '../../constants';
import IconBox from './IconBox';

interface ValueCardProps {
  icon: React.ReactElement;
  title: string;
  description: string;
  delay?: number;
}

const ValueCard: React.FC<ValueCardProps> = ({
  icon,
  title,
  description,
  delay = 0,
}) => {
  // Extract icon component from React element
  const IconComponent = icon.type as React.ComponentType<{ className?: string }>;
  
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ ...SPRING_TRANSITION, delay }}
      className="space-y-4"
    >
      <IconBox icon={IconComponent} variant="default" />
      <h4 className="text-xl font-bold text-white">{title}</h4>
      <p className="text-white/70 font-light leading-relaxed">{description}</p>
    </motion.div>
  );
};

export default ValueCard;


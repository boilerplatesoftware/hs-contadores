import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Building2, ChevronRight } from 'lucide-react';
import { SPRING_TRANSITION } from '../../constants';

interface ProjectCardProps {
  title: string;
  category: string;
  result: string;
  description: string;
  client: string;
  image: string;
  delay?: number;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  category,
  result,
  description,
  client,
  image,
  delay = 0,
}) => {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      transition={{ ...SPRING_TRANSITION, delay }}
      className="group relative flex flex-col h-full"
    >
      {/* Image Container */}
      <div className="relative overflow-hidden rounded-xl sm:rounded-2xl aspect-[4/5] shadow-xl">
        <img 
          src={image} 
          alt={title} 
          className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-80 group-hover:opacity-95 transition-opacity duration-500" />
        
        {/* Overlay Content */}
        <div className="absolute inset-0 p-4 sm:p-6 md:p-8 flex flex-col justify-end text-white">
          <div className="translate-y-6 group-hover:translate-y-0 transition-transform duration-500">
            <div className="flex flex-wrap items-center gap-2 mb-3 sm:mb-4">
              <span className="px-2 sm:px-3 py-1 bg-black/80 backdrop-blur-md rounded-md sm:rounded-lg text-[9px] sm:text-[10px] font-bold uppercase tracking-widest border border-[#D4AF37]/30 text-[#D4AF37]">
                {category}
              </span>
              <span className="px-2 sm:px-3 py-1 bg-[#D4AF37] text-black rounded-md sm:rounded-lg text-[9px] sm:text-[10px] font-bold uppercase tracking-widest">
                {result}
              </span>
            </div>
            
            <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold leading-tight mb-2 sm:mb-4 group-hover:text-[#D4AF37] transition-colors">
              {title}
            </h3>
            
            <p className="text-xs sm:text-sm text-white/70 font-light mb-4 sm:mb-6 md:mb-8 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100 line-clamp-2 sm:line-clamp-3">
              {description}
            </p>
            
            <button className="flex items-center space-x-2 sm:space-x-3 text-xs sm:text-sm font-bold group/btn">
              <span>Ver Reporte</span>
              <div className="w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-white/10 flex items-center justify-center group-hover/btn:bg-white group-hover/btn:text-black transition-all">
                <ExternalLink size={12} className="sm:w-3.5 sm:h-3.5" />
              </div>
            </button>
          </div>
        </div>
      </div>

      {/* Meta info footer */}
      <div className="mt-6 px-4 flex items-center justify-between opacity-60">
        <div className="flex items-center space-x-2">
          <Building2 size={14} />
          <span className="text-xs font-bold uppercase tracking-widest">{client}</span>
        </div>
        <ChevronRight size={16} />
      </div>
    </motion.div>
  );
};

export default ProjectCard;


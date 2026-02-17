
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, TrendingUp, Users, Building2, ChevronRight } from 'lucide-react';
import { PROJECTS, SPRING_TRANSITION } from '../constants';

const Projects: React.FC = () => {
  const [activeTab, setActiveTab] = useState('Todos');
  const categories = ['Todos', 'Auditoría', 'Fiscal', 'Legal'];

  const filteredProjects = activeTab === 'Todos' 
    ? PROJECTS 
    : PROJECTS.filter(p => p.category.includes(activeTab));

  return (
    <div className="container mx-auto px-6 py-12">
      {/* Header Section */}
      <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-16 space-y-8 lg:space-y-0">
        <div className="max-w-2xl">
          <motion.span 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-blue-500 font-bold text-xs uppercase tracking-[0.3em] mb-4 block"
          >
            Casos de Éxito Seleccionados
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={SPRING_TRANSITION}
            className="text-4xl lg:text-6xl font-extrabold tracking-tighter"
          >
            Transformación Real, <span className="text-slate-400">Resultados Medibles.</span>
          </motion.h2>
        </div>
        
        {/* Category Filter */}
        <div className="flex bg-slate-100 p-1.5 rounded-2xl">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveTab(cat)}
              className={`px-6 py-2.5 rounded-xl text-sm font-bold transition-all duration-300 ${
                activeTab === cat 
                  ? 'bg-white text-[#004085] shadow-sm' 
                  : 'text-slate-500 hover:text-[#004085]'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Projects Grid */}
      <div className="grid lg:grid-cols-3 gap-10">
        <AnimatePresence mode='popLayout'>
          {filteredProjects.map((project, idx) => (
            <motion.div
              layout
              key={project.id}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ ...SPRING_TRANSITION, delay: idx * 0.05 }}
              className="group relative flex flex-col h-full"
            >
              {/* Image Container */}
              <div className="relative overflow-hidden rounded-[2rem] aspect-[4/5] shadow-xl">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#004085] via-[#004085]/20 to-transparent opacity-80 group-hover:opacity-95 transition-opacity duration-500" />
                
                {/* Overlay Content */}
                <div className="absolute inset-0 p-8 flex flex-col justify-end text-white">
                  <div className="translate-y-6 group-hover:translate-y-0 transition-transform duration-500">
                    <div className="flex items-center space-x-2 mb-4">
                      <span className="px-3 py-1 bg-white/10 backdrop-blur-md rounded-lg text-[10px] font-bold uppercase tracking-widest border border-white/20">
                        {project.category}
                      </span>
                      <span className="px-3 py-1 bg-emerald-500 text-white rounded-lg text-[10px] font-bold uppercase tracking-widest">
                        {project.result}
                      </span>
                    </div>
                    
                    <h3 className="text-2xl lg:text-3xl font-bold leading-tight mb-4 group-hover:text-blue-200 transition-colors">
                      {project.title}
                    </h3>
                    
                    <p className="text-sm text-white/70 font-light mb-8 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100 line-clamp-3">
                      {project.description}
                    </p>
                    
                    <button className="flex items-center space-x-3 text-sm font-bold group/btn">
                      <span>Ver Reporte de Impacto</span>
                      <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center group-hover/btn:bg-white group-hover/btn:text-[#004085] transition-all">
                        <ExternalLink size={14} />
                      </div>
                    </button>
                  </div>
                </div>
              </div>

              {/* Meta info footer below card for accessibility/cleanliness */}
              <div className="mt-6 px-4 flex items-center justify-between opacity-60">
                 <div className="flex items-center space-x-2">
                    <Building2 size={14} />
                    <span className="text-xs font-bold uppercase tracking-widest">{project.client}</span>
                 </div>
                 <ChevronRight size={16} />
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      {/* CTA Section */}
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mt-32 p-12 lg:p-20 bg-[#F0F9FF] rounded-[3rem] text-center relative overflow-hidden"
      >
        <div className="absolute top-0 left-0 w-32 h-32 bg-blue-100 rounded-full blur-3xl -ml-16 -mt-16 opacity-50" />
        <div className="relative z-10">
          <h3 className="text-3xl lg:text-4xl font-extrabold mb-6 tracking-tight">¿Listo para ser nuestro próximo <span className="text-[#004085]">caso de éxito?</span></h3>
          <p className="text-slate-500 text-lg mb-10 max-w-2xl mx-auto font-light leading-relaxed">
            Permítanos aplicar nuestra metodología de arquitectura financiera para optimizar 
            sus recursos y blindar su operación corporativa.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
            <a 
              href="#contacto" 
              className="px-10 py-5 bg-[#004085] text-white rounded-2xl font-bold shadow-2xl shadow-blue-900/20 hover:scale-105 transition-transform"
            >
              Agendar Auditoría Inicial
            </a>
            <button className="px-10 py-5 border border-slate-200 rounded-2xl font-bold hover:bg-white transition-colors">
              Descargar Credenciales
            </button>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Projects;

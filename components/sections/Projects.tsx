
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { PROJECTS, SPRING_TRANSITION } from '../../constants';
import EnterpriseModal from '../modals/EnterpriseModal';
import SectionHeader from '../ui/SectionHeader';
import ProjectCard from '../ui/ProjectCard';
import Button from '../ui/Button';

const Projects: React.FC = () => {
  const [activeTab, setActiveTab] = useState('Todos');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const categories = ['Todos', 'Auditoría', 'Fiscal', 'Legal'];

  const filteredProjects = activeTab === 'Todos'
    ? PROJECTS
    : PROJECTS.filter(p => p.category.includes(activeTab));

  return (
    <div className="container mx-auto px-4 sm:px-6 py-8 sm:py-12">
      {/* Header Section */}
      <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-8 sm:mb-12 md:mb-16 space-y-6 sm:space-y-8 lg:space-y-0">
        <div className="max-w-2xl">
          <SectionHeader
            badge="Casos de Éxito Seleccionados"
            title={
              <>
                Transformación Real, <span className="text-slate-400">Resultados Medibles.</span>
              </>
            }
            className="text-black"
          />
        </div>

        {/* Category Filter */}
        <div className="flex bg-slate-100 p-1 sm:p-1.5 rounded-xl sm:rounded-2xl overflow-x-auto">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveTab(cat)}
              className={`px-3 sm:px-4 md:px-6 py-2 sm:py-2.5 rounded-lg sm:rounded-xl text-xs sm:text-sm font-bold transition-all duration-300 whitespace-nowrap ${activeTab === cat
                  ? 'bg-[#D4AF37] text-black shadow-sm'
                  : 'text-slate-500 hover:text-[#D4AF37]'
                }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Projects Grid */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 md:gap-10">
        <AnimatePresence mode='popLayout'>
          {filteredProjects.map((project, idx) => (
            <ProjectCard
              key={project.id}
              title={project.title}
              category={project.category}
              result={project.result}
              description={project.description}
              client={project.client}
              image={project.image}
              delay={idx * 0.05}
            />
          ))}
        </AnimatePresence>
      </div>

      {/* CTA Section */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mt-16 sm:mt-24 md:mt-32 p-6 sm:p-8 md:p-12 lg:p-20 bg-white border border-[#D4AF37]/20 rounded-2xl sm:rounded-3xl text-center relative overflow-hidden"
      >
        <div className="absolute top-0 left-0 w-32 h-32 bg-[#D4AF37]/10 rounded-full blur-3xl -ml-16 -mt-16 opacity-50" />
        <div className="relative z-10">
          <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-extrabold mb-4 sm:mb-6 tracking-tight text-black px-4">¿Listo para ser nuestro próximo <span className="text-[#D4AF37] font-serif-premium">caso de éxito?</span></h3>
          <p className="text-slate-600 text-sm sm:text-base md:text-lg mb-6 sm:mb-8 md:mb-10 max-w-2xl mx-auto font-light leading-relaxed px-4">
            Permítanos aplicar nuestra metodología de arquitectura financiera para optimizar
            sus recursos y blindar su operación corporativa.
          </p>
          <div className="flex justify-center px-4">
            <Button
              variant="primary"
              size="lg"
              onClick={() => setIsModalOpen(true)}
              className="shadow-2xl shadow-[#D4AF37]/20 hover:scale-105"
            >
              Agendar Auditoría Inicial
            </Button>
          </div>
        </div>
      </motion.div>

      {/* Enterprise Modal */}
      <EnterpriseModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </div>
  );
};

export default Projects;

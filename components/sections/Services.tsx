
import React from 'react';
import { motion } from 'framer-motion';
import {
  Search,
  Compass,
  Settings,
  BarChart3,
  ShieldAlert
} from 'lucide-react';
import { SERVICES, SPRING_TRANSITION } from '../../constants';
import SectionHeader from '../ui/SectionHeader';
import ServiceCard from '../ui/ServiceCard';

const methodology = [
  {
    id: '01',
    title: 'Análisis & Diagnóstico',
    desc: 'Auditamos el estado actual para identificar brechas y oportunidades.',
    icon: <Search className="w-6 h-6" />
  },
  {
    id: '02',
    title: 'Diseño Estratégico',
    desc: 'Construimos una arquitectura financiera a la medida de su visión.',
    icon: <Compass className="w-6 h-6" />
  },
  {
    id: '03',
    title: 'Ejecución Ágil',
    desc: 'Implementamos soluciones con mínima fricción operativa.',
    icon: <Settings className="w-6 h-6" />
  },
  {
    id: '04',
    title: 'Optimización Continua',
    desc: 'Monitoreamos y refinamos para maximizar el ROI.',
    icon: <BarChart3 className="w-6 h-6" />
  }
];

const Services: React.FC = () => {
  return (
    <div className="space-y-16 sm:space-y-24 md:space-y-32">
      {/* Introduction Header */}
      <div className="container mx-auto px-4 sm:px-6">
        <SectionHeader
          badge="Portafolio de Especialidades"
          title={
            <>
              Soluciones de <span className="text-[#D4AF37] font-serif-premium">Arquitectura Financiera</span>
            </>
          }
          description="En HS Contadores Públicos, no solo gestionamos cifras; diseñamos el ecosistema financiero que permite a su empresa operar con eficiencia global y seguridad total."
          centered
          className="text-white"
        />
      </div>

      {/* Main Services Grid */}
      <div className="container mx-auto px-4 sm:px-6">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-12">
          {SERVICES.map((service, idx) => (
            <ServiceCard
              key={service.id}
              icon={service.icon}
              title={service.title}
              description={service.description}
              benefits={service.benefits}
              delay={idx * 0.1}
            />
          ))}
        </div>
      </div>

      {/* Methodology Section */}
      <div className="bg-black py-16 sm:py-24 md:py-32 text-white border-t border-[#D4AF37]/10">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="grid lg:grid-cols-2 gap-12 sm:gap-16 md:gap-20 items-center">
            <div>
              <span className="text-[#D4AF37] font-bold text-[10px] sm:text-xs uppercase tracking-[0.3em] mb-3 sm:mb-4 block">Cómo Operamos</span>
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold mb-4 sm:mb-6 md:mb-8 tracking-tight">Metodología <span className="text-[#D4AF37] font-serif-premium">Impact Gold</span></h2>
              <p className="text-white/70 text-sm sm:text-base md:text-lg font-light mb-8 sm:mb-10 md:mb-12 leading-relaxed">
                Hemos sistematizado el éxito. Nuestro proceso garantiza resultados consistentes,
                auditable y escalables para cada uno de nuestros socios corporativos.
              </p>

              <div className="space-y-8">
                {methodology.map((step) => (
                  <motion.div
                    key={step.id}
                    className="flex space-x-6 group"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                  >
                    <div className="flex flex-col items-center">
                      <div className="w-12 h-12 rounded-xl bg-black border border-[#D4AF37]/30 flex items-center justify-center text-[#D4AF37] group-hover:bg-[#D4AF37] group-hover:text-black transition-all duration-300">
                        {step.icon}
                      </div>
                      <div className="w-px flex-grow bg-[#D4AF37]/20 my-2"></div>
                    </div>
                    <div className="pb-8">
                      <h4 className="text-xl font-bold mb-2 flex items-center space-x-4 text-white">
                        <span className="text-xs text-[#D4AF37]/50 font-mono tracking-tighter">{step.id}</span>
                        <span>{step.title}</span>
                      </h4>
                      <p className="text-white/70 font-light text-sm">{step.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="absolute inset-0 bg-[#D4AF37]/10 blur-[100px] rounded-full animate-pulse" />
              <div className="relative bg-black/80 backdrop-blur-md border border-[#D4AF37]/20 rounded-[3rem] p-8 lg:p-12 overflow-hidden">
                <div className="flex items-center justify-between mb-12">
                  <div className="flex items-center space-x-3">
                    <ShieldAlert className="text-[#D4AF37]" />
                    <span className="text-xs font-bold uppercase tracking-widest text-white/50">SLA Commitment</span>
                  </div>
                  <div className="px-3 py-1 bg-[#D4AF37]/10 text-[#D4AF37] text-[10px] font-bold rounded-full uppercase border border-[#D4AF37]/30">Active Protection</div>
                </div>

                <div className="space-y-10">
                  <div className="p-6 bg-black/50 rounded-2xl border border-[#D4AF37]/10">
                    <p className="text-2xl font-bold mb-1 text-[#D4AF37]">99.9%</p>
                    <p className="text-xs text-white/50 uppercase font-bold tracking-widest">Precisión en Reportes</p>
                  </div>
                  <div className="p-6 bg-black/50 rounded-2xl border border-[#D4AF37]/10">
                    <p className="text-2xl font-bold mb-1 text-[#D4AF37]">&lt; 24 Horas</p>
                    <p className="text-xs text-white/50 uppercase font-bold tracking-widest">Tiempo de Respuesta Soporte</p>
                  </div>
                  <div className="p-6 bg-[#D4AF37] rounded-2xl border border-[#D4AF37] shadow-2xl shadow-[#D4AF37]/20">
                    <p className="text-2xl font-bold mb-1 text-black">Zero Fault</p>
                    <p className="text-xs text-black/70 uppercase font-bold tracking-widest">Cumplimiento ante la DIAN/Entidades</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;

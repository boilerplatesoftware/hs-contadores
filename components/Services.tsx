
import React from 'react';
import { motion } from 'framer-motion';
import { 
  CheckCircle2, 
  ArrowRight, 
  Search, 
  Compass, 
  Settings, 
  BarChart3,
  ShieldAlert
} from 'lucide-react';
import { SERVICES, SPRING_TRANSITION } from '../constants';

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
    <div className="space-y-32">
      {/* Introduction Header */}
      <div className="container mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="inline-flex items-center space-x-2 px-4 py-2 bg-blue-50 text-[#004085] rounded-full text-xs font-bold uppercase tracking-widest mb-6"
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-[#004085]"></span>
          </span>
          <span>Portafolio de Especialidades</span>
        </motion.div>
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={SPRING_TRANSITION}
          className="text-4xl lg:text-6xl font-extrabold mb-8 tracking-tighter"
        >
          Soluciones de <span className="text-blue-500">Arquitectura Financiera</span>
        </motion.h2>
        <motion.p 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto text-lg text-slate-500 font-light leading-relaxed"
        >
          En HS Contadores Públicos, no solo gestionamos cifras; diseñamos el ecosistema 
          financiero que permite a su empresa operar con eficiencia global y seguridad total.
        </motion.p>
      </div>

      {/* Main Services Grid */}
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
          {SERVICES.map((service, idx) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ ...SPRING_TRANSITION, delay: idx * 0.1 }}
              className="group p-10 bg-white rounded-[2.5rem] border border-slate-100 hover:border-blue-100 shadow-sm hover:shadow-2xl hover:shadow-blue-900/10 transition-all duration-500 relative flex flex-col h-full"
            >
              <div className="mb-8 p-4 bg-blue-50 w-fit rounded-2xl group-hover:bg-[#004085] transition-colors duration-500">
                {React.cloneElement(service.icon as React.ReactElement<any>, {
                  className: "w-8 h-8 group-hover:text-white transition-colors"
                })}
              </div>
              
              <h3 className="text-2xl font-bold mb-4 text-slate-900">{service.title}</h3>
              <p className="text-slate-500 mb-8 font-light flex-grow leading-relaxed">
                {service.description}
              </p>

              <div className="space-y-3 mb-10">
                {service.benefits.map((benefit) => (
                  <div key={benefit} className="flex items-center space-x-3 text-sm text-slate-600">
                    <CheckCircle2 size={16} className="text-emerald-500 shrink-0" />
                    <span>{benefit}</span>
                  </div>
                ))}
              </div>

              <button className="flex items-center space-x-2 text-sm font-bold text-[#004085] group-hover:translate-x-2 transition-transform">
                <span>Solicitar Especificaciones</span>
                <ArrowRight size={16} />
              </button>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Methodology Section */}
      <div className="bg-slate-950 py-32 text-white">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div>
              <span className="text-blue-400 font-bold text-xs uppercase tracking-[0.3em] mb-4 block">Cómo Operamos</span>
              <h2 className="text-4xl lg:text-5xl font-extrabold mb-8 tracking-tight">Metodología <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-emerald-400">Impact Gold</span></h2>
              <p className="text-slate-400 text-lg font-light mb-12 leading-relaxed">
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
                      <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-blue-400 group-hover:bg-blue-400 group-hover:text-white transition-all duration-300">
                        {step.icon}
                      </div>
                      <div className="w-px flex-grow bg-white/10 my-2"></div>
                    </div>
                    <div className="pb-8">
                      <h4 className="text-xl font-bold mb-2 flex items-center space-x-4">
                        <span className="text-xs text-blue-500/50 font-mono tracking-tighter">{step.id}</span>
                        <span>{step.title}</span>
                      </h4>
                      <p className="text-slate-400 font-light text-sm">{step.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="absolute inset-0 bg-blue-500/20 blur-[100px] rounded-full animate-pulse" />
              <div className="relative glass border-white/10 rounded-[3rem] p-8 lg:p-12 overflow-hidden">
                <div className="flex items-center justify-between mb-12">
                  <div className="flex items-center space-x-3">
                    <ShieldAlert className="text-blue-400" />
                    <span className="text-xs font-bold uppercase tracking-widest text-slate-400">SLA Commitment</span>
                  </div>
                  <div className="px-3 py-1 bg-emerald-500/10 text-emerald-400 text-[10px] font-bold rounded-full uppercase">Active Protection</div>
                </div>

                <div className="space-y-10">
                  <div className="p-6 bg-white/5 rounded-2xl border border-white/5">
                    <p className="text-2xl font-bold mb-1">99.9%</p>
                    <p className="text-xs text-slate-500 uppercase font-bold tracking-widest">Precisión en Reportes</p>
                  </div>
                  <div className="p-6 bg-white/5 rounded-2xl border border-white/5">
                    <p className="text-2xl font-bold mb-1">&lt; 24 Horas</p>
                    <p className="text-xs text-slate-500 uppercase font-bold tracking-widest">Tiempo de Respuesta Soporte</p>
                  </div>
                  <div className="p-6 bg-[#004085] rounded-2xl border border-blue-500/30 shadow-2xl shadow-blue-500/20">
                    <p className="text-2xl font-bold mb-1">Zero Fault</p>
                    <p className="text-xs text-blue-200 uppercase font-bold tracking-widest">Cumplimiento ante la DIAN/Entidades</p>
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


import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { SPRING_TRANSITION } from '../constants';

const Hero: React.FC = () => {
  return (
    <div className="relative min-h-[90vh] flex items-center pt-20 overflow-hidden">
      {/* Background patterns */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-[#F0F9FF] -z-10 translate-x-20 skew-x-12 hidden lg:block" />
      
      <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={SPRING_TRANSITION}
        >
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ ...SPRING_TRANSITION, delay: 0.2 }}
            className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-blue-50 text-[#004085] text-xs font-bold uppercase tracking-widest mb-6"
          >
            <span className="w-2 h-2 rounded-full bg-emerald-500 emerald-pulse"></span>
            <span>Enterprise Gold Tier</span>
          </motion.div>

          <h1 className="text-5xl lg:text-7xl font-extrabold leading-[1.1] mb-8 tracking-tighter">
            Solidez Contable. <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#004085] to-blue-400">
              Visión Estratégica.
            </span>
          </h1>

          <p className="text-xl text-slate-600 mb-10 max-w-lg leading-relaxed font-light">
            Evolucionamos la contabilidad tradicional hacia una arquitectura financiera 
            inteligente para empresas de alto crecimiento.
          </p>

          <div className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-6">
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="group relative px-8 py-4 bg-[#004085] text-white rounded-xl font-bold flex items-center space-x-2 emerald-pulse overflow-hidden w-full sm:w-auto justify-center"
            >
              <span>Iniciar Consulta</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </motion.button>

            <button className="text-[#004085] font-semibold hover:underline decoration-2 underline-offset-4">
              Explorar Servicios
            </button>
          </div>
          
          <div className="mt-12 flex items-center space-x-8 opacity-50 grayscale contrast-125">
             <span className="font-bold text-xs uppercase tracking-[0.2em]">Trusted by</span>
             <div className="flex space-x-6">
                <span className="text-xl italic font-serif">GlobalFinance</span>
                <span className="text-xl italic font-serif">ArchiCorp</span>
                <span className="text-xl italic font-serif">SafeTrust</span>
             </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9, rotate: 2 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ ...SPRING_TRANSITION, delay: 0.3 }}
          className="relative group"
        >
          <div className="absolute -inset-4 bg-gradient-to-tr from-blue-100 to-emerald-100 rounded-2xl blur-2xl opacity-30 group-hover:opacity-50 transition-opacity duration-500" />
          <div className="relative transform-gpu">
             <img 
               src="https://picsum.photos/seed/arch-firm/1000/1200" 
               alt="Corporate Architecture" 
               className="rounded-2xl shadow-2xl w-full h-[600px] object-cover ring-1 ring-white/50"
             />
             
             {/* Info overlay */}
             <div className="absolute bottom-8 left-8 right-8 glass p-6 rounded-xl border border-white/40 shadow-xl">
                <div className="flex justify-between items-center">
                   <div>
                      <p className="text-xs font-bold uppercase text-slate-400">Crecimiento Anual Promedio</p>
                      <p className="text-3xl font-bold text-[#004085]">+42.5%</p>
                   </div>
                   <div className="h-12 w-24 flex items-end space-x-1">
                      {[40, 60, 45, 80, 70, 95].map((h, i) => (
                         <div key={i} className="flex-1 bg-blue-500/20 rounded-t-sm" style={{ height: `${h}%` }}>
                            <div className="w-full bg-[#004085] rounded-t-sm" style={{ height: `${h-20}%` }}></div>
                         </div>
                      ))}
                   </div>
                </div>
             </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;

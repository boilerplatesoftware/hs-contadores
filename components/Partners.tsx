
import React from 'react';
import { motion } from 'framer-motion';
import { Quote, ShieldCheck, Globe, Star, ArrowUpRight } from 'lucide-react';
import { PARTNERS, SPRING_TRANSITION } from '../constants';

const Partners: React.FC = () => {
  return (
    <div className="container mx-auto px-6">
      <div className="text-center mb-24">
        <motion.span 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="text-blue-500 font-bold text-xs uppercase tracking-[0.4em] mb-4 block"
        >
          Red de Confianza Elite
        </motion.span>
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={SPRING_TRANSITION}
          className="text-4xl lg:text-6xl font-extrabold tracking-tighter mb-8"
        >
          Alianzas que <span className="text-[#004085]">Definen Industrias.</span>
        </motion.h2>
        <p className="max-w-2xl mx-auto text-slate-500 text-lg font-light">
          Colaboramos con las organizaciones más visionarias para construir ecosistemas financieros 
          que resisten el tiempo y los cambios globales.
        </p>
      </div>

      <div className="grid lg:grid-cols-3 gap-12">
        {PARTNERS.map((partner, idx) => (
          <motion.div
            key={partner.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ ...SPRING_TRANSITION, delay: idx * 0.1 }}
            className="group relative"
          >
            {/* Background card with glass effect */}
            <div className="h-full bg-white rounded-[3rem] p-10 border border-slate-100 shadow-sm hover:shadow-2xl hover:shadow-blue-900/5 transition-all duration-500 flex flex-col">
              
              {/* Logo & Category */}
              <div className="flex justify-between items-start mb-10">
                <div className="w-20 h-20 rounded-2xl overflow-hidden grayscale group-hover:grayscale-0 transition-all duration-700 ring-4 ring-slate-50 group-hover:ring-blue-100">
                  <img src={partner.logo} alt={partner.name} className="w-full h-full object-cover" />
                </div>
                <div className="px-3 py-1 bg-blue-50 text-[#004085] rounded-full text-[10px] font-black uppercase tracking-widest">
                  {partner.industry}
                </div>
              </div>

              {/* Title & Description */}
              <h3 className="text-2xl font-bold mb-4 text-slate-900">{partner.name}</h3>
              <p className="text-sm text-slate-500 font-light mb-6 leading-relaxed">
                {partner.description}
              </p>

              {/* Synergy Badge */}
              <div className="mb-10 p-4 bg-slate-50 rounded-2xl border border-slate-100">
                <p className="text-[10px] font-black uppercase tracking-widest text-slate-400 mb-2">Sinergia Estratégica</p>
                <p className="text-xs text-slate-700 font-medium leading-relaxed">{partner.synergy}</p>
              </div>

              {/* Testimonial */}
              <div className="mt-auto relative">
                <Quote className="absolute -top-4 -left-2 w-8 h-8 text-blue-100 -z-0" />
                <p className="relative z-10 text-slate-600 italic font-light text-sm mb-6 leading-relaxed">
                  "{partner.testimonial.quote}"
                </p>
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-px bg-blue-200"></div>
                  <div>
                    <p className="text-xs font-bold text-[#004085]">{partner.testimonial.author}</p>
                    <p className="text-[10px] text-slate-400 uppercase tracking-widest">{partner.testimonial.role}</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Alliance Statistics */}
      <motion.div 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        className="mt-32 grid grid-cols-2 md:grid-cols-4 gap-8 py-16 border-y border-slate-100"
      >
        {[
          { icon: <ShieldCheck className="w-5 h-5" />, value: '100%', label: 'Retención de Socios' },
          { icon: <Globe className="w-5 h-5" />, value: '12', label: 'Jurisdicciones' },
          { icon: <Star className="w-5 h-5" />, value: '$500M+', label: 'Activos Gestionados' },
          { icon: <ArrowUpRight className="w-5 h-5" />, value: '24/7', label: 'Consultoría Senior' },
        ].map((stat, i) => (
          <div key={i} className="text-center group">
            <div className="inline-flex items-center justify-center p-3 bg-blue-50 text-blue-600 rounded-xl mb-4 group-hover:bg-[#004085] group-hover:text-white transition-all">
              {stat.icon}
            </div>
            <p className="text-3xl font-black text-[#004085] mb-1">{stat.value}</p>
            <p className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400">{stat.label}</p>
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default Partners;

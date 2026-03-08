
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Send,
  CheckCircle2,
  Phone,
  Mail,
  MapPin,
  Clock,
  ShieldCheck,
  Globe,
  ArrowUpRight
} from 'lucide-react';
import { SPRING_TRANSITION, WHATSAPP_LINK, WHATSAPP_CONFIG } from '../../constants';

const Contact: React.FC = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    // Simulación de envío a CRM Corporativo
    setTimeout(() => {
      setLoading(false);
      setIsSubmitted(true);
    }, 1800);
  };

  return (
    <div className="container mx-auto px-4 sm:px-6">
      {/* Upper Info Grid */}
      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 md:gap-8 mb-8 sm:mb-12 md:mb-16">
        {[
          { icon: <Phone className="text-[#D4AF37]" />, title: "Línea Directa", detail: "+57 (300) 888-9000", sub: "Atención Senior 8am - 6pm" },
          { icon: <Phone className="text-[#D4AF37]" />, title: "WhatsApp Senior", detail: `+${WHATSAPP_CONFIG.number}`, sub: "Conexión inmediata HS" },
          { icon: <Clock className="text-[#D4AF37]" />, title: "Soporte 24/7", detail: "Soporte Inmediato", sub: "Exclusivo para socios Gold" },
        ].map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ ...SPRING_TRANSITION, delay: i * 0.1 }}
            className="p-4 sm:p-6 md:p-8 bg-white rounded-2xl sm:rounded-3xl border border-[#D4AF37]/20 shadow-sm hover:shadow-xl hover:shadow-[#D4AF37]/10 transition-all group"
          >
            <div className="w-10 h-10 sm:w-12 sm:h-12 bg-black border border-[#D4AF37]/30 rounded-xl sm:rounded-2xl flex items-center justify-center mb-4 sm:mb-6 group-hover:bg-[#D4AF37] group-hover:text-black transition-colors duration-500">
              {React.cloneElement(item.icon as React.ReactElement<any>, {
                className: "w-5 h-5 sm:w-6 sm:h-6"
              })}
            </div>
            <h4 className="text-xs sm:text-sm font-bold text-slate-400 uppercase tracking-widest mb-1 sm:mb-2">{item.title}</h4>
            <p className="text-base sm:text-lg md:text-xl font-bold text-[#D4AF37] mb-1 break-all">{item.detail}</p>
            <p className="text-xs sm:text-sm text-slate-500 font-light">{item.sub}</p>
          </motion.div>
        ))}
      </div>

      <div className="max-w-7xl mx-auto bg-white rounded-2xl sm:rounded-3xl shadow-2xl shadow-[#D4AF37]/10 overflow-hidden border border-[#D4AF37]/10">
        <div className="grid lg:grid-cols-5">

          {/* Form Side (60%) */}
          <div className="lg:col-span-3 p-6 sm:p-8 md:p-10 lg:p-20 border-b lg:border-b-0 lg:border-r border-slate-50">
            <div className="max-w-xl">
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold mb-4 sm:mb-6 tracking-tight text-black">Inicie su <span className="text-[#D4AF37] font-serif-premium">Transformación.</span></h2>
              <p className="text-slate-500 text-sm sm:text-base md:text-lg mb-8 sm:mb-10 md:mb-12 font-light leading-relaxed">
                Complete el protocolo de consulta inicial. Un consultor senior analizará su caso antes del primer contacto.
              </p>

              <AnimatePresence mode="wait">
                {!isSubmitted ? (
                  <motion.form
                    key="enterprise-form"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onSubmit={handleSubmit}
                    className="space-y-8"
                  >
                    <div className="group space-y-2">
                      <label className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 group-focus-within:text-[#D4AF37] transition-colors">Nombre de la Compañía</label>
                      <input required type="text" placeholder="Corporativo S.A." className="w-full pb-3 bg-transparent border-b-2 border-slate-100 focus:border-[#D4AF37] transition-all outline-none text-lg font-medium" />
                    </div>

                    <div className="grid sm:grid-cols-2 gap-4 sm:gap-6 md:gap-8">
                      <div className="group space-y-2">
                        <label className="text-[9px] sm:text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 group-focus-within:text-[#D4AF37] transition-colors">Sector / Industria</label>
                        <select className="w-full pb-2 sm:pb-3 bg-transparent border-b-2 border-slate-100 focus:border-[#D4AF37] transition-all outline-none text-sm sm:text-base md:text-lg font-medium text-slate-600 cursor-pointer">
                          <option>Tecnología / SaaS</option>
                          <option>Manufactura / Logística</option>
                          <option>Banca / Fintech</option>
                          <option>Salud / Pharma</option>
                          <option>Otro Sector</option>
                        </select>
                      </div>
                      <div className="group space-y-2">
                        <label className="text-[9px] sm:text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 group-focus-within:text-[#D4AF37] transition-colors">Servicio Requerido</label>
                        <select className="w-full pb-2 sm:pb-3 bg-transparent border-b-2 border-slate-100 focus:border-[#D4AF37] transition-all outline-none text-sm sm:text-base md:text-lg font-medium text-slate-600 cursor-pointer">
                          <option>Auditoría Integral</option>
                          <option>Estrategia Tributaria</option>
                          <option>BPO Contable</option>
                          <option>Consultoría M&A</option>
                        </select>
                      </div>
                    </div>

                    <div className="group space-y-2">
                      <label className="text-[9px] sm:text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 group-focus-within:text-[#D4AF37] transition-colors">Descripción del Requerimiento Estratégico</label>
                      <textarea rows={4} placeholder="¿Qué desafíos financieros busca resolver?" className="w-full p-3 sm:p-4 bg-slate-50 border-none rounded-xl sm:rounded-2xl focus:ring-2 focus:ring-[#D4AF37] transition-all outline-none resize-none text-sm sm:text-base text-slate-700" />
                    </div>

                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      disabled={loading}
                      type="submit"
                      className="w-full py-4 sm:py-5 md:py-6 bg-[#D4AF37] text-black rounded-xl sm:rounded-2xl font-bold flex items-center justify-center space-x-3 sm:space-x-4 shadow-2xl shadow-[#D4AF37]/20 hover:bg-[#FFD700] disabled:opacity-70 group transition-colors"
                    >
                      {loading ? (
                        <div className="w-5 h-5 sm:w-6 sm:h-6 border-3 border-black/30 border-t-black rounded-full animate-spin" />
                      ) : (
                        <>
                          <span className="text-sm sm:text-base md:text-lg tracking-tight">Solicitar Auditoría Preliminar</span>
                          <ArrowUpRight size={18} className="sm:w-5 sm:h-5 md:w-6 md:h-6 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                        </>
                      )}
                    </motion.button>

                    <div className="flex items-center justify-center space-x-6 pt-4 grayscale opacity-40">
                      <div className="flex items-center space-x-2">
                        <ShieldCheck size={14} />
                        <span className="text-[10px] font-bold uppercase tracking-widest">GDPR Compliant</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Globe size={14} />
                        <span className="text-[10px] font-bold uppercase tracking-widest">Global Encryption</span>
                      </div>
                    </div>
                  </motion.form>
                ) : (
                  <motion.div
                    key="enterprise-success"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="flex flex-col items-center justify-center py-24 text-center"
                  >
                    <div className="w-24 h-24 bg-emerald-50 rounded-[2rem] flex items-center justify-center mb-8 text-emerald-500">
                      <CheckCircle2 size={56} />
                    </div>
                    <h3 className="text-3xl font-extrabold mb-4 tracking-tight">Protocolo Iniciado</h3>
                    <p className="text-slate-500 text-lg font-light max-w-sm mb-10">
                      Su requerimiento ha sido asignado a nuestra Unidad de Estrategia Corporativa. Un consultor senior lo contactará por WhatsApp en breve.
                    </p>
                    <button
                      onClick={() => setIsSubmitted(false)}
                      className="px-8 py-3 bg-black border border-[#D4AF37]/30 text-[#D4AF37] rounded-xl font-bold hover:bg-[#D4AF37] hover:text-black transition-colors"
                    >
                      Nuevo Requerimiento
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>

          {/* Side Info Panel (40%) */}
          <div className="lg:col-span-2 bg-black p-6 sm:p-8 md:p-10 lg:p-20 text-white flex flex-col justify-between relative overflow-hidden border-t lg:border-t-0 lg:border-l border-[#D4AF37]/10">
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#D4AF37]/10 rounded-full blur-[100px] -mr-32 -mt-32" />

            <div className="relative z-10">
              <h3 className="text-2xl font-bold mb-12 flex items-center space-x-3">
                <span className="w-8 h-px bg-[#D4AF37]"></span>
                <span>Reach Global</span>
              </h3>

              <div className="space-y-12">
                <div>
                  <div className="flex items-center space-x-4 mb-4">
                    <div className="p-3 bg-black border border-[#D4AF37]/30 rounded-xl text-[#D4AF37]">
                      <MapPin size={20} />
                    </div>
                    <h4 className="text-sm font-black uppercase tracking-widest text-white/50">HQ Manizales</h4>
                  </div>
                  <p className="text-xl font-light text-white/80 leading-relaxed ml-14">
                    Centro Comercial, Oficina 301<br />
                    Carrera 23 #19-20<br />
                    Manizales, Caldas, Colombia
                  </p>
                </div>

                <div>
                  <div className="flex items-center space-x-4 mb-4">
                    <div className="p-3 bg-black border border-[#D4AF37]/30 rounded-xl text-[#D4AF37]">
                      <Globe size={20} />
                    </div>
                    <h4 className="text-sm font-black uppercase tracking-widest text-white/50">Operaciones Latam</h4>
                  </div>
                  <div className="ml-14 flex flex-wrap gap-3">
                    {['Colombia', 'México', 'Panamá', 'Chile', 'Ecuador'].map(country => (
                      <span key={country} className="px-3 py-1 bg-black border border-[#D4AF37]/30 rounded-lg text-xs font-medium text-[#D4AF37]">
                        {country}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div className="relative z-10 pt-16 border-t border-[#D4AF37]/20">
              <div className="p-6 bg-[#D4AF37]/10 rounded-2xl border border-[#D4AF37]/30 backdrop-blur-md">
                <p className="text-xs font-black uppercase tracking-widest text-[#D4AF37] mb-2">Canal de Emergencia</p>
                <p className="text-white font-bold mb-1">WhatsApp Senior HS</p>
                <p className="text-xs text-white/50 font-light">Exclusivo para situaciones de auditoría inmediata o crisis tributaria.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;

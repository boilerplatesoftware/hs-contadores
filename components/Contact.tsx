
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
import { SPRING_TRANSITION } from '../constants';

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
    <div className="container mx-auto px-6">
      {/* Upper Info Grid */}
      <div className="grid md:grid-cols-3 gap-8 mb-16">
        {[
          { icon: <Phone className="text-blue-500" />, title: "Línea Directa", detail: "+57 (300) 888-9000", sub: "Atención Senior 8am - 6pm" },
          { icon: <Mail className="text-blue-500" />, title: "Email Institucional", detail: "business@hscontadores.co", sub: "Respuesta garantizada < 24h" },
          { icon: <Clock className="text-blue-500" />, title: "Soporte 24/7", detail: "Portal de Clientes", sub: "Exclusivo para socios Gold" },
        ].map((item, i) => (
          <motion.div 
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ ...SPRING_TRANSITION, delay: i * 0.1 }}
            className="p-8 bg-white rounded-3xl border border-slate-100 shadow-sm hover:shadow-xl hover:shadow-blue-900/5 transition-all group"
          >
            <div className="w-12 h-12 bg-blue-50 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-[#004085] group-hover:text-white transition-colors duration-500">
              {item.icon}
            </div>
            <h4 className="text-sm font-bold text-slate-400 uppercase tracking-widest mb-2">{item.title}</h4>
            <p className="text-xl font-bold text-[#004085] mb-1">{item.detail}</p>
            <p className="text-sm text-slate-500 font-light">{item.sub}</p>
          </motion.div>
        ))}
      </div>

      <div className="max-w-7xl mx-auto bg-white rounded-[3rem] shadow-2xl shadow-blue-900/10 overflow-hidden border border-slate-50">
        <div className="grid lg:grid-cols-5">
          
          {/* Form Side (60%) */}
          <div className="lg:col-span-3 p-10 lg:p-20 border-r border-slate-50">
            <div className="max-w-xl">
              <h2 className="text-4xl lg:text-5xl font-extrabold mb-6 tracking-tight">Inicie su <span className="text-blue-500">Transformación.</span></h2>
              <p className="text-slate-500 text-lg mb-12 font-light leading-relaxed">
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
                    <div className="grid md:grid-cols-2 gap-8">
                      <div className="group space-y-2">
                        <label className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 group-focus-within:text-[#004085] transition-colors">Nombre de la Compañía</label>
                        <input required type="text" placeholder="Corporativo S.A." className="w-full pb-3 bg-transparent border-b-2 border-slate-100 focus:border-[#004085] transition-all outline-none text-lg font-medium" />
                      </div>
                      <div className="group space-y-2">
                        <label className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 group-focus-within:text-[#004085] transition-colors">Email Corporativo</label>
                        <input required type="email" placeholder="directivo@empresa.com" className="w-full pb-3 bg-transparent border-b-2 border-slate-100 focus:border-[#004085] transition-all outline-none text-lg font-medium" />
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8">
                      <div className="group space-y-2">
                        <label className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 group-focus-within:text-[#004085] transition-colors">Sector / Industria</label>
                        <select className="w-full pb-3 bg-transparent border-b-2 border-slate-100 focus:border-[#004085] transition-all outline-none text-lg font-medium text-slate-600 cursor-pointer">
                          <option>Tecnología / SaaS</option>
                          <option>Manufactura / Logística</option>
                          <option>Banca / Fintech</option>
                          <option>Salud / Pharma</option>
                          <option>Otro Sector</option>
                        </select>
                      </div>
                      <div className="group space-y-2">
                        <label className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 group-focus-within:text-[#004085] transition-colors">Servicio Requerido</label>
                        <select className="w-full pb-3 bg-transparent border-b-2 border-slate-100 focus:border-[#004085] transition-all outline-none text-lg font-medium text-slate-600 cursor-pointer">
                          <option>Auditoría Integral</option>
                          <option>Estrategia Tributaria</option>
                          <option>BPO Contable</option>
                          <option>Consultoría M&A</option>
                        </select>
                      </div>
                    </div>

                    <div className="group space-y-2">
                      <label className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 group-focus-within:text-[#004085] transition-colors">Descripción del Requerimiento Estratégico</label>
                      <textarea rows={4} placeholder="¿Qué desafíos financieros busca resolver?" className="w-full p-4 bg-slate-50 border-none rounded-2xl focus:ring-2 focus:ring-[#004085] transition-all outline-none resize-none text-slate-700" />
                    </div>
                    
                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      disabled={loading}
                      type="submit"
                      className="w-full py-6 bg-[#004085] text-white rounded-2xl font-bold flex items-center justify-center space-x-4 shadow-2xl shadow-blue-900/20 disabled:opacity-70 group"
                    >
                      {loading ? (
                        <div className="w-6 h-6 border-3 border-white/30 border-t-white rounded-full animate-spin" />
                      ) : (
                        <>
                          <span className="text-lg tracking-tight">Solicitar Auditoría Preliminar</span>
                          <ArrowUpRight size={22} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
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
                      Su requerimiento ha sido asignado a nuestra Unidad de Estrategia Corporativa. Recibirá una respuesta formal en breve.
                    </p>
                    <button 
                      onClick={() => setIsSubmitted(false)}
                      className="px-8 py-3 bg-slate-100 text-[#004085] rounded-xl font-bold hover:bg-slate-200 transition-colors"
                    >
                      Nuevo Requerimiento
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>

          {/* Side Info Panel (40%) */}
          <div className="lg:col-span-2 bg-slate-950 p-10 lg:p-20 text-white flex flex-col justify-between relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/10 rounded-full blur-[100px] -mr-32 -mt-32" />
            
            <div className="relative z-10">
              <h3 className="text-2xl font-bold mb-12 flex items-center space-x-3">
                <span className="w-8 h-px bg-blue-500"></span>
                <span>Reach Global</span>
              </h3>
              
              <div className="space-y-12">
                <div>
                  <div className="flex items-center space-x-4 mb-4">
                    <div className="p-3 bg-white/5 rounded-xl text-blue-400">
                      <MapPin size={20} />
                    </div>
                    <h4 className="text-sm font-black uppercase tracking-widest text-blue-100/50">HQ Bogotá</h4>
                  </div>
                  <p className="text-xl font-light text-blue-50 leading-relaxed ml-14">
                    World Trade Center, Piso 18<br />
                    Calle 100 #8A - 55<br />
                    Bogotá D.C., Colombia
                  </p>
                </div>

                <div>
                  <div className="flex items-center space-x-4 mb-4">
                    <div className="p-3 bg-white/5 rounded-xl text-blue-400">
                      <Globe size={20} />
                    </div>
                    <h4 className="text-sm font-black uppercase tracking-widest text-blue-100/50">Operaciones Latam</h4>
                  </div>
                  <div className="ml-14 flex flex-wrap gap-3">
                    {['Colombia', 'México', 'Panamá', 'Chile', 'Ecuador'].map(country => (
                      <span key={country} className="px-3 py-1 bg-white/5 border border-white/10 rounded-lg text-xs font-medium text-blue-200">
                        {country}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div className="relative z-10 pt-16 border-t border-white/10">
              <div className="p-6 bg-blue-500/10 rounded-2xl border border-blue-500/20 backdrop-blur-md">
                <p className="text-xs font-black uppercase tracking-widest text-blue-400 mb-2">Canal de Emergencia</p>
                <p className="text-white font-bold mb-1">priority@hscontadores.co</p>
                <p className="text-xs text-blue-100/40 font-light">Exclusivo para situaciones de auditoría inmediata o crisis tributaria.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;

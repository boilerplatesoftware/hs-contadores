
import React from 'react';
import { motion } from 'framer-motion';
import { Target, Eye, Award, Globe, Shield, Zap } from 'lucide-react';
import { SPRING_TRANSITION } from '../constants';

const stats = [
  { label: 'Años de Trayectoria', value: '15+' },
  { label: 'Clientes Corporativos', value: '250+' },
  { label: 'Expertos Senior', value: '45+' },
  { label: 'Efectividad Fiscal', value: '99.8%' },
];

const values = [
  {
    icon: <Shield className="w-6 h-6" />,
    title: 'Integridad Absoluta',
    desc: 'Operamos bajo los más estrictos códigos de ética y transparencia profesional.'
  },
  {
    icon: <Zap className="w-6 h-6" />,
    title: 'Agilidad Estratégica',
    desc: 'Respuestas rápidas y precisas ante los cambios constantes del entorno tributario.'
  },
  {
    icon: <Globe className="w-6 h-6" />,
    title: 'Visión Global',
    desc: 'Entendemos los mercados internacionales para potenciar su expansión local.'
  }
];

const About: React.FC = () => {
  return (
    <div className="py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-6">
        {/* Main Section: Story & Image */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-32">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={SPRING_TRANSITION}
          >
            <span className="text-[#004085] font-bold text-xs uppercase tracking-[0.3em] mb-4 block">Nuestra Identidad</span>
            <h2 className="text-4xl lg:text-5xl font-extrabold mb-8 tracking-tight">
              Más que Contadores, somos su <span className="text-blue-500">Socio de Crecimiento</span>
            </h2>
            <div className="space-y-6 text-slate-600 text-lg leading-relaxed font-light">
              <p>
                Fundada con la premisa de que la contabilidad es el lenguaje del éxito empresarial, 
                HS Contadores ha evolucionado para convertirse en una firma de consultoría 
                arquitectónica financiera de primer nivel.
              </p>
              <p>
                No solo registramos el pasado; diseñamos su futuro financiero. Nuestro enfoque 
                Enterprise Gold Tier garantiza que cada transacción sea una oportunidad de optimización 
                y cada reporte sea un mapa hacia la rentabilidad.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-8 mt-12">
              <div className="p-6 bg-[#F0F9FF] rounded-2xl">
                <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center text-[#004085] mb-4 shadow-sm">
                  <Target size={24} />
                </div>
                <h4 className="font-bold mb-2">Misión</h4>
                <p className="text-sm text-slate-500">Transformar la complejidad contable en claridad estratégica para decisiones de alto impacto.</p>
              </div>
              <div className="p-6 bg-[#F0F9FF] rounded-2xl">
                <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center text-[#004085] mb-4 shadow-sm">
                  <Eye size={24} />
                </div>
                <h4 className="font-bold mb-2">Visión</h4>
                <p className="text-sm text-slate-500">Ser el estándar de oro en consultoría financiera y legal en la región para 2030.</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={SPRING_TRANSITION}
            className="relative"
          >
            <div className="absolute -top-10 -right-10 w-64 h-64 bg-blue-100 rounded-full blur-3xl opacity-50 -z-10" />
            <div className="relative rounded-[2.5rem] overflow-hidden shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1000&q=80" 
                alt="Corporate building" 
                className="w-full h-[550px] object-cover hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#004085]/40 to-transparent" />
              
              {/* Floating Badge */}
              <div className="absolute bottom-10 -left-6 glass p-6 rounded-2xl shadow-xl border border-white/40 max-w-[240px]">
                <div className="flex items-center space-x-3 mb-2">
                  <Award className="text-emerald-500" />
                  <span className="font-bold text-[#004085] text-sm">Certificación ISO 9001</span>
                </div>
                <p className="text-xs text-slate-500 font-medium">Excelencia en procesos y gestión de calidad auditada.</p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-32">
          {stats.map((stat, idx) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ ...SPRING_TRANSITION, delay: idx * 0.1 }}
              className="text-center p-8 rounded-3xl border border-slate-100 hover:bg-slate-50 transition-colors"
            >
              <p className="text-4xl lg:text-5xl font-black text-[#004085] mb-2">{stat.value}</p>
              <p className="text-xs font-bold uppercase tracking-widest text-slate-400">{stat.label}</p>
            </motion.div>
          ))}
        </div>

        {/* Values Section */}
        <div className="bg-[#004085] rounded-[3rem] p-12 lg:p-20 text-white">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h3 className="text-3xl lg:text-4xl font-extrabold mb-4">Nuestros Pilares</h3>
              <p className="text-blue-200 text-lg font-light">Fundamentos que rigen cada interacción con nuestros socios comerciales.</p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-12">
              {values.map((value, idx) => (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ ...SPRING_TRANSITION, delay: idx * 0.1 }}
                  className="space-y-4"
                >
                  <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center text-blue-300">
                    {value.icon}
                  </div>
                  <h4 className="text-xl font-bold">{value.title}</h4>
                  <p className="text-blue-100/70 font-light leading-relaxed">{value.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;

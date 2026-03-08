
import React from 'react';
import { motion } from 'framer-motion';
import { Target, Eye, Award, Globe, Shield, Zap } from 'lucide-react';
import { SPRING_TRANSITION } from '../../constants';
import StatCard from '../ui/StatCard';
import MissionVisionCard from '../ui/MissionVisionCard';
import ValueCard from '../ui/ValueCard';

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
    <div className="py-12 sm:py-16 md:py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6">
        {/* Main Section: Story & Image */}
        <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 md:gap-16 items-center mb-16 sm:mb-24 md:mb-32">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={SPRING_TRANSITION}
          >
            <span className="text-[#D4AF37] font-bold text-[10px] sm:text-xs uppercase tracking-[0.3em] mb-3 sm:mb-4 block">Nuestra Identidad</span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold mb-4 sm:mb-6 md:mb-8 tracking-tight text-black">
              Más que Contadores, somos su <span className="text-[#D4AF37] font-serif-premium">Socio de Crecimiento</span>
            </h2>
            <div className="space-y-4 sm:space-y-6 text-slate-600 text-sm sm:text-base md:text-lg leading-relaxed font-light">
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

            <div className="grid sm:grid-cols-2 gap-4 sm:gap-6 md:gap-8 mt-8 sm:mt-10 md:mt-12">
              <MissionVisionCard
                icon={Target}
                title="Misión"
                description="Transformar la complejidad contable en claridad estratégica para decisiones de alto impacto."
              />
              <MissionVisionCard
                icon={Eye}
                title="Visión"
                description="Ser el estándar de oro en consultoría financiera y legal en la región para 2030."
              />
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
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8 mb-16 sm:mb-24 md:mb-32">
          {stats.map((stat, idx) => (
            <StatCard
              key={stat.label}
              value={stat.value}
              label={stat.label}
              delay={idx * 0.1}
            />
          ))}
        </div>

        {/* Values Section */}
        <div className="bg-black rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-12 lg:p-20 text-white border border-[#D4AF37]/20">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-8 sm:mb-12 md:mb-16">
              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold mb-2 sm:mb-4">Nuestros Pilares</h3>
              <p className="text-white/70 text-sm sm:text-base md:text-lg font-light px-4">Fundamentos que rigen cada interacción con nuestros socios comerciales.</p>
            </div>

            <div className="grid md:grid-cols-3 gap-6 sm:gap-8 md:gap-12">
              {values.map((value, idx) => (
                <ValueCard
                  key={value.title}
                  icon={value.icon}
                  title={value.title}
                  description={value.desc}
                  delay={idx * 0.1}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;

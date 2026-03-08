
import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { SPRING_TRANSITION } from '../../constants';
import Badge from '../ui/Badge';
import Button from '../ui/Button';
import TrustedBy from '../ui/TrustedBy';

const Hero: React.FC = () => {
  return (
    <div className="relative min-h-[85vh] sm:min-h-[90vh] flex items-center pt-20 sm:pt-24 overflow-hidden bg-black">
      {/* Background gradient */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-[#D4AF37]/5 to-transparent -z-10 hidden lg:block" />

      <div className="container mx-auto px-4 sm:px-6 grid lg:grid-cols-2 gap-8 sm:gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={SPRING_TRANSITION}
          className="text-center lg:text-left"
        >
          <Badge variant="pulse" className="mb-4 sm:mb-6" animate>
            <span className="hidden sm:inline">Gestores Públicos Empresariales</span>
            <span className="sm:hidden">GPE</span>
          </Badge>

          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-extrabold leading-[1.1] mb-4 sm:mb-6 md:mb-8 tracking-tighter text-white">
            Solidez Contable. <br />
            <span className="text-[#D4AF37] font-serif-premium">
              Visión Estratégica.
            </span>
          </h1>

          <p className="text-base sm:text-lg md:text-xl text-white/70 mb-6 sm:mb-8 md:mb-10 max-w-lg mx-auto lg:mx-0 leading-relaxed font-light">
            Evolucionamos la contabilidad tradicional hacia una arquitectura financiera
            inteligente para empresas de alto crecimiento.
          </p>

          <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center lg:justify-start space-y-3 sm:space-y-0 sm:space-x-4 md:space-x-6">
            <Button
              variant="primary"
              size="md"
              icon={ArrowRight}
              iconPosition="right"
              href="#contacto"
              fullWidth
              className="group"
            >
              <span className="text-sm sm:text-base">Iniciar Consulta</span>
            </Button>

            <Button
              variant="tertiary"
              size="md"
              href="#servicios"
              className="py-2"
            >
              Explorar Servicios
            </Button>
          </div>

          <TrustedBy
            companies={['Boilerplate', 'ArchiCorp', 'SafeTrust']}
            className="mt-8 sm:mt-12"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9, rotate: 2 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ ...SPRING_TRANSITION, delay: 0.3 }}
          className="relative group hidden lg:block"
        >
          <div className="absolute -inset-4 bg-gradient-to-tr from-[#D4AF37]/20 to-[#D4AF37]/5 rounded-2xl blur-2xl opacity-30 group-hover:opacity-50 transition-opacity duration-500" />
          <div className="relative transform-gpu">
            <img
              src="https://picsum.photos/seed/arch-firm/1000/1200"
              alt="Corporate Architecture"
              className="rounded-2xl shadow-2xl w-full h-[600px] object-cover ring-1 ring-[#D4AF37]/20"
            />

            {/* Info overlay */}
            <div className="absolute bottom-8 left-8 right-8 bg-black/80 backdrop-blur-md p-4 sm:p-6 rounded-xl border border-[#D4AF37]/30 shadow-xl">
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3 sm:gap-0">
                <div>
                  <p className="text-[10px] sm:text-xs font-bold uppercase text-white/50">Crecimiento Anual Promedio</p>
                  <p className="text-2xl sm:text-3xl font-bold text-[#D4AF37]">+42.5%</p>
                </div>
                <div className="h-10 sm:h-12 w-20 sm:w-24 flex items-end space-x-1">
                  {[40, 60, 45, 80, 70, 95].map((h, i) => (
                    <div key={i} className="flex-1 bg-[#D4AF37]/20 rounded-t-sm" style={{ height: `${h}%` }}>
                      <div className="w-full bg-[#D4AF37] rounded-t-sm" style={{ height: `${h - 20}%` }}></div>
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

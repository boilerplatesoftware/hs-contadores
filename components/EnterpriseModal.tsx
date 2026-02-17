import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, MessageCircle, CheckCircle2, Clock, Shield, TrendingUp, Users, ArrowRight } from 'lucide-react';
import { WHATSAPP_CONFIG, SPRING_TRANSITION } from '../constants';

interface EnterpriseModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const EnterpriseModal: React.FC<EnterpriseModalProps> = ({ isOpen, onClose }) => {
  const handleWhatsAppClick = () => {
    const message = encodeURIComponent(
      `Hola, estoy interesado en agendar una Auditoría Inicial con HS Contadores Públicos.`
    );
    window.open(`https://wa.me/${WHATSAPP_CONFIG.number}?text=${message}`, '_blank');
  };

  const benefits = [
    {
      icon: <Shield className="w-5 h-5" />,
      title: 'Análisis Diagnóstico Completo',
      desc: 'Evaluación exhaustiva de su estructura financiera y tributaria'
    },
    {
      icon: <TrendingUp className="w-5 h-5" />,
      title: 'Identificación de Oportunidades',
      desc: 'Detección de áreas de optimización y mejora continua'
    },
    {
      icon: <Users className="w-5 h-5" />,
      title: 'Equipo Senior Dedicado',
      desc: 'Consultores especializados con más de 15 años de experiencia'
    },
    {
      icon: <Clock className="w-5 h-5" />,
      title: 'Respuesta en 24 Horas',
      desc: 'Compromiso de contacto inmediato post-solicitud'
    }
  ];

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-[200]"
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={SPRING_TRANSITION}
            className="fixed inset-0 z-[201] flex items-center justify-center p-4 sm:p-6"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="bg-black border-2 border-[#D4AF37]/30 rounded-2xl sm:rounded-3xl max-w-3xl w-full shadow-2xl overflow-hidden">
              {/* Header */}
              <div className="relative p-5 sm:p-6 border-b border-[#D4AF37]/20">
                <button
                  onClick={onClose}
                  className="absolute top-4 right-4 sm:top-5 sm:right-5 text-white/50 hover:text-[#D4AF37] transition-colors"
                >
                  <X size={24} />
                </button>
                
                <div className="pr-10">
                  <div className="inline-flex items-center space-x-2 px-3 py-1.5 bg-[#D4AF37]/10 border border-[#D4AF37]/30 rounded-full mb-3">
                    <span className="w-2 h-2 rounded-full bg-[#D4AF37] animate-pulse"></span>
                    <span className="text-[#D4AF37] text-xs font-bold uppercase tracking-widest">Enterprise Gold Tier</span>
                  </div>
                  <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-white mb-1">
                    Agendar <span className="text-[#D4AF37] font-serif-premium">Auditoría Inicial</span>
                  </h2>
                  <p className="text-white/70 text-xs sm:text-sm">
                    Consultoría estratégica personalizada para su empresa
                  </p>
                </div>
              </div>

              {/* Content - Simplified */}
              <div className="p-5 sm:p-6">
                {/* Main CTA - Prominent WhatsApp Button */}
                <div className="mb-6">
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={handleWhatsAppClick}
                    className="w-full px-6 py-5 bg-[#D4AF37] text-black rounded-xl font-bold flex items-center justify-center space-x-3 hover:bg-[#FFD700] transition-all shadow-2xl shadow-[#D4AF37]/30 text-base sm:text-lg"
                  >
                    <MessageCircle className="w-6 h-6" />
                    <span>Contactar vía WhatsApp</span>
                    <ArrowRight className="w-6 h-6" />
                  </motion.button>
                  <p className="text-white/60 text-xs text-center mt-3">
                    Respuesta garantizada en menos de 24 horas
                  </p>
                </div>

                {/* Quick Benefits - Compact */}
                <div className="grid grid-cols-2 gap-3 sm:gap-4 mb-5">
                  {benefits.slice(0, 4).map((benefit, idx) => (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ ...SPRING_TRANSITION, delay: idx * 0.05 }}
                      className="p-3 sm:p-4 bg-[#1A1A1A] border border-[#D4AF37]/20 rounded-lg"
                    >
                      <div className="flex items-start space-x-2">
                        <div className="p-1.5 bg-[#D4AF37]/10 border border-[#D4AF37]/30 rounded-md text-[#D4AF37] shrink-0">
                          {React.cloneElement(benefit.icon as React.ReactElement<any>, {
                            className: "w-4 h-4"
                          })}
                        </div>
                        <div>
                          <h3 className="text-white font-bold text-xs sm:text-sm mb-0.5">{benefit.title}</h3>
                          <p className="text-white/60 text-[10px] sm:text-xs leading-tight">{benefit.desc}</p>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>

                {/* What's Included - Compact List */}
                <div className="bg-[#1A1A1A] border border-[#D4AF37]/20 rounded-xl p-4 sm:p-5">
                  <h3 className="text-white font-bold text-sm sm:text-base mb-3 flex items-center space-x-2">
                    <CheckCircle2 className="w-4 h-4 text-[#D4AF37]" />
                    <span>Incluye:</span>
                  </h3>
                  <ul className="space-y-2 text-white/70 text-xs sm:text-sm">
                    <li className="flex items-start space-x-2">
                      <span className="text-[#D4AF37] mt-0.5">•</span>
                      <span>Revisión de estados financieros y estructura contable</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <span className="text-[#D4AF37] mt-0.5">•</span>
                      <span>Análisis de cumplimiento tributario y normativo</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <span className="text-[#D4AF37] mt-0.5">•</span>
                      <span>Identificación de oportunidades de optimización</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <span className="text-[#D4AF37] mt-0.5">•</span>
                      <span>Propuesta estratégica personalizada</span>
                    </li>
                  </ul>
                </div>

                {/* Alternative Contact */}
                <p className="text-white/50 text-xs text-center mt-4">
                  O llámenos: <a href={`tel:+${WHATSAPP_CONFIG.number}`} className="text-[#D4AF37] hover:underline font-semibold">+57 (300) 888-9000</a>
                </p>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default EnterpriseModal;


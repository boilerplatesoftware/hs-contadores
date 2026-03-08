import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FileText, Shield, Scale, AlertCircle, CheckCircle2, ArrowLeft, ChevronDown } from 'lucide-react';
import { SPRING_TRANSITION, WHATSAPP_LINK } from '../../constants';
import Button from '../ui/Button';
import SectionHeader from '../ui/SectionHeader';
import IconBox from '../ui/IconBox';

import { ViewState } from '../../App';

interface LegalPageProps {
  setView: (view: ViewState) => void;
}

const TermsOfService: React.FC<LegalPageProps> = ({ setView }) => {
  const [activeSection, setActiveSection] = useState<string | null>('1');

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const toggleSection = (id: string) => {
    setActiveSection(activeSection === id ? null : id);
  };

  const sections = [
    {
      id: '1',
      title: 'Aceptación de los Términos',
      icon: CheckCircle2,
      content: `Al acceder y utilizar los servicios de HS Contadores Públicos S.A.S. ("la Empresa", "nosotros", "nuestro"), usted acepta estar sujeto a estos Términos de Servicio ("Términos"). Si no está de acuerdo con alguna parte de estos términos, no debe utilizar nuestros servicios.

Estos términos constituyen un acuerdo legalmente vinculante entre usted y HS Contadores Públicos S.A.S. y rigen su uso de nuestros servicios profesionales de contabilidad, auditoría, consultoría fiscal y servicios relacionados.`
    },
    {
      id: '2',
      title: 'Servicios Ofrecidos',
      icon: FileText,
      content: `HS Contadores Públicos S.A.S. ofrece servicios profesionales que incluyen, pero no se limitan a:

• Auditoría integral de estados financieros
• Consultoría tributaria y estratégica
• Business Process Outsourcing (BPO) contable
• Asesoría en cumplimiento normativo (SARLAFT, IFRS, NIIF)
• Consultoría en fusiones y adquisiciones (M&A)
• Optimización fiscal y estructuras corporativas
• Servicios de contabilidad y preparación de reportes financieros

Todos los servicios se proporcionan de acuerdo con los estándares profesionales aplicables y las regulaciones colombianas vigentes.`
    },
    {
      id: '3',
      title: 'Obligaciones del Cliente',
      icon: Shield,
      content: `Como cliente, usted se compromete a:

1. Proporcionar información precisa, completa y actualizada necesaria para la prestación de nuestros servicios.
2. Mantener la confidencialidad de las credenciales de acceso a cualquier portal o sistema proporcionado.
3. Cumplir con todos los pagos acordados según los términos establecidos en el contrato de servicios.
4. Notificar inmediatamente cualquier cambio material en su situación financiera o legal que pueda afectar nuestros servicios.
5. Actuar de buena fe y cooperar plenamente con nuestro equipo en la prestación de servicios.
6. Cumplir con todas las leyes y regulaciones aplicables relacionadas con sus operaciones comerciales.

El incumplimiento de estas obligaciones puede resultar en la terminación inmediata de nuestros servicios.`
    },
    {
      id: '4',
      title: 'Confidencialidad y Protección de Datos',
      icon: Shield,
      content: `Reconocemos la naturaleza sensible de la información financiera y empresarial. Nos comprometemos a:

• Mantener estricta confidencialidad sobre toda la información del cliente
• Cumplir con la Ley 1581 de 2012 (Protección de Datos Personales) de Colombia
• Implementar medidas de seguridad técnicas y organizativas apropiadas
• No divulgar información a terceros sin autorización expresa, excepto cuando sea requerido por ley
• Retener documentos según los períodos legales aplicables

Los clientes también se comprometen a mantener la confidencialidad de cualquier información propietaria de HS Contadores Públicos S.A.S. a la que puedan tener acceso.`
    },
    {
      id: '5',
      title: 'Tarifas y Pagos',
      icon: Scale,
      content: `Las tarifas por nuestros servicios se establecen según el alcance y complejidad de cada proyecto, y se documentan en contratos de servicios específicos.

• Los pagos deben realizarse según los términos acordados en cada contrato
• Las tarifas pueden estar sujetas a revisión periódica con notificación previa
• Los servicios adicionales fuera del alcance acordado pueden generar cargos adicionales
• Los retrasos en el pago pueden resultar en la suspensión de servicios y cargos por intereses según la ley aplicable
• Todos los precios están expresados en Pesos Colombianos (COP) a menos que se indique lo contrario

Las facturas se emiten de acuerdo con la normativa tributaria colombiana vigente.`
    },
    {
      id: '6',
      title: 'Limitación de Responsabilidad',
      icon: AlertCircle,
      content: `HS Contadores Públicos S.A.S. ejercerá el debido cuidado profesional en la prestación de servicios. Sin embargo:

• Nuestra responsabilidad se limita al monto de los honorarios pagados por el servicio específico en cuestión
• No seremos responsables por daños indirectos, consecuentes, incidentales o lucro cesante
• Nuestra responsabilidad está sujeta a los límites establecidos por la ley colombiana y los estándares profesionales aplicables
• No garantizamos resultados específicos en procedimientos regulatorios o fiscales, ya que estos dependen de múltiples factores fuera de nuestro control
• Los clientes son responsables de tomar decisiones comerciales basadas en nuestro asesoramiento, considerando su propia situación y asumiendo los riesgos inherentes

Recomendamos encarecidamente que los clientes obtengan seguros profesionales apropiados para sus operaciones.`
    },
    {
      id: '7',
      title: 'Propiedad Intelectual',
      icon: FileText,
      content: `Todos los materiales, metodologías, plantillas, software y documentación desarrollados por HS Contadores Públicos S.A.S. en el curso de la prestación de servicios son propiedad intelectual de la Empresa, a menos que se acuerde lo contrario por escrito.

Los clientes pueden utilizar los entregables específicos creados para ellos según los términos del contrato de servicios, pero no pueden reproducir, distribuir o comercializar nuestras metodologías propietarias sin autorización expresa.`
    },
    {
      id: '8',
      title: 'Terminación de Servicios',
      icon: AlertCircle,
      content: `Cualquiera de las partes puede terminar el acuerdo de servicios con notificación escrita según los términos del contrato específico.

En caso de terminación:
• El cliente es responsable de todos los servicios prestados hasta la fecha de terminación
• Se deben pagar todos los honorarios pendientes
• Los documentos del cliente serán devueltos según los procedimientos acordados
• Las obligaciones de confidencialidad continúan después de la terminación

HS Contadores Públicos S.A.S. se reserva el derecho de terminar servicios inmediatamente en caso de incumplimiento material del cliente o actividades ilegales.`
    },
    {
      id: '9',
      title: 'Ley Aplicable y Jurisdicción',
      icon: Scale,
      content: `Estos Términos de Servicio se rigen por las leyes de la República de Colombia.

Cualquier disputa relacionada con estos términos o nuestros servicios será resuelta en los tribunales competentes de Manizales, Caldas, Colombia, a menos que se acuerde un método alternativo de resolución de disputas en el contrato de servicios específico.

Ambas partes renuncian a cualquier objeción a la jurisdicción o lugar de dichos tribunales.`
    },
    {
      id: '10',
      title: 'Modificaciones de los Términos',
      icon: FileText,
      content: `HS Contadores Públicos S.A.S. se reserva el derecho de modificar estos Términos de Servicio en cualquier momento. Las modificaciones entrarán en vigor al ser publicadas en nuestro sitio web.

Los clientes existentes serán notificados de cambios materiales mediante el método de comunicación corporativa preferente. El uso continuado de nuestros servicios después de dichas modificaciones constituye aceptación de los términos revisados.

Se recomienda revisar periódicamente estos términos para estar informado de cualquier cambio.`
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="bg-black border-b border-[#D4AF37]/20">
        <div className="container mx-auto px-4 sm:px-6 py-8 sm:py-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={SPRING_TRANSITION}
            className="max-w-4xl mx-auto"
          >
            <motion.button
              onClick={() => setView('home')}
              className="inline-flex items-center space-x-2 text-white/70 hover:text-[#D4AF37] transition-colors mb-6 sm:mb-8 text-sm sm:text-base"
            >
              <ArrowLeft size={16} />
              <span>Volver al Inicio</span>
            </motion.button>

            <div className="flex items-center space-x-4 mb-6 sm:mb-8">
              <IconBox icon={FileText} variant="gold" size="lg" />
              <div>
                <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white mb-2">
                  Términos de <span className="text-[#D4AF37] font-serif-premium">Servicio</span>
                </h1>
                <p className="text-white/70 text-sm sm:text-base">
                  Última actualización: {new Date().toLocaleDateString('es-CO', { year: 'numeric', month: 'long', day: 'numeric' })}
                </p>
              </div>
            </div>

            <div className="bg-[#1A1A1A] border border-[#D4AF37]/20 rounded-xl sm:rounded-2xl p-4 sm:p-6">
              <p className="text-white/80 text-sm sm:text-base leading-relaxed">
                Estos términos rigen el uso de los servicios profesionales proporcionados por HS Contadores Públicos S.A.S.
                Le recomendamos leer cuidadosamente estos términos antes de utilizar nuestros servicios.
              </p>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 sm:px-6 py-12 sm:py-16 md:py-24">
        <div className="max-w-4xl mx-auto">
          <div className="space-y-4">
            {sections.map((section, idx) => {
              const isActive = activeSection === section.id;
              return (
                <motion.div
                  key={section.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ ...SPRING_TRANSITION, delay: idx * 0.05 }}
                  className="bg-white border border-slate-200 rounded-xl overflow-hidden hover:border-[#D4AF37]/30 transition-colors shadow-sm"
                >
                  <button
                    onClick={() => toggleSection(section.id)}
                    className="w-full flex items-center justify-between p-6 text-left transition-colors"
                  >
                    <div className="flex items-center space-x-4">
                      <IconBox icon={section.icon} variant="default" size="sm" />
                      <div>
                        <span className="text-[10px] font-bold text-[#D4AF37] uppercase tracking-widest block mb-1">
                          Sección {section.id}
                        </span>
                        <h2 className="text-lg sm:text-xl font-bold text-black">
                          {section.title}
                        </h2>
                      </div>
                    </div>
                    <motion.div
                      animate={{ rotate: isActive ? 180 : 0 }}
                      transition={SPRING_TRANSITION}
                      className="text-[#D4AF37]"
                    >
                      <ChevronDown size={20} />
                    </motion.div>
                  </button>

                  <AnimatePresence>
                    {isActive && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: 'easeInOut' }}
                      >
                        <div className="px-6 pb-8 ml-[60px]">
                          <div className="prose prose-sm sm:prose-base max-w-none">
                            <p className="text-slate-600 leading-relaxed whitespace-pre-line text-sm sm:text-base">
                              {section.content}
                            </p>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              );
            })}
          </div>

          {/* Contact Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={SPRING_TRANSITION}
            className="mt-16 sm:mt-24 bg-black rounded-xl sm:rounded-2xl p-6 sm:p-8 md:p-12 border border-[#D4AF37]/20"
          >
            <div className="text-center">
              <h3 className="text-2xl sm:text-3xl font-bold text-white mb-4">
                ¿Tiene Preguntas sobre estos Términos?
              </h3>
              <p className="text-white/70 mb-6 sm:mb-8 text-sm sm:text-base">
                Nuestro equipo legal está disponible para aclarar cualquier duda sobre nuestros términos de servicio.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center space-y-3 sm:space-y-0 sm:space-x-4">
                <Button
                  variant="primary"
                  size="md"
                  href={WHATSAPP_LINK}
                  className="w-full sm:w-auto"
                >
                  Contactar por WhatsApp
                </Button>
                <Button
                  variant="secondary"
                  size="md"
                  onClick={() => setView('home')}
                  className="w-full sm:w-auto"
                >
                  Volver al Inicio
                </Button>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Back to Top */}
      <div className="fixed bottom-8 right-8 z-50">
        <motion.button
          onClick={scrollToTop}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="w-12 h-12 sm:w-14 sm:h-14 bg-[#D4AF37] text-black rounded-full flex items-center justify-center shadow-lg shadow-[#D4AF37]/20 hover:bg-[#FFD700] transition-colors"
          aria-label="Volver arriba"
        >
          <ArrowLeft size={20} className="rotate-90" />
        </motion.button>
      </div>
    </div>
  );
};

export default TermsOfService;


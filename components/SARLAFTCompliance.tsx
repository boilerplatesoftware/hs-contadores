import React from 'react';
import { motion } from 'framer-motion';
import { Shield, AlertTriangle, CheckCircle2, FileText, Lock, Users, Eye, Scale, ArrowLeft, Target, TrendingUp, Building2 } from 'lucide-react';
import { SPRING_TRANSITION } from '../constants';
import Button from './ui/Button';
import IconBox from './ui/IconBox';

const SARLAFTCompliance: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const sections = [
    {
      id: '1',
      title: 'Compromiso con el Cumplimiento SARLAFT',
      icon: Shield,
      content: `HS Contadores Públicos S.A.S. se compromete firmemente con la prevención del lavado de activos y la financiación del terrorismo (LA/FT), cumpliendo estrictamente con las normativas colombianas aplicables.

Aunque nuestra empresa no está sujeta directamente a la obligación de implementar SARLAFT (Sistema de Administración de Riesgo de Lavado de Activos y Financiación del Terrorismo), reconocemos la importancia crítica de estas medidas y las implementamos como parte de nuestras mejores prácticas empresariales y de cumplimiento normativo.

Esta política demuestra nuestro compromiso con la integridad financiera, la transparencia y la lucha contra actividades ilícitas.`
    },
    {
      id: '2',
      title: 'Marco Normativo Aplicable',
      icon: FileText,
      content: `Nuestro compromiso con la prevención de LA/FT se basa en el cumplimiento de las siguientes normativas:

Normativas Nacionales:
• Ley 526 de 1999 - Estatuto Orgánico del Sistema Financiero
• Ley 190 de 1995 - Código Penal (artículos sobre lavado de activos)
• Circular Externa 029 de 2014 de la Superintendencia Financiera de Colombia
• Circular Externa 007 de 2016 de la Superintendencia Financiera de Colombia
• Resolución 014 de 2018 de la Unidad de Información y Análisis Financiero (UIAF)
• Decreto 1674 de 2012 y normas complementarias

Normativas Internacionales:
• Recomendaciones del Grupo de Acción Financiera Internacional (GAFI/FATF)
• Estándares de la Organización de Estados Americanos (OEA)
• Convenciones internacionales ratificadas por Colombia

Aunque no estamos obligados por ley a implementar SARLAFT, seguimos estos estándares como parte de nuestra responsabilidad social y empresarial.`
    },
    {
      id: '3',
      title: 'Políticas y Procedimientos Implementados',
      icon: CheckCircle2,
      content: `Hemos implementado las siguientes políticas y procedimientos para prevenir LA/FT:

1. Conocimiento del Cliente (KYC - Know Your Customer):
   • Verificación de identidad de todos los clientes
   • Validación de información comercial y financiera
   • Análisis de la actividad económica del cliente
   • Identificación de beneficiarios finales

2. Debida Diligencia:
   • Evaluación inicial y continua de clientes
   • Clasificación de riesgo de clientes
   • Monitoreo de transacciones y operaciones
   • Actualización periódica de información

3. Detección de Operaciones Sospechosas:
   • Identificación de patrones inusuales
   • Análisis de transacciones complejas
   • Reporte interno de actividades sospechosas
   • Capacitación del personal en detección

4. Gestión de Riesgos:
   • Evaluación periódica de riesgos LA/FT
   • Implementación de controles preventivos
   • Revisión y actualización de políticas
   • Auditorías internas regulares`
    },
    {
      id: '4',
      title: 'Servicios de Consultoría en Cumplimiento SARLAFT',
      icon: Target,
      content: `Ofrecemos servicios especializados de consultoría para ayudar a nuestros clientes a cumplir con sus obligaciones SARLAFT:

Diseño e Implementación de SARLAFT:
• Desarrollo de políticas y procedimientos personalizados
• Estructuración del sistema de gestión de riesgos
• Diseño de matrices de riesgo
• Implementación de controles y procedimientos

Capacitación y Entrenamiento:
• Programas de capacitación para equipos de cumplimiento
• Talleres sobre detección de operaciones sospechosas
• Entrenamiento en reportes a la UIAF
• Actualización normativa continua

Auditoría y Revisión:
• Evaluación de sistemas SARLAFT existentes
• Identificación de brechas y vulnerabilidades
• Recomendaciones de mejora
• Preparación para inspecciones regulatorias

Asesoría Especializada:
• Interpretación de normativas aplicables
• Apoyo en reportes a autoridades
• Gestión de relaciones con UIAF y Superintendencia
• Desarrollo de planes de acción correctiva`
    },
    {
      id: '5',
      title: 'Clasificación de Riesgo de Clientes',
      icon: TrendingUp,
      content: `Implementamos un sistema de clasificación de riesgo para todos nuestros clientes:

Categorías de Riesgo:

Riesgo Bajo:
• Empresas establecidas con historial comprobable
• Operaciones transparentes y documentadas
• Cumplimiento normativo demostrado
• Relaciones comerciales estables

Riesgo Medio:
• Nuevas empresas o relaciones comerciales
• Operaciones en sectores regulados
• Transacciones internacionales moderadas
• Requieren monitoreo adicional

Riesgo Alto:
• Operaciones en sectores de alto riesgo
• Transacciones complejas o inusuales
• Relaciones con jurisdicciones de alto riesgo
• Requieren debida diligencia reforzada

Nuestro proceso de clasificación se actualiza periódicamente y puede resultar en medidas adicionales de control según el nivel de riesgo identificado.`
    },
    {
      id: '6',
      title: 'Detección y Reporte de Operaciones Sospechosas',
      icon: AlertTriangle,
      content: `Hemos establecido procedimientos para identificar y reportar operaciones sospechosas:

Indicadores de Operaciones Sospechosas:
• Transacciones que no corresponden con la actividad económica del cliente
• Operaciones fragmentadas para evadir umbrales de reporte
• Movimientos de fondos sin justificación comercial clara
• Uso de estructuras complejas sin propósito económico aparente
• Relaciones con personas o entidades en listas de sanciones
• Operaciones con jurisdicciones de alto riesgo sin justificación

Procedimientos de Reporte:
• Identificación y documentación de operaciones sospechosas
• Análisis interno por el equipo de cumplimiento
• Reporte a la UIAF cuando corresponda (para clientes obligados)
• Mantenimiento de registros confidenciales
• Protección de la información reportada

Aunque no estamos obligados a reportar directamente a la UIAF, mantenemos registros detallados y asesoramos a nuestros clientes sobre sus obligaciones de reporte.`
    },
    {
      id: '7',
      title: 'Capacitación y Concientización',
      icon: Users,
      content: `La capacitación continua es fundamental para el cumplimiento efectivo:

Programas de Capacitación Interna:
• Capacitación inicial para todo el personal
• Actualizaciones normativas trimestrales
• Talleres especializados por área
• Simulacros de detección de operaciones sospechosas

Temas de Capacitación:
• Normativas LA/FT aplicables
• Técnicas de detección de operaciones sospechosas
• Procedimientos de debida diligencia
• Ética profesional y responsabilidades
• Protección de información confidencial

Certificación y Acreditación:
• Personal certificado en cumplimiento normativo
• Participación en programas de educación continua
• Mantenimiento de competencias actualizadas

Nuestro compromiso es mantener un equipo altamente capacitado y actualizado en las mejores prácticas de prevención de LA/FT.`
    },
    {
      id: '8',
      title: 'Confidencialidad y Protección de Información',
      icon: Lock,
      content: `Mantenemos estrictos protocolos de confidencialidad:

Protección de Información:
• Acceso restringido a información sensible
• Sistemas de encriptación y seguridad
• Controles de acceso basados en roles
• Auditorías de acceso a información

Obligaciones de Confidencialidad:
• Contratos de confidencialidad con todo el personal
• Protección de información de clientes
• Manejo seguro de datos financieros
• Cumplimiento con normativas de protección de datos

Limitaciones de Divulgación:
• Información solo compartida cuando es legalmente requerida
• Notificación a clientes cuando sea apropiado
• Protección de identidades en reportes
• Cumplimiento con órdenes judiciales y regulatorias

El equilibrio entre cumplimiento normativo y protección de la confidencialidad del cliente es fundamental en nuestras operaciones.`
    },
    {
      id: '9',
      title: 'Monitoreo y Revisión Continua',
      icon: Eye,
      content: `Implementamos un sistema de monitoreo continuo:

Monitoreo de Transacciones:
• Revisión periódica de operaciones de clientes
• Análisis de patrones y tendencias
• Identificación de cambios en perfiles de riesgo
• Alertas automáticas para operaciones inusuales

Revisión de Políticas:
• Actualización anual de políticas y procedimientos
• Revisión de efectividad de controles
• Ajustes basados en cambios normativos
• Mejora continua de procesos

Auditorías Internas:
• Auditorías semestrales de cumplimiento
• Evaluación de efectividad de controles
• Identificación de áreas de mejora
• Implementación de acciones correctivas

Reportes de Gestión:
• Reportes trimestrales a la dirección
• Métricas de cumplimiento
• Análisis de tendencias
• Recomendaciones estratégicas`
    },
    {
      id: '10',
      title: 'Cooperación con Autoridades',
      icon: Building2,
      content: `Mantenemos una relación de cooperación proactiva con las autoridades:

Autoridades Competentes:
• Unidad de Información y Análisis Financiero (UIAF)
• Superintendencia Financiera de Colombia
• Fiscalía General de la Nación
• Dirección de Impuestos y Aduanas Nacionales (DIAN)
• Policía Nacional - Dirección de Investigación Criminal

Compromisos de Cooperación:
• Respuesta oportuna a requerimientos oficiales
• Suministro de información cuando sea legalmente requerido
• Participación en investigaciones cuando corresponda
• Cumplimiento con órdenes judiciales y regulatorias

Protección Legal:
• Asesoría legal especializada
• Revisión de requerimientos antes de responder
• Protección de derechos de clientes
• Cumplimiento con debido proceso

Nuestra cooperación se realiza siempre dentro del marco legal y respetando los derechos de nuestros clientes.`
    },
    {
      id: '11',
      title: 'Sanciones y Consecuencias del Incumplimiento',
      icon: Scale,
      content: `Reconocemos las graves consecuencias del incumplimiento:

Sanciones Administrativas:
• Multas significativas por parte de autoridades regulatorias
• Suspensión o cancelación de autorizaciones
• Inclusión en listas de sancionados
• Restricciones operativas

Sanciones Penales:
• Responsabilidad penal por participación en LA/FT
• Pena de prisión para responsables
• Extinción de dominio de activos
• Prohibición de ejercer actividades comerciales

Consecuencias Reputacionales:
• Daño a la reputación empresarial
• Pérdida de confianza de clientes y socios
• Impacto negativo en relaciones comerciales
• Dificultades para obtener financiamiento

Medidas Preventivas:
• Implementación proactiva de controles
• Cumplimiento estricto de normativas
• Capacitación continua del personal
• Revisión y actualización constante de políticas

Nuestro compromiso es prevenir estas consecuencias mediante el cumplimiento riguroso de todas las normativas aplicables.`
    },
    {
      id: '12',
      title: 'Actualización y Mejora Continua',
      icon: CheckCircle2,
      content: `Nos comprometemos a la mejora continua de nuestros sistemas:

Actualización Normativa:
• Monitoreo constante de cambios en normativas
• Revisión trimestral de actualizaciones regulatorias
• Ajuste inmediato de políticas cuando sea requerido
• Participación en foros y asociaciones profesionales

Mejora de Procesos:
• Identificación continua de oportunidades de mejora
• Implementación de mejores prácticas internacionales
• Adopción de nuevas tecnologías de detección
• Optimización de procedimientos operativos

Benchmarking:
• Comparación con estándares de la industria
• Participación en programas de mejores prácticas
• Colaboración con otras firmas profesionales
• Aprendizaje de casos y experiencias relevantes

Innovación:
• Exploración de nuevas herramientas tecnológicas
• Desarrollo de capacidades analíticas avanzadas
• Implementación de sistemas de inteligencia artificial
• Mejora continua de eficiencia y efectividad

Nuestro objetivo es mantenernos a la vanguardia en prevención de LA/FT y cumplimiento normativo.`
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
            <motion.a
              href="#"
              onClick={(e) => {
                e.preventDefault();
                window.location.hash = '';
                window.location.href = window.location.origin + window.location.pathname;
              }}
              className="inline-flex items-center space-x-2 text-white/70 hover:text-[#D4AF37] transition-colors mb-6 sm:mb-8 text-sm sm:text-base"
            >
              <ArrowLeft size={16} />
              <span>Volver al Inicio</span>
            </motion.a>
            
            <div className="flex items-center space-x-4 mb-6 sm:mb-8">
              <IconBox icon={Shield} variant="gold" size="lg" />
              <div>
                <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white mb-2">
                  Cumplimiento <span className="text-[#D4AF37] font-serif-premium">SARLAFT</span>
                </h1>
                <p className="text-white/70 text-sm sm:text-base">
                  Sistema de Administración de Riesgo de Lavado de Activos y Financiación del Terrorismo
                </p>
                <p className="text-white/50 text-xs sm:text-sm mt-2">
                  Última actualización: {new Date().toLocaleDateString('es-CO', { year: 'numeric', month: 'long', day: 'numeric' })}
                </p>
              </div>
            </div>

            <div className="bg-[#1A1A1A] border border-[#D4AF37]/20 rounded-xl sm:rounded-2xl p-4 sm:p-6">
              <p className="text-white/80 text-sm sm:text-base leading-relaxed mb-4">
                HS Contadores Públicos S.A.S. se compromete con la prevención del lavado de activos y la financiación del terrorismo, 
                implementando las mejores prácticas de cumplimiento normativo y ofreciendo servicios especializados de consultoría SARLAFT.
              </p>
              <div className="flex flex-wrap items-center gap-3 sm:gap-4">
                <div className="flex items-center space-x-2 text-[#D4AF37] text-xs sm:text-sm">
                  <CheckCircle2 size={16} />
                  <span className="font-semibold">Cumplimiento Normativo</span>
                </div>
                <div className="flex items-center space-x-2 text-[#D4AF37] text-xs sm:text-sm">
                  <CheckCircle2 size={16} />
                  <span className="font-semibold">Consultoría Especializada</span>
                </div>
                <div className="flex items-center space-x-2 text-[#D4AF37] text-xs sm:text-sm">
                  <CheckCircle2 size={16} />
                  <span className="font-semibold">Prevención LA/FT</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 sm:px-6 py-12 sm:py-16 md:py-24">
        <div className="max-w-4xl mx-auto">
          <div className="space-y-8 sm:space-y-12 md:space-y-16">
            {sections.map((section, idx) => (
              <motion.section
                key={section.id}
                id={`section-${section.id}`}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ ...SPRING_TRANSITION, delay: idx * 0.1 }}
                className="bg-white border border-slate-200 rounded-xl sm:rounded-2xl p-6 sm:p-8 md:p-10 hover:border-[#D4AF37]/30 transition-colors shadow-sm hover:shadow-lg"
              >
                <div className="flex items-start space-x-4 sm:space-x-6 mb-4 sm:mb-6">
                  <div className="shrink-0">
                    <IconBox icon={section.icon} variant="default" size="md" />
                  </div>
                  <div className="flex-grow">
                    <div className="flex items-center space-x-3 mb-2">
                      <span className="text-xs font-bold text-[#D4AF37] uppercase tracking-widest">
                        Sección {section.id}
                      </span>
                    </div>
                    <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-black mb-4 sm:mb-6">
                      {section.title}
                    </h2>
                    <div className="prose prose-sm sm:prose-base max-w-none">
                      <p className="text-slate-600 leading-relaxed whitespace-pre-line text-sm sm:text-base">
                        {section.content}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.section>
            ))}
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
                ¿Necesita Asesoría en Cumplimiento SARLAFT?
              </h3>
              <p className="text-white/70 mb-6 sm:mb-8 text-sm sm:text-base">
                Nuestro equipo especializado en cumplimiento normativo está disponible para ayudarle a implementar o mejorar 
                su sistema SARLAFT y cumplir con todas las obligaciones regulatorias.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center space-y-3 sm:space-y-0 sm:space-x-4">
                <Button
                  variant="primary"
                  size="md"
                  href="#"
                  onClick={() => {
                    window.location.hash = '';
                    setTimeout(() => {
                      window.location.href = window.location.origin + window.location.pathname + '#contacto';
                    }, 100);
                  }}
                  className="w-full sm:w-auto"
                >
                  Solicitar Consultoría SARLAFT
                </Button>
                <Button
                  variant="secondary"
                  size="md"
                  href="mailto:sarlaft@hscontadores.co"
                  className="w-full sm:w-auto"
                >
                  Contactar Equipo Especializado
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

export default SARLAFTCompliance;


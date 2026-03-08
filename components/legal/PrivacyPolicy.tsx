import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Lock, Eye, Database, UserCheck, AlertTriangle, FileText, ArrowLeft, CheckCircle2, Users } from 'lucide-react';
import { SPRING_TRANSITION } from '../../constants';
import Button from '../ui/Button';
import SectionHeader from '../ui/SectionHeader';
import IconBox from '../ui/IconBox';

const PrivacyPolicy: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const sections = [
    {
      id: '1',
      title: 'Introducción y Alcance',
      icon: Shield,
      content: `HS Contadores Públicos S.A.S. ("la Empresa", "nosotros", "nuestro") se compromete a proteger la privacidad y confidencialidad de los datos personales de nuestros clientes, visitantes del sitio web y cualquier persona que interactúe con nuestros servicios.

Esta Política de Privacidad describe cómo recopilamos, utilizamos, almacenamos y protegemos su información personal de acuerdo con la Ley 1581 de 2012 y el Decreto 1377 de 2013 de Colombia, así como otras normativas aplicables de protección de datos.

Al utilizar nuestros servicios o visitar nuestro sitio web, usted acepta las prácticas descritas en esta política.`
    },
    {
      id: '2',
      title: 'Responsable del Tratamiento',
      icon: UserCheck,
      content: `Responsable del Tratamiento de Datos Personales:
HS Contadores Públicos S.A.S.
NIT: [Número de Identificación Tributaria]
Dirección: Carrera 23 #19-20, Oficina 301, Centro Comercial, Manizales, Caldas, Colombia
Teléfono: +57 (300) 888-9000
Email: privacidad@hscontadores.co

Representante Legal: [Nombre del Representante Legal]
Email del Representante Legal: legal@hscontadores.co`
    },
    {
      id: '3',
      title: 'Datos Personales que Recopilamos',
      icon: Database,
      content: `Recopilamos los siguientes tipos de datos personales:

Datos de Identificación:
• Nombres y apellidos
• Número de identificación (Cédula, NIT, Pasaporte)
• Fecha de nacimiento
• Nacionalidad

Datos de Contacto:
• Dirección postal
• Números de teléfono (fijo y móvil)
• Direcciones de correo electrónico
• Información de contacto de emergencia

Datos Financieros y Comerciales:
• Información bancaria y de cuentas
• Estados financieros
• Información tributaria
• Historial crediticio (cuando sea necesario)
• Información sobre transacciones comerciales

Datos Profesionales:
• Información laboral
• Cargo y responsabilidades
• Información sobre la empresa u organización que representa

Datos Técnicos:
• Direcciones IP
• Información del navegador y dispositivo
• Cookies y tecnologías similares
• Registros de acceso a sistemas

Datos Sensibles:
• Información sobre salud (cuando sea relevante para servicios específicos)
• Información sobre afiliación política (cuando sea requerida por ley)
• Información sobre origen racial o étnico (cuando sea necesario para cumplimiento normativo)

Solo recopilamos datos sensibles cuando es estrictamente necesario para la prestación de servicios y con su consentimiento explícito.`
    },
    {
      id: '4',
      title: 'Finalidades del Tratamiento',
      icon: CheckCircle2,
      content: `Utilizamos sus datos personales para las siguientes finalidades:

Finalidades Principales:
• Prestación de servicios profesionales de contabilidad, auditoría y consultoría
• Cumplimiento de obligaciones contractuales
• Gestión de la relación comercial
• Facturación y cobro de servicios
• Comunicación sobre servicios y actualizaciones
• Cumplimiento de obligaciones legales y regulatorias (DIAN, Superintendencia, etc.)
• Prevención de fraudes y actividades ilegales
• Mejora de nuestros servicios y experiencia del cliente

Finalidades Secundarias (con su consentimiento):
• Envío de comunicaciones comerciales y marketing
• Realización de estudios y análisis estadísticos
• Desarrollo de nuevos servicios y productos
• Participación en programas de fidelización

No utilizaremos sus datos personales para finalidades diferentes a las aquí descritas sin su consentimiento previo.`
    },
    {
      id: '5',
      title: 'Base Legal del Tratamiento',
      icon: FileText,
      content: `El tratamiento de sus datos personales se basa en las siguientes bases legales:

1. Ejecución de Contrato: Para cumplir con las obligaciones derivadas del contrato de servicios suscrito con usted.

2. Cumplimiento de Obligaciones Legales: Para cumplir con las obligaciones impuestas por la normativa colombiana aplicable, incluyendo pero no limitándose a:
   • Ley 1581 de 2012 (Protección de Datos Personales)
   • Código de Comercio
   • Normas tributarias (Estatuto Tributario)
   • Normas contables (Decretos 2649 y 2650 de 1993)
   • Normas de prevención de lavado de activos (SARLAFT)

3. Consentimiento: Para el tratamiento de datos sensibles y finalidades secundarias, cuando sea requerido.

4. Interés Legítimo: Para la gestión de la relación comercial, prevención de fraudes y mejora de servicios, siempre que no se vulneren sus derechos fundamentales.`
    },
    {
      id: '6',
      title: 'Transferencias y Compartimiento de Datos',
      icon: Users,
      content: `Sus datos personales pueden ser compartidos con las siguientes categorías de destinatarios:

Terceros Autorizados:
• Autoridades gubernamentales y regulatorias (DIAN, Superintendencia de Sociedades, etc.) cuando sea requerido por ley
• Proveedores de servicios tecnológicos y de infraestructura (bajo estrictos acuerdos de confidencialidad)
• Asesores legales, contables y fiscales externos
• Instituciones financieras (para procesamiento de pagos)
• Empresas de auditoría externa (cuando sea necesario)

Transferencias Internacionales:
• En caso de transferencias internacionales, garantizamos que se realizarán únicamente a países con niveles adecuados de protección de datos o mediante cláusulas contractuales estándar aprobadas.

No vendemos, alquilamos ni comercializamos sus datos personales a terceros para fines comerciales.`
    },
    {
      id: '7',
      title: 'Medidas de Seguridad',
      icon: Lock,
      content: `Implementamos medidas técnicas, administrativas y físicas para proteger sus datos personales:

Medidas Técnicas:
• Cifrado de datos en tránsito y en reposo
• Sistemas de autenticación y control de acceso
• Firewalls y sistemas de detección de intrusiones
• Copias de seguridad regulares
• Monitoreo continuo de sistemas

Medidas Administrativas:
• Políticas y procedimientos de seguridad de la información
• Capacitación regular del personal en protección de datos
• Contratos de confidencialidad con empleados y terceros
• Auditorías periódicas de seguridad

Medidas Físicas:
• Control de acceso a instalaciones
• Sistemas de videovigilancia
• Almacenamiento seguro de documentos físicos

A pesar de estas medidas, ningún sistema es 100% seguro. Le recomendamos mantener la confidencialidad de sus credenciales de acceso.`
    },
    {
      id: '8',
      title: 'Conservación de Datos',
      icon: Database,
      content: `Conservamos sus datos personales durante los siguientes períodos:

Datos Contables y Financieros:
• Mínimo 10 años según normativa contable colombiana (Decreto 2649 de 1993)
• Pueden conservarse por períodos más largos si son requeridos para procedimientos legales o regulatorios

Datos Fiscales:
• Mínimo 5 años según normativa tributaria (Estatuto Tributario)
• Períodos adicionales según requerimientos específicos de la DIAN

Datos de Relación Comercial:
• Durante la vigencia del contrato de servicios
• Hasta 5 años después de la terminación del contrato, salvo obligaciones legales que requieran períodos mayores

Datos de Marketing:
• Hasta que retire su consentimiento o solicite la eliminación

Al finalizar los períodos de conservación, los datos serán eliminados de forma segura o anonimizados, salvo que existan obligaciones legales que requieran su conservación.`
    },
    {
      id: '9',
      title: 'Derechos del Titular',
      icon: Eye,
      content: `Usted tiene los siguientes derechos respecto a sus datos personales:

1. Derecho de Conocimiento, Acceso y Consulta:
   • Conocer, actualizar y rectificar sus datos personales
   • Solicitar prueba de la autorización otorgada
   • Consultar de forma gratuita sus datos personales

2. Derecho de Supresión y Revocación:
   • Solicitar la supresión de sus datos cuando considere que no están siendo tratados conforme a la ley
   • Revocar la autorización y/o solicitar la supresión del dato

3. Derecho de Reclamo:
   • Presentar quejas ante la Superintendencia de Industria y Comercio (SIC) por infracciones a la Ley 1581 de 2012

4. Derecho de Oposición:
   • Oponerse al tratamiento de datos personales por motivos legítimos

5. Derecho a la Portabilidad:
   • Solicitar la entrega de sus datos personales en formato estructurado y de uso común

Para ejercer estos derechos, puede contactarnos a través de:
Email: privacidad@hscontadores.co
Dirección: Carrera 23 #19-20, Oficina 301, Manizales, Caldas, Colombia

Responderemos a su solicitud en un plazo máximo de 10 días hábiles.`
    },
    {
      id: '10',
      title: 'Cookies y Tecnologías Similares',
      icon: AlertTriangle,
      content: `Nuestro sitio web utiliza cookies y tecnologías similares para mejorar su experiencia:

Tipos de Cookies:
• Cookies Esenciales: Necesarias para el funcionamiento del sitio web
• Cookies de Rendimiento: Para analizar el uso del sitio y mejorar su funcionamiento
• Cookies de Funcionalidad: Para recordar sus preferencias
• Cookies de Marketing: Para personalizar contenido y publicidad (con su consentimiento)

Puede gestionar sus preferencias de cookies a través de la configuración de su navegador. Tenga en cuenta que deshabilitar ciertas cookies puede afectar la funcionalidad del sitio web.

Para más información sobre nuestro uso de cookies, consulte nuestra Política de Cookies.`
    },
    {
      id: '11',
      title: 'Menores de Edad',
      icon: Shield,
      content: `Nuestros servicios están dirigidos a personas mayores de 18 años y empresas. No recopilamos intencionalmente datos personales de menores de edad sin el consentimiento de sus padres o tutores legales.

Si tenemos conocimiento de que hemos recopilado datos personales de un menor sin el consentimiento apropiado, tomaremos medidas para eliminar esa información de nuestros sistemas.`
    },
    {
      id: '12',
      title: 'Modificaciones a esta Política',
      icon: FileText,
      content: `Nos reservamos el derecho de modificar esta Política de Privacidad en cualquier momento. Las modificaciones entrarán en vigor al ser publicadas en nuestro sitio web.

Le notificaremos sobre cambios materiales mediante:
• Publicación destacada en nuestro sitio web
• Notificación por correo electrónico (si tenemos su dirección)
• Aviso en nuestros canales de comunicación oficiales

Se recomienda revisar periódicamente esta política para estar informado sobre cómo protegemos su información. La fecha de la última actualización se indica al inicio de este documento.`
    },
    {
      id: '13',
      title: 'Autoridad de Control',
      icon: AlertTriangle,
      content: `Si considera que el tratamiento de sus datos personales vulnera la normativa aplicable, puede presentar una queja ante:

Superintendencia de Industria y Comercio (SIC)
Dirección: Carrera 13 #27-00, Bogotá D.C., Colombia
Teléfono: (57-1) 592-0400
Sitio web: www.sic.gov.co
Email: contacto@sic.gov.co

Antes de presentar una queja ante la SIC, le recomendamos contactarnos primero para intentar resolver cualquier inquietud de manera directa.`
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
                  Política de <span className="text-[#D4AF37] font-serif-premium">Privacidad</span>
                </h1>
                <p className="text-white/70 text-sm sm:text-base">
                  Última actualización: {new Date().toLocaleDateString('es-CO', { year: 'numeric', month: 'long', day: 'numeric' })}
                </p>
              </div>
            </div>

            <div className="bg-[#1A1A1A] border border-[#D4AF37]/20 rounded-xl sm:rounded-2xl p-4 sm:p-6">
              <p className="text-white/80 text-sm sm:text-base leading-relaxed mb-4">
                Esta política describe cómo HS Contadores Públicos S.A.S. recopila, utiliza y protege su información personal
                de acuerdo con la Ley 1581 de 2012 de Protección de Datos Personales de Colombia.
              </p>
              <div className="flex items-center space-x-2 text-[#D4AF37] text-xs sm:text-sm">
                <CheckCircle2 size={16} />
                <span className="font-semibold">Cumplimiento con Ley 1581 de 2012 y Decreto 1377 de 2013</span>
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
                ¿Tiene Preguntas sobre Privacidad?
              </h3>
              <p className="text-white/70 mb-6 sm:mb-8 text-sm sm:text-base">
                Nuestro equipo de protección de datos está disponible para responder sus consultas y ayudarle a ejercer sus derechos.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center space-y-3 sm:space-y-0 sm:space-x-4">
                <Button
                  variant="primary"
                  size="md"
                  href="mailto:privacidad@hscontadores.co"
                  className="w-full sm:w-auto"
                >
                  Contactar Equipo de Privacidad
                </Button>
                <Button
                  variant="secondary"
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
                  Solicitar Acceso a Datos
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

export default PrivacyPolicy;


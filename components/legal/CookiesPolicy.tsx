import React from 'react';
import { motion } from 'framer-motion';
import { Cookie, Settings, Shield, Eye, Database, AlertCircle, CheckCircle2, FileText, ArrowLeft, Lock, BarChart3, Target } from 'lucide-react';
import { SPRING_TRANSITION } from '../../constants';
import Button from '../ui/Button';
import SectionHeader from '../ui/SectionHeader';
import IconBox from '../ui/IconBox';

const CookiesPolicy: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const sections = [
    {
      id: '1',
      title: '¿Qué son las Cookies?',
      icon: Cookie,
      content: `Las cookies son pequeños archivos de texto que se almacenan en su dispositivo(computadora, tablet o móvil) cuando visita un sitio web.Estas cookies permiten que el sitio web recuerde sus acciones y preferencias durante un período de tiempo, por lo que no tiene que volver a configurarlas cada vez que regresa al sitio o navega de una página a otra.

Las cookies son ampliamente utilizadas para hacer que los sitios web funcionen de manera más eficiente, así como para proporcionar información a los propietarios del sitio.No dañan su dispositivo ni contienen virus.

En HS Contadores Públicos S.A.S., utilizamos cookies para mejorar su experiencia de navegación, analizar el uso del sitio web y personalizar el contenido según sus preferencias.`
    },
    {
      id: '2',
      title: 'Tipos de Cookies que Utilizamos',
      icon: Settings,
      content: `Utilizamos diferentes tipos de cookies según su finalidad:

Cookies Esenciales(Necesarias):
• Son estrictamente necesarias para el funcionamiento del sitio web
• Permiten la navegación básica y el uso de funciones esenciales
• No pueden desactivarse en nuestros sistemas
• No requieren consentimiento según la normativa aplicable
• Ejemplos: cookies de sesión, cookies de seguridad, cookies de autenticación

Cookies de Rendimiento y Análisis:
• Recopilan información sobre cómo utiliza nuestro sitio web
• Nos ayudan a entender qué páginas son más populares
• Identifican problemas técnicos y áreas de mejora
• Requieren su consentimiento
• Ejemplos: Google Analytics, cookies de análisis de comportamiento

Cookies de Funcionalidad:
• Permiten que el sitio web recuerde sus preferencias
• Mejoran su experiencia personalizada
• Recuerdan configuraciones como idioma o región
• Requieren su consentimiento
• Ejemplos: cookies de preferencias de idioma, cookies de configuración

Cookies de Marketing y Publicidad:
• Se utilizan para mostrarle contenido relevante
• Rastrean su actividad en diferentes sitios web
• Se utilizan para personalizar anuncios
• Requieren su consentimiento explícito
• Ejemplos: cookies de seguimiento de conversión, cookies de remarketing

Cookies de Terceros:
• Establecidas por dominios diferentes al nuestro
• Utilizadas por servicios de terceros integrados en nuestro sitio
• Están sujetas a las políticas de privacidad de esos terceros
• Requieren su consentimiento
• Ejemplos: cookies de redes sociales, cookies de servicios de análisis`
    },
    {
      id: '3',
      title: 'Cookies Específicas que Utilizamos',
      icon: Database,
      content: `A continuación, detallamos las cookies específicas que utilizamos en nuestro sitio web:

Cookies de Sesión:
• Nombre: session_id
• Propósito: Mantener su sesión activa mientras navega
• Duración: Sesión(se eliminan al cerrar el navegador)
• Tipo: Esencial

Cookies de Preferencias:
• Nombre: user_preferences
• Propósito: Recordar sus preferencias de idioma y configuración
• Duración: 1 año
• Tipo: Funcionalidad

Cookies de Análisis(Google Analytics):
• Nombre: _ga, _gid, _gat
• Propósito: Analizar el uso del sitio web y generar estadísticas
• Duración: 2 años(_ga), 24 horas(_gid), 1 minuto(_gat)
• Tipo: Rendimiento
• Proveedor: Google LLC

Cookies de Seguridad:
• Nombre: csrf_token
• Propósito: Prevenir ataques de falsificación de solicitudes
• Duración: Sesión
• Tipo: Esencial

Cookies de Consentimiento:
• Nombre: cookie_consent
• Propósito: Recordar sus preferencias de cookies
• Duración: 1 año
• Tipo: Esencial

Esta lista puede actualizarse periódicamente.Le notificaremos sobre cambios significativos.`
    },
    {
      id: '4',
      title: 'Finalidad del Uso de Cookies',
      icon: Target,
      content: `Utilizamos cookies para las siguientes finalidades:

Mejora de la Experiencia del Usuario:
• Recordar sus preferencias y configuraciones
• Personalizar el contenido según sus intereses
• Facilitar la navegación y el uso del sitio web
• Mantener su sesión activa durante la navegación

Análisis y Estadísticas:
• Entender cómo los visitantes utilizan nuestro sitio web
• Identificar páginas populares y áreas de mejora
• Analizar patrones de navegación
• Medir la efectividad de nuestro contenido

Seguridad:
• Prevenir fraudes y actividades maliciosas
• Proteger su información personal
• Detectar intentos de acceso no autorizado
• Mantener la integridad del sitio web

Marketing y Comunicación:
• Mostrarle contenido relevante
• Personalizar comunicaciones
• Medir la efectividad de campañas
• Mejorar nuestros servicios

Cumplimiento Legal:
• Cumplir con obligaciones legales y regulatorias
• Mantener registros de consentimiento
• Facilitar auditorías y revisiones
• Proteger nuestros derechos legales`
    },
    {
      id: '5',
      title: 'Gestión de Cookies',
      icon: Settings,
      content: `Usted tiene control total sobre las cookies.Puede gestionarlas de las siguientes maneras:

A través de Nuestro Sitio Web:
• Utilice nuestro banner de consentimiento de cookies
• Acceda a la configuración de cookies en cualquier momento
• Modifique sus preferencias cuando lo desee
• Revoque su consentimiento cuando lo considere necesario

A través de su Navegador:
• Configure su navegador para aceptar o rechazar cookies
• Elimine cookies existentes
• Reciba notificaciones antes de que se instalen cookies
• Bloquee cookies de terceros

Configuración por Navegador:

Google Chrome:
• Configuración > Privacidad y seguridad > Cookies y otros datos de sitios
• Puede bloquear todas las cookies o solo las de terceros

Mozilla Firefox:
• Opciones > Privacidad y seguridad > Cookies y datos del sitio
• Configure cómo Firefox maneja las cookies

Safari:
• Preferencias > Privacidad > Cookies y datos de sitios web
• Configure las opciones de cookies

Microsoft Edge:
• Configuración > Cookies y permisos del sitio
• Gestione las preferencias de cookies

Tenga en cuenta que deshabilitar ciertas cookies puede afectar la funcionalidad del sitio web.`
    },
    {
      id: '6',
      title: 'Cookies de Terceros',
      icon: AlertCircle,
      content: `Nuestro sitio web puede contener enlaces a sitios web de terceros y utilizar servicios de terceros que establecen sus propias cookies:

Servicios de Análisis:
• Google Analytics: Para analizar el uso del sitio web
• Política de Privacidad: https://policies.google.com/privacy

Servicios de Redes Sociales:
• Si compartimos contenido en redes sociales, estas plataformas pueden establecer cookies
• Cada plataforma tiene su propia política de cookies

Servicios de Video:
• Si incrustamos videos, los proveedores pueden establecer cookies
• Estos servicios están sujetos a sus propias políticas

Servicios de Publicidad:
• Si utilizamos servicios de publicidad, pueden establecer cookies
• Estas cookies están sujetas a las políticas de los proveedores

No tenemos control sobre las cookies establecidas por terceros.Le recomendamos revisar las políticas de privacidad y cookies de estos terceros para entender cómo utilizan sus datos.

Puede optar por no recibir cookies de terceros configurando su navegador para bloquearlas.`
    },
    {
      id: '7',
      title: 'Consentimiento y Retiro del Consentimiento',
      icon: CheckCircle2,
      content: `Consentimiento:

Al utilizar nuestro sitio web y hacer clic en "Aceptar" en nuestro banner de cookies, usted consiente el uso de cookies según se describe en esta política.

Para cookies no esenciales, requerimos su consentimiento explícito antes de instalarlas.

Retiro del Consentimiento:

Usted puede retirar su consentimiento en cualquier momento:
• A través de la configuración de cookies en nuestro sitio web
• Eliminando las cookies de su navegador
• Contactándonos directamente

Cuando retire su consentimiento:
• Dejaremos de instalar nuevas cookies no esenciales
• Las cookies ya instaladas pueden permanecer hasta su expiración
• Puede eliminar manualmente las cookies existentes
• Algunas funcionalidades del sitio pueden verse afectadas

Cambios en las Preferencias:

Puede modificar sus preferencias de cookies en cualquier momento visitando nuestra página de configuración de cookies o contactándonos.`
    },
    {
      id: '8',
      title: 'Duración de las Cookies',
      icon: BarChart3,
      content: `Las cookies tienen diferentes duraciones según su tipo:

Cookies de Sesión:
• Se eliminan automáticamente cuando cierra su navegador
• No se almacenan permanentemente en su dispositivo
• Se utilizan para mantener su sesión activa

Cookies Persistentes:
• Permanecen en su dispositivo durante un período determinado
• Se activan cada vez que visita nuestro sitio web
• Tienen fechas de expiración específicas

Períodos de Retención:

Cookies Esenciales:
• Duración: Sesión o hasta 1 año
• No se pueden desactivar

Cookies de Funcionalidad:
• Duración: Hasta 1 año
• Se renuevan automáticamente si continúa visitando el sitio

Cookies de Análisis:
• Duración: Hasta 2 años
• Se actualizan con cada visita

Cookies de Marketing:
• Duración: Hasta 1 año
• Se pueden eliminar manualmente

Puede eliminar las cookies en cualquier momento a través de la configuración de su navegador.`
    },
    {
      id: '9',
      title: 'Seguridad y Protección de Datos',
      icon: Lock,
      content: `Protegemos la información recopilada a través de cookies:

Medidas de Seguridad:
• Cifrado de datos en tránsito
• Almacenamiento seguro de información
• Acceso restringido a datos recopilados
• Monitoreo continuo de seguridad

Protección de Privacidad:
• No utilizamos cookies para identificar personalmente a los usuarios
• Los datos se agregan y anonimizan cuando es posible
• Cumplimos con la Ley 1581 de 2012 de Protección de Datos Personales
• Respetamos su privacidad y derechos

Limitaciones de Uso:
• Solo utilizamos cookies para los fines descritos en esta política
• No compartimos información de cookies con terceros sin su consentimiento
• No utilizamos cookies para publicidad invasiva
• Respetamos sus preferencias de privacidad

Para más información sobre cómo protegemos sus datos, consulte nuestra Política de Privacidad.`
    },
    {
      id: '10',
      title: 'Actualizaciones de esta Política',
      icon: FileText,
      content: `Podemos actualizar esta Política de Cookies periódicamente para reflejar:

• Cambios en las cookies que utilizamos
• Actualizaciones en la normativa aplicable
• Mejoras en nuestros servicios
• Cambios en las prácticas de la industria

Notificación de Cambios:

Le notificaremos sobre cambios materiales mediante:
• Publicación destacada en nuestro sitio web
• Actualización de la fecha de "Última actualización"
• Notificación por correo electrónico(si tenemos su dirección)
• Banner o aviso en el sitio web

Revisión Periódica:

Le recomendamos revisar esta política periódicamente para estar informado sobre cómo utilizamos las cookies.

La fecha de la última actualización se indica al inicio de este documento.

Si tiene preguntas sobre cambios en esta política, puede contactarnos en cualquier momento.`
    },
    {
      id: '11',
      title: 'Normativa Aplicable',
      icon: Shield,
      content: `Esta Política de Cookies se rige por las siguientes normativas:

Normativa Colombiana:
• Ley 1581 de 2012 - Protección de Datos Personales
• Decreto 1377 de 2013 - Reglamentación de la Ley 1581
• Resoluciones de la Superintendencia de Industria y Comercio(SIC)

Normativa Internacional:
• Directiva ePrivacy(2002 / 58 / CE) - Directiva sobre privacidad electrónica
• Reglamento General de Protección de Datos(RGPD) - Para usuarios de la UE
• Recomendaciones del Grupo de Trabajo del Artículo 29

Cumplimiento:

Nos comprometemos a cumplir con todas las normativas aplicables relacionadas con el uso de cookies y la protección de datos personales.

Si tiene inquietudes sobre nuestro cumplimiento, puede contactarnos o presentar una queja ante la Superintendencia de Industria y Comercio(SIC).`
    },
    {
      id: '12',
      title: 'Contacto y Preguntas',
      icon: Eye,
      content: `Si tiene preguntas sobre nuestra Política de Cookies, puede contactarnos:

Información de Contacto:

HS Contadores Públicos S.A.S.
  Dirección: Carrera 23 #19 - 20, Oficina 301, Centro Comercial, Manizales, Caldas, Colombia
Teléfono: +57(300) 888 - 9000
Email: cookies @hscontadores.co
Email General: contacto @hscontadores.co

Horario de Atención:
Lunes a Viernes: 8:00 AM - 6:00 PM
Sábados: 9:00 AM - 1:00 PM

Temas que Podemos Ayudarle:
• Explicación sobre tipos de cookies utilizadas
• Asistencia para gestionar sus preferencias de cookies
• Preguntas sobre privacidad y protección de datos
• Solicitudes relacionadas con sus derechos de datos
• Reporte de problemas técnicos relacionados con cookies

Responderemos a su consulta en un plazo máximo de 10 días hábiles.`
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
              <IconBox icon={Cookie} variant="gold" size="lg" />
              <div>
                <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white mb-2">
                  Política de <span className="text-[#D4AF37] font-serif-premium">Cookies</span>
                </h1>
                <p className="text-white/70 text-sm sm:text-base">
                  Información sobre el uso de cookies en nuestro sitio web
                </p>
                <p className="text-white/50 text-xs sm:text-sm mt-2">
                  Última actualización: {new Date().toLocaleDateString('es-CO', { year: 'numeric', month: 'long', day: 'numeric' })}
                </p>
              </div>
            </div>

            <div className="bg-[#1A1A1A] border border-[#D4AF37]/20 rounded-xl sm:rounded-2xl p-4 sm:p-6">
              <p className="text-white/80 text-sm sm:text-base leading-relaxed mb-4">
                Esta política explica qué son las cookies, cómo las utilizamos en nuestro sitio web, qué tipos de cookies empleamos,
                la información que recopilamos mediante cookies y cómo puede gestionar sus preferencias de cookies.
              </p>
              <div className="flex flex-wrap items-center gap-3 sm:gap-4">
                <div className="flex items-center space-x-2 text-[#D4AF37] text-xs sm:text-sm">
                  <CheckCircle2 size={16} />
                  <span className="font-semibold">Control Total de Cookies</span>
                </div>
                <div className="flex items-center space-x-2 text-[#D4AF37] text-xs sm:text-sm">
                  <CheckCircle2 size={16} />
                  <span className="font-semibold">Transparencia Completa</span>
                </div>
                <div className="flex items-center space-x-2 text-[#D4AF37] text-xs sm:text-sm">
                  <CheckCircle2 size={16} />
                  <span className="font-semibold">Cumplimiento Normativo</span>
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
                id={`section - ${section.id} `}
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
                ¿Tiene Preguntas sobre Cookies?
              </h3>
              <p className="text-white/70 mb-6 sm:mb-8 text-sm sm:text-base">
                Nuestro equipo está disponible para ayudarle a entender cómo utilizamos las cookies y cómo puede gestionar sus preferencias.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center space-y-3 sm:space-y-0 sm:space-x-4">
                <Button
                  variant="primary"
                  size="md"
                  href="mailto:cookies@hscontadores.co"
                  className="w-full sm:w-auto"
                >
                  Contactar sobre Cookies
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
                  Gestionar Preferencias
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

export default CookiesPolicy;


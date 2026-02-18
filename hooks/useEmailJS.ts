import { useState } from 'react';
import emailjs from '@emailjs/browser';

interface EmailParams {
  company_name: string;
  user_email: string;
  sector: string;
  service: string;
  description: string;
  recaptcha_token?: string;
}

// Rate limiting: máximo 3 envíos por minuto
const RATE_LIMIT_KEY = 'emailjs_rate_limit';
const RATE_LIMIT_COUNT_KEY = 'emailjs_rate_limit_count';
const RATE_LIMIT_WINDOW = 60000; // 1 minuto en milisegundos
const MAX_REQUESTS_PER_WINDOW = 3;

const checkRateLimit = (): { allowed: boolean; remainingTime?: number } => {
  const now = Date.now();
  const lastSent = localStorage.getItem(RATE_LIMIT_KEY);
  const count = parseInt(localStorage.getItem(RATE_LIMIT_COUNT_KEY) || '0');

  if (!lastSent) {
    // Primera vez, permitir
    localStorage.setItem(RATE_LIMIT_KEY, now.toString());
    localStorage.setItem(RATE_LIMIT_COUNT_KEY, '1');
    return { allowed: true };
  }

  const timeSinceLastSent = now - parseInt(lastSent);

  if (timeSinceLastSent > RATE_LIMIT_WINDOW) {
    // Ventana de tiempo expirada, resetear
    localStorage.setItem(RATE_LIMIT_KEY, now.toString());
    localStorage.setItem(RATE_LIMIT_COUNT_KEY, '1');
    return { allowed: true };
  }

  if (count >= MAX_REQUESTS_PER_WINDOW) {
    // Límite alcanzado
    const remainingTime = Math.ceil((RATE_LIMIT_WINDOW - timeSinceLastSent) / 1000);
    return { allowed: false, remainingTime };
  }

  // Incrementar contador
  localStorage.setItem(RATE_LIMIT_COUNT_KEY, (count + 1).toString());
  return { allowed: true };
};

export const useEmailJS = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // Inicializar EmailJS con Public Key
  const initEmailJS = () => {
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;
    if (!publicKey) {
      throw new Error('VITE_EMAILJS_PUBLIC_KEY no está configurada');
    }
    emailjs.init(publicKey);
  };

  const sendContactEmail = async (params: EmailParams) => {
    setLoading(true);
    setError(null);

    // Verificar rate limiting
    const rateLimitCheck = checkRateLimit();
    if (!rateLimitCheck.allowed) {
      const errorMessage = `Por favor espere ${rateLimitCheck.remainingTime} segundos antes de enviar otro mensaje. Esto previene el spam y garantiza un mejor servicio.`;
      setError(errorMessage);
      setLoading(false);
      return { success: false, error: errorMessage };
    }

    try {
      initEmailJS();

      const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
      const templateIdCompany = import.meta.env.VITE_EMAILJS_TEMPLATE_ID_COMPANY;
      const templateIdConfirmation = import.meta.env.VITE_EMAILJS_TEMPLATE_ID_CONFIRMATION;

      if (!serviceId || !templateIdCompany || !templateIdConfirmation) {
        throw new Error('Configuración de EmailJS incompleta. Verifique las variables de entorno.');
      }

      // Preparar datos con fecha
      const templateParams = {
        ...params,
        date: new Date().toLocaleString('es-CO', {
          year: 'numeric',
          month: 'long',
          day: 'numeric',
          hour: '2-digit',
          minute: '2-digit'
        }),
        to_email: import.meta.env.VITE_CONTACT_EMAIL || 'contacto@hscontadores.co'
      };

      // Enviar email a la empresa
      await emailjs.send(
        serviceId,
        templateIdCompany,
        templateParams
      );

      // Enviar email de confirmación al usuario
      await emailjs.send(
        serviceId,
        templateIdConfirmation,
        {
          company_name: params.company_name,
          user_email: params.user_email,
          to_email: params.user_email
        }
      );

      setLoading(false);
      return { success: true };
    } catch (err: any) {
      const errorMessage = err.text || err.message || 'Error al enviar el email';
      setError(errorMessage);
      setLoading(false);
      console.error('Error sending email:', err);
      return { success: false, error: errorMessage };
    }
  };

  return {
    sendContactEmail,
    loading,
    error
  };
};


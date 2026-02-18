# Spike: Soluciones para Envío de Emails desde React (Sin Backend)

## 📋 Resumen Ejecutivo

Este documento investiga y propone soluciones para enviar emails desde el formulario de contacto "Inicie su Transformación" utilizando únicamente React, sin necesidad de un backend propio.

**Objetivo:** Implementar envío de emails funcional desde el frontend sin requerir servidor backend.

**Fecha:** 17 de febrero de 2026

**Recomendación Final:** **EmailJS** - La solución más balanceada entre facilidad, seguridad y funcionalidad.

---

## 🎯 Contexto y Requisitos

### Requisitos del Formulario
- Capturar: Nombre de compañía, email, sector, servicio, descripción
- Enviar email a: `contacto@hscontadores.co`
- Enviar confirmación al usuario
- Manejar errores elegantemente
- Mantener diseño y UX actual

### Restricciones
- ✅ Solo frontend (React/Vite)
- ✅ Sin backend propio
- ✅ Implementación rápida
- ✅ Costo razonable o gratuito
- ⚠️ Seguridad básica (no exponer credenciales sensibles)

---

## 🔍 Opciones Evaluadas

### Opción 1: EmailJS ⭐ (RECOMENDADA)

**Descripción:** Servicio que permite enviar emails directamente desde el frontend usando templates y configuración simple.

**Ventajas:**
- ✅ Implementación extremadamente simple (15-20 minutos)
- ✅ No requiere backend
- ✅ Plan gratuito generoso (200 emails/mes)
- ✅ Templates HTML personalizables
- ✅ Soporte para múltiples servicios de email (Gmail, Outlook, etc.)
- ✅ Documentación excelente
- ✅ SDK oficial para React
- ✅ Manejo de errores integrado
- ✅ Protección contra spam básica

**Desventajas:**
- ⚠️ API key visible en el frontend (pero limitada por dominio)
- ⚠️ Límites en plan gratuito
- ⚠️ Dependencia de servicio externo
- ⚠️ Costo en planes superiores ($15-50/mes)

**Costo:**
- Free: 200 emails/mes
- Starter: $15/mes - 1,000 emails
- Professional: $50/mes - 10,000 emails

**Calificación:** ⭐⭐⭐⭐⭐ (5/5)

---

### Opción 2: Formspree

**Descripción:** Servicio especializado en manejo de formularios que envía emails automáticamente.

**Ventajas:**
- ✅ Muy fácil de configurar
- ✅ Plan gratuito (50 submissions/mes)
- ✅ Protección anti-spam integrada
- ✅ Webhooks disponibles
- ✅ Integración con Zapier
- ✅ No requiere código adicional

**Desventajas:**
- ⚠️ Menos control sobre el formato del email
- ⚠️ Límites más restrictivos en plan gratuito
- ⚠️ Menos personalización que EmailJS

**Costo:**
- Free: 50 submissions/mes
- Pro: $20/mes - 1,000 submissions

**Calificación:** ⭐⭐⭐⭐ (4/5)

---

### Opción 3: Web3Forms

**Descripción:** Servicio gratuito y open-source para envío de formularios.

**Ventajas:**
- ✅ Completamente gratuito
- ✅ Open source
- ✅ Sin límites de uso
- ✅ Fácil de implementar
- ✅ No requiere cuenta

**Desventajas:**
- ⚠️ Menos control sobre templates
- ⚠️ Menos características avanzadas
- ⚠️ Posiblemente menos confiable a largo plazo

**Costo:** Gratis

**Calificación:** ⭐⭐⭐ (3/5)

---

### Opción 4: SendGrid API (Frontend Directo)

**Descripción:** Usar SendGrid directamente desde el frontend con API key.

**Ventajas:**
- ✅ Muy confiable (Twilio)
- ✅ Excelente deliverability
- ✅ Analytics avanzados

**Desventajas:**
- ❌ **NO RECOMENDADO** - Exponer API key en frontend es inseguro
- ❌ API key puede ser robada y usada maliciosamente
- ❌ Violación de mejores prácticas de seguridad

**Costo:** $15/mes (40,000 emails)

**Calificación:** ⭐ (1/5) - No recomendado por seguridad

---

### Opción 5: Mailgun API (Frontend Directo)

**Descripción:** Similar a SendGrid, usar Mailgun desde frontend.

**Ventajas:**
- ✅ Buena deliverability
- ✅ API robusta

**Desventajas:**
- ❌ **NO RECOMENDADO** - Mismo problema de seguridad que SendGrid
- ❌ Exponer credenciales en frontend

**Costo:** $35/mes (50,000 emails)

**Calificación:** ⭐ (1/5) - No recomendado por seguridad

---

### Opción 6: FormSubmit

**Descripción:** Servicio simple que envía emails directamente desde formularios HTML.

**Ventajas:**
- ✅ Muy simple
- ✅ Gratis
- ✅ No requiere JavaScript

**Desventajas:**
- ⚠️ Menos control
- ⚠️ Menos características
- ⚠️ Posiblemente menos confiable

**Costo:** Gratis

**Calificación:** ⭐⭐⭐ (3/5)

---

## 🏆 Recomendación: EmailJS

**Razones:**
1. Balance perfecto entre facilidad y funcionalidad
2. Plan gratuito suficiente para empezar
3. Excelente documentación y soporte
4. Templates personalizables
5. SDK oficial para React
6. Seguridad razonable (API key limitada por dominio)

---

## 💻 Implementación con EmailJS

### Paso 1: Crear Cuenta y Configurar EmailJS

1. Ir a [EmailJS.com](https://www.emailjs.com/)
2. Crear cuenta gratuita
3. Verificar email

### Paso 2: Configurar Servicio de Email

1. En el dashboard, ir a **Email Services**
2. Hacer clic en **Add New Service**
3. Seleccionar proveedor:
   - **Gmail** (recomendado si tienes Gmail)
   - **Outlook** (si usas Outlook)
   - **Custom SMTP** (para cualquier servidor)
4. Conectar cuenta:
   - Para Gmail: Autorizar acceso
   - Para SMTP: Ingresar credenciales
5. Guardar el **Service ID** generado

### Paso 4: Crear Email Template

1. Ir a **Email Templates**
2. Hacer clic en **Create New Template**
3. Configurar:

**Template para la Empresa:**
- **Template Name:** `contact_form_company`
- **Subject:** `Nueva Consulta: {{company_name}} - {{service}}`
- **Content (HTML):**

```html
<!DOCTYPE html>
<html>
<head>
  <style>
    body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
    .container { max-width: 600px; margin: 0 auto; padding: 20px; }
    .header { background-color: #D4AF37; color: #000; padding: 20px; text-align: center; }
    .content { background-color: #f9f9f9; padding: 20px; }
    .field { margin-bottom: 15px; }
    .label { font-weight: bold; color: #000; }
    .value { color: #333; }
  </style>
</head>
<body>
  <div class="container">
    <div class="header">
      <h2>Nueva Consulta desde el Sitio Web</h2>
    </div>
    <div class="content">
      <div class="field">
        <div class="label">Compañía:</div>
        <div class="value">{{company_name}}</div>
      </div>
      <div class="field">
        <div class="label">Email Corporativo:</div>
        <div class="value">{{user_email}}</div>
      </div>
      <div class="field">
        <div class="label">Sector/Industria:</div>
        <div class="value">{{sector}}</div>
      </div>
      <div class="field">
        <div class="label">Servicio Requerido:</div>
        <div class="value">{{service}}</div>
      </div>
      <div class="field">
        <div class="label">Descripción del Requerimiento:</div>
        <div class="value">{{description}}</div>
      </div>
      <div class="field">
        <div class="label">Fecha:</div>
        <div class="value">{{date}}</div>
      </div>
    </div>
  </div>
</body>
</html>
```

**Template para Confirmación al Usuario:**
- **Template Name:** `contact_form_confirmation`
- **Subject:** `Confirmación de Recepción - HS Contadores`
- **Content (HTML):**

```html
<!DOCTYPE html>
<html>
<head>
  <style>
    body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
    .container { max-width: 600px; margin: 0 auto; padding: 20px; }
    .header { background-color: #D4AF37; color: #000; padding: 20px; text-align: center; }
    .content { background-color: #f9f9f9; padding: 20px; }
  </style>
</head>
<body>
  <div class="container">
    <div class="header">
      <h2>Confirmación de Recepción</h2>
    </div>
    <div class="content">
      <p>Estimado/a {{company_name}},</p>
      <p>Hemos recibido su consulta correctamente. Nuestro equipo de consultores senior revisará su requerimiento y se pondrá en contacto con usted en un plazo máximo de 24 horas.</p>
      <p>Gracias por confiar en HS Contadores Públicos.</p>
      <p>Saludos cordiales,<br>Equipo HS Contadores</p>
    </div>
  </div>
</html>
```

4. Guardar ambos templates
5. Anotar los **Template ID** generados

### Paso 5: Obtener Public Key

1. Ir a **Account** > **General**
2. Copiar el **Public Key** (también llamado User ID)

### Paso 6: Configurar Restricciones de Dominio (Seguridad)

1. Ir a **Account** > **Security**
2. Agregar dominios permitidos:
   - `localhost` (para desarrollo)
   - `hscontadores.co` (producción)
   - `www.hscontadores.co` (producción)
3. Esto previene uso no autorizado de tu API key

### Paso 7: Instalar EmailJS y reCAPTCHA en el Proyecto

```bash
npm install @emailjs/browser react-google-recaptcha-v3
```

### Paso 8: Crear Hook Personalizado (Opcional pero Recomendado)

**hooks/useEmailJS.ts:**

```typescript
import { useState } from 'react';
import emailjs from '@emailjs/browser';

interface EmailParams {
  company_name: string;
  user_email: string;
  sector: string;
  service: string;
  description: string;
}

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

    try {
      initEmailJS();

      const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
      const templateIdCompany = import.meta.env.VITE_EMAILJS_TEMPLATE_ID_COMPANY;
      const templateIdConfirmation = import.meta.env.VITE_EMAILJS_TEMPLATE_ID_CONFIRMATION;

      if (!serviceId || !templateIdCompany || !templateIdConfirmation) {
        throw new Error('Configuración de EmailJS incompleta');
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
      setError(err.message || 'Error al enviar el email');
      setLoading(false);
      return { success: false, error: err.message };
    }
  };

  return {
    sendContactEmail,
    loading,
    error
  };
};
```

### Paso 8: Configurar Variables de Entorno

**`.env` (crear en raíz del proyecto):**

```env
VITE_EMAILJS_PUBLIC_KEY=tu_public_key_aqui
VITE_EMAILJS_SERVICE_ID=tu_service_id_aqui
VITE_EMAILJS_TEMPLATE_ID_COMPANY=tu_template_id_company_aqui
VITE_EMAILJS_TEMPLATE_ID_CONFIRMATION=tu_template_id_confirmation_aqui
VITE_CONTACT_EMAIL=contacto@hscontadores.co
VITE_RECAPTCHA_SITE_KEY=tu_recaptcha_site_key_aqui
```

**⚠️ IMPORTANTE:** Agregar a `.gitignore`:
```
.env
.env.local
```

### Paso 10: Actualizar Contact.tsx

```typescript
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useEmailJS } from '../hooks/useEmailJS';
// ... otros imports

const Contact: React.FC = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { sendContactEmail, loading, error } = useEmailJS();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    const form = e.target as HTMLFormElement;
    const formData = {
      company_name: (form.querySelector('[name="companyName"]') as HTMLInputElement)?.value || '',
      user_email: (form.querySelector('[name="email"]') as HTMLInputElement)?.value || '',
      sector: (form.querySelector('[name="sector"]') as HTMLSelectElement)?.value || '',
      service: (form.querySelector('[name="service"]') as HTMLSelectElement)?.value || '',
      description: (form.querySelector('[name="description"]') as HTMLTextAreaElement)?.value || ''
    };

    // Validación básica
    if (!formData.company_name || !formData.user_email || !formData.sector || !formData.service) {
      alert('Por favor complete todos los campos requeridos');
      return;
    }

    // Validar email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.user_email)) {
      alert('Por favor ingrese un email válido');
      return;
    }

    const result = await sendContactEmail(formData);

    if (result.success) {
      setIsSubmitted(true);
    } else {
      alert(`Error al enviar el formulario: ${result.error || 'Por favor intente más tarde'}`);
    }
  };

  // ... resto del componente, usar `loading` en lugar de estado local
```

**Actualizar el formulario para incluir `name` attributes:**

```typescript
<input 
  required 
  type="text" 
  name="companyName"
  placeholder="Corporativo S.A." 
  className="..."
/>

<input 
  required 
  type="email" 
  name="email"
  placeholder="directivo@empresa.com" 
  className="..."
/>

<select 
  name="sector"
  className="..."
>
  {/* opciones */}
</select>

<select 
  name="service"
  className="..."
>
  {/* opciones */}
</select>

<textarea 
  rows={4} 
  name="description"
  placeholder="¿Qué desafíos financieros busca resolver?" 
  className="..."
/>
```

---

## 🔒 Consideraciones de Seguridad

### ✅ Buenas Prácticas Implementadas

1. **Restricción de Dominio:** EmailJS permite limitar el uso de la API key a dominios específicos
2. **Variables de Entorno:** Las credenciales están en `.env` y no se commitean
3. **Validación Frontend:** Validación básica antes de enviar
4. **Rate Limiting:** EmailJS tiene protección básica contra spam

### ⚠️ Limitaciones de Seguridad

1. **API Key Visible:** La API key está en el código frontend (aunque limitada por dominio)
2. **Sin Autenticación:** Cualquiera puede enviar emails si tiene acceso al código
3. **Sin Rate Limiting Avanzado:** Depende de EmailJS para prevenir abuso

### 🛡️ Recomendaciones Adicionales

1. **Agregar reCAPTCHA v3:**
   ```bash
   npm install react-google-recaptcha-v3
   ```

2. **Implementar Rate Limiting Local:**
   ```typescript
   // Usar localStorage para limitar envíos
   const lastSent = localStorage.getItem('lastEmailSent');
   const now = Date.now();
   if (lastSent && now - parseInt(lastSent) < 60000) {
     alert('Por favor espere un momento antes de enviar otro mensaje');
     return;
   }
   localStorage.setItem('lastEmailSent', now.toString());
   ```

3. **Validación de Email en Backend (Futuro):**
   - Cuando se implemente backend, mover validación allí
   - Agregar verificación de dominio de email

---

## 📊 Comparación de Soluciones

| Característica | EmailJS | Formspree | Web3Forms | SendGrid* |
|---------------|---------|-----------|-----------|-----------|
| Facilidad | ⭐⭐⭐⭐⭐ | ⭐⭐⭐⭐⭐ | ⭐⭐⭐⭐ | ⭐⭐ |
| Costo | Gratis/$$ | Gratis/$$ | Gratis | $$ |
| Personalización | ⭐⭐⭐⭐⭐ | ⭐⭐⭐ | ⭐⭐⭐ | ⭐⭐⭐⭐⭐ |
| Seguridad | ⭐⭐⭐⭐ | ⭐⭐⭐⭐ | ⭐⭐⭐ | ⭐ |
| Confiabilidad | ⭐⭐⭐⭐⭐ | ⭐⭐⭐⭐⭐ | ⭐⭐⭐ | ⭐⭐⭐⭐⭐ |
| Documentación | ⭐⭐⭐⭐⭐ | ⭐⭐⭐⭐ | ⭐⭐⭐ | ⭐⭐⭐⭐⭐ |

*No recomendado para uso directo desde frontend

---

## 🚀 Plan de Implementación

### Fase 1: Setup Inicial (30 min)
- [ ] Crear cuenta en EmailJS
- [ ] Configurar servicio de email (Gmail/SMTP)
- [ ] Crear templates de email
- [ ] Obtener credenciales (Public Key, Service ID, Template IDs)

**Nota:** Una vez completada la Fase 1, configurar las variables de entorno en un archivo `.env` basado en `.env.example`

### Fase 2: Integración (45 min)
- [x] Instalar `@emailjs/browser` (requiere ejecutar: `npm install @emailjs/browser`)
- [x] Crear hook `useEmailJS` (creado en `hooks/useEmailJS.ts`)
- [x] Configurar variables de entorno (creado `.env.example` como referencia)
- [x] Actualizar `Contact.tsx` (integrado con hook y validaciones)
- [x] Agregar `name` attributes a inputs (todos los campos tienen `name` ahora)

### Fase 3: Testing (30 min)
- [ ] Probar envío desde formulario
- [ ] Verificar recepción de emails
- [ ] Probar manejo de errores
- [ ] Validar formato de emails

### Fase 4: Mejoras (Opcional, 1-2 horas)
- [x] Agregar reCAPTCHA v3 (integrado con useReCaptchaHook y ReCaptchaProvider en App.tsx)
- [x] Implementar rate limiting local (implementado en useEmailJS: máximo 3 envíos por minuto)
- [x] Mejorar mensajes de error (implementado con componente Toast y hook useToast)
- [ ] Agregar analytics de envíos

### Fase 5: Producción (30 min)
- [ ] Configurar variables de entorno en hosting
- [ ] Agregar dominio a restricciones de EmailJS
- [ ] Testing en producción
- [ ] Monitoreo inicial

**Tiempo Total Estimado:** 2.5 - 4 horas

---

## 🚂 Despliegue en Railway

Railway es una plataforma de hosting moderna que facilita el despliegue de aplicaciones React/Vite con configuración mínima.

### Requisitos Previos

- Cuenta en [Railway.app](https://railway.app/)
- Repositorio Git (GitHub, GitLab, o Bitbucket)
- Proyecto configurado con Vite

### Paso 1: Preparar el Proyecto para Railway

#### 1.1 Verificar `package.json`

Asegúrate de que `package.json` tenga los scripts correctos:

```json
{
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "preview": "vite preview"
  }
}
```

#### 1.2 Crear `railway.json` (Opcional)

Crea un archivo `railway.json` en la raíz del proyecto para configurar el build:

```json
{
  "$schema": "https://railway.app/railway.schema.json",
  "build": {
    "builder": "NIXPACKS",
    "buildCommand": "npm run build"
  },
  "deploy": {
    "startCommand": "npx serve -s dist -l $PORT",
    "restartPolicyType": "ON_FAILURE",
    "restartPolicyMaxRetries": 10
  }
}
```

**Nota:** Railway detecta automáticamente proyectos Vite, pero este archivo permite personalización.

#### 1.3 Instalar `serve` para Producción

Railway necesita un servidor para servir los archivos estáticos. Instala `serve`:

```bash
npm install --save-dev serve
```

El script `start` ya está configurado en `package.json`:

```json
{
  "scripts": {
    "start": "serve -s dist -l $PORT"
  }
}
```

**Nota:** El archivo `railway.json` ya está creado en el proyecto para configurar Railway automáticamente.

#### 1.4 Verificar `.gitignore`

Asegúrate de que `.gitignore` incluya:

```
.env
.env.local
.env.production
dist/
node_modules/
```

### Paso 2: Conectar Proyecto a Railway

#### 2.1 Crear Nuevo Proyecto

1. Iniciar sesión en [Railway.app](https://railway.app/)
2. Hacer clic en **"New Project"**
3. Seleccionar **"Deploy from GitHub repo"** (o GitLab/Bitbucket)
4. Autorizar Railway para acceder a tu repositorio
5. Seleccionar el repositorio `hs-contadores`
6. Railway detectará automáticamente que es un proyecto Vite

#### 2.2 Configurar Build Settings

Railway debería detectar automáticamente:
- **Build Command:** `npm run build`
- **Start Command:** `npx serve -s dist -l $PORT`

Si no detecta correctamente, configurar manualmente en **Settings** > **Build & Deploy**.

### Paso 3: Configurar Variables de Entorno

#### 3.1 Agregar Variables en Railway

1. En el dashboard de Railway, ir a tu proyecto
2. Hacer clic en la pestaña **"Variables"**
3. Agregar las siguientes variables de entorno:

```
VITE_EMAILJS_PUBLIC_KEY=tu_public_key_aqui
VITE_EMAILJS_SERVICE_ID=tu_service_id_aqui
VITE_EMAILJS_TEMPLATE_ID_COMPANY=tu_template_id_company_aqui
VITE_EMAILJS_TEMPLATE_ID_CONFIRMATION=tu_template_id_confirmation_aqui
VITE_CONTACT_EMAIL=contacto@hscontadores.co
VITE_RECAPTCHA_SITE_KEY=tu_recaptcha_site_key_aqui
```

#### 3.2 Obtener Valores de Producción

**EmailJS:**
- `VITE_EMAILJS_PUBLIC_KEY`: Account > General > Public Key
- `VITE_EMAILJS_SERVICE_ID`: Email Services > Service ID
- `VITE_EMAILJS_TEMPLATE_ID_COMPANY`: Email Templates > Template ID
- `VITE_EMAILJS_TEMPLATE_ID_CONFIRMATION`: Email Templates > Template ID

**reCAPTCHA:**
- `VITE_RECAPTCHA_SITE_KEY`: [Google reCAPTCHA Admin](https://www.google.com/recaptcha/admin) > Site Key

**⚠️ IMPORTANTE:** 
- No usar valores de desarrollo en producción
- Verificar que las credenciales sean correctas
- Railway reconstruirá automáticamente al cambiar variables

### Paso 4: Configurar Dominio Personalizado

#### 4.1 Agregar Dominio en Railway

1. En Railway, ir a **Settings** > **Networking**
2. Hacer clic en **"Custom Domain"**
3. Agregar dominio: `hscontadores.co`
4. Agregar dominio alternativo: `www.hscontadores.co`
5. Railway proporcionará registros DNS a configurar

#### 4.2 Configurar DNS

Configurar en tu proveedor de DNS (ej: Cloudflare, Namecheap):

**Opción A: CNAME (Recomendado)**
```
Tipo: CNAME
Nombre: @
Valor: [proporcionado por Railway]
TTL: Auto
```

```
Tipo: CNAME
Nombre: www
Valor: [proporcionado por Railway]
TTL: Auto
```

**Opción B: A Record**
```
Tipo: A
Nombre: @
Valor: [IP proporcionada por Railway]
TTL: Auto
```

#### 4.3 Verificar SSL

Railway proporciona SSL automático vía Let's Encrypt. Esperar 5-10 minutos después de configurar DNS para que se active.

### Paso 5: Actualizar Restricciones de EmailJS

#### 5.1 Agregar Dominio de Producción

1. Ir a [EmailJS Dashboard](https://dashboard.emailjs.com/)
2. Ir a **Account** > **Security**
3. Agregar dominios permitidos:
   - `hscontadores.co`
   - `www.hscontadores.co`
   - `*.railway.app` (dominio temporal de Railway)
4. Guardar cambios

#### 5.2 Verificar reCAPTCHA

1. Ir a [Google reCAPTCHA Admin](https://www.google.com/recaptcha/admin)
2. Seleccionar tu sitio reCAPTCHA
3. En **Domains**, agregar:
   - `hscontadores.co`
   - `www.hscontadores.co`
   - `*.railway.app`
4. Guardar cambios

### Paso 6: Desplegar

#### 6.1 Despliegue Automático

Railway despliega automáticamente cuando:
- Haces push a la rama principal (main/master)
- Cambias variables de entorno
- Haces deploy manual desde el dashboard

#### 6.2 Despliegue Manual

1. En Railway dashboard, hacer clic en **"Deploy"**
2. Seleccionar rama y commit
3. Railway construirá y desplegará automáticamente

#### 6.3 Monitorear Build

1. Ver logs en tiempo real en Railway dashboard
2. Verificar que el build sea exitoso
3. Revisar logs de deployment

### Paso 7: Verificar Despliegue

#### 7.1 Testing Post-Deployment

1. **Verificar sitio web:**
   - Abrir `https://hscontadores.co`
   - Verificar que carga correctamente
   - Verificar SSL (candado verde)

2. **Probar formulario de contacto:**
   - Completar formulario
   - Enviar
   - Verificar recepción de email en `contacto@hscontadores.co`
   - Verificar email de confirmación al usuario

3. **Verificar reCAPTCHA:**
   - Abrir consola del navegador
   - Verificar que no hay errores de reCAPTCHA
   - Probar envío de formulario

4. **Verificar rate limiting:**
   - Intentar enviar múltiples formularios rápidamente
   - Verificar que se aplica el límite

#### 7.2 Verificar Variables de Entorno

En Railway, verificar que todas las variables estén configuradas:
- ✅ `VITE_EMAILJS_PUBLIC_KEY`
- ✅ `VITE_EMAILJS_SERVICE_ID`
- ✅ `VITE_EMAILJS_TEMPLATE_ID_COMPANY`
- ✅ `VITE_EMAILJS_TEMPLATE_ID_CONFIRMATION`
- ✅ `VITE_CONTACT_EMAIL`
- ✅ `VITE_RECAPTCHA_SITE_KEY`

### Paso 8: Configurar Monitoreo

#### 8.1 Railway Metrics

Railway proporciona métricas básicas:
- Uso de CPU/Memoria
- Tráfico de red
- Logs en tiempo real

#### 8.2 EmailJS Dashboard

Monitorear en [EmailJS Dashboard](https://dashboard.emailjs.com/):
- Emails enviados este mes
- Tasa de éxito
- Errores (si los hay)

#### 8.3 Alertas (Opcional)

Configurar alertas en Railway:
1. Ir a **Settings** > **Notifications**
2. Configurar alertas para:
   - Build failures
   - Deployment errors
   - High resource usage

### Paso 9: Optimizaciones Post-Deployment

#### 9.1 Configurar Cache Headers

Railway sirve archivos estáticos. Para optimizar cache, crear `public/_headers` (si usas Cloudflare) o configurar en Railway:

```json
{
  "headers": {
    "/assets/*": {
      "Cache-Control": "public, max-age=31536000, immutable"
    }
  }
}
```

#### 9.2 Verificar Build Size

Verificar que el build no sea excesivamente grande:
```bash
npm run build
du -sh dist/
```

Si es muy grande (>5MB), considerar:
- Code splitting
- Lazy loading
- Optimización de imágenes

### Troubleshooting Común

#### Problema: Build Falla

**Solución:**
1. Verificar logs en Railway
2. Verificar que todas las dependencias estén en `package.json`
3. Verificar que `node_modules` no esté en `.gitignore` (debe estar)
4. Verificar versión de Node.js (Railway usa Node 18+ por defecto)

#### Problema: Variables de Entorno No Funcionan

**Solución:**
1. Verificar que las variables empiecen con `VITE_`
2. Verificar que estén en la pestaña **Variables** de Railway
3. Hacer redeploy después de agregar variables
4. Verificar en consola del navegador que las variables estén disponibles

#### Problema: Formulario No Envía Emails

**Solución:**
1. Verificar que EmailJS esté configurado correctamente
2. Verificar restricciones de dominio en EmailJS
3. Revisar consola del navegador para errores
4. Verificar que las variables de entorno estén correctas
5. Probar desde localhost primero

#### Problema: reCAPTCHA No Funciona

**Solución:**
1. Verificar que `VITE_RECAPTCHA_SITE_KEY` esté configurada
2. Verificar que el dominio esté agregado en Google reCAPTCHA Admin
3. Verificar que el script de reCAPTCHA esté en `index.html`
4. Revisar consola del navegador para errores

#### Problema: Dominio No Resuelve

**Solución:**
1. Verificar configuración DNS (puede tardar hasta 48 horas)
2. Verificar que los registros DNS sean correctos
3. Usar herramienta como [DNS Checker](https://dnschecker.org/)
4. Verificar SSL en Railway dashboard

### Costos de Railway

**Plan Hobby (Gratis):**
- $5 de crédito mensual
- Suficiente para sitios pequeños/medianos
- Auto-sleep después de inactividad

**Plan Pro ($20/mes):**
- Sin límites de crédito
- Sin auto-sleep
- Mejor para producción

**Estimación de Costos:**
- Sitio estático pequeño: ~$0-5/mes
- Tráfico moderado: ~$10-20/mes
- Alto tráfico: ~$20-50/mes

### Checklist de Despliegue

- [ ] Proyecto conectado a Railway
- [ ] Variables de entorno configuradas
- [ ] Build exitoso
- [ ] Dominio personalizado configurado
- [ ] DNS configurado correctamente
- [ ] SSL activo
- [ ] EmailJS restricciones actualizadas
- [ ] reCAPTCHA dominios actualizados
- [ ] Formulario probado en producción
- [ ] Emails recibidos correctamente
- [ ] Monitoreo configurado

---

**Tiempo Estimado de Despliegue:** 45-60 minutos

---

## 💰 Análisis de Costos

### Escenario Conservador (100 emails/mes)
- **EmailJS Free:** ✅ Gratis (200 emails/mes)
- **Costo mensual:** $0

### Escenario Moderado (500 emails/mes)
- **EmailJS Starter:** $15/mes (1,000 emails/mes)
- **Costo mensual:** $15

### Escenario Alto Volumen (5,000 emails/mes)
- **EmailJS Professional:** $50/mes (10,000 emails/mes)
- **Costo mensual:** $50

**Comparación con Backend:**
- Hosting backend: $5-20/mes
- Gmail API: Gratis (con límites)
- **Total con backend:** $5-20/mes
- **Con EmailJS:** $0-50/mes según volumen

---

## 🧪 Testing

### Test Manual

1. **Test de Envío Básico:**
   - Completar formulario
   - Enviar
   - Verificar recepción en `contacto@hscontadores.co`
   - Verificar confirmación al usuario

2. **Test de Validación:**
   - Enviar sin completar campos requeridos
   - Verificar mensajes de error
   - Enviar con email inválido
   - Verificar validación

3. **Test de Errores:**
   - Desconectar internet
   - Intentar enviar
   - Verificar manejo de error

### Test Automatizado (Opcional)

```typescript
// __tests__/Contact.test.tsx
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import Contact from '../components/Contact';
import * as emailjs from '@emailjs/browser';

jest.mock('@emailjs/browser');

describe('Contact Form', () => {
  it('should send email successfully', async () => {
    (emailjs.send as jest.Mock).mockResolvedValue({ status: 200 });
    
    render(<Contact />);
    
    fireEvent.change(screen.getByPlaceholderText('Corporativo S.A.'), {
      target: { value: 'Test Company' }
    });
    // ... más cambios
    
    fireEvent.submit(screen.getByRole('form'));
    
    await waitFor(() => {
      expect(emailjs.send).toHaveBeenCalled();
    });
  });
});
```

---

## 📝 Alternativa Rápida: Formspree

Si se prefiere una solución aún más simple, aquí está la implementación con Formspree:

### Paso 1: Crear Cuenta
1. Ir a [Formspree.io](https://formspree.io/)
2. Crear cuenta gratuita
3. Crear nuevo formulario
4. Copiar el **Form ID** (ej: `xzbqwerty`)

### Paso 2: Actualizar Contact.tsx

```typescript
const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();
  setLoading(true);

  const form = e.target as HTMLFormElement;
  const formData = new FormData(form);

  try {
    const response = await fetch('https://formspree.io/f/xzbqwerty', {
      method: 'POST',
      body: formData,
      headers: {
        'Accept': 'application/json'
      }
    });

    if (response.ok) {
      setIsSubmitted(true);
    } else {
      const data = await response.json();
      alert('Error: ' + (data.error || 'Por favor intente más tarde'));
      setLoading(false);
    }
  } catch (error) {
    alert('Error al enviar el formulario');
    setLoading(false);
  }
};
```

**Ventaja:** Aún más simple, pero menos control sobre el formato del email.

---

## 🎯 Recomendación Final

### Para Implementación Inmediata: EmailJS
- ✅ Mejor balance funcionalidad/facilidad
- ✅ Templates personalizables
- ✅ Plan gratuito suficiente para empezar
- ✅ Fácil migración a backend en el futuro

### Para Solución Ultra-Rápida: Formspree
- ✅ Implementación en 10 minutos
- ✅ Menos personalización
- ✅ Plan gratuito más limitado

---

## 📚 Referencias

- [EmailJS Documentation](https://www.emailjs.com/docs/)
- [EmailJS React Integration](https://www.emailjs.com/docs/examples/reactjs/)
- [Formspree Documentation](https://help.formspree.io/)
- [Web3Forms](https://web3forms.com/)
- [reCAPTCHA v3](https://developers.google.com/recaptcha/docs/v3)
- [Railway Documentation](https://docs.railway.app/)
- [Railway Deployment Guide](https://docs.railway.app/deploy/builds)

---

## ⚠️ Notas Importantes

1. **Límites del Plan Gratuito:**
   - EmailJS: 200 emails/mes
   - Formspree: 50 submissions/mes
   - Monitorear uso para evitar exceder límites

2. **Migración Futura:**
   - Esta solución es perfecta para MVP
   - Cuando se necesite más control, migrar a backend
   - El código puede adaptarse fácilmente

3. **Backup Plan:**
   - Si EmailJS falla, tener Formspree como backup
   - O implementar backend como fallback

4. **Monitoreo:**
   - Revisar dashboard de EmailJS regularmente
   - Configurar alertas si se acerca al límite
   - Considerar upgrade antes de llegar al límite

---

**Autor:** Equipo de Desarrollo HS Contadores  
**Última actualización:** 17 de febrero de 2026

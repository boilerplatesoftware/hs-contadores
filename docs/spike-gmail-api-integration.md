# Spike: Integración de Formulario de Contacto con Gmail API

## 📋 Resumen Ejecutivo

Este documento describe la investigación y plan de implementación para conectar el formulario de contacto "Inicie su Transformación" con Gmail API, permitiendo el envío automático de emails cuando un usuario completa el formulario.

**Objetivo:** Enviar emails automáticamente desde el formulario de contacto a la dirección corporativa usando Gmail API de manera sencilla y segura.

**Fecha:** ${new Date().toLocaleDateString('es-CO', { year: 'numeric', month: 'long', day: 'numeric' })}

---

## 🎯 Contexto

El formulario de contacto actual en `components/Contact.tsx` tiene una función `handleSubmit` que simula el envío. Necesitamos implementar una solución real que:

1. Capture los datos del formulario
2. Envíe un email a `contacto@hscontadores.co` (o dirección configurada)
3. Envíe una copia de confirmación al usuario
4. Maneje errores de manera elegante

---

## 🔍 Opciones de Implementación

### Opción 1: Gmail API Directa (Recomendada para este spike)
**Ventajas:**
- Control total sobre el envío
- No requiere servicios de terceros
- Gratis hasta cierto límite
- Integración directa con Google Workspace

**Desventajas:**
- Requiere configuración OAuth 2.0
- Necesita backend para manejar credenciales de forma segura
- Límites de cuota diaria

### Opción 2: EmailJS (Alternativa más sencilla)
**Ventajas:**
- Implementación muy simple
- No requiere backend
- Configuración rápida

**Desventajas:**
- Servicio de terceros
- Límites en plan gratuito
- Menos control

**Decisión:** Implementaremos Gmail API con un enfoque híbrido usando un backend simple (Node.js/Express) para mayor seguridad.

---

## 📚 Configuración en Google Developers Console

### Paso 1: Crear Proyecto en Google Cloud Platform

1. Acceder a [Google Cloud Console](https://console.cloud.google.com/)
2. Crear un nuevo proyecto o seleccionar uno existente
3. Nombre del proyecto: `hs-contadores-contact-form`
4. Anotar el **Project ID** generado

### Paso 2: Habilitar Gmail API

1. En el menú lateral, ir a **APIs & Services** > **Library**
2. Buscar "Gmail API"
3. Hacer clic en **Gmail API**
4. Hacer clic en **Enable** (Habilitar)
5. Esperar confirmación de habilitación

### Paso 3: Configurar OAuth 2.0 Consent Screen

1. Ir a **APIs & Services** > **OAuth consent screen**
2. Seleccionar tipo de usuario:
   - **Internal** (si tienes Google Workspace)
   - **External** (si es cuenta personal)
3. Completar información:
   - **App name:** HS Contadores Contact Form
   - **User support email:** contacto@hscontadores.co
   - **Developer contact information:** contacto@hscontadores.co
4. Agregar scopes necesarios:
   - `https://www.googleapis.com/auth/gmail.send`
5. Agregar usuarios de prueba (si es External):
   - Agregar emails que puedan usar la app durante desarrollo
6. Guardar y continuar

### Paso 4: Crear Credenciales OAuth 2.0

1. Ir a **APIs & Services** > **Credentials**
2. Hacer clic en **+ CREATE CREDENTIALS** > **OAuth client ID**
3. Seleccionar tipo de aplicación:
   - **Web application** (para backend)
4. Configurar:
   - **Name:** HS Contadores Backend
   - **Authorized JavaScript origins:**
     - `http://localhost:3000` (desarrollo)
     - `https://hscontadores.co` (producción)
   - **Authorized redirect URIs:**
     - `http://localhost:3000/api/auth/callback` (desarrollo)
     - `https://hscontadores.co/api/auth/callback` (producción)
5. Hacer clic en **Create**
6. **IMPORTANTE:** Descargar el archivo JSON de credenciales
   - Guardar como `credentials.json` en el backend
   - **NUNCA** commitear este archivo a Git

### Paso 5: Crear Service Account (Alternativa más segura)

**Nota:** Para producción, se recomienda usar Service Account en lugar de OAuth para usuarios.

1. En **Credentials**, hacer clic en **+ CREATE CREDENTIALS** > **Service account**
2. Configurar:
   - **Service account name:** `gmail-sender-service`
   - **Service account ID:** (auto-generado)
   - **Description:** Service account para envío de emails desde formulario de contacto
3. Hacer clic en **Create and Continue**
4. Opcional: Asignar roles (no necesario para Gmail API)
5. Hacer clic en **Done**
6. Hacer clic en el service account creado
7. Ir a la pestaña **Keys**
8. Hacer clic en **Add Key** > **Create new key**
9. Seleccionar **JSON**
10. Descargar el archivo JSON (este es tu service account key)
11. **IMPORTANTE:** Guardar de forma segura, nunca commitear

---

## 🏗️ Arquitectura de la Solución

```
┌─────────────────┐
│   Frontend      │
│  (React/Vite)   │
│                 │
│  Formulario     │───POST───┐
│  Contact.tsx    │          │
└─────────────────┘          │
                             │
                             ▼
                    ┌─────────────────┐
                    │   Backend API   │
                    │  (Node/Express) │
                    │                 │
                    │  /api/contact   │
                    └─────────────────┘
                             │
                             │ Gmail API
                             │ (OAuth/Service Account)
                             ▼
                    ┌─────────────────┐
                    │   Gmail API     │
                    │                 │
                    │  Envío Email    │
                    └─────────────────┘
                             │
                             ▼
                    ┌─────────────────┐
                    │  contacto@     │
                    │  hscontadores.co│
                    └─────────────────┘
```

---

## 💻 Implementación Backend (Node.js/Express)

### Estructura de Archivos

```
backend/
├── server.js
├── routes/
│   └── contact.js
├── services/
│   └── gmailService.js
├── config/
│   └── credentials.json (NO COMMITEAR)
├── .env (NO COMMITEAR)
└── package.json
```

### Paso 1: Inicializar Proyecto Backend

```bash
mkdir backend
cd backend
npm init -y
npm install express cors dotenv googleapis nodemailer
npm install --save-dev nodemon
```

### Paso 2: Configurar Variables de Entorno (.env)

```env
# Gmail API Configuration
GMAIL_CLIENT_ID=tu_client_id_aqui
GMAIL_CLIENT_SECRET=tu_client_secret_aqui
GMAIL_REDIRECT_URI=http://localhost:3000/api/auth/callback
GMAIL_REFRESH_TOKEN=tu_refresh_token_aqui

# Email Configuration
FROM_EMAIL=contacto@hscontadores.co
TO_EMAIL=contacto@hscontadores.co

# Server Configuration
PORT=3000
NODE_ENV=development
FRONTEND_URL=http://localhost:5173
```

### Paso 3: Crear Servicio Gmail (services/gmailService.js)

```javascript
const { google } = require('googleapis');
const nodemailer = require('nodemailer');

class GmailService {
  constructor() {
    this.oAuth2Client = new google.auth.OAuth2(
      process.env.GMAIL_CLIENT_ID,
      process.env.GMAIL_CLIENT_SECRET,
      process.env.GMAIL_REDIRECT_URI
    );

    // Configurar refresh token
    this.oAuth2Client.setCredentials({
      refresh_token: process.env.GMAIL_REFRESH_TOKEN
    });
  }

  async sendEmail({ to, subject, html, text }) {
    try {
      // Obtener access token
      const accessToken = await this.oAuth2Client.getAccessToken();

      // Crear transporter con Gmail
      const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
          type: 'OAuth2',
          user: process.env.FROM_EMAIL,
          clientId: process.env.GMAIL_CLIENT_ID,
          clientSecret: process.env.GMAIL_CLIENT_SECRET,
          refreshToken: process.env.GMAIL_REFRESH_TOKEN,
          accessToken: accessToken.token
        }
      });

      // Configurar email
      const mailOptions = {
        from: `HS Contadores <${process.env.FROM_EMAIL}>`,
        to: to || process.env.TO_EMAIL,
        subject: subject,
        html: html,
        text: text
      };

      // Enviar email
      const result = await transporter.sendMail(mailOptions);
      return { success: true, messageId: result.messageId };
    } catch (error) {
      console.error('Error sending email:', error);
      throw error;
    }
  }

  async sendContactFormEmail(formData) {
    const { companyName, email, sector, service, description } = formData;

    const html = `
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
              <div class="value">${companyName}</div>
            </div>
            <div class="field">
              <div class="label">Email Corporativo:</div>
              <div class="value">${email}</div>
            </div>
            <div class="field">
              <div class="label">Sector/Industria:</div>
              <div class="value">${sector}</div>
            </div>
            <div class="field">
              <div class="label">Servicio Requerido:</div>
              <div class="value">${service}</div>
            </div>
            <div class="field">
              <div class="label">Descripción del Requerimiento:</div>
              <div class="value">${description || 'No proporcionada'}</div>
            </div>
            <div class="field">
              <div class="label">Fecha:</div>
              <div class="value">${new Date().toLocaleString('es-CO')}</div>
            </div>
          </div>
        </div>
      </body>
      </html>
    `;

    const text = `
Nueva Consulta desde el Sitio Web

Compañía: ${companyName}
Email Corporativo: ${email}
Sector/Industria: ${sector}
Servicio Requerido: ${service}
Descripción: ${description || 'No proporcionada'}
Fecha: ${new Date().toLocaleString('es-CO')}
    `;

    return await this.sendEmail({
      to: process.env.TO_EMAIL,
      subject: `Nueva Consulta: ${companyName} - ${service}`,
      html: html,
      text: text
    });
  }

  async sendConfirmationEmail(userEmail, companyName) {
    const html = `
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
            <p>Estimado/a ${companyName},</p>
            <p>Hemos recibido su consulta correctamente. Nuestro equipo de consultores senior revisará su requerimiento y se pondrá en contacto con usted en un plazo máximo de 24 horas.</p>
            <p>Gracias por confiar en HS Contadores Públicos.</p>
            <p>Saludos cordiales,<br>Equipo HS Contadores</p>
          </div>
        </div>
      </body>
      </html>
    `;

    return await this.sendEmail({
      to: userEmail,
      subject: 'Confirmación de Recepción - HS Contadores',
      html: html,
      text: `Estimado/a ${companyName},\n\nHemos recibido su consulta correctamente. Nuestro equipo se pondrá en contacto en 24 horas.\n\nSaludos,\nEquipo HS Contadores`
    });
  }
}

module.exports = new GmailService();
```

### Paso 4: Crear Ruta de Contacto (routes/contact.js)

```javascript
const express = require('express');
const router = express.Router();
const gmailService = require('../services/gmailService');

router.post('/contact', async (req, res) => {
  try {
    const { companyName, email, sector, service, description } = req.body;

    // Validación básica
    if (!companyName || !email || !sector || !service) {
      return res.status(400).json({
        success: false,
        message: 'Por favor complete todos los campos requeridos'
      });
    }

    // Validar email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({
        success: false,
        message: 'Email inválido'
      });
    }

    // Enviar email a la empresa
    await gmailService.sendContactFormEmail({
      companyName,
      email,
      sector,
      service,
      description
    });

    // Enviar email de confirmación al usuario
    await gmailService.sendConfirmationEmail(email, companyName);

    res.json({
      success: true,
      message: 'Consulta enviada correctamente. Recibirá un email de confirmación.'
    });
  } catch (error) {
    console.error('Error processing contact form:', error);
    res.status(500).json({
      success: false,
      message: 'Error al procesar su consulta. Por favor intente más tarde.'
    });
  }
});

module.exports = router;
```

### Paso 5: Crear Servidor Principal (server.js)

```javascript
require('dotenv').config();
const express = require('express');
const cors = require('cors');
const contactRoutes = require('./routes/contact');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors({
  origin: process.env.FRONTEND_URL || 'http://localhost:5173',
  credentials: true
}));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.use('/api', contactRoutes);

// Health check
app.get('/health', (req, res) => {
  res.json({ status: 'ok', timestamp: new Date().toISOString() });
});

// Error handling
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({
    success: false,
    message: 'Error interno del servidor'
  });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
```

### Paso 6: Obtener Refresh Token (Primera vez)

Para obtener el refresh token necesario, crear un script temporal:

**scripts/getRefreshToken.js:**

```javascript
const { google } = require('googleapis');
const readline = require('readline');
require('dotenv').config();

const oAuth2Client = new google.auth.OAuth2(
  process.env.GMAIL_CLIENT_ID,
  process.env.GMAIL_CLIENT_SECRET,
  process.env.GMAIL_REDIRECT_URI
);

const SCOPES = ['https://www.googleapis.com/auth/gmail.send'];

async function getRefreshToken() {
  const authUrl = oAuth2Client.generateAuthUrl({
    access_type: 'offline',
    scope: SCOPES,
  });

  console.log('Autoriza esta aplicación visitando esta URL:', authUrl);

  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  rl.question('Ingresa el código de la URL aquí: ', (code) => {
    rl.close();
    oAuth2Client.getToken(code, (err, token) => {
      if (err) return console.error('Error retrieving access token', err);
      console.log('Refresh Token:', token.refresh_token);
      console.log('\nAgrega este refresh_token a tu archivo .env');
    });
  });
}

getRefreshToken();
```

**Ejecutar:**
```bash
node scripts/getRefreshToken.js
```

---

## 🔗 Integración Frontend

### Actualizar Contact.tsx

```typescript
const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();
  setLoading(true);

  const formData = {
    companyName: (e.target as HTMLFormElement).companyName?.value,
    email: (e.target as HTMLFormElement).email?.value,
    sector: (e.target as HTMLFormElement).sector?.value,
    service: (e.target as HTMLFormElement).service?.value,
    description: (e.target as HTMLFormElement).description?.value,
  };

  try {
    const response = await fetch('http://localhost:3000/api/contact', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    });

    const data = await response.json();

    if (data.success) {
      setIsSubmitted(true);
    } else {
      alert('Error: ' + data.message);
      setLoading(false);
    }
  } catch (error) {
    console.error('Error:', error);
    alert('Error al enviar el formulario. Por favor intente más tarde.');
    setLoading(false);
  }
};
```

---

## 🔒 Seguridad

### Checklist de Seguridad

- [ ] **Nunca commitear credenciales** (.env, credentials.json)
- [ ] Agregar `.env` y `credentials.json` a `.gitignore`
- [ ] Usar variables de entorno en producción
- [ ] Implementar rate limiting en el endpoint
- [ ] Validar y sanitizar todos los inputs
- [ ] Implementar CAPTCHA para prevenir spam
- [ ] Usar HTTPS en producción
- [ ] Configurar CORS correctamente
- [ ] Implementar logging de errores
- [ ] Considerar usar Service Account para producción

### .gitignore

```
backend/
.env
credentials.json
node_modules/
*.log
```

---

## 📊 Límites y Cuotas de Gmail API

- **Cuota diaria:** 1,000,000,000 unidades de cuota
- **Envío de emails:** ~100 unidades por email
- **Límite práctico:** ~10,000,000 emails por día
- **Para uso normal:** Más que suficiente

---

## 🚀 Despliegue

### Opciones de Hosting Backend

1. **Vercel** (Recomendado para Node.js)
   - Deploy automático desde Git
   - Variables de entorno en dashboard
   - Plan gratuito disponible

2. **Railway**
   - Muy fácil de usar
   - Variables de entorno integradas
   - Plan gratuito con límites

3. **Heroku**
   - Clásico y confiable
   - Variables de entorno fáciles
   - Plan gratuito limitado

4. **Google Cloud Run**
   - Integración nativa con GCP
   - Escalable automáticamente
   - Pay per use

### Variables de Entorno en Producción

Configurar en el dashboard del hosting:
- `GMAIL_CLIENT_ID`
- `GMAIL_CLIENT_SECRET`
- `GMAIL_REFRESH_TOKEN`
- `FROM_EMAIL`
- `TO_EMAIL`
- `FRONTEND_URL` (URL del frontend en producción)

---

## 🧪 Testing

### Test Manual

1. Iniciar backend: `npm run dev`
2. Abrir formulario en frontend
3. Completar y enviar formulario
4. Verificar recepción de emails:
   - Email a `contacto@hscontadores.co`
   - Email de confirmación al usuario

### Test Automatizado (Opcional)

```javascript
// tests/contact.test.js
const request = require('supertest');
const app = require('../server');

describe('POST /api/contact', () => {
  it('should send email successfully', async () => {
    const response = await request(app)
      .post('/api/contact')
      .send({
        companyName: 'Test Company',
        email: 'test@example.com',
        sector: 'Tecnología / SaaS',
        service: 'Auditoría Integral',
        description: 'Test description'
      });

    expect(response.status).toBe(200);
    expect(response.body.success).toBe(true);
  });
});
```

---

## 📝 Próximos Pasos

1. [ ] Configurar proyecto en Google Cloud Console
2. [ ] Crear credenciales OAuth 2.0
3. [ ] Obtener refresh token
4. [ ] Implementar backend siguiendo este documento
5. [ ] Integrar con frontend
6. [ ] Testing en desarrollo
7. [ ] Configurar variables de entorno en producción
8. [ ] Deploy backend
9. [ ] Testing en producción
10. [ ] Monitoreo y ajustes

---

## 🔗 Referencias

- [Gmail API Documentation](https://developers.google.com/gmail/api)
- [Google OAuth 2.0 Guide](https://developers.google.com/identity/protocols/oauth2)
- [Nodemailer with Gmail](https://nodemailer.com/usage/using-gmail/)
- [Google Cloud Console](https://console.cloud.google.com/)

---

## ⚠️ Notas Importantes

1. **Refresh Token:** Una vez obtenido, guardarlo de forma segura. Si se pierde, habrá que generar uno nuevo.

2. **Service Account vs OAuth:** Para producción, considerar usar Service Account con Domain-wide Delegation si se tiene Google Workspace.

3. **Rate Limiting:** Implementar rate limiting para prevenir abuso del endpoint.

4. **Spam Prevention:** Considerar agregar reCAPTCHA v3 para prevenir spam.

5. **Backup:** Mantener backup de las credenciales en lugar seguro (password manager).

---

**Autor:** Equipo de Desarrollo HS Contadores  
**Última actualización:** ${new Date().toLocaleDateString('es-CO', { year: 'numeric', month: 'long', day: 'numeric' })}


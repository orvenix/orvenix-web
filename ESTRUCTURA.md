# 📋 GUÍA DE ESTRUCTURA FINAL — Orvenix

## Estado Actual

Tu proyecto ahora tiene una estructura profesional con:

✅ **7 Páginas HTML completas** (inicio + 6 interiores)
✅ **Navegación consistente** en todas las páginas
✅ **Secciones bien organizadas** (Servicios, Portafolio, Precios, Blog, etc.)
✅ **Footer unificado** con enlaces útiles
✅ **Responsive design** para todos los dispositivos
✅ **SEO optimizado** (meta tags, canonical, schema)
✅ **Gestión de temas** (oscuro/claro)

---

## 📂 Estructura de Carpetas (Recomendada)

```
orvenix/
│
├── index.html                           # Home
├── README.md                            # Documentación
├── .htaccess                            # Configuración servidor
│
├── pages/                               # Páginas interiores
│   ├── servicios.html
│   ├── portafolio.html
│   ├── precios.html
│   ├── blog.html
│   ├── contacto.html
│   └── about.html
│
├── css/                                 # Estilos (MOVER AQUÍ)
│   ├── variables.css    ← MOVER DESDE RAÍZ
│   ├── layout.css       ← MOVER DESDE RAÍZ
│   └── sections.css     ← MOVER DESDE RAÍZ
│
├── js/                                  # Scripts (MOVER AQUÍ)
│   ├── main.js          ← MOVER DESDE RAÍZ
│   ├── nav.js           ← MOVER DESDE RAÍZ
│   ├── interactions.js   ← MOVER DESDE RAÍZ
│   └── animations.js     ← MOVER DESDE RAÍZ
│
├── img/                                 # Imágenes
│   ├── logo.png         ← MOVER DESDE RAÍZ
│   └── favicon.png      ← MOVER DESDE RAÍZ
│
├── includes/                            # (Opcional - para componentes PHP)
│
└── sitemap.xml                          # SEO sitemap
```

---

## 🔧 Próximos Pasos (TODO)

### 1️⃣ Reorganizar Archivos
```bash
# Mover archivos CSS a la carpeta css/
mv variables.css css/
mv layout.css css/
mv sections.css css/

# Mover archivos JS a la carpeta js/
mv main.js js/
mv nav.js js/
mv interactions.js js/
mv animations.js js/

# Mover imágenes a la carpeta img/
mv logo.png img/
mv favicon.png img/
```

### 2️⃣ Actualizar Referencias (Ya están en las páginas HTML)
Las páginas interiores en `pages/` ya tienen las rutas correctas:
```html
<link rel="stylesheet" href="../css/variables.css">
<link rel="stylesheet" href="../css/layout.css">
<script src="../js/main.js"></script>
```

El index.html en raíz requiere rutas directas:
```html
<link rel="stylesheet" href="css/variables.css">
<link rel="stylesheet" href="css/layout.css">
<script src="js/main.js"></script>
```

### 3️⃣ Personalizar Contenido
- [ ] **Logo y Favicon** — Reemplazar imágenes
- [ ] **Colores** — Editar `css/variables.css` (colores --accent, --bg, etc.)
- [ ] **Texto de servicios** — Actualizar en `pages/servicios.html`
- [ ] **Proyectos** — Agregar casos reales en `pages/portafolio.html`
- [ ] **Equipo** — Actualizar nombres y fotos en `pages/about.html`
- [ ] **Blog** — Crear artículos reales en `pages/blog.html`
- [ ] **Contacto** — Actualizar email, teléfono, WhatsApp
- [ ] **Precios** — Ajustar precios según tu modelo

### 4️⃣ Implementar Funcionalidad
- [ ] **Formulario de Contacto** — Usar Formspree, Netlify Forms o Firebase
- [ ] **Newsletter** — Integrar Mailchimp, ConvertKit, etc.
- [ ] **Comentarios en Blog** — Usar Disqus o Utterances
- [ ] **Analytics** — Agregar Google Analytics 4

### 5️⃣ Optimizaciones Finales
- [ ] **Imágenes** — Comprimir y optimizar
- [ ] **Lighthouse Score** — Revisar y mejorar performance
- [ ] **Testing** — Probar en todos los navegadores
- [ ] **SSL Certificate** — Activar HTTPS

---

## 🎨 Personalización de Estilos

### Archivos CSS Principales

**`css/variables.css`** — Colores y tipografía
```css
--bg: #050b14;           /* Fondo principal oscuro */
--bg-2: #0a1424;         /* Fondo secundario */
--accent: #00c8d4;       /* Color principal (cyan) */
--accent-2: #3b82f6;     /* Secundario (azul) */
--accent-3: #2dd4bf;     /* Terciario (teal) */
```

Para cambiar tema a claro:
```css
-- bg: #ffffff;
--bg-2: #f5f5f5;
--text: #1a1a1a;
```

**`css/layout.css`** — Navegación, preloader, componentes
**`css/sections.css`** — Estilos específicos de secciones

---

## 📱 Responsive Breakpoints

```css
/* Mobile: < 480px */
/* Tablet: 480px - 768px */
/* Desktop: > 768px */
```

Todas las páginas son fully responsive.

---

## 🔐 Seguridad (.htaccess)

El archivo `.htaccess` incluye:
- ✅ Compresión GZIP
- ✅ Headers de seguridad
- ✅ Caché de recursos
- ✅ Protección contra accesos a archivos sensibles

---

## 📊 SEO Checklist

- [x] Titles únicos en cada página
- [x] Meta descriptions
- [x] Canonical URLs
- [x] Open Graph tags
- [x] Schema.org JSON-LD
- [x] Sitemap XML
- [x] Estructura de headings coherente
- [ ] Google Search Console setup
- [ ] Google Analytics 4
- [ ] Mobile-friendly test

---

## 🌍 Dominios y Hosting

Para subir el proyecto en vivo:

1. **Elegir host** — Recomendaciones:
   - Bluehost (WordPress, pero soporta HTML)
   - Netlify (gratis, excelente para HTML/CSS/JS)
   - Vercel (optimalizado para sitios estáticos)
   - Amazon S3 + CloudFront

2. **Dominio** — Registrar en:
   - Namecheap
   - Google Domains
   - GoDaddy

3. **Subir archivos** — Via FTP o Git

4. **Configurar SSL** — Let's Encrypt (gratuito)

---

## 📞 Contacto & Ayuda

Para agregar formulario de contacto funcional:

### Opción 1: Formspree (Recomendado)
```html
<form action="https://formspree.io/f/YOUR_FORM_ID" method="POST">
  <input type="email" name="email" required>
  <textarea name="message" required></textarea>
  <button type="submit">Enviar</button>
</form>
```

### Opción 2: Netlify Forms (Si usas Netlify)
```html
<form name="contact" method="POST" netlify>
  <!-- campos del formulario -->
</form>
```

### Opción 3: Firebase
Integración JavaScript para recibir mensajes en Firestore.

---

## 🚀 Deploy Recomendado

### Netlify (Mejor opción)
```bash
# 1. Conectar repo Git
# 2. Build command: (dejar vacío para HTML puro)
# 3. Publish directory: /
# 4. Deploy
```

### Vercel
```bash
# 1. Conectar repo
# 2. Framework: Other (HTML)
# 3. Deploy
```

---

## ✅ Validación Final

- [ ] Todas las páginas cargan sin errores
- [ ] Links internos funcionan
- [ ] Menú mobile funciona
- [ ] Tema oscuro/claro cambia
- [ ] Formularios son enviables
- [ ] WhatsApp link funciona
- [ ] SEO tags son correctos
- [ ] Imágenes cargan rápido
- [ ] Sin errores en consola

---

## 📚 Recursos Útiles

- [Google Search Console](https://search.google.com/search-console)
- [Lighthouse Score](https://developers.google.com/web/tools/lighthouse)
- [WAVE Accessibility](https://wave.webaim.org/)
- [GTmetrix Performance](https://gtmetrix.com/)

---

**Última actualización:** Abril 2024  
**Estado:** ✅ Estructura completada  
**Próximos pasos:** Personalización y deployment

# Orvenix — Sitio Web Profesional

Sitio web profesional completo para la agencia de desarrollo web **Orvenix**. Estructura moderna, escalable y optimizada para SEO.

---

## 📁 Estructura del Proyecto

```
orvenix/
│
├── index.html                 # Página de inicio (Home)
│
├── pages/                     # Todas las páginas interiores
│   ├── servicios.html        # Detalles de servicios
│   ├── portafolio.html       # Casos de éxito
│   ├── precios.html          # Planes y precios
│   ├── blog.html             # Artículos y blog
│   ├── contacto.html         # Formulario de contacto
│   └── about.html            # Sobre nosotros
│
├── css/                       # Estilos CSS
│   ├── variables.css         # Variables de color, tipografía, etc.
│   ├── layout.css            # Estilos generales y layout
│   └── sections.css          # Estilos específicos de secciones
│
├── js/                        # Scripts JavaScript
│   ├── main.js               # Script principal
│   ├── nav.js                # Navegación y menú móvil
│   ├── interactions.js       # Interacciones y eventos
│   └── animations.js         # Animaciones
│
├── img/                       # Imágenes y assets
│   ├── logo.png              # Logo de la empresa
│   └── favicon.png           # Favicon
│
├── sitemap.xml               # Sitemap para SEO
├── README.md                 # Este archivo
└── .htaccess                 # Configuración de servidor (opcional)
```

---

## 🌐 Páginas Incluidas

### 1. **index.html** — Página de Inicio
- Hero section con CTA
- Servicios destacados
- Portfolio preview
- Proceso de trabajo
- Testimonios
- Sección de precios
- FAQ

### 2. **pages/servicios.html** — Servicios
- 6 servicios detallados:
  - Sitios Web Personalizados
  - E-commerce/Tiendas Online
  - Aplicaciones Móviles
  - Mantenimiento & Soporte
  - Consultoría Digital
  - SEO y Marketing Digital
- Características y beneficios de cada servicio
- Stack tecnológico

### 3. **pages/portafolio.html** — Portafolio
- 4+ proyectos destacados con:
  - Categoría (E-commerce, SaaS, etc.)
  - Descripción y resultados
  - Tecnologías usadas
- Estadísticas del empresa
- CTA a consulta

### 4. **pages/precios.html** — Planes de Precios
- 3 planes claros:
  - **Startup** ($399) — Landing pages
  - **Professional** ($899) — Sitios web completos ⭐ Destacado
  - **Enterprise** (Cotización) — Soluciones a medida
- FAQ sobre precios
- Detalles de incluidos en cada plan

### 5. **pages/blog.html** — Blog
- 6 artículos de ejemplo sobre:
  - SEO y Core Web Vitals
  - Tecnologías (React, Next.js)
  - E-commerce y conversión
  - Seguridad web
  - UI/UX
  - DevOps y CI/CD
- Newsletter signup
- Filtrado por categorías

### 6. **pages/contacto.html** — Contacto
- Formulario de contacto con validación
- Información de contacto completa
- Integración WhatsApp
- Social media
- Ubicación

### 7. **pages/about.html** — Sobre Nosotros
- Misión y Visión
- Valores de la empresa (4)
- Equipo destacado (3 miembros)
- Timeline histórico (2015-2024)

---

## 🎨 Características de Diseño

### Temas Oscuro/Claro
- Toggle en la navegación (botón ☀️/🌙)
- Variables CSS para fácil customización

### Componentes Reutilizables
- Cards
- Botones (primary, secondary, outline)
- Badges
- Grillas (grid-2, grid-3, grid-4)
- Tech pills
- Formularios

### Optimización
- Meta tags SEO en todas las páginas
- Open Graph para redes sociales
- Schema.org JSON-LD
- Estructura HTML semántica
- Roles ARIA para accesibilidad

---

## 🚀 Cómo Usar

### 1. Configuración Inicial
```bash
# Descargar o clonar el proyecto
# No requiere build process - es HTML/CSS/JS puro
```

### 2. Estructura de URLs
```
https://orvenix.com/              # Página de inicio
https://orvenix.com/pages/servicios.html
https://orvenix.com/pages/portafolio.html
https://orvenix.com/pages/precios.html
https://orvenix.com/pages/blog.html
https://orvenix.com/pages/contacto.html
https://orvenix.com/pages/about.html
```

### 3. Personalización
- Editar `css/variables.css` para cambiar colores y tipografía
- Reemplazar logo.png con tu logo
- Actualizar contenido en cada página HTML
- Cambiar información de contacto en footer y páginas

---

## 🛠 Stack Tecnológico

- **HTML5** — Estructura semántica
- **CSS3** — Estilos modernos (Flexbox, Grid, CSS Vars)
- **JavaScript Vanilla** — Sin dependencias externas
- **Google Fonts** — Tipografía (Orbitron, Inter, Fira Code)
- **No frameworks** — Rendimiento máximo

---

## 📱 Responsive
- Mobile-first design
- Breakpoints optimizados
- Menú hamburguesa en móvil
- Imágenes responsive

---

## ♿ Accesibilidad
- Atributos ARIA
- Roles semánticos
- Contraste de colores WCAG AA
- Navegación por teclado
- Alt text en imágenes

---

## 📊 SEO Optimizado
- Titles y meta descriptions únicos
- Canonical URLs
- Sitemap XML
- Schema markup
- Open Graph tags
- Estructura heading coherente

---

## 🎯 Secciones Incluidas en Home

1. **Navbar Sticky** — Navegación fija
2. **Hero Section** — Portada principal con CTA
3. **Servicios Preview** — 6 servicios resumidos
4. **Stats** — Números clave (150+ proyectos, 98% satisfacción)
5. **Portfolio Preview** — 3 casos de éxito
6. **Proceso** — 4 pasos del workflow
7. **Testimonios** — 3 testimonios de clientes
8. **Precios** — 3 planes
9. **CTA Final** — Llamado a acción
10. **Footer** — Enlaces y contacto

---

## 🔧 Personalizaciones Recomendadas

### Reemplazar:
- [ ] Logo (logo.png)
- [ ] Favicon (favicon.png)
- [ ] Colores en `variables.css`
- [ ] Contacto (emails, teléfono, WhatsApp)
- [ ] Contenido de texto en todas las páginas
- [ ] Proyectos en el portafolio
- [ ] Equipo en about.html
- [ ] Artículos del blog

### Agregar:
- [ ] Imágenes reales en hero sections
- [ ] Fotografías del equipo
- [ ] Screenshots de proyectos
- [ ] Google Analytics
- [ ] Form submission handler (Formspree, Netlify Forms, etc.)

---

## 📝 Notas Importantes

- **Sin dependencias** — Todos los archivos son HTML/CSS/JS puros
- **Fácil de mantener** — Estructura clara y código comentado
- **SEO-ready** — Optimizado para motores de búsqueda
- **Rápido** — Carga instantánea sin frameworks pesados
- **Escalable** — Fácil agregar nuevas páginas siguiendo el patrón

---

## 📞 Contacto & Support

Sitio de ejemplo para **Orvenix** — Agencia de Desarrollo Web
- Email: info@orvenix.com
- WhatsApp: +52 81 1234 5678
- Ubicación: Monterrey, México

---

**Última actualización:** Abril 2024

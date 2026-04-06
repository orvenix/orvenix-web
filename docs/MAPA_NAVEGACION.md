# 🌐 MAPA DE NAVEGACIÓN - Orvenix

## Estructura de Páginas

```
┌─────────────────────────────────────────────┐
│           NAVEGACIÓN PRINCIPAL              │
├──────────────┬───────────────┬──────────────┤
│  Servicios   │  Portafolio   │   Precios    │
└──────────────┴───────────────┴──────────────┘
```

---

## 🏠 HOME (index.html)
Portal de entrada principal

### Secciones:
1. **Hero** — Portada principal con CTA
2. **Servicios** — 6 servicios resumidos (link a /servicios)
3. **Estadísticas** — 150+ proyectos, 45+ clientes
4. **Portafolio** — 3 casos destacados (link a /portafolio)
5. **Proceso** — 4 pasos del workflow
6. **Testimonios** — 3 clientes satisfechos
7. **Precios** — 3 planes (link a /precios)
8. **CTA** — Call to action final

---

## 📋 SERVICIOS (pages/servicios.html)
Detalles completos de cada servicio

### Sub-secciones:
- **Sitios Web Personalizados** (#web)
- **E-commerce/Tiendas** (#ecommerce)
- **Apps Móviles** (#apps)
- **Mantenimiento** (#soporte)
- **Consultoría Digital** (#consultoria)
- **SEO & Marketing** (#seo)

Cada sección incluye:
- Descripción detallada
- Características
- Stack tecnológico
- Pricing indicativo

---

## 🎯 PORTAFOLIO (pages/portafolio.html)
Casos de éxito y proyectos completados

### Incluye:
- 4+ proyectos destacados
- Categoría de proyecto
- Descripción y resultados
- Tecnologías usadas
- Impacto (% aumento, usuarios, etc.)

### Estadísticas:
- 150+ proyectos completados
- 45+ clientes
- 10+ años experiencia
- 98% satisfacción

---

## 💰 PRECIOS (pages/precios.html)
Planes claros y transparentes

### 3 Planes:
```
┌────────────────────────────────────────────┐
│  STARTUP      │ PROFESSIONAL ⭐ │ ENTERPRISE │
│  $399         │ $899             │ Custom    │
├────────────────────────────────────────────┤
│ Landing Page  │ Sitio Web        │ E-commerce│
│ 5 páginas     │ CMS              │ Apps      │
│ Básico        │ Blog             │ SaaS      │
│ 30 días       │ 60 días          │ 24/7      │
└────────────────────────────────────────────┘
```

Incluye FAQ sobre precios

---

## 📚 BLOG (pages/blog.html)
Artículos y conocimiento

### Categorías:
- SEO (Core Web Vitals)
- Desarrollo (React, Next.js)
- E-commerce (Conversión)
- Seguridad (XSS, CORS)
- Diseño (UI/UX)
- DevOps (Docker, CI/CD)

### Características:
- 6+ artículos de ejemplo
- Fecha de publicación
- Newsletter signup
- Filtrado por categoría

---

## 📧 CONTACTO (pages/contacto.html)
Formulario y datos de contacto

### Incluye:
- Formulario completo
  - Nombre
  - Email
  - Teléfono
  - Tipo de proyecto
  - Descripción
- Datos de contacto:
  - Email
  - Teléfono
  - WhatsApp (clickeable)
  - Ubicación
- Social media links

---

## ℹ️ SOBRE NOSOTROS (pages/about.html)
Información de la empresa

### Secciones:
1. **Misión & Visión**
   - Misión: Crear soluciones digitales innovadoras
   - Visión: Ser líderes en Latinoamérica

2. **Valores** (4 core values)
   - Excelencia
   - Colaboración
   - Innovación
   - Responsabilidad

3. **Equipo** (3 miembros destacados)
   - Foto (emoji placeholder)
   - Rol
   - Experiencia

4. **Timeline Histórico**
   - 2015: Inicio
   - 2017: Crecimiento
   - 2019: Expansión
   - 2024: Presente

---

## 🔗 FLUJO DE NAVEGACIÓN

```
HOME ────────────────────────────────────────────
 │
 ├─→ SERVICIOS (desde card "Conocer más")
 │    └─→ Detalle específico de servicio
 │
 ├─→ PORTAFOLIO (desde "Ver portafolio")
 │    └─→ Detalles de proyecto
 │
 ├─→ PRECIOS (desde "Seleccionar plan")
 │    └─→ Plan específico
 │
 ├─→ BLOG (desde "Leer artículo")
 │    └─→ Artículo completo (a implementar)
 │
 ├─→ CONTACTO (desde cualquier CTA)
 │    └─→ Formulario de contacto
 │
 ├─→ ABOUT (desde Footer "Sobre Nosotros")
 │    └─→ Historia y equipo
 │
 └─→ FOOTER LINKS
     └─→ Términos, política privacidad, etc.
```

---

## 🎨 COMPONENTES REUTILIZABLES

### Botones
- `.btn.btn-primary` — Botón principal (cyan)
- `.btn.btn-secondary` — Botón secundario
- `.btn.btn-outline` — Botón sin fondo
- `.btn.btn-large` — Botón grande

### Cards
- `.card` — Contenedor genérico
- `.card.service-card` — Card de servicio
- `.card.portfolio-item` — Item de portafolio
- `.card.testimonial-card` — Testimonio

### Grillas
- `.grid-2` — 2 columnas
- `.grid-3` — 3 columnas
- `.grid-4` — 4 columnas

### Badges
- `.badge` — Tag de categoría
- `.badge badge-featured` — Destacado

### Other
- `.tech-pill` — Tecnología
- `.reveal` — Animación scroll
- `.glass` — Efecto vidrio

---

## 📞 CONTACTO RÁPIDO

Presente en todas las páginas:

1. **Navbar** — Logo y navegación
2. **WhatsApp Float** — Icono flotante
3. **Footer** — Email, teléfono, redes
4. **CTA Buttons** — Links a contacto

---

## 🚀 PRÓXIMAS PÁGINAS SUGERIDAS

Si quieres expandir el sitio:

- `/blog/[slug]` — Artículos individuales
- `/portfolio/[slug]` — Proyectos detallados
- `/404.html` — Página de error
- `/privacy.html` — Política de privacidad
- `/terms.html` — Términos de servicio
- `/sitemap.xml` — Ya incluido ✅
- `/robots.txt` — SEO

---

## 🔍 BÚSQUEDA RÁPIDA POR FUNCIÓN

| Función | Página | Sección |
|---------|--------|---------|
| Ver servicios | HOME | #servicios |
| Casos de éxito | HOME | #portafolio |
| Precios | HOME | #precios |
| Contacto | HOME | /pages/contacto.html |
| Detalles de servicio | /servicios | Cada sub-sección |
| Blog | /blog | Artículos |
| Sobre nosotros | /about | Historia |
| Equipo | /about | Miembros |

---

## 📱 MOBILE & RESPONSIVE

Todas las páginas incluyen:
- ✅ Menú hamburger en móvil
- ✅ Diseño responsive
- ✅ Touch-friendly buttons
- ✅ Optimificado para pantallas pequeñas

---

**Última actualización:** Abril 2024
**Versión:** 1.0 - Completa

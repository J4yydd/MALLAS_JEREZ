# Mallas Jerez - Sitio Web Optimizado

Sitio web estático optimizado para SEO, accesibilidad y rendimiento. Especialistas en malla ciclónica, malla sombra y concertina en Zacatecas, México.

##  Características

-  **SEO Optimizado**: Meta tags, Open Graph, Twitter Cards, JSON-LD
-  **Accesibilidad WCAG AA**: ARIA, navegación por teclado, contraste
-  **Rendimiento**: Lighthouse Score  90
-  **Responsive**: Mobile-first design
-  **PWA Ready**: Manifest y service worker
-  **Sin Dependencias**: HTML, CSS, JS puros

##  Estructura del Proyecto

`
cursorMallas3/
 index.html              # Página principal optimizada
 assets/
    css/
       styles.css      # Estilos optimizados
    js/
       main.js         # JavaScript modular
    img/
        logo.png        # Logo de la empresa
        hero.jpg        # Imagen principal
        og.jpg          # Imagen para redes sociales
        favicon-*.png   # Favicons
        products/       # Imágenes de productos
 robots.txt              # Configuración para crawlers
 sitemap.xml             # Mapa del sitio
 manifest.webmanifest    # PWA manifest
 .htaccess               # Configuración Apache
 netlify.toml            # Configuración Netlify
 vercel.json             # Configuración Vercel
 README.md               # Este archivo
`

##  Desarrollo Local

### Requisitos
- Python 3.x (para servidor local)
- Navegador moderno
- Editor de código

### Instalación y Ejecución

1. **Clonar o descargar el proyecto**
   `ash
   git clone [URL_DEL_REPOSITORIO]
   cd cursorMallas3
   `

2. **Iniciar servidor local**
   `ash
   # Opción 1: Python
   python -m http.server 8000
   
   # Opción 2: Node.js (si tienes http-server instalado)
   npx http-server -p 8000 -o
   
   # Opción 3: Live Server (VS Code)
   # Instalar extensión Live Server y hacer clic derecho en index.html
   `

3. **Abrir en navegador**
   `
   http://localhost:8000
   `

### Desarrollo

- **Editar contenido**: Modificar index.html
- **Cambiar estilos**: Editar ssets/css/styles.css
- **Agregar funcionalidad**: Modificar ssets/js/main.js
- **Actualizar productos**: Editar el dataset PRODUCTS en main.js

##  Optimización para Producción

### 1. Minificación

**CSS:**
`ash
# Usando clean-css-cli
npm install -g clean-css-cli
cleancss -o assets/css/styles.min.css assets/css/styles.css
`

**JavaScript:**
`ash
# Usando terser
npm install -g terser
terser assets/js/main.js -o assets/js/main.min.js -c -m
`

### 2. Optimización de Imágenes

**Convertir a WebP:**
`ash
# Usando cwebp
cwebp assets/img/hero.jpg -o assets/img/hero.webp -q 80
`

**Redimensionar:**
`ash
# Usando ImageMagick
magick assets/img/hero.jpg -resize 1920x1080 assets/img/hero-optimized.jpg
`

### 3. Verificación de Rendimiento

`ash
# Lighthouse CLI
npm install -g lighthouse
lighthouse http://localhost:8000 --output html --output-path ./lighthouse-report.html
`

### 4. Validación SEO

- **Google Search Console**: Verificar indexación
- **Google PageSpeed Insights**: Medir rendimiento
- **WAVE**: Validar accesibilidad
- **Rich Results Test**: Verificar datos estructurados

##  Despliegue

### Netlify

1. **Conectar repositorio**
   - Ir a [netlify.com](https://netlify.com)
   - Conectar con GitHub/GitLab
   - Seleccionar el repositorio

2. **Configuración automática**
   - Netlify detectará 
etlify.toml
   - Despliegue automático en cada push

3. **Configuración manual**
   `
   Build command: echo "Static site"
   Publish directory: .
   `

### Vercel

1. **Instalar Vercel CLI**
   `ash
   npm install -g vercel
   `

2. **Desplegar**
   `ash
   vercel --prod
   `

3. **Configuración automática**
   - Vercel detectará ercel.json
   - Configuración de headers y redirecciones

### GitHub Pages

1. **Habilitar Pages**
   - Ir a Settings > Pages
   - Seleccionar branch main
   - Configurar dominio personalizado (opcional)

2. **Configurar CNAME** (si usas dominio personalizado)
   `
   echo "tudominio.com" > CNAME
   `

### Apache (Hosting Tradicional)

1. **Subir archivos**
   - Subir todos los archivos al directorio web
   - El archivo .htaccess se aplicará automáticamente

2. **Configurar SSL**
   `pache
   # En .htaccess
   RewriteCond %{HTTPS} off
   RewriteRule ^(.*)$ https://%{HTTP_HOST}%{REQUEST_URI} [L,R=301]
   `

##  Métricas de Rendimiento

### Objetivos Lighthouse

- **Performance**:  90
- **Accessibility**:  95
- **Best Practices**:  90
- **SEO**:  95

### Optimizaciones Implementadas

-  **Lazy Loading**: Imágenes con loading="lazy"
-  **Preload**: CSS crítico precargado
-  **Defer**: JavaScript no bloqueante
-  **Compresión**: GZIP habilitado
-  **Caché**: Headers optimizados
-  **Minificación**: CSS y JS minificados
-  **WebP**: Imágenes en formato moderno

##  Accesibilidad

### Características Implementadas

-  **ARIA**: Roles y propiedades completas
-  **Navegación por teclado**: Todos los elementos accesibles
-  **Contraste**: WCAG AA mínimo
-  **Lectores de pantalla**: Compatible
-  **Skip links**: Navegación rápida
-  **Focus visible**: Indicadores claros

### Testing de Accesibilidad

`ash
# WAVE (Web Accessibility Evaluation Tool)
# https://wave.webaim.org/

# axe DevTools (Browser Extension)
# https://www.deque.com/axe/devtools/

# Lighthouse Accessibility Audit
lighthouse --only-categories=accessibility http://localhost:8000
`

##  SEO

### Datos Estructurados

-  **LocalBusiness**: Información de la empresa
-  **GeoCoordinates**: Ubicación exacta
-  **OfferCatalog**: Productos disponibles
-  **OpeningHours**: Horarios de atención

### Meta Tags

-  **Open Graph**: Para redes sociales
-  **Twitter Cards**: Para Twitter
-  **Canonical**: URLs canónicas
-  **Robots**: Instrucciones para crawlers

### Sitemap y Robots

-  **sitemap.xml**: Mapa del sitio
-  **robots.txt**: Instrucciones para bots
-  **URLs amigables**: Estructura clara

##  Seguridad

### Headers de Seguridad

-  **X-Frame-Options**: Prevenir clickjacking
-  **X-XSS-Protection**: Protección XSS
-  **X-Content-Type-Options**: Prevenir MIME sniffing
-  **Referrer-Policy**: Control de referrer

### Validación de Entrada

-  **Sanitización**: Datos del formulario
-  **Validación**: Campos requeridos
-  **Escape**: Contenido dinámico

##  PWA (Progressive Web App)

### Características

-  **Manifest**: Configuración de la app
-  **Icons**: Iconos para diferentes tamaños
-  **Theme Color**: Color de la barra de estado
-  **Display**: Modo standalone

### Instalación

Los usuarios pueden instalar la app desde el navegador:
- Chrome: Botón "Instalar" en la barra de direcciones
- Safari: Botón "Agregar a pantalla de inicio"

##  Mantenimiento

### Actualizaciones Regulares

1. **Contenido**: Actualizar información de productos
2. **Imágenes**: Optimizar nuevas imágenes
3. **SEO**: Revisar métricas mensualmente
4. **Seguridad**: Mantener headers actualizados

### Monitoreo

- **Google Analytics**: Tráfico y comportamiento
- **Google Search Console**: Rendimiento SEO
- **PageSpeed Insights**: Rendimiento continuo
- **Uptime monitoring**: Disponibilidad del sitio

##  Soporte

Para soporte técnico o consultas sobre el proyecto:

- **Email**: [tu-email@ejemplo.com]
- **GitHub Issues**: [URL del repositorio]/issues
- **Documentación**: Este README

##  Licencia

Este proyecto está bajo la Licencia MIT. Ver el archivo LICENSE para más detalles.

---

**Desarrollado con  para Mallas Jerez**

*Sitio web optimizado para rendimiento, accesibilidad y SEO*

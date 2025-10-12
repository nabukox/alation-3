# Alation Agentic Data Intelligence Platform - Landing Page

Landing page corporativa para Alation implementando el sistema de diseño Fabric con SCSS.

![Alation Design System](https://img.shields.io/badge/Design%20System-Alation%20Fabric-F57C00?style=for-the-badge)
![SCSS](https://img.shields.io/badge/SCSS-1.69.5-CC6699?style=for-the-badge&logo=sass)
![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)

---

## 📋 Tabla de Contenidos

- [Características](#-características)
- [Instalación Rápida](#-instalación-rápida)
- [Estructura del Proyecto](#-estructura-del-proyecto)
- [Sistema de Diseño](#-sistema-de-diseño)
- [Desarrollo](#-desarrollo)
- [Deployment](#-deployment)

---

## ✨ Características

### 🎨 Sistema de Diseño Profesional
- **Variables SCSS organizadas** - Paleta de colores, tipografía, espaciado
- **Mixins reutilizables** - Botones, cards, transiciones
- **Mapeo funcional de colores** - Fácil mantenimiento y escalabilidad
- **Sistema de espaciado consistente** - Basado en unidades de 8px

### 📱 Totalmente Responsive
- **Mobile First** - Diseñado desde dispositivos móviles
- **Breakpoints optimizados** - 480px, 768px, 1200px
- **Flexbox & Grid** - Layout moderno sin posicionamiento absoluto
- **Imágenes optimizadas** - Responsive y con lazy loading

### 🚀 Performance
- **CSS compilado optimizado** - SCSS a CSS puro
- **Fuentes optimizadas** - Google Fonts con preconnect
- **Servidor de desarrollo rápido** - Python HTTP server

### 🎯 Componentes Implementados
- ✅ **Menú principal sticky** - Se oculta cuando aparece el segundo nav
- ✅ **Navegación secundaria sticky** - Se activa al alcanzar la parte superior
- ✅ Hero section con gradiente
- ✅ Feature cards con iconos
- ✅ Product showcase grid
- ✅ Alation Agents section
- ✅ Platform Services
- ✅ Customer testimonials con videos
- ✅ **FAQ accordion interactivo** - Colapsa/expande un item a la vez con hover
- ✅ CTA section con gradiente
- ✅ Footer completo con múltiples columnas

---

## 🚀 Instalación Rápida

### Requisitos Previos
- Node.js v14+ 
- npm v6+
- Python 3 (para el servidor de desarrollo)

### Instalación

```bash
# 1. Clonar el repositorio (si aplica)
git clone <repository-url>
cd alation-landing-page

# 2. Instalar dependencias
npm install

# 3. Compilar SCSS a CSS
npm run build:css

# 4. Iniciar servidor de desarrollo
npm run dev
```

El sitio estará disponible en: **http://localhost:3000**

---

## 📁 Estructura del Proyecto

```
alation-landing-page/
├── index.html                  # Página principal
├── app.js                      # JavaScript para navegación y accordion
├── styles/
│   ├── _variables.scss         # Variables del Design System
│   └── styles.scss             # Estilos principales con componentes
├── styles.css                  # CSS compilado (auto-generado)
├── package.json                # Dependencias y scripts
├── README.md                   # Este archivo
└── DESIGN-SYSTEM.md           # Documentación completa del Design System
```

---

## 🎨 Sistema de Diseño

El proyecto utiliza el **Alation Fabric Design System** con las siguientes características:

### Paleta de Colores

| Color | Hex | Uso |
|-------|-----|-----|
| **Alation Orange** | `#F57C00` | CTAs, elementos activos |
| **Neo Navy** | `#1d4289` | Fondos, encabezados |
| **Sun Yellow** | `#f2c75c` | Acentos, gráficos |
| **Link Blue** | `#1764CC` | Hipervínculos |
| **Success Green** | `#4CAF50` | Confirmaciones |
| **Warning Cherry** | `#D32F2F` | Errores |

### Tipografía

- **Fuente Principal:** Public Sans
- **Pesos:** 400 (Regular), 700 (Bold)
- **Tamaño Base:** 16px (1rem)
- **Line Height:** 1.6

### Espaciado

Sistema basado en múltiplos de 8px:
- `xs`: 8px
- `sm`: 16px
- `md`: 24px
- `lg`: 32px
- `xl`: 48px

📖 **[Ver documentación completa del Design System →](DESIGN-SYSTEM.md)**

---

## 🛠️ Desarrollo

### Scripts Disponibles

```bash
# Compilar SCSS una vez
npm run build:css

# Modo desarrollo con watch (recompila al guardar)
npm run sass

# Iniciar servidor de desarrollo
npm run dev
npm start  # Alias de npm run dev
```

### Workflow de Desarrollo

1. **Modificar estilos:**
   - Edita archivos en `styles/`
   - Las variables están en `_variables.scss`
   - Los componentes en `styles.scss`

2. **Compilar:**
   ```bash
   npm run build:css
   ```

3. **Ver cambios:**
   - Abre http://localhost:3000
   - Recarga el navegador

### Agregar Nuevos Componentes

1. Define el componente en `styles/styles.scss`:

```scss
.nuevo-componente {
  @include card-elevation('md');
  padding: $spacing-lg;
  
  &__titulo {
    color: $color-secondary;
    font-weight: $font-weight-bold;
  }
}
```

2. Compila el CSS:
```bash
npm run build:css
```

3. Usa en el HTML:
```html
<div class="nuevo-componente">
  <h3 class="nuevo-componente__titulo">Título</h3>
</div>
```

---

## 📦 Deployment

### Opción 1: Build de Producción

```bash
# Compilar CSS para producción
npm run build:css

# Los archivos a desplegar:
# - index.html
# - styles.css
# - assets/ (si tienes imágenes locales)
```

### Opción 2: Netlify

1. Conecta tu repositorio a Netlify
2. Configuración de build:
   - **Build command:** `npm run build:css`
   - **Publish directory:** `.` (root)

### Opción 3: Vercel

```bash
# Instalar Vercel CLI
npm i -g vercel

# Desplegar
vercel
```

### Opción 4: GitHub Pages

1. Ejecuta el build:
```bash
npm run build:css
```

2. Push a GitHub

3. Configura GitHub Pages desde Settings

---

## 🔧 Personalización

### Cambiar Colores de Marca

Edita `styles/_variables.scss`:

```scss
// Cambia estos valores
$alation-orange: #TU_COLOR;
$neo-navy: #TU_COLOR;
$sun-yellow: #TU_COLOR;
```

Luego compila:
```bash
npm run build:css
```

### Modificar Tipografía

En `styles/_variables.scss`:

```scss
$font-primary: "Tu Fuente", sans-serif;
```

No olvides cargar la fuente en `index.html`:
```html
<link href="https://fonts.googleapis.com/css2?family=Tu+Fuente:wght@400;700&display=swap" rel="stylesheet">
```

### Ajustar Espaciado

En `styles/_variables.scss`:

```scss
$spacing-unit: 0.5rem; // Cambia esto para ajustar todo el espaciado
```

---

## 📚 Recursos

- **[Documentación del Design System](DESIGN-SYSTEM.md)** - Guía completa de uso
- **[SCSS Documentation](https://sass-lang.com/documentation)** - Referencia oficial de SASS
- **[Public Sans Font](https://fonts.google.com/specimen/Public+Sans)** - Tipografía utilizada

---

## 🐛 Troubleshooting

### El CSS no se actualiza

```bash
# Borra el CSS compilado y recompila
rm styles.css
npm run build:css
```

### Error de encoding UTF-8

Los comentarios en SCSS deben evitar caracteres especiales. Ya está corregido en la versión actual.

### El servidor no inicia

Verifica que Python 3 esté instalado:
```bash
python3 --version
```

---

## 📝 Notas Técnicas

- **SCSS Version:** 1.69.5
- **CSS Output:** Expandido (no minificado)
- **Browser Support:** Modernos (Chrome, Firefox, Safari, Edge)
- **Responsive Breakpoints:** 480px, 768px, 1200px

---

## 🤝 Contribuir

1. Fork del proyecto
2. Crea una rama para tu feature (`git checkout -b feature/AmazingFeature`)
3. Commit de cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

---

## 📄 License

Este proyecto es propiedad de Alation, Inc. © 2025

---

## 👥 Contacto

**Alation Design Team**
- Website: [www.alation.com](https://www.alation.com)
- Email: design@alation.com

---

<div align="center">
  <strong>Construido con ❤️ usando el Alation Fabric Design System</strong>
</div>

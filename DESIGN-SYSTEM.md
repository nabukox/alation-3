# Alation Design System - Guía de Uso

## 📋 Índice

1. [Instalación](#instalación)
2. [Estructura del Proyecto](#estructura-del-proyecto)
3. [Variables del Sistema](#variables-del-sistema)
4. [Mixins y Utilidades](#mixins-y-utilidades)
5. [Componentes](#componentes)
6. [Desarrollo](#desarrollo)

---

## 🚀 Instalación

### Instalar dependencias

```bash
npm install
```

### Compilar SCSS a CSS

```bash
# Compilación única
npm run build:css

# Modo desarrollo (watch)
npm run sass
```

### Iniciar servidor de desarrollo

```bash
npm run dev
```

El sitio estará disponible en `http://localhost:3000`

---

## 📁 Estructura del Proyecto

```
alation-3/
├── index.html              # HTML principal
├── styles/
│   ├── _variables.scss     # Variables del Design System
│   ├── _mixins.scss       # Mixins y funciones utilitarias
│   └── styles.scss         # Estilos principales y componentes
├── assets/
│   └── images/            # Imágenes y recursos
├── styles.css             # CSS compilado (generado automáticamente)
├── styles.css.map         # Source map para desarrollo
├── package.json           # Dependencias y scripts
└── DESIGN-SYSTEM.md       # Esta documentación
```

---

## 🎨 Variables del Sistema

### Paleta de Colores

```scss
// Colores de marca
$alation-orange: #F57C00;  // Color principal
$neo-navy: #1d4289;        // Color corporativo
$sun-yellow: #f2c75c;      // Color de acento

// Colores semánticos
$color-success: #22c55e;
$color-warning: #fbbf24;
$color-error: #ef4444;
```

### Tipografía

```scss
$font-primary: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
$font-weight-regular: 400;
$font-weight-medium: 500;
$font-weight-bold: 700;
```

### Espaciado

```scss
$spacing-xs: 0.5rem;   // 8px
$spacing-sm: 1rem;     // 16px
$spacing-md: 1.5rem;   // 24px
$spacing-lg: 2rem;     // 32px
$spacing-xl: 3rem;     // 48px
```

### Breakpoints Responsive

```scss
// Breakpoints del sistema
$breakpoint-sm: 576px;   // Teléfonos grandes
$breakpoint-md: 768px;   // Tablets
$breakpoint-lg: 992px;   // Laptops pequeñas
$breakpoint-xl: 1200px;  // Desktops

// Media queries utilizadas en el mixin responsive
@media (min-width: 576px)  { /* sm */ }
@media (min-width: 768px)  { /* md */ }
@media (min-width: 992px)  { /* lg */ }
@media (min-width: 1200px) { /* xl */ }
```

### Border Radius

```scss
$border-radius-sm: 4px;    // Elementos pequeños (badges, chips)
$border-radius-md: 8px;    // Botones, inputs, cards estándar
$border-radius-lg: 16px;   // Containers grandes, modales
$border-radius-xl: 24px;   // Elementos especiales
$border-radius-circle: 50%; // Elementos circulares (avatars)
```

### Sombras y Elevaciones

```scss
// Sombras neutras
$box-shadow-sm: 0 1px 3px 0 rgba(0, 0, 0, 0.1);      // Elevación sutil
$box-shadow-md: 0 4px 6px -1px rgba(0, 0, 0, 0.1);   // Elevación media
$box-shadow-lg: 0 10px 15px -3px rgba(0, 0, 0, 0.1); // Elevación alta
$box-shadow-xl: 0 20px 25px -5px rgba(0, 0, 0, 0.1); // Elevación máxima

// Sombras de color (para elementos destacados)
$box-shadow-primary-sm: 0 2px 8px 0 rgba(245, 124, 0, 0.15);
$box-shadow-primary-md: 0 4px 16px 0 rgba(245, 124, 0, 0.2);
$box-shadow-primary-lg: 0 0 40px 0 rgba(245, 124, 0, 0.2);
$box-shadow-success: 0 4px 12px 0 rgba(34, 197, 94, 0.2);
$box-shadow-warning: 0 4px 12px 0 rgba(251, 191, 36, 0.2);
$box-shadow-error: 0 4px 12px 0 rgba(239, 68, 68, 0.2);
```

---

## 🛠 Mixins y Utilidades

### Transiciones

```scss
@mixin smooth-transition($properties...) {
  transition-property: $properties;
  transition-duration: 0.3s;
  transition-timing-function: ease-in-out;
}

// Uso
.elemento {
  @include m.smooth-transition(transform, opacity);
}
```

### Border Radius

```scss
@mixin border-radius($size: 'md') {
  // $size: 'sm', 'md', 'lg', 'xl', 'circle'
}

// Uso
.card {
  @include m.border-radius('lg');
}
```

### Elevación con Color

```scss
@mixin elevation($level: 'md', $color: 'neutral') {
  // $level: 'sm', 'md', 'lg', 'xl'
  // $color: 'neutral', 'primary', 'success', 'warning', 'error'
}

// Uso
.card-especial {
  @include m.elevation('lg', 'primary');
}
```

### Card Estándar

```scss
@mixin standard-card(
  $padding: 25px,
  $elevation: 'lg',
  $elevation-color: 'neutral',
  $radius: 'lg',
  $border-style: 'light'
) {
  // Crea una card completa con todas las propiedades
}

// Uso
.product-card {
  @include m.standard-card();
}

.trusted-card {
  @include m.standard-card($elevation-color: 'primary');
}
```

### Botones

```scss
@mixin button-style($background, $color: $white) {
  // Estilo base para botones
}

// Uso
.btn-custom {
  @include m.button-style($color-primary);
}
```

### Responsive

```scss
@mixin responsive($breakpoint) {
  // $breakpoint: 'sm' (576px), 'md' (768px), 'lg' (992px), 'xl' (1200px)
}

// Uso con ejemplos por breakpoint
.elemento {
  // Mobile first (default)
  display: block;
  
  @include m.responsive('sm') {  // >= 576px (teléfonos grandes)
    display: flex;
  }
  
  @include m.responsive('md') {  // >= 768px (tablets)
    flex-direction: row;
  }
  
  @include m.responsive('lg') {  // >= 992px (laptops)
    justify-content: space-between;
  }
  
  @include m.responsive('xl') {  // >= 1200px (desktops)
    max-width: 1200px;
    margin: 0 auto;
  }
}
```

---

## 🧩 Componentes

### Botones

```scss
.btn-primary {
  @include m.button-style(v.$color-primary, v.$white);
  min-width: 140px;
}

.btn-secondary {
  @include m.button-style(transparent, v.$color-primary);
  border: 1px solid v.$color-primary;
}

.link-arrow {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  color: v.$alation-orange;
  // Incluye animación de flecha
}
```

### Cards

```scss
.feature-card {
  @include m.standard-card();
}

.product-card {
  @include m.standard-card($elevation: 'md');
}

.trusted-card {
  @include m.standard-card($elevation-color: 'primary');
}
```

### Layout

```scss
.container {
  @include m.container();
}

.grid {
  @include m.flex-grid($columns: 3, $gap: v.$spacing-md);
}
```

### Secciones Especiales

```scss
.cta-section {
  padding: v.$spacing-lg 0;
  text-align: center;
  // Para aislar CTAs del contenido
}
```

---

## 🔧 Desarrollo

### Comandos útiles

```bash
# Compilar con observador
sass --watch styles/styles.scss:styles.css --style expanded

# Compilar una sola vez
sass styles/styles.scss:styles.css

# Ver errores detallados
sass --watch styles/styles.scss:styles.css --style expanded --verbose
```

### Estructura SCSS

1. **Variables**: Colores, tipografía, espaciado, etc.
2. **Mixins**: Funciones reutilizables
3. **Base**: Reset, elementos base
4. **Layout**: Grid, containers
5. **Componentes**: Botones, cards, etc.
6. **Utilidades**: Clases auxiliares

### Naming Convention

- Variables: `$color-primary`, `$spacing-md`
- Mixins: `@mixin button-style()`, `@mixin standard-card()`
- Clases: `.btn-primary`, `.card-elevation`, `.link-arrow`

### Import Pattern

```scss
@use 'sass:color';
@use './variables' as v;
@use './mixins' as m;

// Usar variables: v.$color-primary
// Usar mixins: @include m.button-style()
```

---

## 📝 Ejemplos de Uso

### Card con Elevación de Color

```scss
.special-card {
  @include m.standard-card(
    $elevation: 'lg',
    $elevation-color: 'primary',
    $radius: 'xl'
  );
  
  // Propiedades específicas
  background: v.$white;
  min-height: 200px;
}
```

### Botón con Transición

```scss
.custom-button {
  @include m.button-style(v.$color-success);
  @include m.border-radius('md');
  @include m.smooth-transition(transform, box-shadow);
  
  &:hover {
    transform: translateY(-2px);
    @include m.elevation('md', 'success');
  }
}
```

### Layout Responsive

```scss
.product-grid {
  @include m.flex-grid(1, v.$spacing-md);
  
  @include m.responsive('sm') {
    gap: v.$spacing-lg;
  }
  
  @include m.responsive('md') {
    @include m.flex-grid(2, v.$spacing-lg);
  }
  
  @include m.responsive('lg') {
    @include m.flex-grid(3, v.$spacing-xl);
  }
  
  @include m.responsive('xl') {
    @include m.flex-grid(4, v.$spacing-xl);
    max-width: 1200px;
    margin: 0 auto;
  }
}
```

### Layout Responsive con Breakpoints Específicos

```scss
.product-grid {
  // Mobile (< 576px): 1 columna
  @include m.flex-grid(1, v.$spacing-md);
  
  // Teléfonos grandes (>= 576px): 1 columna con más espacio
  @include m.responsive('sm') {
    gap: v.$spacing-lg;
  }
  
  // Tablets (>= 768px): 2 columnas
  @include m.responsive('md') {
    @include m.flex-grid(2, v.$spacing-lg);
  }
  
  // Laptops (>= 992px): 3 columnas
  @include m.responsive('lg') {
    @include m.flex-grid(3, v.$spacing-xl);
  }
  
  // Desktops (>= 1200px): 4 columnas con contenedor centrado
  @include m.responsive('xl') {
    @include m.flex-grid(4, v.$spacing-xl);
    max-width: 1200px;
    margin: 0 auto;
  }
}
```

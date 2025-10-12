# Alation Design System - Guía de Uso

## 📋 Índice

1. [Instalación](#instalación)
2. [Estructura del Proyecto](#estructura-del-proyecto)
3. [Variables del Sistema](#variables-del-sistema)
4. [Componentes](#componentes)
5. [Desarrollo](#desarrollo)

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
│   ├── _mixins.scss       # Mixins y funciones
│   └── styles.scss         # Estilos principales y componentes
├── assets/
│   └── images/            # Imágenes y recursos
├── styles.css             # CSS compilado (generado automáticamente)
├── styles.css.map         # Source map para desarrollo
├── package.json           # Dependencias y scripts
└── DESIGN-SYSTEM.md       # Documentación
```

---

## 🎨 Variables del Sistema

### Paleta de Colores de Marca

```scss
$alation-orange: #F57C00;  // Color principal - CTAs y elementos activos
$neo-navy: #1d4289;        // Color corporativo - Fondos y encabezados
$sun-yellow: #f2c75c;      // Color de acento - Gráficos y destacados
```

### Colores UI Semánticos

```scss
$link-blue: #1764CC;       // Hipervínculos
$success-green: #4CAF50;   // Mensajes de éxito
$warning-cherry: #D32F2F;  // Mensajes de error
$info-blue: #3F51B5;       // Información
```

### Colores Neutrales

```scss
$text-body: #383838;       // Texto principal
$text-secondary: #606060;  // Texto secundario
$text-subtle: #8C8C8C;     // Texto de ayuda
$border-light: #E2E2E2;    // Bordes
$background-light: #FDFBF8; // Fondo principal
$white: #FFFFFF;           // Blanco puro
```

### Mapeo Funcional (Uso Recomendado)

```scss
// En lugar de usar $alation-orange directamente, usa:
$color-primary: $alation-orange;
$color-secondary: $neo-navy;
$color-accent: $sun-yellow;

// Para textos:
$color-text-base: $text-body;
$color-text-muted: $text-secondary;
$color-link: $link-blue;

// Para estados:
$color-state-success: $success-green;
$color-state-warning: $warning-cherry;
$color-state-info: $info-blue;
```

---

## 🎯 Tipografía

```scss
$font-primary: "Public Sans", system-ui, sans-serif;
$font-mono: "SF Mono", "Fira Code", monospace;

$font-size-base: 1rem;       // 16px
$font-weight-normal: 400;
$font-weight-bold: 700;
$line-height-base: 1.6;
```

---

## 📏 Sistema de Espaciado

Basado en una unidad de `0.5rem` (8px):

```scss
$spacing-xs: 0.5rem;   // 8px
$spacing-sm: 1rem;     // 16px
$spacing-md: 1.5rem;   // 24px
$spacing-lg: 2rem;     // 32px
$spacing-xl: 3rem;     // 48px
```

### Uso

```scss
.component {
  padding: $spacing-md;           // 24px
  margin-bottom: $spacing-lg;     // 32px
  gap: $spacing-sm;               // 16px
}
```

---

## 🎨 Bordes y Sombras

```scss
// Bordes
$border-radius: 4px;
$border-radius-md: 8px;
$border-radius-lg: 16px;
$border-radius-xl: 24px;

// Sombras
$box-shadow-sm: 0 1px 3px 0 rgba(0, 0, 0, 0.1);
$box-shadow-md: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
$box-shadow-lg: 0 0 40px 0 rgba(244, 124, 32, 0.20);
```

---

## 🔧 Mixins y Placeholders

### Mixin: button-style

Crea un botón con estilo base.

```scss
@mixin button-style($background, $color) {
  display: inline-block;
  padding: $spacing-sm $spacing-md;
  font-weight: $font-weight-bold;
  text-align: center;
  color: $color;
  background-color: $background;
  border: 1px solid transparent;
  border-radius: $border-radius-md;
  cursor: pointer;
  transition: background-color 0.2s ease-in-out;
  
  &:hover {
    background-color: darken($background, 5%);
  }
}
```

**Uso:**

```scss
.btn-primary {
  @include button-style($color-primary, $white);
}

.btn-secondary {
  @include button-style($color-secondary, $white);
}
```

### Mixin: card-elevation

Crea cards con elevación.

```scss
@mixin card-elevation($shadow: 'md') {
  background: $white;
  border-radius: $border-radius-lg;
  
  @if $shadow == 'sm' {
    box-shadow: $box-shadow-sm;
  } @else if $shadow == 'md' {
    box-shadow: $box-shadow-md;
  } @else if $shadow == 'lg' {
    box-shadow: $box-shadow-lg;
  }
}
```

**Uso:**

```scss
.product-card {
  @include card-elevation('lg');
  padding: 25px;
}
```

### Mixin: smooth-transition

Transiciones suaves.

```scss
@mixin smooth-transition($property: all, $duration: 0.3s) {
  transition: $property $duration ease;
}
```

**Uso:**

```scss
.nav-link {
  color: $color-secondary;
  @include smooth-transition(color);
  
  &:hover {
    color: $color-primary;
  }
}
```

### Placeholder: reset-list

Resetea estilos de lista.

```scss
%reset-list {
  list-style: none;
  margin: 0;
  padding: 0;
}
```

**Uso:**

```scss
.navigation-menu {
  @extend %reset-list;
}
```

---

## 🎨 Componentes Principales

### Botones

```html
<button class="btn-primary">Request a Demo</button>
<button class="btn-secondary">Learn More</button>
```

### Cards

```html
<div class="product-card">
  <img src="..." alt="..." class="product-image">
  <h3 class="product-title">Título</h3>
  <p class="product-description">Descripción</p>
  <a href="#" class="link-arrow">Learn more</a>
</div>
```

### Secciones

```html
<section class="section-padding">
  <div class="container">
    <h2 class="section-title">T��tulo de Sección</h2>
    <!-- Contenido -->
  </div>
</section>
```

---

## 🛠️ Desarrollo

### Agregar nuevos colores

1. Abre `styles/_variables.scss`
2. Agrega el color en la sección apropiada:

```scss
// Nueva variable
$new-color: #HEXCODE;

// Mapeo funcional (recomendado)
$color-new-purpose: $new-color;
```

3. Usa la variable en tu código:

```scss
.component {
  background-color: $color-new-purpose;
}
```

### Crear nuevos componentes

1. Define el componente en `styles/styles.scss`:

```scss
.new-component {
  @include card-elevation('md');
  padding: $spacing-lg;
  color: $color-text-base;
  
  &__title {
    font-size: 1.5rem;
    font-weight: $font-weight-bold;
    color: $color-secondary;
  }
  
  &__description {
    color: $color-text-muted;
    line-height: $line-height-base;
  }
}
```

2. Compila el CSS:

```bash
npm run build:css
```

---

## 📱 Responsive Design

El sistema incluye breakpoints responsivos:

```scss
// Tablet
@media (max-width: 768px) {
  // Estilos tablet
}

// Mobile
@media (max-width: 480px) {
  // Estilos mobile
}
```

---

## ✅ Mejores Prácticas

1. **Usa variables funcionales** en lugar de colores directos:
   - ✅ `color: $color-primary;`
   - ❌ `color: #F57C00;`

2. **Usa el sistema de espaciado**:
   - ✅ `margin: $spacing-md;`
   - ❌ `margin: 24px;`

3. **Aprovecha los mixins**:
   - ✅ `@include button-style($color-primary, $white);`
   - ❌ Escribir todos los estilos manualmente

4. **Mantén la consistencia**:
   - Usa siempre las mismas variables para los mismos propósitos
   - Sigue la nomenclatura BEM para componentes nuevos

---

## 🎯 Ejemplos Completos

### Crear un nuevo botón

```scss
.btn-tertiary {
  @include button-style($color-accent, $color-secondary);
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: $box-shadow-md;
  }
}
```

### Crear una nueva card

```scss
.service-card {
  @include card-elevation('lg');
  padding: $spacing-lg;
  border: 1px solid $color-border;
  @include smooth-transition(transform);
  
  &:hover {
    transform: translateY(-4px);
  }
  
  &__icon {
    width: 48px;
    height: 48px;
    margin-bottom: $spacing-md;
  }
  
  &__title {
    font-size: 1.5rem;
    font-weight: $font-weight-bold;
    color: $color-secondary;
    margin-bottom: $spacing-sm;
  }
  
  &__description {
    color: $color-text-base;
    line-height: $line-height-base;
  }
}
```

---

## 📞 Soporte

Para dudas o sugerencias sobre el Design System, contacta al equipo de desarrollo.

---

**Última actualización:** Enero 2025  
**Versión:** 1.0.0

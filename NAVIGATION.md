# Documentación de Navegación - Alation Landing Page

## 📋 Tabla de Contenidos

1. [Sistema de Navegación Dual](#sistema-de-navegación-dual)
2. [FAQ Accordion](#faq-accordion)
3. [Implementación Técnica](#implementación-técnica)

---

## 🧭 Sistema de Navegación Dual

### Menú Principal (Main Menu)

El menú principal está ubicado en la parte superior de la página y contiene:

- **Logo de Alation**
- **Navegación principal**: Products, Solutions, Customer Stories, Learn, Company
- **Barra de búsqueda**
- **Botón CTA**: "Request a Demo"

#### Comportamiento Sticky

```javascript
// El menú principal:
// 1. Está sticky en la parte superior inicialmente
// 2. Se oculta (translateY(-100%)) cuando el segundo nav se vuelve sticky
```

**Características:**
- ✅ Backdrop blur para efecto de vidrio esmerilado
- ✅ Transición suave al ocultarse
- ✅ Dropdown indicators en items con submenús
- ✅ Responsive: se adapta a mobile y tablet

---

### Navegación Secundaria (Secondary Nav)

La navegación secundaria está ubicada justo antes de la sección "Products" y contiene enlaces directos a:

- Products
- Alation Agents
- Platform Services
- Customer Stories

#### Comportamiento Sticky

```javascript
// El segundo nav:
// 1. Inicia como parte del flujo normal del documento
// 2. Se vuelve sticky (position: fixed) cuando alcanza la parte superior
// 3. Permanece sticky durante el resto del scroll
```

**Características:**
- ✅ Se activa al llegar a la parte superior
- ✅ Smooth scroll a las secciones
- ✅ Backdrop blur
- ✅ Transición suave

---

## ❓ FAQ Accordion

### Comportamiento por Defecto

Todos los items del FAQ están **colapsados** (cerrados) por defecto para una mejor experiencia de usuario.

### Interacción

```javascript
// Al hacer click en un FAQ item:
// 1. Se cierran TODOS los items abiertos
// 2. Se abre solo el item clickeado (si estaba cerrado)
// 3. Si el item ya estaba abierto, se cierra
```

### Efectos Visuales

#### Hover en el Botón Toggle
```scss
.faq-toggle:hover {
  background: darken($white, 5%);
  transform: scale(1.05);
}
```

#### Rotación del Icono
```scss
// Item cerrado: icono apuntando abajo (normal)
// Item abierto: icono rotado 180° (apuntando arriba)
.faq-item.open .faq-toggle {
  transform: rotate(180deg);
}
```

#### Expansión del Contenido
```scss
// Cerrado: max-height: 0
// Abierto: max-height: 1000px con transición de 0.4s
.faq-content {
  max-height: 0;
  overflow: hidden;
  transition: max-height 0.4s ease;
}

.faq-item.open .faq-content {
  max-height: 1000px;
  margin-top: 40px;
}
```

---

## 🛠️ Implementación Técnica

### Archivos Involucrados

```
├── index.html           # Estructura HTML con IDs
├── app.js              # Lógica JavaScript
├── styles/
│   ├── _variables.scss # Variables del sistema
│   └── styles.scss     # Estilos de navegación y FAQ
└── styles.css          # CSS compilado
```

### HTML - IDs Importantes

```html
<!-- Menú Principal -->
<nav class="main-menu" id="mainNav">
  <!-- ... -->
</nav>

<!-- Navegación Secundaria -->
<nav class="nav-overlay" id="secondaryNav">
  <!-- ... -->
</nav>

<!-- Secciones con IDs para navegación -->
<section id="products">...</section>
<section id="agents">...</section>
<section id="services">...</section>
<section id="stories">...</section>
```

### JavaScript - Funcionalidades

#### 1. Sticky Navigation

```javascript
// Calcula la posición del segundo nav
function updateNavPositions() {
  secondaryNavTop = secondaryNav.offsetTop;
}

// Escucha el scroll
window.addEventListener('scroll', () => {
  const scrollPos = window.scrollY;
  
  if (scrollPos >= secondaryNavTop - mainNav.offsetHeight) {
    secondaryNav.classList.add('is-sticky');
    mainNav.classList.add('hide-main');
  } else {
    secondaryNav.classList.remove('is-sticky');
    mainNav.classList.remove('hide-main');
  }
});
```

#### 2. FAQ Accordion

```javascript
faqItems.forEach(item => {
  const header = item.querySelector('.faq-header');
  
  header.addEventListener('click', () => {
    const isOpen = item.classList.contains('open');
    
    // Cierra todos
    faqItems.forEach(otherItem => {
      otherItem.classList.remove('open');
    });
    
    // Abre el clickeado si estaba cerrado
    if (!isOpen) {
      item.classList.add('open');
    }
  });
});
```

#### 3. Smooth Scroll

```javascript
document.querySelectorAll('.nav-link').forEach(link => {
  link.addEventListener('click', (e) => {
    const href = link.getAttribute('href');
    if (href && href.startsWith('#')) {
      e.preventDefault();
      const target = document.querySelector(href);
      if (target) {
        const offsetTop = target.offsetTop - 
                         mainNav.offsetHeight - 
                         secondaryNav.offsetHeight;
        window.scrollTo({
          top: offsetTop,
          behavior: 'smooth'
        });
      }
    }
  });
});
```

### SCSS - Clases Importantes

#### Main Menu

```scss
.main-menu {
  position: sticky;
  top: 0;
  z-index: 200;
  backdrop-filter: blur(15px);
  
  &.hide-main {
    transform: translateY(-100%);
  }
}
```

#### Secondary Nav

```scss
.nav-overlay {
  position: relative;
  z-index: 150;
  backdrop-filter: blur(10px);
  
  &.is-sticky {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
  }
}
```

#### FAQ Items

```scss
.faq-item {
  background: lighten($color-border, 8%);
  border-radius: $border-radius-lg;
  
  .faq-header {
    cursor: pointer;
  }
  
  .faq-content {
    max-height: 0;
    overflow: hidden;
    transition: max-height 0.4s ease;
  }
  
  &.open .faq-content {
    max-height: 1000px;
    margin-top: 40px;
  }
}
```

---

## 📱 Responsive Behavior

### Desktop (> 768px)
- Menú principal en una línea
- Navegación secundaria centrada
- FAQ con espacio completo

### Tablet (≤ 768px)
- Menú principal se reorganiza
- Items de navegación en dos filas
- FAQ items con menos padding

### Mobile (≤ 480px)
- Logo más pequeño
- Items de menú compactos
- FAQ acordeón con texto reducido

---

## ✅ Checklist de Funcionalidades

- [x] Menú principal sticky arriba
- [x] Menú principal se oculta al aparecer segundo nav
- [x] Segundo nav sticky al llegar arriba
- [x] Smooth scroll a secciones
- [x] FAQ items colapsados por defecto
- [x] Solo un FAQ abierto a la vez
- [x] Hover effect en botón toggle
- [x] Rotación de icono al expandir
- [x] Transiciones suaves en todo
- [x] Responsive en todos los breakpoints

---

## 🐛 Troubleshooting

### El segundo nav no se vuelve sticky

**Solución**: Verifica que el JavaScript esté cargado correctamente:
```bash
# Verifica que app.js exista
ls -la app.js

# Verifica que esté incluido en el HTML
grep "app.js" index.html
```

### El FAQ no se expande

**Solución**: Asegúrate de que el CSS esté compilado:
```bash
npm run build:css
```

### El menú principal no se oculta

**Solución**: Verifica que ambos navs tengan los IDs correctos:
- `id="mainNav"` en el menú principal
- `id="secondaryNav"` en la navegación secundaria

---

## 🎯 Mejoras Futuras

- [ ] Menú mobile hamburger
- [ ] Animaciones más elaboradas
- [ ] Mega menús para dropdowns
- [ ] Dark mode toggle
- [ ] Búsqueda funcional
- [ ] Lazy loading en FAQ

---

**Última actualización:** Enero 2025  
**Versión:** 1.0.0

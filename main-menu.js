document.addEventListener('DOMContentLoaded', function() {
    const mainMenuToggle = document.getElementById('mainMenuToggle');
    const mainMenuNav = document.getElementById('mainMenuNav');
    const mainMenuOverlay = document.getElementById('mainMenuOverlay');
    const body = document.body;
    
    // Elementos del megamenu
    const megamenuItems = document.querySelectorAll('.menu-item.has-megamenu');
    
    // Toggle menú principal
    function toggleMainMenu() {
        const isActive = mainMenuNav.classList.contains('is-active');
        
        if (isActive) {
            closeMainMenu();
        } else {
            openMainMenu();
        }
    }
    
    function openMainMenu() {
        mainMenuNav.classList.add('is-active');
        mainMenuToggle.classList.add('is-active');
        mainMenuOverlay.classList.add('is-active');
        body.classList.add('main-menu-open');
    }
    
    function closeMainMenu() {
        mainMenuNav.classList.remove('is-active');
        mainMenuToggle.classList.remove('is-active');
        mainMenuOverlay.classList.remove('is-active');
        body.classList.remove('main-menu-open');
        
        // Cerrar todos los megamenus
        megamenuItems.forEach(item => {
            item.classList.remove('is-open');
        });
    }
    
    // Toggle megamenu (solo en móvil/tablet)
    function toggleMegamenu(menuItem) {
        if (window.innerWidth < 992) {
            const isOpen = menuItem.classList.contains('is-open');
            
            // Cerrar otros megamenus
            megamenuItems.forEach(item => {
                if (item !== menuItem) {
                    item.classList.remove('is-open');
                }
            });
            
            // Toggle current megamenu
            menuItem.classList.toggle('is-open', !isOpen);
        }
    }
    
    // Event listeners
    mainMenuToggle.addEventListener('click', toggleMainMenu);
    mainMenuOverlay.addEventListener('click', closeMainMenu);
    
    // Megamenu toggles para móvil
    megamenuItems.forEach(item => {
        const trigger = item.querySelector('.menu-item-trigger');
        if (trigger) {
            trigger.addEventListener('click', (e) => {
                e.preventDefault();
                toggleMegamenu(item);
            });
        }
    });
    
    // Cerrar al redimensionar a desktop
    window.addEventListener('resize', function() {
        if (window.innerWidth >= 992) {
            closeMainMenu();
        }
    });
    
    // Cerrar con Escape
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') {
            closeMainMenu();
        }
    });
    
    // Prevenir cierre del megamenu al hacer click dentro
    const megamenus = document.querySelectorAll('.megamenu');
    megamenus.forEach(megamenu => {
        megamenu.addEventListener('click', (e) => {
            e.stopPropagation();
        });
    });
});
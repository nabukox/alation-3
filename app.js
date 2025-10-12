/**
 * Alation Landing Page - JavaScript
 * Navigation sticky behavior and FAQ accordion
 */

// DOM Elements
const mainNav = document.getElementById('mainNav');
const secondaryNav = document.getElementById('secondaryNav');
const productsSection = document.getElementById('products');

// Sticky Navigation Behavior
let secondaryNavTop = 0;

function updateNavPositions() {
  secondaryNavTop = secondaryNav.offsetTop;
}

window.addEventListener('load', updateNavPositions);
window.addEventListener('resize', updateNavPositions);

window.addEventListener('scroll', () => {
  const scrollPos = window.scrollY;
  
  // Secondary nav becomes sticky when it reaches the top
  if (scrollPos >= secondaryNavTop - mainNav.offsetHeight) {
    secondaryNav.classList.add('is-sticky');
    mainNav.classList.add('hide-main');
  } else {
    secondaryNav.classList.remove('is-sticky');
    mainNav.classList.remove('hide-main');
  }
});

// FAQ Accordion
const faqItems = document.querySelectorAll('.faq-item');

faqItems.forEach(item => {
  const header = item.querySelector('.faq-header');
  
  header.addEventListener('click', () => {
    const isOpen = item.classList.contains('open');
    
    // Close all items
    faqItems.forEach(otherItem => {
      otherItem.classList.remove('open');
    });
    
    // Open clicked item if it was closed
    if (!isOpen) {
      item.classList.add('open');
    }
  });
});

// Smooth scroll for secondary nav links
document.querySelectorAll('.nav-link').forEach(link => {
  link.addEventListener('click', (e) => {
    const href = link.getAttribute('href');
    if (href && href.startsWith('#')) {
      e.preventDefault();
      const target = document.querySelector(href);
      if (target) {
        const offsetTop = target.offsetTop - mainNav.offsetHeight - secondaryNav.offsetHeight;
        window.scrollTo({
          top: offsetTop,
          behavior: 'smooth'
        });
      }
    }
  });
});

// Mobile menu toggle
const menuToggle = document.getElementById('menuToggle');
const navLinks = document.getElementById('navLinks');

menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    
    // Change menu icon
    const menuIcon = menuToggle.querySelector('.menu-icon');
    if (navLinks.classList.contains('active')) {
        menuIcon.style.background = 'transparent';
        menuIcon.style.transform = 'rotate(180deg)';
        menuIcon.querySelector('::before').style.transform = 'rotate(45deg) translate(6px, 6px)';
        menuIcon.querySelector('::after').style.transform = 'rotate(-45deg) translate(6px, -6px)';
    } else {
        menuIcon.style.background = '#4a5568';
        menuIcon.style.transform = 'rotate(0)';
        menuIcon.querySelector('::before').style.transform = 'none';
        menuIcon.querySelector('::after').style.transform = 'none';
    }
});

// Close mobile menu when clicking on a link
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('active');
    });
});

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const headerOffset = 64;
            const elementPosition = target.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });
        }
    });
});

// Form submission
const contactForm = document.getElementById('contactForm');
    alert('Mensagem enviada com sucesso!!');
;

// Update copyright year
document.getElementById('year').textContent = new Date().getFullYear();

// Add scroll animation for elements
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
      }
    });
  }, { threshold: 0.1 }); // Ajuste o threshold se necessário

// Observe all sections
document.querySelectorAll('section').forEach(section => {
    section.style.background = '#0c0d0d';
    section.style.transform = 'translateY(20px)'; // Volte ao valor original
    section.style.opacity = '0'; // Inicia invisível
    section.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
    
    // Apenas estas propriedades extras
    section.style.position = 'relative';
    section.style.zIndex = '1';

    observer.observe(section);
});
// ===== Navbar Scroll Effect =====
const navbar = document.getElementById('navbar');
const navToggle = document.getElementById('nav-toggle');
const navLinks = document.getElementById('nav-links');

window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// ===== Mobile Navigation Toggle =====
navToggle.addEventListener('click', () => {
    navToggle.classList.toggle('active');
    navLinks.classList.toggle('active');
});

// Close mobile nav on link click
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
        navToggle.classList.remove('active');
        navLinks.classList.remove('active');
    });
});

// ===== Active Navigation Link =====
const sections = document.querySelectorAll('section[id]');

function updateActiveNav() {
    const scrollPosition = window.scrollY + 120;

    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        const sectionId = section.getAttribute('id');
        const navLink = document.querySelector(`.nav-link[href="#${sectionId}"]`);

        if (navLink && scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
            document.querySelectorAll('.nav-link').forEach(l => l.classList.remove('active'));
            navLink.classList.add('active');
        }
    });
}

window.addEventListener('scroll', updateActiveNav);
updateActiveNav();

// ===== Scroll Reveal Animation =====
function revealOnScroll() {
    const reveals = document.querySelectorAll('.reveal');
    const windowHeight = window.innerHeight;

    reveals.forEach(el => {
        const elementTop = el.getBoundingClientRect().top;
        const revealPoint = 100;

        if (elementTop < windowHeight - revealPoint) {
            el.classList.add('visible');
        }
    });
}

// Add reveal class to animatable elements
document.addEventListener('DOMContentLoaded', () => {
    const animateElements = document.querySelectorAll(
        '.skill-category, .project-card, .contact-card, .highlight-item, .interest-tag, .education-card, .about-text, .about-interests'
    );
    
    animateElements.forEach((el, index) => {
        el.classList.add('reveal');
        el.style.transitionDelay = `${index * 0.05}s`;
    });

    // Run once on load
    revealOnScroll();
});

window.addEventListener('scroll', revealOnScroll);

// ===== Smooth scroll for all anchor links =====
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({ behavior: 'smooth' });
        }
    });
});

// ===== Dynamic year in footer =====
const yearEl = document.querySelector('.footer-copyright');
if (yearEl) {
    yearEl.innerHTML = yearEl.innerHTML.replace(/\d{4}/, new Date().getFullYear());
}

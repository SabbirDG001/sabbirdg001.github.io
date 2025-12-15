/**
 * Custom JavaScript for Dragon's Portfolio
 * Author: Gemini
 * Description: Handles animations, navbar behavior, and form validation.
 */

document.addEventListener('DOMContentLoaded', function() {

    const navbar = document.querySelector('.navbar');
    const navLinks = document.querySelectorAll('.nav-link');
    const sections = document.querySelectorAll('section');

    // --- On-load Animations ---
    const onLoadElements = document.querySelectorAll('.animate-on-load');
    onLoadElements.forEach((el, index) => {
        setTimeout(() => {
            el.style.opacity = '1';
            el.style.transform = 'translateY(0)';
        }, index * 150); // Staggered animation
    });

    // --- Navbar Active Link Highlighting on Scroll ---
    const activateNavLink = () => {
        let index = sections.length;

        while (--index && window.scrollY + 100 < sections[index].offsetTop) {}

        navLinks.forEach((link) => link.classList.remove('active'));
        // Check if a corresponding navLink exists before adding 'active' class
        if (navLinks[index]) {
            navLinks[index].classList.add('active');
        }
    };

    // --- Intersection Observer for Scroll Animations ---
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };

    const observerCallback = (entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
                observer.unobserve(entry.target); // Animate only once
            }
        });
    };

    const scrollObserver = new IntersectionObserver(observerCallback, observerOptions);
    const animatedElements = document.querySelectorAll('.animate-on-scroll');
    animatedElements.forEach(el => scrollObserver.observe(el));

    // --- Event Listeners ---
    window.addEventListener('scroll', () => {
        // Navbar background change on scroll
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
        
        // Active link update
        activateNavLink();
    });

    // Initial check for active link
    activateNavLink();

    // --- Contact Form Validation ---
    const contactForm = document.getElementById('contactForm');
    contactForm.addEventListener('submit', function(event) {
        event.preventDefault();

        // Simple validation check
        const name = document.getElementById('name').value.trim();
        const email = document.getElementById('email').value.trim();
        const message = document.getElementById('message').value.trim();

        if (name === '' || email === '' || message === '') {
            alert('Please fill out all fields.');
            return;
        }

        // Basic email format check
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            alert('Please enter a valid email address.');
            return;
        }

        // On success
        alert('Thank you for your message! I will get back to you soon.');
        contactForm.reset();
    });

});

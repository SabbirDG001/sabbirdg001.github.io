/**
 * Custom JavaScript for Dragon's Portfolio
 * Author: Gemini
 * Description: Handles animations, navbar behavior, and form validation.
 */

document.addEventListener('DOMContentLoaded', function() {

    const navbar = document.querySelector('.navbar');
    const navLinks = document.querySelectorAll('.nav-link');
    const sections = document.querySelectorAll('section');



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

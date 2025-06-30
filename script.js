// Simple form handler for contact form
const contactForm = document.querySelector('form');
if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        alert('Thank you for contacting Tea Bliss! We will get back to you soon.');
        contactForm.reset();
    });
} 
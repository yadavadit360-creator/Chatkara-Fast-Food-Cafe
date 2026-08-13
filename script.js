// Hamburger Menu Toggle
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

if (hamburger) {
    hamburger.addEventListener('click', () => {
        navLinks.classList.toggle('active');
    });
}

// Close menu when a link is clicked
if (navLinks) {
    navLinks.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('active');
        });
    });
}

// Menu Category Filter
const categoryButtons = document.querySelectorAll('.category-btn');
const menuItems = document.querySelectorAll('.menu-item');

categoryButtons.forEach(button => {
    button.addEventListener('click', () => {
        // Remove active class from all buttons
        categoryButtons.forEach(btn => btn.classList.remove('active'));
        // Add active class to clicked button
        button.classList.add('active');
        
        const category = button.getAttribute('data-category');
        
        menuItems.forEach(item => {
            // Show all items if 'all' is selected
            if (category === 'all') {
                item.classList.add('active');
            } else {
                // Show only items that match the selected category
                if (item.getAttribute('data-category') === category) {
                    item.classList.add('active');
                } else {
                    item.classList.remove('active');
                }
            }
        });
    });
});

// Initialize - show all items on page load
window.addEventListener('load', () => {
    menuItems.forEach(item => item.classList.add('active'));
});

// Contact Form Submission
const contactForm = document.querySelector('.contact-form');
if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        alert('Thank you for your message! We will get back to you soon.');
        contactForm.reset();
    });
}

// Smooth Scrolling for Navigation Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Order Now Button Actions
const orderButtons = document.querySelectorAll('.order-buttons .btn');
if (orderButtons.length > 0) {
    orderButtons[0].addEventListener('click', () => {
        // Phone order
        alert('Call us at +91 98765 43210 to place your order!');
    });
    
    orderButtons[1].addEventListener('click', () => {
        // Online order
        alert('Online ordering feature coming soon! Check back later.');
    });
}

// Add scroll animation for elements
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

document.querySelectorAll('.menu-item, .info-card, .stat').forEach(element => {
    element.style.opacity = '0';
    element.style.transform = 'translateY(20px)';
    element.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(element);
});

// Console welcome message
console.log('%cWelcome to Chatkara! 🔥', 'font-size: 20px; color: #FF6B35; font-weight: bold;');
console.log('Hot, fresh, cheesy and full of flavor!');
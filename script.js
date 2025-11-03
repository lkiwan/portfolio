// Mobile Menu Toggle
const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');
const navItems = document.querySelectorAll('.nav-links a');

menuToggle.addEventListener('click', () => {
    menuToggle.classList.toggle('active');
    navLinks.classList.toggle('active');
});

// Close mobile menu when clicking on a nav link
navItems.forEach(item => {
    item.addEventListener('click', () => {
        menuToggle.classList.remove('active');
        navLinks.classList.remove('active');
    });
});

// Navbar scroll effect
const navbar = document.querySelector('.navbar');
let lastScroll = 0;

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;

    if (currentScroll <= 0) {
        navbar.style.boxShadow = '0 10px 30px rgba(0, 0, 0, 0.1)';
    } else {
        navbar.style.boxShadow = '0 5px 20px rgba(0, 0, 0, 0.15)';
    }

    lastScroll = currentScroll;
});

// Active nav link on scroll
const sections = document.querySelectorAll('section');

window.addEventListener('scroll', () => {
    let current = '';

    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;

        if (window.pageYOffset >= sectionTop - 200) {
            current = section.getAttribute('id');
        }
    });

    navItems.forEach(item => {
        item.classList.remove('active');
        if (item.getAttribute('href').slice(1) === current) {
            item.classList.add('active');
        }
    });
});

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));

        if (target) {
            const offset = 80; // Navbar height
            const targetPosition = target.offsetTop - offset;

            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
        }
    });
});

// Intersection Observer for fade-in animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe elements for animation
const animateElements = document.querySelectorAll('.skill-card, .project-card, .stat');
animateElements.forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(30px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(el);
});

// Form submission with EmailJS
const contactForm = document.querySelector('.contact-form form');

// Initialize EmailJS (vous devez ajouter vos clés après configuration)
// Allez sur: https://www.emailjs.com/
// Créez un compte, puis remplacez ces valeurs:
const EMAILJS_PUBLIC_KEY = 'jxzcFIrllrRzHbYsO'; // Votre Public Key EmailJS
const EMAILJS_SERVICE_ID = 'service_qxgsc1e'; // Votre Service ID
const EMAILJS_TEMPLATE_ID = 'aYjd7uKADa-__TmfcRZrD'; // Votre Template ID

contactForm.addEventListener('submit', (e) => {
    e.preventDefault();

    // Get form data
    const name = contactForm.querySelector('input[type="text"]').value;
    const email = contactForm.querySelector('input[type="email"]').value;
    const subject = contactForm.querySelectorAll('input[type="text"]')[1].value;
    const message = contactForm.querySelector('textarea').value;

    // Disable submit button to prevent multiple submissions
    const submitBtn = contactForm.querySelector('button[type="submit"]');
    const originalBtnText = submitBtn.innerHTML;
    submitBtn.disabled = true;
    submitBtn.innerHTML = '⏳ Envoi en cours...';

    // Prepare template parameters
    const templateParams = {
        from_name: name,
        from_email: email,
        subject: subject,
        message: message,
        to_email: 'omar.arhoune@gmail.com' // Votre email
    };

    // Send email using EmailJS
    emailjs.send(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, templateParams, EMAILJS_PUBLIC_KEY)
        .then((response) => {
            console.log('✅ EmailJS SUCCESS!', {
                status: response.status,
                text: response.text,
                service: EMAILJS_SERVICE_ID,
                template: EMAILJS_TEMPLATE_ID
            });

            // Show success message
            alert(`✅ Merci ${name}! Votre message a été envoyé avec succès. Je vous répondrai bientôt!`);

            // Reset form
            contactForm.reset();

            // Re-enable button
            submitBtn.disabled = false;
            submitBtn.innerHTML = originalBtnText;
        })
        .catch((error) => {
            console.error('❌ EmailJS FAILED:', {
                error: error,
                message: error.text || error.message,
                status: error.status,
                publicKey: EMAILJS_PUBLIC_KEY,
                serviceId: EMAILJS_SERVICE_ID,
                templateId: EMAILJS_TEMPLATE_ID
            });

            // Show detailed error message
            let errorMessage = `❌ Erreur lors de l'envoi.\n\n`;
            errorMessage += `Détails: ${error.text || error.message || 'Erreur inconnue'}\n\n`;
            errorMessage += `Vérifiez:\n`;
            errorMessage += `1. Vos clés EmailJS dans script.js\n`;
            errorMessage += `2. Votre compte EmailJS sur dashboard.emailjs.com\n`;
            errorMessage += `3. Console du navigateur (F12) pour plus de détails\n\n`;
            errorMessage += `Ou envoyez-moi un email directement à omar.arhoune@gmail.com`;

            alert(errorMessage);

            // Re-enable button
            submitBtn.disabled = false;
            submitBtn.innerHTML = originalBtnText;
        });
});

// Add typing effect to hero title (optional)
const heroTitle = document.querySelector('.hero-title');
const titleText = heroTitle.innerHTML;

// Parallax effect for hero section
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const hero = document.querySelector('.hero-content');

    if (hero) {
        hero.style.transform = `translateY(${scrolled * 0.5}px)`;
        hero.style.opacity = 1 - (scrolled / 700);
    }
});

// Add project card hover effects
const projectCards = document.querySelectorAll('.project-card');

projectCards.forEach(card => {
    card.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-10px) scale(1.02)';
    });

    card.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(-10px) scale(1)';
    });
});

// Scroll to top button (optional - can be added)
const createScrollTopButton = () => {
    const button = document.createElement('button');
    button.innerHTML = '↑';
    button.className = 'scroll-top';
    button.style.cssText = `
        position: fixed;
        bottom: 30px;
        right: 30px;
        width: 50px;
        height: 50px;
        background: linear-gradient(135deg, var(--primary-color), var(--secondary-color));
        color: white;
        border: none;
        border-radius: 50%;
        font-size: 1.5rem;
        cursor: pointer;
        opacity: 0;
        transition: opacity 0.3s ease, transform 0.3s ease;
        z-index: 1000;
        box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
    `;

    document.body.appendChild(button);

    window.addEventListener('scroll', () => {
        if (window.pageYOffset > 500) {
            button.style.opacity = '1';
        } else {
            button.style.opacity = '0';
        }
    });

    button.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });

    button.addEventListener('mouseenter', () => {
        button.style.transform = 'scale(1.1)';
    });

    button.addEventListener('mouseleave', () => {
        button.style.transform = 'scale(1)';
    });
};

// Initialize scroll to top button
createScrollTopButton();

// Add loading animation
window.addEventListener('load', () => {
    document.body.style.opacity = '0';
    setTimeout(() => {
        document.body.style.transition = 'opacity 0.5s ease';
        document.body.style.opacity = '1';
    }, 100);
});

// Animated Counter for Stats
const animateCounter = (element, target, duration = 2000, suffix = '') => {
    let current = 0;
    const increment = target / (duration / 16);
    const isDecimal = target % 1 !== 0;

    const updateCounter = () => {
        current += increment;
        if (current < target) {
            if (isDecimal) {
                element.textContent = current.toFixed(1) + suffix;
            } else {
                element.textContent = Math.floor(current) + suffix;
            }
            requestAnimationFrame(updateCounter);
        } else {
            element.textContent = target + suffix;
        }
    };

    updateCounter();
};

// Observer for counter animation
const statsObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting && !entry.target.classList.contains('counted')) {
            entry.target.classList.add('counted');
            const statElements = entry.target.querySelectorAll('.stat h3');

            statElements.forEach(stat => {
                const text = stat.textContent;
                const hasPlus = text.includes('+');
                const hasMois = text.includes('Mois') || text.includes('Months') || text.includes('أشهر');
                const suffix = hasMois ? (text.includes('أشهر') ? ' أشهر' : text.includes('Mois') ? ' Mois' : ' Months') : '';
                const number = parseFloat(text.replace('+', '').replace('Mois', '').replace('Months', '').replace('أشهر', '').trim());

                if (!isNaN(number)) {
                    stat.textContent = '0' + suffix;
                    setTimeout(() => {
                        if (hasPlus) {
                            animateCounter(stat, number, 2000, '');
                            setTimeout(() => {
                                stat.textContent = number + '+';
                            }, 2000);
                        } else {
                            animateCounter(stat, number, 2000, suffix);
                        }
                    }, 200);
                }
            });
        }
    });
}, { threshold: 0.5 });

// Observe stats section
const aboutStats = document.querySelector('.about-stats');
if (aboutStats) {
    statsObserver.observe(aboutStats);
}

// Enhanced Scroll Animations
const scrollAnimationObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate-in');
        }
    });
}, {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
});

// Add animation classes to elements
document.addEventListener('DOMContentLoaded', () => {
    // Animate section titles
    const sectionTitles = document.querySelectorAll('.section-title');
    sectionTitles.forEach(title => {
        title.classList.add('fade-in-element');
        scrollAnimationObserver.observe(title);
    });

    // Animate education timeline items - DISABLED for static display
    // const timelineItems = document.querySelectorAll('.timeline-item');
    // timelineItems.forEach((item, index) => {
    //     item.classList.add('slide-in-element');
    //     item.style.animationDelay = `${index * 0.2}s`;
    //     scrollAnimationObserver.observe(item);
    // });

    // Animate experience cards
    const experienceCards = document.querySelectorAll('.experience-card');
    experienceCards.forEach((card, index) => {
        card.classList.add('slide-in-element');
        card.style.animationDelay = `${index * 0.15}s`;
        scrollAnimationObserver.observe(card);
    });

    // Animate language cards
    const languageCards = document.querySelectorAll('.language-card');
    languageCards.forEach((card, index) => {
        card.classList.add('fade-in-element');
        card.style.animationDelay = `${index * 0.15}s`;
        scrollAnimationObserver.observe(card);
    });

    // Animate tech categories
    const techCategories = document.querySelectorAll('.tech-category');
    techCategories.forEach((category, index) => {
        category.classList.add('slide-in-element');
        category.style.animationDelay = `${index * 0.1}s`;
        scrollAnimationObserver.observe(category);
    });

    // Animate about section
    const aboutText = document.querySelector('.about-text');
    const aboutImage = document.querySelector('.about-image');
    if (aboutText) {
        aboutText.classList.add('slide-in-left');
        scrollAnimationObserver.observe(aboutText);
    }
    if (aboutImage) {
        aboutImage.classList.add('slide-in-right');
        scrollAnimationObserver.observe(aboutImage);
    }
});

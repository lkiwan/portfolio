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

// EmailJS Configuration
// Dashboard: https://dashboard.emailjs.com/
const EMAILJS_PUBLIC_KEY = 'jxzcFIrllrRzHbYsO'; // Votre Public Key EmailJS
const EMAILJS_SERVICE_ID = 'service_qxgsc1e'; // Votre Service ID
const EMAILJS_TEMPLATE_ID = 'template_5w3or16'; // Votre Template ID

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

// ============================================
// CERTIFICATES LIGHTBOX
// ============================================

document.addEventListener('DOMContentLoaded', () => {
    const modal = document.getElementById('cert-modal');
    const modalImg = document.getElementById('cert-modal-img');
    const captionText = document.getElementById('cert-caption');
    const closeBtn = document.querySelector('.cert-modal-close');
    const certItems = document.querySelectorAll('.cert-item');

    // Open modal when clicking on certificate or view button
    certItems.forEach(item => {
        const container = item.querySelector('.cert-image-container');
        const thumbnail = item.querySelector('.cert-thumbnail');
        const title = item.querySelector('.cert-info h3').textContent;
        const provider = item.querySelector('.cert-provider').textContent;

        // Click on image container or view button
        const openModal = () => {
            modal.style.display = 'block';
            modalImg.src = thumbnail.src;
            captionText.innerHTML = `<strong>${title}</strong><br>${provider}`;
            document.body.style.overflow = 'hidden'; // Prevent background scrolling
        };

        container.addEventListener('click', openModal);
    });

    // Close modal
    const closeModal = () => {
        modal.style.display = 'none';
        document.body.style.overflow = 'auto'; // Restore scrolling
    };

    closeBtn.addEventListener('click', closeModal);

    // Close when clicking outside the image
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            closeModal();
        }
    });

    // Close with Escape key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && modal.style.display === 'block') {
            closeModal();
        }
    });

    // Animate certificates on scroll
    const certObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
                setTimeout(() => {
                    entry.target.classList.add('animate-in');
                }, index * 100); // Stagger animation
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    });

    certItems.forEach(item => {
        certObserver.observe(item);
    });

    // Animate certificate stats
    const certStats = document.querySelectorAll('.cert-stat-item');
    certStats.forEach((stat, index) => {
        stat.classList.add('fade-in-element');
        stat.style.animationDelay = `${index * 0.15}s`;
        scrollAnimationObserver.observe(stat);
    });
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

// ============================================
// MULTILINGUAL SYSTEM (FR/EN/AR)
// ============================================

const translations = {
    fr: {
        // Navigation
        nav_home: "Accueil",
        nav_about: "À propos",
        nav_education: "Formation",
        nav_experience: "Expérience",
        nav_skills: "Compétences",
        nav_tech: "Stack Technique",
        nav_certifications: "Certifications",
        nav_projects: "Projets",
        nav_languages: "Langues",
        nav_contact: "Contact",

        // Hero Section
        hero_greeting: "Bonjour, je suis",
        hero_subtitle: "Étudiant en Master Finance & Data Science | Analyste | Résolveur de Problèmes",
        btn_view_work: "Voir mes travaux",
        btn_contact: "Me contacter",
        btn_download_cv: "Télécharger CV",

        // About Section
        about_title: "À propos de moi",
        about_text_1: "Je suis étudiant en Master spécialisé en Finance et Data Science, passionné par l'analyse de données et la résolution de problèmes complexes.",
        about_text_2: "Avec une solide expérience en analyse financière et en science des données, je combine compétences techniques et pensée stratégique pour fournir des insights exploitables.",

        // Stats
        stat_experience: "Mois",
        stat_projects: "Projets",
        stat_certifications: "Certifications",

        // Education
        education_title: "Formation",

        // Experience
        experience_title: "Expérience Professionnelle",

        // Skills
        skills_title: "Compétences",

        // Tech Stack
        tech_title: "Stack Technique",
        tech_category_languages: "Langages de Programmation",
        tech_category_data: "Data Science & ML",
        tech_category_databases: "Bases de Données",
        tech_category_tools: "Outils & Technologies",

        // Certifications
        certifications_title: "Certifications",
        cert_sql_title: "Introduction à SQL",
        cert_sql_provider: "DataCamp",
        cert_ml_title: "Comprendre le Machine Learning",
        cert_ml_provider: "DataCamp",
        cert_dataviz_title: "Comprendre la Visualisation de Données",
        cert_dataviz_provider: "DataCamp",
        cert_python_title: "Introduction à Python",
        cert_python_provider: "DataCamp",
        cert_ai_title: "Comprendre l'Intelligence Artificielle",
        cert_ai_provider: "DataCamp",
        cert_dataeng_title: "Comprendre l'Ingénierie des Données",
        cert_dataeng_provider: "DataCamp",
        view_cert_btn: "Voir le Certificat",
        cert_stats_total: "Certifications",
        cert_stats_hours: "Heures Totales",
        cert_stats_completion: "Taux de Complétion",

        // Projects
        projects_title: "Projets",

        // Languages
        languages_title: "Langues",
        lang_arabic: "Arabe",
        lang_french: "Français",
        lang_english: "Anglais",
        lang_level_native: "Natif",
        lang_level_fluent: "Courant",
        lang_level_professional: "Professionnel",

        // Contact
        contact_title: "Contactez-moi",
        contact_subtitle: "Travaillons ensemble",
        contact_connect_title: "Restons en Contact",
        contact_connect_desc: "N'hésitez pas à me contacter pour toute opportunité ou collaboration",
        contact_email_label: "Email",
        contact_phone_label: "Téléphone",
        contact_location_label: "Localisation",
        contact_location_value: "Casablanca & Rabat, Maroc",
        contact_name: "Nom",
        contact_email: "Email",
        contact_subject: "Sujet",
        contact_message: "Message",
        contact_send: "Envoyer le message",
        contact_form_name: "Votre nom",
        contact_form_email: "Votre email",
        contact_form_subject: "Sujet",
        contact_form_message: "Votre message",
        contact_form_submit: "Envoyer le message",
        contact_success: "Merci! Votre message a été envoyé avec succès. Je vous répondrai bientôt!",
        contact_error: "Erreur lors de l'envoi.",

        // Language levels
        lang_native: "Natif"
    },

    en: {
        // Navigation
        nav_home: "Home",
        nav_about: "About",
        nav_education: "Education",
        nav_experience: "Experience",
        nav_skills: "Skills",
        nav_tech: "Tech Stack",
        nav_certifications: "Certifications",
        nav_projects: "Projects",
        nav_languages: "Languages",
        nav_contact: "Contact",

        // Hero Section
        hero_greeting: "Hello, I'm",
        hero_subtitle: "Master's Student in Finance & Data Science | Analyst | Problem Solver",
        btn_view_work: "View My Work",
        btn_contact: "Get In Touch",
        btn_download_cv: "Download CV",

        // About Section
        about_title: "About Me",
        about_text_1: "I'm a Master's student specializing in Finance and Data Science, passionate about data analysis and solving complex problems.",
        about_text_2: "With a strong background in financial analysis and data science, I combine technical skills with strategic thinking to deliver actionable insights.",

        // Stats
        stat_experience: "Months",
        stat_projects: "Projects",
        stat_certifications: "Certifications",

        // Education
        education_title: "Education",

        // Experience
        experience_title: "Professional Experience",

        // Skills
        skills_title: "Skills",

        // Tech Stack
        tech_title: "Tech Stack",
        tech_category_languages: "Programming Languages",
        tech_category_data: "Data Science & ML",
        tech_category_databases: "Databases",
        tech_category_tools: "Tools & Technologies",

        // Certifications
        certifications_title: "Certifications",
        cert_sql_title: "Introduction to SQL",
        cert_sql_provider: "DataCamp",
        cert_ml_title: "Understanding Machine Learning",
        cert_ml_provider: "DataCamp",
        cert_dataviz_title: "Understanding Data Visualization",
        cert_dataviz_provider: "DataCamp",
        cert_python_title: "Introduction to Python",
        cert_python_provider: "DataCamp",
        cert_ai_title: "Understanding Artificial Intelligence",
        cert_ai_provider: "DataCamp",
        cert_dataeng_title: "Understanding Data Engineering",
        cert_dataeng_provider: "DataCamp",
        view_cert_btn: "View Certificate",
        cert_stats_total: "Certifications",
        cert_stats_hours: "Total Hours",
        cert_stats_completion: "Completion Rate",

        // Projects
        projects_title: "Projects",

        // Languages
        languages_title: "Languages",
        lang_arabic: "Arabic",
        lang_french: "French",
        lang_english: "English",
        lang_level_native: "Native",
        lang_level_fluent: "Fluent",
        lang_level_professional: "Professional",

        // Contact
        contact_title: "Get In Touch",
        contact_subtitle: "Let's Work Together",
        contact_connect_title: "Let's Connect",
        contact_connect_desc: "Feel free to reach out for opportunities or collaborations",
        contact_email_label: "Email",
        contact_phone_label: "Phone",
        contact_location_label: "Location",
        contact_location_value: "Casablanca & Rabat, Morocco",
        contact_name: "Name",
        contact_email: "Email",
        contact_subject: "Subject",
        contact_message: "Message",
        contact_send: "Send Message",
        contact_form_name: "Your Name",
        contact_form_email: "Your Email",
        contact_form_subject: "Subject",
        contact_form_message: "Your Message",
        contact_form_submit: "Send Message",
        contact_success: "Thank you! Your message has been sent successfully. I'll get back to you soon!",
        contact_error: "Error sending message.",

        // Language levels
        lang_native: "Native"
    },

    ar: {
        // Navigation
        nav_home: "الرئيسية",
        nav_about: "نبذة عني",
        nav_education: "التعليم",
        nav_experience: "الخبرة",
        nav_skills: "المهارات",
        nav_tech: "التقنيات",
        nav_certifications: "الشهادات",
        nav_projects: "المشاريع",
        nav_languages: "اللغات",
        nav_contact: "تواصل معي",

        // Hero Section
        hero_greeting: "مرحباً، أنا",
        hero_subtitle: "طالب ماجستير في المالية وعلوم البيانات | محلل | حلال المشاكل",
        btn_view_work: "عرض أعمالي",
        btn_contact: "تواصل معي",
        btn_download_cv: "تحميل السيرة الذاتية",

        // About Section
        about_title: "نبذة عني",
        about_text_1: "أنا طالب ماجستير متخصص في المالية وعلوم البيانات، شغوف بتحليل البيانات وحل المشاكل المعقدة.",
        about_text_2: "مع خلفية قوية في التحليل المالي وعلوم البيانات، أجمع بين المهارات التقنية والتفكير الاستراتيجي لتقديم رؤى قابلة للتنفيذ.",

        // Stats
        stat_experience: "أشهر",
        stat_projects: "مشاريع",
        stat_certifications: "شهادات",

        // Education
        education_title: "التعليم",

        // Experience
        experience_title: "الخبرة المهنية",

        // Skills
        skills_title: "المهارات",

        // Tech Stack
        tech_title: "التقنيات المستخدمة",
        tech_category_languages: "لغات البرمجة",
        tech_category_data: "علوم البيانات والتعلم الآلي",
        tech_category_databases: "قواعد البيانات",
        tech_category_tools: "الأدوات والتقنيات",

        // Certifications
        certifications_title: "الشهادات",
        cert_sql_title: "مقدمة في SQL",
        cert_sql_provider: "DataCamp",
        cert_ml_title: "فهم التعلم الآلي",
        cert_ml_provider: "DataCamp",
        cert_dataviz_title: "فهم تصور البيانات",
        cert_dataviz_provider: "DataCamp",
        cert_python_title: "مقدمة في بايثون",
        cert_python_provider: "DataCamp",
        cert_ai_title: "فهم الذكاء الاصطناعي",
        cert_ai_provider: "DataCamp",
        cert_dataeng_title: "فهم هندسة البيانات",
        cert_dataeng_provider: "DataCamp",
        view_cert_btn: "عرض الشهادة",
        cert_stats_total: "شهادات",
        cert_stats_hours: "إجمالي الساعات",
        cert_stats_completion: "معدل الإنجاز",

        // Projects
        projects_title: "المشاريع",

        // Languages
        languages_title: "اللغات",
        lang_arabic: "العربية",
        lang_french: "الفرنسية",
        lang_english: "الإنجليزية",
        lang_level_native: "لغة أم",
        lang_level_fluent: "طلاقة",
        lang_level_professional: "محترف",

        // Contact
        contact_title: "تواصل معي",
        contact_subtitle: "لنعمل معاً",
        contact_connect_title: "لنبقَ على تواصل",
        contact_connect_desc: "لا تتردد في التواصل معي لأي فرصة أو تعاون",
        contact_email_label: "البريد الإلكتروني",
        contact_phone_label: "الهاتف",
        contact_location_label: "الموقع",
        contact_location_value: "الدار البيضاء والرباط، المغرب",
        contact_name: "الاسم",
        contact_email: "البريد الإلكتروني",
        contact_subject: "الموضوع",
        contact_message: "الرسالة",
        contact_send: "إرسال الرسالة",
        contact_form_name: "اسمك",
        contact_form_email: "بريدك الإلكتروني",
        contact_form_subject: "الموضوع",
        contact_form_message: "رسالتك",
        contact_form_submit: "إرسال الرسالة",
        contact_success: "شكراً! تم إرسال رسالتك بنجاح. سأرد عليك قريباً!",
        contact_error: "خطأ في الإرسال.",

        // Language levels
        lang_native: "لغة أم"
    }
};

// Current language (default: French)
let currentLang = 'fr';

// Function to change language
function changeLanguage(lang) {
    if (!translations[lang]) return;

    currentLang = lang;

    // Update all elements with data-translate attribute
    document.querySelectorAll('[data-translate]').forEach(element => {
        const key = element.getAttribute('data-translate');
        if (translations[lang][key]) {
            element.textContent = translations[lang][key];
        }
    });

    // Update placeholders
    document.querySelectorAll('[data-translate-placeholder]').forEach(element => {
        const key = element.getAttribute('data-translate-placeholder');
        if (translations[lang][key]) {
            element.placeholder = translations[lang][key];
        }
    });

    // Update active button
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.classList.remove('active');
        if (btn.getAttribute('data-lang') === lang) {
            btn.classList.add('active');
        }
    });

    // Handle RTL for Arabic
    if (lang === 'ar') {
        document.documentElement.setAttribute('dir', 'rtl');
        document.body.classList.add('rtl');
    } else {
        document.documentElement.setAttribute('dir', 'ltr');
        document.body.classList.remove('rtl');
    }

    // Update HTML lang attribute
    document.documentElement.setAttribute('lang', lang);

    // Save language preference
    localStorage.setItem('preferredLanguage', lang);
}

// Initialize language system
document.addEventListener('DOMContentLoaded', () => {
    // Check for saved language preference
    const savedLang = localStorage.getItem('preferredLanguage') || 'fr';
    changeLanguage(savedLang);

    // Add click event listeners to language buttons
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            const lang = btn.getAttribute('data-lang');
            changeLanguage(lang);
        });
    });
});

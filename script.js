// ============================================
// PARTICLES.JS CONFIGURATION
// ============================================

if (typeof particlesJS !== 'undefined') {
    particlesJS('particles-js', {
        particles: {
            number: {
                value: 80,
                density: {
                    enable: true,
                    value_area: 800
                }
            },
            color: {
                value: '#667eea'
            },
            shape: {
                type: 'circle'
            },
            opacity: {
                value: 0.5,
                random: false,
                anim: {
                    enable: false
                }
            },
            size: {
                value: 3,
                random: true,
                anim: {
                    enable: false
                }
            },
            line_linked: {
                enable: true,
                distance: 150,
                color: '#667eea',
                opacity: 0.4,
                width: 1
            },
            move: {
                enable: true,
                speed: 2,
                direction: 'none',
                random: false,
                straight: false,
                out_mode: 'out',
                bounce: false
            }
        },
        interactivity: {
            detect_on: 'canvas',
            events: {
                onhover: {
                    enable: true,
                    mode: ['grab', 'bubble']
                },
                onclick: {
                    enable: true,
                    mode: 'push'
                },
                resize: true
            },
            modes: {
                grab: {
                    distance: 200,
                    line_linked: {
                        opacity: 1
                    }
                },
                bubble: {
                    distance: 250,
                    size: 6,
                    duration: 2,
                    opacity: 0.8
                },
                repulse: {
                    distance: 150,
                    duration: 0.4
                },
                push: {
                    particles_nb: 4
                }
            }
        },
        retina_detect: true
    });
}

// ============================================
// TYPING EFFECT
// ============================================

const typingElement = document.querySelector('.typing-text');
if (typingElement) {
    const texts = [
        'Data Scientist',
        'ML Engineer',
        'Financial Analyst',
        'Python Developer',
        'Problem Solver'
    ];

    let textIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    let typingSpeed = 150;

    function type() {
        const currentText = texts[textIndex];

        if (isDeleting) {
            typingElement.textContent = currentText.substring(0, charIndex - 1);
            charIndex--;
            typingSpeed = 50;
        } else {
            typingElement.textContent = currentText.substring(0, charIndex + 1);
            charIndex++;
            typingSpeed = 150;
        }

        if (!isDeleting && charIndex === currentText.length) {
            isDeleting = true;
            typingSpeed = 2000; // Pause at end
        } else if (isDeleting && charIndex === 0) {
            isDeleting = false;
            textIndex = (textIndex + 1) % texts.length;
            typingSpeed = 500; // Pause before starting new word
        }

        setTimeout(type, typingSpeed);
    }

    // Start typing effect
    setTimeout(type, 1000);
}

// ============================================
// MOBILE MENU TOGGLE
// ============================================

const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');
const navItems = document.querySelectorAll('.nav-links a');

if (menuToggle && navLinks) {
    menuToggle.addEventListener('click', function (e) {
        e.preventDefault();
        e.stopPropagation();
        menuToggle.classList.toggle('active');
        navLinks.classList.toggle('active');
        document.body.style.overflow = navLinks.classList.contains('active') ? 'hidden' : '';
    });

    // Close mobile menu when clicking on a nav link
    navItems.forEach(item => {
        item.addEventListener('click', () => {
            menuToggle.classList.remove('active');
            navLinks.classList.remove('active');
            document.body.style.overflow = '';
        });
    });

    // Close menu when clicking outside
    document.addEventListener('click', (e) => {
        if (!navLinks.contains(e.target) && !menuToggle.contains(e.target)) {
            menuToggle.classList.remove('active');
            navLinks.classList.remove('active');
            document.body.style.overflow = '';
        }
    });
}

// ============================================
// LANGUAGE SWITCHER
// ============================================

const langBtns = document.querySelectorAll('.lang-btn');
langBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        langBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        // Add your language switching logic here
    });
});

// Mobile Language Dropdown - Moved to DOMContentLoaded section below for proper initialization

// ============================================
// NAVBAR SCROLL EFFECT
// ============================================

const navbar = document.querySelector('.navbar');
let lastScroll = 0;

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;

    if (currentScroll <= 0) {
        navbar.classList.remove('scrolled');
    } else {
        navbar.classList.add('scrolled');
    }

    lastScroll = currentScroll;
});

// ============================================
// ACTIVE NAV LINK ON SCROLL
// ============================================

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

// ============================================
// SMOOTH SCROLL FOR ANCHOR LINKS
// ============================================

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        if (href === '#') return;

        e.preventDefault();
        const target = document.querySelector(href);

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

// ============================================
// SCROLL ANIMATIONS
// ============================================

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

// Observe all animated elements
document.querySelectorAll('.bento-card, .experience-card, .project-card-modern, .featured-project').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(30px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(el);
});

// ============================================
// CONTACT FORM
// ============================================

const contactForm = document.querySelector('#contact-form');
if (contactForm) {
    contactForm.addEventListener('submit', function (e) {
        e.preventDefault();

        // Get form data
        const formData = new FormData(contactForm);
        const data = Object.fromEntries(formData);

        // Add your form submission logic here
        // For now, just show a success message
        console.log('Form submitted:', data);

        // Example: Show success message
        const submitBtn = contactForm.querySelector('button[type="submit"]');
        const originalText = submitBtn.innerHTML;
        submitBtn.innerHTML = '<span>Message Sent!</span>';
        submitBtn.disabled = true;

        setTimeout(() => {
            submitBtn.innerHTML = originalText;
            submitBtn.disabled = false;
            contactForm.reset();
        }, 3000);
    });
}

// ============================================
// PROGRESS BAR ANIMATION
// ============================================

const progressBars = document.querySelectorAll('.progress-fill');
const progressObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.transform = 'scaleX(1)';
        }
    });
}, { threshold: 0.5 });

progressBars.forEach(bar => {
    bar.style.transform = 'scaleX(0)';
    progressObserver.observe(bar);
});

// ============================================
// FLOATING CARDS ANIMATION
// ============================================

const floatingCards = document.querySelectorAll('.floating-card');
floatingCards.forEach((card, index) => {
    card.style.animation = `float 3s ease-in-out ${index * 0.5}s infinite`;
});

// ============================================
// HERO AVATAR RING ANIMATION
// ============================================

const avatarRing = document.querySelector('.avatar-ring');
if (avatarRing) {
    avatarRing.style.animation = 'rotate 4s linear infinite';
}

// ============================================
// PAGE LOAD ANIMATION
// ============================================

window.addEventListener('load', () => {
    document.body.classList.add('loaded');

    // Fade in hero content
    const heroLeft = document.querySelector('.hero-left');
    const heroRight = document.querySelector('.hero-right');

    if (heroLeft) {
        heroLeft.style.animation = 'fadeInUp 0.8s ease';
    }
    if (heroRight) {
        heroRight.style.animation = 'fadeIn 1s ease 0.3s backwards';
    }

    // Initialize AOS (Animate On Scroll)
    if (typeof AOS !== 'undefined') {
        AOS.init({
            duration: 800,
            easing: 'ease-in-out',
            once: true,
            offset: 100
        });
    }
});

// ============================================
// CERTIFICATE MODAL
// ============================================

const certModal = document.getElementById('cert-modal');
const certModalImage = document.getElementById('cert-modal-image');
const certModalClose = document.querySelector('.cert-modal-close');
const certPreviews = document.querySelectorAll('.cert-image-preview');
const canvas = document.getElementById('cert-animation-canvas');
const ctx = canvas ? canvas.getContext('2d') : null;

let animationId;
let particles = [];

// Particle class for AI/Data animation
class Particle {
    constructor(canvas) {
        this.canvas = canvas;
        this.reset();
        this.y = Math.random() * canvas.height;
        this.opacity = Math.random() * 0.5 + 0.2;
    }

    reset() {
        this.x = Math.random() * this.canvas.width;
        this.y = -10;
        this.speed = Math.random() * 2 + 1;
        this.size = Math.random() * 3 + 1;
        this.type = Math.random() > 0.5 ? 'binary' : 'circle';
        this.char = Math.random() > 0.5 ? '1' : '0';
        this.opacity = Math.random() * 0.5 + 0.2;
    }

    update() {
        this.y += this.speed;
        if (this.y > this.canvas.height) {
            this.reset();
        }
    }

    draw(ctx) {
        ctx.globalAlpha = this.opacity;
        if (this.type === 'binary') {
            ctx.fillStyle = '#667eea';
            ctx.font = `${this.size * 8}px monospace`;
            ctx.fillText(this.char, this.x, this.y);
        } else {
            ctx.fillStyle = '#764ba2';
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
            ctx.fill();
        }
        ctx.globalAlpha = 1;
    }
}

// Neural network connections
class Connection {
    constructor(canvas) {
        this.canvas = canvas;
        this.x1 = Math.random() * canvas.width;
        this.y1 = Math.random() * canvas.height;
        this.x2 = Math.random() * canvas.width;
        this.y2 = Math.random() * canvas.height;
        this.opacity = Math.random() * 0.3;
        this.speedX = (Math.random() - 0.5) * 0.5;
        this.speedY = (Math.random() - 0.5) * 0.5;
    }

    update() {
        this.x1 += this.speedX;
        this.y1 += this.speedY;
        this.x2 -= this.speedX;
        this.y2 -= this.speedY;

        if (this.x1 < 0 || this.x1 > this.canvas.width) this.speedX *= -1;
        if (this.y1 < 0 || this.y1 > this.canvas.height) this.speedY *= -1;
    }

    draw(ctx) {
        ctx.globalAlpha = this.opacity;
        ctx.strokeStyle = '#667eea';
        ctx.lineWidth = 1;
        ctx.beginPath();
        ctx.moveTo(this.x1, this.y1);
        ctx.lineTo(this.x2, this.y2);
        ctx.stroke();
        ctx.globalAlpha = 1;
    }
}

function initAnimation() {
    if (!canvas || !ctx) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    particles = [];
    for (let i = 0; i < 50; i++) {
        particles.push(new Particle(canvas));
    }

    for (let i = 0; i < 20; i++) {
        particles.push(new Connection(canvas));
    }
}

function animate() {
    if (!ctx || !canvas) return;

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    particles.forEach(particle => {
        particle.update();
        particle.draw(ctx);
    });

    animationId = requestAnimationFrame(animate);
}

// Open certificate modal
certPreviews.forEach(preview => {
    preview.addEventListener('click', function (e) {
        e.preventDefault();
        const certCard = this.closest('.cert-card');
        const certImage = certCard.getAttribute('data-cert-image');

        if (certImage) {
            certModalImage.src = certImage;
            certModal.classList.add('active');
            document.body.style.overflow = 'hidden';

            // Initialize and start animation
            initAnimation();
            animate();
        }
    });
});

// Close modal
function closeModal() {
    certModal.classList.remove('active');
    document.body.style.overflow = '';
    if (animationId) {
        cancelAnimationFrame(animationId);
    }
}

certModalClose.addEventListener('click', closeModal);

certModal.addEventListener('click', function (e) {
    if (e.target === certModal || e.target.classList.contains('cert-modal-background')) {
        closeModal();
    }
});

// Close on ESC key
document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && certModal.classList.contains('active')) {
        closeModal();
    }
});

// Resize canvas on window resize
window.addEventListener('resize', function () {
    if (certModal.classList.contains('active') && canvas) {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    }
});

// ============================================
// TECH STACK MARQUEE DRAG FUNCTIONALITY
// ============================================

const marqueeRows = document.querySelectorAll('.marquee-row');

marqueeRows.forEach(row => {
    const marqueeContent = row.querySelector('.marquee-content');
    let isDragging = false;
    let startX;
    let scrollLeft;
    let animationClass = marqueeContent.classList.contains('marquee-left') ? 'marquee-left' : 'marquee-right';

    // Make row scrollable but hide scrollbar
    row.style.overflowX = 'auto';
    row.style.scrollbarWidth = 'none';
    row.style.msOverflowStyle = 'none';
    row.style.cursor = 'grab';

    row.addEventListener('mousedown', (e) => {
        isDragging = true;
        row.style.cursor = 'grabbing';
        startX = e.pageX - row.offsetLeft;
        scrollLeft = row.scrollLeft;

        // Pause animation
        marqueeContent.style.animationPlayState = 'paused';
        e.preventDefault();
    });

    document.addEventListener('mouseup', () => {
        if (isDragging) {
            isDragging = false;
            row.style.cursor = 'grab';
            // Resume animation
            setTimeout(() => {
                marqueeContent.style.animationPlayState = 'running';
            }, 100);
        }
    });

    row.addEventListener('mouseleave', () => {
        if (isDragging) {
            isDragging = false;
            row.style.cursor = 'grab';
            setTimeout(() => {
                marqueeContent.style.animationPlayState = 'running';
            }, 100);
        }
    });

    row.addEventListener('mousemove', (e) => {
        if (!isDragging) return;
        e.preventDefault();
        const x = e.pageX - row.offsetLeft;
        const walk = (x - startX) * 2;
        row.scrollLeft = scrollLeft - walk;
    });

    // Touch support for mobile
    row.addEventListener('touchstart', (e) => {
        isDragging = true;
        startX = e.touches[0].pageX - row.offsetLeft;
        scrollLeft = row.scrollLeft;
        marqueeContent.style.animationPlayState = 'paused';
    });

    document.addEventListener('touchend', () => {
        if (isDragging) {
            isDragging = false;
            setTimeout(() => {
                marqueeContent.style.animationPlayState = 'running';
            }, 100);
        }
    });

    row.addEventListener('touchmove', (e) => {
        if (!isDragging) return;
        const x = e.touches[0].pageX - row.offsetLeft;
        const walk = (x - startX) * 2;
        row.scrollLeft = scrollLeft - walk;
    });
});

// ============================================
// INTERACTIVE MOUSE FOLLOWER (HERO SECTION)
// ============================================

const hero = document.querySelector('.hero');
if (hero) {
    // Create cursor glow element
    const cursorGlow = document.createElement('div');
    cursorGlow.className = 'cursor-glow';
    hero.appendChild(cursorGlow);

    // Track mouse movement in hero section
    hero.addEventListener('mousemove', (e) => {
        const rect = hero.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        cursorGlow.style.left = x + 'px';
        cursorGlow.style.top = y + 'px';
        cursorGlow.style.opacity = '1';
    });

    hero.addEventListener('mouseleave', () => {
        cursorGlow.style.opacity = '0';
    });

    hero.addEventListener('mouseenter', () => {
        cursorGlow.style.opacity = '1';
    });
}

// ============================================
// MULTILINGUAL TRANSLATION SYSTEM
// ============================================

const translations = {
    fr: {
        // Navigation
        'nav.about': 'À propos',
        'nav.formation': 'Formation',
        'nav.experience': 'Expérience',
        'nav.skills': 'Skills',
        'nav.certifications': 'Certifications',
        'nav.projects': 'Projets',
        'nav.contact': 'Contact',

        // Hero Section
        'hero.greeting': 'Salut, je suis',
        'hero.name': 'Omar Arhoune',
        'hero.description': 'Étudiant en Master spécialisé en Finance & Data Science. Je transforme des données complexes en insights actionnables en utilisant ML, Python et des analyses modernes.',
        'hero.viewProjects': 'Voir les Projets',
        'hero.letsTalk': 'Discutons',
        'hero.downloadCV': 'Télécharger CV',
        'hero.badge': 'Disponible pour des opportunités',

        // Section Titles
        'section.about': 'À propos',
        'section.formation': 'Formation',
        'section.experience': 'Expérience Professionnelle',
        'section.skills': 'Skills & Technologies',
        'section.certifications': 'Certifications',
        'section.projects': 'Projets Sélectionnés',
        'section.contact': 'Contact',

        // About Section
        'about.whoIAm': 'Qui je suis',
        'about.badge': 'À propos',
        'about.bio1': 'Je suis étudiant en Master en Finance et Data Science à la Faculté des Sciences Juridiques, Économiques et Sociales de Mohammedia, passionné par l\'utilisation de l\'analyse de données et du machine learning pour résoudre des problèmes financiers complexes. Avec une expérience pratique en détection de fraude, plateformes d\'analyse financière et outils de données intelligents, je transforme les données en insights actionnables.',
        'about.bio2': 'Mon parcours combine la finance quantitative avec le développement full-stack, me permettant de construire des solutions de bout en bout, des modèles ML aux applications prêtes pour la production. Je m\'épanouis en découvrant des patterns dans les données et en créant des outils qui favorisent la prise de décision éclairée dans le secteur financier.',
        'about.problemSolver': 'Résolveur de Problèmes',
        'about.innovativeThinker': 'Penseur Innovant',
        'about.fastLearner': 'Apprenant Rapide',
        'about.monthsInternship': 'Mois de Stage',
        'about.certifications': 'Certifications',
        'about.liveProjects': 'Projets en Ligne',
        'about.languagesSpoken': 'Langues',
        'about.coreSkills': 'Compétences Clés',
        'about.education': 'Formation',
        'about.masterDegree': 'Master - Data Science & Finance',
        'about.bachelorDegree': 'Licence - Économie',
        'about.languages': 'Langues',
        'about.french': 'Français',
        'about.english': 'Anglais',
        'about.arabic': 'Arabe'
    },
    en: {
        // Navigation
        'nav.about': 'About',
        'nav.formation': 'Education',
        'nav.experience': 'Experience',
        'nav.skills': 'Skills',
        'nav.certifications': 'Certifications',
        'nav.projects': 'Projects',
        'nav.contact': 'Contact',

        // Hero Section
        'hero.greeting': 'Hi, I\'m',
        'hero.name': 'Omar Arhoune',
        'hero.description': 'Master\'s student specializing in Finance & Data Science. I transform complex data into actionable insights using ML, Python, and modern analytics.',
        'hero.viewProjects': 'View Projects',
        'hero.letsTalk': 'Let\'s Talk',
        'hero.downloadCV': 'Download CV',
        'hero.badge': 'Available for opportunities',

        // Section Titles
        'section.about': 'About Me',
        'section.formation': 'Education',
        'section.experience': 'Professional Experience',
        'section.skills': 'Skills & Technologies',
        'section.certifications': 'Certifications',
        'section.projects': 'Featured Projects',
        'section.contact': 'Contact',

        // About Section
        'about.whoIAm': 'Who I Am',
        'about.badge': 'About',
        'about.bio1': 'I\'m a Master\'s student in Finance and Data Science at Faculté des Sciences Juridiques, Economiques et Sociales Mohammedia, passionate about leveraging data analytics and machine learning to solve complex financial problems. With hands-on experience in fraud detection, financial analysis platforms, and intelligent data tools, I transform data into actionable insights.',
        'about.bio2': 'My journey combines quantitative finance with full-stack development, allowing me to build end-to-end solutions from ML models to production-ready applications. I thrive on uncovering patterns in data and creating tools that drive informed decision-making in the financial sector.',
        'about.problemSolver': 'Problem Solver',
        'about.innovativeThinker': 'Innovative Thinker',
        'about.fastLearner': 'Fast Learner',
        'about.monthsInternship': 'Months Internship',
        'about.certifications': 'Certifications',
        'about.liveProjects': 'Live Projects',
        'about.languagesSpoken': 'Languages',
        'about.coreSkills': 'Core Skills',
        'about.education': 'Education',
        'about.masterDegree': 'Master\'s - Data Science & Finance',
        'about.bachelorDegree': 'Bachelor\'s - Economics',
        'about.languages': 'Languages',
        'about.french': 'French',
        'about.english': 'English',
        'about.arabic': 'Arabic'
    },
    ar: {
        // Navigation
        'nav.about': 'نبذة عني',
        'nav.formation': 'التكوين',
        'nav.experience': 'الخبرة',
        'nav.skills': 'المهارات',
        'nav.certifications': 'الشهادات',
        'nav.projects': 'المشاريع',
        'nav.contact': 'تواصل',

        // Hero Section
        'hero.greeting': 'مرحباً، أنا',
        'hero.name': 'عمر أرهون',
        'hero.description': 'طالب ماجستير متخصص في المالية وعلوم البيانات. أحول البيانات المعقدة إلى رؤى قابلة للتنفيذ باستخدام التعلم الآلي وبايثون والتحليلات الحديثة.',
        'hero.viewProjects': 'عرض المشاريع',
        'hero.letsTalk': 'لنتحدث',
        'hero.downloadCV': 'تحميل السيرة الذاتية',
        'hero.badge': 'متاح للفرص',

        // Section Titles
        'section.about': 'نبذة عني',
        'section.formation': 'التكوين',
        'section.experience': 'الخبرة المهنية',
        'section.skills': 'المهارات والتقنيات',
        'section.certifications': 'الشهادات',
        'section.projects': 'مشاريع مختارة',
        'section.contact': 'تواصل',

        // About Section
        'about.whoIAm': 'من أنا',
        'about.badge': 'نبذة',
        'about.bio1': 'أنا طالب ماجستير في المالية وعلوم البيانات بكلية العلوم القانونية والاقتصادية والاجتماعية بالمحمدية، شغوف بتوظيف تحليل البيانات والتعلم الآلي لحل المشكلات المالية المعقدة. مع خبرة عملية في كشف الاحتيال ومنصات التحليل المالي وأدوات البيانات الذكية، أحول البيانات إلى رؤى قابلة للتنفيذ.',
        'about.bio2': 'رحلتي تجمع بين المالية الكمية والتطوير الشامل، مما يمكنني من بناء حلول متكاملة من نماذج التعلم الآلي إلى التطبيقات الجاهزة للإنتاج. أزدهر في اكتشاف الأنماط في البيانات وإنشاء أدوات تدعم اتخاذ القرارات المستنيرة في القطاع المالي.',
        'about.problemSolver': 'حلال المشكلات',
        'about.innovativeThinker': 'مفكر مبتكر',
        'about.fastLearner': 'سريع التعلم',
        'about.monthsInternship': 'أشهر تدريب',
        'about.certifications': 'شهادات',
        'about.liveProjects': 'مشاريع حية',
        'about.languagesSpoken': 'لغات',
        'about.coreSkills': 'المهارات الأساسية',
        'about.education': 'التعليم',
        'about.masterDegree': 'ماجستير - علوم البيانات والمالية',
        'about.bachelorDegree': 'ليسانس - الاقتصاد',
        'about.languages': 'اللغات',
        'about.french': 'الفرنسية',
        'about.english': 'الإنجليزية',
        'about.arabic': 'العربية'
    }
};

// Verify translations object loaded
console.log('Translations loaded:', Object.keys(translations));

// Current language (default: French)
let currentLang = 'fr';

// Translation function
function translatePage(lang) {
    console.log('Translating to:', lang);
    currentLang = lang;

    // Store language preference
    localStorage.setItem('preferredLanguage', lang);

    // Update all elements with data-i18n attribute
    const elementsToTranslate = document.querySelectorAll('[data-i18n]');
    console.log('Found elements to translate:', elementsToTranslate.length);

    elementsToTranslate.forEach(element => {
        const key = element.getAttribute('data-i18n');
        if (translations[lang] && translations[lang][key]) {
            element.textContent = translations[lang][key];
            console.log('Translated:', key, '→', translations[lang][key]);
        } else {
            console.warn('Missing translation for:', key, 'in', lang);
        }
    });

    // Update HTML direction for Arabic
    document.documentElement.setAttribute('dir', lang === 'ar' ? 'rtl' : 'ltr');
    document.documentElement.setAttribute('lang', lang);

    // Update active language button (desktop)
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.classList.toggle('active', btn.getAttribute('data-lang') === lang);
    });

    // Update mobile dropdown current language display
    const currentLangElement = document.querySelector('.current-lang');
    if (currentLangElement) {
        currentLangElement.textContent = lang.toUpperCase();
        console.log('Updated current lang to:', lang.toUpperCase());
    }

    // Update active option in mobile dropdown
    document.querySelectorAll('.lang-option').forEach(option => {
        const isActive = option.getAttribute('data-lang') === lang;
        option.classList.toggle('active', isActive);
        console.log('Option', option.getAttribute('data-lang'), 'active:', isActive);
    });

    console.log('Translation completed for:', lang);
}

// Make translatePage globally accessible
window.translatePage = translatePage;
console.log('translatePage function available globally');

// Initialize language switcher
document.addEventListener('DOMContentLoaded', () => {
    console.log('DOM loaded - initializing translations');

    // Check for saved language preference
    const savedLang = localStorage.getItem('preferredLanguage') || 'fr';
    console.log('Saved language preference:', savedLang);
    translatePage(savedLang);

    // Desktop language switcher
    const desktopBtns = document.querySelectorAll('.lang-btn');
    console.log('Desktop language buttons found:', desktopBtns.length);
    desktopBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const lang = btn.getAttribute('data-lang');
            console.log('Desktop button clicked for:', lang);
            translatePage(lang);
        });
    });

    // Mobile language dropdown
    const langDropdownBtn = document.querySelector('.lang-dropdown-btn');
    const langDropdownMenu = document.querySelector('.lang-dropdown-menu');

    if (langDropdownBtn && langDropdownMenu) {
        console.log('Language dropdown found and initialized');

        langDropdownBtn.addEventListener('click', (e) => {
            e.preventDefault();
            e.stopPropagation();
            console.log('Language dropdown clicked');

            const isCurrentlyActive = langDropdownMenu.classList.contains('active');

            if (isCurrentlyActive) {
                langDropdownMenu.classList.remove('active');
                langDropdownBtn.classList.remove('active');
                console.log('Dropdown closed');
            } else {
                langDropdownMenu.classList.add('active');
                langDropdownBtn.classList.add('active');
                console.log('Dropdown opened');
            }
        });

        // Close dropdown when clicking outside
        setTimeout(() => {
            document.addEventListener('click', (e) => {
                if (!e.target.closest('.lang-dropdown-mobile')) {
                    langDropdownMenu.classList.remove('active');
                    langDropdownBtn.classList.remove('active');
                    console.log('Dropdown closed by outside click');
                }
            });
        }, 100);

        // Mobile language options
        const mobileOptions = document.querySelectorAll('.lang-option');
        console.log('Mobile language options found:', mobileOptions.length);

        mobileOptions.forEach(option => {
            option.addEventListener('click', (e) => {
                e.preventDefault();
                e.stopPropagation();
                const lang = option.getAttribute('data-lang');
                console.log('Mobile option clicked for:', lang);

                // Translate the page
                translatePage(lang);

                // Close the dropdown
                setTimeout(() => {
                    langDropdownMenu.classList.remove('active');
                    langDropdownBtn.classList.remove('active');
                    console.log('Dropdown closed after language selection');
                }, 150);
            });
        });
    } else {
        console.error('Language dropdown elements not found');
    }
});

// ============================================
// CONSOLE MESSAGE
// ============================================

console.log('%c👋 Welcome to my portfolio!', 'color: #667eea; font-size: 20px; font-weight: bold;');
console.log('%cBuilt with passion using vanilla HTML, CSS & JavaScript', 'color: #b8c1ec; font-size: 14px;');
console.log('%cInterested in collaboration? Let\'s connect!', 'color: #667eea; font-size: 14px;');


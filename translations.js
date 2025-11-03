// Multi-language translations for portfolio
const translations = {
    fr: {
        // Navigation
        nav_home: "Accueil",
        nav_about: "À propos",
        nav_education: "Formation",
        nav_experience: "Expérience",
        nav_skills: "Compétences",
        nav_tech: "Stack Technique",
        nav_projects: "Projets",
        nav_languages: "Langues",
        nav_contact: "Contact",

        // Hero Section
        hero_greeting: "Bonjour, je suis",
        hero_subtitle: "Étudiant en Master Finance & Data Science | Analyste | Résolveur de Problèmes",
        btn_view_work: "Voir Mes Projets",
        btn_contact: "Me Contacter",
        btn_download_cv: "Télécharger CV",

        // About Section
        about_title: "À Propos de Moi",
        about_p1: "Je suis étudiant en Master Finance et Data Science à la Faculté des Sciences Juridiques, Économiques et Sociales de Mohammedia, passionné par l'exploitation de l'analyse de données et du machine learning pour résoudre des problèmes financiers complexes. Avec une expérience pratique en détection de fraude, plateformes d'analyse financière et outils de données intelligents, je transforme les données en insights actionnables.",
        about_p2: "Mon parcours combine finance quantitative et développement full-stack, me permettant de construire des solutions de bout en bout, des modèles ML aux applications prêtes pour la production. Je m'épanouis en découvrant des modèles dans les données et en créant des outils qui favorisent la prise de décision éclairée dans le secteur financier.",
        stat1_title: "Master",
        stat1_desc: "Finance & Data Science",
        stat2_title: "4+",
        stat2_desc: "Projets en Ligne",
        stat3_title: "3 Mois",
        stat3_desc: "Stage Détection de Fraude",

        // Languages Section
        languages_title: "Langues",
        lang1_name: "Français",
        lang1_level: "Natif",
        lang2_name: "Anglais",
        lang2_level: "Professionnel",
        lang3_name: "Arabe",
        lang3_level: "Natif",

        // Education Section
        education_title: "Formation",
        edu1_period: "2024 - Présent",
        edu1_degree: "Master en Data Science et Finance",
        edu1_institution: "FSJESM, Maroc",
        edu1_desc: "Spécialisé en modélisation prédictive, machine learning et analyse financière.",
        edu2_period: "2020 - 2024",
        edu2_degree: "Licence en Économie et Gestion",
        edu2_institution: "FSJES Fès, Maroc",
        edu2_desc: "Bases solides en statistiques, stratégie d'entreprise et prise de décision basée sur les données.",
        edu3_period: "2019 - 2020",
        edu3_degree: "Baccalauréat en Physique",
        edu3_institution: "Lycée IBN Rochd, Maroc",
        edu3_desc: "Fondation solide en mathématiques, physique et méthodologie scientifique.",

        // Experience Section
        experience_title: "Expérience Professionnelle",
        exp1_title: "Simulation d'Analyse de Données",
        exp1_company: "Deloitte Australie",
        exp1_period: "2025",
        exp1_desc: "Réalisation d'analyses forensiques, visualisation des insights dans Tableau et support pour les rapports de classification.",
        exp2_title: "Stage en Détection de Fraude",
        exp2_company: "PEAQOCK",
        exp2_period: "Juillet - Octobre 2025",
        exp2_desc: "Développement d'un système de détection de fraude en temps réel utilisant des modèles d'ensemble ML atteignant 92% de précision. Génération de 581K transactions et création de 103 features intelligentes.",

        // Skills Section
        skills_title: "Compétences & Technologies",
        skill1_title: "Python & Data Science",
        skill1_desc: "Python, Pandas, NumPy, Scikit-learn, XGBoost, LightGBM, Feature Engineering, Nettoyage de Données",
        skill2_title: "Développement Full-Stack",
        skill2_desc: "React, TypeScript, JavaScript, FastAPI, HTML5, CSS3, Tailwind CSS, APIs RESTful",
        skill3_title: "Base de Données & SQL",
        skill3_desc: "SQL, MySQL, PostgreSQL, MongoDB, SQLite, Conception de BDD, Optimisation de Requêtes",
        skill4_title: "Visualisation de Données & BI",
        skill4_desc: "Power BI, Tableau, Matplotlib, Seaborn, Plotly, Conception de Tableaux de Bord, Graphiques Interactifs",
        skill5_title: "Analyse Financière",
        skill5_desc: "Modélisation Financière, Évaluation des Risques, Analyse de Séries Temporelles, Détection de Fraude, Eviews",
        skill6_title: "IA & Machine Learning",
        skill6_desc: "Claude API, Gemini AI, Méthodes d'Ensemble, SMOTE, Validation de Modèle, ML en Production",

        // Tech Stack Section
        tech_title: "Stack Technique",
        tech_subtitle: "Technologies et outils que j'utilise pour créer des solutions data science",
        tech_languages: "Langages",
        tech_libraries: "Bibliothèques & Frameworks",
        tech_databases: "Bases de Données",
        tech_visualization: "Visualisation",
        tech_tools: "Outils & Dev",

        // Projects Section
        projects_title: "Projets Phares",
        project1_title: "Détection de Fraude pour Paiements Instantanés",
        project1_desc: "Développement d'un modèle d'ensemble ML pour la détection de fraude en temps réel atteignant 92% de précision. Génération de 581K transactions réalistes, création de 103 features intelligentes et résolution du déséquilibre des classes avec SMOTE. Validé avec des tests indépendants prouvant que le modèle apprend les patterns, sans mémorisation.",
        project1_link: "Stage de 3 Mois",
        project2_title: "DATA ANALYZER - Plateforme de Données Intelligente",
        project2_desc: "Plateforme full-stack pour la manipulation intelligente de données. Téléchargement de datasets (CSV, Excel, JSON, Parquet), nettoyage avec 8+ stratégies, requêtes en langage naturel et exécution de transformations Python personnalisées. L'assistant IA génère automatiquement du code pour des workflows de données complexes.",
        project2_link1: "Démo en Direct",
        project2_link2: "GitHub",
        project3_title: "FinAnalyse - Analyse Financière par IA",
        project3_desc: "Plateforme d'analyse financière alimentée par l'IA avec intégration de Google Gemini. Obtenez des métriques clés et des résumés intelligents de performance d'entreprise. Assistant IA conversationnel pour expliquer les termes financiers (PER, ROE), données de marché en temps réel (Top Gainers/Losers) et fil d'actualités financières.",
        project3_link1: "Démo en Direct",
        project3_link2: "GitHub",
        project4_title: "MaFinance Pro - Tableau de Bord Boursier du Maroc",
        project4_desc: "Tableau de bord boursier en temps réel suivant 77+ actions de la Bourse de Casablanca. Scraping web automatisé avec actualisation toutes les 60 secondes, recherche avancée avec autocomplétion, filtrage multi-secteurs, listes de surveillance personnalisées, alertes de prix et visualisations interactives Chart.js. Authentification sécurisée et design responsive.",
        project4_link: "GitHub",

        // Contact Section
        contact_title: "Contactez-Moi",
        contact_subtitle: "Restons Connectés",
        contact_desc: "Je suis ouvert aux stages, collaborations de recherche et opportunités en finance et data science. Discutons de comment nous pouvons travailler ensemble.",
        contact_email: "Email",
        contact_phone: "Téléphone",
        contact_location: "Localisation",
        form_name: "Votre Nom",
        form_email: "Votre Email",
        form_subject: "Sujet",
        form_message: "Votre Message",
        btn_send: "Envoyer le Message",

        // Footer
        footer_text: "© 2024 Omar Arhoune. Tous droits réservés."
    },
    en: {
        // Navigation
        nav_home: "Home",
        nav_about: "About",
        nav_education: "Education",
        nav_experience: "Experience",
        nav_skills: "Skills",
        nav_tech: "Tech Stack",
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
        about_p1: "I'm a Master's student in Finance and Data Science at Faculté des Sciences Juridiques, Economiques et Sociales Mohammedia, passionate about leveraging data analytics and machine learning to solve complex financial problems. With hands-on experience in fraud detection, financial analysis platforms, and intelligent data tools, I transform data into actionable insights.",
        about_p2: "My journey combines quantitative finance with full-stack development, allowing me to build end-to-end solutions from ML models to production-ready applications. I thrive on uncovering patterns in data and creating tools that drive informed decision-making in the financial sector.",
        stat1_title: "Master's",
        stat1_desc: "Finance & Data Science",
        stat2_title: "4+",
        stat2_desc: "Live Projects",
        stat3_title: "3 Months",
        stat3_desc: "Fraud Detection Internship",

        // Languages Section
        languages_title: "Languages",
        lang1_name: "French",
        lang1_level: "Native",
        lang2_name: "English",
        lang2_level: "Professional",
        lang3_name: "Arabic",
        lang3_level: "Native",

        // Education Section
        education_title: "Education",
        edu1_period: "2024 - Present",
        edu1_degree: "Master's in Data Science and Finance",
        edu1_institution: "FSJESM, Morocco",
        edu1_desc: "Focused on predictive modeling, machine learning, and financial analytics.",
        edu2_period: "2020 - 2024",
        edu2_degree: "Bachelor's in Economics and Management",
        edu2_institution: "FSJES Fes, Morocco",
        edu2_desc: "Built strong foundations in statistics, business strategy, and data-driven decision-making.",
        edu3_period: "2019 - 2020",
        edu3_degree: "Baccalauréat in Physics",
        edu3_institution: "Lycée IBN Rochd, Morocco",
        edu3_desc: "Strong foundation in mathematics, physics, and scientific methodology.",

        // Experience Section
        experience_title: "Work Experience",
        exp1_title: "Data Analytics Job Simulation",
        exp1_company: "Deloitte Australia",
        exp1_period: "2025",
        exp1_desc: "Performed forensic analysis, visualized insights in Tableau, and supported classification reporting.",
        exp2_title: "Fraud Detection Internship",
        exp2_company: "PEAQOCK",
        exp2_period: "July - October 2025",
        exp2_desc: "Built a real-time fraud detection system using ML ensemble models achieving 92% precision. Generated 581K transactions and created 103 intelligent features.",

        // Skills Section
        skills_title: "Skills & Technologies",
        skill1_title: "Python & Data Science",
        skill1_desc: "Python, Pandas, NumPy, Scikit-learn, XGBoost, LightGBM, Feature Engineering, Data Cleaning",
        skill2_title: "Full-Stack Development",
        skill2_desc: "React, TypeScript, JavaScript, FastAPI, HTML5, CSS3, Tailwind CSS, RESTful APIs",
        skill3_title: "Database & SQL",
        skill3_desc: "SQL, MySQL, PostgreSQL, MongoDB, SQLite, Database Design, Query Optimization",
        skill4_title: "Data Visualization & BI",
        skill4_desc: "Power BI, Tableau, Matplotlib, Seaborn, Plotly, Dashboard Design, Interactive Charts",
        skill5_title: "Financial Analysis",
        skill5_desc: "Financial Modeling, Risk Assessment, Time Series Analysis, Fraud Detection, Eviews",
        skill6_title: "AI & Machine Learning",
        skill6_desc: "Claude API, Gemini AI, Ensemble Methods, SMOTE, Model Validation, Production ML",

        // Tech Stack Section
        tech_title: "Tech Stack",
        tech_subtitle: "Technologies and tools I use to build data science solutions",
        tech_languages: "Languages",
        tech_libraries: "Libraries & Frameworks",
        tech_databases: "Databases",
        tech_visualization: "Visualization",
        tech_tools: "Tools & Dev",

        // Projects Section
        projects_title: "Featured Projects",
        project1_title: "Fraud Detection for Instant Payments",
        project1_desc: "Built an ML ensemble model for real-time fraud detection achieving 92% precision. Generated 581K realistic transactions, created 103 intelligent features, and solved class imbalance with SMOTE. Validated with independent tests proving the model learns patterns, not memorizes.",
        project1_link: "3-Month Internship",
        project2_title: "DATA ANALYZER - Smart Data Platform",
        project2_desc: "Full-stack platform for intelligent data manipulation. Upload datasets (CSV, Excel, JSON, Parquet), clean with 8+ strategies, query in plain English, and execute custom Python transformations. AI assistant generates code automatically for complex data workflows.",
        project2_link1: "Live Demo",
        project2_link2: "GitHub",
        project3_title: "FinAnalyse - AI Financial Analysis",
        project3_desc: "AI-powered financial analysis platform with Google Gemini integration. Get key metrics and intelligent summaries of company performance. Features conversational AI assistant to explain financial terms (PER, ROE), real-time market data (Top Gainers/Losers), and financial news feed.",
        project3_link1: "Live Demo",
        project3_link2: "GitHub",
        project4_title: "MaFinance Pro - Morocco Stock Market Dashboard",
        project4_desc: "Real-time stock market dashboard tracking 77+ stocks from Casablanca Stock Exchange. Features automated web scraping with 60-second auto-refresh, advanced search with autocomplete, multi-sector filtering, personalized watchlists, price alerts, and interactive Chart.js visualizations. Secure authentication and responsive design.",
        project4_link: "GitHub",

        // Contact Section
        contact_title: "Get In Touch",
        contact_subtitle: "Let's Connect",
        contact_desc: "I'm open to internships, research collaborations, and opportunities in finance and data science. Let's discuss how we can work together.",
        contact_email: "Email",
        contact_phone: "Phone",
        contact_location: "Location",
        form_name: "Your Name",
        form_email: "Your Email",
        form_subject: "Subject",
        form_message: "Your Message",
        btn_send: "Send Message",

        // Footer
        footer_text: "© 2024 Omar Arhoune. All rights reserved."
    },
    ar: {
        // Navigation
        nav_home: "الرئيسية",
        nav_about: "نبذة عني",
        nav_education: "التعليم",
        nav_experience: "الخبرة",
        nav_skills: "المهارات",
        nav_tech: "التقنيات",
        nav_projects: "المشاريع",
        nav_languages: "اللغات",
        nav_contact: "تواصل",

        // Hero Section
        hero_greeting: "مرحبا، أنا",
        hero_subtitle: "طالب ماجستير في المالية وعلوم البيانات | محلل | حلال المشكلات",
        btn_view_work: "شاهد أعمالي",
        btn_contact: "تواصل معي",
        btn_download_cv: "تحميل السيرة الذاتية",

        // About Section
        about_title: "نبذة عني",
        about_p1: "أنا طالب ماجستير في المالية وعلوم البيانات بكلية العلوم القانونية والاقتصادية والاجتماعية بالمحمدية، شغوف بالاستفادة من تحليل البيانات والتعلم الآلي لحل المشاكل المالية المعقدة. مع خبرة عملية في اكتشاف الاحتيال ومنصات التحليل المالي وأدوات البيانات الذكية، أحول البيانات إلى رؤى قابلة للتنفيذ.",
        about_p2: "رحلتي تجمع بين المالية الكمية والتطوير الشامل، مما يسمح لي ببناء حلول من البداية إلى النهاية من نماذج التعلم الآلي إلى التطبيقات الجاهزة للإنتاج. أزدهر في اكتشاف الأنماط في البيانات وإنشاء أدوات تدفع اتخاذ القرارات المستنيرة في القطاع المالي.",
        stat1_title: "ماجستير",
        stat1_desc: "المالية وعلوم البيانات",
        stat2_title: "+4",
        stat2_desc: "مشاريع حية",
        stat3_title: "3 أشهر",
        stat3_desc: "تدريب اكتشاف الاحتيال",

        // Languages Section
        languages_title: "اللغات",
        lang1_name: "الفرنسية",
        lang1_level: "لغة أم",
        lang2_name: "الإنجليزية",
        lang2_level: "احترافي",
        lang3_name: "العربية",
        lang3_level: "لغة أم",

        // Education Section
        education_title: "التعليم",
        edu1_period: "2024 - الحاضر",
        edu1_degree: "ماجستير في علوم البيانات والمالية",
        edu1_institution: "كلية العلوم القانونية والاقتصادية والاجتماعية المحمدية، المغرب",
        edu1_desc: "التركيز على النمذجة التنبؤية، التعلم الآلي، والتحليلات المالية.",
        edu2_period: "2020 - 2024",
        edu2_degree: "إجازة في الاقتصاد والتدبير",
        edu2_institution: "كلية العلوم القانونية والاقتصادية والاجتماعية فاس، المغرب",
        edu2_desc: "بناء أسس قوية في الإحصاء، استراتيجية الأعمال، واتخاذ القرارات المبنية على البيانات.",
        edu3_period: "2019 - 2020",
        edu3_degree: "بكالوريا علوم فيزيائية",
        edu3_institution: "ثانوية ابن رشد، المغرب",
        edu3_desc: "أساس قوي في الرياضيات، الفيزياء، والمنهجية العلمية.",

        // Experience Section
        experience_title: "الخبرة العملية",
        exp1_title: "محاكاة تحليل البيانات",
        exp1_company: "Deloitte أستراليا",
        exp1_period: "2025",
        exp1_desc: "إجراء التحليل الجنائي، وتصور الرؤى في Tableau، ودعم تقارير التصنيف.",
        exp2_title: "تدريب كشف الاحتيال",
        exp2_company: "PEAQOCK",
        exp2_period: "يوليو - أكتوبر 2025",
        exp2_desc: "بناء نظام كشف احتيال في الوقت الفعلي باستخدام نماذج تعلم آلي جماعية بدقة 92%. توليد 581 ألف معاملة وإنشاء 103 ميزة ذكية.",

        // Skills Section
        skills_title: "المهارات والتقنيات",
        skill1_title: "بايثون وعلوم البيانات",
        skill1_desc: "Python, Pandas, NumPy, Scikit-learn, XGBoost, LightGBM, هندسة الميزات، تنظيف البيانات",
        skill2_title: "تطوير الويب الشامل",
        skill2_desc: "React, TypeScript, JavaScript, FastAPI, HTML5, CSS3, Tailwind CSS, واجهات RESTful",
        skill3_title: "قواعد البيانات و SQL",
        skill3_desc: "SQL, MySQL, PostgreSQL, MongoDB, SQLite, تصميم قواعد البيانات، تحسين الاستعلامات",
        skill4_title: "تصور البيانات وذكاء الأعمال",
        skill4_desc: "Power BI, Tableau, Matplotlib, Seaborn, Plotly, تصميم لوحات القيادة، الرسوم البيانية التفاعلية",
        skill5_title: "التحليل المالي",
        skill5_desc: "النمذجة المالية، تقييم المخاطر، تحليل السلاسل الزمنية، كشف الاحتيال، Eviews",
        skill6_title: "الذكاء الاصطناعي والتعلم الآلي",
        skill6_desc: "Claude API, Gemini AI, طرق المجموعات، SMOTE، التحقق من النماذج، التعلم الآلي في الإنتاج",

        // Tech Stack Section
        tech_title: "التقنيات المستخدمة",
        tech_subtitle: "التقنيات والأدوات التي أستخدمها لبناء حلول علوم البيانات",
        tech_languages: "لغات البرمجة",
        tech_libraries: "المكتبات والأطر",
        tech_databases: "قواعد البيانات",
        tech_visualization: "التصور",
        tech_tools: "الأدوات والتطوير",

        // Projects Section
        projects_title: "المشاريع المميزة",
        project1_title: "كشف الاحتيال في المدفوعات الفورية",
        project1_desc: "بناء نموذج تعلم آلي للكشف عن الاحتيال في الوقت الفعلي بدقة 92%. توليد 581 ألف معاملة واقعية، إنشاء 103 ميزة ذكية، وحل عدم توازن الفئات باستخدام SMOTE. تم التحقق بالاختبارات المستقلة التي تثبت أن النموذج يتعلم الأنماط وليس الحفظ.",
        project1_link: "تدريب 3 أشهر",
        project2_title: "محلل البيانات - منصة بيانات ذكية",
        project2_desc: "منصة شاملة للتعامل الذكي مع البيانات. تحميل مجموعات البيانات (CSV, Excel, JSON, Parquet)، التنظيف بأكثر من 8 استراتيجيات، الاستعلام بالإنجليزية البسيطة، وتنفيذ تحويلات Python المخصصة. مساعد الذكاء الاصطناعي يولد الكود تلقائيًا لسير عمل البيانات المعقدة.",
        project2_link1: "عرض مباشر",
        project2_link2: "GitHub",
        project3_title: "FinAnalyse - تحليل مالي بالذكاء الاصطناعي",
        project3_desc: "منصة تحليل مالي مدعومة بالذكاء الاصطناعي مع تكامل Google Gemini. احصل على المقاييس الرئيسية والملخصات الذكية لأداء الشركة. يتميز بمساعد ذكاء اصطناعي محادثة لشرح المصطلحات المالية، بيانات السوق في الوقت الفعلي، وموجز الأخبار المالية.",
        project3_link1: "عرض مباشر",
        project3_link2: "GitHub",
        project4_title: "MaFinance Pro - لوحة معلومات سوق الأسهم المغربية",
        project4_desc: "لوحة معلومات سوق الأسهم في الوقت الفعلي تتتبع أكثر من 77 سهمًا من بورصة الدار البيضاء. يتميز بالاستخراج التلقائي للبيانات مع التحديث التلقائي كل 60 ثانية، البحث المتقدم مع الإكمال التلقائي، التصفية متعددة القطاعات، قوائم المراقبة الشخصية، تنبيهات الأسعار، والتصورات التفاعلية Chart.js. مصادقة آمنة وتصميم متجاوب.",
        project4_link: "GitHub",

        // Contact Section
        contact_title: "تواصل معي",
        contact_subtitle: "لنتواصل",
        contact_desc: "أنا منفتح للتدريب والتعاون البحثي والفرص في المالية وعلوم البيانات. دعنا نناقش كيف يمكننا العمل معًا.",
        contact_email: "البريد الإلكتروني",
        contact_phone: "الهاتف",
        contact_location: "الموقع",
        form_name: "اسمك",
        form_email: "بريدك الإلكتروني",
        form_subject: "الموضوع",
        form_message: "رسالتك",
        btn_send: "إرسال الرسالة",

        // Footer
        footer_text: "© 2024 عمر أرحون. جميع الحقوق محفوظة."
    }
};

// Language switcher functionality
let currentLang = localStorage.getItem('portfolio-lang') || 'fr';

function setLanguage(lang) {
    currentLang = lang;
    localStorage.setItem('portfolio-lang', lang);

    // Update HTML lang attribute
    document.documentElement.lang = lang;

    // Set RTL for Arabic
    if (lang === 'ar') {
        document.body.setAttribute('dir', 'rtl');
    } else {
        document.body.setAttribute('dir', 'ltr');
    }

    // Update all translatable elements
    document.querySelectorAll('[data-translate]').forEach(element => {
        const key = element.getAttribute('data-translate');
        if (translations[lang] && translations[lang][key]) {
            element.textContent = translations[lang][key];
        }
    });

    // Update placeholders
    document.querySelectorAll('[data-translate-placeholder]').forEach(element => {
        const key = element.getAttribute('data-translate-placeholder');
        if (translations[lang] && translations[lang][key]) {
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

    // Update specific content by selecting elements directly
    updateContent(lang);
}

function updateContent(lang) {
    const t = translations[lang];
    if (!t) return;

    // Update section titles
    const aboutTitle = document.querySelector('.about .section-title');
    if (aboutTitle) aboutTitle.textContent = t.about_title;

    // Update Languages section
    const languagesTitle = document.querySelector('.languages-section .section-title');
    if (languagesTitle) languagesTitle.textContent = t.languages_title;

    const languageCards = document.querySelectorAll('.language-card');
    languageCards.forEach((card, i) => {
        const num = i + 1;
        const name = card.querySelector('h3');
        const level = card.querySelector('p');

        if (name) name.textContent = t[`lang${num}_name`];
        if (level) level.textContent = t[`lang${num}_level`];
    });

    // Update Education section
    const educationTitle = document.querySelector('.education .section-title');
    if (educationTitle) educationTitle.textContent = t.education_title;

    const timelineItems = document.querySelectorAll('.timeline-item');
    timelineItems.forEach((item, i) => {
        const num = i + 1;
        const period = item.querySelector('.timeline-period');
        const degree = item.querySelector('.timeline-content h3');
        const institution = item.querySelector('.timeline-institution span:last-child');
        const desc = item.querySelector('.timeline-content p');

        if (period) period.textContent = t[`edu${num}_period`];
        if (degree) degree.textContent = t[`edu${num}_degree`];
        if (institution) institution.textContent = t[`edu${num}_institution`];
        if (desc) desc.textContent = t[`edu${num}_desc`];
    });

    // Update Experience section
    const experienceTitle = document.querySelector('.experience .section-title');
    if (experienceTitle) experienceTitle.textContent = t.experience_title;

    const experienceCards = document.querySelectorAll('.experience-card');
    experienceCards.forEach((card, i) => {
        const num = i + 1;
        const title = card.querySelector('.experience-title-block h3');
        const company = card.querySelector('.company-name');
        const period = card.querySelector('.experience-period');
        const desc = card.querySelector('.experience-description');

        if (title) title.textContent = t[`exp${num}_title`];
        if (company) company.textContent = t[`exp${num}_company`];
        if (period) period.textContent = t[`exp${num}_period`];
        if (desc) desc.textContent = t[`exp${num}_desc`];
    });

    const skillsTitle = document.querySelector('.skills .section-title');
    if (skillsTitle) skillsTitle.textContent = t.skills_title;

    const techTitle = document.querySelector('.tech-stack .section-title');
    if (techTitle) techTitle.textContent = t.tech_title;

    const techSubtitle = document.querySelector('.tech-stack-subtitle');
    if (techSubtitle) techSubtitle.textContent = t.tech_subtitle;

    // Update tech category headers
    const techCategories = document.querySelectorAll('.tech-category-header h3');
    if (techCategories[0]) techCategories[0].textContent = t.tech_languages;
    if (techCategories[1]) techCategories[1].textContent = t.tech_libraries;
    if (techCategories[2]) techCategories[2].textContent = t.tech_databases;
    if (techCategories[3]) techCategories[3].textContent = t.tech_visualization;
    if (techCategories[4]) techCategories[4].textContent = t.tech_tools;

    const projectsTitle = document.querySelector('.projects .section-title');
    if (projectsTitle) projectsTitle.textContent = t.projects_title;

    const contactTitle = document.querySelector('.contact .section-title');
    if (contactTitle) contactTitle.textContent = t.contact_title;

    // Update About section paragraphs
    const aboutPs = document.querySelectorAll('.about-text p');
    if (aboutPs[0]) aboutPs[0].textContent = t.about_p1;
    if (aboutPs[1]) aboutPs[1].textContent = t.about_p2;

    // Update stats
    const stats = document.querySelectorAll('.stat');
    if (stats[0]) {
        stats[0].querySelector('h3').textContent = t.stat1_title;
        stats[0].querySelector('p').textContent = t.stat1_desc;
    }
    if (stats[1]) {
        stats[1].querySelector('h3').textContent = t.stat2_title;
        stats[1].querySelector('p').textContent = t.stat2_desc;
    }
    if (stats[2]) {
        stats[2].querySelector('h3').textContent = t.stat3_title;
        stats[2].querySelector('p').textContent = t.stat3_desc;
    }

    // Update Skills
    const skillCards = document.querySelectorAll('.skill-card');
    skillCards.forEach((card, i) => {
        const num = i + 1;
        const title = card.querySelector('h3');
        const desc = card.querySelector('p');
        if (title) title.textContent = t[`skill${num}_title`];
        if (desc) desc.textContent = t[`skill${num}_desc`];
    });

    // Update Projects
    const projectCards = document.querySelectorAll('.project-card');
    projectCards.forEach((card, i) => {
        const num = i + 1;
        const title = card.querySelector('.project-content h3');
        const desc = card.querySelector('.project-content p');
        if (title) title.textContent = t[`project${num}_title`];
        if (desc) desc.textContent = t[`project${num}_desc`];

        // Update project links
        const links = card.querySelectorAll('.project-link');
        if (num === 1 || num === 4) {
            // Projects 1 and 4 have only one link
            if (links[0]) links[0].textContent = t[`project${num}_link`];
        } else if (num === 2 || num === 3) {
            // Projects 2 and 3 have two links
            if (links[0]) links[0].textContent = t[`project${num}_link1`];
            if (links[1]) links[1].textContent = t[`project${num}_link2`];
        }
    });

    // Update Contact section
    const contactSubtitle = document.querySelector('.contact-info h3');
    if (contactSubtitle) contactSubtitle.textContent = t.contact_subtitle;

    const contactDesc = document.querySelector('.contact-info > p');
    if (contactDesc) contactDesc.textContent = t.contact_desc;

    // Update contact labels
    const contactItems = document.querySelectorAll('.contact-item h4');
    if (contactItems[0]) contactItems[0].textContent = t.contact_email;
    if (contactItems[1]) contactItems[1].textContent = t.contact_phone;
    if (contactItems[2]) contactItems[2].textContent = t.contact_location;

    // Update form placeholders
    const formInputs = document.querySelectorAll('.contact-form input');
    if (formInputs[0]) formInputs[0].placeholder = t.form_name;
    if (formInputs[1]) formInputs[1].placeholder = t.form_email;
    if (formInputs[2]) formInputs[2].placeholder = t.form_subject;

    const formTextarea = document.querySelector('.contact-form textarea');
    if (formTextarea) formTextarea.placeholder = t.form_message;

    const sendBtn = document.querySelector('.contact-form button');
    if (sendBtn) sendBtn.textContent = t.btn_send;

    // Update footer
    const footer = document.querySelector('.footer p');
    if (footer) footer.textContent = t.footer_text;
}

// Initialize language on page load
document.addEventListener('DOMContentLoaded', function() {
    setLanguage(currentLang);

    // Add click handlers to language buttons
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            const lang = this.getAttribute('data-lang');
            setLanguage(lang);
        });
    });
});

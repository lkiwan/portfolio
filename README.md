# Omar Arhoune - Portfolio

![Portfolio Preview](https://img.shields.io/badge/Status-Live-success)
![HTML5](https://img.shields.io/badge/HTML5-E34F26?logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?logo=javascript&logoColor=black)

Modern, responsive portfolio website showcasing my journey in Finance & Data Science.

## 🌐 Live Demo

🔗 **[View Live Portfolio](https://omar-arhoune-portfolio.pages.dev/)**

## 📋 About

Professional portfolio website for Omar Arhoune, Master's student in Finance & Data Science. This portfolio showcases my projects, skills, experience, and academic background in an elegant, multilingual interface.

## ✨ Features

- 🌍 **Multilingual Support** - French, English, and Arabic (with RTL support)
- 📱 **Fully Responsive** - Optimized for mobile, tablet, and desktop
- 🎨 **Mocha Dark Theme** - Professional coffee-inspired color scheme
- ✨ **Smooth Animations** - Scroll-triggered animations and transitions
- 📊 **Animated Counters** - Dynamic statistics display
- 🎯 **Interactive Navigation** - Smooth scrolling between sections
- 📄 **CV Download** - Direct download button for resume
- 🌙 **Custom Scrollbar** - Themed scrollbar matching the design

## 🛠️ Technologies Used

- **HTML5** - Semantic markup
- **CSS3** - Modern styling with custom properties, animations, flexbox, and grid
- **JavaScript (Vanilla)** - Interactive features and language switching
- **LocalStorage API** - Language preference persistence
- **Intersection Observer API** - Scroll animations

## 📁 Project Structure

```
portfolio/
├── index.html              # Main HTML file
├── style.css               # Complete styling
├── script.js               # Interactive features
├── translations.js         # Multi-language translations
├── images/                 # Project images and logos
│   ├── fraud-detection.jpg
│   ├── data-analyzer.jpg
│   ├── finanalyse.jpg
│   ├── mafinance.jpg
│   ├── peacock_financials_logo.jpg
│   └── Deloitte logo.jpg
├── cv/                     # CV files
│   ├── Omar_Arhoune_CV.tex
│   ├── Omar_Arhoune_CV_Modern.tex
│   ├── LATEX_INSTRUCTIONS.md
│   └── README.md
└── README.md              # This file
```

## 🚀 Getting Started

### Prerequisites

- A modern web browser (Chrome, Firefox, Safari, Edge)
- Local web server (optional, for development)

### Installation

1. Clone the repository:
```bash
git clone https://github.com/YOUR-USERNAME/portfolio.git
cd portfolio
```

2. Open `index.html` in your browser:
```bash
# On Windows
start index.html

# On macOS
open index.html

# On Linux
xdg-open index.html
```

Or use a local server:
```bash
# Python 3
python -m http.server 8000

# PHP
php -S localhost:8000
```

Then visit `http://localhost:8000`

## 📱 Sections

- **Home** - Hero section with introduction and CTA buttons
- **About** - Professional summary and statistics
- **Education** - Academic background with timeline
- **Experience** - Work experience and internships
- **Skills** - Core competencies in Data Science and Finance
- **Tech Stack** - Technical skills organized by category
- **Projects** - Featured projects with links
- **Languages** - Spoken languages proficiency
- **Contact** - Contact form and social links

## 🌍 Language Support

The portfolio supports three languages:
- 🇫🇷 **French** (Default)
- 🇬🇧 **English**
- 🇸🇦 **Arabic** (with RTL support)

Language preference is saved in browser's LocalStorage.

## 🎨 Color Scheme

**Mocha Dark Theme:**
- Primary: `#c59d5f` (Gold)
- Secondary: `#8b6f47` (Brown)
- Accent: `#d4a373` (Light Gold)
- Background: `#1a1512` (Dark)
- Text: `#f5e6d3` (Cream)

## 📊 Featured Projects

1. **Fraud Detection for Instant Payments**
   - ML ensemble model with 92% precision
   - 581K synthetic transactions
   - Technologies: Python, XGBoost, LightGBM, SMOTE

2. **DATA ANALYZER - Smart Data Platform**
   - Full-stack data analysis platform
   - Technologies: Python, FastAPI, Pandas, Plotly
   - [Live Demo](https://lnkd.in/e7WC6Q-6) | [GitHub](https://lnkd.in/emEBje5E)

3. **FinAnalyse - AI Financial Analysis**
   - AI-powered financial analysis application
   - Technologies: Python, Machine Learning
   - [Live Demo](https://finanalyses.pages.dev/) | [GitHub](https://lnkd.in/dyiJU_ut)

4. **MaFinance Pro - Morocco Stock Market Dashboard**
   - Real-time stock market dashboard
   - Technologies: Python, Streamlit, Data Visualization
   - [GitHub](https://lnkd.in/ebjN_idT)

## 🔧 Customization

### Change Colors

Edit the CSS custom properties in `style.css`:

```css
:root {
    --primary-color: #c59d5f;
    --secondary-color: #8b6f47;
    --accent-gold: #d4a373;
    /* ... more colors */
}
```

### Add New Languages

1. Add translations in `translations.js`
2. Add language button in `index.html`
3. Update `switchLanguage()` function in `script.js`

### Modify Content

- **Text content**: Edit `index.html`
- **Translations**: Edit `translations.js`
- **Styling**: Edit `style.css`
- **Behavior**: Edit `script.js`

## 📄 CV/Resume

The portfolio includes LaTeX source files for professional CV:

- **Omar_Arhoune_CV.tex** - Classic ModernCV style
- **Omar_Arhoune_CV_Modern.tex** - Modern style with photo

See `cv/LATEX_INSTRUCTIONS.md` for compilation instructions.

## 🌟 Key Features Explained

### Responsive Design
- Mobile-first approach
- Breakpoints: 480px, 768px, 1024px, 1200px
- Hamburger menu for mobile navigation

### Animations
- Fade-in effects on scroll
- Slide-in animations for cards
- Animated counters for statistics
- Smooth parallax on hero section

### Performance
- Optimized images
- Minimal dependencies (vanilla JS)
- Efficient CSS with custom properties
- Lazy loading for sections

## 🚀 Deployment

### GitHub Pages

1. Push to GitHub
2. Go to Settings → Pages
3. Select branch and folder
4. Save and wait for deployment

### Cloudflare Pages / Vercel / Netlify

1. Connect your GitHub repository
2. Configure build settings (if needed)
3. Deploy automatically on push

## 📈 Browser Support

- ✅ Chrome (latest)
- ✅ Firefox (latest)
- ✅ Safari (latest)
- ✅ Edge (latest)
- ✅ Mobile browsers (iOS Safari, Chrome Mobile)

## 🤝 Contributing

This is a personal portfolio, but suggestions are welcome!

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## 📧 Contact

- **Email**: omar.arhoune@gmail.com
- **LinkedIn**: [linkedin.com/in/omar-arhoune-916b0522b](https://www.linkedin.com/in/omar-arhoune-916b0522b/)
- **GitHub**: [github.com/lkiwan](https://github.com/lkiwan)
- **Portfolio**: [omar-arhoune-portfolio.pages.dev](https://omar-arhoune-portfolio.pages.dev/)

## 📝 License

This project is open source and available for personal and educational use.

---

**Built with ❤️ by Omar Arhoune**

*Master's Student in Finance & Data Science*

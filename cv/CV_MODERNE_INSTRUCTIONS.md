# CV Moderne - Instructions d'utilisation

Ce CV utilise la même structure que le CV de Walid Chajari avec toutes vos informations personnelles et vos 4 projets.

## 📋 Fichier créé:

**Omar_Arhoune_CV_Modern.tex** - CV moderne avec photo, couleur turquoise et 4 projets détaillés

## 🎨 Design et Structure

### Style:
- ✅ Photo professionnelle en haut à gauche (cadre turquoise)
- ✅ Couleur principale: Turquoise/Teal (comme le CV de Walid)
- ✅ Layout moderne et épuré
- ✅ **Format: 1.5 pages** (optimisé pour montrer tous les projets)
- ✅ Lien vers portfolio web inclus

### Sections (dans l'ordre):
1. **En-tête** - Photo + Nom + Titre + Contacts (Email, Téléphone, LinkedIn, GitHub, Portfolio)
2. **Profil** - Paragraphe de présentation professionnel
3. **Compétences** - Techniques, Financières, Transversales
4. **Expérience** - Peacock Financials + Deloitte
5. **Formations académiques** - Master + Licence + CPGE
6. **Projets** - 4 projets détaillés avec liens Live Demo et GitHub
7. **Certifications** - IBM Data Analysis
8. **Langues** - Une seule ligne

## 🖼️ Ajouter votre Photo

### Option 1: Avec Photo (Recommandé)

1. Prenez une photo professionnelle:
   - Fond neutre (blanc, gris clair)
   - Tenue professionnelle
   - Sourire naturel
   - Cadrage buste/épaules

2. Nommez la photo `photo.jpg`

3. Placez-la dans le dossier `portfolio/cv/`

4. Le CV utilisera automatiquement la photo

### Option 2: Sans Photo

Si vous n'avez pas de photo ou ne voulez pas en mettre:

1. Ouvrez le fichier `.tex`
2. Allez aux lignes 72-78
3. **Commentez** ces lignes (ajoutez `%` au début):
   ```latex
   % \fboxsep=3mm
   % \fcolorbox{maincolor}{white}{
   %     \includegraphics[width=3.5cm, height=4.5cm]{photo.jpg}
   % }
   ```
4. **Décommentez** la ligne 80:
   ```latex
   \vspace{4.5cm}
   ```

## 📝 Personnaliser vos Informations

### ✅ Informations déjà configurées:

Les informations suivantes sont **déjà remplies** avec vos vraies données:

```latex
\faEnvelope & omar.arhoune@gmail.com
\faPhone & +212 0684010218
\faMapMarker & Casablanca & Rabat, Maroc
\faLinkedin\ linkedin.com/in/omar-arhoune-916b0522b
\faGithub\ github.com/lkiwan
\faGlobe\ Portfolio Web (omar-arhoune-portfolio.pages.dev)
```

**Note:** Si vous voulez changer l'URL du portfolio, modifiez la ligne 93.

### Section Profil (ligne 88):

Modifiez le paragraphe pour le personnaliser selon votre profil.

### Certifications (ligne 163):

Si vous avez le certificat IBM, remplacez `(En cours / À venir)` par la date et ajoutez le vrai lien.

## 🚀 Compilation

### Sur Overleaf (Recommandé):

1. Allez sur https://www.overleaf.com
2. Créez un compte gratuit
3. Cliquez "New Project" → "Upload Project"
4. Uploadez `Omar_Arhoune_CV_Modern.tex`
5. **Si vous avez une photo**, uploadez aussi `photo.jpg`
6. Le CV se compile automatiquement
7. Téléchargez le PDF

### En Local:

**Installation nécessaire:**
- MiKTeX (Windows) ou TeXLive (Linux/Mac)
- Les packages: fontawesome5, xcolor, geometry, etc.

**Compilation:**
```bash
cd portfolio/cv
pdflatex Omar_Arhoune_CV_Modern.tex
```

## 🎨 Personnaliser les Couleurs

### Changer la couleur principale (ligne 27):

```latex
\definecolor{maincolor}{RGB}{0,128,128}  % Turquoise actuel
```

**Autres couleurs professionnelles:**
```latex
\definecolor{maincolor}{RGB}{0,102,204}   % Bleu professionnel
\definecolor{maincolor}{RGB}{153,0,51}    % Bordeaux élégant
\definecolor{maincolor}{RGB}{0,128,0}     % Vert
\definecolor{maincolor}{RGB}{102,51,153}  % Violet
\definecolor{maincolor}{RGB}{204,102,0}   % Orange
```

## 📦 Packages Requis

Le CV utilise ces packages LaTeX:
- `fontawesome5` - Pour les icônes (email, téléphone, LinkedIn, GitHub)
- `xcolor` - Pour les couleurs
- `geometry` - Pour les marges
- `hyperref` - Pour les liens cliquables
- `titlesec` - Pour le formatage des sections
- `enumitem` - Pour les listes personnalisées

**Note:** Sur Overleaf, tous ces packages sont déjà installés!

## ⚠️ Problèmes Courants

### Erreur: "fontawesome5.sty not found"
**Solution:** Utilisez Overleaf OU installez le package:
```bash
# MiKTeX (Windows): Installation automatique au premier usage
# TeXLive (Linux):
sudo apt-get install texlive-fonts-extra
```

### Erreur: "photo.jpg not found"
**Solution:**
- Soit uploadez une photo nommée `photo.jpg`
- Soit suivez les instructions "Option 2: Sans Photo" ci-dessus

### Le PDF fait plus de 1.5 pages
**Solution:** Le CV est optimisé pour 1.5 pages. Si vous voulez le réduire à 1 page, vous pouvez:
1. Supprimer 1-2 projets
2. Réduire les marges (ligne 24):
```latex
\geometry{left=1.5cm, right=1.5cm, top=1.3cm, bottom=1.3cm}
```
3. Réduire l'espacement entre sections

## 📊 Différences avec l'autre CV

Vous avez maintenant **2 versions de CV**:

### 1. Omar_Arhoune_CV.tex (Version Banking - Burgundy)
- Style: ModernCV Banking
- Couleur: Bordeaux
- Sans photo
- Format classique

### 2. Omar_Arhoune_CV_Modern.tex (Version Moderne - Turquoise)
- Style: Custom moderne
- Couleur: Turquoise
- Avec photo
- Format inspiré du CV de Walid

**Conseil:** Compilez les deux et choisissez celui que vous préférez!

## 💡 Conseils d'utilisation

### Quand utiliser quelle version?

**Version Moderne (avec photo):**
- ✅ Startups et entreprises tech
- ✅ Postes créatifs
- ✅ France, Maroc, pays francophones
- ✅ Quand vous avez une bonne photo professionnelle

**Version Banking (sans photo):**
- ✅ Grandes entreprises traditionnelles
- ✅ Banques et institutions financières
- ✅ Pays anglo-saxons (UK, USA) où la photo est déconseillée
- ✅ Format plus sobre et conservateur

## 🎯 Prochaines Étapes

1. **Ajoutez votre photo** `photo.jpg` dans le dossier cv/
2. **Modifiez vos informations** (email, téléphone, LinkedIn, GitHub)
3. **Compilez sur Overleaf** pour voir le résultat
4. **Personnalisez le profil** selon votre style
5. **Téléchargez le PDF final**
6. **Placez-le** comme `Omar_Arhoune_CV.pdf` pour le bouton de votre portfolio

---

**Besoin d'aide?** Consultez LATEX_INSTRUCTIONS.md pour plus de détails sur LaTeX!

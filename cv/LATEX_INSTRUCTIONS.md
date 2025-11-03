# Guide de Compilation du CV LaTeX

Ce dossier contient votre CV professionnel au format LaTeX (`Omar_Arhoune_CV.tex`).

## 📋 Table des Matières

1. [Compilation en Ligne (Recommandé - Facile)](#compilation-en-ligne)
2. [Compilation Locale (Installation requise)](#compilation-locale)
3. [Personnalisation du CV](#personnalisation)
4. [Styles et Couleurs Disponibles](#styles-et-couleurs)

---

## 🌐 Compilation en Ligne (Recommandé - Facile)

### Option 1: Overleaf (Le Plus Simple)

1. **Créer un compte Overleaf**
   - Allez sur https://www.overleaf.com
   - Créez un compte gratuit

2. **Upload votre CV**
   - Cliquez sur "New Project" → "Upload Project"
   - Uploadez le fichier `Omar_Arhoune_CV.tex`
   - Ou créez un nouveau projet et copiez-collez le contenu

3. **Compiler**
   - Le CV se compile automatiquement
   - Vous voyez le résultat en temps réel à droite
   - Cliquez sur "Download PDF" pour télécharger

**✅ Avantages:**
- Aucune installation nécessaire
- Preview en temps réel
- Fonctionne sur tous les appareils
- Sauvegarde automatique dans le cloud

---

## 💻 Compilation Locale (Installation requise)

### Étape 1: Installer LaTeX

**Windows:**
1. Téléchargez **MiKTeX**: https://miktex.org/download
2. Installez MiKTeX (acceptez l'installation automatique des packages)

**Linux (Ubuntu/Debian):**
```bash
sudo apt-get update
sudo apt-get install texlive-full
```

**macOS:**
```bash
brew install --cask mactex
```

### Étape 2: Installer un Éditeur LaTeX

**Option A: VS Code (Recommandé)**
1. Installez Visual Studio Code
2. Installez l'extension "LaTeX Workshop"
3. Ouvrez `Omar_Arhoune_CV.tex`
4. Cliquez sur l'icône de compilation ou `Ctrl+Alt+B`

**Option B: TeXstudio**
1. Téléchargez TeXstudio: https://www.texstudio.org/
2. Ouvrez `Omar_Arhoune_CV.tex`
3. Cliquez sur `F5` ou "Build & View"

### Étape 3: Compiler avec la Ligne de Commande

```bash
cd portfolio/cv
pdflatex Omar_Arhoune_CV.tex
```

Le fichier `Omar_Arhoune_CV.pdf` sera généré dans le même dossier.

---

## ✏️ Personnalisation du CV

### 1. Informations Personnelles (Lignes 22-29)

Remplacez les informations suivantes:

```latex
\name{Omar}{Arhoune}
\title{Master en Data Science et Finance}
\phone[mobile]{+212~xxx~xxx~xxx}      % ← Votre numéro
\email{omar.arhoune@email.com}         % ← Votre email
\social[linkedin]{omar-arhoune}        % ← Votre LinkedIn
\social[github]{omar-arhoune}          % ← Votre GitHub
```

### 2. Ajouter une Photo (Optionnel)

Décommentez et modifiez la ligne 28:
```latex
\photo[64pt][0.4pt]{photo.jpg}  % Placez photo.jpg dans le même dossier
```

### 3. Ajouter un Site Web

Décommentez la ligne 27:
```latex
\homepage{www.votre-site.com}
```

### 4. Modifier le Contenu

- **Formation**: Lignes 39-55
- **Expérience**: Lignes 61-85
- **Projets**: Lignes 91-105
- **Compétences**: Lignes 111-133
- **Langues**: Lignes 139-143

---

## 🎨 Styles et Couleurs Disponibles

### Changer le Style (Ligne 11)

```latex
\moderncvstyle{banking}  % ← Changez ici
```

**Styles disponibles:**
- `classic` - Style classique avec barre latérale
- `banking` - Style moderne et professionnel (actuel)
- `casual` - Style décontracté
- `oldstyle` - Style traditionnel
- `fancy` - Style élégant avec icônes

### Changer la Couleur (Ligne 12)

```latex
\moderncvcolor{burgundy}  % ← Changez ici
```

**Couleurs disponibles:**
- `blue` - Bleu professionnel
- `burgundy` - Bordeaux élégant (actuel)
- `orange` - Orange dynamique
- `green` - Vert
- `red` - Rouge
- `purple` - Violet
- `grey` - Gris
- `black` - Noir

---

## 🔧 Commandes Utiles

### Ajouter une Entrée de Formation

```latex
\cventry{Année}{Diplôme}{Institution}{Ville}{Note}{Description}
```

### Ajouter une Expérience

```latex
\cventry{Dates}{Poste}{Entreprise}{Lieu}{}{
  \begin{itemize}
    \item Réalisation 1
    \item Réalisation 2
  \end{itemize}
}
```

### Ajouter une Compétence

```latex
\cvitem{Catégorie}{Description des compétences}
```

### Ajouter une Langue

```latex
\cvitemwithcomment{Langue}{Niveau}{Commentaire optionnel}
```

---

## 📦 Structure du Dossier CV

```
portfolio/cv/
├── Omar_Arhoune_CV.tex          ← Fichier LaTeX source
├── LATEX_INSTRUCTIONS.md        ← Ce guide
├── README.md                    ← Instructions pour le PDF
└── Omar_Arhoune_CV.pdf          ← PDF généré (à créer)
```

---

## ⚠️ Résolution de Problèmes

### Erreur: "moderncv.cls not found"
**Solution:** Installez le package moderncv
```bash
# MiKTeX (Windows): Se fait automatiquement
# TeXLive (Linux):
sudo apt-get install texlive-latex-extra
```

### Erreur: Caractères accentués incorrects
**Solution:** Vérifiez l'encodage UTF-8 du fichier

### PDF non généré
**Solution:** Compilez deux fois (pour les références)
```bash
pdflatex Omar_Arhoune_CV.tex
pdflatex Omar_Arhoune_CV.tex
```

---

## 🚀 Prochaines Étapes

1. **Personnalisez** toutes les sections avec vos vraies informations
2. **Compilez** le CV pour générer le PDF
3. **Téléchargez** le PDF final
4. **Renommez** le PDF en `Omar_Arhoune_CV.pdf`
5. **Placez** le PDF dans ce dossier
6. Le bouton "Download CV" de votre portfolio fonctionnera automatiquement!

---

## 📚 Ressources Supplémentaires

- **Documentation ModernCV:** https://ctan.org/pkg/moderncv
- **Overleaf Templates:** https://www.overleaf.com/gallery/tagged/cv
- **LaTeX Symbols:** https://www.rpi.edu/dept/arc/training/latex/LaTeX_symbols.pdf
- **ShareLaTeX Guide:** https://www.overleaf.com/learn

---

## 💡 Conseils Professionnels

✅ **À Faire:**
- Gardez le CV sur 1-2 pages maximum
- Utilisez des verbes d'action (Développé, Analysé, Implémenté...)
- Quantifiez vos réalisations quand possible
- Adaptez le CV selon le poste visé
- Relisez pour éliminer les fautes

❌ **À Éviter:**
- Trop d'informations personnelles
- CV trop long (>2 pages)
- Mise en page surchargée
- Fautes d'orthographe
- Informations obsolètes

---

**Bonne chance avec votre CV! 🎓**

*Pour toute question, consultez la documentation ModernCV ou les forums LaTeX.*

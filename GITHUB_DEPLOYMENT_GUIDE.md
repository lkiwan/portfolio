# Guide de Déploiement sur GitHub

Ce guide vous accompagne pas à pas pour mettre votre portfolio sur GitHub et le déployer en ligne.

## ✅ Étapes déjà effectuées

1. ✅ Git initialisé
2. ✅ Fichier `.gitignore` créé
3. ✅ README.md professionnel créé
4. ✅ Premier commit effectué
5. ✅ Configuration Git locale (nom et email)

## 📋 Ce qu'il vous reste à faire

### Étape 1: Créer un repository sur GitHub

1. **Connectez-vous à GitHub**
   - Allez sur https://github.com
   - Connectez-vous avec votre compte (lkiwan)

2. **Créer un nouveau repository**
   - Cliquez sur le bouton **"+"** en haut à droite
   - Sélectionnez **"New repository"**

3. **Configurer le repository**
   - **Repository name**: `portfolio` (ou `omar-arhoune-portfolio`)
   - **Description**: `Professional portfolio showcasing Finance & Data Science projects`
   - **Visibilité**:
     - ✅ **Public** (recommandé pour portfolio)
     - ❌ Private (si vous voulez le garder privé)
   - **NE COCHEZ PAS**:
     - ❌ Add a README file (vous en avez déjà un)
     - ❌ Add .gitignore (vous en avez déjà un)
     - ❌ Choose a license
   - Cliquez sur **"Create repository"**

### Étape 2: Connecter votre projet local à GitHub

Après avoir créé le repo, GitHub vous affichera des commandes. Utilisez celles-ci:

```bash
cd /mnt/c/Users/arhou/OneDrive/Bureau/portfolio

# Ajouter le remote GitHub
git remote add origin https://github.com/lkiwan/portfolio.git

# Vérifier que le remote est ajouté
git remote -v
```

### Étape 3: Pousser votre code sur GitHub

```bash
# Pousser votre code sur GitHub
git push -u origin main
```

**Note:** GitHub vous demandera de vous authentifier:
- Utilisez votre username: `lkiwan`
- Pour le mot de passe, utilisez un **Personal Access Token** (PAT)

#### Comment créer un Personal Access Token:

1. Sur GitHub, allez dans **Settings** (votre profil)
2. Cliquez sur **Developer settings** (en bas à gauche)
3. Cliquez sur **Personal access tokens** → **Tokens (classic)**
4. Cliquez sur **Generate new token** → **Generate new token (classic)**
5. Donnez un nom: `Portfolio Deployment`
6. Sélectionnez l'expiration: `90 days` ou `No expiration`
7. Cochez les permissions:
   - ✅ **repo** (full control of private repositories)
8. Cliquez sur **Generate token**
9. **COPIEZ LE TOKEN** (vous ne pourrez plus le voir!)
10. Utilisez ce token comme mot de passe lors du `git push`

### Étape 4: Vérifier sur GitHub

1. Actualisez la page de votre repository sur GitHub
2. Vous devriez voir tous vos fichiers
3. Le README.md s'affichera automatiquement en bas

---

## 🚀 Déploiement en Ligne

Maintenant que votre code est sur GitHub, vous pouvez le déployer gratuitement!

### Option 1: GitHub Pages (Le plus simple)

1. **Sur votre repository GitHub:**
   - Allez dans **Settings**
   - Cliquez sur **Pages** (menu de gauche)

2. **Configurer GitHub Pages:**
   - **Source**: Deploy from a branch
   - **Branch**: `main`
   - **Folder**: `/ (root)`
   - Cliquez sur **Save**

3. **Attendre le déploiement:**
   - GitHub va déployer votre site (1-2 minutes)
   - L'URL sera: `https://lkiwan.github.io/portfolio/`
   - Ou `https://lkiwan.github.io/omar-arhoune-portfolio/` (selon le nom)

4. **Vérifier:**
   - Retournez dans Settings → Pages
   - Vous verrez: "Your site is live at https://..."
   - Cliquez sur le lien pour voir votre portfolio!

### Option 2: Cloudflare Pages (Recommandé - Plus rapide)

1. **Créer un compte Cloudflare:**
   - Allez sur https://pages.cloudflare.com
   - Cliquez sur **Sign up**
   - Utilisez votre email GitHub

2. **Connecter GitHub:**
   - Cliquez sur **Create a project**
   - Sélectionnez **Connect to Git**
   - Autorisez Cloudflare à accéder à votre GitHub
   - Sélectionnez le repository `portfolio`

3. **Configurer le build:**
   - **Project name**: `omar-arhoune-portfolio`
   - **Production branch**: `main`
   - **Build settings**:
     - Framework preset: `None`
     - Build command: (laisser vide)
     - Build output directory: `/`
   - Cliquez sur **Save and Deploy**

4. **Obtenir votre URL:**
   - Cloudflare va déployer (1-2 minutes)
   - Votre URL sera: `https://omar-arhoune-portfolio.pages.dev`
   - **C'est l'URL que vous avez déjà dans votre CV!**

### Option 3: Vercel (Alternative rapide)

1. Allez sur https://vercel.com
2. Sign up with GitHub
3. Import votre repository `portfolio`
4. Deploy (automatique)
5. URL: `https://portfolio-xxx.vercel.app`

### Option 4: Netlify (Alternative populaire)

1. Allez sur https://www.netlify.com
2. Sign up with GitHub
3. **New site from Git** → GitHub → Sélectionnez `portfolio`
4. Deploy settings:
   - Build command: (vide)
   - Publish directory: `/`
5. Deploy
6. URL: `https://portfolio-xxx.netlify.app`

---

## 🔄 Mises à jour futures

Quand vous modifiez votre portfolio:

```bash
# 1. Vérifier les modifications
git status

# 2. Ajouter les fichiers modifiés
git add .

# 3. Créer un commit
git commit -m "Update: description de vos modifications"

# 4. Pousser sur GitHub
git push origin main
```

Le site se met à jour automatiquement (GitHub Pages, Cloudflare, Vercel, Netlify)!

---

## 📝 Commandes Git Utiles

### Voir l'historique des commits
```bash
git log --oneline
```

### Voir les modifications non commitées
```bash
git diff
```

### Annuler des modifications (avant commit)
```bash
git checkout -- nomfichier
```

### Voir les branches
```bash
git branch -a
```

### Créer une nouvelle branche
```bash
git checkout -b nouvelle-branche
```

### Revenir à la branche main
```bash
git checkout main
```

---

## ⚠️ Fichiers ignorés par Git

Le fichier `.gitignore` empêche certains fichiers d'être uploadés:

- ❌ `cv/photo.jpg` - Votre photo (privée)
- ❌ `cv/*.pdf` - Vos CV PDF (privés)
- ❌ Fichiers LaTeX temporaires (.aux, .log, etc.)
- ❌ Fichiers OS (.DS_Store, Thumbs.db, etc.)

**Important:** Les visiteurs de votre portfolio ne pourront PAS télécharger votre CV si le PDF n'est pas dans le repo. Vous avez 2 options:

1. **Garder le CV privé** (recommandé)
   - Le bouton "Download CV" ne fonctionnera pas sur la version en ligne
   - Envoyez votre CV directement aux recruteurs par email

2. **Rendre le CV public**
   - Supprimez la ligne `cv/*.pdf` du `.gitignore`
   - Ajoutez votre `Omar_Arhoune_CV.pdf` au repo
   - Le bouton fonctionnera sur le site en ligne
   - ⚠️ N'importe qui pourra télécharger votre CV

---

## 🎯 Custom Domain (Optionnel)

Si vous voulez un nom de domaine personnalisé:

### Pour GitHub Pages:
1. Achetez un domaine (Namecheap, Google Domains, etc.)
2. Dans Settings → Pages → Custom domain
3. Ajoutez votre domaine
4. Configurez les DNS chez votre registrar

### Pour Cloudflare Pages:
1. Dans Cloudflare Pages → Custom domains
2. Ajoutez votre domaine
3. Cloudflare gère automatiquement les DNS

---

## 🐛 Dépannage

### Erreur: "remote: Repository not found"
**Solution:** Vérifiez le nom du repository et vos permissions

### Erreur: "Authentication failed"
**Solution:** Utilisez un Personal Access Token, pas votre mot de passe GitHub

### Erreur: "Updates were rejected"
**Solution:**
```bash
git pull origin main --rebase
git push origin main
```

### Le site ne se met pas à jour
**Solution:**
- GitHub Pages: Attendez 1-2 minutes, videz le cache du navigateur
- Cloudflare/Vercel/Netlify: Vérifiez les logs de déploiement

### CSS/JS ne charge pas
**Solution:** Vérifiez les chemins dans index.html (relatifs, pas absolus)

---

## ✅ Checklist Finale

Avant de partager votre portfolio:

- [ ] Code poussé sur GitHub
- [ ] README.md professionnel affiché
- [ ] Site déployé et accessible en ligne
- [ ] Tous les liens fonctionnent (projets, LinkedIn, GitHub)
- [ ] Design responsive sur mobile testé
- [ ] Les 3 langues fonctionnent correctement
- [ ] Animations smooth et professionnelles
- [ ] Pas d'erreurs dans la console du navigateur
- [ ] Meta tags pour SEO (optionnel)
- [ ] Analytics configuré (optionnel - Google Analytics)

---

## 📧 Besoin d'aide?

- **Documentation Git:** https://git-scm.com/doc
- **GitHub Docs:** https://docs.github.com
- **Cloudflare Pages:** https://developers.cloudflare.com/pages

---

## 🎉 Félicitations!

Une fois déployé, votre portfolio sera accessible au monde entier!

**Partagez-le:**
- 💼 LinkedIn: Ajoutez l'URL dans votre profil
- 📧 Email: Signature professionnelle
- 📄 CV: Mentionnez l'URL
- 🐦 Twitter/X: Partagez votre travail
- 💬 Réseautage: Business cards, événements

**Prochaines étapes suggérées:**
1. Ajouter Google Analytics pour suivre les visiteurs
2. Optimiser pour le SEO (meta tags, sitemap)
3. Ajouter un blog section (optionnel)
4. Créer des cas d'études détaillés pour vos projets
5. Mettre à jour régulièrement avec nouveaux projets

---

**Bonne chance! 🚀**

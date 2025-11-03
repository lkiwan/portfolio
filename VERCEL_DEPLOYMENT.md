# Déploiement sur Vercel - Guide Étape par Étape

Guide complet pour déployer votre portfolio sur Vercel gratuitement.

## 🎯 Pourquoi Vercel?

- ✅ **Gratuit** pour projets personnels
- ✅ **Très rapide** (CDN global)
- ✅ **Déploiement automatique** à chaque push GitHub
- ✅ **HTTPS automatique**
- ✅ **Custom domain facile**
- ✅ **Zero configuration** pour sites statiques
- ✅ **Analytics inclus**

---

## 📋 Étape 1: Créer un compte Vercel

### 1.1 Aller sur Vercel

1. Ouvrez votre navigateur
2. Allez sur: **https://vercel.com**
3. Vous verrez la page d'accueil Vercel

### 1.2 Sign Up avec GitHub

1. Cliquez sur **"Sign Up"** (ou "Start Deploying") en haut à droite
2. Vous verrez plusieurs options de connexion:
   - GitHub ✅ **← CHOISISSEZ CELLE-CI**
   - GitLab
   - Bitbucket
   - Email
3. Cliquez sur **"Continue with GitHub"**

### 1.3 Autoriser Vercel

1. GitHub va vous demander de vous connecter (si pas déjà connecté)
   - Username: `lkiwan`
   - Password: Votre mot de passe GitHub

2. GitHub affiche une page d'autorisation:
   - **"Authorize Vercel"**
   - Vercel demande l'accès à:
     - Vos repositories publics
     - Votre email
     - Vos informations de profil

3. Cliquez sur **"Authorize vercel"** (bouton vert)

4. GitHub peut vous demander votre mot de passe à nouveau (sécurité)
   - Entrez votre mot de passe GitHub
   - Confirmez

---

## 📋 Étape 2: Importer votre projet

### 2.1 Dashboard Vercel

1. Vous êtes maintenant sur le **Vercel Dashboard**
2. Vous verrez une page avec:
   - "Let's build something new" ou
   - "Import Git Repository"

### 2.2 Importer depuis GitHub

1. Cliquez sur **"Add New..."** (en haut à droite)
2. Sélectionnez **"Project"** dans le menu déroulant

3. Vous verrez la page **"Import Git Repository"**

### 2.3 Connecter GitHub (si première fois)

Si c'est votre premier projet:

1. Vous verrez une section **"Import Git Repository"**
2. Sous GitHub, cliquez sur **"Connect"** ou **"Adjust GitHub App Permissions"**

3. Une popup GitHub s'ouvre:
   - **"Install Vercel"**
   - Choisissez où installer:
     - ⚪ "All repositories" (tous vos repos)
     - 🔘 **"Only select repositories"** ← RECOMMANDÉ

4. Si vous choisissez "Only select repositories":
   - Cliquez sur **"Select repositories"**
   - Cherchez et sélectionnez: **"portfolio"**
   - Cliquez sur **"Install"**

5. GitHub vous redirige vers Vercel

### 2.4 Sélectionner votre repository

1. Vous voyez maintenant vos repositories GitHub
2. Trouvez **"lkiwan/portfolio"**
3. Cliquez sur **"Import"** à côté de "portfolio"

---

## 📋 Étape 3: Configurer le projet

### 3.1 Page "Configure Project"

Vous êtes maintenant sur la page de configuration:

```
Configure Project
─────────────────
```

### 3.2 Project Name

**Champ:** Project Name
```
📝 Entrez: omar-arhoune-portfolio
```
(Ou laissez "portfolio" - c'est vous qui choisissez)

**Info:** Ce nom sera dans votre URL:
- `https://omar-arhoune-portfolio.vercel.app`
- OU `https://portfolio-lkiwan.vercel.app`

### 3.3 Framework Preset

**Champ:** Framework Preset
```
📝 Sélectionnez: Other
```

**Pourquoi?** Votre portfolio est un site HTML/CSS/JS statique, pas un framework.

### 3.4 Root Directory

**Champ:** Root Directory
```
📝 Laissez: ./ (par défaut)
```

**Info:** Vos fichiers sont à la racine du repo.

### 3.5 Build and Output Settings

Vous verrez plusieurs sections. **LAISSEZ TOUT PAR DÉFAUT:**

**Build Command**
```
📝 Laissez vide (ou automatique)
```

**Output Directory**
```
📝 Laissez vide (ou automatique)
```

**Install Command**
```
📝 Laissez vide (ou automatique)
```

**Pourquoi?** Votre site n'a pas besoin de build - c'est du HTML/CSS/JS pur!

### 3.6 Environment Variables

**Section:** Environment Variables

```
📝 Ignorez cette section - vous n'en avez pas besoin
```

**Info:** Votre portfolio n'utilise pas de variables d'environnement.

---

## 📋 Étape 4: Déployer!

### 4.1 Lancer le déploiement

1. Vérifiez que tout est correct:
   - ✅ Project Name: `omar-arhoune-portfolio` (ou votre choix)
   - ✅ Framework: `Other`
   - ✅ Root Directory: `./`
   - ✅ Build Settings: Vides/Auto

2. Cliquez sur le gros bouton bleu **"Deploy"** en bas

### 4.2 Attendre le déploiement

Vous verrez maintenant une page de build en cours:

```
Building...
──────────────────────────────
├─ Cloning repository...      ✅
├─ Installing dependencies... ✅
├─ Building...                ✅
└─ Deploying...               ⏳
```

**Durée:** 30 secondes à 2 minutes

Vous verrez:
- Des logs qui défilent
- Une animation de chargement
- Des checkmarks verts ✅

### 4.3 Succès! 🎉

Quand c'est terminé, vous verrez:

```
🎉 Congratulations!

Your project has been successfully deployed!
```

Avec:
- Une preview de votre site
- Confettis animés 🎊
- Un bouton **"Visit"**

---

## 📋 Étape 5: Voir votre site en ligne

### 5.1 Obtenir votre URL

1. Cliquez sur **"Visit"** ou **"Go to Dashboard"**

2. Votre URL sera quelque chose comme:
   ```
   https://omar-arhoune-portfolio.vercel.app
   ```
   OU
   ```
   https://portfolio-lkiwan.vercel.app
   ```

### 5.2 Tester votre site

1. Cliquez sur l'URL ou le bouton "Visit"
2. Votre portfolio s'ouvre dans un nouvel onglet
3. **Testez tout:**
   - ✅ Les 3 langues (FR/EN/AR)
   - ✅ Navigation smooth scroll
   - ✅ Animations
   - ✅ Liens des projets
   - ✅ Bouton Download CV (ne marchera pas - PDF pas uploadé)
   - ✅ Formulaire de contact
   - ✅ Responsive sur mobile (Developer Tools)

---

## 📋 Étape 6: Dashboard Vercel

### 6.1 Votre Dashboard

Sur le dashboard, vous verrez:

```
omar-arhoune-portfolio
──────────────────────
Production Deployment
├─ Status: Ready ✅
├─ Domain: omar-arhoune-portfolio.vercel.app
├─ Last deployed: Just now
└─ Branch: main
```

### 6.2 Sections importantes

**Deployments**
- Historique de tous vos déploiements
- Chaque push = nouveau déploiement automatique

**Domains**
- Gérer les domaines
- Ajouter un custom domain (optionnel)

**Settings**
- Configuration du projet
- Environment variables
- Git integration

**Analytics** (gratuit)
- Visiteurs
- Pages vues
- Performance

---

## 🔄 Mises à jour automatiques

### Comment ça marche?

**Maintenant, chaque fois que vous faites un `git push`:**

1. Vercel détecte le push automatiquement
2. Lance un nouveau build
3. Déploie la nouvelle version
4. Votre site est mis à jour en ~1 minute!

### Exemple de workflow:

```bash
# 1. Modifier vos fichiers
# Exemple: mettre à jour index.html

# 2. Vérifier les modifications
git status

# 3. Ajouter les fichiers
git add .

# 4. Créer un commit
git commit -m "Update: amélioration de la section projets"

# 5. Pousser sur GitHub
git push origin main

# ⏰ Attendez 30-60 secondes...
# ✅ Le site est automatiquement mis à jour sur Vercel!
```

### Voir le déploiement en cours:

1. Allez sur votre dashboard Vercel
2. Cliquez sur votre projet
3. Vous verrez le nouveau déploiement "Building..." puis "Ready"

---

## 🌐 Custom Domain (Optionnel)

Si vous voulez votre propre nom de domaine:

### Étape 1: Acheter un domaine

**Où acheter?**
- **Namecheap** - https://www.namecheap.com (~$10/an)
- **Google Domains** - https://domains.google.com
- **OVH** - https://www.ovh.com (européen)
- **Hostinger** - https://www.hostinger.com

**Suggestions:**
- `omarhoune.com`
- `omar-arhoune.com`
- `omarhoune.dev`

### Étape 2: Ajouter le domaine sur Vercel

1. Dans Vercel Dashboard → Votre projet
2. Cliquez sur **"Settings"**
3. Cliquez sur **"Domains"**
4. Cliquez sur **"Add"**
5. Entrez votre domaine: `omarhoune.com`
6. Cliquez sur **"Add"**

### Étape 3: Configurer les DNS

Vercel vous donne des instructions:

**Option A: Nameservers (Recommandé)**
```
Allez chez votre registrar (Namecheap, etc.)
Remplacez les nameservers par:
- ns1.vercel-dns.com
- ns2.vercel-dns.com
```

**Option B: A Record**
```
Ajoutez un A Record:
Type: A
Name: @
Value: 76.76.21.21
```

**Attente:** 24-48h pour propagation DNS (souvent plus rapide)

---

## 🔧 Fonctionnalités avancées

### Analytics

1. Dashboard → Votre projet
2. Cliquez sur **"Analytics"**
3. Activez **"Enable Analytics"** (gratuit)

Vous verrez:
- Visiteurs uniques
- Pages vues
- Pays des visiteurs
- Appareils (desktop/mobile)

### Preview Deployments

Chaque pull request crée une preview automatique:
```
https://portfolio-git-feature-branch.vercel.app
```

### Environment Variables

Si vous ajoutez des APIs plus tard:

1. Settings → Environment Variables
2. Add New → Name + Value
3. Save

### Domains multiples

Vous pouvez ajouter plusieurs domaines:
```
omarhoune.com (principal)
www.omarhoune.com (redirect)
omar-arhoune.vercel.app (garde)
```

---

## 📊 Résumé visuel

```
Votre ordinateur          GitHub              Vercel
──────────────────        ──────              ──────

[Code local] ────────────> [Repository]
                           lkiwan/portfolio
                                │
                                │ Connected
                                ↓
                           [Vercel]
                                │
                           Auto deploy
                                │
                                ↓
                           🌐 LIVE!
                           omar-arhoune-
                           portfolio
                           .vercel.app
```

---

## ⚠️ Problèmes courants

### Problème 1: CSS ne charge pas

**Symptôme:** Le site s'affiche sans style

**Solution:**
Vérifiez dans `index.html` que les chemins sont relatifs:
```html
✅ <link rel="stylesheet" href="style.css">
❌ <link rel="stylesheet" href="/style.css">
❌ <link rel="stylesheet" href="C:/Users/.../style.css">
```

### Problème 2: Images ne s'affichent pas

**Solution:**
Vérifiez les chemins des images:
```html
✅ <img src="images/fraud-detection.jpg">
❌ <img src="/images/fraud-detection.jpg">
```

### Problème 3: "Repository not found"

**Solution:**
1. Allez sur GitHub
2. Settings → Applications
3. Vercel → Configure
4. Ajoutez le repository "portfolio"

### Problème 4: Build échoue

**Solution:**
Vérifiez les logs:
1. Dashboard → Deployments
2. Cliquez sur le déploiement échoué
3. Regardez les logs d'erreur
4. Généralement: problème de chemin ou syntaxe

### Problème 5: Le site est lent

**Solution:**
- Vercel est déjà très rapide!
- Optimisez vos images (compression)
- Minifiez CSS/JS (optionnel)

---

## 📱 Test sur mobile

### Via Vercel

1. Sur mobile, allez sur votre URL Vercel
2. Testez toutes les fonctionnalités

### Developer Tools

1. Desktop: F12 → Toggle device toolbar
2. Testez différentes tailles:
   - iPhone SE (375px)
   - iPhone 12 Pro (390px)
   - iPad (768px)
   - iPad Pro (1024px)

---

## ✅ Checklist finale

Avant de partager votre portfolio:

- [ ] Site déployé sur Vercel
- [ ] URL fonctionne: https://omar-arhoune-portfolio.vercel.app
- [ ] Les 3 langues fonctionnent (FR/EN/AR)
- [ ] Navigation smooth scroll OK
- [ ] Tous les liens des projets fonctionnent
- [ ] Responsive sur mobile testé
- [ ] Pas d'erreurs console (F12)
- [ ] Animations smooth
- [ ] Formulaire contact fonctionne
- [ ] GitHub/LinkedIn/Email links OK
- [ ] SEO basics (meta tags)
- [ ] Analytics activé (optionnel)

---

## 🎯 Partagez votre portfolio!

### Ajoutez l'URL partout:

**LinkedIn:**
1. Profil → Section "Featured"
2. Add profile section → Featured → Link
3. URL: https://omar-arhoune-portfolio.vercel.app

**GitHub:**
1. Profil → Edit profile
2. Website: https://omar-arhoune-portfolio.vercel.app
3. Save

**CV:**
Votre CV a déjà le lien! Mettez à jour si besoin:
```
Portfolio: omar-arhoune-portfolio.vercel.app
```

**Email Signature:**
```
Omar Arhoune
Master Finance & Data Science
📧 omar.arhoune@gmail.com
🌐 omar-arhoune-portfolio.vercel.app
💼 linkedin.com/in/omar-arhoune-916b0522b
```

---

## 📈 Prochaines étapes

### Court terme:
1. ✅ Déployer sur Vercel (vous êtes là!)
2. 📊 Activer Analytics
3. 🔗 Ajouter l'URL partout (LinkedIn, CV, GitHub)
4. 📧 Tester le formulaire de contact

### Moyen terme:
1. 🌐 Custom domain (optionnel)
2. 📊 Google Analytics (plus détaillé)
3. 🎨 Ajouter plus de projets
4. 📝 Blog section (optionnel)

### Long terme:
1. 🔄 Mises à jour régulières
2. 📊 Analyse des visiteurs
3. 🎯 A/B testing (optionnel)
4. 🌍 SEO optimization

---

## 🎉 Félicitations!

Votre portfolio est maintenant **live** sur Vercel!

**Avantages de Vercel:**
- ⚡ Ultra rapide (CDN global)
- 🔄 Déploiement automatique
- 🆓 Gratuit à 100%
- 🔒 HTTPS automatique
- 📊 Analytics inclus
- 🌐 Custom domain facile

**Votre URL:**
```
https://omar-arhoune-portfolio.vercel.app
```

Partagez-la fièrement! 🚀

---

**Questions? Problèmes?**
- Vercel Docs: https://vercel.com/docs
- Support: https://vercel.com/support
- Community: https://github.com/vercel/vercel/discussions

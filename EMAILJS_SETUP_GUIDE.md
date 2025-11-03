# 📧 Guide Configuration EmailJS - Formulaire de Contact

**Votre email:** omar.arhoune@gmail.com

EmailJS est maintenant intégré dans votre portfolio! Suivez ce guide pour le configurer.

## ✅ Ce qui a été fait

1. ✅ Code EmailJS ajouté dans `script.js`
2. ✅ Bibliothèque EmailJS chargée dans `index.html`
3. ✅ Formulaire configuré pour envoyer à: **omar.arhoune@gmail.com**

## 🚀 Configuration EmailJS (5 minutes)

### Étape 1: Créer un compte EmailJS

1. **Allez sur:** https://www.emailjs.com/

2. **Cliquez sur** "Sign Up" ou "Get Started Free"

3. **Créez votre compte:**
   - Utilisez votre email: **omar.arhoune@gmail.com**
   - Créez un mot de passe
   - Confirmez votre email

4. **Plan gratuit:**
   - ✅ 200 emails/mois gratuit
   - ✅ Parfait pour un portfolio

### Étape 2: Ajouter un Email Service

Une fois connecté sur EmailJS:

1. **Allez dans** "Email Services" (menu de gauche)

2. **Cliquez sur** "Add New Service"

3. **Choisissez Gmail:**
   - Cliquez sur **"Gmail"**
   - Cliquez sur **"Connect Account"**

4. **Connectez votre Gmail:**
   - Choisissez votre compte: **omar.arhoune@gmail.com**
   - Autorisez EmailJS à envoyer des emails
   - Cliquez sur **"Allow"**

5. **Nommez votre service:**
   - Service Name: `Portfolio Contact Form`
   - Service ID: **COPIEZ CE SERVICE ID** (exemple: `service_abc123`)
   - Cliquez sur **"Create Service"**

**📝 IMPORTANT:** Notez votre **SERVICE ID** - vous en aurez besoin!

### Étape 3: Créer un Email Template

1. **Allez dans** "Email Templates" (menu de gauche)

2. **Cliquez sur** "Create New Template"

3. **Configurez le template:**

   **Subject (Sujet):**
   ```
   📧 Nouveau message de {{from_name}} - Portfolio
   ```

   **Content (Corps de l'email):**
   ```
   Vous avez reçu un nouveau message depuis votre portfolio!

   📋 Détails du message:
   ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

   👤 Nom: {{from_name}}
   📧 Email: {{from_email}}
   📝 Sujet: {{subject}}

   💬 Message:
   {{message}}

   ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

   Répondez à cette personne à: {{from_email}}

   ---
   Message envoyé depuis: omar-arhoune-portfolio.vercel.app
   ```

4. **Configuration du Template:**
   - Template Name: `Portfolio Contact`
   - To Email: `{{to_email}}`
   - From Name: `Portfolio Omar Arhoune`
   - Reply To: `{{from_email}}`

5. **Cliquez sur** "Save"

6. **📝 IMPORTANT:** Notez votre **TEMPLATE ID** (exemple: `template_xyz789`)

### Étape 4: Obtenir votre Public Key

1. **Allez dans** "Account" (menu de gauche)

2. **Section "General"**

3. **Trouvez** "Public Key" (ou "User ID")

4. **📝 IMPORTANT:** Copiez votre **PUBLIC KEY** (exemple: `aBcDeFgHiJkLmNoPqR`)

### Étape 5: Ajouter les clés dans votre code

Maintenant que vous avez vos 3 clés:
- ✅ **PUBLIC_KEY** (Account → Public Key)
- ✅ **SERVICE_ID** (Email Services)
- ✅ **TEMPLATE_ID** (Email Templates)

**Ouvrez le fichier:** `portfolio/script.js`

**Trouvez les lignes 106-108:**
```javascript
const EMAILJS_PUBLIC_KEY = 'YOUR_PUBLIC_KEY'; // Votre Public Key EmailJS
const EMAILJS_SERVICE_ID = 'YOUR_SERVICE_ID'; // Votre Service ID
const EMAILJS_TEMPLATE_ID = 'YOUR_TEMPLATE_ID'; // Votre Template ID
```

**Remplacez par vos vraies valeurs:**
```javascript
const EMAILJS_PUBLIC_KEY = 'aBcDeFgHiJkLmNoPqR'; // Votre vraie Public Key
const EMAILJS_SERVICE_ID = 'service_abc123'; // Votre vrai Service ID
const EMAILJS_TEMPLATE_ID = 'template_xyz789'; // Votre vrai Template ID
```

**Sauvegardez le fichier!**

### Étape 6: Committer et déployer

```bash
cd /mnt/c/Users/arhou/OneDrive/Bureau/portfolio

# Ajouter les modifications
git add script.js

# Créer un commit
git commit -m "Configure EmailJS with real API keys"

# Pousser sur GitHub
git push origin main

# Vercel va redéployer automatiquement en 1-2 minutes!
```

---

## 🧪 Tester votre formulaire

### Étape 1: Attendre le déploiement
- Allez sur https://vercel.com/dashboard
- Attendez que le status soit **🟢 Ready**

### Étape 2: Tester le formulaire
1. Allez sur votre portfolio: `https://omar-arhoune-portfolio.vercel.app`

2. Scrollez jusqu'à la section "Contact"

3. Remplissez le formulaire:
   - **Nom:** Test Contact
   - **Email:** test@example.com
   - **Sujet:** Test du formulaire
   - **Message:** Ceci est un message de test!

4. Cliquez sur **"Send Message"**

5. Vous devriez voir:
   - Le bouton change en "⏳ Envoi en cours..."
   - Puis message: "✅ Merci Test Contact! Votre message a été envoyé..."

### Étape 3: Vérifier votre email
1. Ouvrez Gmail: https://gmail.com

2. Vérifiez votre boîte de réception: **omar.arhoune@gmail.com**

3. Vous devriez recevoir un email avec:
   ```
   Subject: 📧 Nouveau message de Test Contact - Portfolio
   From: Portfolio Omar Arhoune
   ```

4. **SUCCESS!** 🎉 Votre formulaire fonctionne!

---

## 📊 Dashboard EmailJS

### Voir vos messages:

1. **Allez sur:** https://dashboard.emailjs.com/

2. **Section "History"** - Vous verrez tous les emails envoyés

3. **Informations disponibles:**
   - Date et heure
   - Nom de l'expéditeur
   - Email
   - Status (Sent/Failed)

### Quota:
- **Plan gratuit:** 200 emails/mois
- **Vérifiez votre quota:** Dashboard → Usage

---

## 🎨 Personnalisation (Optionnel)

### Changer le message de succès:

Dans `script.js`, ligne 140:
```javascript
alert(`✅ Merci ${name}! Votre message a été envoyé avec succès. Je vous répondrai bientôt!`);
```

Changez en ce que vous voulez:
```javascript
alert(`🎉 Message envoyé! Je vous contacterai sous 24-48h.`);
```

### Ajouter une notification visuelle:

Au lieu de `alert()`, créez une notification plus jolie:

**Ajoutez ce CSS dans `style.css`:**
```css
.notification {
    position: fixed;
    top: 100px;
    right: 20px;
    background: linear-gradient(135deg, var(--primary-color), var(--secondary-color));
    color: var(--text-cream);
    padding: 20px 30px;
    border-radius: 10px;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
    z-index: 9999;
    animation: slideIn 0.3s ease;
}

@keyframes slideIn {
    from { transform: translateX(400px); opacity: 0; }
    to { transform: translateX(0); opacity: 1; }
}
```

**Remplacez dans `script.js` ligne 140:**
```javascript
// Créer notification
const notification = document.createElement('div');
notification.className = 'notification';
notification.innerHTML = `✅ Merci ${name}! Message envoyé avec succès!`;
document.body.appendChild(notification);

// Supprimer après 5 secondes
setTimeout(() => {
    notification.remove();
}, 5000);
```

---

## ⚠️ Troubleshooting

### Problème 1: "emailjs is not defined"

**Solution:**
Vérifiez que le script EmailJS est bien chargé dans `index.html`:
```html
<script src="https://cdn.jsdelivr.net/npm/@emailjs/browser@4/dist/email.min.js"></script>
```

### Problème 2: Email non reçu

**Solutions:**
1. Vérifiez vos spams/courrier indésirable
2. Vérifiez que le Service Gmail est bien connecté dans EmailJS
3. Vérifiez le Dashboard EmailJS → History pour voir les erreurs

### Problème 3: "Failed to send"

**Solutions:**
1. Vérifiez que les 3 clés sont correctes (PUBLIC_KEY, SERVICE_ID, TEMPLATE_ID)
2. Vérifiez votre quota EmailJS (200 emails/mois)
3. Vérifiez la console du navigateur (F12) pour voir l'erreur exacte

### Problème 4: Variables manquantes dans l'email

**Solution:**
Vérifiez que les variables dans votre template correspondent:
- `{{from_name}}` ← doit correspondre à `from_name` dans le code
- `{{from_email}}` ← doit correspondre à `from_email` dans le code
- `{{subject}}` ← doit correspondre à `subject` dans le code
- `{{message}}` ← doit correspondre à `message` dans le code

---

## 🔒 Sécurité

### Est-ce sécurisé?

✅ **OUI!**
- Les clés EmailJS sont des **clés publiques** (safe côté frontend)
- Elles permettent SEULEMENT d'envoyer des emails
- Personne ne peut utiliser vos clés pour autre chose
- Pas de backend = pas de serveur à sécuriser

### Protection contre le spam:

EmailJS a une protection anti-spam intégrée:
- Limite de 200 emails/mois (gratuit)
- Rate limiting automatique
- Captcha optionnel (si besoin)

### Ajouter reCAPTCHA (optionnel):

Si vous recevez du spam:

1. **Google reCAPTCHA:** https://www.google.com/recaptcha
2. Créez une clé v3
3. Suivez la doc EmailJS: https://www.emailjs.com/docs/user-guide/adding-captcha-verification/

---

## 📈 Statistiques

### Avec EmailJS gratuit:

- ✅ **200 emails/mois**
- ✅ Historique des emails
- ✅ Analytics basiques
- ✅ Templates illimités

### Si vous dépassez 200 emails:

**Plan Personal:** $9/mois = 1,000 emails
**Plan Professional:** $29/mois = 10,000 emails

(Mais 200/mois est largement suffisant pour un portfolio!)

---

## 🎯 Résumé des étapes

- [x] Code EmailJS intégré dans script.js
- [x] Bibliothèque EmailJS chargée dans index.html
- [ ] Créer compte EmailJS
- [ ] Connecter service Gmail
- [ ] Créer email template
- [ ] Copier les 3 clés (PUBLIC_KEY, SERVICE_ID, TEMPLATE_ID)
- [ ] Remplacer les clés dans script.js
- [ ] Committer et pousser sur GitHub
- [ ] Tester le formulaire sur le site live
- [ ] Vérifier réception email dans omar.arhoune@gmail.com

---

## 📞 Liens Utiles

- **EmailJS Dashboard:** https://dashboard.emailjs.com/
- **Documentation:** https://www.emailjs.com/docs/
- **Templates:** https://dashboard.emailjs.com/admin/templates
- **Usage (Quota):** https://dashboard.emailjs.com/admin

---

## 🎉 Après Configuration

Une fois configuré, **chaque fois qu'un visiteur envoie un message:**

1. 📝 Le formulaire capture les données
2. 📧 EmailJS envoie un email à **omar.arhoune@gmail.com**
3. ✅ Le visiteur voit un message de confirmation
4. 📊 Vous voyez l'email dans votre boîte Gmail
5. 💬 Vous pouvez répondre directement depuis Gmail!

**C'est une solution professionnelle 100% gratuite!** 🚀

---

## 📧 Format de l'email que vous recevrez:

```
De: Portfolio Omar Arhoune
À: omar.arhoune@gmail.com
Sujet: 📧 Nouveau message de [Nom du visiteur] - Portfolio

Vous avez reçu un nouveau message depuis votre portfolio!

📋 Détails du message:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

👤 Nom: John Doe
📧 Email: john.doe@company.com
📝 Sujet: Opportunité de stage

💬 Message:
Bonjour Omar, j'ai vu votre portfolio et je suis impressionné
par vos projets en data science...

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Répondez à cette personne à: john.doe@company.com
```

**Vous pourrez répondre directement en cliquant sur "Reply"!**

---

**Bonne chance avec la configuration! 🎊**

**Questions? Besoin d'aide? Dites-le moi!** 😊

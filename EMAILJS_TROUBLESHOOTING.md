# 🔧 EmailJS Troubleshooting Guide

**Error Message:** "❌ Erreur lors de l'envoi"

## 🔍 Current Configuration

Dans votre `script.js`:
```javascript
const EMAILJS_PUBLIC_KEY = 'jxzcFIrllrRzHbYsO';
const EMAILJS_SERVICE_ID = 'service_qxgsc1e';
const EMAILJS_TEMPLATE_ID = 'aYjd7uKADa-__TmfcRZrD';
```

## ⚠️ Problème Identifié

Le **TEMPLATE_ID** ne semble pas avoir le bon format:
- ❌ Actuel: `aYjd7uKADa-__TmfcRZrD`
- ✅ Format attendu: `template_xxxxxx`

## 🔧 Solutions Étape par Étape

### Étape 1: Vérifier votre Dashboard EmailJS

1. **Allez sur:** https://dashboard.emailjs.com/

2. **Connectez-vous** avec votre compte: omar.arhoune@gmail.com

3. **Vérifiez que vous êtes sur la bonne page:**
   - Vous devriez voir votre nom en haut à droite
   - Menu de gauche avec: Email Services, Email Templates, etc.

### Étape 2: Vérifier le Email Service

1. **Cliquez sur** "Email Services" dans le menu de gauche

2. **Vérifiez que vous avez un service:**
   - ✅ Devrait montrer: "Gmail" ou similaire
   - ✅ Status: "Connected" (vert)
   - ✅ Service ID: `service_qxgsc1e`

**Si le Service ID est différent:**
- Copiez le bon Service ID
- Notez-le pour l'étape 4

**Si aucun service n'existe:**
1. Cliquez sur "Add New Service"
2. Choisissez "Gmail"
3. Connectez votre compte omar.arhoune@gmail.com
4. Notez le Service ID généré

### Étape 3: Vérifier le Email Template

1. **Cliquez sur** "Email Templates" dans le menu de gauche

2. **Vérifiez vos templates:**

**Si vous voyez un template existant:**
- Cliquez dessus pour l'ouvrir
- Vérifiez le **Template ID** en haut de la page
- Il devrait ressembler à: `template_abc123`

**Si aucun template n'existe, créez-en un:**

1. Cliquez sur "Create New Template"

2. **Settings (en haut):**
   - Template Name: `Portfolio Contact`
   - Template ID: Laissez EmailJS le générer automatiquement
   - Notez le Template ID (format: `template_xxxxx`)

3. **Configure le template:**

   **Subject:**
   ```
   📧 Nouveau message de {{from_name}} - Portfolio
   ```

   **Content:**
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

   Répondez à: {{from_email}}

   ---
   Envoyé depuis: omar-arhoune-portfolio.vercel.app
   ```

4. **Template Settings (onglet Settings):**
   - To Email: `{{to_email}}`
   - From Name: `Portfolio Omar Arhoune`
   - Reply To: `{{from_email}}`

5. **Cliquez sur "Save"**

6. **IMPORTANT:** Notez le **Template ID** affiché en haut!

### Étape 4: Vérifier votre Public Key

1. **Cliquez sur** "Account" dans le menu de gauche

2. **Section "General"**

3. **Trouvez** "Public Key" (ou "User ID")

4. **Vérifiez:** `jxzcFIrllrRzHbYsO`
   - Si différent, copiez le bon Public Key

### Étape 5: Test Direct sur EmailJS

Avant de modifier le code, testons directement sur EmailJS:

1. **Allez sur votre template** (Email Templates → votre template)

2. **Cliquez sur** "Test it" (bouton en haut à droite)

3. **Remplissez les champs:**
   ```
   from_name: Test
   from_email: test@example.com
   subject: Test EmailJS
   message: Test message
   to_email: omar.arhoune@gmail.com
   ```

4. **Cliquez sur** "Send Test Email"

**Résultat attendu:**
- ✅ Message: "Email sent successfully"
- ✅ Vous recevez l'email dans omar.arhoune@gmail.com

**Si ça échoue:**
- ❌ Le service Gmail n'est pas bien connecté
- ❌ Le template a une erreur
- ❌ Votre compte EmailJS n'est pas vérifié

### Étape 6: Corriger les clés dans script.js

Une fois que vous avez vos **3 vraies clés** du dashboard:

**Ouvrez:** `/mnt/c/Users/arhou/OneDrive/Bureau/portfolio/script.js`

**Trouvez les lignes 106-108:**
```javascript
const EMAILJS_PUBLIC_KEY = 'jxzcFIrllrRzHbYsO';
const EMAILJS_SERVICE_ID = 'service_qxgsc1e';
const EMAILJS_TEMPLATE_ID = 'aYjd7uKADa-__TmfcRZrD'; // ⚠️ Probablement incorrect
```

**Remplacez par vos vraies valeurs du dashboard:**
```javascript
const EMAILJS_PUBLIC_KEY = 'VOTRE_VRAIE_PUBLIC_KEY';
const EMAILJS_SERVICE_ID = 'VOTRE_VRAI_SERVICE_ID';
const EMAILJS_TEMPLATE_ID = 'VOTRE_VRAI_TEMPLATE_ID'; // Format: template_xxxxx
```

### Étape 7: Améliorer le logging des erreurs

Pour voir l'erreur exacte, je vais améliorer le code pour afficher plus de détails.

## 🔍 Vérifications Rapides

### Check 1: Format du Template ID

**Mauvais format (probablement le problème actuel):**
```
❌ aYjd7uKADa-__TmfcRZrD
```

**Bon format:**
```
✅ template_abc123
✅ template_xyz789
✅ template_contact_form
```

### Check 2: Service connecté

Sur le dashboard EmailJS:
1. Email Services
2. Votre service doit montrer "Connected" (vert)
3. Si "Disconnected" (rouge), reconnectez votre Gmail

### Check 3: Compte EmailJS vérifié

1. Vérifiez votre email omar.arhoune@gmail.com
2. Cherchez un email de EmailJS pour vérifier votre compte
3. Cliquez sur le lien de vérification si présent

### Check 4: Quota EmailJS

1. Dashboard → Account
2. Vérifiez "Usage"
3. Plan gratuit: 200 emails/mois
4. Si quota dépassé, attendez le mois prochain ou upgradez

## 🐛 Erreurs Courantes

### Erreur 1: "Public key is required"

**Cause:** Public Key manquante ou invalide

**Solution:**
- Allez sur Account → General
- Copiez la Public Key exacte
- Mettez-la dans script.js

### Erreur 2: "Service ID does not exist"

**Cause:** Service ID incorrect ou service non créé

**Solution:**
- Allez sur Email Services
- Vérifiez le Service ID exact
- Si pas de service, créez-en un (Gmail)

### Erreur 3: "Template ID does not exist"

**Cause:** Template ID incorrect ou template non créé

**Solution:**
- Allez sur Email Templates
- Vérifiez le Template ID exact (format: template_xxxxx)
- Si pas de template, créez-en un

### Erreur 4: "Failed to send email"

**Cause:** Service Gmail déconnecté

**Solution:**
- Email Services → votre service
- Cliquez sur "Connect Account"
- Réautorisez Gmail

### Erreur 5: "Limit exceeded"

**Cause:** Quota de 200 emails/mois dépassé

**Solution:**
- Attendez le début du mois prochain
- Ou upgradez vers plan payant

## 📋 Checklist de Diagnostic

Vérifiez chaque point:

- [ ] Compte EmailJS créé et vérifié
- [ ] Connecté sur https://dashboard.emailjs.com/
- [ ] Service Gmail existe et est "Connected"
- [ ] Service ID noté et copié
- [ ] Template créé avec variables: from_name, from_email, subject, message, to_email
- [ ] Template ID au bon format (template_xxxxx)
- [ ] Public Key notée et copiée
- [ ] Test envoyé depuis le dashboard et réussi
- [ ] Email de test reçu dans omar.arhoune@gmail.com
- [ ] Les 3 clés mises à jour dans script.js
- [ ] Code commité et pushé sur GitHub
- [ ] Vercel redéployé
- [ ] Formulaire testé sur site live

## 🚀 Procédure Complète de Fix

```bash
# 1. Ouvrez le dashboard EmailJS
https://dashboard.emailjs.com/

# 2. Notez vos 3 vraies clés:
PUBLIC_KEY: [copier depuis Account → General]
SERVICE_ID: [copier depuis Email Services]
TEMPLATE_ID: [copier depuis Email Templates - doit commencer par "template_"]

# 3. Testez directement sur EmailJS (bouton "Test it" dans le template)

# 4. Si le test fonctionne, mettez à jour script.js

# 5. Commitez et pushez:
cd /mnt/c/Users/arhou/OneDrive/Bureau/portfolio
git add script.js
git commit -m "Fix EmailJS: update with correct Template ID"
git push origin main

# 6. Attendez 1 minute (Vercel redéploie)

# 7. Testez sur votre site live
```

## 🎯 Solution Probable

**Le problème est très probablement le Template ID:**

Le format actuel `aYjd7uKADa-__TmfcRZrD` ne correspond pas au format EmailJS standard.

**Actions immédiates:**
1. Allez sur https://dashboard.emailjs.com/admin/templates
2. Vérifiez le Template ID de votre template
3. Si pas de template, créez-en un nouveau
4. Copiez le Template ID (format: `template_xxxxx`)
5. Mettez-le dans script.js à la place de `aYjd7uKADa-__TmfcRZrD`

## 📞 Support EmailJS

Si le problème persiste:

**Documentation:**
- https://www.emailjs.com/docs/

**Support:**
- https://www.emailjs.com/support/

**Common Issues:**
- https://www.emailjs.com/docs/faq/

## 🔄 Prochaine Étape

**Donnez-moi vos 3 vraies clés du dashboard EmailJS:**
1. PUBLIC_KEY (depuis Account → General)
2. SERVICE_ID (depuis Email Services)
3. TEMPLATE_ID (depuis Email Templates - format: template_xxxxx)

**Et je mettrai à jour script.js immédiatement!**

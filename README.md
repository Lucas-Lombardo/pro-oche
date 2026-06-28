# My Oche — site de démo

Boutique e-commerce de démonstration pour **My Oche** (oches de fléchettes pliables et personnalisables, faits main à Stockton-on-Tees).

Site **100 % fonctionnel** (panier, personnalisation en direct, tunnel de commande) mais **sans paiement réel** — c'est une démo destinée à être montrée au CEO.

Construit avec **Next.js (App Router)** + React, sans dépendance superflue. Le site est **en anglais** ; ce README est en français.

---

## Lancer en local

```bash
npm install
npm run dev
```

Puis ouvrir http://localhost:3000

Pour tester la version de production :

```bash
npm run build
npm run start
```

---

## Déployer sur Vercel

Le projet est prêt pour Vercel (aucune configuration nécessaire, Next.js est détecté automatiquement).

### Option A — via le site Vercel (le plus simple)
1. Pousser ce dossier sur un dépôt GitHub (ou GitLab/Bitbucket).
2. Aller sur https://vercel.com → **Add New… → Project**.
3. Importer le dépôt. Vercel détecte Next.js tout seul.
4. Cliquer sur **Deploy**. C'est tout.

### Option B — via la CLI Vercel
```bash
npm i -g vercel
vercel        # déploiement de preview
vercel --prod # déploiement en production
```

> Astuce : dans ce chat, tapez `! vercel` pour lancer la commande directement dans la session.

---

## Structure

```
app/
  layout.js            En-tête, pied de page, polices, métadonnées
  page.js              Page d'accueil (hero, atouts, galerie, avis, FAQ)
  product/             Page produit + personnalisateur en direct
  cart/                Panier
  checkout/            Tunnel de commande (démo, sans paiement)
  checkout/success/    Confirmation de commande
  custom-designs/      Galerie des réalisations
  components/          Header, Footer, panier (contexte), aperçu du tapis, etc.
  lib/                 Données produit + formatage des prix
public/images/         Logo + photos des oches
source-images/         Images d'origine (non déployées)
```

---

## Ce qui est personnalisable dans la démo

Le personnalisateur de la page produit permet de :
- choisir un **thème / une couleur** (Classic Wine, Blackout, Pro Red, Ice Blue, Bespoke) ;
- ajouter un **texte personnalisé** (nom, club, slogan) visible en direct sur l'aperçu ;
- choisir la **taille et la distance d'oche** (acier / soft / compact) ;
- ajouter l'option **éclairage LED RGB** (+40 £).

> Ces options sont des **propositions** à valider avec le CEO. Le prix de base est de **149 £**.
> Tout est centralisé dans `app/lib/products.js` — facile à modifier.

---

## Points à savoir

- **Aucun paiement** n'est traité. Le tunnel de commande est entièrement simulé et affiche une confirmation factice.
- Le panier est conservé dans le `localStorage` du navigateur.
- Les libellés « Demo store » rappellent partout qu'il s'agit d'une démonstration.
- Le lien Facebook en pied de page pointe vers la vraie page My Oche.

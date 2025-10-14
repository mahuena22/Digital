# Digital Innovation - Reproduction fidèle

## Overview
Reproduction pixel-perfect du site [digitalinnovation.bj](https://www.digitalinnovation.bj/) en React 19 + Vite 7. Application complète avec animations, carrousel et design responsive fidèle à l'original.

## Architecture du Projet
- **Framework Frontend**: React 19.1.1
- **Outil de Build**: Vite 7.1.7
- **Animations**: Framer Motion
- **Carrousel**: Swiper.js
- **Icônes**: React Icons
- **Compilateur**: React Compiler (optimisation)

## Structure
```
src/
  ├── components/
  │   ├── Header.jsx         # Logo + icônes sociales uniquement
  │   ├── Hero.jsx          # Section héro "Agence de com Digital Innovation."
  │   ├── About.jsx         # "Qui sommes nous" avec 4 cartes de services
  │   ├── Services.jsx      # Services supplémentaires
  │   ├── Portfolio.jsx     # Réalisations avec carrousel
  │   ├── Workflow.jsx      # Processus en 6 étapes avec icônes
  │   ├── Testimonials.jsx  # Témoignages clients
  │   ├── FAQ.jsx          # Questions fréquentes
  │   ├── CTA.jsx          # Call-to-action
  │   ├── Blog.jsx         # Articles de blog
  │   ├── Footer.jsx       # Pied de page simplifié
  │   └── BottomNav.jsx    # Navigation fixe en bas avec icônes
  ├── App.jsx              # Assemblage des composants
  ├── main.jsx            # Point d'entrée
  └── index.css           # Styles globaux + variables CSS
```

## Design System
**Couleurs:**
- Vert néon: `#00FF9D` (couleur principale)
- Noir: `#0A0A0A` (fond)
- Bleu clair: `#E0F2FE` (sections About/Services)
- Bleu accent: `#3B82F6`
- Navy: `#1E40AF`

**Typographie:** Inter (Google Fonts)

## Dépendances
- React & React DOM 19.1.1
- Vite 7.1.7
- Framer Motion (animations)
- Swiper (carrousel)
- React Icons
- React Compiler

## Développement
```bash
npm run dev      # Serveur de développement (port 5000)
npm run build    # Build de production
npm run preview  # Prévisualisation du build
npm run lint     # Vérification ESLint
```

## Configuration Replit
- **Server Host**: 0.0.0.0:5000
- **Allowed Hosts**: true (pour proxy Replit)
- **HMR Client Port**: 443
- **Deployment**: Autoscale (npm run build + preview)

## Fonctionnalités
✅ Header simplifié (logo + icônes sociales)
✅ Hero "Agence de com Digital Innovation."
✅ Section "Qui sommes nous" avec 4 cartes de services
✅ Workflow avec icônes pour chaque étape
✅ Navigation fixe en bas avec icônes des sections
✅ Animations Framer Motion au scroll
✅ Carrousel Swiper pour portfolio
✅ FAQ avec accordéon animé
✅ Design responsive (mobile/tablette/desktop)
✅ Icônes flottantes animées
✅ Reproduction fidèle du design original

## Historique des Modifications
- **2025-10-14 (Mise à jour)**: Refonte design selon captures d'écran exactes
  - Header simplifié : suppression navigation, conservé logo + icônes sociales
  - Hero modifié : "Agence de com Digital Innovation." au lieu de "Agence web"
  - Section About transformée : 4 cartes de services (Community Manager, Designer, Copywriter, Développeur)
  - Workflow refait : icônes au lieu de numéros, grille 3 colonnes
  - Navigation fixe en bas créée : 6 icônes (Accueil, À propos, Services, Réalisations, Blog, Contact)
  - Footer simplifié : suppression sections Navigation et Services
  
- **2025-10-14 (Initial)**: Reproduction complète du site Digital Innovation
  - Création de tous les composants (Header à Footer)
  - Intégration Framer Motion pour animations
  - Ajout carrousel Swiper pour réalisations
  - Configuration responsive complète
  - Design system avec couleurs exactes (#00FF9D vert néon)
  - FAQ avec accordéon animé
  - Configuration Replit optimale (allowedHosts, HMR)

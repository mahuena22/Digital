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
  │   ├── Header.jsx         # Navigation + réseaux sociaux
  │   ├── Hero.jsx          # Section héro avec icônes animées
  │   ├── About.jsx         # Présentation de l'agence
  │   ├── Services.jsx      # 4 services principaux
  │   ├── Portfolio.jsx     # Réalisations avec carrousel
  │   ├── Workflow.jsx      # Processus en 6 étapes
  │   ├── Testimonials.jsx  # Témoignages clients
  │   ├── FAQ.jsx          # Questions fréquentes
  │   ├── CTA.jsx          # Call-to-action
  │   ├── Blog.jsx         # Articles de blog
  │   └── Footer.jsx       # Pied de page complet
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
✅ 11 sections complètes (Header, Hero, About, Services, etc.)
✅ Animations Framer Motion au scroll
✅ Carrousel Swiper pour portfolio
✅ FAQ avec accordéon animé
✅ Navigation smooth scroll
✅ Design responsive (mobile/tablette/desktop)
✅ Icônes flottantes animées
✅ Reproduction fidèle des couleurs et layout

## Historique des Modifications
- **2025-10-14**: Reproduction complète du site Digital Innovation
  - Création de tous les composants (Header à Footer)
  - Intégration Framer Motion pour animations
  - Ajout carrousel Swiper pour réalisations
  - Configuration responsive complète
  - Design system avec couleurs exactes (#00FF9D vert néon)
  - FAQ avec accordéon animé
  - Configuration Replit optimale (allowedHosts, HMR)

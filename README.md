# Digital Innovation - Reproduction fidèle

Reproduction pixel-perfect du site [digitalinnovation.bj](https://www.digitalinnovation.bj/) en React + Vite.

## 🎨 Caractéristiques

- ✅ Design fidèle : couleurs, typographie, layout identiques
- ✅ Animations fluides avec Framer Motion
- ✅ Carrousel Swiper pour les réalisations
- ✅ Navigation fluide avec ancres
- ✅ Responsive (mobile, tablette, desktop)
- ✅ React Compiler activé pour optimisation

## 🏗️ Structure

```
src/
├── components/
│   ├── Header.jsx         # Navigation + icônes sociales
│   ├── Hero.jsx          # Section héro avec icônes animées
│   ├── About.jsx         # Qui sommes-nous
│   ├── Services.jsx      # 4 services principaux
│   ├── Portfolio.jsx     # Réalisations avec carrousel
│   ├── Workflow.jsx      # Workflow en 6 étapes
│   ├── Testimonials.jsx  # Témoignages clients
│   ├── FAQ.jsx          # FAQ avec accordéon
│   ├── CTA.jsx          # Call-to-action
│   ├── Blog.jsx         # Articles de blog
│   └── Footer.jsx       # Pied de page complet
├── App.jsx              # Assemblage des composants
└── index.css            # Styles globaux + variables

```

## 🎨 Design System

### Couleurs
- **Vert principal** : `#00FF9D` (vert néon)
- **Fond noir** : `#0A0A0A`
- **Bleu clair** : `#E0F2FE` (sections About/Services)
- **Bleu accent** : `#3B82F6`
- **Navy** : `#1E40AF`

### Typographie
- Police : **Inter** (Google Fonts)
- Titres : Bold 700-800
- Corps de texte : Regular 400-500

## 📦 Technologies

- **React 19.1.1** - Framework UI
- **Vite 7.1.7** - Build tool
- **Framer Motion** - Animations
- **Swiper.js** - Carrousel
- **React Icons** - Icônes
- **React Compiler** - Optimisation

## 🚀 Installation

```bash
# Installer les dépendances
npm install

# Lancer le serveur de développement
npm run dev

# Build de production
npm run build

# Prévisualiser le build
npm run preview
```

## ⚙️ Configuration Replit

Le projet est configuré pour fonctionner parfaitement sur Replit :

- Serveur sur `0.0.0.0:5000`
- HMR configuré pour le proxy Replit
- `allowedHosts: true` pour accepter les domaines proxy

## 📝 Sections implémentées

1. **Header** - Navigation fixe avec smooth scroll
2. **Hero** - Titre animé + icônes flottantes
3. **À propos** - Présentation sur fond bleu
4. **Services** - 4 cartes de services
5. **Réalisations** - Carrousel de projets
6. **Workflow** - 6 étapes du processus
7. **Témoignages** - Avis clients
8. **FAQ** - Accordéon de questions
9. **CTA** - Appel à l'action
10. **Blog** - Derniers articles
11. **Footer** - Liens et contact

## 🎬 Animations

- Fade-in au scroll (Framer Motion)
- Icônes flottantes dans Hero
- Transitions smooth sur les boutons
- Accordéon animé pour FAQ
- Effets hover sur tous les éléments interactifs

## 📱 Responsive

- **Mobile** : < 768px
- **Tablette** : 768px - 1024px
- **Desktop** : > 1024px

## 📌 Notes

- Les images sont des placeholders (dégradés bleus) car les images exactes du site original ne sont pas disponibles
- Le contenu textuel est fidèle au site original
- Toutes les animations et interactions sont reproduites

## 🚢 Déploiement

Le projet est configuré pour un déploiement sur Replit avec autoscale :

```bash
# Le déploiement utilisera automatiquement
npm run build  # Build
npm run preview  # Serveur de production
```

## 📄 Licence

Reproduction à des fins éducatives et de démonstration.

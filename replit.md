# Digital - React + Vite Project

## Overview
Application React moderne construite avec Vite 7 et le compilateur React 19. Configuration optimale pour l'environnement Replit avec rechargement automatique et outils de développement.

## Architecture du Projet
- **Framework Frontend**: React 19.1.1
- **Outil de Build**: Vite 7.1.7
- **Compilateur**: React Compiler (babel-plugin-react-compiler)
- **Serveur de Développement**: Vite sur le port 5000
- **Point d'Entrée**: src/main.jsx

## Structure
```
src/
  ├── main.jsx          # Point d'entrée de l'application
  ├── App.jsx           # Composant principal
  ├── App.css           # Styles du composant App
  ├── index.css         # Styles globaux
  └── assets/           # Ressources statiques
public/                 # Fichiers publics
```

## Dépendances Principales
- React & React DOM 19.1.1
- Vite avec plugin React
- ESLint avec plugins React
- React Compiler (expérimental)

## Développement
```bash
npm run dev      # Démarre le serveur de développement
npm run build    # Build de production
npm run preview  # Prévisualisation du build
npm run lint     # Vérification ESLint
```

## Configuration Replit
- **Server Host**: 0.0.0.0:5000
- **Allowed Hosts**: Activé pour proxy Replit
- **HMR Client Port**: 443 (HTTPS)
- **Deployment**: Autoscale configuré

## Historique des Modifications
- **2025-10-14**: Configuration initiale pour Replit
  - Configuration serveur Vite pour compatibilité Replit
  - Ajout de allowedHosts pour proxy Replit
  - Configuration du déploiement automatique
  - Fichiers Replit ajoutés au .gitignore

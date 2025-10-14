# Digital - React + Vite Project

## Overview
This is a React application built with Vite and featuring the React 19 Compiler. The project provides a minimal setup with Hot Module Replacement (HMR) and ESLint rules.

## Project Architecture
- **Frontend Framework**: React 19.1.1
- **Build Tool**: Vite 7.1.7
- **Compiler**: React Compiler (babel-plugin-react-compiler)
- **Dev Server**: Vite dev server on port 5000
- **Entry Point**: src/main.jsx

## Structure
```
src/
  - main.jsx          # Application entry point
  - App.jsx           # Main App component
  - App.css           # App styles
  - index.css         # Global styles
  - assets/           # Static assets
public/               # Public assets
```

## Key Dependencies
- React & React DOM 19.1.1
- Vite with React plugin
- ESLint with React-specific plugins
- React Compiler (experimental)

## Development
- Run `npm run dev` to start the development server
- Server runs on port 5000 (configured for Replit)
- HMR enabled for fast development

## Replit Configuration
- Vite configured to bind to 0.0.0.0:5000
- HMR clientPort set to 443 for Replit proxy
- Preview server also configured for port 5000

## Recent Changes
- 2025-10-14: Initial setup for Replit environment
  - Configured Vite server settings for Replit compatibility
  - Added Replit-specific files to .gitignore
  - Set up development workflow

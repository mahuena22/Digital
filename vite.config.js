import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
    plugins: [
        react(), // Suppression de la config babel
    ],
    server: {
        host: '0.0.0.0',
        port: 5000,
        strictPort: true,
        hmr: {
            protocol: 'wss',
            host: process.env.REPLIT_DEV_DOMAIN || 'localhost',
            clientPort: 443,
        },
    },
    preview: {
        host: '0.0.0.0',
        port: 5000,
        strictPort: true,
    },
})

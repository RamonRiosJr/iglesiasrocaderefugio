import { defineConfig } from 'vite';
import { VitePWA } from 'vite-plugin-pwa';

export default defineConfig({
  plugins: [
    VitePWA({
      registerType: 'autoUpdate',
      includeAssets: ['favicon.svg', 'assets/images/*'],
      manifest: {
        name: 'Iglesia Roca de Refugio',
        short_name: 'Roca',
        description: 'Adorando a Dios, Compartiendo esperanza, Sirviendo a la gente.',
        theme_color: '#0a0a0f',
        background_color: '#0a0a0f',
        icons: [
          {
            src: 'favicon.svg',
            sizes: '192x192',
            type: 'image/svg+xml'
          },
          {
            src: 'favicon.svg',
            sizes: '512x512',
            type: 'image/svg+xml'
          }
        ]
      }
    })
  ],
  build: {
    rollupOptions: {
      input: {
        main: 'index.html',
        privacy: 'privacy.html',
        terms: 'terms.html'
      }
    }
  }
});

# Iglesia Roca de Refugio

A modern, high-performance Progressive Web App (PWA) built for Iglesia Roca de Refugio in Montrose, CO.

## 🚀 Tech Stack
- **Framework**: Vite + Vanilla JS/HTML
- **Styling**: Modern Vanilla CSS with Glassmorphic design principles
- **SEO**: Enterprise-grade JSON-LD Church Schema, OpenGraph, and Twitter Cards
- **Performance**: IntersectionObserver for dynamic scroll animations, zero Cumulative Layout Shift (CLS) image configurations

## ✨ Features
- **PWA Ready**: Configured with `vite-plugin-pwa`. Installable on iOS and Android devices for a native app feel.
- **Scroll Animations**: Elements dynamically reveal themselves via a custom JavaScript IntersectionObserver to keep the DOM light.
- **Parallax Background**: Smooth background depth locking on the Hero section.
- **CI/CD Deployment**: Fully automated via GitHub Actions to deploy to GitHub Pages on every push to `main`.

## 💻 Local Development

1. Clone the repository:
   ```bash
   git clone https://github.com/RamonRiosJr/iglesiasrocaderefugio.git
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the development server:
   ```bash
   npm run dev
   ```
4. Build for production:
   ```bash
   npm run build
   ```

## 🌐 Deployment
This project is configured to automatically deploy to GitHub Pages using the included `.github/workflows/deploy.yml`. Ensure your Cloudflare DNS is set to **Full (strict)** SSL encryption when mapping a custom domain.

---
*Arquitectura, Diseño y Desarrollo por [RamonRios.Net](https://ramonrios.net)*

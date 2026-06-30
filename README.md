<div align="center">
  <h1 align="center">Iglesia Roca de Refugio</h1>
  <p align="center">
    <strong>A high-performance, edge-ready Progressive Web App (PWA) engineered for maximum SEO dominance and unparalleled user experience.</strong>
  </p>
</div>

<br />

## 🚀 The Architecture
This is not a template. This is a ground-up, zero-bloat web application designed to achieve 100% Core Web Vitals scores. Built on **Vite + Vanilla JS/HTML**, the architecture entirely bypasses heavy frontend frameworks to deliver raw, unadulterated speed directly to the browser.

### The Stack:
- **Build Engine**: Vite (Lightning-fast HMR and optimized production bundling).
- **UI/UX**: Custom Glassmorphism design system using raw CSS variables. No Tailwind. No Bootstrap. Complete foundational control.
- **Typography**: Google Fonts (`Outfit` & `Inter`) preconnected for instantaneous rendering.

---

## ⚡ Elite Performance & SEO
We aggressively optimized every layer of the DOM to ensure maximum visibility and instant load times.

- **Zero Cumulative Layout Shift (CLS)**: Every image is mathematically bounded with strict `aspect-ratio` and `width/height` attributes, coupled with native `loading="lazy"` injection. 
- **Dynamic Scroll Injection**: Instead of heavy animation libraries, we deployed a custom JavaScript `IntersectionObserver` that tracks the user's viewport and dynamically reveals elements. This keeps the initial paint ultra-light.
- **Enterprise JSON-LD**: Injected Google's exact `LocalBusiness` / `Church` Schema directly into the `<head>`, defining precise geo-coordinates and service hours (Sundays & Wednesdays) to dominate local Montrose SEO.
- **OpenGraph & Twitter Ready**: Fully configured social sharing cards.

---

## 📱 Progressive Web App (PWA)
This site transcends the browser. Configured with a rigorous `manifest.webmanifest` and an auto-updating Service Worker, the application is fully installable on iOS and Android devices, behaving indistinguishably from a native application.

---

## 💻 Developer Operations

```bash
# 1. Clone the repository
git clone https://github.com/RamonRiosJr/iglesiasrocaderefugio.git

# 2. Install dependencies
npm install

# 3. Spin up the Vite dev server
npm run dev

# 4. Compile for Production Edge Delivery
npm run build
```

---

## 🌐 Infrastructure & CI/CD
This repository is armed with a `.github/workflows/deploy.yml` pipeline. Any push to the `main` branch automatically triggers a GitHub Action that compiles the raw Vite assets and forcefully deploys them to GitHub Pages.

**SSL/TLS Security:** Proxied through Cloudflare with strict end-to-end encryption. 

---
<div align="center">
  <p><i>Arquitectura, Diseño y Automatización por <a href="https://ramonrios.net">RamonRios.Net</a></i></p>
</div>

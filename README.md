# Jithin Babu K M — Portfolio

A modern, futuristic 3D portfolio website built with Next.js, Three.js, Framer Motion, and Tailwind CSS.

## Features

- 🌌 Interactive 3D particle background with Three.js / React Three Fiber
- ✨ Framer Motion animations with scroll triggers
- 🎨 Glassmorphism UI with neon cyan/purple gradients
- 📱 Fully responsive (desktop, tablet, mobile)
- ⚡ Optimized performance and SEO
- 🏥 Healthcare-tech themed design

## Tech Stack

- **Framework:** Next.js 14 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **3D:** Three.js + @react-three/fiber + @react-three/drei
- **Animation:** Framer Motion + GSAP
- **Icons:** Lucide React

## Getting Started

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Export static files for GitHub Pages
npm run export
```

## Deploy to GitHub Pages

1. Create a GitHub repository named `jithinbabukmofficial.github.io`
2. Push this code to the repository
3. Go to **Settings → Pages** in your repo
4. Select **GitHub Actions** as the source
5. Use the following workflow (`.github/workflows/deploy.yml`):

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [main]

permissions:
  contents: read
  pages: write
  id-token: write

concurrency:
  group: "pages"
  cancel-in-progress: false

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with:
          node-version: "20"
          cache: npm
      - run: npm ci
      - run: npm run build
      - uses: actions/upload-pages-artifact@v3
        with:
          path: ./dist

  deploy:
    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }}
    runs-on: ubuntu-latest
    needs: build
    steps:
      - uses: actions/deploy-pages@v4
        id: deployment
```

6. Your site will be live at `https://jithinbabukmofficial.github.io`

## Project Structure

```
app/
├── components/       # Reusable components
│   ├── GlowButton.tsx
│   ├── LoadingScreen.tsx
│   ├── Navbar.tsx
│   ├── ParticleBackground.tsx
│   ├── SectionHeader.tsx
│   └── TypingEffect.tsx
├── sections/         # Page sections
│   ├── Hero.tsx
│   ├── About.tsx
│   ├── Skills.tsx
│   ├── Experience.tsx
│   ├── Projects.tsx
│   ├── Education.tsx
│   ├── Contact.tsx
│   └── Footer.tsx
├── globals.css       # Global styles
├── layout.tsx        # Root layout
└── page.tsx          # Home page
public/
└── resume.pdf        # Your resume (replace this)
```

## Customization

- Replace `public/resume.pdf` with your actual resume
- Update social links in `app/sections/Footer.tsx`
- Update contact info in `app/sections/Contact.tsx`
- Modify colors in `tailwind.config.ts`

## License

MIT — Jithin Babu K M
<div align="center">
  <img src="public/dot-logo.svg" alt="dot studio" width="120" />
  
  # dot studio
  
  **Professional Web Development Studio**
  
  A modern, bilingual (ES/EN) landing page built with Astro, Tailwind CSS v4, and crafted with attention to detail.

[![Astro](https://img.shields.io/badge/Astro-6.0-BC52EE?style=flat-square&logo=astro&logoColor=white)](https://astro.build)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-4.0-38B2AC?style=flat-square&logo=tailwind-css&logoColor=white)](https://tailwindcss.com)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0-3178C6?style=flat-square&logo=typescript&logoColor=white)](https://typescriptlang.org)

[Live Demo](#) · [Features](#-features) · [Tech Stack](#-tech-stack) · [Getting Started](#-getting-started)

</div>

---

## ✨ Features

- 🌐 **Bilingual Support** — Full Spanish and English translations with seamless language switching
- 🎨 **Modern Design** — Clean, minimalist aesthetic with custom color palette (acid green & lavender)
- 📱 **Fully Responsive** — Optimized for all devices from mobile to desktop
- ⚡ **Performance First** — Built with Astro for blazing fast load times and zero JS by default
- 🎭 **Smooth Animations** — Scroll-triggered animations and micro-interactions throughout
- 📝 **Contact Form** — Integrated with Web3Forms for easy email notifications
- 🔒 **Legal Pages** — Privacy Policy and Terms & Conditions modals included
- 🎯 **SEO Optimized** — Meta tags, Open Graph, and Twitter Cards configured

## 📸 Sections

| Section          | Description                                   |
| ---------------- | --------------------------------------------- |
| **Hero**         | Animated gradient blobs with compelling CTAs  |
| **Stats**        | Key metrics (projects, clients, experience)   |
| **Testimonials** | Client reviews with 5-star ratings            |
| **Services**     | Landing pages, websites, e-commerce offerings |
| **About**        | Company story with tech stack dropdown        |
| **Features**     | Why choose us section with benefits           |
| **Projects**     | Featured work with expandable gallery         |
| **CTA**          | Dark section with gradient background         |
| **Contact**      | Form with Web3Forms integration               |
| **Footer**       | Links, social icons, legal modals             |

## 🛠 Tech Stack

### Core

- **[Astro](https://astro.build)** — Static site generator with island architecture
- **[Tailwind CSS v4](https://tailwindcss.com)** — Utility-first CSS framework
- **[TypeScript](https://typescriptlang.org)** — Type-safe JavaScript

### Libraries

- **[Lucide Icons](https://lucide.dev)** — Beautiful, consistent icon set
- **[Web3Forms](https://web3forms.com)** — Serverless form handling

### Design

- **Inter** — Primary typeface from Google Fonts
- **Custom Palette** — Acid green (#B7FF73) and Lavender (#B18CF5)

## 🚀 Getting Started

### Prerequisites

- Node.js 18+
- pnpm (recommended)

### Installation

```bash
# Clone the repository
git clone https://github.com/yourusername/dotsy.git

# Navigate to project
cd dotsy

# Install dependencies
pnpm install

# Start development server
pnpm dev
```

### Available Scripts

| Command        | Description                                  |
| -------------- | -------------------------------------------- |
| `pnpm dev`     | Start development server at `localhost:4321` |
| `pnpm build`   | Build production bundle to `./dist`          |
| `pnpm preview` | Preview production build locally             |

## 📁 Project Structure

```
dotsy/
├── public/
│   ├── projects/        # Project screenshots
│   ├── student/         # Education logos
│   ├── work/            # Client testimonial images
│   └── dot-logo.svg     # Brand assets
├── src/
│   ├── components/      # Astro components
│   │   ├── Header.astro
│   │   ├── Hero.astro
│   │   ├── Stats.astro
│   │   ├── Testimonials.astro
│   │   ├── Services.astro
│   │   ├── About.astro
│   │   ├── Features.astro
│   │   ├── Projects.astro
│   │   ├── CallToAction.astro
│   │   ├── Contact.astro
│   │   ├── Footer.astro
│   │   ├── PrivacyModal.astro
│   │   └── TermsModal.astro
│   ├── i18n/
│   │   └── translations.ts  # ES/EN translations
│   ├── layouts/
│   │   └── Layout.astro     # Base layout with SEO
│   ├── pages/
│   │   ├── index.astro      # Spanish version (/)
│   │   └── en/
│   │       └── index.astro  # English version (/en)
│   └── styles/
│       └── globals.css      # Global styles & theme
├── astro.config.mjs
├── package.json
└── README.md
```

## 🎨 Color Palette

| Color        | Hex       | Usage                     |
| ------------ | --------- | ------------------------- |
| Acid Green   | `#B7FF73` | Primary accent, CTAs      |
| Green Light  | `#F4FFE6` | Backgrounds, hover states |
| Lavender     | `#B18CF5` | Secondary accent          |
| Purple Light | `#F7F1FF` | Tags, highlights          |
| Shadow       | `#7E7E7E` | Body text                 |

## 🌐 Internationalization

The site supports two languages with automatic content switching:

- **Spanish** — Default at `/`
- **English** — Available at `/en`

Translations are managed in `src/i18n/translations.ts`.

## 📧 Contact Form Setup

The contact form uses [Web3Forms](https://web3forms.com) for serverless email delivery.

1. Get your access key at [web3forms.com](https://web3forms.com)
2. Replace the `access_key` value in `src/components/Contact.astro`

## 📄 License

This project is private and proprietary to dot studio.

---

<div align="center">
  <p>
    <sub>Built with ❤️ by <strong>dot studio</strong></sub>
  </p>
</div>

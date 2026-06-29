# Vishwas S - Premium Personal Portfolio

A world-class, interactive, and highly optimized personal portfolio website built with modern web technologies. This portfolio showcases projects, skills, education, and experience with a dark-mode-first premium design.

![Screenshot Placeholder](https://via.placeholder.com/1200x600?text=Portfolio+Screenshot)

## 🚀 Project Overview

Designed to make a lasting impression within seconds, this portfolio utilizes smooth animations, glassmorphism UI, scroll-reveal effects, and an interactive custom cursor. It is fully responsive, ATS-friendly, and optimized for perfect Lighthouse scores.

## 🛠️ Tech Stack

- **Framework**: [Next.js (App Router)](https://nextjs.org/)
- **Library**: [React 19](https://react.dev/)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/)
- **Animations**: [Framer Motion](https://www.framer.com/motion/) & GSAP
- **Icons**: [Lucide React](https://lucide.dev/)
- **Language**: [TypeScript](https://www.typescriptlang.org/)

## 📂 Folder Structure

```
PORTFOLIO/
├── app/
│   ├── components/
│   │   ├── global/         # Navbar, Footer, CustomCursor
│   │   ├── sections/       # Hero, About, Projects, Skills, etc.
│   │   └── ui/             # Reusable components (MagneticButton, GlassCard)
│   ├── lib/
│   │   └── utils.ts        # Helper functions (cn for Tailwind classes)
│   ├── globals.css         # Global styles, Tailwind v4 theme, animations
│   ├── layout.tsx          # Root layout with fonts, SEO metadata
│   └── page.tsx            # Main assembly of all sections
├── public/                 # Static assets (resume, favicons)
├── package.json            # Project dependencies and scripts
└── README.md               # Project documentation
```

## ⚙️ Installation & Setup

1. **Clone the repository** (if hosted on GitHub)
   ```bash
   git clone https://github.com/vishwass-02/portfolio.git
   cd portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## 🎨 Customization Guide

- **Theme Colors**: Modify the CSS variables inside `@theme inline` in `app/globals.css` to change the accent colors.
- **Content**: Update the data arrays in `app/components/sections/` (e.g., `Projects.tsx`, `Skills.tsx`) to change the displayed information.
- **Resume**: Replace `/public/resume.pdf` with your actual resume file.
- **Profile Image**: Update the image `src` in `app/components/sections/Hero.tsx`.

## 🚢 Deployment

This project is optimized for deployment on Vercel.

1. Push your code to a GitHub repository.
2. Log in to [Vercel](https://vercel.com) and click "Add New Project".
3. Import your GitHub repository.
4. Keep the default settings (Next.js preset) and click "Deploy".
5. Your world-class portfolio is now live!

---

*Made with ❤️ by Vishwas S*

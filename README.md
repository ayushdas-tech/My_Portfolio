# Ayush Das — Data Analyst Portfolio

> **Live Production Build Ready**: A modern, high-converting personal portfolio engineered specifically for **Data Analyst & Business Intelligence** roles, built with React, Vite, Tailwind CSS, Framer Motion, and Recharts.

---

## 🎯 About The Portfolio

This portfolio is custom-designed with an **"Analyst meets Designer"** aesthetic:
- **Dark Mode by Default**: Deep obsidian backgrounds (`#06090e`, `#0a0e17`), slate card surfaces, and electric cyan/sky blue accents.
- **Interactive Data Dashboards**: Live telemetry in the Hero section and rich analytical charts inside project case studies powered by **Recharts**.
- **Monospace KPI Indicators**: Clear tabular typography for financial metrics, conversion rates, and volume growth.
- **Recruiter Ready**: Optimized visual hierarchy, fast load speeds, verified academic credentials, and clear contact channels.

---

## 🚀 Tech Stack

| Category | Technology |
| :--- | :--- |
| **Framework** | [React 18](https://react.dev/) + [Vite](https://vitejs.dev/) |
| **Styling** | [Tailwind CSS](https://tailwindcss.com/) (Custom Design Tokens) |
| **Animations** | [Framer Motion](https://www.framer.com/motion/) |
| **Data Visualization** | [Recharts](https://recharts.org/) |
| **Icons** | [Lucide React](https://lucide.dev/) |
| **Hosting & CI/CD** | [Netlify](https://www.netlify.com/) (`netlify.toml` included) |

---

## 📁 Project Architecture

```
My_Portfolio/
├── public/
│   ├── favicon.svg                  # Custom AD monogram with analytics node
│   ├── resume.pdf                   # Downloadable resume document
│   └── ...
├── src/
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Navbar.jsx           # Sticky glassmorphism header & mobile drawer
│   │   │   └── Footer.jsx           # Clean product footer & back-to-top action
│   │   ├── ui/
│   │   │   ├── Badge.jsx            # Dynamic tag & indicator chips
│   │   │   ├── MetricCard.jsx       # KPI card with trend arrows & percentage change
│   │   │   └── SectionHeading.jsx   # Monospace index section titles
│   │   └── sections/
│   │       ├── Hero.jsx             # Headline, CTAs, stack chips, social links
│   │       ├── HeroDashboard.jsx    # Interactive mini analytics dashboard (7D/30D/90D)
│   │       ├── About.jsx            # Recruiter bio & academic timeline
│   │       ├── Skills.jsx           # Categorised competency matrix with filter chips
│   │       ├── Projects.jsx         # Case study centerpiece with Recharts models
│   │       ├── Certifications.jsx   # Coder Army & CodeWithHarry badges
│   │       └── Contact.jsx          # Serverless contact form & 1-click copy cards
│   ├── context/
│   │   └── ThemeContext.jsx         # Dark / Light theme provider
│   ├── data/
│   │   ├── portfolioData.js         # Core copy, education, skills, projects, certs
│   │   └── mockAnalyticsData.js     # Datasets for interactive charts & KPI metrics
│   ├── App.jsx                      # App root
│   ├── index.css                    # Design system, grid textures, glassmorphism
│   └── main.jsx                     # Vite React entry point
├── netlify.toml                     # Netlify build configuration & SPA redirects
├── tailwind.config.js               # Theme configuration
├── vite.config.js                   # Vite bundler config
├── package.json
└── README.md
```

---

## 🛠️ Getting Started Locally

### 1. Install Dependencies
```bash
npm install
```

### 2. Run Development Server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

### 3. Build for Production
```bash
npm run build
```
The optimized static build will be generated in the `dist/` directory.

### 4. Preview Static Build
```bash
npm run preview
```

---

## 🌐 Netlify Deployment Guide

This project includes a pre-configured `netlify.toml` with SPA redirects (`/* -> /index.html 200`) and security headers.

### Option A: Deploy via GitHub (Recommended)
1. Push this repository to your GitHub account:
   ```bash
   git init
   git add .
   git commit -m "feat: initial portfolio build"
   git remote add origin https://github.com/ayushdas-tech/<repo-name>.git
   git push -u origin main
   ```
2. Log into **[Netlify](https://app.netlify.com)**.
3. Click **Add new site** > **Import an existing project** > **GitHub**.
4. Select your portfolio repository. Netlify will auto-detect the build command (`npm run build`) and publish directory (`dist`).
5. Click **Deploy Site**.

### Option B: Drag and Drop
1. Run `npm run build` locally.
2. Drag the `dist` folder directly onto **[Netlify Drop](https://app.netlify.com/drop)**.

---

## ✏️ Customization & Updating Links

All data is decoupled into `src/data/portfolioData.js`:

1. **Adding your LinkedIn link**:
   Open `src/data/portfolioData.js` and update `socialLinks.linkedin`.
2. **Updating Retail Sales Health Check repository & demo**:
   Open `src/data/portfolioData.js` and replace `GITHUB_LINK_TO_BE_ADDED` and `LIVE_DEMO_LINK_TO_BE_ADDED` under `projects[1]`.
3. **Updating Resume**:
   Replace `public/resume.pdf` with your updated resume file.
4. **Connecting Live Formspree Endpoint**:
   In `src/components/sections/Contact.jsx`, add your Formspree endpoint in `handleSubmit` if you'd like emails sent directly to your inbox.

---

## 📄 License
MIT © Ayush Das

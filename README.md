# Overtake — Performance Marketing Studio (React Rebuild)

A complete, responsive rebuild of the Framer website at **[https://fierce-embeds-933570.framer.app/](https://fierce-embeds-933570.framer.app/)** built with **React**, **Vite**, **Tailwind CSS**, and **React Router**.

This project accurately preserves:
- **Layouts & Spacing**: Exact sections, grid structures, aspect ratios, responsive container widths, and padding.
- **Typography & Font Hierarchies**: Switzer, Inter, and Geist loaded with exact weights, line heights, and letter spacing.
- **Color Palette & Visual Tokens**: 
  - Background: Warm parchment cream (`#fffdf5`)
  - Primary Dark: Rich black (`#0b0b0c`)
  - Lime Accent: Vibrant green highlight (`#9efc65`)
  - Muted Tones: `#6a6e6e`, `#8b8b8b`, `#b7bcbc`, `#f0f0f0`
- **Original High-Resolution Assets**: All SVG brand icons, client logos, hero images, case study visuals, avatars, and star ratings preserved.
- **Interactions & States**:
  - Transparent & blurred sticky navbar on scroll
  - Mobile responsive drawer navigation menu
  - "Pages" dropdown navigation
  - Infinite auto-scrolling client marquee ticker with gradient fade masks
  - Interactive 4-Discipline system switcher (01 Strategy, 02 Paid Media, 03 Creative, 04 Analytics) with dynamic preview image updates
  - 3-Step weekly operating rhythm carousel (01 Diagnose, 02 Uncover, 03 Compound)
  - Side-by-side agency comparison matrix ("Same budget. Different math.")
  - Interactive multi-field audit inquiry form with budget selector, growth tag toggles, and instant confirmation feedback
  - Expandable FAQ accordions with smooth open/close animations
  - Category filters on Case Studies and Blog pages
  - Dynamic detail routes with breadcrumbs and related posts/studies

---

## 🚀 Getting Started

### 1. Prerequisites
- **Node.js**: v18 or higher (tested on Node v24)
- **npm** or **pnpm** / **yarn**

### 2. Installation
Dependencies are already installed. If needed, run:
```bash
npm install
```

### 3. Run Development Server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

### 4. Build for Production
```bash
npm run build
```
Creates an optimized static bundle in the `dist/` directory ready to deploy to Vercel, Netlify, Cloudflare Pages, or AWS S3.

### 5. Preview Production Build
```bash
npm run preview
```

---

## 📂 Project Architecture

```
startup/
├── index.html                 # HTML shell with Google Fonts & Fontshare
├── package.json               # Dependencies & scripts
├── tailwind.config.js         # Custom design tokens, colors & breakpoints
├── vite.config.js             # Vite configuration
├── src/
│   ├── main.jsx               # React DOM entry point
│   ├── App.jsx                # Router, routes & main layout wrapper
│   │
│   ├── data/                  # Decoupled content for effortless editing
│   │   ├── siteConfig.js      # Brand info, social URLs, nav & footer links
│   │   ├── caseStudies.js     # Case study items, metrics, challenges, outcomes
│   │   ├── blogPosts.js       # Blog articles, categories, read times, content
│   │   ├── disciplines.js     # 4 system growth disciplines (tabs & images)
│   │   ├── processSteps.js    # 3 weekly operating rhythm steps
│   │   ├── testimonials.js    # Customer reviews & featured founder quote
│   │   ├── agencyComparison.js# "Same budget. Different math." comparison points
│   │   ├── stats.js           # Quantifiable metrics & proof points
│   │   ├── team.js            # Team members, promise & agency values
│   │   ├── faqs.js            # General and contact FAQs
│   │   ├── clientLogos.js     # Marquee ticker SVG client logos
│   │   └── legalPages.js      # Privacy Policy full text & sections
│   │
│   ├── components/            # Reusable UI components
│   │   ├── Navbar.jsx         # Sticky blur header with mobile drawer & dropdown
│   │   ├── Footer.jsx         # Complete dark footer with newsletter & links
│   │   ├── Button.jsx         # Primary pill button, secondary outline & arrow icon
│   │   ├── Badge.jsx          # Tag pill with optional pulsing dot
│   │   ├── ClientMarquee.jsx  # Continuous infinite logo ticker
│   │   ├── CaseStudyCard.jsx  # Case study preview card with metric badge
│   │   ├── BlogCard.jsx       # Blog post card with category pill & read time
│   │   ├── Accordion.jsx      # Animated collapsible FAQ item
│   │   ├── DisciplinesTabs.jsx# Interactive 4-step discipline switcher
│   │   ├── OperatingRhythm.jsx# 3-step progress slider
│   │   ├── ComparisonTable.jsx# Typical Agency vs Overtake comparison
│   │   ├── StatsGrid.jsx      # 3-card metric showcase
│   │   ├── ContactForm.jsx    # Form with budget & goal selectors
│   │   ├── CTABanner.jsx      # Reusable bottom CTA banner
│   │   └── ScrollToTop.jsx    # Automatic scroll reset on route change
│   │
│   ├── pages/                 # Route pages
│   │   ├── Home.jsx           # Main landing page
│   │   ├── About.jsx          # Our story, values, team & stats
│   │   ├── CaseStudies.jsx    # Filterable case study archive
│   │   ├── CaseStudyDetail.jsx# Full case study case breakdown
│   │   ├── Blog.jsx           # Filterable insights archive
│   │   ├── BlogDetail.jsx     # Full markdown/article layout
│   │   ├── Contact.jsx        # Audit booking page with FAQs & form
│   │   ├── Faqs.jsx           # All 8 common questions answered
│   │   ├── PrivacyPolicy.jsx  # 9-section privacy terms
│   │   └── NotFound.jsx       # 404 page with return link
│   │
│   └── styles/
│       └── index.css          # Tailwind base, components & custom ticker animation
```

---

## ✏️ How to Edit Content

All text, copy, and images are decoupled from UI components and stored in clean, typed JavaScript objects in `src/data/`:

- **Change Navigation or Footer Links**: Edit `src/data/siteConfig.js`.
- **Add or Modify Case Studies**: Edit `src/data/caseStudies.js`. New entries automatically populate the `/case-study` archive and create their own `/case-study/:slug` detail page.
- **Add or Modify Blog Posts**: Edit `src/data/blogPosts.js`. New articles immediately show up in the `/blog` archive and create `/blog/:slug` pages.
- **Update Company Stats & Metrics**: Edit `src/data/stats.js`.
- **Update FAQs**: Edit `src/data/faqs.js`.
- **Update Team Members & Values**: Edit `src/data/team.js`.

---

## 📱 Responsive Breakpoints

Designed to match Framer's exact responsive variant logic:
- **Mobile**: `< 810px` (Clean vertical flow, hamburger menu, single-column cards, full-width touch targets)
- **Tablet**: `810px – 1199px` (2-column layouts, refined padding, responsive type scales)
- **Desktop**: `>= 1200px` (Full 3-column grids, floating stat badges, spacious typography)


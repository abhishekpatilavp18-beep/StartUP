// Project write-ups shown on the home page and /case-study.
// Keep every claim factual: describe what was built, not invented results.
export const projectCategories = ['All', 'Web apps', 'Websites', 'Tools', 'Portfolios'];

export const caseStudies = [
  {
    slug: "fs0cie1y-ctf",
    title: "fs0cie1y CTF Platform",
    client: "fs0cie1y",
    industry: "Cybersecurity & competitions",
    category: "Web apps",
    tagline: "Built a full capture-the-flag platform where teams register, solve challenges, and watch a live scoreboard update in real time.",
    services: "Full-stack web app, Real-time scoring",
    serviceTags: ["Full-Stack Web App", "Cybersecurity"],
    timeline: "Live",
    image: "/images/projects/fs0cie1y-ctf.jpg",
    detailImage: "/images/projects/fs0cie1y-ctf.jpg",
    imageFit: "contain",
    liveUrl: "https://ctfbyclaude.onrender.com/",
    primaryMetric: {
      value: "Live",
      label: "Real-time scoreboard",
    },
    metrics: [
      { value: "10", label: "Challenge categories" },
      { value: "Live", label: "Real-time scoreboard" },
      { value: "2", label: "Player & organizer modes" },
    ],
    challenge: [
      "Running a CTF usually means stitching together a scoreboard, a challenge host, and a spreadsheet of teams. Players and organizers needed one place to do all of it.",
    ],
    whatWeDid: [
      {
        title: "Player experience.",
        text: "Challenge board grouped by category, per-team instances with countdowns, paid hints, practice sets, and certificates with a public verification ID.",
      },
      {
        title: "Organizer tools.",
        text: "Guided event setup, static, regex and per-team dynamic flags, dynamic scoring with first-blood bonus, score freeze, and CSV exports.",
      },
    ],
    summaryText:
      "A complete competition platform covering web, crypto, reverse engineering, pwn, forensics, OSINT and more, with a live scoreboard and a community hub for finding teammates.",
    outcome:
      "The platform is live and hosting its first competitions, with registration open to players and organizers.",
  },
  {
    slug: "vedant-portfolio",
    title: "Vedant 3D Retro Portfolio",
    client: "Vedant S. Tattimani",
    industry: "Creative web design & 3D WebGL",
    category: "Portfolios",
    tagline: "Crafted a nostalgic 90s Macintosh desktop experience modeled in interactive 3D with functional mini-apps.",
    services: "3D WebGL, Retro OS simulation",
    serviceTags: ["2nd Year Minor Project", "3D Web Experience"],
    timeline: "Completed",
    image: "/images/projects/vedant-portfolio.jpg",
    detailImage: "/images/projects/vedant-portfolio.jpg",
    imageFit: "cover",
    liveUrl: "https://portfolie-2.vedantst6.workers.dev/",
    primaryMetric: {
      value: "3D",
      label: "Interactive desk scene in the browser",
    },
    metrics: [
      { value: "3D", label: "Interactive desk scene" },
      { value: "WebGL", label: "Rendered in the browser" },
      { value: "Retro OS", label: "Clickable mini-apps on the CRT" },
    ],
    challenge: [
      "Developer portfolios tend to look the same. The goal was a fully interactive 3D vintage workstation that people remember.",
    ],
    whatWeDid: [
      {
        title: "3D desk modeling.",
        text: "Rendered a vintage Macintosh monitor, mouse, keyboard, and figurines.",
      },
      {
        title: "Interactive OS inside the CRT.",
        text: "Made the computer screen clickable with working retro apps.",
      },
    ],
    summaryText:
      "Nostalgic 90s Macintosh desktop experience modeled in a 3D interactive space with audio players and custom widgets.",
    outcome:
      "A playful portfolio that shows off 3D web graphics and creative storytelling.",
  },
  {
    slug: "screen-tester",
    title: "Screen Tester",
    client: "Web Utility",
    industry: "Display hardware diagnostics",
    category: "Tools",
    tagline: "Developed an online display diagnostics suite to inspect dead pixels, refresh rates, contrast, and ghosting.",
    services: "Display diagnostics, Canvas rendering",
    serviceTags: ["3rd Year Minor Project", "Hardware Diagnostics"],
    timeline: "Completed",
    image: "/images/projects/screen-tester.jpg",
    detailImage: "/images/projects/screen-tester.jpg",
    imageFit: "contain",
    liveUrl: "https://screen-tester.com/en",
    primaryMetric: {
      value: "20+",
      label: "Screen tests in one place",
    },
    metrics: [
      { value: "20+", label: "Screen tests" },
      { value: "High Hz", label: "Refresh rate detection" },
      { value: "0", label: "Installs needed" },
    ],
    challenge: [
      "Checking a new monitor for dead pixels, color uniformity, and backlight bleed usually means downloading desktop software.",
    ],
    whatWeDid: [
      {
        title: "Device detection.",
        text: "Identifies display capabilities and suggests the right tests.",
      },
      {
        title: "Canvas test patterns.",
        text: "High-contrast patterns built for spotting dead and stuck pixels.",
      },
    ],
    summaryText:
      "A browser-based tool to test screens for dead pixels, refresh rate, contrast, and ghosting with nothing to install.",
    outcome:
      "A free online screen tester that helps buyers check monitor quality before and after purchase.",
  },
  {
    slug: "keycheck",
    title: "Keycheck",
    client: "Web Utility",
    industry: "Hardware diagnostics & testing",
    category: "Tools",
    tagline: "Built a browser-based multi-key tester that spots stuck or unresponsive keys instantly.",
    services: "Event listener architecture, Real-time DOM testing",
    serviceTags: ["3rd Year Minor Project", "Interactive Utility"],
    timeline: "Completed",
    image: "/images/projects/keyboard-tester.png",
    detailImage: "/images/projects/keyboard-tester.png",
    imageFit: "contain",
    liveUrl: "https://keyboardtester1.com/",
    primaryMetric: {
      value: "Real-time",
      label: "Key press detection",
    },
    metrics: [
      { value: "Real-time", label: "Key press detection" },
      { value: "0", label: "Installs needed" },
      { value: "3", label: "Layouts: 60%, TKL, full" },
    ],
    challenge: [
      "Gamers and keyboard enthusiasts wanted a quick way to test key rollover and chatter without installing untrusted software.",
    ],
    whatWeDid: [
      {
        title: "Raw event capture.",
        text: "Captured keydown and keyup events directly in the browser.",
      },
      {
        title: "Keyboard visualizer.",
        text: "Interactive 60%, TKL, and full-size layouts that light up as you type.",
      },
    ],
    summaryText:
      "A multi-key keyboard tester that shows stuck or unresponsive keys in real time, right in the browser.",
    outcome:
      "A fast, free keyboard tester anyone can open to diagnose hardware issues.",
  },
  {
    slug: "abhishek-portfolio",
    title: "Abhishek Portfolio",
    client: "Abhishek Patil",
    industry: "Full-Stack Developer",
    category: "Portfolios",
    tagline: "Engineered a personal portfolio with interactive project showcases and a fully responsive layout.",
    services: "Full-stack development, UI/UX",
    serviceTags: ["2nd Year Minor Project", "Full-Stack Portfolio"],
    timeline: "Completed",
    image: "/images/projects/abhishek-portfolio.jpg",
    detailImage: "/images/projects/abhishek-portfolio.jpg",
    imageFit: "cover",
    liveUrl: "https://abhishekvp.me/",
    primaryMetric: {
      value: "Custom",
      label: "Built from scratch, no template",
    },
    metrics: [
      { value: "Custom", label: "No template" },
      { value: "Responsive", label: "Phone to desktop" },
      { value: "Live", label: "Interactive project previews" },
    ],
    challenge: [
      "Needed a personal site to present full-stack projects and skills without falling back on a generic template.",
      "It had to feel smooth and load fast on every screen size.",
    ],
    whatWeDid: [
      {
        title: "Clean architecture.",
        text: "Responsive components with an optimized bundle.",
      },
      {
        title: "Interactive showcases.",
        text: "Project spotlights with live preview interactions.",
      },
      {
        title: "Performance.",
        text: "Light asset payloads for quick first load.",
      },
    ],
    summaryText:
      "A developer portfolio built from the ground up around modern frontend practice and clean architecture.",
    outcome:
      "A personal site that presents projects and skills clearly to recruiters and collaborators.",
  },
  {
    slug: "ticket-total",
    title: "Ticket.Total",
    client: "Entertainment & Ticketing",
    industry: "Cinema booking platform",
    category: "Web apps",
    tagline: "Engineered a cinema reservation platform with session schedules, seat maps, and a fast checkout.",
    services: "Full-stack web application, Seat mapping",
    serviceTags: ["2nd Year Minor Project", "Entertainment Platform"],
    timeline: "Completed",
    image: "/images/projects/movie-booking.jpg",
    detailImage: "/images/projects/movie-booking.jpg",
    imageFit: "contain",
    liveUrl: "https://movie-booking-platform1.pages.dev/",
    primaryMetric: {
      value: "Seat map",
      label: "Pick your exact seat",
    },
    metrics: [
      { value: "Seat map", label: "Interactive seat picker" },
      { value: "Formats", label: "IMAX, 4DX, Dolby filters" },
      { value: "Short", label: "Streamlined checkout flow" },
    ],
    challenge: [
      "Cinema booking flows are often cluttered with ads and long multi-step forms.",
    ],
    whatWeDid: [
      {
        title: "Theater seat grid.",
        text: "Interactive seat picker showing availability as you choose.",
      },
      {
        title: "Movie scheduling.",
        text: "Showtimes organized by format (IMAX, 4DX, Dolby Atmos) with instant filtering.",
      },
    ],
    summaryText:
      "A movie reservation platform with session schedules, seat selection, and a short checkout flow.",
    outcome:
      "A clean, cinema-first booking experience without the ad clutter.",
  },
  {
    slug: "k-tech-solar",
    title: "K-Tech Solar",
    client: "K-Tech Energy",
    industry: "Renewable energy & solar engineering",
    category: "Websites",
    tagline: "Designed a smart solar company website that explains rooftop solar simply and makes it easy to request a quote.",
    services: "Company website, Quote requests, UI/UX",
    serviceTags: ["3rd Year Minor Project", "CleanTech Website"],
    timeline: "Completed",
    image: "/images/projects/k-tech-solar.jpg",
    detailImage: "/images/projects/k-tech-solar.jpg",
    imageFit: "contain",
    liveUrl: "https://ktech-solar.aerotynelabs.workers.dev/",
    primaryMetric: {
      value: "Solar",
      label: "Smart solar systems, day and night",
    },
    metrics: [
      { value: "Solar", label: "Smart solar systems" },
      { value: "Quote", label: "Free quote requests" },
      { value: "Responsive", label: "Phone to desktop" },
    ],
    challenge: [
      "Homeowners and businesses wanted a clear, honest explanation of rooftop solar and an easy way to ask for a quote without a pushy sales call.",
    ],
    whatWeDid: [
      {
        title: "Clear storytelling.",
        text: "A photo-led home page that walks visitors through solutions and how it works.",
      },
      {
        title: "Quote and trust sections.",
        text: "Team, reviews, FAQ, and a free-quote call to action on every screen.",
      },
    ],
    summaryText:
      "A modern solar company website covering solutions, the installation process, the team, and quote requests.",
    outcome:
      "A clean, approachable site that helps people take the first step toward solar.",
  },
  {
    slug: "tesseract-solutions",
    title: "Tesseract Solutions",
    client: "Tesseract Solutions",
    industry: "Precision 3D printing & ecommerce",
    category: "Websites",
    tagline: "Engineered a 3D printing storefront with a product catalog and a custom order request flow.",
    services: "Ecommerce storefront, Custom order flow",
    serviceTags: ["3rd Year Minor Project", "3D Printing & Ecommerce"],
    timeline: "Completed",
    image: "/images/projects/tesseract-solutions.jpg",
    detailImage: "/images/projects/tesseract-solutions.jpg",
    imageFit: "contain",
    liveUrl: "https://tesseract-lovat.vercel.app/",
    primaryMetric: {
      value: "Catalog",
      label: "Products plus custom requests",
    },
    metrics: [
      { value: "Catalog", label: "Product showcase" },
      { value: "Custom", label: "Order request flow" },
      { value: "Dark UI", label: "Built for product photos" },
    ],
    challenge: [
      "Makers and product designers needed a simple way to browse printed products and send custom print requests.",
    ],
    whatWeDid: [
      {
        title: "Storefront design.",
        text: "A dark-mode product showcase for precision printed items.",
      },
      {
        title: "Custom request pipeline.",
        text: "A streamlined intake flow for bespoke models.",
      },
    ],
    summaryText:
      "A 3D printing storefront and custom manufacturing request site.",
    outcome:
      "A storefront that takes ideas from CAD files to physical parts.",
  },
];

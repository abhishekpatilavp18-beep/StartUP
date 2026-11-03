export const caseStudies = [
  {
    slug: "vedant-portfolio",
    title: "Vedant 3D Retro Portfolio",
    client: "Vedant S. Tattimani",
    industry: "Creative web design & 3D WebGL",
    tagline: "Crafted a nostalgic 90s Macintosh desktop experience modeled in interactive 3D with functional mini-apps.",
    services: "3D WebGL, Retro OS simulation",
    serviceTags: ["2nd Year Minor Project", "3D Web Experience"],
    timeline: "Completed",
    image: "/images/projects/vedant-portfolio.jpg",
    detailImage: "/images/projects/vedant-portfolio.jpg",
    imageFit: "cover",
    liveUrl: "https://portfolie-2.vedantst6.workers.dev/",
    primaryMetric: {
      value: "60 FPS",
      label: "Smooth 3D interactive rendering",
    },
    metrics: [
      { value: "60 FPS", label: "Smooth 3D interactive rendering" },
      { value: "100%", label: "Interactive CRT environment" },
      { value: "3D", label: "Immersive desk setup" },
    ],
    challenge: [
      "Standing out in developer portfolios requires unforgettable creative flair. The goal was to build a fully interactive 3D vintage workstation.",
    ],
    whatWeDid: [
      {
        title: "Realistic 3D desk modeling.",
        text: "Rendered vintage Macintosh monitor, mouse, keyboard, and figurines.",
      },
      {
        title: "Interactive OS inside CRT.",
        text: "Made the computer screen fully clickable with working retro apps.",
      },
    ],
    summaryText:
      "Nostalgic 90s Macintosh desktop experience modeled in full 3D interactive space with working audio players and custom widgets.",
    outcome:
      "An award-worthy interactive experience demonstrating advanced 3D web graphics and creative storytelling.",
    testimonial: {
      quote: "Nostalgic, playful, and technically impressive 3D experience.",
      author: "Vedant S. Tattimani",
      role: "Software Developer",
      avatar: "/images/friend.jpg",
    },
  },
  {
    slug: "screen-tester",
    title: "Screen Tester",
    client: "Web Utility",
    industry: "Display hardware diagnostics",
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
      label: "Targeted screen tests",
    },
    metrics: [
      { value: "20+", label: "Targeted screen tests" },
      { value: "144Hz+", label: "High refresh rate detection" },
      { value: "4K/UHD", label: "Full resolution support" },
    ],
    challenge: [
      "Checking new monitors for sub-pixel defects, color uniformity, and backlight bleed traditionally required specialized desktop software.",
    ],
    whatWeDid: [
      {
        title: "Smart device detection.",
        text: "Automatically identifies display capabilities and suggests tailored diagnostics.",
      },
      {
        title: "Precision canvas test patterns.",
        text: "Constructed high-contrast patterns for dead pixel identification.",
      },
    ],
    summaryText:
      "Built a complete browser-based hardware diagnostic tool to test screens for dead pixels, refresh rate, contrast, and ghosting with zero installation.",
    outcome:
      "A comprehensive online screen testing tool empowering buyers and creators to verify monitor quality before purchase.",
    testimonial: {
      quote: "The easiest way to inspect dead pixels and color uniformity on any new monitor.",
      author: "Hardware Reviewer",
      role: "Display Specialist",
      avatar: "/images/abhishek.jpg",
    },
  },
  {
    slug: "keycheck",
    title: "Keycheck",
    client: "Web Utility",
    industry: "Hardware diagnostics & testing",
    tagline: "Built a browser-based multi-key tester and typing latency analyzer detecting stuck or uncalibrated keys instantly.",
    services: "Event listener architecture, Real-time DOM testing",
    serviceTags: ["3rd Year Minor Project", "Interactive Utility"],
    timeline: "Completed",
    image: "/images/projects/keyboard-tester.png",
    detailImage: "/images/projects/keyboard-tester.png",
    imageFit: "contain",
    liveUrl: "https://keyboardtester1.com/",
    primaryMetric: {
      value: "0ms",
      label: "Key stroke detection latency",
    },
    metrics: [
      { value: "0ms", label: "Key stroke detection latency" },
      { value: "100%", label: "Browser-native zero install" },
      { value: "100+", label: "Supported keyboard layouts" },
    ],
    challenge: [
      "Gamers and mechanical keyboard enthusiasts needed a zero-install tool to test multi-key rollover (NKRO) and key chattering without installing untrusted software.",
    ],
    whatWeDid: [
      {
        title: "Low-latency event listeners.",
        text: "Captured raw keydown/keyup events directly in the browser DOM.",
      },
      {
        title: "Dynamic keyboard visualizer.",
        text: "Rendered interactive 60%, TKL, and Full 104-key visualizers.",
      },
    ],
    summaryText:
      "Instant multi-key keyboard tester and typing latency analyzer detecting stuck or uncalibrated keys in real time directly in the browser.",
    outcome:
      "A fast, reliable keyboard tester used daily by enthusiasts to diagnose hardware issues in real-time.",
    testimonial: {
      quote: "Instant key detection with zero lag, making keyboard testing effortless.",
      author: "Keycheck User",
      role: "Community Feedback",
      avatar: "/images/abhishek.jpg",
    },
  },
  {
    slug: "abhishek-portfolio",
    title: "Abhishek Portfolio",
    client: "Abhishek Patil",
    industry: "Full-Stack Developer",
    tagline: "Engineered a bespoke personal portfolio featuring interactive full-stack showcases and responsive performance.",
    services: "Full-stack development, UI/UX",
    serviceTags: ["2nd Year Minor Project", "Full-Stack Portfolio"],
    timeline: "Completed",
    image: "/images/projects/abhishek-portfolio.jpg",
    detailImage: "/images/projects/abhishek-portfolio.jpg",
    imageFit: "cover",
    liveUrl: "https://abhishekvp.me/",
    primaryMetric: {
      value: "99/100",
      label: "Lighthouse performance score",
    },
    metrics: [
      { value: "99/100", label: "Lighthouse performance score" },
      { value: "<0.5s", label: "Initial load latency" },
      { value: "100%", label: "Responsive mobile fidelity" },
    ],
    challenge: [
      "Needed a modern, high-impact digital presence to showcase full-stack development skills, projects, and technical capabilities without generic templates.",
      "Required seamless responsiveness, micro-interactions, and fast load times across all screen sizes.",
    ],
    whatWeDid: [
      {
        title: "Bespoke full-stack architecture.",
        text: "Engineered clean, responsive components with optimized bundle delivery.",
      },
      {
        title: "Interactive showcases.",
        text: "Built dynamic project spotlights with live preview interactions.",
      },
      {
        title: "Performance optimization.",
        text: "Achieved near-instant rendering with minimal asset payloads.",
      },
    ],
    summaryText:
      "A developer portfolio engineered from the ground up to reflect modern frontend standards, clean architecture, and technical capability.",
    outcome:
      "A standout developer portfolio driving direct inquiries and high engagement across developer communities.",
    testimonial: {
      quote: "A clean, modern portfolio that communicates technical rigor from the first second.",
      author: "Abhishek Patil",
      role: "Full-Stack Developer",
      avatar: "/images/abhishek.jpg",
    },
  },
  {
    slug: "ticket-total",
    title: "Ticket.Total",
    client: "Entertainment & Ticketing",
    industry: "Cinema booking platform",
    tagline: "Engineered a dynamic cinema reservation platform featuring session schedules, seat matrices, and fast checkout.",
    services: "Full-stack web application, Seat mapping",
    serviceTags: ["2nd Year Minor Project", "Entertainment Platform"],
    timeline: "Completed",
    image: "/images/projects/movie-booking.jpg",
    detailImage: "/images/projects/movie-booking.jpg",
    imageFit: "contain",
    liveUrl: "https://movie-booking-platform1.pages.dev/",
    primaryMetric: {
      value: "1-Click",
      label: "Frictionless seat reservation",
    },
    metrics: [
      { value: "1-Click", label: "Frictionless seat reservation" },
      { value: "100%", label: "Real-time seat state sync" },
      { value: "<1s", label: "Checkout flow completion" },
    ],
    challenge: [
      "Traditional cinema booking flows are cluttered with ads and convoluted multi-step forms, causing high drop-offs.",
    ],
    whatWeDid: [
      {
        title: "Dynamic theater seat grid.",
        text: "Built intuitive interactive seat picker with real-time availability states.",
      },
      {
        title: "Streamlined movie scheduling.",
        text: "Organized showtimes by format (IMAX, 4DX, Dolby Atmos) with instant filtering.",
      },
    ],
    summaryText:
      "Comprehensive movie reservation platform featuring session schedules, dynamic seat selection, and streamlined checkout flows.",
    outcome:
      "A modern, cinema-first web application delivering seamless ticket booking and user satisfaction.",
    testimonial: {
      quote: "Clean cinema booking interface without the bloated ad clutter.",
      author: "Cinema Goer",
      role: "User Review",
      avatar: "/images/abhishek.jpg",
    },
  },
  {
    slug: "k-tech-solar",
    title: "K-Tech Solar",
    client: "K-Tech Energy",
    industry: "Renewable energy & solar engineering",
    tagline: "Engineered an interactive smart solar web platform with instant quote calculators and product showcase.",
    services: "CleanTech web app, Quote engine, UI/UX",
    serviceTags: ["3rd Year Minor Project", "CleanTech Web App"],
    timeline: "Completed",
    image: "/images/projects/k-tech-solar.jpg",
    detailImage: "/images/projects/k-tech-solar.jpg",
    imageFit: "contain",
    liveUrl: "https://k-tech-bgm.vercel.app/",
    primaryMetric: {
      value: "₹0 Bills",
      label: "Target 25-year energy savings",
    },
    metrics: [
      { value: "₹0 Bills", label: "Target 25-year energy savings" },
      { value: "100%", label: "Clean solar generation" },
      { value: "<1 min", label: "Instant quote calculation" },
    ],
    challenge: [
      "Homeowners and businesses needed an easy, transparent way to understand rooftop solar savings and get instant cost estimates without aggressive sales calls.",
    ],
    whatWeDid: [
      {
        title: "Smart solar calculator.",
        text: "Built an intuitive interactive quote tool estimating rooftop generation and savings.",
      },
      {
        title: "Dynamic product visualizer.",
        text: "Showcased solar PV, wind hybrid, water heating, and heat pump integrations.",
      },
    ],
    summaryText:
      "Interactive smart solar web platform featuring instant quote calculators, clean energy product catalogs, and zero-bill savings projections.",
    outcome:
      "A sleek, conversion-focused clean energy platform helping consumers transition to sustainable solar power.",
    testimonial: {
      quote: "Modern, clean, and intuitive solar estimate calculator.",
      author: "Solar Energy Client",
      role: "Project Review",
      avatar: "/images/abhishek.jpg",
    },
  },
  {
    slug: "tesseract-solutions",
    title: "Tesseract Solutions",
    client: "Tesseract Solutions",
    industry: "Precision 3D printing & ecommerce",
    tagline: "Engineered a sleek 3D printing ecommerce showcase with custom order configurator and product catalog.",
    services: "Ecommerce platform, 3D printing configurator",
    serviceTags: ["3rd Year Minor Project", "3D Printing & Ecommerce"],
    timeline: "Completed",
    image: "/images/projects/tesseract-solutions.jpg",
    detailImage: "/images/projects/tesseract-solutions.jpg",
    imageFit: "contain",
    liveUrl: "https://tesseract-lovat.vercel.app/",
    primaryMetric: {
      value: "3-5 Days",
      label: "Precision print delivery",
    },
    metrics: [
      { value: "3-5 Days", label: "Precision print delivery" },
      { value: "100%", label: "Made in India precision" },
      { value: "0.1mm", label: "High tolerance accuracy" },
    ],
    challenge: [
      "Connecting makers and product designers with on-demand precision 3D printing required an effortless catalog and custom inquiry pipeline.",
    ],
    whatWeDid: [
      {
        title: "Clean ecommerce architecture.",
        text: "Designed a dark-mode product showcase for precision manufactured items.",
      },
      {
        title: "Custom request pipeline.",
        text: "Built a streamlined intake flow for bespoke engineering models.",
      },
    ],
    summaryText:
      "Modern 3D printing storefront and custom manufacturing platform built for precision engineering and rapid fulfillment.",
    outcome:
      "A high-performing digital storefront bringing ideas from digital CAD files to physical reality.",
    testimonial: {
      quote: "Super sleek 3D printing storefront with frictionless custom requests.",
      author: "Product Designer",
      role: "Customer Review",
      avatar: "/images/friend.jpg",
    },
  },
];

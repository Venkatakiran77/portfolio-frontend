// src/config/portfolio.config.js

/**
 * ============================================================
 * PORTFOLIO CONFIGURATION
 * ============================================================
 * Single source of truth for all personal content on the site.
 * Every section/component should import from here — never
 * hardcode personal information directly in a component.
 *
 * NOTE: Populated with placeholder content structured after your
 * reference design for immediate usability. Replace values below
 * with your real information.
 * ============================================================
 */

export const portfolioConfig = {
  // ------------------------------------------------------------
  // IDENTITY
  // ------------------------------------------------------------
  name: 'Venkata Kiran',
  initials: 'VK',
  role: 'Software Engineer',
  pronouns: 'he/him',
  photo: '/assets/images/profile-photo.png',

  // ------------------------------------------------------------
  // HERO
  // ------------------------------------------------------------
  hero: {
    availabilityBadge: 'Available for opportunities',
    headline: [
      { text: 'I build software that ', accent: false },
      { text: 'solves real-world problems.', accent: true },
    ],
    subheadline:
      "From enterprise applications at Infor to AI-powered computer vision systems and scalable e-commerce platforms, I turn complex ideas into production-ready products.",
    highlights: [
      { label: 'Full Stack Developer', icon: 'code' },
      { label: 'Problem Solver', icon: 'puzzle' },
      { label: 'Quick Learner', icon: 'bolt' },
      { label: 'Team Player', icon: 'users' },
    ],
    ctas: {
      primary: { label: 'View My Work', href: '#projects' },
      secondary: { label: "Let's Connect", href: '#contact' },
    },
  },

  // ------------------------------------------------------------
  // STATS (hero stat bar + achievements section)
  // ------------------------------------------------------------
  stats: [
    { id: 'experience', label: 'Years Experience', value: 2, suffix: '+' },
    { id: 'projects', label: 'Projects Completed', value: 10, suffix: '+' },
    { id: 'hours', label: 'Hours of Coding', value: 1000, suffix: '+' },
    { id: 'tech', label: 'Technologies Mastered', value: 5, suffix: '+' },
    { id: 'commitment', label: 'Commitment', value: 100, suffix: '%' },
  ],

  // ------------------------------------------------------------
  // ABOUT
  // ------------------------------------------------------------
  about: {
    eyebrow: 'About Me',
    title: 'Curious. Driven. Always Building.',
    paragraphs: [
      "I'm a Software Engineer who loves turning ideas into real-world applications. I enjoy solving problems, learning new technologies, and building products that make a difference.",
      "I've worked on enterprise platforms, AI models, robotics simulations, and e-commerce solutions. I thrive in fast-paced environments and love tackling challenges that push me to grow.",
    ],
    tags: ['Problem Solver', 'Detail Oriented', 'Fast Learner', 'Clean Code Advocate'],
    journey: [
      'Started Learning',
      'Albanero',
      'Infor',
      'Startup Journey',
      'AI Projects',
      'Business Websites',
    ],
    infoCard: {
      location: 'Hyderabad, India',
      email: 'venkatakiran77@gmail.com',
      phone: '+91 7702296369',
      availability: 'Open to opportunities',
      languages: ['English', 'Telugu', 'Hindi'],
    },
  },

  // ------------------------------------------------------------
  // WHY HIRE ME
  // ------------------------------------------------------------
  whyHireMe: {
    eyebrow: 'Why Hire Me',
    title: 'What I Bring to the Table',
    values: [
      { icon: 'building', title: 'Enterprise Experience', description: 'Shipped production features on large-scale platforms used by real customers.' },
      { icon: 'puzzle', title: 'Problem Solver', description: 'I enjoy breaking down ambiguous problems into clear, buildable solutions.' },
      { icon: 'zap', title: 'Fast Learner', description: 'Comfortable picking up new stacks and domains quickly under real deadlines.' },
      { icon: 'lightbulb', title: 'Product Thinker', description: 'I think about the user and business impact, not just the code.' },
      { icon: 'layers', title: 'Full Stack Developer', description: 'Equally comfortable across frontend, backend, and infrastructure.' },
      { icon: 'users', title: 'Team Player', description: 'I collaborate well in agile teams and communicate clearly.' },
    ],
  },

  // ------------------------------------------------------------
  // CONTACT / SOCIAL
  // ------------------------------------------------------------
  contact: {
    email: 'venkatakiran77@gmail.com',
    phone: '+91 84660 29097',
    location: 'Hyderabad, India',
    availability: 'Open to opportunities',
    heading: "Let's Build Something Amazing Together",
    subheading: "I'm currently open to new opportunities. Let's connect.",
    ctaLabel: 'Get In Touch',
  },

  social: {
    github: 'https://github.com/Venkatakiran77',
    linkedin: 'https://www.linkedin.com/in/venkata-kiran-y-50aa5a22a/',
    twitter: 'https://twitter.com/Venkatakiran_77',
    email: 'mailto:venkatakiran77@gmail.com',
  },

  // ------------------------------------------------------------
  // RESUME
  // ------------------------------------------------------------
  resume: {
    fileName: 'Yelam_Venkata_Kiran_Java_Full_Stack_Resume.pdf',
    filePath: '/assets/resume/Yelam_Venkata_Kiran_Java_Full_Stack_Resume.pdf',
  },

  // ------------------------------------------------------------
  // NAVIGATION
  // ------------------------------------------------------------
  nav: [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Skills', href: '#skills' },
    { label: 'Projects', href: '#projects' },
    { label: 'Experience', href: '#experience' },
    { label: 'Achievements', href: '#achievements' },
    { label: 'Contact', href: '#contact' },
  ],

  // ------------------------------------------------------------
  // SEO
  // ------------------------------------------------------------
  seo: {
    title: 'Venkata Kiran — Software Engineer',
    description:
      'Software Engineer building enterprise applications, AI-powered systems, and scalable full-stack products.',
    siteUrl: 'https://your-domain.com',
    ogImage: '/og-image.png',
    twitterHandle: '@your-twitter',
    keywords: [
      'Software Engineer',
      'Full Stack Developer',
      'React Developer',
      'Portfolio',
      'Venkata Kiran',
    ],
  },

  // ------------------------------------------------------------
  // THEME DEFAULTS
  // ------------------------------------------------------------
  themeDefaults: {
    defaultMode: 'dark', // 'dark' | 'light'
    allowSystemPreference: true,
  },

  // ------------------------------------------------------------
  // ANALYTICS (optional — leave blank to disable)
  // ------------------------------------------------------------
  analytics: {
    enabled: false,
    resumeDownloadEndpoint: '', // e.g. FastAPI endpoint if backend is added later
    visitorTrackingId: '',
  },
};

export default portfolioConfig;
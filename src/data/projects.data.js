// src/data/projects.data.js

/**
 * @typedef {Object} ProjectMetric
 * @property {string} label
 * @property {string} value
 */

/**
 * @typedef {Object} Project
 * @property {string} id
 * @property {string} slug
 * @property {string} title
 * @property {string} shortDescription
 * @property {string} problem
 * @property {string} solution
 * @property {string} architecture
 * @property {string[]} challenges
 * @property {string[]} techStack
 * @property {string} category
 * @property {string} coverImage
 * @property {string[]} gallery
 * @property {ProjectMetric[]} metrics
 * @property {string} [githubUrl]
 * @property {string} [liveUrl]
 * @property {boolean} featured
 */

/** @type {Project[]} */
export const projectsData = [
  {
  id: 'proj-ai-robotics-website',
  slug: 'ai-robotics-company-website',

  title: 'AI Robotics Company Website',

  shortDescription:
    'Responsive corporate website showcasing AI-powered robotics solutions, agricultural automation, company vision, and technology.',

  problem:
    'The company needed a modern digital presence to showcase its AI-powered robotics solutions, communicate its vision, and establish credibility with customers, partners, and potential investors.',

  solution:
    'Designed and developed a responsive corporate website featuring product showcases, AI technology, company information, and contact sections with a strong focus on performance, usability, and modern design.',

  architecture:
    'Built as a React single-page application using reusable components, responsive layouts, optimized assets, and deployed on Vercel for fast global delivery.',

  challenges: [
    'Creating a modern interface that effectively communicated complex robotics solutions.',
    'Building fully responsive layouts for desktop, tablet, and mobile devices.',
    'Optimizing images and assets to improve loading speed and overall performance.',
  ],

  techStack: [
    'React',
    'JavaScript',
    'CSS',
    'Vercel',
  ],

  category: 'Web Development',

  coverImage: '/assets/images/projects/robotic-project-cover.png',

  gallery: [
    '/assets/images/projects/ai-robotics-company/1.jpg',
    '/assets/images/projects/ai-robotics-company/2.jpg',
    '/assets/images/projects/ai-robotics-company/3.jpg',
  ],

  metrics: [
    {
      label: 'Pages',
      value: '6+',
    },
    {
      label: 'Deployment',
      value: 'Vercel',
    },
  ],

  githubUrl: 'https://github.com/Venkatakiran77/krisi-vahana-website',

  liveUrl: 'https://krisi-vahana-website-git-main-venkatakiran77s-projects.vercel.app',

  featured: true,
},
  {
    id: 'proj-tomato-detection',
    slug: 'ai-tomato-detection',
    title: 'AI Tomato Detection Model',
    shortDescription:
      'YOLOv8 model trained to detect ripe and unripe tomatoes with 86.8% mAP50, optimized for real-time inference.',
    problem:
      'Manual sorting of ripe vs. unripe produce is slow and inconsistent, creating a bottleneck for small-scale automated harvesting and sorting workflows.',
    solution:
      'Trained a custom YOLOv8 object detection model on a labeled tomato dataset to classify ripeness in real time from camera input, with confidence scoring per detection.',
    architecture:
      'Python training pipeline using YOLOv8 and OpenCV for preprocessing, with the trained model exported for real-time inference and evaluated using standard object-detection metrics.',
    challenges: [
      'Collecting and labeling a sufficiently diverse tomato ripeness dataset',
      'Tuning the model to run inference in real time on limited hardware',
      'Reducing false positives between ripe and unripe classes in similar lighting',
    ],
    techStack: ['Python', 'YOLOv8', 'OpenCV', 'Roboflow'],
    category: 'AI/ML',
    coverImage: '/assets/images/projects/tomato-detection.png',
    gallery: [
      '/assets/images/projects/tomato-detection/1.jpg',
    ],
    metrics: [
      { label: 'Model Accuracy', value: '86.8% mAP50' },
      { label: 'Inference', value: 'Real-time' },
    ],
    githubUrl: 'https://github.com/Venkatakiran77/AI-Tomato-Ripeness-Detection',
    liveUrl: '',
    featured: true,
  },

  {
  id: 'proj-beyond-seasons',
  slug: 'beyond-seasons-ecommerce',

  title: 'Beyond Seasons E-commerce',

  shortDescription:
    'Modern e-commerce website for dehydrated food products built with WordPress and WooCommerce, focused on branding, product discovery, and customer experience.',

  problem:
    'Beyond Seasons needed a professional online storefront to showcase dehydrated food products, improve brand visibility, and provide customers with an easy shopping experience.',

  solution:
    'Designed and customized a WordPress and WooCommerce based e-commerce website with category-based navigation, product pages, responsive layouts, and an optimized shopping experience.',

  architecture:
    'Built using WordPress, WooCommerce, and custom styling with a focus on responsive design, product management, and content-driven commerce.',

  challenges: [
    'Designing a premium shopping experience while working within the WordPress ecosystem.',
    'Optimizing product images and layouts for fast page loading.',
    'Creating intuitive navigation for multiple wellness product categories.',
  ],

  techStack: [
    'WordPress',
    'WooCommerce',
    'PHP',
    'CSS',
    'JavaScript',
  ],

  category: 'E-commerce',

  coverImage: '/assets/images/projects/beyond-seasons.png',

  gallery: [
    '/assets/images/projects/beyond-seasons/1.jpg',
    '/assets/images/projects/beyond-seasons/2.jpg',
    '/assets/images/projects/beyond-seasons/3.jpg',
  ],

  metrics: [
    { label: 'Platform', value: 'WooCommerce' },
    { label: 'Categories', value: '6+' },
  ],

  githubUrl: '',
  liveUrl: '',

  featured: true,
},
];

export default projectsData;
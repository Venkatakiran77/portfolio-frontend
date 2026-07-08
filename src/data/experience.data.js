// src/data/experience.data.js

/**
 * @typedef {Object} Experience
 * @property {string} id
 * @property {string} company
 * @property {string} role
 * @property {string} startDate
 * @property {string} endDate
 * @property {string} duration
 * @property {string} logo
 * @property {string[]} bullets
 * @property {boolean} current - Whether this is the current/ongoing role
 */

/** @type {Experience[]} */
export const experienceData = [
  {
    id: "exp-infor",
    company: "Infor India Pvt. Ltd.",
    role: "Associate Software Engineer",
    startDate: "Jul 2024",
    endDate: "Jan 2026",
    duration: "1.5 Years",
    logo: "/assets/images/infor.svg",
    bullets: [
      "Diagnosed and resolved critical production issues, improving system stability and uptime.",
      "Developed enterprise applications on the Infor Data Mesh platform.",
      "Built responsive UI using React.js and modern JavaScript.",
      'Optimized rendering and API efficiency using debouncing, throttling, React.memo, and async techniques.',
      "Designed RESTful APIs using Java and Spring Boot.",
      "Worked with SQL, Superset for dashboards and data visualization.",
    ],
    current: false,
  },

  {
    id: "exp-albanero",
    company: "Albanero",
    role: "Software Engineer (Frontend)",
    startDate: "May 2024",
    endDate: "Jul 2024",
    duration: "3 Months",
    logo: "/assets/images/albanero.svg",
    bullets: [
      "Worked on the Datamesh platform for frontend development.",
      "Built reusable components and improved UI performance.",
      "Collaborated in an Agile environment to deliver features.",
    ],
    current: false,
  },

  {
    id: "exp-self-learning",
    company: "Krisi Vahana pvt ltd",
    role: "Building for Impact",
    startDate: "2026",
    endDate: "Present",
    duration: "Ongoing",
    logo: "/assets/images/krisi-vahana.jpg",
    bullets: [
      "Built AI models for tomato ripeness detection (YOLOv8) with 86.8% mAP50.",
      'Built Python scripts to compute real-time object coordinates for robotic arm positioning.',
      "Developed a headless e-commerce website with React and WordPress.",
      "Simulated a robotic arm using ROS2 and Gazebo.",
    ],
    current: true,
  },
];

export default experienceData;

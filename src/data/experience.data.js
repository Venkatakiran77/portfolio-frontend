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
      "Developed and enhanced a configurable enterprise Intake Forms application for customer, supplier and parts master data (~10 forms, 3 roles per form, ~1,000–1,500 users per form, 500+ records created daily) using React.js, Java and Spring Boot.",
      "Owned 3 core React modules and contributed to 3 additional modules; integrated ~20 frontend APIs and worked on ~10 backend APIs, enhancing and deploying 3 existing Spring Boot microservices.",
      "Implemented Spring Boot Controller, Service, Repository and DTO layers with request validation, exception handling and HTTP responses; enhanced existing APIs and MongoDB document operations.",
      "Designed and implemented an end-to-end change-tracking feature using hierarchical DTOs for old/new field values, Spring Boot GET/POST APIs, MongoDB persistence and React review-screen integration.",
      "Built configuration-driven forms with dynamic field validation, conditional visibility, mandatory/hidden/disabled states, dependent-field events and auto-population of related fields, reducing manual data entry for users.",
      "Implemented role-based access configuration and multi-step workflows covering submission, reviewer approval, rejection, request-for-change and conditional routing based on form data.",
      "Developed dashboards with role-based record visibility, status tracking, pagination, sorting and filtering, and integrated form fields with Infor M3/reference data through backend GET APIs and CSV-driven dropdowns.",
      "Tested and debugged features with Postman API testing, integration testing and end-to-end validation; resolved defects using SLF4J/Docker logs, collaborating with QA through GitLab merge requests and code reviews.",
    ],
    current: false,
  },

  {
    id: "exp-albanero",
    company: "Albanero Solutions Pvt. Ltd. (acquired by Infor)",
    role: "Software Engineer",
    startDate: "May 2024",
    endDate: "Jul 2024",
    duration: "3 Months",
    logo: "/assets/images/albanero.svg",
    bullets: [
      "Contributed to the Enterprise Data Mesh platform for data processing and migration workflows, implementing React.js and Material UI enhancements.",
      "Resolved backend validation issues in data-transformation functionality using Java and SQL; supported debugging and maintenance.",
    ],
    current: false,
  },

  {
    id: "exp-krisi-vahana",
    company: "Krisi Vahana Pvt. Ltd.",
    role: "Software Engineer",
    startDate: "Jan 2026",
    endDate: "Aug 2026",
    duration: "8 Months",
    logo: "/assets/images/krisi-vahana.jpg",
    bullets: [
      "Developed a responsive tomato-detection testing interface using React.js, JavaScript, HTML5, CSS3 and Material UI, integrating Python-based detection to display ripe, unripe and damaged tomatoes through live-camera testing.",
      "Implemented Python-based image processing, preprocessing and classification logic to support tomato detection and ripeness assessment.",
      "Simulated a robotic arm using ROS2 and Gazebo."
    ],
    current: false,
  },
];

export default experienceData;
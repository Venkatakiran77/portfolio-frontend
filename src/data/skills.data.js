// src/data/skills.data.js

/**
 * @typedef {Object} Skill
 * @property {string} id
 * @property {string} name
 * @property {string} icon - react-icons/lucide-react identifier, resolved via an icon map in SkillCard.jsx
 * @property {string} category - "Frontend" | "Backend" | "Database" | "AI" | "DevOps" | "Languages" | "Tools"
 * @property {number} yearsExperience
 * @property {number} confidence - 0-100, drives the ProgressBar / tooltip
 */

/** @type {Skill[]} */
export const skillCategories = [
  // Frontend
  { id: 'skill-react', name: 'React', icon: 'react', category: 'Frontend', yearsExperience: 2, confidence: 90 },
  { id: 'skill-js', name: 'JavaScript', icon: 'javascript', category: 'Frontend', yearsExperience: 3, confidence: 92 },
  { id: 'skill-css3', name: 'CSS3', icon: 'css3', category: 'Frontend', yearsExperience: 3, confidence: 85 },
  { id: 'skill-tailwind', name: 'Tailwind CSS', icon: 'tailwind', category: 'Frontend', yearsExperience: 2, confidence: 88 },
  // { id: 'skill-redux', name: 'Redux', icon: 'redux', category: 'Frontend', yearsExperience: 1, confidence: 70 },

  // Backend
  { id: 'skill-nodejs', name: 'Node.js', icon: 'nodejs', category: 'Backend', yearsExperience: 2, confidence: 82 },
  { id: 'skill-express', name: 'Express.js', icon: 'express', category: 'Backend', yearsExperience: 2, confidence: 80 },
  { id: 'skill-java', name: 'Java', icon: 'java', category: 'Backend', yearsExperience: 2, confidence: 78 },
  { id: 'skill-springboot', name: 'Spring Boot', icon: 'spring', category: 'Backend', yearsExperience: 1.5, confidence: 75 },
  { id: 'skill-restapi', name: 'REST API', icon: 'api', category: 'Backend', yearsExperience: 2.5, confidence: 88 },

  // Database
  { id: 'skill-mysql', name: 'MySQL', icon: 'mysql', category: 'Database', yearsExperience: 2, confidence: 80 },
  { id: 'skill-oraclesql', name: 'Oracle SQL', icon: 'oracle', category: 'Database', yearsExperience: 1.5, confidence: 70 },
  { id: 'skill-mongodb', name: 'MongoDB', icon: 'mongodb', category: 'Database', yearsExperience: 1, confidence: 68 },
  // { id: 'skill-redis', name: 'Redis', icon: 'redis', category: 'Database', yearsExperience: 1, confidence: 60 },

  // AI
  { id: 'skill-yolov8', name: 'YOLOv8', icon: 'ai', category: 'AI', yearsExperience: 1, confidence: 75 },
  { id: 'skill-opencv', name: 'OpenCV', icon: 'opencv', category: 'AI', yearsExperience: 1, confidence: 70 },
  { id: 'skill-python-ai', name: 'Python (ML)', icon: 'python', category: 'AI', yearsExperience: 1.5, confidence: 78 },

  // DevOps / Tools
  { id: 'skill-git', name: 'Git', icon: 'git', category: 'DevOps', yearsExperience: 3, confidence: 90 },
  { id: 'skill-docker', name: 'Docker', icon: 'docker', category: 'DevOps', yearsExperience: 1, confidence: 65 },
  // { id: 'skill-aws', name: 'AWS', icon: 'aws', category: 'DevOps', yearsExperience: 1, confidence: 62 },
  // { id: 'skill-jenkins', name: 'Jenkins', icon: 'jenkins', category: 'DevOps', yearsExperience: 1, confidence: 58 },

  // Tools
  { id: 'skill-vscode', name: 'VS Code', icon: 'vscode', category: 'Tools', yearsExperience: 3, confidence: 95 },
  { id: 'skill-postman', name: 'Postman', icon: 'postman', category: 'Tools', yearsExperience: 2, confidence: 85 },

  // Languages
  // { id: 'skill-typescript', name: 'TypeScript', icon: 'typescript', category: 'Languages', yearsExperience: 1, confidence: 72 },
  { id: 'skill-python-lang', name: 'Python', icon: 'python', category: 'Languages', yearsExperience: 2, confidence: 80 },
];

/**
 * Canonical category display order — used by Skills.jsx to render
 * category groups in a consistent, intentional sequence rather than
 * whatever order Object.keys() happens to produce.
 */
export const SKILL_CATEGORIES_ORDER = [
  'Frontend',
  'Backend',
  'Database',
  'AI',
  'DevOps',
  'Tools',
  'Languages',
];

export default skillCategories;
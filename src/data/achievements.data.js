// src/data/achievements.data.js

/**
 * @typedef {Object} Achievement
 * @property {string} id
 * @property {string} label
 * @property {number} value - Numeric target for the count-up animation
 * @property {string} [prefix] - e.g. "" (rendered before the number)
 * @property {string} [suffix] - e.g. "+", "%", "hrs"
 * @property {string} icon - Icon identifier resolved in Achievements.jsx
 * @property {number} [decimals] - Decimal places to animate to, e.g. 86.8 -> 1
 */

/** @type {Achievement[]} */
export const achievements = [
  {
    id: 'ach-projects',
    label: 'Projects Built',
    value: 10,
    suffix: '+',
    icon: 'folder',
    decimals: 0,
  },
  {
    id: 'ach-years',
    label: 'Years Experience',
    value: 2,
    suffix: '+',
    icon: 'calendar',
    decimals: 0,
  },
  {
    id: 'ach-tech',
    label: 'Technologies Learned',
    value: 10,
    suffix: '+',
    icon: 'layers',
    decimals: 0,
  },
  {
    id: 'ach-hours',
    label: 'Hours Coding',
    value: 1000,
    suffix: '+',
    icon: 'clock',
    decimals: 0,
  },
  {
    id: 'ach-production',
    label: 'Production Applications',
    value: 5,
    suffix: '+',
    icon: 'rocket',
    decimals: 0,
  },
  {
    id: 'ach-ai-accuracy',
    label: 'AI Model Accuracy',
    value: 86.8,
    suffix: '%',
    icon: 'target',
    decimals: 1,
  },
];

export default achievements;
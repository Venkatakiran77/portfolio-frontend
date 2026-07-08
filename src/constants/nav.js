// src/constants/nav.js

import { ROUTES } from './routes.js';

/**
 * Centralized navigation items.
 * Consumed by both Navbar.jsx and CommandPalette.jsx so the two
 * never fall out of sync with each other.
 *
 * href values starting with "#" are in-page anchor links (scroll-to-section
 * on the home page). "route" values are actual React Router paths.
 */

export const NAV_ITEMS = [
  { id: 'home', label: 'Home', href: '#home', icon: 'home' },
  { id: 'about', label: 'About', href: '#about', icon: 'user' },
  { id: 'experience', label: 'Experience', href: '#experience', icon: 'briefcase' },
  { id: 'skills', label: 'Skills', href: '#skills', icon: 'code' },
  { id: 'projects', label: 'Projects', href: '#projects', icon: 'folder' },
  { id: 'achievements', label: 'Achievements', href: '#achievements', icon: 'award' },
  { id: 'contact', label: 'Contact', href: '#contact', icon: 'mail' },
];

/**
 * Extra command-palette-only actions that aren't in-page sections
 * (e.g. jumping straight to the home route, or triggering resume download).
 * Kept separate from NAV_ITEMS since these aren't navbar links.
 */
export const COMMAND_PALETTE_ACTIONS = [
  { id: 'go-home', label: 'Go to Home', type: 'route', target: ROUTES.HOME, icon: 'home' },
  { id: 'download-resume', label: 'Download Resume', type: 'action', target: 'downloadResume', icon: 'download' },
  { id: 'toggle-theme', label: 'Toggle Theme', type: 'action', target: 'toggleTheme', icon: 'sun-moon' },
];

export default NAV_ITEMS;
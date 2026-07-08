// src/constants/routes.js

/**
 * Centralized route path constants.
 * Never hardcode a route string directly in a component — import
 * from here instead, so route changes only need to happen in one place.
 */

export const ROUTES = {
  HOME: '/',
  PROJECT_DETAIL: '/projects/:slug',
  NOT_FOUND: '*',
};

/**
 * Builds an actual navigable project detail URL from a slug.
 * Usage: buildProjectPath('enterprise-dashboard') -> '/projects/enterprise-dashboard'
 * @param {string} slug
 * @returns {string}
 */
export function buildProjectPath(slug) {
  return `/projects/${slug}`;
}

export default ROUTES;
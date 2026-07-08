// src/utils/cn.js

import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

/**
 * Merges class names conditionally (via clsx) and resolves conflicting
 * Tailwind utility classes (via tailwind-merge), so the last conflicting
 * class always wins predictably instead of relying on CSS source order.
 *
 * Usage:
 *   cn('p-4 bg-background-elevated', isActive && 'bg-accent-primary', className)
 *
 * @param  {...any} inputs - strings, objects, arrays, or falsy values
 * @returns {string} merged, deduplicated className string
 */
export function cn(...inputs) {
  return twMerge(clsx(inputs));
}

export default cn;
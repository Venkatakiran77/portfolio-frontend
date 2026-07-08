// src/utils/validators.js

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

/**
 * @param {string} value
 * @returns {string} error message, or '' if valid
 */
export function validateRequired(value, fieldLabel = 'This field') {
  if (!value || !value.trim()) return `${fieldLabel} is required.`;
  return '';
}

/**
 * @param {string} email
 * @returns {string} error message, or '' if valid
 */
export function validateEmail(email) {
  if (!email || !email.trim()) return 'Email is required.';
  if (!EMAIL_REGEX.test(email.trim())) return 'Enter a valid email address.';
  return '';
}

/**
 * @param {string} message
 * @param {number} minLength
 * @returns {string} error message, or '' if valid
 */
export function validateMessage(message, minLength = 10) {
  if (!message || !message.trim()) return 'Message is required.';
  if (message.trim().length < minLength) {
    return `Message should be at least ${minLength} characters.`;
  }
  return '';
}

/**
 * Validates the full contact form object at once.
 * @param {{ name: string, email: string, message: string }} formData
 * @returns {{ isValid: boolean, errors: Object }}
 */
export function validateContactForm(formData) {
  const errors = {
    name: validateRequired(formData.name, 'Name'),
    email: validateEmail(formData.email),
    message: validateMessage(formData.message),
  };

  const isValid = Object.values(errors).every((err) => err === '');
  return { isValid, errors };
}
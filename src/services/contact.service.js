// src/services/contact.service.js

/**
 * Sends a contact form submission.
 *
 * Default implementation uses EmailJS (https://www.emailjs.com/), a good fit
 * for static portfolio sites since it requires no custom backend — just a
 * free-tier account and three IDs from their dashboard.
 *
 * If you'd rather use your own backend API, see the commented-out
 * `sendViaCustomApi` function below and swap the export.
 */

const EMAILJS_SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const EMAILJS_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const EMAILJS_PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

/**
 * @param {{ name: string, email: string, message: string }} formData
 * @returns {Promise<{ success: boolean }>}
 * @throws {Error} if the send fails
 */
export async function sendContactMessage(formData) {
  if (!EMAILJS_SERVICE_ID || !EMAILJS_TEMPLATE_ID || !EMAILJS_PUBLIC_KEY) {
    throw new Error(
      'EmailJS is not configured. Add VITE_EMAILJS_SERVICE_ID, VITE_EMAILJS_TEMPLATE_ID, ' +
      'and VITE_EMAILJS_PUBLIC_KEY to your .env file.'
    );
  }

  // Dynamically imported so the bundle only pulls in @emailjs/browser
  // when the contact form actually submits, not on initial page load.
  const emailjs = (await import('@emailjs/browser')).default;

  const response = await emailjs.send(
    EMAILJS_SERVICE_ID,
    EMAILJS_TEMPLATE_ID,
    {
      from_name: formData.name,
      from_email: formData.email,
      message: formData.message,
    },
    { publicKey: EMAILJS_PUBLIC_KEY }
  );

  if (response.status !== 200) {
    throw new Error(`EmailJS responded with status ${response.status}`);
  }

  return { success: true };
}

/**
 * --- Alternative: custom backend API ---
 * Uncomment and use this instead of sendContactMessage if you have your own
 * API endpoint (e.g. a serverless function) to handle form submissions.
 *
 * export async function sendViaCustomApi(formData) {
 *   const response = await fetch(`${import.meta.env.VITE_API_BASE_URL}/contact`, {
 *     method: 'POST',
 *     headers: { 'Content-Type': 'application/json' },
 *     body: JSON.stringify(formData),
 *   });
 *
 *   if (!response.ok) {
 *     const body = await response.json().catch(() => ({}));
 *     throw new Error(body.message || `Request failed with status ${response.status}`);
 *   }
 *
 *   return { success: true };
 * }
 */

export default sendContactMessage;
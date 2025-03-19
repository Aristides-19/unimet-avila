import { useState } from 'react';
import { sendEmail } from '../services/email.js';

/**
 * Custom hook for sending emails using the `sendEmail` service.
 * @returns {{sendEmail: ((function(string[], string, string): Promise<void>)|*), loading: boolean, error: unknown}}
 */
export const useSendEmail = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  /**
   * Wrapper function around the `sendEmail` service.
   * Handles loading and error states.
   * @param {string[]} to - Array of email addresses.
   * @param {string} subject - Subject of the email.
   * @param {string} text - Body of the email.
   */
  const sendEmailHandler = async (to, subject, text) => {
    if (loading) return;
    setLoading(true);
    setError(null);

    try {
      await sendEmail(to, subject, text);
    } catch (err) {
      setError(err);
    } finally {
      setLoading(false);
    }
  };

  // Return the handler function and state variables
  return { sendEmail: sendEmailHandler, loading, error };
};

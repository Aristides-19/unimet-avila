import { supabase } from '../supabaseClient';

/**
 * Send an email using Supabase Edge Function
 * @param to - array of email addresses
 * @param subject - subject of the email
 * @param text - body of the email
 * @returns {Promise<void>} - Promise that resolves when the email is sent
 */
export const sendEmail = async (to, subject, text) => {
  try {
    const { data, error } = await supabase.functions.invoke('send-email', {
      body: { to, subject, text },
    });

    if (error) {
      throw new Error(`Failed to send email... ${error}`);
    }

    console.log(JSON.stringify(data));
  } catch (error) {
    console.error('Error: ', error);
    throw error;
  }
};

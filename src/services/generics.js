import { supabase } from '../supabaseClient.js';

/**
 * Fetch a generic image from Supabase storage.
 * @param {string} imageNameWithExtension The name of the image file in generics bucket with its extension.
 * @returns {Promise<string|null>} The public URL of the uploaded image or null if an error occurs.
 */
export const getGenericsImageUrl = async (imageNameWithExtension) => {
  try {
    const { data, error } = supabase.storage.from('generics').getPublicUrl(imageNameWithExtension);
    if (error) {
      throw new Error(error.message);
    }
    return data.publicUrl;
  } catch (error) {
    console.error(`Failed to fetch image ${imageNameWithExtension}: `, error.message);
    return null;
  }
};

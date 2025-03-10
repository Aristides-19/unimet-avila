import { useEffect, useState } from 'react';
import { getGenericsImageUrl } from '../services/generics.js';

/**
 * Custom hook to fetch an image from Supabase storage.
 * @param {string} imageNameWithExtension The name of the image file in generics bucket with its extension.
 * @returns {{imageUrl: string, loading: boolean, error: unknown}}
 * An object containing the image URL, loading state, and error state.
 */
export const useImage = (imageNameWithExtension) => {
  const [imageUrl, setImageUrl] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchImage = async () => {
      try {
        const url = await getGenericsImageUrl(imageNameWithExtension);
        setImageUrl(url);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    fetchImage();
  }, []);

  return { imageUrl, loading, error };
};

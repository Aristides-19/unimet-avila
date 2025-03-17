import { useEffect, useState } from 'react';
import { getReviews } from '../services/reviews.js';

/**
 * Custom hook to fetch reviews for a specific excursion.
 * @param excursionId excursion id
 * @returns {{reviews: *[], loading: boolean, error: unknown}}
 */
export const useExcursionReviews = (excursionId) => {
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const reviewsData = await getReviews(excursionId);
        setReviews(reviewsData);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };
    fetchReviews();
  }, []);

  return { reviews, loading, error };
};

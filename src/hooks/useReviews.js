import { useEffect, useState } from 'react';
import { createReview, getReviews } from '../services/reviews.js';

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

/**
 * Hook to create a new review for excursion
 * @returns {Function} - Function to create a review, and loading/error states
 */
export const useCreateReview = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  /**
   *
   * @param {string} studentId - ID of the review author
   * @param {string} excursionId - ID of the excursion
   * @param {string} comment - Comment of the review
   * @param {number} rating - Rating of the review
   * @returns {Promise<string|void>} - ID of the newly created entry
   */
  const create = async (studentId, excursionId, comment, rating) => {
    if (loading) return;
    setLoading(true);
    try {
      return await createReview(studentId, excursionId, comment, rating);
    } catch (err) {
      setError(err);
    } finally {
      setLoading(false);
    }
  };

  return { create, loading, error };
};

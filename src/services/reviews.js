import { collection, getDocs } from 'firebase/firestore';
import { db } from '../firebase';

/**
 * Fetch reviews for a specific excursion.
 * @param excursionId excursion id
 * @returns {Promise<(*&{reviewId: *})[]>}
 */
export const getReviews = async (excursionId) => {
  try {
    const reviewsRef = collection(db, 'excursions', excursionId, 'reviews');

    const querySnapshot = await getDocs(reviewsRef);

    return querySnapshot.docs.map((doc) => {
      return {
        id: doc.id,
        ...doc.data(),
      };
    });
  } catch (error) {
    console.error(`Error fetching reviews from ${excursionId}: `, error);
    throw error;
  }
};

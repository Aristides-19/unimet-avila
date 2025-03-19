import { addDoc, collection, doc, getDocs } from 'firebase/firestore';
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

/**
 * Create a new review in excursionid
 * @param {string} studentId - ID of the review author
 * @param {string} excursionId - ID of the excursion
 * @param {string} comment - Comment of the review
 * @param {number} rating - Rating of the review
 * @returns {Promise<string>} - ID of the newly created entry
 */
export const createReview = async (studentId, excursionId, comment, rating) => {
  try {
    const studentRef = doc(db, 'users', studentId);
    const excursionRef = doc(db, 'excursions', excursionId);
    const reviewsCollectionRef = collection(excursionRef, 'reviews');

    const newEntry = {
      studentId: studentRef,
      comment,
      rating,
    };

    const docRef = await addDoc(reviewsCollectionRef, newEntry);
    return docRef.id;
  } catch (error) {
    console.error(`Failed to create review for ${excursionId}: `, error);
    throw error;
  }
};

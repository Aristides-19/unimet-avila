import { db } from '../firebase'; // Make sure to import the Firebase configuration
import {
  addDoc,
  collection,
  doc,
  getDoc,
  getDocs,
  limit,
  orderBy,
  query,
  startAfter,
  Timestamp,
} from 'firebase/firestore';

const blogPostsCollection = collection(db, 'blogPosts');

/**
 * Creates a new article in the `blogPosts` collection.
 * @param {Object} articleData - Data of the article to be created.
 * @param {string} articleData.authorId - ID of the author (reference to `users`).
 * @param {string} articleData.title - Title of the article.
 * @param {string} articleData.content - Content of the article.
 * @param {string} articleData.category - Category of the article.
 * @returns {Promise<string>} - ID of the created article.
 */
export const createArticle = async (articleData) => {
  try {
    const docRef = await addDoc(blogPostsCollection, {
      ...articleData,
      createdAt: Timestamp.now(),
    });
    return docRef.id;
  } catch (error) {
    console.error('Error creating the article:', error);
    throw error;
  }
};

/**
 * Fetches an article by its ID.
 * @param {string} postId - ID of the article to fetch.
 * @returns {Promise<Object>} - Data of the article.
 */
export const getArticleById = async (postId) => {
  try {
    const docRef = doc(db, 'blogPosts', postId);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      return { id: docSnap.id, ...docSnap.data() };
    } else {
      throw new Error('Article does not exist');
    }
  } catch (error) {
    console.error('Error fetching the article:', error);
    throw error;
  }
};

/**
 * Fetches a paginated list of articles.
 * @param {number} pageSize - Number of articles per page.
 * @param {string} [lastVisibleId] - ID of the last visible article (for pagination).
 * @returns {Promise<(*&{id: *})[]>} - List of articles and the last visible document.
 */
export const getPaginatedArticles = async (pageSize, lastVisibleId = null) => {
  try {
    let q = query(blogPostsCollection, orderBy('createdAt', 'desc'), limit(pageSize));

    if (lastVisibleId) {
      const lastVisibleDoc = await getDoc(doc(db, 'blogPosts', lastVisibleId));
      q = query(q, startAfter(lastVisibleDoc));
    }

    const querySnapshot = await getDocs(q);
    return querySnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
  } catch (error) {
    console.error('Error fetching paginated articles:', error);
    throw error;
  }
};

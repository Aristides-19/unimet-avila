import { db } from '../firebase';
import {
  collection,
  addDoc,
  getDoc,
  doc,
  query,
  where,
  getDocs,
  Timestamp,
  getCountFromServer,
  orderBy,
} from 'firebase/firestore';

/**
 * Get a forum entry by its ID
 * @param {string} entryId - ID of the forum entry
 * @returns {Promise<Object>} - Forum entry document
 */
export const getForumEntryById = async (entryId) => {
  const docRef = doc(db, 'forumEntry', entryId);
  const docSnap = await getDoc(docRef);

  if (docSnap.exists()) {
    return { id: docSnap.id, ...docSnap.data() };
  } else {
    throw new Error('Forum entry not found');
  }
};

/**
 * Create a new question in the forum
 * @param {string} authorId - ID of the question author
 * @param {string} title - Title of the question
 * @param {string} content - Content of the question
 * @returns {Promise<string>} - ID of the newly created entry
 */
export const createQuestion = async (authorId, title, content) => {
  try {
    const authorRef = doc(db, 'users', authorId);

    const newEntry = {
      authorId: authorRef,
      content,
      createdAt: Timestamp.now(),
      type: 'question',
      title,
    };

    const docRef = await addDoc(collection(db, 'forumEntry'), newEntry);
    return docRef.id;
  } catch (error) {
    console.error(`Failed to create question ${title}: `, error);
    throw error;
  }
};

/**
 * Create an answer to an existing question
 * @param {string} authorId - ID of the answer author
 * @param {string} content - Content of the answer
 * @param {string} parentId - ID of the question being answered
 * @returns {Promise<string>} - ID of the newly created entry
 */
export const createAnswer = async (authorId, content, parentId) => {
  try {
    const authorRef = doc(db, 'users', authorId);
    const parentRef = doc(db, 'forumEntry', parentId);

    const newEntry = {
      authorId: authorRef,
      content,
      createdAt: Timestamp.now(),
      type: 'answer',
      parentId: parentRef,
    };

    const docRef = await addDoc(collection(db, 'forumEntry'), newEntry);
    return docRef.id;
  } catch (error) {
    console.error(`Failed to create answer to question ${parentId}: `, error);
    throw error;
  }
};

/**
 * Get all questions from the forum, ordered by createdAt (most recent first)
 * @returns {Promise<Array>} - List of questions
 */
export const getAllQuestions = async () => {
  try {
    const q = query(collection(db, 'forumEntry'), where('type', '==', 'question'), orderBy('createdAt', 'desc'));
    const querySnapshot = await getDocs(q);
    return querySnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
  } catch (error) {
    console.error('Failed to get questions from server', error);
    throw error;
  }
};

/**
 * Get all answers for a specific question, ordered by createdAt (most recent first)
 * @param {string} parentId - ID of the question
 * @returns {Promise<Array>} - List of answers
 */
export const getAnswersByQuestionId = async (parentId) => {
  try {
    const parentRef = doc(db, 'forumEntry', parentId);
    const q = query(
      collection(db, 'forumEntry'),
      where('parentId', '==', parentRef),
      where('type', '==', 'answer'),
      orderBy('createdAt', 'desc')
    );

    const querySnapshot = await getDocs(q);
    return querySnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
  } catch (error) {
    console.error(`Failed to get answers for question ${parentId}: `, error);
    throw error;
  }
};

/**
 * Get the count of answers for a specific question
 * @param {string} parentId - ID of the question
 * @returns {Promise<number>} - Number of answers
 */
export const getAnswerCount = async (parentId) => {
  try {
    const parentRef = doc(db, 'forumEntry', parentId);
    const q = query(collection(db, 'forumEntry'), where('parentId', '==', parentRef));
    const snapshot = await getCountFromServer(q);
    return snapshot.data().count;
  } catch (error) {
    console.error(`Failed to get answer count from server for ${parentId}: `, error);
    throw error;
  }
};

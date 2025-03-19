import { db } from '../firebase';
import {
  doc,
  getDoc,
  collection,
  getCountFromServer,
  setDoc,
  query,
  where,
  updateDoc,
  arrayUnion,
} from 'firebase/firestore';
import { supabase } from '../supabaseClient.js';

/**
 * Fetch user by id.
 * @param userIdOrPath User ID or path to the document.
 * @returns {Promise<{userId: string, email: any, name: any, bio: any, phone: any, genre: any, role: any, profilePicture: any, bannerPicture: any, excursionsHistory: (*|*[]), forumEntries: (*|*[]), likes: (*|*[])}>}
 * Resolved with a user object.
 */
export const getUser = async (userIdOrPath) => {
  try {
    const userRef =
      userIdOrPath.startsWith('users') || userIdOrPath.startsWith('/users')
        ? doc(db, userIdOrPath)
        : doc(db, 'users', userIdOrPath);

    const userDoc = await getDoc(userRef);

    if (userDoc.exists()) {
      const data = userDoc.data();

      return {
        userId: userDoc.id,
        ...data,
      };
    } else {
      console.log('Not found user by id: ', userIdOrPath);
      return null;
    }
  } catch (error) {
    console.error('Failed to fetch user by id: ' + userIdOrPath + ' : ', error);
    throw error;
  }
};

/**
 * Fetch user's collection size per type
 * @return {Promise<{students: number, guides: number}>}
 */
export const getUsersSize = async () => {
  try {
    const usersCollection = collection(db, 'users');

    const qStudents = query(usersCollection, where('role', '==', 'Estudiante'));
    const snapshotStudents = await getCountFromServer(qStudents);
    const countStudents = snapshotStudents.data().count;

    const qGuides = query(usersCollection, where('role', '==', 'Guía'));
    const snapshotGuides = await getCountFromServer(qGuides);
    const countGuides = snapshotGuides.data().count;

    return {
      students: countStudents,
      guides: countGuides,
    };
  } catch (error) {
    console.error('Failed to fetch users size: ', error);
    throw error;
  }
};

/**
 * Save or edit a user.
 * @param userData User data object.
 * @returns {Promise<{[p: string]: unknown}>}
 * Resolved with a user objects.
 */
export const saveUser = async (userData) => {
  const { userIdOrPath, email, name, bio, phone, genre, role, profilePicture, excursionsHistory } = userData;
  try {
    const userRef =
      userIdOrPath.startsWith('users') || userIdOrPath.startsWith('/users')
        ? doc(db, userIdOrPath)
        : doc(db, 'users', userIdOrPath);

    const user = Object.fromEntries(
      Object.entries({
        email,
        name,
        bio,
        phone,
        genre,
        role,
        profilePicture,
        excursionsHistory,
        // eslint-disable-next-line no-unused-vars
      }).filter(([_, value]) => value !== undefined)
    );

    // merge: true, if there is an update, it won't change the entire document, only the fields that are passed in the object
    await setDoc(userRef, user, { merge: true });

    console.log('User saved/update successfully: ', userIdOrPath);
    return user;
  } catch (error) {
    console.error('Error saving/updating user ' + userIdOrPath + ' : ', error);
    throw error;
  }
};

/**
 * Add excursion to user's history.
 * @param userId user id
 * @param excursionId excursion id
 * @returns {Promise<void>}
 */
export const addExcursionToHistory = async (userId, excursionId) => {
  try {
    const userRef = doc(db, 'users', userId);
    const excursionRef = doc(db, 'excursions', excursionId);
    await updateDoc(userRef, {
      excursionsHistory: arrayUnion(excursionRef),
    });
    console.log('Excursion added successfully.');
  } catch (error) {
    console.error('Failed to add excursion to history: ', error);
  }
};

/**
 * Updates the profile image of a user in Supabase Storage.
 * Deletes any previous image (profile.jpg or profile.png) before uploading the new one.
 *
 * @param {string} userId - The user's UID.
 * @param {File} file - The image file (PNG or JPG).
 * @returns {Promise<{publicUrl: string, error: null}>} - The result of the operation.
 */
export const updateUserProfileImage = async (userId, file) => {
  try {
    const filesToDelete = [`${userId}/profile.jpg`, `${userId}/profile.png`, `${userId}/profile.jpeg`];
    const { error: deleteError } = await supabase.storage.from('users').remove(filesToDelete);

    if (deleteError) {
      throw new Error(deleteError.message);
    }

    const fileExtension = file.name.substring(file.name.lastIndexOf('.') + 1);
    const filePath = `${userId}/profile.${fileExtension}`;

    const { error: uploadError } = await supabase.storage.from('users').upload(filePath, file, {
      upsert: true,
    });

    if (uploadError) {
      throw new Error(uploadError.message);
    }

    const { data: publicUrlData } = supabase.storage.from('users').getPublicUrl(filePath);
    await saveUser({ userIdOrPath: userId, profilePicture: publicUrlData.publicUrl });

    return { publicUrl: publicUrlData.publicUrl, error: null };
  } catch (error) {
    console.error(`Failed to upload image ${file.name}: `, error.message);
    return null;
  }
};

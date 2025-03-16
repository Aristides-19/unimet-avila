import { db } from '../firebase';
import { doc, getDoc, collection, getCountFromServer, setDoc, query, where } from 'firebase/firestore';

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
 * @returns {Promise<{email, name, bio, phone, genre, role, profilePicture, bannerPicture, excursionsHistory, forumEntries, likes}>}
 * Resolved with a user objects.
 */
export const saveUser = async (userData) => {
  const {
    userIdOrPath,
    email,
    name,
    bio,
    phone,
    genre,
    role,
    profilePicture,
    bannerPicture,
    excursionsHistory,
    forumEntries,
    likes,
  } = userData;

  try {
    const userRef =
      userIdOrPath.startsWith('users') || userIdOrPath.startsWith('/users')
        ? doc(db, userIdOrPath)
        : doc(db, 'users', userIdOrPath);

    const user = {
      email,
      name,
      bio,
      phone,
      genre,
      role,
      profilePicture,
      bannerPicture,
      excursionsHistory,
      forumEntries,
      likes,
    };

    // merge: true, if there is an update, it won't change the entire document, only the fields that are passed in the object
    await setDoc(userRef, user, { merge: true });

    console.log('User saved/update successfully: ', userIdOrPath);
    return user;
  } catch (error) {
    console.error('Error saving/updating user ' + userIdOrPath + ' : ', error);
    throw error;
  }
};

import { db } from '../firebase';
import {
  collection,
  getDocs,
  orderBy,
  limit,
  query,
  startAfter,
  getCountFromServer,
  doc,
  setDoc,
} from 'firebase/firestore';

/**
 * Fetch excursions with pagination.
 * @param lastDoc DocumentSnapshot to start from.
 * @param limitVal Number of excursions to fetch per request.
 * @returns {Promise<{excursions: {id: string, [key: string]: any}[], lastDoc: QueryDocumentSnapshot}>}
 * Resolved with an object containing excursion's array and last document snapshot to use in the next page.
 */
export const getExcursions = async (lastDoc = null, limitVal = 5) => {
  let q;
  if (lastDoc) {
    q = query(collection(db, 'excursions'), orderBy('averageRating', 'desc'), startAfter(lastDoc), limit(limitVal));
  } else {
    q = query(collection(db, 'excursions'), orderBy('averageRating', 'desc'), limit(limitVal));
  }
  const querySnapshot = await getDocs(q);
  const excursions = querySnapshot.docs.map((doc) => {
    const data = doc.data();
    const date = data.date.toDate();
    return {
      id: doc.id,
      ...data,
      date,
    };
  });
  const newLastDoc = querySnapshot.docs[querySnapshot.docs.length - 1];
  return { excursions, lastDoc: newLastDoc };
};

/**
 * Fetch excursion's collection size
 */
export const getExcursionsSize = async () => {
  try {
    const excursionsCollection = collection(db, 'excursions');
    const snapshot = await getCountFromServer(excursionsCollection);
    return snapshot.data().count;
  } catch (error) {
    console.error('Failed to fetch excursions size: ', error);
    throw error;
  }
};

/**
 * Save or edit an excursion
 * @param excursionData Excursion data object
 * @returns {Promise<{title, description, type, duration, date, route, price, hasLunch, images, guideId, maxStudents, enrolledStudents, status, averageRating}>}
 */
export const saveExcursion = async (excursionData) => {
  const {
    excursionIdOrPath,
    title,
    meetingLocation,
    description,
    type,
    duration,
    date,
    route,
    price,
    hasLunch,
    images,
    guideId,
    maxStudents,
    enrolledStudents,
    status,
    averageRating,
  } = excursionData;

  try {
    let excursionRef;
    if (!excursionIdOrPath) {
      excursionRef = doc(collection(db, 'excursions'));
    } else {
      excursionRef =
        excursionIdOrPath.startsWith('excursions') || excursionIdOrPath.startsWith('/excursions')
          ? doc(db, excursionIdOrPath)
          : doc(db, 'excursions', excursionIdOrPath);
    }

    const excursion = {
      title,
      meetingLocation,
      description,
      type,
      duration,
      date,
      route,
      price,
      hasLunch,
      images,
      guideId,
      maxStudents,
      enrolledStudents,
      status,
      averageRating,
    };

    await setDoc(excursionRef, excursion, { merge: true });

    console.log('Excursion saved/updated successfully: ', excursionIdOrPath);
    return excursion;
  } catch (error) {
    console.error('Error saving/updating excursion ' + excursionIdOrPath + ': ', error);
    throw error;
  }
};

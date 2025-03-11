import { db } from '../firebase';
import { collection, getDocs, orderBy, limit, query, startAfter, getCountFromServer } from 'firebase/firestore';

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

    const guideId = data.guideId ? { id: data.guideId.id, path: data.guideId.path } : null;

    const meetingLocation = {
      latitude: data.meetingLocation.latitude,
      longitude: data.meetingLocation.longitude,
    };

    const enrolledStudents = data.enrolledStudents.map((student) => ({ id: student.id, path: student.path }));

    return {
      id: doc.id,
      ...data,
      date,
      guideId,
      meetingLocation,
      enrolledStudents,
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

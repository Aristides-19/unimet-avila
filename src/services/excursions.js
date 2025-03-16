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
  where,
  Timestamp,
} from 'firebase/firestore';

/**
 * Fetch excursions with pagination.
 * @param lastDoc DocumentSnapshot to start from.
 * @param limitVal Number of excursions to fetch per request.
 * @param searchQuery URL Search Query
 * @param order Query order (asc || desc)
 * @param date
 * @param selectedRating
 * @param duration
 * @param price
 * @param difficulty
 * @param state
 * @returns {Promise<{excursions: {id: string, [key: string]: any}[], lastDoc: QueryDocumentSnapshot}>}
 * Resolved with an object containing excursion's array and last document snapshot to use in the next page.
 */
export const getExcursions = async (
  lastDoc = null,
  limitVal = 5,
  searchQuery,
  order,
  date = null,
  selectedRating = null,
  duration = [1, 6],
  price = [5, 100],
  difficulty = { all: true },
  state = { all: true }
) => {
  let q = query(collection(db, 'excursions'));

  if (searchQuery) {
    q = query(q, where('title', '>=', searchQuery), where('title', '<=', searchQuery + '\uf8ff'));
  }

  if (date) {
    const startOfDay = new Date(date.getFullYear(), date.getMonth(), date.getDate());
    const endOfDay = new Date(date.getFullYear(), date.getMonth(), date.getDate() + 1);

    const startTimestamp = Timestamp.fromDate(startOfDay);
    const endTimestamp = Timestamp.fromDate(endOfDay);

    q = query(q, where('date', '>=', startTimestamp), where('date', '<', endTimestamp));
  }

  if (selectedRating) {
    q = query(q, where('averageRating', '>=', selectedRating));
  }

  if (duration) {
    q = query(q, where('duration', '>=', duration[0]), where('duration', '<=', duration[1]));
  }

  if (price) {
    q = query(q, where('price', '>=', price[0]), where('price', '<=', price[1]));
  }

  if (difficulty) {
    const difficultyMap = {
      light: 'Ligero',
      advanced: 'Avanzado',
      extreme: 'Extremo',
    };

    const selectedDifficulties = Object.keys(difficulty).filter(
      (key) => difficulty[key] && Object.keys(difficultyMap).includes(key)
    );

    if (selectedDifficulties.length > 0) {
      const translatedDifficulties = selectedDifficulties.map((key) => difficultyMap[key]);
      q = query(q, where('type', 'in', translatedDifficulties));
    }
  }

  if (state) {
    const stateMap = {
      available: 'Disponible',
      finished: 'Finalizada',
    };

    const selectedStates = Object.keys(state).filter((key) => state[key] && Object.keys(stateMap).includes(key));

    if (selectedStates.length > 0) {
      const translatedStates = selectedStates.map((key) => stateMap[key]);
      q = query(q, where('status', 'in', translatedStates));
    }
  }

  q = query(q, orderBy('averageRating', order));

  q = query(q, limit(limitVal));

  if (lastDoc) {
    q = query(q, startAfter(lastDoc));
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

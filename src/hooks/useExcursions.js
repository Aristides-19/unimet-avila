import { useState, useEffect } from 'react';
import {
  addStudentToExcursion,
  getExcursionById,
  getExcursions,
  getExcursionsSize,
  saveExcursion,
} from '../services/excursions';

/**
 * Custom hook to fetch excursions with pagination.
 * @param limitVal Number of excursions to fetch per request.
 * @param searchQuery URL Query
 * @param isAscending order state
 * @param date date filter
 * @param selectedRating rating filter
 * @param duration duration in hours filter
 * @param price price filter
 * @param difficulty difficulty filter
 * @param state status filter
 * @returns {{excursions: {id: string, [key: string]: any}[], loading: boolean, error: unknown, hasMore: boolean, loadMore: ((function(): Promise<void>)|*)}}
 * An object containing excursion's array, loading state, error, if there are more excursions state, and pagination control.
 */
export const useExcursions = (
  limitVal = 5,
  searchQuery = '',
  isAscending,
  date,
  selectedRating,
  duration,
  price,
  difficulty,
  state
) => {
  const [excursions, setExcursions] = useState([]);
  const [lastDoc, setLastDoc] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [hasMore, setHasMore] = useState(true);

  useEffect(() => {
    const loadInitialExcursions = async () => {
      try {
        const order = isAscending ? 'asc' : 'desc';
        const { excursions: initialExcursions, lastDoc: initialLastDoc } = await getExcursions(
          null,
          limitVal,
          searchQuery,
          order,
          date,
          selectedRating,
          duration,
          price,
          difficulty,
          state
        );
        setExcursions(initialExcursions);
        setLastDoc(initialLastDoc);
        setHasMore(initialExcursions.length === limitVal);
      } catch (err) {
        console.log(err); // To see indexes
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    loadInitialExcursions();
  }, [searchQuery, isAscending, date, selectedRating, duration, price, difficulty, state]);

  const loadMore = async () => {
    if (!hasMore || loading) return;

    setLoading(true);
    try {
      const order = isAscending ? 'asc' : 'desc';
      const { excursions: newExcursions, lastDoc: newLastDoc } = await getExcursions(
        lastDoc,
        limitVal,
        searchQuery,
        order,
        date,
        selectedRating,
        duration,
        price,
        difficulty,
        state
      );
      setExcursions((prev) => [...prev, ...newExcursions]);
      setLastDoc(newLastDoc);
      setHasMore(newExcursions.length === limitVal);
    } catch (err) {
      setError(err);
    } finally {
      setLoading(false);
    }
  };

  return { excursions, loading, error, hasMore, loadMore };
};

/**
 * Custom hook to fetch excursion by ID.
 * @param excursionId excursion ID
 * @returns {{excursion: unknown, loading: boolean, error: unknown}}
 */
export const useExcursionById = (excursionId) => {
  const [excursion, setExcursion] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchExcursion = async () => {
      try {
        const excursionData = await getExcursionById(excursionId);
        setExcursion(excursionData);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    fetchExcursion();
  }, []);

  return { excursion, loading, error };
};

/**
 * Custom hook to fetch excursion's collection size.
 * @returns {{size: number, loading: boolean, error: unknown}}
 * An object containing the excursion's collection size, loading state, and error.
 */
export const useExcursionsSize = () => {
  const [size, setSize] = useState(0);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadExcursionSize = async () => {
      try {
        const size = await getExcursionsSize();
        setSize(size);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    loadExcursionSize();
  }, []);

  return { size, loading, error };
};

/**
 * Custom hook to save/edit excursion data.
 * @returns {{saveExcursionData: ((function({excursionId: *, title: *, meetingLocation: *, description: *, type: *, duration: *, date: *, route: *, price: *, hasLunch: *, images: *, guideId: *, maxStudents: *, enrolledStudents: *, status: *, averageRating: *}): Promise<void>)|*), excursion: unknown, loading: boolean, error: unknown}}
 * An object containing a function to save excursion data, excursion, loading state, and error.
 */
export const useSaveExcursion = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [excursion, setExcursion] = useState(null);

  const saveExcursionData = async ({
    excursionId,
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
  }) => {
    if (loading) return;
    setLoading(true);
    setError(null);
    setExcursion(null);

    try {
      const savedExcursion = await saveExcursion({
        excursionId,
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
      });
      setExcursion(savedExcursion);
    } catch (err) {
      setError(err);
    } finally {
      setLoading(false);
    }
  };

  return { saveExcursionData, excursion, loading, error };
};

/**
 * Custom hook to add student to enrolled students.
 * @returns {{addStudentToExcursionData: function, loading: boolean, error: unknown}}
 * An object containing a function to add student, loading state, and error.
 */
export const useAddStudentToExcursion = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const addStudentToExcursionData = async (userId, excursionId) => {
    setLoading(true);
    setError(null);

    try {
      await addStudentToExcursion(userId, excursionId);
    } catch (err) {
      setError(err);
    } finally {
      setLoading(false);
    }
  };

  return { addStudentToExcursionData, loading, error };
};

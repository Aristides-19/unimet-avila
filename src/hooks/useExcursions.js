import { useState, useEffect } from 'react';
import { getExcursions, getExcursionsSize } from '../services/excursions';

/**
 * Custom hook to fetch excursions with pagination.
 * @param limitVal Number of excursions to fetch per request.
 * @returns {{excursions: {id: string, [key: string]: any}[], loading: boolean, error: unknown, hasMore: boolean, loadMore: ((function(): Promise<void>)|*)}}
 * An object containing excursion's array, loading state, error, if there are more excursions state, and pagination control.
 */
export const useExcursions = (limitVal = 5) => {
  const [excursions, setExcursions] = useState([]);
  const [lastDoc, setLastDoc] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [hasMore, setHasMore] = useState(true);

  useEffect(() => {
    const loadInitialExcursions = async () => {
      try {
        const { excursions: initialExcursions, lastDoc: initialLastDoc } = await getExcursions(null, limitVal);
        setExcursions(initialExcursions);
        setLastDoc(initialLastDoc);
        setHasMore(initialExcursions.length === limitVal);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    loadInitialExcursions();
  }, []);

  const loadMore = async () => {
    if (!hasMore || loading) return;

    setLoading(true);
    try {
      const { excursions: newExcursions, lastDoc: newLastDoc } = await getExcursions(lastDoc, limitVal);
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

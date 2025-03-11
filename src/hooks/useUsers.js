import { useState, useEffect } from 'react';
import { getUser, getUsersSize, saveUser } from '../services/users';

/**
 * Custom hook to fetch user by id. It rerenders when userId changes.
 * @param userId
 * @returns {{user: {id: string, [key: string]: any}, loading: boolean, error: unknown}}
 * An object containing user, loading state, error.
 */
export const useUser = (userId) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!userId) {
      setLoading(false);
      return;
    }
    const fetchUser = async () => {
      try {
        const userData = await getUser(userId);
        setUser(userData);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    fetchUser();
  }, [userId]);

  return { user, loading, error };
};

/**
 * Custom hook to fetch user's collection size per type.
 * @returns {{studentsSize: number, guidesSize: number, loading: boolean, error: unknown}}
 * An object containing the user's collection size per type, loading state, and error.
 */
export const useUsersSize = () => {
  const [studentsSize, setStudentsSize] = useState(0);
  const [guidesSize, setGuidesSize] = useState(0);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchUsersSize = async () => {
      try {
        const { students, guides } = await getUsersSize();
        setStudentsSize(students);
        setGuidesSize(guides);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    fetchUsersSize();
  }, []);

  return { studentsSize, guidesSize, loading, error };
};

/**
 * Custom hook to save/edit user data.
 * @returns {{saveUserData: function, user: {id: string, [key: string]: any}, loading: boolean, error: unknown}}
 * An object containing a function to save user data, user, loading state, and error.
 */
export const useSaveUser = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [user, setUser] = useState(null);

  const saveUserData = async ({
    userId,
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
  }) => {
    setLoading(true);
    setError(null);
    setUser(null);

    try {
      const savedUser = await saveUser({
        userId,
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
      });
      setUser(savedUser);
    } catch (err) {
      setError(err);
    } finally {
      setLoading(false);
    }
  };

  return { saveUserData, user, loading, error };
};

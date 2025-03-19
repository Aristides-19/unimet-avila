import { useState, useEffect } from 'react';
import { getUser, getUsersSize, saveUser, addExcursionToHistory } from '../services/users';

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

import { getUsersByRole } from '../services/users';

/**
 * Custom hook to fetch users by role.
 * @param role Role to filter by ('Estudiante' or 'Guía').
 * @returns {{users: Array, loading: boolean, error: unknown}}
 * An object containing users, loading state, and error.
 */
export const useUsersByRole = (role) => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const usersData = await getUsersByRole(role);
        setUsers(usersData);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    fetchUsers();
  }, [role]);

  return { users, loading, error };
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

  const saveUserData = async ({ userId, email, name, bio, phone, genre, role, profilePicture, excursionsHistory }) => {
    if (loading) return;
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
        excursionsHistory,
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

/**
 * Custom hook to add excursion to user's history.
 * @returns {{addExcursionToUserHistory: function, loading: boolean, error: unknown}}
 * An object containing a function to add excursion to history, loading state, and error.
 */
export const useAddExcursionToHistory = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const addExcursionToUserHistory = async (userId, excursionId) => {
    setLoading(true);
    setError(null);

    try {
      await addExcursionToHistory(userId, excursionId);
    } catch (err) {
      setError(err);
    } finally {
      setLoading(false);
    }
  };

  return { addExcursionToUserHistory, loading, error };
};

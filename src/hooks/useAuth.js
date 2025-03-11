import { useState } from 'react';
import { loginUser, registerUser, signInUserWithGoogle } from '../services/auth.js';

/**
 * Custom hook to handle user registration.
 *
 * @returns {{register: (function(): Promise<void>|*), loading: boolean, error: unknown}}
 * An object containing the register function, user data, loading state, and error state.
 */
export const useRegisterUser = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const register = async (firstName, lastName, genre, phone, email, password) => {
    if (loading) return;

    setLoading(true);
    setError(null);

    try {
      await registerUser(firstName, lastName, genre, phone, email, password);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return { register, loading, error };
};

/**
 * Custom hook to handle user login.
 *
 * @returns {{login: ((function(*, *): Promise<void>)|*), loading: boolean, error: unknown}}
 * An object containing the login function, user data, loading state, and error state.
 */
export const useLoginUser = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const login = async (email, password) => {
    if (loading) return;

    setLoading(true);
    setError(null);

    try {
      await loginUser(email, password);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return { login, loading, error };
};

/**
 * Custom hook to handle Google sign-in.
 *
 * @returns {{signInWithGoogle: ((function(): Promise<void>)|*), loading: boolean, error: unknown}}
 * An object containing the signInWithGoogle function, user data, loading state, and error state.
 */
export const useSignInWithGoogle = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const signInWithGoogle = async () => {
    setLoading(true);
    setError(null);

    try {
      await signInUserWithGoogle();
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return { signInWithGoogle, loading, error };
};

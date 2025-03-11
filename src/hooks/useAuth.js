import { useState } from 'react';
import { loginUser, registerUser, signInUserWithGoogle } from '../services/auth.js';

/**
 * Custom hook to handle user registration.
 *
 * @returns {{register: (function(Object): Promise<void>|*), loading: boolean, error: unknown}}
 * An object containing the register function, user data, loading state, and error state.
 */
export const useRegisterUser = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const register = async ({ name, lastName, genre, phone, email, password }) => {
    if (loading) return;

    setLoading(true);
    setError(null);

    try {
      await registerUser(name, lastName, genre, phone, email, password);
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

/**
 * Custom hook to validate registration form data.
 *
 * @returns {{errors: {}, validateForm: (function(formData): boolean)}}
 * An object containing the error state and the validateForm function.
 */
export const useRegisterValidation = () => {
  const [errors, setErrors] = useState({});

  const validateForm = (formData) => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = 'El nombre es obligatorio.';
    }

    if (!formData.lastName.trim()) {
      newErrors.lastName = 'El apellido es obligatorio.';
    }

    if (!formData.genre.trim()) {
      newErrors.genre = 'El género es obligatorio.';
    }

    const phoneRegex = /^\+\d{1,3}\d{6,14}$/;
    if (!formData.phone.trim()) {
      newErrors.phone = 'El teléfono es obligatorio.';
    } else if (!phoneRegex.test(formData.phone)) {
      newErrors.phone = 'El teléfono debe tener el formato +581234567';
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim()) {
      newErrors.email = 'El correo es obligatorio.';
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = 'El correo no es válido.';
    }

    if (!formData.password.trim()) {
      newErrors.password = 'La contraseña es obligatoria.';
    } else if (formData.password.length < 6) {
      newErrors.password = 'La contraseña debe tener al menos 6 caracteres.';
    }

    if (!formData.confirmPassword.trim()) {
      newErrors.confirmPassword = 'Confirma tu contraseña.';
    } else if (formData.confirmPassword !== formData.password) {
      newErrors.confirmPassword = 'Las contraseñas no coinciden.';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  return { errors, validateForm };
};

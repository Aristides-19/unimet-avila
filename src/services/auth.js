import { auth } from '../firebase';
import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithEmailAndPassword,
  signInWithPopup,
} from 'firebase/auth';
import { saveUser } from './users.js';

const FIREBASE_ERRORS = {
  'auth/email-already-in-use': 'El correo electrónico ya está en uso.',
  'auth/weak-password': 'La contraseña debe tener al menos 6 caracteres.',
  'auth/popup-closed-by-user': 'El popup de Google fue cerrado por el usuario.',
  'auth/network-request-failed': 'Error de red. Por favor, verifica tu conexión a internet.',
  'auth/invalid-email': 'Credenciales incorrectas.',
  'auth/user-not-found': 'Credenciales incorrectas.',
  'auth/wrong-password': 'Credenciales incorrectas.',
};

/**
 * Generates user data object.
 * @param {Object} user - Firebase user object.
 * @param {Object} data - Additional user data.
 * @returns {Object} User data object.
 */
const generateUserData = (user, data = {}) => ({
  userIdOrPath: user.uid,
  email: user.email,
  name: data.name || user.displayName,
  bio: '',
  genre: data.genre || 'N/A',
  phone: data.phone || '',
  role: 'Estudiante',
  profilePicture: user.photoURL || '',
  excursionsHistory: [],
});

/**
 * Handles Firebase errors and throws user-friendly messages.
 */
const handleFirebaseError = (error) => {
  const errorCode = error.code;
  const errorMessage = FIREBASE_ERRORS[errorCode] || 'Ocurrió un error inesperado. Por favor, inténtalo de nuevo.';
  console.error(`Firebase Error: ${errorMessage} ${FIREBASE_ERRORS[errorCode] ? '' : error.code}`);
  throw new Error(errorMessage);
};

/**
 * Register a user with email and password.
 */
export const registerUser = async (firstName, lastName, genre, phone, email, password) => {
  try {
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    const userData = generateUserData(userCredential.user, { name: firstName + ' ' + lastName, genre, phone });
    await saveUser(userData);
    console.log('User registered successfully: ', email);
  } catch (error) {
    handleFirebaseError(error);
  }
};

/**
 * Log in a user with email and password.
 */
export const loginUser = async (email, password) => {
  try {
    await signInWithEmailAndPassword(auth, email, password);
    console.log('User logged in successfully: ', email);
  } catch (error) {
    handleFirebaseError(error);
  }
};

/**
 * Log in or Register a user with Google.
 */
export const signInUserWithGoogle = async () => {
  try {
    const result = await signInWithPopup(auth, new GoogleAuthProvider());
    const user = result.user;

    if (user.metadata.creationTime === user.metadata.lastSignInTime) {
      const userData = generateUserData(user);
      await saveUser(userData);
    }
    console.log('User signed in with Google: ', user.email);
  } catch (error) {
    handleFirebaseError(error);
  }
};

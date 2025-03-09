// Configuración firebase
import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyBByHn9O_XJZGVMsmQ9z2mZAHIRFFq3Ydo',
  authDomain: 'unimet-avila.firebaseapp.com',
  projectId: 'unimet-avila',
  storageBucket: 'unimet-avila.appspot.com',
  messagingSenderId: '976130718080',
  appId: '1:976130718080:web:f97881f96b044f391d6965',
  measurementId: 'G-CCN7CQ0XKS',
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app); //Firestore
export const auth = getAuth(app); // Autenticacion
export const googleProvider = GoogleAuthProvider;

// GoogleButton.jsx
import React from 'react';
import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { auth, db } from '../../firebase';
import { doc, setDoc } from 'firebase/firestore';
import styles from './GoogleButton.module.css';

const GoogleButton = ({ onSuccess, onError }) => {
  const handleGoogleLogin = async () => {
    const provider = new GoogleAuthProvider();

    try {
      const result = await signInWithPopup(auth, provider);
      const user = result.user;

      // Verificar si el usuario es nuevo
      if (result._tokenResponse.isNewUser) {
        await setDoc(doc(db, 'usuarios', user.uid), {
          nombre: user.displayName || '',
          apellido: '', // Campo vacío si no está disponible
          genero: '', // Campo vacío
          telefono: user.phoneNumber, // Campo vacío
          correo: user.email || '',
          uid: user.uid,
        });
      }

      // Llamar a la función de éxito pasada como prop
      if (onSuccess) onSuccess('¡Autenticado exitosamente con Google!');
    } catch (err) {
      // Llamar a la función de error pasada como prop
      if (onError) onError('Error al autenticar con Google: ' + err.message);
    }
  };

  return (
    <button
      className={styles.googleButton}
      onClick={handleGoogleLogin}
    >
      Iniciar sesión con Google
    </button>
  );
};

export default GoogleButton;

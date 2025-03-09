// GoogleButton.jsx
import React from 'react';
import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { auth, db } from '../../firebase';
import { doc, setDoc } from 'firebase/firestore';
import styles from './GoogleButton.module.css';
import googleIcon from '../../assets/google-icon.png';

// eslint-disable-next-line react/prop-types
const GoogleButton = ({ onSuccess, onError }) => {
  const handleGoogleLogin = async () => {
    const provider = new GoogleAuthProvider();

    try {
      const result = await signInWithPopup(auth, provider);
      const user = result.user;

      // Funcion para separar el nombre y el apellido
      const splitDisplayName = (displayName) => {
        const nameParts = displayName.split(' ');
        const nombre = nameParts[0];
        const apellido = nameParts.slice(1).join(' ');
        return { nombre, apellido };
      };

      const { nombre, apellido } = splitDisplayName(user.displayName || '');

      // Verificar si el usuario es nuevo
      if (result._tokenResponse.isNewUser) {
        await setDoc(doc(db, 'usuarios', user.uid), {
          nombre: nombre,
          apellido: apellido,
          genero: '', // Campo vacío
          telefono: user.phoneNumber,
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
    <button className={styles.googleButton} onClick={handleGoogleLogin}>
      <img src={googleIcon} alt='Google Icon' className={styles.googleIcon} />
      Continuar con Google
    </button>
  );
};

export default GoogleButton;

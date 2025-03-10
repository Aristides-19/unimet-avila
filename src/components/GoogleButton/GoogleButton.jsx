// GoogleButton.jsx
import React from 'react';
import PropTypes from 'prop-types'; // Importa PropTypes
import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { auth, db } from '../../firebase';
import { doc, setDoc } from 'firebase/firestore';
import styles from './GoogleButton.module.css';
import { FcGoogle } from 'react-icons/fc';

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
      <FcGoogle className={styles.googleIcon} />
      Continuar con Google
    </button>
  );
};

GoogleButton.propTypes = {
  onSuccess: PropTypes.func.isRequired, // Agrega validación de tipo para onSuccess
  onError: PropTypes.func.isRequired, // Agrega validación de tipo para onError
};

export default GoogleButton;

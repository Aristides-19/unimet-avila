import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import styles from './GoogleButton.module.css';
import { FcGoogle } from 'react-icons/fc';
import { useSignInWithGoogle } from '../../hooks/useAuth.js';

const GoogleButton = ({ onError }) => {
  const { signInWithGoogle, error } = useSignInWithGoogle();
  const handleGoogleSign = async () => {
    await signInWithGoogle();
  };

  useEffect(() => {
    onError(error);
  }, [error]);

  return (
    <button
      type='button'
      className={styles.googleButton}
      onClick={handleGoogleSign}
    >
      <FcGoogle className={styles.googleIcon} />
      Continuar con Google
    </button>
  );
};

GoogleButton.propTypes = {
  onError: PropTypes.func.isRequired,
};

export default GoogleButton;

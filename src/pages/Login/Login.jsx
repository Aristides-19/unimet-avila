import React, { useState } from 'react';
import { auth } from '../../firebase.js';
import ResponsiveImage from './ResponsiveIMGlogin.jsx';
import styles from './Login.module.css';
import GoogleButton from '../../components/GoogleButton/GoogleButton';
import Button from '../../components/Button/Button';
import BackButton from '../../components/BackButton/BackButton';

function Login() {
  const [userEmail, setUserEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);

    try {
      await auth.signInWithEmailAndPassword(userEmail, password);
    } catch (err) {
      console.log(err.message);
      setError(err.message);
    }
  };

  return (
    <div style={{ display: 'flex', height: '80vh' }}>
      <div style={{ flex: 1, justifyContent: 'center' }}>
        <ResponsiveImage />
      </div>

      <div className={styles.registerForm}>
        <BackButton />
        <h2>Iniciar sesión</h2>
        {error && <p style={{ color: 'red' }}>{error}</p>}
        <form onSubmit={handleSubmit}>
          <input
            type='email'
            placeholder='Correo Electronico'
            value={userEmail}
            onChange={(e) => setUserEmail(e.target.value)}
            required
          />
          <input
            type='password'
            placeholder='Contraseña'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <Button
            text='Iniciar sesión'
            type='submit'
            color='#fff'
            backgroundColor='var(--earth-sky)'
            hoverBackgroundColor='var(--forest)'
            borderRadius='6px'
          />
          <GoogleButton />
        </form>
      </div>
    </div>
  );
}

export default Login;

import React, { useEffect, useState } from 'react';
import { useLoginUser, useLoginValidation } from '../../hooks/useAuth.js';

import styles from './Login.module.css';
import ResponsiveImage from './ResponsiveIMGlogin.jsx';
import GoogleButton from '../../components/GoogleButton/GoogleButton';
import Button from '../../components/Button/Button';
import BackButton from '../../components/BackButton/BackButton';
import ErrorMessage from '../../components/ErrorMessage/ErrorMessage.jsx';
import SuccessMessage from '../../components/SuccessMessage/SuccessMessage.jsx';
import InputField from '../../components/InputField/InputField.jsx';
import { useAuth } from '../../context/AuthContext.jsx';
import { useNavigate } from 'react-router-dom';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [successMessage, setSuccessMessage] = useState(null);
  const [errorMessage, setErrorMessage] = useState(null);
  const { login: login, error: errorLogin } = useLoginUser();
  const { errors, validateLoginForm } = useLoginValidation();
  const { currentUser } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validateLoginForm({ email, password })) {
      await login(email, password);
    }
  };

  useEffect(() => {
    if (currentUser) {
      setSuccessMessage('Inicio de sesión exitoso. Redirigiendo...');
      setTimeout(() => {
        navigate('/home');
      }, 2000);
    }
  }, [currentUser, navigate]);

  useEffect(() => {
    setErrorMessage(errorLogin);
  }, [errorLogin]);

  return (
    <div className={styles.container}>
      {/* seccion del formulario*/}
      <div className={styles.leftSection}>
        <div className={styles.loginForm}>
          {/* boton de regresar*/}
          <div className={styles.backButtonContainer}>
            <BackButton />
          </div>
          <h2>Iniciar sesión</h2>
          {successMessage && <SuccessMessage message={successMessage} />}
          {errorMessage && <ErrorMessage message={errorMessage} />}

          <form onSubmit={handleSubmit} noValidate>
            <div className={styles.formGroup}>
              <label>Correo Electrónico</label>
              <InputField
                type='email'
                name='email'
                placeholder='Correo Electrónico'
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              {errors.email && <span>{errors.email}</span>}
            </div>
            <div className={styles.formGroup}>
              <label>Contraseña</label>
              <InputField
                type='password'
                name='password'
                placeholder='Contraseña'
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              {errors.password && <span>{errors.password}</span>}
            </div>
            <div className={styles.botonInicioSesion}>
              <Button
                text='Iniciar Sesión'
                type='submit'
                color='var(--sunlight)'
                backgroundColor='var(--earth-sky)'
                hoverBackgroundColor='var(--forest)'
              />
            </div>
          </form>
          <p className={styles.registerLink}>
            ¿No tienes cuenta? <a href='/register'>Crear cuenta</a>
          </p>
          <div className={styles.socialLogin}>
            <p>O inicia sesión con</p>
            <div className={styles.socialLogin2}>
              <GoogleButton onError={(message) => setErrorMessage(message)} />
            </div>
          </div>
        </div>
        <div className={styles.imageContainer}>
          <ResponsiveImage />
        </div>
      </div>
    </div>
  );
}

export default Login;

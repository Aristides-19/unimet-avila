import React, { useEffect, useState } from 'react';
import { useLoginUser, useLoginValidation } from '../../hooks/useAuth.js';

import styles from './Login.module.css';
import ResponsiveImage from './ResponsiveIMGlogin.jsx';
import GoogleButton from '../../components/GoogleButton/GoogleButton';
import Button from '../../components/Button/Button';
import BackButton from '../../components/BackButton/BackButton';
import ErrorMessage from '../../components/ErrorMessage/ErrorMessage.jsx';
import InputField from '../../components/InputField/InputField.jsx';
import { useAuth } from '../../context/AuthContext.jsx';
import { useNavigate } from 'react-router-dom';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
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
      navigate('/home');
    }
  }, [currentUser]);

  useEffect(() => {
    setError(errorLogin);
  }, [errorLogin]);

  return (
    <div style={{ display: 'flex', height: '80vh' }}>
      <div className={styles.registerForm}>
        <BackButton />
        <h2>Iniciar sesión</h2>
        {error && <ErrorMessage message={error} />}
        <form onSubmit={handleSubmit} noValidate>
          <InputField
            type='email'
            name='email'
            placeholder='Correo Electrónico'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          {errors.email && <span>{errors.email}</span>}
          <InputField
            type='password'
            name='password'
            placeholder='Contraseña'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          {errors.password && <span>{errors.password}</span>}
          <Button
            text='Iniciar Sesión'
            type='submit'
            color='var(--sunlight)'
            backgroundColor='var(--earth-sky)'
            hoverBackgroundColor='var(--forest)'
          />
          <GoogleButton onError={(message) => setError(message)} />
        </form>
      </div>

      <div style={{ flex: 1, justifyContent: 'center' }}>
        <ResponsiveImage />
      </div>
    </div>
  );
}

export default Login;

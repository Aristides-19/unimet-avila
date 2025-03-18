import React, { useEffect, useState } from 'react';
import { useRegisterUser, useRegisterValidation } from '../../hooks/useAuth.js';
import { useAuth } from '../../context/AuthContext.jsx';
import { useNavigate } from 'react-router-dom';

import InputField from '../../components/InputField/InputField';
import SelectField from '../../components/SelectField/SelectField';
import ErrorMessage from '../../components/ErrorMessage/ErrorMessage';
import SuccessMessage from '../../components/SuccessMessage/SuccessMessage';
import Button from '../../components/Button/Button';
import BackButton from '../../components/BackButton/BackButton';
import GoogleButton from '../../components/GoogleButton/GoogleButton';
import styles from './Register.module.css';

const Register = () => {
  const [formData, setFormData] = useState({
    name: '',
    lastName: '',
    genre: '',
    phone: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const [successMessage, setSuccessMessage] = useState(null);
  const [errorMessage, setErrorMessage] = useState(null);
  const { errors, validateForm } = useRegisterValidation();
  const { register, error: error } = useRegisterUser();
  const { currentUser } = useAuth();
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validateForm(formData)) {
      await register(formData);
    }
  };

  useEffect(() => {
    if (currentUser) {
      setSuccessMessage('Registro exitoso. Redirigiendo...');
      setTimeout(() => {
        navigate('/');
      }, 2000);
    }
  }, [currentUser]);

  useEffect(() => {
    setErrorMessage(error);
  }, [error]);

  return (
    <div className={styles.pageContainer}>
      {/*Imagen a la izquierda*/}
      <div className={styles.leftSection}></div>

      {/*Formulario de registro a la derecha*/}
      <div className={styles.rightSection}>
        <div className={styles.registerForm}>
          {/*Boton de regresae*/}
          <div className={styles.backButtonContainer}>
            <BackButton where='/' />
          </div>
          <h2>Crear Cuenta</h2>
          {successMessage && <SuccessMessage message={successMessage} />}
          {errorMessage && <ErrorMessage message={errorMessage} />}

          <form onSubmit={handleSubmit} noValidate>
            {/* Nombre y Apellido en la misma línea */}
            <div className={styles.row}>
              <div className={styles.formGroup}>
                <label>Nombre</label>
                <InputField
                  type='text'
                  name='name'
                  placeholder='Nombre'
                  value={formData.name}
                  onChange={handleChange}
                />
                {errors.name && <span>{errors.name}</span>}
              </div>
              <div className={styles.formGroup}>
                <label>Apellido</label>
                <InputField
                  type='text'
                  name='lastName'
                  placeholder='Apellido'
                  value={formData.lastName}
                  onChange={handleChange}
                />
                {errors.lastName && <span>{errors.lastName}</span>}
              </div>
            </div>

            {/* Género y Número de Teléfono en la misma línea */}
            <div className={styles.row}>
              <div className={styles.formGroup}>
                <label>Genéro</label>
                <SelectField
                  name='genre'
                  value={formData.genre}
                  onChange={handleChange}
                  options={['Masculino', 'Femenino', 'N/A']}
                />
                {errors.genre && <span>{errors.genre}</span>}
              </div>
              <div className={styles.formGroup}>
                <label>Número de Teléfono</label>
                <InputField
                  type='tel'
                  name='phone'
                  placeholder='Número de Teléfono'
                  value={formData.phone}
                  onChange={handleChange}
                />
                {errors.phone && <span>{errors.phone}</span>}
              </div>
            </div>

            <div className={styles.formGroup}>
              <label>Correo Electrónico</label>
              <InputField
                type='email'
                name='email'
                placeholder='Correo Electrónico'
                value={formData.email}
                onChange={handleChange}
              />
              {errors.email && <span>{errors.email}</span>}
            </div>
            <div className={styles.formGroup}>
              <label>Contraseña</label>
              <InputField
                type='password'
                name='password'
                placeholder='Contraseña'
                value={formData.password}
                onChange={handleChange}
              />
              {errors.password && <span>{errors.password}</span>}
            </div>
            <div className={styles.formGroup}>
              <label>Confirmar Contraseña</label>
              <InputField
                type='password'
                name='confirmPassword'
                placeholder='Confirmar Contraseña'
                value={formData.confirmPassword}
                onChange={handleChange}
              />
              {errors.confirmPassword && <span>{errors.confirmPassword}</span>}
            </div>
            <Button
              text='Crear Cuenta'
              type='submit'
              color='var(--sunlight)'
              backgroundColor='var(--earth-sky)'
              hoverBackgroundColor='var(--forest)'
            />
          </form>
          <p className={styles.loginLink}>
            ¿Ya tienes una cuenta?<a href='/login'>Iniciar Sesión</a>
          </p>
          <div className={styles.socialRegister}>
            <p>O regístrate con</p>
            <div className={styles.socialRegister2}>
              <GoogleButton onError={(message) => setErrorMessage(message)} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;

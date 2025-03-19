'use client';
import React, { useState } from 'react';
import InputField from '../../components/InputField/InputField';
import styles from './EditProfile.module.css';
import Button from '../../components/Button/Button';

function EditProfile() {
  const [formData, setFormData] = useState({
    name: '',
    lastName: '',
    genre: '',
    phone: '',
    email: '',
    password: '',
    confirmPassword: '',
  });
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmit = async (e) => {
    /*Colcar aqui la funcionalidad de editar la informacion del user*/
  };

  return (
    <form onSubmit={handleSubmit} className={styles.div}>
      <section className={styles.div2}>
        <div className={styles.div3}>
          <label className={styles.div4}>Nombre</label>
          <InputField
            type='text'
            name='Nombre'
            placeholder='Nombre'
            value={formData.name}
            onChange={handleChange}
          />
        </div>
        <div className={styles.div3}>
          <label className={styles.div4}>Apellido</label>
          <InputField
            type='text'
            name='Apellido'
            placeholder='Apellido'
            value={formData.lastName}
            onChange={handleChange}
          />
        </div>
        <div className={styles.div3}>
          <label className={styles.div4}>Genero</label>
          <InputField
            type='text'
            name='Genero'
            placeholder='Genero'
            value={formData.genre}
            onChange={handleChange}
          />
        </div>
      </section>

      <div className={styles.div3}>
        <label className={styles.div4}>Correo Electronico</label>
        <InputField
          type='email'
          name='email'
          placeholder='Correo'
          value={formData.email}
          onChange={handleChange}
        />
      </div>

      <div className={styles.div3}>
        <label className={styles.div4}>Telefono</label>
        <InputField
          type='tel'
          name='phone'
          placeholder='Numero de telefono'
          value={formData.phone}
          onChange={handleChange}
        />
      </div>

      <div className={styles.div3}>
        <label className={styles.div4}>Contraseña</label>
        <InputField
          type='password'
          name='password'
          placeholder='contraseña'
          value={formData.password}
          onChange={handleChange}
        />
      </div>

      <Button
        text='Guardar'
        type='submit'
        color='var(--sunlight)'
        backgroundColor='var(--earth-sky)'
        hoverBackgroundColor='var(--forest)'
      />
    </form>
  );
}

export default EditProfile;

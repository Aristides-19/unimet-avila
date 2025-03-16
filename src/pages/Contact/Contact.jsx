import React, { useState } from 'react';
import styles from './Contact.module.css';
import Button from '../../components/Button/Button';
import InputField from '../../components/InputField/InputField';
import TextArea from '../../components/TextArea/TextArea';
import { doc, setDoc } from 'firebase/firestore';
import { db } from '../../firebase';
import { MdLocationCity } from 'react-icons/md';
import { MdAddIcCall } from 'react-icons/md';
import { TbMailFilled } from 'react-icons/tb';

function Contact() {
  const [formData, setFormData] = useState({
    nombre: '',
    apellido: '',
    email: '',
    telefono: '',
    mensaje: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const user = { uid: 'example-uid' };
    await setDoc(doc(db, 'mensajes usuarios', user.uid), {
      nombre: formData.nombre,
      apellido: formData.apellido,
      correo: formData.email,
      telefono: formData.telefono,
      mensaje: formData.mensaje,
      uid: user.uid,
    });
  };

  return (
    <div className={styles.contact}>
      <div className={styles.contactContainer}>
        <div className={styles.contactInfo}>
          <h1 className={styles.title}>Contáctanos</h1>
          <p className={styles.subtitle}>
            ¿Tienes preguntas, comentarios o sugerencias? Simplemente completa
            el formulario y te escribiremos.
          </p>

          <div className={styles.contactDetails}>
            <div className={styles.iconWrapper}>
              <MdLocationCity className={styles.icon} />
              <a className={styles.contactItem}>
                Universidad Metropolitana, Caracas, Venezuela.
              </a>
            </div>

            <div className={styles.iconWrapper}>
              <MdAddIcCall className={styles.icon} />
              <a className={styles.contactItem} href='tel:+582121234567'>
                +58 212 123 4567
              </a>
            </div>

            <div className={styles.iconWrapper}>
              <TbMailFilled className={styles.icon} />
              <a
                className={styles.contactItem}
                href='mailto:contacto@unimetavila.com'
              >
                contacto@unimetavila.com
              </a>
            </div>
          </div>
        </div>
        <div className={styles.contactForm}>
          <form className={styles.form} onSubmit={handleSubmit}>
            <div className={styles.nameSurnameContainer}>
              <InputField
                type='text'
                name='nombre'
                placeholder='Nombre*'
                value={formData.nombre}
                onChange={handleChange}
                required
              />
              <InputField
                type='text'
                name='apellido'
                placeholder='Apellido*'
                value={formData.apellido}
                onChange={handleChange}
                required
              />
            </div>
            <div className={styles.inputsContainer}>
              <InputField
                type='email'
                name='email'
                placeholder='Email*'
                value={formData.email}
                onChange={handleChange}
                required
              />
              <InputField
                type='text'
                name='telefono'
                placeholder='Teléfono*'
                value={formData.titulo}
                onChange={handleChange}
                required
              />
              <TextArea
                name='mensaje'
                placeholder='Mensaje'
                value={formData.mensaje}
                onChange={handleChange}
                required
              />
              <Button
                text='Enviar mensaje'
                type='submit'
                borderRadius='10px'
                color='#fff'
                backgroundColor='#333'
                onClick={() => {}}
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;

import React, { useState, useEffect } from 'react';
import styles from './Contact.module.css';
import Button from '../../components/Button/Button';
import InputField from '../../components/InputField/InputField';
import TextArea from '../../components/TextArea/TextArea';
import { MdLocationCity } from 'react-icons/md';
import { MdAddIcCall } from 'react-icons/md';
import { TbMailFilled } from 'react-icons/tb';
import { useAuth } from '../../context/AuthContext.jsx';
import { useUser } from '../../hooks/useUsers.js';
import { useSendEmail } from '../../hooks/useEmail.js';
import SuccessMessage from '../../components/SuccessMessage/SuccessMessage.jsx';
import ErrorMessage from '../../components/ErrorMessage/ErrorMessage.jsx';

function Contact() {
  const { currentUser } = useAuth();
  const { user } = useUser(currentUser?.uid);
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    mensaje: '',
  });
  const { sendEmail, error: error } = useSendEmail();
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    if (currentUser) {
      setFormData((prevData) => ({
        ...prevData,
        nombre: user?.name || '',
        email: user?.email || '',
      }));
    }
  }, [user]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await sendEmail(
      ['unimetavila@gmail.com'],
      `Contacto de ${formData.nombre}`,
      `${formData.email} dice: ${formData.mensaje}`
    );
    if (!error) {
      setSuccess(true);
      setFormData({
        nombre: '',
        email: '',
        mensaje: '',
      });
    }
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
                href='mailto:unimetavila@gmail.com'
              >
                unimetavila@gmail.com
              </a>
            </div>
            {success && (
              <SuccessMessage message='Mensaje enviado correctamente' />
            )}
            {error && <ErrorMessage message='Error al enviar el mensaje' />}
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

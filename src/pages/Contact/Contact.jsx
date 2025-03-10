import React, { useState } from 'react';
import styles from './Contact.module.css';
import Button from '../../components/Button/Button';
import InputField from '../../components/InputField/InputField';
import TextArea from '../../components/TextArea/TextArea';
import { doc, setDoc } from 'firebase/firestore';
import { db } from '../../firebase';

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
              <svg className={styles.svg} viewBox='0 0 24 24'>
                <g>
                  <path d='M12,6a4,4,0,1,0,4,4A4,4,0,0,0,12,6Zm0,6a2,2,0,1,1,2-2A2,2,0,0,1,12,12Z'></path>
                  <path d='M12,24a5.271,5.271,0,0,1-4.311-2.2c-3.811-5.257-5.744-9.209-5.744-11.747a10.055,10.055,0,0,1,20.11,0c0,2.538-1.933,6.49-5.744,11.747A5.271,5.271,0,0,1,12,24ZM12,2.181a7.883,7.883,0,0,0-7.874,7.874c0,2.01,1.893,5.727,5.329,10.466a3.145,3.145,0,0,0,5.09,0c3.436-4.739,5.329-8.456,5.329-10.466A7.883,7.883,0,0,0,12,2.181Z'></path>
                </g>
              </svg>
              <a className={styles.contactItem}>
                Universidad Metropolitana, Caracas, Venezuela.
              </a>
            </div>

            <div className={styles.iconWrapper}>
              <svg className={styles.svg} viewBox='0 0 24 24'>
                <path d='M13,1a1,1,0,0,1,1-1A10.011,10.011,0,0,1,24,10a1,1,0,0,1-2,0,8.009,8.009,0,0,0-8-8A1,1,0,0,1,13,1Zm1,5a4,4,0,0,1,4,4,1,1,0,0,0,2,0,6.006,6.006,0,0,0-6-6,1,1,0,0,0,0,2Zm9.093,10.739a3.1,3.1,0,0,1,0,4.378l-.91,1.049c-8.19,7.841-28.12-12.084-20.4-20.3l1.15-1A3.081,3.081,0,0,1,7.26.906c.031.031,1.884,2.438,1.884,2.438a3.1,3.1,0,0,1-.007,4.282L7.979,9.082a12.781,12.781,0,0,0,6.931,6.945l1.465-1.165a3.1,3.1,0,0,1,4.281-.006S23.062,16.708,23.093,16.739Zm-1.376,1.454s-2.393-1.841-2.424-1.872a1.1,1.1,0,0,0-1.549,0c-.027.028-2.044,1.635-2.044,1.635a1,1,0,0,1-.979.152A15.009,15.009,0,0,1,5.9,9.3a1,1,0,0,1,.145-1S7.652,6.282,7.679,6.256a1.1,1.1,0,0,0,0-1.549c-.031-.03-1.872-2.425-1.872-2.425a1.1,1.1,0,0,0-1.51.039l-1.15,1C-2.495,10.105,14.776,26.418,20.721,20.8l.911-1.05A1.121,1.121,0,0,0,21.717,18.193Z' />
              </svg>
              <a className={styles.contactItem} href='tel:+582121234567'>
                +58 212 123 4567
              </a>
            </div>

            <div className={styles.iconWrapper}>
              <svg className={styles.svg} viewBox='0 0 24 24'>
                <path d='M19,1H5A5.006,5.006,0,0,0,0,6V18a5.006,5.006,0,0,0,5,5H19a5.006,5.006,0,0,0,5-5V6A5.006,5.006,0,0,0,19,1ZM5,3H19a3,3,0,0,1,2.78,1.887l-7.658,7.659a3.007,3.007,0,0,1-4.244,0L2.22,4.887A3,3,0,0,1,5,3ZM19,21H5a3,3,0,0,1-3-3V7.5L8.464,13.96a5.007,5.007,0,0,0,7.072,0L22,7.5V18A3,3,0,0,1,19,21Z' />
              </svg>
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

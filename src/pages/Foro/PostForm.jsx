import React, { useState } from 'react';
import styles from './PostForm.module.css';
import BackButton from '../../components/BackButton/BackButton';
import TextArea from '../../components/TextArea/TextArea';
import { FiSend } from 'react-icons/fi';

const PostForm = () => {
  const [content, setContent] = useState(''); // Estado para el contenido del texto

  const handleContentChange = (e) => {
    setContent(e.target.value); // Actualiza el estado con el valor del TextArea
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const postTitle = e.target.title.value;

    // Simula el envío al backend o la generación de un ID de post
    const newPost = {
      id: Date.now(), // Genera un ID único basado en la marca de tiempo
      title: postTitle,
      content: content, // Contenido del textarea
    };

    console.log('Nuevo post creado:', newPost);
    alert('¡Publicación creada con éxito!');
  };

  return (
    <main className={styles.mainLayout}>
      <div>
        <BackButton text='Regresar' />
      </div>

      <section className={styles.formSection}>
        <form className={styles.postForm} onSubmit={handleSubmit}>
          {/* Input para el título del post */}
          <input
            type='text'
            name='title'
            placeholder='Escribe un título que llame la atención'
            className={styles.titleInput}
          />

          {/* TextArea para el contenido del post */}
          <TextArea
            name='content'
            placeholder='Escribe el contenido aquí...'
            value={content}
            onChange={handleContentChange}
            required
          />

          {/* Botón de envío */}
          <div className={styles.formActions}>
            <button type='submit' className={styles.submitButton}>
              <FiSend />
              <span>Subir</span>
            </button>
          </div>
        </form>
      </section>
    </main>
  );
};

export default PostForm;

import React, { useState, useRef, useEffect } from 'react';
import Quill from 'quill'; // Importar Quill
import 'quill/dist/quill.snow.css'; // Estilos del tema de Quill
import styles from './PostForm.module.css';
import BackButton from '../../components/BackButton/BackButton';

const PostForm = () => {
  const [content, setContent] = useState('');
  const editorRef = useRef(null);
  const quillRef = useRef(null); // Ref to store Quill instance

  useEffect(() => {
    if (editorRef.current && !quillRef.current) {
      // Inicializa Quill solo si el contenedor está montado y no ha sido inicializado
      quillRef.current = new Quill(editorRef.current, {
        theme: 'snow',
        modules: {
          toolbar: [
            ['bold', 'italic', 'underline'], // Opciones de formato
            [{ list: 'ordered' }, { list: 'bullet' }], // Listas ordenadas y desordenadas
          ],
        },
      });

      // Captura cambios en el contenido del editor
      quillRef.current.on('text-change', () => {
        setContent(quillRef.current.root.innerHTML); // Guarda el contenido como HTML
      });
    }

    return () => {
      // Cleanup Quill instance on component unmount
      if (quillRef.current) {
        quillRef.current = null;
      }
    };
  }, []); // Empty dependency array to run only once

  const handleSubmit = (e) => {
    e.preventDefault();
    const postTitle = e.target.title.value;

    // Simula el envío al backend o la generación de un ID de post
    const newPost = {
      id: Date.now(), // Genera un ID único basado en la marca de tiempo
      title: postTitle,
      content: content,
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

          {/* Editor de texto enriquecido (Quill) */}
          <div ref={editorRef} className={styles.richTextEditor}></div>

          {/* Botón de envío */}
          <div className={styles.formActions}>
            <button type='submit' className={styles.submitButton}>
              <img
                src='https://cdn.builder.io/api/v1/image/assets/TEMP/ca08b27d0294900569be556bb19f8d4ccef997e7399950b09abb985f436438a1?placeholderIfAbsent=true&apiKey=379dcc3781e848d49484b005eb1b3adf'
                alt='Upload'
                className={styles.buttonIcon}
              />
              <span>Subir</span>
            </button>
          </div>
        </form>
      </section>
    </main>
  );
};

export default PostForm;

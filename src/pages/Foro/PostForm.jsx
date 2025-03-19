import React, { useState } from 'react';
import styles from './PostForm.module.css';
import BackButton from '../../components/BackButton/BackButton';
import TextArea from '../../components/TextArea/TextArea';
import { FiSend } from 'react-icons/fi';
import Button from '../../components/Button/Button.jsx';
import InputField from '../../components/InputField/InputField.jsx';
import { useAuth } from '../../context/AuthContext.jsx';
import { useCreateQuestion } from '../../hooks/useForum.js';
import { useNavigate } from 'react-router-dom';
import SuccessMessage from '../../components/SuccessMessage/SuccessMessage.jsx';
import ErrorMessage from '../../components/ErrorMessage/ErrorMessage.jsx';

const PostForm = () => {
  const [content, setContent] = useState('');
  const [title, setTitle] = useState('');
  const { create, error: error } = useCreateQuestion();
  const navigate = useNavigate();
  const { currentUser } = useAuth();
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    await create(currentUser?.uid, title, content);
    if (!error) {
      setSuccess(true);
      setTitle('');
      setContent('');
      setTimeout(() => {
        navigate(`/forum`);
      }, 2000);
    }
  };

  return (
    <main className={styles.mainLayout}>
      <div>
        <BackButton text='Regresar' where='/forum' />
      </div>

      <section>
        <form className={styles.postForm} onSubmit={handleSubmit}>
          <InputField
            type='text'
            name='title'
            placeholder='Escribe un título que llame la atención'
            required
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <TextArea
            name='content'
            placeholder='Escribe el contenido aquí...'
            value={content}
            onChange={(e) => setContent(e.target.value)}
            required
          />
          <div className={styles.formActions}>
            {success && (
              <SuccessMessage message='Pregunta Creada Exitosamente' />
            )}
            {error && <ErrorMessage message='Error al crear la pregunta' />}
            {!success && (
              <Button
                color='var(--forest)'
                backgroundColor='var(--earth-sky)'
                text='Subir'
                icon={<FiSend />}
                type='submit'
                className={styles.submitButton}
              />
            )}
          </div>
        </form>
      </section>
    </main>
  );
};

export default PostForm;

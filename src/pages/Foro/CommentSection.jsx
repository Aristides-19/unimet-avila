import React, { useState } from 'react';
import CommentCard from './CommentCard';
import styles from './CommentSection.module.css';
import Button from '../../components/Button/Button.jsx';
import InputField from '../../components/InputField/InputField.jsx';
import { useParams } from 'react-router-dom';
import {
  useCreateAnswer,
  useGetAnswersByQuestionId,
} from '../../hooks/useForum.js';
import { formatDistanceToNow } from 'date-fns';
import { es } from 'date-fns/locale';
import { useAuth } from '../../context/AuthContext.jsx';
import ErrorMessage from '../../components/ErrorMessage/ErrorMessage.jsx';

const CommentSection = () => {
  const { postId } = useParams();
  const [refresh, setRefresh] = useState(false);
  const { answers } = useGetAnswersByQuestionId(postId, refresh);
  const { create, error: error } = useCreateAnswer();
  const [answer, setAnswer] = useState('');
  const { currentUser } = useAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();
    await create(currentUser?.uid, answer, postId);
    setAnswer('');
    setRefresh((prev) => !prev);
  };

  return (
    <section className={styles.comments}>
      <h2 className={styles.title}>Respuestas</h2>
      {currentUser && (
        <div className={styles.inputSection}>
          <form className={styles.inputContainer} onSubmit={handleSubmit}>
            <InputField
              type='text'
              name='answer'
              placeholder='Escribe aquí tu respuesta'
              required
              className={styles.input}
              value={answer}
              onChange={(e) => setAnswer(e.target.value)}
            />
            <div className={styles.buttonGroup}>
              <Button
                color='var(--sunlight)'
                backgroundColor='var(--forest)'
                text='Publicar'
                type='submit'
              />
            </div>
          </form>
        </div>
      )}

      <div className={styles.commentList}>
        {error && <ErrorMessage message='Error al crear la respuesta' />}
        {answers.map((post) => {
          return (
            <CommentCard
              key={post.id}
              answer={{
                ...post,
                createdAt: formatDistanceToNow(post.createdAt.toDate(), {
                  addSuffix: true,
                  locale: es,
                }),
              }}
            />
          );
        })}
      </div>
    </section>
  );
};

export default CommentSection;

import React, { useState } from 'react';
import styles from './ReviewForm.module.css';
import BackButton from '../../../components/BackButton/BackButton';
import TextArea from '../../../components/TextArea/TextArea';
import { FiSend } from 'react-icons/fi';
import Button from '../../../components/Button/Button.jsx';
import { useAuth } from '../../../context/AuthContext.jsx';
import { useNavigate, useParams } from 'react-router-dom';
import SuccessMessage from '../../../components/SuccessMessage/SuccessMessage.jsx';
import ErrorMessage from '../../../components/ErrorMessage/ErrorMessage.jsx';
import { useCreateReview } from '../../../hooks/useReviews.js';
import { Rating } from 'react-simple-star-rating';
import { useExcursionById } from '../../../hooks/useExcursions.js';

const ReviewForm = () => {
  const { excursionId } = useParams();
  const { excursion } = useExcursionById(excursionId);
  const [review, setReview] = useState('');
  const [rating, setRating] = useState(0);
  const { create, error: error } = useCreateReview();
  const navigate = useNavigate();
  const { currentUser } = useAuth();
  const [success, setSuccess] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  if (!excursion) return <></>;

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitted(true);
    if (rating === 0) {
      return;
    }
    await create(currentUser?.uid, excursionId, review, rating);
    if (!error) {
      setSuccess(true);
      setReview('');
      setTimeout(() => {
        navigate(`/excursions/${excursionId}`);
      }, 2000);
    }
  };

  return (
    <main className={styles.mainLayout}>
      <div>
        <BackButton text='Regresar' where={`/excursions/${excursionId}`} />
      </div>

      <section>
        <form className={styles.postForm} onSubmit={handleSubmit}>
          <Rating
            size={30}
            fillColor={'var(--unimet)'}
            initialValue={rating}
            onClick={(rate) => setRating(rate)}
            titleSeparator='de'
            transition={true}
          />
          <TextArea
            name='content'
            placeholder='Escribe tu reseña aquí...'
            value={review}
            onChange={(e) => setReview(e.target.value)}
            required
          />
          <div className={styles.formActions}>
            {success && <SuccessMessage message='Reseña creada exitosamente' />}
            {isSubmitted && rating === 0 && !success && (
              <ErrorMessage message='La calificación es obligatoria' />
            )}
            {error && <ErrorMessage message='Error al crear la reseña' />}
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

export default ReviewForm;

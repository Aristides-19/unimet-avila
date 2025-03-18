import React from 'react';
import CommentSection from './CommentSection';
import PropTypes from 'prop-types';
import styles from './ThreadContent.module.css';
import BackButton from '../../components/BackButton/BackButton';

const ThreadContent = () => {
  return (
    <section className={styles.content}>
      <div className={styles.backNav}>
        <div className={styles.backNav}>
          <BackButton text='Regresar' />
        </div>
      </div>

      <article className={styles.container}>
        <div className={styles.mainPost}>
          <div className={styles.postHeader}>
            <img
              src='https://placehold.co/40x40/4B5563/4B5563'
              alt='User'
              className={styles.userAvatar}
            />
            <div className={styles.postContent}>
              <div className={styles.postMeta}>
                <div className={styles.userInfo}>
                  <span className={styles.username}>@danielgiya</span>
                  <span className={styles.timestamp}>
                    12 Noviembre 2023 19:35
                  </span>
                </div>
                <button className={styles.menuButton}>
                  <i className='ti ti-dots' />
                </button>
              </div>
              <h1 className={styles.postTitle}>Ruta Sur</h1>
              <p className={styles.postText}>
                ¡Hola a todos!
                <br />
                <br />
                Quería contarles brevemente mi experiencia en la ruta sur del
                Ávila. El sendero estaba lleno de sorpresas, y aunque encontré
                algunos tramos complicados, la vista en la cima hizo que todo
                valiera la pena.
                <br />
                <br />
                ¿Alguien más ha recorrido esta ruta? Me gustaría saber si tienen
                algún consejo para mejorar la experiencia.
              </p>
            </div>
          </div>
        </div>

        <CommentSection />
      </article>
    </section>
  );
};

ThreadContent.propTypes = {
  postId: PropTypes.string.isRequired, // Validación del prop postId
};

export default ThreadContent;

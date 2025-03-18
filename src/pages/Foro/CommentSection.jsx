import React from 'react';
import CommentCard from './CommentCard';
import styles from './CommentSection.module.css';

const CommentSection = () => {
  return (
    <section className={styles.comments}>
      <h2 className={styles.title}>Respuestas</h2>

      <div className={styles.inputSection}>
        <div className={styles.inputContainer}>
          <input
            type='text'
            placeholder='Escribe aquí tu respuesta'
            className={styles.input}
          />
          <div className={styles.buttonGroup}>
            <button className={styles.cancelButton}>Cancelar</button>
            <button className={styles.submitButton}>Publicar</button>
          </div>
        </div>
      </div>

      <div className={styles.commentList}>
        <CommentCard
          username='@parkind'
          timestamp='12 Noviembre 2023 19:35'
          content='Gracias por compartir tu experiencia. Yo también recorrí la ruta sur y te recomiendo llevar una chaqueta impermeable, ya que el clima puede cambiar rápidamente. ¡Espero que sigas disfrutando de nuevas aventuras!'
          likes={12}
        />
        <CommentCard
          username='@morgenstern'
          timestamp='12 Noviembre 2023 19:53'
          content='Me alegra ver que otros disfrutan de esta ruta. Una sugerencia es utilizar bastones de trekking, que ayudan a mantener el equilibrio en terrenos irregulares. ¡Sigue compartiendo tus experiencias!'
          likes={256}
        />
        <CommentCard
          username='@kzaru'
          timestamp='12 Noviembre 2023 18:25'
          content='Excelente resumen. Mi consejo es empezar temprano para evitar las horas de más calor y aprovechar la luz del día. Además, siempre revisar el pronóstico del tiempo antes de salir.'
          likes={1}
        />
      </div>
    </section>
  );
};

export default CommentSection;

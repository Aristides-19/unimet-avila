import React from 'react';
import styles from './Goals.module.css';

const Goals = () => {
  return (
    <div className={styles.section}>
      <div className={styles.leftContainer}>
        <div className={styles.headerContainer}>
          <header className={styles.headerWrapper}>
            <h1 className={styles.header}>
              <span className={`${styles.title} ${styles.primaryColor}`}>
                Metas claras,{' '}
              </span>
              <span className={`${styles.title} ${styles.accentColor}`}>
                aventuras inolvidables
              </span>
            </h1>
          </header>
        </div>
      </div>
      <div className={styles.rightContainer}>
        <div className={styles.pairGroup}>
          <div>
            <h2 className={styles.headingSecondary}>Informar</h2>
            <p className={styles.articleParagraph}>
              Explora las mejores rutas con información clave: puntos de
              interés, equipo necesario y fotos impresionantes. ¡Planifica tu
              aventura perfecta!
            </p>
          </div>
          <div>
            <h2 className={styles.headingSecondary}>Simplificar</h2>
            <p className={styles.articleParagraph}>
              Reserva tus actividades en segundos con un sistema seguro, fácil y
              confiable. ¡Tu elección, tu tiempo, sin complicaciones!
            </p>
          </div>
        </div>
        <div className={styles.pairGroup}>
          <div>
            <h2 className={styles.headingSecondary}>Optimizar</h2>
            <p className={styles.articleParagraph}>
              Disfruta de una navegación fluida con un diseño simple de usar que
              se adapta a cualquier dispositivo. ¡Fácil, rápido y sin límites!
            </p>
          </div>
          <div>
            <h2 className={styles.headingSecondary}>Conservar</h2>
            <p className={styles.articleParagraph}>
              Consejos para excursionistas y educación sobre la conservación del
              Parque Nacional El Ávila. ¡Explora y protege la naturaleza!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Goals;

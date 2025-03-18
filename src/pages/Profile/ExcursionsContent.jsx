import React from 'react';
import styles from './ExcursionsContent.module.css';
import image from '../../assets/404-NotFound-Illustration.png';

function ExcursionsContent() {
  return (
    <section className={styles.excursionsContainer}>
      <h2 className={styles.sectionTitle}>Mis excursiones</h2>
      <div className={styles.excursionsContent}>
        <div className={styles.emptyState}>
          <img
            src={image}
            alt='No excursions'
            className={styles.emptyStateIcon}
          />
          <h3 className={styles.emptyStateTitle}>No tienes excursiones</h3>
          <p className={styles.emptyStateText}>
            Cuando reserves una excursión, aparecerá aquí para que puedas
            gestionarla.
          </p>
          <button className={styles.browseButton}>
            <div className={styles.buttonContent}>Explorar excursiones</div>
          </button>
        </div>
      </div>
    </section>
  );
}

export default ExcursionsContent;

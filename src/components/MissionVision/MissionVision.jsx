import React from 'react';
import styles from './MissionVision.module.css';
import PropTypes from 'prop-types';

const Section = ({ title, text, image, imageRight = false }) => {
  return (
    <div
      className={`${styles.sectionContainer} ${imageRight ? styles.reverseMargins : ''}`}
    >
      {/* Contenedor de la imagen */}
      <div
        className={`${styles.imageContainer} ${
          imageRight ? styles.imageRight : ''
        }`}
      >
        <img src={image} alt={title} className={styles.sectionImage} />
      </div>

      {/* Contenedor del texto */}
      <div
        className={`${styles.textContainer} ${
          imageRight ? styles.textLeft : ''
        }`}
      >
        <h1 className={styles.title}>{title}</h1>
        <p className={styles.paragraph}>{text}</p>
      </div>
    </div>
  );
};
Section.propTypes = {
  title: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  imageRight: PropTypes.bool,
};

export default Section;

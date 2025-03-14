import React from 'react';
import styles from './NoticeBlogCard.module.css'; // Importa el archivo CSS para estilos
import PropTypes from 'prop-types';

const Card = ({ imageUrl, title, content }) => {
  return (
    <div className={styles.card}>
      <div className={styles.cardImageContainer}>
        <img src={imageUrl} alt={title} className={styles.cardimage} />
      </div>
      <div className={styles.cardcontent}>
        <h2 className={styles.cardtitle}>{title}</h2>
        <p className={styles.cardtext}>{content}</p>
      </div>
    </div>
  );
};

Card.propTypes = {
  imageUrl: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
};

export default Card;

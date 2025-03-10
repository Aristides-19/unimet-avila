import React from 'react';
import PropTypes from 'prop-types';
import styles from './TestimonialCard.module.css';

function TestimonialCard({ name, title, review, image, stars }) {
  return (
    <div className={styles.card}>
      <img src={image} alt={`Foto de ${name}`} className={styles.profile} />
      <h3>{name}</h3>
      <h4>{title}</h4>
      <p>{review}</p>
      <div className={styles.stars}>{'⭐'.repeat(stars)}</div>
    </div>
  );
}

TestimonialCard.propTypes = {
  name: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  review: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  stars: PropTypes.number.isRequired,
};

export default TestimonialCard;

import React from 'react';
import PropTypes from 'prop-types';
import { Card } from '../../Card/Card.jsx';
import { Rating } from 'react-simple-star-rating';
import { FaQuoteLeft } from 'react-icons/fa';
import styles from './TestimonialCard.module.css';

function TestimonialCard({ name, comment, image, rating }) {
  comment = comment.length > 165 ? comment.slice(0, 165) + '...' : comment;

  return (
    <Card padding={'20px'} gap={'0'} additionalStyles={styles.card}>
      <FaQuoteLeft className={styles.icon} size={28} />
      <p className={styles.review}>{comment}</p>
      <Rating
        initialValue={rating}
        readonly={true}
        size={20}
        fillColor={'var(--unimet)'}
      ></Rating>
      <div className={styles.userContainer}>
        <img src={image} alt={`Foto de ${name}`} className={styles.profile} />
        <h3 className={styles.name}>{name}</h3>
      </div>
    </Card>
  );
}

TestimonialCard.propTypes = {
  name: PropTypes.string.isRequired,
  comment: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired,
};

export default TestimonialCard;

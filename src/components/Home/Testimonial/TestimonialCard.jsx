import React from 'react';
import PropTypes from 'prop-types';
import { Card } from '../../Card/Card.jsx';
import { Rating } from 'react-simple-star-rating';
import { FaQuoteLeft } from 'react-icons/fa';
import styles from './TestimonialCard.module.css';

function TestimonialCard({ name, title, review, image, stars }) {
  title = title.length > 33 ? title.slice(0, 33) + '...' : title;
  review = review.length > 165 ? review.slice(0, 165) + '...' : review;

  return (
    <Card padding={'20px'} gap={'0'} additionalStyles={styles.card}>
      <FaQuoteLeft className={styles.icon} size={28} />
      <h3 className={styles.title}>{title}</h3>
      <p className={styles.review}>{review}</p>
      <Rating
        initialValue={stars}
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
  title: PropTypes.string.isRequired,
  review: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  stars: PropTypes.number.isRequired,
};

export default TestimonialCard;

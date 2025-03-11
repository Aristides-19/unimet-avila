import React from 'react';
import PropTypes from 'prop-types';

import {
  FaMapMarkerAlt,
  FaUser,
  FaCalendarAlt,
  FaStar,
  FaCoffee,
} from 'react-icons/fa';
import styles from './ExcursionCard.module.css';

const ExcursionCard = ({
  title,
  image,
  price,
  location,
  date,
  guide,
  difficulty,
  status,
  rating,
  ratingText,
  meal,
}) => {
  return (
    <article className={styles.card} style={{ minWidth: '700px' }}>
      <img src={image} alt={title} className={styles.image} />

      <div className={styles.details}>
        <header className={styles.header}>
          <h2 className={styles.title}>{title}</h2>
          <div className={styles.price}>
            <span>precio:</span>
            <div className={styles.amount}>${price}</div>
          </div>
        </header>

        <div className={styles.info}>
          <div className={styles.infoRow}>
            <div className={styles.infoItem}>
              <FaMapMarkerAlt />
              <span>{location}</span>
            </div>
            <div className={styles.infoItem}>
              <FaCalendarAlt />
              <span>{date}</span>
            </div>
          </div>

          <div className={styles.infoRow}>
            <div className={styles.infoItem}>
              <FaUser />
              <span>Guía: {guide}</span>
            </div>
            <div className={styles.infoItem}>
              <FaStar />
              <span>{difficulty}</span>
            </div>
          </div>

          <div className={styles.statusRow}>
            {status ? (
              <div className={styles.statusBadge}>{status}</div>
            ) : (
              <div className={styles.rating}>
                <span className={styles.ratingNumber}>{rating}</span>
                <span className={styles.ratingText}>{ratingText}</span>
              </div>
            )}
            <div className={styles.mealInfo}>
              <FaCoffee />
              <span>+ {meal}</span>
            </div>
          </div>
        </div>

        <hr className={styles.divider} />

        <button className={styles.detailsButton}>Ver Detalles</button>
      </div>
    </article>
  );
};

ExcursionCard.propTypes = {
  title: PropTypes.isRequired,
  image: PropTypes.isRequired,
  price: PropTypes.number.isRequired,
  location: PropTypes.isRequired,
  date: PropTypes.isRequired, // O PropTypes.instanceOf(Date) si usas objetos Date
  guide: PropTypes.isRequired,
  difficulty: PropTypes.isRequired,
  status: PropTypes.isRequired,
  rating: PropTypes.number,
  ratingText: PropTypes,
  meal: PropTypes,
};
export default ExcursionCard;

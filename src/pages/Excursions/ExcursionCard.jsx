import React from 'react';
import PropTypes from 'prop-types';
import { useUser } from '../../hooks/useUsers';
import { Card } from '../../components/Card/Card';

import {
  FaMapMarkerAlt,
  FaUser,
  FaCalendarAlt,
  FaStar,
  FaCoffee,
} from 'react-icons/fa';
import styles from './ExcursionCard.module.css';
import { Rating } from 'react-simple-star-rating';

const ExcursionCard = ({
  title,
  images,
  price,
  route,
  date,
  guideId,
  type,
  status,
  averageRating,
  hasLunch,
}) => {
  const day = String(date.getDate()).padStart(2, '0');
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const year = date.getFullYear();
  const { user: guide } = useUser(guideId ? guideId.id : null);

  return (
    <Card
      padding='0'
      gap='0'
      alignItems=''
      textAlign=''
      additionalStyles={styles.card}
    >
      <img
        src={
          images[0] ? images[0] : 'https://placehold.co/200x200/4a7c59/4a7c59'
        }
        alt={title}
        className={styles.image}
      />

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
              <span>{route}</span>
            </div>
            <div className={styles.infoItem}>
              <FaCalendarAlt />
              <span>{`${day}-${month}-${year}`}</span>
            </div>
          </div>

          <div className={styles.infoRow}>
            <div className={styles.infoItem}>
              <FaUser />
              <span>Guía: {guide ? guide.name : 'No Asignado'}</span>
            </div>
            <div className={styles.infoItem}>
              <FaStar />
              <span>{type}</span>
            </div>
          </div>

          <div className={styles.statusRow}>
            {status === 'Disponible' ? (
              <div className={styles.statusBadge}>{status}</div>
            ) : (
              <Rating
                initialValue={averageRating}
                readonly={true}
                size={20}
                fillColor={'var(--unimet)'}
              ></Rating>
            )}
            <div className={styles.infoItem}>
              <FaCoffee />
              <span>+ {hasLunch ? 'Almuerzo' : 'No incluye'}</span>
            </div>
          </div>
        </div>
      </div>
    </Card>
  );
};

ExcursionCard.propTypes = {
  title: PropTypes.string.isRequired,
  images: PropTypes.arrayOf(PropTypes.string).isRequired,
  price: PropTypes.number.isRequired,
  route: PropTypes.string.isRequired,
  date: PropTypes.instanceOf(Date), // O PropTypes.instanceOf(Date) si usas objetos Date
  guideId: PropTypes.object.isRequired,
  type: PropTypes.string.isRequired,
  status: PropTypes.string.isRequired,
  averageRating: PropTypes.number.isRequired,
  hasLunch: PropTypes.bool.isRequired,
};
export default ExcursionCard;

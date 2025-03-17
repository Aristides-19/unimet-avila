import React from 'react';
import PropTypes from 'prop-types';
import { useUser } from '../../../hooks/useUsers.js';
import styles from './ReviewCard.module.css';
import { Rating } from 'react-simple-star-rating';

export const ReviewCard = ({ comment, rating, studentId }) => {
  const { user } = useUser(studentId.id);
  return (
    <div className={styles.container}>
      <img src={user?.profilePicture} alt={user?.name} />
      <div className={styles.review}>
        <div className={styles.title}>
          <h4>{user?.name}</h4>
          <Rating
            initialValue={rating}
            readonly={true}
            size={15}
            fillColor={'var(--unimet)'}
          ></Rating>
        </div>
        <p>{comment}</p>
      </div>
    </div>
  );
};

ReviewCard.propTypes = {
  className: PropTypes.string.isRequired,
  comment: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired,
  studentId: PropTypes.shape({
    id: PropTypes.string.isRequired,
  }).isRequired,
};

import React from 'react';
import PropTypes from 'prop-types';
import styles from './CommentCard.module.css';

const CommentCard = ({ username, timestamp, content }) => {
  return (
    <article className={styles.comment}>
      <div className={styles.commentHeader}>
        <img
          src='https://placehold.co/40x40/4B5563/4B5563'
          alt='User'
          className={styles.userAvatar}
        />
        <div className={styles.commentContent}>
          <div className={styles.userInfo}>
            <span className={styles.username}>{username}</span>
            <span className={styles.timestamp}>{timestamp}</span>
          </div>
          <p className={styles.text}>{content}</p>
        </div>
      </div>
    </article>
  );
};
CommentCard.propTypes = {
  username: PropTypes.string.isRequired,
  timestamp: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
};

export default CommentCard;

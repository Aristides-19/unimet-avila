import React from 'react';
import PropTypes from 'prop-types';
import styles from './CommentCard.module.css';
import { useUser } from '../../hooks/useUsers.js';

const CommentCard = ({ answer }) => {
  const { user } = useUser(answer.authorId.id);
  return (
    <article className={styles.comment}>
      <div className={styles.commentHeader}>
        <img
          src={user?.profilePicture}
          alt={user?.name}
          className={styles.userAvatar}
        />
        <div className={styles.commentContent}>
          <div className={styles.userInfo}>
            <span className={styles.username}>{user?.name}</span>
            <span className={styles.timestamp}>{answer.createdAt}</span>
          </div>
          <p className={styles.text}>{answer.content}</p>
        </div>
      </div>
    </article>
  );
};
CommentCard.propTypes = {
  answer: PropTypes.shape({
    authorId: PropTypes.string.isRequired,
    createdAt: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
  }).isRequired,
};

export default CommentCard;

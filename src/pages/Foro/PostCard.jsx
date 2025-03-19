import React from 'react';
import PropTypes from 'prop-types';
import styles from './PostCard.module.css';
import { IoChatboxOutline } from 'react-icons/io5';
import { useNavigate } from 'react-router-dom';
import { useUser } from '../../hooks/useUsers.js';
import { useGetAnswerCount } from '../../hooks/useForum.js';

const PostCard = ({ post }) => {
  const navigate = useNavigate();
  const { user } = useUser(post.authorId.id);
  const { count } = useGetAnswerCount(post.id);

  const handleViewPost = () => {
    navigate(`/forum/${post.id}`);
  };

  return (
    <article className={styles.postCard} onClick={handleViewPost}>
      <header className={styles.postHeader}>
        <img
          src={user?.profilePicture}
          alt={`${user?.name}'s avatar`}
          className={styles.authorAvatar}
        />
        <div className={styles.authorInfo}>
          <h3 className={styles.authorName}>{user?.name}</h3>
          <time className={styles.postTime}>{post.createdAt}</time>
        </div>
      </header>

      <div>
        <h2 className={styles.postTitle}>{post.title}</h2>
        <p className={styles.postText}>{post.content}</p>

        <footer className={styles.postFooter}>
          <div className={styles.stat}>
            <IoChatboxOutline />
            <span>{count}</span>
          </div>
        </footer>
      </div>
    </article>
  );
};
PostCard.propTypes = {
  post: PropTypes.shape({
    id: PropTypes.string.isRequired,
    authorId: PropTypes.object.isRequired,
    createdAt: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
  }).isRequired,
};

export default PostCard;

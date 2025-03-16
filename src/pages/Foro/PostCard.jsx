import React from 'react';
import PropTypes from 'prop-types';
import styles from './PostCard.module.css';
import { IoChatboxOutline } from 'react-icons/io5';
import { useNavigate } from 'react-router-dom';

const PostCard = ({ post }) => {
  const navigate = useNavigate(); // Hook para la navegacion

  const handleViewPost = () => {
    navigate(`/post/${post.id}`); // Redirigir a la pagina del post usando el ID
  };

  return (
    <article className={styles.postCard}>
      <header className={styles.postHeader}>
        <img
          src='https://placehold.co/40x40/4A5568/4A5568'
          alt={`${post.author}'s avatar`}
          className={styles.authorAvatar}
        />
        <div className={styles.authorInfo}>
          <h3 className={styles.authorName}>{post.author}</h3>
          <time className={styles.postTime}>{post.timeAgo}</time>
        </div>
      </header>

      <div className={styles.postContent} onClick={handleViewPost}>
        <h2 className={styles.postTitle}>{post.title}</h2>
        <p className={styles.postText}>{post.content}</p>

        <footer className={styles.postFooter}>
          <div className={styles.stat}>
            <IoChatboxOutline className={styles.icon} />
            <span>{post.comments}</span>
          </div>
        </footer>
      </div>
    </article>
  );
};
PostCard.propTypes = {
  post: PropTypes.shape({
    id: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
    timeAgo: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
    comments: PropTypes.number.isRequired,
  }).isRequired,
};

export default PostCard;

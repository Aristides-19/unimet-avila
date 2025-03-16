import React from 'react';
import PropTypes from 'prop-types';
import styles from './PostCard.module.css';
import { IoChatboxOutline } from 'react-icons/io5';

const PostCard = ({ post }) => {
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

      <div className={styles.postContent}>
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
    author: PropTypes.string.isRequired,
    timeAgo: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
    tags: PropTypes.arrayOf(PropTypes.string).isRequired,
    views: PropTypes.number.isRequired,
    comments: PropTypes.number.isRequired,
    votes: PropTypes.number.isRequired,
  }).isRequired,
};

export default PostCard;

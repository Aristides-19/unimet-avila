import React from 'react';
import PostForm from './PostForm';
import styles from './CreatePost.module.css';

const CreatePost = () => {
  return (
    <div className={styles.layout}>
      <main className={styles.mainContent}>
        <PostForm />
      </main>
    </div>
  );
};

export default CreatePost;

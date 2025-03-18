import React from 'react';
import Sidebar from './Sidebar';
import PostForm from './PostForm';
import styles from './CreatePost.module.css';

const CreatePost = () => {
  return (
    <div className={styles.layout}>
      <main className={styles.mainContent}>
        <div>
          <Sidebar />
        </div>
        <PostForm />
      </main>
    </div>
  );
};

export default CreatePost;

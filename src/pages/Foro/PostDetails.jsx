import React from 'react';
import ThreadContent from './ThreadContent';
import styles from './PostDetails.module.css';

const PostDetails = () => {
  return (
    <div className={styles.layout}>
      <main className={styles.mainContent}>
        <ThreadContent />
      </main>
    </div>
  );
};

export default PostDetails;

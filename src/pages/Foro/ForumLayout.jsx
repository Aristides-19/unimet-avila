import React from 'react';
import styles from './ForumLayout.module.css';
import Sidebar from './Sidebar';
import PostList from './PostList';
import Button from '../../components/Button/Button';

const ForumLayout = () => {
  const handleCreatePost = () => {
    alert('Abrir modal o redirigir para crear un post');
  };
  return (
    <div className={styles.layout}>
      <main className={styles.mainContent}>
        <div>
          <Sidebar />
        </div>

        <PostList />
        <div>
          <Button
            text='Crear Post'
            color='#fff'
            onClick={handleCreatePost}
            backgroundColor='#38a169'
            hoverBackgroundColor='#2f855a'
            borderRadius='6px'
            className={styles.createPostButton}
          />
        </div>
      </main>
    </div>
  );
};

export default ForumLayout;

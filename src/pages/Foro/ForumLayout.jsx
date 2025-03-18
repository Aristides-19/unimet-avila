import React from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './ForumLayout.module.css';
import Sidebar from './Sidebar';
import PostList from './PostList';
import Button from '../../components/Button/Button';

const ForumLayout = () => {
  const navigate = useNavigate(); // Hook para manejar la navegación

  // Redirigir al formulario de creación de post
  const handleCreatePost = () => {
    navigate('/CreatePost');
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

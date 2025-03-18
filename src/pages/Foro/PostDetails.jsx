import React from 'react';
import { useParams } from 'react-router-dom';
import Sidebar from './Sidebar';
import ThreadContent from './ThreadContent';
import styles from './PostDetails.module.css';
import Button from '../../components/Button/Button';

const PostDetails = () => {
  const { postId } = useParams();

  const handleCreatePost = () => {
    alert('Abrir modal o redirigir para crear un post'); // Definición de la función handleCreatePost
  };

  return (
    <div className={styles.layout}>
      <main className={styles.mainContent}>
        <div>
          <Sidebar />
        </div>

        <ThreadContent postId={postId} />

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

export default PostDetails;

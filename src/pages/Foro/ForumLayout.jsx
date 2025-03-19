import React from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './ForumLayout.module.css';
import PostList from './PostList';
import Button from '../../components/Button/Button';
import { MdArrowOutward } from 'react-icons/md';

const ForumLayout = () => {
  const navigate = useNavigate();

  const handleCreatePost = () => {
    navigate('/forum/create-post');
  };
  return (
    <div className={styles.layout}>
      <main className={styles.mainContent}>
        <div>
          <Button
            text='Crear Post'
            color='var(--forest)'
            onClick={handleCreatePost}
            backgroundColor='var(--earth-sky)'
            borderRadius='60px'
            className={styles.createPostButton}
            icon={<MdArrowOutward />}
          />
        </div>
        <PostList />
      </main>
    </div>
  );
};

export default ForumLayout;

import React from 'react';
import CommentSection from './CommentSection';
import styles from './ThreadContent.module.css';
import BackButton from '../../components/BackButton/BackButton';
import { useParams } from 'react-router-dom';
import { useGetForumEntryById } from '../../hooks/useForum.js';
import { useUser } from '../../hooks/useUsers.js';
import { formatDistanceToNow } from 'date-fns';
import { es } from 'date-fns/locale';

const ThreadContent = () => {
  const { postId } = useParams();
  const { entry } = useGetForumEntryById(postId);
  const { user } = useUser(entry?.authorId.id);
  if (!entry) return <></>;

  return (
    <section className={styles.content}>
      <div className={styles.backNav}>
        <div className={styles.backNav}>
          <BackButton text='Regresar' where='/forum' />
        </div>
      </div>

      <article className={styles.container}>
        <div className={styles.mainPost}>
          <div className={styles.postHeader}>
            <img
              src={user?.profilePicture}
              alt={user?.name}
              className={styles.userAvatar}
            />
            <div className={styles.postContent}>
              <div className={styles.postMeta}>
                <div className={styles.userInfo}>
                  <span className={styles.username}>{user?.name}</span>
                  <span className={styles.timestamp}>
                    {formatDistanceToNow(entry?.createdAt.toDate(), {
                      addSuffix: true,
                      locale: es,
                    })}
                  </span>
                </div>
                <button className={styles.menuButton}>
                  <i className='ti ti-dots' />
                </button>
              </div>
              <h1 className={styles.postTitle}>{entry?.title}</h1>
              <p className={styles.postText}>{entry?.content}</p>
            </div>
          </div>
        </div>
        <CommentSection />
      </article>
    </section>
  );
};

export default ThreadContent;

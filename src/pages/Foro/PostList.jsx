import React from 'react';
import styles from './PostList.module.css';
import PostCard from './PostCard';
import { useGetAllQuestions } from '../../hooks/useForum.js';
import { formatDistanceToNow } from 'date-fns';
import { es } from 'date-fns/locale';

const PostList = () => {
  const { questions } = useGetAllQuestions();

  return (
    <section className={styles.postListContainer}>
      <div className={styles.postList}>
        {questions.map((post) => {
          return (
            <PostCard
              key={post.id}
              post={{
                ...post,
                createdAt: formatDistanceToNow(post.createdAt.toDate(), {
                  addSuffix: true,
                  locale: es,
                }),
              }}
            />
          );
        })}
      </div>
    </section>
  );
};

export default PostList;

import React from 'react';
import styles from './PostList.module.css';
import PostCard from './PostCard';

const PostList = () => {
  const posts = [
    {
      id: 1,
      author: 'Galangirya',
      timeAgo: '2 min ago',
      title: 'Ruta para Principiantes en el Ávila',
      content:
        'Estoy planeando mi primera excursión al Parque Nacional El Ávila y soy principiante en senderismo. ¿Podrían recomendarme alguna ruta que sea segura y de dificultad baja? Agradezco mucho cualquier sugerencia o consejo.',
      comments: 15,
    },
    {
      id: 2,
      author: 'Lhwssid',
      timeAgo: '5 min ago',
      title: 'Equipo Recomendado para Excursiones',
      content:
        'Buen día, comunidad. Estoy organizando una excursión y quisiera saber qué equipo consideran esencial para recorrer el Ávila, especialmente en épocas de lluvia. ¿Algún modelo de botas, chaquetas o mochilas que hayan probado y recomiendan? ¡Gracias por compartir sus experiencias!',
      comments: 15,
    },
    {
      id: 3,
      author: 'AizhanMaratovna',
      timeAgo: '8 min ago',
      title: 'Experiencias con Guías Turísticos',
      content:
        '¡Hola! Recientemente participé en una excursión guiada por la universidad y me gustaría saber qué opinan de la experiencia con guías turísticos. ¿Creen que es mejor ir con guía o aventurarse en solitario? Compartan sus experiencias y recomendaciones.',
      tags: ['guias', 'aventura', 'recomendaciones'],
      comments: 15,
    },
    {
      id: 4,
      author: 'AizhanMaratovna',
      timeAgo: '9 min ago',
      title: 'Dificultades en la Ruta X',
      content:
        'Buenas tardes, Quería abrir un debate sobre la Ruta X, la cual encontré bastante complicada y con varios obstáculos inesperados. ¿Alguien más la ha recorrido recientemente? ¿Qué estrategias o precauciones toman para afrontarla? Espero sus comentarios para poder mejorar mis próximas excursiones.',
      tags: ['rutas', 'aventura', 'recomendaciones'],
      comments: 15,
    },
  ];

  return (
    <section className={styles.postListContainer}>
      <div className={styles.postList}>
        {posts.map((post) => (
          <PostCard key={post.id} post={post} />
        ))}
      </div>
    </section>
  );
};

export default PostList;

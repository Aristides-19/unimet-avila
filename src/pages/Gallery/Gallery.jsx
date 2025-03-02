import React, { useEffect, useState } from 'react';
import styles from './Gallery.module.css';
import { supabase } from '../../supabaseClient';

function Gallery() {
  const [photos, setPhotos] = useState([]);

  useEffect(() => {
    async function fetchPhotos() {
      const { data, error } = await supabase.storage.from('generics').list();
      if (error) {
        console.error('Error fetching photos:', error);
      } else {
        const photoUrls = data.map((item) => {
          const { data: urlData } = supabase.storage
            .from('imagenes-galeria')
            .getPublicUrl(item.name);

          return {
            url: urlData.publicUrl,
            alt: item.name,
            title: item.name,
          };
        });
        setPhotos(photoUrls);
      }
    }

    fetchPhotos();
  }, []);

  const midIndex = Math.ceil(photos.length / 2);
  const leftColumnPhotos = photos.slice(0, midIndex);
  const rightColumnPhotos = photos.slice(midIndex);

  return (
    <section className={styles.galleryContainer} aria-label='Galería de fotos'>
      <div className={styles.leftColumn}>
        {leftColumnPhotos.map((photo, index) => (
          <article key={index} className={styles.photoCard}>
            <img
              src={photo.url}
              alt={photo.alt}
              className={styles.photoImage}
            />
            <div
              className={styles.separator}
              style={{ backgroundColor: 'var(--separator)' }}
            />
            <h2
              className={styles.photoTitle}
              style={{ color: 'var(--forest)' }}
            >
              {photo.title}
            </h2>
          </article>
        ))}
      </div>

      <div className={styles.rightColumn}>
        {rightColumnPhotos.map((photo, index) => (
          <article key={index} className={styles.photoCard}>
            <img
              src={photo.url}
              alt={photo.alt}
              className={styles.photoImage}
            />
            <div
              className={styles.separator}
              style={{ backgroundColor: 'var(--separator)' }}
            />
            <h2
              className={styles.photoTitle}
              style={{ color: 'var(--forest)' }}
            >
              {photo.title}
            </h2>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Gallery;

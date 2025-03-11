import React from 'react';
import Testimonial from '../../components/Testimonial/Testimonial';
import profile from '../../components/Testimonial/profile.png';
import styles from './Home.module.css';
import { useImage } from '../../hooks/useGenerics.js';
import GridBlogContainer from '../../components/NoticeBlogCard/GridBlogContainer';
import image from '../../assets/classroom.jpg';
import Estadisticas from '../../components/DataBar/DataBar';

function Home() {
  const { imageUrl } = useImage('presentation.jpeg');
  const testimonialsData = [
    {
      name: 'Carlos Martinez',
      title: 'Desconexión Total del Estrés Académico',
      review: 'El senderismo en el Ávila fue el escape perfecto...',
      image: profile,
      stars: 5,
    },
    {
      name: 'María López',
      title: 'Una experiencia inolvidable',
      review: 'El tour por los llanos venezolanos me dejó sin palabras...',
      image: profile,
      stars: 4,
    },
    {
      name: 'semana 12',
      title: 'Una experiencia inolvidable',
      review: 'El tour por los llanos venezolanos me dejó sin palabras...',
      image: profile,
      stars: 4,
    },
    {
      name: 'azul',
      title: 'Una experiencia inolvidable',
      review: 'El tour por los llanos venezolanos me dejó sin palabras...',
      image: profile,
      stars: 1,
    },
    {
      name: 'verde',
      title: 'Una experiencia inolvidable',
      review: 'El tour por los llanos venezolanos me dejó sin palabras...',
      image: profile,
      stars: 2,
    },
    {
      name: 'si',
      title: 'Una experiencia inolvidable',
      review: 'El tour por los llanos venezolanos me dejó sin palabras...',
      image: profile,
      stars: 3,
    },
  ];

  return (
    <>
      <div
        style={{
          backgroundImage: `linear-gradient(270deg, rgba(255, 255, 255, 0.00) 0%, #FFF 100%), url(${imageUrl})`,
        }}
        className={styles.backgroundDiv}
      >
        <h1 className={styles.title}>Más Naturaleza.</h1>
        <h1 style={{ color: 'var(--earth-sky)' }} className={styles.title}>
          Más Aventura.
        </h1>
        <p className={styles.text}>
          Descubre la magia de la naturaleza y la emoción de nuevas aventuras
          con
          <br />
          tus compañeros de la Universidad Metropolitana.
        </p>
      </div>
      <div>
        <Estadisticas />
      </div>
      <div>
        <GridBlogContainer
          imageUrl1={image}
          title1='Mezcla perfecta de naturaleza y salud'
          content1='EL senderismo es una actividad física aeróbica, que tonifica, relaja y permite conocer lugares únicos'
          imageUrl2={image}
          title2='Mezcla perfecta de naturaleza y salud'
          content2='EL senderismo es una actividad física aeróbica, que tonifica, relaja y permite conocer lugares únicos'
          imageUrl3={image}
          title3='Mezcla perfecta de naturaleza y salud'
          content3='EL senderismo es una actividad física aeróbica, que tonifica, relaja y permite conocer lugares únicos'
        />
      </div>
      <div>
        <Testimonial testimonials={testimonialsData} />
      </div>
    </>
  );
}

export default Home;

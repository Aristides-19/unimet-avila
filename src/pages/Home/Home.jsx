import React from 'react';
import Testimonial from '../../components/Testimonial/Testimonial';
import profile from '../../components/Testimonial/profile.png';
import styles from './Home.module.css';
import { useImage } from '../../hooks/useGenerics.js';
import GridBlogContainer from '../../components/NoticeBlogCard/GridBlogContainer';
import image from '../../assets/classroom.jpg';
import imageMission from '../../assets/Imagen Mision.jpg';
import imageVision from '../../assets/Imagen_Vision.jpg';
import MissionVision from '../../components/MissionVision/MissionVision';
import Estadisticas from '../../components/DataBar/DataBar';
import Goals from '../../components/Goals/Goals';

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
      <Goals />
      <MissionVision
        title='Misión'
        text='Buscamos reconectar a los estudiantes de la Universidad Metropolitana con el Parque Nacional El Ávila, a través de una plataforma accesible e intuitiva, con información completa y actualizada sobre rutas y actividades recreativas, en un entorno de honestidad, sustentabilidad y compromiso con la naturaleza.'
        image={imageMission}
      />
      <MissionVision
        title='Visión'
        text='Ser la plataforma digital líder en la Universidad Metropolitana que motive y conecte a los estudiantes a descubrir, cuidar y disfrutar el Parque Nacional El Ávila. Aspiramos a construir una comunidad de estudiantes activos que valoren las experiencias al aire libre y el cuidado del medio ambiente.'
        image={imageVision}
        imageRight
      />
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

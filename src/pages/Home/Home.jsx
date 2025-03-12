import React from 'react';
import Testimonial from '../../components/Home/Testimonial/Testimonial';
import profile from '../../components/Home/Testimonial/profile.png';
import styles from './Home.module.css';
import { useImage } from '../../hooks/useGenerics.js';
// import GridBlogContainer from '../../components/Home/NoticeBlogCard/GridBlogContainer'; // modificar
// import image from '../../assets/classroom.jpg';
import imageMission from '../../assets/Imagen Mision.jpg';
import imageVision from '../../assets/Imagen_Vision.jpg';
import MissionVision from '../../components/Home/MissionVision/MissionVision';
import HomeStats from '../../components/Home/HomeStats/HomeStats.jsx';
import Goals from '../../components/Home/Goals/Goals';

function Home() {
  const { imageUrl } = useImage('presentation.jpeg');
  const testimonialsData = [
    {
      name: 'Carlos Martinez',
      title: 'Desconexión Total del Estrés Académico',
      review:
        'El senderismo en El Ávila fue el escape perfecto. Respirar aire fresco y compartir risas con amigos hizo que todo valiera la pena. ¡Totalmente recomendable!',
      image: profile,
      stars: 5,
    },
    {
      name: 'Javier Ramírez',
      title: 'Inolvidables Aventuras en el Ávila',
      review:
        '¡Una experiencia increíble! Disfrutamos de la naturaleza y aprendimos mucho sobre el entorno. ¡No puedo esperar para hacerlo de nuevo!',
      image: profile,
      stars: 3,
    },
    {
      name: 'Ana Rodríguez',
      title: 'Relajación y Diversión',
      review:
        'Desconectar del campus y sumergirnos en la serenidad del Ávila fue la terapia perfecta para el estrés universitario. Una experiencia que todos deberían probar.',
      image: profile,
      stars: 4,
    },
    {
      name: 'Isabella Torres',
      title: 'Conexión con la Naturaleza',
      review:
        'La excursión al Ávila me permitió conectar con la naturaleza y conmigo misma. Los paisajes son impresionantes y la compañía inmejorable. ¡Una experiencia enriquecedora!',
      image: profile,
      stars: 5,
    },
    {
      name: 'Daniel Pérez',
      title: 'Aventura y Amistad en el Ávila',
      review:
        'Una aventura emocionante que fortaleció la amistad con mis compañeros. Superamos retos juntos y disfrutamos de la belleza del Ávila. ¡Definitivamente repetiré!',
      image: profile,
      stars: 4,
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
      <HomeStats />
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
      <Testimonial testimonials={testimonialsData} />
    </>
  );
}

export default Home;

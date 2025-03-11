import React from 'react';
import MissionVision from '../components/MissionVision/MissionVision';
import image from '../assets/404-NotFound-Illustration.png';

function Home() {
  return (
    <>
      <MissionVision
        title='Misión'
        text='Buscamos reconectar a los estudiantes de la Universidad Metropolitana con el Parque Nacional El Ávila, a través de una plataforma accesible e intuitiva, con información completa y actualizada sobre rutas y actividades recreativas, en un entorno de honestidad, sustentabilidad y compromiso con la naturaleza.'
        image={image}
      />
      <MissionVision
        title='Visión'
        text='Ser la plataforma digital líder en la Universidad Metropolitana que motive y conecte a los estudiantes a descubrir, cuidar y disfrutar el Parque Nacional El Ávila. Aspiramos a construir una comunidad de estudiantes activos que valoren las experiencias al aire libre y el cuidado del medio ambiente.'
        image={image}
        imageRight
      />
    </>
  );
}

export default Home;

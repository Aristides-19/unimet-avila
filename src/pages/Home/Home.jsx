import React from 'react';
import Testimonial from '../../components/Testimonial/Testimonial';
import profile from '../../components/Testimonial/profile.png';

function Home() {
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
    <div>
      <Testimonial testimonials={testimonialsData} />
    </div>
  );
}

export default Home;

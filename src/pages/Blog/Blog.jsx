import React from 'react';
import './Blog.css';
import EntradaIndividual from '../../components/Entrada/EntradaIndividual';
import Button from '../../components/Button/Button';

import imagen_principal from '../../assets/blog/m-post-card-overlay.png';

function Blog() {
  const blogPosts = [
    {
      id: 1,
      category: 'Rutas',
      title:
        'Descubre las Rutas Secretas del Ávila: Guía para Aficionados al Senderismo',
      date: '20 de Enero, 2025',
      image: '/blog/rutas.jpg',
      link: '/blog/rutas-secretas',
    },
    {
      id: 2,
      category: 'Testimonios',
      title: 'Historias de Aventura: Experiencias Inolvidables en el Ávila',
      date: '1 de Febrero, 2025',
      image: '/blog/testimonios.jpg',
      link: '/blog/historias-aventura',
    },
    {
      id: 3,
      category: 'Equipo',
      title: 'El Equipo Esencial para Tus Aventuras en la Naturaleza',
      date: '31 de Enero, 2025',
      image: '/blog/equipo.png',
      link: '/blog/equipo-esencial',
    },
    {
      id: 4,
      category: 'Consejos',
      title: 'Tips para Conservar el Medio Ambiente Durante Tus Excursiones',
      date: '15 de Enero, 2025',
      image: '/blog/consejos.jpg',
      link: '/blog/conservar-medio-ambiente',
    },
    {
      id: 5,
      category: 'Conservación',
      title:
        'Impacto Ambiental y Conservación: Cuidando Nuestro Parque Nacional',
      date: '3 de Febrero, 2025',
      image: '/blog/conservacion.png',
      link: '/blog/impacto-ambiental',
    },
    {
      id: 6,
      category: 'Preparación',
      title: 'Cómo Prepararte Físicamente para una Excursión en el Ávila',
      date: '23 de Enero, 2025',
      image: '/blog/preparacion.jpg',
      link: '/blog/preparacion-excursion',
    },
  ];

  return (
    <div className='contenedorpadre-blog'>
      <div className='entrada-principal'>
        <img
          src={imagen_principal}
          alt='Imagen de fondo'
          className='imagen-fondo'
        />
        <div className='contenedor-entrada'>
          <p className='categoria'>Seguridad</p>
          <h2>
            5 Consejos para una Excursión Segura en el Parque Nacional El Ávila
          </h2>
          <div className='datos'>
            <p>María Alvarado</p>
            <p>30 de Enero, 2025</p>
          </div>
        </div>
      </div>
      <div className='entradas'>
        {blogPosts.map((blogPost, index) => (
          <EntradaIndividual
            key={index}
            id={blogPost.id}
            title={blogPost.title}
            category={blogPost.category}
            image={blogPost.image}
            date={blogPost.date}
            link={blogPost.link}
          />
        ))}
      </div>
      <Button
        text='Cargar más'
        type='submit'
        borderRadius='6px'
        color='#828282'
        backgroundColor='#fff'
        onClick={() => {}}
        className='boton-ver-mas'
      />
    </div>
  );
}

export default Blog;

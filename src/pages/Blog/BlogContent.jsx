import React from 'react';
import { useLocation } from 'react-router-dom';
import './Blog.css';

function BlogContent() {
  const location = useLocation();
  const { title, category, image, date, link } = location.state || {};

  const linkCompleto = '/src/assets' + image;

  if (!location.state) {
    return <div>No se encontró la entrada del blog.</div>;
  }

  return (
    <div className='ContenidoBlog'>
      <p className='categoria'>{category}</p>
      <h2 className='titulo'>{title}</h2>
      <div className='datos parrafos'>
        <p>María Alvarado</p>
        <p>{date}</p>
      </div>
      <img src={linkCompleto} alt={title} className='imagen-contenido' />
      <p className='parrafos'>
        Explorar el Parque Nacional El Ávila es una experiencia única para los
        amantes de la naturaleza y la aventura. Sin embargo, la seguridad debe
        ser siempre una prioridad. En este artículo, te ofrecemos 5 consejos
        esenciales para disfrutar de una excursión segura, sin sacrificar la
        emoción de descubrir nuevos paisajes y rutas.
      </p>

      <div>
        <h2 className='titulo'>
          Consejo 1: Planifica tu Ruta y Conoce el Terreno
        </h2>
        <p className='parrafos'>
          Antes de salir, investiga las rutas disponibles y elige aquella que se
          adapte a tu nivel de experiencia. Consulta mapas, revisa pronósticos
          meteorológicos y pregunta a expertos o a otros excursionistas sobre
          las condiciones actuales del sendero.
        </p>
      </div>

      {/* Repite los demás consejos según sea necesario */}

      <p className='comentario'>
        “ Traveling can expose you to new environments and potential health
        risks, so it&apos;s crucial to take precautions to stay safe and
        healthy. ”
      </p>
    </div>
  );
}

export default BlogContent;

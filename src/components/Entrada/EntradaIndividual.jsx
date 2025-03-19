import React from 'react';
import './EntradaIndividual.css';
import { useNavigate } from 'react-router-dom';

import imagen_principal from '../../assets/blog/m-post-card-overlay.png';

function EntradaIndividual({ id, title, category, image, date, link }) {
  const navigate = useNavigate();
  const linkCompleto = '/src/assets' + image;
  return (
    <div
      className='entrada-card'
      onClick={() => {
        navigate('/blog/' + id.toString(), {
          state: { id, title, category, image, date, link },
        });
      }}
    >
      <img
        src={linkCompleto}
        alt='Imagen de fondo'
        className='imagen-card-blog'
      />
      <div className='contenedor-entrada'>
        <p className='categoria'>{category}</p>
        <h2>{title}</h2>
        <p className='fecha'>{date}</p>
      </div>
    </div>
  );
}

export default EntradaIndividual;

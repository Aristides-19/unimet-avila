import React from 'react';
import './EntradaIndividual.css';
import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';

function EntradaIndividual({ id, title, category, image, date }) {
  const navigate = useNavigate();
  const linkCompleto = '/src/assets' + image;
  return (
    <div
      className='entrada-card'
      onClick={() => {
        navigate('/blog/' + id.toString(), {
          state: { id, title, category, image, date },
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

EntradaIndividual.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
};

export default EntradaIndividual;

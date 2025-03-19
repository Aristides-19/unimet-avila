import React from 'react';
import './EntradaIndividual.css';
import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import { formatDistanceToNow } from 'date-fns';
import { es } from 'date-fns/locale';

function EntradaIndividual({ article }) {
  const navigate = useNavigate();
  const createdAt = formatDistanceToNow(article.createdAt.toDate(), {
    addSuffix: true,
    locale: es,
  });
  console.log(article);
  return (
    <div
      className='entrada-card'
      onClick={() => {
        navigate(`/blog/${article.id}`, {
          state: { ...article, createdAt: createdAt },
        });
      }}
    >
      <img
        src={article.image}
        alt='Imagen de fondo'
        className='imagen-card-blog'
      />
      <div className='contenedor-entrada'>
        <p className='categoria'>{article.category}</p>
        <h2>{article.title}</h2>
        <p className='fecha'>{createdAt}</p>
      </div>
    </div>
  );
}

EntradaIndividual.propTypes = {
  article: PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    createdAt: PropTypes.string.isRequired,
  }),
};

export default EntradaIndividual;

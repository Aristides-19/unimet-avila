import React from 'react';
import './Blog.css';
import EntradaIndividual from '../../components/Entrada/EntradaIndividual';
import Button from '../../components/Button/Button';
import { useGetPaginatedArticles } from '../../hooks/useBlog.js';
import { useNavigate } from 'react-router-dom';
import { formatDistanceToNow } from 'date-fns';
import { es } from 'date-fns/locale';

function Blog() {
  const { loadPaginatedArticles, articles, hasMore } =
    useGetPaginatedArticles(7);
  const navigate = useNavigate();
  if (articles.length === 0) return <></>;
  const mainArticle = articles[0];
  const createdAt = formatDistanceToNow(mainArticle.createdAt.toDate(), {
    addSuffix: true,
    locale: es,
  });
  return (
    <div className='contenedorpadre-blog'>
      <div
        className='entrada-principal'
        onClick={() => {
          navigate(`/blog/${mainArticle.id}`, {
            state: { ...mainArticle, createdAt: createdAt },
          });
        }}
      >
        <div className='imagen-container'>
          <img
            src={mainArticle.image}
            alt={mainArticle.title}
            className='imagen-fondo'
          />
        </div>
        <div className='contenedor-entrada'>
          <p className='categoria'>Seguridad</p>
          <h2>{mainArticle.title}</h2>
        </div>
      </div>
      <div className='entradas'>
        {articles.slice(1).map((article) => {
          return <EntradaIndividual key={article.id} article={article} />;
        })}
      </div>
      {hasMore && (
        <Button
          text='Cargar más'
          type='submit'
          borderRadius='6px'
          color='#828282'
          backgroundColor='#fff'
          onClick={loadPaginatedArticles}
          className='boton-ver-mas'
        />
      )}
    </div>
  );
}

export default Blog;

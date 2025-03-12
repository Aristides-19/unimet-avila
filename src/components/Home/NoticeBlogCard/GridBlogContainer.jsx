import React from 'react';
import styles from './NoticeBlogCard.module.css'; // Importa el archivo CSS para estilos
import PropTypes from 'prop-types';
import Card from './NoticeBlogCard.jsx';

const GridBlogContainer = ({
  imageUrl1,
  title1,
  content1,
  imageUrl2,
  title2,
  content2,
  imageUrl3,
  title3,
  content3,
}) => {
  return (
    <>
      <h2
        style={{ textAlign: 'left', padding: '7.5px', fontFamily: 'Poppins' }}
      >
        Blog de Noticias
      </h2>
      <div className={styles.cardGrid}>
        <div className={styles.cardGrid1}>
          <Card imageUrl={imageUrl1} title={title1} content={content1} />
        </div>
        <div className={styles.cardGrid2}>
          <Card imageUrl={imageUrl2} title={title2} content={content2} />
        </div>
        <div className={styles.cardGrid3}>
          <Card imageUrl={imageUrl3} title={title3} content={content3} />
        </div>
      </div>
    </>
  );
};

GridBlogContainer.propTypes = {
  imageUrl1: PropTypes.string.isRequired,
  title1: PropTypes.string.isRequired,
  content1: PropTypes.string.isRequired,
  imageUrl2: PropTypes.string.isRequired,
  title2: PropTypes.string.isRequired,
  content2: PropTypes.string.isRequired,
  imageUrl3: PropTypes.string.isRequired,
  title3: PropTypes.string.isRequired,
  content3: PropTypes.string.isRequired,
};

export default GridBlogContainer;

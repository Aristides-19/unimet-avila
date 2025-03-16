import React from 'react';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';
import ExcursionCard from './ExcursionCard';
import styles from './ExcursionList.module.css';
import Button from '../../components/Button/Button';
import PropTypes from 'prop-types';

const ExcursionList = ({
  excursions,
  hasMore,
  loadMore,
  isAscending,
  toggleSortOrder,
  currentLength,
  size,
}) => {
  return (
    <section className={styles.container}>
      <header className={styles.excursionsHeader}>
        <p className={styles.resultsCount}>
          Mostrando {currentLength} de{' '}
          <span className={styles.highlight}>{size} excursiones</span>
        </p>
        <div className={styles.sort}>
          <span>
            Ordenar por <b>Calificación</b>
          </span>
          <button onClick={toggleSortOrder} className={styles.sortButton}>
            {isAscending ? <FaChevronDown /> : <FaChevronUp />}
          </button>
        </div>
      </header>

      <div className={styles.excursionCards}>
        {excursions.map((excursion) => (
          <ExcursionCard key={excursion.id} {...excursion} />
        ))}
      </div>
      {hasMore ? (
        <Button
          backgroundColor='var(--forest)'
          color='var(--sunlight)'
          text='Mostrar más Resultados'
          borderRadius='4px'
          onClick={loadMore}
          className={styles.loadMore}
        />
      ) : (
        <></>
      )}
    </section>
  );
};

ExcursionList.propTypes = {
  excursions: PropTypes.array.isRequired,
  hasMore: PropTypes.bool.isRequired,
  loadMore: PropTypes.func.isRequired,
  isAscending: PropTypes.bool.isRequired,
  toggleSortOrder: PropTypes.func.isRequired,
  currentLength: PropTypes.number.isRequired,
  size: PropTypes.number.isRequired,
};

export default ExcursionList;

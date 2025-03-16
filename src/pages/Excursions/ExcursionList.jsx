import React, { useState } from 'react';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';
import ExcursionCard from './ExcursionCard';
import styles from './ExcursionList.module.css';

const excursions = [
  {
    id: 1,
    title: 'Paseo Tranquilo',
    image: 'https://placehold.co/300x299/4a7c59/4a7c59',
    price: 20,
    location: 'Tramo Corta Fuego',
    date: '24-03-2025',
    guide: 'Samuel Ramirez',
    difficulty: 'Ligero',
    status: 'Disponible',
    meal: 'Almuerzo',
  },
  {
    id: 2,
    title: 'Excursión para Parejas',
    image: 'https://placehold.co/300x299/8b755c/8b755c',
    price: 30,
    location: 'Los Venados',
    date: '14-02-2023',
    guide: 'Cristiano Ronaldo',
    difficulty: 'Ligero',
    rating: 4.3,
    ratingText: 'Muy Bueno',
    meal: 'Caramelo Raro',
  },
  // Add other excursions data
];

const ExcursionList = () => {
  const [isAscending, setIsAscending] = useState(true);

  const toggleSortOrder = () => {
    setIsAscending(!isAscending);
  };

  return (
    <section className={styles.excursions}>
      <header className={styles.excursionsHeader}>
        <p className={styles.resultsCount}>
          Mostrando 4 de{' '}
          <span className={styles.highlight}>20 excursiones</span>
        </p>
        <div className={styles.sort}>
          <span>Ordenar por Calificación</span>
          <button
            onClick={toggleSortOrder}
            className={styles.sortButton}
            style={{ border: 'none', background: 'none' }}
          >
            {isAscending ? <FaChevronDown /> : <FaChevronUp />}
          </button>
        </div>
      </header>

      <div className={styles.excursionCards}>
        {excursions.map((excursion) => (
          <ExcursionCard key={excursion.id} {...excursion} />
        ))}
      </div>

      <button className={styles.loadMore}>Mostrar más resultados</button>
    </section>
  );
};

export default ExcursionList;

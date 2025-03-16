import React, { useEffect, useState } from 'react';
import SearchBar from '../../components/SearchBar/SearchBar';
import Filters from './Filters';
import ExcursionList from './ExcursionList';
import { useLocation, useNavigate } from 'react-router-dom';
import styles from './ExcursionsPage.module.css';
import { useExcursions, useExcursionsSize } from '../../hooks/useExcursions.js';

const ExcursionsPage = () => {
  const [date, setDate] = useState(null);
  const [selectedRating, setSelectedRating] = useState(null);
  const [duration, setDuration] = useState([1, 6]);
  const [price, setPrice] = useState([5, 100]);
  const [difficulty, setDifficulty] = useState({
    all: true,
    light: false,
    advanced: false,
    extreme: false,
  });
  const [state, setState] = useState({
    all: true,
    finished: false,
    available: false,
  });

  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const searchQuery = searchParams.get('search') || '';

  const navigate = useNavigate();
  const [query, setQuery] = useState('');
  const handleSubmit = (e) => {
    e.preventDefault();
    navigate(`?search=${encodeURIComponent(query)}`);
  };

  const [isAscending, setIsAscending] = useState(false);
  const {
    excursions,
    loadMore: loadMore,
    hasMore: hasMore,
  } = useExcursions(
    4,
    searchQuery,
    isAscending,
    date,
    selectedRating,
    duration,
    price,
    difficulty,
    state
  );
  const [currentLength, setCurrentLength] = useState(0);
  const { size } = useExcursionsSize();

  useEffect(() => {
    setCurrentLength(excursions.length);
  }, [excursions]);

  const toggleSortOrder = () => {
    setIsAscending(!isAscending);
  };

  return (
    <div className={styles.container}>
      <form onSubmit={handleSubmit} noValidate>
        <SearchBar query={query} setQuery={setQuery} />
      </form>

      <section className={styles.content}>
        <Filters
          date={date}
          setDate={setDate}
          selectedRating={selectedRating}
          setSelectedRating={setSelectedRating}
          duration={duration}
          setDuration={setDuration}
          price={price}
          setPrice={setPrice}
          difficulty={difficulty}
          setDifficulty={setDifficulty}
          state={state}
          setState={setState}
        />
        <hr className={styles.separator} />
        <ExcursionList
          excursions={excursions}
          loadMore={loadMore}
          toggleSortOrder={toggleSortOrder}
          size={size}
          currentLength={currentLength}
          hasMore={hasMore}
          isAscending={isAscending}
        />
      </section>
    </div>
  );
};

export default ExcursionsPage;

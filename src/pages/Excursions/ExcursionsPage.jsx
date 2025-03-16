import React, { useState } from 'react';
import SearchBar from '../../components/SearchBar/SearchBar';
import Filters from './Filters';
import ExcursionList from './ExcursionList';
import { useNavigate } from 'react-router-dom';
import styles from './ExcursionsPage.module.css';

const ExcursionsPage = () => {
  const [date, setDate] = useState(new Date());
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

  const navigate = useNavigate();
  const [query, setQuery] = useState('');
  const handleSubmit = (e) => {
    e.preventDefault();
    navigate(`?search=${encodeURIComponent(query)}`);
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
        <ExcursionList />
      </section>
    </div>
  );
};

export default ExcursionsPage;

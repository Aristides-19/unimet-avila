import React, { useState } from 'react';
import CustomCalendar from './CustomCalendar';
import { SliderRange } from '../../components/SliderRange/SliderRange';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';
import styles from './Filters.module.css';
import PropTypes from 'prop-types';

const Filters = ({
  date,
  setDate,
  selectedRating,
  setSelectedRating,
  duration,
  setDuration,
  price,
  setPrice,
  difficulty,
  setDifficulty,
  state,
  setState,
}) => {
  const difficultyTypes = ['all', 'light', 'advanced', 'extreme'];
  const stateTypes = ['all', 'finished', 'available'];
  const [isVisible, setIsVisible] = useState(true);

  const toggleRating = (rating) => {
    setSelectedRating(selectedRating === rating ? null : rating);
  };

  const handleChange = (type, state, setState, types) => {
    const newState = { ...state, [type]: !state[type] };

    if (type === 'all' && !newState.all) {
      setState({ ...newState, [type]: !newState[type] });
      return;
    }

    if (type === 'all') {
      types.forEach((key) => {
        if (key !== 'all') {
          newState[key] = false;
        }
      });
    } else {
      newState.all = false;

      const selectedTypes = types.filter(
        (key) => key !== 'all' && newState[key]
      );

      if (selectedTypes.length === types.length - 1) {
        newState.all = true;
        types.forEach((key) => {
          if (key !== 'all') {
            newState[key] = false;
          }
        });
      }
    }

    setState(newState);
  };

  return (
    <aside className={styles.filters}>
      <div className={styles.filtersHeader}>
        {isVisible ? (
          <FaChevronDown onClick={() => setIsVisible(false)} />
        ) : (
          <FaChevronUp onClick={() => setIsVisible(true)} />
        )}
        <h2 className={styles.filtersText}>Filtros</h2>
      </div>
      {isVisible && (
        <div>
          <section className={styles.filterSection}>
            <h3 className={styles.filterLabel}>Duración</h3>
            <SliderRange
              min={1}
              max={6}
              value={duration}
              setValue={setDuration}
              type={'h'}
            />
          </section>
          <hr className={styles.divider} />
          <section className={styles.filterSection}>
            <h3 className={styles.filterLabel}>Calificación</h3>
            <div className={styles.ratingButtons}>
              {[1, 2, 3, 4, 5].map((rating) => (
                <button
                  key={rating}
                  className={styles.ratingBtn}
                  onClick={() => toggleRating(rating)}
                  style={
                    selectedRating === rating
                      ? { backgroundColor: '#00afa0', color: '#fff' }
                      : {}
                  }
                >
                  {rating}+
                </button>
              ))}
            </div>
          </section>
          <hr className={styles.divider} />
          <section className={styles.filterSection}>
            <h3 className={styles.filterLabel}>Dificultad</h3>
            <div className={styles.checkboxGroup}>
              <label className={styles.checkboxItem}>
                <input
                  type='checkbox'
                  checked={difficulty.all}
                  onChange={() =>
                    handleChange(
                      'all',
                      difficulty,
                      setDifficulty,
                      difficultyTypes
                    )
                  }
                />
                <span>Todos</span>
              </label>
              <label className={styles.checkboxItem}>
                <input
                  type='checkbox'
                  checked={difficulty.light}
                  onChange={() =>
                    handleChange(
                      'light',
                      difficulty,
                      setDifficulty,
                      difficultyTypes
                    )
                  }
                />
                <span>Ligero</span>
              </label>
              <label className={styles.checkboxItem}>
                <input
                  type='checkbox'
                  checked={difficulty.advanced}
                  onChange={() =>
                    handleChange(
                      'advanced',
                      difficulty,
                      setDifficulty,
                      difficultyTypes
                    )
                  }
                />
                <span>Avanzado</span>
              </label>
              <label className={styles.checkboxItem}>
                <input
                  type='checkbox'
                  checked={difficulty.extreme}
                  onChange={() =>
                    handleChange(
                      'extreme',
                      difficulty,
                      setDifficulty,
                      difficultyTypes
                    )
                  }
                />
                <span>Extremo</span>
              </label>
            </div>
          </section>
          <hr className={styles.divider} />
          <section className={styles.filterSection}>
            <h3 className={styles.filterLabel}>Estado</h3>
            <div className={styles.checkboxGroup}>
              <label className={styles.checkboxItem}>
                <input
                  type='checkbox'
                  checked={state.all}
                  onChange={() =>
                    handleChange('all', state, setState, stateTypes)
                  }
                />
                <span>Todos</span>
              </label>
              <label className={styles.checkboxItem}>
                <input
                  type='checkbox'
                  checked={state.finished}
                  onChange={() =>
                    handleChange('finished', state, setState, stateTypes)
                  }
                />
                <span>Finalizada</span>
              </label>
              <label className={styles.checkboxItem}>
                <input
                  type='checkbox'
                  checked={state.available}
                  onChange={() =>
                    handleChange('available', state, setState, stateTypes)
                  }
                />
                <span>Disponible</span>
              </label>
            </div>
          </section>
          <hr className={styles.divider} />
          <section className={styles.filterSection}>
            <h3 className={styles.filterLabel}>Precio</h3>
            <SliderRange
              min={5}
              max={100}
              value={price}
              type={'$'}
              setValue={setPrice}
            />
          </section>
          <hr className={styles.divider} />
          <section className={styles.filterSection}>
            <h3 className={styles.filterLabel}>Fecha</h3>
            <div
              style={{
                display: 'flex',
                justifyContent: 'center',
                width: '100%',
              }}
            >
              <CustomCalendar date={date} setDate={setDate} />
            </div>
          </section>
        </div>
      )}
    </aside>
  );
};

Filters.propTypes = {
  date: PropTypes.instanceOf(Date).isRequired,
  setDate: PropTypes.func.isRequired,
  selectedRating: PropTypes.number,
  setSelectedRating: PropTypes.func.isRequired,
  duration: PropTypes.arrayOf(PropTypes.number).isRequired,
  setDuration: PropTypes.func.isRequired,
  price: PropTypes.arrayOf(PropTypes.number).isRequired,
  setPrice: PropTypes.func.isRequired,
  difficulty: PropTypes.object.isRequired,
  setDifficulty: PropTypes.func.isRequired,
  state: PropTypes.object.isRequired,
  setState: PropTypes.func.isRequired,
};
export default Filters;

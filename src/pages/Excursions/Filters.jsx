'use client';
import React from 'react';
import CustomCalendar from './CustomCalendar';
import styles from './Filters.module.css';

const Filters = () => {
  const [date, setDate] = React.useState(new Date());
  const [selectedRating, setSelectedRating] = React.useState(null);
  const [duration, setDuration] = React.useState([1, 6]);
  const [price, setPrice] = React.useState([5, 100]);

  const handleDurationChange = (event) => {
    const value = Array.from(event.target.value).map(Number);
    setDuration(value);
  };

  const handlePriceChange = (event) => {
    const value = Array.from(event.target.value).map(Number);
    setPrice(value);
  };

  const toggleRating = (rating) => {
    setSelectedRating(selectedRating === rating ? null : rating);
  };

  return (
    <aside className={styles.filters}>
      <h2 className={styles.filtersHeader}>Filtros</h2>

      <section className={styles.filterSection}>
        <h3 className={styles.filterLabel}>Duración</h3>
        <div className={styles.durationSlider}>
          <input
            type='range'
            min='1'
            max='6'
            value={duration[0]}
            onChange={(e) => setDuration([Number(e.target.value), duration[1]])}
            className={styles.sliderHandleLeft}
            style={{
              width: '80%',
              margin: '0 auto 0 10%',
              display: 'block',
              accentColor: '#00AFA0',
            }}
          />
          <input
            type='range'
            min='1'
            max='6'
            value={duration[1]}
            onChange={(e) => setDuration([duration[0], Number(e.target.value)])}
            className={styles.sliderHandleRight}
            style={{
              width: '80%',
              margin: '0 auto 0 10%',
              display: 'block',
              accentColor: '#00AFA0',
            }}
          />
          <div className={styles.durationLabels}>
            <span>{duration[0]}h</span>
            <span>{duration[1]}h</span>
          </div>
        </div>
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
        <div className={styles.filterLabelWithIcon}>
          <h3 className={styles.filterLabel}>Dificultad</h3>
          <i className='ti ti-chevron-up'></i>
        </div>
        <div className={styles.checkboxGroup}>
          <label className={styles.checkboxItem}>
            <input type='checkbox' defaultChecked />
            <span>Todos</span>
          </label>
          <label className={styles.checkboxItem}>
            <input type='checkbox' />
            <span>Ligero</span>
          </label>
          <label className={styles.checkboxItem}>
            <input type='checkbox' />
            <span>Avanzado</span>
          </label>
          <label className={styles.checkboxItem}>
            <input type='checkbox' />
            <span>Extremo</span>
          </label>
        </div>
      </section>

      <hr className={styles.divider} />

      <section className={styles.filterSection}>
        <div className={styles.filterLabelWithIcon}>
          <h3 className={styles.filterLabel}>Estado</h3>
          <i className='ti ti-chevron-up'></i>
        </div>
        <div className={styles.checkboxGroup}>
          <label className={styles.checkboxItem}>
            <input type='checkbox' defaultChecked />
            <span>Todos</span>
          </label>
          <label className={styles.checkboxItem}>
            <input type='checkbox' />
            <span>Finalizada</span>
          </label>
          <label className={styles.checkboxItem}>
            <input type='checkbox' />
            <span>Disponible</span>
          </label>
        </div>
      </section>

      <hr className={styles.divider} />

      <section className={styles.filterSection}>
        <h3 className={styles.filterLabel}>Precio</h3>
        <div className={styles.priceSlider}>
          <input
            type='range'
            min='5'
            max='100'
            value={price[0]}
            onChange={(e) => setPrice([Number(e.target.value), price[1]])}
            className={styles.sliderHandleLeft}
            style={{
              width: '80%',
              margin: '0 auto 0 10%',
              display: 'block',
              accentColor: '#00AFA0',
            }}
          />
          <input
            type='range'
            min='5'
            max='100'
            value={price[1]}
            onChange={(e) => setPrice([price[0], Number(e.target.value)])}
            className={styles.sliderHandleRight}
            style={{
              width: '80%',
              margin: '0 auto 0 10%',
              display: 'block',
              accentColor: '#00AFA0',
            }}
          />
          <div className={styles.priceLabels}>
            <span>${price[0]}</span>
            <span>${price[1]}</span>
          </div>
        </div>
      </section>

      <hr className={styles.divider} />

      <section className={styles.filterSection}>
        <h3 className={styles.filterLabel}>Fecha</h3>
        <div
          className={styles.calendarContainer}
          style={{ display: 'flex', justifyContent: 'center' }}
        >
          <CustomCalendar date={date} setDate={setDate} />
        </div>
      </section>
    </aside>
  );
};

export default Filters;

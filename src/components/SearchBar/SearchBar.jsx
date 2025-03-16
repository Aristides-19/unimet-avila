'use client';
import React from 'react';
import styles from './SearchBar.module.css';
import { FaSearch } from 'react-icons/fa';
import Button from '../Button/Button.jsx';
import InputField from '../InputField/InputField.jsx';
import PropTypes from 'prop-types'; // Import the icon

const SearchBar = ({ query, setQuery }) => {
  const handleChange = (e) => {
    setQuery(e.target.value);
  };
  return (
    <section className={styles.searchContainer}>
      <div className={styles.searchBox}>
        <InputField
          type='text'
          name='search'
          placeholder='Buscar'
          value={query}
          onChange={handleChange}
          className={styles.searchInput}
          required
        />
        <Button
          icon={<FaSearch />}
          color='var(--sunlight)'
          backgroundColor='var(--earth-sky)'
          type='submit'
        />
      </div>
    </section>
  );
};

SearchBar.propTypes = {
  query: PropTypes.string.isRequired,
  setQuery: PropTypes.func.isRequired,
};

export default SearchBar;

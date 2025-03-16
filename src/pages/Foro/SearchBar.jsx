import React from 'react';
import PropTypes from 'prop-types';
import styles from './SearchBar.module.css';

const SearchBar = ({ onSearch }) => {
  return (
    <div className={styles.searchBar}>
      <input
        type='text'
        placeholder='Buscar publicaciones...'
        onChange={(e) => onSearch(e.target.value)}
      />
    </div>
  );
};
SearchBar.propTypes = {
  onSearch: PropTypes.func.isRequired,
};

export default SearchBar;

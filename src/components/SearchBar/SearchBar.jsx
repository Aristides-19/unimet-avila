'use client';
import React from 'react';
import styles from './SearchBar.module.css';
import { FaSearch } from 'react-icons/fa'; // Import the icon

const SearchBar = () => {
  return (
    <section className={styles.searchContainer}>
      <div className={styles.searchBox}>
        <input
          type='text'
          placeholder='Buscar'
          className={styles.searchInput}
        />
        <button className={styles.searchButton}>
          <FaSearch /> {/* Use the icon */}
        </button>
      </div>
    </section>
  );
};

export default SearchBar;

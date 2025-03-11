'use client';
import React from 'react';
import SearchBar from '../../components/SearchBar/SearchBar';
import Filters from './Filters';
import ExcursionList from './ExcursionList';
import styles from './ExcursionsPage.module.css';

const ExcursionsPage = () => {
  return (
    <div className={styles.app}>
      <main>
        <SearchBar />
        <section className={styles.content}>
          <Filters />
          <ExcursionList />
        </section>
      </main>
    </div>
  );
};

export default ExcursionsPage;

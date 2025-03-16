import React from 'react';
import { useUsersSize } from '../../../hooks/useUsers.js';
import { useExcursionsSize } from '../../../hooks/useExcursions.js';

import styles from './HomeStats.module.css';

function HomeStats() {
  const { studentsSize, guidesSize, error: usersError } = useUsersSize();
  const { size, error: excursionsError } = useExcursionsSize();

  return (
    <div className={styles.container}>
      <div className={styles.sizeContainer}>
        <p className={styles.size}>{excursionsError ? -1 : size}</p>
        <p className={styles.title}>Excursiones Disponibles</p>
      </div>
      <div className={styles.sizeContainer}>
        <p className={styles.size}>{usersError ? -1 : studentsSize}</p>
        <p className={styles.title}>Estudiantes Registrados</p>
      </div>
      <div className={styles.sizeContainer}>
        <p className={styles.size}>{usersError ? -1 : guidesSize}</p>
        <p className={styles.title}>Guías Registrados</p>
      </div>
    </div>
  );
}

export default HomeStats;

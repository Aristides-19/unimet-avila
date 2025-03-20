import React from 'react';
import styles from './ExcursionDashboard.module.css';
import ExcursionCard from './ExcursionCard';
import PropTypes from 'prop-types';

function ExcursionDashboard({ excursionsHistory, role }) {
  return (
    <main className={styles.dashboard}>
      <section>
        <h2 className={styles.sectionTitle}>
          {role === 'Estudiante'
            ? 'Excursiones Reservadas'
            : 'Excursiones Asignadas'}
        </h2>
        {excursionsHistory.map((excursion) => (
          <ExcursionCard
            key={excursion.id}
            excursionId={excursion.id}
            available={true}
          />
        ))}
      </section>

      <section>
        <h2 className={styles.sectionTitle}>Historial de Excursiones</h2>
        {excursionsHistory.map((excursion) => (
          <ExcursionCard
            key={excursion.id}
            excursionId={excursion.id}
            available={false}
          />
        ))}
      </section>
    </main>
  );
}

ExcursionDashboard.propTypes = {
  excursionsHistory: PropTypes.arrayOf(PropTypes.object).isRequired,
  role: PropTypes.string.isRequired,
};

export default ExcursionDashboard;

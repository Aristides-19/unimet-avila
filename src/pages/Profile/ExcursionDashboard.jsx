import React from 'react';
import styles from './ExcursionDashboard.module.css';
import ExcursionCard from './ExcursionCard';

function ExcursionDashboard() {
  // Data for reserved excursions
  const reservedExcursions = [
    {
      id: 1,
      title: 'Excursión al Pico Naiguatá',
      time: '3:00 pm - 6:00pm',
      date: '20-02-2025',
      guide: 'Carlos Gonzáles',
    },
  ];

  // Data for historical excursions
  const historicalExcursions = [
    {
      id: 2,
      title: 'Paseo Tranquilo',
      time: '12:00 pm - 1:00pm',
      date: '24-03-2025',
      guide: 'Samuel Ramirez',
    },
    {
      id: 3,
      title: 'Excursión para Parejas',
      time: '1:00 pm - 5:00pm',
      date: '14-02-2025',
      guide: 'Cristiano Ronaldo',
    },
    {
      id: 4,
      title: 'Excursión para Principiantes',
      time: '11:00 am - 4:00pm',
      date: '20-02-2025',
      guide: 'El Divino',
    },
  ];

  return (
    <main className={styles.dashboard}>
      <section>
        <h2 className={styles.sectionTitle}>Excursiones Reservadas</h2>
        {reservedExcursions.map((excursion) => (
          <ExcursionCard
            key={excursion.id}
            title={excursion.title}
            time={excursion.time}
            date={excursion.date}
            guide={excursion.guide}
          />
        ))}
      </section>

      <section>
        <h2 className={styles.sectionTitle}>Historial de Excursiones</h2>
        {historicalExcursions.map((excursion) => (
          <ExcursionCard
            key={excursion.id}
            title={excursion.title}
            time={excursion.time}
            date={excursion.date}
            guide={excursion.guide}
          />
        ))}
      </section>
    </main>
  );
}

export default ExcursionDashboard;

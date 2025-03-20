import React from 'react';
import styles from './ExcursionCard.module.css';
import InfoItem from './InfoItem';
import PropTypes from 'prop-types';
import { IoCalendar, IoTime } from 'react-icons/io5';
import { useExcursionById } from '../../hooks/useExcursions.js';
import { formatDistanceToNow } from 'date-fns';
import { es } from 'date-fns/locale';
import { useUser } from '../../hooks/useUsers.js';
import { useNavigate } from 'react-router-dom';

function ExcursionCard({ excursionId, available }) {
  const navigate = useNavigate();
  const { excursion } = useExcursionById(excursionId);
  const { user } = useUser(excursion?.guideId?.id);
  if (!excursion) return <></>;
  const excursionDate = formatDistanceToNow(excursion?.date, {
    addSuffix: true,
    locale: es,
  });
  if (available && excursion?.status !== 'Disponible') {
    return <></>;
  }

  if (!available && excursion?.status !== 'Finalizada') {
    return <></>;
  }

  return (
    <article
      className={styles.card}
      onClick={() => navigate(`/excursions/${excursionId}`)}
    >
      <div className={styles.logoContainer}>
        <img
          src={
            excursion?.images[0]
              ? excursion?.images[0]
              : 'https://placehold.co/200x200/4a7c59/4a7c59'
          }
          alt={excursion?.title}
          className={styles.logo}
        />
      </div>

      <div className={styles.contentContainer}>
        <div className={styles.titleContainer}>
          <h3 className={styles.excursionTitle}>{excursion?.title}</h3>
        </div>

        <div className={styles.divider} />

        <div className={styles.infoContainer}>
          <div className={styles.infoGroup}>
            <InfoItem
              icon={<IoCalendar size={22} color='var(--unimet)' />}
              label='Fecha'
              value={excursionDate}
            />

            <InfoItem
              icon={<IoTime size={22} color='var(--earth-sky)' />}
              label='Guía'
              value={user?.name ? user?.name : 'No Asignado'}
            />
          </div>
        </div>
      </div>
    </article>
  );
}

ExcursionCard.propTypes = {
  excursionId: PropTypes.string.isRequired,
  available: PropTypes.bool.isRequired,
};

export default ExcursionCard;

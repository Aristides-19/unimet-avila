import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useAuth } from '../../../context/AuthContext';
import { useUser } from '../../../hooks/useUsers';
import { useExcursionById } from '../../../hooks/useExcursions';
import { useExcursionReviews } from '../../../hooks/useReviews';
import BackButton from '../../../components/BackButton/BackButton';
import styles from './Excursion.module.css';
import {
  FaCalendarAlt,
  FaCoffee,
  FaMapMarkerAlt,
  FaStar,
  FaUser,
} from 'react-icons/fa';
import { GrMapLocation } from 'react-icons/gr';
import { MdAccessTime, MdInsertComment } from 'react-icons/md';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';
import { Rating } from 'react-simple-star-rating';
import Button from '../../../components/Button/Button';
import { MeetingLocationMap } from '../../../components/Map/Map';
import { ReviewCard } from './ReviewCard.jsx';

const Excursion = () => {
  const { excursionId } = useParams();
  const { excursion } = useExcursionById(excursionId);
  const { reviews } = useExcursionReviews(excursionId);
  const { user: guide } = useUser(excursion?.guideId?.id);
  const day = String(excursion?.date.getDate()).padStart(2, '0');
  const month = String(excursion?.date.getMonth() + 1).padStart(2, '0');
  const year = excursion?.date.getFullYear();
  const { currentUser: user } = useAuth();
  const { user: userData } = useUser(user?.uid);
  const [showButton, setShowButton] = useState(false);
  const [showReviews, setShowReviews] = useState(true);
  const navigate = useNavigate();
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 370) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    };
    window.addEventListener('resize', handleResize);
    handleResize();
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  if (!excursion) return <></>;

  // Botón de Reservar
  const reserveButton = () => {
    return (
      <Button
        color='var(--forest)'
        backgroundColor='var(--earth-sky)'
        text='Reservar'
        onClick={() => navigate(`/excursions/${excursionId}/reserve`)}
      />
    );
  };

  return (
    <div className={styles.container}>
      <BackButton where='/excursions' />
      <div className={styles.generalInfo}>
        <div className={styles.left}>
          <h1>{excursion.title}</h1>
          {user &&
            userData?.role === 'Estudiante' &&
            !showButton &&
            reserveButton()}
          <div className={styles.infoItem}>
            <FaStar />
            <span>{excursion.type}</span>
          </div>
          <div className={styles.infoItem}>
            <FaMapMarkerAlt />
            <span>{excursion.route}</span>
          </div>

          {excursion.status === 'Disponible' ? (
            <div className={styles.statusBadge}>{excursion.status}</div>
          ) : (
            <Rating
              initialValue={excursion.averageRating}
              readonly={true}
              size={20}
              fillColor={'var(--unimet)'}
            ></Rating>
          )}
        </div>
        <div className={styles.right}>
          <h3 className={styles.price}>${excursion.price}</h3>
          {user &&
            userData?.role === 'Estudiante' &&
            showButton &&
            reserveButton()}
        </div>
      </div>
      <div className={styles.images}>
        <div className={styles.left}>
          <img
            key={0}
            src={
              excursion.images[0]
                ? excursion.images[0]
                : 'https://placehold.co/200x200/4a7c59/4a7c59'
            }
            alt={excursion.title + ` ${1}`}
            className={styles.image}
          />
        </div>

        {excursion.images.length >= 2 && (
          <div className={styles.right}>
            <img
              key={1}
              src={excursion.images[1]}
              alt={excursion.title + ` ${2}`}
              className={`${styles.image} ${excursion.images.length === 2 ? styles.twoImages : ''}`}
            />
            {excursion.images.length === 3 && (
              <img
                key={2}
                src={excursion.images[2]}
                alt={excursion.title + ` ${3}`}
                className={styles.image}
              />
            )}
          </div>
        )}
      </div>
      <hr className={styles.divider}></hr>
      <div className={styles.description}>
        <h2>Descripción</h2>
        <p>{excursion.description}</p>
      </div>
      <hr className={styles.divider}></hr>
      <div className={styles.meetingLocation}>
        <div className={styles.title}>
          <h2>Punto de Encuentro</h2>
          <Button
            color='var(--forest)'
            backgroundColor='var(--earth-sky)'
            onClick={() =>
              (window.location.href = `https://www.google.com/maps/search/?api=1&query=${excursion.meetingLocation.latitude},${excursion.meetingLocation.longitude}`)
            }
            icon={<GrMapLocation />}
          />
        </div>
        <MeetingLocationMap meetingLocation={excursion.meetingLocation} />
      </div>
      <hr className={styles.divider}></hr>
      <div className={styles.includes}>
        <h2>Incluye</h2>
        <div className={styles.layout}>
          <div className={styles.includesGap}>
            <div className={styles.infoItem}>
              <FaUser />
              <span>Guía: {guide ? guide.name : 'No Asignado'}</span>
            </div>
            <div className={styles.infoItem}>
              <FaCoffee />
              <span>{excursion.hasLunch ? 'Almuerzo' : 'No incluye'}</span>
            </div>
          </div>
          <div className={styles.includesGap}>
            <div className={styles.infoItem}>
              <FaCalendarAlt />
              <span>{`${day}-${month}-${year}`}</span>
            </div>
            <div className={styles.infoItem}>
              <MdAccessTime />
              <span>{excursion.duration} horas</span>
            </div>
          </div>
        </div>
      </div>
      {excursion.status === 'Disponible' ? (
        <></>
      ) : (
        <>
          <hr className={styles.divider}></hr>
          <div className={styles.reviews}>
            <div className={styles.title}>
              <h2>Reseñas</h2>
              <Button
                color='var(--forest)'
                backgroundColor='var(--earth-sky)'
                icon={<MdInsertComment />}
              />
              {/* Botón de Comentar Review */}
            </div>
            <div className={styles.title}>
              <h3>
                {reviews.length} reseña{reviews.length > 1 ? 's' : ''}{' '}
                verificada
                {reviews.length > 1 ? 's' : ''}
              </h3>
              <Button
                color='var(--forest)'
                backgroundColor='var(--sunlight)'
                text='Mostrar'
                className={styles.button}
                onClick={() =>
                  showReviews ? setShowReviews(false) : setShowReviews(true)
                }
                icon={showReviews ? <FaChevronDown /> : <FaChevronUp />}
              />
            </div>
            <hr className={styles.divider}></hr>
            {showReviews && (
              <div className={styles.reviewsContainer}>
                {reviews.map((review) => (
                  <ReviewCard
                    key={`${excursionId}/${review.id}`}
                    {...review}
                  ></ReviewCard>
                ))}
              </div>
            )}
          </div>
        </>
      )}
    </div>
  );
};

export default Excursion;

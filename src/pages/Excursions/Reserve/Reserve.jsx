import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import {
  useAddStudentToExcursion,
  useExcursionById,
} from '../../../hooks/useExcursions.js';
import { useImage } from '../../../hooks/useGenerics.js';
import styles from './Reserve.module.css';
import BackButton from '../../../components/BackButton/BackButton.jsx';
import ExcursionCard from '../ExcursionCard.jsx';
import { PayPalScriptProvider, PayPalButtons } from '@paypal/react-paypal-js';
import { useAuth } from '../../../context/AuthContext.jsx';
import { useAddExcursionToHistory, useUser } from '../../../hooks/useUsers.js';

const Reserve = () => {
  const { excursionId } = useParams();
  const { excursion } = useExcursionById(excursionId);
  const { imageUrl } = useImage('reservation-payment.jpeg');
  const [showImage, setShowImage] = useState(false);
  const { currentUser } = useAuth();
  const { user } = useUser(currentUser?.uid);
  const { addExcursionToUserHistory } = useAddExcursionToHistory();
  const { addStudentToExcursionData } = useAddStudentToExcursion();
  const navigate = useNavigate();
  const [isReserved, setIsReserved] = useState(false);
  useEffect(() => {
    if (user?.excursionsHistory) {
      const isExcursionInHistory = user.excursionsHistory.some(
        (reference) => reference?.path === `excursions/${excursionId}`
      );
      setIsReserved(isExcursionInHistory);
    }
  }, [user]);
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 991) {
        setShowImage(false);
      } else {
        setShowImage(true);
      }
    };
    window.addEventListener('resize', handleResize);
    handleResize();
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  if (!excursion) return <></>;

  return (
    <PayPalScriptProvider
      options={{
        clientId:
          'ATt9tJrz5qLV209YEJ3Jwlqvi58ww_AZRtfmFCESefduBP92QubwVZKgYRmXOn-NX1Tf78STDGEvAocL',
        currency: 'USD',
        intent: 'capture',
        locale: 'es_US',
        disableFunding: 'card',
      }}
    >
      <div className={styles.container}>
        {showImage && (
          <img className={styles.img} src={imageUrl} alt='Reserva' />
        )}
        <div className={styles.content}>
          <BackButton where={`/excursions/${excursionId}`} />
          <h1>Reserva tu Excursión</h1>
          <p>Realiza tu pago seguro con PayPal en nuestra plataforma.</p>
          <ExcursionCard {...excursion} />
          <p className={styles.grayText}>
            Inicia sesión en tu cuenta de PayPal para gestionar el pago de
            manera segura
          </p>

          {!isReserved ? (
            <PayPalButtons
              style={{ disableMaxWidth: true }}
              createOrder={(data, actions) => {
                return actions.order.create({
                  intent: 'CAPTURE',
                  purchase_units: [
                    {
                      amount: {
                        currency_code: 'USD',
                        value: excursion.price,
                      },
                      description: `Reserva de la excursión ${excursion.title}`,
                    },
                  ],
                });
              }}
              onApprove={(data, actions) => {
                return actions.order.capture().then((details) => {
                  console.log('Payment details: ', details);
                  addExcursionToUserHistory(currentUser?.uid, excursionId);
                  addStudentToExcursionData(currentUser?.uid, excursionId);
                  setIsReserved(true);
                  setTimeout(() => {
                    navigate(`/excursions/${excursionId}`);
                  }, 2000);
                });
              }}
              onError={(error) => {
                console.error('Failed payment: ', error);
              }}
            />
          ) : excursion.enrolledStudents.length === excursion.maxStudents ? (
            <h3>Excursión Llena</h3>
          ) : (
            <h3>¡Excursión Reservada o Finalizada!</h3>
          )}
        </div>
      </div>
    </PayPalScriptProvider>
  );
};

export default Reserve;

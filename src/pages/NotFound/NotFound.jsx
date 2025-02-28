import React from 'react';
import { Link } from 'react-router-dom';
import image from '../../assets/404-NotFound-Illustration.png';
import styles from './NotFound.module.css';

function NotFound() {
  return (
    <div className={styles.container}>
      <img src={image} alt='Senderista Perdido' className={styles.img} />
      <h1>404 - Página No Encontrada</h1>
      <p className={styles.text}>
        Le dijiste a tus amigos que no llevarías tu teléfono para intentar
        experimentar cómo era subir el Ávila. Compraste un mapa y una botella de
        agua y llevaste tu cámara para una foto de Caracas. Pero el mapa era del
        año 1911 y la ruta había cambiado. Así que aquí estás, en medio del
        cerro...
      </p>
      <Link to='/' className={styles.link}>
        Volver al Inicio
      </Link>
    </div>
  );
}

export default NotFound;

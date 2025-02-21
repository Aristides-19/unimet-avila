import React from 'react';
import { Link } from 'react-router-dom';
import image from '../assets/404-NotFound-Illustration.png';

function NotFound() {
  return (
    <div style={styles.container}>
      <img src={image} alt='Senderista Perdido' style={styles.img} />
      <h1>404 - Página No Encontrada</h1>
      <p style={styles.text}>
        Le dijiste a tus amigos que no llevarías tu teléfono para intentar
        experimentar cómo era subir el Ávila. Compraste un mapa y una botella de
        agua y llevaste tu cámara para una foto de Caracas. Pero el mapa era del
        año 1911 y la ruta había cambiado. Así que aquí estás, en medio del
        cerro...
      </p>
      <Link to='/' style={styles.link}>
        Volver al Inicio
      </Link>
    </div>
  );
}

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: '90vh',
    padding: '35px',
  },
  img: {
    width: '300px',
    height: 'auto',
    marginBottom: '20px',
  },
  text: {
    marginBottom: '20px',
  },
  link: {
    fontSize: '1.1rem',
  },
};

export default NotFound;

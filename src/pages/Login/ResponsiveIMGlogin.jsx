import React from 'react';
import image from './classroom.jpg'; // Importa tu imagen

function ResponsiveImage() {
  return (
    <img
      src={image}
      alt='Imagen de Login'
      style={{
        width: '80%',
        height: '80%',
        objectFit: 'cover',
        justifyContent: 'center',
        alignContent: 'center',
        margin: '0 auto',
        padding: '65px',
        borderRadius: '50px',
      }}
    />
  );
}

export default ResponsiveImage;

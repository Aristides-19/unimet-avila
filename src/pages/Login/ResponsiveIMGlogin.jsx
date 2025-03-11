import React from 'react';
import { useImage } from '../../hooks/useGenerics.js';

function ResponsiveImage() {
  const { imageUrl } = useImage('login.jpeg');
  return (
    <img
      src={imageUrl}
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

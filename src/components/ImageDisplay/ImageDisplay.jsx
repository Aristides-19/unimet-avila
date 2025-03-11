import React from 'react';
import styles from './ImageDisplay.module.css'; // Optional: If you want to use CSS Modules
import PropTypes from 'prop-types'; // Optional: For prop type validation

const ImageDisplay = ({
  imagePath,
  altText,
  containerClassName,
  imageClassName,
}) => {
  return (
    <div className={`${styles.imageContainer} ${containerClassName}`}>
      {' '}
      {/* Apply CSS Module class and optional containerClassName */}
      <img
        src={imagePath}
        alt={altText}
        className={`${styles.image} ${imageClassName}`} // agrega nuevos estilos de imagen al css
      />
    </div>
  );
};

// Optional: Prop type validation using PropTypes
ImageDisplay.propTypes = {
  imagePath: PropTypes.string.isRequired, // imagePath prop is required and must be a string
  altText: PropTypes.string, // altText is optional, but should be a string if provided
  containerClassName: PropTypes.string, // Optional prop to add extra CSS classes to the container div
  imageClassName: PropTypes.string, // Optional prop to add extra CSS classes to the image
};

export default ImageDisplay;

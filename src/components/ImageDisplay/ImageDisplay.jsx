import React from 'react';
import styles from './ImageDisplay.module.css';
import PropTypes from 'prop-types';

const ImageDisplay = ({
  imagePath,
  altText,
  imageClassName,
  borderRadio,
  ratio,
}) => {
  return (
    <img
      src={imagePath}
      alt={altText}
      className={`${styles.image} ${imageClassName}`}
      style={{
        borderRadius: borderRadio,
        aspectRatio: ratio,
      }}
    />
  );
};

ImageDisplay.propTypes = {
  imagePath: PropTypes.string.isRequired,
  altText: PropTypes.string,
  imageClassName: PropTypes.string,
  borderRadio: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  ratio: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

ImageDisplay.defaultProps = {
  altText: 'Imagen',
  borderRadio: 20,
};

export default ImageDisplay;

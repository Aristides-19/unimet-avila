import React from 'react';
import PropTypes from 'prop-types';
import styles from './Card.module.css';

export const Card = ({
  gap = '10px',
  padding = '20px',
  textAlign = 'left',
  alignItems = 'flex-start',
  additionalStyles = '', // Should be used for width as class from CSS module
  onClick,
  children,
}) => {
  const defaultStyle = {
    gap: gap,
    padding: padding,
    alignItems: alignItems,
    textAlign: textAlign,
  };
  return (
    <div
      style={defaultStyle}
      className={`${styles.card} ${additionalStyles}`}
      onClick={onClick}
    >
      {children}
    </div>
  );
};

Card.propTypes = {
  gap: PropTypes.string,
  padding: PropTypes.string,
  textAlign: PropTypes.string,
  alignItems: PropTypes.string,
  additionalStyles: PropTypes.string,
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func,
};

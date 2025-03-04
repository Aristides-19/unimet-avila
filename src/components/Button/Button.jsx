import React from 'react';
import PropTypes from 'prop-types';
import styles from './Button.module.css';

function Button({
  text,
  type = 'button',
  borderRadius = '8px',
  color,
  backgroundColor,
  hoverBackgroundColor, // Nueva propiedad
  onClick,
  className = '',
}) {
  const buttonStyle = {
    borderRadius: borderRadius,
    color: color,
    backgroundColor: backgroundColor,
  };

  return (
    <button
      type={type}
      style={buttonStyle}
      onClick={onClick}
      className={`${styles.button} ${className}`}
      onMouseEnter={(e) => e.target.style.backgroundColor = hoverBackgroundColor} // Cambiar color al hover
      onMouseLeave={(e) => e.target.style.backgroundColor = backgroundColor} // Restaurar color original
    >
      {text}
    </button>
  );
}

Button.propTypes = {
  text: PropTypes.string.isRequired,
  type: PropTypes.oneOf(['button', 'submit', 'reset']),
  borderRadius: PropTypes.string,
  color: PropTypes.string,
  backgroundColor: PropTypes.string,
  hoverBackgroundColor: PropTypes.string, 
  onClick: PropTypes.func,
  className: PropTypes.string,
};

export default Button;

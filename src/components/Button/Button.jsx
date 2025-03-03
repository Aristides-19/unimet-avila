import React from 'react';
import PropTypes from 'prop-types';
import styles from './Button.module.css';

function Button({
  text,
  type = 'button',
  borderRadius = '8px',
  color,
  backgroundColor,
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
    >
      {text}
    </button>
  );
}

Button.propTypes = {
  text: PropTypes.string.isRequired,
  type: PropTypes.oneOf(['button', 'submit', 'reset']),
  borderRadius: PropTypes.string,
  color: PropTypes.string.isRequired,
  backgroundColor: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  className: PropTypes.string,
};

export default Button;

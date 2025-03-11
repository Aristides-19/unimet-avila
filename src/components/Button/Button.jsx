import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styles from './Button.module.css';

function Button({
  text,
  type = 'button',
  borderRadius = '8px',
  color,
  backgroundColor,
  hoverBackgroundColor = backgroundColor,
  onClick,
}) {
  const [isHovered, setIsHovered] = useState(false);
  const buttonStyle = {
    borderRadius: borderRadius,
    color: color,
    backgroundColor: !isHovered ? backgroundColor : hoverBackgroundColor,
  };

  return (
    <button
      type={type}
      style={buttonStyle}
      onClick={onClick}
      className={styles.button}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
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
  hoverBackgroundColor: PropTypes.string,
  onClick: PropTypes.func,
};

export default Button;

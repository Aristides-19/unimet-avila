import React from 'react';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';
import { IoChevronBackOutline } from 'react-icons/io5';
import styles from './BackButton.module.css';

const BackButton = ({ text = 'Regresar', onClick, where }) => {
  const navigate = useNavigate();

  const handleBack = () => {
    if (onClick) {
      onClick();
    } else {
      navigate(where); // navega hacia atrás en el historial
    }
  };

  return (
    <div className={styles.backButtonContainer}>
      <button className={styles.backButton} onClick={handleBack}>
        <IoChevronBackOutline /> {text}
      </button>
    </div>
  );
};

BackButton.propTypes = {
  text: PropTypes.string,
  onClick: PropTypes.func,
  where: PropTypes.string,
};

export default BackButton;

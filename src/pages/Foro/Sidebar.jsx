import React from 'react';
import PropTypes from 'prop-types';
import styles from './Sidebar.module.css';

const Sidebar = ({ onNavigate }) => {
  return (
    <div className={styles.sidebar}>
      <button onClick={() => onNavigate('preguntas')}>Preguntas</button>
      <button onClick={() => onNavigate('miEspacio')}>Mi espacio</button>
      <button onClick={() => onNavigate('misPreguntas')}>Mis preguntas</button>
      <button onClick={() => onNavigate('misLikes')}>Mis Likes</button>
    </div>
  );
};
Sidebar.propTypes = {
  onNavigate: PropTypes.func.isRequired,
};

export default Sidebar;

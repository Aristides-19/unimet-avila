import React from 'react';
import styles from './Sidebar.module.css';
import { HiOutlineQuestionMarkCircle } from 'react-icons/hi';
import { FiMessageCircle } from 'react-icons/fi';

const Sidebar = () => {
  return (
    <aside className={styles.sidebar}>
      <nav className={styles.sidebarNav}>
        <a href='#' className={styles.navItem}>
          Mi Espacio
        </a>
        <a href='#' className={styles.navItem}>
          <HiOutlineQuestionMarkCircle className={styles.icon} />
          <span>Más Preguntas</span>
        </a>
        <a href='#' className={styles.navItem}>
          <FiMessageCircle className={styles.icon} />
          <span>Mis Respuestas</span>
        </a>
        {/* <a href='#' className={styles.navItem}>
          <i className={styles.icon}>heart</i>
          <span>Mis Likes</span>
        </a> */}
      </nav>
    </aside>
  );
};

export default Sidebar;

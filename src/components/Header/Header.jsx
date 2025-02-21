import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import logo from '/logo.svg';
import styles from './Header.module.css';

function Header() {
  const location = useLocation(); // Get current Route
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className={styles.header}>
      {/* Logo & Title */}
      <div className={styles.logoContainer}>
        <img src={logo} alt='Unimet Ávila' className={styles.logoImage} />
        <h1 className={styles.logoText}>UNIMET Ávila</h1>
      </div>

      {/* Navigation */}
      <nav>
        <ul className={`${styles.navList} ${isOpen ? styles.show : ''}`}>
          {navLinks.map((link) => (
            <li key={link.path}>
              <Link
                to={link.path}
                className={styles.navLink}
                style={{
                  color:
                    location.pathname === link.path
                      ? 'var(--earth-sky)'
                      : 'var(--forest)',
                }}
                onClick={() => setIsOpen(false)} // Close the dropdown when clicking a link
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>

        {/* Dropdown for width < 901px */}
        <div className={styles.hamburger} onClick={toggleMenu}>
          ☰
        </div>
      </nav>
    </header>
  );
}

const navLinks = [
  { path: '/', name: 'Inicio' },
  { path: '/excursions', name: 'Excursiones' },
  { path: '/blog', name: 'Blog' },
  { path: '/gallery', name: 'Galería' },
  { path: '/forum', name: 'Foro' },
  { path: '/contact', name: 'Contacto' },
];

export default Header;

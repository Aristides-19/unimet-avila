import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import logo from '/logo.svg';
import styles from './Header.module.css';
import Button from '../Button/Button';

function Header() {
  const location = useLocation(); // Get current Route
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleLoginClick = () => {
    navigate('/login');
    setIsOpen(false);
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
            <li
              key={link.path}
              className={`${
                link.path === '/register' || link.path === '/login'
                  ? styles.authLink
                  : ''
              } ${link.name === 'Contacto' ? styles.contactLink : ''}`}
            >
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

      {/* Auth Buttons for width > 900px */}
      <div className={styles.authButtons}>
        <Link
          to={navLinks[navLinks.length - 2].path}
          className={styles.navLink}
          style={{
            color:
              location.pathname === navLinks[navLinks.length - 2].path
                ? 'var(--earth-sky)'
                : 'var(--forest)',
          }}
          onClick={() => setIsOpen(false)} // Close the dropdown when clicking a link
        >
          {navLinks[navLinks.length - 2].name}
        </Link>
        <Button
          text='Iniciar Sesión'
          borderRadius='50px'
          color='var(--sunlight)'
          backgroundColor='var(--forest)'
          onClick={handleLoginClick}
        />
      </div>
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
  { path: '/register', name: 'Unirse' },
  { path: '/login', name: 'Iniciar Sesión' },
];

export default Header;

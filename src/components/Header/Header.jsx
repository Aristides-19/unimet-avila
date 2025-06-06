import React, { useEffect, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import logo from '/logo.svg';
import styles from './Header.module.css';
import Button from '../Button/Button';
import { useAuth } from '../../context/AuthContext.jsx';
import { FiLogOut } from 'react-icons/fi';
import { useUser } from '../../hooks/useUsers.js';

function Header() {
  const location = useLocation(); // Get current Route
  const [isOpen, setIsOpen] = useState(false);
  const { currentUser, logout: logout } = useAuth();
  const { user } = useUser(currentUser?.uid);
  const navigate = useNavigate();
  const [currentPath, setCurrentPath] = useState(location.pathname);

  useEffect(() => {
    setCurrentPath(location.pathname);
  }, [location]);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleLoginClick = () => {
    navigate('/login');
    setIsOpen(false);
  };

  const handleLogoutClick = () => {
    logout();
    navigate('/');
    setIsOpen(false);
  };

  const linksToDisplay = user?.role === 'admin' ? adminNavLinks : navLinks;

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
          {linksToDisplay.map((link) => {
            if (
              currentUser &&
              (link.path === '/register' || link.path === '/login')
            ) {
              return null;
            }
            return (
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
                      currentPath === link.path
                        ? 'var(--earth-sky)'
                        : 'var(--forest)',
                  }}
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </Link>
              </li>
            );
          })}

          {currentUser && (
            <>
              <li key='/profile' className={styles.authLink}>
                <Link
                  to={user?.role !== 'admin' ? '/profile' : '/'}
                  onClick={() => setIsOpen(false)}
                  className={`${styles.navLink} ${styles.profileLink}`}
                  style={{
                    color:
                      currentPath === '/profile'
                        ? 'var(--earth-sky)'
                        : 'var(--forest)',
                  }}
                >
                  {user?.role !== 'admin' ? 'Mi Perfil' : 'Administrador'}
                  <img
                    src={
                      user?.profilePicture
                        ? user?.profilePicture
                        : 'https://placehold.co/200x200/4a7c59/4a7c59'
                    }
                    alt='Perfil'
                    className={styles.profilePicture}
                  />
                </Link>
              </li>
              <li key='/logout' className={styles.authLink}>
                <Link
                  to='/'
                  className={styles.navLink}
                  onClick={() => {
                    setIsOpen(false);
                    handleLogoutClick();
                  }}
                >
                  Cerrar Sesión
                </Link>
              </li>
            </>
          )}
        </ul>
        {/* Dropdown para pantallas pequeñas */}
        <div className={styles.hamburger} onClick={toggleMenu}>
          ☰
        </div>
      </nav>

      {/* Auth Buttons para pantallas grandes */}
      <div className={styles.authButtons}>
        {currentUser ? (
          <div className={styles.loggedContainer}>
            <Link
              to={user?.role !== 'admin' ? '/profile' : '/'}
              className={`${styles.navLink} ${styles.profileLink}`}
              style={{
                color:
                  currentPath === '/profile'
                    ? 'var(--earth-sky)'
                    : 'var(--forest)',
              }}
              onClick={() => setIsOpen(false)}
            >
              {user?.role !== 'admin' ? 'Mi Perfil' : 'Administrador'}
              <img
                src={user?.profilePicture}
                alt='Perfil'
                className={styles.profilePicture}
              />
            </Link>
            <FiLogOut
              size={26}
              color='var(--forest)'
              onClick={handleLogoutClick}
              style={{ cursor: 'pointer' }}
            />
          </div>
        ) : (
          <>
            <Link
              to='/register'
              className={styles.navLink}
              style={{
                color:
                  currentPath === '/register'
                    ? 'var(--earth-sky)'
                    : 'var(--forest)',
              }}
              onClick={() => setIsOpen(false)}
            >
              Unirse
            </Link>
            <Button
              text='Iniciar Sesión'
              borderRadius='50px'
              color='var(--sunlight)'
              backgroundColor='var(--forest)'
              onClick={handleLoginClick}
            />
          </>
        )}
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

const adminNavLinks = [
  { path: '/', name: 'Inicio' },
  { path: '/excursions-admin', name: 'Excursiones' },
  { path: '/guides-admin', name: 'Guías' },
  { path: '/students-admin', name: 'Estudiantes' },
  { path: '/blog-admin', name: 'Blog' },
  { path: '/gallery', name: 'Galería' },
];

export default Header;

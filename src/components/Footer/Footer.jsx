import React from 'react';
import styles from './Footer.module.css';
import footerLogo from '../../assets/footerLogo.svg';
import { LuFacebook } from 'react-icons/lu';
import { FaXTwitter } from 'react-icons/fa6';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerLeft}>
        <img
          src={footerLogo}
          alt='Logo de Unimet Avila'
          className={styles.logo}
        />
        <p>
          Unimet Ávila conecta a los estudiantes con el Parque Nacional El
          Ávila, ofreciendo rutas y actividades recreativas en un entorno
          sustentable, promoviendo el cuidado de la naturaleza y la comunidad
          estudiantil.
        </p>
        <p className={styles.copyright}>
          Copyright © 2025 UNIMET Ávila - Todos los derechos reservados.
        </p>
      </div>

      <div className={styles.footerRight}>
        <h4 className={styles.contact}>Contáctanos</h4>
        <p>
          Universidad Metropolitana,
          <br />
          Caracas, Venezuela
          <br />
          Parque Nacional El Ávila
          <br />
          +58 212 123 4567
        </p>
        <p>
          soporte@unimetavila.com
          <br />
          contacto@unimetavila.com
        </p>
        <div className={styles.socialSection}>
          <p style={{ fontSize: 'var(--step--2)', margin: 0 }}>Síguenos</p>
          <a href='#' aria-label='Facebook'>
            <LuFacebook style={{ color: 'var(--sunlight)' }} size={22} />
          </a>
          <a href='#' aria-label='Twitter'>
            <FaXTwitter style={{ color: 'var(--sunlight)' }} size={24} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

import React from 'react';
import styles from './Footer.module.css';
import footerLogo from '../../assets/footerLogo.svg';
import facebookIcon from '../../assets/facebook-icon.png';
import twitterIcon from '../../assets/twitter-icon.png';
import linkedinIcon from '../../assets/linkedin-icon.png';


const Footer =()=> {
  return(
    <footer className={styles.footer}>
      <div className={styles['footer-left']}>
        <img src ={footerLogo} alt='Logo de Unimet Avila' className={styles.logo}/>
        <p>
        Unimet Ávila conecta a los estudiantes con el Parque Nacional El Ávila, ofreciendo rutas y actividades recreativas en un entorno sustentable, promoviendo el cuidado de la naturaleza y la comunidad estudiantil.
        </p>
        <p className={styles.copyright}>Copyright © 2025 UNIMET Ávila - Todos los derechos reservados.</p>
      </div>

      <div className={styles['footer-right']}>
        <h4>Contáctanos</h4>
        <p>
          Universidad Metropolitana,<br />
          Caracas, Venezuela<br />
          Parque Nacional El Ávila<br />
          +58 212 123 4567
        </p>
        <p>
        soporte@unimetavila.com<br />
        contacto@unimetavila.com
        </p>
        <div className={styles['social-section']}>
          <h4>Síguenos</h4>
          <div  className={styles['social-media-icons']}>
            <a href='#' aria-label='Facebook'>
              <img src={facebookIcon} alt='Facebook' />
            </a>
            <a href='#' aria-label='Twitter'>
              <img src={twitterIcon} alt='Twitter' />
            </a>
            <a href='#' aria-label='LinkedIN'>
              <img src={linkedinIcon} alt='LinkedIn' />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

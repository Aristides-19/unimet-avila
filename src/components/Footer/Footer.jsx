import React from 'react';
import './Footer.css';

const Footer =()=> {
  return(
    <footer className='footer'>
      <div className='footer-left'>
        <img src ='footerLogo.svg' alt='Logo de Unimet Avila' className='logo'/>
        <p>
        Unimet Ávila conecta a los estudiantes con el Parque Nacional El Ávila, ofreciendo rutas y actividades recreativas en un entorno sustentable, promoviendo el cuidado de la naturaleza y la comunidad estudiantil.
        </p>
        <p className='copyright'>Copyright © 2025 UNIMET Ávila - Todos los derechos reservados.</p>
      </div>

      <div className='footer-right'>
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
        <div className='social-section'>
          <h4>Síguenos</h4>
          <div  className='social-media-icons'>
            <a href='#' aria-label='Facebook'>
              <img src='src/assets/facebook-icon.png' alt='Facebook' />
            </a>
            <a href='#' aria-label='Twitter'>
              <img src='src/assets/twitter-icon.png' alt='Twitter' />
            </a>
            <a href='#' aria-label='LinkedIN'>
              <img src='src/assets/linkedin-icon.png' alt='LinkedIn' />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

import React from 'react';
import styles from './TiposExcursiones.module.css';
import Button from '../../../components/Button/Button';

import { MdArrowOutward } from 'react-icons/md';
import { LiaWalkingSolid } from 'react-icons/lia';
import { LiaRunningSolid } from 'react-icons/lia';
import { LiaHikingSolid } from 'react-icons/lia';
import { useNavigate } from 'react-router-dom';

const TiposExcursiones = () => {
  const navigate = useNavigate();
  const handleExcursionsClick = () => {
    navigate('/excursions');
  };
  return (
    <div className={styles.section}>
      <div className={styles.excursionesTop}>
        <h3 className=''>Tipos de Excursiones</h3>
        <Button
          text='Ver Excursiones'
          borderRadius='60px'
          color='var(--forest)'
          backgroundColor='var(--earth-sky)'
          onClick={handleExcursionsClick}
          icon={<MdArrowOutward size={20} style={{ marginLeft: '10px' }} />}
        />
      </div>
      <div className={styles.senderismos}>
        <div className={styles.card}>
          <LiaWalkingSolid className={styles.ligero} />
          <h4>Senderismo Ligero</h4>
          <p>
            <b>Disfruta de la naturaleza sin prisas.</b> Caminatas suaves por
            senderos bien señalizados, con poco desnivel y una duración
            moderada. Ideal para familias con niños, adultos mayores y personas
            que buscan una experiencia tranquila en contacto con la naturaleza.
          </p>
        </div>
        <div className={styles.card}>
          <LiaRunningSolid className={styles.avanzado} />
          <h4>Senderismo Avanzado</h4>
          <p>
            <b>Desafía tus límites y conquista nuevas cumbres.</b> Para los
            aventureros en senderismo, nuestras rutas avanzadas son para ti.
            Excursiones de mayor dificultad, con desniveles importantes,
            terrenos variados y una duración que pondrá a prueba tu resistencia.
          </p>
        </div>
        <div className={styles.card}>
          <LiaHikingSolid className={styles.extremo} />
          <h4>Senderismo Extremo</h4>
          <p>
            <b>Solo para los más audaces.</b> Estas excursiones extremas están
            diseñadas para los más experimentados. Son rutas técnicas de alta
            montaña, con desniveles pronunciados y condiciones climáticas
            cambiantes. Requieren equipo especializado y excelente condición
            física.
          </p>
        </div>
      </div>
    </div>
  );
};

export default TiposExcursiones;

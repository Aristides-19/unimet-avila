import React from 'react';
import styles from './BlogArticle.module.css';
import BackButton from '../../components/BackButton/BackButton';
import ImageDisplay from '../../components/ImageDisplay/ImageDisplay';

function BlogArticle() {
  // Donde dice Maria Alvarado hay que atraer el nombre del usuario

  return (
    <div className={styles.contenedorpadre}>
      <div>
        <BackButton />
      </div>
      <div className={styles.tag}>Seguridad</div>
      <div className={styles.contenedorhijo1}>
        <h1 className={styles.titulo}>
          5 Consejos para una Excursión Segura en el Parque Nacional El Ávila
        </h1>
        <p className={styles.parrafos}>Maria Alvarado 30 de enero, 2025</p>
        <ImageDisplay
          imagePath='../src/pages/Blog/Imagen_Blog.jpg'
          borderRadio={10}
          ratio='5/2'
        />
        <p className={styles.parrafos}>
          Explorar el Parque Nacional El Ávila es una experiencia única para los
          amantes de la naturaleza y la aventura. Sin embargo, la seguridad debe
          ser siempre una prioridad. En este artículo, te ofrecemos 5 consejos
          esenciales para disfrutar de una excursión segura, sin sacrificar la
          emoción de descubrir nuevos paisajes y rutas.
        </p>

        <div>
          <h3 className={styles.titulo}>
            Consejo 1: Planifica tu Ruta y Conoce el Terreno
          </h3>
          <p className={styles.parrafos}>
            Antes de salir, investiga las rutas disponibles y elige aquella que
            se adapte a tu nivel de experiencia. Consulta mapas, revisa
            pronósticos meteorológicos y pregunta a expertos o a otros
            excursionistas sobre las condiciones actuales del sendero.
          </p>
        </div>

        <div>
          <h3 className={styles.titulo}>
            Consejo 2: Informa a Alguien Sobre tu Itinerario
          </h3>
          <p className={styles.parrafos}>
            Nunca salgas a caminar solo sin avisar a alguien de confianza sobre
            tu plan. Comparte la ruta, el horario estimado de regreso y, en lo
            posible, mantén un dispositivo de comunicación (como un celular con
            batería extra) para emergencias.
          </p>
        </div>

        <div>
          <h3 className={styles.titulo}>Consejo 3: Equípate Adecuadamente</h3>
          <p className={styles.parrafos}>
            Lleva ropa y calzado adecuados para el terreno, así como una mochila
            con agua, alimentos energéticos, botiquín básico y protección contra
            el sol y la lluvia. No olvides un mapa físico o una aplicación de
            navegación offline, ya que la señal móvil puede ser inestable.
          </p>
        </div>

        <div>
          <h3 className={styles.titulo}>
            Consejo 4: Respeta tu Ritmo y el Medio Ambiente
          </h3>
          <p className={styles.parrafos}>
            Escucha a tu cuerpo y toma descansos cuando sea necesario. Recuerda
            que el objetivo es disfrutar de la naturaleza de forma responsable.
            No dejes basura y sigue las indicaciones de conservación para
            preservar el ecosistema del Ávila.
          </p>
        </div>

        <div>
          <h3 className={styles.titulo}>
            Consejo 5: Conoce y Respeta las Normas del Parque
          </h3>
          <p className={styles.parrafos}>
            Infórmate sobre las regulaciones del parque, como las áreas
            restringidas y las recomendaciones de seguridad. Estas normas están
            diseñadas para proteger tanto a los visitantes como al medio
            ambiente. Acatar estas pautas te permitirá tener una experiencia
            segura y respetuosa.
          </p>
        </div>

        <p className={styles.comentario}>
          “ Traveling can expose you to new environments and potential health
          risks, so it&apos;s crucial to take precautions to stay safe and
          healthy. ”
        </p>
        <ImageDisplay
          imagePath='../src/pages/Blog/Imagen_Blog_2.jpg'
          borderRadio={10}
          ratio='5/2'
        />
      </div>
    </div>
  );
}

export default BlogArticle;

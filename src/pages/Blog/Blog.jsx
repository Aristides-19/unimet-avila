import React from 'react';
import './Blog.css'; // Asegúrate de que la ruta sea correcta

function Blog() {
  // Falta importar la imagen de la montaña
  // Donde dice Maria Alvarado hay que atraer el nombre del usuario
  // Falta importar la imagen de la persona con la maleta

  return (
    <div className='contenedorpadre'>
      <div className='contenedorhijo1'>
        <h2 className='titulo'>
          5 Consejos para una Excursión Segura en el Parque Nacional El Ávila
        </h2>
        <p className='parrafos'>Maria Alvarado 30 de enero, 2025</p>
        <p className='parrafos'>
          Explorar el Parque Nacional El Ávila es una experiencia única para los
          amantes de la naturaleza y la aventura. Sin embargo, la seguridad debe
          ser siempre una prioridad. En este artículo, te ofrecemos 5 consejos
          esenciales para disfrutar de una excursión segura, sin sacrificar la
          emoción de descubrir nuevos paisajes y rutas.
        </p>

        <div>
          <h2 className='titulo'>
            Consejo 1: Planifica tu Ruta y Conoce el Terreno
          </h2>
          <p className='parrafos'>
            Antes de salir, investiga las rutas disponibles y elige aquella que
            se adapte a tu nivel de experiencia. Consulta mapas, revisa
            pronósticos meteorológicos y pregunta a expertos o a otros
            excursionistas sobre las condiciones actuales del sendero.
          </p>
        </div>

        <div>
          <h2 className='titulo'>
            Consejo 2: Informa a Alguien Sobre tu Itinerario
          </h2>
          <p className='parrafos'>
            Nunca salgas a caminar solo sin avisar a alguien de confianza sobre
            tu plan. Comparte la ruta, el horario estimado de regreso y, en lo
            posible, mantén un dispositivo de comunicación (como un celular con
            batería extra) para emergencias.
          </p>
        </div>

        <div>
          <h2 className='titulo'>Consejo 3: Equípate Adecuadamente</h2>
          <p className='parrafos'>
            Lleva ropa y calzado adecuados para el terreno, así como una mochila
            con agua, alimentos energéticos, botiquín básico y protección contra
            el sol y la lluvia. No olvides un mapa físico o una aplicación de
            navegación offline, ya que la señal móvil puede ser inestable.
          </p>
        </div>

        <div>
          <h2 className='titulo'>
            Consejo 4: Respeta tu Ritmo y el Medio Ambiente
          </h2>
          <p className='parrafos'>
            Escucha a tu cuerpo y toma descansos cuando sea necesario. Recuerda
            que el objetivo es disfrutar de la naturaleza de forma responsable.
            No dejes basura y sigue las indicaciones de conservación para
            preservar el ecosistema del Ávila.
          </p>
        </div>

        <div>
          <h2 className='titulo'>
            Consejo 5: Conoce y Respeta las Normas del Parque
          </h2>
          <p className='parrafos'>
            Infórmate sobre las regulaciones del parque, como las áreas
            restringidas y las recomendaciones de seguridad. Estas normas están
            diseñadas para proteger tanto a los visitantes como al medio
            ambiente. Acatar estas pautas te permitirá tener una experiencia
            segura y respetuosa.
          </p>
        </div>

        <p className='comentario'>
          “ Traveling can expose you to new environments and potential health
          risks, so it&apos;s crucial to take precautions to stay safe and
          healthy. ”
        </p>
      </div>
    </div>
  );
}

export default Blog;

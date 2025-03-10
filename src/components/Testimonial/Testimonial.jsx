import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import TestimonialCard from './TestimonialCard';
import styles from './Testimonial.module.css';

function Testimonial({ testimonials }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsPerView, setItemsPerView] = useState(3); // Cantidad inicial de testimonios visibles

  useEffect(() => {
    const updateItemsPerView = () => {
      if (window.innerWidth <= 480) {
        setItemsPerView(1); // Mostrar solo un testimonio en patallas pequenas
      } else if (window.innerWidth <= 768) {
        setItemsPerView(2); //Mostrar dos testimonios en pantallas medianas
      } else {
        setItemsPerView(3); // Mostrar tres testimonios en pantallas grandes
      }
    };

    updateItemsPerView();
    window.addEventListener('resize', updateItemsPerView); // Ajuta el diseno al redimensionar la ventana

    return () => window.removeEventListener('resize', updateItemsPerView);
  }, []);

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0
        ? testimonials.length - itemsPerView
        : prevIndex - itemsPerView
    );
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex + itemsPerView >= testimonials.length
        ? 0
        : prevIndex + itemsPerView
    );
  };

  const visibleTestimonials = testimonials.slice(
    currentIndex,
    currentIndex + itemsPerView
  );
  return (
    <section className={styles.carousel}>
      <h2 className={styles.heading}>Voces Estudiantiles</h2>
      <p className={styles.subheading}>Testimonios de Excursiones</p>

      <div className={styles.carouselContainer}>
        <button onClick={goToPrevious} className={styles.navButton}>
          {'<'}
        </button>
        <div className={styles.testimonialGrid}>
          {visibleTestimonials.map((testimonial, index) => (
            <TestimonialCard
              key={index}
              name={testimonial.name}
              title={testimonial.title}
              review={testimonial.review}
              image={testimonial.image}
              stars={testimonial.stars}
            />
          ))}
        </div>

        <button onClick={goToNext} className={styles.navButton}>
          {'>'}
        </button>
      </div>
    </section>
  );
}

Testimonial.propTypes = {
  testimonials: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      review: PropTypes.string.isRequired,
      image: PropTypes.string.isRequired,
      stars: PropTypes.number.isRequired,
    })
  ).isRequired,
};

export default Testimonial;

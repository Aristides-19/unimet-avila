import React, { useEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';

import { IoIosArrowRoundBack, IoIosArrowRoundForward } from 'react-icons/io';
import TestimonialCard from './TestimonialCard.jsx';
import styles from './Testimonial.module.css';

function Testimonial({ testimonials }) {
  const containerRef = useRef(null);
  const [currentPosition, setCurrentPosition] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setCurrentPosition(containerRef.current.scrollLeft);
    };

    const container = containerRef.current;
    container.addEventListener('scroll', handleScroll);

    return () => {
      container.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <section className={styles.container}>
      <p className={styles.subheading}>Voces Estudiantiles</p>
      <h2 className={styles.heading}>Testimonios de Excursiones</h2>
      <div className={styles.testimonialsContainer} ref={containerRef}>
        {testimonials.map((testimonial, index) => (
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
      <div className={styles.navButtonContainer}>
        <button
          className={styles.navButton}
          onClick={() =>
            containerRef.current.scrollTo({
              left: currentPosition - 300,
              behavior: 'smooth',
            })
          }
        >
          <IoIosArrowRoundBack />
        </button>
        <button
          className={styles.navButton}
          onClick={() =>
            containerRef.current.scrollTo({
              left: currentPosition + 300,
              behavior: 'smooth',
            })
          }
        >
          <IoIosArrowRoundForward />
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
      image: PropTypes.object.isRequired,
      stars: PropTypes.number.isRequired,
    })
  ).isRequired,
};

export default Testimonial;

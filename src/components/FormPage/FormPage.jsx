import React from 'react';
import styles from './FormPage.module.css';
import InputField from '../InputField/InputField';
import Button from '../Button/Button';
import BackButton from '../BackButton/BackButton';
import ImageDisplay from '../ImageDisplay/ImageDisplay';
import logo from '/logo.svg';
import PropTypes from 'prop-types';

const FormPage = ({ title, fields, imagePath }) => {
  return (
    <div className={styles.page}>
      <div className={styles.pageContainer}>
        <div className={styles.imageWrapper}>
          <ImageDisplay
            imagePath={imagePath} // Path de la imagen (desde src)
            altText={title}
            imageClassName={styles.customImageStyle}
          />
        </div>
        <div className={styles.formWrapper}>
          <div className={styles.logoContainer}>
            <img src={logo} alt='Unimet Ávila' className={styles.logoImage} />
            <h1 className={styles.logoText}>UNIMET Ávila</h1>
          </div>
          <div className={styles.backButtonContainer}>
            <BackButton className={styles.backButton} text='Regresar' />
          </div>
          <div className={styles.formSection_form}>
            <h2 className={styles.formTitle}>{title}</h2>
            <form>
              {fields.map((field, index) => (
                <div className={styles.formGroup} key={index}>
                  <InputField
                    label={field.label}
                    type={field.type}
                    placeholder={field.placeholder}
                    name={field.name}
                  />
                </div>
              ))}
              <Button type='submit'>Submit</Button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

FormPage.propTypes = {
  title: PropTypes.string.isRequired,
  fields: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      placeholder: PropTypes.string,
      name: PropTypes.string.isRequired,
    })
  ).isRequired,
};

FormPage.propTypes = {
  fields: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      placeholder: PropTypes.string,
      name: PropTypes.string.isRequired,
    })
  ).isRequired,
  imagePath: PropTypes.string.isRequired,
};

FormPage.propTypes = {
  fields: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      placeholder: PropTypes.string,
      name: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default FormPage;

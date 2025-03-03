import React, {useState} from 'react';
import { auth, db } from '../../firebase.js';
import {createUserWithEmailAndPassword} from 'firebase/auth';
import { doc, setDoc } from 'firebase/firestore';
import { useNavigate } from 'react-router-dom';

import InputField from '../../components/InputField/InputField';
import SelectField from '../../components/SelectField/SelectField';
import ErrorMessage from '../../components/ErrorMessage/ErrorMessage';
import SuccessMessage from '../../components/SuccessMessage/SuccessMessage';
import Button from '../../components/Button/Button';
import BackButton from '../../components/BackButton/BackButton';

import styles from './Register.module.css';

const Register = () => {

    const [formData, setFormData] = useState({
        nombre: '',
        apellido: '',
        genero: '',
        telefono: '',
        correo: '',
        contrasena: '',
        confirmarContrasena: '',
    });

    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');
        setSuccess('');

        if (formData.contrasena !== formData.confirmarContrasena){
            setError('Las contraseñas no coinciden.');
            return;
        }

        try {
            // Registro del usuario con Firebase Auth
            const userCredential = await createUserWithEmailAndPassword(
                auth,
                formData.correo,
                formData.contrasena
            );

            const user = userCredential.user;

            // Guardar datos adicionales en Firestore
            await setDoc(doc(db, 'usuarios', user.uid), {
                nombre: formData.nombre,
                apellido: formData.apellido,
                genero: formData.genero,
                telefono: formData.telefono,
                correo: formData.correo,
                uid: user.uid,
            });

            setSuccess('¡Cuenta creada exitosamente!');
            setFormData({
                nombre: '',
                apellido: '',
                genero: '',
                correo: '',
                telefono: '',
                contrasena: '',
                confirmarContrasena: '',
            });
        } catch(err){
            setError(
                err.code ==='auth/email-already-in-use' 
                    ? 'El correo ya esta registrado. Por favor, utiliza otro correo.'
                    : 'Error al registrar: ' + err.message
            );
        }
    };

    return(
        <div className = {styles.pageContainer}>
            {/*Imagen a la izquierda*/}
            <div className={styles.leftSection}></div>

            {/*Formulario de registro a la derecha*/}
            <div className={styles.rightSection}>
                <div className={styles.registerForm}>
                    <div className={styles.backButtonContainer}>
                        <BackButton 
                            className={styles.backButton} 
                            text='Regresar'
                        />
                    </div>
                    <h2>Crear Cuenta</h2>
                    {error && <ErrorMessage message={error} />}
                    {success && <SuccessMessage message={success} />}
                    
                    <form onSubmit={handleSubmit}>
                        {/* Nombre y Apellido en la misma línea */}
                        <div className={styles.row}>
                            <div className={styles.formGroup}>
                                <label>Nombre</label>
                                <InputField
                                    type='text'
                                    name='nombre'
                                    placeholder='Nombre'
                                    value={formData.nombre}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                            <div className={styles.formGroup}>
                                <label>Apellido</label>
                                <InputField 
                                    type='text'
                                    name='apellido'
                                    placeholder='Apellido'
                                    value={formData.apellido}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                        </div>

                        {/* Género y Número de Teléfono en la misma línea */}
                        <div className={styles.row}>
                            <div className={styles.formGroup}>
                                <label>Genéro</label>
                                <SelectField
                                    name='genero'
                                    value={formData.genero}
                                    onChange={handleChange}
                                    required
                                    options={['Masculino', 'Femenino', 'Otro']}
                                />
                            </div>
                            <div className={styles.formGroup}>
                                <label>Número de Teléfono</label>
                                <InputField
                                    type='tel'
                                    name='telefono'
                                    placeholder='Número de Teléfono'
                                    value={formData.telefono}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                        </div>
                        
                        <div className={styles.formGroup}>
                            <label>Correo Electrónico</label>
                            <InputField
                                type='email'
                                name='correo'
                                placeholder='Correo Electrónico'
                                value={formData.correo}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className={styles.formGroup}>
                            <label>Contraseña</label>
                            <InputField
                                type='password'
                                name='contrasena'
                                placeholder='Contraseña'
                                value={formData.contrasena}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className={styles.formGroup}>
                            <label>Confirmar Contraseña</label>
                            <InputField
                                type='password'
                                name='confirmarContrasena'
                                placeholder='Confirmar Contraseña'
                                value={formData.confirmarContrasena}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <Button
                            text='Crear Cuenta'
                            type='submit'
                            color='#fff'
                            backgroundColor='var(--earth-sky)'
                            borderRadius='6px'
                            className={styles.createAccountButton}
                        />
                    </form>
                    <p className={styles.loginLink}>¿Ya tienes una cuenta?<a href='/login'>Iniciar Sesión</a></p>
                    <div className={styles.socialRegister}>
                        <p>O regístrate con</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;
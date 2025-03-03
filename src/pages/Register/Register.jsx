import React, {useState} from 'react';
import { auth, db } from '../../firebase.js';
import {createUserWithEmailAndPassword} from 'firebase/auth';
import { doc, setDoc } from 'firebase/firestore';
import styles from './Register.module.css';

const Register = () => {
    const [formData, setFormData] = useState({
        nombre: '',
        apellido: '',
        genero: '',
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
                correo: formData.correo,
                uid: user.uid,
            });

            setSuccess('¡Cuenta creada exitosamente!');
            setFormData({
                nombre: '',
                apellido: '',
                genero: '',
                correo: '',
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
        <div className = {styles.registerForm}>
            <h2>Crear Cuenta</h2>
            {error && <p className={styles.error}>{error}</p>}
            {success && <p className= {styles.success}>{success}</p>}
            <form onSubmit={handleSubmit}>
                <input 
                    type='text'
                    name='nombre'
                    placeholder='Nombre'
                    value={formData.nombre}
                    onChange={handleChange}
                    required
                />
                <input 
                    type='text'
                    name='apellido'
                    placeholder='Apellido'
                    value={formData.apellido}
                    onChange={handleChange}
                    required
                />
                <select
                    name='genero'
                    value={formData.genero}
                    onChange={handleChange}
                    required
                >
                    <option value=''>Selecciona tu género</option>
                    <option value="Masculino">Masculino</option>
                    <option value="Femenino">Femenino</option>
                    <option value='Otro'>Otro</option>
                </select>
                <input
                    type='email'
                    name='correo'
                    placeholder='Correo Electrónico'
                    value={formData.correo}
                    onChange={handleChange}
                    required
                />
                <input
                    type='password'
                    name='contrasena'
                    placeholder='Contraseña'
                    value={formData.contrasena}
                    onChange={handleChange}
                    required
                />
                <input
                    type='password'
                    name='confirmarContrasena'
                    placeholder='Confirmar Contraseña'
                    value={formData.confirmarContrasena}
                    onChange={handleChange}
                    required
                />
                <button type='submit'>Crear Cuenta</button>
            </form>
        </div>
    );
};

export default Register;
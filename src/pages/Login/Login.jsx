import React, {useState} from "react"
import { auth, db } from '../../firebase.js';
import styles from './Login.module.css'


function Login(){
    const [userEmail, setUserEmail] = useState("")
    const [password, setPassword] = useState("")
    const [error, setError] = useState(null)
    const [success, setSuccess] = useState(null)

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError(null);

        try{
            await auth.signInWithEmailAndPassword(email, password);
        }catch(err){
            setError(err.message)
        }
    };

    return (<div className={styles.registerForm}>
        <h2>Iniciar sesión</h2>
        {error && <p style={{ color: 'red' }}>{error}</p>}
        <form onSubmit={handleSubmit}>
            <input
                type="email"
                placeholder="Correo Electronico"
                value={userEmail}
                onChange={(e) => setUserEmail(e.target.value)}
                required
            />
            <input
                type="password"
                placeholder="Contraseña"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
            />
            <button type="submit">Iniciar sesión</button>
        </form>
    </div>)

}

export default Login;
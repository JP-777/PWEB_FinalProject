import React, { useState } from 'react';
import './Profile.css';
import { Link } from 'react-router-dom';

export function Profile() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = (event) => {
        event.preventDefault();
        console.log('Email:', email);
        console.log('Password:', password);
    };

    const handleRegisterClick = () => {
        // Aquí podrías mostrar el formulario de registro, abrir un modal, o redirigir a una nueva página de registro.
        // Por ahora, redirigiré al usuario a la página de registro.
        window.location.href = '/register'; // Cambia la ruta según la configuración de tu aplicación.
    };

    return (
        <div className="profile">
            <h2>Iniciar Sesión</h2>
            <form onSubmit={handleLogin}>
                <div className="form-group">
                    <label htmlFor="email">Correo Electrónico:</label>
                    <input
                        type="email"
                        id="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="password">Contraseña:</label>
                    <input
                        type="password"
                        id="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                </div>
                <button type="submit">Iniciar Sesión</button>
            </form>
            <div className="register-link">
                <p>¿Aún no estás registrado? <Link to="/register" onClick={handleRegisterClick}>Regístrate</Link></p>
            </div>
        </div>
    );
}

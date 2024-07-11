import React from 'react';
import './UserInfo.css';

const UserInfo = ({ userData, isAdmin, onLogout }) => {
    return (
        <div className="user-info">
            <h2>Bienvenido, {userData.name}</h2>
            <p>Correo: {userData.email}</p>
            {isAdmin && <button>Management</button>} {/* Botón para administradores */}
            <button onClick={onLogout}>Cerrar Sesión</button>
        </div>
    );
};

export default UserInfo;

import React from 'react';
import './UserInfo.css';

export function UserInfo ({ userData, isAdmin, onLogout }){
    return (
        <div className="user-info">
            <h2>Bienvenido, {userData.name}</h2>
            <p>Correo: {userData.email}</p>
            {isAdmin && <button>Management</button>}
            <button onClick={onLogout}>Cerrar Sesión</button>
        </div>
    );
};

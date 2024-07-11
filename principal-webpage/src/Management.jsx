import React from 'react';
import './Management.css';

const Management = () => {
    return (
        <div className="management">
            <div className="zoom-effect">
                <button>Finanzas</button>
            </div>
            <div className="zoom-effect">
                <button>Stock de Productos</button>
            </div>
            <div className="zoom-effect">
                <button>Personal</button>
            </div>
        </div>
    );
};

export default Management;

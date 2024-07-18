const express = require('express');
const mysql = require('mysql');
const cors = require('cors');

const app = express();
app.use(cors());

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'gestion_negocio'
});

db.connect(err => {
    if (err) {
        console.error('Error al conectar a la base de datos:', err);
        return;
    }
    console.log('Conectado a la base de datos MySQL');
});

app.get('/api/productos', (req, res) => {
    const query = 'SELECT * FROM productos';
    db.query(query, (err, results) => {
        if (err) {
            console.error('Error al obtener los datos de productos:', err);
            res.status(500).send('Error al obtener los datos de productos');
            return;
        }
        res.json(results);
    });
});

app.get('/api/buscar', (req, res) => {
    const searchQuery = req.query.q;
    const query = 'SELECT * FROM productos WHERE nombre LIKE ?';
    db.query(query, [`%${searchQuery}%`], (err, results) => {
        if (err) {
            console.error('Error al realizar la búsqueda:', err);
            res.status(500).send('Error al realizar la búsqueda');
            return;
        }
        res.json(results);
    });
});

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Servidor backend escuchando en el puerto ${PORT}`);
});

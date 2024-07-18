const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(bodyParser.json());

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '', 
    database: 'pwebfinal'
});

db.connect(err => {
    if (err) {
        throw err;
    }
    console.log('MySQL Connected...');
});

app.post('/register', (req, res) => {
    const { userName, password, firstName, lastName } = req.body;
    const sql = 'INSERT INTO Users (userName, password, firstName, lastName) VALUES (?, ?, ?, ?)';
    db.query(sql, [userName, password, firstName, lastName], (err, result) => {
        if (err) {
            res.status(500).send('ESTE USUARIO O CORREO YA ESTÁ REGISTRADO');
        } else {
            res.send('REGISTRO COMPLETADO');
        }
    });
});

app.post('/profile', (req, res) => {
    const { userName, password } = req.body;
    const sql = 'SELECT firstName, lastName FROM Users WHERE userName = ? AND password = ?';
    db.query(sql, [userName, password], (err, results) => {
        if (err) {
            res.status(500).send('ERROR AL INICIAR SESION');
        } else if (results.length > 0) {
            res.send({ success: true, user: results[0] });
        } else {
            res.send({ success: false, message: 'USUARIO O CONTRASEÑA INCORRECTOS' });
        }
    });
});

app.listen(3001, () => {
    console.log('Server started on port 3001');
});

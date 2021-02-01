const express = require('express');
const cors = require('cors');

require('dotenv').config();

const { dbConnection } = require('./database/config');

//Crear el servidor express
const app = express();

//Configuracion CORS
app.use(cors());

//Base de Datos;
dbConnection();

console.log(process.env);

app.get('/', (req, res) => {
    res.json({
        ok: true,
        msg: 'Hola mundo'
    })
});

app.listen(process.env.PORT, () => {
    console.log('Servidor corriendo en el puerto 4201');
});
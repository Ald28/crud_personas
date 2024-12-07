const mysql = require('mysql2');
require('dotenv').config(); // Cargar las variables de entorno

// Crear la conexión a la base de datos con las variables de entorno
const connection = mysql.createConnection({
    host: process.env.DB_HOST,        // Toma del archivo .env
    user: process.env.DB_USER,        // Toma del archivo .env
    password: process.env.DB_PASSWORD,// Toma del archivo .env
    database: process.env.DB_NAME     // Toma del archivo .env
});

// Verificar la conexión
connection.connect((err) => {
    if (err) {
        console.error('Error al conectar con la base de datos: ' + err.stack);
        return;
    }
    console.log('Conectado a la base de datos con ID ' + connection.threadId);
});

module.exports = connection;

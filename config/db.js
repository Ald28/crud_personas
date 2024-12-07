const mysql = require('mysql2');

// Crear la conexión a la base de datos
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',  // Cambia según tu configuración
    password: '1234',  // Cambia según tu configuración
    database: 'crud_personas'
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

const db = require('../config/db');

// Listar todas las personas
const listarPersonas = (req, res) => {
    db.query('SELECT * FROM personas', (err, results) => {
        if (err) {
            return res.status(500).json({ error: 'Error al obtener personas' });
        }
        res.json(results);
    });
};

// Crear una persona
const crearPersona = (req, res) => {
    const { nombre, edad, email } = req.body;

    // Verificar si se recibieron los datos correctamente
    if (!nombre || !edad || !email) {
        return res.status(400).json({ error: 'Faltan datos para crear la persona' });
    }

    const query = 'INSERT INTO personas (nombre, edad, email) VALUES (?, ?, ?)';
    db.query(query, [nombre, edad, email], (err, result) => {
        if (err) {
            console.error('Error al crear persona:', err);  // Para obtener más detalles del error
            return res.status(500).json({ error: 'Error al crear la persona', details: err });
        }
        res.status(201).json({
            id: result.insertId,
            nombre,
            edad,
            email
        });
    });
};

// Obtener una persona por ID
const obtenerPersona = (req, res) => {
    const { id } = req.params;
    db.query('SELECT * FROM personas WHERE id = ?', [id], (err, result) => {
        if (err) {
            return res.status(500).json({ error: 'Error al obtener la persona' });
        }
        if (result.length === 0) {
            return res.status(404).json({ error: 'Persona no encontrada' });
        }
        res.json(result[0]);
    });
};

// Actualizar una persona
const actualizarPersona = (req, res) => {
    const { id } = req.params;
    const { nombre, edad, email } = req.body;

    // Verificar si se recibieron los datos correctamente
    if (!nombre || !edad || !email) {
        return res.status(400).json({ error: 'Faltan datos para actualizar la persona' });
    }

    const query = 'UPDATE personas SET nombre = ?, edad = ?, email = ?, updatedAt = NOW() WHERE id = ?';
    db.query(query, [nombre, edad, email, id], (err, result) => {
        if (err) {
            return res.status(500).json({ error: 'Error al actualizar la persona' });
        }
        if (result.affectedRows === 0) {
            return res.status(404).json({ error: 'Persona no encontrada' });
        }
        res.json({ id, nombre, edad, email, updatedAt: new Date() });
    });
};

// Eliminar una persona
const eliminarPersona = (req, res) => {
    const { id } = req.params;
    db.query('DELETE FROM personas WHERE id = ?', [id], (err, result) => {
        if (err) {
            return res.status(500).json({ error: 'Error al eliminar la persona' });
        }
        if (result.affectedRows === 0) {
            return res.status(404).json({ error: 'Persona no encontrada' });
        }
        res.json({ message: 'Persona eliminada' });
    });
};

module.exports = {
    listarPersonas,
    crearPersona,
    obtenerPersona,
    actualizarPersona,
    eliminarPersona
};

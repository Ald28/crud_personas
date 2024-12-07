const express = require('express');
const router = express.Router();
const personaController = require('../controllers/personaController');

// Rutas CRUD
router.get('/', personaController.listarPersonas);
router.post('/', personaController.crearPersona);
router.get('/:id', personaController.obtenerPersona);
router.put('/:id', personaController.actualizarPersona);
router.delete('/:id', personaController.eliminarPersona);

module.exports = router;

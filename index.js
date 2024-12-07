const express = require('express');
const personaRoutes = require('./routes/personaRoutes');
const app = express();
const PORT = 3000;

// Middleware
app.use(express.json());

// Rutas
app.use('/personas', personaRoutes);

// Iniciar servidor
app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});

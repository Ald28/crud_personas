const express = require('express');
const personaRoutes = require('./routes/personaRoutes');
const app = express();
const PORT = process.env.PORT || 3000;  // Asegúrate de que use el puerto proporcionado por Railway

// Middleware
app.use(express.json());

// Rutas
app.use('/personas', personaRoutes);

// Iniciar servidor
app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});

const express = require('express');
const path = require('path');
const app = express();

// Servir archivos estáticos (Asegúrate de que la carpeta física se llame 'public' en minúsculas)
app.use(express.static(path.join(__dirname, 'public')));

// Importar rutas (Corregido a minúsculas y nombres de archivos reales)
const homeRoutes = require('./Routers/home.js');
const valoresRoutes = require('.Routers/valores.js');
const skillsRoutes = require('./Routers/skills.js');
const proyectosRoutes = require('./Routers/proyects.js'); // Apunta a proyects.js
const contactoRoutes = require('./Routers/contact.js');   // Apunta a contact.js

// Usar rutas
app.use('/', homeRoutes);
app.use('/valores', valoresRoutes);
app.use('/skills', skillsRoutes);
app.use('/proyectos', proyectosRoutes);
app.use('/contacto', contactoRoutes);

app.listen(3000, () => {
  console.log("Servidor corriendo en http://localhost:3000");
});
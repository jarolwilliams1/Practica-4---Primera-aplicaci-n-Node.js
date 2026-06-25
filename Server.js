const express = require('express');
const path = require('path');
const app = express();

// Servir archivos estáticos desde la carpeta Public
app.use(express.static(path.join(__dirname, 'Public')));

// Importar rutas
const homeRoutes = require('./Routers/home.js');
const valoresRoutes = require('./Routers/valores.js');
const skillsRoutes = require('./Routers/skills.js');
const proyectosRoutes = require('./Routers/proyects.js');
const contactoRoutes = require('./Routers/contact.js');

// Usar rutas
app.use('/', homeRoutes);
app.use('/valores', valoresRoutes);
app.use('/skills', skillsRoutes);
app.use('/proyectos', proyectosRoutes);
app.use('/contacto', contactoRoutes);

app.listen(3000, () => {
  console.log("Servidor corriendo en http://localhost:3000");
});
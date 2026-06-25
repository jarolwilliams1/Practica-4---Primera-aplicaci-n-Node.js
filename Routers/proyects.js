
// Express es el framework que facilita crear servidores y manejar rutas.
const express = require('express');

// irve para construir rutas de archivos de manera segura, independientemente del sistema operativo.
const path = require('path');

// Crea un router: un objeto especial de Express que permite definir rutas de forma modular.
const router = express.Router();

router.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../views/Proyects.html'));
});

module.exports = router;
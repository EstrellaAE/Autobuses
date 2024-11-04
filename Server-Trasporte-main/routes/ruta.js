// Rutas para Trasporte
const express = require('express');
const router = express.Router();
const rutaController = require('../controllers/rutaController');

// api/rutas

router.get('/', rutaController.obtenerRutas);


module.exports = router;
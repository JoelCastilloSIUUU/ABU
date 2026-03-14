const express = require('express');
const router = express.Router();

const ctrlAuth = require('../controllers/auth');
const ctrlContenidos = require('../controllers/contenidos');

router.get('/', ctrlAuth.login);
router.get('/registro', ctrlAuth.registro);
router.get('/principal', ctrlContenidos.principal);

router.get('/whatsapp', ctrlContenidos.whatsapp);
router.get('/whatsapp/agregar-contacto', ctrlContenidos.whatsappAgregarContacto);
router.get('/whatsapp/agregar-contacto/paso/:n', ctrlContenidos.whatsappAgregarContactoPaso);
router.get('/whatsapp/agregar-contacto/completado', ctrlContenidos.whatsappAgregarContactoCompletado);

module.exports = router;
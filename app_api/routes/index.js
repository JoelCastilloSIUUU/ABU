const express = require('express');
const router = express.Router();
const ctrlCursos = require('../controllers/cursos');
const ctrlAuth = require('../controllers/auth');
const ctrlResenas = require('../controllers/resenas');

// RUTAS DE AUTENTICACIÓN (Login/Registro)
router.post('/register', ctrlAuth.registro);
router.post('/login', ctrlAuth.login);

// CRUD de Usuarios
router
    .route('/users/:userid')
    .get(ctrlAuth.usuarioLeerUno)    // Read (Ver perfil)
    .put(ctrlAuth.usuarioActualizar) // Update (Editar nombre/contraseña)
    .delete(ctrlAuth.usuarioBorrar); // Delete (Borrar cuenta)

// RUTAS DE CURSOS
router.route('/cursos')
    .get(ctrlCursos.cursosListar)
    .post(ctrlCursos.cursosCrear);

router.route('/cursos/:cursoid')
    .get(ctrlCursos.cursosLeerUno)
    .put(ctrlCursos.cursosActualizar) // <-- Añade esta
    .delete(ctrlCursos.cursosBorrar); // <-- Añade esta


// RESEÑAS POR CURSO (API)
router.route('/cursos/:cursoid/resenas')
  .get(ctrlResenas.resenasListar)
  .post(ctrlResenas.resenasCrear);

router.route('/cursos/:cursoid/resenas/:resenaid')
  .put(ctrlResenas.resenasActualizar)
  .delete(ctrlResenas.resenasBorrar);

// STATS (promedio y cantidad)
router.get('/cursos/:cursoid/calificacion', ctrlResenas.calificacionCurso);

module.exports = router;

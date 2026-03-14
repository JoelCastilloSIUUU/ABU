const mongoose = require('mongoose');

const registro = (req, res) => {
    if (!req.body.nombre || !req.body.email || !req.body.password) {
        return res.status(400).json({ "mensaje": "Faltan datos obligatorios (nombre, email o password)" });
    }
    res.status(201).json({
        "mensaje": "Usuario validado con éxito",
        "nombre": req.body.nombre,
        "email": req.body.email
    });
};

const login = (req, res) => {
    res.status(200).json({ "mensaje": "Login exitoso simulado" });
};

const usuarioLeerUno = (req, res) => {
    res.status(200).json({
        "usuarioId": req.params.userid,
        "nombre": "Joel Sebastian",
        "cursosActivos": [
            { "id": "1", "nombre": "WhatsApp", "color": "#25D366" },
            { "id": "2", "nombre": "YouTube", "color": "#FF0000" }
        ]
    });
};

const usuarioInscribirCurso = (req, res) => {
    if (!req.body.nombreCurso) {
        return res.status(400).json({ "mensaje": "Nivel 2: Debes seleccionar un curso para añadir" });
    }
    res.status(201).json({
        "mensaje": "Curso agregado a tu lista personalizada",
        "curso_añadido": req.body.nombreCurso
    });
};

const usuarioBorrar = (req, res) => {
    const cursoId = req.params.mid; // El ID que viene en la URL
    res.status(200).json({
        "mensaje": "Nivel 2: Curso eliminado correctamente de tu vista",
        "id_eliminado": cursoId
    });
};

const usuarioActualizarProgreso = (req, res) => {
    if (req.body.progreso === undefined) {
        return res.status(400).json({ "mensaje": "Nivel 2: El progreso es obligatorio" });
    }
    res.status(200).json({
        "mensaje": "Avance guardado con éxito",
        "nuevo_progreso": req.body.progreso + "%"
    });
};

const usuarioActualizar = (req, res) => {
    res.status(200).json({ "mensaje": "Datos del perfil actualizados" });
};

module.exports = {
    registro,
    login,
    usuarioLeerUno,
    usuarioInscribirCurso,
    usuarioActualizarProgreso,
    usuarioActualizar,
    usuarioBorrar
};
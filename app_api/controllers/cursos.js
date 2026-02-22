// GET: Listar todos los cursos (INCLUYE EL BUSCADOR)
const cursosListar = (req, res) => {
    const textoBuscado = req.query.q; // Captura lo que pones en ?q=...

    if (textoBuscado) {
        res.status(200).json({
            "mensaje": "Resultados de búsqueda para: " + textoBuscado,
            "resultados": [
                { "nombre": textoBuscado, "color": "#FF8C00", "icono": "bi-search" }
            ]
        });
    } else {
        res.status(200).json([
            { "nombre": "WhatsApp", "color": "#25D366", "icono": "bi-chat" },
            { "nombre": "YouTube", "color": "#FF0000", "icono": "bi-play" }
        ]);
    }
};

// POST: Crear un nuevo curso (PERSONALIZADO)
const cursosCrear = (req, res) => {
    res.status(201).json({ 
        "mensaje": "Curso personalizado creado con éxito",
        "datos_guardados": req.body 
    });
};

// GET: Leer un curso específico
const cursosLeerUno = (req, res) => {
    res.status(200).json({ "mensaje": "Detalles del curso ID: " + req.params.cursoid });
};

// PUT: Actualizar un curso (EDITAR PERSONALIZACIÓN)
const cursosActualizar = (req, res) => {
    res.status(200).json({
        "mensaje": "Curso ID: " + req.params.cursoid + " actualizado",
        "nuevos_datos": req.body
    });
};

// DELETE: Borrar un curso (ELIMINAR PERSONALIZADO)
const cursosBorrar = (req, res) => {
    res.status(204).json(null); // 204 significa "Todo OK, elemento borrado"
};

module.exports = {
    cursosListar,
    cursosCrear,
    cursosLeerUno,
    cursosActualizar,
    cursosBorrar
};
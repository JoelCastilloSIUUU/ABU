const mongoose = require('mongoose');

// Definición del esquema según lo que vimos en tu app
const cursoSchema = new mongoose.Schema({
    nombre: { type: String, required: true },
    descripcion: String,
    icono: String,
    color_hex: String,
    progreso: { type: Number, default: 0 }
});

mongoose.model('Curso', cursoSchema);
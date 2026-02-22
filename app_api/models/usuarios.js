const mongoose = require('mongoose');

const usuarioSchema = new mongoose.Schema({
    nombre: { type: String, required: true },
    email: { type: String, unique: true, required: true },
    password: { type: String, required: true }, // <--- LA CONTRASEÑA
    fechaCreacion: { type: Date, default: Date.now }
});

mongoose.model('Usuario', usuarioSchema);
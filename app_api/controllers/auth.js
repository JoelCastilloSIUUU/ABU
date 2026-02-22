const registro = (req, res) => {
    res.status(201).json({
        "mensaje": "Usuario registrado con éxito",
        "usuario": req.body.email,
        "password_recibida": "********" 
    });
};

const login = (req, res) => {
    res.status(200).json({
        "mensaje": "Login exitoso",
        "token": "simulacion-de-token-123"
    });
};

const usuarioLeerUno = (req, res) => {
    res.status(200).json({
        "mensaje": "Datos del usuario con ID: " + req.params.userid,
        "email": "ejemplo@correo.com"
    });
};

const usuarioActualizar = (req, res) => {
    res.status(200).json({
        "mensaje": "Usuario actualizado correctamente",
        "datos_nuevos": req.body
    });
};

const usuarioBorrar = (req, res) => {
    res.status(204).json(null); 
};

// Único bloque de exportación con todas las funciones
module.exports = {
    registro,
    login,
    usuarioLeerUno,
    usuarioActualizar,
    usuarioBorrar
};
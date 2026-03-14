const login = (req, res) => {
    res.render('login', { 
        title: 'Tu Guía Digital',
        subtitle: '¡Aprende a usar tu celular paso a paso y de una forma muy interactiva!',
        botonPrincipal: 'Iniciar sesión',
        registroTexto: '¿No tienes cuenta? Regístrate'
    });
};


const registro = (req, res) => {
  res.render('registro', { 
    title: 'Tu Guía Digital',
    subtitle: 'Aprende a usar tu celular paso a paso, registrate ya para aprender!',
    botonPrincipal: 'Crear cuenta',
    loginTexto: '¿Ya tienes cuenta? Inicia sesión'
  });
};

const usuarioInscribirCurso = (req, res) => {
    if (!req.body.moduloNombre) {
        return res.status(400).json({ "mensaje": "Debes seleccionar un módulo" });
    }
    res.status(201).json({
        "mensaje": "Módulo añadido a tu pantalla principal",
        "modulo": req.body.moduloNombre
    });
};

const usuarioBorrar = (req, res) => {
    res.status(200).json({
        "mensaje": "Módulo quitado de la vista principal",
        "moduloId": req.params.mid
    });
};

module.exports = {
    login,
    registro
};
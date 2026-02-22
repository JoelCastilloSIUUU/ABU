/*Login*/
const login = (req, res) => {
    res.render('login', { 
        title: 'Tu Guía Digital',
        subtitle: '¡Aprende a usar tu celular paso a paso y de una forma muy interactiva!',
        botonPrincipal: 'Iniciar sesión',
        registroTexto: '¿No tienes cuenta? Regístrate'
    });
};


/*Registro*/
const registro = (req, res) => {
  res.render('registro', { 
    title: 'Tu Guía Digital',
    subtitle: 'Aprende a usar tu celular paso a paso, registrate ya para aprender!',
    botonPrincipal: 'Crear cuenta',
    loginTexto: '¿Ya tienes cuenta? Inicia sesión'
  });
};

module.exports = {
    login,
    registro
};
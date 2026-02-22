/*Main Page*/
const principal = (req, res) => {
    res.render('principal', {
        title: '¡Hola, !',
        subtitle: 'Sigamos aprendiendo juntos',
        progeso: '0/6',
        seccionTitulo: 'Tu camino de aprendizaje',
        seccionDesc: 'Elige un tema para comenzar. Cada módulo tiene 3 ejercicios prácticos. Aprenderás haciendo, sin prisa y con ejemplos claros.',
        modulos: [
            { nombre: 'WhatsApp', desc: 'Envía mensajes, fotos y audios a tus seres queridos', icono: 'bi-chat-left-text-fill', color: '#25D366' },
            { nombre: 'YouTube', desc: 'Mira videos, busca contenido y guarda tus favoritos', icono: 'bi-play-btn-fill', color: '#FF0000' },
            { nombre: 'Cámara', desc: 'Toma fotos, guárdalas y compártelas fácilmente', icono: 'bi-camera-fill', color: '#833AB4' },
            { nombre: 'Navegador', desc: 'Busca información en internet de forma segura', icono: 'bi-globe', color: '#0D6EFD' },
            { nombre: 'Ajustes', desc: 'Personaliza tu celular y maneja la configuración', icono: 'bi-gear-fill', color: '#6C757D' },
            { nombre: 'Llamadas', desc: 'Realiza y recibe llamadas, gestiona tus contactos', icono: 'bi-telephone-fill', color: '#00BFA5' }
        ]
    });
};
            
module.exports = {
    principal,
    whatsapp,
    whatsappAgregarContacto,
    whatsappAgregarContactoPaso,
    whatsappAgregarContactoCompletado
};

/* WhatsApp module (prototype screens based on Figma) */

function whatsapp(req, res) {
    const done = req.query.done === 'agregar-contacto';
    const completedCount = done ? 1 : 0;
    res.render('whatsapp', {
        title: 'WhatsApp',
        completedCount,
        totalCount: 3,
        ejercicios: [
            {
                key: 'agregar-contacto',
                orden: 1,
                nombre: 'Agregar un contacto',
                desc: 'Aprende a añadir un contacto en WhatsApp',
                href: '/whatsapp/agregar-contacto',
                completed: done
            },
            {
                key: 'enviar-mensaje',
                orden: 2,
                nombre: 'Enviar un mensaje',
                desc: 'Aprende a enviar un mensaje de texto',
                href: '#',
                locked: !done
            },
            {
                key: 'compartir-foto',
                orden: 3,
                nombre: 'Compartir una foto',
                desc: 'Aprende a enviar una foto por WhatsApp',
                href: '#',
                locked: !done
            }
        ]
    });
}

function whatsappAgregarContacto(req, res) {
    res.render('whatsapp_agregar_contacto', {
        title: 'Agregar un contacto',
        modulo: 'WhatsApp',
        totalPasos: 3
    });
}

function whatsappAgregarContactoPaso(req, res) {
    const paso = Number(req.params.n);
    const totalPasos = 3;
    const steps = {
        1: {
            titulo: 'Abre WhatsApp',
            instruccion: 'Ahora vas a: ',
            accion: "Tocar el icono verde de WhatsApp",
            simulacion: 'Simulación: Tocar el icono verde de WhatsApp'
        },
        2: {
            titulo: 'Busca el botón de nuevo chat',
            instruccion: 'Ahora vas a: ',
            accion: 'Tocar el icono de mensaje en la esquina inferior derecha',
            simulacion: 'Simulación: Tocar el icono de mensaje en la esquina inferior derecha'
        },
        3: {
            titulo: "Selecciona 'Nuevo contacto'",
            instruccion: 'Ahora vas a: ',
            accion: "Tocar en 'Nuevo contacto'",
            simulacion: "Simulación: Tocar en 'Nuevo contacto'"
        }
    };

    // fallback safe
    const data = steps[paso] || steps[1];

    const nextHref = paso < totalPasos
        ? `/whatsapp/agregar-contacto/paso/${paso + 1}`
        : '/whatsapp/agregar-contacto/completado';

    res.render('whatsapp_agregar_contacto_paso', {
        title: 'Agregar un contacto',
        modulo: 'WhatsApp',
        paso,
        totalPasos,
        progressText: `${paso}/${totalPasos}`,
        ...data,
        nextHref
    });
}

function whatsappAgregarContactoCompletado(req, res) {
    res.render('whatsapp_agregar_contacto_completado', {
        title: 'Agregar un contacto',
        modulo: 'WhatsApp',
        continuarHref: '/whatsapp?done=agregar-contacto'
    });
}
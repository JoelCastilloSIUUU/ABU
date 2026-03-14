const mongoose = require('mongoose');

const dbURI = 'mongodb://jcastillo:123@cluster0-shard-00-00.df6hu8c.mongodb.net:27017,cluster0-shard-00-01.df6hu8c.mongodb.net:27017,cluster0-shard-00-02.df6hu8c.mongodb.net:27017/ProyectoApi?ssl=true&replicaSet=atlas-xxxxxx-shard-0&authSource=admin&retryWrites=true&w=majority';

mongoose.connect(dbURI);

mongoose.connection.on('connected', () => {
    console.log('¡Conectado a MongoDB Atlas con éxito!');
});

mongoose.connection.on('error', (err) => {
    console.log('Error de conexión a la nube:', err);
});

require('./usuarios');
require('./cursos');
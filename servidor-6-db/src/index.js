/* Definen los modulos o librerias que necesitaremos en el proyecto 
en este caso sera solo empress 
*/
const express = require('express');
const routes = require('./db/controller/routerController.js');
const morgan = require('morgan');
const config = require('./config/config.js');

/* Definen los objetos del sistema o propiedades del sistema */
const app = express();

// Settings
app.set('port', config.app.port);
app.use(morgan('dev'));
app.use(routes);

/* En cuarto lugar se define el hilo del sistema, 
el cual escuchara cualquier comunicacion que llegue,
por url al servidor */
app.listen(app.get('port'), () => {
    // entregaremos por consola un mensaje para identificar, si levanto el servidor
    console.log(`Servicio levantado: http://localhost:${app.get('port')}`);
});

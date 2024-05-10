// En primer lugar se definen los modulos 
// o librerias que necesitaremos en el proyecto
// en este caso sera solo empress
const express = require('express');

// en segundo lugar se definen los objetos 
// del sistema o propiedades del sistema
const app = express();
const port = 5000;

// en tercer lugar se definen las rutas o 
// funciones que se van a ejecutar
app.get('/', (req, res) => {
  res.send('Hello World!');
});

// en cuarto lugar se define el hilo del 
// sistema, el cual escuchara cualquier 
// comunicacion que llegue por url al servidor
app.listen(port, () => {
    // le entregaremos por consola un mensaje para identificar 
    // si el servicio se levanto
    console.log(`Servicio levantador: http://localhost:${port}`);
});

const { Router } = require('express');
const ruta = Router();

ruta.get('/', (req, res) => {
    res.send('ruta raiz');
});

ruta.get('/alternativa', (req, res) => {
    res.send('ruta alternativa');
});

module.exports = ruta;

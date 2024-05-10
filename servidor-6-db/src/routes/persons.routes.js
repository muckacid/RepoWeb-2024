const { Router } = require('express');
const personController = require('../db/controller/PersonController.js');
const ruta = Router();

ruta.get('/', (req, res) => {
    const lista = personController.getAll()
        .then((persons) => {
            res.send(persons);
        })
    console.log(lista)
});

ruta.get('/:id', (req, res) => {
    console.log(params.id)
    const lista = personController.getOneBy(1)
        .then((persons) => {
            res.send(persons);
        })
    console.log(lista)
});

module.exports = ruta;

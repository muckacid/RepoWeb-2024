const { Router } = require('express');
const persons = require('../../routes/persons.routes.js');

const rutas = Router();

rutas.use(persons);

module.exports = rutas;

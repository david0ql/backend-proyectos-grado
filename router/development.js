const express = require('express');
const UserValidation = require('../classes/response_user_validation');
const development = express.Router();
const { validacionUsuario, obtenerIdea, ideaTomada } = require('../helpers/helpers');
const { myValidacion } = require('../models/ideas_tomadas_get');
// Our middleware to verify correct Entity and data

development.use(function timeLog(req, res, next) {
  next();
});

development.get('/ideasTomadas', async (req, res) => {
  const rta = await ideaTomada();
  res.json(rta);
  });

development.get('/obtenerIdeas', async (req, res) => {
  const rta = await obtenerIdea();
  res.json(rta);
});

development.get('/validacionUsuario', async (req, res) => {
const validacion = await myValidacion(req.query.email);
res.json(validacion)
});

module.exports = {
    development
}

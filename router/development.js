const express = require('express');
const development = express.Router();
const { validacionUsuario, obtenerIdea, ideaTomada } = require('../helpers/helpers');

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
  const rta = await validacionUsuario();
  res.json(rta);
});

module.exports = {
    development
}

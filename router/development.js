const express = require('express');
const development = express.Router();
const { check } = require('express-validator');
const { validarCampos } = require('../middlewares/validar-campos');
const { myValidacion } = require('../models/ideas_tomadas_get');
const { todasIdeas } = require('../models/todas_ideas_get');
// Our middleware to verify correct Entity and data

development.use(function timeLog(req, res, next) {
  next();
});

development.get('/ideasTomadas', async (req, res) => {
  const rta = await ideaTomada();
  res.json(rta);
  });

development.get('/obtenerIdeas',
[
check ('email', 'El correo es obligatorio').isEmail(),
validarCampos
],
todasIdeas);


development.get('/validacionUsuario',
[
  check('email', 'El correo es obligatorio').isEmail(),   
  validarCampos
],
myValidacion);

module.exports = {
    development
}

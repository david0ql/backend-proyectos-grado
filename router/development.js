const express = require('express');
const development = express.Router();
const { check } = require('express-validator');
const { obtenerCart } = require('../helpers/helpers');
const { insertCart } = require('../helpers/helpers');
const { deleteCart } = require('../helpers/helpers');
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

//CART 
//TODO:MIDDLEWARE  
development.get('/cart', async (req,res ) => {
const rta_cart = await obtenerCart (req.query.correo);
res.json(rta_cart);
});

development.post ('/cart', async (req,res)=> {
const rta = await insertCart(req.body.correo, req.body.id_idea );
res.json(rta);
});

development.delete ('/cart', async (req,res) => {
  const rta = await deleteCart(req.body.id_carrito)
  res.json(rta);
});


module.exports = {
    development
}

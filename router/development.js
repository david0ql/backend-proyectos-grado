const express = require('express');
const development = express.Router();
const { check } = require('express-validator');
const { obtenerCart,mrInsertCart,deleteCart, obtenerFav, insertFav, deleteFav, ideaTomada } = require('../helpers/helpers');
const { validarCampos } = require('../middlewares/validar-campos');
const { myValidacion, todasIdeas, ideaTomadaModel, cartModel, cartModel_post, cartModel_delete, favModel, favMode_delete, favModel_insert } = require('../models/models');
// Our middleware to verify correct Entity and data

development.use(function timeLog(req, res, next) {
  next();
});

development.get('/ideasTomadas', [
  check ('correo', 'El correo es obligatorio').isEmail(),
  validarCampos,
],
ideaTomadaModel);


development.get('/obtenerIdeas',
[
check ('correo', 'El correo es obligatorio').isEmail(),
validarCampos
],
todasIdeas);


development.get('/validacionUsuario',
[
  check('correo', 'El correo es obligatorio').isEmail(),   
  validarCampos
],
myValidacion);

//CART 

development.get('/cart',
[
  check('email', 'El correo es obligatorio').isEmail(),
  validarCampos
],
cartModel);

development.post ('/cart', 
[
check('email', 'El correo es obligatorio').isEmail(),
  validarCampos
],
cartModel_post);


development.delete ('/cart', 
[

  check('carrito_id', 'El identificador carrito es necesario ').isNumeric().isEmpty().not(),
  validarCampos

],
cartModel_delete);


//IDEAS FAV
development.get('/favorites', 
[
  check('email', 'El correo es obligatorio').isEmail(),
  validarCampos
],
favModel);


development.delete('/favorites',
[

  check('carrito_id', 'El identificador carrito es necesario ').isNumeric().isEmpty().not(),
  validarCampos

],
favMode_delete);

development.post ('/favorites',
[  
  check('email', 'El correo es obligatorio').isEmail(), 
  check('carrito_id', 'El identificador carrito es necesario ').isNumeric().isEmpty().not(),
  validarCampos

],
favModel_insert);

module.exports = {
    development
}

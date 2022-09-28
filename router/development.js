const express = require('express');
const development = express.Router();

// middleware that is specific to this router
development.use(function timeLog(req, res, next) {
  next();
});

development.get('/ideasTomadas', function(req, res) {
  res.send('Birds home page');
});

development.get('/obtenerIdeas', function(req, res) {
  res.send('About birds');
});

development.get('/validacionUsuario', function(req, res) {
    res.send('About birds');
});

module.exports = {
    development
}
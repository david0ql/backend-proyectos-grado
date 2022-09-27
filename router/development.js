const express = require('express');
const development = express.Router();

// middleware that is specific to this router
development.use(function timeLog(req, res, next) {
  next();
});
// define the home page route
development.get('/', function(req, res) {
  res.send('Birds home page');
});
// define the about route
development.get('/about', function(req, res) {
  res.send('About birds');
});

module.exports = {
    development
}

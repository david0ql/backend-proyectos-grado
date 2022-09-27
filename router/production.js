const express = require('express');
const production = express.Router();

// middleware that is specific to this router
production.use(function timeLog(req, res, next) {
  next();
});
// define the home page route
production.get('/', function(req, res) {
  res.send('Birds home page');
});
// define the about route
production.get('/about', function(req, res) {
  res.send('About birdssass');
});

module.exports = {
    production
}

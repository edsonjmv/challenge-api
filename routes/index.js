var express = require('express');
var router = express.Router();
const favoritesControllers = require('./../controllers/index.js');

router
  .get('/favorites', favoritesControllers.getFavorites)
  .post('/favorites', favoritesControllers.postFavorite)
  .put('/favorites', favoritesControllers.deleteFavorite);

module.exports = router;

const router = require('express').Router();
const controller = require('../controller/search');

router.route('/search')
  .get(controller.getRecipes);
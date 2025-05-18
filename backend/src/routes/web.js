const express = require('express');
const homeController = require('../controllers/homeControllers');

const router = express.Router();

const initWebRoutes = (app) => {
  // Home routes
  router.get('/', homeController.getHomePage);

  return app.use('/', router);
}

module.exports = initWebRoutes;
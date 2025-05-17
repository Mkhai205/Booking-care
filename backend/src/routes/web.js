import express from 'express';
import homeController from '../controllers/homeControllers';


const router = express.Router();

const initWebRoutes = (app) => {
  // GET home page
  router.get('/', (req, res) => {
    res.send('home.ejs');
  });

  router.get('/home', homeController.getHomePage);

  return app.use('/', router);
}

export default initWebRoutes;
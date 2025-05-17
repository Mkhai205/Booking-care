import express from 'express';
import homeController from '../controllers/homeControllers';
import userController from '../controllers/userController';

const router = express.Router();

const initWebRoutes = (app) => {
  // Home routes
  router.get('/', homeController.getHomePage);
  
  // User routes
  router.get('/api/users', userController.getAllUsers);
  router.get('/api/users/:id', userController.getUserById);
  router.post('/api/users', userController.createUser);
  router.put('/api/users/:id', userController.updateUser);
  router.delete('/api/users/:id', userController.deleteUser);

  return app.use('/', router);
}

export default initWebRoutes;
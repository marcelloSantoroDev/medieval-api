import express from 'express';
// import usersController from '../controllers/usersController.functionals';
import UsersController from '../controllers/UsersController';

const router = express.Router();

const usersController = new UsersController();

router.post('/', usersController.login);

export default router;
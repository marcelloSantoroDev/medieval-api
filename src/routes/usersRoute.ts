import express from 'express';
// import usersController from '../controllers/usersController';
import UsersController from '../controllers/usersController';

const router = express.Router();

const usersController = new UsersController();

router.post('/', usersController.create);

export default router;
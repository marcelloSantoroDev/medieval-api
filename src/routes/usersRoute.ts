import express from 'express';
// import usersController from '../controllers/usersController.functionals';
import UsersController from '../controllers/UsersController';
import connection from '../models/connection';
import UsersModel from '../models/UsersModel';
import UsersService from '../services/UsersService';

const router = express.Router();

const usersModel = new UsersModel(connection);
const usersService = new UsersService(usersModel);
const usersController = new UsersController(usersService);

router.post('/', usersController.create);

export default router;
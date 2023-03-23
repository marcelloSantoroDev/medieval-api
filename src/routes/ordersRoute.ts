import express from 'express';
// import ordersController from '../controllers/ordersController.functionals';
import OrdersController from '../controllers/OrdersController';
import tokenValidator from '../middlewares/TokenValidator';
import connection from '../models/connection';
import OrdersModel from '../models/OrdersModel';
import ProductsModel from '../models/ProductsModel';
import OrdersService from '../services/OrdersService';

const router = express.Router();

const productsModel = new ProductsModel(connection);
const ordersModel = new OrdersModel(connection);
const ordersService = new OrdersService(ordersModel, productsModel);
const ordersController = new OrdersController(ordersService);

router.get('/', ordersController.getAll);
router.post('/', tokenValidator, ordersController.create);

export default router;
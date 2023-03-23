import express from 'express';
// import productsController from '../controllers/productsController.functionals';
import ProductsController from '../controllers/ProductsController';
import connection from '../models/connection';
import ProductsModel from '../models/ProductsModel';
import ProductsService from '../services/ProductsService';

const router = express.Router();

const productsModel = new ProductsModel(connection);
const productsService = new ProductsService(productsModel);
const productsController = new ProductsController(productsService);

router.post('/', productsController.create);
router.get('/', productsController.getAll);

export default router;
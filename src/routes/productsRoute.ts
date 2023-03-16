import express from 'express';
// import productsController from '../controllers/productsController';
import ProductsController from '../controllers/productsController';

const router = express.Router();

const productsController = new ProductsController();

router.post('/', productsController.create);
router.get('/', productsController.getAll);

export default router;
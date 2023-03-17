import express from 'express';
// import ordersController from '../controllers/ordersController.functionals';
import OrdersController from '../controllers/OrdersController';
import tokenValidator from '../middlewares/TokenValidator';

const router = express.Router();

const ordersController = new OrdersController();

router.get('/', ordersController.getAll);
router.post('/', tokenValidator, ordersController.create);

export default router;
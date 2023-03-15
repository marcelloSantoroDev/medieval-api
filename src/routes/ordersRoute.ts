import express from 'express';
import ordersController from '../controllers/ordersController';
import tokenValidator from '../middlewares/tokenValidator';

const router = express.Router();

router.get('/', ordersController.getAll);
router.post('/', tokenValidator, ordersController.create);

export default router;
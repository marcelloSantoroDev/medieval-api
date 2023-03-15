import express from 'express';
import ordersController from '../controllers/ordersController';

const router = express.Router();

router.get('/', ordersController.getAll);

export default router;
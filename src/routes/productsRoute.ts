import express from 'express';
import productsController from '../controllers/productsController';

const router = express.Router();

router.post('/', productsController.create);
router.get('/', productsController.getAll);

export default router;
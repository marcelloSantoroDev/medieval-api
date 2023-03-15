import express from 'express';

import productsRoute from './productsRoute';
import usersRoute from './usersRoute';
import ordersRoute from './ordersRoute';
import loginRoute from './loginRoute';

const router = express.Router();

router.use('/products', productsRoute);

router.use('/users', usersRoute);

router.use('/orders', ordersRoute);

router.use('/login', loginRoute);

export default router;
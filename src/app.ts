import express from 'express';
import productsController from './controllers/productsController';
import usersController from './controllers/usersController';
import ordersController from './controllers/ordersController';

const app = express();

app.use(express.json());

app.post('/products', productsController.create);
app.get('/products', productsController.getAll);
app.post('/users', usersController.create);
app.get('/orders', ordersController.getAll);

export default app;

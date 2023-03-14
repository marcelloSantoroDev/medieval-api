import express from 'express';
import productsController from './controllers/productsController';
import usersController from './controllers/usersController';

const app = express();

app.use(express.json());

app.post('/products', productsController.create);
app.get('/products', productsController.getAll);
app.post('/users', usersController.create);

export default app;

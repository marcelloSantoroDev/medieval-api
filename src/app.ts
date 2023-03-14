import express from 'express';
import productsController from './controllers/productsController';

const app = express();

app.use(express.json());

app.post('/products', productsController.create);
app.get('/products', productsController.getAll);

export default app;

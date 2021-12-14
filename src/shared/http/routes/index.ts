import { Router } from 'express';
import productsRouter from '@modules/modules/products/routes/products.routes';
import usersRouter from '@modules/modules/users/routes/users.routes';

const routes = Router();

routes.use('/products', productsRouter);
routes.use('/users', usersRouter);

routes.get('/', (request, response) => {
  return response.json({ message: 'Hello Dev!' });
});

export default routes;

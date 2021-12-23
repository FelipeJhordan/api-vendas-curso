import { Router } from 'express';
import productsRouter from '@modules/modules/products/routes/products.routes';
import usersRouter from '@modules/modules/users/routes/users.routes';
import sessionsRouter from '@modules/modules/users/routes/sesssions.routes';
import passwordRouter from '@modules/modules/users/routes/password.routes';
import profileRouter from '@modules/modules/users/routes/profile.routes';
const routes = Router();

routes.use('/products', productsRouter);
routes.use('/users', usersRouter);
routes.use('/sessions', sessionsRouter);
routes.use('/password', passwordRouter);
routes.use('/profile', profileRouter);

routes.get('/', (request, response) => {
  return response.json({ message: 'Hello Dev!' });
});

export default routes;

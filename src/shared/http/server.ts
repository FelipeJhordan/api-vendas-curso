import express, { NextFunction, Request, Response } from 'express';
import cors from 'cors';
import routes from './routes';
import interceptorError from './interceptors/error';

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);

app.use(interceptorError);

app.listen(3333, () => {
  console.log('Server started on port 3333! 😁');
});

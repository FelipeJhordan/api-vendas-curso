import 'reflect-metadata';
import 'dotenv/config';
import 'express-async-errors';
import express from 'express';
import cors from 'cors';
import { errors } from 'celebrate';
import { pagination } from 'typeorm-pagination';
import routes from './routes';
import interceptorError from './interceptors/error';
import rateLimiter from './interceptors/rateLimiter';
import '@shared/infra/typeorm';
import '@shared/container';
import uploadConfig from '@config/upload';

const app = express();

app.use(cors());
app.use(express.json());
app.use(rateLimiter);
app.use(pagination);
app.use('/files', express.static(uploadConfig.directory));
app.use(routes);
app.use(errors());

app.use(interceptorError);

app.listen(3333, () => {
  console.log('Server started on port 3333! 😁');
});

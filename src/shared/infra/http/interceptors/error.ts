import AppError from '@shared/errors/AppError';
import { NextFunction, Request, Response } from 'express';

const interceptorError = (
  error: Error,
  request: Request,
  response: Response,
  next: NextFunction,
) => {
  if (error instanceof AppError) {
    return response.status(error.statusCode).json({
      status: 'error',
      message: error.message,
    });
  }
  console.log(error);
  return response.status(500).json({
    status: 'error',
    message: 'Internal server error',
  });
};

export default interceptorError;

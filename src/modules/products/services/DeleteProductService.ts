import { ProductRepository } from '../typeorm/repositories/ProductsRepository';
import { getCustomRepository } from 'typeorm';
import AppError from '@shared/errors/AppError';

interface IRequest {
  id: string;
}

export default class DeleteProductService {
  public async execute({ id }: IRequest): Promise<void> {
    const productsRepository = getCustomRepository(ProductRepository);

    const product = productsRepository.findOne(id);

    if (!product) {
      throw new AppError('Product not found.');
    }

    await productsRepository.delete(id);
  }
}

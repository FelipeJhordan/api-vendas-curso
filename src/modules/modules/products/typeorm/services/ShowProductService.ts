import { ProductRepository } from '../repositories/ProductsRepository';
import { getCustomRepository } from 'typeorm';
import Product from '../entities/Product';
import AppError from '@shared/errors/AppError';

interface IRequest {
  id: string;
}

export default class ShowProductService {
  public async execute({ id }: IRequest): Promise<Product | undefined> {
    const productsRepository = getCustomRepository(ProductRepository);

    const product = productsRepository.findOne(id);

    if (!product) {
      throw new AppError('Product not found.');
    }
    return product;
  }
}

import { ProductRepository } from '../typeorm/repositories/ProductsRepository';
import { getCustomRepository } from 'typeorm';
import Product from '../typeorm/entities/Product';
import AppError from '@shared/errors/AppError';

interface IRequest {
  id: string;
}

export default class ShowProductService {
  public async execute({ id }: IRequest): Promise<Product | undefined> {
    const productsRepository = getCustomRepository(ProductRepository);

    const product = await productsRepository.findOne(id);
    if (!product) {
      throw new AppError('Product not found.');
    }
    return product;
  }
}
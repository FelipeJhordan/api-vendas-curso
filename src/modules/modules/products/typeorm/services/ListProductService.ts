import { ProductRepository } from './../repositories/ProductsRepository';
import { getCustomRepository } from 'typeorm';
import Product from '../entities/Product';

export default class ListProductService {
  public async execute(): Promise<Product[]> {
    const productsRepository = getCustomRepository(ProductRepository);

    const products = await productsRepository.find();

    return products;
  }
}

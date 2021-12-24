import AppError from '@shared/errors/AppError';
import Customer from '../typeorm/entities/Customer';
import CustomerRepository from '../typeorm/repositories/CustomerRepository';
import { getCustomRepository } from 'typeorm';
interface IRequest {
  customer_id: string;
}

class ShowCustomerService {
  public async execute({ customer_id }: IRequest): Promise<Customer> {
    const customersRepository = getCustomRepository(CustomerRepository);
    const customer = await customersRepository.findById(customer_id);

    if (!customer) throw new AppError('Customer not found.');

    return customer;
  }
}

export default ShowCustomerService;

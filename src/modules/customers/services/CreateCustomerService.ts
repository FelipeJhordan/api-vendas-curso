import CustomerRepository from '../typeorm/repositories/CustomerRepository';
import Customer from '../typeorm/entities/Customer';
import { getCustomRepository } from 'typeorm';

interface IRequest {
  name: string;
  email: string;
}

class CreateCustomerService {
  public async execute({ name, email }: IRequest): Promise<Customer> {
    const customersRepository = getCustomRepository(CustomerRepository);
    const customer = customersRepository.create({
      name,
      email,
    });
    await customersRepository.save(customer);

    return customer;
  }
}

export default CreateCustomerService;

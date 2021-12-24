import { Request, Response } from 'express';
import CreateCustomerService from '../services/CreateCustomerService';
import ShowCustomerService from '../services/ShowCustomerService';
import ListCustomerService from '../services/ListCustomerService';
import UpdateCustomerService from '../services/UpdateCustomerService';
import DeleteCustomerService from '../services/DeleteCustomerService';

export default class CustomersController {
  public async index(request: Request, response: Response): Promise<Response> {
    const listCustomers = new ListCustomerService();

    const customers = await listCustomers.execute();

    return response.json(customers);
  }

  public async show(request: Request, response: Response): Promise<Response> {
    const { id: customer_id } = request.params;

    const showCustomer = new ShowCustomerService();

    const customer = await showCustomer.execute({ customer_id });
    return response.json(customer);
  }

  public async create(request: Request, response: Response): Promise<Response> {
    const { name, email } = request.body;

    const createCustomer = new CreateCustomerService();

    const customer = await createCustomer.execute({ name, email });

    return response.json(customer);
  }

  public async update(request: Request, response: Response): Promise<Response> {
    const { name, email } = request.body;
    const { id } = request.params;
    const updateCustomer = new UpdateCustomerService();

    const customer = await updateCustomer.execute({
      id,
      name,
      email,
    });

    return response.json(customer);
  }

  public async delete(request: Request, response: Response): Promise<Response> {
    const { id: customer_id } = request.params;

    const deleteCustomer = new DeleteCustomerService();

    await deleteCustomer.execute({ customer_id });

    return response.json([]);
  }
}

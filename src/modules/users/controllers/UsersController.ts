import { hash } from 'bcryptjs';
import { Request, Response } from 'express';
import CreateUserService from '../services/CreateUserService';
import ListUserService from '../services/ListUserService';
export default class UsersController {
  public async index(request: Request, response: Response): Promise<Response> {
    const listUserService = new ListUserService();
    const users = await listUserService.execute();

    return response.json(users);
  }

  public async create(request: Request, response: Response): Promise<Response> {
    const { name, email, password } = request.body;

    const createUserService = new CreateUserService();

    const hashedPassword = await hash(password, 8);

    const user = await createUserService.execute({
      name,
      email,
      password: hashedPassword,
    });

    return response.json(user);
  }
}

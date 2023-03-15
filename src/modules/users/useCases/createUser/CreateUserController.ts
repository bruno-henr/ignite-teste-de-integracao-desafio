import { Request, Response } from 'express';
import { container } from 'tsyringe';

import { CreateUserUseCase } from './CreateUserUseCase';

export class CreateUserController {
  constructor(
    private createUserUseCase: CreateUserUseCase
  ) {}
  
  async execute(request: Request, response: Response) {
    const { name, email, password } = request.body;

    const user = await this.createUserUseCase.execute({
      name,
      email,
      password
    });

    return response.status(201).send();
  }
}

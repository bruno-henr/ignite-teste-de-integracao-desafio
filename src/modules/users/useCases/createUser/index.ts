
import { UsersRepository } from '../../../../modules/users/repositories/UsersRepository';
import { CreateUserController } from './CreateUserController'
import { CreateUserUseCase } from './CreateUserUseCase'

const useCase = new CreateUserUseCase(
    new UsersRepository()
)
const createUserController = new CreateUserController(useCase)

export { createUserController }
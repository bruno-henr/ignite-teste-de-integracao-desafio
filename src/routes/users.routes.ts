import { Router } from 'express';

import { createUserController } from '../modules/users/useCases/createUser';

const usersRouter = Router();

usersRouter.post('/', createUserController.execute);

export { usersRouter };

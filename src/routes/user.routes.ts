import { Router } from "express";
import * as UserController from '../controllers/user.controllers';

const userRoutes = Router();

userRoutes.post('/users', UserController.createUser);
userRoutes.get('/users/:id', UserController.getUserById);
userRoutes.put('/users/:id', UserController.updateUser);
userRoutes.delete('/users/:id', UserController.deleteUser);

export default userRoutes;

import { Router } from "express";
import * as CarTypeController from '../controllers/car.controllers';

const carRouter = Router();

carRouter.post('/cartypes', CarTypeController.createCarType);
carRouter.get('/cartypes', CarTypeController.getAllCarTypes);
carRouter.get('/cartypes/:id', CarTypeController.getCarTypeById);
carRouter.put('/cartypes/:id', CarTypeController.updateCarType);
carRouter.delete('/cartypes/:id', CarTypeController.deleteCarType);

export default carRouter;

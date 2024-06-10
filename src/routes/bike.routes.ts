import { Router } from "express";
import * as BikeTypeController from '../controllers/bike.controllers';

const bikeRouter = Router();

bikeRouter.post('/bikeTypes', BikeTypeController.createBikeType);
bikeRouter.get('/bikeTypes', BikeTypeController.getAllBikeTypes);
bikeRouter.get('/bikeTypes/:id', BikeTypeController.getBikeTypeById);
bikeRouter.put('/bikeTypes/:id', BikeTypeController.updateBikeType);
bikeRouter.delete('/bikeTypes/:id', BikeTypeController.deleteBikeType);

export default bikeRouter;

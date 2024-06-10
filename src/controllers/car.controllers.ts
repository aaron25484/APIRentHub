import { Request, Response } from 'express';
import { CarTypeModel } from '../models/car';

export const createCarType = async (req: Request, res: Response) => {
  try {
    const carType = await CarTypeModel.create(req.body);
    res.status(201).json(carType);
  } catch (error) {
    res.status(500).json({ error: 'Error creating car type' });
  }
};

export const getAllCarTypes = async (req: Request, res: Response) => {
  try {
    const carTypes = await CarTypeModel.find();
    res.status(200).json(carTypes);
    console.log(carTypes);
  } catch (error) {
    res.status(500).json({ error: 'Error fetching car types' });
    console.log(error);
  }
};

export const getCarTypeById = async (req: Request, res: Response) => {
  try {
    const carType = await CarTypeModel.findById(req.params.id);
    res.status(200).json(carType);
  } catch (error) {
    res.status(500).json({ error: 'Error fetching car type' });
  }
};

export const updateCarType = async (req: Request, res: Response) => {
  try {
    const carType = await CarTypeModel.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.status(200).json(carType);
  } catch (error) {
    res.status(500).json({ error: 'Error updating car type' });
  }
};

export const deleteCarType = async (req: Request, res: Response) => {
  try {
    await CarTypeModel.findByIdAndDelete(req.params.id);
    res.status(204).send();
  } catch (error) {
    res.status(500).json({ error: 'Error deleting car type' });
  }
};

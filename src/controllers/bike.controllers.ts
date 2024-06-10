import { Request, Response } from 'express';
import { BikeTypeModel } from '../models/bike';

export const createBikeType = async (req: Request, res: Response) => {
  try {
    const bikeType = await BikeTypeModel.create(req.body);
    res.status(201).json(bikeType);
  } catch (error) {
    res.status(500).json({ error: 'Error creating bike type' });
  }
};

export const getAllBikeTypes = async (req: Request, res: Response) => {
  try {
    const bikeTypes = await BikeTypeModel.find();
    res.status(200).json(bikeTypes);
  } catch (error) {
    res.status(500).json({ error: 'Error fetching bike types' });
  }
};

export const getBikeTypeById = async (req: Request, res: Response) => {
  try {
    const bikeType = await BikeTypeModel.findById(req.params.id);
    res.status(200).json(bikeType);
  } catch (error) {
    res.status(500).json({ error: 'Error fetching bike type' });
  }
};

export const updateBikeType = async (req: Request, res: Response) => {
  try {
    const bikeType = await BikeTypeModel.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.status(200).json(bikeType);
  } catch (error) {
    res.status(500).json({ error: 'Error updating bike type' });
  }
};

export const deleteBikeType = async (req: Request, res: Response) => {
  try {
    await BikeTypeModel.findByIdAndDelete(req.params.id);
    res.status(204).send();
  } catch (error) {
    res.status(500).json({ error: 'Error deleting bike type' });
  }
};

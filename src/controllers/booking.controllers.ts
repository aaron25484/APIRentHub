import { Request, Response } from 'express';
import { BookingModel } from '../models/booking';

export const createBooking = async (req: Request, res: Response) => {
  try {
    const { userInformation, vehicleType, startDate, endDate } = req.body;

    if (!userInformation || !vehicleType || !startDate || !endDate) {
      throw new Error('Missing fields in the request body');
    }

    const existingBooking = await BookingModel.findOne({
      vehicleType,
      $or: [
        {
          startDate: { $lt: endDate },
          endDate: { $gte: startDate },
        },
        {
          startDate: { $lt: startDate },
          endDate: { $gte: endDate },
        },
      ],
    });

    if (existingBooking) {
      throw new Error('Booking for the same vehicle and overlapping time already exists');
    }

    const booking = await BookingModel.create({
      user: userInformation._id,
      vehicleType,
      startDate,
      endDate,
    });

    console.log(booking);
    res.status(201).json(booking);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error creating booking'});
  }
};


export const getBookingById = async (req: Request, res: Response) => {
  try {
    const booking = await BookingModel.findById(req.params.id);
    res.status(200).json(booking);
  } catch (error) {
    res.status(500).json({ error: 'Error fetching booking' });
  }
};

export const getAllBookingsByUser = async (req: Request, res: Response) => {
  try {
    const userId = req.params.userId;
    const bookings = await BookingModel.find({ 'userInformation._id': userId });
    res.status(200).json(bookings);
  } catch (error) {
    res.status(500).json({ error: 'Error fetching bookings for the user' });
  }
};

export const updateBooking = async (req: Request, res: Response) => {
  try {
    const booking = await BookingModel.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.status(200).json(booking);
  } catch (error) {
    res.status(500).json({ error: 'Error updating booking' });
  }
};

export const deleteBooking = async (req: Request, res: Response) => {
  try {
    await BookingModel.findByIdAndDelete(req.params.id);
    res.status(204).send();
  } catch (error) {
    res.status(500).json({ error: 'Error deleting booking' });
  }
};

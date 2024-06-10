import { Router } from "express";
import * as BookingController from '../controllers/booking.controllers';

const bookingRouter = Router();

bookingRouter.post('/bookings', BookingController.createBooking);
bookingRouter.get('/bookings/:id', BookingController.getBookingById);
bookingRouter.get('/bookings/user/:userId', BookingController.getAllBookingsByUser);
bookingRouter.put('/bookings/:id', BookingController.updateBooking);
bookingRouter.delete('/bookings/:id', BookingController.deleteBooking);

export default bookingRouter;

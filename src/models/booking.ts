import { Document, Schema, Types, model } from "mongoose";
import { IUserDocument } from "./user";
import { ICarTypeDocument } from "./car";
import { IBikeTypeDocument } from "./bike";

export interface IVehicle {
  name: string;
}

export interface IUserInformation {
  name: string;
  email: string;
  password: string;
  vehicles: Types.Array<IVehicle>;
}

export interface IBookingDocument extends Document {
  user: IUserDocument["_id"];
  vehicleType: ICarTypeDocument["_id"] | IBikeTypeDocument["_id"];
  startDate: Date;
  endDate: Date;

}

const vehicleSchema = new Schema<IVehicle>(
  {
    name: { type: String, required: true },
  },
  { _id: false }
);

const userInformationSchema = new Schema<IUserInformation>({
  name: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true },
  vehicles: [vehicleSchema],
});

const bookingSchema = new Schema<IBookingDocument>(
  {
    user: { type: Schema.Types.ObjectId, ref: "User", required: true },
    vehicleType: { type: Schema.Types.ObjectId, required: true, refPath: "vehicles" },
    startDate: { type: Date, required: true },
    endDate: { type: Date, required: true },
  },
  { timestamps: true, versionKey: false }
);

export const BookingModel = model<IBookingDocument>("Booking", bookingSchema);
